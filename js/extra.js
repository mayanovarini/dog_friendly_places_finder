$('#city-input').keyup(function(){
	update();
});

function update() {
	$('#toggle-place').val($('#city-input').val());
}

$(document).ready(function(){
	$('#toggle-place').click(function() {
	    $(".nl-field.nl-dd").addClass('nl-field-open');
	});
});

$(document).ready(function(){
	$('.nl-overlay').click(function() {
	    $(".nl-field-open").removeClass('nl-field-open');
	});
});

$(document).ready(function(){
	$('#toggle-city').click(function() {
	    $(".nl-field.nl-ti-text").addClass('nl-field-open');
	});
});


$(document).ready(function(){
	$('.nl-overlay').click(function() {
	    $(".nl-field.nl-ti-text").removeClass('nl-field-open');
	});
});

$(document).ready(function(){
	$('.nl-field-go').click(function() {
	    $(".nl-field.nl-ti-text").removeClass('nl-field-open');
	});
});

$('#city-input').change(function() {
    $('#toggle-city').text($(this).val());
});

$('#city-submit').click(function() {
    $('#toggle-city').text($('#city-input').val());
})

function closeNav() {
    document.getElementById("mysidenav").style.width = "0px";
    document.getElementById("section-id").style.width = "100%";
}

function openNav() {
    document.getElementById("mysidenav").style.width = "35%";
    document.getElementById("section-id").style.width= "100%";
}