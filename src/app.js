//主js文件
(function (angular) {
    var app = angular.module('movieCat', ['moviecat.home', 'moviecat.onplay', 'detailApp', 'moviecat.willplay', 'moviecat.top250']);
    app.config(["$locationProvider", function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);
    app.controller('movieCtrl', ['$scope', function ($scope) {

    }])
})(angular)