"use strict";

var app = angular.module("dabbble", ["ngRoute", "dabbble.controllers", "dabbble.filters", "dabbble.services"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/shots/:id", {controller: "ShotsCtrl", templateUrl: "partials/shot.html"})
        .when("/:list", {controller: "ShotsListCtrl", templateUrl: "partials/shots_list.html"})
        .otherwise({redirectTo: "popular"});
});