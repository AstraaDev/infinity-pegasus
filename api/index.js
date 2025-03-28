var gi = Object.defineProperty
  , vi = Object.defineProperties;
var _i = Object.getOwnPropertyDescriptors;
var _n = Object.getOwnPropertySymbols;
var bi = Object.prototype.hasOwnProperty
  , yi = Object.prototype.propertyIsEnumerable;
var bn = (e, t, n) => t in e ? gi(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Ae = (e, t) => {
    for (var n in t || (t = {}))
        bi.call(t, n) && bn(e, n, t[n]);
    if (_n)
        for (var n of _n(t))
            yi.call(t, n) && bn(e, n, t[n]);
    return e
}
  , Nt = (e, t) => vi(e, _i(t));
const wi = function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy),
        i.crossorigin === "use-credentials" ? o.credentials = "include" : i.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
};
wi();
function K() {}
const Pt = e => e;
function sn(e, t) {
    for (const n in t)
        e[n] = t[n];
    return e
}
function mr(e) {
    return e()
}
function yn() {
    return Object.create(null)
}
function ye(e) {
    e.forEach(mr)
}
function Je(e) {
    return typeof e == "function"
}
function Ce(e, t) {
    return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function"
}
function Ei(e) {
    return Object.keys(e).length === 0
}
function pr(e, ...t) {
    if (e == null)
        return K;
    const n = e.subscribe(...t);
    return n.unsubscribe ? () => n.unsubscribe() : n
}
function Le(e, t, n) {
    e.$$.on_destroy.push(pr(t, n))
}
function Li(e, t, n, r) {
    if (e) {
        const i = gr(e, t, n, r);
        return e[0](i)
    }
}
function gr(e, t, n, r) {
    return e[1] && r ? sn(n.ctx.slice(), e[1](r(t))) : n.ctx
}
function xi(e, t, n, r) {
    if (e[2] && r) {
        const i = e[2](r(n));
        if (t.dirty === void 0)
            return i;
        if (typeof i == "object") {
            const o = []
              , s = Math.max(t.dirty.length, i.length);
            for (let l = 0; l < s; l += 1)
                o[l] = t.dirty[l] | i[l];
            return o
        }
        return t.dirty | i
    }
    return t.dirty
}
function Si(e, t, n, r, i, o) {
    if (i) {
        const s = gr(t, n, r, o);
        e.p(s, i)
    }
}
function Ci(e) {
    if (e.ctx.length > 32) {
        const t = []
          , n = e.ctx.length / 32;
        for (let r = 0; r < n; r++)
            t[r] = -1;
        return t
    }
    return -1
}
const Ai = (e, t) => Object.prototype.hasOwnProperty.call(e, t)
  , vr = typeof window < "u";
let on = vr ? () => window.performance.now() : () => Date.now()
  , ln = vr ? e => requestAnimationFrame(e) : K;
const Ve = new Set;
function _r(e) {
    Ve.forEach(t => {
        t.c(e) || (Ve.delete(t),
        t.f())
    }
    ),
    Ve.size !== 0 && ln(_r)
}
function an(e) {
    let t;
    return Ve.size === 0 && ln(_r),
    {
        promise: new Promise(n => {
            Ve.add(t = {
                c: e,
                f: n
            })
        }
        ),
        abort() {
            Ve.delete(t)
        }
    }
}
function c(e, t) {
    e.appendChild(t)
}
function br(e) {
    if (!e)
        return document;
    const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return t && t.host ? t : e.ownerDocument
}
function ki(e) {
    const t = b("style");
    return Ti(br(e), t),
    t.sheet
}
function Ti(e, t) {
    c(e.head || e, t)
}
function B(e, t, n) {
    e.insertBefore(t, n || null)
}
function H(e) {
    e.parentNode.removeChild(e)
}
function Be(e, t) {
    for (let n = 0; n < e.length; n += 1)
        e[n] && e[n].d(t)
}
function b(e) {
    return document.createElement(e)
}
function Pi(e, t) {
    const n = {};
    for (const r in e)
        Ai(e, r) && t.indexOf(r) === -1 && (n[r] = e[r]);
    return n
}
function A(e) {
    return document.createTextNode(e)
}
function S() {
    return A(" ")
}
function Ht() {
    return A("")
}
function he(e, t, n, r) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n, r)
}
function Hi(e) {
    return function(t) {
        return t.preventDefault(),
        e.call(this, t)
    }
}
function v(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
}
function wn(e, t) {
    const n = Object.getOwnPropertyDescriptors(e.__proto__);
    for (const r in t)
        t[r] == null ? e.removeAttribute(r) : r === "style" ? e.style.cssText = t[r] : r === "__value" ? e.value = e[r] = t[r] : n[r] && n[r].set ? e[r] = t[r] : v(e, r, t[r])
}
function Bi(e) {
    return Array.from(e.childNodes)
}
function O(e, t) {
    t = "" + t,
    e.wholeText !== t && (e.data = t)
}
function te(e, t, n, r) {
    n === null ? e.style.removeProperty(t) : e.style.setProperty(t, n, r ? "important" : "")
}
function ve(e, t, n) {
    e.classList[n ? "add" : "remove"](t)
}
function yr(e, t, n=!1) {
    const r = document.createEvent("CustomEvent");
    return r.initCustomEvent(e, n, !1, t),
    r
}
class Mi {
    constructor() {
        this.e = this.n = null
    }
    c(t) {
        this.h(t)
    }
    m(t, n, r=null) {
        this.e || (this.e = b(n.nodeName),
        this.t = n,
        this.c(t)),
        this.i(r)
    }
    h(t) {
        this.e.innerHTML = t,
        this.n = Array.from(this.e.childNodes)
    }
    i(t) {
        for (let n = 0; n < this.n.length; n += 1)
            B(this.t, this.n[n], t)
    }
    p(t) {
        this.d(),
        this.h(t),
        this.i(this.a)
    }
    d() {
        this.n.forEach(H)
    }
}
const Et = new Map;
let Lt = 0;
function Ii(e) {
    let t = 5381
      , n = e.length;
    for (; n--; )
        t = (t << 5) - t ^ e.charCodeAt(n);
    return t >>> 0
}
function Oi(e, t) {
    const n = {
        stylesheet: ki(t),
        rules: {}
    };
    return Et.set(e, n),
    n
}
function xt(e, t, n, r, i, o, s, l=0) {
    const a = 16.666 / r;
    let u = `{
`;
    for (let _ = 0; _ <= 1; _ += a) {
        const x = t + (n - t) * o(_);
        u += _ * 100 + `%{${s(x, 1 - x)}}
`
    }
    const f = u + `100% {${s(n, 1 - n)}}
}`
      , d = `__svelte_${Ii(f)}_${l}`
      , h = br(e)
      , {stylesheet: m, rules: g} = Et.get(h) || Oi(h, e);
    g[d] || (g[d] = !0,
    m.insertRule(`@keyframes ${d} ${f}`, m.cssRules.length));
    const p = e.style.animation || "";
    return e.style.animation = `${p ? `${p}, ` : ""}${d} ${r}ms linear ${i}ms 1 both`,
    Lt += 1,
    d
}
function St(e, t) {
    const n = (e.style.animation || "").split(", ")
      , r = n.filter(t ? o => o.indexOf(t) < 0 : o => o.indexOf("__svelte") === -1)
      , i = n.length - r.length;
    i && (e.style.animation = r.join(", "),
    Lt -= i,
    Lt || Ni())
}
function Ni() {
    ln( () => {
        Lt || (Et.forEach(e => {
            const {stylesheet: t} = e;
            let n = t.cssRules.length;
            for (; n--; )
                t.deleteRule(n);
            e.rules = {}
        }
        ),
        Et.clear())
    }
    )
}
let st;
function it(e) {
    st = e
}
function wr() {
    if (!st)
        throw new Error("Function called outside component initialization");
    return st
}
function un(e) {
    wr().$$.on_mount.push(e)
}
function Ri() {
    const e = wr();
    return (t, n) => {
        const r = e.$$.callbacks[t];
        if (r) {
            const i = yr(t, n);
            r.slice().forEach(o => {
                o.call(e, i)
            }
            )
        }
    }
}
const nt = []
  , ot = []
  , vt = []
  , En = []
  , Gi = Promise.resolve();
