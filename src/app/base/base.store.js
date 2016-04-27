import EventEmitter from 'events';

class BaseStore extends EventEmitter {

	constructor() {

		'ngInject';

		super();
	}

	emitChange_(action_) {
		this.emit(action_);
	}

	addChangeListener_(action_, callback_) {
		this.on(action_, callback_);
	}

	removeChangeListener_(action_, callback_) {
		this.removeListener(action_, callback_);
	}
}

export default BaseStore;