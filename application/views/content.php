<div id='content'>
	<div style='position: fixed;right: 0px;z-index: 1;background-color: #FFFFFF;padding: 5px;'><a href='index.php/logout'>Log Out</a></div>
	<div class='candidate' id='gallery-panel'>
		<nav>
			<div id="up" style="visibility: hidden;"></div>
			<div class="breaker"></div>
			<div id="down" style="visibility: visible;"></div>
			<div class="breaker"></div>
		</nav>
		<div id='gallery'>
		</div>
	</div>
	<div class='candidate' id='project-panel' style='float:right;width:75%;'>
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
	</div>
	<div class='candidate' id='quick-nav'>
	</div>
	<div class='candidate' id='button-panel'>
		<div style='position:fixed;bottom:10px;right:100px;'>
			<button class='btn btn-danger' id='remove'>Remove This Project</button>
			<button class='btn btn-success' id='prev'>Prev</button>
			<button class='btn btn-success' id='next'>Next</button>
		</div>
	</div>
	<div class='candidate' id='notification-panel'>
		
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