let zt = !1;
function Di() {
    zt || (zt = !0,
    Gi.then(Er))
}
function pe(e) {
    vt.push(e)
}
const Rt = new Set;
let mt = 0;
function Er() {
    const e = st;
    do {
        for (; mt < nt.length; ) {
            const t = nt[mt];
            mt++,
            it(t),
            Ui(t.$$)
        }
        for (it(null),
        nt.length = 0,
        mt = 0; ot.length; )
            ot.pop()();
        for (let t = 0; t < vt.length; t += 1) {
            const n = vt[t];
            Rt.has(n) || (Rt.add(n),
            n())
        }
        vt.length = 0
    } while (nt.length);
    for (; En.length; )
        En.pop()();
    zt = !1,
    Rt.clear(),
    it(e)
}
function Ui(e) {
    if (e.fragment !== null) {
        e.update(),
        ye(e.before_update);
        const t = e.dirty;
        e.dirty = [-1],
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(pe)
    }
}
let et;
function fn() {
    return et || (et = Promise.resolve(),
    et.then( () => {
        et = null
    }
    )),
    et
}
function Re(e, t, n) {
    e.dispatchEvent(yr(`${t ? "intro" : "outro"}${n}`))
}
const _t = new Set;
let Ee;
function ke() {
    Ee = {
        r: 0,
        c: [],
        p: Ee
    }
}
function Te() {
    Ee.r || ye(Ee.c),
    Ee = Ee.p
}
function U(e, t) {
    e && e.i && (_t.delete(e),
    e.i(t))
}
function q(e, t, n, r) {
    if (e && e.o) {
        if (_t.has(e))
            return;
        _t.add(e),
        Ee.c.push( () => {
            _t.delete(e),
            r && (n && e.d(1),
            r())
        }
        ),
        e.o(t)
    }
}
const cn = {
    duration: 0
};
function ji(e, t, n) {
    let r = t(e, n), i = !1, o, s, l = 0;
    function a() {
        o && St(e, o)
    }
    function u() {
        const {delay: d=0, duration: h=300, easing: m=Pt, tick: g=K, css: p} = r || cn;
        p && (o = xt(e, 0, 1, h, d, m, p, l++)),
        g(0, 1);
        const _ = on() + d
          , x = _ + h;
        s && s.abort(),
        i = !0,
        pe( () => Re(e, !0, "start")),
        s = an(w => {
            if (i) {
                if (w >= x)
                    return g(1, 0),
                    Re(e, !0, "end"),
                    a(),
                    i = !1;
                if (w >= _) {
                    const E = m((w - _) / h);
                    g(E, 1 - E)
                }
            }
            return i
        }
        )
    }
    let f = !1;
    return {
        start() {
            f || (f = !0,
            St(e),
            Je(r) ? (r = r(),
            fn().then(u)) : u())
        },
        invalidate() {
            f = !1
        },
        end() {
            i && (a(),
            i = !1)
        }
    }
}
function Fi(e, t, n) {
    let r = t(e, n), i = !0, o;
    const s = Ee;
    s.r += 1;
    function l() {
        const {delay: a=0, duration: u=300, easing: f=Pt, tick: d=K, css: h} = r || cn;
        h && (o = xt(e, 1, 0, u, a, f, h));
        const m = on() + a
          , g = m + u;
        pe( () => Re(e, !1, "start")),
        an(p => {
            if (i) {
                if (p >= g)
                    return d(0, 1),
                    Re(e, !1, "end"),
                    --s.r || ye(s.c),
                    !1;
                if (p >= m) {
                    const _ = f((p - m) / u);
                    d(1 - _, _)
                }
            }
            return i
        }
        )
    }
    return Je(r) ? fn().then( () => {
        r = r(),
        l()
    }
    ) : l(),
    {
        end(a) {
            a && r.tick && r.tick(1, 0),
            i && (o && St(e, o),
            i = !1)
        }
    }
}
function ge(e, t, n, r) {
    let i = t(e, n)
      , o = r ? 0 : 1
      , s = null
      , l = null
      , a = null;
    function u() {
        a && St(e, a)
    }
    function f(h, m) {
        const g = h.b - o;
        return m *= Math.abs(g),
        {
            a: o,
            b: h.b,
            d: g,
            duration: m,
            start: h.start,
            end: h.start + m,
            group: h.group
        }
    }
    function d(h) {
        const {delay: m=0, duration: g=300, easing: p=Pt, tick: _=K, css: x} = i || cn
          , w = {
            start: on() + m,
            b: h
        };
        h || (w.group = Ee,
        Ee.r += 1),
        s || l ? l = w : (x && (u(),
        a = xt(e, o, h, g, m, p, x)),
        h && _(0, 1),
        s = f(w, g),
        pe( () => Re(e, h, "start")),
        an(E => {
            if (l && E > l.start && (s = f(l, g),
            l = null,
            Re(e, s.b, "start"),
            x && (u(),
            a = xt(e, o, s.b, s.duration, 0, p, i.css))),
            s) {
                if (E >= s.end)
                    _(o = s.b, 1 - o),
                    Re(e, s.b, "end"),
                    l || (s.b ? u() : --s.group.r || ye(s.group.c)),
                    s = null;
                else if (E >= s.start) {
                    const y = E - s.start;
                    o = s.a + s.d * p(y / s.duration),
                    _(o, 1 - o)
                }
            }
            return !!(s || l)
        }
        ))
    }
    return {
        run(h) {
            Je(i) ? fn().then( () => {
                i = i(),
                d(h)
            }
            ) : d(h)
        },
        end() {
            u(),
            s = l = null
        }
    }
}
function $i(e, t) {
    q(e, 1, 1, () => {
        t.delete(e.key)
    }
    )
}
function Vi(e, t, n, r, i, o, s, l, a, u, f, d) {
    let h = e.length
      , m = o.length
      , g = h;
    const p = {};
    for (; g--; )
        p[e[g].key] = g;
    const _ = []
      , x = new Map
      , w = new Map;
    for (g = m; g--; ) {
        const P = d(i, o, g)
          , M = n(P);
        let D = s.get(M);
        D ? r && D.p(P, t) : (D = u(M, P),
        D.c()),
        x.set(M, _[g] = D),
        M in p && w.set(M, Math.abs(g - p[M]))
    }
    const E = new Set
      , y = new Set;
    function T(P) {
        U(P, 1),
        P.m(l, f),
        s.set(P.key, P),
        f = P.first,
        m--
    }
    for (; h && m; ) {
        const P = _[m - 1]
          , M = e[h - 1]
          , D = P.key
          , C = M.key;
        P === M ? (f = P.first,
        h--,
        m--) : x.has(C) ? !s.has(D) || E.has(D) ? T(P) : y.has(C) ? h-- : w.get(D) > w.get(C) ? (y.add(D),
        T(P)) : (E.add(C),
        h--) : (a(M, s),
        h--)
    }
    for (; h--; ) {
        const P = e[h];
        x.has(P.key) || a(P, s)
    }
    for (; m; )
        T(_[m - 1]);
    return _
}
function Lr(e, t) {
    const n = {}
      , r = {}
      , i = {
        $$scope: 1
    };
    let o = e.length;
    for (; o--; ) {
        const s = e[o]
          , l = t[o];
        if (l) {
            for (const a in s)
                a in l || (r[a] = 1);
            for (const a in l)
                i[a] || (n[a] = l[a],
                i[a] = 1);
            e[o] = l
        } else
            for (const a in s)
                i[a] = 1
    }
    for (const s in r)
        s in n || (n[s] = void 0);
    return n
}
function Xi(e) {
    return typeof e == "object" && e !== null ? e : {}
}
function xe(e) {
    e && e.c()
}
function _e(e, t, n, r) {
    const {fragment: i, on_mount: o, on_destroy: s, after_update: l} = e.$$;
    i && i.m(t, n),
    r || pe( () => {
        const a = o.map(mr).filter(Je);
        s ? s.push(...a) : ye(a),
        e.$$.on_mount = []
    }
    ),
    l.forEach(pe)
}
function be(e, t) {
    const n = e.$$;
    n.fragment !== null && (ye(n.on_destroy),
    n.fragment && n.fragment.d(t),
    n.on_destroy = n.fragment = null,
    n.ctx = [])
}
function Zi(e, t) {
    e.$$.dirty[0] === -1 && (nt.push(e),
    Di(),
    e.$$.dirty.fill(0)),
    e.$$.dirty[t / 31 | 0] |= 1 << t % 31
}
function Pe(e, t, n, r, i, o, s, l=[-1]) {
    const a = st;
    it(e);
    const u = e.$$ = {
        fragment: null,
        ctx: null,
        props: o,
        update: K,
        not_equal: i,
        bound: yn(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(t.context || (a ? a.$$.context : [])),
        callbacks: yn(),
        dirty: l,
        skip_bound: !1,
        root: t.target || a.$$.root
    };
    s && s(u.root);
    let f = !1;
    if (u.ctx = n ? n(e, t.props || {}, (d, h, ...m) => {
        const g = m.length ? m[0] : h;
        return u.ctx && i(u.ctx[d], u.ctx[d] = g) && (!u.skip_bound && u.bound[d] && u.bound[d](g),
        f && Zi(e, d)),
        h
    }
    ) : [],
    u.update(),
    f = !0,
    ye(u.before_update),
    u.fragment = r ? r(u.ctx) : !1,
    t.target) {
        if (t.hydrate) {
            const d = Bi(t.target);
            u.fragment && u.fragment.l(d),
            d.forEach(H)
        } else
            u.fragment && u.fragment.c();
        t.intro && U(e.$$.fragment),
        _e(e, t.target, t.anchor, t.customElement),
        Er()
    }
    it(a)
}
class He {
    $destroy() {
        be(this, 1),
        this.$destroy = K
    }
    $on(t, n) {
        const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return r.push(n),
        () => {
            const i = r.indexOf(n);
            i !== -1 && r.splice(i, 1)
        }
    }
    $set(t) {
        this.$$set && !Ei(t) && (this.$$.skip_bound = !0,
        this.$$set(t),
        this.$$.skip_bound = !1)
    }
}
const $e = [];
function qi(e, t) {
    return {
        subscribe: Ie(e, t).subscribe
    }
}
function Ie(e, t=K) {
    let n;
    const r = new Set;
    function i(l) {
        if (Ce(e, l) && (e = l,
        n)) {
            const a = !$e.length;
            for (const u of r)
                u[1](),
                $e.push(u, e);
            if (a) {
                for (let u = 0; u < $e.length; u += 2)
                    $e[u][0]($e[u + 1]);
                $e.length = 0
            }
        }
    }
    function o(l) {
        i(l(e))
    }
    function s(l, a=K) {
        const u = [l, a];
        return r.add(u),
        r.size === 1 && (n = t(i) || K),
        l(e),
        () => {
            r.delete(u),
            r.size === 0 && (n(),
            n = null)
        }
    }
    return {
        set: i,
        update: o,
        subscribe: s
    }
}
function Qe(e, t, n) {
    const r = !Array.isArray(e)
      , i = r ? [e] : e
      , o = t.length < 2;
    return qi(n, s => {
        let l = !1;
        const a = [];
        let u = 0
          , f = K;
        const d = () => {
            if (u)
                return;
            f();
            const m = t(r ? a[0] : a, s);
            o ? s(m) : f = Je(m) ? m : K
        }
          , h = i.map( (m, g) => pr(m, p => {
            a[g] = p,
            u &= ~(1 << g),
            l && d()
        }
        , () => {
            u |= 1 << g
        }
        ));
        return l = !0,
        d(),
        function() {
            ye(h),
            f()
        }
    }
    )
}
var zi = function(t) {
    return Wi(t) && !Yi(t)
};
function Wi(e) {
    return !!e && typeof e == "object"
}
function Yi(e) {
    var t = Object.prototype.toString.call(e);
    return t === "[object RegExp]" || t === "[object Date]" || Ki(e)
}
var Ji = typeof Symbol == "function" && Symbol.for
  , Qi = Ji ? Symbol.for("react.element") : 60103;
function Ki(e) {
    return e.$$typeof === Qi
}
function es(e) {
    return Array.isArray(e) ? [] : {}
}
function lt(e, t) {
    return t.clone !== !1 && t.isMergeableObject(e) ? Xe(es(e), e, t) : e
}
function ts(e, t, n) {
    return e.concat(t).map(function(r) {
        return lt(r, n)
    })
}
function ns(e, t) {
    if (!t.customMerge)
        return Xe;
    var n = t.customMerge(e);
    return typeof n == "function" ? n : Xe
}
function rs(e) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
        return e.propertyIsEnumerable(t)
    }) : []
}
function Ln(e) {
    return Object.keys(e).concat(rs(e))
}
function xr(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}
function is(e, t) {
    return xr(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
}
function ss(e, t, n) {
    var r = {};
    return n.isMergeableObject(e) && Ln(e).forEach(function(i) {
        r[i] = lt(e[i], n)
    }),
    Ln(t).forEach(function(i) {
        is(e, i) || (xr(e, i) && n.isMergeableObject(t[i]) ? r[i] = ns(i, n)(e[i], t[i], n) : r[i] = lt(t[i], n))
    }),
    r
}
function Xe(e, t, n) {
    n = n || {},
    n.arrayMerge = n.arrayMerge || ts,
    n.isMergeableObject = n.isMergeableObject || zi,
    n.cloneUnlessOtherwiseSpecified = lt;
    var r = Array.isArray(t)
      , i = Array.isArray(e)
      , o = r === i;
    return o ? r ? n.arrayMerge(e, t, n) : ss(e, t, n) : lt(t, n)
}
Xe.all = function(t, n) {
    if (!Array.isArray(t))
        throw new Error("first argument should be an array");
    return t.reduce(function(r, i) {
        return Xe(r, i, n)
    }, {})
}
;
var os = Xe
  , ls = os
  , Wt = function(e, t) {
    return Wt = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(n, r) {
        n.__proto__ = r
    }
    || function(n, r) {
        for (var i in r)
            Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i])
    }
    ,
    Wt(e, t)
};
function Bt(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    Wt(e, t);
    function n() {
        this.constructor = e
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype,
    new n)
}
var Z = function() {
    return Z = Object.assign || function(t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
            n = arguments[r];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
        }
        return t
    }
    ,
    Z.apply(this, arguments)
};
function Gt(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, i = t.length, o; r < i; r++)
            (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)),
            o[r] = t[r]);
    return e.concat(o || Array.prototype.slice.call(t))
}
var j;
(function(e) {
    e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE",
    e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT",
    e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT",
    e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE",
    e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE",
    e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE",
    e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON",
    e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON",
    e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON",
    e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON",
    e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",
    e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS",
    e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",
    e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",
    e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR",
    e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR",
    e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",
    e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",
    e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR",
    e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR",
    e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR",
    e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE",
    e[e.INVALID_TAG = 23] = "INVALID_TAG",
    e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME",
    e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG",
    e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
}
)(j || (j = {}));
var W;
(function(e) {
    e[e.literal = 0] = "literal",
    e[e.argument = 1] = "argument",
    e[e.number = 2] = "number",
    e[e.date = 3] = "date",
    e[e.time = 4] = "time",
    e[e.select = 5] = "select",
    e[e.plural = 6] = "plural",
    e[e.pound = 7] = "pound",
    e[e.tag = 8] = "tag"
}
)(W || (W = {}));
var Ze;
(function(e) {
    e[e.number = 0] = "number",
    e[e.dateTime = 1] = "dateTime"
}
)(Ze || (Ze = {}));
function xn(e) {
    return e.type === W.literal
}
function as(e) {
    return e.type === W.argument
}
function Sr(e) {
    return e.type === W.number
}
function Cr(e) {
    return e.type === W.date
}
function Ar(e) {
    return e.type === W.time
}
function kr(e) {
    return e.type === W.select
}
function Tr(e) {
    return e.type === W.plural
}
function us(e) {
    return e.type === W.pound
}
function Pr(e) {
    return e.type === W.tag
}
function Hr(e) {
    return !!(e && typeof e == "object" && e.type === Ze.number)
}
function Yt(e) {
    return !!(e && typeof e == "object" && e.type === Ze.dateTime)
}
var Br = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/
  , fs = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function cs(e) {
    var t = {};
    return e.replace(fs, function(n) {
        var r = n.length;
        switch (n[0]) {
        case "G":
            t.era = r === 4 ? "long" : r === 5 ? "narrow" : "short";
            break;
        case "y":
            t.year = r === 2 ? "2-digit" : "numeric";
            break;
        case "Y":
        case "u":
        case "U":
        case "r":
            throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        case "q":
        case "Q":
            throw new RangeError("`q/Q` (quarter) patterns are not supported");
        case "M":
        case "L":
            t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
            break;
        case "w":
        case "W":
            throw new RangeError("`w/W` (week) patterns are not supported");
        case "d":
            t.day = ["numeric", "2-digit"][r - 1];
            break;
        case "D":
        case "F":
        case "g":
            throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
        case "E":
            t.weekday = r === 4 ? "short" : r === 5 ? "narrow" : "short";
            break;
        case "e":
            if (r < 4)
                throw new RangeError("`e..eee` (weekday) patterns are not supported");
            t.weekday = ["short", "long", "narrow", "short"][r - 4];
            break;
        case "c":
            if (r < 4)
                throw new RangeError("`c..ccc` (weekday) patterns are not supported");
            t.weekday = ["short", "long", "narrow", "short"][r - 4];
            break;
        case "a":
            t.hour12 = !0;
            break;
        case "b":
        case "B":
            throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
        case "h":
            t.hourCycle = "h12",
            t.hour = ["numeric", "2-digit"][r - 1];
            break;
        case "H":
            t.hourCycle = "h23",
            t.hour = ["numeric", "2-digit"][r - 1];
            break;
        case "K":
            t.hourCycle = "h11",
            t.hour = ["numeric", "2-digit"][r - 1];
            break;
        case "k":
            t.hourCycle = "h24",
            t.hour = ["numeric", "2-digit"][r - 1];
            break;
        case "j":
        case "J":
        case "C":
            throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
        case "m":
            t.minute = ["numeric", "2-digit"][r - 1];
            break;
        case "s":
            t.second = ["numeric", "2-digit"][r - 1];
            break;
        case "S":
        case "A":
            throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
        case "z":
            t.timeZoneName = r < 4 ? "short" : "long";
            break;
        case "Z":
        case "O":
        case "v":
        case "V":
        case "X":
        case "x":
            throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
        }
        return ""
    }),
    t
}
var hs = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function ds(e) {
    if (e.length === 0)
        throw new Error("Number skeleton cannot be empty");
    for (var t = e.split(hs).filter(function(h) {
        return h.length > 0
    }), n = [], r = 0, i = t; r < i.length; r++) {
        var o = i[r]
          , s = o.split("/");
        if (s.length === 0)
            throw new Error("Invalid number skeleton");
        for (var l = s[0], a = s.slice(1), u = 0, f = a; u < f.length; u++) {
            var d = f[u];
            if (d.length === 0)
                throw new Error("Invalid number skeleton")
        }
        n.push({
            stem: l,
            options: a
        })
    }
    return n
}
function ms(e) {
    return e.replace(/^(.*?)-/, "")
}
var Sn = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g
  , Mr = /^(@+)?(\+|#+)?[rs]?$/g
  , ps = /(\*)(0+)|(#+)(0+)|(0+)/g
  , Ir = /^(0+)$/;
function Cn(e) {
    var t = {};
    return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"),
    e.replace(Mr, function(n, r, i) {
        return typeof i != "string" ? (t.minimumSignificantDigits = r.length,
        t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length,
        t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)),
        ""
    }),
    t
}
function Or(e) {
    switch (e) {
    case "sign-auto":
        return {
            signDisplay: "auto"
        };
    case "sign-accounting":
    case "()":
        return {
            currencySign: "accounting"
        };
    case "sign-always":
    case "+!":
        return {
            signDisplay: "always"
        };
    case "sign-accounting-always":
    case "()!":
        return {
            signDisplay: "always",
            currencySign: "accounting"
        };
    case "sign-except-zero":
    case "+?":
        return {
            signDisplay: "exceptZero"
        };
    case "sign-accounting-except-zero":
    case "()?":
        return {
            signDisplay: "exceptZero",
            currencySign: "accounting"
        };
    case "sign-never":
    case "+_":
        return {
            signDisplay: "never"
        }
    }
}
function gs(e) {
    var t;
    if (e[0] === "E" && e[1] === "E" ? (t = {
        notation: "engineering"
    },
    e = e.slice(2)) : e[0] === "E" && (t = {
        notation: "scientific"
    },
    e = e.slice(1)),
    t) {
        var n = e.slice(0, 2);
        if (n === "+!" ? (t.signDisplay = "always",
        e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero",
        e = e.slice(2)),
        !Ir.test(e))
            throw new Error("Malformed concise eng/scientific notation");
        t.minimumIntegerDigits = e.length
    }
    return t
}
function An(e) {
    var t = {}
      , n = Or(e);
    return n || t
}
function vs(e) {
    for (var t = {}, n = 0, r = e; n < r.length; n++) {
        var i = r[n];
        switch (i.stem) {
        case "percent":
        case "%":
            t.style = "percent";
            continue;
        case "%x100":
            t.style = "percent",
            t.scale = 100;
            continue;
        case "currency":
            t.style = "currency",
            t.currency = i.options[0];
            continue;
        case "group-off":
        case ",_":
            t.useGrouping = !1;
            continue;
        case "precision-integer":
        case ".":
            t.maximumFractionDigits = 0;
            continue;
        case "measure-unit":
        case "unit":
            t.style = "unit",
            t.unit = ms(i.options[0]);
            continue;
        case "compact-short":
        case "K":
            t.notation = "compact",
            t.compactDisplay = "short";
            continue;
        case "compact-long":
        case "KK":
            t.notation = "compact",
            t.compactDisplay = "long";
            continue;
        case "scientific":
            t = Z(Z(Z({}, t), {
                notation: "scientific"
            }), i.options.reduce(function(a, u) {
                return Z(Z({}, a), An(u))
            }, {}));
            continue;
        case "engineering":
            t = Z(Z(Z({}, t), {
                notation: "engineering"
            }), i.options.reduce(function(a, u) {
                return Z(Z({}, a), An(u))
            }, {}));
            continue;
        case "notation-simple":
            t.notation = "standard";
            continue;
        case "unit-width-narrow":
            t.currencyDisplay = "narrowSymbol",
            t.unitDisplay = "narrow";
            continue;
        case "unit-width-short":
            t.currencyDisplay = "code",
            t.unitDisplay = "short";
            continue;
        case "unit-width-full-name":
            t.currencyDisplay = "name",
            t.unitDisplay = "long";
            continue;
        case "unit-width-iso-code":
            t.currencyDisplay = "symbol";
            continue;
        case "scale":
            t.scale = parseFloat(i.options[0]);
            continue;
        case "integer-width":
            if (i.options.length > 1)
                throw new RangeError("integer-width stems only accept a single optional option");
            i.options[0].replace(ps, function(a, u, f, d, h, m) {
                if (u)
                    t.minimumIntegerDigits = f.length;
                else {
                    if (d && h)
                        throw new Error("We currently do not support maximum integer digits");
                    if (m)
                        throw new Error("We currently do not support exact integer digits")
                }
                return ""
            });
            continue
        }
        if (Ir.test(i.stem)) {
            t.minimumIntegerDigits = i.stem.length;
            continue
        }
        if (Sn.test(i.stem)) {
            if (i.options.length > 1)
                throw new RangeError("Fraction-precision stems only accept a single optional option");
            i.stem.replace(Sn, function(a, u, f, d, h, m) {
                return f === "*" ? t.minimumFractionDigits = u.length : d && d[0] === "#" ? t.maximumFractionDigits = d.length : h && m ? (t.minimumFractionDigits = h.length,
                t.maximumFractionDigits = h.length + m.length) : (t.minimumFractionDigits = u.length,
                t.maximumFractionDigits = u.length),
                ""
            });
            var o = i.options[0];
            o === "w" ? t = Z(Z({}, t), {
                trailingZeroDisplay: "stripIfInteger"
            }) : o && (t = Z(Z({}, t), Cn(o)));
            continue
        }
        if (Mr.test(i.stem)) {
            t = Z(Z({}, t), Cn(i.stem));
            continue
        }
        var s = Or(i.stem);
        s && (t = Z(Z({}, t), s));
        var l = gs(i.stem);
        l && (t = Z(Z({}, t), l))
    }
    return t
}
var pt = {
    AX: ["H"],
    BQ: ["H"],
    CP: ["H"],
    CZ: ["H"],
    DK: ["H"],
    FI: ["H"],
    ID: ["H"],
    IS: ["H"],
    ML: ["H"],
    NE: ["H"],
    RU: ["H"],
    SE: ["H"],
    SJ: ["H"],
    SK: ["H"],
    AS: ["h", "H"],
    BT: ["h", "H"],
    DJ: ["h", "H"],
    ER: ["h", "H"],
    GH: ["h", "H"],
    IN: ["h", "H"],
    LS: ["h", "H"],
    PG: ["h", "H"],
    PW: ["h", "H"],
    SO: ["h", "H"],
    TO: ["h", "H"],
    VU: ["h", "H"],
    WS: ["h", "H"],
    "001": ["H", "h"],
    AL: ["h", "H", "hB"],
    TD: ["h", "H", "hB"],
    "ca-ES": ["H", "h", "hB"],
    CF: ["H", "h", "hB"],
    CM: ["H", "h", "hB"],
    "fr-CA": ["H", "h", "hB"],
    "gl-ES": ["H", "h", "hB"],
    "it-CH": ["H", "h", "hB"],
    "it-IT": ["H", "h", "hB"],
    LU: ["H", "h", "hB"],
    NP: ["H", "h", "hB"],
    PF: ["H", "h", "hB"],
    SC: ["H", "h", "hB"],
    SM: ["H", "h", "hB"],
    SN: ["H", "h", "hB"],
    TF: ["H", "h", "hB"],
    VA: ["H", "h", "hB"],
    CY: ["h", "H", "hb", "hB"],
    GR: ["h", "H", "hb", "hB"],
    CO: ["h", "H", "hB", "hb"],
    DO: ["h", "H", "hB", "hb"],
    KP: ["h", "H", "hB", "hb"],
    KR: ["h", "H", "hB", "hb"],
    NA: ["h", "H", "hB", "hb"],
    PA: ["h", "H", "hB", "hb"],
    PR: ["h", "H", "hB", "hb"],
    VE: ["h", "H", "hB", "hb"],
    AC: ["H", "h", "hb", "hB"],
    AI: ["H", "h", "hb", "hB"],
    BW: ["H", "h", "hb", "hB"],
    BZ: ["H", "h", "hb", "hB"],
    CC: ["H", "h", "hb", "hB"],
    CK: ["H", "h", "hb", "hB"],
    CX: ["H", "h", "hb", "hB"],
    DG: ["H", "h", "hb", "hB"],
    FK: ["H", "h", "hb", "hB"],
    GB: ["H", "h", "hb", "hB"],
    GG: ["H", "h", "hb", "hB"],
    GI: ["H", "h", "hb", "hB"],
    IE: ["H", "h", "hb", "hB"],
    IM: ["H", "h", "hb", "hB"],
    IO: ["H", "h", "hb", "hB"],
    JE: ["H", "h", "hb", "hB"],
    LT: ["H", "h", "hb", "hB"],
    MK: ["H", "h", "hb", "hB"],
    MN: ["H", "h", "hb", "hB"],
    MS: ["H", "h", "hb", "hB"],
    NF: ["H", "h", "hb", "hB"],
    NG: ["H", "h", "hb", "hB"],
    NR: ["H", "h", "hb", "hB"],
    NU: ["H", "h", "hb", "hB"],
    PN: ["H", "h", "hb", "hB"],
    SH: ["H", "h", "hb", "hB"],
    SX: ["H", "h", "hb", "hB"],
    TA: ["H", "h", "hb", "hB"],
    ZA: ["H", "h", "hb", "hB"],
    "af-ZA": ["H", "h", "hB", "hb"],
    AR: ["H", "h", "hB", "hb"],
    CL: ["H", "h", "hB", "hb"],
    CR: ["H", "h", "hB", "hb"],
    CU: ["H", "h", "hB", "hb"],
    EA: ["H", "h", "hB", "hb"],
    "es-BO": ["H", "h", "hB", "hb"],
    "es-BR": ["H", "h", "hB", "hb"],
    "es-EC": ["H", "h", "hB", "hb"],
    "es-ES": ["H", "h", "hB", "hb"],
    "es-GQ": ["H", "h", "hB", "hb"],
    "es-PE": ["H", "h", "hB", "hb"],
    GT: ["H", "h", "hB", "hb"],
    HN: ["H", "h", "hB", "hb"],
    IC: ["H", "h", "hB", "hb"],
    KG: ["H", "h", "hB", "hb"],
    KM: ["H", "h", "hB", "hb"],
    LK: ["H", "h", "hB", "hb"],
    MA: ["H", "h", "hB", "hb"],
    MX: ["H", "h", "hB", "hb"],
    NI: ["H", "h", "hB", "hb"],
    PY: ["H", "h", "hB", "hb"],
    SV: ["H", "h", "hB", "hb"],
    UY: ["H", "h", "hB", "hb"],
    JP: ["H", "h", "K"],
    AD: ["H", "hB"],
    AM: ["H", "hB"],
    AO: ["H", "hB"],
    AT: ["H", "hB"],
    AW: ["H", "hB"],
    BE: ["H", "hB"],
    BF: ["H", "hB"],
    BJ: ["H", "hB"],
    BL: ["H", "hB"],
    BR: ["H", "hB"],
    CG: ["H", "hB"],
    CI: ["H", "hB"],
    CV: ["H", "hB"],
    DE: ["H", "hB"],
    EE: ["H", "hB"],
    FR: ["H", "hB"],
    GA: ["H", "hB"],
    GF: ["H", "hB"],
    GN: ["H", "hB"],
    GP: ["H", "hB"],
    GW: ["H", "hB"],
    HR: ["H", "hB"],
    IL: ["H", "hB"],
    IT: ["H", "hB"],
    KZ: ["H", "hB"],
    MC: ["H", "hB"],
    MD: ["H", "hB"],
    MF: ["H", "hB"],
    MQ: ["H", "hB"],
    MZ: ["H", "hB"],
    NC: ["H", "hB"],
    NL: ["H", "hB"],
    PM: ["H", "hB"],
    PT: ["H", "hB"],
    RE: ["H", "hB"],
    RO: ["H", "hB"],
    SI: ["H", "hB"],
    SR: ["H", "hB"],
    ST: ["H", "hB"],
    TG: ["H", "hB"],
    TR: ["H", "hB"],
    WF: ["H", "hB"],
    YT: ["H", "hB"],
    BD: ["h", "hB", "H"],
    PK: ["h", "hB", "H"],
    AZ: ["H", "hB", "h"],
    BA: ["H", "hB", "h"],
    BG: ["H", "hB", "h"],
    CH: ["H", "hB", "h"],
    GE: ["H", "hB", "h"],
    LI: ["H", "hB", "h"],
    ME: ["H", "hB", "h"],
    RS: ["H", "hB", "h"],
    UA: ["H", "hB", "h"],
    UZ: ["H", "hB", "h"],
    XK: ["H", "hB", "h"],
    AG: ["h", "hb", "H", "hB"],
    AU: ["h", "hb", "H", "hB"],
    BB: ["h", "hb", "H", "hB"],
    BM: ["h", "hb", "H", "hB"],
    BS: ["h", "hb", "H", "hB"],
    CA: ["h", "hb", "H", "hB"],
    DM: ["h", "hb", "H", "hB"],
    "en-001": ["h", "hb", "H", "hB"],
    FJ: ["h", "hb", "H", "hB"],
    FM: ["h", "hb", "H", "hB"],
    GD: ["h", "hb", "H", "hB"],
    GM: ["h", "hb", "H", "hB"],
    GU: ["h", "hb", "H", "hB"],
    GY: ["h", "hb", "H", "hB"],
    JM: ["h", "hb", "H", "hB"],
    KI: ["h", "hb", "H", "hB"],
    KN: ["h", "hb", "H", "hB"],
    KY: ["h", "hb", "H", "hB"],
    LC: ["h", "hb", "H", "hB"],
    LR: ["h", "hb", "H", "hB"],
    MH: ["h", "hb", "H", "hB"],
    MP: ["h", "hb", "H", "hB"],
    MW: ["h", "hb", "H", "hB"],
    NZ: ["h", "hb", "H", "hB"],
    SB: ["h", "hb", "H", "hB"],
    SG: ["h", "hb", "H", "hB"],
    SL: ["h", "hb", "H", "hB"],
    SS: ["h", "hb", "H", "hB"],
    SZ: ["h", "hb", "H", "hB"],
    TC: ["h", "hb", "H", "hB"],
    TT: ["h", "hb", "H", "hB"],
    UM: ["h", "hb", "H", "hB"],
    US: ["h", "hb", "H", "hB"],
    VC: ["h", "hb", "H", "hB"],
    VG: ["h", "hb", "H", "hB"],
    VI: ["h", "hb", "H", "hB"],
    ZM: ["h", "hb", "H", "hB"],
    BO: ["H", "hB", "h", "hb"],
    EC: ["H", "hB", "h", "hb"],
    ES: ["H", "hB", "h", "hb"],
    GQ: ["H", "hB", "h", "hb"],
    PE: ["H", "hB", "h", "hb"],
    AE: ["h", "hB", "hb", "H"],
    "ar-001": ["h", "hB", "hb", "H"],
    BH: ["h", "hB", "hb", "H"],
    DZ: ["h", "hB", "hb", "H"],
    EG: ["h", "hB", "hb", "H"],
    EH: ["h", "hB", "hb", "H"],
    HK: ["h", "hB", "hb", "H"],
    IQ: ["h", "hB", "hb", "H"],
    JO: ["h", "hB", "hb", "H"],
    KW: ["h", "hB", "hb", "H"],
    LB: ["h", "hB", "hb", "H"],
    LY: ["h", "hB", "hb", "H"],
    MO: ["h", "hB", "hb", "H"],
    MR: ["h", "hB", "hb", "H"],
    OM: ["h", "hB", "hb", "H"],
    PH: ["h", "hB", "hb", "H"],
    PS: ["h", "hB", "hb", "H"],
    QA: ["h", "hB", "hb", "H"],
    SA: ["h", "hB", "hb", "H"],
    SD: ["h", "hB", "hb", "H"],
    SY: ["h", "hB", "hb", "H"],
    TN: ["h", "hB", "hb", "H"],
    YE: ["h", "hB", "hb", "H"],
    AF: ["H", "hb", "hB", "h"],
    LA: ["H", "hb", "hB", "h"],
    CN: ["H", "hB", "hb", "h"],
    LV: ["H", "hB", "hb", "h"],
    TL: ["H", "hB", "hb", "h"],
    "zu-ZA": ["H", "hB", "hb", "h"],
    CD: ["hB", "H"],
    IR: ["hB", "H"],
    "hi-IN": ["hB", "h", "H"],
    "kn-IN": ["hB", "h", "H"],
    "ml-IN": ["hB", "h", "H"],
    "te-IN": ["hB", "h", "H"],
    KH: ["hB", "h", "H", "hb"],
    "ta-IN": ["hB", "h", "hb", "H"],
    BN: ["hb", "hB", "h", "H"],
    MY: ["hb", "hB", "h", "H"],
    ET: ["hB", "hb", "h", "H"],
    "gu-IN": ["hB", "hb", "h", "H"],
    "mr-IN": ["hB", "hb", "h", "H"],
    "pa-IN": ["hB", "hb", "h", "H"],
    TW: ["hB", "hb", "h", "H"],
    KE: ["hB", "hb", "H", "h"],
    MM: ["hB", "hb", "H", "h"],
    TZ: ["hB", "hb", "H", "h"],
    UG: ["hB", "hb", "H", "h"]
};
function _s(e, t) {
    for (var n = "", r = 0; r < e.length; r++) {
        var i = e.charAt(r);
        if (i === "j") {
            for (var o = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
                o++,
                r++;
            var s = 1 + (o & 1)
              , l = o < 2 ? 1 : 3 + (o >> 1)
              , a = "a"
              , u = bs(t);
            for ((u == "H" || u == "k") && (l = 0); l-- > 0; )
                n += a;
            for (; s-- > 0; )
                n = u + n
        } else
            i === "J" ? n += "H" : n += i
    }
    return n
}
function bs(e) {
    var t = e.hourCycle;
    if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]),
    t)
        switch (t) {
        case "h24":
            return "k";
        case "h23":
            return "H";
        case "h12":
            return "h";
        case "h11":
            return "K";
        default:
            throw new Error("Invalid hourCycle")
        }
    var n = e.language, r;
    n !== "root" && (r = e.maximize().region);
    var i = pt[r || ""] || pt[n || ""] || pt["".concat(n, "-001")] || pt["001"];
    return i[0]
}
var Dt, ys = new RegExp("^".concat(Br.source, "*")), ws = new RegExp("".concat(Br.source, "*$"));
function $(e, t) {
    return {
        start: e,
        end: t
    }
}
var Es = !!String.prototype.startsWith
  , Ls = !!String.fromCodePoint
  , xs = !!Object.fromEntries
  , Ss = !!String.prototype.codePointAt
  , Cs = !!String.prototype.trimStart
  , As = !!String.prototype.trimEnd
  , ks = !!Number.isSafeInteger
  , Ts = ks ? Number.isSafeInteger : function(e) {
    return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
}
  , Jt = !0;
