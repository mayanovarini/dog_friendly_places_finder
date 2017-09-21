
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
	$('#place-options').click(function() {
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


$('#city-submit').click(function() {
	if ( $('#city-input').val().length > 0) {
		$('#toggle-city').text($('#city-input').val().split(',')[0]);
	} else {
		$('#toggle-city').text("any city");
	}
});

$('#cafe').click(function() {
    $('#toggle-place').text($('#cafe').text());
});

$('#any-place').click(function() {
    $('#toggle-place').text($('#any-place').text());
});

$("#any-place").hover(
	function() {
		$(this).addClass("nl-dd-checked");
	}, 
	function() {
		$(this).removeClass("nl-dd-checked");
	}
);


$("#cafe").hover(
	function() {
		$(this).addClass("nl-dd-checked");
	}, 
	function() {
		$(this).removeClass("nl-dd-checked");
	}
);

$("#dog-park").hover(
	function() {
		$(this).addClass("nl-dd-checked");
	}, 
	function() {
		$(this).removeClass("nl-dd-checked");
	}
);

$("#vet").hover(
	function() {
		$(this).addClass("nl-dd-checked");
	}, 
	function() {
		$(this).removeClass("nl-dd-checked");
	}
);


$('#dog-park').click(function() {
    $('#toggle-place').text($('#dog-park').text());
});

$('#vet').click(function() {
    $('#toggle-place').text($('#vet').text());
});

function closeNav() {
    document.getElementById("mysidenav").style.width = "0px";
    document.getElementById("section-id").style.width = "100%";
}

function openNav() {
    document.getElementById("mysidenav").style.width = "35%";
    document.getElementById("section-id").style.width= "100%";
}