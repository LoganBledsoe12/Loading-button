var $clickMeButton = $('#click-me');
$clickMeButton.on('click', buttonClick);
function buttonClick (){
	$clickMeButton.text ('Loading...');
	setTimeout(loading, 4000 );
	$clickMeButton.prop('disabled', true)
}
function loading (){
	$clickMeButton.text ('Submit');
	$clickMeButton.prop('disabled', false)
}