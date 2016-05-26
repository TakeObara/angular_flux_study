'use strict';

// constant
import KeyConst   from './constant/key.constant'     ;
import * as Const from './constant/callback.constant';

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
import LoginAction    from './actions/login.action'   ;
import NavbarAction   from './actions/navbar.action'  ;
import MainAction     from './actions/main.action'    ;
import ArticleAction  from './actions/article.action' ;
import CommentAction  from './actions/comment.action' ;
import ChatroomAction from './actions/chatroom.action';
import ProfileAction  from './actions/profile.action' ;


// stores
import LoginStore    from './stores/login.store'   ;
import NavbarStore   from './stores/navbar.store'  ;
import MainStore     from './stores/main.store'    ;
import ArticleStore  from './stores/article.store' ;
import CommentStore  from './stores/comment.store' ;
import ChatroomStore from './stores/chatroom.store';
import ProfileStore  from './stores/profile.store' ;

// directives
import LoginDirective    from './components/login/login.directive'      ;
import NavbarDirective   from './components/navbar/navbar.directive'    ;
import MainDirective     from './components/main/main.directive'        ;
import ArticleDirective  from './components/article/article.directive'  ;
import CommentDirective  from './components/comment/comment.directive'  ;
import ChatroomDirective from './components/chatroom/chatroom.directive';
import ProfileDirective  from './components/profile/profile.directive'  ;

// run
// import WebSocketRun from './run/websocket.run';

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
        'toastr',
        'ngWebsocket'
    ])

    // const
    .constant('KeyConst'     , KeyConst            )
    .constant('MyConst'      , Const.MY_CONST      )
    .constant('LoginConst'   , Const.LOGIN_CONST   )
    .constant('NavbarConst'  , Const.NAVBAR_CONST  )
    .constant('MainConst'    , Const.MAIN_CONST    )
    .constant('ArticleConst' , Const.ARTICLE_CONST )
    .constant('CommentConst' , Const.COMMENT_CONST )
    .constant('ChatroomConst', Const.CHATROOM_CONST)
    .constant('ProfileConst' , Const.PROFILE_CONST )

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
    .service('LoginAction'   , LoginAction   )
    .service('NavbarAction'  , NavbarAction  )
    .service('MainAction'    , MainAction    )
    .service('ArticleAction' , ArticleAction )
    .service('CommentAction' , CommentAction )
    .service('ChatroomAction', ChatroomAction)
    .service('ProfileAction',  ProfileAction )

    // stores
    .service('LoginStore'   , LoginStore   )
    .service('NavbarStore'  , NavbarStore  )
    .service('MainStore'    , MainStore    )
    .service('ArticleStore' , ArticleStore )
    .service('CommentStore' , CommentStore )
    .service('ChatroomStore', ChatroomStore)
    .service('ProfileStore' , ProfileStore )

    // directives
    .directive('login'   , () => new LoginDirective()   )
    .directive('navbar'  , () => new NavbarDirective()  )
    .directive('main'    , () => new MainDirective()    )
    .directive('article' , () => new ArticleDirective() )
    .directive('comment' , () => new CommentDirective() )
    .directive('chatroom', () => new ChatroomDirective())
    .directive('profile' , () => new ProfileDirective() )

    // run
    // .run(WebSocketRun)
;