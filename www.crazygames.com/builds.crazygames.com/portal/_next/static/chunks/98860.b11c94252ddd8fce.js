"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [98860], {
        24220: function(e, t, r) {
            r.d(t, {
                V: function() {
                    return b
                },
                Z: function() {
                    return w
                }
            });
            var n = r(67294),
                s = r(3349),
                i = r(3436),
                o = r(9482),
                a = r(47210),
                l = r(43506),
                c = r(66252),
                u = r(50319),
                d = r(34386),
                g = r(79106),
                m = r(16690),
                v = r(83921),
                f = r(93295),
                y = r(67025),
                h = r(21818);
            var p = r(85893);
            const b = n.createContext({
                loginHasStarted: !1,
                setLoginHasStarted: () => {},
                setMessage: () => {},
                logout: async () => {},
                triggerLogin: async () => !0,
                loading: !1,
                setLoading: () => {}
            });
            var w = e => {
                const {
                    setUser: t,
                    setIsNewUser: r,
                    setLoadingUser: w,
                    setLoggedInThisSession: k,
                    loggedInThisSession: x
                } = n.useContext(l.S), {
                    openDrawer: C
                } = n.useContext(h.rf), [S, j] = n.useState(!1), {
                    analyticsService: O
                } = n.useContext(d.Z).services, {
                    countryCode: L
                } = n.useContext(y.Z), [U, Z, P] = (0, s.F_)(o.lX), {
                    0: D,
                    1: G
                } = (0, n.useState)(), {
                    0: _,
                    1: E
                } = (0, n.useState)(!1), Q = (0, c.x)(), [F] = (0, u.D)(g.Hv), [H] = (0, u.D)(f.Fb), I = async () => {
                    try {
                        await (0, m.w7)(o.lX), await R(), C(null)
                    } catch (e) {}
                }, R = async () => {
                    null === Q || void 0 === Q || Q.cache.writeQuery({
                        query: g.Qt,
                        data: {
                            me: null
                        }
                    }), await (null === Q || void 0 === Q ? void 0 : Q.clearStore())
                };
                (0, n.useEffect)((() => (0, a.MX)(o.lX, (e => {
                    e ? e !== U && ((0, i.YO)(e), t(e), x || _ || r("no")) : (t(null), k(!1), r("unknown"), (0, i.YO)())
                }))), [t, r, U, x, _, k]), (0, n.useEffect)((() => {
                    w(Z)
                }), [Z, w]), (0, n.useEffect)((() => {
                    P && G(P.message)
                }), [P]), (0, n.useEffect)((() => {
                    Z || (U ? O.setUserLoggedIn() : O.setUserLoggedOut())
                }), [O, Z, U]);
                const A = {
                    message: D,
                    loading: S,
                    setLoading: j,
                    setMessage: G,
                    triggerLogin: async e => {
                        if (G(void 0), k(!0), !e.user.emailVerified && (0, v.W2)(e.user.metadata.creationTime)) {
                            try {
                                await H({
                                    variables: {
                                        input: {
                                            redirectUrl: window.location.href
                                        }
                                    }
                                })
                            } catch (i) {}
                            return await I(), C("disabledAccount"), !1
                        }
                        let t = null;
                        const n = (0, a.gK)(e);
                        if (n && n.isNewUser) {
                            r("yes");
                            t = (await F({
                                variables: {
                                    input: {
                                        countryCode: L || null
                                    }
                                }
                            })).data || null;
                            const n = function(e) {
                                for (const t of e.providerData)
                                    if ("facebook.com" === t.providerId) return !0;
                                return !1
                            }(e.user);
                            var s;
                            if (n) await (null === (s = o.lX.currentUser) || void 0 === s ? void 0 : s.reload())
                        } else r("no");
                        return C(t ? "authUsernameSelector" : null), !0
                    },
                    logout: I,
                    loginHasStarted: _,
                    setLoginHasStarted: E
                };
                return (0, p.jsx)(b.Provider, {
                    value: A,
                    children: e.children
                })
            }
        },
        9482: function(e, t, r) {
            r.d(t, {
                Os: function() {
                    return c
                },
                Vv: function() {
                    return l
                },
                lX: function() {
                    return a
                }
            });
            var n = r(25816),
                s = r(47210);
            const i = r(63530).Z.Instance.data.firebase,
                o = (0, n.ZF)(i),
                a = (0, s.v0)(o),
                l = new s.hJ,
                c = new s._O
        },
        98860: function(e, t, r) {
            r.r(t), r.d(t, {
                default: function() {
                    return X
                }
            });
            var n = r(67294),
                s = r(24220),
                i = r(43506),
                o = r(34386),
                a = r(21818),
                l = r(59499),
                c = r(66252),
                u = r(50319),
                d = r(93295),
                g = r(92355);

            function m(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(r), !0).forEach((function(t) {
                        (0, l.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var f = () => {
                    const e = (0, c.x)(),
                        [t, r] = n.useState(!1),
                        [s, a] = n.useState(!1),
                        {
                            user: l,
                            isNewUser: m
                        } = n.useContext(i.S),
                        {
                            recentlyPlayedService: f
                        } = n.useContext(o.Z).services,
                        [y, {
                            data: h
                        }] = (0, u.D)(d.ro),
                        [p, {
                            data: b
                        }] = (0, u.D)(d.gP);
                    return n.useEffect((() => {
                        if (l && h && !s) {
                            a(!0);
                            const t = f.getSortedGames();
                            if (0 === t.length) return;
                            const r = t.map((e => ({
                                id: e.id || "",
                                name: e.name,
                                slug: e.slug,
                                cover: e.cover,
                                video: e.video,
                                videos: e.videos,
                                status: "PUBLISHED",
                                https: e.https,
                                iosFriendly: !!e.mobileFriendly,
                                androidFriendly: !!e.mobileFriendly,
                                mobileFriendly: e.mobileFriendly,
                                __typename: "UserGame"
                            })));
                            null === e || void 0 === e || e.cache.updateQuery({
                                query: d.Gv
                            }, (e => {
                                var t;
                                return {
                                    me: {
                                        id: l.uid,
                                        recentGames: [...(null === e || void 0 === e || null === (t = e.me) || void 0 === t ? void 0 : t.recentGames) || [], ...r],
                                        __typename: "User"
                                    }
                                }
                            }))
                        }
                    }), [l, h, s, e, f]), n.useEffect((() => {
                        if (l && null !== b && void 0 !== b && b.addUserLikedGames && !t) {
                            r(!0);
                            const t = b.addUserLikedGames;
                            null === e || void 0 === e || e.cache.updateQuery({
                                query: d.QA
                            }, (e => {
                                var r;
                                const n = t.map((e => v(v({}, e), {}, {
                                    __typename: "UserGame"
                                })));
                                return {
                                    me: {
                                        id: l.uid,
                                        likedGames: e ? [...(null === e || void 0 === e || null === (r = e.me) || void 0 === r ? void 0 : r.likedGames) || [], ...n] : n,
                                        __typename: "User"
                                    }
                                }
                            }))
                        }
                    }), [l, b, t, e]), n.useEffect((() => {
                        const t = async () => {
                                var t;
                                const r = e.readQuery({
                                    query: d.Gv
                                });
                                if (null === r || void 0 === r || null === (t = r.me) || void 0 === t || !t.recentGames) try {
                                    const e = f.getSortedGames();
                                    if (0 === e.length) return;
                                    y({
                                        variables: {
                                            input: {
                                                games: e.map((e => ({
                                                    slug: e.slug
                                                })))
                                            }
                                        }
                                    })
                                } catch (n) {
                                    console.error("Recent games sync error: ", n)
                                }
                            },
                            r = async () => {
                                const t = e.readQuery({
                                    query: d.QA
                                });
                                if (null === t || void 0 === t || !t.me.likedGames) try {
                                    const e = g.Z.Instance.getAllKeys().filter((e => e.startsWith("vote-"))).map((e => e.slice("vote-".length, e.length)));
                                    if (0 === e.length) return;
                                    p({
                                        variables: {
                                            input: {
                                                games: e.map((e => ({
                                                    slug: e
                                                })))
                                            }
                                        }
                                    })
                                } catch (r) {
                                    console.error("Liked games sync error: ", r)
                                }
                            };
                        l && "yes" === m && e && Promise.all([t(), r()]).catch((e => {
                            console.error(e)
                        }))
                    }), [f, y, p, m, l, e]), null
                },
                y = r(73359),
                h = r(79106),
                p = r(3151),
                b = r(313),
                w = r(74201),
                k = r(24002),
                x = r(11163);
            var C = () => {
                    const {
                        user: e,
                        isNewUser: t
                    } = n.useContext(i.S), [r] = (0, y.t)(h.Qt), [s] = (0, u.D)(h.cl);
                    return n.useEffect((() => {
                        if (!e || "yes" === t || "unknown" === t) return;
                        const n = () => {
                            r().then((t => {
                                var r, n;
                                if (t.error) return;
                                const i = null === (r = t.data) || void 0 === r || null === (n = r.me) || void 0 === n ? void 0 : n.playStreakSyncedAt;
                                if (!i) return;
                                const o = new Date,
                                    a = (0, k.Z)(i, "yyyy-MM-dd HH:mm:ss", new Date);
                                if (!(0, p.Z)(o, a) && (0, b.Z)(a, o)) {
                                    const t = (0, w.Z)(o, "yyyy-MM-dd HH:mm:ss");
                                    s({
                                        variables: {
                                            input: {
                                                time: t
                                            }
                                        },
                                        update: r => {
                                            r.modify({
                                                id: r.identify({
                                                    id: e.uid,
                                                    __typename: "User"
                                                }),
                                                fields: {
                                                    playStreakSyncedAt: () => t
                                                }
                                            })
                                        }
                                    })
                                }
                            }))
                        };
                        return n(), x.Router.events.on("routeChangeComplete", n),
                            function() {
                                x.Router.events.off("routeChangeComplete", n)
                            }
                    }), [e, t, r, s]), null
                },
                S = r(18389),
                j = r(37887),
                O = r(13839),
                L = r(88474),
                U = r(81719),
                Z = r(44731),
                P = r(83747),
                D = r(73927);
            const G = (0, U.ZP)(Z.Z)((e => {
                    let {
                        theme: {
                            spacing: t,
                            breakpoints: r
                        }
                    } = e;
                    return {
                        marginRight: t(1.5),
                        marginLeft: 2,
                        [r.down("sm")]: {
                            marginRight: t(.5),
                            marginLeft: 0
                        },
                        height: 40,
                        width: 40,
                        borderWidth: 1,
                        backgroundColor: P.D.black[100],
                        borderColor: P.D.black[100],
                        borderStyle: "solid",
                        "&:hover": {
                            cursor: "pointer",
                            opacity: .85
                        }
                    }
                })),
                _ = (0, U.ZP)(D.Qh)((e => {
                    let {
                        theme: {
                            spacing: t,
                            palette: r,
                            breakpoints: n
                        }
                    } = e;
                    return {
                        marginRight: t(1.5),
                        marginLeft: 2,
                        [n.down("sm")]: {
                            marginRight: t(.5),
                            marginLeft: 0
                        },
                        backgroundColor: r.primary.light,
                        height: 40,
                        width: 40
                    }
                })),
                E = (0, U.ZP)("div")((() => ({
                    background: P.D.success[100],
                    borderColor: P.D.black[100],
                    borderWidth: 1,
                    borderStyle: "solid",
                    width: 12,
                    height: 12,
                    right: 12,
                    borderRadius: 8,
                    position: "absolute",
                    zIndex: 1
                })));
            var Q = r(85893);
            var F = e => {
                    let {
                        onClick: t
                    } = e;
                    const {
                        data: r,
                        loading: n
                    } = (0, j.a)(h.Qt);
                    if (n) return (0, Q.jsx)(S.u, {
                        isLoading: !0
                    });
                    const s = null === r || void 0 === r ? void 0 : r.me.profile.avatar;
                    return s ? (0, Q.jsxs)(Q.Fragment, {
                        children: [(0, Q.jsx)(E, {}), (0, Q.jsx)(G, {
                            onClick: t,
                            src: (0, O.ZP)(s, {
                                w: 100,
                                h: 100
                            }),
                            alt: "Avatar"
                        })]
                    }) : (0, Q.jsx)(_, {
                        color: "white",
                        onClick: t,
                        children: (0, Q.jsx)(L.Z, {})
                    })
                },
                H = r(17025),
                I = r(62097),
                R = r(5152),
                A = r.n(R);
            const M = A()((() => Promise.all([r.e(19541), r.e(83187), r.e(57995), r.e(47638), r.e(47077)]).then(r.bind(r, 47077))), {
                    loading: () => null,
                    ssr: !1,
                    loadableGenerated: {
                        webpack: () => [47077]
                    }
                }),
                N = A()((() => Promise.all([r.e(19541), r.e(77782), r.e(10984), r.e(70690), r.e(90616), r.e(39084)]).then(r.bind(r, 90616))), {
                    loading: () => null,
                    ssr: !1,
                    loadableGenerated: {
                        webpack: () => [90616]
                    }
                });
            var X = () => {
                const {
                    user: e,
                    loadingUser: t
                } = n.useContext(i.S), {
                    spacing: r
                } = (0, I.Z)(), {
                    analyticsService: l
                } = n.useContext(o.Z).services, {
                    openDrawer: c
                } = n.useContext(a.rf);
                return (0, Q.jsxs)(s.Z, {
                    children: [e && (0, Q.jsx)(N, {}), (0, Q.jsx)(M, {}), (0, Q.jsx)(f, {}), (0, Q.jsx)(C, {}), (0, Q.jsx)("div", {
                        style: {
                            marginRight: r()
                        },
                        children: (0, Q.jsx)(H.l, {
                            isLoading: t,
                            onClick: () => {
                                l.trackMyGamesClick(), c("myGames")
                            }
                        })
                    }), (0, Q.jsx)("div", {
                        style: {
                            height: "100%",
                            position: "relative"
                        },
                        children: e ? (0, Q.jsx)(F, {
                            onClick: () => {
                                l.trackUPAccountIconClick(), c("main")
                            }
                        }) : (0, Q.jsx)(S.u, {
                            isLoading: t,
                            onClick: () => {
                                c("join")
                            }
                        })
                    })]
                })
            }
        }
    }
]);