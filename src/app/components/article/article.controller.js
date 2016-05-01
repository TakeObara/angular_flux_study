class ArticleCtrl {

	constructor($scope, $state, $log, $location, $anchorScroll, toastr, ArticleConst, ArticleAction, ArticleStore) {

		'ngInject';

		this._log           = $log.debug;
		this._scope         = $scope;
		this._state         = $state;
		this._location      = $location;
		this._anchorScroll  = $anchorScroll;
		this._toaster       = toastr;
		this._articleConst  = ArticleConst;
		this._articleAction = ArticleAction;
		this._articleStore  = ArticleStore;

		this._scope.page = 1;

		this._scope.$watch(
			angular.bind(this, () => { return this._scope.page }),
			this.getArticles_.bind(this)
		);

		this.registerChangeCallbacks_();

		this.initial_();
	}

	// init
	initial_() {
		this.getArticles_();
	}

	registerChangeCallbacks_() {
		// something
	}

	// methods
	getArticles_() {

		this._scope.articles = this._articleStore.getAll_({page : this._scope.page});

		if(!this._scope.articles) {
			this._toaster.error('記事取得失敗');
		}
	}

	range_(num_) {
		var arr = [];
		for (var i = 0; i < num_; ++i) {
			arr.push(i);
		}
		return arr;
	}

	transPage_(num_, top_) {
		this._scope.page = num_;
		this._location.hash(top_);
		this._anchorScroll();
	}

	// change callbacks
}

export default ArticleCtrl;
