class Template_Action {

	constructor($log, Dispatcher, Template_Const) {

		'ngInject';

		this._log = $log.debug;
		this._dispatcher = Dispatcher;
		this._const = Template_Const;
	}
}

export default Template_Action;