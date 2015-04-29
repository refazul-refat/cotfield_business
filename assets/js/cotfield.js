var token='xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z';
var api_base='http://api.cotfield.com/v1/';
var steps=['intro','customer','supplier','product','contract','import_permit','lc','shipment','document','transshipment','port','controller','payment'];
String.prototype.ucfirst = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
var Config={
	customer:{
		step:1,
		id:'customer',
		caption:'Customer',
		fields:{
			name:{class:'name',caption:'Customer Name',save_id:'customer_name',type:'string'},
			description:{class:'description',caption:'Customer Description',save_id:'customer_description',type:'string'}
		}
	},
	supplier:{
		step:2,
		id:'supplier',
		caption:'Supplier',
		fields:{
			name:{class:'name',caption:'Supplier Name',save_id:'supplier_name',type:'string'},
			description:{class:'description',caption:'Supplier Description',save_id:'supplier_description',type:'string'}
		}
	},
	product:{
		step:3,
		id:'product',
		caption:'Product',
		fields:{
			name:{class:'name',caption:'Product Name',save_id:'product_name',type:'string'},
			type:{class:'type',caption:'Product Type',save_id:'product_type',type:'select',options:{'type1':{caption:'Type 1'},'type2':{caption:'Type 2'},'type3':{caption:'Type 3'}}},
			origin:{class:'origin',caption:'Product Origin',save_id:'product_origin',type:'select',options:{'origina':{caption:'Origin A'},'originb':{caption:'Origin B'},'originc':{caption:'Origin C'}}},
			quantity:{class:'quantity',caption:'Product Quantity',save_id:'product_quantity',type:'number'},
			unit_quantity:{class:'unit_quantity',save_id:'product_unit_quantity',type:'select',options:{'lbs':{caption:'LBS'},'kgs':{caption:'KGS'}}},
			unit_price:{class:'unit_price',caption:'Product Unit Price',save_id:'product_unit_price',type:'number'},
			unit_price_currency:{class:'unit_price_currency',save_id:'product_unit_price_currency',type:'select',options:{'usd':{caption:'USD'},'gbp':{caption:'GBP'},'inr':{caption:'INR'},'bdt':{caption:'BDT'}}}
		}
	},
	contract:{
		step:4,
		id:'contract',
		caption:'Contract',
		fields:{
			no:{class:'no',caption:'Contract No',save_id:'contract_no',type:'string'},
			initiate_date:{class:'initiate_date',caption:'Contract Initiate Date',save_id:'contract_initiate_date',type:'date'},
			agreement_date:{class:'agreement_date',caption:'Date of Agreement',save_id:'contract_agreement_date',type:'date'},
			commission_rate:{class:'commission_rate',caption:'Commission Rate',save_id:'contract_commission_rate',type:'number'},
			commission_rate_unit:{class:'commission_rate_unit',save_id:'contract_commission_rate_unit',type:'select',options:{'lbs':{caption:'LBS'},'kgs':{caption:'KGS'}}},
			copy:{class:'copy',caption:'Contract Copy',save_id:'contract_copy',type:'document'}
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
			receiving_bank:{class:'receiving_bank',caption:'Receiving Bank',save_id:'lc_receiving_bank',type:'select',options:{'standard_chartered':{caption:'Standard Chartered'},'brac':{caption:'BRAC'}}}
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
var Project={
	create:function(a,callback){
		$.extend(a,{token:token});
		$.ajax({
			url:api_base+'projects',
			method:'POST',
			data:a,
			statusCode:{
				201:function(response){
					location.href=location.href.split('?')[0]+'?pid='+response.id;
					callback(response);
				}
			}
		});
	},
	load:function(a,callback){
		$('.overlay').show();
		$.ajax({
			url:api_base+'projects'+'/'+a+'?token='+token,
			method:'GET',
			dataType:'json',
			statusCode:{
				200:function(response){
					callback(response);
				}
			}
		});
	},
	render:function(a,target){
	
		$('#'+$(target).attr('id')+' .name').html(a.name);
		$('#'+$(target).attr('id')+' .description').html(a.description);
		$(target).siblings().remove();
		
		var current_step=a.current_step;
		var steps=[];
		
		for(var s=1;s<=current_step;s++){
			for(var i in Config){
				if(Config.hasOwnProperty(i)){
					if(Config[i].step==s){
						var p=$('<div>',{id:Config[i].id,class:'page'}).appendTo($(target).parent());
						var h=$('<div>',{class:'header'}).appendTo(p).text(Config[i].caption);
						var c=$('<div>',{class:'content'}).appendTo(p);
						for(var f in Config[i].fields){
							if(Config[i].fields.hasOwnProperty(f)){
								if(Config[i].fields[f].caption){
									var caption=$('<div>',{class:'caption'}).text(Config[i].fields[f].caption);
									var value=$('<div>',{class:'value '+Config[i].fields[f].class});
									var unit_container=$('<div>',{class:'unit-container'}).append(caption).append(value);
									$(c).append(unit_container);
								}
								else{
									var value=$('<div>',{class:'value '+Config[i].fields[f].class+' dependent'});
									$(c).children('.unit-container').last().append(value);
								}
							}
						}
						p.css('height',$(window).height());
						if(current_step>=s){
							steps.push(i);
							window[i.ucfirst()].load(a.id,function(response,t){
								window[t.ucfirst()].render(response,$('#'+Config[t].id));
								if(current_step==Config[t].step)Final.init(steps);
							});
						}
					}
				}
			}
		}
		if(current_step==0){
			Final.init(steps);
		}
	}
};

var Step=function(name,fields){
	this.name=name;
	this.fields=fields;
};
Step.prototype.load=function(a,callback){
	var that=this;
	$.ajax({
		url:api_base+'projects'+'/'+a+'/'+that.name+'?token='+token,
		method:'GET',
		dataType:'json',
		statusCode:{
			200:function(response){
				$.ajax({
					url:api_base+that.name+'s'+'/'+response.item_id+'?token='+token,
					method:'GET',
					dataType:'json',
					statusCode:{
						200:function(newresponse){
							console.log(newresponse);
							callback(newresponse,that.name);
						}
					}
				});
			}
		}
	});
};
Step.prototype.save=function(a,callback){
	var that=this;
	$.extend(a,{token:token});
	$.ajax({
		url:api_base+that.name+'s',
		method:'POST',
		data:a,
		statusCode:{
			201:function(response){
				callback(response);
			}
		}
	});
};
Step.prototype.assign=function(a,b,callback){
	var that=this;
	$.extend(a,{token:token});
	$.ajax({
		url:api_base+'projects/'+b+'/'+that.name,
		method:'POST',
		data:a,
		statusCode:{
			201:function(response){
				callback(response);
			}
		}
	});
};
Step.prototype.render=function(a,target){console.log(a);
	var that=this;
	var fields=that.fields;
	for(var i in fields){
		if(fields.hasOwnProperty(i)){
			var selector='#'+$(target).attr('id')+' .'+fields[i].class;
			console.log(selector,a[i]);
			$(selector).html(a[i]);
		}
	}
};
Step.prototype.loadAsOption=function(target){
	var that=this;
	$(target).html('');
	$.ajax({
		url:api_base+that.name+'s'+'?token='+token,
		method:'GET',
		dataType:'json',
		statusCode:{
			200:function(response){
				$(target).append($('<option value="0">-Select-</option>'));
				for(var i=0;i<response.length;i++){
					$(target).append($('<option value="'+response[i].id+'">'+response[i].name+'</option>'));
				}
			}
		}
	});
};
var Customer=new Step('customer',Config.customer.fields);
var Supplier=new Step('supplier',Config.supplier.fields);
var Product=new Step('product',Config.product.fields);
var Contract=new Step('contract',Config.contract.fields);
var Import_permit=new Step('import_permit',Config.import_permit.fields);
var Lc=new Step('lc',Config.lc.fields);
var Shipment=new Step('shipment',Config.shipment.fields);
var Document=new Step('document',Config.document.fields);
var Transshipment=new Step('transshipment',Config.transshipment.fields);
var Port=new Step('port',Config.port.fields);
var Controller=new Step('controller',Config.controller.fields);
var Payment=new Step('payment',Config.payment.fields);



var Folder={
	create:function(a,b,callback){
		$.ajax({
			url:api_base+'folders',
			method:'POST',
			data:{name:a,parent:b,token:token},
			statusCode:{
				201:function(response){
					callback(response);
				}
			}
		});
	},
	read:function(a,callback){
		$.ajax({
			url:api_base+'folders'+'/'+a+'?token='+token,
			method:'GET',
			dataType:'json',
			statusCode:{
				200:function(response){
					callback(response);
				}
			}
		});
	}
};
var Menu={
	load:function(a,callback){
		$.ajax({
			url:api_base+'nodes'+'/'+a+'?token='+token,
			method:'GET',
			dataType:'json',
			statusCode:{
				200:function(response){
					callback(response);
				}
			}
		});
	},
	render:function(a,target){
		var x=$('<div>',{class:'sublinks',style:'display:block;'}).insertAfter(target).append($('<ul>'));
		var y=$(x).children(':first');
		for(var i=0;i<a.length;i++){
			$('<li><a href="javascript:;" data-id="'+a[i].id+'">'+a[i].name+'</a></li>').appendTo($(y));
			$('[data-id='+a[i].id+']').click(function(e){
				if($(e.target).attr('data-visibility')==undefined && $(e.target).attr('data-status')==undefined){
					$(e.target).attr('data-status','loading');
					Menu.load($(e.target).attr('data-id'),function(response){
						$(e.target).attr('data-status','loaded');
						$(e.target).next().html('');
						var u=$('<div>',{class:'',style:'display:block;visibility:hidden'}).insertAfter($(e.target)).append($('<ul>'));
						var v=$(u).children(':first');
						for(var i=0;i<response.length;i++){
							var w=$('<li><a href="javascript:;" data-type="'+response[i].item_type+'" data-id="'+response[i].item_id+'">'+response[i].name+'</a></li>').appendTo($(v));
						}
						$(e.target).attr('data-height',$(e.target).next().height());
						$(e.target).next().css('height','0px').css('visibility','visible').css('overflow','hidden');
						$(e.target).next().animate({height:$(e.target).attr('data-height')},{
							duration:100
						});
						$(e.target).attr('data-visibility','visible');
						$('[data-type=project]').click(function(e){
							history.pushState({},'',location.href.split('?')[0]+'?pid='+$(e.target).attr('data-id'));
							Project.load($(e.target).attr('data-id'),function(response){
								Project.render(response,$('#intro'));
							});
						});
					});
				}
				else if($(e.target).attr('data-visibility')=='visible'){
					$(e.target).next().animate({height:'0px'},{
						duration:100
					});
					$(e.target).attr('data-visibility','hidden');
				}
				else if($(e.target).attr('data-visibility')=='hidden'){
					$(e.target).next().css('height','0px');
					$(e.target).next().animate({height:$(e.target).attr('data-height')},{
						duration:100
					});
					$(e.target).attr('data-visibility','visible');
				}
			});
		}
	}
};
var Final={
	init:function(a){
		console.log(a);
		$('.overlay').hide();
		$('.page').hide();
		$('.current').removeClass('current');
		var hash=location.href.split('#')[1]?location.href.split('#')[1].split(/[^A-Za-z_]/)[0]:undefined;
		if(hash!=undefined && $.inArray(hash,a)>-1){
			$('#'+hash).fadeIn().addClass('current');
			/*
			$('html, body').animate({
				scrollTop: $("#"+hash).offset().top
			}, 100);
			*/
		}
		else{
			$('#intro').fadeIn().addClass('current');
		}
		$('.modal').modal('hide');
		$('#next').fadeIn();
		$('#prev').fadeIn();
		Customer.loadAsOption($('#customer-list'));
		Supplier.loadAsOption($('#supplier-list'));
	}
};
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? results : decodeURIComponent(results[1].replace(/\+/g, " "));
}
$(document).ready(function(){
	$('.page').each(function(){
		$(this).height($(window).height());
	});
	var hash=location.href.split('#')[1]?location.href.split('#')[1].split(/[^A-Za-z]/):undefined;
	if(hash!=undefined){
		$('.current').removeClass('current');
		$('#'+hash).addClass('current');
	}
	$('#nav').height($(window).height()-100);
	Menu.load(0,function(response){
		Menu.render(response,$('#nav a').first());
	});
	if(getParameterByName('pid')!=null){
		Project.load(getParameterByName('pid'),function(response){Project.render(response,$('#intro'));});
	}
	else{
		var pics={
			1:{src:'assets/images/1.jpg'},
			2:{src:'assets/images/2.jpg'},
			3:{src:'assets/images/3.jpg'}
		};
		var gallery=$('#gallery');
		for(var i in pics){
			if(pics.hasOwnProperty(i)){
				var slide=$('<div>',{class:'slide'}).append($('<img>',{}).attr('src',pics[i].src).attr('width','100%').attr('height','100%')).appendTo(gallery);
			}
		}
		$('.slide').each(function(){
			$(this).height($(window).height());
		});
		$('.slide').first().addClass('active');
		var flag=false;
		$('#up').click(function(){
			if(flag==false){
				flag=true;
			}
			else return;
			if($('.slide.active').prev().length){
				var h=$(window).height();
				$('#gallery').animate({top:'+='+h},500,function(){
					$('.slide.active').removeClass('active').prev().addClass('active');
					if($('.slide.active').prev().length){
						$('#up').css('visibility','visible');
					}
					else
						$('#up').css('visibility','hidden');
					$('#down').css('visibility','visible');
					flag=false;
				});
			}
		});
		$('#down').click(function(){
			if(flag==false){
				flag=true;
			}
			else return;
			if($('.slide.active').next().length){
				var h=-$(window).height();
				$('#gallery').animate({top:'+='+h},500,function(){
					$('.slide.active').removeClass('active').next().addClass('active');
					if($('.slide.active').next().length){
						$('down').css('visibility','visible');
					}
					else
						$('#down').css('visibility','hidden');
					$('#up').css('visibility','visible');
					flag=false;
				});
			}
		});
	}
	$('.links').each(function(e){
		$(this).click(function(evt){
			$('.sublinks').slideUp('fast');
			$(evt.target).next().slideDown('fast');
		});
	});
});
$(window).resize(function(){
	$('.page').each(function(){
		$(this).height($(window).height());
	});
	$('.slide').each(function(){
		$(this).height($(window).height());
	});
	$('#nav').height($(window).height()-100);
});

//running=false;

$('#next').click(function(event){
	if($('.current').next().length){
		$('.current').hide().next().fadeIn();
		$('.current').removeClass('current').next().addClass('current');
		location.href=location.href.split('#')[0]+'#'+$('.current').attr('id');
	}
	else{
		var last=$('.current').attr('id');
		var current=steps[steps.indexOf(last)+1];
		console.log(current);
		var modal=$('#'+current+'-modal').attr('data-pid',getParameterByName('pid')).modal('show');
		$(modal).find('[data-action=save]').unbind('click');
		$(modal).find('[data-action=save]').click(function(e){
			var pid=$(modal).attr('data-pid');
			if(current=='customer'){
				if($('select[name="customer"]').val()==0 || $('select[name="customer"]').val()==undefined){
					Customer.save({customer_name:$('#customer_name').val(),customer_description:$('#customer_description').val()},function(response){
						Customer.assign({object_id:response.id},pid,function(r){
							$(modal).modal('hide');
							window.location=location.href.split('?')[0]+'?pid='+pid+'#'+current;
							$('.overlay').show();
							Project.load(pid,function(response){
								Project.render(response,$('#intro'));
							});
						});
					});
				}
				else{
					console.log('zz');
				}
			}
			else if(current=='supplier'){
				if($('select[name="supplier"]').val()==0 || $('select[name="supplier"]').val()==undefined){
					Supplier.save({supplier_name:$('#supplier_name').val(),supplier_description:$('#supplier_description').val()},function(response){
						Supplier.assign({object_id:response.id},pid,function(r){
							$(modal).modal('hide');
							window.location=location.href.split('?')[0]+'?pid='+pid+'#'+current;
							$('.overlay').show();
							Project.load(pid,function(response){
								Project.render(response,$('#intro'));
							});
						});
					});
				}
				else{
					console.log('zz');
				}
			}
			else if(current=='product'){
				Product.save({product_name:$('#product_name').val(),product_type:$('#product_type').val(),product_origin:$('#product_origin').val(),product_quantity:$('#product_quantity').val(),product_unit_quantity:'lbs',product_unit_price:$('#product_unit_price').val(),product_unit_price_currency:'usd'},function(response){
					Product.assign({object_id:response.id},pid,function(r){
						$(modal).modal('hide');
						window.location=location.href.split('?')[0]+'?pid='+pid+'#'+current;
						$('.overlay').show();
						Project.load(pid,function(response){
							Project.render(response,$('#intro'));
						});
					});
				});
			}
			else if(current=='contract'){
				Contract.save({contract_no:$('#contract_no').val(),contract_initiate_date:$('#contract_initiate_date').val(),contract_agreement_date:$('#contract_agreement_date').val(),contract_commission_rate:$('#contract_commission_rate').val(),contract_commission_rate_unit:'lbs'},function(response){
					Contract.assign({object_id:response.id},pid,function(r){
						$(modal).modal('hide');
						window.location=location.href.split('?')[0]+'?pid='+pid+'#'+current;
						$('.overlay').show();
						Project.load(pid,function(response){
							Project.render(response,$('#intro'));
						});
					});
				});
			}
			else if(current=='import_permit'){
				Import_permit.save({import_permit_no:$('#import_permit_no').val(),import_permit_date:$('#import_permit_date').val()},function(response){
					Import_permit.assign({object_id:response.id},pid,function(r){
						$(modal).modal('hide');
						window.location=location.href.split('?')[0]+'?pid='+pid+'#'+current;
						$('.overlay').show();
						Project.load(pid,function(response){
							Project.render(response,$('#intro'));
						});
					});
				});
			}
			else if(current=='lc'){
				Lc.save({lc_no:$('#lc_no').val(),lc_issue_date:$('#lc_issue_date').val(),lc_type:$('#lc_type').val(),lc_opening_bank:$('#lc_opening_bank').val(),lc_receiving_bank:$('#lc_receiving_bank').val()},function(response){
					Lc.assign({object_id:response.id},pid,function(r){
						$(modal).modal('hide');
						window.location=location.href.split('?')[0]+'?pid='+pid+'#'+current;
						$('.overlay').show();
						Project.load(pid,function(response){
							Project.render(response,$('#intro'));
						});
					});
				});
			}
			else if(current=='shipment'){
				Shipment.save({shipment_date:$('#shipment_date').val(),shipment_type:$('#shipment_type').val(),partial_shipment:$('#partial_shipment').val(),transshipment:$('#transshipment').val(),loading_port:$('#loading_port').val(),discharge_port:$('#discharge_port').val()},function(response){
					Shipment.assign({object_id:response.id},pid,function(r){
						$(modal).modal('hide');
						window.location=location.href.split('?')[0]+'?pid='+pid+'#'+current;
						$('.overlay').show();
						Project.load(pid,function(response){
							Project.render(response,$('#intro'));
						});
					});
				});
			}
			else if(current=='document'){
				Document.save({commercial_invoice:$('#commercial_invoice').val(),packing_list:$('#packing_list').val(),lading_bill:$('#lading_bill').val(),phytosanitary_certificate:$('#phytosanitary_certificate').val(),origin_certificate:$('#origin_certificate').val(),shipment_advice:$('#shipment_advice').val(),controller_letter:$('#controller_letter').val(),fumigation_letter:$('#fumigation_letter').val()},function(response){
					Document.assign({object_id:response.id},pid,function(r){
						$(modal).modal('hide');
						window.location=location.href.split('?')[0]+'?pid='+pid+'#'+current;
						$('.overlay').show();
						Project.load(pid,function(response){
							Project.render(response,$('#intro'));
						});
					});
				});
			}
			else if(current=='transshipment'){
				Transshipment.save({original_document_arrival:$('#original_document_arrival').val(),payment_notification:$('#payment_notification').val(),vessel_track_no:$('#vessel_track_no').val(),transshipment_date:$('#transshipment_date').val(),transshipment_port:$('#transshipment_port').val(),buyer_notification:$('#buyer_notification').val()},function(response){
					Transshipment.assign({object_id:response.id},pid,function(r){
						$(modal).modal('hide');
						window.location=location.href.split('?')[0]+'?pid='+pid+'#'+current;
						$('.overlay').show();
						Project.load(pid,function(response){
							Project.render(response,$('#intro'));
						});
					});
				});
			}
			else if(current=='port'){
				Port.save({buyer_cnf:$('#buyer_cnf').val(),buyer_clearance:$('#buyer_clearance').val(),clearance_document:$('#clearance_document').val()},function(response){
					Port.assign({object_id:response.id},pid,function(r){
						$(modal).modal('hide');
						window.location=location.href.split('?')[0]+'?pid='+pid+'#'+current;
						$('.overlay').show();
						Project.load(pid,function(response){
							Project.render(response,$('#intro'));
						});
					});
				});
			}
			else if(current=='controller'){
				Controller.save({controller_company:$('#controller_company').val(),weight_finalization_area:$('#weight_finalization_area').val(),final_weight:$('#final_weight').val(),final_weight_unit:$('#final_weight_unit').val(),weight_claim:$('#weight_claim').val(),weight_claim_unit:$('#weight_claim_unit').val(),unit_price:$('#unit_price').val(),unit_price_currency:$('#unit_price_currency').val(),claim_amount:$('#claim_amount').val(),claim_amount_unit:$('#claim_amount_unit').val()},function(response){
					Controller.assign({object_id:response.id},pid,function(r){
						$(modal).modal('hide');
						window.location=location.href.split('?')[0]+'?pid='+pid+'#'+current;
						$('.overlay').show();
						Project.load(pid,function(response){
							Project.render(response,$('#intro'));
						});
					});
				});
			}
			else if(current=='payment'){
				Payment.save({supplier_clearance:$('#supplier_clearance').val(),commission_amount:$('#commission_amount').val(),commission_amount_unit:$('#commission_amount_unit').val(),receiving_date:$('#receiving_date').val(),late_payment:$('#late_payment').val(),buyer_bank_payment:$('#buyer_bank_payment').val()},function(response){
					Payment.assign({object_id:response.id},pid,function(r){
						$(modal).modal('hide');
						window.location=location.href.split('?')[0]+'?pid='+pid+'#'+current;
						$('.overlay').show();
						Project.load(pid,function(response){
							Project.render(response,$('#intro'));
						});
					});
				});
			}
		});
	}
});

$('#prev').click(function(event){
	if($('.current').prev().length){
		$('.current').hide().prev().fadeIn();
		$('.current').removeClass('current').prev().addClass('current');
		location.href=location.href.split('#')[0]+'#'+$('.current').attr('id');
	}
});
Dropzone.autoDiscover = false;

$(document).ready(function(){
	for(var item in Config){
		if(Config.hasOwnProperty(item)){
			var modal=$('<div>',{id:Config[item].id+'-modal',class:'modal fade'});
			var modal_dialog=$('<div>',{class:'modal-dialog'});
			var modal_content=$('<div>',{class:'modal-content'});
			var modal_body=$('<div>',{class:'modal-body'});
			
			//////////////////////////////////////////////////////////////////////////////
			/*
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">Contract</h4>
			</div>
			*/
			var modal_header=$('<div>',{class:'modal-header'});
			var close_button=$('<button>',{class:'close'}).attr('data-dismiss','modal').append('<span aria-hidden="true">&times;</span>').appendTo(modal_header);
			var modal_title=$('<h4>',{class:'modal-title'}).text(Config[item].caption).appendTo(modal_header);
			//////////////////////////////////////////////////////////////////////////////
			
			
			//////////////////////////////////////////////////////////////////////////////
			/*
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary" data-action="save">Save changes</button>
			</div>
			*/
			var modal_footer=$('<div>',{class:'modal-footer'});
			var cancel_button=$('<button>',{class:'btn btn-default'}).attr('type','button').attr('data-dismiss','modal').text('Cancel').appendTo(modal_footer);
			var save_button=$('<button>',{class:'btn btn-primary'}).attr('type','button').attr('data-action','save').text('Save Changes').appendTo(modal_footer);
			//////////////////////////////////////////////////////////////////////////////
			
			
			//////////////////////////////////////////////////////////////////////////////
			/*
			<div class="input-group">
				<span class="input-group-btn">
				<button class="btn btn-default" type="button">No</button>
				</span>
				<input id='contract_no' type="text" class="form-control" placeholder="">
				<div class="input-group-btn">
					<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Unit <span class="caret"></span></button>
					<ul class="dropdown-menu dropdown-menu-right" role="menu">
					  <li><a href="#">LBS</a></li>
					  <li><a href="#">KGS</a></li>
					</ul>
				</div><!-- /btn-group -->
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">Contract Copy</button>
					</span>
					<input type='hidden' name='contract_copy' value='' id='contract_copy'/>
					<form action="http://localhost/cotfield_api/v1/upload" class="dropzone" id="my-dropzone"></form>
				</div><!-- /input-group -->
			</div><!-- /input-group -->
			*/
			for(var i in Config[item].fields){
				if(Config[item].fields.hasOwnProperty(i)){
					var field=Config[item].fields[i];
					var input_group=$('<div>',{class:'input-group'});
					var input_group_button=$('<div>',{class:'input-group-btn'}).appendTo(input_group);
					var button=$('<button>',{class:'btn btn-default'}).attr('type','button').text(field.caption).appendTo(input_group_button);
					
					if(field.type=='string' || field.type=='number')$('<input>',{id:field.save_id}).attr('type','text').attr('class','form-control').appendTo(input_group);
					else if(field.type=='date'){
						$('<input>',{id:field.save_id,class:'form-control'}).addClass('date').attr('data-type','date').attr('type','text').appendTo(input_group);
					}
					else if(field.type=='select'){
						
						var last=$(modal_body).children().last();
						var wrapper;
						if(field.caption){
							wrapper=$('<div>',{});
							$(wrapper).appendTo(input_group);
							var list=$('<select>',{id:field.save_id,class:'form-control'}).attr('name',field.save_id).appendTo(wrapper);
							for(var option in field.options){
								$('<option>',{}).attr('value',option).text(field.options[option].caption).appendTo(list);
							}
						}
						else{
							wrapper=$('<div>',{class:'input-group-btn'});
							$(wrapper).appendTo(last);
							var button=$('<button>',{class:'btn btn-default dropdown-toggle'}).attr('type','button').attr('data-toggle','dropdown').append('<span id="caption-'+field.save_id+'">Unit</span> <span class="caret"></span>').appendTo(wrapper);
							var list=$('<ul>',{class:'options dropdown-menu dropdown-menu-right'}).attr('data-target',field.save_id).appendTo(wrapper);
							for(var option in field.options){
								$('<li>',{class:'item'}).append('<a data-value="'+option+'">'+field.options[option].caption+'</a>').appendTo(list);
							}
							var t=$('<input>',{id:field.save_id}).attr('type','hidden').appendTo(wrapper);
						}
					}
					else if(field.type=='document'){
					
						$('<input>',{id:field.save_id,name:field.save_id}).attr('type','hidden').appendTo(input_group);
						$('<form>',{class:'dropzone',id:'dropzone-'+field.save_id}).attr('action','http://localhost/cotfield_api/v1/upload').attr('data-target',field.save_id).appendTo(input_group);
					}
					if(field.caption!=undefined)$(modal_body).append(input_group);
				}
			}
			//////////////////////////////////////////////////////////////////////////////
			
			
			$(modal_content).append(modal_header).append(modal_body).append(modal_footer);
			$(modal_dialog).append(modal_content);
			$(modal).append(modal_dialog);
			
			$(document.getElementsByTagName('body')[0]).append(modal);
		}
	}
	$('.dropzone').each(function(e){
		var id=$(this).attr('id');
		var target=$(this).attr('data-target');
		var myDropzone = new Dropzone(document.getElementById(id));
		myDropzone.on("success", function(file) {
			$('#'+target).val(file.xhr.responseText);
			/* Maybe display some more file information on your page */
		});
	});
	$('.options').each(function(e){
		var target=$(this).attr('data-target');
		$(this).children('.item').click(function(evt){
			$('#'+target).val($(evt.target).attr('data-value'));
			$('#caption-'+target).text($(evt.target).text());
		});
	});
	$( "input[data-type='date']" ).datepicker({
		dateFormat: 'yy-mm-dd',
		beforeShow: function() {
			setTimeout(function(){
				$('.ui-datepicker').css('z-index', 99999999999999);
			}, 0);
		}
	});
});
$('.create_project').click(function(){
	var modal=$('#project-modal').modal('show');
});
$('[data-action=create-project]').click(function(e){
	var modal=$('#project-modal').modal('show');
	
	$('#big_button').hide();
	Project.create({project_name:$('#project_name').val(),project_description:$('#project_description').val()},function(response1){
		Project.load(response1.id,function(response2){
			Project.render(response2,$('#intro'));
		});
	});
});