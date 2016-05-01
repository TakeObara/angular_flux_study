class CommentAction {

	constructor($log, Dispatcher, CommentConst) {

		'ngInject';

		this._log        = $log.debug;
		this._dispatcher = Dispatcher;
		this._const      = CommentConst;
	}

	create_(comment_, articleId_) {

		this._dispatcher.dispatch_({
			type   : this._const.CREATE,
			params : {
				comment   : comment_,
				articleId : articleId_
			}
		});
	}
}

export default CommentAction;
