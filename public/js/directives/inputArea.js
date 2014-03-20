define(function(require) {
    'use strict';
    var app = require('modules/app');
    var template = require('text!/templates/inputArea.html');

    return app.directive('inputArea', function() {
        return {
            restrict: "A",
            template: template,
            link: function(scope, element) {
                scope.inputEl = document.getElementById('inputAddress');
            }
        };
    });
});