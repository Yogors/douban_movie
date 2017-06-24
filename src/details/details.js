//http://api.douban.com/v2/movie/subject/1764796
// http://chat.com/movieCat/src/#/details?subject=26801782
(function (angular) {
    var details = angular.module('detailApp', ['ngRoute', 'service']);
    details.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/details/:id', {
            templateUrl: 'details/details.html',
            controller: 'detailsCtrl'
        })
    }]);
    details.controller('detailsCtrl', ['$scope', '$jsonp', '$routeParams', function ($scope, $jsonp, $routeParams) {
        // console.log($routeParams);
        // $scope.data = 'data';
        $scope.isShow = true;
        $jsonp.jsonp({
            url: 'http://api.douban.com/v2/movie/subject/' + $routeParams.id,
            params: {},
            callback: function (data) {
                // console.log(data);
                $scope.data = data;
                $scope.isShow = false;
                $scope.$apply();
            }
        })
    }])
})(angular)