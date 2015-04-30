<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Logout extends CI_Controller {
	public function index()
	{
		$this->session->unset_userdata('uid');
		header('Location:'.base_url());
		die();
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */