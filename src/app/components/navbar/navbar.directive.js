import NavbarCtrl from './navbar.controller';

class NavbarDirective {

	constructor() {

		'ngInject';

		let directive = {
            restrict     : 'E',
            controller   : NavbarCtrl,
            controllerAs : 'navbar',
            templateUrl  : 'app/components/navbar/navbar.html'
        };

		return directive;
	}

}

export default NavbarDirective;
