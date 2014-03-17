var taobao = angular.module('taobao', []);

taobao.run(function($templateCache) {
  $templateCache.put('drpd', '<div class="drpd" ng-show="isVisible" ng-transclude> </div>');
  $templateCache.put('tbBtn', '<button class="taobao-button" ng-transclude> </button>');
  $templateCache.put('cartCount', '<strong class="tb-red">{{ cartCount }}</strong>');
});

// 伪API调用
taobao.service('tbAPI', function() {
  this.getCartCount = function() {
    return 0;
  }
});

// 购物车数量 显示组件
taobao.directive('cartCount', function($templateCache, tbAPI) {
  return {
    restrict: 'EA',
    replace: true,
    scope: true,
    template: $templateCache.get('cartCount'),
    link: function(scope, el, attrs) {
      scope.cartCount = tbAPI.getCartCount();
    }
  }
});

// 下拉菜单
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

// 按钮
taobao.directive('tbBtn', function($templateCache) {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    scope: true,
    template: $templateCache.get('tbBtn'),
    link: function(scope, el, attrs) {
      $(el).addClass('taobao-button-' + attrs.tbBtnType);
    }
  }
});