try {
    var Ps = Rr("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
    Jt = ((Dt = Ps.exec("a")) === null || Dt === void 0 ? void 0 : Dt[0]) === "a"
} catch {
    Jt = !1
}
var kn = Es ? function(t, n, r) {
    return t.startsWith(n, r)
}
: function(t, n, r) {
    return t.slice(r, r + n.length) === n
}
  , Qt = Ls ? String.fromCodePoint : function() {
    for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
    for (var r = "", i = t.length, o = 0, s; i > o; ) {
        if (s = t[o++],
        s > 1114111)
            throw RangeError(s + " is not a valid code point");
        r += s < 65536 ? String.fromCharCode(s) : String.fromCharCode(((s -= 65536) >> 10) + 55296, s % 1024 + 56320)
    }
    return r
}
  , Tn = xs ? Object.fromEntries : function(t) {
    for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var o = i[r]
          , s = o[0]
          , l = o[1];
        n[s] = l
    }
    return n
}
  , Nr = Ss ? function(t, n) {
    return t.codePointAt(n)
}
: function(t, n) {
    var r = t.length;
    if (!(n < 0 || n >= r)) {
        var i = t.charCodeAt(n), o;
        return i < 55296 || i > 56319 || n + 1 === r || (o = t.charCodeAt(n + 1)) < 56320 || o > 57343 ? i : (i - 55296 << 10) + (o - 56320) + 65536
    }
}
  , Hs = Cs ? function(t) {
    return t.trimStart()
}
: function(t) {
    return t.replace(ys, "")
}
  , Bs = As ? function(t) {
    return t.trimEnd()
}
: function(t) {
    return t.replace(ws, "")
}
;
function Rr(e, t) {
    return new RegExp(e,t)
}
var Kt;
if (Jt) {
    var Pn = Rr("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
    Kt = function(t, n) {
        var r;
        Pn.lastIndex = n;
        var i = Pn.exec(t);
        return (r = i[1]) !== null && r !== void 0 ? r : ""
    }
} else
    Kt = function(t, n) {
        for (var r = []; ; ) {
            var i = Nr(t, n);
            if (i === void 0 || Gr(i) || Ns(i))
                break;
            r.push(i),
            n += i >= 65536 ? 2 : 1
        }
        return Qt.apply(void 0, r)
    }
    ;
var Ms = function() {
    function e(t, n) {
        n === void 0 && (n = {}),
        this.message = t,
        this.position = {
            offset: 0,
            line: 1,
            column: 1
        },
        this.ignoreTag = !!n.ignoreTag,
        this.locale = n.locale,
        this.requiresOtherClause = !!n.requiresOtherClause,
        this.shouldParseSkeletons = !!n.shouldParseSkeletons
    }
    return e.prototype.parse = function() {
        if (this.offset() !== 0)
            throw Error("parser can only be used once");
        return this.parseMessage(0, "", !1)
    }
    ,
    e.prototype.parseMessage = function(t, n, r) {
        for (var i = []; !this.isEOF(); ) {
            var o = this.char();
            if (o === 123) {
                var s = this.parseArgument(t, r);
                if (s.err)
                    return s;
                i.push(s.val)
            } else {
                if (o === 125 && t > 0)
                    break;
                if (o === 35 && (n === "plural" || n === "selectordinal")) {
                    var l = this.clonePosition();
                    this.bump(),
                    i.push({
                        type: W.pound,
                        location: $(l, this.clonePosition())
                    })
                } else if (o === 60 && !this.ignoreTag && this.peek() === 47) {
                    if (r)
                        break;
                    return this.error(j.UNMATCHED_CLOSING_TAG, $(this.clonePosition(), this.clonePosition()))
                } else if (o === 60 && !this.ignoreTag && en(this.peek() || 0)) {
                    var s = this.parseTag(t, n);
                    if (s.err)
                        return s;
                    i.push(s.val)
                } else {
                    var s = this.parseLiteral(t, n);
                    if (s.err)
                        return s;
                    i.push(s.val)
                }
            }
        }
        return {
            val: i,
            err: null
        }
    }
    ,
    e.prototype.parseTag = function(t, n) {
        var r = this.clonePosition();
        this.bump();
        var i = this.parseTagName();
        if (this.bumpSpace(),
        this.bumpIf("/>"))
            return {
                val: {
                    type: W.literal,
                    value: "<".concat(i, "/>"),
                    location: $(r, this.clonePosition())
                },
                err: null
            };
        if (this.bumpIf(">")) {
            var o = this.parseMessage(t + 1, n, !0);
            if (o.err)
                return o;
            var s = o.val
              , l = this.clonePosition();
            if (this.bumpIf("</")) {
                if (this.isEOF() || !en(this.char()))
                    return this.error(j.INVALID_TAG, $(l, this.clonePosition()));
                var a = this.clonePosition()
                  , u = this.parseTagName();
                return i !== u ? this.error(j.UNMATCHED_CLOSING_TAG, $(a, this.clonePosition())) : (this.bumpSpace(),
                this.bumpIf(">") ? {
                    val: {
                        type: W.tag,
                        value: i,
                        children: s,
                        location: $(r, this.clonePosition())
                    },
                    err: null
                } : this.error(j.INVALID_TAG, $(l, this.clonePosition())))
            } else
                return this.error(j.UNCLOSED_TAG, $(r, this.clonePosition()))
        } else
            return this.error(j.INVALID_TAG, $(r, this.clonePosition()))
    }
    ,
    e.prototype.parseTagName = function() {
        var t = this.offset();
        for (this.bump(); !this.isEOF() && Os(this.char()); )
            this.bump();
        return this.message.slice(t, this.offset())
    }
    ,
    e.prototype.parseLiteral = function(t, n) {
        for (var r = this.clonePosition(), i = ""; ; ) {
            var o = this.tryParseQuote(n);
            if (o) {
                i += o;
                continue
            }
            var s = this.tryParseUnquoted(t, n);
            if (s) {
                i += s;
                continue
            }
            var l = this.tryParseLeftAngleBracket();
            if (l) {
                i += l;
                continue
            }
            break
        }
        var a = $(r, this.clonePosition());
        return {
            val: {
                type: W.literal,
                value: i,
                location: a
            },
            err: null
        }
    }
    ,
    e.prototype.tryParseLeftAngleBracket = function() {
        return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !Is(this.peek() || 0)) ? (this.bump(),
        "<") : null
    }
    ,
    e.prototype.tryParseQuote = function(t) {
        if (this.isEOF() || this.char() !== 39)
            return null;
        switch (this.peek()) {
        case 39:
            return this.bump(),
            this.bump(),
            "'";
        case 123:
        case 60:
        case 62:
        case 125:
            break;
        case 35:
            if (t === "plural" || t === "selectordinal")
                break;
            return null;
        default:
            return null
        }
        this.bump();
        var n = [this.char()];
        for (this.bump(); !this.isEOF(); ) {
            var r = this.char();
            if (r === 39)
                if (this.peek() === 39)
                    n.push(39),
                    this.bump();
                else {
                    this.bump();
                    break
                }
            else
                n.push(r);
            this.bump()
        }
        return Qt.apply(void 0, n)
    }
    ,
    e.prototype.tryParseUnquoted = function(t, n) {
        if (this.isEOF())
            return null;
        var r = this.char();
        return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(),
        Qt(r))
    }
    ,
    e.prototype.parseArgument = function(t, n) {
        var r = this.clonePosition();
        if (this.bump(),
        this.bumpSpace(),
        this.isEOF())
            return this.error(j.EXPECT_ARGUMENT_CLOSING_BRACE, $(r, this.clonePosition()));
        if (this.char() === 125)
            return this.bump(),
            this.error(j.EMPTY_ARGUMENT, $(r, this.clonePosition()));
        var i = this.parseIdentifierIfPossible().value;
        if (!i)
            return this.error(j.MALFORMED_ARGUMENT, $(r, this.clonePosition()));
        if (this.bumpSpace(),
        this.isEOF())
            return this.error(j.EXPECT_ARGUMENT_CLOSING_BRACE, $(r, this.clonePosition()));
        switch (this.char()) {
        case 125:
            return this.bump(),
            {
                val: {
                    type: W.argument,
                    value: i,
                    location: $(r, this.clonePosition())
                },
                err: null
            };
        case 44:
            return this.bump(),
            this.bumpSpace(),
            this.isEOF() ? this.error(j.EXPECT_ARGUMENT_CLOSING_BRACE, $(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
            return this.error(j.MALFORMED_ARGUMENT, $(r, this.clonePosition()))
        }
    }
    ,
    e.prototype.parseIdentifierIfPossible = function() {
        var t = this.clonePosition()
          , n = this.offset()
          , r = Kt(this.message, n)
          , i = n + r.length;
        this.bumpTo(i);
        var o = this.clonePosition()
          , s = $(t, o);
        return {
            value: r,
            location: s
        }
    }
    ,
    e.prototype.parseArgumentOptions = function(t, n, r, i) {
        var o, s = this.clonePosition(), l = this.parseIdentifierIfPossible().value, a = this.clonePosition();
        switch (l) {
        case "":
            return this.error(j.EXPECT_ARGUMENT_TYPE, $(s, a));
        case "number":
        case "date":
        case "time":
            {
                this.bumpSpace();
                var u = null;
                if (this.bumpIf(",")) {
                    this.bumpSpace();
                    var f = this.clonePosition()
                      , d = this.parseSimpleArgStyleIfPossible();
                    if (d.err)
                        return d;
                    var h = Bs(d.val);
                    if (h.length === 0)
                        return this.error(j.EXPECT_ARGUMENT_STYLE, $(this.clonePosition(), this.clonePosition()));
                    var m = $(f, this.clonePosition());
                    u = {
                        style: h,
                        styleLocation: m
                    }
                }
                var g = this.tryParseArgumentClose(i);
                if (g.err)
                    return g;
                var p = $(i, this.clonePosition());
                if (u && kn(u == null ? void 0 : u.style, "::", 0)) {
                    var _ = Hs(u.style.slice(2));
                    if (l === "number") {
                        var d = this.parseNumberSkeletonFromString(_, u.styleLocation);
                        return d.err ? d : {
                            val: {
                                type: W.number,
                                value: r,
                                location: p,
                                style: d.val
                            },
                            err: null
                        }
                    } else {
                        if (_.length === 0)
                            return this.error(j.EXPECT_DATE_TIME_SKELETON, p);
                        var x = _;
                        this.locale && (x = _s(_, this.locale));
                        var h = {
                            type: Ze.dateTime,
                            pattern: x,
                            location: u.styleLocation,
                            parsedOptions: this.shouldParseSkeletons ? cs(x) : {}
                        }
                          , w = l === "date" ? W.date : W.time;
                        return {
                            val: {
                                type: w,
                                value: r,
                                location: p,
                                style: h
                            },
                            err: null
                        }
                    }
                }
                return {
                    val: {
                        type: l === "number" ? W.number : l === "date" ? W.date : W.time,
                        value: r,
                        location: p,
                        style: (o = u == null ? void 0 : u.style) !== null && o !== void 0 ? o : null
                    },
                    err: null
                }
            }
        case "plural":
        case "selectordinal":
        case "select":
            {
                var E = this.clonePosition();
                if (this.bumpSpace(),
                !this.bumpIf(","))
                    return this.error(j.EXPECT_SELECT_ARGUMENT_OPTIONS, $(E, Z({}, E)));
                this.bumpSpace();
                var y = this.parseIdentifierIfPossible()
                  , T = 0;
                if (l !== "select" && y.value === "offset") {
                    if (!this.bumpIf(":"))
                        return this.error(j.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, $(this.clonePosition(), this.clonePosition()));
                    this.bumpSpace();
                    var d = this.tryParseDecimalInteger(j.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, j.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                    if (d.err)
                        return d;
                    this.bumpSpace(),
                    y = this.parseIdentifierIfPossible(),
                    T = d.val
                }
                var P = this.tryParsePluralOrSelectOptions(t, l, n, y);
                if (P.err)
                    return P;
                var g = this.tryParseArgumentClose(i);
                if (g.err)
                    return g;
                var M = $(i, this.clonePosition());
                return l === "select" ? {
                    val: {
                        type: W.select,
                        value: r,
                        options: Tn(P.val),
                        location: M
                    },
                    err: null
                } : {
                    val: {
                        type: W.plural,
                        value: r,
                        options: Tn(P.val),
                        offset: T,
                        pluralType: l === "plural" ? "cardinal" : "ordinal",
                        location: M
                    },
                    err: null
                }
            }
        default:
            return this.error(j.INVALID_ARGUMENT_TYPE, $(s, a))
        }
    }
    ,
    e.prototype.tryParseArgumentClose = function(t) {
        return this.isEOF() || this.char() !== 125 ? this.error(j.EXPECT_ARGUMENT_CLOSING_BRACE, $(t, this.clonePosition())) : (this.bump(),
        {
            val: !0,
            err: null
        })
    }
    ,
    e.prototype.parseSimpleArgStyleIfPossible = function() {
        for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
            var r = this.char();
            switch (r) {
            case 39:
                {
                    this.bump();
                    var i = this.clonePosition();
                    if (!this.bumpUntil("'"))
                        return this.error(j.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, $(i, this.clonePosition()));
                    this.bump();
                    break
                }
            case 123:
                {
                    t += 1,
                    this.bump();
                    break
                }
            case 125:
                {
                    if (t > 0)
                        t -= 1;
                    else
                        return {
                            val: this.message.slice(n.offset, this.offset()),
                            err: null
                        };
                    break
                }
            default:
                this.bump();
                break
            }
        }
        return {
            val: this.message.slice(n.offset, this.offset()),
            err: null
        }
    }
    ,
    e.prototype.parseNumberSkeletonFromString = function(t, n) {
        var r = [];
        try {
            r = ds(t)
        } catch {
            return this.error(j.INVALID_NUMBER_SKELETON, n)
        }
        return {
            val: {
                type: Ze.number,
                tokens: r,
                location: n,
                parsedOptions: this.shouldParseSkeletons ? vs(r) : {}
            },
            err: null
        }
    }
    ,
    e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
        for (var o, s = !1, l = [], a = new Set, u = i.value, f = i.location; ; ) {
            if (u.length === 0) {
                var d = this.clonePosition();
                if (n !== "select" && this.bumpIf("=")) {
                    var h = this.tryParseDecimalInteger(j.EXPECT_PLURAL_ARGUMENT_SELECTOR, j.INVALID_PLURAL_ARGUMENT_SELECTOR);
                    if (h.err)
                        return h;
                    f = $(d, this.clonePosition()),
                    u = this.message.slice(d.offset, this.offset())
                } else
                    break
            }
            if (a.has(u))
                return this.error(n === "select" ? j.DUPLICATE_SELECT_ARGUMENT_SELECTOR : j.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, f);
            u === "other" && (s = !0),
            this.bumpSpace();
            var m = this.clonePosition();
            if (!this.bumpIf("{"))
                return this.error(n === "select" ? j.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : j.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, $(this.clonePosition(), this.clonePosition()));
            var g = this.parseMessage(t + 1, n, r);
            if (g.err)
                return g;
            var p = this.tryParseArgumentClose(m);
            if (p.err)
                return p;
            l.push([u, {
                value: g.val,
                location: $(m, this.clonePosition())
            }]),
            a.add(u),
            this.bumpSpace(),
            o = this.parseIdentifierIfPossible(),
            u = o.value,
            f = o.location
        }
        return l.length === 0 ? this.error(n === "select" ? j.EXPECT_SELECT_ARGUMENT_SELECTOR : j.EXPECT_PLURAL_ARGUMENT_SELECTOR, $(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(j.MISSING_OTHER_CLAUSE, $(this.clonePosition(), this.clonePosition())) : {
            val: l,
            err: null
        }
    }
    ,
    e.prototype.tryParseDecimalInteger = function(t, n) {
        var r = 1
          , i = this.clonePosition();
        this.bumpIf("+") || this.bumpIf("-") && (r = -1);
        for (var o = !1, s = 0; !this.isEOF(); ) {
            var l = this.char();
            if (l >= 48 && l <= 57)
                o = !0,
                s = s * 10 + (l - 48),
                this.bump();
            else
                break
        }
        var a = $(i, this.clonePosition());
        return o ? (s *= r,
        Ts(s) ? {
            val: s,
            err: null
        } : this.error(n, a)) : this.error(t, a)
    }
    ,
    e.prototype.offset = function() {
        return this.position.offset
    }
    ,
    e.prototype.isEOF = function() {
        return this.offset() === this.message.length
    }
    ,
    e.prototype.clonePosition = function() {
        return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
        }
    }
    ,
    e.prototype.char = function() {
        var t = this.position.offset;
        if (t >= this.message.length)
            throw Error("out of bound");
        var n = Nr(this.message, t);
        if (n === void 0)
            throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        return n
    }
    ,
    e.prototype.error = function(t, n) {
        return {
            val: null,
            err: {
                kind: t,
                message: this.message,
                location: n
            }
        }
    }
    ,
    e.prototype.bump = function() {
        if (!this.isEOF()) {
            var t = this.char();
            t === 10 ? (this.position.line += 1,
            this.position.column = 1,
            this.position.offset += 1) : (this.position.column += 1,
            this.position.offset += t < 65536 ? 1 : 2)
        }
    }
    ,
    e.prototype.bumpIf = function(t) {
        if (kn(this.message, t, this.offset())) {
            for (var n = 0; n < t.length; n++)
                this.bump();
            return !0
        }
        return !1
    }
    ,
    e.prototype.bumpUntil = function(t) {
        var n = this.offset()
          , r = this.message.indexOf(t, n);
        return r >= 0 ? (this.bumpTo(r),
        !0) : (this.bumpTo(this.message.length),
        !1)
    }
    ,
    e.prototype.bumpTo = function(t) {
        if (this.offset() > t)
            throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
        for (t = Math.min(t, this.message.length); ; ) {
            var n = this.offset();
            if (n === t)
                break;
            if (n > t)
                throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(),
            this.isEOF())
                break
        }
    }
    ,
    e.prototype.bumpSpace = function() {
        for (; !this.isEOF() && Gr(this.char()); )
            this.bump()
    }
    ,
    e.prototype.peek = function() {
        if (this.isEOF())
            return null;
        var t = this.char()
          , n = this.offset()
          , r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
        return r ?? null
    }
    ,
    e
}();
function en(e) {
    return e >= 97 && e <= 122 || e >= 65 && e <= 90
}
function Is(e) {
    return en(e) || e === 47
}
function Os(e) {
    return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
}
function Gr(e) {
    return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233
}
function Ns(e) {
    return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094
}
function tn(e) {
    e.forEach(function(t) {
        if (delete t.location,
        kr(t) || Tr(t))
            for (var n in t.options)
                delete t.options[n].location,
                tn(t.options[n].value);
        else
            Sr(t) && Hr(t.style) || (Cr(t) || Ar(t)) && Yt(t.style) ? delete t.style.location : Pr(t) && tn(t.children)
    })
}
function Rs(e, t) {
    t === void 0 && (t = {}),
    t = Z({
        shouldParseSkeletons: !0,
        requiresOtherClause: !0
    }, t);
    var n = new Ms(e,t).parse();
    if (n.err) {
        var r = SyntaxError(j[n.err.kind]);
        throw r.location = n.err.location,
        r.originalMessage = n.err.message,
        r
    }
    return t != null && t.captureLocation || tn(n.val),
    n.val
}
function Ut(e, t) {
    var n = t && t.cache ? t.cache : $s
      , r = t && t.serializer ? t.serializer : Fs
      , i = t && t.strategy ? t.strategy : Ds;
    return i(e, {
        cache: n,
        serializer: r
    })
}
function Gs(e) {
    return e == null || typeof e == "number" || typeof e == "boolean"
}
function Dr(e, t, n, r) {
    var i = Gs(r) ? r : n(r)
      , o = t.get(i);
    return typeof o > "u" && (o = e.call(this, r),
    t.set(i, o)),
    o
}
function Ur(e, t, n) {
    var r = Array.prototype.slice.call(arguments, 3)
      , i = n(r)
      , o = t.get(i);
    return typeof o > "u" && (o = e.apply(this, r),
    t.set(i, o)),
    o
}
function hn(e, t, n, r, i) {
    return n.bind(t, e, r, i)
}
function Ds(e, t) {
    var n = e.length === 1 ? Dr : Ur;
    return hn(e, this, n, t.cache.create(), t.serializer)
}
function Us(e, t) {
    return hn(e, this, Ur, t.cache.create(), t.serializer)
}
function js(e, t) {
    return hn(e, this, Dr, t.cache.create(), t.serializer)
}
var Fs = function() {
    return JSON.stringify(arguments)
};
function dn() {
    this.cache = Object.create(null)
}
dn.prototype.get = function(e) {
    return this.cache[e]
}
;
dn.prototype.set = function(e, t) {
    this.cache[e] = t
}
;
var $s = {
    create: function() {
        return new dn
    }
}, jt = {
    variadic: Us,
    monadic: js
}, qe;
(function(e) {
    e.MISSING_VALUE = "MISSING_VALUE",
    e.INVALID_VALUE = "INVALID_VALUE",
    e.MISSING_INTL_API = "MISSING_INTL_API"
}
)(qe || (qe = {}));
var Mt = function(e) {
    Bt(t, e);
    function t(n, r, i) {
        var o = e.call(this, n) || this;
        return o.code = r,
        o.originalMessage = i,
        o
    }
    return t.prototype.toString = function() {
        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
    }
    ,
    t
}(Error), Hn = function(e) {
    Bt(t, e);
    function t(n, r, i, o) {
        return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), qe.INVALID_VALUE, o) || this
    }
    return t
}(Mt), Vs = function(e) {
    Bt(t, e);
    function t(n, r, i) {
        return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), qe.INVALID_VALUE, i) || this
    }
    return t
}(Mt), Xs = function(e) {
    Bt(t, e);
    function t(n, r) {
        return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), qe.MISSING_VALUE, r) || this
    }
    return t
}(Mt), re;
(function(e) {
    e[e.literal = 0] = "literal",
    e[e.object = 1] = "object"
}
)(re || (re = {}));
function Zs(e) {
    return e.length < 2 ? e : e.reduce(function(t, n) {
        var r = t[t.length - 1];
        return !r || r.type !== re.literal || n.type !== re.literal ? t.push(n) : r.value += n.value,
        t
    }, [])
}
function qs(e) {
    return typeof e == "function"
}
function bt(e, t, n, r, i, o, s) {
    if (e.length === 1 && xn(e[0]))
        return [{
            type: re.literal,
            value: e[0].value
        }];
    for (var l = [], a = 0, u = e; a < u.length; a++) {
        var f = u[a];
        if (xn(f)) {
            l.push({
                type: re.literal,
                value: f.value
            });
            continue
        }
        if (us(f)) {
            typeof o == "number" && l.push({
                type: re.literal,
                value: n.getNumberFormat(t).format(o)
            });
            continue
        }
        var d = f.value;
        if (!(i && d in i))
            throw new Xs(d,s);
        var h = i[d];
        if (as(f)) {
            (!h || typeof h == "string" || typeof h == "number") && (h = typeof h == "string" || typeof h == "number" ? String(h) : ""),
            l.push({
                type: typeof h == "string" ? re.literal : re.object,
                value: h
            });
            continue
        }
        if (Cr(f)) {
            var m = typeof f.style == "string" ? r.date[f.style] : Yt(f.style) ? f.style.parsedOptions : void 0;
            l.push({
                type: re.literal,
                value: n.getDateTimeFormat(t, m).format(h)
            });
            continue
        }
        if (Ar(f)) {
            var m = typeof f.style == "string" ? r.time[f.style] : Yt(f.style) ? f.style.parsedOptions : r.time.medium;
            l.push({
                type: re.literal,
                value: n.getDateTimeFormat(t, m).format(h)
            });
            continue
        }
        if (Sr(f)) {
            var m = typeof f.style == "string" ? r.number[f.style] : Hr(f.style) ? f.style.parsedOptions : void 0;
            m && m.scale && (h = h * (m.scale || 1)),
            l.push({
                type: re.literal,
                value: n.getNumberFormat(t, m).format(h)
            });
            continue
        }
        if (Pr(f)) {
            var g = f.children
              , p = f.value
              , _ = i[p];
            if (!qs(_))
                throw new Vs(p,"function",s);
            var x = bt(g, t, n, r, i, o)
              , w = _(x.map(function(T) {
                return T.value
            }));
            Array.isArray(w) || (w = [w]),
            l.push.apply(l, w.map(function(T) {
                return {
                    type: typeof T == "string" ? re.literal : re.object,
                    value: T
                }
            }))
        }
        if (kr(f)) {
            var E = f.options[h] || f.options.other;
            if (!E)
                throw new Hn(f.value,h,Object.keys(f.options),s);
            l.push.apply(l, bt(E.value, t, n, r, i));
            continue
        }
        if (Tr(f)) {
            var E = f.options["=".concat(h)];
            if (!E) {
                if (!Intl.PluralRules)
                    throw new Mt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,qe.MISSING_INTL_API,s);
                var y = n.getPluralRules(t, {
                    type: f.pluralType
                }).select(h - (f.offset || 0));
                E = f.options[y] || f.options.other
            }
            if (!E)
                throw new Hn(f.value,h,Object.keys(f.options),s);
            l.push.apply(l, bt(E.value, t, n, r, i, h - (f.offset || 0)));
            continue
        }
    }
    return Zs(l)
}
function zs(e, t) {
    return t ? Z(Z(Z({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
        return n[r] = Z(Z({}, e[r]), t[r] || {}),
        n
    }, {})) : e
}
function Ws(e, t) {
    return t ? Object.keys(e).reduce(function(n, r) {
        return n[r] = zs(e[r], t[r]),
        n
    }, Z({}, e)) : e
}
function Ft(e) {
    return {
        create: function() {
            return {
                get: function(t) {
                    return e[t]
                },
                set: function(t, n) {
                    e[t] = n
                }
            }
        }
    }
}
function Ys(e) {
    return e === void 0 && (e = {
        number: {},
        dateTime: {},
        pluralRules: {}
    }),
    {
        getNumberFormat: Ut(function() {
            for (var t, n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
            return new ((t = Intl.NumberFormat).bind.apply(t, Gt([void 0], n, !1)))
        }, {
            cache: Ft(e.number),
            strategy: jt.variadic
        }),
        getDateTimeFormat: Ut(function() {
            for (var t, n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
            return new ((t = Intl.DateTimeFormat).bind.apply(t, Gt([void 0], n, !1)))
        }, {
            cache: Ft(e.dateTime),
            strategy: jt.variadic
        }),
        getPluralRules: Ut(function() {
            for (var t, n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
            return new ((t = Intl.PluralRules).bind.apply(t, Gt([void 0], n, !1)))
        }, {
            cache: Ft(e.pluralRules),
            strategy: jt.variadic
        })
    }
}
var Js = function() {
    function e(t, n, r, i) {
        var o = this;
        if (n === void 0 && (n = e.defaultLocale),
        this.formatterCache = {
            number: {},
            dateTime: {},
            pluralRules: {}
        },
        this.format = function(s) {
            var l = o.formatToParts(s);
            if (l.length === 1)
                return l[0].value;
            var a = l.reduce(function(u, f) {
                return !u.length || f.type !== re.literal || typeof u[u.length - 1] != "string" ? u.push(f.value) : u[u.length - 1] += f.value,
                u
            }, []);
            return a.length <= 1 ? a[0] || "" : a
        }
        ,
        this.formatToParts = function(s) {
            return bt(o.ast, o.locales, o.formatters, o.formats, s, void 0, o.message)
        }
        ,
        this.resolvedOptions = function() {
            return {
                locale: o.resolvedLocale.toString()
            }
        }
        ,
        this.getAst = function() {
            return o.ast
        }
        ,
        this.locales = n,
        this.resolvedLocale = e.resolveLocale(n),
        typeof t == "string") {
            if (this.message = t,
            !e.__parse)
                throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            this.ast = e.__parse(t, {
                ignoreTag: i == null ? void 0 : i.ignoreTag,
                locale: this.resolvedLocale
            })
        } else
            this.ast = t;
        if (!Array.isArray(this.ast))
            throw new TypeError("A message must be provided as a String or AST.");
        this.formats = Ws(e.formats, r),
        this.formatters = i && i.formatters || Ys(this.formatterCache)
    }
    return Object.defineProperty(e, "defaultLocale", {
        get: function() {
            return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale),
            e.memoizedDefaultLocale
        },
        enumerable: !1,
        configurable: !0
    }),
    e.memoizedDefaultLocale = null,
    e.resolveLocale = function(t) {
        var n = Intl.NumberFormat.supportedLocalesOf(t);
        return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof t == "string" ? t : t[0])
    }
    ,
    e.__parse = Rs,
    e.formats = {
        number: {
            integer: {
                maximumFractionDigits: 0
            },
            currency: {
                style: "currency"
            },
            percent: {
                style: "percent"
            }
        },
        date: {
            short: {
                month: "numeric",
                day: "numeric",
                year: "2-digit"
            },
            medium: {
                month: "short",
                day: "numeric",
                year: "numeric"
            },
            long: {
                month: "long",
                day: "numeric",
                year: "numeric"
            },
            full: {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric"
            }
        },
        time: {
            short: {
                hour: "numeric",
                minute: "numeric"
            },
            medium: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
            },
            long: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short"
            },
            full: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short"
            }
        }
    },
    e
}()
  , Qs = Js;
