class AuthService {

	constructor(WebStorageService) {

		'ngInject';

		this._webStorage = WebStorageService;
	}

	isLogined_() {
		return !!this._webStorage.get_('token');
	}

	login_(data_) {
		this._webStorage.save_('token', data_['token']);
	}

	getToken_() {
		return this._webStorage.get_('token');
	}
	logout_() {
		this._webStorage.remove_('token');
	}

}

export default AuthService;