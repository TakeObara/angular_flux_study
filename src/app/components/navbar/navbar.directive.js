import NavbarCtrl from './navbar.controller';

class NavbarDirective {

	constructor() {

		'ngInject';

		let directive = {
            restrict     : 'EA',
            controller   : NavbarCtrl,
            controllerAs : 'navbar',
            templateUrl  : 'app/components/navbar/navbar.html'
        };

		return directive;
	}

}

export default NavbarDirective;
