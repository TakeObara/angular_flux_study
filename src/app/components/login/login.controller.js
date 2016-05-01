class LoginCtrl {

	constructor($scope, $state, $log, toastr, LoginConst, LoginAction, LoginStore){

		'ngInject';

		this._log         = $log.debug;
		this._scope       = $scope;
		this._state       = $state;
		this._toaster     = toastr;
		this._loginConst  = LoginConst;
		this._loginAction = LoginAction;
		this._loginStore  = LoginStore;

		this.registerChangeCallbacks_();
	}

	// methods
	registerChangeCallbacks_() {
		this._loginStore.addChangeListener_(this._loginConst.LOGIN_SUCCESS, this.successLogin_.bind(this));
		this._loginStore.addChangeListener_(this._loginConst.LOGIN_FAILURE, this.failureLogin_.bind(this));
	}

	login_(email_, pass_) {
		this._loginAction.manualLogin_(email_, pass_);
	}

	// change callbacks
	successLogin_() {
		this._toaster.success('ログイン成功');
		this._state.go('root.main');
	}

	failureLogin_() {
		this._toaster.error('ログイン失敗');
	}

}

export default LoginCtrl;