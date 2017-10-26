var app = angular.module('personalweb', ['ngRoute']);

app.controller('personalCtrl', ['$scope', function ($scope) {
	
	$scope.MainMenu = "misc/menu.html";

	$scope.setActive = function(opcion){

		$scope.menAbout = "";
		$scope.menSchool = "";
		$scope.menExperience = "";
		$scope.menSkills = "";
		$scope.menContact = "";

		$scope[opcion] = "active";

	}

}])