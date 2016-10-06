restApp.controller('authController', function($scope, $location, $http, authService, sessionService) {
    'use strict';
    $scope.username = sessionService.get('name');


    $scope.isLogged = function isLogged() {
        authService.isLogged();
    };
    $scope.login = function(user) {
        authService.login(user);

    }

    $scope.register = function(user) {
        authService.register(user);
    }

    $scope.logout = function() {
        authService.logout();
    }
});