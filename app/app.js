'use strict';

// Declare app level module which depends on views, and components
var restApp = angular.module('restApp', [
    'ui.router',
    'ngResource',
]);

restApp
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/#');

        $stateProvider
            .state('product', {
                url: '/product/:id',
                templateUrl: 'product/partial-product.html',
                controller: 'productController'
            })
            .state('auth', {
                url: '/auth',
                // templateUrl: 'auth/partial-auth.html',
                controller: 'authController'
            })
    });

restApp.run(['$rootScope', 'productsService', 'sessionService', 'authService',
    function($rootScope, productsService, sessionService, authService, $scope) {
        $rootScope.getUser = sessionService.get('name');
        $rootScope.getStatus = authService.isLogged();
        console.log($rootScope.getUser, $rootScope.getStatus)
    }
]);