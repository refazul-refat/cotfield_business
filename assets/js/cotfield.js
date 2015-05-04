var token='xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z';
var api_base='http://api.cotfield.com/v1/';
var steps=['bootstrap','product','contract','import_permit','lc','shipment','document','transshipment','port','controller','payment'];
var loaded_steps=[];
String.prototype.ucfirst = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
String.prototype.strip=function(c){
	if(typeof c==='undefined')
		return this.split(/_(.+)?/)[1];
	if(c==2){
		var temp=this.split(/_(.+)?/)[1];
		return temp.split(/_(.+)?/)[1];
	}
};
function dropzone(){
	$('.dropzone').each(function(e){
		var id=$(this).attr('id');
		var target=$(this).attr('data-target');
		var myDropzone = new Dropzone(document.getElementById(id));
		myDropzone.on("success", function(file) {
			$('#'+target).val($('#'+target).val()+','+file.xhr.responseText);
		});
		if(!$(this).children().find('.remove-all-files').length){
			var r=$('<button>',{class:'close remove-all-files'}).append('<span aria-hidden="true">×</span>').appendTo($(this));
			$(r).click(function(evt){
				evt.preventDefault();
				if(confirm('Are you sure? This will remove all files')){
					$('#'+target).val('');
					myDropzone.removeAllFiles();
				}
			});
		}
	});
}
function datetimepicker(){
	$( "input[data-type='date']" ).datetimepicker({
		dateFormat: 'yy-mm-dd',
		timeFormat:  "HH:mm",
		beforeShow: function() {
			setTimeout(function(){
				$('.ui-datepicker').css('z-index', 99999999999999);
			}, 0);
		}
	});
}
function optionpicker(){
	$('.options').each(function(e){
		var target=$(this).attr('data-target');
		$(this).children('.item').click(function(evt){
			$('#'+target).val($(evt.target).attr('data-value'));
			$('#caption-'+target).text($(evt.target).text());
		});
	});
}
function getParameterByName(name){
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? results : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function GetFilename(url){
	if (url){
		var m = url.toString().match(/.*\/(.+?)\./);
		if (m && m.length > 1){
			return m[1];
		}
	}
	return "";
}
function stringToDate(s){
	var dateParts = s.split(' ')[0].split('-'); 
	var timeParts = s.split(' ')[1].split(':');
	var d = new Date(dateParts[0], --dateParts[1], dateParts[2]);
	d.setHours(timeParts[0], timeParts[1], timeParts[2]);
	return d;
}
function detecthash(){
	var className='active-circle';
	var hash=location.href.split('#')[1]?location.href.split('#')[1].split(/[^A-Za-z_]/)[0]:undefined;
	if(hash!=undefined && $.inArray(hash,loaded_steps)>-1){
		$('.current').removeClass('current');
		$('#'+hash).fadeIn().addClass('current');
		$('.circle').removeClass(className);
		$('[data-step="'+hash+'"]').addClass(className);
	}
	else{
		$('#bootstrap').fadeIn().addClass('current');
	}
}
function load(callback){
	var loaded=0,rendered=0;
	$.getScript('assets/js/cotfield/customer.js',function(){
		console.log('--Customer Loaded--');loaded+=1;
		$.getScript('assets/js/cotfield/supplier.js',function(){
			console.log('--Supplier Loaded--');loaded+=1;
			$.getScript('assets/js/cotfield/bootstrap.js',function(){
				console.log('--Bootstrap Loaded--');loaded+=1;
				$.getScript('assets/js/cotfield/product.js',function(){
					console.log('--Product Loaded--');loaded+=1;
					$.getScript('assets/js/cotfield/contract.js',function(){
						console.log('--Contract Loaded--');loaded+=1;
						$.getScript('assets/js/cotfield/import_permit.js',function(){
							console.log('--Import Permit Loaded--');loaded+=1;
							$.getScript('assets/js/cotfield/lc.js',function(){
								console.log('--LC Loaded--');loaded+=1;
								$.getScript('assets/js/cotfield/shipment.js',function(){
									console.log('--Shipment Loaded--');loaded+=1;
									$.getScript('assets/js/cotfield/document.js',function(){
										console.log('--Document Loaded--');loaded+=1;
										$.getScript('assets/js/cotfield/transshipment.js',function(){
											console.log('--Transshipment Loaded--');loaded+=1;
											$.getScript('assets/js/cotfield/port.js',function(){
												console.log('--Port Loaded--');loaded+=1;
												$.getScript('assets/js/cotfield/controller.js',function(){
													console.log('--Controller Loaded--');loaded+=1;
													$.getScript('assets/js/cotfield/payment.js',function(){
														console.log('--Payment Loaded--');loaded+=1;
														Payment.loadModal(function(response){
															$('body').append(response);
														});
														Payment.loadOf(getParameterByName('pid'),function(response){Payment.render(response);rendered+=1;});
													});
													Controller.loadModal(function(response){
														$('body').append(response);
													});
													Controller.loadOf(getParameterByName('pid'),function(response){Controller.render(response);rendered+=1;});
												});
												Port.loadModal(function(response){
													$('body').append(response);
												});
												Port.loadOf(getParameterByName('pid'),function(response){Port.render(response);rendered+=1;});
											});
											Transshipment.loadModal(function(response){
												$('body').append(response);
											});
											Transshipment.loadOf(getParameterByName('pid'),function(response){Transshipment.render(response);rendered+=1;});
										});
										Document.loadModal(function(response){
											$('body').append(response);
										});
										Document.loadOf(getParameterByName('pid'),function(response){Document.render(response);rendered+=1;});
									});
									Shipment.loadModal(function(response){
										$('body').append(response);
									});
									Shipment.loadOf(getParameterByName('pid'),function(response){Shipment.render(response);rendered+=1;});
								});
								Lc.loadModal(function(response){
									$('body').append(response);
								});
								Lc.loadOf(getParameterByName('pid'),function(response){Lc.render(response);rendered+=1;});
							});
							Import_permit.loadModal(function(response){
								$('body').append(response);
							});
							Import_permit.loadOf(getParameterByName('pid'),function(response){Import_permit.render(response);rendered+=1;});
						});
						Contract.loadModal(function(response){
							$('body').append(response);
						});
						Contract.loadOf(getParameterByName('pid'),function(response){Contract.render(response);rendered+=1;});
					});
					Product.loadModal(function(response){
						$('body').append(response);
					});
					Product.loadOf(getParameterByName('pid'),function(response){Product.render(response);rendered+=1;});
				});
				Bootstrap.loadModal(function(response){
					$('body').append(response);
					$('#save-bootstrap').unbind('click');
					$('#save-bootstrap').click(function(e){
						Project.create({project_name:$('#project_name').val(),project_description:$('#project_description').val()},function(response){
							Customer.assign({object_id:$('#customer').val()},response.id,function(r){});
							Supplier.assign({object_id:$('#supplier').val()},response.id,function(r){});			
						});
					});
				});
			});
			Supplier.loadModal(function(response){
				$('body').append(response);
			});
		});
		Customer.loadModal(function(response){
			$('body').append(response);
		});
	});
	var t=setInterval(function(){
		console.log(loaded,rendered);
		if(loaded==13 && rendered==0){
			console.log('clearing timeout');
			clearInterval(t);
			callback();
		}
	},100);
}
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
var temp={
	customer:{
		step:1,
		id:'customer',
		caption:'Customer',
		fields:{
			name:{class:'name',caption:'Name',save_id:'customer_name',type:'string'},
			location:{class:'location',caption:'Location',save_id:'customer_location',type:'json'},
			contact:{class:'contact',caption:'Contact',save_id:'customer_contact',type:'json'},
			production_details:{class:'production_details',caption:'Production Details',save_id:'production_details',type:'json'},
			payment_details:{class:'payment_details',caption:'Payment Details',save_id:'payment_details',type:'json'},
			description:{class:'description',caption:'Customer Description',save_id:'customer_description',type:'json'}
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
	}
};
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
			import_permit_no:{caption:'Import Permit No',save_id:'import_permit_no',type:'string'},
			import_permit_date:{caption:'Import Permit Date',save_id:'import_permit_date',type:'date'},
			import_permit_copy:{caption:'Import Permit Copy',save_id:'import_permit_copy',type:'document'}
		}
	},
	lc:{
		step:6,
		id:'lc',
		caption:'LC',
		fields:{
			lc_no:{caption:'LC No',save_id:'lc_no',type:'string'},
			lc_issue_date:{caption:'Issue Date',save_id:'lc_issue_date',type:'date'},
			lc_type:{caption:'LC Type',save_id:'lc_type',type:'select',options:{}},
			lc_opening_bank:{caption:'Opening Bank',save_id:'lc_opening_bank',type:'select',options:{}},
			lc_receiving_bank:{caption:'Receiving Bank',save_id:'lc_receiving_bank',type:'select',options:{}},
			lc_copy:{caption:'LC Copy',save_id:'lc_copy',type:'document'},
			lc_maturity_notification:{caption:'Maturity Notification',save_id:'lc_maturity_notification',type:'date'}
		}
	},
	shipment:{
		step:7,
		id:'shipment',
		caption:'Shipment',
		fields:{
			shipment_date:{caption:'Date of Shipment',save_id:'shipment_date',type:'date'},
			shipment_type:{caption:'Shipment Type',save_id:'shipment_type',type:'select',options:{}},
			shipment_partial:{caption:'Partial Shipment',save_id:'shipment_partial',type:'select',options:{}},
			shipment_transshipment:{caption:'Transshipment',save_id:'shipment_transshipment',type:'select',options:{}},
			shipment_loading_port:{caption:'Port of Loading',save_id:'shipment_loading_port',type:'select',options:{}},
			shipment_discharge_port:{caption:'Port of Discharge',save_id:'shipment_discharge_port',type:'select',type:'select',options:{}}
		}
	},
	document:{
		step:8,
		id:'document',
		caption:'Documents',
		fields:{
			document_commercial_invoice:{caption:'Commercial Invoice',save_id:'document_commercial_invoice',type:'document'},
			document_packing_list:{caption:'Packing List',save_id:'document_packing_list',type:'document'},
			document_lading_bill:{caption:'Bill of Lading',save_id:'document_lading_bill',type:'document'},
			document_phytosanitary_certificate:{caption:'Phytosanitary Certificate',save_id:'document_phytosanitary_certificate',type:'document'},
			document_origin_certificate:{caption:'Origin Certificate',save_id:'document_origin_certificate',type:'document'},
			document_shipment_advice:{caption:'Shipment Advice',save_id:'document_shipment_advice',type:'document'},
			document_controller_letter:{caption:'Controller Letter',save_id:'document_controller_letter',type:'document'},
			document_fumigation_letter:{caption:'Fumigation Letter',save_id:'document_fumigation_letter',type:'document'}
		}
	},
	transshipment:{
		step:9,
		id:'transshipment',
		caption:'Transshipment',
		fields:{
			transshipment_original_document_arrival:{caption:'Original Document Arrival',save_id:'transshipment_original_document_arrival',type:'date'},
			transshipment_payment_notification:{caption:'Payment Notification',save_id:'transshipment_payment_notification',type:'date'},
			transshipment_vessel_track_no:{caption:'Vessel Track No',save_id:'transshipment_vessel_track_no',type:'string'},
			transshipment_date:{caption:'Transshipment Date',save_id:'transshipment_date',type:'date'},
			transshipment_port:{caption:'Transshipment Port',save_id:'transshipment_port',type:'select',options:{}},
			transshipment_buyer_notification:{caption:'Buyer Notification',save_id:'transshipment_buyer_notification',type:'date'}
		}
	},
	port:{
		step:10,
		id:'port',
		caption:'Port',
		fields:{
			port_buyer_cnf:{caption:'Buyer"s C&F',save_id:'port_buyer_cnf',type:'string'},
			port_clearance_document:{caption:'Clearance Document',save_id:'port_clearance_document',type:'document'},
			port_invoice_weight:{caption:'Invoice Weight',save_id:'port_invoice_weight',type:'number'},
			port_invoice_weight_unit:{save_id:'port_invoice_weight_unit',type:'select',options:{}}
		}
	},
	controller:{
		step:11,
		id:'controller',
		caption:'Controller',
		fields:{
			controller_company:{caption:'Controller Company',save_id:'controller_company',type:'string'},
			controller_weight_finalization_area:{caption:'Weight Finalization Area',save_id:'controller_weight_finalization_area',type:'select',options:{}},
			controller_final_weight:{caption:'Final Weight',save_id:'controller_final_weight',type:'number'},
			controller_final_weight_unit:{save_id:'controller_final_weight_unit',type:'select',options:{}},
			controller_landing_report:{save_id:'controller_landing_report',type:'document'}
		}
	},
	payment:{
		step:12,
		id:'payment',
		caption:'Payment',
		fields:{
			payment_supplier_clearance:{caption:'Supplier Clearance',save_id:'payment_supplier_clearance',type:'select',options:{}},
			payment_receiving_date:{caption:'Receiving Date',save_id:'payment_receiving_date',type:'date'},
			payment_late_payment:{caption:'Late Payment',save_id:'payment_late_payment',type:'date'},
			payment_payment_document:{caption:'Payment Document',save_id:'payment_payment_document',type:'document'}
		}
	}
};
var pics={
	1:{src:'assets/images/1.jpg'},
	2:{src:'assets/images/2.jpg'},
	3:{src:'assets/images/3.jpg'},
	4:{src:'assets/images/4.jpg'}
};
///////////////////////////////////////////////////////////////////////////////
var Project={
	create:function(a,callback){
		$.extend(a,{token:token});
		$.ajax({
			url:api_base+'projects',
			method:'POST',
			data:a,
			statusCode:{
				201:function(response){
					callback(response);
					location.href=location.href.split('?')[0]+'?pid='+response.id+'#bootstrap';
				}
			}
		});
	},
	remove:function(a,callback){
		$('.overlay').show();
		$.ajax({
			url:api_base+'projects/'+a,
			data:{token:token,method:'delete'},
			method:'POST',
			dataType:'json',
			statusCode:{
				204:function(response){
					callback(response);
				}
			}
		});
	},
	load:function(a,callback){
		$('.overlay').show();
		$.ajax({
			url:api_base+'projects/'+a+'/bootstrap?token='+token,
			method:'GET',
			dataType:'json',
			statusCode:{
				200:function(response){
					callback(response);
				}
			}
		});
	},
	render:function(a){
	
		$('#render-project_name').html(a.project.name);
		$('#render-project_description').html(a.project.description);
		$('#render-project_customer').html(a.customer.name);
		$('#render-project_supplier').html(a.supplier.name);
		load(function(){
			var current_step=a.project.current_step;
		
			for(var s=1;s<=current_step;s++){
				for(var i in Config){
					if(Config.hasOwnProperty(i)){
						if(Config[i].step==s){
							if(current_step>=s){
								loaded_steps.push(i);
							}
						}
					}
				}
			}
			setTimeout(function(){Final.init(loaded_steps);},3000);
		});
	}
};
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
var Final={
	init:function(a){
		console.log(a);
		detecthash();
		dropzone();
		optionpicker();
		datetimepicker();
		resize();
		$('#quick-nav').html('');
		for(var i=0;i<a.length;i++){
			var qnav=$('<div>',{class:'circle'}).attr('title',a[i]).attr('data-step',a[i]).appendTo($('#quick-nav'));
			$(qnav).unbind('click');
			$(qnav).click(function(){
				$('.circle').removeClass(className);
				$(this).addClass(className);
				var step=$(this).attr('data-step');
				var pid=getParameterByName('pid');
				/*
				$('.overlay').show();
				window[step.ucfirst()].load(pid,function(response,t){
					$('.current').removeClass('current');
					$('#'+step).addClass('current').fadeIn();
					location.href=location.href.split('#')[0]+'#'+step;
					$('.overlay').hide();
					window[step.ucfirst()].render(response,$('#'+step));
				});
				*/
			});
		}
		$('.candidate').hide();
		$('.overlay').hide();
		$('#project-panel').fadeIn();
		$('#clock-panel').fadeIn();
		$('#breadcrumb-panel').fadeIn();
		$('#button-panel').fadeIn();
		$('#quick-nav').fadeIn();
		
		$('.modal').modal('hide');
	}
};
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
								Project.render(response);
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
///////////////////////////////////////////////////////////////////////////////
function resize(){
	$('.page').each(function(){
		$(this).height($(window).height());
	});
	$('.slide').each(function(){
		$(this).height($(window).height());
	});
	$('#gallery').css('top',-($('.slide.active').prevAll().length)*$(window).height());
}
function menu(){
	Menu.load(0,function(response){Menu.render(response,$('#nav a').first());});
	$('.links').each(function(e){
		$(this).click(function(evt){
			$('.sublinks').slideUp('fast');
			$(evt.target).next().slideDown('fast');
		});
	});
}

