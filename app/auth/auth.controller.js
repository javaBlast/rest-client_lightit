restApp.controller('authController', function($scope, authService, sessionService){
    'use strict';

    $scope.username = sessionService.get('name');
    $scope.loginStatus= authService.isLogged();

    $scope.login = function(user){
        authService.login(user);
    }

    $scope.register = function(user){
        authService.register(user);
    }

    $scope.logout = function () {
        authService.logout();
    }
    });