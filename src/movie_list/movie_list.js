(function (angular) {
    var movie_list = angular.module('moviecat.movie_list', ["ngRoute", "service"]);
    movie_list.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/:movieType/:page?', {
            templateUrl: './movie_list/movie_list.html',
            controller: 'movie_listCtrl'
        })
    }]);
    // http://api.douban.com/v2/movie/in_theaters?start=0&count=1 
    movie_list.controller('movie_listCtrl', ['$scope', '$jsonp', '$routeParams', '$route', '$window', function ($scope, $jsonp, $routeParams, $route, $window) {
        $scope.count = 10;
        $scope.startIndex = ($routeParams.page - 0) || 1;
        $scope.isShow = true;
        $jsonp.jsonp({
            url: 'http://api.douban.com/v2/movie/' + $routeParams.movieType,
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
            if (index < 1 || index > 3) return;
            $scope.startIndex = index;
            $route.updateParams({
                page: $scope.startIndex
            });
        };
    }])


})(angular)