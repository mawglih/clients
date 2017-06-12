'use strict';
(function(){
/**
 * @ngdoc overview
 * @name clientsApp
 * @description
 * # clientsApp
 *
 * Main module of the application.
 */
angular
  .module('clientsApp', ['ui.router'])
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/main.html'
    })
    .state('ques', {
      url: '/ques',
      templateUrl: 'views/ques.html'
    })
    .state('start', {
      url: '/start',
      templateUrl: 'views/start.html'
    })
    .state('res', {
      url: '/res',
      templateUrl: 'views/res.html'
    });
  }



})();
//'<img src="images/ques.jpg" class="img-fluid img-responsive center-block img-thumbnail" alt="image1">'