const Me = {}
  , Ks = (e, t, n) => n && (t in Me || (Me[t] = {}),
e in Me[t] || (Me[t][e] = n),
n)
  , jr = (e, t) => {
    if (t == null)
        return;
    if (t in Me && e in Me[t])
        return Me[t][e];
    const n = ct(t);
    for (let r = 0; r < n.length; r++) {
        const i = eo(n[r], e);
        if (i)
            return Ks(e, t, i)
    }
}
;
let mn;
const ft = Ie({});
function Fr(e) {
    return e in mn
}
function eo(e, t) {
    if (!Fr(e))
        return null;
    const n = function(r) {
        return mn[r] || null
    }(e);
    return function(r, i) {
        if (i == null)
            return;
        if (i in r)
            return r[i];
        const o = i.split(".");
        let s = r;
        for (let l = 0; l < o.length; l++)
            if (typeof s == "object") {
                if (l > 0) {
                    const a = o.slice(l, o.length).join(".");
                    if (a in s) {
                        s = s[a];
                        break
                    }
                }
                s = s[o[l]]
            } else
                s = void 0;
        return s
    }(n, t)
}
function pn(e, ...t) {
    delete Me[e],
    ft.update(n => (n[e] = ls.all([n[e] || {}, ...t]),
    n))
}
Qe([ft], ([e]) => Object.keys(e));
ft.subscribe(e => mn = e);
const yt = {};
function $r(e) {
    return yt[e]
}
function Ct(e) {
    return e != null && ct(e).some(t => {
        var n;
        return (n = $r(t)) === null || n === void 0 ? void 0 : n.size
    }
    )
}
function to(e, t) {
    return Promise.all(t.map(r => (function(i, o) {
        yt[i].delete(o),
        yt[i].size === 0 && delete yt[i]
    }(e, r),
    r().then(i => i.default || i)))).then(r => pn(e, ...r))
}
const tt = {};
function Vr(e) {
    if (!Ct(e))
        return e in tt ? tt[e] : Promise.resolve();
    const t = function(n) {
        return ct(n).map(r => {
            const i = $r(r);
            return [r, i ? [...i] : []]
        }
        ).filter( ([,r]) => r.length > 0)
    }(e);
    return tt[e] = Promise.all(t.map( ([n,r]) => to(n, r))).then( () => {
        if (Ct(e))
            return Vr(e);
        delete tt[e]
    }
    ),
    tt[e]
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Ge(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
    }
    return n
}
function no({locale: e, id: t}) {
    console.warn(`[svelte-i18n] The message "${t}" was not found in "${ct(e).join('", "')}".${Ct(Oe()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`)
}
const rt = {
    fallbackLocale: null,
    loadingDelay: 200,
    formats: {
        number: {
            scientific: {
                notation: "scientific"
            },
            engineering: {
                notation: "engineering"
            },
            compactLong: {
                notation: "compact",
                compactDisplay: "long"
            },
            compactShort: {
                notation: "compact",
                compactDisplay: "short"
            }
        },
        date: {
            short: {
                month: "numeric",
                day: "numeric",
                year: "2-digit"
            },
            medium: {
                month: "short",
                day: "numeric",
                year: "numeric"
            },
            long: {
                month: "long",
                day: "numeric",
                year: "numeric"
            },
            full: {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric"
            }
        },
        time: {
            short: {
                hour: "numeric",
                minute: "numeric"
            },
            medium: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
            },
            long: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short"
            },
            full: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short"
            }
        }
    },
    warnOnMissingMessages: !0,
    handleMissingMessage: void 0,
    ignoreTag: !0
};
function ze() {
    return rt
}
function ro(e) {
    const {formats: t} = e
      , n = Ge(e, ["formats"])
      , r = e.initialLocale || e.fallbackLocale;
    return n.warnOnMissingMessages && (delete n.warnOnMissingMessages,
    n.handleMissingMessage == null ? n.handleMissingMessage = no : console.warn('[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.')),
    Object.assign(rt, n, {
        initialLocale: r
    }),
    t && ("number"in t && Object.assign(rt.formats.number, t.number),
    "date"in t && Object.assign(rt.formats.date, t.date),
    "time"in t && Object.assign(rt.formats.time, t.time)),
    Ke.set(r)
}
const $t = Ie(!1);
let nn;
const wt = Ie(null);
function Bn(e) {
    return e.split("-").map( (t, n, r) => r.slice(0, n + 1).join("-")).reverse()
}
function ct(e, t=ze().fallbackLocale) {
    const n = Bn(e);
    return t ? [...new Set([...n, ...Bn(t)])] : n
}
function Oe() {
    return nn ?? void 0
}
wt.subscribe(e => {
    nn = e ?? void 0,
    typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e)
}
);
const Ke = Object.assign(Object.assign({}, wt), {
    set: e => {
        if (e && function(t) {
            if (t == null)
                return;
            const n = ct(t);
            for (let r = 0; r < n.length; r++) {
                const i = n[r];
                if (Fr(i))
                    return i
            }
        }(e) && Ct(e)) {
            const {loadingDelay: t} = ze();
            let n;
            return typeof window < "u" && Oe() != null && t ? n = window.setTimeout( () => $t.set(!0), t) : $t.set(!0),
            Vr(e).then( () => {
                wt.set(e)
            }
            ).finally( () => {
                clearTimeout(n),
                $t.set(!1)
            }
            )
        }
        return wt.set(e)
    }
})
  , io = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0]
  , It = e => {
    const t = Object.create(null);
    return n => {
        const r = JSON.stringify(n);
        return r in t ? t[r] : t[r] = e(n)
    }
}
  , at = (e, t) => {
    const {formats: n} = ze();
    if (e in n && t in n[e])
        return n[e][t];
    throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`)
}
  , so = It(e => {
    var {locale: t, format: n} = e
      , r = Ge(e, ["locale", "format"]);
    if (t == null)
        throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return n && (r = at("number", n)),
    new Intl.NumberFormat(t,r)
}
)
  , oo = It(e => {
    var {locale: t, format: n} = e
      , r = Ge(e, ["locale", "format"]);
    if (t == null)
        throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return n ? r = at("date", n) : Object.keys(r).length === 0 && (r = at("date", "short")),
    new Intl.DateTimeFormat(t,r)
}
)
  , lo = It(e => {
    var {locale: t, format: n} = e
      , r = Ge(e, ["locale", "format"]);
    if (t == null)
        throw new Error('[svelte-i18n] A "locale" must be set to format time values');
    return n ? r = at("time", n) : Object.keys(r).length === 0 && (r = at("time", "short")),
    new Intl.DateTimeFormat(t,r)
}
)
  , ao = (e={}) => {
    var {locale: t=Oe()} = e
      , n = Ge(e, ["locale"]);
    return so(Object.assign({
        locale: t
    }, n))
}
  , uo = (e={}) => {
    var {locale: t=Oe()} = e
      , n = Ge(e, ["locale"]);
    return oo(Object.assign({
        locale: t
    }, n))
}
  , fo = (e={}) => {
    var {locale: t=Oe()} = e
      , n = Ge(e, ["locale"]);
    return lo(Object.assign({
        locale: t
    }, n))
}
  , co = It( (e, t=Oe()) => new Qs(e,t,ze().formats,{
    ignoreTag: ze().ignoreTag
}))
  , ho = (e, t={}) => {
    var n, r, i, o;
    let s = t;
    typeof e == "object" && (s = e,
    e = s.id);
    const {values: l, locale: a=Oe(), default: u} = s;
    if (a == null)
        throw new Error("[svelte-i18n] Cannot format a message without first setting the initial locale.");
    let f = jr(e, a);
    if (f) {
        if (typeof f != "string")
            return console.warn(`[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof f}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`),
            f
    } else
        f = (o = (i = (r = (n = ze()).handleMissingMessage) === null || r === void 0 ? void 0 : r.call(n, {
            locale: a,
            id: e,
            defaultValue: u
        })) !== null && i !== void 0 ? i : u) !== null && o !== void 0 ? o : e;
    if (!l)
        return f;
    let d = f;
    try {
        d = co(f, a).format(l)
    } catch (h) {
        console.warn(`[svelte-i18n] Message "${e}" has syntax error:`, h.message)
    }
    return d
}
  , mo = (e, t) => fo(t).format(e)
  , po = (e, t) => uo(t).format(e)
  , go = (e, t) => ao(t).format(e)
  , vo = (e, t=Oe()) => jr(e, t)
  , ht = Qe([Ke, ft], () => ho);
Qe([Ke], () => mo);
Qe([Ke], () => po);
Qe([Ke], () => go);
Qe([Ke, ft], () => vo);
var _o = {
    app: {
        logout: "Logout",
        error: {
            title: "Error",
            content: {
                text: `Error while fetching marks: {error}

If the problem persists, please {link}, attaching the console content (CTRL + SHIFT + I, 'Console' tab).`,
                link: "open an issue"
            },
            button: "Cringe :)"
        },
        noMarks: {
            title: "No mark",
            content: `Pegasus returned no mark.

If you just started your semester and really have no mark, then everything is fine.

If not, it sometimes happens that Pegasus returns no mark. In this case retry in ~30 seconds, it should fix itself.`,
            button: "Got it"
        },
        back: {
            title: "Go back to Pegasus?",
            content: `To disable Infinity Pegasus and go back to the original Pegasus, simply click on the extension button.

Click again to re-enable it.`,
            button: "Got it."
        },
        separator: "."
    },
    login: {
        title: "Login",
        login_ms: "Login with Microsoft account",
        disclaimer: {
            title: "Disclaimer",
            content: {
                text: `Infinity Pegasus is a web extension where all data processing is made client-side, in your browser. There is no server, except the one hosting the website assets.

Because of that, there are no terms or conditions for its usage.

Nevertheless, even though I did my best to guarantee the reliability of the data displayed, it is possible that the marks and averages aren't completely accurate.

Only the PDFs ('relev\xE9' and 'bulletin de notes') are to be considered 100% accurate.

Coefficients are manually added throughout the year (except the modules'), which means it's common for average computation not to be accurate. To help improving their accuracy, please report any error to me, and do not hesitate to {link}.`,
                link: "contribute to coefficients on the project's GitHub"
            },
            ok: "Got it."
        },
        terms: {
            prefix: "By clicking on 'Login with your Microsoft account' you agree to the",
            link: "terms and conditions",
            suffix: "of the service"
        }
    },
    main: {
        title: "Home",
        progress: {
            loading: "Loading",
            listing: {
                documents: "Listing documents",
                filters: "Listing filters"
            },
            fetching: {
                summary: "Fetching the grade summary",
                report: "Fetching the grade report"
            },
            reading: {
                summary: "Reading the summary",
                report: "Reading the report"
            }
        },
        average: "average",
        promo: "promo",
        updates: {
            title: "Last updates",
            empty: "No update detected since last time.",
            average: "Promotion average",
            mark: "Mark"
        },
        averages: {
            title: "Averages",
            student: "Student average",
            promo: "Promotion average"
        },
        documents: {
            title: "Documents"
        },
        coefficient: "coeff.",
        empty: "No marks",
        percentage: "contributes for"
    },
    logout: {
        title: "Logout",
        text: "You are now logged out.",
        login: "Login"
    },
    footer: {
        links: {
            coefficients: "Coefficients",
            sources: "GitHub",
            reset: "Reset"
        },
        copyright: {
            text: "Copyright \xA9 2021-2023 Adrien \u2018Litarvan\u2019 Navratil",
            license: {
                prefix: "Under",
                link: "MIT license"
            }
        }
    }
}
  , bo = {
    app: {
        logout: "Se d\xE9connecter",
        error: {
            title: "Erreur",
            content: {
                text: `Erreur lors de la r\xE9cup\xE9ration des notes : {error}

Si le probl\xE8me persiste, merci {link}, en y attachant le contenu de la console (CTRL + SHIFT + I, onglet 'Console').`,
                link: "d'ouvrir une issue"
            },
            button: "Cringe :)"
        },
        noMarks: {
            title: "Aucune note",
            content: `Pegasus n'a retourn\xE9 aucune note.

Si vous \xEAtes en d\xE9but de semestre et que vous n'avez vraiment aucune note, alors tout va bien.

Sinon, il arrive que Pegasus ne retourne pas de note. Dans ce cas-l\xE0 r\xE9essayez dans une vingtaine de secondes, \xE7a devrait se r\xE9soudre tout seul.`,
            button: "Not\xE9"
        },
        back: {
            title: "Retourner sur Pegasus ?",
            content: `Pour d\xE9sactiver Infinity Pegasus et retourner sur le Pegasus original, cliquez simplement sur le bouton de l'extension.

Cliquez \xE0 nouveau pour la r\xE9-activer.`,
            button: "Compris."
        },
        separator: ","
    },
    login: {
        title: "Se connecter",
        login_ms: "Se connecter avec Microsoft",
        disclaimer: {
            title: "Disclaimer",
            content: {
                text: `Infinity Pegasus est une extension navigateur dont l'enti\xE8ret\xE9 du traitement se situe c\xF4t\xE9 client, dans votre navigateur. Aucun serveur n'entre en jeu, si ce n'est pour h\xE9berger les ressources du site.

De ce fait, aucune condition particuli\xE8re n'est n\xE9cessaire pour son utilisation.

Cependant, m\xEAme si j'ai fait de mon mieux pour garantir la fiabilit\xE9 des donn\xE9es qui sont affich\xE9es, il est possible que les notes et moyennes affich\xE9es ne soient pas toutes exactes.

Seuls les PDFs (relev\xE9 et bulletin de notes) sont \xE0 consid\xE9rer comme 100% fiables.

Les coefficients sont manuellement entr\xE9s au fur et \xE0 mesure de l'ann\xE9e (sauf ceux des modules), il est donc courant que le calcul des moyennes ne soit pas exact. Pour aider \xE0 am\xE9liorer leur pr\xE9cision, n'h\xE9sitez pas \xE0 me notifier des erreurs, et \xE0 {link}.`,
                link: "participer \xE0 l'ajout des coefficients sur le GitHub"
            },
            button: "C'est not\xE9."
        },
        terms: {
            prefix: "En cliquant sur le bouton ci-dessus vous acceptez les",
            link: "conditions d'utilisation",
            suffix: "du service"
        }
    },
    main: {
        title: "Accueil",
        progress: {
            loading: "Chargement",
            listing: {
                documents: "Listage des documents",
                filters: "Listage des filtres"
            },
            reading: {
                summary: "Lecture du relev\xE9",
                report: "Lecture du bulletin"
            },
            fetching: {
                summary: "R\xE9cup\xE9ration du relev\xE9 de notes",
                report: "R\xE9cup\xE9ration du bulletin de notes"
            }
        },
        average: "moyenne ",
        promo: "promo ",
        updates: {
            title: "Derni\xE8res mises \xE0 jour",
            empty: "Aucune mise \xE0 jour d\xE9tect\xE9e depuis la derni\xE8re fois.",
            average: "Moyenne de promo",
            mark: "Note"
        },
        averages: {
            title: "Moyennes",
            student: "Moyenne g\xE9n\xE9rale",
            promo: "Moyenne de promotion"
        },
        documents: {
            title: "Documents"
        },
        coefficient: "coeff.",
        empty: "Aucune note",
        percentage: "compte pour"
    },
    logout: {
        title: "D\xE9connexion",
        text: "Vous \xEAtes maintenant d\xE9connect\xE9",
        login: "Se connecter"
    },
    footer: {
        links: {
            coefficients: "Coefficients",
            sources: "GitHub",
            reset: "Reset"
        },
        copyright: {
            text: "Copyright \xA9 2021-2023 Adrien \u2018Litarvan\u2019 Navratil",
            license: {
                prefix: "Sous",
                link: "license MIT"
            }
        }
    }
};
function At(e) {
    return e /= .5,
    e < 1 ? .5 * e * e : (e--,
    -.5 * (e * (e - 2) - 1))
}
function kt(e) {
    return e * e
}
function Tt(e) {
    return -e * (e - 2)
}
function de(e, {delay: t=0, duration: n=400, easing: r=Pt}={}) {
    const i = +getComputedStyle(e).opacity;
    return {
        delay: t,
        duration: n,
        easing: r,
        css: o => `opacity: ${o * i}`
    }
}
const We = {
    name: "Infinity Pegasus",
    version: "1.0.1",
    repository: "https://github.com/Litarvan/infinity-pegasus"
};
function Ye(e) {
    return `${We.name} \u2014 ${e}`
}
const Xr = Ie(yo())
  , dt = Ie("loading")
  , Ne = Ie(null);
function yo() {
    return localStorage.loggedOut ? (localStorage.removeItem("loggedOut"),
    !0) : !1
}
const wo = window.pegasus || document.querySelector("#pegasus-original-content").innerText
  , Zr = "https://inge-etud.epita.net/pegasus"
  , qr = `${Zr}/o365Auth.php`;
function zr(e, t, n) {
    typeof t == "function" && (n = t,
    t = null);
    const r = wo.match(e);
    return r && (n || (i => i))(r[t || 0])
}
async function rn(e, t, n={}) {
    const r = await fetch(`${Zr}/index.php?com=${e}&job=${t}`, {
        method: "POST",
        body: new URLSearchParams(n)
    }).then(i => i.arrayBuffer()).then(i => new TextDecoder("ISO-8859-15").decode(i));
    return new DOMParser().parseFromString(r, "text/html")
}
function Wr() {
    const e = Ie("A");
    let t = "A"
      , n = !1;
    function r() {
        n || (n = !0,
        t = t === "A" ? "B" : "A",
        e.set(null))
    }
    function i() {
        n = !1,
        e.set(t)
    }
    return {
        state: e,
        toggle: r,
        outro: i
    }
}
var Eo = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(1,0,0,1,-6.5,-4.5)">
        <path d="M139.5,34C139.5,31.239 137.261,29 134.5,29C77.339,29 31,75.339 31,132.5C31,189.623 77.377,236 134.5,236C191.623,236 238,189.623 238,132.5C238,105.05 227.096,78.724 207.686,59.314C205.733,57.362 202.567,57.362 200.614,59.314L199.918,60.011C197.965,61.964 197.965,65.129 199.918,67.082C217.268,84.432 227.015,107.963 227.015,132.5C227.015,183.56 185.56,225.015 134.5,225.015C83.44,225.015 41.985,183.56 41.985,132.5C41.985,81.405 83.405,39.985 134.5,39.985C137.261,39.985 139.5,37.746 139.5,34.985L139.5,34Z" style="fill:rgb(21,25,37);"/>
    </g>
</svg>
`;
function Lo(e) {
    let t;
    return {
        c() {
            t = b("div"),
            v(t, "class", "spinner svelte-1pndyz8")
        },
        m(n, r) {
            B(n, t, r),
            t.innerHTML = Eo
        },
        p: K,
        i: K,
        o: K,
        d(n) {
            n && H(t)
        }
    }
}
class Yr extends He {
    constructor(t) {
        super();
        Pe(this, t, null, Lo, Ce, {})
    }
}
var xo = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Microsoft_logo</title>
    <g id="Main" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Login" transform="translate(-957.000000, -487.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <g id="Content" transform="translate(840.000000, 0.000000)">
                <g id="Sign-in-button-(+-icon)" transform="translate(90.000000, 466.000000)">
                    <g id="Microsoft_logo" transform="translate(27.000000, 21.000000)">
                        <polygon id="Path" points="0 0 14.5454545 0 14.5454545 14.5454545 0 14.5454545"></polygon>
                        <polygon id="Path" points="17.4545455 0 32 0 32 14.5454545 17.4545455 14.5454545"></polygon>
                        <polygon id="Path" points="0 17.4545455 14.5454545 17.4545455 14.5454545 32 0 32"></polygon>
                        <polygon id="Path" points="17.4545455 17.4545455 32 17.4545455 32 32 17.4545455 32"></polygon>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`;
function Mn(e) {
    let t, n, r, i, o, s = e[0]("login.login_ms") + "", l, a, u, f = e[0]("login.terms.prefix") + "", d, h, m, g = e[0]("login.terms.link") + "", p, _, x = e[0]("login.terms.suffix") + "", w, E, y, T, P;
    return {
        c() {
            t = b("div"),
            n = b("a"),
            r = b("div"),
            i = S(),
            o = b("span"),
            l = A(s),
            a = S(),
            u = b("p"),
            d = A(f),
            h = S(),
            m = b("span"),
            p = A(g),
            _ = S(),
            w = A(x),
            v(r, "id", "ms-logo"),
            v(r, "class", "svelte-pspf0b"),
            v(o, "class", "text svelte-pspf0b"),
            v(n, "id", "login-button"),
            v(n, "href", qr),
            v(n, "class", "svelte-pspf0b"),
            v(m, "class", "link colored clickable"),
            v(u, "id", "terms"),
            v(u, "class", "subtext svelte-pspf0b"),
            v(t, "id", "login"),
            v(t, "class", "svelte-pspf0b")
        },
        m(M, D) {
            B(M, t, D),
            c(t, n),
            c(n, r),
            r.innerHTML = xo,
            c(n, i),
            c(n, o),
            c(o, l),
            c(t, a),
            c(t, u),
            c(u, d),
            c(u, h),
            c(u, m),
            c(m, p),
            c(u, _),
            c(u, w),
            y = !0,
            T || (P = [he(n, "click", Hi(e[4])), he(m, "click", e[6]), he(t, "outroend", e[3])],
            T = !0)
        },
        p(M, D) {
            e = M,
            (!y || D & 1) && s !== (s = e[0]("login.login_ms") + "") && O(l, s),
            (!y || D & 1) && f !== (f = e[0]("login.terms.prefix") + "") && O(d, f),
            (!y || D & 1) && g !== (g = e[0]("login.terms.link") + "") && O(p, g),
            (!y || D & 1) && x !== (x = e[0]("login.terms.suffix") + "") && O(w, x)
        },
        i(M) {
            y || (pe( () => {
                E || (E = ge(t, de, {
                    duration: 150,
                    easing: Tt
                }, !0)),
                E.run(1)
            }
            ),
            y = !0)
        },
        o(M) {
            E || (E = ge(t, de, {
                duration: 150,
                easing: Tt
            }, !1)),
            E.run(0),
            y = !1
        },
        d(M) {
            M && H(t),
            M && E && E.end(),
            T = !1,
            ye(P)
        }
    }
}
function In(e) {
    let t, n, r, i;
    return n = new Yr({}),
    {
        c() {
            t = b("div"),
            xe(n.$$.fragment),
            v(t, "id", "spinner"),
            v(t, "class", "svelte-pspf0b")
        },
        m(o, s) {
            B(o, t, s),
            _e(n, t, null),
            i = !0
        },
        p(o, s) {},
        i(o) {
            i || (U(n.$$.fragment, o),
            pe( () => {
                r || (r = ge(t, de, {
                    duration: 150,
                    easing: kt
                }, !0)),
                r.run(1)
            }
            ),
            i = !0)
        },
        o(o) {
            q(n.$$.fragment, o),
            r || (r = ge(t, de, {
                duration: 150,
                easing: kt
            }, !1)),
            r.run(0),
            i = !1
        },
        d(o) {
            o && H(t),
            be(n),
            o && r && r.end()
        }
    }
}
function So(e) {
    let t, n, r, i, o;
    document.title = t = Ye(e[0]("login.title"));
    let s = e[1] === "A" && Mn(e)
      , l = e[1] === "B" && In();
    return {
        c() {
            n = S(),
            s && s.c(),
            r = S(),
            l && l.c(),
            i = Ht()
        },
        m(a, u) {
            B(a, n, u),
            s && s.m(a, u),
            B(a, r, u),
            l && l.m(a, u),
            B(a, i, u),
            o = !0
        },
        p(a, [u]) {
            (!o || u & 1) && t !== (t = Ye(a[0]("login.title"))) && (document.title = t),
            a[1] === "A" ? s ? (s.p(a, u),
            u & 2 && U(s, 1)) : (s = Mn(a),
            s.c(),
            U(s, 1),
            s.m(r.parentNode, r)) : s && (ke(),
            q(s, 1, 1, () => {
                s = null
            }
            ),
            Te()),
            a[1] === "B" ? l ? (l.p(a, u),
            u & 2 && U(l, 1)) : (l = In(),
            l.c(),
            U(l, 1),
            l.m(i.parentNode, i)) : l && (ke(),
            q(l, 1, 1, () => {
                l = null
            }
            ),
            Te())
        },
        i(a) {
            o || (U(s),
            U(l),
            o = !0)
        },
        o(a) {
            q(s),
            q(l),
            o = !1
        },
        d(a) {
            a && H(n),
            s && s.d(a),
            a && H(r),
            l && l.d(a),
            a && H(i)
        }
    }
}
function Co(e, t, n) {
    let r, i;
    Le(e, ht, d => n(0, r = d));
    const {state: o, toggle: s, outro: l} = Wr();
    Le(e, o, d => n(1, i = d));
    async function a() {
        s(),
        window.location.href = qr
    }
    function u() {
        Ne.set({
            title: r("login.disclaimer.title"),
            content: r("login.disclaimer.content.text", {
                values: {
                    link: `<a class="link colored" href="${We.repository}/tree/master/src/lib/pegasus/coefficients" target="_blank">${r("login.disclaimer.content.link")}</a>`
                }
            }),
            button: r("login.disclaimer.button"),
            width: 500,
            center: !0
        })
    }
    return [r, i, o, l, a, u, () => u()]
}
class Ao extends He {
    constructor(t) {
        super();
        Pe(this, t, Co, So, Ce, {})
    }
}
function ko(e) {
    let t, n, r, i, o = e[0]("logout.text") + "", s, l, a, u = e[0]("logout.login") + "", f, d, h;
    return document.title = t = Ye(e[0]("logout.title")),
    {
        c() {
            n = S(),
            r = b("div"),
            i = b("span"),
            s = A(o),
            l = S(),
            a = b("a"),
            f = A(u),
            v(i, "id", "message"),
            v(i, "class", "svelte-ftidc8"),
            v(a, "id", "login"),
            v(a, "class", "svelte-ftidc8"),
            v(r, "id", "logout"),
            v(r, "class", "svelte-ftidc8")
        },
        m(m, g) {
            B(m, n, g),
            B(m, r, g),
            c(r, i),
            c(i, s),
            c(r, l),
            c(r, a),
            c(a, f),
            d || (h = he(a, "click", e[1]),
            d = !0)
        },
        p(m, [g]) {
            g & 1 && t !== (t = Ye(m[0]("logout.title"))) && (document.title = t),
            g & 1 && o !== (o = m[0]("logout.text") + "") && O(s, o),
            g & 1 && u !== (u = m[0]("logout.login") + "") && O(f, u)
        },
        i: K,
        o: K,
        d(m) {
            m && H(n),
            m && H(r),
            d = !1,
            h()
        }
    }
}
function To(e, t, n) {
    let r;
    Le(e, ht, o => n(0, r = o));
    function i() {
        Xr.set(!1)
    }
    return [r, i]
}
class Po extends He {
    constructor(t) {
        super();
        Pe(this, t, To, ko, Ce, {})
    }
}
const Ho = "modulepreload"
  , On = {}
  , Bo = "https://api.pegasus.infinity.study/"
  , fe = function(t, n) {
    return !n || n.length === 0 ? t() : Promise.all(n.map(r => {
        if (r = `${Bo}${r}`,
        r in On)
            return;
        On[r] = !0;
        const i = r.endsWith(".css")
          , o = i ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${r}"]${o}`))
            return;
        const s = document.createElement("link");
        if (s.rel = i ? "stylesheet" : Ho,
        i || (s.as = "script",
        s.crossOrigin = ""),
        s.href = r,
        document.head.appendChild(s),
        i)
            return new Promise( (l, a) => {
                s.addEventListener("load", l),
                s.addEventListener("error", () => a(new Error(`Unable to preload CSS for ${r}`)))
            }
            )
    }
    )).then( () => t())
}
  , gn = "Relev\xE9 de notes"
  , Jr = "Bulletin de notes"
  , Ot = "PARAM_annee"
  , ut = "PARAM_produit";
