<!DOCTYPE html>
<HTML>
<HEAD>
	<TITLE> ZTREE DEMO - Async</TITLE>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="assets/css/jqueryui/jquery-ui.min.css" type="text/css">
	<link rel="stylesheet" href="assets/css/jqueryui/jquery-ui.theme.min.css" type="text/css">
	<link rel="stylesheet" href="assets/css/ztree/ztree.css" type="text/css">
	<link rel="stylesheet" href="assets/css/bootstrap/bootstrap.min.css" type="text/css">
	<script type="text/javascript" src="assets/js/jquery-2.1.3.min.js"></script>
	<script type="text/javascript" src="assets/js/bootstrap/bootstrap.min.js"></script>
	<script type="text/javascript" src="assets/js/moment.min.js"></script>
	<script type="text/javascript" src="assets/js/jquery-ui.min.js"></script>
	<script type="text/javascript" src="assets/js/ztree/jquery.ztree.core-3.5.js"></script>
	
	<!--
	<script type="text/javascript" src="../../../js/jquery.ztree.excheck-3.5.js"></script>
	<script type="text/javascript" src="../../../js/jquery.ztree.exedit-3.5.js"></script>
	-->
	
	<script type='text/javascript'>
		var setting = {
			async: {
				enable: true,
				url: 'http://api.cotfield.com/v1/nodes/',
				autoParam: ["id", "name=n", "level=lv"]
			},
			view: {
				dblClickExpand: false
			},
			callback: {
				onDblClick: null,
				onRightClick: OnRightClick,
				onClick: OnClick
			}
		};
		function OnClick(event, treeId, treeNode){
			console.log(treeNode);
			if(treeNode && !treeNode.noR){
				$('.containerr').hide();
				if(treeNode.item_type=='project'){
					$('#project-container').show();
					$.ajax({
						url: 'http://api.cotfield.com/v1/projects/'+treeNode.item_id,
						method: 'GET',
						data:{token:'xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z'},
						statusCode:{
							200:function(response){
								project_id=response.id;
								var t = response.created_on.split(/[- :]/);
								var created_on = moment([t[0], t[1]-1, t[2], t[3], t[4], t[5]]);
								
								t = response.last_modified.split(/[- :]/);
								var last_modified = moment([t[0], t[1]-1, t[2], t[3], t[4], t[5]]);
								
								var current_step='customer';
								if(response.current_step==0)current_step='Customer';
								else if(response.current_step==1)current_step='Supplier';
								else if(response.current_step==2)current_step='Product';
								else if(response.current_step==3)current_step='Contract';
								else if(response.current_step==4)current_step='Import Permit';
								else if(response.current_step==5)current_step='LC';
								
								$('#project-container .title').html(response.name);
								$('#project-container .description').html(response.description);
								$('#project-container .created_on').html(created_on.format('ddd, MMM Do YYYY, h:mm:ss a'));
								$('#project-container .last_modified').html(last_modified.format('ddd, MMM Do YYYY, h:mm:ss a'));
								$('#project-container .current_step').html(current_step);
								
								if(response.current_step==0)$('#continue').attr('data-target','#customer_modal');
								else if(response.current_step==1)$('#continue').attr('data-target','#supplier_modal');
								else if(response.current_step==2)$('#continue').attr('data-target','#product_modal');
								else if(response.current_step==3)$('#continue').attr('data-target','#contract_modal');
								else if(response.current_step==4)$('#continue').attr('data-target','#import_permit_modal');
								else if(response.current_step==5)$('#continue').attr('data-target','#lc_modal');
								
							}
						}
					});
				}
				else if(treeNode.item_type=='customer'){
					var parent=treeNode.getParentNode();
					project_id=parent.id;
					$('#customer-container').show();
					$.ajax({
						url: 'http://api.cotfield.com/v1/customers/'+treeNode.item_id,
						method: 'GET',
						data:{token:'xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z'},
						statusCode:{
							200:function(response){
								$('#customer-container .customer_name').html(response.name);
								$('#customer-container .customer_description').html(response.description);
							}
						}
					});
				}
				else if(treeNode.item_type=='supplier'){
					var parent=treeNode.getParentNode();
					project_id=parent.id;
					$('#supplier-container').show();
					$.ajax({
						url: 'http://api.cotfield.com/v1/suppliers/'+treeNode.item_id,
						method: 'GET',
						data:{token:'xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z'},
						statusCode:{
							200:function(response){
								$('#supplier-container .supplier_name').html(response.name);
								$('#supplier-container .supplier_description').html(response.description);
							}
						}
					});
				}
				else if(treeNode.item_type=='product'){
					var parent=treeNode.getParentNode();
					project_id=parent.id;
					$('#product-container').show();
					$.ajax({
						url: 'http://api.cotfield.com/v1/products/'+treeNode.item_id,
						method: 'GET',
						data:{token:'xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z'},
						statusCode:{
							200:function(response){
								$('#product-container .product_name').html(response.name);
								$('#product-container .product_type').html(response.type);
								$('#product-container .product_origin').html(response.origin);
								$('#product-container .product_quantity').html(response.quantity+' '+response.unit_quantity);
								$('#product-container .product_unit_price').html(response.unit_price+' '+response.unit_price_currency);
							}
						}
					});
				}
				else if(treeNode.item_type=='contract'){
					var parent=treeNode.getParentNode();
					project_id=parent.id;
					$('#contract-container').show();
					$.ajax({
						url: 'http://api.cotfield.com/v1/contracts/'+treeNode.item_id,
						method: 'GET',
						data:{token:'xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z'},
						statusCode:{
							200:function(response){
								$('#contract-container .contract_no').html(response.no);
								$('#contract-container .contract_initiate_date').html(response.initiate_date);
								$('#contract-container .contract_agreement_date').html(response.agreement_date);
								$('#contract-container .contract_commission_rate').html(response.commission_rate+' '+response.commission_rate_unit);
							}
						}
					});
				}
				else if(treeNode.item_type=='import_permit'){
					var parent=treeNode.getParentNode();
					project_id=parent.id;
					$('#import_permit-container').show();
					$.ajax({
						url: 'http://api.cotfield.com/v1/import_permits/'+treeNode.item_id,
						method: 'GET',
						data:{token:'xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z'},
						statusCode:{
							200:function(response){
								$('#import_permit-container .import_permit_no').html(response.no);
								$('#import_permit-container .import_permit_date').html(response.date);
							}
						}
					});
				}
			}
		}
		function OnRightClick(event, treeId, treeNode) {
			if (treeNode && !treeNode.noR) {
				zTree.selectNode(treeNode);
				if(treeNode.item_type=='folder' || treeNode.item_type=='project')
					showRMenu(treeNode.item_type, event.clientX, event.clientY);
				else
					return;
			}
		}
		function showRMenu(type, x, y) {
			$("#rMenu ul").show();
			
			if(type=='project'){
				$("#m_add_folder").hide();
				$("#m_add_project").hide();
			}
			else{
				$('#m_add_folder').show();
				$('#m_add_project').show();
			}
			
			rMenu.css({"top":y+"px", "left":x+"px", "visibility":"visible"});

			$("body").bind("mousedown", onBodyMouseDown);
		}
		function onBodyMouseDown(event){
			if (!(event.target.id == "rMenu" || $(event.target).parents("#rMenu").length>0)) {
				rMenu.css({"visibility" : "hidden"});
			}
		}
		var zTree, rMenu, type, state;
		$(document).ready(function(){
			$.fn.zTree.init($("#tree"), setting);
			zTree = $.fn.zTree.getZTreeObj("tree");
			rMenu = $("#rMenu");
		});
		function new_folder(){
			var node=zTree.getSelectedNodes()[0];
			
			$.ajax({
				url:'http://api.cotfield.com/v1/folders',
				method:'POST',
				data:{name:'test folder',parent:node.id,token:'xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z'},
				statusCode:{
					201:function(response){
						console.log(response);
					}
				}
			});
		}
		function new_project(){
			var node=zTree.getSelectedNodes()[0];
			
			$.ajax({
				url:'http://api.cotfield.com/v1/projects',
				method:'POST',
				data:{name:'test project',parent:node.id,token:'xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z'},
				statusCode:{
					201:function(response){
						console.log(response);
					}
				}
			});
		}
		function save_customer(){
			$.ajax({
				url: 'http://api.cotfield.com/v1/customers',
				method: 'POST',
				data: {name:$('#customer_name').val(),description:$('#customer_description').val(),token:'xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z'},
				statusCode:{
					201:function(response){
						console.log(response);
						$.ajax({
							url: 'http://api.cotfield.com/v1/projects/'+project_id+'/customer',
							method: 'POST',
							data: {object_id:response.id,token:'xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z'},
							statusCode:{
								201:function(response){
									console.log(response);
								},
								400:function(response){
									console.log(response);
								}
							}
						});
					},
					400:function(response){
						console.log(response);
					}
				}
			});
		}
		function save_supplier(){
			$.ajax({
				url: 'http://api.cotfield.com/v1/suppliers',
				method: 'POST',
				data: {name:$('#supplier_name').val(),description:$('#supplier_description').val(),token:'xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z'},
				statusCode:{
					201:function(response){
						console.log(response);
						$.ajax({
							url: 'http://api.cotfield.com/v1/projects/'+project_id+'/supplier',
							method: 'POST',
							data: {object_id:response.id,token:'xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z'},
							statusCode:{
								201:function(response){
									console.log(response);
								},
								400:function(response){
									console.log(response);
								}
							}
						});
					},
					400:function(response){
						console.log(response);
					}
				}
			});
		}
		function save_product(){
			$.ajax({
				url: 'http://api.cotfield.com/v1/products',
				method: 'POST',
				data: {name:$('#product_name').val(),
						type:$('#product_type').val(),
						origin:$('#product_origin').val(),
						quantity:$('#product_quantity').val(),
						unit_quantity:'lbs',
						unit_price:$('#product_unit_price').val(),
						unit_price_currency:'usd',
						token:'xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z'},
				statusCode:{
					201:function(response){
						console.log(response);
						$.ajax({
							url: 'http://api.cotfield.com/v1/projects/'+project_id+'/product',
							method: 'POST',
							data: {object_id:response.id,token:'xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z'},
							statusCode:{
								201:function(response){
									console.log(response);
								},
								400:function(response){
									console.log(response);
								}
							}
						});
					},
					400:function(response){
						console.log(response);
					}
				}
			});
		}
		function save_contract(){
			$.ajax({
				url: 'http://api.cotfield.com/v1/contracts',
				method: 'POST',
				data: {no:$('#contract_no').val(),
						initiate_date:$('#contract_initiate_date').val(),
						agreement_date:$('#contract_agreement_date').val(),
						commission_rate:$('#contract_commission_rate').val(),
						commission_rate_unit:'lbs',
						token:'xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z'},
				statusCode:{
					201:function(response){
						console.log(response);
						$.ajax({
							url: 'http://api.cotfield.com/v1/projects/'+project_id+'/contract',
							method: 'POST',
							data: {object_id:response.id,token:'xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z'},
							statusCode:{
								201:function(response){
									console.log(response);
								},
								400:function(response){
									console.log(response);
								}
							}
						});
					},
					400:function(response){
						console.log(response);
					}
				}
			});
		}
		function save_import_permit(){
			$.ajax({
				url: 'http://api.cotfield.com/v1/import_permits',
				method: 'POST',
				data: {no:$('#import_permit_no').val(),
						date:$('#import_permit_date').val(),
						token:'xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z'},
				statusCode:{
					201:function(response){
						console.log(response);
						$.ajax({
							url: 'http://api.cotfield.com/v1/projects/'+project_id+'/import_permit',
							method: 'POST',
							data: {object_id:response.id,token:'xcq52HnEYMDt5nS9vuMs_ol1ZFhJ1P-z'},
							statusCode:{
								201:function(response){
									console.log(response);
								},
								400:function(response){
									console.log(response);
								}
							}
						});
					},
					400:function(response){
						console.log(response);
					}
				}
			});
		}
	</script>
	<style type="text/css">
		div#rMenu {
			position:absolute;
			visibility:hidden;
			top:0;
			background-color: #ccc;
			text-align: left;
			border-left: 1px solid #ccc;
			border-right: 1px solid #ccc;
		}
		div#rMenu ul{
			margin: 0px;
			padding: 0px;
		}
		div#rMenu ul li{
			margin: 1px 0;
			padding: 5px 10px;
			cursor: pointer;
			list-style: none outside none;
			background-color: #DFDFDF;
			transition: background-color 200ms;
			font-family: arial;
			font-size: 12px;
		}
		div#rMenu ul li:hover{
			background-color: #eaeaea;
		}
		.containerr{
			display: none;
		}
		.title{
			text-align: center;
			font-family: arial;
			font-size: 40px;
			color: #8C8C8C;
			border-bottom: 1px solid #ccc;
			padding-bottom: 10px;
		}
		.left{
			width: 56%;
			float:left;
			padding: 2%;
		}
		.right{
			width: 36%;
			float:right;
			padding: 2%;
		}
		.description{
			min-height: 150px;
			font-size: 15px;
			color: #3D3D3D;
		}
		.key{
			width:35%;
			clear:left;
			float:left;
			color: #0B0B0B;
			font-family: arial;
			font-size: 15px;
		}
		.key:after{
			content: ':';
			float: right;
		}
		.value{
			float:left;
			margin-left: 5px;
			color: #3D3D3D;
			font-family: arial;
			font-size: 11px;;
			margin-top:5px;
		}
		.created_on{
		}
		.last_modified{
		}
		.current_step{
		}
		.input-group{
			margin-bottom: 10px;
		}
	</style>
