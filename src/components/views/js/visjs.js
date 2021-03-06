/**
 * vis-timeline - timeline-graph2d
 * https://github.com/visjs/vis-timeline
 *
 * Create a fully customizable, interactive timeline with items and ranges.
 *
 * @version 5.1.0
 * @date    2019-08-02T15:25:33Z
 *
 * @copyright (c) 2011-2017 Almende B.V, http://almende.com
 * @copyright (c) 2018-2019 visjs contributors, https://github.com/visjs
 *
 * @license 
 * vis.js is dual licensed under both
 *
 *   1. The Apache 2.0 License
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   and
 *
 *   2. The MIT License
 *      http://opensource.org/licenses/MIT
 *
 * vis.js may be distributed under either license.
 */
(function hao(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ?
		define(["exports"], t) : (e = e || self, t(e.vis = {}))
})(this, function(e) {
	'use strict';
	var kt = Math.PI,
		St = Math.atan2,
		Dt = Math.sqrt,
		xt = Math.round,
		Tt = Math.pow,
		Ot = Math.abs,
		Ct = Math.ceil,
		Mt = Math.floor,
		Pt = Math.max,
		Yt = Math.min;

	function t(e, t, o) {
		return t in e ? Object.defineProperty(e, t, {
			value: o,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = o, e
	}

	function o(e) {
		if (Array.isArray(e)) {
			for (var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t];
			return o
		}
	}

	function n(e) {
		if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
	}

	function a() {
		throw new TypeError("Invalid attempt to spread non-iterable instance")
	}

	function r(e) {
		return It(e) || Rt(e) || At()
	}

	function s() {
		throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")
	}

	function d(e, t) {
		return t = {
			exports: {}
		}, e(t, t.exports), t.exports
	}

	function l(e, t) {
		var o = t || 0,
			n = Gt;
		return n[e[o++]] + n[e[o++]] + n[e[o++]] + n[e[o++]] + "-" + n[e[o++]] + n[e[o++]] + "-" + n[e[o++]] + n[e[o++]] +
			"-" + n[e[o++]] + n[e[o++]] + "-" + n[e[o++]] + n[e[o++]] + n[e[o++]] + n[e[o++]] + n[e[o++]] + n[e[o++]]
	}

	function p() {
		var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
			t = 1 < arguments.length ? arguments[1] : void 0,
			o = 2 < arguments.length ? arguments[2] : void 0,
			n = t && o || 0;
		"string" == typeof e && (t = "binary" === e ? Array(16) : void 0, e = {});
		var i = e.random || (e.rng || b)();
		if (i[6] = 64 | 15 & i[6], i[8] = 128 | 63 & i[8], t)
			for (var a = 0; 16 > a; a++) t[n + a] = i[a];
		return t || l(i)
	}

	function m(e, t) {
		var o = Object.keys(e);
		return Object.getOwnPropertySymbols && o.push.apply(o, Object.getOwnPropertySymbols(e)), t && (o = o.filter(function(
			t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable
		})), o
	}

	function u(e) {
		for (var t = 1, o; t < arguments.length; t++) o = null == arguments[t] ? {} : arguments[t], t % 2 ? m(o, !0).forEach(
			function(t) {
				Et(e, t, o[t])
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : m(o).forEach(
			function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
			});
		return e
	}

	function c(e) {
		return e instanceof Number || "number" == typeof e
	}

	function h(e) {
		if (e)
			for (; !0 === e.hasChildNodes();) {
				var t = e.firstChild;
				t && (h(t), e.removeChild(t))
			}
	}

	function g(e) {
		return e instanceof String || "string" == typeof e
	}

	function f(e) {
		return "object" === Nt(e) && null !== e
	}

	function y(e) {
		if (e instanceof Date) return !0;
		if (g(e)) {
			var t = qt.exec(e);
			if (t) return !0;
			if (!isNaN(Date.parse(e))) return !0
		}
		return !1
	}

	function _(e) {
		return Ft.isMoment(e)
	}

	function v(e, t, o, n) {
		var i = !1;
		!0 === n && (i = null === t[o] && e[o] !== void 0), i ? delete e[o] : e[o] = t[o]
	}

	function w(e, t) {
		var o = !!(2 < arguments.length && arguments[2] !== void 0) && arguments[2];
		for (var n in e)
			if (t[n] !== void 0)
				if (null === t[n] || "object" !== Nt(t[n])) v(e, t, n, o);
				else {
					var i = e[n],
						a = t[n];
					f(i) && f(a) && w(i, a, o)
				}
	}

	function k(e, t) {
		if (!Array.isArray(e)) throw new Error("Array with property names expected as first argument");
		for (var o = arguments.length, n = Array(2 < o ? o - 2 : 0), i = 2; i < o; i++) n[i - 2] = arguments[i];
		for (var a = 0, r = n, s; a < r.length; a++) {
			s = r[a];
			for (var d = 0, l; d < e.length; d++) l = e[d], s && Object.prototype.hasOwnProperty.call(s, l) && (t[l] = s[l])
		}
		return t
	}

	function S(e, t, o) {
		var n = !!(3 < arguments.length && arguments[3] !== void 0) && arguments[3];
		if (Array.isArray(o)) throw new TypeError("Arrays are not supported by deepExtend");
		for (var i = 0, a; i < e.length; i++)
			if (a = e[i], Object.prototype.hasOwnProperty.call(o, a))
				if (o[a] && o[a].constructor === Object) void 0 === t[a] && (t[a] = {}), t[a].constructor === Object ? x(t[a], o[a],
					!1, n) : v(t, o, a, n);
				else if (Array.isArray(o[a])) throw new TypeError("Arrays are not supported by deepExtend");
		else v(t, o, a, n);
		return t
	}

	function D(e, t, o) {
		var n = !!(3 < arguments.length && arguments[3] !== void 0) && arguments[3];
		if (Array.isArray(o)) throw new TypeError("Arrays are not supported by deepExtend");
		for (var a in o)
			if (Object.prototype.hasOwnProperty.call(o, a) && -1 === e.indexOf(a))
				if (o[a] && o[a].constructor === Object) void 0 === t[a] && (t[a] = {}), t[a].constructor === Object ? x(t[a], o[a]) :
					v(t, o, a, n);
				else if (Array.isArray(o[a])) {
			t[a] = [];
			for (var r = 0; r < o[a].length; r++) t[a].push(o[a][r])
		} else v(t, o, a, n);
		return t
	}

	function x(e, t) {
		var o = !!(2 < arguments.length && arguments[2] !== void 0) && arguments[2],
			n = !!(3 < arguments.length && arguments[3] !== void 0) && arguments[3];
		for (var a in t)
			if (Object.prototype.hasOwnProperty.call(t, a) || !0 === o)
				if (t[a] && t[a].constructor === Object) void 0 === e[a] && (e[a] = {}), e[a].constructor === Object ? x(e[a], t[a],
					o) : v(e, t, a, n);
				else if (Array.isArray(t[a])) {
			e[a] = [];
			for (var r = 0; r < t[a].length; r++) e[a].push(t[a][r])
		} else v(e, t, a, n);
		return e
	}

	function T(e, t) {
		if (e.length !== t.length) return !1;
		for (var o = 0, n = e.length; o < n; o++)
			if (e[o] != t[o]) return !1;
		return !0
	}

	function O(e, t) {
		var o;
		if (void 0 !== e) {
			if (null === e) return null;
			if (!t) return e;
			if ("string" != typeof t && !(t instanceof String)) throw new Error("Type must be a string");
			switch (t) {
				case "boolean":
				case "Boolean":
					return !!e;
				case "number":
				case "Number":
					return g(e) && !isNaN(Date.parse(e)) ? Ft(e).valueOf() : +e.valueOf();
				case "string":
				case "String":
					return e + "";
				case "Date":
					if (c(e)) return new Date(e);
					if (e instanceof Date) return new Date(e.valueOf());
					if (_(e)) return new Date(e.valueOf());
					if (g(e)) return o = qt.exec(e), o ? new Date(+o[1]) : Ft(new Date(e)).toDate();
					throw new Error("Cannot convert object of type " + C(e) + " to type Date");
				case "Moment":
					if (c(e)) return Ft(e);
					if (e instanceof Date) return Ft(e.valueOf());
					if (_(e)) return Ft(e);
					if (g(e)) return o = qt.exec(e), o ? Ft(+o[1]) : Ft(e);
					throw new Error("Cannot convert object of type " + C(e) + " to type Date");
				case "ISODate":
					if (c(e)) return new Date(e);
					if (e instanceof Date) return e.toISOString();
					if (_(e)) return e.toDate().toISOString();
					if (g(e)) return o = qt.exec(e), o ? new Date(+o[1]).toISOString() : Ft(e).format();
					throw new Error("Cannot convert object of type " + C(e) + " to type ISODate");
				case "ASPDate":
					if (c(e)) return "/Date(" + e + ")/";
					if (e instanceof Date || _(e)) return "/Date(" + e.valueOf() + ")/";
					if (g(e)) {
						o = qt.exec(e);
						var n;
						return n = o ? new Date(+o[1]).valueOf() : new Date(e).valueOf(), "/Date(" + n + ")/"
					}
					throw new Error("Cannot convert object of type " + C(e) + " to type ASPDate");
				default:
					throw new Error("Unknown type ".concat(t));
			}
		}
	}

	function C(e) {
		var t = Nt(e);
		return "object" === t ? null === e ? "null" : e instanceof Boolean ? "Boolean" : e instanceof Number ? "Number" : e instanceof String ?
			"String" : Array.isArray(e) ? "Array" : e instanceof Date ? "Date" : "Object" : "number" === t ? "Number" :
			"boolean" === t ? "Boolean" : "string" === t ? "String" : void 0 === t ? "undefined" : t
	}

	function M(e, t) {
		return [].concat(Ht(e), [t])
	}

	function P(e) {
		return e.slice()
	}

	function Y(e) {
		return e.getBoundingClientRect().left
	}

	function E(e) {
		return e.getBoundingClientRect().right
	}

	function I(e) {
		return e.getBoundingClientRect().top
	}

	function R(e, t) {
		var o = e.className.split(" "),
			n = t.split(" ");
		o = o.concat(n.filter(function(e) {
			return 0 > o.indexOf(e)
		})), e.className = o.join(" ")
	}

	function A(e, t) {
		var o = e.className.split(" "),
			n = t.split(" ");
		o = o.filter(function(e) {
			return 0 > n.indexOf(e)
		}), e.className = o.join(" ")
	}

	function H(e, t) {
		if (Array.isArray(e))
			for (var o = e.length, n = 0; n < o; n++) t(e[n], n, e);
		else
			for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t(e[a], a, e)
	}

	function L(e, t, o) {
		return e[t] !== o && (e[t] = o, !0)
	}

	function N(e) {
		var t = !1;
		return function() {
			t || (t = !0, requestAnimationFrame(function() {
				t = !1, e()
			}))
		}
	}

	function F(e, t, o, n) {
		e.addEventListener ? (n === void 0 && (n = !1), "mousewheel" === t && 0 <= navigator.userAgent.indexOf("Firefox") &&
			(t = "DOMMouseScroll"), e.addEventListener(t, o, n)) : e.attachEvent("on" + t, o)
	}

	function G(e, t, o, n) {
		e.removeEventListener ? (n === void 0 && (n = !1), "mousewheel" === t && 0 <= navigator.userAgent.indexOf("Firefox") &&
			(t = "DOMMouseScroll"), e.removeEventListener(t, o, n)) : e.detachEvent("on" + t, o)
	}

	function W(e) {
		if (e || (e = window.event), !e);
		else e.preventDefault ? e.preventDefault() : e.returnValue = !1
	}

	function U() {
		var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : window.event,
			t = null;
		if (!e);
		else e.target ? t = e.target : e.srcElement && (t = e.srcElement);
		return t instanceof Element ? null != t.nodeType && 3 == t.nodeType && (t = t.parentNode, !(t instanceof Element)) ?
			null : t : null
	}

	function j(e, t) {
		for (var o = e; o;) {
			if (o === t) return !0;
			if (o.parentNode) o = o.parentNode;
			else return !1
		}
		return !1
	}

	function V(e) {
		var t;
		switch (e.length) {
			case 3:
			case 4:
				return t = Xt.exec(e), t ? {
					r: parseInt(t[1] + t[1], 16),
					g: parseInt(t[2] + t[2], 16),
					b: parseInt(t[3] + t[3], 16)
				} : null;
			case 6:
			case 7:
				return t = Zt.exec(e), t ? {
					r: parseInt(t[1], 16),
					g: parseInt(t[2], 16),
					b: parseInt(t[3], 16)
				} : null;
			default:
				return null;
		}
	}

	function z(e, t) {
		if (-1 !== e.indexOf("rgba")) return e;
		if (-1 !== e.indexOf("rgb")) {
			var o = e.substr(e.indexOf("(") + 1).replace(")", "").split(",");
			return "rgba(" + o[0] + "," + o[1] + "," + o[2] + "," + t + ")"
		}
		var n = V(e);
		return null == n ? e : "rgba(" + n.r + "," + n.g + "," + n.b + "," + t + ")"
	}

	function B(e, t, o) {
		return "#" + (16777216 + (e << 16) + (t << 8) + o).toString(16).slice(1)
	}

	function q(e, t) {
		if (g(e)) {
			var o = e;
			if (te(o)) {
				var n = o.substr(4).substr(0, o.length - 5).split(",").map(function(e) {
					return parseInt(e)
				});
				o = B(n[0], n[1], n[2])
			}
			if (!0 === ee(o)) {
				var i = J(o),
					a = {
						h: i.h,
						s: .8 * i.s,
						v: Yt(1, 1.02 * i.v)
					},
					r = {
						h: i.h,
						s: Yt(1, 1.25 * i.s),
						v: .8 * i.v
					},
					s = $(r.h, r.s, r.v),
					d = $(a.h, a.s, a.v);
				return {
					background: o,
					border: s,
					highlight: {
						background: d,
						border: s
					},
					hover: {
						background: d,
						border: s
					}
				}
			}
			return {
				background: o,
				border: o,
				highlight: {
					background: o,
					border: o
				},
				hover: {
					background: o,
					border: o
				}
			}
		}
		if (t) {
			var l = {
				background: e.background || t.background,
				border: e.border || t.border,
				highlight: g(e.highlight) ? {
					border: e.highlight,
					background: e.highlight
				} : {
					background: e.highlight && e.highlight.background || t.highlight.background,
					border: e.highlight && e.highlight.border || t.highlight.border
				},
				hover: g(e.hover) ? {
					border: e.hover,
					background: e.hover
				} : {
					border: e.hover && e.hover.border || t.hover.border,
					background: e.hover && e.hover.background || t.hover.background
				}
			};
			return l
		}
		var p = {
			background: e.background || void 0,
			border: e.border || void 0,
			highlight: g(e.highlight) ? {
				border: e.highlight,
				background: e.highlight
			} : {
				background: e.highlight && e.highlight.background || void 0,
				border: e.highlight && e.highlight.border || void 0
			},
			hover: g(e.hover) ? {
				border: e.hover,
				background: e.hover
			} : {
				border: e.hover && e.hover.border || void 0,
				background: e.hover && e.hover.background || void 0
			}
		};
		return p
	}

	function Z(e, t, o) {
		e /= 255, t /= 255, o /= 255;
		var n = Yt(e, Yt(t, o)),
			i = Pt(e, Pt(t, o));
		if (n === i) return {
			h: 0,
			s: 0,
			v: n
		};
		var a = e === n ? t - o : o === n ? e - t : o - e,
			r = e === n ? 3 : o === n ? 1 : 5;
		return {
			h: 60 * (r - a / (i - n)) / 360,
			s: (i - n) / i,
			v: i
		}
	}

	function X(e, t) {
		var o = Jt.split(e.style.cssText),
			n = Jt.split(t),
			i = u({}, o, {}, n);
		e.style.cssText = Jt.join(i)
	}

	function K(e, t) {
		var o = Jt.split(e.style.cssText),
			n = Jt.split(t);
		for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && delete o[i];
		e.style.cssText = Jt.join(o)
	}

	function Q(e, o, n) {
		var a = Mt(6 * e),
			i = 6 * e - a,
			s = n * (1 - o),
			d = n * (1 - i * o),
			l = n * (1 - (1 - i) * o),
			t, p, m;
		switch (a % 6) {
			case 0:
				t = n, p = l, m = s;
				break;
			case 1:
				t = d, p = n, m = s;
				break;
			case 2:
				t = s, p = n, m = l;
				break;
			case 3:
				t = s, p = d, m = n;
				break;
			case 4:
				t = l, p = s, m = n;
				break;
			case 5:
				t = n, p = s, m = d;
		}
		return {
			r: Mt(255 * t),
			g: Mt(255 * p),
			b: Mt(255 * m)
		}
	}

	function $(e, t, o) {
		var n = Q(e, t, o);
		return B(n.r, n.g, n.b)
	}

	function J(e) {
		var t = V(e);
		if (!t) throw new TypeError("'".concat(e, "' is not a valid color."));
		return Z(t.r, t.g, t.b)
	}

	function ee(e) {
		var t = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
		return t
	}

	function te(e) {
		e = e.replace(" ", "");
		var t = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/i.test(e);
		return t
	}

	function oe(e) {
		e = e.replace(" ", "");
		var t = /rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(0?.{1,3})\)/i.test(e);
		return t
	}

	function ne(e, t) {
		if (null !== t && "object" === Nt(t)) {
			for (var o = Object.create(t), n = 0; n < e.length; n++) Object.prototype.hasOwnProperty.call(t, e[n]) && "object" ==
				Nt(t[e[n]]) && (o[e[n]] = ie(t[e[n]]));
			return o
		}
		return null
	}

	function ie(e) {
		if (null === e || "object" !== Nt(e)) return null;
		if (e instanceof Element) return e;
		var t = Object.create(e);
		for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && "object" == Nt(e[o]) && (t[o] = ie(e[o]));
		return t
	}

	function ae(e, t) {
		for (var o = 0; o < e.length; o++) {
			var n = e[o],
				a = void 0;
			for (a = o; 0 < a && 0 > t(n, e[a - 1]); a--) e[a] = e[a - 1];
			e[a] = n
		}
		return e
	}

	function re(e, t, o) {
		var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : {},
			i = function(e) {
				return null !== e && e !== void 0
			},
			a = function(e) {
				return null !== e && "object" === Nt(e)
			};
		if (!a(e)) throw new Error("Parameter mergeTarget must be an object");
		if (!a(t)) throw new Error("Parameter options must be an object");
		if (!i(o)) throw new Error("Parameter option must have a value");
		if (!a(n)) throw new Error("Parameter globalOptions must be an object");
		var r = function(e, t, o) {
				a(e[o]) || (e[o] = {});
				var n = t[o],
					i = e[o];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (i[r] = n[r])
			},
			s = t[o],
			d = a(n) && ! function(e) {
				for (var t in e)
					if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
				return !0
			}(n),
			l = d ? n[o] : void 0,
			p = l ? l.enabled : void 0;
		if (void 0 !== s) {
			if ("boolean" == typeof s) return a(e[o]) || (e[o] = {}), void(e[o].enabled = s);
			if (null === s && !a(e[o]))
				if (i(l)) e[o] = Object.create(l);
				else return;
			if (a(s)) {
				var m = !0;
				void 0 === s.enabled ? void 0 !== p && (m = l.enabled) : m = s.enabled, r(e, t, o), e[o].enabled = m
			}
		}
	}

	function se(e, t, o, n) {
		for (var i = 0, a = 0, r = e.length - 1; a <= r && i < 1e4;) {
			var s = Mt((a + r) / 2),
				d = e[s],
				l = n === void 0 ? d[o] : d[o][n],
				p = t(l);
			if (0 == p) return s; - 1 == p ? a = s + 1 : r = s - 1;
			i++
		}
		return -1
	}

	function de(e, t, o, n, i) {
		var a = 0,
			r = 0,
			s = e.length - 1,
			d, l, p, m;
		for (i = null == i ? function(e, t) {
				return e == t ? 0 : e < t ? -1 : 1
			} : i; r <= s && 10000 > a;) {
			if (m = Mt(.5 * (s + r)), d = e[Pt(0, m - 1)][o], l = e[m][o], p = e[Yt(e.length - 1, m + 1)][o], 0 == i(l, t))
				return m;
			if (0 > i(d, t) && 0 < i(l, t)) return "before" == n ? Pt(0, m - 1) : m;
			if (0 > i(l, t) && 0 < i(p, t)) return "before" == n ? m : Yt(e.length - 1, m + 1);
			0 > i(l, t) ? r = m + 1 : s = m - 1, a++
		}
		return -1
	}

	function le() {
		var e = document.createElement("p");
		e.style.width = "100%", e.style.height = "200px";
		var t = document.createElement("div");
		t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.visibility = "hidden", t.style.width =
			"200px", t.style.height = "150px", t.style.overflow = "hidden", t.appendChild(e), document.body.appendChild(t);
		var o = e.offsetWidth;
		t.style.overflow = "scroll";
		var n = e.offsetWidth;
		return o == n && (n = t.clientWidth), document.body.removeChild(t), o - n
	}

	function pe(e, t) {
		var o;
		Array.isArray(t) || (t = [t]);
		var n = !0,
			a = !1,
			r = void 0;
		try {
			for (var s = e[Symbol.iterator](), d, l; !(n = (d = s.next()).done); n = !0)
				if (l = d.value, l) {
					o = l[t[0]];
					for (var p = 1; p < t.length; p++) o && (o = o[t[p]]);
					if ("undefined" != typeof o) break
				}
		} catch (e) {
			a = !0, r = e
		} finally {
			try {
				n || null == s.return || s.return()
			} finally {
				if (a) throw r
			}
		}
		return o
	}

	function me() {
		throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")
	}

	function ue(e, t) {
		return t = {
			exports: {}
		}, e(t, t.exports), t.exports
	}

	function ce(e) {
		return e && e["default"] || e
	}

	function he(e, t, o) {
		return t in e ? Object.defineProperty(e, t, {
			value: o,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = o, e
	}

	function ge(e, t) {
		return t = {
			exports: {}
		}, e(t, t.exports), t.exports
	}

	function fe(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function ye(e, t) {
		for (var o = 0, n; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n &&
			(n.writable = !0), Object.defineProperty(e, n.key, n)
	}

	function _e(e, t, o) {
		return t && ye(e.prototype, t), o && ye(e, o), e
	}

	function be(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function ve(e, t) {
		return t && ("object" === ho(t) || "function" == typeof t) ? t : yo(e)
	}

	function we(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && vo(e, t)
	}

	function ke(e, t) {
		var o = t || 0,
			n = ko;
		return n[e[o++]] + n[e[o++]] + n[e[o++]] + n[e[o++]] + "-" + n[e[o++]] + n[e[o++]] + "-" + n[e[o++]] + n[e[o++]] +
			"-" + n[e[o++]] + n[e[o++]] + "-" + n[e[o++]] + n[e[o++]] + n[e[o++]] + n[e[o++]] + n[e[o++]] + n[e[o++]]
	}

	function Se() {
		var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
			t = 1 < arguments.length ? arguments[1] : void 0,
			o = 2 < arguments.length ? arguments[2] : void 0,
			n = t && o || 0;
		"string" == typeof e && (t = "binary" === e ? Array(16) : void 0, e = {});
		var i = e.random || (e.rng || Do)();
		if (i[6] = 64 | 15 & i[6], i[8] = 128 | 63 & i[8], t)
			for (var a = 0; 16 > a; a++) t[n + a] = i[a];
		return t || ke(i)
	}

	function De(e) {
		return De = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		}, De(e)
	}

	function xe() {
		throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")
	}

	function Te(e, t) {
		return t = {
			exports: {}
		}, e(t, t.exports), t.exports
	}

	function Oe(e) {
		return e instanceof Number || "number" == typeof e
	}

	function Ce(e) {
		return e instanceof String || "string" == typeof e
	}

	function Me(e) {
		return Yo.isMoment(e)
	}

	function Pe(e, t) {
		var o;
		if (void 0 !== e) {
			if (null === e) return null;
			if (!t) return e;
			if ("string" != typeof t && !(t instanceof String)) throw new Error("Type must be a string");
			switch (t) {
				case "boolean":
				case "Boolean":
					return !!e;
				case "number":
				case "Number":
					return Ce(e) && !isNaN(Date.parse(e)) ? Yo(e).valueOf() : +e.valueOf();
				case "string":
				case "String":
					return e + "";
				case "Date":
					if (Oe(e)) return new Date(e);
					if (e instanceof Date) return new Date(e.valueOf());
					if (Me(e)) return new Date(e.valueOf());
					if (Ce(e)) return o = Go.exec(e), o ? new Date(+o[1]) : Yo(new Date(e)).toDate();
					throw new Error("Cannot convert object of type " + Ye(e) + " to type Date");
				case "Moment":
					if (Oe(e)) return Yo(e);
					if (e instanceof Date) return Yo(e.valueOf());
					if (Me(e)) return Yo(e);
					if (Ce(e)) return o = Go.exec(e), o ? Yo(+o[1]) : Yo(e);
					throw new Error("Cannot convert object of type " + Ye(e) + " to type Date");
				case "ISODate":
					if (Oe(e)) return new Date(e);
					if (e instanceof Date) return e.toISOString();
					if (Me(e)) return e.toDate().toISOString();
					if (Ce(e)) return o = Go.exec(e), o ? new Date(+o[1]).toISOString() : Yo(e).format();
					throw new Error("Cannot convert object of type " + Ye(e) + " to type ISODate");
				case "ASPDate":
					if (Oe(e)) return "/Date(" + e + ")/";
					if (e instanceof Date) return "/Date(" + e.valueOf() + ")/";
					if (Ce(e)) {
						o = Go.exec(e);
						var n;
						return n = o ? new Date(+o[1]).valueOf() : new Date(e).valueOf(), "/Date(" + n + ")/"
					}
					throw new Error("Cannot convert object of type " + Ye(e) + " to type ASPDate");
				default:
					throw new Error("Unknown type ".concat(t));
			}
		}
	}

	function Ye(e) {
		var t = De(e);
		return "object" === t ? null === e ? "null" : e instanceof Boolean ? "Boolean" : e instanceof Number ? "Number" : e instanceof String ?
			"String" : Array.isArray(e) ? "Array" : e instanceof Date ? "Date" : "Object" : "number" === t ? "Number" :
			"boolean" === t ? "Boolean" : "string" === t ? "String" : void 0 === t ? "undefined" : t
	}

	function Ee(e) {
		return "string" == typeof e || "number" == typeof e
	}

	function Ie(e) {
		if (Array.isArray(e)) {
			for (var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t];
			return o
		}
	}

	function Re(e) {
		if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
	}

	function Ae(e, t) {
		var o = Object.keys(e);
		return Object.getOwnPropertySymbols && o.push.apply(o, Object.getOwnPropertySymbols(e)), t && (o = o.filter(function(
			t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable
		})), o
	}

	function He(e) {
		for (var t = 1, o; t < arguments.length; t++) o = null == arguments[t] ? {} : arguments[t], t % 2 ? Ae(o, !0).forEach(
			function(t) {
				co(e, t, o[t])
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Ae(o).forEach(
			function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
			});
		return e
	}

	function Le(e) {
		return Le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		}, Le(e)
	}

	function Ne(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function Fe(e, t) {
		for (var o = 0, n; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n &&
			(n.writable = !0), Object.defineProperty(e, n.key, n)
	}

	function Ge(e, t, o) {
		return t && Fe(e.prototype, t), o && Fe(e, o), e
	}

	function We() {
		this.options = null, this.props = null
	}

	function Ue(e, t) {
		var o = Xo().hours(0).minutes(0).seconds(0).milliseconds(0),
			n = o.clone().add(-3, "days").valueOf(),
			i = o.clone().add(3, "days").valueOf();
		this.millisecondsPerPixelCache = void 0, t === void 0 ? (this.start = n, this.end = i) : (this.start = t.start || n,
				this.end = t.end || i), this.rolling = !1, this.body = e, this.deltaDifference = 0, this.scaleOffset = 0, this.startToFront = !
			1, this.endToFront = !0, this.defaultOptions = {
				rtl: !1,
				start: null,
				end: null,
				moment: Xo,
				direction: "horizontal",
				moveable: !0,
				zoomable: !0,
				min: null,
				max: null,
				zoomMin: 10,
				zoomMax: 315360000000000,
				rollingMode: {
					follow: !1,
					offset: .5
				}
			}, this.options = Ko.extend({}, this.defaultOptions), this.props = {
				touch: {}
			}, this.animationTimer = null, this.body.emitter.on("panstart", this._onDragStart.bind(this)), this.body.emitter.on(
				"panmove", this._onDrag.bind(this)), this.body.emitter.on("panend", this._onDragEnd.bind(this)), this.body.emitter
			.on("mousewheel", this._onMouseWheel.bind(this)), this.body.emitter.on("touch", this._onTouch.bind(this)), this.body
			.emitter.on("pinch", this._onPinch.bind(this)), this.body.dom.rollingModeBtn.addEventListener("click", this.startRolling
				.bind(this)), this.setOptions(t)
	}

	function je(e) {
		if ("horizontal" != e && "vertical" != e) throw new TypeError("Unknown direction \"" + e +
			"\". Choose \"horizontal\" or \"vertical\".")
	}

	function Ve(e) {
		if (e) return ze(e)
	}

	function ze(e) {
		for (var t in Ve.prototype) e[t] = Ve.prototype[t];
		return e
	}

	function Be(e, t, o, n, i) {
		this.moment = Xo, this.current = this.moment(), this._start = this.moment(), this._end = this.moment(), this.autoScale = !
			0, this.scale = "day", this.step = 1, this.setRange(e, t, o), this.switchedDay = !1, this.switchedMonth = !1, this.switchedYear = !
			1, this.hiddenDates = Array.isArray(n) ? n : null == n ? [] : [n], this.format = Be.FORMAT, this.options = i ? i : {}
	}

	function qe(e, t) {
		this.dom = {
			foreground: null,
			lines: [],
			majorTexts: [],
			minorTexts: [],
			redundant: {
				lines: [],
				majorTexts: [],
				minorTexts: []
			}
		}, this.props = {
			range: {
				start: 0,
				end: 0,
				minimumStep: 0
			},
			lineTop: 0
		}, this.defaultOptions = {
			orientation: {
				axis: "bottom"
			},
			showMinorLabels: !0,
			showMajorLabels: !0,
			maxMinorChars: 7,
			format: xn.FORMAT,
			moment: Xo,
			timeAxis: null
		}, this.options = to.extend({}, this.defaultOptions), this.body = e, this._create(), this.setOptions(t)
	}

	function Ze(e) {
		this.active = !1, this.dom = {
				container: e
			}, this.dom.overlay = document.createElement("div"), this.dom.overlay.className = "vis-overlay", this.dom.container
			.appendChild(this.dom.overlay), this.hammer = _n(this.dom.overlay), this.hammer.on("tap", this._onTapOverlay.bind(
				this));
		var t = this;
		["tap", "doubletap", "press", "pinch", "pan", "panstart", "panmove", "panend"].forEach(function(e) {
				t.hammer.on(e, function(e) {
					e.stopPropagation()
				})
			}), document && document.body && (this.onClick = function(o) {
				Xe(o.target, e) || t.deactivate()
			}, document.body.addEventListener("click", this.onClick)), this.keycharm !== void 0 && this.keycharm.destroy(),
			this.keycharm = Cn(), this.escListener = this.deactivate.bind(this)
	}

	function Xe(e, t) {
		for (; e;) {
			if (e === t) return !0;
			e = e.parentNode
		}
		return !1
	}

	function Ke(e, t) {
		this.body = e, this.defaultOptions = {
				moment: Xo,
				locales: Mn,
				locale: "en",
				id: void 0,
				title: void 0,
				editable: !0
			}, this.options = to.extend({}, this.defaultOptions), this.customTime = t && t.time ? t.time : new Date, this.eventParams = {},
			this.setOptions(t), this._create()
	}

	function Qe() {}

	function $e(e, t) {
		this.body = e, this.defaultOptions = {
			rtl: !1,
			showCurrentTime: !0,
			alignCurrentTime: void 0,
			moment: Xo,
			locales: Mn,
			locale: "en"
		}, this.options = Ko.extend({}, this.defaultOptions), this.offset = 0, this._create(), this.setOptions(t)
	}

	function Je(e, t, o) {
		if (this.groupId = e, this.subgroups = {}, this.subgroupStack = {}, this.subgroupStackAll = !1, this.doInnerStack = !
			1, this.shouldBailStackItems = !1, this.subgroupIndex = 0, this.subgroupOrderer = t && t.subgroupOrder, this.itemSet =
			o, this.isVisible = null, this.stackDirty = !0, t && t.nestedGroups && (this.nestedGroups = t.nestedGroups, this.showNested = !
				1 != t.showNested), t && t.subgroupStack)
			if ("boolean" == typeof t.subgroupStack) this.doInnerStack = t.subgroupStack, this.subgroupStackAll = t.subgroupStack;
			else
				for (var n in t.subgroupStack) this.subgroupStack[n] = t.subgroupStack[n], this.doInnerStack = this.doInnerStack ||
					t.subgroupStack[n];
		this.heightMode = t && t.heightMode ? t.heightMode : o.options.groupHeightMode, this.nestedInGroup = null, this.dom = {},
			this.props = {
				label: {
					width: 0,
					height: 0
				}
			}, this.className = null, this.items = {}, this.visibleItems = [], this.itemsInRange = [], this.orderedItems = {
				byStart: [],
				byEnd: []
			}, this.checkRangedItems = !1;
		var i = this;
		this.itemSet.body.emitter.on("checkRangedItems", function() {
			i.checkRangedItems = !0
		}), this._create(), this.setData(t)
	}

	function et(e, t, o) {
		jn.call(this, e, t, o), this.width = 0, this.height = 0, this.top = 0, this.left = 0
	}

	function tt(e, t, o) {
		this.id = null, this.parent = null, this.data = e, this.dom = null, this.conversion = t || {}, this.options = o || {},
			this.selected = !1, this.displayed = !1, this.groupShowing = !0, this.dirty = !0, this.top = null, this.right =
			null, this.left = null, this.width = null, this.height = null, this.editable = null, this._updateEditStatus()
	}

	function ot(e, t, o) {
		if (this.props = {
				dot: {
					width: 0,
					height: 0
				},
				line: {
					width: 0,
					height: 0
				}
			}, this.options = o, e && null == e.start) throw new Error("Property \"start\" missing in item " + e);
		Bn.call(this, e, t, o)
	}

	function nt(e, t, o) {
		if (this.props = {
				dot: {
					top: 0,
					width: 0,
					height: 0
				},
				content: {
					height: 0,
					marginLeft: 0,
					marginRight: 0
				}
			}, this.options = o, e && null == e.start) throw new Error("Property \"start\" missing in item " + e);
		Bn.call(this, e, t, o)
	}

	function it(e, t, o) {
		if (this.props = {
				content: {
					width: 0
				}
			}, this.overflow = !1, this.options = o, e) {
			if (null == e.start) throw new Error("Property \"start\" missing in item " + e.id);
			if (null == e.end) throw new Error("Property \"end\" missing in item " + e.id)
		}
		Bn.call(this, e, t, o)
	}

	function at(e, t, o) {
		if (this.props = {
				content: {
					width: 0
				}
			}, this.overflow = !1, e) {
			if (null == e.start) throw new Error("Property \"start\" missing in item " + e.id);
			if (null == e.end) throw new Error("Property \"end\" missing in item " + e.id)
		}
		Bn.call(this, e, t, o)
	}

	function rt(e, t) {
		this.body = e, this.defaultOptions = {
				type: null,
				orientation: {
					item: "bottom"
				},
				align: "auto",
				stack: !0,
				stackSubgroups: !0,
				groupOrderSwap: function(e, t) {
					var o = t.order;
					t.order = e.order, e.order = o
				},
				groupOrder: "order",
				selectable: !0,
				multiselect: !1,
				itemsAlwaysDraggable: {
					item: !1,
					range: !1
				},
				editable: {
					updateTime: !1,
					updateGroup: !1,
					add: !1,
					remove: !1,
					overrideItems: !1
				},
				groupEditable: {
					order: !1,
					add: !1,
					remove: !1
				},
				snap: xn.snap,
				onDropObjectOnItem: function(e, t, o) {
					o(t)
				},
				onAdd: function(e, t) {
					t(e)
				},
				onUpdate: function(e, t) {
					t(e)
				},
				onMove: function(e, t) {
					t(e)
				},
				onRemove: function(e, t) {
					t(e)
				},
				onMoving: function(e, t) {
					t(e)
				},
				onAddGroup: function(e, t) {
					t(e)
				},
				onMoveGroup: function(e, t) {
					t(e)
				},
				onRemoveGroup: function(e, t) {
					t(e)
				},
				margin: {
					item: {
						horizontal: 10,
						vertical: 10
					},
					axis: 20
				},
				showTooltips: !0,
				tooltip: {
					followMouse: !1,
					overflowMethod: "flip"
				},
				tooltipOnItemUpdateTime: !1
			}, this.options = to.extend({}, this.defaultOptions), this.options.rtl = t.rtl, this.options.onTimeout = t.onTimeout,
			this.itemOptions = {
				type: {
					start: "Date",
					end: "Date"
				}
			}, this.conversion = {
				toScreen: e.util.toScreen,
				toTime: e.util.toTime
			}, this.dom = {}, this.props = {}, this.hammer = null;
		var o = this;
		this.itemsData = null, this.groupsData = null, this.itemsSettingTime = null, this.initialItemSetDrawn = !1, this.userContinueNotBail =
			null, this.itemListeners = {
				add: function(e, t) {
					o._onAdd(t.items)
				},
				update: function(e, t) {
					o._onUpdate(t.items)
				},
				remove: function(e, t) {
					o._onRemove(t.items)
				}
			}, this.groupListeners = {
				add: function(e, t, n) {
					if (o._onAddGroups(t.items), o.groupsData && 0 < o.groupsData.length) {
						var i = o.groupsData.getDataSet();
						i.get().forEach(function(e) {
							if (e.nestedGroups) {
								!1 != e.showNested && (e.showNested = !0);
								var t = [];
								e.nestedGroups.forEach(function(o) {
									var n = i.get(o);
									n && (n.nestedInGroup = e.id, !1 == e.showNested && (n.visible = !1), t = t.concat(n))
								}), i.update(t, n)
							}
						})
					}
				},
				update: function(e, t) {
					o._onUpdateGroups(t.items)
				},
				remove: function(e, t) {
					o._onRemoveGroups(t.items)
				}
			}, this.items = {}, this.groups = {}, this.groupIds = [], this.selection = [], this.popup = null, this.popupTimer =
			null, this.touchParams = {}, this.groupTouchParams = {}, this._create(), this.setOptions(t)
	}

	function st(e, t, o, n) {
		if (this.initTime = new Date, this.itemsDone = !1, !(this instanceof st)) throw new SyntaxError(
			"Constructor must be called with the new operator");
		if (!(Array.isArray(o) || o instanceof xi || o instanceof Ti) && o instanceof Object) {
			var i = n;
			n = o, o = i
		}
		n && n.throttleRedraw && console.warn(
			"Timeline option \"throttleRedraw\" is DEPRICATED and no longer supported. It will be removed in the next MAJOR release."
		);
		var a = this;
		if (this.defaultOptions = {
				start: null,
				end: null,
				autoResize: !0,
				orientation: {
					axis: "bottom",
					item: "bottom"
				},
				moment: Xo,
				width: null,
				height: null,
				maxHeight: null,
				minHeight: null
			}, this.options = Ko.deepExtend({}, this.defaultOptions), this._create(e), !n || n && "undefined" == typeof n.rtl) {
			this.dom.root.style.visibility = "hidden";
			for (var r = this.dom.root, s; !s && r;) s = window.getComputedStyle(r, null).direction, r = r.parentElement;
			this.options.rtl = s && "rtl" == s.toLowerCase()
		} else this.options.rtl = n.rtl;
		this.options.rollingMode = n && n.rollingMode, this.options.onInitialDrawComplete = n && n.onInitialDrawComplete,
			this.options.onTimeout = n && n.onTimeout, this.options.loadingScreenTemplate = n && n.loadingScreenTemplate;
		var d = document.createElement("div");
		if (this.options.loadingScreenTemplate) {
			var l = this.options.loadingScreenTemplate.bind(this),
				p = l(this.dom.loadingScreen);
			p instanceof Object && !(p instanceof Element) ? l(d) : p instanceof Element ? (d.innerHTML = "", d.appendChild(p)) :
				null != p && (d.innerHTML = p)
		}
		this.dom.loadingScreen.appendChild(d), this.components = [], this.body = {
				dom: this.dom,
				domProps: this.props,
				emitter: {
					on: this.on.bind(this),
					off: this.off.bind(this),
					emit: this.emit.bind(this)
				},
				hiddenDates: [],
				util: {
					getScale: function() {
						return a.timeAxis.step.scale
					},
					getStep: function() {
						return a.timeAxis.step.step
					},
					toScreen: a._toScreen.bind(a),
					toGlobalScreen: a._toGlobalScreen.bind(a),
					toTime: a._toTime.bind(a),
					toGlobalTime: a._toGlobalTime.bind(a)
				}
			}, this.range = new hn(this.body, this.options), this.components.push(this.range), this.body.range = this.range,
			this.timeAxis = new bi(this.body, this.options), this.timeAxis2 = null, this.components.push(this.timeAxis), this.currentTime =
			new En(this.body, this.options), this.components.push(this.currentTime), this.itemSet = new wi(this.body, this.options),
			this.components.push(this.itemSet), this.itemsData = null, this.groupsData = null, this.dom.root.onclick = function(
				e) {
				a.emit("click", a.getEventProperties(e))
			}, this.dom.root.ondblclick = function(e) {
				a.emit("doubleClick", a.getEventProperties(e))
			}, this.dom.root.oncontextmenu = function(e) {
				a.emit("contextmenu", a.getEventProperties(e))
			}, this.dom.root.onmouseover = function(e) {
				a.emit("mouseOver", a.getEventProperties(e))
			}, window.PointerEvent ? (this.dom.root.onpointerdown = function(e) {
				a.emit("mouseDown", a.getEventProperties(e))
			}, this.dom.root.onpointermove = function(e) {
				a.emit("mouseMove", a.getEventProperties(e))
			}, this.dom.root.onpointerup = function(e) {
				a.emit("mouseUp", a.getEventProperties(e))
			}) : (this.dom.root.onmousemove = function(e) {
				a.emit("mouseMove", a.getEventProperties(e))
			}, this.dom.root.onmousedown = function(e) {
				a.emit("mouseDown", a.getEventProperties(e))
			}, this.dom.root.onmouseup = function(e) {
				a.emit("mouseUp", a.getEventProperties(e))
			}), this.initialFitDone = !1, this.on("changed", function() {
				if (null != a.itemsData) {
					if (!a.initialFitDone && !a.options.rollingMode)
						if (a.initialFitDone = !0, null != a.options.start || null != a.options.end) {
							if (null == a.options.start || null == a.options.end) var e = a.getItemRange();
							var t = null == a.options.start ? e.min : a.options.start,
								o = null == a.options.end ? e.max : a.options.end;
							a.setWindow(t, o, {
								animation: !1
							})
						} else a.fit({
							animation: !1
						});
					a.initialDrawDone || !a.initialRangeChangeDone && (a.options.start || a.options.end) && !a.options.rollingMode ||
						(a.initialDrawDone = !0, a.itemSet.initialDrawDone = !0, a.dom.root.style.visibility = "visible", a.dom.loadingScreen
							.parentNode.removeChild(a.dom.loadingScreen), a.options.onInitialDrawComplete && setTimeout(function() {
								return a.options.onInitialDrawComplete()
							}, 0))
				}
			}), this.on("destroyTimeline", function() {
				a.destroy()
			}), n && this.setOptions(n), o && this.setGroups(o), t && this.setItems(t), this._redraw()
	}

	function dt(e) {
		return Ko.convert(e.data.start, "Date").valueOf()
	}

	function lt(e) {
		var t = e.data.end == null ? e.data.start : e.data.end;
		return Ko.convert(t, "Date").valueOf()
	}

	function pt(e, t) {
		if (!t.parent) return !1;
		var o = e.props.leftContainer.height,
			n = e.props.left.height,
			i = t.parent,
			a = i.top,
			r = !0,
			s = e.timeAxis.options.orientation.axis,
			d = function() {
				return "bottom" == s ? i.height - t.top - t.height : t.top
			},
			l = -1 * e._getScrollTop(),
			p = a + d(),
			m = t.height;
		return p < l ? a + o <= a + d() + m && (a += d() - e.itemSet.options.margin.item.vertical) : p + m > l + o ? a += d() +
			m - o + e.itemSet.options.margin.item.vertical : r = !1, a = Yt(a, n - o), {
				shouldScroll: r,
				scrollOffset: a,
				itemTop: p
			}
	}

	function mt(e, t, o, n, i, a) {
		var r = !!(6 < arguments.length && void 0 !== arguments[6]) && arguments[6],
			s = !!(7 < arguments.length && void 0 !== arguments[7]) && arguments[7];
		if (this.majorSteps = [1, 2, 5, 10], this.minorSteps = [.25, .5, 1, 2], this.customLines = null, this.containerHeight =
			i, this.majorCharHeight = a, this._start = e, this._end = t, this.scale = 1, this.minorStepIdx = -1, this.magnitudefactor =
			1, this.determineScale(), this.zeroAlign = r, this.autoScaleStart = o, this.autoScaleEnd = n, this.formattingFunction =
			s, o || n) {
			var d = this,
				l = function(e) {
					var t = e - e % (d.magnitudefactor * d.minorSteps[d.minorStepIdx]);
					return e % (d.magnitudefactor * d.minorSteps[d.minorStepIdx]) > .5 * (d.magnitudefactor * d.minorSteps[d.minorStepIdx]) ?
						t + d.magnitudefactor * d.minorSteps[d.minorStepIdx] : t
				};
			o && (this._start -= 2 * this.magnitudefactor * this.minorSteps[this.minorStepIdx], this._start = l(this._start)),
				n && (this._end += this.magnitudefactor * this.minorSteps[this.minorStepIdx], this._end = l(this._end)), this.determineScale()
		}
	}

	function ut(e, t, o, n) {
		this.id = to.randomUUID(), this.body = e, this.defaultOptions = {
				orientation: "left",
				showMinorLabels: !0,
				showMajorLabels: !0,
				icons: !1,
				majorLinesOffset: 7,
				minorLinesOffset: 4,
				labelOffsetX: 10,
				labelOffsetY: 2,
				iconWidth: 20,
				width: "40px",
				visible: !0,
				alignZeros: !0,
				left: {
					range: {
						min: void 0,
						max: void 0
					},
					format: function(e) {
						return "" + parseFloat(e.toPrecision(3))
					},
					title: {
						text: void 0,
						style: void 0
					}
				},
				right: {
					range: {
						min: void 0,
						max: void 0
					},
					format: function(e) {
						return "" + parseFloat(e.toPrecision(3))
					},
					title: {
						text: void 0,
						style: void 0
					}
				}
			}, this.linegraphOptions = n, this.linegraphSVG = o, this.props = {}, this.DOMelements = {
				lines: {},
				labels: {},
				title: {}
			}, this.dom = {}, this.scale = void 0, this.range = {
				start: 0,
				end: 0
			}, this.options = to.extend({}, this.defaultOptions), this.conversionFactor = 1, this.setOptions(t), this.width = +
			("" + this.options.width).replace("px", ""), this.minWidth = this.width, this.height = this.linegraphSVG.getBoundingClientRect()
			.height, this.hidden = !1, this.stepPixels = 25, this.zeroCrossing = -1, this.amountOfSteps = -1, this.lineOffset =
			0, this.master = !0, this.masterAxis = null, this.svgElements = {}, this.iconsRemoved = !1, this.groups = {}, this.amountOfGroups =
			0, this._create(), this.scale == null && this._redrawLabels(), this.framework = {
				svg: this.svg,
				svgElements: this.svgElements,
				options: this.options,
				groups: this.groups
			};
		var i = this;
		this.body.emitter.on("verticalDrag", function() {
			i.dom.lineContainer.style.top = i.body.domProps.scrollTop + "px"
		})
	}

	function ct() {}

	function ht(e, t) {
		return t = "undefined" == typeof t ? {} : t, {
			style: t.style || e.options.drawPoints.style,
			styles: t.styles || e.options.drawPoints.styles,
			size: t.size || e.options.drawPoints.size,
			className: t.className || e.className
		}
	}

	function gt(e, t) {
		var o;
		return e.options && e.options.drawPoints && e.options.drawPoints.onRender && "function" == typeof e.options.drawPoints
			.onRender && (o = e.options.drawPoints.onRender), t.group.options && t.group.options.drawPoints && t.group.options.drawPoints
			.onRender && "function" == typeof t.group.options.drawPoints.onRender && (o = t.group.options.drawPoints.onRender),
			o
	}

	function ft() {}

	function yt() {}

	function _t(e, t, o, n) {
		this.id = t;
		this.options = Ko.selectiveBridgeObject(["sampling", "style", "sort", "yAxisOrientation", "barChart", "drawPoints",
				"shaded", "interpolation", "zIndex", "excludeFromStacking", "excludeFromLegend"
			], o), this.usingDefaultStyle = e.className === void 0, this.groupsUsingDefaultStyles = n, this.zeroPosition = 0,
			this.update(e), !0 == this.usingDefaultStyle && (this.groupsUsingDefaultStyles[0] += 1), this.itemsData = [], this.visible = !
			(e.visible !== void 0) || e.visible
	}

	function bt(e, t, o, n) {
		this.body = e, this.defaultOptions = {
				enabled: !1,
				icons: !0,
				iconSize: 20,
				iconSpacing: 6,
				left: {
					visible: !0,
					position: "top-left"
				},
				right: {
					visible: !0,
					position: "top-right"
				}
			}, this.side = o, this.options = Ko.extend({}, this.defaultOptions), this.linegraphOptions = n, this.svgElements = {},
			this.dom = {}, this.groups = {}, this.amountOfGroups = 0, this._create(), this.framework = {
				svg: this.svg,
				svgElements: this.svgElements,
				options: this.options,
				groups: this.groups
			}, this.setOptions(t)
	}

	function vt(e, t) {
		this.id = Ko.randomUUID(), this.body = e, this.defaultOptions = {
				yAxisOrientation: "left",
				defaultGroup: "default",
				sort: !0,
				sampling: !0,
				stack: !1,
				graphHeight: "400px",
				shaded: {
					enabled: !1,
					orientation: "bottom"
				},
				style: "line",
				barChart: {
					width: 50,
					sideBySide: !1,
					align: "center"
				},
				interpolation: {
					enabled: !0,
					parametrization: "centripetal",
					alpha: .5
				},
				drawPoints: {
					enabled: !0,
					size: 6,
					style: "square"
				},
				dataAxis: {},
				legend: {},
				groups: {
					visibility: {}
				}
			}, this.options = Ko.extend({}, this.defaultOptions), this.dom = {}, this.props = {}, this.hammer = null, this.groups = {},
			this.abortedGraphUpdate = !1, this.updateSVGheight = !1, this.updateSVGheightOnResize = !1, this.forceGraphUpdate = !
			0;
		var o = this;
		this.itemsData = null, this.groupsData = null, this.itemListeners = {
				add: function(e, t) {
					o._onAdd(t.items)
				},
				update: function(e, t) {
					o._onUpdate(t.items)
				},
				remove: function(e, t) {
					o._onRemove(t.items)
				}
			}, this.groupListeners = {
				add: function(e, t) {
					o._onAddGroups(t.items)
				},
				update: function(e, t) {
					o._onUpdateGroups(t.items)
				},
				remove: function(e, t) {
					o._onRemoveGroups(t.items)
				}
			}, this.items = {}, this.selection = [], this.lastStart = this.body.range.start, this.touchParams = {}, this.svgElements = {},
			this.setOptions(t), this.groupsUsingDefaultStyles = [0], this.body.emitter.on("rangechanged", function() {
				o.lastStart = o.body.range.start, o.svg.style.left = Ko.option.asSize(-o.props.width), o.forceGraphUpdate = !0, o
					.redraw.call(o)
			}), this._create(), this.framework = {
				svg: this.svg,
				svgElements: this.svgElements,
				options: this.options,
				groups: this.groups
			}
	}

	function wt(e, t, o, n) {
		if (!(Array.isArray(o) || o instanceof ea || o instanceof ta) && o instanceof Object) {
			var i = n;
			n = o, o = i
		}
		n && n.throttleRedraw && console.warn(
			"Graph2d option \"throttleRedraw\" is DEPRICATED and no longer supported. It will be removed in the next MAJOR release."
		);
		var a = this;
		this.defaultOptions = {
				start: null,
				end: null,
				autoResize: !0,
				orientation: {
					axis: "bottom",
					item: "bottom"
				},
				moment: Xo,
				width: null,
				height: null,
				maxHeight: null,
				minHeight: null
			}, this.options = Ko.deepExtend({}, this.defaultOptions), this._create(e), this.components = [], this.body = {
				dom: this.dom,
				domProps: this.props,
				emitter: {
					on: this.on.bind(this),
					off: this.off.bind(this),
					emit: this.emit.bind(this)
				},
				hiddenDates: [],
				util: {
					toScreen: a._toScreen.bind(a),
					toGlobalScreen: a._toGlobalScreen.bind(a),
					toTime: a._toTime.bind(a),
					toGlobalTime: a._toGlobalTime.bind(a)
				}
			}, this.range = new hn(this.body), this.components.push(this.range), this.body.range = this.range, this.timeAxis =
			new bi(this.body), this.components.push(this.timeAxis), this.currentTime = new En(this.body), this.components.push(
				this.currentTime), this.linegraph = new Vi(this.body), this.components.push(this.linegraph), this.itemsData = null,
			this.groupsData = null, this.on("tap", function(e) {
				a.emit("click", a.getEventProperties(e))
			}), this.on("doubletap", function(e) {
				a.emit("doubleClick", a.getEventProperties(e))
			}), this.dom.root.oncontextmenu = function(e) {
				a.emit("contextmenu", a.getEventProperties(e))
			}, this.initialFitDone = !1, this.on("changed", function() {
				if (null != a.itemsData) {
					if (!a.initialFitDone && !a.options.rollingMode)
						if (a.initialFitDone = !0, null != a.options.start || null != a.options.end) {
							if (null == a.options.start || null == a.options.end) var e = a.getItemRange();
							var t = null == a.options.start ? e.min : a.options.start,
								o = null == a.options.end ? e.max : a.options.end;
							a.setWindow(t, o, {
								animation: !1
							})
						} else a.fit({
							animation: !1
						});
					a.initialDrawDone || !a.initialRangeChangeDone && (a.options.start || a.options.end) && !a.options.rollingMode ||
						(a.initialDrawDone = !0, a.itemSet.initialDrawDone = !0, a.dom.root.style.visibility = "visible", a.dom.loadingScreen
							.parentNode.removeChild(a.dom.loadingScreen), a.options.onInitialDrawComplete && setTimeout(function() {
								return a.options.onInitialDrawComplete()
							}, 0))
				}
			}), n && this.setOptions(n), o && this.setGroups(o), t && this.setItems(t), this._redraw()
	}
	for (var Et = t, It = o, Rt = n, At = a, Ht = r, Lt = "undefined" == typeof globalThis ? "undefined" == typeof window ?
			"undefined" == typeof global ? "undefined" == typeof self ? {} : self : global : window : globalThis, Nt = d(
				function(e) {
					function t(e) {
						return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
							return typeof e
						} : function(e) {
							return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" :
								typeof e
						}, t(e)
					}

					function o(n) {
						return e.exports = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? o = function(e) {
							return t(e)
						} : o = function(e) {
							return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
						}, o(n)
					}
					e.exports = o
				}), Ft = d(function(e) {
				(function(t, o) {
					e.exports = o()
				})(Lt, function() {
					function t() {
						return qt.apply(null, arguments)
					}

					function o(e) {
						return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
					}

					function n(e) {
						return null != e && "[object Object]" === Object.prototype.toString.call(e)
					}

					function i(e) {
						if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
						for (var t in e)
							if (e.hasOwnProperty(t)) return !1;
						return !0
					}

					function a(e) {
						return void 0 === e
					}

					function r(e) {
						return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
					}

					function d(e) {
						return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
					}

					function l(e, t) {
						var o = [],
							n;
						for (n = 0; n < e.length; ++n) o.push(t(e[n], n));
						return o
					}

					function p(e, t) {
						return Object.prototype.hasOwnProperty.call(e, t)
					}

					function u(e, t) {
						for (var o in t) p(t, o) && (e[o] = t[o]);
						return p(t, "toString") && (e.toString = t.toString), p(t, "valueOf") && (e.valueOf = t.valueOf), e
					}

					function h(e, t, o, n) {
						return Qe(e, t, o, n, !0).utc()
					}

					function g() {
						return {
							empty: !1,
							unusedTokens: [],
							unusedInput: [],
							overflow: -2,
							charsLeftOver: 0,
							nullInput: !1,
							invalidMonth: null,
							invalidFormat: !1,
							userInvalidated: !1,
							iso: !1,
							parsedDateParts: [],
							meridiem: null,
							rfc2822: !1,
							weekdayMismatch: !1
						}
					}

					function f(e) {
						return null == e._pf && (e._pf = g()), e._pf
					}

					function y(e) {
						if (null == e._isValid) {
							var t = f(e),
								o = Zt.call(t.parsedDateParts, function(e) {
									return null != e
								}),
								n = !isNaN(e._d.getTime()) && 0 > t.overflow && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch &&
								!t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && o);
							if (e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour),
								null == Object.isFrozen || !Object.isFrozen(e)) e._isValid = n;
							else return n
						}
						return e._isValid
					}

					function _(e) {
						var t = h(NaN);
						return null == e ? f(t).userInvalidated = !0 : u(f(t), e), t
					}

					function b(e, t) {
						var o, n, r;
						if (a(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), a(t._i) || (e._i = t._i), a(t._f) || (
								e._f = t._f), a(t._l) || (e._l = t._l), a(t._strict) || (e._strict = t._strict), a(t._tzm) || (e._tzm = t._tzm),
							a(t._isUTC) || (e._isUTC = t._isUTC), a(t._offset) || (e._offset = t._offset), a(t._pf) || (e._pf = f(t)), a(
								t._locale) || (e._locale = t._locale), 0 < Xt.length)
							for (o = 0; o < Xt.length; o++) n = Xt[o], r = t[n], a(r) || (e[n] = r);
						return e
					}

					function v(e) {
						b(this, e), this._d = new Date(null == e._d ? NaN : e._d.getTime()), this.isValid() || (this._d = new Date(NaN)),
							!1 === Kt && (Kt = !0, t.updateOffset(this), Kt = !1)
					}

					function w(e) {
						return e instanceof v || null != e && null != e._isAMomentObject
					}

					function k(e) {
						return 0 > e ? Ct(e) || 0 : Mt(e)
					}

					function S(e) {
						var t = +e,
							o = 0;
						return 0 != t && isFinite(t) && (o = k(t)), o
					}

					function D(e, t, o) {
						var n = Yt(e.length, t.length),
							a = Ot(e.length - t.length),
							r = 0,
							s;
						for (s = 0; s < n; s++)(o && e[s] !== t[s] || !o && S(e[s]) !== S(t[s])) && r++;
						return r + a
					}

					function x(e) {
						!1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn(
							"Deprecation warning: " + e)
					}

					function T(e, o) {
						var n = !0;
						return u(function() {
							if (null != t.deprecationHandler && t.deprecationHandler(null, e), n) {
								for (var a = [], r = 0, s; r < arguments.length; r++) {
									if (s = "", "object" == typeof arguments[r]) {
										for (var d in s += "\n[" + r + "] ", arguments[0]) s += d + ": " + arguments[0][d] + ", ";
										s = s.slice(0, -2)
									} else s = arguments[r];
									a.push(s)
								}
								x(e + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + new Error().stack), n = !1
							}
							return o.apply(this, arguments)
						}, o)
					}

					function O(e, o) {
						null != t.deprecationHandler && t.deprecationHandler(e, o), Qt[e] || (x(o), Qt[e] = !0)
					}

					function C(e) {
						return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
					}

					function M(e) {
						var t, o;
						for (o in e) t = e[o], C(t) ? this[o] = t : this["_" + o] = t;
						this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source ||
							this._ordinalParse.source) + "|" + /\d{1,2}/.source)
					}

					function P(e, t) {
						var o = u({}, e),
							i;
						for (i in t) p(t, i) && (n(e[i]) && n(t[i]) ? (o[i] = {}, u(o[i], e[i]), u(o[i], t[i])) : null == t[i] ?
							delete o[i] : o[i] = t[i]);
						for (i in e) p(e, i) && !p(t, i) && n(e[i]) && (o[i] = u({}, o[i]));
						return o
					}

					function Y(e) {
						null != e && this.set(e)
					}

					function E(e, t) {
						var o = e.toLowerCase();
						eo[o] = eo[o + "s"] = eo[t] = e
					}

					function I(e) {
						return "string" == typeof e ? eo[e] || eo[e.toLowerCase()] : void 0
					}

					function R(e) {
						var t = {},
							o, n;
						for (n in e) p(e, n) && (o = I(n), o && (t[o] = e[n]));
						return t
					}

					function A(e, t) {
						to[e] = t
					}

					function H(e) {
						var t = [];
						for (var o in e) t.push({
							unit: o,
							priority: to[o]
						});
						return t.sort(function(e, t) {
							return e.priority - t.priority
						}), t
					}

					function L(e, t, o) {
						var n = "" + Ot(e),
							i = t - n.length;
						return (0 <= e ? o ? "+" : "" : "-") + Tt(10, Pt(0, i)).toString().substr(1) + n
					}

					function N(e, t, o, n) {
						var i = n;
						"string" == typeof n && (i = function() {
							return this[n]()
						}), e && (ao[e] = i), t && (ao[t[0]] = function() {
							return L(i.apply(this, arguments), t[1], t[2])
						}), o && (ao[o] = function() {
							return this.localeData().ordinal(i.apply(this, arguments), e)
						})
					}

					function F(e) {
						return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
					}

					function G(e) {
						var t = e.match(oo),
							o, n;
						for (o = 0, n = t.length; o < n; o++) t[o] = ao[t[o]] ? ao[t[o]] : F(t[o]);
						return function(o) {
							var a = "",
								r;
							for (r = 0; r < n; r++) a += C(t[r]) ? t[r].call(o, e) : t[r];
							return a
						}
					}

					function W(e, t) {
						return e.isValid() ? (t = U(t, e.localeData()), io[t] = io[t] || G(t), io[t](e)) : e.localeData().invalidDate()
					}

					function U(e, t) {
						function o(e) {
							return t.longDateFormat(e) || e
						}
						var n = 5;
						for (no.lastIndex = 0; 0 <= n && no.test(e);) e = e.replace(no, o), no.lastIndex = 0, n -= 1;
						return e
					}

					function j(e, t, o) {
						Do[e] = C(t) ? t : function(e) {
							return e && o ? o : t
						}
					}

					function V(e, t) {
						return p(Do, e) ? Do[e](t._strict, t._locale) : new RegExp(z(e))
					}

					function z(e) {
						return B(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, o, n, i) {
							return t || o || n || i
						}))
					}

					function B(e) {
						return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
					}

					function q(e, t) {
						var o = t,
							n;
						for ("string" == typeof e && (e = [e]), r(t) && (o = function(e, o) {
								o[t] = S(e)
							}), n = 0; n < e.length; n++) xo[e[n]] = o
					}

					function Z(e, t) {
						q(e, function(e, o, n, i) {
							n._w = n._w || {}, t(e, n._w, n, i)
						})
					}

					function X(e, t, o) {
						null != t && p(xo, e) && xo[e](t, o._a, o, e)
					}

					function K(e) {
						return Q(e) ? 366 : 365
					}

					function Q(e) {
						return 0 == e % 4 && 0 != e % 100 || 0 == e % 400
					}

					function $(e, o) {
						return function(n) {
							return null == n ? J(this, e) : (ee(this, e, n), t.updateOffset(this, o), this)
						}
					}

					function J(e, t) {
						return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
					}

					function ee(e, t, o) {
						e.isValid() && !isNaN(o) && ("FullYear" === t && Q(e.year()) && 1 === e.month() && 29 === e.date() ? e._d[
							"set" + (e._isUTC ? "UTC" : "") + t](o, e.month(), ne(o, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") +
							t](o))
					}

					function te(e, t) {
						if ("object" == typeof e) {
							e = R(e);
							for (var o = H(e), n = 0; n < o.length; n++) this[o[n].unit](e[o[n].unit])
						} else if (e = I(e), C(this[e])) return this[e](t);
						return this
					}

					function oe(e, t) {
						return (e % t + t) % t
					}

					function ne(e, t) {
						if (isNaN(e) || isNaN(t)) return NaN;
						var o = oe(t, 12);
						return e += (t - o) / 12, 1 === o ? Q(e) ? 29 : 28 : 31 - o % 7 % 2
					}

					function ie(e, t, o) {
						var n = e.toLocaleLowerCase(),
							a, r, s;
						if (!this._monthsParse)
							for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; 12 > a; ++a) s =
								h([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[
									a] = this.months(s, "").toLocaleLowerCase();
						return o ? "MMM" === t ? (r = Io.call(this._shortMonthsParse, n), -1 === r ? null : r) : (r = Io.call(this._longMonthsParse,
							n), -1 === r ? null : r) : "MMM" === t ? (r = Io.call(this._shortMonthsParse, n), -1 !== r) ? r : (r = Io.call(
							this._longMonthsParse, n), -1 === r ? null : r) : (r = Io.call(this._longMonthsParse, n), -1 !== r) ? r : (r =
							Io.call(this._shortMonthsParse, n), -1 === r ? null : r)
					}

					function ae(e, t, o) {
						var n, a, r;
						if (this._monthsParseExact) return ie.call(this, e, t, o);
						for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n =
							0; 12 > n; n++) {
							if (a = h([2e3, n]), o && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(
									a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(a, "").replace(
									".", "") + "$", "i")), o || this._monthsParse[n] || (r = "^" + this.months(a, "") + "|^" + this.monthsShort(
									a, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), o && "MMMM" === t && this._longMonthsParse[
									n].test(e)) return n;
							if (o && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
							if (!o && this._monthsParse[n].test(e)) return n
						}
					}

					function re(e, t) {
						var o;
						if (!e.isValid()) return e;
						if ("string" == typeof t)
							if (/^\d+$/.test(t)) t = S(t);
							else if (t = e.localeData().monthsParse(t), !r(t)) return e;
						return o = Yt(e.date(), ne(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, o), e
					}

					function se(e) {
						return null == e ? J(this, "Month") : (re(this, e), t.updateOffset(this, !0), this)
					}

					function de() {
						function e(e, t) {
							return t.length - e.length
						}
						var t = [],
							o = [],
							n = [],
							a, r;
						for (a = 0; 12 > a; a++) r = h([2e3, a]), t.push(this.monthsShort(r, "")), o.push(this.months(r, "")), n.push(
							this.months(r, "")), n.push(this.monthsShort(r, ""));
						for (t.sort(e), o.sort(e), n.sort(e), a = 0; 12 > a; a++) t[a] = B(t[a]), o[a] = B(o[a]);
						for (a = 0; 24 > a; a++) n[a] = B(n[a]);
						this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex,
							this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp(
								"^(" + t.join("|") + ")", "i")
					}

					function le(e, t, o, n, i, a, r) {
						var s;
						return 100 > e && 0 <= e ? (s = new Date(e + 400, t, o, n, i, a, r), isFinite(s.getFullYear()) && s.setFullYear(
							e)) : s = new Date(e, t, o, n, i, a, r), s
					}

					function pe(e) {
						var t;
						if (100 > e && 0 <= e) {
							var o = Array.prototype.slice.call(arguments);
							o[0] = e + 400, t = new Date(Date.UTC.apply(null, o)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)
						} else t = new Date(Date.UTC.apply(null, arguments));
						return t
					}

					function me(e, t, o) {
						var n = 7 + t - o,
							i = (7 + pe(e, 0, n).getUTCDay() - t) % 7;
						return -i + n - 1
					}

					function ue(e, t, o, n, i) {
						var a = me(e, n, i),
							r = 1 + 7 * (t - 1) + (7 + o - n) % 7 + a,
							s, d;
						return 0 >= r ? (s = e - 1, d = K(s) + r) : r > K(e) ? (s = e + 1, d = r - K(e)) : (s = e, d = r), {
							year: s,
							dayOfYear: d
						}
					}

					function ce(e, t, o) {
						var n = me(e.year(), t, o),
							i = Mt((e.dayOfYear() - n - 1) / 7) + 1,
							a, r;
						return 1 > i ? (r = e.year() - 1, a = i + he(r, t, o)) : i > he(e.year(), t, o) ? (a = i - he(e.year(), t, o),
							r = e.year() + 1) : (r = e.year(), a = i), {
							week: a,
							year: r
						}
					}

					function he(e, t, o) {
						var n = me(e, t, o),
							i = me(e + 1, t, o);
						return (K(e) - n + i) / 7
					}

					function ge(e, t) {
						return "string" == typeof e ? isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(
							e, 10) : e
					}

					function fe(e, t) {
						return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
					}

					function ye(e, t) {
						return e.slice(t, 7).concat(e.slice(0, t))
					}

					function _e(e, t, o) {
						var n = e.toLocaleLowerCase(),
							a, r, s;
						if (!this._weekdaysParse)
							for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; 7 > a; ++a)
								s = h([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[
									a] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(s, "").toLocaleLowerCase();
						return o ? "dddd" === t ? (r = Io.call(this._weekdaysParse, n), -1 === r ? null : r) : "ddd" === t ? (r = Io.call(
								this._shortWeekdaysParse, n), -1 === r ? null : r) : (r = Io.call(this._minWeekdaysParse, n), -1 === r ?
								null : r) : "dddd" === t ? (r = Io.call(this._weekdaysParse, n), -1 !== r) ? r : (r = Io.call(this._shortWeekdaysParse,
								n), -1 !== r) ? r : (r = Io.call(this._minWeekdaysParse, n), -1 === r ? null : r) : "ddd" === t ? (r = Io.call(
								this._shortWeekdaysParse, n), -1 !== r) ? r : (r = Io.call(this._weekdaysParse, n), -1 !== r) ? r : (r = Io.call(
								this._minWeekdaysParse, n), -1 === r ? null : r) : (r = Io.call(this._minWeekdaysParse, n), -1 !== r) ? r :
							(r = Io.call(this._weekdaysParse, n), -1 !== r) ? r : (r = Io.call(this._shortWeekdaysParse, n), -1 === r ?
								null : r)
					}

					function be(e, t, o) {
						var n, a, r;
						if (this._weekdaysParseExact) return _e.call(this, e, t, o);
						for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [],
								this._fullWeekdaysParse = []), n = 0; 7 > n; n++) {
							if (a = h([2e3, 1]).day(n), o && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" +
									this.weekdays(a, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this
									.weekdaysShort(a, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(
									a, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (r = "^" + this.weekdays(a, "") + "|^" +
									this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[n] = new RegExp(r.replace(
										".", ""), "i")), o && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n;
							if (o && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n;
							if (o && "dd" === t && this._minWeekdaysParse[n].test(e)) return n;
							if (!o && this._weekdaysParse[n].test(e)) return n
						}
					}

					function ve() {
						function e(e, t) {
							return t.length - e.length
						}
						var t = [],
							o = [],
							n = [],
							a = [],
							r, s, d, l, p;
						for (r = 0; 7 > r; r++) s = h([2e3, 1]).day(r), d = this.weekdaysMin(s, ""), l = this.weekdaysShort(s, ""), p =
							this.weekdays(s, ""), t.push(d), o.push(l), n.push(p), a.push(d), a.push(l), a.push(p);
						for (t.sort(e), o.sort(e), n.sort(e), a.sort(e), r = 0; 7 > r; r++) o[r] = B(o[r]), n[r] = B(n[r]), a[r] = B(a[
							r]);
						this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex,
							this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + n.join("|") + ")",
								"i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex =
							new RegExp("^(" + t.join("|") + ")", "i")
					}

					function we() {
						return this.hours() % 12 || 12
					}

					function ke(e, t) {
						N(e, 0, 0, function() {
							return this.localeData().meridiem(this.hours(), this.minutes(), t)
						})
					}

					function Se(e, t) {
						return t._meridiemParse
					}

					function De(e) {
						return e ? e.toLowerCase().replace("_", "-") : e
					}

					function xe(e) {
						for (var t = 0, o, n, a, r; t < e.length;) {
							for (r = De(e[t]).split("-"), o = r.length, n = De(e[t + 1]), n = n ? n.split("-") : null; 0 < o;) {
								if (a = Te(r.slice(0, o).join("-")), a) return a;
								if (n && n.length >= o && D(r, n, !0) >= o - 1) break;
								o--
							}
							t++
						}
						return Ko
					}

					function Te(t) {
						var o = null;
						if (!Go[t] && !0 && e && e.exports) try {
							o = Ko._abbr;
							s("./locale/" + t), Oe(o)
						} catch (t) {}
						return Go[t]
					}

					function Oe(e, t) {
						var o;
						return e && (o = a(t) ? Me(e) : Ce(e, t), o ? Ko = o : "undefined" != typeof console && console.warn &&
							console.warn("Locale " + e + " not found. Did you forget to load it?")), Ko._abbr
					}

					function Ce(e, t) {
						if (null !== t) {
							var o = Fo,
								n;
							if (t.abbr = e, null != Go[e]) O("defineLocaleOverride",
								"use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
							), o = Go[e]._config;
							else if (null != t.parentLocale)
								if (null != Go[t.parentLocale]) o = Go[t.parentLocale]._config;
								else if (n = Te(t.parentLocale), null != n) o = n._config;
							else return Wo[t.parentLocale] || (Wo[t.parentLocale] = []), Wo[t.parentLocale].push({
								name: e,
								config: t
							}), null;
							return Go[e] = new Y(P(o, t)), Wo[e] && Wo[e].forEach(function(e) {
								Ce(e.name, e.config)
							}), Oe(e), Go[e]
						}
						return delete Go[e], null
					}

					function Me(e) {
						var t;
						if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Ko;
						if (!o(e)) {
							if (t = Te(e), t) return t;
							e = [e]
						}
						return xe(e)
					}

					function Pe() {
						return $t(Go)
					}

					function Ye(e) {
						var t = e._a,
							o;
						return t && -2 === f(e).overflow && (o = 0 > t[1] || 11 < t[1] ? 1 : 1 > t[2] || t[2] > ne(t[0], t[1]) ? 2 : 0 >
							t[3] || 24 < t[3] || 24 === t[3] && (0 !== t[4] || 0 !== t[5] || 0 !== t[6]) ? 3 : 0 > t[4] || 59 < t[4] ? 4 :
							0 > t[5] || 59 < t[5] ? 5 : 0 > t[6] || 999 < t[6] ? 6 : -1, f(e)._overflowDayOfYear && (0 > o || 2 < o) &&
							(o = 2), f(e)._overflowWeeks && -1 === o && (o = 7), f(e)._overflowWeekday && -1 === o && (o = 8), f(e).overflow =
							o), e
					}

					function Ee(e, t, o) {
						return null == e ? null == t ? o : t : e
					}

					function Ie(e) {
						var o = new Date(t.now());
						return e._useUTC ? [o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()] : [o.getFullYear(), o.getMonth(), o.getDate()]
					}

					function Re(e) {
						var t = [],
							o, n, a, r, s;
						if (!e._d) {
							for (a = Ie(e), e._w && null == e._a[2] && null == e._a[1] && Ae(e), null != e._dayOfYear && (s = Ee(e._a[0],
										a[0]), (e._dayOfYear > K(s) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0), n = pe(s, 0, e._dayOfYear),
									e._a[1] = n.getUTCMonth(), e._a[2] = n.getUTCDate()), o = 0; 3 > o && null == e._a[o]; ++o) e._a[o] = t[o] =
								a[o];
							for (; 7 > o; o++) e._a[o] = t[o] = null == e._a[o] ? 2 === o ? 1 : 0 : e._a[o];
							24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && (e._nextDay = !0, e._a[3] = 0), e._d = (
									e._useUTC ? pe : le).apply(null, t), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d
								.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[3] = 24), e._w && "undefined" != typeof e
								._w.d && e._w.d !== r && (f(e).weekdayMismatch = !0)
						}
					}

					function Ae(e) {
						var t, o, n, i, a, r, s, d;
						if (t = e._w, null != t.GG || null != t.W || null != t.E) a = 1, r = 4, o = Ee(t.GG, e._a[0], ce($e(), 1, 4).year),
							n = Ee(t.W, 1), i = Ee(t.E, 1), (1 > i || 7 < i) && (d = !0);
						else {
							a = e._locale._week.dow, r = e._locale._week.doy;
							var l = ce($e(), a, r);
							o = Ee(t.gg, e._a[0], l.year), n = Ee(t.w, l.week), null == t.d ? null == t.e ? i = a : (i = t.e + a, (0 > t.e ||
								6 < t.e) && (d = !0)) : (i = t.d, (0 > i || 6 < i) && (d = !0))
						}
						1 > n || n > he(o, a, r) ? f(e)._overflowWeeks = !0 : null == d ? (s = ue(o, n, i, a, r), e._a[0] = s.year, e._dayOfYear =
							s.dayOfYear) : f(e)._overflowWeekday = !0
					}

					function He(e) {
						var t = e._i,
							o = Uo.exec(t) || jo.exec(t),
							n, a, r, s, d, p;
						if (o) {
							for (f(e).iso = !0, n = 0, a = zo.length; n < a; n++)
								if (zo[n][1].exec(o[1])) {
									s = zo[n][0], r = !1 !== zo[n][2];
									break
								} if (null == s) return void(e._isValid = !1);
							if (o[3]) {
								for (n = 0, a = Bo.length; n < a; n++)
									if (Bo[n][1].exec(o[3])) {
										d = (o[2] || " ") + Bo[n][0];
										break
									} if (null == d) return void(e._isValid = !1)
							}
							if (!r && null != d) return void(e._isValid = !1);
							if (o[4])
								if (Vo.exec(o[4])) p = "Z";
								else return void(e._isValid = !1);
							e._f = s + (d || "") + (p || ""), Ve(e)
						} else e._isValid = !1
					}

					function Le(e, t, o, n, i, a) {
						var r = [Ne(e), Ao.indexOf(t), parseInt(o, 10), parseInt(n, 10), parseInt(i, 10)];
						return a && r.push(parseInt(a, 10)), r
					}

					function Ne(e) {
						var t = parseInt(e, 10);
						return 49 >= t ? 2e3 + t : 999 >= t ? 1900 + t : t
					}

					function Fe(e) {
						return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
					}

					function Ge(e, t, o) {
						if (e) {
							var n = Ho.indexOf(e),
								i = new Date(t[0], t[1], t[2]).getDay();
							if (n !== i) return f(o).weekdayMismatch = !0, o._isValid = !1, !1
						}
						return !0
					}

					function We(e, t, o) {
						if (e) return Xo[e];
						if (t) return 0;
						var n = parseInt(o, 10),
							i = n % 100;
						return 60 * ((n - i) / 100) + i
					}

					function Ue(e) {
						var t = Zo.exec(Fe(e._i));
						if (t) {
							var o = Le(t[4], t[3], t[2], t[5], t[6], t[7]);
							if (!Ge(t[1], o, e)) return;
							e._a = o, e._tzm = We(t[8], t[9], t[10]), e._d = pe.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() -
								e._tzm), f(e).rfc2822 = !0
						} else e._isValid = !1
					}

					function je(e) {
						var o = qo.exec(e._i);
						if (null !== o) return void(e._d = new Date(+o[1]));
						if (He(e), !1 === e._isValid) delete e._isValid;
						else return;
						if (Ue(e), !1 === e._isValid) delete e._isValid;
						else return;
						t.createFromInputFallback(e)
					}

					function Ve(e) {
						if (e._f === t.ISO_8601) return void He(e);
						if (e._f === t.RFC_2822) return void Ue(e);
						e._a = [], f(e).empty = !0;
						var o = "" + e._i,
							n = o.length,
							a = 0,
							r, s, d, l, p;
						for (d = U(e._f, e._locale).match(oo) || [], r = 0; r < d.length; r++) l = d[r], s = (o.match(V(l, e)) || [])[
								0], s && (p = o.substr(0, o.indexOf(s)), 0 < p.length && f(e).unusedInput.push(p), o = o.slice(o.indexOf(s) +
								s.length), a += s.length), ao[l] ? (s ? f(e).empty = !1 : f(e).unusedTokens.push(l), X(l, s, e)) : e._strict &&
							!s && f(e).unusedTokens.push(l);
						f(e).charsLeftOver = n - a, 0 < o.length && f(e).unusedInput.push(o), 12 >= e._a[3] && !0 === f(e).bigHour &&
							0 < e._a[3] && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[
								3] = ze(e._locale, e._a[3], e._meridiem), Re(e), Ye(e)
					}

					function ze(e, t, o) {
						var n;
						return null == o ? t : null == e.meridiemHour ? null == e.isPM ? t : (n = e.isPM(o), n && 12 > t && (t += 12),
							n || 12 !== t || (t = 0), t) : e.meridiemHour(t, o)
					}

					function Be(e) {
						var t, o, n, a, r;
						if (0 === e._f.length) return f(e).invalidFormat = !0, void(e._d = new Date(NaN));
						for (a = 0; a < e._f.length; a++)(r = 0, t = b({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[
							a], Ve(t), !!y(t)) && (r += f(t).charsLeftOver, r += 10 * f(t).unusedTokens.length, f(t).score = r, (null ==
							n || r < n) && (n = r, o = t));
						u(e, o || t)
					}

					function qe(e) {
						if (!e._d) {
							var t = R(e._i);
							e._a = l([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
								return e && parseInt(e, 10)
							}), Re(e)
						}
					}

					function Ze(e) {
						var t = new v(Ye(Xe(e)));
						return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
					}

					function Xe(e) {
						var t = e._i,
							n = e._f;
						return (e._locale = e._locale || Me(e._l), null === t || void 0 === n && "" === t) ? _({
							nullInput: !0
						}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), w(t)) ? new v(Ye(t)) : (d(t) ? e._d = t : o(
							n) ? Be(e) : n ? Ve(e) : Ke(e), y(e) || (e._d = null), e)
					}

					function Ke(e) {
						var i = e._i;
						a(i) ? e._d = new Date(t.now()) : d(i) ? e._d = new Date(i.valueOf()) : "string" == typeof i ? je(e) : o(i) ?
							(e._a = l(i.slice(0), function(e) {
								return parseInt(e, 10)
							}), Re(e)) : n(i) ? qe(e) : r(i) ? e._d = new Date(i) : t.createFromInputFallback(e)
					}

					function Qe(e, t, a, r, s) {
						var d = {};
						return (!0 === a || !1 === a) && (r = a, a = void 0), (n(e) && i(e) || o(e) && 0 === e.length) && (e = void 0),
							d._isAMomentObject = !0, d._useUTC = d._isUTC = s, d._l = a, d._i = e, d._f = t, d._strict = r, Ze(d)
					}

					function $e(e, t, o, n) {
						return Qe(e, t, o, n, !1)
					}

					function Je(e, t) {
						var n, a;
						if (1 === t.length && o(t[0]) && (t = t[0]), !t.length) return $e();
						for (n = t[0], a = 1; a < t.length; ++a)(!t[a].isValid() || t[a][e](n)) && (n = t[a]);
						return n
					}

					function et(e) {
						for (var t in e)
							if (-1 === Io.call(Jo, t) || null != e[t] && isNaN(e[t])) return !1;
						for (var o = !1, n = 0; n < Jo.length; ++n)
							if (e[Jo[n]]) {
								if (o) return !1;
								parseFloat(e[Jo[n]]) !== S(e[Jo[n]]) && (o = !0)
							} return !0
					}

					function tt(e) {
						var t = R(e),
							o = t.year || 0,
							n = t.quarter || 0,
							i = t.month || 0,
							a = t.week || t.isoWeek || 0,
							r = t.day || 0,
							s = t.hour || 0,
							d = t.minute || 0,
							l = t.second || 0,
							p = t.millisecond || 0;
						this._isValid = et(t), this._milliseconds = +p + 1e3 * l + 6e4 * d + 60 * (60 * (1e3 * s)), this._days = +r +
							7 * a, this._months = +i + 3 * n + 12 * o, this._data = {}, this._locale = Me(), this._bubble()
					}

					function ot(e) {
						return e instanceof tt
					}

					function nt(e) {
						return 0 > e ? -1 * xt(-1 * e) : xt(e)
					}

					function it(e, t) {
						N(e, 0, 0, function() {
							var e = this.utcOffset(),
								o = "+";
							return 0 > e && (e = -e, o = "-"), o + L(~~(e / 60), 2) + t + L(~~e % 60, 2)
						})
					}

					function at(e, t) {
						var o = (t || "").match(e);
						if (null === o) return null;
						var n = o[o.length - 1] || [],
							i = (n + "").match(en) || ["-", 0, 0],
							a = +(60 * i[1]) + S(i[2]);
						return 0 === a ? 0 : "+" === i[0] ? a : -a
					}

					function rt(e, o) {
						var n, i;
						return o._isUTC ? (n = o.clone(), i = (w(e) || d(e) ? e.valueOf() : $e(e).valueOf()) - n.valueOf(), n._d.setTime(
							n._d.valueOf() + i), t.updateOffset(n, !1), n) : $e(e).local()
					}

					function st(e) {
						return 15 * -xt(e._d.getTimezoneOffset() / 15)
					}

					function dt() {
						return !!this.isValid() && this._isUTC && 0 === this._offset
					}

					function lt(e, t) {
						var o = e,
							n = null,
							i, a, s;
						return ot(e) ? o = {
								ms: e._milliseconds,
								d: e._days,
								M: e._months
							} : r(e) ? (o = {}, t ? o[t] = e : o.milliseconds = e) : (n = tn.exec(e)) ? (i = "-" === n[1] ? -1 : 1, o = {
								y: 0,
								d: S(n[2]) * i,
								h: S(n[3]) * i,
								m: S(n[4]) * i,
								s: S(n[5]) * i,
								ms: S(nt(1e3 * n[6])) * i
							}) : (n = on.exec(e)) ? (i = "-" === n[1] ? -1 : 1, o = {
								y: pt(n[2], i),
								M: pt(n[3], i),
								w: pt(n[4], i),
								d: pt(n[5], i),
								h: pt(n[6], i),
								m: pt(n[7], i),
								s: pt(n[8], i)
							}) : null == o ? o = {} : "object" == typeof o && (("from" in o) || ("to" in o)) && (s = ut($e(o.from), $e(o.to)),
								o = {}, o.ms = s.milliseconds, o.M = s.months), a = new tt(o), ot(e) && p(e, "_locale") && (a._locale = e._locale),
							a
					}

					function pt(e, t) {
						var o = e && parseFloat(e.replace(",", "."));
						return (isNaN(o) ? 0 : o) * t
					}

					function mt(e, t) {
						var o = {};
						return o.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(o.months, "M").isAfter(t) &&
							--o.months, o.milliseconds = +t - +e.clone().add(o.months, "M"), o
					}

					function ut(e, t) {
						var o;
						return e.isValid() && t.isValid() ? (t = rt(t, e), e.isBefore(t) ? o = mt(e, t) : (o = mt(t, e), o.milliseconds = -
							o.milliseconds, o.months = -o.months), o) : {
							milliseconds: 0,
							months: 0
						}
					}

					function ct(e, t) {
						return function(o, n) {
							var i, a;
							return null === n || isNaN(+n) || (O(t, "moment()." + t +
									"(period, number) is deprecated. Please use moment()." + t +
									"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = o,
								o = n, n = a), o = "string" == typeof o ? +o : o, i = lt(o, n), ht(this, i, e), this
						}
					}

					function ht(e, o, n, i) {
						var a = o._milliseconds,
							r = nt(o._days),
							s = nt(o._months);
						e.isValid() && (i = null == i || i, s && re(e, J(e, "Month") + s * n), r && ee(e, "Date", J(e, "Date") + r * n),
							a && e._d.setTime(e._d.valueOf() + a * n), i && t.updateOffset(e, r || s))
					}

					function gt(e, t) {
						var o = 12 * (t.year() - e.year()) + (t.month() - e.month()),
							n = e.clone().add(o, "months"),
							i, a;
						return 0 > t - n ? (i = e.clone().add(o - 1, "months"), a = (t - n) / (n - i)) : (i = e.clone().add(o + 1,
							"months"), a = (t - n) / (i - n)), -(o + a) || 0
					}

					function ft(e) {
						var t;
						return void 0 === e ? this._locale._abbr : (t = Me(e), null != t && (this._locale = t), this)
					}

					function yt() {
						return this._locale
					}

					function _t(e, t) {
						return (e % t + t) % t
					}

					function bt(e, t, o) {
						return 100 > e && 0 <= e ? new Date(e + 400, t, o) - 12622780800000 : new Date(e, t, o).valueOf()
					}

					function vt(e, t, o) {
						return 100 > e && 0 <= e ? Date.UTC(e + 400, t, o) - 12622780800000 : Date.UTC(e, t, o)
					}

					function wt(e, t) {
						N(0, [e, e.length], 0, t)
					}

					function kt(e, t, o, n, i) {
						var a;
						return null == e ? ce(this, n, i).year : (a = he(e, n, i), t > a && (t = a), St.call(this, e, t, o, n, i))
					}

					function St(e, t, o, n, i) {
						var a = ue(e, t, o, n, i),
							r = pe(a.year, 0, a.dayOfYear);
						return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
					}

					function Dt(e, t) {
						t[6] = S(1e3 * ("0." + e))
					}

					function Et(e) {
						return e
					}

					function It(e, t, o, n) {
						var i = Me(),
							a = h().set(n, t);
						return i[o](a, e)
					}

					function Rt(e, t, o) {
						if (r(e) && (t = e, e = void 0), e = e || "", null != t) return It(e, t, o, "month");
						var n = [],
							a;
						for (a = 0; 12 > a; a++) n[a] = It(e, a, o, "month");
						return n
					}

					function At(e, t, o, n) {
						"boolean" == typeof e ? (r(t) && (o = t, t = void 0), t = t || "") : (t = e, o = t, e = !1, r(t) && (o = t, t =
							void 0), t = t || "");
						var a = Me(),
							s = e ? a._week.dow : 0;
						if (null != o) return It(t, (o + s) % 7, n, "day");
						var d = [],
							l;
						for (l = 0; 7 > l; l++) d[l] = It(t, (l + s) % 7, n, "day");
						return d
					}

					function Ht(e, t, o, n) {
						var i = lt(t, o);
						return e._milliseconds += n * i._milliseconds, e._days += n * i._days, e._months += n * i._months, e._bubble()
					}

					function Lt(e) {
						return 0 > e ? Mt(e) : Ct(e)
					}

					function Nt(e) {
						return 4800 * e / 146097
					}

					function Ft(e) {
						return 146097 * e / 4800
					}

					function Gt(e) {
						return function() {
							return this.as(e)
						}
					}

					function Wt(e) {
						return function() {
							return this.isValid() ? this._data[e] : NaN
						}
					}

					function Ut(e, t, o, n, i) {
						return i.relativeTime(t || 1, !!o, e, n)
					}

					function jt(e, t, o) {
						var n = lt(e).abs(),
							i = Yn(n.as("s")),
							r = Yn(n.as("m")),
							s = Yn(n.as("h")),
							d = Yn(n.as("d")),
							l = Yn(n.as("M")),
							p = Yn(n.as("y")),
							m = i <= En.ss && ["s", i] || i < En.s && ["ss", i] || 1 >= r && ["m"] || r < En.m && ["mm", r] || 1 >= s &&
							["h"] || s < En.h && ["hh", s] || 1 >= d && ["d"] || d < En.d && ["dd", d] || 1 >= l && ["M"] || l < En.M &&
							["MM", l] || 1 >= p && ["y"] || ["yy", p];
						return m[2] = t, m[3] = 0 < +e, m[4] = o, Ut.apply(null, m)
					}

					function Vt(e) {
						return void 0 === e ? Yn : "function" == typeof e && (Yn = e, !0)
					}

					function zt(e) {
						return (0 < e) - (0 > e) || +e
					}

					function Bt() {
						if (!this.isValid()) return this.localeData().invalidDate();
						var e = In(this._milliseconds) / 1e3,
							t = In(this._days),
							o = In(this._months),
							n, i, a;
						n = k(e / 60), i = k(n / 60), e %= 60, n %= 60, a = k(o / 12), o %= 12;
						var r = a,
							d = o,
							l = t,
							p = i,
							u = n,
							m = e ? e.toFixed(3).replace(/\.?0+$/, "") : "",
							s = this.asSeconds();
						if (!s) return "P0D";
						var c = 0 > s ? "-" : "",
							h = zt(this._months) === zt(s) ? "" : "-",
							g = zt(this._days) === zt(s) ? "" : "-",
							f = zt(this._milliseconds) === zt(s) ? "" : "-";
						return c + "P" + (r ? h + r + "Y" : "") + (d ? h + d + "M" : "") + (l ? g + l + "D" : "") + (p || u || m ? "T" :
							"") + (p ? f + p + "H" : "") + (u ? f + u + "M" : "") + (m ? f + m + "S" : "")
					}
					var qt, Zt;
					Zt = Array.prototype.some ? Array.prototype.some : function(e) {
						for (var o = Object(this), t = o.length >>> 0, n = 0; n < t; n++)
							if ((n in o) && e.call(this, o[n], n, o)) return !0;
						return !1
					};
					var Xt = t.momentProperties = [],
						Kt = !1,
						Qt = {};
					t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
					var $t = Object.keys ? Object.keys : function(e) {
						var t = [],
							o;
						for (o in e) p(e, o) && t.push(o);
						return t
					};
					var Jt = /\d{1,2}/,
						eo = {},
						to = {},
						oo =
						/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
						no = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
						io = {},
						ao = {},
						ro = /\d/,
						so = /\d\d/,
						lo = /\d{3}/,
						po = /\d{4}/,
						mo = /[+-]?\d{6}/,
						uo = /\d\d?/,
						co = /\d\d\d\d?/,
						ho = /\d\d\d\d\d\d?/,
						go = /\d{1,3}/,
						fo = /\d{1,4}/,
						yo = /[+-]?\d{1,6}/,
						_o = /\d+/,
						bo = /[+-]?\d+/,
						vo = /Z|[+-]\d\d:?\d\d/gi,
						wo = /Z|[+-]\d\d(?::?\d\d)?/gi,
						ko = /[+-]?\d+(\.\d{1,3})?/,
						So =
						/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
						Do = {},
						xo = {},
						To = 0,
						Oo = 1,
						Co = 2,
						Mo = 3,
						Po = 4,
						Yo = 5;
					N("Y", 0, 0, function() {
							var e = this.year();
							return 9999 >= e ? "" + e : "+" + e
						}), N(0, ["YY", 2], 0, function() {
							return this.year() % 100
						}), N(0, ["YYYY", 4], 0, "year"), N(0, ["YYYYY", 5], 0, "year"), N(0, ["YYYYYY", 6, !0], 0, "year"), E("year",
							"y"), A("year", 1), j("Y", bo), j("YY", uo, so), j("YYYY", fo, po), j("YYYYY", yo, mo), j("YYYYYY", yo, mo),
						q(["YYYYY", "YYYYYY"], To), q("YYYY", function(e, o) {
							o[To] = 2 === e.length ? t.parseTwoDigitYear(e) : S(e)
						}), q("YY", function(e, o) {
							o[To] = t.parseTwoDigitYear(e)
						}), q("Y", function(e, t) {
							t[To] = parseInt(e, 10)
						}), t.parseTwoDigitYear = function(e) {
							return S(e) + (68 < S(e) ? 1900 : 2e3)
						};
					var Eo = $("FullYear", !0),
						Io;
					Io = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
						var t;
						for (t = 0; t < this.length; ++t)
							if (this[t] === e) return t;
						return -1
					}, N("M", ["MM", 2], "Mo", function() {
						return this.month() + 1
					}), N("MMM", 0, 0, function(e) {
						return this.localeData().monthsShort(this, e)
					}), N("MMMM", 0, 0, function(e) {
						return this.localeData().months(this, e)
					}), E("month", "M"), A("month", 8), j("M", uo), j("MM", uo, so), j("MMM", function(e, t) {
						return t.monthsShortRegex(e)
					}), j("MMMM", function(e, t) {
						return t.monthsRegex(e)
					}), q(["M", "MM"], function(e, t) {
						t[Oo] = S(e) - 1
					}), q(["MMM", "MMMM"], function(e, t, o, n) {
						var i = o._locale.monthsParse(e, n, o._strict);
						null == i ? f(o).invalidMonth = e : t[Oo] = i
					});
					var Ro = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
						Ao = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
					N("w", ["ww", 2], "wo", "week"), N("W", ["WW", 2], "Wo", "isoWeek"), E("week", "w"), E("isoWeek", "W"), A(
						"week", 5), A("isoWeek", 5), j("w", uo), j("ww", uo, so), j("W", uo), j("WW", uo, so), Z(["w", "ww", "W",
						"WW"
					], function(e, t, o, n) {
						t[n.substr(0, 1)] = S(e)
					});
					N("d", 0, "do", "day"), N("dd", 0, 0, function(e) {
							return this.localeData().weekdaysMin(this, e)
						}), N("ddd", 0, 0, function(e) {
							return this.localeData().weekdaysShort(this, e)
						}), N("dddd", 0, 0, function(e) {
							return this.localeData().weekdays(this, e)
						}), N("e", 0, 0, "weekday"), N("E", 0, 0, "isoWeekday"), E("day", "d"), E("weekday", "e"), E("isoWeekday", "E"),
						A("day", 11), A("weekday", 11), A("isoWeekday", 11), j("d", uo), j("e", uo), j("E", uo), j("dd", function(e, t) {
							return t.weekdaysMinRegex(e)
						}), j("ddd", function(e, t) {
							return t.weekdaysShortRegex(e)
						}), j("dddd", function(e, t) {
							return t.weekdaysRegex(e)
						}), Z(["dd", "ddd", "dddd"], function(e, t, o, n) {
							var i = o._locale.weekdaysParse(e, n, o._strict);
							null == i ? f(o).invalidWeekday = e : t.d = i
						}), Z(["d", "e", "E"], function(e, t, o, n) {
							t[n] = S(e)
						});
					var Ho = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
					N("H", ["HH", 2], 0, "hour"), N("h", ["hh", 2], 0, we), N("k", ["kk", 2], 0, function() {
						return this.hours() || 24
					}), N("hmm", 0, 0, function() {
						return "" + we.apply(this) + L(this.minutes(), 2)
					}), N("hmmss", 0, 0, function() {
						return "" + we.apply(this) + L(this.minutes(), 2) + L(this.seconds(), 2)
					}), N("Hmm", 0, 0, function() {
						return "" + this.hours() + L(this.minutes(), 2)
					}), N("Hmmss", 0, 0, function() {
						return "" + this.hours() + L(this.minutes(), 2) + L(this.seconds(), 2)
					}), ke("a", !0), ke("A", !1), E("hour", "h"), A("hour", 13), j("a", Se), j("A", Se), j("H", uo), j("h", uo), j(
						"k", uo), j("HH", uo, so), j("hh", uo, so), j("kk", uo, so), j("hmm", co), j("hmmss", ho), j("Hmm", co), j(
						"Hmmss", ho), q(["H", "HH"], Mo), q(["k", "kk"], function(e, t) {
						var o = S(e);
						t[Mo] = 24 === o ? 0 : o
					}), q(["a", "A"], function(e, t, o) {
						o._isPm = o._locale.isPM(e), o._meridiem = e
					}), q(["h", "hh"], function(e, t, o) {
						t[Mo] = S(e), f(o).bigHour = !0
					}), q("hmm", function(e, t, o) {
						var n = e.length - 2;
						t[Mo] = S(e.substr(0, n)), t[Po] = S(e.substr(n)), f(o).bigHour = !0
					}), q("hmmss", function(e, t, o) {
						var n = e.length - 4,
							i = e.length - 2;
						t[Mo] = S(e.substr(0, n)), t[Po] = S(e.substr(n, 2)), t[Yo] = S(e.substr(i)), f(o).bigHour = !0
					}), q("Hmm", function(e, t) {
						var o = e.length - 2;
						t[Mo] = S(e.substr(0, o)), t[Po] = S(e.substr(o))
					}), q("Hmmss", function(e, t) {
						var o = e.length - 4,
							n = e.length - 2;
						t[Mo] = S(e.substr(0, o)), t[Po] = S(e.substr(o, 2)), t[Yo] = S(e.substr(n))
					});
					var Lo = /[ap]\.?m?\.?/i,
						No = $("Hours", !0),
						Fo = {
							calendar: {
								sameDay: "[Today at] LT",
								nextDay: "[Tomorrow at] LT",
								nextWeek: "dddd [at] LT",
								lastDay: "[Yesterday at] LT",
								lastWeek: "[Last] dddd [at] LT",
								sameElse: "L"
							},
							longDateFormat: {
								LTS: "h:mm:ss A",
								LT: "h:mm A",
								L: "MM/DD/YYYY",
								LL: "MMMM D, YYYY",
								LLL: "MMMM D, YYYY h:mm A",
								LLLL: "dddd, MMMM D, YYYY h:mm A"
							},
							invalidDate: "Invalid date",
							ordinal: "%d",
							dayOfMonthOrdinalParse: Jt,
							relativeTime: {
								future: "in %s",
								past: "%s ago",
								s: "a few seconds",
								ss: "%d seconds",
								m: "a minute",
								mm: "%d minutes",
								h: "an hour",
								hh: "%d hours",
								d: "a day",
								dd: "%d days",
								M: "a month",
								MM: "%d months",
								y: "a year",
								yy: "%d years"
							},
							months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
								"November", "December"
							],
							monthsShort: Ao,
							week: {
								dow: 0,
								doy: 6
							},
							weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
							weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
							weekdaysShort: Ho,
							meridiemParse: Lo
						},
						Go = {},
						Wo = {},
						Uo =
						/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
						jo =
						/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
						Vo = /Z|[+-]\d\d(?::?\d\d)?/,
						zo = [
							["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
							["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
							["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
							["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
							["YYYY-DDD", /\d{4}-\d{3}/],
							["YYYY-MM", /\d{4}-\d\d/, !1],
							["YYYYYYMMDD", /[+-]\d{10}/],
							["YYYYMMDD", /\d{8}/],
							["GGGG[W]WWE", /\d{4}W\d{3}/],
							["GGGG[W]WW", /\d{4}W\d{2}/, !1],
							["YYYYDDD", /\d{7}/]
						],
						Bo = [
							["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
							["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
							["HH:mm:ss", /\d\d:\d\d:\d\d/],
							["HH:mm", /\d\d:\d\d/],
							["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
							["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
							["HHmmss", /\d\d\d\d\d\d/],
							["HHmm", /\d\d\d\d/],
							["HH", /\d\d/]
						],
						qo = /^\/?Date\((\-?\d+)/i,
						Zo =
						/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
						Xo = {
							UT: 0,
							GMT: 0,
							EDT: -240,
							EST: -300,
							CDT: -300,
							CST: -360,
							MDT: -360,
							MST: -420,
							PDT: -420,
							PST: -480
						},
						Ko;
					t.createFromInputFallback = T(
						"value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
						function(e) {
							e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
						}), t.ISO_8601 = function() {}, t.RFC_2822 = function() {};
					var Qo = T("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
							function() {
								var e = $e.apply(null, arguments);
								return this.isValid() && e.isValid() ? e < this ? this : e : _()
							}),
						$o = T("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
							function() {
								var e = $e.apply(null, arguments);
								return this.isValid() && e.isValid() ? e > this ? this : e : _()
							}),
						Jo = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
					it("Z", ":"), it("ZZ", ""), j("Z", wo), j("ZZ", wo), q(["Z", "ZZ"], function(e, t, o) {
						o._useUTC = !0, o._tzm = at(wo, e)
					});
					var en = /([\+\-]|\d\d)/gi;
					t.updateOffset = function() {};
					var tn = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
						on =
						/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
					lt.fn = tt.prototype, lt.invalid = function() {
						return lt(NaN)
					};
					var nn = ct(1, "add"),
						an = ct(-1, "subtract");
					t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
					var rn = T(
						"moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
						function(e) {
							return void 0 === e ? this.localeData() : this.locale(e)
						});
					N(0, ["gg", 2], 0, function() {
							return this.weekYear() % 100
						}), N(0, ["GG", 2], 0, function() {
							return this.isoWeekYear() % 100
						}), wt("gggg", "weekYear"), wt("ggggg", "weekYear"), wt("GGGG", "isoWeekYear"), wt("GGGGG", "isoWeekYear"), E(
							"weekYear", "gg"), E("isoWeekYear", "GG"), A("weekYear", 1), A("isoWeekYear", 1), j("G", bo), j("g", bo), j(
							"GG", uo, so), j("gg", uo, so), j("GGGG", fo, po), j("gggg", fo, po), j("GGGGG", yo, mo), j("ggggg", yo, mo),
						Z(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, o, n) {
							t[n.substr(0, 2)] = S(e)
						}), Z(["gg", "GG"], function(e, o, n, i) {
							o[i] = t.parseTwoDigitYear(e)
						}), N("Q", 0, "Qo", "quarter"), E("quarter", "Q"), A("quarter", 7), j("Q", ro), q("Q", function(e, t) {
							t[Oo] = 3 * (S(e) - 1)
						}), N("D", ["DD", 2], "Do", "date"), E("date", "D"), A("date", 9), j("D", uo), j("DD", uo, so), j("Do",
							function(e, t) {
								return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
							}), q(["D", "DD"], Co), q("Do", function(e, t) {
							t[Co] = S(e.match(uo)[0])
						});
					var sn = $("Date", !0);
					N("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), E("dayOfYear", "DDD"), A("dayOfYear", 4), j("DDD", go), j("DDDD",
						lo), q(["DDD", "DDDD"], function(e, t, o) {
						o._dayOfYear = S(e)
					}), N("m", ["mm", 2], 0, "minute"), E("minute", "m"), A("minute", 14), j("m", uo), j("mm", uo, so), q(["m",
						"mm"
					], Po);
					var dn = $("Minutes", !1);
					N("s", ["ss", 2], 0, "second"), E("second", "s"), A("second", 15), j("s", uo), j("ss", uo, so), q(["s", "ss"],
						Yo);
					var ln = $("Seconds", !1);
					N("S", 0, 0, function() {
						return ~~(this.millisecond() / 100)
					}), N(0, ["SS", 2], 0, function() {
						return ~~(this.millisecond() / 10)
					}), N(0, ["SSS", 3], 0, "millisecond"), N(0, ["SSSS", 4], 0, function() {
						return 10 * this.millisecond()
					}), N(0, ["SSSSS", 5], 0, function() {
						return 100 * this.millisecond()
					}), N(0, ["SSSSSS", 6], 0, function() {
						return 1e3 * this.millisecond()
					}), N(0, ["SSSSSSS", 7], 0, function() {
						return 1e4 * this.millisecond()
					}), N(0, ["SSSSSSSS", 8], 0, function() {
						return 1e5 * this.millisecond()
					}), N(0, ["SSSSSSSSS", 9], 0, function() {
						return 1e6 * this.millisecond()
					}), E("millisecond", "ms"), A("millisecond", 16), j("S", go, ro), j("SS", go, so), j("SSS", go, lo);
					var pn;
					for (pn = "SSSS"; 9 >= pn.length; pn += "S") j(pn, _o);
					for (pn = "S"; 9 >= pn.length; pn += "S") q(pn, Dt);
					var mn = $("Milliseconds", !1);
					N("z", 0, 0, "zoneAbbr"), N("zz", 0, 0, "zoneName");
					var un = v.prototype;
					un.add = nn, un.calendar = function(e, o) {
							var n = e || $e(),
								i = rt(n, this).startOf("day"),
								a = t.calendarFormat(this, i) || "sameElse",
								r = o && (C(o[a]) ? o[a].call(this, n) : o[a]);
							return this.format(r || this.localeData().calendar(a, this, $e(n)))
						}, un.clone = function() {
							return new v(this)
						}, un.diff = function(e, t, o) {
							var n, i, a;
							return this.isValid() ? (n = rt(e, this), !n.isValid()) ? NaN : (i = 6e4 * (n.utcOffset() - this.utcOffset()),
								t = I(t), (a = "year" === t ? gt(this, n) / 12 : "month" === t ? gt(this, n) : "quarter" === t ? gt(this, n) /
									3 : "second" === t ? (this - n) / 1e3 : "minute" === t ? (this - n) / 6e4 : "hour" === t ? (this - n) /
									36e5 : "day" === t ? (this - n - i) / 864e5 : "week" === t ? (this - n - i) / 6048e5 : this - n, o ? a : k(
										a))) : NaN
						}, un.endOf = function(e) {
							var o;
							if (e = I(e), void 0 === e || "millisecond" === e || !this.isValid()) return this;
							var n = this._isUTC ? vt : bt;
							return "year" === e ? o = n(this.year() + 1, 0, 1) - 1 : "quarter" === e ? o = n(this.year(), this.month() -
									this.month() % 3 + 3, 1) - 1 : "month" === e ? o = n(this.year(), this.month() + 1, 1) - 1 : "week" === e ?
								o = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1 : "isoWeek" === e ? o = n(this.year(),
									this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1 : "day" === e || "date" === e ? o = n(this.year(),
									this.month(), this.date() + 1) - 1 : "hour" === e ? (o = this._d.valueOf(), o += 3600000 - _t(o + (this._isUTC ?
									0 : 60000 * this.utcOffset()), 3600000) - 1) : "minute" === e ? (o = this._d.valueOf(), o += 60000 - _t(o,
									60000) - 1) : "second" === e ? (o = this._d.valueOf(), o += 1000 - _t(o, 1000) - 1) : void 0, this._d.setTime(
									o), t.updateOffset(this, !0), this
						}, un.format = function(e) {
							e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
							var o = W(this, e);
							return this.localeData().postformat(o)
						}, un.from = function(e, t) {
							return this.isValid() && (w(e) && e.isValid() || $e(e).isValid()) ? lt({
								to: this,
								from: e
							}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
						}, un.fromNow = function(e) {
							return this.from($e(), e)
						}, un.to = function(e, t) {
							return this.isValid() && (w(e) && e.isValid() || $e(e).isValid()) ? lt({
								from: this,
								to: e
							}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
						}, un.toNow = function(e) {
							return this.to($e(), e)
						}, un.get = function(e) {
							return e = I(e), C(this[e]) ? this[e]() : this
						}, un.invalidAt = function() {
							return f(this).overflow
						}, un.isAfter = function(e, t) {
							var o = w(e) ? e : $e(e);
							return !!(this.isValid() && o.isValid()) && (t = I(t) || "millisecond", "millisecond" === t ? this.valueOf() >
								o.valueOf() : o.valueOf() < this.clone().startOf(t).valueOf())
						}, un.isBefore = function(e, t) {
							var o = w(e) ? e : $e(e);
							return !!(this.isValid() && o.isValid()) && (t = I(t) || "millisecond", "millisecond" === t ? this.valueOf() <
								o.valueOf() : this.clone().endOf(t).valueOf() < o.valueOf())
						}, un.isBetween = function(e, t, o, n) {
							var i = w(e) ? e : $e(e),
								a = w(t) ? t : $e(t);
							return !!(this.isValid() && i.isValid() && a.isValid()) && (n = n || "()", ("(" === n[0] ? this.isAfter(i, o) :
								!this.isBefore(i, o)) && (")" === n[1] ? this.isBefore(a, o) : !this.isAfter(a, o)))
						}, un.isSame = function(e, t) {
							var o = w(e) ? e : $e(e),
								n;
							return !!(this.isValid() && o.isValid()) && (t = I(t) || "millisecond", "millisecond" === t ? this.valueOf() ===
								o.valueOf() : (n = o.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())
							)
						}, un.isSameOrAfter = function(e, t) {
							return this.isSame(e, t) || this.isAfter(e, t)
						}, un.isSameOrBefore = function(e, t) {
							return this.isSame(e, t) || this.isBefore(e, t)
						}, un.isValid = function() {
							return y(this)
						}, un.lang = rn, un.locale = ft, un.localeData = yt, un.max = $o, un.min = Qo, un.parsingFlags = function() {
							return u({}, f(this))
						}, un.set = te, un.startOf = function(e) {
							var o;
							if (e = I(e), void 0 === e || "millisecond" === e || !this.isValid()) return this;
							var n = this._isUTC ? vt : bt;
							return "year" === e ? o = n(this.year(), 0, 1) : "quarter" === e ? o = n(this.year(), this.month() - this.month() %
									3, 1) : "month" === e ? o = n(this.year(), this.month(), 1) : "week" === e ? o = n(this.year(), this.month(),
									this.date() - this.weekday()) : "isoWeek" === e ? o = n(this.year(), this.month(), this.date() - (this.isoWeekday() -
									1)) : "day" === e || "date" === e ? o = n(this.year(), this.month(), this.date()) : "hour" === e ? (o =
									this._d.valueOf(), o -= _t(o + (this._isUTC ? 0 : 60000 * this.utcOffset()), 3600000)) : "minute" === e ? (
									o = this._d.valueOf(), o -= _t(o, 60000)) : "second" === e ? (o = this._d.valueOf(), o -= _t(o, 1000)) :
								void 0, this._d.setTime(o), t.updateOffset(this, !0), this
						}, un.subtract = an, un.toArray = function() {
							var e = this;
							return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
						}, un.toObject = function() {
							var e = this;
							return {
								years: e.year(),
								months: e.month(),
								date: e.date(),
								hours: e.hours(),
								minutes: e.minutes(),
								seconds: e.seconds(),
								milliseconds: e.milliseconds()
							}
						}, un.toDate = function() {
							return new Date(this.valueOf())
						}, un.toISOString = function(e) {
							if (!this.isValid()) return null;
							var t = !0 !== e,
								o = t ? this.clone().utc() : this;
							return 0 > o.year() || 9999 < o.year() ? W(o, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" :
								"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : C(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(
								this.valueOf() + 1e3 * (60 * this.utcOffset())).toISOString().replace("Z", W(o, "Z")) : W(o, t ?
								"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
						}, un.inspect = function() {
							if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
							var e = "moment",
								t = "";
							this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
							var o = "[" + e + "(\"]",
								n = 0 <= this.year() && 9999 >= this.year() ? "YYYY" : "YYYYYY",
								i = t + "[\")]";
							return this.format(o + n + "-MM-DD[T]HH:mm:ss.SSS" + i)
						}, un.toJSON = function() {
							return this.isValid() ? this.toISOString() : null
						}, un.toString = function() {
							return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
						}, un.unix = function() {
							return Mt(this.valueOf() / 1e3)
						}, un.valueOf = function() {
							return this._d.valueOf() - 6e4 * (this._offset || 0)
						}, un.creationData = function() {
							return {
								input: this._i,
								format: this._f,
								locale: this._locale,
								isUTC: this._isUTC,
								strict: this._strict
							}
						}, un.year = Eo, un.isLeapYear = function() {
							return Q(this.year())
						}, un.weekYear = function(e) {
							return kt.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
						}, un.isoWeekYear = function(e) {
							return kt.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
						}, un.quarter = un.quarters = function(e) {
							return null == e ? Ct((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
						}, un.month = se, un.daysInMonth = function() {
							return ne(this.year(), this.month())
						}, un.week = un.weeks = function(e) {
							var t = this.localeData().week(this);
							return null == e ? t : this.add(7 * (e - t), "d")
						}, un.isoWeek = un.isoWeeks = function(e) {
							var t = ce(this, 1, 4).week;
							return null == e ? t : this.add(7 * (e - t), "d")
						}, un.weeksInYear = function() {
							var e = this.localeData()._week;
							return he(this.year(), e.dow, e.doy)
						}, un.isoWeeksInYear = function() {
							return he(this.year(), 1, 4)
						}, un.date = sn, un.day = un.days = function(e) {
							if (!this.isValid()) return null == e ? NaN : this;
							var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
							return null == e ? t : (e = ge(e, this.localeData()), this.add(e - t, "d"))
						}, un.weekday = function(e) {
							if (!this.isValid()) return null == e ? NaN : this;
							var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
							return null == e ? t : this.add(e - t, "d")
						}, un.isoWeekday = function(e) {
							if (!this.isValid()) return null == e ? NaN : this;
							if (null != e) {
								var t = fe(e, this.localeData());
								return this.day(this.day() % 7 ? t : t - 7)
							}
							return this.day() || 7
						}, un.dayOfYear = function(e) {
							var t = xt((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
							return null == e ? t : this.add(e - t, "d")
						}, un.hour = un.hours = No, un.minute = un.minutes = dn, un.second = un.seconds = ln, un.millisecond = un.milliseconds =
						mn, un.utcOffset = function(e, o, n) {
							var i = this._offset || 0,
								a;
							if (!this.isValid()) return null == e ? NaN : this;
							if (null != e) {
								if ("string" != typeof e) 16 > Ot(e) && !n && (e *= 60);
								else if (e = at(wo, e), null === e) return this;
								return !this._isUTC && o && (a = st(this)), this._offset = e, this._isUTC = !0, null != a && this.add(a, "m"),
									i !== e && (!o || this._changeInProgress ? ht(this, lt(e - i, "m"), 1, !1) : !this._changeInProgress && (
										this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
							}
							return this._isUTC ? i : st(this)
						}, un.utc = function(e) {
							return this.utcOffset(0, e)
						}, un.local = function(e) {
							return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(st(this), "m")), this
						}, un.parseZone = function() {
							if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
							else if ("string" == typeof this._i) {
								var e = at(vo, this._i);
								null == e ? this.utcOffset(0, !0) : this.utcOffset(e)
							}
							return this
						}, un.hasAlignedHourOffset = function(e) {
							return !!this.isValid() && (e = e ? $e(e).utcOffset() : 0, 0 == (this.utcOffset() - e) % 60)
						}, un.isDST = function() {
							return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
						}, un.isLocal = function() {
							return !!this.isValid() && !this._isUTC
						}, un.isUtcOffset = function() {
							return !!this.isValid() && this._isUTC
						}, un.isUtc = dt, un.isUTC = dt, un.zoneAbbr = function() {
							return this._isUTC ? "UTC" : ""
						}, un.zoneName = function() {
							return this._isUTC ? "Coordinated Universal Time" : ""
						}, un.dates = T("dates accessor is deprecated. Use date instead.", sn), un.months = T(
							"months accessor is deprecated. Use month instead", se), un.years = T(
							"years accessor is deprecated. Use year instead", Eo), un.zone = T(
							"moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
							function(e, t) {
								return null == e ? -this.utcOffset() : ("string" != typeof e && (e = -e), this.utcOffset(e, t), this)
							}), un.isDSTShifted = T(
							"isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
							function() {
								if (!a(this._isDSTShifted)) return this._isDSTShifted;
								var e = {};
								if (b(e, this), e = Xe(e), e._a) {
									var t = e._isUTC ? h(e._a) : $e(e._a);
									this._isDSTShifted = this.isValid() && 0 < D(e._a, t.toArray())
								} else this._isDSTShifted = !1;
								return this._isDSTShifted
							});
					var cn = Y.prototype;
					cn.calendar = function(e, t, o) {
						var n = this._calendar[e] || this._calendar.sameElse;
						return C(n) ? n.call(t, o) : n
					}, cn.longDateFormat = function(e) {
						var t = this._longDateFormat[e],
							o = this._longDateFormat[e.toUpperCase()];
						return t || !o ? t : (this._longDateFormat[e] = o.replace(/MMMM|MM|DD|dddd/g, function(e) {
							return e.slice(1)
						}), this._longDateFormat[e])
					}, cn.invalidDate = function() {
						return this._invalidDate
					}, cn.ordinal = function(e) {
						return this._ordinal.replace("%d", e)
					}, cn.preparse = Et, cn.postformat = Et, cn.relativeTime = function(e, t, o, n) {
						var i = this._relativeTime[o];
						return C(i) ? i(e, t, o, n) : i.replace(/%d/i, e)
					}, cn.pastFuture = function(e, t) {
						var o = this._relativeTime[0 < e ? "future" : "past"];
						return C(o) ? o(t) : o.replace(/%s/i, t)
					}, cn.set = M, cn.months = function(e, t) {
						return e ? o(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ro).test(t) ?
							"format" : "standalone"][e.month()] : o(this._months) ? this._months : this._months.standalone
					}, cn.monthsShort = function(e, t) {
						return e ? o(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ro.test(t) ? "format" :
							"standalone"][e.month()] : o(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
					}, cn.monthsParse = ae, cn.monthsRegex = function(e) {
						return this._monthsParseExact ? (p(this, "_monthsRegex") || de.call(this), e ? this._monthsStrictRegex : this
							._monthsRegex) : (p(this, "_monthsRegex") || (this._monthsRegex = So), this._monthsStrictRegex && e ? this._monthsStrictRegex :
							this._monthsRegex)
					}, cn.monthsShortRegex = function(e) {
						return this._monthsParseExact ? (p(this, "_monthsRegex") || de.call(this), e ? this._monthsShortStrictRegex :
							this._monthsShortRegex) : (p(this, "_monthsShortRegex") || (this._monthsShortRegex = So), this._monthsShortStrictRegex &&
							e ? this._monthsShortStrictRegex : this._monthsShortRegex)
					}, cn.week = function(e) {
						return ce(e, this._week.dow, this._week.doy).week
					}, cn.firstDayOfYear = function() {
						return this._week.doy
					}, cn.firstDayOfWeek = function() {
						return this._week.dow
					}, cn.weekdays = function(e, t) {
						var n = o(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ?
							"format" : "standalone"];
						return !0 === e ? ye(n, this._week.dow) : e ? n[e.day()] : n
					}, cn.weekdaysMin = function(e) {
						return !0 === e ? ye(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
					}, cn.weekdaysShort = function(e) {
						return !0 === e ? ye(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
					}, cn.weekdaysParse = be, cn.weekdaysRegex = function(e) {
						return this._weekdaysParseExact ? (p(this, "_weekdaysRegex") || ve.call(this), e ? this._weekdaysStrictRegex :
							this._weekdaysRegex) : (p(this, "_weekdaysRegex") || (this._weekdaysRegex = So), this._weekdaysStrictRegex &&
							e ? this._weekdaysStrictRegex : this._weekdaysRegex)
					}, cn.weekdaysShortRegex = function(e) {
						return this._weekdaysParseExact ? (p(this, "_weekdaysRegex") || ve.call(this), e ? this._weekdaysShortStrictRegex :
							this._weekdaysShortRegex) : (p(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = So), this._weekdaysShortStrictRegex &&
							e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
					}, cn.weekdaysMinRegex = function(e) {
						return this._weekdaysParseExact ? (p(this, "_weekdaysRegex") || ve.call(this), e ? this._weekdaysMinStrictRegex :
							this._weekdaysMinRegex) : (p(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = So), this._weekdaysMinStrictRegex &&
							e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
					}, cn.isPM = function(e) {
						return "p" === (e + "").toLowerCase().charAt(0)
					}, cn.meridiem = function(e, t, o) {
						return 11 < e ? o ? "pm" : "PM" : o ? "am" : "AM"
					}, Oe("en", {
						dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
						ordinal: function(e) {
							var t = e % 10,
								o = 1 === S(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th";
							return e + o
						}
					}), t.lang = T("moment.lang is deprecated. Use moment.locale instead.", Oe), t.langData = T(
						"moment.langData is deprecated. Use moment.localeData instead.", Me);
					var hn = Ot,
						gn = Gt("ms"),
						fn = Gt("s"),
						yn = Gt("m"),
						_n = Gt("h"),
						bn = Gt("d"),
						vn = Gt("w"),
						wn = Gt("M"),
						kn = Gt("Q"),
						Sn = Gt("y"),
						Dn = Wt("milliseconds"),
						xn = Wt("seconds"),
						Tn = Wt("minutes"),
						On = Wt("hours"),
						Cn = Wt("days"),
						Mn = Wt("months"),
						Pn = Wt("years"),
						Yn = xt,
						En = {
							ss: 44,
							s: 45,
							m: 45,
							h: 22,
							d: 26,
							M: 11
						},
						In = Ot,
						Rn = tt.prototype;
					return Rn.isValid = function() {
							return this._isValid
						}, Rn.abs = function() {
							var e = this._data;
							return this._milliseconds = hn(this._milliseconds), this._days = hn(this._days), this._months = hn(this._months),
								e.milliseconds = hn(e.milliseconds), e.seconds = hn(e.seconds), e.minutes = hn(e.minutes), e.hours = hn(e.hours),
								e.months = hn(e.months), e.years = hn(e.years), this
						}, Rn.add = function(e, t) {
							return Ht(this, e, t, 1)
						}, Rn.subtract = function(e, t) {
							return Ht(this, e, t, -1)
						}, Rn.as = function(e) {
							if (!this.isValid()) return NaN;
							var t = this._milliseconds,
								o, n;
							if (e = I(e), "month" === e || "quarter" === e || "year" === e) switch (o = this._days + t / 864e5, n = this._months +
								Nt(o), e) {
								case "month":
									return n;
								case "quarter":
									return n / 3;
								case "year":
									return n / 12;
							} else switch (o = this._days + xt(Ft(this._months)), e) {
								case "week":
									return o / 7 + t / 6048e5;
								case "day":
									return o + t / 864e5;
								case "hour":
									return 24 * o + t / 36e5;
								case "minute":
									return 1440 * o + t / 6e4;
								case "second":
									return 86400 * o + t / 1e3;
								case "millisecond":
									return Mt(864e5 * o) + t;
								default:
									throw new Error("Unknown unit " + e);
							}
						}, Rn.asMilliseconds = gn, Rn.asSeconds = fn, Rn.asMinutes = yn, Rn.asHours = _n, Rn.asDays = bn, Rn.asWeeks =
						vn, Rn.asMonths = wn, Rn.asQuarters = kn, Rn.asYears = Sn, Rn.valueOf = function() {
							return this.isValid() ? this._milliseconds + 864e5 * this._days + 2592e6 * (this._months % 12) + 31536e6 * S(
								this._months / 12) : NaN
						}, Rn._bubble = function() {
							var e = this._milliseconds,
								t = this._days,
								o = this._months,
								n = this._data,
								i, a, r, s, d;
							return 0 <= e && 0 <= t && 0 <= o || 0 >= e && 0 >= t && 0 >= o || (e += 864e5 * Lt(Ft(o) + t), t = 0, o = 0),
								n.milliseconds = e % 1e3, i = k(e / 1e3), n.seconds = i % 60, a = k(i / 60), n.minutes = a % 60, r = k(a /
									60), n.hours = r % 24, t += k(r / 24), d = k(Nt(t)), o += d, t -= Lt(Ft(d)), s = k(o / 12), o %= 12, n.days =
								t, n.months = o, n.years = s, this
						}, Rn.clone = function() {
							return lt(this)
						}, Rn.get = function(e) {
							return e = I(e), this.isValid() ? this[e + "s"]() : NaN
						}, Rn.milliseconds = Dn, Rn.seconds = xn, Rn.minutes = Tn, Rn.hours = On, Rn.days = Cn, Rn.weeks = function() {
							return k(this.days() / 7)
						}, Rn.months = Mn, Rn.years = Pn, Rn.humanize = function(e) {
							if (!this.isValid()) return this.localeData().invalidDate();
							var t = this.localeData(),
								o = jt(this, !e, t);
							return e && (o = t.pastFuture(+this, o)), t.postformat(o)
						}, Rn.toISOString = Bt, Rn.toString = Bt, Rn.toJSON = Bt, Rn.locale = ft, Rn.localeData = yt, Rn.toIsoString =
						T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Bt), Rn.lang = rn, N(
							"X", 0, 0, "unix"), N("x", 0, 0, "valueOf"), j("x", bo), j("X", ko), q("X", function(e, t, o) {
							o._d = new Date(1e3 * parseFloat(e, 10))
						}), q("x", function(e, t, o) {
							o._d = new Date(S(e))
						}), t.version = "2.24.0",
						function(e) {
							qt = e
						}($e), t.fn = un, t.min = function() {
							var e = [].slice.call(arguments, 0);
							return Je("isBefore", e)
						}, t.max = function() {
							var e = [].slice.call(arguments, 0);
							return Je("isAfter", e)
						}, t.now = function() {
							return Date.now ? Date.now() : +new Date
						}, t.utc = h, t.unix = function(e) {
							return $e(1e3 * e)
						}, t.months = function(e, t) {
							return Rt(e, t, "months")
						}, t.isDate = d, t.locale = Oe, t.invalid = _, t.duration = lt, t.isMoment = w, t.weekdays = function(e, t, o) {
							return At(e, t, o, "weekdays")
						}, t.parseZone = function() {
							return $e.apply(null, arguments).parseZone()
						}, t.localeData = Me, t.isDuration = ot, t.monthsShort = function(e, t) {
							return Rt(e, t, "monthsShort")
						}, t.weekdaysMin = function(e, t, o) {
							return At(e, t, o, "weekdaysMin")
						}, t.defineLocale = Ce, t.updateLocale = function(e, t) {
							if (null != t) {
								var o = Fo,
									n, i;
								i = Te(e), null != i && (o = i._config), t = P(o, t), n = new Y(t), n.parentLocale = Go[e], Go[e] = n, Oe(e)
							} else null != Go[e] && (null == Go[e].parentLocale ? null != Go[e] && delete Go[e] : Go[e] = Go[e].parentLocale);
							return Go[e]
						}, t.locales = Pe, t.weekdaysShort = function(e, t, o) {
							return At(e, t, o, "weekdaysShort")
						}, t.normalizeUnits = I, t.relativeTimeRounding = Vt, t.relativeTimeThreshold = function(e, t) {
							return void 0 !== En[e] && (void 0 === t ? En[e] : (En[e] = t, "s" === e && (En.ss = t - 1), !0))
						}, t.calendarFormat = function(e, t) {
							var o = e.diff(t, "days", !0);
							return -6 > o ? "sameElse" : -1 > o ? "lastWeek" : 0 > o ? "lastDay" : 1 > o ? "sameDay" : 2 > o ? "nextDay" :
								7 > o ? "nextWeek" : "sameElse"
						}, t.prototype = un, t.HTML5_FMT = {
							DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
							DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
							DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
							DATE: "YYYY-MM-DD",
							TIME: "HH:mm",
							TIME_SECONDS: "HH:mm:ss",
							TIME_MS: "HH:mm:ss.SSS",
							WEEK: "GGGG-[W]WW",
							MONTH: "YYYY-MM"
						}, t
				})
			}), Gt = [], Wt = 0; 256 > Wt; Wt++) Gt[Wt] = (Wt + 256).toString(16).substr(1);
	for (var b = function() {
			if ("undefined" != typeof crypto && crypto.getRandomValues) {
				var e = new Uint8Array(16);
				return function() {
					return crypto.getRandomValues(e), e
				}
			}
			var t = Array(16);
			return function() {
				for (var e = 0, o; 16 > e; e++) 0 == (3 & e) && (o = 4294967296 * Math.random()), t[e] = 255 & o >>> ((3 & e) <<
					3);
				return t
			}
		}(), Ut = [], jt = 0; 256 > jt; jt++) Ut[jt] = (jt + 256).toString(16).substr(1);
	for (var Vt = b(), zt = [1 | Vt[0], Vt[1], Vt[2], Vt[3], Vt[4], Vt[5]], Bt = 16383 & (Vt[6] << 8 | Vt[7]), qt =
			/^\/?Date\((-?\d+)/i, Zt = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, Xt = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, Kt =
			Object.assign, Qt = Object.values, $t = {
				asBoolean: function(e, t) {
					return "function" == typeof e && (e = e()), null == e ? t || null : !1 != e
				},
				asNumber: function(e, t) {
					return "function" == typeof e && (e = e()), null == e ? t || null : +e || t || null
				},
				asString: function(e, t) {
					return "function" == typeof e && (e = e()), null == e ? t || null : e + ""
				},
				asSize: function(e, t) {
					return "function" == typeof e && (e = e()), g(e) ? e : c(e) ? e + "px" : t || null
				},
				asElement: function(e, t) {
					return "function" == typeof e && (e = e()), e || t || null
				}
			}, Jt = {
				split: function(e) {
					var t = {};
					return e.split(";").forEach(function(e) {
						if ("" != e.trim()) {
							var o = e.split(":"),
								n = o[0].trim(),
								i = o[1].trim();
							t[n] = i
						}
					}), t
				},
				join: function(e) {
					return Object.keys(e).map(function(t) {
						return t + ": " + e[t]
					}).join("; ")
				}
			}, eo = {
				linear: function(e) {
					return e
				},
				easeInQuad: function(e) {
					return e * e
				},
				easeOutQuad: function(e) {
					return e * (2 - e)
				},
				easeInOutQuad: function(e) {
					return .5 > e ? 2 * e * e : -1 + (4 - 2 * e) * e
				},
				easeInCubic: function(e) {
					return e * e * e
				},
				easeOutCubic: function(e) {
					return --e * e * e + 1
				},
				easeInOutCubic: function(e) {
					return .5 > e ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
				},
				easeInQuart: function(e) {
					return e * e * e * e
				},
				easeOutQuart: function(e) {
					return 1 - --e * e * e * e
				},
				easeInOutQuart: function(e) {
					return .5 > e ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
				},
				easeInQuint: function(e) {
					return e * e * e * e * e
				},
				easeOutQuint: function(e) {
					return 1 + --e * e * e * e * e
				},
				easeInOutQuint: function(e) {
					return .5 > e ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
				}
			}, to = Object.freeze({
				isNumber: c,
				recursiveDOMDelete: h,
				isString: g,
				isObject: f,
				isDate: y,
				isMoment: _,
				fillIfDefined: w,
				extend: Kt,
				selectiveExtend: k,
				selectiveDeepExtend: S,
				selectiveNotDeepExtend: D,
				deepExtend: x,
				equalArray: T,
				convert: O,
				getType: C,
				copyAndExtendArray: M,
				copyArray: P,
				getAbsoluteLeft: Y,
				getAbsoluteRight: E,
				getAbsoluteTop: I,
				addClassName: R,
				removeClassName: A,
				forEach: H,
				toArray: Qt,
				updateProperty: L,
				throttle: N,
				addEventListener: F,
				removeEventListener: G,
				preventDefault: W,
				getTarget: U,
				hasParent: j,
				option: $t,
				hexToRGB: V,
				overrideOpacity: z,
				RGBToHex: B,
				parseColor: q,
				RGBToHSV: Z,
				addCssText: X,
				removeCssText: K,
				HSVToRGB: Q,
				HSVToHex: $,
				hexToHSV: J,
				isValidHex: ee,
				isValidRGB: te,
				isValidRGBA: oe,
				selectiveBridgeObject: ne,
				bridgeObject: ie,
				insertSort: ae,
				mergeOptions: re,
				binarySearchCustom: se,
				binarySearchValue: de,
				easingFunctions: eo,
				getScrollBarWidth: le,
				topMost: pe,
				randomUUID: p
			}), oo = Object.freeze({
				default: to,
				HSVToHex: $,
				HSVToRGB: Q,
				RGBToHSV: Z,
				RGBToHex: B,
				addClassName: R,
				addCssText: X,
				addEventListener: F,
				binarySearchCustom: se,
				binarySearchValue: de,
				bridgeObject: ie,
				convert: O,
				copyAndExtendArray: M,
				copyArray: P,
				deepExtend: x,
				easingFunctions: eo,
				equalArray: T,
				extend: Kt,
				fillIfDefined: w,
				forEach: H,
				getAbsoluteLeft: Y,
				getAbsoluteRight: E,
				getAbsoluteTop: I,
				getScrollBarWidth: le,
				getTarget: U,
				getType: C,
				hasParent: j,
				hexToHSV: J,
				hexToRGB: V,
				insertSort: ae,
				isDate: y,
				isMoment: _,
				isNumber: c,
				isObject: f,
				isString: g,
				isValidHex: ee,
				isValidRGB: te,
				isValidRGBA: oe,
				mergeOptions: re,
				option: $t,
				overrideOpacity: z,
				parseColor: q,
				preventDefault: W,
				randomUUID: p,
				recursiveDOMDelete: h,
				removeClassName: A,
				removeCssText: K,
				removeEventListener: G,
				selectiveBridgeObject: ne,
				selectiveDeepExtend: S,
				selectiveExtend: k,
				selectiveNotDeepExtend: D,
				throttle: N,
				toArray: Qt,
				topMost: pe,
				updateProperty: L
			}), no = "undefined" == typeof globalThis ? "undefined" == typeof window ? "undefined" == typeof global ?
			"undefined" == typeof self ? {} : self : global : window : globalThis, io = ue(function(e, t) {
				t.prepareElements = function(e) {
					for (var t in e) e.hasOwnProperty(t) && (e[t].redundant = e[t].used, e[t].used = [])
				}, t.cleanupElements = function(e) {
					for (var t in e)
						if (e.hasOwnProperty(t) && e[t].redundant) {
							for (var o = 0; o < e[t].redundant.length; o++) e[t].redundant[o].parentNode.removeChild(e[t].redundant[o]);
							e[t].redundant = []
						}
				}, t.resetElements = function(e) {
					t.prepareElements(e), t.cleanupElements(e), t.prepareElements(e)
				}, t.getSVGElement = function(e, t, o) {
					var n;
					return t.hasOwnProperty(e) ? 0 < t[e].redundant.length ? (n = t[e].redundant[0], t[e].redundant.shift()) : (n =
						document.createElementNS("http://www.w3.org/2000/svg", e), o.appendChild(n)) : (n = document.createElementNS(
						"http://www.w3.org/2000/svg", e), t[e] = {
						used: [],
						redundant: []
					}, o.appendChild(n)), t[e].used.push(n), n
				}, t.getDOMElement = function(e, t, o, n) {
					var i;
					return t.hasOwnProperty(e) ? 0 < t[e].redundant.length ? (i = t[e].redundant[0], t[e].redundant.shift()) : (i =
						document.createElement(e), void 0 === n ? o.appendChild(i) : o.insertBefore(i, n)) : (i = document.createElement(
						e), t[e] = {
						used: [],
						redundant: []
					}, void 0 === n ? o.appendChild(i) : o.insertBefore(i, n)), t[e].used.push(i), i
				}, t.drawPoint = function(e, o, n, i, a, r) {
					var s;
					if ("circle" == n.style ? (s = t.getSVGElement("circle", i, a), s.setAttributeNS(null, "cx", e), s.setAttributeNS(
							null, "cy", o), s.setAttributeNS(null, "r", .5 * n.size)) : (s = t.getSVGElement("rect", i, a), s.setAttributeNS(
							null, "x", e - .5 * n.size), s.setAttributeNS(null, "y", o - .5 * n.size), s.setAttributeNS(null, "width", n
							.size), s.setAttributeNS(null, "height", n.size)), void 0 !== n.styles && s.setAttributeNS(null, "style", n.styles),
						s.setAttributeNS(null, "class", n.className + " vis-point"), r) {
						var d = t.getSVGElement("text", i, a);
						r.xOffset && (e += r.xOffset), r.yOffset && (o += r.yOffset), r.content && (d.textContent = r.content), r.className &&
							d.setAttributeNS(null, "class", r.className + " vis-label"), d.setAttributeNS(null, "x", e), d.setAttributeNS(
								null, "y", o)
					}
					return s
				}, t.drawBar = function(e, o, n, i, a, r, s, d) {
					if (0 != i) {
						0 > i && (i *= -1, o -= i);
						var l = t.getSVGElement("rect", r, s);
						l.setAttributeNS(null, "x", e - .5 * n), l.setAttributeNS(null, "y", o), l.setAttributeNS(null, "width", n), l
							.setAttributeNS(null, "height", i), l.setAttributeNS(null, "class", a), d && l.setAttributeNS(null, "style",
								d)
					}
				}
			}), ao = io.prepareElements, ro = io.cleanupElements, so = io.resetElements, lo = io.getSVGElement, po = io.getDOMElement,
			mo = io.drawPoint, uo = io.drawBar, co = he, ho = ge(function(e) {
				function t(e) {
					return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" :
							typeof e
					}, t(e)
				}

				function o(n) {
					return e.exports = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? o = function(e) {
						return t(e)
					} : o = function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
					}, o(n)
				}
				e.exports = o
			}), go = fe, fo = _e, yo = be, _o = ve, bo = ge(function(e) {
				function t(n) {
					return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
						return e.__proto__ || Object.getPrototypeOf(e)
					}, t(n)
				}
				e.exports = t
			}), vo = ge(function(e) {
				function t(n, o) {
					return e.exports = t = Object.setPrototypeOf || function(e, t) {
						return e.__proto__ = t, e
					}, t(n, o)
				}
				e.exports = t
			}), wo = we, ko = [], So = 0; 256 > So; So++) ko[So] = (So + 256).toString(16).substr(1);
	for (var Do = function() {
			if ("undefined" != typeof crypto && crypto.getRandomValues) {
				var e = new Uint8Array(16);
				return function() {
					return crypto.getRandomValues(e), e
				}
			}
			var t = Array(16);
			return function() {
				for (var e = 0, o; 16 > e; e++) 0 == (3 & e) && (o = 4294967296 * Math.random()), t[e] = 255 & o >>> ((3 & e) <<
					3);
				return t
			}
		}(), xo = [], To = 0; 256 > To; To++) xo[To] = (To + 256).toString(16).substr(1);
	for (var Oo = Do(), Co = [1 | Oo[0], Oo[1], Oo[2], Oo[3], Oo[4], Oo[5]], Mo = 16383 & (Oo[6] << 8 | Oo[7]), Po =
			"undefined" == typeof globalThis ? "undefined" == typeof window ? "undefined" == typeof global ? "undefined" ==
			typeof self ? {} : self : global : window : globalThis, Yo = Te(function(e) {
				(function(t, o) {
					e.exports = o()
				})(Po, function() {
					function t() {
						return Bt.apply(null, arguments)
					}

					function o(e) {
						return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
					}

					function n(e) {
						return null != e && "[object Object]" === Object.prototype.toString.call(e)
					}

					function i(e) {
						if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
						for (var t in e)
							if (e.hasOwnProperty(t)) return !1;
						return !0
					}

					function a(e) {
						return void 0 === e
					}

					function r(e) {
						return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
					}

					function s(e) {
						return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
					}

					function d(e, t) {
						var o = [],
							n;
						for (n = 0; n < e.length; ++n) o.push(t(e[n], n));
						return o
					}

					function l(e, t) {
						return Object.prototype.hasOwnProperty.call(e, t)
					}

					function p(e, t) {
						for (var o in t) l(t, o) && (e[o] = t[o]);
						return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), e
					}

					function u(e, t, o, n) {
						return Ke(e, t, o, n, !0).utc()
					}

					function c() {
						return {
							empty: !1,
							unusedTokens: [],
							unusedInput: [],
							overflow: -2,
							charsLeftOver: 0,
							nullInput: !1,
							invalidMonth: null,
							invalidFormat: !1,
							userInvalidated: !1,
							iso: !1,
							parsedDateParts: [],
							meridiem: null,
							rfc2822: !1,
							weekdayMismatch: !1
						}
					}

					function h(e) {
						return null == e._pf && (e._pf = c()), e._pf
					}

					function g(e) {
						if (null == e._isValid) {
							var t = h(e),
								o = qt.call(t.parsedDateParts, function(e) {
									return null != e
								}),
								n = !isNaN(e._d.getTime()) && 0 > t.overflow && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch &&
								!t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && o);
							if (e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour),
								null == Object.isFrozen || !Object.isFrozen(e)) e._isValid = n;
							else return n
						}
						return e._isValid
					}

					function f(e) {
						var t = u(NaN);
						return null == e ? h(t).userInvalidated = !0 : p(h(t), e), t
					}

					function y(e, t) {
						var o, n, r;
						if (a(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), a(t._i) || (e._i = t._i), a(t._f) || (
								e._f = t._f), a(t._l) || (e._l = t._l), a(t._strict) || (e._strict = t._strict), a(t._tzm) || (e._tzm = t._tzm),
							a(t._isUTC) || (e._isUTC = t._isUTC), a(t._offset) || (e._offset = t._offset), a(t._pf) || (e._pf = h(t)), a(
								t._locale) || (e._locale = t._locale), 0 < Zt.length)
							for (o = 0; o < Zt.length; o++) n = Zt[o], r = t[n], a(r) || (e[n] = r);
						return e
					}

					function _(e) {
						y(this, e), this._d = new Date(null == e._d ? NaN : e._d.getTime()), this.isValid() || (this._d = new Date(NaN)),
							!1 === Xt && (Xt = !0, t.updateOffset(this), Xt = !1)
					}

					function b(e) {
						return e instanceof _ || null != e && null != e._isAMomentObject
					}

					function v(e) {
						return 0 > e ? Ct(e) || 0 : Mt(e)
					}

					function w(e) {
						var t = +e,
							o = 0;
						return 0 != t && isFinite(t) && (o = v(t)), o
					}

					function k(e, t, o) {
						var n = Yt(e.length, t.length),
							a = Ot(e.length - t.length),
							r = 0,
							s;
						for (s = 0; s < n; s++)(o && e[s] !== t[s] || !o && w(e[s]) !== w(t[s])) && r++;
						return r + a
					}

					function S(e) {
						!1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn(
							"Deprecation warning: " + e)
					}

					function D(e, o) {
						var n = !0;
						return p(function() {
							if (null != t.deprecationHandler && t.deprecationHandler(null, e), n) {
								for (var a = [], r = 0, s; r < arguments.length; r++) {
									if (s = "", "object" == typeof arguments[r]) {
										for (var d in s += "\n[" + r + "] ", arguments[0]) s += d + ": " + arguments[0][d] + ", ";
										s = s.slice(0, -2)
									} else s = arguments[r];
									a.push(s)
								}
								S(e + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + new Error().stack), n = !1
							}
							return o.apply(this, arguments)
						}, o)
					}

					function x(e, o) {
						null != t.deprecationHandler && t.deprecationHandler(e, o), Kt[e] || (S(o), Kt[e] = !0)
					}

					function T(e) {
						return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
					}

					function O(e) {
						var t, o;
						for (o in e) t = e[o], T(t) ? this[o] = t : this["_" + o] = t;
						this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source ||
							this._ordinalParse.source) + "|" + /\d{1,2}/.source)
					}

					function C(e, t) {
						var o = p({}, e),
							i;
						for (i in t) l(t, i) && (n(e[i]) && n(t[i]) ? (o[i] = {}, p(o[i], e[i]), p(o[i], t[i])) : null == t[i] ?
							delete o[i] : o[i] = t[i]);
						for (i in e) l(e, i) && !l(t, i) && n(e[i]) && (o[i] = p({}, o[i]));
						return o
					}

					function M(e) {
						null != e && this.set(e)
					}

					function P(e, t) {
						var o = e.toLowerCase();
						Jt[o] = Jt[o + "s"] = Jt[t] = e
					}

					function Y(e) {
						return "string" == typeof e ? Jt[e] || Jt[e.toLowerCase()] : void 0
					}

					function E(e) {
						var t = {},
							o, n;
						for (n in e) l(e, n) && (o = Y(n), o && (t[o] = e[n]));
						return t
					}

					function I(e, t) {
						eo[e] = t
					}

					function R(e) {
						var t = [];
						for (var o in e) t.push({
							unit: o,
							priority: eo[o]
						});
						return t.sort(function(e, t) {
							return e.priority - t.priority
						}), t
					}

					function A(e, t, o) {
						var n = "" + Ot(e),
							i = t - n.length;
						return (0 <= e ? o ? "+" : "" : "-") + Tt(10, Pt(0, i)).toString().substr(1) + n
					}

					function H(e, t, o, n) {
						var i = n;
						"string" == typeof n && (i = function() {
							return this[n]()
						}), e && (io[e] = i), t && (io[t[0]] = function() {
							return A(i.apply(this, arguments), t[1], t[2])
						}), o && (io[o] = function() {
							return this.localeData().ordinal(i.apply(this, arguments), e)
						})
					}

					function L(e) {
						return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
					}

					function N(e) {
						var t = e.match(to),
							o, n;
						for (o = 0, n = t.length; o < n; o++) t[o] = io[t[o]] ? io[t[o]] : L(t[o]);
						return function(o) {
							var a = "",
								r;
							for (r = 0; r < n; r++) a += T(t[r]) ? t[r].call(o, e) : t[r];
							return a
						}
					}

					function F(e, t) {
						return e.isValid() ? (t = G(t, e.localeData()), no[t] = no[t] || N(t), no[t](e)) : e.localeData().invalidDate()
					}

					function G(e, t) {
						function o(e) {
							return t.longDateFormat(e) || e
						}
						var n = 5;
						for (oo.lastIndex = 0; 0 <= n && oo.test(e);) e = e.replace(oo, o), oo.lastIndex = 0, n -= 1;
						return e
					}

					function W(e, t, o) {
						So[e] = T(t) ? t : function(e) {
							return e && o ? o : t
						}
					}

					function U(e, t) {
						return l(So, e) ? So[e](t._strict, t._locale) : new RegExp(j(e))
					}

					function j(e) {
						return V(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, o, n, i) {
							return t || o || n || i
						}))
					}

					function V(e) {
						return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
					}

					function z(e, t) {
						var o = t,
							n;
						for ("string" == typeof e && (e = [e]), r(t) && (o = function(e, o) {
								o[t] = w(e)
							}), n = 0; n < e.length; n++) Do[e[n]] = o
					}

					function B(e, t) {
						z(e, function(e, o, n, i) {
							n._w = n._w || {}, t(e, n._w, n, i)
						})
					}

					function q(e, t, o) {
						null != t && l(Do, e) && Do[e](t, o._a, o, e)
					}

					function Z(e) {
						return X(e) ? 366 : 365
					}

					function X(e) {
						return 0 == e % 4 && 0 != e % 100 || 0 == e % 400
					}

					function K(e, o) {
						return function(n) {
							return null == n ? Q(this, e) : ($(this, e, n), t.updateOffset(this, o), this)
						}
					}

					function Q(e, t) {
						return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
					}

					function $(e, t, o) {
						e.isValid() && !isNaN(o) && ("FullYear" === t && X(e.year()) && 1 === e.month() && 29 === e.date() ? e._d[
							"set" + (e._isUTC ? "UTC" : "") + t](o, e.month(), te(o, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") +
							t](o))
					}

					function J(e, t) {
						if ("object" == typeof e) {
							e = E(e);
							for (var o = R(e), n = 0; n < o.length; n++) this[o[n].unit](e[o[n].unit])
						} else if (e = Y(e), T(this[e])) return this[e](t);
						return this
					}

					function ee(e, t) {
						return (e % t + t) % t
					}

					function te(e, t) {
						if (isNaN(e) || isNaN(t)) return NaN;
						var o = ee(t, 12);
						return e += (t - o) / 12, 1 === o ? X(e) ? 29 : 28 : 31 - o % 7 % 2
					}

					function oe(e, t, o) {
						var n = e.toLocaleLowerCase(),
							a, r, s;
						if (!this._monthsParse)
							for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; 12 > a; ++a) s =
								u([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[
									a] = this.months(s, "").toLocaleLowerCase();
						return o ? "MMM" === t ? (r = Eo.call(this._shortMonthsParse, n), -1 === r ? null : r) : (r = Eo.call(this._longMonthsParse,
							n), -1 === r ? null : r) : "MMM" === t ? (r = Eo.call(this._shortMonthsParse, n), -1 !== r) ? r : (r = Eo.call(
							this._longMonthsParse, n), -1 === r ? null : r) : (r = Eo.call(this._longMonthsParse, n), -1 !== r) ? r : (r =
							Eo.call(this._shortMonthsParse, n), -1 === r ? null : r)
					}

					function ne(e, t, o) {
						var n, a, r;
						if (this._monthsParseExact) return oe.call(this, e, t, o);
						for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n =
							0; 12 > n; n++) {
							if (a = u([2e3, n]), o && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(
									a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(a, "").replace(
									".", "") + "$", "i")), o || this._monthsParse[n] || (r = "^" + this.months(a, "") + "|^" + this.monthsShort(
									a, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), o && "MMMM" === t && this._longMonthsParse[
									n].test(e)) return n;
							if (o && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
							if (!o && this._monthsParse[n].test(e)) return n
						}
					}

					function ie(e, t) {
						var o;
						if (!e.isValid()) return e;
						if ("string" == typeof t)
							if (/^\d+$/.test(t)) t = w(t);
							else if (t = e.localeData().monthsParse(t), !r(t)) return e;
						return o = Yt(e.date(), te(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, o), e
					}

					function ae(e) {
						return null == e ? Q(this, "Month") : (ie(this, e), t.updateOffset(this, !0), this)
					}

					function re() {
						function e(e, t) {
							return t.length - e.length
						}
						var t = [],
							o = [],
							n = [],
							a, r;
						for (a = 0; 12 > a; a++) r = u([2e3, a]), t.push(this.monthsShort(r, "")), o.push(this.months(r, "")), n.push(
							this.months(r, "")), n.push(this.monthsShort(r, ""));
						for (t.sort(e), o.sort(e), n.sort(e), a = 0; 12 > a; a++) t[a] = V(t[a]), o[a] = V(o[a]);
						for (a = 0; 24 > a; a++) n[a] = V(n[a]);
						this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex,
							this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp(
								"^(" + t.join("|") + ")", "i")
					}

					function se(e, t, o, n, i, a, r) {
						var s;
						return 100 > e && 0 <= e ? (s = new Date(e + 400, t, o, n, i, a, r), isFinite(s.getFullYear()) && s.setFullYear(
							e)) : s = new Date(e, t, o, n, i, a, r), s
					}

					function de(e) {
						var t;
						if (100 > e && 0 <= e) {
							var o = Array.prototype.slice.call(arguments);
							o[0] = e + 400, t = new Date(Date.UTC.apply(null, o)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)
						} else t = new Date(Date.UTC.apply(null, arguments));
						return t
					}

					function le(e, t, o) {
						var n = 7 + t - o,
							i = (7 + de(e, 0, n).getUTCDay() - t) % 7;
						return -i + n - 1
					}

					function pe(e, t, o, n, i) {
						var a = le(e, n, i),
							r = 1 + 7 * (t - 1) + (7 + o - n) % 7 + a,
							s, d;
						return 0 >= r ? (s = e - 1, d = Z(s) + r) : r > Z(e) ? (s = e + 1, d = r - Z(e)) : (s = e, d = r), {
							year: s,
							dayOfYear: d
						}
					}

					function me(e, t, o) {
						var n = le(e.year(), t, o),
							i = Mt((e.dayOfYear() - n - 1) / 7) + 1,
							a, r;
						return 1 > i ? (r = e.year() - 1, a = i + ue(r, t, o)) : i > ue(e.year(), t, o) ? (a = i - ue(e.year(), t, o),
							r = e.year() + 1) : (r = e.year(), a = i), {
							week: a,
							year: r
						}
					}

					function ue(e, t, o) {
						var n = le(e, t, o),
							i = le(e + 1, t, o);
						return (Z(e) - n + i) / 7
					}

					function ce(e, t) {
						return "string" == typeof e ? isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(
							e, 10) : e
					}

					function he(e, t) {
						return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
					}

					function ge(e, t) {
						return e.slice(t, 7).concat(e.slice(0, t))
					}

					function fe(e, t, o) {
						var n = e.toLocaleLowerCase(),
							a, r, s;
						if (!this._weekdaysParse)
							for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; 7 > a; ++a)
								s = u([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[
									a] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(s, "").toLocaleLowerCase();
						return o ? "dddd" === t ? (r = Eo.call(this._weekdaysParse, n), -1 === r ? null : r) : "ddd" === t ? (r = Eo.call(
								this._shortWeekdaysParse, n), -1 === r ? null : r) : (r = Eo.call(this._minWeekdaysParse, n), -1 === r ?
								null : r) : "dddd" === t ? (r = Eo.call(this._weekdaysParse, n), -1 !== r) ? r : (r = Eo.call(this._shortWeekdaysParse,
								n), -1 !== r) ? r : (r = Eo.call(this._minWeekdaysParse, n), -1 === r ? null : r) : "ddd" === t ? (r = Eo.call(
								this._shortWeekdaysParse, n), -1 !== r) ? r : (r = Eo.call(this._weekdaysParse, n), -1 !== r) ? r : (r = Eo.call(
								this._minWeekdaysParse, n), -1 === r ? null : r) : (r = Eo.call(this._minWeekdaysParse, n), -1 !== r) ? r :
							(r = Eo.call(this._weekdaysParse, n), -1 !== r) ? r : (r = Eo.call(this._shortWeekdaysParse, n), -1 === r ?
								null : r)
					}

					function ye(e, t, o) {
						var n, a, r;
						if (this._weekdaysParseExact) return fe.call(this, e, t, o);
						for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [],
								this._fullWeekdaysParse = []), n = 0; 7 > n; n++) {
							if (a = u([2e3, 1]).day(n), o && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" +
									this.weekdays(a, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this
									.weekdaysShort(a, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(
									a, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (r = "^" + this.weekdays(a, "") + "|^" +
									this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[n] = new RegExp(r.replace(
										".", ""), "i")), o && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n;
							if (o && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n;
							if (o && "dd" === t && this._minWeekdaysParse[n].test(e)) return n;
							if (!o && this._weekdaysParse[n].test(e)) return n
						}
					}

					function _e() {
						function e(e, t) {
							return t.length - e.length
						}
						var t = [],
							o = [],
							n = [],
							a = [],
							r, s, d, l, p;
						for (r = 0; 7 > r; r++) s = u([2e3, 1]).day(r), d = this.weekdaysMin(s, ""), l = this.weekdaysShort(s, ""), p =
							this.weekdays(s, ""), t.push(d), o.push(l), n.push(p), a.push(d), a.push(l), a.push(p);
						for (t.sort(e), o.sort(e), n.sort(e), a.sort(e), r = 0; 7 > r; r++) o[r] = V(o[r]), n[r] = V(n[r]), a[r] = V(a[
							r]);
						this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex,
							this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + n.join("|") + ")",
								"i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex =
							new RegExp("^(" + t.join("|") + ")", "i")
					}

					function be() {
						return this.hours() % 12 || 12
					}

					function ve(e, t) {
						H(e, 0, 0, function() {
							return this.localeData().meridiem(this.hours(), this.minutes(), t)
						})
					}

					function we(e, t) {
						return t._meridiemParse
					}

					function ke(e) {
						return e ? e.toLowerCase().replace("_", "-") : e
					}

					function Se(e) {
						for (var t = 0, o, n, a, r; t < e.length;) {
							for (r = ke(e[t]).split("-"), o = r.length, n = ke(e[t + 1]), n = n ? n.split("-") : null; 0 < o;) {
								if (a = De(r.slice(0, o).join("-")), a) return a;
								if (n && n.length >= o && k(r, n, !0) >= o - 1) break;
								o--
							}
							t++
						}
						return Xo
					}

					function De(t) {
						var o = null;
						if (!Fo[t] && !0 && e && e.exports) try {
							o = Xo._abbr;
							xe("./locale/" + t), Te(o)
						} catch (t) {}
						return Fo[t]
					}

					function Te(e, t) {
						var o;
						return e && (o = a(t) ? Ce(e) : Oe(e, t), o ? Xo = o : "undefined" != typeof console && console.warn &&
							console.warn("Locale " + e + " not found. Did you forget to load it?")), Xo._abbr
					}

					function Oe(e, t) {
						if (null !== t) {
							var o = No,
								n;
							if (t.abbr = e, null != Fo[e]) x("defineLocaleOverride",
								"use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
							), o = Fo[e]._config;
							else if (null != t.parentLocale)
								if (null != Fo[t.parentLocale]) o = Fo[t.parentLocale]._config;
								else if (n = De(t.parentLocale), null != n) o = n._config;
							else return Go[t.parentLocale] || (Go[t.parentLocale] = []), Go[t.parentLocale].push({
								name: e,
								config: t
							}), null;
							return Fo[e] = new M(C(o, t)), Go[e] && Go[e].forEach(function(e) {
								Oe(e.name, e.config)
							}), Te(e), Fo[e]
						}
						return delete Fo[e], null
					}

					function Ce(e) {
						var t;
						if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Xo;
						if (!o(e)) {
							if (t = De(e), t) return t;
							e = [e]
						}
						return Se(e)
					}

					function Me() {
						return Qt(Fo)
					}

					function Pe(e) {
						var t = e._a,
							o;
						return t && -2 === h(e).overflow && (o = 0 > t[1] || 11 < t[1] ? 1 : 1 > t[2] || t[2] > te(t[0], t[1]) ? 2 : 0 >
							t[3] || 24 < t[3] || 24 === t[3] && (0 !== t[4] || 0 !== t[5] || 0 !== t[6]) ? 3 : 0 > t[4] || 59 < t[4] ? 4 :
							0 > t[5] || 59 < t[5] ? 5 : 0 > t[6] || 999 < t[6] ? 6 : -1, h(e)._overflowDayOfYear && (0 > o || 2 < o) &&
							(o = 2), h(e)._overflowWeeks && -1 === o && (o = 7), h(e)._overflowWeekday && -1 === o && (o = 8), h(e).overflow =
							o), e
					}

					function Ye(e, t, o) {
						return null == e ? null == t ? o : t : e
					}

					function Ee(e) {
						var o = new Date(t.now());
						return e._useUTC ? [o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()] : [o.getFullYear(), o.getMonth(), o.getDate()]
					}

					function Ie(e) {
						var t = [],
							o, n, a, r, s;
						if (!e._d) {
							for (a = Ee(e), e._w && null == e._a[2] && null == e._a[1] && Re(e), null != e._dayOfYear && (s = Ye(e._a[0],
										a[0]), (e._dayOfYear > Z(s) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), n = de(s, 0, e._dayOfYear),
									e._a[1] = n.getUTCMonth(), e._a[2] = n.getUTCDate()), o = 0; 3 > o && null == e._a[o]; ++o) e._a[o] = t[o] =
								a[o];
							for (; 7 > o; o++) e._a[o] = t[o] = null == e._a[o] ? 2 === o ? 1 : 0 : e._a[o];
							24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && (e._nextDay = !0, e._a[3] = 0), e._d = (
									e._useUTC ? de : se).apply(null, t), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d
								.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[3] = 24), e._w && "undefined" != typeof e
								._w.d && e._w.d !== r && (h(e).weekdayMismatch = !0)
						}
					}

					function Re(e) {
						var t, o, n, i, a, r, s, d;
						if (t = e._w, null != t.GG || null != t.W || null != t.E) a = 1, r = 4, o = Ye(t.GG, e._a[0], me(Qe(), 1, 4).year),
							n = Ye(t.W, 1), i = Ye(t.E, 1), (1 > i || 7 < i) && (d = !0);
						else {
							a = e._locale._week.dow, r = e._locale._week.doy;
							var l = me(Qe(), a, r);
							o = Ye(t.gg, e._a[0], l.year), n = Ye(t.w, l.week), null == t.d ? null == t.e ? i = a : (i = t.e + a, (0 > t.e ||
								6 < t.e) && (d = !0)) : (i = t.d, (0 > i || 6 < i) && (d = !0))
						}
						1 > n || n > ue(o, a, r) ? h(e)._overflowWeeks = !0 : null == d ? (s = pe(o, n, i, a, r), e._a[0] = s.year, e._dayOfYear =
							s.dayOfYear) : h(e)._overflowWeekday = !0
					}

					function Ae(e) {
						var t = e._i,
							o = Wo.exec(t) || Uo.exec(t),
							n, a, r, s, d, p;
						if (o) {
							for (h(e).iso = !0, n = 0, a = Vo.length; n < a; n++)
								if (Vo[n][1].exec(o[1])) {
									s = Vo[n][0], r = !1 !== Vo[n][2];
									break
								} if (null == s) return void(e._isValid = !1);
							if (o[3]) {
								for (n = 0, a = zo.length; n < a; n++)
									if (zo[n][1].exec(o[3])) {
										d = (o[2] || " ") + zo[n][0];
										break
									} if (null == d) return void(e._isValid = !1)
							}
							if (!r && null != d) return void(e._isValid = !1);
							if (o[4])
								if (jo.exec(o[4])) p = "Z";
								else return void(e._isValid = !1);
							e._f = s + (d || "") + (p || ""), je(e)
						} else e._isValid = !1
					}

					function He(e, t, o, n, i, a) {
						var r = [Le(e), Ro.indexOf(t), parseInt(o, 10), parseInt(n, 10), parseInt(i, 10)];
						return a && r.push(parseInt(a, 10)), r
					}

					function Le(e) {
						var t = parseInt(e, 10);
						return 49 >= t ? 2e3 + t : 999 >= t ? 1900 + t : t
					}

					function Ne(e) {
						return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
					}

					function Fe(e, t, o) {
						if (e) {
							var n = Ao.indexOf(e),
								i = new Date(t[0], t[1], t[2]).getDay();
							if (n !== i) return h(o).weekdayMismatch = !0, o._isValid = !1, !1
						}
						return !0
					}

					function Ge(e, t, o) {
						if (e) return Zo[e];
						if (t) return 0;
						var n = parseInt(o, 10),
							i = n % 100;
						return 60 * ((n - i) / 100) + i
					}

					function We(e) {
						var t = qo.exec(Ne(e._i));
						if (t) {
							var o = He(t[4], t[3], t[2], t[5], t[6], t[7]);
							if (!Fe(t[1], o, e)) return;
							e._a = o, e._tzm = Ge(t[8], t[9], t[10]), e._d = de.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() -
								e._tzm), h(e).rfc2822 = !0
						} else e._isValid = !1
					}

					function Ue(e) {
						var o = Bo.exec(e._i);
						if (null !== o) return void(e._d = new Date(+o[1]));
						if (Ae(e), !1 === e._isValid) delete e._isValid;
						else return;
						if (We(e), !1 === e._isValid) delete e._isValid;
						else return;
						t.createFromInputFallback(e)
					}

					function je(e) {
						if (e._f === t.ISO_8601) return void Ae(e);
						if (e._f === t.RFC_2822) return void We(e);
						e._a = [], h(e).empty = !0;
						var o = "" + e._i,
							n = o.length,
							a = 0,
							r, s, d, l, p;
						for (d = G(e._f, e._locale).match(to) || [], r = 0; r < d.length; r++) l = d[r], s = (o.match(U(l, e)) || [])[
								0], s && (p = o.substr(0, o.indexOf(s)), 0 < p.length && h(e).unusedInput.push(p), o = o.slice(o.indexOf(s) +
								s.length), a += s.length), io[l] ? (s ? h(e).empty = !1 : h(e).unusedTokens.push(l), q(l, s, e)) : e._strict &&
							!s && h(e).unusedTokens.push(l);
						h(e).charsLeftOver = n - a, 0 < o.length && h(e).unusedInput.push(o), 12 >= e._a[3] && !0 === h(e).bigHour &&
							0 < e._a[3] && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[
								3] = Ve(e._locale, e._a[3], e._meridiem), Ie(e), Pe(e)
					}

					function Ve(e, t, o) {
						var n;
						return null == o ? t : null == e.meridiemHour ? null == e.isPM ? t : (n = e.isPM(o), n && 12 > t && (t += 12),
							n || 12 !== t || (t = 0), t) : e.meridiemHour(t, o)
					}

					function ze(e) {
						var t, o, n, a, r;
						if (0 === e._f.length) return h(e).invalidFormat = !0, void(e._d = new Date(NaN));
						for (a = 0; a < e._f.length; a++)(r = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[
							a], je(t), !!g(t)) && (r += h(t).charsLeftOver, r += 10 * h(t).unusedTokens.length, h(t).score = r, (null ==
							n || r < n) && (n = r, o = t));
						p(e, o || t)
					}

					function Be(e) {
						if (!e._d) {
							var t = E(e._i);
							e._a = d([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
								return e && parseInt(e, 10)
							}), Ie(e)
						}
					}

					function qe(e) {
						var t = new _(Pe(Ze(e)));
						return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
					}

					function Ze(e) {
						var t = e._i,
							n = e._f;
						return (e._locale = e._locale || Ce(e._l), null === t || void 0 === n && "" === t) ? f({
							nullInput: !0
						}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), b(t)) ? new _(Pe(t)) : (s(t) ? e._d = t : o(
							n) ? ze(e) : n ? je(e) : Xe(e), g(e) || (e._d = null), e)
					}

					function Xe(e) {
						var i = e._i;
						a(i) ? e._d = new Date(t.now()) : s(i) ? e._d = new Date(i.valueOf()) : "string" == typeof i ? Ue(e) : o(i) ?
							(e._a = d(i.slice(0), function(e) {
								return parseInt(e, 10)
							}), Ie(e)) : n(i) ? Be(e) : r(i) ? e._d = new Date(i) : t.createFromInputFallback(e)
					}

					function Ke(e, t, a, r, s) {
						var d = {};
						return (!0 === a || !1 === a) && (r = a, a = void 0), (n(e) && i(e) || o(e) && 0 === e.length) && (e = void 0),
							d._isAMomentObject = !0, d._useUTC = d._isUTC = s, d._l = a, d._i = e, d._f = t, d._strict = r, qe(d)
					}

					function Qe(e, t, o, n) {
						return Ke(e, t, o, n, !1)
					}

					function $e(e, t) {
						var n, a;
						if (1 === t.length && o(t[0]) && (t = t[0]), !t.length) return Qe();
						for (n = t[0], a = 1; a < t.length; ++a)(!t[a].isValid() || t[a][e](n)) && (n = t[a]);
						return n
					}

					function Je(e) {
						for (var t in e)
							if (-1 === Eo.call($o, t) || null != e[t] && isNaN(e[t])) return !1;
						for (var o = !1, n = 0; n < $o.length; ++n)
							if (e[$o[n]]) {
								if (o) return !1;
								parseFloat(e[$o[n]]) !== w(e[$o[n]]) && (o = !0)
							} return !0
					}

					function et(e) {
						var t = E(e),
							o = t.year || 0,
							n = t.quarter || 0,
							i = t.month || 0,
							a = t.week || t.isoWeek || 0,
							r = t.day || 0,
							s = t.hour || 0,
							d = t.minute || 0,
							l = t.second || 0,
							p = t.millisecond || 0;
						this._isValid = Je(t), this._milliseconds = +p + 1e3 * l + 6e4 * d + 60 * (60 * (1e3 * s)), this._days = +r +
							7 * a, this._months = +i + 3 * n + 12 * o, this._data = {}, this._locale = Ce(), this._bubble()
					}

					function tt(e) {
						return e instanceof et
					}

					function ot(e) {
						return 0 > e ? -1 * xt(-1 * e) : xt(e)
					}

					function nt(e, t) {
						H(e, 0, 0, function() {
							var e = this.utcOffset(),
								o = "+";
							return 0 > e && (e = -e, o = "-"), o + A(~~(e / 60), 2) + t + A(~~e % 60, 2)
						})
					}

					function it(e, t) {
						var o = (t || "").match(e);
						if (null === o) return null;
						var n = o[o.length - 1] || [],
							i = (n + "").match(Jo) || ["-", 0, 0],
							a = +(60 * i[1]) + w(i[2]);
						return 0 === a ? 0 : "+" === i[0] ? a : -a
					}

					function at(e, o) {
						var n, i;
						return o._isUTC ? (n = o.clone(), i = (b(e) || s(e) ? e.valueOf() : Qe(e).valueOf()) - n.valueOf(), n._d.setTime(
							n._d.valueOf() + i), t.updateOffset(n, !1), n) : Qe(e).local()
					}

					function rt(e) {
						return 15 * -xt(e._d.getTimezoneOffset() / 15)
					}

					function st() {
						return !!this.isValid() && this._isUTC && 0 === this._offset
					}

					function dt(e, t) {
						var o = e,
							n = null,
							i, a, s;
						return tt(e) ? o = {
								ms: e._milliseconds,
								d: e._days,
								M: e._months
							} : r(e) ? (o = {}, t ? o[t] = e : o.milliseconds = e) : (n = en.exec(e)) ? (i = "-" === n[1] ? -1 : 1, o = {
								y: 0,
								d: w(n[2]) * i,
								h: w(n[3]) * i,
								m: w(n[4]) * i,
								s: w(n[5]) * i,
								ms: w(ot(1e3 * n[6])) * i
							}) : (n = tn.exec(e)) ? (i = "-" === n[1] ? -1 : 1, o = {
								y: lt(n[2], i),
								M: lt(n[3], i),
								w: lt(n[4], i),
								d: lt(n[5], i),
								h: lt(n[6], i),
								m: lt(n[7], i),
								s: lt(n[8], i)
							}) : null == o ? o = {} : "object" == typeof o && (("from" in o) || ("to" in o)) && (s = mt(Qe(o.from), Qe(o.to)),
								o = {}, o.ms = s.milliseconds, o.M = s.months), a = new et(o), tt(e) && l(e, "_locale") && (a._locale = e._locale),
							a
					}

					function lt(e, t) {
						var o = e && parseFloat(e.replace(",", "."));
						return (isNaN(o) ? 0 : o) * t
					}

					function pt(e, t) {
						var o = {};
						return o.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(o.months, "M").isAfter(t) &&
							--o.months, o.milliseconds = +t - +e.clone().add(o.months, "M"), o
					}

					function mt(e, t) {
						var o;
						return e.isValid() && t.isValid() ? (t = at(t, e), e.isBefore(t) ? o = pt(e, t) : (o = pt(t, e), o.milliseconds = -
							o.milliseconds, o.months = -o.months), o) : {
							milliseconds: 0,
							months: 0
						}
					}

					function ut(e, t) {
						return function(o, n) {
							var i, a;
							return null === n || isNaN(+n) || (x(t, "moment()." + t +
									"(period, number) is deprecated. Please use moment()." + t +
									"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = o,
								o = n, n = a), o = "string" == typeof o ? +o : o, i = dt(o, n), ct(this, i, e), this
						}
					}

					function ct(e, o, n, i) {
						var a = o._milliseconds,
							r = ot(o._days),
							s = ot(o._months);
						e.isValid() && (i = null == i || i, s && ie(e, Q(e, "Month") + s * n), r && $(e, "Date", Q(e, "Date") + r * n),
							a && e._d.setTime(e._d.valueOf() + a * n), i && t.updateOffset(e, r || s))
					}

					function ht(e, t) {
						var o = 12 * (t.year() - e.year()) + (t.month() - e.month()),
							n = e.clone().add(o, "months"),
							i, a;
						return 0 > t - n ? (i = e.clone().add(o - 1, "months"), a = (t - n) / (n - i)) : (i = e.clone().add(o + 1,
							"months"), a = (t - n) / (i - n)), -(o + a) || 0
					}

					function gt(e) {
						var t;
						return void 0 === e ? this._locale._abbr : (t = Ce(e), null != t && (this._locale = t), this)
					}

					function ft() {
						return this._locale
					}

					function yt(e, t) {
						return (e % t + t) % t
					}

					function _t(e, t, o) {
						return 100 > e && 0 <= e ? new Date(e + 400, t, o) - 12622780800000 : new Date(e, t, o).valueOf()
					}

					function bt(e, t, o) {
						return 100 > e && 0 <= e ? Date.UTC(e + 400, t, o) - 12622780800000 : Date.UTC(e, t, o)
					}

					function vt(e, t) {
						H(0, [e, e.length], 0, t)
					}

					function wt(e, t, o, n, i) {
						var a;
						return null == e ? me(this, n, i).year : (a = ue(e, n, i), t > a && (t = a), kt.call(this, e, t, o, n, i))
					}

					function kt(e, t, o, n, i) {
						var a = pe(e, t, o, n, i),
							r = de(a.year, 0, a.dayOfYear);
						return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
					}

					function St(e, t) {
						t[6] = w(1e3 * ("0." + e))
					}

					function Dt(e) {
						return e
					}

					function Et(e, t, o, n) {
						var i = Ce(),
							a = u().set(n, t);
						return i[o](a, e)
					}

					function It(e, t, o) {
						if (r(e) && (t = e, e = void 0), e = e || "", null != t) return Et(e, t, o, "month");
						var n = [],
							a;
						for (a = 0; 12 > a; a++) n[a] = Et(e, a, o, "month");
						return n
					}

					function Rt(e, t, o, n) {
						"boolean" == typeof e ? (r(t) && (o = t, t = void 0), t = t || "") : (t = e, o = t, e = !1, r(t) && (o = t, t =
							void 0), t = t || "");
						var a = Ce(),
							s = e ? a._week.dow : 0;
						if (null != o) return Et(t, (o + s) % 7, n, "day");
						var d = [],
							l;
						for (l = 0; 7 > l; l++) d[l] = Et(t, (l + s) % 7, n, "day");
						return d
					}

					function At(e, t, o, n) {
						var i = dt(t, o);
						return e._milliseconds += n * i._milliseconds, e._days += n * i._days, e._months += n * i._months, e._bubble()
					}

					function Ht(e) {
						return 0 > e ? Mt(e) : Ct(e)
					}

					function Lt(e) {
						return 4800 * e / 146097
					}

					function Nt(e) {
						return 146097 * e / 4800
					}

					function Ft(e) {
						return function() {
							return this.as(e)
						}
					}

					function Gt(e) {
						return function() {
							return this.isValid() ? this._data[e] : NaN
						}
					}

					function Wt(e, t, o, n, i) {
						return i.relativeTime(t || 1, !!o, e, n)
					}

					function Ut(e, t, o) {
						var n = dt(e).abs(),
							i = Pn(n.as("s")),
							r = Pn(n.as("m")),
							s = Pn(n.as("h")),
							d = Pn(n.as("d")),
							l = Pn(n.as("M")),
							p = Pn(n.as("y")),
							m = i <= Yn.ss && ["s", i] || i < Yn.s && ["ss", i] || 1 >= r && ["m"] || r < Yn.m && ["mm", r] || 1 >= s &&
							["h"] || s < Yn.h && ["hh", s] || 1 >= d && ["d"] || d < Yn.d && ["dd", d] || 1 >= l && ["M"] || l < Yn.M &&
							["MM", l] || 1 >= p && ["y"] || ["yy", p];
						return m[2] = t, m[3] = 0 < +e, m[4] = o, Wt.apply(null, m)
					}

					function jt(e) {
						return void 0 === e ? Pn : "function" == typeof e && (Pn = e, !0)
					}

					function Vt(e) {
						return (0 < e) - (0 > e) || +e
					}

					function zt() {
						if (!this.isValid()) return this.localeData().invalidDate();
						var e = En(this._milliseconds) / 1e3,
							t = En(this._days),
							o = En(this._months),
							n, i, a;
						n = v(e / 60), i = v(n / 60), e %= 60, n %= 60, a = v(o / 12), o %= 12;
						var r = a,
							d = o,
							l = t,
							p = i,
							u = n,
							m = e ? e.toFixed(3).replace(/\.?0+$/, "") : "",
							s = this.asSeconds();
						if (!s) return "P0D";
						var c = 0 > s ? "-" : "",
							h = Vt(this._months) === Vt(s) ? "" : "-",
							g = Vt(this._days) === Vt(s) ? "" : "-",
							f = Vt(this._milliseconds) === Vt(s) ? "" : "-";
						return c + "P" + (r ? h + r + "Y" : "") + (d ? h + d + "M" : "") + (l ? g + l + "D" : "") + (p || u || m ? "T" :
							"") + (p ? f + p + "H" : "") + (u ? f + u + "M" : "") + (m ? f + m + "S" : "")
					}
					var Bt, qt;
					qt = Array.prototype.some ? Array.prototype.some : function(e) {
						for (var o = Object(this), t = o.length >>> 0, n = 0; n < t; n++)
							if ((n in o) && e.call(this, o[n], n, o)) return !0;
						return !1
					};
					var Zt = t.momentProperties = [],
						Xt = !1,
						Kt = {};
					t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
					var Qt = Object.keys ? Object.keys : function(e) {
						var t = [],
							o;
						for (o in e) l(e, o) && t.push(o);
						return t
					};
					var $t = /\d{1,2}/,
						Jt = {},
						eo = {},
						to =
						/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
						oo = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
						no = {},
						io = {},
						ao = /\d/,
						ro = /\d\d/,
						so = /\d{3}/,
						lo = /\d{4}/,
						po = /[+-]?\d{6}/,
						mo = /\d\d?/,
						uo = /\d\d\d\d?/,
						co = /\d\d\d\d\d\d?/,
						ho = /\d{1,3}/,
						go = /\d{1,4}/,
						fo = /[+-]?\d{1,6}/,
						yo = /\d+/,
						_o = /[+-]?\d+/,
						bo = /Z|[+-]\d\d:?\d\d/gi,
						vo = /Z|[+-]\d\d(?::?\d\d)?/gi,
						wo = /[+-]?\d+(\.\d{1,3})?/,
						ko =
						/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
						So = {},
						Do = {},
						xo = 0,
						To = 1,
						Oo = 2,
						Co = 3,
						Mo = 4,
						Po = 5;
					H("Y", 0, 0, function() {
							var e = this.year();
							return 9999 >= e ? "" + e : "+" + e
						}), H(0, ["YY", 2], 0, function() {
							return this.year() % 100
						}), H(0, ["YYYY", 4], 0, "year"), H(0, ["YYYYY", 5], 0, "year"), H(0, ["YYYYYY", 6, !0], 0, "year"), P("year",
							"y"), I("year", 1), W("Y", _o), W("YY", mo, ro), W("YYYY", go, lo), W("YYYYY", fo, po), W("YYYYYY", fo, po),
						z(["YYYYY", "YYYYYY"], xo), z("YYYY", function(e, o) {
							o[xo] = 2 === e.length ? t.parseTwoDigitYear(e) : w(e)
						}), z("YY", function(e, o) {
							o[xo] = t.parseTwoDigitYear(e)
						}), z("Y", function(e, t) {
							t[xo] = parseInt(e, 10)
						}), t.parseTwoDigitYear = function(e) {
							return w(e) + (68 < w(e) ? 1900 : 2e3)
						};
					var Yo = K("FullYear", !0),
						Eo;
					Eo = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
						var t;
						for (t = 0; t < this.length; ++t)
							if (this[t] === e) return t;
						return -1
					}, H("M", ["MM", 2], "Mo", function() {
						return this.month() + 1
					}), H("MMM", 0, 0, function(e) {
						return this.localeData().monthsShort(this, e)
					}), H("MMMM", 0, 0, function(e) {
						return this.localeData().months(this, e)
					}), P("month", "M"), I("month", 8), W("M", mo), W("MM", mo, ro), W("MMM", function(e, t) {
						return t.monthsShortRegex(e)
					}), W("MMMM", function(e, t) {
						return t.monthsRegex(e)
					}), z(["M", "MM"], function(e, t) {
						t[To] = w(e) - 1
					}), z(["MMM", "MMMM"], function(e, t, o, n) {
						var i = o._locale.monthsParse(e, n, o._strict);
						null == i ? h(o).invalidMonth = e : t[To] = i
					});
					var Io = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
						Ro = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
					H("w", ["ww", 2], "wo", "week"), H("W", ["WW", 2], "Wo", "isoWeek"), P("week", "w"), P("isoWeek", "W"), I(
						"week", 5), I("isoWeek", 5), W("w", mo), W("ww", mo, ro), W("W", mo), W("WW", mo, ro), B(["w", "ww", "W",
						"WW"
					], function(e, t, o, n) {
						t[n.substr(0, 1)] = w(e)
					});
					H("d", 0, "do", "day"), H("dd", 0, 0, function(e) {
							return this.localeData().weekdaysMin(this, e)
						}), H("ddd", 0, 0, function(e) {
							return this.localeData().weekdaysShort(this, e)
						}), H("dddd", 0, 0, function(e) {
							return this.localeData().weekdays(this, e)
						}), H("e", 0, 0, "weekday"), H("E", 0, 0, "isoWeekday"), P("day", "d"), P("weekday", "e"), P("isoWeekday", "E"),
						I("day", 11), I("weekday", 11), I("isoWeekday", 11), W("d", mo), W("e", mo), W("E", mo), W("dd", function(e, t) {
							return t.weekdaysMinRegex(e)
						}), W("ddd", function(e, t) {
							return t.weekdaysShortRegex(e)
						}), W("dddd", function(e, t) {
							return t.weekdaysRegex(e)
						}), B(["dd", "ddd", "dddd"], function(e, t, o, n) {
							var i = o._locale.weekdaysParse(e, n, o._strict);
							null == i ? h(o).invalidWeekday = e : t.d = i
						}), B(["d", "e", "E"], function(e, t, o, n) {
							t[n] = w(e)
						});
					var Ao = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
					H("H", ["HH", 2], 0, "hour"), H("h", ["hh", 2], 0, be), H("k", ["kk", 2], 0, function() {
						return this.hours() || 24
					}), H("hmm", 0, 0, function() {
						return "" + be.apply(this) + A(this.minutes(), 2)
					}), H("hmmss", 0, 0, function() {
						return "" + be.apply(this) + A(this.minutes(), 2) + A(this.seconds(), 2)
					}), H("Hmm", 0, 0, function() {
						return "" + this.hours() + A(this.minutes(), 2)
					}), H("Hmmss", 0, 0, function() {
						return "" + this.hours() + A(this.minutes(), 2) + A(this.seconds(), 2)
					}), ve("a", !0), ve("A", !1), P("hour", "h"), I("hour", 13), W("a", we), W("A", we), W("H", mo), W("h", mo), W(
						"k", mo), W("HH", mo, ro), W("hh", mo, ro), W("kk", mo, ro), W("hmm", uo), W("hmmss", co), W("Hmm", uo), W(
						"Hmmss", co), z(["H", "HH"], Co), z(["k", "kk"], function(e, t) {
						var o = w(e);
						t[Co] = 24 === o ? 0 : o
					}), z(["a", "A"], function(e, t, o) {
						o._isPm = o._locale.isPM(e), o._meridiem = e
					}), z(["h", "hh"], function(e, t, o) {
						t[Co] = w(e), h(o).bigHour = !0
					}), z("hmm", function(e, t, o) {
						var n = e.length - 2;
						t[Co] = w(e.substr(0, n)), t[Mo] = w(e.substr(n)), h(o).bigHour = !0
					}), z("hmmss", function(e, t, o) {
						var n = e.length - 4,
							i = e.length - 2;
						t[Co] = w(e.substr(0, n)), t[Mo] = w(e.substr(n, 2)), t[Po] = w(e.substr(i)), h(o).bigHour = !0
					}), z("Hmm", function(e, t) {
						var o = e.length - 2;
						t[Co] = w(e.substr(0, o)), t[Mo] = w(e.substr(o))
					}), z("Hmmss", function(e, t) {
						var o = e.length - 4,
							n = e.length - 2;
						t[Co] = w(e.substr(0, o)), t[Mo] = w(e.substr(o, 2)), t[Po] = w(e.substr(n))
					});
					var Ho = /[ap]\.?m?\.?/i,
						Lo = K("Hours", !0),
						No = {
							calendar: {
								sameDay: "[Today at] LT",
								nextDay: "[Tomorrow at] LT",
								nextWeek: "dddd [at] LT",
								lastDay: "[Yesterday at] LT",
								lastWeek: "[Last] dddd [at] LT",
								sameElse: "L"
							},
							longDateFormat: {
								LTS: "h:mm:ss A",
								LT: "h:mm A",
								L: "MM/DD/YYYY",
								LL: "MMMM D, YYYY",
								LLL: "MMMM D, YYYY h:mm A",
								LLLL: "dddd, MMMM D, YYYY h:mm A"
							},
							invalidDate: "Invalid date",
							ordinal: "%d",
							dayOfMonthOrdinalParse: $t,
							relativeTime: {
								future: "in %s",
								past: "%s ago",
								s: "a few seconds",
								ss: "%d seconds",
								m: "a minute",
								mm: "%d minutes",
								h: "an hour",
								hh: "%d hours",
								d: "a day",
								dd: "%d days",
								M: "a month",
								MM: "%d months",
								y: "a year",
								yy: "%d years"
							},
							months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
								"November", "December"
							],
							monthsShort: Ro,
							week: {
								dow: 0,
								doy: 6
							},
							weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
							weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
							weekdaysShort: Ao,
							meridiemParse: Ho
						},
						Fo = {},
						Go = {},
						Wo =
						/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
						Uo =
						/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
						jo = /Z|[+-]\d\d(?::?\d\d)?/,
						Vo = [
							["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
							["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
							["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
							["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
							["YYYY-DDD", /\d{4}-\d{3}/],
							["YYYY-MM", /\d{4}-\d\d/, !1],
							["YYYYYYMMDD", /[+-]\d{10}/],
							["YYYYMMDD", /\d{8}/],
							["GGGG[W]WWE", /\d{4}W\d{3}/],
							["GGGG[W]WW", /\d{4}W\d{2}/, !1],
							["YYYYDDD", /\d{7}/]
						],
						zo = [
							["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
							["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
							["HH:mm:ss", /\d\d:\d\d:\d\d/],
							["HH:mm", /\d\d:\d\d/],
							["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
							["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
							["HHmmss", /\d\d\d\d\d\d/],
							["HHmm", /\d\d\d\d/],
							["HH", /\d\d/]
						],
						Bo = /^\/?Date\((\-?\d+)/i,
						qo =
						/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
						Zo = {
							UT: 0,
							GMT: 0,
							EDT: -240,
							EST: -300,
							CDT: -300,
							CST: -360,
							MDT: -360,
							MST: -420,
							PDT: -420,
							PST: -480
						},
						Xo;
					t.createFromInputFallback = D(
						"value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
						function(e) {
							e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
						}), t.ISO_8601 = function() {}, t.RFC_2822 = function() {};
					var Ko = D("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
							function() {
								var e = Qe.apply(null, arguments);
								return this.isValid() && e.isValid() ? e < this ? this : e : f()
							}),
						Qo = D("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
							function() {
								var e = Qe.apply(null, arguments);
								return this.isValid() && e.isValid() ? e > this ? this : e : f()
							}),
						$o = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
					nt("Z", ":"), nt("ZZ", ""), W("Z", vo), W("ZZ", vo), z(["Z", "ZZ"], function(e, t, o) {
						o._useUTC = !0, o._tzm = it(vo, e)
					});
					var Jo = /([\+\-]|\d\d)/gi;
					t.updateOffset = function() {};
					var en = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
						tn =
						/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
					dt.fn = et.prototype, dt.invalid = function() {
						return dt(NaN)
					};
					var on = ut(1, "add"),
						nn = ut(-1, "subtract");
					t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
					var an = D(
						"moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
						function(e) {
							return void 0 === e ? this.localeData() : this.locale(e)
						});
					H(0, ["gg", 2], 0, function() {
							return this.weekYear() % 100
						}), H(0, ["GG", 2], 0, function() {
							return this.isoWeekYear() % 100
						}), vt("gggg", "weekYear"), vt("ggggg", "weekYear"), vt("GGGG", "isoWeekYear"), vt("GGGGG", "isoWeekYear"), P(
							"weekYear", "gg"), P("isoWeekYear", "GG"), I("weekYear", 1), I("isoWeekYear", 1), W("G", _o), W("g", _o), W(
							"GG", mo, ro), W("gg", mo, ro), W("GGGG", go, lo), W("gggg", go, lo), W("GGGGG", fo, po), W("ggggg", fo, po),
						B(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, o, n) {
							t[n.substr(0, 2)] = w(e)
						}), B(["gg", "GG"], function(e, o, n, i) {
							o[i] = t.parseTwoDigitYear(e)
						}), H("Q", 0, "Qo", "quarter"), P("quarter", "Q"), I("quarter", 7), W("Q", ao), z("Q", function(e, t) {
							t[To] = 3 * (w(e) - 1)
						}), H("D", ["DD", 2], "Do", "date"), P("date", "D"), I("date", 9), W("D", mo), W("DD", mo, ro), W("Do",
							function(e, t) {
								return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
							}), z(["D", "DD"], Oo), z("Do", function(e, t) {
							t[Oo] = w(e.match(mo)[0])
						});
					var rn = K("Date", !0);
					H("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), P("dayOfYear", "DDD"), I("dayOfYear", 4), W("DDD", ho), W("DDDD",
						so), z(["DDD", "DDDD"], function(e, t, o) {
						o._dayOfYear = w(e)
					}), H("m", ["mm", 2], 0, "minute"), P("minute", "m"), I("minute", 14), W("m", mo), W("mm", mo, ro), z(["m",
						"mm"
					], Mo);
					var sn = K("Minutes", !1);
					H("s", ["ss", 2], 0, "second"), P("second", "s"), I("second", 15), W("s", mo), W("ss", mo, ro), z(["s", "ss"],
						Po);
					var dn = K("Seconds", !1);
					H("S", 0, 0, function() {
						return ~~(this.millisecond() / 100)
					}), H(0, ["SS", 2], 0, function() {
						return ~~(this.millisecond() / 10)
					}), H(0, ["SSS", 3], 0, "millisecond"), H(0, ["SSSS", 4], 0, function() {
						return 10 * this.millisecond()
					}), H(0, ["SSSSS", 5], 0, function() {
						return 100 * this.millisecond()
					}), H(0, ["SSSSSS", 6], 0, function() {
						return 1e3 * this.millisecond()
					}), H(0, ["SSSSSSS", 7], 0, function() {
						return 1e4 * this.millisecond()
					}), H(0, ["SSSSSSSS", 8], 0, function() {
						return 1e5 * this.millisecond()
					}), H(0, ["SSSSSSSSS", 9], 0, function() {
						return 1e6 * this.millisecond()
					}), P("millisecond", "ms"), I("millisecond", 16), W("S", ho, ao), W("SS", ho, ro), W("SSS", ho, so);
					var ln;
					for (ln = "SSSS"; 9 >= ln.length; ln += "S") W(ln, yo);
					for (ln = "S"; 9 >= ln.length; ln += "S") z(ln, St);
					var pn = K("Milliseconds", !1);
					H("z", 0, 0, "zoneAbbr"), H("zz", 0, 0, "zoneName");
					var mn = _.prototype;
					mn.add = on, mn.calendar = function(e, o) {
							var n = e || Qe(),
								i = at(n, this).startOf("day"),
								a = t.calendarFormat(this, i) || "sameElse",
								r = o && (T(o[a]) ? o[a].call(this, n) : o[a]);
							return this.format(r || this.localeData().calendar(a, this, Qe(n)))
						}, mn.clone = function() {
							return new _(this)
						}, mn.diff = function(e, t, o) {
							var n, i, a;
							return this.isValid() ? (n = at(e, this), !n.isValid()) ? NaN : (i = 6e4 * (n.utcOffset() - this.utcOffset()),
								t = Y(t), (a = "year" === t ? ht(this, n) / 12 : "month" === t ? ht(this, n) : "quarter" === t ? ht(this, n) /
									3 : "second" === t ? (this - n) / 1e3 : "minute" === t ? (this - n) / 6e4 : "hour" === t ? (this - n) /
									36e5 : "day" === t ? (this - n - i) / 864e5 : "week" === t ? (this - n - i) / 6048e5 : this - n, o ? a : v(
										a))) : NaN
						}, mn.endOf = function(e) {
							var o;
							if (e = Y(e), void 0 === e || "millisecond" === e || !this.isValid()) return this;
							var n = this._isUTC ? bt : _t;
							return "year" === e ? o = n(this.year() + 1, 0, 1) - 1 : "quarter" === e ? o = n(this.year(), this.month() -
									this.month() % 3 + 3, 1) - 1 : "month" === e ? o = n(this.year(), this.month() + 1, 1) - 1 : "week" === e ?
								o = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1 : "isoWeek" === e ? o = n(this.year(),
									this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1 : "day" === e || "date" === e ? o = n(this.year(),
									this.month(), this.date() + 1) - 1 : "hour" === e ? (o = this._d.valueOf(), o += 3600000 - yt(o + (this._isUTC ?
									0 : 60000 * this.utcOffset()), 3600000) - 1) : "minute" === e ? (o = this._d.valueOf(), o += 60000 - yt(o,
									60000) - 1) : "second" === e ? (o = this._d.valueOf(), o += 1000 - yt(o, 1000) - 1) : void 0, this._d.setTime(
									o), t.updateOffset(this, !0), this
						}, mn.format = function(e) {
							e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
							var o = F(this, e);
							return this.localeData().postformat(o)
						}, mn.from = function(e, t) {
							return this.isValid() && (b(e) && e.isValid() || Qe(e).isValid()) ? dt({
								to: this,
								from: e
							}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
						}, mn.fromNow = function(e) {
							return this.from(Qe(), e)
						}, mn.to = function(e, t) {
							return this.isValid() && (b(e) && e.isValid() || Qe(e).isValid()) ? dt({
								from: this,
								to: e
							}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
						}, mn.toNow = function(e) {
							return this.to(Qe(), e)
						}, mn.get = function(e) {
							return e = Y(e), T(this[e]) ? this[e]() : this
						}, mn.invalidAt = function() {
							return h(this).overflow
						}, mn.isAfter = function(e, t) {
							var o = b(e) ? e : Qe(e);
							return !!(this.isValid() && o.isValid()) && (t = Y(t) || "millisecond", "millisecond" === t ? this.valueOf() >
								o.valueOf() : o.valueOf() < this.clone().startOf(t).valueOf())
						}, mn.isBefore = function(e, t) {
							var o = b(e) ? e : Qe(e);
							return !!(this.isValid() && o.isValid()) && (t = Y(t) || "millisecond", "millisecond" === t ? this.valueOf() <
								o.valueOf() : this.clone().endOf(t).valueOf() < o.valueOf())
						}, mn.isBetween = function(e, t, o, n) {
							var i = b(e) ? e : Qe(e),
								a = b(t) ? t : Qe(t);
							return !!(this.isValid() && i.isValid() && a.isValid()) && (n = n || "()", ("(" === n[0] ? this.isAfter(i, o) :
								!this.isBefore(i, o)) && (")" === n[1] ? this.isBefore(a, o) : !this.isAfter(a, o)))
						}, mn.isSame = function(e, t) {
							var o = b(e) ? e : Qe(e),
								n;
							return !!(this.isValid() && o.isValid()) && (t = Y(t) || "millisecond", "millisecond" === t ? this.valueOf() ===
								o.valueOf() : (n = o.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())
							)
						}, mn.isSameOrAfter = function(e, t) {
							return this.isSame(e, t) || this.isAfter(e, t)
						}, mn.isSameOrBefore = function(e, t) {
							return this.isSame(e, t) || this.isBefore(e, t)
						}, mn.isValid = function() {
							return g(this)
						}, mn.lang = an, mn.locale = gt, mn.localeData = ft, mn.max = Qo, mn.min = Ko, mn.parsingFlags = function() {
							return p({}, h(this))
						}, mn.set = J, mn.startOf = function(e) {
							var o;
							if (e = Y(e), void 0 === e || "millisecond" === e || !this.isValid()) return this;
							var n = this._isUTC ? bt : _t;
							return "year" === e ? o = n(this.year(), 0, 1) : "quarter" === e ? o = n(this.year(), this.month() - this.month() %
									3, 1) : "month" === e ? o = n(this.year(), this.month(), 1) : "week" === e ? o = n(this.year(), this.month(),
									this.date() - this.weekday()) : "isoWeek" === e ? o = n(this.year(), this.month(), this.date() - (this.isoWeekday() -
									1)) : "day" === e || "date" === e ? o = n(this.year(), this.month(), this.date()) : "hour" === e ? (o =
									this._d.valueOf(), o -= yt(o + (this._isUTC ? 0 : 60000 * this.utcOffset()), 3600000)) : "minute" === e ? (
									o = this._d.valueOf(), o -= yt(o, 60000)) : "second" === e ? (o = this._d.valueOf(), o -= yt(o, 1000)) :
								void 0, this._d.setTime(o), t.updateOffset(this, !0), this
						}, mn.subtract = nn, mn.toArray = function() {
							var e = this;
							return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
						}, mn.toObject = function() {
							var e = this;
							return {
								years: e.year(),
								months: e.month(),
								date: e.date(),
								hours: e.hours(),
								minutes: e.minutes(),
								seconds: e.seconds(),
								milliseconds: e.milliseconds()
							}
						}, mn.toDate = function() {
							return new Date(this.valueOf())
						}, mn.toISOString = function(e) {
							if (!this.isValid()) return null;
							var t = !0 !== e,
								o = t ? this.clone().utc() : this;
							return 0 > o.year() || 9999 < o.year() ? F(o, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" :
								"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : T(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(
								this.valueOf() + 1e3 * (60 * this.utcOffset())).toISOString().replace("Z", F(o, "Z")) : F(o, t ?
								"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
						}, mn.inspect = function() {
							if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
							var e = "moment",
								t = "";
							this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
							var o = "[" + e + "(\"]",
								n = 0 <= this.year() && 9999 >= this.year() ? "YYYY" : "YYYYYY",
								i = t + "[\")]";
							return this.format(o + n + "-MM-DD[T]HH:mm:ss.SSS" + i)
						}, mn.toJSON = function() {
							return this.isValid() ? this.toISOString() : null
						}, mn.toString = function() {
							return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
						}, mn.unix = function() {
							return Mt(this.valueOf() / 1e3)
						}, mn.valueOf = function() {
							return this._d.valueOf() - 6e4 * (this._offset || 0)
						}, mn.creationData = function() {
							return {
								input: this._i,
								format: this._f,
								locale: this._locale,
								isUTC: this._isUTC,
								strict: this._strict
							}
						}, mn.year = Yo, mn.isLeapYear = function() {
							return X(this.year())
						}, mn.weekYear = function(e) {
							return wt.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
						}, mn.isoWeekYear = function(e) {
							return wt.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
						}, mn.quarter = mn.quarters = function(e) {
							return null == e ? Ct((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
						}, mn.month = ae, mn.daysInMonth = function() {
							return te(this.year(), this.month())
						}, mn.week = mn.weeks = function(e) {
							var t = this.localeData().week(this);
							return null == e ? t : this.add(7 * (e - t), "d")
						}, mn.isoWeek = mn.isoWeeks = function(e) {
							var t = me(this, 1, 4).week;
							return null == e ? t : this.add(7 * (e - t), "d")
						}, mn.weeksInYear = function() {
							var e = this.localeData()._week;
							return ue(this.year(), e.dow, e.doy)
						}, mn.isoWeeksInYear = function() {
							return ue(this.year(), 1, 4)
						}, mn.date = rn, mn.day = mn.days = function(e) {
							if (!this.isValid()) return null == e ? NaN : this;
							var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
							return null == e ? t : (e = ce(e, this.localeData()), this.add(e - t, "d"))
						}, mn.weekday = function(e) {
							if (!this.isValid()) return null == e ? NaN : this;
							var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
							return null == e ? t : this.add(e - t, "d")
						}, mn.isoWeekday = function(e) {
							if (!this.isValid()) return null == e ? NaN : this;
							if (null != e) {
								var t = he(e, this.localeData());
								return this.day(this.day() % 7 ? t : t - 7)
							}
							return this.day() || 7
						}, mn.dayOfYear = function(e) {
							var t = xt((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
							return null == e ? t : this.add(e - t, "d")
						}, mn.hour = mn.hours = Lo, mn.minute = mn.minutes = sn, mn.second = mn.seconds = dn, mn.millisecond = mn.milliseconds =
						pn, mn.utcOffset = function(e, o, n) {
							var i = this._offset || 0,
								a;
							if (!this.isValid()) return null == e ? NaN : this;
							if (null != e) {
								if ("string" != typeof e) 16 > Ot(e) && !n && (e *= 60);
								else if (e = it(vo, e), null === e) return this;
								return !this._isUTC && o && (a = rt(this)), this._offset = e, this._isUTC = !0, null != a && this.add(a, "m"),
									i !== e && (!o || this._changeInProgress ? ct(this, dt(e - i, "m"), 1, !1) : !this._changeInProgress && (
										this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
							}
							return this._isUTC ? i : rt(this)
						}, mn.utc = function(e) {
							return this.utcOffset(0, e)
						}, mn.local = function(e) {
							return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(rt(this), "m")), this
						}, mn.parseZone = function() {
							if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
							else if ("string" == typeof this._i) {
								var e = it(bo, this._i);
								null == e ? this.utcOffset(0, !0) : this.utcOffset(e)
							}
							return this
						}, mn.hasAlignedHourOffset = function(e) {
							return !!this.isValid() && (e = e ? Qe(e).utcOffset() : 0, 0 == (this.utcOffset() - e) % 60)
						}, mn.isDST = function() {
							return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
						}, mn.isLocal = function() {
							return !!this.isValid() && !this._isUTC
						}, mn.isUtcOffset = function() {
							return !!this.isValid() && this._isUTC
						}, mn.isUtc = st, mn.isUTC = st, mn.zoneAbbr = function() {
							return this._isUTC ? "UTC" : ""
						}, mn.zoneName = function() {
							return this._isUTC ? "Coordinated Universal Time" : ""
						}, mn.dates = D("dates accessor is deprecated. Use date instead.", rn), mn.months = D(
							"months accessor is deprecated. Use month instead", ae), mn.years = D(
							"years accessor is deprecated. Use year instead", Yo), mn.zone = D(
							"moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
							function(e, t) {
								return null == e ? -this.utcOffset() : ("string" != typeof e && (e = -e), this.utcOffset(e, t), this)
							}), mn.isDSTShifted = D(
							"isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
							function() {
								if (!a(this._isDSTShifted)) return this._isDSTShifted;
								var e = {};
								if (y(e, this), e = Ze(e), e._a) {
									var t = e._isUTC ? u(e._a) : Qe(e._a);
									this._isDSTShifted = this.isValid() && 0 < k(e._a, t.toArray())
								} else this._isDSTShifted = !1;
								return this._isDSTShifted
							});
					var un = M.prototype;
					un.calendar = function(e, t, o) {
						var n = this._calendar[e] || this._calendar.sameElse;
						return T(n) ? n.call(t, o) : n
					}, un.longDateFormat = function(e) {
						var t = this._longDateFormat[e],
							o = this._longDateFormat[e.toUpperCase()];
						return t || !o ? t : (this._longDateFormat[e] = o.replace(/MMMM|MM|DD|dddd/g, function(e) {
							return e.slice(1)
						}), this._longDateFormat[e])
					}, un.invalidDate = function() {
						return this._invalidDate
					}, un.ordinal = function(e) {
						return this._ordinal.replace("%d", e)
					}, un.preparse = Dt, un.postformat = Dt, un.relativeTime = function(e, t, o, n) {
						var i = this._relativeTime[o];
						return T(i) ? i(e, t, o, n) : i.replace(/%d/i, e)
					}, un.pastFuture = function(e, t) {
						var o = this._relativeTime[0 < e ? "future" : "past"];
						return T(o) ? o(t) : o.replace(/%s/i, t)
					}, un.set = O, un.months = function(e, t) {
						return e ? o(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Io).test(t) ?
							"format" : "standalone"][e.month()] : o(this._months) ? this._months : this._months.standalone
					}, un.monthsShort = function(e, t) {
						return e ? o(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Io.test(t) ? "format" :
							"standalone"][e.month()] : o(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
					}, un.monthsParse = ne, un.monthsRegex = function(e) {
						return this._monthsParseExact ? (l(this, "_monthsRegex") || re.call(this), e ? this._monthsStrictRegex : this
							._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = ko), this._monthsStrictRegex && e ? this._monthsStrictRegex :
							this._monthsRegex)
					}, un.monthsShortRegex = function(e) {
						return this._monthsParseExact ? (l(this, "_monthsRegex") || re.call(this), e ? this._monthsShortStrictRegex :
							this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = ko), this._monthsShortStrictRegex &&
							e ? this._monthsShortStrictRegex : this._monthsShortRegex)
					}, un.week = function(e) {
						return me(e, this._week.dow, this._week.doy).week
					}, un.firstDayOfYear = function() {
						return this._week.doy
					}, un.firstDayOfWeek = function() {
						return this._week.dow
					}, un.weekdays = function(e, t) {
						var n = o(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ?
							"format" : "standalone"];
						return !0 === e ? ge(n, this._week.dow) : e ? n[e.day()] : n
					}, un.weekdaysMin = function(e) {
						return !0 === e ? ge(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
					}, un.weekdaysShort = function(e) {
						return !0 === e ? ge(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
					}, un.weekdaysParse = ye, un.weekdaysRegex = function(e) {
						return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || _e.call(this), e ? this._weekdaysStrictRegex :
							this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = ko), this._weekdaysStrictRegex &&
							e ? this._weekdaysStrictRegex : this._weekdaysRegex)
					}, un.weekdaysShortRegex = function(e) {
						return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || _e.call(this), e ? this._weekdaysShortStrictRegex :
							this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ko), this._weekdaysShortStrictRegex &&
							e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
					}, un.weekdaysMinRegex = function(e) {
						return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || _e.call(this), e ? this._weekdaysMinStrictRegex :
							this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ko), this._weekdaysMinStrictRegex &&
							e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
					}, un.isPM = function(e) {
						return "p" === (e + "").toLowerCase().charAt(0)
					}, un.meridiem = function(e, t, o) {
						return 11 < e ? o ? "pm" : "PM" : o ? "am" : "AM"
					}, Te("en", {
						dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
						ordinal: function(e) {
							var t = e % 10,
								o = 1 === w(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th";
							return e + o
						}
					}), t.lang = D("moment.lang is deprecated. Use moment.locale instead.", Te), t.langData = D(
						"moment.langData is deprecated. Use moment.localeData instead.", Ce);
					var cn = Ot,
						hn = Ft("ms"),
						gn = Ft("s"),
						fn = Ft("m"),
						yn = Ft("h"),
						_n = Ft("d"),
						bn = Ft("w"),
						vn = Ft("M"),
						wn = Ft("Q"),
						kn = Ft("y"),
						Sn = Gt("milliseconds"),
						Dn = Gt("seconds"),
						xn = Gt("minutes"),
						Tn = Gt("hours"),
						On = Gt("days"),
						Cn = Gt("months"),
						Mn = Gt("years"),
						Pn = xt,
						Yn = {
							ss: 44,
							s: 45,
							m: 45,
							h: 22,
							d: 26,
							M: 11
						},
						En = Ot,
						In = et.prototype;
					return In.isValid = function() {
							return this._isValid
						}, In.abs = function() {
							var e = this._data;
							return this._milliseconds = cn(this._milliseconds), this._days = cn(this._days), this._months = cn(this._months),
								e.milliseconds = cn(e.milliseconds), e.seconds = cn(e.seconds), e.minutes = cn(e.minutes), e.hours = cn(e.hours),
								e.months = cn(e.months), e.years = cn(e.years), this
						}, In.add = function(e, t) {
							return At(this, e, t, 1)
						}, In.subtract = function(e, t) {
							return At(this, e, t, -1)
						}, In.as = function(e) {
							if (!this.isValid()) return NaN;
							var t = this._milliseconds,
								o, n;
							if (e = Y(e), "month" === e || "quarter" === e || "year" === e) switch (o = this._days + t / 864e5, n = this._months +
								Lt(o), e) {
								case "month":
									return n;
								case "quarter":
									return n / 3;
								case "year":
									return n / 12;
							} else switch (o = this._days + xt(Nt(this._months)), e) {
								case "week":
									return o / 7 + t / 6048e5;
								case "day":
									return o + t / 864e5;
								case "hour":
									return 24 * o + t / 36e5;
								case "minute":
									return 1440 * o + t / 6e4;
								case "second":
									return 86400 * o + t / 1e3;
								case "millisecond":
									return Mt(864e5 * o) + t;
								default:
									throw new Error("Unknown unit " + e);
							}
						}, In.asMilliseconds = hn, In.asSeconds = gn, In.asMinutes = fn, In.asHours = yn, In.asDays = _n, In.asWeeks =
						bn, In.asMonths = vn, In.asQuarters = wn, In.asYears = kn, In.valueOf = function() {
							return this.isValid() ? this._milliseconds + 864e5 * this._days + 2592e6 * (this._months % 12) + 31536e6 * w(
								this._months / 12) : NaN
						}, In._bubble = function() {
							var e = this._milliseconds,
								t = this._days,
								o = this._months,
								n = this._data,
								i, a, r, s, d;
							return 0 <= e && 0 <= t && 0 <= o || 0 >= e && 0 >= t && 0 >= o || (e += 864e5 * Ht(Nt(o) + t), t = 0, o = 0),
								n.milliseconds = e % 1e3, i = v(e / 1e3), n.seconds = i % 60, a = v(i / 60), n.minutes = a % 60, r = v(a /
									60), n.hours = r % 24, t += v(r / 24), d = v(Lt(t)), o += d, t -= Ht(Nt(d)), s = v(o / 12), o %= 12, n.days =
								t, n.months = o, n.years = s, this
						}, In.clone = function() {
							return dt(this)
						}, In.get = function(e) {
							return e = Y(e), this.isValid() ? this[e + "s"]() : NaN
						}, In.milliseconds = Sn, In.seconds = Dn, In.minutes = xn, In.hours = Tn, In.days = On, In.weeks = function() {
							return v(this.days() / 7)
						}, In.months = Cn, In.years = Mn, In.humanize = function(e) {
							if (!this.isValid()) return this.localeData().invalidDate();
							var t = this.localeData(),
								o = Ut(this, !e, t);
							return e && (o = t.pastFuture(+this, o)), t.postformat(o)
						}, In.toISOString = zt, In.toString = zt, In.toJSON = zt, In.locale = gt, In.localeData = ft, In.toIsoString =
						D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", zt), In.lang = an, H(
							"X", 0, 0, "unix"), H("x", 0, 0, "valueOf"), W("x", _o), W("X", wo), z("X", function(e, t, o) {
							o._d = new Date(1e3 * parseFloat(e, 10))
						}), z("x", function(e, t, o) {
							o._d = new Date(w(e))
						}), t.version = "2.24.0",
						function(e) {
							Bt = e
						}(Qe), t.fn = mn, t.min = function() {
							var e = [].slice.call(arguments, 0);
							return $e("isBefore", e)
						}, t.max = function() {
							var e = [].slice.call(arguments, 0);
							return $e("isAfter", e)
						}, t.now = function() {
							return Date.now ? Date.now() : +new Date
						}, t.utc = u, t.unix = function(e) {
							return Qe(1e3 * e)
						}, t.months = function(e, t) {
							return It(e, t, "months")
						}, t.isDate = s, t.locale = Te, t.invalid = f, t.duration = dt, t.isMoment = b, t.weekdays = function(e, t, o) {
							return Rt(e, t, o, "weekdays")
						}, t.parseZone = function() {
							return Qe.apply(null, arguments).parseZone()
						}, t.localeData = Ce, t.isDuration = tt, t.monthsShort = function(e, t) {
							return It(e, t, "monthsShort")
						}, t.weekdaysMin = function(e, t, o) {
							return Rt(e, t, o, "weekdaysMin")
						}, t.defineLocale = Oe, t.updateLocale = function(e, t) {
							if (null != t) {
								var o = No,
									n, i;
								i = De(e), null != i && (o = i._config), t = C(o, t), n = new M(t), n.parentLocale = Fo[e], Fo[e] = n, Te(e)
							} else null != Fo[e] && (null == Fo[e].parentLocale ? null != Fo[e] && delete Fo[e] : Fo[e] = Fo[e].parentLocale);
							return Fo[e]
						}, t.locales = Me, t.weekdaysShort = function(e, t, o) {
							return Rt(e, t, o, "weekdaysShort")
						}, t.normalizeUnits = Y, t.relativeTimeRounding = jt, t.relativeTimeThreshold = function(e, t) {
							return void 0 !== Yn[e] && (void 0 === t ? Yn[e] : (Yn[e] = t, "s" === e && (Yn.ss = t - 1), !0))
						}, t.calendarFormat = function(e, t) {
							var o = e.diff(t, "days", !0);
							return -6 > o ? "sameElse" : -1 > o ? "lastWeek" : 0 > o ? "lastDay" : 1 > o ? "sameDay" : 2 > o ? "nextDay" :
								7 > o ? "nextWeek" : "sameElse"
						}, t.prototype = mn, t.HTML5_FMT = {
							DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
							DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
							DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
							DATE: "YYYY-MM-DD",
							TIME: "HH:mm",
							TIME_SECONDS: "HH:mm:ss",
							TIME_MS: "HH:mm:ss.SSS",
							WEEK: "GGGG-[W]WW",
							MONTH: "YYYY-MM"
						}, t
				})
			}), Eo = [], Io = 0; 256 > Io; Io++) Eo[Io] = (Io + 256).toString(16).substr(1);
	for (var Ro = function() {
			if ("undefined" != typeof crypto && crypto.getRandomValues) {
				var e = new Uint8Array(16);
				return function() {
					return crypto.getRandomValues(e), e
				}
			}
			var t = Array(16);
			return function() {
				for (var e = 0, o; 16 > e; e++) 0 == (3 & e) && (o = 4294967296 * Math.random()), t[e] = 255 & o >>> ((3 & e) <<
					3);
				return t
			}
		}(), Ao = [], Ho = 0; 256 > Ho; Ho++) Ao[Ho] = (Ho + 256).toString(16).substr(1);
	var Lo = Ro(),
		No = [1 | Lo[0], Lo[1], Lo[2], Lo[3], Lo[4], Lo[5]],
		Fo = 16383 & (Lo[6] << 8 | Lo[7]),
		Go = /^\/?Date\((-?\d+)/i,
		Wo = function() {
			function e(t) {
				go(this, e), this._queue = [], this._timeout = null, this._extended = null, this.delay = null, this.max = 1 / 0,
					this.setOptions(t)
			}
			return fo(e, [{
				key: "setOptions",
				value: function(e) {
					e && "undefined" != typeof e.delay && (this.delay = e.delay), e && "undefined" != typeof e.max && (this.max =
						e.max), this._flushIfNeeded()
				}
			}, {
				key: "destroy",
				value: function() {
					if (this.flush(), this._extended) {
						for (var e = this._extended.object, t = this._extended.methods, o = 0, n; o < t.length; o++) n = t[o], n.original ?
							e[n.name] = n.original : delete e[n.name];
						this._extended = null
					}
				}
			}, {
				key: "replace",
				value: function(e, t) {
					var o = this,
						n = e[t];
					if (!n) throw new Error("Method " + t + " undefined");
					e[t] = function() {
						for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
						o.queue({
							args: t,
							fn: n,
							context: this
						})
					}
				}
			}, {
				key: "queue",
				value: function(e) {
					"function" == typeof e ? this._queue.push({
						fn: e
					}) : this._queue.push(e), this._flushIfNeeded()
				}
			}, {
				key: "_flushIfNeeded",
				value: function() {
					var e = this;
					this._queue.length > this.max && this.flush(), null != this._timeout && (clearTimeout(this._timeout), this._timeout =
						null), 0 < this.queue.length && "number" == typeof this.delay && (this._timeout = setTimeout(function() {
						e.flush()
					}, this.delay))
				}
			}, {
				key: "flush",
				value: function() {
					this._queue.splice(0).forEach(function(e) {
						e.fn.apply(e.context || e.fn, e.args || [])
					})
				}
			}], [{
				key: "extend",
				value: function(t, o) {
					var n = new e(o);
					if (void 0 !== t.flush) throw new Error("Target object already has a property flush");
					t.flush = function() {
						n.flush()
					};
					var a = [{
						name: "flush",
						original: void 0
					}];
					if (o && o.replace)
						for (var r = 0, s; r < o.replace.length; r++) s = o.replace[r], a.push({
							name: s,
							original: t[s]
						}), n.replace(t, s);
					return n._extended = {
						object: t,
						methods: a
					}, n
				}
			}]), e
		}(),
		Uo = function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance")
		},
		jo = function(e) {
			return Ie(e) || Re(e) || Uo()
		},
		Vo = function() {
			function e() {
				go(this, e), this._subscribers = {
					"*": [],
					add: [],
					remove: [],
					update: []
				}, this.subscribe = e.prototype.on, this.unsubscribe = e.prototype.off
			}
			return fo(e, [{
				key: "_trigger",
				value: function(e, t, o) {
					if ("*" === e) throw new Error("Cannot trigger event *");
					for (var n = [].concat(jo(this._subscribers[e]), jo(this._subscribers["*"])), a = 0, r = n.length, s; a < r; a++)
						s = n[a], s.callback && s.callback(e, t, null == o ? null : o)
				}
			}, {
				key: "on",
				value: function(e, t) {
					this._subscribers[e].push({
						callback: t
					})
				}
			}, {
				key: "off",
				value: function(e, t) {
					this._subscribers[e] = this._subscribers[e].filter(function(e) {
						return e.callback !== t
					})
				}
			}]), e
		}(),
		zo = function(e) {
			function t(e, o) {
				var n;
				if (go(this, t), n = _o(this, bo(t).call(this)), e && !Array.isArray(e) && (o = e, e = []), n._options = o || {},
					n._data = Object.create({}), n.length = 0, n._idProp = n._options.fieldId || "id", n._type = {}, n._options.type)
					for (var a = Object.keys(n._options.type), r = 0, s = a.length; r < s; r++) {
						var d = a[r],
							l = n._options.type[d];
						n._type[d] = "Date" == l || "ISODate" == l || "ASPDate" == l ? "Date" : l
					}
				return e && e.length && n.add(e), n.setOptions(o), n
			}
			return wo(t, e), fo(t, [{
				key: "setOptions",
				value: function(e) {
					e && void 0 !== e.queue && (!1 === e.queue ? this._queue && (this._queue.destroy(), delete this._queue) : (!
						this._queue && (this._queue = Wo.extend(this, {
							replace: ["add", "update", "remove"]
						})), e.queue && "object" === ho(e.queue) && this._queue.setOptions(e.queue)))
				}
			}, {
				key: "add",
				value: function(e, t) {
					var o = [],
						n;
					if (Array.isArray(e))
						for (var a = 0, r = e.length; a < r; a++) n = this._addItem(e[a]), o.push(n);
					else if (e && "object" === ho(e)) n = this._addItem(e), o.push(n);
					else throw new Error("Unknown dataType");
					return o.length && this._trigger("add", {
						items: o
					}, t), o
				}
			}, {
				key: "update",
				value: function(e, t) {
					var o = this,
						n = [],
						a = [],
						r = [],
						s = [],
						d = this._idProp,
						l = function(e) {
							var t = e[d];
							if (null != t && o._data[t]) {
								var i = e,
									l = Object.assign({}, o._data[t]),
									p = o._updateItem(i);
								a.push(p), s.push(i), r.push(l)
							} else {
								var m = o._addItem(e);
								n.push(m)
							}
						};
					if (Array.isArray(e))
						for (var p = 0, m = e.length; p < m; p++) e[p] && "object" === ho(e[p]) ? l(e[p]) : console.warn(
							"Ignoring input item, which is not an object at index " + p);
					else if (e && "object" === ho(e)) l(e);
					else throw new Error("Unknown dataType");
					if (n.length && this._trigger("add", {
							items: n
						}, t), a.length) {
						this._trigger("update", {
							items: a,
							oldData: r,
							data: s
						}, t)
					}
					return n.concat(a)
				}
			}, {
				key: "get",
				value: function(e, t) {
					var o = void 0,
						n = void 0,
						a = void 0;
					Ee(e) ? (o = e, a = t) : Array.isArray(e) ? (n = e, a = t) : a = e;
					var r = a && "Object" === a.returnType ? "Object" : "Array",
						s = a && a.type || this._options.type,
						d = a && a.filter,
						l = [],
						p = null,
						m = null,
						u = null;
					if (null != o) p = this._getItem(o, s), p && d && !d(p) && (p = null);
					else if (null != n)
						for (var c = 0, h = n.length; c < h; c++) p = this._getItem(n[c], s), null != p && (!d || d(p)) && l.push(p);
					else {
						m = Object.keys(this._data);
						for (var g = 0, f = m.length; g < f; g++) u = m[g], p = this._getItem(u, s), null != p && (!d || d(p)) && l.push(
							p)
					}
					if (a && a.order && null == o && this._sort(l, a.order), a && a.fields) {
						var y = a.fields;
						if (null != o && null != p) p = this._filterFields(p, y);
						else
							for (var _ = 0, b = l.length; _ < b; _++) l[_] = this._filterFields(l[_], y)
					}
					if ("Object" == r) {
						for (var v = {}, w = 0, k = l.length; w < k; w++) {
							var S = l[w],
								D = S[this._idProp];
							v[D] = S
						}
						return v
					}
					return null == o ? l : p
				}
			}, {
				key: "getIds",
				value: function(e) {
					var t = this._data,
						o = e && e.filter,
						n = e && e.order,
						a = e && e.type || this._options.type,
						r = Object.keys(t),
						s = [],
						d, l;
					if (o) {
						if (n) {
							l = [];
							for (var p = 0, m = r.length, u; p < m; p++) u = r[p], d = this._getItem(u, a), o(d) && l.push(d);
							this._sort(l, n);
							for (var c = 0, h = l.length; c < h; c++) s.push(l[c][this._idProp])
						} else
							for (var g = 0, f = r.length, y; g < f; g++) y = r[g], d = this._getItem(y, a), o(d) && s.push(d[this._idProp]);
					} else if (n) {
						l = [];
						for (var _ = 0, b = r.length, v; _ < b; _++) v = r[_], l.push(t[v]);
						this._sort(l, n);
						for (var w = 0, k = l.length; w < k; w++) s.push(l[w][this._idProp])
					} else
						for (var S = 0, D = r.length, x; S < D; S++) x = r[S], d = t[x], s.push(d[this._idProp]);
					return s
				}
			}, {
				key: "getDataSet",
				value: function() {
					return this
				}
			}, {
				key: "forEach",
				value: function(e, t) {
					var o = t && t.filter,
						n = t && t.type || this._options.type,
						a = this._data,
						r = Object.keys(a);
					if (t && t.order)
						for (var s = this.get(t), d = 0, l = s.length; d < l; d++) {
							var p = s[d],
								m = p[this._idProp];
							e(p, m)
						} else
							for (var u = 0, c = r.length; u < c; u++) {
								var h = r[u],
									g = this._getItem(h, n);
								(!o || o(g)) && e(g, h)
							}
				}
			}, {
				key: "map",
				value: function(e, t) {
					for (var o = t && t.filter, n = t && t.type || this._options.type, a = [], r = this._data, s = Object.keys(r),
							d = 0, l = s.length; d < l; d++) {
						var p = s[d],
							m = this._getItem(p, n);
						(!o || o(m)) && a.push(e(m, p))
					}
					return t && t.order && this._sort(a, t.order), a
				}
			}, {
				key: "_filterFields",
				value: function(e, t) {
					return e ? (Array.isArray(t) ? t : Object.keys(t)).reduce(function(t, o) {
						return t[o] = e[o], t
					}, {}) : e
				}
			}, {
				key: "_sort",
				value: function(e, t) {
					if ("string" == typeof t) {
						var o = t;
						e.sort(function(e, t) {
							var n = e[o],
								i = t[o];
							return n > i ? 1 : n < i ? -1 : 0
						})
					} else if ("function" == typeof t) e.sort(t);
					else throw new TypeError("Order must be a function or a string")
				}
			}, {
				key: "remove",
				value: function(e, t) {
					for (var o = [], n = [], a = Array.isArray(e) ? e : [e], r = 0, s = a.length, d; r < s; r++)
						if (d = this._remove(a[r]), d) {
							var l = d[this._idProp];
							null != l && (o.push(l), n.push(d))
						} return o.length && this._trigger("remove", {
						items: o,
						oldData: n
					}, t), o
				}
			}, {
				key: "_remove",
				value: function(e) {
					var t;
					if (Ee(e) ? t = e : e && "object" === ho(e) && (t = e[this._idProp]), null != t && this._data[t]) {
						var o = this._data[t];
						return delete this._data[t], --this.length, o
					}
					return null
				}
			}, {
				key: "clear",
				value: function(e) {
					for (var t = Object.keys(this._data), o = [], n = 0, a = t.length; n < a; n++) o.push(this._data[t[n]]);
					return this._data = {}, this.length = 0, this._trigger("remove", {
						items: t,
						oldData: o
					}, e), t
				}
			}, {
				key: "max",
				value: function e(t) {
					for (var o = this._data, n = Object.keys(o), e = null, a = null, r = 0, s = n.length; r < s; r++) {
						var d = n[r],
							l = o[d],
							p = l[t];
						null != p && (null == a || p > a) && (e = l, a = p)
					}
					return e
				}
			}, {
				key: "min",
				value: function e(t) {
					for (var o = this._data, n = Object.keys(o), e = null, a = null, r = 0, s = n.length; r < s; r++) {
						var d = n[r],
							l = o[d],
							p = l[t];
						null != p && (null == a || p < a) && (e = l, a = p)
					}
					return e
				}
			}, {
				key: "distinct",
				value: function(e) {
					for (var t = this._data, o = Object.keys(t), n = [], a = this._options.type && this._options.type[e] || null,
							r = 0, s = 0, d = o.length; s < d; s++) {
						for (var l = o[s], p = t[l], m = p[e], u = !1, c = 0; c < r; c++)
							if (n[c] == m) {
								u = !0;
								break
							} u || void 0 === m || (n[r] = m, r++)
					}
					if (a)
						for (var h = 0, g = n.length; h < g; h++) n[h] = Pe(n[h], a);
					return n
				}
			}, {
				key: "_addItem",
				value: function(e) {
					var t = e[this._idProp];
					if (null == t) t = Se(), e[this._idProp] = t;
					else if (this._data[t]) throw new Error("Cannot add item: item with id " + t + " already exists");
					for (var o = {}, n = Object.keys(e), a = 0, r = n.length; a < r; a++) {
						var s = n[a],
							d = this._type[s];
						o[s] = Pe(e[s], d)
					}
					return this._data[t] = o, this.length++, t
				}
			}, {
				key: "_getItem",
				value: function(e, t) {
					var o = this._data[e];
					if (!o) return null;
					var n = Object.keys(o),
						a;
					if (t) {
						a = {};
						for (var r = 0, s = n.length; r < s; r++) {
							var d = n[r],
								l = o[d];
							a[d] = Pe(l, t[d])
						}
					} else a = He({}, o);
					return null == a[this._idProp] && (a[this._idProp] = o.id), a
				}
			}, {
				key: "_updateItem",
				value: function(e) {
					var t = e[this._idProp];
					if (null == t) throw new Error("Cannot update item: item has no id (item: " + JSON.stringify(e) + ")");
					var o = this._data[t];
					if (!o) throw new Error("Cannot update item: no item with id " + t + " found");
					for (var n = Object.keys(e), a = 0, r = n.length; a < r; a++) {
						var s = n[a],
							d = this._type[s];
						o[s] = Pe(e[s], d)
					}
					return t
				}
			}]), t
		}(Vo),
		Bo = function(e) {
			function t(e, o) {
				var n;
				return go(this, t), n = _o(this, bo(t).call(this)), n.length = 0, n._ids = {}, n._options = o || {}, n.listener =
					n._onEvent.bind(yo(n)), n.setData(e), n
			}
			return wo(t, e), fo(t, [{
				key: "setData",
				value: function(e) {
					if (this._data) {
						this._data.off && this._data.off("*", this.listener);
						var t = this._data.getIds({
								filter: this._options.filter
							}),
							o = this._data.get(t);
						this._ids = {}, this.length = 0, this._trigger("remove", {
							items: t,
							oldData: o
						})
					}
					if (null != e) {
						this._data = e;
						for (var n = this._data.getIds({
								filter: this._options.filter
							}), a = 0, r = n.length, s; a < r; a++) s = n[a], this._ids[s] = !0;
						this.length = n.length, this._trigger("add", {
							items: n
						})
					} else this._data = new zo;
					this._data.on && this._data.on("*", this.listener)
				}
			}, {
				key: "refresh",
				value: function() {
					for (var e = this._data.getIds({
							filter: this._options.filter
						}), t = Object.keys(this._ids), o = {}, n = [], a = [], r = [], s = 0, d = e.length, l; s < d; s++) l = e[s],
						o[l] = !0, this._ids[l] || (n.push(l), this._ids[l] = !0);
					for (var p = 0, m = t.length; p < m; p++) {
						var u = t[p],
							c = this._data.get(u);
						null == c ? console.error("If you see this, report it please.") : !o[u] && (a.push(u), r.push(c), delete this
							._ids[u])
					}
					this.length += n.length - a.length, n.length && this._trigger("add", {
						items: n
					}), a.length && this._trigger("remove", {
						items: a,
						oldData: r
					})
				}
			}, {
				key: "get",
				value: function(e, t) {
					if (null == this._data) return null;
					var o = null,
						n;
					Ee(e) || Array.isArray(e) ? (o = e, n = t) : n = e;
					var i = Object.assign({}, this._options, n),
						a = this._options.filter,
						r = n && n.filter;
					return a && r && (i.filter = function(e) {
						return a(e) && r(e)
					}), null == o ? this._data.get(i) : this._data.get(o, i)
				}
			}, {
				key: "getIds",
				value: function(e) {
					if (this._data.length) {
						var t = this._options.filter,
							o = null == e ? null : e.filter,
							n;
						return n = o ? t ? function(e) {
							return t(e) && o(e)
						} : o : t, this._data.getIds({
							filter: n,
							order: e && e.order
						})
					}
					return []
				}
			}, {
				key: "forEach",
				value: function(e, t) {
					if (this._data) {
						var o = this._options.filter,
							n = t && t.filter,
							i;
						i = n ? o ? function(e) {
							return o(e) && n(e)
						} : n : o, this._data.forEach(e, {
							filter: i,
							order: t && t.order
						})
					}
				}
			}, {
				key: "map",
				value: function(e, t) {
					if (this._data) {
						var o = this._options.filter,
							n = t && t.filter,
							i;
						return i = n ? o ? function(e) {
							return o(e) && n(e)
						} : n : o, this._data.map(e, {
							filter: i,
							order: t && t.order
						})
					}
					return []
				}
			}, {
				key: "getDataSet",
				value: function() {
					return this._data.getDataSet()
				}
			}, {
				key: "_onEvent",
				value: function(e, t, o) {
					if (t && t.items && this._data) {
						var n = t.items,
							a = [],
							r = [],
							s = [],
							d = [],
							l = [],
							p = [];
						switch (e) {
							case "add":
								for (var m = 0, u = n.length; m < u; m++) {
									var c = n[m],
										h = this.get(c);
									h && (this._ids[c] = !0, a.push(c))
								}
								break;
							case "update":
								for (var g = 0, f = n.length; g < f; g++) {
									var y = n[g],
										_ = this.get(y);
									_ ? this._ids[y] ? (r.push(y), l.push(t.data[g]), d.push(t.oldData[g])) : (this._ids[y] = !0, a.push(y)) :
										this._ids[y] && (delete this._ids[y], s.push(y), p.push(t.oldData[g]))
								}
								break;
							case "remove":
								for (var b = 0, v = n.length, w; b < v; b++) w = n[b], this._ids[w] && (delete this._ids[w], s.push(w), p.push(
									t.oldData[b]));
						}
						this.length += a.length - s.length, a.length && this._trigger("add", {
							items: a
						}, o), r.length && this._trigger("update", {
							items: r,
							oldData: d,
							data: l
						}, o), s.length && this._trigger("remove", {
							items: s,
							oldData: p
						}, o)
					}
				}
			}]), t
		}(Vo),
		qo = Object.freeze({
			default: {
				DataSet: zo,
				DataView: Bo,
				Queue: Wo
			},
			DataSet: zo,
			DataView: Bo,
			Queue: Wo
		}),
		Zo = ue(function(e) {
			(function(t, o) {
				e.exports = o()
			})(no, function() {
				function t() {
					return Bt.apply(null, arguments)
				}

				function o(e) {
					return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
				}

				function n(e) {
					return null != e && "[object Object]" === Object.prototype.toString.call(e)
				}

				function i(e) {
					if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
					for (var t in e)
						if (e.hasOwnProperty(t)) return !1;
					return !0
				}

				function a(e) {
					return void 0 === e
				}

				function r(e) {
					return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
				}

				function s(e) {
					return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
				}

				function d(e, t) {
					var o = [],
						n;
					for (n = 0; n < e.length; ++n) o.push(t(e[n], n));
					return o
				}

				function l(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}

				function p(e, t) {
					for (var o in t) l(t, o) && (e[o] = t[o]);
					return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), e
				}

				function u(e, t, o, n) {
					return Ke(e, t, o, n, !0).utc()
				}

				function c() {
					return {
						empty: !1,
						unusedTokens: [],
						unusedInput: [],
						overflow: -2,
						charsLeftOver: 0,
						nullInput: !1,
						invalidMonth: null,
						invalidFormat: !1,
						userInvalidated: !1,
						iso: !1,
						parsedDateParts: [],
						meridiem: null,
						rfc2822: !1,
						weekdayMismatch: !1
					}
				}

				function h(e) {
					return null == e._pf && (e._pf = c()), e._pf
				}

				function g(e) {
					if (null == e._isValid) {
						var t = h(e),
							o = qt.call(t.parsedDateParts, function(e) {
								return null != e
							}),
							n = !isNaN(e._d.getTime()) && 0 > t.overflow && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch &&
							!t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && o);
						if (e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null ==
							Object.isFrozen || !Object.isFrozen(e)) e._isValid = n;
						else return n
					}
					return e._isValid
				}

				function f(e) {
					var t = u(NaN);
					return null == e ? h(t).userInvalidated = !0 : p(h(t), e), t
				}

				function y(e, t) {
					var o, n, r;
					if (a(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), a(t._i) || (e._i = t._i), a(t._f) || (e
							._f = t._f), a(t._l) || (e._l = t._l), a(t._strict) || (e._strict = t._strict), a(t._tzm) || (e._tzm = t._tzm),
						a(t._isUTC) || (e._isUTC = t._isUTC), a(t._offset) || (e._offset = t._offset), a(t._pf) || (e._pf = h(t)), a(t
							._locale) || (e._locale = t._locale), 0 < Zt.length)
						for (o = 0; o < Zt.length; o++) n = Zt[o], r = t[n], a(r) || (e[n] = r);
					return e
				}

				function _(e) {
					y(this, e), this._d = new Date(null == e._d ? NaN : e._d.getTime()), this.isValid() || (this._d = new Date(NaN)),
						!1 === Xt && (Xt = !0, t.updateOffset(this), Xt = !1)
				}

				function b(e) {
					return e instanceof _ || null != e && null != e._isAMomentObject
				}

				function v(e) {
					return 0 > e ? Ct(e) || 0 : Mt(e)
				}

				function w(e) {
					var t = +e,
						o = 0;
					return 0 != t && isFinite(t) && (o = v(t)), o
				}

				function k(e, t, o) {
					var n = Yt(e.length, t.length),
						a = Ot(e.length - t.length),
						r = 0,
						s;
					for (s = 0; s < n; s++)(o && e[s] !== t[s] || !o && w(e[s]) !== w(t[s])) && r++;
					return r + a
				}

				function S(e) {
					!1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn(
						"Deprecation warning: " + e)
				}

				function D(e, o) {
					var n = !0;
					return p(function() {
						if (null != t.deprecationHandler && t.deprecationHandler(null, e), n) {
							for (var a = [], r = 0, s; r < arguments.length; r++) {
								if (s = "", "object" == typeof arguments[r]) {
									for (var d in s += "\n[" + r + "] ", arguments[0]) s += d + ": " + arguments[0][d] + ", ";
									s = s.slice(0, -2)
								} else s = arguments[r];
								a.push(s)
							}
							S(e + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + new Error().stack), n = !1
						}
						return o.apply(this, arguments)
					}, o)
				}

				function x(e, o) {
					null != t.deprecationHandler && t.deprecationHandler(e, o), Kt[e] || (S(o), Kt[e] = !0)
				}

				function T(e) {
					return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
				}

				function O(e) {
					var t, o;
					for (o in e) t = e[o], T(t) ? this[o] = t : this["_" + o] = t;
					this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this
						._ordinalParse.source) + "|" + /\d{1,2}/.source)
				}

				function C(e, t) {
					var o = p({}, e),
						i;
					for (i in t) l(t, i) && (n(e[i]) && n(t[i]) ? (o[i] = {}, p(o[i], e[i]), p(o[i], t[i])) : null == t[i] ? delete o[
						i] : o[i] = t[i]);
					for (i in e) l(e, i) && !l(t, i) && n(e[i]) && (o[i] = p({}, o[i]));
					return o
				}

				function M(e) {
					null != e && this.set(e)
				}

				function P(e, t) {
					var o = e.toLowerCase();
					Jt[o] = Jt[o + "s"] = Jt[t] = e
				}

				function Y(e) {
					return "string" == typeof e ? Jt[e] || Jt[e.toLowerCase()] : void 0
				}

				function E(e) {
					var t = {},
						o, n;
					for (n in e) l(e, n) && (o = Y(n), o && (t[o] = e[n]));
					return t
				}

				function I(e, t) {
					eo[e] = t
				}

				function R(e) {
					var t = [];
					for (var o in e) t.push({
						unit: o,
						priority: eo[o]
					});
					return t.sort(function(e, t) {
						return e.priority - t.priority
					}), t
				}

				function A(e, t, o) {
					var n = "" + Ot(e),
						i = t - n.length;
					return (0 <= e ? o ? "+" : "" : "-") + Tt(10, Pt(0, i)).toString().substr(1) + n
				}

				function H(e, t, o, n) {
					var i = n;
					"string" == typeof n && (i = function() {
						return this[n]()
					}), e && (io[e] = i), t && (io[t[0]] = function() {
						return A(i.apply(this, arguments), t[1], t[2])
					}), o && (io[o] = function() {
						return this.localeData().ordinal(i.apply(this, arguments), e)
					})
				}

				function L(e) {
					return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
				}

				function N(e) {
					var t = e.match(to),
						o, n;
					for (o = 0, n = t.length; o < n; o++) t[o] = io[t[o]] ? io[t[o]] : L(t[o]);
					return function(o) {
						var a = "",
							r;
						for (r = 0; r < n; r++) a += T(t[r]) ? t[r].call(o, e) : t[r];
						return a
					}
				}

				function F(e, t) {
					return e.isValid() ? (t = G(t, e.localeData()), no[t] = no[t] || N(t), no[t](e)) : e.localeData().invalidDate()
				}

				function G(e, t) {
					function o(e) {
						return t.longDateFormat(e) || e
					}
					var n = 5;
					for (oo.lastIndex = 0; 0 <= n && oo.test(e);) e = e.replace(oo, o), oo.lastIndex = 0, n -= 1;
					return e
				}

				function W(e, t, o) {
					So[e] = T(t) ? t : function(e) {
						return e && o ? o : t
					}
				}

				function U(e, t) {
					return l(So, e) ? So[e](t._strict, t._locale) : new RegExp(j(e))
				}

				function j(e) {
					return V(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, o, n, i) {
						return t || o || n || i
					}))
				}

				function V(e) {
					return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
				}

				function z(e, t) {
					var o = t,
						n;
					for ("string" == typeof e && (e = [e]), r(t) && (o = function(e, o) {
							o[t] = w(e)
						}), n = 0; n < e.length; n++) Do[e[n]] = o
				}

				function B(e, t) {
					z(e, function(e, o, n, i) {
						n._w = n._w || {}, t(e, n._w, n, i)
					})
				}

				function q(e, t, o) {
					null != t && l(Do, e) && Do[e](t, o._a, o, e)
				}

				function Z(e) {
					return X(e) ? 366 : 365
				}

				function X(e) {
					return 0 == e % 4 && 0 != e % 100 || 0 == e % 400
				}

				function K(e, o) {
					return function(n) {
						return null == n ? Q(this, e) : ($(this, e, n), t.updateOffset(this, o), this)
					}
				}

				function Q(e, t) {
					return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
				}

				function $(e, t, o) {
					e.isValid() && !isNaN(o) && ("FullYear" === t && X(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" +
						(e._isUTC ? "UTC" : "") + t](o, e.month(), te(o, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](o))
				}

				function J(e, t) {
					if ("object" == typeof e) {
						e = E(e);
						for (var o = R(e), n = 0; n < o.length; n++) this[o[n].unit](e[o[n].unit])
					} else if (e = Y(e), T(this[e])) return this[e](t);
					return this
				}

				function ee(e, t) {
					return (e % t + t) % t
				}

				function te(e, t) {
					if (isNaN(e) || isNaN(t)) return NaN;
					var o = ee(t, 12);
					return e += (t - o) / 12, 1 === o ? X(e) ? 29 : 28 : 31 - o % 7 % 2
				}

				function oe(e, t, o) {
					var n = e.toLocaleLowerCase(),
						a, r, s;
					if (!this._monthsParse)
						for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; 12 > a; ++a) s =
							u([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[a] =
							this.months(s, "").toLocaleLowerCase();
					return o ? "MMM" === t ? (r = Eo.call(this._shortMonthsParse, n), -1 === r ? null : r) : (r = Eo.call(this._longMonthsParse,
						n), -1 === r ? null : r) : "MMM" === t ? (r = Eo.call(this._shortMonthsParse, n), -1 !== r) ? r : (r = Eo.call(
						this._longMonthsParse, n), -1 === r ? null : r) : (r = Eo.call(this._longMonthsParse, n), -1 !== r) ? r : (r =
						Eo.call(this._shortMonthsParse, n), -1 === r ? null : r)
				}

				function ne(e, t, o) {
					var n, a, r;
					if (this._monthsParseExact) return oe.call(this, e, t, o);
					for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n =
						0; 12 > n; n++) {
						if (a = u([2e3, n]), o && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(
								a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(a, "").replace(
								".", "") + "$", "i")), o || this._monthsParse[n] || (r = "^" + this.months(a, "") + "|^" + this.monthsShort(
								a, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), o && "MMMM" === t && this._longMonthsParse[
								n].test(e)) return n;
						if (o && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
						if (!o && this._monthsParse[n].test(e)) return n
					}
				}

				function ie(e, t) {
					var o;
					if (!e.isValid()) return e;
					if ("string" == typeof t)
						if (/^\d+$/.test(t)) t = w(t);
						else if (t = e.localeData().monthsParse(t), !r(t)) return e;
					return o = Yt(e.date(), te(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, o), e
				}

				function ae(e) {
					return null == e ? Q(this, "Month") : (ie(this, e), t.updateOffset(this, !0), this)
				}

				function re() {
					function e(e, t) {
						return t.length - e.length
					}
					var t = [],
						o = [],
						n = [],
						a, r;
					for (a = 0; 12 > a; a++) r = u([2e3, a]), t.push(this.monthsShort(r, "")), o.push(this.months(r, "")), n.push(
						this.months(r, "")), n.push(this.monthsShort(r, ""));
					for (t.sort(e), o.sort(e), n.sort(e), a = 0; 12 > a; a++) t[a] = V(t[a]), o[a] = V(o[a]);
					for (a = 0; 24 > a; a++) n[a] = V(n[a]);
					this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this
						._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp(
							"^(" + t.join("|") + ")", "i")
				}

				function se(e, t, o, n, i, a, r) {
					var s;
					return 100 > e && 0 <= e ? (s = new Date(e + 400, t, o, n, i, a, r), isFinite(s.getFullYear()) && s.setFullYear(
						e)) : s = new Date(e, t, o, n, i, a, r), s
				}

				function de(e) {
					var t;
					if (100 > e && 0 <= e) {
						var o = Array.prototype.slice.call(arguments);
						o[0] = e + 400, t = new Date(Date.UTC.apply(null, o)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)
					} else t = new Date(Date.UTC.apply(null, arguments));
					return t
				}

				function le(e, t, o) {
					var n = 7 + t - o,
						i = (7 + de(e, 0, n).getUTCDay() - t) % 7;
					return -i + n - 1
				}

				function pe(e, t, o, n, i) {
					var a = le(e, n, i),
						r = 1 + 7 * (t - 1) + (7 + o - n) % 7 + a,
						s, d;
					return 0 >= r ? (s = e - 1, d = Z(s) + r) : r > Z(e) ? (s = e + 1, d = r - Z(e)) : (s = e, d = r), {
						year: s,
						dayOfYear: d
					}
				}

				function ue(e, t, o) {
					var n = le(e.year(), t, o),
						i = Mt((e.dayOfYear() - n - 1) / 7) + 1,
						a, r;
					return 1 > i ? (r = e.year() - 1, a = i + ce(r, t, o)) : i > ce(e.year(), t, o) ? (a = i - ce(e.year(), t, o),
						r = e.year() + 1) : (r = e.year(), a = i), {
						week: a,
						year: r
					}
				}

				function ce(e, t, o) {
					var n = le(e, t, o),
						i = le(e + 1, t, o);
					return (Z(e) - n + i) / 7
				}

				function he(e, t) {
					return "string" == typeof e ? isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e,
						10) : e
				}

				function ge(e, t) {
					return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
				}

				function fe(e, t) {
					return e.slice(t, 7).concat(e.slice(0, t))
				}

				function ye(e, t, o) {
					var n = e.toLocaleLowerCase(),
						a, r, s;
					if (!this._weekdaysParse)
						for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; 7 > a; ++a) s =
							u([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[
								a] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(s, "").toLocaleLowerCase();
					return o ? "dddd" === t ? (r = Eo.call(this._weekdaysParse, n), -1 === r ? null : r) : "ddd" === t ? (r = Eo.call(
						this._shortWeekdaysParse, n), -1 === r ? null : r) : (r = Eo.call(this._minWeekdaysParse, n), -1 === r ? null :
						r) : "dddd" === t ? (r = Eo.call(this._weekdaysParse, n), -1 !== r) ? r : (r = Eo.call(this._shortWeekdaysParse,
						n), -1 !== r) ? r : (r = Eo.call(this._minWeekdaysParse, n), -1 === r ? null : r) : "ddd" === t ? (r = Eo.call(
						this._shortWeekdaysParse, n), -1 !== r) ? r : (r = Eo.call(this._weekdaysParse, n), -1 !== r) ? r : (r = Eo.call(
						this._minWeekdaysParse, n), -1 === r ? null : r) : (r = Eo.call(this._minWeekdaysParse, n), -1 !== r) ? r : (
						r = Eo.call(this._weekdaysParse, n), -1 !== r) ? r : (r = Eo.call(this._shortWeekdaysParse, n), -1 === r ?
						null : r)
				}

				function _e(e, t, o) {
					var n, a, r;
					if (this._weekdaysParseExact) return ye.call(this, e, t, o);
					for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [],
							this._fullWeekdaysParse = []), n = 0; 7 > n; n++) {
						if (a = u([2e3, 1]).day(n), o && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" +
								this.weekdays(a, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(
								a, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(a,
								"").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (r = "^" + this.weekdays(a, "") + "|^" +
								this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[n] = new RegExp(r.replace(
									".", ""), "i")), o && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n;
						if (o && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n;
						if (o && "dd" === t && this._minWeekdaysParse[n].test(e)) return n;
						if (!o && this._weekdaysParse[n].test(e)) return n
					}
				}

				function be() {
					function e(e, t) {
						return t.length - e.length
					}
					var t = [],
						o = [],
						n = [],
						a = [],
						r, s, d, l, p;
					for (r = 0; 7 > r; r++) s = u([2e3, 1]).day(r), d = this.weekdaysMin(s, ""), l = this.weekdaysShort(s, ""), p =
						this.weekdays(s, ""), t.push(d), o.push(l), n.push(p), a.push(d), a.push(l), a.push(p);
					for (t.sort(e), o.sort(e), n.sort(e), a.sort(e), r = 0; 7 > r; r++) o[r] = V(o[r]), n[r] = V(n[r]), a[r] = V(a[
						r]);
					this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex,
						this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + n.join("|") + ")",
							"i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex =
						new RegExp("^(" + t.join("|") + ")", "i")
				}

				function ve() {
					return this.hours() % 12 || 12
				}

				function we(e, t) {
					H(e, 0, 0, function() {
						return this.localeData().meridiem(this.hours(), this.minutes(), t)
					})
				}

				function ke(e, t) {
					return t._meridiemParse
				}

				function Se(e) {
					return e ? e.toLowerCase().replace("_", "-") : e
				}

				function De(e) {
					for (var t = 0, o, n, a, r; t < e.length;) {
						for (r = Se(e[t]).split("-"), o = r.length, n = Se(e[t + 1]), n = n ? n.split("-") : null; 0 < o;) {
							if (a = xe(r.slice(0, o).join("-")), a) return a;
							if (n && n.length >= o && k(r, n, !0) >= o - 1) break;
							o--
						}
						t++
					}
					return Xo
				}

				function xe(t) {
					var o = null;
					if (!Fo[t] && !0 && e && e.exports) try {
						o = Xo._abbr;
						me("./locale/" + t), Te(o)
					} catch (t) {}
					return Fo[t]
				}

				function Te(e, t) {
					var o;
					return e && (o = a(t) ? Ce(e) : Oe(e, t), o ? Xo = o : "undefined" != typeof console && console.warn && console
						.warn("Locale " + e + " not found. Did you forget to load it?")), Xo._abbr
				}

				function Oe(e, t) {
					if (null !== t) {
						var o = No,
							n;
						if (t.abbr = e, null != Fo[e]) x("defineLocaleOverride",
							"use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
						), o = Fo[e]._config;
						else if (null != t.parentLocale)
							if (null != Fo[t.parentLocale]) o = Fo[t.parentLocale]._config;
							else if (n = xe(t.parentLocale), null != n) o = n._config;
						else return Go[t.parentLocale] || (Go[t.parentLocale] = []), Go[t.parentLocale].push({
							name: e,
							config: t
						}), null;
						return Fo[e] = new M(C(o, t)), Go[e] && Go[e].forEach(function(e) {
							Oe(e.name, e.config)
						}), Te(e), Fo[e]
					}
					return delete Fo[e], null
				}

				function Ce(e) {
					var t;
					if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Xo;
					if (!o(e)) {
						if (t = xe(e), t) return t;
						e = [e]
					}
					return De(e)
				}

				function Me() {
					return Qt(Fo)
				}

				function Pe(e) {
					var t = e._a,
						o;
					return t && -2 === h(e).overflow && (o = 0 > t[1] || 11 < t[1] ? 1 : 1 > t[2] || t[2] > te(t[0], t[1]) ? 2 : 0 >
						t[3] || 24 < t[3] || 24 === t[3] && (0 !== t[4] || 0 !== t[5] || 0 !== t[6]) ? 3 : 0 > t[4] || 59 < t[4] ? 4 :
						0 > t[5] || 59 < t[5] ? 5 : 0 > t[6] || 999 < t[6] ? 6 : -1, h(e)._overflowDayOfYear && (0 > o || 2 < o) && (
							o = 2), h(e)._overflowWeeks && -1 === o && (o = 7), h(e)._overflowWeekday && -1 === o && (o = 8), h(e).overflow =
						o), e
				}

				function Ye(e, t, o) {
					return null == e ? null == t ? o : t : e
				}

				function Ee(e) {
					var o = new Date(t.now());
					return e._useUTC ? [o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()] : [o.getFullYear(), o.getMonth(), o.getDate()]
				}

				function Ie(e) {
					var t = [],
						o, n, a, r, s;
					if (!e._d) {
						for (a = Ee(e), e._w && null == e._a[2] && null == e._a[1] && Re(e), null != e._dayOfYear && (s = Ye(e._a[0],
									a[0]), (e._dayOfYear > Z(s) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), n = de(s, 0, e._dayOfYear),
								e._a[1] = n.getUTCMonth(), e._a[2] = n.getUTCDate()), o = 0; 3 > o && null == e._a[o]; ++o) e._a[o] = t[o] =
							a[o];
						for (; 7 > o; o++) e._a[o] = t[o] = null == e._a[o] ? 2 === o ? 1 : 0 : e._a[o];
						24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && (e._nextDay = !0, e._a[3] = 0), e._d = (e
								._useUTC ? de : se).apply(null, t), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d
							.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[3] = 24), e._w && "undefined" != typeof e._w
							.d && e._w.d !== r && (h(e).weekdayMismatch = !0)
					}
				}

				function Re(e) {
					var t, o, n, i, a, r, s, d;
					if (t = e._w, null != t.GG || null != t.W || null != t.E) a = 1, r = 4, o = Ye(t.GG, e._a[0], ue(Qe(), 1, 4).year),
						n = Ye(t.W, 1), i = Ye(t.E, 1), (1 > i || 7 < i) && (d = !0);
					else {
						a = e._locale._week.dow, r = e._locale._week.doy;
						var l = ue(Qe(), a, r);
						o = Ye(t.gg, e._a[0], l.year), n = Ye(t.w, l.week), null == t.d ? null == t.e ? i = a : (i = t.e + a, (0 > t.e ||
							6 < t.e) && (d = !0)) : (i = t.d, (0 > i || 6 < i) && (d = !0))
					}
					1 > n || n > ce(o, a, r) ? h(e)._overflowWeeks = !0 : null == d ? (s = pe(o, n, i, a, r), e._a[0] = s.year, e._dayOfYear =
						s.dayOfYear) : h(e)._overflowWeekday = !0
				}

				function Ae(e) {
					var t = e._i,
						o = Wo.exec(t) || Uo.exec(t),
						n, a, r, s, d, p;
					if (o) {
						for (h(e).iso = !0, n = 0, a = Vo.length; n < a; n++)
							if (Vo[n][1].exec(o[1])) {
								s = Vo[n][0], r = !1 !== Vo[n][2];
								break
							} if (null == s) return void(e._isValid = !1);
						if (o[3]) {
							for (n = 0, a = zo.length; n < a; n++)
								if (zo[n][1].exec(o[3])) {
									d = (o[2] || " ") + zo[n][0];
									break
								} if (null == d) return void(e._isValid = !1)
						}
						if (!r && null != d) return void(e._isValid = !1);
						if (o[4])
							if (jo.exec(o[4])) p = "Z";
							else return void(e._isValid = !1);
						e._f = s + (d || "") + (p || ""), je(e)
					} else e._isValid = !1
				}

				function He(e, t, o, n, i, a) {
					var r = [Le(e), Ro.indexOf(t), parseInt(o, 10), parseInt(n, 10), parseInt(i, 10)];
					return a && r.push(parseInt(a, 10)), r
				}

				function Le(e) {
					var t = parseInt(e, 10);
					return 49 >= t ? 2e3 + t : 999 >= t ? 1900 + t : t
				}

				function Ne(e) {
					return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
				}

				function Fe(e, t, o) {
					if (e) {
						var n = Ao.indexOf(e),
							i = new Date(t[0], t[1], t[2]).getDay();
						if (n !== i) return h(o).weekdayMismatch = !0, o._isValid = !1, !1
					}
					return !0
				}

				function Ge(e, t, o) {
					if (e) return Zo[e];
					if (t) return 0;
					var n = parseInt(o, 10),
						i = n % 100;
					return 60 * ((n - i) / 100) + i
				}

				function We(e) {
					var t = qo.exec(Ne(e._i));
					if (t) {
						var o = He(t[4], t[3], t[2], t[5], t[6], t[7]);
						if (!Fe(t[1], o, e)) return;
						e._a = o, e._tzm = Ge(t[8], t[9], t[10]), e._d = de.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() -
							e._tzm), h(e).rfc2822 = !0
					} else e._isValid = !1
				}

				function Ue(e) {
					var o = Bo.exec(e._i);
					if (null !== o) return void(e._d = new Date(+o[1]));
					if (Ae(e), !1 === e._isValid) delete e._isValid;
					else return;
					if (We(e), !1 === e._isValid) delete e._isValid;
					else return;
					t.createFromInputFallback(e)
				}

				function je(e) {
					if (e._f === t.ISO_8601) return void Ae(e);
					if (e._f === t.RFC_2822) return void We(e);
					e._a = [], h(e).empty = !0;
					var o = "" + e._i,
						n = o.length,
						a = 0,
						r, s, d, l, p;
					for (d = G(e._f, e._locale).match(to) || [], r = 0; r < d.length; r++) l = d[r], s = (o.match(U(l, e)) || [])[0],
						s && (p = o.substr(0, o.indexOf(s)), 0 < p.length && h(e).unusedInput.push(p), o = o.slice(o.indexOf(s) + s.length),
							a += s.length), io[l] ? (s ? h(e).empty = !1 : h(e).unusedTokens.push(l), q(l, s, e)) : e._strict && !s && h(
							e).unusedTokens.push(l);
					h(e).charsLeftOver = n - a, 0 < o.length && h(e).unusedInput.push(o), 12 >= e._a[3] && !0 === h(e).bigHour && 0 <
						e._a[3] && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[3] =
						Ve(e._locale, e._a[3], e._meridiem), Ie(e), Pe(e)
				}

				function Ve(e, t, o) {
					var n;
					return null == o ? t : null == e.meridiemHour ? null == e.isPM ? t : (n = e.isPM(o), n && 12 > t && (t += 12),
						n || 12 !== t || (t = 0), t) : e.meridiemHour(t, o)
				}

				function ze(e) {
					var t, o, n, a, r;
					if (0 === e._f.length) return h(e).invalidFormat = !0, void(e._d = new Date(NaN));
					for (a = 0; a < e._f.length; a++)(r = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[
						a], je(t), !!g(t)) && (r += h(t).charsLeftOver, r += 10 * h(t).unusedTokens.length, h(t).score = r, (null ==
						n || r < n) && (n = r, o = t));
					p(e, o || t)
				}

				function Be(e) {
					if (!e._d) {
						var t = E(e._i);
						e._a = d([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
							return e && parseInt(e, 10)
						}), Ie(e)
					}
				}

				function qe(e) {
					var t = new _(Pe(Ze(e)));
					return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
				}

				function Ze(e) {
					var t = e._i,
						n = e._f;
					return (e._locale = e._locale || Ce(e._l), null === t || void 0 === n && "" === t) ? f({
						nullInput: !0
					}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), b(t)) ? new _(Pe(t)) : (s(t) ? e._d = t : o(
						n) ? ze(e) : n ? je(e) : Xe(e), g(e) || (e._d = null), e)
				}

				function Xe(e) {
					var i = e._i;
					a(i) ? e._d = new Date(t.now()) : s(i) ? e._d = new Date(i.valueOf()) : "string" == typeof i ? Ue(e) : o(i) ? (
						e._a = d(i.slice(0), function(e) {
							return parseInt(e, 10)
						}), Ie(e)) : n(i) ? Be(e) : r(i) ? e._d = new Date(i) : t.createFromInputFallback(e)
				}

				function Ke(e, t, a, r, s) {
					var d = {};
					return (!0 === a || !1 === a) && (r = a, a = void 0), (n(e) && i(e) || o(e) && 0 === e.length) && (e = void 0),
						d._isAMomentObject = !0, d._useUTC = d._isUTC = s, d._l = a, d._i = e, d._f = t, d._strict = r, qe(d)
				}

				function Qe(e, t, o, n) {
					return Ke(e, t, o, n, !1)
				}

				function $e(e, t) {
					var n, a;
					if (1 === t.length && o(t[0]) && (t = t[0]), !t.length) return Qe();
					for (n = t[0], a = 1; a < t.length; ++a)(!t[a].isValid() || t[a][e](n)) && (n = t[a]);
					return n
				}

				function Je(e) {
					for (var t in e)
						if (-1 === Eo.call($o, t) || null != e[t] && isNaN(e[t])) return !1;
					for (var o = !1, n = 0; n < $o.length; ++n)
						if (e[$o[n]]) {
							if (o) return !1;
							parseFloat(e[$o[n]]) !== w(e[$o[n]]) && (o = !0)
						} return !0
				}

				function et(e) {
					var t = E(e),
						o = t.year || 0,
						n = t.quarter || 0,
						i = t.month || 0,
						a = t.week || t.isoWeek || 0,
						r = t.day || 0,
						s = t.hour || 0,
						d = t.minute || 0,
						l = t.second || 0,
						p = t.millisecond || 0;
					this._isValid = Je(t), this._milliseconds = +p + 1e3 * l + 6e4 * d + 60 * (60 * (1e3 * s)), this._days = +r + 7 *
						a, this._months = +i + 3 * n + 12 * o, this._data = {}, this._locale = Ce(), this._bubble()
				}

				function tt(e) {
					return e instanceof et
				}

				function ot(e) {
					return 0 > e ? -1 * xt(-1 * e) : xt(e)
				}

				function nt(e, t) {
					H(e, 0, 0, function() {
						var e = this.utcOffset(),
							o = "+";
						return 0 > e && (e = -e, o = "-"), o + A(~~(e / 60), 2) + t + A(~~e % 60, 2)
					})
				}

				function it(e, t) {
					var o = (t || "").match(e);
					if (null === o) return null;
					var n = o[o.length - 1] || [],
						i = (n + "").match(Jo) || ["-", 0, 0],
						a = +(60 * i[1]) + w(i[2]);
					return 0 === a ? 0 : "+" === i[0] ? a : -a
				}

				function at(e, o) {
					var n, i;
					return o._isUTC ? (n = o.clone(), i = (b(e) || s(e) ? e.valueOf() : Qe(e).valueOf()) - n.valueOf(), n._d.setTime(
						n._d.valueOf() + i), t.updateOffset(n, !1), n) : Qe(e).local()
				}

				function rt(e) {
					return 15 * -xt(e._d.getTimezoneOffset() / 15)
				}

				function st() {
					return !!this.isValid() && this._isUTC && 0 === this._offset
				}

				function dt(e, t) {
					var o = e,
						n = null,
						i, a, s;
					return tt(e) ? o = {
							ms: e._milliseconds,
							d: e._days,
							M: e._months
						} : r(e) ? (o = {}, t ? o[t] = e : o.milliseconds = e) : (n = en.exec(e)) ? (i = "-" === n[1] ? -1 : 1, o = {
							y: 0,
							d: w(n[2]) * i,
							h: w(n[3]) * i,
							m: w(n[4]) * i,
							s: w(n[5]) * i,
							ms: w(ot(1e3 * n[6])) * i
						}) : (n = tn.exec(e)) ? (i = "-" === n[1] ? -1 : 1, o = {
							y: lt(n[2], i),
							M: lt(n[3], i),
							w: lt(n[4], i),
							d: lt(n[5], i),
							h: lt(n[6], i),
							m: lt(n[7], i),
							s: lt(n[8], i)
						}) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (s = mt(Qe(o.from), Qe(o.to)),
							o = {}, o.ms = s.milliseconds, o.M = s.months), a = new et(o), tt(e) && l(e, "_locale") && (a._locale = e._locale),
						a
				}

				function lt(e, t) {
					var o = e && parseFloat(e.replace(",", "."));
					return (isNaN(o) ? 0 : o) * t
				}

				function pt(e, t) {
					var o = {};
					return o.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(o.months, "M").isAfter(t) &&
						--o.months, o.milliseconds = +t - +e.clone().add(o.months, "M"), o
				}

				function mt(e, t) {
					var o;
					return e.isValid() && t.isValid() ? (t = at(t, e), e.isBefore(t) ? o = pt(e, t) : (o = pt(t, e), o.milliseconds = -
						o.milliseconds, o.months = -o.months), o) : {
						milliseconds: 0,
						months: 0
					}
				}

				function ut(e, t) {
					return function(o, n) {
						var i, a;
						return null === n || isNaN(+n) || (x(t, "moment()." + t +
								"(period, number) is deprecated. Please use moment()." + t +
								"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = o,
							o = n, n = a), o = "string" == typeof o ? +o : o, i = dt(o, n), ct(this, i, e), this
					}
				}

				function ct(e, o, n, i) {
					var a = o._milliseconds,
						r = ot(o._days),
						s = ot(o._months);
					e.isValid() && (i = null == i || i, s && ie(e, Q(e, "Month") + s * n), r && $(e, "Date", Q(e, "Date") + r * n),
						a && e._d.setTime(e._d.valueOf() + a * n), i && t.updateOffset(e, r || s))
				}

				function ht(e, t) {
					var o = 12 * (t.year() - e.year()) + (t.month() - e.month()),
						n = e.clone().add(o, "months"),
						i, a;
					return 0 > t - n ? (i = e.clone().add(o - 1, "months"), a = (t - n) / (n - i)) : (i = e.clone().add(o + 1,
						"months"), a = (t - n) / (i - n)), -(o + a) || 0
				}

				function gt(e) {
					var t;
					return void 0 === e ? this._locale._abbr : (t = Ce(e), null != t && (this._locale = t), this)
				}

				function ft() {
					return this._locale
				}

				function yt(e, t) {
					return (e % t + t) % t
				}

				function _t(e, t, o) {
					return 100 > e && 0 <= e ? new Date(e + 400, t, o) - 12622780800000 : new Date(e, t, o).valueOf()
				}

				function bt(e, t, o) {
					return 100 > e && 0 <= e ? Date.UTC(e + 400, t, o) - 12622780800000 : Date.UTC(e, t, o)
				}

				function vt(e, t) {
					H(0, [e, e.length], 0, t)
				}

				function wt(e, t, o, n, i) {
					var a;
					return null == e ? ue(this, n, i).year : (a = ce(e, n, i), t > a && (t = a), kt.call(this, e, t, o, n, i))
				}

				function kt(e, t, o, n, i) {
					var a = pe(e, t, o, n, i),
						r = de(a.year, 0, a.dayOfYear);
					return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
				}

				function St(e, t) {
					t[6] = w(1e3 * ("0." + e))
				}

				function Dt(e) {
					return e
				}

				function Et(e, t, o, n) {
					var i = Ce(),
						a = u().set(n, t);
					return i[o](a, e)
				}

				function It(e, t, o) {
					if (r(e) && (t = e, e = void 0), e = e || "", null != t) return Et(e, t, o, "month");
					var n = [],
						a;
					for (a = 0; 12 > a; a++) n[a] = Et(e, a, o, "month");
					return n
				}

				function Rt(e, t, o, n) {
					"boolean" == typeof e ? (r(t) && (o = t, t = void 0), t = t || "") : (t = e, o = t, e = !1, r(t) && (o = t, t =
						void 0), t = t || "");
					var a = Ce(),
						s = e ? a._week.dow : 0;
					if (null != o) return Et(t, (o + s) % 7, n, "day");
					var d = [],
						l;
					for (l = 0; 7 > l; l++) d[l] = Et(t, (l + s) % 7, n, "day");
					return d
				}

				function At(e, t, o, n) {
					var i = dt(t, o);
					return e._milliseconds += n * i._milliseconds, e._days += n * i._days, e._months += n * i._months, e._bubble()
				}

				function Ht(e) {
					return 0 > e ? Mt(e) : Ct(e)
				}

				function Lt(e) {
					return 4800 * e / 146097
				}

				function Nt(e) {
					return 146097 * e / 4800
				}

				function Ft(e) {
					return function() {
						return this.as(e)
					}
				}

				function Gt(e) {
					return function() {
						return this.isValid() ? this._data[e] : NaN
					}
				}

				function Wt(e, t, o, n, i) {
					return i.relativeTime(t || 1, !!o, e, n)
				}

				function Ut(e, t, o) {
					var n = dt(e).abs(),
						i = Pn(n.as("s")),
						r = Pn(n.as("m")),
						s = Pn(n.as("h")),
						d = Pn(n.as("d")),
						l = Pn(n.as("M")),
						p = Pn(n.as("y")),
						m = i <= Yn.ss && ["s", i] || i < Yn.s && ["ss", i] || 1 >= r && ["m"] || r < Yn.m && ["mm", r] || 1 >= s && [
							"h"
						] || s < Yn.h && ["hh", s] || 1 >= d && ["d"] || d < Yn.d && ["dd", d] || 1 >= l && ["M"] || l < Yn.M && ["MM",
							l
						] || 1 >= p && ["y"] || ["yy", p];
					return m[2] = t, m[3] = 0 < +e, m[4] = o, Wt.apply(null, m)
				}

				function jt(e) {
					return void 0 === e ? Pn : "function" == typeof e && (Pn = e, !0)
				}

				function Vt(e) {
					return (0 < e) - (0 > e) || +e
				}

				function zt() {
					if (!this.isValid()) return this.localeData().invalidDate();
					var e = En(this._milliseconds) / 1e3,
						t = En(this._days),
						o = En(this._months),
						n, i, a;
					n = v(e / 60), i = v(n / 60), e %= 60, n %= 60, a = v(o / 12), o %= 12;
					var r = a,
						d = o,
						l = t,
						p = i,
						u = n,
						m = e ? e.toFixed(3).replace(/\.?0+$/, "") : "",
						s = this.asSeconds();
					if (!s) return "P0D";
					var c = 0 > s ? "-" : "",
						h = Vt(this._months) === Vt(s) ? "" : "-",
						g = Vt(this._days) === Vt(s) ? "" : "-",
						f = Vt(this._milliseconds) === Vt(s) ? "" : "-";
					return c + "P" + (r ? h + r + "Y" : "") + (d ? h + d + "M" : "") + (l ? g + l + "D" : "") + (p || u || m ? "T" :
						"") + (p ? f + p + "H" : "") + (u ? f + u + "M" : "") + (m ? f + m + "S" : "")
				}
				var Bt, qt;
				qt = Array.prototype.some ? Array.prototype.some : function(e) {
					for (var o = Object(this), t = o.length >>> 0, n = 0; n < t; n++)
						if (n in o && e.call(this, o[n], n, o)) return !0;
					return !1
				};
				var Zt = t.momentProperties = [],
					Xt = !1,
					Kt = {};
				t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
				var Qt = Object.keys ? Object.keys : function(e) {
					var t = [],
						o;
					for (o in e) l(e, o) && t.push(o);
					return t
				};
				var $t = /\d{1,2}/,
					Jt = {},
					eo = {},
					to =
					/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
					oo = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
					no = {},
					io = {},
					ao = /\d/,
					ro = /\d\d/,
					so = /\d{3}/,
					lo = /\d{4}/,
					po = /[+-]?\d{6}/,
					mo = /\d\d?/,
					uo = /\d\d\d\d?/,
					co = /\d\d\d\d\d\d?/,
					ho = /\d{1,3}/,
					go = /\d{1,4}/,
					fo = /[+-]?\d{1,6}/,
					yo = /\d+/,
					_o = /[+-]?\d+/,
					bo = /Z|[+-]\d\d:?\d\d/gi,
					vo = /Z|[+-]\d\d(?::?\d\d)?/gi,
					wo = /[+-]?\d+(\.\d{1,3})?/,
					ko =
					/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
					So = {},
					Do = {},
					xo = 0,
					To = 1,
					Oo = 2,
					Co = 3,
					Mo = 4,
					Po = 5;
				H("Y", 0, 0, function() {
					var e = this.year();
					return 9999 >= e ? "" + e : "+" + e
				}), H(0, ["YY", 2], 0, function() {
					return this.year() % 100
				}), H(0, ["YYYY", 4], 0, "year"), H(0, ["YYYYY", 5], 0, "year"), H(0, ["YYYYYY", 6, !0], 0, "year"), P("year",
					"y"), I("year", 1), W("Y", _o), W("YY", mo, ro), W("YYYY", go, lo), W("YYYYY", fo, po), W("YYYYYY", fo, po), z(
					["YYYYY", "YYYYYY"], xo), z("YYYY", function(e, o) {
					o[xo] = 2 === e.length ? t.parseTwoDigitYear(e) : w(e)
				}), z("YY", function(e, o) {
					o[xo] = t.parseTwoDigitYear(e)
				}), z("Y", function(e, t) {
					t[xo] = parseInt(e, 10)
				}), t.parseTwoDigitYear = function(e) {
					return w(e) + (68 < w(e) ? 1900 : 2e3)
				};
				var Yo = K("FullYear", !0),
					Eo;
				Eo = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
					var t;
					for (t = 0; t < this.length; ++t)
						if (this[t] === e) return t;
					return -1
				}, H("M", ["MM", 2], "Mo", function() {
					return this.month() + 1
				}), H("MMM", 0, 0, function(e) {
					return this.localeData().monthsShort(this, e)
				}), H("MMMM", 0, 0, function(e) {
					return this.localeData().months(this, e)
				}), P("month", "M"), I("month", 8), W("M", mo), W("MM", mo, ro), W("MMM", function(e, t) {
					return t.monthsShortRegex(e)
				}), W("MMMM", function(e, t) {
					return t.monthsRegex(e)
				}), z(["M", "MM"], function(e, t) {
					t[To] = w(e) - 1
				}), z(["MMM", "MMMM"], function(e, t, o, n) {
					var i = o._locale.monthsParse(e, n, o._strict);
					null == i ? h(o).invalidMonth = e : t[To] = i
				});
				var Io = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
					Ro = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
				H("w", ["ww", 2], "wo", "week"), H("W", ["WW", 2], "Wo", "isoWeek"), P("week", "w"), P("isoWeek", "W"), I("week",
					5), I("isoWeek", 5), W("w", mo), W("ww", mo, ro), W("W", mo), W("WW", mo, ro), B(["w", "ww", "W", "WW"],
					function(e, t, o, n) {
						t[n.substr(0, 1)] = w(e)
					});
				H("d", 0, "do", "day"), H("dd", 0, 0, function(e) {
						return this.localeData().weekdaysMin(this, e)
					}), H("ddd", 0, 0, function(e) {
						return this.localeData().weekdaysShort(this, e)
					}), H("dddd", 0, 0, function(e) {
						return this.localeData().weekdays(this, e)
					}), H("e", 0, 0, "weekday"), H("E", 0, 0, "isoWeekday"), P("day", "d"), P("weekday", "e"), P("isoWeekday", "E"),
					I("day", 11), I("weekday", 11), I("isoWeekday", 11), W("d", mo), W("e", mo), W("E", mo), W("dd", function(e, t) {
						return t.weekdaysMinRegex(e)
					}), W("ddd", function(e, t) {
						return t.weekdaysShortRegex(e)
					}), W("dddd", function(e, t) {
						return t.weekdaysRegex(e)
					}), B(["dd", "ddd", "dddd"], function(e, t, o, n) {
						var i = o._locale.weekdaysParse(e, n, o._strict);
						null == i ? h(o).invalidWeekday = e : t.d = i
					}), B(["d", "e", "E"], function(e, t, o, n) {
						t[n] = w(e)
					});
				var Ao = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
				H("H", ["HH", 2], 0, "hour"), H("h", ["hh", 2], 0, ve), H("k", ["kk", 2], 0, function() {
					return this.hours() || 24
				}), H("hmm", 0, 0, function() {
					return "" + ve.apply(this) + A(this.minutes(), 2)
				}), H("hmmss", 0, 0, function() {
					return "" + ve.apply(this) + A(this.minutes(), 2) + A(this.seconds(), 2)
				}), H("Hmm", 0, 0, function() {
					return "" + this.hours() + A(this.minutes(), 2)
				}), H("Hmmss", 0, 0, function() {
					return "" + this.hours() + A(this.minutes(), 2) + A(this.seconds(), 2)
				}), we("a", !0), we("A", !1), P("hour", "h"), I("hour", 13), W("a", ke), W("A", ke), W("H", mo), W("h", mo), W(
					"k", mo), W("HH", mo, ro), W("hh", mo, ro), W("kk", mo, ro), W("hmm", uo), W("hmmss", co), W("Hmm", uo), W(
					"Hmmss", co), z(["H", "HH"], Co), z(["k", "kk"], function(e, t) {
					var o = w(e);
					t[Co] = 24 === o ? 0 : o
				}), z(["a", "A"], function(e, t, o) {
					o._isPm = o._locale.isPM(e), o._meridiem = e
				}), z(["h", "hh"], function(e, t, o) {
					t[Co] = w(e), h(o).bigHour = !0
				}), z("hmm", function(e, t, o) {
					var n = e.length - 2;
					t[Co] = w(e.substr(0, n)), t[Mo] = w(e.substr(n)), h(o).bigHour = !0
				}), z("hmmss", function(e, t, o) {
					var n = e.length - 4,
						i = e.length - 2;
					t[Co] = w(e.substr(0, n)), t[Mo] = w(e.substr(n, 2)), t[Po] = w(e.substr(i)), h(o).bigHour = !0
				}), z("Hmm", function(e, t) {
					var o = e.length - 2;
					t[Co] = w(e.substr(0, o)), t[Mo] = w(e.substr(o))
				}), z("Hmmss", function(e, t) {
					var o = e.length - 4,
						n = e.length - 2;
					t[Co] = w(e.substr(0, o)), t[Mo] = w(e.substr(o, 2)), t[Po] = w(e.substr(n))
				});
				var Ho = /[ap]\.?m?\.?/i,
					Lo = K("Hours", !0),
					No = {
						calendar: {
							sameDay: "[Today at] LT",
							nextDay: "[Tomorrow at] LT",
							nextWeek: "dddd [at] LT",
							lastDay: "[Yesterday at] LT",
							lastWeek: "[Last] dddd [at] LT",
							sameElse: "L"
						},
						longDateFormat: {
							LTS: "h:mm:ss A",
							LT: "h:mm A",
							L: "MM/DD/YYYY",
							LL: "MMMM D, YYYY",
							LLL: "MMMM D, YYYY h:mm A",
							LLLL: "dddd, MMMM D, YYYY h:mm A"
						},
						invalidDate: "Invalid date",
						ordinal: "%d",
						dayOfMonthOrdinalParse: $t,
						relativeTime: {
							future: "in %s",
							past: "%s ago",
							s: "a few seconds",
							ss: "%d seconds",
							m: "a minute",
							mm: "%d minutes",
							h: "an hour",
							hh: "%d hours",
							d: "a day",
							dd: "%d days",
							M: "a month",
							MM: "%d months",
							y: "a year",
							yy: "%d years"
						},
						months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
							"November", "December"
						],
						monthsShort: Ro,
						week: {
							dow: 0,
							doy: 6
						},
						weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
						weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
						weekdaysShort: Ao,
						meridiemParse: Ho
					},
					Fo = {},
					Go = {},
					Wo =
					/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
					Uo =
					/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
					jo = /Z|[+-]\d\d(?::?\d\d)?/,
					Vo = [
						["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
						["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
						["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
						["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
						["YYYY-DDD", /\d{4}-\d{3}/],
						["YYYY-MM", /\d{4}-\d\d/, !1],
						["YYYYYYMMDD", /[+-]\d{10}/],
						["YYYYMMDD", /\d{8}/],
						["GGGG[W]WWE", /\d{4}W\d{3}/],
						["GGGG[W]WW", /\d{4}W\d{2}/, !1],
						["YYYYDDD", /\d{7}/]
					],
					zo = [
						["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
						["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
						["HH:mm:ss", /\d\d:\d\d:\d\d/],
						["HH:mm", /\d\d:\d\d/],
						["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
						["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
						["HHmmss", /\d\d\d\d\d\d/],
						["HHmm", /\d\d\d\d/],
						["HH", /\d\d/]
					],
					Bo = /^\/?Date\((\-?\d+)/i,
					qo =
					/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
					Zo = {
						UT: 0,
						GMT: 0,
						EDT: -240,
						EST: -300,
						CDT: -300,
						CST: -360,
						MDT: -360,
						MST: -420,
						PDT: -420,
						PST: -480
					},
					Xo;
				t.createFromInputFallback = D(
					"value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
					function(e) {
						e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
					}), t.ISO_8601 = function() {}, t.RFC_2822 = function() {};
				var Ko = D("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
						function() {
							var e = Qe.apply(null, arguments);
							return this.isValid() && e.isValid() ? e < this ? this : e : f()
						}),
					Qo = D("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
						function() {
							var e = Qe.apply(null, arguments);
							return this.isValid() && e.isValid() ? e > this ? this : e : f()
						}),
					$o = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
				nt("Z", ":"), nt("ZZ", ""), W("Z", vo), W("ZZ", vo), z(["Z", "ZZ"], function(e, t, o) {
					o._useUTC = !0, o._tzm = it(vo, e)
				});
				var Jo = /([\+\-]|\d\d)/gi;
				t.updateOffset = function() {};
				var en = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
					tn =
					/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
				dt.fn = et.prototype, dt.invalid = function() {
					return dt(NaN)
				};
				var on = ut(1, "add"),
					nn = ut(-1, "subtract");
				t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
				var an = D(
					"moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
					function(e) {
						return void 0 === e ? this.localeData() : this.locale(e)
					});
				H(0, ["gg", 2], 0, function() {
						return this.weekYear() % 100
					}), H(0, ["GG", 2], 0, function() {
						return this.isoWeekYear() % 100
					}), vt("gggg", "weekYear"), vt("ggggg", "weekYear"), vt("GGGG", "isoWeekYear"), vt("GGGGG", "isoWeekYear"), P(
						"weekYear", "gg"), P("isoWeekYear", "GG"), I("weekYear", 1), I("isoWeekYear", 1), W("G", _o), W("g", _o), W(
						"GG", mo, ro), W("gg", mo, ro), W("GGGG", go, lo), W("gggg", go, lo), W("GGGGG", fo, po), W("ggggg", fo, po),
					B(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, o, n) {
						t[n.substr(0, 2)] = w(e)
					}), B(["gg", "GG"], function(e, o, n, i) {
						o[i] = t.parseTwoDigitYear(e)
					}), H("Q", 0, "Qo", "quarter"), P("quarter", "Q"), I("quarter", 7), W("Q", ao), z("Q", function(e, t) {
						t[To] = 3 * (w(e) - 1)
					}), H("D", ["DD", 2], "Do", "date"), P("date", "D"), I("date", 9), W("D", mo), W("DD", mo, ro), W("Do",
						function(e, t) {
							return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
						}), z(["D", "DD"], Oo), z("Do", function(e, t) {
						t[Oo] = w(e.match(mo)[0])
					});
				var rn = K("Date", !0);
				H("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), P("dayOfYear", "DDD"), I("dayOfYear", 4), W("DDD", ho), W("DDDD", so),
					z(["DDD", "DDDD"], function(e, t, o) {
						o._dayOfYear = w(e)
					}), H("m", ["mm", 2], 0, "minute"), P("minute", "m"), I("minute", 14), W("m", mo), W("mm", mo, ro), z(["m",
						"mm"
					], Mo);
				var sn = K("Minutes", !1);
				H("s", ["ss", 2], 0, "second"), P("second", "s"), I("second", 15), W("s", mo), W("ss", mo, ro), z(["s", "ss"],
					Po);
				var dn = K("Seconds", !1);
				H("S", 0, 0, function() {
					return ~~(this.millisecond() / 100)
				}), H(0, ["SS", 2], 0, function() {
					return ~~(this.millisecond() / 10)
				}), H(0, ["SSS", 3], 0, "millisecond"), H(0, ["SSSS", 4], 0, function() {
					return 10 * this.millisecond()
				}), H(0, ["SSSSS", 5], 0, function() {
					return 100 * this.millisecond()
				}), H(0, ["SSSSSS", 6], 0, function() {
					return 1e3 * this.millisecond()
				}), H(0, ["SSSSSSS", 7], 0, function() {
					return 1e4 * this.millisecond()
				}), H(0, ["SSSSSSSS", 8], 0, function() {
					return 1e5 * this.millisecond()
				}), H(0, ["SSSSSSSSS", 9], 0, function() {
					return 1e6 * this.millisecond()
				}), P("millisecond", "ms"), I("millisecond", 16), W("S", ho, ao), W("SS", ho, ro), W("SSS", ho, so);
				var ln;
				for (ln = "SSSS"; 9 >= ln.length; ln += "S") W(ln, yo);
				for (ln = "S"; 9 >= ln.length; ln += "S") z(ln, St);
				var pn = K("Milliseconds", !1);
				H("z", 0, 0, "zoneAbbr"), H("zz", 0, 0, "zoneName");
				var mn = _.prototype;
				mn.add = on, mn.calendar = function(e, o) {
						var n = e || Qe(),
							i = at(n, this).startOf("day"),
							a = t.calendarFormat(this, i) || "sameElse",
							r = o && (T(o[a]) ? o[a].call(this, n) : o[a]);
						return this.format(r || this.localeData().calendar(a, this, Qe(n)))
					}, mn.clone = function() {
						return new _(this)
					}, mn.diff = function(e, t, o) {
						var n, i, a;
						return this.isValid() ? (n = at(e, this), !n.isValid()) ? NaN : (i = 6e4 * (n.utcOffset() - this.utcOffset()),
							t = Y(t), (a = "year" === t ? ht(this, n) / 12 : "month" === t ? ht(this, n) : "quarter" === t ? ht(this, n) /
								3 : "second" === t ? (this - n) / 1e3 : "minute" === t ? (this - n) / 6e4 : "hour" === t ? (this - n) /
								36e5 : "day" === t ? (this - n - i) / 864e5 : "week" === t ? (this - n - i) / 6048e5 : this - n, o ? a : v(
									a))) : NaN
					}, mn.endOf = function(e) {
						var o;
						if (e = Y(e), void 0 === e || "millisecond" === e || !this.isValid()) return this;
						var n = this._isUTC ? bt : _t;
						return "year" === e ? o = n(this.year() + 1, 0, 1) - 1 : "quarter" === e ? o = n(this.year(), this.month() -
								this.month() % 3 + 3, 1) - 1 : "month" === e ? o = n(this.year(), this.month() + 1, 1) - 1 : "week" === e ?
							o = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1 : "isoWeek" === e ? o = n(this.year(),
								this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1 : "day" === e || "date" === e ? o = n(this.year(),
								this.month(), this.date() + 1) - 1 : "hour" === e ? (o = this._d.valueOf(), o += 3600000 - yt(o + (this._isUTC ?
								0 : 60000 * this.utcOffset()), 3600000) - 1) : "minute" === e ? (o = this._d.valueOf(), o += 60000 - yt(o,
								60000) - 1) : "second" === e ? (o = this._d.valueOf(), o += 1000 - yt(o, 1000) - 1) : void 0, this._d.setTime(
								o), t.updateOffset(this, !0), this
					}, mn.format = function(e) {
						e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
						var o = F(this, e);
						return this.localeData().postformat(o)
					}, mn.from = function(e, t) {
						return this.isValid() && (b(e) && e.isValid() || Qe(e).isValid()) ? dt({
							to: this,
							from: e
						}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
					}, mn.fromNow = function(e) {
						return this.from(Qe(), e)
					}, mn.to = function(e, t) {
						return this.isValid() && (b(e) && e.isValid() || Qe(e).isValid()) ? dt({
							from: this,
							to: e
						}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
					}, mn.toNow = function(e) {
						return this.to(Qe(), e)
					}, mn.get = function(e) {
						return e = Y(e), T(this[e]) ? this[e]() : this
					}, mn.invalidAt = function() {
						return h(this).overflow
					}, mn.isAfter = function(e, t) {
						var o = b(e) ? e : Qe(e);
						return !!(this.isValid() && o.isValid()) && (t = Y(t) || "millisecond", "millisecond" === t ? this.valueOf() >
							o.valueOf() : o.valueOf() < this.clone().startOf(t).valueOf())
					}, mn.isBefore = function(e, t) {
						var o = b(e) ? e : Qe(e);
						return !!(this.isValid() && o.isValid()) && (t = Y(t) || "millisecond", "millisecond" === t ? this.valueOf() <
							o.valueOf() : this.clone().endOf(t).valueOf() < o.valueOf())
					}, mn.isBetween = function(e, t, o, n) {
						var i = b(e) ? e : Qe(e),
							a = b(t) ? t : Qe(t);
						return !!(this.isValid() && i.isValid() && a.isValid()) && (n = n || "()", ("(" === n[0] ? this.isAfter(i, o) :
							!this.isBefore(i, o)) && (")" === n[1] ? this.isBefore(a, o) : !this.isAfter(a, o)))
					}, mn.isSame = function(e, t) {
						var o = b(e) ? e : Qe(e),
							n;
						return !!(this.isValid() && o.isValid()) && (t = Y(t) || "millisecond", "millisecond" === t ? this.valueOf() ===
							o.valueOf() : (n = o.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())
						)
					}, mn.isSameOrAfter = function(e, t) {
						return this.isSame(e, t) || this.isAfter(e, t)
					}, mn.isSameOrBefore = function(e, t) {
						return this.isSame(e, t) || this.isBefore(e, t)
					}, mn.isValid = function() {
						return g(this)
					}, mn.lang = an, mn.locale = gt, mn.localeData = ft, mn.max = Qo, mn.min = Ko, mn.parsingFlags = function() {
						return p({}, h(this))
					}, mn.set = J, mn.startOf = function(e) {
						var o;
						if (e = Y(e), void 0 === e || "millisecond" === e || !this.isValid()) return this;
						var n = this._isUTC ? bt : _t;
						return "year" === e ? o = n(this.year(), 0, 1) : "quarter" === e ? o = n(this.year(), this.month() - this.month() %
								3, 1) : "month" === e ? o = n(this.year(), this.month(), 1) : "week" === e ? o = n(this.year(), this.month(),
								this.date() - this.weekday()) : "isoWeek" === e ? o = n(this.year(), this.month(), this.date() - (this.isoWeekday() -
								1)) : "day" === e || "date" === e ? o = n(this.year(), this.month(), this.date()) : "hour" === e ? (o = this
								._d.valueOf(), o -= yt(o + (this._isUTC ? 0 : 60000 * this.utcOffset()), 3600000)) : "minute" === e ? (o =
								this._d.valueOf(), o -= yt(o, 60000)) : "second" === e ? (o = this._d.valueOf(), o -= yt(o, 1000)) : void 0,
							this._d.setTime(o), t.updateOffset(this, !0), this
					}, mn.subtract = nn, mn.toArray = function() {
						var e = this;
						return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
					}, mn.toObject = function() {
						var e = this;
						return {
							years: e.year(),
							months: e.month(),
							date: e.date(),
							hours: e.hours(),
							minutes: e.minutes(),
							seconds: e.seconds(),
							milliseconds: e.milliseconds()
						}
					}, mn.toDate = function() {
						return new Date(this.valueOf())
					}, mn.toISOString = function(e) {
						if (!this.isValid()) return null;
						var t = !0 !== e,
							o = t ? this.clone().utc() : this;
						return 0 > o.year() || 9999 < o.year() ? F(o, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" :
							"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : T(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(
							this.valueOf() + 1e3 * (60 * this.utcOffset())).toISOString().replace("Z", F(o, "Z")) : F(o, t ?
							"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
					}, mn.inspect = function() {
						if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
						var e = "moment",
							t = "";
						this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
						var o = "[" + e + "(\"]",
							n = 0 <= this.year() && 9999 >= this.year() ? "YYYY" : "YYYYYY",
							i = t + "[\")]";
						return this.format(o + n + "-MM-DD[T]HH:mm:ss.SSS" + i)
					}, mn.toJSON = function() {
						return this.isValid() ? this.toISOString() : null
					}, mn.toString = function() {
						return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
					}, mn.unix = function() {
						return Mt(this.valueOf() / 1e3)
					}, mn.valueOf = function() {
						return this._d.valueOf() - 6e4 * (this._offset || 0)
					}, mn.creationData = function() {
						return {
							input: this._i,
							format: this._f,
							locale: this._locale,
							isUTC: this._isUTC,
							strict: this._strict
						}
					}, mn.year = Yo, mn.isLeapYear = function() {
						return X(this.year())
					}, mn.weekYear = function(e) {
						return wt.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
					}, mn.isoWeekYear = function(e) {
						return wt.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
					}, mn.quarter = mn.quarters = function(e) {
						return null == e ? Ct((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
					}, mn.month = ae, mn.daysInMonth = function() {
						return te(this.year(), this.month())
					}, mn.week = mn.weeks = function(e) {
						var t = this.localeData().week(this);
						return null == e ? t : this.add(7 * (e - t), "d")
					}, mn.isoWeek = mn.isoWeeks = function(e) {
						var t = ue(this, 1, 4).week;
						return null == e ? t : this.add(7 * (e - t), "d")
					}, mn.weeksInYear = function() {
						var e = this.localeData()._week;
						return ce(this.year(), e.dow, e.doy)
					}, mn.isoWeeksInYear = function() {
						return ce(this.year(), 1, 4)
					}, mn.date = rn, mn.day = mn.days = function(e) {
						if (!this.isValid()) return null == e ? NaN : this;
						var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
						return null == e ? t : (e = he(e, this.localeData()), this.add(e - t, "d"))
					}, mn.weekday = function(e) {
						if (!this.isValid()) return null == e ? NaN : this;
						var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
						return null == e ? t : this.add(e - t, "d")
					}, mn.isoWeekday = function(e) {
						if (!this.isValid()) return null == e ? NaN : this;
						if (null != e) {
							var t = ge(e, this.localeData());
							return this.day(this.day() % 7 ? t : t - 7)
						}
						return this.day() || 7
					}, mn.dayOfYear = function(e) {
						var t = xt((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
						return null == e ? t : this.add(e - t, "d")
					}, mn.hour = mn.hours = Lo, mn.minute = mn.minutes = sn, mn.second = mn.seconds = dn, mn.millisecond = mn.milliseconds =
					pn, mn.utcOffset = function(e, o, n) {
						var i = this._offset || 0,
							a;
						if (!this.isValid()) return null == e ? NaN : this;
						if (null != e) {
							if ("string" != typeof e) 16 > Ot(e) && !n && (e *= 60);
							else if (e = it(vo, e), null === e) return this;
							return !this._isUTC && o && (a = rt(this)), this._offset = e, this._isUTC = !0, null != a && this.add(a, "m"),
								i !== e && (!o || this._changeInProgress ? ct(this, dt(e - i, "m"), 1, !1) : !this._changeInProgress && (
									this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
						}
						return this._isUTC ? i : rt(this)
					}, mn.utc = function(e) {
						return this.utcOffset(0, e)
					}, mn.local = function(e) {
						return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(rt(this), "m")), this
					}, mn.parseZone = function() {
						if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
						else if ("string" == typeof this._i) {
							var e = it(bo, this._i);
							null == e ? this.utcOffset(0, !0) : this.utcOffset(e)
						}
						return this
					}, mn.hasAlignedHourOffset = function(e) {
						return !!this.isValid() && (e = e ? Qe(e).utcOffset() : 0, 0 == (this.utcOffset() - e) % 60)
					}, mn.isDST = function() {
						return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
					}, mn.isLocal = function() {
						return !!this.isValid() && !this._isUTC
					}, mn.isUtcOffset = function() {
						return !!this.isValid() && this._isUTC
					}, mn.isUtc = st, mn.isUTC = st, mn.zoneAbbr = function() {
						return this._isUTC ? "UTC" : ""
					}, mn.zoneName = function() {
						return this._isUTC ? "Coordinated Universal Time" : ""
					}, mn.dates = D("dates accessor is deprecated. Use date instead.", rn), mn.months = D(
						"months accessor is deprecated. Use month instead", ae), mn.years = D(
						"years accessor is deprecated. Use year instead", Yo), mn.zone = D(
						"moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
						function(e, t) {
							return null == e ? -this.utcOffset() : ("string" != typeof e && (e = -e), this.utcOffset(e, t), this)
						}), mn.isDSTShifted = D(
						"isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
						function() {
							if (!a(this._isDSTShifted)) return this._isDSTShifted;
							var e = {};
							if (y(e, this), e = Ze(e), e._a) {
								var t = e._isUTC ? u(e._a) : Qe(e._a);
								this._isDSTShifted = this.isValid() && 0 < k(e._a, t.toArray())
							} else this._isDSTShifted = !1;
							return this._isDSTShifted
						});
				var un = M.prototype;
				un.calendar = function(e, t, o) {
					var n = this._calendar[e] || this._calendar.sameElse;
					return T(n) ? n.call(t, o) : n
				}, un.longDateFormat = function(e) {
					var t = this._longDateFormat[e],
						o = this._longDateFormat[e.toUpperCase()];
					return t || !o ? t : (this._longDateFormat[e] = o.replace(/MMMM|MM|DD|dddd/g, function(e) {
						return e.slice(1)
					}), this._longDateFormat[e])
				}, un.invalidDate = function() {
					return this._invalidDate
				}, un.ordinal = function(e) {
					return this._ordinal.replace("%d", e)
				}, un.preparse = Dt, un.postformat = Dt, un.relativeTime = function(e, t, o, n) {
					var i = this._relativeTime[o];
					return T(i) ? i(e, t, o, n) : i.replace(/%d/i, e)
				}, un.pastFuture = function(e, t) {
					var o = this._relativeTime[0 < e ? "future" : "past"];
					return T(o) ? o(t) : o.replace(/%s/i, t)
				}, un.set = O, un.months = function(e, t) {
					return e ? o(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Io).test(t) ?
						"format" : "standalone"][e.month()] : o(this._months) ? this._months : this._months.standalone
				}, un.monthsShort = function(e, t) {
					return e ? o(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Io.test(t) ? "format" :
						"standalone"][e.month()] : o(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
				}, un.monthsParse = ne, un.monthsRegex = function(e) {
					return this._monthsParseExact ? (l(this, "_monthsRegex") || re.call(this), e ? this._monthsStrictRegex : this._monthsRegex) :
						(l(this, "_monthsRegex") || (this._monthsRegex = ko), this._monthsStrictRegex && e ? this._monthsStrictRegex :
							this._monthsRegex)
				}, un.monthsShortRegex = function(e) {
					return this._monthsParseExact ? (l(this, "_monthsRegex") || re.call(this), e ? this._monthsShortStrictRegex :
						this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = ko), this._monthsShortStrictRegex &&
						e ? this._monthsShortStrictRegex : this._monthsShortRegex)
				}, un.week = function(e) {
					return ue(e, this._week.dow, this._week.doy).week
				}, un.firstDayOfYear = function() {
					return this._week.doy
				}, un.firstDayOfWeek = function() {
					return this._week.dow
				}, un.weekdays = function(e, t) {
					var n = o(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ?
						"format" : "standalone"];
					return !0 === e ? fe(n, this._week.dow) : e ? n[e.day()] : n
				}, un.weekdaysMin = function(e) {
					return !0 === e ? fe(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
				}, un.weekdaysShort = function(e) {
					return !0 === e ? fe(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
				}, un.weekdaysParse = _e, un.weekdaysRegex = function(e) {
					return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || be.call(this), e ? this._weekdaysStrictRegex :
						this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = ko), this._weekdaysStrictRegex &&
						e ? this._weekdaysStrictRegex : this._weekdaysRegex)
				}, un.weekdaysShortRegex = function(e) {
					return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || be.call(this), e ? this._weekdaysShortStrictRegex :
						this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ko), this._weekdaysShortStrictRegex &&
						e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
				}, un.weekdaysMinRegex = function(e) {
					return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || be.call(this), e ? this._weekdaysMinStrictRegex :
						this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ko), this._weekdaysMinStrictRegex &&
						e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
				}, un.isPM = function(e) {
					return "p" === (e + "").toLowerCase().charAt(0)
				}, un.meridiem = function(e, t, o) {
					return 11 < e ? o ? "pm" : "PM" : o ? "am" : "AM"
				}, Te("en", {
					dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
					ordinal: function(e) {
						var t = e % 10,
							o = 1 === w(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th";
						return e + o
					}
				}), t.lang = D("moment.lang is deprecated. Use moment.locale instead.", Te), t.langData = D(
					"moment.langData is deprecated. Use moment.localeData instead.", Ce);
				var cn = Ot,
					hn = Ft("ms"),
					gn = Ft("s"),
					fn = Ft("m"),
					yn = Ft("h"),
					_n = Ft("d"),
					bn = Ft("w"),
					vn = Ft("M"),
					wn = Ft("Q"),
					kn = Ft("y"),
					Sn = Gt("milliseconds"),
					Dn = Gt("seconds"),
					xn = Gt("minutes"),
					Tn = Gt("hours"),
					On = Gt("days"),
					Cn = Gt("months"),
					Mn = Gt("years"),
					Pn = xt,
					Yn = {
						ss: 44,
						s: 45,
						m: 45,
						h: 22,
						d: 26,
						M: 11
					},
					En = Ot,
					In = et.prototype;
				return In.isValid = function() {
						return this._isValid
					}, In.abs = function() {
						var e = this._data;
						return this._milliseconds = cn(this._milliseconds), this._days = cn(this._days), this._months = cn(this._months),
							e.milliseconds = cn(e.milliseconds), e.seconds = cn(e.seconds), e.minutes = cn(e.minutes), e.hours = cn(e.hours),
							e.months = cn(e.months), e.years = cn(e.years), this
					}, In.add = function(e, t) {
						return At(this, e, t, 1)
					}, In.subtract = function(e, t) {
						return At(this, e, t, -1)
					}, In.as = function(e) {
						if (!this.isValid()) return NaN;
						var t = this._milliseconds,
							o, n;
						if (e = Y(e), "month" === e || "quarter" === e || "year" === e) switch (o = this._days + t / 864e5, n = this._months +
							Lt(o), e) {
							case "month":
								return n;
							case "quarter":
								return n / 3;
							case "year":
								return n / 12;
						} else switch (o = this._days + xt(Nt(this._months)), e) {
							case "week":
								return o / 7 + t / 6048e5;
							case "day":
								return o + t / 864e5;
							case "hour":
								return 24 * o + t / 36e5;
							case "minute":
								return 1440 * o + t / 6e4;
							case "second":
								return 86400 * o + t / 1e3;
							case "millisecond":
								return Mt(864e5 * o) + t;
							default:
								throw new Error("Unknown unit " + e);
						}
					}, In.asMilliseconds = hn, In.asSeconds = gn, In.asMinutes = fn, In.asHours = yn, In.asDays = _n, In.asWeeks =
					bn, In.asMonths = vn, In.asQuarters = wn, In.asYears = kn, In.valueOf = function() {
						return this.isValid() ? this._milliseconds + 864e5 * this._days + 2592e6 * (this._months % 12) + 31536e6 * w(
							this._months / 12) : NaN
					}, In._bubble = function() {
						var e = this._milliseconds,
							t = this._days,
							o = this._months,
							n = this._data,
							i, a, r, s, d;
						return 0 <= e && 0 <= t && 0 <= o || 0 >= e && 0 >= t && 0 >= o || (e += 864e5 * Ht(Nt(o) + t), t = 0, o = 0),
							n.milliseconds = e % 1e3, i = v(e / 1e3), n.seconds = i % 60, a = v(i / 60), n.minutes = a % 60, r = v(a / 60),
							n.hours = r % 24, t += v(r / 24), d = v(Lt(t)), o += d, t -= Ht(Nt(d)), s = v(o / 12), o %= 12, n.days = t, n
							.months = o, n.years = s, this
					}, In.clone = function() {
						return dt(this)
					}, In.get = function(e) {
						return e = Y(e), this.isValid() ? this[e + "s"]() : NaN
					}, In.milliseconds = Sn, In.seconds = Dn, In.minutes = xn, In.hours = Tn, In.days = On, In.weeks = function() {
						return v(this.days() / 7)
					}, In.months = Cn, In.years = Mn, In.humanize = function(e) {
						if (!this.isValid()) return this.localeData().invalidDate();
						var t = this.localeData(),
							o = Ut(this, !e, t);
						return e && (o = t.pastFuture(+this, o)), t.postformat(o)
					}, In.toISOString = zt, In.toString = zt, In.toJSON = zt, In.locale = gt, In.localeData = ft, In.toIsoString =
					D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", zt), In.lang = an, H(
						"X", 0, 0, "unix"), H("x", 0, 0, "valueOf"), W("x", _o), W("X", wo), z("X", function(e, t, o) {
						o._d = new Date(1e3 * parseFloat(e, 10))
					}), z("x", function(e, t, o) {
						o._d = new Date(w(e))
					}), t.version = "2.24.0",
					function(e) {
						Bt = e
					}(Qe), t.fn = mn, t.min = function() {
						var e = [].slice.call(arguments, 0);
						return $e("isBefore", e)
					}, t.max = function() {
						var e = [].slice.call(arguments, 0);
						return $e("isAfter", e)
					}, t.now = function() {
						return Date.now ? Date.now() : +new Date
					}, t.utc = u, t.unix = function(e) {
						return Qe(1e3 * e)
					}, t.months = function(e, t) {
						return It(e, t, "months")
					}, t.isDate = s, t.locale = Te, t.invalid = f, t.duration = dt, t.isMoment = b, t.weekdays = function(e, t, o) {
						return Rt(e, t, o, "weekdays")
					}, t.parseZone = function() {
						return Qe.apply(null, arguments).parseZone()
					}, t.localeData = Ce, t.isDuration = tt, t.monthsShort = function(e, t) {
						return It(e, t, "monthsShort")
					}, t.weekdaysMin = function(e, t, o) {
						return Rt(e, t, o, "weekdaysMin")
					}, t.defineLocale = Oe, t.updateLocale = function(e, t) {
						if (null != t) {
							var o = No,
								n, i;
							i = xe(e), null != i && (o = i._config), t = C(o, t), n = new M(t), n.parentLocale = Fo[e], Fo[e] = n, Te(e)
						} else null != Fo[e] && (null == Fo[e].parentLocale ? null != Fo[e] && delete Fo[e] : Fo[e] = Fo[e].parentLocale);
						return Fo[e]
					}, t.locales = Me, t.weekdaysShort = function(e, t, o) {
						return Rt(e, t, o, "weekdaysShort")
					}, t.normalizeUnits = Y, t.relativeTimeRounding = jt, t.relativeTimeThreshold = function(e, t) {
						return void 0 !== Yn[e] && (void 0 === t ? Yn[e] : (Yn[e] = t, "s" === e && (Yn.ss = t - 1), !0))
					}, t.calendarFormat = function(e, t) {
						var o = e.diff(t, "days", !0);
						return -6 > o ? "sameElse" : -1 > o ? "lastWeek" : 0 > o ? "lastDay" : 1 > o ? "sameDay" : 2 > o ? "nextDay" :
							7 > o ? "nextWeek" : "sameElse"
					}, t.prototype = mn, t.HTML5_FMT = {
						DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
						DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
						DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
						DATE: "YYYY-MM-DD",
						TIME: "HH:mm",
						TIME_SECONDS: "HH:mm:ss",
						TIME_MS: "HH:mm:ss.SSS",
						WEEK: "GGGG-[W]WW",
						MONTH: "YYYY-MM"
					}, t
			})
		}),
		Xo = "undefined" != typeof window && window.moment || Zo,
		Ko = ce(oo);
	We.prototype.setOptions = function(e) {
		e && Ko.extend(this.options, e)
	}, We.prototype.redraw = function() {
		return !1
	}, We.prototype.destroy = function() {}, We.prototype._isResized = function() {
		var e = this.props._previousWidth !== this.props.width || this.props._previousHeight !== this.props.height;
		return this.props._previousWidth = this.props.width, this.props._previousHeight = this.props.height, e
	};
	var Qo = We,
		$o = ue(function(e, t) {
			t.convertHiddenOptions = function(e, o, n) {
				if (n && !Array.isArray(n)) return t.convertHiddenOptions(e, o, [n]);
				if (o.hiddenDates = [], n && !0 == Array.isArray(n)) {
					for (var a = 0; a < n.length; a++)
						if (void 0 === n[a].repeat) {
							var r = {};
							r.start = e(n[a].start).toDate().valueOf(), r.end = e(n[a].end).toDate().valueOf(), o.hiddenDates.push(r)
						} o.hiddenDates.sort(function(e, t) {
						return e.start - t.start
					})
				}
			}, t.updateHiddenDates = function(e, o, n) {
				if (n && !Array.isArray(n)) return t.updateHiddenDates(e, o, [n]);
				if (n && void 0 !== o.domProps.centerContainer.width) {
					t.convertHiddenOptions(e, o, n);
					for (var a = e(o.range.start), r = e(o.range.end), s = o.range.end - o.range.start, d = s / o.domProps.centerContainer
							.width, l = 0; l < n.length; l++)
						if (void 0 !== n[l].repeat) {
							var p = e(n[l].start),
								m = e(n[l].end);
							if ("Invalid Date" == p._d) throw new Error("Supplied start date is not valid: " + n[l].start);
							if ("Invalid Date" == m._d) throw new Error("Supplied end date is not valid: " + n[l].end);
							var u = m - p;
							if (u >= 4 * d) {
								var c = 0,
									h = r.clone();
								switch (n[l].repeat) {
									case "daily":
										p.day() != m.day() && (c = 1), p.dayOfYear(a.dayOfYear()), p.year(a.year()), p.subtract(7, "days"), m.dayOfYear(
											a.dayOfYear()), m.year(a.year()), m.subtract(7 - c, "days"), h.add(1, "weeks");
										break;
									case "weekly":
										var g = m.diff(p, "days"),
											f = p.day();
										p.date(a.date()), p.month(a.month()), p.year(a.year()), m = p.clone(), p.day(f), m.day(f), m.add(g, "days"),
											p.subtract(1, "weeks"), m.subtract(1, "weeks"), h.add(1, "weeks");
										break;
									case "monthly":
										p.month() != m.month() && (c = 1), p.month(a.month()), p.year(a.year()), p.subtract(1, "months"), m.month(
											a.month()), m.year(a.year()), m.subtract(1, "months"), m.add(c, "months"), h.add(1, "months");
										break;
									case "yearly":
										p.year() != m.year() && (c = 1), p.year(a.year()), p.subtract(1, "years"), m.year(a.year()), m.subtract(1,
											"years"), m.add(c, "years"), h.add(1, "years");
										break;
									default:
										return void console.log("Wrong repeat format, allowed are: daily, weekly, monthly, yearly. Given:", n[l].repeat);
								}
								for (; p < h;) switch (o.hiddenDates.push({
									start: p.valueOf(),
									end: m.valueOf()
								}), n[l].repeat) {
									case "daily":
										p.add(1, "days"), m.add(1, "days");
										break;
									case "weekly":
										p.add(1, "weeks"), m.add(1, "weeks");
										break;
									case "monthly":
										p.add(1, "months"), m.add(1, "months");
										break;
									case "yearly":
										p.add(1, "y"), m.add(1, "y");
										break;
									default:
										return void console.log("Wrong repeat format, allowed are: daily, weekly, monthly, yearly. Given:", n[l].repeat);
								}
								o.hiddenDates.push({
									start: p.valueOf(),
									end: m.valueOf()
								})
							}
						} t.removeDuplicates(o);
					var y = t.isHidden(o.range.start, o.hiddenDates),
						_ = t.isHidden(o.range.end, o.hiddenDates),
						b = o.range.start,
						v = o.range.end;
					!0 == y.hidden && (b = !0 == o.range.startToFront ? y.startDate - 1 : y.endDate + 1), !0 == _.hidden && (v = !0 ==
						o.range.endToFront ? _.startDate - 1 : _.endDate + 1), (!0 == y.hidden || !0 == _.hidden) && o.range._applyRange(
						b, v)
				}
			}, t.removeDuplicates = function(e) {
				for (var t = e.hiddenDates, o = [], n = 0; n < t.length; n++)
					for (var a = 0; a < t.length; a++) n != a && !0 != t[a].remove && !0 != t[n].remove && (t[a].start >= t[n].start &&
						t[a].end <= t[n].end ? t[a].remove = !0 : t[a].start >= t[n].start && t[a].start <= t[n].end ? (t[n].end = t[
							a].end, t[a].remove = !0) : t[a].end >= t[n].start && t[a].end <= t[n].end && (t[n].start = t[a].start, t[a]
							.remove = !0));
				for (n = 0; n < t.length; n++) !0 !== t[n].remove && o.push(t[n]);
				e.hiddenDates = o, e.hiddenDates.sort(function(e, t) {
					return e.start - t.start
				})
			}, t.printDates = function(e) {
				for (var t = 0; t < e.length; t++) console.log(t, new Date(e[t].start), new Date(e[t].end), e[t].start, e[t].end,
					e[t].remove)
			}, t.stepOverHiddenDates = function(e, t, o) {
				for (var n = !1, a = t.current.valueOf(), r = 0; r < t.hiddenDates.length; r++) {
					var s = t.hiddenDates[r].start,
						d = t.hiddenDates[r].end;
					if (a >= s && a < d) {
						n = !0;
						break
					}
				}
				if (!0 == n && a < t._end.valueOf() && a != o) {
					var l = e(o),
						p = e(d);
					l.year() == p.year() ? l.month() == p.month() ? l.dayOfYear() != p.dayOfYear() && (t.switchedDay = !0) : t.switchedMonth = !
						0 : t.switchedYear = !0, t.current = p
				}
			}, t.toScreen = function(e, o, n) {
				var i;
				if (0 == e.body.hiddenDates.length) return i = e.range.conversion(n), (o.valueOf() - i.offset) * i.scale;
				var a = t.isHidden(o, e.body.hiddenDates);
				!0 == a.hidden && (o = a.startDate);
				var r = t.getHiddenDurationBetween(e.body.hiddenDates, e.range.start, e.range.end);
				if (o < e.range.start) {
					i = e.range.conversion(n, r);
					var s = t.getHiddenDurationBeforeStart(e.body.hiddenDates, o, i.offset);
					return o = e.options.moment(o).toDate().valueOf(), o += s, -(i.offset - o.valueOf()) * i.scale
				}
				if (o > e.range.end) {
					var d = {
						start: e.range.start,
						end: o
					};
					return o = t.correctTimeForHidden(e.options.moment, e.body.hiddenDates, d, o), i = e.range.conversion(n, r), (o
						.valueOf() - i.offset) * i.scale
				}
				return o = t.correctTimeForHidden(e.options.moment, e.body.hiddenDates, e.range, o), i = e.range.conversion(n, r),
					(o.valueOf() - i.offset) * i.scale
			}, t.toTime = function(e, o, n) {
				if (0 == e.body.hiddenDates.length) {
					var i = e.range.conversion(n);
					return new Date(o / i.scale + i.offset)
				}
				var a = t.getHiddenDurationBetween(e.body.hiddenDates, e.range.start, e.range.end),
					r = e.range.end - e.range.start - a,
					s = r * o / n,
					d = t.getAccumulatedHiddenDuration(e.body.hiddenDates, e.range, s);
				return new Date(d + s + e.range.start)
			}, t.getHiddenDurationBetween = function(e, t, o) {
				for (var n = 0, a = 0; a < e.length; a++) {
					var r = e[a].start,
						s = e[a].end;
					r >= t && s < o && (n += s - r)
				}
				return n
			}, t.getHiddenDurationBeforeStart = function(e, t, o) {
				for (var n = 0, a = 0; a < e.length; a++) {
					var r = e[a].start,
						s = e[a].end;
					r >= t && s <= o && (n += s - r)
				}
				return n
			}, t.correctTimeForHidden = function(e, o, n, i) {
				return i = e(i).toDate().valueOf(), i -= t.getHiddenDurationBefore(e, o, n, i), i
			}, t.getHiddenDurationBefore = function(e, t, o, n) {
				var a = 0;
				n = e(n).toDate().valueOf();
				for (var r = 0; r < t.length; r++) {
					var s = t[r].start,
						d = t[r].end;
					s >= o.start && d < o.end && n >= d && (a += d - s)
				}
				return a
			}, t.getAccumulatedHiddenDuration = function(e, t, o) {
				for (var n = 0, a = 0, r = t.start, s = 0; s < e.length; s++) {
					var d = e[s].start,
						l = e[s].end;
					if (d >= t.start && l < t.end)
						if (a += d - r, r = l, a >= o) break;
						else n += l - d
				}
				return n
			}, t.snapAwayFromHidden = function(e, o, n, i) {
				var a = t.isHidden(o, e);
				return !0 == a.hidden ? 0 > n ? !0 == i ? a.startDate - (a.endDate - o) - 1 : a.startDate - 1 : !0 == i ? a.endDate +
					(o - a.startDate) + 1 : a.endDate + 1 : o
			}, t.isHidden = function(e, t) {
				for (var o = 0; o < t.length; o++) {
					var n = t[o].start,
						a = t[o].end;
					if (e >= n && e < a) return {
						hidden: !0,
						startDate: n,
						endDate: a
					}
				}
				return {
					hidden: !1,
					startDate: n,
					endDate: a
				}
			}
		}),
		Jo = $o.convertHiddenOptions,
		en = $o.updateHiddenDates,
		tn = $o.removeDuplicates,
		on = $o.printDates,
		nn = $o.stepOverHiddenDates,
		an = $o.toScreen,
		rn = $o.toTime,
		sn = $o.getHiddenDurationBetween,
		dn = $o.getHiddenDurationBeforeStart,
		ln = $o.correctTimeForHidden,
		pn = $o.getHiddenDurationBefore,
		mn = $o.getAccumulatedHiddenDuration,
		un = $o.snapAwayFromHidden,
		cn = $o.isHidden;
	Ue.prototype = new Qo, Ue.prototype.setOptions = function(e) {
		if (e) {
			Ko.selectiveExtend(["animation", "direction", "min", "max", "zoomMin", "zoomMax", "moveable", "zoomable", "moment",
					"activate", "hiddenDates", "zoomKey", "rtl", "showCurrentTime", "rollingMode", "horizontalScroll"
				], this.options, e), e.rollingMode && e.rollingMode.follow && this.startRolling(), ("start" in e || "end" in e) &&
				this.setRange(e.start, e.end)
		}
	}, Ue.prototype.startRolling = function() {
		function e() {
			o.stopRolling(), o.rolling = !0;
			var n = o.end - o.start,
				i = Ko.convert(new Date, "Date").valueOf(),
				t = i - n * o.options.rollingMode.offset,
				a = i + n * (1 - o.options.rollingMode.offset);
			o.setRange(t, a, {
				animation: !1
			});
			var r = o.conversion(o.body.domProps.center.width).scale;
			n = 1 / r / 10, 30 > n && (n = 30), 1e3 < n && (n = 1e3), o.body.dom.rollingModeBtn.style.visibility = "hidden", o
				.currentTimeTimer = setTimeout(e, n)
		}
		var o = this;
		e()
	}, Ue.prototype.stopRolling = function() {
		this.currentTimeTimer !== void 0 && (clearTimeout(this.currentTimeTimer), this.rolling = !1, this.body.dom.rollingModeBtn
			.style.visibility = "visible")
	}, Ue.prototype.setRange = function(e, t, o, n, i) {
		o || (o = {}), !0 !== o.byUser && (o.byUser = !1);
		var a = this,
			r = null == e ? null : Ko.convert(e, "Date").valueOf(),
			d = null == t ? null : Ko.convert(t, "Date").valueOf();
		if (this._cancelAnimation(), this.millisecondsPerPixelCache = void 0, o.animation) {
			var l = this.start,
				p = this.end,
				m = "object" === Le(o.animation) && "duration" in o.animation ? o.animation.duration : 500,
				u = "object" === Le(o.animation) && "easingFunction" in o.animation ? o.animation.easingFunction :
				"easeInOutQuad",
				c = Ko.easingFunctions[u];
			if (!c) throw new Error("Unknown easing function " + JSON.stringify(u) + ". Choose from: " + Object.keys(Ko.easingFunctions)
				.join(", "));
			var h = new Date().valueOf(),
				g = !1,
				f = function t() {
					if (!a.props.touch.dragging) {
						var u = new Date().valueOf(),
							f = u - h,
							_ = c(f / m),
							b = f > m,
							v = b || null === r ? r : l + (r - l) * _,
							s = b || null === d ? d : p + (d - p) * _;
						y = a._applyRange(v, s), $o.updateHiddenDates(a.options.moment, a.body, a.options.hiddenDates), g = g || y;
						var e = {
							start: new Date(a.start),
							end: new Date(a.end),
							byUser: o.byUser,
							event: o.event
						};
						if (i && i(_, y, b), y && a.body.emitter.emit("rangechange", e), !b) a.animationTimer = setTimeout(t, 20);
						else if (g && (a.body.emitter.emit("rangechanged", e), n)) return n()
					}
				};
			return f()
		}
		var y = this._applyRange(r, d);
		if ($o.updateHiddenDates(this.options.moment, this.body, this.options.hiddenDates), y) {
			var _ = {
				start: new Date(this.start),
				end: new Date(this.end),
				byUser: o.byUser,
				event: o.event
			};
			if (this.body.emitter.emit("rangechange", _), clearTimeout(a.timeoutID), a.timeoutID = setTimeout(function() {
					a.body.emitter.emit("rangechanged", _)
				}, 200), n) return n()
		}
	}, Ue.prototype.getMillisecondsPerPixel = function() {
		return void 0 === this.millisecondsPerPixelCache && (this.millisecondsPerPixelCache = (this.end - this.start) /
			this.body.dom.center.clientWidth), this.millisecondsPerPixelCache
	}, Ue.prototype._cancelAnimation = function() {
		this.animationTimer && (clearTimeout(this.animationTimer), this.animationTimer = null)
	}, Ue.prototype._applyRange = function(e, t) {
		var o = null == e ? this.start : Ko.convert(e, "Date").valueOf(),
			n = null == t ? this.end : Ko.convert(t, "Date").valueOf(),
			i = null == this.options.max ? null : Ko.convert(this.options.max, "Date").valueOf(),
			a = null == this.options.min ? null : Ko.convert(this.options.min, "Date").valueOf(),
			r;
		if (isNaN(o) || null === o) throw new Error("Invalid start \"" + e + "\"");
		if (isNaN(n) || null === n) throw new Error("Invalid end \"" + t + "\"");
		if (n < o && (n = o), null !== a && o < a && (r = a - o, o += r, n += r, null != i && n > i && (n = i)), null !==
			i && n > i && (r = n - i, o -= r, n -= r, null != a && o < a && (o = a)), null !== this.options.zoomMin) {
			var s = parseFloat(this.options.zoomMin);
			if (0 > s && (s = 0), n - o < s) {
				this.end - this.start === s && o >= this.start - .5 && n <= this.end ? (o = this.start, n = this.end) : (r = s -
					(n - o), o -= r / 2, n += r / 2)
			}
		}
		if (null !== this.options.zoomMax) {
			var d = parseFloat(this.options.zoomMax);
			0 > d && (d = 0), n - o > d && (this.end - this.start === d && o < this.start && n > this.end ? (o = this.start, n =
				this.end) : (r = n - o - d, o += r / 2, n -= r / 2))
		}
		var l = this.start != o || this.end != n;
		return o >= this.start && o <= this.end || n >= this.start && n <= this.end || this.start >= o && this.start <= n ||
			this.end >= o && this.end <= n || this.body.emitter.emit("checkRangedItems"), this.start = o, this.end = n, l
	}, Ue.prototype.getRange = function() {
		return {
			start: this.start,
			end: this.end
		}
	}, Ue.prototype.conversion = function(e, t) {
		return Ue.conversion(this.start, this.end, e, t)
	}, Ue.conversion = function(e, t, o, n) {
		return void 0 === n && (n = 0), 0 != o && 0 != t - e ? {
			offset: e,
			scale: o / (t - e - n)
		} : {
			offset: 0,
			scale: 1
		}
	}, Ue.prototype._onDragStart = function(e) {
		this.deltaDifference = 0, this.previousDelta = 0;
		this.options.moveable && this._isInsideRange(e) && this.props.touch.allowDragging && (this.stopRolling(), this.props
			.touch.start = this.start, this.props.touch.end = this.end, this.props.touch.dragging = !0, this.body.dom.root &&
			(this.body.dom.root.style.cursor = "move"))
	}, Ue.prototype._onDrag = function(e) {
		if (e && this.props.touch.dragging && this.options.moveable && this.props.touch.allowDragging) {
			var t = this.options.direction;
			je(t);
			var o = "horizontal" == t ? e.deltaX : e.deltaY;
			o -= this.deltaDifference;
			var n = this.props.touch.end - this.props.touch.start,
				i = $o.getHiddenDurationBetween(this.body.hiddenDates, this.start, this.end);
			n -= i;
			var a = "horizontal" == t ? this.body.domProps.center.width : this.body.domProps.center.height,
				r;
			r = this.options.rtl ? o / a * n : -o / a * n;
			var s = this.props.touch.start + r,
				d = this.props.touch.end + r,
				l = $o.snapAwayFromHidden(this.body.hiddenDates, s, this.previousDelta - o, !0),
				p = $o.snapAwayFromHidden(this.body.hiddenDates, d, this.previousDelta - o, !0);
			if (l != s || p != d) return this.deltaDifference += o, this.props.touch.start = l, this.props.touch.end = p, void this
				._onDrag(e);
			this.previousDelta = o, this._applyRange(s, d);
			var m = new Date(this.start),
				u = new Date(this.end);
			this.body.emitter.emit("rangechange", {
				start: m,
				end: u,
				byUser: !0,
				event: e
			}), this.body.emitter.emit("panmove")
		}
	}, Ue.prototype._onDragEnd = function(e) {
		this.props.touch.dragging && this.options.moveable && this.props.touch.allowDragging && (this.props.touch.dragging = !
			1, this.body.dom.root && (this.body.dom.root.style.cursor = "auto"), this.body.emitter.emit("rangechanged", {
				start: new Date(this.start),
				end: new Date(this.end),
				byUser: !0,
				event: e
			}))
	}, Ue.prototype._onMouseWheel = function(e) {
		var t = 0;
		if ((e.wheelDelta ? t = e.wheelDelta / 120 : e.detail ? t = -e.detail / 3 : e.deltaY && (t = -e.deltaY / 3), !(this
				.options.zoomKey && !e[this.options.zoomKey] && this.options.zoomable || !this.options.zoomable && this.options.moveable
			)) && this.options.zoomable && this.options.moveable && this._isInsideRange(e) && t) {
			var o = 0 > t ? 1 - t / 5 : 1 / (1 + t / 5);
			var n;
			if (this.rolling) n = this.start + (this.end - this.start) * this.options.rollingMode.offset;
			else {
				var i = this.getPointer({
					x: e.clientX,
					y: e.clientY
				}, this.body.dom.center);
				n = this._pointerToDate(i)
			}
			this.zoom(o, n, t, e), e.preventDefault()
		}
	}, Ue.prototype._onTouch = function(e) {
		this.props.touch.start = this.start, this.props.touch.end = this.end, this.props.touch.allowDragging = !0, this.props
			.touch.center = null, this.scaleOffset = 0, this.deltaDifference = 0, Ko.preventDefault(e)
	}, Ue.prototype._onPinch = function(e) {
		if (this.options.zoomable && this.options.moveable) {
			Ko.preventDefault(e), this.props.touch.allowDragging = !1, this.props.touch.center || (this.props.touch.center =
				this.getPointer(e.center, this.body.dom.center)), this.stopRolling();
			var t = 1 / (e.scale + this.scaleOffset),
				o = this._pointerToDate(this.props.touch.center),
				n = $o.getHiddenDurationBetween(this.body.hiddenDates, this.start, this.end),
				i = $o.getHiddenDurationBefore(this.options.moment, this.body.hiddenDates, this, o),
				a = n - i,
				r = o - i + (this.props.touch.start - (o - i)) * t,
				s = o + a + (this.props.touch.end - (o + a)) * t;
			this.startToFront = 0 >= 1 - t, this.endToFront = 0 >= t - 1;
			var d = $o.snapAwayFromHidden(this.body.hiddenDates, r, 1 - t, !0),
				l = $o.snapAwayFromHidden(this.body.hiddenDates, s, t - 1, !0);
			(d != r || l != s) && (this.props.touch.start = d, this.props.touch.end = l, this.scaleOffset = 1 - e.scale, r = d,
				s = l);
			this.setRange(r, s, {
				animation: !1,
				byUser: !0,
				event: e
			}), this.startToFront = !1, this.endToFront = !0
		}
	}, Ue.prototype._isInsideRange = function(e) {
		var t = e.center ? e.center.x : e.clientX,
			o;
		o = this.options.rtl ? t - Ko.getAbsoluteLeft(this.body.dom.centerContainer) : Ko.getAbsoluteRight(this.body.dom.centerContainer) -
			t;
		var n = this.body.util.toTime(o);
		return n >= this.start && n <= this.end
	}, Ue.prototype._pointerToDate = function(e) {
		var t = this.options.direction,
			o;
		if (je(t), "horizontal" == t) return this.body.util.toTime(e.x).valueOf();
		var n = this.body.domProps.center.height;
		return o = this.conversion(n), e.y / o.scale + o.offset
	}, Ue.prototype.getPointer = function(e, t) {
		return this.options.rtl ? {
			x: Ko.getAbsoluteRight(t) - e.x,
			y: e.y - Ko.getAbsoluteTop(t)
		} : {
			x: e.x - Ko.getAbsoluteLeft(t),
			y: e.y - Ko.getAbsoluteTop(t)
		}
	}, Ue.prototype.zoom = function(e, t, o, n) {
		null == t && (t = (this.start + this.end) / 2);
		var i = $o.getHiddenDurationBetween(this.body.hiddenDates, this.start, this.end),
			a = $o.getHiddenDurationBefore(this.options.moment, this.body.hiddenDates, this, t),
			r = i - a,
			s = t - a + (this.start - (t - a)) * e,
			d = t + r + (this.end - (t + r)) * e;
		this.startToFront = !(0 < o), this.endToFront = !(0 < -o);
		var l = $o.snapAwayFromHidden(this.body.hiddenDates, s, o, !0),
			p = $o.snapAwayFromHidden(this.body.hiddenDates, d, -o, !0);
		(l != s || p != d) && (s = l, d = p);
		this.setRange(s, d, {
			animation: !1,
			byUser: !0,
			event: n
		}), this.startToFront = !1, this.endToFront = !0
	}, Ue.prototype.move = function(e) {
		var t = this.end - this.start,
			o = this.start + t * e,
			n = this.end + t * e;
		this.start = o, this.end = n
	}, Ue.prototype.moveTo = function(e) {
		var t = (this.start + this.end) / 2,
			o = t - e,
			n = this.start - o,
			i = this.end - o;
		this.setRange(n, i, {
			animation: !1,
			byUser: !0,
			event: null
		})
	};
	var hn = Ue,
		gn = Ve;
	Ve.prototype.on = Ve.prototype.addEventListener = function(e, t) {
			return this._callbacks = this._callbacks || {}, (this._callbacks[e] = this._callbacks[e] || []).push(t), this
		}, Ve.prototype.once = function(e, t) {
			function o() {
				n.off(e, o), t.apply(this, arguments)
			}
			var n = this;
			return this._callbacks = this._callbacks || {}, o.fn = t, this.on(e, o), this
		}, Ve.prototype.off = Ve.prototype.removeListener = Ve.prototype.removeAllListeners = Ve.prototype.removeEventListener =
		function(e, t) {
			if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
			var o = this._callbacks[e];
			if (!o) return this;
			if (1 == arguments.length) return delete this._callbacks[e], this;
			for (var n = 0, a; n < o.length; n++)
				if (a = o[n], a === t || a.fn === t) {
					o.splice(n, 1);
					break
				} return this
		}, Ve.prototype.emit = function(e) {
			this._callbacks = this._callbacks || {};
			var t = [].slice.call(arguments, 1),
				o = this._callbacks[e];
			if (o) {
				o = o.slice(0);
				for (var n = 0, a = o.length; n < a; ++n) o[n].apply(this, t)
			}
			return this
		}, Ve.prototype.listeners = function(e) {
			return this._callbacks = this._callbacks || {}, this._callbacks[e] || []
		}, Ve.prototype.hasListeners = function(e) {
			return !!this.listeners(e).length
		};
	var fn = ue(function(e) {
			(function(t) {
				e.exports = t()
			})(function() {
				var e = null;
				return function t(o, n) {
					function i(e) {
						return e.match(/[^ ]+/g)
					}

					function a(t) {
						if ("hammer.input" !== t.type) {
							if (t.srcEvent._handled || (t.srcEvent._handled = {}), t.srcEvent._handled[t.type]) return;
							t.srcEvent._handled[t.type] = !0
						}
						var o = !1;
						t.stopPropagation = function() {
							o = !0
						};
						var n = t.srcEvent.stopPropagation.bind(t.srcEvent);
						"function" == typeof n && (t.srcEvent.stopPropagation = function() {
							n(), t.stopPropagation()
						}), t.firstTarget = e;
						for (var a = e, r; a && !o;) {
							if (r = a.hammer, r)
								for (var s = 0, d; s < r.length; s++)
									if (d = r[s]._handlers[t.type], d)
										for (var l = 0; l < d.length && !o; l++) d[l](t);
							a = a.parentNode
						}
					}
					var r = n || {
						preventDefault: !1
					};
					if (o.Manager) {
						var s = o,
							d = function(e, n) {
								var i = Object.create(r);
								return n && s.assign(i, n), t(new s(e, i), i)
							};
						return s.assign(d, s), d.Manager = function(e, n) {
							var i = Object.create(r);
							return n && s.assign(i, n), t(new s.Manager(e, i), i)
						}, d
					}
					var l = Object.create(o),
						p = o.element;
					return p.hammer || (p.hammer = []), p.hammer.push(l), o.on("hammer.input", function(t) {
						(!0 === r.preventDefault || r.preventDefault === t.pointerType) && t.preventDefault(), t.isFirst && (e = t.target)
					}), l._handlers = {}, l.on = function(e, t) {
						return i(e).forEach(function(e) {
							var n = l._handlers[e];
							n || (l._handlers[e] = n = [], o.on(e, a)), n.push(t)
						}), l
					}, l.off = function(e, t) {
						return i(e).forEach(function(e) {
							var n = l._handlers[e];
							n && (n = t ? n.filter(function(e) {
								return e !== t
							}) : [], 0 < n.length ? l._handlers[e] = n : (o.off(e, a), delete l._handlers[e]))
						}), l
					}, l.emit = function(t, n) {
						e = n.target, o.emit(t, n)
					}, l.destroy = function() {
						var e = o.element.hammer,
							t = e.indexOf(l); - 1 !== t && e.splice(t, 1), e.length || delete o.element.hammer, l._handlers = {}, o.destroy()
					}, l
				}
			})
		}),
		yn = ue(function(e) {
			(function(t, o, n, a) {
				function r(e, t, o) {
					return setTimeout(m(e, o), t)
				}

				function s(e, t, o) {
					return !!Array.isArray(e) && (d(e, o[t], o), !0)
				}

				function d(e, t, o) {
					if (e)
						if (e.forEach) e.forEach(t, o);
						else if (e.length !== a)
						for (n = 0; n < e.length;) t.call(o, e[n], n, e), n++;
					else
						for (var n in e) e.hasOwnProperty(n) && t.call(o, e[n], n, e)
				}

				function l(o, n, i) {
					return function() {
						var a = new Error("get-stack-trace"),
							e = a && a.stack ? a.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(
								/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
							r = t.console && (t.console.warn || t.console.log);
						return r && r.call(t.console, "DEPRECATED METHOD: " + n + "\n" + i + " AT \n", e), o.apply(this, arguments)
					}
				}

				function p(e, t, o) {
					var n = t.prototype,
						i;
					i = e.prototype = Object.create(n), i.constructor = e, i._super = n, o && ye(i, o)
				}

				function m(e, t) {
					return function() {
						return e.apply(t, arguments)
					}
				}

				function u(e, t) {
					return "function" == typeof e ? e.apply(t ? t[0] || a : a, t) : e
				}

				function c(e, t) {
					return e === a ? t : e
				}

				function h(e, t, o) {
					d(_(t), function(t) {
						e.addEventListener(t, o, !1)
					})
				}

				function g(e, t, o) {
					d(_(t), function(t) {
						e.removeEventListener(t, o, !1)
					})
				}

				function f(e, t) {
					for (; e;) {
						if (e == t) return !0;
						e = e.parentNode
					}
					return !1
				}

				function y(e, t) {
					return -1 < e.indexOf(t)
				}

				function _(e) {
					return e.trim().split(/\s+/g)
				}

				function b(e, t, o) {
					if (e.indexOf && !o) return e.indexOf(t);
					for (var n = 0; n < e.length;) {
						if (o && e[n][o] == t || !o && e[n] === t) return n;
						n++
					}
					return -1
				}

				function v(e) {
					return Array.prototype.slice.call(e, 0)
				}

				function w(e, t, o) {
					for (var n = [], a = [], r = 0, s; r < e.length;) s = t ? e[r][t] : e[r], 0 > b(a, s) && n.push(e[r]), a[r] = s,
						r++;
					return o && (t ? n = n.sort(function(e, o) {
						return e[t] > o[t]
					}) : n = n.sort()), n
				}

				function k(e, t) {
					for (var o = t[0].toUpperCase() + t.slice(1), n = 0, r, s; n < ue.length;) {
						if (r = ue[n], s = r ? r + o : t, s in e) return s;
						n++
					}
					return a
				}

				function S() {
					return ve++
				}

				function D(e) {
					var o = e.ownerDocument || e;
					return o.defaultView || o.parentWindow || t
				}

				function x(e, t) {
					var o = this;
					this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler =
						function(t) {
							u(e.options.enable, [e]) && o.handler(t)
						}, this.init()
				}

				function T(e) {
					var t = e.options.inputClass,
						o;
					return o = t ? t : Se ? G : De ? j : ke ? z : F, new o(e, O)
				}

				function O(e, t, o) {
					var n = o.pointers.length,
						i = o.changedPointers.length,
						a = t & 1 && 0 == n - i;
					o.isFirst = !!a, o.isFinal = !!(t & 12 && 0 == n - i), a && (e.session = {}), o.eventType = t, C(e, o), e.emit(
						"hammer.input", o), e.recognize(o), e.session.prevInput = o
				}

				function C(e, t) {
					var o = e.session,
						n = t.pointers,
						i = n.length;
					o.firstInput || (o.firstInput = Y(t)), 1 < i && !o.firstMultiple ? o.firstMultiple = Y(t) : 1 === i && (o.firstMultiple = !
						1);
					var a = o.firstInput,
						r = o.firstMultiple,
						s = r ? r.center : a.center,
						d = t.center = E(n);
					t.timeStamp = fe(), t.deltaTime = t.timeStamp - a.timeStamp, t.angle = H(s, d), t.distance = A(s, d), M(o, t),
						t.offsetDirection = R(t.deltaX, t.deltaY);
					var l = I(t.deltaTime, t.deltaX, t.deltaY);
					t.overallVelocityX = l.x, t.overallVelocityY = l.y, t.overallVelocity = ge(l.x) > ge(l.y) ? l.x : l.y, t.scale =
						r ? N(r.pointers, n) : 1, t.rotation = r ? L(r.pointers, n) : 0, t.maxPointers = o.prevInput ? t.pointers.length >
						o.prevInput.maxPointers ? t.pointers.length : o.prevInput.maxPointers : t.pointers.length, P(o, t);
					var p = e.element;
					f(t.srcEvent.target, p) && (p = t.srcEvent.target), t.target = p
				}

				function M(e, t) {
					var o = t.center,
						n = e.offsetDelta || {},
						i = e.prevDelta || {},
						a = e.prevInput || {};
					(t.eventType === 1 || a.eventType === 4) && (i = e.prevDelta = {
						x: a.deltaX || 0,
						y: a.deltaY || 0
					}, n = e.offsetDelta = {
						x: o.x,
						y: o.y
					}), t.deltaX = i.x + (o.x - n.x), t.deltaY = i.y + (o.y - n.y)
				}

				function P(e, t) {
					var o = e.lastInterval || t,
						n = t.timeStamp - o.timeStamp,
						i, r, s, d;
					if (t.eventType != 8 && (n > 25 || o.velocity === a)) {
						var l = t.deltaX - o.deltaX,
							p = t.deltaY - o.deltaY,
							m = I(n, l, p);
						r = m.x, s = m.y, i = ge(m.x) > ge(m.y) ? m.x : m.y, d = R(l, p), e.lastInterval = t
					} else i = o.velocity, r = o.velocityX, s = o.velocityY, d = o.direction;
					t.velocity = i, t.velocityX = r, t.velocityY = s, t.direction = d
				}

				function Y(e) {
					for (var t = [], o = 0; o < e.pointers.length;) t[o] = {
						clientX: he(e.pointers[o].clientX),
						clientY: he(e.pointers[o].clientY)
					}, o++;
					return {
						timeStamp: fe(),
						pointers: t,
						center: E(t),
						deltaX: e.deltaX,
						deltaY: e.deltaY
					}
				}

				function E(e) {
					var t = e.length;
					if (1 === t) return {
						x: he(e[0].clientX),
						y: he(e[0].clientY)
					};
					for (var o = 0, n = 0, a = 0; a < t;) o += e[a].clientX, n += e[a].clientY, a++;
					return {
						x: he(o / t),
						y: he(n / t)
					}
				}

				function I(e, t, o) {
					return {
						x: t / e || 0,
						y: o / e || 0
					}
				}

				function R(e, t) {
					return e === t ? 1 : ge(e) >= ge(t) ? 0 > e ? 2 : 4 : 0 > t ? 8 : 16
				}

				function A(e, t, o) {
					o || (o = Fe);
					var n = t[o[0]] - e[o[0]],
						i = t[o[1]] - e[o[1]];
					return Dt(n * n + i * i)
				}

				function H(e, t, o) {
					o || (o = Fe);
					var n = t[o[0]] - e[o[0]],
						i = t[o[1]] - e[o[1]];
					return 180 * St(i, n) / kt
				}

				function L(e, t) {
					return H(t[1], t[0], Ge) + H(e[1], e[0], Ge)
				}

				function N(e, t) {
					return A(t[0], t[1], Ge) / A(e[0], e[1], Ge)
				}

				function F() {
					this.evEl = "mousedown", this.evWin = "mousemove mouseup", this.pressed = !1, x.apply(this, arguments)
				}

				function G() {
					this.evEl = Ve, this.evWin = ze, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
				}

				function W() {
					this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, x.apply(
						this, arguments)
				}

				function U(e, t) {
					var o = v(e.touches),
						n = v(e.changedTouches);
					return 12 & t && (o = w(o.concat(n), "identifier", !0)), [o, n]
				}

				function j() {
					this.evTarget = "touchstart touchmove touchend touchcancel", this.targetIds = {}, x.apply(this, arguments)
				}

				function V(e, t) {
					var o = v(e.touches),
						n = this.targetIds;
					if (3 & t && 1 === o.length) return n[o[0].identifier] = !0, [o, o];
					var a = v(e.changedTouches),
						r = [],
						s = this.target,
						d, l;
					if (l = o.filter(function(e) {
							return f(e.target, s)
						}), 1 === t)
						for (d = 0; d < l.length;) n[l[d].identifier] = !0, d++;
					for (d = 0; d < a.length;) n[a[d].identifier] && r.push(a[d]), 12 & t && delete n[a[d].identifier], d++;
					return r.length ? [w(l.concat(r), "identifier", !0), r] : void 0
				}

				function z() {
					x.apply(this, arguments);
					var e = m(this.handler, this);
					this.touch = new j(this.manager, e), this.mouse = new F(this.manager, e), this.primaryTouch = null, this.lastTouches = []
				}

				function B(e, t) {
					e & 1 ? (this.primaryTouch = t.changedPointers[0].identifier, q.call(this, t)) : e & 12 && q.call(this, t)
				}

				function q(e) {
					var t = e.changedPointers[0];
					if (t.identifier === this.primaryTouch) {
						var o = {
							x: t.clientX,
							y: t.clientY
						};
						this.lastTouches.push(o);
						var n = this.lastTouches,
							i = function() {
								var e = n.indexOf(o); - 1 < e && n.splice(e, 1)
							};
						setTimeout(i, 2500)
					}
				}

				function Z(e) {
					for (var o = e.srcEvent.clientX, n = e.srcEvent.clientY, a = 0; a < this.lastTouches.length; a++) {
						var r = this.lastTouches[a],
							t = Ot(o - r.x),
							s = Ot(n - r.y);
						if (t <= 25 && s <= 25) return !0
					}
					return !1
				}

				function X(e, t) {
					this.manager = e, this.set(t)
				}

				function K(e) {
					if (y(e, "none")) return "none";
					var t = y(e, "pan-x"),
						o = y(e, "pan-y");
					return t && o ? "none" : t || o ? t ? "pan-x" : "pan-y" : y(e, "manipulation") ? "manipulation" : "auto"
				}

				function Q(e) {
					this.options = ye({}, this.defaults, e || {}), this.id = S(), this.manager = null, this.options.enable = c(this
						.options.enable, !0), this.state = 1, this.simultaneous = {}, this.requireFail = []
				}

				function $(e) {
					if (e & 16) return "cancel";
					return 8 & e ? "end" : 4 & e ? "move" : 2 & e ? "start" : ""
				}

				function J(e) {
					if (e == 16) return "down";
					return 8 == e ? "up" : 2 == e ? "left" : 4 == e ? "right" : ""
				}

				function ee(e, t) {
					var o = t.manager;
					return o ? o.get(e) : e
				}

				function te() {
					Q.apply(this, arguments)
				}

				function oe() {
					te.apply(this, arguments), this.pX = null, this.pY = null
				}

				function ne() {
					te.apply(this, arguments)
				}

				function ie() {
					Q.apply(this, arguments), this._timer = null, this._input = null
				}

				function ae() {
					te.apply(this, arguments)
				}

				function re() {
					te.apply(this, arguments)
				}

				function se() {
					Q.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count =
						0
				}

				function de(e, t) {
					return t = t || {}, t.recognizers = c(t.recognizers, de.defaults.preset), new le(e, t)
				}

				function le(e, t) {
					this.options = ye({}, de.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {},
						this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = T(this), this.touchAction =
						new X(this, this.options.touchAction), pe(this, !0), d(this.options.recognizers, function(e) {
							var t = this.add(new e[0](e[1]));
							e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
						}, this)
				}

				function pe(e, t) {
					var o = e.element;
					if (o.style) {
						var n;
						d(e.options.cssProps, function(i, a) {
							n = k(o.style, a), t ? (e.oldCssProps[n] = o.style[n], o.style[n] = i) : o.style[n] = e.oldCssProps[n] ||
								""
						}), t || (e.oldCssProps = {})
					}
				}

				function me(e, t) {
					var n = o.createEvent("Event");
					n.initEvent(e, !0, !0), n.gesture = t, t.target.dispatchEvent(n)
				}
				var ue = ["", "webkit", "Moz", "MS", "ms", "o"],
					ce = o.createElement("div"),
					he = xt,
					ge = Ot,
					fe = Date.now,
					ye;
				ye = "function" == typeof Object.assign ? Object.assign : function(e) {
					if (e === a || null === e) throw new TypeError("Cannot convert undefined or null to object");
					for (var t = Object(e), o = 1, n; o < arguments.length; o++)
						if (n = arguments[o], n !== a && null !== n)
							for (var i in n) n.hasOwnProperty(i) && (t[i] = n[i]);
					return t
				};
				var _e = l(function(e, t, o) {
						for (var n = Object.keys(t), r = 0; r < n.length;)(!o || o && e[n[r]] === a) && (e[n[r]] = t[n[r]]), r++;
						return e
					}, "extend", "Use `assign`."),
					be = l(function(e, t) {
						return _e(e, t, !0)
					}, "merge", "Use `assign`."),
					ve = 1,
					we = /mobile|tablet|ip(ad|hone|od)|android/i,
					ke = "ontouchstart" in t,
					Se = k(t, "PointerEvent") !== a,
					De = ke && we.test(navigator.userAgent),
					xe = "touch",
					Te = "mouse",
					Oe = 1,
					Ce = 2,
					Me = 4,
					Pe = 8,
					Ye = 1,
					Ee = 2,
					Ie = 4,
					Re = 8,
					Ae = 16,
					He = Ee | Ie,
					Le = Re | Ae,
					Ne = He | Le,
					Fe = ["x", "y"],
					Ge = ["clientX", "clientY"];
				x.prototype = {
					handler: function() {},
					init: function() {
						this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget,
							this.domHandler), this.evWin && h(D(this.element), this.evWin, this.domHandler)
					},
					destroy: function() {
						this.evEl && g(this.element, this.evEl, this.domHandler), this.evTarget && g(this.target, this.evTarget,
							this.domHandler), this.evWin && g(D(this.element), this.evWin, this.domHandler)
					}
				};
				var We = {
					mousedown: Oe,
					mousemove: Ce,
					mouseup: Me
				};
				p(F, x, {
					handler: function(e) {
						var t = We[e.type];
						t & Oe && 0 === e.button && (this.pressed = !0), t & Ce && 1 !== e.which && (t = Me);
						this.pressed && (t & Me && (this.pressed = !1), this.callback(this.manager, t, {
							pointers: [e],
							changedPointers: [e],
							pointerType: Te,
							srcEvent: e
						}))
					}
				});
				var Ue = {
						pointerdown: Oe,
						pointermove: Ce,
						pointerup: Me,
						pointercancel: Pe,
						pointerout: Pe
					},
					je = {
						2: xe,
						3: "pen",
						4: Te,
						5: "kinect"
					},
					Ve = "pointerdown",
					ze = "pointermove pointerup pointercancel";
				t.MSPointerEvent && !t.PointerEvent && (Ve = "MSPointerDown", ze = "MSPointerMove MSPointerUp MSPointerCancel"),
					p(G, x, {
						handler: function(e) {
							var t = this.store,
								o = !1,
								n = e.type.toLowerCase().replace("ms", ""),
								i = Ue[n],
								a = je[e.pointerType] || e.pointerType,
								r = b(t, e.pointerId, "pointerId");
							i & Oe && (0 === e.button || a == xe) ? 0 > r && (t.push(e), r = t.length - 1) : i & (Me | Pe) && (o = !0);
							0 > r || (t[r] = e, this.callback(this.manager, i, {
								pointers: t,
								changedPointers: [e],
								pointerType: a,
								srcEvent: e
							}), o && t.splice(r, 1))
						}
					});
				var Be = {
					touchstart: Oe,
					touchmove: Ce,
					touchend: Me,
					touchcancel: Pe
				};
				p(W, x, {
					handler: function(e) {
						var t = Be[e.type];
						if (t === Oe && (this.started = !0), !!this.started) {
							var o = U.call(this, e, t);
							t & (Me | Pe) && 0 == o[0].length - o[1].length && (this.started = !1), this.callback(this.manager, t, {
								pointers: o[0],
								changedPointers: o[1],
								pointerType: xe,
								srcEvent: e
							})
						}
					}
				});
				var qe = {
					touchstart: Oe,
					touchmove: Ce,
					touchend: Me,
					touchcancel: Pe
				};
				p(j, x, {
					handler: function(e) {
						var t = qe[e.type],
							o = V.call(this, e, t);
						o && this.callback(this.manager, t, {
							pointers: o[0],
							changedPointers: o[1],
							pointerType: xe,
							srcEvent: e
						})
					}
				});
				p(z, x, {
					handler: function(e, t, o) {
						var n = o.pointerType == xe,
							i = o.pointerType == Te;
						if (!(i && o.sourceCapabilities && o.sourceCapabilities.firesTouchEvents)) {
							if (n) B.call(this, t, o);
							else if (i && Z.call(this, o)) return;
							this.callback(e, t, o)
						}
					},
					destroy: function() {
						this.touch.destroy(), this.mouse.destroy()
					}
				});
				var Ze = k(ce.style, "touchAction"),
					Xe = Ze !== a,
					Ke = "compute",
					Qe = "none",
					$e = "pan-x",
					Je = "pan-y",
					et = function() {
						if (!Xe) return !1;
						var e = {},
							o = t.CSS && t.CSS.supports;
						return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) {
							e[n] = !o || t.CSS.supports("touch-action", n)
						}), e
					}();
				X.prototype = {
					set: function(e) {
						e == Ke && (e = this.compute()), Xe && this.manager.element.style && et[e] && (this.manager.element.style[Ze] =
							e), this.actions = e.toLowerCase().trim()
					},
					update: function() {
						this.set(this.manager.options.touchAction)
					},
					compute: function() {
						var e = [];
						return d(this.manager.recognizers, function(t) {
							u(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
						}), K(e.join(" "))
					},
					preventDefaults: function(e) {
						var t = e.srcEvent,
							o = e.offsetDirection;
						if (this.manager.session.prevented) return void t.preventDefault();
						var n = this.actions,
							i = y(n, Qe) && !et[Qe],
							a = y(n, Je) && !et[Je],
							r = y(n, $e) && !et[$e];
						if (i) {
							var s = 1 === e.pointers.length,
								d = 2 > e.distance,
								l = 250 > e.deltaTime;
							if (s && d && l) return
						}
						return r && a ? void 0 : i || a && o & He || r && o & Le ? this.preventSrc(t) : void 0
					},
					preventSrc: function(e) {
						this.manager.session.prevented = !0, e.preventDefault()
					}
				};
				var tt = 2,
					ot = 4,
					nt = 8,
					it = nt,
					at = 16,
					rt = 32;
				Q.prototype = {
					defaults: {},
					set: function(e) {
						return ye(this.options, e), this.manager && this.manager.touchAction.update(), this
					},
					recognizeWith: function(e) {
						if (s(e, "recognizeWith", this)) return this;
						var t = this.simultaneous;
						return e = ee(e, this), t[e.id] || (t[e.id] = e, e.recognizeWith(this)), this
					},
					dropRecognizeWith: function(e) {
						return s(e, "dropRecognizeWith", this) ? this : (e = ee(e, this), delete this.simultaneous[e.id], this)
					},
					requireFailure: function(e) {
						if (s(e, "requireFailure", this)) return this;
						var t = this.requireFail;
						return e = ee(e, this), -1 === b(t, e) && (t.push(e), e.requireFailure(this)), this
					},
					dropRequireFailure: function(e) {
						if (s(e, "dropRequireFailure", this)) return this;
						e = ee(e, this);
						var t = b(this.requireFail, e);
						return -1 < t && this.requireFail.splice(t, 1), this
					},
					hasRequireFailures: function() {
						return 0 < this.requireFail.length
					},
					canRecognizeWith: function(e) {
						return !!this.simultaneous[e.id]
					},
					emit: function(e) {
						function t(t) {
							o.manager.emit(t, e)
						}
						var o = this,
							n = this.state;
						n < nt && t(o.options.event + $(n)), t(o.options.event), e.additionalEvent && t(e.additionalEvent), n >= nt &&
							t(o.options.event + $(n))
					},
					tryEmit: function(e) {
						return this.canEmit() ? this.emit(e) : void(this.state = rt)
					},
					canEmit: function() {
						for (var e = 0; e < this.requireFail.length;) {
							if (!(this.requireFail[e].state & (rt | 1))) return !1;
							e++
						}
						return !0
					},
					recognize: function(e) {
						var t = ye({}, e);
						return u(this.options.enable, [this, t]) ? void(this.state & (it | at | rt) && (this.state = 1), this.state =
							this.process(t), this.state & (tt | ot | nt | at) && this.tryEmit(t)) : (this.reset(), void(this.state =
							rt))
					},
					process: function() {},
					getTouchAction: function() {},
					reset: function() {}
				}, p(te, Q, {
					defaults: {
						pointers: 1
					},
					attrTest: function(e) {
						var t = this.options.pointers;
						return 0 === t || e.pointers.length === t
					},
					process: function(e) {
						var t = this.state,
							o = e.eventType,
							n = t & (tt | ot),
							i = this.attrTest(e);
						if (n && (o & Pe || !i)) return t | at;
						return n || i ? o & Me ? t | nt : t & tt ? t | ot : tt : rt
					}
				}), p(oe, te, {
					defaults: {
						event: "pan",
						threshold: 10,
						pointers: 1,
						direction: Ne
					},
					getTouchAction: function() {
						var e = this.options.direction,
							t = [];
						return e & He && t.push(Je), e & Le && t.push($e), t
					},
					directionTest: function(e) {
						var t = this.options,
							o = !0,
							n = e.distance,
							i = e.direction,
							a = e.deltaX,
							r = e.deltaY;
						return i & t.direction || (t.direction & He ? (i = 0 === a ? Ye : 0 > a ? Ee : Ie, o = a != this.pX, n = Ot(
								e.deltaX)) : (i = 0 === r ? Ye : 0 > r ? Re : Ae, o = r != this.pY, n = Ot(e.deltaY))), e.direction = i,
							o && n > t.threshold && i & t.direction
					},
					attrTest: function(e) {
						return te.prototype.attrTest.call(this, e) && (this.state & tt || !(this.state & tt) && this.directionTest(
							e))
					},
					emit: function(e) {
						this.pX = e.deltaX, this.pY = e.deltaY;
						var t = J(e.direction);
						t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
					}
				}), p(ne, te, {
					defaults: {
						event: "pinch",
						threshold: 0,
						pointers: 2
					},
					getTouchAction: function() {
						return [Qe]
					},
					attrTest: function(e) {
						return this._super.attrTest.call(this, e) && (Ot(e.scale - 1) > this.options.threshold || this.state & tt)
					},
					emit: function(e) {
						if (1 !== e.scale) {
							var t = 1 > e.scale ? "in" : "out";
							e.additionalEvent = this.options.event + t
						}
						this._super.emit.call(this, e)
					}
				}), p(ie, Q, {
					defaults: {
						event: "press",
						pointers: 1,
						time: 251,
						threshold: 9
					},
					getTouchAction: function() {
						return ["auto"]
					},
					process: function(e) {
						var t = this.options,
							o = e.pointers.length === t.pointers,
							n = e.distance < t.threshold,
							i = e.deltaTime > t.time;
						if (this._input = e, !n || !o || e.eventType & (Me | Pe) && !i) this.reset();
						else if (e.eventType & Oe) this.reset(), this._timer = r(function() {
							this.state = it, this.tryEmit()
						}, t.time, this);
						else if (e.eventType & Me) return it;
						return rt
					},
					reset: function() {
						clearTimeout(this._timer)
					},
					emit: function(e) {
						this.state !== it || (e && e.eventType & Me ? this.manager.emit(this.options.event + "up", e) : (this._input
							.timeStamp = fe(), this.manager.emit(this.options.event, this._input)))
					}
				}), p(ae, te, {
					defaults: {
						event: "rotate",
						threshold: 0,
						pointers: 2
					},
					getTouchAction: function() {
						return [Qe]
					},
					attrTest: function(e) {
						return this._super.attrTest.call(this, e) && (Ot(e.rotation) > this.options.threshold || this.state & tt)
					}
				}), p(re, te, {
					defaults: {
						event: "swipe",
						threshold: 10,
						velocity: .3,
						direction: He | Le,
						pointers: 1
					},
					getTouchAction: function() {
						return oe.prototype.getTouchAction.call(this)
					},
					attrTest: function(e) {
						var t = this.options.direction,
							o;
						return t & (He | Le) ? o = e.overallVelocity : t & He ? o = e.overallVelocityX : t & Le && (o = e.overallVelocityY),
							this._super.attrTest.call(this, e) && t & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers ==
							this.options.pointers && ge(o) > this.options.velocity && e.eventType & Me
					},
					emit: function(e) {
						var t = J(e.offsetDirection);
						t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
					}
				}), p(se, Q, {
					defaults: {
						event: "tap",
						pointers: 1,
						taps: 1,
						interval: 300,
						time: 250,
						threshold: 9,
						posThreshold: 10
					},
					getTouchAction: function() {
						return ["manipulation"]
					},
					process: function(e) {
						var t = this.options,
							o = e.pointers.length === t.pointers,
							n = e.distance < t.threshold,
							i = e.deltaTime < t.time;
						if (this.reset(), e.eventType & Oe && 0 === this.count) return this.failTimeout();
						if (n && i && o) {
							if (e.eventType != Me) return this.failTimeout();
							var a = !this.pTime || e.timeStamp - this.pTime < t.interval,
								s = !this.pCenter || A(this.pCenter, e.center) < t.posThreshold;
							this.pTime = e.timeStamp, this.pCenter = e.center, s && a ? this.count += 1 : this.count = 1, this._input =
								e;
							var d = this.count % t.taps;
							if (0 == d) return this.hasRequireFailures() ? (this._timer = r(function() {
								this.state = it, this.tryEmit()
							}, t.interval, this), tt) : it
						}
						return rt
					},
					failTimeout: function() {
						return this._timer = r(function() {
							this.state = rt
						}, this.options.interval, this), rt
					},
					reset: function() {
						clearTimeout(this._timer)
					},
					emit: function() {
						this.state == it && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
					}
				}), de.VERSION = "2.0.7", de.defaults = {
					domEvents: !1,
					touchAction: Ke,
					enable: !0,
					inputTarget: null,
					inputClass: null,
					preset: [
						[ae, {
							enable: !1
						}],
						[ne, {
								enable: !1
							},
							["rotate"]
						],
						[re, {
							direction: He
						}],
						[oe, {
								direction: He
							},
							["swipe"]
						],
						[se],
						[se, {
								event: "doubletap",
								taps: 2
							},
							["tap"]
						],
						[ie]
					],
					cssProps: {
						userSelect: "none",
						touchSelect: "none",
						touchCallout: "none",
						contentZooming: "none",
						userDrag: "none",
						tapHighlightColor: "rgba(0,0,0,0)"
					}
				};
				var st = 2;
				le.prototype = {
					set: function(e) {
						return ye(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(),
							this.input.target = e.inputTarget, this.input.init()), this
					},
					stop: function(e) {
						this.session.stopped = e ? st : 1
					},
					recognize: function(e) {
						var t = this.session;
						if (!t.stopped) {
							this.touchAction.preventDefaults(e);
							var o = this.recognizers,
								n = t.curRecognizer,
								a;
							(!n || n && n.state & it) && (n = t.curRecognizer = null);
							for (var r = 0; r < o.length;) a = o[r], t.stopped !== st && (!n || a == n || a.canRecognizeWith(n)) ? a.recognize(
								e) : a.reset(), !n && a.state & (tt | ot | nt) && (n = t.curRecognizer = a), r++
						}
					},
					get: function(e) {
						if (e instanceof Q) return e;
						for (var t = this.recognizers, o = 0; o < t.length; o++)
							if (t[o].options.event == e) return t[o];
						return null
					},
					add: function(e) {
						if (s(e, "add", this)) return this;
						var t = this.get(e.options.event);
						return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
					},
					remove: function(e) {
						if (s(e, "remove", this)) return this;
						if (e = this.get(e), e) {
							var t = this.recognizers,
								o = b(t, e); - 1 !== o && (t.splice(o, 1), this.touchAction.update())
						}
						return this
					},
					on: function(e, t) {
						if (e !== a && t !== a) {
							var o = this.handlers;
							return d(_(e), function(e) {
								o[e] = o[e] || [], o[e].push(t)
							}), this
						}
					},
					off: function(e, t) {
						if (e !== a) {
							var o = this.handlers;
							return d(_(e), function(e) {
								t ? o[e] && o[e].splice(b(o[e], t), 1) : delete o[e]
							}), this
						}
					},
					emit: function(e, t) {
						this.options.domEvents && me(e, t);
						var o = this.handlers[e] && this.handlers[e].slice();
						if (o && o.length) {
							t.type = e, t.preventDefault = function() {
								t.srcEvent.preventDefault()
							};
							for (var n = 0; n < o.length;) o[n](t), n++
						}
					},
					destroy: function() {
						this.element && pe(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element =
							null
					}
				}, ye(de, {
					INPUT_START: Oe,
					INPUT_MOVE: Ce,
					INPUT_END: Me,
					INPUT_CANCEL: Pe,
					STATE_POSSIBLE: 1,
					STATE_BEGAN: tt,
					STATE_CHANGED: ot,
					STATE_ENDED: nt,
					STATE_RECOGNIZED: it,
					STATE_CANCELLED: at,
					STATE_FAILED: rt,
					DIRECTION_NONE: Ye,
					DIRECTION_LEFT: Ee,
					DIRECTION_RIGHT: Ie,
					DIRECTION_UP: Re,
					DIRECTION_DOWN: Ae,
					DIRECTION_HORIZONTAL: He,
					DIRECTION_VERTICAL: Le,
					DIRECTION_ALL: Ne,
					Manager: le,
					Input: x,
					TouchAction: X,
					TouchInput: j,
					MouseInput: F,
					PointerEventInput: G,
					TouchMouseInput: z,
					SingleTouchInput: W,
					Recognizer: Q,
					AttrRecognizer: te,
					Tap: se,
					Pan: oe,
					Swipe: re,
					Pinch: ne,
					Rotate: ae,
					Press: ie,
					on: h,
					off: g,
					each: d,
					merge: be,
					extend: _e,
					assign: ye,
					inherit: p,
					bindFn: m,
					prefixed: k
				});
				var dt = "undefined" == typeof t ? "undefined" == typeof self ? {} : self : t;
				dt.Hammer = de, "function" == typeof a && a.amd ? a(function() {
					return de
				}) : e.exports ? e.exports = de : t[n] = de
			})(window, document, "Hammer")
		}),
		_n = ue(function(e) {
			function t() {
				var e = function() {};
				return {
					on: e,
					off: e,
					destroy: e,
					emit: e,
					get: function() {
						return {
							set: e
						}
					}
				}
			}
			if ("undefined" != typeof window) {
				var o = window.Hammer || yn;
				e.exports = fn(o, {
					preventDefault: "mouse"
				})
			} else e.exports = function() {
				return t()
			}
		}),
		bn = ue(function(e, t) {
			t.onTouch = function(e, t) {
				t.inputHandler = function(e) {
					e.isFirst && t(e)
				}, e.on("hammer.input", t.inputHandler)
			}, t.onRelease = function(e, t) {
				return t.inputHandler = function(e) {
					e.isFinal && t(e)
				}, e.on("hammer.input", t.inputHandler)
			}, t.offTouch = function(e, t) {
				e.off("hammer.input", t.inputHandler)
			}, t.offRelease = t.offTouch, t.disablePreventDefaultVertically = function(e) {
				return e.getTouchAction = function() {
					return ["pan-y"]
				}, e
			}
		}),
		vn = bn.onTouch,
		wn = bn.onRelease,
		kn = bn.offTouch,
		Sn = bn.offRelease,
		Dn = bn.disablePreventDefaultVertically;
	Be.FORMAT = {
		minorLabels: {
			millisecond: "SSS",
			second: "s",
			minute: "HH:mm",
			hour: "HH:mm",
			weekday: "ddd D",
			day: "D",
			week: "D",
			month: "MMM",
			quarter: "MMM",
			year: "YYYY"
		},
		majorLabels: {
			millisecond: "HH:mm:ss",
			second: "D MMMM HH:mm",
			minute: "ddd D MMMM",
			hour: "ddd D MMMM",
			weekday: "MMMM YYYY",
			day: "MMMM YYYY",
			week: "MMMM YYYY",
			month: "YYYY",
			quarter: "YYYY",
			year: ""
		}
	}, Be.prototype.setMoment = function(e) {
		this.moment = e, this.current = this.moment(this.current.valueOf()), this._start = this.moment(this._start.valueOf()),
			this._end = this.moment(this._end.valueOf())
	}, Be.prototype.setFormat = function(e) {
		var t = Ko.deepExtend({}, Be.FORMAT);
		this.format = Ko.deepExtend(t, e)
	}, Be.prototype.setRange = function(e, t, o) {
		if (!(e instanceof Date) || !(t instanceof Date)) throw "No legal start or end date in method setRange";
		this._start = e == null ? new Date : this.moment(e.valueOf()), this._end = t == null ? new Date : this.moment(t.valueOf()),
			this.autoScale && this.setMinimumStep(o)
	}, Be.prototype.start = function() {
		this.current = this._start.clone(), this.roundToMinor()
	}, Be.prototype.roundToMinor = function() {
		switch ("week" == this.scale && this.current.weekday(0), this.scale) {
			case "year":
				this.current.year(this.step * Mt(this.current.year() / this.step)), this.current.month(0);
			case "quarter":
				this.current.month(0);
			case "month":
				this.current.date(1);
			case "week":
			case "day":
			case "weekday":
				this.current.hours(0);
			case "hour":
				this.current.minutes(0);
			case "minute":
				this.current.seconds(0);
			case "second":
				this.current.milliseconds(0);
		}
		if (1 != this.step) switch (this.scale) {
			case "millisecond":
				this.current.subtract(this.current.milliseconds() % this.step, "milliseconds");
				break;
			case "second":
				this.current.subtract(this.current.seconds() % this.step, "seconds");
				break;
			case "minute":
				this.current.subtract(this.current.minutes() % this.step, "minutes");
				break;
			case "hour":
				this.current.subtract(this.current.hours() % this.step, "hours");
				break;
			case "weekday":
			case "day":
				this.current.subtract((this.current.date() - 1) % this.step, "day");
				break;
			case "week":
				this.current.subtract(this.current.week() % this.step, "week");
				break;
			case "month":
				this.current.subtract(this.current.month() % this.step, "month");
				break;
			case "quarter":
				this.current.subtract((this.current.quarter() - 1) % this.step, "quarter");
				break;
			case "year":
				this.current.subtract(this.current.year() % this.step, "year");
				break;
			default:
		}
	}, Be.prototype.hasNext = function() {
		return this.current.valueOf() <= this._end.valueOf()
	}, Be.prototype.next = function() {
		var e = this.current.valueOf();
		switch (this.scale) {
			case "millisecond":
				this.current.add(this.step, "millisecond");
				break;
			case "second":
				this.current.add(this.step, "second");
				break;
			case "minute":
				this.current.add(this.step, "minute");
				break;
			case "hour":
				this.current.add(this.step, "hour"), 6 > this.current.month() ? this.current.subtract(this.current.hours() % this
					.step, "hour") : 0 != this.current.hours() % this.step && this.current.add(this.step - this.current.hours() %
					this.step, "hour");
				break;
			case "weekday":
			case "day":
				this.current.add(this.step, "day");
				break;
			case "week":
				if (0 !== this.current.weekday()) this.current.weekday(0), this.current.add(this.step, "week");
				else if (!1 === this.options.showMajorLabels) this.current.add(this.step, "week");
				else {
					var t = this.current.clone();
					t.add(1, "week"), t.isSame(this.current, "month") ? this.current.add(this.step, "week") : (this.current.add(this
						.step, "week"), this.current.date(1))
				}
				break;
			case "month":
				this.current.add(this.step, "month");
				break;
			case "quarter":
				this.current.add(this.step, "quarter");
				break;
			case "year":
				this.current.add(this.step, "year");
				break;
			default:
		}
		if (1 != this.step) switch (this.scale) {
			case "millisecond":
				0 < this.current.milliseconds() && this.current.milliseconds() < this.step && this.current.milliseconds(0);
				break;
			case "second":
				0 < this.current.seconds() && this.current.seconds() < this.step && this.current.seconds(0);
				break;
			case "minute":
				0 < this.current.minutes() && this.current.minutes() < this.step && this.current.minutes(0);
				break;
			case "hour":
				0 < this.current.hours() && this.current.hours() < this.step && this.current.hours(0);
				break;
			case "weekday":
			case "day":
				this.current.date() < this.step + 1 && this.current.date(1);
				break;
			case "week":
				this.current.week() < this.step && this.current.week(1);
				break;
			case "month":
				this.current.month() < this.step && this.current.month(0);
				break;
			case "quarter":
				this.current.quarter() < this.step + 1 && this.current.quarter(1);
				break;
			case "year":
				break;
			default:
		}
		this.current.valueOf() == e && (this.current = this._end.clone()), this.switchedDay = !1, this.switchedMonth = !1,
			this.switchedYear = !1, $o.stepOverHiddenDates(this.moment, this, e)
	}, Be.prototype.getCurrent = function() {
		return this.current.clone()
	}, Be.prototype.setScale = function(e) {
		e && "string" == typeof e.scale && (this.scale = e.scale, this.step = 0 < e.step ? e.step : 1, this.autoScale = !1)
	}, Be.prototype.setAutoScale = function(e) {
		this.autoScale = e
	}, Be.prototype.setMinimumStep = function(e) {
		if (null != e) {
			var t = 86400000,
				o = 3600000,
				n = 60000,
				i = 1e3,
				a = 1;
			31104000000000 > e && (this.scale = "year", this.step = 1e3), 15552000000000 > e && (this.scale = "year", this.step =
					500), 3110400000000 > e && (this.scale = "year", this.step = 100), 1555200000000 > e && (this.scale = "year",
					this.step = 50), 311040000000 > e && (this.scale = "year", this.step = 10), 155520000000 > e && (this.scale =
					"year", this.step = 5), 31104000000 > e && (this.scale = "year", this.step = 1), 7776000000 > e && (this.scale =
					"quarter", this.step = 1), 2592000000 > e && (this.scale = "month", this.step = 1), 7 * t > e && (this.scale =
					"week", this.step = 1), 2 * t > e && (this.scale = "day", this.step = 2), t > e && (this.scale = "day", this.step =
					1), t / 2 > e && (this.scale = "weekday", this.step = 1), 4 * o > e && (this.scale = "hour", this.step = 4), o >
				e && (this.scale = "hour", this.step = 1), 15 * n > e && (this.scale = "minute", this.step = 15), 10 * n > e && (
					this.scale = "minute", this.step = 10), 5 * n > e && (this.scale = "minute", this.step = 5), n > e && (this.scale =
					"minute", this.step = 1), 15 * i > e && (this.scale = "second", this.step = 15), 10 * i > e && (this.scale =
					"second", this.step = 10), 5 * i > e && (this.scale = "second", this.step = 5), i > e && (this.scale = "second",
					this.step = 1), 200 * a > e && (this.scale = "millisecond", this.step = 200), 100 * a > e && (this.scale =
					"millisecond", this.step = 100), 50 * a > e && (this.scale = "millisecond", this.step = 50), 10 * a > e && (this
					.scale = "millisecond", this.step = 10), 5 * a > e && (this.scale = "millisecond", this.step = 5), a > e && (
					this.scale = "millisecond", this.step = 1)
		}
	}, Be.snap = function(e, t, o) {
		var n = Xo(e);
		if ("year" == t) {
			var i = n.year() + xt(n.month() / 12);
			n.year(xt(i / o) * o), n.month(0), n.date(0), n.hours(0), n.minutes(0), n.seconds(0), n.milliseconds(0)
		} else if ("quarter" == t) 1 == n.month() % 3 && 15 < n.date() || 2 == n.month() % 3 ? (n.date(1), n.month(3 * Mt(n
			.month() / 3)), n.add(1, "quarter")) : (n.date(1), n.month(3 * Mt(n.month() / 3))), n.hours(0), n.minutes(0), n.seconds(
			0), n.milliseconds(0);
		else if ("month" == t) 15 < n.date() ? (n.date(1), n.add(1, "month")) : n.date(1), n.hours(0), n.minutes(0), n.seconds(
			0), n.milliseconds(0);
		else if ("week" == t) 2 < n.weekday() ? (n.weekday(0), n.add(1, "week")) : n.weekday(0), n.hours(0), n.minutes(0),
			n.seconds(0), n.milliseconds(0);
		else if ("day" == t) {
			switch (o) {
				case 5:
				case 2:
					n.hours(24 * xt(n.hours() / 24));
					break;
				default:
					n.hours(12 * xt(n.hours() / 12));
			}
			n.minutes(0), n.seconds(0), n.milliseconds(0)
		} else if ("weekday" == t) {
			switch (o) {
				case 5:
				case 2:
					n.hours(12 * xt(n.hours() / 12));
					break;
				default:
					n.hours(6 * xt(n.hours() / 6));
			}
			n.minutes(0), n.seconds(0), n.milliseconds(0)
		} else if ("hour" == t) {
			switch (o) {
				case 4:
					n.minutes(60 * xt(n.minutes() / 60));
					break;
				default:
					n.minutes(30 * xt(n.minutes() / 30));
			}
			n.seconds(0), n.milliseconds(0)
		} else if ("minute" == t) {
			switch (o) {
				case 15:
				case 10:
					n.minutes(5 * xt(n.minutes() / 5)), n.seconds(0);
					break;
				case 5:
					n.seconds(60 * xt(n.seconds() / 60));
					break;
				default:
					n.seconds(30 * xt(n.seconds() / 30));
			}
			n.milliseconds(0)
		} else if ("second" == t) 15 === o || 10 === o ? (n.seconds(5 * xt(n.seconds() / 5)), n.milliseconds(0)) : 5 === o ?
			n.milliseconds(1e3 * xt(n.milliseconds() / 1e3)) : n.milliseconds(500 * xt(n.milliseconds() / 500));
		else if ("millisecond" == t) {
			var a = 5 < o ? o / 2 : 1;
			n.milliseconds(xt(n.milliseconds() / a) * a)
		}
		return n
	}, Be.prototype.isMajor = function() {
		if (!0 == this.switchedYear) switch (this.scale) {
			case "year":
			case "quarter":
			case "month":
			case "week":
			case "weekday":
			case "day":
			case "hour":
			case "minute":
			case "second":
			case "millisecond":
				return !0;
			default:
				return !1;
		} else if (!0 == this.switchedMonth) switch (this.scale) {
			case "week":
			case "weekday":
			case "day":
			case "hour":
			case "minute":
			case "second":
			case "millisecond":
				return !0;
			default:
				return !1;
		} else if (!0 == this.switchedDay) switch (this.scale) {
			case "millisecond":
			case "second":
			case "minute":
			case "hour":
				return !0;
			default:
				return !1;
		}
		var e = this.moment(this.current);
		switch (this.scale) {
			case "millisecond":
				return 0 == e.milliseconds();
			case "second":
				return 0 == e.seconds();
			case "minute":
				return 0 == e.hours() && 0 == e.minutes();
			case "hour":
				return 0 == e.hours();
			case "weekday":
			case "day":
				return 1 == e.date();
			case "week":
				return 1 == e.date();
			case "month":
				return 0 == e.month();
			case "quarter":
				return 1 == e.quarter();
			case "year":
				return !1;
			default:
				return !1;
		}
	}, Be.prototype.getLabelMinor = function(e) {
		if (null == e && (e = this.current), e instanceof Date && (e = this.moment(e)), "function" == typeof this.format.minorLabels)
			return this.format.minorLabels(e, this.scale, this.step);
		var t = this.format.minorLabels[this.scale];
		switch (this.scale) {
			case "week":
				if (this.isMajor() && 0 !== e.weekday()) return "";
			default:
				return t && 0 < t.length ? this.moment(e).format(t) : "";
		}
	}, Be.prototype.getLabelMajor = function(e) {
		if (null == e && (e = this.current), e instanceof Date && (e = this.moment(e)), "function" == typeof this.format.majorLabels)
			return this.format.majorLabels(e, this.scale, this.step);
		var t = this.format.majorLabels[this.scale];
		return t && 0 < t.length ? this.moment(e).format(t) : ""
	}, Be.prototype.getClassName = function() {
		function e(e) {
			return 0 == e / l % 2 ? " vis-even" : " vis-odd"
		}

		function t(e) {
			return e.isSame(new Date, "day") ? " vis-today" : e.isSame(r().add(1, "day"), "day") ? " vis-tomorrow" : e.isSame(
				r().add(-1, "day"), "day") ? " vis-yesterday" : ""
		}

		function o(e) {
			return e.isSame(new Date, "week") ? " vis-current-week" : ""
		}

		function n(e) {
			return e.isSame(new Date, "month") ? " vis-current-month" : ""
		}

		function i(e) {
			return e.isSame(new Date, "quarter") ? " vis-current-quarter" : ""
		}

		function a(e) {
			return e.isSame(new Date, "year") ? " vis-current-year" : ""
		}
		var r = this.moment,
			s = this.moment(this.current),
			d = s.locale ? s.locale("en") : s.lang("en"),
			l = this.step,
			p = [];
		switch (this.scale) {
			case "millisecond":
				p.push(t(d)), p.push(e(d.milliseconds()));
				break;
			case "second":
				p.push(t(d)), p.push(e(d.seconds()));
				break;
			case "minute":
				p.push(t(d)), p.push(e(d.minutes()));
				break;
			case "hour":
				p.push("vis-h" + d.hours() + (4 == this.step ? "-h" + (d.hours() + 4) : "")), p.push(t(d)), p.push(e(d.hours()));
				break;
			case "weekday":
				p.push("vis-" + d.format("dddd").toLowerCase()), p.push(t(d)), p.push(o(d)), p.push(e(d.date()));
				break;
			case "day":
				p.push("vis-day" + d.date()), p.push("vis-" + d.format("MMMM").toLowerCase()), p.push(t(d)), p.push(n(d)), p.push(
					2 >= this.step ? t(d) : ""), p.push(2 >= this.step ? "vis-" + d.format("dddd").toLowerCase() : ""), p.push(e(d.date() -
					1));
				break;
			case "week":
				p.push("vis-week" + d.format("w")), p.push(o(d)), p.push(e(d.week()));
				break;
			case "month":
				p.push("vis-" + d.format("MMMM").toLowerCase()), p.push(n(d)), p.push(e(d.month()));
				break;
			case "quarter":
				p.push("vis-q" + d.quarter()), p.push(i(d)), p.push(e(d.quarter()));
				break;
			case "year":
				p.push("vis-year" + d.year()), p.push(a(d)), p.push(e(d.year()));
		}
		return p.filter(String).join(" ")
	};
	var xn = Be;
	qe.prototype = new Qo, qe.prototype.setOptions = function(e) {
		e && (to.selectiveExtend(["showMinorLabels", "showMajorLabels", "maxMinorChars", "hiddenDates", "timeAxis",
			"moment", "rtl"
		], this.options, e), to.selectiveDeepExtend(["format"], this.options, e), "orientation" in e && ("string" ==
			typeof e.orientation ? this.options.orientation.axis = e.orientation : "object" === Le(e.orientation) && "axis" in
			e.orientation && (this.options.orientation.axis = e.orientation.axis)), "locale" in e && ("function" == typeof Xo
			.locale ? Xo.locale(e.locale) : Xo.lang(e.locale)))
	}, qe.prototype._create = function() {
		this.dom.foreground = document.createElement("div"), this.dom.background = document.createElement("div"), this.dom.foreground
			.className = "vis-time-axis vis-foreground", this.dom.background.className = "vis-time-axis vis-background"
	}, qe.prototype.destroy = function() {
		this.dom.foreground.parentNode && this.dom.foreground.parentNode.removeChild(this.dom.foreground), this.dom.background
			.parentNode && this.dom.background.parentNode.removeChild(this.dom.background), this.body = null
	}, qe.prototype.redraw = function() {
		var e = this.props,
			t = this.dom.foreground,
			o = this.dom.background,
			n = "top" == this.options.orientation.axis ? this.body.dom.top : this.body.dom.bottom,
			i = t.parentNode !== n;
		this._calculateCharSize();
		var a = this.options.showMinorLabels && "none" !== this.options.orientation.axis,
			r = this.options.showMajorLabels && "none" !== this.options.orientation.axis;
		e.minorLabelHeight = a ? e.minorCharHeight : 0, e.majorLabelHeight = r ? e.majorCharHeight : 0, e.height = e.minorLabelHeight +
			e.majorLabelHeight, e.width = t.offsetWidth, e.minorLineHeight = this.body.domProps.root.height - e.majorLabelHeight -
			("top" == this.options.orientation.axis ? this.body.domProps.bottom.height : this.body.domProps.top.height), e.minorLineWidth =
			1, e.majorLineHeight = e.minorLineHeight + e.majorLabelHeight, e.majorLineWidth = 1;
		var s = t.nextSibling,
			d = o.nextSibling;
		return t.parentNode && t.parentNode.removeChild(t), o.parentNode && o.parentNode.removeChild(o), t.style.height =
			this.props.height + "px", this._repaintLabels(), s ? n.insertBefore(t, s) : n.appendChild(t), d ? this.body.dom.backgroundVertical
			.insertBefore(o, d) : this.body.dom.backgroundVertical.appendChild(o), this._isResized() || i
	}, qe.prototype._repaintLabels = function() {
		var e = this.options.orientation.axis,
			t = to.convert(this.body.range.start, "Number"),
			o = to.convert(this.body.range.end, "Number"),
			n = this.body.util.toTime((this.props.minorCharWidth || 10) * this.options.maxMinorChars).valueOf(),
			i = n - $o.getHiddenDurationBefore(this.options.moment, this.body.hiddenDates, this.body.range, n);
		i -= this.body.util.toTime(0).valueOf();
		var a = new xn(new Date(t), new Date(o), i, this.body.hiddenDates, this.options);
		a.setMoment(this.options.moment), this.options.format && a.setFormat(this.options.format), this.options.timeAxis &&
			a.setScale(this.options.timeAxis), this.step = a;
		var r = this.dom;
		r.redundant.lines = r.lines, r.redundant.majorTexts = r.majorTexts, r.redundant.minorTexts = r.minorTexts, r.lines = [],
			r.majorTexts = [], r.minorTexts = [];
		var s = 0,
			d = void 0,
			l = 0,
			p = 1e3,
			m, u, c, h, g, f, y, _, b;
		for (a.start(), u = a.getCurrent(), h = this.body.util.toScreen(u); a.hasNext() && l < p;) {
			switch (l++, g = a.isMajor(), b = a.getClassName(), m = u, c = h, a.next(), u = a.getCurrent(), h = this.body.util
				.toScreen(u), y = s, s = h - c, a.scale) {
				case "week":
					f = !0;
					break;
				default:
					f = s >= .4 * y;
			}
			if (this.options.showMinorLabels && f) {
				var v = this._repaintMinorText(c, a.getLabelMinor(m), e, b);
				v.style.width = s + "px"
			}
			g && this.options.showMajorLabels ? (0 < c && (null == d && (d = c), v = this._repaintMajorText(c, a.getLabelMajor(
				m), e, b)), _ = this._repaintMajorLine(c, s, e, b)) : f ? _ = this._repaintMinorLine(c, s, e, b) : _ && (_.style
				.width = parseInt(_.style.width) + s + "px")
		}
		if (l !== p || Tn || (console.warn("Something is wrong with the Timeline scale. Limited drawing of grid lines to ".concat(
				p, " lines.")), Tn = !0), this.options.showMajorLabels) {
			var w = this.body.util.toTime(0),
				k = a.getLabelMajor(w),
				S = k.length * (this.props.majorCharWidth || 10) + 10;
			(null == d || S < d) && this._repaintMajorText(0, k, e, b)
		}
		to.forEach(this.dom.redundant, function(e) {
			for (; e.length;) {
				var t = e.pop();
				t && t.parentNode && t.parentNode.removeChild(t)
			}
		})
	}, qe.prototype._repaintMinorText = function(e, t, o, n) {
		var i = this.dom.redundant.minorTexts.shift();
		if (!i) {
			var a = document.createTextNode("");
			i = document.createElement("div"), i.appendChild(a), this.dom.foreground.appendChild(i)
		}
		return this.dom.minorTexts.push(i), i.innerHTML = t, i.style.top = "top" == o ? this.props.majorLabelHeight + "px" :
			"0", this.options.rtl ? (i.style.left = "", i.style.right = e + "px") : i.style.left = e + "px", i.className =
			"vis-text vis-minor " + n, i
	}, qe.prototype._repaintMajorText = function(e, t, o, n) {
		var i = this.dom.redundant.majorTexts.shift();
		if (!i) {
			var a = document.createElement("div");
			i = document.createElement("div"), i.appendChild(a), this.dom.foreground.appendChild(i)
		}
		return i.childNodes[0].innerHTML = t, i.className = "vis-text vis-major " + n, i.style.top = "top" == o ? "0" :
			this.props.minorLabelHeight + "px", this.options.rtl ? (i.style.left = "", i.style.right = e + "px") : i.style.left =
			e + "px", this.dom.majorTexts.push(i), i
	}, qe.prototype._repaintMinorLine = function(e, t, o, n) {
		var i = this.dom.redundant.lines.shift();
		i || (i = document.createElement("div"), this.dom.background.appendChild(i)), this.dom.lines.push(i);
		var a = this.props;
		return i.style.top = "top" == o ? a.majorLabelHeight + "px" : this.body.domProps.top.height + "px", i.style.height =
			a.minorLineHeight + "px", this.options.rtl ? (i.style.left = "", i.style.right = e - a.minorLineWidth / 2 + "px",
				i.className = "vis-grid vis-vertical-rtl vis-minor " + n) : (i.style.left = e - a.minorLineWidth / 2 + "px", i.className =
				"vis-grid vis-vertical vis-minor " + n), i.style.width = t + "px", i
	}, qe.prototype._repaintMajorLine = function(e, t, o, n) {
		var i = this.dom.redundant.lines.shift();
		i || (i = document.createElement("div"), this.dom.background.appendChild(i)), this.dom.lines.push(i);
		var a = this.props;
		return i.style.top = "top" == o ? "0" : this.body.domProps.top.height + "px", this.options.rtl ? (i.style.left = "",
				i.style.right = e - a.majorLineWidth / 2 + "px", i.className = "vis-grid vis-vertical-rtl vis-major " + n) : (i.style
				.left = e - a.majorLineWidth / 2 + "px", i.className = "vis-grid vis-vertical vis-major " + n), i.style.height =
			a.majorLineHeight + "px", i.style.width = t + "px", i
	}, qe.prototype._calculateCharSize = function() {
		this.dom.measureCharMinor || (this.dom.measureCharMinor = document.createElement("DIV"), this.dom.measureCharMinor.className =
				"vis-text vis-minor vis-measure", this.dom.measureCharMinor.style.position = "absolute", this.dom.measureCharMinor
				.appendChild(document.createTextNode("0")), this.dom.foreground.appendChild(this.dom.measureCharMinor)), this.props
			.minorCharHeight = this.dom.measureCharMinor.clientHeight, this.props.minorCharWidth = this.dom.measureCharMinor.clientWidth,
			this.dom.measureCharMajor || (this.dom.measureCharMajor = document.createElement("DIV"), this.dom.measureCharMajor
				.className = "vis-text vis-major vis-measure", this.dom.measureCharMajor.style.position = "absolute", this.dom.measureCharMajor
				.appendChild(document.createTextNode("0")), this.dom.foreground.appendChild(this.dom.measureCharMajor)), this.props
			.majorCharHeight = this.dom.measureCharMajor.clientHeight, this.props.majorCharWidth = this.dom.measureCharMajor.clientWidth
	};
	var Tn = !1,
		On = Object.freeze({
			default: qe
		}),
		Cn = ue(function(e) {
			(function(t, o) {
				e.exports = o()
			})(no, function() {
				function e(e) {
					var t = String.fromCharCode,
						o = e && e.preventDefault || !1,
						n = e && e.container || window,
						a = {},
						r = {
							keydown: {},
							keyup: {}
						},
						s = {},
						d;
					for (d = 97; 122 >= d; d++) s[t(d)] = {
						code: 65 + (d - 97),
						shift: !1
					};
					for (d = 65; 90 >= d; d++) s[t(d)] = {
						code: d,
						shift: !0
					};
					for (d = 0; 9 >= d; d++) s["" + d] = {
						code: 48 + d,
						shift: !1
					};
					for (d = 1; 12 >= d; d++) s["F" + d] = {
						code: 111 + d,
						shift: !1
					};
					for (d = 0; 9 >= d; d++) s["num" + d] = {
						code: 96 + d,
						shift: !1
					};
					s["num*"] = {
						code: 106,
						shift: !1
					}, s["num+"] = {
						code: 107,
						shift: !1
					}, s["num-"] = {
						code: 109,
						shift: !1
					}, s["num/"] = {
						code: 111,
						shift: !1
					}, s["num."] = {
						code: 110,
						shift: !1
					}, s.left = {
						code: 37,
						shift: !1
					}, s.up = {
						code: 38,
						shift: !1
					}, s.right = {
						code: 39,
						shift: !1
					}, s.down = {
						code: 40,
						shift: !1
					}, s.space = {
						code: 32,
						shift: !1
					}, s.enter = {
						code: 13,
						shift: !1
					}, s.shift = {
						code: 16,
						shift: void 0
					}, s.esc = {
						code: 27,
						shift: !1
					}, s.backspace = {
						code: 8,
						shift: !1
					}, s.tab = {
						code: 9,
						shift: !1
					}, s.ctrl = {
						code: 17,
						shift: !1
					}, s.alt = {
						code: 18,
						shift: !1
					}, s["delete"] = {
						code: 46,
						shift: !1
					}, s.pageup = {
						code: 33,
						shift: !1
					}, s.pagedown = {
						code: 34,
						shift: !1
					}, s["="] = {
						code: 187,
						shift: !1
					}, s["-"] = {
						code: 189,
						shift: !1
					}, s["]"] = {
						code: 221,
						shift: !1
					}, s["["] = {
						code: 219,
						shift: !1
					};
					var l = function(e) {
							m(e, "keydown")
						},
						p = function(e) {
							m(e, "keyup")
						},
						m = function(e, t) {
							if (void 0 !== r[t][e.keyCode]) {
								for (var n = r[t][e.keyCode], a = 0; a < n.length; a++) void 0 === n[a].shift ? n[a].fn(e) : !0 == n[a].shift &&
									!0 == e.shiftKey ? n[a].fn(e) : !1 == n[a].shift && !1 == e.shiftKey && n[a].fn(e);
								!0 == o && e.preventDefault()
							}
						};
					return a.bind = function(e, t, o) {
						if (void 0 === o && (o = "keydown"), void 0 === s[e]) throw new Error("unsupported key: " + e);
						void 0 === r[o][s[e].code] && (r[o][s[e].code] = []), r[o][s[e].code].push({
							fn: t,
							shift: s[e].shift
						})
					}, a.bindAll = function(e, t) {
						for (var o in void 0 === t && (t = "keydown"), s) s.hasOwnProperty(o) && a.bind(o, e, t)
					}, a.getKey = function(e) {
						for (var t in s)
							if (s.hasOwnProperty(t)) {
								if (!0 == e.shiftKey && !0 == s[t].shift && e.keyCode == s[t].code) return t;
								if (!1 == e.shiftKey && !1 == s[t].shift && e.keyCode == s[t].code) return t;
								if (e.keyCode == s[t].code && "shift" == t) return t
							} return "unknown key, currently not supported"
					}, a.unbind = function(e, t, o) {
						if (void 0 === o && (o = "keydown"), void 0 === s[e]) throw new Error("unsupported key: " + e);
						if (void 0 !== t) {
							var n = [],
								a = r[o][s[e].code];
							if (void 0 !== a)
								for (var d = 0; d < a.length; d++)(a[d].fn != t || a[d].shift != s[e].shift) && n.push(r[o][s[e].code][d]);
							r[o][s[e].code] = n
						} else r[o][s[e].code] = []
					}, a.reset = function() {
						r = {
							keydown: {},
							keyup: {}
						}
					}, a.destroy = function() {
						r = {
							keydown: {},
							keyup: {}
						}, n.removeEventListener("keydown", l, !0), n.removeEventListener("keyup", p, !0)
					}, n.addEventListener("keydown", l, !0), n.addEventListener("keyup", p, !0), a
				}
				return e
			})
		});
	gn(Ze.prototype), Ze.current = null, Ze.prototype.destroy = function() {
		this.deactivate(), this.dom.overlay.parentNode.removeChild(this.dom.overlay), this.onClick && document.body.removeEventListener(
				"click", this.onClick), this.keycharm !== void 0 && this.keycharm.destroy(), this.keycharm = null, this.hammer.destroy(),
			this.hammer = null
	}, Ze.prototype.activate = function() {
		Ze.current && Ze.current.deactivate(), Ze.current = this, this.active = !0, this.dom.overlay.style.display = "none",
			to.addClassName(this.dom.container, "vis-active"), this.emit("change"), this.emit("activate"), this.keycharm.bind(
				"esc", this.escListener)
	}, Ze.prototype.deactivate = function() {
		this.active = !1, this.dom.overlay.style.display = "", to.removeClassName(this.dom.container, "vis-active"), this.keycharm
			.unbind("esc", this.escListener), this.emit("change"), this.emit("deactivate")
	}, Ze.prototype._onTapOverlay = function(e) {
		this.activate(), e.stopPropagation()
	};
	var Mn = ue(function(e, t) {
		t.en = {
			current: "current",
			time: "time"
		}, t.en_EN = t.en, t.en_US = t.en, t.it = {
			current: "attuale",
			time: "tempo"
		}, t.it_IT = t.it, t.it_CH = t.it, t.nl = {
			current: "huidige",
			time: "tijd"
		}, t.nl_NL = t.nl, t.nl_BE = t.nl, t.de = {
			current: "Aktuelle",
			time: "Zeit"
		}, t.de_DE = t.de, t.fr = {
			current: "actuel",
			time: "heure"
		}, t.fr_FR = t.fr, t.fr_CA = t.fr, t.fr_BE = t.fr, t.es = {
			current: "corriente",
			time: "hora"
		}, t.es_ES = t.es, t.uk = {
			current: "\u043F\u043E\u0442\u043E\u0447\u043D\u0438\u0439",
			time: "\u0447\u0430\u0441"
		}, t.uk_UA = t.uk, t.ru = {
			current: "\u0442\u0435\u043A\u0443\u0449\u0435\u0435",
			time: "\u0432\u0440\u0435\u043C\u044F"
		}, t.ru_RU = t.ru
	});
	Ke.prototype = new Qo, Ke.prototype.setOptions = function(e) {
		e && to.selectiveExtend(["moment", "locale", "locales", "id", "editable"], this.options, e)
	}, Ke.prototype._create = function() {
		function e(t) {
			this.body.range._onMouseWheel(t)
		}
		var t = document.createElement("div");
		t["custom-time"] = this, t.className = "vis-custom-time " + (this.options.editable ? "" : "disabled ") + (this.options
			.id || ""), t.style.position = "absolute", t.style.top = "0px", t.style.height = "100%", this.bar = t;
		var o = document.createElement("div");
		o.style.position = "relative", o.style.top = "0px", o.style.left = "-10px", o.style.height = "100%", o.style.width =
			"20px", o.addEventListener ? (o.addEventListener("mousewheel", e.bind(this), !1), o.addEventListener(
				"DOMMouseScroll", e.bind(this), !1)) : o.attachEvent("onmousewheel", e.bind(this)), t.appendChild(o), this.options
			.editable && (this.hammer = new _n(o), this.hammer.on("panstart", this._onDragStart.bind(this)), this.hammer.on(
					"panmove", this._onDrag.bind(this)), this.hammer.on("panend", this._onDragEnd.bind(this)), this.hammer.get("pan")
				.set({
					threshold: 5,
					direction: _n.DIRECTION_HORIZONTAL
				}))
	}, Ke.prototype.destroy = function() {
		this.hide(), this.hammer.destroy(), this.hammer = null, this.body = null
	}, Ke.prototype.redraw = function() {
		var e = this.body.dom.backgroundVertical;
		this.bar.parentNode != e && (this.bar.parentNode && this.bar.parentNode.removeChild(this.bar), e.appendChild(this.bar));
		var t = this.body.util.toScreen(this.customTime),
			o = this.options.locales[this.options.locale];
		o || (!this.warned && (console.log("WARNING: options.locales['" + this.options.locale +
			"'] not found. See http://visjs.org/docs/timeline/#Localization"), this.warned = !0), o = this.options.locales.en);
		var n = this.options.title;
		return void 0 === n ? (n = o.time + ": " + this.options.moment(this.customTime).format(
			"dddd, MMMM Do YYYY, H:mm:ss"), n = n.charAt(0).toUpperCase() + n.substring(1)) : "function" == typeof n && (n =
			n.call(this.customTime)), this.bar.style.left = t + "px", this.bar.title = n, !1
	}, Ke.prototype.hide = function() {
		this.bar.parentNode && this.bar.parentNode.removeChild(this.bar)
	}, Ke.prototype.setCustomTime = function(e) {
		this.customTime = to.convert(e, "Date"), this.redraw()
	}, Ke.prototype.getCustomTime = function() {
		return new Date(this.customTime.valueOf())
	}, Ke.prototype.setCustomTitle = function(e) {
		this.options.title = e
	}, Ke.prototype._onDragStart = function(e) {
		this.eventParams.dragging = !0, this.eventParams.customTime = this.customTime, e.stopPropagation()
	}, Ke.prototype._onDrag = function(e) {
		if (this.eventParams.dragging) {
			var t = this.body.util.toScreen(this.eventParams.customTime) + e.deltaX,
				o = this.body.util.toTime(t);
			this.setCustomTime(o), this.body.emitter.emit("timechange", {
				id: this.options.id,
				time: new Date(this.customTime.valueOf()),
				event: e
			}), e.stopPropagation()
		}
	}, Ke.prototype._onDragEnd = function(e) {
		this.eventParams.dragging && (this.body.emitter.emit("timechanged", {
			id: this.options.id,
			time: new Date(this.customTime.valueOf()),
			event: e
		}), e.stopPropagation())
	}, Ke.customTimeFromTarget = function(e) {
		for (var t = e.target; t;) {
			if (t.hasOwnProperty("custom-time")) return t["custom-time"];
			t = t.parentNode
		}
		return null
	};
	var Pn = Object.freeze({
		default: Ke
	});
	gn(Qe.prototype), Qe.prototype._create = function(e) {
		function t(e) {
			this.isActive() && this.emit("mousewheel", e);
			var t = 0,
				o = 0;
			if (("detail" in e && (o = -1 * e.detail), "wheelDelta" in e && (o = e.wheelDelta), "wheelDeltaY" in e && (o = e.wheelDeltaY),
					"wheelDeltaX" in e && (t = -1 * e.wheelDeltaX), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = -1 * o, o =
						0), "deltaY" in e && (o = -1 * e.deltaY), "deltaX" in e && (t = e.deltaX), e.deltaMode && (1 === e.deltaMode ?
						(t *= 40, o *= 40) : (t *= 40, o *= 800)), this.options.zoomKey && !e[this.options.zoomKey]) && (this.options.verticalScroll ||
					this.options.horizontalScroll))
				if (e.preventDefault(), this.options.verticalScroll && Ot(o) >= Ot(t)) {
					var n = this.props.scrollTop,
						i = n + o;
					this.isActive() && (this._setScrollTop(i), this._redraw(), this.emit("scroll", e))
				} else if (this.options.horizontalScroll) {
				var a = Ot(t) >= Ot(o) ? t : o,
					r = a / 120 * (this.range.end - this.range.start) / 20,
					s = this.range.start + r,
					d = this.range.end + r;
				this.range.setRange(s, d, {
					animation: !1,
					byUser: !0,
					event: e
				})
			}
		}

		function o(e) {
			if (i.options.verticalScroll && (e.preventDefault(), i.isActive())) {
				var t = -e.target.scrollTop;
				i._setScrollTop(t), i._redraw(), i.emit("scrollSide", e)
			}
		}

		function n(e) {
			if (e.preventDefault && e.preventDefault(), !(-1 < !e.target.className.indexOf("vis"))) return s ? void 0 : (e.dataTransfer
				.dropEffect = "move", s = !0, !1)
		}
		this.dom = {}, this.dom.container = e, this.dom.container.style.position = "relative", this.dom.root = document.createElement(
				"div"), this.dom.background = document.createElement("div"), this.dom.backgroundVertical = document.createElement(
				"div"), this.dom.backgroundHorizontal = document.createElement("div"), this.dom.centerContainer = document.createElement(
				"div"), this.dom.leftContainer = document.createElement("div"), this.dom.rightContainer = document.createElement(
				"div"), this.dom.center = document.createElement("div"), this.dom.left = document.createElement("div"), this.dom.right =
			document.createElement("div"), this.dom.top = document.createElement("div"), this.dom.bottom = document.createElement(
				"div"), this.dom.shadowTop = document.createElement("div"), this.dom.shadowBottom = document.createElement("div"),
			this.dom.shadowTopLeft = document.createElement("div"), this.dom.shadowBottomLeft = document.createElement("div"),
			this.dom.shadowTopRight = document.createElement("div"), this.dom.shadowBottomRight = document.createElement("div"),
			this.dom.rollingModeBtn = document.createElement("div"), this.dom.loadingScreen = document.createElement("div"),
			this.dom.root.className = "vis-timeline", this.dom.background.className = "vis-panel vis-background", this.dom.backgroundVertical
			.className = "vis-panel vis-background vis-vertical", this.dom.backgroundHorizontal.className =
			"vis-panel vis-background vis-horizontal", this.dom.centerContainer.className = "vis-panel vis-center", this.dom.leftContainer
			.className = "vis-panel vis-left", this.dom.rightContainer.className = "vis-panel vis-right", this.dom.top.className =
			"vis-panel vis-top", this.dom.bottom.className = "vis-panel vis-bottom", this.dom.left.className = "vis-content",
			this.dom.center.className = "vis-content", this.dom.right.className = "vis-content", this.dom.shadowTop.className =
			"vis-shadow vis-top", this.dom.shadowBottom.className = "vis-shadow vis-bottom", this.dom.shadowTopLeft.className =
			"vis-shadow vis-top", this.dom.shadowBottomLeft.className = "vis-shadow vis-bottom", this.dom.shadowTopRight.className =
			"vis-shadow vis-top", this.dom.shadowBottomRight.className = "vis-shadow vis-bottom", this.dom.rollingModeBtn.className =
			"vis-rolling-mode-btn", this.dom.loadingScreen.className = "vis-loading-screen", this.dom.root.appendChild(this.dom
				.background), this.dom.root.appendChild(this.dom.backgroundVertical), this.dom.root.appendChild(this.dom.backgroundHorizontal),
			this.dom.root.appendChild(this.dom.centerContainer), this.dom.root.appendChild(this.dom.leftContainer), this.dom.root
			.appendChild(this.dom.rightContainer), this.dom.root.appendChild(this.dom.top), this.dom.root.appendChild(this.dom
				.bottom), this.dom.root.appendChild(this.dom.rollingModeBtn), this.dom.centerContainer.appendChild(this.dom.center),
			this.dom.leftContainer.appendChild(this.dom.left), this.dom.rightContainer.appendChild(this.dom.right), this.dom.centerContainer
			.appendChild(this.dom.shadowTop), this.dom.centerContainer.appendChild(this.dom.shadowBottom), this.dom.leftContainer
			.appendChild(this.dom.shadowTopLeft), this.dom.leftContainer.appendChild(this.dom.shadowBottomLeft), this.dom.rightContainer
			.appendChild(this.dom.shadowTopRight), this.dom.rightContainer.appendChild(this.dom.shadowBottomRight), this.props = {
				root: {},
				background: {},
				centerContainer: {},
				leftContainer: {},
				rightContainer: {},
				center: {},
				left: {},
				right: {},
				top: {},
				bottom: {},
				border: {},
				scrollTop: 0,
				scrollTopMin: 0
			}, this.on("rangechange", function() {
				!0 === this.initialDrawDone && this._redraw()
			}.bind(this)), this.on("rangechanged", function() {
				this.initialRangeChangeDone || (this.initialRangeChangeDone = !0)
			}.bind(this)), this.on("touch", this._onTouch.bind(this)), this.on("panmove", this._onDrag.bind(this));
		var i = this;
		this._origRedraw = this._redraw.bind(this), this._redraw = to.throttle(this._origRedraw), this.on("_change",
			function(e) {
				i.itemSet && i.itemSet.initialItemSetDrawn && e && !0 == e.queue ? i._redraw() : i._origRedraw()
			}), this.hammer = new _n(this.dom.root);
		var a = this.hammer.get("pinch").set({
			enable: !0
		});
		a && bn.disablePreventDefaultVertically(a), this.hammer.get("pan").set({
			threshold: 5,
			direction: _n.DIRECTION_HORIZONTAL
		}), this.listeners = {};
		if (["tap", "doubletap", "press", "pinch", "pan", "panstart", "panmove", "panend"].forEach(function(e) {
				var t = function(t) {
					i.isActive() && i.emit(e, t)
				};
				i.hammer.on(e, t), i.listeners[e] = t
			}), bn.onTouch(this.hammer, function(e) {
				i.emit("touch", e)
			}.bind(this)), bn.onRelease(this.hammer, function(e) {
				i.emit("release", e)
			}.bind(this)), this.dom.centerContainer.addEventListener) {
			var r = "onwheel" in document.createElement("div") ? "wheel" : void 0 === document.onmousewheel ? "DOMMouseScroll" :
				"mousewheel";
			this.dom.centerContainer.addEventListener(r, t.bind(this), !1)
		} else this.dom.centerContainer.attachEvent("onmousewheel", t.bind(this));
		this.dom.left.parentNode.addEventListener("scroll", o.bind(this)), this.dom.right.parentNode.addEventListener(
			"scroll", o.bind(this));
		var s = !1;
		if (this.dom.center.addEventListener("dragover", n.bind(this), !1), this.dom.center.addEventListener("drop",
				function(e) {
					e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation();
					try {
						var t = JSON.parse(e.dataTransfer.getData("text"));
						if (!t || !t.content) return
					} catch (e) {
						return !1
					}
					return s = !1, e.center = {
						x: e.clientX,
						y: e.clientY
					}, "item" === t.target ? i.itemSet._onDropObjectOnItem(e) : i.itemSet._onAddItem(e), i.emit("drop", i.getEventProperties(
						e)), !1
				}.bind(this), !1), this.customTimes = [], this.touch = {}, this.redrawCount = 0, this.initialDrawDone = !1, this.initialRangeChangeDone = !
			1, !e) throw new Error("No container provided");
		e.appendChild(this.dom.root), e.appendChild(this.dom.loadingScreen)
	}, Qe.prototype.setOptions = function(e) {
		if (e) {
			if (to.selectiveExtend(["width", "height", "minHeight", "maxHeight", "autoResize", "start", "end", "clickToUse",
					"dataAttributes", "hiddenDates", "locale", "locales", "moment", "rtl", "zoomKey", "horizontalScroll",
					"verticalScroll"
				], this.options, e), this.dom.rollingModeBtn.style.visibility = "hidden", this.options.rtl && (this.dom.container
					.style.direction = "rtl", this.dom.backgroundVertical.className = "vis-panel vis-background vis-vertical-rtl"),
				this.options.verticalScroll && (this.options.rtl ? this.dom.rightContainer.className =
					"vis-panel vis-right vis-vertical-scroll" : this.dom.leftContainer.className =
					"vis-panel vis-left vis-vertical-scroll"), "object" !== Le(this.options.orientation) && (this.options.orientation = {
					item: void 0,
					axis: void 0
				}), "orientation" in e && ("string" == typeof e.orientation ? this.options.orientation = {
					item: e.orientation,
					axis: e.orientation
				} : "object" === Le(e.orientation) && ("item" in e.orientation && (this.options.orientation.item = e.orientation
					.item), "axis" in e.orientation && (this.options.orientation.axis = e.orientation.axis))), "both" === this.options
				.orientation.axis) {
				if (!this.timeAxis2) {
					var t = this.timeAxis2 = new qe(this.body);
					t.setOptions = function(e) {
						var o = e ? to.extend({}, e) : {};
						o.orientation = "top", qe.prototype.setOptions.call(t, o)
					}, this.components.push(t)
				}
			} else if (this.timeAxis2) {
				var o = this.components.indexOf(this.timeAxis2); - 1 !== o && this.components.splice(o, 1), this.timeAxis2.destroy(),
					this.timeAxis2 = null
			}
			if ("function" == typeof e.drawPoints && (e.drawPoints = {
					onRender: e.drawPoints
				}), "hiddenDates" in this.options && $o.convertHiddenOptions(this.options.moment, this.body, this.options.hiddenDates),
				"clickToUse" in e && (e.clickToUse ? !this.activator && (this.activator = new Ze(this.dom.root)) : this.activator &&
					(this.activator.destroy(), delete this.activator)), "showCustomTime" in e) throw new Error(
				"Option `showCustomTime` is deprecated. Create a custom time bar via timeline.addCustomTime(time [, id])");
			this._initAutoResize()
		}
		if (this.components.forEach(function(t) {
				return t.setOptions(e)
			}), "configure" in e) {
			this.configurator || (this.configurator = this._createConfigurator()), this.configurator.setOptions(e.configure);
			var n = to.deepExtend({}, this.options);
			this.components.forEach(function(e) {
				to.deepExtend(n, e.options)
			}), this.configurator.setModuleOptions({
				global: n
			})
		}
		this._redraw()
	}, Qe.prototype.isActive = function() {
		return !this.activator || this.activator.active
	}, Qe.prototype.destroy = function() {
		for (var e in this.setItems(null), this.setGroups(null), this.off(), this._stopAutoResize(), this.dom.root.parentNode &&
				this.dom.root.parentNode.removeChild(this.dom.root), this.dom = null, this.activator && (this.activator.destroy(),
					delete this.activator), this.listeners) this.listeners.hasOwnProperty(e) && delete this.listeners[e];
		this.listeners = null, this.hammer && this.hammer.destroy(), this.hammer = null, this.components.forEach(function(e) {
			return e.destroy()
		}), this.body = null
	}, Qe.prototype.setCustomTime = function(e, t) {
		var o = this.customTimes.filter(function(e) {
			return t === e.options.id
		});
		if (0 === o.length) throw new Error("No custom time bar found with id " + JSON.stringify(t));
		0 < o.length && o[0].setCustomTime(e)
	}, Qe.prototype.getCustomTime = function(e) {
		var t = this.customTimes.filter(function(t) {
			return t.options.id === e
		});
		if (0 === t.length) throw new Error("No custom time bar found with id " + JSON.stringify(e));
		return t[0].getCustomTime()
	}, Qe.prototype.setCustomTimeTitle = function(e, t) {
		var o = this.customTimes.filter(function(e) {
			return e.options.id === t
		});
		if (0 === o.length) throw new Error("No custom time bar found with id " + JSON.stringify(t));
		return 0 < o.length ? o[0].setCustomTitle(e) : void 0
	}, Qe.prototype.getEventProperties = function(e) {
		return {
			event: e
		}
	}, Qe.prototype.addCustomTime = function(e, t, o) {
		var n = void 0 === e ? new Date : to.convert(e, "Date").valueOf(),
			i = this.customTimes.some(function(e) {
				return e.options.id === t
			});
		if (i) throw new Error("A custom time with id " + JSON.stringify(t) + " already exists");
		var a = new Ke(this.body, to.extend({}, this.options, o, {
			time: n,
			id: t
		}));
		return this.customTimes.push(a), this.components.push(a), this._redraw(), t
	}, Qe.prototype.removeCustomTime = function(e) {
		var t = this.customTimes.filter(function(t) {
			return t.options.id === e
		});
		if (0 === t.length) throw new Error("No custom time bar found with id " + JSON.stringify(e));
		t.forEach(function(e) {
			this.customTimes.splice(this.customTimes.indexOf(e), 1), this.components.splice(this.components.indexOf(e), 1),
				e.destroy()
		}.bind(this))
	}, Qe.prototype.getVisibleItems = function() {
		return this.itemSet && this.itemSet.getVisibleItems() || []
	}, Qe.prototype.getVisibleGroups = function() {
		return this.itemSet && this.itemSet.getVisibleGroups() || []
	}, Qe.prototype.fit = function(e, t) {
		var o = this.getDataRange();
		if (null !== o.min || null !== o.max) {
			var n = o.max - o.min,
				i = new Date(o.min.valueOf() - .01 * n),
				a = new Date(o.max.valueOf() + .01 * n),
				r = !(e && void 0 !== e.animation) || e.animation;
			this.range.setRange(i, a, {
				animation: r
			}, t)
		}
	}, Qe.prototype.getDataRange = function() {
		throw new Error("Cannot invoke abstract method getDataRange")
	}, Qe.prototype.setWindow = function(e, t, o, n) {
		"function" == typeof arguments[2] && (n = arguments[2], o = {});
		var i, a;
		1 == arguments.length ? (a = arguments[0], i = !(a.animation !== void 0) || a.animation, this.range.setRange(a.start,
			a.end, {
				animation: i
			})) : 2 == arguments.length && "function" == typeof arguments[1] ? (a = arguments[0], n = arguments[1], i = !(a.animation !==
			void 0) || a.animation, this.range.setRange(a.start, a.end, {
			animation: i
		}, n)) : (i = !(o && o.animation !== void 0) || o.animation, this.range.setRange(e, t, {
			animation: i
		}, n))
	}, Qe.prototype.moveTo = function(e, o, n) {
		"function" == typeof arguments[1] && (n = arguments[1], o = {});
		var i = this.range.end - this.range.start,
			a = to.convert(e, "Date").valueOf(),
			t = !(o && o.animation !== void 0) || o.animation;
		this.range.setRange(a - i / 2, a + i / 2, {
			animation: t
		}, n)
	}, Qe.prototype.getWindow = function() {
		var e = this.range.getRange();
		return {
			start: new Date(e.start),
			end: new Date(e.end)
		}
	}, Qe.prototype.zoomIn = function(e, t, o) {
		if (!(!e || 0 > e || 1 < e)) {
			"function" == typeof arguments[1] && (o = arguments[1], t = {});
			var n = this.getWindow(),
				i = n.start.valueOf(),
				a = n.end.valueOf(),
				r = a - i,
				s = (r - r / (1 + e)) / 2;
			this.setWindow(i + s, a - s, t, o)
		}
	}, Qe.prototype.zoomOut = function(e, t, o) {
		if (!(!e || 0 > e || 1 < e)) {
			"function" == typeof arguments[1] && (o = arguments[1], t = {});
			var n = this.getWindow(),
				i = n.start.valueOf(),
				a = n.end.valueOf(),
				r = a - i;
			this.setWindow(i - r * e / 2, a + r * e / 2, t, o)
		}
	}, Qe.prototype.redraw = function() {
		this._redraw()
	}, Qe.prototype._redraw = function() {
		this.redrawCount++;
		var e = !1,
			t = this.options,
			o = this.props,
			n = this.dom;
		if (n && n.container && 0 != n.root.offsetWidth) {
			$o.updateHiddenDates(this.options.moment, this.body, this.options.hiddenDates), "top" == t.orientation ? (to.addClassName(
					n.root, "vis-top"), to.removeClassName(n.root, "vis-bottom")) : (to.removeClassName(n.root, "vis-top"), to.addClassName(
					n.root, "vis-bottom")), n.root.style.maxHeight = to.option.asSize(t.maxHeight, ""), n.root.style.minHeight = to.option
				.asSize(t.minHeight, ""), n.root.style.width = to.option.asSize(t.width, ""), o.border.left = (n.centerContainer.offsetWidth -
					n.centerContainer.clientWidth) / 2, o.border.right = o.border.left, o.border.top = (n.centerContainer.offsetHeight -
					n.centerContainer.clientHeight) / 2, o.border.bottom = o.border.top, o.borderRootHeight = n.root.offsetHeight -
				n.root.clientHeight, o.borderRootWidth = n.root.offsetWidth - n.root.clientWidth, 0 === n.centerContainer.clientHeight &&
				(o.border.left = o.border.top, o.border.right = o.border.left), 0 === n.root.clientHeight && (o.borderRootWidth =
					o.borderRootHeight), o.center.height = n.center.offsetHeight, o.left.height = n.left.offsetHeight, o.right.height =
				n.right.offsetHeight, o.top.height = n.top.clientHeight || -o.border.top, o.bottom.height = n.bottom.clientHeight ||
				-o.border.bottom;
			var i = Pt(o.left.height, o.center.height, o.right.height),
				a = o.top.height + i + o.bottom.height + o.borderRootHeight + o.border.top + o.border.bottom;
			n.root.style.height = to.option.asSize(t.height, a + "px"), o.root.height = n.root.offsetHeight, o.background.height =
				o.root.height - o.borderRootHeight;
			var r = o.root.height - o.top.height - o.bottom.height - o.borderRootHeight;
			o.centerContainer.height = r, o.leftContainer.height = r, o.rightContainer.height = o.leftContainer.height, o.root
				.width = n.root.offsetWidth, o.background.width = o.root.width - o.borderRootWidth, this.initialDrawDone || (o.scrollbarWidth =
					to.getScrollBarWidth()), t.verticalScroll ? t.rtl ? (o.left.width = n.leftContainer.clientWidth || -o.border.left,
					o.right.width = n.rightContainer.clientWidth + o.scrollbarWidth || -o.border.right) : (o.left.width = n.leftContainer
					.clientWidth + o.scrollbarWidth || -o.border.left, o.right.width = n.rightContainer.clientWidth || -o.border.right
				) : (o.left.width = n.leftContainer.clientWidth || -o.border.left, o.right.width = n.rightContainer.clientWidth ||
					-o.border.right), this._setDOM();
			var s = this._updateScrollTop();
			"top" != t.orientation.item && (s += Pt(o.centerContainer.height - o.center.height - o.border.top - o.border.bottom,
				0)), n.center.style.top = s + "px";
			var d = 0 == o.scrollTop ? "hidden" : "",
				l = o.scrollTop == o.scrollTopMin ? "hidden" : "";
			n.shadowTop.style.visibility = d, n.shadowBottom.style.visibility = l, n.shadowTopLeft.style.visibility = d, n.shadowBottomLeft
				.style.visibility = l, n.shadowTopRight.style.visibility = d, n.shadowBottomRight.style.visibility = l, t.verticalScroll &&
				(n.rightContainer.className = "vis-panel vis-right vis-vertical-scroll", n.leftContainer.className =
					"vis-panel vis-left vis-vertical-scroll", n.shadowTopRight.style.visibility = "hidden", n.shadowBottomRight.style
					.visibility = "hidden", n.shadowTopLeft.style.visibility = "hidden", n.shadowBottomLeft.style.visibility =
					"hidden", n.left.style.top = "0px", n.right.style.top = "0px"), (!t.verticalScroll || o.center.height < o.centerContainer
					.height) && (n.left.style.top = s + "px", n.right.style.top = s + "px", n.rightContainer.className = n.rightContainer
					.className.replace(/(?:^|\s)vis-vertical-scroll(?:\s|$)/, " "), n.leftContainer.className = n.leftContainer.className
					.replace(/(?:^|\s)vis-vertical-scroll(?:\s|$)/, " "), o.left.width = n.leftContainer.clientWidth || -o.border.left,
					o.right.width = n.rightContainer.clientWidth || -o.border.right, this._setDOM());
			var p = o.center.height > o.centerContainer.height;
			this.hammer.get("pan").set({
				direction: p ? _n.DIRECTION_ALL : _n.DIRECTION_HORIZONTAL
			}), this.components.forEach(function(t) {
				e = t.redraw() || e
			});
			if (e) {
				if (5 > this.redrawCount) return void this.body.emitter.emit("_change");
				console.log("WARNING: infinite loop in redraw?")
			} else this.redrawCount = 0;
			this.body.emitter.emit("changed")
		}
	}, Qe.prototype._setDOM = function() {
		var e = this.props,
			t = this.dom;
		e.leftContainer.width = e.left.width, e.rightContainer.width = e.right.width;
		var o = e.root.width - e.left.width - e.right.width - e.borderRootWidth;
		e.center.width = o, e.centerContainer.width = o, e.top.width = o, e.bottom.width = o, t.background.style.height = e
			.background.height + "px", t.backgroundVertical.style.height = e.background.height + "px", t.backgroundHorizontal.style
			.height = e.centerContainer.height + "px", t.centerContainer.style.height = e.centerContainer.height + "px", t.leftContainer
			.style.height = e.leftContainer.height + "px", t.rightContainer.style.height = e.rightContainer.height + "px", t.background
			.style.width = e.background.width + "px", t.backgroundVertical.style.width = e.centerContainer.width + "px", t.backgroundHorizontal
			.style.width = e.background.width + "px", t.centerContainer.style.width = e.center.width + "px", t.top.style.width =
			e.top.width + "px", t.bottom.style.width = e.bottom.width + "px", t.background.style.left = "0", t.background.style
			.top = "0", t.backgroundVertical.style.left = e.left.width + e.border.left + "px", t.backgroundVertical.style.top =
			"0", t.backgroundHorizontal.style.left = "0", t.backgroundHorizontal.style.top = e.top.height + "px", t.centerContainer
			.style.left = e.left.width + "px", t.centerContainer.style.top = e.top.height + "px", t.leftContainer.style.left =
			"0", t.leftContainer.style.top = e.top.height + "px", t.rightContainer.style.left = e.left.width + e.center.width +
			"px", t.rightContainer.style.top = e.top.height + "px", t.top.style.left = e.left.width + "px", t.top.style.top =
			"0", t.bottom.style.left = e.left.width + "px", t.bottom.style.top = e.top.height + e.centerContainer.height +
			"px", t.center.style.left = "0", t.left.style.left = "0", t.right.style.left = "0"
	}, Qe.prototype.repaint = function() {
		throw new Error("Function repaint is deprecated. Use redraw instead.")
	}, Qe.prototype.setCurrentTime = function(e) {
		if (!this.currentTime) throw new Error("Option showCurrentTime must be true");
		this.currentTime.setCurrentTime(e)
	}, Qe.prototype.getCurrentTime = function() {
		if (!this.currentTime) throw new Error("Option showCurrentTime must be true");
		return this.currentTime.getCurrentTime()
	}, Qe.prototype._toTime = function(e) {
		return $o.toTime(this, e, this.props.center.width)
	}, Qe.prototype._toGlobalTime = function(e) {
		return $o.toTime(this, e, this.props.root.width)
	}, Qe.prototype._toScreen = function(e) {
		return $o.toScreen(this, e, this.props.center.width)
	}, Qe.prototype._toGlobalScreen = function(e) {
		return $o.toScreen(this, e, this.props.root.width)
	}, Qe.prototype._initAutoResize = function() {
		!0 == this.options.autoResize ? this._startAutoResize() : this._stopAutoResize()
	}, Qe.prototype._startAutoResize = function() {
		var e = this;
		this._stopAutoResize(), this._onResize = function() {
			return !0 == e.options.autoResize ? void(e.dom.root && (e.dom.root.offsetWidth != e.props.lastWidth || e.dom.root
				.offsetHeight != e.props.lastHeight) && (e.props.lastWidth = e.dom.root.offsetWidth, e.props.lastHeight = e.dom
				.root.offsetHeight, e.props.scrollbarWidth = to.getScrollBarWidth(), e.body.emitter.emit("_change"))) : void e._stopAutoResize()
		}, to.addEventListener(window, "resize", this._onResize), e.dom.root && (e.props.lastWidth = e.dom.root.offsetWidth,
			e.props.lastHeight = e.dom.root.offsetHeight), this.watchTimer = setInterval(this._onResize, 1e3)
	}, Qe.prototype._stopAutoResize = function() {
		this.watchTimer && (clearInterval(this.watchTimer), this.watchTimer = void 0), this._onResize && (to.removeEventListener(
			window, "resize", this._onResize), this._onResize = null)
	}, Qe.prototype._onTouch = function() {
		this.touch.allowDragging = !0, this.touch.initialScrollTop = this.props.scrollTop
	}, Qe.prototype._onPinch = function() {
		this.touch.allowDragging = !1
	}, Qe.prototype._onDrag = function(e) {
		if (e && this.touch.allowDragging) {
			var t = e.deltaY,
				o = this._getScrollTop(),
				n = this._setScrollTop(this.touch.initialScrollTop + t);
			this.options.verticalScroll && (this.dom.left.parentNode.scrollTop = -this.props.scrollTop, this.dom.right.parentNode
				.scrollTop = -this.props.scrollTop), n != o && this.emit("verticalDrag")
		}
	}, Qe.prototype._setScrollTop = function(e) {
		return this.props.scrollTop = e, this._updateScrollTop(), this.props.scrollTop
	}, Qe.prototype._updateScrollTop = function() {
		var e = Yt(this.props.centerContainer.height - this.props.center.height, 0);
		return e != this.props.scrollTopMin && ("top" != this.options.orientation.item && (this.props.scrollTop += e - this
				.props.scrollTopMin), this.props.scrollTopMin = e), 0 < this.props.scrollTop && (this.props.scrollTop = 0), this.props
			.scrollTop < e && (this.props.scrollTop = e), this.options.verticalScroll && (this.dom.left.parentNode.scrollTop = -
				this.props.scrollTop, this.dom.right.parentNode.scrollTop = -this.props.scrollTop), this.props.scrollTop
	}, Qe.prototype._getScrollTop = function() {
		return this.props.scrollTop
	}, Qe.prototype._createConfigurator = function() {
		throw new Error("Cannot invoke abstract method _createConfigurator")
	};
	var Yn = Object.freeze({
		default: Qe
	});
	$e.prototype = new Qo, $e.prototype._create = function() {
		var e = document.createElement("div");
		e.className = "vis-current-time", e.style.position = "absolute", e.style.top = "0px", e.style.height = "100%", this
			.bar = e
	}, $e.prototype.destroy = function() {
		this.options.showCurrentTime = !1, this.redraw(), this.body = null
	}, $e.prototype.setOptions = function(e) {
		e && Ko.selectiveExtend(["rtl", "showCurrentTime", "alignCurrentTime", "moment", "locale", "locales"], this.options,
			e)
	}, $e.prototype.redraw = function() {
		if (this.options.showCurrentTime) {
			var e = this.body.dom.backgroundVertical;
			this.bar.parentNode != e && (this.bar.parentNode && this.bar.parentNode.removeChild(this.bar), e.appendChild(this.bar),
				this.start());
			var t = this.options.moment(new Date().valueOf() + this.offset);
			this.options.alignCurrentTime && (t = t.startOf(this.options.alignCurrentTime));
			var o = this.body.util.toScreen(t),
				n = this.options.locales[this.options.locale];
			n || (!this.warned && (console.log("WARNING: options.locales['" + this.options.locale +
				"'] not found. See http://visjs.org/docs/timeline/#Localization"), this.warned = !0), n = this.options.locales.en);
			var i = n.current + " " + n.time + ": " + t.format("dddd, MMMM Do YYYY, H:mm:ss");
			i = i.charAt(0).toUpperCase() + i.substring(1), this.options.rtl ? this.bar.style.right = o + "px" : this.bar.style
				.left = o + "px", this.bar.title = i
		} else this.bar.parentNode && this.bar.parentNode.removeChild(this.bar), this.stop();
		return !1
	}, $e.prototype.start = function() {
		function e() {
			t.stop();
			var o = t.body.range.conversion(t.body.domProps.center.width).scale,
				n = 1 / o / 10;
			30 > n && (n = 30), 1e3 < n && (n = 1e3), t.redraw(), t.body.emitter.emit("currentTimeTick"), t.currentTimeTimer =
				setTimeout(e, n)
		}
		var t = this;
		e()
	}, $e.prototype.stop = function() {
		this.currentTimeTimer !== void 0 && (clearTimeout(this.currentTimeTimer), delete this.currentTimeTimer)
	}, $e.prototype.setCurrentTime = function(e) {
		var o = Ko.convert(e, "Date").valueOf(),
			t = new Date().valueOf();
		this.offset = o - t, this.redraw()
	}, $e.prototype.getCurrentTime = function() {
		return new Date(new Date().valueOf() + this.offset)
	};
	var En = $e,
		In = ue(function(e, t) {
			var o = .001;
			t.orderByStart = function(e) {
				e.sort(function(e, t) {
					return e.data.start - t.data.start
				})
			}, t.orderByEnd = function(e) {
				e.sort(function(e, t) {
					var o = "end" in e.data ? e.data.end : e.data.start,
						n = "end" in t.data ? t.data.end : t.data.start;
					return o - n
				})
			}, t.stack = function(e, o, n, a) {
				if (n)
					for (var r = 0; r < e.length; r++) e[r].top = null;
				for (var r = 0, s; r < e.length; r++)
					if (s = e[r], s.stack && null === s.top) {
						s.top = o.axis;
						var d = !1;
						do {
							for (var l = null, p = 0, m = e.length, u; p < m; p++) {
								if (u = e[p], d = a() || !1, d) return !0;
								if (null !== u.top && u !== s && u.stack && t.collision(s, u, o.item, u.options.rtl)) {
									l = u;
									break
								}
							}
							null != l && (s.top = l.top + l.height + o.item.vertical)
						} while (l)
					} return d
			}, t.substack = function(e, o, n) {
				for (var a = 0; a < e.length; a++) e[a].top = null;
				var r = n.height;
				for (a = 0; a < e.length; a++) {
					var s = e[a];
					if (s.stack && null === s.top) {
						s.top = s.baseTop;
						do {
							for (var d = null, l = 0, p = e.length, m; l < p; l++)
								if (m = e[l], null !== m.top && m !== s && t.collision(s, m, o.item, m.options.rtl)) {
									d = m;
									break
								} null != d && (s.top = d.top + d.height + o.item.vertical), s.top + s.height > r && (r = s.top + s.height)
						} while (d)
					}
				}
				n.height = r - n.top + .5 * o.item.vertical
			}, t.nostack = function(e, o, n, a) {
				for (var r = 0; r < e.length; r++)
					if (e[r].data.subgroup == null) e[r].top = o.item.vertical;
					else if (e[r].data.subgroup !== void 0 && a) {
					var s = 0;
					for (var d in n) n.hasOwnProperty(d) && !0 == n[d].visible && n[d].index < n[e[r].data.subgroup].index && (s +=
						n[d].height, n[e[r].data.subgroup].top = s);
					e[r].top = s + .5 * o.item.vertical
				}
				a || t.stackSubgroups(e, o, n)
			}, t.stackSubgroups = function(e, o, n) {
				for (var a in n)
					if (n.hasOwnProperty(a)) {
						n[a].top = 0;
						do {
							var r = null;
							for (var s in n)
								if (null !== n[s].top && s != a && n[a].index > n[s].index && t.collisionByTimes(n[a], n[s])) {
									r = n[s];
									break
								} null != r && (n[a].top = r.top + r.height)
						} while (r)
					} for (var d = 0; d < e.length; d++) void 0 !== e[d].data.subgroup && (e[d].top = n[e[d].data.subgroup].top +
					.5 * o.item.vertical)
			}, t.stackSubgroupsWithInnerStack = function(e, o, n) {
				var a = !1,
					r = [];
				for (var s in n) n[s].hasOwnProperty("index") ? r[n[s].index] = s : r.push(s);
				for (var d = 0; d < r.length; d++)
					if (s = r[d], n.hasOwnProperty(s)) {
						for (var l in a = a || n[s].stack, n[s].top = 0, n) n[l].visible && n[s].index > n[l].index && (n[s].top += n[
							l].height);
						for (var p = e[s], m = 0; m < p.length; m++) void 0 !== p[m].data.subgroup && (p[m].top = n[p[m].data.subgroup]
							.top + .5 * o.item.vertical, n[s].stack && (p[m].baseTop = p[m].top));
						a && n[s].stack && t.substack(e[s], o, n[s])
					}
			}, t.collision = function(e, t, n, i) {
				return i ? e.right - n.horizontal + o < t.right + t.width && e.right + e.width + n.horizontal - o > t.right && e
					.top - n.vertical + o < t.top + t.height && e.top + e.height + n.vertical - o > t.top : e.left - n.horizontal +
					o < t.left + t.width && e.left + e.width + n.horizontal - o > t.left && e.top - n.vertical + o < t.top + t.height &&
					e.top + e.height + n.vertical - o > t.top
			}, t.collisionByTimes = function(e, t) {
				return e.start <= t.start && e.end >= t.start && e.top < t.top + t.height && e.top + e.height > t.top || t.start <=
					e.start && t.end >= e.start && t.top < e.top + e.height && t.top + t.height > e.top
			}
		}),
		Rn = In.orderByStart,
		An = In.orderByEnd,
		Hn = In.stack,
		Ln = In.substack,
		Nn = In.nostack,
		Fn = In.stackSubgroups,
		Gn = In.stackSubgroupsWithInnerStack,
		Wn = In.collision,
		Un = In.collisionByTimes;
	Je.prototype._create = function() {
		var e = document.createElement("div");
		e.className = this.itemSet.options.groupEditable.order ? "vis-label draggable" : "vis-label", "vertical" === this.itemSet
			.options.groupLabelDirection && (e.className += " vertical"), this.dom.label = e;
		var t = document.createElement("div");
		t.className = "vis-inner", e.appendChild(t), this.dom.inner = t;
		var o = document.createElement("div");
		o.className = "vis-group", o["timeline-group"] = this, this.dom.foreground = o, this.dom.background = document.createElement(
				"div"), this.dom.background.className = "vis-group", this.dom.axis = document.createElement("div"), this.dom.axis
			.className = "vis-group", this.dom.marker = document.createElement("div"), this.dom.marker.style.visibility =
			"hidden", this.dom.marker.style.position = "absolute", this.dom.marker.innerHTML = "", this.dom.background.appendChild(
				this.dom.marker)
	}, Je.prototype.setData = function(e) {
		var t, o;
		if (this.itemSet.options && this.itemSet.options.groupTemplate ? (o = this.itemSet.options.groupTemplate.bind(this),
				t = o(e, this.dom.inner)) : t = e && e.content, t instanceof Element) {
			for (; this.dom.inner.firstChild;) this.dom.inner.removeChild(this.dom.inner.firstChild);
			this.dom.inner.appendChild(t)
		} else if (t instanceof Object && t.isReactComponent);
		else t instanceof Object ? o(e, this.dom.inner) : this.dom.inner.innerHTML = void 0 !== t && null !== t ? t : this.groupId ||
			"";
		if (this.dom.label.title = e && e.title || "", this.dom.inner.firstChild ? Ko.removeClassName(this.dom.inner,
				"vis-hidden") : Ko.addClassName(this.dom.inner, "vis-hidden"), e && e.nestedGroups) {
			this.nestedGroups && this.nestedGroups == e.nestedGroups || (this.nestedGroups = e.nestedGroups), (void 0 !== e.showNested ||
				void 0 === this.showNested) && (!1 == e.showNested ? this.showNested = !1 : this.showNested = !0), Ko.addClassName(
				this.dom.label, "vis-nesting-group");
			var n = this.itemSet.options.rtl ? "collapsed-rtl" : "collapsed";
			this.showNested ? (Ko.removeClassName(this.dom.label, n), Ko.addClassName(this.dom.label, "expanded")) : (Ko.removeClassName(
				this.dom.label, "expanded"), Ko.addClassName(this.dom.label, n))
		} else this.nestedGroups && (this.nestedGroups = null, n = this.itemSet.options.rtl ? "collapsed-rtl" : "collapsed",
			Ko.removeClassName(this.dom.label, n), Ko.removeClassName(this.dom.label, "expanded"), Ko.removeClassName(this.dom
				.label, "vis-nesting-group"));
		e && e.nestedInGroup && (Ko.addClassName(this.dom.label, "vis-nested-group"), this.itemSet.options && this.itemSet.options
			.rtl ? this.dom.inner.style.paddingRight = "30px" : this.dom.inner.style.paddingLeft = "30px");
		var i = e && e.className || null;
		i != this.className && (this.className && (Ko.removeClassName(this.dom.label, this.className), Ko.removeClassName(
				this.dom.foreground, this.className), Ko.removeClassName(this.dom.background, this.className), Ko.removeClassName(
				this.dom.axis, this.className)), Ko.addClassName(this.dom.label, i), Ko.addClassName(this.dom.foreground, i), Ko
			.addClassName(this.dom.background, i), Ko.addClassName(this.dom.axis, i), this.className = i), this.style && (Ko.removeCssText(
			this.dom.label, this.style), this.style = null), e && e.style && (Ko.addCssText(this.dom.label, e.style), this.style =
			e.style)
	}, Je.prototype.getLabelWidth = function() {
		return this.props.label.width
	}, Je.prototype._didMarkerHeightChange = function() {
		var e = this.dom.marker.clientHeight;
		if (e != this.lastMarkerHeight) {
			this.lastMarkerHeight = e;
			var t = {},
				o = 0;
			Ko.forEach(this.items, function(e, n) {
				if (e.dirty = !0, e.displayed) {
					t[n] = e.redraw(!0), o = t[n].length
				}
			});
			var n = 0 < o;
			if (n)
				for (var a = 0; a < o; a++) Ko.forEach(t, function(e) {
					e[a]()
				});
			return !0
		}
	}, Je.prototype._calculateGroupSizeAndPosition = function() {
		var e = this.dom.foreground.offsetTop,
			t = this.dom.foreground.offsetLeft,
			o = this.dom.foreground.offsetWidth;
		this.top = e, this.right = t, this.width = o
	}, Je.prototype._shouldBailItemsRedraw = function() {
		var e = this,
			t = this.itemSet.options.onTimeout,
			o = {
				relativeBailingTime: this.itemSet.itemsSettingTime,
				bailTimeMs: t && t.timeoutMs,
				userBailFunction: t && t.callback,
				shouldBailStackItems: this.shouldBailStackItems
			},
			n = null;
		if (!this.itemSet.initialDrawDone) {
			if (o.shouldBailStackItems) return !0;
			Ot(new Date - new Date(o.relativeBailingTime)) > o.bailTimeMs && (o.userBailFunction && null == this.itemSet.userContinueNotBail ?
				o.userBailFunction(function(t) {
					e.itemSet.userContinueNotBail = t, n = !t
				}) : !1 == e.itemSet.userContinueNotBail ? n = !0 : n = !1)
		}
		return n
	}, Je.prototype._redrawItems = function(e, t, o, n) {
		var a = e || this.stackDirty || this.isVisible && !t;
		if (a) {
			var r = {},
				s = null;
			if ("function" == typeof this.itemSet.options.order) {
				var d = this,
					l = {},
					p = 0;
				Ko.forEach(this.items, function(e, t) {
					if (!e.displayed && (e.isVisible(n) || !e.dom)) {
						l[t] = e.show(!0), p = l[t].length, d.visibleItems.push(e)
					}
				});
				var m = 0 < p;
				if (m)
					for (var u = 0; u < p; u++) Ko.forEach(l, function(e) {
						e[u]()
					});
				if (Ko.forEach(this.items, function(e) {
						e.displayed && e.repositionX(!1)
					}), this.doInnerStack && this.itemSet.options.stackSubgroups) {
					for (s in this.subgroups) r[s] = this.subgroups[s].items.slice().sort(function(e, t) {
						return d.itemSet.options.order(e.data, t.data)
					});
					In.stackSubgroupsWithInnerStack(r, o, this.subgroups)
				} else {
					var c = this.orderedItems.byStart.slice().sort(function(e, t) {
						return d.itemSet.options.order(e.data, t.data)
					});
					this.shouldBailStackItems = In.stack(c, o, !0, this._shouldBailItemsRedraw.bind(this))
				}
				this.visibleItems = this._updateItemsInRange(this.orderedItems, this.visibleItems, n)
			} else if (this.visibleItems = this._updateItemsInRange(this.orderedItems, this.visibleItems, n), !this.itemSet.options
				.stack) In.nostack(this.visibleItems, o, this.subgroups, this.itemSet.options.stackSubgroups);
			else if (this.doInnerStack && this.itemSet.options.stackSubgroups) {
				for (s in this.subgroups) r[s] = this.subgroups[s].items;
				In.stackSubgroupsWithInnerStack(r, o, this.subgroups)
			} else this.shouldBailStackItems = In.stack(this.visibleItems, o, !0, this._shouldBailItemsRedraw.bind(this));
			this.shouldBailStackItems && this.itemSet.body.emitter.emit("destroyTimeline"), this.stackDirty = !1
		}
	}, Je.prototype._didResize = function(e, t) {
		e = Ko.updateProperty(this, "height", t) || e;
		var o = this.dom.inner.getBoundingClientRect(),
			n = o.width,
			i = o.height;
		return e = Ko.updateProperty(this.props.label, "width", n) || e, e = Ko.updateProperty(this.props.label, "height",
			i) || e, e
	}, Je.prototype._applyGroupHeight = function(e) {
		this.dom.background.style.height = e + "px", this.dom.foreground.style.height = e + "px", this.dom.label.style.height =
			e + "px"
	}, Je.prototype._updateItemsVerticalPosition = function(e) {
		for (var t = 0, o = this.visibleItems.length, n; t < o; t++) n = this.visibleItems[t], n.repositionY(e), !this.isVisible &&
			"__background__" != this.groupId && n.displayed && n.hide()
	}, Je.prototype.redraw = function(e, t, o, n) {
		var i = !1,
			a = this.isVisible,
			r = [function() {
				o = this._didMarkerHeightChange.bind(this)
			}.bind(this), this._updateSubGroupHeights.bind(this, t), this._calculateGroupSizeAndPosition.bind(this), function() {
				this.isVisible = this._isGroupVisible.bind(this)(e, t)
			}.bind(this), function() {
				this._redrawItems.bind(this)(o, a, t, e)
			}.bind(this), this._updateSubgroupsSizes.bind(this), function() {
				s = this._calculateHeight.bind(this)(t)
			}.bind(this), this._calculateGroupSizeAndPosition.bind(this), function() {
				i = this._didResize.bind(this)(i, s)
			}.bind(this), function() {
				this._applyGroupHeight.bind(this)(s)
			}.bind(this), function() {
				this._updateItemsVerticalPosition.bind(this)(t)
			}.bind(this), function() {
				return !this.isVisible && this.height && (i = !1), i
			}],
			s;
		if (n) return r;
		var d;
		return r.forEach(function(e) {
			d = e()
		}), d
	}, Je.prototype._updateSubGroupHeights = function(e) {
		if (0 < Object.keys(this.subgroups).length) {
			var t = this;
			this.resetSubgroups(), Ko.forEach(this.visibleItems, function(o) {
				o.data.subgroup !== void 0 && (t.subgroups[o.data.subgroup].height = Pt(t.subgroups[o.data.subgroup].height, o.height +
					e.item.vertical), t.subgroups[o.data.subgroup].visible = !0)
			})
		}
	}, Je.prototype._isGroupVisible = function(e, t) {
		return this.top <= e.body.domProps.centerContainer.height - e.body.domProps.scrollTop + t.axis && this.top + this.height +
			t.axis >= -e.body.domProps.scrollTop
	}, Je.prototype._calculateHeight = function(e) {
		var t, o;
		if (o = "fixed" === this.heightMode ? Ko.toArray(this.items) : this.visibleItems, 0 < o.length) {
			var n = o[0].top,
				i = o[0].top + o[0].height;
			if (Ko.forEach(o, function(e) {
					n = Yt(n, e.top), i = Pt(i, e.top + e.height)
				}), n > e.axis) {
				var a = n - e.axis;
				i -= a, Ko.forEach(o, function(e) {
					e.top -= a
				})
			}
			t = i + e.item.vertical / 2
		} else t = 0;
		return t = Pt(t, this.props.label.height), t
	}, Je.prototype.show = function() {
		this.dom.label.parentNode || this.itemSet.dom.labelSet.appendChild(this.dom.label), this.dom.foreground.parentNode ||
			this.itemSet.dom.foreground.appendChild(this.dom.foreground), this.dom.background.parentNode || this.itemSet.dom.background
			.appendChild(this.dom.background), this.dom.axis.parentNode || this.itemSet.dom.axis.appendChild(this.dom.axis)
	}, Je.prototype.hide = function() {
		var e = this.dom.label;
		e.parentNode && e.parentNode.removeChild(e);
		var t = this.dom.foreground;
		t.parentNode && t.parentNode.removeChild(t);
		var o = this.dom.background;
		o.parentNode && o.parentNode.removeChild(o);
		var n = this.dom.axis;
		n.parentNode && n.parentNode.removeChild(n)
	}, Je.prototype.add = function(e) {
		if (this.items[e.id] = e, e.setParent(this), this.stackDirty = !0, void 0 !== e.data.subgroup && (this._addToSubgroup(
				e), this.orderSubgroups()), -1 == this.visibleItems.indexOf(e)) {
			var t = this.itemSet.body.range;
			this._checkIfVisible(e, this.visibleItems, t)
		}
	}, Je.prototype._addToSubgroup = function(e, t) {
		t = t || e.data.subgroup, t != null && this.subgroups[t] === void 0 && (this.subgroups[t] = {
			height: 0,
			top: 0,
			start: e.data.start,
			end: e.data.end || e.data.start,
			visible: !1,
			index: this.subgroupIndex,
			items: [],
			stack: this.subgroupStackAll || this.subgroupStack[t] || !1
		}, this.subgroupIndex++), new Date(e.data.start) < new Date(this.subgroups[t].start) && (this.subgroups[t].start =
			e.data.start);
		var o = e.data.end || e.data.start;
		new Date(o) > new Date(this.subgroups[t].end) && (this.subgroups[t].end = o), this.subgroups[t].items.push(e)
	}, Je.prototype._updateSubgroupsSizes = function() {
		var e = this;
		if (e.subgroups)
			for (var t in e.subgroups) {
				var o = e.subgroups[t].items[0].data.end || e.subgroups[t].items[0].data.start,
					n = e.subgroups[t].items[0].data.start,
					i = o - 1;
				e.subgroups[t].items.forEach(function(e) {
					new Date(e.data.start) < new Date(n) && (n = e.data.start);
					var t = e.data.end || e.data.start;
					new Date(t) > new Date(i) && (i = t)
				}), e.subgroups[t].start = n, e.subgroups[t].end = new Date(i - 1)
			}
	}, Je.prototype.orderSubgroups = function() {
		if (this.subgroupOrderer !== void 0) {
			var e = [],
				t;
			if ("string" == typeof this.subgroupOrderer) {
				for (t in this.subgroups) e.push({
					subgroup: t,
					sortField: this.subgroups[t].items[0].data[this.subgroupOrderer]
				});
				e.sort(function(e, t) {
					return e.sortField - t.sortField
				})
			} else if ("function" == typeof this.subgroupOrderer) {
				for (t in this.subgroups) e.push(this.subgroups[t].items[0].data);
				e.sort(this.subgroupOrderer)
			}
			if (0 < e.length)
				for (var o = 0; o < e.length; o++) this.subgroups[e[o].subgroup].index = o
		}
	}, Je.prototype.resetSubgroups = function() {
		for (var e in this.subgroups) this.subgroups.hasOwnProperty(e) && (this.subgroups[e].visible = !1, this.subgroups[e]
			.height = 0)
	}, Je.prototype.remove = function(e) {
		delete this.items[e.id], e.setParent(null), this.stackDirty = !0;
		var t = this.visibleItems.indexOf(e); - 1 != t && this.visibleItems.splice(t, 1), e.data.subgroup !== void 0 && (
			this._removeFromSubgroup(e), this.orderSubgroups())
	}, Je.prototype._removeFromSubgroup = function(e, t) {
		if (t = t || e.data.subgroup, null != t) {
			var o = this.subgroups[t];
			if (o) {
				var n = o.items.indexOf(e);
				0 <= n && (o.items.splice(n, 1), o.items.length ? this._updateSubgroupsSizes() : delete this.subgroups[t])
			}
		}
	}, Je.prototype.removeFromDataSet = function(e) {
		this.itemSet.removeItem(e.id)
	}, Je.prototype.order = function() {
		for (var e = Ko.toArray(this.items), t = [], o = [], n = 0; n < e.length; n++) void 0 !== e[n].data.end && o.push(e[
			n]), t.push(e[n]);
		this.orderedItems = {
			byStart: t,
			byEnd: o
		}, In.orderByStart(this.orderedItems.byStart), In.orderByEnd(this.orderedItems.byEnd)
	}, Je.prototype._updateItemsInRange = function(e, t, o) {
		var n = [],
			a = {},
			r = (o.end - o.start) / 4,
			s = o.start - r,
			d = o.end + r,
			l = function(e) {
				return e < s ? -1 : e <= d ? 0 : 1
			};
		if (0 < t.length)
			for (var p = 0; p < t.length; p++) this._checkIfVisibleWithReference(t[p], n, a, o);
		var m = Ko.binarySearchCustom(e.byStart, l, "data", "start");
		if (this._traceVisible(m, e.byStart, n, a, function(e) {
				return e.data.start < s || e.data.start > d
			}), !0 == this.checkRangedItems)
			for (this.checkRangedItems = !1, p = 0; p < e.byEnd.length; p++) this._checkIfVisibleWithReference(e.byEnd[p], n,
				a, o);
		else {
			var u = Ko.binarySearchCustom(e.byEnd, l, "data", "end");
			this._traceVisible(u, e.byEnd, n, a, function(e) {
				return e.data.end < s || e.data.end > d
			})
		}
		var c = {},
			h = 0;
		for (p = 0; p < n.length; p++) {
			var g = n[p];
			if (!g.displayed) {
				c[p] = g.redraw(!0), h = c[p].length
			}
		}
		var f = 0 < h;
		if (f)
			for (var y = 0; y < h; y++) Ko.forEach(c, function(e) {
				e[y]()
			});
		for (p = 0; p < n.length; p++) n[p].repositionX();
		return n
	}, Je.prototype._traceVisible = function(e, t, o, n, a) {
		if (-1 != e) {
			var r, s;
			for (r = e; 0 <= r && (s = t[r], !a(s)); r--) void 0 === n[s.id] && (n[s.id] = !0, o.push(s));
			for (r = e + 1; r < t.length && (s = t[r], !a(s)); r++) void 0 === n[s.id] && (n[s.id] = !0, o.push(s))
		}
	}, Je.prototype._checkIfVisible = function(e, t, o) {
		e.isVisible(o) ? (!e.displayed && e.show(), e.repositionX(), t.push(e)) : e.displayed && e.hide()
	}, Je.prototype._checkIfVisibleWithReference = function(e, t, o, n) {
		e.isVisible(n) ? o[e.id] === void 0 && (o[e.id] = !0, t.push(e)) : e.displayed && e.hide()
	}, Je.prototype.changeSubgroup = function(e, t, o) {
		this._removeFromSubgroup(e, t), this._addToSubgroup(e, o), this.orderSubgroups()
	};
	var jn = Je;
	et.prototype = Object.create(jn.prototype), et.prototype.redraw = function(e, t) {
		this.visibleItems = this._updateItemsInRange(this.orderedItems, this.visibleItems, e), this.width = this.dom.background
			.offsetWidth, this.dom.background.style.height = "0";
		for (var o = 0, n = this.visibleItems.length, a; o < n; o++) a = this.visibleItems[o], a.repositionY(t);
		return !1
	}, et.prototype.show = function() {
		this.dom.background.parentNode || this.itemSet.dom.background.appendChild(this.dom.background)
	};
	var Vn = et;
	tt.prototype.stack = !0, tt.prototype.select = function() {
			this.selected = !0, this.dirty = !0, this.displayed && this.redraw()
		}, tt.prototype.unselect = function() {
			this.selected = !1, this.dirty = !0, this.displayed && this.redraw()
		}, tt.prototype.setData = function(e) {
			var t = e.group != null && this.data.group != e.group;
			t && null != this.parent && this.parent.itemSet._moveToGroup(this, e.group), this.parent && (this.parent.stackDirty = !
				0);
			var o = e.subgroup != null && this.data.subgroup != e.subgroup;
			o && null != this.parent && this.parent.changeSubgroup(this, this.data.subgroup, e.subgroup), this.data = e, this._updateEditStatus(),
				this.dirty = !0, this.displayed && this.redraw()
		}, tt.prototype.setParent = function(e) {
			this.displayed ? (this.hide(), this.parent = e, this.parent && this.show()) : this.parent = e
		}, tt.prototype.isVisible = function() {
			return !1
		}, tt.prototype.show = function() {
			return !1
		}, tt.prototype.hide = function() {
			return !1
		}, tt.prototype.redraw = function() {}, tt.prototype.repositionX = function() {}, tt.prototype.repositionY =
		function() {}, tt.prototype._repaintDragCenter = function() {
			if (this.selected && this.options.editable.updateTime && !this.dom.dragCenter) {
				var e = this,
					t = document.createElement("div");
				t.className = "vis-drag-center", t.dragCenterItem = this;
				var o = new _n(t);
				o.on("tap", function(t) {
					e.parent.itemSet.body.emitter.emit("click", {
						event: t,
						item: e.id
					})
				}), o.on("doubletap", function(t) {
					t.stopPropagation(), e.parent.itemSet._onUpdateItem(e), e.parent.itemSet.body.emitter.emit("doubleClick", {
						event: t,
						item: e.id
					})
				}), this.dom.box ? this.dom.dragLeft ? this.dom.box.insertBefore(t, this.dom.dragLeft) : this.dom.box.appendChild(
					t) : this.dom.point && this.dom.point.appendChild(t), this.dom.dragCenter = t
			} else !this.selected && this.dom.dragCenter && (this.dom.dragCenter.parentNode && this.dom.dragCenter.parentNode.removeChild(
				this.dom.dragCenter), this.dom.dragCenter = null)
		}, tt.prototype._repaintDeleteButton = function(e) {
			var t = (this.options.editable.overrideItems || null == this.editable) && this.options.editable.remove || !this.options
				.editable.overrideItems && null != this.editable && this.editable.remove;
			if (this.selected && t && !this.dom.deleteButton) {
				var o = this,
					n = document.createElement("div");
				n.className = this.options.rtl ? "vis-delete-rtl" : "vis-delete", n.title = "Delete this item", new _n(n).on("tap",
					function(e) {
						e.stopPropagation(), o.parent.removeFromDataSet(o)
					}), e.appendChild(n), this.dom.deleteButton = n
			} else !this.selected && this.dom.deleteButton && (this.dom.deleteButton.parentNode && this.dom.deleteButton.parentNode
				.removeChild(this.dom.deleteButton), this.dom.deleteButton = null)
		}, tt.prototype._repaintOnItemUpdateTimeTooltip = function(e) {
			if (this.options.tooltipOnItemUpdateTime) {
				var t = (this.options.editable.updateTime || !0 === this.data.editable) && !1 !== this.data.editable;
				if (this.selected && t && !this.dom.onItemUpdateTimeTooltip) {
					var o = document.createElement("div");
					o.className = "vis-onUpdateTime-tooltip", e.appendChild(o), this.dom.onItemUpdateTimeTooltip = o
				} else !this.selected && this.dom.onItemUpdateTimeTooltip && (this.dom.onItemUpdateTimeTooltip.parentNode && this.dom
					.onItemUpdateTimeTooltip.parentNode.removeChild(this.dom.onItemUpdateTimeTooltip), this.dom.onItemUpdateTimeTooltip =
					null);
				if (this.dom.onItemUpdateTimeTooltip) {
					this.dom.onItemUpdateTimeTooltip.style.visibility = this.parent.itemSet.touchParams.itemIsDragging ? "visible" :
						"hidden", this.options.rtl ? this.dom.onItemUpdateTimeTooltip.style.right = this.dom.content.style.right : this.dom
						.onItemUpdateTimeTooltip.style.left = this.dom.content.style.left;
					var n = this.parent.itemSet.body.domProps.scrollTop,
						i;
					i = "top" == this.options.orientation.item ? this.top : this.parent.height - this.top - this.height;
					var a = i + this.parent.top - 50 < -n;
					a ? (this.dom.onItemUpdateTimeTooltip.style.bottom = "", this.dom.onItemUpdateTimeTooltip.style.top = this.height +
						2 + "px") : (this.dom.onItemUpdateTimeTooltip.style.top = "", this.dom.onItemUpdateTimeTooltip.style.bottom =
						this.height + 2 + "px");
					var r, s;
					this.options.tooltipOnItemUpdateTime && this.options.tooltipOnItemUpdateTime.template ? (s = this.options.tooltipOnItemUpdateTime
							.template.bind(this), r = s(this.data)) : (r = "start: " + Xo(this.data.start).format("MM/DD/YYYY hh:mm"), this
							.data.end && (r += "<br> end: " + Xo(this.data.end).format("MM/DD/YYYY hh:mm"))), this.dom.onItemUpdateTimeTooltip
						.innerHTML = r
				}
			}
		}, tt.prototype._updateContents = function(e) {
			var t = this.parent.itemSet.itemsData.get(this.id),
				o = this.dom.box || this.dom.point,
				n = o.getElementsByClassName("vis-item-visible-frame")[0],
				i, a, r, s, d;
			if (this.options.visibleFrameTemplate ? (d = this.options.visibleFrameTemplate.bind(this), s = d(t, o)) : s = "", n)
				if (s instanceof Object && !(s instanceof Element)) d(t, n);
				else if (a = this._contentToString(this.itemVisibleFrameContent) !== this._contentToString(s), a) {
				if (s instanceof Element) n.innerHTML = "", n.appendChild(s);
				else if (null != s) n.innerHTML = s;
				else if ("background" != this.data.type || void 0 !== this.data.content) throw new Error(
					"Property \"content\" missing in item " + this.id);
				this.itemVisibleFrameContent = s
			}
			if (this.options.template ? (r = this.options.template.bind(this), i = r(t, e, this.data)) : i = this.data.content,
				i instanceof Object && !(i instanceof Element)) r(t, e);
			else if (a = this._contentToString(this.content) !== this._contentToString(i), a) {
				if (i instanceof Element) e.innerHTML = "", e.appendChild(i);
				else if (null != i) e.innerHTML = i;
				else if ("background" != this.data.type || void 0 !== this.data.content) throw new Error(
					"Property \"content\" missing in item " + this.id);
				this.content = i
			}
		}, tt.prototype._updateDataAttributes = function(e) {
			if (this.options.dataAttributes && 0 < this.options.dataAttributes.length) {
				var t = [];
				if (Array.isArray(this.options.dataAttributes)) t = this.options.dataAttributes;
				else if ("all" == this.options.dataAttributes) t = Object.keys(this.data);
				else return;
				for (var o = 0; o < t.length; o++) {
					var n = t[o],
						a = this.data[n];
					null == a ? e.removeAttribute("data-" + n) : e.setAttribute("data-" + n, a)
				}
			}
		}, tt.prototype._updateStyle = function(e) {
			this.style && (to.removeCssText(e, this.style), this.style = null), this.data.style && (to.addCssText(e, this.data.style),
				this.style = this.data.style)
		}, tt.prototype._contentToString = function(e) {
			return "string" == typeof e ? e : e && "outerHTML" in e ? e.outerHTML : e
		}, tt.prototype._updateEditStatus = function() {
			this.options && ("boolean" == typeof this.options.editable ? this.editable = {
					updateTime: this.options.editable,
					updateGroup: this.options.editable,
					remove: this.options.editable
				} : "object" === Le(this.options.editable) && (this.editable = {}, to.selectiveExtend(["updateTime",
					"updateGroup", "remove"
				], this.editable, this.options.editable))), this.options && this.options.editable && !0 === this.options.editable.overrideItems ||
				!this.data || ("boolean" == typeof this.data.editable ? this.editable = {
					updateTime: this.data.editable,
					updateGroup: this.data.editable,
					remove: this.data.editable
				} : "object" === Le(this.data.editable) && (this.editable = {}, to.selectiveExtend(["updateTime", "updateGroup",
					"remove"
				], this.editable, this.data.editable)))
		}, tt.prototype.getWidthLeft = function() {
			return 0
		}, tt.prototype.getWidthRight = function() {
			return 0
		}, tt.prototype.getTitle = function() {
			return this.data.title
		};
	var zn = Object.freeze({
			default: tt
		}),
		Bn = ce(zn);
	ot.prototype = new Bn(null, null, null), ot.prototype.isVisible = function(e) {
		var t = this.options.align,
			o = this.width * e.getMillisecondsPerPixel(),
			n;
		return n = "right" == t ? this.data.start.getTime() > e.start && this.data.start.getTime() - o < e.end : "left" ==
			t ? this.data.start.getTime() + o > e.start && this.data.start.getTime() < e.end : this.data.start.getTime() + o /
			2 > e.start && this.data.start.getTime() - o / 2 < e.end, n
	}, ot.prototype._createDomElement = function() {
		this.dom || (this.dom = {}, this.dom.box = document.createElement("DIV"), this.dom.content = document.createElement(
				"DIV"), this.dom.content.className = "vis-item-content", this.dom.box.appendChild(this.dom.content), this.dom.line =
			document.createElement("DIV"), this.dom.line.className = "vis-line", this.dom.dot = document.createElement("DIV"),
			this.dom.dot.className = "vis-dot", this.dom.box["timeline-item"] = this, this.dirty = !0)
	}, ot.prototype._appendDomElement = function() {
		if (!this.parent) throw new Error("Cannot redraw item: no parent attached");
		if (!this.dom.box.parentNode) {
			var e = this.parent.dom.foreground;
			if (!e) throw new Error("Cannot redraw item: parent has no foreground container element");
			e.appendChild(this.dom.box)
		}
		if (!this.dom.line.parentNode) {
			var t = this.parent.dom.background;
			if (!t) throw new Error("Cannot redraw item: parent has no background container element");
			t.appendChild(this.dom.line)
		}
		if (!this.dom.dot.parentNode) {
			var o = this.parent.dom.axis;
			if (!t) throw new Error("Cannot redraw item: parent has no axis container element");
			o.appendChild(this.dom.dot)
		}
		this.displayed = !0
	}, ot.prototype._updateDirtyDomComponents = function() {
		if (this.dirty) {
			this._updateContents(this.dom.content), this._updateDataAttributes(this.dom.box), this._updateStyle(this.dom.box);
			var e = this.editable.updateTime || this.editable.updateGroup,
				t = (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "") + (e ?
					" vis-editable" : " vis-readonly");
			this.dom.box.className = "vis-item vis-box" + t, this.dom.line.className = "vis-item vis-line" + t, this.dom.dot.className =
				"vis-item vis-dot" + t
		}
	}, ot.prototype._getDomComponentsSizes = function() {
		return {
			previous: {
				right: this.dom.box.style.right,
				left: this.dom.box.style.left
			},
			dot: {
				height: this.dom.dot.offsetHeight,
				width: this.dom.dot.offsetWidth
			},
			line: {
				width: this.dom.line.offsetWidth
			},
			box: {
				width: this.dom.box.offsetWidth,
				height: this.dom.box.offsetHeight
			}
		}
	}, ot.prototype._updateDomComponentsSizes = function(e) {
		this.options.rtl ? this.dom.box.style.right = "0px" : this.dom.box.style.left = "0px", this.props.dot.height = e.dot
			.height, this.props.dot.width = e.dot.width, this.props.line.width = e.line.width, this.width = e.box.width, this.height =
			e.box.height, this.options.rtl ? this.dom.box.style.right = e.previous.right : this.dom.box.style.left = e.previous
			.left, this.dirty = !1
	}, ot.prototype._repaintDomAdditionals = function() {
		this._repaintOnItemUpdateTimeTooltip(this.dom.box), this._repaintDragCenter(), this._repaintDeleteButton(this.dom.box)
	}, ot.prototype.redraw = function(e) {
		var t = [this._createDomElement.bind(this), this._appendDomElement.bind(this), this._updateDirtyDomComponents.bind(
				this), function() {
				this.dirty && (o = this._getDomComponentsSizes())
			}.bind(this), function() {
				this.dirty && this._updateDomComponentsSizes.bind(this)(o)
			}.bind(this), this._repaintDomAdditionals.bind(this)],
			o;
		if (e) return t;
		var n;
		return t.forEach(function(e) {
			n = e()
		}), n
	}, ot.prototype.show = function(e) {
		if (!this.displayed) return this.redraw(e)
	}, ot.prototype.hide = function() {
		if (this.displayed) {
			var e = this.dom;
			e.box.parentNode && e.box.parentNode.removeChild(e.box), e.line.parentNode && e.line.parentNode.removeChild(e.line),
				e.dot.parentNode && e.dot.parentNode.removeChild(e.dot), this.displayed = !1
		}
	}, ot.prototype.repositionX = function() {
		var e = this.conversion.toScreen(this.data.start),
			t = this.options.align;
		"right" == t ? this.options.rtl ? (this.right = e - this.width, this.dom.box.style.right = this.right + "px", this.dom
				.line.style.right = e - this.props.line.width + "px", this.dom.dot.style.right = e - this.props.line.width / 2 -
				this.props.dot.width / 2 + "px") : (this.left = e - this.width, this.dom.box.style.left = this.left + "px", this.dom
				.line.style.left = e - this.props.line.width + "px", this.dom.dot.style.left = e - this.props.line.width / 2 -
				this.props.dot.width / 2 + "px") : "left" == t ? this.options.rtl ? (this.right = e, this.dom.box.style.right =
				this.right + "px", this.dom.line.style.right = e + "px", this.dom.dot.style.right = e + this.props.line.width / 2 -
				this.props.dot.width / 2 + "px") : (this.left = e, this.dom.box.style.left = this.left + "px", this.dom.line.style
				.left = e + "px", this.dom.dot.style.left = e + this.props.line.width / 2 - this.props.dot.width / 2 + "px") :
			this.options.rtl ? (this.right = e - this.width / 2, this.dom.box.style.right = this.right + "px", this.dom.line.style
				.right = e - this.props.line.width + "px", this.dom.dot.style.right = e - this.props.dot.width / 2 + "px") : (
				this.left = e - this.width / 2, this.dom.box.style.left = this.left + "px", this.dom.line.style.left = e - this.props
				.line.width / 2 + "px", this.dom.dot.style.left = e - this.props.dot.width / 2 + "px")
	}, ot.prototype.repositionY = function() {
		var e = this.options.orientation.item,
			t = this.dom.box,
			o = this.dom.line,
			n = this.dom.dot;
		if ("top" == e) t.style.top = (this.top || 0) + "px", o.style.top = "0", o.style.height = this.parent.top + this.top +
			1 + "px", o.style.bottom = "";
		else {
			var i = this.parent.itemSet.props.height,
				a = i - this.parent.top - this.parent.height + this.top;
			t.style.top = (this.parent.height - this.top - this.height || 0) + "px", o.style.top = i - a + "px", o.style.bottom =
				"0"
		}
		n.style.top = -this.props.dot.height / 2 + "px"
	}, ot.prototype.getWidthLeft = function() {
		return this.width / 2
	}, ot.prototype.getWidthRight = function() {
		return this.width / 2
	};
	var qn = ot;
	nt.prototype = new Bn(null, null, null), nt.prototype.isVisible = function(e) {
		var t = this.width * e.getMillisecondsPerPixel();
		return this.data.start.getTime() + t > e.start && this.data.start < e.end
	}, nt.prototype._createDomElement = function() {
		this.dom || (this.dom = {}, this.dom.point = document.createElement("div"), this.dom.content = document.createElement(
				"div"), this.dom.content.className = "vis-item-content", this.dom.point.appendChild(this.dom.content), this.dom.dot =
			document.createElement("div"), this.dom.point.appendChild(this.dom.dot), this.dom.point["timeline-item"] = this,
			this.dirty = !0)
	}, nt.prototype._appendDomElement = function() {
		if (!this.parent) throw new Error("Cannot redraw item: no parent attached");
		if (!this.dom.point.parentNode) {
			var e = this.parent.dom.foreground;
			if (!e) throw new Error("Cannot redraw item: parent has no foreground container element");
			e.appendChild(this.dom.point)
		}
		this.displayed = !0
	}, nt.prototype._updateDirtyDomComponents = function() {
		if (this.dirty) {
			this._updateContents(this.dom.content), this._updateDataAttributes(this.dom.point), this._updateStyle(this.dom.point);
			var e = this.editable.updateTime || this.editable.updateGroup,
				t = (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "") + (e ?
					" vis-editable" : " vis-readonly");
			this.dom.point.className = "vis-item vis-point" + t, this.dom.dot.className = "vis-item vis-dot" + t
		}
	}, nt.prototype._getDomComponentsSizes = function() {
		return {
			dot: {
				width: this.dom.dot.offsetWidth,
				height: this.dom.dot.offsetHeight
			},
			content: {
				width: this.dom.content.offsetWidth,
				height: this.dom.content.offsetHeight
			},
			point: {
				width: this.dom.point.offsetWidth,
				height: this.dom.point.offsetHeight
			}
		}
	}, nt.prototype._updateDomComponentsSizes = function(e) {
		this.props.dot.width = e.dot.width, this.props.dot.height = e.dot.height, this.props.content.height = e.content.height,
			this.options.rtl ? this.dom.content.style.marginRight = 2 * this.props.dot.width + "px" : this.dom.content.style.marginLeft =
			2 * this.props.dot.width + "px", this.width = e.point.width, this.height = e.point.height, this.dom.dot.style.top =
			(this.height - this.props.dot.height) / 2 + "px", this.options.rtl ? this.dom.dot.style.right = this.props.dot.width /
			2 + "px" : this.dom.dot.style.left = this.props.dot.width / 2 + "px", this.dirty = !1
	}, nt.prototype._repaintDomAdditionals = function() {
		this._repaintOnItemUpdateTimeTooltip(this.dom.point), this._repaintDragCenter(), this._repaintDeleteButton(this.dom
			.point)
	}, nt.prototype.redraw = function(e) {
		var t = [this._createDomElement.bind(this), this._appendDomElement.bind(this), this._updateDirtyDomComponents.bind(
				this), function() {
				this.dirty && (o = this._getDomComponentsSizes())
			}.bind(this), function() {
				this.dirty && this._updateDomComponentsSizes.bind(this)(o)
			}.bind(this), this._repaintDomAdditionals.bind(this)],
			o;
		if (e) return t;
		var n;
		return t.forEach(function(e) {
			n = e()
		}), n
	}, nt.prototype.show = function(e) {
		if (!this.displayed) return this.redraw(e)
	}, nt.prototype.hide = function() {
		this.displayed && (this.dom.point.parentNode && this.dom.point.parentNode.removeChild(this.dom.point), this.displayed = !
			1)
	}, nt.prototype.repositionX = function() {
		var e = this.conversion.toScreen(this.data.start);
		this.options.rtl ? (this.right = e - this.props.dot.width, this.dom.point.style.right = this.right + "px") : (this.left =
			e - this.props.dot.width, this.dom.point.style.left = this.left + "px")
	}, nt.prototype.repositionY = function() {
		var e = this.options.orientation.item,
			t = this.dom.point;
		t.style.top = "top" == e ? this.top + "px" : this.parent.height - this.top - this.height + "px"
	}, nt.prototype.getWidthLeft = function() {
		return this.props.dot.width
	}, nt.prototype.getWidthRight = function() {
		return this.props.dot.width
	};
	var Zn = nt;
	it.prototype = new Bn(null, null, null), it.prototype.baseClassName = "vis-item vis-range", it.prototype.isVisible =
		function(e) {
			return this.data.start < e.end && this.data.end > e.start
		}, it.prototype._createDomElement = function() {
			this.dom || (this.dom = {}, this.dom.box = document.createElement("div"), this.dom.frame = document.createElement(
					"div"), this.dom.frame.className = "vis-item-overflow", this.dom.box.appendChild(this.dom.frame), this.dom.visibleFrame =
				document.createElement("div"), this.dom.visibleFrame.className = "vis-item-visible-frame", this.dom.box.appendChild(
					this.dom.visibleFrame), this.dom.content = document.createElement("div"), this.dom.content.className =
				"vis-item-content", this.dom.frame.appendChild(this.dom.content), this.dom.box["timeline-item"] = this, this.dirty = !
				0)
		}, it.prototype._appendDomElement = function() {
			if (!this.parent) throw new Error("Cannot redraw item: no parent attached");
			if (!this.dom.box.parentNode) {
				var e = this.parent.dom.foreground;
				if (!e) throw new Error("Cannot redraw item: parent has no foreground container element");
				e.appendChild(this.dom.box)
			}
			this.displayed = !0
		}, it.prototype._updateDirtyDomComponents = function() {
			if (this.dirty) {
				this._updateContents(this.dom.content), this._updateDataAttributes(this.dom.box), this._updateStyle(this.dom.box);
				var e = this.editable.updateTime || this.editable.updateGroup,
					t = (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "") + (e ?
						" vis-editable" : " vis-readonly");
				this.dom.box.className = this.baseClassName + t, this.dom.content.style.maxWidth = "none"
			}
		}, it.prototype._getDomComponentsSizes = function() {
			return this.overflow = "hidden" !== window.getComputedStyle(this.dom.frame).overflow, {
				content: {
					width: this.dom.content.offsetWidth
				},
				box: {
					height: this.dom.box.offsetHeight
				}
			}
		}, it.prototype._updateDomComponentsSizes = function(e) {
			this.props.content.width = e.content.width, this.height = e.box.height, this.dom.content.style.maxWidth = "", this.dirty = !
				1
		}, it.prototype._repaintDomAdditionals = function() {
			this._repaintOnItemUpdateTimeTooltip(this.dom.box), this._repaintDeleteButton(this.dom.box), this._repaintDragCenter(),
				this._repaintDragLeft(), this._repaintDragRight()
		}, it.prototype.redraw = function(e) {
			var t = [this._createDomElement.bind(this), this._appendDomElement.bind(this), this._updateDirtyDomComponents.bind(
					this), function() {
					this.dirty && (o = this._getDomComponentsSizes.bind(this)())
				}.bind(this), function() {
					this.dirty && this._updateDomComponentsSizes.bind(this)(o)
				}.bind(this), this._repaintDomAdditionals.bind(this)],
				o;
			if (e) return t;
			var n;
			return t.forEach(function(e) {
				n = e()
			}), n
		}, it.prototype.show = function(e) {
			if (!this.displayed) return this.redraw(e)
		}, it.prototype.hide = function() {
			if (this.displayed) {
				var e = this.dom.box;
				e.parentNode && e.parentNode.removeChild(e), this.displayed = !1
			}
		}, it.prototype.repositionX = function(e) {
			var t = this.parent.width,
				o = this.conversion.toScreen(this.data.start),
				n = this.conversion.toScreen(this.data.end),
				i = this.data.align === void 0 ? this.options.align : this.data.align,
				a, r;
			!1 !== this.data.limitSize && (e === void 0 || !0 === e) && (o < -t && (o = -t), n > 2 * t && (n = 2 * t));
			var s = Pt(n - o + .5, 1);
			this.overflow ? (this.options.rtl ? this.right = o : this.left = o, this.width = s + this.props.content.width, r =
					this.props.content.width) : (this.options.rtl ? this.right = o : this.left = o, this.width = s, r = Yt(n - o,
					this.props.content.width)), this.options.rtl ? this.dom.box.style.right = this.right + "px" : this.dom.box.style.left =
				this.left + "px", this.dom.box.style.width = s + "px";
			"left" === i ? this.options.rtl ? this.dom.content.style.right = "0" : this.dom.content.style.left = "0" : "right" ===
				i ? this.options.rtl ? this.dom.content.style.right = Pt(s - r, 0) + "px" : this.dom.content.style.left = Pt(s - r,
					0) + "px" : "center" === i ? this.options.rtl ? this.dom.content.style.right = Pt((s - r) / 2, 0) + "px" : this.dom
				.content.style.left = Pt((s - r) / 2, 0) + "px" : (a = this.overflow ? 0 < n ? Pt(-o, 0) : -r : 0 > o ? -o : 0,
					this.options.rtl ? this.dom.content.style.right = a + "px" : (this.dom.content.style.left = a + "px", this.dom.content
						.style.width = "calc(100% - " + a + "px)"))
		}, it.prototype.repositionY = function() {
			var e = this.options.orientation.item,
				t = this.dom.box;
			t.style.top = "top" == e ? this.top + "px" : this.parent.height - this.top - this.height + "px"
		}, it.prototype._repaintDragLeft = function() {
			if ((this.selected || this.options.itemsAlwaysDraggable.range) && this.options.editable.updateTime && !this.dom.dragLeft) {
				var e = document.createElement("div");
				e.className = "vis-drag-left", e.dragLeftItem = this, this.dom.box.appendChild(e), this.dom.dragLeft = e
			} else this.selected || this.options.itemsAlwaysDraggable.range || !this.dom.dragLeft || (this.dom.dragLeft.parentNode &&
				this.dom.dragLeft.parentNode.removeChild(this.dom.dragLeft), this.dom.dragLeft = null)
		}, it.prototype._repaintDragRight = function() {
			if ((this.selected || this.options.itemsAlwaysDraggable.range) && this.options.editable.updateTime && !this.dom.dragRight) {
				var e = document.createElement("div");
				e.className = "vis-drag-right", e.dragRightItem = this, this.dom.box.appendChild(e), this.dom.dragRight = e
			} else this.selected || this.options.itemsAlwaysDraggable.range || !this.dom.dragRight || (this.dom.dragRight.parentNode &&
				this.dom.dragRight.parentNode.removeChild(this.dom.dragRight), this.dom.dragRight = null)
		};
	var Xn = it;
	at.prototype = new Bn(null, null, null), at.prototype.baseClassName = "vis-item vis-background", at.prototype.stack = !
		1, at.prototype.isVisible = function(e) {
			return this.data.start < e.end && this.data.end > e.start
		}, at.prototype._createDomElement = function() {
			this.dom || (this.dom = {}, this.dom.box = document.createElement("div"), this.dom.frame = document.createElement(
					"div"), this.dom.frame.className = "vis-item-overflow", this.dom.box.appendChild(this.dom.frame), this.dom.content =
				document.createElement("div"), this.dom.content.className = "vis-item-content", this.dom.frame.appendChild(this.dom
					.content), this.dirty = !0)
		}, at.prototype._appendDomElement = function() {
			if (!this.parent) throw new Error("Cannot redraw item: no parent attached");
			if (!this.dom.box.parentNode) {
				var e = this.parent.dom.background;
				if (!e) throw new Error("Cannot redraw item: parent has no background container element");
				e.appendChild(this.dom.box)
			}
			this.displayed = !0
		}, at.prototype._updateDirtyDomComponents = function() {
			if (this.dirty) {
				this._updateContents(this.dom.content), this._updateDataAttributes(this.dom.content), this._updateStyle(this.dom.box);
				var e = (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "");
				this.dom.box.className = this.baseClassName + e
			}
		}, at.prototype._getDomComponentsSizes = function() {
			return this.overflow = "hidden" !== window.getComputedStyle(this.dom.content).overflow, {
				content: {
					width: this.dom.content.offsetWidth
				}
			}
		}, at.prototype._updateDomComponentsSizes = function(e) {
			this.props.content.width = e.content.width, this.height = 0, this.dirty = !1
		}, at.prototype._repaintDomAdditionals = function() {}, at.prototype.redraw = function(e) {
			var t = [this._createDomElement.bind(this), this._appendDomElement.bind(this), this._updateDirtyDomComponents.bind(
					this), function() {
					this.dirty && (o = this._getDomComponentsSizes.bind(this)())
				}.bind(this), function() {
					this.dirty && this._updateDomComponentsSizes.bind(this)(o)
				}.bind(this), this._repaintDomAdditionals.bind(this)],
				o;
			if (e) return t;
			var n;
			return t.forEach(function(e) {
				n = e()
			}), n
		}, at.prototype.show = Xn.prototype.show, at.prototype.hide = Xn.prototype.hide, at.prototype.repositionX = Xn.prototype
		.repositionX, at.prototype.repositionY = function() {
			var e = this.options.orientation.item,
				t;
			if (this.data.subgroup !== void 0) {
				var o = this.data.subgroup;
				this.dom.box.style.height = this.parent.subgroups[o].height + "px", this.dom.box.style.top = "top" == e ? this.parent
					.top + this.parent.subgroups[o].top + "px" : this.parent.top + this.parent.height - this.parent.subgroups[o].top -
					this.parent.subgroups[o].height + "px", this.dom.box.style.bottom = ""
			} else this.parent instanceof Vn ? (t = Pt(this.parent.height, this.parent.itemSet.body.domProps.center.height,
					this.parent.itemSet.body.domProps.centerContainer.height), this.dom.box.style.bottom = "bottom" == e ? "0" : "",
				this.dom.box.style.top = "top" == e ? "0" : "") : (t = this.parent.height, this.dom.box.style.top = this.parent.top +
				"px", this.dom.box.style.bottom = "");
			this.dom.box.style.height = t + "px"
		};
	var Kn = at,
		Qn = function() {
			function e(t, o) {
				Ne(this, e), this.container = t, this.overflowMethod = o || "cap", this.x = 0, this.y = 0, this.padding = 5, this.hidden = !
					1, this.frame = document.createElement("div"), this.frame.className = "vis-tooltip", this.container.appendChild(
						this.frame)
			}
			return Ge(e, [{
				key: "setPosition",
				value: function(e, t) {
					this.x = parseInt(e), this.y = parseInt(t)
				}
			}, {
				key: "setText",
				value: function(e) {
					e instanceof Element ? (this.frame.innerHTML = "", this.frame.appendChild(e)) : this.frame.innerHTML = e
				}
			}, {
				key: "show",
				value: function(e) {
					if (void 0 === e && (e = !0), !0 === e) {
						var t = this.frame.clientHeight,
							o = this.frame.clientWidth,
							n = this.frame.parentNode.clientHeight,
							i = this.frame.parentNode.clientWidth,
							a = 0,
							r = 0;
						if ("flip" == this.overflowMethod) {
							var s = !1,
								d = !0;
							this.y - t < this.padding && (d = !1), this.x + o > i - this.padding && (s = !0), a = s ? this.x - o : this
								.x, r = d ? this.y - t : this.y
						} else r = this.y - t, r + t + this.padding > n && (r = n - t - this.padding), r < this.padding && (r = this
							.padding), a = this.x, a + o + this.padding > i && (a = i - o - this.padding), a < this.padding && (a =
							this.padding);
						this.frame.style.left = a + "px", this.frame.style.top = r + "px", this.frame.style.visibility = "visible",
							this.hidden = !1
					} else this.hide()
				}
			}, {
				key: "hide",
				value: function() {
					this.hidden = !0, this.frame.style.left = "0", this.frame.style.top = "0", this.frame.style.visibility =
						"hidden"
				}
			}, {
				key: "destroy",
				value: function() {
					this.frame.parentNode.removeChild(this.frame)
				}
			}]), e
		}(),
		$n = "__ungrouped__",
		Jn = "__background__";
	rt.prototype = new Qo, rt.types = {
		background: Kn,
		box: qn,
		range: Xn,
		point: Zn
	}, rt.prototype._create = function() {
		var e = document.createElement("div");
		e.className = "vis-itemset", e["timeline-itemset"] = this, this.dom.frame = e;
		var t = document.createElement("div");
		t.className = "vis-background", e.appendChild(t), this.dom.background = t;
		var o = document.createElement("div");
		o.className = "vis-foreground", e.appendChild(o), this.dom.foreground = o;
		var n = document.createElement("div");
		n.className = "vis-axis", this.dom.axis = n;
		var i = document.createElement("div");
		i.className = "vis-labelset", this.dom.labelSet = i, this._updateUngrouped();
		var a = new Vn(Jn, null, this);
		a.show(), this.groups[Jn] = a, this.hammer = new _n(this.body.dom.centerContainer), this.hammer.on("hammer.input",
				function(e) {
					e.isFirst && this._onTouch(e)
				}.bind(this)), this.hammer.on("panstart", this._onDragStart.bind(this)), this.hammer.on("panmove", this._onDrag.bind(
				this)), this.hammer.on("panend", this._onDragEnd.bind(this)), this.hammer.get("pan").set({
				threshold: 5,
				direction: _n.DIRECTION_HORIZONTAL
			}), this.hammer.on("tap", this._onSelectItem.bind(this)), this.hammer.on("press", this._onMultiSelectItem.bind(
				this)), this.hammer.on("doubletap", this._onAddItem.bind(this)), this.groupHammer = this.options.rtl ? new _n(
				this.body.dom.rightContainer) : new _n(this.body.dom.leftContainer), this.groupHammer.on("tap", this._onGroupClick
				.bind(this)), this.groupHammer.on("panstart", this._onGroupDragStart.bind(this)), this.groupHammer.on("panmove",
				this._onGroupDrag.bind(this)), this.groupHammer.on("panend", this._onGroupDragEnd.bind(this)), this.groupHammer.get(
				"pan").set({
				threshold: 5,
				direction: _n.DIRECTION_VERTICAL
			}), this.body.dom.centerContainer.addEventListener("mouseover", this._onMouseOver.bind(this)), this.body.dom.centerContainer
			.addEventListener("mouseout", this._onMouseOut.bind(this)), this.body.dom.centerContainer.addEventListener(
				"mousemove", this._onMouseMove.bind(this)), this.body.dom.centerContainer.addEventListener("contextmenu", this._onDragEnd
				.bind(this)), this.body.dom.centerContainer.addEventListener("mousewheel", this._onMouseWheel.bind(this)), this.show()
	}, rt.prototype.setOptions = function(e) {
		if (e) {
			to.selectiveExtend(["type", "rtl", "align", "order", "stack", "stackSubgroups", "selectable", "multiselect",
					"multiselectPerGroup", "groupOrder", "dataAttributes", "template", "groupTemplate", "visibleFrameTemplate",
					"hide", "snap", "groupOrderSwap", "showTooltips", "tooltip", "tooltipOnItemUpdateTime", "groupHeightMode",
					"onTimeout", "groupLabelDirection"
				], this.options, e), "itemsAlwaysDraggable" in e && ("boolean" == typeof e.itemsAlwaysDraggable ? (this.options.itemsAlwaysDraggable
						.item = e.itemsAlwaysDraggable, this.options.itemsAlwaysDraggable.range = !1) : "object" === Le(e.itemsAlwaysDraggable) &&
					(to.selectiveExtend(["item", "range"], this.options.itemsAlwaysDraggable, e.itemsAlwaysDraggable), !this.options
						.itemsAlwaysDraggable.item && (this.options.itemsAlwaysDraggable.range = !1))), "orientation" in e && ("string" ==
					typeof e.orientation ? this.options.orientation.item = "top" === e.orientation ? "top" : "bottom" : "object" ===
					Le(e.orientation) && "item" in e.orientation && (this.options.orientation.item = e.orientation.item)), "margin" in
				e && ("number" == typeof e.margin ? (this.options.margin.axis = e.margin, this.options.margin.item.horizontal = e
					.margin, this.options.margin.item.vertical = e.margin) : "object" === Le(e.margin) && (to.selectiveExtend([
					"axis"
				], this.options.margin, e.margin), "item" in e.margin && ("number" == typeof e.margin.item ? (this.options.margin
					.item.horizontal = e.margin.item, this.options.margin.item.vertical = e.margin.item) : "object" === Le(e.margin
					.item) && to.selectiveExtend(["horizontal", "vertical"], this.options.margin.item, e.margin.item)))), "editable" in
				e && ("boolean" == typeof e.editable ? (this.options.editable.updateTime = e.editable, this.options.editable.updateGroup =
					e.editable, this.options.editable.add = e.editable, this.options.editable.remove = e.editable, this.options.editable
					.overrideItems = !1) : "object" === Le(e.editable) && to.selectiveExtend(["updateTime", "updateGroup", "add",
					"remove", "overrideItems"
				], this.options.editable, e.editable)), "groupEditable" in e && ("boolean" == typeof e.groupEditable ? (this.options
					.groupEditable.order = e.groupEditable, this.options.groupEditable.add = e.groupEditable, this.options.groupEditable
					.remove = e.groupEditable) : "object" === Le(e.groupEditable) && to.selectiveExtend(["order", "add", "remove"],
					this.options.groupEditable, e.groupEditable));
			var t = function(t) {
				var o = e[t];
				if (o) {
					if (!(o instanceof Function)) throw new Error("option " + t + " must be a function " + t + "(item, callback)");
					this.options[t] = o
				}
			}.bind(this);
			["onDropObjectOnItem", "onAdd", "onUpdate", "onRemove", "onMove", "onMoving", "onAddGroup", "onMoveGroup",
				"onRemoveGroup"
			].forEach(t), this.markDirty()
		}
	}, rt.prototype.markDirty = function(e) {
		this.groupIds = [], e && e.refreshItems && to.forEach(this.items, function(e) {
			e.dirty = !0, e.displayed && e.redraw()
		})
	}, rt.prototype.destroy = function() {
		this.clearPopupTimer(), this.hide(), this.setItems(null), this.setGroups(null), this.hammer && this.hammer.destroy(),
			this.groupHammer && this.groupHammer.destroy(), this.hammer = null, this.body = null, this.conversion = null
	}, rt.prototype.hide = function() {
		this.dom.frame.parentNode && this.dom.frame.parentNode.removeChild(this.dom.frame), this.dom.axis.parentNode &&
			this.dom.axis.parentNode.removeChild(this.dom.axis), this.dom.labelSet.parentNode && this.dom.labelSet.parentNode.removeChild(
				this.dom.labelSet)
	}, rt.prototype.show = function() {
		this.dom.frame.parentNode || this.body.dom.center.appendChild(this.dom.frame), this.dom.axis.parentNode || this.body
			.dom.backgroundVertical.appendChild(this.dom.axis), this.dom.labelSet.parentNode || (this.options.rtl ? this.body.dom
				.right.appendChild(this.dom.labelSet) : this.body.dom.left.appendChild(this.dom.labelSet))
	}, rt.prototype.setPopupTimer = function(e) {
		this.clearPopupTimer(), e && (this.popupTimer = setTimeout(function() {
			e.show()
		}, 500))
	}, rt.prototype.clearPopupTimer = function() {
		null != this.popupTimer && (clearTimeout(this.popupTimer), this.popupTimer = null)
	}, rt.prototype.setSelection = function(e) {
		var t, o, n, a;
		for (null == e && (e = []), Array.isArray(e) || (e = [e]), (t = 0, o = this.selection.length); t < o; t++) n = this
			.selection[t], a = this.items[n], a && a.unselect();
		for (this.selection = [], t = 0, o = e.length; t < o; t++) n = e[t], a = this.items[n], a && (this.selection.push(n),
			a.select())
	}, rt.prototype.getSelection = function() {
		return this.selection.concat([])
	}, rt.prototype.getVisibleItems = function() {
		var e = this.body.range.getRange(),
			t, o;
		this.options.rtl ? (t = this.body.util.toScreen(e.start), o = this.body.util.toScreen(e.end)) : (o = this.body.util
			.toScreen(e.start), t = this.body.util.toScreen(e.end));
		var n = [];
		for (var a in this.groups)
			if (this.groups.hasOwnProperty(a))
				for (var r = this.groups[a], s = r.isVisible ? r.visibleItems : [], d = 0, l; d < s.length; d++) l = s[d], this.options
					.rtl ? l.right < o && l.right + l.width > t && n.push(l.id) : l.left < t && l.left + l.width > o && n.push(l.id);
		return n
	}, rt.prototype.getVisibleGroups = function() {
		var e = [];
		for (var t in this.groups)
			if (this.groups.hasOwnProperty(t)) {
				var o = this.groups[t];
				o.isVisible && e.push(t)
			} return e
	}, rt.prototype._deselect = function(e) {
		for (var t = this.selection, o = 0, n = t.length; o < n; o++)
			if (t[o] == e) {
				t.splice(o, 1);
				break
			}
	}, rt.prototype.redraw = function() {
		var e = this.options.margin,
			t = this.body.range,
			o = to.option.asSize,
			n = this.options,
			a = n.orientation.item,
			r = !1,
			s = this.dom.frame;
		this.props.top = this.body.domProps.top.height + this.body.domProps.border.top, this.options.rtl ? this.props.right =
			this.body.domProps.right.width + this.body.domProps.border.right : this.props.left = this.body.domProps.left.width +
			this.body.domProps.border.left, s.className = "vis-itemset", r = this._orderGroups() || r;
		var d = t.end - t.start,
			l = d != this.lastVisibleInterval || this.props.width != this.props.lastWidth,
			p = t.start != this.lastRangeStart,
			m = n.stack != this.lastStack,
			u = n.stackSubgroups != this.lastStackSubgroups,
			c = l || p || m || u;
		this.lastVisibleInterval = d, this.lastRangeStart = t.start, this.lastStack = n.stack, this.lastStackSubgroups = n.stackSubgroups,
			this.props.lastWidth = this.props.width;
		var h = this._firstGroup(),
			g = {
				item: e.item,
				axis: e.axis
			},
			f = {
				item: e.item,
				axis: e.item.vertical / 2
			},
			y = 0,
			_ = e.axis + e.item.vertical;
		this.groups[Jn].redraw(t, f, c);
		var b = {},
			v = 0;
		to.forEach(this.groups, function(e, o) {
			if (o !== Jn) {
				var n = e == h ? g : f;
				b[o] = e.redraw(t, n, c, !0), v = b[o].length
			}
		});
		var w = 0 < v;
		if (w) {
			for (var k = {}, S = 0; S < v; S++) to.forEach(b, function(e, t) {
				k[t] = e[S]()
			});
			to.forEach(this.groups, function(e, t) {
				if (t !== Jn) {
					var o = k[t];
					r = o || r, y += e.height
				}
			}), y = Pt(y, _)
		}
		return y = Pt(y, _), s.style.height = o(y), this.props.width = s.offsetWidth, this.props.height = y, this.dom.axis.style
			.top = o("top" == a ? this.body.domProps.top.height + this.body.domProps.border.top : this.body.domProps.top.height +
				this.body.domProps.centerContainer.height), this.options.rtl ? this.dom.axis.style.right = "0" : this.dom.axis.style
			.left = "0", this.initialItemSetDrawn = !0, r = this._isResized() || r, r
	}, rt.prototype._firstGroup = function() {
		var e = "top" == this.options.orientation.item ? 0 : this.groupIds.length - 1,
			t = this.groupIds[e],
			o = this.groups[t] || this.groups[$n];
		return o || null
	}, rt.prototype._updateUngrouped = function() {
		var e = this.groups[$n],
			t, o;
		if (this.groupsData) {
			if (e)
				for (o in e.hide(), delete this.groups[$n], this.items)
					if (this.items.hasOwnProperty(o)) {
						t = this.items[o], t.parent && t.parent.remove(t);
						var n = this._getGroupId(t.data),
							i = this.groups[n];
						i && i.add(t) || t.hide()
					}
		} else if (!e) {
			for (o in e = new jn(null, null, this), this.groups[$n] = e, this.items) this.items.hasOwnProperty(o) && (t = this
				.items[o], e.add(t));
			e.show()
		}
	}, rt.prototype.getLabelSet = function() {
		return this.dom.labelSet
	}, rt.prototype.setItems = function(e) {
		this.itemsSettingTime = new Date;
		var t = this,
			o = this.itemsData,
			n;
		if (!e) this.itemsData = null;
		else if (e instanceof zo || e instanceof Bo) this.itemsData = e;
		else throw new TypeError("Data must be an instance of DataSet or DataView");
		if (o && (to.forEach(this.itemListeners, function(e, t) {
				o.off(t, e)
			}), n = o.getIds(), this._onRemove(n)), this.itemsData) {
			var i = this.id;
			to.forEach(this.itemListeners, function(e, o) {
				t.itemsData.on(o, e, i)
			}), n = this.itemsData.getIds(), this._onAdd(n), this._updateUngrouped()
		}
		this.body.emitter.emit("_change", {
			queue: !0
		})
	}, rt.prototype.getItems = function() {
		return this.itemsData
	}, rt.prototype.setGroups = function(e) {
		var t = this,
			o;
		if (this.groupsData && (to.forEach(this.groupListeners, function(e, o) {
				t.groupsData.off(o, e)
			}), o = this.groupsData.getIds(), this.groupsData = null, this._onRemoveGroups(o)), !e) this.groupsData = null;
		else if (e instanceof zo || e instanceof Bo) this.groupsData = e;
		else throw new TypeError("Data must be an instance of DataSet or DataView");
		if (this.groupsData) {
			var n = this.groupsData;
			this.groupsData instanceof Bo && (n = this.groupsData.getDataSet()), n.get().forEach(function(e) {
				e.nestedGroups && e.nestedGroups.forEach(function(t) {
					var o = n.get(t);
					o.nestedInGroup = e.id, !1 == e.showNested && (o.visible = !1), n.update(o)
				})
			});
			var i = this.id;
			to.forEach(this.groupListeners, function(e, o) {
				t.groupsData.on(o, e, i)
			}), o = this.groupsData.getIds(), this._onAddGroups(o)
		}
		this._updateUngrouped(), this._order(), this.body.emitter.emit("_change", {
			queue: !0
		})
	}, rt.prototype.getGroups = function() {
		return this.groupsData
	}, rt.prototype.removeItem = function(e) {
		var t = this.itemsData.get(e),
			o = this.itemsData.getDataSet();
		t && this.options.onRemove(t, function(t) {
			t && o.remove(e)
		})
	}, rt.prototype._getType = function(e) {
		return e.type || this.options.type || (e.end ? "range" : "box")
	}, rt.prototype._getGroupId = function(e) {
		var t = this._getType(e);
		return "background" == t && null == e.group ? Jn : this.groupsData ? e.group : $n
	}, rt.prototype._onUpdate = function(e) {
		var t = this;
		e.forEach(function(e) {
			var o = t.itemsData.get(e, t.itemOptions),
				n = t.items[e],
				i = o ? t._getType(o) : null,
				a = rt.types[i],
				r;
			if (n && (a && n instanceof a ? t._updateItem(n, o) : (r = n.selected, t._removeItem(n), n = null)), !n && o)
				if (a) n = new a(o, t.conversion, t.options), n.id = e, t._addItem(n), r && (this.selection.push(e), n.select());
				else if ("rangeoverflow" == i) throw new TypeError(
				"Item type \"rangeoverflow\" is deprecated. Use css styling instead: .vis-item.vis-range .vis-item-content {overflow: visible;}"
			);
			else throw new TypeError("Unknown item type \"" + i + "\"")
		}.bind(this)), this._order(), this.body.emitter.emit("_change", {
			queue: !0
		})
	}, rt.prototype._onAdd = rt.prototype._onUpdate, rt.prototype._onRemove = function(e) {
		var t = 0,
			o = this;
		e.forEach(function(e) {
			var n = o.items[e];
			n && (t++, o._removeItem(n))
		}), t && (this._order(), this.body.emitter.emit("_change", {
			queue: !0
		}))
	}, rt.prototype._order = function() {
		to.forEach(this.groups, function(e) {
			e.order()
		})
	}, rt.prototype._onUpdateGroups = function(e) {
		this._onAddGroups(e)
	}, rt.prototype._onAddGroups = function(e) {
		var t = this;
		e.forEach(function(e) {
			var o = t.groupsData.get(e),
				n = t.groups[e];
			if (!n) {
				if (e == $n || e == Jn) throw new Error("Illegal group id. " + e + " is a reserved id.");
				var i = Object.create(t.options);
				for (var a in to.extend(i, {
						height: null
					}), n = new jn(e, o, t), t.groups[e] = n, t.items)
					if (t.items.hasOwnProperty(a)) {
						var r = t.items[a];
						r.data.group == e && n.add(r)
					} n.order(), n.show()
			} else n.setData(o)
		}), this.body.emitter.emit("_change", {
			queue: !0
		})
	}, rt.prototype._onRemoveGroups = function(e) {
		var t = this.groups;
		e.forEach(function(e) {
			var o = t[e];
			o && (o.hide(), delete t[e])
		}), this.markDirty(), this.body.emitter.emit("_change", {
			queue: !0
		})
	}, rt.prototype._orderGroups = function() {
		if (this.groupsData) {
			var e = this.groupsData.getIds({
				order: this.options.groupOrder
			});
			e = this._orderNestedGroups(e);
			var t = !to.equalArray(e, this.groupIds);
			if (t) {
				var o = this.groups;
				e.forEach(function(e) {
					o[e].hide()
				}), e.forEach(function(e) {
					o[e].show()
				}), this.groupIds = e
			}
			return t
		}
		return !1
	}, rt.prototype._orderNestedGroups = function(e) {
		function o(e, t) {
			var n = [];
			return t.forEach(function(t) {
				n.push(t);
				var i = e.groupsData.get(t);
				if (i.nestedGroups) {
					var a = e.groupsData.get({
						filter: function(e) {
							return e.nestedInGroup == t
						},
						order: e.options.groupOrder
					}).map(function(e) {
						return e.id
					});
					n = n.concat(o(e, a))
				}
			}), n
		}
		var n = this,
			i = e.filter(function(e) {
				return !n.groupsData.get(e).nestedInGroup
			});
		return o(this, i)
	}, rt.prototype._addItem = function(e) {
		this.items[e.id] = e;
		var t = this._getGroupId(e.data),
			o = this.groups[t];
		o ? o && o.data && o.data.showNested && (e.groupShowing = !0) : e.groupShowing = !1, o && o.add(e)
	}, rt.prototype._updateItem = function(e, t) {
		e.setData(t);
		var o = this._getGroupId(e.data),
			n = this.groups[o];
		n ? n && n.data && n.data.showNested && (e.groupShowing = !0) : e.groupShowing = !1
	}, rt.prototype._removeItem = function(e) {
		e.hide(), delete this.items[e.id];
		var t = this.selection.indexOf(e.id); - 1 != t && this.selection.splice(t, 1), e.parent && e.parent.remove(e)
	}, rt.prototype._constructByEndArray = function(e) {
		for (var t = [], o = 0; o < e.length; o++) e[o] instanceof Xn && t.push(e[o]);
		return t
	}, rt.prototype._onTouch = function(e) {
		this.touchParams.item = this.itemFromTarget(e), this.touchParams.dragLeftItem = e.target.dragLeftItem || !1, this.touchParams
			.dragRightItem = e.target.dragRightItem || !1, this.touchParams.itemProps = null
	}, rt.prototype._getGroupIndex = function(e) {
		for (var t = 0; t < this.groupIds.length; t++)
			if (e == this.groupIds[t]) return t
	}, rt.prototype._onDragStart = function(e) {
		if (!this.touchParams.itemIsDragging) {
			var t = this.touchParams.item || null,
				o = this,
				n;
			if (t && (t.selected || this.options.itemsAlwaysDraggable.item)) {
				if (this.options.editable.overrideItems && !this.options.editable.updateTime && !this.options.editable.updateGroup)
					return;
				if (null != t.editable && !t.editable.updateTime && !t.editable.updateGroup && !this.options.editable.overrideItems)
					return;
				var i = this.touchParams.dragLeftItem,
					a = this.touchParams.dragRightItem;
				if (this.touchParams.itemIsDragging = !0, this.touchParams.selectedItem = t, i) n = {
					item: i,
					initialX: e.center.x,
					dragLeft: !0,
					data: this._cloneItemData(t.data)
				}, this.touchParams.itemProps = [n];
				else if (a) n = {
					item: a,
					initialX: e.center.x,
					dragRight: !0,
					data: this._cloneItemData(t.data)
				}, this.touchParams.itemProps = [n];
				else if (this.options.editable.add && (e.srcEvent.ctrlKey || e.srcEvent.metaKey)) this._onDragStartAddItem(e);
				else {
					1 > this.groupIds.length && this.redraw();
					var r = this._getGroupIndex(t.data.group),
						s = this.options.itemsAlwaysDraggable.item && !t.selected ? [t.id] : this.getSelection();
					this.touchParams.itemProps = s.map(function(t) {
						var n = o.items[t],
							i = o._getGroupIndex(n.data.group);
						return {
							item: n,
							initialX: e.center.x,
							groupOffset: r - i,
							data: this._cloneItemData(n.data)
						}
					}.bind(this))
				}
				e.stopPropagation()
			} else this.options.editable.add && (e.srcEvent.ctrlKey || e.srcEvent.metaKey) && this._onDragStartAddItem(e)
		}
	}, rt.prototype._onDragStartAddItem = function(e) {
		var t = this.options.snap || null,
			o, n;
		this.options.rtl ? (o = to.getAbsoluteRight(this.dom.frame), n = o - e.center.x + 10) : (o = to.getAbsoluteLeft(
			this.dom.frame), n = e.center.x - o - 10);
		var i = this.body.util.toTime(n),
			a = this.body.util.getScale(),
			r = this.body.util.getStep(),
			s = t ? t(i, a, r) : i,
			d = {
				type: "range",
				start: s,
				end: s,
				content: "new item"
			},
			l = to.randomUUID();
		d[this.itemsData._fieldId] = l;
		var p = this.groupFromTarget(e);
		p && (d.group = p.groupId);
		var m = new Xn(d, this.conversion, this.options);
		m.id = l, m.data = this._cloneItemData(d), this._addItem(m), this.touchParams.selectedItem = m;
		var u = {
			item: m,
			initialX: e.center.x,
			data: m.data
		};
		this.options.rtl ? u.dragLeft = !0 : u.dragRight = !0, this.touchParams.itemProps = [u], e.stopPropagation()
	}, rt.prototype._onDrag = function(e) {
		if (this.clearPopupTimer(), null != this.popup && this.popup.hide(), this.touchParams.itemProps) {
			e.stopPropagation();
			var t = this,
				o = this.options.snap || null,
				n;
			n = this.options.rtl ? this.body.dom.root.offsetLeft + this.body.domProps.right.width : this.body.dom.root.offsetLeft +
				this.body.domProps.left.width;
			var i = this.body.util.getScale(),
				a = this.body.util.getStep(),
				r = this.touchParams.selectedItem,
				s = (this.options.editable.overrideItems || null == r.editable) && this.options.editable.updateGroup || !this.options
				.editable.overrideItems && null != r.editable && r.editable.updateGroup,
				d = null;
			if (s && r && null != r.data.group) {
				var l = t.groupFromTarget(e);
				l && (d = this._getGroupIndex(l.groupId))
			}
			this.touchParams.itemProps.forEach(function(l) {
				var p = t.body.util.toTime(e.center.x - n),
					m = t.body.util.toTime(l.initialX - n),
					u, c, h, g, f;
				u = this.options.rtl ? -(p - m) : p - m;
				var y = this._cloneItemData(l.item.data);
				if (null == l.item.editable || l.item.editable.updateTime || l.item.editable.updateGroup || t.options.editable.overrideItems) {
					var _ = (this.options.editable.overrideItems || null == r.editable) && this.options.editable.updateTime || !
						this.options.editable.overrideItems && null != r.editable && r.editable.updateTime;
					if (_)
						if (l.dragLeft) this.options.rtl ? null != y.end && (h = to.convert(l.data.end, "Date"), f = new Date(h.valueOf() +
							u), y.end = o ? o(f, i, a) : f) : null != y.start && (c = to.convert(l.data.start, "Date"), g = new Date(c.valueOf() +
							u), y.start = o ? o(g, i, a) : g);
						else if (l.dragRight) this.options.rtl ? null != y.start && (c = to.convert(l.data.start, "Date"), g = new Date(
						c.valueOf() + u), y.start = o ? o(g, i, a) : g) : null != y.end && (h = to.convert(l.data.end, "Date"), f =
						new Date(h.valueOf() + u), y.end = o ? o(f, i, a) : f);
					else if (null != y.start)
						if (c = to.convert(l.data.start, "Date").valueOf(), g = new Date(c + u), null != y.end) {
							h = to.convert(l.data.end, "Date");
							var b = h.valueOf() - c.valueOf();
							y.start = o ? o(g, i, a) : g, y.end = new Date(y.start.valueOf() + b)
						} else y.start = o ? o(g, i, a) : g;
					if (s && !l.dragLeft && !l.dragRight && null != d && null != y.group) {
						var v = d - l.groupOffset;
						v = Pt(0, v), v = Yt(t.groupIds.length - 1, v), y.group = t.groupIds[v]
					}
					y = this._cloneItemData(y), t.options.onMoving(y, function(e) {
						e && l.item.setData(this._cloneItemData(e, "Date"))
					}.bind(this))
				}
			}.bind(this)), this.body.emitter.emit("_change")
		}
	}, rt.prototype._moveToGroup = function(e, t) {
		var o = this.groups[t];
		if (o && o.groupId != e.data.group) {
			var n = e.parent;
			n.remove(e), n.order(), e.data.group = o.groupId, o.add(e), o.order()
		}
	}, rt.prototype._onDragEnd = function(e) {
		if (this.touchParams.itemIsDragging = !1, this.touchParams.itemProps) {
			e.stopPropagation();
			var t = this,
				o = this.itemsData.getDataSet(),
				n = this.touchParams.itemProps;
			this.touchParams.itemProps = null, n.forEach(function(e) {
				var n = e.item.id,
					i = null != t.itemsData.get(n, t.itemOptions);
				if (!i) t.options.onAdd(e.item.data, function(o) {
					t._removeItem(e.item), o && t.itemsData.getDataSet().add(o), t.body.emitter.emit("_change")
				});
				else {
					var a = this._cloneItemData(e.item.data);
					t.options.onMove(a, function(i) {
						i ? (i[o._fieldId] = n, o.update(i)) : (e.item.setData(e.data), t.body.emitter.emit("_change"))
					})
				}
			}.bind(this))
		}
	}, rt.prototype._onGroupClick = function(e) {
		var t = this.groupFromTarget(e);
		if (t && t.nestedGroups) {
			var o = this.groupsData.getDataSet(),
				n = o.get(t.groupId);
			null == n.showNested && (n.showNested = !0), n.showNested = !n.showNested;
			var i = o.get(t.nestedGroups).map(function(e) {
				return e.visible = n.showNested, e
			});
			if (o.update(i.concat(n)), n.showNested) to.removeClassName(t.dom.label, "collapsed"), to.addClassName(t.dom.label,
				"expanded");
			else {
				to.removeClassName(t.dom.label, "expanded");
				var a = this.options.rtl ? "collapsed-rtl" : "collapsed";
				to.addClassName(t.dom.label, a)
			}
		}
	}, rt.prototype._onGroupDragStart = function(e) {
		this.options.groupEditable.order && (this.groupTouchParams.group = this.groupFromTarget(e), this.groupTouchParams.group &&
			(e.stopPropagation(), this.groupTouchParams.originalOrder = this.groupsData.getIds({
				order: this.options.groupOrder
			})))
	}, rt.prototype._onGroupDrag = function(e) {
		if (this.options.groupEditable.order && this.groupTouchParams.group) {
			e.stopPropagation();
			var t = this.groupsData;
			this.groupsData instanceof Bo && (t = this.groupsData.getDataSet());
			var o = this.groupFromTarget(e);
			if (o && o.height != this.groupTouchParams.group.height) {
				var n = o.top < this.groupTouchParams.group.top,
					i = e.center ? e.center.y : e.clientY,
					a = to.getAbsoluteTop(o.dom.foreground),
					r = this.groupTouchParams.group.height;
				if (!n) {
					var s = o.height;
					if (a + s - r > i) return
				} else if (a + r < i) return
			}
			if (o && o != this.groupTouchParams.group) {
				var d = t.get(o.groupId),
					l = t.get(this.groupTouchParams.group.groupId);
				l && d && (this.options.groupOrderSwap(l, d, t), t.update(l), t.update(d));
				var p = t.getIds({
					order: this.options.groupOrder
				});
				if (!to.equalArray(p, this.groupTouchParams.originalOrder))
					for (var m = this.groupTouchParams.originalOrder, u = this.groupTouchParams.group.groupId, c = Yt(m.length, p.length),
							h = 0, g = 0, f = 0; h < c;) {
						for (; h + g < c && h + f < c && p[h + g] == m[h + f];) h++;
						if (h + g >= c) break;
						if (p[h + g] == u) g = 1;
						else if (m[h + f] == u) f = 1;
						else {
							var y = p.indexOf(m[h + f]),
								_ = t.get(p[h + g]),
								b = t.get(m[h + f]);
							this.options.groupOrderSwap(_, b, t), t.update(_), t.update(b);
							var v = p[h + g];
							p[h + g] = m[h + f], p[y] = v, h++
						}
					}
			}
		}
	}, rt.prototype._onGroupDragEnd = function(e) {
		if (this.options.groupEditable.order && this.groupTouchParams.group) {
			e.stopPropagation();
			var t = this,
				o = t.groupTouchParams.group.groupId,
				n = t.groupsData.getDataSet(),
				i = to.extend({}, n.get(o));
			t.options.onMoveGroup(i, function(e) {
				if (e) e[n._fieldId] = o, n.update(e);
				else {
					var i = n.getIds({
						order: t.options.groupOrder
					});
					if (!to.equalArray(i, t.groupTouchParams.originalOrder))
						for (var a = t.groupTouchParams.originalOrder, r = Yt(a.length, i.length), s = 0; s < r;) {
							for (; s < r && i[s] == a[s];) s++;
							if (s >= r) break;
							var d = i.indexOf(a[s]),
								l = n.get(i[s]),
								p = n.get(a[s]);
							t.options.groupOrderSwap(l, p, n), n.update(l), n.update(p);
							var m = i[s];
							i[s] = a[s], i[d] = m, s++
						}
				}
			}), t.body.emitter.emit("groupDragged", {
				groupId: o
			})
		}
	}, rt.prototype._onSelectItem = function(e) {
		if (this.options.selectable) {
			var t = e.srcEvent && (e.srcEvent.ctrlKey || e.srcEvent.metaKey),
				o = e.srcEvent && e.srcEvent.shiftKey;
			if (t || o) return void this._onMultiSelectItem(e);
			var n = this.getSelection(),
				i = this.itemFromTarget(e),
				a = i ? [i.id] : [];
			this.setSelection(a);
			var r = this.getSelection();
			(0 < r.length || 0 < n.length) && this.body.emitter.emit("select", {
				items: r,
				event: e
			})
		}
	}, rt.prototype._onMouseOver = function(e) {
		var t = this.itemFromTarget(e);
		if (t) {
			var o = this.itemFromRelatedTarget(e);
			if (t !== o) {
				var n = t.getTitle();
				if (this.options.showTooltips && n) {
					null == this.popup && (this.popup = new Qn(this.body.dom.root, this.options.tooltip.overflowMethod || "flip")),
						this.popup.setText(n);
					var i = this.body.dom.centerContainer;
					this.popup.setPosition(e.clientX - to.getAbsoluteLeft(i) + i.offsetLeft, e.clientY - to.getAbsoluteTop(i) + i.offsetTop),
						this.setPopupTimer(this.popup)
				} else this.clearPopupTimer(), null != this.popup && this.popup.hide();
				this.body.emitter.emit("itemover", {
					item: t.id,
					event: e
				})
			}
		}
	}, rt.prototype._onMouseOut = function(e) {
		var t = this.itemFromTarget(e);
		if (t) {
			var o = this.itemFromRelatedTarget(e);
			t === o || (this.clearPopupTimer(), null != this.popup && this.popup.hide(), this.body.emitter.emit("itemout", {
				item: t.id,
				event: e
			}))
		}
	}, rt.prototype._onMouseMove = function(e) {
		var t = this.itemFromTarget(e);
		if (t && (null != this.popupTimer && this.setPopupTimer(this.popup), this.options.showTooltips && this.options.tooltip
				.followMouse && this.popup && !this.popup.hidden)) {
			var o = this.body.dom.centerContainer;
			this.popup.setPosition(e.clientX - to.getAbsoluteLeft(o) + o.offsetLeft, e.clientY - to.getAbsoluteTop(o) + o.offsetTop),
				this.popup.show()
		}
	}, rt.prototype._onMouseWheel = function(e) {
		this.touchParams.itemIsDragging && this._onDragEnd(e)
	}, rt.prototype._onUpdateItem = function(e) {
		if (this.options.selectable && this.options.editable.add) {
			var t = this;
			if (e) {
				var o = t.itemsData.get(e.id);
				this.options.onUpdate(o, function(e) {
					e && t.itemsData.getDataSet().update(e)
				})
			}
		}
	}, rt.prototype._onDropObjectOnItem = function(e) {
		var t = this.itemFromTarget(e),
			o = JSON.parse(e.dataTransfer.getData("text"));
		this.options.onDropObjectOnItem(o, t)
	}, rt.prototype._onAddItem = function(e) {
		if (this.options.selectable && this.options.editable.add) {
			var t = this,
				o = this.options.snap || null,
				n, i;
			this.options.rtl ? (n = to.getAbsoluteRight(this.dom.frame), i = n - e.center.x) : (n = to.getAbsoluteLeft(this.dom
				.frame), i = e.center.x - n);
			var a = this.body.util.toTime(i),
				r = this.body.util.getScale(),
				s = this.body.util.getStep(),
				d, l;
			"drop" == e.type ? (l = JSON.parse(e.dataTransfer.getData("text")), l.content = l.content ? l.content : "new item",
				l.start = l.start ? l.start : o ? o(a, r, s) : a, l.type = l.type || "box", l[this.itemsData._fieldId] = l.id ||
				to.randomUUID(), "range" == l.type && !l.end && (d = this.body.util.toTime(i + this.props.width / 5), l.end = o ?
					o(d, r, s) : d)) : (l = {
				start: o ? o(a, r, s) : a,
				content: "new item"
			}, l[this.itemsData._fieldId] = to.randomUUID(), "range" === this.options.type && (d = this.body.util.toTime(i +
				this.props.width / 5), l.end = o ? o(d, r, s) : d));
			var p = this.groupFromTarget(e);
			p && (l.group = p.groupId), l = this._cloneItemData(l), this.options.onAdd(l, function(o) {
				o && (t.itemsData.getDataSet().add(o), "drop" == e.type && t.setSelection([o.id]))
			})
		}
	}, rt.prototype._onMultiSelectItem = function(e) {
		if (this.options.selectable) {
			var t = this.itemFromTarget(e);
			if (t) {
				var o = this.options.multiselect ? this.getSelection() : [],
					n = e.srcEvent && e.srcEvent.shiftKey || !1;
				if (n && this.options.multiselect) {
					var i = this.itemsData.get(t.id).group,
						a = void 0;
					this.options.multiselectPerGroup && 0 < o.length && (a = this.itemsData.get(o[0]).group), this.options.multiselectPerGroup &&
						null != a && a != i || o.push(t.id);
					var r = rt._getItemRange(this.itemsData.get(o, this.itemOptions));
					if (!this.options.multiselectPerGroup || a == i)
						for (var s in o = [], this.items)
							if (this.items.hasOwnProperty(s)) {
								var d = this.items[s],
									l = d.data.start,
									p = void 0 === d.data.end ? l : d.data.end;
								l >= r.min && p <= r.max && (!this.options.multiselectPerGroup || a == this.itemsData.get(d.id).group) && !(d instanceof Kn) &&
									o.push(d.id)
							}
				} else {
					var m = o.indexOf(t.id); - 1 == m ? o.push(t.id) : o.splice(m, 1)
				}
				this.setSelection(o), this.body.emitter.emit("select", {
					items: this.getSelection(),
					event: e
				})
			}
		}
	}, rt._getItemRange = function(e) {
		var t = null,
			o = null;
		return e.forEach(function(e) {
			(null == o || e.start < o) && (o = e.start), null == e.end ? (null == t || e.start > t) && (t = e.start) : (null ==
				t || e.end > t) && (t = e.end)
		}), {
			min: o,
			max: t
		}
	}, rt.prototype.itemFromElement = function(e) {
		for (var t = e; t;) {
			if (t.hasOwnProperty("timeline-item")) return t["timeline-item"];
			t = t.parentNode
		}
		return null
	}, rt.prototype.itemFromTarget = function(e) {
		return this.itemFromElement(e.target)
	}, rt.prototype.itemFromRelatedTarget = function(e) {
		return this.itemFromElement(e.relatedTarget)
	}, rt.prototype.groupFromTarget = function(e) {
		var t = e.center ? e.center.y : e.clientY,
			o = this.groupIds;
		0 >= o.length && this.groupsData && (o = this.groupsData.getIds({
			order: this.options.groupOrder
		}));
		for (var n = 0; n < o.length; n++) {
			var a = o[n],
				r = this.groups[a],
				s = r.dom.foreground,
				d = to.getAbsoluteTop(s);
			if (t >= d && t < d + s.offsetHeight) return r;
			if ("top" === this.options.orientation.item) {
				if (n == this.groupIds.length - 1 && t > d) return r;
			} else if (0 == n && t < d + s.offset) return r
		}
		return null
	}, rt.itemSetFromTarget = function(e) {
		for (var t = e.target; t;) {
			if (t.hasOwnProperty("timeline-itemset")) return t["timeline-itemset"];
			t = t.parentNode
		}
		return null
	}, rt.prototype._cloneItemData = function(e, t) {
		var o = to.extend({}, e);
		return t || (t = this.itemsData.getDataSet()._options.type), null != o.start && (o.start = to.convert(o.start, t &&
			t.start || "Date")), null != o.end && (o.end = to.convert(o.end, t && t.end || "Date")), o
	};
	var ei = Object.freeze({
			default: rt
		}),
		ti = !1,
		oi = "background: #FFeeee; color: #dd0000",
		ni = function() {
			function e() {
				Ne(this, e)
			}
			return Ge(e, null, [{
				key: "validate",
				value: function(t, o, n) {
					ti = !1, Ei = o;
					var i = o;
					return void 0 !== n && (i = o[n]), e.parse(t, i, []), ti
				}
			}, {
				key: "parse",
				value: function(t, o, n) {
					for (var i in t) t.hasOwnProperty(i) && e.check(i, t, o, n)
				}
			}, {
				key: "check",
				value: function(t, o, n, i) {
					if (void 0 === n[t] && void 0 === n.__any__) return void e.getSuggestion(t, n, i);
					var a = t,
						r = !0;
					void 0 === n[t] && void 0 !== n.__any__ && (a = "__any__", r = "object" === e.getType(o[t]));
					var s = n[a];
					r && void 0 !== s.__type__ && (s = s.__type__), e.checkFields(t, o, n, a, s, i)
				}
			}, {
				key: "checkFields",
				value: function(t, o, n, i, a, r) {
					var s = function(o) {
							console.log("%c" + o + e.printLocation(r, t), oi)
						},
						d = e.getType(o[t]),
						l = a[d];
					void 0 === l ? void 0 === a.any && (s("Invalid type received for \"" + t + "\". Expected: " + e.print(Object.keys(
						a)) + ". Received [" + d + "] \"" + o[t] + "\""), ti = !0) : "array" === e.getType(l) && -1 === l.indexOf(o[
						t]) ? (s("Invalid option detected in \"" + t + "\". Allowed values are:" + e.print(l) + " not \"" + o[t] +
						"\". "), ti = !0) : "object" === d && "__any__" !== i && (r = to.copyAndExtendArray(r, t), e.parse(o[t], n[
						i], r))
				}
			}, {
				key: "getType",
				value: function(e) {
					var t = Le(e);
					return "object" === t ? null === e ? "null" : e instanceof Boolean ? "boolean" : e instanceof Number ?
						"number" : e instanceof String ? "string" : Array.isArray(e) ? "array" : e instanceof Date ? "date" : void 0 ===
						e.nodeType ? !0 === e._isAMomentObject ? "moment" : "object" : "dom" : "number" === t ? "number" : "boolean" ===
						t ? "boolean" : "string" === t ? "string" : void 0 === t ? "undefined" : t
				}
			}, {
				key: "getSuggestion",
				value: function(t, o, n) {
					var i = e.findInOptions(t, o, n, !1),
						a = e.findInOptions(t, Ei, [], !0),
						r;
					r = void 0 === i.indexMatch ? a.distance <= 4 && i.distance > a.distance ? " in " + e.printLocation(i.path, t,
							"") + "Perhaps it was misplaced? Matching option found at: " + e.printLocation(a.path, a.closestMatch, "") :
						i.distance <= 8 ? ". Did you mean \"" + i.closestMatch + "\"?" + e.printLocation(i.path, t) :
						". Did you mean one of these: " + e.print(Object.keys(o)) + e.printLocation(n, t) : " in " + e.printLocation(
							i.path, t, "") + "Perhaps it was incomplete? Did you mean: \"" + i.indexMatch + "\"?\n\n", console.log(
							"%cUnknown option detected: \"" + t + "\"" + r, oi), ti = !0
				}
			}, {
				key: "findInOptions",
				value: function(t, o, n) {
					var i = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3],
						a = 1e9,
						r = "",
						s = [],
						d = t.toLowerCase(),
						l = void 0;
					for (var p in o) {
						var m = void 0;
						if (void 0 !== o[p].__type__ && !0 === i) {
							var u = e.findInOptions(t, o[p], to.copyAndExtendArray(n, p));
							a > u.distance && (r = u.closestMatch, s = u.path, a = u.distance, l = u.indexMatch)
						} else -1 !== p.toLowerCase().indexOf(d) && (l = p), m = e.levenshteinDistance(t, p), a > m && (r = p, s =
							to.copyArray(n), a = m)
					}
					return {
						closestMatch: r,
						path: s,
						distance: a,
						indexMatch: l
					}
				}
			}, {
				key: "printLocation",
				value: function(e, t) {
					for (var o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "Problem value found at: \n", n =
							"\n\n" + o + "options = {\n", a = 0; a < e.length; a++) {
						for (var r = 0; r < a + 1; r++) n += "  ";
						n += e[a] + ": {\n"
					}
					for (var s = 0; s < e.length + 1; s++) n += "  ";
					n += t + "\n";
					for (var d = 0; d < e.length + 1; d++) {
						for (var l = 0; l < e.length - d; l++) n += "  ";
						n += "}\n"
					}
					return n + "\n\n"
				}
			}, {
				key: "print",
				value: function(e) {
					return JSON.stringify(e).replace(/(\")|(\[)|(\])|(,"__type__")/g, "").replace(/(\,)/g, ", ")
				}
			}, {
				key: "levenshteinDistance",
				value: function(e, t) {
					if (0 === e.length) return t.length;
					if (0 === t.length) return e.length;
					var o = [],
						n;
					for (n = 0; n <= t.length; n++) o[n] = [n];
					var a;
					for (a = 0; a <= e.length; a++) o[0][a] = a;
					for (n = 1; n <= t.length; n++)
						for (a = 1; a <= e.length; a++) o[n][a] = t.charAt(n - 1) == e.charAt(a - 1) ? o[n - 1][a - 1] : Yt(o[n - 1]
							[a - 1] + 1, Yt(o[n][a - 1] + 1, o[n - 1][a] + 1));
					return o[t.length][e.length]
				}
			}]), e
		}(),
		ii = Object.freeze({
			Validator: ni,
			printStyle: oi
		}),
		ai = "string",
		ri = "boolean",
		si = "number",
		di = "array",
		li = "date",
		pi = "object",
		mi = "moment",
		ui = Object.freeze({
			allOptions: {
				configure: {
					enabled: {
						boolean: ri
					},
					filter: {
						boolean: ri,
						function: "function"
					},
					container: {
						dom: "dom"
					},
					__type__: {
						object: pi,
						boolean: ri,
						function: "function"
					}
				},
				align: {
					string: ai
				},
				alignCurrentTime: {
					string: ai,
					undefined: "undefined"
				},
				rtl: {
					boolean: ri,
					undefined: "undefined"
				},
				rollingMode: {
					follow: {
						boolean: ri
					},
					offset: {
						number: si,
						undefined: "undefined"
					},
					__type__: {
						object: pi
					}
				},
				onTimeout: {
					timeoutMs: {
						number: si
					},
					callback: {
						function: "function"
					},
					__type__: {
						object: pi
					}
				},
				verticalScroll: {
					boolean: ri,
					undefined: "undefined"
				},
				horizontalScroll: {
					boolean: ri,
					undefined: "undefined"
				},
				autoResize: {
					boolean: ri
				},
				throttleRedraw: {
					number: si
				},
				clickToUse: {
					boolean: ri
				},
				dataAttributes: {
					string: ai,
					array: di
				},
				editable: {
					add: {
						boolean: ri,
						undefined: "undefined"
					},
					remove: {
						boolean: ri,
						undefined: "undefined"
					},
					updateGroup: {
						boolean: ri,
						undefined: "undefined"
					},
					updateTime: {
						boolean: ri,
						undefined: "undefined"
					},
					overrideItems: {
						boolean: ri,
						undefined: "undefined"
					},
					__type__: {
						boolean: ri,
						object: pi
					}
				},
				end: {
					number: si,
					date: li,
					string: ai,
					moment: mi
				},
				format: {
					minorLabels: {
						millisecond: {
							string: ai,
							undefined: "undefined"
						},
						second: {
							string: ai,
							undefined: "undefined"
						},
						minute: {
							string: ai,
							undefined: "undefined"
						},
						hour: {
							string: ai,
							undefined: "undefined"
						},
						weekday: {
							string: ai,
							undefined: "undefined"
						},
						day: {
							string: ai,
							undefined: "undefined"
						},
						week: {
							string: ai,
							undefined: "undefined"
						},
						month: {
							string: ai,
							undefined: "undefined"
						},
						quarter: {
							string: ai,
							undefined: "undefined"
						},
						year: {
							string: ai,
							undefined: "undefined"
						},
						__type__: {
							object: pi,
							function: "function"
						}
					},
					majorLabels: {
						millisecond: {
							string: ai,
							undefined: "undefined"
						},
						second: {
							string: ai,
							undefined: "undefined"
						},
						minute: {
							string: ai,
							undefined: "undefined"
						},
						hour: {
							string: ai,
							undefined: "undefined"
						},
						weekday: {
							string: ai,
							undefined: "undefined"
						},
						day: {
							string: ai,
							undefined: "undefined"
						},
						week: {
							string: ai,
							undefined: "undefined"
						},
						month: {
							string: ai,
							undefined: "undefined"
						},
						quarter: {
							string: ai,
							undefined: "undefined"
						},
						year: {
							string: ai,
							undefined: "undefined"
						},
						__type__: {
							object: pi,
							function: "function"
						}
					},
					__type__: {
						object: pi
					}
				},
				moment: {
					function: "function"
				},
				groupHeightMode: {
					string: ai
				},
				groupLabelDirection: {
					string: ai
				},
				groupOrder: {
					string: ai,
					function: "function"
				},
				groupEditable: {
					add: {
						boolean: ri,
						undefined: "undefined"
					},
					remove: {
						boolean: ri,
						undefined: "undefined"
					},
					order: {
						boolean: ri,
						undefined: "undefined"
					},
					__type__: {
						boolean: ri,
						object: pi
					}
				},
				groupOrderSwap: {
					function: "function"
				},
				height: {
					string: ai,
					number: si
				},
				hiddenDates: {
					start: {
						date: li,
						number: si,
						string: ai,
						moment: mi
					},
					end: {
						date: li,
						number: si,
						string: ai,
						moment: mi
					},
					repeat: {
						string: ai
					},
					__type__: {
						object: pi,
						array: di
					}
				},
				itemsAlwaysDraggable: {
					item: {
						boolean: ri,
						undefined: "undefined"
					},
					range: {
						boolean: ri,
						undefined: "undefined"
					},
					__type__: {
						boolean: ri,
						object: pi
					}
				},
				limitSize: {
					boolean: ri
				},
				locale: {
					string: ai
				},
				locales: {
					__any__: {
						any: "any"
					},
					__type__: {
						object: pi
					}
				},
				margin: {
					axis: {
						number: si
					},
					item: {
						horizontal: {
							number: si,
							undefined: "undefined"
						},
						vertical: {
							number: si,
							undefined: "undefined"
						},
						__type__: {
							object: pi,
							number: si
						}
					},
					__type__: {
						object: pi,
						number: si
					}
				},
				max: {
					date: li,
					number: si,
					string: ai,
					moment: mi
				},
				maxHeight: {
					number: si,
					string: ai
				},
				maxMinorChars: {
					number: si
				},
				min: {
					date: li,
					number: si,
					string: ai,
					moment: mi
				},
				minHeight: {
					number: si,
					string: ai
				},
				moveable: {
					boolean: ri
				},
				multiselect: {
					boolean: ri
				},
				multiselectPerGroup: {
					boolean: ri
				},
				onAdd: {
					function: "function"
				},
				onDropObjectOnItem: {
					function: "function"
				},
				onUpdate: {
					function: "function"
				},
				onMove: {
					function: "function"
				},
				onMoving: {
					function: "function"
				},
				onRemove: {
					function: "function"
				},
				onAddGroup: {
					function: "function"
				},
				onMoveGroup: {
					function: "function"
				},
				onRemoveGroup: {
					function: "function"
				},
				onInitialDrawComplete: {
					function: "function"
				},
				order: {
					function: "function"
				},
				orientation: {
					axis: {
						string: ai,
						undefined: "undefined"
					},
					item: {
						string: ai,
						undefined: "undefined"
					},
					__type__: {
						string: ai,
						object: pi
					}
				},
				selectable: {
					boolean: ri
				},
				showCurrentTime: {
					boolean: ri
				},
				showMajorLabels: {
					boolean: ri
				},
				showMinorLabels: {
					boolean: ri
				},
				stack: {
					boolean: ri
				},
				stackSubgroups: {
					boolean: ri
				},
				snap: {
					function: "function",
					null: "null"
				},
				start: {
					date: li,
					number: si,
					string: ai,
					moment: mi
				},
				template: {
					function: "function"
				},
				loadingScreenTemplate: {
					function: "function"
				},
				groupTemplate: {
					function: "function"
				},
				visibleFrameTemplate: {
					string: ai,
					function: "function"
				},
				showTooltips: {
					boolean: ri
				},
				tooltip: {
					followMouse: {
						boolean: ri
					},
					overflowMethod: {
						string: ["cap", "flip"]
					},
					__type__: {
						object: pi
					}
				},
				tooltipOnItemUpdateTime: {
					template: {
						function: "function"
					},
					__type__: {
						boolean: ri,
						object: pi
					}
				},
				timeAxis: {
					scale: {
						string: ai,
						undefined: "undefined"
					},
					step: {
						number: si,
						undefined: "undefined"
					},
					__type__: {
						object: pi
					}
				},
				type: {
					string: ai
				},
				width: {
					string: ai,
					number: si
				},
				zoomable: {
					boolean: ri
				},
				zoomKey: {
					string: ["ctrlKey", "altKey", "metaKey", ""]
				},
				zoomMax: {
					number: si
				},
				zoomMin: {
					number: si
				},
				__type__: {
					object: pi
				}
			},
			configureOptions: {
				global: {
					align: ["center", "left", "right"],
					alignCurrentTime: ["none", "year", "month", "quarter", "week", "isoWeek", "day", "date", "hour", "minute",
						"second"
					],
					direction: !1,
					autoResize: !0,
					clickToUse: !1,
					editable: {
						add: !1,
						remove: !1,
						updateGroup: !1,
						updateTime: !1
					},
					end: "",
					format: {
						minorLabels: {
							millisecond: "SSS",
							second: "s",
							minute: "HH:mm",
							hour: "HH:mm",
							weekday: "ddd D",
							day: "D",
							week: "w",
							month: "MMM",
							quarter: "[Q]Q",
							year: "YYYY"
						},
						majorLabels: {
							millisecond: "HH:mm:ss",
							second: "D MMMM HH:mm",
							minute: "ddd D MMMM",
							hour: "ddd D MMMM",
							weekday: "MMMM YYYY",
							day: "MMMM YYYY",
							week: "MMMM YYYY",
							month: "YYYY",
							quarter: "YYYY",
							year: ""
						}
					},
					groupHeightMode: ["auto", "fixed"],
					groupLabelDirection: ["horizontal", "vertical"],
					groupsDraggable: !1,
					height: "",
					locale: "",
					margin: {
						axis: [20, 0, 100, 1],
						item: {
							horizontal: [10, 0, 100, 1],
							vertical: [10, 0, 100, 1]
						}
					},
					max: "",
					maxHeight: "",
					maxMinorChars: [7, 0, 20, 1],
					min: "",
					minHeight: "",
					moveable: !1,
					multiselect: !1,
					multiselectPerGroup: !1,
					orientation: {
						axis: ["both", "bottom", "top"],
						item: ["bottom", "top"]
					},
					selectable: !0,
					showCurrentTime: !1,
					showMajorLabels: !0,
					showMinorLabels: !0,
					stack: !0,
					stackSubgroups: !0,
					start: "",
					showTooltips: !0,
					tooltip: {
						followMouse: !1,
						overflowMethod: "flip"
					},
					tooltipOnItemUpdateTime: !1,
					type: ["box", "point", "range", "background"],
					width: "100%",
					zoomable: !0,
					zoomKey: ["ctrlKey", "altKey", "metaKey", ""],
					zoomMax: [31536e10, 10, 31536e10, 1],
					zoomMin: [10, 10, 31536e10, 1]
				}
			}
		}),
		ci = {
			black: "#000000",
			navy: "#000080",
			darkblue: "#00008B",
			mediumblue: "#0000CD",
			blue: "#0000FF",
			darkgreen: "#006400",
			green: "#008000",
			teal: "#008080",
			darkcyan: "#008B8B",
			deepskyblue: "#00BFFF",
			darkturquoise: "#00CED1",
			mediumspringgreen: "#00FA9A",
			lime: "#00FF00",
			springgreen: "#00FF7F",
			aqua: "#00FFFF",
			cyan: "#00FFFF",
			midnightblue: "#191970",
			dodgerblue: "#1E90FF",
			lightseagreen: "#20B2AA",
			forestgreen: "#228B22",
			seagreen: "#2E8B57",
			darkslategray: "#2F4F4F",
			limegreen: "#32CD32",
			mediumseagreen: "#3CB371",
			turquoise: "#40E0D0",
			royalblue: "#4169E1",
			steelblue: "#4682B4",
			darkslateblue: "#483D8B",
			mediumturquoise: "#48D1CC",
			indigo: "#4B0082",
			darkolivegreen: "#556B2F",
			cadetblue: "#5F9EA0",
			cornflowerblue: "#6495ED",
			mediumaquamarine: "#66CDAA",
			dimgray: "#696969",
			slateblue: "#6A5ACD",
			olivedrab: "#6B8E23",
			slategray: "#708090",
			lightslategray: "#778899",
			mediumslateblue: "#7B68EE",
			lawngreen: "#7CFC00",
			chartreuse: "#7FFF00",
			aquamarine: "#7FFFD4",
			maroon: "#800000",
			purple: "#800080",
			olive: "#808000",
			gray: "#808080",
			skyblue: "#87CEEB",
			lightskyblue: "#87CEFA",
			blueviolet: "#8A2BE2",
			darkred: "#8B0000",
			darkmagenta: "#8B008B",
			saddlebrown: "#8B4513",
			darkseagreen: "#8FBC8F",
			lightgreen: "#90EE90",
			mediumpurple: "#9370D8",
			darkviolet: "#9400D3",
			palegreen: "#98FB98",
			darkorchid: "#9932CC",
			yellowgreen: "#9ACD32",
			sienna: "#A0522D",
			brown: "#A52A2A",
			darkgray: "#A9A9A9",
			lightblue: "#ADD8E6",
			greenyellow: "#ADFF2F",
			paleturquoise: "#AFEEEE",
			lightsteelblue: "#B0C4DE",
			powderblue: "#B0E0E6",
			firebrick: "#B22222",
			darkgoldenrod: "#B8860B",
			mediumorchid: "#BA55D3",
			rosybrown: "#BC8F8F",
			darkkhaki: "#BDB76B",
			silver: "#C0C0C0",
			mediumvioletred: "#C71585",
			indianred: "#CD5C5C",
			peru: "#CD853F",
			chocolate: "#D2691E",
			tan: "#D2B48C",
			lightgrey: "#D3D3D3",
			palevioletred: "#D87093",
			thistle: "#D8BFD8",
			orchid: "#DA70D6",
			goldenrod: "#DAA520",
			crimson: "#DC143C",
			gainsboro: "#DCDCDC",
			plum: "#DDA0DD",
			burlywood: "#DEB887",
			lightcyan: "#E0FFFF",
			lavender: "#E6E6FA",
			darksalmon: "#E9967A",
			violet: "#EE82EE",
			palegoldenrod: "#EEE8AA",
			lightcoral: "#F08080",
			khaki: "#F0E68C",
			aliceblue: "#F0F8FF",
			honeydew: "#F0FFF0",
			azure: "#F0FFFF",
			sandybrown: "#F4A460",
			wheat: "#F5DEB3",
			beige: "#F5F5DC",
			whitesmoke: "#F5F5F5",
			mintcream: "#F5FFFA",
			ghostwhite: "#F8F8FF",
			salmon: "#FA8072",
			antiquewhite: "#FAEBD7",
			linen: "#FAF0E6",
			lightgoldenrodyellow: "#FAFAD2",
			oldlace: "#FDF5E6",
			red: "#FF0000",
			fuchsia: "#FF00FF",
			magenta: "#FF00FF",
			deeppink: "#FF1493",
			orangered: "#FF4500",
			tomato: "#FF6347",
			hotpink: "#FF69B4",
			coral: "#FF7F50",
			darkorange: "#FF8C00",
			lightsalmon: "#FFA07A",
			orange: "#FFA500",
			lightpink: "#FFB6C1",
			pink: "#FFC0CB",
			gold: "#FFD700",
			peachpuff: "#FFDAB9",
			navajowhite: "#FFDEAD",
			moccasin: "#FFE4B5",
			bisque: "#FFE4C4",
			mistyrose: "#FFE4E1",
			blanchedalmond: "#FFEBCD",
			papayawhip: "#FFEFD5",
			lavenderblush: "#FFF0F5",
			seashell: "#FFF5EE",
			cornsilk: "#FFF8DC",
			lemonchiffon: "#FFFACD",
			floralwhite: "#FFFAF0",
			snow: "#FFFAFA",
			yellow: "#FFFF00",
			lightyellow: "#FFFFE0",
			ivory: "#FFFFF0",
			white: "#FFFFFF"
		},
		hi = function() {
			var t = Math.cos,
				o = Math.sin;

			function e() {
				var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
				Ne(this, e), this.pixelRatio = t, this.generated = !1, this.centerCoordinates = {
						x: 289 / 2,
						y: 289 / 2
					}, this.r = 289 * .49, this.color = {
						r: 255,
						g: 255,
						b: 255,
						a: 1
					}, this.hueCircle = void 0, this.initialColor = {
						r: 255,
						g: 255,
						b: 255,
						a: 1
					}, this.previousColor = void 0, this.applied = !1, this.updateCallback = function() {}, this.closeCallback =
					function() {}, this._create()
			}
			return Ge(e, [{
				key: "insertTo",
				value: function(e) {
					void 0 !== this.hammer && (this.hammer.destroy(), this.hammer = void 0), this.container = e, this.container.appendChild(
						this.frame), this._bindHammer(), this._setSize()
				}
			}, {
				key: "setUpdateCallback",
				value: function(e) {
					if ("function" == typeof e) this.updateCallback = e;
					else throw new Error("Function attempted to set as colorPicker update callback is not a function.")
				}
			}, {
				key: "setCloseCallback",
				value: function(e) {
					if ("function" == typeof e) this.closeCallback = e;
					else throw new Error("Function attempted to set as colorPicker closing callback is not a function.")
				}
			}, {
				key: "_isColorString",
				value: function(e) {
					if ("string" == typeof e) return ci[e]
				}
			}, {
				key: "setColor",
				value: function(e) {
					var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
					if ("none" !== e) {
						var o = this._isColorString(e),
							n;
						if (void 0 !== o && (e = o), !0 === to.isString(e)) {
							if (!0 === to.isValidRGB(e)) {
								var i = e.substr(4).substr(0, e.length - 5).split(",");
								n = {
									r: i[0],
									g: i[1],
									b: i[2],
									a: 1
								}
							} else if (!0 === to.isValidRGBA(e)) {
								var a = e.substr(5).substr(0, e.length - 6).split(",");
								n = {
									r: a[0],
									g: a[1],
									b: a[2],
									a: a[3]
								}
							} else if (!0 === to.isValidHex(e)) {
								var r = to.hexToRGB(e);
								n = {
									r: r.r,
									g: r.g,
									b: r.b,
									a: 1
								}
							}
						} else if (e instanceof Object && void 0 !== e.r && void 0 !== e.g && void 0 !== e.b) {
							var s = void 0 === e.a ? "1.0" : e.a;
							n = {
								r: e.r,
								g: e.g,
								b: e.b,
								a: s
							}
						}
						if (void 0 === n) throw new Error(
							"Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: " +
							JSON.stringify(e));
						else this._setColor(n, t)
					}
				}
			}, {
				key: "show",
				value: function() {
					void 0 !== this.closeCallback && (this.closeCallback(), this.closeCallback = void 0), this.applied = !1, this
						.frame.style.display = "block", this._generateHueCircle()
				}
			}, {
				key: "_hide",
				value: function() {
					var e = this,
						t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
					!0 === t && (this.previousColor = to.extend({}, this.color)), !0 === this.applied && this.updateCallback(this
						.initialColor), this.frame.style.display = "none", setTimeout(function() {
						void 0 !== e.closeCallback && (e.closeCallback(), e.closeCallback = void 0)
					}, 0)
				}
			}, {
				key: "_save",
				value: function() {
					this.updateCallback(this.color), this.applied = !1, this._hide()
				}
			}, {
				key: "_apply",
				value: function() {
					this.applied = !0, this.updateCallback(this.color), this._updatePicker(this.color)
				}
			}, {
				key: "_loadLast",
				value: function() {
					void 0 === this.previousColor ? alert("There is no last color to load...") : this.setColor(this.previousColor,
						!1)
				}
			}, {
				key: "_setColor",
				value: function(e) {
					var n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
					!0 === n && (this.initialColor = to.extend({}, e)), this.color = e;
					var i = to.RGBToHSV(e.r, e.g, e.b),
						a = 2 * kt,
						r = this.r * i.s,
						s = this.centerCoordinates.x + r * o(a * i.h),
						d = this.centerCoordinates.y + r * t(a * i.h);
					this.colorPickerSelector.style.left = s - .5 * this.colorPickerSelector.clientWidth + "px", this.colorPickerSelector
						.style.top = d - .5 * this.colorPickerSelector.clientHeight + "px", this._updatePicker(e)
				}
			}, {
				key: "_setOpacity",
				value: function(e) {
					this.color.a = e / 100, this._updatePicker(this.color)
				}
			}, {
				key: "_setBrightness",
				value: function(e) {
					var t = to.RGBToHSV(this.color.r, this.color.g, this.color.b);
					t.v = e / 100;
					var o = to.HSVToRGB(t.h, t.s, t.v);
					o.a = this.color.a, this.color = o, this._updatePicker()
				}
			}, {
				key: "_updatePicker",
				value: function() {
					var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.color,
						t = to.RGBToHSV(e.r, e.g, e.b),
						o = this.colorPickerCanvas.getContext("2d");
					void 0 === this.pixelRation && (this.pixelRatio = (window.devicePixelRatio || 1) / (o.webkitBackingStorePixelRatio ||
						o.mozBackingStorePixelRatio || o.msBackingStorePixelRatio || o.oBackingStorePixelRatio || o.backingStorePixelRatio ||
						1)), o.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
					var n = this.colorPickerCanvas.clientWidth,
						i = this.colorPickerCanvas.clientHeight;
					o.clearRect(0, 0, n, i), o.putImageData(this.hueCircle, 0, 0), o.fillStyle = "rgba(0,0,0," + (1 - t.v) + ")",
						o.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r), o.fill(), this.brightnessRange.value =
						100 * t.v, this.opacityRange.value = 100 * e.a, this.initialColorDiv.style.backgroundColor = "rgba(" + this.initialColor
						.r + "," + this.initialColor.g + "," + this.initialColor.b + "," + this.initialColor.a + ")", this.newColorDiv
						.style.backgroundColor = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.color
						.a + ")"
				}
			}, {
				key: "_setSize",
				value: function() {
					this.colorPickerCanvas.style.width = "100%", this.colorPickerCanvas.style.height = "100%", this.colorPickerCanvas
						.width = 289 * this.pixelRatio, this.colorPickerCanvas.height = 289 * this.pixelRatio
				}
			}, {
				key: "_create",
				value: function() {
					if (this.frame = document.createElement("div"), this.frame.className = "vis-color-picker", this.colorPickerDiv =
						document.createElement("div"), this.colorPickerSelector = document.createElement("div"), this.colorPickerSelector
						.className = "vis-selector", this.colorPickerDiv.appendChild(this.colorPickerSelector), this.colorPickerCanvas =
						document.createElement("canvas"), this.colorPickerDiv.appendChild(this.colorPickerCanvas), !this.colorPickerCanvas
						.getContext) {
						var e = document.createElement("DIV");
						e.style.color = "red", e.style.fontWeight = "bold", e.style.padding = "10px", e.innerHTML =
							"Error: your browser does not support HTML canvas", this.colorPickerCanvas.appendChild(e)
					} else {
						var t = this.colorPickerCanvas.getContext("2d");
						this.pixelRatio = (window.devicePixelRatio || 1) / (t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio ||
								t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1), this.colorPickerCanvas
							.getContext("2d").setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0)
					}
					this.colorPickerDiv.className = "vis-color", this.opacityDiv = document.createElement("div"), this.opacityDiv
						.className = "vis-opacity", this.brightnessDiv = document.createElement("div"), this.brightnessDiv.className =
						"vis-brightness", this.arrowDiv = document.createElement("div"), this.arrowDiv.className = "vis-arrow", this
						.opacityRange = document.createElement("input");
					try {
						this.opacityRange.type = "range", this.opacityRange.min = "0", this.opacityRange.max = "100"
					} catch (e) {}
					this.opacityRange.value = "100", this.opacityRange.className = "vis-range", this.brightnessRange = document.createElement(
						"input");
					try {
						this.brightnessRange.type = "range", this.brightnessRange.min = "0", this.brightnessRange.max = "100"
					} catch (e) {}
					this.brightnessRange.value = "100", this.brightnessRange.className = "vis-range", this.opacityDiv.appendChild(
						this.opacityRange), this.brightnessDiv.appendChild(this.brightnessRange);
					var o = this;
					this.opacityRange.onchange = function() {
							o._setOpacity(this.value)
						}, this.opacityRange.oninput = function() {
							o._setOpacity(this.value)
						}, this.brightnessRange.onchange = function() {
							o._setBrightness(this.value)
						}, this.brightnessRange.oninput = function() {
							o._setBrightness(this.value)
						}, this.brightnessLabel = document.createElement("div"), this.brightnessLabel.className =
						"vis-label vis-brightness", this.brightnessLabel.innerHTML = "brightness:", this.opacityLabel = document.createElement(
							"div"), this.opacityLabel.className = "vis-label vis-opacity", this.opacityLabel.innerHTML = "opacity:",
						this.newColorDiv = document.createElement("div"), this.newColorDiv.className = "vis-new-color", this.newColorDiv
						.innerHTML = "new", this.initialColorDiv = document.createElement("div"), this.initialColorDiv.className =
						"vis-initial-color", this.initialColorDiv.innerHTML = "initial", this.cancelButton = document.createElement(
							"div"), this.cancelButton.className = "vis-button vis-cancel", this.cancelButton.innerHTML = "cancel", this
						.cancelButton.onclick = this._hide.bind(this, !1), this.applyButton = document.createElement("div"), this.applyButton
						.className = "vis-button vis-apply", this.applyButton.innerHTML = "apply", this.applyButton.onclick = this._apply
						.bind(this), this.saveButton = document.createElement("div"), this.saveButton.className =
						"vis-button vis-save", this.saveButton.innerHTML = "save", this.saveButton.onclick = this._save.bind(this),
						this.loadButton = document.createElement("div"), this.loadButton.className = "vis-button vis-load", this.loadButton
						.innerHTML = "load last", this.loadButton.onclick = this._loadLast.bind(this), this.frame.appendChild(this.colorPickerDiv),
						this.frame.appendChild(this.arrowDiv), this.frame.appendChild(this.brightnessLabel), this.frame.appendChild(
							this.brightnessDiv), this.frame.appendChild(this.opacityLabel), this.frame.appendChild(this.opacityDiv),
						this.frame.appendChild(this.newColorDiv), this.frame.appendChild(this.initialColorDiv), this.frame.appendChild(
							this.cancelButton), this.frame.appendChild(this.applyButton), this.frame.appendChild(this.saveButton), this
						.frame.appendChild(this.loadButton)
				}
			}, {
				key: "_bindHammer",
				value: function() {
					var e = this;
					this.drag = {}, this.pinch = {}, this.hammer = new _n(this.colorPickerCanvas), this.hammer.get("pinch").set({
						enable: !0
					}), bn.onTouch(this.hammer, function(t) {
						e._moveSelector(t)
					}), this.hammer.on("tap", function(t) {
						e._moveSelector(t)
					}), this.hammer.on("panstart", function(t) {
						e._moveSelector(t)
					}), this.hammer.on("panmove", function(t) {
						e._moveSelector(t)
					}), this.hammer.on("panend", function(t) {
						e._moveSelector(t)
					})
				}
			}, {
				key: "_generateHueCircle",
				value: function() {
					if (!1 === this.generated) {
						var e = this.colorPickerCanvas.getContext("2d");
						void 0 === this.pixelRation && (this.pixelRatio = (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio ||
							e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio ||
							1)), e.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
						var n = this.colorPickerCanvas.clientWidth,
							i = this.colorPickerCanvas.clientHeight;
						e.clearRect(0, 0, n, i);
						var a, r, s, d;
						this.centerCoordinates = {
							x: .5 * n,
							y: .5 * i
						}, this.r = .49 * n;
						var l = 2 * kt / 360,
							p = 1 / this.r,
							m;
						for (s = 0; 360 > s; s++)
							for (d = 0; d < this.r; d++) a = this.centerCoordinates.x + d * o(l * s), r = this.centerCoordinates.y + d *
								t(l * s), m = to.HSVToRGB(s * (1 / 360), d * p, 1), e.fillStyle = "rgb(" + m.r + "," + m.g + "," + m.b +
								")", e.fillRect(a - .5, r - .5, 2, 2);
						e.strokeStyle = "rgba(0,0,0,1)", e.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r), e.stroke(),
							this.hueCircle = e.getImageData(0, 0, n, i)
					}
					this.generated = !0
				}
			}, {
				key: "_moveSelector",
				value: function(e) {
					var n = this.colorPickerDiv.getBoundingClientRect(),
						i = e.center.x - n.left,
						a = e.center.y - n.top,
						r = .5 * this.colorPickerDiv.clientHeight,
						d = .5 * this.colorPickerDiv.clientWidth,
						l = i - d,
						p = a - r,
						m = St(l, p),
						u = .98 * Yt(Dt(l * l + p * p), d),
						c = t(m) * u + r,
						g = o(m) * u + d;
					this.colorPickerSelector.style.top = c - .5 * this.colorPickerSelector.clientHeight + "px", this.colorPickerSelector
						.style.left = g - .5 * this.colorPickerSelector.clientWidth + "px";
					var f = m / (2 * kt);
					f = 0 > f ? f + 1 : f;
					var y = u / this.r,
						s = to.RGBToHSV(this.color.r, this.color.g, this.color.b);
					s.h = f, s.s = y;
					var _ = to.HSVToRGB(s.h, s.s, s.v);
					_.a = this.color.a, this.color = _, this.initialColorDiv.style.backgroundColor = "rgba(" + this.initialColor.r +
						"," + this.initialColor.g + "," + this.initialColor.b + "," + this.initialColor.a + ")", this.newColorDiv.style
						.backgroundColor = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.color.a +
						")"
				}
			}]), e
		}(),
		gi = function() {
			function e(t, o, n) {
				var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1;
				Ne(this, e), this.parent = t, this.changedOptions = [], this.container = o, this.allowCreation = !1, this.options = {},
					this.initialized = !1, this.popupCounter = 0, this.defaultOptions = {
						enabled: !1,
						filter: !0,
						container: void 0,
						showButton: !0
					}, to.extend(this.options, this.defaultOptions), this.configureOptions = n, this.moduleOptions = {}, this.domElements = [],
					this.popupDiv = {}, this.popupLimit = 5, this.popupHistory = {}, this.colorPicker = new hi(i), this.wrapper =
					void 0
			}
			return Ge(e, [{
				key: "setOptions",
				value: function(e) {
					if (void 0 !== e) {
						this.popupHistory = {}, this._removePopup();
						var t = !0;
						if ("string" == typeof e) this.options.filter = e;
						else if (e instanceof Array) this.options.filter = e.join();
						else if ("object" === Le(e)) {
							if (null == e) throw new TypeError("options cannot be null");
							void 0 !== e.container && (this.options.container = e.container), void 0 !== e.filter && (this.options.filter =
								e.filter), void 0 !== e.showButton && (this.options.showButton = e.showButton), void 0 !== e.enabled && (
								t = e.enabled)
						} else "boolean" == typeof e ? (this.options.filter = !0, t = e) : "function" == typeof e && (this.options.filter =
							e, t = !0);
						!1 === this.options.filter && (t = !1), this.options.enabled = t
					}
					this._clean()
				}
			}, {
				key: "setModuleOptions",
				value: function(e) {
					this.moduleOptions = e, !0 === this.options.enabled && (this._clean(), void 0 !== this.options.container && (
						this.container = this.options.container), this._create())
				}
			}, {
				key: "_create",
				value: function() {
					this._clean(), this.changedOptions = [];
					var e = this.options.filter,
						t = 0,
						o = !1;
					for (var n in this.configureOptions) this.configureOptions.hasOwnProperty(n) && (this.allowCreation = !1, o = !
						1, "function" == typeof e ? (o = e(n, []), o = o || this._handleObject(this.configureOptions[n], [n], !0)) :
						(!0 === e || -1 !== e.indexOf(n)) && (o = !0), !1 !== o && (this.allowCreation = !0, 0 < t && this._makeItem(
							[]), this._makeHeader(n), this._handleObject(this.configureOptions[n], [n])), t++);
					this._makeButton(), this._push()
				}
			}, {
				key: "_push",
				value: function() {
					this.wrapper = document.createElement("div"), this.wrapper.className = "vis-configuration-wrapper", this.container
						.appendChild(this.wrapper);
					for (var e = 0; e < this.domElements.length; e++) this.wrapper.appendChild(this.domElements[e]);
					this._showPopupIfNeeded()
				}
			}, {
				key: "_clean",
				value: function() {
					for (var e = 0; e < this.domElements.length; e++) this.wrapper.removeChild(this.domElements[e]);
					void 0 !== this.wrapper && (this.container.removeChild(this.wrapper), this.wrapper = void 0), this.domElements = [],
						this._removePopup()
				}
			}, {
				key: "_getValue",
				value: function(e) {
					for (var t = this.moduleOptions, o = 0; o < e.length; o++)
						if (void 0 !== t[e[o]]) t = t[e[o]];
						else {
							t = void 0;
							break
						} return t
				}
			}, {
				key: "_makeItem",
				value: function(e) {
					if (!0 === this.allowCreation) {
						var t = document.createElement("div");
						t.className = "vis-configuration vis-config-item vis-config-s" + e.length;
						for (var o = arguments.length, n = Array(1 < o ? o - 1 : 0), i = 1; i < o; i++) n[i - 1] = arguments[i];
						return n.forEach(function(e) {
							t.appendChild(e)
						}), this.domElements.push(t), this.domElements.length
					}
					return 0
				}
			}, {
				key: "_makeHeader",
				value: function(e) {
					var t = document.createElement("div");
					t.className = "vis-configuration vis-config-header", t.innerHTML = e, this._makeItem([], t)
				}
			}, {
				key: "_makeLabel",
				value: function(e, t) {
					var o = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2],
						n = document.createElement("div");
					return n.className = "vis-configuration vis-config-label vis-config-s" + t.length, n.innerHTML = !0 === o ?
						"<i><b>" + e + ":</b></i>" : e + ":", n
				}
			}, {
				key: "_makeDropdown",
				value: function(e, t, o) {
					var n = document.createElement("select");
					n.className = "vis-configuration vis-config-select";
					var a = 0;
					void 0 !== t && -1 !== e.indexOf(t) && (a = e.indexOf(t));
					for (var r = 0, s; r < e.length; r++) s = document.createElement("option"), s.value = e[r], r == a && (s.selected =
						"selected"), s.innerHTML = e[r], n.appendChild(s);
					var d = this;
					n.onchange = function() {
						d._update(this.value, o)
					};
					var l = this._makeLabel(o[o.length - 1], o);
					this._makeItem(o, l, n)
				}
			}, {
				key: "_makeRange",
				value: function(e, t, o) {
					var n = e[0],
						i = e[1],
						a = e[2],
						r = e[3],
						s = document.createElement("input");
					s.className = "vis-configuration vis-config-range";
					try {
						s.type = "range", s.min = i, s.max = a
					} catch (e) {}
					s.step = r;
					var d = "",
						l = 0;
					if (void 0 !== t) {
						var p = 1.2;
						0 > t && t * p < i ? (s.min = Ct(t * p), l = s.min, d = "range increased") : t / p < i && (s.min = Ct(t / p),
							l = s.min, d = "range increased"), t * p > a && 1 !== a && (s.max = Ct(t * p), l = s.max, d =
							"range increased"), s.value = t
					} else s.value = n;
					var m = document.createElement("input");
					m.className = "vis-configuration vis-config-rangeinput", m.value = s.value;
					var u = this;
					s.onchange = function() {
						m.value = this.value, u._update(+this.value, o)
					}, s.oninput = function() {
						m.value = this.value
					};
					var c = this._makeLabel(o[o.length - 1], o),
						h = this._makeItem(o, c, s, m);
					"" != d && this.popupHistory[h] !== l && (this.popupHistory[h] = l, this._setupPopup(d, h))
				}
			}, {
				key: "_makeButton",
				value: function() {
					var e = this;
					if (!0 === this.options.showButton) {
						var t = document.createElement("div");
						t.className = "vis-configuration vis-config-button", t.innerHTML = "generate options", t.onclick = function() {
								e._printOptions()
							}, t.onmouseover = function() {
								t.className = "vis-configuration vis-config-button hover"
							}, t.onmouseout = function() {
								t.className = "vis-configuration vis-config-button"
							}, this.optionsContainer = document.createElement("div"), this.optionsContainer.className =
							"vis-configuration vis-config-option-container", this.domElements.push(this.optionsContainer), this.domElements
							.push(t)
					}
				}
			}, {
				key: "_setupPopup",
				value: function(e, t) {
					var o = this;
					if (!0 === this.initialized && !0 === this.allowCreation && this.popupCounter < this.popupLimit) {
						var n = document.createElement("div");
						n.id = "vis-configuration-popup", n.className = "vis-configuration-popup", n.innerHTML = e, n.onclick =
							function() {
								o._removePopup()
							}, this.popupCounter += 1, this.popupDiv = {
								html: n,
								index: t
							}
					}
				}
			}, {
				key: "_removePopup",
				value: function() {
					void 0 !== this.popupDiv.html && (this.popupDiv.html.parentNode.removeChild(this.popupDiv.html), clearTimeout(
						this.popupDiv.hideTimeout), clearTimeout(this.popupDiv.deleteTimeout), this.popupDiv = {})
				}
			}, {
				key: "_showPopupIfNeeded",
				value: function() {
					var e = this;
					if (void 0 !== this.popupDiv.html) {
						var t = this.domElements[this.popupDiv.index],
							o = t.getBoundingClientRect();
						this.popupDiv.html.style.left = o.left + "px", this.popupDiv.html.style.top = o.top - 30 + "px", document.body
							.appendChild(this.popupDiv.html), this.popupDiv.hideTimeout = setTimeout(function() {
								e.popupDiv.html.style.opacity = 0
							}, 1500), this.popupDiv.deleteTimeout = setTimeout(function() {
								e._removePopup()
							}, 1800)
					}
				}
			}, {
				key: "_makeCheckbox",
				value: function(e, t, o) {
					var n = document.createElement("input");
					n.type = "checkbox", n.className = "vis-configuration vis-config-checkbox", n.checked = e, void 0 !== t && (n
						.checked = t, t !== e && ("object" === Le(e) ? t !== e.enabled && this.changedOptions.push({
							path: o,
							value: t
						}) : this.changedOptions.push({
							path: o,
							value: t
						})));
					var i = this;
					n.onchange = function() {
						i._update(this.checked, o)
					};
					var a = this._makeLabel(o[o.length - 1], o);
					this._makeItem(o, a, n)
				}
			}, {
				key: "_makeTextInput",
				value: function(e, t, o) {
					var n = document.createElement("input");
					n.type = "text", n.className = "vis-configuration vis-config-text", n.value = t, t !== e && this.changedOptions
						.push({
							path: o,
							value: t
						});
					var i = this;
					n.onchange = function() {
						i._update(this.value, o)
					};
					var a = this._makeLabel(o[o.length - 1], o);
					this._makeItem(o, a, n)
				}
			}, {
				key: "_makeColorField",
				value: function(e, t, o) {
					var n = this,
						i = e[1],
						a = document.createElement("div");
					t = void 0 === t ? i : t, "none" === t ? a.className = "vis-configuration vis-config-colorBlock none" : (a.className =
							"vis-configuration vis-config-colorBlock", a.style.backgroundColor = t), t = void 0 === t ? i : t, a.onclick =
						function() {
							n._showColorPicker(t, a, o)
						};
					var r = this._makeLabel(o[o.length - 1], o);
					this._makeItem(o, r, a)
				}
			}, {
				key: "_showColorPicker",
				value: function(e, t, o) {
					var n = this;
					t.onclick = function() {}, this.colorPicker.insertTo(t), this.colorPicker.show(), this.colorPicker.setColor(e),
						this.colorPicker.setUpdateCallback(function(e) {
							var i = "rgba(" + e.r + "," + e.g + "," + e.b + "," + e.a + ")";
							t.style.backgroundColor = i, n._update(i, o)
						}), this.colorPicker.setCloseCallback(function() {
							t.onclick = function() {
								n._showColorPicker(e, t, o)
							}
						})
				}
			}, {
				key: "_handleObject",
				value: function(e) {
					var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
						o = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2],
						n = !1,
						i = this.options.filter,
						a = !1;
					for (var r in e)
						if (e.hasOwnProperty(r)) {
							n = !0;
							var s = e[r],
								d = to.copyAndExtendArray(t, r);
							if ("function" == typeof i && (n = i(r, t), !1 === n && !(s instanceof Array) && "string" != typeof s &&
									"boolean" != typeof s && s instanceof Object && (this.allowCreation = !1, n = this._handleObject(s, d, !0),
										this.allowCreation = !1 === o)), !1 !== n) {
								a = !0;
								var l = this._getValue(d);
								if (s instanceof Array) this._handleArray(s, l, d);
								else if ("string" == typeof s) this._makeTextInput(s, l, d);
								else if ("boolean" == typeof s) this._makeCheckbox(s, l, d);
								else if (s instanceof Object) {
									var p = !0;
									if (-1 !== t.indexOf("physics") && this.moduleOptions.physics.solver !== r && (p = !1), !0 == p)
										if (void 0 !== s.enabled) {
											var m = to.copyAndExtendArray(d, "enabled"),
												u = this._getValue(m);
											if (!0 === u) {
												var c = this._makeLabel(r, d, !0);
												this._makeItem(d, c), a = this._handleObject(s, d) || a
											} else this._makeCheckbox(s, u, d)
										} else {
											var h = this._makeLabel(r, d, !0);
											this._makeItem(d, h), a = this._handleObject(s, d) || a
										}
								} else console.error("dont know how to handle", s, r, d)
							}
						} return a
				}
			}, {
				key: "_handleArray",
				value: function(e, t, o) {
					"string" == typeof e[0] && "color" === e[0] ? (this._makeColorField(e, t, o), e[1] !== t && this.changedOptions
						.push({
							path: o,
							value: t
						})) : "string" == typeof e[0] ? (this._makeDropdown(e, t, o), e[0] !== t && this.changedOptions.push({
						path: o,
						value: t
					})) : "number" == typeof e[0] && (this._makeRange(e, t, o), e[0] !== t && this.changedOptions.push({
						path: o,
						value: +t
					}))
				}
			}, {
				key: "_update",
				value: function(e, t) {
					var o = this._constructOptions(e, t);
					this.parent.body && this.parent.body.emitter && this.parent.body.emitter.emit && this.parent.body.emitter.emit(
						"configChange", o), this.initialized = !0, this.parent.setOptions(o)
				}
			}, {
				key: "_constructOptions",
				value: function(e, t) {
					var o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
						n = o;
					e = "true" === e || e, e = "false" !== e && e;
					for (var a = 0; a < t.length; a++) "global" !== t[a] && (void 0 === n[t[a]] && (n[t[a]] = {}), a == t.length -
						1 ? n[t[a]] = e : n = n[t[a]]);
					return o
				}
			}, {
				key: "_printOptions",
				value: function() {
					var e = this.getOptions();
					this.optionsContainer.innerHTML = "<pre>var options = " + JSON.stringify(e, null, 2) + "</pre>"
				}
			}, {
				key: "getOptions",
				value: function() {
					for (var e = {}, t = 0; t < this.changedOptions.length; t++) this._constructOptions(this.changedOptions[t].value,
						this.changedOptions[t].path, e);
					return e
				}
			}]), e
		}(),
		fi = Object.freeze({
			default: gi
		}),
		yi = ce(qo),
		_i = ce(Yn),
		bi = ce(On),
		vi = ce(Pn),
		wi = ce(ei),
		ki = ce(ii),
		Si = ce(ui),
		Di = ce(fi),
		xi = yi.DataSet,
		Ti = yi.DataView,
		Oi = ki.Validator,
		Ci = ki.printStyle,
		Mi = Si.allOptions,
		Pi = Si.configureOptions,
		Yi = Di.default,
		Ei;
	st.prototype = new _i, st.prototype._createConfigurator = function() {
		return new Yi(this, this.dom.container, Pi)
	}, st.prototype.redraw = function() {
		this.itemSet && this.itemSet.markDirty({
			refreshItems: !0
		}), this._redraw()
	}, st.prototype.setOptions = function(e) {
		var t = Oi.validate(e, Mi);
		if (!0 === t && console.log("%cErrors have been found in the supplied options object.", Ci), _i.prototype.setOptions
			.call(this, e), "type" in e && e.type !== this.options.type) {
			this.options.type = e.type;
			var o = this.itemsData;
			if (o) {
				var n = this.getSelection();
				this.setItems(null), this.setItems(o), this.setSelection(n)
			}
		}
	}, st.prototype.setItems = function(e) {
		this.itemsDone = !1;
		var t;
		t = e ? e instanceof xi || e instanceof Ti ? e : new xi(e, {
			type: {
				start: "Date",
				end: "Date"
			}
		}) : null, this.itemsData = t, this.itemSet && this.itemSet.setItems(t)
	}, st.prototype.setGroups = function(e) {
		var t;
		if (!e) t = null;
		else {
			var o = function(e) {
				return !1 !== e.visible
			};
			t = e instanceof xi || e instanceof Ti ? new Ti(e, {
				filter: o
			}) : new xi(e.filter(o))
		}
		this.groupsData = t, this.itemSet.setGroups(t)
	}, st.prototype.setData = function(e) {
		e && e.groups && this.setGroups(e.groups), e && e.items && this.setItems(e.items)
	}, st.prototype.setSelection = function(e, t) {
		this.itemSet && this.itemSet.setSelection(e), t && t.focus && this.focus(e, t)
	}, st.prototype.getSelection = function() {
		return this.itemSet && this.itemSet.getSelection() || []
	}, st.prototype.focus = function(e, t) {
		if (this.itemsData && null != e) {
			var o = Array.isArray(e) ? e : [e],
				n = this.itemsData.getDataSet().get(o, {
					type: {
						start: "Date",
						end: "Date"
					}
				}),
				i = null,
				a = null;
			if (n.forEach(function(t) {
					var o = t.start.valueOf(),
						n = "end" in t ? t.end.valueOf() : t.start.valueOf();
					(null === i || o < i) && (i = o), (null === a || n > a) && (a = n)
				}), null !== i && null !== a) {
				var r = this,
					s = this.itemSet.items[o[0]],
					d = -1 * this._getScrollTop(),
					l = null,
					p = function(e, t, o) {
						var n = pt(r, s);
						if (!1 !== n && (l || (l = n), l.itemTop != n.itemTop || l.shouldScroll)) {
							l.itemTop != n.itemTop && n.shouldScroll && (l = n, d = -1 * r._getScrollTop());
							var i = d,
								a = l.scrollOffset,
								p = o ? a : i + (a - i) * e;
							r._setScrollTop(-p), t || r._redraw()
						}
					},
					m = function() {
						var e = pt(r, s);
						e.shouldScroll && e.itemTop != l.itemTop && (r._setScrollTop(-e.scrollOffset), r._redraw())
					},
					u = function() {
						m(), setTimeout(m, 100)
					},
					c = (i + a) / 2,
					h = Pt(this.range.end - this.range.start, 1.1 * (a - i)),
					g = !(t && void 0 !== t.animation) || t.animation;
				g || (l = {
					shouldScroll: !1,
					scrollOffset: -1,
					itemTop: -1
				}), this.range.setRange(c - h / 2, c + h / 2, {
					animation: g
				}, u, p)
			}
		}
	}, st.prototype.fit = function(e, t) {
		var o = !(e && e.animation !== void 0) || e.animation,
			n = this.itemsData && this.itemsData.getDataSet(),
			i;
		1 === n.length && n.get()[0].end === void 0 ? (i = this.getDataRange(), this.moveTo(i.min.valueOf(), {
			animation: o
		}, t)) : (i = this.getItemRange(), this.range.setRange(i.min, i.max, {
			animation: o
		}, t))
	}, st.prototype.getItemRange = function() {
		var e = this.getDataRange(),
			t = null === e.min ? null : e.min.valueOf(),
			o = null === e.max ? null : e.max.valueOf(),
			n = null,
			a = null;
		if (null != t && null != o) {
			var r = o - t;
			0 >= r && (r = 10);
			var s = r / this.props.center.width,
				d = {},
				l = 0;
			Ko.forEach(this.itemSet.items, function(e, t) {
				if (e.groupShowing) {
					d[t] = e.redraw(!0), l = d[t].length
				}
			});
			var p = 0 < l;
			if (p)
				for (var m = 0; m < l; m++) Ko.forEach(d, function(e) {
					e[m]()
				});
			if (Ko.forEach(this.itemSet.items, function(e) {
					var i = dt(e),
						r = lt(e),
						d, l;
					this.options.rtl ? (d = i - (e.getWidthRight() + 10) * s, l = r + (e.getWidthLeft() + 10) * s) : (d = i - (e.getWidthLeft() +
						10) * s, l = r + (e.getWidthRight() + 10) * s), d < t && (t = d, n = e), l > o && (o = l, a = e)
				}.bind(this)), n && a) {
				var u = n.getWidthLeft() + 10,
					c = a.getWidthRight() + 10,
					h = this.props.center.width - u - c;
				0 < h && (this.options.rtl ? (t = dt(n) - c * r / h, o = lt(a) + u * r / h) : (t = dt(n) - u * r / h, o = lt(a) +
					c * r / h))
			}
		}
		return {
			min: null == t ? null : new Date(t),
			max: null == o ? null : new Date(o)
		}
	}, st.prototype.getDataRange = function() {
		var e = null,
			t = null,
			o = this.itemsData && this.itemsData.getDataSet();
		return o && o.forEach(function(o) {
			var n = Ko.convert(o.start, "Date").valueOf(),
				i = Ko.convert(null == o.end ? o.start : o.end, "Date").valueOf();
			(null === e || n < e) && (e = n), (null === t || i > t) && (t = i)
		}), {
			min: null == e ? null : new Date(e),
			max: null == t ? null : new Date(t)
		}
	}, st.prototype.getEventProperties = function(e) {
		var t = e.center ? e.center.x : e.clientX,
			o = e.center ? e.center.y : e.clientY,
			n;
		n = this.options.rtl ? Ko.getAbsoluteRight(this.dom.centerContainer) - t : t - Ko.getAbsoluteLeft(this.dom.centerContainer);
		var i = o - Ko.getAbsoluteTop(this.dom.centerContainer),
			a = this.itemSet.itemFromTarget(e),
			r = this.itemSet.groupFromTarget(e),
			s = vi.customTimeFromTarget(e),
			d = this.itemSet.options.snap || null,
			l = this.body.util.getScale(),
			p = this.body.util.getStep(),
			m = this._toTime(n),
			u = d ? d(m, l, p) : m,
			c = Ko.getTarget(e),
			h = null;
		return null == a ? null == s ? Ko.hasParent(c, this.timeAxis.dom.foreground) ? h = "axis" : this.timeAxis2 && Ko.hasParent(
				c, this.timeAxis2.dom.foreground) ? h = "axis" : Ko.hasParent(c, this.itemSet.dom.labelSet) ? h = "group-label" :
			Ko.hasParent(c, this.currentTime.bar) ? h = "current-time" : Ko.hasParent(c, this.dom.center) && (h = "background") :
			h = "custom-time" : h = "item", {
				event: e,
				item: a ? a.id : null,
				group: r ? r.groupId : null,
				what: h,
				pageX: e.srcEvent ? e.srcEvent.pageX : e.pageX,
				pageY: e.srcEvent ? e.srcEvent.pageY : e.pageY,
				x: n,
				y: i,
				time: m,
				snappedTime: u
			}
	}, st.prototype.toggleRollingMode = function() {
		this.range.rolling ? this.range.stopRolling() : (this.options.rollingMode == null && this.setOptions(this.options),
			this.range.startRolling())
	};
	mt.prototype.setCharHeight = function(e) {
		this.majorCharHeight = e
	}, mt.prototype.setHeight = function(e) {
		this.containerHeight = e
	}, mt.prototype.determineScale = function() {
		var e = this._end - this._start;
		this.scale = this.containerHeight / e;
		var t = this.majorCharHeight / this.scale,
			o = 0 < e ? xt(Math.log(e) / Math.LN10) : 0;
		this.minorStepIdx = -1, this.magnitudefactor = Tt(10, o);
		var n = 0;
		0 > o && (n = o);
		for (var i = !1, a = n; Ot(a) <= Ot(o); a++) {
			this.magnitudefactor = Tt(10, a);
			for (var r = 0, s; r < this.minorSteps.length; r++)
				if (s = this.magnitudefactor * this.minorSteps[r], s >= t) {
					i = !0, this.minorStepIdx = r;
					break
				} if (!0 === i) break
		}
	}, mt.prototype.is_major = function(e) {
		return 0 == e % (this.magnitudefactor * this.majorSteps[this.minorStepIdx])
	}, mt.prototype.getStep = function() {
		return this.magnitudefactor * this.minorSteps[this.minorStepIdx]
	}, mt.prototype.getFirstMajor = function() {
		var e = this.magnitudefactor * this.majorSteps[this.minorStepIdx];
		return this.convertValue(this._start + (e - this._start % e) % e)
	}, mt.prototype.formatValue = function(e) {
		var t = e.toPrecision(5);
		return "function" == typeof this.formattingFunction && (t = this.formattingFunction(e)), "number" == typeof t ? "" +
			t : "string" == typeof t ? t : e.toPrecision(5)
	}, mt.prototype.getLines = function() {
		for (var e = [], t = this.getStep(), o = (t - this._start % t) % t, n = this._start + o; 1e-5 < this._end - n; n +=
			t) n != this._start && e.push({
			major: this.is_major(n),
			y: this.convertValue(n),
			val: this.formatValue(n)
		});
		return e
	}, mt.prototype.followScale = function(e) {
		var t = this.minorStepIdx,
			o = this._start,
			n = this._end,
			i = this,
			a = function() {
				i.magnitudefactor *= 2
			},
			r = function() {
				i.magnitudefactor /= 2
			};
		if (1 >= e.minorStepIdx && 1 >= this.minorStepIdx || 1 < e.minorStepIdx && 1 < this.minorStepIdx);
		else e.minorStepIdx < this.minorStepIdx ? (this.minorStepIdx = 1, 2 == t ? a() : (a(), a())) : (this.minorStepIdx =
			2, 1 == t ? r() : (r(), r()));
		for (var s = e.convertValue(0), d = e.getStep() * e.scale, l = !1, p = 0; !l && 5 > p++;) {
			this.scale = d / (this.minorSteps[this.minorStepIdx] * this.magnitudefactor);
			var m = this.containerHeight / this.scale;
			this._start = o, this._end = this._start + m;
			var u = this._end * this.scale,
				c = this.magnitudefactor * this.majorSteps[this.minorStepIdx],
				h = this.getFirstMajor() - e.getFirstMajor();
			if (this.zeroAlign) {
				this._end += (s - u) / this.scale, this._start = this._end - m
			} else this.autoScaleStart ? (this._start -= h / this.scale, this._end = this._start + m) : (this._start += c - h /
				this.scale, this._end = this._start + m);
			if (!this.autoScaleEnd && this._end > n + 1e-5) {
				r(), l = !1;
				continue
			}
			if (!this.autoScaleStart && this._start < o - 1e-5)
				if (this.zeroAlign && 0 <= o) console.warn("Can't adhere to given 'min' range, due to zeroalign");
				else {
					r(), l = !1;
					continue
				} if (this.autoScaleStart && this.autoScaleEnd && m < n - o) {
				a(), l = !1;
				continue
			}
			l = !0
		}
	}, mt.prototype.convertValue = function(e) {
		return this.containerHeight - (e - this._start) * this.scale
	}, mt.prototype.screenToValue = function(e) {
		return (this.containerHeight - e) / this.scale + this._start
	};
	var Ii = mt;
	ut.prototype = new Qo, ut.prototype.addGroup = function(e, t) {
		this.groups.hasOwnProperty(e) || (this.groups[e] = t), this.amountOfGroups += 1
	}, ut.prototype.updateGroup = function(e, t) {
		this.groups.hasOwnProperty(e) || (this.amountOfGroups += 1), this.groups[e] = t
	}, ut.prototype.removeGroup = function(e) {
		this.groups.hasOwnProperty(e) && (delete this.groups[e], this.amountOfGroups -= 1)
	}, ut.prototype.setOptions = function(e) {
		if (e) {
			var t = !1;
			this.options.orientation != e.orientation && e.orientation !== void 0 && (t = !0);
			to.selectiveDeepExtend(["orientation", "showMinorLabels", "showMajorLabels", "icons", "majorLinesOffset",
				"minorLinesOffset", "labelOffsetX", "labelOffsetY", "iconWidth", "width", "visible", "left", "right",
				"alignZeros"
			], this.options, e), this.minWidth = +("" + this.options.width).replace("px", ""), !0 == t && this.dom.frame && (
				this.hide(), this.show())
		}
	}, ut.prototype._create = function() {
		this.dom.frame = document.createElement("div"), this.dom.frame.style.width = this.options.width, this.dom.frame.style
			.height = this.height, this.dom.lineContainer = document.createElement("div"), this.dom.lineContainer.style.width =
			"100%", this.dom.lineContainer.style.height = this.height, this.dom.lineContainer.style.position = "relative",
			this.dom.lineContainer.style.visibility = "visible", this.dom.lineContainer.style.display = "block", this.svg =
			document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.svg.style.position = "absolute", this.svg.style
			.top = "0px", this.svg.style.height = "100%", this.svg.style.width = "100%", this.svg.style.display = "block",
			this.dom.frame.appendChild(this.svg)
	}, ut.prototype._redrawGroupIcons = function() {
		io.prepareElements(this.svgElements);
		var e = this.options.iconWidth,
			t = 15,
			o = 4,
			n = o + .5 * t,
			a;
		a = "left" === this.options.orientation ? o : this.width - e - o;
		var r = Object.keys(this.groups);
		r.sort(function(e, t) {
			return e < t ? -1 : 1
		});
		for (var s = 0, d; s < r.length; s++) d = r[s], !0 === this.groups[d].visible && (void 0 === this.linegraphOptions.visibility[
			d] || !0 === this.linegraphOptions.visibility[d]) && (this.groups[d].getLegend(e, t, this.framework, a, n), n +=
			t + o);
		io.cleanupElements(this.svgElements), this.iconsRemoved = !1
	}, ut.prototype._cleanupIcons = function() {
		!1 === this.iconsRemoved && (io.prepareElements(this.svgElements), io.cleanupElements(this.svgElements), this.iconsRemoved = !
			0)
	}, ut.prototype.show = function() {
		this.hidden = !1, this.dom.frame.parentNode || ("left" === this.options.orientation ? this.body.dom.left.appendChild(
				this.dom.frame) : this.body.dom.right.appendChild(this.dom.frame)), this.dom.lineContainer.parentNode || this.body
			.dom.backgroundHorizontal.appendChild(this.dom.lineContainer), this.dom.lineContainer.style.display = "block"
	}, ut.prototype.hide = function() {
		this.hidden = !0, this.dom.frame.parentNode && this.dom.frame.parentNode.removeChild(this.dom.frame), this.dom.lineContainer
			.style.display = "none"
	}, ut.prototype.setRange = function(e, t) {
		this.range.start = e, this.range.end = t
	}, ut.prototype.redraw = function() {
		var e = !1,
			t = 0;
		for (var o in this.dom.lineContainer.style.top = this.body.domProps.scrollTop + "px", this.groups) this.groups.hasOwnProperty(
			o) && !0 === this.groups[o].visible && (void 0 === this.linegraphOptions.visibility[o] || !0 === this.linegraphOptions
			.visibility[o]) && t++;
		if (0 === this.amountOfGroups || 0 === t) this.hide();
		else {
			this.show(), this.height = +this.linegraphSVG.style.height.replace("px", ""), this.dom.lineContainer.style.height =
				this.height + "px", this.width = !0 === this.options.visible ? +("" + this.options.width).replace("px", "") : 0;
			var n = this.props,
				i = this.dom.frame;
			i.className = "vis-data-axis", this._calculateCharSize();
			var a = this.options.orientation,
				r = this.options.showMinorLabels,
				s = this.options.showMajorLabels;
			n.minorLabelHeight = r ? n.minorCharHeight : 0, n.majorLabelHeight = s ? n.majorCharHeight : 0, n.minorLineWidth =
				this.body.dom.backgroundHorizontal.offsetWidth - this.lineOffset - this.width + 2 * this.options.minorLinesOffset,
				n.minorLineHeight = 1, n.majorLineWidth = this.body.dom.backgroundHorizontal.offsetWidth - this.lineOffset - this
				.width + 2 * this.options.majorLinesOffset, n.majorLineHeight = 1, "left" === a ? (i.style.top = "0", i.style.left =
					"0", i.style.bottom = "", i.style.width = this.width + "px", i.style.height = this.height + "px", this.props.width =
					this.body.domProps.left.width, this.props.height = this.body.domProps.left.height) : (i.style.top = "", i.style.bottom =
					"0", i.style.left = "0", i.style.width = this.width + "px", i.style.height = this.height + "px", this.props.width =
					this.body.domProps.right.width, this.props.height = this.body.domProps.right.height), e = this._redrawLabels(),
				e = this._isResized() || e, !0 === this.options.icons ? this._redrawGroupIcons() : this._cleanupIcons(), this._redrawTitle(
					a)
		}
		return e
	}, ut.prototype._redrawLabels = function() {
		var e = this,
			t = !1;
		io.prepareElements(this.DOMelements.lines), io.prepareElements(this.DOMelements.labels);
		var o = this.options.orientation,
			n = null == this.options[o].range ? {} : this.options[o].range,
			i = !0;
		null != n.max && (this.range.end = n.max, i = !1);
		var a = !0;
		null != n.min && (this.range.start = n.min, a = !1), this.scale = new Ii(this.range.start, this.range.end, a, i,
				this.dom.frame.offsetHeight, this.props.majorCharHeight, this.options.alignZeros, this.options[o].format), !1 ===
			this.master && null != this.masterAxis ? (this.scale.followScale(this.masterAxis.scale), this.dom.lineContainer.style
				.display = "none") : this.dom.lineContainer.style.display = "block", this.maxLabelSize = 0;
		var r = this.scale.getLines();
		r.forEach(function(t) {
			var n = t.y,
				i = t.major;
			e.options.showMinorLabels && !1 === i && e._redrawLabel(n - 2, t.val, o, "vis-y-axis vis-minor", e.props.minorCharHeight),
				i && 0 <= n && e._redrawLabel(n - 2, t.val, o, "vis-y-axis vis-major", e.props.majorCharHeight), !0 === e.master &&
				(i ? e._redrawLine(n, o, "vis-grid vis-horizontal vis-major", e.options.majorLinesOffset, e.props.majorLineWidth) :
					e._redrawLine(n, o, "vis-grid vis-horizontal vis-minor", e.options.minorLinesOffset, e.props.minorLineWidth))
		});
		var s = 0;
		void 0 !== this.options[o].title && void 0 !== this.options[o].title.text && (s = this.props.titleCharHeight);
		var d = !0 === this.options.icons ? Pt(this.options.iconWidth, s) + this.options.labelOffsetX + 15 : s + this.options
			.labelOffsetX + 15;
		return this.maxLabelSize > this.width - d && !0 === this.options.visible ? (this.width = this.maxLabelSize + d,
				this.options.width = this.width + "px", io.cleanupElements(this.DOMelements.lines), io.cleanupElements(this.DOMelements
					.labels), this.redraw(), t = !0) : this.maxLabelSize < this.width - d && !0 === this.options.visible && this.width >
			this.minWidth ? (this.width = Pt(this.minWidth, this.maxLabelSize + d), this.options.width = this.width + "px", io
				.cleanupElements(this.DOMelements.lines), io.cleanupElements(this.DOMelements.labels), this.redraw(), t = !0) : (
				io.cleanupElements(this.DOMelements.lines), io.cleanupElements(this.DOMelements.labels), t = !1), t
	}, ut.prototype.convertValue = function(e) {
		return this.scale.convertValue(e)
	}, ut.prototype.screenToValue = function(e) {
		return this.scale.screenToValue(e)
	}, ut.prototype._redrawLabel = function(e, t, o, n, i) {
		var a = io.getDOMElement("div", this.DOMelements.labels, this.dom.frame);
		a.className = n, a.innerHTML = t, "left" === o ? (a.style.left = "-" + this.options.labelOffsetX + "px", a.style.textAlign =
				"right") : (a.style.right = "-" + this.options.labelOffsetX + "px", a.style.textAlign = "left"), a.style.top = e -
			.5 * i + this.options.labelOffsetY + "px", t += "";
		var r = Pt(this.props.majorCharWidth, this.props.minorCharWidth);
		this.maxLabelSize < t.length * r && (this.maxLabelSize = t.length * r)
	}, ut.prototype._redrawLine = function(e, t, o, n, i) {
		if (!0 === this.master) {
			var a = io.getDOMElement("div", this.DOMelements.lines, this.dom.lineContainer);
			a.className = o, a.innerHTML = "", "left" === t ? a.style.left = this.width - n + "px" : a.style.right = this.width -
				n + "px", a.style.width = i + "px", a.style.top = e + "px"
		}
	}, ut.prototype._redrawTitle = function(e) {
		if (io.prepareElements(this.DOMelements.title), void 0 !== this.options[e].title && void 0 !== this.options[e].title
			.text) {
			var t = io.getDOMElement("div", this.DOMelements.title, this.dom.frame);
			t.className = "vis-y-axis vis-title vis-" + e, t.innerHTML = this.options[e].title.text, void 0 !== this.options[e]
				.title.style && to.addCssText(t, this.options[e].title.style), "left" === e ? t.style.left = this.props.titleCharHeight +
				"px" : t.style.right = this.props.titleCharHeight + "px", t.style.width = this.height + "px"
		}
		io.cleanupElements(this.DOMelements.title)
	}, ut.prototype._calculateCharSize = function() {
		if (!("minorCharHeight" in this.props)) {
			var e = document.createTextNode("0"),
				t = document.createElement("div");
			t.className = "vis-y-axis vis-minor vis-measure", t.appendChild(e), this.dom.frame.appendChild(t), this.props.minorCharHeight =
				t.clientHeight, this.props.minorCharWidth = t.clientWidth, this.dom.frame.removeChild(t)
		}
		if (!("majorCharHeight" in this.props)) {
			var o = document.createTextNode("0"),
				n = document.createElement("div");
			n.className = "vis-y-axis vis-major vis-measure", n.appendChild(o), this.dom.frame.appendChild(n), this.props.majorCharHeight =
				n.clientHeight, this.props.majorCharWidth = n.clientWidth, this.dom.frame.removeChild(n)
		}
		if (!("titleCharHeight" in this.props)) {
			var i = document.createTextNode("0"),
				a = document.createElement("div");
			a.className = "vis-y-axis vis-title vis-measure", a.appendChild(i), this.dom.frame.appendChild(a), this.props.titleCharHeight =
				a.clientHeight, this.props.titleCharWidth = a.clientWidth, this.dom.frame.removeChild(a)
		}
	};
	var Ri = Object.freeze({
		default: ut
	});
	ct.draw = function(e, t, o, n) {
		n = n || 0;
		for (var a = gt(o, t), r = 0; r < e.length; r++)
			if (!a) io.drawPoint(e[r].screen_x + n, e[r].screen_y, ht(t), o.svgElements, o.svg, e[r].label);
			else {
				var s = a(e[r], t);
				(!0 === s || "object" === Le(s)) && io.drawPoint(e[r].screen_x + n, e[r].screen_y, ht(t, s), o.svgElements, o.svg,
					e[r].label)
			}
	}, ct.drawIcon = function(e, t, o, n, i, a) {
		var r = .5 * i,
			s = io.getSVGElement("rect", a.svgElements, a.svg);
		s.setAttributeNS(null, "x", t), s.setAttributeNS(null, "y", o - r), s.setAttributeNS(null, "width", n), s.setAttributeNS(
			null, "height", 2 * r), s.setAttributeNS(null, "class", "vis-outline"), io.drawPoint(t + .5 * n, o, ht(e), a.svgElements,
			a.svg)
	};
	var Ai = ct;
	ft.drawIcon = function(e, t, o, n, i, a) {
		var r = .5 * i,
			s = io.getSVGElement("rect", a.svgElements, a.svg);
		s.setAttributeNS(null, "x", t), s.setAttributeNS(null, "y", o - r), s.setAttributeNS(null, "width", n), s.setAttributeNS(
			null, "height", 2 * r), s.setAttributeNS(null, "class", "vis-outline");
		var d = xt(.3 * n),
			l = e.options.barChart.width,
			p = xt(.4 * i),
			m = xt(.75 * i),
			u = xt((n - 2 * d) / 3);
		if (io.drawBar(t + .5 * d + u, o + r - p - 1, d, p, e.className + " vis-bar", a.svgElements, a.svg, e.style), io.drawBar(
				t + 1.5 * d + u + 2, o + r - m - 1, d, m, e.className + " vis-bar", a.svgElements, a.svg, e.style), !0 == e.options
			.drawPoints.enabled) {
			var c = {
				style: e.options.drawPoints.style,
				styles: e.options.drawPoints.styles,
				size: e.options.drawPoints.size / (l / d),
				className: e.className
			};
			io.drawPoint(t + .5 * d + u, o + r - p - 1, c, a.svgElements, a.svg), io.drawPoint(t + 1.5 * d + u + 2, o + r - m -
				1, c, a.svgElements, a.svg)
		}
	}, ft.draw = function(e, t, o) {
		var n = [],
			a = {},
			r = 0,
			s, d, l, p, m, u;
		for (m = 0; m < e.length; m++)
			if (p = o.groups[e[m]], "bar" === p.options.style && !0 === p.visible && (void 0 === o.options.groups.visibility[e[
					m]] || !0 === o.options.groups.visibility[e[m]]))
				for (u = 0; u < t[e[m]].length; u++) n.push({
					screen_x: t[e[m]][u].screen_x,
					screen_end: t[e[m]][u].screen_end,
					screen_y: t[e[m]][u].screen_y,
					x: t[e[m]][u].x,
					end: t[e[m]][u].end,
					y: t[e[m]][u].y,
					groupId: e[m],
					label: t[e[m]][u].label
				}), r += 1;
		if (0 !== r)
			for (n.sort(function(e, t) {
					return e.screen_x === t.screen_x ? e.groupId < t.groupId ? -1 : 1 : e.screen_x - t.screen_x
				}), ft._getDataIntersections(a, n), m = 0; m < n.length; m++) {
				p = o.groups[n[m].groupId];
				var c = null == p.options.barChart.minWidth ? .1 * p.options.barChart.width : p.options.barChart.minWidth;
				d = n[m].screen_x;
				var h = 0;
				if (void 0 === a[d]) m + 1 < n.length && (s = Ot(n[m + 1].screen_x - d)), l = ft._getSafeDrawData(s, p, c);
				else {
					var g = m + (a[d].amount - a[d].resolved);
					g < n.length && (s = Ot(n[g].screen_x - d)), l = ft._getSafeDrawData(s, p, c), a[d].resolved += 1, !0 === p.options
						.stack && !0 !== p.options.excludeFromStacking ? n[m].screen_y < p.zeroPosition ? (h = a[d].accumulatedNegative,
							a[d].accumulatedNegative += p.zeroPosition - n[m].screen_y) : (h = a[d].accumulatedPositive, a[d].accumulatedPositive +=
							p.zeroPosition - n[m].screen_y) : !0 === p.options.barChart.sideBySide && (l.width /= a[d].amount, l.offset +=
							a[d].resolved * l.width - .5 * l.width * (a[d].amount + 1))
				}
				var f = l.width,
					y = n[m].screen_x;
				if (null == n[m].screen_end ? y += l.offset : (f = n[m].screen_end - n[m].screen_x, y += .5 * f), io.drawBar(y, n[
						m].screen_y - h, f, p.zeroPosition - n[m].screen_y, p.className + " vis-bar", o.svgElements, o.svg, p.style), !
					0 === p.options.drawPoints.enabled) {
					var _ = {
						screen_x: n[m].screen_x,
						screen_y: n[m].screen_y - h,
						x: n[m].x,
						y: n[m].y,
						groupId: n[m].groupId,
						label: n[m].label
					};
					Ai.draw([_], p, o, l.offset)
				}
			}
	}, ft._getDataIntersections = function(e, t) {
		for (var o = 0, n; o < t.length; o++) o + 1 < t.length && (n = Ot(t[o + 1].screen_x - t[o].screen_x)), 0 < o && (n =
			Yt(n, Ot(t[o - 1].screen_x - t[o].screen_x))), 0 === n && (void 0 === e[t[o].screen_x] && (e[t[o].screen_x] = {
			amount: 0,
			resolved: 0,
			accumulatedPositive: 0,
			accumulatedNegative: 0
		}), e[t[o].screen_x].amount += 1)
	}, ft._getSafeDrawData = function(e, t, o) {
		var n, i;
		return e < t.options.barChart.width && 0 < e ? (n = e < o ? o : e, i = 0, "left" === t.options.barChart.align ? i -=
			.5 * e : "right" === t.options.barChart.align && (i += .5 * e)) : (n = t.options.barChart.width, i = 0, "left" ===
			t.options.barChart.align ? i -= .5 * t.options.barChart.width : "right" === t.options.barChart.align && (i += .5 *
				t.options.barChart.width)), {
			width: n,
			offset: i
		}
	}, ft.getStackedYRange = function(e, t, o, n, i) {
		if (0 < e.length) {
			e.sort(function(e, t) {
				return e.screen_x === t.screen_x ? e.groupId < t.groupId ? -1 : 1 : e.screen_x - t.screen_x
			});
			var a = {};
			ft._getDataIntersections(a, e), t[n] = ft._getStackedYRange(a, e), t[n].yAxisOrientation = i, o.push(n)
		}
	}, ft._getStackedYRange = function(e, t) {
		for (var o = t[0].screen_y, n = t[0].screen_y, a = 0, r; a < t.length; a++) r = t[a].screen_x, void 0 === e[r] ? (o =
				o > t[a].screen_y ? t[a].screen_y : o, n = n < t[a].screen_y ? t[a].screen_y : n) : 0 > t[a].screen_y ? e[r].accumulatedNegative +=
			t[a].screen_y : e[r].accumulatedPositive += t[a].screen_y;
		for (var s in e) e.hasOwnProperty(s) && (o = o > e[s].accumulatedNegative ? e[s].accumulatedNegative : o, o = o > e[
				s].accumulatedPositive ? e[s].accumulatedPositive : o, n = n < e[s].accumulatedNegative ? e[s].accumulatedNegative :
			n, n = n < e[s].accumulatedPositive ? e[s].accumulatedPositive : n);
		return {
			min: o,
			max: n
		}
	};
	var Hi = ft;
	yt.calcPath = function(e, t) {
		if (null != e && 0 < e.length) {
			var o = [];
			return o = !0 == t.options.interpolation.enabled ? yt._catmullRom(e, t) : yt._linear(e), o
		}
	}, yt.drawIcon = function(e, t, o, n, i, a) {
		var r = .5 * i,
			s = io.getSVGElement("rect", a.svgElements, a.svg),
			d, l;
		if (s.setAttributeNS(null, "x", t), s.setAttributeNS(null, "y", o - r), s.setAttributeNS(null, "width", n), s.setAttributeNS(
				null, "height", 2 * r), s.setAttributeNS(null, "class", "vis-outline"), d = io.getSVGElement("path", a.svgElements,
				a.svg), d.setAttributeNS(null, "class", e.className), void 0 !== e.style && d.setAttributeNS(null, "style", e.style),
			d.setAttributeNS(null, "d", "M" + t + "," + o + " L" + (t + n) + "," + o + ""), !0 == e.options.shaded.enabled &&
			(l = io.getSVGElement("path", a.svgElements, a.svg), "top" == e.options.shaded.orientation ? l.setAttributeNS(null,
					"d", "M" + t + ", " + (o - r) + "L" + t + "," + o + " L" + (t + n) + "," + o + " L" + (t + n) + "," + (o - r)) :
				l.setAttributeNS(null, "d", "M" + t + "," + o + " L" + t + "," + (o + r) + " L" + (t + n) + "," + (o + r) + "L" +
					(t + n) + "," + o), l.setAttributeNS(null, "class", e.className + " vis-icon-fill"), void 0 !== e.options.shaded
				.style && "" !== e.options.shaded.style && l.setAttributeNS(null, "style", e.options.shaded.style)), !0 == e.options
			.drawPoints.enabled) {
			var p = {
				style: e.options.drawPoints.style,
				styles: e.options.drawPoints.styles,
				size: e.options.drawPoints.size,
				className: e.className
			};
			io.drawPoint(t + .5 * n, o, p, a.svgElements, a.svg)
		}
	}, yt.drawShading = function(e, t, o, n) {
		if (!0 == t.options.shaded.enabled) {
			var i = +n.svg.style.height.replace("px", ""),
				a = io.getSVGElement("path", n.svgElements, n.svg),
				r = "L";
			!0 == t.options.interpolation.enabled && (r = "C");
			var s = 0,
				d;
			s = "top" == t.options.shaded.orientation ? 0 : "bottom" == t.options.shaded.orientation ? i : Yt(Pt(0, t.zeroPosition),
					i), d = "group" == t.options.shaded.orientation && null != o && null != o ? "M" + e[0][0] + "," + e[0][1] + " " +
				this.serializePath(e, r, !1) + " L" + o[o.length - 1][0] + "," + o[o.length - 1][1] + " " + this.serializePath(o,
					r, !0) + o[0][0] + "," + o[0][1] + " Z" : "M" + e[0][0] + "," + e[0][1] + " " + this.serializePath(e, r, !1) +
				" V" + s + " H" + e[0][0] + " Z", a.setAttributeNS(null, "class", t.className + " vis-fill"), t.options.shaded.style !==
				void 0 && a.setAttributeNS(null, "style", t.options.shaded.style), a.setAttributeNS(null, "d", d)
		}
	}, yt.draw = function(e, t, o) {
		if (null != e && e != null) {
			var n = io.getSVGElement("path", o.svgElements, o.svg);
			n.setAttributeNS(null, "class", t.className), t.style !== void 0 && n.setAttributeNS(null, "style", t.style);
			var i = "L";
			!0 == t.options.interpolation.enabled && (i = "C"), n.setAttributeNS(null, "d", "M" + e[0][0] + "," + e[0][1] +
				" " + this.serializePath(e, i, !1))
		}
	}, yt.serializePath = function(e, t, o) {
		if (2 > e.length) return "";
		var n = t,
			a;
		if (o)
			for (a = e.length - 2; 0 < a; a--) n += e[a][0] + "," + e[a][1] + " ";
		else
			for (a = 1; a < e.length; a++) n += e[a][0] + "," + e[a][1] + " ";
		return n
	}, yt._catmullRomUniform = function(e) {
		var t = [],
			o, n, a, r, s, d;
		t.push([xt(e[0].screen_x), xt(e[0].screen_y)]);
		for (var l = 1 / 6, p = e.length, m = 0; m < p - 1; m++) o = 0 == m ? e[0] : e[m - 1], n = e[m], a = e[m + 1], r =
			m + 2 < p ? e[m + 2] : a, s = {
				screen_x: (-o.screen_x + 6 * n.screen_x + a.screen_x) * l,
				screen_y: (-o.screen_y + 6 * n.screen_y + a.screen_y) * l
			}, d = {
				screen_x: (n.screen_x + 6 * a.screen_x - r.screen_x) * l,
				screen_y: (n.screen_y + 6 * a.screen_y - r.screen_y) * l
			}, t.push([s.screen_x, s.screen_y]), t.push([d.screen_x, d.screen_y]), t.push([a.screen_x, a.screen_y]);
		return t
	}, yt._catmullRom = function(e, t) {
		var o = t.options.interpolation.alpha;
		if (0 == o || o === void 0) return this._catmullRomUniform(e);
		var n = [],
			a, r, s, d, l, p, m, u, c, h, g, f, y, _, b, v, w, k, S;
		n.push([xt(e[0].screen_x), xt(e[0].screen_y)]);
		for (var D = e.length, x = 0; x < D - 1; x++) a = 0 == x ? e[0] : e[x - 1], r = e[x], s = e[x + 1], d = x + 2 < D ?
			e[x + 2] : s, m = Dt(Tt(a.screen_x - r.screen_x, 2) + Tt(a.screen_y - r.screen_y, 2)), u = Dt(Tt(r.screen_x - s.screen_x,
				2) + Tt(r.screen_y - s.screen_y, 2)), c = Dt(Tt(s.screen_x - d.screen_x, 2) + Tt(s.screen_y - d.screen_y, 2)), _ =
			Tt(c, o), v = Tt(c, 2 * o), b = Tt(u, o), w = Tt(u, 2 * o), S = Tt(m, o), k = Tt(m, 2 * o), h = 2 * k + 3 * S * b +
			w, g = 2 * v + 3 * _ * b + w, f = 3 * S * (S + b), 0 < f && (f = 1 / f), y = 3 * _ * (_ + b), 0 < y && (y = 1 / y),
			l = {
				screen_x: (-w * a.screen_x + h * r.screen_x + k * s.screen_x) * f,
				screen_y: (-w * a.screen_y + h * r.screen_y + k * s.screen_y) * f
			}, p = {
				screen_x: (v * r.screen_x + g * s.screen_x - w * d.screen_x) * y,
				screen_y: (v * r.screen_y + g * s.screen_y - w * d.screen_y) * y
			}, 0 == l.screen_x && 0 == l.screen_y && (l = r), 0 == p.screen_x && 0 == p.screen_y && (p = s), n.push([l.screen_x,
				l.screen_y
			]), n.push([p.screen_x, p.screen_y]), n.push([s.screen_x, s.screen_y]);
		return n
	}, yt._linear = function(e) {
		for (var t = [], o = 0; o < e.length; o++) t.push([e[o].screen_x, e[o].screen_y]);
		return t
	};
	var Li = yt;
	_t.prototype.setItems = function(e) {
		null == e ? this.itemsData = [] : (this.itemsData = e, !0 == this.options.sort && Ko.insertSort(this.itemsData,
			function(e, t) {
				return e.x > t.x ? 1 : -1
			}))
	}, _t.prototype.getItems = function() {
		return this.itemsData
	}, _t.prototype.setZeroPosition = function(e) {
		this.zeroPosition = e
	}, _t.prototype.setOptions = function(e) {
		if (e !== void 0) {
			Ko.selectiveDeepExtend(["sampling", "style", "sort", "yAxisOrientation", "barChart", "zIndex",
					"excludeFromStacking", "excludeFromLegend"
				], this.options, e), "function" == typeof e.drawPoints && (e.drawPoints = {
					onRender: e.drawPoints
				}), Ko.mergeOptions(this.options, e, "interpolation"), Ko.mergeOptions(this.options, e, "drawPoints"), Ko.mergeOptions(
					this.options, e, "shaded"), e.interpolation && "object" == Le(e.interpolation) && e.interpolation.parametrization &&
				("uniform" == e.interpolation.parametrization ? this.options.interpolation.alpha = 0 : "chordal" == e.interpolation
					.parametrization ? this.options.interpolation.alpha = 1 : (this.options.interpolation.parametrization =
						"centripetal", this.options.interpolation.alpha = .5))
		}
	}, _t.prototype.update = function(e) {
		this.group = e, this.content = e.content || "graph", this.className = e.className || this.className ||
			"vis-graph-group" + this.groupsUsingDefaultStyles[0] % 10, this.visible = !(e.visible !== void 0) || e.visible,
			this.style = e.style, this.setOptions(e.options)
	}, _t.prototype.getLegend = function(e, t, o, n, i) {
		if (null == o || null == o) {
			var a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			o = {
				svg: a,
				svgElements: {},
				options: this.options,
				groups: [this]
			}
		}
		switch ((null == n || null == n) && (n = 0), (null == i || null == i) && (i = .5 * t), this.options.style) {
			case "line":
				Li.drawIcon(this, n, i, e, t, o);
				break;
			case "points":
			case "point":
				Ai.drawIcon(this, n, i, e, t, o);
				break;
			case "bar":
				Hi.drawIcon(this, n, i, e, t, o);
		}
		return {
			icon: o.svg,
			label: this.content,
			orientation: this.options.yAxisOrientation
		}
	}, _t.prototype.getYRange = function(e) {
		for (var t = e[0].y, o = e[0].y, n = 0; n < e.length; n++) t = t > e[n].y ? e[n].y : t, o = o < e[n].y ? e[n].y : o;
		return {
			min: t,
			max: o,
			yAxisOrientation: this.options.yAxisOrientation
		}
	};
	var Ni = _t;
	bt.prototype = new Qo, bt.prototype.clear = function() {
		this.groups = {}, this.amountOfGroups = 0
	}, bt.prototype.addGroup = function(e, t) {
		!0 != t.options.excludeFromLegend && (!this.groups.hasOwnProperty(e) && (this.groups[e] = t), this.amountOfGroups +=
			1)
	}, bt.prototype.updateGroup = function(e, t) {
		this.groups[e] = t
	}, bt.prototype.removeGroup = function(e) {
		this.groups.hasOwnProperty(e) && (delete this.groups[e], this.amountOfGroups -= 1)
	}, bt.prototype._create = function() {
		this.dom.frame = document.createElement("div"), this.dom.frame.className = "vis-legend", this.dom.frame.style.position =
			"absolute", this.dom.frame.style.top = "10px", this.dom.frame.style.display = "block", this.dom.textArea =
			document.createElement("div"), this.dom.textArea.className = "vis-legend-text", this.dom.textArea.style.position =
			"relative", this.dom.textArea.style.top = "0px", this.svg = document.createElementNS("http://www.w3.org/2000/svg",
				"svg"), this.svg.style.position = "absolute", this.svg.style.top = "0px", this.svg.style.width = this.options.iconSize +
			5 + "px", this.svg.style.height = "100%", this.dom.frame.appendChild(this.svg), this.dom.frame.appendChild(this.dom
				.textArea)
	}, bt.prototype.hide = function() {
		this.dom.frame.parentNode && this.dom.frame.parentNode.removeChild(this.dom.frame)
	}, bt.prototype.show = function() {
		this.dom.frame.parentNode || this.body.dom.center.appendChild(this.dom.frame)
	}, bt.prototype.setOptions = function(e) {
		Ko.selectiveDeepExtend(["enabled", "orientation", "icons", "left", "right"], this.options, e)
	}, bt.prototype.redraw = function() {
		var e = 0,
			t = Object.keys(this.groups);
		t.sort(function(e, t) {
			return e < t ? -1 : 1
		});
		for (var o = 0, n; o < t.length; o++) n = t[o], !0 == this.groups[n].visible && (void 0 === this.linegraphOptions.visibility[
			n] || !0 == this.linegraphOptions.visibility[n]) && e++;
		if (!1 == this.options[this.side].visible || 0 == this.amountOfGroups || !1 == this.options.enabled || 0 == e) this
			.hide();
		else {
			if (this.show(), "top-left" == this.options[this.side].position || "bottom-left" == this.options[this.side].position ?
				(this.dom.frame.style.left = "4px", this.dom.frame.style.textAlign = "left", this.dom.textArea.style.textAlign =
					"left", this.dom.textArea.style.left = this.options.iconSize + 15 + "px", this.dom.textArea.style.right = "",
					this.svg.style.left = "0px", this.svg.style.right = "") : (this.dom.frame.style.right = "4px", this.dom.frame.style
					.textAlign = "right", this.dom.textArea.style.textAlign = "right", this.dom.textArea.style.right = this.options.iconSize +
					15 + "px", this.dom.textArea.style.left = "", this.svg.style.right = "0px", this.svg.style.left = ""),
				"top-left" == this.options[this.side].position || "top-right" == this.options[this.side].position) this.dom.frame
				.style.top = 4 - +this.body.dom.center.style.top.replace("px", "") + "px", this.dom.frame.style.bottom = "";
			else {
				var a = this.body.domProps.center.height - this.body.domProps.centerContainer.height;
				this.dom.frame.style.bottom = 4 + a + +this.body.dom.center.style.top.replace("px", "") + "px", this.dom.frame.style
					.top = ""
			}!1 == this.options.icons ? (this.dom.frame.style.width = this.dom.textArea.offsetWidth + 10 + "px", this.dom.textArea
				.style.right = "", this.dom.textArea.style.left = "", this.svg.style.width = "0px") : (this.dom.frame.style.width =
				this.options.iconSize + 15 + this.dom.textArea.offsetWidth + 10 + "px", this.drawLegendIcons());
			var r = "";
			for (o = 0; o < t.length; o++) n = t[o], !0 == this.groups[n].visible && (void 0 === this.linegraphOptions.visibility[
				n] || !0 == this.linegraphOptions.visibility[n]) && (r += this.groups[n].content + "<br />");
			this.dom.textArea.innerHTML = r, this.dom.textArea.style.lineHeight = .75 * this.options.iconSize + this.options.iconSpacing +
				"px"
		}
	}, bt.prototype.drawLegendIcons = function() {
		if (this.dom.frame.parentNode) {
			var e = Object.keys(this.groups);
			e.sort(function(e, t) {
				return e < t ? -1 : 1
			}), io.resetElements(this.svgElements);
			var t = window.getComputedStyle(this.dom.frame).paddingTop,
				o = +t.replace("px", ""),
				n = this.options.iconSize,
				a = .75 * this.options.iconSize,
				r = o + .5 * a + 3;
			this.svg.style.width = n + 5 + o + "px";
			for (var s = 0, d; s < e.length; s++) d = e[s], !0 == this.groups[d].visible && (void 0 === this.linegraphOptions.visibility[
				d] || !0 == this.linegraphOptions.visibility[d]) && (this.groups[d].getLegend(n, a, this.framework, o, r), r +=
				a + this.options.iconSpacing)
		}
	};
	var Fi = bt,
		Gi = ce(Ri),
		Wi = yi.DataSet,
		Ui = yi.DataView,
		ji = "__ungrouped__";
	vt.prototype = new Qo, vt.prototype._create = function() {
		var e = document.createElement("div");
		e.className = "vis-line-graph", this.dom.frame = e, this.svg = document.createElementNS(
				"http://www.w3.org/2000/svg", "svg"), this.svg.style.position = "relative", this.svg.style.height = ("" + this.options
				.graphHeight).replace("px", "") + "px", this.svg.style.display = "block", e.appendChild(this.svg), this.options.dataAxis
			.orientation = "left", this.yAxisLeft = new Gi(this.body, this.options.dataAxis, this.svg, this.options.groups),
			this.options.dataAxis.orientation = "right", this.yAxisRight = new Gi(this.body, this.options.dataAxis, this.svg,
				this.options.groups), delete this.options.dataAxis.orientation, this.legendLeft = new Fi(this.body, this.options.legend,
				"left", this.options.groups), this.legendRight = new Fi(this.body, this.options.legend, "right", this.options.groups),
			this.show()
	}, vt.prototype.setOptions = function(e) {
		if (e) {
			e.graphHeight === void 0 && e.height !== void 0 ? (this.updateSVGheight = !0, this.updateSVGheightOnResize = !0) :
				this.body.domProps.centerContainer.height !== void 0 && e.graphHeight !== void 0 && parseInt((e.graphHeight + "")
					.replace("px", "")) < this.body.domProps.centerContainer.height && (this.updateSVGheight = !0), Ko.selectiveDeepExtend(
					["sampling", "defaultGroup", "stack", "height", "graphHeight", "yAxisOrientation", "style", "barChart",
						"dataAxis", "sort", "groups"
					], this.options, e), Ko.mergeOptions(this.options, e, "interpolation"), Ko.mergeOptions(this.options, e,
					"drawPoints"), Ko.mergeOptions(this.options, e, "shaded"), Ko.mergeOptions(this.options, e, "legend"), e.interpolation &&
				"object" == Le(e.interpolation) && e.interpolation.parametrization && ("uniform" == e.interpolation.parametrization ?
					this.options.interpolation.alpha = 0 : "chordal" == e.interpolation.parametrization ? this.options.interpolation
					.alpha = 1 : (this.options.interpolation.parametrization = "centripetal", this.options.interpolation.alpha = .5)
				), this.yAxisLeft && e.dataAxis !== void 0 && (this.yAxisLeft.setOptions(this.options.dataAxis), this.yAxisRight.setOptions(
					this.options.dataAxis)), this.legendLeft && e.legend !== void 0 && (this.legendLeft.setOptions(this.options.legend),
					this.legendRight.setOptions(this.options.legend)), this.groups.hasOwnProperty(ji) && this.groups[ji].setOptions(
					e)
		}
		this.dom.frame && (this.forceGraphUpdate = !0, this.body.emitter.emit("_change", {
			queue: !0
		}))
	}, vt.prototype.hide = function() {
		this.dom.frame.parentNode && this.dom.frame.parentNode.removeChild(this.dom.frame)
	}, vt.prototype.show = function() {
		this.dom.frame.parentNode || this.body.dom.center.appendChild(this.dom.frame)
	}, vt.prototype.setItems = function(e) {
		var t = this,
			o = this.itemsData,
			n;
		if (!e) this.itemsData = null;
		else if (e instanceof Wi || e instanceof Ui) this.itemsData = e;
		else throw new TypeError("Data must be an instance of DataSet or DataView");
		if (o && (Ko.forEach(this.itemListeners, function(e, t) {
				o.off(t, e)
			}), n = o.getIds(), this._onRemove(n)), this.itemsData) {
			var i = this.id;
			Ko.forEach(this.itemListeners, function(e, o) {
				t.itemsData.on(o, e, i)
			}), n = this.itemsData.getIds(), this._onAdd(n)
		}
	}, vt.prototype.setGroups = function(e) {
		var t = this,
			o;
		if (this.groupsData) {
			Ko.forEach(this.groupListeners, function(e, o) {
				t.groupsData.off(o, e)
			}), o = this.groupsData.getIds(), this.groupsData = null;
			for (var n = 0; n < o.length; n++) this._removeGroup(o[n])
		}
		if (!e) this.groupsData = null;
		else if (e instanceof Wi || e instanceof Ui) this.groupsData = e;
		else throw new TypeError("Data must be an instance of DataSet or DataView");
		if (this.groupsData) {
			var a = this.id;
			Ko.forEach(this.groupListeners, function(e, o) {
				t.groupsData.on(o, e, a)
			}), o = this.groupsData.getIds(), this._onAddGroups(o)
		}
	}, vt.prototype._onUpdate = function(e) {
		this._updateAllGroupData(e)
	}, vt.prototype._onAdd = function(e) {
		this._onUpdate(e)
	}, vt.prototype._onRemove = function(e) {
		this._onUpdate(e)
	}, vt.prototype._onUpdateGroups = function(e) {
		this._updateAllGroupData(null, e)
	}, vt.prototype._onAddGroups = function(e) {
		this._onUpdateGroups(e)
	}, vt.prototype._onRemoveGroups = function(e) {
		for (var t = 0; t < e.length; t++) this._removeGroup(e[t]);
		this.forceGraphUpdate = !0, this.body.emitter.emit("_change", {
			queue: !0
		})
	}, vt.prototype._removeGroup = function(e) {
		this.groups.hasOwnProperty(e) && ("right" == this.groups[e].options.yAxisOrientation ? (this.yAxisRight.removeGroup(
			e), this.legendRight.removeGroup(e), this.legendRight.redraw()) : (this.yAxisLeft.removeGroup(e), this.legendLeft
			.removeGroup(e), this.legendLeft.redraw()), delete this.groups[e])
	}, vt.prototype._updateGroup = function(e, t) {
		this.groups.hasOwnProperty(t) ? (this.groups[t].update(e), "right" == this.groups[t].options.yAxisOrientation ? (
			this.yAxisRight.updateGroup(t, this.groups[t]), this.legendRight.updateGroup(t, this.groups[t]), this.yAxisLeft.removeGroup(
				t), this.legendLeft.removeGroup(t)) : (this.yAxisLeft.updateGroup(t, this.groups[t]), this.legendLeft.updateGroup(
			t, this.groups[t]), this.yAxisRight.removeGroup(t), this.legendRight.removeGroup(t))) : (this.groups[t] = new Ni(
			e, t, this.options, this.groupsUsingDefaultStyles), "right" == this.groups[t].options.yAxisOrientation ? (this.yAxisRight
			.addGroup(t, this.groups[t]), this.legendRight.addGroup(t, this.groups[t])) : (this.yAxisLeft.addGroup(t, this.groups[
			t]), this.legendLeft.addGroup(t, this.groups[t]))), this.legendLeft.redraw(), this.legendRight.redraw()
	}, vt.prototype._updateAllGroupData = function(e, t) {
		if (null != this.itemsData) {
			var o = {},
				n = this.itemsData.get(),
				a = this.itemsData._fieldId,
				r = {};
			e && e.map(function(e) {
				r[e] = e
			});
			for (var s = {}, d = 0; d < n.length; d++) {
				var l = n[d],
					p = l.group;
				(null === p || p === void 0) && (p = ji), s.hasOwnProperty(p) ? s[p]++ : s[p] = 1
			}
			var m = {};
			if (!t && e)
				for (p in this.groups)
					if (this.groups.hasOwnProperty(p)) {
						f = this.groups[p];
						var u = f.getItems();
						o[p] = u.filter(function(e) {
							return m[e[a]] = e[a], e[a] !== r[e[a]]
						});
						var c = s[p];
						s[p] -= o[p].length, o[p].length < c && (o[p][c - 1] = {})
					} for (d = 0; d < n.length; d++)
				if (l = n[d], p = l.group, (null === p || void 0 === p) && (p = ji), !(!t && e && l[a] !== r[l[a]] && m.hasOwnProperty(
						l[a]))) {
					o.hasOwnProperty(p) || (o[p] = Array(s[p]));
					var h = Ko.bridgeObject(l);
					h.x = Ko.convert(l.x, "Date"), h.end = Ko.convert(l.end, "Date"), h.orginalY = l.y, h.y = +l.y, h[a] = l[a];
					var g = o[p].length - s[p]--;
					o[p][g] = h
				} for (p in this.groups) this.groups.hasOwnProperty(p) && (o.hasOwnProperty(p) || (o[p] = []));
			for (p in o)
				if (o.hasOwnProperty(p))
					if (0 == o[p].length) this.groups.hasOwnProperty(p) && this._removeGroup(p);
					else {
						var f = void 0;
						null != this.groupsData && (f = this.groupsData.get(p)), null == f && (f = {
							id: p,
							content: this.options.defaultGroup + p
						}), this._updateGroup(f, p), this.groups[p].setItems(o[p])
					} this.forceGraphUpdate = !0, this.body.emitter.emit("_change", {
				queue: !0
			})
		}
	}, vt.prototype.redraw = function() {
		var e = !1;
		this.props.width = this.dom.frame.offsetWidth, this.props.height = this.body.domProps.centerContainer.height - this
			.body.domProps.border.top - this.body.domProps.border.bottom, e = this._isResized() || e;
		var t = this.body.range.end - this.body.range.start,
			o = t != this.lastVisibleInterval;
		if (this.lastVisibleInterval = t, !0 == e && (this.svg.style.width = Ko.option.asSize(3 * this.props.width), this.svg
				.style.left = Ko.option.asSize(-this.props.width), (-1 != (this.options.height + "").indexOf("%") || !0 == this.updateSVGheightOnResize) &&
				(this.updateSVGheight = !0)), !0 == this.updateSVGheight ? (this.options.graphHeight != this.props.height + "px" &&
				(this.options.graphHeight = this.props.height + "px", this.svg.style.height = this.props.height + "px"), this.updateSVGheight = !
				1) : this.svg.style.height = ("" + this.options.graphHeight).replace("px", "") + "px", !0 == e || !0 == o || !0 ==
			this.abortedGraphUpdate || !0 == this.forceGraphUpdate) e = this._updateGraph() || e, this.forceGraphUpdate = !1;
		else if (0 != this.lastStart) {
			var n = this.body.range.start - this.lastStart,
				i = this.body.range.end - this.body.range.start;
			if (0 != this.props.width) {
				var a = this.props.width / i;
				this.svg.style.left = -this.props.width - n * a + "px"
			}
		}
		return this.legendLeft.redraw(), this.legendRight.redraw(), e
	}, vt.prototype._getSortedGroupIds = function() {
		var e = [];
		for (var t in this.groups)
			if (this.groups.hasOwnProperty(t)) {
				var o = this.groups[t];
				!0 == o.visible && (this.options.groups.visibility[t] === void 0 || !0 == this.options.groups.visibility[t]) && e
					.push({
						id: t,
						zIndex: o.options.zIndex
					})
			} Ko.insertSort(e, function(e, t) {
			var o = e.zIndex,
				n = t.zIndex;
			return void 0 === o && (o = 0), void 0 === n && (n = 0), o == n ? 0 : o < n ? -1 : 1
		});
		for (var n = Array(e.length), a = 0; a < e.length; a++) n[a] = e[a].id;
		return n
	}, vt.prototype._updateGraph = function() {
		if (io.prepareElements(this.svgElements), 0 != this.props.width && null != this.itemsData) {
			var e = {},
				t = !1,
				o = this.body.util.toGlobalTime(-this.body.domProps.root.width),
				n = this.body.util.toGlobalTime(2 * this.body.domProps.root.width),
				a = this._getSortedGroupIds(),
				r, s;
			if (0 < a.length) {
				var d = {};
				for (this._getRelevantData(a, d, o, n), this._applySampling(a, d), s = 0; s < a.length; s++) this._convertXcoordinates(
					d[a[s]]);
				if (this._getYRanges(a, d, e), t = this._updateYAxis(a, e), !0 == t) return io.cleanupElements(this.svgElements),
					this.abortedGraphUpdate = !0, !0;
				this.abortedGraphUpdate = !1;
				var l;
				for (s = 0; s < a.length; s++) r = this.groups[a[s]], !0 !== this.options.stack || "line" !== this.options.style ||
					null != r.options.excludeFromStacking && r.options.excludeFromStacking || (null != l && (this._stack(d[r.id], d[
						l.id]), !0 == r.options.shaded.enabled && "group" !== r.options.shaded.orientation && ("top" == r.options.shaded
						.orientation && "group" !== l.options.shaded.orientation ? (l.options.shaded.orientation = "group", l.options
							.shaded.groupId = r.id) : (r.options.shaded.orientation = "group", r.options.shaded.groupId = l.id))), l = r),
					this._convertYcoordinates(d[a[s]], r);
				var p = {};
				for (s = 0; s < a.length; s++)
					if (r = this.groups[a[s]], "line" === r.options.style && !0 == r.options.shaded.enabled) {
						var m = d[a[s]];
						if (null == m || 0 == m.length) continue;
						if (p.hasOwnProperty(a[s]) || (p[a[s]] = Li.calcPath(m, r)), "group" === r.options.shaded.orientation) {
							var u = r.options.shaded.groupId;
							if (-1 === a.indexOf(u)) {
								console.log(r.id + ": Unknown shading group target given:" + u);
								continue
							}
							p.hasOwnProperty(u) || (p[u] = Li.calcPath(d[u], this.groups[u])), Li.drawShading(p[a[s]], r, p[u], this.framework)
						} else Li.drawShading(p[a[s]], r, void 0, this.framework)
					} for (Hi.draw(a, d, this.framework), s = 0; s < a.length; s++)
					if (r = this.groups[a[s]], 0 < d[a[s]].length) switch (r.options.style) {
						case "line":
							p.hasOwnProperty(a[s]) || (p[a[s]] = Li.calcPath(d[a[s]], r)), Li.draw(p[a[s]], r, this.framework);
						case "point":
						case "points":
							("point" == r.options.style || "points" == r.options.style || !0 == r.options.drawPoints.enabled) && Ai.draw(
								d[a[s]], r, this.framework);
							break;
						case "bar":
						default:
					}
			}
		}
		return io.cleanupElements(this.svgElements), !1
	}, vt.prototype._stack = function(e, t) {
		var o, n, i, a, r;
		o = 0;
		for (var s = 0; s < e.length; s++) {
			a = void 0, r = void 0;
			for (var d = o; d < t.length; d++)
				if (t[d].x === e[s].x) {
					a = t[d], r = t[d], o = d;
					break
				} else if (t[d].x > e[s].x) {
				r = t[d], a = 0 == d ? r : t[d - 1], o = d;
				break
			}
			r === void 0 && (a = t[t.length - 1], r = t[t.length - 1]), n = r.x - a.x, i = r.y - a.y, e[s].y = 0 == n ? e[s].orginalY +
				r.y : e[s].orginalY + i / n * (e[s].x - a.x) + a.y
		}
	}, vt.prototype._getRelevantData = function(e, t, o, n) {
		var a, r, s, d;
		if (0 < e.length)
			for (r = 0; r < e.length; r++) {
				a = this.groups[e[r]];
				var l = a.getItems();
				if (!0 == a.options.sort) {
					var p = function(e, t) {
							return e.getTime() == t.getTime() ? 0 : e < t ? -1 : 1
						},
						m = Pt(0, Ko.binarySearchValue(l, o, "x", "before", p)),
						u = Yt(l.length, Ko.binarySearchValue(l, n, "x", "after", p) + 1);
					0 >= u && (u = l.length);
					var c = Array(u - m);
					for (s = m; s < u; s++) d = a.itemsData[s], c[s - m] = d;
					t[e[r]] = c
				} else t[e[r]] = a.itemsData
			}
	}, vt.prototype._applySampling = function(e, t) {
		var o;
		if (0 < e.length)
			for (var n = 0; n < e.length; n++)
				if (o = this.groups[e[n]], !0 == o.options.sampling) {
					var a = t[e[n]];
					if (0 < a.length) {
						var r = 1,
							s = a.length,
							d = this.body.util.toGlobalScreen(a[a.length - 1].x) - this.body.util.toGlobalScreen(a[0].x);
						r = Yt(Ct(.2 * s), Pt(1, xt(s / d)));
						for (var l = Array(s), p = 0, m; p < s; p += r) m = xt(p / r), l[m] = a[p];
						t[e[n]] = l.splice(0, xt(s / r))
					}
				}
	}, vt.prototype._getYRanges = function(e, t, o) {
		var n = [],
			a = [],
			r, s, d, l;
		if (0 < e.length) {
			for (d = 0; d < e.length; d++) r = t[e[d]], l = this.groups[e[d]].options, 0 < r.length && (s = this.groups[e[d]],
				!0 === l.stack && "bar" === l.style ? "left" === l.yAxisOrientation ? n = n.concat(r) : a = a.concat(r) : o[e[d]] =
				s.getYRange(r, e[d]));
			Hi.getStackedYRange(n, o, e, "__barStackLeft", "left"), Hi.getStackedYRange(a, o, e, "__barStackRight", "right")
		}
	}, vt.prototype._updateYAxis = function(e, t) {
		var o = !1,
			n = !1,
			a = !1,
			r = 1e9,
			s = 1e9,
			d = -1e9,
			l = -1e9,
			p, m;
		if (0 < e.length) {
			for (var u = 0, c; u < e.length; u++) c = this.groups[e[u]], c && "right" != c.options.yAxisOrientation ? (n = !0,
				r = 1e9, d = -1e9) : c && c.options.yAxisOrientation && (a = !0, s = 1e9, l = -1e9);
			for (u = 0; u < e.length; u++) t.hasOwnProperty(e[u]) && !0 !== t[e[u]].ignore && (p = t[e[u]].min, m = t[e[u]].max,
				"right" == t[e[u]].yAxisOrientation ? (a = !0, s = s > p ? p : s, l = l < m ? m : l) : (n = !0, r = r > p ? p :
					r, d = d < m ? m : d));
			!0 == n && this.yAxisLeft.setRange(r, d), !0 == a && this.yAxisRight.setRange(s, l)
		}
		o = this._toggleAxisVisiblity(n, this.yAxisLeft) || o, o = this._toggleAxisVisiblity(a, this.yAxisRight) || o, !0 ==
			a && !0 == n ? (this.yAxisLeft.drawIcons = !0, this.yAxisRight.drawIcons = !0) : (this.yAxisLeft.drawIcons = !1,
				this.yAxisRight.drawIcons = !1), this.yAxisRight.master = !n, this.yAxisRight.masterAxis = this.yAxisLeft, !1 ==
			this.yAxisRight.master ? (this.yAxisLeft.lineOffset = !0 == a ? this.yAxisRight.width : 0, o = this.yAxisLeft.redraw() ||
				o, o = this.yAxisRight.redraw() || o) : o = this.yAxisRight.redraw() || o;
		var h = ["__barStackLeft", "__barStackRight", "__lineStackLeft", "__lineStackRight"];
		for (u = 0; u < h.length; u++) - 1 != e.indexOf(h[u]) && e.splice(e.indexOf(h[u]), 1);
		return o
	}, vt.prototype._toggleAxisVisiblity = function(e, t) {
		var o = !1;
		return !1 == e ? t.dom.frame.parentNode && !1 == t.hidden && (t.hide(), o = !0) : !t.dom.frame.parentNode && !0 ==
			t.hidden && (t.show(), o = !0), o
	}, vt.prototype._convertXcoordinates = function(e) {
		for (var t = this.body.util.toScreen, o = 0; o < e.length; o++) e[o].screen_x = t(e[o].x) + this.props.width, e[o].screen_y =
			e[o].y, e[o].screen_end = null == e[o].end ? void 0 : t(e[o].end) + this.props.width
	}, vt.prototype._convertYcoordinates = function(e, t) {
		var o = this.yAxisLeft,
			n = +this.svg.style.height.replace("px", "");
		"right" == t.options.yAxisOrientation && (o = this.yAxisRight);
		for (var a = 0; a < e.length; a++) e[a].screen_y = xt(o.convertValue(e[a].y));
		t.setZeroPosition(Yt(n, o.convertValue(0)))
	};
	var Vi = vt,
		zi = "string",
		Bi = "boolean",
		qi = "number",
		Zi = "date",
		Xi = "object",
		Ki = "moment",
		Qi = "any",
		$i = Object.freeze({
			allOptions: {
				configure: {
					enabled: {
						boolean: Bi
					},
					filter: {
						boolean: Bi,
						function: "function"
					},
					container: {
						dom: "dom"
					},
					__type__: {
						object: Xi,
						boolean: Bi,
						function: "function"
					}
				},
				alignCurrentTime: {
					string: zi,
					undefined: "undefined"
				},
				yAxisOrientation: {
					string: ["left", "right"]
				},
				defaultGroup: {
					string: zi
				},
				sort: {
					boolean: Bi
				},
				sampling: {
					boolean: Bi
				},
				stack: {
					boolean: Bi
				},
				graphHeight: {
					string: zi,
					number: qi
				},
				shaded: {
					enabled: {
						boolean: Bi
					},
					orientation: {
						string: ["bottom", "top", "zero", "group"]
					},
					groupId: {
						object: Xi
					},
					__type__: {
						boolean: Bi,
						object: Xi
					}
				},
				style: {
					string: ["line", "bar", "points"]
				},
				barChart: {
					width: {
						number: qi
					},
					minWidth: {
						number: qi
					},
					sideBySide: {
						boolean: Bi
					},
					align: {
						string: ["left", "center", "right"]
					},
					__type__: {
						object: Xi
					}
				},
				interpolation: {
					enabled: {
						boolean: Bi
					},
					parametrization: {
						string: ["centripetal", "chordal", "uniform"]
					},
					alpha: {
						number: qi
					},
					__type__: {
						object: Xi,
						boolean: Bi
					}
				},
				drawPoints: {
					enabled: {
						boolean: Bi
					},
					onRender: {
						function: "function"
					},
					size: {
						number: qi
					},
					style: {
						string: ["square", "circle"]
					},
					__type__: {
						object: Xi,
						boolean: Bi,
						function: "function"
					}
				},
				dataAxis: {
					showMinorLabels: {
						boolean: Bi
					},
					showMajorLabels: {
						boolean: Bi
					},
					icons: {
						boolean: Bi
					},
					width: {
						string: zi,
						number: qi
					},
					visible: {
						boolean: Bi
					},
					alignZeros: {
						boolean: Bi
					},
					left: {
						range: {
							min: {
								number: qi,
								undefined: "undefined"
							},
							max: {
								number: qi,
								undefined: "undefined"
							},
							__type__: {
								object: Xi
							}
						},
						format: {
							function: "function"
						},
						title: {
							text: {
								string: zi,
								number: qi,
								undefined: "undefined"
							},
							style: {
								string: zi,
								undefined: "undefined"
							},
							__type__: {
								object: Xi
							}
						},
						__type__: {
							object: Xi
						}
					},
					right: {
						range: {
							min: {
								number: qi,
								undefined: "undefined"
							},
							max: {
								number: qi,
								undefined: "undefined"
							},
							__type__: {
								object: Xi
							}
						},
						format: {
							function: "function"
						},
						title: {
							text: {
								string: zi,
								number: qi,
								undefined: "undefined"
							},
							style: {
								string: zi,
								undefined: "undefined"
							},
							__type__: {
								object: Xi
							}
						},
						__type__: {
							object: Xi
						}
					},
					__type__: {
						object: Xi
					}
				},
				legend: {
					enabled: {
						boolean: Bi
					},
					icons: {
						boolean: Bi
					},
					left: {
						visible: {
							boolean: Bi
						},
						position: {
							string: ["top-right", "bottom-right", "top-left", "bottom-left"]
						},
						__type__: {
							object: Xi
						}
					},
					right: {
						visible: {
							boolean: Bi
						},
						position: {
							string: ["top-right", "bottom-right", "top-left", "bottom-left"]
						},
						__type__: {
							object: Xi
						}
					},
					__type__: {
						object: Xi,
						boolean: Bi
					}
				},
				groups: {
					visibility: {
						any: Qi
					},
					__type__: {
						object: Xi
					}
				},
				autoResize: {
					boolean: Bi
				},
				throttleRedraw: {
					number: qi
				},
				clickToUse: {
					boolean: Bi
				},
				end: {
					number: qi,
					date: Zi,
					string: zi,
					moment: Ki
				},
				format: {
					minorLabels: {
						millisecond: {
							string: zi,
							undefined: "undefined"
						},
						second: {
							string: zi,
							undefined: "undefined"
						},
						minute: {
							string: zi,
							undefined: "undefined"
						},
						hour: {
							string: zi,
							undefined: "undefined"
						},
						weekday: {
							string: zi,
							undefined: "undefined"
						},
						day: {
							string: zi,
							undefined: "undefined"
						},
						month: {
							string: zi,
							undefined: "undefined"
						},
						quarter: {
							string: zi,
							undefined: "undefined"
						},
						year: {
							string: zi,
							undefined: "undefined"
						},
						__type__: {
							object: Xi
						}
					},
					majorLabels: {
						millisecond: {
							string: zi,
							undefined: "undefined"
						},
						second: {
							string: zi,
							undefined: "undefined"
						},
						minute: {
							string: zi,
							undefined: "undefined"
						},
						hour: {
							string: zi,
							undefined: "undefined"
						},
						weekday: {
							string: zi,
							undefined: "undefined"
						},
						day: {
							string: zi,
							undefined: "undefined"
						},
						month: {
							string: zi,
							undefined: "undefined"
						},
						quarter: {
							string: zi,
							undefined: "undefined"
						},
						year: {
							string: zi,
							undefined: "undefined"
						},
						__type__: {
							object: Xi
						}
					},
					__type__: {
						object: Xi
					}
				},
				moment: {
					function: "function"
				},
				height: {
					string: zi,
					number: qi
				},
				hiddenDates: {
					start: {
						date: Zi,
						number: qi,
						string: zi,
						moment: Ki
					},
					end: {
						date: Zi,
						number: qi,
						string: zi,
						moment: Ki
					},
					repeat: {
						string: zi
					},
					__type__: {
						object: Xi,
						array: "array"
					}
				},
				locale: {
					string: zi
				},
				locales: {
					__any__: {
						any: Qi
					},
					__type__: {
						object: Xi
					}
				},
				max: {
					date: Zi,
					number: qi,
					string: zi,
					moment: Ki
				},
				maxHeight: {
					number: qi,
					string: zi
				},
				maxMinorChars: {
					number: qi
				},
				min: {
					date: Zi,
					number: qi,
					string: zi,
					moment: Ki
				},
				minHeight: {
					number: qi,
					string: zi
				},
				moveable: {
					boolean: Bi
				},
				multiselect: {
					boolean: Bi
				},
				orientation: {
					string: zi
				},
				showCurrentTime: {
					boolean: Bi
				},
				showMajorLabels: {
					boolean: Bi
				},
				showMinorLabels: {
					boolean: Bi
				},
				start: {
					date: Zi,
					number: qi,
					string: zi,
					moment: Ki
				},
				timeAxis: {
					scale: {
						string: zi,
						undefined: "undefined"
					},
					step: {
						number: qi,
						undefined: "undefined"
					},
					__type__: {
						object: Xi
					}
				},
				width: {
					string: zi,
					number: qi
				},
				zoomable: {
					boolean: Bi
				},
				zoomKey: {
					string: ["ctrlKey", "altKey", "metaKey", ""]
				},
				zoomMax: {
					number: qi
				},
				zoomMin: {
					number: qi
				},
				zIndex: {
					number: qi
				},
				__type__: {
					object: Xi
				}
			},
			configureOptions: {
				global: {
					alignCurrentTime: ["none", "year", "month", "quarter", "week", "isoWeek", "day", "date", "hour", "minute",
						"second"
					],
					sort: !0,
					sampling: !0,
					stack: !1,
					shaded: {
						enabled: !1,
						orientation: ["zero", "top", "bottom", "group"]
					},
					style: ["line", "bar", "points"],
					barChart: {
						width: [50, 5, 100, 5],
						minWidth: [50, 5, 100, 5],
						sideBySide: !1,
						align: ["left", "center", "right"]
					},
					interpolation: {
						enabled: !0,
						parametrization: ["centripetal", "chordal", "uniform"]
					},
					drawPoints: {
						enabled: !0,
						size: [6, 2, 30, 1],
						style: ["square", "circle"]
					},
					dataAxis: {
						showMinorLabels: !0,
						showMajorLabels: !0,
						icons: !1,
						width: [40, 0, 200, 1],
						visible: !0,
						alignZeros: !0,
						left: {
							title: {
								text: "",
								style: ""
							}
						},
						right: {
							title: {
								text: "",
								style: ""
							}
						}
					},
					legend: {
						enabled: !1,
						icons: !0,
						left: {
							visible: !0,
							position: ["top-right", "bottom-right", "top-left", "bottom-left"]
						},
						right: {
							visible: !0,
							position: ["top-right", "bottom-right", "top-left", "bottom-left"]
						}
					},
					autoResize: !0,
					clickToUse: !1,
					end: "",
					format: {
						minorLabels: {
							millisecond: "SSS",
							second: "s",
							minute: "HH:mm",
							hour: "HH:mm",
							weekday: "ddd D",
							day: "D",
							month: "MMM",
							quarter: "[Q]Q",
							year: "YYYY"
						},
						majorLabels: {
							millisecond: "HH:mm:ss",
							second: "D MMMM HH:mm",
							minute: "ddd D MMMM",
							hour: "ddd D MMMM",
							weekday: "MMMM YYYY",
							day: "MMMM YYYY",
							month: "YYYY",
							quarter: "YYYY",
							year: ""
						}
					},
					height: "",
					locale: "",
					max: "",
					maxHeight: "",
					maxMinorChars: [7, 0, 20, 1],
					min: "",
					minHeight: "",
					moveable: !0,
					orientation: ["both", "bottom", "top"],
					showCurrentTime: !1,
					showMajorLabels: !0,
					showMinorLabels: !0,
					start: "",
					width: "100%",
					zoomable: !0,
					zoomKey: ["ctrlKey", "altKey", "metaKey", ""],
					zoomMax: [31536e10, 10, 31536e10, 1],
					zoomMin: [10, 10, 31536e10, 1],
					zIndex: 0
				}
			}
		}),
		Ji = ce($i),
		ea = yi.DataSet,
		ta = yi.DataView,
		oa = ki.Validator,
		na = ki.printStyle,
		ia = Ji.allOptions,
		aa = Ji.configureOptions,
		ra = Di.default;
	wt.prototype = new _i, wt.prototype.setOptions = function(e) {
		var t = oa.validate(e, ia);
		!0 === t && console.log("%cErrors have been found in the supplied options object.", na), _i.prototype.setOptions.call(
			this, e)
	}, wt.prototype.setItems = function(e) {
		var t = null == this.itemsData,
			o;
		if (o = e ? e instanceof ea || e instanceof ta ? e : new ea(e, {
				type: {
					start: "Date",
					end: "Date"
				}
			}) : null, this.itemsData = o, this.linegraph && this.linegraph.setItems(o), t)
			if (null != this.options.start || null != this.options.end) {
				var n = null == this.options.start ? null : this.options.start,
					i = null == this.options.end ? null : this.options.end;
				this.setWindow(n, i, {
					animation: !1
				})
			} else this.fit({
				animation: !1
			})
	}, wt.prototype.setGroups = function(e) {
		var t;
		t = e ? e instanceof ea || e instanceof ta ? e : new ea(e) : null, this.groupsData = t, this.linegraph.setGroups(t)
	}, wt.prototype.getLegend = function(e, t, o) {
		return void 0 === t && (t = 15), void 0 === o && (o = 15), void 0 === this.linegraph.groups[e] ?
			"cannot find group:'" + e + "'" : this.linegraph.groups[e].getLegend(t, o)
	}, wt.prototype.isGroupVisible = function(e) {
		return void 0 !== this.linegraph.groups[e] && this.linegraph.groups[e].visible && (void 0 === this.linegraph.options
			.groups.visibility[e] || !0 == this.linegraph.options.groups.visibility[e])
	}, wt.prototype.getDataRange = function() {
		var e = null,
			t = null;
		for (var o in this.linegraph.groups)
			if (this.linegraph.groups.hasOwnProperty(o) && !0 == this.linegraph.groups[o].visible)
				for (var n = 0; n < this.linegraph.groups[o].itemsData.length; n++) {
					var a = this.linegraph.groups[o].itemsData[n],
						r = Ko.convert(a.x, "Date").valueOf();
					e = null == e ? r : e > r ? r : e, t = null == t ? r : t < r ? r : t
				}
		return {
			min: null == e ? null : new Date(e),
			max: null == t ? null : new Date(t)
		}
	}, wt.prototype.getEventProperties = function(e) {
		var t = e.center ? e.center.x : e.clientX,
			o = e.center ? e.center.y : e.clientY,
			n = t - Ko.getAbsoluteLeft(this.dom.centerContainer),
			i = o - Ko.getAbsoluteTop(this.dom.centerContainer),
			a = this._toTime(n),
			r = vi.customTimeFromTarget(e),
			s = Ko.getTarget(e),
			d = null;
		Ko.hasParent(s, this.timeAxis.dom.foreground) ? d = "axis" : this.timeAxis2 && Ko.hasParent(s, this.timeAxis2.dom.foreground) ?
			d = "axis" : Ko.hasParent(s, this.linegraph.yAxisLeft.dom.frame) ? d = "data-axis" : Ko.hasParent(s, this.linegraph
				.yAxisRight.dom.frame) ? d = "data-axis" : Ko.hasParent(s, this.linegraph.legendLeft.dom.frame) ? d = "legend" :
			Ko.hasParent(s, this.linegraph.legendRight.dom.frame) ? d = "legend" : null == r ? Ko.hasParent(s, this.currentTime
				.bar) ? d = "current-time" : Ko.hasParent(s, this.dom.center) && (d = "background") : d = "custom-time";
		var l = [],
			p = this.linegraph.yAxisLeft,
			m = this.linegraph.yAxisRight;
		return !p.hidden && 0 < this.itemsData.length && l.push(p.screenToValue(i)), !m.hidden && 0 < this.itemsData.length &&
			l.push(m.screenToValue(i)), {
				event: e,
				what: d,
				pageX: e.srcEvent ? e.srcEvent.pageX : e.pageX,
				pageY: e.srcEvent ? e.srcEvent.pageY : e.pageY,
				x: n,
				y: i,
				time: a,
				value: l
			}
	}, wt.prototype._createConfigurator = function() {
		return new ra(this, this.dom.container, aa)
	};
	var sa = Ko,
		da = io,
		la = yi.DataSet,
		pa = yi.DataView,
		ma = yi.Queue,
		ua = la,
		ca = pa,
		ha = ma,
		ga = st,
		fa = wt,
		ya = {
			Core: _i,
			DateUtil: $o,
			Range: hn,
			stack: In,
			TimeStep: xn,
			components: {
				items: {
					Item: Bn,
					BackgroundItem: Kn,
					BoxItem: qn,
					PointItem: Zn,
					RangeItem: Xn
				},
				BackgroundGroup: Vn,
				Component: Qo,
				CurrentTime: En,
				CustomTime: vi,
				DataAxis: Gi,
				DataScale: Ii,
				GraphGroup: Ni,
				Group: jn,
				ItemSet: wi,
				Legend: Fi,
				LineGraph: Vi,
				TimeAxis: bi
			}
		},
		_a = Xo,
		ba = _n,
		va = Cn;
	e.DOMutil = da, e.DataSet = ua, e.DataView = ca, e.Graph2d = fa, e.Hammer = ba, e.Queue = ha, e.Timeline = ga, e.default = {
		util: sa,
		DOMutil: da,
		DataSet: ua,
		DataView: ca,
		Queue: ha,
		Timeline: ga,
		Graph2d: fa,
		timeline: ya,
		moment: _a,
		Hammer: ba,
		keycharm: va
	}, e.keycharm = va, e.moment = _a, e.timeline = ya, e.util = sa, Object.defineProperty(e, "__esModule", {
		value: !0
	})
});
//# sourceMappingURL=vis-timeline-graph2d.min.js.map
