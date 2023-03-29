"use strict";


function gMapHome () {
	if ($('.google-map').length) {
		$('.google-map').each(function () {
			// getting options from html 
			var Self = $(this);
			var mapName = Self.attr('id');
			var mapLat = Self.data('map-lat');
			var mapLng = Self.data('map-lng');
			var iconPath = Self.data('icon-path');
			var mapZoom = Self.data('map-zoom');
			var mapTitle = Self.data('map-title');


			var styles = [
					    {
					        "featureType": "administrative",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "color": "#444444"
					            }
					        ]
					    },
					    {
					        "featureType": "landscape",
					        "elementType": "all",
					        "stylers": [
					            {
					                "color": "#f2f2f2"
					            }
					        ]
					    },
					    {
					        "featureType": "landscape",
					        "elementType": "geometry.fill",
					        "stylers": [
					            {
					                "color": "#e5ecf0"
					            }
					        ]
					    },
					    {
					        "featureType": "poi",
					        "elementType": "all",
					        "stylers": [
					            {
					                "visibility": "off"
					            }
					        ]
					    },
					    {
					        "featureType": "road",
					        "elementType": "all",
					        "stylers": [
					            {
					                "saturation": -100
					            },
					            {
					                "lightness": 45
					            }
					        ]
					    },
					    {
					        "featureType": "road",
					        "elementType": "geometry.fill",
					        "stylers": [
					            {
					                "color": "#7094b0"
					            }
					        ]
					    },
					    {
					        "featureType": "road.highway",
					        "elementType": "all",
					        "stylers": [
					            {
					                "visibility": "simplified"
					            }
					        ]
					    },
					    {
					        "featureType": "road.arterial",
					        "elementType": "labels.icon",
					        "stylers": [
					            {
					                "visibility": "off"
					            }
					        ]
					    },
					    {
					        "featureType": "transit",
					        "elementType": "all",
					        "stylers": [
					            {
					                "visibility": "off"
					            }
					        ]
					    },
					    {
					        "featureType": "water",
					        "elementType": "all",
					        "stylers": [
					            {
					                "color": "#cadbe9"
					            },
					            {
					                "visibility": "on"
					            }
					        ]
					    }
					]


			// if zoom not defined the zoom value will be 15;
			if (!mapZoom) {
				var mapZoom = 12;
			};
			// init map
			var map;
			map = new GMaps({
			    div: '#'+mapName,
			    scrollwheel: false,
			    lat: mapLat,
			    lng: mapLng,
			    styles: styles,
			    zoom: mapZoom
			});
			// if icon path setted then show marker
			if(iconPath) {
				
				map.addMarker({
			    	icon: 'images/map/1.png',
			    	lat: 40.925372,
			      	lng: -74.276544,
			      	title: 'USA Gasoline',
			      	infoWindow: {
						content: '<h5>USA Gasoline</h5> <p>+8801954924794</p>'
					}
				});
				map.addMarker({
			    	icon: 'images/map/2.png',
			    	lat: 40.940372,
			      	lng: -74.247161,
			      	title: 'Eastport Gas',
			      	infoWindow: {
						content: '<h5>Eastport Gas</h5> <p>+8801954924794</p>'
					}
				});
				map.addMarker({
			    	icon: 'images/map/2.png',
			    	lat: 40.953921,
			      	lng: -74.249629,
			      	title: 'Fast Gasoline ',
			      	infoWindow: {
						content: '<h5>Fast Gasoline </h5> <p>+8801954924794</p>'
					}
				});
				map.addMarker({
			    	icon: 'images/map/2.png',
			    	lat: 40.963174,
			      	lng: -74.264113,
			      	title: 'Fast Gasoline ',
			      	infoWindow: {
						content: '<h5>Fast Gasoline </h5> <p>+8801954924794</p>'
					}
				});
				
			}
		});  
	};
}





function contactUsMap () {
	if ($('.contact-us-map').length) {
		$('.contact-us-map').each(function () {
			// getting options from html 
			var Self = $(this);
			var mapName = Self.attr('id');
			var mapLat = Self.data('map-lat');
			var mapLng = Self.data('map-lng');
			var iconPath = Self.data('icon-path');
			var mapZoom = Self.data('map-zoom');
			var mapTitle = Self.data('map-title');


			var styles =	[
					    {
					        "featureType": "administrative",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "color": "#444444"
					            }
					        ]
					    },
					    {
					        "featureType": "landscape",
					        "elementType": "all",
					        "stylers": [
					            {
					                "color": "#f2f2f2"
					            }
					        ]
					    },
					    {
					        "featureType": "poi",
					        "elementType": "all",
					        "stylers": [
					            {
					                "visibility": "off"
					            }
					        ]
					    },
					    {
					        "featureType": "road",
					        "elementType": "all",
					        "stylers": [
					            {
					                "saturation": -100
					            },
					            {
					                "lightness": 45
					            }
					        ]
					    },
					    {
					        "featureType": "road.highway",
					        "elementType": "all",
					        "stylers": [
					            {
					                "visibility": "simplified"
					            }
					        ]
					    },
					    {
					        "featureType": "road.arterial",
					        "elementType": "labels.icon",
					        "stylers": [
					            {
					                "visibility": "off"
					            }
					        ]
					    },
					    {
					        "featureType": "transit",
					        "elementType": "all",
					        "stylers": [
					            {
					                "visibility": "off"
					            }
					        ]
					    },
					    {
					        "featureType": "water",
					        "elementType": "all",
					        "stylers": [
					            {
					                "color": "#cbf0ff"
					            },
					            {
					                "visibility": "on"
					            }
					        ]
					    }
					]


			// if zoom not defined the zoom value will be 15;
			if (!mapZoom) {
				var mapZoom = 12;
			};
			// init map
			var map;
			map = new GMaps({
			    div: '#'+mapName,
			    scrollwheel: false,
			    lat: mapLat,
			    lng: mapLng,
			    styles: styles,
			    zoom: mapZoom
			});
			// if icon path setted then show marker
			if(iconPath) {
				
				map.addMarker({
			    	icon: 'images/map/3.png',
			    	lat: 40.731403,
			      	lng: -74.275791,
			      	title: 'Primrose Guest House',
			      	infoWindow: {
						content: '<h5>Primrose Guest House</h5> <p>+8801954924794</p>'
					}
				});
				
			}
		});  
	};
}





// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
		// add your functions
		gMapHome();
		contactUsMap ();
	})(jQuery);
});