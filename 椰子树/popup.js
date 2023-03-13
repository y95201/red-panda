(() => {
    var t = {
        504: t => {
            function e(t, e, n, r, o, a, i) {
                try {
                    var c = t[a](i)
                        , s = c.value
                } catch (t) {
                    return void n(t)
                }
                c.done ? e(s) : Promise.resolve(s).then(r, o)
            }
            t.exports = function (t) {
                return function () {
                    var n = this
                        , r = arguments;
                    return new Promise((function (o, a) {
                        var i = t.apply(n, r);
                        function c(t) {
                            e(i, o, a, c, s, "next", t)
                        }
                        function s(t) {
                            e(i, o, a, c, s, "throw", t)
                        }
                        c(void 0)
                    }
                    ))
                }
            }
        }
        ,
        526: t => {
            t.exports = function (t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                    t
            }
        }
        ,
        914: t => {
            t.exports = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
        }
        ,
        873: t => {
            function e(t) {
                return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                }
                    : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }
                    ,
                    e(t)
            }
            function n(r) {
                return "function" == typeof Symbol && "symbol" === e(Symbol.iterator) ? t.exports = n = function (t) {
                    return e(t)
                }
                    : t.exports = n = function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t)
                    }
                    ,
                    n(r)
            }
            t.exports = n
        }
        ,
        135: (t, e, n) => {
            t.exports = n(248)
        }
        ,
        544: (t, e, n) => {
            "use strict";
            var r = n(914);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.doInit = function () {
                    if (void 0 === localStorage[d] || "" == localStorage[d]) {
                        var t = new Array({
                            ext: "flv",
                            size: 10
                        }, {
                            ext: "hlv",
                            size: 10
                        }, {
                            ext: "f4v",
                            size: 10
                        }, {
                            ext: "mp4",
                            size: 10
                        }, {
                            ext: "mp3",
                            size: 10
                        }, {
                            ext: "wma",
                            size: 10
                        }, {
                            ext: "wav",
                            size: 10
                        }, {
                            ext: "m4a",
                            size: 10
                        }, {
                            ext: "webm",
                            size: 10
                        }, {
                            ext: "ogg",
                            size: 10
                        }, {
                            ext: "ogv",
                            size: 10
                        }, {
                            ext: "acc",
                            size: 10
                        }, {
                            ext: "mov",
                            size: 10
                        }, {
                            ext: "mkv",
                            size: 10
                        }, {
                            ext: "m3u8",
                            size: 0
                        }, {
                            ext: "ts",
                            size: 1e11
                        });
                        localStorage[d] = JSON.stringify(t)
                    }
                    if (void 0 === localStorage.Type) {
                        var e = new Array({
                            Type: "video/*",
                            size: 2048
                        }, {
                            Type: "audio/*",
                            size: 10
                        });
                        localStorage.Type = JSON.stringify(e)
                    }
                    if (void 0 === localStorage.BlockedDomains) {
                        var n = new Array;
                        localStorage.BlockedDomains = JSON.stringify(n)
                    }
                    void 0 === localStorage.repeat && (localStorage.repeat = !1),
                        void 0 === localStorage.repeatReg && (localStorage.repeatReg = "\\?[\\S]+"),
                        void 0 === localStorage.Debug && (localStorage.Debug = !1),
                        void 0 === localStorage.TitleName && (localStorage.TitleName = !1),
                        void 0 === localStorage.popListCount && (localStorage.popListCount = 30),
                        void 0 === localStorage.showCountOnIcon && (localStorage.showCountOnIcon = !0)
                }
                ,
                e.tr = function (t) {
                    $("#" + t).html(h(t))
                }
                ,
                e.getLanguage = g,
                e.getExtManifest = function () {
                    return f.runtime.getManifest()
                }
                ,
                e.isActivePro = E,
                e.getDLMUrl = function () {
                    var t, e = g(), n = "://cococut.net/";
                    return t = "other" != e ? "dlm.html" : "odlm.html",
                        E() && (n = "://pro.cococut.net/",
                            t = "dlm.vhtml",
                            "other" == e && (t = "odlm.vhtml")),
                        n + "dlm/" + (m.includes(e) ? e + "/" : "") + t
                }
                ,
                e.getLoaderUrl = e.DISABLE_DOWNLOADING_FROM_YOUTUBE_REGEXP = e.supportedLanguages = e.t = e.PRE_DEF_EXTS = e.YTDLPAGE = e.HOMEPAGE = e.ISEDGE = e.PROENV = void 0;
            var o, a, i, c = r(n(135)), s = r(n(504)), u = n(692), l = n(962), p = (o = (0,
                s.default)(c.default.mark((function t() {
                    var e, n, r;
                    return c.default.wrap((function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    return (e = S()).dailycount || (e.dailycount = 20),
                                        t.next = 4,
                                        (0,
                                            l.getExpItem)("dailyDlCount");
                                case 4:
                                    return (n = t.sent) && n > e.dailycount && (r = "exceeded.html"),
                                        t.abrupt("return", r);
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                    }
                    ), t)
                }
                ))),
                function () {
                    return o.apply(this, arguments)
                }
            ), f = navigator.userAgent.includes("Chrome") ? chrome : browser;
            e.PROENV = !0,
                e.ISEDGE = !1,
                e.HOMEPAGE = a,
                e.YTDLPAGE = i,
                e.HOMEPAGE = a = "https://cococut.net",
                e.YTDLPAGE = i = "https://pro.cococut.net/yt/";
            var d = "Ext04";
            e.PRE_DEF_EXTS = d,
                f.browserAction.setIcon({
                    path: {
                        16: "assets/icons/16x16_gray.png",
                        32: "assets/icons/32x32_gray.png",
                        48: "assets/icons/48x48_gray.png",
                        64: "assets/icons/64x64_gray.png",
                        128: "assets/icons/128x128_gray.png"
                    }
                });
            var h = f.i18n.getMessage;
            e.t = h;
            var m = ["zh_tw", "zh_cn"];
            function g() {
                var t = f.i18n.getUILanguage();
                return t.match(/zh-CN/) ? "zh_cn" : t.match(/zh-TW/) ? "zh_tw" : t.startsWith("zh") ? "zh_cn" : t.startsWith("en") ? t.substr(0, 2) : "other"
            }
            if (e.supportedLanguages = m,
                f.runtime.onInstalled.addListener((function (t) {
                    var e = g()
                        , n = "https://cococut.net/" + (m.includes(e) ? e + "/" : "") + "installed.html";
                    localStorage.getItem("installed") || f.tabs.create({
                        url: n
                    }, (function (t) {
                        console.log("Hi, wellcome:)"),
                            localStorage.setItem("installed", "t")
                    }
                    ))
                }
                )),
                f.runtime.setUninstallURL) {
                var v = g()
                    , y = "https://cococut.net/" + (m.includes(v) ? v + "/" : "") + "uninstalled.html";
                f.runtime.setUninstallURL(y)
            }
            function E() {
                return !(!localStorage.getItem("pui") || "active" != (0,
                    u.decipher)("CocoCut pro user")(localStorage.getItem("pui")).split("||")[3])
            }
            e.DISABLE_DOWNLOADING_FROM_YOUTUBE_REGEXP = /^https?:\/\/www\.youtube\.com\//;
            var w, S = function () {
                var t = localStorage.option
                    , e = {
                        counter: 0,
                        domain: {}
                    };
                try {
                    t && Object.assign(e, JSON.parse(t)),
                        e.counter = Math.max(0, Math.floor(Number(e.counter) || 0)),
                        e.rcounterr = Math.max(0, Math.floor(Number(e.rcounterr) || 0)),
                        localStorage.option = JSON.stringify(e)
                } catch (t) {
                    console.log(t.stack)
                }
                return e
            }, x = (w = (0,
                s.default)(c.default.mark((function t() {
                    var e, n, r, o, a;
                    return c.default.wrap((function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    return e = g(),
                                        n = "://cococut.net/",
                                        r = "other" !== e ? "hls.html" : "ohls.html",
                                        t.next = 5,
                                        p();
                                case 5:
                                    return (o = t.sent) && (r = o),
                                        E() && (n = "://pro.cococut.net/",
                                            r = "hls.vhtml",
                                            "other" == e && (r = "ohls.vhtml")),
                                        a = n + (m.includes(e) ? e + "/" : "") + r,
                                        t.abrupt("return", a);
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                    }
                    ), t)
                }
                ))),
                function () {
                    return w.apply(this, arguments)
                }
            );
            e.getLoaderUrl = x
        }
        ,
        284: (t, e, n) => {
            "use strict";
            var r = n(914);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.onMessage = function (t, e) {
                    i.runtime.onMessage.addListener((function (n, r, o) {
                        var a = n.eventName
                            , i = n.data;
                        return a === t && (e(i, o),
                            !0)
                    }
                    ))
                }
                ,
                e.sendMessage = s,
                e.setBgOptions = e.getBgOptions = e.tellBGbroadcastMsgFromPipe = e.setUserInfo = e.keepSetHeader = e.unsetHeader = e.setHeader = e.fetchTheDom = e.EVENTS = void 0;
            var o = r(n(135))
                , a = r(n(504))
                , i = navigator.userAgent.includes("Chrome") ? chrome : browser
                , c = {
                    FETCH_DOM: "FETCH_DOM",
                    SET_HEADER: "ADD_HEADER",
                    UNSET_HEADER: "UNSET_HEADER",
                    KEEP_SET_HEADER: "KEEP_SET_HEADER",
                    BLOCK_ONE_DOMAIN: "BLOCK_ONE_DOMAIN",
                    SET_SPEEDUP_REC: "SET_SPEEDUP_REC",
                    SET_USER_INFO: "SET_USER_INFO",
                    DLM_NEW_TASK: "DLM_NEW_TASK",
                    ISAP: "IS_ACTIVE_MEMBER",
                    MESSAGEPIPE: "MESSAGEPIPE",
                    BROADCASTPIPEMESSAGE: "BROADCASTPIPEMESSAGE",
                    GET_BG_OPTIONS: "GET_BG_OPTIONS",
                    SET_BG_OPTIONS: "SET_BG_OPTIONS"
                };
            function s(t, e) {
                return new Promise((function (n) {
                    i.runtime.sendMessage({
                        eventName: t,
                        data: e
                    }, (function (t) {
                        n(t)
                    }
                    ))
                }
                ))
            }
            e.EVENTS = c;
            var u, l = (u = (0,
                a.default)(o.default.mark((function t(e) {
                    var n;
                    return o.default.wrap((function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                        s(c.FETCH_DOM, e);
                                case 2:
                                    return n = t.sent,
                                        t.abrupt("return", n);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                    }
                    ), t)
                }
                ))),
                function (t) {
                    return u.apply(this, arguments)
                }
            );
            e.fetchTheDom = l;
            var p, f = (p = (0,
                a.default)(o.default.mark((function t(e) {
                    var n;
                    return o.default.wrap((function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                        s(c.SET_HEADER, e);
                                case 2:
                                    return n = t.sent,
                                        t.abrupt("return", n);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                    }
                    ), t)
                }
                ))),
                function (t) {
                    return p.apply(this, arguments)
                }
            );
            e.setHeader = f;
            var d, h = (d = (0,
                a.default)(o.default.mark((function t(e) {
                    var n;
                    return o.default.wrap((function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                        s(c.UNSET_HEADER, e);
                                case 2:
                                    return n = t.sent,
                                        t.abrupt("return", n);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                    }
                    ), t)
                }
                ))),
                function (t) {
                    return d.apply(this, arguments)
                }
            );
            e.unsetHeader = h;
            var m, g = (m = (0,
                a.default)(o.default.mark((function t(e) {
                    var n;
                    return o.default.wrap((function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                        s(c.KEEP_SET_HEADER, e);
                                case 2:
                                    return n = t.sent,
                                        t.abrupt("return", n);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                    }
                    ), t)
                }
                ))),
                function (t) {
                    return m.apply(this, arguments)
                }
            );
            e.keepSetHeader = g;
            var v, y = (v = (0,
                a.default)(o.default.mark((function t(e) {
                    var n;
                    return o.default.wrap((function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                        s(c.SET_USER_INFO, e);
                                case 2:
                                    return n = t.sent,
                                        t.abrupt("return", n);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                    }
                    ), t)
                }
                ))),
                function (t) {
                    return v.apply(this, arguments)
                }
            );
            e.setUserInfo = y;
            var E, w = (E = (0,
                a.default)(o.default.mark((function t(e) {
                    return o.default.wrap((function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    s(c.MESSAGEPIPE, e);
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                    }
                    ), t)
                }
                ))),
                function (t) {
                    return E.apply(this, arguments)
                }
            );
            e.tellBGbroadcastMsgFromPipe = w;
            var S, x = (S = (0,
                a.default)(o.default.mark((function t() {
                    var e;
                    return o.default.wrap((function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                        s(c.GET_BG_OPTIONS);
                                case 2:
                                    return e = t.sent,
                                        t.abrupt("return", e);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                    }
                    ), t)
                }
                ))),
                function () {
                    return S.apply(this, arguments)
                }
            );
            e.getBgOptions = x;
            var b, T = (b = (0,
                a.default)(o.default.mark((function t(e) {
                    return o.default.wrap((function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    s(c.SET_BG_OPTIONS, e);
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                    }
                    ), t)
                }
                ))),
                function (t) {
                    return b.apply(this, arguments)
                }
            );
            e.setBgOptions = T
        }
        ,
        692: (t, e, n) => {
            "use strict";
            var r = n(914)
                , o = n(873);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.setLocalStoreWithExpiry = function (t, e, n) {
                    var r = {
                        value: e,
                        expiry: (new Date).getTime() + n
                    };
                    localStorage.setItem(t, JSON.stringify(r))
                }
                ,
                e.getLocalStoreWithExpiry = function (t) {
                    var e = localStorage.getItem(t);
                    if (!e)
                        return null;
                    var n = JSON.parse(e);
                    return (new Date).getTime() > n.expiry ? (localStorage.removeItem(t),
                        null) : n.value
                }
                ,
                e.remainTimeMinutes = d,
                e.plusDlCount = e.decipher = e.cipher = e.fetch_retry = e.fetchWithTimeout = void 0;
            var a = r(n(135))
                , i = r(n(504))
                , c = r(n(526))
                , s = function (t, e) {
                    if (t && t.__esModule)
                        return t;
                    if (null === t || "object" !== o(t) && "function" != typeof t)
                        return {
                            default: t
                        };
                    var n = u(e);
                    if (n && n.has(t))
                        return n.get(t);
                    var r = {}
                        , a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in t)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
                            var c = a ? Object.getOwnPropertyDescriptor(t, i) : null;
                            c && (c.get || c.set) ? Object.defineProperty(r, i, c) : r[i] = t[i]
                        }
                    return r.default = t,
                        n && n.set(t, r),
                        r
                }(n(962));
            function u(t) {
                if ("function" != typeof WeakMap)
                    return null;
                var e = new WeakMap
                    , n = new WeakMap;
                return (u = function (t) {
                    return t ? n : e
                }
                )(t)
            }
            function l(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                        n.push.apply(n, r)
                }
                return n
            }
            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? l(Object(n), !0).forEach((function (e) {
                        (0,
                            c.default)(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }
            var f = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5e3
                    , r = new AbortController
                    , o = p({}, e, {
                        signal: r.signal
                    });
                return setTimeout((function () {
                    r.abort()
                }
                ), n),
                    fetch(t, o).then((function (t) {
                        if (!t.ok)
                            throw new Error("".concat(t.status, ": ").concat(t.statusText));
                        return t
                    }
                    )).catch((function (t) {
                        if ("AbortError" === t.name)
                            throw new Error("Response timed out");
                        throw new Error(t.message)
                    }
                    ))
            };
            function d() {
                return 1440 - 60 * (new Date).getHours() - (new Date).getMinutes()
            }
            e.fetchWithTimeout = f,
                e.fetch_retry = function t(e, n, r) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                    return f(e, n, r).catch((function (a) {
                        if (1 === o)
                            throw a;
                        return t(e, n, r, o - 1)
                    }
                    ))
                }
                ,
                e.cipher = function (t) {
                    var e = function (t) {
                        return t.split("").map((function (t) {
                            return t.charCodeAt(0)
                        }
                        ))
                    }
                        , n = function (t) {
                            return ("0" + Number(t).toString(16)).substr(-2)
                        }
                        , r = function (n) {
                            return e(t).reduce((function (t, e) {
                                return t ^ e
                            }
                            ), n)
                        };
                    return function (t) {
                        return t.split("").map(e).map(r).map(n).join("")
                    }
                }
                ,
                e.decipher = function (t) {
                    var e = function (e) {
                        return (n = t,
                            n.split("").map((function (t) {
                                return t.charCodeAt(0)
                            }
                            ))).reduce((function (t, e) {
                                return t ^ e
                            }
                            ), e);
                        var n
                    };
                    return function (t) {
                        return t.match(/.{1,2}/g).map((function (t) {
                            return parseInt(t, 16)
                        }
                        )).map(e).map((function (t) {
                            return String.fromCharCode(t)
                        }
                        )).join("")
                    }
                }
                ;
            var h, m = (h = (0,
                i.default)(a.default.mark((function t() {
                    var e, n;
                    return a.default.wrap((function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                        s.getExpItem("dailyDlCount");
                                case 2:
                                    e = (e = t.sent) ? parseInt(e) + 1 : 1,
                                        n = 60 * d() * 1e3,
                                        s.setExpItem("dailyDlCount", e, n);
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                    }
                    ), t)
                }
                ))),
                function () {
                    return h.apply(this, arguments)
                }
            );
            e.plusDlCount = m
        }
        ,
        59: () => { }
        ,
        248: t => {
            var e = function (t) {
                "use strict";
                var e, n = Object.prototype, r = n.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, a = o.iterator || "@@iterator", i = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag";
                function s(t, e, n, r) {
                    var o = e && e.prototype instanceof m ? e : m
                        , a = Object.create(o.prototype)
                        , i = new D(r || []);
                    return a._invoke = function (t, e, n) {
                        var r = l;
                        return function (o, a) {
                            if (r === f)
                                throw new Error("Generator is already running");
                            if (r === d) {
                                if ("throw" === o)
                                    throw a;
                                return $()
                            }
                            for (n.method = o,
                                n.arg = a; ;) {
                                var i = n.delegate;
                                if (i) {
                                    var c = T(i, n);
                                    if (c) {
                                        if (c === h)
                                            continue;
                                        return c
                                    }
                                }
                                if ("next" === n.method)
                                    n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if (r === l)
                                        throw r = d,
                                        n.arg;
                                    n.dispatchException(n.arg)
                                } else
                                    "return" === n.method && n.abrupt("return", n.arg);
                                r = f;
                                var s = u(t, e, n);
                                if ("normal" === s.type) {
                                    if (r = n.done ? d : p,
                                        s.arg === h)
                                        continue;
                                    return {
                                        value: s.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === s.type && (r = d,
                                    n.method = "throw",
                                    n.arg = s.arg)
                            }
                        }
                    }(t, n, i),
                        a
                }
                function u(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = s;
                var l = "suspendedStart"
                    , p = "suspendedYield"
                    , f = "executing"
                    , d = "completed"
                    , h = {};
                function m() { }
                function g() { }
                function v() { }
                var y = {};
                y[a] = function () {
                    return this
                }
                    ;
                var E = Object.getPrototypeOf
                    , w = E && E(E(P([])));
                w && w !== n && r.call(w, a) && (y = w);
                var S = v.prototype = m.prototype = Object.create(y);
                function x(t) {
                    ["next", "throw", "return"].forEach((function (e) {
                        t[e] = function (t) {
                            return this._invoke(e, t)
                        }
                    }
                    ))
                }
                function b(t) {
                    function e(n, o, a, i) {
                        var c = u(t[n], t, o);
                        if ("throw" !== c.type) {
                            var s = c.arg
                                , l = s.value;
                            return l && "object" == typeof l && r.call(l, "__await") ? Promise.resolve(l.__await).then((function (t) {
                                e("next", t, a, i)
                            }
                            ), (function (t) {
                                e("throw", t, a, i)
                            }
                            )) : Promise.resolve(l).then((function (t) {
                                s.value = t,
                                    a(s)
                            }
                            ), (function (t) {
                                return e("throw", t, a, i)
                            }
                            ))
                        }
                        i(c.arg)
                    }
                    var n;
                    this._invoke = function (t, r) {
                        function o() {
                            return new Promise((function (n, o) {
                                e(t, r, n, o)
                            }
                            ))
                        }
                        return n = n ? n.then(o, o) : o()
                    }
                }
                function T(t, n) {
                    var r = t.iterator[n.method];
                    if (r === e) {
                        if (n.delegate = null,
                            "throw" === n.method) {
                            if (t.iterator.return && (n.method = "return",
                                n.arg = e,
                                T(t, n),
                                "throw" === n.method))
                                return h;
                            n.method = "throw",
                                n.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var o = u(r, t.iterator, n.arg);
                    if ("throw" === o.type)
                        return n.method = "throw",
                            n.arg = o.arg,
                            n.delegate = null,
                            h;
                    var a = o.arg;
                    return a ? a.done ? (n[t.resultName] = a.value,
                        n.next = t.nextLoc,
                        "return" !== n.method && (n.method = "next",
                            n.arg = e),
                        n.delegate = null,
                        h) : a : (n.method = "throw",
                            n.arg = new TypeError("iterator result is not an object"),
                            n.delegate = null,
                            h)
                }
                function _(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]),
                        2 in t && (e.finallyLoc = t[2],
                            e.afterLoc = t[3]),
                        this.tryEntries.push(e)
                }
                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal",
                        delete e.arg,
                        t.completion = e
                }
                function D(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                        t.forEach(_, this),
                        this.reset(!0)
                }
                function P(t) {
                    if (t) {
                        var n = t[a];
                        if (n)
                            return n.call(t);
                        if ("function" == typeof t.next)
                            return t;
                        if (!isNaN(t.length)) {
                            var o = -1
                                , i = function n() {
                                    for (; ++o < t.length;)
                                        if (r.call(t, o))
                                            return n.value = t[o],
                                                n.done = !1,
                                                n;
                                    return n.value = e,
                                        n.done = !0,
                                        n
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: $
                    }
                }
                function $() {
                    return {
                        value: e,
                        done: !0
                    }
                }
                return g.prototype = S.constructor = v,
                    v.constructor = g,
                    v[c] = g.displayName = "GeneratorFunction",
                    t.isGeneratorFunction = function (t) {
                        var e = "function" == typeof t && t.constructor;
                        return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
                    }
                    ,
                    t.mark = function (t) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v,
                            c in t || (t[c] = "GeneratorFunction")),
                            t.prototype = Object.create(S),
                            t
                    }
                    ,
                    t.awrap = function (t) {
                        return {
                            __await: t
                        }
                    }
                    ,
                    x(b.prototype),
                    b.prototype[i] = function () {
                        return this
                    }
                    ,
                    t.AsyncIterator = b,
                    t.async = function (e, n, r, o) {
                        var a = new b(s(e, n, r, o));
                        return t.isGeneratorFunction(n) ? a : a.next().then((function (t) {
                            return t.done ? t.value : a.next()
                        }
                        ))
                    }
                    ,
                    x(S),
                    S[c] = "Generator",
                    S[a] = function () {
                        return this
                    }
                    ,
                    S.toString = function () {
                        return "[object Generator]"
                    }
                    ,
                    t.keys = function (t) {
                        var e = [];
                        for (var n in t)
                            e.push(n);
                        return e.reverse(),
                            function n() {
                                for (; e.length;) {
                                    var r = e.pop();
                                    if (r in t)
                                        return n.value = r,
                                            n.done = !1,
                                            n
                                }
                                return n.done = !0,
                                    n
                            }
                    }
                    ,
                    t.values = P,
                    D.prototype = {
                        constructor: D,
                        reset: function (t) {
                            if (this.prev = 0,
                                this.next = 0,
                                this.sent = this._sent = e,
                                this.done = !1,
                                this.delegate = null,
                                this.method = "next",
                                this.arg = e,
                                this.tryEntries.forEach(O),
                                !t)
                                for (var n in this)
                                    "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                        },
                        stop: function () {
                            this.done = !0;
                            var t = this.tryEntries[0].completion;
                            if ("throw" === t.type)
                                throw t.arg;
                            return this.rval
                        },
                        dispatchException: function (t) {
                            if (this.done)
                                throw t;
                            var n = this;
                            function o(r, o) {
                                return c.type = "throw",
                                    c.arg = t,
                                    n.next = r,
                                    o && (n.method = "next",
                                        n.arg = e),
                                    !!o
                            }
                            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                var i = this.tryEntries[a]
                                    , c = i.completion;
                                if ("root" === i.tryLoc)
                                    return o("end");
                                if (i.tryLoc <= this.prev) {
                                    var s = r.call(i, "catchLoc")
                                        , u = r.call(i, "finallyLoc");
                                    if (s && u) {
                                        if (this.prev < i.catchLoc)
                                            return o(i.catchLoc, !0);
                                        if (this.prev < i.finallyLoc)
                                            return o(i.finallyLoc)
                                    } else if (s) {
                                        if (this.prev < i.catchLoc)
                                            return o(i.catchLoc, !0)
                                    } else {
                                        if (!u)
                                            throw new Error("try statement without catch or finally");
                                        if (this.prev < i.finallyLoc)
                                            return o(i.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function (t, e) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var o = this.tryEntries[n];
                                if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                    var a = o;
                                    break
                                }
                            }
                            a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                            var i = a ? a.completion : {};
                            return i.type = t,
                                i.arg = e,
                                a ? (this.method = "next",
                                    this.next = a.finallyLoc,
                                    h) : this.complete(i)
                        },
                        complete: function (t, e) {
                            if ("throw" === t.type)
                                throw t.arg;
                            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                                this.method = "return",
                                this.next = "end") : "normal" === t.type && e && (this.next = e),
                                h
                        },
                        finish: function (t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var n = this.tryEntries[e];
                                if (n.finallyLoc === t)
                                    return this.complete(n.completion, n.afterLoc),
                                        O(n),
                                        h
                            }
                        },
                        catch: function (t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var n = this.tryEntries[e];
                                if (n.tryLoc === t) {
                                    var r = n.completion;
                                    if ("throw" === r.type) {
                                        var o = r.arg;
                                        O(n)
                                    }
                                    return o
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function (t, n, r) {
                            return this.delegate = {
                                iterator: P(t),
                                resultName: n,
                                nextLoc: r
                            },
                                "next" === this.method && (this.arg = e),
                                h
                        }
                    },
                    t
            }(t.exports);
            try {
                regeneratorRuntime = e
            } catch (t) {
                Function("r", "regeneratorRuntime = r")(e)
            }
        }
        ,
        962: (t, e, n) => {
            "use strict";
            n.r(e),
                n.d(e, {
                    getExpItem: () => l,
                    getItem: () => o,
                    getLocalItem: () => a,
                    removeItem: () => s,
                    setExpItem: () => u,
                    setItem: () => i,
                    setLocalItem: () => c
                });
            const r = navigator.userAgent.includes("Chrome") ? chrome : browser
                , o = t => new Promise(((e, n) => r.storage.sync.get(t, (o => r.runtime.lastError ? n(Error(r.runtime.lastError.message)) : e(o ? o[t] : void 0)))))
                , a = t => new Promise(((e, n) => r.storage.local.get(t, (o => r.runtime.lastError ? n(Error(r.runtime.lastError.message)) : e(o ? o[t] : void 0)))));
            function i(t, e) {
                const n = {};
                return n[t] = e,
                    r.storage.sync.set(n)
            }
            function c(t, e) {
                const n = {};
                return n[t] = e,
                    r.storage.local.set(n)
            }
            function s(t) {
                return r.storage.sync.remove(t)
            }
            function u(t, e, n) {
                i(t, {
                    value: e,
                    expiry: (new Date).getTime() + n
                })
            }
            async function l(t) {
                const e = await o(t);
                return e ? (new Date).getTime() > e.expiry ? (s(t),
                    null) : e.value : null
            }
        }
    }
        , e = {};
    function n(r) {
        var o = e[r];
        if (void 0 !== o)
            return o.exports;
        var a = e[r] = {
            exports: {}
        };
        return t[r](a, a.exports, n),
            a.exports
    }
    n.d = (t, e) => {
        for (var r in e)
            n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
                enumerable: !0,
                get: e[r]
            })
    }
        ,
        n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
        n.r = t => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        }
        ,
        (() => {
            "use strict";
            var t = n(914)
                , e = t(n(135))
                , r = t(n(504));
            n(59);
            var o, a, i = n(544), c = n(284), s = (o = (0,
                r.default)(e.default.mark((function t(n) {
                    var r;
                    return e.default.wrap((function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    if (null != n && 0 != n.length) {
                                        t.next = 3;
                                        break
                                    }
                                    return $("#tempntc").fadeIn(500),
                                        t.abrupt("return");
                                case 3:
                                    r = 0;
                                case 4:
                                    if (!(r < n.length)) {
                                        t.next = 10;
                                        break
                                    }
                                    return t.next = 7,
                                        u(n[r], r);
                                case 7:
                                    r++,
                                        t.next = 4;
                                    break;
                                case 10:
                                    g();
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                    }
                    ), t)
                }
                ))),
                function (t) {
                    return o.apply(this, arguments)
                }
            ), u = (a = (0,
                r.default)(e.default.mark((function t(n, r) {
                    var o, a, s, u, p, d, m, g, v, y, E, w, S, x;
                    return e.default.wrap((function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                        (0,
                                            c.getBgOptions)();
                                case 2:
                                    o = t.sent,
                                        null != n.name && "" != n.name || (n.name = n.title),
                                        a = "true" == localStorage.TitleName ? n.ext ? n.title + "." + n.ext : n.title : n.name,
                                        (u = n.name).length >= 40 ? (u = u.replace(/\.[^.\/]+$/, ""),
                                            s = u.substr(0, 13) + "..." + u.substr(-17) + "." + n.ext) : s = u,
                                        "application/octet-stream" == n.type && (n.size = "[stream]"),
                                        p = "",
                                        d = "",
                                        m = '<span class="tag is-rounded">' + n.size + "</span>",
                                        g = '<a class="vDownload" title="' + (0,
                                            i.t)("Tdownload") + '"><span class="icon" style="color:#000"><i class="fas fa-download"></i></span></a>',
                                        v = '<td class="nameTd" title="' + s + '"><span>' + s + "</span></td>",
                                        y = '<input type="checkbox" class="DownCheck" checked="true"/>',
                                        e = n.ext,
                                        ["ogg", "ogv", "mp4", "webm", "mp3", "wav", "flv", "m4a"].indexOf(e) > -1 && (d = '<a id="play" title="' + (0,
                                            i.t)("Tplay") + '"><span class="icon"><i class="fas fa-play"></i></a>'),
                                        "m3u8" == n.ext && (p = '<a id="m3u8" title="' + (0,
                                            i.t)("Tm3u8") + '"><span class="icon"><i class="fas fa-file-video"></i></a>',
                                            g = '<a class="vDownload" title="' + (0,
                                                i.t)("Tdownload") + '"><span class="icon"><i class="fas fa-download"></i></span></a>',
                                            m = '<span class="tag is-rounded">' + (0,
                                                i.t)("TpopM3u8Des") + "</span>",
                                            n.title ? (E = n.title).length >= 29 && (E = E.substr(0, 15) + "..." + E.substr(-9)) : E = s,
                                            v = '<td class="nameTd" title="' + n.title + '"><span>' + E + "</span></td>",
                                            y = ""),
                                        w = localStorage.getItem("setDirectlySave"),
                                        S = "",
                                        w && (S = '<a class="dlmDownload" title="' + (0,
                                            i.t)("TdlmDownload") + '"><span class="icon"><i class="fas fa-cloud-download-alt"></i></span></a>'),
                                        x = '<tr class="file-row type-back">\n        <td class="checkbox-cell">'.concat(y, "</td>\n        ").concat(v, '\n        <td class="toolsTd">\n            ').concat(g, "\n            ").concat(d, '\n            <a id="copy" title="').concat((0,
                                            i.t)("Tcopy"), '"><span class="icon"><i class="fas fa-copy"></i></span></a>\n            ').concat(p, '\n            <a id="blockDomain" title="').concat((0,
                                                i.t)("TpopBlockDomain"), '"><span class="icon"><i class="fas fa-ban"></i></span></a>\n            ').concat(S, "\n        </td>\n        <td>").concat(m, '</td>\n    </tr>\n    <tr class="url" style="display:none">\n        <td colspan="4"><a href="').concat(n.url, '" target="_blank" download="').concat(a, '" id="media-').concat(n.mediaid, "-").concat(r, '">').concat(n.url, "</a></td></tr>"),
                                        $("#medialist").append(x),
                                        $("#medialist .dlmDownload").click((function () {
                                            var t = $(this).parent().parent().next().find("a").attr("href");
                                            (0,
                                                c.sendMessage)(c.EVENTS.DLM_NEW_TASK, {
                                                    url: t
                                                }),
                                                localStorage.removeItem("setDirectlySave")
                                        }
                                        )),
                                        $("#medialist #blockDomain").off().on("click", (function () {
                                            var t = $(this).parent().parent().next().find("a")
                                                , e = t.attr("href")
                                                , n = t.attr("id").split("-")
                                                , r = n[1]
                                                , o = n[2]
                                                , a = new URL(e);
                                            return (0,
                                                c.sendMessage)(c.EVENTS.BLOCK_ONE_DOMAIN, {
                                                    oneDomain: a.host,
                                                    tabId: h,
                                                    mediaId: r,
                                                    oneEleIndex: o
                                                }),
                                                $(this).parent().parent().remove(),
                                                $("#tempntc").html((0,
                                                    i.t)("TpopBlockedDomainNotify") + "<br/>" + a.host).fadeIn(500).delay(1500).fadeOut(500),
                                                !1
                                        }
                                        )),
                                        $("#medialist #copy").off().on("click", (function () {
                                            var t = this
                                                , e = $(this);
                                            function n() {
                                                var t = e.parent().parent().next().find("a").attr("href")
                                                    , n = $('<input id="copy_tmp" value="' + t + '" />');
                                                return $("body").append(n),
                                                    n.select(),
                                                    document.execCommand("Copy"),
                                                    $("#copy_tmp").remove(),
                                                    $("#tempntc").html((0,
                                                        i.t)("TtempntcInfoCopied")).fadeIn(500).delay(1500).fadeOut(500),
                                                    !1
                                            }
                                            o.counter < 30 ? n() : (0,
                                                c.sendMessage)(c.EVENTS.ISAP, {}).then((function (e) {
                                                    if (e)
                                                        n();
                                                    else {
                                                        var r = $(t).parent().parent().next();
                                                        $(r).find("td").hide(),
                                                            $(r).html('<td colspan="4"><a href="https://pro.cococut.net/member/checkout/" target="_blank">'.concat((0,
                                                                i.t)("TpopRealDlAddr"), "</a></td>")),
                                                            $(r).toggle()
                                                    }
                                                }
                                                ))
                                        }
                                        )),
                                        $("#medialist .vDownload").off().on("click", (function () {
                                            var t = this;
                                            if ($(this).siblings("#m3u8").length > 0)
                                                l.runtime.sendMessage({
                                                    cmd: "cmd_open_parser"
                                                });
                                            else {
                                                var e = $(this).parent().parent().next().find("a").attr("href");
                                                if (f) {
                                                    var n = $(this).parent().parent().next().find("a").attr("download");
                                                    l.downloads.download({
                                                        url: e,
                                                        filename: n
                                                    })
                                                } else
                                                    localStorage.getItem("setDirectlySave") ? (0,
                                                        c.sendMessage)(c.EVENTS.ISAP, {}).then((function (n) {
                                                            if (n) {
                                                                var r = $(t).parent().parent().next().find("a").attr("download");
                                                                l.downloads.download({
                                                                    url: e,
                                                                    filename: r
                                                                })
                                                            } else
                                                                (0,
                                                                    c.sendMessage)(c.EVENTS.DLM_NEW_TASK, {
                                                                        url: e
                                                                    })
                                                        }
                                                        )) : (0,
                                                            c.sendMessage)(c.EVENTS.DLM_NEW_TASK, {
                                                                url: e
                                                            })
                                            }
                                            return !1
                                        }
                                        )),
                                        $("#medialist #play").off().on("click", (function () {
                                            var t = '<tr id="player"><td colspan="4"><video autoplay controls width="100%"></video><input id="CloseBtn" type="button" value="'.concat((0,
                                                i.t)("TCloseBtn"), '" class="button"/></td></tr>')
                                                , e = $(this).parent().parent().next().find("a").attr("href");
                                            return $(this).parent().parent().after($(t)),
                                                $("video").attr("src", e),
                                                $("#CloseBtn").bind("click", (function () {
                                                    return $("video").removeAttr("src"),
                                                        $("#player").remove(),
                                                        !1
                                                }
                                                )),
                                                !1
                                        }
                                        )),
                                        $("#medialist #m3u8").off().on("click", (function () {
                                            var t = $(this).parent().parent().next().find("a").attr("href");
                                            l.tabs.create({
                                                url: "/m3u8.html?m3u8_url=" + t
                                            })
                                        }
                                        )),
                                        $(".nameTd").off().on("click", (function (t) {
                                            var e = this;
                                            if (o.counter < 30) {
                                                var n = $(this).parent().next();
                                                $(n).toggle()
                                            } else
                                                (0,
                                                    c.sendMessage)(c.EVENTS.ISAP, {}).then((function (t) {
                                                        if (t) {
                                                            var n = $(e).parent().next();
                                                            $(n).toggle()
                                                        } else {
                                                            var r = $(e).parent().next();
                                                            $(r).find("td").hide(),
                                                                $(r).html('<td colspan="4"><a href="https://pro.cococut.net/member/checkout/" target="_blank">'.concat((0,
                                                                    i.t)("TpopRealDlAddr"), "</a></td>")),
                                                                $(r).toggle()
                                                        }
                                                    }
                                                    ));
                                            return !0
                                        }
                                        )),
                                        $("#DownFile").off().on("click", (function () {
                                            return $("#medialist input").each((function () {
                                                $(this).prop("checked") && $(this).parent().siblings(".toolsTd").find(".vDownload").click()
                                            }
                                            )),
                                                !1
                                        }
                                        )),
                                        $("#AllCopy").off().on("click", (function () {
                                            function t() {
                                                var t = $('<textarea id="copy_tmp"></textarea>')
                                                    , e = "";
                                                $("#medialist input").each((function () {
                                                    $(this).prop("checked") && (e += $(this).parent().parent().next().find("a").attr("href") + "\n")
                                                }
                                                )),
                                                    $(t).val(e),
                                                    $("body").append(t),
                                                    t.select(),
                                                    document.execCommand("Copy"),
                                                    $("#copy_tmp").remove(),
                                                    $("#tempntc").html((0,
                                                        i.t)("TtempntcInfoCopied")).fadeIn(500).delay(1500).fadeOut(500)
                                            }
                                            return o.counter < 30 ? t() : (0,
                                                c.sendMessage)(c.EVENTS.ISAP, {}).then((function (e) {
                                                    e ? t() : $("#medialist").append('tr><td colspan="4"><a href="https://pro.cococut.net/member/checkout/" target="_blank">'.concat((0,
                                                        i.t)("TpopRealDlAddr"), "</a></td></tr>"))
                                                }
                                                )),
                                                !1
                                        }
                                        )),
                                        $("#AllSelect").off().on("click", (function () {
                                            return $("#medialist input").each((function () {
                                                $(this).attr("checked", "true")
                                            }
                                            )),
                                                !1
                                        }
                                        )),
                                        $("#ReSelect").off().on("click", (function () {
                                            return $("#medialist input").each((function () {
                                                $(this).prop("checked") ? $(this).attr("checked", !1) : $(this).attr("checked", !0)
                                            }
                                            )),
                                                !1
                                        }
                                        ));
                                case 32:
                                case "end":
                                    return t.stop()
                            }
                        var e
                    }
                    ), t)
                }
                ))),
                function (t, e) {
                    return a.apply(this, arguments)
                }
            ), l = navigator.userAgent.includes("Chrome") ? chrome : browser, p = (0,
                i.getLanguage)(), f = !navigator.userAgent.includes("Edge") && navigator.userAgent.includes("Firefox");
            !function () {
                for (var t = 0, e = ["TpopNeedPlayit2", "TpopNeedPlayit", "TtryHlsLabel", "TtryHls", "TnoResource", "TdownSelected", "TcopySelected", "TselectAll", "TrevSelected"]; t < e.length; t++) {
                    var n = e[t];
                    (0,
                        i.tr)(n)
                }
                $("#smallTryHlsBtn").attr("title", (0,
                    i.t)("TtryHls")),
                    $("#optionBtn").attr("title", (0,
                        i.t)("TpopOptionBtn")),
                    $("#questionBtn").attr("title", (0,
                        i.t)("TpopQuestionBtn")),
                    $("#homePageBtn").attr("title", (0,
                        i.t)("TpopHomePageBtn")),
                    $("#TtryHlsNotice").text((0,
                        i.t)("TtryHls"))
            }(),
                $("#vNumber").text("version:" + (0,
                    i.getExtManifest)().version),
                $("#tryHls").attr("title", (0,
                    i.t)("TryHlsDesc") + " Keyboard shortcuts: Alt+Shift+D"),
                $("#tryHls").click((function () {
                    l.runtime.sendMessage({
                        cmd: "cmd_open_parser"
                    }, (function (t) {
                        t && $("#tempntc").html(t.msg).fadeIn(500).delay(1500).fadeOut(500)
                    }
                    ))
                }
                )),
                $("#smallTryHlsBtn").click((function () {
                    l.runtime.sendMessage({
                        cmd: "cmd_open_parser"
                    }, (function (t) {
                        t && $("#tempntc").html(t.msg).fadeIn(500).delay(1500).fadeOut(500)
                    }
                    ))
                }
                )),
                $("#optionBtn").click((function () {
                    l.runtime.openOptionsPage()
                }
                )),
                $("#questionBtn").attr("href", i.HOMEPAGE + "/" + (i.supportedLanguages.includes(p) ? p + "/" : "") + "feedback.html"),
                $("#homePageBtn").attr("href", i.HOMEPAGE + "/" + (i.supportedLanguages.includes(p) ? p + "/" : ""));
            var d, h, m = l.extension.getBackgroundPage();
            function g() {
                $("#medialist .vDownload").length >= 3 && ($("#down").show(),
                    $(".DownCheck").show())
            }
            (d = m.localStorage.getItem("serverNotice")) && $("#serverNotice").html(d),
                l.tabs.query({
                    active: !0,
                    currentWindow: !0
                }, (function (t) {
                    var e, n = t[0];
                    if (i.DISABLE_DOWNLOADING_FROM_YOUTUBE_REGEXP.exec(n.url))
                        (0,
                            c.sendMessage)(c.EVENTS.ISAP, {}).then((function (t) {
                                if (t)
                                    $("#mainPanel").html('<div class="column is-full has-text-centered">\n                <p class="is-size-7">'.concat((0,
                                        i.t)("TpopYTDLdesc"), '</p>\n                <a id="tryHls" class="button is-link is-outlined"\n                  title="').concat((0,
                                            i.t)("TpopYTDLdlIt"), '" href="').concat(i.YTDLPAGE, "?url=").concat(encodeURIComponent(n.url), '" target="_blank"><span\n                    class="icon">\n                    <i class="fa fa-play"></i>\n                  </span><span>').concat((0,
                                                i.t)("TpopYTDLdlIt"), "</span></a>\n              </div>"));
                                else {
                                    var e = i.HOMEPAGE + "/" + (i.supportedLanguages.includes(p) ? p + "/" : "") + "failed.html";
                                    $("#tempntc").html('<a href="' + e + '" target="_blank">' + (0,
                                        i.t)("TpopNotSupport") + (0,
                                            i.t)("TpopNotSuppWhy") + "</a>"),
                                        $("#tempntc").show(),
                                        $("#mainPanel").hide()
                                }
                            }
                            ));
                    else {
                        $("#tempntc").css("min-height", "20px"),
                            $("#mainPanel").show(),
                            h = n.id;
                        var r = "tabid" + n.id;
                        s(m.mediaurls[r]),
                            l.runtime.onMessage.addListener((function (t) {
                                t.tabid == h && ($("#tempntc").hide(),
                                    u(t),
                                    g())
                            }
                            )),
                            e = r,
                            (m.mediaurls[e] ? m.mediaurls[e].length : 0) >= Number(m.localStorage.popListCount) && ($('<div class="has-text-centered"><p class="has-text-danger">' + (0,
                                i.t)("TpopTooManyFiles") + '<a href="#" id="goOptionPage">' + (0,
                                    i.t)("TcustomSetting") + "</a></p></div>").insertAfter("#medialist"),
                                $("#goOptionPage").click((function () {
                                    l.runtime.openOptionsPage()
                                }
                                )))
                    }
                }
                ))
        }
        )()
}
)();
