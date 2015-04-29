<div id="logo">
	<a href="<?php echo base_url();?>"><img src='assets/images/logo.png' width='100%' height='100%'/></a>
</div>
<div id="nav">
	<a href="javascript:;" class="links "><span class="bg"></span>Projects</a>
	<a href="javascript:;" class="links " id="notifications"><span class="bg"></span>Notifications</a>
	<a href="javascript:;" class="links "><span class="bg"></span>Customers</a>
	<a href="javascript:void()" class="links "><span class="bg"></span>Gallery</a>
		<div class="sublinks" style="display: none;">
			<ul>
				<li><a href="http://www.rozaproperties.com/career-opportunity" id="career-opportunity" class="">Career Opportunity</a></li>
				<li><a href="http://www.rozaproperties.com/available-jobs" id="available-jobs" class="">Available Jobs</a></li>																																						
			</ul>
		</div>
</div>
<div style='position: fixed;z-index: 10000;bottom: 10px;left: 28px;'>
	<button class='create_project btn btn-success'>Create New Project</button>
</div>
<div id="svgContainer">
</div>
<script type='text/javascript'>
	function CreateSVG (top,bottom,id) {
		var xmlns = "http://www.w3.org/2000/svg";
		var svg = document.createElementNS (xmlns, "svg");
		
		for(var i=0;i<20;i++)
		{
			
			var red=(200+i).toString(16);
			var green=(200+i).toString(16);
			var blue=(200+i).toString(16);
			var x1=top+i*2;
			var x2=bottom+i*2;
			var path = document.createElementNS (xmlns, "path");
			var coords = "M "+x1+', 0';
			coords += " L "+x2+', '+window.innerHeight;
			coords += " L "+(x2+2)+', '+window.innerHeight;
			coords += " L "+(x1+2)+', 0Z';
			path.setAttributeNS (null, 'fill', '#444444');
			path.setAttributeNS (null, 'stroke', '#000000');
			path.setAttributeNS (null, 'stroke-width', 0);
			path.setAttributeNS (null, 'd', coords);				
			path.setAttributeNS (null, 'opacity', ((19-i)/100));
			svg.appendChild(path);
		}
		var path=document.createElementNS(xmlns,"path");
		var coords="M0,0 L350,0 L250,"+window.innerHeight+" L0,"+window.innerHeight+" L0,0Z";				
		path.setAttributeNS(null,'fill','#ffffff');
		path.setAttributeNS(null,'d',coords);				
		svg.appendChild(path);
		
		var svgContainer = document.getElementById (id);
		svgContainer.innerHTML='';
		svgContainer.appendChild (svg);         
	}
	$(document).ready(function(){
		CreateSVG(350,250,'svgContainer');
	});
	$(window).resize(function(){
		CreateSVG(350,250,'svgContainer');
	});
</script>