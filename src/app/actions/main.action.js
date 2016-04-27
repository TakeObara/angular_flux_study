class MainAction {

	constructor($log, Dispatcher, MainConst) {

		'ngInject';

		this._log        = $log.debug;
		this._dispatcher = Dispatcher;
		this._const      = MainConst;
	}
}

export default MainAction;
