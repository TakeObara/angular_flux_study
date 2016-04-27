class WebStorageService {

	constructor() {
		this._storage = localStorage;
	}

	save_(key_, value_) {
		this._storage.setItem(key_, value_);
	}

	get_(key_) {
		return this._storage.getItem(key_);
	}

	remove_(key_) {
		this._storage.removeItem(key_);
	}

}

export default WebStorageService;