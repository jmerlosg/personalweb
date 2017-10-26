app.config(function ($routeProvider) {
	
	$routeProvider
	.when('/', {
		templateUrl: 'misc/acerca.html',
		controller: 'acercaCtrl'
	})
	.when('/about', {
		templateUrl: 'misc/acerca.html',
		controller: 'acercaCtrl'
	})
	.when('/experience', {
		templateUrl: 'misc/experiencia.html',
		controller: 'experienciaCtrl'
	})
	.when('/school', {
		templateUrl: 'misc/formacion.html',
		controller: 'formcionCtrl'
	})
	.when('/skills', {
		templateUrl: 'misc/habilidades.html',
		controller: 'habilidadesCtrl'
	})
	.when('/contact', {
		templateUrl: 'misc/contacto.html',
		controller: 'contactoCtrl'
	})
	.otherwise({ redirectTo: '/' })

})