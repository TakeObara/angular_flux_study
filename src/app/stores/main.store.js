import BaseStore from '../base/base.store';

class MainStore extends BaseStore {

	constructor($log, MainConst, ApiService, AuthService, Dispatcher) {

		'ngInject';

		super();

		this._log        = $log.debug;
		this._const      = MainConst;
		this._api        = ApiService;
		this._auth       = AuthService;
		this._dispatcher = Dispatcher;

		this._registerCallbacks();
	}

	// private methods
	_registerCallbacks() {
		// this._dispatcher.register_();
	}

	// public methods
}

export default MainStore;
