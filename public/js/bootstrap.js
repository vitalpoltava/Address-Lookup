define(function(require, angular) {
    'use strict';
    var angular = require('angular');
    var lookup = require('modules/app');
    var ctrl = require('controllers/LookupCtrl');
    var inputArea = require('directives/inputArea');
    var mapArea = require('directives/mapArea');
    var mapsProvider = require('modules/maps')

    angular.bootstrap(document.getElementById('main'), ['lookup']);
});