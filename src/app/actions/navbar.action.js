class NavbarAction {

	constructor($log, Dispatcher, NavbarConst) {

		'ngInject';

		this._dispatcher = Dispatcher;
		this._const      = NavbarConst;
	}

	logout_() {

		this._dispatcher.dispatch_({
			type : this._const.LOGOUT,
			params : {}
		});
	}
}

export default NavbarAction;
