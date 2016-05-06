'use strict';

var MY_CONST = MY_CONST || {
	// my api
	API_URL    : 'http://localhost:8000',
	API_PREFIX : '/api/v1',
	// web socket
	SOCKET_URL : 'ws://localhost:12345'
};

var LOGIN_CONST = LOGIN_CONST || {
	MANUAL   : 'LOGIN_MANUAL',
	TWITTER  : 'LOGIN_TWITTER',
	FACEBOOK : 'LOGIN_FACEBOOK',
	// change callbacks
	LOGIN_SUCCESS  : 'LOGIN_SUCCESS',
	LOGIN_FAILURE  : 'LOGIN_FAILURE'
};

var NAVBAR_CONST = NAVBAR_CONST || {
	LOGOUT : 'NAVBAR_LOGOUT',
	// change callbacks
	LOGOUT_SUCCESS  : 'NAVBAR_LOGOUT_SUCCESS',
	LOGOUT_FAILURE  : 'NAVBAR_LOGOUT_FAILURE'
};

var MAIN_CONST = MAIN_CONST || {};

var ARTICLE_CONST = ARTICLE_CONST || {
	LOAD : 'ARTICLE_LOAD',
	// change callbacks
	CHANGE_LOAD_SUCCESS : 'ARTICLE_CHANGE_LOAD_SUCCESS',
	CHANGE_LOAD_FAILURE : 'ARTICLE_CHANGE_LOAD_FAILURE'
};

var COMMENT_CONST = COMMENT_CONST || {
	CREATE : 'COMMENT_CREATE',
	// change callbacks
	CHANGE_CREATE_SUCCESS : 'COMMENT_CHANGE_CREATE_SUCCESS',
	CHANGE_CREATE_FAILURE : 'COMMENT_CHANGE_CREATE_FAILURE'
};

var CHATROOM_CONST = CHATROOM_CONST || {
	// change callbacks
};

export {
	MY_CONST,
	LOGIN_CONST,
	NAVBAR_CONST,
	MAIN_CONST,
	ARTICLE_CONST,
	COMMENT_CONST,
	CHATROOM_CONST
};