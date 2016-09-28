'use strict';

// Declare app level module which depends on views, and components
var restApp = angular.module('restApp', [
    'ui.router',
    'ngResource',
]);

restApp
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('catalog', {
                url: '/catalog',
                templateUrl: 'catalog/partial-catalog.html',
                controller: 'catalogController'
            })
            .state('product', {
                url: '/product/:id',
                templateUrl: 'product/partial-product.html',
                controller: 'productController'
            })
            .state('auth', {
                url: '/auth',
                templateUrl: 'auth/partial-auth.html',
                controller: 'authController'
            })
    })

restApp.controller('restAppController', function ($rootScope, authService, sessionService) {
        $rootScope.getUser = sessionService.get('name');
        $rootScope.getStatus = authService.isLogged();
        console.log($rootScope.getUser  , $rootScope.getStatus)
});


