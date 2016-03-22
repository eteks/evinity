<?php
	
	$admin_email = "info@evinity.com";
	$title = "Request for".$_POST['formname'];
	$email = $_POST['Email'];
	$data = $_POST;
	unset($data['formname']);
	$comment = '';
	$comment .='You have received mail about'.$_POST['formname']; 
	foreach($data as  $key => $value){
		$comment .= $key.":".$value."\n" ;
	}
	$send = mail($admin_email,$title, $comment, "From:" . $email);
	if($send){
		echo 'Your query has been submitted successfully.Our excutive will contact you soon.Please give as time to serve you better';
	}
	else{
		echo 'Your query not submitted due to some technical problem.Please resend later';
	}
?>