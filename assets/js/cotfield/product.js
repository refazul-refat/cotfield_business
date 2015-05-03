Product={
	create:function(data,callback){
		$.extend(data,{token:token});
		$.ajax({
			url:api_base+'products',
			method:'POST',
			data:data,
			dataType:'json',
			statusCode:{
				201:function(response){
					console.log('product created');
					console.log(response);
					if(typeof callback==='function')callback(response);
				}
			}
		});
	},
	load:function(id,callback){
		$.ajax({
			url:api_base+'products'+'/'+id+'?token='+token,
			method:'GET',
			dataType:'json',
			statusCode:{
				200:function(response){
					console.log('product loaded');
					console.log(response);
					if(typeof callback==='function')callback(response);
				}
			}
		});
	},
	loadOf:function(pid,callback){
		$.ajax({
			url:api_base+'projects'+'/'+pid+'/'+'product'+'?token='+token,
			method:'GET',
			dataType:'json',
			statusCode:{
				200:function(response){
					if(typeof callback==='function')Product.load(response.item_id,callback);
				}
			}
		});
	},
	update:function(id,data,callback){
		$.extend(data,{token:token,method:'update'});
		$.ajax({
			url:api_base+'products'+'/'+id,
			method:'POST',
			data:data,
			dataType:'json',
			statusCode:{
				200:function(response){
					console.log('product updated');
					console.log(response);
					if(typeof callback==='function')callback(response);
				}
			}
		});
	},
	remove:function(id,callback){
		var data={token:token,method:'delete'};
		$.ajax({
			url:api_base+'products'+'/'+id,
			method:'POST',
			data:data,
			dataType:'json',
			statusCode:{
				204:function(response){
					console.log('product removed');
					console.log(response);
					if(typeof callback==='function')callback(response);
				}
			}
		});
	},
	assign:function(object,pid,callback){
		$.extend(object,{token:token});
		$.ajax({
			url:api_base+'projects/'+pid+'/'+'product',
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
	render:function(a){
		var target=$('#product');
		$.ajax({
			url:'index.php/render/product',
			method:'GET',
			statusCode:{
				200:function(response){
					$(target).html(response);
					var fields=Config.product.fields;
					for(var i in fields){
						if(fields.hasOwnProperty(i)){
							var selector='#render-'+fields[i].save_id;
							$(selector).html(a[i]);
							
							if(fields[i].type=='date'){
								$(selector).css('display','none');
								if(!$('#'+$(selector).attr('id')+'-x').length)
									$(selector).parent().append($('<div>',{id:$(selector).attr('id')+'-x'}).css('display','inline-block').css('color','#656565').html(moment(a[i]).format('MMMM Do YYYY')));
							}
						}
					}
				}
			}
		});
	},
	loadModal:function(callback){
		$.ajax({
			url:'index.php/modals/product',
			method:'GET',
			statusCode:{
				200:function(response){
					console.log('product modal loaded');
					console.log(response);
					if(typeof callback==='function')callback(response);
				}
			}
		});
	}
};