import BaseStore from '../base/base.store';

class LoginStore extends BaseStore {

	constructor($log, ApiConst, LoginConst, ApiService, AuthService, Dispatcher) {

		'ngInject';

		super();

		this._log        = $log.debug;
		this._apiConst   = ApiConst;
		this._loginConst = LoginConst;
		this._api        = ApiService;
		this._auth       = AuthService;
		this._dispatcher = Dispatcher;

		this.registerCallbacks_();
	}

	registerCallbacks_() {
		this._dispatcher.register_(this._loginConst.MANUAL, this.manualLogin_.bind(this));
	}

	manualLogin_(payload_) {

		this._api.auth_().login({email: payload_.email, password: payload_.pass},
			(data_) => {
				this._auth.login_(data_);
				this._log(data_);
				this.emitChange_(this._loginConst.SUCCESS);
			},
			(error_) => {
				this._log(error_);
				this.emitChange_(this._loginConst.FAILURE);
			}
		);

	}

}

export default LoginStore;