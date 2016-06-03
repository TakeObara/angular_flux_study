class KeyService {

	isCtrlKeyPressed(e) {
		return e.ctrlKey;
	}

	isMetaKeyPressed(e) {
		return e.metaKey;
	}

	isParticularKeyPressed(e, _keyCode) {
		if(e.keyCode === _keyCode) {
			return true;
		}
		return false;
	}
}

export default KeyService;