
<?php
	$url = explode(".", $_SERVER['SERVER_NAME']);
	if ($url[0] == 'testserver') {
		echo '<a href="http://testserver.loc/statskog/v3"><div class="top-logo"></div></a>';
	} else {
		echo '<a href="http://redhost.no/tmp/statskog/v3/"><div class="top-logo"></div></a>';
	}
?>
