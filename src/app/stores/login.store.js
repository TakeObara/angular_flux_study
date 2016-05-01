import BaseStore from '../base/base.store';

class LoginStore extends BaseStore {

	constructor($log, ApiConst, LoginConst, ApiService, AuthService, Dispatcher) {

		'ngInject';

		super();

		this._log        = $log.debug;
		this._apiConst   = ApiConst;
		this._const      = LoginConst;
		this._api        = ApiService;
		this._auth       = AuthService;
		this._dispatcher = Dispatcher;

		this.registerCallbacks_();
	}

	registerCallbacks_() {
		this._dispatcher.register_(this._const.MANUAL, this.manualLogin_.bind(this));
	}

	manualLogin_(param_) {

		this._api.auth_().login_( {email: param_.email, password: param_.pass},
			(data_) => {
				this._auth.login_(data_);
				this.emitChange_(this._const.LOGIN_SUCCESS);
			},
			(error_) => {
				this._log(error_);
				this.emitChange_(this._const.LOGIN_FAILURE);
			}
		);

	}

}

export default LoginStore;