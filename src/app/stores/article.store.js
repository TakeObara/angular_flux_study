import BaseStore from '../base/base.store';

class ArticleStore extends BaseStore {

	constructor($log, ArticleConst, ApiService, AuthService, Dispatcher) {

		'ngInject';

		super();

		this._log        = $log.debug;
		this._const      = ArticleConst;
		this._api        = ApiService;
		this._auth       = AuthService;
		this._dispatcher = Dispatcher;

		this._registerCallbacks();
	}

	// private methods
	_registerCallbacks() {
		// something
	}

	// public methods
	get_(param_) {

		let self = this;

		return self._api.article_(self._auth.getToken_()).show_( {'articleId' : param_.articleId},
			(data_) => {
				return data_;
			},
			(error_) => {
				self._log(error_);
				return null;
			}
		);
	}

	getAll_(param_) {

		let self = this;

		return self._api.article_(self._auth.getToken_(), param_.page).index_( {},
			(data_) => {
				return data_;
			},
			(error_) => {
				self._log(error_);
				return null;
			}
		);
	}
}

export default ArticleStore;
