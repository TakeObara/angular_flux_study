class ArticleAction {

	constructor($log, Dispatcher, ArticleConst) {

		'ngInject';

		this._log        = $log.debug;
		this._dispatcher = Dispatcher;
		this._const      = ArticleConst;
	}
}

export default ArticleAction;
