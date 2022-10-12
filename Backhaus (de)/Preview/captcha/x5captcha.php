<?php
include("../res/x5engine.php");
$nameList = array("las","s6j","pss","j7u","rea","ye6","h32","pxs","26u","75k");
$charList = array("D","R","C","3","J","6","A","A","R","X");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
