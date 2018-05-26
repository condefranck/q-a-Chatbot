<?php

$question = $_GET["q"];
$situation = $_GET["s"];

$question = strtolower($question);
$data = Array();



//banned words
if(stripos($question, 'fuck') !== false || stripos($question, 'suck') !== false || stripos($question, 'bitch') !== false || stripos($question, 'ass') !== false) {
	$data["answer"] = "Hey... don't be so rude!";
	$data["situation"] = $situation;
	header('Content-Type: application/json');
	echo json_encode($data);
	die();
}



//chatbot situations and conversation
switch ($situation) {


	//start situation
	case 0:
		$data["answer"] = "Say hello!";
		$data["situation"] = 1;
	break;


	case 1:
	
		if(stripos($question, 'hell') !== false || stripos($question, 'hi') !== false || stripos($question, 'good') !== false) {
			$data["answer"] = "Hi! What's your name?";
			$data["situation"] = 2;
			$noresponse = $response + 1;
		}

		if($noresponse == 0) {
			$data["answer"] = "Hey... just say 'Hello'!";
			$data["situation"] = 1;
		}

	break;


	case 2:
		$data["answer"] = "Welcome ".$question."!";
		$data["situation"] = 0;
	break;


	default:
		$data["answer"] = "Sorry... can you repeat?";
	break;

}


header('Content-Type: application/json');
echo json_encode($data);

