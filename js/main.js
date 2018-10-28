$(document).ready(function(){
	var url = 'https://httpbin.org/get';

	//  GET footer IP address
	$.ajax({
		url: url,
		type: 'GET'
	}).done(function(serverPostResponse){ 
	
	// Append IP address to footer
	var IP = serverPostResponse.origin
	var footer = document.querySelector('footer');
	var h6 = document.createElement('h6');
	h6.textContent = '<!-- Your IP address is ' + IP + ', by the way. -->';
	footer.appendChild(h6)
	});
	
	// set data to local storage
	var setName = localStorage.setItem('name', 'Daniel Feldman');
	var setCourse = localStorage.setItem('course', 'ICT 4510: Advanced Website Design and Maintenance');
	setName;
	setCourse;
	
	// get data from local storage
	document.querySelector('footer button').addEventListener('click', function(){
	var getName = localStorage.getItem('name');
	var getCourse = localStorage.getItem('course');
	document.querySelector('#localStorage').textContent = "\u00A9 " + getName + " for " + getCourse; //escaped character is copyright symbol
	});
});
