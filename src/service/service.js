(function (angualar) {
    var service = angular.module('service', [])
    service.service("$jsonp", ['$window', function ($window) {
        this.jsonp = function (option) {
            var url = option.url + '?';
            for (var key in option.params) {
                url += (key + '=' + option.params[key] + '&');
            };
            var callbackName = "json_" + $window.Math.random().toString().slice(2);
            url += 'callback=' + callbackName;
            $window[callbackName] = option.callback;
            var script = $window.document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
        }
    }]);
})(angular)