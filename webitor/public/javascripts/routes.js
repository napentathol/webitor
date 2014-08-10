/**
 * Created by Alex on 8/9/2014.
 */

var ideApp ={
    $ng : angular.module('ideApp', [ 'ngRoute', 'ngAnimate', 'ui.ace' ])
};

ideApp.$ng.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/editor', {
            templateUrl: 'editor'
        }).otherwise({
            redirectTo: 'editor'
        });
    }
]);