class ChatroomCtrl {

	constructor($scope, $state, $log, toastr, ChatroomConst, ChatroomAction, ChatroomStore) {

		'ngInject';

		this._log            = $log.debug;
		this._scope          = $scope;
		this._state          = $state;
		this._toaster        = toastr;
		this._chatroomConst  = ChatroomConst;
		this._chatroomAction = ChatroomAction;
		this._chatroomStore  = ChatroomStore;

		this._registerChangeCallbacks();

		this._init();
	}

	// private methods
	_init() {

	}

	_registerChangeCallbacks() {
		// this._chatroomStore.addChangeListener_();
	}

	// public methods

	// change callbacks
}

export default ChatroomCtrl;
