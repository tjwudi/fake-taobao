var taobao = angular.module('taobao', []);

taobao.run(function($templateCache) {
  $templateCache.put('drpd', '<div class="drpd" ng-show="isVisible" ng-transclude> </div>');
  $templateCache.put('tb-btn', '<button class="taobao-button" ng-transclude> </button>')
});

taobao.service('tbAPI', function() {
  this.getCartCount = function() {
    return 1;
  }
});

taobao.directive('drpd', function($templateCache) {
  return {
    restrict: 'AE', 
    transclude: true,
    replace: true,
    scope: true,
    template: $templateCache.get('drpd'),
    link: function(scope, el, attrs) {
      $(el).addClass('drpd-' + attrs.drpdType);

      scope.isVisible = false;
      $(el).parent().bind('mouseover', function() {
        scope.$apply(function() { scope.isVisible = true; });
      });
      $(el).parent().bind('mouseleave', function() {
        scope.$apply(function() { scope.isVisible = false; });
      });
    }
  }
});

taobao.directive('tbBtn', function($templateCache) {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: true,
    template: $templateCache.get('tb-btn'),
    link: function(scope, el, attrs) {
      $(el).addClass('taobao-button-' + attrs.tbBtnType);
    }
  }
});