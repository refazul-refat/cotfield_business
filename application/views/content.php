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
	<div class='candidate' id='clock-panel'>
		<div id="clock" class="clock"><div style="font-size:20px;float:left;width:182px;">2. May 2015</div><div style="font-size:20px;float:left;">12:39:11</div><div style="clear:both;"></div></div>
		<style>
			.clock{
				position: fixed;
				font-family: digit;
				top: 30px;
			}
		</style>
		<script type='text/javascript'>
		
			function update() {
			  $('#clock').html('<div style="font-size:20px;float:left;width:182px;">'+moment().format('D. MMMM YYYY')+'</div><div style="font-size:20px;float:left;">'+moment().format('H:mm:ss')+'</div><div style="clear:both;"></div>');
			}
			setInterval(update, 1000);

		</script>
	</div>
	<div class='candidate' id='breadcrumb-panel'>
		<div style='position:fixed;top: 65px;color: #075626;  font-size: 20px;font-family: schoolmedium;'>Projects > <a href='#bootstrap' id='pname'>Project Name</a></div>
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
	<div class='candidate' id='button-panel' style="position:fixed;bottom:10px;right:100px;">
		<button class='btn btn-danger' id='remove'>Remove This Project</button>
		<button class='btn btn-success' id='prev'>Prev</button>
		<button class='btn btn-success' id='next'>Next</button>
	</div>
	<div class='candidate' id='notification-panel'>
		
	</div>
	<div class='candidate' id='customers-panel'>
		
	</div>
	<div class='candidate' id='suppliers-panel'>
		
	</div>
</div>