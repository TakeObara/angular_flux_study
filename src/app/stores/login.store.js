import BaseStore from '../base/base.store';

class LoginStore extends BaseStore {

	constructor($log, LoginConst, ApiService, AuthService, Dispatcher) {

		'ngInject';

		super();

		this._log        = $log.debug;
		this._const      = LoginConst;
		this._api        = ApiService;
		this._auth       = AuthService;
		this._dispatcher = Dispatcher;

		this._registerCallbacks();
	}

	// private methods
	_registerCallbacks() {
		this._dispatcher.register_(this._const.MANUAL, this.manualLogin_.bind(this));
	}

	// public methods
	manualLogin_(param_) {

		let self = this;

		self._api.auth_().login_( {email: param_.email, password: param_.pass},
			(data_) => {
				self._auth.login_(data_);
				self.emitChange_(self._const.LOGIN_SUCCESS);
			},
			(error_) => {
				self._log(error_);
				self.emitChange_(self._const.LOGIN_FAILURE);
			}
		);

	}

}

export default LoginStore;