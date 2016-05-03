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

		this._registerChangeCallbacks();
	}

	// private methods
	_registerChangeCallbacks() {
		this._navbarStore.addChangeListener_(this._navbarConst.LOGOUT_SUCCESS, this.successLogout_.bind(this));
		this._navbarStore.addChangeListener_(this._navbarConst.LOGOUT_FAILURE, this.failureLogout_.bind(this));
	}


	// public methods
	logout_() {
		this._navbarAction.logout_();
	}

	// change callbacks
	successLogout_() {
		this._toaster.success('ログアウト成功');
		this._state.go('login');
	}

	failureLogout_() {
		this._toaster.error('ログアウト失敗');
	}
}

export default NavbarCtrl;