$(window).resize(function(){
	resize();
});
$(document).ready(function(){
	var hash=location.href.split('#')[1]?location.href.split('#')[1].split(/[^A-Za-z]/):undefined;
	if(hash!=undefined){
		$('.current').removeClass('current');
		$('#'+hash).addClass('current');
	}
	if(getParameterByName('pid')!=null){
		Project.load(getParameterByName('pid'),function(response){Project.render(response);});
		$('.candidate').hide();
		$('#project-panel').fadeIn();
	}
	else if(getParameterByName('action')=='notifications'){
		$('.overlay').show();
		$('.candidate').hide();
		$('#notification-panel').html('');
		$.ajax({
			url:api_base+'notifications',
			method:'GET',
			statusCode:{
				200:function(response){
					for(var i=0;i<response.length;i++){
						var diff=(stringToDate(response[i].deadline) - new Date());
						var days=parseInt(diff / (1000 * 60 * 60 * 24));
						var panel=$('<div>',{});
		
						if(days<2)$(panel).addClass('alert').addClass('alert-danger').attr('role','alert');
						else if(days<4)$(panel).addClass('alert').addClass('alert-warning').attr('role','alert');
						else if(days<8)$(panel).addClass('alert').addClass('alert-info').attr('role','alert');
						else $(panel).addClass('alert').addClass('alert-success').attr('role','alert');
		
						$(panel).html('You have '+days+' remaining for <a href="?pid='+response[i].pid+'#'+response[i].step+'">'+response[i].step.ucfirst()+' Step of '+response[i].pname+'</a>');
						$('#notification-panel').append(panel);
					}
					$('.overlay').hide();
					$('#notification-panel').fadeIn();
				}
			}
		});
	}
	else if(getParameterByName('action')=='customers'){
		$('.overlay').show();
		$('.candidate').hide();
		$('#notification-panel').html('');
		$.ajax({
			url:api_base+'notifications',
			method:'GET',
			statusCode:{
				200:function(response){
					for(var i=0;i<response.length;i++){
						var diff=(stringToDate(response[i].deadline) - new Date());
						var days=parseInt(diff / (1000 * 60 * 60 * 24));
						var panel=$('<div>',{});
		
						if(days<2)$(panel).addClass('alert').addClass('alert-danger').attr('role','alert');
						else if(days<4)$(panel).addClass('alert').addClass('alert-warning').attr('role','alert');
						else if(days<8)$(panel).addClass('alert').addClass('alert-info').attr('role','alert');
						else $(panel).addClass('alert').addClass('alert-success').attr('role','alert');
		
						$(panel).html('You have '+days+' remaining for <a href="?pid='+response[i].pid+'#'+response[i].step+'">'+response[i].step.ucfirst()+' Step of '+response[i].pname+'</a>');
						$('#notification-panel').append(panel);
					}
					$('.overlay').hide();
					$('#notification-panel').fadeIn();
				}
			}
		});
	}
	else if(getParameterByName('action')=='suppliers'){}
	else{
		$('.candidate').hide();
		$('#gallery').html('');
		for(var i in pics){
			if(pics.hasOwnProperty(i)){
				var slide=$('<div>',{class:'slide'}).append($('<img>',{}).attr('src',pics[i].src).attr('width','100%').attr('height','100%')).appendTo($('#gallery'));
			}
		}
		var running=false;
		var activeClass='active-slide';
		$('.slide').first().addClass(activeClass);
		$('#gallery-panel').fadeIn();
		$('#up').click(function(){
			if(running==false)running=true;
			else return;
			if($('.slide'+'.'+activeClass).prev().length){
				var h=$(window).height();
				$('#down').css('visibility','visible');
				$('#gallery').animate({top:'+='+h},500,function(){
					$('.slide'+'.'+activeClass).removeClass(activeClass).prev().addClass(activeClass);
					if($('.slide'+'.'+activeClass).prev().length){
						$('#up').css('visibility','visible');
					}
					else
						$('#up').css('visibility','hidden');
					running=false;
				});
			}
		});
		$('#down').click(function(){
			if(running==false)running=true;
			else return;
			if($('.slide'+'.'+activeClass).next().length){
				var h=-$(window).height();
				$('#up').css('visibility','visible');
				$('#gallery').animate({top:'+='+h},500,function(){
					$('.slide'+'.'+activeClass).removeClass(activeClass).next().addClass(activeClass);
					if($('.slide'+'.'+activeClass).next().length){
						$('down').css('visibility','visible');
					}
					else
						$('#down').css('visibility','hidden');
					running=false;
				});
			}
		});
	}
	menu();
});
///////////////////////////////////////////////////////////////////////////////
//running=false;
Dropzone.autoDiscover = false;
///////////////////////////////////////////////////////////////////////////////
$('#remove').click(function(e){
	var r=confirm('Are you sure?');
	if(r==true)
	{
		Project.remove(getParameterByName('pid'),function(response){
			$('.overlay').hide();
			location.href=location.href.split('?')[0];
		});
	}
});
$('#notifications').click(function(e){
	location.href=location.href.split('?')[0]+'?action=notifications';
});
$('#customers').click(function(e){
	location.href=location.href.split('?')[0]+'?action=customers';
});
$('#suppliers').click(function(e){
	location.href=location.href.split('?')[0]+'?action=suppliers';
});
$('#next').click(function(event){
	var current=$('.current').attr('id');
	var next=steps[steps.indexOf(current)+1];
	if($.inArray(next,loaded_steps)>-1){
		var className='active-circle';
		$('.current').removeClass('current');
		$('.page').hide();
		$('#'+next).addClass('current');
		$('.'+className).removeClass(className).next().addClass(className);
		var pid=getParameterByName('pid');
		$('.overlay').show();
		location.href=location.href.split('#')[0]+'#'+next;
		window[next.ucfirst()].loadOf(pid,function(response){
			window[next.ucfirst()].render(response);
			$('.overlay').hide();
			$('#'+next).fadeIn();
		});
	}
	else{
		var last=$('.current').attr('id');
		var current=steps[steps.indexOf(last)+1];
		var modal=$('#'+current+'-modal').attr('data-pid',getParameterByName('pid')).modal('show');
		$(modal).find('[data-action=save]').unbind('click');
		$(modal).find('[data-action=save]').click(function(e){
			var pid=$(modal).attr('data-pid');
			var fields=Config[current].fields;
			var object={}
			for(var i in fields){
				object[i]=$('#'+i).val();
			}
			window[current.ucfirst()].create(object,function(response){
				window[current.ucfirst()].assign({object_id:response.id},pid,function(r){
					window[current.ucfirst()].render(response);
					$('.overlay').hide();
					$('#'+current).fadeIn();
				});
			});
		});
	}
});
$('#prev').click(function(event){
	var current=$('.current').attr('id');
	var prev=steps[steps.indexOf(current)-1];
	if($.inArray(prev,loaded_steps)>-1){
		var className='active-circle';
		$('.current').removeClass('current')
		$('.page').hide();
		$('#'+prev).addClass('current');
		$('.'+className).removeClass(className).next().addClass(className);
		var pid=getParameterByName('pid');
		$('.overlay').show();
		location.href=location.href.split('#')[0]+'#'+prev;
		if(prev!='bootstrap'){
			window[prev.ucfirst()].loadOf(pid,function(response){
				window[prev.ucfirst()].render(response);
				$('.overlay').hide();
				$('#'+prev).fadeIn();
			});
		}
		else{
			$('.overlay').hide();
			$('#'+prev).fadeIn();
		}
	}
});
$('.create_project').click(function(){
	var modal=$('#bootstrap-modal').modal('show');
});
