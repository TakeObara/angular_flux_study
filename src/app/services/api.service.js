class ApiService {

	constructor($resource, ApiConst) {

		'ngInject'

		this._resource = $resource;
		this._apiUrl   = ApiConst.MY_URL + ApiConst.MY_PREFIX;
		this._and = '&&';
		this._question = '?';
		this._prefixPage  = 'page=';
		this._prefixToken = 'token=';
	}

	auth_(token_) {
		return this._resource('', {}, {
			login : {
				method : 'Post',
				url : this._apiUrl + '/auth/login'
			},
			logout : {
				method : 'GET',
				url : this._apiUrl + '/auth/logout' + this._question + this._prefixToken + token_
			},
			register : {
				method : 'POST',
				url : this._apiUrl + '/auth/register'
			},
			me : {
				method : 'GET',
				url : this._apiUrl + '/auth/me' + this._question + this._prefixToken + token_
			}
		});
	}

}

export default ApiService;
