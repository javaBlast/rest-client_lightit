restApp.service('productsService', function($http, $location, sessionService) {
    'use strict';

    this.products = function() {
        return $http.get('http://smktesting.herokuapp.com/api/products/');
    };

    this.comments = function(id) {
        return $http.get('http://smktesting.herokuapp.com/api/reviews/' + id)
    };

    this.newComment = function(id, comment) {
        return $http.post('http://smktesting.herokuapp.com/api/reviews/' + id, comment, { headers: { 'Authorization': 'Token ' + sessionService.get('user') } });

    }
});