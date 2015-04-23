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
			name:{class:'name',caption:'Customer Name'},
			description:{class:'description',caption:'Customer Description'}
		}
	},
	supplier:{
		step:2,
		id:'supplier',
		caption:'Supplier',
		fields:{
			name:{class:'name',caption:'Supplier Name'},
			description:{class:'description',caption:'Supplier Description'}
		}
	},
	product:{
		step:3,
		id:'product',
		caption:'Product',
		fields:{
			name:{class:'name',caption:'Product Name'},
			type:{class:'type',caption:'Product Type'},
			origin:{class:'origin',caption:'Product Origin'},
			quantity:{class:'quantity',caption:'Product Quantity'},
			unit_quantity:{class:'unit_quantity'},
			unit_price:{class:'unit_price',caption:'Product Unit Price'},
			unit_price_currency:{class:'unit_price_currency'}
		}
	},
	contract:{
		step:4,
		id:'contract',
		caption:'Contract',
		fields:{
			no:{class:'no',caption:'Contract No'},
			initiate_date:{class:'initiate_date',caption:'Contract Initiate Date'},
			agreement_date:{class:'agreement_date',caption:'Date of Agreement'},
			commission_rate:{class:'commission_rate',caption:'Commission Rate'},
			commission_rate_unit:{class:'commission_rate_unit'},
			contract_copy:{class:'contract_copy',type:'document',caption:'Contract Copy'}
		}
	},
	import_permit:{
		step:5,
		id:'import_permit',
		caption:'Import Permit',
		fields:{
			no:{class:'no',caption:'Import Permit No'},
			date:{class:'date',caption:'Import Permit Date'}
		}
	},
	lc:{
		step:6,
		id:'lc',
		caption:'LC',
		fields:{
			no:{class:'no'},
			issue_date:{class:'issue_date'},
			type:{class:'type'},
			opening_bank:{class:'opening_bank'},
			receiving_bank:{class:'receiving_bank'}
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
		$('.current').removeClass('current');
		var hash=location.href.split('#')[1]?location.href.split('#')[1].split(/[^A-Za-z_]/)[0]:undefined;
		if(hash!=undefined && $.inArray(hash,a)>-1){
			$('#'+hash).addClass('current');
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
		Customer.loadAsOption($('#customer-list'));
		Supplier.loadAsOption($('#supplier-list'));
	}
};
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
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
	if(getParameterByName('pid')!=undefined){
		Project.load(getParameterByName('pid'),function(response){Project.render(response,$('#intro'));});
	}
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
		$(modal).find('[data-action=save]').click(function(e){
			var pid=$(modal).attr('data-pid');
			if(current=='customer'){
				if($('select[name="customer"]').val()==0){
					Customer.save({name:$('#customer_name').val(),description:$('#customer_description').val()},function(response){
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
				if($('select[name="supplier"]').val()==0){
					Supplier.save({name:$('#supplier_name').val(),description:$('#supplier_description').val()},function(response){
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
				Product.save({name:$('#product_name').val(),type:$('#product_type').val(),origin:$('#product_origin').val(),quantity:$('#product_quantity').val(),unit_quantity:'lbs',unit_price:$('#product_unit_price').val(),unit_price_currency:'usd'},function(response){
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
				Contract.save({no:$('#contract_no').val(),initiate_date:$('#contract_initiate_date').val(),agreement_date:$('#contract_agreement_date').val(),commission_rate:$('#contract_commission_rate').val(),commission_rate_unit:'lbs'},function(response){
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
				Import_permit.save({no:$('#import_permit_no').val(),date:$('#import_permit_date').val()},function(response){
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
				Lc.save({no:$('#lc_no').val(),issue_date:$('#lc_issue_date').val(),type:$('#lc_type').val(),opening_bank:$('#lc_opening_bank').val(),receiving_bank:$('#lc_receiving_bank').val()},function(response){
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
$(function() {
	// Now that the DOM is fully loaded, create the dropzone, and setup the
	// event listeners
	var myDropzone = new Dropzone("#my-dropzone");
	myDropzone.on("success", function(file) {
		$('#contract_copy').val(file.xhr.responseText);
		/* Maybe display some more file information on your page */
	});
})