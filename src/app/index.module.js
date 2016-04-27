'use strict';

// constant
import * as Const from './configs/constant';

// config
import RouterConfig from './index.route'          ;
import LogConfig    from './configs/log.config.js';
import ToastrConfig from './configs/toastr.config';

// base
import BaseStore  from './base/base.store';
import Dispatcher from './base/dispatcher';

// services
import ApiService        from './services/api.service'       ;
import AuthService       from './services/auth.service'      ;
import WebStorageService from './services/webstorage.service';

// actions
import LoginAction  from  './actions/login.action';
import NavbarAction from './actions/navbar.action';
import MainAction   from   './actions/main.action';

// stores
import LoginStore  from './stores/login.store' ;
import NavbarStore from './stores/navbar.store';
import MainStore   from './stores/main.store'  ;

// directives
import LoginDirective  from  './components/login/login.directive'  ;
import NavbarDirective from  './components/navbar/navbar.directive';
import MainDirective   from  './components/main/main.directive'    ;

angular.module('yoAngular', [
        'ngAnimate',
        'ngCookies',
        'ngTouch',
        'ngSanitize',
        'ngMessages',
        'ngAria',
        'ngResource',
        'ui.router',
        'ngMaterial',
        'toastr'
    ])
    // const
    .constant('ApiConst'   , Const.API_CONST   )
    .constant('LoginConst' , Const.LOGIN_CONST )
    .constant('NavbarConst', Const.NAVBAR_CONST)
    .constant('MainConst'  , Const.MAIN_CONST  )

    // configs
    .config(RouterConfig)
    .config(LogConfig   )
    .config(ToastrConfig)

    // base
    .service('BaseStore' , BaseStore )
    .service('Dispatcher', Dispatcher)

    // services
    .service('ApiService'       , ApiService       )
    .service('AuthService'      , AuthService      )
    .service('WebStorageService', WebStorageService)

    // actions
    .service('LoginAction' , LoginAction )
    .service('NavbarAction', NavbarAction)
    .service('MainAction'  , MainAction  )

    // stores
    .service('LoginStore' , LoginStore )
    .service('NavbarStore', NavbarStore)
    .service('MainStore'  , MainStore  )

    // directives
    .directive('login' , () => new LoginDirective() )
    .directive('navbar', () => new NavbarDirective())
    .directive('main'  , () => new MainDirective()  )
;