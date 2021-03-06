function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../server/config/default.js":
  /*!***********************************!*\
    !*** ../server/config/default.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function serverConfigDefaultJs(module, exports) {
    var config = {
      server: {
        secret: 'kjVkuti2xAyF3JGCzSZTk0YWM5JhI9mgQW4rytXc'
      },
      rtmp_server: {
        rtmp: {
          port: 1935,
          chunk_size: 60000,
          gop_cache: true,
          ping: 60,
          ping_timeout: 30
        },
        http: {
          port: 8888,
          mediaroot: './server/media',
          allow_origin: '*'
        },
        trans: {
          ffmpeg: '/usr/bin/ffmpeg',
          tasks: [{
            app: 'live',
            hls: true,
            hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
            dash: true,
            dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
          }]
        }
      }
    };
    module.exports = config;
    /***/
  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"z-index: 100; height: 100vh;width: 100%; position:fixed;\">\n    <mat-toolbar color=\"primary\">\n      <mat-icon routerLink=\"/start\">home</mat-icon><span style=\"margin-left: 5px;\">{{title}}</span>\n      <span class=\"fill\"></span>\n  \n      <div fxShow=\"true\" fxHide.lt-md=\"true\">\n        <!-- The following menu items will be hidden on both SM and XS screen sizes -->\n        <a routerLink=\"/start\" mat-button><mat-icon>home</mat-icon>Start</a>\n        <a routerLink=\"/dashboard\" mat-button><mat-icon>dashboard</mat-icon>Dashboard</a>\n        <a routerLink=\"/impressum\" mat-button><mat-icon>gavel</mat-icon>Impressum</a>\n        <a routerLink=\"/settings\" mat-button><mat-icon>settings</mat-icon>Settings</a>\n        <a href=\"#\" mat-button><mat-icon>account_box</mat-icon>Account</a>\n      </div>\n  \n      <div fxShow=\"true\" fxHide.gt-sm=\"true\">\n        <button mat-button (click)=\"sidenav.toggle()\"><mat-icon>list</mat-icon></button>\n      </div>\n    </mat-toolbar>\n    <mat-sidenav-container  style=\"background-color: transparent;\" fxFlexFill>\n      <mat-sidenav #sidenav fxLayout=\"column\">\n        <div fxLayout=\"column\">\n          <a (click)=\"sidenav.toggle()\" mat-button><mat-icon>keyboard_return</mat-icon></a>\n          <a routerLink=\"/start\" mat-button><mat-icon>home</mat-icon>Start</a>\n          <a routerLink=\"/dashboard\" mat-button><mat-icon>dashboard</mat-icon>Dashboard</a>\n          <a routerLink=\"/impressum\" mat-button><mat-icon>gavel</mat-icon>Impressum</a>\n          <a routerLink=\"/settings\" mat-button><mat-icon>settings</mat-icon>Settings</a>\n          <a href=\"#\" mat-button><mat-icon>account_box</mat-icon>Account</a>\n        </div>\n      </mat-sidenav>\n      <mat-sidenav-content><router-outlet></router-outlet></mat-sidenav-content>\n    </mat-sidenav-container>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n    <vg-player>\n    <vg-overlay-play></vg-overlay-play>\n    <vg-buffering></vg-buffering>\n\n    <vg-scrub-bar>\n        <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n        <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n    </vg-scrub-bar>\n\n    <vg-controls>\n        <vg-play-pause></vg-play-pause>\n        <vg-playback-button></vg-playback-button>\n\n        <vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\n\n        <vg-scrub-bar style=\"pointer-events: none;\"></vg-scrub-bar>\n\n        <vg-time-display vgProperty=\"left\" vgFormat=\"mm:ss\"></vg-time-display>\n        <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\n\n        <vg-track-selector></vg-track-selector>\n        <vg-mute></vg-mute>\n        <vg-volume></vg-volume>\n\n        <vg-fullscreen></vg-fullscreen>\n    </vg-controls>\n\n    <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" crossorigin>\n        <source src=\"http://localhost:8888/live/stream/index.m3u8\" type=\"application/x-mpegURL\">\n    </video>\n</vg-player>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSettingsSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"settingswindow\">\n    <div class=\"buttonscol\" fxFlex=\"20\" style=\"width: 55%\">\n        <button class=\"mybutton\" mat-flat-button (click)=\"change_state(0)\">Stream Settings </button>\n        <button class=\"mybutton\" mat-flat-button (click)=\"change_state(1)\">Account Settings</button>\n        <button class=\"mybutton\" mat-flat-button (click)=\"change_state(2)\">Privacy Settings</button>\n    </div>\n    <mat-card class=\"settingdiv\" fxFlex=\"80\" *ngIf=\"state==0 as number\">\n        <mat-card-header>\n            <mat-card-title>Stream Settings</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n            <mat-button-toggle (click)=\"manage_stream()\"\n            [checked]=\"streaming\" \n            (change)=\"streaming = $event.source.checked\">\n            Streaming\n            </mat-button-toggle>\n            {{streaming}}\n        </mat-card-content>\n    </mat-card>\n\n\n    <mat-card class=\"settingdiv\" fxFlex=\"80\" *ngIf=\"state==1 as number\">\n        <mat-card-header>\n            <mat-card-title>Account Settings</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          LOREMIMPUSUMMSUSMSM\n        </mat-card-content>\n    </mat-card>\n    \n    <mat-card class=\"settingdiv\" fxFlex=\"80\" *ngIf=\"state==2 as number\">\n        <mat-card-header >\n            <mat-card-title>Privacy Settings</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          LOREMIMPUSUMMSUSMSM\n        </mat-card-content>\n    </mat-card>\n</div>\n\n<script src=\"https://cdn.jsdelivr.net/npm/hls.js@latest\"></script>\n<!-- Or if you want a more recent canary version -->\n<!-- <script src=\"https://cdn.jsdelivr.net/npm/hls.js@canary\"></script> -->\n<video id=\"video\"></video>\n<script>\n  var video = document.getElementById('video');\n  if(Hls.isSupported()) {\n    var hls = new Hls();\n    hls.loadSource('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8');\n    hls.attachMedia(video);\n    hls.on(Hls.Events.MANIFEST_PARSED,function() {\n      video.play();\n  });\n }\n // hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.\n // When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element through the `src` property.\n // This is using the built-in support of the plain video element, without using hls.js.\n // Note: it would be more normal to wait on the 'canplay' event below however on Safari (where you are most likely to find built-in HLS support) the video.src URL must be on the user-driven\n // white-list before a 'canplay' event will be emitted; the last video event that can be reliably listened-for when the URL is not on the white-list is 'loadedmetadata'.\n  else if (video.canPlayType('application/vnd.apple.mpegurl')) {\n    video.src = 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8';\n    video.addEventListener('loadedmetadata',function() {\n      video.play();\n    });\n  }\n</script>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/startpage/startpage.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/startpage/startpage.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStartpageStartpageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n    <img style=\"width: 100%; height: 55%;\" color=\"primary\" src=\"/assets/img/banner.png\">\n\n<mat-card color=\"accent\" class=\"simple-card\">\n    <mat-card-header>\n        <mat-card-title>INTRODUCTION</mat-card-title>\n        <mat-card-subtitle>What will you find here?</mat-card-subtitle>\n    </mat-card-header>\n\n    <mat-card-content>\n        <p>\n           This will be a live streaming plattform for an amazing coding\n           community. You can enjoy the overwhelming chat features with\n           github integration and multi-stream chat rooms. <b>Learn, collect experience and grow!</b>\n        </p>\n     </mat-card-content>\n     <mat-card-actions>\n        <button mat-button>LIKE</button>\n        <button mat-button>SHARE</button>\n     </mat-card-actions>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _startpage_startpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./startpage/startpage.component */
    "./src/app/startpage/startpage.component.ts");
    /* harmony import */


    var _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./settings/settings.component */
    "./src/app/settings/settings.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/start',
      pathMatch: 'full'
    }, {
      path: 'start',
      component: _startpage_startpage_component__WEBPACK_IMPORTED_MODULE_3__["StartpageComponent"]
    }, {
      path: 'settings',
      component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"]
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'codeit';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _startpage_startpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./startpage/startpage.component */
    "./src/app/startpage/startpage.component.ts");
    /* harmony import */


    var _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./settings/settings.component */
    "./src/app/settings/settings.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! videogular2/compiled/core */
    "./node_modules/videogular2/compiled/core.js");
    /* harmony import */


    var videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var videogular2_compiled_controls__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! videogular2/compiled/controls */
    "./node_modules/videogular2/compiled/controls.js");
    /* harmony import */


    var videogular2_compiled_controls__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(videogular2_compiled_controls__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var videogular2_compiled_overlay_play__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! videogular2/compiled/overlay-play */
    "./node_modules/videogular2/compiled/overlay-play.js");
    /* harmony import */


    var videogular2_compiled_overlay_play__WEBPACK_IMPORTED_MODULE_14___default =
    /*#__PURE__*/
    __webpack_require__.n(videogular2_compiled_overlay_play__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var videogular2_compiled_buffering__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! videogular2/compiled/buffering */
    "./node_modules/videogular2/compiled/buffering.js");
    /* harmony import */


    var videogular2_compiled_buffering__WEBPACK_IMPORTED_MODULE_15___default =
    /*#__PURE__*/
    __webpack_require__.n(videogular2_compiled_buffering__WEBPACK_IMPORTED_MODULE_15__);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _startpage_startpage_component__WEBPACK_IMPORTED_MODULE_9__["StartpageComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], videogular2_compiled_buffering__WEBPACK_IMPORTED_MODULE_15__["VgBufferingModule"], videogular2_compiled_overlay_play__WEBPACK_IMPORTED_MODULE_14__["VgOverlayPlayModule"], videogular2_compiled_controls__WEBPACK_IMPORTED_MODULE_13__["VgControlsModule"], videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_12__["VgCoreModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _stream_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../stream.service */
    "./src/app/stream.service.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(streamService) {
        _classCallCheck(this, DashboardComponent);

        this.streamService = streamService;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.streamService.getLiveStreams();
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _stream_service__WEBPACK_IMPORTED_MODULE_2__["StreamService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var MaterialModules = [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [MaterialModules],
      exports: [MaterialModules]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/settings/settings.component.css":
  /*!*************************************************!*\
    !*** ./src/app/settings/settings.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSettingsSettingsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".settingswindow\n{   \n    padding-top: 10px;\n}\n\n.mybutton\n{\n    width: 100%;\n}\n\n.buttonscol\n{\n    padding-left: 10px;\n}\n\n.settingdiv\n{\n    margin-left: 10px;\n    margin-right: 15px;\n    padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdzd2luZG93XG57ICAgXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5teWJ1dHRvblxue1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYnV0dG9uc2NvbFxue1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnNldHRpbmdkaXZcbntcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/settings/settings.component.ts":
  /*!************************************************!*\
    !*** ./src/app/settings/settings.component.ts ***!
    \************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _stream_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../stream.service */
    "./src/app/stream.service.ts");

    var SettingsComponent =
    /*#__PURE__*/
    function () {
      function SettingsComponent(streamService) {
        _classCallCheck(this, SettingsComponent);

        this.streamService = streamService;
        this.state = 0;
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "change_state",
        value: function change_state(a) {
          this.state = a;
        }
      }, {
        key: "manage_stream",
        value: function manage_stream() {
          if (this.streaming) {} else {}
        }
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ctorParameters = function () {
      return [{
        type: _stream_service__WEBPACK_IMPORTED_MODULE_2__["StreamService"]
      }];
    };

    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings.component.css */
      "./src/app/settings/settings.component.css")).default]
    })], SettingsComponent);
    /***/
  },

  /***/
  "./src/app/startpage/startpage.component.css":
  /*!***************************************************!*\
    !*** ./src/app/startpage/startpage.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStartpageStartpageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".simple-card\n{\n    margin: 10px;\n    margin-right: 50px;\n    margin-left: 50px;\n    z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnRwYWdlL3N0YXJ0cGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0cGFnZS9zdGFydHBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaW1wbGUtY2FyZFxue1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgei1pbmRleDogLTE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/startpage/startpage.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/startpage/startpage.component.ts ***!
    \**************************************************/

  /*! exports provided: StartpageComponent */

  /***/
  function srcAppStartpageStartpageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartpageComponent", function () {
      return StartpageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StartpageComponent =
    /*#__PURE__*/
    function () {
      function StartpageComponent() {
        _classCallCheck(this, StartpageComponent);
      }

      _createClass(StartpageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StartpageComponent;
    }();

    StartpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-startpage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./startpage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/startpage/startpage.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./startpage.component.css */
      "./src/app/startpage/startpage.component.css")).default]
    })], StartpageComponent);
    /***/
  },

  /***/
  "./src/app/stream.service.ts":
  /*!***********************************!*\
    !*** ./src/app/stream.service.ts ***!
    \***********************************/

  /*! exports provided: StreamService */

  /***/
  function srcAppStreamServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StreamService", function () {
      return StreamService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! axios */
    "./node_modules/axios/index.js");
    /* harmony import */


    var axios__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _server_config_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../server/config/default */
    "../server/config/default.js");
    /* harmony import */


    var _server_config_default__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_server_config_default__WEBPACK_IMPORTED_MODULE_3__);

    var StreamService =
    /*#__PURE__*/
    function () {
      function StreamService() {
        _classCallCheck(this, StreamService);

        this.state = {
          life_streams: []
        };
      }

      _createClass(StreamService, [{
        key: "getLiveStreams",
        value: function getLiveStreams() {
          var url = 'http://127.0.0.1:' + _server_config_default__WEBPACK_IMPORTED_MODULE_3___default.a.rtmp_server.http.port + '/api/streams';
          console.log(url);
          axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(function (res) {
            var streams = res.data;

            if (typeof (streams['live'] !== 'undefined')) {
              console.log(streams['live']);
            }
          });
        }
      }, {
        key: "setState",
        value: function setState(st, a) {
          this.state = st;
          console.log(this.state);
        }
      }, {
        key: "getStreamsInfo",
        value: function getStreamsInfo(live_streams) {
          var _this = this;

          axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/streams/info', {
            params: {
              streams: live_streams
            }
          }).then(function (res) {
            _this.setState({
              live_streams: res.data
            }, function () {
              console.log(_this.state);
            });
          });
        }
      }]);

      return StreamService;
    }();

    StreamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StreamService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/maxim/_dev/vsc/Angular/codeit/client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map