class Template_Ctrl {

	constructor($scope, $state, $log, toastr, Template_Const, Template_Action, Template_Store) {

		'ngInject';

		this._log = $log.debug;
		this._scope = $scope;
		this._state = $state;
		this._toaster  = toastr;
		this._template_Const  = Template_Const;
		this._template_Action = Template_Action;
		this._template_Store = Template_Store;

		this.registerChangeCallbacks_();

		this.init_();
	}

	// init
	init_() {

	}

	registerChangeCallbacks_() {
		// this._template_Store.addChangeListener_();
	}

	// methods

	// change callbacks
}

export default Template_Ctrl;