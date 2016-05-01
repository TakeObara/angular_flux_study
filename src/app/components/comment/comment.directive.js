import CommentCtrl from './comment.controller';

class CommentDirective {

	constructor() {

		'ngInject';

		let directive = {
            restrict     : 'E',
            controller   : CommentCtrl,
            controllerAs : 'comment',
            templateUrl  : 'app/components/comment/comment.html'
        };

		return directive;
	}

}

export default CommentDirective;
