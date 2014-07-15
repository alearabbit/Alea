$(document).ready(function() {
	
	$('#pic1').fadeTo('fast', 0.5);

	$('#pic1').hover(
		function() {
			$(this).fadeTo('fast', 1)
		},
		function() {
			$(this).fadeTo('fast', 0.5)
		}
	);

	$('#pic2').fadeTo('fast', 0.5);

	$('#pic2').hover(
		function() {
			$(this).fadeTo('fast', 1)
		},
		function() {
			$(this).fadeTo('fast', 0.5)
		}
	);
	$('#pic3').fadeTo('fast', 0.5);

	$('#pic3').hover(
		function() {
			$(this).fadeTo('fast', 1)
		},
		function() {
			$(this).fadeTo('fast', 0.5)
		}
	);

	$('#pic1').click(function(){
		$('#big1').fadeIn(1000);
		$('#big2').fadeOut(1000);
		$('#big3').fadeOut(1000);
	});

	$('#pic2').click(function(){
		$('#big1').fadeOut(1000);
		$('#big2').fadeIn(1000);
		$('#big3').fadeOut(1000);
	});

	$('#pic3').click(function(){
		$('#big1').fadeOut(1000);
		$('#big2').fadeOut(1000);
		$('#big3').fadeIn(1000);
	});


	
	//$('#next1').fadeIn(1000);
	$('#next1').fadeOut(5000);
	$('#next2').fadeIn(5000);
	$('#next2').fadeOut(10000);
	$('#next3').fadeIn(10000);
	


});



