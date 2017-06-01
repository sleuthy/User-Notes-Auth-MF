"use strict";

var app = angular.module("usernotes", ['ngRoute']);

 app.config(function($routeProvider){
 	$routeProvider.
 	when('/login', {
 		templateUrl: 'partials/login.html',
 		controller: 'loginCtrl'
 	}).
 	when('/newnote', {
 		templateUrl: 'partials/newnote.html',
 		controller: 'newnoteCtrl'
 	}).
 	when('/notelist', {
 		templateUrl: 'partials/notelist.html',
 		controller: 'notelistCtrl'
 	}).
 	when('/reg', {
 		templateUrl: 'partials/reg.html',
 		controller: 'regCtrl'
 	}).
 	otherwise('/');
 });