(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [79203], {
        38950: function(e, t, r) {
            "use strict";
            r.d(t, {
                l: function() {
                    return p
                }
            });
            var n = r(59499),
                i = r(67294),
                s = r(49501),
                a = r(81719),
                o = r(93545);
            const l = (0, a.ZP)("div")((e => {
                let {
                    theme: {
                        spacing: t
                    }
                } = e;
                return {
                    textTransform: "uppercase",
                    fontSize: o.CH.bodySmall,
                    textAlign: "center",
                    marginLeft: t(.5)
                }
            }));
            var d = r(49471),
                c = r(85893);

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

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const p = e => {
                let {
                    code: t,
                    width: r,
                    height: n,
                    align: a,
                    className: o = "",
                    id: m,
                    customLabelStyle: p,
                    customPaperStyle: u
                } = e;
                const g = i.useContext(d.v),
                    f = m || t;
                i.useEffect((() => {
                    const e = {
                        code: t,
                        id: f
                    };
                    return g.addAdUnit(e),
                        function() {
                            g.removeAdUnit(e)
                        }
                }), [t, f, g]);
                const b = a || "center",
                    x = h({
                        textAlign: b
                    }, p),
                    v = h({
                        textAlign: b
                    }, u),
                    y = {
                        width: r,
                        height: n,
                        margin: "auto",
                        paddingTop: 4,
                        overflow: "hidden"
                    },
                    w = {
                        width: r,
                        height: n,
                        position: "relative"
                    };
                return (0, c.jsxs)("div", {
                    className: o,
                    style: {
                        width: "100%",
                        display: "block"
                    },
                    children: [(0, c.jsx)(l, {
                        style: x,
                        children: (0, c.jsx)(s.cC, {
                            id: "common.advertisement.label"
                        })
                    }), (0, c.jsx)("div", {
                        style: h(h({}, v), {}, {
                            width: "100%",
                            height: "100%",
                            position: "relative",
                            display: "block",
                            background: "transparent"
                        }),
                        children: (0, c.jsx)("div", {
                            style: y,
                            children: (0, c.jsx)("div", {
                                id: f,
                                style: w
                            })
                        })
                    })]
                })
            }
        },
        49471: function(e, t, r) {
            "use strict";
            r.d(t, {
                v: function() {
                    return R
                },
                Z: function() {
                    return A
                }
            });
            var n = r(4730),
                i = r(59499),
                s = r(67294),
                a = r(9422);
            class o {
                constructor(e) {
                    (0, i.Z)(this, "id", void 0), (0, i.Z)(this, "isInView", void 0), (0, i.Z)(this, "isInFocus", void 0), (0, i.Z)(this, "isHidden", void 0), (0, i.Z)(this, "inViewSince", void 0), (0, i.Z)(this, "previousTimeInView", void 0), (0, i.Z)(this, "inDOMSince", void 0), this.id = e, this.previousTimeInView = 0, this.isInView = !1, this.isInFocus = !0, this.isHidden = !1, this.inViewSince = Date.now(), this.inDOMSince = this.inViewSince
                }
                setHidden(e) {
                    this.isHidden = e
                }
                canRefresh(e, t) {
                    return this.isInView && this.isInFocus && this.totalTimeInView() >= e && this.totalTimeInDOM() >= t
                }
                refreshed() {
                    this.previousTimeInView = 0, this.inViewSince = Date.now(), this.inDOMSince = this.inViewSince
                }
                cameIntoView() {
                    this.isInView = !0, this.inViewSince = Date.now()
                }
                removedFromView() {
                    this.isInView = !1, this.updateTimeInView()
                }
                pageLostFocus() {
                    this.isInFocus = !1, this.isInView && this.updateTimeInView()
                }
                pageRegainedFocus() {
                    this.isInFocus = !0, this.isInView && (this.inViewSince = Date.now())
                }
                updateTimeInView() {
                    const e = Date.now() - this.inViewSince;
                    this.previousTimeInView += e, this.inViewSince = Date.now()
                }
                totalTimeInDOM() {
                    return Date.now() - this.inDOMSince
                }
                totalTimeInView() {
                    return this.isInView ? this.previousTimeInView + Date.now() - this.inViewSince : this.previousTimeInView
                }
            }
            var l = class {
                    constructor(e, t, r) {
                        this.viewportThreshold = e, this.minimumTimeInViewInMs = t, this.minimumTimeinDOMInMs = r, (0, i.Z)(this, "observer", void 0), (0, i.Z)(this, "adUnits", void 0), (0, i.Z)(this, "hiddenKey", void 0), (0, i.Z)(this, "visibilityChangeKey", void 0), (0, i.Z)(this, "pageFocusChangeCallBacks", void 0), (0, i.Z)(this, "ioCallbackPending", void 0), (0, i.Z)(this, "ioCallbackPendingPromise", void 0), (0, i.Z)(this, "ioCallbackPendingResolve", void 0), (0, i.Z)(this, "handleVisibilityChange", (() => {
                            const e = document[this.hiddenKey],
                                t = a.Z.isFullscreen() || a.Z.isFakeFullscreen();
                            e || t ? this.pageLostFocus() : this.pageRegainedFocus()
                        })), (0, i.Z)(this, "handleFullscreenChange", (() => {
                            a.Z.isFullscreen() || a.Z.isFakeFullscreen() ? this.pageLostFocus() : this.pageRegainedFocus()
                        })), this.adUnits = [], this.setVisibilityKeys(), this.observer = this.createObserver(), this.installEventListeners(), this.pageFocusChangeCallBacks = [], this.ioCallbackPending = [], this.ioCallbackPendingPromise = null, this.ioCallbackPendingResolve = null
                    }
                    addElement(e) {
                        if (this.adUnits.find((t => t.id === e))) return;
                        const t = this.getElementById(e);
                        t && (this.ioCallbackPending.push(e), this.adUnits.push(new o(e)), this.observer.observe(t.parentElement))
                    }
                    removeElement(e) {
                        this.adUnits = this.adUnits.filter((t => t.id !== e));
                        const t = this.getElementById(e);
                        t && this.observer.unobserve(t.parentElement), this.removeWaitingForCallbackElement(e)
                    }
                    addPageFocusChangeCallback(e) {
                        this.pageFocusChangeCallBacks.push(e)
                    }
                    stop() {
                        this.adUnits = [], this.pageFocusChangeCallBacks = [], this.observer.disconnect(), this.removeEventListeners()
                    }
                    unitsReadyForRefresh() {
                        return this.adUnits.filter((e => e.canRefresh(this.minimumTimeInViewInMs, this.minimumTimeinDOMInMs)))
                    }
                    waitForObservedUnitsCallbacks() {
                        return this.ioCallbackPendingPromise || (this.ioCallbackPendingPromise = new Promise((e => {
                            this.ioCallbackPendingResolve = e, 0 === this.ioCallbackPending.length && e()
                        }))), this.ioCallbackPendingPromise
                    }
                    isUnitHidden(e) {
                        const t = this.adUnits.find((t => t.id === e));
                        return !t || t.isHidden
                    }
                    refreshedUnits(e) {
                        e.map((e => this.getObservedUnit(e))).map((e => e.refreshed()))
                    }
                    intersectionCallback(e) {
                        e.forEach((e => {
                            const t = e.target.firstElementChild.id,
                                r = this.getObservedUnit(t);
                            e.intersectionRatio >= this.viewportThreshold ? r.cameIntoView() : r.removedFromView(), r.setHidden(this.isEntryHidden(e)), this.removeWaitingForCallbackElement(t)
                        }))
                    }
                    isEntryHidden(e) {
                        const {
                            boundingClientRect: t
                        } = e;
                        return this.isBoundingRectHidden(t)
                    }
                    isBoundingRectHidden(e) {
                        return 0 === e.height && 0 === e.width
                    }
                    getElementById(e) {
                        const t = document.getElementById(e);
                        return t || (console.error(`[AdObserver] could not find element with id ${e}`), null)
                    }
                    getObservedUnit(e) {
                        const t = this.adUnits.find((t => t.id === e));
                        if (!t) throw new Error("[AdObserver] observed unit not found");
                        return t
                    }
                    pageLostFocus() {
                        this.adUnits.map((e => e.pageLostFocus())), this.invokeCallBacks(!1)
                    }
                    pageRegainedFocus() {
                        this.adUnits.map((e => e.pageRegainedFocus())), this.invokeCallBacks(!0)
                    }
                    invokeCallBacks(e) {
                        this.pageFocusChangeCallBacks.forEach((t => t(e)))
                    }
                    createObserver() {
                        return new IntersectionObserver(((e, t) => {
                            this.intersectionCallback(e)
                        }), {
                            threshold: [this.viewportThreshold]
                        })
                    }
                    installEventListeners() {
                        document.addEventListener(this.visibilityChangeKey, this.handleVisibilityChange, !1), this.installFullscreenListener()
                    }
                    removeEventListeners() {
                        document.removeEventListener(this.visibilityChangeKey, this.handleVisibilityChange), this.removeFullscreenListeners()
                    }
                    installFullscreenListener() {
                        a.Z.addFullscreenListener(this.handleFullscreenChange), a.Z.addFakeFullscreenListener(this.handleFullscreenChange)
                    }
                    removeFullscreenListeners() {
                        a.Z.removeFullscreenListener(this.handleFullscreenChange), a.Z.removeFakeFullscreenListener(this.handleFullscreenChange)
                    }
                    setVisibilityKeys() {
                        "undefined" !== typeof document.hidden ? (this.hiddenKey = "hidden", this.visibilityChangeKey = "visibilitychange") : "undefined" !== typeof document.msHidden ? (this.hiddenKey = "msHidden", this.visibilityChangeKey = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (this.hiddenKey = "webkitHidden", this.visibilityChangeKey = "webkitvisibilitychange")
                    }
                    removeWaitingForCallbackElement(e) {
                        this.ioCallbackPending = this.ioCallbackPending.filter((t => t !== e)), 0 === this.ioCallbackPending.length && this.ioCallbackPendingResolve && (this.ioCallbackPendingResolve(), this.ioCallbackPendingResolve = null)
                    }
                },
                d = r(477),
                c = r(63530),
                m = r(40183);
            var h = new class {
                    constructor() {
                        (0, i.Z)(this, "loadingPromise", void 0), (0, i.Z)(this, "loadListeners", void 0), (0, i.Z)(this, "isLoaded", void 0), this.loadingPromise = null, this.loadListeners = [], this.isLoaded = !1
                    }
                    adsLoaded() {
                        return this.isLoaded
                    }
                    loadCrazyAds(e) {
                        if (!this.loadingPromise) {
                            if (e.shouldDisableAds()) this.loadingPromise = Promise.resolve();
                            else {
                                const e = c.Z.Instance.data.advertizing.bundle;
                                this.loadingPromise = (0, m.Z)(e, !0)
                            }
                            this.loadingPromise.then((() => {
                                this.finishedLoading()
                            }))
                        }
                        return this.loadingPromise
                    }
                    addOnLoadListener(e) {
                        this.loadListeners.push(e), this.isLoaded && this.invokeListener(e)
                    }
                    removeLoadListener(e) {
                        this.loadListeners = this.loadListeners.filter((t => e === t))
                    }
                    finishedLoading() {
                        this.isLoaded = !0, this.loadListeners.forEach((e => {
                            this.invokeListener(e)
                        }))
                    }
                    invokeListener(e) {
                        try {
                            e()
                        } catch (t) {
                            console.error("[AdsLoader] error calling listener", t.message)
                        }
                    }
                },
                p = r(87835),
                u = r(20287),
                g = r(33448),
                f = r(52594),
                b = r(47184),
                x = r(81761),
                v = r(83921);
            var y = class {
                    constructor(e) {
                        (0, i.Z)(this, "refreshTimer", void 0), (0, i.Z)(this, "refreshTimerStartedAt", void 0), (0, i.Z)(this, "refreshTimeRemainingInMs", void 0), (0, i.Z)(this, "timeBetweenRefreshesInMs", void 0), (0, i.Z)(this, "gameplayStarted", void 0), (0, i.Z)(this, "timeLastRefreshed", void 0), (0, i.Z)(this, "onRefresh", void 0), this.onRefresh = e, this.timeBetweenRefreshesInMs = (0, v.cY)() ? 51e3 : 56e3, this.refreshTimeRemainingInMs = this.timeBetweenRefreshesInMs, this.gameplayStarted = !1, this.timeLastRefreshed = 0
                    }
                    isLowEndHelper() {
                        return !1
                    }
                    isSmartHelper() {
                        return !1
                    }
                    isDefaultHelper() {
                        return !1
                    }
                    initRefreshHelper() {}
                    resetRefreshHelper() {}
                    refresh() {
                        (this.onRefresh() || this.refreshTimeRemainingInMs <= 0) && (this.refreshTimeRemainingInMs = this.timeBetweenRefreshesInMs, this.timeLastRefreshed = Date.now()), this.startRefreshTimer()
                    }
                    requestAdsFinished() {
                        this.timeLastRefreshed = Date.now()
                    }
                    startRefreshTimer() {
                        this.refreshTimeRemainingInMs <= 0 ? this.refresh() : (this.refreshTimerStartedAt = Date.now(), this.refreshTimer = window.setTimeout((() => {
                            this.refreshTimeRemainingInMs = 0, this.refresh()
                        }), this.refreshTimeRemainingInMs))
                    }
                    stopRefreshTimer() {
                        if (this.refreshTimer) {
                            clearTimeout(this.refreshTimer);
                            const e = Date.now() - this.refreshTimerStartedAt;
                            this.refreshTimeRemainingInMs = this.refreshTimeRemainingInMs - e
                        }
                    }
                    resetRefreshTimer(e) {
                        let t = this.timeBetweenRefreshesInMs;
                        void 0 !== e && (t = Math.max(e, 0)), this.refreshTimer && clearTimeout(this.refreshTimer), this.refreshTimerStartedAt = Date.now(), this.refreshTimeRemainingInMs = t
                    }
                },
                w = r(58401);
            const j = 3e4,
                O = 18e4;
            var P = class extends y {
                constructor(e, t) {
                    super(e), (0, i.Z)(this, "smartRefresh", void 0), (0, i.Z)(this, "refresh", (() => {
                        (this.onRefresh() || this.refreshTimeRemainingInMs <= 0) && (this.gameplayStarted ? this.refreshTimeRemainingInMs = this.smartRefresh.maxWaitInMs || O : this.refreshTimeRemainingInMs = this.smartRefresh.minWaitInMs || j, this.timeLastRefreshed = Date.now()), this.startRefreshTimer()
                    })), (0, i.Z)(this, "initRefreshHelper", (() => {
                        super.initRefreshHelper(), window.addEventListener("message", this.handleMessage)
                    })), (0, i.Z)(this, "resetRefreshHelper", (() => {
                        super.resetRefreshHelper(), window.removeEventListener("message", this.handleMessage)
                    })), (0, i.Z)(this, "handleMessage", (e => {
                        if (e.data && e.data.type === w.V) switch (e.data.event) {
                            case "adFinished":
                            case "gameplayStart":
                                {
                                    if (this.gameplayStarted) return;this.gameplayStarted = !0;
                                    const e = this.smartRefresh.maxWaitInMs || O;this.resetRefreshTimer(e),
                                    this.startRefreshTimer();
                                    break
                                }
                            case "rewardedAd":
                            case "midgameAd":
                            case "gameplayStop":
                                {
                                    if (!this.gameplayStarted) return;this.gameplayStarted = !1;
                                    const e = Date.now() - this.timeLastRefreshed,
                                        t = (this.smartRefresh.minWaitInMs || j) - e;this.resetRefreshTimer(t),
                                    this.startRefreshTimer();
                                    break
                                }
                        }
                    })), this.smartRefresh = t, this.refreshTimeRemainingInMs = t.minWaitInMs || j
                }
                isSmartHelper() {
                    return !0
                }
                requestAdsFinished() {
                    super.requestAdsFinished(), this.startRefreshTimer()
                }
            };
            var k = class extends y {
                constructor() {
                    super(...arguments), (0, i.Z)(this, "timeInitCalled", void 0), (0, i.Z)(this, "handleMessage", (e => {
                        var t, r;
                        if (e.data && e.data.type === w.V && ("gameFinishedLoading" === (null === (t = e.data) || void 0 === t ? void 0 : t.event) || "gameLoadingStateResponse" === (null === (r = e.data) || void 0 === r ? void 0 : r.event) && e.data.success)) {
                            const e = Date.now() - this.timeInitCalled;
                            e > 45e3 ? this.refresh() : (this.refreshTimeRemainingInMs = Math.max(0, this.timeBetweenRefreshesInMs - e), this.startRefreshTimer())
                        }
                    }))
                }
                initRefreshHelper() {
                    var e, t;
                    super.initRefreshHelper(), this.timeInitCalled = Date.now(), window.addEventListener("message", this.handleMessage), null === (e = document.getElementById("game-iframe")) || void 0 === e || null === (t = e.contentWindow) || void 0 === t || t.postMessage("check-loading-state", "*")
                }
                resetRefreshHelper() {
                    super.resetRefreshHelper(), window.removeEventListener("message", this.handleMessage)
                }
            };
            var C = class extends y {
                    isDefaultHelper() {
                        return !0
                    }
                    requestAdsFinished() {
                        super.requestAdsFinished(), this.startRefreshTimer()
                    }
                },
                Z = r(28584),
                S = r(87011),
                T = r(85893);
            const D = ["dollarRate", "priceFloor"],
                L = ["disabled"];

            function I(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? I(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : I(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function F() {
                throw new Error("[AdContext] No Advertising Context")
            }
            const R = s.createContext({
                    addAdUnit: e => F(),
                    removeAdUnit: e => F(),
                    adblock: !1
                }),
                G = {
                    GB: .2,
                    US: .2
                };
            class M extends s.Component {
                constructor(e) {
                    super(e), (0, i.Z)(this, "adUnits", void 0), (0, i.Z)(this, "observer", void 0), (0, i.Z)(this, "maxNoRefreshes", void 0), (0, i.Z)(this, "noTimesRefreshed", void 0), (0, i.Z)(this, "viewPortThreshold", void 0), (0, i.Z)(this, "timeInViewInMs", void 0), (0, i.Z)(this, "timeInDomInMs", void 0), (0, i.Z)(this, "refreshHelper", void 0), (0, i.Z)(this, "lowendRefreshControl", void 0), (0, i.Z)(this, "countryCode", null), (0, i.Z)(this, "deviceInfo", null), (0, i.Z)(this, "loadingState", void 0), (0, i.Z)(this, "getCountryCode", (() => this.countryCode)), (0, i.Z)(this, "onCMPInstalled", (() => {
                        this.toCMPLoading()
                    })), (0, i.Z)(this, "onCMPConsented", (() => {
                        this.toWaitForConsent()
                    })), (0, i.Z)(this, "onAdsLoaded", (() => {
                        "loadingAds" === this.loadingState && (this.loadingState = "waitingCountry", this.initAds(), this.toWaitingCountry())
                    })), (0, i.Z)(this, "addAdUnit", (e => {
                        this.adUnits.find((t => t.id === e.id)) || (this.adUnits.push(e), this.observer && this.addUnitToObserver(e))
                    })), (0, i.Z)(this, "removeAdUnit", (e => {
                        this.adUnits = this.adUnits.filter((t => t.id !== e.id)), this.observer && this.removeUnitFromObserver(e)
                    })), (0, i.Z)(this, "refreshAds", (() => {
                        if (this.noTimesRefreshed >= this.maxNoRefreshes) return !1;
                        if (this.noTimesRefreshed += 1, !this.observer) return !1;
                        const e = this.observer.unitsReadyForRefresh(),
                            t = this.adUnits.filter((e => {
                                const t = this.getUnitDefinition(e.code);
                                return !!t && t.definition.refresh
                            })).filter((t => e.find((e => e.id === t.id)))).map((e => e.id));
                        if (0 === t.length) return !1;
                        const r = this.refreshAdsOptions(),
                            n = window.CrazygamesAds;
                        return "undefined" !== typeof n && (n.refreshAds({
                            codes: t
                        }, r), this.observer.refreshedUnits(t), !0)
                    })), (0, i.Z)(this, "pageFocusChangeCallback", (e => {
                        this.getRefreshHelper().stopRefreshTimer(), e && "finished" === this.loadingState && this.getRefreshHelper().refresh()
                    })), this.adUnits = [], this.maxNoRefreshes = 64, this.noTimesRefreshed = 0, this.timeInViewInMs = 1e4, this.viewPortThreshold = .5, this.observer = null, this.loadingState = "loadingAds", this.lowendRefreshControl = Math.random() < .05
                }
                componentDidMount() {
                    const {
                        routeHelper: e
                    } = this.props, {
                        smartRefresh: t
                    } = this.props.adConfig;
                    let r = 42e3;
                    if (t.enabled) {
                        r = (t.minWaitInMs || j) - 2e3
                    }
                    this.timeInDomInMs = r, this.loadingState = "loadingAds", this.observer = new l(this.viewPortThreshold, this.timeInViewInMs, this.timeInDomInMs), d.Z.addInstallListener(this.onCMPInstalled);
                    e.shouldDisableAds() || this.props.disabled || (h.loadCrazyAds(e), h.addOnLoadListener(this.onAdsLoaded))
                }
                componentWillUnmount() {
                    var e;
                    this.loadingState = "loadingAds", this.observer && (this.stopObserving(), this.observer = null), d.Z.removeConsentListener(this.onCMPConsented), d.Z.removeInstallListener(this.onCMPInstalled);
                    const {
                        routeHelper: t
                    } = this.props;
                    t.shouldDisableAds() || h.removeLoadListener(this.onAdsLoaded), null === (e = this.getRefreshHelper()) || void 0 === e || e.resetRefreshHelper();
                    const r = window;
                    r.CrazygamesAds && r.CrazygamesAds.nextPage && r.CrazygamesAds.nextPage()
                }
                render() {
                    return (0, T.jsx)(R.Provider, {
                        value: {
                            addAdUnit: this.addAdUnit,
                            removeAdUnit: this.removeAdUnit,
                            adblock: !1
                        },
                        children: this.props.children
                    })
                }
                initAds() {
                    window.CrazygamesAds.initAds(), this.props.services.crazyAnalyticsService.adsFinishedLoading()
                }
                async toWaitingCountry() {
                    if ("waitingCountry" === this.loadingState && !this.countryCode) {
                        const {
                            services: e
                        } = this.props, {
                            userInfoService: t
                        } = e, r = await t.getUserInfo();
                        this.countryCode = r.countryCode, this.deviceInfo = r.device, this.initRefreshHelper(), "waitingCountry" === this.loadingState && (this.shouldWaitUntilConsented() && d.Z.addConsentListener(this.onCMPConsented), this.loadingState = "loadingCMP", this.toCMPLoading())
                    }
                }
                toCMPLoading() {
                    "loadingCMP" === this.loadingState && ((0, x.Z)(this.getCountryCode(), this.props.routeHelper) && !d.Z.isInstalled() || (this.loadingState = "waitConsent", this.toWaitForConsent()))
                }
                toWaitForConsent() {
                    "waitConsent" === this.loadingState && (this.shouldWaitUntilConsented() ? d.Z.userHasConsented() && (this.loadingState = "requestingAds", this.addUnitsToObserver(), this.toRequestAds()) : (this.loadingState = "requestingAds", this.addUnitsToObserver(), this.toRequestAds()))
                }
                async toRequestAds() {
                    "requestingAds" === this.loadingState && (await this.requestAds(), "requestingAds" === this.loadingState && (this.addObserverCallbacks(), this.loadingState = "finished"))
                }
                async requestAds() {
                    var e;
                    this.noTimesRefreshed = 0;
                    const t = this.adUnitsRequestConfig();
                    if (0 === t.length) return;
                    if (await this.observer.waitForObservedUnitsCallbacks(), "requestingAds" !== this.loadingState) return;
                    const r = {
                            units: t,
                            codes: this.adUnits.filter((e => !this.observer.isUnitHidden(e.id))).map((e => e.id))
                        },
                        n = this.requestAdsOptions();
                    window.CrazygamesAds.requestAds(r, n), M.isFirstRequest = !1, null === (e = this.getRefreshHelper()) || void 0 === e || e.requestAdsFinished()
                }
                requestAdsOptions() {
                    const {
                        adConfig: e
                    } = this.props, t = e.advertising, {
                        dollarRate: r,
                        priceFloor: i
                    } = t, s = (0, n.Z)(t, D), a = this.getTimeout(), o = e.bidders.map((e => this.mapApiConfigToBidderConfig(e))), l = this.getPriceFloor() || i;
                    return E(E({}, s), {}, {
                        priceFloor: l,
                        bidders: o,
                        dollarRate: r,
                        timeout: a,
                        countryCode: this.getCountryCode(),
                        dfp: this.dfpKeys(),
                        trafficSource: this.trafficSource(),
                        banner: {
                            callback: e => {
                                const {
                                    minPrice: t
                                } = e;
                                this.trackConversion(t)
                            }
                        }
                    })
                }
                refreshAdsOptions() {
                    const {
                        adConfig: e
                    } = this.props, t = this.getTimeout(), r = e.bidders.map((e => ({
                        bidder: e.id
                    }))), n = !this.getRefreshHelper().isSmartHelper() && this.props.device.isLowEndDevice;
                    return {
                        bidders: r,
                        timeout: t,
                        countryCode: this.getCountryCode(),
                        dfp: {
                            is_refresh: "true",
                            fa_refresh_exp21: n ? `${!this.lowendRefreshControl}` : void 0
                        },
                        banner: {
                            callback: e => {
                                const {
                                    minPrice: t
                                } = e;
                                this.trackConversion(t)
                            }
                        }
                    }
                }
                trafficSource() {
                    return (0, g.p9)() ? "purchased" : "organic"
                }
                getPriceFloor() {
                    const e = this.getCountryCode();
                    return e && G[e] || null
                }
                getTimeout() {
                    return M.isFirstRequest ? 2400 : 2e3
                }
                mapApiConfigToBidderConfig(e) {
                    const t = e.config,
                        {
                            disabled: r
                        } = t,
                        i = (0, n.Z)(t, L);
                    let s = {};
                    void 0 !== r && (s = {
                        disabled: r
                    });
                    const a = this.bidderProps(e.id);
                    return E(E(E({
                        bidder: e.id
                    }, a), s), i)
                }
                adUnitsRequestConfig() {
                    const {
                        units: e
                    } = this.props.adConfig;
                    return this.adUnits.map((t => {
                        const r = e.find((e => e.id === t.code));
                        return r ? E({
                            adUnit: {
                                mediaTypes: r.definition.mediaTypes,
                                code: t.id
                            },
                            slotId: r.definition.slotId
                        }, r.config.request) : (console.error(`[Advertising] Unexpected code ${t.code}`), null)
                    })).filter((e => !!e))
                }
                addUnitsToObserver() {
                    this.adUnits.forEach((e => {
                        this.addUnitToObserver(e)
                    }))
                }
                addObserverCallbacks() {
                    this.observer.addPageFocusChangeCallback(this.pageFocusChangeCallback)
                }
                addUnitToObserver(e) {
                    this.getUnitDefinition(e.code) ? this.observer.addElement(e.id) : console.error("Missing definition", e.code)
                }
                removeUnitFromObserver(e) {
                    const t = this.getUnitDefinition(e.code);
                    t ? t.definition.refresh && this.observer.removeElement(e.id) : console.error("Missing definition", e.code)
                }
                stopObserving() {
                    var e;
                    this.observer.stop(), this.observer = null, null === (e = this.getRefreshHelper()) || void 0 === e || e.stopRefreshTimer()
                }
                dfpKeys() {
                    const {
                        routeHelper: e,
                        gameSlug: t,
                        tagsSlug: r,
                        categoryEnSlug: n,
                        device: i
                    } = this.props, s = e.routeData.protocol, a = e.routeData.hostname, o = (0, g.FM)(), l = (0, g.dj)(), d = i.os;
                    let c;
                    if (l) {
                        const e = Date.now(),
                            t = l.date,
                            r = (0, Z.Z)(e, t) + 1;
                        c = `${l.adGroup}_week${r}`
                    }
                    return {
                        protocol: s,
                        domain: a,
                        advertising_campaign: o,
                        pwa: `${(0,b.r)()}`,
                        is_refresh: "false",
                        category_slug: n,
                        game_slug: t,
                        tags_slug: r.length > 0 ? r : void 0,
                        ad_group: c,
                        os: (null === d || void 0 === d ? void 0 : d.split(" ")[0].toLowerCase()) || void 0
                    }
                }
                shouldWaitUntilConsented() {
                    return (0, f.Ax)(this.getCountryCode())
                }
                bidderProps(e) {
                    switch (e) {
                        case "grid":
                            return this.gridProps();
                        case "adagio":
                            return this.adagioProps();
                        default:
                            return {}
                    }
                }
                gridProps() {
                    return {
                        disabled: !1
                    }
                }
                adagioProps() {
                    return {
                        disabled: !1
                    }
                }
                getUnitDefinition(e) {
                    const {
                        adConfig: t
                    } = this.props;
                    return t.units.find((t => t.id === e))
                }
                trackConversion(e) {
                    e && "undefined" !== typeof gtag && gtag("event", "conversion", {
                        send_to: "AW-312835820/UBOSCNjR06wDEOz9lZUB",
                        value: e,
                        currency: "EUR"
                    })
                }
                getRefreshHelper() {
                    return this.refreshHelper || this.initRefreshHelper(), this.refreshHelper
                }
                initRefreshHelper() {
                    if (!this.deviceInfo) return;
                    const {
                        smartRefresh: e
                    } = this.props.adConfig;
                    e && e.enabled ? this.refreshHelper = new P(this.refreshAds, e) : this.props.device.isLowEndDevice && !this.lowendRefreshControl ? this.refreshHelper = new k(this.refreshAds) : this.refreshHelper = new C(this.refreshAds), this.refreshHelper.initRefreshHelper()
                }
            }(0, i.Z)(M, "isFirstRequest", !0);
            var A = (0, u.Z)((0, p.Z)((0, S.Z)(M)))
        },
        11884: function(e, t, r) {
            "use strict";
            var n = r(67294),
                i = r(48266),
                s = r(477),
                a = r(52261);
            t.Z = e => {
                let {
                    game: t,
                    onCustomize: r
                } = e;
                const {
                    routeHelper: o
                } = n.useContext(i.Z), l = n.useContext(a.ZP);
                return n.useEffect((() => {
                    function e(e) {
                        const n = !l.isDesktop && t.mobileUrl ? t.mobileUrl : t.desktopUrl;
                        if (!o.isMessageFromGameframe(e, n)) return;
                        switch (e.data.action) {
                            case "customize-settings":
                                s.Z.userCustomize(), r && r();
                                break;
                            case "accept-settings":
                                s.Z.userAccept();
                                break;
                            case "dont-sell-data":
                                s.Z.userDoNotSell()
                        }
                    }
                    return window.addEventListener("message", e),
                        function() {
                            window.removeEventListener("message", e)
                        }
                }), [t.slug, t.mobileUrl, t.desktopUrl, l, o, r]), null
            }
        },
        33206: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return v
                }
            });
            var n = r(67294),
                i = r(49501),
                s = r(52261),
                a = r(20287),
                o = r(58346),
                l = r(59499),
                d = r(70917),
                c = r(81719),
                m = r(93545),
                h = r(73927);

            function p(e, t) {
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
                    t % 2 ? p(Object(r), !0).forEach((function(t) {
                        (0, l.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const g = (0, c.ZP)("div", {
                    shouldForwardProp: e => "isScrolling" !== e
                })((e => {
                    let {
                        theme: {
                            spacing: t,
                            breakpoints: r,
                            dimensions: n
                        },
                        isScrolling: i
                    } = e;
                    return u({
                        position: "fixed",
                        bottom: t(3),
                        right: "25%",
                        zIndex: 10,
                        "& button": {
                            fontSize: m.CH.h3,
                            boxShadow: "0px 0px 12px 2px #1e1134a6"
                        },
                        [r.down("gp_x6")]: {
                            right: "5%",
                            bottom: `${n.mobileFooterNav.drawerPlaceholder}px`,
                            zIndex: 2,
                            "& button": {
                                fontSize: m.CH.body
                            }
                        },
                        transition: "opacity 0.2s ease",
                        opacity: 1
                    }, i && {
                        opacity: 0
                    })
                })),
                f = d.F4 `
  0% { transform: scale(1,1)    translateY(0) }
  10% { transform: scale(1.03,.97) translateY(0) }
  30% { transform: scale(.97,1.03) translateY(-30px) }
  50% { transform: scale(1,1)    translateY(0) }
  57% { transform: scale(1,1)    translateY(-3px) }
  64% { transform: scale(1,1)    translateY(0) }
  100% { transform: scale(1,1)    translateY(0) 
  `,
                b = (0, c.ZP)(h.Sn, {
                    shouldForwardProp: e => "isDesktop" !== e
                })((e => {
                    let {
                        isDesktop: t
                    } = e;
                    return u({}, t && {
                        animationDuration: "1.5s",
                        animationIterationCount: 4,
                        transformOrigin: "bottom",
                        animationName: f,
                        animationTimingFunction: "ease",
                        boxShadow: "0px 0px 12px 2px #1e1134a6",
                        "&:hover": {
                            animationName: "none"
                        }
                    })
                }));
            var x = r(85893);
            var v = (0, a.Z)((e => {
                let {
                    height: t,
                    onClick: r,
                    label: a
                } = e;
                const [l, d] = n.useState(0), [c, m] = n.useState(!1), h = n.useContext(s.ZP);
                n.useEffect((() => {
                    let e;
                    const t = () => {
                        m(!0), e && window.clearTimeout(e), e = window.setTimeout((() => {
                            d(window.scrollY), m(!1)
                        }), 100)
                    };
                    return window.addEventListener("scroll", t, {
                            passive: !0
                        }), d(window.scrollY),
                        function() {
                            window.removeEventListener("scroll", t), window.clearTimeout(e)
                        }
                }), []);
                return l < t ? null : (0, x.jsx)(g, {
                    isScrolling: c,
                    children: (0, x.jsxs)(b, {
                        isDesktop: h.isDesktop,
                        height: 50,
                        variant: "contained",
                        onClick: () => {
                            window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "smooth"
                            }), r && r()
                        },
                        children: [a || (0, x.jsx)(i.cC, {
                            id: "common.backToTop"
                        }), (0, x.jsx)(o.Z, {
                            size: "small",
                            sx: {
                                ml: .5
                            }
                        })]
                    })
                })
            }))
        },
        86845: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return m
                }
            });
            var n = r(67294),
                i = r(98171),
                s = r(81719),
                a = r(93545);
            const o = (0, s.ZP)("div")((e => {
                    let {
                        theme: {
                            palette: t,
                            breakpoints: r
                        }
                    } = e;
                    return {
                        "& > div": {
                            display: "inline-block",
                            "& > a, & > div": {
                                display: "inline-block"
                            },
                            "& > a": {
                                textDecoration: "none",
                                textTransform: "uppercase",
                                fontSize: a.CH.bodyXSmall,
                                fontWeight: "normal",
                                color: t.primary.contrastText,
                                [r.down("sm")]: {
                                    minHeight: 48,
                                    minWidth: 48
                                },
                                "&:hover": {
                                    cursor: "pointer",
                                    color: t.secondary.main
                                }
                            }
                        }
                    }
                })),
                l = (0, s.ZP)("div")((e => {
                    let {
                        theme: {
                            spacing: t
                        }
                    } = e;
                    return {
                        margin: t(0, 1),
                        fontSize: a.CH.bodyXSmall
                    }
                }));
            var d = r(85893);
            class c extends n.Component {
                render() {
                    const {
                        hierarchy: e,
                        currentTagName: t,
                        forceAddCurrentTag: r
                    } = this.props;
                    return (0, d.jsx)(o, {
                        children: (0, d.jsxs)(d.Fragment, {
                            children: [this.renderTagHierarchyBreadcrumbs(e), !e || r ? t : null]
                        })
                    })
                }
                renderTagHierarchyBreadcrumbs(e) {
                    const {
                        forceAddCurrentTag: t,
                        currentTagName: r
                    } = this.props;
                    return e ? e.map(((n, i) => {
                        const s = i === e.length - 1;
                        return s && t ? (0, d.jsx)("div", {
                            children: r
                        }, i) : this.renderTagHierarchyLink(n, i, s)
                    })) : null
                }
                renderBreadcrumbSeparator() {
                    return (0, d.jsx)(l, {
                        children: "\xbb"
                    })
                }
                renderTagHierarchyLink(e, t, r) {
                    return (0, d.jsxs)("div", {
                        children: [(0, d.jsx)(i.Z, {
                            slug: e.slug,
                            isCategory: e.isCategory,
                            children: (0, d.jsx)("a", {
                                children: e.name
                            })
                        }), !r && this.renderBreadcrumbSeparator()]
                    }, t)
                }
            }
            var m = c
        },
        50645: function(e, t, r) {
            "use strict";
            var n = r(59499),
                i = r(67294),
                s = r(90335),
                a = r(34386),
                o = r(47638),
                l = r(85893);

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

            function c(e) {
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
                    games: t,
                    justifyContent: r,
                    slidesToLoadEagerly: n,
                    preventZoom: d,
                    contentVisibility: m,
                    containIntrinsicSize: h,
                    customStyles: p,
                    transformOrigin: u,
                    thumbIconFn: g,
                    thumbIcon: f,
                    isResponsive: b,
                    isResponsiveGrid: x,
                    imgResponsiveSizes: v,
                    sx: y
                } = e;
                const {
                    crazyAnalyticsService: w
                } = i.useContext(a.Z).services;
                return (0, l.jsx)(o.MM, {
                    contentVisibility: m,
                    containIntrinsicSize: h,
                    style: c(c({}, p), {}, {
                        justifyContent: r
                    }),
                    isResponsive: b,
                    sx: y,
                    children: t.map(((e, r) => e.loading ? (0, l.jsx)(s.Z, {}, e.slug) : (0, l.jsx)(o.oZ, {
                        game: e,
                        transformOrigin: u,
                        preventZoom: d,
                        eagerLoading: n ? r < n : void 0,
                        iconFn: g,
                        icon: f,
                        onClickAction: () => {
                            w.gameClickedFromList(t)
                        },
                        isResponsive: b,
                        isResponsiveGrid: x,
                        imgResponsiveSizes: v
                    }, e.slug)))
                })
            }
        },
        35848: function(e, t, r) {
            "use strict";
            var n = r(67294),
                i = r(9422),
                s = r(34386);
            t.Z = () => {
                const e = n.useContext(s.Z).services;
                return n.useEffect((() => {
                    const t = () => {
                        i.Z.isFullscreen() ? e.crazyAnalyticsService.displayEvent("fullscreen", "enter") : (e.analyticsService.trackExitFullscreen(), e.crazyAnalyticsService.displayEvent("fullscreen", "exit"))
                    };
                    i.Z.addFullscreenListener(t);
                    return () => i.Z.removeFullscreenListener(t)
                }), [e.analyticsService]), null
            }
        },
        18514: function(e, t, r) {
            "use strict";
            r.d(t, {
                Ec: function() {
                    return h
                },
                IA: function() {
                    return s
                },
                b_: function() {
                    return l
                },
                kB: function() {
                    return d
                },
                mx: function() {
                    return o
                },
                qH: function() {
                    return c
                },
                s: function() {
                    return m
                },
                sZ: function() {
                    return a
                }
            });
            var n = r(81719),
                i = r(70917);
            const s = (0, n.ZP)("iframe")((() => ({
                    border: 0,
                    margin: 0,
                    padding: 0,
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0
                }))),
                a = (0, n.ZP)("div")((() => ({
                    width: "100vw",
                    height: "56vw",
                    position: "relative"
                }))),
                o = (0, n.ZP)("div")({
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }),
                l = (0, n.ZP)("div")((e => {
                    let {
                        theme: {
                            spacing: t
                        }
                    } = e;
                    return {
                        color: "white",
                        zIndex: 2,
                        paddingBottom: t(2),
                        textAlign: "center"
                    }
                })),
                d = (0, n.ZP)("div")((e => {
                    let {
                        theme: {
                            breakpoints: t,
                            dimensions: r,
                            spacing: n
                        }
                    } = e;
                    return {
                        width: "100%",
                        height: "100%",
                        [t.down("gp_x6")]: {
                            height: `min(calc(100vh - ${r.header.height}px - ${n(2)}),56vw)`
                        }
                    }
                })),
                c = (0, n.ZP)("div")((e => {
                    let {
                        theme: {
                            spacing: t
                        }
                    } = e;
                    const r = 30,
                        n = .7,
                        s = i.F4 `
  0% {
    border-left: ${6}px solid rgba(255, 255, 255, 0);
    border-bottom: ${6}px solid rgba(255, 255, 255, 0);
    transform: translate(${-5}px,${-20}px)rotate(-45deg);
  }
  10%, 90% {
    border-left: ${6}px solid rgba(255, 255, 255, 0);
    border-bottom: ${6}px solid rgba(255, 255, 255, 0);
  }
  50% {
    border-left: ${6}px solid rgba(255,255,255,${n});
    border-bottom: ${6}px solid rgba(255,255,255,${n});
    transform: translate(${-5}px,0px)rotate(-45deg);
  }
  100% {
    border-left: ${6}px solid rgba(255, 255, 255, 0);
    border-bottom: ${6}px solid rgba(255, 255, 255, 0);
    transform: translate(${-5}px,${20}px)rotate(-45deg);
  }`;
                    return {
                        margin: "auto",
                        position: "relative",
                        transform: "translate(-15px)",
                        paddingTop: t(2),
                        width: r,
                        height: r,
                        "&:before": {
                            content: '""',
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            borderLeft: "6px solid rgba(255,255,255,0.7)",
                            borderBottom: "6px solid rgba(255,255,255,0.7)",
                            transform: "translate(6px,24px) rotate(-45deg)",
                            animation: `${s} 3s linear infinite`
                        },
                        "&:after": {
                            content: '""',
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            borderLeft: "6px solid rgba(255,255,255,0.7)",
                            borderBottom: "6px solid rgba(255,255,255,0.7)",
                            transform: "translate(12px,0px) rotate(-45deg)",
                            animation: `${s} 3s linear infinite -1.5s`
                        }
                    }
                })),
                m = (0, n.ZP)("div")((() => ({
                    zIndex: 1,
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backdropFilter: "blur(3px)",
                    backgroundColor: "rgba(12, 13, 20, 0.6)"
                }))),
                h = (0, n.ZP)("img")((() => ({
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    marginBottom: -5,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: .6,
                    zIndex: 0
                })))
        },
        19258: function(e, t, r) {
            "use strict";
            r.d(t, {
                _P: function() {
                    return v
                },
                Nr: function() {
                    return P
                },
                tc: function() {
                    return k
                },
                gs: function() {
                    return C
                },
                fC: function() {
                    return g
                },
                IZ: function() {
                    return j
                },
                Bv: function() {
                    return w
                },
                Q$: function() {
                    return u
                },
                SM: function() {
                    return y
                },
                BZ: function() {
                    return Z
                },
                zN: function() {
                    return O
                },
                sg: function() {
                    return f
                },
                Sv: function() {
                    return b
                }
            });
            var n = r(59499),
                i = r(81719),
                s = (r(67294), r(38950)),
                a = r(85893);

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            var l = e => (0, a.jsx)(s.l, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? o(Object(r), !0).forEach((function(t) {
                            (0, n.Z)(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }({
                    code: "div-gpt-ad-1548853349280-0",
                    width: 300,
                    height: 600,
                    align: "right"
                }, e)),
                d = r(83747),
                c = r(93545);
            var m = e => {
                let {
                    content: t,
                    style: r,
                    className: n
                } = e;
                return (0, a.jsx)("div", {
                    className: n,
                    dangerouslySetInnerHTML: {
                        __html: t
                    },
                    style: r
                })
            };

            function h(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const u = (0, i.ZP)(l)((e => {
                    let {
                        theme: {
                            breakpoints: t
                        }
                    } = e;
                    return {
                        [t.down("sm")]: {
                            display: "none"
                        }
                    }
                })),
                g = (0, i.ZP)("div")((e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        display: "flex",
                        flexDirection: "row",
                        flexFlow: "row wrap",
                        backgroundColor: t.palette.primary.main,
                        borderWidth: 0,
                        borderRadius: t.spacing(),
                        color: t.palette.primary.contrastText,
                        paddingRight: t.spacing(),
                        paddingLeft: t.spacing(3),
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        margin: "auto",
                        lineHeight: 1.5,
                        "& a": (0, c.GC)(),
                        [t.breakpoints.down("md")]: {
                            paddingLeft: 0,
                            paddingRight: 0
                        },
                        [t.breakpoints.down("gp_x6")]: {
                            borderRadius: 0
                        }
                    }
                })),
                f = (0, i.ZP)("div")((e => {
                    let {
                        theme: {
                            palette: t
                        }
                    } = e;
                    return {
                        fontWeight: 700,
                        fontSize: c.CH.bodySmall,
                        color: t.primary.contrastText
                    }
                })),
                b = (0, i.ZP)("div")((e => {
                    let {
                        theme: {
                            palette: t
                        }
                    } = e;
                    return {
                        textTransform: "uppercase",
                        color: t.primary.contrastText,
                        fontSize: c.CH.bodyXSmall,
                        lineHeight: 1
                    }
                })),
                x = e => {
                    let {
                        breakpoints: t,
                        spacing: r
                    } = e;
                    return p(p({}, c.Hq), {}, {
                        width: "100%",
                        [t.down("lg")]: {
                            marginLeft: `${r(2)} !important`,
                            marginRight: `${r(2)} !important`
                        },
                        "& h3": {
                            marginBlockStart: "1em",
                            marginBlockEnd: "1em"
                        }
                    })
                },
                v = (0, i.ZP)("div")((e => {
                    let {
                        theme: t
                    } = e;
                    const {
                        breakpoints: r,
                        spacing: n
                    } = t;
                    return p(p({}, x(t)), {}, {
                        [r.down("sm")]: {
                            maxHeight: 60
                        },
                        [r.up("sm")]: {
                            paddingBottom: n()
                        }
                    })
                })),
                y = (0, i.ZP)(m)((e => {
                    let {
                        theme: t
                    } = e;
                    return p(p({}, x(t)), {}, {
                        "& ol > li": {
                            padding: 14
                        }
                    })
                })),
                w = (0, i.ZP)("div")((e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: d.D.black[90],
                        paddingLeft: t.spacing(3),
                        height: 40,
                        marginLeft: t.spacing(-3),
                        marginBottom: t.spacing(),
                        marginTop: t.spacing(.5),
                        [t.breakpoints.down("lg")]: {
                            marginLeft: t.spacing(-1)
                        }
                    }
                })),
                j = (0, i.ZP)("span")({
                    color: d.D.brand[60],
                    cursor: "pointer",
                    fontWeight: 700,
                    "&:hover": {
                        color: d.D.brand[100]
                    }
                }),
                O = (0, i.ZP)("div")((e => {
                    let {
                        theme: t
                    } = e;
                    const {
                        breakpoints: r,
                        spacing: n
                    } = t;
                    return p(p({
                        display: "flex",
                        flexWrap: "wrap"
                    }, x(t)), {}, {
                        width: "calc(100% - 139px)",
                        margin: n(2, 0),
                        [r.down("md")]: {
                            width: "100%"
                        }
                    })
                })),
                P = (0, i.ZP)("div")((e => {
                    let {
                        theme: t
                    } = e;
                    const {
                        spacing: r
                    } = t;
                    return p(p({}, x(t)), {}, {
                        margin: 0,
                        boxSizing: "border-box",
                        "& > div": {
                            marginLeft: 0,
                            width: `calc(100% + ${r(4)})`
                        }
                    })
                })),
                k = (0, i.ZP)("div")((e => {
                    let {
                        theme: {
                            palette: t,
                            spacing: r,
                            breakpoints: n
                        },
                        isDesktop: i
                    } = e;
                    return {
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        width: "auto !important",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        paddingBottom: r(1),
                        [n.down("md")]: {
                            justifyContent: i ? "space-between" : "flex-start",
                            background: t.primary.dark,
                            padding: r(1, 2, 1, 2),
                            width: "100% !important"
                        }
                    }
                })),
                C = ((0, i.ZP)("div")((() => ({
                    width: "auto !important",
                    alignSelf: "center",
                    display: "flex"
                }))), (0, i.ZP)("div")((e => {
                    let {
                        theme: {
                            palette: t,
                            spacing: r
                        }
                    } = e;
                    return {
                        marginRight: r(),
                        color: t.primary.main,
                        background: t.secondary.contrastText,
                        borderRadius: r(4),
                        padding: `calc(${r()} - 2px) ${r()}`,
                        alignSelf: "center"
                    }
                }))),
                Z = (0, i.ZP)("img")((() => ({
                    height: 42,
                    "&:hover": {
                        opacity: .8,
                        cursor: "pointer"
                    }
                })))
        },
        38858: function(e, t) {
            "use strict";
            t.Z = function(e) {
                if (e.sandbox) {
                    let t = "allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-same-origin";
                    return e.disallowSandboxPopups || (t += " allow-popups"), t
                }
            }
        },
        90335: function(e, t, r) {
            "use strict";
            var n = r(59499),
                i = r(67294),
                s = r(91655),
                a = r(52261),
                o = r(62097),
                l = r(85893);

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

            function c(e) {
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
                    isFeatured: t,
                    sx: r,
                    isResponsive: n
                } = e;
                const d = i.useContext(a.ZP).isDesktop,
                    m = (0, o.Z)().dimensions.gameThumb,
                    h = t ? m.featuredWidth : d ? m.width : m.mobileWidth,
                    p = t ? m.featuredHeight : m.height;
                return (0, l.jsx)(s.Z, {
                    sx: c({
                        position: "relative",
                        borderRadius: e => e.spacing()
                    }, r),
                    variant: "rectangular",
                    width: n ? "100%" : h,
                    height: n ? "100%" : p,
                    className: "skeleton"
                })
            }
        },
        58346: function(e, t, r) {
            "use strict";
            var n = r(59499),
                i = r(67294),
                s = r(27444),
                a = r(85893);

            function o(e, t) {
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
                    t % 2 ? o(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const d = i.memo((e => (0, a.jsx)(s.Z, l(l({}, e), {}, {
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.33007 16.7424C1.92005 16.3724 1.88759 15.7401 2.25759 15.3301L9.75759 7.0186C10.9831 5.66046 13.0169 5.66047 14.2424 7.01861L21.7424 15.3301C22.1124 15.7401 22.08 16.3724 21.6699 16.7424C21.2599 17.1124 20.6276 17.08 20.2576 16.6699L12.7576 8.35848C12.3263 7.88051 11.6737 7.88051 11.2424 8.35848L3.74243 16.6699C3.37243 17.08 2.7401 17.1124 2.33007 16.7424Z"
                })
            }))));
            t.Z = d
        },
        98435: function(e, t, r) {
            "use strict";
            var n = r(59499),
                i = r(67294),
                s = r(27444),
                a = r(85893);

            function o(e, t) {
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
                    t % 2 ? o(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const d = i.memo((e => (0, a.jsx)(s.Z, l(l({}, e), {}, {
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.1051 3.90453C10.1051 2.84042 10.9755 2 12.0215 2H12.1183C13.7773 2 15.1446 3.33088 15.1446 5V9H18.9711C21.2014 9 22.6959 11.3321 21.6755 13.3463L18.1295 20.3463C17.6137 21.3646 16.5645 22 15.4251 22H11.3546C11.1082 22 10.8627 21.9702 10.6236 21.9112L6.93101 21H5.02628C3.36726 21 2 19.6691 2 18V12C2 10.3309 3.36726 9 5.02628 9H7.19669L9.66081 5.35177C9.95107 4.92203 10.1051 4.41848 10.1051 3.90453ZM6.05257 11H5.02628C4.44713 11 4 11.46 4 12V18C4 18.54 4.44713 19 5.02628 19H6.05257V11ZM8.05257 19.2168V11.3061L11.3182 6.47121C11.8129 5.73871 12.0857 4.88122 12.1041 4H12.1183C12.6974 4 13.1446 4.45998 13.1446 5V9H12.1183C11.566 9 11.1183 9.44772 11.1183 10C11.1183 10.5523 11.566 11 12.1183 11H18.9711C19.7534 11 20.2183 11.7971 19.8914 12.4425L16.3454 19.4425C16.1747 19.7794 15.8207 20 15.4251 20H11.3546C11.2696 20 11.185 19.9897 11.1027 19.9694L8.05257 19.2168Z"
                })
            }))));
            t.Z = d
        },
        34779: function(e, t, r) {
            "use strict";
            var n = r(67294),
                i = r(9008),
                s = r.n(i),
                a = r(40480),
                o = r(13839),
                l = r(4235),
                d = r(85893);
            const c = 1200,
                m = 630,
                h = "crazygames/share.png";
            t.Z = e => {
                let {
                    canonical: t,
                    title: r,
                    description: i,
                    imageUrl: p = h,
                    imageWidth: u = c,
                    imageHeight: g = m,
                    type: f
                } = e;
                const {
                    locale: b
                } = n.useContext(l.Z), x = (0, o.ZP)(p, {
                    w: u,
                    h: g,
                    fit: "crop"
                });
                return (0, d.jsxs)(s(), {
                    children: [(0, d.jsx)("meta", {
                        property: "og:url",
                        content: t
                    }), (0, d.jsx)("meta", {
                        property: "og:title",
                        content: r
                    }), (0, d.jsx)("meta", {
                        property: "og:description",
                        content: i
                    }), (0, d.jsx)("meta", {
                        property: "og:locale",
                        content: (0, a.Ld)(b)
                    }), (0, d.jsx)("meta", {
                        property: "og:image",
                        content: x
                    }), (0, d.jsx)("meta", {
                        property: "og:image:width",
                        content: u.toString()
                    }), (0, d.jsx)("meta", {
                        property: "og:image:height",
                        content: g.toString()
                    }), f && (0, d.jsx)("meta", {
                        property: "og:type",
                        content: f
                    }), (0, d.jsx)("meta", {
                        property: "twitter:card",
                        content: "summary_large_image"
                    }), (0, d.jsx)("meta", {
                        property: "twitter:url",
                        content: t
                    }), (0, d.jsx)("meta", {
                        property: "twitter:title",
                        content: r
                    }), (0, d.jsx)("meta", {
                        property: "twitter:description",
                        content: i
                    }), (0, d.jsx)("meta", {
                        property: "twitter:image",
                        content: x
                    })]
                })
            }
        },
        98171: function(e, t, r) {
            "use strict";
            var n = r(59499),
                i = r(67294),
                s = r(41664),
                a = r.n(s),
                o = r(48266),
                l = r(85893);

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

            function c(e) {
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
                    slug: t,
                    isCategory: r,
                    children: n
                } = e;
                const {
                    routeHelper: s
                } = i.useContext(o.Z), d = s.tagOrCategoryPageDirectLink(t, !!r);
                return (0, l.jsx)(a(), c(c({}, d), {}, {
                    children: n
                }))
            }
        },
        87011: function(e, t, r) {
            "use strict";
            var n = r(59499),
                i = r(67294),
                s = r(97542),
                a = r(85893);

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            t.Z = function(e) {
                return t => {
                    const r = i.useContext(s.Z);
                    return (0, a.jsx)(e, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? o(Object(r), !0).forEach((function(t) {
                                (0, n.Z)(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }({
                        device: r
                    }, t))
                }
            }
        },
        40181: function(e, t, r) {
            "use strict";
            var n = r(59499),
                i = r(67294),
                s = r(52261),
                a = r(85893);

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            t.Z = function(e) {
                return t => {
                    const r = i.useContext(s.ZP);
                    return (0, a.jsx)(e, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? o(Object(r), !0).forEach((function(t) {
                                (0, n.Z)(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }({
                        deviceType: r
                    }, t))
                }
            }
        },
        9422: function(e, t, r) {
            "use strict";
            var n = r(59499);
            t.Z = new class {
                constructor() {
                    (0, n.Z)(this, "fakeFullscreenListeners", []), (0, n.Z)(this, "eventKeys", ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"]), (0, n.Z)(this, "isInFakeFullscreen", !1), (0, n.Z)(this, "forceLockOrientation", (async e => {
                        if (e && "BOTH" !== e && "screen" in window && window.screen && window.screen.orientation && window.screen.orientation.lock) try {
                            const t = "PORTRAIT" === e ? "portrait" : "landscape";
                            await window.screen.orientation.lock(t)
                        } catch (t) {}
                    }))
                }
                removeFullscreenListener(e) {
                    this.eventKeys.forEach((t => {
                        document.removeEventListener(t, e)
                    }))
                }
                addFullscreenListener(e) {
                    this.eventKeys.forEach((t => {
                        document.addEventListener(t, e)
                    }))
                }
                addFakeFullscreenListener(e) {
                    this.fakeFullscreenListeners.push(e)
                }
                removeFakeFullscreenListener(e) {
                    this.fakeFullscreenListeners = this.fakeFullscreenListeners.filter((t => t !== e))
                }
                isFullscreen() {
                    const e = window.document;
                    return !!(e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || e.msFullscreenElement)
                }
                isFakeFullscreen() {
                    return this.isInFakeFullscreen
                }
                enteredFakeFullscreen() {
                    this.isInFakeFullscreen || (this.isInFakeFullscreen = !0, this.fakeFullscreenListeners.forEach((e => e())))
                }
                exitFakeFullscreen() {
                    this.isInFakeFullscreen && (this.isInFakeFullscreen = !1, this.fakeFullscreenListeners.forEach((e => e())))
                }
                exitNativeFullscreen() {
                    const e = window.document,
                        t = e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen;
                    return !!t && (window.document.fullscreenElement && t.call(e), !0)
                }
            }
        },
        10041: function(e, t, r) {
            "use strict";
            var n = r(59499),
                i = r(67294),
                s = r(48266),
                a = r(85893);

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            t.Z = function(e) {
                return class extends i.Component {
                    static async getInitialProps(t) {
                        return e.getInitialProps ? await e.getInitialProps(t) : {}
                    }
                    render() {
                        return (0, a.jsx)(s.Z.Consumer, {
                            children: t => {
                                let {
                                    routeHelper: r
                                } = t;
                                return (0, a.jsx)(e, function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? o(Object(r), !0).forEach((function(t) {
                                            (0, n.Z)(e, t, r[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(t) {
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
        72086: function(e, t, r) {
            "use strict";
            r.d(t, {
                Bc: function() {
                    return l
                },
                hZ: function() {
                    return s
                },
                rV: function() {
                    return o
                },
                uD: function() {
                    return a
                }
            });
            var n = r(47184);
            let i = null;
            const s = e => {
                    var t, r;
                    (i = e, (0, n.r)()) || (null === (t = document.getElementById("game-iframe")) || void 0 === t || null === (r = t.contentWindow) || void 0 === r || r.postMessage("canInstallPWA", "*"))
                },
                a = e => e && !!i && !(0, n.r)(),
                o = e => {
                    i ? i.prompt().catch((t => console.error(`[PWA-Game] Install prompt error at ${e}:`, t))) : console.error("No custom prompt event available")
                },
                l = () => {
                    var e, t;
                    null === (e = document.getElementById("game-iframe")) || void 0 === e || null === (t = e.contentWindow) || void 0 === t || t.postMessage("notInstallPWA", "*")
                }
        },
        45670: function(e, t) {
            "use strict";
            t.Z = function(e, t) {
                return t.isIos && e.swap ? e.swap : e.data
            }
        },
        10912: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return Er
                }
            });
            var n = r(59499),
                i = r(11163),
                s = r.n(i),
                a = r(67294),
                o = r(55424),
                l = r(20287),
                d = r(93545),
                c = r(81719),
                m = r(13839);

            function h(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            const p = (0, c.ZP)("div", {
                shouldForwardProp: e => "isDesktop" !== e && "sx" !== e
            })((e => {
                let {
                    theme: {
                        spacing: t
                    },
                    isDesktop: r
                } = e;
                return function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? h(Object(r), !0).forEach((function(t) {
                            (0, n.Z)(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }({
                    position: "relative",
                    borderRadius: t()
                }, r && {
                    "&:before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${(0,m.ZP)("crazygames/cross.png",{w:70,q:50})}), url(${(0,m.ZP)("crazygames/triangle.png",{w:90,q:50})}), url(${(0,m.ZP)("crazygames/x.png",{w:40,q:50})}), url(${(0,m.ZP)("crazygames/zigzag.png",{w:40,q:50})})`,
                        backgroundPosition: "top 0px left 124px, top 150px left 8px, top 448px left 113px, top -82px left 466px",
                        backgroundSize: "150px, 300px",
                        filter: "blur(9px) opacity(0.6)"
                    }
                })
            }));
            var u = r(52261),
                g = r(85893);
            var f = e => {
                let {
                    className: t,
                    sx: r,
                    children: n
                } = e;
                const {
                    isDesktop: i
                } = a.useContext(u.ZP);
                return (0, g.jsx)(p, {
                    isDesktop: i,
                    sx: r,
                    className: t,
                    children: n
                })
            };

            function b(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const v = e => 5 * e.dimensions.gameThumb.width + 4 * (0, d.bG)(e),
                y = e => 5 * e.dimensions.gameThumb.height + 4 * (0, d.bG)(e),
                w = e => 6 * e.dimensions.gameThumb.width + 5 * (0, d.bG)(e),
                j = e => 6 * e.dimensions.gameThumb.height + 5 * (0, d.bG)(e),
                O = e => w(e) + 2,
                P = e => j(e) + 2,
                k = e => w(e) + 186,
                C = e => j(e) + 110,
                Z = (0, c.ZP)("div", {
                    shouldForwardProp: e => "forceMobile" !== e
                })((e => {
                    let {
                        theme: {
                            spacing: t,
                            breakpoints: r,
                            dimensions: n
                        },
                        forceMobile: i
                    } = e;
                    return x({
                        display: "grid",
                        gap: t(1, 1),
                        gridGap: t(1, 1),
                        marginTop: t(),
                        [r.down("gp_x6")]: {
                            display: "block",
                            gap: "unset",
                            gridGap: "unset",
                            marginTop: 0
                        },
                        [r.between("gp_x6", "gp_x7")]: {
                            gridTemplateColumns: `repeat(6, ${n.gameThumb.width}px)`,
                            msGridColumns: `(${n.gameThumb.width}px)[6]`,
                            gridTemplateRows: `repeat(9, ${n.gameThumb.height}px)`,
                            gridTemplateAreas: '\n    "game game game game game related1x2"\n    "game game game game game related1x2"\n    "game game game game game banner1x6b"\n    "game game game game game banner1x6b"\n    "game game game game game banner1x6b"\n    "related1x1 banner4x1 banner4x1 banner4x1 banner4x1 banner1x6b"\n    "related5x3 related5x3 related5x3 related5x3 related5x3 banner1x6b"\n    "related5x3 related5x3 related5x3 related5x3 related5x3 banner1x6b"\n    "related5x3 related5x3 related5x3 related5x3 related5x3 related1x7"\n    "info info info info info related1x7"\n    "info info info info info related1x7"\n    "info info info info info related1x7"\n    "related5x3b related5x3b related5x3b related5x3b related5x3b related1x7"\n    "related5x3b related5x3b related5x3b related5x3b related5x3b related1x7"\n    "related5x3b related5x3b related5x3b related5x3b related5x3b related1x7"\n    '
                        },
                        [r.between("gp_x7", "gp_x8")]: {
                            gridTemplateColumns: `repeat(7, ${n.gameThumb.width}px)`,
                            msGridColumns: `(${n.gameThumb.width}px)[7]`,
                            gridTemplateRows: `repeat(9, ${n.gameThumb.height}px)`,
                            gridTemplateAreas: '\n    "game game game game game related2x2 related2x2"\n    "game game game game game related2x2 related2x2"\n    "game game game game game banner2x6 banner2x6"\n    "game game game game game banner2x6 banner2x6"\n    "game game game game game banner2x6 banner2x6"\n    "related5x3 related5x3 related5x3 related5x3 related5x3 banner2x6 banner2x6"\n    "related5x3 related5x3 related5x3 related5x3 related5x3 banner2x6 banner2x6"\n    "related5x3 related5x3 related5x3 related5x3 related5x3 banner2x6 banner2x6"\n    "info info info info info related2x6 related2x6"\n    "info info info info info related2x6 related2x6"\n    "info info info info info related2x6 related2x6"\n    "related5x3b related5x3b related5x3b related5x3b related5x3b related2x6 related2x6"\n    "related5x3b related5x3b related5x3b related5x3b related5x3b related2x6 related2x6"\n    "related5x3b related5x3b related5x3b related5x3b related5x3b related2x6 related2x6"\n    ',
                            "&.holidays": {
                                gridTemplateAreas: '\n        "game game game game game related2x2 related2x2"\n        "game game game game game related2x2 related2x2"\n        "game game game game game banner2x6 banner2x6"\n        "game game game game game banner2x6 banner2x6"\n        "game game game game game banner2x6 banner2x6"\n        "banner5x1 banner5x1 banner5x1 banner5x1 banner5x1 banner2x6 banner2x6"\n        "related5x2 related5x2 related5x2 related5x2 related5x2 banner2x6 banner2x6"\n        "related5x2 related5x2 related5x2 related5x2 related5x2 banner2x6 banner2x6"\n        "info info info info info related2x6 related2x6"\n        "info info info info info related2x6 related2x6"\n        "info info info info info related2x6 related2x6"\n        "related5x3b related5x3b related5x3b related5x3b related5x3b related2x6 related2x6"\n        "related5x3b related5x3b related5x3b related5x3b related5x3b related2x6 related2x6"\n        "related5x3b related5x3b related5x3b related5x3b related5x3b related2x6 related2x6"\n    '
                            }
                        },
                        [r.between("gp_x8", "gp_x9")]: {
                            gridTemplateColumns: `repeat(8, ${n.gameThumb.width}px)`,
                            msGridColumns: `(${n.gameThumb.width}px)[8]`,
                            gridTemplateRows: `repeat(9, ${n.gameThumb.height}px)`,
                            gridTemplateAreas: '\n    "related1x2 game game game game game related2x2 related2x2"\n    "related1x2 game game game game game related2x2 related2x2"\n    "banner1x6 game game game game game banner2x6 banner2x6"\n    "banner1x6 game game game game game banner2x6 banner2x6"\n    "banner1x6 game game game game game banner2x6 banner2x6"\n    "banner1x6 related5x3 related5x3 related5x3 related5x3 related5x3 banner2x6 banner2x6"\n    "banner1x6 related5x3 related5x3 related5x3 related5x3 related5x3 banner2x6 banner2x6"\n    "banner1x6 related5x3 related5x3 related5x3 related5x3 related5x3 banner2x6 banner2x6"\n    "related1x3 info info info info info related2x6 related2x6"\n    "related1x3 info info info info info related2x6 related2x6"\n    "related1x3 info info info info info related2x6 related2x6"\n    "related8x1 related8x1 related8x1 related8x1 related8x1 related8x1 related8x1 related8x1"\n    ',
                            "&.holidays": {
                                gridTemplateAreas: '\n        "related1x2 game game game game game related2x2 related2x2"\n        "related1x2 game game game game game related2x2 related2x2"\n        "banner1x6 game game game game game banner2x6 banner2x6"\n        "banner1x6 game game game game game banner2x6 banner2x6"\n        "banner1x6 game game game game game banner2x6 banner2x6"\n        "banner1x6 banner5x1 banner5x1 banner5x1 banner5x1 banner5x1 banner2x6 banner2x6"\n        "banner1x6 related5x2 related5x2 related5x2 related5x2 related5x2 banner2x6 banner2x6"\n        "banner1x6 related5x2 related5x2 related5x2 related5x2 related5x2 banner2x6 banner2x6"\n        "related1x3 info info info info info related2x6 related2x6"\n        "related1x3 info info info info info related2x6 related2x6"\n        "related1x3 info info info info info related2x6 related2x6"\n        "related8x1 related8x1 related8x1 related8x1 related8x1 related8x1 related8x1 related8x1"\n    '
                            }
                        },
                        [r.between("gp_x9", "gp_x10")]: {
                            gap: t(1.5, 1.5),
                            gridGap: t(1.5, 1.5),
                            gridTemplateColumns: `repeat(9, ${n.gameThumb.width}px)`,
                            msGridColumns: `(${n.gameThumb.width}px)[9]`,
                            gridTemplateRows: `repeat(9, ${n.gameThumb.height}px)`,
                            gridTemplateAreas: '\n    "related1x6 game game game game game game banner2x3 banner2x3"\n    "related1x6 game game game game game game banner2x3 banner2x3"\n    "related1x6 game game game game game game banner2x3 banner2x3"\n    "related1x6 game game game game game game banner2x6 banner2x6"\n    "related1x6 game game game game game game banner2x6 banner2x6"\n    "related1x6 game game game game game game banner2x6 banner2x6"\n    "related7x1 related7x1 related7x1 related7x1 related7x1 related7x1 related7x1 banner2x6 banner2x6"\n    "related1x4 related1x1 banner4x1 banner4x1 banner4x1 banner4x1 related1x2 banner2x6 banner2x6"\n    "related1x4 info info info info info related1x2 banner2x6 banner2x6"\n    "related1x4 info info info info info related3x2 related3x2 related3x2"\n    "related1x4 info info info info info related3x2 related3x2 related3x2"\n    "related9x2 related9x2 related9x2 related9x2 related9x2 related9x2 related9x2 related9x2 related9x2"\n    "related9x2 related9x2 related9x2 related9x2 related9x2 related9x2 related9x2 related9x2 related9x2"\n    '
                        },
                        [r.up("gp_x10")]: {
                            gap: t(1.5, 1.5),
                            gridGap: t(1.5, 1.5),
                            gridTemplateColumns: `repeat(10, ${n.gameThumb.width}px)`,
                            msGridColumns: `(${n.gameThumb.width}px)[10]`,
                            gridTemplateRows: `repeat(9, ${n.gameThumb.height}px)`,
                            gridTemplateAreas: '\n    "related1x6 game game game game game game related1x6b banner2x3 banner2x3"\n    "related1x6 game game game game game game related1x6b banner2x3 banner2x3"\n    "related1x6 game game game game game game related1x6b banner2x3 banner2x3"\n    "related1x6 game game game game game game related1x6b banner2x6 banner2x6"\n    "related1x6 game game game game game game related1x6b banner2x6 banner2x6"\n    "related1x6 game game game game game game related1x6b banner2x6 banner2x6"\n    "related8x1 related8x1 related8x1 related8x1 related8x1 related8x1 related8x1 related8x1 banner2x6 banner2x6"\n    "related2x1 related2x1 banner4x1 banner4x1 banner4x1 banner4x1 related2x1b related2x1b banner2x6 banner2x6"\n    "related8x1b related8x1b related8x1b related8x1b related8x1b related8x1b related8x1b related8x1b banner2x6 banner2x6"\n    "related1x3 info info info info info info related3x3 related3x3 related3x3"\n    "related1x3 info info info info info info related3x3 related3x3 related3x3"\n    "related1x3 info info info info info info related3x3 related3x3 related3x3"\n    "related10x2 related10x2 related10x2 related10x2 related10x2 related10x2 related10x2 related10x2 related10x2 related10x2"\n    "related10x2 related10x2 related10x2 related10x2 related10x2 related10x2 related10x2 related10x2 related10x2 related10x2"\n    '
                        }
                    }, i && {
                        display: "block",
                        gap: "unset",
                        gridGap: "unset",
                        marginTop: 0
                    })
                })),
                S = (0, c.ZP)("div")((e => {
                    let {
                        theme: {
                            spacing: t
                        }
                    } = e;
                    return {
                        marginTop: t(1.5)
                    }
                })),
                T = (0, c.ZP)("div", {
                    shouldForwardProp: e => "theatreMode" !== e && "forceMobile" !== e && "isTablet" !== e
                })((e => {
                    let {
                        theme: t,
                        theatreMode: r,
                        forceMobile: n,
                        isTablet: i
                    } = e;
                    return x(x(x({
                        justifySelf: "self-end",
                        [t.breakpoints.up("gp_x10")]: {
                            justifySelf: "auto"
                        },
                        gridArea: "game",
                        transition: "all 0.3s ease"
                    }, !n && {
                        [t.breakpoints.down("gp_x10")]: {
                            width: v(t),
                            height: y(t)
                        },
                        [t.breakpoints.down("gp_x6")]: {
                            width: `calc(100vw - ${t.dimensions.sidebar.collapsedWidth}px - ${t.spacing(3)})`,
                            height: `min(calc(100vh - ${t.dimensions.header.height}px - ${t.spacing(2)}),56vw)`
                        },
                        [t.breakpoints.up("gp_x9")]: {
                            width: w(t) + (0, d.bG)(t, 2.5),
                            height: j(t) + (0, d.bG)(t, 2.5)
                        }
                    }), r && !n && {
                        zIndex: 2,
                        width: `${k(t)}px !important`,
                        height: `${C(t)}px !important`,
                        marginLeft: -93,
                        [t.breakpoints.down("gp_x9")]: {
                            width: `${O(t)}px !important`,
                            height: `${P(t)}px !important`
                        },
                        [t.breakpoints.down("gp_x8")]: {
                            marginLeft: 0
                        },
                        [t.breakpoints.between("gp_x6", "gp_x7")]: {
                            width: `${v(t)}px !important`,
                            height: `${y(t)}px !important`
                        },
                        [t.breakpoints.down("gp_x6")]: {
                            width: "100%",
                            height: "auto"
                        }
                    }), n && x({
                        width: "100vw",
                        height: `min(calc(100vh - ${t.dimensions.header.height}px - ${t.dimensions.mobileFooterNav.height}px - ${t.spacing(2)} - 67px),56vw)`,
                        position: "relative"
                    }, i && {
                        "@media (orientation: landscape)": {
                            height: "33vw"
                        }
                    }))
                })),
                D = (0, c.ZP)("div")((e => {
                    let {
                        theme: {
                            spacing: t,
                            breakpoints: r
                        }
                    } = e;
                    return {
                        gridArea: "info",
                        [r.down("gp_x6")]: {
                            marginTop: t(2)
                        }
                    }
                })),
                L = (e, t) => {
                    const r = {
                        x6: {
                            1: "gp_x6",
                            2: "gp_x7"
                        },
                        x7: {
                            1: "gp_x7",
                            2: "gp_x8"
                        },
                        x8: {
                            1: "gp_x8",
                            2: "gp_x9"
                        },
                        x9: {
                            1: "gp_x9",
                            2: "gp_x10"
                        }
                    };
                    return "x10" === e ? t.breakpoints.up("gp_x10") : t.breakpoints.between(r[e][1], r[e][2])
                },
                I = (0, c.ZP)("div", {
                    shouldForwardProp: e => "area" !== e && "layout" !== e
                })((e => {
                    let {
                        theme: t,
                        area: r,
                        layout: n
                    } = e;
                    return {
                        gridArea: `related${r}`,
                        display: "none",
                        [L(n, t)]: {
                            display: "block"
                        }
                    }
                })),
                E = e => {
                    let {
                        spacing: t,
                        dimensions: r
                    } = e;
                    return {
                        display: "block",
                        marginTop: t(2),
                        height: r.gameThumb.height
                    }
                },
                F = (0, c.ZP)(f, {
                    shouldForwardProp: e => "area" !== e && "forceMobile" !== e
                })((e => {
                    let {
                        theme: t,
                        area: r,
                        forceMobile: n
                    } = e;
                    const {
                        breakpoints: i
                    } = t;
                    return x(x(x(x(x(x({
                        gridArea: `banner${r}`,
                        display: "none"
                    }, "1x6" === r && {
                        [i.between("gp_x8", "gp_x9")]: {
                            display: "block"
                        }
                    }), "1x6b" === r && {
                        [i.between("gp_x6", "gp_x7")]: {
                            display: "block"
                        }
                    }), "2x6" === r && {
                        display: "block",
                        [i.between("gp_x6", "gp_x7")]: {
                            display: "none"
                        },
                        [i.down("gp_x6")]: {
                            display: "none"
                        },
                        "@media only screen and (max-height: 640px)": {
                            "& > div": {
                                top: "48% !important"
                            }
                        }
                    }), "4x1" === r && x(x({
                        [i.between("gp_x6", "gp_x7")]: {
                            display: "block"
                        },
                        [i.between("gp_x9", "gp_x10")]: {
                            display: "block"
                        },
                        [i.up("gp_x10")]: {
                            display: "block"
                        },
                        [i.down("gp_x6")]: E(t)
                    }, n && E(t)), {}, {
                        [`@media only screen and (max-width: ${728+(0,d.bG)(t,2)}px)`]: {
                            display: "none"
                        }
                    })), "5x1" === r && {
                        [i.between("gp_x7", "gp_x8")]: {
                            display: "block"
                        },
                        [i.between("gp_x8", "gp_x9")]: {
                            display: "block"
                        }
                    }), "2x3" === r && {
                        [i.between("gp_x9", "gp_x10")]: {
                            display: "block"
                        },
                        [i.up("gp_x10")]: {
                            display: "block"
                        }
                    })
                })),
                R = (0, c.ZP)("div", {
                    shouldForwardProp: e => "isDesktop" !== e
                })((e => {
                    let {
                        theme: {
                            spacing: t
                        },
                        isDesktop: r
                    } = e;
                    return {
                        paddingLeft: r ? t(1) : void 0
                    }
                })),
                G = (0, c.ZP)("div")((e => {
                    let {
                        theme: {
                            breakpoints: t
                        }
                    } = e;
                    return {
                        [t.down("gp_x6")]: {
                            width: "100%"
                        }
                    }
                }));
            var M = e => {
                    let {
                        jsonLd: t
                    } = e;
                    return (0, g.jsx)("div", {
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    })
                },
                A = r(40181),
                U = r(87835),
                V = r(18514),
                H = r(38858),
                N = r(11884),
                _ = r(72086),
                $ = r(35848),
                W = r(9422),
                B = r(12451);
            var z = async function(e) {
                    if (W.Z.isFullscreen()) return;
                    const t = e.currentUserInfo();
                    if ((0, B.T)(null === t || void 0 === t ? void 0 : t.device, !!window.__NEXT_DATA__.props.forceIpad).isLowEndDevice) return;
                    const n = (await r.e(59727).then(r.bind(r, 59727))).create(void 0, {
                        resize: !0,
                        useWorker: !0
                    });
                    n({
                        particleCount: 100,
                        angle: 60,
                        spread: 65,
                        origin: {
                            x: 0
                        },
                        colors: d.eI
                    }), n({
                        particleCount: 100,
                        angle: 120,
                        spread: 65,
                        origin: {
                            x: 1
                        },
                        colors: d.eI
                    })
                },
                q = r(477),
                K = r(58401);

            function X(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? X(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : X(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            class Y extends a.Component {
                constructor(e) {
                    super(e), (0, n.Z)(this, "containerRef", void 0), (0, n.Z)(this, "iframeRef", void 0), (0, n.Z)(this, "onLoad", (() => {
                        this.props.onLoad && this.props.onLoad(this.iframeRef.current)
                    })), (0, n.Z)(this, "routeChangeStart", (e => {
                        const t = new URL(e, window.location.href);
                        window.location.href !== t.toString() && this.iframeRef.current && (this.iframeRef.current.src = "about:blank")
                    })), (0, n.Z)(this, "processMessage", (e => {
                        if (!e.data || e.data.type !== K.V) return;
                        const {
                            game: t,
                            routeHelper: r,
                            theatreModeAvailable: n
                        } = this.props;
                        if (!e.origin) return;
                        let i;
                        try {
                            i = new URL(e.origin)
                        } catch (l) {
                            return
                        }
                        const s = r.isMessageFromGameframe(e, t.desktopUrl),
                            a = i.hostname === window.location.hostname;
                        if (s || a) switch (e.data.event) {
                            case "happytime":
                                z(this.props.services.userInfoService).catch((e => {
                                    console.error(e)
                                }));
                                break;
                            case "inviteLink":
                                const t = e.data.url;
                                window.history.replaceState({
                                    path: t
                                }, document.title, t);
                                break;
                            case "requestStatusTheatreMode":
                                n ? this.sendToGameframeTheatreModeEnabled() : this.sendToGameframeTheatreModeDisabled();
                                break;
                            case "exitFullscreen":
                                W.Z.exitNativeFullscreen();
                                break;
                            case "getPwaInstallEnabled":
                                var o;
                                if (this.iframeRef.current && (0, _.uD)(this.props.game.https)) null === (o = this.iframeRef.current.contentWindow) || void 0 === o || o.postMessage("canInstallPWA", "*")
                        }
                    })), (0, n.Z)(this, "cmpInstalledCb", (() => {
                        var e;
                        this.iframeRef.current && (null === (e = this.iframeRef.current.contentWindow) || void 0 === e || e.postMessage("tcf-loaded", "*"))
                    })), this.containerRef = a.createRef(), this.iframeRef = a.createRef()
                }
                componentDidMount() {
                    i.Router.events.on("routeChangeStart", this.routeChangeStart), window.addEventListener("message", this.processMessage), q.Z.addInstallListener(this.cmpInstalledCb), this.props.onLoad(this.iframeRef.current)
                }
                componentWillUnmount() {
                    window.removeEventListener("message", this.processMessage), i.Router.events.off("routeChangeStart", this.routeChangeStart), q.Z.removeInstallListener(this.cmpInstalledCb)
                }
                componentDidUpdate(e) {
                    e.theatreModeAvailable !== this.props.theatreModeAvailable && (this.props.theatreModeAvailable ? this.sendToGameframeTheatreModeEnabled() : this.sendToGameframeTheatreModeDisabled())
                }
                render() {
                    const {
                        game: e
                    } = this.props, t = (0, H.Z)(e), r = e.seoDescription ? {
                        dangerouslySetInnerHTML: {
                            __html: e.seoDescription
                        }
                    } : {}, n = Q({
                        position: "relative",
                        width: "100%",
                        height: "100%"
                    }, d.mP);
                    return (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)(V.kB, {
                            children: (0, g.jsx)("div", {
                                className: "GameContainer",
                                ref: this.containerRef,
                                style: n,
                                children: (0, g.jsx)(V.IA, Q(Q(Q({
                                    id: "game-iframe",
                                    src: this.gameUrl(),
                                    title: e.name,
                                    scrolling: "no",
                                    allow: "autoplay; payment; fullscreen; microphone; focus-without-user-activation *; screen-wake-lock; gamepad; clipboard-read; clipboard-write;",
                                    allowFullScreen: !0,
                                    ref: this.iframeRef,
                                    sandbox: t,
                                    loading: "eager",
                                    onLoad: this.onLoad
                                }, {
                                    importance: "high"
                                }), r), {}, {
                                    "data-hj-allow-iframe": !0
                                }), e.slug)
                            })
                        }), (0, g.jsx)(N.Z, {
                            game: e
                        }), (0, g.jsx)($.Z, {})]
                    })
                }
                sendToGameframeTheatreModeEnabled() {
                    var e;
                    this.iframeRef.current && (null === (e = this.iframeRef.current.contentWindow) || void 0 === e || e.postMessage("set-status-theatre-mode-enabled", "*"))
                }
                sendToGameframeTheatreModeDisabled() {
                    var e;
                    this.iframeRef.current && (null === (e = this.iframeRef.current.contentWindow) || void 0 === e || e.postMessage("set-status-theatre-mode-disabled", "*"))
                }
                gameUrl() {
                    const {
                        game: e,
                        routeHelper: t
                    } = this.props;
                    return t.gameIframeUrl(e.desktopUrl)
                }
            }
            var J = (0, U.Z)((0, l.Z)(Y)),
                ee = r(1733),
                te = r(5152),
                re = r.n(te),
                ne = r(96046),
                ie = r(14412),
                se = r(19258),
                ae = r(86845),
                oe = r(49501),
                le = r(73927);
            const de = (0, c.ZP)(le.Sn)((e => {
                let {
                    theme: {
                        breakpoints: t,
                        spacing: r
                    }
                } = e;
                return {
                    fontSize: d.CH.bodyXSmall,
                    fontWeight: 700,
                    padding: r(.5, 1.5, .5, 1),
                    marginRight: r(),
                    [t.down("sm")]: {
                        padding: r(.5, 1),
                        marginRight: 0,
                        minWidth: 44,
                        minHeight: 44
                    }
                }
            }));
            var ce = r(27444);

            function me(e, t) {
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
                    t % 2 ? me(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : me(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var pe = a.memo((e => (0, g.jsx)(ce.Z, he(he({}, e), {}, {
                viewBox: "0 0 24 24",
                children: (0, g.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M13.9701 4.24253C14.5059 4.37648 14.8317 4.91941 14.6978 5.45521L11.1828 19.5149C11.0489 20.0507 10.5059 20.3765 9.97014 20.2425C9.43435 20.1086 9.10859 19.5656 9.24254 19.0298L12.7575 4.97013C12.8914 4.43434 13.4343 4.10858 13.9701 4.24253ZM7.66339 6.25172C8.07665 6.61809 8.11466 7.25012 7.74828 7.66338L4.0543 11.83C4.02867 11.859 4 11.9173 4 12C4 12.0827 4.02867 12.141 4.05429 12.1699L7.74828 16.3366C8.11466 16.7499 8.07665 17.3819 7.66339 17.7483C7.25013 18.1146 6.6181 18.0766 6.25172 17.6634L2.55774 13.4967C1.81408 12.6579 1.81409 11.3421 2.55774 10.5033L6.25173 6.3366C6.6181 5.92334 7.25013 5.88534 7.66339 6.25172ZM16.3366 6.25172C16.7499 5.88534 17.3819 5.92334 17.7483 6.3366L21.4423 10.5033C22.1859 11.3421 22.1859 12.6579 21.4423 13.4967L17.7483 17.6634C17.3819 18.0766 16.7499 18.1146 16.3366 17.7483C15.9234 17.3819 15.8853 16.7499 16.2517 16.3366L19.9457 12.1699C19.9713 12.141 20 12.0827 20 12C20 11.9173 19.9713 11.859 19.9457 11.83L16.2517 7.66338C15.8853 7.25012 15.9234 6.61809 16.3366 6.25172Z"
                })
            }))));
            const ue = re()((() => Promise.all([r.e(19541), r.e(12921), r.e(28905)]).then(r.bind(r, 28905))), {
                loadableGenerated: {
                    webpack: () => [28905]
                }
            });
            var ge = e => {
                let {
                    game: t
                } = e;
                const [r, n] = a.useState(!1), i = () => n(!1);
                return (0, g.jsxs)(g.Fragment, {
                    children: [(0, g.jsxs)(de, {
                        onClick: () => n(!0),
                        variant: "contained",
                        children: [(0, g.jsx)(pe, {
                            sx: {
                                mr: 1
                            }
                        }), (0, g.jsx)("span", {
                            children: (0, g.jsx)(oe.cC, {
                                id: "game.embed.button"
                            })
                        })]
                    }), r ? (0, g.jsx)(ue, {
                        game: t,
                        onClose: i
                    }) : null]
                })
            };

            function fe(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function be(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? fe(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fe(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var xe = a.memo((e => (0, g.jsxs)(ce.Z, be(be({}, e), {}, {
                viewBox: "0 0 24 24",
                children: [(0, g.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10ZM2 12C2 9.79086 3.79086 8 6 8C8.20914 8 10 9.79086 10 12C10 14.2091 8.20914 16 6 16C3.79086 16 2 14.2091 2 12Z"
                }), (0, g.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4ZM14 6C14 3.79086 15.7909 2 18 2C20.2091 2 22 3.79086 22 6C22 8.20914 20.2091 10 18 10C15.7909 10 14 8.20914 14 6Z"
                }), (0, g.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16ZM14 18C14 15.7909 15.7909 14 18 14C20.2091 14 22 15.7909 22 18C22 20.2091 20.2091 22 18 22C15.7909 22 14 20.2091 14 18Z"
                }), (0, g.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15.5528 17.8944L7.5528 13.8944L8.44722 12.1056L16.4472 16.1056L15.5528 17.8944Z"
                }), (0, g.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8.4472 11.8944L16.4472 7.89443L15.5528 6.10558L7.55278 10.1056L8.4472 11.8944Z"
                })]
            }))));
            const ve = re()((() => Promise.all([r.e(19541), r.e(12921), r.e(49194)]).then(r.bind(r, 49194))), {
                loadableGenerated: {
                    webpack: () => [49194]
                }
            });
            class ye extends a.Component {
                constructor(e) {
                    super(e), (0, n.Z)(this, "processMessage", (e => {
                        if (!e.data || e.data.type !== K.V) return;
                        const {
                            game: t,
                            routeHelper: r
                        } = this.props;
                        r.isMessageFromGameframe(e, t.desktopUrl) && "share" === e.data.event && this.open()
                    })), (0, n.Z)(this, "open", (async () => {
                        const e = window.navigator.canShare && window.navigator.canShare();
                        if (window.navigator.share && !1 !== e) try {
                            await window.navigator.share({
                                title: this.props.game.name,
                                url: window.location.href
                            })
                        } catch (t) {
                            console.log("User has aborted share", t)
                        } else this.setState({
                            open: !0
                        })
                    })), (0, n.Z)(this, "close", (() => {
                        this.setState({
                            open: !1
                        })
                    })), this.state = {
                        open: !1
                    }
                }
                render() {
                    const {
                        isDesktop: e
                    } = this.props.deviceType;
                    return (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsxs)(de, {
                            onClick: this.open,
                            variant: e ? "contained" : "link",
                            color: e ? "purple" : "white",
                            children: [(0, g.jsx)(xe, {}), e && (0, g.jsx)("span", {
                                children: (0, g.jsx)(oe.cC, {
                                    id: "game.share.button"
                                })
                            })]
                        }), this.renderModal()]
                    })
                }
                componentDidMount() {
                    window.addEventListener("message", this.processMessage)
                }
                componentWillUnmount() {
                    window.removeEventListener("message", this.processMessage)
                }
                renderModal() {
                    const {
                        open: e
                    } = this.state;
                    if (!e) return null;
                    const {
                        game: t
                    } = this.props;
                    return (0, g.jsx)(ve, {
                        game: t,
                        onClose: this.close
                    })
                }
            }
            var we = (0, U.Z)((0, A.Z)(ye)),
                je = r(50645);
            var Oe = e => {
                    let {
                        game: t
                    } = e;
                    const {
                        gamesInSeries: r
                    } = t;
                    return 0 === r.length ? null : (0, g.jsxs)(se.Nr, {
                        sx: {
                            mb: 2
                        },
                        children: [(0, g.jsx)("h3", {
                            children: (0, g.jsx)(oe.cC, {
                                id: "game.series.title"
                            })
                        }), (0, g.jsx)(je.Z, {
                            sx: {
                                mt: 2
                            },
                            games: r,
                            preventZoom: !0
                        })]
                    })
                },
                Pe = r(83747);

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

            function Ce(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ke(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ke(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Ze = a.memo((e => (0, g.jsx)(ce.Z, Ce(Ce({}, e), {}, {
                    viewBox: "0 0 24 24",
                    children: (0, g.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.57484 4C8.17921 4 7.82522 4.22056 7.65455 4.55747L4.10855 11.5575C3.78161 12.2029 4.24657 13 5.02885 13H11.8817C12.434 13 12.8817 13.4477 12.8817 14C12.8817 14.5523 12.434 15 11.8817 15H10.8554V19C10.8554 19.54 11.3025 20 11.8817 20H11.8958C11.9142 19.1188 12.187 18.2613 12.6818 17.5288L15.9474 12.6939V4.78324L12.8972 4.03059C12.815 4.01029 12.7304 4 12.6454 4H8.57484ZM17.9474 5V13H18.9737C19.5528 13 19.9999 12.54 19.9999 12V6C19.9999 5.45998 19.5528 5 18.9737 5H17.9474ZM16.8033 15L14.3391 18.6482C14.0489 19.078 13.8948 19.5815 13.8948 20.0955C13.8948 21.1596 13.0245 22 11.9784 22H11.8817C10.2226 22 8.85538 20.6691 8.85538 19V15H5.02885C2.79852 15 1.30407 12.6679 2.32441 10.6537L5.87041 3.65368C6.38621 2.63545 7.43548 2 8.57484 2H12.6454C12.8917 2 13.1372 2.02982 13.3764 2.08884L17.0689 3H18.9737C20.6327 3 21.9999 4.33087 21.9999 6V12C21.9999 13.6691 20.6327 15 18.9737 15H16.8033Z"
                    })
                })))),
                Se = r(98435);

            function Te(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function De(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Te(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Te(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const Le = (0, c.ZP)(le.Sn, {
                    shouldForwardProp: e => "clicked" !== e && "voteVariant" !== e
                })((e => {
                    let {
                        theme: {
                            palette: t,
                            breakpoints: r,
                            spacing: n
                        },
                        clicked: i,
                        voteVariant: s
                    } = e;
                    return De({
                        color: t.primary.contrastText,
                        padding: n(1.25),
                        fontWeight: "normal",
                        "&:hover": {
                            "& $voteBtnNotClicked": {
                                color: t.secondary.contrastText
                            }
                        },
                        [r.down("sm")]: {
                            fontSize: d.CH.bodySmall
                        }
                    }, i && {
                        color: "like" === s ? `${Pe.D.success[100]} !important` : `${Pe.D.alert[100]} !important`
                    })
                })),
                Ie = e => {
                    let {
                        palette: t,
                        breakpoints: r,
                        spacing: n
                    } = e;
                    return {
                        color: t.primary.contrastText,
                        marginRight: n(1),
                        [r.down("sm")]: {
                            marginRight: n(.5)
                        }
                    }
                },
                Ee = (0, c.ZP)(Ze, {
                    shouldForwardProp: e => "clicked" !== e
                })((e => {
                    let {
                        theme: t,
                        clicked: r
                    } = e;
                    return De(De({}, Ie(t)), r && {
                        color: `${Pe.D.alert[100]} !important`
                    })
                })),
                Fe = (0, c.ZP)(Se.Z, {
                    shouldForwardProp: e => "clicked" !== e
                })((e => {
                    let {
                        theme: t,
                        clicked: r
                    } = e;
                    return De(De({}, Ie(t)), r && {
                        color: `${Pe.D.success[100]} !important`
                    })
                }));
            let Re;
            ! function(e) {
                e[e.CANCEL = 0] = "CANCEL", e[e.POSITIVE = 1] = "POSITIVE", e[e.NEGATIVE = -1] = "NEGATIVE"
            }(Re || (Re = {}));
            var Ge = r(92355),
                Me = r(47989),
                Ae = r(80541);
            var Ue = function(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                try {
                    return e.number(t, r)
                } catch (n) {
                    return console.error(n), `${t}`
                }
            };

            function Ve(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function He(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ve(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ve(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const Ne = re()((() => Promise.all([r.e(19541), r.e(83187), r.e(54341), r.e(10593)]).then(r.bind(r, 10593))), {
                    loading: () => null,
                    loadableGenerated: {
                        webpack: () => [10593]
                    }
                }),
                _e = e => `vote-${e.slug}`,
                $e = e => {
                    const t = _e(e),
                        r = Ge.Z.Instance.getItem(t);
                    if (!r) return Re.CANCEL;
                    try {
                        const e = parseInt(r, 10);
                        switch (e) {
                            case Re.CANCEL:
                            case Re.POSITIVE:
                            case Re.NEGATIVE:
                                return e;
                            default:
                                return Re.CANCEL
                        }
                    } catch (n) {
                        return Re.CANCEL
                    }
                };
            class We extends a.Component {
                constructor(e) {
                    super(e), (0, n.Z)(this, "mountedTime", void 0), (0, n.Z)(this, "screenshotInPNGBase64", void 0), (0, n.Z)(this, "processMessage", (e => {
                        if (!e.data || e.data.type !== K.V) return;
                        const {
                            game: t,
                            routeHelper: r
                        } = this.props;
                        r.isMessageFromGameframe(e, t.desktopUrl) && ("like" === e.data.event ? this.upVote() : "dislike" === e.data.event ? this.downVote(e.data.screenshotInPNGBase64) : "neutral" === e.data.event && this.neutralVote())
                    })), (0, n.Z)(this, "upVote", (async () => {
                        const {
                            userLiked: e
                        } = this.props;
                        return e.addToLiked({
                            id: this.props.game.id,
                            slug: this.props.game.slug,
                            name: this.props.game.slug,
                            cover: this.props.game.cover,
                            video: this.props.game.video,
                            videos: this.props.game.videos,
                            status: this.props.game.status,
                            https: this.props.game.https,
                            iosFriendly: !0,
                            androidFriendly: !0,
                            mobileFriendly: !0
                        }).catch((e => {
                            console.error("[UserLiked] error while adding to liked", e)
                        })), this.vote(Re.POSITIVE)
                    })), (0, n.Z)(this, "downVote", (async e => {
                        const {
                            userLiked: t
                        } = this.props;
                        t.removeFromLiked(this.props.game.id).catch((e => {
                            console.error("[UserLiked] error while removing from liked", e)
                        })), "en-US" === this.props.locale ? (this.screenshotInPNGBase64 = e, this.setState({
                            showGameFeedbackModal: !0
                        })) : this.vote(Re.NEGATIVE, {
                            screenshotInPNGBase64: e,
                            feedbackDetails: ""
                        })
                    })), (0, n.Z)(this, "neutralVote", (async () => {
                        const {
                            userLiked: e
                        } = this.props;
                        e.removeFromLiked(this.props.game.id).catch((e => {
                            console.error("[UserLiked] error while removing from liked", e)
                        })), this.vote(Re.CANCEL)
                    })), (0, n.Z)(this, "onSubmitDislikeWithFeedback", ((e, t) => {
                        this.vote(Re.NEGATIVE, He(He({}, e), {}, {
                            screenshotInPNGBase64: this.screenshotInPNGBase64 || ""
                        }), t), this.onCloseFeedbackModal(), this.screenshotInPNGBase64 = void 0
                    })), (0, n.Z)(this, "onCancelFeedbackModal", (() => {
                        this.vote(Re.NEGATIVE), this.onCloseFeedbackModal()
                    })), (0, n.Z)(this, "onCloseFeedbackModal", (() => {
                        this.setState({
                            showGameFeedbackModal: !1
                        })
                    })), this.state = {
                        vote: Re.CANCEL,
                        showGameFeedbackModal: !1
                    }
                }
                componentDidMount() {
                    this.mountedTime = Date.now(), window.addEventListener("message", this.processMessage);
                    const e = $e(this.props.game);
                    e !== Re.CANCEL && this.setState({
                        vote: e
                    })
                }
                componentWillUnmount() {
                    window.removeEventListener("message", this.processMessage)
                }
                componentDidUpdate(e) {
                    e.game.slug !== this.props.game.slug && (this.setState({
                        vote: $e(this.props.game)
                    }), this.mountedTime = Date.now())
                }
                render() {
                    return (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsxs)(Me.Z, {
                            children: [this.upVotes(), this.downVotes()]
                        }), this.renderGameFeedbackModal()]
                    })
                }
                renderGameFeedbackModal() {
                    if (this.state.showGameFeedbackModal) {
                        const t = (e = this.mountedTime, parseFloat(((Date.now() - e) / 6e4).toFixed(2)));
                        return (0, g.jsx)(Ne, {
                            game: this.props.game,
                            timeSpentByUser: t,
                            onSubmit: this.onSubmitDislikeWithFeedback,
                            onClose: this.onCancelFeedbackModal
                        })
                    }
                    var e
                }
                downVotes() {
                    const e = this.state.vote === Re.NEGATIVE;
                    return (0, g.jsxs)(Le, {
                        voteVariant: "dislike",
                        clicked: e,
                        onClick: () => e ? this.neutralVote() : this.downVote(),
                        children: [(0, g.jsx)(Ee, {
                            clicked: e
                        }), this.getDownvotes()]
                    })
                }
                upVotes() {
                    const e = this.state.vote === Re.POSITIVE;
                    return (0, g.jsxs)(Le, {
                        voteVariant: "like",
                        clicked: e,
                        onClick: () => e ? this.neutralVote() : this.upVote(),
                        children: [(0, g.jsx)(Fe, {
                            clicked: e
                        }), this.getUpvotes()]
                    })
                }
                getUpvotes() {
                    const {
                        game: e,
                        i18n: t
                    } = this.props, {
                        vote: r
                    } = this.state;
                    let n = e.upvotes;
                    return r === Re.POSITIVE && (n = e.upvotes + 1), Ue(t, n, {
                        notation: "compact"
                    })
                }
                getDownvotes() {
                    const {
                        game: e,
                        i18n: t
                    } = this.props, {
                        vote: r
                    } = this.state;
                    let n = e.downvotes;
                    return r === Re.NEGATIVE && (n = e.downvotes + 1), Ue(t, n, {
                        notation: "compact"
                    })
                }
                async vote(e, t, r) {
                    const {
                        services: n,
                        game: i
                    } = this.props, {
                        gameService: s
                    } = n;
                    this.saveVoteInStorage(e), n.crazyAnalyticsService.gameVote(e, i.id, r), this.setState({
                        vote: e
                    });
                    try {
                        await s.vote(i.slug, e, t)
                    } catch (a) {
                        console.error("[GameContainerTools] error while voting", a)
                    }
                }
                saveVoteInStorage(e) {
                    const t = Ge.Z.Instance,
                        r = _e(this.props.game);
                    e === Re.CANCEL ? t.removeItem(r) : t.setItem(r, `${e}`)
                }
            }
            var Be = (0, U.Z)((0, l.Z)((0, Ae.mX)((0, oe.GV)()(We))));
            var ze = e => {
                    let {
                        game: t,
                        children: r
                    } = e;
                    const n = a.useContext(u.ZP),
                        i = !t.mobileUrl && (n.isMobile || n.isTablet);
                    return "UNAVAILABLE" === t.status || i ? null : (0, g.jsx)(g.Fragment, {
                        children: r
                    })
                },
                qe = r(62097),
                Ke = r(61225);
            var Xe = e => {
                    let {
                        lastFileUpdatedOn: t
                    } = e;
                    const {
                        i18n: r
                    } = (0, oe.mV)(), {
                        spacing: n,
                        breakpoints: i
                    } = (0, qe.Z)(), s = (0, Ke.Z)(i.up("md"));
                    return (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)("h3", {
                            style: {
                                marginTop: n(2),
                                marginLeft: s ? 0 : n(2),
                                width: "100%"
                            },
                            children: (0, g.jsx)(oe.cC, {
                                id: "game.lastUpdated"
                            })
                        }), (0, g.jsx)("p", {
                            style: {
                                marginTop: n(2),
                                marginLeft: s ? 0 : n(2),
                                width: "100%"
                            },
                            children: r.date(t, {
                                year: "numeric",
                                month: "short",
                                day: "2-digit"
                            })
                        })]
                    })
                },
                Qe = r(43506),
                Ye = r(70612);

            function Je(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function et(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Je(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Je(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var tt = a.memo((e => (0, g.jsx)(ce.Z, et(et({}, e), {}, {
                    viewBox: "0 0 24 24",
                    children: (0, g.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.04445 3C6.66359 3 5.53468 3.29654 4.63432 3.82463C3.73186 4.35395 3.11419 5.08371 2.70912 5.86217C1.91829 7.38195 1.92575 9.0998 2.11858 10.0865C2.62052 12.655 4.41942 15.3472 6.3037 17.3581C7.25773 18.3762 8.27078 19.26 9.21577 19.8976C10.1115 20.502 11.1112 21 12 21C12.8888 21 13.8885 20.502 14.7842 19.8976C15.7292 19.26 16.7423 18.3762 17.6963 17.3581C19.5806 15.3472 21.3795 12.655 21.8814 10.0865C22.0743 9.0998 22.0817 7.38195 21.2909 5.86217C20.8858 5.08371 20.2682 4.35395 19.3657 3.82463C18.4653 3.29654 17.3364 3 15.9556 3C14.8581 3 13.9104 3.49559 13.1784 4.11305C12.7259 4.49473 12.3303 4.94327 12 5.40732C11.6697 4.94327 11.2741 4.49473 10.8216 4.11305C10.0896 3.49559 9.14193 3 8.04445 3Z"
                    })
                })))),
                rt = r(21818),
                nt = r(74152);

            function it(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function st(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? it(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : it(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const at = "#e2264d",
                ot = (0, c.ZP)("div", {
                    shouldForwardProp: e => "isClicked" !== e && "isStaticFavourite" !== e
                })((e => {
                    let {
                        isClicked: t,
                        isStaticFavourite: r
                    } = e;
                    return {
                        display: "flex",
                        justifyContent: "center",
                        fontSize: 24,
                        span: st(st({
                            display: "flex",
                            justifyContent: "center"
                        }, r && t && {
                            color: at
                        }), {}, {
                            userSelect: "none",
                            cursor: "pointer"
                        }, t && !r && {
                            color: at,
                            filter: "none",
                            willChange: "font-size",
                            svg: {
                                animation: "heart 1s cubic-bezier(0.17, 0.89, 0.32, 1.49)"
                            }
                        }),
                        "span:before, span:after": st({
                            position: "absolute",
                            zIndex: 10,
                            top: "50%",
                            left: "50%",
                            borderRadius: "50%",
                            content: "''"
                        }, t && !r && {
                            animation: "rest 1s cubic-bezier(0.17, 0.89, 0.32, 1.49)",
                            animationTimingFunction: "ease-out"
                        }),
                        "span:before": st({
                            boxSizing: "border-box",
                            margin: "-1.6875rem",
                            border: "solid 2.25rem #e2264d",
                            width: "3.375rem",
                            height: "3.375rem",
                            transform: "scale(0)"
                        }, t && !r && {
                            willChange: "transform, border-width, border-color",
                            animationName: "bubble"
                        }),
                        "span:after": st({
                            margin: "-2.25px",
                            width: "0.28125rem",
                            height: "0.28125rem",
                            boxShadow: "0.32476rem -3rem 0 -0.1875rem #ff8080,\n      -0.32476rem -2.625rem 0 -0.1875rem #ffed80,\n      2.54798rem -1.61656rem 0 -0.1875rem #ffed80,\n      1.84982rem -1.89057rem 0 -0.1875rem #a4ff80,\n      2.85252rem 0.98418rem 0 -0.1875rem #a4ff80,\n      2.63145rem 0.2675rem 0 -0.1875rem #80ffc8,\n      1.00905rem 2.84381rem 0 -0.1875rem #80ffc8,\n      1.43154rem 2.22414rem 0 -0.1875rem #80c8ff,\n      -1.59425rem 2.562rem 0 -0.1875rem #80c8ff,\n      -0.84635rem 2.50595rem 0 -0.1875rem #a480ff,\n      -2.99705rem 0.35095rem 0 -0.1875rem #a480ff,\n      -2.48692rem 0.90073rem 0 -0.1875rem #ff80ed,\n      -2.14301rem -2.12438rem 0 -0.1875rem #ff80ed,\n      -2.25479rem -1.38275rem 0 -0.1875rem #ff8080"
                        }, t && !r && {
                            willChange: " opacity, box-shadow",
                            animationName: "sparkles"
                        }),
                        "@keyframes heart": {
                            "0%, 17.5%": {
                                transform: "scale(0)"
                            }
                        },
                        "@keyframes rest": {
                            "0%, 17.5%": {
                                fontSize: 0
                            }
                        },
                        "@keyframes bubble": {
                            "15%": {
                                transform: "scale(1)",
                                borderColor: "#cc8ef5",
                                borderWidth: "1.6875rem"
                            },
                            "30%,100%": {
                                transform: "scale(1)",
                                borderColor: "#cc8ef5",
                                borderWidth: 0
                            }
                        },
                        "@keyframes sparkles": {
                            "0%,20%": {
                                opacity: 0
                            },
                            "25%": {
                                opacity: 1,
                                boxShadow: "0.32476rem -2.4375rem 0 0rem #ff8080,\n          -0.32476rem -2.0625rem 0 0rem #ffed80,\n          2.1082rem -1.26585rem 0 0rem #ffed80,\n          1.41004rem -1.53985rem 0 0rem #a4ff80,\n          2.30412rem 0.85901rem 0 0rem #a4ff80, 2.08305rem 0.14233rem 0 0rem #80ffc8,\n          0.76499rem 2.33702rem 0 0rem #80ffc8, 1.18748rem 1.71734rem 0 0rem #80c8ff,\n          -1.35019rem 2.0552rem 0 0rem #80c8ff,\n          -0.60229rem 1.99916rem 0 0rem #a480ff,\n          -2.44865rem 0.22578rem 0 0rem #a480ff,\n          -1.93852rem 0.77557rem 0 0rem #ff80ed,\n          -1.70323rem -1.77366rem 0 0rem #ff80ed,\n          -1.81501rem -1.03204rem 0 0rem #ff8080"
                            }
                        }
                    }
                }));
            var lt = e => {
                    let {
                        game: t
                    } = e;
                    const {
                        spacing: r
                    } = (0, qe.Z)(), {
                        favourites: n,
                        addToFavourite: i,
                        removeFromFavourite: s
                    } = (0, a.useContext)(nt.Q), {
                        user: o
                    } = (0, a.useContext)(Qe.S), {
                        openDrawer: l
                    } = (0, a.useContext)(rt.rf), {
                        0: d,
                        1: c
                    } = (0, a.useState)(!0), m = n.some((e => e.slug === t.slug));
                    return (0, g.jsx)(Me.Z, {
                        children: (0, g.jsx)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: r(),
                                paddingRight: r(),
                                width: 44,
                                height: 44,
                                position: "relative"
                            },
                            onClick: () => {
                                o ? (c(!1), m ? s(t.id) : i({
                                    id: t.id,
                                    slug: t.slug,
                                    name: t.slug,
                                    cover: t.cover,
                                    video: t.video,
                                    videos: t.videos,
                                    status: t.status,
                                    https: t.https,
                                    iosFriendly: !0,
                                    androidFriendly: !0,
                                    mobileFriendly: !0
                                })) : l("myGames")
                            },
                            children: (0, g.jsx)(ot, {
                                isStaticFavourite: d,
                                isClicked: m,
                                children: (0, g.jsx)("span", {
                                    children: m ? (0, g.jsx)(tt, {}) : (0, g.jsx)(Ye.Z, {})
                                })
                            })
                        })
                    })
                },
                dt = r(34386),
                ct = r(77792);
            const mt = re()((() => Promise.all([r.e(19541), r.e(77782), r.e(10984), r.e(70690), r.e(80895), r.e(86791)]).then(r.bind(r, 86791))), {
                loading: () => null,
                ssr: !1,
                loadableGenerated: {
                    webpack: () => [86791]
                }
            });
            var ht = e => {
                    let {
                        game: t
                    } = e;
                    const {
                        gameService: r
                    } = (0, a.useContext)(dt.Z).services, n = a.useContext(u.ZP), {
                        0: s,
                        1: o
                    } = (0, a.useState)(!1), {
                        0: l,
                        1: d
                    } = (0, a.useState)(!1), {
                        0: c,
                        1: m
                    } = (0, a.useState)([]), {
                        0: h,
                        1: p
                    } = (0, a.useState)({}), [f, b] = a.useState(!1), x = (0, ct.yz)(n);
                    a.useEffect((() => {
                        const e = () => b(!1);
                        return i.Router.events.on("routeChangeStart", e),
                            function() {
                                i.Router.events.off("routeChangeStart", e)
                            }
                    }), []);
                    return t.developerId ? (0, g.jsxs)("div", {
                        style: {
                            width: "100%"
                        },
                        children: [(0, g.jsx)(se.Bv, {
                            children: (0, g.jsx)(oe.cC, {
                                id: "game.info.dev",
                                values: {
                                    developerName: (0, g.jsxs)(se.IZ, {
                                        onClick: () => {
                                            b(!0), s || l || (async () => {
                                                if (!t.developerId) return;
                                                d(!0);
                                                const {
                                                    games: e,
                                                    publicProfile: n
                                                } = await r.developerData(t.developerId, x);
                                                d(!1), o(!0), m(e), p(n)
                                            })()
                                        },
                                        children: ["\xa0", t.developer]
                                    })
                                }
                            })
                        }), f && (0, g.jsx)(mt, {
                            games: c,
                            developerName: t.developer || "Game developer",
                            publicProfile: h,
                            onClose: () => b(!1)
                        })]
                    }) : null
                },
                pt = r(96682),
                ut = r(18377),
                gt = r(30120),
                ft = r(75672);
            var bt = e => {
                let {
                    votes: t,
                    rating: r
                } = e;
                const {
                    i18n: n
                } = (0, oe.mV)(), i = Ue(n, t), s = Ue(n, r, {
                    minimumFractionDigits: 1
                });
                return (0, g.jsxs)(g.Fragment, {
                    children: [(0, g.jsx)(ft.Z, {
                        children: (0, g.jsxs)(gt.Z, {
                            sx: {
                                textAlign: "right",
                                lineHeight: {
                                    xs: 1.3,
                                    md: 1
                                },
                                ml: 2,
                                mr: 1
                            },
                            children: [(0, g.jsx)(se.sg, {
                                children: i
                            }), (0, g.jsx)(se.Sv, {
                                children: (0, g.jsx)(oe.cC, {
                                    id: "game.ratings"
                                })
                            })]
                        })
                    }), (0, g.jsx)(se.gs, {
                        children: s
                    })]
                })
            };

            function xt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function vt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? xt(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xt(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const yt = re()((() => r.e(9256).then(r.bind(r, 9256))), {
                ssr: !0,
                loadableGenerated: {
                    webpack: () => [9256]
                }
            });
            var wt = e => {
                    let {
                        game: t
                    } = e;
                    const {
                        descriptionFirst: r,
                        descriptionRest: n,
                        name: i,
                        hierarchy: s,
                        allowEmbed: o,
                        seoDescription: l,
                        gamesInSeries: c,
                        rating: h,
                        upvotes: p,
                        downvotes: f,
                        controls: b,
                        appStoreUrl: x,
                        playStoreUrl: v,
                        steamStoreUrl: y
                    } = t, {
                        spacing: w
                    } = (0, pt.Z)(), j = r || l || "", O = n || "", P = !!x || !!v || !!y, k = () => (0, g.jsx)(we, {
                        game: t
                    }), C = (e, t, r) => r ? (0, g.jsx)("a", {
                        href: r,
                        target: "_blank",
                        rel: "noreferrer nofollow noopener",
                        style: {
                            marginRight: w(2)
                        },
                        children: (0, g.jsx)(se.BZ, {
                            src: (0, m.ZP)(e),
                            alt: t
                        })
                    }) : null, Z = a.useContext(u.ZP), S = vt(vt({}, t.category), {}, {
                        isCategory: !0
                    }), T = p + f;
                    return (0, g.jsx)(g.Fragment, {
                        children: (0, g.jsxs)(se.fC, {
                            id: "gameInfoContainer",
                            children: [(0, g.jsx)(ut.Z, {
                                sx: {
                                    pr: {
                                        xs: 0,
                                        sm: 1,
                                        md: 2
                                    },
                                    width: Z.isMobile ? 1 : "calc(100% - 300px)"
                                },
                                children: (0, g.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        flexWrap: "wrap",
                                        paddingTop: w(2),
                                        paddingBottom: w()
                                    },
                                    children: [(0, g.jsxs)(se._P, {
                                        children: [(0, g.jsx)("h1", {
                                            style: {
                                                fontSize: d.CH.h2,
                                                lineHeight: 1.167
                                            },
                                            children: i
                                        }), (0, g.jsx)(ae.Z, {
                                            hierarchy: s,
                                            currentTagName: i,
                                            forceAddCurrentTag: !1
                                        })]
                                    }), (0, g.jsx)(se.tc, {
                                        isDesktop: Z.isDesktop,
                                        children: Z.isDesktop ? (0, g.jsxs)(g.Fragment, {
                                            children: [k(), o ? (0, g.jsx)(ne.Z, {
                                                lgDown: !0,
                                                implementation: "css",
                                                children: (0, g.jsx)(ge, {
                                                    game: t
                                                })
                                            }) : null, (0, g.jsx)(bt, {
                                                votes: T,
                                                rating: h
                                            }), (0, g.jsx)(Be, {
                                                game: t
                                            })]
                                        }) : (0, g.jsxs)(g.Fragment, {
                                            children: [(0, g.jsx)(bt, {
                                                votes: T,
                                                rating: h
                                            }), (0, g.jsx)(Be, {
                                                game: t
                                            }), (0, g.jsx)(ie.Z, {
                                                orientation: "vertical",
                                                sx: {
                                                    mx: 1.25,
                                                    height: 20
                                                }
                                            }), (0, g.jsx)(lt, {
                                                game: t
                                            }), k()]
                                        })
                                    }), (0, g.jsx)(ht, {
                                        game: t
                                    }), (0, g.jsx)(se.SM, {
                                        content: j,
                                        style: {
                                            marginBlockEnd: "1em"
                                        },
                                        className: "gameDescription_first"
                                    }), (0, g.jsx)(se.SM, {
                                        content: O
                                    }), t.lastFileUpdatedOn && (0, g.jsx)(Xe, {
                                        lastFileUpdatedOn: new Date(t.lastFileUpdatedOn)
                                    }), b && (0, g.jsx)(se.SM, {
                                        content: b
                                    })]
                                })
                            }), (0, g.jsx)("div", {
                                style: {
                                    display: Z.isMobile ? "none" : "block",
                                    position: "relative",
                                    marginTop: w(1)
                                },
                                children: (0, g.jsx)(ze, {
                                    game: t,
                                    children: (0, g.jsx)(se.Q$, {
                                        customLabelStyle: {
                                            textAlign: "center"
                                        }
                                    })
                                })
                            }), c && (0, g.jsx)(Oe, {
                                game: t
                            }), (0, g.jsx)(yt, {
                                tags: [S, ...t.tags]
                            }), P && (0, g.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: w(),
                                    marginBottom: w(2),
                                    marginLeft: w(),
                                    width: "100%",
                                    flexWrap: "wrap"
                                },
                                children: [C("store-logos/apple-store.png", "Apple Store Logo", x), C("store-logos/google-store-button.png", "Google Play Logo", v), C("store-logos/steam-button.png", "Steam Store Logo", y)]
                            })]
                        })
                    })
                },
                jt = r(91655),
                Ot = r(38950);

            function Pt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            var kt = e => (0, g.jsx)(Ot.l, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Pt(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pt(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }({
                code: "div-gpt-ad-1590672385835-0",
                width: 728,
                height: 90,
                align: "left",
                customPaperStyle: {
                    marginTop: -4
                },
                customLabelStyle: {
                    marginTop: -6
                }
            }, e));

            function Ct(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Zt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ct(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ct(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var St = e => (0, g.jsx)(Ot.l, Zt(Zt({}, e), {}, {
                code: "div-gpt-ad-1487926862614-0",
                width: 160,
                height: 600
            }));

            function Tt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            var Dt = e => (0, g.jsx)(Ot.l, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Tt(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tt(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }({
                code: "div-gpt-ad-1487926862614-1",
                width: 160,
                height: 600
            }, e));

            function Lt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            var It = e => (0, g.jsx)(Ot.l, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Lt(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lt(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }({
                code: "div-gpt-ad-1507830314438-1",
                width: 300,
                height: 600
            }, e));

            function Et(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            var Ft = e => (0, g.jsx)(Ot.l, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Et(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Et(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }({
                code: "div-gpt-ad-1590672182999-0",
                width: 300,
                height: 250
            }, e));

            function Rt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            var Gt = e => (0, g.jsx)(Ot.l, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Rt(Object(r), !0).forEach((function(t) {
                            (0, n.Z)(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rt(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }({
                    code: "div-gpt-ad-1580372626073-0",
                    width: 320,
                    height: 50
                }, e)),
                Mt = r(83921);
            const At = "theatreModeEnabled";
            var Ut = () => {
                const {
                    analyticsService: e,
                    crazyAnalyticsService: t
                } = (0, a.useContext)(dt.Z).services, r = Ge.Z.Instance.getItem(At) || "false", n = !!JSON.parse(r), {
                    0: i,
                    1: s
                } = (0, a.useState)(n);
                return (0, a.useEffect)((() => {
                    const r = r => {
                        r.data && r.data.type === K.V && "toggleTheatreMode" === r.data.event && (i ? (s(!1), Ge.Z.Instance.setItem(At, "false"), t.displayEvent("theatre", "exit")) : (s(!0), e.trackEnableTheatreMode(), Ge.Z.Instance.setItem(At, "true"), t.displayEvent("theatre", "enter")))
                    };
                    return window.addEventListener("message", r), () => {
                        window.removeEventListener("message", r)
                    }
                }), [e, i, t]), i
            };
            var Vt = e => {
                let {
                    children: t,
                    theatreModeAvailable: r
                } = e;
                const n = a.useContext(u.ZP),
                    i = n.isMobile || n.isTablet,
                    s = Ut();
                return (0, g.jsx)(T, {
                    forceMobile: i,
                    isTablet: n.isTablet,
                    theatreMode: !(!r || !s),
                    children: t
                })
            };

            function Ht(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            var Nt = e => t => {
                    const r = Ut();
                    return (0, g.jsx)(e, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Ht(Object(r), !0).forEach((function(t) {
                                (0, n.Z)(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ht(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }({
                        theatreMode: r
                    }, t))
                },
                _t = r(45670),
                $t = r(72461),
                Wt = r(73359),
                Bt = r(63530),
                zt = r(79106);
            var qt = e => {
                    let {
                        gameIframe: t,
                        game: r
                    } = e;
                    const {
                        user: n,
                        loadingUser: i
                    } = a.useContext(Qe.S), [s] = (0, Wt.t)(zt.Qt), [o, l] = a.useState(null), {
                        openDrawer: d
                    } = a.useContext(rt.rf), {
                        favourites: c,
                        addToFavourite: m,
                        removeFromFavourite: h
                    } = a.useContext(nt.Q), p = c.some((e => e.slug === r.slug)), u = (0, a.useCallback)((async () => {
                        var e = await s();
                        if (!e.data) throw new Error("Failed to query user");
                        var t = e.data.me;
                        return {
                            id: t.id,
                            username: `${t.username}`,
                            profilePictureUrl: `${Bt.Z.Instance.data.images}${t.profile.avatar}`
                        }
                    }), [s]);
                    return a.useEffect((() => {
                        o && (n ? u().then((e => {
                            o.postMessage({
                                type: "userLoggedIn",
                                data: {
                                    user: e
                                }
                            }, "*")
                        })) : i || o.postMessage({
                            type: "userLoggedOut"
                        }, "*"))
                    }), [n, i, o, u]), a.useEffect((() => {
                        o && o.postMessage({
                            type: "userAccountAvailableResponse"
                        }, "*")
                    }), [o]), a.useEffect((() => {
                        o && p && o.postMessage({
                            type: "userFavouritedGame"
                        }, "*")
                    }), [p, o]), a.useEffect((() => {
                        o && !p && o.postMessage({
                            type: "userUnFavouritedGame"
                        }, "*")
                    }), [o, p]), a.useEffect((() => {
                        t && t.contentWindow && (o || l(t.contentWindow))
                    }), [t, o]), a.useEffect((() => {
                        const e = e => {
                            if (e.data && e.data.type === K.V) switch (e.data.event) {
                                case "requestUserPortalInfo":
                                    (async e => {
                                        (t => {
                                            const r = e.source;
                                            r && r.postMessage(t, "*")
                                        })({
                                            type: "requestUserPortalInfoResponse",
                                            data: {
                                                user: n ? await u() : void 0,
                                                isFavouriteGame: p
                                            }
                                        })
                                    })(e);
                                    break;
                                case "requestUserAccountAvailable":
                                    e.source.postMessage({
                                        type: "userAccountAvailableResponse"
                                    }, "*");
                                    break;
                                case "requestToFavouriteGame":
                                    n ? m({
                                        id: r.id,
                                        slug: r.slug,
                                        name: r.slug,
                                        cover: r.cover,
                                        video: r.video,
                                        videos: r.videos,
                                        status: r.status,
                                        https: r.https,
                                        iosFriendly: !0,
                                        androidFriendly: !0,
                                        mobileFriendly: !0
                                    }) : d("myGames");
                                    break;
                                case "openGamesDrawer":
                                    d("myGames");
                                    break;
                                case "requestToUnFavouriteGame":
                                    n ? h(r.id) : d("myGames");
                                    break;
                                default:
                                    return
                            }
                        };
                        return window.addEventListener("message", e),
                            function() {
                                window.removeEventListener("message", e)
                            }
                    }), [u, n, m, h, d, r, p]), null
                },
                Kt = r(33206),
                Xt = r(54505);

            function Qt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            var Yt = function(e) {
                return t => {
                    const r = (0, Xt.Z)();
                    return (0, g.jsx)(e, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Qt(Object(r), !0).forEach((function(t) {
                                (0, n.Z)(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qt(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }({
                        isIos: r
                    }, t))
                }
            };
            const Jt = re()((() => r.e(9906).then(r.bind(r, 9906))), {
                    ssr: !0,
                    loading: () => (0, g.jsx)("div", {
                        style: {
                            width: "100vw",
                            height: "56vw"
                        },
                        children: (0, g.jsx)(jt.Z, {
                            width: "100%",
                            height: "100%",
                            style: {
                                transform: "none"
                            }
                        })
                    }),
                    loadableGenerated: {
                        webpack: () => [9906]
                    }
                }),
                er = re()((() => r.e(5169).then(r.bind(r, 5169))), {
                    ssr: !0,
                    loading: () => (0, g.jsx)("div", {
                        style: {
                            width: "100vw",
                            height: "56vw"
                        },
                        children: (0, g.jsx)(jt.Z, {
                            width: "100%",
                            height: "100%",
                            style: {
                                transform: "none"
                            }
                        })
                    }),
                    loadableGenerated: {
                        webpack: () => [5169]
                    }
                });
            class tr extends a.Component {
                constructor(e) {
                    super(e), (0, n.Z)(this, "handleResize", (() => {
                        this.setState({
                            windowWidth: window.innerWidth
                        })
                    })), (0, n.Z)(this, "handleMobileGameOpen", (() => {
                        this.setState({
                            mobileGameOpened: !0
                        })
                    })), (0, n.Z)(this, "onLoadIframe", (e => {
                        this.setState({
                            gameIframe: e
                        })
                    })), this.state = {
                        windowWidth: null,
                        mobileGameOpened: !1,
                        gameIframe: null
                    }
                }
                componentDidMount() {
                    window.addEventListener("resize", this.handleResize), this.setState({
                        windowWidth: window.innerWidth
                    })
                }
                componentWillUnmount() {
                    window.removeEventListener("resize", this.handleResize)
                }
                render() {
                    const {
                        game: e,
                        related: t,
                        theatreMode: r,
                        isGameUnavailable: n,
                        services: i,
                        theme: s,
                        deviceType: a
                    } = this.props, o = i.crazyAnalyticsService, {
                        windowWidth: l
                    } = this.state, d = !e.preventTheatreMode && l && l >= s.breakpoints.values.gp_x9, c = this.isMobile(), m = (0, Mt.cY)(), h = this.getDisplayedGames();
                    return (0, g.jsxs)(R, {
                        isDesktop: a.isDesktop,
                        children: [(0, g.jsx)(M, {
                            jsonLd: e.jsonLd
                        }), (0, g.jsx)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center"
                            },
                            children: (0, g.jsx)(G, {
                                children: (0, g.jsxs)(Z, {
                                    forceMobile: c,
                                    className: "" + (m ? "holidays" : ""),
                                    children: [(0, g.jsxs)(Vt, {
                                        theatreModeAvailable: !!d,
                                        children: [(0, g.jsx)(ft.Z, {
                                            children: (0, g.jsx)(J, {
                                                game: e,
                                                theatreModeAvailable: !!d,
                                                onLoad: this.onLoadIframe
                                            })
                                        }), (0, g.jsx)(Me.Z, {
                                            children: n ? (0, g.jsx)(er, {
                                                game: e
                                            }) : (0, g.jsx)(Jt, {
                                                game: e,
                                                onOpen: this.handleMobileGameOpen,
                                                onLoad: this.onLoadIframe
                                            })
                                        }), (0, g.jsx)(qt, {
                                            gameIframe: this.state.gameIframe,
                                            game: e
                                        })]
                                    }), l && l > 728 && !a.isMobile && (0, g.jsx)(F, {
                                        area: "4x1",
                                        sx: {
                                            display: c ? "block" : void 0
                                        },
                                        forceMobile: c,
                                        children: (0, g.jsx)(ze, {
                                            game: e,
                                            children: (0, g.jsx)(kt, {})
                                        })
                                    }), this.renderMobileContent(h), (0, g.jsxs)(ft.Z, {
                                        children: [this.checkXTiles(0) && (0, g.jsxs)(g.Fragment, {
                                            children: [(0, g.jsx)(D, {
                                                children: (0, g.jsx)(wt, {
                                                    game: e
                                                })
                                            }), this.generateGameGrid(h, 0, h.length, {
                                                slidesToLoadEagerly: 15,
                                                customStyles: {
                                                    marginTop: 4
                                                }
                                            })]
                                        }), this.checkXTiles(6) && (0, g.jsxs)(g.Fragment, {
                                            children: [(0, g.jsx)(I, {
                                                area: "1x2",
                                                layout: "x6",
                                                children: this.generateGameGrid(h, 0, 2)
                                            }), (0, g.jsx)(I, {
                                                area: "5x3",
                                                layout: "x6",
                                                children: this.generateGameGrid(h, 2, 17)
                                            }), (0, g.jsx)(I, {
                                                area: "5x3b",
                                                layout: "x6",
                                                children: this.generateGameGrid(h, 17, 32, {
                                                    slidesToLoadEagerly: 0
                                                })
                                            }), (0, g.jsx)(I, {
                                                area: "1x1",
                                                layout: "x6",
                                                style: {
                                                    marginTop: -2,
                                                    marginLeft: -2
                                                },
                                                children: h.slice(32, 33).length > 0 && (0, g.jsx)(ee.Z, {
                                                    game: h.slice(32, 33)[0],
                                                    onClickAction: () => {
                                                        o.gameClickedFromList(h)
                                                    }
                                                })
                                            }), (0, g.jsx)(I, {
                                                area: "1x7",
                                                layout: "x6",
                                                children: this.generateGameGrid(h, 33, 40, {
                                                    slidesToLoadEagerly: 0
                                                })
                                            })]
                                        }), this.checkXTiles(7) && (0, g.jsxs)(g.Fragment, {
                                            children: [(0, g.jsx)(I, {
                                                area: "2x2",
                                                layout: "x7",
                                                children: this.generateGameGrid(h, 0, 4)
                                            }), m && (0, g.jsx)(I, {
                                                area: "5x2",
                                                layout: "x7",
                                                children: this.generateGameGrid(h, 4, 14)
                                            }), !m && (0, g.jsx)(I, {
                                                area: "5x3",
                                                layout: "x7",
                                                children: this.generateGameGrid(h, 4, 19)
                                            }), (0, g.jsx)(I, {
                                                area: "5x3b",
                                                layout: "x7",
                                                children: this.generateGameGrid(h, 19, 34, {
                                                    slidesToLoadEagerly: 0
                                                })
                                            }), (0, g.jsx)(I, {
                                                area: "2x6",
                                                layout: "x7",
                                                children: this.generateGameGrid(h, 34, 46, {
                                                    slidesToLoadEagerly: 0
                                                })
                                            })]
                                        }), this.checkXTiles(8) && (0, g.jsxs)(g.Fragment, {
                                            children: [(0, g.jsx)(I, {
                                                area: "1x2",
                                                layout: "x8",
                                                children: this.generateGameGrid(h, 0, 2)
                                            }), (0, g.jsx)(I, {
                                                area: "2x2",
                                                layout: "x8",
                                                children: this.generateGameGrid(h, 2, 6)
                                            }), m && (0, g.jsx)(I, {
                                                area: "5x2",
                                                layout: "x8",
                                                children: this.generateGameGrid(h, 6, 16)
                                            }), !m && (0, g.jsx)(I, {
                                                area: "5x3",
                                                layout: "x8",
                                                children: this.generateGameGrid(h, 6, 21)
                                            }), (0, g.jsx)(I, {
                                                area: "1x3",
                                                layout: "x8",
                                                children: this.generateGameGrid(h, 21, 24, {
                                                    slidesToLoadEagerly: 0
                                                })
                                            }), (0, g.jsx)(I, {
                                                area: "2x6",
                                                layout: "x8",
                                                children: this.generateGameGrid(h, 24, 36, {
                                                    slidesToLoadEagerly: 0
                                                })
                                            }), (0, g.jsx)(I, {
                                                area: "8x1",
                                                layout: "x8",
                                                children: this.generateGameGrid(h, 36, 44, {
                                                    slidesToLoadEagerly: 0
                                                })
                                            })]
                                        }), this.checkXTiles(9) && (0, g.jsxs)(g.Fragment, {
                                            children: [!r && (0, g.jsx)(I, {
                                                area: "1x6",
                                                layout: "x9",
                                                children: this.generateGameGrid(h, 0, 6, {
                                                    transformOrigin: "center left"
                                                })
                                            }), !r && (0, g.jsx)(I, {
                                                area: "7x1",
                                                layout: "x9",
                                                children: this.generateGameGrid(h, 6, 13)
                                            }), (0, g.jsx)(I, {
                                                area: "1x1",
                                                layout: "x9",
                                                style: {
                                                    marginTop: -2,
                                                    marginLeft: -2
                                                },
                                                children: h.slice(13, 14).length > 0 && (0, g.jsx)(ee.Z, {
                                                    game: h.slice(13, 14)[0],
                                                    onClickAction: () => {
                                                        o.gameClickedFromList(h)
                                                    }
                                                })
                                            }), (0, g.jsx)(I, {
                                                area: "1x4",
                                                layout: "x9",
                                                children: this.generateGameGrid(h, 14, 18, {
                                                    slidesToLoadEagerly: 0
                                                })
                                            }), (0, g.jsx)(I, {
                                                area: "1x2",
                                                layout: "x9",
                                                children: this.generateGameGrid(h, 18, 20, {
                                                    slidesToLoadEagerly: 0
                                                })
                                            }), (0, g.jsx)(I, {
                                                area: "3x2",
                                                layout: "x9",
                                                children: this.generateGameGrid(h, 20, 26, {
                                                    slidesToLoadEagerly: 0
                                                })
                                            }), (0, g.jsx)(I, {
                                                area: "9x2",
                                                layout: "x9",
                                                children: this.generateGameGrid(h, 26, 44, {
                                                    slidesToLoadEagerly: 0
                                                })
                                            })]
                                        }), this.checkXTiles(10) && (0, g.jsxs)(g.Fragment, {
                                            children: [!r && (0, g.jsx)(I, {
                                                area: "1x6",
                                                layout: "x10",
                                                children: this.generateGameGrid(h, 0, 6, {
                                                    transformOrigin: "center left"
                                                })
                                            }), !r && (0, g.jsx)(I, {
                                                area: "1x6b",
                                                layout: "x10",
                                                children: this.generateGameGrid(h, 6, 12)
                                            }), !r && (0, g.jsx)(I, {
                                                area: "8x1",
                                                layout: "x10",
                                                children: this.generateGameGrid(h, 12, 20)
                                            }), (0, g.jsx)(I, {
                                                area: "2x1",
                                                layout: "x10",
                                                children: this.generateGameGrid(h, 20, 22)
                                            }), (0, g.jsx)(I, {
                                                area: "8x1b",
                                                layout: "x10",
                                                children: this.generateGameGrid(h, 22, 30, {
                                                    slidesToLoadEagerly: 0
                                                })
                                            }), (0, g.jsx)(I, {
                                                area: "2x1b",
                                                layout: "x10",
                                                children: this.generateGameGrid(h, 30, 32, {
                                                    slidesToLoadEagerly: 0
                                                })
                                            }), (0, g.jsx)(I, {
                                                area: "3x3",
                                                layout: "x10",
                                                children: this.generateGameGrid(h, 32, 41, {
                                                    slidesToLoadEagerly: 0
                                                })
                                            }), (0, g.jsx)(I, {
                                                area: "1x3",
                                                layout: "x10",
                                                children: this.generateGameGrid(h, 41, 44, {
                                                    slidesToLoadEagerly: 0
                                                })
                                            }), (0, g.jsx)(I, {
                                                area: "10x2",
                                                layout: "x10",
                                                children: this.generateGameGrid(h, 44, 64, {
                                                    slidesToLoadEagerly: 0
                                                })
                                            })]
                                        })]
                                    }), (0, g.jsx)(ft.Z, {
                                        children: !this.checkXTiles(0) && (0, g.jsx)(D, {
                                            children: (0, g.jsx)(wt, {
                                                game: e
                                            })
                                        })
                                    }), (0, g.jsxs)(ft.Z, {
                                        children: [(0, g.jsx)(F, {
                                            area: "1x6",
                                            children: (0, g.jsx)(ze, {
                                                game: e,
                                                children: (0, g.jsx)(St, {})
                                            })
                                        }), (0, g.jsx)(F, {
                                            area: "1x6b",
                                            children: (0, g.jsx)(ze, {
                                                game: e,
                                                children: (0, g.jsx)(Dt, {})
                                            })
                                        }), m && (0, g.jsx)(F, {
                                            area: "5x1",
                                            children: (0, g.jsx)(ze, {
                                                game: e,
                                                children: (0, g.jsx)(kt, {
                                                    id: "gamepage-leaderboard-holiday-refresh"
                                                })
                                            })
                                        }), (0, g.jsx)(F, {
                                            area: "2x6",
                                            children: (0, g.jsx)(ze, {
                                                game: e,
                                                children: (0, g.jsx)(It, {})
                                            })
                                        }), (0, g.jsx)(F, {
                                            area: "2x3",
                                            children: (0, g.jsx)(ze, {
                                                game: e,
                                                children: (0, g.jsx)(Ft, {})
                                            })
                                        })]
                                    }), (0, g.jsx)(Me.Z, {
                                        children: t.desktop && (0, g.jsx)(je.Z, {
                                            games: t.desktop,
                                            justifyContent: "center"
                                        })
                                    })]
                                })
                            })
                        }), this.shouldDisplayBackToGameBtn() && (0, g.jsx)(Kt.Z, {
                            height: 250,
                            onClick: () => {
                                i.analyticsService.trackBackToGame()
                            },
                            label: (0, g.jsx)(oe.cC, {
                                id: "game.backToGame"
                            })
                        }), (0, g.jsx)(ft.Z, {
                            children: !l && this.generateGameGrid(h, 0, h.length)
                        })]
                    })
                }
                renderMobileContent(e) {
                    const {
                        game: t,
                        deviceType: r
                    } = this.props, n = [(0, g.jsx)(D, {
                        children: (0, g.jsx)(wt, {
                            game: t
                        })
                    }, 0), this.generateGameGrid(e, 0, e.length, {
                        customStyles: {
                            marginTop: 8
                        }
                    })];
                    return (0, g.jsx)(Me.Z, {
                        children: (0, g.jsxs)(S, {
                            children: [r.isMobile && (0, g.jsx)(f, {
                                sx: {
                                    mt: 1
                                },
                                children: (0, g.jsx)(ze, {
                                    game: t,
                                    children: (0, g.jsx)(Gt, {})
                                })
                            }), this.state.mobileGameOpened ? n.reverse() : n]
                        })
                    })
                }
                getDisplayedGames() {
                    const {
                        related: e,
                        isIos: t
                    } = this.props;
                    return (0, _t.Z)(e, {
                        isIos: t
                    })
                }
                shouldDisplayBackToGameBtn() {
                    const {
                        deviceType: e,
                        game: t
                    } = this.props;
                    return e.isDesktop || t.mobileUrl
                }
                checkXTiles(e) {
                    const {
                        windowWidth: t
                    } = this.state, {
                        theme: {
                            breakpoints: r
                        }
                    } = this.props;
                    if (!t) return !1;
                    if (e < 6) return t < r.values.gp_x6;
                    switch (e) {
                        case 6:
                            return t >= r.values.gp_x6 && t < r.values.gp_x7;
                        case 7:
                            return t >= r.values.gp_x7 && t < r.values.gp_x8;
                        case 8:
                            return t >= r.values.gp_x8 && t < r.values.gp_x9;
                        case 9:
                            return t >= r.values.gp_x9 && t < r.values.gp_x10;
                        case 10:
                            return t >= r.values.gp_x10;
                        default:
                            return !1
                    }
                }
                generateGameGrid(e, t, r) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    const {
                        game: i
                    } = this.props;
                    if (e.slice(t, r).length === r - t) return (0, g.jsx)(je.Z, {
                        games: e.slice(t, r),
                        justifyContent: "center",
                        slidesToLoadEagerly: n.slidesToLoadEagerly,
                        transformOrigin: n.transformOrigin,
                        customStyles: n.customStyles
                    }, i.slug)
                }
                isMobile() {
                    const {
                        deviceType: e
                    } = this.props;
                    return e.isTablet || e.isMobile
                }
            }
            var rr = Nt((0, A.Z)(Yt((0, l.Z)((0, $t.Z)(tr))))),
                nr = r(26086),
                ir = r(28710),
                sr = r(74167),
                ar = r(51448),
                or = r(43144),
                lr = r(6778);
            class dr extends a.PureComponent {
                constructor() {
                    super(...arguments), (0, n.Z)(this, "onLoad", (() => {
                        this.registerSW(), window.addEventListener("beforeinstallprompt", this.onBeforeInstallPrompt), window.addEventListener("appinstalled", this.onAppInstall), window.addEventListener("message", this.processMessage)
                    })), (0, n.Z)(this, "processMessage", (e => {
                        if (!e.origin || !e.data || e.data.type !== K.V) return;
                        const {
                            game: t,
                            routeHelper: r,
                            deviceType: n
                        } = this.props, i = !n.isDesktop && t.mobileUrl ? t.mobileUrl : t.desktopUrl;
                        if (r.isMessageFromGameframe(e, i)) {
                            if ("addGamePWA" === e.data.event) {
                                const t = e.data.source;
                                (0, _.rV)(t), this.props.services.analyticsService.trackPWAGameInstalled(!0, this.props.game.slug, t)
                            }
                            "cancelGamePWAInstall" === e.data.event && this.props.services.analyticsService.trackPWAGameInstalled(!1, this.props.game.slug, "popup")
                        }
                    })), (0, n.Z)(this, "onBeforeInstallPrompt", (e => {
                        e.preventDefault(), (0, _.hZ)(e), this.trackInstallEvent(e)
                    })), (0, n.Z)(this, "onAppInstall", (() => {
                        (0, _.Bc)(), this.props.services.analyticsService.trackPWAGameInstalled(!0, this.props.game.slug, "browser-event")
                    })), (0, n.Z)(this, "trackInstallEvent", (e => {
                        e.userChoice.then((e => {
                            "accepted" !== e.outcome && this.props.services.analyticsService.trackPWAGameInstalled(!1, this.props.game.slug)
                        }))
                    })), (0, n.Z)(this, "registerSW", (() => {
                        if ("serviceWorker" in navigator) {
                            const {
                                routeHelper: e
                            } = this.props, t = e.gamePageLinkPrefix(), r = e.toRelativeLink(t);
                            navigator.serviceWorker.register("/sw-game.js", {
                                scope: r
                            }).then((e => {
                                console.log("[GSW] registration successful")
                            }), (e => console.log("[GSW] registration failed: ", e)))
                        }
                    }))
                }
                componentDidMount() {
                    "serviceWorker" in navigator && ("complete" !== document.readyState ? window.addEventListener("load", this.onLoad) : this.onLoad())
                }
                componentWillUnmount() {
                    window.removeEventListener("load", this.onLoad), window.removeEventListener("beforeinstallprompt", this.onBeforeInstallPrompt), window.removeEventListener("appinstalled", this.onAppInstall), window.removeEventListener("message", this.processMessage)
                }
                render() {
                    return null
                }
            }
            var cr = (0, U.Z)((0, l.Z)((0, A.Z)(dr))),
                mr = r(34779);
            var hr = e => {
                    let {
                        game: t
                    } = e;
                    const {
                        analyticsService: r
                    } = a.useContext(dt.Z).services;
                    return a.useEffect((() => (r.setLoaderType(t.technology), function() {
                        r.unsetLoaderType()
                    })), [t, r]), null
                },
                pr = r(49471),
                ur = r(50305),
                gr = r(10041),
                fr = r(94704),
                br = r(50319);
            const xr = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "GameData"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "technology"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "GameTechnology"
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "gameData"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "technology"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "technology"
                                        }
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "data"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "version"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "metadata"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "updatedAt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "browser"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "deviceType"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 225,
                        source: {
                            body: "\n  query GameData($id: String!, $technology: GameTechnology) {\n    gameData(id: $id, technology: $technology) {\n      data\n      version\n      metadata {\n        updatedAt\n        browser\n        deviceType\n      }\n    }\n  }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                },
                vr = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "AddGameData"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "AddGameDataInput"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "addGameData"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "input"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "input"
                                        }
                                    }
                                }],
                                directives: []
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 88,
                        source: {
                            body: "\n  mutation AddGameData($input: AddGameDataInput!) {\n    addGameData(input: $input)\n  }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                },
                yr = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "ClearGameData"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ClearGameDataInput"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "clearGameData"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "input"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "input"
                                        }
                                    }
                                }],
                                directives: []
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 94,
                        source: {
                            body: "\n  mutation ClearGameData($input: ClearGameDataInput!) {\n    clearGameData(input: $input)\n  }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                },
                wr = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "SetUserStorage"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "SetUserStorageInput"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "setUserStorage"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "input"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "input"
                                        }
                                    }
                                }],
                                directives: []
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 97,
                        source: {
                            body: "\n  mutation SetUserStorage($input: SetUserStorageInput!) {\n    setUserStorage(input: $input)\n  }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                };
            var jr = r(97542);
            var Or = e => {
                    let {
                        gameId: t,
                        gameTechnology: r
                    } = e;
                    const {
                        user: n
                    } = a.useContext(Qe.S), i = a.useContext(jr.Z), s = a.useContext(u.ZP), [o] = (0, br.D)(vr), [l] = (0, br.D)(yr), [d] = (0, br.D)(wr), [c, m] = (0, Wt.t)(xr), h = a.useRef([]);
                    return a.useEffect((() => {
                        if (m.called && !m.loading) {
                            var e;
                            const t = null === (e = m.data) || void 0 === e ? void 0 : e.gameData;
                            h.current.forEach((e => {
                                m.error ? e({
                                    type: "requestGameDataNone"
                                }) : e({
                                    type: "requestGameDataResponse",
                                    data: {
                                        store: t,
                                        error: m.error
                                    }
                                })
                            })), h.current = []
                        }
                    }), [m, t]), a.useEffect((() => {
                        const e = e => {
                            if (e.data && e.data.type === K.V) switch (e.data.event) {
                                case "requestGameData":
                                    (e => {
                                        const i = t => {
                                            const r = e.source;
                                            r && r.postMessage(t, "*")
                                        };
                                        n ? (h.current = [i, ...h.current], c({
                                            variables: {
                                                id: t,
                                                technology: r
                                            },
                                            fetchPolicy: "network-only"
                                        })) : h.current.forEach((e => {
                                            e({
                                                type: "requestGameDataResponse",
                                                data: {
                                                    store: {},
                                                    error: null
                                                }
                                            })
                                        }))
                                    })(e);
                                    break;
                                case "updateGameData":
                                    n && (e => {
                                        var n;
                                        const {
                                            store: a,
                                            version: l,
                                            updatedAtTz: d
                                        } = e.data, c = JSON.stringify(a), m = (null === (n = i.browser) || void 0 === n ? void 0 : n.name) || "", h = (0, u.cy)(s);
                                        o({
                                            variables: {
                                                input: {
                                                    data: c,
                                                    id: t,
                                                    technology: r,
                                                    version: l,
                                                    browser: m,
                                                    deviceType: h,
                                                    updatedAtTz: d
                                                }
                                            }
                                        })
                                    })(e);
                                    break;
                                case "setUserStorage":
                                    n && (e => {
                                        var t;
                                        const {
                                            storage: r,
                                            createdAtTz: n
                                        } = e.data, a = JSON.stringify(r), o = (null === (t = i.browser) || void 0 === t ? void 0 : t.name) || "", l = (0, u.cy)(s);
                                        d({
                                            variables: {
                                                input: {
                                                    storage: a,
                                                    browser: o,
                                                    deviceType: l,
                                                    createdAtTz: n
                                                }
                                            }
                                        })
                                    })(e);
                                    break;
                                case "clearGameData":
                                    n && (e => {
                                        var n;
                                        const {
                                            version: a
                                        } = e.data, o = (null === (n = i.browser) || void 0 === n ? void 0 : n.name) || "", d = (0, u.cy)(s);
                                        l({
                                            variables: {
                                                input: {
                                                    id: t,
                                                    technology: r,
                                                    version: a,
                                                    browser: o,
                                                    deviceType: d
                                                }
                                            }
                                        })
                                    })(e);
                                    break;
                                default:
                                    return
                            }
                        };
                        return window.addEventListener("message", e),
                            function() {
                                window.removeEventListener("message", e)
                            }
                    }), [o, c, d, l, t, r, n, i.browser, s]), null
                },
                Pr = r(37887);
            var kr = e => {
                let {
                    gameId: t
                } = e;
                const {
                    user: r
                } = a.useContext(Qe.S), {
                    openDrawer: n,
                    openedDrawer: i
                } = a.useContext(rt.rf), [s, o] = (0, Wt.t)(zt.bI), {
                    0: l,
                    1: d
                } = (0, a.useState)(!1), {
                    0: c,
                    1: m
                } = (0, a.useState)(null), h = a.useRef([]), {
                    data: p
                } = (0, Pr.a)(zt.Qt);
                return a.useEffect((() => {
                    if (o.called && !o.loading) {
                        var e;
                        const t = null === (e = o.data) || void 0 === e ? void 0 : e.userToken;
                        h.current.forEach((e => {
                            var r, n;
                            o.error || !t ? "authNotEnabled" === (null === (r = o.error) || void 0 === r || null === (n = r.graphQLErrors[0]) || void 0 === n ? void 0 : n.message) ? e({
                                type: "requestUserTokenResponse",
                                data: {
                                    error: "authNotEnabled"
                                }
                            }) : (console.error("User token retrieve error", o.error), e({
                                type: "requestUserTokenResponse",
                                data: {
                                    error: "unexpectedError"
                                }
                            })) : e({
                                type: "requestUserTokenResponse",
                                data: {
                                    token: t.token,
                                    expiresIn: t.expiresIn
                                }
                            })
                        })), h.current = []
                    }
                }), [o, t]), (0, a.useEffect)((() => {
                    if (l && c) {
                        if (!r && !i) {
                            d(!1), m(null);
                            const e = {
                                type: "showAuthPromptResponse",
                                data: {
                                    error: "userCancelled"
                                }
                            };
                            c.postMessage(e, "*")
                        }
                        if (r && p && !i) {
                            d(!1), m(null);
                            const e = {
                                type: "showAuthPromptResponse",
                                data: {
                                    user: {
                                        id: p.me.id,
                                        username: `${p.me.username}`,
                                        profilePictureUrl: `${Bt.Z.Instance.data.images}${p.me.profile.avatar}`
                                    }
                                }
                            };
                            c.postMessage(e, "*")
                        }
                    }
                }), [i, l, r, c, p]), a.useEffect((() => {
                    const e = e => {
                        if (e.data && e.data.type === K.V) switch (e.data.event) {
                            case "requestUserToken":
                                (e => {
                                    const n = t => {
                                        const r = e.source;
                                        r && r.postMessage(t, "*")
                                    };
                                    r ? (h.current = [n, ...h.current], s({
                                        variables: {
                                            gameId: t
                                        },
                                        fetchPolicy: "network-only"
                                    })) : n({
                                        type: "requestUserTokenResponse",
                                        data: {
                                            error: "userNotAuthenticated"
                                        }
                                    })
                                })(e);
                                break;
                            case "showAuthPrompt":
                                (e => {
                                    n("signIn"), d(!0), m(e.source)
                                })(e);
                                break;
                            default:
                                return
                        }
                    };
                    return window.addEventListener("message", e),
                        function() {
                            window.removeEventListener("message", e)
                        }
                }), [t, r, s, n]), null
            };
            var Cr = e => {
                    let {
                        gameId: t
                    } = e;
                    const {
                        services: r
                    } = a.useContext(dt.Z), {
                        gamesPlayedService: n
                    } = r;
                    return a.useEffect((() => {
                        let e = null,
                            r = Date.now();
                        const i = () => {
                                const e = Date.now() - r;
                                n.addPlayedTimeForSync(t, Math.round(e / 1e3)), r = Date.now()
                            },
                            s = () => {
                                document.hidden ? e && (window.clearInterval(e), i(), e = null) : (r = Date.now(), e = window.setInterval((() => {
                                    i()
                                }), 6e4))
                            };
                        return document.addEventListener("visibilitychange", s),
                            function() {
                                document.removeEventListener("visibilitychange", s), e && window.clearInterval(e)
                            }
                    }), [t, n]), null
                },
                Zr = r(71430);
            class Sr extends a.Component {
                constructor(e) {
                    super(e), (0, n.Z)(this, "addToRecentTimeout", null), (0, n.Z)(this, "gameStartTime", 0), (0, n.Z)(this, "pageUnload", (() => {
                        this.savePlayedGameTime()
                    })), (0, n.Z)(this, "processMessage", (e => {
                        if (e.data && e.data.type === K.V && "gameLoaded" === e.data.event) {
                            const {
                                gfVersion: t
                            } = e.data;
                            this.setGameTracking(t), this.addToRecent()
                        }
                    })), (0, n.Z)(this, "delayedAddToRecent", (() => {
                        const {
                            services: e,
                            game: t,
                            userRecent: r
                        } = this.props;
                        e.recentlyPlayedService.addGame(t), r.addToRecent({
                            id: t.id,
                            slug: t.slug,
                            name: t.slug,
                            cover: t.cover,
                            video: t.video,
                            videos: t.videos,
                            status: t.status,
                            https: t.https,
                            iosFriendly: !0,
                            androidFriendly: !0,
                            mobileFriendly: !0
                        })
                    })), this.state = {
                        trackTime: !1
                    }
                }
                render() {
                    const {
                        game: e
                    } = this.props, {
                        trackTime: t
                    } = this.state;
                    return t ? (0, g.jsx)(Cr, {
                        gameId: e.id
                    }) : null
                }
                componentDidMount() {
                    const {
                        services: e,
                        game: t,
                        isGameUnavailable: r
                    } = this.props;
                    r || (e.crazyAnalyticsService.gamePageLoaded(t.id), window.addEventListener("message", this.processMessage), window.addEventListener("beforeunload", this.pageUnload))
                }
                componentWillUnmount() {
                    this.savePlayedGameTime(), this.clearGameTracking(), window.removeEventListener("beforeunload", this.pageUnload), window.removeEventListener("message", this.processMessage)
                }
                addToRecent() {
                    this.addToRecentTimeout = window.setTimeout(this.delayedAddToRecent, 45e3)
                }
                setGameTracking(e) {
                    var t;
                    const {
                        services: r,
                        game: n
                    } = this.props, {
                        recentlyPlayedService: i,
                        analyticsService: s,
                        crazyAnalyticsService: a
                    } = r;
                    i.startedPlayingGame(n), this.gameStartTime = Date.now();
                    const o = (null === (t = i.getGameDataForSlug(n.slug)) || void 0 === t ? void 0 : t.numPlays) || 1;
                    a.playingStarts({
                        gfVersion: e,
                        gameId: n.id,
                        nbPlays: o
                    }), s.trackPlay(n.slug), this.setState({
                        trackTime: !0
                    })
                }
                savePlayedGameTime() {
                    const {
                        game: e,
                        services: t
                    } = this.props;
                    if (this.gameStartTime) {
                        const r = Math.min(27e5, Date.now() - this.gameStartTime);
                        t.gamesPlayedService.trackPlayedTime(e.slug, r)
                    }
                }
                clearGameTracking() {
                    const {
                        userRecent: e
                    } = this.props;
                    this.addToRecentTimeout && window.clearTimeout(this.addToRecentTimeout), e.syncPlayedTime(), this.setState({
                        trackTime: !1
                    })
                }
            }
            var Tr = (0, l.Z)((0, Zr.VP)(Sr));

            function Dr(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Lr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Dr(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dr(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            class Ir extends a.Component {
                static async getInitialProps(e) {
                    const {
                        pageService: t,
                        adUnitService: r
                    } = (0, lr.b)(e), n = e.query && e.query[or.l1], {
                        deviceType: i
                    } = (0, ct.mO)(e), a = (0, ct.yz)(i), o = i.isMobile || i.isTablet, l = o ? ur.gM : ur.$d, d = ur.qf, [{
                        game: c,
                        related: m
                    }, h] = await Promise.all([t.gamePage(n, l, a, d), r.getAdUnitsConfig()]), {
                        res: p
                    } = e;
                    if ("ARCHIVED" === c.status) {
                        const t = ar.Z.createFromContext(e);
                        if (p) {
                            const e = this.redirectUrl(c, t, !1);
                            p.writeHead(302, {
                                Location: e.as
                            }), p.end()
                        } else {
                            const e = this.redirectUrl(c, t, !0);
                            s().push(e.href, e.as)
                        }
                    }
                    if (p)
                        if (c.isKids) p.writeHead(302, {
                            Location: `${Bt.Z.Instance.data.kids}/game/${c.slug}`
                        }), p.end();
                        else {
                            const t = ar.Z.createFromContext(e),
                                {
                                    protocol: r
                                } = t.routeData,
                                n = c.https && "https" === r || !c.https && "http" === r,
                                i = void 0 !== e.query.no_redirect;
                            if (!n && !t.isOnLocalhost() && !i) {
                                const e = t.gamePageLink(c.slug, {
                                        https: c.https
                                    }),
                                    r = new URL(e.as),
                                    n = t.filteredQueryParams();
                                n && Object.keys(n).forEach((e => {
                                    const t = n[e];
                                    void 0 !== t && r.searchParams.set(e, `${t}`)
                                })), p.writeHead(302, {
                                    Location: r.toString()
                                }), p.end()
                            }
                        }
                    return {
                        adConfig: h,
                        game: c,
                        related: m,
                        isGameUnavailable: o && !c.mobileUrl
                    }
                }
                static redirectUrl(e, t, r) {
                    if (e.collection) {
                        return t.tagPageDirectLink(e.collection, {
                            returnRelative: r
                        })
                    }
                    return t.categoryPageDirectLink(e.category.slug, {
                        returnRelative: r
                    })
                }
                render() {
                    const {
                        i18n: e,
                        game: t,
                        adConfig: r,
                        related: n,
                        routeHelper: i,
                        isGameUnavailable: s
                    } = this.props, a = {
                        name: t.name,
                        category: t.category.name
                    }, l = t.pageTitle ? t.pageTitle : e._({
                        id: "game.head.title"
                    }, {
                        name: t.name
                    }), d = t.metaDescription || e._({
                        id: "game.head.metaDescriptionFallback"
                    }, a), c = i.gamePageAlternativeLinks(t.slug, t.https), m = Bt.Z.Instance.data.gameframe, h = Bt.Z.Instance.data.files, p = Bt.Z.Instance.data.games, u = i.gameCanonical(t.slug, {
                        https: t.https
                    }), f = i.manifestForGameLink(t.slug), b = Bt.Z.Instance.data.adPartners, x = Bt.Z.Instance.data.advertizing.domain, v = !!t.disableAds || "UNAVAILABLE" === t.status || s, y = t.tags.map((e => e.enSlug || e.slug));
                    return (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsxs)(pr.Z, {
                            gameSlug: t.slug,
                            tagsSlug: y,
                            categoryEnSlug: t.category.enSlug,
                            disabled: v,
                            adConfig: Lr(Lr({}, r), {}, {
                                smartRefresh: {
                                    enabled: !!t.smartRefresh,
                                    minWaitInMs: t.minWaitForSmartRefreshInMs,
                                    maxWaitInMs: t.maxWaitForSmartRefreshInMs
                                }
                            }),
                            children: [(0, g.jsxs)(ir.Z, {
                                title: l,
                                metaDescription: d,
                                canonical: u,
                                alternatives: c,
                                touchIcon: this.touchIcon(),
                                children: [f && (0, g.jsx)("link", {
                                    rel: "manifest",
                                    href: f
                                }), (0, g.jsx)("meta", {
                                    name: "apple-mobile-web-app-title",
                                    content: t.name
                                }), (0, g.jsx)("link", {
                                    rel: "preconnect",
                                    href: h,
                                    crossOrigin: "anonymous"
                                }), (0, g.jsx)("link", {
                                    rel: "preconnect",
                                    href: m,
                                    crossOrigin: "anonymous"
                                }), (0, g.jsx)("link", {
                                    rel: "preconnect",
                                    href: p,
                                    crossOrigin: "anonymous"
                                }), b.map(((e, t) => (0, g.jsx)("link", {
                                    rel: "preconnect",
                                    href: e,
                                    crossOrigin: "anonymous"
                                }, t))), (0, g.jsx)("link", {
                                    rel: "preconnect",
                                    href: x,
                                    crossOrigin: "anonymous"
                                }), this.renderCustomStructuredData()]
                            }), (0, g.jsx)(mr.Z, {
                                canonical: u,
                                title: l,
                                description: d,
                                imageUrl: t.cover,
                                type: "game"
                            }), (0, g.jsx)(o.Z, {
                                alternatives: c,
                                children: (0, g.jsx)(nr.Z, {
                                    children: (0, g.jsx)(rr, {
                                        game: t,
                                        related: n,
                                        isGameUnavailable: s
                                    })
                                })
                            })]
                        }, t.slug), !s && (0, g.jsx)(cr, {
                            game: t
                        }), (0, g.jsx)(Tr, {
                            game: t,
                            isGameUnavailable: s
                        }, `gametracking-${t.slug}`), (0, g.jsx)(hr, {
                            game: t
                        }), (0, g.jsx)(Or, {
                            gameId: t.id,
                            gameTechnology: t.technology
                        }), (0, g.jsx)(kr, {
                            gameId: t.id
                        })]
                    })
                }
                renderCustomStructuredData() {
                    const {
                        game: e
                    } = this.props;
                    if (e.customStructuredData) return (0, g.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: e.customStructuredData
                        }
                    })
                }
                touchIcon() {
                    const {
                        game: e
                    } = this.props, {
                        cover: t
                    } = e;
                    if (t) return t
                }
            }
            var Er = (0, gr.Z)((0, sr.Z)("game")((0, fr.Z)(Ir)))
        },
        10134: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/game", function() {
                return r(10912)
            }])
        }
    },
    function(e) {
        e.O(0, [58254, 84341, 37164, 69157, 47638, 49774, 92888, 40179], (function() {
            return t = 10134, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);