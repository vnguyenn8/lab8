function initMap() {
	// create a center marker at SCC
	var ucsd_ltlng = {lat:32.8788, lng:-117.2359}

	//create a map object and specify the DOM element or display
	var map = new google.maps.Map (document.getElementById('map'), {
		center: ucsd_ltlng,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position: ucsd_ltlng,
		map: map,
		title: "UCSD"
	});
}