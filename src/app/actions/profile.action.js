class ProfileAction {

	constructor($log, Dispatcher, ProfileConst) {

		'ngInject';

		this._log        = $log.debug;
		this._dispatcher = Dispatcher;
		this._const      = ProfileConst;
	}
}

export default ProfileAction;
