"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _vue=_interopRequireDefault(require("vue")),_vuex=_interopRequireDefault(require("vuex"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}_vue.default.use(_vuex.default);var _default=new _vuex.default.Store({state:{uid:"",audioInfo:"",audioStatus:"paused",currentTime:0,duration:0,showLogin:!1,showSearchResult:!1},mutations:{changeUid:function(e,u){e.uid=u},changeAudioInfo:function(e,u){e.audioInfo=u},changeCurrentTime:function(e,u){e.currentTime=u},changeDuration:function(e,u){e.duration=u},changeAudioStatus:function(e,u){e.audioStatus=u},changeShowLogin:function(e,u){e.showLogin=u},changeShowSearchResult:function(e,u){e.showSearchResult=u}},actions:{changeUid:function(e,u){(0,e.commit)("changeUid",u)},changeAudioInfo:function(e,u){(0,e.commit)("changeAudioInfo",u)},changeShowLogin:function(e,u){(0,e.commit)("changeShowLogin",u)},changeShowSearchResult:function(e,u){(0,e.commit)("changeShowSearchResult",u)}},modules:{}});exports.default=_default;