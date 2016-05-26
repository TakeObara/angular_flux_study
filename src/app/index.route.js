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
		.state('root.article', {
			url : '/article',
			views : {
				'content@' : {
					'template' : '<article></article>'
				}
			}
		})
		.state('root.comment', {
			url : '/article/:articleId/comment',
			views : {
				'content@' : {
					'template' : '<comment></comment>'
				}
			}
		})
		.state('root.chatroom', {
			url : '/chatroom',
			views : {
				'content@' : {
					'template' : '<chatroom></chatroom>'
				}
			}
		})
		.state('root.profile', {
			url : '/profile',
			views : {
				'content@' : {
					'template' : '<profile></profile>'
				}
			}
		})
	;

	$urlRouterProvider.otherwise('/login')
	$locationProvider.html5Mode(true)
};

export default routerConfig;