</HEAD>

<BODY>
<TABLE border=0 height=600px align=left>
	<TR>
		<TD width=260px align=left valign=top style="BORDER-RIGHT: #999999 1px dashed">
			<ul id="tree" class="ztree" style="width:260px; overflow:auto;"></ul>
		</TD>
		<TD width='100%' align=left valign=top>
			<div class='containerr' id='project-container'>
				<div class='title'></div>
				<div class='left'>
					<div class='description'></div>
				</div>
				<div class='right'>
					<div class='key'>Created On</div><div class='created_on value'></div>
					<div class='key'>Last Modified</div><div class='last_modified value'></div>
					<div class='key'>Current Step</div><div class='current_step value'></div>
				</div>
				<div style='clear:both;padding:15px;'>
					<button id="continue" type="button" class="btn btn-success btn-lg" aria-label="Left Align" data-toggle="modal" data-target="#customer_modal">
						Continue
					</button>
				</div>
			</div>
			<div class='containerr' id='customer-container'>
				<div class='title'>Customer</div>
				<div class='left'>
					<div class='key'>Name</div><div class='customer_name value'></div>
					<div class='key'>Description</div><div class='customer_description value'></div>
				</div>
				<div style='clear:both;padding:15px;'>
					<button id="continue" type="button" class="btn btn-success btn-lg" aria-label="Left Align" data-toggle="modal" data-target="#customer_modal">
						Edit
					</button>
				</div>
			</div>
			<div class='containerr' id='supplier-container'>
				<div class='title'>Supplier</div>
				<div class='left'>
					<div class='key'>Name</div><div class='supplier_name value'></div>
					<div class='key'>Description</div><div class='supplier_description value'></div>
				</div>
				<div style='clear:both;padding:15px;'>
					<button id="continue" type="button" class="btn btn-success btn-lg" aria-label="Left Align" data-toggle="modal" data-target="#supplier_modal">
						Edit
					</button>
				</div>
			</div>
			<div class='containerr' id='product-container'>
				<div class='title'>Product</div>
				<div class='left'>
					<div class='key'>Name</div><div class='product_name value'></div>
					<div class='key'>Type</div><div class='product_type value'></div>
					<div class='key'>Origin</div><div class='product_origin value'></div>
					<div class='key'>Quantity</div><div class='product_quantity value'></div>
					<div class='key'>Unit Price</div><div class='product_unit_price value'></div>
				</div>
				<div style='clear:both;padding:15px;'>
					<button id="continue" type="button" class="btn btn-success btn-lg" aria-label="Left Align" data-toggle="modal" data-target="#product_modal">
						Edit
					</button>
				</div>
			</div>
			<div class='containerr' id='contract-container'>
				<div class='title'>Contract</div>
				<div class='left'>
					<div class='key'>Contract No</div><div class='contract_no value'></div>
					<div class='key'>Contract Initiate Date</div><div class='contract_initiate_date value'></div>
					<div class='key'>Date of Agreement</div><div class='contract_agreement_date value'></div>
					<div class='key'>Commission Rate</div><div class='contract_commission_rate value'></div>
				</div>
				<div style='clear:both;padding:15px;'>
					<button id="continue" type="button" class="btn btn-success btn-lg" aria-label="Left Align" data-toggle="modal" data-target="#contract_modal">
						Edit
					</button>
				</div>
			</div>
			<div class='containerr' id='import_permit-container'>
				<div class='title'>Import Permit</div>
				<div class='left'>
					<div class='key'>Import Permit No</div><div class='import_permit_no value'></div>
					<div class='key'>Import Permit Date</div><div class='import_permit_date value'></div>
				</div>
				<div style='clear:both;padding:15px;'>
					<button id="continue" type="button" class="btn btn-success btn-lg" aria-label="Left Align" data-toggle="modal" data-target="#import_permit_modal">
						Edit
					</button>
				</div>
			</div>
			<div class='containerr' id='lc-container'>
				<div class='title'>LC</div>
				<div class='left'>
					<div class='key'>LC No</div><div class='lc_no value'></div>
					<div class='key'>Date of Issue</div><div class='lc_issue_date value'></div>
					<div class='key'>LC Type</div><div class='lc_type value'></div>
					<div class='key'>LC Opening Bank</div><div class='lc_opening_bank value'></div>
					<div class='key'>LC Receiving Bank</div><div class='lc_receiving_bank value'></div>
				</div>
				<div style='clear:both;padding:15px;'>
					<button id="continue" type="button" class="btn btn-success btn-lg" aria-label="Left Align" data-toggle="modal" data-target="#lc_modal">
						Edit
					</button>
				</div>
			</div>
		</TD>
	</TR>
