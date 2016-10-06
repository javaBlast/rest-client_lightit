restApp.factory('authService', function($http, $rootScope, $state, $location, sessionService) {
    'use strict';
    return {
        login: function(user, $state) {
            return $http
                .post('http://smktesting.herokuapp.com/api/login/', user) // send data to server
                .success(function(response) {
                    console.log(response)
                    sessionService.set('user', response.token);
                    sessionService.set('name', user.username);
                    location.replace('http://localhost:8000/');


                });
        },
        register: function(user) {
            return $http
                .post('http://smktesting.herokuapp.com/api/register/', user) // send data to server
                .then(function(res) {
                    if (res.data.success) {
                    location.replace('http://localhost:8000/');
                    } else {
                    }
                });
        },
        logout: function() {
            sessionService.destroy('user');
            sessionService.destroy('name');
            location.replace('http://localhost:8000/');


        },
        isLogged: function() {
            return sessionService.get('user') ? true : false;
        }
    }
});