let Vt;
async function vn() {
    if (Vt)
        return Vt;
    dt.set("listing.documents");
    const e = []
      , t = await rn("editions", "load-editions").then(n => n.querySelectorAll("#content-list-editions"));
    for (const n of t) {
        const r = !!n.querySelector("#div-filter")
          , i = n.querySelectorAll("form");
        for (const o of i)
            e.push({
                name: o.querySelector(".libelle-edition .texte").innerText.trim(),
                url: o.action,
                method: o.method.toUpperCase(),
                params: Object.fromEntries([...o.querySelectorAll("input")].map( ({name: s, value: l}) => [s, l])),
                async fetchFilters() {
                    return r ? Io(this) : []
                },
                async fetchBlob(s) {
                    return Qr(this, s)
                }
            })
    }
    return Vt = e
}
async function Mo(e, t) {
    const n = await vn()
      , r = await Qr(n.find(i => i.name === e), t);
    if (localStorage.download) {
        const i = new Date
          , o = l => l.toString().padStart(2, "0")
          , s = document.createElement("a");
        s.href = URL.createObjectURL(r),
        s.target = "_blank",
        s.download = `${e.split(" ")[0]}_${i.getFullYear()}${o(i.getMonth() + 1)}${o(i.getDate())}_${o(i.getHours())}${o(i.getMinutes())}${o(i.getSeconds())}.pdf`,
        s.click()
    } else
        open(URL.createObjectURL(r), "_blank")
}
async function Io(e) {
    if (e.__filters)
        return e.__filters;
    dt.set("listing.filters");
    const t = []
      , n = await rn("editions", "load-filter", e.params).then(r => r.querySelectorAll("select"));
    for (const r of n) {
        let i = r.parentElement;
        i.tagName.toLowerCase() === "div" && (i = i.parentElement);
        let o = [];
        if (r.id === ut) {
            const s = t.find(l => l.id === Ot);
            for (const {value: l} of s.values) {
                const a = await rn("editions", "get-report-semesters", {
                    annee: l
                });
                o.push(...Nn(a).map(u => Nt(Ae({}, u), {
                    year: l
                })))
            }
        } else
            o = Nn(r);
        t.push({
            id: r.id,
            name: i.previousElementSibling.querySelector("label").innerText.replace(":", "").trim(),
            values: o
        })
    }
    return e.__filters = t
}
function Nn(e) {
    return [...e.querySelectorAll("option")].map( ({value: t, innerText: n}) => ({
        name: n.replaceAll(/([( ]) /g, "$1"),
        value: t
    })).reverse()
}
async function Qr(e, t={}) {
    return fetch(e.url, {
        method: e.method,
        body: new URLSearchParams(Ae(Ae({}, e.params), t))
    }).then(n => n.blob())
}
const Kr = Symbol("S5 (2027)")
  , ei = Symbol("S5 (2026)")
  , ti = Symbol("S5 [APP ING] (2026)")
  , ni = Symbol("S6 (2026)")
  , ri = Symbol("S6 [APP ING] (2026)")
  , ii = Symbol("S7 [CYB2] (2025)")
  , si = Symbol("S7 [DEV2] (2025)")
  , oi = Symbol("S7 [EXP2] (2025)")
  , li = Symbol("S8 [CYB2] (2025)")
  , ai = Symbol("S8 [DEV2] (2025)")
  , ui = Symbol("S8 [EXP2] (2025)")
  , fi = Symbol("S9 [CYB3] (2025)")
  , ci = Symbol("S8 [GISTRE] (2025)")
  , hi = Symbol("S8 [SSIE] (2025)")
  , ce = {
    [Kr]: (await fe( () => import("./s5_2027.js"), [])).default,
    [ei]: (await fe( () => import("./s5_2026.js"), [])).default,
    [ti]: (await fe( () => import("./s5_app_ing_2026.js"), [])).default,
    [ni]: (await fe( () => import("./s6_2026.js"), [])).default,
    [ri]: (await fe( () => import("./s6_app_ing_2026.js"), [])).default,
    [ci]: (await fe( () => import("./s8_gistre_2025.js"), [])).default,
    [ii]: (await fe( () => import("./s7_cyb2_2025.js"), [])).default,
    [si]: (await fe( () => import("./s7_dev2_2025.js"), [])).default,
    [oi]: (await fe( () => import("./s7_exp2_2025.js"), [])).default,
    [li]: (await fe( () => import("./s8_cyb2_2025.js"), [])).default,
    [ai]: (await fe( () => import("./s8_dev2_2025.js"), [])).default,
    [ui]: (await fe( () => import("./s8_exp2_2025.js"), [])).default,
    [fi]: (await fe( () => import("./s9_cyb3_2025.js"), [])).default,
    [hi]: (await fe( () => import("./s8_ssie_2025.js"), [])).default
};
function Oo(e, t) {
    const n = Ro(e) || {};
    let r = 0
      , i = 0
      , o = 0
      , s = 0;
    for (const l of t) {
        const a = n[l.id] || n[l.name] || {};
        let u = 0
          , f = 0
          , d = 0
          , h = 0;
        for (const m of l.subjects) {
            const g = a[m.id] || a[m.name] || {};
            let p = 0
              , _ = 0
              , x = 0
              , w = 0;
            for (const E of m.marks) {
                let y = 1;
                for (const [T,P] of Object.entries(g))
                    if (new RegExp(T).test(T.match(/^[0-9]+$/g) ? E.id : E.name)) {
                        y = P;
                        break
                    }
                E.coefficient = y,
                E.value !== .01 && (p += E.value * y,
                x += y),
                _ += E.classAverage * y,
                w += y
            }
            m.coefficient = g._subject || 1,
            m.average = gt(p / x),
            m.classAverage = gt(_ / w),
            m.average != null && (u += m.average * m.coefficient,
            d += m.coefficient),
            m.classAverage != null && (f += m.classAverage * m.coefficient,
            h += m.coefficient)
        }
        l.average = gt(u / d),
        l.classAverage = gt(f / h),
        l.average !== null && (r += l.average * l.credits,
        o += l.credits),
        l.classAverage != null && (i += l.classAverage * l.credits,
        s += l.credits)
    }
    return {
        average: r / o,
        classAverage: i / s
    }
}
function No(e) {
    for (const t of e) {
        const n = Math.min(...t.subjects.map(r => r.coefficient));
        for (const r of t.subjects) {
            const i = r.marks.reduce( (o, s) => o + s.coefficient, 0);
            for (const o of r.marks)
                o.coefficient /= i;
            r.coefficient /= n
        }
    }
}
function Ro(e) {
    const t = e[Ot]
      , n = e[ut].split(" ")[0];
    switch (t) {
    case "2024":
        switch (n) {
        case "SI5":
            return ce[Kr]
        }
        break;
    case "2023":
        switch (n) {
        case "SI5":
            return ce[ei];
        case "SI6":
            return ce[ni];
        case "SA5":
            return ce[ti];
        case "SA6":
            return ce[ri];
        case "SA7":
            return ce[ii];
        case "SD7":
            return ce[si];
        case "SX7":
            return ce[oi];
        case "SA8":
            return ce[li];
        case "SD8":
            return ce[ai];
        case "SX8":
            return ce[ui];
        case "SA9":
            return ce[fi];
        case "SI8GISTRE":
            return ce[ci];
        case "SI8SSIE":
            return ce[hi]
        }
        break
    }
}
function gt(e) {
    return isNaN(e) ? null : e
}
const Xt = /(\[?([a-zA-Z0-9]+)\]? ?-? ?_?)?(.*) *\[ *(.*) ECTS]/
  , Zt = /\d+,\d\d/g;
async function Go() {
    const e = await vn()
      , [t,n] = await e.find(r => r.name === gn).fetchFilters();
    return n.values = n.values.filter(r => !r.name.includes("Pr\xE9pa")),
    t.values = t.values.filter(r => n.values.find(i => i.year === r.value)),
    [t, n]
}
async function di(e, t) {
    const n = await Do(e, !t);
    dt.set(`reading.${t ? "summary" : "report"}`);
    const r = window["pdfjs-dist/build/pdf"];
    r.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js";
    const i = await r.getDocument({
        url: URL.createObjectURL(n)
    }).promise
      , o = [];
    let s;
    for (let l = 1; l <= i.numPages && typeof (s == null ? void 0 : s.average) != "number"; l++)
        if (!(s = await Uo(await i.getPage(l), o, !t)) && !t)
            return di(e, !0);
    return t && (s = Oo(e, o)),
    No(o),
    Nt(Ae({}, s), {
        fromReport: !t,
        marks: o
    })
}
async function Do(e, t) {
    const r = (await vn()).find(i => i.name === (t ? Jr : gn));
    return dt.set(`fetching.${t ? "report" : "summary"}`),
    r.fetchBlob(e)
}
async function Uo(e, t, n) {
    const i = (await e.getTextContent()).items.filter(u => !u.hasEOL).sort( (u, f) => {
        const d = u.transform[6] - f.transform[6];
        return d === 0 ? u.transform[5] - f.transform[5] : d
    }
    )
      , o = i.map(u => u.str);
    if (!o[0] || o[0] === "L'\xE9dition de ce document n'a pas encore \xE9t\xE9 autoris\xE9e par la p\xE9dagogie.")
        return !1;
    let s, l, a = 0;
    for (; a < o.length; ) {
        for (; a < o.length && !o[a].match(Xt); )
            o[a++] === "Moyenne du semestre de la promotion" && (s = we(o[a++]),
            l = we(o[a++]));
        for (; a < o.length && o[a].match(Xt); ) {
            const [,,u,f,d] = o[a++].match(Xt)
              , h = [];
            let m, g, p;
            for (n && (a++,
            m = o[a++],
            p = we(o[a++]),
            g = we(o[a++])); a < o.length && o[a] !== "Niveau"; ) {
                const [_,x] = jo(i, o, a, n);
                h.push(_),
                a = x
            }
            t.push({
                id: u,
                name: f,
                credits: parseFloat(d),
                grade: m,
                average: g,
                classAverage: p,
                subjects: h
            })
        }
    }
    return {
        average: s,
        classAverage: l
    }
}
function jo(e, t, n, r) {
    const i = t[n++]
      , o = t[n++];
    let s, l, a, u;
    const f = [];
    r && (n++,
    s = t[n++],
    l = we(t[n++]),
    n++,
    a = we(t[n++]),
    u = we(t[n++]));
    let d = 0;
    for (; n < t.length && (t[n].match(Zt) || n + 1 < t.length && Rn(e[n + 1]) || e[n].transform[4] === 94); ) {
        const h = {
            id: d++
        };
        t[n].match(Zt) && (h.classAverage = we(t[n++]));
        const m = (p, _) => Math.abs(p - _)
          , g = e[n - 1].transform[4];
        m(g, 464) < m(g, 506) ? (h.value = h.classAverage,
        delete h.classAverage) : t[n].match(Zt) && (h.value = we(t[n++])),
        r && (h.coefficient = we(t[n++])),
        h.name = t[n++],
        Rn(e[n - 1]) ? h.name = "Note" : n++,
        f.push(h)
    }
    return [{
        name: i,
        id: o,
        grade: s,
        average: l,
        classAverage: a,
        coefficient: u,
        marks: f
    }, n]
}
function we(e) {
    if (e === undefined || e === null) {
        return 0; // Handle undefined or null values, default to 0
    }
    return parseFloat(e.replace(",", "."));
}
function Rn(e) {
    return e.transform[4] === 94
}
const Fo = 1e3 * 60 * 60 * 24 * 7;
function $o(e, t) {
    const n = JSON.parse(localStorage.save || "{}")
      , r = JSON.parse(localStorage.updates || "{}")
      , i = JSON.stringify(e)
      , o = n[i];
    if (!o)
        return n[i] = t,
        localStorage.save = JSON.stringify(n),
        [];
    if (t.every(l => l.subjects.every(a => a.marks.every(u => u.value === void 0))))
        return [];
    let s = r[i] || [];
    for (const l of t) {
        const a = o.find(u => u.name === l.name);
        if (!!a)
            for (const u of l.subjects) {
                let d = function(h, m, g, p, _) {
                    const x = s.find(w => w.subject === u.id && w.id === m && w.name === g);
                    x && (!(x.type === "average-update" || h === "average-update") || x.type === h) ? (x.type = h,
                    x.date = new Date,
                    x.value = p,
                    x.old = _) : s.push(Ae(Ae({
                        date: new Date,
                        type: h,
                        subject: u.id,
                        id: m,
                        name: g
                    }, p != null ? {
                        value: p
                    } : {}), _ !== void 0 && p !== null ? {
                        old: _
                    } : {}))
                };
                const f = a.subjects.find(h => h.name === u.name);
                if (!!f) {
                    for (const {id: h, name: m, value: g, classAverage: p} of u.marks) {
                        const _ = f.marks.find(x => x.id === h && x.name === m);
                        if (!_)
                            g !== null && d("add", h, m, g);
                        else if (_.value !== g) {
                            let x = "update";
                            _.value === void 0 ? x = "add" : g === void 0 && (x = "remove"),
                            d(x, h, m, g, _.value)
                        } else
                            _.classAverage !== p && d("average-update", h, m, p, _.classAverage)
                    }
                    for (const h of f.marks)
                        u.marks.find(g => g.name === h.name) || d("remove", h.id, h.name, void 0, h.value)
                }
            }
    }
    return s = Zo(Xo(Vo(qo(s)))).sort( (l, a) => new Date(a.date) - new Date(l.date)),
    n[i] = t,
    r[i] = s,
    localStorage.save = JSON.stringify(n),
    localStorage.updates = JSON.stringify(r),
    s
}
function Vo(e) {
    const t = [];
    for (const n of e) {
        let r;
        if (r = t.find(i => i.subject === n.subject && i.id === n.id && i.name === n.name && i.type === n.type)) {
            r.date = n.date,
            r.value = n.value;
            continue
        }
        t.push(n)
    }
    return t
}
function Xo(e) {
    const t = [];
    for (const n of e) {
        if (new Date(n.date) >= new Date("2022-04-13")) {
            t.push(n);
            continue
        }
        n.type === "add" && n.value === void 0 || (n.type === "remove" && (n.date = new Date,
        n.type = "add"),
        t.push(n))
    }
    return t
}
function Zo(e) {
    const t = [];
    for (const n of e)
        (n.type !== "add" || n.value !== void 0) && t.push(n);
    return t
}
function qo(e) {
    const t = new Date
      , n = [];
    for (const r of e)
        t - new Date(r.date) < Fo && n.push(r);
    return n
}
var zo = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="21px" height="13px" viewBox="0 0 21 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Icon</title>
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g id="Combo-box" transform="translate(-796.000000, -64.000000)" stroke="#979797" stroke-width="3">
            <path d="M797.528577,66.012632 L805.821471,74.3055252 C806.211995,74.6960495 806.84516,74.6960495 807.235684,74.3055252 L815.528577,66.012632 L815.528577,66.012632" id="Icon"></path>
        </g>
    </g>
</svg>`;
function Gn(e, t, n) {
    const r = e.slice();
    return r[12] = t[n],
    r
}
function Dn(e) {
    let t, n, r, i = e[1], o = [];
    for (let s = 0; s < i.length; s += 1)
        o[s] = Un(Gn(e, i, s));
    return {
        c() {
            t = b("div");
            for (let s = 0; s < o.length; s += 1)
                o[s].c();
            v(t, "class", "choices card svelte-11txarc"),
            ve(t, "visible", e[3])
        },
        m(s, l) {
            B(s, t, l);
            for (let a = 0; a < o.length; a += 1)
                o[a].m(t, null);
            r = !0
        },
        p(s, l) {
            if (e = s,
            l & 66) {
                i = e[1];
                let a;
                for (a = 0; a < i.length; a += 1) {
                    const u = Gn(e, i, a);
                    o[a] ? o[a].p(u, l) : (o[a] = Un(u),
                    o[a].c(),
                    o[a].m(t, null))
                }
                for (; a < o.length; a += 1)
                    o[a].d(1);
                o.length = i.length
            }
            l & 8 && ve(t, "visible", e[3])
        },
        i(s) {
            r || (pe( () => {
                n || (n = ge(t, de, {
                    duration: 125,
                    easing: At
                }, !0)),
                n.run(1)
            }
            ),
            r = !0)
        },
        o(s) {
            n || (n = ge(t, de, {
                duration: 125,
                easing: At
            }, !1)),
            n.run(0),
            r = !1
        },
        d(s) {
            s && H(t),
            Be(o, s),
            s && n && n.end()
        }
    }
}
function Un(e) {
    let t, n = e[12].name + "", r, i, o, s;
    function l() {
        return e[10](e[12])
    }
    return {
        c() {
            t = b("div"),
            r = A(n),
            i = S(),
            v(t, "class", "choice clickable opaque svelte-11txarc")
        },
        m(a, u) {
            B(a, t, u),
            c(t, r),
            c(t, i),
            o || (s = he(t, "click", l),
            o = !0)
        },
        p(a, u) {
            e = a,
            u & 2 && n !== (n = e[12].name + "") && O(r, n)
        },
        d(a) {
            a && H(t),
            o = !1,
            s()
        }
    }
}
function Wo(e) {
    let t, n, r, i, o, s, l, a, u, f, d, h, m, g = e[3] && Dn(e);
    return {
        c() {
            t = S(),
            n = b("div"),
            r = b("span"),
            i = A(e[0]),
            o = S(),
            s = b("div"),
            l = A(e[4]),
            a = S(),
            u = new Mi,
            f = S(),
            g && g.c(),
            v(r, "class", "name svelte-11txarc"),
            u.a = null,
            v(s, "class", "box clickable svelte-11txarc"),
            ve(s, "opened", e[3]),
            v(n, "class", "combo-box svelte-11txarc")
        },
        m(p, _) {
            B(p, t, _),
            B(p, n, _),
            c(n, r),
            c(r, i),
            c(n, o),
            c(n, s),
            c(s, l),
            c(s, a),
            u.m(zo, s),
            e[9](s),
            c(n, f),
            g && g.m(n, null),
            d = !0,
            h || (m = [he(document.body, "click", e[5]), he(s, "click", e[8])],
            h = !0)
        },
        p(p, [_]) {
            (!d || _ & 1) && O(i, p[0]),
            (!d || _ & 16) && O(l, p[4]),
            _ & 8 && ve(s, "opened", p[3]),
            p[3] ? g ? (g.p(p, _),
            _ & 8 && U(g, 1)) : (g = Dn(p),
            g.c(),
            U(g, 1),
            g.m(n, null)) : g && (ke(),
            q(g, 1, 1, () => {
                g = null
            }
            ),
            Te())
        },
        i(p) {
            d || (U(g),
            d = !0)
        },
        o(p) {
            q(g),
            d = !1
        },
        d(p) {
            p && H(t),
            p && H(n),
            e[9](null),
            g && g.d(),
            h = !1,
            ye(m)
        }
    }
}
function Yo(e, t, n) {
    let r, {name: i} = t, {values: o} = t, {value: s} = t, l, a = !1;
    const u = Ri();
    function f(p) {
        let _ = p.target;
        l.contains(_) || n(3, a = !1)
    }
    function d(p) {
        n(7, s = p.value),
        n(3, a = !1),
        u("update", p)
    }
    const h = () => n(3, a = !a);
    function m(p) {
        ot[p ? "unshift" : "push"]( () => {
            l = p,
            n(2, l)
        }
        )
    }
    const g = p => d(p);
    return e.$$set = p => {
        "name"in p && n(0, i = p.name),
        "values"in p && n(1, o = p.values),
        "value"in p && n(7, s = p.value)
    }
    ,
    e.$$.update = () => {
        e.$$.dirty & 130 && n(4, r = (o.find(p => p.value === s) || {
            name: "Choisir..."
        }).name)
    }
    ,
    [i, o, l, a, r, f, d, s, h, m, g]
}
class Jo extends He {
    constructor(t) {
        super();
        Pe(this, t, Yo, Wo, Ce, {
            name: 0,
            values: 1,
            value: 7
        })
    }
}
var Qo = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="40px" height="21px" viewBox="0 0 40 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Group 2</title>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g id="Home-page" transform="translate(-1178.000000, -295.000000)" stroke="#A5A9B5" stroke-width="3">
            <g id="Content" transform="translate(440.000000, 0.000000)">
                <g id="Header" transform="translate(66.000000, 66.000000)">
                    <g id="Group" transform="translate(0.000000, 126.000000)">
                        <g id="Group-2" transform="translate(674.289514, 104.605223)">
                            <line x1="0" y1="8.89477667" x2="34.7695789" y2="8.89477667" id="Path-3"></line>
                            <polyline id="Path-4" points="25.8748022 17.7895533 34.7695789 8.89477667 25.8748022 0"></polyline>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`
  , Ko = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="29px" height="29px" viewBox="0 0 29 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Group 2</title>
    <g id="Main" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g id="Home-page" transform="translate(-1321.000000, -291.000000)" stroke="#44B728" stroke-width="3">
            <g id="Content" transform="translate(440.000000, 0.000000)">
                <g id="Header" transform="translate(66.000000, 66.000000)">
                    <g id="Group" transform="translate(0.000000, 126.000000)">
                        <g id="Group-2" transform="translate(829.674304, 113.500000) rotate(-45.000000) translate(-829.674304, -113.500000) translate(812.289514, 104.605223)">
                            <line x1="-2.27373675e-13" y1="8.89477667" x2="34.7695789" y2="8.89477667" id="Path-3"></line>
                            <polyline id="Path-4" points="25.8748022 17.7895533 34.7695789 8.89477667 25.8748022 0"></polyline>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`
  , el = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="29px" height="29px" viewBox="0 0 29 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Group 2</title>
    <g id="Main" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g id="Home-page" transform="translate(-1321.000000, -241.000000)" stroke="#D52121" stroke-width="3">
            <g id="Content" transform="translate(440.000000, 0.000000)">
                <g id="Header" transform="translate(66.000000, 66.000000)">
                    <g id="Group" transform="translate(0.000000, 126.000000)">
                        <g id="Group-2" transform="translate(829.674304, 63.500000) rotate(45.000000) translate(-829.674304, -63.500000) translate(812.289514, 54.605223)">
                            <line x1="-1.13686838e-13" y1="8.89477667" x2="34.7695789" y2="8.89477667" id="Path-3"></line>
                            <polyline id="Path-4" points="25.8748022 17.7895533 34.7695789 8.89477667 25.8748022 0"></polyline>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`
  , tl = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="29px" height="29px" viewBox="0 0 29 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Group 2</title>
    <g id="Main" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g id="Home-page" transform="translate(-1321.000000, -201.000000)" stroke="#212223" stroke-width="3">
            <g id="Content" transform="translate(440.000000, 0.000000)">
                <g id="Header" transform="translate(66.000000, 66.000000)">
                    <g id="Group" transform="translate(0.000000, 126.000000)">
                        <g id="Group-2" transform="translate(829.674304, 23.500000) rotate(-45.000000) translate(-829.674304, -23.500000) translate(812.289514, 14.605223)">
                            <line x1="0" y1="8.89477667" x2="34.7695789" y2="8.89477667" id="Path-3"></line>
                            <polyline id="Path-4" points="25.8748022 17.7895533 34.7695789 8.89477667 25.8748022 0"></polyline>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`
  , nl = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="29px" height="29px" viewBox="0 0 29 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Group 4</title>
    <g id="Main" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g id="Home-page" transform="translate(-1322.000000, -331.000000)" stroke="#44B728" stroke-width="3">
            <g id="Content" transform="translate(440.000000, 0.000000)">
                <g id="Header" transform="translate(66.000000, 66.000000)">
                    <g id="Group" transform="translate(0.000000, 126.000000)">
                        <g id="Group-4" transform="translate(830.335481, 153.812317) rotate(45.000000) translate(-830.335481, -153.812317) translate(821.388092, 144.917541)">
                            <polyline id="Path-4" points="0 17.7895533 8.89477667 8.89477667 0 0"></polyline>
                            <polyline id="Path-4" transform="translate(13.447388, 8.894777) scale(-1, 1) translate(-13.447388, -8.894777) " points="9 17.7895533 17.8947767 8.89477667 9 0"></polyline>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`
  , rl = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="29px" height="4px" viewBox="0 0 29 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Path 3</title>
    <g id="Main" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g id="Home-page" transform="translate(-1322.000000, -381.000000)" stroke="#D52121" stroke-width="3">
            <g id="Content" transform="translate(440.000000, 0.000000)">
                <g id="Header" transform="translate(66.000000, 66.000000)">
                    <g id="Group" transform="translate(0.000000, 126.000000)">
                        <line x1="818.027848" y1="191.353544" x2="843.5" y2="191.5" id="Path-3"></line>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`;
function jn(e, t, n) {
    const r = e.slice();
    return r[22] = t[n],
    r
}
function Fn(e, t, n) {
    const r = e.slice();
    return r[25] = t[n],
    r
}
function $n(e, t, n) {
    const r = e.slice();
    return r[28] = t[n],
    r
}
function Vn(e, t, n) {
    const r = e.slice();
    return r[31] = t[n],
    r
}
function Xn(e, t, n) {
    const r = e.slice();
    return r[34] = t[n][0],
    r[35] = t[n][1],
    r[37] = n,
    r
}
function Zn(e, t, n) {
    const r = e.slice();
    return r[38] = t[n].type,
    r[25] = t[n].subject,
    r[34] = t[n].name,
    r[39] = t[n].value,
    r[40] = t[n].old,
    r
}
function qn(e, t, n) {
    const r = e.slice();
    r[34] = t[n].name,
    r[43] = t[n].id,
    r[44] = t[n].values;
    const i = r[44].filter(o => r[43] !== ut || o.year === r[4][Ot]);
    return r[45] = i,
    r
}
function zn(e) {
    let t, n, r, i, o = e[7](`main.progress.${e[9]}`) + "", s, l, a, u, f, d;
    return n = new Yr({}),
    {
        c() {
            t = b("div"),
            xe(n.$$.fragment),
            r = S(),
            i = b("div"),
            s = A(o),
            l = A("..."),
            v(i, "class", "subtitle svelte-f9e7js"),
            v(t, "class", "loading svelte-f9e7js")
        },
        m(h, m) {
            B(h, t, m),
            _e(n, t, null),
            c(t, r),
            c(t, i),
            c(i, s),
            c(i, l),
            u = !0,
            f || (d = he(t, "outroend", e[11]),
            f = !0)
        },
        p(h, m) {
            e = h,
            (!u || m[0] & 640) && o !== (o = e[7](`main.progress.${e[9]}`) + "") && O(s, o)
        },
        i(h) {
            u || (U(n.$$.fragment, h),
            pe( () => {
                a || (a = ge(t, de, {
                    duration: 150,
                    easing: Tt
                }, !0)),
                a.run(1)
            }
            ),
            u = !0)
        },
        o(h) {
            q(n.$$.fragment, h),
            a || (a = ge(t, de, {
                duration: 150,
                easing: Tt
            }, !1)),
            a.run(0),
            u = !1
        },
        d(h) {
            h && H(t),
            be(n),
            h && a && a.end(),
            f = !1,
            d()
        }
    }
}
function Wn(e) {
    let t, n, r, i, o = e[7]("main.updates.title") + "", s, l, a, u, f = e[5].filter(ur).length === 0, d, h, m, g, p = e[7]("main.averages.title") + "", _, x, w, E, y, T, P, M = e[7]("main.documents.title") + "", D, C, I, V, Y, J, N, Q, X, G, F, ne, ee = e[3], R = [];
    for (let k = 0; k < ee.length; k += 1)
        R[k] = Yn(qn(e, ee, k));
    const me = k => q(R[k], 1, 1, () => {
        R[k] = null
    }
    );
    let ie = f && Jn(e)
      , De = e[5]
      , se = [];
    for (let k = 0; k < De.length; k += 1)
        se[k] = er(Zn(e, De, k));
    let Ue = Object.entries(e[1])
      , oe = [];
    for (let k = 0; k < Ue.length; k += 1)
        oe[k] = tr(Xn(e, Ue, k));
    let je = e[2]
      , le = [];
    for (let k = 0; k < je.length; k += 1)
        le[k] = nr(Vn(e, je, k));
    let Fe = e[0]
      , ae = [];
    for (let k = 0; k < Fe.length; k += 1)
        ae[k] = lr(jn(e, Fe, k));
    return {
        c() {
            t = b("div"),
            n = b("div");
            for (let k = 0; k < R.length; k += 1)
                R[k].c();
            r = S(),
            i = b("div"),
            s = A(o),
            l = S(),
            a = b("hr"),
            u = S(),
            ie && ie.c(),
            d = S(),
            h = b("div");
            for (let k = 0; k < se.length; k += 1)
                se[k].c();
            m = S(),
            g = b("div"),
            _ = A(p),
            x = S(),
            w = b("hr"),
            E = S(),
            y = b("div");
            for (let k = 0; k < oe.length; k += 1)
                oe[k].c();
            T = S(),
            P = b("div"),
            D = A(M),
            C = S(),
            I = b("hr"),
            V = S(),
            Y = b("div");
            for (let k = 0; k < le.length; k += 1)
                le[k].c();
            J = S(),
            N = b("hr"),
            Q = S();
            for (let k = 0; k < ae.length; k += 1)
                ae[k].c();
            v(n, "class", "filters svelte-f9e7js"),
            v(a, "class", "svelte-f9e7js"),
            v(i, "class", "header svelte-f9e7js"),
            v(h, "class", "updates svelte-f9e7js"),
            v(w, "class", "svelte-f9e7js"),
            v(g, "class", "header svelte-f9e7js"),
            v(y, "class", "big-list svelte-f9e7js"),
            v(I, "class", "svelte-f9e7js"),
            v(P, "class", "header svelte-f9e7js"),
            v(Y, "class", "big-list svelte-f9e7js"),
            ve(Y, "downloading", e[6]),
            v(N, "class", "separator svelte-f9e7js"),
            v(t, "class", "content svelte-f9e7js")
        },
        m(k, z) {
            B(k, t, z),
            c(t, n);
            for (let L = 0; L < R.length; L += 1)
                R[L].m(n, null);
            c(t, r),
            c(t, i),
            c(i, s),
            c(i, l),
            c(i, a),
            c(t, u),
            ie && ie.m(t, null),
            c(t, d),
            c(t, h);
            for (let L = 0; L < se.length; L += 1)
                se[L].m(h, null);
            c(t, m),
            c(t, g),
            c(g, _),
            c(g, x),
            c(g, w),
            c(t, E),
            c(t, y);
            for (let L = 0; L < oe.length; L += 1)
                oe[L].m(y, null);
            c(t, T),
            c(t, P),
            c(P, D),
            c(P, C),
            c(P, I),
            c(t, V),
            c(t, Y);
            for (let L = 0; L < le.length; L += 1)
                le[L].m(Y, null);
            c(t, J),
            c(t, N),
            c(t, Q);
            for (let L = 0; L < ae.length; L += 1)
                ae[L].m(t, null);
            G = !0,
            F || (ne = he(t, "outroend", e[11]),
            F = !0)
        },
        p(k, z) {
            if (e = k,
            z[0] & 4120) {
                ee = e[3];
                let L;
                for (L = 0; L < ee.length; L += 1) {
                    const ue = qn(e, ee, L);
                    R[L] ? (R[L].p(ue, z),
                    U(R[L], 1)) : (R[L] = Yn(ue),
                    R[L].c(),
                    U(R[L], 1),
                    R[L].m(n, null))
                }
                for (ke(),
                L = ee.length; L < R.length; L += 1)
                    me(L);
                Te()
            }
            if ((!G || z[0] & 128) && o !== (o = e[7]("main.updates.title") + "") && O(s, o),
            z[0] & 32 && (f = e[5].filter(ur).length === 0),
            f ? ie ? ie.p(e, z) : (ie = Jn(e),
            ie.c(),
            ie.m(t, d)) : ie && (ie.d(1),
            ie = null),
            z[0] & 24736) {
                De = e[5];
                let L;
                for (L = 0; L < De.length; L += 1) {
                    const ue = Zn(e, De, L);
                    se[L] ? se[L].p(ue, z) : (se[L] = er(ue),
                    se[L].c(),
                    se[L].m(h, null))
                }
                for (; L < se.length; L += 1)
                    se[L].d(1);
                se.length = De.length
            }
            if ((!G || z[0] & 128) && p !== (p = e[7]("main.averages.title") + "") && O(_, p),
            z[0] & 8322) {
                Ue = Object.entries(e[1]);
                let L;
                for (L = 0; L < Ue.length; L += 1) {
                    const ue = Xn(e, Ue, L);
                    oe[L] ? oe[L].p(ue, z) : (oe[L] = tr(ue),
                    oe[L].c(),
                    oe[L].m(y, null))
                }
                for (; L < oe.length; L += 1)
                    oe[L].d(1);
                oe.length = Ue.length
            }
            if ((!G || z[0] & 128) && M !== (M = e[7]("main.documents.title") + "") && O(D, M),
            z[0] & 32836) {
                je = e[2];
                let L;
                for (L = 0; L < je.length; L += 1) {
                    const ue = Vn(e, je, L);
                    le[L] ? le[L].p(ue, z) : (le[L] = nr(ue),
                    le[L].c(),
                    le[L].m(Y, null))
                }
                for (; L < le.length; L += 1)
                    le[L].d(1);
                le.length = je.length
            }
            if (z[0] & 64 && ve(Y, "downloading", e[6]),
            z[0] & 8321) {
                Fe = e[0];
                let L;
                for (L = 0; L < Fe.length; L += 1) {
                    const ue = jn(e, Fe, L);
                    ae[L] ? ae[L].p(ue, z) : (ae[L] = lr(ue),
                    ae[L].c(),
                    ae[L].m(t, null))
                }
                for (; L < ae.length; L += 1)
                    ae[L].d(1);
                ae.length = Fe.length
            }
        },
        i(k) {
            if (!G) {
                for (let z = 0; z < ee.length; z += 1)
                    U(R[z]);
                pe( () => {
                    X || (X = ge(t, de, {
                        duration: 150,
                        easing: kt
                    }, !0)),
                    X.run(1)
                }
                ),
                G = !0
            }
        },
        o(k) {
            R = R.filter(Boolean);
            for (let z = 0; z < R.length; z += 1)
                q(R[z]);
            X || (X = ge(t, de, {
                duration: 150,
                easing: kt
            }, !1)),
            X.run(0),
            G = !1
        },
        d(k) {
            k && H(t),
            Be(R, k),
            ie && ie.d(),
            Be(se, k),
            Be(oe, k),
            Be(le, k),
            Be(ae, k),
            k && X && X.end(),
            F = !1,
            ne()
        }
    }
}
function Yn(e) {
    let t, n;
    function r(...i) {
        return e[16](e[43], ...i)
    }
    return t = new Jo({
        props: {
            name: e[34],
            values: e[45],
            value: e[4][e[43]]
        }
    }),
    t.$on("update", r),
    {
        c() {
            xe(t.$$.fragment)
        },
        m(i, o) {
            _e(t, i, o),
            n = !0
        },
        p(i, o) {
            e = i;
            const s = {};
            o[0] & 8 && (s.name = e[34]),
            o[0] & 24 && (s.values = e[45]),
            o[0] & 24 && (s.value = e[4][e[43]]),
            t.$set(s)
        },
        i(i) {
            n || (U(t.$$.fragment, i),
            n = !0)
        },
        o(i) {
            q(t.$$.fragment, i),
            n = !1
        },
        d(i) {
            be(t, i)
        }
    }
}
function Jn(e) {
    let t, n = e[7]("main.updates.empty") + "", r;
    return {
        c() {
            t = b("div"),
            r = A(n),
            v(t, "class", "no-updates svelte-f9e7js")
        },
        m(i, o) {
            B(i, t, o),
            c(t, r)
        },
        p(i, o) {
            o[0] & 128 && n !== (n = i[7]("main.updates.empty") + "") && O(r, n)
        },
        d(i) {
            i && H(t)
        }
    }
}
function Qn(e) {
    let t, n, r, i, o, s = e[25] + "", l, a, u, f, d, h = e[34] + "", m, g, p, _, x = e[7](`main.updates.${e[38].includes("average") ? "average" : "mark"}`) + "", w, E, y, T, P, M, D, C, I = e[13](e[39] === 0 || e[39] ? e[39] : e[40]) + "", V, Y, J, N, Q = e[14](e[38], e[39], e[40]) + "", X, G = (e[39] === 0 || e[39]) && (e[40] === 0 || e[40]) && Kn(e);
    return {
        c() {
            t = b("div"),
            n = b("div"),
            r = S(),
            i = b("div"),
            o = b("div"),
            l = A(s),
            a = S(),
            u = b("div"),
            u.textContent = "-",
            f = S(),
            d = b("div"),
            m = A(h),
            g = A(" \xA0"),
            p = b("span"),
            _ = A("\xB7\xA0 "),
            w = A(x),
            E = S(),
            y = b("div"),
            T = b("div"),
            P = S(),
            G && G.c(),
            M = S(),
            D = b("div"),
            C = b("span"),
            V = A(I),
            Y = A("\xA0/ 20"),
            J = S(),
            N = b("div"),
            X = S(),
            v(n, "class", "point big svelte-f9e7js"),
            v(o, "class", "id svelte-f9e7js"),
            v(u, "class", "dash svelte-f9e7js"),
            v(p, "class", "target svelte-f9e7js"),
            v(d, "class", "name svelte-f9e7js"),
            v(i, "class", "top svelte-f9e7js"),
            v(T, "class", "point svelte-f9e7js"),
            v(C, "class", "value svelte-f9e7js"),
            te(C, "color", Se(e[39] === 0 || e[39] ? e[39] : e[40]), !1),
            v(D, "class", "to"),
            v(N, "class", "type-sign svelte-f9e7js"),
            v(y, "class", "mark svelte-f9e7js"),
            v(t, "class", "update svelte-f9e7js")
        },
        m(F, ne) {
            B(F, t, ne),
            c(t, n),
            c(t, r),
            c(t, i),
            c(i, o),
            c(o, l),
            c(i, a),
            c(i, u),
            c(i, f),
            c(i, d),
            c(d, m),
            c(d, g),
            c(d, p),
            c(p, _),
            c(p, w),
            c(t, E),
            c(t, y),
            c(y, T),
            c(y, P),
            G && G.m(y, null),
            c(y, M),
            c(y, D),
            c(D, C),
            c(C, V),
            c(D, Y),
            c(y, J),
            c(y, N),
            N.innerHTML = Q,
            c(t, X)
        },
        p(F, ne) {
            ne[0] & 32 && s !== (s = F[25] + "") && O(l, s),
            ne[0] & 32 && h !== (h = F[34] + "") && O(m, h),
            ne[0] & 160 && x !== (x = F[7](`main.updates.${F[38].includes("average") ? "average" : "mark"}`) + "") && O(w, x),
            (F[39] === 0 || F[39]) && (F[40] === 0 || F[40]) ? G ? G.p(F, ne) : (G = Kn(F),
            G.c(),
            G.m(y, M)) : G && (G.d(1),
            G = null),
            ne[0] & 32 && I !== (I = F[13](F[39] === 0 || F[39] ? F[39] : F[40]) + "") && O(V, I),
            ne[0] & 32 && te(C, "color", Se(F[39] === 0 || F[39] ? F[39] : F[40]), !1),
            ne[0] & 32 && Q !== (Q = F[14](F[38], F[39], F[40]) + "") && (N.innerHTML = Q)
        },
        d(F) {
            F && H(t),
            G && G.d()
        }
    }
}
function Kn(e) {
    let t, n = e[13](e[40]) + "", r, i, o;
    return {
        c() {
            t = b("div"),
            r = A(n),
            i = S(),
            o = b("div"),
            v(t, "class", "from svelte-f9e7js"),
            v(o, "class", "update-arrow svelte-f9e7js")
        },
        m(s, l) {
            B(s, t, l),
            c(t, r),
            B(s, i, l),
            B(s, o, l),
            o.innerHTML = Qo
        },
        p(s, l) {
            l[0] & 32 && n !== (n = s[13](s[40]) + "") && O(r, n)
        },
        d(s) {
            s && H(t),
            s && H(i),
            s && H(o)
        }
    }
}
function er(e) {
    let t, n = e[38] !== "average-update" && Qn(e);
    return {
        c() {
            n && n.c(),
            t = Ht()
        },
        m(r, i) {
            n && n.m(r, i),
            B(r, t, i)
        },
        p(r, i) {
            r[38] !== "average-update" ? n ? n.p(r, i) : (n = Qn(r),
            n.c(),
            n.m(t.parentNode, t)) : n && (n.d(1),
            n = null)
        },
        d(r) {
            n && n.d(r),
            r && H(t)
        }
    }
}
function tr(e) {
    let t, n, r, i, o = e[7](`main.averages.${e[34]}`) + "", s, l, a, u, f, d, h = e[13](e[35]) + "", m, g, p;
    return {
        c() {
            t = b("div"),
            n = b("div"),
            r = S(),
            i = b("div"),
            s = A(o),
            l = S(),
            a = b("div"),
            u = S(),
            f = b("div"),
            d = b("span"),
            m = A(h),
            g = A("\xA0/ 20"),
            p = S(),
            v(n, "class", "point svelte-f9e7js"),
            v(i, "class", "name svelte-f9e7js"),
            v(a, "class", "point small svelte-f9e7js"),
            v(d, "class", "value svelte-f9e7js"),
            te(d, "color", e[37] === 0 ? Se(e[35]) : "auto", !1),
            v(f, "class", "mark svelte-f9e7js"),
            v(t, "class", "entry svelte-f9e7js")
        },
        m(_, x) {
            B(_, t, x),
            c(t, n),
            c(t, r),
            c(t, i),
            c(i, s),
            c(t, l),
            c(t, a),
            c(t, u),
            c(t, f),
            c(f, d),
            c(d, m),
            c(f, g),
            c(t, p)
        },
        p(_, x) {
            x[0] & 130 && o !== (o = _[7](`main.averages.${_[34]}`) + "") && O(s, o),
            x[0] & 2 && h !== (h = _[13](_[35]) + "") && O(m, h),
            x[0] & 2 && te(d, "color", _[37] === 0 ? Se(_[35]) : "auto", !1)
        },
        d(_) {
            _ && H(t)
        }
    }
}
function nr(e) {
    let t, n, r, i, o = e[31] + "", s, l, a, u, f, d;
    function h() {
        return e[17](e[31])
    }
    return {
        c() {
            t = b("div"),
            n = b("div"),
            r = S(),
            i = b("div"),
            s = A(o),
            l = S(),
            a = b("div"),
            u = S(),
            v(n, "class", "point svelte-f9e7js"),
            v(i, "class", "name svelte-f9e7js"),
            v(a, "class", "arrow svelte-f9e7js"),
            v(t, "class", "entry svelte-f9e7js"),
            ve(t, "clickable", !e[6])
        },
        m(m, g) {
            B(m, t, g),
            c(t, n),
            c(t, r),
            c(t, i),
            c(i, s),
            c(t, l),
            c(t, a),
            a.innerHTML = tl,
            c(t, u),
            f || (d = he(t, "click", h),
            f = !0)
        },
        p(m, g) {
            e = m,
            g[0] & 4 && o !== (o = e[31] + "") && O(s, o),
            g[0] & 64 && ve(t, "clickable", !e[6])
        },
        d(m) {
            m && H(t),
            f = !1,
            d()
        }
    }
}
function rr(e) {
    let t, n = e[7]("main.coefficient") + "", r, i, o = e[13](e[25].coefficient) + "", s;
    return {
        c() {
            t = A(", "),
            r = A(n),
            i = S(),
            s = A(o)
        },
        m(l, a) {
            B(l, t, a),
            B(l, r, a),
            B(l, i, a),
            B(l, s, a)
        },
        p(l, a) {
            a[0] & 128 && n !== (n = l[7]("main.coefficient") + "") && O(r, n),
            a[0] & 1 && o !== (o = l[13](l[25].coefficient) + "") && O(s, o)
        },
        d(l) {
            l && H(t),
            l && H(r),
            l && H(i),
            l && H(s)
        }
    }
}
function il(e) {
    let t, n = e[25].marks, r = [];
    for (let i = 0; i < n.length; i += 1)
        r[i] = sr($n(e, n, i));
    return {
        c() {
            t = b("div");
            for (let i = 0; i < r.length; i += 1)
                r[i].c();
            v(t, "class", "marks svelte-f9e7js")
        },
        m(i, o) {
            B(i, t, o);
            for (let s = 0; s < r.length; s += 1)
                r[s].m(t, null)
        },
        p(i, o) {
            if (o[0] & 8321) {
                n = i[25].marks;
                let s;
                for (s = 0; s < n.length; s += 1) {
                    const l = $n(i, n, s);
                    r[s] ? r[s].p(l, o) : (r[s] = sr(l),
                    r[s].c(),
                    r[s].m(t, null))
                }
                for (; s < r.length; s += 1)
                    r[s].d(1);
                r.length = n.length
            }
        },
        d(i) {
            i && H(t),
            Be(r, i)
        }
    }
}
function sl(e) {
    let t, n = e[7]("main.empty") + "", r;
    return {
        c() {
            t = b("div"),
            r = A(n),
            v(t, "class", "no-marks svelte-f9e7js")
        },
        m(i, o) {
            B(i, t, o),
            c(t, r)
        },
        p(i, o) {
            o[0] & 128 && n !== (n = i[7]("main.empty") + "") && O(r, n)
        },
        d(i) {
            i && H(t)
        }
    }
}
function ir(e) {
    let t, n = e[7]("main.percentage") + "", r, i, o = Math.round(e[28].coefficient * 100) + "", s, l;
    return {
        c() {
            t = A(", "),
            r = A(n),
            i = S(),
            s = A(o),
            l = A("%")
        },
        m(a, u) {
            B(a, t, u),
            B(a, r, u),
            B(a, i, u),
            B(a, s, u),
            B(a, l, u)
        },
        p(a, u) {
            u[0] & 128 && n !== (n = a[7]("main.percentage") + "") && O(r, n),
            u[0] & 1 && o !== (o = Math.round(a[28].coefficient * 100) + "") && O(s, o)
        },
        d(a) {
            a && H(t),
            a && H(r),
            a && H(i),
            a && H(s),
            a && H(l)
        }
    }
}
function sr(e) {
    let t, n, r, i, o, s = e[28].name + "", l, a, u, f, d = e[13](e[28].value) + "", h, m, g, p, _, x = e[7]("main.average") + "", w, E, y = e[13](e[28].classAverage) + "", T, P = !ar(e[25]), M, D, C = P && ir(e);
    return {
        c() {
            t = b("div"),
            n = b("div"),
            r = S(),
            i = b("div"),
            o = b("div"),
            l = A(s),
            a = A(`\xA0:\xA0
                                            `),
            u = b("div"),
            f = b("span"),
            h = A(d),
            m = A("\xA0/ 20"),
            g = S(),
            p = b("div"),
            _ = b("span"),
            _.textContent = "(",
            w = A(x),
            E = A(": "),
            T = A(y),
            C && C.c(),
            M = b("span"),
            M.textContent = ")",
            D = S(),
            v(n, "class", "point svelte-f9e7js"),
            v(o, "class", "name svelte-f9e7js"),
            v(f, "class", "itself"),
            te(f, "color", Se(e[28].value), !1),
            v(u, "class", "value svelte-f9e7js"),
            v(i, "class", "line svelte-f9e7js"),
            v(_, "class", "parenthesis svelte-f9e7js"),
            v(M, "class", "parenthesis svelte-f9e7js"),
            v(p, "class", "class-average svelte-f9e7js"),
            v(t, "class", "mark svelte-f9e7js")
        },
        m(I, V) {
            B(I, t, V),
            c(t, n),
            c(t, r),
            c(t, i),
            c(i, o),
            c(o, l),
            c(i, a),
            c(i, u),
            c(u, f),
            c(f, h),
            c(u, m),
            c(t, g),
            c(t, p),
            c(p, _),
            c(p, w),
            c(p, E),
            c(p, T),
            C && C.m(p, null),
            c(p, M),
            c(t, D)
        },
        p(I, V) {
            V[0] & 1 && s !== (s = I[28].name + "") && O(l, s),
            V[0] & 1 && d !== (d = I[13](I[28].value) + "") && O(h, d),
            V[0] & 1 && te(f, "color", Se(I[28].value), !1),
            V[0] & 128 && x !== (x = I[7]("main.average") + "") && O(w, x),
            V[0] & 1 && y !== (y = I[13](I[28].classAverage) + "") && O(T, y),
            V[0] & 1 && (P = !ar(I[25])),
            P ? C ? C.p(I, V) : (C = ir(I),
            C.c(),
            C.m(p, M)) : C && (C.d(1),
            C = null)
        },
        d(I) {
            I && H(t),
            C && C.d()
        }
    }
}
function or(e) {
    let t, n, r, i, o = e[25].id + "", s, l, a, u, f, d = e[25].name + "", h, m, g, p, _, x = e[13](e[25].average) + "", w, E, y, T, P, M = e[7]("main.promo") + "", D, C, I = e[13](e[25].classAverage) + "", V, Y, J, N, Q, X, G = e[25].coefficient !== 1 && rr(e);
    function F(R, me) {
        return R[25].marks.length === 0 ? sl : il
    }
    let ne = F(e)
      , ee = ne(e);
    return {
        c() {
            t = b("div"),
            n = b("div"),
            r = b("div"),
            i = b("div"),
            s = A(o),
            l = S(),
            a = b("div"),
            u = S(),
            f = b("div"),
            h = A(d),
            m = S(),
            g = b("div"),
            p = b("div"),
            _ = b("span"),
            w = A(x),
            E = A("\xA0/ 20"),
            y = S(),
            T = b("div"),
            P = A("("),
            D = A(M),
            C = A(": "),
            V = A(I),
            G && G.c(),
            Y = A(")"),
            J = S(),
            N = b("hr"),
            Q = S(),
            ee.c(),
            X = S(),
            v(i, "class", "id svelte-f9e7js"),
            v(a, "class", "point svelte-f9e7js"),
            v(f, "class", "name svelte-f9e7js"),
            v(r, "class", "top svelte-f9e7js"),
            v(_, "class", "value svelte-f9e7js"),
            te(_, "color", Se(e[25].average), !1),
            v(p, "class", "average svelte-f9e7js"),
            v(T, "class", "class-average svelte-f9e7js"),
            v(g, "class", "bottom svelte-f9e7js"),
            v(N, "class", "bottom-line svelte-f9e7js"),
            v(n, "class", "info svelte-f9e7js"),
            v(t, "class", "subject card svelte-f9e7js")
        },
        m(R, me) {
            B(R, t, me),
            c(t, n),
            c(n, r),
            c(r, i),
            c(i, s),
            c(r, l),
            c(r, a),
            c(r, u),
            c(r, f),
            c(f, h),
            c(n, m),
            c(n, g),
            c(g, p),
            c(p, _),
            c(_, w),
            c(p, E),
            c(g, y),
            c(g, T),
            c(T, P),
            c(T, D),
            c(T, C),
            c(T, V),
            G && G.m(T, null),
            c(T, Y),
            c(n, J),
            c(n, N),
            c(t, Q),
            ee.m(t, null),
            c(t, X)
        },
        p(R, me) {
            me[0] & 1 && o !== (o = R[25].id + "") && O(s, o),
            me[0] & 1 && d !== (d = R[25].name + "") && O(h, d),
            me[0] & 1 && x !== (x = R[13](R[25].average) + "") && O(w, x),
            me[0] & 1 && te(_, "color", Se(R[25].average), !1),
            me[0] & 128 && M !== (M = R[7]("main.promo") + "") && O(D, M),
            me[0] & 1 && I !== (I = R[13](R[25].classAverage) + "") && O(V, I),
            R[25].coefficient !== 1 ? G ? G.p(R, me) : (G = rr(R),
            G.c(),
            G.m(T, Y)) : G && (G.d(1),
            G = null),
            ne === (ne = F(R)) && ee ? ee.p(R, me) : (ee.d(1),
            ee = ne(R),
            ee && (ee.c(),
            ee.m(t, X)))
        },
        d(R) {
            R && H(t),
            G && G.d(),
            ee.d()
        }
    }
}
function lr(e) {
    let t, n, r, i = e[22].name + "", o, s, l, a, u, f, d = e[13](e[22].average) + "", h, m, g, p, _, x, w = e[7]("main.promo") + "", E, y, T = e[13](e[22].classAverage) + "", P, M, D, C, I, V, Y = e[22].subjects, J = [];
    for (let N = 0; N < Y.length; N += 1)
        J[N] = or(Fn(e, Y, N));
    return {
        c() {
            t = b("div"),
            n = b("div"),
            r = b("div"),
            o = A(i),
            s = S(),
            l = b("div"),
            a = S(),
            u = b("div"),
            f = b("span"),
            h = A(d),
            m = S(),
            g = b("span"),
            g.textContent = "\xA0/ 20",
            p = S(),
            _ = b("span"),
            x = A("("),
            E = A(w),
            y = A(": "),
            P = A(T),
            M = A(")"),
            D = S(),
            C = b("hr"),
            I = S();
            for (let N = 0; N < J.length; N += 1)
                J[N].c();
            V = Ht(),
            v(r, "class", "name svelte-f9e7js"),
            v(l, "class", "point svelte-f9e7js"),
            v(f, "class", "average svelte-f9e7js"),
            te(f, "color", Se(e[22].average), !1),
            v(g, "class", "max svelte-f9e7js"),
            v(_, "class", "class-average svelte-f9e7js"),
            v(u, "class", "bottom svelte-f9e7js"),
            v(n, "class", "text svelte-f9e7js"),
            v(C, "class", "bottom-line svelte-f9e7js"),
            v(t, "class", "header module svelte-f9e7js")
        },
        m(N, Q) {
            B(N, t, Q),
            c(t, n),
            c(n, r),
            c(r, o),
            c(n, s),
            c(n, l),
            c(n, a),
            c(n, u),
            c(u, f),
            c(f, h),
            c(u, m),
            c(u, g),
            c(u, p),
            c(u, _),
            c(_, x),
            c(_, E),
            c(_, y),
            c(_, P),
            c(_, M),
            c(t, D),
            c(t, C),
            B(N, I, Q);
            for (let X = 0; X < J.length; X += 1)
                J[X].m(N, Q);
            B(N, V, Q)
        },
        p(N, Q) {
            if (Q[0] & 1 && i !== (i = N[22].name + "") && O(o, i),
            Q[0] & 1 && d !== (d = N[13](N[22].average) + "") && O(h, d),
            Q[0] & 1 && te(f, "color", Se(N[22].average), !1),
            Q[0] & 128 && w !== (w = N[7]("main.promo") + "") && O(E, w),
            Q[0] & 1 && T !== (T = N[13](N[22].classAverage) + "") && O(P, T),
            Q[0] & 8321) {
                Y = N[22].subjects;
                let X;
                for (X = 0; X < Y.length; X += 1) {
                    const G = Fn(N, Y, X);
                    J[X] ? J[X].p(G, Q) : (J[X] = or(G),
                    J[X].c(),
                    J[X].m(V.parentNode, V))
                }
                for (; X < J.length; X += 1)
                    J[X].d(1);
                J.length = Y.length
            }
        },
        d(N) {
            N && H(t),
            N && H(I),
            Be(J, N),
            N && H(V)
        }
    }
}
function ol(e) {
    let t, n, r, i, o;
    document.title = t = Ye(e[7]("main.title"));
    let s = e[8] === "A" && zn(e)
      , l = e[8] === "B" && Wn(e);
    return {
        c() {
            n = S(),
            r = b("div"),
            s && s.c(),
            i = S(),
            l && l.c(),
            v(r, "id", "main"),
            v(r, "class", "svelte-f9e7js")
        },
        m(a, u) {
            B(a, n, u),
            B(a, r, u),
            s && s.m(r, null),
            c(r, i),
            l && l.m(r, null),
            o = !0
        },
        p(a, u) {
            (!o || u[0] & 128) && t !== (t = Ye(a[7]("main.title"))) && (document.title = t),
            a[8] === "A" ? s ? (s.p(a, u),
            u[0] & 256 && U(s, 1)) : (s = zn(a),
            s.c(),
            U(s, 1),
            s.m(r, i)) : s && (ke(),
            q(s, 1, 1, () => {
                s = null
            }
            ),
            Te()),
            a[8] === "B" ? l ? (l.p(a, u),
            u[0] & 256 && U(l, 1)) : (l = Wn(a),
            l.c(),
            U(l, 1),
            l.m(r, null)) : l && (ke(),
            q(l, 1, 1, () => {
                l = null
            }
            ),
            Te())
        },
        i(a) {
            o || (U(s),
            U(l),
            o = !0)
        },
        o(a) {
            q(s),
            q(l),
            o = !1
        },
        d(a) {
            a && H(n),
            a && H(r),
            s && s.d(),
            l && l.d()
        }
    }
}
function Se(e) {
    if (e === .01)
        return "#666670";
    if (e === null)
        return "auto";
    const t = [255, 206, 40]
      , n = e >= 10 ? t : [227, 14, 14]
      , r = e < 10 ? t : [68, 183, 50];
    e >= 10 && (e -= 10);
    let i = "#";
    for (let o = 0; o < 3; o++)
        i += Math.round(n[o] + (r[o] - n[o]) * (e / 10)).toString(16).padStart(2, "0");
    return i
}
function ar(e) {
    return e.marks.every(t => t.coefficient === e.marks[0].coefficient)
}
const ur = e => e.type !== "average-update";
function ll(e, t, n) {
    let r, i, o;
    Le(e, ht, C => n(7, r = C)),
    Le(e, dt, C => n(9, o = C));
    const {state: s, toggle: l, outro: a} = Wr();
    Le(e, s, C => n(8, i = C));
    let u, f, d, h, m, g, p = !1;
    un( () => x().catch(_));
    function _(C) {
        console.error("[MainPage.svelte] Error while loading marks"),
        console.error(C),
        Ne.set({
            title: r("app.error.title"),
            content: r("app.error.content.text", {
                values: {
                    error: C.message,
                    link: `<a class="link colored" href="${We.repository}/issues" target="_blank">${r("app.error.content.link")}</a>`
                }
            }),
            button: r("app.error.button"),
            width: 500,
            center: !0
        })
    }
    async function x() {
        n(3, h = await Go()),
        n(4, m = Ae(Ae({}, Object.fromEntries(h.map(C => [C.id, ((C.id === ut ? C.values.find(I => I.name.includes("STAGE")) || C.values.at(-2) : C.values.at(-1)) || C.values[0]).value]))), JSON.parse(localStorage.filters || "{}"))),
        await w()
    }
    async function w() {
        const C = await di(m);
        n(0, u = C.marks),
        n(1, f = {
            student: C.average,
            promo: C.classAverage
        }),
        n(5, g = await $o(m, u)),
        n(2, d = [gn, ...C.fromReport ? [Jr] : []]),
        u.every(I => I.subjects.every(V => V.marks.every(Y => Y.value === void 0))) && !u.every(I => I.subjects.every(V => V.marks.length === 0)) && setTimeout( () => Ne.set({
            title: r("app.noMarks.title"),
            content: r("app.noMarks.content.text"),
            button: r("app.noMarks.ok"),
            width: 400,
            center: !0
        }), 250),
        l()
    }
    function E(C, I) {
        if (n(4, m[C] = I, m),
        C === Ot) {
            n(4, m[ut] = null, m);
            return
        }
        localStorage.filters = JSON.stringify(m),
        l(),
        w().catch(_)
    }
    function y(C) {
        return C === .01 ? "Abs." : C !== 0 && !C ? `--${r("app.separator")}--` : C.toFixed(2).replace(".", r("app.separator"))
    }
    function T(C, I, V) {
        switch (C) {
        case "average-update":
        case "update":
            return I > V ? Ko : el;
        case "add":
            return nl;
        case "remove":
            return rl
        }
    }
    function P(C) {
        p || (n(6, p = !0),
        Mo(C, m).catch(I => {
            console.error("[MainPage.svelte] Error while downloading document"),
            console.error(I)
        }
        ).finally( () => {
            n(6, p = !1)
        }
        ))
    }
    return [u, f, d, h, m, g, p, r, i, o, s, a, E, y, T, P, (C, I) => E(C, I.detail.value), C => P(C)]
}
class al extends He {
    constructor(t) {
        super();
        Pe(this, t, ll, ol, Ce, {}, null, [-1, -1])
    }
}
function ul() {
    return !!mi()
}
function fl() {
    return zr(/<td class="text hidden-phone " ?>([^<]*)<\/td>/, 1, e => e.replace("&nbsp;", " "))
}
function mi() {
    return zr(/index\.php\?com=login&job=disconnect-user&token=[^"]*/)
}
function cl(e, t, n, r) {
    if (typeof Object.assign != "function") {
        this.render_png = function() {
            return null
        }
        ;
        return
    }
    this.w = e,
    this.h = t,
    this.stops = n,
    this.defs = {
        cover: 1,
        white: .015,
        black: .03,
        canvas_fallback: !1
    },
    this.opts = Object.assign(this.defs, r),
    this.canvas = null,
    this.ctx_2d = null,
    this.ctx_gl = null,
    this.program = null,
    this.v_shader = null,
    this.f_shader = null,
    this.render = function() {
        var i;
        return typeof Object.assign != "function" || (i = document.createElement("canvas"),
        !i) ? null : (i.width = this.w,
        i.height = this.h,
        this.canvas = i,
        this.ctx_gl = i.getContext("webgl"),
        this.ctx_gl && this.render_webgl() ? i : this.opts.canvas_fallback ? (this.ctx_2d = i.getContext("2d"),
        this.ctx_2d && this.render_basic() ? i : null) : null)
    }
    ,
    this.render_png = function() {
        if (!this.render())
            return null;
        var i = this.canvas.toDataURL("image/png");
        return "url(" + i + ")"
    }
    ,
    this.render_webgl = function() {
        var i = this.opts
          , o = this.canvas
          , s = this.ctx_gl;
        if (!s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT))
            return !1;
        var l = this.parseStops(this.stops);
        if (!l)
            return !1;
        this.initShaders();
        var a = s.createShader(s.VERTEX_SHADER);
        if (s.shaderSource(a, this.v_shader),
        s.compileShader(a),
        !s.getShaderParameter(a, s.COMPILE_STATUS))
            return console.log(s.getShaderInfoLog(a)),
            !1;
        var u = s.createShader(s.FRAGMENT_SHADER);
        if (s.shaderSource(u, this.f_shader),
        s.compileShader(u),
        !s.getShaderParameter(u, s.COMPILE_STATUS))
            return console.log(s.getShaderInfoLog(u)),
            !1;
        var f = s.createProgram();
        if (s.attachShader(f, a),
        s.attachShader(f, u),
        s.linkProgram(f),
        !s.getProgramParameter(f, s.LINK_STATUS))
            return console.log(s.getProgramInfoLog(f)),
            !1;
        this.program = f;
        var d = o.width < o.height ? 1 : o.width / o.height
          , h = o.width > o.height ? 1 : o.height / o.width
          , m = new Float32Array([-d, h, d, h, d, -h, -d, h, d, -h, -d, -h])
          , g = s.createBuffer();
        s.bindBuffer(s.ARRAY_BUFFER, g),
        s.bufferData(s.ARRAY_BUFFER, m, s.STATIC_DRAW);
        var p = 2
          , _ = m.length / p;
        s.useProgram(f);
        var x = {
            u_canvas: [o.width, o.height],
            u_cover: i.cover,
            u_white: i.white,
            u_black: i.black,
            u_stops: l
        };
        this.createUniforms(x);
        var w = s.getAttribLocation(f, "a_vertex_pos");
        return s.enableVertexAttribArray(w),
        s.vertexAttribPointer(w, p, s.FLOAT, !1, 0, 0),
        s.drawArrays(s.TRIANGLES, 0, _),
        !0
    }
    ,
    this.render_basic = function() {
        var i = this.opts
          , o = this.stops
          , s = this.canvas
          , l = this.ctx_2d
          , a = s.width
          , u = s.height
          , f = l.createLinearGradient(0, 0, 0, u);
        for (var d in o)
            f.addColorStop(d, o[d]);
        l.fillStyle = f,
        l.fillRect(0, 0, a, u);
        for (var h = 0; h < a; h++)
            for (var m = 0; m < u; m++)
                if (!(i.cover < Math.random())) {
                    var g = 1 - 2 * Math.random(), s;
                    if (g < 0) {
                        if (!i.black)
                            continue;
                        s = "rgba(0,0,0," + -g * i.black + ")"
                    } else {
                        if (!i.white)
                            continue;
                        s = "rgba(255,255,255," + g * i.white + ")"
                    }
                    l.fillStyle = s,
                    l.fillRect(h, m, 1, 1)
                }
        return !0
    }
    ,
    this.parseStops = function(i) {
        var o = [];
        for (var s in i) {
            var l = i[s].match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
            if (!l)
                return !1;
            for (var a = [], u = 0; u < 3; u++)
                a.push(parseInt(l[u + 1], 16) / 255);
            a.push(s * 1),
            o.push(a)
        }
        o.sort(function(d, h) {
            return d[3] - h[3]
        });
        var f = [];
        return o.forEach(function(d) {
            f = f.concat(d)
        }),
        f
    }
    ,
    this.initShaders = function() {
        this.v_shader = "                                              			attribute vec2 a_vertex_pos;			       									       			void main()					       			{						       				gl_Position = vec4(a_vertex_pos, 0.0, 1.0);    			}						       		",
        this.f_shader = "                                                                                 			precision highp float;									  														  			uniform vec2  u_canvas;									  			uniform vec4  u_stops[8];								  			uniform float u_cover;									  			uniform float u_black;									  			uniform float u_white;									  														  			vec4 cw = vec4(1.,1.,1.,1.);								  			vec4 cb = vec4(0.,0.,0.,1.);								  														  			float rand_1(vec2 xy) { return fract(sin(dot(xy, vec2(12.9898, 78.233))) * 43758.54); }	  			float rand_2(vec2 xy) { return fract(cos(dot(xy, vec2(78.233, 12.9898))) * 43758.54); }	  														  			vec4 grad(float f)									  			{											  				vec4  cl, cr, c;								  														  				cl = u_stops[0]; /* left */							  														  				if (cl.w < f)									  				{										  					for (int i=1; i<8; i++)							  					{									  						if (u_stops[i].w == 0.)						  							break;							  														  						cr = u_stops[i]; /* right */					  														  						if (f <= cr.w)							  							break;							  														  						cl = cr;							  					}									  				}										  														  				if (f <= cl.w) c = cl; else							  				if (f >= cr.w) c = cr; else							  					       c = (cr - cl) * (f - cl.w) / (cr.w - cl.w) + cl;			  														  				return vec4(c.x, c.y, c.z, 1);							  			}											  														  			void main()										  			{											  				vec2 xy = gl_FragCoord.xy/u_canvas;						  				vec4 c = grad(1. - xy.y);							  														  				if (u_cover < rand_1(xy))							  				{										  					gl_FragColor = c;							  					return;									  				}										  														  				float f = 1. - 2.*rand_2(xy);							  				vec4  m;									  														  				if (f < 0.)									  				{										  					f = -f*u_black;								  					m = cb;									  				}										  				else										  				{										  					f = f*u_white;								  					m = cw;									  				}										  														  				gl_FragColor = c * (1.-f) + m * f;						  			}											  		"
    }
    ,
    this.createUniforms = function(i) {
        var o = this.ctx_gl
          , s = this.program;
        for (var l in i) {
            var a = i[l]
              , u = o.getUniformLocation(s, l);
            typeof a == "number" ? o.uniform1f(u, a) : Array.isArray(a) && (a.length == 2 ? o.uniform2fv(u, a) : a.length % 4 == 0 && o.uniform4fv(u, a))
        }
    }
}
var hl = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="517" height="402" viewBox="0 0 517 402" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(1,0,0,1,-105.994,-432.755)">
        <path d="M622.959,432.755L499.959,834.755L105.994,696.755L622.959,432.755Z" style="fill:url(#_Linear1);"/>
    </g>
    <g transform="matrix(0.997024,0,0,1.14602,-97.0293,-534.265)">
        <path d="M492.461,816.973L615.828,466.193L168.497,665.143L492.461,816.973Z" style="fill:url(#_Linear2);"/>
    </g>
    <defs>
        <linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-357.189,-156.656,156.656,-357.189,499.959,834.755)"><stop offset="0" style="stop-color:rgb(49,66,222);stop-opacity:1"/><stop offset="1" style="stop-color:rgb(20,12,124);stop-opacity:1"/></linearGradient>
        <linearGradient id="_Linear2" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-124.762,-268.039,308.094,-108.541,505.5,838.787)"><stop offset="0" style="stop-color:rgb(50,71,255);stop-opacity:1"/><stop offset="1" style="stop-color:rgb(22,11,168);stop-opacity:1"/></linearGradient>
    </defs>
</svg>
`
  , dl = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="676" height="303" viewBox="0 0 676 303" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(1,0,0,1,-1435,-614)">
        <path d="M1741.5,614L2111,854L1435,917L1741.5,614Z" style="fill:url(#_Linear1);"/>
    </g>
    <g transform="matrix(1,0,0,1,-1480,-690)">
        <path d="M1786.5,690L2156,930L1555,986L1786.5,690Z" style="fill:url(#_Linear2);"/>
    </g>
    <defs>
        <linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-269,316.5,-316.5,-269,1754,593.5)"><stop offset="0" style="stop-color:rgb(49,66,222);stop-opacity:1"/><stop offset="1" style="stop-color:rgb(20,12,124);stop-opacity:1"/></linearGradient>
        <linearGradient id="_Linear2" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(41.8528,307.949,-307.949,41.8528,1782,653)"><stop offset="0" style="stop-color:rgb(50,71,255);stop-opacity:1"/><stop offset="1" style="stop-color:rgb(22,11,168);stop-opacity:1"/></linearGradient>
    </defs>
