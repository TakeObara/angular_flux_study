class ApiService {

	constructor($resource, MyConst) {

		'ngInject'

		this._resource    = $resource;
		this._apiUrl      = MyConst.API_URL + MyConst.API_PREFIX;
		this._and         = '&&';
		this._question    = '?';
		this._prefixPage  = 'page=';
		this._prefixToken = 'token=';
	}

	auth_(token_) {
		return this._resource('', {}, {
			register_ : {
				method : 'POST',
				url    : this._apiUrl + '/auth/register'
			},
			login_ : {
				method : 'POST',
				url    : this._apiUrl + '/auth/login'
			},
			logout_ : {
				method : 'GET',
				url    : this._apiUrl + '/auth/logout' + this._question + this._prefixToken + token_
			},
			me_ : {
				method : 'GET',
				url    : this._apiUrl + '/auth/me' + this._question + this._prefixToken + token_
			}
		});
	}

	proflie_(token_) {
		return this._resource('', {}, {
			index_ : {
				method : 'GET',
				url    : this._apiUrl + '/profiles'
			},
			show_ : {
				method : 'GET',
				url    : this._apiUrl + '/profiles/:userId' + this._question + this._prefixToken + token_
			},
			update_ : {
				method : 'PUT',
				url    : this._apiUrl + '/profiles/:userId' + this._question + this._prefixToken + token_
			}
		});
	}

	article_(token_, page_) {
		return this._resource('', {}, {
			index_ : {
				method : 'GET',
				url    : this._apiUrl + '/articles' + this._question + this._prefixToken + token_ + this._and + this._prefixPage + page_
			},
			create_ : {
				method : 'POST',
				url    : this._apiUrl + '/articles' + this._question + this._prefixToken + token_
			},
			show_ : {
				method : 'GET',
				url    : this._apiUrl + '/articles/:articleId' + this._question + this._prefixToken + token_
			},
			update_ : {
				method : 'PUT',
				url    : this._apiUrl + '/articles/:articleId' + this._question + this._prefixToken + token_
			},
			delete_ : {
				method : 'DELETE',
				url    : this._apiUrl + '/articles/:articleId' + this._question + this._prefixToken + token_
			}
		});
	}

	comment_(token_) {
		return this._resource('', {}, {
			index_ : {
				method  : 'GET',
				url     : this._apiUrl + '/articles/:aritcleId/comments' + this._question + this._prefixToken + token_
			},
			create_ : {
				method : 'POST',
				url    : this._apiUrl + '/articles/:aritcleId/comments' + this._question + this._prefixToken + token_
			},
			show_ : {
				method : 'GET',
				url    : this._apiUrl + '/articles/:aritcleId/comments/:commentId' + this._question + this._prefixToken + token_
			},
			update_ : {
				method : 'PUT',
				url    : this._apiUrl + '/articles/:aritcleId/comments/:commentId' + this._question + this._prefixToken + token_
			},
			delete_ : {
				method : 'DELETE',
				url    : this._apiUrl + '/articles/:aritcleId/comments/:commentId' + this._question + this._prefixToken + token_
			}
		});
	}

	// for develop
	// template_(token_) {
	// 	return this._resource('', {}, {
	// 		index_ : {
	// 			method : 'GET',
	// 			url    : ''
	// 		},
	// 		create_ : {
	// 			method : 'POST',
	// 			url    : ''
	// 		},
	// 		show_ : {
	// 			method : 'GET',
	// 			url    : ''
	// 		},
	// 		update_ : {
	// 			method : 'PUT',
	// 			url    : ''
	// 		},
	// 		delete_ : {
	// 			method : 'DELETE',
	// 			url    : ''
	// 		}
	// 	});
	// }

}

export default ApiService;
