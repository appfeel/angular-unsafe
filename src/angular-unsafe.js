angular.module('angular.unsafe', [])

    .filter('unsafe', ['$sce', function ($sce) {
        return function (value, type) {
            return $sce.trustAs(type || 'html', value);
        }
    }]);
