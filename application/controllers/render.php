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
		<div id="product" class="page">
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
		<div id="contract" class="page">
			<div class="header">Contract<span data-step='contract' class="glyphicon glyphicon-edit edit-button"></span></div>
			<div class="content">
				<div class="unit-container">
					<div class="caption">Contract No</div>
					<div id="render-contract_no" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Contract Date</div>
					<div id="render-contract_initiate_date" class="value"></div>
				</div>
				<!--
				<div class="unit-container">
					<div class="caption">Date of Agreement</div>
					<div id="render-contract_agreement_date" class="value"></div>
				</div>
				-->
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
			<div class="header">Import Permit<span data-step='import_permit' class="glyphicon glyphicon-edit edit-button"></span></div>
			<div class="content">
				<div class="unit-container">
					<div class="caption">Import Permit No</div>
					<div id="render-import_permit_no" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Import Permit Date</div>
					<div id="render-import_permit_date" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Import Permit Copy</div>
					<div id="render-import_permit_copy" class="value"></div>
				</div>
			</div>
		</div>
		<?php
	}
	public function lc(){
		?>
		<div id="lc" class="page">
			<div class="header">LC<span data-step='lc' class="glyphicon glyphicon-edit edit-button"></span></div>
			<div class="content">
				<div class="unit-container">
					<div class="caption">LC No</div>
					<div id="render-lc_no" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Issue Date</div>
					<div id="render-lc_issue_date" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">LC Type</div>
					<div id="render-lc_type" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Opening Bank</div>
					<div id="render-lc_opening_bank" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Receiving Bank</div>
					<div id="render-lc_receiving_bank" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">LC Copy</div>
					<div id="render-lc_copy" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Maturity Notification</div>
					<div id="render-lc_maturity_notification" class="value"></div>
				</div>
			</div>
		</div>
		<?php
	}
	public function shipment(){
		?>
		<div id="shipment" class="page">
			<div class="header">Shipment<span data-step="shipment" class="glyphicon glyphicon-edit edit-button"></span></div>
			<div class="content">
				<div class="unit-container">
					<div class="caption">Date of Shipment</div>
					<div id="render-shipment_date" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Shipment Type</div>
					<div id="render-shipment_type" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Partial Shipment</div>
					<div id="render-shipment_partial" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Transshipment</div>
					<div id="render-shipment_transshipment" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Port of Loading</div>
					<div id="render-shipment_loading_port" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Port of Discharge</div>
					<div id="render-shipment_discharge_port" class="value"></div>
				</div>
			</div>
		</div>
		<?php
	}
	public function document(){
		?>
		<div id="document" class="page">
			<div class="header">Documents<span data-step='document' class="glyphicon glyphicon-edit edit-button"></span></div>
			<div class="content">
				<div class="unit-container document">
					<div class="caption">Commercial Invoice</div>
					<div id="render-document_commercial_invoice" class="value"></div>
				</div>
				<div class="unit-container document">
					<div class="caption">Packing List</div>
					<div id="render-document_packing_list" class="value"></div>
				</div>
				<hr>
				<br/>
				<div class="unit-container document">
					<div class="caption">Bill of Lading</div>
					<div id="render-document_lading_bill" class="value"></div>
				</div>
				<div class="unit-container document">
					<div class="caption">Phytosanitary Certificate</div>
					<div id='render-document_phytosanitary_certificate' class="value"></div>
				</div>
				<hr>
				<br/>
				<div class="unit-container document">
					<div class="caption">Origin Certificate</div>
					<div id='render-document_origin_certificate' class="value"></div>
				</div>
				<div class="unit-container document">
					<div class="caption">Shipment Advice</div>
					<div id='render-document_shipment_advice' class="value"></div>
				</div>
				<hr>
				<br/>
				<div class="unit-container" style='display:inline-block;width:45%;'>
					<div class="caption">Controller Letter</div>
					<div id='render-document_controller_letter' class="value"></div>
				</div>
				<div class="unit-container" style='display:inline-block;width:45%;'>
					<div class="caption">Fumigation Letter</div>
					<div id='render-document_fumigation_letter' class="value"></div>
				</div>
			</div>
		</div>
		<?php
	}
	public function transshipment(){
		?>
		<div id="transshipment" class="page">
			<div class="header">Transshipment<span data-step="transshipment" class="glyphicon glyphicon-edit edit-button"></span></div>
			<div class="content">
				<div class="unit-container">
					<div class="caption">Original Document Arrival</div>
					<div id="render-transshipment_original_document_arrival" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Payment Notification</div>
					<div id="render-transshipment_payment_notification" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Vessel Track No</div>
					<div id="render-transshipment_vessel_track_no" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Transshipment Date</div>
					<div id="render-transshipment_date" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Transshipment Port</div>
					<div id="render-transshipment_port" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Buyer Notification</div>
					<div id="render-transshipment_buyer_notification" class="value"></div>
				</div>
			</div>
		</div>
		<?php
	}
	public function port(){
		?>
		<div id="port" class="page">
			<div class="header">Port<span data-step='port' class="glyphicon glyphicon-edit edit-button"></span></div>
			<div class="content">
				<div class="unit-container">
					<div class="caption">Buyer's C & F</div>
					<div id='render-port_buyer_cnf' class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Clearance Document</div>
					<div id='render-port_clearance_document' class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Invoice Weight</div>
					<div id="render-port_invoice_weight" class="value"></div>
					<div id="render-port_invoice_weight_unit" class="value dependent"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Invoice Amount</div>
					<div id="render-port_invoice_amount" class="value"></div>
				</div>
			</div>
		</div>
		<?php
	}
	public function controller(){
		?>
		<div id="controller" class="page">
			<div class="header">Controller<span data-step='controller' class="glyphicon glyphicon-edit edit-button"></span></div>
			<div class="content">
				<div class="unit-container">
					<div class="caption">Controller Company</div>
					<div id="render-controller_company" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Weight Finalization Area</div>
					<div id="render-controller_weight_finalization_area" class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Final Weight</div>
					<div id="render-controller_final_weight" class="value"></div>
					<div id="render-controller_final_weight_unit" class="value dependent"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Landing Report</div>
					<div id='render-controller_landing_report' class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Claim Weight</div>
					<div id='render-controller_claim_weight' class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Claim Amount</div>
					<div id='render-controller_claim_amount' class="value"></div>
				</div>
			</div>
		</div>
		<?php
	}
	public function payment(){
		?>
		<div id="payment" class="page">
			<div class="header">Payment<span data-step='payment' class="glyphicon glyphicon-edit edit-button"></span></div>
			<div class="content">
				<div class="unit-container">
					<div class="caption">Supplier Clearance</div>
					<div id='render-payment_supplier_clearance' class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Receiving Date</div>
					<div id='render-payment_receiving_date' class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Late Payment</div>
					<div id='render-payment_late_payment' class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Payment Document</div>
					<div id='render-payment_payment_document' class="value"></div>
				</div>
				<div class="unit-container">
					<div class="caption">Commission Amount</div>
					<div id='render-payment_commission_amount' class="value"></div>
				</div>
			</div>
		</div>
		<?php
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */