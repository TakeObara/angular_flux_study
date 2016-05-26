import ProfileCtrl from './profile.controller';

class ProfileDirective {

	constructor() {

		'ngInject';

		let directive = {
            restrict     : 'E',
            controller   : ProfileCtrl,
            controllerAs : 'profile',
            templateUrl  : 'app/components/profile/profile.html'
        };

		return directive;
	}

}

export default ProfileDirective;
