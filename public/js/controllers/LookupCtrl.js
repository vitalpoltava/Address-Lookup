define(function(require) {
    'use strict';
    var app = require('modules/app');
    return app.controller('LookupCtrl', function($scope, $timeout, maps) {
        var hideError = function() {
            $scope.isError = false;
        };
        $scope.showMap = maps.showMap;
        $scope.findAddress = function(el) {
            var addr = el.value;
            if (!addr) {
                $scope.isError = true;
                $scope.error_message = 'No address provided!';
                $timeout(hideError, 2000);
                el.focus();
                return false;
            } else {
                $scope.isError = false;
                maps.geoCode(addr);
            }
        }
    });
});