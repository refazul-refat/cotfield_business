var Config={
	bootstrap:{
		step:2,
		id:'bootstrap',
		caption:'Project',
		fields:{
			project_name:{class:'project_name',caption:'Project ID',save_id:'project_name',type:'string'},
			project_description:{class:'project_description',caption:'Project Description',save_id:'project_description',type:'string'},
			customer_name:{class:'customer_name',caption:'Customer',save_id:'customer',type:'select',source:'http://api.cotfield.com/v1/customers/'},
			supplier_name:{class:'supplier_name',caption:'Supplier',save_id:'supplier',type:'select',source:'http://api.cotfield.com/v1/suppliers/'}
		}
	},
	product:{
		step:3,
		id:'product',
		caption:'Product',
		fields:{
			product_name:{caption:'Product Name',save_id:'product_name',type:'string'},
			product_origin:{caption:'Product Origin',save_id:'product_origin',type:'select',options:{}},
			product_quality:{caption:'Product Quality',save_id:'product_quality',type:'select',options:{}},
			product_quantity:{caption:'Product Quantity',save_id:'product_quantity',type:'number'},
			product_unit_quantity:{save_id:'product_unit_quantity',type:'select',options:{}},
			product_unit_price:{caption:'Product Unit Price',save_id:'product_unit_price',type:'number'},
			product_unit_price_currency:{save_id:'product_unit_price_currency',type:'select',options:{}}
		}
	},
	contract:{
		step:4,
		id:'contract',
		caption:'Contract',
		fields:{
			contract_no:{caption:'Contract No',save_id:'contract_no',type:'string'},
			contract_initiate_date:{caption:'Contract Initiate Date',save_id:'contract_initiate_date',type:'date'},
			contract_agreement_date:{caption:'Date of Agreement',save_id:'contract_agreement_date',type:'date'},
			contract_commission_rate:{caption:'Commission Rate',save_id:'contract_commission_rate',type:'number'},
			contract_commission_rate_unit:{save_id:'contract_commission_rate_unit',type:'select',options:{'percent':{caption:'%'}}},
			contract_copy:{caption:'Contract Copy',save_id:'contract_copy',type:'document'}
		}
	},
	import_permit:{
		step:5,
		id:'import_permit',
		caption:'Import Permit',
		fields:{
			no:{class:'no',caption:'Import Permit No',save_id:'import_permit_no',type:'string'},
			date:{class:'date',caption:'Import Permit Date',save_id:'import_permit_date',type:'date'}
		}
	},
	lc:{
		step:6,
		id:'lc',
		caption:'LC',
		fields:{
			no:{class:'no',caption:'LC No',save_id:'lc_no',type:'string'},
			issue_date:{class:'issue_date',caption:'Issue Date',save_id:'lc_issue_date',type:'date'},
			type:{class:'type',caption:'LC Type',save_id:'lc_type',type:'select',options:{'a':{caption:'A'},'b':{caption:'B'}}},
			opening_bank:{class:'opening_bank',caption:'Opening Bank',save_id:'lc_opening_bank',type:'select',options:{'dbbl':{caption:'DBBL'},'hsbc':{caption:'HSBC'}}},
			receiving_bank:{class:'receiving_bank',caption:'Receiving Bank',save_id:'lc_receiving_bank',type:'select',options:{'standard_chartered':{caption:'Standard Chartered'},'brac':{caption:'BRAC'}}},
			maturity_notification:{class:'maturity_notification',caption:'Maturity Notification',save_id:'maturity_notification',type:'date'}
		}
	},
	shipment:{
		step:7,
		id:'shipment',
		caption:'Shipment',
		fields:{
			date:{class:'date',caption:'Date of Shipment',save_id:'shipment_date',type:'date'},
			type:{class:'type',caption:'Shipment Type',save_id:'shipment_type',type:'select',options:{road:{caption:'By Road'},air:{caption:'By Air'}}},
			partial_shipment:{class:'partial_shipment',caption:'Partial Shipment',save_id:'partial_shipment',type:'select',options:{yes:{caption:'Allowed'},no:{caption:'Not Allowed'}}},
			transshipment:{class:'transshipment',caption:'Transshipment',save_id:'transshipment',type:'select',options:{yes:{caption:'Allowed'},no:{caption:'Not Allowed'}}},
			loading_port:{class:'loading_port',caption:'Port of Loading',save_id:'loading_port',type:'select',options:{a:{caption:'A'},b:{caption:'B'},c:{caption:'C'}}},
			discharge_port:{class:'discharge_port',caption:'Port of Discharge',save_id:'discharge_port',type:'select',type:'select',options:{d:{caption:'D'},e:{caption:'E'}}}
		}
	},
	document:{
		step:8,
		id:'document',
		caption:'Documents',
		fields:{
			commercial_invoice:{class:'commercial_invoice',caption:'Commercial Invoice',save_id:'commercial_invoice',type:'document'},
			packing_list:{class:'packing_list',caption:'Packing List',save_id:'packing_list',type:'document'},
			lading_bill:{class:'lading_bill',caption:'Bill of Lading',save_id:'lading_bill',type:'document'},
			phytosanitary_certificate:{class:'phytosanitary_certificate',caption:'Phytosanitary Certificate',save_id:'phytosanitary_certificate',type:'document'},
			origin_certificate:{class:'origin_certificate',caption:'Origin Certificate',save_id:'origin_certificate',type:'document'},
			shipment_advice:{class:'shipment_advice',caption:'Shipment Advice',save_id:'shipment_advice',type:'document'},
			controller_letter:{class:'controller_letter',caption:'Controller Letter',save_id:'controller_letter',type:'document'},
			fumigation_letter:{class:'fumigation_letter',caption:'Fumigation Letter',save_id:'fumigation_letter',type:'document'}
		}
	},
	transshipment:{
		step:9,
		id:'transshipment',
		caption:'Transshipment',
		fields:{
			original_document_arrival:{class:'original_document_arrival',caption:'Original Document Arrival',save_id:'original_document_arrival',type:'date'},
			payment_notification:{class:'payment_notification',caption:'Payment Notification',save_id:'payment_notification',type:'date'},
			vessel_track_no:{class:'vessel_track_no',caption:'Vessel Track No',save_id:'vessel_track_no',type:'string'},
			date:{class:'date',caption:'Transshipment Date',save_id:'transshipment_date',type:'date'},
			port:{class:'port',caption:'Transshipment Port',save_id:'transshipment_port',type:'select',options:{a:{caption:'A'},b:{caption:'B'}}},
			buyer_notification:{class:'buyer_notification',caption:'Buyer Notification',save_id:'buyer_notification',type:'date'}
		}
	},
	port:{
		step:10,
		id:'port',
		caption:'Port',
		fields:{
			buyer_cnf:{class:'buyer_cnf',caption:'Buyer"s C&F',save_id:'buyer_cnf',type:'string'},
			buyer_clearance:{class:'buyer_clearance',caption:'Buyer"s Clearance',save_id:'buyer_clearance',type:'select',options:{a:{caption:'A'},b:{caption:'B'}}},
			clearance_document:{class:'clearance_document',caption:'Clearance Document',save_id:'clearance_document',type:'document'}
		}
	},
	controller:{
		step:11,
		id:'controller',
		caption:'Controller',
		fields:{
			company:{class:'company',caption:'Controller Company',save_id:'controller_company',type:'string'},
			weight_finalization_area:{class:'weight_finalization_area',caption:'Weight Finalization Area',save_id:'weight_finalization_area',type:'select',options:{port:{caption:'Port'},warehouse:{caption:'Warehouse'}}},
			final_weight:{class:'final_weight',caption:'Final Weight',save_id:'final_weight',type:'number'},
			final_weight_unit:{class:'final_weight_unit',save_id:'final_weight_unit',type:'select',options:{'lbs':{caption:'LBS'},'kgs':{caption:'KGS'}}},
			weight_claim:{class:'weight_claim',caption:'Weight Claim',save_id:'weight_claim',type:'number'},
			weight_claim_unit:{class:'weight_claim_unit',save_id:'weight_claim_unit',type:'select',options:{'lbs':{caption:'LBS'},'kgs':{caption:'KGS'}}},
			unit_price:{class:'unit_price',caption:'Unit Price',save_id:'unit_price',type:'number'},
			unit_price_currency:{class:'unit_price_currency',save_id:'unit_price_currency',type:'select',options:{'usd':{caption:'USD'},'gbp':{caption:'GBP'},'inr':{caption:'INR'},'bdt':{caption:'BDT'}}},
			claim_amount:{class:'claim_amount',caption:'Claim Amount',save_id:'claim_amount',type:'number'},
			claim_amount_unit:{class:'claim_amount_unit',save_id:'claim_amount_unit',type:'select',options:{'lbs':{caption:'LBS'},'kgs':{caption:'KGS'}}},
			landing_report:{class:'landing_report',save_id:'landing_report',type:'document'}
		}
	},
	payment:{
		step:12,
		id:'payment',
		caption:'Payment',
		fields:{
			supplier_clearance:{class:'supplier_clearance',caption:'Supplier Clearance',save_id:'supplier_clearance',type:'select',options:{a:{caption:'A'},b:{caption:'B'}}},
			commission_amount:{class:'commission_amount',caption:'Commission Amount',save_id:'commission_amount',type:'number'},
			commission_amount_unit:{class:'commission_amount_unit',save_id:'commission_amount_unit',type:'select',options:{'lbs':{caption:'LBS'},'kgs':{caption:'KGS'}}},
			receiving_date:{class:'receiving_date',caption:'Receiving Date',save_id:'receiving_date',type:'date'},
			late_payment:{class:'late_payment',caption:'Late Payment',save_id:'late_payment',type:'date'},
			buyer_bank_payment:{class:'buyer_bank_payment',caption:'Buyer"s Bank Payment',save_id:'buyer_bank_payment',type:'document'}
		}
	}
};