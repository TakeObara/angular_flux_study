class ProfileCtrl {

	constructor($scope, $state, $log, toastr, ProfileConst, ProfileAction, ProfileStore) {

		'ngInject';

		this._log = $log.debug;
		this._scope = $scope;
		this._state = $state;
		this._toaster  = toastr;
		this._profileConst  = ProfileConst;
		this._profileAction = ProfileAction;
		this._profileStore = ProfileStore;

		this._registerChangeCallbacks();

		this._init();
	}

	// private methods
	_init() {

	}

	_registerChangeCallbacks() {
		// this._profileStore.addChangeListener_();
	}

	// public methods

	// change callbacks
}

export default ProfileCtrl;
