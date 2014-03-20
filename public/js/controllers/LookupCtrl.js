define(function(require) {
    'use strict';
    var app = require('modules/app');

    return app.controller('LookupCtrl', function($scope, $timeout, maps) {

        // helpers
        var showErrorMsg = function(msg) {
            $scope.isError = true;
            $scope.error_message = msg;
        };
        var hideErrorMsg = function() {
            $scope.isError = false;
        };
        var validateInput = function(value) {
            return !!value;
        };
        var initLookup = function(addr) {
            $scope.isError = false;
            maps.geoCode(addr);
        };
        var catchEmptyError = function (el) {
            showErrorMsg('No address provided!');
            $timeout(hideErrorMsg, 2000);
            el.focus();
        };

        // add public API for directives
        $scope.showMap = maps.showMap;
        $scope.findAddress = function(el) {
            var addr = el.value;
            if (validateInput(addr)) {
                initLookup(addr)
            } else {
                catchEmptyError(el);
            }
        }
    });
});