import BaseStore from '../base/base.store';

class Template_Store extends BaseStore {

	constructor($log, ApiConst, Template_Const, ApiService, AuthService, Dispatcher) {

		'ngInject';

		super();

		this._log = $log.debug;
		this._apiConst = ApiConst;
		this._const = Template_Const;
		this._api = ApiService;
		this._auth = AuthService;
		this._dispatcher = Dispatcher;

		this._registerCallbacks();
	}

	// private methods
	_registerCallbacks() {
		// this._dispatcher.register_();
	}

	// public methods

}

export default Template_Store;