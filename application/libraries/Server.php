<?php

date_default_timezone_set('Asia/Dhaka');

class Server
{
	private $access_lifetime = 3600;
	function __construct($config = array())
	{
		$CI = &get_instance();
		$this->storage = new OAuth2\Storage\Pdo(array('dsn' => $CI->db->dsn, 'username' => $CI->db->username, 'password' => $CI->db->password));
		if ($CI->input->post('access_lifetime') && intval((int) $CI->input->post('access_lifetime')) > 3600) {
			$this->access_lifetime = intval((int) $CI->input->post('access_lifetime'));
		}
		$this->server = new OAuth2\Server($this->storage, array('allow_implicit' => true, 'id_lifetime' => $this->access_lifetime, 'access_lifetime' => $this->access_lifetime));
		$this->request = OAuth2\Request::createFromGlobals();
		$this->response = new OAuth2\Response();
	}

	public function client_credentials()
	{
		$this->server->addGrantType(new OAuth2\GrantType\ClientCredentials($this->storage, array("allow_credentials_in_request_body" => true)));
		$this->server->handleTokenRequest($this->request)->send();
	}

	public function password_credentials()
	{
		$this->server->addGrantType(new OAuth2\GrantType\UserCredentials($this->storage, array("always_issue_new_refresh_token" => true, "unset_refresh_token_after_use" => true, "refresh_token_lifetime" => $this->access_lifetime)));
		$this->server->handleTokenRequest($this->request)->send();
	}

	public function refresh_token()
	{
		$this->server->addGrantType(new OAuth2\GrantType\RefreshToken($this->storage, array("always_issue_new_refresh_token" => true, "unset_refresh_token_after_use" => true, "refresh_token_lifetime" => $this->access_lifetime)));
		$this->server->handleTokenRequest($this->request)->send();
	}

	public function require_scope($scope = "")
	{
		if (!$this->server->verifyResourceRequest($this->request, $this->response, $scope)) {
			$this->server->getResponse()->send();
			die;
		}
		return $this->server->verifyResourceRequest($this->request, $this->response, $scope);
	}
	public function check_client_id()
	{
		if (!$this->server->validateAuthorizeRequest($this->request, $this->response)) {
			$this->response->send();
			die;
		}
		return $this->server->validateAuthorizeRequest($this->request, $this->response);
	}
	public function authorize($is_authorized)
	{
		$this->server->addGrantType(new OAuth2\GrantType\AuthorizationCode($this->storage));
		$this->server->handleAuthorizeRequest($this->request, $this->response, $is_authorized);
		if ($is_authorized) {
			$code = substr($this->response->getHttpHeader('Location'), strpos($this->response->getHttpHeader('Location'), 'code=') + 5, 40);
			header("Location: " . $this->response->getHttpHeader('Location'));
		}
		$this->response->send();
	}
	public function authorization_code()
	{
		$this->server->addGrantType(new OAuth2\GrantType\AuthorizationCode($this->storage));
		$this->server->handleTokenRequest($this->request)->send();
	}
	public function token()
	{
		return $this->server->getAccessTokenData(OAuth2\Request::createFromGlobals());
	}
}
