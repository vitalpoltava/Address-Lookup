define(function(require) {
    'use strict';
    var app = require('modules/app');

    return app.controller('LookupCtrl', function($scope, $timeout, maps) {

        // helpers
        var hideErrorMsg = function() {
            $scope.isError = false;
        };
        var showErrorMsg = function(msg, delay) {
            $scope.isError = true;
            $scope.error_message = msg;
            $timeout(hideErrorMsg, delay || 2000);
        };
        var catchEmptyError = function (el) {
            showErrorMsg('No address provided!');
            el.focus();
        };
        var validateInput = function(value) {
            return !!value;
        };
        var initLookup = function(addr) {
            $scope.isError = false;
            $scope.lookup(addr, $scope, showErrorMsg);
        };

        // add public API for directives
        $scope.lookup = maps.lookup;
        $scope.showMap = maps.showMap;
        $scope.findAddress = function(el) {
            var addr = el.value;
            if (validateInput(addr)) {
                initLookup(addr);
            } else {
                catchEmptyError(el);
            }
        }
    });
});