<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Render extends CI_Controller {
	public function bootstrap(){
		?>
		<div id="bootstrap" class="page">
			<div class="header">Project<span class="glyphicon glyphicon-edit edit-button"></span></div>
			<div class="content">
				<div class="unit-container">
					<div class="caption">Project ID</div>
					<div class="value project_name"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Project Description</div>
					<div class="value project_description"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Customer</div>
					<div class="value customer_name"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Supplier</div>
					<div class="value supplier_name"></div>
				</div>
			</div>
		</div>
		<?php
	}
	public function product(){
		?>
		<div>
			<div class="header">Product<span data-step='product' class="glyphicon glyphicon-edit edit-button"></span></div>
			<div class="content">
				<div class="unit-container">
					<div class="caption">Product Name</div>
					<div id="render-product_name" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Product Origin</div>
					<div id="render-product_origin" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Product Quality</div>
					<div id="render-product_quality" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Product Quantity</div>
					<div id="render-product_quantity" class="value"></div>
					<div id="render-product_unit_quantity" class="value dependent"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Product Unit Price</div>
					<div id="render-product_unit_price" class="value"></div>
					<div id="render-product_unit_price_currency" class="value dependent"></div>
				</div>
			</div>
		</div>
		<?php
	}
	public function contract(){
		?>
		<div>
			<div class="header">Contract<span data-step='contract' class="glyphicon glyphicon-edit edit-button"></span></div>
			<div class="content">
				<div class="unit-container">
					<div class="caption">Contract No</div>
					<div id="render-contract_no" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Contract Initiate Date</div>
					<div id="render-contract_initiate_date" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Date of Agreement</div>
					<div id="render-contract_agreement_date" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Commission Rate</div>
					<div id="render-contract_commission_rate" class="value"></div>
					<div id="render-contract_commission_rate_unit" class="value dependent"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Contract Copy</div>
					<div id="render-contract_copy" class="value"></div>
				</div>
			</div>
		</div>
		<?php
	}
	public function import_permit(){
		?>
		<div id="import_permit" class="page">
			<div class="header">Import Permit<span class="glyphicon glyphicon-edit edit-button"></span></div>
			<div class="content">
				<div class="unit-container">
					<div class="caption">Import Permit No</div>
					<div class="value no"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Import Permit Date</div>
					<div class="value date"></div>
				</div>
			</div>
		</div>
		<?php
	}
	public function lc(){
		?>
		<div id="lc" class="page">
			<div class="header">LC<span class="glyphicon glyphicon-edit edit-button"></span></div>
			<div class="content">
				<div class="unit-container">
					<div class="caption">LC No</div>
					<div class="value no"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Issue Date</div>
					<div class="value issue_date"></div>
				</div>
				<div class="unit-container">
					<div class="caption">LC Type</div>
					<div class="value type"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Opening Bank</div>
					<div class="value opening_bank"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Receiving Bank</div>
					<div class="value receiving_bank"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Maturity Notification</div>
					<div class="value maturity_notification"></div>
				</div>
			</div>
		</div>
		<?php
	}
	public function shipment(){
		?>
		<div id="shipment" class="page">
			<div class="header">Shipment<span class="glyphicon glyphicon-edit edit-button"></span></div>
			<div class="content">
				<div class="unit-container">
					<div class="caption">Date of Shipment</div>
					<div class="value date"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Shipment Type</div>
					<div class="value type"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Partial Shipment</div>
					<div class="value partial_shipment"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Transshipment</div>
					<div class="value transshipment"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Port of Loading</div>
					<div class="value loading_port"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Port of Discharge</div>
					<div class="value discharge_port"></div>
				</div>
			</div>
		</div>
		<?php
	}
	public function document(){
		?>
		<div id="document" class="page">
			<div class="header">Documents<span class="glyphicon glyphicon-edit edit-button"></span></div>
			<div class="content">
				<div class="unit-container">
					<div class="caption">Commercial Invoice</div>
					<div class="value commercial_invoice"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Packing List</div>
					<div class="value packing_list"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Bill of Lading</div>
					<div class="value lading_bill"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Phytosanitary Certificate</div>
					<div class="value phytosanitary_certificate"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Origin Certificate</div>
					<div class="value origin_certificate"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Shipment Advice</div>
					<div class="value shipment_advice"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Controller Letter</div>
					<div class="value controller_letter"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Fumigation Letter</div>
					<div class="value fumigation_letter"></div>
				</div>
			</div>
		</div>
		<?php
	}
	public function transshipment(){
		?>
		<div id="transshipment" class="page">
			<div class="header">Transshipment<span class="glyphicon glyphicon-edit edit-button"></span></div>
			<div class="content">
				<div class="unit-container">
					<div class="caption">Original Document Arrival</div>
					<div class="value original_document_arrival"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Payment Notification</div>
					<div class="value payment_notification"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Vessel Track No</div>
					<div class="value vessel_track_no"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Transshipment Date</div>
					<div class="value date"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Transshipment Port</div>
					<div class="value port"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Buyer Notification</div>
					<div class="value buyer_notification"></div>
				</div>
			</div>
		</div>
		<?php
	}
	public function port(){
		?>
		<div id="port" class="page">
			<div class="header">Port<span class="glyphicon glyphicon-edit edit-button"></span></div>
			<div class="content">
				<div class="unit-container">
					<div class="caption">Buyer"s C&amp;F</div>
					<div class="value buyer_cnf"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Buyer"s Clearance</div>
					<div class="value buyer_clearance"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Clearance Document</div>
					<div class="value clearance_document"></div>
				</div>
			</div>
		</div>
		<?php
	}
	public function controller(){
		?>
		<div id="controller" class="page">
			<div class="header">Controller<span class="glyphicon glyphicon-edit edit-button"></span></div>
			<div class="content">
				<div class="unit-container">
					<div class="caption">Controller Company</div>
					<div class="value company"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Weight Finalization Area</div>
					<div class="value weight_finalization_area"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Final Weight</div>
					<div class="value final_weight"></div>
					<div class="value final_weight_unit dependent"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Weight Claim</div>
					<div class="value weight_claim"></div>
					<div class="value weight_claim_unit dependent"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Unit Price</div>
					<div class="value unit_price"></div>
					<div class="value unit_price_currency dependent"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Claim Amount</div>
					<div class="value claim_amount"></div>
					<div class="value claim_amount_unit dependent"></div>
					<div class="value landing_report dependent"></div>
				</div>
			</div>
		</div>
		<?php
	}
	public function payment(){
		?>
		<div id="payment" class="page">
			<div class="header">Payment<span class="glyphicon glyphicon-edit edit-button"></span></div>
			<div class="content">
				<div class="unit-container">
					<div class="caption">Supplier Clearance</div>
					<div class="value supplier_clearance"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Commission Amount</div>
					<div class="value commission_amount"></div>
					<div class="value commission_amount_unit dependent"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Receiving Date</div>
					<div class="value receiving_date"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Late Payment</div>
					<div class="value late_payment"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Buyer"s Bank Payment</div>
					<div class="value buyer_bank_payment"></div>
				</div>
			</div>
		</div>
		<?php
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */