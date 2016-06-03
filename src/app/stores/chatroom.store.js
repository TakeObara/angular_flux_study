import BaseStore from '../base/base.store';

class ChatroomStore extends BaseStore {

	constructor($log, ChatroomConst, ApiService, AuthService, Dispatcher) {

		'ngInject';

		super();

		this._const      = ChatroomConst;
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

export default ChatroomStore;