</TABLE>
<div id="rMenu">
	<ul>
		<li id="m_add_folder" onclick="new_folder()">New Folder</li>
		<li id="m_add_project" onclick="new_project()">New Project</li>
		<li id="m_del" onclick="removeTreeNode();">Delete</li>
	</ul>
</div>
<!-- Customer Modal -->
<div class="modal fade" id="customer_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Customer</h4>
      </div>
      <div class="modal-body">
        <div class="input-group">
		  <span class="input-group-btn">
			<button class="btn btn-default" type="button">Name</button>
		  </span>
		  <input id='customer_name' type="text" class="form-control" placeholder="...">
		</div><!-- /input-group -->
		<div class="input-group">
		  <span class="input-group-btn">
			<button class="btn btn-default" type="button">Description</button>
		  </span>
		  <input id='customer_description' type="text" class="form-control" placeholder="...">
		</div><!-- /input-group -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button onclick="save_customer()" data-dismiss='modal' type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<!-- Supplier Modal -->
<div class="modal fade" id="supplier_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Supplier</h4>
      </div>
      <div class="modal-body">
        <div class="input-group">
		  <span class="input-group-btn">
			<button class="btn btn-default" type="button">Name</button>
		  </span>
		  <input id='supplier_name' type="text" class="form-control" placeholder="...">
		</div><!-- /input-group -->
		<div class="input-group">
		  <span class="input-group-btn">
			<button class="btn btn-default" type="button">Description</button>
		  </span>
		  <input id='supplier_description' type="text" class="form-control" placeholder="...">
		</div><!-- /input-group -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button onclick="save_supplier()" data-dismiss='modal' type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<!-- Product Modal -->
