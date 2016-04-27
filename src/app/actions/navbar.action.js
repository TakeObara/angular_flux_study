class NavbarAction {

	constructor($log, Dispatcher, NavbarConst) {

		'ngInject';

		this._log = $log.debug;
		this._dispatcher = Dispatcher;
		this._const = NavbarConst;
	}
}

export default NavbarAction;
