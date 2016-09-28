restApp.controller('catalogController', function($scope, $http, productsService) {
  // $http.get('http://smktesting.herokuapp.com/api/products/').then(function(response) {
  //   $scope.catalog = response.data;
  // });
        productsService.products().success(function(res){
            $scope.catalog = res;

    });


});