<div class="modal fade" id="product_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Product</h4>
      </div>
      <div class="modal-body">
        <div class="input-group">
		  <span class="input-group-btn">
			<button class="btn btn-default" type="button">Name</button>
		  </span>
		  <input id='product_name' type="text" class="form-control" placeholder="...">
		</div><!-- /input-group -->
		<div class="input-group">
		  <span class="input-group-btn">
			<button class="btn btn-default" type="button">Type</button>
		  </span>
		  <input id='product_type' type="text" class="form-control" placeholder="...">
		</div><!-- /input-group -->
		<div class="input-group">
		  <span class="input-group-btn">
			<button class="btn btn-default" type="button">Origin</button>
		  </span>
		  <input id='product_origin' type="text" class="form-control" placeholder="...">
		</div><!-- /input-group -->
		<div class="input-group">
		  <span class="input-group-btn">
			<button class="btn btn-default" type="button">Quantity</button>
		  </span>
		  <input id='product_quantity' type="text" class="form-control" placeholder="...">
		  <div class="input-group-btn">
			<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Unit <span class="caret"></span></button>
			<ul class="dropdown-menu dropdown-menu-right" role="menu">
			  <li><a href="#">LBS</a></li>
			  <li><a href="#">KGS</a></li>
			</ul>
		  </div><!-- /btn-group -->
		</div><!-- /input-group -->
		<div class="input-group">
		  <span class="input-group-btn">
			<button class="btn btn-default" type="button">Unit Price</button>
		  </span>
		  <input id='product_unit_price' type="text" class="form-control" placeholder="...">
		  <div class="input-group-btn">
			<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Currency <span class="caret"></span></button>
			<ul class="dropdown-menu dropdown-menu-right" role="menu">
			  <li><a href="#">USD</a></li>
			  <li><a href="#">GBP</a></li>
			  <li><a href="#">INR</a></li>
			  <li><a href="#">BDT</a></li>
			</ul>
		  </div><!-- /btn-group -->
		</div><!-- /input-group -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button onclick="save_product()" data-dismiss='modal' type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<!-- Contract Modal -->
