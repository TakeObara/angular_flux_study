'use strict';

var API_CONST = API_CONST || {
	// MyApi
	MY_URL    : 'http://localhost:8000',
	MY_PREFIX : '/api/v1'

	// FacebookApi

	// TwitterApi
};

var LOGIN_CONST = LOGIN_CONST || {
	MANUAL   : 'LOGIN_MANUAL',
	TWITTER  : 'LOGIN_TWITTER',
	FACEBOOK : 'LOGIN_FACEBOOK',
	SUCCESS  : 'LOGIN_SUCCESS',
	FAILURE  : 'LOGIN_FAILURE'
};

var NAVBAR_CONST = NAVBAR_CONST || {};

var MAIN_CONST = MAIN_CONST || {};

export {
	API_CONST,
	LOGIN_CONST,
	NAVBAR_CONST,
	MAIN_CONST
};