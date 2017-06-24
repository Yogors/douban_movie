(function (angular) {
    var onplay = angular.module('moviecat.willplay', ["ngRoute", "service"]);
    onplay.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/willplay/:page?', {
            templateUrl: './willplay/willplay.html',
            controller: 'willplayCtrl'
        })
    }]);
    // http://api.douban.com/v2/movie/in_theaters?start=0&count=1 
    onplay.controller('willplayCtrl', ['$scope', '$jsonp', '$routeParams', '$route', '$window', function ($scope, $jsonp, $routeParams, $route, $window) {
        $scope.count = 10;
        $scope.startIndex = ($routeParams.page - 0) || 1;
        $scope.isShow = true;
        $jsonp.jsonp({
            url: 'http://api.douban.com/v2/movie/coming_soon',
            params: {
                count: $scope.count,
                start: ($scope.startIndex - 1) * $scope.count
            },
            callback: function (data) {
                // console.log(data);
                $scope.onplayLists = data;
                $scope.isShow = false;
                $scope.totalPage = $window.Math.ceil(data.total / $scope.count);
                $scope.$apply();

            }
        });
        $scope.getClick = function (index) {
            if (index < 1 || index > $scope.totalPage) return;
            $scope.startIndex = index;
            $route.updateParams({
                page: $scope.startIndex
            });
        };
    }])

})(angular)