<div class="modal fade" id="contract_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Contract</h4>
      </div>
      <div class="modal-body">
        <div class="input-group">
		  <span class="input-group-btn">
			<button class="btn btn-default" type="button">Contract No</button>
		  </span>
		  <input id='contract_no' type="text" class="form-control" placeholder="...">
		</div><!-- /input-group -->
		<div class="input-group">
		  <span class="input-group-btn">
			<button class="btn btn-default" type="button">Contract Initiate Date</button>
		  </span>
		  <input id='contract_initiate_date' type="text" class="form-control" placeholder="...">
		</div><!-- /input-group -->
		<script type='text/javascript'>
			$( "#contract_initiate_date" ).datepicker({
				beforeShow: function() {
					setTimeout(function(){
						$('.ui-datepicker').css('z-index', 99999999999999);
					}, 0);
				}
			});
		</script>
		<div class="input-group">
		  <span class="input-group-btn">
			<button class="btn btn-default" type="button">Date of Agreement</button>
		  </span>
		  <input id='contract_agreement_date' type="text" class="form-control" placeholder="...">
		</div><!-- /input-group -->
		<script type='text/javascript'>
			$( "#contract_agreement_date" ).datepicker({
				beforeShow: function() {
					setTimeout(function(){
						$('.ui-datepicker').css('z-index', 99999999999999);
					}, 0);
				}
			});
		</script>
		<div class="input-group">
		  <span class="input-group-btn">
			<button class="btn btn-default" type="button">Commission Rate</button>
		  </span>
		  <input id='contract_commission_rate' type="text" class="form-control" placeholder="...">
		  <div class="input-group-btn">
			<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Unit <span class="caret"></span></button>
			<ul class="dropdown-menu dropdown-menu-right" role="menu">
			  <li><a href="#">LBS</a></li>
			  <li><a href="#">KGS</a></li>
			</ul>
		  </div><!-- /btn-group -->
		</div><!-- /input-group -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button onclick="save_contract()" data-dismiss='modal' type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</BODY>
</HTML>
