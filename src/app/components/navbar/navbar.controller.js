class NavbarCtrl {

	constructor($scope, $state, $log, toastr, NavbarConst, NavbarAction, NavbarStore){

		'ngInject';

		this._log = $log.debug;
		this._scope = $scope;
		this._state = $state;
		this._toaster  = toastr;
		this._navbarConst  = NavbarConst;
		this._navbarAction = NavbarAction;
		this._navbarStore = NavbarStore;

		this.registerChangeCallbacks_();
	}

	// methods
	registerChangeCallbacks_() {
		// this._navbarStore.addChangeListener_();
	}

	// change callbacks
}

export default NavbarCtrl;
