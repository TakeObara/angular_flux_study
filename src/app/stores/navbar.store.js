import BaseStore from '../base/base.store';

class NavbarStore extends BaseStore {

	constructor($log, ApiConst, NavbarConst, ApiService, AuthService, Dispatcher) {

		'ngInject';

		super();

		this._log        = $log.debug;
		this._apiConst   = ApiConst;
		this._const      = NavbarConst;
		this._api        = ApiService;
		this._auth       = AuthService;
		this._dispatcher = Dispatcher;

		this._registerCallbacks();
	}

	_registerCallbacks() {
		this._dispatcher.register_(this._const.LOGOUT, this.logout_.bind(this));
	}

	logout_() {

		let self = this;

		self._api.auth_().logout_( {},
			() => {
				self._auth.logout_();
				self.emitChange_(self._const.LOGOUT_SUCCESS);
			},
			() => {
				self.emitChange_(self._const.LOGOUT_FAILURE);
			}
		);
	}
}

export default NavbarStore;
