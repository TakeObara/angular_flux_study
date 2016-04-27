import BaseStore from '../base/base.store';

class NavbarStore extends BaseStore {

	constructor($log, ApiConst, NavbarConst, ApiService, AuthService, Dispatcher) {

		'ngInject';

		super();

		this._log         = $log.debug;
		this._apiConst    = ApiConst;
		this._navbarConst = NavbarConst;
		this._api         = ApiService;
		this._auth        = AuthService;
		this._dispatcher  = Dispatcher;

		this.registerCallbacks_();
	}

	registerCallbacks_() {
		// this._dispatcher.register_();
	}
}

export default NavbarStore;
