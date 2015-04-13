var token='xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z';
var api_base='http://api.cotfield.com/v1/';
var steps=['intro','customer','supplier','product','contract'];
String.prototype.ucfirst = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
var Config={
	customer:{
		step:1,
		html_render_id:'customer',
		fields:{
			name:{html_render_id:'name',html_render_class:'name',html_save_target_id:'customer_name'},
			description:{html_render_id:'description',html_render_class:'description',html_save_target_id:'customer_description'}
		}
	},
	supplier:{
		step:2,
		html_render_id:'supplier',
		fields:{
			name:{html_render_id:'name',html_render_class:'name',html_save_target_id:'supplier_name'},
			description:{html_render_id:'description',html_render_class:'description',html_save_target_id:'supplier_description'}
		}
	},
	product:{
		step:3,
		html_render_id:'product',
		fields:{
			name:{html_render_id:'name',html_render_class:'name'},
			type:{html_render_id:'type',html_render_class:'type'},
			origin:{html_render_id:'origin',html_render_class:'origin'},
			quantity:{html_render_id:'quantity',html_render_class:'quantity'},
			unit_quantity:{html_render_id:'unit_quantity',html_render_class:'unit_quantity'},
			unit_price:{html_render_id:'unit_price',html_render_class:'unit_price'},
			unit_price_currency:{html_render_id:'unit_price_currency',html_render_class:'unit_price_currency'}
		}
	},
	contract:{
		step:4,
		html_render_id:'contract',
		fields:{
			no:{html_render_id:'no',html_render_class:'no'},
			initiate_date:{html_render_id:'initiate_date',html_render_class:'initiate_date'},
			agreement_date:{html_render_id:'agreement_date',html_render_class:'agreement_date'},
			commission_rate:{html_render_id:'commission_rate',html_render_class:'commission_rate'},
			commission_rate_unit:{html_render_id:'commission_rate_unit',html_render_class:'commission_rate_unit'}
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
		$(target).children('.name').html(a.name);
		$(target).children('.description').html(a.description);
		$(target).siblings().remove();
		
		var current_step=a.current_step;
		var steps=[];
		
		for(var s=1;s<=current_step;s++){
			for(var i in Config){
				if(Config.hasOwnProperty(i)){
					if(Config[i].step==s){
						var p=$('<div>',{id:Config[i].html_render_id,class:'page'}).appendTo($(target).parent());
						for(var f in Config[i].fields){
							if(Config[i].fields.hasOwnProperty(f)){
								p.append($('<div>',{class:Config[i].fields[f].html_render_class}));
							}
						}
						p.css('height',$(window).height());
						if(current_step>=s){
							window[i.ucfirst()].load(a.id,function(response,t){
								window[t.ucfirst()].render(response,$('#'+Config[t].html_render_id));
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
			var selector='.'+fields[i].html_render_class;
			$(target).children(selector).html(a[i]);
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
		$('.overlay').hide();
		$('.current').removeClass('current');
		var hash=location.href.split('#')[1]?location.href.split('#')[1].split(/[^A-Za-z]/)[0]:undefined;
		if(hash!=undefined && $.inArray(hash,a)>-1){
			$('#'+hash).addClass('current');
			$('html, body').animate({
				scrollTop: $("#"+hash).offset().top
			}, 100);
		}
		else{
			$('#intro').addClass('current');
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

running=false;

$('#next').click(function(event){
	if($('.current').next().length){
		if(running==false){
			running=true;
			$('body').animate({scrollTop:$('.current').next().offset().top},{
				duration: 300,
				complete: function(){
					$('.current').removeClass('current').next().addClass('current');
					location.href=location.href.split('#')[0]+'#'+$('.current').attr('id');
					running=false;
				}
			});
		}
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
		});
	}
});

$('#prev').click(function(event){
	if($('.current').prev().length && running==false){
		running=true;
		$('body').animate({scrollTop:$('.current').prev().offset().top},{
			duration: 300,
			complete: function(){
				$('.current').removeClass('current').prev().addClass('current');
				location.href=location.href.split('#')[0]+'#'+$('.current').attr('id');
				running=false;
			}
		});
	}
});