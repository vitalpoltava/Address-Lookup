define(function(require) {
    'use strict';
    var app = require('modules/app');

    /**
     * Provider, which implements Google Maps API to the system
     */
    return app.factory('maps', function($rootScope) {

        /**
         *  Private area
         */
        var map;
        var mapCenter = {lat: 51.261646, lng: 10.306272};
        var geocoder = new google.maps.Geocoder();

        var showGMap = function(position, elId, zoom) {
            var myLatlng = new google.maps.LatLng(position.lat, position.lng);
            var mapOptions = {
                center: myLatlng,
                zoom: zoom || 6
            };
            map = new google.maps.Map(document.getElementById(elId), mapOptions);
            return map;
        };

        var codeAddress = function(address, scope, errHandler) {
            var marker;
            geocoder.geocode( { 'address': address}, function(results, status) {
                var errMsg = "Geocode was not successful for the following reason: ";
                if (status == google.maps.GeocoderStatus.OK) {
                    marker = new google.maps.Marker({
                        map: map,
                        animation: google.maps.Animation.DROP,
                        position: results[0].geometry.location
                    });
                } else {
                    scope.$apply(function(){
                        errHandler(errMsg + status, 4000);
                    });
                }
            });
        };

        // External API
        return {
            showMap: function(elId) {
                return showGMap(mapCenter, elId);
            },

            lookup: codeAddress
        };
    });
});