
$(document).ready(function(){
	$('#toggle-place').click(function() {
		$("#type-chooser").addClass('nl-field-open');
	});

	$('.nl-overlay').click(function() {
		$(".nl-field-open").removeClass('nl-field-open');
		$(".nl-field.nl-ti-text").removeClass('nl-field-open');
	});

	$('#place-options').click(function() {
		$(".nl-field-open").removeClass('nl-field-open');
	});

	$('#toggle-city').click(function() {
		$("#city-chooser").addClass('nl-field-open');
	});

	$('.nl-field-go').click(function() {
		$(".nl-field.nl-ti-text").removeClass('nl-field-open');
	});

	$('#main-form').submit(function(e) {
		e.preventDefault();

		console.log("submitted");
		if ( $('#city-input').val().length > 0) {
			$('#toggle-city').text($('#city-input').val().split(',')[0]);
		} else {
			$('#toggle-city').text("any city");
		}

		$('html, body').animate({
		  scrollTop: $('#browser').offset().top
		}, 1000);
	});

	$('#sidebar-form').submit(function(e) {
		e.preventDefault();
	})

	$('#type-any,#type-park,#type-vet,#type-cafe').click(function() {
		$('#toggle-place').text($(this).text());
	});

	$("#type-any,#type-cafe,#type-park,#type-vet").hover(
		function() {
			$(this).addClass("nl-dd-checked");
		}, 
		function() {
			$(this).removeClass("nl-dd-checked");
		}
	);

	$('#burger').click(openNav);
	$('#x-button').click(closeNav);
});

function closeNav() {
	document.getElementById("mysidenav").style.width = "0px";
	document.getElementById("section-id").style.width = "100%";
}

function openNav() {
	document.getElementById("mysidenav").style.width = "35%";
	document.getElementById("section-id").style.width= "100%";
}