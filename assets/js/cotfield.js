var token='xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z';
var api_base='http://api.cotfield.com/v1/';
var steps=['intro','customer','supplier','product','contract','import_permit','lc'];
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
			shipment_date:{class:'shipment_date'},
			type:{class:'type'},
			partial_shipment:{class:'partial_shipment'},
			transshipment:{class:'transshipment'},
			loading_port:{class:'loading_port'},
			discharge_port:{class:'discharge_port'}
		}
	},
	transhipment:{
		step:8,
		id:'transshipment',
		caption:'Transshipment',
		fields:{
			original_document_arrival:{class:'original_document_arrival'},
			payment_notification:{class:'payment_notification'},
			vessel_track_no:{class:'vessel_track_no'},
			transshipment_date:{class:'transshipment_date'},
			transshipment_port:{class:'transshipment_port'},
			buyer_notification:{class:'buyer_notification'}
		}
	},
	controller:{
		step:9,
		id:'controller',
		caption:'Controller',
		fields:{
			controller_company:{class:'controller_company'},
			weight_finalization_area:{class:'weight_finalization_area'},
			final_weight:{class:'final_weight'},
			final_weight_unit:{class:'final_weight_unit'},
			weight_claim:{class:'weight_claim'},
			weight_claim_unit:{class:'weight_claim_unit'},
			unit_price:{class:'unit_price'},
			unit_price_currency:{class:'unit_price_currency'},
			claim_amount:{class:'claim_amount'},
			claim_amount_unit:{class:'claim_amount_unit'}
		}
	},
	payment:{
		step:10,
		id:'payment',
		caption:'Payment',
		fields:{
			supplier_clearance:{class:'supplier_clearance'},
			commission_amount:{class:'commission_amount'},
			commission_amount_unit:{class:'commission_amount_unit'},
			receiving_date:{class:'receiving_date'},
			late_payment:{class:'late_payment'}
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
Step.prototype.render=function(a,target){
	var that=this;
	var fields=that.fields;
	for(var i in fields){
		if(fields.hasOwnProperty(i)){
			var selector='#'+$(target).attr('id')+' .'+fields[i].class;
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
$('#create_project').click(function(){
	var modal=$('#project-modal').modal('show');
});
$('[data-action=create-project]').click(function(e){
	var modal=$('#project-modal').modal('show');
	
	Project.create({project_name:$('#project_name').val(),project_description:$('#project_description').val()},function(response1){
		Project.load(response1.id,function(response2){
			Project.render(response2,$('#intro'));
		});
	});
});