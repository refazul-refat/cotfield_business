Shipment={
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
					if(typeof callback==='function')Shipment.load(response.item_id,callback);
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
	render:function(object){
		var target=$('#project-panel');
		$.ajax({
			url:'index.php/render/shipment',
			method:'GET',
			statusCode:{
				200:function(response){
					if(!$('#shipment').length)
						$(target).append(response);
					var fields=Config.shipment.fields;
					for(var i in fields){
						if(fields.hasOwnProperty(i)){
							var selector='#render-'+fields[i].save_id;
							$(selector).html(object[i.strip()]);
							
							if(fields[i].type=='date'){
								$(selector).css('display','none');
								if(!$('#'+$(selector).attr('id')+'-x').length)
									$(selector).parent().append($('<div>',{id:$(selector).attr('id')+'-x'}).css('display','inline-block').css('color','#656565').html(moment(object[i.strip()]).format('MMMM Do YYYY')));
							}
							else if(fields[i].type=='document'){
								$(selector).css('display','none');
								var files=object[i.strip()].split(',');
								for(var x=0;x<files.length;x++){
									if(files[x]=='')continue;
								
									var extension=files[x].split('.').pop();
									var filename=GetFilename(files[x]);
									var nodot=filename.replace(/\W/g, '')
									//var icon=$('<a>',{target:'_blank',href:'https://docs.google.com/viewerng/viewer?url='+a[i]}).text(a[i]);
									var icon=$('<div>',{class:'doc-icons '+extension}).attr('data-target',nodot);
									$(icon).click(function(){
										$('#'+$(this).attr('data-target')).show();
										console.log($(this).attr('data-target'));
										$('.global-overlay').show();
										$('.global-overlay').unbind('click');
										$('.global-overlay').click(function(){
											$(this).hide();
											$('.tempviewer').hide();
										});
									});
									var link=$('<a>',{class:'doc-links',href:files[x],target:'_blank'}).text(filename.split(/\-(.+)?/)[1]+'.'+extension);
									if(!$('#'+$(selector).attr('id')+'-x'+'-'+x).length){
										$('<div>',{class:'docs-container',id:$(selector).attr('id')+'-x'+'-'+x}).append(icon).append(link).appendTo($(selector).parent());
									}
									$('body').append('<iframe class="tempviewer" id="'+nodot+'" src="http://docs.google.com/gview?url='+files[x]+'&embedded=true" style="margin:5% 5% 0 5%;width:90%; height:100%;position:fixed;display:none;z-index:100000;" frameborder="0"></iframe>');
								}
							}
						}
					}
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
			}
		});
	},
	loadModal:function(callback){
		$.ajax({
			url:'index.php/modals/shipment',
			method:'GET',
			statusCode:{
				200:function(response){
					console.log('shipment modal loaded');
					//console.log(response);
					if(typeof callback==='function')callback(response);
				}
			}
		});
	}
};