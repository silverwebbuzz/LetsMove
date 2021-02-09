function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listing-listing-module"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js ***!
    \*****************************************************************/

  /*! exports provided: A11yModule, ActiveDescendantKeyManager, AriaDescriber, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, CDK_DESCRIBEDBY_ID_PREFIX, CdkAriaLive, CdkMonitorFocus, CdkTrapFocus, ConfigurableFocusTrap, ConfigurableFocusTrapFactory, EventListenerFocusTrapInertStrategy, FOCUS_MONITOR_DEFAULT_OPTIONS, FOCUS_TRAP_INERT_STRATEGY, FocusKeyManager, FocusMonitor, FocusTrap, FocusTrapFactory, HighContrastModeDetector, InteractivityChecker, LIVE_ANNOUNCER_DEFAULT_OPTIONS, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, ListKeyManager, LiveAnnouncer, MESSAGES_CONTAINER_ID, TOUCH_BUFFER_MS, isFakeMousedownFromScreenReader, ɵangular_material_src_cdk_a11y_a11y_a, ɵangular_material_src_cdk_a11y_a11y_b */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015A11yJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "A11yModule", function () {
      return A11yModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActiveDescendantKeyManager", function () {
      return ActiveDescendantKeyManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AriaDescriber", function () {
      return AriaDescriber;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_HOST_ATTRIBUTE", function () {
      return CDK_DESCRIBEDBY_HOST_ATTRIBUTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_ID_PREFIX", function () {
      return CDK_DESCRIBEDBY_ID_PREFIX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkAriaLive", function () {
      return CdkAriaLive;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkMonitorFocus", function () {
      return CdkMonitorFocus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTrapFocus", function () {
      return CdkTrapFocus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurableFocusTrap", function () {
      return ConfigurableFocusTrap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurableFocusTrapFactory", function () {
      return ConfigurableFocusTrapFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventListenerFocusTrapInertStrategy", function () {
      return EventListenerFocusTrapInertStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_DEFAULT_OPTIONS", function () {
      return FOCUS_MONITOR_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FOCUS_TRAP_INERT_STRATEGY", function () {
      return FOCUS_TRAP_INERT_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusKeyManager", function () {
      return FocusKeyManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusMonitor", function () {
      return FocusMonitor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusTrap", function () {
      return FocusTrap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusTrapFactory", function () {
      return FocusTrapFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighContrastModeDetector", function () {
      return HighContrastModeDetector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InteractivityChecker", function () {
      return InteractivityChecker;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_DEFAULT_OPTIONS", function () {
      return LIVE_ANNOUNCER_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN", function () {
      return LIVE_ANNOUNCER_ELEMENT_TOKEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY", function () {
      return LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListKeyManager", function () {
      return ListKeyManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LiveAnnouncer", function () {
      return LiveAnnouncer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MESSAGES_CONTAINER_ID", function () {
      return MESSAGES_CONTAINER_ID;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TOUCH_BUFFER_MS", function () {
      return TOUCH_BUFFER_MS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isFakeMousedownFromScreenReader", function () {
      return isFakeMousedownFromScreenReader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_a11y_a11y_a", function () {
      return FocusTrapManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_a11y_a11y_b", function () {
      return ConfigurableFocusTrapConfig;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/aria-describer/aria-reference.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * IDs are delimited by an empty space, as per the spec.
     * @type {?}
     */


    var ID_DELIMITER = ' ';
    /**
     * Adds the given ID to the specified ARIA attribute on an element.
     * Used for attributes such as aria-labelledby, aria-owns, etc.
     * @param {?} el
     * @param {?} attr
     * @param {?} id
     * @return {?}
     */

    function addAriaReferencedId(el, attr, id) {
      /** @type {?} */
      var ids = getAriaReferenceIds(el, attr);

      if (ids.some(
      /**
      * @param {?} existingId
      * @return {?}
      */
      function (existingId) {
        return existingId.trim() == id.trim();
      })) {
        return;
      }

      ids.push(id.trim());
      el.setAttribute(attr, ids.join(ID_DELIMITER));
    }
    /**
     * Removes the given ID from the specified ARIA attribute on an element.
     * Used for attributes such as aria-labelledby, aria-owns, etc.
     * @param {?} el
     * @param {?} attr
     * @param {?} id
     * @return {?}
     */


    function removeAriaReferencedId(el, attr, id) {
      /** @type {?} */
      var ids = getAriaReferenceIds(el, attr);
      /** @type {?} */

      var filteredIds = ids.filter(
      /**
      * @param {?} val
      * @return {?}
      */
      function (val) {
        return val != id.trim();
      });

      if (filteredIds.length) {
        el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
      } else {
        el.removeAttribute(attr);
      }
    }
    /**
     * Gets the list of IDs referenced by the given ARIA attribute on an element.
     * Used for attributes such as aria-labelledby, aria-owns, etc.
     * @param {?} el
     * @param {?} attr
     * @return {?}
     */


    function getAriaReferenceIds(el, attr) {
      // Get string array of all individual ids (whitespace delimited) in the attribute value
      return (el.getAttribute(attr) || '').match(/\S+/g) || [];
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/aria-describer/aria-describer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Interface used to register message elements and keep a count of how many registrations have
     * the same message and the reference to the message element used for the `aria-describedby`.
     * @record
     */


    function RegisteredMessage() {}

    if (false) {}
    /**
     * ID used for the body container where all messages are appended.
     * @type {?}
     */


    var MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
    /**
     * ID prefix used for each created message element.
     * @type {?}
     */

    var CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
    /**
     * Attribute given to each host element that is described by a message element.
     * @type {?}
     */

    var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
    /**
     * Global incremental identifier for each registered message element.
     * @type {?}
     */

    var nextId = 0;
    /**
     * Global map of all registered message elements that have been placed into the document.
     * @type {?}
     */

    var messageRegistry = new Map();
    /**
     * Container for all registered messages.
     * @type {?}
     */

    var messagesContainer = null;
    /**
     * Utility that creates visually hidden elements with a message content. Useful for elements that
     * want to use aria-describedby to further describe themselves without adding additional visual
     * content.
     */

    var AriaDescriber = /*#__PURE__*/function () {
      /**
       * @param {?} _document
       */
      function AriaDescriber(_document) {
        _classCallCheck(this, AriaDescriber);

        this._document = _document;
      }
      /**
       * Adds to the host element an aria-describedby reference to a hidden element that contains
       * the message. If the same message has already been registered, then it will reuse the created
       * message element.
       * @param {?} hostElement
       * @param {?} message
       * @return {?}
       */


      _createClass(AriaDescriber, [{
        key: "describe",
        value: function describe(hostElement, message) {
          if (!this._canBeDescribed(hostElement, message)) {
            return;
          }

          if (typeof message !== 'string') {
            // We need to ensure that the element has an ID.
            this._setMessageId(message);

            messageRegistry.set(message, {
              messageElement: message,
              referenceCount: 0
            });
          } else if (!messageRegistry.has(message)) {
            this._createMessageElement(message);
          }

          if (!this._isElementDescribedByMessage(hostElement, message)) {
            this._addMessageReference(hostElement, message);
          }
        }
        /**
         * Removes the host element's aria-describedby reference to the message element.
         * @param {?} hostElement
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "removeDescription",
        value: function removeDescription(hostElement, message) {
          if (!this._isElementNode(hostElement)) {
            return;
          }

          if (this._isElementDescribedByMessage(hostElement, message)) {
            this._removeMessageReference(hostElement, message);
          } // If the message is a string, it means that it's one that we created for the
          // consumer so we can remove it safely, otherwise we should leave it in place.


          if (typeof message === 'string') {
            /** @type {?} */
            var registeredMessage = messageRegistry.get(message);

            if (registeredMessage && registeredMessage.referenceCount === 0) {
              this._deleteMessageElement(message);
            }
          }

          if (messagesContainer && messagesContainer.childNodes.length === 0) {
            this._deleteMessagesContainer();
          }
        }
        /**
         * Unregisters all created message elements and removes the message container.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var describedElements = this._document.querySelectorAll("[".concat(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, "]"));

          for (var i = 0; i < describedElements.length; i++) {
            this._removeCdkDescribedByReferenceIds(describedElements[i]);

            describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
          }

          if (messagesContainer) {
            this._deleteMessagesContainer();
          }

          messageRegistry.clear();
        }
        /**
         * Creates a new element in the visually hidden message container element with the message
         * as its content and adds it to the message registry.
         * @private
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_createMessageElement",
        value: function _createMessageElement(message) {
          /** @type {?} */
          var messageElement = this._document.createElement('div');

          this._setMessageId(messageElement);

          messageElement.textContent = message;

          this._createMessagesContainer();

          /** @type {?} */
          messagesContainer.appendChild(messageElement);
          messageRegistry.set(message, {
            messageElement: messageElement,
            referenceCount: 0
          });
        }
        /**
         * Assigns a unique ID to an element, if it doesn't have one already.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_setMessageId",
        value: function _setMessageId(element) {
          if (!element.id) {
            element.id = "".concat(CDK_DESCRIBEDBY_ID_PREFIX, "-").concat(nextId++);
          }
        }
        /**
         * Deletes the message element from the global messages container.
         * @private
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_deleteMessageElement",
        value: function _deleteMessageElement(message) {
          /** @type {?} */
          var registeredMessage = messageRegistry.get(message);
          /** @type {?} */

          var messageElement = registeredMessage && registeredMessage.messageElement;

          if (messagesContainer && messageElement) {
            messagesContainer.removeChild(messageElement);
          }

          messageRegistry["delete"](message);
        }
        /**
         * Creates the global container for all aria-describedby messages.
         * @private
         * @return {?}
         */

      }, {
        key: "_createMessagesContainer",
        value: function _createMessagesContainer() {
          if (!messagesContainer) {
            /** @type {?} */
            var preExistingContainer = this._document.getElementById(MESSAGES_CONTAINER_ID); // When going from the server to the client, we may end up in a situation where there's
            // already a container on the page, but we don't have a reference to it. Clear the
            // old container so we don't get duplicates. Doing this, instead of emptying the previous
            // container, should be slightly faster.


            if (preExistingContainer) {
              /** @type {?} */
              preExistingContainer.parentNode.removeChild(preExistingContainer);
            }

            messagesContainer = this._document.createElement('div');
            messagesContainer.id = MESSAGES_CONTAINER_ID;
            messagesContainer.setAttribute('aria-hidden', 'true');
            messagesContainer.style.display = 'none';

            this._document.body.appendChild(messagesContainer);
          }
        }
        /**
         * Deletes the global messages container.
         * @private
         * @return {?}
         */

      }, {
        key: "_deleteMessagesContainer",
        value: function _deleteMessagesContainer() {
          if (messagesContainer && messagesContainer.parentNode) {
            messagesContainer.parentNode.removeChild(messagesContainer);
            messagesContainer = null;
          }
        }
        /**
         * Removes all cdk-describedby messages that are hosted through the element.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_removeCdkDescribedByReferenceIds",
        value: function _removeCdkDescribedByReferenceIds(element) {
          // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX

          /** @type {?} */
          var originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(
          /**
          * @param {?} id
          * @return {?}
          */
          function (id) {
            return id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0;
          });
          element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
        }
        /**
         * Adds a message reference to the element using aria-describedby and increments the registered
         * message's reference count.
         * @private
         * @param {?} element
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_addMessageReference",
        value: function _addMessageReference(element, message) {
          /** @type {?} */
          var registeredMessage =
          /** @type {?} */
          messageRegistry.get(message); // Add the aria-describedby reference and set the
          // describedby_host attribute to mark the element.

          addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
          element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
          registeredMessage.referenceCount++;
        }
        /**
         * Removes a message reference from the element using aria-describedby
         * and decrements the registered message's reference count.
         * @private
         * @param {?} element
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_removeMessageReference",
        value: function _removeMessageReference(element, message) {
          /** @type {?} */
          var registeredMessage =
          /** @type {?} */
          messageRegistry.get(message);
          registeredMessage.referenceCount--;
          removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
          element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
        }
        /**
         * Returns true if the element has been described by the provided message ID.
         * @private
         * @param {?} element
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_isElementDescribedByMessage",
        value: function _isElementDescribedByMessage(element, message) {
          /** @type {?} */
          var referenceIds = getAriaReferenceIds(element, 'aria-describedby');
          /** @type {?} */

          var registeredMessage = messageRegistry.get(message);
          /** @type {?} */

          var messageId = registeredMessage && registeredMessage.messageElement.id;
          return !!messageId && referenceIds.indexOf(messageId) != -1;
        }
        /**
         * Determines whether a message can be described on a particular element.
         * @private
         * @param {?} element
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_canBeDescribed",
        value: function _canBeDescribed(element, message) {
          if (!this._isElementNode(element)) {
            return false;
          }

          if (message && typeof message === 'object') {
            // We'd have to make some assumptions about the description element's text, if the consumer
            // passed in an element. Assume that if an element is passed in, the consumer has verified
            // that it can be used as a description.
            return true;
          }
          /** @type {?} */


          var trimmedMessage = message == null ? '' : "".concat(message).trim();
          /** @type {?} */

          var ariaLabel = element.getAttribute('aria-label'); // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
          // element, because screen readers will end up reading out the same text twice in a row.

          return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
        }
        /**
         * Checks whether a node is an Element node.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_isElementNode",
        value: function _isElementNode(element) {
          return element.nodeType === this._document.ELEMENT_NODE;
        }
      }]);

      return AriaDescriber;
    }();

    AriaDescriber.ɵfac = function AriaDescriber_Factory(t) {
      return new (t || AriaDescriber)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
    };
    /** @nocollapse */


    AriaDescriber.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    AriaDescriber.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function AriaDescriber_Factory() {
        return new AriaDescriber(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      },
      token: AriaDescriber,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AriaDescriber, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/key-manager/list-key-manager.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This interface is for items that can be passed to a ListKeyManager.
     * @record
     */


    function ListKeyManagerOption() {}

    if (false) {}
    /**
     * This class manages keyboard events for selectable lists. If you pass it a query list
     * of items, it will set the active item correctly when arrow events occur.
     * @template T
     */


    var ListKeyManager = /*#__PURE__*/function () {
      /**
       * @param {?} _items
       */
      function ListKeyManager(_items) {
        var _this = this;

        _classCallCheck(this, ListKeyManager);

        this._items = _items;
        this._activeItemIndex = -1;
        this._activeItem = null;
        this._wrap = false;
        this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        this._vertical = true;
        this._allowedModifierKeys = [];
        /**
         * Predicate function that can be used to check whether an item should be skipped
         * by the key manager. By default, disabled items are skipped.
         */

        this._skipPredicateFn =
        /**
        * @param {?} item
        * @return {?}
        */
        function (item) {
          return item.disabled;
        }; // Buffer for the letters that the user has pressed when the typeahead option is turned on.


        this._pressedLetters = [];
        /**
         * Stream that emits any time the TAB key is pressed, so components can react
         * when focus is shifted off of the list.
         */

        this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Stream that emits whenever the active item of the list manager changes.
         */

        this.change = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // We allow for the items to be an array because, in some cases, the consumer may
        // not have access to a QueryList of the items they want to manage (e.g. when the
        // items aren't being collected via `ViewChildren` or `ContentChildren`).

        if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]) {
          _items.changes.subscribe(
          /**
          * @param {?} newItems
          * @return {?}
          */
          function (newItems) {
            if (_this._activeItem) {
              /** @type {?} */
              var itemArray = newItems.toArray();
              /** @type {?} */

              var newIndex = itemArray.indexOf(_this._activeItem);

              if (newIndex > -1 && newIndex !== _this._activeItemIndex) {
                _this._activeItemIndex = newIndex;
              }
            }
          });
        }
      }
      /**
       * Sets the predicate function that determines which items should be skipped by the
       * list key manager.
       * @template THIS
       * @this {THIS}
       * @param {?} predicate Function that determines whether the given item should be skipped.
       * @return {THIS}
       */


      _createClass(ListKeyManager, [{
        key: "skipPredicate",
        value: function skipPredicate(predicate) {
          /** @type {?} */
          this._skipPredicateFn = predicate;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Configures wrapping mode, which determines whether the active item will wrap to
         * the other end of list when there are no more items in the given direction.
         * @template THIS
         * @this {THIS}
         * @param {?=} shouldWrap Whether the list should wrap when reaching the end.
         * @return {THIS}
         */

      }, {
        key: "withWrap",
        value: function withWrap() {
          var shouldWrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._wrap = shouldWrap;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Configures whether the key manager should be able to move the selection vertically.
         * @template THIS
         * @this {THIS}
         * @param {?=} enabled Whether vertical selection should be enabled.
         * @return {THIS}
         */

      }, {
        key: "withVerticalOrientation",
        value: function withVerticalOrientation() {
          var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._vertical = enabled;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Configures the key manager to move the selection horizontally.
         * Passing in `null` will disable horizontal movement.
         * @template THIS
         * @this {THIS}
         * @param {?} direction Direction in which the selection can be moved.
         * @return {THIS}
         */

      }, {
        key: "withHorizontalOrientation",
        value: function withHorizontalOrientation(direction) {
          /** @type {?} */
          this._horizontal = direction;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Modifier keys which are allowed to be held down and whose default actions will be prevented
         * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
         * @template THIS
         * @this {THIS}
         * @param {?} keys
         * @return {THIS}
         */

      }, {
        key: "withAllowedModifierKeys",
        value: function withAllowedModifierKeys(keys) {
          /** @type {?} */
          this._allowedModifierKeys = keys;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Turns on typeahead mode which allows users to set the active item by typing.
         * @template THIS
         * @this {THIS}
         * @param {?=} debounceInterval Time to wait after the last keystroke before setting the active item.
         * @return {THIS}
         */

      }, {
        key: "withTypeAhead",
        value: function withTypeAhead() {
          var _this2 = this;

          var debounceInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

          if (
          /** @type {?} */
          this._items.length &&
          /** @type {?} */
          this._items.some(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return typeof item.getLabel !== 'function';
          })) {
            throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
          }

          /** @type {?} */
          this._typeaheadSubscription.unsubscribe(); // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
          // and convert those letters back into a string. Afterwards find the first item that starts
          // with that string and select it.


          /** @type {?} */
          this._typeaheadSubscription =
          /** @type {?} */
          this._letterKeyStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
          /**
          * @param {?} letter
          * @return {?}
          */
          function (letter) {
            return (
              /** @type {?} */
              _this2._pressedLetters.push(letter)
            );
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(debounceInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return (
              /** @type {?} */
              _this2._pressedLetters.length > 0
            );
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @return {?}
          */
          function () {
            return (
              /** @type {?} */
              _this2._pressedLetters.join('')
            );
          })).subscribe(
          /**
          * @param {?} inputString
          * @return {?}
          */
          function (inputString) {
            /** @type {?} */
            var items =
            /** @type {?} */
            _this2._getItemsArray(); // Start at 1 because we want to start searching at the item immediately
            // following the current active item.


            for (var i = 1; i < items.length + 1; i++) {
              /** @type {?} */
              var index = (
              /** @type {?} */
              _this2._activeItemIndex + i) % items.length;
              /** @type {?} */

              var item = items[index];

              if (!
              /** @type {?} */
              _this2._skipPredicateFn(item) &&
              /** @type {?} */
              item.getLabel().toUpperCase().trim().indexOf(inputString) === 0) {
                /** @type {?} */
                _this2.setActiveItem(index);

                break;
              }
            }

            /** @type {?} */
            _this2._pressedLetters = [];
          });
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "setActiveItem",
        value: function setActiveItem(item) {
          /** @type {?} */
          var previousIndex = this._activeItemIndex;
          this.updateActiveItem(item);

          if (this._activeItemIndex !== previousIndex) {
            this.change.next(this._activeItemIndex);
          }
        }
        /**
         * Sets the active item depending on the key event passed in.
         * @param {?} event Keyboard event to be used for determining which element should be active.
         * @return {?}
         */

      }, {
        key: "onKeydown",
        value: function onKeydown(event) {
          var _this3 = this;

          /** @type {?} */
          var keyCode = event.keyCode;
          /** @type {?} */

          var modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
          /** @type {?} */

          var isModifierAllowed = modifiers.every(
          /**
          * @param {?} modifier
          * @return {?}
          */
          function (modifier) {
            return !event[modifier] || _this3._allowedModifierKeys.indexOf(modifier) > -1;
          });

          switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["TAB"]:
              this.tabOut.next();
              return;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
              if (this._vertical && isModifierAllowed) {
                this.setNextItemActive();
                break;
              } else {
                return;
              }

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
              if (this._vertical && isModifierAllowed) {
                this.setPreviousItemActive();
                break;
              } else {
                return;
              }

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
              if (this._horizontal && isModifierAllowed) {
                this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
                break;
              } else {
                return;
              }

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
              if (this._horizontal && isModifierAllowed) {
                this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
                break;
              } else {
                return;
              }

            default:
              if (isModifierAllowed || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event, 'shiftKey')) {
                // Attempt to use the `event.key` which also maps it to the user's keyboard language,
                // otherwise fall back to resolving alphanumeric characters via the keyCode.
                if (event.key && event.key.length === 1) {
                  this._letterKeyStream.next(event.key.toLocaleUpperCase());
                } else if (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["A"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["Z"] || keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ZERO"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["NINE"]) {
                  this._letterKeyStream.next(String.fromCharCode(keyCode));
                }
              } // Note that we return here, in order to avoid preventing
              // the default action of non-navigational keys.


              return;
          }

          this._pressedLetters = [];
          event.preventDefault();
        }
        /**
         * Index of the currently active item.
         * @return {?}
         */

      }, {
        key: "isTyping",

        /**
         * Gets whether the user is currently typing into the manager using the typeahead feature.
         * @return {?}
         */
        value: function isTyping() {
          return this._pressedLetters.length > 0;
        }
        /**
         * Sets the active item to the first enabled item in the list.
         * @return {?}
         */

      }, {
        key: "setFirstItemActive",
        value: function setFirstItemActive() {
          this._setActiveItemByIndex(0, 1);
        }
        /**
         * Sets the active item to the last enabled item in the list.
         * @return {?}
         */

      }, {
        key: "setLastItemActive",
        value: function setLastItemActive() {
          this._setActiveItemByIndex(this._items.length - 1, -1);
        }
        /**
         * Sets the active item to the next enabled item in the list.
         * @return {?}
         */

      }, {
        key: "setNextItemActive",
        value: function setNextItemActive() {
          this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
        }
        /**
         * Sets the active item to a previous enabled item in the list.
         * @return {?}
         */

      }, {
        key: "setPreviousItemActive",
        value: function setPreviousItemActive() {
          this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "updateActiveItem",
        value: function updateActiveItem(item) {
          /** @type {?} */
          var itemArray = this._getItemsArray();
          /** @type {?} */


          var index = typeof item === 'number' ? item : itemArray.indexOf(item);
          /** @type {?} */

          var activeItem = itemArray[index]; // Explicitly check for `null` and `undefined` because other falsy values are valid.

          this._activeItem = activeItem == null ? null : activeItem;
          this._activeItemIndex = index;
        }
        /**
         * This method sets the active item, given a list of items and the delta between the
         * currently active item and the new active item. It will calculate differently
         * depending on whether wrap mode is turned on.
         * @private
         * @param {?} delta
         * @return {?}
         */

      }, {
        key: "_setActiveItemByDelta",
        value: function _setActiveItemByDelta(delta) {
          this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
        }
        /**
         * Sets the active item properly given "wrap" mode. In other words, it will continue to move
         * down the list until it finds an item that is not disabled, and it will wrap if it
         * encounters either end of the list.
         * @private
         * @param {?} delta
         * @return {?}
         */

      }, {
        key: "_setActiveInWrapMode",
        value: function _setActiveInWrapMode(delta) {
          /** @type {?} */
          var items = this._getItemsArray();

          for (var i = 1; i <= items.length; i++) {
            /** @type {?} */
            var index = (this._activeItemIndex + delta * i + items.length) % items.length;
            /** @type {?} */

            var item = items[index];

            if (!this._skipPredicateFn(item)) {
              this.setActiveItem(index);
              return;
            }
          }
        }
        /**
         * Sets the active item properly given the default mode. In other words, it will
         * continue to move down the list until it finds an item that is not disabled. If
         * it encounters either end of the list, it will stop and not wrap.
         * @private
         * @param {?} delta
         * @return {?}
         */

      }, {
        key: "_setActiveInDefaultMode",
        value: function _setActiveInDefaultMode(delta) {
          this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
        }
        /**
         * Sets the active item to the first enabled item starting at the index specified. If the
         * item is disabled, it will move in the fallbackDelta direction until it either
         * finds an enabled item or encounters the end of the list.
         * @private
         * @param {?} index
         * @param {?} fallbackDelta
         * @return {?}
         */

      }, {
        key: "_setActiveItemByIndex",
        value: function _setActiveItemByIndex(index, fallbackDelta) {
          /** @type {?} */
          var items = this._getItemsArray();

          if (!items[index]) {
            return;
          }

          while (this._skipPredicateFn(items[index])) {
            index += fallbackDelta;

            if (!items[index]) {
              return;
            }
          }

          this.setActiveItem(index);
        }
        /**
         * Returns the items as an array.
         * @private
         * @return {?}
         */

      }, {
        key: "_getItemsArray",
        value: function _getItemsArray() {
          return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"] ? this._items.toArray() : this._items;
        }
      }, {
        key: "activeItemIndex",
        get: function get() {
          return this._activeItemIndex;
        }
        /**
         * The active item.
         * @return {?}
         */

      }, {
        key: "activeItem",
        get: function get() {
          return this._activeItem;
        }
      }]);

      return ListKeyManager;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/key-manager/activedescendant-key-manager.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This is the interface for highlightable items (used by the ActiveDescendantKeyManager).
     * Each item must know how to style itself as active or inactive and whether or not it is
     * currently disabled.
     * @record
     */


    function Highlightable() {}

    if (false) {}
    /**
     * @template T
     */


    var ActiveDescendantKeyManager = /*#__PURE__*/function (_ListKeyManager) {
      _inherits(ActiveDescendantKeyManager, _ListKeyManager);

      var _super = _createSuper(ActiveDescendantKeyManager);

      function ActiveDescendantKeyManager() {
        _classCallCheck(this, ActiveDescendantKeyManager);

        return _super.apply(this, arguments);
      }

      _createClass(ActiveDescendantKeyManager, [{
        key: "setActiveItem",

        /**
         * @param {?} index
         * @return {?}
         */
        value: function setActiveItem(index) {
          if (this.activeItem) {
            this.activeItem.setInactiveStyles();
          }

          _get(_getPrototypeOf(ActiveDescendantKeyManager.prototype), "setActiveItem", this).call(this, index);

          if (this.activeItem) {
            this.activeItem.setActiveStyles();
          }
        }
      }]);

      return ActiveDescendantKeyManager;
    }(ListKeyManager);
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/key-manager/focus-key-manager.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This is the interface for focusable items (used by the FocusKeyManager).
     * Each item must know how to focus itself, whether or not it is currently disabled
     * and be able to supply its label.
     * @record
     */


    function FocusableOption() {}

    if (false) {}
    /**
     * @template T
     */


    var FocusKeyManager = /*#__PURE__*/function (_ListKeyManager2) {
      _inherits(FocusKeyManager, _ListKeyManager2);

      var _super2 = _createSuper(FocusKeyManager);

      function FocusKeyManager() {
        var _this4;

        _classCallCheck(this, FocusKeyManager);

        _this4 = _super2.apply(this, arguments);
        _this4._origin = 'program';
        return _this4;
      }
      /**
       * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
       * @template THIS
       * @this {THIS}
       * @param {?} origin Focus origin to be used when focusing items.
       * @return {THIS}
       */


      _createClass(FocusKeyManager, [{
        key: "setFocusOrigin",
        value: function setFocusOrigin(origin) {
          /** @type {?} */
          this._origin = origin;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "setActiveItem",
        value: function setActiveItem(item) {
          _get(_getPrototypeOf(FocusKeyManager.prototype), "setActiveItem", this).call(this, item);

          if (this.activeItem) {
            this.activeItem.focus(this._origin);
          }
        }
      }]);

      return FocusKeyManager;
    }(ListKeyManager);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/interactivity-checker/interactivity-checker.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // The InteractivityChecker leans heavily on the ally.js accessibility utilities.
    // Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
    // supported.

    /**
     * Utility for checking the interactivity of an element, such as whether is is focusable or
     * tabbable.
     */


    var InteractivityChecker = /*#__PURE__*/function () {
      /**
       * @param {?} _platform
       */
      function InteractivityChecker(_platform) {
        _classCallCheck(this, InteractivityChecker);

        this._platform = _platform;
      }
      /**
       * Gets whether an element is disabled.
       *
       * @param {?} element Element to be checked.
       * @return {?} Whether the element is disabled.
       */


      _createClass(InteractivityChecker, [{
        key: "isDisabled",
        value: function isDisabled(element) {
          // This does not capture some cases, such as a non-form control with a disabled attribute or
          // a form control inside of a disabled form, but should capture the most common cases.
          return element.hasAttribute('disabled');
        }
        /**
         * Gets whether an element is visible for the purposes of interactivity.
         *
         * This will capture states like `display: none` and `visibility: hidden`, but not things like
         * being clipped by an `overflow: hidden` parent or being outside the viewport.
         *
         * @param {?} element
         * @return {?} Whether the element is visible.
         */

      }, {
        key: "isVisible",
        value: function isVisible(element) {
          return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
        }
        /**
         * Gets whether an element can be reached via Tab key.
         * Assumes that the element has already been checked with isFocusable.
         *
         * @param {?} element Element to be checked.
         * @return {?} Whether the element is tabbable.
         */

      }, {
        key: "isTabbable",
        value: function isTabbable(element) {
          // Nothing is tabbable on the server 😎
          if (!this._platform.isBrowser) {
            return false;
          }
          /** @type {?} */


          var frameElement = getFrameElement(getWindow(element));

          if (frameElement) {
            /** @type {?} */
            var frameType = frameElement && frameElement.nodeName.toLowerCase(); // Frame elements inherit their tabindex onto all child elements.

            if (getTabIndexValue(frameElement) === -1) {
              return false;
            } // Webkit and Blink consider anything inside of an <object> element as non-tabbable.


            if ((this._platform.BLINK || this._platform.WEBKIT) && frameType === 'object') {
              return false;
            } // Webkit and Blink disable tabbing to an element inside of an invisible frame.


            if ((this._platform.BLINK || this._platform.WEBKIT) && !this.isVisible(frameElement)) {
              return false;
            }
          }
          /** @type {?} */


          var nodeName = element.nodeName.toLowerCase();
          /** @type {?} */

          var tabIndexValue = getTabIndexValue(element);

          if (element.hasAttribute('contenteditable')) {
            return tabIndexValue !== -1;
          }

          if (nodeName === 'iframe') {
            // The frames may be tabbable depending on content, but it's not possibly to reliably
            // investigate the content of the frames.
            return false;
          }

          if (nodeName === 'audio') {
            if (!element.hasAttribute('controls')) {
              // By default an <audio> element without the controls enabled is not tabbable.
              return false;
            } else if (this._platform.BLINK) {
              // In Blink <audio controls> elements are always tabbable.
              return true;
            }
          }

          if (nodeName === 'video') {
            if (!element.hasAttribute('controls') && this._platform.TRIDENT) {
              // In Trident a <video> element without the controls enabled is not tabbable.
              return false;
            } else if (this._platform.BLINK || this._platform.FIREFOX) {
              // In Chrome and Firefox <video controls> elements are always tabbable.
              return true;
            }
          }

          if (nodeName === 'object' && (this._platform.BLINK || this._platform.WEBKIT)) {
            // In all Blink and WebKit based browsers <object> elements are never tabbable.
            return false;
          } // In iOS the browser only considers some specific elements as tabbable.


          if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
            return false;
          }

          return element.tabIndex >= 0;
        }
        /**
         * Gets whether an element can be focused by the user.
         *
         * @param {?} element Element to be checked.
         * @return {?} Whether the element is focusable.
         */

      }, {
        key: "isFocusable",
        value: function isFocusable(element) {
          // Perform checks in order of left to most expensive.
          // Again, naive approach that does not capture many edge cases and browser quirks.
          return isPotentiallyFocusable(element) && !this.isDisabled(element) && this.isVisible(element);
        }
      }]);

      return InteractivityChecker;
    }();

    InteractivityChecker.ɵfac = function InteractivityChecker_Factory(t) {
      return new (t || InteractivityChecker)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]));
    };
    /** @nocollapse */


    InteractivityChecker.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }];
    };
    /** @nocollapse */


    InteractivityChecker.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function InteractivityChecker_Factory() {
        return new InteractivityChecker(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]));
      },
      token: InteractivityChecker,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InteractivityChecker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
     * the frameElement property is being accessed from a different host address, this property
     * should be accessed carefully.
     * @param {?} window
     * @return {?}
     */


    function getFrameElement(window) {
      try {
        return (
          /** @type {?} */
          window.frameElement
        );
      } catch (_a) {
        return null;
      }
    }
    /**
     * Checks whether the specified element has any geometry / rectangles.
     * @param {?} element
     * @return {?}
     */


    function hasGeometry(element) {
      // Use logic from jQuery to check for an invisible element.
      // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
      return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
    }
    /**
     * Gets whether an element's
     * @param {?} element
     * @return {?}
     */


    function isNativeFormElement(element) {
      /** @type {?} */
      var nodeName = element.nodeName.toLowerCase();
      return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
    }
    /**
     * Gets whether an element is an `<input type="hidden">`.
     * @param {?} element
     * @return {?}
     */


    function isHiddenInput(element) {
      return isInputElement(element) && element.type == 'hidden';
    }
    /**
     * Gets whether an element is an anchor that has an href attribute.
     * @param {?} element
     * @return {?}
     */


    function isAnchorWithHref(element) {
      return isAnchorElement(element) && element.hasAttribute('href');
    }
    /**
     * Gets whether an element is an input element.
     * @param {?} element
     * @return {?}
     */


    function isInputElement(element) {
      return element.nodeName.toLowerCase() == 'input';
    }
    /**
     * Gets whether an element is an anchor element.
     * @param {?} element
     * @return {?}
     */


    function isAnchorElement(element) {
      return element.nodeName.toLowerCase() == 'a';
    }
    /**
     * Gets whether an element has a valid tabindex.
     * @param {?} element
     * @return {?}
     */


    function hasValidTabIndex(element) {
      if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
        return false;
      }
      /** @type {?} */


      var tabIndex = element.getAttribute('tabindex'); // IE11 parses tabindex="" as the value "-32768"

      if (tabIndex == '-32768') {
        return false;
      }

      return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
    }
    /**
     * Returns the parsed tabindex from the element attributes instead of returning the
     * evaluated tabindex from the browsers defaults.
     * @param {?} element
     * @return {?}
     */


    function getTabIndexValue(element) {
      if (!hasValidTabIndex(element)) {
        return null;
      } // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054

      /** @type {?} */


      var tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
      return isNaN(tabIndex) ? -1 : tabIndex;
    }
    /**
     * Checks whether the specified element is potentially tabbable on iOS
     * @param {?} element
     * @return {?}
     */


    function isPotentiallyTabbableIOS(element) {
      /** @type {?} */
      var nodeName = element.nodeName.toLowerCase();
      /** @type {?} */

      var inputType = nodeName === 'input' &&
      /** @type {?} */
      element.type;
      return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
    }
    /**
     * Gets whether an element is potentially focusable without taking current visible/disabled state
     * into account.
     * @param {?} element
     * @return {?}
     */


    function isPotentiallyFocusable(element) {
      // Inputs are potentially focusable *unless* they're type="hidden".
      if (isHiddenInput(element)) {
        return false;
      }

      return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
    }
    /**
     * Gets the parent window of a DOM node with regards of being inside of an iframe.
     * @param {?} node
     * @return {?}
     */


    function getWindow(node) {
      // ownerDocument is null if `node` itself *is* a document.
      return node.ownerDocument && node.ownerDocument.defaultView || window;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/focus-trap.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class that allows for trapping focus within a DOM element.
     *
     * This class currently uses a relatively simple approach to focus trapping.
     * It assumes that the tab order is the same as DOM order, which is not necessarily true.
     * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
     *
     * @deprecated Use `ConfigurableFocusTrap` instead.
     * \@breaking-change for 11.0.0 Remove this class.
     */


    var FocusTrap = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       * @param {?} _checker
       * @param {?} _ngZone
       * @param {?} _document
       * @param {?=} deferAnchors
       */
      function FocusTrap(_element, _checker, _ngZone, _document) {
        var _this5 = this;

        var deferAnchors = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

        _classCallCheck(this, FocusTrap);

        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
        this._hasAttached = false; // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.

        this.startAnchorListener =
        /**
        * @return {?}
        */
        function () {
          return _this5.focusLastTabbableElement();
        };

        this.endAnchorListener =
        /**
        * @return {?}
        */
        function () {
          return _this5.focusFirstTabbableElement();
        };

        this._enabled = true;

        if (!deferAnchors) {
          this.attachAnchors();
        }
      }
      /**
       * Whether the focus trap is active.
       * @return {?}
       */


      _createClass(FocusTrap, [{
        key: "destroy",

        /**
         * Destroys the focus trap by cleaning up the anchors.
         * @return {?}
         */
        value: function destroy() {
          /** @type {?} */
          var startAnchor = this._startAnchor;
          /** @type {?} */

          var endAnchor = this._endAnchor;

          if (startAnchor) {
            startAnchor.removeEventListener('focus', this.startAnchorListener);

            if (startAnchor.parentNode) {
              startAnchor.parentNode.removeChild(startAnchor);
            }
          }

          if (endAnchor) {
            endAnchor.removeEventListener('focus', this.endAnchorListener);

            if (endAnchor.parentNode) {
              endAnchor.parentNode.removeChild(endAnchor);
            }
          }

          this._startAnchor = this._endAnchor = null;
        }
        /**
         * Inserts the anchors into the DOM. This is usually done automatically
         * in the constructor, but can be deferred for cases like directives with `*ngIf`.
         * @return {?} Whether the focus trap managed to attach successfuly. This may not be the case
         * if the target element isn't currently in the DOM.
         */

      }, {
        key: "attachAnchors",
        value: function attachAnchors() {
          var _this6 = this;

          // If we're not on the browser, there can be no focus to trap.
          if (this._hasAttached) {
            return true;
          }

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            if (!_this6._startAnchor) {
              _this6._startAnchor = _this6._createAnchor();

              /** @type {?} */
              _this6._startAnchor.addEventListener('focus', _this6.startAnchorListener);
            }

            if (!_this6._endAnchor) {
              _this6._endAnchor = _this6._createAnchor();

              /** @type {?} */
              _this6._endAnchor.addEventListener('focus', _this6.endAnchorListener);
            }
          });

          if (this._element.parentNode) {
            this._element.parentNode.insertBefore(
            /** @type {?} */
            this._startAnchor, this._element);

            this._element.parentNode.insertBefore(
            /** @type {?} */
            this._endAnchor, this._element.nextSibling);

            this._hasAttached = true;
          }

          return this._hasAttached;
        }
        /**
         * Waits for the zone to stabilize, then either focuses the first element that the
         * user specified, or the first tabbable element.
         * @return {?} Returns a promise that resolves with a boolean, depending
         * on whether focus was moved successfuly.
         */

      }, {
        key: "focusInitialElementWhenReady",
        value: function focusInitialElementWhenReady() {
          var _this7 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @return {?}
          */
          function (resolve) {
            _this7._executeOnStable(
            /**
            * @return {?}
            */
            function () {
              return resolve(_this7.focusInitialElement());
            });
          });
        }
        /**
         * Waits for the zone to stabilize, then focuses
         * the first tabbable element within the focus trap region.
         * @return {?} Returns a promise that resolves with a boolean, depending
         * on whether focus was moved successfuly.
         */

      }, {
        key: "focusFirstTabbableElementWhenReady",
        value: function focusFirstTabbableElementWhenReady() {
          var _this8 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @return {?}
          */
          function (resolve) {
            _this8._executeOnStable(
            /**
            * @return {?}
            */
            function () {
              return resolve(_this8.focusFirstTabbableElement());
            });
          });
        }
        /**
         * Waits for the zone to stabilize, then focuses
         * the last tabbable element within the focus trap region.
         * @return {?} Returns a promise that resolves with a boolean, depending
         * on whether focus was moved successfuly.
         */

      }, {
        key: "focusLastTabbableElementWhenReady",
        value: function focusLastTabbableElementWhenReady() {
          var _this9 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @return {?}
          */
          function (resolve) {
            _this9._executeOnStable(
            /**
            * @return {?}
            */
            function () {
              return resolve(_this9.focusLastTabbableElement());
            });
          });
        }
        /**
         * Get the specified boundary element of the trapped region.
         * @private
         * @param {?} bound The boundary to get (start or end of trapped region).
         * @return {?} The boundary element.
         */

      }, {
        key: "_getRegionBoundary",
        value: function _getRegionBoundary(bound) {
          // Contains the deprecated version of selector, for temporary backwards comparability.

          /** @type {?} */
          var markers =
          /** @type {?} */
          this._element.querySelectorAll("[cdk-focus-region-".concat(bound, "], ") + "[cdkFocusRegion".concat(bound, "], ") + "[cdk-focus-".concat(bound, "]"));

          for (var i = 0; i < markers.length; i++) {
            // @breaking-change 8.0.0
            if (markers[i].hasAttribute("cdk-focus-".concat(bound))) {
              console.warn("Found use of deprecated attribute 'cdk-focus-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated ") + "attribute will be removed in 8.0.0.", markers[i]);
            } else if (markers[i].hasAttribute("cdk-focus-region-".concat(bound))) {
              console.warn("Found use of deprecated attribute 'cdk-focus-region-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated attribute ") + "will be removed in 8.0.0.", markers[i]);
            }
          }

          if (bound == 'start') {
            return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
          }

          return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
        }
        /**
         * Focuses the element that should be focused when the focus trap is initialized.
         * @return {?} Whether focus was moved successfuly.
         */

      }, {
        key: "focusInitialElement",
        value: function focusInitialElement() {
          // Contains the deprecated version of selector, for temporary backwards comparability.

          /** @type {?} */
          var redirectToElement =
          /** @type {?} */
          this._element.querySelector("[cdk-focus-initial], " + "[cdkFocusInitial]");

          if (redirectToElement) {
            // @breaking-change 8.0.0
            if (redirectToElement.hasAttribute("cdk-focus-initial")) {
              console.warn("Found use of deprecated attribute 'cdk-focus-initial', " + "use 'cdkFocusInitial' instead. The deprecated attribute " + "will be removed in 8.0.0", redirectToElement);
            } // Warn the consumer if the element they've pointed to
            // isn't focusable, when not in production mode.


            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && !this._checker.isFocusable(redirectToElement)) {
              console.warn("Element matching '[cdkFocusInitial]' is not focusable.", redirectToElement);
            }

            redirectToElement.focus();
            return true;
          }

          return this.focusFirstTabbableElement();
        }
        /**
         * Focuses the first tabbable element within the focus trap region.
         * @return {?} Whether focus was moved successfuly.
         */

      }, {
        key: "focusFirstTabbableElement",
        value: function focusFirstTabbableElement() {
          /** @type {?} */
          var redirectToElement = this._getRegionBoundary('start');

          if (redirectToElement) {
            redirectToElement.focus();
          }

          return !!redirectToElement;
        }
        /**
         * Focuses the last tabbable element within the focus trap region.
         * @return {?} Whether focus was moved successfuly.
         */

      }, {
        key: "focusLastTabbableElement",
        value: function focusLastTabbableElement() {
          /** @type {?} */
          var redirectToElement = this._getRegionBoundary('end');

          if (redirectToElement) {
            redirectToElement.focus();
          }

          return !!redirectToElement;
        }
        /**
         * Checks whether the focus trap has successfuly been attached.
         * @return {?}
         */

      }, {
        key: "hasAttached",
        value: function hasAttached() {
          return this._hasAttached;
        }
        /**
         * Get the first tabbable element from a DOM subtree (inclusive).
         * @private
         * @param {?} root
         * @return {?}
         */

      }, {
        key: "_getFirstTabbableElement",
        value: function _getFirstTabbableElement(root) {
          if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
          } // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
          // back to `childNodes` which includes text nodes, comments etc.

          /** @type {?} */


          var children = root.children || root.childNodes;

          for (var i = 0; i < children.length; i++) {
            /** @type {?} */
            var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(
            /** @type {?} */
            children[i]) : null;

            if (tabbableChild) {
              return tabbableChild;
            }
          }

          return null;
        }
        /**
         * Get the last tabbable element from a DOM subtree (inclusive).
         * @private
         * @param {?} root
         * @return {?}
         */

      }, {
        key: "_getLastTabbableElement",
        value: function _getLastTabbableElement(root) {
          if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
          } // Iterate in reverse DOM order.

          /** @type {?} */


          var children = root.children || root.childNodes;

          for (var i = children.length - 1; i >= 0; i--) {
            /** @type {?} */
            var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(
            /** @type {?} */
            children[i]) : null;

            if (tabbableChild) {
              return tabbableChild;
            }
          }

          return null;
        }
        /**
         * Creates an anchor element.
         * @private
         * @return {?}
         */

      }, {
        key: "_createAnchor",
        value: function _createAnchor() {
          /** @type {?} */
          var anchor = this._document.createElement('div');

          this._toggleAnchorTabIndex(this._enabled, anchor);

          anchor.classList.add('cdk-visually-hidden');
          anchor.classList.add('cdk-focus-trap-anchor');
          anchor.setAttribute('aria-hidden', 'true');
          return anchor;
        }
        /**
         * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
         * @private
         * @param {?} isEnabled Whether the focus trap is enabled.
         * @param {?} anchor Anchor on which to toggle the tabindex.
         * @return {?}
         */

      }, {
        key: "_toggleAnchorTabIndex",
        value: function _toggleAnchorTabIndex(isEnabled, anchor) {
          // Remove the tabindex completely, rather than setting it to -1, because if the
          // element has a tabindex, the user might still hit it when navigating with the arrow keys.
          isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
        }
        /**
         * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
         * @protected
         * @param {?} enabled
         * @return {?}
         */

      }, {
        key: "toggleAnchors",
        value: function toggleAnchors(enabled) {
          if (this._startAnchor && this._endAnchor) {
            this._toggleAnchorTabIndex(enabled, this._startAnchor);

            this._toggleAnchorTabIndex(enabled, this._endAnchor);
          }
        }
        /**
         * Executes a function when the zone is stable.
         * @private
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "_executeOnStable",
        value: function _executeOnStable(fn) {
          if (this._ngZone.isStable) {
            fn();
          } else {
            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(fn);
          }
        }
      }, {
        key: "enabled",
        get: function get() {
          return this._enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._enabled = value;

          if (this._startAnchor && this._endAnchor) {
            this._toggleAnchorTabIndex(value, this._startAnchor);

            this._toggleAnchorTabIndex(value, this._endAnchor);
          }
        }
      }]);

      return FocusTrap;
    }();

    if (false) {}
    /**
     * Factory that allows easy instantiation of focus traps.
     * @deprecated Use `ConfigurableFocusTrapFactory` instead.
     * \@breaking-change for 11.0.0 Remove this class.
     */


    var FocusTrapFactory = /*#__PURE__*/function () {
      /**
       * @param {?} _checker
       * @param {?} _ngZone
       * @param {?} _document
       */
      function FocusTrapFactory(_checker, _ngZone, _document) {
        _classCallCheck(this, FocusTrapFactory);

        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
      }
      /**
       * Creates a focus-trapped region around the given element.
       * @param {?} element The element around which focus will be trapped.
       * @param {?=} deferCaptureElements Defers the creation of focus-capturing elements to be done
       *     manually by the user.
       * @return {?} The created focus trap instance.
       */


      _createClass(FocusTrapFactory, [{
        key: "create",
        value: function create(element) {
          var deferCaptureElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
        }
      }]);

      return FocusTrapFactory;
    }();

    FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) {
      return new (t || FocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
    };
    /** @nocollapse */


    FocusTrapFactory.ctorParameters = function () {
      return [{
        type: InteractivityChecker
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    FocusTrapFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function FocusTrapFactory_Factory() {
        return new FocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      },
      token: FocusTrapFactory,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusTrapFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: InteractivityChecker
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Directive for trapping focus within a region.
     */


    var CdkTrapFocus = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _focusTrapFactory
       * @param {?} _document
       */
      function CdkTrapFocus(_elementRef, _focusTrapFactory, _document) {
        _classCallCheck(this, CdkTrapFocus);

        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        /**
         * Previously focused element to restore focus to upon destroy when using autoCapture.
         */

        this._previouslyFocusedElement = null;
        this._document = _document;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
      }
      /**
       * Whether the focus trap is active.
       * @return {?}
       */


      _createClass(CdkTrapFocus, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this.focusTrap.destroy(); // If we stored a previously focused element when using autoCapture, return focus to that
          // element now that the trapped region is being destroyed.

          if (this._previouslyFocusedElement) {
            this._previouslyFocusedElement.focus();

            this._previouslyFocusedElement = null;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.focusTrap.attachAnchors();

          if (this.autoCapture) {
            this._previouslyFocusedElement =
            /** @type {?} */
            this._document.activeElement;
            this.focusTrap.focusInitialElementWhenReady();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (!this.focusTrap.hasAttached()) {
            this.focusTrap.attachAnchors();
          }
        }
      }, {
        key: "enabled",
        get: function get() {
          return this.focusTrap.enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.focusTrap.enabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the directive should automatially move focus into the trapped region upon
         * initialization and return focus to the previous activeElement upon destruction.
         * @return {?}
         */

      }, {
        key: "autoCapture",
        get: function get() {
          return this._autoCapture;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._autoCapture = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkTrapFocus;
    }();

    CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) {
      return new (t || CdkTrapFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
    };

    CdkTrapFocus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkTrapFocus,
      selectors: [["", "cdkTrapFocus", ""]],
      inputs: {
        enabled: ["cdkTrapFocus", "enabled"],
        autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture"]
      },
      exportAs: ["cdkTrapFocus"]
    });
    /** @nocollapse */

    CdkTrapFocus.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: FocusTrapFactory
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }];
    };

    CdkTrapFocus.propDecorators = {
      enabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkTrapFocus']
      }],
      autoCapture: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkTrapFocusAutoCapture']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkTrapFocus, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdkTrapFocus]',
          exportAs: 'cdkTrapFocus'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: FocusTrapFactory
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      }, {
        enabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkTrapFocus']
        }],
        autoCapture: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkTrapFocusAutoCapture']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/configurable-focus-trap.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class that allows for trapping focus within a DOM element.
     *
     * This class uses a strategy pattern that determines how it traps focus.
     * See FocusTrapInertStrategy.
     */


    var ConfigurableFocusTrap = /*#__PURE__*/function (_FocusTrap) {
      _inherits(ConfigurableFocusTrap, _FocusTrap);

      var _super3 = _createSuper(ConfigurableFocusTrap);

      /**
       * @param {?} _element
       * @param {?} _checker
       * @param {?} _ngZone
       * @param {?} _document
       * @param {?} _focusTrapManager
       * @param {?} _inertStrategy
       * @param {?} config
       */
      function ConfigurableFocusTrap(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
        var _this10;

        _classCallCheck(this, ConfigurableFocusTrap);

        _this10 = _super3.call(this, _element, _checker, _ngZone, _document, config.defer);
        _this10._focusTrapManager = _focusTrapManager;
        _this10._inertStrategy = _inertStrategy;

        _this10._focusTrapManager.register(_assertThisInitialized(_this10));

        return _this10;
      }
      /**
       * Whether the FocusTrap is enabled.
       * @return {?}
       */


      _createClass(ConfigurableFocusTrap, [{
        key: "destroy",

        /**
         * Notifies the FocusTrapManager that this FocusTrap will be destroyed.
         * @return {?}
         */
        value: function destroy() {
          this._focusTrapManager.deregister(this);

          _get(_getPrototypeOf(ConfigurableFocusTrap.prototype), "destroy", this).call(this);
        }
        /**
         * \@docs-private Implemented as part of ManagedFocusTrap.
         * @return {?}
         */

      }, {
        key: "_enable",
        value: function _enable() {
          this._inertStrategy.preventFocus(this);

          this.toggleAnchors(true);
        }
        /**
         * \@docs-private Implemented as part of ManagedFocusTrap.
         * @return {?}
         */

      }, {
        key: "_disable",
        value: function _disable() {
          this._inertStrategy.allowFocus(this);

          this.toggleAnchors(false);
        }
      }, {
        key: "enabled",
        get: function get() {
          return this._enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._enabled = value;

          if (this._enabled) {
            this._focusTrapManager.register(this);
          } else {
            this._focusTrapManager.deregister(this);
          }
        }
      }]);

      return ConfigurableFocusTrap;
    }(FocusTrap);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/polyfill.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * IE 11 compatible closest implementation that is able to start from non-Element Nodes.
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */


    function closest(element, selector) {
      if (!(element instanceof Node)) {
        return null;
      }
      /** @type {?} */


      var curr = element;

      while (curr != null && !(curr instanceof Element)) {
        curr = curr.parentNode;
      }

      return curr && (
      /** @type {?} */
      hasNativeClosest ? curr.closest(selector) : polyfillClosest(curr, selector));
    }
    /**
     * Polyfill for browsers without Element.closest.
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */


    function polyfillClosest(element, selector) {
      /** @type {?} */
      var curr = element;

      while (curr != null && !(curr instanceof Element && matches(curr, selector))) {
        curr = curr.parentNode;
      }

      return (
        /** @type {?} */
        curr || null
      );
    }
    /** @type {?} */


    var hasNativeClosest = typeof Element != 'undefined' && !!Element.prototype.closest;
    /**
     * IE 11 compatible matches implementation.
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */

    function matches(element, selector) {
      return element.matches ? element.matches(selector) :
      /** @type {?} */
      element['msMatchesSelector'](selector);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/event-listener-inert-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Lightweight FocusTrapInertStrategy that adds a document focus event
     * listener to redirect focus back inside the FocusTrap.
     */


    var EventListenerFocusTrapInertStrategy = /*#__PURE__*/function () {
      function EventListenerFocusTrapInertStrategy() {
        _classCallCheck(this, EventListenerFocusTrapInertStrategy);

        /**
         * Focus event handler.
         */
        this._listener = null;
      }
      /**
       * Adds a document event listener that keeps focus inside the FocusTrap.
       * @param {?} focusTrap
       * @return {?}
       */


      _createClass(EventListenerFocusTrapInertStrategy, [{
        key: "preventFocus",
        value: function preventFocus(focusTrap) {
          var _this11 = this;

          // Ensure there's only one listener per document
          if (this._listener) {
            focusTrap._document.removeEventListener('focus',
            /** @type {?} */
            this._listener, true);
          }

          this._listener =
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return _this11._trapFocus(focusTrap, e);
          };

          focusTrap._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            focusTrap._document.addEventListener('focus',
            /** @type {?} */
            _this11._listener, true);
          });
        }
        /**
         * Removes the event listener added in preventFocus.
         * @param {?} focusTrap
         * @return {?}
         */

      }, {
        key: "allowFocus",
        value: function allowFocus(focusTrap) {
          if (!this._listener) {
            return;
          }

          focusTrap._document.removeEventListener('focus',
          /** @type {?} */
          this._listener, true);

          this._listener = null;
        }
        /**
         * Refocuses the first element in the FocusTrap if the focus event target was outside
         * the FocusTrap.
         *
         * This is an event listener callback. The event listener is added in runOutsideAngular,
         * so all this code runs outside Angular as well.
         * @private
         * @param {?} focusTrap
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_trapFocus",
        value: function _trapFocus(focusTrap, event) {
          /** @type {?} */
          var target =
          /** @type {?} */
          event.target;
          /** @type {?} */

          var focusTrapRoot = focusTrap._element; // Don't refocus if target was in an overlay, because the overlay might be associated
          // with an element inside the FocusTrap, ex. mat-select.

          if (!focusTrapRoot.contains(target) && closest(target, 'div.cdk-overlay-pane') === null) {
            // Some legacy FocusTrap usages have logic that focuses some element on the page
            // just before FocusTrap is destroyed. For backwards compatibility, wait
            // to be sure FocusTrap is still enabled before refocusing.
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              // Check whether focus wasn't put back into the focus trap while the timeout was pending.
              if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
                focusTrap.focusFirstTabbableElement();
              }
            });
          }
        }
      }]);

      return EventListenerFocusTrapInertStrategy;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/configurable-focus-trap-config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Configuration for creating a ConfigurableFocusTrap.
     */


    var ConfigurableFocusTrapConfig = function ConfigurableFocusTrapConfig() {
      _classCallCheck(this, ConfigurableFocusTrapConfig);

      /**
       * Whether to defer the creation of FocusTrap elements to be
       * done manually by the user. Default is to create them
       * automatically.
       */
      this.defer = false;
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/focus-trap-inert-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The injection token used to specify the inert strategy.
     * @type {?}
     */


    var FOCUS_TRAP_INERT_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('FOCUS_TRAP_INERT_STRATEGY');
    /**
     * A strategy that dictates how FocusTrap should prevent elements
     * outside of the FocusTrap from being focused.
     * @record
     */

    function FocusTrapInertStrategy() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/focus-trap-manager.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A FocusTrap managed by FocusTrapManager.
     * Implemented by ConfigurableFocusTrap to avoid circular dependency.
     * @record
     */


    function ManagedFocusTrap() {}

    if (false) {}
    /**
     * Injectable that ensures only the most recently enabled FocusTrap is active.
     */


    var FocusTrapManager = /*#__PURE__*/function () {
      function FocusTrapManager() {
        _classCallCheck(this, FocusTrapManager);

        // A stack of the FocusTraps on the page. Only the FocusTrap at the
        // top of the stack is active.
        this._focusTrapStack = [];
      }
      /**
       * Disables the FocusTrap at the top of the stack, and then pushes
       * the new FocusTrap onto the stack.
       * @param {?} focusTrap
       * @return {?}
       */


      _createClass(FocusTrapManager, [{
        key: "register",
        value: function register(focusTrap) {
          // Dedupe focusTraps that register multiple times.
          this._focusTrapStack = this._focusTrapStack.filter(
          /**
          * @param {?} ft
          * @return {?}
          */
          function (ft) {
            return ft !== focusTrap;
          });
          /** @type {?} */

          var stack = this._focusTrapStack;

          if (stack.length) {
            stack[stack.length - 1]._disable();
          }

          stack.push(focusTrap);

          focusTrap._enable();
        }
        /**
         * Removes the FocusTrap from the stack, and activates the
         * FocusTrap that is the new top of the stack.
         * @param {?} focusTrap
         * @return {?}
         */

      }, {
        key: "deregister",
        value: function deregister(focusTrap) {
          focusTrap._disable();
          /** @type {?} */


          var stack = this._focusTrapStack;
          /** @type {?} */

          var i = stack.indexOf(focusTrap);

          if (i !== -1) {
            stack.splice(i, 1);

            if (stack.length) {
              stack[stack.length - 1]._enable();
            }
          }
        }
      }]);

      return FocusTrapManager;
    }();

    FocusTrapManager.ɵfac = function FocusTrapManager_Factory(t) {
      return new (t || FocusTrapManager)();
    };
    /** @nocollapse */


    FocusTrapManager.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function FocusTrapManager_Factory() {
        return new FocusTrapManager();
      },
      token: FocusTrapManager,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusTrapManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/configurable-focus-trap-factory.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Factory that allows easy instantiation of configurable focus traps.
     */


    var ConfigurableFocusTrapFactory = /*#__PURE__*/function () {
      /**
       * @param {?} _checker
       * @param {?} _ngZone
       * @param {?} _focusTrapManager
       * @param {?} _document
       * @param {?=} _inertStrategy
       */
      function ConfigurableFocusTrapFactory(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
        _classCallCheck(this, ConfigurableFocusTrapFactory);

        this._checker = _checker;
        this._ngZone = _ngZone;
        this._focusTrapManager = _focusTrapManager;
        this._document = _document; // TODO split up the strategies into different modules, similar to DateAdapter.

        this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
      }
      /**
       * @param {?} element
       * @param {?=} config
       * @return {?}
       */


      _createClass(ConfigurableFocusTrapFactory, [{
        key: "create",
        value: function create(element) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new ConfigurableFocusTrapConfig();

          /** @type {?} */
          var configObject;

          if (typeof config === 'boolean') {
            configObject = new ConfigurableFocusTrapConfig();
            configObject.defer = config;
          } else {
            configObject = config;
          }

          return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
        }
      }]);

      return ConfigurableFocusTrapFactory;
    }();

    ConfigurableFocusTrapFactory.ɵfac = function ConfigurableFocusTrapFactory_Factory(t) {
      return new (t || ConfigurableFocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FocusTrapManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FOCUS_TRAP_INERT_STRATEGY, 8));
    };
    /** @nocollapse */


    ConfigurableFocusTrapFactory.ctorParameters = function () {
      return [{
        type: InteractivityChecker
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: FocusTrapManager
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [FOCUS_TRAP_INERT_STRATEGY]
        }]
      }];
    };
    /** @nocollapse */


    ConfigurableFocusTrapFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ConfigurableFocusTrapFactory_Factory() {
        return new ConfigurableFocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FocusTrapManager), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FOCUS_TRAP_INERT_STRATEGY, 8));
      },
      token: ConfigurableFocusTrapFactory,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfigurableFocusTrapFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: InteractivityChecker
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: FocusTrapManager
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [FOCUS_TRAP_INERT_STRATEGY]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/live-announcer/live-announcer-tokens.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('liveAnnouncerElement', {
      providedIn: 'root',
      factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
      return null;
    }
    /**
     * Object that can be used to configure the default options for the LiveAnnouncer.
     * @record
     */


    function LiveAnnouncerDefaultOptions() {}

    if (false) {}
    /**
     * Injection token that can be used to configure the default options for the LiveAnnouncer.
     * @type {?}
     */


    var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/live-announcer/live-announcer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var LiveAnnouncer = /*#__PURE__*/function () {
      /**
       * @param {?} elementToken
       * @param {?} _ngZone
       * @param {?} _document
       * @param {?=} _defaultOptions
       */
      function LiveAnnouncer(elementToken, _ngZone, _document, _defaultOptions) {
        _classCallCheck(this, LiveAnnouncer);

        this._ngZone = _ngZone;
        this._defaultOptions = _defaultOptions; // We inject the live element and document as `any` because the constructor signature cannot
        // reference browser globals (HTMLElement, Document) on non-browser environments, since having
        // a class decorator causes TypeScript to preserve the constructor signature types.

        this._document = _document;
        this._liveElement = elementToken || this._createLiveElement();
      }
      /**
       * @param {?} message
       * @param {...?} args
       * @return {?}
       */


      _createClass(LiveAnnouncer, [{
        key: "announce",
        value: function announce(message) {
          var _this12 = this;

          /** @type {?} */
          var defaultOptions = this._defaultOptions;
          /** @type {?} */

          var politeness;
          /** @type {?} */

          var duration;

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          if (args.length === 1 && typeof args[0] === 'number') {
            duration = args[0];
          } else {
            politeness = args[0];
            duration = args[1];
          }

          this.clear();
          clearTimeout(this._previousTimeout);

          if (!politeness) {
            politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : 'polite';
          }

          if (duration == null && defaultOptions) {
            duration = defaultOptions.duration;
          } // TODO: ensure changing the politeness works on all environments we support.


          this._liveElement.setAttribute('aria-live', politeness); // This 100ms timeout is necessary for some browser + screen-reader combinations:
          // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
          // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
          //   second time without clearing and then using a non-zero delay.
          // (using JAWS 17 at time of this writing).


          return this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return new Promise(
            /**
            * @param {?} resolve
            * @return {?}
            */
            function (resolve) {
              clearTimeout(_this12._previousTimeout);
              _this12._previousTimeout = setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this12._liveElement.textContent = message;
                resolve();

                if (typeof duration === 'number') {
                  _this12._previousTimeout = setTimeout(
                  /**
                  * @return {?}
                  */
                  function () {
                    return _this12.clear();
                  }, duration);
                }
              }, 100);
            });
          });
        }
        /**
         * Clears the current text from the announcer element. Can be used to prevent
         * screen readers from reading the text out again while the user is going
         * through the page landmarks.
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear() {
          if (this._liveElement) {
            this._liveElement.textContent = '';
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearTimeout(this._previousTimeout);

          if (this._liveElement && this._liveElement.parentNode) {
            this._liveElement.parentNode.removeChild(this._liveElement);

            this._liveElement =
            /** @type {?} */
            null;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_createLiveElement",
        value: function _createLiveElement() {
          /** @type {?} */
          var elementClass = 'cdk-live-announcer-element';
          /** @type {?} */

          var previousElements = this._document.getElementsByClassName(elementClass);
          /** @type {?} */


          var liveEl = this._document.createElement('div'); // Remove any old containers. This can happen when coming in from a server-side-rendered page.


          for (var i = 0; i < previousElements.length; i++) {
            /** @type {?} */
            previousElements[i].parentNode.removeChild(previousElements[i]);
          }

          liveEl.classList.add(elementClass);
          liveEl.classList.add('cdk-visually-hidden');
          liveEl.setAttribute('aria-atomic', 'true');
          liveEl.setAttribute('aria-live', 'polite');

          this._document.body.appendChild(liveEl);

          return liveEl;
        }
      }]);

      return LiveAnnouncer;
    }();

    LiveAnnouncer.ɵfac = function LiveAnnouncer_Factory(t) {
      return new (t || LiveAnnouncer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
    };
    /** @nocollapse */


    LiveAnnouncer.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
        }]
      }];
    };
    /** @nocollapse */


    LiveAnnouncer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function LiveAnnouncer_Factory() {
        return new LiveAnnouncer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
      },
      token: LiveAnnouncer,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LiveAnnouncer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
     * with a wider range of browsers and screen readers.
     */


    var CdkAriaLive = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _liveAnnouncer
       * @param {?} _contentObserver
       * @param {?} _ngZone
       */
      function CdkAriaLive(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
        _classCallCheck(this, CdkAriaLive);

        this._elementRef = _elementRef;
        this._liveAnnouncer = _liveAnnouncer;
        this._contentObserver = _contentObserver;
        this._ngZone = _ngZone;
        this._politeness = 'off';
      }
      /**
       * The aria-live politeness level to use when announcing messages.
       * @return {?}
       */


      _createClass(CdkAriaLive, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          if (this._subscription) {
            this._subscription.unsubscribe();
          }
        }
      }, {
        key: "politeness",
        get: function get() {
          return this._politeness;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          var _this13 = this;

          this._politeness = value === 'polite' || value === 'assertive' ? value : 'off';

          if (this._politeness === 'off') {
            if (this._subscription) {
              this._subscription.unsubscribe();

              this._subscription = null;
            }
          } else if (!this._subscription) {
            this._subscription = this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return _this13._contentObserver.observe(_this13._elementRef).subscribe(
              /**
              * @return {?}
              */
              function () {
                // Note that we use textContent here, rather than innerText, in order to avoid a reflow.

                /** @type {?} */
                var elementText = _this13._elementRef.nativeElement.textContent; // The `MutationObserver` fires also for attribute
                // changes which we don't want to announce.

                if (elementText !== _this13._previousAnnouncedText) {
                  _this13._liveAnnouncer.announce(elementText, _this13._politeness);

                  _this13._previousAnnouncedText = elementText;
                }
              });
            });
          }
        }
      }]);

      return CdkAriaLive;
    }();

    CdkAriaLive.ɵfac = function CdkAriaLive_Factory(t) {
      return new (t || CdkAriaLive)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    CdkAriaLive.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkAriaLive,
      selectors: [["", "cdkAriaLive", ""]],
      inputs: {
        politeness: ["cdkAriaLive", "politeness"]
      },
      exportAs: ["cdkAriaLive"]
    });
    /** @nocollapse */

    CdkAriaLive.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: LiveAnnouncer
      }, {
        type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    CdkAriaLive.propDecorators = {
      politeness: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkAriaLive']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkAriaLive, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdkAriaLive]',
          exportAs: 'cdkAriaLive'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: LiveAnnouncer
        }, {
          type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        politeness: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkAriaLive']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/fake-mousedown.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Screenreaders will often fire fake mousedown events when a focusable element
     * is activated using the keyboard. We can typically distinguish between these faked
     * mousedown events and real mousedown events using the "buttons" property. While
     * real mousedowns will indicate the mouse button that was pressed (e.g. "1" for
     * the left mouse button), faked mousedowns will usually set the property value to 0.
     * @param {?} event
     * @return {?}
     */


    function isFakeMousedownFromScreenReader(event) {
      return event.buttons === 0;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-monitor/focus-monitor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
    // that a value of around 650ms seems appropriate.

    /** @type {?} */


    var TOUCH_BUFFER_MS = 650;
    /**
     * Corresponds to the options that can be passed to the native `focus` event.
     * via https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
     * @record
     */

    function FocusOptions() {}

    if (false) {}
    /** @enum {number} */


    var FocusMonitorDetectionMode = {
      /**
       * Any mousedown, keydown, or touchstart event that happened in the previous
       * tick or the current tick will be used to assign a focus event's origin (to
       * either mouse, keyboard, or touch). This is the default option.
       */
      IMMEDIATE: 0,

      /**
       * A focus event's origin is always attributed to the last corresponding
       * mousedown, keydown, or touchstart event, no matter how long ago it occured.
       */
      EVENTUAL: 1
    };
    /**
     * Injectable service-level options for FocusMonitor.
     * @record
     */

    function FocusMonitorOptions() {}

    if (false) {}
    /**
     * InjectionToken for FocusMonitorOptions.
     * @type {?}
     */


    var FOCUS_MONITOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-focus-monitor-default-options');
    /**
     * Event listener options that enable capturing and also
     * mark the listener as passive if the browser supports it.
     * @type {?}
     */

    var captureEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["normalizePassiveListenerOptions"])({
      passive: true,
      capture: true
    });
    /**
     * Monitors mouse and keyboard events to determine the cause of focus events.
     */

    var FocusMonitor = /*#__PURE__*/function () {
      /**
       * @param {?} _ngZone
       * @param {?} _platform
       * @param {?} document
       * @param {?} options
       */
      function FocusMonitor(_ngZone, _platform,
      /** @breaking-change 11.0.0 make document required */
      document, options) {
        var _this14 = this;

        _classCallCheck(this, FocusMonitor);

        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * The focus origin that the next focus event is a result of.
         */

        this._origin = null;
        /**
         * Whether the window has just been focused.
         */

        this._windowFocused = false;
        /**
         * Map of elements being monitored to their info.
         */

        this._elementInfo = new Map();
        /**
         * The number of elements currently being monitored.
         */

        this._monitoredElementCount = 0;
        /**
         * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
         * as well as the number of monitored elements that they contain. We have to treat focus/blur
         * handlers differently from the rest of the events, because the browser won't emit events
         * to the document when focus moves inside of a shadow root.
         */

        this._rootNodeFocusListenerCount = new Map();
        /**
         * Event listener for `keydown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */

        this._documentKeydownListener =
        /**
        * @return {?}
        */
        function () {
          // On keydown record the origin and clear any touch event that may be in progress.
          _this14._lastTouchTarget = null;

          _this14._setOriginForCurrentEventQueue('keyboard');
        };
        /**
         * Event listener for `mousedown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */


        this._documentMousedownListener =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          // On mousedown record the origin only if there is not touch
          // target, since a mousedown can happen as a result of a touch event.
          if (!_this14._lastTouchTarget) {
            // In some cases screen readers fire fake `mousedown` events instead of `keydown`.
            // Resolve the focus source to `keyboard` if we detect one of them.

            /** @type {?} */
            var source = isFakeMousedownFromScreenReader(event) ? 'keyboard' : 'mouse';

            _this14._setOriginForCurrentEventQueue(source);
          }
        };
        /**
         * Event listener for `touchstart` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */


        this._documentTouchstartListener =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          // When the touchstart event fires the focus event is not yet in the event queue. This means
          // we can't rely on the trick used above (setting timeout of 1ms). Instead we wait 650ms to
          // see if a focus happens.
          if (_this14._touchTimeoutId != null) {
            clearTimeout(_this14._touchTimeoutId);
          }

          _this14._lastTouchTarget = getTarget(event);
          _this14._touchTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          function () {
            return _this14._lastTouchTarget = null;
          }, TOUCH_BUFFER_MS);
        };
        /**
         * Event listener for `focus` events on the window.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */


        this._windowFocusListener =
        /**
        * @return {?}
        */
        function () {
          // Make a note of when the window regains focus, so we can
          // restore the origin info for the focused element.
          _this14._windowFocused = true;
          _this14._windowFocusTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          function () {
            return _this14._windowFocused = false;
          });
        };
        /**
         * Event listener for `focus` and 'blur' events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */


        this._rootNodeFocusAndBlurListener =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          /** @type {?} */
          var target = getTarget(event);
          /** @type {?} */

          var handler = event.type === 'focus' ? _this14._onFocus : _this14._onBlur; // We need to walk up the ancestor chain in order to support `checkChildren`.

          for (var element = target; element; element = element.parentElement) {
            handler.call(_this14,
            /** @type {?} */
            event, element);
          }
        };

        this._document = document;
        this._detectionMode = (options === null || options === void 0 ? void 0 : options.detectionMode) || 0
        /* IMMEDIATE */
        ;
      }
      /**
       * @param {?} element
       * @param {?=} checkChildren
       * @return {?}
       */


      _createClass(FocusMonitor, [{
        key: "monitor",
        value: function monitor(element) {
          var checkChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          // Do nothing if we're not on the browser platform.
          if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
          }
          /** @type {?} */


          var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(element); // If the element is inside the shadow DOM, we need to bind our focus/blur listeners to
          // the shadow root, rather than the `document`, because the browser won't emit focus events
          // to the `document`, if focus is moving within the same shadow root.

          /** @type {?} */

          var rootNode =
          /** @type {?} */
          Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["_getShadowRoot"])(nativeElement) || this._getDocument();
          /** @type {?} */


          var cachedInfo = this._elementInfo.get(nativeElement); // Check if we're already monitoring this element.


          if (cachedInfo) {
            if (checkChildren) {
              // TODO(COMP-318): this can be problematic, because it'll turn all non-checkChildren
              // observers into ones that behave as if `checkChildren` was turned on. We need a more
              // robust solution.
              cachedInfo.checkChildren = true;
            }

            return cachedInfo.subject.asObservable();
          } // Create monitored element info.

          /** @type {?} */


          var info = {
            checkChildren: checkChildren,
            subject: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](),
            rootNode: rootNode
          };

          this._elementInfo.set(nativeElement, info);

          this._registerGlobalListeners(info);

          return info.subject.asObservable();
        }
        /**
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "stopMonitoring",
        value: function stopMonitoring(element) {
          /** @type {?} */
          var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(element);
          /** @type {?} */

          var elementInfo = this._elementInfo.get(nativeElement);

          if (elementInfo) {
            elementInfo.subject.complete();

            this._setClasses(nativeElement);

            this._elementInfo["delete"](nativeElement);

            this._removeGlobalListeners(elementInfo);
          }
        }
        /**
         * @param {?} element
         * @param {?} origin
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focusVia",
        value: function focusVia(element, origin, options) {
          /** @type {?} */
          var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(element);

          this._setOriginForCurrentEventQueue(origin); // `focus` isn't available on the server


          if (typeof nativeElement.focus === 'function') {
            // Cast the element to `any`, because the TS typings don't have the `options` parameter yet.

            /** @type {?} */
            nativeElement.focus(options);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this15 = this;

          this._elementInfo.forEach(
          /**
          * @param {?} _info
          * @param {?} element
          * @return {?}
          */
          function (_info, element) {
            return _this15.stopMonitoring(element);
          });
        }
        /**
         * Access injected document if available or fallback to global document reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getDocument",
        value: function _getDocument() {
          return this._document || document;
        }
        /**
         * Use defaultView of injected document if available or fallback to global window reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          /** @type {?} */
          var doc = this._getDocument();

          return doc.defaultView || window;
        }
        /**
         * @private
         * @param {?} element
         * @param {?} className
         * @param {?} shouldSet
         * @return {?}
         */

      }, {
        key: "_toggleClass",
        value: function _toggleClass(element, className, shouldSet) {
          if (shouldSet) {
            element.classList.add(className);
          } else {
            element.classList.remove(className);
          }
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_getFocusOrigin",
        value: function _getFocusOrigin(event) {
          // If we couldn't detect a cause for the focus event, it's due to one of three reasons:
          // 1) The window has just regained focus, in which case we want to restore the focused state of
          //    the element from before the window blurred.
          // 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
          // 3) The element was programmatically focused, in which case we should mark the origin as
          //    'program'.
          if (this._origin) {
            return this._origin;
          }

          if (this._windowFocused && this._lastFocusOrigin) {
            return this._lastFocusOrigin;
          } else if (this._wasCausedByTouch(event)) {
            return 'touch';
          } else {
            return 'program';
          }
        }
        /**
         * Sets the focus classes on the element based on the given focus origin.
         * @private
         * @param {?} element The element to update the classes on.
         * @param {?=} origin The focus origin.
         * @return {?}
         */

      }, {
        key: "_setClasses",
        value: function _setClasses(element, origin) {
          this._toggleClass(element, 'cdk-focused', !!origin);

          this._toggleClass(element, 'cdk-touch-focused', origin === 'touch');

          this._toggleClass(element, 'cdk-keyboard-focused', origin === 'keyboard');

          this._toggleClass(element, 'cdk-mouse-focused', origin === 'mouse');

          this._toggleClass(element, 'cdk-program-focused', origin === 'program');
        }
        /**
         * Sets the origin and schedules an async function to clear it at the end of the event queue.
         * If the detection mode is 'eventual', the origin is never cleared.
         * @private
         * @param {?} origin The origin to set.
         * @return {?}
         */

      }, {
        key: "_setOriginForCurrentEventQueue",
        value: function _setOriginForCurrentEventQueue(origin) {
          var _this16 = this;

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this16._origin = origin;

            if (_this16._detectionMode === 0
            /* IMMEDIATE */
            ) {
                // Sometimes the focus origin won't be valid in Firefox because Firefox seems to focus *one*
                // tick after the interaction event fired. To ensure the focus origin is always correct,
                // the focus origin will be determined at the beginning of the next tick.
                _this16._originTimeoutId = setTimeout(
                /**
                * @return {?}
                */
                function () {
                  return _this16._origin = null;
                }, 1);
              }
          });
        }
        /**
         * Checks whether the given focus event was caused by a touchstart event.
         * @private
         * @param {?} event The focus event to check.
         * @return {?} Whether the event was caused by a touch.
         */

      }, {
        key: "_wasCausedByTouch",
        value: function _wasCausedByTouch(event) {
          // Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
          // Consider the following dom structure:
          //
          // <div #parent tabindex="0" cdkFocusClasses>
          //   <div #child (click)="#parent.focus()"></div>
          // </div>
          //
          // If the user touches the #child element and the #parent is programmatically focused as a
          // result, this code will still consider it to have been caused by the touch event and will
          // apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
          // relatively small edge-case that can be worked around by using
          // focusVia(parentEl, 'program') to focus the parent element.
          //
          // If we decide that we absolutely must handle this case correctly, we can do so by listening
          // for the first focus event after the touchstart, and then the first blur event after that
          // focus event. When that blur event fires we know that whatever follows is not a result of the
          // touchstart.

          /** @type {?} */
          var focusTarget = getTarget(event);
          return this._lastTouchTarget instanceof Node && focusTarget instanceof Node && (focusTarget === this._lastTouchTarget || focusTarget.contains(this._lastTouchTarget));
        }
        /**
         * Handles focus events on a registered element.
         * @private
         * @param {?} event The focus event.
         * @param {?} element The monitored element.
         * @return {?}
         */

      }, {
        key: "_onFocus",
        value: function _onFocus(event, element) {
          // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
          // focus event affecting the monitored element. If we want to use the origin of the first event
          // instead we should check for the cdk-focused class here and return if the element already has
          // it. (This only matters for elements that have includesChildren = true).
          // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
          // focus event affecting the monitored element. If we want to use the origin of the first event
          // instead we should check for the cdk-focused class here and return if the element already has
          // it. (This only matters for elements that have includesChildren = true).
          // If we are not counting child-element-focus as focused, make sure that the event target is the
          // monitored element itself.

          /** @type {?} */
          var elementInfo = this._elementInfo.get(element);

          if (!elementInfo || !elementInfo.checkChildren && element !== getTarget(event)) {
            return;
          }
          /** @type {?} */


          var origin = this._getFocusOrigin(event);

          this._setClasses(element, origin);

          this._emitOrigin(elementInfo.subject, origin);

          this._lastFocusOrigin = origin;
        }
        /**
         * Handles blur events on a registered element.
         * @param {?} event The blur event.
         * @param {?} element The monitored element.
         * @return {?}
         */

      }, {
        key: "_onBlur",
        value: function _onBlur(event, element) {
          // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
          // order to focus another child of the monitored element.

          /** @type {?} */
          var elementInfo = this._elementInfo.get(element);

          if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
            return;
          }

          this._setClasses(element);

          this._emitOrigin(elementInfo.subject, null);
        }
        /**
         * @private
         * @param {?} subject
         * @param {?} origin
         * @return {?}
         */

      }, {
        key: "_emitOrigin",
        value: function _emitOrigin(subject, origin) {
          this._ngZone.run(
          /**
          * @return {?}
          */
          function () {
            return subject.next(origin);
          });
        }
        /**
         * @private
         * @param {?} elementInfo
         * @return {?}
         */

      }, {
        key: "_registerGlobalListeners",
        value: function _registerGlobalListeners(elementInfo) {
          var _this17 = this;

          if (!this._platform.isBrowser) {
            return;
          }
          /** @type {?} */


          var rootNode = elementInfo.rootNode;
          /** @type {?} */

          var rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;

          if (!rootNodeFocusListeners) {
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              rootNode.addEventListener('focus', _this17._rootNodeFocusAndBlurListener, captureEventListenerOptions);
              rootNode.addEventListener('blur', _this17._rootNodeFocusAndBlurListener, captureEventListenerOptions);
            });
          }

          this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1); // Register global listeners when first element is monitored.


          if (++this._monitoredElementCount === 1) {
            // Note: we listen to events in the capture phase so we
            // can detect them even if the user stops propagation.
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var document = _this17._getDocument();
              /** @type {?} */


              var window = _this17._getWindow();

              document.addEventListener('keydown', _this17._documentKeydownListener, captureEventListenerOptions);
              document.addEventListener('mousedown', _this17._documentMousedownListener, captureEventListenerOptions);
              document.addEventListener('touchstart', _this17._documentTouchstartListener, captureEventListenerOptions);
              window.addEventListener('focus', _this17._windowFocusListener);
            });
          }
        }
        /**
         * @private
         * @param {?} elementInfo
         * @return {?}
         */

      }, {
        key: "_removeGlobalListeners",
        value: function _removeGlobalListeners(elementInfo) {
          /** @type {?} */
          var rootNode = elementInfo.rootNode;

          if (this._rootNodeFocusListenerCount.has(rootNode)) {
            /** @type {?} */
            var rootNodeFocusListeners =
            /** @type {?} */
            this._rootNodeFocusListenerCount.get(rootNode);

            if (rootNodeFocusListeners > 1) {
              this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
            } else {
              rootNode.removeEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
              rootNode.removeEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);

              this._rootNodeFocusListenerCount["delete"](rootNode);
            }
          } // Unregister global listeners when last element is unmonitored.


          if (! --this._monitoredElementCount) {
            /** @type {?} */
            var _document2 = this._getDocument();
            /** @type {?} */


            var _window = this._getWindow();

            _document2.removeEventListener('keydown', this._documentKeydownListener, captureEventListenerOptions);

            _document2.removeEventListener('mousedown', this._documentMousedownListener, captureEventListenerOptions);

            _document2.removeEventListener('touchstart', this._documentTouchstartListener, captureEventListenerOptions);

            _window.removeEventListener('focus', this._windowFocusListener); // Clear timeouts for all potentially pending timeouts to prevent the leaks.


            clearTimeout(this._windowFocusTimeoutId);
            clearTimeout(this._touchTimeoutId);
            clearTimeout(this._originTimeoutId);
          }
        }
      }]);

      return FocusMonitor;
    }();

    FocusMonitor.ɵfac = function FocusMonitor_Factory(t) {
      return new (t || FocusMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
    };
    /** @nocollapse */


    FocusMonitor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
        }]
      }];
    };
    /** @nocollapse */


    FocusMonitor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function FocusMonitor_Factory() {
        return new FocusMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
      },
      token: FocusMonitor,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusMonitor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Gets the target of an event, accounting for Shadow DOM.
     * @param {?} event
     * @return {?}
     */


    function getTarget(event) {
      // If an event is bound outside the Shadow DOM, the `event.target` will
      // point to the shadow root so we have to use `composedPath` instead.
      return (
        /** @type {?} */
        event.composedPath ? event.composedPath()[0] : event.target
      );
    }
    /**
     * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
     * programmatically) and adds corresponding classes to the element.
     *
     * There are two variants of this directive:
     * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
     *    focused.
     * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
     */


    var CdkMonitorFocus = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _focusMonitor
       */
      function CdkMonitorFocus(_elementRef, _focusMonitor) {
        var _this18 = this;

        _classCallCheck(this, CdkMonitorFocus);

        this._elementRef = _elementRef;
        this._focusMonitor = _focusMonitor;
        this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._monitorSubscription = this._focusMonitor.monitor(this._elementRef, this._elementRef.nativeElement.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(
        /**
        * @param {?} origin
        * @return {?}
        */
        function (origin) {
          return _this18.cdkFocusChange.emit(origin);
        });
      }
      /**
       * @return {?}
       */


      _createClass(CdkMonitorFocus, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this._elementRef);

          this._monitorSubscription.unsubscribe();
        }
      }]);

      return CdkMonitorFocus;
    }();

    CdkMonitorFocus.ɵfac = function CdkMonitorFocus_Factory(t) {
      return new (t || CdkMonitorFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FocusMonitor));
    };

    CdkMonitorFocus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkMonitorFocus,
      selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
      outputs: {
        cdkFocusChange: "cdkFocusChange"
      }
    });
    /** @nocollapse */

    CdkMonitorFocus.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: FocusMonitor
      }];
    };

    CdkMonitorFocus.propDecorators = {
      cdkFocusChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkMonitorFocus, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: FocusMonitor
        }];
      }, {
        cdkFocusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/high-contrast-mode/high-contrast-mode-detector.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */


    var HighContrastMode = {
      NONE: 0,
      BLACK_ON_WHITE: 1,
      WHITE_ON_BLACK: 2
    };
    /**
     * CSS class applied to the document body when in black-on-white high-contrast mode.
     * @type {?}
     */

    var BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
    /**
     * CSS class applied to the document body when in white-on-black high-contrast mode.
     * @type {?}
     */

    var WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
    /**
     * CSS class applied to the document body when in high-contrast mode.
     * @type {?}
     */

    var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
    /**
     * Service to determine whether the browser is currently in a high-contrast-mode environment.
     *
     * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
     * changes the appearance of all applications, including web applications, to dramatically increase
     * contrast.
     *
     * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
     * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
     * browser extension.
     */

    var HighContrastModeDetector = /*#__PURE__*/function () {
      /**
       * @param {?} _platform
       * @param {?} document
       */
      function HighContrastModeDetector(_platform, document) {
        _classCallCheck(this, HighContrastModeDetector);

        this._platform = _platform;
        this._document = document;
      }
      /**
       * Gets the current high-contrast-mode for the page.
       * @return {?}
       */


      _createClass(HighContrastModeDetector, [{
        key: "getHighContrastMode",
        value: function getHighContrastMode() {
          if (!this._platform.isBrowser) {
            return 0
            /* NONE */
            ;
          } // Create a test element with an arbitrary background-color that is neither black nor
          // white; high-contrast mode will coerce the color to either black or white. Also ensure that
          // appending the test element to the DOM does not affect layout by absolutely positioning it

          /** @type {?} */


          var testElement = this._document.createElement('div');

          testElement.style.backgroundColor = 'rgb(1,2,3)';
          testElement.style.position = 'absolute';

          this._document.body.appendChild(testElement); // Get the computed style for the background color, collapsing spaces to normalize between
          // browsers. Once we get this color, we no longer need the test element. Access the `window`
          // via the document so we can fake it in tests. Note that we have extra null checks, because
          // this logic will likely run during app bootstrap and throwing can break the entire app.

          /** @type {?} */


          var documentWindow = this._document.defaultView || window;
          /** @type {?} */

          var computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
          /** @type {?} */

          var computedColor = (computedStyle && computedStyle.backgroundColor || '').replace(/ /g, '');

          this._document.body.removeChild(testElement);

          switch (computedColor) {
            case 'rgb(0,0,0)':
              return 2
              /* WHITE_ON_BLACK */
              ;

            case 'rgb(255,255,255)':
              return 1
              /* BLACK_ON_WHITE */
              ;
          }

          return 0
          /* NONE */
          ;
        }
        /**
         * Applies CSS classes indicating high-contrast mode to document body (browser-only).
         * @return {?}
         */

      }, {
        key: "_applyBodyHighContrastModeCssClasses",
        value: function _applyBodyHighContrastModeCssClasses() {
          if (this._platform.isBrowser && this._document.body) {
            /** @type {?} */
            var bodyClasses = this._document.body.classList; // IE11 doesn't support `classList` operations with multiple arguments

            bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
            bodyClasses.remove(BLACK_ON_WHITE_CSS_CLASS);
            bodyClasses.remove(WHITE_ON_BLACK_CSS_CLASS);
            /** @type {?} */

            var mode = this.getHighContrastMode();

            if (mode === 1
            /* BLACK_ON_WHITE */
            ) {
                bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                bodyClasses.add(BLACK_ON_WHITE_CSS_CLASS);
              } else if (mode === 2
            /* WHITE_ON_BLACK */
            ) {
                bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                bodyClasses.add(WHITE_ON_BLACK_CSS_CLASS);
              }
          }
        }
      }]);

      return HighContrastModeDetector;
    }();

    HighContrastModeDetector.ɵfac = function HighContrastModeDetector_Factory(t) {
      return new (t || HighContrastModeDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
    };
    /** @nocollapse */


    HighContrastModeDetector.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    HighContrastModeDetector.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function HighContrastModeDetector_Factory() {
        return new HighContrastModeDetector(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      },
      token: HighContrastModeDetector,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HighContrastModeDetector, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/a11y-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var A11yModule =
    /**
     * @param {?} highContrastModeDetector
     */
    function A11yModule(highContrastModeDetector) {
      _classCallCheck(this, A11yModule);

      highContrastModeDetector._applyBodyHighContrastModeCssClasses();
    };

    A11yModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: A11yModule
    });
    A11yModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function A11yModule_Factory(t) {
        return new (t || A11yModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HighContrastModeDetector));
      },
      imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]]]
    });
    /** @nocollapse */

    A11yModule.ctorParameters = function () {
      return [{
        type: HighContrastModeDetector
      }];
    };

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](A11yModule, {
        declarations: function declarations() {
          return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus];
        },
        imports: function imports() {
          return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]];
        },
        exports: function exports() {
          return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](A11yModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]],
          declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
          exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
        }]
      }], function () {
        return [{
          type: HighContrastModeDetector
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=a11y.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js ***!
    \*****************************************************************/

  /*! exports provided: BidiModule, DIR_DOCUMENT, Dir, Directionality, ɵangular_material_src_cdk_bidi_bidi_a */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015BidiJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BidiModule", function () {
      return BidiModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function () {
      return DIR_DOCUMENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Dir", function () {
      return Dir;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Directionality", function () {
      return Directionality;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_bidi_bidi_a", function () {
      return DIR_DOCUMENT_FACTORY;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/bidi/dir-document-token.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token used to inject the document into Directionality.
     * This is used so that the value can be faked in tests.
     *
     * We can't use the real document in tests because changing the real `dir` causes geometry-based
     * tests in Safari to fail.
     *
     * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
     * themselves use things like `querySelector` in test code.
     *
     * This token is defined in a separate file from Directionality as a workaround for
     * https://github.com/angular/angular/issues/22559
     *
     * \@docs-private
     * @type {?}
     */


    var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('cdk-dir-doc', {
      providedIn: 'root',
      factory: DIR_DOCUMENT_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function DIR_DOCUMENT_FACTORY() {
      return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/bidi/directionality.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The directionality (LTR / RTL) context for the application (or a subtree of it).
     * Exposes the current direction and a stream of direction changes.
     */


    var Directionality = /*#__PURE__*/function () {
      /**
       * @param {?=} _document
       */
      function Directionality(_document) {
        _classCallCheck(this, Directionality);

        /**
         * The current 'ltr' or 'rtl' value.
         */
        this.value = 'ltr';
        /**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        if (_document) {
          // TODO: handle 'auto' value -
          // We still need to account for dir="auto".
          // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
          // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now

          /** @type {?} */
          var bodyDir = _document.body ? _document.body.dir : null;
          /** @type {?} */

          var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
          /** @type {?} */

          var value = bodyDir || htmlDir;
          this.value = value === 'ltr' || value === 'rtl' ? value : 'ltr';
        }
      }
      /**
       * @return {?}
       */


      _createClass(Directionality, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.change.complete();
        }
      }]);

      return Directionality;
    }();

    Directionality.ɵfac = function Directionality_Factory(t) {
      return new (t || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DIR_DOCUMENT, 8));
    };
    /** @nocollapse */


    Directionality.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [DIR_DOCUMENT]
        }]
      }];
    };
    /** @nocollapse */


    Directionality.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function Directionality_Factory() {
        return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DIR_DOCUMENT, 8));
      },
      token: Directionality,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Directionality, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [DIR_DOCUMENT]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/bidi/dir.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive to listen for changes of direction of part of the DOM.
     *
     * Provides itself as Directionality such that descendant directives only need to ever inject
     * Directionality to get the closest direction.
     */


    var Dir = /*#__PURE__*/function () {
      function Dir() {
        _classCallCheck(this, Dir);

        /**
         * Normalized direction that accounts for invalid/unsupported values.
         */
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */

        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * \@docs-private
       * @return {?}
       */


      _createClass(Dir, [{
        key: "ngAfterContentInit",

        /**
         * Initialize once default value has been set.
         * @return {?}
         */
        value: function ngAfterContentInit() {
          this._isInitialized = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.change.complete();
        }
      }, {
        key: "dir",
        get: function get() {
          return this._dir;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var old = this._dir;
          /** @type {?} */

          var normalizedValue = value ? value.toLowerCase() : value;
          this._rawDir = value;
          this._dir = normalizedValue === 'ltr' || normalizedValue === 'rtl' ? normalizedValue : 'ltr';

          if (old !== this._dir && this._isInitialized) {
            this.change.emit(this._dir);
          }
        }
        /**
         * Current layout direction of the element.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this.dir;
        }
      }]);

      return Dir;
    }();

    Dir.ɵfac = function Dir_Factory(t) {
      return new (t || Dir)();
    };

    Dir.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: Dir,
      selectors: [["", "dir", ""]],
      hostVars: 1,
      hostBindings: function Dir_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dir", ctx._rawDir);
        }
      },
      inputs: {
        dir: "dir"
      },
      outputs: {
        change: "dirChange"
      },
      exportAs: ["dir"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: Directionality,
        useExisting: Dir
      }])]
    });
    Dir.propDecorators = {
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['dirChange']
      }],
      dir: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dir, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[dir]',
          providers: [{
            provide: Directionality,
            useExisting: Dir
          }],
          host: {
            '[attr.dir]': '_rawDir'
          },
          exportAs: 'dir'
        }]
      }], function () {
        return [];
      }, {
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['dirChange']
        }],
        dir: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/bidi/bidi-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BidiModule = function BidiModule() {
      _classCallCheck(this, BidiModule);
    };

    BidiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BidiModule
    });
    BidiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BidiModule_Factory(t) {
        return new (t || BidiModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BidiModule, {
        declarations: [Dir],
        exports: [Dir]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [Dir],
          declarations: [Dir]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/bidi/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=bidi.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js ***!
    \************************************************************************/

  /*! exports provided: ArrayDataSource, DataSource, SelectionModel, UniqueSelectionDispatcher, getMultipleValuesInSingleSelectionError, isDataSource */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015CollectionsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function () {
      return ArrayDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataSource", function () {
      return DataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionModel", function () {
      return SelectionModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function () {
      return UniqueSelectionDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function () {
      return getMultipleValuesInSingleSelectionError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isDataSource", function () {
      return isDataSource;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/data-source.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @abstract
     * @template T
     */


    var DataSource = function DataSource() {
      _classCallCheck(this, DataSource);
    };

    if (false) {}
    /**
     * Checks whether an object is a data source.
     * @param {?} value
     * @return {?}
     */


    function isDataSource(value) {
      // Check if the value is a DataSource by observing if it has a connect function. Cannot
      // be checked as an `instanceof DataSource` since people could create their own sources
      // that match the interface, but don't extend DataSource.
      return value && typeof value.connect === 'function';
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/array-data-source.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * DataSource wrapper for a native array.
     * @template T
     */


    var ArrayDataSource = /*#__PURE__*/function (_DataSource) {
      _inherits(ArrayDataSource, _DataSource);

      var _super4 = _createSuper(ArrayDataSource);

      /**
       * @param {?} _data
       */
      function ArrayDataSource(_data) {
        var _this19;

        _classCallCheck(this, ArrayDataSource);

        _this19 = _super4.call(this);
        _this19._data = _data;
        return _this19;
      }
      /**
       * @return {?}
       */


      _createClass(ArrayDataSource, [{
        key: "connect",
        value: function connect() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["isObservable"])(this._data) ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this._data);
        }
        /**
         * @return {?}
         */

      }, {
        key: "disconnect",
        value: function disconnect() {}
      }]);

      return ArrayDataSource;
    }(DataSource);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/collection-viewer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Interface for any component that provides a view of some data collection and wants to provide
     * information regarding the view and any changes made.
     * @record
     */


    function CollectionViewer() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/selection-model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class to be used to power selecting one or more options from a list.
     * @template T
     */


    var SelectionModel = /*#__PURE__*/function () {
      /**
       * @param {?=} _multiple
       * @param {?=} initiallySelectedValues
       * @param {?=} _emitChanges
       */
      function SelectionModel() {
        var _this20 = this;

        var _multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        var initiallySelectedValues = arguments.length > 1 ? arguments[1] : undefined;

        var _emitChanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        _classCallCheck(this, SelectionModel);

        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /**
         * Currently-selected values.
         */

        this._selection = new Set();
        /**
         * Keeps track of the deselected options that haven't been emitted by the change event.
         */

        this._deselectedToEmit = [];
        /**
         * Keeps track of the selected options that haven't been emitted by the change event.
         */

        this._selectedToEmit = [];
        /**
         * Event emitted when the value has changed.
         */

        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

        if (initiallySelectedValues && initiallySelectedValues.length) {
          if (_multiple) {
            initiallySelectedValues.forEach(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return _this20._markSelected(value);
            });
          } else {
            this._markSelected(initiallySelectedValues[0]);
          } // Clear the array in order to avoid firing the change event for preselected values.


          this._selectedToEmit.length = 0;
        }
      }
      /**
       * Selected values.
       * @return {?}
       */


      _createClass(SelectionModel, [{
        key: "select",

        /**
         * Selects a value or an array of values.
         * @param {...?} values
         * @return {?}
         */
        value: function select() {
          var _this21 = this;

          for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            values[_key2] = arguments[_key2];
          }

          this._verifyValueAssignment(values);

          values.forEach(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return _this21._markSelected(value);
          });

          this._emitChangeEvent();
        }
        /**
         * Deselects a value or an array of values.
         * @param {...?} values
         * @return {?}
         */

      }, {
        key: "deselect",
        value: function deselect() {
          var _this22 = this;

          for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            values[_key3] = arguments[_key3];
          }

          this._verifyValueAssignment(values);

          values.forEach(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return _this22._unmarkSelected(value);
          });

          this._emitChangeEvent();
        }
        /**
         * Toggles a value between selected and deselected.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle(value) {
          this.isSelected(value) ? this.deselect(value) : this.select(value);
        }
        /**
         * Clears all of the selected values.
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear() {
          this._unmarkAll();

          this._emitChangeEvent();
        }
        /**
         * Determines whether a value is selected.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "isSelected",
        value: function isSelected(value) {
          return this._selection.has(value);
        }
        /**
         * Determines whether the model does not have a value.
         * @return {?}
         */

      }, {
        key: "isEmpty",
        value: function isEmpty() {
          return this._selection.size === 0;
        }
        /**
         * Determines whether the model has a value.
         * @return {?}
         */

      }, {
        key: "hasValue",
        value: function hasValue() {
          return !this.isEmpty();
        }
        /**
         * Sorts the selected values based on a predicate function.
         * @param {?=} predicate
         * @return {?}
         */

      }, {
        key: "sort",
        value: function sort(predicate) {
          if (this._multiple && this.selected) {
            /** @type {?} */
            this._selected.sort(predicate);
          }
        }
        /**
         * Gets whether multiple values can be selected.
         * @return {?}
         */

      }, {
        key: "isMultipleSelection",
        value: function isMultipleSelection() {
          return this._multiple;
        }
        /**
         * Emits a change event and clears the records of selected and deselected values.
         * @private
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          // Clear the selected values so they can be re-cached.
          this._selected = null;

          if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            this.changed.next({
              source: this,
              added: this._selectedToEmit,
              removed: this._deselectedToEmit
            });
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
          }
        }
        /**
         * Selects a value.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_markSelected",
        value: function _markSelected(value) {
          if (!this.isSelected(value)) {
            if (!this._multiple) {
              this._unmarkAll();
            }

            this._selection.add(value);

            if (this._emitChanges) {
              this._selectedToEmit.push(value);
            }
          }
        }
        /**
         * Deselects a value.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_unmarkSelected",
        value: function _unmarkSelected(value) {
          if (this.isSelected(value)) {
            this._selection["delete"](value);

            if (this._emitChanges) {
              this._deselectedToEmit.push(value);
            }
          }
        }
        /**
         * Clears out the selected values.
         * @private
         * @return {?}
         */

      }, {
        key: "_unmarkAll",
        value: function _unmarkAll() {
          var _this23 = this;

          if (!this.isEmpty()) {
            this._selection.forEach(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return _this23._unmarkSelected(value);
            });
          }
        }
        /**
         * Verifies the value assignment and throws an error if the specified value array is
         * including multiple values while the selection model is not supporting multiple values.
         * @private
         * @param {?} values
         * @return {?}
         */

      }, {
        key: "_verifyValueAssignment",
        value: function _verifyValueAssignment(values) {
          if (values.length > 1 && !this._multiple) {
            throw getMultipleValuesInSingleSelectionError();
          }
        }
      }, {
        key: "selected",
        get: function get() {
          if (!this._selected) {
            this._selected = Array.from(this._selection.values());
          }

          return this._selected;
        }
      }]);

      return SelectionModel;
    }();

    if (false) {}
    /**
     * Event emitted when the value of a MatSelectionModel has changed.
     * \@docs-private
     * @record
     * @template T
     */


    function SelectionChange() {}

    if (false) {}
    /**
     * Returns an error that reports that multiple values are passed into a selection model
     * with a single value.
     * \@docs-private
     * @return {?}
     */


    function getMultipleValuesInSingleSelectionError() {
      return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/unique-selection-dispatcher.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class to coordinate unique selection based on name.
     * Intended to be consumed as an Angular service.
     * This service is needed because native radio change events are only fired on the item currently
     * being selected, and we still need to uncheck the previous selection.
     *
     * This service does not *store* any IDs and names because they may change at any time, so it is
     * less error-prone if they are simply passed through when the events occur.
     */


    var UniqueSelectionDispatcher = /*#__PURE__*/function () {
      function UniqueSelectionDispatcher() {
        _classCallCheck(this, UniqueSelectionDispatcher);

        this._listeners = [];
      }
      /**
       * Notify other items that selection for the given name has been set.
       * @param {?} id ID of the item.
       * @param {?} name Name of the item.
       * @return {?}
       */


      _createClass(UniqueSelectionDispatcher, [{
        key: "notify",
        value: function notify(id, name) {
          var _iterator = _createForOfIteratorHelper(this._listeners),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var listener = _step.value;
              listener(id, name);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        /**
         * Listen for future changes to item selection.
         * @param {?} listener
         * @return {?} Function used to deregister listener
         */

      }, {
        key: "listen",
        value: function listen(listener) {
          var _this24 = this;

          this._listeners.push(listener);

          return (
            /**
            * @return {?}
            */
            function () {
              _this24._listeners = _this24._listeners.filter(
              /**
              * @param {?} registered
              * @return {?}
              */
              function (registered) {
                return listener !== registered;
              });
            }
          );
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._listeners = [];
        }
      }]);

      return UniqueSelectionDispatcher;
    }();

    UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) {
      return new (t || UniqueSelectionDispatcher)();
    };
    /** @nocollapse */


    UniqueSelectionDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function UniqueSelectionDispatcher_Factory() {
        return new UniqueSelectionDispatcher();
      },
      token: UniqueSelectionDispatcher,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UniqueSelectionDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/tree-adapter.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Interface for a class that can flatten hierarchical structured data and re-expand the flattened
     * data back into its original structure. Should be used in conjunction with the cdk-tree.
     * @record
     * @template T
     */


    function TreeDataNodeFlattener() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=collections.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js ***!
    \*********************************************************************/

  /*! exports provided: A, ALT, APOSTROPHE, AT_SIGN, B, BACKSLASH, BACKSPACE, C, CAPS_LOCK, CLOSE_SQUARE_BRACKET, COMMA, CONTEXT_MENU, CONTROL, D, DASH, DELETE, DOWN_ARROW, E, EIGHT, END, ENTER, EQUALS, ESCAPE, F, F1, F10, F11, F12, F2, F3, F4, F5, F6, F7, F8, F9, FF_EQUALS, FF_MINUS, FF_MUTE, FF_SEMICOLON, FF_VOLUME_DOWN, FF_VOLUME_UP, FIRST_MEDIA, FIVE, FOUR, G, H, HOME, I, INSERT, J, K, L, LAST_MEDIA, LEFT_ARROW, M, MAC_ENTER, MAC_META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, META, MUTE, N, NINE, NUMPAD_DIVIDE, NUMPAD_EIGHT, NUMPAD_FIVE, NUMPAD_FOUR, NUMPAD_MINUS, NUMPAD_MULTIPLY, NUMPAD_NINE, NUMPAD_ONE, NUMPAD_PERIOD, NUMPAD_PLUS, NUMPAD_SEVEN, NUMPAD_SIX, NUMPAD_THREE, NUMPAD_TWO, NUMPAD_ZERO, NUM_CENTER, NUM_LOCK, O, ONE, OPEN_SQUARE_BRACKET, P, PAGE_DOWN, PAGE_UP, PAUSE, PLUS_SIGN, PRINT_SCREEN, Q, QUESTION_MARK, R, RIGHT_ARROW, S, SCROLL_LOCK, SEMICOLON, SEVEN, SHIFT, SINGLE_QUOTE, SIX, SLASH, SPACE, T, TAB, THREE, TILDE, TWO, U, UP_ARROW, V, VOLUME_DOWN, VOLUME_UP, W, X, Y, Z, ZERO, hasModifierKey */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015KeycodesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "A", function () {
      return A;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ALT", function () {
      return ALT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APOSTROPHE", function () {
      return APOSTROPHE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AT_SIGN", function () {
      return AT_SIGN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "B", function () {
      return B;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BACKSLASH", function () {
      return BACKSLASH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BACKSPACE", function () {
      return BACKSPACE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "C", function () {
      return C;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CAPS_LOCK", function () {
      return CAPS_LOCK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CLOSE_SQUARE_BRACKET", function () {
      return CLOSE_SQUARE_BRACKET;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COMMA", function () {
      return COMMA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function () {
      return CONTEXT_MENU;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CONTROL", function () {
      return CONTROL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "D", function () {
      return D;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DASH", function () {
      return DASH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DELETE", function () {
      return DELETE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DOWN_ARROW", function () {
      return DOWN_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "E", function () {
      return E;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EIGHT", function () {
      return EIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "END", function () {
      return END;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ENTER", function () {
      return ENTER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EQUALS", function () {
      return EQUALS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ESCAPE", function () {
      return ESCAPE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F", function () {
      return F;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F1", function () {
      return F1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F10", function () {
      return F10;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F11", function () {
      return F11;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F12", function () {
      return F12;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F2", function () {
      return F2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F3", function () {
      return F3;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F4", function () {
      return F4;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F5", function () {
      return F5;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F6", function () {
      return F6;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F7", function () {
      return F7;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F8", function () {
      return F8;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F9", function () {
      return F9;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_EQUALS", function () {
      return FF_EQUALS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_MINUS", function () {
      return FF_MINUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_MUTE", function () {
      return FF_MUTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_SEMICOLON", function () {
      return FF_SEMICOLON;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_VOLUME_DOWN", function () {
      return FF_VOLUME_DOWN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_VOLUME_UP", function () {
      return FF_VOLUME_UP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FIRST_MEDIA", function () {
      return FIRST_MEDIA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FIVE", function () {
      return FIVE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FOUR", function () {
      return FOUR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "G", function () {
      return G;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "H", function () {
      return H;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HOME", function () {
      return HOME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "I", function () {
      return I;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "INSERT", function () {
      return INSERT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "J", function () {
      return J;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "K", function () {
      return K;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "L", function () {
      return L;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LAST_MEDIA", function () {
      return LAST_MEDIA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LEFT_ARROW", function () {
      return LEFT_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "M", function () {
      return M;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_ENTER", function () {
      return MAC_ENTER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_META", function () {
      return MAC_META;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_LEFT", function () {
      return MAC_WK_CMD_LEFT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_RIGHT", function () {
      return MAC_WK_CMD_RIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "META", function () {
      return META;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MUTE", function () {
      return MUTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "N", function () {
      return N;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NINE", function () {
      return NINE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_DIVIDE", function () {
      return NUMPAD_DIVIDE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_EIGHT", function () {
      return NUMPAD_EIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_FIVE", function () {
      return NUMPAD_FIVE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_FOUR", function () {
      return NUMPAD_FOUR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_MINUS", function () {
      return NUMPAD_MINUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_MULTIPLY", function () {
      return NUMPAD_MULTIPLY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_NINE", function () {
      return NUMPAD_NINE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_ONE", function () {
      return NUMPAD_ONE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_PERIOD", function () {
      return NUMPAD_PERIOD;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_PLUS", function () {
      return NUMPAD_PLUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_SEVEN", function () {
      return NUMPAD_SEVEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_SIX", function () {
      return NUMPAD_SIX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_THREE", function () {
      return NUMPAD_THREE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_TWO", function () {
      return NUMPAD_TWO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_ZERO", function () {
      return NUMPAD_ZERO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUM_CENTER", function () {
      return NUM_CENTER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUM_LOCK", function () {
      return NUM_LOCK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "O", function () {
      return O;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ONE", function () {
      return ONE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OPEN_SQUARE_BRACKET", function () {
      return OPEN_SQUARE_BRACKET;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P", function () {
      return P;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAGE_DOWN", function () {
      return PAGE_DOWN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAGE_UP", function () {
      return PAGE_UP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAUSE", function () {
      return PAUSE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PLUS_SIGN", function () {
      return PLUS_SIGN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PRINT_SCREEN", function () {
      return PRINT_SCREEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Q", function () {
      return Q;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QUESTION_MARK", function () {
      return QUESTION_MARK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "R", function () {
      return R;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RIGHT_ARROW", function () {
      return RIGHT_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return S;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SCROLL_LOCK", function () {
      return SCROLL_LOCK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEMICOLON", function () {
      return SEMICOLON;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEVEN", function () {
      return SEVEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SHIFT", function () {
      return SHIFT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SINGLE_QUOTE", function () {
      return SINGLE_QUOTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SIX", function () {
      return SIX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SLASH", function () {
      return SLASH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPACE", function () {
      return SPACE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "T", function () {
      return T;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TAB", function () {
      return TAB;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "THREE", function () {
      return THREE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TILDE", function () {
      return TILDE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TWO", function () {
      return TWO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "U", function () {
      return U;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UP_ARROW", function () {
      return UP_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "V", function () {
      return V;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VOLUME_DOWN", function () {
      return VOLUME_DOWN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VOLUME_UP", function () {
      return VOLUME_UP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "W", function () {
      return W;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "X", function () {
      return X;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Y", function () {
      return Y;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Z", function () {
      return Z;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZERO", function () {
      return ZERO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hasModifierKey", function () {
      return hasModifierKey;
    });
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/keycodes/keycodes.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** @type {?} */


    var MAC_ENTER = 3;
    /** @type {?} */

    var BACKSPACE = 8;
    /** @type {?} */

    var TAB = 9;
    /** @type {?} */

    var NUM_CENTER = 12;
    /** @type {?} */

    var ENTER = 13;
    /** @type {?} */

    var SHIFT = 16;
    /** @type {?} */

    var CONTROL = 17;
    /** @type {?} */

    var ALT = 18;
    /** @type {?} */

    var PAUSE = 19;
    /** @type {?} */

    var CAPS_LOCK = 20;
    /** @type {?} */

    var ESCAPE = 27;
    /** @type {?} */

    var SPACE = 32;
    /** @type {?} */

    var PAGE_UP = 33;
    /** @type {?} */

    var PAGE_DOWN = 34;
    /** @type {?} */

    var END = 35;
    /** @type {?} */

    var HOME = 36;
    /** @type {?} */

    var LEFT_ARROW = 37;
    /** @type {?} */

    var UP_ARROW = 38;
    /** @type {?} */

    var RIGHT_ARROW = 39;
    /** @type {?} */

    var DOWN_ARROW = 40;
    /** @type {?} */

    var PLUS_SIGN = 43;
    /** @type {?} */

    var PRINT_SCREEN = 44;
    /** @type {?} */

    var INSERT = 45;
    /** @type {?} */

    var DELETE = 46;
    /** @type {?} */

    var ZERO = 48;
    /** @type {?} */

    var ONE = 49;
    /** @type {?} */

    var TWO = 50;
    /** @type {?} */

    var THREE = 51;
    /** @type {?} */

    var FOUR = 52;
    /** @type {?} */

    var FIVE = 53;
    /** @type {?} */

    var SIX = 54;
    /** @type {?} */

    var SEVEN = 55;
    /** @type {?} */

    var EIGHT = 56;
    /** @type {?} */

    var NINE = 57;
    /** @type {?} */

    var FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186

    /** @type {?} */

    var FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187

    /** @type {?} */

    var QUESTION_MARK = 63;
    /** @type {?} */

    var AT_SIGN = 64;
    /** @type {?} */

    var A = 65;
    /** @type {?} */

    var B = 66;
    /** @type {?} */

    var C = 67;
    /** @type {?} */

    var D = 68;
    /** @type {?} */

    var E = 69;
    /** @type {?} */

    var F = 70;
    /** @type {?} */

    var G = 71;
    /** @type {?} */

    var H = 72;
    /** @type {?} */

    var I = 73;
    /** @type {?} */

    var J = 74;
    /** @type {?} */

    var K = 75;
    /** @type {?} */

    var L = 76;
    /** @type {?} */

    var M = 77;
    /** @type {?} */

    var N = 78;
    /** @type {?} */

    var O = 79;
    /** @type {?} */

    var P = 80;
    /** @type {?} */

    var Q = 81;
    /** @type {?} */

    var R = 82;
    /** @type {?} */

    var S = 83;
    /** @type {?} */

    var T = 84;
    /** @type {?} */

    var U = 85;
    /** @type {?} */

    var V = 86;
    /** @type {?} */

    var W = 87;
    /** @type {?} */

    var X = 88;
    /** @type {?} */

    var Y = 89;
    /** @type {?} */

    var Z = 90;
    /** @type {?} */

    var META = 91; // WIN_KEY_LEFT

    /** @type {?} */

    var MAC_WK_CMD_LEFT = 91;
    /** @type {?} */

    var MAC_WK_CMD_RIGHT = 93;
    /** @type {?} */

    var CONTEXT_MENU = 93;
    /** @type {?} */

    var NUMPAD_ZERO = 96;
    /** @type {?} */

    var NUMPAD_ONE = 97;
    /** @type {?} */

    var NUMPAD_TWO = 98;
    /** @type {?} */

    var NUMPAD_THREE = 99;
    /** @type {?} */

    var NUMPAD_FOUR = 100;
    /** @type {?} */

    var NUMPAD_FIVE = 101;
    /** @type {?} */

    var NUMPAD_SIX = 102;
    /** @type {?} */

    var NUMPAD_SEVEN = 103;
    /** @type {?} */

    var NUMPAD_EIGHT = 104;
    /** @type {?} */

    var NUMPAD_NINE = 105;
    /** @type {?} */

    var NUMPAD_MULTIPLY = 106;
    /** @type {?} */

    var NUMPAD_PLUS = 107;
    /** @type {?} */

    var NUMPAD_MINUS = 109;
    /** @type {?} */

    var NUMPAD_PERIOD = 110;
    /** @type {?} */

    var NUMPAD_DIVIDE = 111;
    /** @type {?} */

    var F1 = 112;
    /** @type {?} */

    var F2 = 113;
    /** @type {?} */

    var F3 = 114;
    /** @type {?} */

    var F4 = 115;
    /** @type {?} */

    var F5 = 116;
    /** @type {?} */

    var F6 = 117;
    /** @type {?} */

    var F7 = 118;
    /** @type {?} */

    var F8 = 119;
    /** @type {?} */

    var F9 = 120;
    /** @type {?} */

    var F10 = 121;
    /** @type {?} */

    var F11 = 122;
    /** @type {?} */

    var F12 = 123;
    /** @type {?} */

    var NUM_LOCK = 144;
    /** @type {?} */

    var SCROLL_LOCK = 145;
    /** @type {?} */

    var FIRST_MEDIA = 166;
    /** @type {?} */

    var FF_MINUS = 173;
    /** @type {?} */

    var MUTE = 173; // Firefox (Gecko) fires 181 for MUTE

    /** @type {?} */

    var VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN

    /** @type {?} */

    var VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP

    /** @type {?} */

    var FF_MUTE = 181;
    /** @type {?} */

    var FF_VOLUME_DOWN = 182;
    /** @type {?} */

    var LAST_MEDIA = 183;
    /** @type {?} */

    var FF_VOLUME_UP = 183;
    /** @type {?} */

    var SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON

    /** @type {?} */

    var EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS

    /** @type {?} */

    var COMMA = 188;
    /** @type {?} */

    var DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS

    /** @type {?} */

    var SLASH = 191;
    /** @type {?} */

    var APOSTROPHE = 192;
    /** @type {?} */

    var TILDE = 192;
    /** @type {?} */

    var OPEN_SQUARE_BRACKET = 219;
    /** @type {?} */

    var BACKSLASH = 220;
    /** @type {?} */

    var CLOSE_SQUARE_BRACKET = 221;
    /** @type {?} */

    var SINGLE_QUOTE = 222;
    /** @type {?} */

    var MAC_META = 224;
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/keycodes/modifiers.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Checks whether a modifier key is pressed.
     * @param {?} event Event to be checked.
     * @param {...?} modifiers
     * @return {?}
     */

    function hasModifierKey(event) {
      for (var _len4 = arguments.length, modifiers = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        modifiers[_key4 - 1] = arguments[_key4];
      }

      if (modifiers.length) {
        return modifiers.some(
        /**
        * @param {?} modifier
        * @return {?}
        */
        function (modifier) {
          return event[modifier];
        });
      }

      return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/keycodes/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=keycodes.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js ***!
    \**********************************************************************/

  /*! exports provided: CdkObserveContent, ContentObserver, MutationObserverFactory, ObserversModule */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015ObserversJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkObserveContent", function () {
      return CdkObserveContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentObserver", function () {
      return ContentObserver;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MutationObserverFactory", function () {
      return MutationObserverFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObserversModule", function () {
      return ObserversModule;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/observers/observe-content.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
     * \@docs-private
     */


    var MutationObserverFactory = /*#__PURE__*/function () {
      function MutationObserverFactory() {
        _classCallCheck(this, MutationObserverFactory);
      }

      _createClass(MutationObserverFactory, [{
        key: "create",

        /**
         * @param {?} callback
         * @return {?}
         */
        value: function create(callback) {
          return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
        }
      }]);

      return MutationObserverFactory;
    }();

    MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) {
      return new (t || MutationObserverFactory)();
    };
    /** @nocollapse */


    MutationObserverFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function MutationObserverFactory_Factory() {
        return new MutationObserverFactory();
      },
      token: MutationObserverFactory,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MutationObserverFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /**
     * An injectable service that allows watching elements for changes to their content.
     */


    var ContentObserver = /*#__PURE__*/function () {
      /**
       * @param {?} _mutationObserverFactory
       */
      function ContentObserver(_mutationObserverFactory) {
        _classCallCheck(this, ContentObserver);

        this._mutationObserverFactory = _mutationObserverFactory;
        /**
         * Keeps track of the existing MutationObservers so they can be reused.
         */

        this._observedElements = new Map();
      }
      /**
       * @return {?}
       */


      _createClass(ContentObserver, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this25 = this;

          this._observedElements.forEach(
          /**
          * @param {?} _
          * @param {?} element
          * @return {?}
          */
          function (_, element) {
            return _this25._cleanupObserver(element);
          });
        }
        /**
         * @param {?} elementOrRef
         * @return {?}
         */

      }, {
        key: "observe",
        value: function observe(elementOrRef) {
          var _this26 = this;

          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(elementOrRef);
          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            /** @type {?} */
            var stream = _this26._observeElement(element);
            /** @type {?} */


            var subscription = stream.subscribe(observer);
            return (
              /**
              * @return {?}
              */
              function () {
                subscription.unsubscribe();

                _this26._unobserveElement(element);
              }
            );
          });
        }
        /**
         * Observes the given element by using the existing MutationObserver if available, or creating a
         * new one if not.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_observeElement",
        value: function _observeElement(element) {
          if (!this._observedElements.has(element)) {
            /** @type {?} */
            var stream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            /** @type {?} */

            var observer = this._mutationObserverFactory.create(
            /**
            * @param {?} mutations
            * @return {?}
            */
            function (mutations) {
              return stream.next(mutations);
            });

            if (observer) {
              observer.observe(element, {
                characterData: true,
                childList: true,
                subtree: true
              });
            }

            this._observedElements.set(element, {
              observer: observer,
              stream: stream,
              count: 1
            });
          } else {
            /** @type {?} */this._observedElements.get(element).count++;
          }

          return (
            /** @type {?} */
            this._observedElements.get(element).stream
          );
        }
        /**
         * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
         * observing this element.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_unobserveElement",
        value: function _unobserveElement(element) {
          if (this._observedElements.has(element)) {
            /** @type {?} */this._observedElements.get(element).count--;

            if (!
            /** @type {?} */
            this._observedElements.get(element).count) {
              this._cleanupObserver(element);
            }
          }
        }
        /**
         * Clean up the underlying MutationObserver for the specified element.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_cleanupObserver",
        value: function _cleanupObserver(element) {
          if (this._observedElements.has(element)) {
            var _this$_observedElemen =
            /** @type {?} */
            this._observedElements.get(element),
                observer = _this$_observedElemen.observer,
                stream = _this$_observedElemen.stream;

            if (observer) {
              observer.disconnect();
            }

            stream.complete();

            this._observedElements["delete"](element);
          }
        }
      }]);

      return ContentObserver;
    }();

    ContentObserver.ɵfac = function ContentObserver_Factory(t) {
      return new (t || ContentObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MutationObserverFactory));
    };
    /** @nocollapse */


    ContentObserver.ctorParameters = function () {
      return [{
        type: MutationObserverFactory
      }];
    };
    /** @nocollapse */


    ContentObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ContentObserver_Factory() {
        return new ContentObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MutationObserverFactory));
      },
      token: ContentObserver,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContentObserver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: MutationObserverFactory
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Directive that triggers a callback whenever the content of
     * its associated element has changed.
     */


    var CdkObserveContent = /*#__PURE__*/function () {
      /**
       * @param {?} _contentObserver
       * @param {?} _elementRef
       * @param {?} _ngZone
       */
      function CdkObserveContent(_contentObserver, _elementRef, _ngZone) {
        _classCallCheck(this, CdkObserveContent);

        this._contentObserver = _contentObserver;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /**
         * Event emitted for each change in the element's content.
         */

        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._disabled = false;
        this._currentSubscription = null;
      }
      /**
       * Whether observing content is disabled. This option can be used
       * to disconnect the underlying MutationObserver until it is needed.
       * @return {?}
       */


      _createClass(CdkObserveContent, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          if (!this._currentSubscription && !this.disabled) {
            this._subscribe();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._unsubscribe();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribe",
        value: function _subscribe() {
          var _this27 = this;

          this._unsubscribe();
          /** @type {?} */


          var stream = this._contentObserver.observe(this._elementRef); // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
          // Consider brining it back inside the zone next time we're making breaking changes.
          // Bringing it back inside can cause things like infinite change detection loops and changed
          // after checked errors if people's code isn't handling it properly.


          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this27._currentSubscription = (_this27.debounce ? stream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(_this27.debounce)) : stream).subscribe(_this27.event);
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_unsubscribe",
        value: function _unsubscribe() {
          if (this._currentSubscription) {
            this._currentSubscription.unsubscribe();
          }
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
          this._disabled ? this._unsubscribe() : this._subscribe();
        }
        /**
         * Debounce interval for emitting the changes.
         * @return {?}
         */

      }, {
        key: "debounce",
        get: function get() {
          return this._debounce;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._debounce = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);

          this._subscribe();
        }
      }]);

      return CdkObserveContent;
    }();

    CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) {
      return new (t || CdkObserveContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    CdkObserveContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkObserveContent,
      selectors: [["", "cdkObserveContent", ""]],
      inputs: {
        disabled: ["cdkObserveContentDisabled", "disabled"],
        debounce: "debounce"
      },
      outputs: {
        event: "cdkObserveContent"
      },
      exportAs: ["cdkObserveContent"]
    });
    /** @nocollapse */

    CdkObserveContent.ctorParameters = function () {
      return [{
        type: ContentObserver
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    CdkObserveContent.propDecorators = {
      event: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
        args: ['cdkObserveContent']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkObserveContentDisabled']
      }],
      debounce: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkObserveContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdkObserveContent]',
          exportAs: 'cdkObserveContent'
        }]
      }], function () {
        return [{
          type: ContentObserver
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['cdkObserveContent']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkObserveContentDisabled']
        }],
        debounce: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}

    var ObserversModule = function ObserversModule() {
      _classCallCheck(this, ObserversModule);
    };

    ObserversModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ObserversModule
    });
    ObserversModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ObserversModule_Factory(t) {
        return new (t || ObserversModule)();
      },
      providers: [MutationObserverFactory]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ObserversModule, {
        declarations: [CdkObserveContent],
        exports: [CdkObserveContent]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ObserversModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: [CdkObserveContent],
          declarations: [CdkObserveContent],
          providers: [MutationObserverFactory]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/observers/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=observers.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js ***!
    \********************************************************************/

  /*! exports provided: CdkScrollable, ScrollDispatcher, ViewportRuler, BlockScrollStrategy, CdkConnectedOverlay, CdkOverlayOrigin, CloseScrollStrategy, ConnectedOverlayPositionChange, ConnectedPositionStrategy, ConnectionPositionPair, FlexibleConnectedPositionStrategy, FullscreenOverlayContainer, GlobalPositionStrategy, NoopScrollStrategy, OVERLAY_PROVIDERS, Overlay, OverlayConfig, OverlayContainer, OverlayKeyboardDispatcher, OverlayModule, OverlayPositionBuilder, OverlayRef, RepositionScrollStrategy, ScrollStrategyOptions, ScrollingVisibility, validateHorizontalPosition, validateVerticalPosition, ɵangular_material_src_cdk_overlay_overlay_a, ɵangular_material_src_cdk_overlay_overlay_b, ɵangular_material_src_cdk_overlay_overlay_c, ɵangular_material_src_cdk_overlay_overlay_d, ɵangular_material_src_cdk_overlay_overlay_e, ɵangular_material_src_cdk_overlay_overlay_f, ɵangular_material_src_cdk_overlay_overlay_g */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015OverlayJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlockScrollStrategy", function () {
      return BlockScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkConnectedOverlay", function () {
      return CdkConnectedOverlay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkOverlayOrigin", function () {
      return CdkOverlayOrigin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CloseScrollStrategy", function () {
      return CloseScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectedOverlayPositionChange", function () {
      return ConnectedOverlayPositionChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectedPositionStrategy", function () {
      return ConnectedPositionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectionPositionPair", function () {
      return ConnectionPositionPair;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexibleConnectedPositionStrategy", function () {
      return FlexibleConnectedPositionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullscreenOverlayContainer", function () {
      return FullscreenOverlayContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalPositionStrategy", function () {
      return GlobalPositionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoopScrollStrategy", function () {
      return NoopScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OVERLAY_PROVIDERS", function () {
      return OVERLAY_PROVIDERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Overlay", function () {
      return Overlay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayConfig", function () {
      return OverlayConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayContainer", function () {
      return OverlayContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher", function () {
      return OverlayKeyboardDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayModule", function () {
      return OverlayModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder", function () {
      return OverlayPositionBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayRef", function () {
      return OverlayRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepositionScrollStrategy", function () {
      return RepositionScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions", function () {
      return ScrollStrategyOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollingVisibility", function () {
      return ScrollingVisibility;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateHorizontalPosition", function () {
      return validateHorizontalPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateVerticalPosition", function () {
      return validateVerticalPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_a", function () {
      return OVERLAY_CONTAINER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_b", function () {
      return OVERLAY_CONTAINER_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_c", function () {
      return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_d", function () {
      return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_e", function () {
      return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_f", function () {
      return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_g", function () {
      return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER;
    });
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkScrollable"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"];
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/scroll/block-scroll-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Strategy that will prevent the user from scrolling while the overlay is visible.
     */


    var BlockScrollStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} _viewportRuler
       * @param {?} document
       */
      function BlockScrollStrategy(_viewportRuler, document) {
        _classCallCheck(this, BlockScrollStrategy);

        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = {
          top: '',
          left: ''
        };
        this._isEnabled = false;
        this._document = document;
      }
      /**
       * Attaches this scroll strategy to an overlay.
       * @return {?}
       */


      _createClass(BlockScrollStrategy, [{
        key: "attach",
        value: function attach() {}
        /**
         * Blocks page-level scroll while the attached overlay is open.
         * @return {?}
         */

      }, {
        key: "enable",
        value: function enable() {
          if (this._canBeEnabled()) {
            /** @type {?} */
            var root =
            /** @type {?} */
            this._document.documentElement;
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(); // Cache the previous inline styles in case the user had set them.

            this._previousHTMLStyles.left = root.style.left || '';
            this._previousHTMLStyles.top = root.style.top || ''; // Note: we're using the `html` node, instead of the `body`, because the `body` may
            // have the user agent margin, whereas the `html` is guaranteed not to have one.

            root.style.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(-this._previousScrollPosition.left);
            root.style.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(-this._previousScrollPosition.top);
            root.classList.add('cdk-global-scrollblock');
            this._isEnabled = true;
          }
        }
        /**
         * Unblocks page-level scroll while the attached overlay is open.
         * @return {?}
         */

      }, {
        key: "disable",
        value: function disable() {
          if (this._isEnabled) {
            /** @type {?} */
            var html =
            /** @type {?} */
            this._document.documentElement;
            /** @type {?} */

            var body =
            /** @type {?} */
            this._document.body;
            /** @type {?} */

            var htmlStyle =
            /** @type {?} */
            html.style;
            /** @type {?} */

            var bodyStyle =
            /** @type {?} */
            body.style;
            /** @type {?} */

            var previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
            /** @type {?} */

            var previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
            this._isEnabled = false;
            htmlStyle.left = this._previousHTMLStyles.left;
            htmlStyle.top = this._previousHTMLStyles.top;
            html.classList.remove('cdk-global-scrollblock'); // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
            // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior

            htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
            htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
            bodyStyle.scrollBehavior = previousBodyScrollBehavior;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_canBeEnabled",
        value: function _canBeEnabled() {
          // Since the scroll strategies can't be singletons, we have to use a global CSS class
          // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
          // scrolling multiple times.

          /** @type {?} */
          var html =
          /** @type {?} */
          this._document.documentElement;

          if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
            return false;
          }
          /** @type {?} */


          var body = this._document.body;
          /** @type {?} */

          var viewport = this._viewportRuler.getViewportSize();

          return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
        }
      }]);

      return BlockScrollStrategy;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/scroll/scroll-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Describes a strategy that will be used by an overlay to handle scroll events while it is open.
     * @record
     */


    function ScrollStrategy() {}

    if (false) {}
    /**
     * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
     * @return {?}
     */


    function getMatScrollStrategyAlreadyAttachedError() {
      return Error("Scroll strategy has already been attached.");
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/scroll/close-scroll-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Config options for the CloseScrollStrategy.
     * @record
     */


    function CloseScrollStrategyConfig() {}

    if (false) {}
    /**
     * Strategy that will close the overlay as soon as the user starts scrolling.
     */


    var CloseScrollStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} _scrollDispatcher
       * @param {?} _ngZone
       * @param {?} _viewportRuler
       * @param {?=} _config
       */
      function CloseScrollStrategy(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        var _this28 = this;

        _classCallCheck(this, CloseScrollStrategy);

        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
        this._scrollSubscription = null;
        /**
         * Detaches the overlay ref and disables the scroll strategy.
         */

        this._detach =
        /**
        * @return {?}
        */
        function () {
          _this28.disable();

          if (_this28._overlayRef.hasAttached()) {
            _this28._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return _this28._overlayRef.detach();
            });
          }
        };
      }
      /**
       * Attaches this scroll strategy to an overlay.
       * @param {?} overlayRef
       * @return {?}
       */


      _createClass(CloseScrollStrategy, [{
        key: "attach",
        value: function attach(overlayRef) {
          if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
          }

          this._overlayRef = overlayRef;
        }
        /**
         * Enables the closing of the attached overlay on scroll.
         * @return {?}
         */

      }, {
        key: "enable",
        value: function enable() {
          var _this29 = this;

          if (this._scrollSubscription) {
            return;
          }
          /** @type {?} */


          var stream = this._scrollDispatcher.scrolled(0);

          if (this._config && this._config.threshold && this._config.threshold > 1) {
            this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
            this._scrollSubscription = stream.subscribe(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var scrollPosition = _this29._viewportRuler.getViewportScrollPosition().top;

              if (Math.abs(scrollPosition - _this29._initialScrollPosition) >
              /** @type {?} */

              /** @type {?} */
              _this29._config.threshold) {
                _this29._detach();
              } else {
                _this29._overlayRef.updatePosition();
              }
            });
          } else {
            this._scrollSubscription = stream.subscribe(this._detach);
          }
        }
        /**
         * Disables the closing the attached overlay on scroll.
         * @return {?}
         */

      }, {
        key: "disable",
        value: function disable() {
          if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();

            this._scrollSubscription = null;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this.disable();
          this._overlayRef =
          /** @type {?} */
          null;
        }
      }]);

      return CloseScrollStrategy;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/scroll/noop-scroll-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Scroll strategy that doesn't do anything.
     */


    var NoopScrollStrategy = /*#__PURE__*/function () {
      function NoopScrollStrategy() {
        _classCallCheck(this, NoopScrollStrategy);
      }

      _createClass(NoopScrollStrategy, [{
        key: "enable",

        /**
         * Does nothing, as this scroll strategy is a no-op.
         * @return {?}
         */
        value: function enable() {}
        /**
         * Does nothing, as this scroll strategy is a no-op.
         * @return {?}
         */

      }, {
        key: "disable",
        value: function disable() {}
        /**
         * Does nothing, as this scroll strategy is a no-op.
         * @return {?}
         */

      }, {
        key: "attach",
        value: function attach() {}
      }]);

      return NoopScrollStrategy;
    }();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/position/scroll-clip.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // TODO(jelbourn): move this to live with the rest of the scrolling code
    // TODO(jelbourn): someday replace this with IntersectionObservers

    /**
     * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
     * \@docs-private
     * @param {?} element Dimensions of the element (from getBoundingClientRect)
     * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
     * @return {?} Whether the element is scrolled out of view
     */


    function isElementScrolledOutsideView(element, scrollContainers) {
      return scrollContainers.some(
      /**
      * @param {?} containerBounds
      * @return {?}
      */
      function (containerBounds) {
        /** @type {?} */
        var outsideAbove = element.bottom < containerBounds.top;
        /** @type {?} */

        var outsideBelow = element.top > containerBounds.bottom;
        /** @type {?} */

        var outsideLeft = element.right < containerBounds.left;
        /** @type {?} */

        var outsideRight = element.left > containerBounds.right;
        return outsideAbove || outsideBelow || outsideLeft || outsideRight;
      });
    }
    /**
     * Gets whether an element is clipped by any of its scrolling containers.
     * \@docs-private
     * @param {?} element Dimensions of the element (from getBoundingClientRect)
     * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
     * @return {?} Whether the element is clipped
     */


    function isElementClippedByScrolling(element, scrollContainers) {
      return scrollContainers.some(
      /**
      * @param {?} scrollContainerRect
      * @return {?}
      */
      function (scrollContainerRect) {
        /** @type {?} */
        var clippedAbove = element.top < scrollContainerRect.top;
        /** @type {?} */

        var clippedBelow = element.bottom > scrollContainerRect.bottom;
        /** @type {?} */

        var clippedLeft = element.left < scrollContainerRect.left;
        /** @type {?} */

        var clippedRight = element.right > scrollContainerRect.right;
        return clippedAbove || clippedBelow || clippedLeft || clippedRight;
      });
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/scroll/reposition-scroll-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Config options for the RepositionScrollStrategy.
     * @record
     */


    function RepositionScrollStrategyConfig() {}

    if (false) {}
    /**
     * Strategy that will update the element position as the user is scrolling.
     */


    var RepositionScrollStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} _scrollDispatcher
       * @param {?} _viewportRuler
       * @param {?} _ngZone
       * @param {?=} _config
       */
      function RepositionScrollStrategy(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        _classCallCheck(this, RepositionScrollStrategy);

        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
        this._scrollSubscription = null;
      }
      /**
       * Attaches this scroll strategy to an overlay.
       * @param {?} overlayRef
       * @return {?}
       */


      _createClass(RepositionScrollStrategy, [{
        key: "attach",
        value: function attach(overlayRef) {
          if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
          }

          this._overlayRef = overlayRef;
        }
        /**
         * Enables repositioning of the attached overlay on scroll.
         * @return {?}
         */

      }, {
        key: "enable",
        value: function enable() {
          var _this30 = this;

          if (!this._scrollSubscription) {
            /** @type {?} */
            var throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this30._overlayRef.updatePosition(); // TODO(crisbeto): make `close` on by default once all components can handle it.


              if (_this30._config && _this30._config.autoClose) {
                /** @type {?} */
                var overlayRect = _this30._overlayRef.overlayElement.getBoundingClientRect();

                var _this30$_viewportRule = _this30._viewportRuler.getViewportSize(),
                    width = _this30$_viewportRule.width,
                    height = _this30$_viewportRule.height; // TODO(crisbeto): include all ancestor scroll containers here once
                // we have a way of exposing the trigger element to the scroll strategy.

                /** @type {?} */


                var parentRects = [{
                  width: width,
                  height: height,
                  bottom: height,
                  right: width,
                  top: 0,
                  left: 0
                }];

                if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                  _this30.disable();

                  _this30._ngZone.run(
                  /**
                  * @return {?}
                  */
                  function () {
                    return _this30._overlayRef.detach();
                  });
                }
              }
            });
          }
        }
        /**
         * Disables repositioning of the attached overlay on scroll.
         * @return {?}
         */

      }, {
        key: "disable",
        value: function disable() {
          if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();

            this._scrollSubscription = null;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this.disable();
          this._overlayRef =
          /** @type {?} */
          null;
        }
      }]);

      return RepositionScrollStrategy;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/scroll/scroll-strategy-options.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Options for how an overlay will handle scrolling.
     *
     * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
     * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
     */


    var ScrollStrategyOptions =
    /**
     * @param {?} _scrollDispatcher
     * @param {?} _viewportRuler
     * @param {?} _ngZone
     * @param {?} document
     */
    function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler, _ngZone, document) {
      var _this31 = this;

      _classCallCheck(this, ScrollStrategyOptions);

      this._scrollDispatcher = _scrollDispatcher;
      this._viewportRuler = _viewportRuler;
      this._ngZone = _ngZone;
      /**
       * Do nothing on scroll.
       */

      this.noop =
      /**
      * @return {?}
      */
      function () {
        return new NoopScrollStrategy();
      };
      /**
       * Close the overlay as soon as the user scrolls.
       * @param config Configuration to be used inside the scroll strategy.
       */


      this.close =
      /**
      * @param {?=} config
      * @return {?}
      */
      function (config) {
        return new CloseScrollStrategy(_this31._scrollDispatcher, _this31._ngZone, _this31._viewportRuler, config);
      };
      /**
       * Block scrolling.
       */


      this.block =
      /**
      * @return {?}
      */
      function () {
        return new BlockScrollStrategy(_this31._viewportRuler, _this31._document);
      };
      /**
       * Update the overlay's position on scroll.
       * @param config Configuration to be used inside the scroll strategy.
       * Allows debouncing the reposition calls.
       */


      this.reposition =
      /**
      * @param {?=} config
      * @return {?}
      */
      function (config) {
        return new RepositionScrollStrategy(_this31._scrollDispatcher, _this31._viewportRuler, _this31._ngZone, config);
      };

      this._document = document;
    };

    ScrollStrategyOptions.ɵfac = function ScrollStrategyOptions_Factory(t) {
      return new (t || ScrollStrategyOptions)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
    };
    /** @nocollapse */


    ScrollStrategyOptions.ctorParameters = function () {
      return [{
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    ScrollStrategyOptions.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ScrollStrategyOptions_Factory() {
        return new ScrollStrategyOptions(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      },
      token: ScrollStrategyOptions,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollStrategyOptions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/scroll/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/overlay-config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Initial configuration used when creating an overlay.
     */


    var OverlayConfig =
    /**
     * @param {?=} config
     */
    function OverlayConfig(config) {
      _classCallCheck(this, OverlayConfig);

      /**
       * Strategy to be used when handling scroll events while the overlay is open.
       */
      this.scrollStrategy = new NoopScrollStrategy();
      /**
       * Custom class to add to the overlay pane.
       */

      this.panelClass = '';
      /**
       * Whether the overlay has a backdrop.
       */

      this.hasBackdrop = false;
      /**
       * Custom class to add to the backdrop
       */

      this.backdropClass = 'cdk-overlay-dark-backdrop';
      /**
       * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
       * Note that this usually doesn't include clicking on links (unless the user is using
       * the `HashLocationStrategy`).
       */

      this.disposeOnNavigation = false;

      if (config) {
        // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
        // loses the array generic type in the `for of`. But we *also* have to use `Array` because
        // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`

        /** @type {?} */
        var configKeys =
        /** @type {?} */
        Object.keys(config);

        for (var _i = 0, _configKeys = configKeys; _i < _configKeys.length; _i++) {
          var key = _configKeys[_i];

          if (config[key] !== undefined) {
            // TypeScript, as of version 3.5, sees the left-hand-side of this expression
            // as "I don't know *which* key this is, so the only valid value is the intersection
            // of all the posible values." In this case, that happens to be `undefined`. TypeScript
            // is not smart enough to see that the right-hand-side is actually an access of the same
            // exact type with the same exact key, meaning that the value type must be identical.
            // So we use `any` to work around this.
            this[key] =
            /** @type {?} */
            config[key];
          }
        }
      }
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/position/connected-position.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A connection point on the origin element.
     * @record
     */


    function OriginConnectionPosition() {}

    if (false) {}
    /**
     * A connection point on the overlay element.
     * @record
     */


    function OverlayConnectionPosition() {}

    if (false) {}
    /**
     * The points of the origin element and the overlay element to connect.
     */


    var ConnectionPositionPair =
    /**
     * @param {?} origin
     * @param {?} overlay
     * @param {?=} offsetX
     * @param {?=} offsetY
     * @param {?=} panelClass
     */
    function ConnectionPositionPair(origin, overlay, offsetX, offsetY, panelClass) {
      _classCallCheck(this, ConnectionPositionPair);

      this.offsetX = offsetX;
      this.offsetY = offsetY;
      this.panelClass = panelClass;
      this.originX = origin.originX;
      this.originY = origin.originY;
      this.overlayX = overlay.overlayX;
      this.overlayY = overlay.overlayY;
    };

    if (false) {}
    /**
     * Set of properties regarding the position of the origin and overlay relative to the viewport
     * with respect to the containing Scrollable elements.
     *
     * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
     * bounds of any one of the strategy's Scrollable's bounding client rectangle.
     *
     * The overlay and origin are outside view if there is no overlap between their bounding client
     * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
     *
     *       -----------                    -----------
     *       | outside |                    | clipped |
     *       |  view   |              --------------------------
     *       |         |              |     |         |        |
     *       ----------               |     -----------        |
     *  --------------------------    |                        |
     *  |                        |    |      Scrollable        |
     *  |                        |    |                        |
     *  |                        |     --------------------------
     *  |      Scrollable        |
     *  |                        |
     *  --------------------------
     *
     * \@docs-private
     */


    var ScrollingVisibility = function ScrollingVisibility() {
      _classCallCheck(this, ScrollingVisibility);
    };

    if (false) {}
    /**
     * The change event emitted by the strategy when a fallback position is used.
     */


    var ConnectedOverlayPositionChange =
    /**
     * @param {?} connectionPair
     * @param {?} scrollableViewProperties
     */
    function ConnectedOverlayPositionChange(connectionPair, scrollableViewProperties) {
      _classCallCheck(this, ConnectedOverlayPositionChange);

      this.connectionPair = connectionPair;
      this.scrollableViewProperties = scrollableViewProperties;
    };
    /** @nocollapse */


    ConnectedOverlayPositionChange.ctorParameters = function () {
      return [{
        type: ConnectionPositionPair
      }, {
        type: ScrollingVisibility,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    if (false) {}
    /**
     * Validates whether a vertical position property matches the expected values.
     * \@docs-private
     * @param {?} property Name of the property being validated.
     * @param {?} value Value of the property being validated.
     * @return {?}
     */


    function validateVerticalPosition(property, value) {
      if (value !== 'top' && value !== 'bottom' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"top\", \"bottom\" or \"center\".");
      }
    }
    /**
     * Validates whether a horizontal position property matches the expected values.
     * \@docs-private
     * @param {?} property Name of the property being validated.
     * @param {?} value Value of the property being validated.
     * @return {?}
     */


    function validateHorizontalPosition(property, value) {
      if (value !== 'start' && value !== 'end' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"start\", \"end\" or \"center\".");
      }
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/keyboard/overlay-keyboard-dispatcher.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
     * if any. It maintains a list of attached overlays to determine best suited overlay based
     * on event target and order of overlay opens.
     */


    var OverlayKeyboardDispatcher = /*#__PURE__*/function () {
      /**
       * @param {?} document
       */
      function OverlayKeyboardDispatcher(document) {
        var _this32 = this;

        _classCallCheck(this, OverlayKeyboardDispatcher);

        /**
         * Currently attached overlays in the order they were attached.
         */
        this._attachedOverlays = [];
        /**
         * Keyboard event listener that will be attached to the body.
         */

        this._keydownListener =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          /** @type {?} */
          var overlays = _this32._attachedOverlays;

          for (var i = overlays.length - 1; i > -1; i--) {
            // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
            // We want to target the most recent overlay, rather than trying to match where the event came
            // from, because some components might open an overlay, but keep focus on a trigger element
            // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
            // because we don't want overlays that don't handle keyboard events to block the ones below
            // them that do.
            if (overlays[i]._keydownEvents.observers.length > 0) {
              overlays[i]._keydownEvents.next(event);

              break;
            }
          }
        };

        this._document = document;
      }
      /**
       * @return {?}
       */


      _createClass(OverlayKeyboardDispatcher, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._detach();
        }
        /**
         * Add a new overlay to the list of attached overlay refs.
         * @param {?} overlayRef
         * @return {?}
         */

      }, {
        key: "add",
        value: function add(overlayRef) {
          // Ensure that we don't get the same overlay multiple times.
          this.remove(overlayRef); // Lazily start dispatcher once first overlay is added

          if (!this._isAttached) {
            this._document.body.addEventListener('keydown', this._keydownListener);

            this._isAttached = true;
          }

          this._attachedOverlays.push(overlayRef);
        }
        /**
         * Remove an overlay from the list of attached overlay refs.
         * @param {?} overlayRef
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove(overlayRef) {
          /** @type {?} */
          var index = this._attachedOverlays.indexOf(overlayRef);

          if (index > -1) {
            this._attachedOverlays.splice(index, 1);
          } // Remove the global listener once there are no more overlays.


          if (this._attachedOverlays.length === 0) {
            this._detach();
          }
        }
        /**
         * Detaches the global keyboard event listener.
         * @private
         * @return {?}
         */

      }, {
        key: "_detach",
        value: function _detach() {
          if (this._isAttached) {
            this._document.body.removeEventListener('keydown', this._keydownListener);

            this._isAttached = false;
          }
        }
      }]);

      return OverlayKeyboardDispatcher;
    }();

    OverlayKeyboardDispatcher.ɵfac = function OverlayKeyboardDispatcher_Factory(t) {
      return new (t || OverlayKeyboardDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
    };
    /** @nocollapse */


    OverlayKeyboardDispatcher.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    OverlayKeyboardDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function OverlayKeyboardDispatcher_Factory() {
        return new OverlayKeyboardDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      },
      token: OverlayKeyboardDispatcher,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayKeyboardDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} dispatcher
     * @param {?} _document
     * @return {?}
     */


    function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
      return dispatcher || new OverlayKeyboardDispatcher(_document);
    }
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @type {?}
     */


    var OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
      // If there is already an OverlayKeyboardDispatcher available, use that.
      // Otherwise, provide a new one.
      provide: OverlayKeyboardDispatcher,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), OverlayKeyboardDispatcher],
      /** @type {?} */
      // Coerce to `InjectionToken` so that the `deps` match the "shape"
      // of the type expected by Angular
      _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]],
      useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/overlay-container.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Whether we're in a testing environment.
     * TODO(crisbeto): remove this once we have an overlay testing module.
     * @type {?}
     */

    var isTestEnvironment = typeof window !== 'undefined' && !!window && !!(
    /** @type {?} */
    window.__karma__ ||
    /** @type {?} */
    window.jasmine);
    /**
     * Container inside which all overlays will render.
     */

    var OverlayContainer = /*#__PURE__*/function () {
      /**
       * @param {?} document
       * @param {?=} _platform
       */
      function OverlayContainer(document, _platform) {
        _classCallCheck(this, OverlayContainer);

        this._platform = _platform;
        this._document = document;
      }
      /**
       * @return {?}
       */


      _createClass(OverlayContainer, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var container = this._containerElement;

          if (container && container.parentNode) {
            container.parentNode.removeChild(container);
          }
        }
        /**
         * This method returns the overlay container element. It will lazily
         * create the element the first time  it is called to facilitate using
         * the container in non-browser environments.
         * @return {?} the container element
         */

      }, {
        key: "getContainerElement",
        value: function getContainerElement() {
          if (!this._containerElement) {
            this._createContainer();
          }

          return this._containerElement;
        }
        /**
         * Create the overlay container element, which is simply a div
         * with the 'cdk-overlay-container' class on the document body.
         * @protected
         * @return {?}
         */

      }, {
        key: "_createContainer",
        value: function _createContainer() {
          // @breaking-change 10.0.0 Remove null check for `_platform`.

          /** @type {?} */
          var isBrowser = this._platform ? this._platform.isBrowser : typeof window !== 'undefined';
          /** @type {?} */

          var containerClass = 'cdk-overlay-container';

          if (isBrowser || isTestEnvironment) {
            /** @type {?} */
            var oppositePlatformContainers = this._document.querySelectorAll(".".concat(containerClass, "[platform=\"server\"], ") + ".".concat(containerClass, "[platform=\"test\"]")); // Remove any old containers from the opposite platform.
            // This can happen when transitioning from the server to the client.


            for (var i = 0; i < oppositePlatformContainers.length; i++) {
              /** @type {?} */
              oppositePlatformContainers[i].parentNode.removeChild(oppositePlatformContainers[i]);
            }
          }
          /** @type {?} */


          var container = this._document.createElement('div');

          container.classList.add(containerClass); // A long time ago we kept adding new overlay containers whenever a new app was instantiated,
          // but at some point we added logic which clears the duplicate ones in order to avoid leaks.
          // The new logic was a little too aggressive since it was breaking some legitimate use cases.
          // To mitigate the problem we made it so that only containers from a different platform are
          // cleared, but the side-effect was that people started depending on the overly-aggressive
          // logic to clean up their tests for them. Until we can introduce an overlay-specific testing
          // module which does the cleanup, we try to detect that we're in a test environment and we
          // always clear the container. See #17006.
          // TODO(crisbeto): remove the test environment check once we have an overlay testing module.

          if (isTestEnvironment) {
            container.setAttribute('platform', 'test');
          } else if (!isBrowser) {
            container.setAttribute('platform', 'server');
          }

          this._document.body.appendChild(container);

          this._containerElement = container;
        }
      }]);

      return OverlayContainer;
    }();

    OverlayContainer.ɵfac = function OverlayContainer_Factory(t) {
      return new (t || OverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
    };
    /** @nocollapse */


    OverlayContainer.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };
    /** @nocollapse */


    OverlayContainer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function OverlayContainer_Factory() {
        return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      },
      token: OverlayContainer,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} parentContainer
     * @param {?} _document
     * @return {?}
     */


    function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
      return parentContainer || new OverlayContainer(_document);
    }
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @type {?}
     */


    var OVERLAY_CONTAINER_PROVIDER = {
      // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
      provide: OverlayContainer,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), OverlayContainer],
      /** @type {?} */
      _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]],
      useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/overlay-ref.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Reference to an overlay that has been created with the Overlay service.
     * Used to manipulate or dispose of said overlay.
     */

    var OverlayRef = /*#__PURE__*/function () {
      /**
       * @param {?} _portalOutlet
       * @param {?} _host
       * @param {?} _pane
       * @param {?} _config
       * @param {?} _ngZone
       * @param {?} _keyboardDispatcher
       * @param {?} _document
       * @param {?=} _location
       */
      function OverlayRef(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location) {
        var _this33 = this;

        _classCallCheck(this, OverlayRef);

        this._portalOutlet = _portalOutlet;
        this._host = _host;
        this._pane = _pane;
        this._config = _config;
        this._ngZone = _ngZone;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._document = _document;
        this._location = _location;
        this._backdropElement = null;
        this._backdropClick = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._attachments = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._detachments = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;

        this._backdropClickHandler =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return _this33._backdropClick.next(event);
        };
        /**
         * Stream of keydown events dispatched to this overlay.
         */


        this._keydownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();

        if (_config.scrollStrategy) {
          this._scrollStrategy = _config.scrollStrategy;

          this._scrollStrategy.attach(this);
        }

        this._positionStrategy = _config.positionStrategy;
      }
      /**
       * The overlay's HTML element
       * @return {?}
       */


      _createClass(OverlayRef, [{
        key: "attach",

        /**
         * Attaches content, given via a Portal, to the overlay.
         * If the overlay is configured to have a backdrop, it will be created.
         *
         * @param {?} portal Portal instance to which to attach the overlay.
         * @return {?} The portal attachment result.
         */
        value: function attach(portal) {
          var _this34 = this;

          /** @type {?} */
          var attachResult = this._portalOutlet.attach(portal); // Update the pane element with the given configuration.


          if (!this._host.parentElement && this._previousHostParent) {
            this._previousHostParent.appendChild(this._host);
          }

          if (this._positionStrategy) {
            this._positionStrategy.attach(this);
          }

          this._updateStackingOrder();

          this._updateElementSize();

          this._updateElementDirection();

          if (this._scrollStrategy) {
            this._scrollStrategy.enable();
          } // Update the position once the zone is stable so that the overlay will be fully rendered
          // before attempting to position it, as the position may depend on the size of the rendered
          // content.


          this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            // The overlay could've been detached before the zone has stabilized.
            if (_this34.hasAttached()) {
              _this34.updatePosition();
            }
          }); // Enable pointer events for the overlay pane element.


          this._togglePointerEvents(true);

          if (this._config.hasBackdrop) {
            this._attachBackdrop();
          }

          if (this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, true);
          } // Only emit the `attachments` event once all other setup is done.


          this._attachments.next(); // Track this overlay by the keyboard dispatcher


          this._keyboardDispatcher.add(this); // @breaking-change 8.0.0 remove the null check for `_location`
          // once the constructor parameter is made required.


          if (this._config.disposeOnNavigation && this._location) {
            this._locationChanges = this._location.subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this34.dispose();
            });
          }

          return attachResult;
        }
        /**
         * Detaches an overlay from a portal.
         * @return {?} The portal detachment result.
         */

      }, {
        key: "detach",
        value: function detach() {
          if (!this.hasAttached()) {
            return;
          }

          this.detachBackdrop(); // When the overlay is detached, the pane element should disable pointer events.
          // This is necessary because otherwise the pane element will cover the page and disable
          // pointer events therefore. Depends on the position strategy and the applied pane boundaries.

          this._togglePointerEvents(false);

          if (this._positionStrategy && this._positionStrategy.detach) {
            this._positionStrategy.detach();
          }

          if (this._scrollStrategy) {
            this._scrollStrategy.disable();
          }
          /** @type {?} */


          var detachmentResult = this._portalOutlet.detach(); // Only emit after everything is detached.


          this._detachments.next(); // Remove this overlay from keyboard dispatcher tracking.


          this._keyboardDispatcher.remove(this); // Keeping the host element in the DOM can cause scroll jank, because it still gets
          // rendered, even though it's transparent and unclickable which is why we remove it.


          this._detachContentWhenStable(); // Stop listening for location changes.


          this._locationChanges.unsubscribe();

          return detachmentResult;
        }
        /**
         * Cleans up the overlay from the DOM.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          /** @type {?} */
          var isAttached = this.hasAttached();

          if (this._positionStrategy) {
            this._positionStrategy.dispose();
          }

          this._disposeScrollStrategy();

          this.detachBackdrop();

          this._locationChanges.unsubscribe();

          this._keyboardDispatcher.remove(this);

          this._portalOutlet.dispose();

          this._attachments.complete();

          this._backdropClick.complete();

          this._keydownEvents.complete();

          if (this._host && this._host.parentNode) {
            this._host.parentNode.removeChild(this._host);

            this._host =
            /** @type {?} */
            null;
          }

          this._previousHostParent = this._pane =
          /** @type {?} */
          null;

          if (isAttached) {
            this._detachments.next();
          }

          this._detachments.complete();
        }
        /**
         * Whether the overlay has attached content.
         * @return {?}
         */

      }, {
        key: "hasAttached",
        value: function hasAttached() {
          return this._portalOutlet.hasAttached();
        }
        /**
         * Gets an observable that emits when the backdrop has been clicked.
         * @return {?}
         */

      }, {
        key: "backdropClick",
        value: function backdropClick() {
          return this._backdropClick.asObservable();
        }
        /**
         * Gets an observable that emits when the overlay has been attached.
         * @return {?}
         */

      }, {
        key: "attachments",
        value: function attachments() {
          return this._attachments.asObservable();
        }
        /**
         * Gets an observable that emits when the overlay has been detached.
         * @return {?}
         */

      }, {
        key: "detachments",
        value: function detachments() {
          return this._detachments.asObservable();
        }
        /**
         * Gets an observable of keydown events targeted to this overlay.
         * @return {?}
         */

      }, {
        key: "keydownEvents",
        value: function keydownEvents() {
          return this._keydownEvents.asObservable();
        }
        /**
         * Gets the current overlay configuration, which is immutable.
         * @return {?}
         */

      }, {
        key: "getConfig",
        value: function getConfig() {
          return this._config;
        }
        /**
         * Updates the position of the overlay based on the position strategy.
         * @return {?}
         */

      }, {
        key: "updatePosition",
        value: function updatePosition() {
          if (this._positionStrategy) {
            this._positionStrategy.apply();
          }
        }
        /**
         * Switches to a new position strategy and updates the overlay position.
         * @param {?} strategy
         * @return {?}
         */

      }, {
        key: "updatePositionStrategy",
        value: function updatePositionStrategy(strategy) {
          if (strategy === this._positionStrategy) {
            return;
          }

          if (this._positionStrategy) {
            this._positionStrategy.dispose();
          }

          this._positionStrategy = strategy;

          if (this.hasAttached()) {
            strategy.attach(this);
            this.updatePosition();
          }
        }
        /**
         * Update the size properties of the overlay.
         * @param {?} sizeConfig
         * @return {?}
         */

      }, {
        key: "updateSize",
        value: function updateSize(sizeConfig) {
          this._config = Object.assign(Object.assign({}, this._config), sizeConfig);

          this._updateElementSize();
        }
        /**
         * Sets the LTR/RTL direction for the overlay.
         * @param {?} dir
         * @return {?}
         */

      }, {
        key: "setDirection",
        value: function setDirection(dir) {
          this._config = Object.assign(Object.assign({}, this._config), {
            direction: dir
          });

          this._updateElementDirection();
        }
        /**
         * Add a CSS class or an array of classes to the overlay pane.
         * @param {?} classes
         * @return {?}
         */

      }, {
        key: "addPanelClass",
        value: function addPanelClass(classes) {
          if (this._pane) {
            this._toggleClasses(this._pane, classes, true);
          }
        }
        /**
         * Remove a CSS class or an array of classes from the overlay pane.
         * @param {?} classes
         * @return {?}
         */

      }, {
        key: "removePanelClass",
        value: function removePanelClass(classes) {
          if (this._pane) {
            this._toggleClasses(this._pane, classes, false);
          }
        }
        /**
         * Returns the layout direction of the overlay panel.
         * @return {?}
         */

      }, {
        key: "getDirection",
        value: function getDirection() {
          /** @type {?} */
          var direction = this._config.direction;

          if (!direction) {
            return 'ltr';
          }

          return typeof direction === 'string' ? direction : direction.value;
        }
        /**
         * Switches to a new scroll strategy.
         * @param {?} strategy
         * @return {?}
         */

      }, {
        key: "updateScrollStrategy",
        value: function updateScrollStrategy(strategy) {
          if (strategy === this._scrollStrategy) {
            return;
          }

          this._disposeScrollStrategy();

          this._scrollStrategy = strategy;

          if (this.hasAttached()) {
            strategy.attach(this);
            strategy.enable();
          }
        }
        /**
         * Updates the text direction of the overlay panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateElementDirection",
        value: function _updateElementDirection() {
          this._host.setAttribute('dir', this.getDirection());
        }
        /**
         * Updates the size of the overlay element based on the overlay config.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateElementSize",
        value: function _updateElementSize() {
          if (!this._pane) {
            return;
          }
          /** @type {?} */


          var style = this._pane.style;
          style.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.width);
          style.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.height);
          style.minWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.minWidth);
          style.minHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.minHeight);
          style.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.maxWidth);
          style.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.maxHeight);
        }
        /**
         * Toggles the pointer events for the overlay pane element.
         * @private
         * @param {?} enablePointer
         * @return {?}
         */

      }, {
        key: "_togglePointerEvents",
        value: function _togglePointerEvents(enablePointer) {
          this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
        }
        /**
         * Attaches a backdrop for this overlay.
         * @private
         * @return {?}
         */

      }, {
        key: "_attachBackdrop",
        value: function _attachBackdrop() {
          var _this35 = this;

          /** @type {?} */
          var showingClass = 'cdk-overlay-backdrop-showing';
          this._backdropElement = this._document.createElement('div');

          this._backdropElement.classList.add('cdk-overlay-backdrop');

          if (this._config.backdropClass) {
            this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
          } // Insert the backdrop before the pane in the DOM order,
          // in order to handle stacked overlays properly.


          /** @type {?} */
          this._host.parentElement.insertBefore(this._backdropElement, this._host); // Forward backdrop clicks such that the consumer of the overlay can perform whatever
          // action desired when such a click occurs (usually closing the overlay).


          this._backdropElement.addEventListener('click', this._backdropClickHandler); // Add class to fade-in the backdrop after one frame.


          if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                if (_this35._backdropElement) {
                  _this35._backdropElement.classList.add(showingClass);
                }
              });
            });
          } else {
            this._backdropElement.classList.add(showingClass);
          }
        }
        /**
         * Updates the stacking order of the element, moving it to the top if necessary.
         * This is required in cases where one overlay was detached, while another one,
         * that should be behind it, was destroyed. The next time both of them are opened,
         * the stacking will be wrong, because the detached element's pane will still be
         * in its original DOM position.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateStackingOrder",
        value: function _updateStackingOrder() {
          if (this._host.nextSibling) {
            /** @type {?} */
            this._host.parentNode.appendChild(this._host);
          }
        }
        /**
         * Detaches the backdrop (if any) associated with the overlay.
         * @return {?}
         */

      }, {
        key: "detachBackdrop",
        value: function detachBackdrop() {
          var _this36 = this;

          /** @type {?} */
          var backdropToDetach = this._backdropElement;

          if (!backdropToDetach) {
            return;
          }
          /** @type {?} */


          var timeoutId;
          /** @type {?} */

          var finishDetach =
          /**
          * @return {?}
          */
          function finishDetach() {
            // It may not be attached to anything in certain cases (e.g. unit tests).
            if (backdropToDetach) {
              backdropToDetach.removeEventListener('click', _this36._backdropClickHandler);
              backdropToDetach.removeEventListener('transitionend', finishDetach);

              if (backdropToDetach.parentNode) {
                backdropToDetach.parentNode.removeChild(backdropToDetach);
              }
            } // It is possible that a new portal has been attached to this overlay since we started
            // removing the backdrop. If that is the case, only clear the backdrop reference if it
            // is still the same instance that we started to remove.


            if (_this36._backdropElement == backdropToDetach) {
              _this36._backdropElement = null;
            }

            if (_this36._config.backdropClass) {
              _this36._toggleClasses(
              /** @type {?} */
              backdropToDetach, _this36._config.backdropClass, false);
            }

            clearTimeout(timeoutId);
          };

          backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            backdropToDetach.addEventListener('transitionend', finishDetach);
          }); // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
          // In this case we make it unclickable and we try to remove it after a delay.


          backdropToDetach.style.pointerEvents = 'none'; // Run this outside the Angular zone because there's nothing that Angular cares about.
          // If it were to run inside the Angular zone, every test that used Overlay would have to be
          // either async or fakeAsync.

          timeoutId = this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return setTimeout(finishDetach, 500);
          });
        }
        /**
         * Toggles a single CSS class or an array of classes on an element.
         * @private
         * @param {?} element
         * @param {?} cssClasses
         * @param {?} isAdd
         * @return {?}
         */

      }, {
        key: "_toggleClasses",
        value: function _toggleClasses(element, cssClasses, isAdd) {
          /** @type {?} */
          var classList = element.classList;
          Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(cssClasses).forEach(
          /**
          * @param {?} cssClass
          * @return {?}
          */
          function (cssClass) {
            // We can't do a spread here, because IE doesn't support setting multiple classes.
            // Also trying to add an empty string to a DOMTokenList will throw.
            if (cssClass) {
              isAdd ? classList.add(cssClass) : classList.remove(cssClass);
            }
          });
        }
        /**
         * Detaches the overlay content next time the zone stabilizes.
         * @private
         * @return {?}
         */

      }, {
        key: "_detachContentWhenStable",
        value: function _detachContentWhenStable() {
          var _this37 = this;

          // Normally we wouldn't have to explicitly run this outside the `NgZone`, however
          // if the consumer is using `zone-patch-rxjs`, the `Subscription.unsubscribe` call will
          // be patched to run inside the zone, which will throw us into an infinite loop.
          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            // We can't remove the host here immediately, because the overlay pane's content
            // might still be animating. This stream helps us avoid interrupting the animation
            // by waiting for the pane to become empty.

            /** @type {?} */
            var subscription = _this37._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(_this37._attachments, _this37._detachments))).subscribe(
            /**
            * @return {?}
            */
            function () {
              // Needs a couple of checks for the pane and host, because
              // they may have been removed by the time the zone stabilizes.
              if (!_this37._pane || !_this37._host || _this37._pane.children.length === 0) {
                if (_this37._pane && _this37._config.panelClass) {
                  _this37._toggleClasses(_this37._pane, _this37._config.panelClass, false);
                }

                if (_this37._host && _this37._host.parentElement) {
                  _this37._previousHostParent = _this37._host.parentElement;

                  _this37._previousHostParent.removeChild(_this37._host);
                }

                subscription.unsubscribe();
              }
            });
          });
        }
        /**
         * Disposes of a scroll strategy.
         * @private
         * @return {?}
         */

      }, {
        key: "_disposeScrollStrategy",
        value: function _disposeScrollStrategy() {
          /** @type {?} */
          var scrollStrategy = this._scrollStrategy;

          if (scrollStrategy) {
            scrollStrategy.disable();

            if (scrollStrategy.detach) {
              scrollStrategy.detach();
            }
          }
        }
      }, {
        key: "overlayElement",
        get: function get() {
          return this._pane;
        }
        /**
         * The overlay's backdrop HTML element.
         * @return {?}
         */

      }, {
        key: "backdropElement",
        get: function get() {
          return this._backdropElement;
        }
        /**
         * Wrapper around the panel element. Can be used for advanced
         * positioning where a wrapper with specific styling is
         * required around the overlay pane.
         * @return {?}
         */

      }, {
        key: "hostElement",
        get: function get() {
          return this._host;
        }
      }]);

      return OverlayRef;
    }();

    if (false) {}
    /**
     * Size properties for an overlay.
     * @record
     */


    function OverlaySizeConfig() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/position/flexible-connected-position-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO: refactor clipping detection into a separate thing (part of scrolling module)
    // TODO: doesn't handle both flexible width and height when it has to scroll along both axis.

    /**
     * Class to be added to the overlay bounding box.
     * @type {?}
     */


    var boundingBoxClass = 'cdk-overlay-connected-position-bounding-box';
    /**
     * Regex used to split a string on its CSS units.
     * @type {?}
     */

    var cssUnitPattern = /([A-Za-z%]+)$/;
    /**
     * A strategy for positioning overlays. Using this strategy, an overlay is given an
     * implicit position relative some origin element. The relative position is defined in terms of
     * a point on the origin element that is connected to a point on the overlay element. For example,
     * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
     * of the overlay.
     */

    var FlexibleConnectedPositionStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} connectedTo
       * @param {?} _viewportRuler
       * @param {?} _document
       * @param {?} _platform
       * @param {?} _overlayContainer
       */
      function FlexibleConnectedPositionStrategy(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
        _classCallCheck(this, FlexibleConnectedPositionStrategy);

        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
        /**
         * Last size used for the bounding box. Used to avoid resizing the overlay after open.
         */

        this._lastBoundingBoxSize = {
          width: 0,
          height: 0
        };
        /**
         * Whether the overlay was pushed in a previous positioning.
         */

        this._isPushed = false;
        /**
         * Whether the overlay can be pushed on-screen on the initial open.
         */

        this._canPush = true;
        /**
         * Whether the overlay can grow via flexible width/height after the initial open.
         */

        this._growAfterOpen = false;
        /**
         * Whether the overlay's width and height can be constrained to fit within the viewport.
         */

        this._hasFlexibleDimensions = true;
        /**
         * Whether the overlay position is locked.
         */

        this._positionLocked = false;
        /**
         * Amount of space that must be maintained between the overlay and the edge of the viewport.
         */

        this._viewportMargin = 0;
        /**
         * The Scrollable containers used to check scrollable view properties on position change.
         */

        this._scrollables = [];
        /**
         * Ordered list of preferred positions, from most to least desirable.
         */

        this._preferredPositions = [];
        /**
         * Subject that emits whenever the position changes.
         */

        this._positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Subscription to viewport size changes.
         */

        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /**
         * Default offset for the overlay along the x axis.
         */

        this._offsetX = 0;
        /**
         * Default offset for the overlay along the y axis.
         */

        this._offsetY = 0;
        /**
         * Keeps track of the CSS classes that the position strategy has applied on the overlay panel.
         */

        this._appliedPanelClasses = [];
        /**
         * Observable sequence of position changes.
         */

        this.positionChanges = this._positionChanges.asObservable();
        this.setOrigin(connectedTo);
      }
      /**
       * Ordered list of preferred positions, from most to least desirable.
       * @return {?}
       */


      _createClass(FlexibleConnectedPositionStrategy, [{
        key: "attach",

        /**
         * Attaches this position strategy to an overlay.
         * @param {?} overlayRef
         * @return {?}
         */
        value: function attach(overlayRef) {
          var _this38 = this;

          if (this._overlayRef && overlayRef !== this._overlayRef) {
            throw Error('This position strategy is already attached to an overlay');
          }

          this._validatePositions();

          overlayRef.hostElement.classList.add(boundingBoxClass);
          this._overlayRef = overlayRef;
          this._boundingBox = overlayRef.hostElement;
          this._pane = overlayRef.overlayElement;
          this._isDisposed = false;
          this._isInitialRender = true;
          this._lastPosition = null;

          this._resizeSubscription.unsubscribe();

          this._resizeSubscription = this._viewportRuler.change().subscribe(
          /**
          * @return {?}
          */
          function () {
            // When the window is resized, we want to trigger the next reposition as if it
            // was an initial render, in order for the strategy to pick a new optimal position,
            // otherwise position locking will cause it to stay at the old one.
            _this38._isInitialRender = true;

            _this38.apply();
          });
        }
        /**
         * Updates the position of the overlay element, using whichever preferred position relative
         * to the origin best fits on-screen.
         *
         * The selection of a position goes as follows:
         *  - If any positions fit completely within the viewport as-is,
         *      choose the first position that does so.
         *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
         *      choose the position with the greatest available size modified by the positions' weight.
         *  - If pushing is enabled, take the position that went off-screen the least and push it
         *      on-screen.
         *  - If none of the previous criteria were met, use the position that goes off-screen the least.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "apply",
        value: function apply() {
          // We shouldn't do anything if the strategy was disposed or we're on the server.
          if (this._isDisposed || !this._platform.isBrowser) {
            return;
          } // If the position has been applied already (e.g. when the overlay was opened) and the
          // consumer opted into locking in the position, re-use the old position, in order to
          // prevent the overlay from jumping around.


          if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
            this.reapplyLastPosition();
            return;
          }

          this._clearPanelClasses();

          this._resetOverlayElementStyles();

          this._resetBoundingBoxStyles(); // We need the bounding rects for the origin and the overlay to determine how to position
          // the overlay relative to the origin.
          // We use the viewport rect to determine whether a position would go off-screen.


          this._viewportRect = this._getNarrowedViewportRect();
          this._originRect = this._getOriginRect();
          this._overlayRect = this._pane.getBoundingClientRect();
          /** @type {?} */

          var originRect = this._originRect;
          /** @type {?} */

          var overlayRect = this._overlayRect;
          /** @type {?} */

          var viewportRect = this._viewportRect; // Positions where the overlay will fit with flexible dimensions.

          /** @type {?} */

          var flexibleFits = []; // Fallback if none of the preferred positions fit within the viewport.

          /** @type {?} */

          var fallback; // Go through each of the preferred positions looking for a good fit.
          // If a good fit is found, it will be applied immediately.

          var _iterator2 = _createForOfIteratorHelper(this._preferredPositions),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var pos = _step2.value;

              // Get the exact (x, y) coordinate for the point-of-origin on the origin element.

              /** @type {?} */
              var originPoint = this._getOriginPoint(originRect, pos); // From that point-of-origin, get the exact (x, y) coordinate for the top-left corner of the
              // overlay in this position. We use the top-left corner for calculations and later translate
              // this into an appropriate (top, left, bottom, right) style.

              /** @type {?} */


              var overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos); // Calculate how well the overlay would fit into the viewport with this point.

              /** @type {?} */


              var overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos); // If the overlay, without any further work, fits into the viewport, use this position.


              if (overlayFit.isCompletelyWithinViewport) {
                this._isPushed = false;

                this._applyPosition(pos, originPoint);

                return;
              } // If the overlay has flexible dimensions, we can use this position
              // so long as there's enough space for the minimum dimensions.


              if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
                // Save positions where the overlay will fit with flexible dimensions. We will use these
                // if none of the positions fit *without* flexible dimensions.
                flexibleFits.push({
                  position: pos,
                  origin: originPoint,
                  overlayRect: overlayRect,
                  boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                });
                continue;
              } // If the current preferred position does not fit on the screen, remember the position
              // if it has more visible area on-screen than we've seen and move onto the next preferred
              // position.


              if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
                fallback = {
                  overlayFit: overlayFit,
                  overlayPoint: overlayPoint,
                  originPoint: originPoint,
                  position: pos,
                  overlayRect: overlayRect
                };
              }
            } // If there are any positions where the overlay would fit with flexible dimensions, choose the
            // one that has the greatest area available modified by the position's weight

          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          if (flexibleFits.length) {
            /** @type {?} */
            var bestFit = null;
            /** @type {?} */

            var bestScore = -1;

            var _iterator3 = _createForOfIteratorHelper(flexibleFits),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var fit = _step3.value;

                /** @type {?} */
                var score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);

                if (score > bestScore) {
                  bestScore = score;
                  bestFit = fit;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            this._isPushed = false;

            this._applyPosition(
            /** @type {?} */
            bestFit.position,
            /** @type {?} */
            bestFit.origin);

            return;
          } // When none of the preferred positions fit within the viewport, take the position
          // that went off-screen the least and attempt to push it on-screen.


          if (this._canPush) {
            // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
            this._isPushed = true;

            this._applyPosition(
            /** @type {?} */
            fallback.position,
            /** @type {?} */
            fallback.originPoint);

            return;
          } // All options for getting the overlay within the viewport have been exhausted, so go with the
          // position that went off-screen the least.


          this._applyPosition(
          /** @type {?} */
          fallback.position,
          /** @type {?} */
          fallback.originPoint);
        }
        /**
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this._clearPanelClasses();

          this._lastPosition = null;
          this._previousPushAmount = null;

          this._resizeSubscription.unsubscribe();
        }
        /**
         * Cleanup after the element gets destroyed.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this._isDisposed) {
            return;
          } // We can't use `_resetBoundingBoxStyles` here, because it resets
          // some properties to zero, rather than removing them.


          if (this._boundingBox) {
            extendStyles(this._boundingBox.style,
            /** @type {?} */
            {
              top: '',
              left: '',
              right: '',
              bottom: '',
              height: '',
              width: '',
              alignItems: '',
              justifyContent: ''
            });
          }

          if (this._pane) {
            this._resetOverlayElementStyles();
          }

          if (this._overlayRef) {
            this._overlayRef.hostElement.classList.remove(boundingBoxClass);
          }

          this.detach();

          this._positionChanges.complete();

          this._overlayRef = this._boundingBox =
          /** @type {?} */
          null;
          this._isDisposed = true;
        }
        /**
         * This re-aligns the overlay element with the trigger in its last calculated position,
         * even if a position higher in the "preferred positions" list would now fit. This
         * allows one to re-align the panel without changing the orientation of the panel.
         * @return {?}
         */

      }, {
        key: "reapplyLastPosition",
        value: function reapplyLastPosition() {
          if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
            this._originRect = this._getOriginRect();
            this._overlayRect = this._pane.getBoundingClientRect();
            this._viewportRect = this._getNarrowedViewportRect();
            /** @type {?} */

            var lastPosition = this._lastPosition || this._preferredPositions[0];
            /** @type {?} */

            var originPoint = this._getOriginPoint(this._originRect, lastPosition);

            this._applyPosition(lastPosition, originPoint);
          }
        }
        /**
         * Sets the list of Scrollable containers that host the origin element so that
         * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
         * Scrollable must be an ancestor element of the strategy's origin element.
         * @template THIS
         * @this {THIS}
         * @param {?} scrollables
         * @return {THIS}
         */

      }, {
        key: "withScrollableContainers",
        value: function withScrollableContainers(scrollables) {
          /** @type {?} */
          this._scrollables = scrollables;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Adds new preferred positions.
         * @template THIS
         * @this {THIS}
         * @param {?} positions List of positions options for this overlay.
         * @return {THIS}
         */

      }, {
        key: "withPositions",
        value: function withPositions(positions) {
          /** @type {?} */
          this._preferredPositions = positions; // If the last calculated position object isn't part of the positions anymore, clear
          // it in order to avoid it being picked up if the consumer tries to re-apply.

          if (positions.indexOf(
          /** @type {?} */

          /** @type {?} */
          this._lastPosition) === -1) {
            /** @type {?} */
            this._lastPosition = null;
          }

          /** @type {?} */
          this._validatePositions();

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
         * @template THIS
         * @this {THIS}
         * @param {?} margin Required margin between the overlay and the viewport edge in pixels.
         * @return {THIS}
         */

      }, {
        key: "withViewportMargin",
        value: function withViewportMargin(margin) {
          /** @type {?} */
          this._viewportMargin = margin;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets whether the overlay's width and height can be constrained to fit within the viewport.
         * @template THIS
         * @this {THIS}
         * @param {?=} flexibleDimensions
         * @return {THIS}
         */

      }, {
        key: "withFlexibleDimensions",
        value: function withFlexibleDimensions() {
          var flexibleDimensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._hasFlexibleDimensions = flexibleDimensions;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets whether the overlay can grow after the initial open via flexible width/height.
         * @template THIS
         * @this {THIS}
         * @param {?=} growAfterOpen
         * @return {THIS}
         */

      }, {
        key: "withGrowAfterOpen",
        value: function withGrowAfterOpen() {
          var growAfterOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._growAfterOpen = growAfterOpen;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets whether the overlay can be pushed on-screen if none of the provided positions fit.
         * @template THIS
         * @this {THIS}
         * @param {?=} canPush
         * @return {THIS}
         */

      }, {
        key: "withPush",
        value: function withPush() {
          var canPush = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._canPush = canPush;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets whether the overlay's position should be locked in after it is positioned
         * initially. When an overlay is locked in, it won't attempt to reposition itself
         * when the position is re-applied (e.g. when the user scrolls away).
         * @template THIS
         * @this {THIS}
         * @param {?=} isLocked Whether the overlay should locked in.
         * @return {THIS}
         */

      }, {
        key: "withLockedPosition",
        value: function withLockedPosition() {
          var isLocked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._positionLocked = isLocked;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the origin, relative to which to position the overlay.
         * Using an element origin is useful for building components that need to be positioned
         * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
         * used for cases like contextual menus which open relative to the user's pointer.
         * @template THIS
         * @this {THIS}
         * @param {?} origin Reference to the new origin.
         * @return {THIS}
         */

      }, {
        key: "setOrigin",
        value: function setOrigin(origin) {
          /** @type {?} */
          this._origin = origin;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the default offset for the overlay's connection point on the x-axis.
         * @template THIS
         * @this {THIS}
         * @param {?} offset New offset in the X axis.
         * @return {THIS}
         */

      }, {
        key: "withDefaultOffsetX",
        value: function withDefaultOffsetX(offset) {
          /** @type {?} */
          this._offsetX = offset;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the default offset for the overlay's connection point on the y-axis.
         * @template THIS
         * @this {THIS}
         * @param {?} offset New offset in the Y axis.
         * @return {THIS}
         */

      }, {
        key: "withDefaultOffsetY",
        value: function withDefaultOffsetY(offset) {
          /** @type {?} */
          this._offsetY = offset;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Configures that the position strategy should set a `transform-origin` on some elements
         * inside the overlay, depending on the current position that is being applied. This is
         * useful for the cases where the origin of an animation can change depending on the
         * alignment of the overlay.
         * @template THIS
         * @this {THIS}
         * @param {?} selector CSS selector that will be used to find the target
         *    elements onto which to set the transform origin.
         * @return {THIS}
         */

      }, {
        key: "withTransformOriginOn",
        value: function withTransformOriginOn(selector) {
          /** @type {?} */
          this._transformOriginSelector = selector;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
         * @private
         * @param {?} originRect
         * @param {?} pos
         * @return {?}
         */

      }, {
        key: "_getOriginPoint",
        value: function _getOriginPoint(originRect, pos) {
          /** @type {?} */
          var x;

          if (pos.originX == 'center') {
            // Note: when centering we should always use the `left`
            // offset, otherwise the position will be wrong in RTL.
            x = originRect.left + originRect.width / 2;
          } else {
            /** @type {?} */
            var startX = this._isRtl() ? originRect.right : originRect.left;
            /** @type {?} */

            var endX = this._isRtl() ? originRect.left : originRect.right;
            x = pos.originX == 'start' ? startX : endX;
          }
          /** @type {?} */


          var y;

          if (pos.originY == 'center') {
            y = originRect.top + originRect.height / 2;
          } else {
            y = pos.originY == 'top' ? originRect.top : originRect.bottom;
          }

          return {
            x: x,
            y: y
          };
        }
        /**
         * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
         * origin point to which the overlay should be connected.
         * @private
         * @param {?} originPoint
         * @param {?} overlayRect
         * @param {?} pos
         * @return {?}
         */

      }, {
        key: "_getOverlayPoint",
        value: function _getOverlayPoint(originPoint, overlayRect, pos) {
          // Calculate the (overlayStartX, overlayStartY), the start of the
          // potential overlay position relative to the origin point.

          /** @type {?} */
          var overlayStartX;

          if (pos.overlayX == 'center') {
            overlayStartX = -overlayRect.width / 2;
          } else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl() ? -overlayRect.width : 0;
          } else {
            overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
          }
          /** @type {?} */


          var overlayStartY;

          if (pos.overlayY == 'center') {
            overlayStartY = -overlayRect.height / 2;
          } else {
            overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
          } // The (x, y) coordinates of the overlay.


          return {
            x: originPoint.x + overlayStartX,
            y: originPoint.y + overlayStartY
          };
        }
        /**
         * Gets how well an overlay at the given point will fit within the viewport.
         * @private
         * @param {?} point
         * @param {?} overlay
         * @param {?} viewport
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_getOverlayFit",
        value: function _getOverlayFit(point, overlay, viewport, position) {
          var x = point.x,
              y = point.y;
          /** @type {?} */

          var offsetX = this._getOffset(position, 'x');
          /** @type {?} */


          var offsetY = this._getOffset(position, 'y'); // Account for the offsets since they could push the overlay out of the viewport.


          if (offsetX) {
            x += offsetX;
          }

          if (offsetY) {
            y += offsetY;
          } // How much the overlay would overflow at this position, on each side.

          /** @type {?} */


          var leftOverflow = 0 - x;
          /** @type {?} */

          var rightOverflow = x + overlay.width - viewport.width;
          /** @type {?} */

          var topOverflow = 0 - y;
          /** @type {?} */

          var bottomOverflow = y + overlay.height - viewport.height; // Visible parts of the element on each axis.

          /** @type {?} */

          var visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
          /** @type {?} */


          var visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
          /** @type {?} */


          var visibleArea = visibleWidth * visibleHeight;
          return {
            visibleArea: visibleArea,
            isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
            fitsInViewportVertically: visibleHeight === overlay.height,
            fitsInViewportHorizontally: visibleWidth == overlay.width
          };
        }
        /**
         * Whether the overlay can fit within the viewport when it may resize either its width or height.
         * @private
         * @param {?} fit How well the overlay fits in the viewport at some position.
         * @param {?} point The (x, y) coordinates of the overlat at some position.
         * @param {?} viewport The geometry of the viewport.
         * @return {?}
         */

      }, {
        key: "_canFitWithFlexibleDimensions",
        value: function _canFitWithFlexibleDimensions(fit, point, viewport) {
          if (this._hasFlexibleDimensions) {
            /** @type {?} */
            var availableHeight = viewport.bottom - point.y;
            /** @type {?} */

            var availableWidth = viewport.right - point.x;
            /** @type {?} */

            var minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
            /** @type {?} */

            var minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
            /** @type {?} */

            var verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
            /** @type {?} */

            var horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
            return verticalFit && horizontalFit;
          }

          return false;
        }
        /**
         * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
         * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
         * right and bottom).
         *
         * @private
         * @param {?} start Starting point from which the overlay is pushed.
         * @param {?} overlay Dimensions of the overlay.
         * @param {?} scrollPosition Current viewport scroll position.
         * @return {?} The point at which to position the overlay after pushing. This is effectively a new
         *     originPoint.
         */

      }, {
        key: "_pushOverlayOnScreen",
        value: function _pushOverlayOnScreen(start, overlay, scrollPosition) {
          // If the position is locked and we've pushed the overlay already, reuse the previous push
          // amount, rather than pushing it again. If we were to continue pushing, the element would
          // remain in the viewport, which goes against the expectations when position locking is enabled.
          if (this._previousPushAmount && this._positionLocked) {
            return {
              x: start.x + this._previousPushAmount.x,
              y: start.y + this._previousPushAmount.y
            };
          }
          /** @type {?} */


          var viewport = this._viewportRect; // Determine how much the overlay goes outside the viewport on each
          // side, which we'll use to decide which direction to push it.

          /** @type {?} */

          var overflowRight = Math.max(start.x + overlay.width - viewport.right, 0);
          /** @type {?} */

          var overflowBottom = Math.max(start.y + overlay.height - viewport.bottom, 0);
          /** @type {?} */

          var overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
          /** @type {?} */

          var overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0); // Amount by which to push the overlay in each axis such that it remains on-screen.

          /** @type {?} */

          var pushX = 0;
          /** @type {?} */

          var pushY = 0; // If the overlay fits completely within the bounds of the viewport, push it from whichever
          // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
          // viewport and allow for the trailing end of the overlay to go out of bounds.

          if (overlay.width <= viewport.width) {
            pushX = overflowLeft || -overflowRight;
          } else {
            pushX = start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0;
          }

          if (overlay.height <= viewport.height) {
            pushY = overflowTop || -overflowBottom;
          } else {
            pushY = start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0;
          }

          this._previousPushAmount = {
            x: pushX,
            y: pushY
          };
          return {
            x: start.x + pushX,
            y: start.y + pushY
          };
        }
        /**
         * Applies a computed position to the overlay and emits a position change.
         * @private
         * @param {?} position The position preference
         * @param {?} originPoint The point on the origin element where the overlay is connected.
         * @return {?}
         */

      }, {
        key: "_applyPosition",
        value: function _applyPosition(position, originPoint) {
          this._setTransformOrigin(position);

          this._setOverlayElementStyles(originPoint, position);

          this._setBoundingBoxStyles(originPoint, position);

          if (position.panelClass) {
            this._addPanelClasses(position.panelClass);
          } // Save the last connected position in case the position needs to be re-calculated.


          this._lastPosition = position; // Notify that the position has been changed along with its change properties.
          // We only emit if we've got any subscriptions, because the scroll visibility
          // calculcations can be somewhat expensive.

          if (this._positionChanges.observers.length) {
            /** @type {?} */
            var scrollableViewProperties = this._getScrollVisibility();
            /** @type {?} */


            var changeEvent = new ConnectedOverlayPositionChange(position, scrollableViewProperties);

            this._positionChanges.next(changeEvent);
          }

          this._isInitialRender = false;
        }
        /**
         * Sets the transform origin based on the configured selector and the passed-in position.
         * @private
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_setTransformOrigin",
        value: function _setTransformOrigin(position) {
          if (!this._transformOriginSelector) {
            return;
          }
          /** @type {?} */


          var elements =
          /** @type {?} */
          this._boundingBox.querySelectorAll(this._transformOriginSelector);
          /** @type {?} */


          var xOrigin;
          /** @type {?} */

          var yOrigin = position.overlayY;

          if (position.overlayX === 'center') {
            xOrigin = 'center';
          } else if (this._isRtl()) {
            xOrigin = position.overlayX === 'start' ? 'right' : 'left';
          } else {
            xOrigin = position.overlayX === 'start' ? 'left' : 'right';
          }

          for (var i = 0; i < elements.length; i++) {
            elements[i].style.transformOrigin = "".concat(xOrigin, " ").concat(yOrigin);
          }
        }
        /**
         * Gets the position and size of the overlay's sizing container.
         *
         * This method does no measuring and applies no styles so that we can cheaply compute the
         * bounds for all positions and choose the best fit based on these results.
         * @private
         * @param {?} origin
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_calculateBoundingBoxRect",
        value: function _calculateBoundingBoxRect(origin, position) {
          /** @type {?} */
          var viewport = this._viewportRect;
          /** @type {?} */

          var isRtl = this._isRtl();
          /** @type {?} */


          var height;
          /** @type {?} */

          var top;
          /** @type {?} */

          var bottom;

          if (position.overlayY === 'top') {
            // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
            top = origin.y;
            height = viewport.height - top + this._viewportMargin;
          } else if (position.overlayY === 'bottom') {
            // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
            // the viewport margin back in, because the viewport rect is narrowed down to remove the
            // margin, whereas the `origin` position is calculated based on its `ClientRect`.
            bottom = viewport.height - origin.y + this._viewportMargin * 2;
            height = viewport.height - bottom + this._viewportMargin;
          } else {
            // If neither top nor bottom, it means that the overlay is vertically centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.bottom - origin.y` and
            // `origin.y - viewport.top`.

            /** @type {?} */
            var smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
            /** @type {?} */

            var previousHeight = this._lastBoundingBoxSize.height;
            height = smallestDistanceToViewportEdge * 2;
            top = origin.y - smallestDistanceToViewportEdge;

            if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
              top = origin.y - previousHeight / 2;
            }
          } // The overlay is opening 'right-ward' (the content flows to the right).

          /** @type {?} */


          var isBoundedByRightViewportEdge = position.overlayX === 'start' && !isRtl || position.overlayX === 'end' && isRtl; // The overlay is opening 'left-ward' (the content flows to the left).

          /** @type {?} */

          var isBoundedByLeftViewportEdge = position.overlayX === 'end' && !isRtl || position.overlayX === 'start' && isRtl;
          /** @type {?} */

          var width;
          /** @type {?} */

          var left;
          /** @type {?} */

          var right;

          if (isBoundedByLeftViewportEdge) {
            right = viewport.width - origin.x + this._viewportMargin;
            width = origin.x - this._viewportMargin;
          } else if (isBoundedByRightViewportEdge) {
            left = origin.x;
            width = viewport.right - origin.x;
          } else {
            // If neither start nor end, it means that the overlay is horizontally centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.right - origin.x` and
            // `origin.x - viewport.left`.

            /** @type {?} */
            var _smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
            /** @type {?} */


            var previousWidth = this._lastBoundingBoxSize.width;
            width = _smallestDistanceToViewportEdge * 2;
            left = origin.x - _smallestDistanceToViewportEdge;

            if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
              left = origin.x - previousWidth / 2;
            }
          }

          return {
            top:
            /** @type {?} */
            top,
            left:
            /** @type {?} */
            left,
            bottom:
            /** @type {?} */
            bottom,
            right:
            /** @type {?} */
            right,
            width: width,
            height: height
          };
        }
        /**
         * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
         * origin's connection point and stetches to the bounds of the viewport.
         *
         * @private
         * @param {?} origin The point on the origin element where the overlay is connected.
         * @param {?} position The position preference
         * @return {?}
         */

      }, {
        key: "_setBoundingBoxStyles",
        value: function _setBoundingBoxStyles(origin, position) {
          /** @type {?} */
          var boundingBoxRect = this._calculateBoundingBoxRect(origin, position); // It's weird if the overlay *grows* while scrolling, so we take the last size into account
          // when applying a new size.


          if (!this._isInitialRender && !this._growAfterOpen) {
            boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
            boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
          }
          /** @type {?} */


          var styles =
          /** @type {?} */
          {};

          if (this._hasExactPosition()) {
            styles.top = styles.left = '0';
            styles.bottom = styles.right = styles.maxHeight = styles.maxWidth = '';
            styles.width = styles.height = '100%';
          } else {
            /** @type {?} */
            var maxHeight = this._overlayRef.getConfig().maxHeight;
            /** @type {?} */


            var maxWidth = this._overlayRef.getConfig().maxWidth;

            styles.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.height);
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.top);
            styles.bottom = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.bottom);
            styles.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.width);
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.left);
            styles.right = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.right); // Push the pane content towards the proper direction.

            if (position.overlayX === 'center') {
              styles.alignItems = 'center';
            } else {
              styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
            }

            if (position.overlayY === 'center') {
              styles.justifyContent = 'center';
            } else {
              styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
            }

            if (maxHeight) {
              styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(maxHeight);
            }

            if (maxWidth) {
              styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(maxWidth);
            }
          }

          this._lastBoundingBoxSize = boundingBoxRect;
          extendStyles(
          /** @type {?} */
          this._boundingBox.style, styles);
        }
        /**
         * Resets the styles for the bounding box so that a new positioning can be computed.
         * @private
         * @return {?}
         */

      }, {
        key: "_resetBoundingBoxStyles",
        value: function _resetBoundingBoxStyles() {
          extendStyles(
          /** @type {?} */
          this._boundingBox.style,
          /** @type {?} */
          {
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            height: '',
            width: '',
            alignItems: '',
            justifyContent: ''
          });
        }
        /**
         * Resets the styles for the overlay pane so that a new positioning can be computed.
         * @private
         * @return {?}
         */

      }, {
        key: "_resetOverlayElementStyles",
        value: function _resetOverlayElementStyles() {
          extendStyles(this._pane.style,
          /** @type {?} */
          {
            top: '',
            left: '',
            bottom: '',
            right: '',
            position: '',
            transform: ''
          });
        }
        /**
         * Sets positioning styles to the overlay element.
         * @private
         * @param {?} originPoint
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_setOverlayElementStyles",
        value: function _setOverlayElementStyles(originPoint, position) {
          /** @type {?} */
          var styles =
          /** @type {?} */
          {};
          /** @type {?} */

          var hasExactPosition = this._hasExactPosition();
          /** @type {?} */


          var hasFlexibleDimensions = this._hasFlexibleDimensions;
          /** @type {?} */

          var config = this._overlayRef.getConfig();

          if (hasExactPosition) {
            /** @type {?} */
            var scrollPosition = this._viewportRuler.getViewportScrollPosition();

            extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
            extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
          } else {
            styles.position = 'static';
          } // Use a transform to apply the offsets. We do this because the `center` positions rely on
          // being in the normal flex flow and setting a `top` / `left` at all will completely throw
          // off the position. We also can't use margins, because they won't have an effect in some
          // cases where the element doesn't have anything to "push off of". Finally, this works
          // better both with flexible and non-flexible positioning.

          /** @type {?} */


          var transformString = '';
          /** @type {?} */

          var offsetX = this._getOffset(position, 'x');
          /** @type {?} */


          var offsetY = this._getOffset(position, 'y');

          if (offsetX) {
            transformString += "translateX(".concat(offsetX, "px) ");
          }

          if (offsetY) {
            transformString += "translateY(".concat(offsetY, "px)");
          }

          styles.transform = transformString.trim(); // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
          // we need these values to both be set to "100%" for the automatic flexible sizing to work.
          // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.
          // Note that this doesn't apply when we have an exact position, in which case we do want to
          // apply them because they'll be cleared from the bounding box.

          if (config.maxHeight) {
            if (hasExactPosition) {
              styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(config.maxHeight);
            } else if (hasFlexibleDimensions) {
              styles.maxHeight = '';
            }
          }

          if (config.maxWidth) {
            if (hasExactPosition) {
              styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(config.maxWidth);
            } else if (hasFlexibleDimensions) {
              styles.maxWidth = '';
            }
          }

          extendStyles(this._pane.style, styles);
        }
        /**
         * Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing.
         * @private
         * @param {?} position
         * @param {?} originPoint
         * @param {?} scrollPosition
         * @return {?}
         */

      }, {
        key: "_getExactOverlayY",
        value: function _getExactOverlayY(position, originPoint, scrollPosition) {
          // Reset any existing styles. This is necessary in case the
          // preferred position has changed since the last `apply`.

          /** @type {?} */
          var styles =
          /** @type {?} */
          {
            top: '',
            bottom: ''
          };
          /** @type {?} */

          var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

          if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
          }
          /** @type {?} */


          var virtualKeyboardOffset = this._overlayContainer.getContainerElement().getBoundingClientRect().top; // Normally this would be zero, however when the overlay is attached to an input (e.g. in an
          // autocomplete), mobile browsers will shift everything in order to put the input in the middle
          // of the screen and to make space for the virtual keyboard. We need to account for this offset,
          // otherwise our positioning will be thrown off.


          overlayPoint.y -= virtualKeyboardOffset; // We want to set either `top` or `bottom` based on whether the overlay wants to appear
          // above or below the origin and the direction in which the element will expand.

          if (position.overlayY === 'bottom') {
            // When using `bottom`, we adjust the y position such that it is the distance
            // from the bottom of the viewport rather than the top.

            /** @type {?} */
            var documentHeight =
            /** @type {?} */
            this._document.documentElement.clientHeight;
            styles.bottom = "".concat(documentHeight - (overlayPoint.y + this._overlayRect.height), "px");
          } else {
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(overlayPoint.y);
          }

          return styles;
        }
        /**
         * Gets the exact left/right for the overlay when not using flexible sizing or when pushing.
         * @private
         * @param {?} position
         * @param {?} originPoint
         * @param {?} scrollPosition
         * @return {?}
         */

      }, {
        key: "_getExactOverlayX",
        value: function _getExactOverlayX(position, originPoint, scrollPosition) {
          // Reset any existing styles. This is necessary in case the preferred position has
          // changed since the last `apply`.

          /** @type {?} */
          var styles =
          /** @type {?} */
          {
            left: '',
            right: ''
          };
          /** @type {?} */

          var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

          if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
          } // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
          // or "after" the origin, which determines the direction in which the element will expand.
          // For the horizontal axis, the meaning of "before" and "after" change based on whether the
          // page is in RTL or LTR.

          /** @type {?} */


          var horizontalStyleProperty;

          if (this._isRtl()) {
            horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
          } else {
            horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
          } // When we're setting `right`, we adjust the x position such that it is the distance
          // from the right edge of the viewport rather than the left edge.


          if (horizontalStyleProperty === 'right') {
            /** @type {?} */
            var documentWidth =
            /** @type {?} */
            this._document.documentElement.clientWidth;
            styles.right = "".concat(documentWidth - (overlayPoint.x + this._overlayRect.width), "px");
          } else {
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(overlayPoint.x);
          }

          return styles;
        }
        /**
         * Gets the view properties of the trigger and overlay, including whether they are clipped
         * or completely outside the view of any of the strategy's scrollables.
         * @private
         * @return {?}
         */

      }, {
        key: "_getScrollVisibility",
        value: function _getScrollVisibility() {
          // Note: needs fresh rects since the position could've changed.

          /** @type {?} */
          var originBounds = this._getOriginRect();
          /** @type {?} */


          var overlayBounds = this._pane.getBoundingClientRect(); // TODO(jelbourn): instead of needing all of the client rects for these scrolling containers
          // every time, we should be able to use the scrollTop of the containers if the size of those
          // containers hasn't changed.

          /** @type {?} */


          var scrollContainerBounds = this._scrollables.map(
          /**
          * @param {?} scrollable
          * @return {?}
          */
          function (scrollable) {
            return scrollable.getElementRef().nativeElement.getBoundingClientRect();
          });

          return {
            isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
            isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
            isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
            isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
          };
        }
        /**
         * Subtracts the amount that an element is overflowing on an axis from its length.
         * @private
         * @param {?} length
         * @param {...?} overflows
         * @return {?}
         */

      }, {
        key: "_subtractOverflows",
        value: function _subtractOverflows(length) {
          for (var _len5 = arguments.length, overflows = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
            overflows[_key5 - 1] = arguments[_key5];
          }

          return overflows.reduce(
          /**
          * @param {?} currentValue
          * @param {?} currentOverflow
          * @return {?}
          */
          function (currentValue, currentOverflow) {
            return currentValue - Math.max(currentOverflow, 0);
          }, length);
        }
        /**
         * Narrows the given viewport rect by the current _viewportMargin.
         * @private
         * @return {?}
         */

      }, {
        key: "_getNarrowedViewportRect",
        value: function _getNarrowedViewportRect() {
          // We recalculate the viewport rect here ourselves, rather than using the ViewportRuler,
          // because we want to use the `clientWidth` and `clientHeight` as the base. The difference
          // being that the client properties don't include the scrollbar, as opposed to `innerWidth`
          // and `innerHeight` that do. This is necessary, because the overlay container uses
          // 100% `width` and `height` which don't include the scrollbar either.

          /** @type {?} */
          var width =
          /** @type {?} */
          this._document.documentElement.clientWidth;
          /** @type {?} */

          var height =
          /** @type {?} */
          this._document.documentElement.clientHeight;
          /** @type {?} */

          var scrollPosition = this._viewportRuler.getViewportScrollPosition();

          return {
            top: scrollPosition.top + this._viewportMargin,
            left: scrollPosition.left + this._viewportMargin,
            right: scrollPosition.left + width - this._viewportMargin,
            bottom: scrollPosition.top + height - this._viewportMargin,
            width: width - 2 * this._viewportMargin,
            height: height - 2 * this._viewportMargin
          };
        }
        /**
         * Whether the we're dealing with an RTL context
         * @private
         * @return {?}
         */

      }, {
        key: "_isRtl",
        value: function _isRtl() {
          return this._overlayRef.getDirection() === 'rtl';
        }
        /**
         * Determines whether the overlay uses exact or flexible positioning.
         * @private
         * @return {?}
         */

      }, {
        key: "_hasExactPosition",
        value: function _hasExactPosition() {
          return !this._hasFlexibleDimensions || this._isPushed;
        }
        /**
         * Retrieves the offset of a position along the x or y axis.
         * @private
         * @param {?} position
         * @param {?} axis
         * @return {?}
         */

      }, {
        key: "_getOffset",
        value: function _getOffset(position, axis) {
          if (axis === 'x') {
            // We don't do something like `position['offset' + axis]` in
            // order to avoid breking minifiers that rename properties.
            return position.offsetX == null ? this._offsetX : position.offsetX;
          }

          return position.offsetY == null ? this._offsetY : position.offsetY;
        }
        /**
         * Validates that the current position match the expected values.
         * @private
         * @return {?}
         */

      }, {
        key: "_validatePositions",
        value: function _validatePositions() {
          if (!this._preferredPositions.length) {
            throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
          } // TODO(crisbeto): remove these once Angular's template type
          // checking is advanced enough to catch these cases.


          this._preferredPositions.forEach(
          /**
          * @param {?} pair
          * @return {?}
          */
          function (pair) {
            validateHorizontalPosition('originX', pair.originX);
            validateVerticalPosition('originY', pair.originY);
            validateHorizontalPosition('overlayX', pair.overlayX);
            validateVerticalPosition('overlayY', pair.overlayY);
          });
        }
        /**
         * Adds a single CSS class or an array of classes on the overlay panel.
         * @private
         * @param {?} cssClasses
         * @return {?}
         */

      }, {
        key: "_addPanelClasses",
        value: function _addPanelClasses(cssClasses) {
          var _this39 = this;

          if (this._pane) {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(cssClasses).forEach(
            /**
            * @param {?} cssClass
            * @return {?}
            */
            function (cssClass) {
              if (cssClass !== '' && _this39._appliedPanelClasses.indexOf(cssClass) === -1) {
                _this39._appliedPanelClasses.push(cssClass);

                _this39._pane.classList.add(cssClass);
              }
            });
          }
        }
        /**
         * Clears the classes that the position strategy has applied from the overlay panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_clearPanelClasses",
        value: function _clearPanelClasses() {
          var _this40 = this;

          if (this._pane) {
            this._appliedPanelClasses.forEach(
            /**
            * @param {?} cssClass
            * @return {?}
            */
            function (cssClass) {
              _this40._pane.classList.remove(cssClass);
            });

            this._appliedPanelClasses = [];
          }
        }
        /**
         * Returns the ClientRect of the current origin.
         * @private
         * @return {?}
         */

      }, {
        key: "_getOriginRect",
        value: function _getOriginRect() {
          /** @type {?} */
          var origin = this._origin;

          if (origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]) {
            return origin.nativeElement.getBoundingClientRect();
          } // Check for Element so SVG elements are also supported.


          if (origin instanceof Element) {
            return origin.getBoundingClientRect();
          }
          /** @type {?} */


          var width = origin.width || 0;
          /** @type {?} */

          var height = origin.height || 0; // If the origin is a point, return a client rect as if it was a 0x0 element at the point.

          return {
            top: origin.y,
            bottom: origin.y + height,
            left: origin.x,
            right: origin.x + width,
            height: height,
            width: width
          };
        }
      }, {
        key: "positions",
        get: function get() {
          return this._preferredPositions;
        }
      }]);

      return FlexibleConnectedPositionStrategy;
    }();

    if (false) {}
    /**
     * A simple (x, y) coordinate.
     * @record
     */


    function Point() {}

    if (false) {}
    /**
     * Record of measurements for how an overlay (at a given position) fits into the viewport.
     * @record
     */


    function OverlayFit() {}

    if (false) {}
    /**
     * Record of the measurments determining whether an overlay will fit in a specific position.
     * @record
     */


    function FallbackPosition() {}

    if (false) {}
    /**
     * Position and size of the overlay sizing wrapper for a specific position.
     * @record
     */


    function BoundingBoxRect() {}

    if (false) {}
    /**
     * Record of measures determining how well a given position will fit with flexible dimensions.
     * @record
     */


    function FlexibleFit() {}

    if (false) {}
    /**
     * A connected position as specified by the user.
     * @record
     */


    function ConnectedPosition() {}

    if (false) {}
    /**
     * Shallow-extends a stylesheet object with another stylesheet object.
     * @param {?} destination
     * @param {?} source
     * @return {?}
     */


    function extendStyles(destination, source) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          destination[key] = source[key];
        }
      }

      return destination;
    }
    /**
     * Extracts the pixel value as a number from a value, if it's a number
     * or a CSS pixel string (e.g. `1337px`). Otherwise returns null.
     * @param {?} input
     * @return {?}
     */


    function getPixelValue(input) {
      if (typeof input !== 'number' && input != null) {
        var _input$split = input.split(cssUnitPattern),
            _input$split2 = _slicedToArray(_input$split, 2),
            value = _input$split2[0],
            units = _input$split2[1];

        return !units || units === 'px' ? parseFloat(value) : null;
      }

      return input || null;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/position/connected-position-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A strategy for positioning overlays. Using this strategy, an overlay is given an
     * implicit position relative to some origin element. The relative position is defined in terms of
     * a point on the origin element that is connected to a point on the overlay element. For example,
     * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
     * of the overlay.
     * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
     * \@breaking-change 8.0.0
     */


    var ConnectedPositionStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} originPos
       * @param {?} overlayPos
       * @param {?} connectedTo
       * @param {?} viewportRuler
       * @param {?} document
       * @param {?} platform
       * @param {?} overlayContainer
       */
      function ConnectedPositionStrategy(originPos, overlayPos, connectedTo, viewportRuler, document, platform, overlayContainer) {
        _classCallCheck(this, ConnectedPositionStrategy);

        /**
         * Ordered list of preferred positions, from most to least desirable.
         */
        this._preferredPositions = []; // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
        // the extra logic, we create an instance of the positioning strategy that has some
        // defaults that make it behave as the old position strategy and to which we'll
        // proxy all of the API calls.

        this._positionStrategy = new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform, overlayContainer).withFlexibleDimensions(false).withPush(false).withViewportMargin(0);
        this.withFallbackPosition(originPos, overlayPos);
      }
      /**
       * Whether the we're dealing with an RTL context
       * @return {?}
       */


      _createClass(ConnectedPositionStrategy, [{
        key: "attach",

        /**
         * Attach this position strategy to an overlay.
         * @param {?} overlayRef
         * @return {?}
         */
        value: function attach(overlayRef) {
          this._overlayRef = overlayRef;

          this._positionStrategy.attach(overlayRef);

          if (this._direction) {
            overlayRef.setDirection(this._direction);
            this._direction = null;
          }
        }
        /**
         * Disposes all resources used by the position strategy.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          this._positionStrategy.dispose();
        }
        /**
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this._positionStrategy.detach();
        }
        /**
         * Updates the position of the overlay element, using whichever preferred position relative
         * to the origin fits on-screen.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "apply",
        value: function apply() {
          this._positionStrategy.apply();
        }
        /**
         * Re-positions the overlay element with the trigger in its last calculated position,
         * even if a position higher in the "preferred positions" list would now fit. This
         * allows one to re-align the panel without changing the orientation of the panel.
         * @return {?}
         */

      }, {
        key: "recalculateLastPosition",
        value: function recalculateLastPosition() {
          this._positionStrategy.reapplyLastPosition();
        }
        /**
         * Sets the list of Scrollable containers that host the origin element so that
         * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
         * Scrollable must be an ancestor element of the strategy's origin element.
         * @param {?} scrollables
         * @return {?}
         */

      }, {
        key: "withScrollableContainers",
        value: function withScrollableContainers(scrollables) {
          this._positionStrategy.withScrollableContainers(scrollables);
        }
        /**
         * Adds a new preferred fallback position.
         * @template THIS
         * @this {THIS}
         * @param {?} originPos
         * @param {?} overlayPos
         * @param {?=} offsetX
         * @param {?=} offsetY
         * @return {THIS}
         */

      }, {
        key: "withFallbackPosition",
        value: function withFallbackPosition(originPos, overlayPos, offsetX, offsetY) {
          /** @type {?} */
          var position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);

          /** @type {?} */
          this._preferredPositions.push(position);

          /** @type {?} */
          this._positionStrategy.withPositions(
          /** @type {?} */
          this._preferredPositions);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the layout direction so the overlay's position can be adjusted to match.
         * @template THIS
         * @this {THIS}
         * @param {?} dir New layout direction.
         * @return {THIS}
         */

      }, {
        key: "withDirection",
        value: function withDirection(dir) {
          // Since the direction might be declared before the strategy is attached,
          // we save the value in a temporary property and we'll transfer it to the
          // overlay ref on attachment.
          if (
          /** @type {?} */
          this._overlayRef) {
            /** @type {?} */
            this._overlayRef.setDirection(dir);
          } else {
            /** @type {?} */
            this._direction = dir;
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets an offset for the overlay's connection point on the x-axis
         * @template THIS
         * @this {THIS}
         * @param {?} offset New offset in the X axis.
         * @return {THIS}
         */

      }, {
        key: "withOffsetX",
        value: function withOffsetX(offset) {
          /** @type {?} */
          this._positionStrategy.withDefaultOffsetX(offset);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets an offset for the overlay's connection point on the y-axis
         * @template THIS
         * @this {THIS}
         * @param {?} offset New offset in the Y axis.
         * @return {THIS}
         */

      }, {
        key: "withOffsetY",
        value: function withOffsetY(offset) {
          /** @type {?} */
          this._positionStrategy.withDefaultOffsetY(offset);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets whether the overlay's position should be locked in after it is positioned
         * initially. When an overlay is locked in, it won't attempt to reposition itself
         * when the position is re-applied (e.g. when the user scrolls away).
         * @template THIS
         * @this {THIS}
         * @param {?} isLocked Whether the overlay should locked in.
         * @return {THIS}
         */

      }, {
        key: "withLockedPosition",
        value: function withLockedPosition(isLocked) {
          /** @type {?} */
          this._positionStrategy.withLockedPosition(isLocked);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Overwrites the current set of positions with an array of new ones.
         * @template THIS
         * @this {THIS}
         * @param {?} positions Position pairs to be set on the strategy.
         * @return {THIS}
         */

      }, {
        key: "withPositions",
        value: function withPositions(positions) {
          /** @type {?} */
          this._preferredPositions = positions.slice();

          /** @type {?} */
          this._positionStrategy.withPositions(
          /** @type {?} */
          this._preferredPositions);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the origin element, relative to which to position the overlay.
         * @template THIS
         * @this {THIS}
         * @param {?} origin Reference to the new origin element.
         * @return {THIS}
         */

      }, {
        key: "setOrigin",
        value: function setOrigin(origin) {
          /** @type {?} */
          this._positionStrategy.setOrigin(origin);

          return (
            /** @type {?} */
            this
          );
        }
      }, {
        key: "_isRtl",
        get: function get() {
          return this._overlayRef.getDirection() === 'rtl';
        }
        /**
         * Emits an event when the connection point changes.
         * @return {?}
         */

      }, {
        key: "onPositionChange",
        get: function get() {
          return this._positionStrategy.positionChanges;
        }
        /**
         * Ordered list of preferred positions, from most to least desirable.
         * @return {?}
         */

      }, {
        key: "positions",
        get: function get() {
          return this._preferredPositions;
        }
      }]);

      return ConnectedPositionStrategy;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/position/global-position-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Class to be added to the overlay pane wrapper.
     * @type {?}
     */


    var wrapperClass = 'cdk-global-overlay-wrapper';
    /**
     * A strategy for positioning overlays. Using this strategy, an overlay is given an
     * explicit position relative to the browser's viewport. We use flexbox, instead of
     * transforms, in order to avoid issues with subpixel rendering which can cause the
     * element to become blurry.
     */

    var GlobalPositionStrategy = /*#__PURE__*/function () {
      function GlobalPositionStrategy() {
        _classCallCheck(this, GlobalPositionStrategy);

        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
      }
      /**
       * @param {?} overlayRef
       * @return {?}
       */


      _createClass(GlobalPositionStrategy, [{
        key: "attach",
        value: function attach(overlayRef) {
          /** @type {?} */
          var config = overlayRef.getConfig();
          this._overlayRef = overlayRef;

          if (this._width && !config.width) {
            overlayRef.updateSize({
              width: this._width
            });
          }

          if (this._height && !config.height) {
            overlayRef.updateSize({
              height: this._height
            });
          }

          overlayRef.hostElement.classList.add(wrapperClass);
          this._isDisposed = false;
        }
        /**
         * Sets the top position of the overlay. Clears any previously set vertical position.
         * @template THIS
         * @this {THIS}
         * @param {?=} value New top offset.
         * @return {THIS}
         */

      }, {
        key: "top",
        value: function top() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this._bottomOffset = '';

          /** @type {?} */
          this._topOffset = value;

          /** @type {?} */
          this._alignItems = 'flex-start';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the left position of the overlay. Clears any previously set horizontal position.
         * @template THIS
         * @this {THIS}
         * @param {?=} value New left offset.
         * @return {THIS}
         */

      }, {
        key: "left",
        value: function left() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this._rightOffset = '';

          /** @type {?} */
          this._leftOffset = value;

          /** @type {?} */
          this._justifyContent = 'flex-start';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the bottom position of the overlay. Clears any previously set vertical position.
         * @template THIS
         * @this {THIS}
         * @param {?=} value New bottom offset.
         * @return {THIS}
         */

      }, {
        key: "bottom",
        value: function bottom() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this._topOffset = '';

          /** @type {?} */
          this._bottomOffset = value;

          /** @type {?} */
          this._alignItems = 'flex-end';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the right position of the overlay. Clears any previously set horizontal position.
         * @template THIS
         * @this {THIS}
         * @param {?=} value New right offset.
         * @return {THIS}
         */

      }, {
        key: "right",
        value: function right() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this._leftOffset = '';

          /** @type {?} */
          this._rightOffset = value;

          /** @type {?} */
          this._justifyContent = 'flex-end';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the overlay width and clears any previously set width.
         * @deprecated Pass the `width` through the `OverlayConfig`.
         * \@breaking-change 8.0.0
         * @template THIS
         * @this {THIS}
         * @param {?=} value New width for the overlay
         * @return {THIS}
         */

      }, {
        key: "width",
        value: function width() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          if (
          /** @type {?} */
          this._overlayRef) {
            /** @type {?} */
            this._overlayRef.updateSize({
              width: value
            });
          } else {
            /** @type {?} */
            this._width = value;
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the overlay height and clears any previously set height.
         * @deprecated Pass the `height` through the `OverlayConfig`.
         * \@breaking-change 8.0.0
         * @template THIS
         * @this {THIS}
         * @param {?=} value New height for the overlay
         * @return {THIS}
         */

      }, {
        key: "height",
        value: function height() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          if (
          /** @type {?} */
          this._overlayRef) {
            /** @type {?} */
            this._overlayRef.updateSize({
              height: value
            });
          } else {
            /** @type {?} */
            this._height = value;
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Centers the overlay horizontally with an optional offset.
         * Clears any previously set horizontal position.
         *
         * @template THIS
         * @this {THIS}
         * @param {?=} offset Overlay offset from the horizontal center.
         * @return {THIS}
         */

      }, {
        key: "centerHorizontally",
        value: function centerHorizontally() {
          var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this.left(offset);

          /** @type {?} */
          this._justifyContent = 'center';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Centers the overlay vertically with an optional offset.
         * Clears any previously set vertical position.
         *
         * @template THIS
         * @this {THIS}
         * @param {?=} offset Overlay offset from the vertical center.
         * @return {THIS}
         */

      }, {
        key: "centerVertically",
        value: function centerVertically() {
          var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this.top(offset);

          /** @type {?} */
          this._alignItems = 'center';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Apply the position to the element.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "apply",
        value: function apply() {
          // Since the overlay ref applies the strategy asynchronously, it could
          // have been disposed before it ends up being applied. If that is the
          // case, we shouldn't do anything.
          if (!this._overlayRef || !this._overlayRef.hasAttached()) {
            return;
          }
          /** @type {?} */


          var styles = this._overlayRef.overlayElement.style;
          /** @type {?} */

          var parentStyles = this._overlayRef.hostElement.style;
          /** @type {?} */

          var config = this._overlayRef.getConfig();

          var width = config.width,
              height = config.height,
              maxWidth = config.maxWidth,
              maxHeight = config.maxHeight;
          /** @type {?} */

          var shouldBeFlushHorizontally = (width === '100%' || width === '100vw') && (!maxWidth || maxWidth === '100%' || maxWidth === '100vw');
          /** @type {?} */

          var shouldBeFlushVertically = (height === '100%' || height === '100vh') && (!maxHeight || maxHeight === '100%' || maxHeight === '100vh');
          styles.position = this._cssPosition;
          styles.marginLeft = shouldBeFlushHorizontally ? '0' : this._leftOffset;
          styles.marginTop = shouldBeFlushVertically ? '0' : this._topOffset;
          styles.marginBottom = this._bottomOffset;
          styles.marginRight = this._rightOffset;

          if (shouldBeFlushHorizontally) {
            parentStyles.justifyContent = 'flex-start';
          } else if (this._justifyContent === 'center') {
            parentStyles.justifyContent = 'center';
          } else if (this._overlayRef.getConfig().direction === 'rtl') {
            // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
            // don't want that because our positioning is explicitly `left` and `right`, hence
            // why we do another inversion to ensure that the overlay stays in the same position.
            // TODO: reconsider this if we add `start` and `end` methods.
            if (this._justifyContent === 'flex-start') {
              parentStyles.justifyContent = 'flex-end';
            } else if (this._justifyContent === 'flex-end') {
              parentStyles.justifyContent = 'flex-start';
            }
          } else {
            parentStyles.justifyContent = this._justifyContent;
          }

          parentStyles.alignItems = shouldBeFlushVertically ? 'flex-start' : this._alignItems;
        }
        /**
         * Cleans up the DOM changes from the position strategy.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this._isDisposed || !this._overlayRef) {
            return;
          }
          /** @type {?} */


          var styles = this._overlayRef.overlayElement.style;
          /** @type {?} */

          var parent = this._overlayRef.hostElement;
          /** @type {?} */

          var parentStyles = parent.style;
          parent.classList.remove(wrapperClass);
          parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
          this._overlayRef =
          /** @type {?} */
          null;
          this._isDisposed = true;
        }
      }]);

      return GlobalPositionStrategy;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/position/overlay-position-builder.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Builder for overlay position strategy.
     */


    var OverlayPositionBuilder = /*#__PURE__*/function () {
      /**
       * @param {?} _viewportRuler
       * @param {?} _document
       * @param {?} _platform
       * @param {?} _overlayContainer
       */
      function OverlayPositionBuilder(_viewportRuler, _document, _platform, _overlayContainer) {
        _classCallCheck(this, OverlayPositionBuilder);

        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
      }
      /**
       * Creates a global position strategy.
       * @return {?}
       */


      _createClass(OverlayPositionBuilder, [{
        key: "global",
        value: function global() {
          return new GlobalPositionStrategy();
        }
        /**
         * Creates a relative position strategy.
         * @deprecated Use `flexibleConnectedTo` instead.
         * \@breaking-change 8.0.0
         * @param {?} elementRef
         * @param {?} originPos
         * @param {?} overlayPos
         * @return {?}
         */

      }, {
        key: "connectedTo",
        value: function connectedTo(elementRef, originPos, overlayPos) {
          return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
        }
        /**
         * Creates a flexible position strategy.
         * @param {?} origin Origin relative to which to position the overlay.
         * @return {?}
         */

      }, {
        key: "flexibleConnectedTo",
        value: function flexibleConnectedTo(origin) {
          return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
        }
      }]);

      return OverlayPositionBuilder;
    }();

    OverlayPositionBuilder.ɵfac = function OverlayPositionBuilder_Factory(t) {
      return new (t || OverlayPositionBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayContainer));
    };
    /** @nocollapse */


    OverlayPositionBuilder.ctorParameters = function () {
      return [{
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: OverlayContainer
      }];
    };
    /** @nocollapse */


    OverlayPositionBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function OverlayPositionBuilder_Factory() {
        return new OverlayPositionBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(OverlayContainer));
      },
      token: OverlayPositionBuilder,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayPositionBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: OverlayContainer
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/overlay.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Next overlay unique ID.
     * @type {?}
     */


    var nextUniqueId = 0; // Note that Overlay is *not* scoped to the app root because of the ComponentFactoryResolver
    // which needs to be different depending on where OverlayModule is imported.

    /**
     * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
     * used as a low-level building block for other components. Dialogs, tooltips, menus,
     * selects, etc. can all be built using overlays. The service should primarily be used by authors
     * of re-usable components rather than developers building end-user applications.
     *
     * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
     */

    var Overlay = /*#__PURE__*/function () {
      /**
       * @param {?} scrollStrategies
       * @param {?} _overlayContainer
       * @param {?} _componentFactoryResolver
       * @param {?} _positionBuilder
       * @param {?} _keyboardDispatcher
       * @param {?} _injector
       * @param {?} _ngZone
       * @param {?} _document
       * @param {?} _directionality
       * @param {?=} _location
       */
      function Overlay(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, _location) {
        _classCallCheck(this, Overlay);

        this.scrollStrategies = scrollStrategies;
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._positionBuilder = _positionBuilder;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._injector = _injector;
        this._ngZone = _ngZone;
        this._document = _document;
        this._directionality = _directionality;
        this._location = _location;
      }
      /**
       * Creates an overlay.
       * @param {?=} config Configuration applied to the overlay.
       * @return {?} Reference to the created overlay.
       */


      _createClass(Overlay, [{
        key: "create",
        value: function create(config) {
          /** @type {?} */
          var host = this._createHostElement();
          /** @type {?} */


          var pane = this._createPaneElement(host);
          /** @type {?} */


          var portalOutlet = this._createPortalOutlet(pane);
          /** @type {?} */


          var overlayConfig = new OverlayConfig(config);
          overlayConfig.direction = overlayConfig.direction || this._directionality.value;
          return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location);
        }
        /**
         * Gets a position builder that can be used, via fluent API,
         * to construct and configure a position strategy.
         * @return {?} An overlay position builder.
         */

      }, {
        key: "position",
        value: function position() {
          return this._positionBuilder;
        }
        /**
         * Creates the DOM element for an overlay and appends it to the overlay container.
         * @private
         * @param {?} host
         * @return {?} Newly-created pane element
         */

      }, {
        key: "_createPaneElement",
        value: function _createPaneElement(host) {
          /** @type {?} */
          var pane = this._document.createElement('div');

          pane.id = "cdk-overlay-".concat(nextUniqueId++);
          pane.classList.add('cdk-overlay-pane');
          host.appendChild(pane);
          return pane;
        }
        /**
         * Creates the host element that wraps around an overlay
         * and can be used for advanced positioning.
         * @private
         * @return {?} Newly-create host element.
         */

      }, {
        key: "_createHostElement",
        value: function _createHostElement() {
          /** @type {?} */
          var host = this._document.createElement('div');

          this._overlayContainer.getContainerElement().appendChild(host);

          return host;
        }
        /**
         * Create a DomPortalOutlet into which the overlay content can be loaded.
         * @private
         * @param {?} pane The DOM element to turn into a portal outlet.
         * @return {?} A portal outlet for the given DOM element.
         */

      }, {
        key: "_createPortalOutlet",
        value: function _createPortalOutlet(pane) {
          // We have to resolve the ApplicationRef later in order to allow people
          // to use overlay-based providers during app initialization.
          if (!this._appRef) {
            this._appRef = this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]);
          }

          return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["DomPortalOutlet"](pane, this._componentFactoryResolver, this._appRef, this._injector, this._document);
        }
      }]);

      return Overlay;
    }();

    Overlay.ɵfac = function Overlay_Factory(t) {
      return new (t || Overlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ScrollStrategyOptions), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayPositionBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayKeyboardDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], 8));
    };

    Overlay.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: Overlay,
      factory: Overlay.ɵfac
    });
    /** @nocollapse */

    Overlay.ctorParameters = function () {
      return [{
        type: ScrollStrategyOptions
      }, {
        type: OverlayContainer
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: OverlayPositionBuilder
      }, {
        type: OverlayKeyboardDispatcher
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Overlay, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: ScrollStrategyOptions
        }, {
          type: OverlayContainer
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: OverlayPositionBuilder
        }, {
          type: OverlayKeyboardDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/overlay-directives.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default set of positions for the overlay. Follows the behavior of a dropdown.
     * @type {?}
     */


    var defaultPositionList = [{
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top'
    }, {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom'
    }, {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom'
    }, {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top'
    }];
    /**
     * Injection token that determines the scroll handling while the connected overlay is open.
     * @type {?}
     */

    var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-connected-overlay-scroll-strategy');
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} overlay
     * @return {?}
     */

    function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_FACTORY(overlay) {
      return (
        /**
        * @param {?=} config
        * @return {?}
        */
        function (config) {
          return overlay.scrollStrategies.reposition(config);
        }
      );
    }
    /**
     * Directive applied to an element to make it usable as an origin for an Overlay using a
     * ConnectedPositionStrategy.
     */


    var CdkOverlayOrigin =
    /**
     * @param {?} elementRef
     */
    function CdkOverlayOrigin(elementRef) {
      _classCallCheck(this, CdkOverlayOrigin);

      this.elementRef = elementRef;
    };

    CdkOverlayOrigin.ɵfac = function CdkOverlayOrigin_Factory(t) {
      return new (t || CdkOverlayOrigin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    CdkOverlayOrigin.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkOverlayOrigin,
      selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]],
      exportAs: ["cdkOverlayOrigin"]
    });
    /** @nocollapse */

    CdkOverlayOrigin.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkOverlayOrigin, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
          exportAs: 'cdkOverlayOrigin'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Directive to facilitate declarative creation of an
     * Overlay using a FlexibleConnectedPositionStrategy.
     */


    var CdkConnectedOverlay = /*#__PURE__*/function () {
      // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.

      /**
       * @param {?} _overlay
       * @param {?} templateRef
       * @param {?} viewContainerRef
       * @param {?} scrollStrategyFactory
       * @param {?} _dir
       */
      function CdkConnectedOverlay(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
        _classCallCheck(this, CdkConnectedOverlay);

        this._overlay = _overlay;
        this._dir = _dir;
        this._hasBackdrop = false;
        this._lockPosition = false;
        this._growAfterOpen = false;
        this._flexibleDimensions = false;
        this._push = false;
        this._backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /**
         * Margin between the overlay and the viewport edges.
         */

        this.viewportMargin = 0;
        /**
         * Whether the overlay is open.
         */

        this.open = false;
        /**
         * Event emitted when the backdrop is clicked.
         */

        this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitted when the position has changed.
         */

        this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been attached.
         */

        this.attach = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been detached.
         */

        this.detach = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when there are keyboard events that are targeted at the overlay.
         */

        this.overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["TemplatePortal"](templateRef, viewContainerRef);
        this._scrollStrategyFactory = scrollStrategyFactory;
        this.scrollStrategy = this._scrollStrategyFactory();
      }
      /**
       * The offset in pixels for the overlay connection point on the x-axis
       * @return {?}
       */


      _createClass(CdkConnectedOverlay, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          if (this._overlayRef) {
            this._overlayRef.dispose();
          }

          this._backdropSubscription.unsubscribe();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this._position) {
            this._updatePositionStrategy(this._position);

            this._overlayRef.updateSize({
              width: this.width,
              minWidth: this.minWidth,
              height: this.height,
              minHeight: this.minHeight
            });

            if (changes['origin'] && this.open) {
              this._position.apply();
            }
          }

          if (changes['open']) {
            this.open ? this._attachOverlay() : this._detachOverlay();
          }
        }
        /**
         * Creates an overlay
         * @private
         * @return {?}
         */

      }, {
        key: "_createOverlay",
        value: function _createOverlay() {
          var _this41 = this;

          if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
          }

          this._overlayRef = this._overlay.create(this._buildConfig());

          this._overlayRef.keydownEvents().subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this41.overlayKeydown.next(event);

            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event)) {
              event.preventDefault();

              _this41._detachOverlay();
            }
          });
        }
        /**
         * Builds the overlay config based on the directive's inputs
         * @private
         * @return {?}
         */

      }, {
        key: "_buildConfig",
        value: function _buildConfig() {
          /** @type {?} */
          var positionStrategy = this._position = this.positionStrategy || this._createPositionStrategy();
          /** @type {?} */


          var overlayConfig = new OverlayConfig({
            direction: this._dir,
            positionStrategy: positionStrategy,
            scrollStrategy: this.scrollStrategy,
            hasBackdrop: this.hasBackdrop
          });

          if (this.width || this.width === 0) {
            overlayConfig.width = this.width;
          }

          if (this.height || this.height === 0) {
            overlayConfig.height = this.height;
          }

          if (this.minWidth || this.minWidth === 0) {
            overlayConfig.minWidth = this.minWidth;
          }

          if (this.minHeight || this.minHeight === 0) {
            overlayConfig.minHeight = this.minHeight;
          }

          if (this.backdropClass) {
            overlayConfig.backdropClass = this.backdropClass;
          }

          if (this.panelClass) {
            overlayConfig.panelClass = this.panelClass;
          }

          return overlayConfig;
        }
        /**
         * Updates the state of a position strategy, based on the values of the directive inputs.
         * @private
         * @param {?} positionStrategy
         * @return {?}
         */

      }, {
        key: "_updatePositionStrategy",
        value: function _updatePositionStrategy(positionStrategy) {
          var _this42 = this;

          /** @type {?} */
          var positions = this.positions.map(
          /**
          * @param {?} currentPosition
          * @return {?}
          */
          function (currentPosition) {
            return {
              originX: currentPosition.originX,
              originY: currentPosition.originY,
              overlayX: currentPosition.overlayX,
              overlayY: currentPosition.overlayY,
              offsetX: currentPosition.offsetX || _this42.offsetX,
              offsetY: currentPosition.offsetY || _this42.offsetY,
              panelClass: currentPosition.panelClass || undefined
            };
          });
          return positionStrategy.setOrigin(this.origin.elementRef).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector);
        }
        /**
         * Returns the position strategy of the overlay to be set on the overlay config
         * @private
         * @return {?}
         */

      }, {
        key: "_createPositionStrategy",
        value: function _createPositionStrategy() {
          var _this43 = this;

          /** @type {?} */
          var strategy = this._overlay.position().flexibleConnectedTo(this.origin.elementRef);

          this._updatePositionStrategy(strategy);

          strategy.positionChanges.subscribe(
          /**
          * @param {?} p
          * @return {?}
          */
          function (p) {
            return _this43.positionChange.emit(p);
          });
          return strategy;
        }
        /**
         * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
         * @private
         * @return {?}
         */

      }, {
        key: "_attachOverlay",
        value: function _attachOverlay() {
          var _this44 = this;

          if (!this._overlayRef) {
            this._createOverlay();
          } else {
            // Update the overlay size, in case the directive's inputs have changed
            this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
          }

          if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._templatePortal);

            this.attach.emit();
          }

          if (this.hasBackdrop) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              _this44.backdropClick.emit(event);
            });
          } else {
            this._backdropSubscription.unsubscribe();
          }
        }
        /**
         * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
         * @private
         * @return {?}
         */

      }, {
        key: "_detachOverlay",
        value: function _detachOverlay() {
          if (this._overlayRef) {
            this._overlayRef.detach();

            this.detach.emit();
          }

          this._backdropSubscription.unsubscribe();
        }
      }, {
        key: "offsetX",
        get: function get() {
          return this._offsetX;
        }
        /**
         * @param {?} offsetX
         * @return {?}
         */
        ,
        set: function set(offsetX) {
          this._offsetX = offsetX;

          if (this._position) {
            this._updatePositionStrategy(this._position);
          }
        }
        /**
         * The offset in pixels for the overlay connection point on the y-axis
         * @return {?}
         */

      }, {
        key: "offsetY",
        get: function get() {
          return this._offsetY;
        }
        /**
         * @param {?} offsetY
         * @return {?}
         */
        ,
        set: function set(offsetY) {
          this._offsetY = offsetY;

          if (this._position) {
            this._updatePositionStrategy(this._position);
          }
        }
        /**
         * Whether or not the overlay should attach a backdrop.
         * @return {?}
         */

      }, {
        key: "hasBackdrop",
        get: function get() {
          return this._hasBackdrop;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether or not the overlay should be locked when scrolling.
         * @return {?}
         */

      }, {
        key: "lockPosition",
        get: function get() {
          return this._lockPosition;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._lockPosition = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the overlay's width and height can be constrained to fit within the viewport.
         * @return {?}
         */

      }, {
        key: "flexibleDimensions",
        get: function get() {
          return this._flexibleDimensions;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._flexibleDimensions = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the overlay can grow after the initial open when flexible positioning is turned on.
         * @return {?}
         */

      }, {
        key: "growAfterOpen",
        get: function get() {
          return this._growAfterOpen;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._growAfterOpen = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the overlay can be pushed on-screen if none of the provided positions fit.
         * @return {?}
         */

      }, {
        key: "push",
        get: function get() {
          return this._push;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._push = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * The associated overlay reference.
         * @return {?}
         */

      }, {
        key: "overlayRef",
        get: function get() {
          return this._overlayRef;
        }
        /**
         * The element's layout direction.
         * @return {?}
         */

      }, {
        key: "dir",
        get: function get() {
          return this._dir ? this._dir.value : 'ltr';
        }
      }]);

      return CdkConnectedOverlay;
    }();

    CdkConnectedOverlay.ɵfac = function CdkConnectedOverlay_Factory(t) {
      return new (t || CdkConnectedOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8));
    };

    CdkConnectedOverlay.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkConnectedOverlay,
      selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]],
      inputs: {
        viewportMargin: ["cdkConnectedOverlayViewportMargin", "viewportMargin"],
        open: ["cdkConnectedOverlayOpen", "open"],
        scrollStrategy: ["cdkConnectedOverlayScrollStrategy", "scrollStrategy"],
        offsetX: ["cdkConnectedOverlayOffsetX", "offsetX"],
        offsetY: ["cdkConnectedOverlayOffsetY", "offsetY"],
        hasBackdrop: ["cdkConnectedOverlayHasBackdrop", "hasBackdrop"],
        lockPosition: ["cdkConnectedOverlayLockPosition", "lockPosition"],
        flexibleDimensions: ["cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions"],
        growAfterOpen: ["cdkConnectedOverlayGrowAfterOpen", "growAfterOpen"],
        push: ["cdkConnectedOverlayPush", "push"],
        positions: ["cdkConnectedOverlayPositions", "positions"],
        origin: ["cdkConnectedOverlayOrigin", "origin"],
        positionStrategy: ["cdkConnectedOverlayPositionStrategy", "positionStrategy"],
        width: ["cdkConnectedOverlayWidth", "width"],
        height: ["cdkConnectedOverlayHeight", "height"],
        minWidth: ["cdkConnectedOverlayMinWidth", "minWidth"],
        minHeight: ["cdkConnectedOverlayMinHeight", "minHeight"],
        backdropClass: ["cdkConnectedOverlayBackdropClass", "backdropClass"],
        panelClass: ["cdkConnectedOverlayPanelClass", "panelClass"],
        transformOriginSelector: ["cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"]
      },
      outputs: {
        backdropClick: "backdropClick",
        positionChange: "positionChange",
        attach: "attach",
        detach: "detach",
        overlayKeydown: "overlayKeydown"
      },
      exportAs: ["cdkConnectedOverlay"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    CdkConnectedOverlay.ctorParameters = function () {
      return [{
        type: Overlay
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    CdkConnectedOverlay.propDecorators = {
      origin: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayOrigin']
      }],
      positions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayPositions']
      }],
      positionStrategy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayPositionStrategy']
      }],
      offsetX: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayOffsetX']
      }],
      offsetY: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayOffsetY']
      }],
      width: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayWidth']
      }],
      height: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayHeight']
      }],
      minWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayMinWidth']
      }],
      minHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayMinHeight']
      }],
      backdropClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayBackdropClass']
      }],
      panelClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayPanelClass']
      }],
      viewportMargin: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayViewportMargin']
      }],
      scrollStrategy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayScrollStrategy']
      }],
      open: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayOpen']
      }],
      transformOriginSelector: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayTransformOriginOn']
      }],
      hasBackdrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayHasBackdrop']
      }],
      lockPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayLockPosition']
      }],
      flexibleDimensions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayFlexibleDimensions']
      }],
      growAfterOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayGrowAfterOpen']
      }],
      push: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayPush']
      }],
      backdropClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      positionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      attach: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      detach: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      overlayKeydown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkConnectedOverlay, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
          exportAs: 'cdkConnectedOverlay'
        }]
      }], function () {
        return [{
          type: Overlay
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        viewportMargin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayViewportMargin']
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOpen']
        }],
        backdropClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        positionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        attach: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        detach: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        overlayKeydown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        scrollStrategy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayScrollStrategy']
        }],
        offsetX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOffsetX']
        }],
        offsetY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOffsetY']
        }],
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayHasBackdrop']
        }],
        lockPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayLockPosition']
        }],
        flexibleDimensions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayFlexibleDimensions']
        }],
        growAfterOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayGrowAfterOpen']
        }],
        push: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPush']
        }],
        positions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPositions']
        }],
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOrigin']
        }],
        positionStrategy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPositionStrategy']
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayWidth']
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayHeight']
        }],
        minWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayMinWidth']
        }],
        minHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayMinHeight']
        }],
        backdropClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayBackdropClass']
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPanelClass']
        }],
        transformOriginSelector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayTransformOriginOn']
        }]
      });
    })();

    if (false) {}
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */


    function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition();
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
      provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
      deps: [Overlay],
      useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/overlay-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var OverlayModule = function OverlayModule() {
      _classCallCheck(this, OverlayModule);
    };

    OverlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: OverlayModule
    });
    OverlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function OverlayModule_Factory(t) {
        return new (t || OverlayModule)();
      },
      providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER],
      imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OverlayModule, {
        declarations: function declarations() {
          return [CdkConnectedOverlay, CdkOverlayOrigin];
        },
        imports: function imports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]];
        },
        exports: function exports() {
          return [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
          exports: [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
          declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
          providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER]
        }]
      }], null, null);
    })();
    /**
     * @deprecated Use `OverlayModule` instead.
     * \@breaking-change 8.0.0
     * \@docs-private
     * @type {?}
     */


    var OVERLAY_PROVIDERS = [Overlay, OverlayPositionBuilder, OVERLAY_KEYBOARD_DISPATCHER_PROVIDER, OVERLAY_CONTAINER_PROVIDER, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER];
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/fullscreen-overlay-container.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Alternative to OverlayContainer that supports correct displaying of overlay elements in
     * Fullscreen mode
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
     *
     * Should be provided in the root component.
     */

    var FullscreenOverlayContainer = /*#__PURE__*/function (_OverlayContainer) {
      _inherits(FullscreenOverlayContainer, _OverlayContainer);

      var _super5 = _createSuper(FullscreenOverlayContainer);

      /**
       * @param {?} _document
       * @param {?=} platform
       */
      function FullscreenOverlayContainer(_document,
      /**
       * @deprecated `platform` parameter to become required.
       * @breaking-change 10.0.0
       */
      platform) {
        _classCallCheck(this, FullscreenOverlayContainer);

        return _super5.call(this, _document, platform);
      }
      /**
       * @return {?}
       */


      _createClass(FullscreenOverlayContainer, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(FullscreenOverlayContainer.prototype), "ngOnDestroy", this).call(this);

          if (this._fullScreenEventName && this._fullScreenListener) {
            this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
          }
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "_createContainer",
        value: function _createContainer() {
          var _this45 = this;

          _get(_getPrototypeOf(FullscreenOverlayContainer.prototype), "_createContainer", this).call(this);

          this._adjustParentForFullscreenChange();

          this._addFullscreenChangeListener(
          /**
          * @return {?}
          */
          function () {
            return _this45._adjustParentForFullscreenChange();
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_adjustParentForFullscreenChange",
        value: function _adjustParentForFullscreenChange() {
          if (!this._containerElement) {
            return;
          }
          /** @type {?} */


          var fullscreenElement = this.getFullscreenElement();
          /** @type {?} */

          var parent = fullscreenElement || this._document.body;
          parent.appendChild(this._containerElement);
        }
        /**
         * @private
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "_addFullscreenChangeListener",
        value: function _addFullscreenChangeListener(fn) {
          /** @type {?} */
          var eventName = this._getEventName();

          if (eventName) {
            if (this._fullScreenListener) {
              this._document.removeEventListener(eventName, this._fullScreenListener);
            }

            this._document.addEventListener(eventName, fn);

            this._fullScreenListener = fn;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getEventName",
        value: function _getEventName() {
          if (!this._fullScreenEventName) {
            /** @type {?} */
            var _document =
            /** @type {?} */
            this._document;

            if (_document.fullscreenEnabled) {
              this._fullScreenEventName = 'fullscreenchange';
            } else if (_document.webkitFullscreenEnabled) {
              this._fullScreenEventName = 'webkitfullscreenchange';
            } else if (_document.mozFullScreenEnabled) {
              this._fullScreenEventName = 'mozfullscreenchange';
            } else if (_document.msFullscreenEnabled) {
              this._fullScreenEventName = 'MSFullscreenChange';
            }
          }

          return this._fullScreenEventName;
        }
        /**
         * When the page is put into fullscreen mode, a specific element is specified.
         * Only that element and its children are visible when in fullscreen mode.
         * @return {?}
         */

      }, {
        key: "getFullscreenElement",
        value: function getFullscreenElement() {
          /** @type {?} */
          var _document =
          /** @type {?} */
          this._document;
          return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
        }
      }]);

      return FullscreenOverlayContainer;
    }(OverlayContainer);

    FullscreenOverlayContainer.ɵfac = function FullscreenOverlayContainer_Factory(t) {
      return new (t || FullscreenOverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
    };
    /** @nocollapse */


    FullscreenOverlayContainer.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };
    /** @nocollapse */


    FullscreenOverlayContainer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function FullscreenOverlayContainer_Factory() {
        return new FullscreenOverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      },
      token: FullscreenOverlayContainer,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FullscreenOverlayContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=overlay.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js ***!
    \*********************************************************************/

  /*! exports provided: Platform, PlatformModule, _getShadowRoot, _supportsShadowDom, getRtlScrollAxisType, getSupportedInputTypes, normalizePassiveListenerOptions, supportsPassiveEventListeners, supportsScrollBehavior */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015PlatformJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Platform", function () {
      return Platform;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlatformModule", function () {
      return PlatformModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_getShadowRoot", function () {
      return _getShadowRoot;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_supportsShadowDom", function () {
      return _supportsShadowDom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function () {
      return getRtlScrollAxisType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function () {
      return getSupportedInputTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function () {
      return normalizePassiveListenerOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function () {
      return supportsPassiveEventListeners;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function () {
      return supportsScrollBehavior;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/platform/platform.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Whether the current platform supports the V8 Break Iterator. The V8 check
    // is necessary to detect all Blink based browsers.

    /** @type {?} */


    var hasV8BreakIterator; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
    // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
    // the consumer is providing a polyfilled `Map`. See:
    // https://github.com/Microsoft/ChakraCore/issues/3189
    // https://github.com/angular/components/issues/15687

    try {
      hasV8BreakIterator = typeof Intl !== 'undefined' &&
      /** @type {?} */
      Intl.v8BreakIterator;
    } catch (_a) {
      hasV8BreakIterator = false;
    }
    /**
     * Service to detect the current platform by comparing the userAgent strings and
     * checking browser-specific global properties.
     */


    var Platform =
    /**
     * \@breaking-change 8.0.0 remove optional decorator
     * @param {?=} _platformId
     */
    function Platform(_platformId) {
      _classCallCheck(this, Platform);

      this._platformId = _platformId; // We want to use the Angular platform check because if the Document is shimmed
      // without the navigator, the following checks will fail. This is preferred because
      // sometimes the Document may be shimmed without the user's knowledge or intention

      /**
       * Whether the Angular application is being rendered in the browser.
       */

      this.isBrowser = this._platformId ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
      /**
       * Whether the current browser is Microsoft Edge.
       */

      this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
      /**
       * Whether the current rendering engine is Microsoft Trident.
       */

      this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent); // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.

      /**
       * Whether the current rendering engine is Blink.
       */

      this.BLINK = this.isBrowser && !!(
      /** @type {?} */
      window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT; // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
      // ensure that Webkit runs standalone and is not used as another engine's base.

      /**
       * Whether the current rendering engine is WebKit.
       */

      this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
      /**
       * Whether the current platform is Apple iOS.
       */

      this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window); // It's difficult to detect the plain Gecko engine, because most of the browsers identify
      // them self as Gecko-like browsers and modify the userAgent's according to that.
      // Since we only cover one explicit Firefox case, we can simply check for Firefox
      // instead of having an unstable check for Gecko.

      /**
       * Whether the current browser is Firefox.
       */

      this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
      /**
       * Whether the current platform is Android.
       */
      // Trident on mobile adds the android platform to the userAgent to trick detections.

      this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT; // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
      // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
      // Safari browser should also use Webkit as its layout engine.

      /**
       * Whether the current browser is Safari.
       */

      this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    };

    Platform.ɵfac = function Platform_Factory(t) {
      return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8));
    };
    /** @nocollapse */


    Platform.ctorParameters = function () {
      return [{
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }];
    };
    /** @nocollapse */


    Platform.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function Platform_Factory() {
        return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8));
      },
      token: Platform,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Platform, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/platform/platform-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var PlatformModule = function PlatformModule() {
      _classCallCheck(this, PlatformModule);
    };

    PlatformModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PlatformModule
    });
    PlatformModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PlatformModule_Factory(t) {
        return new (t || PlatformModule)();
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/platform/features/input-types.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Cached result Set of input types support by the current browser.
     * @type {?}
     */


    var supportedInputTypes;
    /**
     * Types of `<input>` that *might* be supported.
     * @type {?}
     */

    var candidateInputTypes = [// `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color', 'button', 'checkbox', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
    /**
     * @return {?} The input types supported by this browser.
     */

    function getSupportedInputTypes() {
      // Result is cached.
      if (supportedInputTypes) {
        return supportedInputTypes;
      } // We can't check if an input type is not supported until we're on the browser, so say that
      // everything is supported when not on the browser. We don't use `Platform` here since it's
      // just a helper function and can't inject it.


      if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
      }
      /** @type {?} */


      var featureTestInput = document.createElement('input');
      supportedInputTypes = new Set(candidateInputTypes.filter(
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
      }));
      return supportedInputTypes;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/platform/features/passive-listeners.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Cached result of whether the user's browser supports passive event listeners.
     * @type {?}
     */


    var supportsPassiveEvents;
    /**
     * Checks whether the user's browser supports passive event listeners.
     * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
     * @return {?}
     */

    function supportsPassiveEventListeners() {
      if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
          window.addEventListener('test',
          /** @type {?} */
          null, Object.defineProperty({}, 'passive', {
            get:
            /**
            * @return {?}
            */
            function get() {
              return supportsPassiveEvents = true;
            }
          }));
        } finally {
          supportsPassiveEvents = supportsPassiveEvents || false;
        }
      }

      return supportsPassiveEvents;
    }
    /**
     * Normalizes an `AddEventListener` object to something that can be passed
     * to `addEventListener` on any browser, no matter whether it supports the
     * `options` parameter.
     * @param {?} options Object to be normalized.
     * @return {?}
     */


    function normalizePassiveListenerOptions(options) {
      return supportsPassiveEventListeners() ? options : !!options.capture;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/platform/features/scrolling.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** @enum {number} */


    var RtlScrollAxisType = {
      /**
       * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
       * all the way right.
       */
      NORMAL: 0,

      /**
       * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
       * all the way right.
       */
      NEGATED: 1,

      /**
       * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
       * all the way right.
       */
      INVERTED: 2
    };
    /**
     * Cached result of the way the browser handles the horizontal scroll axis in RTL mode.
     * @type {?}
     */

    var rtlScrollAxisType;
    /**
     * Check whether the browser supports scroll behaviors.
     * @return {?}
     */

    function supportsScrollBehavior() {
      return !!(typeof document == 'object' && 'scrollBehavior' in
      /** @type {?} */
      document.documentElement.style);
    }
    /**
     * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
     * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
     * @return {?}
     */


    function getRtlScrollAxisType() {
      // We can't check unless we're on the browser. Just assume 'normal' if we're not.
      if (typeof document !== 'object' || !document) {
        return 0
        /* NORMAL */
        ;
      }

      if (rtlScrollAxisType == null) {
        // Create a 1px wide scrolling container and a 2px wide content element.

        /** @type {?} */
        var scrollContainer = document.createElement('div');
        /** @type {?} */

        var containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.height = '1px';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        /** @type {?} */

        var content = document.createElement('div');
        /** @type {?} */

        var contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = 0
        /* NORMAL */
        ; // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.

        if (scrollContainer.scrollLeft === 0) {
          // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
          // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
          // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
          // return 0 when we read it again.
          scrollContainer.scrollLeft = 1;
          rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? 1
          /* NEGATED */
          : 2
          /* INVERTED */
          ;
        }

        /** @type {?} */
        scrollContainer.parentNode.removeChild(scrollContainer);
      }

      return rtlScrollAxisType;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/platform/features/shadow-dom.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** @type {?} */


    var shadowDomIsSupported;
    /**
     * Checks whether the user's browser support Shadow DOM.
     * @return {?}
     */

    function _supportsShadowDom() {
      if (shadowDomIsSupported == null) {
        /** @type {?} */
        var head = typeof document !== 'undefined' ? document.head : null;
        shadowDomIsSupported = !!(head && (
        /** @type {?} */
        head.createShadowRoot || head.attachShadow));
      }

      return shadowDomIsSupported;
    }
    /**
     * Gets the shadow root of an element, if supported and the element is inside the Shadow DOM.
     * @param {?} element
     * @return {?}
     */


    function _getShadowRoot(element) {
      if (_supportsShadowDom()) {
        /** @type {?} */
        var rootNode = element.getRootNode ? element.getRootNode() : null; // Note that this should be caught by `_supportsShadowDom`, but some
        // teams have been able to hit this code path on unsupported browsers.

        if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
          return rootNode;
        }
      }

      return null;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/platform/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=platform.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js ***!
    \*******************************************************************/

  /*! exports provided: BasePortalHost, BasePortalOutlet, CdkPortal, CdkPortalOutlet, ComponentPortal, DomPortal, DomPortalHost, DomPortalOutlet, Portal, PortalHostDirective, PortalInjector, PortalModule, TemplatePortal, TemplatePortalDirective */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015PortalJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasePortalHost", function () {
      return BasePortalHost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasePortalOutlet", function () {
      return BasePortalOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkPortal", function () {
      return CdkPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet", function () {
      return CdkPortalOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentPortal", function () {
      return ComponentPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomPortal", function () {
      return DomPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomPortalHost", function () {
      return DomPortalHost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomPortalOutlet", function () {
      return DomPortalOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Portal", function () {
      return Portal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalHostDirective", function () {
      return PortalHostDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalInjector", function () {
      return PortalInjector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalModule", function () {
      return PortalModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplatePortal", function () {
      return TemplatePortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplatePortalDirective", function () {
      return TemplatePortalDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/portal/portal-errors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Throws an exception when attempting to attach a null portal to a host.
     * \@docs-private
     * @return {?}
     */


    function throwNullPortalError() {
      throw Error('Must provide a portal to attach');
    }
    /**
     * Throws an exception when attempting to attach a portal to a host that is already attached.
     * \@docs-private
     * @return {?}
     */


    function throwPortalAlreadyAttachedError() {
      throw Error('Host already has a portal attached');
    }
    /**
     * Throws an exception when attempting to attach a portal to an already-disposed host.
     * \@docs-private
     * @return {?}
     */


    function throwPortalOutletAlreadyDisposedError() {
      throw Error('This PortalOutlet has already been disposed');
    }
    /**
     * Throws an exception when attempting to attach an unknown portal type.
     * \@docs-private
     * @return {?}
     */


    function throwUnknownPortalTypeError() {
      throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' + 'a ComponentPortal or a TemplatePortal.');
    }
    /**
     * Throws an exception when attempting to attach a portal to a null host.
     * \@docs-private
     * @return {?}
     */


    function throwNullPortalOutletError() {
      throw Error('Attempting to attach a portal to a null PortalOutlet');
    }
    /**
     * Throws an exception when attempting to detach a portal that is not attached.
     * \@docs-private
     * @return {?}
     */


    function throwNoPortalAttachedError() {
      throw Error('Attempting to detach a portal that is not attached to a host');
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/portal/portal.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Interface that can be used to generically type a class.
     * @record
     * @template T
     */


    function ComponentType() {}
    /**
     * A `Portal` is something that you want to render somewhere else.
     * It can be attach to / detached from a `PortalOutlet`.
     * @abstract
     * @template T
     */


    var Portal = /*#__PURE__*/function () {
      function Portal() {
        _classCallCheck(this, Portal);
      }

      _createClass(Portal, [{
        key: "attach",

        /**
         * Attach this portal to a host.
         * @param {?} host
         * @return {?}
         */
        value: function attach(host) {
          if (host == null) {
            throwNullPortalOutletError();
          }

          if (host.hasAttached()) {
            throwPortalAlreadyAttachedError();
          }

          this._attachedHost = host;
          return (
            /** @type {?} */
            host.attach(this)
          );
        }
        /**
         * Detach this portal from its host
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          /** @type {?} */
          var host = this._attachedHost;

          if (host == null) {
            throwNoPortalAttachedError();
          } else {
            this._attachedHost = null;
            host.detach();
          }
        }
        /**
         * Whether this portal is attached to a host.
         * @return {?}
         */

      }, {
        key: "setAttachedHost",

        /**
         * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
         * the PortalOutlet when it is performing an `attach()` or `detach()`.
         * @param {?} host
         * @return {?}
         */
        value: function setAttachedHost(host) {
          this._attachedHost = host;
        }
      }, {
        key: "isAttached",
        get: function get() {
          return this._attachedHost != null;
        }
      }]);

      return Portal;
    }();

    if (false) {}
    /**
     * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
     * @template T
     */


    var ComponentPortal = /*#__PURE__*/function (_Portal) {
      _inherits(ComponentPortal, _Portal);

      var _super6 = _createSuper(ComponentPortal);

      /**
       * @param {?} component
       * @param {?=} viewContainerRef
       * @param {?=} injector
       * @param {?=} componentFactoryResolver
       */
      function ComponentPortal(component, viewContainerRef, injector, componentFactoryResolver) {
        var _this46;

        _classCallCheck(this, ComponentPortal);

        _this46 = _super6.call(this);
        _this46.component = component;
        _this46.viewContainerRef = viewContainerRef;
        _this46.injector = injector;
        _this46.componentFactoryResolver = componentFactoryResolver;
        return _this46;
      }

      return ComponentPortal;
    }(Portal);

    if (false) {}
    /**
     * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
     * @template C
     */


    var TemplatePortal = /*#__PURE__*/function (_Portal2) {
      _inherits(TemplatePortal, _Portal2);

      var _super7 = _createSuper(TemplatePortal);

      /**
       * @param {?} template
       * @param {?} viewContainerRef
       * @param {?=} context
       */
      function TemplatePortal(template, viewContainerRef, context) {
        var _this47;

        _classCallCheck(this, TemplatePortal);

        _this47 = _super7.call(this);
        _this47.templateRef = template;
        _this47.viewContainerRef = viewContainerRef;
        _this47.context = context;
        return _this47;
      }
      /**
       * @return {?}
       */


      _createClass(TemplatePortal, [{
        key: "attach",

        /**
         * Attach the portal to the provided `PortalOutlet`.
         * When a context is provided it will override the `context` property of the `TemplatePortal`
         * instance.
         * @param {?} host
         * @param {?=} context
         * @return {?}
         */
        value: function attach(host) {
          var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;
          this.context = context;
          return _get(_getPrototypeOf(TemplatePortal.prototype), "attach", this).call(this, host);
        }
        /**
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this.context = undefined;
          return _get(_getPrototypeOf(TemplatePortal.prototype), "detach", this).call(this);
        }
      }, {
        key: "origin",
        get: function get() {
          return this.templateRef.elementRef;
        }
      }]);

      return TemplatePortal;
    }(Portal);

    if (false) {}
    /**
     * A `DomPortal` is a portal whose DOM element will be taken from its current position
     * in the DOM and moved into a portal outlet, when it is attached. On detach, the content
     * will be restored to its original position.
     * @template T
     */


    var DomPortal = /*#__PURE__*/function (_Portal3) {
      _inherits(DomPortal, _Portal3);

      var _super8 = _createSuper(DomPortal);

      /**
       * @param {?} element
       */
      function DomPortal(element) {
        var _this48;

        _classCallCheck(this, DomPortal);

        _this48 = _super8.call(this);
        _this48.element = element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? element.nativeElement : element;
        return _this48;
      }

      return DomPortal;
    }(Portal);

    if (false) {}
    /**
     * A `PortalOutlet` is an space that can contain a single `Portal`.
     * @record
     */


    function PortalOutlet() {}

    if (false) {}
    /**
     * Partial implementation of PortalOutlet that handles attaching
     * ComponentPortal and TemplatePortal.
     * @abstract
     */


    var BasePortalOutlet = /*#__PURE__*/function () {
      function BasePortalOutlet() {
        _classCallCheck(this, BasePortalOutlet);

        /**
         * Whether this host has already been permanently disposed.
         */
        this._isDisposed = false; // @breaking-change 10.0.0 `attachDomPortal` to become a required abstract method.

        this.attachDomPortal = null;
      }
      /**
       * Whether this host has an attached portal.
       * @return {?}
       */


      _createClass(BasePortalOutlet, [{
        key: "hasAttached",
        value: function hasAttached() {
          return !!this._attachedPortal;
        }
        /**
         * Attaches a portal.
         * @param {?} portal
         * @return {?}
         */

      }, {
        key: "attach",
        value: function attach(portal) {
          if (!portal) {
            throwNullPortalError();
          }

          if (this.hasAttached()) {
            throwPortalAlreadyAttachedError();
          }

          if (this._isDisposed) {
            throwPortalOutletAlreadyDisposedError();
          }

          if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
          } else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal); // @breaking-change 10.0.0 remove null check for `this.attachDomPortal`.
          } else if (this.attachDomPortal && portal instanceof DomPortal) {
            this._attachedPortal = portal;
            return this.attachDomPortal(portal);
          }

          throwUnknownPortalTypeError();
        }
        /**
         * Detaches a previously attached portal.
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);

            this._attachedPortal = null;
          }

          this._invokeDisposeFn();
        }
        /**
         * Permanently dispose of this portal host.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this.hasAttached()) {
            this.detach();
          }

          this._invokeDisposeFn();

          this._isDisposed = true;
        }
        /**
         * \@docs-private
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "setDisposeFn",
        value: function setDisposeFn(fn) {
          this._disposeFn = fn;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_invokeDisposeFn",
        value: function _invokeDisposeFn() {
          if (this._disposeFn) {
            this._disposeFn();

            this._disposeFn = null;
          }
        }
      }]);

      return BasePortalOutlet;
    }();

    if (false) {}
    /**
     * @deprecated Use `BasePortalOutlet` instead.
     * \@breaking-change 9.0.0
     * @abstract
     */


    var BasePortalHost = /*#__PURE__*/function (_BasePortalOutlet) {
      _inherits(BasePortalHost, _BasePortalOutlet);

      var _super9 = _createSuper(BasePortalHost);

      function BasePortalHost() {
        _classCallCheck(this, BasePortalHost);

        return _super9.apply(this, arguments);
      }

      return BasePortalHost;
    }(BasePortalOutlet);
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/portal/dom-portal-outlet.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
     * application context.
     */


    var DomPortalOutlet = /*#__PURE__*/function (_BasePortalOutlet2) {
      _inherits(DomPortalOutlet, _BasePortalOutlet2);

      var _super10 = _createSuper(DomPortalOutlet);

      /**
       * @param {?} outletElement
       * @param {?} _componentFactoryResolver
       * @param {?} _appRef
       * @param {?} _defaultInjector
       * @param {?=} _document
       */
      function DomPortalOutlet(outletElement, _componentFactoryResolver, _appRef, _defaultInjector,
      /**
       * @deprecated `_document` Parameter to be made required.
       * @breaking-change 10.0.0
       */
      _document) {
        var _thisSuper, _this49;

        _classCallCheck(this, DomPortalOutlet);

        _this49 = _super10.call(this);
        _this49.outletElement = outletElement;
        _this49._componentFactoryResolver = _componentFactoryResolver;
        _this49._appRef = _appRef;
        _this49._defaultInjector = _defaultInjector;
        /**
         * Attaches a DOM portal by transferring its content into the outlet.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * \@breaking-change 10.0.0
         */

        _this49.attachDomPortal =
        /**
        * @param {?} portal
        * @return {?}
        */
        function (portal) {
          // @breaking-change 10.0.0 Remove check and error once the
          // `_document` constructor parameter is required.
          if (!_this49._document) {
            throw Error('Cannot attach DOM portal without _document constructor parameter');
          }
          /** @type {?} */


          var element = portal.element;

          if (!element.parentNode) {
            throw Error('DOM portal content must be attached to a parent node.');
          } // Anchor used to save the element's previous position so
          // that we can restore it when the portal is detached.

          /** @type {?} */


          var anchorNode = _this49._document.createComment('dom-portal');

          element.parentNode.insertBefore(anchorNode, element);

          _this49.outletElement.appendChild(element);

          _get((_thisSuper = _assertThisInitialized(_this49), _getPrototypeOf(DomPortalOutlet.prototype)), "setDisposeFn", _thisSuper).call(_thisSuper,
          /**
          * @return {?}
          */
          function () {
            // We can't use `replaceWith` here because IE doesn't support it.
            if (anchorNode.parentNode) {
              anchorNode.parentNode.replaceChild(element, anchorNode);
            }
          });
        };

        _this49._document = _document;
        return _this49;
      }
      /**
       * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
       * @template T
       * @param {?} portal Portal to be attached
       * @return {?} Reference to the created component.
       */


      _createClass(DomPortalOutlet, [{
        key: "attachComponentPortal",
        value: function attachComponentPortal(portal) {
          var _this50 = this;

          /** @type {?} */
          var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
          /** @type {?} */

          var componentFactory = resolver.resolveComponentFactory(portal.component);
          /** @type {?} */

          var componentRef; // If the portal specifies a ViewContainerRef, we will use that as the attachment point
          // for the component (in terms of Angular's component tree, not rendering).
          // When the ViewContainerRef is missing, we use the factory to create the component directly
          // and then manually attach the view to the application.

          if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector);
            this.setDisposeFn(
            /**
            * @return {?}
            */
            function () {
              return componentRef.destroy();
            });
          } else {
            componentRef = componentFactory.create(portal.injector || this._defaultInjector);

            this._appRef.attachView(componentRef.hostView);

            this.setDisposeFn(
            /**
            * @return {?}
            */
            function () {
              _this50._appRef.detachView(componentRef.hostView);

              componentRef.destroy();
            });
          } // At this point the component has been instantiated, so we move it to the location in the DOM
          // where we want it to be rendered.


          this.outletElement.appendChild(this._getComponentRootNode(componentRef));
          return componentRef;
        }
        /**
         * Attaches a template portal to the DOM as an embedded view.
         * @template C
         * @param {?} portal Portal to be attached.
         * @return {?} Reference to the created embedded view.
         */

      }, {
        key: "attachTemplatePortal",
        value: function attachTemplatePortal(portal) {
          var _this51 = this;

          /** @type {?} */
          var viewContainer = portal.viewContainerRef;
          /** @type {?} */

          var viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context);
          viewRef.detectChanges(); // The method `createEmbeddedView` will add the view as a child of the viewContainer.
          // But for the DomPortalOutlet the view can be added everywhere in the DOM
          // (e.g Overlay Container) To move the view to the specified host element. We just
          // re-append the existing root nodes.

          viewRef.rootNodes.forEach(
          /**
          * @param {?} rootNode
          * @return {?}
          */
          function (rootNode) {
            return _this51.outletElement.appendChild(rootNode);
          });
          this.setDisposeFn(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var index = viewContainer.indexOf(viewRef);

            if (index !== -1) {
              viewContainer.remove(index);
            }
          }); // TODO(jelbourn): Return locals from view.

          return viewRef;
        }
        /**
         * Clears out a portal from the DOM.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          _get(_getPrototypeOf(DomPortalOutlet.prototype), "dispose", this).call(this);

          if (this.outletElement.parentNode != null) {
            this.outletElement.parentNode.removeChild(this.outletElement);
          }
        }
        /**
         * Gets the root HTMLElement for an instantiated component.
         * @private
         * @param {?} componentRef
         * @return {?}
         */

      }, {
        key: "_getComponentRootNode",
        value: function _getComponentRootNode(componentRef) {
          return (
            /** @type {?} */

            /** @type {?} */
            componentRef.hostView.rootNodes[0]
          );
        }
      }]);

      return DomPortalOutlet;
    }(BasePortalOutlet);

    if (false) {}
    /**
     * @deprecated Use `DomPortalOutlet` instead.
     * \@breaking-change 9.0.0
     */


    var DomPortalHost = /*#__PURE__*/function (_DomPortalOutlet) {
      _inherits(DomPortalHost, _DomPortalOutlet);

      var _super11 = _createSuper(DomPortalHost);

      function DomPortalHost() {
        _classCallCheck(this, DomPortalHost);

        return _super11.apply(this, arguments);
      }

      return DomPortalHost;
    }(DomPortalOutlet);
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/portal/portal-directives.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
     * the directive instance itself can be attached to a host, enabling declarative use of portals.
     */


    var CdkPortal = /*#__PURE__*/function (_TemplatePortal) {
      _inherits(CdkPortal, _TemplatePortal);

      var _super12 = _createSuper(CdkPortal);

      /**
       * @param {?} templateRef
       * @param {?} viewContainerRef
       */
      function CdkPortal(templateRef, viewContainerRef) {
        _classCallCheck(this, CdkPortal);

        return _super12.call(this, templateRef, viewContainerRef);
      }

      return CdkPortal;
    }(TemplatePortal);

    CdkPortal.ɵfac = function CdkPortal_Factory(t) {
      return new (t || CdkPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
    };

    CdkPortal.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkPortal,
      selectors: [["", "cdkPortal", ""]],
      exportAs: ["cdkPortal"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    CdkPortal.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdkPortal]',
          exportAs: 'cdkPortal'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      }, null);
    })();
    /**
     * @deprecated Use `CdkPortal` instead.
     * \@breaking-change 9.0.0
     */


    var TemplatePortalDirective = /*#__PURE__*/function (_CdkPortal) {
      _inherits(TemplatePortalDirective, _CdkPortal);

      var _super13 = _createSuper(TemplatePortalDirective);

      function TemplatePortalDirective() {
        _classCallCheck(this, TemplatePortalDirective);

        return _super13.apply(this, arguments);
      }

      return TemplatePortalDirective;
    }(CdkPortal);

    TemplatePortalDirective.ɵfac = function TemplatePortalDirective_Factory(t) {
      return ɵTemplatePortalDirective_BaseFactory(t || TemplatePortalDirective);
    };

    TemplatePortalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TemplatePortalDirective,
      selectors: [["", "cdk-portal", ""], ["", "portal", ""]],
      exportAs: ["cdkPortal"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CdkPortal,
        useExisting: TemplatePortalDirective
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵTemplatePortalDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TemplatePortalDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplatePortalDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdk-portal], [portal]',
          exportAs: 'cdkPortal',
          providers: [{
            provide: CdkPortal,
            useExisting: TemplatePortalDirective
          }]
        }]
      }], null, null);
    })();
    /**
     * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
     * directly attached to it, enabling declarative use.
     *
     * Usage:
     * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
     */


    var CdkPortalOutlet = /*#__PURE__*/function (_BasePortalOutlet3) {
      _inherits(CdkPortalOutlet, _BasePortalOutlet3);

      var _super14 = _createSuper(CdkPortalOutlet);

      /**
       * @param {?} _componentFactoryResolver
       * @param {?} _viewContainerRef
       * @param {?=} _document
       */
      function CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef,
      /**
       * @deprecated `_document` parameter to be made required.
       * @breaking-change 9.0.0
       */
      _document) {
        var _thisSuper2, _this52;

        _classCallCheck(this, CdkPortalOutlet);

        _this52 = _super14.call(this);
        _this52._componentFactoryResolver = _componentFactoryResolver;
        _this52._viewContainerRef = _viewContainerRef;
        /**
         * Whether the portal component is initialized.
         */

        _this52._isInitialized = false;
        /**
         * Emits when a portal is attached to the outlet.
         */

        _this52.attached = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * \@breaking-change 10.0.0
         */

        _this52.attachDomPortal =
        /**
        * @param {?} portal
        * @return {?}
        */
        function (portal) {
          // @breaking-change 9.0.0 Remove check and error once the
          // `_document` constructor parameter is required.
          if (!_this52._document) {
            throw Error('Cannot attach DOM portal without _document constructor parameter');
          }
          /** @type {?} */


          var element = portal.element;

          if (!element.parentNode) {
            throw Error('DOM portal content must be attached to a parent node.');
          } // Anchor used to save the element's previous position so
          // that we can restore it when the portal is detached.

          /** @type {?} */


          var anchorNode = _this52._document.createComment('dom-portal');

          portal.setAttachedHost(_assertThisInitialized(_this52));
          element.parentNode.insertBefore(anchorNode, element);

          _this52._getRootNode().appendChild(element);

          _get((_thisSuper2 = _assertThisInitialized(_this52), _getPrototypeOf(CdkPortalOutlet.prototype)), "setDisposeFn", _thisSuper2).call(_thisSuper2,
          /**
          * @return {?}
          */
          function () {
            if (anchorNode.parentNode) {
              /** @type {?} */
              anchorNode.parentNode.replaceChild(element, anchorNode);
            }
          });
        };

        _this52._document = _document;
        return _this52;
      }
      /**
       * Portal associated with the Portal outlet.
       * @return {?}
       */


      _createClass(CdkPortalOutlet, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._isInitialized = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(CdkPortalOutlet.prototype), "dispose", this).call(this);

          this._attachedPortal = null;
          this._attachedRef = null;
        }
        /**
         * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
         *
         * @template T
         * @param {?} portal Portal to be attached to the portal outlet.
         * @return {?} Reference to the created component.
         */

      }, {
        key: "attachComponentPortal",
        value: function attachComponentPortal(portal) {
          portal.setAttachedHost(this); // If the portal specifies an origin, use that as the logical location of the component
          // in the application tree. Otherwise use the location of this PortalOutlet.

          /** @type {?} */

          var viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
          /** @type {?} */

          var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
          /** @type {?} */

          var componentFactory = resolver.resolveComponentFactory(portal.component);
          /** @type {?} */

          var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector); // If we're using a view container that's different from the injected one (e.g. when the portal
          // specifies its own) we need to move the component into the outlet, otherwise it'll be rendered
          // inside of the alternate view container.

          if (viewContainerRef !== this._viewContainerRef) {
            this._getRootNode().appendChild(
            /** @type {?} */
            ref.hostView.rootNodes[0]);
          }

          _get(_getPrototypeOf(CdkPortalOutlet.prototype), "setDisposeFn", this).call(this,
          /**
          * @return {?}
          */
          function () {
            return ref.destroy();
          });

          this._attachedPortal = portal;
          this._attachedRef = ref;
          this.attached.emit(ref);
          return ref;
        }
        /**
         * Attach the given TemplatePortal to this PortalHost as an embedded View.
         * @template C
         * @param {?} portal Portal to be attached.
         * @return {?} Reference to the created embedded view.
         */

      }, {
        key: "attachTemplatePortal",
        value: function attachTemplatePortal(portal) {
          var _this53 = this;

          portal.setAttachedHost(this);
          /** @type {?} */

          var viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);

          _get(_getPrototypeOf(CdkPortalOutlet.prototype), "setDisposeFn", this).call(this,
          /**
          * @return {?}
          */
          function () {
            return _this53._viewContainerRef.clear();
          });

          this._attachedPortal = portal;
          this._attachedRef = viewRef;
          this.attached.emit(viewRef);
          return viewRef;
        }
        /**
         * Gets the root node of the portal outlet.
         * @private
         * @return {?}
         */

      }, {
        key: "_getRootNode",
        value: function _getRootNode() {
          /** @type {?} */
          var nativeElement = this._viewContainerRef.element.nativeElement; // The directive could be set on a template which will result in a comment
          // node being the root. Use the comment's parent node if that is the case.

          return (
            /** @type {?} */
            nativeElement.nodeType === nativeElement.ELEMENT_NODE ? nativeElement :
            /** @type {?} */
            nativeElement.parentNode
          );
        }
      }, {
        key: "portal",
        get: function get() {
          return this._attachedPortal;
        }
        /**
         * @param {?} portal
         * @return {?}
         */
        ,
        set: function set(portal) {
          // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
          // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
          // and attach a portal programmatically in the parent component. When Angular does the first CD
          // round, it will fire the setter with empty string, causing the user's content to be cleared.
          if (this.hasAttached() && !portal && !this._isInitialized) {
            return;
          }

          if (this.hasAttached()) {
            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "detach", this).call(this);
          }

          if (portal) {
            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "attach", this).call(this, portal);
          }

          this._attachedPortal = portal;
        }
        /**
         * Component or view reference that is attached to the portal.
         * @return {?}
         */

      }, {
        key: "attachedRef",
        get: function get() {
          return this._attachedRef;
        }
      }]);

      return CdkPortalOutlet;
    }(BasePortalOutlet);

    CdkPortalOutlet.ɵfac = function CdkPortalOutlet_Factory(t) {
      return new (t || CdkPortalOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };

    CdkPortalOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkPortalOutlet,
      selectors: [["", "cdkPortalOutlet", ""]],
      inputs: {
        portal: ["cdkPortalOutlet", "portal"]
      },
      outputs: {
        attached: "attached"
      },
      exportAs: ["cdkPortalOutlet"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    CdkPortalOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };

    CdkPortalOutlet.propDecorators = {
      attached: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortalOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdkPortalOutlet]',
          exportAs: 'cdkPortalOutlet',
          inputs: ['portal: cdkPortalOutlet']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, {
        attached: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();

    if (false) {}
    /**
     * @deprecated Use `CdkPortalOutlet` instead.
     * \@breaking-change 9.0.0
     */


    var PortalHostDirective = /*#__PURE__*/function (_CdkPortalOutlet) {
      _inherits(PortalHostDirective, _CdkPortalOutlet);

      var _super15 = _createSuper(PortalHostDirective);

      function PortalHostDirective() {
        _classCallCheck(this, PortalHostDirective);

        return _super15.apply(this, arguments);
      }

      return PortalHostDirective;
    }(CdkPortalOutlet);

    PortalHostDirective.ɵfac = function PortalHostDirective_Factory(t) {
      return ɵPortalHostDirective_BaseFactory(t || PortalHostDirective);
    };

    PortalHostDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: PortalHostDirective,
      selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]],
      inputs: {
        portal: ["cdkPortalHost", "portal"]
      },
      exportAs: ["cdkPortalHost"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CdkPortalOutlet,
        useExisting: PortalHostDirective
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵPortalHostDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PortalHostDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalHostDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdkPortalHost], [portalHost]',
          exportAs: 'cdkPortalHost',
          inputs: ['portal: cdkPortalHost'],
          providers: [{
            provide: CdkPortalOutlet,
            useExisting: PortalHostDirective
          }]
        }]
      }], null, null);
    })();

    var PortalModule = function PortalModule() {
      _classCallCheck(this, PortalModule);
    };

    PortalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PortalModule
    });
    PortalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PortalModule_Factory(t) {
        return new (t || PortalModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalModule, {
        declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
        exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
          declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/portal/portal-injector.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Custom injector to be used when providing custom
     * injection tokens to components inside a portal.
     * \@docs-private
     */


    var PortalInjector = /*#__PURE__*/function () {
      /**
       * @param {?} _parentInjector
       * @param {?} _customTokens
       */
      function PortalInjector(_parentInjector, _customTokens) {
        _classCallCheck(this, PortalInjector);

        this._parentInjector = _parentInjector;
        this._customTokens = _customTokens;
      }
      /**
       * @param {?} token
       * @param {?=} notFoundValue
       * @return {?}
       */


      _createClass(PortalInjector, [{
        key: "get",
        value: function get(token, notFoundValue) {
          /** @type {?} */
          var value = this._customTokens.get(token);

          if (typeof value !== 'undefined') {
            return value;
          }

          return this._parentInjector.get(token, notFoundValue);
        }
      }]);

      return PortalInjector;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/portal/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=portal.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js ***!
    \**********************************************************************/

  /*! exports provided: CdkFixedSizeVirtualScroll, CdkScrollable, CdkScrollableModule, CdkVirtualForOf, CdkVirtualScrollViewport, DEFAULT_RESIZE_TIME, DEFAULT_SCROLL_TIME, FixedSizeVirtualScrollStrategy, ScrollDispatcher, ScrollingModule, VIRTUAL_SCROLL_STRATEGY, ViewportRuler, _fixedSizeVirtualScrollStrategyFactory */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015ScrollingJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function () {
      return CdkFixedSizeVirtualScroll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
      return CdkScrollable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollableModule", function () {
      return CdkScrollableModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function () {
      return CdkVirtualForOf;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function () {
      return CdkVirtualScrollViewport;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function () {
      return DEFAULT_RESIZE_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function () {
      return DEFAULT_SCROLL_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function () {
      return FixedSizeVirtualScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
      return ScrollDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollingModule", function () {
      return ScrollingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function () {
      return VIRTUAL_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
      return ViewportRuler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function () {
      return _fixedSizeVirtualScrollStrategyFactory;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/virtual-scroll-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The injection token used to specify the virtual scrolling strategy.
     * @type {?}
     */


    var _c0 = ["contentWrapper"];
    var _c1 = ["*"];
    var VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');
    /**
     * A strategy that dictates which items should be rendered in the viewport.
     * @record
     */

    function VirtualScrollStrategy() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/fixed-size-virtual-scroll.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Virtual scrolling strategy for lists with items of known fixed size.
     */


    var FixedSizeVirtualScrollStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} itemSize The size of the items in the virtually scrolling list.
       * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
       * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
       */
      function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
        _classCallCheck(this, FixedSizeVirtualScrollStrategy);

        this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         */

        this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        /**
         * The attached viewport.
         */

        this._viewport = null;
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
      }
      /**
       * Attaches this scroll strategy to a viewport.
       * @param {?} viewport The viewport to attach this strategy to.
       * @return {?}
       */


      _createClass(FixedSizeVirtualScrollStrategy, [{
        key: "attach",
        value: function attach(viewport) {
          this._viewport = viewport;

          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /**
         * Detaches this scroll strategy from the currently attached viewport.
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this._scrolledIndexChange.complete();

          this._viewport = null;
        }
        /**
         * Update the item size and buffer size.
         * @param {?} itemSize The size of the items in the virtually scrolling list.
         * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
         * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
         * @return {?}
         */

      }, {
        key: "updateItemAndBufferSize",
        value: function updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
          if (maxBufferPx < minBufferPx) {
            throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
          }

          this._itemSize = itemSize;
          this._minBufferPx = minBufferPx;
          this._maxBufferPx = maxBufferPx;

          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onContentScrolled",
        value: function onContentScrolled() {
          this._updateRenderedRange();
        }
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onDataLengthChanged",
        value: function onDataLengthChanged() {
          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onContentRendered",
        value: function onContentRendered() {}
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onRenderedOffsetChanged",
        value: function onRenderedOffsetChanged() {}
        /**
         * Scroll to the offset for the given index.
         * @param {?} index The index of the element to scroll to.
         * @param {?} behavior The ScrollBehavior to use when scrolling.
         * @return {?}
         */

      }, {
        key: "scrollToIndex",
        value: function scrollToIndex(index, behavior) {
          if (this._viewport) {
            this._viewport.scrollToOffset(index * this._itemSize, behavior);
          }
        }
        /**
         * Update the viewport's total content size.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateTotalContentSize",
        value: function _updateTotalContentSize() {
          if (!this._viewport) {
            return;
          }

          this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
        }
        /**
         * Update the viewport's rendered range.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateRenderedRange",
        value: function _updateRenderedRange() {
          if (!this._viewport) {
            return;
          }
          /** @type {?} */


          var scrollOffset = this._viewport.measureScrollOffset();
          /** @type {?} */


          var firstVisibleIndex = scrollOffset / this._itemSize;
          /** @type {?} */

          var renderedRange = this._viewport.getRenderedRange();
          /** @type {?} */


          var newRange = {
            start: renderedRange.start,
            end: renderedRange.end
          };
          /** @type {?} */

          var viewportSize = this._viewport.getViewportSize();
          /** @type {?} */


          var dataLength = this._viewport.getDataLength();
          /** @type {?} */


          var startBuffer = scrollOffset - newRange.start * this._itemSize;

          if (startBuffer < this._minBufferPx && newRange.start != 0) {
            /** @type {?} */
            var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
            newRange.start = Math.max(0, newRange.start - expandStart);
            newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
          } else {
            /** @type {?} */
            var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);

            if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
              /** @type {?} */
              var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);

              if (expandEnd > 0) {
                newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
              }
            }
          }

          this._viewport.setRenderedRange(newRange);

          this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);

          this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
        }
      }]);

      return FixedSizeVirtualScrollStrategy;
    }();

    if (false) {}
    /**
     * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
     * `FixedSizeVirtualScrollStrategy` from the given directive.
     * @param {?} fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
     *     `FixedSizeVirtualScrollStrategy` from.
     * @return {?}
     */


    function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
      return fixedSizeDir._scrollStrategy;
    }
    /**
     * A virtual scroll strategy that supports fixed-size items.
     */


    var CdkFixedSizeVirtualScroll = /*#__PURE__*/function () {
      function CdkFixedSizeVirtualScroll() {
        _classCallCheck(this, CdkFixedSizeVirtualScroll);

        this._itemSize = 20;
        this._minBufferPx = 100;
        this._maxBufferPx = 200;
        /**
         * The scroll strategy used by this directive.
         */

        this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
      }
      /**
       * The size of the items in the list (in pixels).
       * @return {?}
       */


      _createClass(CdkFixedSizeVirtualScroll, [{
        key: "ngOnChanges",

        /**
         * @return {?}
         */
        value: function ngOnChanges() {
          this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
        }
      }, {
        key: "itemSize",
        get: function get() {
          return this._itemSize;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        }
        /**
         * The minimum amount of buffer rendered beyond the viewport (in pixels).
         * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
         * @return {?}
         */

      }, {
        key: "minBufferPx",
        get: function get() {
          return this._minBufferPx;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        }
        /**
         * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
         * @return {?}
         */

      }, {
        key: "maxBufferPx",
        get: function get() {
          return this._maxBufferPx;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        }
      }]);

      return CdkFixedSizeVirtualScroll;
    }();

    CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) {
      return new (t || CdkFixedSizeVirtualScroll)();
    };

    CdkFixedSizeVirtualScroll.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkFixedSizeVirtualScroll,
      selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
      inputs: {
        itemSize: "itemSize",
        minBufferPx: "minBufferPx",
        maxBufferPx: "maxBufferPx"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return CdkFixedSizeVirtualScroll;
        })]
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    CdkFixedSizeVirtualScroll.propDecorators = {
      itemSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      minBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      maxBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkFixedSizeVirtualScroll, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'cdk-virtual-scroll-viewport[itemSize]',
          providers: [{
            provide: VIRTUAL_SCROLL_STRATEGY,
            useFactory: _fixedSizeVirtualScrollStrategyFactory,
            deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return CdkFixedSizeVirtualScroll;
            })]
          }]
        }]
      }], function () {
        return [];
      }, {
        itemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/scroll-dispatcher.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Time in ms to throttle the scrolling events by default.
     * @type {?}
     */


    var DEFAULT_SCROLL_TIME = 20;
    /**
     * Service contained all registered Scrollable references and emits an event when any one of the
     * Scrollable references emit a scrolled event.
     */

    var ScrollDispatcher = /*#__PURE__*/function () {
      /**
       * @param {?} _ngZone
       * @param {?} _platform
       * @param {?=} document
       */
      function ScrollDispatcher(_ngZone, _platform,
      /** @breaking-change 11.0.0 make document required */
      document) {
        _classCallCheck(this, ScrollDispatcher);

        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * Subject for notifying that a registered scrollable reference element has been scrolled.
         */

        this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Keeps track of the global `scroll` and `resize` subscriptions.
         */

        this._globalSubscription = null;
        /**
         * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
         */

        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */

        this.scrollContainers = new Map();
        this._document = document;
      }
      /**
       * Registers a scrollable instance with the service and listens for its scrolled events. When the
       * scrollable is scrolled, the service emits the event to its scrolled observable.
       * @param {?} scrollable Scrollable instance to be registered.
       * @return {?}
       */


      _createClass(ScrollDispatcher, [{
        key: "register",
        value: function register(scrollable) {
          var _this54 = this;

          if (!this.scrollContainers.has(scrollable)) {
            this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this54._scrolled.next(scrollable);
            }));
          }
        }
        /**
         * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
         * @param {?} scrollable Scrollable instance to be deregistered.
         * @return {?}
         */

      }, {
        key: "deregister",
        value: function deregister(scrollable) {
          /** @type {?} */
          var scrollableReference = this.scrollContainers.get(scrollable);

          if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers["delete"](scrollable);
          }
        }
        /**
         * Returns an observable that emits an event whenever any of the registered Scrollable
         * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
         * to override the default "throttle" time.
         *
         * **Note:** in order to avoid hitting change detection for every scroll event,
         * all of the events emitted from this stream will be run outside the Angular zone.
         * If you need to update any data bindings as a result of a scroll event, you have
         * to run the callback using `NgZone.run`.
         * @param {?=} auditTimeInMs
         * @return {?}
         */

      }, {
        key: "scrolled",
        value: function scrolled() {
          var _this55 = this;

          var auditTimeInMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCROLL_TIME;

          if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
          }

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            if (!_this55._globalSubscription) {
              _this55._addGlobalListener();
            } // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.

            /** @type {?} */


            var subscription = auditTimeInMs > 0 ? _this55._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) : _this55._scrolled.subscribe(observer);
            _this55._scrolledCount++;
            return (
              /**
              * @return {?}
              */
              function () {
                subscription.unsubscribe();
                _this55._scrolledCount--;

                if (!_this55._scrolledCount) {
                  _this55._removeGlobalListener();
                }
              }
            );
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this56 = this;

          this._removeGlobalListener();

          this.scrollContainers.forEach(
          /**
          * @param {?} _
          * @param {?} container
          * @return {?}
          */
          function (_, container) {
            return _this56.deregister(container);
          });

          this._scrolled.complete();
        }
        /**
         * Returns an observable that emits whenever any of the
         * scrollable ancestors of an element are scrolled.
         * @param {?} elementRef Element whose ancestors to listen for.
         * @param {?=} auditTimeInMs Time to throttle the scroll events.
         * @return {?}
         */

      }, {
        key: "ancestorScrolled",
        value: function ancestorScrolled(elementRef, auditTimeInMs) {
          /** @type {?} */
          var ancestors = this.getAncestorScrollContainers(elementRef);
          return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
          /**
          * @param {?} target
          * @return {?}
          */
          function (target) {
            return !target || ancestors.indexOf(target) > -1;
          }));
        }
        /**
         * Returns all registered Scrollables that contain the provided element.
         * @param {?} elementRef
         * @return {?}
         */

      }, {
        key: "getAncestorScrollContainers",
        value: function getAncestorScrollContainers(elementRef) {
          var _this57 = this;

          /** @type {?} */
          var scrollingContainers = [];
          this.scrollContainers.forEach(
          /**
          * @param {?} _subscription
          * @param {?} scrollable
          * @return {?}
          */
          function (_subscription, scrollable) {
            if (_this57._scrollableContainsElement(scrollable, elementRef)) {
              scrollingContainers.push(scrollable);
            }
          });
          return scrollingContainers;
        }
        /**
         * Access injected document if available or fallback to global document reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getDocument",
        value: function _getDocument() {
          return this._document || document;
        }
        /**
         * Use defaultView of injected document if available or fallback to global window reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          /** @type {?} */
          var doc = this._getDocument();

          return doc.defaultView || window;
        }
        /**
         * Returns true if the element is contained within the provided Scrollable.
         * @private
         * @param {?} scrollable
         * @param {?} elementRef
         * @return {?}
         */

      }, {
        key: "_scrollableContainsElement",
        value: function _scrollableContainsElement(scrollable, elementRef) {
          /** @type {?} */
          var element = elementRef.nativeElement;
          /** @type {?} */

          var scrollableElement = scrollable.getElementRef().nativeElement; // Traverse through the element parents until we reach null, checking if any of the elements
          // are the scrollable's element.

          do {
            if (element == scrollableElement) {
              return true;
            }
          } while (element =
          /** @type {?} */
          element.parentElement);

          return false;
        }
        /**
         * Sets up the global scroll listeners.
         * @private
         * @return {?}
         */

      }, {
        key: "_addGlobalListener",
        value: function _addGlobalListener() {
          var _this58 = this;

          this._globalSubscription = this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var window = _this58._getWindow();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this58._scrolled.next();
            });
          });
        }
        /**
         * Cleans up the global scroll listener.
         * @private
         * @return {?}
         */

      }, {
        key: "_removeGlobalListener",
        value: function _removeGlobalListener() {
          if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();

            this._globalSubscription = null;
          }
        }
      }]);

      return ScrollDispatcher;
    }();

    ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) {
      return new (t || ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
    };
    /** @nocollapse */


    ScrollDispatcher.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    ScrollDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ScrollDispatcher_Factory() {
        return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      },
      token: ScrollDispatcher,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/scrollable.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Sends an event when the directive's element is scrolled. Registers itself with the
     * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
     * can be listened to through the service.
     */


    var CdkScrollable = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       * @param {?} scrollDispatcher
       * @param {?} ngZone
       * @param {?=} dir
       */
      function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
        var _this59 = this;

        _classCallCheck(this, CdkScrollable);

        this.elementRef = elementRef;
        this.scrollDispatcher = scrollDispatcher;
        this.ngZone = ngZone;
        this.dir = dir;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          return _this59.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this59.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this59._destroyed)).subscribe(observer);
          });
        });
      }
      /**
       * @return {?}
       */


      _createClass(CdkScrollable, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.scrollDispatcher.register(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.scrollDispatcher.deregister(this);

          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Returns observable that emits when a scroll event is fired on the host element.
         * @return {?}
         */

      }, {
        key: "elementScrolled",
        value: function elementScrolled() {
          return this._elementScrolled;
        }
        /**
         * Gets the ElementRef for the viewport.
         * @return {?}
         */

      }, {
        key: "getElementRef",
        value: function getElementRef() {
          return this.elementRef;
        }
        /**
         * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
         * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
         * left and right always refer to the left and right side of the scrolling container irrespective
         * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
         * in an RTL context.
         * @param {?} options specified the offsets to scroll to.
         * @return {?}
         */

      }, {
        key: "scrollTo",
        value: function scrollTo(options) {
          /** @type {?} */
          var el = this.elementRef.nativeElement;
          /** @type {?} */

          var isRtl = this.dir && this.dir.value == 'rtl'; // Rewrite start & end offsets as right or left offsets.

          if (options.left == null) {
            options.left = isRtl ? options.end : options.start;
          }

          if (options.right == null) {
            options.right = isRtl ? options.start : options.end;
          } // Rewrite the bottom offset as a top offset.


          if (options.bottom != null) {
            /** @type {?} */
            options.top = el.scrollHeight - el.clientHeight - options.bottom;
          } // Rewrite the right offset as a left offset.


          if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != 0
          /* NORMAL */
          ) {
              if (options.left != null) {
                /** @type {?} */
                options.right = el.scrollWidth - el.clientWidth - options.left;
              }

              if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
              /* INVERTED */
              ) {
                  options.left = options.right;
                } else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
              /* NEGATED */
              ) {
                  options.left = options.right ? -options.right : options.right;
                }
            } else {
            if (options.right != null) {
              /** @type {?} */
              options.left = el.scrollWidth - el.clientWidth - options.right;
            }
          }

          this._applyScrollToOptions(options);
        }
        /**
         * @private
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "_applyScrollToOptions",
        value: function _applyScrollToOptions(options) {
          /** @type {?} */
          var el = this.elementRef.nativeElement;

          if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
            el.scrollTo(options);
          } else {
            if (options.top != null) {
              el.scrollTop = options.top;
            }

            if (options.left != null) {
              el.scrollLeft = options.left;
            }
          }
        }
        /**
         * Measures the scroll offset relative to the specified edge of the viewport. This method can be
         * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
         * about what scrollLeft means in RTL. The values returned by this method are normalized such that
         * left and right always refer to the left and right side of the scrolling container irrespective
         * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
         * in an RTL context.
         * @param {?} from The edge to measure from.
         * @return {?}
         */

      }, {
        key: "measureScrollOffset",
        value: function measureScrollOffset(from) {
          /** @type {?} */
          var LEFT = 'left';
          /** @type {?} */

          var RIGHT = 'right';
          /** @type {?} */

          var el = this.elementRef.nativeElement;

          if (from == 'top') {
            return el.scrollTop;
          }

          if (from == 'bottom') {
            return el.scrollHeight - el.clientHeight - el.scrollTop;
          } // Rewrite start & end as left or right offsets.

          /** @type {?} */


          var isRtl = this.dir && this.dir.value == 'rtl';

          if (from == 'start') {
            from = isRtl ? RIGHT : LEFT;
          } else if (from == 'end') {
            from = isRtl ? LEFT : RIGHT;
          }

          if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
          /* INVERTED */
          ) {
              // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
              // 0 when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
              } else {
                return el.scrollLeft;
              }
            } else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
          /* NEGATED */
          ) {
              // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
              // 0 when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollLeft + el.scrollWidth - el.clientWidth;
              } else {
                return -el.scrollLeft;
              }
            } else {
            // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
            // (scrollWidth - clientWidth) when scrolled all the way right.
            if (from == LEFT) {
              return el.scrollLeft;
            } else {
              return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
          }
        }
      }]);

      return CdkScrollable;
    }();

    CdkScrollable.ɵfac = function CdkScrollable_Factory(t) {
      return new (t || CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8));
    };

    CdkScrollable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkScrollable,
      selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
    });
    /** @nocollapse */

    CdkScrollable.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: ScrollDispatcher
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdk-scrollable], [cdkScrollable]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: ScrollDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/viewport-ruler.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Time in ms to throttle the resize events by default.
     * @type {?}
     */


    var DEFAULT_RESIZE_TIME = 20;
    /**
     * Object that holds the scroll position of the viewport in each direction.
     * @record
     */

    function ViewportScrollPosition() {}

    if (false) {}
    /**
     * Simple utility for getting the bounds of the browser viewport.
     * \@docs-private
     */


    var ViewportRuler = /*#__PURE__*/function () {
      /**
       * @param {?} _platform
       * @param {?} ngZone
       * @param {?=} document
       */
      function ViewportRuler(_platform, ngZone,
      /** @breaking-change 11.0.0 make document required */
      document) {
        var _this60 = this;

        _classCallCheck(this, ViewportRuler);

        this._platform = _platform;
        this._document = document;
        ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          var window = _this60._getWindow();

          _this60._change = _platform.isBrowser ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'orientationchange')) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(); // Note that we need to do the subscription inside `runOutsideAngular`
          // since subscribing is what causes the event listener to be added.

          _this60._invalidateCache = _this60.change().subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this60._updateViewportSize();
          });
        });
      }
      /**
       * @return {?}
       */


      _createClass(ViewportRuler, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._invalidateCache.unsubscribe();
        }
        /**
         * Returns the viewport's width and height.
         * @return {?}
         */

      }, {
        key: "getViewportSize",
        value: function getViewportSize() {
          if (!this._viewportSize) {
            this._updateViewportSize();
          }
          /** @type {?} */


          var output = {
            width: this._viewportSize.width,
            height: this._viewportSize.height
          }; // If we're not on a browser, don't cache the size since it'll be mocked out anyway.

          if (!this._platform.isBrowser) {
            this._viewportSize =
            /** @type {?} */
            null;
          }

          return output;
        }
        /**
         * Gets a ClientRect for the viewport's bounds.
         * @return {?}
         */

      }, {
        key: "getViewportRect",
        value: function getViewportRect() {
          // Use the document element's bounding rect rather than the window scroll properties
          // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
          // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
          // conceptual viewports. Under most circumstances these viewports are equivalent, but they
          // can disagree when the page is pinch-zoomed (on devices that support touch).
          // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
          // We use the documentElement instead of the body because, by default (without a css reset)
          // browsers typically give the document body an 8px margin, which is not included in
          // getBoundingClientRect().

          /** @type {?} */
          var scrollPosition = this.getViewportScrollPosition();

          var _this$getViewportSize = this.getViewportSize(),
              width = _this$getViewportSize.width,
              height = _this$getViewportSize.height;

          return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width
          };
        }
        /**
         * Gets the (top, left) scroll position of the viewport.
         * @return {?}
         */

      }, {
        key: "getViewportScrollPosition",
        value: function getViewportScrollPosition() {
          // While we can get a reference to the fake document
          // during SSR, it doesn't have getBoundingClientRect.
          if (!this._platform.isBrowser) {
            return {
              top: 0,
              left: 0
            };
          } // The top-left-corner of the viewport is determined by the scroll position of the document
          // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
          // whether `document.body` or `document.documentElement` is the scrolled element, so reading
          // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
          // `document.documentElement` works consistently, where the `top` and `left` values will
          // equal negative the scroll position.

          /** @type {?} */


          var document = this._getDocument();
          /** @type {?} */


          var window = this._getWindow();
          /** @type {?} */


          var documentElement =
          /** @type {?} */
          document.documentElement;
          /** @type {?} */

          var documentRect = documentElement.getBoundingClientRect();
          /** @type {?} */

          var top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
          /** @type {?} */

          var left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
          return {
            top: top,
            left: left
          };
        }
        /**
         * Returns a stream that emits whenever the size of the viewport changes.
         * @param {?=} throttleTime Time in milliseconds to throttle the stream.
         * @return {?}
         */

      }, {
        key: "change",
        value: function change() {
          var throttleTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_RESIZE_TIME;
          return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
        }
        /**
         * Access injected document if available or fallback to global document reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getDocument",
        value: function _getDocument() {
          return this._document || document;
        }
        /**
         * Use defaultView of injected document if available or fallback to global window reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          /** @type {?} */
          var doc = this._getDocument();

          return doc.defaultView || window;
        }
        /**
         * Updates the cached viewport size.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateViewportSize",
        value: function _updateViewportSize() {
          /** @type {?} */
          var window = this._getWindow();

          this._viewportSize = this._platform.isBrowser ? {
            width: window.innerWidth,
            height: window.innerHeight
          } : {
            width: 0,
            height: 0
          };
        }
      }]);

      return ViewportRuler;
    }();

    ViewportRuler.ɵfac = function ViewportRuler_Factory(t) {
      return new (t || ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
    };
    /** @nocollapse */


    ViewportRuler.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    ViewportRuler.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ViewportRuler_Factory() {
        return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      },
      token: ViewportRuler,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewportRuler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/virtual-scroll-viewport.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Checks if the given ranges are equal.
     * @param {?} r1
     * @param {?} r2
     * @return {?}
     */


    function rangesEqual(r1, r2) {
      return r1.start == r2.start && r1.end == r2.end;
    }
    /**
     * Scheduler to be used for scroll events. Needs to fall back to
     * something that doesn't rely on requestAnimationFrame on environments
     * that don't support it (e.g. server-side rendering).
     * @type {?}
     */


    var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
    /**
     * A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`.
     */

    var CdkVirtualScrollViewport = /*#__PURE__*/function (_CdkScrollable) {
      _inherits(CdkVirtualScrollViewport, _CdkScrollable);

      var _super16 = _createSuper(CdkVirtualScrollViewport);

      /**
       * @param {?} elementRef
       * @param {?} _changeDetectorRef
       * @param {?} ngZone
       * @param {?} _scrollStrategy
       * @param {?} dir
       * @param {?} scrollDispatcher
       * @param {?=} viewportRuler
       */
      function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher,
      /**
       * @deprecated `viewportRuler` parameter to become required.
       * @breaking-change 11.0.0
       */
      viewportRuler) {
        var _this61;

        _classCallCheck(this, CdkVirtualScrollViewport);

        _this61 = _super16.call(this, elementRef, scrollDispatcher, ngZone, dir);
        _this61.elementRef = elementRef;
        _this61._changeDetectorRef = _changeDetectorRef;
        _this61._scrollStrategy = _scrollStrategy;
        /**
         * Emits when the viewport is detached from a CdkVirtualForOf.
         */

        _this61._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the rendered range changes.
         */

        _this61._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this61._orientation = 'vertical'; // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
        // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
        // depending on how the strategy calculates the scrolled index, it may come at a cost to
        // performance.

        /**
         * Emits when the index of the first element visible in the viewport changes.
         */

        _this61.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          return _this61._scrollStrategy.scrolledIndexChange.subscribe(
          /**
          * @param {?} index
          * @return {?}
          */
          function (index) {
            return Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              return _this61.ngZone.run(
              /**
              * @return {?}
              */
              function () {
                return observer.next(index);
              });
            });
          });
        });
        /**
         * A stream that emits whenever the rendered range changes.
         */

        _this61.renderedRangeStream = _this61._renderedRangeSubject.asObservable();
        /**
         * The total size of all content (in pixels), including content that is not currently rendered.
         */

        _this61._totalContentSize = 0;
        /**
         * A string representing the `style.width` property value to be used for the spacer element.
         */

        _this61._totalContentWidth = '';
        /**
         * A string representing the `style.height` property value to be used for the spacer element.
         */

        _this61._totalContentHeight = '';
        /**
         * The currently rendered range of indices.
         */

        _this61._renderedRange = {
          start: 0,
          end: 0
        };
        /**
         * The length of the data bound to this viewport (in number of items).
         */

        _this61._dataLength = 0;
        /**
         * The size of the viewport (in pixels).
         */

        _this61._viewportSize = 0;
        /**
         * The last rendered content offset that was set.
         */

        _this61._renderedContentOffset = 0;
        /**
         * Whether the last rendered content offset was to the end of the content (and therefore needs to
         * be rewritten as an offset to the start of the content).
         */

        _this61._renderedContentOffsetNeedsRewrite = false;
        /**
         * Whether there is a pending change detection cycle.
         */

        _this61._isChangeDetectionPending = false;
        /**
         * A list of functions to run after the next change detection cycle.
         */

        _this61._runAfterChangeDetection = [];
        /**
         * Subscription to changes in the viewport size.
         */

        _this61._viewportChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;

        if (!_scrollStrategy) {
          throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        } // @breaking-change 11.0.0 Remove null check for `viewportRuler`.


        if (viewportRuler) {
          _this61._viewportChanges = viewportRuler.change().subscribe(
          /**
          * @return {?}
          */
          function () {
            _this61.checkViewportSize();
          });
        }

        return _this61;
      }
      /**
       * The direction the viewport scrolls.
       * @return {?}
       */


      _createClass(CdkVirtualScrollViewport, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this62 = this;

          _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnInit", this).call(this); // It's still too early to measure the viewport at this point. Deferring with a promise allows
          // the Viewport to be rendered with the correct size before we measure. We run this outside the
          // zone to avoid causing more change detection cycles. We handle the change detection loop
          // ourselves instead.


          this.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              _this62._measureViewportSize();

              _this62._scrollStrategy.attach(_this62);

              _this62.elementScrolled().pipe( // Start off with a fake scroll event so we properly detect our initial position.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(
              /** @type {?} */
              null), // Collect multiple events into one until the next animation frame. This way if
              // there are multiple scroll events in the same frame we only need to recheck
              // our layout once.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER)).subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this62._scrollStrategy.onContentScrolled();
              });

              _this62._markChangeDetectionNeeded();
            });
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.detach();

          this._scrollStrategy.detach(); // Complete all subjects


          this._renderedRangeSubject.complete();

          this._detachedSubject.complete();

          this._viewportChanges.unsubscribe();

          _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnDestroy", this).call(this);
        }
        /**
         * Attaches a `CdkVirtualForOf` to this viewport.
         * @param {?} forOf
         * @return {?}
         */

      }, {
        key: "attach",
        value: function attach(forOf) {
          var _this63 = this;

          if (this._forOf) {
            throw Error('CdkVirtualScrollViewport is already attached.');
          } // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
          // changes. Run outside the zone to avoid triggering change detection, since we're managing the
          // change detection loop ourselves.


          this.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this63._forOf = forOf;

            _this63._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this63._detachedSubject)).subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              /** @type {?} */
              var newLength = data.length;

              if (newLength !== _this63._dataLength) {
                _this63._dataLength = newLength;

                _this63._scrollStrategy.onDataLengthChanged();
              }

              _this63._doChangeDetection();
            });
          });
        }
        /**
         * Detaches the current `CdkVirtualForOf`.
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this._forOf = null;

          this._detachedSubject.next();
        }
        /**
         * Gets the length of the data bound to this viewport (in number of items).
         * @return {?}
         */

      }, {
        key: "getDataLength",
        value: function getDataLength() {
          return this._dataLength;
        }
        /**
         * Gets the size of the viewport (in pixels).
         * @return {?}
         */

      }, {
        key: "getViewportSize",
        value: function getViewportSize() {
          return this._viewportSize;
        } // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
        // cycle happens. I'm being careful to only call it after the render cycle is complete and before
        // setting it to something else, but its error prone and should probably be split into
        // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.

        /**
         * Get the current rendered range of items.
         * @return {?}
         */

      }, {
        key: "getRenderedRange",
        value: function getRenderedRange() {
          return this._renderedRange;
        }
        /**
         * Sets the total size of all content (in pixels), including content that is not currently
         * rendered.
         * @param {?} size
         * @return {?}
         */

      }, {
        key: "setTotalContentSize",
        value: function setTotalContentSize(size) {
          if (this._totalContentSize !== size) {
            this._totalContentSize = size;

            this._calculateSpacerSize();

            this._markChangeDetectionNeeded();
          }
        }
        /**
         * Sets the currently rendered range of indices.
         * @param {?} range
         * @return {?}
         */

      }, {
        key: "setRenderedRange",
        value: function setRenderedRange(range) {
          var _this64 = this;

          if (!rangesEqual(this._renderedRange, range)) {
            this._renderedRangeSubject.next(this._renderedRange = range);

            this._markChangeDetectionNeeded(
            /**
            * @return {?}
            */
            function () {
              return _this64._scrollStrategy.onContentRendered();
            });
          }
        }
        /**
         * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
         * @return {?}
         */

      }, {
        key: "getOffsetToRenderedContentStart",
        value: function getOffsetToRenderedContentStart() {
          return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
        }
        /**
         * Sets the offset from the start of the viewport to either the start or end of the rendered data
         * (in pixels).
         * @param {?} offset
         * @param {?=} to
         * @return {?}
         */

      }, {
        key: "setRenderedContentOffset",
        value: function setRenderedContentOffset(offset) {
          var _this65 = this;

          var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'to-start';
          // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
          // in the negative direction.

          /** @type {?} */
          var isRtl = this.dir && this.dir.value == 'rtl';
          /** @type {?} */

          var isHorizontal = this.orientation == 'horizontal';
          /** @type {?} */

          var axis = isHorizontal ? 'X' : 'Y';
          /** @type {?} */

          var axisDirection = isHorizontal && isRtl ? -1 : 1;
          /** @type {?} */

          var transform = "translate".concat(axis, "(").concat(Number(axisDirection * offset), "px)");
          this._renderedContentOffset = offset;

          if (to === 'to-end') {
            transform += " translate".concat(axis, "(-100%)"); // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
            // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
            // expand upward).

            this._renderedContentOffsetNeedsRewrite = true;
          }

          if (this._renderedContentTransform != transform) {
            // We know this value is safe because we parse `offset` with `Number()` before passing it
            // into the string.
            this._renderedContentTransform = transform;

            this._markChangeDetectionNeeded(
            /**
            * @return {?}
            */
            function () {
              if (_this65._renderedContentOffsetNeedsRewrite) {
                _this65._renderedContentOffset -= _this65.measureRenderedContentSize();
                _this65._renderedContentOffsetNeedsRewrite = false;

                _this65.setRenderedContentOffset(_this65._renderedContentOffset);
              } else {
                _this65._scrollStrategy.onRenderedOffsetChanged();
              }
            });
          }
        }
        /**
         * Scrolls to the given offset from the start of the viewport. Please note that this is not always
         * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
         * direction, this would be the equivalent of setting a fictional `scrollRight` property.
         * @param {?} offset The offset to scroll to.
         * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
         * @return {?}
         */

      }, {
        key: "scrollToOffset",
        value: function scrollToOffset(offset) {
          var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

          /** @type {?} */
          var options = {
            behavior: behavior
          };

          if (this.orientation === 'horizontal') {
            options.start = offset;
          } else {
            options.top = offset;
          }

          this.scrollTo(options);
        }
        /**
         * Scrolls to the offset for the given index.
         * @param {?} index The index of the element to scroll to.
         * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
         * @return {?}
         */

      }, {
        key: "scrollToIndex",
        value: function scrollToIndex(index) {
          var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

          this._scrollStrategy.scrollToIndex(index, behavior);
        }
        /**
         * Gets the current scroll offset from the start of the viewport (in pixels).
         * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
         *     in horizontal mode.
         * @return {?}
         */

      }, {
        key: "measureScrollOffset",
        value: function measureScrollOffset(from) {
          return from ? _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, from) : _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, this.orientation === 'horizontal' ? 'start' : 'top');
        }
        /**
         * Measure the combined size of all of the rendered items.
         * @return {?}
         */

      }, {
        key: "measureRenderedContentSize",
        value: function measureRenderedContentSize() {
          /** @type {?} */
          var contentEl = this._contentWrapper.nativeElement;
          return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
        }
        /**
         * Measure the total combined size of the given range. Throws if the range includes items that are
         * not rendered.
         * @param {?} range
         * @return {?}
         */

      }, {
        key: "measureRangeSize",
        value: function measureRangeSize(range) {
          if (!this._forOf) {
            return 0;
          }

          return this._forOf.measureRangeSize(range, this.orientation);
        }
        /**
         * Update the viewport dimensions and re-render.
         * @return {?}
         */

      }, {
        key: "checkViewportSize",
        value: function checkViewportSize() {
          // TODO: Cleanup later when add logic for handling content resize
          this._measureViewportSize();

          this._scrollStrategy.onDataLengthChanged();
        }
        /**
         * Measure the viewport size.
         * @private
         * @return {?}
         */

      }, {
        key: "_measureViewportSize",
        value: function _measureViewportSize() {
          /** @type {?} */
          var viewportEl = this.elementRef.nativeElement;
          this._viewportSize = this.orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
        }
        /**
         * Queue up change detection to run.
         * @private
         * @param {?=} runAfter
         * @return {?}
         */

      }, {
        key: "_markChangeDetectionNeeded",
        value: function _markChangeDetectionNeeded(runAfter) {
          var _this66 = this;

          if (runAfter) {
            this._runAfterChangeDetection.push(runAfter);
          } // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
          // properties sequentially we only have to run `_doChangeDetection` once at the end.


          if (!this._isChangeDetectionPending) {
            this._isChangeDetectionPending = true;
            this.ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                _this66._doChangeDetection();
              });
            });
          }
        }
        /**
         * Run change detection.
         * @private
         * @return {?}
         */

      }, {
        key: "_doChangeDetection",
        value: function _doChangeDetection() {
          var _this67 = this;

          this._isChangeDetectionPending = false; // Apply the content transform. The transform can't be set via an Angular binding because
          // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
          // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
          // the `Number` function first to coerce it to a numeric value.

          this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform; // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
          // from the root, since the repeated items are content projected in. Calling `detectChanges`
          // instead does not properly check the projected content.

          this.ngZone.run(
          /**
          * @return {?}
          */
          function () {
            return _this67._changeDetectorRef.markForCheck();
          });
          /** @type {?} */

          var runAfterChangeDetection = this._runAfterChangeDetection;
          this._runAfterChangeDetection = [];

          var _iterator4 = _createForOfIteratorHelper(runAfterChangeDetection),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var fn = _step4.value;
              fn();
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
        /**
         * Calculates the `style.width` and `style.height` for the spacer element.
         * @private
         * @return {?}
         */

      }, {
        key: "_calculateSpacerSize",
        value: function _calculateSpacerSize() {
          this._totalContentHeight = this.orientation === 'horizontal' ? '' : "".concat(this._totalContentSize, "px");
          this._totalContentWidth = this.orientation === 'horizontal' ? "".concat(this._totalContentSize, "px") : '';
        }
      }, {
        key: "orientation",
        get: function get() {
          return this._orientation;
        }
        /**
         * @param {?} orientation
         * @return {?}
         */
        ,
        set: function set(orientation) {
          if (this._orientation !== orientation) {
            this._orientation = orientation;

            this._calculateSpacerSize();
          }
        }
      }]);

      return CdkVirtualScrollViewport;
    }(CdkScrollable);

    CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) {
      return new (t || CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ViewportRuler, 8));
    };

    CdkVirtualScrollViewport.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CdkVirtualScrollViewport,
      selectors: [["cdk-virtual-scroll-viewport"]],
      viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
        }
      },
      hostAttrs: [1, "cdk-virtual-scroll-viewport"],
      hostVars: 4,
      hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
        }
      },
      inputs: {
        orientation: "orientation"
      },
      outputs: {
        scrolledIndexChange: "scrolledIndexChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: CdkScrollable,
        useExisting: CdkVirtualScrollViewport
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 4,
      consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]],
      template: function CdkVirtualScrollViewport_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
        }
      },
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    CdkVirtualScrollViewport.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [VIRTUAL_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: ScrollDispatcher
      }, {
        type: ViewportRuler,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    CdkVirtualScrollViewport.propDecorators = {
      orientation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      scrolledIndexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      _contentWrapper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['contentWrapper', {
          "static": true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualScrollViewport, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'cdk-virtual-scroll-viewport',
          template: "<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class=\"cdk-virtual-scroll-spacer\"\n     [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>\n",
          host: {
            'class': 'cdk-virtual-scroll-viewport',
            '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
            '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          providers: [{
            provide: CdkScrollable,
            useExisting: CdkVirtualScrollViewport
          }],
          styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [VIRTUAL_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: ScrollDispatcher
        }, {
          type: ViewportRuler,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        scrolledIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _contentWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['contentWrapper', {
            "static": true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/virtual-for-of.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Helper to extract size from a DOM Node.
     * @param {?} orientation
     * @param {?} node
     * @return {?}
     */


    function getSize(orientation, node) {
      /** @type {?} */
      var el =
      /** @type {?} */
      node;

      if (!el.getBoundingClientRect) {
        return 0;
      }
      /** @type {?} */


      var rect = el.getBoundingClientRect();
      return orientation == 'horizontal' ? rect.width : rect.height;
    }
    /**
     * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
     * container.
     * @template T
     */


    var CdkVirtualForOf = /*#__PURE__*/function () {
      /**
       * @param {?} _viewContainerRef
       * @param {?} _template
       * @param {?} _differs
       * @param {?} _viewport
       * @param {?} ngZone
       */
      function CdkVirtualForOf(_viewContainerRef, _template, _differs, _viewport, ngZone) {
        var _this68 = this;

        _classCallCheck(this, CdkVirtualForOf);

        this._viewContainerRef = _viewContainerRef;
        this._template = _template;
        this._differs = _differs;
        this._viewport = _viewport;
        /**
         * Emits when the rendered view of the data changes.
         */

        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject that emits when a new DataSource instance is given.
         */

        this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * The size of the cache used to store templates that are not being used for re-use later.
         * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
         */

        this.cdkVirtualForTemplateCacheSize = 20;
        /**
         * Emits whenever the data in the current DataSource changes.
         */

        this.dataStream = this._dataSourceChanges.pipe( // Start off with null `DataSource`.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(
        /** @type {?} */
        null), // Bundle up the previous and current data sources so we can work with both.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              prev = _ref2[0],
              cur = _ref2[1];

          return _this68._changeDataSource(prev, cur);
        }), // Replay the last emitted data when someone subscribes.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        /**
         * The differ used to calculate changes to the data.
         */

        this._differ = null;
        /**
         * The template cache used to hold on ot template instancess that have been stamped out, but don't
         * currently need to be rendered. These instances will be reused in the future rather than
         * stamping out brand new ones.
         */

        this._templateCache = [];
        /**
         * Whether the rendered data should be updated during the next ngDoCheck cycle.
         */

        this._needsUpdate = false;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataStream.subscribe(
        /**
        * @param {?} data
        * @return {?}
        */
        function (data) {
          _this68._data = data;

          _this68._onRenderedDataChange();
        });

        this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(
        /**
        * @param {?} range
        * @return {?}
        */
        function (range) {
          _this68._renderedRange = range;
          ngZone.run(
          /**
          * @return {?}
          */
          function () {
            return _this68.viewChange.next(_this68._renderedRange);
          });

          _this68._onRenderedDataChange();
        });

        this._viewport.attach(this);
      }
      /**
       * The DataSource to display.
       * @return {?}
       */


      _createClass(CdkVirtualForOf, [{
        key: "measureRangeSize",

        /**
         * Measures the combined size (width for horizontal orientation, height for vertical) of all items
         * in the specified range. Throws an error if the range includes items that are not currently
         * rendered.
         * @param {?} range
         * @param {?} orientation
         * @return {?}
         */
        value: function measureRangeSize(range, orientation) {
          if (range.start >= range.end) {
            return 0;
          }

          if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
            throw Error("Error: attempted to measure an item that isn't rendered.");
          } // The index into the list of rendered views for the first item in the range.

          /** @type {?} */


          var renderedStartIndex = range.start - this._renderedRange.start; // The length of the range we're measuring.

          /** @type {?} */

          var rangeLen = range.end - range.start; // Loop over all root nodes for all items in the range and sum up their size.

          /** @type {?} */

          var totalSize = 0;
          /** @type {?} */

          var i = rangeLen;

          while (i--) {
            /** @type {?} */
            var view =
            /** @type {?} */
            this._viewContainerRef.get(i + renderedStartIndex);
            /** @type {?} */


            var j = view ? view.rootNodes.length : 0;

            while (j--) {
              totalSize += getSize(orientation,
              /** @type {?} */
              view.rootNodes[j]);
            }
          }

          return totalSize;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this._differ && this._needsUpdate) {
            // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
            // this list being rendered (can use simpler algorithm) vs needs update due to data actually
            // changing (need to do this diff).

            /** @type {?} */
            var changes = this._differ.diff(this._renderedItems);

            if (!changes) {
              this._updateContext();
            } else {
              this._applyChanges(changes);
            }

            this._needsUpdate = false;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._viewport.detach();

          this._dataSourceChanges.next();

          this._dataSourceChanges.complete();

          this.viewChange.complete();

          this._destroyed.next();

          this._destroyed.complete();

          var _iterator5 = _createForOfIteratorHelper(this._templateCache),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var view = _step5.value;
              view.destroy();
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
        /**
         * React to scroll state changes in the viewport.
         * @private
         * @return {?}
         */

      }, {
        key: "_onRenderedDataChange",
        value: function _onRenderedDataChange() {
          if (!this._renderedRange) {
            return;
          }

          this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);

          if (!this._differ) {
            this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
          }

          this._needsUpdate = true;
        }
        /**
         * Swap out one `DataSource` for another.
         * @private
         * @param {?} oldDs
         * @param {?} newDs
         * @return {?}
         */

      }, {
        key: "_changeDataSource",
        value: function _changeDataSource(oldDs, newDs) {
          if (oldDs) {
            oldDs.disconnect(this);
          }

          this._needsUpdate = true;
          return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
        /**
         * Update the `CdkVirtualForOfContext` for all views.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateContext",
        value: function _updateContext() {
          /** @type {?} */
          var count = this._data.length;
          /** @type {?} */

          var i = this._viewContainerRef.length;

          while (i--) {
            /** @type {?} */
            var view =
            /** @type {?} */
            this._viewContainerRef.get(i);

            view.context.index = this._renderedRange.start + i;
            view.context.count = count;

            this._updateComputedContextProperties(view.context);

            view.detectChanges();
          }
        }
        /**
         * Apply changes to the DOM.
         * @private
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "_applyChanges",
        value: function _applyChanges(changes) {
          var _this69 = this;

          // Rearrange the views to put them in the right location.
          changes.forEachOperation(
          /**
          * @param {?} record
          * @param {?} adjustedPreviousIndex
          * @param {?} currentIndex
          * @return {?}
          */
          function (record, adjustedPreviousIndex, currentIndex) {
            if (record.previousIndex == null) {
              // Item added.
              // Item added.

              /** @type {?} */
              var view = _this69._insertViewForNewItem(
              /** @type {?} */
              currentIndex);

              view.context.$implicit = record.item;
            } else if (currentIndex == null) {
              // Item removed.
              _this69._cacheView(_this69._detachView(
              /** @type {?} */
              adjustedPreviousIndex));
            } else {
              // Item moved.
              // Item moved.

              /** @type {?} */
              var _view =
              /** @type {?} */
              _this69._viewContainerRef.get(
              /** @type {?} */
              adjustedPreviousIndex);

              _this69._viewContainerRef.move(_view, currentIndex);

              _view.context.$implicit = record.item;
            }
          }); // Update $implicit for any items that had an identity change.

          changes.forEachIdentityChange(
          /**
          * @param {?} record
          * @return {?}
          */
          function (record) {
            /** @type {?} */
            var view =
            /** @type {?} */
            _this69._viewContainerRef.get(
            /** @type {?} */
            record.currentIndex);

            view.context.$implicit = record.item;
          }); // Update the context variables on all items.

          /** @type {?} */

          var count = this._data.length;
          /** @type {?} */

          var i = this._viewContainerRef.length;

          while (i--) {
            /** @type {?} */
            var view =
            /** @type {?} */
            this._viewContainerRef.get(i);

            view.context.index = this._renderedRange.start + i;
            view.context.count = count;

            this._updateComputedContextProperties(view.context);
          }
        }
        /**
         * Cache the given detached view.
         * @private
         * @param {?} view
         * @return {?}
         */

      }, {
        key: "_cacheView",
        value: function _cacheView(view) {
          if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
            this._templateCache.push(view);
          } else {
            /** @type {?} */
            var index = this._viewContainerRef.indexOf(view); // It's very unlikely that the index will ever be -1, but just in case,
            // destroy the view on its own, otherwise destroy it through the
            // container to ensure that all the references are removed.


            if (index === -1) {
              view.destroy();
            } else {
              this._viewContainerRef.remove(index);
            }
          }
        }
        /**
         * Inserts a view for a new item, either from the cache or by creating a new one.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_insertViewForNewItem",
        value: function _insertViewForNewItem(index) {
          return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
        }
        /**
         * Update the computed properties on the `CdkVirtualForOfContext`.
         * @private
         * @param {?} context
         * @return {?}
         */

      }, {
        key: "_updateComputedContextProperties",
        value: function _updateComputedContextProperties(context) {
          context.first = context.index === 0;
          context.last = context.index === context.count - 1;
          context.even = context.index % 2 === 0;
          context.odd = !context.even;
        }
        /**
         * Creates a new embedded view and moves it to the given index
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_createEmbeddedViewAt",
        value: function _createEmbeddedViewAt(index) {
          // Note that it's important that we insert the item directly at the proper index,
          // rather than inserting it and the moving it in place, because if there's a directive
          // on the same node that injects the `ViewContainerRef`, Angular will insert another
          // comment node which can throw off the move when it's being repeated for all items.
          return this._viewContainerRef.createEmbeddedView(this._template, {
            $implicit:
            /** @type {?} */
            null,
            // It's guaranteed that the iterable is not "undefined" or "null" because we only
            // generate views for elements if the "cdkVirtualForOf" iterable has elements.
            cdkVirtualForOf:
            /** @type {?} */
            this._cdkVirtualForOf,
            index: -1,
            count: -1,
            first: false,
            last: false,
            odd: false,
            even: false
          }, index);
        }
        /**
         * Inserts a recycled view from the cache at the given index.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_insertViewFromCache",
        value: function _insertViewFromCache(index) {
          /** @type {?} */
          var cachedView = this._templateCache.pop();

          if (cachedView) {
            this._viewContainerRef.insert(cachedView, index);
          }

          return cachedView || null;
        }
        /**
         * Detaches the embedded view at the given index.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_detachView",
        value: function _detachView(index) {
          return (
            /** @type {?} */
            this._viewContainerRef.detach(index)
          );
        }
      }, {
        key: "cdkVirtualForOf",
        get: function get() {
          return this._cdkVirtualForOf;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._cdkVirtualForOf = value;

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["isDataSource"])(value)) {
            this._dataSourceChanges.next(value);
          } else {
            // Slice the value if its an NgIterable to ensure we're working with an array.
            this._dataSourceChanges.next(new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["ArrayDataSource"](Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(value) ? value : Array.prototype.slice.call(value || [])));
          }
        }
        /**
         * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
         * the item and produces a value to be used as the item's identity when tracking changes.
         * @return {?}
         */

      }, {
        key: "cdkVirtualForTrackBy",
        get: function get() {
          return this._cdkVirtualForTrackBy;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        ,
        set: function set(fn) {
          var _this70 = this;

          this._needsUpdate = true;
          this._cdkVirtualForTrackBy = fn ?
          /**
          * @param {?} index
          * @param {?} item
          * @return {?}
          */
          function (index, item) {
            return fn(index + (_this70._renderedRange ? _this70._renderedRange.start : 0), item);
          } : undefined;
        }
        /**
         * The template used to stamp out new elements.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "cdkVirtualForTemplate",
        set: function set(value) {
          if (value) {
            this._needsUpdate = true;
            this._template = value;
          }
        }
      }]);

      return CdkVirtualForOf;
    }();

    CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) {
      return new (t || CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    CdkVirtualForOf.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkVirtualForOf,
      selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
      inputs: {
        cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize",
        cdkVirtualForOf: "cdkVirtualForOf",
        cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
        cdkVirtualForTemplate: "cdkVirtualForTemplate"
      }
    });
    /** @nocollapse */

    CdkVirtualForOf.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
      }, {
        type: CdkVirtualScrollViewport,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    CdkVirtualForOf.propDecorators = {
      cdkVirtualForOf: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cdkVirtualForTrackBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cdkVirtualForTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cdkVirtualForTemplateCacheSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualForOf, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdkVirtualFor][cdkVirtualForOf]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
        }, {
          type: CdkVirtualScrollViewport,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        cdkVirtualForTemplateCacheSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForOf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTrackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/scrolling-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CdkScrollableModule = function CdkScrollableModule() {
      _classCallCheck(this, CdkScrollableModule);
    };

    CdkScrollableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CdkScrollableModule
    });
    CdkScrollableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CdkScrollableModule_Factory(t) {
        return new (t || CdkScrollableModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CdkScrollableModule, {
        declarations: [CdkScrollable],
        exports: [CdkScrollable]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: [CdkScrollable],
          declarations: [CdkScrollable]
        }]
      }], null, null);
    })();

    var ScrollingModule = function ScrollingModule() {
      _classCallCheck(this, ScrollingModule);
    };

    ScrollingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ScrollingModule
    });
    ScrollingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ScrollingModule_Factory(t) {
        return new (t || ScrollingModule)();
      },
      imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScrollingModule, {
        declarations: function declarations() {
          return [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport];
        },
        imports: function imports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule];
        },
        exports: function exports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule],
          exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport],
          declarations: [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=scrolling.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/fesm2015/coercion.js":
  /*!********************************************************!*\
    !*** ./node_modules/@angular/cdk/fesm2015/coercion.js ***!
    \********************************************************/

  /*! exports provided: _isNumberValue, coerceArray, coerceBooleanProperty, coerceCssPixelValue, coerceElement, coerceNumberProperty */

  /***/
  function node_modulesAngularCdkFesm2015CoercionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_isNumberValue", function () {
      return _isNumberValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
      return coerceArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function () {
      return coerceBooleanProperty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function () {
      return coerceCssPixelValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceElement", function () {
      return coerceElement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function () {
      return coerceNumberProperty;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Coerces a data-bound value (typically a string) to a boolean. */


    function coerceBooleanProperty(value) {
      return value != null && "".concat(value) !== 'false';
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function coerceNumberProperty(value) {
      var fallbackValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return _isNumberValue(value) ? Number(value) : fallbackValue;
    }
    /**
     * Whether the provided value is considered a number.
     * @docs-private
     */


    function _isNumberValue(value) {
      // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
      // and other non-number values as NaN, where Number just uses 0) but it considers the string
      // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
      return !isNaN(parseFloat(value)) && !isNaN(Number(value));
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function coerceArray(value) {
      return Array.isArray(value) ? value : [value];
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Coerces a value to a CSS pixel value. */


    function coerceCssPixelValue(value) {
      if (value == null) {
        return '';
      }

      return typeof value === 'string' ? value : "".concat(value, "px");
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Coerces an ElementRef or an Element into an element.
     * Useful for APIs that can accept either a ref or the native element itself.
     */


    function coerceElement(elementOrRef) {
      return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    //# sourceMappingURL=coercion.js.map

    /***/

  },

  /***/
  "./node_modules/@ncstate/sat-popover/__ivy_ngcc__/fesm2015/ncstate-sat-popover.js":
  /*!****************************************************************************************!*\
    !*** ./node_modules/@ncstate/sat-popover/__ivy_ngcc__/fesm2015/ncstate-sat-popover.js ***!
    \****************************************************************************************/

  /*! exports provided: SatPopoverModule, SatPopoverAnchor, SatPopoverAnchoringService, SatPopover, SatPopoverHoverDirective, ɵa */

  /***/
  function node_modulesNcstateSatPopover__ivy_ngcc__Fesm2015NcstateSatPopoverJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SatPopoverModule", function () {
      return SatPopoverModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SatPopoverAnchor", function () {
      return SatPopoverAnchor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SatPopoverAnchoringService", function () {
      return SatPopoverAnchoringService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SatPopover", function () {
      return SatPopover;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SatPopoverHoverDirective", function () {
      return SatPopoverHoverDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return transformPopover;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /** @type {?} */


    var _c0 = ["focusTrapElement"];

    function SatPopover_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@transformPopover.done", function SatPopover_ng_template_0_Template_div_animation_transformPopover_done_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r2._onAnimationDone($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0._classList)("@transformPopover", ctx_r0._getAnimation());
      }
    }

    var _c1 = ["*"];
    var transformPopover = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('transformPopover', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.3)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{openTransition}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1)'
    }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{closeTransition}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.5)'
    }))])]);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /** @enum {number} */

    var NotificationAction = {
      /** Popover should open. */
      OPEN: 0,

      /** Popover should close. */
      CLOSE: 1,

      /** Popover should toggle open or closed. */
      TOGGLE: 2,

      /** Popover has new target positions. */
      REPOSITION: 3,

      /** Popover needs new configuration. */
      UPDATE_CONFIG: 4,

      /** Popover should realign itself to the anchor.  */
      REALIGN: 5
    };
    NotificationAction[NotificationAction.OPEN] = 'OPEN';
    NotificationAction[NotificationAction.CLOSE] = 'CLOSE';
    NotificationAction[NotificationAction.TOGGLE] = 'TOGGLE';
    NotificationAction[NotificationAction.REPOSITION] = 'REPOSITION';
    NotificationAction[NotificationAction.UPDATE_CONFIG] = 'UPDATE_CONFIG';
    NotificationAction[NotificationAction.REALIGN] = 'REALIGN';
    /**
     * Event object for dispatching to anchoring service.
     */

    var PopoverNotification =
    /**
     * @param {?} action
     * @param {?=} value
     */
    function PopoverNotification(action, value) {
      _classCallCheck(this, PopoverNotification);

      this.action = action;
      this.value = value;
    };

    var PopoverNotificationService = /*#__PURE__*/function () {
      function PopoverNotificationService() {
        _classCallCheck(this, PopoverNotificationService);

        this.store = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }
      /**
       * Dispatch a notification to all subscribers.
       * @param {?} notification
       * @return {?}
       */


      _createClass(PopoverNotificationService, [{
        key: "dispatch",
        value: function dispatch(notification) {
          this.store.next(notification);
        }
        /**
         * Stream of notification events.
         * @return {?}
         */

      }, {
        key: "events",
        value: function events() {
          return this.store.asObservable();
        }
        /**
         * Complete event stream.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          this.store.complete();
        }
      }]);

      return PopoverNotificationService;
    }();

    PopoverNotificationService.ɵfac = function PopoverNotificationService_Factory(t) {
      return new (t || PopoverNotificationService)();
    };

    PopoverNotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PopoverNotificationService,
      factory: PopoverNotificationService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PopoverNotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /** @type {?} */


    var VALID_SCROLL = ['noop', 'block', 'reposition', 'close'];
    /** @type {?} */

    var VALID_HORIZ_ALIGN = ['before', 'start', 'center', 'end', 'after'];
    /** @type {?} */

    var VALID_VERT_ALIGN = ['above', 'start', 'center', 'end', 'below'];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */

    function getInvalidPopoverError() {
      return Error('SatPopoverAnchor must be provided an SatPopover component instance.');
    }
    /**
     * @return {?}
     */


    function getUnanchoredPopoverError() {
      return Error('SatPopover is not anchored to any SatPopoverAnchor.');
    }
    /**
     * @param {?} alignment
     * @return {?}
     */


    function getInvalidHorizontalAlignError(alignment) {
      return Error(generateGenericError('horizontalAlign/xAlign', alignment, VALID_HORIZ_ALIGN));
    }
    /**
     * @param {?} alignment
     * @return {?}
     */


    function getInvalidVerticalAlignError(alignment) {
      return Error(generateGenericError('verticalAlign/yAlign', alignment, VALID_VERT_ALIGN));
    }
    /**
     * @param {?} strategy
     * @return {?}
     */


    function getInvalidScrollStrategyError(strategy) {
      return Error(generateGenericError('scrollStrategy', strategy, VALID_SCROLL));
    }
    /**
     * @param {?} apiName
     * @param {?} invalid
     * @param {?} valid
     * @return {?}
     */


    function generateGenericError(apiName, invalid, valid) {
      return "Invalid ".concat(apiName, ": '").concat(invalid, "'. Valid options are ") + "".concat(valid.map(function (v) {
        return "'".concat(v, "'");
      }).join(', '), ".");
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    // See http://cubic-bezier.com/#.25,.8,.25,1 for reference.

    /** @type {?} */


    var DEFAULT_TRANSITION = '200ms cubic-bezier(0.25, 0.8, 0.25, 1)';

    var SatPopover = /*#__PURE__*/function () {
      /**
       * @param {?} _focusTrapFactory
       * @param {?} _document
       */
      function SatPopover(_focusTrapFactory, _document) {
        _classCallCheck(this, SatPopover);

        this._focusTrapFactory = _focusTrapFactory;
        this._document = _document;
        this._horizontalAlign = 'center';
        this._verticalAlign = 'center';
        this._forceAlignment = false;
        this._lockAlignment = false;
        this._autoFocus = true;
        this._autoFocusOverride = true;
        this._restoreFocus = true;
        this._restoreFocusOverride = true;
        this._scrollStrategy = 'reposition';
        this._hasBackdrop = false;
        this._interactiveClose = true;
        this._openTransition = DEFAULT_TRANSITION;
        this._closeTransition = DEFAULT_TRANSITION;
        /**
         * Optional backdrop class.
         */

        this.backdropClass = '';
        /**
         * Emits when the popover is opened.
         */

        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the popover is closed.
         */

        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the popover has finished opening.
         */

        this.afterOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the popover has finished closing.
         */

        this.afterClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the backdrop is clicked.
         */

        this.backdropClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when a keydown event is targeted to this popover's overlay.
         */

        this.overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Classes to be added to the popover for setting the correct transform origin.
         */

        this._classList = {};
        /**
         * Whether the popover is presently open.
         */

        this._open = false;
      }
      /**
       * Alignment of the popover on the horizontal axis.
       * @return {?}
       */


      _createClass(SatPopover, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._setAlignmentClasses();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._notifications) {
            this._notifications.dispose();
          }
        }
        /**
         * Open this popover.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          var notification = new PopoverNotification(NotificationAction.OPEN, options);

          this._dispatchActionNotification(notification);
        }
        /**
         * Close this popover.
         * @param {?=} value
         * @return {?}
         */

      }, {
        key: "close",
        value: function close(value) {
          /** @type {?} */
          var notification = new PopoverNotification(NotificationAction.CLOSE, value);

          this._dispatchActionNotification(notification);
        }
        /**
         * Toggle this popover open or closed.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          /** @type {?} */
          var notification = new PopoverNotification(NotificationAction.TOGGLE);

          this._dispatchActionNotification(notification);
        }
        /**
         * Realign the popover to the anchor.
         * @return {?}
         */

      }, {
        key: "realign",
        value: function realign() {
          /** @type {?} */
          var notification = new PopoverNotification(NotificationAction.REALIGN);

          this._dispatchActionNotification(notification);
        }
        /**
         * Gets whether the popover is presently open.
         * @return {?}
         */

      }, {
        key: "isOpen",
        value: function isOpen() {
          return this._open;
        }
        /**
         * Gets an animation config with customized (or default) transition values.
         * @return {?}
         */

      }, {
        key: "_getAnimation",
        value: function _getAnimation() {
          return {
            value: 'visible',
            params: {
              openTransition: this.openTransition,
              closeTransition: this.closeTransition
            }
          };
        }
        /**
         * Callback for when the popover is finished animating in or out.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onAnimationDone",
        value: function _onAnimationDone(event) {
          if (event.toState === 'visible') {
            this._trapFocus();

            this.afterOpen.emit();
          } else if (event.toState === 'void') {
            this._restoreFocusAndDestroyTrap();

            this.afterClose.emit();
          }
        }
        /**
         * Apply alignment classes based on alignment inputs.
         * @param {?=} horizAlign
         * @param {?=} vertAlign
         * @return {?}
         */

      }, {
        key: "_setAlignmentClasses",
        value: function _setAlignmentClasses() {
          var horizAlign = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.horizontalAlign;
          var vertAlign = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.verticalAlign;
          this._classList['sat-popover-before'] = horizAlign === 'before' || horizAlign === 'end';
          this._classList['sat-popover-after'] = horizAlign === 'after' || horizAlign === 'start';
          this._classList['sat-popover-above'] = vertAlign === 'above' || vertAlign === 'end';
          this._classList['sat-popover-below'] = vertAlign === 'below' || vertAlign === 'start';
          this._classList['sat-popover-center'] = horizAlign === 'center' || vertAlign === 'center';
        }
        /**
         * Move the focus inside the focus trap and remember where to return later.
         * @return {?}
         */

      }, {
        key: "_trapFocus",
        value: function _trapFocus() {
          this._savePreviouslyFocusedElement(); // There won't be a focus trap element if the close animation starts before open finishes


          if (!this._focusTrapElement) {
            return;
          }

          if (!this._focusTrap && this._focusTrapElement) {
            this._focusTrap = this._focusTrapFactory.create(this._focusTrapElement.nativeElement);
          }

          if (this.autoFocus) {
            this._focusTrap.focusInitialElementWhenReady();
          }
        }
        /**
         * Restore focus to the element focused before the popover opened. Also destroy trap.
         * @return {?}
         */

      }, {
        key: "_restoreFocusAndDestroyTrap",
        value: function _restoreFocusAndDestroyTrap() {
          /** @type {?} */
          var toFocus = this._previouslyFocusedElement; // Must check active element is focusable for IE sake

          if (toFocus && 'focus' in toFocus && this.restoreFocus) {
            this._previouslyFocusedElement.focus();
          }

          this._previouslyFocusedElement = null;

          if (this._focusTrap) {
            this._focusTrap.destroy();

            this._focusTrap = undefined;
          }
        }
        /**
         * Save a reference to the element focused before the popover was opened.
         * @return {?}
         */

      }, {
        key: "_savePreviouslyFocusedElement",
        value: function _savePreviouslyFocusedElement() {
          if (this._document) {
            this._previouslyFocusedElement =
            /** @type {?} */
            this._document.activeElement;
          }
        }
        /**
         * Dispatch a notification to the notification service, if possible.
         * @param {?} notification
         * @return {?}
         */

      }, {
        key: "_dispatchConfigNotification",
        value: function _dispatchConfigNotification(notification) {
          if (this._notifications) {
            this._notifications.dispatch(notification);
          }
        }
        /**
         * Dispatch a notification to the notification service and throw if unable to.
         * @param {?} notification
         * @return {?}
         */

      }, {
        key: "_dispatchActionNotification",
        value: function _dispatchActionNotification(notification) {
          if (!this._notifications) {
            throw getUnanchoredPopoverError();
          }

          this._notifications.dispatch(notification);
        }
        /**
         * Throws an error if the alignment is not a valid horizontalAlign.
         * @param {?} pos
         * @return {?}
         */

      }, {
        key: "_validateHorizontalAlign",
        value: function _validateHorizontalAlign(pos) {
          if (VALID_HORIZ_ALIGN.indexOf(pos) === -1) {
            throw getInvalidHorizontalAlignError(pos);
          }
        }
        /**
         * Throws an error if the alignment is not a valid verticalAlign.
         * @param {?} pos
         * @return {?}
         */

      }, {
        key: "_validateVerticalAlign",
        value: function _validateVerticalAlign(pos) {
          if (VALID_VERT_ALIGN.indexOf(pos) === -1) {
            throw getInvalidVerticalAlignError(pos);
          }
        }
        /**
         * Throws an error if the scroll strategy is not a valid strategy.
         * @param {?} strategy
         * @return {?}
         */

      }, {
        key: "_validateScrollStrategy",
        value: function _validateScrollStrategy(strategy) {
          if (VALID_SCROLL.indexOf(strategy) === -1) {
            throw getInvalidScrollStrategyError(strategy);
          }
        }
      }, {
        key: "horizontalAlign",
        get: function get() {
          return this._horizontalAlign;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._validateHorizontalAlign(val);

          if (this._horizontalAlign !== val) {
            this._horizontalAlign = val;

            this._dispatchConfigNotification(new PopoverNotification(NotificationAction.REPOSITION));
          }
        }
        /**
         * Alignment of the popover on the x axis. Alias for `horizontalAlign`.
         * @return {?}
         */

      }, {
        key: "xAlign",
        get: function get() {
          return this.horizontalAlign;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this.horizontalAlign = val;
        }
        /**
         * Alignment of the popover on the vertical axis.
         * @return {?}
         */

      }, {
        key: "verticalAlign",
        get: function get() {
          return this._verticalAlign;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._validateVerticalAlign(val);

          if (this._verticalAlign !== val) {
            this._verticalAlign = val;

            this._dispatchConfigNotification(new PopoverNotification(NotificationAction.REPOSITION));
          }
        }
        /**
         * Alignment of the popover on the y axis. Alias for `verticalAlign`.
         * @return {?}
         */

      }, {
        key: "yAlign",
        get: function get() {
          return this.verticalAlign;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this.verticalAlign = val;
        }
        /**
         * Whether the popover always opens with the specified alignment.
         * @return {?}
         */

      }, {
        key: "forceAlignment",
        get: function get() {
          return this._forceAlignment;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          /** @type {?} */
          var coercedVal = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(val);

          if (this._forceAlignment !== coercedVal) {
            this._forceAlignment = coercedVal;

            this._dispatchConfigNotification(new PopoverNotification(NotificationAction.REPOSITION));
          }
        }
        /**
         * Whether the popover's alignment is locked after opening. This prevents the popover
         * from changing its alignement when scrolling or changing the size of the viewport.
         * @return {?}
         */

      }, {
        key: "lockAlignment",
        get: function get() {
          return this._lockAlignment;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          /** @type {?} */
          var coercedVal = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(val);

          if (this._lockAlignment !== coercedVal) {
            this._lockAlignment = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(val);

            this._dispatchConfigNotification(new PopoverNotification(NotificationAction.REPOSITION));
          }
        }
        /**
         * Whether the first focusable element should be focused on open.
         * @return {?}
         */

      }, {
        key: "autoFocus",
        get: function get() {
          return this._autoFocus && this._autoFocusOverride;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._autoFocus = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(val);
        }
        /**
         * Whether the popover should return focus to the previously focused element after closing.
         * @return {?}
         */

      }, {
        key: "restoreFocus",
        get: function get() {
          return this._restoreFocus && this._restoreFocusOverride;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._restoreFocus = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(val);
        }
        /**
         * How the popover should handle scrolling.
         * @return {?}
         */

      }, {
        key: "scrollStrategy",
        get: function get() {
          return this._scrollStrategy;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._validateScrollStrategy(val);

          if (this._scrollStrategy !== val) {
            this._scrollStrategy = val;

            this._dispatchConfigNotification(new PopoverNotification(NotificationAction.UPDATE_CONFIG));
          }
        }
        /**
         * Whether the popover should have a backdrop (includes closing on click).
         * @return {?}
         */

      }, {
        key: "hasBackdrop",
        get: function get() {
          return this._hasBackdrop;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(val);
        }
        /**
         * Whether the popover should close when the user clicks the backdrop or presses ESC.
         * @return {?}
         */

      }, {
        key: "interactiveClose",
        get: function get() {
          return this._interactiveClose;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._interactiveClose = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(val);
        }
        /**
         * Custom transition to use while opening.
         * @return {?}
         */

      }, {
        key: "openTransition",
        get: function get() {
          return this._openTransition;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          if (val) {
            this._openTransition = val;
          }
        }
        /**
         * Custom transition to use while closing.
         * @return {?}
         */

      }, {
        key: "closeTransition",
        get: function get() {
          return this._closeTransition;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          if (val) {
            this._closeTransition = val;
          }
        }
      }]);

      return SatPopover;
    }();

    SatPopover.ɵfac = function SatPopover_Factory(t) {
      return new (t || SatPopover)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8));
    };

    SatPopover.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SatPopover,
      selectors: [["sat-popover"]],
      viewQuery: function SatPopover_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._templateRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._focusTrapElement = _t.first);
        }
      },
      inputs: {
        backdropClass: "backdropClass",
        horizontalAlign: "horizontalAlign",
        xAlign: "xAlign",
        verticalAlign: "verticalAlign",
        yAlign: "yAlign",
        forceAlignment: "forceAlignment",
        lockAlignment: "lockAlignment",
        autoFocus: "autoFocus",
        restoreFocus: "restoreFocus",
        scrollStrategy: "scrollStrategy",
        hasBackdrop: "hasBackdrop",
        interactiveClose: "interactiveClose",
        openTransition: "openTransition",
        closeTransition: "closeTransition"
      },
      outputs: {
        opened: "opened",
        closed: "closed",
        afterOpen: "afterOpen",
        afterClose: "afterClose",
        backdropClicked: "backdropClicked",
        overlayKeydown: "overlayKeydown"
      },
      ngContentSelectors: _c1,
      decls: 1,
      vars: 0,
      consts: [[1, "sat-popover-container", 3, "ngClass"], ["focusTrapElement", ""]],
      template: function SatPopover_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SatPopover_ng_template_0_Template, 3, 2, "ng-template");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: [".cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.sat-popover-container.sat-popover-before.sat-popover-above{-webkit-transform-origin:right bottom;transform-origin:right bottom}[dir=rtl] .sat-popover-container.sat-popover-before.sat-popover-above{-webkit-transform-origin:left bottom;transform-origin:left bottom}.sat-popover-container.sat-popover-before.sat-popover-center{-webkit-transform-origin:right center;transform-origin:right center}[dir=rtl] .sat-popover-container.sat-popover-before.sat-popover-center{-webkit-transform-origin:left center;transform-origin:left center}.sat-popover-container.sat-popover-before.sat-popover-below{-webkit-transform-origin:right top;transform-origin:right top}[dir=rtl] .sat-popover-container.sat-popover-before.sat-popover-below{-webkit-transform-origin:left top;transform-origin:left top}.sat-popover-container.sat-popover-center.sat-popover-above{-webkit-transform-origin:center bottom;transform-origin:center bottom}.sat-popover-container.sat-popover-center.sat-popover-below{-webkit-transform-origin:center top;transform-origin:center top}.sat-popover-container.sat-popover-after.sat-popover-above{-webkit-transform-origin:left bottom;transform-origin:left bottom}[dir=rtl] .sat-popover-container.sat-popover-after.sat-popover-above{-webkit-transform-origin:right bottom;transform-origin:right bottom}.sat-popover-container.sat-popover-after.sat-popover-center{-webkit-transform-origin:left center;transform-origin:left center}[dir=rtl] .sat-popover-container.sat-popover-after.sat-popover-center{-webkit-transform-origin:right center;transform-origin:right center}.sat-popover-container.sat-popover-after.sat-popover-below{-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] .sat-popover-container.sat-popover-after.sat-popover-below{-webkit-transform-origin:right top;transform-origin:right top}"],
      encapsulation: 2,
      data: {
        animation: [transformPopover]
      }
    });
    /** @nocollapse */

    SatPopover.ctorParameters = function () {
      return [{
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusTrapFactory"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }];
    };

    SatPopover.propDecorators = {
      horizontalAlign: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      xAlign: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      verticalAlign: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      yAlign: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      forceAlignment: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      lockAlignment: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      autoFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      restoreFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      scrollStrategy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      hasBackdrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      interactiveClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      openTransition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      closeTransition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      backdropClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      opened: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      closed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      afterOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      afterClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      backdropClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      overlayKeydown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      _templateRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]]
      }],
      _focusTrapElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['focusTrapElement']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SatPopover, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'sat-popover',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          animations: [transformPopover],
          template: "<ng-template>\n  <div class=\"sat-popover-container\"\n      #focusTrapElement\n      [ngClass]=\"_classList\"\n      [@transformPopover]=\"_getAnimation()\"\n      (@transformPopover.done)=\"_onAnimationDone($event)\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
          styles: [".cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.sat-popover-container.sat-popover-before.sat-popover-above{-webkit-transform-origin:right bottom;transform-origin:right bottom}[dir=rtl] .sat-popover-container.sat-popover-before.sat-popover-above{-webkit-transform-origin:left bottom;transform-origin:left bottom}.sat-popover-container.sat-popover-before.sat-popover-center{-webkit-transform-origin:right center;transform-origin:right center}[dir=rtl] .sat-popover-container.sat-popover-before.sat-popover-center{-webkit-transform-origin:left center;transform-origin:left center}.sat-popover-container.sat-popover-before.sat-popover-below{-webkit-transform-origin:right top;transform-origin:right top}[dir=rtl] .sat-popover-container.sat-popover-before.sat-popover-below{-webkit-transform-origin:left top;transform-origin:left top}.sat-popover-container.sat-popover-center.sat-popover-above{-webkit-transform-origin:center bottom;transform-origin:center bottom}.sat-popover-container.sat-popover-center.sat-popover-below{-webkit-transform-origin:center top;transform-origin:center top}.sat-popover-container.sat-popover-after.sat-popover-above{-webkit-transform-origin:left bottom;transform-origin:left bottom}[dir=rtl] .sat-popover-container.sat-popover-after.sat-popover-above{-webkit-transform-origin:right bottom;transform-origin:right bottom}.sat-popover-container.sat-popover-after.sat-popover-center{-webkit-transform-origin:left center;transform-origin:left center}[dir=rtl] .sat-popover-container.sat-popover-after.sat-popover-center{-webkit-transform-origin:right center;transform-origin:right center}.sat-popover-container.sat-popover-after.sat-popover-below{-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] .sat-popover-container.sat-popover-after.sat-popover-below{-webkit-transform-origin:right top;transform-origin:right top}"]
        }]
      }], function () {
        return [{
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusTrapFactory"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      }, {
        backdropClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        afterOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        afterClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        backdropClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        overlayKeydown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        horizontalAlign: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        xAlign: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        verticalAlign: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        yAlign: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        forceAlignment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        lockAlignment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        autoFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        restoreFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollStrategy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        interactiveClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        openTransition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        closeTransition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _templateRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]]
        }],
        _focusTrapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['focusTrapElement']
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */


    var SatPopoverAnchoringService = /*#__PURE__*/function () {
      /**
       * @param {?} _overlay
       * @param {?} _ngZone
       * @param {?} _dir
       */
      function SatPopoverAnchoringService(_overlay, _ngZone, _dir) {
        _classCallCheck(this, SatPopoverAnchoringService);

        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._dir = _dir;
        /**
         * Emits when the popover is opened.
         */

        this.popoverOpened = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the popover is closed.
         */

        this.popoverClosed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Whether the popover is presently open.
         */

        this._popoverOpen = false;
        /**
         * Emits when the service is destroyed.
         */

        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }
      /**
       * @return {?}
       */


      _createClass(SatPopoverAnchoringService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Destroy popover before terminating subscriptions so that any resulting
          // detachments update 'closed state'
          this._destroyPopover(); // Terminate subscriptions


          if (this._notificationsSubscription) {
            this._notificationsSubscription.unsubscribe();
          }

          if (this._positionChangeSubscription) {
            this._positionChangeSubscription.unsubscribe();
          }

          this._onDestroy.next();

          this._onDestroy.complete();

          this.popoverOpened.complete();
          this.popoverClosed.complete();
        }
        /**
         * Anchor a popover instance to a view and connection element.
         * @param {?} popover
         * @param {?} viewContainerRef
         * @param {?} anchor
         * @return {?}
         */

      }, {
        key: "anchor",
        value: function anchor(popover, viewContainerRef, _anchor) {
          // Destroy any previous popovers
          this._destroyPopover(); // Assign local refs


          this._popover = popover;
          this._viewContainerRef = viewContainerRef;
          this._anchor = _anchor; // Provide notification service as a communication channel between popover and anchor.
          // Then subscribe to notifications to take appropriate actions.

          this._popover._notifications = this._notifications = new PopoverNotificationService();

          this._subscribeToNotifications();
        }
        /**
         * Gets whether the popover is presently open.
         * @return {?}
         */

      }, {
        key: "isPopoverOpen",
        value: function isPopoverOpen() {
          return this._popoverOpen;
        }
        /**
         * Toggles the popover between the open and closed states.
         * @return {?}
         */

      }, {
        key: "togglePopover",
        value: function togglePopover() {
          return this._popoverOpen ? this.closePopover() : this.openPopover();
        }
        /**
         * Opens the popover.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "openPopover",
        value: function openPopover() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (!this._popoverOpen) {
            this._applyOpenOptions(options);

            this._createOverlay();

            this._subscribeToBackdrop();

            this._subscribeToEscape();

            this._subscribeToDetachments();

            this._saveOpenedState();
          }
        }
        /**
         * Closes the popover.
         * @param {?=} value
         * @return {?}
         */

      }, {
        key: "closePopover",
        value: function closePopover(value) {
          if (this._overlayRef) {
            this._saveClosedState(value);

            this._overlayRef.detach();
          }
        }
        /**
         * Realign the popover to the anchor.
         * @return {?}
         */

      }, {
        key: "realignPopoverToAnchor",
        value: function realignPopoverToAnchor() {
          if (this._overlayRef) {
            /** @type {?} */
            var config = this._overlayRef.getConfig();
            /** @type {?} */


            var strategy =
            /** @type {?} */
            config.positionStrategy;
            strategy.reapplyLastPosition();
          }
        }
        /**
         * Get a reference to the anchor element.
         * @return {?}
         */

      }, {
        key: "getAnchorElement",
        value: function getAnchorElement() {
          return this._anchor;
        }
        /**
         * Apply behavior properties on the popover based on the open options.
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "_applyOpenOptions",
        value: function _applyOpenOptions(options) {
          // Only override restoreFocus as `false` if the option is explicitly `false`

          /** @type {?} */
          var restoreFocus = options.restoreFocus !== false;
          this._popover._restoreFocusOverride = restoreFocus; // Only override autoFocus as `false` if the option is explicitly `false`

          /** @type {?} */

          var autoFocus = options.autoFocus !== false;
          this._popover._autoFocusOverride = autoFocus;
        }
        /**
         * Create an overlay to be attached to the portal.
         * @return {?}
         */

      }, {
        key: "_createOverlay",
        value: function _createOverlay() {
          // Create overlay if it doesn't yet exist
          if (!this._overlayRef) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["TemplatePortal"](this._popover._templateRef, this._viewContainerRef);
            /** @type {?} */

            var popoverConfig = {
              horizontalAlign: this._popover.horizontalAlign,
              verticalAlign: this._popover.verticalAlign,
              hasBackdrop: this._popover.hasBackdrop,
              backdropClass: this._popover.backdropClass,
              scrollStrategy: this._popover.scrollStrategy,
              forceAlignment: this._popover.forceAlignment,
              lockAlignment: this._popover.lockAlignment
            };
            /** @type {?} */

            var overlayConfig = this._getOverlayConfig(popoverConfig, this._anchor);

            this._subscribeToPositionChanges(
            /** @type {?} */
            overlayConfig.positionStrategy);

            this._overlayRef = this._overlay.create(overlayConfig);
          } // Actually open the popover


          this._overlayRef.attach(this._portal);

          return this._overlayRef;
        }
        /**
         * Removes the popover from the DOM. Does NOT update open state.
         * @return {?}
         */

      }, {
        key: "_destroyPopover",
        value: function _destroyPopover() {
          if (this._overlayRef) {
            this._overlayRef.dispose();

            this._overlayRef = null;
          }
        }
        /**
         * Destroys the popover immediately if it is closed, or waits until it
         * has been closed to destroy it.
         * @return {?}
         */

      }, {
        key: "_destroyPopoverOnceClosed",
        value: function _destroyPopoverOnceClosed() {
          var _this71 = this;

          if (this.isPopoverOpen() && this._overlayRef) {
            this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy)).subscribe(function () {
              return _this71._destroyPopover();
            });
          } else {
            this._destroyPopover();
          }
        }
        /**
         * Call appropriate anchor method when an event is dispatched through
         * the notification service.
         * @return {?}
         */

      }, {
        key: "_subscribeToNotifications",
        value: function _subscribeToNotifications() {
          var _this72 = this;

          if (this._notificationsSubscription) {
            this._notificationsSubscription.unsubscribe();
          }

          this._notificationsSubscription = this._notifications.events().subscribe(function (event) {
            switch (event.action) {
              case NotificationAction.OPEN:
                _this72.openPopover(event.value);

                break;

              case NotificationAction.CLOSE:
                _this72.closePopover(event.value);

                break;

              case NotificationAction.TOGGLE:
                _this72.togglePopover();

                break;

              case NotificationAction.REPOSITION: // TODO: When the overlay's position can be dynamically changed, do not destroy

              case NotificationAction.UPDATE_CONFIG:
                _this72._destroyPopoverOnceClosed();

                break;

              case NotificationAction.REALIGN:
                _this72.realignPopoverToAnchor();

                break;
            }
          });
        }
        /**
         * Close popover when backdrop is clicked.
         * @return {?}
         */

      }, {
        key: "_subscribeToBackdrop",
        value: function _subscribeToBackdrop() {
          var _this73 = this;

          this._overlayRef.backdropClick().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function () {
            return _this73._popover.backdropClicked.emit();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function () {
            return _this73._popover.interactiveClose;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.popoverClosed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy)).subscribe(function () {
            return _this73.closePopover();
          });
        }
        /**
         * Close popover when escape keydown event occurs.
         * @return {?}
         */

      }, {
        key: "_subscribeToEscape",
        value: function _subscribeToEscape() {
          var _this74 = this;

          this._overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function (event) {
            return _this74._popover.overlayKeydown.emit(event);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (event) {
            return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ESCAPE"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function () {
            return _this74._popover.interactiveClose;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.popoverClosed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy)).subscribe(function () {
            return _this74.closePopover();
          });
        }
        /**
         * Set state back to closed when detached.
         * @return {?}
         */

      }, {
        key: "_subscribeToDetachments",
        value: function _subscribeToDetachments() {
          var _this75 = this;

          this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy)).subscribe(function () {
            return _this75._saveClosedState();
          });
        }
        /**
         * Save the opened state of the popover and emit.
         * @return {?}
         */

      }, {
        key: "_saveOpenedState",
        value: function _saveOpenedState() {
          if (!this._popoverOpen) {
            this._popover._open = this._popoverOpen = true;
            this.popoverOpened.next();

            this._popover.opened.emit();
          }
        }
        /**
         * Save the closed state of the popover and emit.
         * @param {?=} value
         * @return {?}
         */

      }, {
        key: "_saveClosedState",
        value: function _saveClosedState(value) {
          if (this._popoverOpen) {
            this._popover._open = this._popoverOpen = false;
            this.popoverClosed.next(value);

            this._popover.closed.emit(value);
          }
        }
        /**
         * Gets the text direction of the containing app.
         * @return {?}
         */

      }, {
        key: "_getDirection",
        value: function _getDirection() {
          return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        }
        /**
         * Create and return a config for creating the overlay.
         * @param {?} config
         * @param {?} anchor
         * @return {?}
         */

      }, {
        key: "_getOverlayConfig",
        value: function _getOverlayConfig(config, anchor) {
          return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayConfig"]({
            positionStrategy: this._getPositionStrategy(config.horizontalAlign, config.verticalAlign, config.forceAlignment, config.lockAlignment, anchor),
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass || 'cdk-overlay-transparent-backdrop',
            scrollStrategy: this._getScrollStrategyInstance(config.scrollStrategy),
            direction: this._getDirection()
          });
        }
        /**
         * Listen to changes in the position of the overlay and set the correct alignment classes,
         * ensuring that the animation origin is correct, even with a fallback position.
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_subscribeToPositionChanges",
        value: function _subscribeToPositionChanges(position) {
          var _this76 = this;

          if (this._positionChangeSubscription) {
            this._positionChangeSubscription.unsubscribe();
          }

          this._positionChangeSubscription = position.positionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy)).subscribe(function (change) {
            // Position changes may occur outside the Angular zone
            _this76._ngZone.run(function () {
              _this76._popover._setAlignmentClasses(getHorizontalPopoverAlignment(change.connectionPair.overlayX), getVerticalPopoverAlignment(change.connectionPair.overlayY));
            });
          });
        }
        /**
         * Map a scroll strategy string type to an instance of a scroll strategy.
         * @param {?} strategy
         * @return {?}
         */

      }, {
        key: "_getScrollStrategyInstance",
        value: function _getScrollStrategyInstance(strategy) {
          switch (strategy) {
            case 'block':
              return this._overlay.scrollStrategies.block();

            case 'reposition':
              return this._overlay.scrollStrategies.reposition();

            case 'close':
              return this._overlay.scrollStrategies.close();

            case 'noop':
            default:
              return this._overlay.scrollStrategies.noop();
          }
        }
        /**
         * Create and return a position strategy based on config provided to the component instance.
         * @param {?} horizontalTarget
         * @param {?} verticalTarget
         * @param {?} forceAlignment
         * @param {?} lockAlignment
         * @param {?} anchor
         * @return {?}
         */

      }, {
        key: "_getPositionStrategy",
        value: function _getPositionStrategy(horizontalTarget, verticalTarget, forceAlignment, lockAlignment, anchor) {
          // Attach the overlay at the preferred position

          /** @type {?} */
          var targetPosition = getPosition(horizontalTarget, verticalTarget);
          /** @type {?} */

          var positions = [targetPosition];
          /** @type {?} */

          var strategy = this._overlay.position().flexibleConnectedTo(anchor).withFlexibleDimensions(false).withPush(false).withViewportMargin(0).withLockedPosition(lockAlignment); // Unless the alignment is forced, add fallbacks based on the preferred positions


          if (!forceAlignment) {
            /** @type {?} */
            var fallbacks = this._getFallbacks(horizontalTarget, verticalTarget);

            positions.push.apply(positions, _toConsumableArray(fallbacks));
          }

          return strategy.withPositions(positions);
        }
        /**
         * Get fallback positions based around target alignments.
         * @param {?} hTarget
         * @param {?} vTarget
         * @return {?}
         */

      }, {
        key: "_getFallbacks",
        value: function _getFallbacks(hTarget, vTarget) {
          // Determine if the target alignments overlap the anchor

          /** @type {?} */
          var horizontalOverlapAllowed = hTarget !== 'before' && hTarget !== 'after';
          /** @type {?} */

          var verticalOverlapAllowed = vTarget !== 'above' && vTarget !== 'below'; // If a target alignment doesn't cover the anchor, don't let any of the fallback alignments
          // cover the anchor

          /** @type {?} */

          var possibleHorizontalAlignments = horizontalOverlapAllowed ? ['before', 'start', 'center', 'end', 'after'] : ['before', 'after'];
          /** @type {?} */

          var possibleVerticalAlignments = verticalOverlapAllowed ? ['above', 'start', 'center', 'end', 'below'] : ['above', 'below']; // Create fallbacks for each allowed prioritized fallback alignment combo

          /** @type {?} */

          var fallbacks = [];
          prioritizeAroundTarget(hTarget, possibleHorizontalAlignments).forEach(function (h) {
            prioritizeAroundTarget(vTarget, possibleVerticalAlignments).forEach(function (v) {
              fallbacks.push(getPosition(h, v));
            });
          }); // Remove the first item since it will be the target alignment and isn't considered a fallback

          return fallbacks.slice(1, fallbacks.length);
        }
      }]);

      return SatPopoverAnchoringService;
    }();

    SatPopoverAnchoringService.ɵfac = function SatPopoverAnchoringService_Factory(t) {
      return new (t || SatPopoverAnchoringService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8));
    };

    SatPopoverAnchoringService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SatPopoverAnchoringService,
      factory: SatPopoverAnchoringService.ɵfac
    });
    /** @nocollapse */

    SatPopoverAnchoringService.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SatPopoverAnchoringService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, null);
    })();
    /**
     * Helper function to get a cdk position pair from SatPopover alignments.
     * @param {?} h
     * @param {?} v
     * @return {?}
     */


    function getPosition(h, v) {
      var _getHorizontalConnect = getHorizontalConnectionPosPair(h),
          originX = _getHorizontalConnect.originX,
          overlayX = _getHorizontalConnect.overlayX;

      var _getVerticalConnectio = getVerticalConnectionPosPair(v),
          originY = _getVerticalConnectio.originY,
          overlayY = _getVerticalConnectio.overlayY;

      return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["ConnectionPositionPair"]({
        originX: originX,
        originY: originY
      }, {
        overlayX: overlayX,
        overlayY: overlayY
      });
    }
    /**
     * Helper function to convert an overlay connection position to equivalent popover alignment.
     * @param {?} h
     * @return {?}
     */


    function getHorizontalPopoverAlignment(h) {
      if (h === 'start') {
        return 'after';
      }

      if (h === 'end') {
        return 'before';
      }

      return 'center';
    }
    /**
     * Helper function to convert an overlay connection position to equivalent popover alignment.
     * @param {?} v
     * @return {?}
     */


    function getVerticalPopoverAlignment(v) {
      if (v === 'top') {
        return 'below';
      }

      if (v === 'bottom') {
        return 'above';
      }

      return 'center';
    }
    /**
     * Helper function to convert alignment to origin/overlay position pair.
     * @param {?} h
     * @return {?}
     */


    function getHorizontalConnectionPosPair(h) {
      switch (h) {
        case 'before':
          return {
            originX: 'start',
            overlayX: 'end'
          };

        case 'start':
          return {
            originX: 'start',
            overlayX: 'start'
          };

        case 'end':
          return {
            originX: 'end',
            overlayX: 'end'
          };

        case 'after':
          return {
            originX: 'end',
            overlayX: 'start'
          };

        default:
          return {
            originX: 'center',
            overlayX: 'center'
          };
      }
    }
    /**
     * Helper function to convert alignment to origin/overlay position pair.
     * @param {?} v
     * @return {?}
     */


    function getVerticalConnectionPosPair(v) {
      switch (v) {
        case 'above':
          return {
            originY: 'top',
            overlayY: 'bottom'
          };

        case 'start':
          return {
            originY: 'top',
            overlayY: 'top'
          };

        case 'end':
          return {
            originY: 'bottom',
            overlayY: 'bottom'
          };

        case 'below':
          return {
            originY: 'bottom',
            overlayY: 'top'
          };

        default:
          return {
            originY: 'center',
            overlayY: 'center'
          };
      }
    }
    /**
     * Helper function that takes an ordered array options and returns a reorderded
     * array around the target item. e.g.:
     *
     * target: 3; options: [1, 2, 3, 4, 5, 6, 7];
     *
     * return: [3, 4, 2, 5, 1, 6, 7]
     * @template T
     * @param {?} target
     * @param {?} options
     * @return {?}
     */


    function prioritizeAroundTarget(target, options) {
      /** @type {?} */
      var targetIndex = options.indexOf(target); // Set the first item to be the target

      /** @type {?} */

      var reordered = [target]; // Make left and right stacks where the highest priority item is last

      /** @type {?} */

      var left = options.slice(0, targetIndex);
      /** @type {?} */

      var right = options.slice(targetIndex + 1, options.length).reverse(); // Alternate between stacks until one is empty

      while (left.length && right.length) {
        reordered.push(right.pop());
        reordered.push(left.pop());
      } // Flush out right side


      while (right.length) {
        reordered.push(right.pop());
      } // Flush out left side


      while (left.length) {
        reordered.push(left.pop());
      }

      return reordered;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */


    var SatPopoverAnchor = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _viewContainerRef
       * @param {?} _anchoring
       */
      function SatPopoverAnchor(_elementRef, _viewContainerRef, _anchoring) {
        _classCallCheck(this, SatPopoverAnchor);

        this._elementRef = _elementRef;
        this._viewContainerRef = _viewContainerRef;
        this._anchoring = _anchoring;
        /**
         * Emits when the popover is opened.
         */

        this.popoverOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the popover is closed.
         */

        this.popoverClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the directive is destroyed.
         */

        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }
      /**
       * Reference to the popover instance.
       * @return {?}
       */


      _createClass(SatPopoverAnchor, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this77 = this;

          // Re-emit open and close events

          /** @type {?} */
          var opened$ = this._anchoring.popoverOpened.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function () {
            return _this77.popoverOpened.emit();
          }));
          /** @type {?} */


          var closed$ = this._anchoring.popoverClosed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function (value) {
            return _this77.popoverClosed.emit(value);
          }));

          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(opened$, closed$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy)).subscribe();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._onDestroy.next();

          this._onDestroy.complete();
        }
        /**
         * Gets whether the popover is presently open.
         * @return {?}
         */

      }, {
        key: "isPopoverOpen",
        value: function isPopoverOpen() {
          return this._anchoring.isPopoverOpen();
        }
        /**
         * Toggles the popover between the open and closed states.
         * @return {?}
         */

      }, {
        key: "togglePopover",
        value: function togglePopover() {
          this._anchoring.togglePopover();
        }
        /**
         * Opens the popover.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "openPopover",
        value: function openPopover() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          this._anchoring.openPopover(options);
        }
        /**
         * Closes the popover.
         * @param {?=} value
         * @return {?}
         */

      }, {
        key: "closePopover",
        value: function closePopover(value) {
          this._anchoring.closePopover(value);
        }
        /**
         * Realign the popover to the anchor.
         * @return {?}
         */

      }, {
        key: "realignPopover",
        value: function realignPopover() {
          this._anchoring.realignPopoverToAnchor();
        }
        /**
         * Get a reference to the anchor element.
         * @return {?}
         */

      }, {
        key: "getElement",
        value: function getElement() {
          return this._elementRef;
        }
        /**
         * Throws an error if the popover instance is not provided.
         * @param {?} popover
         * @return {?}
         */

      }, {
        key: "_validateAttachedPopover",
        value: function _validateAttachedPopover(popover) {
          if (!popover || !(popover instanceof SatPopover)) {
            throw getInvalidPopoverError();
          }
        }
      }, {
        key: "attachedPopover",
        get: function get() {
          return this._attachedPopover;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._validateAttachedPopover(value);

          this._attachedPopover = value; // Anchor the popover to the element ref

          this._anchoring.anchor(this.attachedPopover, this._viewContainerRef, this._elementRef);
        }
      }]);

      return SatPopoverAnchor;
    }();

    SatPopoverAnchor.ɵfac = function SatPopoverAnchor_Factory(t) {
      return new (t || SatPopoverAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SatPopoverAnchoringService));
    };

    SatPopoverAnchor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: SatPopoverAnchor,
      selectors: [["", "satPopoverAnchorFor", ""]],
      inputs: {
        attachedPopover: ["satPopoverAnchorFor", "attachedPopover"]
      },
      outputs: {
        popoverOpened: "popoverOpened",
        popoverClosed: "popoverClosed"
      },
      exportAs: ["satPopoverAnchor"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([SatPopoverAnchoringService])]
    });
    /** @nocollapse */

    SatPopoverAnchor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: SatPopoverAnchoringService
      }];
    };

    SatPopoverAnchor.propDecorators = {
      attachedPopover: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['satPopoverAnchorFor']
      }],
      popoverOpened: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      popoverClosed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SatPopoverAnchor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[satPopoverAnchorFor]',
          exportAs: 'satPopoverAnchor',
          providers: [SatPopoverAnchoringService]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: SatPopoverAnchoringService
        }];
      }, {
        popoverOpened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        popoverClosed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        attachedPopover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['satPopoverAnchorFor']
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */


    var SatPopoverHoverDirective = /*#__PURE__*/function () {
      /**
       * @param {?} anchor
       */
      function SatPopoverHoverDirective(anchor) {
        _classCallCheck(this, SatPopoverHoverDirective);

        this.anchor = anchor;
        this._satPopoverHover = 0;
        /**
         * Emits when the directive is destroyed.
         */

        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user's mouse enters the element.
         */

        this._onMouseEnter = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user's mouse leaves the element.
         */

        this._onMouseLeave = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }
      /**
       * Amount of time to delay (ms) after hovering starts before
       * the popover opens. Defaults to 0ms.
       * @return {?}
       */


      _createClass(SatPopoverHoverDirective, [{
        key: "ngAfterViewInit",

        /**
         * @return {?}
         */
        value: function ngAfterViewInit() {
          var _this78 = this;

          // Whenever the user hovers this host element, delay the configured
          // amount of time and open the popover. Terminate if the mouse leaves
          // the host element before the delay is complete.
          this._onMouseEnter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["delay"])(_this78._satPopoverHover || 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(_this78._onMouseLeave));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy)).subscribe(function () {
            return _this78.anchor.openPopover();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._onDestroy.next();

          this._onDestroy.complete();
        }
        /**
         * @return {?}
         */

      }, {
        key: "showPopover",
        value: function showPopover() {
          this._onMouseEnter.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "closePopover",
        value: function closePopover() {
          this._onMouseLeave.next();

          this.anchor.closePopover();
        }
      }, {
        key: "satPopoverHover",
        get: function get() {
          return this._satPopoverHover;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._satPopoverHover = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(val);
        }
      }]);

      return SatPopoverHoverDirective;
    }();

    SatPopoverHoverDirective.ɵfac = function SatPopoverHoverDirective_Factory(t) {
      return new (t || SatPopoverHoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SatPopoverAnchor));
    };

    SatPopoverHoverDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: SatPopoverHoverDirective,
      selectors: [["", "satPopoverHover", ""]],
      hostBindings: function SatPopoverHoverDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function SatPopoverHoverDirective_mouseenter_HostBindingHandler() {
            return ctx.showPopover();
          })("mouseleave", function SatPopoverHoverDirective_mouseleave_HostBindingHandler() {
            return ctx.closePopover();
          });
        }
      },
      inputs: {
        satPopoverHover: "satPopoverHover"
      }
    });
    /** @nocollapse */

    SatPopoverHoverDirective.ctorParameters = function () {
      return [{
        type: SatPopoverAnchor
      }];
    };

    SatPopoverHoverDirective.propDecorators = {
      satPopoverHover: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      showPopover: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
        args: ['mouseenter']
      }],
      closePopover: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
        args: ['mouseleave']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SatPopoverHoverDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[satPopoverHover]'
        }]
      }], function () {
        return [{
          type: SatPopoverAnchor
        }];
      }, {
        satPopoverHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showPopover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['mouseenter']
        }],
        closePopover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['mouseleave']
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */


    var SatPopoverModule = function SatPopoverModule() {
      _classCallCheck(this, SatPopoverModule);
    };

    SatPopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SatPopoverModule
    });
    SatPopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SatPopoverModule_Factory(t) {
        return new (t || SatPopoverModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"]], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SatPopoverModule, {
        declarations: function declarations() {
          return [SatPopover, SatPopoverAnchor, SatPopoverHoverDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"]];
        },
        exports: function exports() {
          return [SatPopover, SatPopoverAnchor, SatPopoverHoverDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SatPopoverModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"]],
          declarations: [SatPopover, SatPopoverAnchor, SatPopoverHoverDirective],
          exports: [SatPopover, SatPopoverAnchor, SatPopoverHoverDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"]]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmNzdGF0ZS1zYXQtcG9wb3Zlci5qcyIsInNvdXJjZXMiOlsibmc6L0BuY3N0YXRlL3NhdC1wb3BvdmVyL3BvcG92ZXIvcG9wb3Zlci5hbmltYXRpb25zLnRzIiwibmc6L0BuY3N0YXRlL3NhdC1wb3BvdmVyL3BvcG92ZXIvbm90aWZpY2F0aW9uLnNlcnZpY2UudHMiLCJuZzovQG5jc3RhdGUvc2F0LXBvcG92ZXIvcG9wb3Zlci90eXBlcy50cyIsIm5nOi9AbmNzdGF0ZS9zYXQtcG9wb3Zlci9wb3BvdmVyL3BvcG92ZXIuZXJyb3JzLnRzIiwibmc6L0BuY3N0YXRlL3NhdC1wb3BvdmVyL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQudHMiLCJuZzovQG5jc3RhdGUvc2F0LXBvcG92ZXIvcG9wb3Zlci9wb3BvdmVyLWFuY2hvcmluZy5zZXJ2aWNlLnRzIiwibmc6L0BuY3N0YXRlL3NhdC1wb3BvdmVyL3BvcG92ZXIvcG9wb3Zlci1hbmNob3IuZGlyZWN0aXZlLnRzIiwibmc6L0BuY3N0YXRlL3NhdC1wb3BvdmVyL3BvcG92ZXIvcG9wb3Zlci1ob3Zlci5kaXJlY3RpdmUudHMiLCJuZzovQG5jc3RhdGUvc2F0LXBvcG92ZXIvcG9wb3Zlci9wb3BvdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQSxNQUFhLGdCQUFnQixHQUE2QixPQUFPLENBQUMsa0JBQWtCLEVBQUU7QUFDdEYsSUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFO0FBQ3ZCLFFBQUksS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDLENBQUM7QUFDaEQsUUFBSSxPQUFPLENBQUMsb0JBQW9CLEVBQzFCLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7QUFDakQsS0FBRyxDQUFDO0FBQ0osSUFB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QSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFsQkEsQUFBQSxBQzVCQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQ3hCQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFDekJBLEFBMENBLEFBQUEsQUFBQSxBQUFBLEFBU0EsQUFBQSxBQUFBLEFBNEtBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFEQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQWxLQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBaUJBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFpQkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQWVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFRQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBWUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFRQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBVUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBTUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFrQkEsQUE1S0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBSUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUlBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBT0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUlBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUtBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUtBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUlBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBSUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFJQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQW1EQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBMVVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUNBLEFBbENBLEFBQUEsQUFpTkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBM0tBLEFBQUEsQUFZQSxBQUFBLEFBS0EsQUFBQSxBQVlBLEFBQUEsQUFLQSxBQUFBLEFBZUEsQUFBQSxBQVlBLEFBQUEsQUFTQSxBQUFBLEFBU0EsQUFBQSxBQVlBLEFBQUEsQUFRQSxBQUFBLEFBUUEsQUFBQSxBQVVBLEFBQUEsQUFVQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFZQSxBQUFBLEFBQUEsQUFBQSxBQ3ROQSxBQWlEQSxBQUFBLEFBc0NBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBRkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBdENBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUEyQkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBTUEsQUFFQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBSUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFNQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQU1BLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFNQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBMVlBLEFBQUEsQUFwQ0EsQUFBQSxBQVRBLEFBQUEsQUFlQSxBQUFBLEFBd0VBLEFBQUEsQUFxV0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQVdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUN4aUJBLEFBdUJBLEFBQUEsQUFzQkEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFGQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFYQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFNQSxBQXZCQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFrQkEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBbEZBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQXBCQSxBQUFBLEFBTUEsQUFBQSxBQU9BLEFBQUEsQUFXQSxBQUFBLEFBQUEsQUFBQSxBQVdBLEFBQUEsQUFHQSxBQUFBLEFDeENBLEFBVUEsQUFBQSxBQXFCQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBWEEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBaEJBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFjQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQXpEQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBSkEsQUFBQSxBQVVBLEFBQUEsQUF3Q0EsQUFBQSxBQUFBLEFBQUEsQUFLQSxBQUFBLEFBQUEsQUFBQSxBQzVEQSxBQTZCQSxBQUFBLEFBbkJBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIGFuaW1hdGUsXG4gIHRyYW5zaXRpb24sXG4gIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YVxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybVBvcG92ZXI6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RyYW5zZm9ybVBvcG92ZXInLCBbXG4gIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICBzdHlsZSh7b3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMC4zKSd9KSxcbiAgICBhbmltYXRlKCd7e29wZW5UcmFuc2l0aW9ufX0nLFxuICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ30pKVxuICBdKSxcbiAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgIGFuaW1hdGUoJ3t7Y2xvc2VUcmFuc2l0aW9ufX0nLFxuICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDAuNSknfSkpXG4gIF0pXG5dKTtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuLyoqIEVudW1lcmF0ZWQgYWN0aW9ucyBmb3IgYSBwb3BvdmVyIHRvIHBlcmZvcm0uICovXG5leHBvcnQgZW51bSBOb3RpZmljYXRpb25BY3Rpb24ge1xuICAvKiogUG9wb3ZlciBzaG91bGQgb3Blbi4gKi9cbiAgT1BFTixcbiAgLyoqIFBvcG92ZXIgc2hvdWxkIGNsb3NlLiAqL1xuICBDTE9TRSxcbiAgLyoqIFBvcG92ZXIgc2hvdWxkIHRvZ2dsZSBvcGVuIG9yIGNsb3NlZC4gKi9cbiAgVE9HR0xFLFxuICAvKiogUG9wb3ZlciBoYXMgbmV3IHRhcmdldCBwb3NpdGlvbnMuICovXG4gIFJFUE9TSVRJT04sXG4gIC8qKiBQb3BvdmVyIG5lZWRzIG5ldyBjb25maWd1cmF0aW9uLiAqL1xuICBVUERBVEVfQ09ORklHLFxuICAvKiogUG9wb3ZlciBzaG91bGQgcmVhbGlnbiBpdHNlbGYgdG8gdGhlIGFuY2hvci4gICovXG4gIFJFQUxJR04sXG59XG5cbi8qKiBFdmVudCBvYmplY3QgZm9yIGRpc3BhdGNoaW5nIHRvIGFuY2hvcmluZyBzZXJ2aWNlLiAqL1xuZXhwb3J0IGNsYXNzIFBvcG92ZXJOb3RpZmljYXRpb24ge1xuICBjb25zdHJ1Y3RvcihcbiAgICAvKiogQWN0aW9uIHRvIHBlcmZvcm0uICovXG4gICAgcHVibGljIGFjdGlvbjogTm90aWZpY2F0aW9uQWN0aW9uLFxuICAgIC8qKiBPcHRpb25hbCBwYXlsb2FkLiAqL1xuICAgIHB1YmxpYyB2YWx1ZT86IGFueVxuICApIHsgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUG9wb3Zlck5vdGlmaWNhdGlvblNlcnZpY2Uge1xuXG4gIHByaXZhdGUgc3RvcmUgPSBuZXcgU3ViamVjdDxQb3BvdmVyTm90aWZpY2F0aW9uPigpO1xuXG4gIC8qKiBEaXNwYXRjaCBhIG5vdGlmaWNhdGlvbiB0byBhbGwgc3Vic2NyaWJlcnMuICovXG4gIGRpc3BhdGNoKG5vdGlmaWNhdGlvbjogUG9wb3Zlck5vdGlmaWNhdGlvbikge1xuICAgIHRoaXMuc3RvcmUubmV4dChub3RpZmljYXRpb24pO1xuICB9XG5cbiAgLyoqIFN0cmVhbSBvZiBub3RpZmljYXRpb24gZXZlbnRzLiAqL1xuICBldmVudHMoKTogT2JzZXJ2YWJsZTxQb3BvdmVyTm90aWZpY2F0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiogQ29tcGxldGUgZXZlbnQgc3RyZWFtLiAqL1xuICBkaXNwb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuY29tcGxldGUoKTtcbiAgfVxuXG59XG4iLCJleHBvcnQgdHlwZSBTYXRQb3BvdmVyU2Nyb2xsU3RyYXRlZ3kgPSAnbm9vcCcgfCAnYmxvY2snIHwgJ3JlcG9zaXRpb24nIHwgJ2Nsb3NlJztcbmV4cG9ydCBjb25zdCBWQUxJRF9TQ1JPTEw6IFNhdFBvcG92ZXJTY3JvbGxTdHJhdGVneVtdID0gW1xuICAnbm9vcCcsXG4gICdibG9jaycsXG4gICdyZXBvc2l0aW9uJyxcbiAgJ2Nsb3NlJ1xuXTtcblxuZXhwb3J0IHR5cGUgU2F0UG9wb3Zlckhvcml6b250YWxBbGlnbiA9ICdiZWZvcmUnIHwgJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCcgfCAnYWZ0ZXInO1xuZXhwb3J0IGNvbnN0IFZBTElEX0hPUklaX0FMSUdOOiBTYXRQb3BvdmVySG9yaXpvbnRhbEFsaWduW10gPSBbXG4gICdiZWZvcmUnLFxuICAnc3RhcnQnLFxuICAnY2VudGVyJyxcbiAgJ2VuZCcsXG4gICdhZnRlcidcbl07XG5cbmV4cG9ydCB0eXBlIFNhdFBvcG92ZXJWZXJ0aWNhbEFsaWduID0gJ2Fib3ZlJyAgfCAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdiZWxvdyc7XG5leHBvcnQgY29uc3QgVkFMSURfVkVSVF9BTElHTjogU2F0UG9wb3ZlclZlcnRpY2FsQWxpZ25bXSA9IFtcbiAgJ2Fib3ZlJyxcbiAgJ3N0YXJ0JyxcbiAgJ2NlbnRlcicsXG4gICdlbmQnLFxuICAnYmVsb3cnXG5dO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNhdFBvcG92ZXJPcGVuT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBwb3BvdmVyIHNob3VsZCByZXR1cm4gZm9jdXMgdG8gdGhlIHByZXZpb3VzbHkgZm9jdXNlZCBlbGVtZW50IGFmdGVyXG4gICAqIGNsb3NpbmcuIERlZmF1bHRzIHRvIHRydWUuXG4gICAqL1xuICByZXN0b3JlRm9jdXM/OiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBzaG91bGQgYmUgZm9jdXNlZCBvbiBvcGVuLiBEZWZhdWx0cyB0byB0cnVlLiAqL1xuICBhdXRvRm9jdXM/OiBib29sZWFuO1xufVxuIiwiaW1wb3J0IHsgVkFMSURfSE9SSVpfQUxJR04sIFZBTElEX1ZFUlRfQUxJR04sIFZBTElEX1NDUk9MTCB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW52YWxpZFBvcG92ZXJFcnJvcigpOiBFcnJvciB7XG4gIHJldHVybiBFcnJvcignU2F0UG9wb3ZlckFuY2hvciBtdXN0IGJlIHByb3ZpZGVkIGFuIFNhdFBvcG92ZXIgY29tcG9uZW50IGluc3RhbmNlLicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5hbmNob3JlZFBvcG92ZXJFcnJvcigpOiBFcnJvciB7XG4gIHJldHVybiBFcnJvcignU2F0UG9wb3ZlciBpcyBub3QgYW5jaG9yZWQgdG8gYW55IFNhdFBvcG92ZXJBbmNob3IuJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnZhbGlkSG9yaXpvbnRhbEFsaWduRXJyb3IoYWxpZ25tZW50KTogRXJyb3Ige1xuICByZXR1cm4gRXJyb3IoZ2VuZXJhdGVHZW5lcmljRXJyb3IoJ2hvcml6b250YWxBbGlnbi94QWxpZ24nLCBhbGlnbm1lbnQsIFZBTElEX0hPUklaX0FMSUdOKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnZhbGlkVmVydGljYWxBbGlnbkVycm9yKGFsaWdubWVudCk6IEVycm9yIHtcbiAgcmV0dXJuIEVycm9yKGdlbmVyYXRlR2VuZXJpY0Vycm9yKCd2ZXJ0aWNhbEFsaWduL3lBbGlnbicsIGFsaWdubWVudCwgVkFMSURfVkVSVF9BTElHTikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW52YWxpZFNjcm9sbFN0cmF0ZWd5RXJyb3Ioc3RyYXRlZ3kpOiBFcnJvciB7XG4gIHJldHVybiBFcnJvcihnZW5lcmF0ZUdlbmVyaWNFcnJvcignc2Nyb2xsU3RyYXRlZ3knLCBzdHJhdGVneSwgVkFMSURfU0NST0xMKSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlR2VuZXJpY0Vycm9yKGFwaU5hbWU6IHN0cmluZywgaW52YWxpZDogYW55LCB2YWxpZDogc3RyaW5nW10pOiBzdHJpbmcge1xuICByZXR1cm4gYEludmFsaWQgJHthcGlOYW1lfTogJyR7aW52YWxpZH0nLiBWYWxpZCBvcHRpb25zIGFyZSBgICtcbiAgICBgJHt2YWxpZC5tYXAodiA9PiBgJyR7dn0nYCkuam9pbignLCAnKX0uYDtcbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBUZW1wbGF0ZVJlZixcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvY3VzVHJhcCwgRm9jdXNUcmFwRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7IHRyYW5zZm9ybVBvcG92ZXIgfSBmcm9tICcuL3BvcG92ZXIuYW5pbWF0aW9ucyc7XG5pbXBvcnQge1xuICBOb3RpZmljYXRpb25BY3Rpb24sXG4gIFBvcG92ZXJOb3RpZmljYXRpb24sXG4gIFBvcG92ZXJOb3RpZmljYXRpb25TZXJ2aWNlLFxufSBmcm9tICcuL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIGdldFVuYW5jaG9yZWRQb3BvdmVyRXJyb3IsXG4gIGdldEludmFsaWRIb3Jpem9udGFsQWxpZ25FcnJvcixcbiAgZ2V0SW52YWxpZFZlcnRpY2FsQWxpZ25FcnJvcixcbiAgZ2V0SW52YWxpZFNjcm9sbFN0cmF0ZWd5RXJyb3IsXG59IGZyb20gJy4vcG9wb3Zlci5lcnJvcnMnO1xuaW1wb3J0IHtcbiAgU2F0UG9wb3ZlclNjcm9sbFN0cmF0ZWd5LFxuICBTYXRQb3BvdmVySG9yaXpvbnRhbEFsaWduLFxuICBTYXRQb3BvdmVyVmVydGljYWxBbGlnbixcbiAgVkFMSURfU0NST0xMLFxuICBWQUxJRF9IT1JJWl9BTElHTixcbiAgVkFMSURfVkVSVF9BTElHTixcbiAgU2F0UG9wb3Zlck9wZW5PcHRpb25zLFxufSBmcm9tICcuL3R5cGVzJztcblxuLy8gU2VlIGh0dHA6Ly9jdWJpYy1iZXppZXIuY29tLyMuMjUsLjgsLjI1LDEgZm9yIHJlZmVyZW5jZS5cbmNvbnN0IERFRkFVTFRfVFJBTlNJVElPTiAgPSAnMjAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYXQtcG9wb3ZlcicsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGFuaW1hdGlvbnM6IFt0cmFuc2Zvcm1Qb3BvdmVyXSxcbiAgc3R5bGVVcmxzOiBbJy4vcG9wb3Zlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9wb3Zlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNhdFBvcG92ZXIgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgLyoqIEFsaWdubWVudCBvZiB0aGUgcG9wb3ZlciBvbiB0aGUgaG9yaXpvbnRhbCBheGlzLiAqL1xuICBASW5wdXQoKVxuICBnZXQgaG9yaXpvbnRhbEFsaWduKCkgeyByZXR1cm4gdGhpcy5faG9yaXpvbnRhbEFsaWduOyB9XG4gIHNldCBob3Jpem9udGFsQWxpZ24odmFsOiBTYXRQb3BvdmVySG9yaXpvbnRhbEFsaWduKSB7XG4gICAgdGhpcy5fdmFsaWRhdGVIb3Jpem9udGFsQWxpZ24odmFsKTtcbiAgICBpZiAodGhpcy5faG9yaXpvbnRhbEFsaWduICE9PSB2YWwpIHtcbiAgICAgIHRoaXMuX2hvcml6b250YWxBbGlnbiA9IHZhbDtcbiAgICAgIHRoaXMuX2Rpc3BhdGNoQ29uZmlnTm90aWZpY2F0aW9uKG5ldyBQb3BvdmVyTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbkFjdGlvbi5SRVBPU0lUSU9OKSk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2hvcml6b250YWxBbGlnbjogU2F0UG9wb3Zlckhvcml6b250YWxBbGlnbiA9ICdjZW50ZXInO1xuXG4gIC8qKiBBbGlnbm1lbnQgb2YgdGhlIHBvcG92ZXIgb24gdGhlIHggYXhpcy4gQWxpYXMgZm9yIGBob3Jpem9udGFsQWxpZ25gLiAqL1xuICBASW5wdXQoKVxuICBnZXQgeEFsaWduKCkgeyByZXR1cm4gdGhpcy5ob3Jpem9udGFsQWxpZ247IH1cbiAgc2V0IHhBbGlnbih2YWw6IFNhdFBvcG92ZXJIb3Jpem9udGFsQWxpZ24pIHsgdGhpcy5ob3Jpem9udGFsQWxpZ24gPSB2YWw7IH1cblxuICAvKiogQWxpZ25tZW50IG9mIHRoZSBwb3BvdmVyIG9uIHRoZSB2ZXJ0aWNhbCBheGlzLiAqL1xuICBASW5wdXQoKVxuICBnZXQgdmVydGljYWxBbGlnbigpIHsgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsQWxpZ247IH1cbiAgc2V0IHZlcnRpY2FsQWxpZ24odmFsOiBTYXRQb3BvdmVyVmVydGljYWxBbGlnbikge1xuICAgIHRoaXMuX3ZhbGlkYXRlVmVydGljYWxBbGlnbih2YWwpO1xuICAgIGlmICh0aGlzLl92ZXJ0aWNhbEFsaWduICE9PSB2YWwpIHtcbiAgICAgIHRoaXMuX3ZlcnRpY2FsQWxpZ24gPSB2YWw7XG4gICAgICB0aGlzLl9kaXNwYXRjaENvbmZpZ05vdGlmaWNhdGlvbihuZXcgUG9wb3Zlck5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25BY3Rpb24uUkVQT1NJVElPTikpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF92ZXJ0aWNhbEFsaWduOiBTYXRQb3BvdmVyVmVydGljYWxBbGlnbiA9ICdjZW50ZXInO1xuXG4gIC8qKiBBbGlnbm1lbnQgb2YgdGhlIHBvcG92ZXIgb24gdGhlIHkgYXhpcy4gQWxpYXMgZm9yIGB2ZXJ0aWNhbEFsaWduYC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHlBbGlnbigpIHsgcmV0dXJuIHRoaXMudmVydGljYWxBbGlnbjsgfVxuICBzZXQgeUFsaWduKHZhbDogU2F0UG9wb3ZlclZlcnRpY2FsQWxpZ24pIHsgdGhpcy52ZXJ0aWNhbEFsaWduID0gdmFsOyB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHBvcG92ZXIgYWx3YXlzIG9wZW5zIHdpdGggdGhlIHNwZWNpZmllZCBhbGlnbm1lbnQuICovXG4gIEBJbnB1dCgpXG4gIGdldCBmb3JjZUFsaWdubWVudCgpIHsgcmV0dXJuIHRoaXMuX2ZvcmNlQWxpZ25tZW50OyB9XG4gIHNldCBmb3JjZUFsaWdubWVudCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBjb2VyY2VkVmFsID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbCk7XG4gICAgaWYgKHRoaXMuX2ZvcmNlQWxpZ25tZW50ICE9PSBjb2VyY2VkVmFsKSB7XG4gICAgICB0aGlzLl9mb3JjZUFsaWdubWVudCA9IGNvZXJjZWRWYWw7XG4gICAgICB0aGlzLl9kaXNwYXRjaENvbmZpZ05vdGlmaWNhdGlvbihuZXcgUG9wb3Zlck5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25BY3Rpb24uUkVQT1NJVElPTikpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9mb3JjZUFsaWdubWVudCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBwb3BvdmVyJ3MgYWxpZ25tZW50IGlzIGxvY2tlZCBhZnRlciBvcGVuaW5nLiBUaGlzIHByZXZlbnRzIHRoZSBwb3BvdmVyXG4gICAqIGZyb20gY2hhbmdpbmcgaXRzIGFsaWduZW1lbnQgd2hlbiBzY3JvbGxpbmcgb3IgY2hhbmdpbmcgdGhlIHNpemUgb2YgdGhlIHZpZXdwb3J0LlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGxvY2tBbGlnbm1lbnQoKSB7IHJldHVybiB0aGlzLl9sb2NrQWxpZ25tZW50OyB9XG4gIHNldCBsb2NrQWxpZ25tZW50KHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IGNvZXJjZWRWYWwgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsKTtcbiAgICBpZiAodGhpcy5fbG9ja0FsaWdubWVudCAhPT0gY29lcmNlZFZhbCkge1xuICAgICAgdGhpcy5fbG9ja0FsaWdubWVudCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWwpO1xuICAgICAgdGhpcy5fZGlzcGF0Y2hDb25maWdOb3RpZmljYXRpb24obmV3IFBvcG92ZXJOb3RpZmljYXRpb24oTm90aWZpY2F0aW9uQWN0aW9uLlJFUE9TSVRJT04pKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfbG9ja0FsaWdubWVudCA9IGZhbHNlO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBzaG91bGQgYmUgZm9jdXNlZCBvbiBvcGVuLiAqL1xuICBASW5wdXQoKVxuICBnZXQgYXV0b0ZvY3VzKCkgeyByZXR1cm4gdGhpcy5fYXV0b0ZvY3VzICYmIHRoaXMuX2F1dG9Gb2N1c092ZXJyaWRlOyB9XG4gIHNldCBhdXRvRm9jdXModmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYXV0b0ZvY3VzID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbCk7XG4gIH1cbiAgcHJpdmF0ZSBfYXV0b0ZvY3VzID0gdHJ1ZTtcbiAgX2F1dG9Gb2N1c092ZXJyaWRlID0gdHJ1ZTtcblxuIC8qKiBXaGV0aGVyIHRoZSBwb3BvdmVyIHNob3VsZCByZXR1cm4gZm9jdXMgdG8gdGhlIHByZXZpb3VzbHkgZm9jdXNlZCBlbGVtZW50IGFmdGVyIGNsb3NpbmcuICovXG4gQElucHV0KClcbiAgZ2V0IHJlc3RvcmVGb2N1cygpIHsgcmV0dXJuIHRoaXMuX3Jlc3RvcmVGb2N1cyAmJiB0aGlzLl9yZXN0b3JlRm9jdXNPdmVycmlkZTsgfVxuICBzZXQgcmVzdG9yZUZvY3VzKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX3Jlc3RvcmVGb2N1cyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWwpO1xuICB9XG4gIHByaXZhdGUgX3Jlc3RvcmVGb2N1cyA9IHRydWU7XG4gIF9yZXN0b3JlRm9jdXNPdmVycmlkZSA9IHRydWU7XG5cbiAgLyoqIEhvdyB0aGUgcG9wb3ZlciBzaG91bGQgaGFuZGxlIHNjcm9sbGluZy4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHNjcm9sbFN0cmF0ZWd5KCkgeyByZXR1cm4gdGhpcy5fc2Nyb2xsU3RyYXRlZ3k7IH1cbiAgc2V0IHNjcm9sbFN0cmF0ZWd5KHZhbDogU2F0UG9wb3ZlclNjcm9sbFN0cmF0ZWd5KSB7XG4gICAgdGhpcy5fdmFsaWRhdGVTY3JvbGxTdHJhdGVneSh2YWwpO1xuICAgIGlmICh0aGlzLl9zY3JvbGxTdHJhdGVneSAhPT0gdmFsKSB7XG4gICAgICB0aGlzLl9zY3JvbGxTdHJhdGVneSA9IHZhbDtcbiAgICAgIHRoaXMuX2Rpc3BhdGNoQ29uZmlnTm90aWZpY2F0aW9uKG5ldyBQb3BvdmVyTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbkFjdGlvbi5VUERBVEVfQ09ORklHKSk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX3Njcm9sbFN0cmF0ZWd5OiBTYXRQb3BvdmVyU2Nyb2xsU3RyYXRlZ3kgPSAncmVwb3NpdGlvbic7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHBvcG92ZXIgc2hvdWxkIGhhdmUgYSBiYWNrZHJvcCAoaW5jbHVkZXMgY2xvc2luZyBvbiBjbGljaykuICovXG4gIEBJbnB1dCgpXG4gIGdldCBoYXNCYWNrZHJvcCgpIHsgcmV0dXJuIHRoaXMuX2hhc0JhY2tkcm9wOyB9XG4gIHNldCBoYXNCYWNrZHJvcCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oYXNCYWNrZHJvcCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWwpO1xuICB9XG4gIHByaXZhdGUgX2hhc0JhY2tkcm9wID0gZmFsc2U7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHBvcG92ZXIgc2hvdWxkIGNsb3NlIHdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSBiYWNrZHJvcCBvciBwcmVzc2VzIEVTQy4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGludGVyYWN0aXZlQ2xvc2UoKSB7IHJldHVybiB0aGlzLl9pbnRlcmFjdGl2ZUNsb3NlOyB9XG4gIHNldCBpbnRlcmFjdGl2ZUNsb3NlKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2ludGVyYWN0aXZlQ2xvc2UgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsKTtcbiAgfVxuICBwcml2YXRlIF9pbnRlcmFjdGl2ZUNsb3NlID0gdHJ1ZTtcblxuICAvKiogQ3VzdG9tIHRyYW5zaXRpb24gdG8gdXNlIHdoaWxlIG9wZW5pbmcuICovXG4gIEBJbnB1dCgpXG4gIGdldCBvcGVuVHJhbnNpdGlvbigpIHsgcmV0dXJuIHRoaXMuX29wZW5UcmFuc2l0aW9uOyB9XG4gIHNldCBvcGVuVHJhbnNpdGlvbih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuX29wZW5UcmFuc2l0aW9uID0gdmFsO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9vcGVuVHJhbnNpdGlvbiA9IERFRkFVTFRfVFJBTlNJVElPTjtcblxuICAvKiogQ3VzdG9tIHRyYW5zaXRpb24gdG8gdXNlIHdoaWxlIGNsb3NpbmcuICovXG4gIEBJbnB1dCgpXG4gIGdldCBjbG9zZVRyYW5zaXRpb24oKSB7IHJldHVybiB0aGlzLl9jbG9zZVRyYW5zaXRpb247IH1cbiAgc2V0IGNsb3NlVHJhbnNpdGlvbih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuX2Nsb3NlVHJhbnNpdGlvbiA9IHZhbDtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfY2xvc2VUcmFuc2l0aW9uID0gREVGQVVMVF9UUkFOU0lUSU9OO1xuXG4gIC8qKiBPcHRpb25hbCBiYWNrZHJvcCBjbGFzcy4gKi9cbiAgQElucHV0KCkgYmFja2Ryb3BDbGFzcyA9ICcnO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBwb3BvdmVyIGlzIG9wZW5lZC4gKi9cbiAgQE91dHB1dCgpIG9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgcG9wb3ZlciBpcyBjbG9zZWQuICovXG4gIEBPdXRwdXQoKSBjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgcG9wb3ZlciBoYXMgZmluaXNoZWQgb3BlbmluZy4gKi9cbiAgQE91dHB1dCgpIGFmdGVyT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgcG9wb3ZlciBoYXMgZmluaXNoZWQgY2xvc2luZy4gKi9cbiAgQE91dHB1dCgpIGFmdGVyQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGJhY2tkcm9wIGlzIGNsaWNrZWQuICovXG4gIEBPdXRwdXQoKSBiYWNrZHJvcENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gYSBrZXlkb3duIGV2ZW50IGlzIHRhcmdldGVkIHRvIHRoaXMgcG9wb3ZlcidzIG92ZXJsYXkuICovXG4gIEBPdXRwdXQoKSBvdmVybGF5S2V5ZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRlbXBsYXRlIHNvIGl0IGNhbiBiZSBwbGFjZWQgd2l0aGluIGEgcG9ydGFsLiAqL1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqIENsYXNzZXMgdG8gYmUgYWRkZWQgdG8gdGhlIHBvcG92ZXIgZm9yIHNldHRpbmcgdGhlIGNvcnJlY3QgdHJhbnNmb3JtIG9yaWdpbi4gKi9cbiAgX2NsYXNzTGlzdDogYW55ID0ge307XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHBvcG92ZXIgaXMgcHJlc2VudGx5IG9wZW4uICovXG4gIF9vcGVuID0gZmFsc2U7XG5cbiAgLyoqIEluc3RhbmNlIG9mIG5vdGlmaWNhdGlvbiBzZXJ2aWNlLiBXaWxsIGJlIHVuZGVmaW5lZCB1bnRpbCBhdHRhY2hlZCB0byBhbiBhbmNob3IuICovXG4gIF9ub3RpZmljYXRpb25zOiBQb3BvdmVyTm90aWZpY2F0aW9uU2VydmljZTtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IHRvIGJ1aWxkIGEgZm9jdXMgdHJhcCBhcm91bmQuICovXG4gIEBWaWV3Q2hpbGQoJ2ZvY3VzVHJhcEVsZW1lbnQnKVxuICBwcml2YXRlIF9mb2N1c1RyYXBFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIC8qKiBSZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgdGhhdCB3YXMgZm9jdXNlZCBiZWZvcmUgb3BlbmluZy4gKi9cbiAgcHJpdmF0ZSBfcHJldmlvdXNseUZvY3VzZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAvKiogUmVmZXJlbmNlIHRvIGEgZm9jdXMgdHJhcCBhcm91bmQgdGhlIHBvcG92ZXIuICovXG4gIHByaXZhdGUgX2ZvY3VzVHJhcDogRm9jdXNUcmFwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2ZvY3VzVHJhcEZhY3Rvcnk6IEZvY3VzVHJhcEZhY3RvcnksXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3NldEFsaWdubWVudENsYXNzZXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9ub3RpZmljYXRpb25zKSB7XG4gICAgICB0aGlzLl9ub3RpZmljYXRpb25zLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH1cblxuICAvKiogT3BlbiB0aGlzIHBvcG92ZXIuICovXG4gIG9wZW4ob3B0aW9uczogU2F0UG9wb3Zlck9wZW5PcHRpb25zID0ge30pOiB2b2lkIHtcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBuZXcgUG9wb3Zlck5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25BY3Rpb24uT1BFTiwgb3B0aW9ucyk7XG4gICAgdGhpcy5fZGlzcGF0Y2hBY3Rpb25Ob3RpZmljYXRpb24obm90aWZpY2F0aW9uKTtcbiAgfVxuXG4gIC8qKiBDbG9zZSB0aGlzIHBvcG92ZXIuICovXG4gIGNsb3NlKHZhbHVlPzogYW55KTogdm9pZCB7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uID0gbmV3IFBvcG92ZXJOb3RpZmljYXRpb24oTm90aWZpY2F0aW9uQWN0aW9uLkNMT1NFLCB2YWx1ZSk7XG4gICAgdGhpcy5fZGlzcGF0Y2hBY3Rpb25Ob3RpZmljYXRpb24obm90aWZpY2F0aW9uKTtcbiAgfVxuXG4gIC8qKiBUb2dnbGUgdGhpcyBwb3BvdmVyIG9wZW4gb3IgY2xvc2VkLiAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uID0gbmV3IFBvcG92ZXJOb3RpZmljYXRpb24oTm90aWZpY2F0aW9uQWN0aW9uLlRPR0dMRSk7XG4gICAgdGhpcy5fZGlzcGF0Y2hBY3Rpb25Ob3RpZmljYXRpb24obm90aWZpY2F0aW9uKTtcbiAgfVxuXG4gIC8qKiBSZWFsaWduIHRoZSBwb3BvdmVyIHRvIHRoZSBhbmNob3IuICovXG4gIHJlYWxpZ24oKTogdm9pZCB7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uID0gbmV3IFBvcG92ZXJOb3RpZmljYXRpb24oTm90aWZpY2F0aW9uQWN0aW9uLlJFQUxJR04pO1xuICAgIHRoaXMuX2Rpc3BhdGNoQWN0aW9uTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbik7XG4gIH1cblxuICAvKiogR2V0cyB3aGV0aGVyIHRoZSBwb3BvdmVyIGlzIHByZXNlbnRseSBvcGVuLiAqL1xuICBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW47XG4gIH1cblxuICAvKiogR2V0cyBhbiBhbmltYXRpb24gY29uZmlnIHdpdGggY3VzdG9taXplZCAob3IgZGVmYXVsdCkgdHJhbnNpdGlvbiB2YWx1ZXMuICovXG4gIF9nZXRBbmltYXRpb24oKTogeyB2YWx1ZTogYW55LCBwYXJhbXM6IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6ICd2aXNpYmxlJyxcbiAgICAgIHBhcmFtczogeyBvcGVuVHJhbnNpdGlvbjogdGhpcy5vcGVuVHJhbnNpdGlvbiwgY2xvc2VUcmFuc2l0aW9uOiB0aGlzLmNsb3NlVHJhbnNpdGlvbiB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKiBDYWxsYmFjayBmb3Igd2hlbiB0aGUgcG9wb3ZlciBpcyBmaW5pc2hlZCBhbmltYXRpbmcgaW4gb3Igb3V0LiAqL1xuICBfb25BbmltYXRpb25Eb25lKGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgIGlmIChldmVudC50b1N0YXRlID09PSAndmlzaWJsZScpIHtcbiAgICAgIHRoaXMuX3RyYXBGb2N1cygpO1xuICAgICAgdGhpcy5hZnRlck9wZW4uZW1pdCgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLl9yZXN0b3JlRm9jdXNBbmREZXN0cm95VHJhcCgpO1xuICAgICAgdGhpcy5hZnRlckNsb3NlLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQXBwbHkgYWxpZ25tZW50IGNsYXNzZXMgYmFzZWQgb24gYWxpZ25tZW50IGlucHV0cy4gKi9cbiAgX3NldEFsaWdubWVudENsYXNzZXMoaG9yaXpBbGlnbiA9IHRoaXMuaG9yaXpvbnRhbEFsaWduLCB2ZXJ0QWxpZ24gPSB0aGlzLnZlcnRpY2FsQWxpZ24pIHtcbiAgICB0aGlzLl9jbGFzc0xpc3RbJ3NhdC1wb3BvdmVyLWJlZm9yZSddID0gaG9yaXpBbGlnbiA9PT0gJ2JlZm9yZScgfHwgaG9yaXpBbGlnbiA9PT0gJ2VuZCc7XG4gICAgdGhpcy5fY2xhc3NMaXN0WydzYXQtcG9wb3Zlci1hZnRlciddICA9IGhvcml6QWxpZ24gPT09ICdhZnRlcicgfHwgaG9yaXpBbGlnbiA9PT0gJ3N0YXJ0JztcblxuICAgIHRoaXMuX2NsYXNzTGlzdFsnc2F0LXBvcG92ZXItYWJvdmUnXSA9IHZlcnRBbGlnbiA9PT0gJ2Fib3ZlJyB8fCB2ZXJ0QWxpZ24gPT09ICdlbmQnO1xuICAgIHRoaXMuX2NsYXNzTGlzdFsnc2F0LXBvcG92ZXItYmVsb3cnXSA9IHZlcnRBbGlnbiA9PT0gJ2JlbG93JyB8fCB2ZXJ0QWxpZ24gPT09ICdzdGFydCc7XG5cbiAgICB0aGlzLl9jbGFzc0xpc3RbJ3NhdC1wb3BvdmVyLWNlbnRlciddID0gaG9yaXpBbGlnbiA9PT0gJ2NlbnRlcicgfHwgdmVydEFsaWduID09PSAnY2VudGVyJztcbiAgfVxuXG4gIC8qKiBNb3ZlIHRoZSBmb2N1cyBpbnNpZGUgdGhlIGZvY3VzIHRyYXAgYW5kIHJlbWVtYmVyIHdoZXJlIHRvIHJldHVybiBsYXRlci4gKi9cbiAgcHJpdmF0ZSBfdHJhcEZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcblxuICAgIC8vIFRoZXJlIHdvbid0IGJlIGEgZm9jdXMgdHJhcCBlbGVtZW50IGlmIHRoZSBjbG9zZSBhbmltYXRpb24gc3RhcnRzIGJlZm9yZSBvcGVuIGZpbmlzaGVzXG4gICAgaWYgKCF0aGlzLl9mb2N1c1RyYXBFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9mb2N1c1RyYXAgJiYgdGhpcy5fZm9jdXNUcmFwRWxlbWVudCkge1xuICAgICAgdGhpcy5fZm9jdXNUcmFwID0gdGhpcy5fZm9jdXNUcmFwRmFjdG9yeS5jcmVhdGUodGhpcy5fZm9jdXNUcmFwRWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcbiAgICAgIHRoaXMuX2ZvY3VzVHJhcC5mb2N1c0luaXRpYWxFbGVtZW50V2hlblJlYWR5KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlc3RvcmUgZm9jdXMgdG8gdGhlIGVsZW1lbnQgZm9jdXNlZCBiZWZvcmUgdGhlIHBvcG92ZXIgb3BlbmVkLiBBbHNvIGRlc3Ryb3kgdHJhcC4gKi9cbiAgcHJpdmF0ZSBfcmVzdG9yZUZvY3VzQW5kRGVzdHJveVRyYXAoKTogdm9pZCB7XG4gICAgY29uc3QgdG9Gb2N1cyA9IHRoaXMuX3ByZXZpb3VzbHlGb2N1c2VkRWxlbWVudDtcblxuICAgIC8vIE11c3QgY2hlY2sgYWN0aXZlIGVsZW1lbnQgaXMgZm9jdXNhYmxlIGZvciBJRSBzYWtlXG4gICAgaWYgKHRvRm9jdXMgJiYgJ2ZvY3VzJyBpbiB0b0ZvY3VzICYmIHRoaXMucmVzdG9yZUZvY3VzKSB7XG4gICAgICB0aGlzLl9wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuX2ZvY3VzVHJhcCkge1xuICAgICAgdGhpcy5fZm9jdXNUcmFwLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX2ZvY3VzVHJhcCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKiogU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBmb2N1c2VkIGJlZm9yZSB0aGUgcG9wb3ZlciB3YXMgb3BlbmVkLiAqL1xuICBwcml2YXRlIF9zYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xuICAgICAgdGhpcy5fcHJldmlvdXNseUZvY3VzZWRFbGVtZW50ID0gdGhpcy5fZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICB9XG4gIH1cblxuICAvKiogRGlzcGF0Y2ggYSBub3RpZmljYXRpb24gdG8gdGhlIG5vdGlmaWNhdGlvbiBzZXJ2aWNlLCBpZiBwb3NzaWJsZS4gKi9cbiAgcHJpdmF0ZSBfZGlzcGF0Y2hDb25maWdOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBQb3BvdmVyTm90aWZpY2F0aW9uKSB7XG4gICAgaWYgKHRoaXMuX25vdGlmaWNhdGlvbnMpIHtcbiAgICAgIHRoaXMuX25vdGlmaWNhdGlvbnMuZGlzcGF0Y2gobm90aWZpY2F0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvKiogRGlzcGF0Y2ggYSBub3RpZmljYXRpb24gdG8gdGhlIG5vdGlmaWNhdGlvbiBzZXJ2aWNlIGFuZCB0aHJvdyBpZiB1bmFibGUgdG8uICovXG4gIHByaXZhdGUgX2Rpc3BhdGNoQWN0aW9uTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogUG9wb3Zlck5vdGlmaWNhdGlvbikge1xuICAgIGlmICghdGhpcy5fbm90aWZpY2F0aW9ucykge1xuICAgICAgdGhyb3cgZ2V0VW5hbmNob3JlZFBvcG92ZXJFcnJvcigpO1xuICAgIH1cblxuICAgIHRoaXMuX25vdGlmaWNhdGlvbnMuZGlzcGF0Y2gobm90aWZpY2F0aW9uKTtcbiAgfVxuXG4gIC8qKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIGFsaWdubWVudCBpcyBub3QgYSB2YWxpZCBob3Jpem9udGFsQWxpZ24uICovXG4gIHByaXZhdGUgX3ZhbGlkYXRlSG9yaXpvbnRhbEFsaWduKHBvczogU2F0UG9wb3Zlckhvcml6b250YWxBbGlnbik6IHZvaWQge1xuICAgIGlmIChWQUxJRF9IT1JJWl9BTElHTi5pbmRleE9mKHBvcykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBnZXRJbnZhbGlkSG9yaXpvbnRhbEFsaWduRXJyb3IocG9zKTtcbiAgICB9XG4gIH1cblxuICAvKiogVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBhbGlnbm1lbnQgaXMgbm90IGEgdmFsaWQgdmVydGljYWxBbGlnbi4gKi9cbiAgcHJpdmF0ZSBfdmFsaWRhdGVWZXJ0aWNhbEFsaWduKHBvczogU2F0UG9wb3ZlclZlcnRpY2FsQWxpZ24pOiB2b2lkIHtcbiAgICBpZiAoVkFMSURfVkVSVF9BTElHTi5pbmRleE9mKHBvcykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBnZXRJbnZhbGlkVmVydGljYWxBbGlnbkVycm9yKHBvcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFRocm93cyBhbiBlcnJvciBpZiB0aGUgc2Nyb2xsIHN0cmF0ZWd5IGlzIG5vdCBhIHZhbGlkIHN0cmF0ZWd5LiAqL1xuICBwcml2YXRlIF92YWxpZGF0ZVNjcm9sbFN0cmF0ZWd5KHN0cmF0ZWd5OiBTYXRQb3BvdmVyU2Nyb2xsU3RyYXRlZ3kpOiB2b2lkIHtcbiAgICBpZiAoVkFMSURfU0NST0xMLmluZGV4T2Yoc3RyYXRlZ3kpID09PSAtMSkge1xuICAgICAgdGhyb3cgZ2V0SW52YWxpZFNjcm9sbFN0cmF0ZWd5RXJyb3Ioc3RyYXRlZ3kpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0YWJsZSxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxuICBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyxcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheUNvbmZpZyxcbiAgT3ZlcmxheVJlZixcbiAgU2Nyb2xsU3RyYXRlZ3ksXG4gIFZlcnRpY2FsQ29ubmVjdGlvblBvcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHksIERpcmVjdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgRVNDQVBFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCwgdGFrZSwgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNhdFBvcG92ZXIgfSBmcm9tICcuL3BvcG92ZXIuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIFNhdFBvcG92ZXJIb3Jpem9udGFsQWxpZ24sXG4gIFNhdFBvcG92ZXJWZXJ0aWNhbEFsaWduLFxuICBTYXRQb3BvdmVyU2Nyb2xsU3RyYXRlZ3ksXG4gIFNhdFBvcG92ZXJPcGVuT3B0aW9ucyxcbn0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCB7IFBvcG92ZXJOb3RpZmljYXRpb25TZXJ2aWNlLCBOb3RpZmljYXRpb25BY3Rpb24gfSBmcm9tICcuL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIHByb3ZpZGVkIGJ5IHRoZSBwb3BvdmVyIGZvciB0aGUgYW5jaG9yaW5nIHNlcnZpY2VcbiAqIHRvIGJ1aWxkIHRoZSBjb3JyZWN0IG92ZXJsYXkgY29uZmlnLlxuICovXG5pbnRlcmZhY2UgUG9wb3ZlckNvbmZpZyB7XG4gIGhvcml6b250YWxBbGlnbjogU2F0UG9wb3Zlckhvcml6b250YWxBbGlnbjtcbiAgdmVydGljYWxBbGlnbjogU2F0UG9wb3ZlclZlcnRpY2FsQWxpZ247XG4gIGhhc0JhY2tkcm9wOiBib29sZWFuO1xuICBiYWNrZHJvcENsYXNzOiBzdHJpbmc7XG4gIHNjcm9sbFN0cmF0ZWd5OiBTYXRQb3BvdmVyU2Nyb2xsU3RyYXRlZ3k7XG4gIGZvcmNlQWxpZ25tZW50OiBib29sZWFuO1xuICBsb2NrQWxpZ25tZW50OiBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2F0UG9wb3ZlckFuY2hvcmluZ1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBwb3BvdmVyIGlzIG9wZW5lZC4gKi9cbiAgcG9wb3Zlck9wZW5lZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHBvcG92ZXIgaXMgY2xvc2VkLiAqL1xuICBwb3BvdmVyQ2xvc2VkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBvdmVybGF5IGNvbnRhaW5pbmcgdGhlIHBvcG92ZXIgY29tcG9uZW50LiAqL1xuICBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSB0YXJnZXQgcG9wb3Zlci4gKi9cbiAgcHJpdmF0ZSBfcG9wb3ZlcjogU2F0UG9wb3ZlcjtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSB2aWV3IGNvbnRhaW5lciBmb3IgdGhlIHBvcG92ZXIgdGVtcGxhdGUuICovXG4gIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgYW5jaG9yIGVsZW1lbnQuICovXG4gIHByaXZhdGUgX2FuY2hvcjogRWxlbWVudFJlZjtcblxuICAvKiogUmVmZXJlbmNlIHRvIGEgdGVtcGxhdGUgcG9ydGFsIHdoZXJlIHRoZSBvdmVybGF5IHdpbGwgYmUgYXR0YWNoZWQuICovXG4gIHByaXZhdGUgX3BvcnRhbDogVGVtcGxhdGVQb3J0YWw8YW55PjtcblxuICAvKiogQ29tbXVuaWNhdGlvbnMgY2hhbm5lbCB3aXRoIHRoZSBwb3BvdmVyLiAqL1xuICBwcml2YXRlIF9ub3RpZmljYXRpb25zOiBQb3BvdmVyTm90aWZpY2F0aW9uU2VydmljZTtcblxuICAvKiogU2luZ2xlIHN1YnNjcmlwdGlvbiB0byBub3RpZmljYXRpb25zIHNlcnZpY2UgZXZlbnRzLiAqL1xuICBwcml2YXRlIF9ub3RpZmljYXRpb25zU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqIFNpbmdsZSBzdWJzY3JpcHRpb24gdG8gcG9zaXRpb24gY2hhbmdlcy4gKi9cbiAgcHJpdmF0ZSBfcG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvKiogV2hldGhlciB0aGUgcG9wb3ZlciBpcyBwcmVzZW50bHkgb3Blbi4gKi9cbiAgcHJpdmF0ZSBfcG9wb3Zlck9wZW4gPSBmYWxzZTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgc2VydmljZSBpcyBkZXN0cm95ZWQuICovXG4gIHByaXZhdGUgX29uRGVzdHJveSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9kaXI6IERpcmVjdGlvbmFsaXR5XG4gICkgeyB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gRGVzdHJveSBwb3BvdmVyIGJlZm9yZSB0ZXJtaW5hdGluZyBzdWJzY3JpcHRpb25zIHNvIHRoYXQgYW55IHJlc3VsdGluZ1xuICAgIC8vIGRldGFjaG1lbnRzIHVwZGF0ZSAnY2xvc2VkIHN0YXRlJ1xuICAgIHRoaXMuX2Rlc3Ryb3lQb3BvdmVyKCk7XG5cbiAgICAvLyBUZXJtaW5hdGUgc3Vic2NyaXB0aW9uc1xuICAgIGlmICh0aGlzLl9ub3RpZmljYXRpb25zU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9ub3RpZmljYXRpb25zU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wb3NpdGlvbkNoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fcG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5fb25EZXN0cm95Lm5leHQoKTtcbiAgICB0aGlzLl9vbkRlc3Ryb3kuY29tcGxldGUoKTtcblxuICAgIHRoaXMucG9wb3Zlck9wZW5lZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMucG9wb3ZlckNsb3NlZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqIEFuY2hvciBhIHBvcG92ZXIgaW5zdGFuY2UgdG8gYSB2aWV3IGFuZCBjb25uZWN0aW9uIGVsZW1lbnQuICovXG4gIGFuY2hvcihwb3BvdmVyOiBTYXRQb3BvdmVyLCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBhbmNob3I6IEVsZW1lbnRSZWYpOiB2b2lkIHtcbiAgICAvLyBEZXN0cm95IGFueSBwcmV2aW91cyBwb3BvdmVyc1xuICAgIHRoaXMuX2Rlc3Ryb3lQb3BvdmVyKCk7XG5cbiAgICAvLyBBc3NpZ24gbG9jYWwgcmVmc1xuICAgIHRoaXMuX3BvcG92ZXIgPSBwb3BvdmVyO1xuICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYgPSB2aWV3Q29udGFpbmVyUmVmO1xuICAgIHRoaXMuX2FuY2hvciA9IGFuY2hvcjtcblxuICAgIC8vIFByb3ZpZGUgbm90aWZpY2F0aW9uIHNlcnZpY2UgYXMgYSBjb21tdW5pY2F0aW9uIGNoYW5uZWwgYmV0d2VlbiBwb3BvdmVyIGFuZCBhbmNob3IuXG4gICAgLy8gVGhlbiBzdWJzY3JpYmUgdG8gbm90aWZpY2F0aW9ucyB0byB0YWtlIGFwcHJvcHJpYXRlIGFjdGlvbnMuXG4gICAgdGhpcy5fcG9wb3Zlci5fbm90aWZpY2F0aW9ucyA9IHRoaXMuX25vdGlmaWNhdGlvbnMgPSBuZXcgUG9wb3Zlck5vdGlmaWNhdGlvblNlcnZpY2UoKTtcbiAgICB0aGlzLl9zdWJzY3JpYmVUb05vdGlmaWNhdGlvbnMoKTtcbiAgfVxuXG4gIC8qKiBHZXRzIHdoZXRoZXIgdGhlIHBvcG92ZXIgaXMgcHJlc2VudGx5IG9wZW4uICovXG4gIGlzUG9wb3Zlck9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcG92ZXJPcGVuO1xuICB9XG5cbiAgLyoqIFRvZ2dsZXMgdGhlIHBvcG92ZXIgYmV0d2VlbiB0aGUgb3BlbiBhbmQgY2xvc2VkIHN0YXRlcy4gKi9cbiAgdG9nZ2xlUG9wb3ZlcigpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5fcG9wb3Zlck9wZW4gPyB0aGlzLmNsb3NlUG9wb3ZlcigpIDogdGhpcy5vcGVuUG9wb3ZlcigpO1xuICB9XG5cbiAgLyoqIE9wZW5zIHRoZSBwb3BvdmVyLiAqL1xuICBvcGVuUG9wb3ZlcihvcHRpb25zOiBTYXRQb3BvdmVyT3Blbk9wdGlvbnMgPSB7fSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fcG9wb3Zlck9wZW4pIHtcbiAgICAgIHRoaXMuX2FwcGx5T3Blbk9wdGlvbnMob3B0aW9ucyk7XG4gICAgICB0aGlzLl9jcmVhdGVPdmVybGF5KCk7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVUb0JhY2tkcm9wKCk7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVUb0VzY2FwZSgpO1xuICAgICAgdGhpcy5fc3Vic2NyaWJlVG9EZXRhY2htZW50cygpO1xuICAgICAgdGhpcy5fc2F2ZU9wZW5lZFN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIENsb3NlcyB0aGUgcG9wb3Zlci4gKi9cbiAgY2xvc2VQb3BvdmVyKHZhbHVlPzogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX292ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuX3NhdmVDbG9zZWRTdGF0ZSh2YWx1ZSk7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZWFsaWduIHRoZSBwb3BvdmVyIHRvIHRoZSBhbmNob3IuICovXG4gIHJlYWxpZ25Qb3BvdmVyVG9BbmNob3IoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX292ZXJsYXlSZWYpIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuX292ZXJsYXlSZWYuZ2V0Q29uZmlnKCk7XG4gICAgICBjb25zdCBzdHJhdGVneSA9IGNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5IGFzIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTtcbiAgICAgIHN0cmF0ZWd5LnJlYXBwbHlMYXN0UG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICAvKiogR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBhbmNob3IgZWxlbWVudC4gKi9cbiAgZ2V0QW5jaG9yRWxlbWVudCgpOiBFbGVtZW50UmVmIHtcbiAgICByZXR1cm4gdGhpcy5fYW5jaG9yO1xuICB9XG5cbiAgLyoqIEFwcGx5IGJlaGF2aW9yIHByb3BlcnRpZXMgb24gdGhlIHBvcG92ZXIgYmFzZWQgb24gdGhlIG9wZW4gb3B0aW9ucy4gKi9cbiAgcHJpdmF0ZSBfYXBwbHlPcGVuT3B0aW9ucyhvcHRpb25zOiBTYXRQb3BvdmVyT3Blbk9wdGlvbnMpOiB2b2lkIHtcbiAgICAvLyBPbmx5IG92ZXJyaWRlIHJlc3RvcmVGb2N1cyBhcyBgZmFsc2VgIGlmIHRoZSBvcHRpb24gaXMgZXhwbGljaXRseSBgZmFsc2VgXG4gICAgY29uc3QgcmVzdG9yZUZvY3VzID0gb3B0aW9ucy5yZXN0b3JlRm9jdXMgIT09IGZhbHNlO1xuICAgIHRoaXMuX3BvcG92ZXIuX3Jlc3RvcmVGb2N1c092ZXJyaWRlID0gcmVzdG9yZUZvY3VzO1xuXG4gICAgLy8gT25seSBvdmVycmlkZSBhdXRvRm9jdXMgYXMgYGZhbHNlYCBpZiB0aGUgb3B0aW9uIGlzIGV4cGxpY2l0bHkgYGZhbHNlYFxuICAgIGNvbnN0IGF1dG9Gb2N1cyA9IG9wdGlvbnMuYXV0b0ZvY3VzICE9PSBmYWxzZTtcbiAgICB0aGlzLl9wb3BvdmVyLl9hdXRvRm9jdXNPdmVycmlkZSA9IGF1dG9Gb2N1cztcbiAgfVxuXG4gIC8qKiBDcmVhdGUgYW4gb3ZlcmxheSB0byBiZSBhdHRhY2hlZCB0byB0aGUgcG9ydGFsLiAqL1xuICBwcml2YXRlIF9jcmVhdGVPdmVybGF5KCk6IE92ZXJsYXlSZWYge1xuICAgIC8vIENyZWF0ZSBvdmVybGF5IGlmIGl0IGRvZXNuJ3QgeWV0IGV4aXN0XG4gICAgaWYgKCF0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLl9wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5fcG9wb3Zlci5fdGVtcGxhdGVSZWYsIHRoaXMuX3ZpZXdDb250YWluZXJSZWYpO1xuXG4gICAgICBjb25zdCBwb3BvdmVyQ29uZmlnID0ge1xuICAgICAgICBob3Jpem9udGFsQWxpZ246IHRoaXMuX3BvcG92ZXIuaG9yaXpvbnRhbEFsaWduLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiB0aGlzLl9wb3BvdmVyLnZlcnRpY2FsQWxpZ24sXG4gICAgICAgIGhhc0JhY2tkcm9wOiB0aGlzLl9wb3BvdmVyLmhhc0JhY2tkcm9wLFxuICAgICAgICBiYWNrZHJvcENsYXNzOiB0aGlzLl9wb3BvdmVyLmJhY2tkcm9wQ2xhc3MsXG4gICAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLl9wb3BvdmVyLnNjcm9sbFN0cmF0ZWd5LFxuICAgICAgICBmb3JjZUFsaWdubWVudDogdGhpcy5fcG9wb3Zlci5mb3JjZUFsaWdubWVudCxcbiAgICAgICAgbG9ja0FsaWdubWVudDogdGhpcy5fcG9wb3Zlci5sb2NrQWxpZ25tZW50LFxuICAgICAgfTtcblxuICAgICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IHRoaXMuX2dldE92ZXJsYXlDb25maWcocG9wb3ZlckNvbmZpZywgdGhpcy5fYW5jaG9yKTtcblxuICAgICAgdGhpcy5fc3Vic2NyaWJlVG9Qb3NpdGlvbkNoYW5nZXMoXG4gICAgICAgIG92ZXJsYXlDb25maWcucG9zaXRpb25TdHJhdGVneSBhcyBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3lcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuX292ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZShvdmVybGF5Q29uZmlnKTtcbiAgICB9XG5cbiAgICAvLyBBY3R1YWxseSBvcGVuIHRoZSBwb3BvdmVyXG4gICAgdGhpcy5fb3ZlcmxheVJlZi5hdHRhY2godGhpcy5fcG9ydGFsKTtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheVJlZjtcbiAgfVxuXG5cbiAgLyoqIFJlbW92ZXMgdGhlIHBvcG92ZXIgZnJvbSB0aGUgRE9NLiBEb2VzIE5PVCB1cGRhdGUgb3BlbiBzdGF0ZS4gKi9cbiAgcHJpdmF0ZSBfZGVzdHJveVBvcG92ZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX292ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBwb3BvdmVyIGltbWVkaWF0ZWx5IGlmIGl0IGlzIGNsb3NlZCwgb3Igd2FpdHMgdW50aWwgaXRcbiAgICogaGFzIGJlZW4gY2xvc2VkIHRvIGRlc3Ryb3kgaXQuXG4gICAqL1xuICBwcml2YXRlIF9kZXN0cm95UG9wb3Zlck9uY2VDbG9zZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNQb3BvdmVyT3BlbigpICYmIHRoaXMuX292ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGV0YWNobWVudHMoKS5waXBlKFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KVxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fZGVzdHJveVBvcG92ZXIoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3lQb3BvdmVyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgYXBwcm9wcmlhdGUgYW5jaG9yIG1ldGhvZCB3aGVuIGFuIGV2ZW50IGlzIGRpc3BhdGNoZWQgdGhyb3VnaFxuICAgKiB0aGUgbm90aWZpY2F0aW9uIHNlcnZpY2UuXG4gICAqL1xuICBwcml2YXRlIF9zdWJzY3JpYmVUb05vdGlmaWNhdGlvbnMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX25vdGlmaWNhdGlvbnNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX25vdGlmaWNhdGlvbnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9ub3RpZmljYXRpb25zU3Vic2NyaXB0aW9uID0gdGhpcy5fbm90aWZpY2F0aW9ucy5ldmVudHMoKVxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQuYWN0aW9uKSB7XG4gICAgICAgICAgY2FzZSBOb3RpZmljYXRpb25BY3Rpb24uT1BFTjpcbiAgICAgICAgICAgIHRoaXMub3BlblBvcG92ZXIoZXZlbnQudmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBOb3RpZmljYXRpb25BY3Rpb24uQ0xPU0U6XG4gICAgICAgICAgICB0aGlzLmNsb3NlUG9wb3ZlcihldmVudC52YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIE5vdGlmaWNhdGlvbkFjdGlvbi5UT0dHTEU6XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVBvcG92ZXIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgTm90aWZpY2F0aW9uQWN0aW9uLlJFUE9TSVRJT046XG4gICAgICAgICAgICAvLyBUT0RPOiBXaGVuIHRoZSBvdmVybGF5J3MgcG9zaXRpb24gY2FuIGJlIGR5bmFtaWNhbGx5IGNoYW5nZWQsIGRvIG5vdCBkZXN0cm95XG4gICAgICAgICAgY2FzZSBOb3RpZmljYXRpb25BY3Rpb24uVVBEQVRFX0NPTkZJRzpcbiAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lQb3BvdmVyT25jZUNsb3NlZCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBOb3RpZmljYXRpb25BY3Rpb24uUkVBTElHTjpcbiAgICAgICAgICAgIHRoaXMucmVhbGlnblBvcG92ZXJUb0FuY2hvcigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqIENsb3NlIHBvcG92ZXIgd2hlbiBiYWNrZHJvcCBpcyBjbGlja2VkLiAqL1xuICBwcml2YXRlIF9zdWJzY3JpYmVUb0JhY2tkcm9wKCk6IHZvaWQge1xuICAgIHRoaXMuX292ZXJsYXlSZWZcbiAgICAgIC5iYWNrZHJvcENsaWNrKClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoKCkgPT4gdGhpcy5fcG9wb3Zlci5iYWNrZHJvcENsaWNrZWQuZW1pdCgpKSxcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuX3BvcG92ZXIuaW50ZXJhY3RpdmVDbG9zZSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnBvcG92ZXJDbG9zZWQpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZVBvcG92ZXIoKSk7XG4gIH1cblxuICAvKiogQ2xvc2UgcG9wb3ZlciB3aGVuIGVzY2FwZSBrZXlkb3duIGV2ZW50IG9jY3Vycy4gKi9cbiAgcHJpdmF0ZSBfc3Vic2NyaWJlVG9Fc2NhcGUoKTogdm9pZCB7XG4gICAgdGhpcy5fb3ZlcmxheVJlZlxuICAgICAgLmtleWRvd25FdmVudHMoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChldmVudCA9PiB0aGlzLl9wb3BvdmVyLm92ZXJsYXlLZXlkb3duLmVtaXQoZXZlbnQpKSxcbiAgICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSksXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLl9wb3BvdmVyLmludGVyYWN0aXZlQ2xvc2UpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5wb3BvdmVyQ2xvc2VkKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2VQb3BvdmVyKCkpO1xuICB9XG5cbiAgLyoqIFNldCBzdGF0ZSBiYWNrIHRvIGNsb3NlZCB3aGVuIGRldGFjaGVkLiAqL1xuICBwcml2YXRlIF9zdWJzY3JpYmVUb0RldGFjaG1lbnRzKCk6IHZvaWQge1xuICAgIHRoaXMuX292ZXJsYXlSZWZcbiAgICAgIC5kZXRhY2htZW50cygpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fc2F2ZUNsb3NlZFN0YXRlKCkpO1xuICB9XG5cbiAgLyoqIFNhdmUgdGhlIG9wZW5lZCBzdGF0ZSBvZiB0aGUgcG9wb3ZlciBhbmQgZW1pdC4gKi9cbiAgcHJpdmF0ZSBfc2F2ZU9wZW5lZFN0YXRlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fcG9wb3Zlck9wZW4pIHtcbiAgICAgIHRoaXMuX3BvcG92ZXIuX29wZW4gPSB0aGlzLl9wb3BvdmVyT3BlbiA9IHRydWU7XG5cbiAgICAgIHRoaXMucG9wb3Zlck9wZW5lZC5uZXh0KCk7XG4gICAgICB0aGlzLl9wb3BvdmVyLm9wZW5lZC5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNhdmUgdGhlIGNsb3NlZCBzdGF0ZSBvZiB0aGUgcG9wb3ZlciBhbmQgZW1pdC4gKi9cbiAgcHJpdmF0ZSBfc2F2ZUNsb3NlZFN0YXRlKHZhbHVlPzogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3BvcG92ZXJPcGVuKSB7XG4gICAgICB0aGlzLl9wb3BvdmVyLl9vcGVuID0gdGhpcy5fcG9wb3Zlck9wZW4gPSBmYWxzZTtcblxuICAgICAgdGhpcy5wb3BvdmVyQ2xvc2VkLm5leHQodmFsdWUpO1xuICAgICAgdGhpcy5fcG9wb3Zlci5jbG9zZWQuZW1pdCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEdldHMgdGhlIHRleHQgZGlyZWN0aW9uIG9mIHRoZSBjb250YWluaW5nIGFwcC4gKi9cbiAgcHJpdmF0ZSBfZ2V0RGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpciAmJiB0aGlzLl9kaXIudmFsdWUgPT09ICdydGwnID8gJ3J0bCcgOiAnbHRyJztcbiAgfVxuXG4gIC8qKiBDcmVhdGUgYW5kIHJldHVybiBhIGNvbmZpZyBmb3IgY3JlYXRpbmcgdGhlIG92ZXJsYXkuICovXG4gIHByaXZhdGUgX2dldE92ZXJsYXlDb25maWcoY29uZmlnOiBQb3BvdmVyQ29uZmlnLCBhbmNob3I6IEVsZW1lbnRSZWYpOiBPdmVybGF5Q29uZmlnIHtcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlDb25maWcoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5fZ2V0UG9zaXRpb25TdHJhdGVneShcbiAgICAgICAgY29uZmlnLmhvcml6b250YWxBbGlnbixcbiAgICAgICAgY29uZmlnLnZlcnRpY2FsQWxpZ24sXG4gICAgICAgIGNvbmZpZy5mb3JjZUFsaWdubWVudCxcbiAgICAgICAgY29uZmlnLmxvY2tBbGlnbm1lbnQsXG4gICAgICAgIGFuY2hvcixcbiAgICAgICksXG4gICAgICBoYXNCYWNrZHJvcDogY29uZmlnLmhhc0JhY2tkcm9wLFxuICAgICAgYmFja2Ryb3BDbGFzczogY29uZmlnLmJhY2tkcm9wQ2xhc3MgfHwgJ2Nkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJyxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLl9nZXRTY3JvbGxTdHJhdGVneUluc3RhbmNlKGNvbmZpZy5zY3JvbGxTdHJhdGVneSksXG4gICAgICBkaXJlY3Rpb246IHRoaXMuX2dldERpcmVjdGlvbigpLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSBwb3NpdGlvbiBvZiB0aGUgb3ZlcmxheSBhbmQgc2V0IHRoZSBjb3JyZWN0IGFsaWdubWVudCBjbGFzc2VzLFxuICAgKiBlbnN1cmluZyB0aGF0IHRoZSBhbmltYXRpb24gb3JpZ2luIGlzIGNvcnJlY3QsIGV2ZW4gd2l0aCBhIGZhbGxiYWNrIHBvc2l0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBfc3Vic2NyaWJlVG9Qb3NpdGlvbkNoYW5nZXMocG9zaXRpb246IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9wb3NpdGlvbkNoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fcG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wb3NpdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHBvc2l0aW9uLnBvc2l0aW9uQ2hhbmdlc1xuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpXG4gICAgICAuc3Vic2NyaWJlKGNoYW5nZSA9PiB7XG4gICAgICAgIC8vIFBvc2l0aW9uIGNoYW5nZXMgbWF5IG9jY3VyIG91dHNpZGUgdGhlIEFuZ3VsYXIgem9uZVxuICAgICAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9wb3BvdmVyLl9zZXRBbGlnbm1lbnRDbGFzc2VzKFxuICAgICAgICAgICAgZ2V0SG9yaXpvbnRhbFBvcG92ZXJBbGlnbm1lbnQoY2hhbmdlLmNvbm5lY3Rpb25QYWlyLm92ZXJsYXlYKSxcbiAgICAgICAgICAgIGdldFZlcnRpY2FsUG9wb3ZlckFsaWdubWVudChjaGFuZ2UuY29ubmVjdGlvblBhaXIub3ZlcmxheVkpLFxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICAvKiogTWFwIGEgc2Nyb2xsIHN0cmF0ZWd5IHN0cmluZyB0eXBlIHRvIGFuIGluc3RhbmNlIG9mIGEgc2Nyb2xsIHN0cmF0ZWd5LiAqL1xuICBwcml2YXRlIF9nZXRTY3JvbGxTdHJhdGVneUluc3RhbmNlKHN0cmF0ZWd5OiBTYXRQb3BvdmVyU2Nyb2xsU3RyYXRlZ3kpOiBTY3JvbGxTdHJhdGVneSB7XG4gICAgc3dpdGNoIChzdHJhdGVneSkge1xuICAgICAgY2FzZSAnYmxvY2snOlxuICAgICAgICByZXR1cm4gdGhpcy5fb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XG4gICAgICBjYXNlICdyZXBvc2l0aW9uJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX292ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKCk7XG4gICAgICBjYXNlICdjbG9zZSc6XG4gICAgICAgIHJldHVybiB0aGlzLl9vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuY2xvc2UoKTtcbiAgICAgIGNhc2UgJ25vb3AnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMuX292ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ub29wKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIENyZWF0ZSBhbmQgcmV0dXJuIGEgcG9zaXRpb24gc3RyYXRlZ3kgYmFzZWQgb24gY29uZmlnIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQgaW5zdGFuY2UuICovXG4gIHByaXZhdGUgX2dldFBvc2l0aW9uU3RyYXRlZ3koXG4gICAgaG9yaXpvbnRhbFRhcmdldDogU2F0UG9wb3Zlckhvcml6b250YWxBbGlnbixcbiAgICB2ZXJ0aWNhbFRhcmdldDogU2F0UG9wb3ZlclZlcnRpY2FsQWxpZ24sXG4gICAgZm9yY2VBbGlnbm1lbnQ6IGJvb2xlYW4sXG4gICAgbG9ja0FsaWdubWVudDogYm9vbGVhbixcbiAgICBhbmNob3I6IEVsZW1lbnRSZWYsXG4gICk6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSB7XG4gICAgLy8gQXR0YWNoIHRoZSBvdmVybGF5IGF0IHRoZSBwcmVmZXJyZWQgcG9zaXRpb25cbiAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IGdldFBvc2l0aW9uKGhvcml6b250YWxUYXJnZXQsIHZlcnRpY2FsVGFyZ2V0KTtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbdGFyZ2V0UG9zaXRpb25dO1xuXG4gICAgY29uc3Qgc3RyYXRlZ3kgPSB0aGlzLl9vdmVybGF5LnBvc2l0aW9uKClcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKGFuY2hvcilcbiAgICAgIC53aXRoRmxleGlibGVEaW1lbnNpb25zKGZhbHNlKVxuICAgICAgLndpdGhQdXNoKGZhbHNlKVxuICAgICAgLndpdGhWaWV3cG9ydE1hcmdpbigwKVxuICAgICAgLndpdGhMb2NrZWRQb3NpdGlvbihsb2NrQWxpZ25tZW50KTtcblxuICAgIC8vIFVubGVzcyB0aGUgYWxpZ25tZW50IGlzIGZvcmNlZCwgYWRkIGZhbGxiYWNrcyBiYXNlZCBvbiB0aGUgcHJlZmVycmVkIHBvc2l0aW9uc1xuICAgIGlmICghZm9yY2VBbGlnbm1lbnQpIHtcbiAgICAgIGNvbnN0IGZhbGxiYWNrcyA9IHRoaXMuX2dldEZhbGxiYWNrcyhob3Jpem9udGFsVGFyZ2V0LCB2ZXJ0aWNhbFRhcmdldCk7XG4gICAgICBwb3NpdGlvbnMucHVzaCguLi5mYWxsYmFja3MpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJhdGVneS53aXRoUG9zaXRpb25zKHBvc2l0aW9ucyk7XG4gIH1cblxuICAvKiogR2V0IGZhbGxiYWNrIHBvc2l0aW9ucyBiYXNlZCBhcm91bmQgdGFyZ2V0IGFsaWdubWVudHMuICovXG4gIHByaXZhdGUgX2dldEZhbGxiYWNrcyhcbiAgICBoVGFyZ2V0OiBTYXRQb3BvdmVySG9yaXpvbnRhbEFsaWduLFxuICAgIHZUYXJnZXQ6IFNhdFBvcG92ZXJWZXJ0aWNhbEFsaWduXG4gICk6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSB7XG4gICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSB0YXJnZXQgYWxpZ25tZW50cyBvdmVybGFwIHRoZSBhbmNob3JcbiAgICBjb25zdCBob3Jpem9udGFsT3ZlcmxhcEFsbG93ZWQgPSBoVGFyZ2V0ICE9PSAnYmVmb3JlJyAmJiBoVGFyZ2V0ICE9PSAnYWZ0ZXInO1xuICAgIGNvbnN0IHZlcnRpY2FsT3ZlcmxhcEFsbG93ZWQgPSB2VGFyZ2V0ICE9PSAnYWJvdmUnICYmIHZUYXJnZXQgIT09ICdiZWxvdyc7XG5cbiAgICAvLyBJZiBhIHRhcmdldCBhbGlnbm1lbnQgZG9lc24ndCBjb3ZlciB0aGUgYW5jaG9yLCBkb24ndCBsZXQgYW55IG9mIHRoZSBmYWxsYmFjayBhbGlnbm1lbnRzXG4gICAgLy8gY292ZXIgdGhlIGFuY2hvclxuICAgIGNvbnN0IHBvc3NpYmxlSG9yaXpvbnRhbEFsaWdubWVudHM6IFNhdFBvcG92ZXJIb3Jpem9udGFsQWxpZ25bXSA9XG4gICAgICBob3Jpem9udGFsT3ZlcmxhcEFsbG93ZWQgP1xuICAgICAgICBbJ2JlZm9yZScsICdzdGFydCcsICdjZW50ZXInLCAnZW5kJywgJ2FmdGVyJ10gOlxuICAgICAgICBbJ2JlZm9yZScsICdhZnRlciddO1xuICAgIGNvbnN0IHBvc3NpYmxlVmVydGljYWxBbGlnbm1lbnRzOiBTYXRQb3BvdmVyVmVydGljYWxBbGlnbltdID1cbiAgICAgIHZlcnRpY2FsT3ZlcmxhcEFsbG93ZWQgP1xuICAgICAgICBbJ2Fib3ZlJywgJ3N0YXJ0JywgJ2NlbnRlcicsICdlbmQnLCAnYmVsb3cnXSA6XG4gICAgICAgIFsnYWJvdmUnLCAnYmVsb3cnXTtcblxuICAgIC8vIENyZWF0ZSBmYWxsYmFja3MgZm9yIGVhY2ggYWxsb3dlZCBwcmlvcml0aXplZCBmYWxsYmFjayBhbGlnbm1lbnQgY29tYm9cbiAgICBjb25zdCBmYWxsYmFja3M6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFtdO1xuICAgIHByaW9yaXRpemVBcm91bmRUYXJnZXQoaFRhcmdldCwgcG9zc2libGVIb3Jpem9udGFsQWxpZ25tZW50cykuZm9yRWFjaChoID0+IHtcbiAgICAgIHByaW9yaXRpemVBcm91bmRUYXJnZXQodlRhcmdldCwgcG9zc2libGVWZXJ0aWNhbEFsaWdubWVudHMpLmZvckVhY2godiA9PiB7XG4gICAgICAgIGZhbGxiYWNrcy5wdXNoKGdldFBvc2l0aW9uKGgsIHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBpdGVtIHNpbmNlIGl0IHdpbGwgYmUgdGhlIHRhcmdldCBhbGlnbm1lbnQgYW5kIGlzbid0IGNvbnNpZGVyZWQgYSBmYWxsYmFja1xuICAgIHJldHVybiBmYWxsYmFja3Muc2xpY2UoMSwgZmFsbGJhY2tzLmxlbmd0aCk7XG4gIH1cblxufVxuXG4vKiogSGVscGVyIGZ1bmN0aW9uIHRvIGdldCBhIGNkayBwb3NpdGlvbiBwYWlyIGZyb20gU2F0UG9wb3ZlciBhbGlnbm1lbnRzLiAqL1xuZnVuY3Rpb24gZ2V0UG9zaXRpb24oXG4gIGg6IFNhdFBvcG92ZXJIb3Jpem9udGFsQWxpZ24sXG4gIHY6IFNhdFBvcG92ZXJWZXJ0aWNhbEFsaWduLFxuKTogQ29ubmVjdGlvblBvc2l0aW9uUGFpciB7XG4gIGNvbnN0IHtvcmlnaW5YLCBvdmVybGF5WH0gPSBnZXRIb3Jpem9udGFsQ29ubmVjdGlvblBvc1BhaXIoaCk7XG4gIGNvbnN0IHtvcmlnaW5ZLCBvdmVybGF5WX0gPSBnZXRWZXJ0aWNhbENvbm5lY3Rpb25Qb3NQYWlyKHYpO1xuICByZXR1cm4gbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoe29yaWdpblgsIG9yaWdpbll9LCB7b3ZlcmxheVgsIG92ZXJsYXlZfSk7XG59XG5cbi8qKiBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBhbiBvdmVybGF5IGNvbm5lY3Rpb24gcG9zaXRpb24gdG8gZXF1aXZhbGVudCBwb3BvdmVyIGFsaWdubWVudC4gKi9cbmZ1bmN0aW9uIGdldEhvcml6b250YWxQb3BvdmVyQWxpZ25tZW50KGg6IEhvcml6b250YWxDb25uZWN0aW9uUG9zKTogU2F0UG9wb3Zlckhvcml6b250YWxBbGlnbiB7XG4gIGlmIChoID09PSAnc3RhcnQnKSB7XG4gICAgcmV0dXJuICdhZnRlcic7XG4gIH1cblxuICBpZiAoaCA9PT0gJ2VuZCcpIHtcbiAgICByZXR1cm4gJ2JlZm9yZSc7XG4gIH1cblxuICByZXR1cm4gJ2NlbnRlcic7XG59XG5cbi8qKiBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBhbiBvdmVybGF5IGNvbm5lY3Rpb24gcG9zaXRpb24gdG8gZXF1aXZhbGVudCBwb3BvdmVyIGFsaWdubWVudC4gKi9cbmZ1bmN0aW9uIGdldFZlcnRpY2FsUG9wb3ZlckFsaWdubWVudCh2OiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MpOiBTYXRQb3BvdmVyVmVydGljYWxBbGlnbiB7XG4gIGlmICh2ID09PSAndG9wJykge1xuICAgIHJldHVybiAnYmVsb3cnO1xuICB9XG5cbiAgaWYgKHYgPT09ICdib3R0b20nKSB7XG4gICAgcmV0dXJuICdhYm92ZSc7XG4gIH1cblxuICByZXR1cm4gJ2NlbnRlcic7XG59XG5cbi8qKiBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBhbGlnbm1lbnQgdG8gb3JpZ2luL292ZXJsYXkgcG9zaXRpb24gcGFpci4gKi9cbmZ1bmN0aW9uIGdldEhvcml6b250YWxDb25uZWN0aW9uUG9zUGFpcihoOiBTYXRQb3BvdmVySG9yaXpvbnRhbEFsaWduKTpcbiAgICB7b3JpZ2luWDogSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MsIG92ZXJsYXlYOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvc30ge1xuICBzd2l0Y2ggKGgpIHtcbiAgICBjYXNlICdiZWZvcmUnOlxuICAgICAgcmV0dXJuIHtvcmlnaW5YOiAnc3RhcnQnLCBvdmVybGF5WDogJ2VuZCd9O1xuICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgIHJldHVybiB7b3JpZ2luWDogJ3N0YXJ0Jywgb3ZlcmxheVg6ICdzdGFydCd9O1xuICAgIGNhc2UgJ2VuZCc6XG4gICAgICByZXR1cm4ge29yaWdpblg6ICdlbmQnLCBvdmVybGF5WDogJ2VuZCd9O1xuICAgIGNhc2UgJ2FmdGVyJzpcbiAgICAgIHJldHVybiB7b3JpZ2luWDogJ2VuZCcsIG92ZXJsYXlYOiAnc3RhcnQnfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHtvcmlnaW5YOiAnY2VudGVyJywgb3ZlcmxheVg6ICdjZW50ZXInfTtcbiAgfVxufVxuXG4vKiogSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnZlcnQgYWxpZ25tZW50IHRvIG9yaWdpbi9vdmVybGF5IHBvc2l0aW9uIHBhaXIuICovXG5mdW5jdGlvbiBnZXRWZXJ0aWNhbENvbm5lY3Rpb25Qb3NQYWlyKHY6IFNhdFBvcG92ZXJWZXJ0aWNhbEFsaWduKTpcbiAgICB7b3JpZ2luWTogVmVydGljYWxDb25uZWN0aW9uUG9zLCBvdmVybGF5WTogVmVydGljYWxDb25uZWN0aW9uUG9zfSB7XG4gIHN3aXRjaCAodikge1xuICAgIGNhc2UgJ2Fib3ZlJzpcbiAgICAgIHJldHVybiB7b3JpZ2luWTogJ3RvcCcsIG92ZXJsYXlZOiAnYm90dG9tJ307XG4gICAgY2FzZSAnc3RhcnQnOlxuICAgICAgcmV0dXJuIHtvcmlnaW5ZOiAndG9wJywgb3ZlcmxheVk6ICd0b3AnfTtcbiAgICBjYXNlICdlbmQnOlxuICAgICAgcmV0dXJuIHtvcmlnaW5ZOiAnYm90dG9tJywgb3ZlcmxheVk6ICdib3R0b20nfTtcbiAgICBjYXNlICdiZWxvdyc6XG4gICAgICByZXR1cm4ge29yaWdpblk6ICdib3R0b20nLCBvdmVybGF5WTogJ3RvcCd9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge29yaWdpblk6ICdjZW50ZXInLCBvdmVybGF5WTogJ2NlbnRlcid9O1xuICB9XG59XG5cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbiBvcmRlcmVkIGFycmF5IG9wdGlvbnMgYW5kIHJldHVybnMgYSByZW9yZGVyZGVkXG4gKiBhcnJheSBhcm91bmQgdGhlIHRhcmdldCBpdGVtLiBlLmcuOlxuICpcbiAqIHRhcmdldDogMzsgb3B0aW9uczogWzEsIDIsIDMsIDQsIDUsIDYsIDddO1xuICpcbiAqIHJldHVybjogWzMsIDQsIDIsIDUsIDEsIDYsIDddXG4gKi9cbmZ1bmN0aW9uIHByaW9yaXRpemVBcm91bmRUYXJnZXQ8VD4odGFyZ2V0OiBULCBvcHRpb25zOiBUW10pOiBUW10ge1xuICBjb25zdCB0YXJnZXRJbmRleCA9IG9wdGlvbnMuaW5kZXhPZih0YXJnZXQpO1xuXG4gIC8vIFNldCB0aGUgZmlyc3QgaXRlbSB0byBiZSB0aGUgdGFyZ2V0XG4gIGNvbnN0IHJlb3JkZXJlZCA9IFt0YXJnZXRdO1xuXG4gIC8vIE1ha2UgbGVmdCBhbmQgcmlnaHQgc3RhY2tzIHdoZXJlIHRoZSBoaWdoZXN0IHByaW9yaXR5IGl0ZW0gaXMgbGFzdFxuICBjb25zdCBsZWZ0ID0gb3B0aW9ucy5zbGljZSgwLCB0YXJnZXRJbmRleCk7XG4gIGNvbnN0IHJpZ2h0ID0gb3B0aW9ucy5zbGljZSh0YXJnZXRJbmRleCArIDEsIG9wdGlvbnMubGVuZ3RoKS5yZXZlcnNlKCk7XG5cbiAgLy8gQWx0ZXJuYXRlIGJldHdlZW4gc3RhY2tzIHVudGlsIG9uZSBpcyBlbXB0eVxuICB3aGlsZSAobGVmdC5sZW5ndGggJiYgcmlnaHQubGVuZ3RoKSB7XG4gICAgcmVvcmRlcmVkLnB1c2gocmlnaHQucG9wKCkpO1xuICAgIHJlb3JkZXJlZC5wdXNoKGxlZnQucG9wKCkpO1xuICB9XG5cbiAgLy8gRmx1c2ggb3V0IHJpZ2h0IHNpZGVcbiAgd2hpbGUgKHJpZ2h0Lmxlbmd0aCkge1xuICAgIHJlb3JkZXJlZC5wdXNoKHJpZ2h0LnBvcCgpKTtcbiAgfVxuXG4gIC8vIEZsdXNoIG91dCBsZWZ0IHNpZGVcbiAgd2hpbGUgKGxlZnQubGVuZ3RoKSB7XG4gICAgcmVvcmRlcmVkLnB1c2gobGVmdC5wb3AoKSk7XG4gIH1cblxuICByZXR1cm4gcmVvcmRlcmVkO1xufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTYXRQb3BvdmVyIH0gZnJvbSAnLi9wb3BvdmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBnZXRJbnZhbGlkUG9wb3ZlckVycm9yIH0gZnJvbSAnLi9wb3BvdmVyLmVycm9ycyc7XG5pbXBvcnQgeyBTYXRQb3BvdmVyQW5jaG9yaW5nU2VydmljZSB9IGZyb20gJy4vcG9wb3Zlci1hbmNob3Jpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBTYXRQb3BvdmVyT3Blbk9wdGlvbnMgfSBmcm9tICcuL3R5cGVzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3NhdFBvcG92ZXJBbmNob3JGb3JdJyxcbiAgZXhwb3J0QXM6ICdzYXRQb3BvdmVyQW5jaG9yJyxcbiAgcHJvdmlkZXJzOiBbU2F0UG9wb3ZlckFuY2hvcmluZ1NlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBTYXRQb3BvdmVyQW5jaG9yIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKiBSZWZlcmVuY2UgdG8gdGhlIHBvcG92ZXIgaW5zdGFuY2UuICovXG4gIEBJbnB1dCgnc2F0UG9wb3ZlckFuY2hvckZvcicpXG4gIGdldCBhdHRhY2hlZFBvcG92ZXIoKSB7IHJldHVybiB0aGlzLl9hdHRhY2hlZFBvcG92ZXI7IH1cbiAgc2V0IGF0dGFjaGVkUG9wb3Zlcih2YWx1ZTogU2F0UG9wb3Zlcikge1xuICAgIHRoaXMuX3ZhbGlkYXRlQXR0YWNoZWRQb3BvdmVyKHZhbHVlKTtcbiAgICB0aGlzLl9hdHRhY2hlZFBvcG92ZXIgPSB2YWx1ZTtcbiAgICAvLyBBbmNob3IgdGhlIHBvcG92ZXIgdG8gdGhlIGVsZW1lbnQgcmVmXG4gICAgdGhpcy5fYW5jaG9yaW5nLmFuY2hvcih0aGlzLmF0dGFjaGVkUG9wb3ZlciwgdGhpcy5fdmlld0NvbnRhaW5lclJlZiwgdGhpcy5fZWxlbWVudFJlZik7XG4gIH1cbiAgcHJpdmF0ZSBfYXR0YWNoZWRQb3BvdmVyOiBTYXRQb3BvdmVyO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBwb3BvdmVyIGlzIG9wZW5lZC4gKi9cbiAgQE91dHB1dCgpIHBvcG92ZXJPcGVuZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHBvcG92ZXIgaXMgY2xvc2VkLiAqL1xuICBAT3V0cHV0KCkgcG9wb3ZlckNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBkaXJlY3RpdmUgaXMgZGVzdHJveWVkLiAqL1xuICBwcml2YXRlIF9vbkRlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwdWJsaWMgX2FuY2hvcmluZzogU2F0UG9wb3ZlckFuY2hvcmluZ1NlcnZpY2UsXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gUmUtZW1pdCBvcGVuIGFuZCBjbG9zZSBldmVudHNcbiAgICBjb25zdCBvcGVuZWQkID0gdGhpcy5fYW5jaG9yaW5nLnBvcG92ZXJPcGVuZWRcbiAgICAgIC5waXBlKHRhcCgoKSA9PiB0aGlzLnBvcG92ZXJPcGVuZWQuZW1pdCgpKSk7XG4gICAgY29uc3QgY2xvc2VkJCA9IHRoaXMuX2FuY2hvcmluZy5wb3BvdmVyQ2xvc2VkXG4gICAgICAucGlwZSh0YXAodmFsdWUgPT4gdGhpcy5wb3BvdmVyQ2xvc2VkLmVtaXQodmFsdWUpKSk7XG4gICAgbWVyZ2Uob3BlbmVkJCwgY2xvc2VkJCkucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9vbkRlc3Ryb3kubmV4dCgpO1xuICAgIHRoaXMuX29uRGVzdHJveS5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqIEdldHMgd2hldGhlciB0aGUgcG9wb3ZlciBpcyBwcmVzZW50bHkgb3Blbi4gKi9cbiAgaXNQb3BvdmVyT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYW5jaG9yaW5nLmlzUG9wb3Zlck9wZW4oKTtcbiAgfVxuXG4gIC8qKiBUb2dnbGVzIHRoZSBwb3BvdmVyIGJldHdlZW4gdGhlIG9wZW4gYW5kIGNsb3NlZCBzdGF0ZXMuICovXG4gIHRvZ2dsZVBvcG92ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5fYW5jaG9yaW5nLnRvZ2dsZVBvcG92ZXIoKTtcbiAgfVxuXG4gIC8qKiBPcGVucyB0aGUgcG9wb3Zlci4gKi9cbiAgb3BlblBvcG92ZXIob3B0aW9uczogU2F0UG9wb3Zlck9wZW5PcHRpb25zID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9hbmNob3Jpbmcub3BlblBvcG92ZXIob3B0aW9ucyk7XG4gIH1cblxuICAvKiogQ2xvc2VzIHRoZSBwb3BvdmVyLiAqL1xuICBjbG9zZVBvcG92ZXIodmFsdWU/OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9hbmNob3JpbmcuY2xvc2VQb3BvdmVyKHZhbHVlKTtcbiAgfVxuXG4gIC8qKiBSZWFsaWduIHRoZSBwb3BvdmVyIHRvIHRoZSBhbmNob3IuICovXG4gIHJlYWxpZ25Qb3BvdmVyKCk6IHZvaWQge1xuICAgIHRoaXMuX2FuY2hvcmluZy5yZWFsaWduUG9wb3ZlclRvQW5jaG9yKCk7XG4gIH1cblxuICAvKiogR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBhbmNob3IgZWxlbWVudC4gKi9cbiAgZ2V0RWxlbWVudCgpOiBFbGVtZW50UmVmIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZjtcbiAgfVxuXG4gIC8qKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHBvcG92ZXIgaW5zdGFuY2UgaXMgbm90IHByb3ZpZGVkLiAqL1xuICBwcml2YXRlIF92YWxpZGF0ZUF0dGFjaGVkUG9wb3Zlcihwb3BvdmVyOiBTYXRQb3BvdmVyKTogdm9pZCB7XG4gICAgaWYgKCFwb3BvdmVyIHx8ICEocG9wb3ZlciBpbnN0YW5jZW9mIFNhdFBvcG92ZXIpKSB7XG4gICAgICB0aHJvdyBnZXRJbnZhbGlkUG9wb3ZlckVycm9yKCk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXksIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTYXRQb3BvdmVyQW5jaG9yIH0gZnJvbSAnLi9wb3BvdmVyLWFuY2hvci5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2F0UG9wb3ZlckhvdmVyXSdcbn0pXG5leHBvcnQgY2xhc3MgU2F0UG9wb3ZlckhvdmVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIEFtb3VudCBvZiB0aW1lIHRvIGRlbGF5IChtcykgYWZ0ZXIgaG92ZXJpbmcgc3RhcnRzIGJlZm9yZVxuICAgKiB0aGUgcG9wb3ZlciBvcGVucy4gRGVmYXVsdHMgdG8gMG1zLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNhdFBvcG92ZXJIb3ZlcigpIHsgcmV0dXJuIHRoaXMuX3NhdFBvcG92ZXJIb3ZlcjsgfVxuICBzZXQgc2F0UG9wb3ZlckhvdmVyKHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fc2F0UG9wb3ZlckhvdmVyID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsKTtcbiAgfVxuICBwcml2YXRlIF9zYXRQb3BvdmVySG92ZXIgPSAwO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBkaXJlY3RpdmUgaXMgZGVzdHJveWVkLiAqL1xuICBwcml2YXRlIF9vbkRlc3Ryb3kgPSBuZXcgU3ViamVjdCgpO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSB1c2VyJ3MgbW91c2UgZW50ZXJzIHRoZSBlbGVtZW50LiAqL1xuICBwcml2YXRlIF9vbk1vdXNlRW50ZXIgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSB1c2VyJ3MgbW91c2UgbGVhdmVzIHRoZSBlbGVtZW50LiAqL1xuICBwcml2YXRlIF9vbk1vdXNlTGVhdmUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhbmNob3I6IFNhdFBvcG92ZXJBbmNob3IpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBXaGVuZXZlciB0aGUgdXNlciBob3ZlcnMgdGhpcyBob3N0IGVsZW1lbnQsIGRlbGF5IHRoZSBjb25maWd1cmVkXG4gICAgLy8gYW1vdW50IG9mIHRpbWUgYW5kIG9wZW4gdGhlIHBvcG92ZXIuIFRlcm1pbmF0ZSBpZiB0aGUgbW91c2UgbGVhdmVzXG4gICAgLy8gdGhlIGhvc3QgZWxlbWVudCBiZWZvcmUgdGhlIGRlbGF5IGlzIGNvbXBsZXRlLlxuICAgIHRoaXMuX29uTW91c2VFbnRlclxuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9mKG51bGwpLnBpcGUoXG4gICAgICAgICAgICBkZWxheSh0aGlzLl9zYXRQb3BvdmVySG92ZXIgfHwgMCksXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fb25Nb3VzZUxlYXZlKSxcbiAgICAgICAgICApO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuYW5jaG9yLm9wZW5Qb3BvdmVyKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fb25EZXN0cm95Lm5leHQoKTtcbiAgICB0aGlzLl9vbkRlc3Ryb3kuY29tcGxldGUoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICBzaG93UG9wb3ZlcigpIHtcbiAgICB0aGlzLl9vbk1vdXNlRW50ZXIubmV4dCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIGNsb3NlUG9wb3ZlcigpIHtcbiAgICB0aGlzLl9vbk1vdXNlTGVhdmUubmV4dCgpO1xuICAgIHRoaXMuYW5jaG9yLmNsb3NlUG9wb3ZlcigpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBBMTF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgQmlkaU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcblxuaW1wb3J0IHsgU2F0UG9wb3ZlciB9IGZyb20gJy4vcG9wb3Zlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2F0UG9wb3ZlckFuY2hvciB9IGZyb20gJy4vcG9wb3Zlci1hbmNob3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNhdFBvcG92ZXJIb3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vcG9wb3Zlci1ob3Zlci5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgQTExeU1vZHVsZSxcbiAgICBCaWRpTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTYXRQb3BvdmVyLFxuICAgIFNhdFBvcG92ZXJBbmNob3IsXG4gICAgU2F0UG9wb3ZlckhvdmVyRGlyZWN0aXZlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2F0UG9wb3ZlcixcbiAgICBTYXRQb3BvdmVyQW5jaG9yLFxuICAgIFNhdFBvcG92ZXJIb3ZlckRpcmVjdGl2ZSxcbiAgICBCaWRpTW9kdWxlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNhdFBvcG92ZXJNb2R1bGUgeyB9XG4iXX0=

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/listing/listing.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listing/listing.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListingListingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" class=\"head\">{{ 'main.property_list.title' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-label class=\"lbl_main\">Properties Search</ion-label>\n\n  <form [formGroup]=\"listing_form\" autocomplete=\"off\">\n\n    <ion-item lines=\"none\" class=\"input-item space\">\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">{{ 'main.property_list.search_radius' | translate }}\n      </ion-label>\n      <ion-select interface=\"action-sheet\" formControlName=\"radius\"\n        placeholder=\"{{ 'main.property_list.this_area_only' | translate }}\" class=\"btn-select bg\" mode=\"md\">\n        <ion-select-option value=\"0.25\">Within ¼ mile</ion-select-option>\n        <ion-select-option value=\"0.5\">Within ½ mile</ion-select-option>\n        <ion-select-option value=\"1.0\">Within 1 mile</ion-select-option>\n        <ion-select-option value=\"3.0\">Within 3 miles</ion-select-option>\n        <ion-select-option value=\"5.0\">Within 5 miles</ion-select-option>\n        <ion-select-option value=\"10.0\">Within 10 miles</ion-select-option>\n        <ion-select-option value=\"15.0\">Within 15 miles</ion-select-option>\n        <ion-select-option value=\"20.0\">Within 20 miles</ion-select-option>\n        <ion-select-option value=\"30.0\">Within 30 miles</ion-select-option>\n        <ion-select-option value=\"40.0\">Within 40 miles</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"listing_form.controls.radius.hasError('required') && listing_form.controls.radius.touched\">\n      <p class=\"content add-error\">{{ 'main.property_list.err_select' | translate }}</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add\">\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">{{ 'main.property_list.category' | translate }}</ion-label>\n      <ion-select interface=\"action-sheet\" formControlName=\"category\"\n        placeholder=\"{{ 'main.property_list.select_property_category' | translate }}\" class=\"btn-select bg\" mode=\"md\"\n        (ionChange)=\"onChangePropertyType($event)\">\n        <ion-select-option *ngFor=\"let opt of propertyType\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"listing_form.controls.category .hasError('required') && listing_form.controls.category .touched\">\n      <p class=\"content add-error\">{{ 'main.property_list.err_select' | translate }}</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">{{ 'main.property_list.property_type' | translate }}\n      </ion-label>\n      <ion-select interface=\"action-sheet\" formControlName=\"pType\"\n        placeholder=\"{{ 'main.property_list.select_property_type' | translate }}\" class=\"btn-select bg\" mode=\"md\">\n        <ion-select-option *ngFor=\"let category of this.categoryArry\" [value]=\"category.id\">{{ category.cat_name }}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"listing_form.controls.pType.hasError('required') && listing_form.controls.pType.touched\">\n      <p class=\"content add-error\">{{ 'main.property_list.err_select' | translate }}</p>\n    </ion-item>\n\n    <ion-row>\n      <ion-col size=\"6\" class=\"col_right\">\n        <ion-item lines=\"none\" class=\"input-item add space\">\n          <ion-label position=\"stacked\" class=\"lbl-dropdown\">{{ 'main.property_list.price_range' | translate }}\n          </ion-label>\n          <ion-select interface=\"action-sheet\" formControlName=\"pRange1\"\n            placeholder=\"{{ 'main.property_list.min' | translate }}\" class=\"btn-select bg\" mode=\"md\">\n            <ion-select-option value=\"\" selected=\"selected\">Min</ion-select-option>\n            <ion-select-option *ngFor=\"let min of this.interval\" value=\"{{ min }}\">{{min}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"listing_form.controls.pRange1.hasError('required') && listing_form.controls.pRange1.touched\">\n          <p class=\"content add-error\">{{ 'main.property_list.err_select' | translate }}</p>\n        </ion-item>\n\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_left add_top\">\n        <ion-item lines=\"none\" class=\"input-item add space\">\n          <ion-label position=\"stacked\" class=\"lbl-dropdown\"></ion-label>\n          <ion-select interface=\"action-sheet\" formControlName=\"pRange2\"\n            placeholder=\"{{ 'main.property_list.max' | translate }}\" class=\"btn-select bg\" mode=\"md\">\n            <ion-select-option value=\"\" selected=\"selected\">Max</ion-select-option>\n            <ion-select-option *ngFor=\"let max of this.interval\" value=\"{{ max }}\">{{max}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"listing_form.controls.pRange2.hasError('required') && listing_form.controls.pRange2.touched\">\n          <p class=\"content add-error\">{{ 'main.property_list.err_select' | translate }}</p>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">{{ 'main.property_list.added_to_site' | translate }}\n      </ion-label>\n      <ion-select interface=\"action-sheet\" formControlName=\"site\"\n        placeholder=\"{{ 'main.property_list.anytime' | translate }}\" class=\"btn-select bg\" mode=\"md\">\n        <ion-select-option value=\"\" selected=\"selected\">Anytime</ion-select-option>\n        <ion-select-option value=\"1\">Last 24 hours</ion-select-option>\n        <ion-select-option value=\"3\">Last 3 days</ion-select-option>\n        <ion-select-option value=\"7\">Last 7 days</ion-select-option>\n        <ion-select-option value=\"14\">Last 14 days</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"listing_form.controls.site.hasError('required') && listing_form.controls.site.touched\">\n      <p class=\"content add-error\">{{ 'main.property_list.err_select' | translate }}</p>\n    </ion-item>\n\n  </form>\n\n  <ion-button expand=\"block\" class=\"btn_find\" (click)=\"submit()\">{{ 'main.property_list.find_properties' | translate }}\n  </ion-button>\n\n  <ion-row class=\"row_res\" *ngIf=\"PropertyContent\">\n    <ion-col size=\"10\" class=\"lbl_res_spc\">\n      <ion-label>\n        <span class=\"lbl_resDigit\">{{PropertyContent.length}}</span>\n        <span class=\"lbl_res\"> {{ 'main.property_list.properties' | translate }}</span>\n      </ion-label>\n    </ion-col>\n\n    <ion-col size=\"2\" class=\"col_left\">\n      <ion-button fill=\"clear\" class=\"btn_filter\" [satPopoverAnchorFor]=\"menu\" (click)=\"menu.toggle()\">\n        <ion-icon name=\"filter\"></ion-icon>\n\n      </ion-button>\n    </ion-col>\n\n\n    <sat-popover #menu horizontalAlign=\"after\" hasBackdrop>\n      <div class=\"menu-wrapper\" tabIndex=\"0\">\n        <button *ngFor=\"let item of menuItems\" class=\"menu-item\" [satPopoverAnchorFor]=\"child\"\n          (click)=\"item.children ? child.toggle() : select([item.val])\">\n\n          {{ item.val }} <span *ngIf=\"item.children\">></span>\n\n          <sat-popover #child horizontalAlign=\"after\" hasBackdrop>\n            <div class=\"menu-wrapper\" tabIndex=\"0\">\n              <button *ngFor=\"let childItem of item.children\" class=\"menu-item\"\n                (click)=\"select([item.val, childItem.val])\">\n                {{ childItem.val }}\n              </button>\n            </div>\n          </sat-popover>\n\n        </button>\n      </div>\n    </sat-popover>\n\n  </ion-row>\n\n  <div *ngFor=\"let property of PropertyContent;\">\n\n    <br>\n\n    <ion-slides class=\"slides_imgs\" pager=\"true\" [options]=\"slideOptsDetails\">\n      <ng-container *ngIf=\"property.image else elseblock\">\n        <ion-slide *ngFor=\"let slide of property.image.split(','); let i = index;\">\n          <img [src]=\"getimageUrl(slide)\" class=\"img_list\" />\n      </ion-slide>\n    </ng-container>\n    <ng-template #elseblock>\n      <img src=\"{{defaultImg}}\">\n    </ng-template>\n    </ion-slides>\n\n    <ion-label class=\"lbl_price_add\">\n      {{property.slug_title}}\n    </ion-label>\n\n    <ion-label class=\"lbl_star\">{{property.propertyName}}\n    </ion-label>\n\n    <ion-label class=\"lbl_add\">\n      <ion-icon name=\"location\"></ion-icon>\n      {{property.location}}\n    </ion-label>\n\n    <ion-label color=\"medium\" class=\"lbl_desc_list\">\n      {{property.description}}\n    </ion-label>\n\n    <ion-label>\n      {{property.contact_no}} |\n    </ion-label>\n    <ion-label>\n      {{ 'main.property_list.local_call_rate' | translate }} |\n    </ion-label>\n    <ion-icon class=\"icon_mail\" name=\"mail\"></ion-icon>\n\n    <div class=\"hr_line\"></div>\n\n    <ion-label class=\"lbl_status\">\n      <Span class=\"lbl_status_head\"> {{ 'main.property_list.avaliable_for' | translate }} : </Span>\n      <span class=\"lbl_status_desc\">{{property.is_available == 1 ? 'Rent' : 'Sale'}}</span>\n    </ion-label>\n    <ion-label class=\"lbl_status\">\n      <span class=\"lbl_status_head\">{{ 'main.property_list.type' | translate }} </span>\n      <span class=\"lbl_status_desc add_spc\">{{property.categoryName | titlecase}}</span>\n      <span class=\"lbl_status_head\">{{ 'main.property_list.rooms' | translate }} </span>\n      <span class=\"lbl_status_desc\">{{property.roomName ? property.roomName : 0 }}</span>\n    </ion-label>\n\n    <ion-row>\n      <ion-col size=\"6\" class=\"lbl_price_list\">€{{property.price}}</ion-col>\n      <ion-col size=\"6\" class=\"btn_spc\">\n        <ion-button size=\"small\" (click)=\"PropertyDetails(property)\">{{ 'main.property_list.more_details' | translate }}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/listing/listing-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/listing/listing-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ListingPageRoutingModule */

  /***/
  function srcAppListingListingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListingPageRoutingModule", function () {
      return ListingPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _listing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listing.page */
    "./src/app/listing/listing.page.ts");

    var routes = [{
      path: '',
      component: _listing_page__WEBPACK_IMPORTED_MODULE_3__["ListingPage"]
    }];

    var ListingPageRoutingModule = function ListingPageRoutingModule() {
      _classCallCheck(this, ListingPageRoutingModule);
    };

    ListingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ListingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/listing/listing.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/listing/listing.module.ts ***!
    \*******************************************/

  /*! exports provided: ListingPageModule */

  /***/
  function srcAppListingListingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListingPageModule", function () {
      return ListingPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _listing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./listing-routing.module */
    "./src/app/listing/listing-routing.module.ts");
    /* harmony import */


    var _listing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./listing.page */
    "./src/app/listing/listing.page.ts");
    /* harmony import */


    var _ncstate_sat_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ncstate/sat-popover */
    "./node_modules/@ncstate/sat-popover/__ivy_ngcc__/fesm2015/ncstate-sat-popover.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var ListingPageModule = function ListingPageModule() {
      _classCallCheck(this, ListingPageModule);
    };

    ListingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ncstate_sat_popover__WEBPACK_IMPORTED_MODULE_7__["SatPopoverModule"], _listing_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListingPageRoutingModule"]],
      declarations: [_listing_page__WEBPACK_IMPORTED_MODULE_6__["ListingPage"]]
    })], ListingPageModule);
    /***/
  },

  /***/
  "./src/app/listing/listing.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/listing/listing.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppListingListingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n\n.lbl_main {\n  font-size: 28px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n\n.input-item {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n  padding: 10px 0px 0px 0px;\n  box-shadow: 0px 0px 0px #ccc;\n  margin: 0px;\n  border-bottom-left-radius: 0px;\n  border-top-right-radius: 0px;\n  margin-top: 0px;\n  background: var(--ion-color-primary-contrast);\n  --background: var(--ion-color-primary-contrast);\n}\n\n.input-item ion-icon {\n  color: var(--ion-color-medium);\n  font-size: 24px;\n}\n\n.input-item .lbl-dropdown {\n  font-size: 16px;\n  color: var(--ion-color-dark);\n  font-weight: 500;\n}\n\n.input-item .input-box {\n  border: 1px solid #ccc;\n  margin-left: 8px;\n}\n\n.input-item .btn-select {\n  border: 1px solid #ccc;\n  padding: 8px;\n  font-size: 16px;\n  border-radius: 8px;\n  background: #eee;\n  height: 44px;\n}\n\n.add {\n  padding-top: 4px !important;\n}\n\n.add_top {\n  margin-top: 14px;\n}\n\n.col_right {\n  padding: 0px 4px 0px 0px;\n}\n\n.col_left {\n  padding: 0px 0px 0px 4px;\n}\n\n.spc_right {\n  padding: 0px 8px 0px 0px;\n}\n\n.spc_left {\n  padding: 0px 0px 0px 8px;\n}\n\n.btn_find {\n  margin-top: 70px;\n  --border-radius: 8px;\n}\n\n.item_width {\n  width: 285px;\n  padding-top: 12px !important;\n  padding-right: 8px !important;\n  position: absolute;\n  right: 0;\n}\n\n.validator-error {\n  --background: transparent;\n  color: #d44848;\n  --min-height: 18px;\n  --padding-start: 0px;\n}\n\n.validator-error .content {\n  margin-bottom: 0px;\n  margin-top: 0px;\n  font-size: 12px;\n}\n\n.row_res {\n  margin-top: 16px;\n}\n\n.row_res .lbl_res_spc {\n  padding-left: 0px;\n}\n\n.row_res .lbl_resDigit {\n  font-weight: bold;\n  font-size: 24px;\n}\n\n.row_res .lbl_res {\n  font-weight: normal;\n  font-size: 16px;\n}\n\n.row_res .btn_filter {\n  margin: 0px;\n}\n\n.row_res .card_list {\n  margin: 0px;\n  border-radius: 0px;\n  box-shadow: 0px 0px;\n  background: var(--ion-color-secondary);\n  height: 100px;\n}\n\n.row_res .card_list .img_list {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 70px;\n  width: 100%;\n}\n\n.row_res .card_list .lbl_list {\n  font-weight: bold;\n  font-size: 16px;\n  color: var(--ion-color-dark);\n  padding: 5px;\n}\n\n.row_res .lbl_price {\n  display: block;\n}\n\n.row_res .lbl_price .lbl_currency {\n  font-size: 16px;\n}\n\n.row_res .lbl_price .lbl_money {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.row_res .lbl_days {\n  font-size: 14px;\n  display: block;\n  padding: 2px 0px;\n}\n\n.row_res .btn_select {\n  width: 50%;\n  margin-left: 0px;\n}\n\n.lbl_header {\n  font-weight: bold;\n  font-size: 22px;\n  padding: 5px 0px;\n}\n\n.txt {\n  font-size: 10px;\n}\n\n.spc {\n  padding: 5px 0px !important;\n}\n\n.lbl_desc {\n  font-size: 14px;\n}\n\n.img_public {\n  width: 100px;\n}\n\n.lbl_no {\n  font-size: 16px;\n  display: block;\n}\n\n.lbl_no_info {\n  font-size: 14px;\n  display: block;\n}\n\n.icon_mail {\n  text-align: center;\n  line-height: 4;\n}\n\n.icon_mail ion-icon {\n  font-size: 24px;\n}\n\n.clr {\n  background: var(--ion-color-secondary);\n}\n\n.div_main {\n  box-shadow: 1px 1px 0px 0px #ccc;\n}\n\n.slides_imgs {\n  padding-bottom: 28px;\n}\n\n.slides_imgs .img_list {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 150px;\n  width: 100%;\n}\n\n.lbl_price_add {\n  font-size: 18px;\n  font-weight: bold;\n  padding: 8px 0px;\n  display: block;\n}\n\n.lbl_star {\n  font-size: 14px;\n  display: block;\n  padding: 5px 0px;\n}\n\n.lbl_add {\n  font-size: 14px;\n  display: block;\n}\n\n.lbl_desc_list {\n  display: block;\n  font-size: 14px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 4px 0px;\n}\n\n.icon_mail {\n  vertical-align: middle;\n}\n\n.hr_line {\n  border: 1px solid #eee;\n  margin: 8px 0px;\n}\n\n.lbl_status {\n  display: block;\n  font-size: 14px;\n  padding: 0px 0px 5px 0px;\n}\n\n.lbl_status .lbl_status_head {\n  font-weight: bold;\n}\n\n.lbl_status .lbl_status_desc {\n  font-weight: normal;\n}\n\n.add_spc {\n  margin-right: 8px;\n}\n\n.lbl_price_list {\n  padding: 0px;\n  font-size: 24px;\n}\n\n.btn_spc {\n  padding: 0px;\n}\n\n.menu-wrapper {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  background: white;\n}\n\n.menu-wrapper:focus {\n  outline: none;\n}\n\n.menu-item {\n  display: block;\n  background: white;\n  padding: 16px;\n  border: none;\n  width: 100%;\n  border-radius: 0;\n}\n\n.menu-item:focus {\n  outline: none;\n  background: rgba(0, 0, 0, 0.06);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9MZXQtTW92ZS1Nb2JpbGUvc3JjL2FwcC9saXN0aW5nL2xpc3RpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9saXN0aW5nL2xpc3RpbmcucGFnZS5zY3NzIiwiL1VzZXJzL21hY21pbmkvRGVza3RvcC9Eb2N1bWVudHMvTUQvaW9uaWNQcm9qZWN0L0xldC1Nb3ZlLU1vYmlsZS9zcmMvYXBwL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0VGOztBRENBO0VBRUUsd0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtFQUNBLCtDQUFBO0FDQ0Y7O0FEQ0U7RUFDRSw4QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0U7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FETUU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNKSjs7QURRQTtFQUNFLDJCQUFBO0FDTEY7O0FEUUE7RUFDRSxnQkFBQTtBQ0xGOztBRFFBO0VBQ0Usd0JBQUE7QUNMRjs7QURRQTtFQUNFLHdCQUFBO0FDTEY7O0FET0E7RUFDRSx3QkFBQTtBQ0pGOztBRE1BO0VBQ0Usd0JBQUE7QUNIRjs7QURLQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDRkY7O0FETUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDSEY7O0FES0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDSEo7O0FET0E7RUFDRSxnQkFBQTtBQ0pGOztBRE1FO0VBQ0UsaUJBQUE7QUNKSjs7QURPRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0xKOztBRFFFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDTko7O0FEU0U7RUFDRSxXQUFBO0FDUEo7O0FEVUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtBQ1JKOztBRFVJO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDUk47O0FEVUk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNSTjs7QURZRTtFQUNFLGNBQUE7QUNWSjs7QURZSTtFQUNFLGVBQUE7QUNWTjs7QURZSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ1ZOOztBRGNFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1pKOztBRGVFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FDYko7O0FEZ0JBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNiRjs7QURlQTtFQUNFLGVBQUE7QUNaRjs7QURjQTtFQUNFLDJCQUFBO0FDWEY7O0FEYUE7RUFDRSxlQUFBO0FDVkY7O0FEWUE7RUFDRSxZQUFBO0FDVEY7O0FEV0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNQRjs7QURTQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ05GOztBRFFFO0VBQ0UsZUFBQTtBQ05KOztBRFNBO0VBQ0Usc0NBQUE7QUNORjs7QURTQTtFQUNFLGdDQUFBO0FDTkY7O0FEU0E7RUFDRSxvQkFBQTtBQ05GOztBRFFFO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDTko7O0FEU0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNORjs7QURRQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNMRjs7QURPQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDSkY7O0FETUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0hGOztBREtBO0VBQ0Usc0JBQUE7QUNGRjs7QURJQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBQ0RGOztBREdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ0FGOztBRENFO0VBQ0UsaUJBQUE7QUNDSjs7QURDRTtFQUNFLG1CQUFBO0FDQ0o7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QURFQTtFRTlRSSwrR0FDRTtFRitRSixpQkFBQTtBQ0NGOztBRENFO0VBQ0UsYUFBQTtBQ0NKOztBREdBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURFRTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbGlzdGluZy9saXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xufVxuLmxibF9tYWluIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG4uaW5wdXQtaXRlbSB7XG4gIC8vLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgcGFkZGluZzogMTBweCAwcHggMHB4IDBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggI2NjYztcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG5cbiAgLmxibC1kcm9wZG93biB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIC5pbnB1dC1ib3gge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAvLy0tcGxhY2Vob2xkZXItY29sb3I6ICNmZmY7XG4gICAgLy8tLWNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLmJ0bi1zZWxlY3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gIH1cbn1cblxuLmFkZCB7XG4gIHBhZGRpbmctdG9wOiA0cHggIWltcG9ydGFudDtcbn1cblxuLmFkZF90b3Age1xuICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuXG4uY29sX3JpZ2h0IHtcbiAgcGFkZGluZzogMHB4IDRweCAwcHggMHB4O1xufVxuXG4uY29sX2xlZnQge1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCA0cHg7XG59XG4uc3BjX3JpZ2h0IHtcbiAgcGFkZGluZzogMHB4IDhweCAwcHggMHB4O1xufVxuLnNwY19sZWZ0IHtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggOHB4O1xufVxuLmJ0bl9maW5kIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5pdGVtX3dpZHRoIHtcbiAgd2lkdGg6IDI4NXB4O1xuICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cblxuLy8gRmllbGQgRXJyb3Jcbi52YWxpZGF0b3ItZXJyb3Ige1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2Q0NDg0ODtcbiAgLS1taW4taGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcblxuICAuY29udGVudCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cblxuLnJvd19yZXMge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuXG4gIC5sYmxfcmVzX3NwYyB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cblxuICAubGJsX3Jlc0RpZ2l0IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cblxuICAubGJsX3JlcyB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuYnRuX2ZpbHRlciB7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cblxuICAuY2FyZF9saXN0IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuXG4gICAgLmltZ19saXN0IHtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5sYmxfbGlzdCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxuICB9XG5cbiAgLmxibF9wcmljZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAubGJsX2N1cnJlbmN5IHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgLmxibF9tb25leSB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cblxuICAubGJsX2RheXMge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAycHggMHB4O1xuICB9XG5cbiAgLmJ0bl9zZWxlY3Qge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxufVxuLmxibF9oZWFkZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwYWRkaW5nOiA1cHggMHB4O1xufVxuLnR4dCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5zcGMge1xuICBwYWRkaW5nOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG59XG4ubGJsX2Rlc2Mge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uaW1nX3B1YmxpYyB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5sYmxfbm8ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmxibF9ub19pbmZvIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5pY29uX21haWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA0O1xuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbi5jbHIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLmRpdl9tYWluIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAwcHggMHB4ICNjY2M7XG59XG5cbi5zbGlkZXNfaW1ncyB7XG4gIHBhZGRpbmctYm90dG9tOiAyOHB4O1xuXG4gIC5pbWdfbGlzdCB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmxibF9wcmljZV9hZGQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiA4cHggMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5sYmxfc3RhciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG59XG4ubGJsX2FkZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubGJsX2Rlc2NfbGlzdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nOiA0cHggMHB4O1xufVxuLmljb25fbWFpbCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uaHJfbGluZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIG1hcmdpbjogOHB4IDBweDtcbn1cbi5sYmxfc3RhdHVzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMHB4IDBweCA1cHggMHB4O1xuICAubGJsX3N0YXR1c19oZWFkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAubGJsX3N0YXR1c19kZXNjIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG59XG4uYWRkX3NwYyB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmxibF9wcmljZV9saXN0IHtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG4uYnRuX3NwYyB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuQGltcG9ydCBcIi4uL21peGluc1wiO1xuXG4ubWVudS13cmFwcGVyIHtcbiAgQGluY2x1ZGUgZWxldmF0aW9uKCk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbn1cblxuLm1lbnUtaXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMDtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIH1cbn1cbiIsImlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xufVxuXG4ubGJsX21haW4ge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi5pbnB1dC1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgcGFkZGluZzogMTBweCAwcHggMHB4IDBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggI2NjYztcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xufVxuLmlucHV0LWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5pbnB1dC1pdGVtIC5sYmwtZHJvcGRvd24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uaW5wdXQtaXRlbSAuaW5wdXQtYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5pbnB1dC1pdGVtIC5idG4tc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG4uYWRkIHtcbiAgcGFkZGluZy10b3A6IDRweCAhaW1wb3J0YW50O1xufVxuXG4uYWRkX3RvcCB7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG5cbi5jb2xfcmlnaHQge1xuICBwYWRkaW5nOiAwcHggNHB4IDBweCAwcHg7XG59XG5cbi5jb2xfbGVmdCB7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDRweDtcbn1cblxuLnNwY19yaWdodCB7XG4gIHBhZGRpbmc6IDBweCA4cHggMHB4IDBweDtcbn1cblxuLnNwY19sZWZ0IHtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggOHB4O1xufVxuXG4uYnRuX2ZpbmQge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLml0ZW1fd2lkdGgge1xuICB3aWR0aDogMjg1cHg7XG4gIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufVxuXG4udmFsaWRhdG9yLWVycm9yIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNkNDQ4NDg7XG4gIC0tbWluLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG4udmFsaWRhdG9yLWVycm9yIC5jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnJvd19yZXMge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLnJvd19yZXMgLmxibF9yZXNfc3BjIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4ucm93X3JlcyAubGJsX3Jlc0RpZ2l0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5yb3dfcmVzIC5sYmxfcmVzIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnJvd19yZXMgLmJ0bl9maWx0ZXIge1xuICBtYXJnaW46IDBweDtcbn1cbi5yb3dfcmVzIC5jYXJkX2xpc3Qge1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5yb3dfcmVzIC5jYXJkX2xpc3QgLmltZ19saXN0IHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucm93X3JlcyAuY2FyZF9saXN0IC5sYmxfbGlzdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5yb3dfcmVzIC5sYmxfcHJpY2Uge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yb3dfcmVzIC5sYmxfcHJpY2UgLmxibF9jdXJyZW5jeSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5yb3dfcmVzIC5sYmxfcHJpY2UgLmxibF9tb25leSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucm93X3JlcyAubGJsX2RheXMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAycHggMHB4O1xufVxuLnJvd19yZXMgLmJ0bl9zZWxlY3Qge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4ubGJsX2hlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG59XG5cbi50eHQge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5zcGMge1xuICBwYWRkaW5nOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sYmxfZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmltZ19wdWJsaWMge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5sYmxfbm8ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubGJsX25vX2luZm8ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaWNvbl9tYWlsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNDtcbn1cbi5pY29uX21haWwgaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5jbHIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLmRpdl9tYWluIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAwcHggMHB4ICNjY2M7XG59XG5cbi5zbGlkZXNfaW1ncyB7XG4gIHBhZGRpbmctYm90dG9tOiAyOHB4O1xufVxuLnNsaWRlc19pbWdzIC5pbWdfbGlzdCB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxibF9wcmljZV9hZGQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiA4cHggMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmxibF9zdGFyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNXB4IDBweDtcbn1cblxuLmxibF9hZGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubGJsX2Rlc2NfbGlzdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nOiA0cHggMHB4O1xufVxuXG4uaWNvbl9tYWlsIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmhyX2xpbmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBtYXJnaW46IDhweCAwcHg7XG59XG5cbi5sYmxfc3RhdHVzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMHB4IDBweCA1cHggMHB4O1xufVxuLmxibF9zdGF0dXMgLmxibF9zdGF0dXNfaGVhZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxibF9zdGF0dXMgLmxibF9zdGF0dXNfZGVzYyB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5hZGRfc3BjIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5sYmxfcHJpY2VfbGlzdCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uYnRuX3NwYyB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLm1lbnUtd3JhcHBlciB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ubWVudS13cmFwcGVyOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm1lbnUtaXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5tZW51LWl0ZW06Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufSIsIkBtaXhpbiBlbGV2YXRpb24oKSB7XG4gICAgYm94LXNoYWRvdzpcbiAgICAgIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLFxuICAgICAgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLFxuICAgICAgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/listing/listing.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/listing/listing.page.ts ***!
    \*****************************************/

  /*! exports provided: ListingPage */

  /***/
  function srcAppListingListingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListingPage", function () {
      return ListingPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _global_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ncstate_sat_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ncstate/sat-popover */
    "./node_modules/@ncstate/sat-popover/__ivy_ngcc__/fesm2015/ncstate-sat-popover.js");

    var ListingPage = /*#__PURE__*/function () {
      function ListingPage(api, statusBar, formBuilder, router, route, actionSheetCtrl, popoverCtrl, modal, modalCtrl) {
        var _this79 = this;

        _classCallCheck(this, ListingPage);

        this.api = api;
        this.statusBar = statusBar;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.actionSheetCtrl = actionSheetCtrl;
        this.popoverCtrl = popoverCtrl;
        this.modal = modal;
        this.modalCtrl = modalCtrl;
        this.loading = true;
        this.findLoading = false;
        this.image_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].property_image_url;
        this.thumb_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].property_thumb_url;
        this.defaultImg = '../../assets/images/default.jpg';
        this.categoryArry = [];
        this.propertyType = [];
        this.slideOptsDetails = {
          zoom: true,
          slidesPerView: 1,
          spaceBetween: 16,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          loopFillGroupWithBlank: true
        };
        this.list_process = false;
        this.menuItems = [{
          val: 'Price (Low to High)'
        }, {
          val: 'Price (High to Low)'
        }];
        var newRelated = [];
        var newarray = [];
        this.api.getOptionValue("/propertyTypeList").subscribe(function (data) {
          if (data.status == 1) {
            _this79.propertyType = data.data;
          }
        });
        this.api.presentLoading();
        this.news_process = true;
        this.route.queryParams.subscribe(function (params) {
          var token = _this79.api.isUserlogin() ? _this79.api.getToken() : "";
          var body = {
            is_available: params.t,
            search: params.k,
            token: token,
            language_id: _this79.api.getLanguage()
          };
          _this79.searchLocation = params.k;

          _this79.api.WithoutTokenAdd(body).subscribe(function (data) {
            if (data.status == 1) {
              _this79.PropertyContent = data.data.map(function (x) {
                if (x.property_content) {
                  x.property_content.primary_key = x.id;
                  return x.property_content;
                }

                setTimeout(function () {
                  _this79.news_process = false;

                  _this79.api.dismissLoading();
                }, 2000);
              });
              _this79.news_process = false;

              _this79.api.dismissLoading();
            } else {
              _this79.news_process = false;

              _this79.api.dismissLoading();
            }
          }, function (err) {});
        });
        this.news_process = false;
        this.api.dismissLoading();
        this.listing_fb();
        this.getPriceInterval();
      }

      _createClass(ListingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getPriceInterval",
        value: function getPriceInterval() {
          var _this80 = this;

          this.api.getPriceInterval().subscribe(function (data) {
            if (data.status == 1) {
              _this80.interval = data.data;
            }
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.statusBar.show();
          this.statusBar.styleLightContent();
          this.statusBar.backgroundColorByHexString('#c41a3b');
        }
      }, {
        key: "listing_fb",
        value: function listing_fb() {
          this.listing_form = this.formBuilder.group({
            radius: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pRange1: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pRange2: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            site: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "getimageUrl",
        value: function getimageUrl(imageName) {
          return this.image_url + imageName;
        }
      }, {
        key: "getthumbUrl",
        value: function getthumbUrl(imageName) {
          return this.thumb_url + imageName;
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this81 = this;

          for (var v in this.listing_form.controls) {
            this.listing_form.controls[v].markAsTouched();
          }

          this.list_process = true;

          if (this.listing_form.valid) {
            var token = this.api.isUserlogin() ? this.api.getToken() : "";
            var body = {
              property_type_id: this.listing_form.value.category,
              location: this.searchLocation,
              radius: this.listing_form.value.radius,
              catgory_id: this.listing_form.value.pType,
              min_price: Number(this.listing_form.value.pRange1),
              max_price: Number(this.listing_form.value.pRange2),
              added_to_site: this.listing_form.value.site,
              token: token,
              language_id: this.api.getLanguage()
            };
            this.PropertyContent = [];
            this.api.filterProperty(body).subscribe(function (data) {
              _this81.list_process = false;

              _this81.api.dismissLoading();

              if (data.status == 1) {
                _this81.PropertyContent = data.data.map(function (x) {
                  x.property_content.primary_key = x.id;
                  return x.property_content;
                });
              }

              _this81.list_process = false;
              _this81.loading = false;
            }, function (err) {
              _this81.list_process = false;

              _this81.api.dismissLoading();

              _this81.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
          }
        }
      }, {
        key: "onChangePropertyType",
        value: function onChangePropertyType(e) {
          var _this82 = this;

          if (e.target.value) {
            var typeId = e.target.value;

            if (typeId == 1) {
              this.api.ResidentialList(1).subscribe(function (data) {
                if (data.status == 1) {
                  _this82.categoryArry = data.data;
                }
              });
            }

            if (typeId == 2) {
              this.api.CommercialList(1).subscribe(function (data) {
                if (data.status == 1) {
                  _this82.categoryArry = data.data;
                }
              });
            }

            if (typeId == 3) {
              this.api.LandList(1).subscribe(function (data) {
                if (data.status == 1) {
                  _this82.categoryArry = data.data;
                }
              });
            }
          }
        }
      }, {
        key: "PropertyDetails",
        value: function PropertyDetails(propertyId) {
          localStorage.setItem("propertyMainId", propertyId.primary_key);
          localStorage.setItem("property_type_id", propertyId.property_type_id);

          if (propertyId) {
            this.router.navigate(["/details"], {
              queryParams: {
                pid: propertyId.primary_key
              }
            });
          }
        }
      }, {
        key: "select",
        value: function select(values) {
          if (values == 'Price (Low to High)') {
            this.PropertyContent.sort(function (a, b) {
              return parseFloat(a.price) - parseFloat(b.price);
            });
          } else if (values == 'Price (High to Low)') {
            this.PropertyContent.sort(function (a, b) {
              return parseFloat(b.price) - parseFloat(a.price);
            });
          } // close all popovers


          this.allPopovers.forEach(function (p) {
            return p.close();
          });
        }
      }]);

      return ListingPage;
    }();

    ListingPage.ctorParameters = function () {
      return [{
        type: _global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_ncstate_sat_popover__WEBPACK_IMPORTED_MODULE_8__["SatPopover"])], ListingPage.prototype, "allPopovers", void 0);
    ListingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-listing',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./listing.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/listing/listing.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./listing.page.scss */
      "./src/app/listing/listing.page.scss"))["default"]]
    })], ListingPage);
    /***/
  }
}]);
//# sourceMappingURL=listing-listing-module-es5.js.map