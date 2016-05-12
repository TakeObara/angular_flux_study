class Dispatcher {

	constructor($log) {

		'ngInject';

		this._log = $log.debug;
		this._tokenKey  = 1;
		this._listeners = [];
	}

	register_(action_, callback_) {

		const token_ = 'token_' + this._tokenKey;

		this._listeners.push({
            token    : token_,
            action   : action_,
            callback : callback_
        });
		this._tokenKey++;

		return token_;
	}

	dispatch_(payload_) {

		angular.forEach(this._listeners, (listener_) => {
			if(listener_.action === payload_.type) {
				listener_.callback(payload_.params);
			}
		});
	}

	// for develop
	check_(){
		this._log(this._listeners);
	}

}

export default Dispatcher;