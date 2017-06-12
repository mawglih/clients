(function(){
'use strict';  


/**
 * @ngdoc function
 * @name clientsApp.controller:QuesCtrl
 * @description
 * # QuesCtrl
 * Controller of the clientsApp
 */
angular.module('clientsApp')
  .controller('QuesCtrl', QuesCtrl);
  QuesCtrl.$inject = ['$scope', '$http'];

  function QuesCtrl ($scope, $http) {
    var vm = this;
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.processForm = function() {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
            $http({
                method  : 'POST',
                url     : 'contact-form.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                console.log(data);
                if (!data.success) { //success comes from the return json object
                    $scope.errorName = data.errors.name;
                    console.log($scope.errorName);
                } else {
                    $scope.message = data.message;
                    $scope.formData = {};
                    $scope.quesForm.$setPristine();
                }
            });
        
    }

    $scope.cats = [
      {name: 'Inform people of our services'},
      {name: 'Make online sales'},
      {name: 'Publish blogs'},
      {name: 'Get people to call us / sign up'},
      {name: 'Ask for donation'}
    ];

    $scope.elems1 =[
      {name:'Slide Show', val: false},
      {name:'Welcome Text',val: false},
      {name:'Calendar', val: false},
      {name:'Upcoming Events', val: false},
      {name:'Items On-sale', val: false},
      {name:'Testimonials', val: false}, 
      {name: 'News Excerpt', val: false}, 
      {name: 'Blog Excerpt', val: false}, 
      {name: 'Sign-in Module', val: false}, 
      {name: 'Search', val: false}
      ];

    $scope.checkForm = function(elems1){

    
    var chosen = [];
    angular.forEach($scope.elems1, function(value, key){
      if ($scope.elems1[key].selected === $scope.elems1[key].name){
        chosen.push($scope.elems1[key].selected);
      }
      
    });
    if(chosen.length > 0){
      $scope.formData.list = chosen.toString();
      console.log($scope.formData.list);
    }
    else{
      console.log("nothing chosen");
    }
    }
    
  }
  
})();