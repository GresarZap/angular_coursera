(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {

  $scope.message = "";
  $scope.lunch = "";

  $scope.myLunch = function () {
    if($scope.lunch === "" || $scope.lunch === " ")
      $scope.message = "Please enter data first";

    else if ( countLunch($scope.lunch) <= 3) {
      $scope.message = "Enjoy!";
    }else {
      $scope.message = "Too much!";
    }
  };

  function countLunch(str){
    var lunch = str.split(',');
    return lunch.length;
  }

}

})();
