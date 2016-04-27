import BaseStore from '../base/base.store';

class Template_Store extends BaseStore {

	constructor($log, ApiConst, Template_Const, ApiService, AuthService, Dispatcher) {

		'ngInject';

		super();

		this._log = $log.debug;
		this._apiConst = ApiConst;
		this._template_Const = Template_Const;
		this._api = ApiService;
		this._auth = AuthService;
		this._dispatcher = Dispatcher;

		this.registerCallbacks_();
	}

	registerCallbacks_() {
		// this._dispatcher.register_();
	}
}

export default Template_Store;