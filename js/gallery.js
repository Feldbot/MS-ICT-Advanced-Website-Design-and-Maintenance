// secret 2fcfb9a5b7bc67b4


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

// Seth's instructions for looping over array and selecting specific images
// window.jsonFlickrFeed = function(data) {
// console.log(data);
// var images = data.items[3].media.m;
// var images = data.images;
// var imagesBySomeAuthor = [];
// for (var i = 0 ; i < images.length; i++) {
// 	if (images[i].author === 'nobody@flickr.com (treegrow)'){
// 		imagesBySomeAuthor.push(images[i]);
// 	}
// }

//var specificImage = images[3];
// Loop over images
//  use $.each() method to parse JSONP response