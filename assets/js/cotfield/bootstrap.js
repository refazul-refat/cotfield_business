Bootstrap={
	create:function(data,callback){
		$.extend(data,{token:token});
		$.ajax({
			url:api_base+'bootstraps',
			method:'POST',
			data:data,
			dataType:'json',
			statusCode:{
				201:function(response){
					console.log('bootstrap created');
					console.log(response);
					if(typeof callback==='function')callback(response);
				}
			}
		});
	},
	load:function(id,callback){
		$.ajax({
			url:api_base+'bootstraps'+'/'+id+'?token='+token,
			method:'GET',
			dataType:'json',
			statusCode:{
				200:function(response){
					console.log('bootstrap loaded');
					console.log(response);
					if(typeof callback==='function')callback(response);
				}
			}
		});
	},
	loadOf:function(pid,callback){
		$.ajax({
			url:api_base+'projects'+'/'+pid+'/'+'bootstrap'+'?token='+token,
			method:'GET',
			dataType:'json',
			statusCode:{
				200:function(response){
					if(typeof callback==='function')callback(response);
				}
			}
		});
	},
	update:function(id,data,callback){
		$.extend(data,{token:token,method:'update'});
		$.ajax({
			url:api_base+'bootstraps'+'/'+id,
			method:'POST',
			data:data,
			dataType:'json',
			statusCode:{
				200:function(response){
					console.log('bootstrap updated');
					console.log(response);
					if(typeof callback==='function')callback(response);
				}
			}
		});
	},
	remove:function(id,callback){
		var data={token:token,method:'delete'};
		$.ajax({
			url:api_base+'bootstraps'+'/'+id,
			method:'POST',
			data:data,
			dataType:'json',
			statusCode:{
				204:function(response){
					console.log('bootstrap removed');
					console.log(response);
					if(typeof callback==='function')callback(response);
				}
			}
		});
	},
	render:function(object,callback){
		var target=$('#project-panel');
		var that=this;
		if(that.once==true && typeof object!='undefined')
			that.populate(object);
		$.ajax({
			url:'index.php/render/bootstrap',
			method:'GET',
			statusCode:{
				200:function(response){
					if(!$('#bootstrap').length){
						$(target).append(response);
						that.once=true;
					}
					if(typeof object==='undefined'){
						if(typeof callback==='function')callback();
						return;
					}
					that.populate(object);
					if(typeof callback==='function')callback();
				}
			}
		});
	},
	populate:function(object){
		
		$('#project_name').text(object.project.name);
		$('#project_description').text(object.project.description);
		$('#project_customer').text(object.customer.name);
		$('#project_supplier').text(object.supplier.name);
		return;
		$('.edit-button[data-step="bootstrap"]').unbind('click');
		$('.edit-button[data-step="bootstrap"]').click(function(e){
			var current=$(this).attr('data-step');
			
			$('#'+current+'-modal').modal('show');
			for(var i in Config[current].fields){
				$('#'+Config[current].fields[i].save_id).val($('#render-'+Config[current].fields[i].save_id).text());
			}
			var modal=$('#'+current+'-modal').attr('data-pid',getParameterByName('pid')).modal('show');
			$(modal).find('[data-action=save]').unbind('click');
			$(modal).find('[data-action=save]').click(function(e){
				var pid=$(modal).attr('data-pid');
				var that=this;
				$(that).prop('disabled',true);
				
				for(var i in Config[current].fields){
					object[fields[i].save_id]=$('#'+Config[current].fields[i].save_id).val();
				}
				Bootstrap.update(object.id,object,function(response){
					Bootstrap.render(response);
					$(that).prop('disabled',false);
					$(modal).modal('hide');
				});
			});
		});
	},
	loadModal:function(callback){
		$.ajax({
			url:'index.php/modals/bootstrap',
			method:'GET',
			statusCode:{
				200:function(response){
					//console.log('bootstrap modal loaded');
					//console.log(response);
					if(typeof callback==='function')callback(response);
				}
			}
		});
	}
};
Customer={
	create:function(data,callback){
		$.extend(data,{token:token});
		$.ajax({
			url:api_base+'customers',
			method:'POST',
			data:data,
			dataType:'json',
			statusCode:{
				201:function(response){
					console.log('customer created');
					console.log(response);
					if(typeof callback==='function')callback(response);
				}
			}
		});
	},
	load:function(id,callback){
		$.ajax({
			url:api_base+'customers'+'/'+id+'?token='+token,
			method:'GET',
			dataType:'json',
			statusCode:{
				200:function(response){
					console.log('customer loaded');
					console.log(response);
					if(typeof callback==='function')callback(response);
				}
			}
		});
	},
	update:function(id,data,callback){
		$.extend(data,{token:token,method:'update'});
		$.ajax({
			url:api_base+'customers'+'/'+id,
			method:'POST',
			data:data,
			dataType:'json',
			statusCode:{
				200:function(response){
					console.log('customer updated');
					console.log(response);
					if(typeof callback==='function')callback(response);
				}
			}
		});
	},
	remove:function(id,callback){
		var data={token:token,method:'delete'};
		$.ajax({
			url:api_base+'customers'+'/'+id,
			method:'POST',
			data:data,
			dataType:'json',
			statusCode:{
				204:function(response){
					console.log('customer removed');
					console.log(response);
					if(typeof callback==='function')callback(response);
				}
			}
		});
	},
	assign:function(object,pid,callback){
		$.extend(object,{token:token});
		$.ajax({
			url:api_base+'projects/'+pid+'/'+'customer',
			method:'POST',
			data:object,
			statusCode:{
				201:function(response){
					console.log('');
					console.log(response);
					callback(response);
				}
			}
		});
	},
	loadModal:function(callback){
		$.ajax({
			url:'index.php/modals/customer',
			method:'GET',
			statusCode:{
				200:function(response){
					console.log('customer modal loaded');
					//console.log(response);
					if(typeof callback==='function')callback(response);
				}
			}
		});
	}
};
Supplier={
	create:function(data,callback){
		$.extend(data,{token:token});
		$.ajax({
			url:api_base+'suppliers',
			method:'POST',
			data:data,
			dataType:'json',
			statusCode:{
				201:function(response){
					console.log('supplier created');
					console.log(response);
					if(typeof callback==='function')callback(response);
				}
			}
		});
	},
	load:function(id,callback){
		$.ajax({
			url:api_base+'suppliers'+'/'+id+'?token='+token,
			method:'GET',
			dataType:'json',
			statusCode:{
				200:function(response){
					console.log('supplier loaded');
					console.log(response);
					if(typeof callback==='function')callback(response);
				}
			}
		});
	},
	update:function(id,data,callback){
		$.extend(data,{token:token,method:'update'});
		$.ajax({
			url:api_base+'suppliers'+'/'+id,
			method:'POST',
			data:data,
			dataType:'json',
			statusCode:{
				200:function(response){
					console.log('supplier updated');
					console.log(response);
					if(typeof callback==='function')callback(response);
				}
			}
		});
	},
	remove:function(id,callback){
		var data={token:token,method:'delete'};
		$.ajax({
			url:api_base+'suppliers'+'/'+id,
			method:'POST',
			data:data,
			dataType:'json',
			statusCode:{
				204:function(response){
					console.log('supplier removed');
					console.log(response);
					if(typeof callback==='function')callback(response);
				}
			}
		});
	},
	assign:function(object,pid,callback){
		$.extend(object,{token:token});
		$.ajax({
			url:api_base+'projects/'+pid+'/'+'supplier',
			method:'POST',
			data:object,
			statusCode:{
				201:function(response){
					console.log('');
					console.log(response);
					callback(response);
				}
			}
		});
	},
	loadModal:function(callback){
		$.ajax({
			url:'index.php/modals/supplier',
			method:'GET',
			statusCode:{
				200:function(response){
					console.log('supplier modal loaded');
					//console.log(response);
					if(typeof callback==='function')callback(response);
				}
			}
		});
	}
};