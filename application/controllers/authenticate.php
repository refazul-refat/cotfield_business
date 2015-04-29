<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Authenticate extends CI_Controller {

	
	public function index()
	{
		if($this->input->get('token')){
			$this->load->library('encrypt');
			$key = 'super-secret-key';
			
			$this->load->library('session');
			$string = $this->encrypt->decode($this->input->get('token'), $key);
			$parts = explode(',',$string);
			if($parts[0]=='ok'){
				$this->session->set_userdata('uid',$parts[1]);
				$this->session->set_userdata('user',$parts[2]);
			}
		}
		header('Location:'.base_url());
		die();
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */