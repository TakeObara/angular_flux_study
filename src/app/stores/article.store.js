import BaseStore from '../base/base.store';

class ArticleStore extends BaseStore {

	constructor($log, ApiConst, ArticleConst, ApiService, AuthService, Dispatcher) {

		'ngInject';

		super();

		this._log        = $log.debug;
		this._apiConst   = ApiConst;
		this._const      = ArticleConst;
		this._api        = ApiService;
		this._auth       = AuthService;
		this._dispatcher = Dispatcher;

		this.registerCallbacks_();
	}

	registerCallbacks_() {
		// something
	}

	get_(param_) {

		return this._api.article_(this._auth.getToken_()).show_( {'articleId' : param_.articleId},
			(data_) => {
				return data_;
			},
			(error_) => {
				this._log(error_);
				return null;
			}
		);
	}

	getAll_(param_) {

		return this._api.article_(this._auth.getToken_(), param_.page).index_( {},
			(data_) => {
				return data_;
			},
			(error_) => {
				this._log(error_);
				return null;
			}
		);
	}
}

export default ArticleStore;
