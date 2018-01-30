'use strict';

let directive = ($window, $timeout) => { 'ngInject';
  return {
    restrict: 'A',
    link: ($scope, $elem, $attrs) => {
      // Defined $window as main container
      let container = angular.element($window)

      // Load more items when it's at the middle of scroll
      let scrollDistance = 1.5

      let handler = () => {
        let containerBottom = container[0].innerHeight + container[0].pageYOffset
        let elementBottom   = $elem[0].offsetTop + $elem[0].clientHeight
        let remaining       = elementBottom - containerBottom

        let shouldScroll = remaining <= (container[0].innerHeight +container[0].pageYOffset) * scrollDistance + 1

        // Trigger expression in the Angular Digest
        if (shouldScroll) {
          $scope.$apply($attrs.infiniteScroll);
          $timeout(()=>{
            $scope.$apply($attrs.infiniteScroll);
          }, 2000);
        }
      }

      // To leverage performance issues in the UI
      container.on('scroll', _.throttle(handler, 1500));

      // Cleanup events on directive destroy
      $scope.$on('$destroy', () => {
        container.off('scroll', handler);
      });
    }
  };
}

export default directive
