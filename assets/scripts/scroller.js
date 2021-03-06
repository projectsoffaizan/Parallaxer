window.dzsscr_self_options = {};
(function (c, a) {
    function d(a, d, T, la) {
        a[U](C + d, "wheel" == V ? T : function (a) {
            !a && (a = c.event);
            var C = {
                originalEvent: a,
                target: a.target || a.srcElement,
                type: "wheel",
                deltaMode: "MozMousePixelScroll" == a.type ? 0 : 1,
                deltaX: 0,
                deltaZ: 0,
                preventDefault: function () {
                    a.preventDefault ? a.preventDefault() : a.returnValue = !1
                }
            };
            "mousewheel" == V ? (C.deltaY = -.025 * a.wheelDelta, a.wheelDeltaX && (C.deltaX = -.025 * a.wheelDeltaX)) : C.deltaY = a.detail;
            return T(C)
        }, la || !1)
    }

    var C = "", U, V;
    c.addEventListener ? U = "addEventListener" : (U = "attachEvent", C = "on");
    V = "onwheel"in a.createElement("div") ? "wheel" : void 0 !== a.onmousewheel ? "mousewheel" : "DOMMouseScroll";
    c.addWheelListener = function (a, c, C) {
        d(a, V, c, C);
        "DOMMouseScroll" == V && d(a, "MozMousePixelScroll", c, C)
    }
})(window, document);
(function (c) {
    c.fn.scroller = function (a) {
        if ("undefined" == typeof a && "undefined" != typeof c(this).attr("data-options") && "" != c(this).attr("data-options")) {
            var d = c(this).attr("data-options"), d = "window.dzsscr_self_options = " + d;
            eval(d);
            a = c.extend({}, window.dzsscr_self_options);
            window.dzsscr_self_options = c.extend({}, {})
        }
        a = c.extend({
            type: "normal",
            totalWidth: void 0,
            totalwidth: void 0,
            settings_multiplier: 3,
            settings_skin: "skin_default",
            settings_scrollbar: "on",
            settings_scrollbyhover: "off",
            settings_fadeoutonleave: "off",
            settings_replacewheelxwithy: "off",
            settings_refresh: 0,
            settings_autoheight: "default",
            settings_autoheight_from_first_item: "off",
            settings_forcesameheight: "off",
            settings_fullwidth: "off",
            settings_hidedefaultsidebars: "off",
            settings_dragmethod: "drag",
            settings_autoresizescrollbar: "off",
            settings_slideshow: "0",
            scrollBg: "off",
            force_onlyy: "off",
            objecter: void 0,
            secondCon: null,
            secondCon_tw: null,
            secondCon_cw: null,
            secondCon_enable_mouse_scroll: "off",
            settings_scrollTop_height_indicator: null,
            settings_scrollTop_animate_top_instead_of_scroll: "off",
            settings_comHeight_surplus: 0,
            settings_show_sidebar_on_right_side_mouse: "on",
            enable_easing: "off",
            easing_duration: "1.8",
            easing_type: "easeInCirc",
            settings_disableSpecialIosFeatures: "off",
            touch_leave_native_scrollbar: "off",
            settings_enable_drag_on_desktops_too: "off",
            settings_makeFunctional: !1,
            settings_chrome_multiplier: .1,
            settings_safari_multiplier: .2,
            settings_opera_multiplier: .002,
            settings_ie_multiplier: .08,
            settings_firefox_multiplier: -1,
            replace_window_object: null
        }, a);
        "undefined" == typeof a && "undefined" != typeof c(this).attr("data-options") && "" != c(this).attr("data-options") && (d = c(this).attr("data-options"), d = "var aux_opts = " + d, eval(d), a = aux_opts);
        a.settings_refresh = parseInt(a.settings_refresh, 10);
        a.settings_multiplier = parseFloat(a.settings_multiplier);
        a.settings_chrome_multiplier = parseFloat(a.settings_chrome_multiplier);
        a.settings_firefox_multiplier = parseFloat(a.settings_firefox_multiplier);
        a.settings_slideshow = parseFloat(a.settings_slideshow);
        Math.linearTween = function (a, c, d, G) {
            return d * a / G + c
        };
        Math.easeIn =
            function (a, c, d, G) {
                return -d * (a /= G) * (a - 2) + c
            };
        Math.easeOutQuad = function (a, c, d, G) {
            a /= G;
            return -d * a * (a - 2) + c
        };
        Math.easeInOutSine = function (a, c, d, G) {
            return -d / 2 * (Math.cos(Math.PI * a / G) - 1) + c
        };
        Math.easeInCirc = function (a, c, d, G) {
            a /= G;
            return -d * (Math.sqrt(1 - a * a) - 1) + c
        };
        Math.easeInQuart = function (a, c, d, G) {
            a /= G;
            return d * a * a * a * a + c
        };
        this.each(function () {
            function C() {
                ta = !0
            }

            function U() {
                return h
            }

            function V() {
                La = !0
            }

            function G() {
                0 == ta && (0 < a.settings_slideshow && (v = null, na && (na = !1, ua = "plus" == ua ? "minus" : "plus"), u = "plus" == ua ? u +
                a.settings_slideshow : u - a.settings_slideshow, D()), "on" != a.enable_easing || is_android() || is_ios() || (x && (ba = O, oa = ca - ba, "easeIn" == a.easing_type && (O = Number(Math.easeIn(1, ba, oa, P).toFixed(4))), "easeInCirc" == a.easing_type && (O = is_safari ? Number(Math.easeInCirc(1, ba, oa, P).toFixed(0)) : Number(Math.easeInCirc(1, ba, oa, P).toFixed(4))), isNaN(O) && (O = 0), "normal" == a.type && f.css({top: parseInt(O, 10)}), "scrollTop" == a.type && ("on" == a.settings_scrollTop_animate_top_instead_of_scroll ? da.css({top: parseInt(O, 10)}) : da.scrollTop(-O))),
                w && (va = pa, Ma = wa - va, pa = Number(Math.easeIn(1, va, Ma, P).toFixed(4)), "normal" == a.type && f.css({left: parseInt(pa, 10)}), "scrollTop" == a.type && c(window).scrollTop(-pa))), xa && xa());
                if (La)return !1;
                requestAnimFrame(G)
            }

            function ka() {
                b.removeClass("scrollbar-active");
                "on" == a.settings_show_sidebar_on_right_side_mouse && I > b.offset().left + b.width() - 100 && I <= b.offset().left + b.width() && E > b.offset().top && E <= b.offset().top + b.height() && (clearTimeout(Q), Q = setTimeout(ka, 1E3), b.addClass("scrollbar-active"))
            }

            function T(m) {
                m.currentTarget ==
                f.get(0) && (ya = !0);
                a.secondCon && m.currentTarget == a.secondCon.get(0) && (za = !0);
                ea = f;
                W = e;
                X = t;
                Y = g;
                Z = k;
                Na = parseInt(ea.css("left"), 10);
                Oa = parseInt(ea.css("top"), 10);
                "touchstart" == m.type ? (Aa = m.originalEvent.touches[0].pageX, Ba = m.originalEvent.touches[0].pageY) : (Aa = m.pageX, Ba = m.pageY);
                Ca = !0;
                a.settings_slideshow = 0;
                if ("touchstart" != m.type)return b.addClass("closedhand"), !1
            }

            function la(a) {
                if (0 != Ca)return w && (Pa = "touchmove" == a.type ? a.originalEvent.touches[0].pageX : a.pageX, y = Na + (Pa - Aa), 0 < y && (y /= 2), y < -X + W && (y -=
                    (y + X - W) / 2), ea.css("left", y), 0 < y && (y = 0), y < -X + W && (y -= y + X - W)), x && (Qa = "touchmove" == a.type ? a.originalEvent.touches[0].pageY : a.pageY, z = Oa + (Qa - Ba), 0 < z && (z /= 2), z < -Z + Y && (z -= (z + Z - Y) / 2), ea.css("top", z), 0 < z && (z = 0), z < -Z + Y && (z -= z + Z - Y)), "touchmove" != a.type && (w && (d = y / -(X - W), Ka(d)), x && (a = d = z / -(Z - Y), h = a * -(k - g), F = a * (k - J), D())), !1
            }

            function ma(a) {
                Ca = za = ya = !1;
                b.removeClass("closedhand")
            }

            function Ka(b, l) {
                var d = {secondCon_targetX: ""}, d = c.extend(d, l);
                v = b * -(t - e);
                u = b * (e - A);
                null != a.secondCon && (B = b * -(M - K));
                "" != d.secondCon_targetX &&
                (B = d.secondCon_targetX);
                D()
            }

            function $a(b) {
                1 < b && (b /= t - e);
                v = b * -(t - e);
                u = b * (e - A);
                null != a.secondCon && (B = b * -(M - K));
                D()
            }

            function ab(a, l) {
                var d = {show_scrollbar: !0};
                l && (d = c.extend(d, l));
                1 < a && (a /= k - g);
                h = a * -(k - g);
                F = a * (g - J);
                D(d);
                d.show_scrollbar && (clearTimeout(Q), Q = setTimeout(ka, 1E3), b.addClass("scrollbar-active"))
            }

            function aa() {
                c(window).width();
                R = c(window).height();
                if (1 == a.settings_makeFunctional) {
                    var m = !1, l = document.URL, d = l.indexOf("://") + 3, n = l.indexOf("/", d), l = l.substring(d, n);
                    -1 < l.indexOf("a") && -1 < l.indexOf("c") &&
                    -1 < l.indexOf("o") && -1 < l.indexOf("l") && (m = !0);
                    -1 < l.indexOf("o") && -1 < l.indexOf("z") && -1 < l.indexOf("e") && -1 < l.indexOf("h") && -1 < l.indexOf("t") && (m = !0);
                    -1 < l.indexOf("e") && -1 < l.indexOf("v") && -1 < l.indexOf("n") && -1 < l.indexOf("a") && -1 < l.indexOf("t") && (m = !0);
                    if (0 == m)return
                }
                e = void 0 != a.totalWidth ? a.totalWidth : b.outerWidth(!1);
                void 0 != a.totalHeight && 0 != a.totalHeight ? g = a.totalHeight : 0 != b.height() && (g = b.outerHeight(!1));
                "on" == a.settings_autoheight_from_first_item && (g = f.children().children().eq(0).height());
                "scrollTop" ==
                a.type && (g = c(window).height(), k = b.outerHeight(), fa && fa.outerHeight && (k = fa.outerHeight() + Da), 99 < Math.abs(k - Ea) && (h = F / -(R - J) * (k - R), k < Ea && (k < R ? F = h = 0 : S())), Ea = k);
                null != a.secondCon && (null == a.secondCon_tw && (K = e), null == a.secondCon_cw && (M = a.secondCon.width()));
                is_ie() && 7 == version_ie() && b.css("overflow", "visible");
                "on" == a.settings_hidedefaultsidebars && (b.css("overflow", "hidden"), c("html").css("overflow", "hidden"));
                f && (t = f.width(), k = f.outerHeight(), 0 < f.find(".real-inner").length && (t = f.find(".real-inner").outerWidth(),
                    k = f.find(".real-inner").outerHeight(), f.css({width: t}), Ra && f.height(k), f.css({})));
                f && qa && b.height(f.height());
                f && f.hasClass("calculate-inner");
                "scrollTop" == a.type && b.css("position");
                "on" == a.settings_forcesameheight && (g = k);
                "on" == a.scrollBg && (k = b.height(), g = c(window).height());
                x = k <= g ? !1 : !0;
                t <= e ? w = !1 : (w = !0, b.addClass("dir-hor"));
                "on" == a.force_onlyy && (w = !1);
                "on" == a.force_onlyx && (x = !1);
                "scrollTop" == a.type && (x = !0, k <= g && (x = !1));
                1 == w ? b.addClass("dir-hor") : b.removeClass("dir-hor");
                1 == x ? b.addClass("dir-ver") :
                    b.removeClass("dir-ver");
                0 == w && void 0 != q && (q.remove(), L.remove(), L = q = void 0);
                0 == x && void 0 != r && (r.remove(), N.remove(), N = r = void 0);
                0 == x && 0 == w ? b.addClass("no-need-for-nav") : (b.removeClass("no-need-for-nav"), "on" == a.settings_scrollbar && (void 0 == r && x && (H.append('<div class="scrollbary_bg"></div>'), H.append('<div class="scrollbary"></div>')), void 0 == q && w && (H.append('<div class="scrollbarx_bg"></div>'), H.append('<div class="scrollbarx"></div>'))), void 0 == r && x && (r = H.children(".scrollbary"), N = H.children(".scrollbary_bg"),
                    J = r.height(), "on" == a.settings_autoresizescrollbar && (m = g / k * g, r.css("height", m), J = m), N.css("height", g), "on" == a.settings_fadeoutonleave && (r.css("opacity", 0), N.css("opacity", 0)), N.mousedown(function (m) {
                    ra = !0;
                    a.settings_slideshow = 0;
                    ga = E - r.offset().top + b.offset().top;
                    "scrollTop" == a.type && (ga = E - r.offset().top + c(window).scrollTop());
                    return !1
                }), r.mousedown(function (m) {
                    ra = !0;
                    a.settings_slideshow = 0;
                    ga = E - r.offset().top + b.offset().top;
                    "scrollTop" == a.type && (ga = E - r.offset().top + c(window).scrollTop());
                    return !1
                })),
                void 0 == q && w && (q = H.children(".scrollbarx"), L = H.children(".scrollbarx_bg"), A = q.width(), "on" == a.settings_autoresizescrollbar && (m = e / t * e, q.css("width", m), A = m), L.css("width", e), "on" == a.settings_fadeoutonleave && (q.css("opacity", 0), L.css("opacity", 0)), t <= e && "on" == a.settings_fullwidth && (q.hide(), L.hide()), q.mousedown(function (m) {
                    sa = !0;
                    a.settings_slideshow = 0;
                    Sa = I - q.offset().left + b.offset().left;
                    return !1
                }), L.mousedown(function (b) {
                    sa = !0;
                    a.settings_slideshow = 0;
                    return !1
                })), q && 1 == w && (parseInt(q.css("left")), "on" ==
                a.settings_autoresizescrollbar && (m = e / t * e, q.css("width", m), A = m)), r && 1 == x && (parseInt(r.css("top")), "on" == a.settings_autoresizescrollbar && (m = g / k * g, r.css("height", m), J = m)), q && 1 == w && L.css("width", e), q && w && e > t && "block" == q.css("display") && (L.hide(), q.hide()), q && w && e < t && "none" == q.css("display") && (L.show(), q.show()), r && 1 == x && N.css("height", g), D({do_not_clear_suspend_enter_frame: "on"}))
            }

            function bb() {
                F = h = 0;
                D()
            }

            function Fa() {
                c(window).width();
                R = c(window).height();
                aa()
            }

            function S(m) {
                var l = c(this);
                "scrollTop" ==
                a.type && (l = b);
                if (!Ga) {
                    ha = ia = !1;
                    var d = m || window.event;
                    d && d.target && b.has(c(d.target));
                    n = Ta(d);
                    p = Ua(d);
                    n *= a.settings_multiplier;
                    p *= a.settings_multiplier;
                    cb && (n *= a.settings_chrome_multiplier, p *= a.settings_chrome_multiplier);
                    db && (n = Ta(d), p = Ua(d), n *= a.settings_safari_multiplier, p *= a.settings_safari_multiplier);
                    is_firefox() && (n *= a.settings_firefox_multiplier, p *= a.settings_firefox_multiplier);
                    is_opera() && (n *= a.settings_opera_multiplier, p *= a.settings_opera_multiplier);
                    is_ie() && (n = 0, p = Va(d), n *= a.settings_ie_multiplier,
                        p *= a.settings_ie_multiplier);
                    11 <= getInternetExplorerVersion() && (n = 0, p = Va(d), n *= a.settings_ie_multiplier, p *= a.settings_ie_multiplier);
                    "on" == a.settings_replacewheelxwithy && 0 == n && (n = p);
                    isNaN(p) && (p = 0);
                    if (b.get(0) == l.get(0) || a.secondCon && a.secondCon.get(0) == l.get(0))if (x && (h += p * a.settings_multiplier, F = h / (k - g) * -(g - J)), w && (v += n * a.settings_multiplier, u = v / (t - e) * -(e - A), null != a.secondCon)) {
                        if (void 0 == B || isNaN(B))B = 0;
                        B += M / t * a.settings_multiplier * n
                    }
                    D();
                    0 == w && (ia = !0);
                    0 == x && (ha = !0);
                    if (0 != p && 0 == ha)if (0 == is_ie8())d.stopPropagation(),
                        d.preventDefault(); else return !1;
                    if (0 != n && 0 == ia)if (0 == is_ie8())d.stopPropagation(), d.preventDefault(); else return !1;
                    if (0 != n || 0 != p)clearTimeout(Q), Q = setTimeout(ka, 1E3), b.addClass("scrollbar-active");
                    Ha && Ha(m, n, p);
                    if ("scrollTop" == a.type && is_safari())return !1
                }
            }

            function Va(a) {
                if (!a)return 0;
                if (a.originalEvent && a.originalEvent.wheelDelta)return a.originalEvent.wheelDelta;
                if (a.wheelDelta)return a.wheelDelta;
                if (a.detail)return a.detail;
                if (void 0 != a.originalEvent && void 0 != a.originalEvent.detail)return -40 *
                    a.originalEvent.detail
            }

            function Ta(a) {
                if (!a)return 0;
                if (is_firefox())return 1 == a.axis ? a.detail : 0;
                if (a.originalEvent && a.originalEvent.wheelDeltaX)return a.originalEvent.wheelDeltaX;
                if (a.wheelDelta)return a.wheelDeltaX;
                if (void 0 != a.originalEvent && a.originalEvent.detail)return -40 * a.originalEvent.detail
            }

            function Ua(a) {
                if (!a)return 0;
                if (is_firefox())return 2 == a.axis ? a.detail : 0;
                if (a.originalEvent && a.originalEvent.wheelDeltaY)return a.originalEvent.wheelDeltaY;
                if (a.wheelDelta)return a.wheelDeltaY;
                if (void 0 !=
                    a.originalEvent && a.originalEvent.detail)return -40 * a.originalEvent.detail
            }

            function D(d) {
                var l = {
                    animate_inner: "on",
                    animate_sc: "on",
                    force_no_easing: "off",
                    do_not_clear_suspend_enter_frame: "off"
                }, l = c.extend(l, d);
                x && (0 < h && (h = 0), "scrollTop" == a.type && (g = R), h < -(k - g) && (h = -(k - g)), isNaN(h) && (h = 0), 0 > F && (F = 0, ha = !0), F > g - J && (F = g - J, ha = !0), r && (b.hasClass("easing"), "normal" == a.type && ("on" != a.enable_easing ? f.css({top: h}) : ca = h), "scrollTop" == a.type && ("on" != a.enable_easing || "on" == l.force_no_easing ? (c(window).scrollTop(-h),
                    Wa = P, P = 0, ca = h, setTimeout(function () {
                    P = Wa
                }, 100)) : (ca = h, da.data("targettop", ca))), r.css({top: F}), "on" == a.scrollBg && b.css("background-position", "center " + h + "px")));
                w && (null == v && (v = u / (e - A) * (e - t)), v < -(t - e) && (v = -(t - e)), 0 < v && (v = 0), null != a.secondCon && (B < -(M - K) && (B = -(M - K)), 0 < B && (B = 0)), 0 > u && (u = 0, na = ia = !0), u > e - A && (u = e - A, na = ia = !0), q && (b.hasClass("easing"), "normal" == a.type && ("on" != a.enable_easing ? f.css({left: v}) : wa = v), "scrollTop" == a.type && ("on" != a.enable_easing ? c(window).scrollLeft(-v) : wa = v), a.secondCon && a.secondCon.css({left: B}),
                    q.css({left: u}), "on" == a.scrollBg && b.css("background-position", "" + h + "px center")));
                "off" == l.do_not_clear_suspend_enter_frame && (ta = !1, clearTimeout(Xa), Xa = setTimeout(C, 1E3))
            }

            function eb() {
                var c = 0, d = 0, h = 0, n = 0;
                f && (c = f.width() - b.width(), d = f.position().left, h = f.height() - b.height(), n = f.position().top);
                var k = null, p = null;
                if (a.secondCon) {
                    var k = a.secondCon, p = k.parent(), q = k.width() - p.width(), r = k.position().left;
                    k.height();
                    p.height();
                    k.position()
                }
                Ya && b[0] == document.getElementById("scrollc3") && (Ya = !1);
                ya && (u = -d /
                    c * (e - A), F = -n / h * (g - A), c = {animate_inner: "off"}, k && (B = -(u / (K - A) * (M - K))), D(c));
                za && (u = -r / q * (e - A), v = u / e * (e - t), c = {animate_sc: "off"}, D(c))
            }

            var e = 0, g = 0, t = 0, k = 0, Ea = 0, R = 0, ja = null, H = null, f = null, Ra = !1, qa = !1, n = 0, p = 0, F = 0, u = 0, ya = !1, za = !1, r = void 0, N = void 0, q = void 0, L = void 0, b = c(this), I = 0, E = 0, ra = !1, sa = !1, Ga = !1, J = 0, A = 0, Sa = 0, ga = 0, da = c(window), fa = null, Da = 0, v = 0, h = 0, K, M, B, Ia, ia = !1, ha = !1, w = !0, x = !0, Za = 0, Q, xa = null, Ha = null, ea, W = 0, Y = 0, X = 0, Z = 0, Na = 0, Oa = 0, y = 0, z = 0, Aa, Ba, Pa, Qa, Ca = !1, Ya = !0, na = !1, ua = "plus", La = !1, ta = !1, Xa, P = 1.8, O =
                0, pa = 0, ba = 0, va = 0, ca = 0, wa = 0, oa = 0, Ma = 0, Wa = 0, Ja = !1, cb = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor), db = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
            if (b.hasClass("dzsscr-inited"))return !1;
            (function () {
                e = void 0 == a.totalWidth ? b.width() : a.totalWidth;
                g = void 0 == a.totalHeight ? b.height() : a.totalHeight;
                a.replace_window_object && (da = a.replace_window_object);
                a.settings_scrollTop_height_indicator && a.settings_scrollTop_height_indicator.outerHeight && (fa = a.settings_scrollTop_height_indicator);
                a.settings_comHeight_surplus && 0 < a.settings_comHeight_surplus && (Da = a.settings_comHeight_surplus);
                P = parseFloat(a.easing_duration);
                "normal" == a.type && (f = b.find(".inner").eq(0));
                var d = String(b.attr("class"));
                -1 == d.indexOf("skin_") && b.addClass(a.settings_skin);
                d = String(b.attr("class"));
                (d = /(skin_.*?) /.exec(d)) && d[1] && (a.settings_skin = d[1]);
                "normal" == a.type && (0 == f.parent().hasClass("scroller") && f.wrap('<div class="scroller"></div>'), ja = b.find(".scroller").eq(0));
                if (is_touch_device() && "on" != a.settings_disableSpecialIosFeatures) {
                    if ("scrollTop" ==
                        a.type)return !1;
                    ja && ja.css("overflow", "auto");
                    if ("on" == a.touch_leave_native_scrollbar)return !1;
                    a.secondCon && a.secondCon.parent().css("overflow", "auto");
                    b.addClass("is-touch")
                }
                "scrollTop" == a.type && (b.addClass("scroller-con type-scrollTop"), c("html").css("overflow-y", "hidden"), setTimeout(function () {
                }, 1E3), c(document).delegate("a[href^=#]", "click", function () {
                    var a = c(this);
                    0 < c(a.attr("href")).length && c(".scroller-con.type-scrollTop").get(0) && c(".scroller-con.type-scrollTop").get(0).api_scrolly_to && (a =
                        c(a.attr("href")).offset().top - 100, c(".scroller-con.type-scrollTop").get(0).api_scrolly_to(a));
                    return !1
                }), b.bind("mousedown", function (a) {
                    Ja = 2 == a.which ? Ja ? !1 : !0 : !1
                }), b.bind("mousemove", function (a) {
                    Ja && (h = -(a.clientY / R * (b.height() - R)), D())
                }), c("body").bind("keydown", function (a) {
                    38 == a.keyCode && (h += 30, D());
                    40 == a.keyCode && (h -= 30, D())
                }));
                Ia = b;
                Ia.append('<div class="scrollbar"></div>');
                H = Ia.children(".scrollbar").eq(0);
                is_touch_device() && H.addClass("easing");
                !f || "" != f.get(0).style.height && "auto" != f.get(0).style.height ||
                (Ra = !0);
                "auto" != a.settings_autoheight || "" != b.get(0).style.height && "auto" != b.get(0).style.height || (qa = !0);
                "on" == a.settings_autoheight && (qa = !0);
                "off" == a.settings_autoheight && (qa = !1);
                aa();
                0 == b.css("opacity") && (b.animate({opacity: 1}, 600), b.parent().children(".preloader").fadeOut("slow"));
                0 == Za && (Za = t + 50);
                b.hasClass("is-touch") && "off" == a.settings_disableSpecialIosFeatures && ja && ja.css({overflow: "auto"});
                void 0 != b.get(0) && (b.get(0).reinit = Fa, b.get(0).api_destroy = V, b.get(0).scrollToTop = bb, b.get(0).updateX =
                    Ka, b.get(0).fn_scrollx_to = $a, b.get(0).api_scrolly_to = ab, b.get(0).api_toggle_resize = aa, b.get(0).api_get_view_index_y = U, b.get(0).api_set_action_handle_frame = function (a) {
                    xa = a
                }, b.get(0).api_block_scroll = function (a) {
                    Ga = !0
                }, b.get(0).api_unblock_scroll = function (a) {
                    Ga = !1
                }, b.get(0).api_set_action_handle_wheel_end = function (a) {
                    Ha = a
                }, b.get(0).api_set_window_object = function (a) {
                    da = a
                }, b.get(0).api_set_scrollTop_height_indicator = function (a) {
                    fa = a
                }, b.get(0).api_comHeight_surplus = function (a) {
                    Da = a
                });
                0 < a.settings_refresh &&
                setInterval(Fa, a.settings_refresh);
                "0" == b.find(".scrollbar").css("opacity") && b.find(".scrollbar").animate({opacity: 1}, 600);
                c(window).bind("resize", aa);
                aa();
                setTimeout(aa, 1E3);
                G();
                b.addClass("dzsscr-inited")
            })();
            b.get(0).api_reinit = Fa;
            b.get(0).api_handle_wheel = S;
            "on" == a.settings_scrollbyhover || 0 != b.hasClass("is-touch") && "on" != a.settings_disableSpecialIosFeatures || ("scrollTop" == a.type ? (c(window)[0].addEventListener && c(window)[0].addEventListener("DOMMouseScroll", S, !1), c(window)[0].onmousewheel = S) : (b[0].addEventListener &&
            b[0].addEventListener("DOMMouseScroll", S, !1), b[0].onmousewheel = S), a.secondCon && (a.secondCon[0].addEventListener && a.secondCon[0].addEventListener("DOMMouseScroll", S, !1), a.secondCon[0].onmousewheel = S));
            0 != b.hasClass("is-touch") && "on" != a.settings_disableSpecialIosFeatures || c(document).mousemove(function (d) {
                I = d.pageX - b.offset().left;
                E = d.pageY - b.offset().top;
                "scrollTop" == a.type && (E = d.pageY - c(window).scrollTop());
                "on" == a.settings_scrollbyhover && (0 > I || 0 > E || I > e + 20 || E > g + 20) || (1 != x || 1 != ra && "on" != a.settings_scrollbyhover ||
                (H.addClass("dragging"), "normal" == a.settings_dragmethod && (F = E / g * (g - J), h = E / g * (g - k)), "drag" == a.settings_dragmethod && (F = 0 + (E - 0) - ga, h = F / -(g - J) * (k - g)), h = parseInt(h, 10), D()), 1 != w || 1 != sa && "on" != a.settings_scrollbyhover || (H.addClass("dragging"), "normal" == a.settings_dragmethod && (u = I / e * (e - A), v = I / e * (e - t), null != a.secondCon && (B = I / K * (K - M))), "drag" == a.settings_dragmethod && (u = 0 + (I - 0) - Sa, v = u / -(e - A) * (t - e), null != a.secondCon && (B = u / -(K - A) * (M - K))), D()), "on" == a.settings_fadeoutonleave && (r.animate({opacity: 1}, {
                    queue: !1,
                    duration: 500
                }), N.animate({opacity: 1}, {
                    queue: !1,
                    duration: 500
                })), "on" == a.settings_show_sidebar_on_right_side_mouse && I > b.offset().left + b.width() - 100 && I <= b.offset().left + b.width() && E > b.offset().top && E <= b.offset().top + b.height() && (clearTimeout(Q), Q = setTimeout(ka, 1E3), b.addClass("scrollbar-active")))
            });
            "on" == a.settings_enable_drag_on_desktops_too && (b.addClass("swipe-enabled"), f && (f.bind("mousedown", T), c(document).bind("mousemove", la), c(document).bind("mouseup", ma)), a.secondCon && (a.secondCon.bind("touchstart",
                T), a.secondCon.bind("touchend", ma)));
            0 == b.hasClass("is-touch") || "on" == a.settings_disableSpecialIosFeatures ? c(document).mouseup(function (a) {
                sa = ra = !1;
                H && H.removeClass("dragging")
            }) : (b.addClass("swipe-enabled"), f && (f.bind("touchstart", T), f.bind("touchmove", la), f.bind("touchend", ma)), a.secondCon && (a.secondCon.bind("touchstart", T), a.secondCon.bind("touchend", ma)));
            "on" != a.settings_fadeoutonleave || 0 != is_ios() && "on" != a.settings_disableSpecialIosFeatures || b.mouseleave(function (a) {
                r.animate({opacity: 0}, {
                    queue: !1,
                    duration: 500
                });
                N.animate({opacity: 0}, {queue: !1, duration: 500})
            });
            b.hasClass("is-touch") && "on" != a.settings_disableSpecialIosFeatures && setInterval(eb, 80);
            return this
        })
    };
    window.dzsscr_init = function (a, d) {
        if ("undefined" != typeof d && "undefined" != typeof d.init_each && 1 == d.init_each) {
            var C = 0, U;
            for (U in d)C++;
            1 == C && (d = void 0);
            c(a).each(function () {
                c(this).scroller(d)
            })
        } else c(a).scroller(d)
    }
})(jQuery);
function is_ios() {
    return -1 != navigator.platform.indexOf("iPhone") || -1 != navigator.platform.indexOf("iPod") || -1 != navigator.platform.indexOf("iPad")
}
function is_android() {
    return -1 != navigator.platform.indexOf("Android")
}
function is_touch_device() {
    return !!("ontouchstart"in window)
}
function is_ie() {
    return -1 != navigator.appVersion.indexOf("MSIE") ? !0 : !1
}
function is_firefox() {
    return -1 != navigator.userAgent.indexOf("Firefox") ? !0 : !1
}
function is_opera() {
    return -1 != navigator.userAgent.indexOf("Opera") ? !0 : !1
}
function is_chrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}
function is_safari() {
    return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
}
function version_ie() {
    return parseFloat(navigator.appVersion.split("MSIE")[1])
}
function version_firefox() {
    if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent))return new Number(RegExp.$1)
}
function version_opera() {
    if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent))return new Number(RegExp.$1)
}
function is_ie8() {
    return is_ie() && 9 > version_ie() ? !0 : !1
}
function is_ie9() {
    return is_ie() && 9 == version_ie() ? !0 : !1
}
function getInternetExplorerVersion() {
    var c = -1;
    if ("Microsoft Internet Explorer" == navigator.appName) {
        var a = navigator.userAgent, d = /MSIE ([0-9]{1,}[.0-9]{0,})/;
        null != d.exec(a) && (c = parseFloat(RegExp.$1))
    } else"Netscape" == navigator.appName && (a = navigator.userAgent, d = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/, null != d.exec(a) && (c = parseFloat(RegExp.$1)));
    return c
}
window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (c) {
            window.setTimeout(c, 1E3 / 60)
        }
}();
jQuery(document).ready(function (c) {
    dzsscr_init(".scroller-con.auto-init", {init_each: !0})
});
jQuery(window).load(function () {
    dzsscr_init(".scroller-con.auto-init-onload", {init_each: !0})
});