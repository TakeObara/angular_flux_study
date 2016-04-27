import LoginCtrl from './login.controller';

class LoginDirective {

	constructor() {

		'ngInject';

		let directive = {
            restrict     : 'E',
            controller   : LoginCtrl,
            controllerAs : 'login',
            templateUrl  : 'app/components/login/login.html'
        };

		return directive;
	}

}

export default LoginDirective;