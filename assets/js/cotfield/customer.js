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