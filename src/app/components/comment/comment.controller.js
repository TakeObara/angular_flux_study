class CommentCtrl {

	constructor($scope, $state, $stateParams, $log, toastr, ArticleStore, CommentConst, CommentAction, CommentStore) {

		'ngInject';

		this._log           = $log.debug;
		this._scope         = $scope;
		this._state         = $state;
		this._stateParams   = $stateParams;
		this._toaster       = toastr;
		this._articleStore  = ArticleStore;
		this._commentConst  = CommentConst;
		this._commentAction = CommentAction;
		this._commentStore  = CommentStore;

		this._articleId = this._stateParams.articleId;

		this._registerChangeCallbacks();

		this._init();
	}


	// private methods
	_init() {
		this._getArticle();
		this._getAllComments();
	}

	_registerChangeCallbacks() {
		this._commentStore.addChangeListener_(this._commentConst.CHANGE_CREATE_SUCCESS, this.successCreateCommentCallback_.bind(this));
		this._commentStore.addChangeListener_(this._commentConst.CHANGE_CREATE_FAILURE, this.failureCreateCommentCallback_.bind(this));
	}

	_getArticle() {

		this._scope.article = this._articleStore.get_({'articleId' : this._articleId});

		if(!this._scope.article) {
			this._toaster.error('記事取得失敗');
		}
	}

	_getAllComments() {

		this._scope.comments = this._commentStore.getAll_({'articleId' : this._articleId});

		if(!this._scope.comments) {
			this._toaster.error('コメント取得失敗');
		}
	}

	// public methods
	createComment_(comment_) {
		if(!comment_) return;
		this._commentAction.create_(comment_, this._articleId);
	}

	reloadComments_() {
		this._getAllComments();
	}


	// change callbacks
	successCreateCommentCallback_() {
		this._getAllComments();
		this._scope.newComment = '';
		this._toaster.success('投稿成功');
	}

	failureCreateCommentCallback_() {
		this._toaster.error('投稿失敗');
	}
}

export default CommentCtrl;
