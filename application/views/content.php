<div id='content'>
	<div style='float:right;width:75%;'>
		<div id="intro" class="current page">
			<div class='header'>Project</div>
			<div class='content'>
				<div class='unit-container'>
					<div class='caption'>Project Name</div>
					<div class='value name'>Test Project</div>
				</div>
				<div class='unit-container'>
					<div class='caption'>Project Description</div>
					<div class='value description'>Sample Description goes here</div>
				</div>
			</div>
		</div>
	</div>
	<div style='position:fixed;bottom:10px;right:100px;'>
		<button class='btn btn-success' id='prev'>Prev</button>
		<button class='btn btn-success' id='next'>Next</button>
	</div>	
</div>
<!-- Customer Modal -->
<!-- Modal -->
<div class="modal fade" id="customer-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">Customer</h4>
			</div>
			<div class="modal-body">
				<h6>Choose a Customer</h6>
				<select class="form-control" id="customer-list" name="customer"></select>
				<div style="height: 1px; background-color: #ccc; text-align: center;margin:24px 0px;">
					<span style="position:relative;background:#fff;top: -10px;padding: 0px 15px;font-size: 12px;color: #333;">
						Or
					</span>
				</div>
				<h6>Create a new Customer</h6>
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">Name</button>
					</span>
					<input id='customer_name' type="text" class="form-control" placeholder="">
				</div><!-- /input-group -->
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">Description</button>
					</span>
					<input id='customer_description' type="text" class="form-control" placeholder="">
				</div><!-- /input-group -->
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary" data-action="save">Save changes</button>
			</div>
		</div>
	</div>
</div>
<!-- Modal -->
<div class="modal fade" id="supplier-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">Customer</h4>
			</div>
			<div class="modal-body">
				<h6>Choose a Supplier</h6>
				<select class="form-control" id="supplier-list" name="supplier"></select>
				<div style="height: 1px; background-color: #ccc; text-align: center;margin:24px 0px;">
					<span style="position:relative;background:#fff;top: -10px;padding: 0px 15px;font-size: 12px;color: #333;">
						Or
					</span>
				</div>
				<h6>Create a new Supplier</h6>
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">Name</button>
					</span>
					<input id='supplier_name' type="text" class="form-control" placeholder="">
				</div><!-- /input-group -->
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">Description</button>
					</span>
					<input id='supplier_description' type="text" class="form-control" placeholder="">
				</div><!-- /input-group -->
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary" data-action="save">Save changes</button>
			</div>
		</div>
	</div>
</div>
<!-- Modal -->
<div class="modal fade" id="product-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">Customer</h4>
			</div>
			<div class="modal-body">
				<h6>Configure a Product</h6>
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">Name</button>
					</span>
					<input id='product_name' type="text" class="form-control" placeholder="">
				</div><!-- /input-group -->
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">Type</button>
					</span>
					<input id='product_type' type="text" class="form-control" placeholder="">
				</div><!-- /input-group -->
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">Origin</button>
					</span>
					<input id='product_origin' type="text" class="form-control" placeholder="">
				</div><!-- /input-group -->
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">Quantity</button>
					</span>
					<input id='product_quantity' type="text" class="form-control" placeholder="">
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
					<button class="btn btn-default" type="button">Price</button>
					</span>
					<input id='product_unit_price' type="text" class="form-control" placeholder="">
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
				<button type="button" class="btn btn-primary" data-action="save">Save changes</button>
			</div>
		</div>
	</div>
</div>
<!-- Modal -->
<div class="modal fade" id="contracts-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">Contract</h4>
			</div>
			<div class="modal-body">
				<h6>Setup Contract</h6>
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">No</button>
					</span>
					<input id='contract_no' type="text" class="form-control" placeholder="">
				</div><!-- /input-group -->
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">Initiate Date</button>
					</span>
					<input id='contract_initiate_date' type="text" data-type='date' class="form-control" placeholder="">
				</div><!-- /input-group -->
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">Date of Agreement</button>
					</span>
					<input id='contract_agreement_date' type="text" data-type='date' class="form-control" placeholder="">
				</div><!-- /input-group -->
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">Commission Rate</button>
					</span>
					<input id='contract_commission_rate' type="text" class="form-control" placeholder="">
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
					<button class="btn btn-default" type="button">Contract Copy</button>
					</span>
					<input type='hidden' name='contract_copy' value='' id='contract_copy'/>
					<form action="http://localhost/cotfield_api/v1/upload" class="dropzone" id="my-dropzone"></form>
				</div><!-- /input-group -->
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary" data-action="save">Save changes</button>
			</div>
		</div>
	</div>
</div>
<!-- Modal -->
<div class="modal fade" id="import_permit-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">Import Permit</h4>
			</div>
			<div class="modal-body">
				<h6>Setup Import Permit</h6>
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">Import Permit No</button>
					</span>
					<input id='import_permit_no' type="text" class="form-control" placeholder="">
				</div><!-- /input-group -->
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">Import Permit Date</button>
					</span>
					<input id='import_permit_date' type="text" data-type='date' class="form-control" placeholder="">
				</div><!-- /input-group -->
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary" data-action="save">Save changes</button>
			</div>
		</div>
	</div>
</div>
<!-- Modal -->
<div class="modal fade" id="lc-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">LC</h4>
			</div>
			<div class="modal-body">
				<h6>Setup LC</h6>
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">LC No</button>
					</span>
					<input id='lc_no' type="text" class="form-control" placeholder="">
				</div><!-- /input-group -->
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">LC Issue Date</button>
					</span>
					<input id='lc_issue_date' type="text" data-type='date' class="form-control" placeholder="">
				</div><!-- /input-group -->
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">LC Type</button>
					</span>
					<input id='lc_type' type="text" class="form-control" placeholder="">
				</div><!-- /input-group -->
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">LC Opening Bank</button>
					</span>
					<input id='lc_opening_bank' type="text" class="form-control" placeholder="">
				</div><!-- /input-group -->
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">LC Receiving Bank</button>
					</span>
					<input id='lc_receiving_bank' type="text" class="form-control" placeholder="">
				</div><!-- /input-group -->
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary" data-action="save">Save changes</button>
			</div>
		</div>
	</div>
</div>
<script type='text/javascript'>
	$( "input[data-type='date']" ).datepicker({
		beforeShow: function() {
			setTimeout(function(){
				$('.ui-datepicker').css('z-index', 99999999999999);
			}, 0);
		}
	});
</script>