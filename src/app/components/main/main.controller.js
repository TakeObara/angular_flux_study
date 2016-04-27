class MainCtrl {

	constructor($scope, $state, $log, toastr, MainConst, MainAction, MainStore){

		'ngInject';

		this._log = $log.debug;
		this._scope = $scope;
		this._state = $state;
		this._toaster  = toastr;
		this._mainConst  = MainConst;
		this._mainAction = MainAction;
		this._mainStore = MainStore;

		this.registerChangeCallbacks_();
	}

	// methods
	registerChangeCallbacks_() {
		// this._mainStore.addChangeListener_();
	}

	// change callbacks
}

export default MainCtrl;
