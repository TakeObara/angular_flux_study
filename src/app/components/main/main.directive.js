import MainCtrl from './main.controller';

class MainDirective {

	constructor() {

		'ngInject';

		let directive = {
            restrict     : 'E',
            controller   : MainCtrl,
            controllerAs : 'main',
            templateUrl  : 'app/components/main/main.html'
        };

		return directive;
	}

}

export default MainDirective;
