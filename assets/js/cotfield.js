var token='xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z';
var api_base='http://api.cotfield.com/v1/';
var steps=['bootstrap','product','contract','import_permit','lc','shipment','document','transshipment','port','controller','payment'];
var loaded_steps=[];
var dropzone_once=false;
var running=false;
var stop_animate=false;

//////////////////////////////////////////////
Bootstrap=(function(){
   return{
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
         var that=this;
         $('#bootstrap-panel').fadeIn();
         that.populate(object);
         if(typeof callback==='function')callback();
         return;
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
   	}
   };
})();
Customer=(function(){
   return{
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
   	}
   };
})();
Supplier=(function(){
   return{
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
   	}
   };
})();
Contract=(function(){
   return{
      create:function(data,callback){
   		$.extend(data,{token:token});
   		$.ajax({
   			url:api_base+'contracts',
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				201:function(response){
   					console.log('contract created');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	load:function(id,callback){
   		$.ajax({
   			url:api_base+'contracts'+'/'+id+'?token='+token,
   			method:'GET',
   			dataType:'json',
   			statusCode:{
   				200:function(response){
   					console.log('contract loaded');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	loadOf:function(pid,callback){
   		$.ajax({
   			url:api_base+'projects'+'/'+pid+'/'+'contract'+'?token='+token,
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
   			url:api_base+'contracts'+'/'+id,
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				200:function(response){
   					console.log('contract updated');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	remove:function(id,callback){
   		var data={token:token,method:'delete'};
   		$.ajax({
   			url:api_base+'contracts'+'/'+id,
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				204:function(response){
   					console.log('contract removed');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	assign:function(object,pid,callback){
   		$.extend(object,{token:token});
   		$.ajax({
   			url:api_base+'projects/'+pid+'/'+'contract',
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
   	render:function(object,callback){
         var that=this;
         $('#contract-panel').fadeIn();
         that.populate(object);
         if(typeof callback==='function')callback();
         return;
   	},
   	populate:function(object){
   		//console.log('--Populating--');
   		var fields=Config.contract.fields;
   		for(var i in fields){
   			if(fields.hasOwnProperty(i)){
   				var selector='#render-'+fields[i].save_id;
   				$(selector).html(object[i.strip()]);

   				if(fields[i].type=='date'){
   					$(selector).css('display','none');
   					if($('#'+$(selector).attr('id')+'-x').length)
   						$('#'+$(selector).attr('id')+'-x').remove();
   					$(selector).parent().append($('<div>',{id:$(selector).attr('id')+'-x'}).css('display','inline-block').css('color','#656565').html(moment(object[i.strip()]).format('MMMM Do YYYY')));
   				}
   				else if(fields[i].type=='document'){
   					$(selector).css('display','none');
   					var files=object[i.strip()].split(',');
   					$('.docs-container-'+i).remove();
   					$('.tempviewer-'+i).remove();
   					for(var x=0;x<files.length;x++){
   						if(files[x]=='' || files[x]==undefined)continue;
   						//console.log(files[x]);

   						var extension=files[x].split('.').pop();
   						var filename=GetFilename(files[x]);
   						var nodot=filename.replace(/\W/g, '');
   						//console.log(extension,filename,nodot);
   						//var icon=$('<a>',{target:'_blank',href:'https://docs.google.com/viewerng/viewer?url='+a[i]}).text(a[i]);
   						var icon=$('<div>',{class:'doc-icons '+extension}).attr('data-target',nodot);
   						$(icon).click(function(){
   							$('#'+$(this).attr('data-target')).show();
   							$('.global-overlay').show();
   							$('.global-overlay').unbind('click');
   							$('.global-overlay').click(function(){
   								$(this).hide();
   								$('.tempviewer').hide();
   							});
   						});
   						var link=$('<a>',{class:'doc-links',href:files[x],target:'_blank'}).text(filename.split(/\-(.+)?/)[1]+'.'+extension);
   						if(!$('#'+$(selector).attr('id')+'-x'+'-'+x).length){
   							$('<div>',{class:'docs-container docs-container-'+i,id:$(selector).attr('id')+'-x'+'-'+x}).append(icon).append(link).appendTo($(selector).parent());
   						}
   						$('body').append('<iframe class="tempviewer tempviewer-'+i+'" id="'+nodot+'" src="http://docs.google.com/gview?url='+files[x]+'&embedded=true" style="margin:5%;width:90%; height:90%;position:fixed;display:none;z-index:100000;" frameborder="0"></iframe>');
   					}
   				}
   			}
   		}
   		//console.log('--End Populating--');
   		$('.edit-button[data-step="contract"]').unbind('click');
   		$('.edit-button[data-step="contract"]').click(function(e){
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
   				Contract.update(object.id,object,function(response){
   					Contract.render(response);
   					$(that).prop('disabled',false);
   					$(modal).modal('hide');
   				});
   			});
   		});
   	}
   };
})();
Controller=(function(){
   return{
      create:function(data,callback){
   		$.extend(data,{token:token});
   		$.ajax({
   			url:api_base+'controllers',
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				201:function(response){
   					console.log('controller created');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	load:function(id,callback){
   		$.ajax({
   			url:api_base+'controllers'+'/'+id+'?token='+token,
   			method:'GET',
   			dataType:'json',
   			statusCode:{
   				200:function(response){
   					console.log('controller loaded');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	loadOf:function(pid,callback){
   		$.ajax({
   			url:api_base+'projects'+'/'+pid+'/'+'controller'+'?token='+token,
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
   			url:api_base+'controllers'+'/'+id,
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				200:function(response){
   					console.log('controller updated');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	remove:function(id,callback){
   		var data={token:token,method:'delete'};
   		$.ajax({
   			url:api_base+'controllers'+'/'+id,
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				204:function(response){
   					console.log('controller removed');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	assign:function(object,pid,callback){
   		$.extend(object,{token:token});
   		$.ajax({
   			url:api_base+'projects/'+pid+'/'+'controller',
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
   	render:function(object,callback){
         var that=this;
         $('#controller-panel').fadeIn();
         that.populate(object);
         if(typeof callback==='function')callback();
         return;
   	},
   	populate:function(object){
   		//console.log('--Populating--');
   		var fields=Config.controller.fields;
   		for(var i in fields){
   			if(fields.hasOwnProperty(i)){
   				var selector='#render-'+fields[i].save_id;
   				$(selector).html(object[i.strip()]);

   				if(fields[i].type=='date'){
   					$(selector).css('display','none');
   					if($('#'+$(selector).attr('id')+'-x').length)
   						$('#'+$(selector).attr('id')+'-x').remove();
   					$(selector).parent().append($('<div>',{id:$(selector).attr('id')+'-x'}).css('display','inline-block').css('color','#656565').html(moment(object[i.strip()]).format('MMMM Do YYYY')));
   				}
   				else if(fields[i].type=='document'){
   					$(selector).css('display','none');
   					var files=object[i.strip()].split(',');
   					$('.docs-container-'+i).remove();
   					$('.tempviewer-'+i).remove();
   					for(var x=0;x<files.length;x++){
   						if(files[x]=='' || files[x]==undefined)continue;
   						//console.log(files[x]);

   						var extension=files[x].split('.').pop();
   						var filename=GetFilename(files[x]);
   						var nodot=filename.replace(/\W/g, '');
   						//console.log(extension,filename,nodot);
   						//var icon=$('<a>',{target:'_blank',href:'https://docs.google.com/viewerng/viewer?url='+a[i]}).text(a[i]);
   						var icon=$('<div>',{class:'doc-icons '+extension}).attr('data-target',nodot);
   						$(icon).click(function(){
   							$('#'+$(this).attr('data-target')).show();
   							$('.global-overlay').show();
   							$('.global-overlay').unbind('click');
   							$('.global-overlay').click(function(){
   								$(this).hide();
   								$('.tempviewer').hide();
   							});
   						});
   						var link=$('<a>',{class:'doc-links',href:files[x],target:'_blank'}).text(filename.split(/\-(.+)?/)[1]+'.'+extension);
   						if(!$('#'+$(selector).attr('id')+'-x'+'-'+x).length){
   							$('<div>',{class:'docs-container docs-container-'+i,id:$(selector).attr('id')+'-x'+'-'+x}).append(icon).append(link).appendTo($(selector).parent());
   						}
   						$('body').append('<iframe class="tempviewer tempviewer-'+i+'" id="'+nodot+'" src="http://docs.google.com/gview?url='+files[x]+'&embedded=true" style="margin:5%;width:90%; height:90%;position:fixed;display:none;z-index:100000;" frameborder="0"></iframe>');
   					}
   				}
   			}
   		}
   		//console.log('--End Populating--');
   		$('.edit-button[data-step="controller"]').unbind('click');
   		$('.edit-button[data-step="controller"]').click(function(e){
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
   				Controller.update(object.id,object,function(response){
   					Controller.render(response);
   					$(that).prop('disabled',false);
   					$(modal).modal('hide');
   				});
   			});
   		});
   		$.ajax({
   			url:api_base+'calculate/claim_weight/'+getParameterByName('pid'),
   			dataType:'json',
   			method:'GET',
   			statusCode:{
   				200:function(response){
   					$('#render-controller_claim_weight').text(parseFloat(response.claim_weight).toFixed(2)+' '+response.claim_weight_unit);
   					$('#render-controller_claim_amount').text(parseFloat(response.claim_amount).toFixed(2)+' '+response.claim_amount_currency);
   				}
   			}
   		});
   	}
   };
})();
Lc=(function(){
   return{
      create:function(data,callback){
   		$.extend(data,{token:token});
   		$.ajax({
   			url:api_base+'lcs',
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				201:function(response){
   					console.log('lc created');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	load:function(id,callback){
   		$.ajax({
   			url:api_base+'lcs'+'/'+id+'?token='+token,
   			method:'GET',
   			dataType:'json',
   			statusCode:{
   				200:function(response){
   					console.log('lc loaded');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	loadOf:function(pid,callback){
   		$.ajax({
   			url:api_base+'projects'+'/'+pid+'/'+'lc'+'?token='+token,
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
   			url:api_base+'lcs'+'/'+id,
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				200:function(response){
   					console.log('lc updated');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	remove:function(id,callback){
   		var data={token:token,method:'delete'};
   		$.ajax({
   			url:api_base+'lcs'+'/'+id,
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				204:function(response){
   					console.log('lc removed');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	assign:function(object,pid,callback){
   		$.extend(object,{token:token});
   		$.ajax({
   			url:api_base+'projects/'+pid+'/'+'lc',
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
   	render:function(object,callback){
         var that=this;
         $('#lc-panel').fadeIn();
         that.populate(object);
         if(typeof callback==='function')callback();
         return;
   	},
   	populate:function(object){
   		//console.log('--Populating--');
   		var fields=Config.lc.fields;
   		for(var i in fields){
   			if(fields.hasOwnProperty(i)){
   				var selector='#render-'+fields[i].save_id;
   				$(selector).html(object[i.strip()]);

   				if(fields[i].type=='date'){
   					$(selector).css('display','none');
   					if($('#'+$(selector).attr('id')+'-x').length)
   						$('#'+$(selector).attr('id')+'-x').remove();
   					$(selector).parent().append($('<div>',{id:$(selector).attr('id')+'-x'}).css('display','inline-block').css('color','#656565').html(moment(object[i.strip()]).format('MMMM Do YYYY')));
   				}
   				else if(fields[i].type=='document'){
   					$(selector).css('display','none');
   					var files=object[i.strip()].split(',');
   					$('.docs-container-'+i).remove();
   					$('.tempviewer-'+i).remove();
   					for(var x=0;x<files.length;x++){
   						if(files[x]=='' || files[x]==undefined)continue;
   						//console.log(files[x]);

   						var extension=files[x].split('.').pop();
   						var filename=GetFilename(files[x]);
   						var nodot=filename.replace(/\W/g, '');
   						//console.log(extension,filename,nodot);
   						//var icon=$('<a>',{target:'_blank',href:'https://docs.google.com/viewerng/viewer?url='+a[i]}).text(a[i]);
   						var icon=$('<div>',{class:'doc-icons '+extension}).attr('data-target',nodot);
   						$(icon).click(function(){
   							$('#'+$(this).attr('data-target')).show();
   							$('.global-overlay').show();
   							$('.global-overlay').unbind('click');
   							$('.global-overlay').click(function(){
   								$(this).hide();
   								$('.tempviewer').hide();
   							});
   						});
   						var link=$('<a>',{class:'doc-links',href:files[x],target:'_blank'}).text(filename.split(/\-(.+)?/)[1]+'.'+extension);
   						if(!$('#'+$(selector).attr('id')+'-x'+'-'+x).length){
   							$('<div>',{class:'docs-container docs-container-'+i,id:$(selector).attr('id')+'-x'+'-'+x}).append(icon).append(link).appendTo($(selector).parent());
   						}
   						$('body').append('<iframe class="tempviewer tempviewer-'+i+'" id="'+nodot+'" src="http://docs.google.com/gview?url='+files[x]+'&embedded=true" style="margin:5%;width:90%; height:90%;position:fixed;display:none;z-index:100000;" frameborder="0"></iframe>');
   					}
   				}
   			}
   		}
   		//console.log('--End Populating--');
   		$('.edit-button[data-step="lc"]').unbind('click');
   		$('.edit-button[data-step="lc"]').click(function(e){
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
   				Lc.update(object.id,object,function(response){
   					Lc.render(response);
   					$(that).prop('disabled',false);
   					$(modal).modal('hide');
   				});
   			});
   		});
   	}
   };
})();
Payment=(function(){
   return{
      create:function(data,callback){
   		$.extend(data,{token:token});
   		$.ajax({
   			url:api_base+'payments',
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				201:function(response){
   					console.log('payment created');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	load:function(id,callback){
   		$.ajax({
   			url:api_base+'payments'+'/'+id+'?token='+token,
   			method:'GET',
   			dataType:'json',
   			statusCode:{
   				200:function(response){
   					console.log('payment loaded');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	loadOf:function(pid,callback){
   		$.ajax({
   			url:api_base+'projects'+'/'+pid+'/'+'payment'+'?token='+token,
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
   			url:api_base+'payments'+'/'+id,
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				200:function(response){
   					console.log('payment updated');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	remove:function(id,callback){
   		var data={token:token,method:'delete'};
   		$.ajax({
   			url:api_base+'payments'+'/'+id,
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				204:function(response){
   					console.log('payment removed');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	assign:function(object,pid,callback){
   		$.extend(object,{token:token});
   		$.ajax({
   			url:api_base+'projects/'+pid+'/'+'payment',
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
   	render:function(object,callback){
         var that=this;
         $('#payment-panel').fadeIn();
         that.populate(object);
         if(typeof callback==='function')callback();
         return;
   	},
   	populate:function(object){
   		//console.log('--Populating--');
   		var fields=Config.payment.fields;
   		for(var i in fields){
   			if(fields.hasOwnProperty(i)){
   				var selector='#render-'+fields[i].save_id;
   				$(selector).html(object[i.strip()]);

   				if(fields[i].type=='date'){
   					$(selector).css('display','none');
   					if($('#'+$(selector).attr('id')+'-x').length)
   						$('#'+$(selector).attr('id')+'-x').remove();
   					$(selector).parent().append($('<div>',{id:$(selector).attr('id')+'-x'}).css('display','inline-block').css('color','#656565').html(moment(object[i.strip()]).format('MMMM Do YYYY')));
   				}
   				else if(fields[i].type=='document'){
   					$(selector).css('display','none');
   					var files=object[i.strip()].split(',');
   					$('.docs-container-'+i).remove();
   					$('.tempviewer-'+i).remove();
   					for(var x=0;x<files.length;x++){
   						if(files[x]=='' || files[x]==undefined)continue;
   						//console.log(files[x]);

   						var extension=files[x].split('.').pop();
   						var filename=GetFilename(files[x]);
   						var nodot=filename.replace(/\W/g, '');
   						//console.log(extension,filename,nodot);
   						//var icon=$('<a>',{target:'_blank',href:'https://docs.google.com/viewerng/viewer?url='+a[i]}).text(a[i]);
   						var icon=$('<div>',{class:'doc-icons '+extension}).attr('data-target',nodot);
   						$(icon).click(function(){
   							$('#'+$(this).attr('data-target')).show();
   							$('.global-overlay').show();
   							$('.global-overlay').unbind('click');
   							$('.global-overlay').click(function(){
   								$(this).hide();
   								$('.tempviewer').hide();
   							});
   						});
   						var link=$('<a>',{class:'doc-links',href:files[x],target:'_blank'}).text(filename.split(/\-(.+)?/)[1]+'.'+extension);
   						if(!$('#'+$(selector).attr('id')+'-x'+'-'+x).length){
   							$('<div>',{class:'docs-container docs-container-'+i,id:$(selector).attr('id')+'-x'+'-'+x}).append(icon).append(link).appendTo($(selector).parent());
   						}
   						$('body').append('<iframe class="tempviewer tempviewer-'+i+'" id="'+nodot+'" src="http://docs.google.com/gview?url='+files[x]+'&embedded=true" style="margin:5%;width:90%; height:90%;position:fixed;display:none;z-index:100000;" frameborder="0"></iframe>');
   					}
   				}
   			}
   		}
   		//console.log('--End Populating--');
   		$('.edit-button[data-step="payment"]').unbind('click');
   		$('.edit-button[data-step="payment"]').click(function(e){
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
   				Payment.update(object.id,object,function(response){
   					Payment.render(response);
   					$(that).prop('disabled',false);
   					$(modal).modal('hide');
   				});
   			});
   		});
   		$.ajax({
   			url:api_base+'calculate/commission_amount/'+getParameterByName('pid'),
   			dataType:'json',
   			method:'GET',
   			statusCode:{
   				200:function(response){
   					$('#render-payment_commission_amount').text(parseFloat(response.commission_amount).toFixed(2)+' '+response.commission_amount_currecny);
   				}
   			}
   		});
   		$.ajax({
   			url:api_base+'calculate/invoice_amount/'+getParameterByName('pid'),
   			dataType:'json',
   			method:'GET',
   			statusCode:{
   				200:function(response){
   					$('#render-payment_invoice_amount').text(parseFloat(response.invoice_amount).toFixed(2)+' '+response.currency);
   				}
   			}
   		});
   	}
   };
})();
Port=(function(){
   return{
      create:function(data,callback){
   		$.extend(data,{token:token});
   		$.ajax({
   			url:api_base+'ports',
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				201:function(response){
   					console.log('port created');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	load:function(id,callback){
   		$.ajax({
   			url:api_base+'ports'+'/'+id+'?token='+token,
   			method:'GET',
   			dataType:'json',
   			statusCode:{
   				200:function(response){
   					console.log('port loaded');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	loadOf:function(pid,callback){
   		$.ajax({
   			url:api_base+'projects'+'/'+pid+'/'+'port'+'?token='+token,
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
   			url:api_base+'ports'+'/'+id,
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				200:function(response){
   					console.log('port updated');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	remove:function(id,callback){
   		var data={token:token,method:'delete'};
   		$.ajax({
   			url:api_base+'ports'+'/'+id,
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				204:function(response){
   					console.log('port removed');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	assign:function(object,pid,callback){
   		$.extend(object,{token:token});
   		$.ajax({
   			url:api_base+'projects/'+pid+'/'+'port',
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
   	render:function(object,callback){
         var that=this;
         $('#port-panel').fadeIn();
         that.populate(object);
         if(typeof callback==='function')callback();
         return;
   	},
   	populate:function(object){
   		//console.log('--Populating--');
   		var fields=Config.port.fields;
   		for(var i in fields){
   			if(fields.hasOwnProperty(i)){
   				var selector='#render-'+fields[i].save_id;
   				$(selector).html(object[i.strip()]);

   				if(fields[i].type=='date'){
   					$(selector).css('display','none');
   					if($('#'+$(selector).attr('id')+'-x').length)
   						$('#'+$(selector).attr('id')+'-x').remove();
   					$(selector).parent().append($('<div>',{id:$(selector).attr('id')+'-x'}).css('display','inline-block').css('color','#656565').html(moment(object[i.strip()]).format('MMMM Do YYYY')));
   				}
   				else if(fields[i].type=='document'){
   					$(selector).css('display','none');
   					var files=object[i.strip()].split(',');
   					$('.docs-container-'+i).remove();
   					$('.tempviewer-'+i).remove();
   					for(var x=0;x<files.length;x++){
   						if(files[x]=='' || files[x]==undefined)continue;
   						//console.log(files[x]);

   						var extension=files[x].split('.').pop();
   						var filename=GetFilename(files[x]);
   						var nodot=filename.replace(/\W/g, '');
   						//console.log(extension,filename,nodot);
   						//var icon=$('<a>',{target:'_blank',href:'https://docs.google.com/viewerng/viewer?url='+a[i]}).text(a[i]);
   						var icon=$('<div>',{class:'doc-icons '+extension}).attr('data-target',nodot);
   						$(icon).click(function(){
   							$('#'+$(this).attr('data-target')).show();
   							$('.global-overlay').show();
   							$('.global-overlay').unbind('click');
   							$('.global-overlay').click(function(){
   								$(this).hide();
   								$('.tempviewer').hide();
   							});
   						});
   						var link=$('<a>',{class:'doc-links',href:files[x],target:'_blank'}).text(filename.split(/\-(.+)?/)[1]+'.'+extension);
   						if(!$('#'+$(selector).attr('id')+'-x'+'-'+x).length){
   							$('<div>',{class:'docs-container docs-container-'+i,id:$(selector).attr('id')+'-x'+'-'+x}).append(icon).append(link).appendTo($(selector).parent());
   						}
   						$('body').append('<iframe class="tempviewer tempviewer-'+i+'" id="'+nodot+'" src="http://docs.google.com/gview?url='+files[x]+'&embedded=true" style="margin:5%;width:90%; height:90%;position:fixed;display:none;z-index:100000;" frameborder="0"></iframe>');
   					}
   				}
   			}
   		}
   		//console.log('--End Populating--');
   		$('.edit-button[data-step="port"]').unbind('click');
   		$('.edit-button[data-step="port"]').click(function(e){
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
   				Port.update(object.id,object,function(response){
   					Port.render(response);
   					$(that).prop('disabled',false);
   					$(modal).modal('hide');
   				});
   			});
   		});
   		$.ajax({
   			url:api_base+'calculate/invoice_amount/'+getParameterByName('pid'),
   			dataType:'json',
   			method:'GET',
   			statusCode:{
   				200:function(response){
   					$('#render-port_invoice_amount').text(response.invoice_amount+' '+response.currency);
   				}
   			}
   		});
   	}
   };
})();
Product=(function(){
   return{
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
   					if(typeof callback==='function')callback(response);
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
   	render:function(object,callback){
         var that=this;
         $('#product-panel').fadeIn();
         that.populate(object);
         if(typeof callback==='function')callback();
         return;
   	},
   	populate:function(object){
   		//console.log('--Populating--');
   		var fields=Config.product.fields;
   		for(var i in fields){
   			if(fields.hasOwnProperty(i)){
   				var selector='#render-'+fields[i].save_id;
   				$(selector).html(object[i.strip()]);

   				if(fields[i].type=='date'){
   					$(selector).css('display','none');
   					if($('#'+$(selector).attr('id')+'-x').length)
   						$('#'+$(selector).attr('id')+'-x').remove();
   					$(selector).parent().append($('<div>',{id:$(selector).attr('id')+'-x'}).css('display','inline-block').css('color','#656565').html(moment(object[i.strip()]).format('MMMM Do YYYY')));
   				}
   				else if(fields[i].type=='document'){
   					$(selector).css('display','none');
   					var files=object[i.strip()].split(',');
   					$('.docs-container-'+i).remove();
   					$('.tempviewer-'+i).remove();
   					for(var x=0;x<files.length;x++){
   						if(files[x]=='' || files[x]==undefined)continue;
   						//console.log(files[x]);

   						var extension=files[x].split('.').pop();
   						var filename=GetFilename(files[x]);
   						var nodot=filename.replace(/\W/g, '');
   						//console.log(extension,filename,nodot);
   						//var icon=$('<a>',{target:'_blank',href:'https://docs.google.com/viewerng/viewer?url='+a[i]}).text(a[i]);
   						var icon=$('<div>',{class:'doc-icons '+extension}).attr('data-target',nodot);
   						$(icon).click(function(){
   							$('#'+$(this).attr('data-target')).show();
   							$('.global-overlay').show();
   							$('.global-overlay').unbind('click');
   							$('.global-overlay').click(function(){
   								$(this).hide();
   								$('.tempviewer').hide();
   							});
   						});
   						var link=$('<a>',{class:'doc-links',href:files[x],target:'_blank'}).text(filename.split(/\-(.+)?/)[1]+'.'+extension);
   						if(!$('#'+$(selector).attr('id')+'-x'+'-'+x).length){
   							$('<div>',{class:'docs-container docs-container-'+i,id:$(selector).attr('id')+'-x'+'-'+x}).append(icon).append(link).appendTo($(selector).parent());
   						}
   						$('body').append('<iframe class="tempviewer tempviewer-'+i+'" id="'+nodot+'" src="http://docs.google.com/gview?url='+files[x]+'&embedded=true" style="margin:5% 5% 0 5%;width:90%; height:100%;position:fixed;display:none;z-index:100000;" frameborder="0"></iframe>');
   					}
   				}
   			}
   		}
   		//console.log('--End Populating--');
   		$('.edit-button[data-step="product"]').unbind('click');
   		$('.edit-button[data-step="product"]').click(function(e){
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
   				Product.update(object.id,object,function(response){
   					Product.render(response);
   					$(that).prop('disabled',false);
   					$(modal).modal('hide');
   				});
   			});
   		});
   	}
   };
})();
Shipment=(function(){
   return{
      create:function(data,callback){
   		$.extend(data,{token:token});
   		$.ajax({
   			url:api_base+'shipments',
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				201:function(response){
   					console.log('shipment created');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	load:function(id,callback){
   		$.ajax({
   			url:api_base+'shipments'+'/'+id+'?token='+token,
   			method:'GET',
   			dataType:'json',
   			statusCode:{
   				200:function(response){
   					console.log('shipment loaded');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	loadOf:function(pid,callback){
   		$.ajax({
   			url:api_base+'projects'+'/'+pid+'/'+'shipment'+'?token='+token,
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
   			url:api_base+'shipments'+'/'+id,
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				200:function(response){
   					console.log('shipment updated');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	remove:function(id,callback){
   		var data={token:token,method:'delete'};
   		$.ajax({
   			url:api_base+'shipments'+'/'+id,
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				204:function(response){
   					console.log('shipment removed');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	assign:function(object,pid,callback){
   		$.extend(object,{token:token});
   		$.ajax({
   			url:api_base+'projects/'+pid+'/'+'shipment',
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
   	render:function(object,callback){
         var that=this;
         $('#shipment-panel').fadeIn();
         that.populate(object);
         if(typeof callback==='function')callback();
         return;
   	},
   	populate:function(object){
   		//console.log('--Populating--');
   		var fields=Config.shipment.fields;
   		for(var i in fields){
   			if(fields.hasOwnProperty(i)){
   				var selector='#render-'+fields[i].save_id;
   				$(selector).html(object[i.strip()]);

   				if(fields[i].type=='date'){
   					$(selector).css('display','none');
   					if($('#'+$(selector).attr('id')+'-x').length)
   						$('#'+$(selector).attr('id')+'-x').remove();
   					$(selector).parent().append($('<div>',{id:$(selector).attr('id')+'-x'}).css('display','inline-block').css('color','#656565').html(moment(object[i.strip()]).format('MMMM Do YYYY')));
   				}
   				else if(fields[i].type=='document'){
   					$(selector).css('display','none');
   					var files=object[i.strip()].split(',');
   					$('.docs-container-'+i).remove();
   					$('.tempviewer-'+i).remove();
   					for(var x=0;x<files.length;x++){
   						if(files[x]=='' || files[x]==undefined)continue;
   						//console.log(files[x]);

   						var extension=files[x].split('.').pop();
   						var filename=GetFilename(files[x]);
   						var nodot=filename.replace(/\W/g, '');
   						//console.log(extension,filename,nodot);
   						//var icon=$('<a>',{target:'_blank',href:'https://docs.google.com/viewerng/viewer?url='+a[i]}).text(a[i]);
   						var icon=$('<div>',{class:'doc-icons '+extension}).attr('data-target',nodot);
   						$(icon).click(function(){
   							$('#'+$(this).attr('data-target')).show();
   							$('.global-overlay').show();
   							$('.global-overlay').unbind('click');
   							$('.global-overlay').click(function(){
   								$(this).hide();
   								$('.tempviewer').hide();
   							});
   						});
   						var link=$('<a>',{class:'doc-links',href:files[x],target:'_blank'}).text(filename.split(/\-(.+)?/)[1]+'.'+extension);
   						if(!$('#'+$(selector).attr('id')+'-x'+'-'+x).length){
   							$('<div>',{class:'docs-container docs-container-'+i,id:$(selector).attr('id')+'-x'+'-'+x}).append(icon).append(link).appendTo($(selector).parent());
   						}
   						$('body').append('<iframe class="tempviewer tempviewer-'+i+'" id="'+nodot+'" src="http://docs.google.com/gview?url='+files[x]+'&embedded=true" style="margin:5%;width:90%; height:90%;position:fixed;display:none;z-index:100000;" frameborder="0"></iframe>');
   					}
   				}
   			}
   		}
   		//console.log('--End Populating--');
   		$('.edit-button[data-step="shipment"]').unbind('click');
   		$('.edit-button[data-step="shipment"]').click(function(e){
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
   				Shipment.update(object.id,object,function(response){
   					Shipment.render(response);
   					$(that).prop('disabled',false);
   					$(modal).modal('hide');
   				});
   			});
   		});
   	}
   };
})();
Document=(function(){
   return{
      create:function(data,callback){
   		$.extend(data,{token:token});
   		$.ajax({
   			url:api_base+'documents',
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				201:function(response){
   					console.log('document created');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	load:function(id,callback){
   		$.ajax({
   			url:api_base+'documents'+'/'+id+'?token='+token,
   			method:'GET',
   			dataType:'json',
   			statusCode:{
   				200:function(response){
   					console.log('document loaded');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	loadOf:function(pid,callback){
   		$.ajax({
   			url:api_base+'projects'+'/'+pid+'/'+'document'+'?token='+token,
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
   			url:api_base+'documents'+'/'+id,
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				200:function(response){
   					console.log('document updated');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	remove:function(id,callback){
   		var data={token:token,method:'delete'};
   		$.ajax({
   			url:api_base+'documents'+'/'+id,
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				204:function(response){
   					console.log('document removed');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	assign:function(object,pid,callback){
   		$.extend(object,{token:token});
   		$.ajax({
   			url:api_base+'projects/'+pid+'/'+'document',
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
   	render:function(object,callback){
         var that=this;
         $('#document-panel').fadeIn();
         that.populate(object);
         if(typeof callback==='function')callback();
         return;
   	},
   	populate:function(object){
   		//console.log('--Populating--');
   		var fields=Config.document.fields;
   		for(var i in fields){
   			if(fields.hasOwnProperty(i)){
   				var selector='#render-'+fields[i].save_id;
   				$(selector).html(object[i.strip()]);

   				if(fields[i].type=='date'){
   					$(selector).css('display','none');
   					if($('#'+$(selector).attr('id')+'-x').length)
   						$('#'+$(selector).attr('id')+'-x').remove();
   					$(selector).parent().append($('<div>',{id:$(selector).attr('id')+'-x'}).css('display','inline-block').css('color','#656565').html(moment(object[i.strip()]).format('MMMM Do YYYY')));
   				}
   				else if(fields[i].type=='document'){
   					$(selector).css('display','none');
   					var files=object[i.strip()].split(',');
   					$('.docs-container-'+i).remove();
   					$('.tempviewer-'+i).remove();
   					for(var x=0;x<files.length;x++){
   						if(files[x]=='' || files[x]==undefined)continue;
   						console.log(files[x]);

   						var extension=files[x].split('.').pop();
   						var filename=GetFilename(files[x]);
   						var nodot=filename.replace(/\W/g, '');
   						console.log(extension,filename,nodot);
   						//var icon=$('<a>',{target:'_blank',href:'https://docs.google.com/viewerng/viewer?url='+a[i]}).text(a[i]);
   						var icon=$('<div>',{class:'doc-icons '+extension}).attr('data-target',nodot);
   						$(icon).click(function(){
   							$('#'+$(this).attr('data-target')).show();
   							$('.global-overlay').show();
   							$('.global-overlay').unbind('click');
   							$('.global-overlay').click(function(){
   								$(this).hide();
   								$('.tempviewer').hide();
   							});
   						});
   						var link=$('<a>',{class:'doc-links',href:files[x],target:'_blank'}).text(filename.split(/\-(.+)?/)[1]+'.'+extension);
   						if(!$('#'+$(selector).attr('id')+'-x'+'-'+x).length){
   							$('<div>',{class:'docs-container docs-container-'+i,id:$(selector).attr('id')+'-x'+'-'+x}).append(icon).append(link).appendTo($(selector).parent());
   						}
   						$('body').append('<iframe class="tempviewer tempviewer-'+i+'" id="'+nodot+'" src="http://docs.google.com/gview?url='+files[x]+'&embedded=true" style="margin:5%;width:90%; height:90%;position:fixed;display:none;z-index:100000;" frameborder="0"></iframe>');
   					}
   				}
   			}
   		}
   		//console.log('--End Populating--');
   		$('.edit-button[data-step="document"]').unbind('click');
   		$('.edit-button[data-step="document"]').click(function(e){
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
   				Document.update(object.id,object,function(response){
   					Document.render(response);
   					$(that).prop('disabled',false);
   					$(modal).modal('hide');
   				});
   			});
   		});
   	}
   };
})();
Import_permit=(function(){
   return{
      create:function(data,callback){
   		$.extend(data,{token:token});
   		$.ajax({
   			url:api_base+'import_permits',
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				201:function(response){
   					console.log('import_permit created');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	load:function(id,callback){
   		$.ajax({
   			url:api_base+'import_permits'+'/'+id+'?token='+token,
   			method:'GET',
   			dataType:'json',
   			statusCode:{
   				200:function(response){
   					console.log('import_permit loaded');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	loadOf:function(pid,callback){
   		$.ajax({
   			url:api_base+'projects'+'/'+pid+'/'+'import_permit'+'?token='+token,
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
   			url:api_base+'import_permits'+'/'+id,
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				200:function(response){
   					console.log('import_permit updated');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	remove:function(id,callback){
   		var data={token:token,method:'delete'};
   		$.ajax({
   			url:api_base+'import_permits'+'/'+id,
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				204:function(response){
   					console.log('import_permit removed');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	assign:function(object,pid,callback){
   		$.extend(object,{token:token});
   		$.ajax({
   			url:api_base+'projects/'+pid+'/'+'import_permit',
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
   	render:function(object,callback){
         var that=this;
         $('#import_permit-panel').fadeIn();
         that.populate(object);
         if(typeof callback==='function')callback();
         return;
   	},
   	populate:function(object){
   		//console.log('--Populating--');
   		var fields=Config.import_permit.fields;
   		for(var i in fields){
   			if(fields.hasOwnProperty(i)){
   				var selector='#render-'+fields[i].save_id;
   				$(selector).html(object[i.strip(2)]);

   				if(fields[i].type=='date'){
   					$(selector).css('display','none');
   					if($('#'+$(selector).attr('id')+'-x').length)
   						$('#'+$(selector).attr('id')+'-x').remove();
   					$(selector).parent().append($('<div>',{id:$(selector).attr('id')+'-x'}).css('display','inline-block').css('color','#656565').html(moment(object[i.strip(2)]).format('MMMM Do YYYY')));
   				}
   				else if(fields[i].type=='document'){
   					$(selector).css('display','none');
   					var files=object[i.strip(2)].split(',');
   					$('.docs-container-'+i).remove();
   					$('.tempviewer-'+i).remove();
   					for(var x=0;x<files.length;x++){
   						if(files[x]=='' || files[x]==undefined)continue;
   						//console.log(files[x]);

   						var extension=files[x].split('.').pop();
   						var filename=GetFilename(files[x]);
   						var nodot=filename.replace(/\W/g, '');
   						//console.log(extension,filename,nodot);
   						//var icon=$('<a>',{target:'_blank',href:'https://docs.google.com/viewerng/viewer?url='+a[i]}).text(a[i]);
   						var icon=$('<div>',{class:'doc-icons '+extension}).attr('data-target',nodot);
   						$(icon).click(function(){
   							$('#'+$(this).attr('data-target')).show();
   							$('.global-overlay').show();
   							$('.global-overlay').unbind('click');
   							$('.global-overlay').click(function(){
   								$(this).hide();
   								$('.tempviewer').hide();
   							});
   						});
   						var link=$('<a>',{class:'doc-links',href:files[x],target:'_blank'}).text(filename.split(/\-(.+)?/)[1]+'.'+extension);
   						if(!$('#'+$(selector).attr('id')+'-x'+'-'+x).length){
   							$('<div>',{class:'docs-container docs-container-'+i,id:$(selector).attr('id')+'-x'+'-'+x}).append(icon).append(link).appendTo($(selector).parent());
   						}
   						$('body').append('<iframe class="tempviewer tempviewer-'+i+'" id="'+nodot+'" src="http://docs.google.com/gview?url='+files[x]+'&embedded=true" style="margin:5%;width:90%; height:90%;position:fixed;display:none;z-index:100000;" frameborder="0"></iframe>');
   					}
   				}
   			}
   		}
   		//console.log('--End Populating--');
   		$('.edit-button[data-step="import_permit"]').unbind('click');
   		$('.edit-button[data-step="import_permit"]').click(function(e){
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
   				Import_permit.update(object.id,object,function(response){
   					Import_permit.render(response);
   					$(that).prop('disabled',false);
   					$(modal).modal('hide');
   				});
   			});
   		});
   	}
   };
})();
Transshipment=(function(){
   return{
      create:function(data,callback){
   		$.extend(data,{token:token});
   		$.ajax({
   			url:api_base+'transshipments',
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				201:function(response){
   					console.log('transshipment created');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	load:function(id,callback){
   		$.ajax({
   			url:api_base+'transshipments'+'/'+id+'?token='+token,
   			method:'GET',
   			dataType:'json',
   			statusCode:{
   				200:function(response){
   					console.log('transshipment loaded');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	loadOf:function(pid,callback){
   		$.ajax({
   			url:api_base+'projects'+'/'+pid+'/'+'transshipment'+'?token='+token,
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
   			url:api_base+'transshipments'+'/'+id,
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				200:function(response){
   					console.log('transshipment updated');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	remove:function(id,callback){
   		var data={token:token,method:'delete'};
   		$.ajax({
   			url:api_base+'transshipments'+'/'+id,
   			method:'POST',
   			data:data,
   			dataType:'json',
   			statusCode:{
   				204:function(response){
   					console.log('transshipment removed');
   					console.log(response);
   					if(typeof callback==='function')callback(response);
   				}
   			}
   		});
   	},
   	assign:function(object,pid,callback){
   		$.extend(object,{token:token});
   		$.ajax({
   			url:api_base+'projects/'+pid+'/'+'transshipment',
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
   	render:function(object,callback){
         var that=this;
         $('#transshipment-panel').fadeIn();
         that.populate(object);
         if(typeof callback==='function')callback();
         return;
   	},
   	populate:function(object){
   		//console.log('--Populating--');
   		var fields=Config.transshipment.fields;
   		for(var i in fields){
   			if(fields.hasOwnProperty(i)){
   				var selector='#render-'+fields[i].save_id;
   				$(selector).html(object[i.strip()]);

   				if(fields[i].type=='date'){
   					$(selector).css('display','none');
   					if($('#'+$(selector).attr('id')+'-x').length)
   						$('#'+$(selector).attr('id')+'-x').remove();
   					$(selector).parent().append($('<div>',{id:$(selector).attr('id')+'-x'}).css('display','inline-block').css('color','#656565').html(moment(object[i.strip()]).format('MMMM Do YYYY')));
   				}
   				else if(fields[i].type=='document'){
   					$(selector).css('display','none');
   					var files=object[i.strip()].split(',');
   					$('.docs-container-'+i).remove();
   					$('.tempviewer-'+i).remove();
   					for(var x=0;x<files.length;x++){
   						if(files[x]=='' || files[x]==undefined)continue;
   						//console.log(files[x]);

   						var extension=files[x].split('.').pop();
   						var filename=GetFilename(files[x]);
   						var nodot=filename.replace(/\W/g, '');
   						//console.log(extension,filename,nodot);
   						//var icon=$('<a>',{target:'_blank',href:'https://docs.google.com/viewerng/viewer?url='+a[i]}).text(a[i]);
   						var icon=$('<div>',{class:'doc-icons '+extension}).attr('data-target',nodot);
   						$(icon).click(function(){
   							$('#'+$(this).attr('data-target')).show();
   							$('.global-overlay').show();
   							$('.global-overlay').unbind('click');
   							$('.global-overlay').click(function(){
   								$(this).hide();
   								$('.tempviewer').hide();
   							});
   						});
   						var link=$('<a>',{class:'doc-links',href:files[x],target:'_blank'}).text(filename.split(/\-(.+)?/)[1]+'.'+extension);
   						if(!$('#'+$(selector).attr('id')+'-x'+'-'+x).length){
   							$('<div>',{class:'docs-container docs-container-'+i,id:$(selector).attr('id')+'-x'+'-'+x}).append(icon).append(link).appendTo($(selector).parent());
   						}
   						$('body').append('<iframe class="tempviewer tempviewer-'+i+'" id="'+nodot+'" src="http://docs.google.com/gview?url='+files[x]+'&embedded=true" style="margin:5%;width:90%; height:90%;position:fixed;display:none;z-index:100000;" frameborder="0"></iframe>');
   					}
   				}
   			}
   		}
   		//console.log('--End Populating--');
   		$('.edit-button[data-step="transshipment"]').unbind('click');
   		$('.edit-button[data-step="transshipment"]').click(function(e){
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
   				Transshipment.update(object.id,object,function(response){
   					Transshipment.render(response);
   					$(that).prop('disabled',false);
   					$(modal).modal('hide');
   				});
   			});
   		});
   	}
   };
})();
Project=(function(){
   return{
      create:function(a,callback){
   		$.extend(a,{token:token});
   		$.ajax({
   			url:api_base+'projects',
   			method:'POST',
   			data:a,
   			statusCode:{
   				201:function(response){
   					callback(response);
   					//location.href=location.href.split('?')[0]+'?pid='+response.id+'#bootstrap';
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
   	console.log('--rendering--');
   		$('#render-project_name').html(a.project.name);
   		$('#render-project_description').html(a.project.description);
   		$('#render-project_customer').html(a.customer.name);
   		$('#render-project_supplier').html(a.supplier.name);
   		$('#pname').attr('href',location.href.split('?')[0]+'?pid='+getParameterByName('pid')).html(a.project.name);


			loadSteps(getParameterByName('pid'),function(){
				detectHash(function(hash){
					loadPage(hash,function(){
						Final.init();
					});
				});
			});
   	}
   };
})();
Folder=(function(){
   return{
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
})();
Menu=(function(){
   return{
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
   		var x=$('<div>',{class:'sublinks',style:'display: block;width: 100%;height: 100px;overflow: hidden;'}).insertAfter(target).append($('<ul>',{style:'overflow: auto;height: 100%;width: 100%;padding-right: 15px;    -webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: content-box;'}));
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
   							location.href=location.href.split('?')[0]+'?pid='+$(e.target).attr('data-id');
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
})();
Final=(function(){
   return{
      init:function(){
   		console.log('Final.init()');
   		dropzone();
   		optionpicker();
   		datetimepicker();
   		resize();
   		quicknav();

   		$('.overlay').hide();
   		$('.modal').modal('hide');
   		$('#project-panel').fadeIn();
   		$('#clock-panel').fadeIn();
   		$('#breadcrumb-panel').fadeIn();
   		$('#button-panel').fadeIn();
   		$('#quick-nav').fadeIn();
   	}
   };
})();
Config=(function(){
   return{
      bootstrap:{
   		step:1,
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
   		step:2,
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
   		step:3,
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
   		step:4,
   		id:'import_permit',
   		caption:'Import Permit',
   		fields:{
   			import_permit_no:{caption:'Import Permit No',save_id:'import_permit_no',type:'string'},
   			import_permit_date:{caption:'Import Permit Date',save_id:'import_permit_date',type:'date'},
   			import_permit_copy:{caption:'Import Permit Copy',save_id:'import_permit_copy',type:'document'}
   		}
   	},
   	lc:{
   		step:5,
   		id:'lc',
   		caption:'LC',
   		fields:{
   			lc_no:{caption:'LC No',save_id:'lc_no',type:'string'},
   			lc_issue_date:{caption:'Issue Date',save_id:'lc_issue_date',type:'date'},
   			lc_type:{caption:'LC Type',save_id:'lc_type',type:'select',options:{}},
   			lc_opening_bank:{caption:'Opening Bank',save_id:'lc_opening_bank',type:'select',options:{}},
   			lc_receiving_bank:{caption:'Receiving Bank',save_id:'lc_receiving_bank',type:'select',options:{}},
   			lc_copy:{caption:'LC Copy',save_id:'lc_copy',type:'document'}
   		}
   	},
   	shipment:{
   		step:6,
   		id:'shipment',
   		caption:'Shipment',
   		fields:{
   			shipment_date:{caption:'Date of Shipment',save_id:'shipment_date',type:'date'},
   			shipment_type:{caption:'Shipment Type',save_id:'shipment_type',type:'select',options:{}},
   			shipment_partial:{caption:'Partial Shipment',save_id:'shipment_partial',type:'select',options:{}},
   			shipment_transshipment:{caption:'Transshipment',save_id:'shipment_transshipment',type:'select',options:{}},
   			shipment_loading_port:{caption:'Port of Loading',save_id:'shipment_loading_port',type:'select',options:{}},
   			shipment_discharge_port:{caption:'Port of Discharge',save_id:'shipment_discharge_port',type:'select',type:'select',options:{}},
   			shipment_document_arrival:{caption:'Document Arrival',save_id:'shipment_document_arrival',type:'date'},
   			shipment_document:{caption:'Shipment Document',save_id:'shipment_document',type:'document'},
   			shipment_courier_details:{caption:'Courier Details',save_id:'shipment_courier_details',type:'string'}
   		}
   	},
      /*
   	document:{
   		step:7,
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
      */
   	transshipment:{
   		step:7,
   		id:'transshipment',
   		caption:'Transshipment',
   		fields:{
   			transshipment_vessel_track_no:{caption:'Vessel/BL Track No',save_id:'transshipment_vessel_track_no',type:'string'},
   			transshipment_etd_date:{caption:'ETD Date',save_id:'transshipment_etd_date',type:'date'},
   			transshipment_eta_date:{caption:'ETA Date',save_id:'transshipment_eta_date',type:'date'},
   			transshipment_date:{caption:'Transshipment Date',save_id:'transshipment_date',type:'date'},
   			transshipment_port:{caption:'Transshipment Port',save_id:'transshipment_port',type:'select',options:{}},
            transshipment_number_of_container:{caption:'Number of Container',save_id:'transshipment_number_of_container',type:'string'}
   		}
   	},
      /*
   	port:{
   		step:8,
   		id:'port',
   		caption:'Port',
   		fields:{
   			port_buyer_cnf:{caption:'Buyer"s C&F',save_id:'port_buyer_cnf',type:'string'},
   			port_clearance_document:{caption:'Clearance Document',save_id:'port_clearance_document',type:'document'},
   			port_invoice_weight:{caption:'Invoice Weight',save_id:'port_invoice_weight',type:'number'},
   			port_invoice_weight_unit:{save_id:'port_invoice_weight_unit',type:'select',options:{}}
   		}
   	},
      */
   	controller:{
   		step:8,
   		id:'controller',
   		caption:'Controller & Port',
   		fields:{
   			controller_company:{caption:'Controller Company',save_id:'controller_company',type:'string'},
   			controller_weight_finalization_area:{caption:'Weight Finalization Area',save_id:'controller_weight_finalization_area',type:'select',options:{}},
            controller_invoice_weight:{caption:'Invoice Weight',save_id:'controller_invoice_weight',type:'number'},
   			controller_invoice_weight_unit:{save_id:'controller_invoice_weight_unit',type:'select',options:{}},
   			controller_final_weight:{caption:'Landing Weight',save_id:'controller_final_weight',type:'number'},
   			controller_final_weight_unit:{save_id:'controller_final_weight_unit',type:'select',options:{}},
   			controller_landing_report:{save_id:'controller_landing_report',type:'document'}
   		}
   	},
   	payment:{
   		step:9,
   		id:'payment',
   		caption:'Payment',
   		fields:{
   			payment_notification:{caption:'Payment Notification',save_id:'payment_notification',type:'date'},
   			payment_lc_maturity_notification:{caption:'LC Maturity Notification',save_id:'payment_lc_maturity_notification',type:'date'},
   			payment_receiving_date:{caption:'Receiving Date',save_id:'payment_receiving_date',type:'date'},
   			payment_late_payment:{caption:'Late Payment',save_id:'payment_late_payment',type:'select',options:{}},
   			payment_payment_document:{caption:'Payment Document',save_id:'payment_payment_document',type:'document'}
   		}
   	}
   };
})();
pics=(function(){
   return{
      1:{src:'assets/images/1.jpg'},
   	2:{src:'assets/images/2.jpg'},
   	3:{src:'assets/images/3.jpg'},
   	4:{src:'assets/images/4.jpg'}
   };
})();

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
Dropzone.autoDiscover = false;
function dropzone(){
	if(dropzone_once==true)
		return;
	$('.dropzone').each(function(e){
		var id=$(this).attr('id');
		var target=$(this).attr('data-target');

		var myDropzone = new Dropzone(document.getElementById(id));
		console.log(myDropzone);
		myDropzone.on("addedfile", function(file){
			$('[data-action="save"]').prop('disabled',true);
		});
		myDropzone.on("success", function(file) {
			$('#'+target).val($('#'+target).val()+','+file.xhr.responseText);
			$('[data-action="save"]').prop('disabled',false);
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
	dropzone_once=true;
}
function datetimepicker(){
	$( "input[data-type='date']" ).datepicker({
		dateFormat: 'yy-mm-dd',
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

function detectHash(callback){
	var hash=location.href.split('#')[1]?location.href.split('#')[1].split(/[^A-Za-z_]/)[0]:undefined;
	if(hash!=undefined && $.inArray(hash,loaded_steps)>-1){
		$('.page').hide();
		$('.current').removeClass('current');
		$('#'+hash).fadeIn().addClass('current');
		$('.circle').removeClass('active-circle');
		$('.circle[data-step="'+hash+'"]').addClass('active-circle');
	}
	else{
		hash='bootstrap';
		$('.page').hide();
		$('#bootstrap').fadeIn().addClass('current');
	}
	if(typeof callback==='function')callback(hash);
}

function loadSteps(pid,callback){
	Project.load(pid,function(response){
		for(var s=1;s<=response.project.current_step;s++){
			for(var i in Config){
				if(Config.hasOwnProperty(i)){
					if(response.project.current_step>=Config[i].step){
						if(!($.inArray(i,loaded_steps)>-1))
							loaded_steps.push(i);
					}
				}
			}
		}
		//console.log(current_step);
		//console.log(loaded_steps);
		if(typeof callback==='function')callback();
	});
}
function loadPage(hash,callback){
	console.log(hash,getParameterByName('pid'));
	$('.current').removeClass('current');
	$('#'+hash).addClass('current');
	if(hash=='bootstrap'){
		window[hash.ucfirst()].loadOf(getParameterByName('pid'),function(r){
			window[hash.ucfirst()].render(r,function(){
				if(typeof callback==='function')callback();
			});
		});
	}
	else{
		window[hash.ucfirst()].loadOf(getParameterByName('pid'),function(response){
			window[hash.ucfirst()].load(response.item_id,function(r){
				window[hash.ucfirst()].render(r,function(){
					if(typeof callback==='function')callback();
				});
			});
		});
	}
}
function animate(){
	var activeClass='active-slide';
	$('.slide').first().addClass(activeClass);
	$('#gallery-panel').fadeIn();
	var t=setInterval(function(){
		if(running==false)running=true;
		else return;
		if($('.slide'+'.'+activeClass).next().length){
			var h=-$(window).height();
			$('#up').css('visibility','visible');
			$('#gallery').animate({top:'+='+h},500,function(){
				$('.slide'+'.'+activeClass).removeClass(activeClass).next().addClass(activeClass);
				if($('.slide'+'.'+activeClass).next().length){
					$('#down').css('visibility','visible');
				}
				else
					$('#down').css('visibility','hidden');
				running=false;
			});
		}
		else{
			$('#gallery').animate({top:'0px'},500,function(){
				$('.slide'+'.'+activeClass).removeClass(activeClass);
				$('.slide').first().addClass(activeClass);
				$('#down').css('visibility','visible');
				$('#up').css('visibility','hidden');
				running=false;
			});
		}
		if(stop_animate==true)
			clearInterval(t);
	},3000);
}
function quicknav(){
	$('#quick-nav').html('');
	loadSteps(getParameterByName('pid'),function(){
		for(var i=0;i<loaded_steps.length;i++){
			var qnav=$('<div>',{class:'circle'}).attr('title',loaded_steps[i]).attr('data-step',loaded_steps[i]).appendTo($('#quick-nav'));
			$(qnav).unbind('click');
			$(qnav).click(function(){
				$('.page').hide();
				$('.overlay').show();
				$('.circle').removeClass('active-circle');
				$(this).addClass('active-circle');
				var step=$(this).attr('data-step');
				var pid=getParameterByName('pid');
				location.href=location.href.split('#')[0]+'#'+step;
				loadPage(step,function(){
					$('.overlay').hide();
					$('#'+step).fadeIn();
				});
			});
		}
		$('.circle[data-step="'+$('.current').attr('id')+'"]').addClass('active-circle');
		resize();
	});
}

///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
	var hash=location.href.split('#')[1]?location.href.split('#')[1].split(/[^A-Za-z]/):undefined;
	if(hash!=undefined){
		$('.current').removeClass('current');
		$('#'+hash).addClass('current');
	}
	if(getParameterByName('pid')!=null){
		Project.load(getParameterByName('pid'),function(response){Project.render(response);});
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
		var activeClass='active-slide';
		$('.slide').first().addClass(activeClass);
		$('#gallery-panel').fadeIn();
		animate();
		$('#up').click(function(){
			stop_animate=true;
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
			stop_animate=true;
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
	resize();
});
///////////////////////////////////////////////////////////////////////////////

$('#next').click(function(event){
	var current=$('.current').attr('id');
	var next=steps[steps.indexOf(current)+1];
	var pid=getParameterByName('pid');

	if($.inArray(next,loaded_steps)>-1){
		$('.current').removeClass('current');
		$('.page').hide();
		$('#'+next).addClass('current');
		$('.active-circle').removeClass('active-circle').next().addClass('active-circle');
		$('.overlay').show();

		location.href=location.href.split('#')[0]+'#'+next;

		loadPage(next,function(){
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
					location.href=location.href.split('#')[0]+'#'+current;
					loadSteps(getParameterByName('pid'),function(){
						detectHash(function(hash){
							loadPage(hash,function(){
								Final.init();
							});
						});
					});
				});
			});
		});
	}
});
$('#prev').click(function(event){
	var current=$('.current').attr('id');
	var prev=steps[steps.indexOf(current)-1];
	var pid=getParameterByName('pid');

	if($.inArray(prev,loaded_steps)>-1){
		$('.current').removeClass('current');
		$('.page').hide();
		$('#'+prev).addClass('current');
		$('.active-circle').removeClass('active-circle').prev().addClass('active-circle');
		$('.overlay').show();

		location.href=location.href.split('#')[0]+'#'+prev;

		if(prev!='bootstrap'){
			loadPage(prev,function(){
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

///////////////////////////////////////////////////////////////////////////////
function resize(){
	$('.page').each(function(){
		$(this).height($(window).height());
	});
	$('.slide').each(function(){
		$(this).height($(window).height());
	});
	$('#quick-nav').css('top',$(window).height()/2 - $('#quick-nav').height()/2);
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

///////////////////////////////////////////////////////////////////////////////
//running=false;

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

$('#save-bootstrap').unbind('click');
$('#save-bootstrap').click(function(e){
	$('#save-bootstrap').prop('disabled', true);
	Project.create({project_name:$('#project_name').val(),project_description:$('#project_description').val(),folder:$('#suppliers-list').val()},function(response){
		Customer.attempt($('#customers-list').val(),response.id,function(r){
			Supplier.attempt($('#suppliers-list').val(),response.id,function(r){
				location.href=location.href.split('?')[0]+'?pid='+response.id;
				$('#save-bootstrap').prop('disabled', false);
			});
		});
	});
});
$('.create_project').click(function(){
	var modal=$('#bootstrap-modal').modal('show');
});
