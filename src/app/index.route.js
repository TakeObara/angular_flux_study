'use strict';

var routerConfig = ($stateProvider, $urlRouterProvider, $locationProvider) => {

	'ngInject'

	$stateProvider
		.state('login', {
			url : '/login',
			views  : {
				'content' : {
					'template' : '<login></login>'
				}
			}
		})
		.state('root', {
			abstract : true,
			views : {
				'header' : {
					'template' : '<navbar></navbar>'
				}
			}
		})
		.state('root.main', {
			url : '/main',
			views : {
				'content@' : {
					'template' : '<main></main>'
				}
			}
		})
	;

	$urlRouterProvider.otherwise('/login')
	$locationProvider.html5Mode(true)
};

export default routerConfig;