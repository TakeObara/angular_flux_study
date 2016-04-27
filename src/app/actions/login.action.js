class LoginAction {

	constructor($log, Dispatcher, LoginConst) {

		'ngInject';

		this._log        = $log.debug;
		this._dispatcher = Dispatcher;
		this._const      = LoginConst;
	}

	manualLogin_(email_, pass_) {
		this._dispatcher.dispatch_({
			type  : this._const.MANUAL,
			params : {
				email : email_,
				pass  : pass_
			}
		});
	}
}

export default LoginAction;