define(function(require) {
    'use strict';
    var app = require('modules/app');
    var mapId = 'map-canvas';

    return app.directive('mapArea', function() {
        return {
            restrict: "A",
            template: '<div id="'+ mapId +'"><h6 class="centered">Waiting for map...</h6></div>',
            link: function(scope, element, attrs) {
                scope.showMap(mapId);
            }
        };
    });
});