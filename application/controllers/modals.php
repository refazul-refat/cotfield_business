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
								<select id="customer" class="form-control" name="customer">
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Supplier</button>
							</div>
							<div>
								<select id="supplier" class="form-control" name="supplier"></select>
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
							<input id="product_name" type="text" class="form-control">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Product Type</button>
							</div>
							<div>
								<select id="product_type" class="form-control" name="product_type">
									<option value="type1">Type 1</option>
									<option value="type2">Type 2</option>
									<option value="type3">Type 3</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Product Origin</button>
							</div>
							<div>
								<select id="product_origin" class="form-control" name="product_origin">
									<option value="origina">Origin A</option>
									<option value="originb">Origin B</option>
									<option value="originc">Origin C</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Product Quality</button>
							</div>
							<div>
								<select id="product_quality" class="form-control" name="product_quality">
									<option value="sonkar6">Sankar 6</option>
									<option value="premium">Premium</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Product Quantity</button>
							</div>
							<input id="product_quantity" type="text" class="form-control">
							<div class="input-group-btn">
								<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><span id="caption-product_unit_quantity">Unit</span> <span class="caret"></span></button>
								<ul class="options dropdown-menu dropdown-menu-right" data-target="product_unit_quantity">
									<li class="item"><a data-value="mton">M/TON</a></li>
									<li class="item"><a data-value="lbs">LBS</a></li>
								</ul>
								<input id="product_unit_quantity" type="hidden">
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Product Unit Price</button>
							</div>
							<input id="product_unit_price" type="text" class="form-control">
							<div class="input-group-btn">
								<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><span id="caption-product_unit_price_currency">Unit</span> <span class="caret"></span></button>
								<ul class="options dropdown-menu dropdown-menu-right" data-target="product_unit_price_currency">
									<li class="item"><a data-value="usd">USD</a></li>
									<li class="item"><a data-value="gbp">GBP</a></li>
									<li class="item"><a data-value="inr">INR</a></li>
									<li class="item"><a data-value="bdt">BDT</a></li>
								</ul>
								<input id="product_unit_price_currency" type="hidden">
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
								<button class="btn btn-default" type="button">Contract Initiate Date</button>
							</div>
							<input id="contract_initiate_date" class="form-control" data-type="date" type="text">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Date of Agreement</button>
							</div>
							<input id="contract_agreement_date" class="form-control" data-type="date" type="text">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Commission Rate</button>
							</div>
							<input id="contract_commission_rate" type="text" class="form-control">
							<div class="input-group-btn">
								<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><span id="caption-contract_commission_rate_unit">%</span> <span class="caret"></span></button>
								<ul class="options dropdown-menu dropdown-menu-right" data-target="contract_commission_rate_unit">
									<li class="item"><a data-value="percent">%</a></li>
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
							<input id="import_permit_date" class="form-control date hasDatepicker" data-type="date" type="text">
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
							<input id="lc_issue_date" class="form-control date hasDatepicker" data-type="date" type="text">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">LC Type</button>
							</div>
							<div>
								<select id="lc_type" class="form-control" name="lc_type">
									<option value="a">A</option>
									<option value="b">B</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Opening Bank</button>
							</div>
							<div>
								<select id="lc_opening_bank" class="form-control" name="lc_opening_bank">
									<option value="dbbl">DBBL</option>
									<option value="hsbc">HSBC</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Receiving Bank</button>
							</div>
							<div>
								<select id="lc_receiving_bank" class="form-control" name="lc_receiving_bank">
									<option value="standard_chartered">Standard Chartered</option>
									<option value="brac">BRAC</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Maturity Notification</button>
							</div>
							<input id="maturity_notification" class="form-control date hasDatepicker" data-type="date" type="text">
						</div>
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
							<input id="shipment_date" class="form-control date hasDatepicker" data-type="date" type="text">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Shipment Type</button>
							</div>
							<div>
								<select id="shipment_type" class="form-control" name="shipment_type">
									<option value="road">By Road</option>
									<option value="air">By Air</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Partial Shipment</button>
							</div>
							<div>
								<select id="partial_shipment" class="form-control" name="partial_shipment">
									<option value="yes">Allowed</option>
									<option value="no">Not Allowed</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Transshipment</button>
							</div>
							<div>
								<select id="transshipment" class="form-control" name="transshipment">
									<option value="yes">Allowed</option>
									<option value="no">Not Allowed</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Port of Loading</button>
							</div>
							<div>
								<select id="loading_port" class="form-control" name="loading_port">
									<option value="a">A</option>
									<option value="b">B</option>
									<option value="c">C</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Port of Discharge</button>
							</div>
							<div>
								<select id="discharge_port" class="form-control" name="discharge_port">
									<option value="d">D</option>
									<option value="e">E</option>
								</select>
							</div>
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
							<input id="commercial_invoice" name="commercial_invoice" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-commercial_invoice" action="http://api.cotfield.com/v1/upload" data-target="commercial_invoice">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Packing List</button>
							</div>
							<input id="packing_list" name="packing_list" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-packing_list" action="http://api.cotfield.com/v1/upload" data-target="packing_list">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Bill of Lading</button>
							</div>
							<input id="lading_bill" name="lading_bill" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-lading_bill" action="http://api.cotfield.com/v1/upload" data-target="lading_bill">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Phytosanitary Certificate</button>
							</div>
							<input id="phytosanitary_certificate" name="phytosanitary_certificate" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-phytosanitary_certificate" action="http://api.cotfield.com/v1/upload" data-target="phytosanitary_certificate">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Origin Certificate</button>
							</div>
							<input id="origin_certificate" name="origin_certificate" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-origin_certificate" action="http://api.cotfield.com/v1/upload" data-target="origin_certificate">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Shipment Advice</button>
							</div>
							<input id="shipment_advice" name="shipment_advice" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-shipment_advice" action="http://api.cotfield.com/v1/upload" data-target="shipment_advice">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Controller Letter</button>
							</div>
							<input id="controller_letter" name="controller_letter" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-controller_letter" action="http://api.cotfield.com/v1/upload" data-target="controller_letter">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Fumigation Letter</button>
							</div>
							<input id="fumigation_letter" name="fumigation_letter" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-fumigation_letter" action="http://api.cotfield.com/v1/upload" data-target="fumigation_letter">
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
							<input id="original_document_arrival" class="form-control date hasDatepicker" data-type="date" type="text">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Payment Notification</button>
							</div>
							<input id="payment_notification" class="form-control date hasDatepicker" data-type="date" type="text">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Vessel Track No</button>
							</div>
							<input id="vessel_track_no" type="text" class="form-control">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Transshipment Date</button>
							</div>
							<input id="transshipment_date" class="form-control date hasDatepicker" data-type="date" type="text">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Transshipment Port</button>
							</div>
							<div>
								<select id="transshipment_port" class="form-control" name="transshipment_port">
									<option value="a">A</option>
									<option value="b">B</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Buyer Notification</button>
							</div>
							<input id="buyer_notification" class="form-control date hasDatepicker" data-type="date" type="text">
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
								<button class="btn btn-default" type="button">Buyer"s C&amp;F</button>
							</div>
							<input id="buyer_cnf" type="text" class="form-control">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Buyer"s Clearance</button>
							</div>
							<div>
								<select id="buyer_clearance" class="form-control" name="buyer_clearance">
									<option value="a">A</option>
									<option value="b">B</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Clearance Document</button>
							</div>
							<input id="clearance_document" name="clearance_document" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-clearance_document" action="http://api.cotfield.com/v1/upload" data-target="clearance_document">
								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
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
								<select id="weight_finalization_area" class="form-control" name="weight_finalization_area">
									<option value="port">Port</option>
									<option value="warehouse">Warehouse</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Final Weight</button>
							</div>
							<input id="final_weight" type="text" class="form-control">
							<div class="input-group-btn">
								<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><span id="caption-final_weight_unit">Unit</span> <span class="caret"></span></button>
								<ul class="options dropdown-menu dropdown-menu-right" data-target="final_weight_unit">
									<li class="item"><a data-value="lbs">LBS</a></li>
									<li class="item"><a data-value="kgs">KGS</a></li>
								</ul>
								<input id="final_weight_unit" type="hidden">
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Weight Claim</button>
							</div>
							<input id="weight_claim" type="text" class="form-control">
							<div class="input-group-btn">
								<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><span id="caption-weight_claim_unit">Unit</span> <span class="caret"></span></button>
								<ul class="options dropdown-menu dropdown-menu-right" data-target="weight_claim_unit">
									<li class="item"><a data-value="lbs">LBS</a></li>
									<li class="item"><a data-value="kgs">KGS</a></li>
								</ul>
								<input id="weight_claim_unit" type="hidden">
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Unit Price</button>
							</div>
							<input id="unit_price" type="text" class="form-control">
							<div class="input-group-btn">
								<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><span id="caption-unit_price_currency">Unit</span> <span class="caret"></span></button>
								<ul class="options dropdown-menu dropdown-menu-right" data-target="unit_price_currency">
									<li class="item"><a data-value="usd">USD</a></li>
									<li class="item"><a data-value="gbp">GBP</a></li>
									<li class="item"><a data-value="inr">INR</a></li>
									<li class="item"><a data-value="bdt">BDT</a></li>
								</ul>
								<input id="unit_price_currency" type="hidden">
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Claim Amount</button>
							</div>
							<input id="claim_amount" type="text" class="form-control">
							<div class="input-group-btn">
								<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><span id="caption-claim_amount_unit">Unit</span> <span class="caret"></span></button>
								<ul class="options dropdown-menu dropdown-menu-right" data-target="claim_amount_unit">
									<li class="item"><a data-value="lbs">LBS</a></li>
									<li class="item"><a data-value="kgs">KGS</a></li>
								</ul>
								<input id="claim_amount_unit" type="hidden">
							</div>
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
								<select id="supplier_clearance" class="form-control" name="supplier_clearance">
									<option value="a">A</option>
									<option value="b">B</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Commission Amount</button>
							</div>
							<input id="commission_amount" type="text" class="form-control">
							<div class="input-group-btn">
								<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><span id="caption-commission_amount_unit">Unit</span> <span class="caret"></span></button>
								<ul class="options dropdown-menu dropdown-menu-right" data-target="commission_amount_unit">
									<li class="item"><a data-value="lbs">LBS</a></li>
									<li class="item"><a data-value="kgs">KGS</a></li>
								</ul>
								<input id="commission_amount_unit" type="hidden">
							</div>
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Receiving Date</button>
							</div>
							<input id="receiving_date" class="form-control date hasDatepicker" data-type="date" type="text">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Late Payment</button>
							</div>
							<input id="late_payment" class="form-control date hasDatepicker" data-type="date" type="text">
						</div>
						<div class="input-group">
							<div class="input-group-btn">
								<button class="btn btn-default" type="button">Buyer"s Bank Payment</button>
							</div>
							<input id="buyer_bank_payment" name="buyer_bank_payment" type="hidden">
							<form class="dropzone dz-clickable" id="dropzone-buyer_bank_payment" action="http://api.cotfield.com/v1/upload" data-target="buyer_bank_payment">
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