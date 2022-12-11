"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3349], {
        16690: function(e, r, n) {
            n.d(r, {
                Aj: function() {
                    return t.Aj
                },
                w7: function() {
                    return t.w7
                }
            });
            var t = n(47210)
        },
        3349: function(e, r, n) {
            n.d(r, {
                F_: function() {
                    return f
                }
            });
            var t = n(16690),
                u = n(67294);

            function o(e, r, n, t) {
                return new(n || (n = Promise))((function(u, o) {
                    function a(e) {
                        try {
                            c(t.next(e))
                        } catch (r) {
                            o(r)
                        }
                    }

                    function i(e) {
                        try {
                            c(t.throw(e))
                        } catch (r) {
                            o(r)
                        }
                    }

                    function c(e) {
                        var r;
                        e.done ? u(e.value) : (r = e.value, r instanceof n ? r : new n((function(e) {
                            e(r)
                        }))).then(a, i)
                    }
                    c((t = t.apply(e, r || [])).next())
                }))
            }

            function a(e, r) {
                var n, t, u, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & u[0]) throw u[1];
                        return u[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function i(o) {
                    return function(i) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, t && (u = 2 & o[0] ? t.return : o[0] ? t.throw || ((u = t.return) && u.call(t), 0) : t.next) && !(u = u.call(t, o[1])).done) return u;
                                switch (t = 0, u && (o = [2 & o[0], u.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        u = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, t = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(u = (u = a.trys).length > 0 && u[u.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!u || o[1] > u[0] && o[1] < u[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < u[1]) {
                                            a.label = u[1], u = o;
                                            break
                                        }
                                        if (u && a.label < u[2]) {
                                            a.label = u[2], a.ops.push(o);
                                            break
                                        }
                                        u[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = r.call(e, a)
                            } catch (i) {
                                o = [6, i], t = 0
                            } finally {
                                n = u = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, i])
                    }
                }
            }
            var i = function() {
                    return i = Object.assign || function(e) {
                        for (var r, n = 1, t = arguments.length; n < t; n++)
                            for (var u in r = arguments[n]) Object.prototype.hasOwnProperty.call(r, u) && (e[u] = r[u]);
                        return e
                    }, i.apply(this, arguments)
                },
                c = function(e) {
                    return {
                        loading: void 0 === e || null === e,
                        value: e
                    }
                },
                l = function(e) {
                    var r = e ? e() : void 0,
                        n = (0, u.useReducer)((function(e, r) {
                            switch (r.type) {
                                case "error":
                                    return i(i({}, e), {
                                        error: r.error,
                                        loading: !1,
                                        value: void 0
                                    });
                                case "reset":
                                    return c(r.defaultValue);
                                case "value":
                                    return i(i({}, e), {
                                        error: void 0,
                                        loading: !1,
                                        value: r.value
                                    });
                                default:
                                    return e
                            }
                        }), c(r)),
                        t = n[0],
                        o = n[1],
                        a = function() {
                            var r = e ? e() : void 0;
                            o({
                                type: "reset",
                                defaultValue: r
                            })
                        },
                        l = function(e) {
                            o({
                                type: "error",
                                error: e
                            })
                        },
                        f = function(e) {
                            o({
                                type: "value",
                                value: e
                            })
                        };
                    return (0, u.useMemo)((function() {
                        return {
                            error: t.error,
                            loading: t.loading,
                            reset: a,
                            setError: l,
                            setValue: f,
                            value: t.value
                        }
                    }), [t.error, t.loading, a, l, f, t.value])
                },
                f = function(e, r) {
                    var n = l((function() {
                            return e.currentUser
                        })),
                        i = n.error,
                        c = n.loading,
                        f = n.setError,
                        s = n.setValue,
                        v = n.value;
                    (0, u.useEffect)((function() {
                        var n = (0, t.Aj)(e, (function(e) {
                            return o(void 0, void 0, void 0, (function() {
                                var n;
                                return a(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (!(null === r || void 0 === r ? void 0 : r.onUserChanged)) return [3, 4];
                                            t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, r.onUserChanged(e)];
                                        case 2:
                                            return t.sent(), [3, 4];
                                        case 3:
                                            return n = t.sent(), f(n), [3, 4];
                                        case 4:
                                            return s(e), [2]
                                    }
                                }))
                            }))
                        }), f);
                        return function() {
                            n()
                        }
                    }), [e]);
                    var d = [v, c, i];
                    return (0, u.useMemo)((function() {
                        return d
                    }), d)
                }
        }
    }
]);