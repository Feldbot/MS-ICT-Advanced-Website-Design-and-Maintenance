
$(document).ready(function(){
	console.log('running!');

// ajax call for flickr API (demo from Missing Manual)
	var URL = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	var searchInfo = {
		id: "136777400@N04",
		format: "json"
	};
	$.getJSON(URL, searchInfo, function(data) {
		$('h3').text(data.title);

		var photoHTML = '';
		$.each(data.items, function(i,photo) {
			photoHTML += '<span class="image">';
			photoHTML += '<a href="' + photo.link + '">';
			photoHTML += '<img src="' + photo.media.m.replace('_m', '_s') + '"></a></span>';
		});
	$('#photos').append(photoHTML);
	});
});
