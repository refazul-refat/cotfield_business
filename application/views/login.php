<html>
	<head>
		<link rel='stylesheet' href='assets/css/login.css'/>
	</head>
	<body>
		<form method="post" action="http://api.cotfield.com/v1/login" class="login">
			<p>
				<label for="login">User:</label>
				<input type="text" name="user" id="user" required autocomplete="off" placeholder="name@cotfield.com" value="">
			</p>

			<p>
				<label for="password">Password:</label>
				<input type="password" name="pass" required id="pass" placeholder="*********" value="">
			</p>

			<p class="login-submit">
				<input type='hidden' name='origin' value='<?php echo base_url();?>'/>
				<button type="submit" class="login-button">Login</button>
			</p>
			<p class="forgot-password"><a href="javascript:;">Forgot your password?</a></p>
		</form>
	</body>
</html>