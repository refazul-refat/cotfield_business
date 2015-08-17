<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Modals extends CI_Controller {

	public function bootstrap(){
		?>
		<div id="bootstrap-modal" class="modal fade">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title">Project</h4></div>
					<div class="modal-body">
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Project ID</button>
							</div>
							<input id="project_name" type="text" class="form-control">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Project Description</button>
							</div>
							<input id="project_description" type="text" class="form-control">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Customer</button>
							</div>
							<div>
								<!--
								<select id="customer" class="form-control" name="customer">
									<option value='1'>Asia Composite Mills Ltd/ RMT Spinning Mills Ltd</option>
									<option value='2'>Badar Spinning Mills Ltd/ M.M Spinning Mills Ltd</option>
									<option value='3'>Fariha Spinning Mills</option>
									<option value='4'>Hajee Hashem Spinning Mills Ltd</option>
									<option value='5'>Mozaffar Hossain Spinning Mills</option>
									<option value='6'>Naheed Group</option>
									<option value='7'>Glory Spinning Ltd</option>
									<option value='8'>Pacific Spinning Mills Ltd/ ARM Trading</option>
									<option value='9'>Pakiza Spinning Mills</option>
									<option value='10'>R.K. Spinning Mills Ltd</option>
									<option value='11'>Shajahan Spinning Mills Ltd</option>
									<option value='12'>Sheema Spinning Mills Ltd</option>
									<option value='13'>Shirin Spinning Mills Ltd/ AB-R Spinning Mills Ltd</option>
									<option value='14'>Youth Spinning Mills Ltd</option>
									<option value='15'>Hajrat Amanat Shah Spinning Mills Ltd</option>
									<option value='16'>Al-Haj Karim Textile Mills Ltd</option>
									<option value='17'>Shanta Enterprise</option>
									<option value='18'>Tamishna Spinning Mills Ltd</option>
									<option value='19'>Alauddin Spinning Mills Ltd (ATM)</option>
									<option value='20'>Advance Trading</option>
									<option value='21'>Rahmat Spinning Mills Ltd</option>
									<option value='22'>Square Textile Ltd</option>
									<option value='23'>Otto Spinning Ltd</option>
									<option value='24'>ATM/ Top Spinning Mills Ltd</option>
									<option value='25'>NZ Textile Mills Ltd</option>
								</select>
								-->
								<input type='text' id='customers-list' class='form-control'/>
								<script>
								  $(function() {
								  	$.ajax({
								  		url:'http://api.cotfield.com/v1/customers?token=xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z',
								  		method:'GET',
								  		dataType:'json',
								  		statusCode:{
								  			200:function(response){
								  				$( "#customers-list" ).autocomplete({
												  source: response
												});
								  			}
								  		}
								  	});
								  });
								</script>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Supplier</button>
							</div>
							<div>
								<!--
								<select id="supplier" class="form-control" name="supplier">
									<option value='1'>Olam International Ltd</option>
									<option value='2'>Paul Rain hart AG. Switzerland</option>
									<option value='3'>Dhancot Fiber (PVT) Kolkata</option>
									<option value='4'>Sunny Trexim (PVT) Ltd Kolkata</option>
									<option value='5'>DP Cotton, Gujarat</option>
									<option value='6'>Raghunath Agrotech, Adilabad</option>
									<option value='7'>Manjeet Cotton (PVT) Ltd Aurangabad</option>
									<option value='8'>Agrocorp International PTE Ltd</option>
									<option value='9'>Panasian Impex Privet Ltd</option>
									<option value='10'>COTTON CORPORATION OF INDIAN </option>
									<option value='11'>CA COTTON LLP, UK</option>
									<option value='12'>Bhadresh Trading Corporation</option>
									<option value='13'>Navjyot International</option>
									<option value='14'>Gujrat Cotton Corporation</option>
									<option value='15'>Parvin Group</option>
								</select>
								-->
								<input type='text' id='suppliers-list' class='form-control'/>
								<script>
								  $(function() {
								  	$.ajax({
								  		url:'http://api.cotfield.com/v1/suppliers?token=xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z',
								  		method:'GET',
								  		dataType:'json',
								  		statusCode:{
								  			200:function(response){
								  				$( "#suppliers-list" ).autocomplete({
												  source: response
												});
								  			}
								  		}
								  	});
								  });
								</script>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button class="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
						<button class="btn btn-primary" id="save-bootstrap" type="button" data-action="save">Save Changes</button>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
	public function product(){
		?>
		<div id="product-modal" class="modal fade">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title">Product</h4></div>
					<div class="modal-body">
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Product Name</button>
							</div>
							<input id="product_name" type="text" class="form-control" value='Raw Cotton'>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Product Origin</button>
							</div>
							<input id="product_origin" type="text" class="form-control" value=''>
							<!--
							<div>
								<select id="product_origin" class="form-control" name="product_origin">
									<option value="India">India</option>
									<option value="China">China</option>
									<option value="Australia">Australia</option>
									<option value="USA">USA</option>
									<option value="Pakistan">Pakistan</option>
									<option value="Brazil">Brazil</option>
									<option value="Uzbekistan">Uzbekistan</option>
									<option value="Turkey">Turkey</option>
									<option value="Argentina">Argentina</option>
									<option value="Turkmenistan">Turkmenistan</option>
								</select>
							</div>
							-->
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Product Quality</button>
							</div>
							<div>
								<input id="product_quality" class="form-control" name="product_quality"/>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Product Quantity</button>
							</div>
							<input id="product_quantity" type="text" class="form-control">
							<div class="input-group-btn">
								<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><span id="caption-product_unit_quantity">M/TON</span> <span class="caret"></span></button>
								<ul class="options dropdown-menu dropdown-menu-right" data-target="product_unit_quantity">
									<li class="item"><a data-value="MTON">MTON</a></li>
									<li class="item"><a data-value="LBS">LBS</a></li>
									<li class="item"><a data-value="KGS">KGS</a></li>
								</ul>
								<input id="product_unit_quantity" type="hidden" value='mton'>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Product Unit Price</button>
							</div>
							<input id="product_unit_price" type="text" class="form-control">
							<div class="input-group-btn">
								<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><span id="caption-product_unit_price_currency">USD</span> <span class="caret"></span></button>
								<ul class="options dropdown-menu dropdown-menu-right" data-target="product_unit_price_currency">
									<li class="item"><a data-value="USD">USD</a></li>
									<li class="item"><a data-value="USC">USC</a></li>
									<!--
									<li class="item"><a data-value="GBP">GBP</a></li>
									<li class="item"><a data-value="INR">INR</a></li>
									<li class="item"><a data-value="BDT">BDT</a></li>
									-->
								</ul>
								<input id="product_unit_price_currency" type="hidden" value="usd">
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button class="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
						<button class="btn btn-primary" id="save-product" type="button" data-action="save">Save Changes</button>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
	public function contract(){
		?>
		<div id="contract-modal" class="modal fade">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title">Contract</h4></div>
					<div class="modal-body">
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Contract No</button>
							</div>
							<input id="contract_no" type="text" class="form-control">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Contract Date</button>
							</div>
							<input id="contract_initiate_date" class="form-control" data-type="date" type="text">
						</div>
						<!--
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Date of Agreement</button>
							</div>
							<input id="contract_agreement_date" class="form-control" data-type="date" type="text">
						</div>
						-->
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Commission Rate</button>
							</div>
							<input id="contract_commission_rate" type="text" class="form-control">
							<div class="input-group-btn">
								<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><span id="caption-contract_commission_rate_unit">%</span> <span class="caret"></span></button>
								<ul class="options dropdown-menu dropdown-menu-right" data-target="contract_commission_rate_unit">
									<li class="item"><a data-value="%">%</a></li>
								</ul>
								<input id="contract_commission_rate_unit" type="hidden" value='%'>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Contract Copy</button>
							</div>
							<input id="contract_copy" name="contract_copy" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-contract_copy" action="http://api.cotfield.com/v1/upload" data-target="contract_copy">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
					</div>
					<div class="modal-footer">
						<button class="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
						<button class="btn btn-primary" id="save-contract" type="button" data-action="save">Save Changes</button>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
	public function import_permit(){
		?>
		<div id="import_permit-modal" class="modal fade">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title">Import Permit</h4></div>
					<div class="modal-body">
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Import Permit No</button>
							</div>
							<input id="import_permit_no" type="text" class="form-control">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Import Permit Date</button>
							</div>
							<input id="import_permit_date" class="form-control" data-type="date" type="text">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Import Permit Copy</button>
							</div>
							<input id="import_permit_copy" name="import_permit_copy" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-import_permit_copy" action="http://api.cotfield.com/v1/upload" data-target="import_permit_copy">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
					</div>
					<div class="modal-footer">
						<button class="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
						<button class="btn btn-primary" id="save-import_permit" type="button" data-action="save">Save Changes</button>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
	public function lc(){
		?>
		<div id="lc-modal" class="modal fade">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title">LC</h4></div>
					<div class="modal-body">
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">LC No</button>
							</div>
							<input id="lc_no" type="text" class="form-control">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Issue Date</button>
							</div>
							<input id="lc_issue_date" class="form-control" data-type="date" type="text">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">LC Type</button>
							</div>
							<div>
								<select id="lc_type" class="form-control" name="lc_type">
									<option value="Deferred LC">Deferred LC</option>
									<option value="Sight LC">Sight LC</option>
									<option value="Upas LC">Upas LC</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Opening Bank</button>
							</div>
							<div>
								<input type='text' id="lc_opening_bank" class="form-control" name="lc_opening_bank"/>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Receiving Bank</button>
							</div>
							<div>
								<input type='text' id="lc_receiving_bank" class="form-control" name="lc_receiving_bank"/>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">LC Copy</button>
							</div>
							<input id="lc_copy" name="lc_copy" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-lc_copy" action="http://api.cotfield.com/v1/upload" data-target="lc_copy">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
						<!--
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Maturity Notification</button>
							</div>
							<input id="lc_maturity_notification" class="form-control" data-type="date" type="text">
						</div>
						-->
					</div>
					<div class="modal-footer">
						<button class="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
						<button class="btn btn-primary" id="save-lc" type="button" data-action="save">Save Changes</button>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
	public function shipment(){
		?>
		<div id="shipment-modal" class="modal fade">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title">Shipment</h4></div>
					<div class="modal-body">
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Date of Shipment</button>
							</div>
							<input id="shipment_date" class="form-control" data-type="date" type="text">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Shipment Type</button>
							</div>
							<div>
								<select id="shipment_type" class="form-control" name="shipment_type">
									<option value="By Road">By Road</option>
									<option value="By Sea">By Sea</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Partial Shipment</button>
							</div>
							<div>
								<select id="shipment_partial" class="form-control" name="shipment_partial">
									<option value="Allowed">Allowed</option>
									<option value="Not Allowed">Not Allowed</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Transshipment</button>
							</div>
							<div>
								<select id="shipment_transshipment" class="form-control" name="shipment_transshipment">
									<option value="Allowed">Allowed</option>
									<option value="Not Allowed">Not Allowed</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Port of Loading</button>
							</div>
							<div>
								<input type='text' id="shipment_loading_port" class="form-control" name="shipment_loading_port"/>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Port of Discharge</button>
							</div>
							<div>
								<select id="shipment_discharge_port" class="form-control" name="shipment_discharge_port">
									<option value="Port of Chittagong">Port of Chittagong</option>
									<option value="Port of Mongla">Port of Mongla</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Document Arrival</button>
							</div>
							<input id="shipment_document_arrival" class="form-control" data-type="date" type="text">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Shipment Document</button>
							</div>
							<input id="shipment_document" name="shipment_document" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-shipment_document" action="http://api.cotfield.com/v1/upload" data-target="shipment_document">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Courier Details</button>
							</div>
							<input id="shipment_courier_details" type="text" class="form-control">
						</div>
					</div>
					<div class="modal-footer">
						<button class="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
						<button class="btn btn-primary" id="save-shipment" type="button" data-action="save">Save Changes</button>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
	public function document(){
		?>
		<div id="document-modal" class="modal fade">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title">Documents</h4></div>
					<div class="modal-body">
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Commercial Invoice</button>
							</div>
							<input id="document_commercial_invoice" name="document_commercial_invoice" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-document_commercial_invoice" action="http://api.cotfield.com/v1/upload" data-target="document_commercial_invoice">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Packing List</button>
							</div>
							<input id="document_packing_list" name="document_packing_list" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-document_packing_list" action="http://api.cotfield.com/v1/upload" data-target="document_packing_list">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Bill of Lading</button>
							</div>
							<input id="document_lading_bill" name="document_lading_bill" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-document_lading_bill" action="http://api.cotfield.com/v1/upload" data-target="document_lading_bill">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Phytosanitary Certificate</button>
							</div>
							<input id="document_phytosanitary_certificate" name="document_phytosanitary_certificate" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-document_phytosanitary_certificate" action="http://api.cotfield.com/v1/upload" data-target="document_phytosanitary_certificate">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Origin Certificate</button>
							</div>
							<input id="document_origin_certificate" name="document_origin_certificate" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-document_origin_certificate" action="http://api.cotfield.com/v1/upload" data-target="document_origin_certificate">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Shipment Advice</button>
							</div>
							<input id="document_shipment_advice" name="document_shipment_advice" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-document_shipment_advice" action="http://api.cotfield.com/v1/upload" data-target="document_shipment_advice">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Controller Letter</button>
							</div>
							<input id="document_controller_letter" name="document_controller_letter" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-document_controller_letter" action="http://api.cotfield.com/v1/upload" data-target="document_controller_letter">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Fumigation Letter</button>
							</div>
							<input id="document_fumigation_letter" name="document_fumigation_letter" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-document_fumigation_letter" action="http://api.cotfield.com/v1/upload" data-target="document_fumigation_letter">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
					</div>
					<div class="modal-footer">
						<button class="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
						<button class="btn btn-primary" id="save-document" type="button" data-action="save">Save Changes</button>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
	public function transshipment(){
		?>
		<div id="transshipment-modal" class="modal fade">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title">Transshipment</h4></div>
					<div class="modal-body">
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Original Document Arrival</button>
							</div>
							<input id="transshipment_original_document_arrival" class="form-control" data-type="date" type="text">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Payment Notification</button>
							</div>
							<input id="transshipment_payment_notification" class="form-control" data-type="date" type="text">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Vessel Track No</button>
							</div>
							<input id="transshipment_vessel_track_no" type="text" class="form-control">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Transshipment Date</button>
							</div>
							<input id="transshipment_date" class="form-control" data-type="date" type="text">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Transshipment Port</button>
							</div>
							<div>
								<select id="transshipment_port" class="form-control" name="transshipment_port">
									<option value="Port of Colombo">Port of Colombo</option>
									<option value="Port of Singapour">Port of Singapour</option>
									<option value="Port Klang">Port Klang</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Buyer Notification</button>
							</div>
							<input id="transshipment_buyer_notification" class="form-control" data-type="date" type="text">
						</div>
					</div>
					<div class="modal-footer">
						<button class="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
						<button class="btn btn-primary" id="save-transshipment" type="button" data-action="save">Save Changes</button>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
	public function port(){
		?>
		<div id="port-modal" class="modal fade">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title">Port</h4></div>
					<div class="modal-body">
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Buyer's C & F</button>
							</div>
							<input id="port_buyer_cnf" type="text" class="form-control">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Clearance Document</button>
							</div>
							<input id="port_clearance_document" name="port_clearance_document" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-port_clearance_document" action="http://api.cotfield.com/v1/upload" data-target="port_clearance_document">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Invoice Weight</button>
							</div>
							<input id="port_invoice_weight" type="text" class="form-control">
							<div class="input-group-btn">
								<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><span id="caption-final_weight_unit">Unit</span> <span class="caret"></span></button>
								<ul class="options dropdown-menu dropdown-menu-right" data-target="port_invoice_weight_unit">
									<li class="item"><a data-value="M/TONS">M/TONS</a></li>
									<li class="item"><a data-value="LBS">LBS</a></li>
									<li class="item"><a data-value="KGS">KGS</a></li>
								</ul>
								<input id="port_invoice_weight_unit" type="hidden">
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button class="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
						<button class="btn btn-primary" id="save-port" type="button" data-action="save">Save Changes</button>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
	public function controller(){
		?>
		<div id="controller-modal" class="modal fade">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title">Controller</h4></div>
					<div class="modal-body">
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Controller Company</button>
							</div>
							<input id="controller_company" type="text" class="form-control">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Weight Finalization Area</button>
							</div>
							<div>
								<select id="controller_weight_finalization_area" class="form-control" name="controller_weight_finalization_area">
									<option value="port">Port</option>
									<option value="warehouse">Warehouse</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Final Weight</button>
							</div>
							<input id="controller_final_weight" type="text" class="form-control">
							<div class="input-group-btn">
								<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><span id="caption-final_weight_unit">Unit</span> <span class="caret"></span></button>
								<ul class="options dropdown-menu dropdown-menu-right" data-target="final_weight_unit">
									<li class="item"><a data-value="M/TONS">M/TONS</a></li>
									<li class="item"><a data-value="LBS">LBS</a></li>
									<li class="item"><a data-value="KGS">KGS</a></li>
								</ul>
								<input id="controller_final_weight_unit" type="hidden">
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Landing Report</button>
							</div>
							<input id="controller_landing_report" name="controller_landing_report" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-controller_landing_report" action="http://api.cotfield.com/v1/upload" data-target="controller_landing_report">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
					</div>
					<div class="modal-footer">
						<button class="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
						<button class="btn btn-primary" id="save-controller" type="button" data-action="save">Save Changes</button>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
	public function payment(){
		?>
		<div id="payment-modal" class="modal fade">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title">Payment</h4></div>
					<div class="modal-body">
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Supplier Clearance</button>
							</div>
							<div>
								<select id="payment_supplier_clearance" class="form-control" name="supplier_clearance">
									<option value="Yes">Yes</option>
									<option value="No">No</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Receiving Date</button>
							</div>
							<input id="payment_receiving_date" class="form-control" data-type="date" type="text">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Late Payment</button>
							</div>
							<input id="payment_late_payment" class="form-control" data-type="date" type="text">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Buyer's Bank Payment</button>
							</div>
							<input id="payment_payment_document" name="payment_payment_document" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-payment_payment_document" action="http://api.cotfield.com/v1/upload" data-target="payment_payment_document">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
					</div>
					<div class="modal-footer">
						<button class="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
						<button class="btn btn-primary" id="save-payment" type="button" data-action="save">Save Changes</button>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
	public function customer()
	{
		?>
		<div class="modal fade" id="customer-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="myModalLabel">Customer</h4>
					</div>
					<div class="modal-body">
						<h6>Choose a Customer</h6>
						<select class="form-control" id="customer-list" name="customer"></select>
						<div style="height: 1px; background-color: #ccc; text-align: center;margin:24px 0px;">
							<span style="position:relative;background:#fff;top: -10px;padding: 0px 15px;font-size: 12px;color: #333;">
								Or
							</span>
						</div>
						<h6>Create a new Customer</h6>
						<div class="input-group">
							<span class="input-group-btn">
							<button class="btn btn-default" type="button">Name</button>
							</span>
							<input id='customer_name' type="text" class="form-control" placeholder="">
						</div><!-- /input-group -->
						<div class="input-group">
							<span class="input-group-btn">
							<button class="btn btn-default" type="button">Description</button>
							</span>
							<input id='customer_description' type="text" class="form-control" placeholder="">
						</div><!-- /input-group -->
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
						<button type="button" class="btn btn-primary" data-action="save">Save changes</button>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
	public function supplier(){
		?>
		<div class="modal fade" id="supplier-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="myModalLabel">Customer</h4>
					</div>
					<div class="modal-body">
						<h6>Choose a Supplier</h6>
						<select class="form-control" id="supplier-list" name="supplier"></select>
						<div style="height: 1px; background-color: #ccc; text-align: center;margin:24px 0px;">
							<span style="position:relative;background:#fff;top: -10px;padding: 0px 15px;font-size: 12px;color: #333;">
								Or
							</span>
						</div>
						<h6>Create a new Supplier</h6>
						<div class="input-group">
							<span class="input-group-btn">
							<button class="btn btn-default" type="button">Name</button>
							</span>
							<input id='supplier_name' type="text" class="form-control" placeholder="">
						</div><!-- /input-group -->
						<div class="input-group">
							<span class="input-group-btn">
							<button class="btn btn-default" type="button">Description</button>
							</span>
							<input id='supplier_description' type="text" class="form-control" placeholder="">
						</div><!-- /input-group -->
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
						<button type="button" class="btn btn-primary" data-action="save">Save changes</button>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
}

/* End of file modals.php */
/* Location: ./application/controllers/modals.php */
