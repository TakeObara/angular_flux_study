import Template_Ctrl from './template_.controller';

class Template_Directive {

	constructor() {

		'ngInject';

		let directive = {
            restrict     : 'E',
            controller   : Template_Ctrl,
            controllerAs : 'template_',
            templateUrl  : 'app/components/template_/template_.html'
        };

		return directive;
	}

}

export default Template_Directive;