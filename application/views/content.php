<div id='content'>
	<div style='float:right;width:75%;'>
		<div id="intro" class="current page" style='display:none;'>
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
		<div style='position: fixed;z-index: 1000;left:50%;top:50%;'>
			<button id='big_button' class='create_project btn btn-success btn-lg' style='display:none;'>Create New Project</button>
		</div>
	</div>
	<div style='position:fixed;bottom:10px;right:100px;'>
		<button class='btn btn-success' id='prev' style='display:none;'>Prev</button>
		<button class='btn btn-success' id='next' style='display:none;'>Next</button>
	</div>	
</div>
<div class="modal fade" id="project-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">Project</h4>
			</div>
			<div class="modal-body">
				<h6>Create new Project</h6>
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">Project Name</button>
					</span>
					<input id='project_name' type="text" class="form-control" placeholder="">
				</div><!-- /input-group -->
				<div class="input-group">
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">Project Description</button>
					</span>
					<input id='project_description' type="text" class="form-control" placeholder="">
				</div><!-- /input-group -->
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary" data-action="create-project">Create</button>
			</div>
		</div>
	</div>
</div>