</svg>
`;
function ml(e) {
    let t, n, r, i;
    return {
        c() {
            t = b("div"),
            n = b("div"),
            r = S(),
            i = b("div"),
            v(n, "id", "top-triangle"),
            v(n, "class", "triangle svelte-w6yvss"),
            v(i, "id", "bottom-triangle"),
            v(i, "class", "triangle svelte-w6yvss"),
            v(t, "id", "background"),
            v(t, "class", "svelte-w6yvss")
        },
        m(o, s) {
            B(o, t, s),
            c(t, n),
            n.innerHTML = hl,
            c(t, r),
            c(t, i),
            i.innerHTML = dl,
            e[1](t)
        },
        p: K,
        i: K,
        o: K,
        d(o) {
            o && H(t),
            e[1](null)
        }
    }
}
function pl(e, t, n) {
    let r;
    un( () => {
        const o = new cl(50,Math.max(window.visualViewport.height, 1080),["#343D55", "#0e1016"]);
        n(0, r.style.backgroundImage = o.render_png(), r)
    }
    );
    function i(o) {
        ot[o ? "unshift" : "push"]( () => {
            r = o,
            n(0, r)
        }
        )
    }
    return [r, i]
}
class gl extends He {
    constructor(t) {
        super();
        Pe(this, t, pl, ml, Ce, {})
    }
}
function vl(e) {
    let t, n, r, i;
    const o = e[4].default
      , s = Li(o, e, e[3], null);
    let l = [{
        class: "link"
    }, {
        href: e[0]
    }, e[2]]
      , a = {};
    for (let u = 0; u < l.length; u += 1)
        a = sn(a, l[u]);
    return {
        c() {
            t = b("a"),
            s && s.c(),
            wn(t, a)
        },
        m(u, f) {
            B(u, t, f),
            s && s.m(t, null),
            n = !0,
            r || (i = he(t, "click", function() {
                Je(e[1]) && e[1].apply(this, arguments)
            }),
            r = !0)
        },
        p(u, [f]) {
            e = u,
            s && s.p && (!n || f & 8) && Si(s, o, e, e[3], n ? xi(o, e[3], f, null) : Ci(e[3]), null),
            wn(t, a = Lr(l, [{
                class: "link"
            }, (!n || f & 1) && {
                href: e[0]
            }, f & 4 && e[2]]))
        },
        i(u) {
            n || (U(s, u),
            n = !0)
        },
        o(u) {
            q(s, u),
            n = !1
        },
        d(u) {
            u && H(t),
            s && s.d(u),
            r = !1,
            i()
        }
    }
}
function _l(e, t, n) {
    let r, {$$slots: i={}, $$scope: o} = t, {to: s="#"} = t, {exec: l= () => {}
    } = t;
    return e.$$set = a => {
        "to"in a && n(0, s = a.to),
        "exec"in a && n(1, l = a.exec),
        "$$scope"in a && n(3, o = a.$$scope)
    }
    ,
    e.$$.update = () => {
        e.$$.dirty & 1 && n(2, r = s.startsWith("http") ? {
            rel: "external",
            target: "_blank"
        } : {})
    }
    ,
    [s, l, r, o, i]
}
class pi extends He {
    constructor(t) {
        super();
        Pe(this, t, _l, vl, Ce, {
            to: 0,
            exec: 1
        })
    }
}
function fr(e, t, n) {
    const r = e.slice();
    return r[2] = t[n].label,
    r[3] = Pi(t[n], ["label"]),
    r[5] = n,
    r
}
function bl(e) {
    let t;
    return {
        c() {
            t = A("\xA0\xB7\xA0")
        },
        m(n, r) {
            B(n, t, r)
        },
        d(n) {
            n && H(t)
        }
    }
}
function yl(e) {
    let t = e[2] + "", n;
    return {
        c() {
            n = A(t)
        },
        m(r, i) {
            B(r, n, i)
        },
        p: K,
        d(r) {
            r && H(n)
        }
    }
}
function cr(e, t) {
    let n, r, i, o, s = t[5] && bl();
    const l = [t[3]];
    let a = {
        $$slots: {
            default: [yl]
        },
        $$scope: {
            ctx: t
        }
    };
    for (let u = 0; u < l.length; u += 1)
        a = sn(a, l[u]);
    return i = new pi({
        props: a
    }),
    {
        key: e,
        first: null,
        c() {
            n = Ht(),
            s && s.c(),
            r = S(),
            xe(i.$$.fragment),
            this.first = n
        },
        m(u, f) {
            B(u, n, f),
            s && s.m(u, f),
            B(u, r, f),
            _e(i, u, f),
            o = !0
        },
        p(u, f) {
            t = u;
            const d = f & 2 ? Lr(l, [Xi(t[3])]) : {};
            f & 64 && (d.$$scope = {
                dirty: f,
                ctx: t
            }),
            i.$set(d)
        },
        i(u) {
            o || (U(i.$$.fragment, u),
            o = !0)
        },
        o(u) {
            q(i.$$.fragment, u),
            o = !1
        },
        d(u) {
            u && H(n),
            s && s.d(u),
            u && H(r),
            be(i, u)
        }
    }
}
function wl(e) {
    let t = e[0]("footer.copyright.license.link") + "", n;
    return {
        c() {
            n = A(t)
        },
        m(r, i) {
            B(r, n, i)
        },
        p(r, i) {
            i & 1 && t !== (t = r[0]("footer.copyright.license.link") + "") && O(n, t)
        },
        d(r) {
            r && H(n)
        }
    }
}
function El(e) {
    let t, n, r = [], i = new Map, o, s, l = e[0]("footer.copyright.text") + "", a, u, f, d = e[0]("footer.copyright.license.prefix") + "", h, m, g, p, _ = e[1];
    const x = w => w[2];
    for (let w = 0; w < _.length; w += 1) {
        let E = fr(e, _, w)
          , y = x(E);
        i.set(y, r[w] = cr(y, E))
    }
    return g = new pi({
        props: {
            to: We.repository + "/blob/master/LICENSE",
            $$slots: {
                default: [wl]
            },
            $$scope: {
                ctx: e
            }
        }
    }),
    {
        c() {
            t = b("div"),
            n = b("div");
            for (let w = 0; w < r.length; w += 1)
                r[w].c();
            o = S(),
            s = b("p"),
            a = A(l),
            u = b("br"),
            f = S(),
            h = A(d),
            m = S(),
            xe(g.$$.fragment),
            v(n, "id", "links"),
            v(n, "class", "svelte-10z54c5"),
            v(s, "class", "subtext"),
            v(t, "id", "footer"),
            v(t, "class", "svelte-10z54c5")
        },
        m(w, E) {
            B(w, t, E),
            c(t, n);
            for (let y = 0; y < r.length; y += 1)
                r[y].m(n, null);
            c(t, o),
            c(t, s),
            c(s, a),
            c(s, u),
            c(s, f),
            c(s, h),
            c(s, m),
            _e(g, s, null),
            p = !0
        },
        p(w, [E]) {
            E & 2 && (_ = w[1],
            ke(),
            r = Vi(r, E, x, 1, w, _, i, n, $i, cr, null, fr),
            Te()),
            (!p || E & 1) && l !== (l = w[0]("footer.copyright.text") + "") && O(a, l),
            (!p || E & 1) && d !== (d = w[0]("footer.copyright.license.prefix") + "") && O(h, d);
            const y = {};
            E & 65 && (y.$$scope = {
                dirty: E,
                ctx: w
            }),
            g.$set(y)
        },
        i(w) {
            if (!p) {
                for (let E = 0; E < _.length; E += 1)
                    U(r[E]);
                U(g.$$.fragment, w),
                p = !0
            }
        },
        o(w) {
            for (let E = 0; E < r.length; E += 1)
                q(r[E]);
            q(g.$$.fragment, w),
            p = !1
        },
        d(w) {
            w && H(t);
            for (let E = 0; E < r.length; E += 1)
                r[E].d();
            be(g)
        }
    }
}
function Ll(e) {
    e.preventDefault(),
    localStorage.clear(),
    window.location.reload()
}
function xl(e, t, n) {
    let r;
    Le(e, ht, o => n(0, r = o));
    const i = [{
        label: r("footer.links.coefficients"),
        to: `${We.repository}/tree/master/src/lib/pegasus/coefficients`
    }, {
        label: r("footer.links.sources"),
        to: We.repository
    }, {
        label: r("footer.links.reset"),
        exec: Ll
    }];
    return [r, i]
}
class Sl extends He {
    constructor(t) {
        super();
        Pe(this, t, xl, El, Ce, {})
    }
}
var Cl = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="482px" height="125px" viewBox="0 0 482 125" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Logo</title>
    <defs>
        <linearGradient x1="50%" y1="-10.424156%" x2="50%" y2="100%" id="linearGradient-1">
            <stop stop-color="#343D55" offset="0%"></stop>
            <stop stop-color="#151925" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="-10.424156%" x2="50%" y2="100%" id="linearGradient-2">
            <stop stop-color="#343D55" offset="0%"></stop>
            <stop stop-color="#151925" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="-18.5745431%" x2="50%" y2="100%" id="linearGradient-3">
            <stop stop-color="#C1C1C1" offset="0%"></stop>
            <stop stop-color="#8E8E8E" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-4">
            <stop stop-color="#3247FF" offset="0%"></stop>
            <stop stop-color="#160BA8" offset="100%"></stop>
        </linearGradient>
        <rect id="path-5" x="0" y="0" width="76.3538979" height="77.3555556" rx="7.21111111"></rect>
        <linearGradient x1="50%" y1="-10.424156%" x2="50%" y2="100%" id="linearGradient-7">
            <stop stop-color="#343D55" offset="0%"></stop>
            <stop stop-color="#151925" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Login" transform="translate(-901.000000, -93.000000)">
            <g id="Content" transform="translate(840.000000, 0.000000)">
                <g id="Logo" transform="translate(67.000000, 99.000000)">
                    <g id="Title" transform="translate(154.727374, 8.522222)" fill-rule="nonzero">
                        <path d="M10.0789332,91.7777778 L10.0789332,80.0721778 L18.3310598,80.0721778 C29.1659131,80.0721778 36.2841597,72.1425778 36.2841597,62.3249778 C36.2841597,52.5703111 29.1659131,44.5777778 18.3310598,44.5777778 L0,44.5777778 L0,91.7777778 L10.0789332,91.7777778 Z M17.5751398,71.7020444 L10.0789332,71.7020444 L10.0789332,52.9479111 L17.5751398,52.9479111 C22.8665798,52.9479111 26.2052264,57.2273778 26.2052264,62.3249778 C26.2052264,67.4855111 22.8665798,71.7020444 17.5751398,71.7020444 Z M79.0577375,91.7777778 L79.0577375,83.4076444 L54.9942844,83.4076444 L54.9942844,71.6391111 L73.7662975,71.6391111 L73.7662975,63.2060444 L54.9942844,63.2060444 L54.9942844,52.9479111 L77.9238575,52.9479111 L77.9238575,44.5777778 L44.9153511,44.5777778 L44.9153511,91.7777778 L79.0577375,91.7777778 Z M108.161762,92.3441778 C115.280009,92.3441778 120.886415,89.3233778 123.595129,84.5404444 L123.595129,91.7777778 L133.674062,91.7777778 L133.674062,64.6535111 L112.130342,64.6535111 L112.130342,72.3943111 L123.091182,72.3943111 C123.091182,79.5057778 117.106815,83.9740444 109.358635,83.9740444 C99.7206555,83.9740444 95.2481289,76.2961778 95.2481289,68.1777778 C95.2481289,60.0593778 99.7206555,52.4444444 109.106662,52.4444444 C114.461095,52.4444444 119.248589,55.8428444 121.453355,58.9895111 L128.067655,52.3815111 C123.154175,46.9063111 116.161915,44.0743111 109.106662,44.0743111 C95.6890822,44.0743111 85.1691957,54.5212444 85.1691957,68.1777778 C85.1691957,81.8972444 95.3741156,92.3441778 108.161762,92.3441778 Z M150.305407,91.7777778 L153.833033,82.9041778 L172.605046,82.9041778 L176.132673,91.7777778 L186.022626,91.7777778 L167.250613,44.5777778 L159.187467,44.5777778 L140.415453,91.7777778 L150.305407,91.7777778 Z M169.203406,74.5340444 L157.234673,74.5340444 L163.21904,59.5559111 L169.203406,74.5340444 Z M210.843104,92.3441778 C219.725164,92.3441778 227.788311,88.0017778 227.788311,78.7505778 C227.788311,70.9468444 221.111018,67.2337778 212.039978,63.8983111 C205.740644,61.5697778 203.346898,59.7447111 203.346898,56.9127111 C203.346898,52.9479111 207.882418,52.4444444 209.520244,52.4444444 C214.874678,52.4444444 219.977138,55.7799111 222.181904,57.8567111 L228.229264,51.5004444 C224.008711,47.1580444 217.331418,44.0743111 209.583238,44.0743111 C201.331111,44.0743111 193.267964,48.5425778 193.267964,57.1015111 C193.267964,64.7793778 201.394104,68.3665778 206.559558,70.6321778 C212.795898,73.4012444 217.709378,74.5969778 217.709378,78.7505778 C217.709378,82.4007111 214.244744,83.9740444 210.213171,83.9740444 C204.858738,83.9740444 200.134238,80.1351111 197.488518,77.5548444 L190.874218,84.0999111 C195.913684,89.5121778 203.157918,92.3441778 210.843104,92.3441778 Z M256.451382,92.3441778 C272.829649,92.3441778 275.916322,80.7015111 275.916322,72.9607111 L275.916322,44.5777778 L265.837389,44.5777778 L265.837389,72.9607111 C265.837389,75.2892444 265.459429,83.9740444 256.451382,83.9740444 C247.533416,83.9740444 246.950318,75.462072 246.939548,73.032459 L246.939389,44.5777778 L236.860456,44.5777778 L236.860456,72.9607111 C236.860456,80.7015111 240.136109,92.3441778 256.451382,92.3441778 Z M303.886467,92.3441778 C312.768526,92.3441778 320.831673,88.0017778 320.831673,78.7505778 C320.831673,70.9468444 314.15438,67.2337778 305.08334,63.8983111 C298.784007,61.5697778 296.39026,59.7447111 296.39026,56.9127111 C296.39026,52.9479111 300.92578,52.4444444 302.563607,52.4444444 C307.91804,52.4444444 313.0205,55.7799111 315.225266,57.8567111 L321.272626,51.5004444 C317.052073,47.1580444 310.37478,44.0743111 302.6266,44.0743111 C294.374473,44.0743111 286.311327,48.5425778 286.311327,57.1015111 C286.311327,64.7793778 294.437467,68.3665778 299.60292,70.6321778 C305.83926,73.4012444 310.75274,74.5969778 310.75274,78.7505778 C310.75274,82.4007111 307.288106,83.9740444 303.256533,83.9740444 C297.9021,83.9740444 293.1776,80.1351111 290.53188,77.5548444 L283.91758,84.0999111 C288.957047,89.5121778 296.20128,92.3441778 303.886467,92.3441778 Z" id="PEGASUS" fill="url(#linearGradient-1)"></path>
                        <path d="M6.69304161,28.8444444 L6.69304161,0 L0.78741666,0 L0.78741666,28.8444444 L6.69304161,28.8444444 Z M19.0651296,28.8444444 L19.0651296,17.5408846 C19.0651296,14.6386192 20.0858549,13.4166127 22.4413748,13.4166127 C24.7183774,13.4166127 25.81762,14.6386192 25.81762,17.5408846 L25.81762,28.8444444 L31.6279025,28.8444444 L31.5886438,17.1590076 C31.5886438,11.7363538 29.3508999,9.17777778 24.7183774,9.17777778 C22.6376681,9.17777778 20.3214069,9.97971953 19.0651296,11.5454153 L19.0651296,9.36871629 L13.2548471,9.36871629 L13.2548471,28.8444444 L19.0651296,28.8444444 Z M44.8839536,29.5 L44.8839536,14.3397351 L49.3447773,14.3397351 L49.3447773,9.57284768 L44.8839536,9.57284768 L44.8839536,7.77549669 C44.8839536,5.86092715 45.722741,4.76688742 47.0953021,4.76688742 C47.9722162,4.76688742 48.8110036,5.15761589 49.3447773,5.58741722 L49.3447773,1.7192053 C48.6203701,0.859602649 47.0953021,0 44.9983337,0 C41.4525507,0 38.9743153,2.42251656 38.9743153,8.12715232 L38.9743153,9.57284768 L36.8773469,9.57284768 L36.8773469,14.3397351 L38.9743153,14.3397351 L38.9743153,29.5 L44.8839536,29.5 Z M58.2032148,5.9 C59.8905362,5.9 61.1560272,4.59793103 61.1560272,2.92965517 C61.1560272,1.34275862 59.8905362,0 58.2032148,0 C56.5925898,0 55.2504023,1.34275862 55.2504023,2.92965517 C55.2504023,4.59793103 56.5925898,5.9 58.2032148,5.9 Z M61.1560272,28.8444444 L61.1560272,9.17777778 L55.2504023,9.17777778 L55.2504023,28.8444444 L61.1560272,28.8444444 Z M73.5281152,28.8444444 L73.5281152,17.5408846 C73.5281152,14.6386192 74.5488405,13.4166127 76.9043604,13.4166127 C79.181363,13.4166127 80.2806057,14.6386192 80.2806057,17.5408846 L80.2806057,28.8444444 L86.0908881,28.8444444 L86.0516295,17.1590076 C86.0516295,11.7363538 83.8138855,9.17777778 79.181363,9.17777778 C77.1006538,9.17777778 74.7843925,9.97971953 73.5281152,11.5454153 L73.5281152,9.36871629 L67.7178327,9.36871629 L67.7178327,28.8444444 L73.5281152,28.8444444 Z M94.9493255,5.9 C96.636647,5.9 97.902138,4.59793103 97.902138,2.92965517 C97.902138,1.34275862 96.636647,0 94.9493255,0 C93.3387006,0 91.9965131,1.34275862 91.9965131,2.92965517 C91.9965131,4.59793103 93.3387006,5.9 94.9493255,5.9 Z M97.902138,28.8444444 L97.902138,9.17777778 L91.9965131,9.17777778 L91.9965131,28.8444444 L97.902138,28.8444444 Z M111.617808,29.5 C113.73383,29.5 114.888023,29.0365375 115.619013,28.5730749 L115.619013,24.749509 C113.11826,25.6378122 111.88712,24.440534 111.88712,21.4280276 L111.88712,14.3216021 L115.619013,14.3216021 L115.619013,9.60973299 L111.88712,9.60973299 L111.88712,4.58888889 L105.923785,4.58888889 L105.923785,9.60973299 L103.807763,9.60973299 L103.807763,14.3216021 L105.923785,14.3216021 L105.923785,21.8528682 C105.923785,27.4916624 108.039807,29.5 111.617808,29.5 Z M126.556167,35.4 C130.607686,35.4 132.165963,33.2834081 135.321473,25.5617671 L141.866235,9.17777778 L135.86687,9.17777778 L131.386825,21.7597409 L126.867822,9.17777778 L120.868457,9.17777778 L127.452176,25.9537286 C128.465056,29.520578 127.101564,30.6572662 125.815986,30.6572662 C124.88102,30.6572662 123.634398,30.1869125 122.582562,29.6381664 L121.686552,33.4401927 C122.972131,34.8120578 125.153718,35.4 126.556167,35.4 Z" id="Infinity" fill="url(#linearGradient-2)"></path>
                    </g>
                    <g id="Icon">
                        <path d="M108.450605,117.983068 C105.852092,117.711976 103.553677,116.519111 100.789355,114.005693 C100.557902,113.795127 99.8731511,113.122093 99.2695532,112.512953 C98.4597194,111.689981 98.1532173,111.402966 98.1000823,111.402966 C98.0469473,111.402966 97.7373432,111.696411 96.914901,112.528875 C96.301997,113.144444 95.5984333,113.839833 95.3482684,114.069485 C92.7434513,116.471241 90.73893,117.568469 88.3436511,117.916112 C88.1497233,117.941629 87.7401133,117.957551 87.1553578,117.954387 C86.3923549,117.954387 86.2047312,117.944793 85.8451141,117.884267 C84.2190423,117.613073 82.77434,116.968821 81.5172613,115.957738 C81.1013672,115.622752 80.2914533,114.790288 79.9912554,114.385181 C79.0124882,113.074325 78.4183466,111.642111 78.2150876,110.111095 C78.0743702,109.071311 78.0587349,108.730027 78.118149,108.270722 C78.1337843,108.143137 78.1619278,107.872015 78.1838172,107.671074 C78.2713747,106.74927 78.5215396,105.728593 78.8717705,104.880155 C79.4878036,103.368277 80.5791429,102.012695 81.9018949,101.116407 C84.1940258,99.5598772 87.1209551,99.2217784 90.022858,100.178663 C91.5957948,100.695378 93.1280048,101.63632 94.8229221,103.116302 C95.4639446,103.677674 96.0174094,104.207151 97.0713041,105.269288 C97.77797,105.986957 98.0469473,106.235747 98.1000823,106.235747 C98.1563194,106.235747 98.4628214,105.945487 99.3008738,105.093864 C100.808067,103.569228 101.596087,102.851559 102.58744,102.095625 C103.434799,101.448128 104.060211,101.052615 104.807604,100.68262 C105.83328,100.178662 106.690145,99.9075449 107.809583,99.7416848 C108.097272,99.6970307 108.38186,99.6842722 109.029186,99.6842722 C109.998525,99.6842722 110.408195,99.7353056 111.243146,99.9490099 C114.854827,100.880376 117.547301,103.958361 118.003802,107.671074 C118.028819,107.891153 118.066344,108.184597 118.081954,108.32494 C118.122681,108.650281 118.122681,109.084069 118.081954,109.40941 C118.066344,109.549753 118.028819,109.852762 118.003802,110.07925 C117.794264,111.881358 117.084496,113.661215 116.05882,114.959312 C114.761065,116.60199 112.672188,117.686459 110.283113,117.957551 C109.91407,117.999093 108.763311,118.015015 108.450605,117.983068 Z M88.2407526,114.025824 C89.6820177,113.834331 91.0751094,113.06232 92.7320387,111.538426 C93.1093646,111.192494 95.1067588,109.239667 95.1379907,109.188203 C95.1493396,109.168193 95.1493396,109.13102 95.1351762,109.105292 C95.0840611,109.0138 93.3988051,107.332631 92.9590153,106.935207 C90.8992479,105.071054 89.1656913,104.233333 87.3782415,104.233333 C85.5056844,104.233333 83.9480529,105.202574 83.1848486,106.843715 C82.8387092,107.589953 82.6486118,108.542039 82.6826583,109.35975 C82.7252209,110.303282 83.0486626,111.249677 83.6047553,112.038797 C83.8459134,112.384729 84.3708014,112.913645 84.7169407,113.162413 C85.1708939,113.488308 85.8376332,113.794258 86.4164235,113.940096 C86.9157721,114.068734 87.6647949,114.103044 88.2407526,114.025824 Z M109.412784,114.039148 C110.879122,113.855862 112.070288,113.094122 112.799146,111.874073 C113.332335,110.977709 113.607415,109.703298 113.49397,108.663723 C113.281239,106.710573 111.976628,105.060992 110.170049,104.462442 C109.60564,104.276296 109.307871,104.233333 108.604515,104.233333 C107.875658,104.233333 107.603391,104.276296 106.934069,104.496808 C105.805252,104.871978 104.633961,105.656674 103.215905,106.988363 C102.495578,107.667101 101.060461,109.093301 101.05193,109.141982 C101.034959,109.239353 102.745156,110.951958 103.578927,111.673649 C105.215341,113.091281 106.622051,113.827269 108.0657,114.022011 C108.440066,114.073515 109.083795,114.082129 109.412784,114.039148 Z" id="Shape" fill="url(#linearGradient-3)" fill-rule="nonzero"></path>
                        <path d="M24.6780946,113.411111 L14.7927536,113.411111 C6.62294139,113.411111 -7.75843399e-16,106.78817 0,98.6183575 L0,14.7927536 C7.75843399e-16,6.62294139 6.62294139,3.277127e-15 14.7927536,0 L98.7264815,0 C106.896294,-8.75702108e-15 113.519235,6.62294139 113.519235,14.7927536 L113.519235,49.3091787 L113.519235,49.3091787" id="Path" stroke="url(#linearGradient-4)" stroke-width="10.8480193" stroke-linecap="round"></path>
                        <g id="Symbol" transform="translate(18.739919, 18.355556)">
                            <mask id="mask-6" fill="white">
                                <use xlink:href="#path-5"></use>
                            </mask>
                            <g id="Rectangle"></g>
                            <g id="pegasusoui" mask="url(#mask-6)">
                                <g transform="translate(-94.200682, -24.255556)">
                                    <path d="M169.921769,63.24056 L163.070089,70.7610528 L155.875821,63.5823966 C155.875821,63.5823966 149.088754,56.8653317 144.913127,54.6945371 C143.438555,53.9279479 141.747917,53.0046026 140.116946,53.3271704 C136.688095,54.0053141 134.127566,57.1383299 131.894926,59.8221468 C128.762876,63.5871342 125.043238,72.8120994 125.043238,72.8120994 L136.691099,79.6489191 L140.116946,82.7254822 L133.093966,102.552254 L131.894926,102.552254 C131.894926,102.552254 132.234664,93.2126783 130.524585,90.5878251 C128.814507,87.962972 128.428633,87.3143373 124.700658,87.1694119 C120.972684,87.0244865 114.825711,91.4621084 110.654703,94.0062316 C106.483696,96.5503548 77.0814466,119.966667 77.0814466,119.966667 L35.9713424,102.210411 L32.2029153,98.7920047 L24.3234812,98.1083247 L20.2124674,100.159365 L18.842134,103.577778 L3.42583896,102.552254 C3.42583896,102.552254 4.75526518,95.5058199 7.53685278,92.9807151 C10.3184472,90.4556035 13.0011276,89.337743 18.4995472,89.2204585 C23.99796,89.103174 39.7397694,94.0062316 39.7397694,94.0062316 L58.9244847,81.0162789 L89.757068,71.1028962 L82.9053805,71.4447395 L77.0814466,67.6844897 L74.6833597,64.9497632 L73.6556062,60.84767 C69.0274294,54.9441583 84.8024272,19.2146042 62.350325,23.2451788 C34.4094417,29.0068582 11.0750438,5.92751148 0,0 C0,0 30.7675143,17.7734313 46.5914501,11.6225928 C62.4153859,5.47175419 71.2570581,9.5437902 76.0536999,16.0665225 C80.8503416,22.5892548 78.7496883,33.9611435 81.5350403,52.6434905 C84.3203924,71.3258375 99.9285599,68.8727927 98.6642555,68.3681697 C98.6642555,68.3681697 85.9956001,58.8940977 90.0996479,57.0874202 L101.747509,51.9598106 L85.6460541,50.2506073 L96.9513353,47.8577174 L84.9608874,40.6790612 L111.33987,40.6790612 L98.6642555,36.5769748 L125.043238,33.8422482 L117.163804,30.0819984 L131.552339,27.0054286 L142.515033,31.1075217 L146.626047,27.6891085 L155.875821,34.5259282 L170.606943,42.7301077 L170.606943,45.1229909 L159.301662,43.4137877 L169.921769,63.24056 Z" id="path4147" fill="url(#linearGradient-7)"></path>
                                    <path d="M75.2069435,69.6902591 C69.399232,68.8922823 62.749112,68.3989287 67.9667488,59.0895037 C67.9667488,59.0895037 66.7635709,48.6482311 66.0736396,53.9421341 C64.111439,68.9982108 43.4497706,62.7938146 29.2546835,58.2523013 C20.9470813,55.5944008 45.3651667,71.4147597 55.124102,73.1563134 C61.8119285,74.3498062 86.3974523,71.227834 75.2069435,69.6902591 L75.2069435,69.6902591 Z" id="path4151" fill="#FF2A2A"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`
  , Al = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="22px" height="34px" viewBox="0 0 22 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Group 2</title>
    <g id="Main" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g id="Home-page" transform="translate(-365.000000, -286.000000)" stroke="#FFFFFF" stroke-width="3">
            <g id="Content" transform="translate(366.779527, 0.000000)">
                <g id="Header" transform="translate(0.000000, 66.000000)">
                    <g id="Group" transform="translate(0.000000, 126.000000)">
                        <g id="Group-2" transform="translate(8.894777, 111.384789) rotate(-90.000000) translate(-8.894777, -111.384789) translate(-6.605223, 102.490013)">
                            <line x1="0.384789427" y1="8.72047314" x2="30.7695789" y2="8.89477667" id="Path-3"></line>
                            <polyline id="Path-4" points="21.8748022 17.7895533 30.7695789 8.89477667 21.8748022 2.84217094e-14"></polyline>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`;
function hr(e) {
    let t, n, r, i, o = e[2].title + "", s, l, a, u = e[2].content + "", f, d, h = e[2].button + "", m, g, p, _, x, w = e[2].arrow && dr(e);
    return {
        c() {
            t = b("div"),
            w && w.c(),
            n = S(),
            r = b("div"),
            i = b("div"),
            s = A(o),
            l = S(),
            a = b("div"),
            f = S(),
            d = b("button"),
            m = A(h),
            v(i, "class", "title svelte-6q6rgh"),
            v(a, "class", "text svelte-6q6rgh"),
            v(d, "class", "ok svelte-6q6rgh"),
            v(r, "class", "bubble card svelte-6q6rgh"),
            te(r, "top", e[2].top + "px", !1),
            te(r, "right", e[2].right + "px", !1),
            te(r, "width", e[2].width + "px", !1),
            v(t, "id", "modal"),
            v(t, "class", "svelte-6q6rgh"),
            ve(t, "center", e[2].center)
        },
        m(E, y) {
            B(E, t, y),
            w && w.m(t, null),
            c(t, n),
            c(t, r),
            c(r, i),
            c(i, s),
            c(r, l),
            c(r, a),
            a.innerHTML = u,
            c(r, f),
            c(r, d),
            c(d, m),
            e[7](r),
            p = !0,
            _ || (x = [he(d, "click", e[6]), he(t, "click", e[5])],
            _ = !0)
        },
        p(E, y) {
            e = E,
            e[2].arrow ? w ? w.p(e, y) : (w = dr(e),
            w.c(),
            w.m(t, n)) : w && (w.d(1),
            w = null),
            (!p || y & 4) && o !== (o = e[2].title + "") && O(s, o),
            (!p || y & 4) && u !== (u = e[2].content + "") && (a.innerHTML = u),
            (!p || y & 4) && h !== (h = e[2].button + "") && O(m, h),
            y & 4 && te(r, "top", e[2].top + "px", !1),
            y & 4 && te(r, "right", e[2].right + "px", !1),
            y & 4 && te(r, "width", e[2].width + "px", !1),
            y & 4 && ve(t, "center", e[2].center)
        },
        i(E) {
            p || (pe( () => {
                g || (g = ge(t, de, {
                    duration: 200,
                    easing: At
                }, !0)),
                g.run(1)
            }
            ),
            p = !0)
        },
        o(E) {
            g || (g = ge(t, de, {
                duration: 200,
                easing: At
            }, !1)),
            g.run(0),
            p = !1
        },
        d(E) {
            E && H(t),
            w && w.d(),
            e[7](null),
            E && g && g.end(),
            _ = !1,
            ye(x)
        }
    }
}
function dr(e) {
    let t;
    return {
        c() {
            t = b("div"),
            v(t, "class", "arrow svelte-6q6rgh"),
            te(t, "right", e[2].right + "px", !1)
        },
        m(n, r) {
            B(n, t, r),
            t.innerHTML = Al
        },
        p(n, r) {
            r & 4 && te(t, "right", n[2].right + "px", !1)
        },
        d(n) {
            n && H(t)
        }
    }
}
function kl(e) {
    let t, n = e[1]("app.logout") + "", r, i, o, s, l, a, u;
    return {
        c() {
            t = b("a"),
            r = A(n),
            v(t, "id", "logout"),
            v(t, "href", i = mi()),
            v(t, "class", "svelte-6q6rgh")
        },
        m(f, d) {
            B(f, t, d),
            c(t, r),
            l = !0,
            a || (u = he(t, "click", Ml),
            a = !0)
        },
        p(f, d) {
            (!l || d & 2) && n !== (n = f[1]("app.logout") + "") && O(r, n)
        },
        i(f) {
            l || (pe( () => {
                s && s.end(1),
                o = ji(t, de, {
                    delay: 200
                }),
                o.start()
            }
            ),
            l = !0)
        },
        o(f) {
            o && o.invalidate(),
            s = Fi(t, de, {
                duration: 175
            }),
            l = !1
        },
        d(f) {
            f && H(t),
            f && s && s.end(),
            a = !1,
            u()
        }
    }
}
function Tl(e) {
    let t, n;
    return t = new Ao({}),
    {
        c() {
            xe(t.$$.fragment)
        },
        m(r, i) {
            _e(t, r, i),
            n = !0
        },
        i(r) {
            n || (U(t.$$.fragment, r),
            n = !0)
        },
        o(r) {
            q(t.$$.fragment, r),
            n = !1
        },
        d(r) {
            be(t, r)
        }
    }
}
function Pl(e) {
    let t, n;
    return t = new Po({}),
    {
        c() {
            xe(t.$$.fragment)
        },
        m(r, i) {
            _e(t, r, i),
            n = !0
        },
        i(r) {
            n || (U(t.$$.fragment, r),
            n = !0)
        },
        o(r) {
            q(t.$$.fragment, r),
            n = !1
        },
        d(r) {
            be(t, r)
        }
    }
}
function Hl(e) {
    let t, n;
    return t = new al({}),
    {
        c() {
            xe(t.$$.fragment)
        },
        m(r, i) {
            _e(t, r, i),
            n = !0
        },
        i(r) {
            n || (U(t.$$.fragment, r),
            n = !0)
        },
        o(r) {
            q(t.$$.fragment, r),
            n = !1
        },
        d(r) {
            be(t, r)
        }
    }
}
function Bl(e) {
    let t, n, r, i, o, s, l, a, u, f, d, h, m, g;
    t = new gl({});
    let p = e[2] && hr(e)
      , _ = e[4] && kl(e);
    const x = [Hl, Pl, Tl]
      , w = [];
    function E(y, T) {
        return u == null && (u = !!ul()),
        u ? 0 : y[3] ? 1 : 2
    }
    return f = E(e),
    d = w[f] = x[f](e),
    m = new Sl({}),
    {
        c() {
            xe(t.$$.fragment),
            n = S(),
            p && p.c(),
            r = S(),
            i = b("div"),
            o = b("div"),
            s = b("div"),
            l = S(),
            _ && _.c(),
            a = S(),
            d.c(),
            h = S(),
            xe(m.$$.fragment),
            v(s, "id", "logo"),
            v(s, "class", "variable svelte-6q6rgh"),
            v(o, "id", "header"),
            v(o, "class", "svelte-6q6rgh"),
            v(i, "id", "content"),
            v(i, "class", "variable svelte-6q6rgh"),
            ve(i, "wide", e[4])
        },
        m(y, T) {
            _e(t, y, T),
            B(y, n, T),
            p && p.m(y, T),
            B(y, r, T),
            B(y, i, T),
            c(i, o),
            c(o, s),
            s.innerHTML = Cl,
            c(o, l),
            _ && _.m(o, null),
            c(i, a),
            w[f].m(i, null),
            c(i, h),
            _e(m, i, null),
            g = !0
        },
        p(y, [T]) {
            y[2] ? p ? (p.p(y, T),
            T & 4 && U(p, 1)) : (p = hr(y),
            p.c(),
            U(p, 1),
            p.m(r.parentNode, r)) : p && (ke(),
            q(p, 1, 1, () => {
                p = null
            }
            ),
            Te()),
            y[4] && _.p(y, T);
            let P = f;
            f = E(y),
            f !== P && (ke(),
            q(w[P], 1, 1, () => {
                w[P] = null
            }
            ),
            Te(),
            d = w[f],
            d || (d = w[f] = x[f](y),
            d.c()),
            U(d, 1),
            d.m(i, h))
        },
        i(y) {
            g || (U(t.$$.fragment, y),
            U(p),
            U(_),
            U(d),
            U(m.$$.fragment, y),
            g = !0)
        },
        o(y) {
            q(t.$$.fragment, y),
            q(p),
            q(_),
            q(d),
            q(m.$$.fragment, y),
            g = !1
        },
        d(y) {
            be(t, y),
            y && H(n),
            p && p.d(y),
            y && H(r),
            y && H(i),
            _ && _.d(),
            w[f].d(),
            be(m)
        }
    }
}
function qt() {
    const [e,t] = [...document.querySelectorAll("body, #app")].map(n => n.style);
    e.height = t.height = `${window.innerHeight}px`
}
function Ml() {
    localStorage.loggedOut = "true"
}
function Il(e, t, n) {
    let r, i, o;
    Le(e, ht, d => n(1, r = d)),
    Le(e, Ne, d => n(2, i = d)),
    Le(e, Xr, d => n(3, o = d));
    const s = fl();
    let l;
    un( () => (localStorage.seenHelpDisable || setTimeout( () => {
        Ne.set({
            title: r("app.back.title"),
            content: r("app.back.content"),
            button: r("app.back.button"),
            top: 50,
            right: navigator.userAgent.includes("afari") ? 88 : window.chrome ? 107 : 49,
            width: 350,
            arrow: !0
        }),
        setTimeout( () => localStorage.seenHelpDisable = !0)
    }
    , 750),
    window.addEventListener("resize", qt),
    qt(),
    () => window.removeEventListener("resize", qt)));
    function a(d) {
        l.contains(d.target) || Ne.set(null)
    }
    const u = () => Ne.set(null);
    function f(d) {
        ot[d ? "unshift" : "push"]( () => {
            l = d,
            n(0, l)
        }
        )
    }
    return [l, r, i, o, s, a, u, f]
}
class Ol extends He {
    constructor(t) {
        super();
        Pe(this, t, Il, Bl, Ce, {})
    }
}
pn("en", _o);
pn("fr", bo);
ro({
    fallbackLocale: "en",
    initialLocale: io()
});
new Ol({
    target: document.getElementById("app")
});
