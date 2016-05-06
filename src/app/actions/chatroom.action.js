class ChatroomAction {

	constructor($log, Dispatcher, ChatroomConst) {

		'ngInject';

		this._log        = $log.debug;
		this._dispatcher = Dispatcher;
		this._const      = ChatroomConst;
	}
}

export default ChatroomAction;
