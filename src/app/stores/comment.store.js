import BaseStore from '../base/base.store';

class CommentStore extends BaseStore {

	constructor($log, ApiConst, CommentConst, ApiService, AuthService, Dispatcher) {

		'ngInject';

		super();

		this._log        = $log.debug;
		this._apiConst   = ApiConst;
		this._const      = CommentConst;
		this._api        = ApiService;
		this._auth       = AuthService;
		this._dispatcher = Dispatcher;

		this.registerCallbacks_();
	}

	registerCallbacks_() {
		this._dispatcher.register_(this._const.CREATE, this.create_.bind(this));
	}

	create_(param_) {

		this._api.comment_(this._auth.getToken_()).create_( {'aritcleId' : param_.articleId}, {'comment' : param_.comment},
			() => {
				this.emitChange_(this._const.CHANGE_CREATE_SUCCESS);
			},
			(error_) => {
				this._log(error_);
				this.emitChange_(this._const.CHANGE_CREATE_FAILURE);
			}
		);
	}

	getAll_(param_) {

		return this._api.comment_(this._auth.getToken_()).index_( {aritcleId : param_.articleId},
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

export default CommentStore;
