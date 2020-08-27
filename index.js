"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ownKeys(e,t){var n,o=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)),o}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){_defineProperty(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _iterableToArrayLimit(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(o=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var POPUP="popup",OPEN="js-popup-open",TARGET="js-popup",CLOSE="js-popup-close",IS_ACTIVE="active",BTN_IN_POPUP_OPEN="js-btn-in-popup-open",HASH="#",BEMblock=function(e,n){return{name:n,block:e,addMod:function(t){e.classList.add("".concat(n,"--").concat(t))},toggleMod:function(t){e.classList.toggle("".concat(n,"--").concat(t))},removeMod:function(t){e.classList.remove("".concat(n,"--").concat(t))},containsMod:function(t){return e.classList.contains("".concat(n,"--").concat(t))}}};function preventScroll(){var t=window.innerWidth-document.documentElement.clientWidth;document.body.style.overflow="hidden",0<t&&(document.body.style.marginRight="".concat(t,"px"))}function allowScroll(){document.body.style.overflow="",document.body.style.marginRight=""}function closeAll(){var t,e,n,o,r;this.openPopups.length&&(t=this.resetElements,e=this.removeUrl,n=this.options,o=n.toggleBtnClass,r=n.preventScroll,this.openPopups.forEach(function(t){BEMblock(t,POPUP).removeMod(IS_ACTIVE)}),o.toggle&&0<this.btns.length&&this.btns.forEach(function(t){BEMblock(t,o.name).removeMod(IS_ACTIVE)}),0<this.hashStart&&e(),t(),r&&allowScroll())}function resetElements(){this.btn=null,this.popup=null,this.closeTrigger=null,this.href=""}function pushUrl(){var t="".concat(window.location.href).concat(this.name);window.history.pushState({},"",t)}function removeUrl(){var t=window.location.href.slice(0,this.hashStart);window.history.pushState({},"",t),this.href=""}function handlePopState(){var t,e,n=this.href,o=this.btn,r=this.closePopup,i=this.openPopup;-1===this.hashStart&&this.popup&&(this.closeTrigger=this.openPopups[this.openPopups.length-1],r()),0<this.hashStart&&(e=_slicedToArray((t=window.location.href.split(HASH))[t.length-1],1)[0],this.popup&&!e&&(this.closeTrigger=this.openPopups[this.openPopups.length-1],this.closePopup()),e&&(n||o||(this.href=window.location.href.slice(this.hashStart)),i()))}function handleEscClick(){var t;this.openPopups.length&&(t=this.closePopup,this.closeTrigger=this.openPopups[this.openPopups.length-1],t())}function handleBtnClick(t){var e,n=t.target,o=this.closePopup,r=this.options.closeOnOverlayClick,i=n.closest(".".concat(CLOSE));i&&i.classList.contains(OPEN)||(r?(e=n.classList&&n.classList.contains(TARGET)?n:null,this.closeTrigger=i||e):this.closeTrigger=i,this.closeTrigger&&(t.preventDefault(),o()))}function handleOpen(t){var e=t.target,n=this.openPopup;this.btn=e.closest(".".concat(OPEN)),this.btn&&(e.closest(".".concat(BTN_IN_POPUP_OPEN))||(n(),t.preventDefault()))}function handleClose(t){var e=t.code,n=t.type,o=this.handleEscClick,r=this.handleBtnClick;this.options.escapeHandler&&"Escape"===e&&o(t),"click"===n&&r(t)}function openPopup(){function t(){n.name=o&&(o.dataset.popupTarget||o.getAttribute("href"))||r,-1<window.location.href.indexOf(HASH)?e=!1:0===n.name.indexOf(HASH)?(e=!0,n.href=n.name):(e=!1,r&&a()),n.popup=0===n.name.indexOf(HASH)?document.getElementById(n.name.slice(1)):document.querySelector(".".concat(TARGET,'[data-popup="').concat(n.name,'"]')),n.popup&&(n.name&&e&&l(),BEMblock(n.popup,POPUP).addMod(IS_ACTIVE),u.toggle&&BEMblock(o,u.name).addMod(IS_ACTIVE),d&&preventScroll(),h&&(s.filter(function(t){return t===n.popup})[0]||(i.observe(n.popup,{attributes:!0,attributeFilter:["class"],attributeOldValue:!0}),s.push(n.popup))),c&&c())}var e,n=this,o=this.btn,r=this.href,i=this.observer,s=this.observedPopups,a=this.removeUrl,l=this.pushUrl,c=this.onOpen,h=this.onClose,p=this.options,u=p.toggleBtnClass,d=p.preventScroll;o&&o.classList.contains(CLOSE)?(this.closeTrigger=o,this.closePopup(),setTimeout(t)):t()}function closePopup(){var t=this.closeTrigger,e=this.href,n=this.hashStart,o=this.removeUrl,r=this.resetElements,i=this.options,s=i.toggleBtnClass,a=i.preventScroll;this.popup=t.closest(".".concat(TARGET)),this.name=this.popup.dataset.popup||"#".concat(this.popup.id),this.btn=document.querySelector(".".concat(OPEN,'[data-popup-target="').concat(this.name,'"]'))||document.querySelector(".".concat(OPEN,'[href="').concat(this.name,'"]')),e&&e===this.name&&0<n&&o(),BEMblock(this.popup,POPUP).removeMod(IS_ACTIVE),s.toggle&&BEMblock(this.btn,s.name).removeMod(IS_ACTIVE),a&&!this.openPopups.length&&allowScroll(),r()}function openTarget(t){var e=t.id,n=t.dataset.popup,o=this.openPopup;this.href=e?"#".concat(e):null,this.btn=this.href?document.querySelector(".".concat(OPEN,'[href="').concat(this.href,'"]')):document.querySelector(".".concat(OPEN,'[data-popup-target="').concat(n,'"]')),o()}function closeTarget(t){this.closeTrigger=t,this.closePopup()}function handleMutation(t){var e=this.onClose;e&&t.forEach(function(t){0<t.oldValue.indexOf("".concat(POPUP,"--").concat(IS_ACTIVE))&&e()})}var defaultOptions={preventScroll:!0,escapeHandler:!0,closeOnOverlayClick:!0,toggleBtnClass:!1},Popup=function(){function e(t){_classCallCheck(this,e),this.options=_objectSpread2(_objectSpread2({},defaultOptions),t),this.closeAll=closeAll.bind(this),this.resetElements=resetElements.bind(this),this.pushUrl=pushUrl.bind(this),this.removeUrl=removeUrl.bind(this),this.handlePopState=handlePopState.bind(this),this.handleEscClick=handleEscClick.bind(this),this.handleBtnClick=handleBtnClick.bind(this),this.handleOpen=handleOpen.bind(this),this.handleClose=handleClose.bind(this),this.openPopup=openPopup.bind(this),this.closePopup=closePopup.bind(this),this.openTarget=openTarget.bind(this),this.closeTarget=closeTarget.bind(this),this.handleMutation=handleMutation.bind(this),this.btn=null,this.popup=null,this.closeTrigger=null,this.observedPopups=[]}return _createClass(e,[{key:"_addListeners",value:function(){this.openHandler=this.handleOpen.bind(this),this.closeHandler=this.handleClose.bind(this),this.popstateHandler=this.handlePopState.bind(this),this.onClose&&(this.observer=new MutationObserver(this.handleMutation.bind(this))),document.addEventListener("click",this.openHandler),document.addEventListener("click",this.closeHandler),this.options.escapeHandler&&document.addEventListener("keydown",this.closeHandler),this.shouldAddPopstate&&window.addEventListener("popstate",this.popstateHandler)}},{key:"_removeListeners",value:function(){document.removeEventListener("click",this.openHandler),document.removeEventListener("click",this.closeHandler),this.options.escapeHandler&&document.removeEventListener("keydown",this.closeHandler),this.shouldAddPopstate&&window.removeEventListener("popstate",this.popstateHandler)}},{key:"_onLoad",value:function(){0<this.hashStart&&(this.href=window.location.href.slice(this.hashStart),this.openPopup())}},{key:"init",value:function(){this._addListeners(),this._onLoad()}},{key:"destroy",value:function(){this.closeAll(),this._removeListeners(),this.observer&&this.observer.disconnect()}},{key:"popups",get:function(){return _toConsumableArray(document.querySelectorAll(".".concat(TARGET)))}},{key:"btns",get:function(){return _toConsumableArray(document.querySelectorAll(".".concat(OPEN)))}},{key:"openPopups",get:function(){return this.popups.filter(function(t){return BEMblock(t,POPUP).containsMod(IS_ACTIVE)})}},{key:"hashStart",get:function(){return window.location.href.indexOf(HASH)}},{key:"shouldAddPopstate",get:function(){return 0<this.btns.filter(function(t){return t.getAttribute("href")&&2<t.getAttribute("href").length}).length}}]),e}();module.exports=Popup;
