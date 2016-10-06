restApp.factory('authService', function($http, $rootScope, $state, $location, sessionService) {
    'use strict';
    return {
        login: function(user, $state) {
            return $http
                .post('http://smktesting.herokuapp.com/api/login/', user) // send data to server
                .then(function(response) {
                    if (response.data.token) {
                        console.log(response)
                        sessionService.set('user', response.data.token);
                        sessionService.set('name', user.username);
                        alert('Login success')

                        location.replace('http://localhost:8000/');
                    } else if (!response.data.success) {
                        alert(response.data.message)
                    }
                });
        },
        register: function(user) {
            return $http
                .post('http://smktesting.herokuapp.com/api/register/', user) // send data to server
                .then(function(res) {
                    if (res.data.success) {
                        location.replace('http://localhost:8000/');
                    } else {
                        alert(res.data.message);
                    }
                });
        },
        logout: function() {
            sessionService.destroy('user');
            sessionService.destroy('name');
            alert('Logout success')

            location.replace('http://localhost:8000/');


        },
        isLogged: function() {
            return sessionService.get('user') ? true : false;
        }
    }
});