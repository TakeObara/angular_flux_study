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

		this._registerCallbacks();
	}

	// private methods
	_registerCallbacks() {
		this._dispatcher.register_(this._const.CREATE, this.create_.bind(this));
	}


	// pubilc methods
	create_(param_) {

		let self = this;

		self._api.comment_(self._auth.getToken_()).create_( {'aritcleId' : param_.articleId}, {'comment' : param_.comment},
			() => {
				self.emitChange_(self._const.CHANGE_CREATE_SUCCESS);
			},
			(error_) => {
				self._log(error_);
				self.emitChange_(self._const.CHANGE_CREATE_FAILURE);
			}
		);
	}

	getAll_(param_) {

		let self = this;

		return self._api.comment_(self._auth.getToken_()).index_( {aritcleId : param_.articleId},
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

export default CommentStore;
