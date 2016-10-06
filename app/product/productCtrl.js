restApp.controller('productController',
    function($scope, $rootScope, authService, $stateParams, $location, $http, productsService, sessionService) {

        $scope.orderProp = 'created_at'
        productsService.products().then(function(response) {
            $scope.catalog = response.data
        });


        productsService.comments($stateParams.id)
            .success(function(response) {
                console.log('comments ctrl', response)
                $scope.comm = response.reverse()
            })


        $scope.newComment = function() {
            productsService.newComment($stateParams.id, $scope.comment)
                .success(function(res) {
                    productsService.comments($stateParams.id)
                        .success(function(response) {
                            console.log('comments ctrl', response)
                            $scope.comm = response.reverse()
                        })
                })
        };
    });