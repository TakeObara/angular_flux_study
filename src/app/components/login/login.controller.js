class LoginCtrl {

	constructor($scope, $state, $log, $document, toastr, LoginConst, LoginAction, LoginStore, KeyConst, KeyService) {

		'ngInject';

		this._scope       = $scope;
		this._state       = $state;
		this._log         = $log.debug;
		this._toaster     = toastr;
		this._loginConst  = LoginConst;
		this._loginAction = LoginAction;
		this._loginStore  = LoginStore;
		this._keyConst    = KeyConst;
		this._keyService  = KeyService;

		$document.on('keydown', this._onKeyUp.bind(this))

		this._registerChangeCallbacks();
	}

	// private methods
	_registerChangeCallbacks() {
		this._loginStore.addChangeListener_(this._loginConst.LOGIN_SUCCESS, this.successLogin_.bind(this));
		this._loginStore.addChangeListener_(this._loginConst.LOGIN_FAILURE, this.failureLogin_.bind(this));
	}

	_onKeyUp(event) {
		event.preventDefault();
		if(this._keyService.isMetaKeyPressed(event) || this._keyService.isCtrlKeyPressed(event)) {
			if(this._keyService.isParticularKeyPressed(event, this._keyConst.KEY_ENTER)) {
				this.login_(this._scope.email, this._scope.password);
			}
		}
	}

	// public methods
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