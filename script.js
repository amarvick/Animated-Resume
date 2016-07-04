$(document).ready(function() {

	$('#name').hide();
	$('#description').hide();
	$('#hr1').hide();
	$('#photo1').hide();
	$('#education').hide();
	$('#button0').hide();
	$('#top-skills').hide();
	$('#projects').hide();
	$('#work-experience').hide();
	$('#photo2').hide();
	$('#hr2').hide();
	$('.resume-contact').hide();
	$('#GUlogo').hide();
	$('#GIFlogo').hide();
	$('#education #p-GUlogo').hide();
	$('#education #p-education').hide();
	$('#education #p-GIFlogo').hide();		

	$('#button1').hide();
	$('#button1').fadeIn(500);	

	$('#button1').click(function() {
		$(this).fadeOut(500);
		$('#name').fadeIn(500);
		$('#description').fadeIn(500);
		$('#hr1').fadeIn(500);
		$('#photo1').fadeIn(500);
		$('#education').fadeIn(500);

		$('#hr1').animate({width: "+=785px"}, 200); 
	});

	$('#education').click(function() {
		if ($(this).css("width") == "190px") {
			$(this).animate({height: "+=90px", width: "+=660px"}, 500);
			$('#education h1').html("EDUCATION");

			$('#education #p-GUlogo').html("GONZAGA UNIVERSITY<br>Spokane, WA<br>B.Sc, Civil Engineering<br>Class of 2016");
			$('#education #p-education').html("Computer Science I-II: Python & C++ Fundamentals,<br>Calculus I-III, Introduction to OOP, Principles of Marketing,<br>Mechanics of Materials, Finite Elements + Laboratory,<br>Structural Analysis, Transportation Design + Laboratory");
			$('#education #p-GIFlogo').html("GONZAGA-IN-FLORENCE<br>Florence, Italy<br>Study Abroad<br>Spring 2016");		

			$('#education #p-GUlogo').fadeIn(1500);
			$('#education #p-education').fadeIn(1500);
			$('#education #p-GIFlogo').fadeIn(1500);

			$('#GUlogo').fadeIn(500);
			$('#GIFlogo').fadeIn(500);
			$('#button0').fadeIn(500);

		}

	});

	$('#button0').click(function() {
		$(this).fadeOut(500);
		$('#education').fadeOut(500);
		$('#top-skills').fadeIn(500);

	});

	$('#button2').click(function() {
		$(this).fadeOut(500);
		$('#projects').fadeIn(500);
		$('#top-skills').fadeOut(500);

	});

	$('#button3').click(function() {
		$(this).fadeOut(500);
		$('#projects').fadeOut(500);
		$('#work-experience').fadeIn(500);

	});

	$('#button4').click(function() {
		$(this).fadeOut(500);
		$('#photo2').fadeIn(500);
		$('#hr2').fadeIn(500);
		$('.resume-contact').fadeIn(500);
		
		$('#education').fadeIn(500);
		$('#top-skills').fadeIn(500);
		$('#projects').fadeIn(500);
	});

});