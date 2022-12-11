"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [47077], {
        98435: function(e, t, r) {
            var n = r(59499),
                i = r(67294),
                o = r(27444),
                s = r(85893);

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const a = i.memo((e => (0, s.jsx)(o.Z, l(l({}, e), {}, {
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.1051 3.90453C10.1051 2.84042 10.9755 2 12.0215 2H12.1183C13.7773 2 15.1446 3.33088 15.1446 5V9H18.9711C21.2014 9 22.6959 11.3321 21.6755 13.3463L18.1295 20.3463C17.6137 21.3646 16.5645 22 15.4251 22H11.3546C11.1082 22 10.8627 21.9702 10.6236 21.9112L6.93101 21H5.02628C3.36726 21 2 19.6691 2 18V12C2 10.3309 3.36726 9 5.02628 9H7.19669L9.66081 5.35177C9.95107 4.92203 10.1051 4.41848 10.1051 3.90453ZM6.05257 11H5.02628C4.44713 11 4 11.46 4 12V18C4 18.54 4.44713 19 5.02628 19H6.05257V11ZM8.05257 19.2168V11.3061L11.3182 6.47121C11.8129 5.73871 12.0857 4.88122 12.1041 4H12.1183C12.6974 4 13.1446 4.45998 13.1446 5V9H12.1183C11.566 9 11.1183 9.44772 11.1183 10C11.1183 10.5523 11.566 11 12.1183 11H18.9711C19.7534 11 20.2183 11.7971 19.8914 12.4425L16.3454 19.4425C16.1747 19.7794 15.8207 20 15.4251 20H11.3546C11.2696 20 11.185 19.9897 11.1027 19.9694L8.05257 19.2168Z"
                })
            }))));
            t.Z = a
        },
        80618: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return u
                }
            });
            var n = r(59499),
                i = (r(67294), r(30181)),
                o = r(49597),
                s = r(85893);
            var c = e => {
                let {
                    children: t
                } = e;
                const r = (0, i.Z)();
                if (void 0 === r) return null;
                const {
                    focused: n,
                    filled: c
                } = r;
                return (0, s.jsx)(o.ar, {
                    focused: n || c,
                    children: t
                })
            };
            var l = e => {
                const {
                    mode: t = "dark",
                    isMultiline: r,
                    rowsNo: n,
                    type: c,
                    placeholder: l,
                    hasLabel: a,
                    readOnly: d,
                    autoComplete: u
                } = e, p = (0, i.Z)();
                if (void 0 === p) return null;
                const {
                    focused: h
                } = p;
                return r ? (0, s.jsx)(o.tH, {
                    hasLabel: a,
                    multiline: !0,
                    rows: n,
                    focused: h,
                    mode: t,
                    placeholder: l,
                    readOnly: d,
                    autoComplete: u
                }) : (0, s.jsx)(o.tH, {
                    hasLabel: a,
                    focused: h,
                    mode: t,
                    type: c,
                    placeholder: l,
                    readOnly: d,
                    autoComplete: u
                })
            };

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var u = e => {
                const {
                    mode: t,
                    label: r,
                    type: n,
                    multiline: i,
                    rows: a,
                    onChange: u,
                    value: p,
                    error: h,
                    placeholder: j,
                    readOnly: g,
                    id: x,
                    helperText: f,
                    autoComplete: b,
                    style: m
                } = e;
                return (0, s.jsxs)(o.x9, {
                    value: p,
                    onChange: u,
                    error: h,
                    style: d({
                        position: "relative"
                    }, m),
                    id: x,
                    children: [(0, s.jsx)(c, {
                        children: r
                    }), (0, s.jsx)(l, {
                        hasLabel: !!r,
                        type: n,
                        mode: t,
                        isMultiline: i,
                        rowsNo: a,
                        placeholder: j,
                        readOnly: g,
                        autoComplete: b
                    }), f && (0, s.jsx)("div", {
                        style: {
                            fontSize: 12,
                            textAlign: "left",
                            paddingTop: 4,
                            paddingLeft: 2,
                            opacity: .7
                        },
                        children: f
                    })]
                })
            }
        },
        49597: function(e, t, r) {
            r.d(t, {
                HT: function() {
                    return f
                },
                ar: function() {
                    return g
                },
                tH: function() {
                    return j
                },
                x9: function() {
                    return x
                }
            });
            var n = r(59499),
                i = r(18866),
                o = r(75656),
                s = r(65113),
                c = r(81719),
                l = r(83747),
                a = r(93545);

            function d(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const p = e => ({
                    backgroundColor: e ? l.D.black[50] : l.D.black[60],
                    color: l.D.white[100],
                    "&:hover": {
                        backgroundColor: l.D.black[50]
                    }
                }),
                h = e => ({
                    backgroundColor: e ? l.D.white[90] : l.D.white[80],
                    color: l.D.white[30],
                    "&:hover": {
                        backgroundColor: l.D.white[90]
                    }
                }),
                j = (0, c.ZP)(i.Z, {
                    shouldForwardProp: e => "focused" !== e && "mode" !== e && "hasLabel" !== e
                })((e => {
                    let {
                        focused: t,
                        mode: r,
                        hasLabel: n
                    } = e;
                    return {
                        [`& .${o.Z.input}`]: u(u({
                            borderRadius: 8,
                            outline: 0,
                            padding: n ? "25px 12px 8px" : "16.5px 14px",
                            width: "100%",
                            fontSize: 16,
                            fontWeight: 700,
                            minHeight: 50,
                            border: `2px solid ${t?l.D.brand[100]:"transparent"}`
                        }, "dark" === r && p(t)), "light" === r && h(t)),
                        "&:before": {
                            display: "none"
                        },
                        "&:after": {
                            display: "none"
                        }
                    }
                })),
                g = (0, c.ZP)("label", {
                    shouldForwardProp: e => "focused" !== e
                })((e => {
                    let {
                        focused: t
                    } = e;
                    return {
                        transformOrigin: "left top",
                        overflow: "hidden",
                        fontSize: 16,
                        fontWeight: 700,
                        textOverflow: "ellipsis",
                        pointerEvents: "none",
                        color: l.D.white[30],
                        transition: "color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        transform: t ? "translate(12px, 7px) scale(0.75)" : "translate(12px, 16px) scale(1)"
                    }
                })),
                x = (0, c.ZP)(s.Z)({
                    width: "100%",
                    [`&.${o.Z.error}`]: {
                        [`& .${o.Z.input}`]: {
                            border: `2px solid ${l.D.alert[100]}`
                        },
                        "& label": {
                            color: l.D.alert[100]
                        }
                    },
                    "& textarea": {
                        fontFamily: a.gV
                    }
                }),
                f = (0, c.ZP)(i.Z)((e => {
                    let {
                        theme: {
                            spacing: t
                        }
                    } = e;
                    return {
                        [`& .${o.Z.input}`]: {
                            width: "100% !important",
                            background: "transparent",
                            marginLeft: t(1.5),
                            outline: 0,
                            color: l.D.white[100]
                        }
                    }
                }))
        },
        45221: function(e, t, r) {
            var n = r(59499),
                i = r(4730),
                o = r(70754),
                s = (r(67294), r(83747)),
                c = r(73927),
                l = r(85893);
            const a = ["loading", "children"];

            function d(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            t.Z = e => {
                let {
                    loading: t = !1,
                    children: r
                } = e, n = (0, i.Z)(e, a);
                return t ? (0, l.jsx)(c.V$, u(u({}, n), {}, {
                    disabled: !0,
                    variant: "contained",
                    color: "grey",
                    children: (0, l.jsx)(o.Z, {
                        id: "loadingSpinner",
                        disableShrink: !0,
                        size: 16,
                        variant: "indeterminate",
                        sx: {
                            color: s.D.white[40]
                        }
                    })
                })) : (0, l.jsx)(c.Sn, u(u({
                    variant: "contained"
                }, n), {}, {
                    children: r
                }))
            }
        },
        47077: function(e, t, r) {
            r.r(t), r.d(t, {
                default: function() {
                    return et
                }
            });
            var n = r(67294),
                i = r(59499),
                o = r(62097),
                s = r(49501),
                c = r(92690),
                l = r(52261),
                a = r(21818),
                d = r(12647),
                u = r(52777),
                p = r(86748),
                h = r(18661),
                j = r(81719),
                g = r(83747),
                x = r(93545);
            const f = (0, j.ZP)(u.Z)((e => {
                    let {
                        theme: {
                            palette: t,
                            spacing: r
                        }
                    } = e;
                    return {
                        height: 40,
                        justifyContent: "space-around",
                        padding: r(0, 3),
                        borderBottom: `1px solid ${g.D.black[50]}`,
                        [`& .${p.Z.indicator}`]: {
                            backgroundColor: t.secondary.main,
                            height: 3,
                            borderRadius: 4
                        }
                    }
                })),
                b = (0, j.ZP)(h.Z)((e => {
                    let {
                        theme: {
                            spacing: t
                        }
                    } = e;
                    return {
                        marginBottom: t(),
                        textTransform: "capitalize",
                        fontSize: x.CH.body,
                        fontWeight: 700,
                        color: g.D.white[10],
                        flex: 1,
                        "&.Mui-selected": {
                            color: g.D.white[100]
                        },
                        "&.Mui-focusVisible": {
                            backgroundColor: "rgba(100, 95, 228, 0.32)"
                        },
                        "&:hover:not(.Mui-selected)": {
                            color: g.D.white[30]
                        }
                    }
                }));
            var m = r(43506),
                y = r(23041),
                v = r(73927),
                w = r(74152),
                O = r(4730),
                C = r(47638);
            const P = (0, j.ZP)("div", {
                shouldForwardProp: e => "isDesktop" !== e
            })((e => {
                let {
                    theme: {
                        breakpoints: t,
                        dimensions: r
                    },
                    isDesktop: n
                } = e;
                return {
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "left",
                    maxWidth: n ? 2 * (r.gameThumb.width + 8) : 2 * (r.gameThumb.mobileWidth + 8),
                    [t.up("gp_x9")]: {
                        maxWidth: n ? 2 * (r.gameThumb.width + 12) : 2 * (r.gameThumb.mobileWidth + 12)
                    }
                }
            }));
            var D = r(54505),
                Z = r(85893);
            const k = ["iosFriendly", "androidFriendly", "mobileFriendly"];

            function S(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var F = e => {
                let {
                    games: t,
                    thumbIcon: r,
                    thumbIconFn: i,
                    preventZoom: o
                } = e;
                const s = n.useContext(l.ZP),
                    c = (0, D.Z)(),
                    a = t.map((e => {
                        let {
                            iosFriendly: t,
                            androidFriendly: r,
                            mobileFriendly: n
                        } = e, i = (0, O.Z)(e, k);
                        const o = c ? t : r;
                        return L(L({}, i), {}, {
                            mobileFriendly: n || o
                        })
                    }));
                return (0, Z.jsx)(P, {
                    isDesktop: s.isDesktop,
                    children: a.map((e => (0, Z.jsx)(C.oZ, {
                        game: e,
                        iconFn: () => {
                            i && i(e.id)
                        },
                        icon: r,
                        preventZoom: o
                    }, e.slug)))
                })
            };
            var M = n.memo((e => {
                let {
                    plainFill: t
                } = e;
                return (0, Z.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "120",
                    height: "120",
                    viewBox: "0 0 120 120",
                    fill: "none",
                    children: [(0, Z.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M40.2223 15C33.318 15 27.6735 16.4827 23.1717 19.1231C18.6594 21.7698 15.571 25.4186 13.5457 29.3108C9.59151 36.9098 9.62884 45.499 10.593 50.4327C13.1027 63.2751 22.0972 76.7358 31.5186 86.7905C36.2887 91.8812 41.354 96.3 46.0789 99.4881C50.5575 102.51 55.5562 105 60.0001 105C64.444 105 69.4427 102.51 73.9213 99.4881C78.6462 96.3 83.7115 91.8812 88.4816 86.7905C97.903 76.7358 106.897 63.2751 109.407 50.4327C110.371 45.499 110.409 36.9098 106.455 29.3108C104.429 25.4186 101.341 21.7698 96.8285 19.1231C92.3267 16.4827 86.6822 15 79.7779 15C74.2905 15 69.5521 17.478 65.892 20.5653C63.6296 22.4736 61.6515 24.7163 60.0001 27.0366C58.3487 24.7163 56.3706 22.4736 54.1082 20.5653C50.4481 17.478 45.7097 15 40.2223 15Z",
                        fill: t ? "#2F3148" : "url(#paint0_linear_1861_3922)"
                    }), (0, Z.jsx)("defs", {
                        children: (0, Z.jsxs)("linearGradient", {
                            id: "paint0_linear_1861_3922",
                            x1: "60.0001",
                            y1: "15",
                            x2: "60.0001",
                            y2: "105",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, Z.jsx)("stop", {
                                stopColor: "#B634C1"
                            }), (0, Z.jsx)("stop", {
                                offset: "1",
                                stopColor: "#FF8BA7"
                            })]
                        })
                    })]
                })
            }));
            var _ = () => {
                    const {
                        favourites: e,
                        removeFromFavourite: t
                    } = n.useContext(w.Q), {
                        user: r
                    } = n.useContext(m.S), {
                        openDrawer: i
                    } = n.useContext(a.rf);
                    return e && e.length > 0 ? (0, Z.jsx)(c.Q4, {
                        children: (0, Z.jsx)(F, {
                            games: e,
                            thumbIconFn: t,
                            thumbIcon: (0, Z.jsx)(y.Z, {}),
                            preventZoom: !0
                        })
                    }) : (0, Z.jsxs)(c.S$, {
                        sx: {
                            px: 7
                        },
                        children: [(0, Z.jsx)("div", {
                            style: {
                                height: 120
                            },
                            children: (0, Z.jsx)(M, {
                                plainFill: !!r
                            })
                        }), !r && (0, Z.jsx)(c.Fd, {
                            children: (0, Z.jsx)(s.cC, {
                                id: "common.upDrawer.myGames.favourites.title"
                            })
                        }), (0, Z.jsx)(c.TK, {
                            children: (0, Z.jsx)(s.cC, {
                                id: r ? "common.upDrawer.myGames.favourites.subtitleUser" : "common.upDrawer.myGames.favourites.subtitle"
                            })
                        }), !r && (0, Z.jsx)(v.Sn, {
                            height: 50,
                            variant: "contained",
                            onClick: () => {
                                i("join")
                            },
                            sx: {
                                mt: 2
                            },
                            children: (0, Z.jsx)(s.cC, {
                                id: "common.upDrawer.myGames.favourites.button"
                            })
                        })]
                    })
                },
                T = r(64157),
                H = r(34386),
                E = r(71430);
            var B = () => {
                    const {
                        recent: e,
                        removeFromRecent: t
                    } = n.useContext(E.rh), {
                        spacing: r
                    } = (0, o.Z)(), {
                        services: i
                    } = n.useContext(H.Z), l = null === i || void 0 === i ? void 0 : i.recentlyPlayedService.getGames(), a = e.length > 0 ? e : l;
                    return a && a.length > 0 ? (0, Z.jsx)(c.Q4, {
                        children: (0, Z.jsx)(F, {
                            games: a,
                            thumbIconFn: e.length > 0 ? t : void 0,
                            thumbIcon: e.length > 0 ? (0, Z.jsx)(y.Z, {}) : void 0,
                            preventZoom: !0
                        })
                    }) : (0, Z.jsxs)(c.S$, {
                        children: [(0, Z.jsx)("div", {
                            style: {
                                height: 120
                            },
                            children: (0, Z.jsx)(T.Z, {
                                sx: {
                                    color: g.D.black[50],
                                    width: 120,
                                    height: 120
                                }
                            })
                        }), (0, Z.jsx)("div", {
                            style: {
                                paddingLeft: r(4),
                                paddingRight: r(4),
                                marginTop: r()
                            },
                            children: (0, Z.jsx)(c.TK, {
                                children: (0, Z.jsx)(s.cC, {
                                    id: "common.upDrawer.recentEmpty"
                                })
                            })
                        })]
                    })
                },
                z = r(98435),
                V = r(80541);
            var I = n.memo((e => {
                let {
                    plainFill: t
                } = e;
                return (0, Z.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "120",
                    height: "120",
                    viewBox: "0 0 120 120",
                    fill: "none",
                    children: [(0, Z.jsx)("path", {
                        d: "M12 63.125C12 61.8939 12.2419 60.6748 12.7118 59.5373C13.1817 58.3999 13.8705 57.3664 14.7389 56.4959C15.6072 55.6253 16.638 54.9348 17.7725 54.4636C18.9071 53.9925 20.123 53.75 21.351 53.75C22.579 53.75 23.795 53.9925 24.9295 54.4636C26.064 54.9348 27.0949 55.6253 27.9632 56.4959C28.8315 57.3664 29.5203 58.3999 29.9902 59.5373C30.4602 60.6748 30.702 61.8939 30.702 63.125V100.625C30.702 103.111 29.7169 105.496 27.9632 107.254C26.2095 109.012 23.8311 110 21.351 110C18.871 110 16.4925 109.012 14.7389 107.254C12.9852 105.496 12 103.111 12 100.625V63.125ZM36.9361 62.0812V96.0187C36.935 98.3416 37.5795 100.619 38.7974 102.595C40.0153 104.571 41.7583 106.168 43.8309 107.206L44.1426 107.362C47.6018 109.096 51.4156 109.999 55.2828 110H89.0462C91.9296 110.001 94.7243 109 96.9544 107.168C99.1845 105.335 100.712 102.785 101.277 99.95L108.758 62.45C109.12 60.6367 109.075 58.7656 108.629 56.9715C108.182 55.1774 107.343 53.5051 106.174 52.0751C105.005 50.645 103.533 49.4929 101.866 48.7018C100.199 47.9107 98.3777 47.5002 96.5333 47.5H74.3402V22.5C74.3402 19.1848 73.0266 16.0054 70.6884 13.6612C68.3502 11.317 65.1789 10 61.8721 10C60.2188 10 58.6331 10.6585 57.464 11.8306C56.2949 13.0027 55.6381 14.5924 55.6381 16.25V20.4187C55.6381 25.828 53.8882 31.0913 50.6509 35.4187L41.9233 47.0812C38.686 51.4087 36.9361 56.672 36.9361 62.0812Z",
                        fill: t ? "#2F3148" : "url(#paint0_linear_1861_3955)"
                    }), (0, Z.jsx)("defs", {
                        children: (0, Z.jsxs)("linearGradient", {
                            id: "paint0_linear_1861_3955",
                            x1: "60.5",
                            y1: "10",
                            x2: "60.5",
                            y2: "110",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, Z.jsx)("stop", {
                                stopColor: "#AA3FFF"
                            }), (0, Z.jsx)("stop", {
                                offset: "1",
                                stopColor: "#7ED1FF"
                            })]
                        })
                    })]
                })
            }));
            var U = () => {
                const {
                    liked: e,
                    removeFromLiked: t
                } = n.useContext(V.w3), {
                    spacing: r
                } = (0, o.Z)(), {
                    user: i
                } = n.useContext(m.S), {
                    openDrawer: l
                } = n.useContext(a.rf);
                return e && e.length > 0 ? (0, Z.jsx)(c.Q4, {
                    children: (0, Z.jsx)(F, {
                        games: e,
                        thumbIconFn: t,
                        thumbIcon: (0, Z.jsx)(y.Z, {}),
                        preventZoom: !0
                    })
                }) : (0, Z.jsxs)(c.S$, {
                    sx: {
                        px: 7,
                        textAlign: "center"
                    },
                    children: [(0, Z.jsx)("div", {
                        style: {
                            height: 120
                        },
                        children: (0, Z.jsx)(I, {
                            plainFill: !!i
                        })
                    }), (0, Z.jsx)("div", {
                        style: {
                            paddingLeft: r(4),
                            paddingRight: r(4)
                        },
                        children: (0, Z.jsx)(c.Fd, {
                            children: (0, Z.jsx)(s.cC, {
                                id: "common.upDrawer.myGames.liked.title"
                            })
                        })
                    }), (0, Z.jsx)(c.TK, {
                        children: (0, Z.jsx)(s.cC, {
                            id: i ? "common.upDrawer.myGames.liked.subtitleUser" : "common.upDrawer.myGames.liked.subtitle",
                            values: i ? {
                                icon: (0, Z.jsx)(z.Z, {})
                            } : void 0
                        })
                    }), !i && (0, Z.jsx)(v.Sn, {
                        height: 50,
                        variant: "contained",
                        onClick: () => {
                            l("join")
                        },
                        sx: {
                            mt: 2
                        },
                        children: (0, Z.jsx)(s.cC, {
                            id: "common.upDrawer.myGames.favourites.button"
                        })
                    })]
                })
            };

            function R(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? R(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : R(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var G = () => {
                    const [e, t] = n.useState("favourites"), {
                        openedDrawer: r,
                        openDrawer: i
                    } = n.useContext(a.rf), {
                        analyticsService: u
                    } = n.useContext(H.Z).services, p = (0, o.Z)(), {
                        i18n: h
                    } = (0, s.mV)(), {
                        isDesktop: j
                    } = n.useContext(l.ZP);
                    return (0, Z.jsxs)(c.Jn, A(A({
                        anchor: "right",
                        onClose: () => {
                            i(null)
                        },
                        hideBackdrop: !j,
                        disablePortal: !j,
                        isMobile: !j
                    }, (0, c.uG)(p, !j, r, "myGames")), {}, {
                        children: [(0, Z.jsx)(d.Z, {
                            title: h._({
                                id: "common.upDrawer.myGames.title"
                            })
                        }), (0, Z.jsx)("div", {
                            style: {
                                display: "flex"
                            },
                            children: (0, Z.jsxs)(f, {
                                style: {
                                    width: "100%"
                                },
                                value: e,
                                onChange: (r, n) => {
                                    "recent" === n && "recent" !== e && u.trackMyGamesRecentTabClick(), t(n)
                                },
                                centered: !0,
                                children: [(0, Z.jsx)(b, {
                                    label: h._({
                                        id: "common.upDrawer.myGames.favourites"
                                    }),
                                    value: "favourites"
                                }), (0, Z.jsx)(b, {
                                    label: h._({
                                        id: "common.upDrawer.recent"
                                    }),
                                    value: "recent"
                                }), (0, Z.jsx)(b, {
                                    label: h._({
                                        id: "common.upDrawer.liked"
                                    }),
                                    value: "liked"
                                })]
                            })
                        }), (0, Z.jsxs)(c.qt, {
                            children: [(0, Z.jsx)("div", {
                                hidden: "favourites" !== e,
                                style: {
                                    width: "100%"
                                },
                                children: (0, Z.jsx)(_, {})
                            }), (0, Z.jsx)("div", {
                                hidden: "recent" !== e,
                                style: {
                                    width: "100%"
                                },
                                children: (0, Z.jsx)(B, {})
                            }), (0, Z.jsx)("div", {
                                hidden: "liked" !== e,
                                style: {
                                    width: "100%"
                                },
                                children: (0, Z.jsx)(U, {})
                            })]
                        })]
                    }))
                },
                $ = r(13839);
            const N = (0, j.ZP)("div")((() => ({
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    "& button": {
                        width: "100%"
                    }
                }))),
                Q = (0, j.ZP)("div", {
                    shouldForwardProp: e => "isMobile" !== e
                })((e => {
                    let {
                        theme: {
                            spacing: t,
                            dimensions: r
                        },
                        isMobile: n
                    } = e;
                    return {
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "center",
                        alignItems: "center",
                        padding: t(2),
                        paddingTop: t(7),
                        paddingBottom: n ? r.mobileFooterNav.drawerPlaceholder : 0
                    }
                })),
                W = (0, j.ZP)("div")((() => ({
                    position: "absolute",
                    width: "100%",
                    top: 0,
                    "& img": {
                        width: "100%",
                        zIndex: 0
                    }
                }))),
                J = (0, j.ZP)("div")((() => ({
                    width: "100%",
                    zIndex: 1,
                    background: "linear-gradient(180deg, rgba(24, 25, 40, 0.83) 0%, #181928 100%)",
                    height: "100%",
                    position: "absolute"
                }))),
                X = (0, j.ZP)("div")((e => {
                    let {
                        theme: {
                            spacing: t
                        }
                    } = e;
                    return {
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "center",
                        alignItems: "center",
                        zIndex: 1,
                        position: "absolute",
                        marginTop: t(10),
                        paddingBottom: 80,
                        "@media only screen and (max-height: 400px)": {
                            marginTop: t(2)
                        }
                    }
                })),
                q = (0, j.ZP)("img")((() => ({})));

            function K(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? K(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : K(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var ee = () => {
                const {
                    openedDrawer: e,
                    openDrawer: t
                } = n.useContext(a.rf), r = n.useContext(l.ZP), i = (0, o.Z)(), d = !r.isDesktop;
                return (0, Z.jsx)(c.Jn, Y(Y({
                    anchor: "right",
                    isMobile: d,
                    onClose: () => t(null),
                    hideBackdrop: d,
                    disablePortal: d
                }, (0, c.uG)(i, d, e, "accountConfirmation")), {}, {
                    children: (0, Z.jsx)(N, {
                        children: (0, Z.jsxs)(Q, {
                            isMobile: d,
                            children: [(0, Z.jsx)("div", {
                                style: {
                                    height: 154
                                },
                                children: (0, Z.jsx)(q, {
                                    src: (0, $.ZP)("userportal/ziggy_celebration.png"),
                                    alt: "Ziggy celebration"
                                })
                            }), (0, Z.jsx)(c.mH, {
                                sx: {
                                    px: e => `${e.spacing(5)} !important`,
                                    pt: 3,
                                    textAlign: "center"
                                },
                                children: (0, Z.jsx)(s.cC, {
                                    id: "auth.ui.signupConfirm.title"
                                })
                            }), (0, Z.jsx)(c.Hz, {
                                sx: {
                                    pt: 2,
                                    px: 3
                                },
                                children: (0, Z.jsx)(s.cC, {
                                    id: "auth.ui.signupConfirm.body"
                                })
                            }), (0, Z.jsx)("div", {
                                style: {
                                    width: "100%",
                                    padding: i.spacing(2),
                                    marginTop: i.spacing()
                                },
                                children: (0, Z.jsx)(v.Sn, {
                                    height: 50,
                                    variant: "contained",
                                    onClick: () => {
                                        t(null)
                                    },
                                    children: (0, Z.jsx)(s.cC, {
                                        id: "auth.ui.button.ok"
                                    })
                                })
                            })]
                        })
                    })
                }))
            };

            function te(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? te(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : te(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var ne = () => {
                    const {
                        openedDrawer: e,
                        openDrawer: t
                    } = n.useContext(a.rf), r = n.useContext(l.ZP), i = (0, o.Z)(), d = !r.isDesktop;
                    return (0, Z.jsxs)(c.Jn, re(re({
                        anchor: "right",
                        isMobile: d,
                        onClose: () => t(null),
                        hideBackdrop: d,
                        disablePortal: d
                    }, (0, c.uG)(i, d, e, "disabledAccount")), {}, {
                        children: [(0, Z.jsx)(c.gu, {
                            children: (0, Z.jsx)(v.Qh, {
                                color: "white",
                                onClick: () => t(null),
                                children: (0, Z.jsx)(y.Z, {})
                            })
                        }), (0, Z.jsx)(N, {
                            children: (0, Z.jsxs)(Q, {
                                isMobile: d,
                                children: [(0, Z.jsx)(c.mH, {
                                    sx: {
                                        px: e => `${e.spacing(5)} !important`,
                                        pt: 3,
                                        textAlign: "center"
                                    },
                                    children: (0, Z.jsx)(s.cC, {
                                        id: "auth.ui.disabledAccount.title"
                                    })
                                }), (0, Z.jsx)(c.Hz, {
                                    sx: {
                                        pt: 2,
                                        px: 2
                                    },
                                    children: (0, Z.jsx)(s.cC, {
                                        id: "auth.ui.disabledAccount.body"
                                    })
                                }), (0, Z.jsx)("div", {
                                    style: {
                                        width: "100%",
                                        padding: i.spacing(2),
                                        marginTop: i.spacing()
                                    },
                                    children: (0, Z.jsx)(v.Sn, {
                                        height: 50,
                                        variant: "contained",
                                        onClick: () => t(null),
                                        children: (0, Z.jsx)(s.cC, {
                                            id: "auth.ui.button.ok"
                                        })
                                    })
                                })]
                            })
                        })]
                    }))
                },
                ie = r(45396);

            function oe(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function se(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? oe(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oe(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var ce = () => {
                    const {
                        openedDrawer: e,
                        openDrawer: t
                    } = n.useContext(a.rf), r = n.useContext(l.ZP), i = (0, o.Z)(), d = !r.isDesktop;
                    return (0, Z.jsxs)(c.Jn, se(se({
                        anchor: "right",
                        isMobile: d,
                        onClose: () => t(null),
                        hideBackdrop: d,
                        disablePortal: d
                    }, (0, c.uG)(i, d, e, "join")), {}, {
                        children: [(0, Z.jsx)(c.gu, {
                            children: (0, Z.jsx)(v.Qh, {
                                color: "white",
                                onClick: () => t(null),
                                children: (0, Z.jsx)(y.Z, {})
                            })
                        }), (0, Z.jsxs)(N, {
                            children: [(0, Z.jsxs)(W, {
                                children: [(0, Z.jsx)(J, {}), (0, Z.jsx)("img", {
                                    src: (0, $.ZP)("crazygames/mobile-nav-background.png"),
                                    alt: "Mobile Nav Background"
                                })]
                            }), (0, Z.jsxs)(X, {
                                children: [(0, Z.jsx)(ie.Z, {
                                    customStyle: {
                                        width: 111
                                    }
                                }), (0, Z.jsx)(c.mH, {
                                    sx: {
                                        mt: 2
                                    },
                                    children: (0, Z.jsx)(s.cC, {
                                        id: "common.mobileNav.profile.title"
                                    })
                                }), (0, Z.jsx)(c.X0, {
                                    sx: {
                                        p: 3,
                                        pt: 1
                                    },
                                    children: (0, Z.jsx)(s.cC, {
                                        id: "common.mobileNav.profile.subtitle"
                                    })
                                }), (0, Z.jsx)("div", {
                                    style: {
                                        width: "100%",
                                        paddingLeft: i.spacing(3),
                                        paddingRight: i.spacing(3),
                                        paddingTop: i.spacing(),
                                        paddingBottom: i.spacing()
                                    },
                                    children: (0, Z.jsx)(v.Sn, {
                                        height: 50,
                                        variant: "contained",
                                        onClick: e => {
                                            e.stopPropagation(), e.preventDefault(), t("signUp")
                                        },
                                        children: (0, Z.jsx)(s.cC, {
                                            id: "common.mobileNav.profile.button1"
                                        })
                                    })
                                }), (0, Z.jsx)("div", {
                                    style: {
                                        width: "100%",
                                        paddingLeft: i.spacing(3),
                                        paddingRight: i.spacing(3),
                                        paddingTop: i.spacing(),
                                        paddingBottom: i.spacing()
                                    },
                                    children: (0, Z.jsx)(v.Sn, {
                                        height: 50,
                                        color: "white",
                                        variant: "outlined",
                                        onClick: e => {
                                            e.stopPropagation(), e.preventDefault(), t("signIn")
                                        },
                                        children: (0, Z.jsx)(s.cC, {
                                            id: "common.mobileNav.profile.button2"
                                        })
                                    })
                                })]
                            })]
                        })]
                    }))
                },
                le = r(50319),
                ae = r(70754),
                de = r(80618),
                ue = r(93295);

            function pe(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function he(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? pe(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pe(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var je = () => {
                    const {
                        openedDrawer: e,
                        openDrawer: t
                    } = n.useContext(a.rf), r = n.useContext(l.ZP), [i, d] = n.useState(""), u = (0, o.Z)(), p = !r.isDesktop, {
                        i18n: h
                    } = (0, s.mV)(), [j, {
                        data: g,
                        loading: x,
                        error: f
                    }] = (0, le.D)(ue.yT), b = () => {
                        t("signIn", !0)
                    }, m = g ? (0, Z.jsx)(c.Hz, {
                        sx: {
                            p: 3,
                            pt: 1
                        },
                        children: (0, Z.jsx)(s.cC, {
                            id: "auth.ui.reset.confirmation"
                        })
                    }) : (0, Z.jsx)(c.Hz, {
                        sx: {
                            p: 3,
                            pt: 1,
                            mb: 2
                        },
                        children: (0, Z.jsx)(s.cC, {
                            id: "auth.ui.reset.mainText"
                        })
                    });
                    return (0, Z.jsxs)(c.Jn, he(he({
                        anchor: "right",
                        isMobile: p,
                        onClose: () => t(null),
                        hideBackdrop: p,
                        disablePortal: p
                    }, (0, c.uG)(u, p, e, "passwordReset")), {}, {
                        children: [(0, Z.jsx)(c.gu, {
                            children: (0, Z.jsx)(v.Qh, {
                                color: "white",
                                onClick: () => t(null),
                                children: (0, Z.jsx)(y.Z, {})
                            })
                        }), (0, Z.jsx)(N, {
                            children: (0, Z.jsxs)(Q, {
                                isMobile: p,
                                children: [(0, Z.jsx)(c.mH, {
                                    sx: {
                                        mt: 2
                                    },
                                    children: (0, Z.jsx)(s.cC, {
                                        id: "auth.ui.header.reset"
                                    })
                                }), m, (0, Z.jsxs)("div", {
                                    style: {
                                        width: "100%"
                                    },
                                    children: [(!g || f) && (0, Z.jsx)(de.Z, {
                                        value: i,
                                        type: "email",
                                        placeholder: h._({
                                            id: "auth.ui.label.email"
                                        }),
                                        onChange: e => {
                                            const t = e.target.value;
                                            d(t)
                                        }
                                    }), x && (0, Z.jsx)(ae.Z, {})]
                                }), !!g && (0, Z.jsx)("div", {
                                    style: {
                                        width: "100%",
                                        marginTop: u.spacing(2)
                                    },
                                    children: (0, Z.jsx)(v.Sn, {
                                        height: 50,
                                        variant: "contained",
                                        onClick: b,
                                        children: (0, Z.jsx)(s.cC, {
                                            id: "auth.ui.button.back"
                                        })
                                    })
                                }), !g && (0, Z.jsxs)(Z.Fragment, {
                                    children: [(0, Z.jsx)("div", {
                                        style: {
                                            width: "100%",
                                            marginTop: u.spacing(2)
                                        },
                                        children: (0, Z.jsx)(v.Sn, {
                                            height: 50,
                                            variant: "contained",
                                            onClick: async () => {
                                                j({
                                                    variables: {
                                                        input: {
                                                            email: i,
                                                            redirectUrl: window.location.href
                                                        }
                                                    }
                                                })
                                            },
                                            disabled: i.length < 3,
                                            children: (0, Z.jsx)(s.cC, {
                                                id: "auth.ui.button.passwordReset"
                                            })
                                        })
                                    }), (0, Z.jsx)("div", {
                                        style: {
                                            width: "100%",
                                            textAlign: "center",
                                            marginTop: u.spacing(2)
                                        },
                                        children: (0, Z.jsx)(v.Sn, {
                                            height: 50,
                                            color: "white",
                                            onClick: b,
                                            children: (0, Z.jsx)(s.cC, {
                                                id: "auth.ui.button.cancel"
                                            })
                                        })
                                    })]
                                })]
                            })
                        })]
                    }))
                },
                ge = r(1163),
                xe = r(24220);
            var fe = () => (0, Z.jsx)("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    backgroundColor: g.D.black[80],
                    opacity: .7,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1
                },
                children: (0, Z.jsx)(ae.Z, {
                    style: {
                        color: "white"
                    },
                    size: 65
                })
            });
            var be = () => {
                    const {
                        message: e
                    } = n.useContext(xe.V), {
                        i18n: t
                    } = (0, s.mV)();
                    if (!e) return null;
                    let r = e;
                    return null !== e && void 0 !== e && e.includes("auth/invalid-email") ? r = t._({
                        id: "auth.ui.error.invalidEmail"
                    }) : null !== e && void 0 !== e && e.includes("auth/user-not-found") ? r = t._({
                        id: "auth.ui.error.userNotFound"
                    }) : null !== e && void 0 !== e && e.includes("auth/wrong-password") ? r = t._({
                        id: "auth.ui.error.wrongPassword"
                    }) : null !== e && void 0 !== e && e.includes("auth/email-already-in-use") && (r = t._({
                        id: "auth.ui.error.emailAlreadyInUse"
                    })), (0, Z.jsx)(c.mU, {
                        children: r
                    })
                },
                me = r(47210),
                ye = r(9482),
                ve = r(75158),
                we = r(41664),
                Oe = r.n(we),
                Ce = r(66252),
                Pe = r(48266),
                De = r(45221),
                Ze = r(72959);

            function ke(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Se(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ke(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ke(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Le = () => {
                const {
                    i18n: e
                } = (0, s.mV)(), [t, r] = n.useState(""), [i, l] = n.useState(""), [a, d] = n.useState(!1), {
                    setMessage: u,
                    triggerLogin: p,
                    setLoginHasStarted: h,
                    loading: j,
                    setLoading: g
                } = n.useContext(xe.V), {
                    analyticsService: x
                } = n.useContext(H.Z).services, f = (0, Ce.x)(), {
                    spacing: b
                } = (0, o.Z)(), [m] = (0, le.D)(ue.Fb), {
                    routeHelper: y
                } = n.useContext(Pe.Z), v = i && i.length < 6 ? e._({
                    id: "auth.ui.helper.passwordLength"
                }, {
                    numberOfChars: 6
                }) : "", w = y.termsAndConditionsPageLink(), O = y.privacyPolicyPageLink(), C = () => (0, Z.jsx)(Oe(), Se(Se({}, w), {}, {
                    prefetch: !1,
                    passHref: !0,
                    children: (0, Z.jsx)("a", {
                        children: (0, Z.jsx)(s.cC, {
                            id: "common.footer.termsAndConditions"
                        })
                    })
                })), P = () => (0, Z.jsx)(Oe(), Se(Se({}, O), {}, {
                    prefetch: !1,
                    passHref: !0,
                    children: (0, Z.jsx)("a", {
                        children: (0, Z.jsx)(s.cC, {
                            id: "common.footer.privacy"
                        })
                    })
                }));
                return (0, Z.jsx)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        width: "100%"
                    },
                    children: (0, Z.jsxs)("div", {
                        style: {
                            width: "100%"
                        },
                        children: [(0, Z.jsxs)("form", {
                            style: {
                                textAlign: "center"
                            },
                            children: [(0, Z.jsx)(de.Z, {
                                required: !0,
                                placeholder: e._({
                                    id: "auth.ui.label.email"
                                }),
                                onChange: e => {
                                    r(e.target.value)
                                },
                                type: "email",
                                style: {
                                    marginBottom: b()
                                }
                            }), (0, Z.jsx)(de.Z, {
                                required: !0,
                                helperText: v,
                                type: "password",
                                placeholder: e._({
                                    id: "auth.ui.label.password"
                                }),
                                onChange: e => {
                                    l(e.target.value)
                                },
                                autoComplete: "false"
                            }), (0, Z.jsx)(c.I8, {
                                control: (0, Z.jsx)(ve.Z, {
                                    color: "success",
                                    checked: a,
                                    onChange: () => d(!a)
                                }),
                                label: (0, Z.jsx)(s.cC, {
                                    id: "auth.ui.label.acceptTnC",
                                    values: {
                                        tncLink: (0, Z.jsx)(C, {}),
                                        privacyLink: (0, Z.jsx)(P, {})
                                    }
                                })
                            })]
                        }), (0, Z.jsx)(De.Z, {
                            height: 50,
                            disabled: !((0, Ze.o)(t) && i.length >= 6 && a) || j,
                            onClick: async () => {
                                g(!0);
                                try {
                                    h(!0);
                                    const r = await (0, me.Xb)(ye.lX, t, i);
                                    null === f || void 0 === f || f.resetStore();
                                    if (await p(r)) {
                                        x.trackUPSuccessfulRegistration();
                                        try {
                                            await m({
                                                variables: {
                                                    input: {
                                                        redirectUrl: window.location.href
                                                    }
                                                }
                                            })
                                        } catch (e) {
                                            u(e.message)
                                        }
                                    }
                                } catch (e) {
                                    u(e.message)
                                } finally {
                                    g(!1)
                                }
                            },
                            children: (0, Z.jsx)(s.cC, {
                                id: "auth.ui.button.register"
                            })
                        })]
                    })
                })
            };
            var Fe = () => {
                    const {
                        i18n: e
                    } = (0, s.mV)(), {
                        spacing: t
                    } = (0, o.Z)(), {
                        0: r,
                        1: i
                    } = (0, n.useState)(""), {
                        0: c,
                        1: l
                    } = (0, n.useState)(""), {
                        setMessage: d,
                        triggerLogin: u,
                        setLoginHasStarted: p,
                        loading: h,
                        setLoading: j
                    } = (0, n.useContext)(xe.V), {
                        openDrawer: g
                    } = n.useContext(a.rf), {
                        analyticsService: f
                    } = n.useContext(H.Z).services, b = (0, Ce.x)();
                    return (0, Z.jsx)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            flexDirection: "column",
                            width: "100%"
                        },
                        children: (0, Z.jsxs)("div", {
                            style: {
                                width: "100%"
                            },
                            children: [(0, Z.jsxs)("form", {
                                children: [(0, Z.jsx)(de.Z, {
                                    required: !0,
                                    placeholder: e._({
                                        id: "auth.ui.label.email"
                                    }),
                                    onChange: e => i(e.target.value),
                                    type: "email",
                                    style: {
                                        marginBottom: t()
                                    }
                                }), (0, Z.jsx)(de.Z, {
                                    required: !0,
                                    type: "password",
                                    placeholder: e._({
                                        id: "auth.ui.label.password"
                                    }),
                                    onChange: e => l(e.target.value),
                                    autoComplete: "false"
                                })]
                            }), (0, Z.jsx)(v.Sn, {
                                onClick: () => {
                                    g("passwordReset")
                                },
                                color: "white",
                                sx: {
                                    fontSize: x.CH.body,
                                    fontWeight: 600,
                                    mt: 2
                                },
                                children: (0, Z.jsx)(s.cC, {
                                    id: "auth.ui.forgotPassword"
                                })
                            }), (0, Z.jsx)("div", {
                                style: {
                                    marginTop: t(2)
                                },
                                children: (0, Z.jsx)(De.Z, {
                                    height: 50,
                                    variant: "contained",
                                    sx: {
                                        width: 1
                                    },
                                    disabled: !(r.length > 0 && c.length >= 6) || h,
                                    onClick: async () => {
                                        try {
                                            j(!0), p(!0);
                                            const e = await (0, me.e5)(ye.lX, r, c);
                                            null === b || void 0 === b || b.resetStore();
                                            await u(e) && (f.trackUPSuccessfulLoginWithPassword(), g(null))
                                        } catch (t) {
                                            d(t.message || e._({
                                                id: "auth.ui.error.generic"
                                            }))
                                        } finally {
                                            j(!1)
                                        }
                                    },
                                    children: (0, Z.jsx)(s.cC, {
                                        id: "auth.ui.button.login"
                                    })
                                })
                            })]
                        })
                    })
                },
                Me = r(30120);
            var _e = e => {
                let {
                    icon: t,
                    provider: r,
                    service: i
                } = e;
                const {
                    triggerLogin: o,
                    setLoginHasStarted: c,
                    setMessage: l,
                    setLoading: a,
                    loading: d
                } = (0, n.useContext)(xe.V), {
                    analyticsService: u
                } = n.useContext(H.Z).services, p = (0, Ce.x)();
                return (0, Z.jsxs)(v.Sn, {
                    onClick: async () => {
                        try {
                            a(!0), c(!0);
                            const e = await (0, me.rh)(ye.lX, r);
                            null === p || void 0 === p || p.resetStore();
                            if (await o(e)) {
                                const t = (0, me.gK)(e);
                                t && t.isNewUser ? u.trackUPSuccessfulRegistration() : u.trackUPSuccessfulLoginWithSocial()
                            }
                        } catch (e) {
                            e.code && "auth/account-exists-with-different-credential" === e.code && l(e.message)
                        } finally {
                            a(!1)
                        }
                    },
                    disabled: d,
                    sx: {
                        width: 1,
                        fontSize: x.CH.body,
                        fontWeight: 600,
                        background: "white",
                        color: "#262A4A",
                        p: 1,
                        mt: 2,
                        "&:hover": {
                            background: "#e4e4e4",
                            color: "#262A4A"
                        },
                        "&:active": {
                            background: "#c8c8c8"
                        }
                    },
                    height: 50,
                    children: [t, " ", (0, Z.jsx)(Me.Z, {
                        sx: {
                            ml: 1,
                            mt: "2px"
                        },
                        children: (0, Z.jsx)(s.cC, {
                            id: "auth.ui.login.socialBtn",
                            values: {
                                service: i
                            }
                        })
                    })]
                })
            };
            var Te = e => {
                let {
                    customStyle: t
                } = e;
                return (0, Z.jsx)("svg", {
                    version: "1.1",
                    id: "Layer_1",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    x: 0,
                    y: 0,
                    viewBox: "0 0 115 219",
                    enableBackground: "new 0 0 115 219",
                    style: t,
                    xmlSpace: "preserve",
                    children: (0, Z.jsx)("path", {
                        id: "f",
                        fill: "#3B579D",
                        d: "M74.61,219.06v-99.8h33.5l5.02-38.9H74.61V55.53c0-11.26,3.13-18.93,19.27-18.93l20.6-0.01V1.8 c-3.56-0.47-15.79-1.53-30.01-1.53c-29.7,0-50.02,18.13-50.02,51.41v28.68H0.86v38.9h33.58v99.8H74.61z"
                    })
                })
            };
            var He = e => {
                let {
                    customStyle: t
                } = e;
                return (0, Z.jsx)("svg", {
                    version: "1.1",
                    enableBackground: "new 0 0 19 19",
                    style: t,
                    id: "Layer_1",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    x: 0,
                    y: 0,
                    viewBox: "0 0 19 19",
                    xmlSpace: "preserve",
                    children: (0, Z.jsxs)("g", {
                        id: "logo_googleg_48dp",
                        transform: "translate(15.000000, 15.000000)",
                        children: [(0, Z.jsx)("path", {
                            id: "Shape",
                            className: "st0",
                            fill: "#4285F4",
                            d: "M3.31-5.13c0-0.64-0.06-1.25-0.16-1.84h-8.48v3.48h4.84c-0.21,1.12-0.84,2.08-1.8,2.72v2.26h2.91 C2.32-0.08,3.31-2.39,3.31-5.13L3.31-5.13z"
                        }), (0, Z.jsx)("path", {
                            id: "Shape_1_",
                            className: "st1",
                            fill: "#34A853",
                            d: "M-5.33,3.67c2.43,0,4.47-0.81,5.96-2.18l-2.91-2.26c-0.81,0.54-1.84,0.86-3.05,0.86 c-2.34,0-4.33-1.58-5.04-3.71h-3.01v2.33C-11.9,1.65-8.85,3.67-5.33,3.67L-5.33,3.67z"
                        }), (0, Z.jsx)("path", {
                            id: "Shape_2_",
                            className: "st2",
                            fill: "#FBBC05",
                            d: "M-10.37-3.62c-0.18-0.54-0.28-1.12-0.28-1.71s0.1-1.17,0.28-1.71v-2.33h-3.01 c-0.61,1.22-0.96,2.59-0.96,4.04s0.35,2.83,0.96,4.04L-10.37-3.62L-10.37-3.62z"
                        }), (0, Z.jsx)("path", {
                            id: "Shape_3_",
                            className: "st3",
                            fill: "#EA4335",
                            d: "M-5.33-10.75c1.32,0,2.51,0.45,3.44,1.35l2.58-2.58c-1.56-1.45-3.6-2.34-6.02-2.34 c-3.52,0-6.56,2.02-8.04,4.96l3.01,2.33C-9.66-9.17-7.68-10.75-5.33-10.75L-5.33-10.75z"
                        }), (0, Z.jsx)("path", {
                            id: "Shape_4_",
                            className: "st4",
                            fill: "none",
                            d: "M-14.33-14.33h18v18h-18V-14.33z"
                        })]
                    })
                })
            };
            var Ee = () => {
                const {
                    spacing: e
                } = (0, o.Z)();
                return (0, Z.jsxs)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        marginTop: e(),
                        flexDirection: "column",
                        paddingLeft: e(2)
                    },
                    children: [(0, Z.jsx)(_e, {
                        icon: (0, Z.jsx)(He, {
                            customStyle: {
                                width: 20
                            }
                        }),
                        provider: ye.Vv,
                        service: "Google"
                    }), (0, Z.jsx)(_e, {
                        icon: (0, Z.jsx)(Te, {
                            customStyle: {
                                width: 10,
                                margin: "0 6px"
                            }
                        }),
                        provider: ye.Os,
                        service: "Facebook"
                    })]
                })
            };

            function Be(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function ze(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Be(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Be(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Ve = () => {
                const {
                    openedDrawer: e,
                    openDrawer: t
                } = n.useContext(a.rf), r = n.useContext(l.ZP), {
                    analyticsService: i
                } = n.useContext(H.Z).services, {
                    setMessage: d,
                    loading: u
                } = n.useContext(xe.V), p = (0, o.Z)(), h = !r.isDesktop, j = () => {
                    t(null), setTimeout((() => {
                        d(void 0)
                    }), 300)
                };
                return (0, Z.jsxs)(c.Jn, ze(ze({
                    anchor: "right",
                    isMobile: h,
                    onClose: j,
                    hideBackdrop: h,
                    disablePortal: h
                }, (0, c.uG)(p, h, e, "signIn")), {}, {
                    children: [(0, Z.jsx)(c.gu, {
                        children: (0, Z.jsx)(v.Qh, {
                            color: "white",
                            onClick: j,
                            children: (0, Z.jsx)(y.Z, {})
                        })
                    }), u && (0, Z.jsx)(fe, {}), (0, Z.jsx)(N, {
                        children: (0, Z.jsxs)(Q, {
                            isMobile: h,
                            children: [(0, Z.jsx)(c.mH, {
                                sx: {
                                    mt: 3,
                                    mb: 2
                                },
                                children: (0, Z.jsx)(s.cC, {
                                    id: "auth.ui.header.signin"
                                })
                            }), (0, Z.jsx)(Ee, {}), (0, Z.jsx)("div", {
                                style: {
                                    fontSize: 16,
                                    padding: p.spacing(2),
                                    paddingTop: p.spacing(3)
                                },
                                children: (0, Z.jsx)(s.cC, {
                                    id: "auth.ui.orSignin"
                                })
                            }), (0, Z.jsx)(Fe, {}), (0, Z.jsx)(be, {}), (0, Z.jsxs)(c.Sz, {
                                sx: {
                                    mt: 2
                                },
                                children: [(0, Z.jsx)(s.cC, {
                                    id: "auth.ui.registerLabel"
                                }), (0, Z.jsx)(ge.Z, {
                                    onClick: () => {
                                        t("signUp"), i.trackUPSwitchedFromLoginToRegister()
                                    },
                                    color: "secondary",
                                    sx: {
                                        mb: "3px",
                                        fontWeight: 700
                                    },
                                    children: (0, Z.jsx)(s.cC, {
                                        id: "auth.ui.registerLink"
                                    })
                                })]
                            })]
                        })
                    })]
                }))
            };

            function Ie(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Ue(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ie(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ie(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Re = () => {
                    const {
                        openedDrawer: e,
                        openDrawer: t
                    } = n.useContext(a.rf), r = n.useContext(l.ZP), {
                        analyticsService: i
                    } = n.useContext(H.Z).services, {
                        setMessage: d,
                        loading: u
                    } = n.useContext(xe.V), p = (0, o.Z)(), h = !r.isDesktop, j = () => {
                        t(null), setTimeout((() => {
                            d(void 0)
                        }), 300)
                    };
                    return (0, Z.jsxs)(c.Jn, Ue(Ue({
                        anchor: "right",
                        isMobile: h,
                        onClose: j,
                        hideBackdrop: h,
                        disablePortal: h
                    }, (0, c.uG)(p, h, e, "signUp")), {}, {
                        children: [(0, Z.jsx)(c.gu, {
                            children: (0, Z.jsx)(v.Qh, {
                                color: "white",
                                onClick: j,
                                children: (0, Z.jsx)(y.Z, {})
                            })
                        }), u && (0, Z.jsx)(fe, {}), (0, Z.jsx)(N, {
                            children: (0, Z.jsxs)(Q, {
                                isMobile: h,
                                children: [(0, Z.jsx)(c.mH, {
                                    sx: {
                                        mt: 3,
                                        mb: 2
                                    },
                                    children: (0, Z.jsx)(s.cC, {
                                        id: "auth.ui.header.signup"
                                    })
                                }), (0, Z.jsx)(Ee, {}), (0, Z.jsx)("div", {
                                    style: {
                                        fontSize: 16,
                                        padding: p.spacing(2),
                                        paddingTop: p.spacing(3)
                                    },
                                    children: (0, Z.jsx)(s.cC, {
                                        id: "auth.ui.orSignup"
                                    })
                                }), (0, Z.jsx)(Le, {}), (0, Z.jsx)(be, {}), (0, Z.jsxs)(c.Sz, {
                                    sx: {
                                        mt: 2
                                    },
                                    children: [(0, Z.jsx)(s.cC, {
                                        id: "auth.ui.alreadyMemberLabel"
                                    }), (0, Z.jsx)(v.Sn, {
                                        onClick: () => {
                                            t("signIn"), i.trackUPSwitchedFromRegisterToLogin()
                                        },
                                        color: "purple",
                                        variant: "link",
                                        sx: {
                                            mt: -1,
                                            fontWeight: 700,
                                            width: "unset !important"
                                        },
                                        children: (0, Z.jsx)(s.cC, {
                                            id: "auth.ui.alreadyMemberAction"
                                        })
                                    })]
                                })]
                            })
                        })]
                    }))
                },
                Ae = r(37887),
                Ge = r(81702),
                $e = r(50674),
                Ne = r(79106);
            const Qe = ["username"];

            function We(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Je(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? We(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : We(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Xe = () => {
                var e;
                const {
                    openDrawer: t
                } = n.useContext(a.rf), {
                    user: r
                } = n.useContext(m.S), {
                    spacing: i
                } = (0, o.Z)(), {
                    analyticsService: l
                } = n.useContext(H.Z).services, [d, u] = n.useState(null), [p, h] = n.useState(!1), [j, f] = n.useState(!1), {
                    data: b
                } = (0, Ae.a)(Ne.Qt), [w] = (0, le.D)(Ne.CU);
                n.useEffect((() => {
                    l.trackUPInitUsernameConfirmationDialog()
                }), [l]);
                const C = null === b || void 0 === b || null === (e = b.me) || void 0 === e ? void 0 : e.username,
                    P = d ? d.username : C;
                return (0, Z.jsxs)(Z.Fragment, {
                    children: [(0, Z.jsx)(c.gu, {
                        children: (0, Z.jsx)(v.Qh, {
                            color: "white",
                            onClick: () => t(null),
                            children: (0, Z.jsx)(y.Z, {})
                        })
                    }), (0, Z.jsxs)(N, {
                        children: [(0, Z.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignContent: "center",
                                alignItems: "center",
                                padding: i(2),
                                paddingTop: i(7),
                                flexFlow: "row wrap",
                                justifyContent: "center"
                            },
                            children: [(0, Z.jsx)(c.X0, {
                                children: (0, Z.jsx)(s.cC, {
                                    id: "auth.ui.usernameConfirm.header"
                                })
                            }), (0, Z.jsx)(c.mH, {
                                sx: {
                                    pt: e => `${e.spacing()} !important`
                                },
                                children: (0, Z.jsx)(s.cC, {
                                    id: "auth.ui.usernameConfirm.title"
                                })
                            })]
                        }), (0, Z.jsxs)("div", {
                            style: {
                                paddingLeft: i(3),
                                paddingRight: i(3)
                            },
                            children: [(0, Z.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    width: "100%",
                                    height: "155px",
                                    backgroundColor: g.D.black[60],
                                    borderRadius: 8,
                                    padding: i(),
                                    justifyContent: "center"
                                },
                                children: [(0, Z.jsx)("div", {
                                    style: {
                                        color: "secondary.contrastText",
                                        marginTop: i(1.25),
                                        marginBottom: i(1.25),
                                        fontSize: x.CH.h5,
                                        fontWeight: 800
                                    },
                                    children: P
                                }), (0, Z.jsx)("div", {
                                    style: {
                                        marginTop: i(),
                                        marginBottom: i()
                                    },
                                    children: (0, Z.jsxs)(v.Sn, {
                                        color: "white",
                                        variant: "outlined",
                                        onClick: async () => {
                                            const e = await (0, Ge.T)();
                                            u(e), j && f(!1), l.trackUPUsernameDialogRefresh()
                                        },
                                        children: [(0, Z.jsx)($e.Z, {}), (0, Z.jsx)(s.cC, {
                                            id: "auth.ui.usernameConfirm.generate"
                                        })]
                                    })
                                })]
                            }), (0, Z.jsx)(c.g5, {
                                sx: {
                                    mt: 2,
                                    p: 3,
                                    pt: 1,
                                    color: j ? "red" : ""
                                },
                                children: j ? (0, Z.jsx)("div", {
                                    children: (0, Z.jsx)(s.cC, {
                                        id: "auth.ui.usernameConfirm.usernameTaken"
                                    })
                                }) : (0, Z.jsx)(s.cC, {
                                    id: "auth.ui.usernameConfirm.reminderText"
                                })
                            }), (0, Z.jsx)("div", {
                                style: {
                                    width: "100%"
                                },
                                children: (0, Z.jsx)(De.Z, {
                                    disabled: j,
                                    loading: p,
                                    onClick: async () => {
                                        if (d) try {
                                            const {
                                                username: e
                                            } = d, t = (0, O.Z)(d, Qe);
                                            h(!0), await (async e => {
                                                await w({
                                                    variables: {
                                                        input: e
                                                    },
                                                    update: e => {
                                                        const t = e.readQuery({
                                                            query: Ne.Qt
                                                        });
                                                        if (t && t.me) {
                                                            const {
                                                                me: r
                                                            } = t;
                                                            e.writeQuery({
                                                                query: Ne.Qt,
                                                                data: {
                                                                    me: Je(Je({}, r), {}, {
                                                                        username: d.username
                                                                    })
                                                                }
                                                            })
                                                        }
                                                    }
                                                })
                                            })(t), h(!1)
                                        } catch (e) {
                                            return h(!1), void f(!0)
                                        }
                                        l.trackUPSuccessfulFlowRegistration(), null !== r && void 0 !== r && r.emailVerified ? t(null) : t("accountConfirmation")
                                    },
                                    height: 50,
                                    sx: {
                                        width: "100%"
                                    },
                                    children: (0, Z.jsx)(s.cC, {
                                        id: "auth.ui.usernameConfirm.continue"
                                    })
                                })
                            })]
                        })]
                    })]
                })
            };

            function qe(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Ke(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? qe(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qe(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Ye = () => {
                const {
                    openedDrawer: e,
                    openDrawer: t
                } = n.useContext(a.rf), r = n.useContext(l.ZP), i = (0, o.Z)(), s = !r.isDesktop;
                return (0, Z.jsx)(c.Jn, Ke(Ke({
                    anchor: "right",
                    isMobile: s,
                    onClose: () => t(null),
                    hideBackdrop: s,
                    disablePortal: s
                }, (0, c.uG)(i, s, e, "authUsernameSelector")), {}, {
                    children: (0, Z.jsx)(Xe, {})
                }))
            };
            var et = () => (0, Z.jsxs)(Z.Fragment, {
                children: [(0, Z.jsx)(ce, {}), (0, Z.jsx)(Re, {}), (0, Z.jsx)(Ve, {}), (0, Z.jsx)(je, {}), (0, Z.jsx)(Ye, {}), (0, Z.jsx)(ee, {}), (0, Z.jsx)(ne, {}), (0, Z.jsx)(G, {})]
            })
        },
        12647: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return g
                }
            });
            var n = r(62097),
                i = r(67294),
                o = r(59499),
                s = r(27444),
                c = r(85893);

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var d = i.memo((e => (0, c.jsx)(s.Z, a(a({}, e), {}, {
                    viewBox: "0 0 24 24",
                    children: (0, c.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16.7424 21.6699C16.3724 22.08 15.7401 22.1124 15.3301 21.7424L7.0186 14.2424C5.66045 13.0169 5.66046 10.9831 7.0186 9.75758L15.3301 2.25758C15.7401 1.88758 16.3724 1.92003 16.7424 2.33006C17.1124 2.74009 17.08 3.37242 16.6699 3.74241L8.35847 11.2424C7.8805 11.6737 7.8805 12.3263 8.35847 12.7576L16.6699 20.2576C17.08 20.6276 17.1124 21.2599 16.7424 21.6699Z"
                    })
                })))),
                u = r(23041),
                p = r(73927),
                h = r(21818),
                j = r(92690);
            var g = e => {
                let {
                    onClose: t,
                    onBack: r,
                    title: o
                } = e;
                const {
                    openDrawer: s
                } = i.useContext(h.rf), {
                    spacing: l
                } = (0, n.Z)(), a = t || (() => s(null));
                return (0, c.jsxs)(j.MU, {
                    children: [(0, c.jsx)(j.Zw, {
                        children: r && (0, c.jsx)(p.Qh, {
                            color: "white",
                            onClick: r,
                            sx: {
                                ml: 1
                            },
                            children: (0, c.jsx)(d, {})
                        })
                    }), (0, c.jsx)("div", {
                        style: {
                            display: "flex",
                            width: "100%",
                            paddingLeft: l(),
                            paddingRight: l(),
                            zIndex: 1,
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        children: (0, c.jsx)("h1", {
                            style: {
                                fontSize: 16,
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                textAlign: "center"
                            },
                            children: o
                        })
                    }), (0, c.jsx)(j.Zw, {
                        children: (0, c.jsx)(p.Qh, {
                            color: "white",
                            onClick: a,
                            sx: {
                                mr: 1
                            },
                            children: (0, c.jsx)(u.Z, {})
                        })
                    })]
                })
            }
        },
        72959: function(e, t, r) {
            r.d(t, {
                B: function() {
                    return n
                },
                o: function() {
                    return i
                }
            });
            const n = "^[^@]+@[^@]+\\.[^@]+$";

            function i(e) {
                if (!e || 0 === e.length) return !1;
                return new RegExp(n).test(e.toLowerCase())
            }
        },
        81702: function(e, t, r) {
            r.d(t, {
                T: function() {
                    return i
                }
            });
            const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            async function i() {
                const {
                    adjectives: e,
                    nouns: t
                } = await r.e(50295).then(r.t.bind(r, 50295, 19)), i = e[Math.floor(Math.random() * e.length)], o = t[Math.floor(Math.random() * t.length)], s = function() {
                    let e = "";
                    const t = n.length;
                    for (let r = 0; r < 4; r++) e += n.charAt(Math.floor(Math.random() * t));
                    return e
                }();
                return {
                    adjective: i,
                    noun: o,
                    rnd: s,
                    username: `${i}${o}.${s}`
                }
            }
        }
    }
]);