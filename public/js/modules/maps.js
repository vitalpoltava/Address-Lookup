define(function(require) {
    'use strict';
    var app = require('modules/app');

    return app.factory('maps', function() {

        /**
         *  Private area
         */
        var map;
        var mapCenter = {lat: 51.261646, lng: 10.306272};
        var geocoder = new google.maps.Geocoder();

        var codeAddress = function(address) {
            var marker;
            geocoder.geocode( { 'address': address}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    marker = new google.maps.Marker({
                        map: map,
                        animation: google.maps.Animation.DROP,
                        position: results[0].geometry.location
                    });
                } else {
                    alert("Geocode was not successful for the following reason: " + status);
                }
            });
        }

        var showGMap = function(position, elId, zoom) {
            var myLatlng = new google.maps.LatLng(position.lat, position.lng);
            var mapOptions = {
                center: myLatlng,
                zoom: zoom || 6
            };
            map = new google.maps.Map(document.getElementById(elId), mapOptions);

            return map;
        }

        // External API
        return {
            showMap: function(elId) {
                return showGMap(mapCenter, elId);
            },

            geoCode: codeAddress
        };
    });
});