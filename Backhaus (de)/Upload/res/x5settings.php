<?php

/*
|-------------------------------
|	GENERAL SETTINGS
|-------------------------------
*/

$imSettings['general'] = array(
	'url' => 'https://bacfrb15.lima-city.de/',
	'homepage_url' => 'https://bacfrb15.lima-city.de/home.html',
	'icon' => 'https://bacfrb15.lima-city.de/favImage.png',
	'version' => '2019.2.7.0',
	'sitename' => 'Backhaus',
	'lang_code' => 'de-DE',
	'public_folder' => '',
	'salt' => '8fjdy2gz6io713ur5psuslkyq9pcd4i9502hudzx6whgeq4y5rsxy52nukn',
	'use_common_email_sender_address' => false,
	'common_email_sender_addres' => ''
);
/*
|-------------------------------
|	PASSWORD POLICY
|-------------------------------
*/

$imSettings['password_policy'] = array(
	'required_policy' => false,
	'minimum_characters' => '6',
	'include_uppercase' => false,
	'include_numeric' => false,
	'include_special' => false,
);
/*
|-------------------------------
|	Captcha
|-------------------------------
*/ImTopic::$captcha_code = "		<div class=\"x5captcha-wrap\">
			<label>Wortprüfung:</label><br />
			<input type=\"text\" class=\"imCpt\" name=\"imCpt\" maxlength=\"5\" />
		</div>
";


$imSettings['admin'] = array(
	'icon' => 'admin/images/logo_4rpwh52e.png',
	'theme' => 'orange',
	'extra-dashboard' => array(),
	'extra-links' => array()
);


/*
|--------------------------------------------------------------------------------------
|	DATABASES SETTINGS
|--------------------------------------------------------------------------------------
*/

$imSettings['databases'] = array();
$ecommerce = Configuration::getCart();
$ecommerce->setSettings(array(
	'force_sender' => false,
	'email_opening' => 'Sehr geehrter Kunde,<br /> <br /> Vielen Dank für Ihre Bestellung. Ihre Zahlung ist noch nicht bei uns eingegangen<br /> <br /> Nachstehend finden Sie die Liste der bestellten Produkte, die Rechnungs- und Lieferinformationen sowie Hinweise zur Zahlungsabwicklung.',
	'email_closing' => 'Für weitere Informationen stehen wir Ihnen gern zur Verfügung.<br /><br />Mit freundlichen Grüßen, Ihr Vertriebs-Team.',
	'useCSV' => true,
	'header_bg_color' => 'rgba(0, 0, 0, 1)',
	'header_text_color' => 'rgba(255, 255, 255, 1)',
	'cell_bg_color' => 'rgba(243, 243, 243, 1)',
	'cell_text_color' => 'rgba(0, 0, 0, 1)',
	'border_color' => 'rgba(211, 211, 211, 1)',
	'owner_email' => 'bacfrb15@htl-kaindorf.ac.at',
	'vat_type' => 'included'
));

$ecommerce->setPriceFormatData(array(
	'decimals' => 2,
	'decimal_sep' => '.',
	'thousands_sep' => '',
	'currency_to_right' => true,
	'currency_separator' => ' ',
	'show_zero_as' => '0',
	'currency_symbol' => '€',
	'currency_code' => 'EUR',
	'currency_name' => 'Euro',
));


/*
|-------------------------------------------------------------------------------------------
|	GUESTBOOK SETTINGS
|-------------------------------------------------------------------------------------------
*/

$imSettings['guestbooks'] = array();


/*
|-------------------------------
|	EMAIL SETTINGS
|-------------------------------
*/

$ImMailer->emailType = 'phpmailer';
$ImMailer->header = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">' . "\n" . '<html>' . "\n" . '<head>' . "\n" . '<meta http-equiv="content-type" content="text/html; charset=utf-8">' . "\n" . '<meta name="generator" content="Incomedia WebSite X5 Evolution 2019.2.7 - www.websitex5.com">' . "\n" . '</head>' . "\n" . '<body bgcolor="#C06C84" style="background-color: #C06C84;">' . "\n\t" . '<table border="0" cellpadding="0" align="center" cellspacing="0" style="padding: 0; margin: 0 auto; width: 700px;">' . "\n\t" . '<tr><td id="imEmailContent" style="min-height: 300px; padding: 10px; font: normal normal normal 9pt \'Raleway\'; color: #000000; background-color: #FFFFFF; text-align: left; text-decoration: none;  width: 700px;border-style: solid; border-color: transparent; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;background-color: #FFFFFF" width="700px">' . "\n\t\t";
$ImMailer->footer = "\n\t" . '</td></tr>' . "\n\t" . '</table>' . "\n" . '<table width="100%"><tr><td id="imEmailFooter" style="font: normal normal normal 8pt \'Raleway\'; color: #FFFFFF; background-color: transparent; text-align: center; text-decoration: none;  padding: 10px; margin-top: 5px;background-color: transparent">' . "\n\t\t" . 'Die in dieser E-Mail enthaltenen Informationen sind ausschließlich für den genannten Empfänger bestimmt.<br>Sollten Sie diese E-Mail fälschlicherweise erhalten haben, informieren Sie bitte umgehend den Absender und  löschen Sie die Nachricht, ohne Kopien zu erstellen.' . "\n\t" . '</td></tr></table>' . "\n\t" . '</body>' . "\n" . '</html>';
$ImMailer->bodyBackground = '#FFFFFF';
$ImMailer->bodyBackgroundEven = '#FFFFFF';
$ImMailer->bodyBackgroundOdd = '#F0F0F0';
$ImMailer->bodyBackgroundBorder = '#CDCDCD';
$ImMailer->bodyTextColorOdd = '#000000';
$ImMailer->bodySeparatorBorderColor = '#000000';
$ImMailer->emailBackground = '#C06C84';
$ImMailer->emailContentStyle = 'font: normal normal normal 9pt \'Raleway\'; color: #000000; background-color: #FFFFFF; text-align: left; text-decoration: none; ';
$ImMailer->emailContentFontFamily = 'font-family: Raleway;';

// End of file x5settings.php