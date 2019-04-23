/**
 * 
 */

function move(seq){
	var offset = $(seq).offset();
	$('html,body').animate({scrollTop : offset.top - 50},400);
}