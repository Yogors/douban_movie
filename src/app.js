//主js文件
(function (angular) {
    var app = angular.module('movieCat', ['moviecat.home', 'detailApp', 'moviecat.movie_list']);
    app.config(["$locationProvider", function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);
    app.controller('movieCtrl', ['$scope', function ($scope) {

    }])
})(angular)