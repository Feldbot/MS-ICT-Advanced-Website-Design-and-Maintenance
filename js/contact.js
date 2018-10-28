// contact form
$(document).ready(function(){
	// jQueryUI tooltip widget
	$("#tooltip").tooltip();

	// serialize form data 
	$('#submit').on('click', function (event) {
		var url = 'https://httpbin.org/post';
		var serializedData = $('#contactForm').serialize();
		console.log(serializedData);

	// ajax POST data and server response
	$.ajax({
		url: url,
		type: 'POST',
		data: serializedData,
	}).done(function(serverPostResponse){ 
		console.log(serverPostResponse);
	});
	});
});