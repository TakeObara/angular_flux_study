import BaseStore from '../base/base.store';

class MainStore extends BaseStore {

	constructor($log, ApiConst, MainConst, ApiService, AuthService, Dispatcher) {

		'ngInject';

		super();

		this._log = $log.debug;
		this._apiConst = ApiConst;
		this._template_Const = MainConst;
		this._api = ApiService;
		this._auth = AuthService;
		this._dispatcher = Dispatcher;

		this.registerCallbacks_();
	}

	registerCallbacks_() {
		// this._dispatcher.register_();
	}
}

export default MainStore;
