import ChatroomCtrl from './chatroom.controller';

class ChatroomDirective {

	constructor() {

		'ngInject';

		let directive = {
            restrict     : 'E',
            controller   : ChatroomCtrl,
            controllerAs : 'chatroom',
            templateUrl  : 'app/components/chatroom/chatroom.html'
        };

		return directive;
	}

}

export default ChatroomDirective;
