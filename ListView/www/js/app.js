// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ListView', ['ionic'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if(window.cordova && window.cordova.plugins.Keyboard) {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

			// Don't remove this line unless you know what you are doing. It stops the viewport
			// from snapping when text inputs are focused. Ionic handles this internally for
			// a much nicer keyboard experience.
			cordova.plugins.Keyboard.disableScroll(true);
		}
		if(window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})
.controller('TaskController',['$scope','$http', function($scope,$http){
	$scope.loadTasks = function(){
		$http.get('http://192.168.13.116:8000/api/tasks').then(
			function(data){
				$scope.tasks = data.data;
			},function(err){

			}
		);
	}

	$scope.delete = function(id){
		$http.get('http://192.168.13.116:8000/api/tasks/'+id+'/delete').then(
			function(data){
				$scope.loadTasks();
			},function(err){

			}
		);
	}

	$scope.changeStatus = function(task){
		$http.get('http://192.168.13.116:8000/api/tasks/'+task.id+'/chage').then(
			function(data){
				task.status = !task.status;
				$scope.loadTasks();
			},function(err){

			}
		);
	}
	$scope.loadTasks();
}]);