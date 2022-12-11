"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [57625], {
        30120: function(e, t, r) {
            var i = r(61354),
                n = r(37078);
            const o = (0, r(19762).Z)(),
                a = (0, i.Z)({
                    defaultTheme: o,
                    defaultClassName: "MuiBox-root",
                    generateClassName: n.Z.generate
                });
            t.Z = a
        },
        91655: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return k
                }
            });
            var i = r(63366),
                n = r(87462),
                o = r(67294),
                a = r(86010),
                s = r(70917),
                d = r(94780);

            function l(e) {
                return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || ""
            }

            function c(e) {
                return parseFloat(e)
            }
            var h = r(41796),
                p = r(81719),
                u = r(6446),
                g = r(1588),
                b = r(34867);

            function m(e) {
                return (0, b.Z)("MuiSkeleton", e)
            }(0, g.Z)("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
            var f = r(85893);
            const w = ["animation", "className", "component", "height", "style", "variant", "width"];
            let j, y, x, O, v = e => e;
            const P = (0, s.F4)(j || (j = v `
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),
                C = (0, s.F4)(y || (y = v `
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),
                Z = (0, p.ZP)("span", {
                    name: "MuiSkeleton",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [t.root, t[r.variant], !1 !== r.animation && t[r.animation], r.hasChildren && t.withChildren, r.hasChildren && !r.width && t.fitContent, r.hasChildren && !r.height && t.heightAuto]
                    }
                })((({
                    theme: e,
                    ownerState: t
                }) => {
                    const r = l(e.shape.borderRadius) || "px",
                        i = c(e.shape.borderRadius);
                    return (0, n.Z)({
                        display: "block",
                        backgroundColor: e.vars ? e.vars.palette.Skeleton.bg : (0, h.Fq)(e.palette.text.primary, "light" === e.palette.mode ? .11 : .13),
                        height: "1.2em"
                    }, "text" === t.variant && {
                        marginTop: 0,
                        marginBottom: 0,
                        height: "auto",
                        transformOrigin: "0 55%",
                        transform: "scale(1, 0.60)",
                        borderRadius: `${i}${r}/${Math.round(i/.6*10)/10}${r}`,
                        "&:empty:before": {
                            content: '"\\00a0"'
                        }
                    }, "circular" === t.variant && {
                        borderRadius: "50%"
                    }, "rounded" === t.variant && {
                        borderRadius: (e.vars || e).shape.borderRadius
                    }, t.hasChildren && {
                        "& > *": {
                            visibility: "hidden"
                        }
                    }, t.hasChildren && !t.width && {
                        maxWidth: "fit-content"
                    }, t.hasChildren && !t.height && {
                        height: "auto"
                    })
                }), (({
                    ownerState: e
                }) => "pulse" === e.animation && (0, s.iv)(x || (x = v `
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `), P)), (({
                    ownerState: e,
                    theme: t
                }) => "wave" === e.animation && (0, s.iv)(O || (O = v `
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `), C, (t.vars || t).palette.action.hover)));
            var k = o.forwardRef((function(e, t) {
                const r = (0, u.Z)({
                        props: e,
                        name: "MuiSkeleton"
                    }),
                    {
                        animation: o = "pulse",
                        className: s,
                        component: l = "span",
                        height: c,
                        style: h,
                        variant: p = "text",
                        width: g
                    } = r,
                    b = (0, i.Z)(r, w),
                    j = (0, n.Z)({}, r, {
                        animation: o,
                        component: l,
                        variant: p,
                        hasChildren: Boolean(b.children)
                    }),
                    y = (e => {
                        const {
                            classes: t,
                            variant: r,
                            animation: i,
                            hasChildren: n,
                            width: o,
                            height: a
                        } = e, s = {
                            root: ["root", r, i, n && "withChildren", n && !o && "fitContent", n && !a && "heightAuto"]
                        };
                        return (0, d.Z)(s, m, t)
                    })(j);
                return (0, f.jsx)(Z, (0, n.Z)({
                    as: l,
                    ref: t,
                    className: (0, a.Z)(y.root, s),
                    ownerState: j
                }, b, {
                    style: (0, n.Z)({
                        width: g,
                        height: c
                    }, h)
                }))
            }))
        },
        61354: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return u
                }
            });
            var i = r(87462),
                n = r(63366),
                o = r(67294),
                a = r(86010),
                s = r(5151),
                d = r(86523),
                l = r(39707),
                c = r(96682),
                h = r(85893);
            const p = ["className", "component"];

            function u(e = {}) {
                const {
                    defaultTheme: t,
                    defaultClassName: r = "MuiBox-root",
                    generateClassName: u,
                    styleFunctionSx: g = d.Z
                } = e, b = (0, s.ZP)("div", {
                    shouldForwardProp: e => "theme" !== e && "sx" !== e && "as" !== e
                })(g);
                return o.forwardRef((function(e, o) {
                    const s = (0, c.Z)(t),
                        d = (0, l.Z)(e),
                        {
                            className: g,
                            component: m = "div"
                        } = d,
                        f = (0, n.Z)(d, p);
                    return (0, h.jsx)(b, (0, i.Z)({
                        as: m,
                        ref: o,
                        className: (0, a.Z)(g, u ? u(r) : r),
                        theme: s
                    }, f))
                }))
            }
        },
        83417: function(e, t, r) {
            var i = r(59499),
                n = r(67294),
                o = r(98142),
                a = r(48266),
                s = r(41664),
                d = r.n(s),
                l = r(49501),
                c = r(85893);

            function h(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            t.Z = e => {
                const {
                    routeHelper: t
                } = n.useContext(a.Z), {
                    categorySet: r,
                    linkData: i,
                    label: s,
                    linkTarget: h,
                    sx: u
                } = e;
                if (!s && !r) return null;
                const g = i || r;
                let b = null;
                return g && (b = i || t.tagOrCategoryPageDirectLink(r.tag.slug, r.tag.isCategory)), (0, c.jsxs)(o.g2, {
                    className: "titleContainer",
                    sx: u,
                    children: [(0, c.jsx)("h2", {
                        className: "carouselTitle",
                        children: s || r.tag.title
                    }), g && (0, c.jsx)(d(), p(p({}, b), {}, {
                        passHref: !0,
                        children: (0, c.jsx)("a", {
                            target: h,
                            className: "carouselTitleLink",
                            children: (0, c.jsx)(l.cC, {
                                id: "carousels.category.viewMore"
                            })
                        })
                    }))]
                })
            }
        },
        98142: function(e, t, r) {
            r.d(t, {
                R_: function() {
                    return b
                },
                SJ: function() {
                    return w
                },
                Sd: function() {
                    return c
                },
                Zb: function() {
                    return m
                },
                g2: function() {
                    return d
                },
                kx: function() {
                    return f
                },
                m$: function() {
                    return u
                },
                u4: function() {
                    return g
                }
            });
            var i = r(59499),
                n = r(93545),
                o = r(81719);

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const d = (0, o.ZP)("div")((e => {
                    let {
                        theme: {
                            spacing: t,
                            breakpoints: r
                        }
                    } = e;
                    return {
                        paddingLeft: t(),
                        [r.down("h2")]: {
                            paddingLeft: "0 !important",
                            minHeight: 21
                        },
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        "& .carouselTitle": {
                            [r.down("h2")]: {
                                lineHeight: "1 !important",
                                paddingLeft: t(1.5)
                            },
                            alignSelf: "flex-end",
                            paddingRight: t(2),
                            paddingBottom: 3
                        },
                        "& .carouselTitleLink": s(s({
                            alignSelf: "center",
                            padding: 0,
                            zIndex: 2,
                            textTransform: "none",
                            lineHeight: "1 !important"
                        }, (0, n.GC)()), {}, {
                            [r.down("h2")]: {
                                marginBottom: -2,
                                fontSize: 12,
                                "&:hover": {
                                    backgroundColor: "transparent !important"
                                }
                            }
                        })
                    }
                })),
                l = e => {
                    let {
                        spacing: t,
                        breakpoints: r
                    } = e;
                    return {
                        padding: 0,
                        margin: 0,
                        contentVisibility: "auto",
                        containIntrinsicSize: "171px",
                        contain: "layout paint",
                        paddingLeft: 0,
                        overflow: "hidden",
                        "@media (hover: hover)": {},
                        marginTop: t(.5),
                        [r.down("h2")]: {
                            paddingBottom: t(),
                            marginBottom: -4,
                            containIntrinsicSize: "144px"
                        },
                        position: "relative"
                    }
                },
                c = (0, o.ZP)("div")((e => {
                    let {
                        theme: {
                            spacing: t
                        }
                    } = e;
                    return {
                        width: "100%",
                        height: "100%",
                        marginRight: t(),
                        display: "grid",
                        gridTemplateColumns: "repeat(1, 1fr)",
                        gridTemplateRows: "repeat(2, 1fr)",
                        gridGap: t()
                    }
                })),
                h = ((0, o.ZP)("div")((e => {
                    let {
                        theme: t
                    } = e;
                    const {
                        spacing: r,
                        breakpoints: i
                    } = t;
                    return s(s({
                        paddingTop: r()
                    }, l(t)), {}, {
                        height: 277,
                        [i.down("h2")]: {
                            paddingBottom: r(),
                            height: 250,
                            marginBottom: -4,
                            containIntrinsicSize: "130px",
                            paddingTop: r(1.5)
                        }
                    })
                })), (e, t) => `calc(${`${`(100vw - ${t+16}px)`} / ${e}.25`})`),
                p = (e, t, r, i) => `calc(${`(${`(${`(100vw - (${r+16}px))`} / ${t}.25)`} * ${e})`}${i?` + ${i}`:""})`,
                u = (0, o.ZP)("div")((e => {
                    let {
                        theme: t
                    } = e;
                    const {
                        spacing: r,
                        breakpoints: i,
                        dimensions: n
                    } = t, o = n.gameThumb.height / n.gameThumb.width;
                    return s(s({}, l(t)), {}, {
                        [i.down("h2")]: {
                            paddingBottom: r(),
                            marginBottom: -4
                        },
                        "& li.primeCarouselLi, & .skeleton": {
                            padding: r(.5),
                            width: h(2, n.sidebar.collapsedWidth),
                            height: p(o, 2, n.sidebar.collapsedWidth),
                            [i.up(600)]: {
                                width: h(3, n.sidebar.collapsedWidth),
                                height: p(o, 3, n.sidebar.collapsedWidth)
                            },
                            [i.up(800)]: {
                                width: h(4, n.sidebar.collapsedWidth),
                                height: p(o, 4, n.sidebar.collapsedWidth)
                            },
                            [i.up(1e3)]: {
                                width: h(5, n.sidebar.collapsedWidth),
                                height: p(o, 5, n.sidebar.collapsedWidth)
                            },
                            [i.up(1200)]: {
                                width: h(6, n.sidebar.collapsedWidth),
                                height: p(o, 6, n.sidebar.collapsedWidth)
                            },
                            [i.up(1700)]: {
                                width: h(7, n.sidebar.collapsedWidth),
                                height: p(o, 7, n.sidebar.collapsedWidth)
                            },
                            [i.up(1910)]: {
                                width: h(7, n.sidebar.width),
                                height: p(o, 7, n.sidebar.width)
                            },
                            [i.up(2100)]: {
                                width: h(8, n.sidebar.width),
                                height: p(o, 8, n.sidebar.width)
                            },
                            [i.up(3e3)]: {
                                width: h(9, n.sidebar.width),
                                height: p(o, 9, n.sidebar.width)
                            }
                        },
                        "& .arrow": {
                            height: p(o, 2, n.sidebar.collapsedWidth),
                            [i.up(600)]: {
                                height: p(o, 3, n.sidebar.collapsedWidth, r(-1))
                            },
                            [i.up(800)]: {
                                height: p(o, 4, n.sidebar.collapsedWidth, r(-1))
                            },
                            [i.up(1e3)]: {
                                height: p(o, 5, n.sidebar.collapsedWidth, r(-1))
                            },
                            [i.up(1200)]: {
                                height: p(o, 6, n.sidebar.collapsedWidth, r(-1))
                            },
                            [i.up(1700)]: {
                                height: p(o, 7, n.sidebar.collapsedWidth, r(-1))
                            },
                            [i.up(1910)]: {
                                height: p(o, 7, n.sidebar.width, r(-1))
                            },
                            [i.up(2100)]: {
                                height: p(o, 8, n.sidebar.width, r(-1))
                            },
                            [i.up(3e3)]: {
                                height: p(o, 9, n.sidebar.width, r(-1))
                            }
                        }
                    })
                })),
                g = (0, o.ZP)("div")((e => {
                    let {
                        theme: {
                            dimensions: t,
                            breakpoints: r,
                            spacing: i
                        }
                    } = e;
                    const n = t.gameThumb.featuredHeight / t.gameThumb.featuredWidth;
                    return {
                        "& li.primeCarouselLi, & .skeleton": {
                            marginRight: i(1),
                            width: h(1, t.sidebar.collapsedWidth),
                            height: p(n, 1, t.sidebar.collapsedWidth),
                            [r.up(600)]: {
                                width: h(2, t.sidebar.collapsedWidth),
                                height: p(n, 2, t.sidebar.collapsedWidth)
                            },
                            [r.up(1100)]: {
                                width: h(3, t.sidebar.collapsedWidth),
                                height: p(n, 3, t.sidebar.collapsedWidth)
                            },
                            [r.up(1700)]: {
                                width: h(4, t.sidebar.collapsedWidth),
                                height: p(n, 4, t.sidebar.collapsedWidth)
                            },
                            [r.up(1910)]: {
                                width: h(4, t.sidebar.width),
                                height: p(n, 4, t.sidebar.width)
                            },
                            [r.up(2100)]: {
                                width: h(5, t.sidebar.width),
                                height: p(n, 5, t.sidebar.width)
                            },
                            [r.up(3e3)]: {
                                width: h(6, t.sidebar.width),
                                height: p(n, 6, t.sidebar.width)
                            }
                        },
                        "& .arrow": {
                            top: 10,
                            height: p(n, 1, t.sidebar.collapsedWidth),
                            [r.up(600)]: {
                                height: p(n, 2, t.sidebar.collapsedWidth)
                            },
                            [r.up(1100)]: {
                                height: p(n, 3, t.sidebar.collapsedWidth)
                            },
                            [r.up(1700)]: {
                                height: p(n, 4, t.sidebar.collapsedWidth)
                            },
                            [r.up(1910)]: {
                                height: p(n, 4, t.sidebar.width)
                            },
                            [r.up(2100)]: {
                                height: p(n, 5, t.sidebar.width)
                            },
                            [r.up(3e3)]: {
                                height: p(n, 6, t.sidebar.width)
                            }
                        }
                    }
                })),
                b = (0, o.ZP)("div")((e => {
                    let {
                        theme: {
                            spacing: t,
                            breakpoints: r,
                            dimensions: i
                        }
                    } = e;
                    const n = (2 * i.gameThumb.height + 8) / i.gameThumb.mobileWidth;
                    return {
                        marginTop: t(1.5),
                        position: "relative",
                        "& li.primeCarouselLi, & .skeleton": {
                            padding: t(.5),
                            width: h(2, i.sidebar.collapsedWidth),
                            height: p(n, 2, i.sidebar.collapsedWidth),
                            [r.up(600)]: {
                                width: h(3, i.sidebar.collapsedWidth),
                                height: p(n, 3, i.sidebar.collapsedWidth)
                            },
                            [r.up(800)]: {
                                width: h(4, i.sidebar.collapsedWidth),
                                height: p(n, 4, i.sidebar.collapsedWidth)
                            },
                            [r.up(1e3)]: {
                                width: h(5, i.sidebar.collapsedWidth),
                                height: p(n, 5, i.sidebar.collapsedWidth)
                            },
                            [r.up(1200)]: {
                                width: h(6, i.sidebar.collapsedWidth),
                                height: p(n, 6, i.sidebar.collapsedWidth)
                            }
                        }
                    }
                })),
                m = (0, o.ZP)("div")((e => {
                    let {
                        theme: t
                    } = e;
                    const {
                        spacing: r,
                        breakpoints: i,
                        dimensions: n
                    } = t;
                    return s(s({}, l(t)), {}, {
                        height: 168,
                        containIntrinsicSize: "168px",
                        [i.down("h2")]: {
                            paddingBottom: r(),
                            marginBottom: -4,
                            containIntrinsicSize: "148px",
                            height: 148
                        },
                        "& .arrow": {
                            height: `calc(${2*n.tag.height}px + ${r()})`,
                            top: r(3),
                            [i.down("h2")]: {
                                top: r(1.5)
                            }
                        }
                    })
                })),
                f = (0, o.ZP)("div", {
                    shouldForwardProp: e => "isDesktop" !== e
                })((e => {
                    let {
                        theme: {
                            spacing: t,
                            dimensions: r
                        },
                        isDesktop: i
                    } = e;
                    return {
                        width: `calc(${i?r.tag.thumbWidth:r.tag.thumbWidthMobile}px + ${t()})`
                    }
                })),
                w = (0, o.ZP)("div")((e => {
                    let {
                        theme: {
                            spacing: t,
                            dimensions: r
                        }
                    } = e;
                    return {
                        height: `calc(${2*r.tag.height}px + ${t(2)})`,
                        display: "flex",
                        flexDirection: "column",
                        "& a": {
                            textDecoration: "none"
                        }
                    }
                }))
        },
        77223: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return j
                }
            });
            var i = r(67294),
                n = r(49501),
                o = r(1733),
                a = r(69925),
                s = r(90335),
                d = r(47638),
                l = r(85893);
            const c = [{
                breakpoint: 0,
                width: 205,
                height: 116
            }, {
                breakpoint: 600,
                width: 223,
                height: 126
            }, {
                breakpoint: 1100,
                width: 246,
                height: 139
            }, {
                breakpoint: 1700,
                width: 218,
                height: 123
            }, {
                breakpoint: 2100,
                width: 261,
                height: 147
            }, {
                breakpoint: 3e3,
                width: 288,
                height: 163
            }];
            var h = e => {
                    let {
                        games: t,
                        completeWithPlaceholder: r,
                        limit: i,
                        eagerLoading: n,
                        onClickAction: h
                    } = e;
                    const p = void 0 !== i ? i : t ? t.length : 20;
                    return (0, l.jsxs)(d.aL, {
                        children: [!t && i ? (0, a.Z)(i).map(((e, t) => (0, l.jsx)(s.Z, {
                            isResponsive: !0
                        }, t))) : null, t && t.slice(0, p).map((e => (0, l.jsx)(o.Z, {
                            game: e,
                            onClickAction: h,
                            eagerLoading: n,
                            cardScaleFactor: 1.2,
                            isResponsive: !0,
                            imgResponsiveSizes: c
                        }, e.slug))), r && t && void 0 !== i && t.length < i ? (0, a.Z)(i - t.length).map(((e, t) => r(t))) : null]
                    })
                },
                p = r(17519),
                u = r(34386),
                g = r(62097);
            const b = [{
                breakpoint: 0,
                width: 418,
                height: 239
            }, {
                breakpoint: 600,
                width: 455,
                height: 260
            }, {
                breakpoint: 1100,
                width: 499,
                height: 285
            }, {
                breakpoint: 1700,
                width: 443,
                height: 253
            }, {
                breakpoint: 2100,
                width: 530,
                height: 303
            }, {
                breakpoint: 3e3,
                width: 584,
                height: 333
            }];
            var m = e => {
                    let {
                        loading: t,
                        limit: r = 20,
                        games: n,
                        requestData: a,
                        requestDataThreshold: d,
                        featured: c,
                        eagerLoadIndex: m
                    } = e;
                    const {
                        crazyAnalyticsService: f
                    } = i.useContext(u.Z).services, w = c ? 5 : 1, j = n && !t ? Math.floor(n.length / w) * w : Math.max(r, (null === n || void 0 === n ? void 0 : n.length) || 0), {
                        dimensions: y
                    } = (0, g.Z)(), x = [], O = () => {
                        f.gameClickedFromList(n)
                    };
                    if (n || r)
                        for (let i = 0; i < j; i += w) {
                            if (c) {
                                !(!n || !n[i]) ? x.push((0, l.jsx)(o.Z, {
                                    game: n[i],
                                    isFeatured: !0,
                                    isResponsive: !0,
                                    cardScaleFactor: 1,
                                    eagerLoading: !!(m && i < m),
                                    onClickAction: O,
                                    imgResponsiveSizes: b
                                }, n[i].slug)): t && x.push((0, l.jsx)(s.Z, {
                                    isFeatured: !0,
                                    isResponsive: !0,
                                    sx: {
                                        mx: .25
                                    }
                                }, i))
                            }
                            const e = c ? i + 1 : i,
                                r = n && n[i + 1] ? n[i + 1].slug : e;
                            x.push((0, l.jsx)(h, {
                                games: void 0 !== n ? n.slice(e, i + 5) : void 0,
                                eagerLoading: !!(m && i < m),
                                limit: t ? 4 : void 0,
                                onClickAction: O,
                                completeWithPlaceholder: t ? e => (0, l.jsx)(s.Z, {
                                    isResponsive: !0,
                                    sx: {
                                        boxSizing: "content-box",
                                        mx: .25
                                    }
                                }, e) : void 0
                            }, r))
                        }
                    const v = y.gameThumb.featuredWidth + 8;
                    return (0, l.jsx)(p.Z, {
                        elementWidth: v,
                        requestData: a,
                        requestDataThreshold: d,
                        children: x
                    })
                },
                f = r(83417),
                w = r(98142);
            var j = e => {
                let {
                    requestDataThreshold: t,
                    requestData: r,
                    games: i,
                    withTitle: o,
                    loading: a = !1,
                    loadingLimit: s
                } = e;
                return (0, l.jsxs)(w.u4, {
                    children: [o && (0, l.jsx)(f.Z, {
                        label: (0, l.jsx)(n.cC, {
                            id: "carousels.recommended.title"
                        }),
                        sx: {
                            mt: 3
                        }
                    }), (0, l.jsx)(m, {
                        games: i,
                        featured: !0,
                        requestData: r,
                        requestDataThreshold: t,
                        eagerLoadIndex: 10,
                        limit: a ? s : void 0,
                        loading: a
                    })]
                })
            }
        },
        7696: function(e, t, r) {
            var i = r(59499),
                n = r(67294),
                o = r(27444),
                a = r(85893);

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const l = n.memo((e => (0, a.jsx)(o.Z, d(d({}, e), {}, {
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15.6699 5.25759C15.2599 4.88759 14.6276 4.92005 14.2576 5.33007C13.8876 5.7401 13.92 6.37243 14.3301 6.74243L19.0483 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H19.0483L14.3301 17.2576C13.92 17.6276 13.8876 18.2599 14.2576 18.6699C14.6276 19.08 15.2599 19.1124 15.6699 18.7424L21.2109 13.7424C22.263 12.793 22.263 11.207 21.2109 10.2576L15.6699 5.25759Z"
                })
            }))));
            t.Z = l
        },
        6101: function(e, t, r) {
            var i = r(59499),
                n = r(67294),
                o = r(27444),
                a = r(85893);

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const l = n.memo((e => (0, a.jsx)(o.Z, d(d({}, e), {}, {
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21.6699 7.25758C22.08 7.62758 22.1124 8.25991 21.7424 8.66994L14.2424 16.9814C13.0169 18.3395 10.9831 18.3395 9.75757 16.9814L2.25757 8.66994C1.88757 8.25991 1.92002 7.62758 2.33005 7.25758C2.74008 6.88759 3.37241 6.92004 3.74241 7.33006L11.2424 15.6415C11.6737 16.1195 12.3263 16.1195 12.7576 15.6415L20.2576 7.33006C20.6276 6.92004 21.2599 6.88759 21.6699 7.25758Z"
                })
            }))));
            t.Z = l
        },
        58346: function(e, t, r) {
            var i = r(59499),
                n = r(67294),
                o = r(27444),
                a = r(85893);

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const l = n.memo((e => (0, a.jsx)(o.Z, d(d({}, e), {}, {
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.33007 16.7424C1.92005 16.3724 1.88759 15.7401 2.25759 15.3301L9.75759 7.0186C10.9831 5.66046 13.0169 5.66047 14.2424 7.01861L21.7424 15.3301C22.1124 15.7401 22.08 16.3724 21.6699 16.7424C21.2599 17.1124 20.6276 17.08 20.2576 16.6699L12.7576 8.35848C12.3263 7.88051 11.6737 7.88051 11.2424 8.35848L3.74243 16.6699C3.37243 17.08 2.7401 17.1124 2.33007 16.7424Z"
                })
            }))));
            t.Z = l
        },
        49423: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return D
                }
            });
            var i = r(67294),
                n = r(49501),
                o = r(59499),
                a = r(81719),
                s = r(83747),
                d = r(93545);

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function c(e) {
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
            const h = (0, a.ZP)("div")((e => {
                    let {
                        theme: {
                            spacing: t
                        }
                    } = e;
                    return {
                        display: "flex",
                        justifyContent: "center",
                        margin: t(3, 0),
                        contentVisibility: "auto",
                        contain: "layout paint",
                        containIntrinsicSize: "50px"
                    }
                })),
                p = (0, a.ZP)("div", {
                    shouldForwardProp: e => "paginationLinkType" !== e && "isEllipsis" !== e
                })((e => {
                    let {
                        theme: {
                            spacing: t
                        },
                        disabled: r,
                        paginationLinkType: i,
                        isEllipsis: n
                    } = e;
                    return c(c({
                        transition: "all 0.1s ease-in",
                        fontWeight: 800,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 50,
                        border: 2,
                        borderStyle: "solid",
                        borderColor: "transparent",
                        padding: t(),
                        background: s.D.black[50],
                        width: 50,
                        height: 50,
                        margin: 5,
                        fontSize: "20px",
                        "&:hover": {
                            background: s.D.black[20]
                        }
                    }, ("next" === i || "previous" === i) && {
                        width: "unset",
                        paddingLeft: t(2.5),
                        paddingRight: t(2.5),
                        background: s.D.brand[100],
                        "&:hover": {
                            background: s.D.brand[80]
                        }
                    }), r && c({
                        borderColor: s.D.brand[100],
                        borderWidth: 3,
                        backgroundColor: "transparent",
                        "&:hover": {}
                    }, n && {
                        borderColor: "transparent"
                    }))
                })),
                u = (0, a.ZP)("div")((() => ({
                    display: "none",
                    [`@media only screen and (min-width: ${d._X.sm}px)`]: {
                        display: "block"
                    }
                })));
            var g = r(41664),
                b = r.n(g);
            const m = (0, a.ZP)("a")((e => {
                let {
                    theme: {
                        palette: t
                    }
                } = e;
                return {
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: t.secondary.contrastText,
                    "&:hover": {
                        borderColor: t.secondary.contrastText,
                        cursor: "pointer"
                    },
                    "&:active": {
                        background: t.primary.main,
                        borderColor: "transparent"
                    }
                }
            }));
            var f = r(85893);

            function w(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var y = e => {
                    let {
                        urlGenerator: t,
                        page: r,
                        disabled: i,
                        children: n,
                        sorting: o
                    } = e;
                    if (i) return (0, f.jsx)(f.Fragment, {
                        children: n
                    });
                    const a = function(e, t, r) {
                        return e(t, r)
                    }(t, r, o);
                    return (0, f.jsx)(b(), j(j({}, a), {}, {
                        passHref: !0,
                        children: (0, f.jsx)(m, {
                            children: n
                        })
                    }))
                },
                x = r(48266);
            var O = e => {
                    let {
                        paginationLinkType: t,
                        text: r,
                        disabled: n,
                        page: o,
                        urlGenerator: a,
                        isEllipsis: s
                    } = e;
                    const {
                        routeHelper: d
                    } = i.useContext(x.Z), l = d ? d.getSorting() : null;
                    return (0, f.jsx)(y, {
                        page: o,
                        disabled: n,
                        urlGenerator: a,
                        sorting: l,
                        children: (0, f.jsx)(p, {
                            isEllipsis: s,
                            disabled: n,
                            paginationLinkType: t,
                            children: r
                        })
                    })
                },
                v = r(27444);

            function P(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : P(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Z = i.memo((e => (0, f.jsx)(v.Z, C(C({}, e), {}, {
                    viewBox: "0 0 24 24",
                    children: (0, f.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.33006 18.7424C8.74008 19.1124 9.37242 19.08 9.74241 18.6699C10.1124 18.2599 10.08 17.6276 9.66993 17.2576L4.95171 13L21 13C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11L4.9517 11L9.66993 6.74242C10.08 6.37243 10.1124 5.7401 9.74241 5.33007C9.37242 4.92004 8.74008 4.88759 8.33006 5.25759L2.78909 10.2576C1.73696 11.207 1.73696 12.793 2.78909 13.7424L8.33006 18.7424Z"
                    })
                })))),
                k = r(7696);
            var S = e => {
                const {
                    result: t,
                    linkLimit: r,
                    pageLimit: i,
                    urlGenerator: o
                } = e, {
                    pagination: a,
                    total: s
                } = t, d = i || Number.MAX_SAFE_INTEGER, l = Math.min(Math.ceil(s / a.size), d), c = r || 9, h = a.page, p = function(e, t, r) {
                    const i = Math.floor(t / 2),
                        n = e - i,
                        o = t % 2 !== 0,
                        a = [],
                        s = e + i - r;
                    if (n <= 0) {
                        const e = Math.min(t, r);
                        for (let t = 1; t <= e; t++) a.push(t)
                    } else if (s > 0)
                        for (let d = Math.max(1, e - s - i + 1); d <= r; d++) a.push(d);
                    else {
                        const t = e + i;
                        for (let e = n + (o ? 0 : 1); e <= t; e++) a.push(e)
                    }
                    return a
                }(h, c, l), g = h > 1, b = h < l;
                return p.length < 2 ? null : (0, f.jsxs)(f.Fragment, {
                    children: [g && (0, f.jsx)(O, {
                        page: h - 1,
                        disabled: !1,
                        text: (0, f.jsxs)(f.Fragment, {
                            children: [(0, f.jsx)(Z, {
                                sx: {
                                    mr: 1
                                }
                            }), (0, f.jsx)(u, {
                                children: (0, f.jsx)(n.cC, {
                                    id: "common.pagination.previous"
                                })
                            })]
                        }),
                        paginationLinkType: "previous",
                        urlGenerator: o
                    }), (0, f.jsx)(O, {
                        page: 1,
                        disabled: 1 === h,
                        text: (0, f.jsx)(f.Fragment, {
                            children: 1
                        }),
                        urlGenerator: o
                    }), " ", h <= 3 && l > 1 && (0, f.jsx)(O, {
                        page: 2,
                        disabled: 2 === h,
                        text: (0, f.jsx)(f.Fragment, {
                            children: 2
                        }),
                        urlGenerator: o
                    }), h <= 3 && l > 2 && (0, f.jsx)(O, {
                        page: 3,
                        disabled: 3 === h,
                        text: (0, f.jsx)(f.Fragment, {
                            children: 3
                        }),
                        urlGenerator: o
                    }), h > 3 && (0, f.jsx)(O, {
                        page: h,
                        disabled: !0,
                        text: (0, f.jsx)(f.Fragment, {
                            children: "\u2026"
                        }),
                        urlGenerator: o,
                        isEllipsis: !0
                    }), h > 3 && (0, f.jsx)(O, {
                        page: h,
                        disabled: !0,
                        text: (0, f.jsx)(f.Fragment, {
                            children: h
                        }),
                        urlGenerator: o
                    }), " ", b && (0, f.jsx)(O, {
                        page: h + 1,
                        disabled: !1,
                        text: (0, f.jsxs)(f.Fragment, {
                            children: [(0, f.jsx)(u, {
                                children: (0, f.jsx)(n.cC, {
                                    id: "common.pagination.next"
                                })
                            }), (0, f.jsx)(k.Z, {
                                sx: {
                                    ml: 1
                                }
                            })]
                        }),
                        paginationLinkType: "next",
                        urlGenerator: o
                    })]
                })
            };
            var D = e => {
                let {
                    urlGenerator: t,
                    games: r,
                    pageLimit: i
                } = e;
                return (0, f.jsx)(h, {
                    children: (0, f.jsx)(S, {
                        result: r,
                        pageLimit: i,
                        urlGenerator: t
                    })
                })
            }
        },
        43120: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return v
                }
            });
            var i = r(59499),
                n = r(67294),
                o = r(49501),
                a = r(41796),
                s = r(93545),
                d = r(81719);

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const h = (0, d.ZP)("div")((e => {
                    let {
                        theme: {
                            spacing: t
                        }
                    } = e;
                    return {
                        backgroundColor: "transparent",
                        padding: 0,
                        margin: t(2),
                        contentVisibility: "auto",
                        contain: "layout paint",
                        containIntrinsicSize: "400px",
                        backgroundImage: "none",
                        overflowAnchor: "none"
                    }
                })),
                p = (0, d.ZP)("div")((e => {
                    let {
                        theme: {
                            palette: t,
                            spacing: r,
                            breakpoints: i
                        }
                    } = e;
                    return {
                        borderTopLeftRadius: "4px",
                        borderTopRightRadius: "4px",
                        color: t.secondary.contrastText,
                        fontWeight: "normal",
                        margin: 0,
                        marginRight: r(),
                        padding: r(2, 3),
                        textTransform: "none",
                        fontSize: s.CH.body,
                        height: 56,
                        backgroundColor: t.primary.main,
                        [i.down("md")]: {
                            paddingTop: r(2.5),
                            width: "unset",
                            fontSize: s.CH.bodySmall
                        }
                    }
                })),
                u = (0, d.ZP)("div")((e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        backgroundColor: t.palette.primary.main,
                        borderWidth: 0,
                        color: t.palette.primary.contrastText,
                        paddingLeft: t.spacing(3),
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        margin: "auto",
                        lineHeight: 1.5,
                        "& a": (0, s.GC)(),
                        [t.breakpoints.down("md")]: {
                            paddingLeft: 0
                        }
                    }
                })),
                g = (0, d.ZP)("div", {
                    shouldForwardProp: e => "textContainerClamped" !== e && "clampedHeight" !== e && "maxHeightContent" !== e
                })((e => {
                    let {
                        theme: t,
                        textContainerClamped: r,
                        clampedHeight: i,
                        maxHeightContent: n
                    } = e;
                    const {
                        spacing: o,
                        breakpoints: a,
                        dimensions: d
                    } = t, l = 3 * d.gameThumb.height + 2 * (0, s.bG)(t) - 56 - 43 - (0, s.bG)(t), h = void 0 !== i ? i : 64;
                    return c(c(c({
                        lineHeight: "22px",
                        maxHeight: "unset",
                        overflowY: "auto",
                        overflowX: "hidden",
                        transition: "max-height 0.3s ease-out",
                        padding: o(3)
                    }, (0, s.no)(4)), r && {
                        maxHeight: Math.max(l, h),
                        [a.down("md")]: {
                            maxHeight: i ? i + 60 : 124
                        }
                    }), void 0 !== n && r && {
                        maxHeight: n
                    })
                })),
                b = (0, d.ZP)("div")((e => {
                    let {
                        theme: {
                            breakpoints: t,
                            palette: r,
                            spacing: i
                        }
                    } = e;
                    return {
                        borderBottomColor: r.secondary.light,
                        borderBottomWidth: 9,
                        borderBottomStyle: "solid",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        margin: i(1, 0, 0, -3),
                        height: 43,
                        "&:hover": {
                            borderBottomColor: (0, a._j)(r.secondary.light, .2),
                            "& .showMore": {
                                backgroundColor: (0, a._j)(r.secondary.light, .2)
                            }
                        },
                        [t.down("md")]: {
                            marginLeft: 0
                        }
                    }
                })),
                m = (0, d.ZP)("div")((e => {
                    let {
                        theme: {
                            palette: t
                        }
                    } = e;
                    return {
                        borderTopLeftRadius: "4px",
                        borderTopRightRadius: "4px",
                        display: "flex",
                        borderColor: t.secondary.light,
                        backgroundColor: t.secondary.light,
                        color: t.secondary.contrastText,
                        marginBottom: -1
                    }
                })),
                f = (0, d.ZP)("div")((e => {
                    let {
                        theme: {
                            spacing: t
                        }
                    } = e;
                    return {
                        fontSize: s.CH.bodySmall,
                        padding: t(1),
                        paddingLeft: t(2)
                    }
                }));
            var w = r(87835),
                j = r(58346),
                y = r(6101),
                x = r(85893);
            class O extends n.Component {
                constructor() {
                    super(...arguments), (0, i.Z)(this, "state", {
                        showFullText: !1
                    }), (0, i.Z)(this, "toggleShowMore", (() => this.setState({
                        showFullText: !this.state.showFullText
                    })))
                }
                render() {
                    const {
                        maxHeightContent: e,
                        children: t,
                        clampedHeight: r
                    } = this.props;
                    return (0, x.jsxs)(h, {
                        children: [this.renderTab(), (0, x.jsxs)(u, {
                            children: [(0, x.jsx)(g, {
                                textContainerClamped: !this.state.showFullText,
                                maxHeightContent: e,
                                clampedHeight: r,
                                children: t
                            }), this.renderToggleShowMore()]
                        })]
                    })
                }
                renderTab() {
                    const {
                        label: e
                    } = this.props;
                    return (0, x.jsx)("div", {
                        style: {
                            display: "flex"
                        },
                        children: (0, x.jsx)(p, {
                            children: e
                        })
                    })
                }
                renderToggleShowMore() {
                    const {
                        showFullText: e
                    } = this.state, t = e ? "common.showLess" : "common.showMore", r = e ? j.Z : y.Z;
                    return (0, x.jsx)(b, {
                        onClick: this.toggleShowMore,
                        children: (0, x.jsxs)(m, {
                            className: "showMore",
                            children: [(0, x.jsx)(f, {
                                children: (0, x.jsx)(o.cC, {
                                    id: t
                                })
                            }), (0, x.jsx)(r, {
                                color: "secondary",
                                sx: {
                                    pr: 1,
                                    width: 25,
                                    mt: .5
                                }
                            })]
                        })
                    })
                }
            }
            var v = (0, w.Z)(O)
        },
        34779: function(e, t, r) {
            var i = r(67294),
                n = r(9008),
                o = r.n(n),
                a = r(40480),
                s = r(13839),
                d = r(4235),
                l = r(85893);
            const c = 1200,
                h = 630,
                p = "crazygames/share.png";
            t.Z = e => {
                let {
                    canonical: t,
                    title: r,
                    description: n,
                    imageUrl: u = p,
                    imageWidth: g = c,
                    imageHeight: b = h,
                    type: m
                } = e;
                const {
                    locale: f
                } = i.useContext(d.Z), w = (0, s.ZP)(u, {
                    w: g,
                    h: b,
                    fit: "crop"
                });
                return (0, l.jsxs)(o(), {
                    children: [(0, l.jsx)("meta", {
                        property: "og:url",
                        content: t
                    }), (0, l.jsx)("meta", {
                        property: "og:title",
                        content: r
                    }), (0, l.jsx)("meta", {
                        property: "og:description",
                        content: n
                    }), (0, l.jsx)("meta", {
                        property: "og:locale",
                        content: (0, a.Ld)(f)
                    }), (0, l.jsx)("meta", {
                        property: "og:image",
                        content: w
                    }), (0, l.jsx)("meta", {
                        property: "og:image:width",
                        content: g.toString()
                    }), (0, l.jsx)("meta", {
                        property: "og:image:height",
                        content: b.toString()
                    }), m && (0, l.jsx)("meta", {
                        property: "og:type",
                        content: m
                    }), (0, l.jsx)("meta", {
                        property: "twitter:card",
                        content: "summary_large_image"
                    }), (0, l.jsx)("meta", {
                        property: "twitter:url",
                        content: t
                    }), (0, l.jsx)("meta", {
                        property: "twitter:title",
                        content: r
                    }), (0, l.jsx)("meta", {
                        property: "twitter:description",
                        content: n
                    }), (0, l.jsx)("meta", {
                        property: "twitter:image",
                        content: w
                    })]
                })
            }
        },
        10041: function(e, t, r) {
            var i = r(59499),
                n = r(67294),
                o = r(48266),
                a = r(85893);

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }
            t.Z = function(e) {
                return class extends n.Component {
                    static async getInitialProps(t) {
                        return e.getInitialProps ? await e.getInitialProps(t) : {}
                    }
                    render() {
                        return (0, a.jsx)(o.Z.Consumer, {
                            children: t => {
                                let {
                                    routeHelper: r
                                } = t;
                                return (0, a.jsx)(e, function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? s(Object(r), !0).forEach((function(t) {
                                            (0, i.Z)(e, t, r[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                        }))
                                    }
                                    return e
                                }({
                                    routeHelper: r
                                }, this.props))
                            }
                        })
                    }
                }
            }
        },
        69925: function(e, t) {
            t.Z = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return Array.from(new Array(e), ((e, r) => r + t))
            }
        },
        45670: function(e, t) {
            t.Z = function(e, t) {
                return t.isIos && e.swap ? e.swap : e.data
            }
        }
    }
]);