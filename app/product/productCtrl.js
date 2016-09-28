restApp.controller('productController', function($scope, $rootScope, authService,sessionService,$stateParams,$http,productsService, sessionService) {

    var productId = parseInt($stateParams.id);

    productsService.products().then(function(response) {
        var products = response.data;

        $scope.username = sessionService.get('name');
        $scope.loginStatus= authService.isLogged();

        $scope.comments = [];


        angular.forEach(products, function (val, key) {
            if(val.id === productId) {
                $scope.product = val;

                productsService.comments(productId).success(function(response){
                    angular.forEach(response, function (val, key) {
                        $scope.comments.push(val);
                    })
                });
            }
        })
        console.log($scope.comments)
    });



    $scope.newComment = function(id, comment) {
        productsService.newComment(id, comment).success(function(res){
            res.success
                ? productsService.comments(id).success(function(resp){$scope.comments[id - 1] = resp;})
                : console.log('error');
        });
    };
});
