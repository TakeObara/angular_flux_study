import ArticleCtrl from './article.controller';

class ArticleDirective {

	constructor() {

		'ngInject';

		let directive = {
            restrict     : 'E',
            controller   : ArticleCtrl,
            controllerAs : 'article',
            templateUrl  : 'app/components/article/article.html'
        };

		return directive;
	}

}

export default ArticleDirective;
