import{d as gn,r as xe,J as Ol,K as kl,b as $d,c as Ce,I as js,x as Ec,F as bn,j as Kn,o as se,_ as qd,G as ai,m as Lt,e as D,f as rt,u as ht,q as Ie,g as Wt,t as Ht,h as de,p as er,n as Ks,A as jd,P as kf,R as Bf,w as Yn,v as Ra,S as zf,a as br,i as Mr,k as Tc}from"./index-Ct_PMGoS.js";import{_ as we}from"./Card.vue_vue_type_script_setup_true_lang-DThtdUHo.js";const Vf=["data-index"],Hf={key:1,class:"card-group-placeholder",style:{height:"300px"}},Gf=gn({__name:"CardGroup",props:{items:{},columns:{default:3},gap:{default:"1.5rem"},virtual:{type:Boolean,default:!1},threshold:{default:.1}},setup(n){const t=n,e=xe(null),i=xe(new Set);let s=null;const r=()=>{if(!t.virtual||!e.value)return;s=new IntersectionObserver(l=>{l.forEach(c=>{const h=parseInt(c.target.dataset.index||"-1");c.isIntersecting&&i.value.add(h)})},{threshold:t.threshold,rootMargin:"200px"});const a=e.value.children;for(let l=0;l<a.length;l++){const c=a[l];c&&c.classList.contains("card-group-item")&&s.observe(c)}};Ol(()=>{t.virtual&&r()}),kl(()=>{s?.disconnect()});const o=$d(()=>({display:"grid",gridTemplateColumns:typeof t.columns=="number"?`repeat(${t.columns}, minmax(0, 1fr))`:t.columns,gap:t.gap}));return(a,l)=>(se(),Ce("div",{ref_key:"containerRef",ref:e,class:"card-group",style:js(o.value)},[n.items&&n.items.length?(se(!0),Ce(bn,{key:0},Kn(n.items,(c,h)=>(se(),Ce("div",{key:h,"data-index":h,class:"card-group-item"},[!n.virtual||i.value.has(h)?Ec(a.$slots,"default",{key:0,item:c,index:h},void 0,!0):(se(),Ce("div",Hf))],8,Vf))),128)):Ec(a.$slots,"default",{key:1},void 0,!0)],4))}}),Wf=qd(Gf,[["__scopeId","data-v-29e02ea6"]]),Xf={class:"absolute top-2 left-2 z-20"},Yf={class:"flex items-start justify-between"},$f={class:"text-xs font-bold text-indigo-500 uppercase tracking-wider"},qf={class:"text-lg font-bold text-slate-900 dark:text-white leading-snug"},jf={class:"mt-4 flex items-center gap-2"},Kf={key:0,class:"flex items-center gap-1.5 text-xs font-medium text-emerald-500"},Zf={key:1,class:"flex items-center gap-1.5 text-xs font-medium text-rose-500"},Jf={class:"flex items-center gap-2 w-full"},Qf=gn({__name:"EcommerceCard",props:{product:{}},emits:["quick-view"],setup(n,{emit:t}){const e=xe(!1),i=xe(!1),s=t,r=()=>{i.value=!0,setTimeout(()=>i.value=!1,1500)};return(o,a)=>(se(),ai(ht(we),{class:"w-full max-w-[300px]",image:n.product.image,hover:"raise",badge:n.product.stock<5?"Vente flash !":void 0,price:n.product.price,rating:n.product.rating,"double-tap-to-like":""},{header:Lt(()=>[D("div",Yf,[D("div",null,[D("span",$f,Ht(n.product.category),1),D("h3",qf,Ht(n.product.name),1)])])]),footer:Lt(()=>[D("div",Jf,[rt(ht(Ie),{loading:i.value,severity:"primary",icon:"heroicons:shopping-cart",block:"",onClick:r},{default:Lt(()=>[...a[4]||(a[4]=[Wt(" Acheter ",-1)])]),_:1},8,["loading"]),rt(ht(Ie),{variant:"ghost",severity:e.value?"danger":"secondary",icon:e.value?"heroicons:heart-solid":"heroicons:heart",onClick:a[1]||(a[1]=l=>e.value=!e.value)},null,8,["severity","icon"])])]),default:Lt(()=>[D("div",Xf,[rt(ht(Ie),{variant:"glass",size:"xs",icon:"heroicons:eye",rounded:"full",class:"scale-0 group-hover:scale-100 transition-transform duration-300",onClick:a[0]||(a[0]=l=>s("quick-view",n.product))})]),a[5]||(a[5]=D("p",{class:"text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mt-2"}," Un produit premium conçu pour répondre à tous vos besoins avec style et performance. ",-1)),D("div",jf,[n.product.stock>0?(se(),Ce("div",Kf,[a[2]||(a[2]=D("span",{class:"w-1.5 h-1.5 rounded-full bg-emerald-500"},null,-1)),Wt(" En stock ("+Ht(n.product.stock)+") ",1)])):(se(),Ce("div",Zf,[...a[3]||(a[3]=[D("span",{class:"w-1.5 h-1.5 rounded-full bg-rose-500"},null,-1),Wt(" En rupture de stock ",-1)])]))])]),_:1},8,["image","badge","price","rating"]))}}),tp={class:"flex items-center gap-3"},ep={class:"flex flex-col"},np={class:"text-sm font-bold text-slate-900 dark:text-white leading-none"},ip={class:"text-xs text-slate-500"},sp={class:"text-slate-800 dark:text-slate-200 mt-2 leading-relaxed"},rp={class:"flex items-center gap-6 w-full"},op={class:"flex items-center gap-2 group outline-none"},ap={class:"text-sm font-medium text-slate-500 group-hover:text-indigo-500 transition-colors"},lp={class:"flex items-center gap-2 group outline-none"},cp={class:"ml-auto flex items-center group outline-none"},hp=gn({__name:"SocialCard",props:{user:{},post:{}},setup(n){const t=n,e=xe(!1),i=xe(t.post.likes),s=()=>{e.value=!e.value,i.value+=e.value?1:-1};return(r,o)=>(se(),ai(ht(we),{class:"w-full max-w-[450px]",images:n.post.images,"double-tap-to-like":"",onLikeToggle:o[0]||(o[0]=a=>e.value=a)},{header:Lt(()=>[D("div",tp,[rt(ht(Ks),{src:n.user.avatar,alt:n.user.name,size:"md",rounded:"full"},null,8,["src","alt"]),D("div",ep,[D("span",np,Ht(n.user.name),1),D("span",ip,"@"+Ht(n.user.username)+" • "+Ht(n.post.date),1)]),rt(ht(Ie),{variant:"ghost",icon:"heroicons:ellipsis-horizontal",class:"ml-auto",size:"sm"})])]),footer:Lt(()=>[D("div",rp,[D("button",{class:"flex items-center gap-2 group outline-none",onClick:s},[rt(ht(de),{name:e.value?"heroicons:heart-solid":"heroicons:heart",class:er([[e.value?"text-rose-500":"text-slate-500 group-hover:text-rose-500"],"transition-colors"])},null,8,["name","class"]),D("span",{class:er(["text-sm font-medium transition-colors",[e.value?"text-rose-600":"text-slate-500 group-hover:text-rose-600"]])},Ht(i.value),3)]),D("button",op,[rt(ht(de),{name:"heroicons:chat-bubble-left",class:"text-slate-500 group-hover:text-indigo-500 transition-colors"}),D("span",ap,Ht(n.post.comments),1)]),D("button",lp,[rt(ht(de),{name:"heroicons:arrow-path",class:"text-slate-500 group-hover:text-emerald-500 transition-colors"})]),D("button",cp,[rt(ht(de),{name:"heroicons:bookmark",class:"text-slate-500 group-hover:text-amber-500 transition-colors"})])])]),default:Lt(()=>[D("p",sp,Ht(n.post.content),1)]),_:1},8,["images"]))}}),dp={class:"flex items-start justify-between"},up={class:"space-y-1"},fp={class:"text-sm font-medium text-slate-500 dark:text-slate-400"},pp={class:"text-3xl font-black text-slate-900 dark:text-white"},mp={class:"mt-6 flex items-center gap-2"},gp={class:"w-full flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4 mt-4"},Ac=gn({__name:"DashboardCard",props:{metric:{}},setup(n){return(t,e)=>(se(),ai(ht(we),{variant:"glass",class:"w-full",ui:{header:"pb-0"}},{footer:Lt(()=>[D("div",gp,[rt(ht(Ie),{variant:"ghost",size:"xs",severity:"secondary"},{default:Lt(()=>[...e[1]||(e[1]=[Wt("Détails",-1)])]),_:1}),rt(ht(Ie),{variant:"ghost",size:"xs",severity:"primary"},{default:Lt(()=>[...e[2]||(e[2]=[Wt("Rapport",-1)])]),_:1})])]),default:Lt(()=>[D("div",dp,[D("div",up,[D("span",fp,Ht(n.metric.label),1),D("h2",pp,Ht(n.metric.value),1)]),D("div",{class:"w-12 h-12 rounded-2xl flex items-center justify-center p-2.5",style:js({backgroundColor:`${n.metric.color}20`,color:n.metric.color})},[rt(ht(de),{name:n.metric.icon,size:"xl"},null,8,["name"])],4)]),D("div",mp,[D("div",{class:er(["flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg",[n.metric.trend>=0?"bg-emerald-500/10 text-emerald-600":"bg-rose-500/10 text-rose-600"]])},[rt(ht(de),{name:n.metric.trend>=0?"heroicons:arrow-trending-up":"heroicons:arrow-trending-down",size:"xs"},null,8,["name"]),Wt(" "+Ht(Math.abs(n.metric.trend))+"% ",1)],2),e[0]||(e[0]=D("span",{class:"text-xs text-slate-500"},"Depuis le mois dernier",-1))])]),_:1}))}});/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function ur(n){return n+.5|0}const _i=(n,t,e)=>Math.max(Math.min(n,e),t);function Gs(n){return _i(ur(n*2.55),0,255)}function Si(n){return _i(ur(n*255),0,255)}function jn(n){return _i(ur(n/2.55)/100,0,1)}function wc(n){return _i(ur(n*100),0,100)}const un={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Pa=[..."0123456789ABCDEF"],_p=n=>Pa[n&15],xp=n=>Pa[(n&240)>>4]+Pa[n&15],Sr=n=>(n&240)>>4===(n&15),vp=n=>Sr(n.r)&&Sr(n.g)&&Sr(n.b)&&Sr(n.a);function bp(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&un[n[1]]*17,g:255&un[n[2]]*17,b:255&un[n[3]]*17,a:t===5?un[n[4]]*17:255}:(t===7||t===9)&&(e={r:un[n[1]]<<4|un[n[2]],g:un[n[3]]<<4|un[n[4]],b:un[n[5]]<<4|un[n[6]],a:t===9?un[n[7]]<<4|un[n[8]]:255})),e}const Mp=(n,t)=>n<255?t(n):"";function Sp(n){var t=vp(n)?_p:xp;return n?"#"+t(n.r)+t(n.g)+t(n.b)+Mp(n.a,t):void 0}const yp=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Kd(n,t,e){const i=t*Math.min(e,1-e),s=(r,o=(r+n/30)%12)=>e-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function Ep(n,t,e){const i=(s,r=(s+n/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function Tp(n,t,e){const i=Kd(n,1,.5);let s;for(t+e>1&&(s=1/(t+e),t*=s,e*=s),s=0;s<3;s++)i[s]*=1-t-e,i[s]+=t;return i}function Ap(n,t,e,i,s){return n===s?(t-e)/i+(t<e?6:0):t===s?(e-n)/i+2:(n-t)/i+4}function Bl(n){const e=n.r/255,i=n.g/255,s=n.b/255,r=Math.max(e,i,s),o=Math.min(e,i,s),a=(r+o)/2;let l,c,h;return r!==o&&(h=r-o,c=a>.5?h/(2-r-o):h/(r+o),l=Ap(e,i,s,h,r),l=l*60+.5),[l|0,c||0,a]}function zl(n,t,e,i){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,i)).map(Si)}function Vl(n,t,e){return zl(Kd,n,t,e)}function wp(n,t,e){return zl(Tp,n,t,e)}function Cp(n,t,e){return zl(Ep,n,t,e)}function Zd(n){return(n%360+360)%360}function Rp(n){const t=yp.exec(n);let e=255,i;if(!t)return;t[5]!==i&&(e=t[6]?Gs(+t[5]):Si(+t[5]));const s=Zd(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?i=wp(s,r,o):t[1]==="hsv"?i=Cp(s,r,o):i=Vl(s,r,o),{r:i[0],g:i[1],b:i[2],a:e}}function Pp(n,t){var e=Bl(n);e[0]=Zd(e[0]+t),e=Vl(e),n.r=e[0],n.g=e[1],n.b=e[2]}function Dp(n){if(!n)return;const t=Bl(n),e=t[0],i=wc(t[1]),s=wc(t[2]);return n.a<255?`hsla(${e}, ${i}%, ${s}%, ${jn(n.a)})`:`hsl(${e}, ${i}%, ${s}%)`}const Cc={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Rc={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Lp(){const n={},t=Object.keys(Rc),e=Object.keys(Cc);let i,s,r,o,a;for(i=0;i<t.length;i++){for(o=a=t[i],s=0;s<e.length;s++)r=e[s],a=a.replace(r,Cc[r]);r=parseInt(Rc[o],16),n[a]=[r>>16&255,r>>8&255,r&255]}return n}let yr;function Ip(n){yr||(yr=Lp(),yr.transparent=[0,0,0,0]);const t=yr[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const Fp=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Up(n){const t=Fp.exec(n);let e=255,i,s,r;if(t){if(t[7]!==i){const o=+t[7];e=t[8]?Gs(o):_i(o*255,0,255)}return i=+t[1],s=+t[3],r=+t[5],i=255&(t[2]?Gs(i):_i(i,0,255)),s=255&(t[4]?Gs(s):_i(s,0,255)),r=255&(t[6]?Gs(r):_i(r,0,255)),{r:i,g:s,b:r,a:e}}}function Np(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${jn(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const Oo=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,ts=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function Op(n,t,e){const i=ts(jn(n.r)),s=ts(jn(n.g)),r=ts(jn(n.b));return{r:Si(Oo(i+e*(ts(jn(t.r))-i))),g:Si(Oo(s+e*(ts(jn(t.g))-s))),b:Si(Oo(r+e*(ts(jn(t.b))-r))),a:n.a+e*(t.a-n.a)}}function Er(n,t,e){if(n){let i=Bl(n);i[t]=Math.max(0,Math.min(i[t]+i[t]*e,t===0?360:1)),i=Vl(i),n.r=i[0],n.g=i[1],n.b=i[2]}}function Jd(n,t){return n&&Object.assign(t||{},n)}function Pc(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=Si(n[3]))):(t=Jd(n,{r:0,g:0,b:0,a:1}),t.a=Si(t.a)),t}function kp(n){return n.charAt(0)==="r"?Up(n):Rp(n)}let Qd=class Da{constructor(t){if(t instanceof Da)return t;const e=typeof t;let i;e==="object"?i=Pc(t):e==="string"&&(i=bp(t)||Ip(t)||kp(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=Jd(this._rgb);return t&&(t.a=jn(t.a)),t}set rgb(t){this._rgb=Pc(t)}rgbString(){return this._valid?Np(this._rgb):void 0}hexString(){return this._valid?Sp(this._rgb):void 0}hslString(){return this._valid?Dp(this._rgb):void 0}mix(t,e){if(t){const i=this.rgb,s=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,l=i.a-s.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,i.r=255&c*i.r+r*s.r+.5,i.g=255&c*i.g+r*s.g+.5,i.b=255&c*i.b+r*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=Op(this._rgb,t._rgb,e)),this}clone(){return new Da(this.rgb)}alpha(t){return this._rgb.a=Si(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=ur(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Er(this._rgb,2,t),this}darken(t){return Er(this._rgb,2,-t),this}saturate(t){return Er(this._rgb,1,t),this}desaturate(t){return Er(this._rgb,1,-t),this}rotate(t){return Pp(this._rgb,t),this}};/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function zn(){}const Bp=(()=>{let n=0;return()=>n++})();function Gt(n){return n==null}function be(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function Xt(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function Te(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function cn(n,t){return Te(n)?n:t}function Ut(n,t){return typeof n>"u"?t:n}const zp=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,tu=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function _e(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function ce(n,t,e,i){let s,r,o;if(be(n))for(r=n.length,s=0;s<r;s++)t.call(e,n[s],s);else if(Xt(n))for(o=Object.keys(n),r=o.length,s=0;s<r;s++)t.call(e,n[o[s]],o[s])}function ho(n,t){let e,i,s,r;if(!n||!t||n.length!==t.length)return!1;for(e=0,i=n.length;e<i;++e)if(s=n[e],r=t[e],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function uo(n){if(be(n))return n.map(uo);if(Xt(n)){const t=Object.create(null),e=Object.keys(n),i=e.length;let s=0;for(;s<i;++s)t[e[s]]=uo(n[e[s]]);return t}return n}function eu(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function Vp(n,t,e,i){if(!eu(n))return;const s=t[n],r=e[n];Xt(s)&&Xt(r)?nr(s,r,i):t[n]=uo(r)}function nr(n,t,e){const i=be(t)?t:[t],s=i.length;if(!Xt(n))return n;e=e||{};const r=e.merger||Vp;let o;for(let a=0;a<s;++a){if(o=i[a],!Xt(o))continue;const l=Object.keys(o);for(let c=0,h=l.length;c<h;++c)r(l[c],n,o,e)}return n}function Zs(n,t){return nr(n,t,{merger:Hp})}function Hp(n,t,e){if(!eu(n))return;const i=t[n],s=e[n];Xt(i)&&Xt(s)?Zs(i,s):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=uo(s))}const Dc={"":n=>n,x:n=>n.x,y:n=>n.y};function Gp(n){const t=n.split("."),e=[];let i="";for(const s of t)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(e.push(i),i="");return e}function Wp(n){const t=Gp(n);return e=>{for(const i of t){if(i==="")break;e=e&&e[i]}return e}}function yi(n,t){return(Dc[t]||(Dc[t]=Wp(t)))(n)}function Hl(n){return n.charAt(0).toUpperCase()+n.slice(1)}const ir=n=>typeof n<"u",Ei=n=>typeof n=="function",Lc=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function Xp(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const Jt=Math.PI,ve=2*Jt,Yp=ve+Jt,fo=Number.POSITIVE_INFINITY,$p=Jt/180,Re=Jt/2,Pi=Jt/4,Ic=Jt*2/3,xi=Math.log10,Dn=Math.sign;function Js(n,t,e){return Math.abs(n-t)<e}function Fc(n){const t=Math.round(n);n=Js(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(xi(n))),i=n/e;return(i<=1?1:i<=2?2:i<=5?5:10)*e}function qp(n){const t=[],e=Math.sqrt(n);let i;for(i=1;i<e;i++)n%i===0&&(t.push(i),t.push(n/i));return e===(e|0)&&t.push(e),t.sort((s,r)=>s-r).pop(),t}function jp(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function vs(n){return!jp(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function Kp(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function nu(n,t,e){let i,s,r;for(i=0,s=n.length;i<s;i++)r=n[i][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function Sn(n){return n*(Jt/180)}function Gl(n){return n*(180/Jt)}function Uc(n){if(!Te(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function iu(n,t){const e=t.x-n.x,i=t.y-n.y,s=Math.sqrt(e*e+i*i);let r=Math.atan2(i,e);return r<-.5*Jt&&(r+=ve),{angle:r,distance:s}}function La(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function Zp(n,t){return(n-t+Yp)%ve-Jt}function We(n){return(n%ve+ve)%ve}function sr(n,t,e,i){const s=We(n),r=We(t),o=We(e),a=We(r-s),l=We(o-s),c=We(s-r),h=We(s-o);return s===r||s===o||i&&r===o||a>l&&c<h}function Be(n,t,e){return Math.max(t,Math.min(e,n))}function Jp(n){return Be(n,-32768,32767)}function Jn(n,t,e,i=1e-6){return n>=Math.min(t,e)-i&&n<=Math.max(t,e)+i}function Wl(n,t,e){e=e||(o=>n[o]<t);let i=n.length-1,s=0,r;for(;i-s>1;)r=s+i>>1,e(r)?s=r:i=r;return{lo:s,hi:i}}const Qn=(n,t,e,i)=>Wl(n,e,i?s=>{const r=n[s][t];return r<e||r===e&&n[s+1][t]===e}:s=>n[s][t]<e),Qp=(n,t,e)=>Wl(n,e,i=>n[i][t]>=e);function tm(n,t,e){let i=0,s=n.length;for(;i<s&&n[i]<t;)i++;for(;s>i&&n[s-1]>e;)s--;return i>0||s<n.length?n.slice(i,s):n}const su=["push","pop","shift","splice","unshift"];function em(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),su.forEach(e=>{const i="_onData"+Hl(e),s=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return n._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...r)}),o}})})}function Nc(n,t){const e=n._chartjs;if(!e)return;const i=e.listeners,s=i.indexOf(t);s!==-1&&i.splice(s,1),!(i.length>0)&&(su.forEach(r=>{delete n[r]}),delete n._chartjs)}function ru(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const ou=(function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame})();function au(n,t){let e=[],i=!1;return function(...s){e=s,i||(i=!0,ou.call(window,()=>{i=!1,n.apply(t,e)}))}}function nm(n,t){let e;return function(...i){return t?(clearTimeout(e),e=setTimeout(n,t,i)):n.apply(this,i),t}}const Xl=n=>n==="start"?"left":n==="end"?"right":"center",Ge=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,im=(n,t,e,i)=>n===(i?"left":"right")?e:n==="center"?(t+e)/2:t;function lu(n,t,e){const i=t.length;let s=0,r=i;if(n._sorted){const{iScale:o,vScale:a,_parsed:l}=n,c=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,h=o.axis,{min:d,max:u,minDefined:f,maxDefined:g}=o.getUserBounds();if(f){if(s=Math.min(Qn(l,h,d).lo,e?i:Qn(t,h,o.getPixelForValue(d)).lo),c){const _=l.slice(0,s+1).reverse().findIndex(m=>!Gt(m[a.axis]));s-=Math.max(0,_)}s=Be(s,0,i-1)}if(g){let _=Math.max(Qn(l,o.axis,u,!0).hi+1,e?0:Qn(t,h,o.getPixelForValue(u),!0).hi+1);if(c){const m=l.slice(_-1).findIndex(p=>!Gt(p[a.axis]));_+=Math.max(0,m)}r=Be(_,s,i)-s}else r=i-s}return{start:s,count:r}}function cu(n){const{xScale:t,yScale:e,_scaleRanges:i}=n,s={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!i)return n._scaleRanges=s,!0;const r=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==e.min||i.ymax!==e.max;return Object.assign(i,s),r}const Tr=n=>n===0||n===1,Oc=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*ve/e)),kc=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*ve/e)+1,Qs={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Re)+1,easeOutSine:n=>Math.sin(n*Re),easeInOutSine:n=>-.5*(Math.cos(Jt*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>Tr(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>Tr(n)?n:Oc(n,.075,.3),easeOutElastic:n=>Tr(n)?n:kc(n,.075,.3),easeInOutElastic(n){return Tr(n)?n:n<.5?.5*Oc(n*2,.1125,.45):.5+.5*kc(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-Qs.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?Qs.easeInBounce(n*2)*.5:Qs.easeOutBounce(n*2-1)*.5+.5};function Yl(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Bc(n){return Yl(n)?n:new Qd(n)}function ko(n){return Yl(n)?n:new Qd(n).saturate(.5).darken(.1).hexString()}const sm=["x","y","borderWidth","radius","tension"],rm=["color","borderColor","backgroundColor"];function om(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:rm},numbers:{type:"number",properties:sm}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function am(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const zc=new Map;function lm(n,t){t=t||{};const e=n+JSON.stringify(t);let i=zc.get(e);return i||(i=new Intl.NumberFormat(n,t),zc.set(e,i)),i}function fr(n,t,e){return lm(t,e).format(n)}const hu={values(n){return be(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const i=this.chart.options.locale;let s,r=n;if(e.length>1){const c=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(c<1e-4||c>1e15)&&(s="scientific"),r=cm(n,e)}const o=xi(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),fr(n,i,l)},logarithmic(n,t,e){if(n===0)return"0";const i=e[t].significand||n/Math.pow(10,Math.floor(xi(n)));return[1,2,3,5,10,15].includes(i)||t>.8*e.length?hu.numeric.call(this,n,t,e):""}};function cm(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var So={formatters:hu};function hm(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:So.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const ji=Object.create(null),Ia=Object.create(null);function tr(n,t){if(!t)return n;const e=t.split(".");for(let i=0,s=e.length;i<s;++i){const r=e[i];n=n[r]||(n[r]=Object.create(null))}return n}function Bo(n,t,e){return typeof t=="string"?nr(tr(n,t),e):nr(tr(n,""),t)}class dm{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>ko(s.backgroundColor),this.hoverBorderColor=(i,s)=>ko(s.borderColor),this.hoverColor=(i,s)=>ko(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Bo(this,t,e)}get(t){return tr(this,t)}describe(t,e){return Bo(Ia,t,e)}override(t,e){return Bo(ji,t,e)}route(t,e,i,s){const r=tr(this,t),o=tr(this,i),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const l=this[a],c=o[s];return Xt(l)?Object.assign({},c,l):Ut(l,c)},set(l){this[a]=l}}})}apply(t){t.forEach(e=>e(this))}}var Me=new dm({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[om,am,hm]);function um(n){return!n||Gt(n.size)||Gt(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function po(n,t,e,i,s){let r=t[s];return r||(r=t[s]=n.measureText(s).width,e.push(s)),r>i&&(i=r),i}function fm(n,t,e,i){i=i||{};let s=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(s=i.data={},r=i.garbageCollect=[],i.font=t),n.save(),n.font=t;let o=0;const a=e.length;let l,c,h,d,u;for(l=0;l<a;l++)if(d=e[l],d!=null&&!be(d))o=po(n,s,r,o,d);else if(be(d))for(c=0,h=d.length;c<h;c++)u=d[c],u!=null&&!be(u)&&(o=po(n,s,r,o,u));n.restore();const f=r.length/2;if(f>e.length){for(l=0;l<f;l++)delete s[r[l]];r.splice(0,f)}return o}function Di(n,t,e){const i=n.currentDevicePixelRatio,s=e!==0?Math.max(e/2,.5):0;return Math.round((t-s)*i)/i+s}function Vc(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function Fa(n,t,e,i){du(n,t,e,i,null)}function du(n,t,e,i,s){let r,o,a,l,c,h,d,u;const f=t.pointStyle,g=t.rotation,_=t.radius;let m=(g||0)*$p;if(f&&typeof f=="object"&&(r=f.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(e,i),n.rotate(m),n.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),n.restore();return}if(!(isNaN(_)||_<=0)){switch(n.beginPath(),f){default:s?n.ellipse(e,i,s/2,_,0,0,ve):n.arc(e,i,_,0,ve),n.closePath();break;case"triangle":h=s?s/2:_,n.moveTo(e+Math.sin(m)*h,i-Math.cos(m)*_),m+=Ic,n.lineTo(e+Math.sin(m)*h,i-Math.cos(m)*_),m+=Ic,n.lineTo(e+Math.sin(m)*h,i-Math.cos(m)*_),n.closePath();break;case"rectRounded":c=_*.516,l=_-c,o=Math.cos(m+Pi)*l,d=Math.cos(m+Pi)*(s?s/2-c:l),a=Math.sin(m+Pi)*l,u=Math.sin(m+Pi)*(s?s/2-c:l),n.arc(e-d,i-a,c,m-Jt,m-Re),n.arc(e+u,i-o,c,m-Re,m),n.arc(e+d,i+a,c,m,m+Re),n.arc(e-u,i+o,c,m+Re,m+Jt),n.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*_,h=s?s/2:l,n.rect(e-h,i-l,2*h,2*l);break}m+=Pi;case"rectRot":d=Math.cos(m)*(s?s/2:_),o=Math.cos(m)*_,a=Math.sin(m)*_,u=Math.sin(m)*(s?s/2:_),n.moveTo(e-d,i-a),n.lineTo(e+u,i-o),n.lineTo(e+d,i+a),n.lineTo(e-u,i+o),n.closePath();break;case"crossRot":m+=Pi;case"cross":d=Math.cos(m)*(s?s/2:_),o=Math.cos(m)*_,a=Math.sin(m)*_,u=Math.sin(m)*(s?s/2:_),n.moveTo(e-d,i-a),n.lineTo(e+d,i+a),n.moveTo(e+u,i-o),n.lineTo(e-u,i+o);break;case"star":d=Math.cos(m)*(s?s/2:_),o=Math.cos(m)*_,a=Math.sin(m)*_,u=Math.sin(m)*(s?s/2:_),n.moveTo(e-d,i-a),n.lineTo(e+d,i+a),n.moveTo(e+u,i-o),n.lineTo(e-u,i+o),m+=Pi,d=Math.cos(m)*(s?s/2:_),o=Math.cos(m)*_,a=Math.sin(m)*_,u=Math.sin(m)*(s?s/2:_),n.moveTo(e-d,i-a),n.lineTo(e+d,i+a),n.moveTo(e+u,i-o),n.lineTo(e-u,i+o);break;case"line":o=s?s/2:Math.cos(m)*_,a=Math.sin(m)*_,n.moveTo(e-o,i-a),n.lineTo(e+o,i+a);break;case"dash":n.moveTo(e,i),n.lineTo(e+Math.cos(m)*(s?s/2:_),i+Math.sin(m)*_);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function ti(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function yo(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function Eo(n){n.restore()}function pm(n,t,e,i,s){if(!t)return n.lineTo(e.x,e.y);if(s==="middle"){const r=(t.x+e.x)/2;n.lineTo(r,t.y),n.lineTo(r,e.y)}else s==="after"!=!!i?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function mm(n,t,e,i){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?e.cp2x:e.cp1x,i?e.cp2y:e.cp1y,e.x,e.y)}function gm(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),Gt(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function _m(n,t,e,i,s){if(s.strikethrough||s.underline){const r=n.measureText(i),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,l=e-r.actualBoundingBoxAscent,c=e+r.actualBoundingBoxDescent,h=s.strikethrough?(l+c)/2:c;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=s.decorationWidth||2,n.moveTo(o,h),n.lineTo(a,h),n.stroke()}}function xm(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function Ki(n,t,e,i,s,r={}){const o=be(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let l,c;for(n.save(),n.font=s.string,gm(n,r),l=0;l<o.length;++l)c=o[l],r.backdrop&&xm(n,r.backdrop),a&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),Gt(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(c,e,i,r.maxWidth)),n.fillText(c,e,i,r.maxWidth),_m(n,e,i,c,r),i+=Number(s.lineHeight);n.restore()}function rr(n,t){const{x:e,y:i,w:s,h:r,radius:o}=t;n.arc(e+o.topLeft,i+o.topLeft,o.topLeft,1.5*Jt,Jt,!0),n.lineTo(e,i+r-o.bottomLeft),n.arc(e+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,Jt,Re,!0),n.lineTo(e+s-o.bottomRight,i+r),n.arc(e+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,Re,0,!0),n.lineTo(e+s,i+o.topRight),n.arc(e+s-o.topRight,i+o.topRight,o.topRight,0,-Re,!0),n.lineTo(e+o.topLeft,i)}const vm=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,bm=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Mm(n,t){const e=(""+n).match(vm);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const Sm=n=>+n||0;function $l(n,t){const e={},i=Xt(t),s=i?Object.keys(t):t,r=Xt(n)?i?o=>Ut(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of s)e[o]=Sm(r(o));return e}function uu(n){return $l(n,{top:"y",right:"x",bottom:"y",left:"x"})}function $i(n){return $l(n,["topLeft","topRight","bottomLeft","bottomRight"])}function qe(n){const t=uu(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Fe(n,t){n=n||{},t=t||Me.font;let e=Ut(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let i=Ut(n.style,t.style);i&&!(""+i).match(bm)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:Ut(n.family,t.family),lineHeight:Mm(Ut(n.lineHeight,t.lineHeight),e),size:e,style:i,weight:Ut(n.weight,t.weight),string:""};return s.string=um(s),s}function Ws(n,t,e,i){let s,r,o;for(s=0,r=n.length;s<r;++s)if(o=n[s],o!==void 0&&o!==void 0)return o}function ym(n,t,e){const{min:i,max:s}=n,r=tu(t,(s-i)/2),o=(a,l)=>e&&a===0?0:a+l;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function Ai(n,t){return Object.assign(Object.create(n),t)}function ql(n,t=[""],e,i,s=()=>n[0]){const r=e||n;typeof i>"u"&&(i=gu("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:i,_getTarget:s,override:a=>ql([a,...n],t,r,i)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete n[0][l],!0},get(a,l){return pu(a,l,()=>Dm(l,t,n,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,l){return Gc(a).includes(l)},ownKeys(a){return Gc(a)},set(a,l,c){const h=a._storage||(a._storage=s());return a[l]=h[l]=c,delete a._keys,!0}})}function bs(n,t,e,i){const s={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:fu(n,i),setContext:r=>bs(n,r,e,i),override:r=>bs(n.override(r),t,e,i)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete n[o],!0},get(r,o,a){return pu(r,o,()=>Tm(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(r,o,a){return n[o]=a,delete r[o],!0}})}function fu(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:i=t.indexable,_allKeys:s=t.allKeys}=n;return{allKeys:s,scriptable:e,indexable:i,isScriptable:Ei(e)?e:()=>e,isIndexable:Ei(i)?i:()=>i}}const Em=(n,t)=>n?n+Hl(t):t,jl=(n,t)=>Xt(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function pu(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const i=e();return n[t]=i,i}function Tm(n,t,e){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=n;let a=i[t];return Ei(a)&&o.isScriptable(t)&&(a=Am(t,a,n,e)),be(a)&&a.length&&(a=wm(t,a,n,o.isIndexable)),jl(t,a)&&(a=bs(a,s,r&&r[t],o)),a}function Am(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let l=t(r,o||i);return a.delete(n),jl(n,l)&&(l=Kl(s._scopes,s,n,l)),l}function wm(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&i(n))return t[r.index%t.length];if(Xt(t[0])){const l=t,c=s._scopes.filter(h=>h!==l);t=[];for(const h of l){const d=Kl(c,s,n,h);t.push(bs(d,r,o&&o[n],a))}}return t}function mu(n,t,e){return Ei(n)?n(t,e):n}const Cm=(n,t)=>n===!0?t:typeof n=="string"?yi(t,n):void 0;function Rm(n,t,e,i,s){for(const r of t){const o=Cm(e,r);if(o){n.add(o);const a=mu(o._fallback,e,s);if(typeof a<"u"&&a!==e&&a!==i)return a}else if(o===!1&&typeof i<"u"&&e!==i)return null}return!1}function Kl(n,t,e,i){const s=t._rootScopes,r=mu(t._fallback,e,i),o=[...n,...s],a=new Set;a.add(i);let l=Hc(a,o,e,r||e,i);return l===null||typeof r<"u"&&r!==e&&(l=Hc(a,o,r,l,i),l===null)?!1:ql(Array.from(a),[""],s,r,()=>Pm(t,e,i))}function Hc(n,t,e,i,s){for(;e;)e=Rm(n,t,e,i,s);return e}function Pm(n,t,e){const i=n._getTarget();t in i||(i[t]={});const s=i[t];return be(s)&&Xt(e)?e:s||{}}function Dm(n,t,e,i){let s;for(const r of t)if(s=gu(Em(r,n),e),typeof s<"u")return jl(n,s)?Kl(e,i,n,s):s}function gu(n,t){for(const e of t){if(!e)continue;const i=e[n];if(typeof i<"u")return i}}function Gc(n){let t=n._keys;return t||(t=n._keys=Lm(n._scopes)),t}function Lm(n){const t=new Set;for(const e of n)for(const i of Object.keys(e).filter(s=>!s.startsWith("_")))t.add(i);return Array.from(t)}function _u(n,t,e,i){const{iScale:s}=n,{key:r="r"}=this._parsing,o=new Array(i);let a,l,c,h;for(a=0,l=i;a<l;++a)c=a+e,h=t[c],o[a]={r:s.parse(yi(h,r),c)};return o}const Im=Number.EPSILON||1e-14,Ms=(n,t)=>t<n.length&&!n[t].skip&&n[t],xu=n=>n==="x"?"y":"x";function Fm(n,t,e,i){const s=n.skip?t:n,r=t,o=e.skip?t:e,a=La(r,s),l=La(o,r);let c=a/(a+l),h=l/(a+l);c=isNaN(c)?0:c,h=isNaN(h)?0:h;const d=i*c,u=i*h;return{previous:{x:r.x-d*(o.x-s.x),y:r.y-d*(o.y-s.y)},next:{x:r.x+u*(o.x-s.x),y:r.y+u*(o.y-s.y)}}}function Um(n,t,e){const i=n.length;let s,r,o,a,l,c=Ms(n,0);for(let h=0;h<i-1;++h)if(l=c,c=Ms(n,h+1),!(!l||!c)){if(Js(t[h],0,Im)){e[h]=e[h+1]=0;continue}s=e[h]/t[h],r=e[h+1]/t[h],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[h]=s*o*t[h],e[h+1]=r*o*t[h])}}function Nm(n,t,e="x"){const i=xu(e),s=n.length;let r,o,a,l=Ms(n,0);for(let c=0;c<s;++c){if(o=a,a=l,l=Ms(n,c+1),!a)continue;const h=a[e],d=a[i];o&&(r=(h-o[e])/3,a[`cp1${e}`]=h-r,a[`cp1${i}`]=d-r*t[c]),l&&(r=(l[e]-h)/3,a[`cp2${e}`]=h+r,a[`cp2${i}`]=d+r*t[c])}}function Om(n,t="x"){const e=xu(t),i=n.length,s=Array(i).fill(0),r=Array(i);let o,a,l,c=Ms(n,0);for(o=0;o<i;++o)if(a=l,l=c,c=Ms(n,o+1),!!l){if(c){const h=c[t]-l[t];s[o]=h!==0?(c[e]-l[e])/h:0}r[o]=a?c?Dn(s[o-1])!==Dn(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}Um(n,s,r),Nm(n,r,t)}function Ar(n,t,e){return Math.max(Math.min(n,e),t)}function km(n,t){let e,i,s,r,o,a=ti(n[0],t);for(e=0,i=n.length;e<i;++e)o=r,r=a,a=e<i-1&&ti(n[e+1],t),r&&(s=n[e],o&&(s.cp1x=Ar(s.cp1x,t.left,t.right),s.cp1y=Ar(s.cp1y,t.top,t.bottom)),a&&(s.cp2x=Ar(s.cp2x,t.left,t.right),s.cp2y=Ar(s.cp2y,t.top,t.bottom)))}function Bm(n,t,e,i,s){let r,o,a,l;if(t.spanGaps&&(n=n.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")Om(n,s);else{let c=i?n[n.length-1]:n[0];for(r=0,o=n.length;r<o;++r)a=n[r],l=Fm(c,a,n[Math.min(r+1,o-(i?0:1))%o],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}t.capBezierPoints&&km(n,e)}function Zl(){return typeof window<"u"&&typeof document<"u"}function Jl(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function mo(n,t,e){let i;return typeof n=="string"?(i=parseInt(n,10),n.indexOf("%")!==-1&&(i=i/100*t.parentNode[e])):i=n,i}const To=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function zm(n,t){return To(n).getPropertyValue(t)}const Vm=["top","right","bottom","left"];function qi(n,t,e){const i={};e=e?"-"+e:"";for(let s=0;s<4;s++){const r=Vm[s];i[r]=parseFloat(n[t+"-"+r+e])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const Hm=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function Gm(n,t){const e=n.touches,i=e&&e.length?e[0]:n,{offsetX:s,offsetY:r}=i;let o=!1,a,l;if(Hm(s,r,n.target))a=s,l=r;else{const c=t.getBoundingClientRect();a=i.clientX-c.left,l=i.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function zi(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:i}=t,s=To(e),r=s.boxSizing==="border-box",o=qi(s,"padding"),a=qi(s,"border","width"),{x:l,y:c,box:h}=Gm(n,e),d=o.left+(h&&a.left),u=o.top+(h&&a.top);let{width:f,height:g}=t;return r&&(f-=o.width+a.width,g-=o.height+a.height),{x:Math.round((l-d)/f*e.width/i),y:Math.round((c-u)/g*e.height/i)}}function Wm(n,t,e){let i,s;if(t===void 0||e===void 0){const r=n&&Jl(n);if(!r)t=n.clientWidth,e=n.clientHeight;else{const o=r.getBoundingClientRect(),a=To(r),l=qi(a,"border","width"),c=qi(a,"padding");t=o.width-c.width-l.width,e=o.height-c.height-l.height,i=mo(a.maxWidth,r,"clientWidth"),s=mo(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:i||fo,maxHeight:s||fo}}const vi=n=>Math.round(n*10)/10;function Xm(n,t,e,i){const s=To(n),r=qi(s,"margin"),o=mo(s.maxWidth,n,"clientWidth")||fo,a=mo(s.maxHeight,n,"clientHeight")||fo,l=Wm(n,t,e);let{width:c,height:h}=l;if(s.boxSizing==="content-box"){const u=qi(s,"border","width"),f=qi(s,"padding");c-=f.width+u.width,h-=f.height+u.height}return c=Math.max(0,c-r.width),h=Math.max(0,i?c/i:h-r.height),c=vi(Math.min(c,o,l.maxWidth)),h=vi(Math.min(h,a,l.maxHeight)),c&&!h&&(h=vi(c/2)),(t!==void 0||e!==void 0)&&i&&l.height&&h>l.height&&(h=l.height,c=vi(Math.floor(h*i))),{width:c,height:h}}function Wc(n,t,e){const i=t||1,s=vi(n.height*i),r=vi(n.width*i);n.height=vi(n.height),n.width=vi(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==i||o.height!==s||o.width!==r?(n.currentDevicePixelRatio=i,o.height=s,o.width=r,n.ctx.setTransform(i,0,0,i,0,0),!0):!1}const Ym=(function(){let n=!1;try{const t={get passive(){return n=!0,!1}};Zl()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n})();function Xc(n,t){const e=zm(n,t),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function Vi(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function $m(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:i==="middle"?e<.5?n.y:t.y:i==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function qm(n,t,e,i){const s={x:n.cp2x,y:n.cp2y},r={x:t.cp1x,y:t.cp1y},o=Vi(n,s,e),a=Vi(s,r,e),l=Vi(r,t,e),c=Vi(o,a,e),h=Vi(a,l,e);return Vi(c,h,e)}const jm=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,i){return e-i},leftForLtr(e,i){return e-i}}},Km=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function gs(n,t,e){return n?jm(t,e):Km()}function vu(n,t){let e,i;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,i=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=i)}function bu(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function Mu(n){return n==="angle"?{between:sr,compare:Zp,normalize:We}:{between:Jn,compare:(t,e)=>t-e,normalize:t=>t}}function Yc({start:n,end:t,count:e,loop:i,style:s}){return{start:n%e,end:t%e,loop:i&&(t-n+1)%e===0,style:s}}function Zm(n,t,e){const{property:i,start:s,end:r}=e,{between:o,normalize:a}=Mu(i),l=t.length;let{start:c,end:h,loop:d}=n,u,f;if(d){for(c+=l,h+=l,u=0,f=l;u<f&&o(a(t[c%l][i]),s,r);++u)c--,h--;c%=l,h%=l}return h<c&&(h+=l),{start:c,end:h,loop:d,style:n.style}}function Su(n,t,e){if(!e)return[n];const{property:i,start:s,end:r}=e,o=t.length,{compare:a,between:l,normalize:c}=Mu(i),{start:h,end:d,loop:u,style:f}=Zm(n,t,e),g=[];let _=!1,m=null,p,x,M;const S=()=>l(s,M,p)&&a(s,M)!==0,E=()=>a(r,p)===0||l(r,M,p),A=()=>_||S(),w=()=>!_||E();for(let P=h,b=h;P<=d;++P)x=t[P%o],!x.skip&&(p=c(x[i]),p!==M&&(_=l(p,s,r),m===null&&A()&&(m=a(p,s)===0?P:b),m!==null&&w()&&(g.push(Yc({start:m,end:P,loop:u,count:o,style:f})),m=null),b=P,M=p));return m!==null&&g.push(Yc({start:m,end:d,loop:u,count:o,style:f})),g}function yu(n,t){const e=[],i=n.segments;for(let s=0;s<i.length;s++){const r=Su(i[s],n.points,t);r.length&&e.push(...r)}return e}function Jm(n,t,e,i){let s=0,r=t-1;if(e&&!i)for(;s<t&&!n[s].skip;)s++;for(;s<t&&n[s].skip;)s++;for(s%=t,e&&(r+=s);r>s&&n[r%t].skip;)r--;return r%=t,{start:s,end:r}}function Qm(n,t,e,i){const s=n.length,r=[];let o=t,a=n[t],l;for(l=t+1;l<=e;++l){const c=n[l%s];c.skip||c.stop?a.skip||(i=!1,r.push({start:t%s,end:(l-1)%s,loop:i}),t=o=c.stop?l:null):(o=l,a.skip&&(t=l)),a=c}return o!==null&&r.push({start:t%s,end:o%s,loop:i}),r}function tg(n,t){const e=n.points,i=n.options.spanGaps,s=e.length;if(!s)return[];const r=!!n._loop,{start:o,end:a}=Jm(e,s,r,i);if(i===!0)return $c(n,[{start:o,end:a,loop:r}],e,t);const l=a<o?a+s:a,c=!!n._fullLoop&&o===0&&a===s-1;return $c(n,Qm(e,o,l,c),e,t)}function $c(n,t,e,i){return!i||!i.setContext||!e?t:eg(n,t,e,i)}function eg(n,t,e,i){const s=n._chart.getContext(),r=qc(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,l=e.length,c=[];let h=r,d=t[0].start,u=d;function f(g,_,m,p){const x=a?-1:1;if(g!==_){for(g+=l;e[g%l].skip;)g-=x;for(;e[_%l].skip;)_+=x;g%l!==_%l&&(c.push({start:g%l,end:_%l,loop:m,style:p}),h=p,d=_%l)}}for(const g of t){d=a?d:g.start;let _=e[d%l],m;for(u=d+1;u<=g.end;u++){const p=e[u%l];m=qc(i.setContext(Ai(s,{type:"segment",p0:_,p1:p,p0DataIndex:(u-1)%l,p1DataIndex:u%l,datasetIndex:o}))),ng(m,h)&&f(d,u-1,g.loop,h),_=p,h=m}d<u-1&&f(d,u-1,g.loop,h)}return c}function qc(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function ng(n,t){if(!t)return!1;const e=[],i=function(s,r){return Yl(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(n,i)!==JSON.stringify(t,i)}function wr(n,t,e){return n.options.clip?n[e]:t[e]}function ig(n,t){const{xScale:e,yScale:i}=n;return e&&i?{left:wr(e,t,"left"),right:wr(e,t,"right"),top:wr(i,t,"top"),bottom:wr(i,t,"bottom")}:t}function Eu(n,t){const e=t._clip;if(e.disabled)return!1;const i=ig(t,n.chartArea);return{left:e.left===!1?0:i.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:i.right+(e.right===!0?0:e.right),top:e.top===!1?0:i.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:i.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class sg{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,s){const r=e.listeners[s],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(i-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=ou.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const r=i.items;let o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,i,t,"progress")),r.length||(i.running=!1,this._notify(s,i,t,"complete"),i.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var $n=new sg;const jc="transparent",rg={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const i=Bc(n||jc),s=i.valid&&Bc(t||jc);return s&&s.valid?s.mix(i,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class og{constructor(t,e,i,s){const r=e[i];s=Ws([t.to,s,r,t.from]);const o=Ws([t.from,r,s]);this._active=!0,this._fn=t.fn||rg[t.type||typeof o],this._easing=Qs[t.easing]||Qs.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const s=this._target[this._prop],r=i-this._start,o=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=Ws([t.to,e,s,t.from]),this._from=Ws([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let l;if(this._active=r!==a&&(o||e<i),!this._active){this._target[s]=a,this._notify(!0);return}if(e<0){this._target[s]=r;return}l=e/i%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[s]=this._fn(r,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][e]()}}class Tu{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!Xt(t))return;const e=Object.keys(Me.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(s=>{const r=t[s];if(!Xt(r))return;const o={};for(const a of e)o[a]=r[a];(be(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!i.has(a))&&i.set(a,o)})})}_animateOptions(t,e){const i=e.options,s=lg(t,i);if(!s)return[];const r=this._createAnimations(s,i);return i.$shared&&ag(t.options.$animations,i).then(()=>{t.options=i},()=>{}),r}_createAnimations(t,e){const i=this._properties,s=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){s.push(...this._animateOptions(t,e));continue}const h=e[c];let d=r[c];const u=i.get(c);if(d)if(u&&d.active()){d.update(u,h,a);continue}else d.cancel();if(!u||!u.duration){t[c]=h;continue}r[c]=d=new og(u,t,c,h),s.push(d)}return s}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const i=this._createAnimations(t,e);if(i.length)return $n.add(this._chart,i),!0}}function ag(n,t){const e=[],i=Object.keys(t);for(let s=0;s<i.length;s++){const r=n[i[s]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function lg(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Kc(n,t){const e=n&&n.options||{},i=e.reverse,s=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:i?r:s,end:i?s:r}}function cg(n,t,e){if(e===!1)return!1;const i=Kc(n,e),s=Kc(t,e);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function hg(n){let t,e,i,s;return Xt(n)?(t=n.top,e=n.right,i=n.bottom,s=n.left):t=e=i=s=n,{top:t,right:e,bottom:i,left:s,disabled:n===!1}}function Au(n,t){const e=[],i=n._getSortedDatasetMetas(t);let s,r;for(s=0,r=i.length;s<r;++s)e.push(i[s].index);return e}function Zc(n,t,e,i={}){const s=n.keys,r=i.mode==="single";let o,a,l,c;if(t===null)return;let h=!1;for(o=0,a=s.length;o<a;++o){if(l=+s[o],l===e){if(h=!0,i.all)continue;break}c=n.values[l],Te(c)&&(r||t===0||Dn(t)===Dn(c))&&(t+=c)}return!h&&!i.all?0:t}function dg(n,t){const{iScale:e,vScale:i}=t,s=e.axis==="x"?"x":"y",r=i.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let l,c,h;for(l=0,c=o.length;l<c;++l)h=o[l],a[l]={[s]:h,[r]:n[h]};return a}function zo(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function ug(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function fg(n){const{min:t,max:e,minDefined:i,maxDefined:s}=n.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:s?e:Number.POSITIVE_INFINITY}}function pg(n,t,e){const i=n[t]||(n[t]={});return i[e]||(i[e]={})}function Jc(n,t,e,i){for(const s of t.getMatchingVisibleMetas(i).reverse()){const r=n[s.index];if(e&&r>0||!e&&r<0)return s.index}return null}function Qc(n,t){const{chart:e,_cachedMeta:i}=n,s=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=i,l=r.axis,c=o.axis,h=ug(r,o,i),d=t.length;let u;for(let f=0;f<d;++f){const g=t[f],{[l]:_,[c]:m}=g,p=g._stacks||(g._stacks={});u=p[c]=pg(s,h,_),u[a]=m,u._top=Jc(u,o,!0,i.type),u._bottom=Jc(u,o,!1,i.type);const x=u._visualValues||(u._visualValues={});x[a]=m}}function Vo(n,t){const e=n.scales;return Object.keys(e).filter(i=>e[i].axis===t).shift()}function mg(n,t){return Ai(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function gg(n,t,e){return Ai(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function Ds(n,t){const e=n.controller.index,i=n.vScale&&n.vScale.axis;if(i){t=t||n._parsed;for(const s of t){const r=s._stacks;if(!r||r[i]===void 0||r[i][e]===void 0)return;delete r[i][e],r[i]._visualValues!==void 0&&r[i]._visualValues[e]!==void 0&&delete r[i]._visualValues[e]}}}const Ho=n=>n==="reset"||n==="none",th=(n,t)=>t?n:Object.assign({},n),_g=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:Au(e,!0),values:null};class wi{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=zo(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Ds(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),s=(d,u,f,g)=>d==="x"?u:d==="r"?g:f,r=e.xAxisID=Ut(i.xAxisID,Vo(t,"x")),o=e.yAxisID=Ut(i.yAxisID,Vo(t,"y")),a=e.rAxisID=Ut(i.rAxisID,Vo(t,"r")),l=e.indexAxis,c=e.iAxisID=s(l,r,o,a),h=e.vAxisID=s(l,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(c),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Nc(this._data,this),t._stacked&&Ds(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(Xt(e)){const s=this._cachedMeta;this._data=dg(e,s)}else if(i!==e){if(i){Nc(i,this);const s=this._cachedMeta;Ds(s),s._parsed=[]}e&&Object.isExtensible(e)&&em(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const r=e._stacked;e._stacked=zo(e.vScale,e),e.stack!==i.stack&&(s=!0,Ds(e),e.stack=i.stack),this._resyncElements(t),(s||r!==e._stacked)&&(Qc(this,e._parsed),e._stacked=zo(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:s}=this,{iScale:r,_stacked:o}=i,a=r.axis;let l=t===0&&e===s.length?!0:i._sorted,c=t>0&&i._parsed[t-1],h,d,u;if(this._parsing===!1)i._parsed=s,i._sorted=!0,u=s;else{be(s[t])?u=this.parseArrayData(i,s,t,e):Xt(s[t])?u=this.parseObjectData(i,s,t,e):u=this.parsePrimitiveData(i,s,t,e);const f=()=>d[a]===null||c&&d[a]<c[a];for(h=0;h<e;++h)i._parsed[h+t]=d=u[h],l&&(f()&&(l=!1),c=d);i._sorted=l}o&&Qc(this,u)}parsePrimitiveData(t,e,i,s){const{iScale:r,vScale:o}=t,a=r.axis,l=o.axis,c=r.getLabels(),h=r===o,d=new Array(s);let u,f,g;for(u=0,f=s;u<f;++u)g=u+i,d[u]={[a]:h||r.parse(c[g],g),[l]:o.parse(e[g],g)};return d}parseArrayData(t,e,i,s){const{xScale:r,yScale:o}=t,a=new Array(s);let l,c,h,d;for(l=0,c=s;l<c;++l)h=l+i,d=e[h],a[l]={x:r.parse(d[0],h),y:o.parse(d[1],h)};return a}parseObjectData(t,e,i,s){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(s);let h,d,u,f;for(h=0,d=s;h<d;++h)u=h+i,f=e[u],c[h]={x:r.parse(yi(f,a),u),y:o.parse(yi(f,l),u)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const s=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:Au(s,!0),values:e._stacks[t.axis]._visualValues};return Zc(a,o,r.index,{mode:i})}updateRangeFromParsed(t,e,i,s){const r=i[e.axis];let o=r===null?NaN:r;const a=s&&i._stacks[e.axis];s&&a&&(s.values=a,o=Zc(s,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const i=this._cachedMeta,s=i._parsed,r=i._sorted&&t===i.iScale,o=s.length,a=this._getOtherScale(t),l=_g(e,i,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:d}=fg(a);let u,f;function g(){f=s[u];const _=f[a.axis];return!Te(f[t.axis])||h>_||d<_}for(u=0;u<o&&!(!g()&&(this.updateRangeFromParsed(c,t,f,l),r));++u);if(r){for(u=o-1;u>=0;--u)if(!g()){this.updateRangeFromParsed(c,t,f,l);break}}return c}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let s,r,o;for(s=0,r=e.length;s<r;++s)o=e[s][t.axis],Te(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,s=e.vScale,r=this.getParsed(t);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=hg(Ut(this.options.clip,cg(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,s=i.data||[],r=e.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||s.length-a,c=this.options.drawActiveElementsOnTop;let h;for(i.dataset&&i.dataset.draw(t,r,a,l),h=a;h<a+l;++h){const d=s[h];d.hidden||(d.active&&c?o.push(d):d.draw(t,r))}for(h=0;h<o.length;++h)o[h].draw(t,r)}getStyle(t,e){const i=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const s=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=gg(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=s.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=mg(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=i,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const s=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],l=this.enableOptionSharing&&ir(i);if(a)return th(a,l);const c=this.chart.config,h=c.datasetElementScopeKeys(this._type,t),d=s?[`${t}Hover`,"hover",t,""]:[t,""],u=c.getOptionScopes(this.getDataset(),h),f=Object.keys(Me.elements[t]),g=()=>this.getContext(i,s,e),_=c.resolveNamedOptions(u,f,g,d);return _.$shared&&(_.$shared=l,r[o]=Object.freeze(th(_,l))),_}_resolveAnimations(t,e,i){const s=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let l;if(s.options.animation!==!1){const h=this.chart.config,d=h.datasetAnimationScopeKeys(this._type,e),u=h.getOptionScopes(this.getDataset(),d);l=h.createResolver(u,this.getContext(t,i,e))}const c=new Tu(s,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Ho(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const i=this.resolveDataElementOptions(t,e),s=this._sharedOptions,r=this.getSharedOptions(i),o=this.includeOptions(e,r)||r!==s;return this.updateSharedOptions(r,e,i),{sharedOptions:r,includeOptions:o}}updateElement(t,e,i,s){Ho(s)?Object.assign(t,i):this._resolveAnimations(e,s).update(t,i)}updateSharedOptions(t,e,i){t&&!Ho(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,s){t.active=s;const r=this.getStyle(e,s);this._resolveAnimations(e,i,s).update(t,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const s=i.length,r=e.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,t):r<s&&this._removeElements(r,s-r)}_insertElements(t,e,i=!0){const s=this._cachedMeta,r=s.data,o=t+e;let a;const l=c=>{for(c.length+=e,a=c.length-1;a>=o;a--)c[a]=c[a-e]};for(l(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(s._parsed),this.parse(t,e),i&&this.updateElements(r,t,e,"reset")}updateElements(t,e,i,s){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(t,e);i._stacked&&Ds(i,s)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,s]=t;this[e](i,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function xg(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let i=[];for(let s=0,r=e.length;s<r;s++)i=i.concat(e[s].controller.getAllParsedValues(n));n._cache.$bar=ru(i.sort((s,r)=>s-r))}return n._cache.$bar}function vg(n){const t=n.iScale,e=xg(t,n.type);let i=t._length,s,r,o,a;const l=()=>{o===32767||o===-32768||(ir(a)&&(i=Math.min(i,Math.abs(o-a)||i)),a=o)};for(s=0,r=e.length;s<r;++s)o=t.getPixelForValue(e[s]),l();for(a=void 0,s=0,r=t.ticks.length;s<r;++s)o=t.getPixelForTick(s),l();return i}function bg(n,t,e,i){const s=e.barThickness;let r,o;return Gt(s)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=s*i,o=1),{chunk:r/i,ratio:o,start:t.pixels[n]-r/2}}function Mg(n,t,e,i){const s=t.pixels,r=s[n];let o=n>0?s[n-1]:null,a=n<s.length-1?s[n+1]:null;const l=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const c=r-(r-Math.min(o,a))/2*l;return{chunk:Math.abs(a-o)/2*l/i,ratio:e.barPercentage,start:c}}function Sg(n,t,e,i){const s=e.parse(n[0],i),r=e.parse(n[1],i),o=Math.min(s,r),a=Math.max(s,r);let l=o,c=a;Math.abs(o)>Math.abs(a)&&(l=a,c=o),t[e.axis]=c,t._custom={barStart:l,barEnd:c,start:s,end:r,min:o,max:a}}function wu(n,t,e,i){return be(n)?Sg(n,t,e,i):t[e.axis]=e.parse(n,i),t}function eh(n,t,e,i){const s=n.iScale,r=n.vScale,o=s.getLabels(),a=s===r,l=[];let c,h,d,u;for(c=e,h=e+i;c<h;++c)u=t[c],d={},d[s.axis]=a||s.parse(o[c],c),l.push(wu(u,d,r,c));return l}function Go(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function yg(n,t,e){return n!==0?Dn(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function Eg(n){let t,e,i,s,r;return n.horizontal?(t=n.base>n.x,e="left",i="right"):(t=n.base<n.y,e="bottom",i="top"),t?(s="end",r="start"):(s="start",r="end"),{start:e,end:i,reverse:t,top:s,bottom:r}}function Tg(n,t,e,i){let s=t.borderSkipped;const r={};if(!s){n.borderSkipped=r;return}if(s===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:l,top:c,bottom:h}=Eg(n);s==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===i?s=c:(e._bottom||0)===i?s=h:(r[nh(h,o,a,l)]=!0,s=c)),r[nh(s,o,a,l)]=!0,n.borderSkipped=r}function nh(n,t,e,i){return i?(n=Ag(n,t,e),n=ih(n,e,t)):n=ih(n,t,e),n}function Ag(n,t,e){return n===t?e:n===e?t:n}function ih(n,t,e){return n==="start"?t:n==="end"?e:n}function wg(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class Cg extends wi{static id="bar";static defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};static overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};parsePrimitiveData(t,e,i,s){return eh(t,e,i,s)}parseArrayData(t,e,i,s){return eh(t,e,i,s)}parseObjectData(t,e,i,s){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=r.axis==="x"?a:l,h=o.axis==="x"?a:l,d=[];let u,f,g,_;for(u=i,f=i+s;u<f;++u)_=e[u],g={},g[r.axis]=r.parse(yi(_,c),u),d.push(wu(yi(_,h),g,o,u));return d}updateRangeFromParsed(t,e,i,s){super.updateRangeFromParsed(t,e,i,s);const r=i._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:s}=e,r=this.getParsed(t),o=r._custom,a=Go(o)?"["+o.start+", "+o.end+"]":""+s.getLabelForValue(r[s.axis]);return{label:""+i.getLabelForValue(r[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,s){const r=s==="reset",{index:o,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),c=a.isHorizontal(),h=this._getRuler(),{sharedOptions:d,includeOptions:u}=this._getSharedOptions(e,s);for(let f=e;f<e+i;f++){const g=this.getParsed(f),_=r||Gt(g[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(f),m=this._calculateBarIndexPixels(f,h),p=(g._stacks||{})[a.axis],x={horizontal:c,base:_.base,enableBorderRadius:!p||Go(g._custom)||o===p._top||o===p._bottom,x:c?_.head:m.center,y:c?m.center:_.head,height:c?m.size:Math.abs(_.size),width:c?Math.abs(_.size):m.size};u&&(x.options=d||this.resolveDataElementOptions(f,t[f].active?"active":s));const M=x.options||t[f].options;Tg(x,M,p,o),wg(x,M,h.ratio),this.updateElement(t[f],f,x,s)}}_getStacks(t,e){const{iScale:i}=this._cachedMeta,s=i.getMatchingVisibleMetas(this._type).filter(h=>h.controller.options.grouped),r=i.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),l=a&&a[i.axis],c=h=>{const d=h._parsed.find(f=>f[i.axis]===l),u=d&&d[h.vScale.axis];if(Gt(u)||isNaN(u))return!0};for(const h of s)if(!(e!==void 0&&c(h))&&((r===!1||o.indexOf(h.stack)===-1||r===void 0&&h.stack===void 0)&&o.push(h.stack),h.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(i=>t[i].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const i of this.chart.data.datasets)t[Ut(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,i){const s=this._getStacks(t,i),r=e!==void 0?s.indexOf(e):-1;return r===-1?s.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,i=e.iScale,s=[];let r,o;for(r=0,o=e.data.length;r<o;++r)s.push(i.getPixelForValue(this.getParsed(r)[i.axis],r));const a=t.barThickness;return{min:a||vg(e),pixels:s,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:i,index:s},options:{base:r,minBarLength:o}}=this,a=r||0,l=this.getParsed(t),c=l._custom,h=Go(c);let d=l[e.axis],u=0,f=i?this.applyStack(e,l,i):d,g,_;f!==d&&(u=f-d,f=d),h&&(d=c.barStart,f=c.barEnd-c.barStart,d!==0&&Dn(d)!==Dn(c.barEnd)&&(u=0),u+=d);const m=!Gt(r)&&!h?r:u;let p=e.getPixelForValue(m);if(this.chart.getDataVisibility(t)?g=e.getPixelForValue(u+f):g=p,_=g-p,Math.abs(_)<o){_=yg(_,e,a)*o,d===a&&(p-=_/2);const x=e.getPixelForDecimal(0),M=e.getPixelForDecimal(1),S=Math.min(x,M),E=Math.max(x,M);p=Math.max(Math.min(p,E),S),g=p+_,i&&!h&&(l._stacks[e.axis]._visualValues[s]=e.getValueForPixel(g)-e.getValueForPixel(p))}if(p===e.getPixelForValue(a)){const x=Dn(_)*e.getLineWidthForValue(a)/2;p+=x,_-=x}return{size:_,base:p,head:g,center:g+_/2}}_calculateBarIndexPixels(t,e){const i=e.scale,s=this.options,r=s.skipNull,o=Ut(s.maxBarThickness,1/0);let a,l;const c=this._getAxisCount();if(e.grouped){const h=r?this._getStackCount(t):e.stackCount,d=s.barThickness==="flex"?Mg(t,e,s,h*c):bg(t,e,s,h*c),u=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,f=this._getAxis().indexOf(Ut(u,this.getFirstScaleIdForIndexAxis())),g=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0)+f;a=d.start+d.chunk*g+d.chunk/2,l=Math.min(o,d.chunk*d.ratio)}else a=i.getPixelForValue(this.getParsed(t)[i.axis],t),l=Math.min(o,e.min*e.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const t=this._cachedMeta,e=t.vScale,i=t.data,s=i.length;let r=0;for(;r<s;++r)this.getParsed(r)[e.axis]!==null&&!i[r].hidden&&i[r].draw(this._ctx)}}class Rg extends wi{static id="bubble";static defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};static overrides={scales:{x:{type:"linear"},y:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,s){const r=super.parsePrimitiveData(t,e,i,s);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+i).radius;return r}parseArrayData(t,e,i,s){const r=super.parseArrayData(t,e,i,s);for(let o=0;o<r.length;o++){const a=e[i+o];r[o]._custom=Ut(a[2],this.resolveDataElementOptions(o+i).radius)}return r}parseObjectData(t,e,i,s){const r=super.parseObjectData(t,e,i,s);for(let o=0;o<r.length;o++){const a=e[i+o];r[o]._custom=Ut(a&&a.r&&+a.r,this.resolveDataElementOptions(o+i).radius)}return r}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),l=r.getLabelForValue(o.y),c=o._custom;return{label:i[t]||"",value:"("+a+", "+l+(c?", "+c:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(e,s),h=o.axis,d=a.axis;for(let u=e;u<e+i;u++){const f=t[u],g=!r&&this.getParsed(u),_={},m=_[h]=r?o.getPixelForDecimal(.5):o.getPixelForValue(g[h]),p=_[d]=r?a.getBasePixel():a.getPixelForValue(g[d]);_.skip=isNaN(m)||isNaN(p),c&&(_.options=l||this.resolveDataElementOptions(u,f.active?"active":s),r&&(_.options.radius=0)),this.updateElement(f,u,_,s)}}resolveDataElementOptions(t,e){const i=this.getParsed(t);let s=super.resolveDataElementOptions(t,e);s.$shared&&(s=Object.assign({},s,{$shared:!1}));const r=s.radius;return e!=="active"&&(s.radius=0),s.radius+=Ut(i&&i._custom,r),s}}function Pg(n,t,e){let i=1,s=1,r=0,o=0;if(t<ve){const a=n,l=a+t,c=Math.cos(a),h=Math.sin(a),d=Math.cos(l),u=Math.sin(l),f=(M,S,E)=>sr(M,a,l,!0)?1:Math.max(S,S*e,E,E*e),g=(M,S,E)=>sr(M,a,l,!0)?-1:Math.min(S,S*e,E,E*e),_=f(0,c,d),m=f(Re,h,u),p=g(Jt,c,d),x=g(Jt+Re,h,u);i=(_-p)/2,s=(m-x)/2,r=-(_+p)/2,o=-(m+x)/2}return{ratioX:i,ratioY:s,offsetX:r,offsetY:o}}class Ql extends wi{static id="doughnut";static defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};static descriptors={_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((l,c)=>{const d=t.getDatasetMeta(0).controller.getStyle(c);return{text:l,fillStyle:d.backgroundColor,fontColor:r,hidden:!t.getDataVisibility(c),lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:d.borderWidth,strokeStyle:d.borderColor,textAlign:s,pointStyle:i,borderRadius:o&&(a||d.borderRadius),index:c}}):[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}}};constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const i=this.getDataset().data,s=this._cachedMeta;if(this._parsing===!1)s._parsed=i;else{let r=l=>+i[l];if(Xt(i[t])){const{key:l="value"}=this._parsing;r=c=>+yi(i[c],l)}let o,a;for(o=t,a=t+e;o<a;++o)s._parsed[o]=r(o)}}_getRotation(){return Sn(this.options.rotation-90)}_getCircumference(){return Sn(this.options.circumference)}_getRotationExtents(){let t=ve,e=-ve;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const s=this.chart.getDatasetMeta(i).controller,r=s._getRotation(),o=s._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:i}=e,s=this._cachedMeta,r=s.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-o)/2,0),l=Math.min(zp(this.options.cutout,a),1),c=this._getRingWeight(this.index),{circumference:h,rotation:d}=this._getRotationExtents(),{ratioX:u,ratioY:f,offsetX:g,offsetY:_}=Pg(d,h,l),m=(i.width-o)/u,p=(i.height-o)/f,x=Math.max(Math.min(m,p)/2,0),M=tu(this.options.radius,x),S=Math.max(M*l,0),E=(M-S)/this._getVisibleDatasetWeightTotal();this.offsetX=g*M,this.offsetY=_*M,s.total=this.calculateTotal(),this.outerRadius=M-E*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-E*c,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const i=this.options,s=this._cachedMeta,r=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||s._parsed[t]===null||s.data[t].hidden?0:this.calculateCircumference(s._parsed[t]*r/ve)}updateElements(t,e,i,s){const r=s==="reset",o=this.chart,a=o.chartArea,c=o.options.animation,h=(a.left+a.right)/2,d=(a.top+a.bottom)/2,u=r&&c.animateScale,f=u?0:this.innerRadius,g=u?0:this.outerRadius,{sharedOptions:_,includeOptions:m}=this._getSharedOptions(e,s);let p=this._getRotation(),x;for(x=0;x<e;++x)p+=this._circumference(x,r);for(x=e;x<e+i;++x){const M=this._circumference(x,r),S=t[x],E={x:h+this.offsetX,y:d+this.offsetY,startAngle:p,endAngle:p+M,circumference:M,outerRadius:g,innerRadius:f};m&&(E.options=_||this.resolveDataElementOptions(x,S.active?"active":s)),p+=M,this.updateElement(S,x,E,s)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let i=0,s;for(s=0;s<e.length;s++){const r=t._parsed[s];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(s)&&!e[s].hidden&&(i+=Math.abs(r))}return i}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?ve*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],r=fr(e._parsed[t],i.options.locale);return{label:s[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const i=this.chart;let s,r,o,a,l;if(!t){for(s=0,r=i.data.datasets.length;s<r;++s)if(i.isDatasetVisible(s)){o=i.getDatasetMeta(s),t=o.data,a=o.controller;break}}if(!t)return 0;for(s=0,r=t.length;s<r;++s)l=a.resolveDataElementOptions(s),l.borderAlign!=="inner"&&(e=Math.max(e,l.borderWidth||0,l.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let i=0,s=t.length;i<s;++i){const r=this.resolveDataElementOptions(i);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(Ut(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}class Dg extends wi{static id="line";static defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:s=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:l}=lu(e,s,o);this._drawStart=a,this._drawCount=l,cu(e)&&(a=0,l=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=s;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:c},t),this.updateElements(s,a,l,t)}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:h,includeOptions:d}=this._getSharedOptions(e,s),u=o.axis,f=a.axis,{spanGaps:g,segment:_}=this.options,m=vs(g)?g:Number.POSITIVE_INFINITY,p=this.chart._animationsDisabled||r||s==="none",x=e+i,M=t.length;let S=e>0&&this.getParsed(e-1);for(let E=0;E<M;++E){const A=t[E],w=p?A:{};if(E<e||E>=x){w.skip=!0;continue}const P=this.getParsed(E),b=Gt(P[f]),T=w[u]=o.getPixelForValue(P[u],E),R=w[f]=r||b?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,P,l):P[f],E);w.skip=isNaN(T)||isNaN(R)||b,w.stop=E>0&&Math.abs(P[u]-S[u])>m,_&&(w.parsed=P,w.raw=c.data[E]),d&&(w.options=h||this.resolveDataElementOptions(E,A.active?"active":s)),p||this.updateElement(A,E,w,s),S=P}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return i;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}class Cu extends wi{static id="polarArea";static defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i,color:s}}=t.legend.options;return e.labels.map((r,o)=>{const l=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:s,lineWidth:l.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],r=fr(e._parsed[t].r,i.options.locale);return{label:s[t]||"",value:r}}parseObjectData(t,e,i,s){return _u.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((i,s)=>{const r=this.getParsed(s).r;!isNaN(r)&&this.chart.getDataVisibility(s)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,i=t.options,s=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(s/2,0),o=Math.max(i.cutoutPercentage?r/100*i.cutoutPercentage:1,0),a=(r-o)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,i,s){const r=s==="reset",o=this.chart,l=o.options.animation,c=this._cachedMeta.rScale,h=c.xCenter,d=c.yCenter,u=c.getIndexAngle(0)-.5*Jt;let f=u,g;const _=360/this.countVisibleElements();for(g=0;g<e;++g)f+=this._computeAngle(g,s,_);for(g=e;g<e+i;g++){const m=t[g];let p=f,x=f+this._computeAngle(g,s,_),M=o.getDataVisibility(g)?c.getDistanceFromCenterForValue(this.getParsed(g).r):0;f=x,r&&(l.animateScale&&(M=0),l.animateRotate&&(p=x=u));const S={x:h,y:d,innerRadius:0,outerRadius:M,startAngle:p,endAngle:x,options:this.resolveDataElementOptions(g,m.active?"active":s)};this.updateElement(m,g,S,s)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((i,s)=>{!isNaN(this.getParsed(s).r)&&this.chart.getDataVisibility(s)&&e++}),e}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?Sn(this.resolveDataElementOptions(t,e).angle||i):0}}class Lg extends Ql{static id="pie";static defaults={cutout:0,rotation:0,circumference:360,radius:"100%"}}class Ig extends wi{static id="radar";static defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};static overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}parseObjectData(t,e,i,s){return _u.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta,i=e.dataset,s=e.data||[],r=e.iScale.getLabels();if(i.points=s,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:r.length===s.length,options:o};this.updateElement(i,void 0,a,t)}this.updateElements(s,0,s.length,t)}updateElements(t,e,i,s){const r=this._cachedMeta.rScale,o=s==="reset";for(let a=e;a<e+i;a++){const l=t[a],c=this.resolveDataElementOptions(a,l.active?"active":s),h=r.getPointPositionForValue(a,this.getParsed(a).r),d=o?r.xCenter:h.x,u=o?r.yCenter:h.y,f={x:d,y:u,angle:h.angle,skip:isNaN(d)||isNaN(u),options:c};this.updateElement(l,a,f,s)}}}class Fg extends wi{static id="scatter";static defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};static overrides={interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}};getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),l=r.getLabelForValue(o.y);return{label:i[t]||"",value:"("+a+", "+l+")"}}update(t){const e=this._cachedMeta,{data:i=[]}=e,s=this.chart._animationsDisabled;let{start:r,count:o}=lu(e,i,s);if(this._drawStart=r,this._drawCount=o,cu(e)&&(r=0,o=i.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=i;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(a,void 0,{animated:!s,options:c},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(i,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,h=this.resolveDataElementOptions(e,s),d=this.getSharedOptions(h),u=this.includeOptions(s,d),f=o.axis,g=a.axis,{spanGaps:_,segment:m}=this.options,p=vs(_)?_:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||r||s==="none";let M=e>0&&this.getParsed(e-1);for(let S=e;S<e+i;++S){const E=t[S],A=this.getParsed(S),w=x?E:{},P=Gt(A[g]),b=w[f]=o.getPixelForValue(A[f],S),T=w[g]=r||P?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,A,l):A[g],S);w.skip=isNaN(b)||isNaN(T)||P,w.stop=S>0&&Math.abs(A[f]-M[f])>p,m&&(w.parsed=A,w.raw=c.data[S]),u&&(w.options=d||this.resolveDataElementOptions(S,E.active?"active":s)),x||this.updateElement(E,S,w,s),M=A}this.updateSharedOptions(d,s,h)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let l=e.length-1;l>=0;--l)a=Math.max(a,e[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const i=t.dataset,s=i.options&&i.options.borderWidth||0;if(!e.length)return s;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(s,r,o)/2}}var Ug=Object.freeze({__proto__:null,BarController:Cg,BubbleController:Rg,DoughnutController:Ql,LineController:Dg,PieController:Lg,PolarAreaController:Cu,RadarController:Ig,ScatterController:Fg});function Li(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class tc{static override(t){Object.assign(tc.prototype,t)}options;constructor(t){this.options=t||{}}init(){}formats(){return Li()}parse(){return Li()}format(){return Li()}add(){return Li()}diff(){return Li()}startOf(){return Li()}endOf(){return Li()}}var Ng={_date:tc};function Og(n,t,e,i){const{controller:s,data:r,_sorted:o}=n,a=s._cachedMeta.iScale,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const c=a._reversePixels?Qp:Qn;if(i){if(s._sharedOptions){const h=r[0],d=typeof h.getRange=="function"&&h.getRange(t);if(d){const u=c(r,t,e-d),f=c(r,t,e+d);return{lo:u.lo,hi:f.hi}}}}else{const h=c(r,t,e);if(l){const{vScale:d}=s._cachedMeta,{_parsed:u}=n,f=u.slice(0,h.lo+1).reverse().findIndex(_=>!Gt(_[d.axis]));h.lo-=Math.max(0,f);const g=u.slice(h.hi).findIndex(_=>!Gt(_[d.axis]));h.hi+=Math.max(0,g)}return h}}return{lo:0,hi:r.length-1}}function Ao(n,t,e,i,s){const r=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,l=r.length;a<l;++a){const{index:c,data:h}=r[a],{lo:d,hi:u}=Og(r[a],t,o,s);for(let f=d;f<=u;++f){const g=h[f];g.skip||i(g,c,f)}}}function kg(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(i,s){const r=t?Math.abs(i.x-s.x):0,o=e?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function Wo(n,t,e,i,s){const r=[];return!s&&!n.isPointInArea(t)||Ao(n,e,t,function(a,l,c){!s&&!ti(a,n.chartArea,0)||a.inRange(t.x,t.y,i)&&r.push({element:a,datasetIndex:l,index:c})},!0),r}function Bg(n,t,e,i){let s=[];function r(o,a,l){const{startAngle:c,endAngle:h}=o.getProps(["startAngle","endAngle"],i),{angle:d}=iu(o,{x:t.x,y:t.y});sr(d,c,h)&&s.push({element:o,datasetIndex:a,index:l})}return Ao(n,e,t,r),s}function zg(n,t,e,i,s,r){let o=[];const a=kg(e);let l=Number.POSITIVE_INFINITY;function c(h,d,u){const f=h.inRange(t.x,t.y,s);if(i&&!f)return;const g=h.getCenterPoint(s);if(!(!!r||n.isPointInArea(g))&&!f)return;const m=a(t,g);m<l?(o=[{element:h,datasetIndex:d,index:u}],l=m):m===l&&o.push({element:h,datasetIndex:d,index:u})}return Ao(n,e,t,c),o}function Xo(n,t,e,i,s,r){return!r&&!n.isPointInArea(t)?[]:e==="r"&&!i?Bg(n,t,e,s):zg(n,t,e,i,s,r)}function sh(n,t,e,i,s){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return Ao(n,e,t,(l,c,h)=>{l[o]&&l[o](t[e],s)&&(r.push({element:l,datasetIndex:c,index:h}),a=a||l.inRange(t.x,t.y,s))}),i&&!a?[]:r}var Vg={modes:{index(n,t,e,i){const s=zi(t,n),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?Wo(n,s,r,i,o):Xo(n,s,r,!1,i,o),l=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(c=>{const h=a[0].index,d=c.data[h];d&&!d.skip&&l.push({element:d,datasetIndex:c.index,index:h})}),l):[]},dataset(n,t,e,i){const s=zi(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?Wo(n,s,r,i,o):Xo(n,s,r,!1,i,o);if(a.length>0){const l=a[0].datasetIndex,c=n.getDatasetMeta(l).data;a=[];for(let h=0;h<c.length;++h)a.push({element:c[h],datasetIndex:l,index:h})}return a},point(n,t,e,i){const s=zi(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Wo(n,s,r,i,o)},nearest(n,t,e,i){const s=zi(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Xo(n,s,r,e.intersect,i,o)},x(n,t,e,i){const s=zi(t,n);return sh(n,s,"x",e.intersect,i)},y(n,t,e,i){const s=zi(t,n);return sh(n,s,"y",e.intersect,i)}}};const Ru=["left","top","right","bottom"];function Ls(n,t){return n.filter(e=>e.pos===t)}function rh(n,t){return n.filter(e=>Ru.indexOf(e.pos)===-1&&e.box.axis===t)}function Is(n,t){return n.sort((e,i)=>{const s=t?i:e,r=t?e:i;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function Hg(n){const t=[];let e,i,s,r,o,a;for(e=0,i=(n||[]).length;e<i;++e)s=n[e],{position:r,options:{stack:o,stackWeight:a=1}}=s,t.push({index:e,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return t}function Gg(n){const t={};for(const e of n){const{stack:i,pos:s,stackWeight:r}=e;if(!i||!Ru.includes(s))continue;const o=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function Wg(n,t){const e=Gg(n),{vBoxMaxWidth:i,hBoxMaxHeight:s}=t;let r,o,a;for(r=0,o=n.length;r<o;++r){a=n[r];const{fullSize:l}=a.box,c=e[a.stack],h=c&&a.stackWeight/c.weight;a.horizontal?(a.width=h?h*i:l&&t.availableWidth,a.height=s):(a.width=i,a.height=h?h*s:l&&t.availableHeight)}return e}function Xg(n){const t=Hg(n),e=Is(t.filter(c=>c.box.fullSize),!0),i=Is(Ls(t,"left"),!0),s=Is(Ls(t,"right")),r=Is(Ls(t,"top"),!0),o=Is(Ls(t,"bottom")),a=rh(t,"x"),l=rh(t,"y");return{fullSize:e,leftAndTop:i.concat(r),rightAndBottom:s.concat(l).concat(o).concat(a),chartArea:Ls(t,"chartArea"),vertical:i.concat(s).concat(l),horizontal:r.concat(o).concat(a)}}function oh(n,t,e,i){return Math.max(n[e],t[e])+Math.max(n[i],t[i])}function Pu(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function Yg(n,t,e,i){const{pos:s,box:r}=e,o=n.maxPadding;if(!Xt(s)){e.size&&(n[s]-=e.size);const d=i[e.stack]||{size:0,count:1};d.size=Math.max(d.size,e.horizontal?r.height:r.width),e.size=d.size/d.count,n[s]+=e.size}r.getPadding&&Pu(o,r.getPadding());const a=Math.max(0,t.outerWidth-oh(o,n,"left","right")),l=Math.max(0,t.outerHeight-oh(o,n,"top","bottom")),c=a!==n.w,h=l!==n.h;return n.w=a,n.h=l,e.horizontal?{same:c,other:h}:{same:h,other:c}}function $g(n){const t=n.maxPadding;function e(i){const s=Math.max(t[i]-n[i],0);return n[i]+=s,s}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function qg(n,t){const e=t.maxPadding;function i(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return i(n?["left","right"]:["top","bottom"])}function Xs(n,t,e,i){const s=[];let r,o,a,l,c,h;for(r=0,o=n.length,c=0;r<o;++r){a=n[r],l=a.box,l.update(a.width||t.w,a.height||t.h,qg(a.horizontal,t));const{same:d,other:u}=Yg(t,e,a,i);c|=d&&s.length,h=h||u,l.fullSize||s.push(a)}return c&&Xs(s,t,e,i)||h}function Cr(n,t,e,i,s){n.top=e,n.left=t,n.right=t+i,n.bottom=e+s,n.width=i,n.height=s}function ah(n,t,e,i){const s=e.padding;let{x:r,y:o}=t;for(const a of n){const l=a.box,c=i[a.stack]||{placed:0,weight:1},h=a.stackWeight/c.weight||1;if(a.horizontal){const d=t.w*h,u=c.size||l.height;ir(c.start)&&(o=c.start),l.fullSize?Cr(l,s.left,o,e.outerWidth-s.right-s.left,u):Cr(l,t.left+c.placed,o,d,u),c.start=o,c.placed+=d,o=l.bottom}else{const d=t.h*h,u=c.size||l.width;ir(c.start)&&(r=c.start),l.fullSize?Cr(l,r,s.top,u,e.outerHeight-s.bottom-s.top):Cr(l,r,t.top+c.placed,u,d),c.start=r,c.placed+=d,r=l.right}}t.x=r,t.y=o}var Xe={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,i){if(!n)return;const s=qe(n.options.layout.padding),r=Math.max(t-s.width,0),o=Math.max(e-s.height,0),a=Xg(n.boxes),l=a.vertical,c=a.horizontal;ce(n.boxes,_=>{typeof _.beforeLayout=="function"&&_.beforeLayout()});const h=l.reduce((_,m)=>m.box.options&&m.box.options.display===!1?_:_+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:e,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/h,hBoxMaxHeight:o/2}),u=Object.assign({},s);Pu(u,qe(i));const f=Object.assign({maxPadding:u,w:r,h:o,x:s.left,y:s.top},s),g=Wg(l.concat(c),d);Xs(a.fullSize,f,d,g),Xs(l,f,d,g),Xs(c,f,d,g)&&Xs(l,f,d,g),$g(f),ah(a.leftAndTop,f,d,g),f.x+=f.w,f.y+=f.h,ah(a.rightAndBottom,f,d,g),n.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},ce(a.chartArea,_=>{const m=_.box;Object.assign(m,n.chartArea),m.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class Du{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,s){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):i)}}isAttached(t){return!0}updateConfig(t){}}class jg extends Du{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const no="$chartjs",Kg={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},lh=n=>n===null||n==="";function Zg(n,t){const e=n.style,i=n.getAttribute("height"),s=n.getAttribute("width");if(n[no]={initial:{height:i,width:s,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",lh(s)){const r=Xc(n,"width");r!==void 0&&(n.width=r)}if(lh(i))if(n.style.height==="")n.height=n.width/(t||2);else{const r=Xc(n,"height");r!==void 0&&(n.height=r)}return n}const Lu=Ym?{passive:!0}:!1;function Jg(n,t,e){n&&n.addEventListener(t,e,Lu)}function Qg(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,Lu)}function t_(n,t){const e=Kg[n.type]||n.type,{x:i,y:s}=zi(n,t);return{type:e,chart:t,native:n,x:i!==void 0?i:null,y:s!==void 0?s:null}}function go(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function e_(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||go(a.addedNodes,i),o=o&&!go(a.removedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}function n_(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||go(a.removedNodes,i),o=o&&!go(a.addedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}const or=new Map;let ch=0;function Iu(){const n=window.devicePixelRatio;n!==ch&&(ch=n,or.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function i_(n,t){or.size||window.addEventListener("resize",Iu),or.set(n,t)}function s_(n){or.delete(n),or.size||window.removeEventListener("resize",Iu)}function r_(n,t,e){const i=n.canvas,s=i&&Jl(i);if(!s)return;const r=au((a,l)=>{const c=s.clientWidth;e(a,l),c<s.clientWidth&&e()},window),o=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,h=l.contentRect.height;c===0&&h===0||r(c,h)});return o.observe(s),i_(n,r),o}function Yo(n,t,e){e&&e.disconnect(),t==="resize"&&s_(n)}function o_(n,t,e){const i=n.canvas,s=au(r=>{n.ctx!==null&&e(t_(r,n))},n);return Jg(i,t,s),s}class a_ extends Du{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(Zg(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e[no])return!1;const i=e[no].initial;["height","width"].forEach(r=>{const o=i[r];Gt(o)?e.removeAttribute(r):e.setAttribute(r,o)});const s=i.style||{};return Object.keys(s).forEach(r=>{e.style[r]=s[r]}),e.width=e.width,delete e[no],!0}addEventListener(t,e,i){this.removeEventListener(t,e);const s=t.$proxies||(t.$proxies={}),o={attach:e_,detach:n_,resize:r_}[e]||o_;s[e]=o(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),s=i[e];if(!s)return;({attach:Yo,detach:Yo,resize:Yo}[e]||Qg)(t,e,s),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,s){return Xm(t,e,i,s)}isAttached(t){const e=t&&Jl(t);return!!(e&&e.isConnected)}}function l_(n){return!Zl()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?jg:a_}class li{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return vs(this.x)&&vs(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const s={};return t.forEach(r=>{s[r]=i[r]&&i[r].active()?i[r]._to:this[r]}),s}}function c_(n,t){const e=n.options.ticks,i=h_(n),s=Math.min(e.maxTicksLimit||i,i),r=e.major.enabled?u_(t):[],o=r.length,a=r[0],l=r[o-1],c=[];if(o>s)return f_(t,c,r,o/s),c;const h=d_(r,t,s);if(o>0){let d,u;const f=o>1?Math.round((l-a)/(o-1)):null;for(Rr(t,c,h,Gt(f)?0:a-f,a),d=0,u=o-1;d<u;d++)Rr(t,c,h,r[d],r[d+1]);return Rr(t,c,h,l,Gt(f)?t.length:l+f),c}return Rr(t,c,h),c}function h_(n){const t=n.options.offset,e=n._tickSize(),i=n._length/e+(t?0:1),s=n._maxLength/e;return Math.floor(Math.min(i,s))}function d_(n,t,e){const i=p_(n),s=t.length/e;if(!i)return Math.max(s,1);const r=qp(i);for(let o=0,a=r.length-1;o<a;o++){const l=r[o];if(l>s)return l}return Math.max(s,1)}function u_(n){const t=[];let e,i;for(e=0,i=n.length;e<i;e++)n[e].major&&t.push(e);return t}function f_(n,t,e,i){let s=0,r=e[0],o;for(i=Math.ceil(i),o=0;o<n.length;o++)o===r&&(t.push(n[o]),s++,r=e[s*i])}function Rr(n,t,e,i,s){const r=Ut(i,0),o=Math.min(Ut(s,n.length),n.length);let a=0,l,c,h;for(e=Math.ceil(e),s&&(l=s-i,e=l/Math.floor(l/e)),h=r;h<0;)a++,h=Math.round(r+a*e);for(c=Math.max(r,0);c<o;c++)c===h&&(t.push(n[c]),a++,h=Math.round(r+a*e))}function p_(n){const t=n.length;let e,i;if(t<2)return!1;for(i=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==i)return!1;return i}const m_=n=>n==="left"?"right":n==="right"?"left":n,hh=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,dh=(n,t)=>Math.min(t||n,n);function uh(n,t){const e=[],i=n.length/t,s=n.length;let r=0;for(;r<s;r+=i)e.push(n[Math.floor(r)]);return e}function g_(n,t,e){const i=n.ticks.length,s=Math.min(t,i-1),r=n._startPixel,o=n._endPixel,a=1e-6;let l=n.getPixelForTick(s),c;if(!(e&&(i===1?c=Math.max(l-r,o-l):t===0?c=(n.getPixelForTick(1)-l)/2:c=(l-n.getPixelForTick(s-1))/2,l+=s<t?c:-c,l<r-a||l>o+a)))return l}function __(n,t){ce(n,e=>{const i=e.gc,s=i.length/2;let r;if(s>t){for(r=0;r<s;++r)delete e.data[i[r]];i.splice(0,s)}})}function Fs(n){return n.drawTicks?n.tickLength:0}function fh(n,t){if(!n.display)return 0;const e=Fe(n.font,t),i=qe(n.padding);return(be(n.text)?n.text.length:1)*e.lineHeight+i.height}function x_(n,t){return Ai(n,{scale:t,type:"scale"})}function v_(n,t,e){return Ai(n,{tick:e,index:t,type:"tick"})}function b_(n,t,e){let i=Xl(n);return(e&&t!=="right"||!e&&t==="right")&&(i=m_(i)),i}function M_(n,t,e,i){const{top:s,left:r,bottom:o,right:a,chart:l}=n,{chartArea:c,scales:h}=l;let d=0,u,f,g;const _=o-s,m=a-r;if(n.isHorizontal()){if(f=Ge(i,r,a),Xt(e)){const p=Object.keys(e)[0],x=e[p];g=h[p].getPixelForValue(x)+_-t}else e==="center"?g=(c.bottom+c.top)/2+_-t:g=hh(n,e,t);u=a-r}else{if(Xt(e)){const p=Object.keys(e)[0],x=e[p];f=h[p].getPixelForValue(x)-m+t}else e==="center"?f=(c.left+c.right)/2-m+t:f=hh(n,e,t);g=Ge(i,o,s),d=e==="left"?-Re:Re}return{titleX:f,titleY:g,maxWidth:u,rotation:d}}class Ji extends li{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:s}=this;return t=cn(t,Number.POSITIVE_INFINITY),e=cn(e,Number.NEGATIVE_INFINITY),i=cn(i,Number.POSITIVE_INFINITY),s=cn(s,Number.NEGATIVE_INFINITY),{min:cn(t,i),max:cn(e,s),minDefined:Te(t),maxDefined:Te(e)}}getMinMax(t){let{min:e,max:i,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:e,max:i};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,t),s||(e=Math.min(e,o.min)),r||(i=Math.max(i,o.max));return e=r&&e>i?i:e,i=s&&e>i?e:i,{min:cn(e,cn(i,e)),max:cn(i,cn(e,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){_e(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=ym(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?uh(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=c_(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,i;this.isHorizontal()?(e=this.left,i=this.right):(e=this.top,i=this.bottom,t=!t),this._startPixel=e,this._endPixel=i,this._reversePixels=t,this._length=i-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){_e(this.options.afterUpdate,[this])}beforeSetDimensions(){_e(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){_e(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),_e(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){_e(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i],r.label=_e(e.callback,[r.value,i,t],this)}afterTickToLabelConversion(){_e(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){_e(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=dh(this.ticks.length,t.ticks.maxTicksLimit),s=e.minRotation||0,r=e.maxRotation;let o=s,a,l,c;if(!this._isVisible()||!e.display||s>=r||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const h=this._getLabelSizes(),d=h.widest.width,u=h.highest.height,f=Be(this.chart.width-d,0,this.maxWidth);a=t.offset?this.maxWidth/i:f/(i-1),d+6>a&&(a=f/(i-(t.offset?.5:1)),l=this.maxHeight-Fs(t.grid)-e.padding-fh(t.title,this.chart.options.font),c=Math.sqrt(d*d+u*u),o=Gl(Math.min(Math.asin(Be((h.highest.height+6)/a,-1,1)),Math.asin(Be(l/c,-1,1))-Math.asin(Be(u/c,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){_e(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){_e(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=fh(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=Fs(r)+l):(t.height=this.maxHeight,t.width=Fs(r)+l),i.display&&this.ticks.length){const{first:c,last:h,widest:d,highest:u}=this._getLabelSizes(),f=i.padding*2,g=Sn(this.labelRotation),_=Math.cos(g),m=Math.sin(g);if(a){const p=i.mirror?0:m*d.width+_*u.height;t.height=Math.min(this.maxHeight,t.height+p+f)}else{const p=i.mirror?0:_*d.width+m*u.height;t.width=Math.min(this.maxWidth,t.width+p+f)}this._calculatePadding(c,h,m,_)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,s){const{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let u=0,f=0;l?c?(u=s*t.width,f=i*e.height):(u=i*t.height,f=s*e.width):r==="start"?f=e.width:r==="end"?u=t.width:r!=="inner"&&(u=t.width/2,f=e.width/2),this.paddingLeft=Math.max((u-h+o)*this.width/(this.width-h),0),this.paddingRight=Math.max((f-d+o)*this.width/(this.width-d),0)}else{let h=e.height/2,d=t.height/2;r==="start"?(h=0,d=t.height):r==="end"&&(h=e.height,d=0),this.paddingTop=h+o,this.paddingBottom=d+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){_e(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,i;for(e=0,i=t.length;e<i;e++)Gt(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=uh(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(e/dh(e,i));let c=0,h=0,d,u,f,g,_,m,p,x,M,S,E;for(d=0;d<e;d+=l){if(g=t[d].label,_=this._resolveTickFontOptions(d),s.font=m=_.string,p=r[m]=r[m]||{data:{},gc:[]},x=_.lineHeight,M=S=0,!Gt(g)&&!be(g))M=po(s,p.data,p.gc,M,g),S=x;else if(be(g))for(u=0,f=g.length;u<f;++u)E=g[u],!Gt(E)&&!be(E)&&(M=po(s,p.data,p.gc,M,E),S+=x);o.push(M),a.push(S),c=Math.max(M,c),h=Math.max(S,h)}__(r,e);const A=o.indexOf(c),w=a.indexOf(h),P=b=>({width:o[b]||0,height:a[b]||0});return{first:P(0),last:P(e-1),widest:P(A),highest:P(w),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return Jp(this._alignToPixels?Di(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=v_(this.getContext(),t,i))}return this.$context||(this.$context=x_(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=Sn(this.labelRotation),i=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*i>a*s?a/i:l/s:l*s<a*i?l/i:a/s}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,s=this.options,{grid:r,position:o,border:a}=s,l=r.offset,c=this.isHorizontal(),d=this.ticks.length+(l?1:0),u=Fs(r),f=[],g=a.setContext(this.getContext()),_=g.display?g.width:0,m=_/2,p=function(B){return Di(i,B,_)};let x,M,S,E,A,w,P,b,T,R,N,k;if(o==="top")x=p(this.bottom),w=this.bottom-u,b=x-m,R=p(t.top)+m,k=t.bottom;else if(o==="bottom")x=p(this.top),R=t.top,k=p(t.bottom)-m,w=x+m,b=this.top+u;else if(o==="left")x=p(this.right),A=this.right-u,P=x-m,T=p(t.left)+m,N=t.right;else if(o==="right")x=p(this.left),T=t.left,N=p(t.right)-m,A=x+m,P=this.left+u;else if(e==="x"){if(o==="center")x=p((t.top+t.bottom)/2+.5);else if(Xt(o)){const B=Object.keys(o)[0],z=o[B];x=p(this.chart.scales[B].getPixelForValue(z))}R=t.top,k=t.bottom,w=x+m,b=w+u}else if(e==="y"){if(o==="center")x=p((t.left+t.right)/2);else if(Xt(o)){const B=Object.keys(o)[0],z=o[B];x=p(this.chart.scales[B].getPixelForValue(z))}A=x-m,P=A-u,T=t.left,N=t.right}const X=Ut(s.ticks.maxTicksLimit,d),W=Math.max(1,Math.ceil(d/X));for(M=0;M<d;M+=W){const B=this.getContext(M),z=r.setContext(B),j=a.setContext(B),et=z.lineWidth,it=z.color,ut=j.dash||[],Pt=j.dashOffset,Dt=z.tickWidth,te=z.tickColor,ee=z.tickBorderDash||[],$=z.tickBorderDashOffset;S=g_(this,M,l),S!==void 0&&(E=Di(i,S,et),c?A=P=T=N=E:w=b=R=k=E,f.push({tx1:A,ty1:w,tx2:P,ty2:b,x1:T,y1:R,x2:N,y2:k,width:et,color:it,borderDash:ut,borderDashOffset:Pt,tickWidth:Dt,tickColor:te,tickBorderDash:ee,tickBorderDashOffset:$}))}return this._ticksLength=d,this._borderValue=x,f}_computeLabelItems(t){const e=this.axis,i=this.options,{position:s,ticks:r}=i,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:h,mirror:d}=r,u=Fs(i.grid),f=u+h,g=d?-h:f,_=-Sn(this.labelRotation),m=[];let p,x,M,S,E,A,w,P,b,T,R,N,k="middle";if(s==="top")A=this.bottom-g,w=this._getXAxisLabelAlignment();else if(s==="bottom")A=this.top+g,w=this._getXAxisLabelAlignment();else if(s==="left"){const W=this._getYAxisLabelAlignment(u);w=W.textAlign,E=W.x}else if(s==="right"){const W=this._getYAxisLabelAlignment(u);w=W.textAlign,E=W.x}else if(e==="x"){if(s==="center")A=(t.top+t.bottom)/2+f;else if(Xt(s)){const W=Object.keys(s)[0],B=s[W];A=this.chart.scales[W].getPixelForValue(B)+f}w=this._getXAxisLabelAlignment()}else if(e==="y"){if(s==="center")E=(t.left+t.right)/2-f;else if(Xt(s)){const W=Object.keys(s)[0],B=s[W];E=this.chart.scales[W].getPixelForValue(B)}w=this._getYAxisLabelAlignment(u).textAlign}e==="y"&&(l==="start"?k="top":l==="end"&&(k="bottom"));const X=this._getLabelSizes();for(p=0,x=a.length;p<x;++p){M=a[p],S=M.label;const W=r.setContext(this.getContext(p));P=this.getPixelForTick(p)+r.labelOffset,b=this._resolveTickFontOptions(p),T=b.lineHeight,R=be(S)?S.length:1;const B=R/2,z=W.color,j=W.textStrokeColor,et=W.textStrokeWidth;let it=w;o?(E=P,w==="inner"&&(p===x-1?it=this.options.reverse?"left":"right":p===0?it=this.options.reverse?"right":"left":it="center"),s==="top"?c==="near"||_!==0?N=-R*T+T/2:c==="center"?N=-X.highest.height/2-B*T+T:N=-X.highest.height+T/2:c==="near"||_!==0?N=T/2:c==="center"?N=X.highest.height/2-B*T:N=X.highest.height-R*T,d&&(N*=-1),_!==0&&!W.showLabelBackdrop&&(E+=T/2*Math.sin(_))):(A=P,N=(1-R)*T/2);let ut;if(W.showLabelBackdrop){const Pt=qe(W.backdropPadding),Dt=X.heights[p],te=X.widths[p];let ee=N-Pt.top,$=0-Pt.left;switch(k){case"middle":ee-=Dt/2;break;case"bottom":ee-=Dt;break}switch(w){case"center":$-=te/2;break;case"right":$-=te;break;case"inner":p===x-1?$-=te:p>0&&($-=te/2);break}ut={left:$,top:ee,width:te+Pt.width,height:Dt+Pt.height,color:W.backdropColor}}m.push({label:S,font:b,textOffset:N,options:{rotation:_,color:z,strokeColor:j,strokeWidth:et,textAlign:it,textBaseline:k,translation:[E,A],backdrop:ut}})}return m}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Sn(this.labelRotation))return t==="top"?"left":"right";let s="center";return e.align==="start"?s="left":e.align==="end"?s="right":e.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,l=o.widest.width;let c,h;return e==="left"?s?(h=this.right+r,i==="near"?c="left":i==="center"?(c="center",h+=l/2):(c="right",h+=l)):(h=this.right-a,i==="near"?c="right":i==="center"?(c="center",h-=l/2):(c="left",h=this.left)):e==="right"?s?(h=this.left+r,i==="near"?c="right":i==="center"?(c="center",h-=l/2):(c="left",h-=l)):(h=this.left+a,i==="near"?c="left":i==="center"?(c="center",h+=l/2):(c="right",h=this.right)):c="right",{textAlign:c,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:s,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,s,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const s=this.ticks.findIndex(r=>r.value===t);return s>=0?e.setContext(this.getContext(s)).lineWidth:0}drawGrid(t){const e=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(l,c,h)=>{!h.width||!h.color||(i.save(),i.lineWidth=h.width,i.strokeStyle=h.color,i.setLineDash(h.borderDash||[]),i.lineDashOffset=h.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(e.display)for(r=0,o=s.length;r<o;++r){const l=s[r];e.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:i,grid:s}}=this,r=i.setContext(this.getContext()),o=i.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,h,d,u;this.isHorizontal()?(c=Di(t,this.left,o)-o/2,h=Di(t,this.right,a)+a/2,d=u=l):(d=Di(t,this.top,o)-o/2,u=Di(t,this.bottom,a)+a/2,c=h=l),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(c,d),e.lineTo(h,u),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&yo(i,s);const r=this.getLabelItems(t);for(const o of r){const a=o.options,l=o.font,c=o.label,h=o.textOffset;Ki(i,c,0,h,l,a)}s&&Eo(i)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:s}}=this;if(!i.display)return;const r=Fe(i.font),o=qe(i.padding),a=i.align;let l=r.lineHeight/2;e==="bottom"||e==="center"||Xt(e)?(l+=o.bottom,be(i.text)&&(l+=r.lineHeight*(i.text.length-1))):l+=o.top;const{titleX:c,titleY:h,maxWidth:d,rotation:u}=M_(this,l,e,a);Ki(t,i.text,0,0,r,{color:i.color,maxWidth:d,rotation:u,textAlign:b_(a,e,s),textBaseline:"middle",translation:[c,h]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=Ut(t.grid&&t.grid.z,-1),s=Ut(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Ji.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[i]===this.id&&(!t||a.type===t)&&s.push(a)}return s}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return Fe(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Pr{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;E_(e)&&(i=this.register(e));const s=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in s||(s[r]=t,S_(t,o,i),this.override&&Me.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,s=this.scope;i in e&&delete e[i],s&&i in Me[s]&&(delete Me[s][i],this.override&&delete ji[i])}}function S_(n,t,e){const i=nr(Object.create(null),[e?Me.get(e):{},Me.get(t),n.defaults]);Me.set(t,i),n.defaultRoutes&&y_(t,n.defaultRoutes),n.descriptors&&Me.describe(t,n.descriptors)}function y_(n,t){Object.keys(t).forEach(e=>{const i=e.split("."),s=i.pop(),r=[n].concat(i).join("."),o=t[e].split("."),a=o.pop(),l=o.join(".");Me.route(r,s,l,a)})}function E_(n){return"id"in n&&"defaults"in n}class T_{constructor(){this.controllers=new Pr(wi,"datasets",!0),this.elements=new Pr(li,"elements"),this.plugins=new Pr(Object,"plugins"),this.scales=new Pr(Ji,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(s=>{const r=i||this._getRegistryForType(s);i||r.isForType(s)||r===this.plugins&&s.id?this._exec(t,r,s):ce(s,o=>{const a=i||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,i){const s=Hl(t);_e(i["before"+s],[],i),e[t](i),_e(i["after"+s],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const s=e.get(t);if(s===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return s}}var wn=new T_;class A_{constructor(){this._init=void 0}notify(t,e,i,s){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=s?this._descriptors(t).filter(s):this._descriptors(t),o=this._notify(r,t,e,i);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,i,s){s=s||{};for(const r of t){const o=r.plugin,a=o[i],l=[e,s,r.options];if(_e(a,l,o)===!1&&s.cancelable)return!1}return!0}invalidate(){Gt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,s=Ut(i.options&&i.options.plugins,{}),r=w_(i);return s===!1&&!e?[]:R_(t,r,s,e)}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,s=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(s(e,i),t,"stop"),this._notify(s(i,e),t,"start")}}function w_(n){const t={},e=[],i=Object.keys(wn.plugins.items);for(let r=0;r<i.length;r++)e.push(wn.getPlugin(i[r]));const s=n.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function C_(n,t){return!t&&n===!1?null:n===!0?{}:n}function R_(n,{plugins:t,localIds:e},i,s){const r=[],o=n.getContext();for(const a of t){const l=a.id,c=C_(i[l],s);c!==null&&r.push({plugin:a,options:P_(n.config,{plugin:a,local:e[l]},c,o)})}return r}function P_(n,{plugin:t,local:e},i,s){const r=n.pluginScopeKeys(t),o=n.getOptionScopes(i,r);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Ua(n,t){const e=Me.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function D_(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function L_(n,t){return n===t?"_index_":"_value_"}function ph(n){if(n==="x"||n==="y"||n==="r")return n}function I_(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function Na(n,...t){if(ph(n))return n;for(const e of t){const i=e.axis||I_(e.position)||n.length>1&&ph(n[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function mh(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function F_(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(i=>i.xAxisID===n||i.yAxisID===n);if(e.length)return mh(n,"x",e[0])||mh(n,"y",e[0])}return{}}function U_(n,t){const e=ji[n.type]||{scales:{}},i=t.scales||{},s=Ua(n.type,t),r=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!Xt(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=Na(o,a,F_(o,n),Me.scales[a.type]),c=L_(l,s),h=e.scales||{};r[o]=Zs(Object.create(null),[{axis:l},a,h[l],h[c]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,l=o.indexAxis||Ua(a,t),h=(ji[a]||{}).scales||{};Object.keys(h).forEach(d=>{const u=D_(d,l),f=o[u+"AxisID"]||u;r[f]=r[f]||Object.create(null),Zs(r[f],[{axis:u},i[f],h[d]])})}),Object.keys(r).forEach(o=>{const a=r[o];Zs(a,[Me.scales[a.type],Me.scale])}),r}function Fu(n){const t=n.options||(n.options={});t.plugins=Ut(t.plugins,{}),t.scales=U_(n,t)}function Uu(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function N_(n){return n=n||{},n.data=Uu(n.data),Fu(n),n}const gh=new Map,Nu=new Set;function Dr(n,t){let e=gh.get(n);return e||(e=t(),gh.set(n,e),Nu.add(e)),e}const Us=(n,t,e)=>{const i=yi(t,e);i!==void 0&&n.add(i)};class O_{constructor(t){this._config=N_(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Uu(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Fu(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Dr(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return Dr(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return Dr(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,i=this.type;return Dr(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const i=this._scopeCache;let s=i.get(t);return(!s||e)&&(s=new Map,i.set(t,s)),s}getOptionScopes(t,e,i){const{options:s,type:r}=this,o=this._cachedScopes(t,i),a=o.get(e);if(a)return a;const l=new Set;e.forEach(h=>{t&&(l.add(t),h.forEach(d=>Us(l,t,d))),h.forEach(d=>Us(l,s,d)),h.forEach(d=>Us(l,ji[r]||{},d)),h.forEach(d=>Us(l,Me,d)),h.forEach(d=>Us(l,Ia,d))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),Nu.has(e)&&o.set(e,c),c}chartOptionScopes(){const{options:t,type:e}=this;return[t,ji[e]||{},Me.datasets[e]||{},{type:e},Me,Ia]}resolveNamedOptions(t,e,i,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=_h(this._resolverCache,t,s);let l=o;if(B_(o,e)){r.$shared=!1,i=Ei(i)?i():i;const c=this.createResolver(t,i,a);l=bs(o,i,c)}for(const c of e)r[c]=l[c];return r}createResolver(t,e,i=[""],s){const{resolver:r}=_h(this._resolverCache,t,i);return Xt(e)?bs(r,e,void 0,s):r}}function _h(n,t,e){let i=n.get(t);i||(i=new Map,n.set(t,i));const s=e.join();let r=i.get(s);return r||(r={resolver:ql(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},i.set(s,r)),r}const k_=n=>Xt(n)&&Object.getOwnPropertyNames(n).some(t=>Ei(n[t]));function B_(n,t){const{isScriptable:e,isIndexable:i}=fu(n);for(const s of t){const r=e(s),o=i(s),a=(o||r)&&n[s];if(r&&(Ei(a)||k_(a))||o&&be(a))return!0}return!1}var z_="4.5.1";const V_=["top","bottom","left","right","chartArea"];function xh(n,t){return n==="top"||n==="bottom"||V_.indexOf(n)===-1&&t==="x"}function vh(n,t){return function(e,i){return e[n]===i[n]?e[t]-i[t]:e[n]-i[n]}}function bh(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),_e(e&&e.onComplete,[n],t)}function H_(n){const t=n.chart,e=t.options.animation;_e(e&&e.onProgress,[n],t)}function Ou(n){return Zl()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const io={},Mh=n=>{const t=Ou(n);return Object.values(io).filter(e=>e.canvas===t).pop()};function G_(n,t,e){const i=Object.keys(n);for(const s of i){const r=+s;if(r>=t){const o=n[s];delete n[s],(e>0||r>t)&&(n[r+e]=o)}}}function W_(n,t,e,i){return!e||n.type==="mouseout"?null:i?t:n}class Oa{static defaults=Me;static instances=io;static overrides=ji;static registry=wn;static version=z_;static getChart=Mh;static register(...t){wn.add(...t),Sh()}static unregister(...t){wn.remove(...t),Sh()}constructor(t,e){const i=this.config=new O_(e),s=Ou(t),r=Mh(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||l_(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,o.aspectRatio),l=a&&a.canvas,c=l&&l.height,h=l&&l.width;if(this.id=Bp(),this.ctx=a,this.canvas=l,this.width=h,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new A_,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=nm(d=>this.update(d),o.resizeDelay||0),this._dataChanges=[],io[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}$n.listen(this,"complete",bh),$n.listen(this,"progress",H_),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:s,_aspectRatio:r}=this;return Gt(t)?e&&r?r:s?i/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return wn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Wc(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Vc(this.canvas,this.ctx),this}stop(){return $n.stop(this),this}resize(t,e){$n.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,s=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,e,r),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Wc(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),_e(i.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};ce(e,(i,s)=>{i.id=s})}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,s=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],l=Na(o,a),c=l==="r",h=l==="x";return{options:a,dposition:c?"chartArea":h?"bottom":"left",dtype:c?"radialLinear":h?"category":"linear"}}))),ce(r,o=>{const a=o.options,l=a.id,c=Na(l,a),h=Ut(a.type,o.dtype);(a.position===void 0||xh(a.position,c)!==xh(o.dposition))&&(a.position=o.dposition),s[l]=!0;let d=null;if(l in i&&i[l].type===h)d=i[l];else{const u=wn.getScale(h);d=new u({id:l,type:h,ctx:this.ctx,chart:this}),i[d.id]=d}d.init(a,t)}),ce(s,(o,a)=>{o||delete i[a]}),ce(i,o=>{Xe.configure(this,o,o.options),Xe.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((s,r)=>s.index-r.index),i>e){for(let s=e;s<i;++s)this._destroyDatasetMeta(s);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(vh("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((i,s)=>{e.filter(r=>r===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=e.length;i<s;i++){const r=e[i];let o=this.getDatasetMeta(i);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=r.indexAxis||Ua(a,this.options),o.order=r.order||0,o.index=i,o.label=""+r.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const l=wn.getController(a),{datasetElementType:c,dataElementType:h}=Me.datasets[a];Object.assign(l,{dataElementType:wn.getElement(h),datasetElementType:c&&wn.getElement(c)}),o.controller=new l(this,i),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){ce(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,h=this.data.datasets.length;c<h;c++){const{controller:d}=this.getDatasetMeta(c),u=!s&&r.indexOf(d)===-1;d.buildOrUpdateElements(u),o=Math.max(+d.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||ce(r,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(vh("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){ce(this.scales,t=>{Xe.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!Lc(e,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:r}of e){const o=i==="_removeElements"?-r:r;G_(t,s,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=i(0);for(let r=1;r<e;r++)if(!Lc(s,i(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Xe.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],ce(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,i=this.data.datasets.length;e<i;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,Ei(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),s={meta:i,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(e),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&($n.has(this)?this.attached&&!$n.running(this)&&$n.start(this):(this.draw(),bh({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,s)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let s,r;for(s=0,r=e.length;s<r;++s){const o=e[s];(!t||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i={meta:t,index:t.index,cancelable:!0},s=Eu(this,t);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(s&&yo(e,s),t.controller.draw(),s&&Eo(e),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return ti(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,s){const r=Vg.modes[e];return typeof r=="function"?r(this,t,i,s):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let s=i.filter(r=>r&&r._dataset===e).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=Ai(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!e.hidden}setDatasetVisibility(t,e){const i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const s=i?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,s);ir(e)?(r.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),o.update(r,{visible:i}),this.update(a=>a.datasetIndex===t?s:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),$n.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Vc(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete io[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};ce(this.options.events,r=>i(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(l,c)=>{e.addEventListener(this,l,c),t[l]=c},s=(l,c)=>{t[l]&&(e.removeEventListener(this,l,c),delete t[l])},r=(l,c)=>{this.canvas&&this.resize(l,c)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",r),i("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),i("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){ce(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},ce(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const s=i?"set":"remove";let r,o,a,l;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){o=t[a];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!ho(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,i){const s=this.options.hover,r=(l,c)=>l.filter(h=>!c.some(d=>h.datasetIndex===d.datasetIndex&&h.index===d.index)),o=r(e,t),a=i?t:r(t,e);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},s=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const r=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(r||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:s=[],options:r}=this,o=e,a=this._getActiveElements(t,s,i,o),l=Xp(t),c=W_(t,this._lastEvent,i,l);i&&(this._lastEvent=null,_e(r.onHover,[t,a,this],this),l&&_e(r.onClick,[t,a,this],this));const h=!ho(a,s);return(h||e)&&(this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=c,h}_getActiveElements(t,e,i,s){if(t.type==="mouseout")return[];if(!i)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,s)}}function Sh(){return ce(Oa.instances,n=>n._plugins.invalidate())}function X_(n,t,e){const{startAngle:i,x:s,y:r,outerRadius:o,innerRadius:a,options:l}=t,{borderWidth:c,borderJoinStyle:h}=l,d=Math.min(c/o,We(i-e));if(n.beginPath(),n.arc(s,r,o-c/2,i+d/2,e-d/2),a>0){const u=Math.min(c/a,We(i-e));n.arc(s,r,a+c/2,e-u/2,i+u/2,!0)}else{const u=Math.min(c/2,o*We(i-e));if(h==="round")n.arc(s,r,u,e-Jt/2,i+Jt/2,!0);else if(h==="bevel"){const f=2*u*u,g=-f*Math.cos(e+Jt/2)+s,_=-f*Math.sin(e+Jt/2)+r,m=f*Math.cos(i+Jt/2)+s,p=f*Math.sin(i+Jt/2)+r;n.lineTo(g,_),n.lineTo(m,p)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function Y_(n,t,e){const{startAngle:i,pixelMargin:s,x:r,y:o,outerRadius:a,innerRadius:l}=t;let c=s/a;n.beginPath(),n.arc(r,o,a,i-c,e+c),l>s?(c=s/l,n.arc(r,o,l,e+c,i-c,!0)):n.arc(r,o,s,e+Re,i-Re),n.closePath(),n.clip()}function $_(n){return $l(n,["outerStart","outerEnd","innerStart","innerEnd"])}function q_(n,t,e,i){const s=$_(n.options.borderRadius),r=(e-t)/2,o=Math.min(r,i*t/2),a=l=>{const c=(e-Math.min(r,l))*i/2;return Be(l,0,Math.min(r,c))};return{outerStart:a(s.outerStart),outerEnd:a(s.outerEnd),innerStart:Be(s.innerStart,0,o),innerEnd:Be(s.innerEnd,0,o)}}function es(n,t,e,i){return{x:e+n*Math.cos(t),y:i+n*Math.sin(t)}}function _o(n,t,e,i,s,r){const{x:o,y:a,startAngle:l,pixelMargin:c,innerRadius:h}=t,d=Math.max(t.outerRadius+i+e-c,0),u=h>0?h+i+e+c:0;let f=0;const g=s-l;if(i){const W=h>0?h-i:0,B=d>0?d-i:0,z=(W+B)/2,j=z!==0?g*z/(z+i):g;f=(g-j)/2}const _=Math.max(.001,g*d-e/Jt)/d,m=(g-_)/2,p=l+m+f,x=s-m-f,{outerStart:M,outerEnd:S,innerStart:E,innerEnd:A}=q_(t,u,d,x-p),w=d-M,P=d-S,b=p+M/w,T=x-S/P,R=u+E,N=u+A,k=p+E/R,X=x-A/N;if(n.beginPath(),r){const W=(b+T)/2;if(n.arc(o,a,d,b,W),n.arc(o,a,d,W,T),S>0){const et=es(P,T,o,a);n.arc(et.x,et.y,S,T,x+Re)}const B=es(N,x,o,a);if(n.lineTo(B.x,B.y),A>0){const et=es(N,X,o,a);n.arc(et.x,et.y,A,x+Re,X+Math.PI)}const z=(x-A/u+(p+E/u))/2;if(n.arc(o,a,u,x-A/u,z,!0),n.arc(o,a,u,z,p+E/u,!0),E>0){const et=es(R,k,o,a);n.arc(et.x,et.y,E,k+Math.PI,p-Re)}const j=es(w,p,o,a);if(n.lineTo(j.x,j.y),M>0){const et=es(w,b,o,a);n.arc(et.x,et.y,M,p-Re,b)}}else{n.moveTo(o,a);const W=Math.cos(b)*d+o,B=Math.sin(b)*d+a;n.lineTo(W,B);const z=Math.cos(T)*d+o,j=Math.sin(T)*d+a;n.lineTo(z,j)}n.closePath()}function j_(n,t,e,i,s){const{fullCircles:r,startAngle:o,circumference:a}=t;let l=t.endAngle;if(r){_o(n,t,e,i,l,s);for(let c=0;c<r;++c)n.fill();isNaN(a)||(l=o+(a%ve||ve))}return _o(n,t,e,i,l,s),n.fill(),l}function K_(n,t,e,i,s){const{fullCircles:r,startAngle:o,circumference:a,options:l}=t,{borderWidth:c,borderJoinStyle:h,borderDash:d,borderDashOffset:u,borderRadius:f}=l,g=l.borderAlign==="inner";if(!c)return;n.setLineDash(d||[]),n.lineDashOffset=u,g?(n.lineWidth=c*2,n.lineJoin=h||"round"):(n.lineWidth=c,n.lineJoin=h||"bevel");let _=t.endAngle;if(r){_o(n,t,e,i,_,s);for(let m=0;m<r;++m)n.stroke();isNaN(a)||(_=o+(a%ve||ve))}g&&Y_(n,t,_),l.selfJoin&&_-o>=Jt&&f===0&&h!=="miter"&&X_(n,t,_),r||(_o(n,t,e,i,_,s),n.stroke())}class Z_ extends li{static id="arc";static defaults={borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1};static defaultRoutes={backgroundColor:"backgroundColor"};static descriptors={_scriptable:!0,_indexable:t=>t!=="borderDash"};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,i){const s=this.getProps(["x","y"],i),{angle:r,distance:o}=iu(s,{x:t,y:e}),{startAngle:a,endAngle:l,innerRadius:c,outerRadius:h,circumference:d}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),u=(this.options.spacing+this.options.borderWidth)/2,f=Ut(d,l-a),g=sr(r,a,l)&&a!==l,_=f>=ve||g,m=Jn(o,c+u,h+u);return _&&m}getCenterPoint(t){const{x:e,y:i,startAngle:s,endAngle:r,innerRadius:o,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],t),{offset:l,spacing:c}=this.options,h=(s+r)/2,d=(o+a+c+l)/2;return{x:e+Math.cos(h)*d,y:i+Math.sin(h)*d}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:e,circumference:i}=this,s=(e.offset||0)/4,r=(e.spacing||0)/2,o=e.circular;if(this.pixelMargin=e.borderAlign==="inner"?.33:0,this.fullCircles=i>ve?Math.floor(i/ve):0,i===0||this.innerRadius<0||this.outerRadius<0)return;t.save();const a=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(a)*s,Math.sin(a)*s);const l=1-Math.sin(Math.min(Jt,i||0)),c=s*l;t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor,j_(t,this,c,r,o),K_(t,this,c,r,o),t.restore()}}function ku(n,t,e=t){n.lineCap=Ut(e.borderCapStyle,t.borderCapStyle),n.setLineDash(Ut(e.borderDash,t.borderDash)),n.lineDashOffset=Ut(e.borderDashOffset,t.borderDashOffset),n.lineJoin=Ut(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=Ut(e.borderWidth,t.borderWidth),n.strokeStyle=Ut(e.borderColor,t.borderColor)}function J_(n,t,e){n.lineTo(e.x,e.y)}function Q_(n){return n.stepped?pm:n.tension||n.cubicInterpolationMode==="monotone"?mm:J_}function Bu(n,t,e={}){const i=n.length,{start:s=0,end:r=i-1}=e,{start:o,end:a}=t,l=Math.max(s,o),c=Math.min(r,a),h=s<o&&r<o||s>a&&r>a;return{count:i,start:l,loop:t.loop,ilen:c<l&&!h?i+c-l:c-l}}function t0(n,t,e,i){const{points:s,options:r}=t,{count:o,start:a,loop:l,ilen:c}=Bu(s,e,i),h=Q_(r);let{move:d=!0,reverse:u}=i||{},f,g,_;for(f=0;f<=c;++f)g=s[(a+(u?c-f:f))%o],!g.skip&&(d?(n.moveTo(g.x,g.y),d=!1):h(n,_,g,u,r.stepped),_=g);return l&&(g=s[(a+(u?c:0))%o],h(n,_,g,u,r.stepped)),!!l}function e0(n,t,e,i){const s=t.points,{count:r,start:o,ilen:a}=Bu(s,e,i),{move:l=!0,reverse:c}=i||{};let h=0,d=0,u,f,g,_,m,p;const x=S=>(o+(c?a-S:S))%r,M=()=>{_!==m&&(n.lineTo(h,m),n.lineTo(h,_),n.lineTo(h,p))};for(l&&(f=s[x(0)],n.moveTo(f.x,f.y)),u=0;u<=a;++u){if(f=s[x(u)],f.skip)continue;const S=f.x,E=f.y,A=S|0;A===g?(E<_?_=E:E>m&&(m=E),h=(d*h+S)/++d):(M(),n.lineTo(S,E),g=A,d=0,_=m=E),p=E}M()}function ka(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?e0:t0}function n0(n){return n.stepped?$m:n.tension||n.cubicInterpolationMode==="monotone"?qm:Vi}function i0(n,t,e,i){let s=t._path;s||(s=t._path=new Path2D,t.path(s,e,i)&&s.closePath()),ku(n,t.options),n.stroke(s)}function s0(n,t,e,i){const{segments:s,options:r}=t,o=ka(t);for(const a of s)ku(n,r,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+i-1})&&n.closePath(),n.stroke()}const r0=typeof Path2D=="function";function o0(n,t,e,i){r0&&!t.options.segment?i0(n,t,e,i):s0(n,t,e,i)}class wo extends li{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"};constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;Bm(this._points,i,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=tg(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,s=t[e],r=this.points,o=yu(this,{property:e,start:s,end:s});if(!o.length)return;const a=[],l=n0(i);let c,h;for(c=0,h=o.length;c<h;++c){const{start:d,end:u}=o[c],f=r[d],g=r[u];if(f===g){a.push(f);continue}const _=Math.abs((s-f[e])/(g[e]-f[e])),m=l(f,g,_,i.stepped);m[e]=t[e],a.push(m)}return a.length===1?a[0]:a}pathSegment(t,e,i){return ka(this)(t,this,e,i)}path(t,e,i){const s=this.segments,r=ka(this);let o=this._loop;e=e||0,i=i||this.points.length-e;for(const a of s)o&=r(t,this,a,{start:e,end:e+i-1});return!!o}draw(t,e,i,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),o0(t,this,i,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function yh(n,t,e,i){const s=n.options,{[e]:r}=n.getProps([e],i);return Math.abs(t-r)<s.radius+s.hitRadius}class a0 extends li{static id="point";parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,i){const s=this.options,{x:r,y:o}=this.getProps(["x","y"],i);return Math.pow(t-r,2)+Math.pow(e-o,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(t,e){return yh(this,t,"x",e)}inYRange(t,e){return yh(this,t,"y",e)}getCenterPoint(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}size(t){t=t||this.options||{};let e=t.radius||0;e=Math.max(e,e&&t.hoverRadius||0);const i=e&&t.borderWidth||0;return(e+i)*2}draw(t,e){const i=this.options;this.skip||i.radius<.1||!ti(this,e,this.size(i)/2)||(t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.fillStyle=i.backgroundColor,Fa(t,i,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}function zu(n,t){const{x:e,y:i,base:s,width:r,height:o}=n.getProps(["x","y","base","width","height"],t);let a,l,c,h,d;return n.horizontal?(d=o/2,a=Math.min(e,s),l=Math.max(e,s),c=i-d,h=i+d):(d=r/2,a=e-d,l=e+d,c=Math.min(i,s),h=Math.max(i,s)),{left:a,top:c,right:l,bottom:h}}function bi(n,t,e,i){return n?0:Be(t,e,i)}function l0(n,t,e){const i=n.options.borderWidth,s=n.borderSkipped,r=uu(i);return{t:bi(s.top,r.top,0,e),r:bi(s.right,r.right,0,t),b:bi(s.bottom,r.bottom,0,e),l:bi(s.left,r.left,0,t)}}function c0(n,t,e){const{enableBorderRadius:i}=n.getProps(["enableBorderRadius"]),s=n.options.borderRadius,r=$i(s),o=Math.min(t,e),a=n.borderSkipped,l=i||Xt(s);return{topLeft:bi(!l||a.top||a.left,r.topLeft,0,o),topRight:bi(!l||a.top||a.right,r.topRight,0,o),bottomLeft:bi(!l||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:bi(!l||a.bottom||a.right,r.bottomRight,0,o)}}function h0(n){const t=zu(n),e=t.right-t.left,i=t.bottom-t.top,s=l0(n,e/2,i/2),r=c0(n,e/2,i/2);return{outer:{x:t.left,y:t.top,w:e,h:i,radius:r},inner:{x:t.left+s.l,y:t.top+s.t,w:e-s.l-s.r,h:i-s.t-s.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(s.t,s.l)),topRight:Math.max(0,r.topRight-Math.max(s.t,s.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(s.b,s.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(s.b,s.r))}}}}function $o(n,t,e,i){const s=t===null,r=e===null,a=n&&!(s&&r)&&zu(n,i);return a&&(s||Jn(t,a.left,a.right))&&(r||Jn(e,a.top,a.bottom))}function d0(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function u0(n,t){n.rect(t.x,t.y,t.w,t.h)}function qo(n,t,e={}){const i=n.x!==e.x?-t:0,s=n.y!==e.y?-t:0,r=(n.x+n.w!==e.x+e.w?t:0)-i,o=(n.y+n.h!==e.y+e.h?t:0)-s;return{x:n.x+i,y:n.y+s,w:n.w+r,h:n.h+o,radius:n.radius}}class f0 extends li{static id="bar";static defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:i,backgroundColor:s}}=this,{inner:r,outer:o}=h0(this),a=d0(o.radius)?rr:u0;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,qo(o,e,r)),t.clip(),a(t,qo(r,-e,o)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),a(t,qo(r,e)),t.fillStyle=s,t.fill(),t.restore()}inRange(t,e,i){return $o(this,t,e,i)}inXRange(t,e){return $o(this,t,null,e)}inYRange(t,e){return $o(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:s,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+s)/2:e,y:r?i:(i+s)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}var p0=Object.freeze({__proto__:null,ArcElement:Z_,BarElement:f0,LineElement:wo,PointElement:a0});const Ba=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Eh=Ba.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function Vu(n){return Ba[n%Ba.length]}function Hu(n){return Eh[n%Eh.length]}function m0(n,t){return n.borderColor=Vu(t),n.backgroundColor=Hu(t),++t}function g0(n,t){return n.backgroundColor=n.data.map(()=>Vu(t++)),t}function _0(n,t){return n.backgroundColor=n.data.map(()=>Hu(t++)),t}function x0(n){let t=0;return(e,i)=>{const s=n.getDatasetMeta(i).controller;s instanceof Ql?t=g0(e,t):s instanceof Cu?t=_0(e,t):s&&(t=m0(e,t))}}function Th(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function v0(n){return n&&(n.borderColor||n.backgroundColor)}function b0(){return Me.borderColor!=="rgba(0,0,0,0.1)"||Me.backgroundColor!=="rgba(0,0,0,0.1)"}var M0={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:i},options:s}=n.config,{elements:r}=s,o=Th(i)||v0(s)||r&&Th(r)||b0();if(!e.forceOverride&&o)return;const a=x0(n);i.forEach(a)}};function S0(n,t,e,i,s){const r=s.samples||i;if(r>=e)return n.slice(t,t+e);const o=[],a=(e-2)/(r-2);let l=0;const c=t+e-1;let h=t,d,u,f,g,_;for(o[l++]=n[h],d=0;d<r-2;d++){let m=0,p=0,x;const M=Math.floor((d+1)*a)+1+t,S=Math.min(Math.floor((d+2)*a)+1,e)+t,E=S-M;for(x=M;x<S;x++)m+=n[x].x,p+=n[x].y;m/=E,p/=E;const A=Math.floor(d*a)+1+t,w=Math.min(Math.floor((d+1)*a)+1,e)+t,{x:P,y:b}=n[h];for(f=g=-1,x=A;x<w;x++)g=.5*Math.abs((P-m)*(n[x].y-b)-(P-n[x].x)*(p-b)),g>f&&(f=g,u=n[x],_=x);o[l++]=u,h=_}return o[l++]=n[c],o}function y0(n,t,e,i){let s=0,r=0,o,a,l,c,h,d,u,f,g,_;const m=[],p=t+e-1,x=n[t].x,S=n[p].x-x;for(o=t;o<t+e;++o){a=n[o],l=(a.x-x)/S*i,c=a.y;const E=l|0;if(E===h)c<g?(g=c,d=o):c>_&&(_=c,u=o),s=(r*s+a.x)/++r;else{const A=o-1;if(!Gt(d)&&!Gt(u)){const w=Math.min(d,u),P=Math.max(d,u);w!==f&&w!==A&&m.push({...n[w],x:s}),P!==f&&P!==A&&m.push({...n[P],x:s})}o>0&&A!==f&&m.push(n[A]),m.push(a),h=E,r=0,g=_=c,d=u=f=o}}return m}function Gu(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Ah(n){n.data.datasets.forEach(t=>{Gu(t)})}function E0(n,t){const e=t.length;let i=0,s;const{iScale:r}=n,{min:o,max:a,minDefined:l,maxDefined:c}=r.getUserBounds();return l&&(i=Be(Qn(t,r.axis,o).lo,0,e-1)),c?s=Be(Qn(t,r.axis,a).hi+1,i,e)-i:s=e-i,{start:i,count:s}}var T0={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){Ah(n);return}const i=n.width;n.data.datasets.forEach((s,r)=>{const{_data:o,indexAxis:a}=s,l=n.getDatasetMeta(r),c=o||s.data;if(Ws([a,n.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const h=n.scales[l.xAxisID];if(h.type!=="linear"&&h.type!=="time"||n.options.parsing)return;let{start:d,count:u}=E0(l,c);const f=e.threshold||4*i;if(u<=f){Gu(s);return}Gt(o)&&(s._data=c,delete s.data,Object.defineProperty(s,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(_){this._data=_}}));let g;switch(e.algorithm){case"lttb":g=S0(c,d,u,i,e);break;case"min-max":g=y0(c,d,u,i);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}s._decimated=g})},destroy(n){Ah(n)}};function A0(n,t,e){const i=n.segments,s=n.points,r=t.points,o=[];for(const a of i){let{start:l,end:c}=a;c=Co(l,c,s);const h=za(e,s[l],s[c],a.loop);if(!t.segments){o.push({source:a,target:h,start:s[l],end:s[c]});continue}const d=yu(t,h);for(const u of d){const f=za(e,r[u.start],r[u.end],u.loop),g=Su(a,s,f);for(const _ of g)o.push({source:_,target:u,start:{[e]:wh(h,f,"start",Math.max)},end:{[e]:wh(h,f,"end",Math.min)}})}}return o}function za(n,t,e,i){if(i)return;let s=t[n],r=e[n];return n==="angle"&&(s=We(s),r=We(r)),{property:n,start:s,end:r}}function w0(n,t){const{x:e=null,y:i=null}=n||{},s=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=Co(o,a,s);const l=s[o],c=s[a];i!==null?(r.push({x:l.x,y:i}),r.push({x:c.x,y:i})):e!==null&&(r.push({x:e,y:l.y}),r.push({x:e,y:c.y}))}),r}function Co(n,t,e){for(;t>n;t--){const i=e[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function wh(n,t,e,i){return n&&t?i(n[e],t[e]):n?n[e]:t?t[e]:0}function Wu(n,t){let e=[],i=!1;return be(n)?(i=!0,e=n):e=w0(n,t),e.length?new wo({points:e,options:{tension:0},_loop:i,_fullLoop:i}):null}function Ch(n){return n&&n.fill!==!1}function C0(n,t,e){let s=n[t].fill;const r=[t];let o;if(!e)return s;for(;s!==!1&&r.indexOf(s)===-1;){if(!Te(s))return s;if(o=n[s],!o)return!1;if(o.visible)return s;r.push(s),s=o.fill}return!1}function R0(n,t,e){const i=I0(n);if(Xt(i))return isNaN(i.value)?!1:i;let s=parseFloat(i);return Te(s)&&Math.floor(s)===s?P0(i[0],t,s,e):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function P0(n,t,e,i){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=i?!1:e}function D0(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:Xt(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function L0(n,t,e){let i;return n==="start"?i=e:n==="end"?i=t.options.reverse?t.min:t.max:Xt(n)?i=n.value:i=t.getBaseValue(),i}function I0(n){const t=n.options,e=t.fill;let i=Ut(e&&e.target,e);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function F0(n){const{scale:t,index:e,line:i}=n,s=[],r=i.segments,o=i.points,a=U0(t,e);a.push(Wu({x:null,y:t.bottom},i));for(let l=0;l<r.length;l++){const c=r[l];for(let h=c.start;h<=c.end;h++)N0(s,o[h],a)}return new wo({points:s,options:{}})}function U0(n,t){const e=[],i=n.getMatchingVisibleMetas("line");for(let s=0;s<i.length;s++){const r=i[s];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function N0(n,t,e){const i=[];for(let s=0;s<e.length;s++){const r=e[s],{first:o,last:a,point:l}=O0(r,t,"x");if(!(!l||o&&a)){if(o)i.unshift(l);else if(n.push(l),!a)break}}n.push(...i)}function O0(n,t,e){const i=n.interpolate(t,e);if(!i)return{};const s=i[e],r=n.segments,o=n.points;let a=!1,l=!1;for(let c=0;c<r.length;c++){const h=r[c],d=o[h.start][e],u=o[h.end][e];if(Jn(s,d,u)){a=s===d,l=s===u;break}}return{first:a,last:l,point:i}}class Xu{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:s,y:r,radius:o}=this;return e=e||{start:0,end:ve},t.arc(s,r,o,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:s}=this,r=t.angle;return{x:e+Math.cos(r)*s,y:i+Math.sin(r)*s,angle:r}}}function k0(n){const{chart:t,fill:e,line:i}=n;if(Te(e))return B0(t,e);if(e==="stack")return F0(n);if(e==="shape")return!0;const s=z0(n);return s instanceof Xu?s:Wu(s,i)}function B0(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function z0(n){return(n.scale||{}).getPointPositionForValue?H0(n):V0(n)}function V0(n){const{scale:t={},fill:e}=n,i=D0(e,t);if(Te(i)){const s=t.isHorizontal();return{x:s?i:null,y:s?null:i}}return null}function H0(n){const{scale:t,fill:e}=n,i=t.options,s=t.getLabels().length,r=i.reverse?t.max:t.min,o=L0(e,t,r),a=[];if(i.grid.circular){const l=t.getPointPositionForValue(0,r);return new Xu({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(o)})}for(let l=0;l<s;++l)a.push(t.getPointPositionForValue(l,o));return a}function jo(n,t,e){const i=k0(t),{chart:s,index:r,line:o,scale:a,axis:l}=t,c=o.options,h=c.fill,d=c.backgroundColor,{above:u=d,below:f=d}=h||{},g=s.getDatasetMeta(r),_=Eu(s,g);i&&o.points.length&&(yo(n,e),G0(n,{line:o,target:i,above:u,below:f,area:e,scale:a,axis:l,clip:_}),Eo(n))}function G0(n,t){const{line:e,target:i,above:s,below:r,area:o,scale:a,clip:l}=t,c=e._loop?"angle":t.axis;n.save();let h=r;r!==s&&(c==="x"?(Rh(n,i,o.top),Ko(n,{line:e,target:i,color:s,scale:a,property:c,clip:l}),n.restore(),n.save(),Rh(n,i,o.bottom)):c==="y"&&(Ph(n,i,o.left),Ko(n,{line:e,target:i,color:r,scale:a,property:c,clip:l}),n.restore(),n.save(),Ph(n,i,o.right),h=s)),Ko(n,{line:e,target:i,color:h,scale:a,property:c,clip:l}),n.restore()}function Rh(n,t,e){const{segments:i,points:s}=t;let r=!0,o=!1;n.beginPath();for(const a of i){const{start:l,end:c}=a,h=s[l],d=s[Co(l,c,s)];r?(n.moveTo(h.x,h.y),r=!1):(n.lineTo(h.x,e),n.lineTo(h.x,h.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(d.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function Ph(n,t,e){const{segments:i,points:s}=t;let r=!0,o=!1;n.beginPath();for(const a of i){const{start:l,end:c}=a,h=s[l],d=s[Co(l,c,s)];r?(n.moveTo(h.x,h.y),r=!1):(n.lineTo(e,h.y),n.lineTo(h.x,h.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,d.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function Ko(n,t){const{line:e,target:i,property:s,color:r,scale:o,clip:a}=t,l=A0(e,i,s);for(const{source:c,target:h,start:d,end:u}of l){const{style:{backgroundColor:f=r}={}}=c,g=i!==!0;n.save(),n.fillStyle=f,W0(n,o,a,g&&za(s,d,u)),n.beginPath();const _=!!e.pathSegment(n,c);let m;if(g){_?n.closePath():Dh(n,i,u,s);const p=!!i.pathSegment(n,h,{move:_,reverse:!0});m=_&&p,m||Dh(n,i,d,s)}n.closePath(),n.fill(m?"evenodd":"nonzero"),n.restore()}}function W0(n,t,e,i){const s=t.chart.chartArea,{property:r,start:o,end:a}=i||{};if(r==="x"||r==="y"){let l,c,h,d;r==="x"?(l=o,c=s.top,h=a,d=s.bottom):(l=s.left,c=o,h=s.right,d=a),n.beginPath(),e&&(l=Math.max(l,e.left),h=Math.min(h,e.right),c=Math.max(c,e.top),d=Math.min(d,e.bottom)),n.rect(l,c,h-l,d-c),n.clip()}}function Dh(n,t,e,i){const s=t.interpolate(e,i);s&&n.lineTo(s.x,s.y)}var X0={id:"filler",afterDatasetsUpdate(n,t,e){const i=(n.data.datasets||[]).length,s=[];let r,o,a,l;for(o=0;o<i;++o)r=n.getDatasetMeta(o),a=r.dataset,l=null,a&&a.options&&a instanceof wo&&(l={visible:n.isDatasetVisible(o),index:o,fill:R0(a,o,i),chart:n,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=l,s.push(l);for(o=0;o<i;++o)l=s[o],!(!l||l.fill===!1)&&(l.fill=C0(s,o,e.propagate))},beforeDraw(n,t,e){const i=e.drawTime==="beforeDraw",s=n.getSortedVisibleDatasetMetas(),r=n.chartArea;for(let o=s.length-1;o>=0;--o){const a=s[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),i&&a.fill&&jo(n.ctx,a,r))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const i=n.getSortedVisibleDatasetMetas();for(let s=i.length-1;s>=0;--s){const r=i[s].$filler;Ch(r)&&jo(n.ctx,r,n.chartArea)}},beforeDatasetDraw(n,t,e){const i=t.meta.$filler;!Ch(i)||e.drawTime!=="beforeDatasetDraw"||jo(n.ctx,i,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Lh=(n,t)=>{let{boxHeight:e=t,boxWidth:i=t}=n;return n.usePointStyle&&(e=Math.min(e,t),i=n.pointStyleWidth||Math.min(i,t)),{boxWidth:i,boxHeight:e,itemHeight:Math.max(t,e)}},Y0=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class Ih extends li{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=_e(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(i=>t.filter(i,this.chart.data))),t.sort&&(e=e.sort((i,s)=>t.sort(i,s,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const i=t.labels,s=Fe(i.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=Lh(i,r);let c,h;e.font=s.string,this.isHorizontal()?(c=this.maxWidth,h=this._fitRows(o,r,a,l)+10):(h=this.maxHeight,c=this._fitCols(o,s,a,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],h=s+a;let d=t;r.textAlign="left",r.textBaseline="middle";let u=-1,f=-h;return this.legendItems.forEach((g,_)=>{const m=i+e/2+r.measureText(g.text).width;(_===0||c[c.length-1]+m+2*a>o)&&(d+=h,c[c.length-(_>0?0:1)]=0,f+=h,u++),l[_]={left:0,top:f,row:u,width:m,height:s},c[c.length-1]+=m+a}),d}_fitCols(t,e,i,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],h=o-t;let d=a,u=0,f=0,g=0,_=0;return this.legendItems.forEach((m,p)=>{const{itemWidth:x,itemHeight:M}=$0(i,e,r,m,s);p>0&&f+M+2*a>h&&(d+=u+a,c.push({width:u,height:f}),g+=u+a,_++,u=f=0),l[p]={left:g,top:f,col:_,width:x,height:M},u=Math.max(u,x),f+=M+a}),d+=u,c.push({width:u,height:f}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:s},rtl:r}}=this,o=gs(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=Ge(i,this.left+s,this.right-this.lineWidths[a]);for(const c of e)a!==c.row&&(a=c.row,l=Ge(i,this.left+s,this.right-this.lineWidths[a])),c.top+=this.top+t+s,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+s}else{let a=0,l=Ge(i,this.top+t+s,this.bottom-this.columnSizes[a].height);for(const c of e)c.col!==a&&(a=c.col,l=Ge(i,this.top+t+s,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+s,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;yo(t,this),this._draw(),Eo(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:s}=this,{align:r,labels:o}=t,a=Me.color,l=gs(t.rtl,this.left,this.width),c=Fe(o.font),{padding:h}=o,d=c.size,u=d/2;let f;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;const{boxWidth:g,boxHeight:_,itemHeight:m}=Lh(o,d),p=function(A,w,P){if(isNaN(g)||g<=0||isNaN(_)||_<0)return;s.save();const b=Ut(P.lineWidth,1);if(s.fillStyle=Ut(P.fillStyle,a),s.lineCap=Ut(P.lineCap,"butt"),s.lineDashOffset=Ut(P.lineDashOffset,0),s.lineJoin=Ut(P.lineJoin,"miter"),s.lineWidth=b,s.strokeStyle=Ut(P.strokeStyle,a),s.setLineDash(Ut(P.lineDash,[])),o.usePointStyle){const T={radius:_*Math.SQRT2/2,pointStyle:P.pointStyle,rotation:P.rotation,borderWidth:b},R=l.xPlus(A,g/2),N=w+u;du(s,T,R,N,o.pointStyleWidth&&g)}else{const T=w+Math.max((d-_)/2,0),R=l.leftForLtr(A,g),N=$i(P.borderRadius);s.beginPath(),Object.values(N).some(k=>k!==0)?rr(s,{x:R,y:T,w:g,h:_,radius:N}):s.rect(R,T,g,_),s.fill(),b!==0&&s.stroke()}s.restore()},x=function(A,w,P){Ki(s,P.text,A,w+m/2,c,{strikethrough:P.hidden,textAlign:l.textAlign(P.textAlign)})},M=this.isHorizontal(),S=this._computeTitleHeight();M?f={x:Ge(r,this.left+h,this.right-i[0]),y:this.top+h+S,line:0}:f={x:this.left+h,y:Ge(r,this.top+S+h,this.bottom-e[0].height),line:0},vu(this.ctx,t.textDirection);const E=m+h;this.legendItems.forEach((A,w)=>{s.strokeStyle=A.fontColor,s.fillStyle=A.fontColor;const P=s.measureText(A.text).width,b=l.textAlign(A.textAlign||(A.textAlign=o.textAlign)),T=g+u+P;let R=f.x,N=f.y;l.setWidth(this.width),M?w>0&&R+T+h>this.right&&(N=f.y+=E,f.line++,R=f.x=Ge(r,this.left+h,this.right-i[f.line])):w>0&&N+E>this.bottom&&(R=f.x=R+e[f.line].width+h,f.line++,N=f.y=Ge(r,this.top+S+h,this.bottom-e[f.line].height));const k=l.x(R);if(p(k,N,A),R=im(b,R+g+u,M?R+T:this.right,t.rtl),x(l.x(R),N,A),M)f.x+=T+h;else if(typeof A.text!="string"){const X=c.lineHeight;f.y+=Yu(A,X)+h}else f.y+=E}),bu(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=Fe(e.font),s=qe(e.padding);if(!e.display)return;const r=gs(t.rtl,this.left,this.width),o=this.ctx,a=e.position,l=i.size/2,c=s.top+l;let h,d=this.left,u=this.width;if(this.isHorizontal())u=Math.max(...this.lineWidths),h=this.top+c,d=Ge(t.align,d,this.right-u);else{const g=this.columnSizes.reduce((_,m)=>Math.max(_,m.height),0);h=c+Ge(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const f=Ge(a,d,d+u);o.textAlign=r.textAlign(Xl(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=i.string,Ki(o,e.text,f,h,i)}_computeTitleHeight(){const t=this.options.title,e=Fe(t.font),i=qe(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,s,r;if(Jn(t,this.left,this.right)&&Jn(e,this.top,this.bottom)){for(r=this.legendHitBoxes,i=0;i<r.length;++i)if(s=r[i],Jn(t,s.left,s.left+s.width)&&Jn(e,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(t){const e=this.options;if(!K0(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const s=this._hoveredItem,r=Y0(s,i);s&&!r&&_e(e.onLeave,[t,s,this],this),this._hoveredItem=i,i&&!r&&_e(e.onHover,[t,i,this],this)}else i&&_e(e.onClick,[t,i,this],this)}}function $0(n,t,e,i,s){const r=q0(i,n,t,e),o=j0(s,i,t.lineHeight);return{itemWidth:r,itemHeight:o}}function q0(n,t,e,i){let s=n.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+i.measureText(s).width}function j0(n,t,e){let i=n;return typeof t.text!="string"&&(i=Yu(t,e)),i}function Yu(n,t){const e=n.text?n.text.length:0;return t*e}function K0(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var Z0={id:"legend",_element:Ih,start(n,t,e){const i=n.legend=new Ih({ctx:n.ctx,options:e,chart:n});Xe.configure(n,i,e),Xe.addBox(n,i)},stop(n){Xe.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const i=n.legend;Xe.configure(n,i,e),i.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const i=t.datasetIndex,s=e.chart;s.isDatasetVisible(i)?(s.hide(i),t.hidden=!0):(s.show(i),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(e?0:void 0),h=qe(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:c.borderColor,pointStyle:i||c.pointStyle,rotation:c.rotation,textAlign:s||c.textAlign,borderRadius:o&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class ec extends li{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const s=be(i.text)?i.text.length:1;this._padding=qe(i.padding);const r=s*Fe(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:i,bottom:s,right:r,options:o}=this,a=o.align;let l=0,c,h,d;return this.isHorizontal()?(h=Ge(a,i,r),d=e+t,c=r-i):(o.position==="left"?(h=i+t,d=Ge(a,s,e),l=Jt*-.5):(h=r-t,d=Ge(a,e,s),l=Jt*.5),c=s-e),{titleX:h,titleY:d,maxWidth:c,rotation:l}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const i=Fe(e.font),r=i.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(r);Ki(t,e.text,0,0,i,{color:e.color,maxWidth:l,rotation:c,textAlign:Xl(e.align),textBaseline:"middle",translation:[o,a]})}}function J0(n,t){const e=new ec({ctx:n.ctx,options:t,chart:n});Xe.configure(n,e,t),Xe.addBox(n,e),n.titleBlock=e}var Q0={id:"title",_element:ec,start(n,t,e){J0(n,e)},stop(n){const t=n.titleBlock;Xe.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const i=n.titleBlock;Xe.configure(n,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Lr=new WeakMap;var tx={id:"subtitle",start(n,t,e){const i=new ec({ctx:n.ctx,options:e,chart:n});Xe.configure(n,i,e),Xe.addBox(n,i),Lr.set(n,i)},stop(n){Xe.removeBox(n,Lr.get(n)),Lr.delete(n)},beforeUpdate(n,t,e){const i=Lr.get(n);Xe.configure(n,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ys={average(n){if(!n.length)return!1;let t,e,i=new Set,s=0,r=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const l=a.tooltipPosition();i.add(l.x),s+=l.y,++r}}return r===0||i.size===0?!1:{x:[...i].reduce((a,l)=>a+l)/i.size,y:s/r}},nearest(n,t){if(!n.length)return!1;let e=t.x,i=t.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=n.length;r<o;++r){const l=n[r].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),h=La(t,c);h<s&&(s=h,a=l)}}if(a){const l=a.tooltipPosition();e=l.x,i=l.y}return{x:e,y:i}}};function An(n,t){return t&&(be(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function qn(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function ex(n,t){const{element:e,datasetIndex:i,index:s}=t,r=n.getDatasetMeta(i).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:n,label:o,parsed:r.getParsed(s),raw:n.data.datasets[i].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:i,element:e}}function Fh(n,t){const e=n.chart.ctx,{body:i,footer:s,title:r}=n,{boxWidth:o,boxHeight:a}=t,l=Fe(t.bodyFont),c=Fe(t.titleFont),h=Fe(t.footerFont),d=r.length,u=s.length,f=i.length,g=qe(t.padding);let _=g.height,m=0,p=i.reduce((S,E)=>S+E.before.length+E.lines.length+E.after.length,0);if(p+=n.beforeBody.length+n.afterBody.length,d&&(_+=d*c.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),p){const S=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;_+=f*S+(p-f)*l.lineHeight+(p-1)*t.bodySpacing}u&&(_+=t.footerMarginTop+u*h.lineHeight+(u-1)*t.footerSpacing);let x=0;const M=function(S){m=Math.max(m,e.measureText(S).width+x)};return e.save(),e.font=c.string,ce(n.title,M),e.font=l.string,ce(n.beforeBody.concat(n.afterBody),M),x=t.displayColors?o+2+t.boxPadding:0,ce(i,S=>{ce(S.before,M),ce(S.lines,M),ce(S.after,M)}),x=0,e.font=h.string,ce(n.footer,M),e.restore(),m+=g.width,{width:m,height:_}}function nx(n,t){const{y:e,height:i}=t;return e<i/2?"top":e>n.height-i/2?"bottom":"center"}function ix(n,t,e,i){const{x:s,width:r}=i,o=e.caretSize+e.caretPadding;if(n==="left"&&s+r+o>t.width||n==="right"&&s-r-o<0)return!0}function sx(n,t,e,i){const{x:s,width:r}=e,{width:o,chartArea:{left:a,right:l}}=n;let c="center";return i==="center"?c=s<=(a+l)/2?"left":"right":s<=r/2?c="left":s>=o-r/2&&(c="right"),ix(c,n,t,e)&&(c="center"),c}function Uh(n,t,e){const i=e.yAlign||t.yAlign||nx(n,e);return{xAlign:e.xAlign||t.xAlign||sx(n,t,e,i),yAlign:i}}function rx(n,t){let{x:e,width:i}=n;return t==="right"?e-=i:t==="center"&&(e-=i/2),e}function ox(n,t,e){let{y:i,height:s}=n;return t==="top"?i+=e:t==="bottom"?i-=s+e:i-=s/2,i}function Nh(n,t,e,i){const{caretSize:s,caretPadding:r,cornerRadius:o}=n,{xAlign:a,yAlign:l}=e,c=s+r,{topLeft:h,topRight:d,bottomLeft:u,bottomRight:f}=$i(o);let g=rx(t,a);const _=ox(t,l,c);return l==="center"?a==="left"?g+=c:a==="right"&&(g-=c):a==="left"?g-=Math.max(h,u)+s:a==="right"&&(g+=Math.max(d,f)+s),{x:Be(g,0,i.width-t.width),y:Be(_,0,i.height-t.height)}}function Ir(n,t,e){const i=qe(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-i.right:n.x+i.left}function Oh(n){return An([],qn(n))}function ax(n,t,e){return Ai(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function kh(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const $u={beforeTitle:zn,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,i=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return e[t.dataIndex]}return""},afterTitle:zn,beforeBody:zn,beforeLabel:zn,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return Gt(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:zn,afterBody:zn,beforeFooter:zn,footer:zn,afterFooter:zn};function tn(n,t,e,i){const s=n[t].call(e,i);return typeof s>"u"?$u[t].call(e,i):s}class Bh extends li{static positioners=Ys;constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&e.options.animation&&i.animations,r=new Tu(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=ax(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:i}=e,s=tn(i,"beforeTitle",this,t),r=tn(i,"title",this,t),o=tn(i,"afterTitle",this,t);let a=[];return a=An(a,qn(s)),a=An(a,qn(r)),a=An(a,qn(o)),a}getBeforeBody(t,e){return Oh(tn(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:i}=e,s=[];return ce(t,r=>{const o={before:[],lines:[],after:[]},a=kh(i,r);An(o.before,qn(tn(a,"beforeLabel",this,r))),An(o.lines,tn(a,"label",this,r)),An(o.after,qn(tn(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(t,e){return Oh(tn(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:i}=e,s=tn(i,"beforeFooter",this,t),r=tn(i,"footer",this,t),o=tn(i,"afterFooter",this,t);let a=[];return a=An(a,qn(s)),a=An(a,qn(r)),a=An(a,qn(o)),a}_createItems(t){const e=this._active,i=this.chart.data,s=[],r=[],o=[];let a=[],l,c;for(l=0,c=e.length;l<c;++l)a.push(ex(this.chart,e[l]));return t.filter&&(a=a.filter((h,d,u)=>t.filter(h,d,u,i))),t.itemSort&&(a=a.sort((h,d)=>t.itemSort(h,d,i))),ce(a,h=>{const d=kh(t.callbacks,h);s.push(tn(d,"labelColor",this,h)),r.push(tn(d,"labelPointStyle",this,h)),o.push(tn(d,"labelTextColor",this,h))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const i=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=Ys[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const l=this._size=Fh(this,i),c=Object.assign({},a,l),h=Uh(this.chart,i,c),d=Nh(i,c,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,r={opacity:1,x:d.x,y:d.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,s){const r=this.getCaretPosition(t,i,s);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,i){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:l,topRight:c,bottomLeft:h,bottomRight:d}=$i(a),{x:u,y:f}=t,{width:g,height:_}=e;let m,p,x,M,S,E;return r==="center"?(S=f+_/2,s==="left"?(m=u,p=m-o,M=S+o,E=S-o):(m=u+g,p=m+o,M=S-o,E=S+o),x=m):(s==="left"?p=u+Math.max(l,h)+o:s==="right"?p=u+g-Math.max(c,d)-o:p=this.caretX,r==="top"?(M=f,S=M-o,m=p-o,x=p+o):(M=f+_,S=M+o,m=p+o,x=p-o),E=M),{x1:m,x2:p,x3:x,y1:M,y2:S,y3:E}}drawTitle(t,e,i){const s=this.title,r=s.length;let o,a,l;if(r){const c=gs(i.rtl,this.x,this.width);for(t.x=Ir(this,i.titleAlign,i),e.textAlign=c.textAlign(i.titleAlign),e.textBaseline="middle",o=Fe(i.titleFont),a=i.titleSpacing,e.fillStyle=i.titleColor,e.font=o.string,l=0;l<r;++l)e.fillText(s[l],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,l+1===r&&(t.y+=i.titleMarginBottom-a)}}_drawColorBox(t,e,i,s,r){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:l,boxWidth:c}=r,h=Fe(r.bodyFont),d=Ir(this,"left",r),u=s.x(d),f=l<h.lineHeight?(h.lineHeight-l)/2:0,g=e.y+f;if(r.usePointStyle){const _={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},m=s.leftForLtr(u,c)+c/2,p=g+l/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,Fa(t,_,m,p),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Fa(t,_,m,p)}else{t.lineWidth=Xt(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const _=s.leftForLtr(u,c),m=s.leftForLtr(s.xPlus(u,1),c-2),p=$i(o.borderRadius);Object.values(p).some(x=>x!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,rr(t,{x:_,y:g,w:c,h:l,radius:p}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),rr(t,{x:m,y:g+1,w:c-2,h:l-2,radius:p}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(_,g,c,l),t.strokeRect(_,g,c,l),t.fillStyle=o.backgroundColor,t.fillRect(m,g+1,c-2,l-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:h}=i,d=Fe(i.bodyFont);let u=d.lineHeight,f=0;const g=gs(i.rtl,this.x,this.width),_=function(P){e.fillText(P,g.x(t.x+f),t.y+u/2),t.y+=u+r},m=g.textAlign(o);let p,x,M,S,E,A,w;for(e.textAlign=o,e.textBaseline="middle",e.font=d.string,t.x=Ir(this,m,i),e.fillStyle=i.bodyColor,ce(this.beforeBody,_),f=a&&m!=="right"?o==="center"?c/2+h:c+2+h:0,S=0,A=s.length;S<A;++S){for(p=s[S],x=this.labelTextColors[S],e.fillStyle=x,ce(p.before,_),M=p.lines,a&&M.length&&(this._drawColorBox(e,t,S,g,i),u=Math.max(d.lineHeight,l)),E=0,w=M.length;E<w;++E)_(M[E]),u=d.lineHeight;ce(p.after,_)}f=0,u=d.lineHeight,ce(this.afterBody,_),t.y-=r}drawFooter(t,e,i){const s=this.footer,r=s.length;let o,a;if(r){const l=gs(i.rtl,this.x,this.width);for(t.x=Ir(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=l.textAlign(i.footerAlign),e.textBaseline="middle",o=Fe(i.footerFont),e.fillStyle=i.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(s[a],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+i.footerSpacing}}drawBackground(t,e,i,s){const{xAlign:r,yAlign:o}=this,{x:a,y:l}=t,{width:c,height:h}=i,{topLeft:d,topRight:u,bottomLeft:f,bottomRight:g}=$i(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(a+d,l),o==="top"&&this.drawCaret(t,e,i,s),e.lineTo(a+c-u,l),e.quadraticCurveTo(a+c,l,a+c,l+u),o==="center"&&r==="right"&&this.drawCaret(t,e,i,s),e.lineTo(a+c,l+h-g),e.quadraticCurveTo(a+c,l+h,a+c-g,l+h),o==="bottom"&&this.drawCaret(t,e,i,s),e.lineTo(a+f,l+h),e.quadraticCurveTo(a,l+h,a,l+h-f),o==="center"&&r==="left"&&this.drawCaret(t,e,i,s),e.lineTo(a,l+d),e.quadraticCurveTo(a,l,a+d,l),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,s=i&&i.x,r=i&&i.y;if(s||r){const o=Ys[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Fh(this,t),l=Object.assign({},o,this._size),c=Uh(e,t,l),h=Nh(t,l,c,e);(s._to!==h.x||r._to!==h.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=qe(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(r,t,s,e),vu(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),bu(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,s=t.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),r=!ho(i,s),o=this._positionChanged(s,e);(r||o)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,i),a=this._positionChanged(o,t),l=e||!ho(o,r)||a;return l&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,i,s){const r=this.options;if(t.type==="mouseout")return[];if(!s)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,i);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:i,caretY:s,options:r}=this,o=Ys[r.position].call(this,t,e);return o!==!1&&(i!==o.x||s!==o.y)}}var lx={id:"tooltip",_element:Bh,positioners:Ys,afterInit(n,t,e){e&&(n.tooltip=new Bh({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:$u},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},cx=Object.freeze({__proto__:null,Colors:M0,Decimation:T0,Filler:X0,Legend:Z0,SubTitle:tx,Title:Q0,Tooltip:lx});const hx=(n,t,e,i)=>(typeof t=="string"?(e=n.push(t)-1,i.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function dx(n,t,e,i){const s=n.indexOf(t);if(s===-1)return hx(n,t,e,i);const r=n.lastIndexOf(t);return s!==r?e:s}const ux=(n,t)=>n===null?null:Be(Math.round(n),0,t);function zh(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class fx extends Ji{static id="category";static defaults={ticks:{callback:zh}};constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const i=this.getLabels();for(const{index:s,label:r}of e)i[s]===r&&i.splice(s,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(Gt(t))return null;const i=this.getLabels();return e=isFinite(e)&&i[e]===t?e:dx(i,t,Ut(e,t),this._addedLabels),ux(e,i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),e||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,s=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=t;o<=e;o++)s.push({value:o});return s}getLabelForValue(t){return zh.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function px(n,t){const e=[],{bounds:s,step:r,min:o,max:a,precision:l,count:c,maxTicks:h,maxDigits:d,includeBounds:u}=n,f=r||1,g=h-1,{min:_,max:m}=t,p=!Gt(o),x=!Gt(a),M=!Gt(c),S=(m-_)/(d+1);let E=Fc((m-_)/g/f)*f,A,w,P,b;if(E<1e-14&&!p&&!x)return[{value:_},{value:m}];b=Math.ceil(m/E)-Math.floor(_/E),b>g&&(E=Fc(b*E/g/f)*f),Gt(l)||(A=Math.pow(10,l),E=Math.ceil(E*A)/A),s==="ticks"?(w=Math.floor(_/E)*E,P=Math.ceil(m/E)*E):(w=_,P=m),p&&x&&r&&Kp((a-o)/r,E/1e3)?(b=Math.round(Math.min((a-o)/E,h)),E=(a-o)/b,w=o,P=a):M?(w=p?o:w,P=x?a:P,b=c-1,E=(P-w)/b):(b=(P-w)/E,Js(b,Math.round(b),E/1e3)?b=Math.round(b):b=Math.ceil(b));const T=Math.max(Uc(E),Uc(w));A=Math.pow(10,Gt(l)?T:l),w=Math.round(w*A)/A,P=Math.round(P*A)/A;let R=0;for(p&&(u&&w!==o?(e.push({value:o}),w<o&&R++,Js(Math.round((w+R*E)*A)/A,o,Vh(o,S,n))&&R++):w<o&&R++);R<b;++R){const N=Math.round((w+R*E)*A)/A;if(x&&N>a)break;e.push({value:N})}return x&&u&&P!==a?e.length&&Js(e[e.length-1].value,a,Vh(a,S,n))?e[e.length-1].value=a:e.push({value:a}):(!x||P===a)&&e.push({value:P}),e}function Vh(n,t,{horizontal:e,minRotation:i}){const s=Sn(i),r=(e?Math.sin(s):Math.cos(s))||.001,o=.75*t*(""+n).length;return Math.min(t/r,o)}class xo extends Ji{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return Gt(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:s,max:r}=this;const o=l=>s=e?s:l,a=l=>r=i?r:l;if(t){const l=Dn(s),c=Dn(r);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(s===r){let l=r===0?1:Math.abs(r*.05);a(r+l),t||o(s-l)}this.min=s,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:i}=t,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),e=e||11),e&&(s=Math.min(e,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=px(s,r);return t.bounds==="ticks"&&nu(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const s=(i-e)/Math.max(t.length-1,1)/2;e-=s,i+=s}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return fr(t,this.chart.options.locale,this.options.ticks.format)}}class mx extends xo{static id="linear";static defaults={ticks:{callback:So.formatters.numeric}};determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Te(t)?t:0,this.max=Te(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=Sn(this.options.ticks.minRotation),s=(t?Math.sin(i):Math.cos(i))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/s))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}const ar=n=>Math.floor(xi(n)),Ii=(n,t)=>Math.pow(10,ar(n)+t);function Hh(n){return n/Math.pow(10,ar(n))===1}function Gh(n,t,e){const i=Math.pow(10,e),s=Math.floor(n/i);return Math.ceil(t/i)-s}function gx(n,t){const e=t-n;let i=ar(e);for(;Gh(n,t,i)>10;)i++;for(;Gh(n,t,i)<10;)i--;return Math.min(i,ar(n))}function _x(n,{min:t,max:e}){t=cn(n.min,t);const i=[],s=ar(t);let r=gx(t,e),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),l=s>r?Math.pow(10,s):0,c=Math.round((t-l)*o)/o,h=Math.floor((t-l)/a/10)*a*10;let d=Math.floor((c-h)/Math.pow(10,r)),u=cn(n.min,Math.round((l+h+d*Math.pow(10,r))*o)/o);for(;u<e;)i.push({value:u,major:Hh(u),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(r++,d=2,o=r>=0?1:o),u=Math.round((l+h+d*Math.pow(10,r))*o)/o;const f=cn(n.max,u);return i.push({value:f,major:Hh(f),significand:d}),i}class xx extends Ji{static id="logarithmic";static defaults={ticks:{callback:So.formatters.logarithmic,major:{enabled:!0}}};constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const i=xo.prototype.parse.apply(this,[t,e]);if(i===0){this._zero=!0;return}return Te(i)&&i>0?i:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Te(t)?Math.max(0,t):null,this.max=Te(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Te(this._userMin)&&(this.min=t===Ii(this.min,0)?Ii(this.min,-1):Ii(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let i=this.min,s=this.max;const r=a=>i=t?i:a,o=a=>s=e?s:a;i===s&&(i<=0?(r(1),o(10)):(r(Ii(i,-1)),o(Ii(s,1)))),i<=0&&r(Ii(s,-1)),s<=0&&o(Ii(i,1)),this.min=i,this.max=s}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},i=_x(e,this);return t.bounds==="ticks"&&nu(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":fr(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=xi(t),this._valueRange=xi(this.max)-xi(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(xi(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}function Va(n){const t=n.ticks;if(t.display&&n.display){const e=qe(t.backdropPadding);return Ut(t.font&&t.font.size,Me.font.size)+e.height}return 0}function vx(n,t,e){return e=be(e)?e:[e],{w:fm(n,t.string,e),h:e.length*t.lineHeight}}function Wh(n,t,e,i,s){return n===i||n===s?{start:t-e/2,end:t+e/2}:n<i||n>s?{start:t-e,end:t}:{start:t,end:t+e}}function bx(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),i=[],s=[],r=n._pointLabels.length,o=n.options.pointLabels,a=o.centerPointLabels?Jt/r:0;for(let l=0;l<r;l++){const c=o.setContext(n.getPointLabelContext(l));s[l]=c.padding;const h=n.getPointPosition(l,n.drawingArea+s[l],a),d=Fe(c.font),u=vx(n.ctx,d,n._pointLabels[l]);i[l]=u;const f=We(n.getIndexAngle(l)+a),g=Math.round(Gl(f)),_=Wh(g,h.x,u.w,0,180),m=Wh(g,h.y,u.h,90,270);Mx(e,t,f,_,m)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=Ex(n,i,s)}function Mx(n,t,e,i,s){const r=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,l=0;i.start<t.l?(a=(t.l-i.start)/r,n.l=Math.min(n.l,t.l-a)):i.end>t.r&&(a=(i.end-t.r)/r,n.r=Math.max(n.r,t.r+a)),s.start<t.t?(l=(t.t-s.start)/o,n.t=Math.min(n.t,t.t-l)):s.end>t.b&&(l=(s.end-t.b)/o,n.b=Math.max(n.b,t.b+l))}function Sx(n,t,e){const i=n.drawingArea,{extra:s,additionalAngle:r,padding:o,size:a}=e,l=n.getPointPosition(t,i+s+o,r),c=Math.round(Gl(We(l.angle+Re))),h=wx(l.y,a.h,c),d=Tx(c),u=Ax(l.x,a.w,d);return{visible:!0,x:l.x,y:h,textAlign:d,left:u,top:h,right:u+a.w,bottom:h+a.h}}function yx(n,t){if(!t)return!0;const{left:e,top:i,right:s,bottom:r}=n;return!(ti({x:e,y:i},t)||ti({x:e,y:r},t)||ti({x:s,y:i},t)||ti({x:s,y:r},t))}function Ex(n,t,e){const i=[],s=n._pointLabels.length,r=n.options,{centerPointLabels:o,display:a}=r.pointLabels,l={extra:Va(r)/2,additionalAngle:o?Jt/s:0};let c;for(let h=0;h<s;h++){l.padding=e[h],l.size=t[h];const d=Sx(n,h,l);i.push(d),a==="auto"&&(d.visible=yx(d,c),d.visible&&(c=d))}return i}function Tx(n){return n===0||n===180?"center":n<180?"left":"right"}function Ax(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function wx(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function Cx(n,t,e){const{left:i,top:s,right:r,bottom:o}=e,{backdropColor:a}=t;if(!Gt(a)){const l=$i(t.borderRadius),c=qe(t.backdropPadding);n.fillStyle=a;const h=i-c.left,d=s-c.top,u=r-i+c.width,f=o-s+c.height;Object.values(l).some(g=>g!==0)?(n.beginPath(),rr(n,{x:h,y:d,w:u,h:f,radius:l}),n.fill()):n.fillRect(h,d,u,f)}}function Rx(n,t){const{ctx:e,options:{pointLabels:i}}=n;for(let s=t-1;s>=0;s--){const r=n._pointLabelItems[s];if(!r.visible)continue;const o=i.setContext(n.getPointLabelContext(s));Cx(e,o,r);const a=Fe(o.font),{x:l,y:c,textAlign:h}=r;Ki(e,n._pointLabels[s],l,c+a.lineHeight/2,a,{color:o.color,textAlign:h,textBaseline:"middle"})}}function qu(n,t,e,i){const{ctx:s}=n;if(e)s.arc(n.xCenter,n.yCenter,t,0,ve);else{let r=n.getPointPosition(0,t);s.moveTo(r.x,r.y);for(let o=1;o<i;o++)r=n.getPointPosition(o,t),s.lineTo(r.x,r.y)}}function Px(n,t,e,i,s){const r=n.ctx,o=t.circular,{color:a,lineWidth:l}=t;!o&&!i||!a||!l||e<0||(r.save(),r.strokeStyle=a,r.lineWidth=l,r.setLineDash(s.dash||[]),r.lineDashOffset=s.dashOffset,r.beginPath(),qu(n,e,o,i),r.closePath(),r.stroke(),r.restore())}function Dx(n,t,e){return Ai(n,{label:e,index:t,type:"pointLabel"})}class Lx extends xo{static id="radialLinear";static defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:So.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};static descriptors={angleLines:{_fallback:"grid"}};constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=qe(Va(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=Te(t)&&!isNaN(t)?t:0,this.max=Te(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Va(this.options))}generateTickLabels(t){xo.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,i)=>{const s=_e(this.options.pointLabels.callback,[e,i],this);return s||s===0?s:""}).filter((e,i)=>this.chart.getDataVisibility(i))}fit(){const t=this.options;t.display&&t.pointLabels.display?bx(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,s){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,s))}getIndexAngle(t){const e=ve/(this._pointLabels.length||1),i=this.options.startAngle||0;return We(t*e+Sn(i))}getDistanceFromCenterForValue(t){if(Gt(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(Gt(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const i=e[t];return Dx(this.getContext(),t,i)}}getPointPosition(t,e,i=0){const s=this.getIndexAngle(t)-Re+i;return{x:Math.cos(s)*e+this.xCenter,y:Math.sin(s)*e+this.yCenter,angle:s}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:i,right:s,bottom:r}=this._pointLabelItems[t];return{left:e,top:i,right:s,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),qu(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:i,grid:s,border:r}=e,o=this._pointLabels.length;let a,l,c;if(e.pointLabels.display&&Rx(this,o),s.display&&this.ticks.forEach((h,d)=>{if(d!==0||d===0&&this.min<0){l=this.getDistanceFromCenterForValue(h.value);const u=this.getContext(d),f=s.setContext(u),g=r.setContext(u);Px(this,f,l,o,g)}}),i.display){for(t.save(),a=o-1;a>=0;a--){const h=i.setContext(this.getPointLabelContext(a)),{color:d,lineWidth:u}=h;!u||!d||(t.lineWidth=u,t.strokeStyle=d,t.setLineDash(h.borderDash),t.lineDashOffset=h.borderDashOffset,l=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),c=this.getPointPosition(a,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(s),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&this.min>=0&&!e.reverse)return;const c=i.setContext(this.getContext(l)),h=Fe(c.font);if(r=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=h.string,o=t.measureText(a.label).width,t.fillStyle=c.backdropColor;const d=qe(c.backdropPadding);t.fillRect(-o/2-d.left,-r-h.size/2-d.top,o+d.width,h.size+d.height)}Ki(t,a.label,0,-r,h,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}const Ro={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},nn=Object.keys(Ro);function Xh(n,t){return n-t}function Yh(n,t){if(Gt(t))return null;const e=n._adapter,{parser:i,round:s,isoWeekday:r}=n._parseOpts;let o=t;return typeof i=="function"&&(o=i(o)),Te(o)||(o=typeof i=="string"?e.parse(o,i):e.parse(o)),o===null?null:(s&&(o=s==="week"&&(vs(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,s)),+o)}function $h(n,t,e,i){const s=nn.length;for(let r=nn.indexOf(n);r<s-1;++r){const o=Ro[nn[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=i)return nn[r]}return nn[s-1]}function Ix(n,t,e,i,s){for(let r=nn.length-1;r>=nn.indexOf(e);r--){const o=nn[r];if(Ro[o].common&&n._adapter.diff(s,i,o)>=t-1)return o}return nn[e?nn.indexOf(e):0]}function Fx(n){for(let t=nn.indexOf(n)+1,e=nn.length;t<e;++t)if(Ro[nn[t]].common)return nn[t]}function qh(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:i,hi:s}=Wl(e,t),r=e[i]>=t?e[i]:e[s];n[r]=!0}}function Ux(n,t,e,i){const s=n._adapter,r=+s.startOf(t[0].value,i),o=t[t.length-1].value;let a,l;for(a=r;a<=o;a=+s.add(a,1,i))l=e[a],l>=0&&(t[l].major=!0);return t}function jh(n,t,e){const i=[],s={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],s[a]=o,i.push({value:a,major:!1});return r===0||!e?i:Ux(n,i,s,e)}class Ha extends Ji{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}};constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const i=t.time||(t.time={}),s=this._adapter=new Ng._date(t.adapters.date);s.init(e),Zs(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:Yh(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(s=Math.min(s,c.min)),!a&&!isNaN(c.max)&&(r=Math.max(r,c.max))}(!o||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),s=Te(s)&&!isNaN(s)?s:+e.startOf(Date.now(),i),r=Te(r)&&!isNaN(r)?r:+e.endOf(Date.now(),i)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=tm(s,r,o);return this._unit=e.unit||(i.autoSkip?$h(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):Ix(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:Fx(this._unit),this.initOffsets(s),t.reverse&&a.reverse(),jh(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,i=0,s,r;this.options.offset&&t.length&&(s=this.getDecimalForValue(t[0]),t.length===1?e=1-s:e=(this.getDecimalForValue(t[1])-s)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?i=r:i=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=Be(e,0,o),i=Be(i,0,o),this._offsets={start:e,end:i,factor:1/(e+1+i)}}_generate(){const t=this._adapter,e=this.min,i=this.max,s=this.options,r=s.time,o=r.unit||$h(r.minUnit,e,i,this._getLabelCapacity(e)),a=Ut(s.ticks.stepSize,1),l=o==="week"?r.isoWeekday:!1,c=vs(l)||l===!0,h={};let d=e,u,f;if(c&&(d=+t.startOf(d,"isoWeek",l)),d=+t.startOf(d,c?"day":o),t.diff(i,e,o)>1e5*a)throw new Error(e+" and "+i+" are too far apart with stepSize of "+a+" "+o);const g=s.ticks.source==="data"&&this.getDataTimestamps();for(u=d,f=0;u<i;u=+t.add(u,a,o),f++)qh(h,u,g);return(u===i||s.bounds==="ticks"||f===1)&&qh(h,u,g),Object.keys(h).sort(Xh).map(_=>+_)}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){const s=this.options.time.displayFormats,r=this._unit,o=e||s[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,i,s){const r=this.options,o=r.ticks.callback;if(o)return _e(o,[t,e,i],this);const a=r.time.displayFormats,l=this._unit,c=this._majorUnit,h=l&&a[l],d=c&&a[c],u=i[e],f=c&&d&&u&&u.major;return this._adapter.format(t,s||(f?d:h))}generateTickLabels(t){let e,i,s;for(e=0,i=t.length;e<i;++e)s=t[e],s.label=this._tickFormatFunction(s.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,s=Sn(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*r+a*o,h:i*o+a*r}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,s=i[e.unit]||i.millisecond,r=this._tickFormatFunction(t,0,jh(this,[t],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,i;if(t.length)return t;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(e=0,i=s.length;e<i;++e)t=t.concat(s[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const s=this.getLabels();for(e=0,i=s.length;e<i;++e)t.push(Yh(this,s[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return ru(t.sort(Xh))}}function Fr(n,t,e){let i=0,s=n.length-1,r,o,a,l;e?(t>=n[i].pos&&t<=n[s].pos&&({lo:i,hi:s}=Qn(n,"pos",t)),{pos:r,time:a}=n[i],{pos:o,time:l}=n[s]):(t>=n[i].time&&t<=n[s].time&&({lo:i,hi:s}=Qn(n,"time",t)),{time:r,pos:a}=n[i],{time:o,pos:l}=n[s]);const c=o-r;return c?a+(l-a)*(t-r)/c:a}class Nx extends Ha{static id="timeseries";static defaults=Ha.defaults;constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=Fr(e,this.min),this._tableRange=Fr(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,s=[],r=[];let o,a,l,c,h;for(o=0,a=t.length;o<a;++o)c=t[o],c>=e&&c<=i&&s.push(c);if(s.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)h=s[o+1],l=s[o-1],c=s[o],Math.round((h+l)/2)!==c&&r.push({time:c,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(e)||i.length===1)&&i.push(e),i.sort((s,r)=>s-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return e.length&&i.length?t=this.normalize(e.concat(i)):t=e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(Fr(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return Fr(this._table,i*this._tableRange+this._minPos,!0)}}var Ox=Object.freeze({__proto__:null,CategoryScale:fx,LinearScale:mx,LogarithmicScale:xx,RadialLinearScale:Lx,TimeScale:Ha,TimeSeriesScale:Nx});const kx=[Ug,p0,cx,Ox],Bx={class:"p-4 space-y-4"},zx={class:"flex items-center justify-between"},Vx={class:"text-xs font-bold text-slate-500 uppercase tracking-wider"},Hx={class:"flex items-end justify-between gap-4"},Gx={class:"text-2xl font-black text-slate-900 dark:text-white leading-none"},Wx={class:"h-10 flex-1 min-w-[80px]"},Xx=gn({__name:"ChartCard",props:{title:{},value:{},data:{},color:{}},setup(n){Oa.register(...kx);const t=n,e=xe(null);let i=null;return Ol(()=>{if(e.value){const s={type:"line",data:{labels:t.data.map((r,o)=>o),datasets:[{data:t.data,borderColor:t.color||"#6366f1",borderWidth:2,pointRadius:0,tension:.4,fill:!0,backgroundColor:`${t.color||"#6366f1"}15`}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1}},scales:{x:{display:!1},y:{display:!1}}}};i=new Oa(e.value,s)}}),kl(()=>{i?.destroy()}),(s,r)=>(se(),ai(ht(we),{variant:"default",shadow:"sm",class:"w-full overflow-hidden"},{default:Lt(()=>[D("div",Bx,[D("div",zx,[D("span",Vx,Ht(n.title),1),rt(ht(de),{name:"heroicons:ellipsis-vertical",class:"text-slate-400"})]),D("div",Hx,[D("h2",Gx,Ht(n.value),1),D("div",Wx,[D("canvas",{ref_key:"chartRef",ref:e},null,512)])])])]),_:1}))}}),Yx={class:"relative aspect-video overflow-hidden bg-slate-900"},$x=["src","alt"],qx={class:"absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"},jx={class:"absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 text-white text-[10px] font-bold rounded"},Kx={key:1,class:"w-full h-full",src:"https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},Zx={class:"p-4 flex gap-3"},Jx={class:"flex flex-col gap-1 min-w-0"},Qx={class:"text-sm font-bold text-slate-900 dark:text-white leading-tight line-clamp-2"},tv={class:"text-[11px] text-slate-500 font-medium"},ev={class:"text-[11px] text-slate-400"},nv=gn({__name:"VideoCard",props:{video:{}},setup(n){const t=xe(!1);return(e,i)=>(se(),ai(ht(we),{class:"w-full max-w-[320px] overflow-hidden group",padding:"none",hover:"scale"},{default:Lt(()=>[D("div",Yx,[t.value?(se(),Ce("iframe",Kx)):(se(),Ce(bn,{key:0},[D("img",{src:n.video.thumbnail,alt:n.video.title,class:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"},null,8,$x),D("div",qx,[rt(ht(Ie),{severity:"contrast",rounded:"full",icon:"heroicons:play-solid",size:"xl",class:"!p-4 shadow-2xl",onClick:i[0]||(i[0]=s=>t.value=!0)})]),D("div",jx,Ht(n.video.duration),1)],64))]),D("div",Zx,[rt(ht(Ks),{src:n.video.authorAvatar,size:"sm",rounded:"full",class:"shrink-0"},null,8,["src"]),D("div",Jx,[D("h3",Qx,Ht(n.video.title),1),D("div",tv,Ht(n.video.author),1),D("div",ev,Ht(n.video.views)+" vues • "+Ht(n.video.date),1)]),rt(ht(Ie),{variant:"ghost",icon:"heroicons:ellipsis-vertical",size:"xs",class:"ml-auto !p-0"})])]),_:1}))}}),iv={class:"h-48 w-full bg-slate-200 dark:bg-slate-800 relative"},sv={class:"absolute top-4 left-4"},rv={class:"px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full shadow-lg border border-white/20 text-xs font-bold flex items-center gap-1.5"},ov={key:0,class:"absolute bottom-4 right-4"},av={class:"px-2 py-1.5 bg-indigo-600 text-white rounded-lg shadow-xl text-sm font-black"},lv={class:"p-4 space-y-3"},cv={class:"text-base font-bold text-slate-900 dark:text-white"},hv={class:"flex items-center gap-2"},dv=gn({__name:"MapCard",props:{location:{}},setup(n){return(t,e)=>(se(),ai(ht(we),{class:"w-full max-w-[350px] overflow-hidden group",padding:"none"},{default:Lt(()=>[D("div",iv,[e[0]||(e[0]=D("iframe",{class:"w-full h-full grayscale-[0.5] contrast-[1.1] pointer-events-none",src:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10000!2d2.3522!3d48.8566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sfr!4v1",frameborder:"0"},null,-1)),D("div",sv,[D("div",rv,[rt(ht(de),{name:"heroicons:map-pin",class:"text-rose-500"}),Wt(" "+Ht(n.location.city),1)])]),n.location.price?(se(),Ce("div",ov,[D("div",av,Ht(n.location.price),1)])):jd("",!0)]),D("div",lv,[D("div",null,[D("h3",cv,Ht(n.location.address),1),e[1]||(e[1]=D("p",{class:"text-xs text-slate-500"},"Paris, Île-de-France, France",-1))]),D("div",hv,[rt(ht(Ie),{severity:"primary",size:"sm",class:"flex-1"},{default:Lt(()=>[...e[2]||(e[2]=[Wt("Naviguer",-1)])]),_:1}),rt(ht(Ie),{variant:"outlined",size:"sm",icon:"heroicons:share"})])])]),_:1}))}}),uv={class:"grid grid-cols-1 md:grid-cols-2 gap-8 p-6"},fv={class:"aspect-square rounded-2xl overflow-hidden bg-slate-100"},pv=["src","alt"],mv={class:"space-y-6"},gv={class:"text-2xl font-black text-slate-900 dark:text-white"},_v={class:"text-3xl font-black text-indigo-600 mt-2"},xv={class:"text-slate-600 dark:text-slate-400 leading-relaxed"},vv={class:"space-y-3"},bv={class:"flex gap-2"},Mv=["onClick"],Sv={class:"flex items-center gap-4 pt-4"},yv=gn({__name:"CardQuickView",props:{item:{}},setup(n,{expose:t}){const e=xe(!1),i=xe("M");return xe(1),t({open:()=>e.value=!0}),(s,r)=>(se(),ai(ht(kf),{modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=o=>e.value=o),title:n.item.name,size:"lg",variant:"bottom-sheet","swipe-to-dismiss":!0},{default:Lt(()=>[D("div",uv,[D("div",fv,[D("img",{src:n.item.image,alt:n.item.name,class:"w-full h-full object-cover"},null,8,pv)]),D("div",mv,[D("div",null,[D("h2",gv,Ht(n.item.name),1),D("p",_v,Ht(n.item.price)+" €",1)]),D("p",xv,Ht(n.item.description),1),D("div",vv,[r[1]||(r[1]=D("span",{class:"text-xs font-bold uppercase tracking-widest text-slate-500"},"Taille",-1)),D("div",bv,[(se(),Ce(bn,null,Kn(["S","M","L","XL"],o=>D("button",{key:o,class:er(["w-12 h-12 rounded-xl border-2 transition-all font-bold",[i.value===o?"border-indigo-600 bg-indigo-50 text-indigo-600":"border-slate-200 text-slate-500 hover:border-slate-300"]]),onClick:a=>i.value=o},Ht(o),11,Mv)),64))])]),D("div",Sv,[rt(ht(Ie),{severity:"primary",size:"lg",block:"",icon:"heroicons:shopping-bag"},{default:Lt(()=>[...r[2]||(r[2]=[Wt("Ajouter au panier",-1)])]),_:1})])])])]),_:1},8,["modelValue","title"]))}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nc="182",Ev=0,Kh=1,Tv=2,so=1,Av=2,$s=3,Ti=0,sn=1,Zn=2,ni=0,_s=1,Zh=2,Jh=3,Qh=4,wv=5,Gi=100,Cv=101,Rv=102,Pv=103,Dv=104,Lv=200,Iv=201,Fv=202,Uv=203,Ga=204,Wa=205,Nv=206,Ov=207,kv=208,Bv=209,zv=210,Vv=211,Hv=212,Gv=213,Wv=214,Xa=0,Ya=1,$a=2,Ss=3,qa=4,ja=5,Ka=6,Za=7,ic=0,Xv=1,Yv=2,Ln=0,ju=1,Ku=2,Zu=3,Ju=4,Qu=5,tf=6,ef=7,nf=300,Zi=301,ys=302,Ja=303,Qa=304,Po=306,tl=1e3,ei=1001,el=1002,ze=1003,$v=1004,Ur=1005,Ye=1006,Zo=1007,Xi=1008,hn=1009,sf=1010,rf=1011,lr=1012,sc=1013,Un=1014,Rn=1015,ri=1016,rc=1017,oc=1018,cr=1020,of=35902,af=35899,lf=1021,cf=1022,yn=1023,oi=1026,Yi=1027,hf=1028,ac=1029,Es=1030,lc=1031,cc=1033,ro=33776,oo=33777,ao=33778,lo=33779,nl=35840,il=35841,sl=35842,rl=35843,ol=36196,al=37492,ll=37496,cl=37488,hl=37489,dl=37490,ul=37491,fl=37808,pl=37809,ml=37810,gl=37811,_l=37812,xl=37813,vl=37814,bl=37815,Ml=37816,Sl=37817,yl=37818,El=37819,Tl=37820,Al=37821,wl=36492,Cl=36494,Rl=36495,Pl=36283,Dl=36284,Ll=36285,Il=36286,qv=3200,df=0,jv=1,gi="",pn="srgb",Ts="srgb-linear",vo="linear",le="srgb",ns=7680,td=519,Kv=512,Zv=513,Jv=514,hc=515,Qv=516,tb=517,dc=518,eb=519,ed=35044,nd="300 es",Pn=2e3,bo=2001;function uf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Mo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nb(){const n=Mo("canvas");return n.style.display="block",n}const id={};function sd(...n){const t="THREE."+n.shift();console.log(t,...n)}function Ft(...n){const t="THREE."+n.shift();console.warn(t,...n)}function Zt(...n){const t="THREE."+n.shift();console.error(t,...n)}function hr(...n){const t=n.join(" ");t in id||(id[t]=!0,Ft(...n))}function ib(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}class ws{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jo=Math.PI/180,Fl=180/Math.PI;function pr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function Yt(n,t,e){return Math.max(t,Math.min(e,n))}function sb(n,t){return(n%t+t)%t}function Qo(n,t,e){return(1-e)*n+e*t}function Ns(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ne{constructor(t=0,e=0){ne.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a>=1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*_;m<0&&(u=-u,f=-f,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const x=Math.acos(m),M=Math.sin(x);p=Math.sin(p*x)/M,a=Math.sin(a*x)/M,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+_*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+_*a;const x=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=x,c*=x,h*=x,d*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,i=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ta.copy(this).projectOnVector(t),this.sub(ta)}reflect(t){return this.sub(ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new V,rd=new mr;class Ot{constructor(t,e,i,s,r,o,a,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],x=s[1],M=s[4],S=s[7],E=s[2],A=s[5],w=s[8];return r[0]=o*_+a*x+l*E,r[3]=o*m+a*M+l*A,r[6]=o*p+a*S+l*w,r[1]=c*_+h*x+d*E,r[4]=c*m+h*M+d*A,r[7]=c*p+h*S+d*w,r[2]=u*_+f*x+g*E,r[5]=u*m+f*M+g*A,r[8]=u*p+f*S+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ea.makeScale(t,e)),this}rotate(t){return this.premultiply(ea.makeRotation(-t)),this}translate(t,e){return this.premultiply(ea.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ea=new Ot,od=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ad=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rb(){const n={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===le&&(s.r=ii(s.r),s.g=ii(s.g),s.b=ii(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===le&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?vo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ts]:{primaries:t,whitePoint:i,transfer:vo,toXYZ:od,fromXYZ:ad,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:t,whitePoint:i,transfer:le,toXYZ:od,fromXYZ:ad,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),n}const qt=rb();function ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let is;class ob{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{is===void 0&&(is=Mo("canvas")),is.width=t.width,is.height=t.height;const s=is.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=is}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ii(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ii(e[i]/255)*255):e[i]=ii(e[i]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ab=0;class uc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=pr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(na(s[o].image)):r.push(na(s[o]))}else r=na(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function na(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ob.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}let lb=0;const ia=new V;class Ze extends ws{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,i=ei,s=ei,r=Ye,o=Xi,a=yn,l=hn,c=Ze.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=pr(),this.name="",this.source=new uc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ia).x}get height(){return this.source.getSize(ia).y}get depth(){return this.source.getSize(ia).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tl:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case el:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tl:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case el:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=nf;Ze.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,i=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,S=(f+1)/2,E=(p+1)/2,A=(h+u)/4,w=(d+_)/4,P=(g+m)/4;return M>S&&M>E?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=A/i,r=w/i):S>E?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=A/s,r=P/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=w/r,s=P/r),this.set(i,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-_)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cb extends ws{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new Ze(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new uc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends cb{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ff extends Ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hb extends Ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gr{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nr.copy(i.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),Or.subVectors(this.max,Os),ss.subVectors(t.a,Os),rs.subVectors(t.b,Os),os.subVectors(t.c,Os),hi.subVectors(rs,ss),di.subVectors(os,rs),Fi.subVectors(ss,os);let e=[0,-hi.z,hi.y,0,-di.z,di.y,0,-Fi.z,Fi.y,hi.z,0,-hi.x,di.z,0,-di.x,Fi.z,0,-Fi.x,-hi.y,hi.x,0,-di.y,di.x,0,-Fi.y,Fi.x,0];return!sa(e,ss,rs,os,Or)||(e=[1,0,0,0,1,0,0,0,1],!sa(e,ss,rs,os,Or))?!1:(kr.crossVectors(hi,di),e=[kr.x,kr.y,kr.z],sa(e,ss,rs,os,Or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Vn=[new V,new V,new V,new V,new V,new V,new V,new V],_n=new V,Nr=new gr,ss=new V,rs=new V,os=new V,hi=new V,di=new V,Fi=new V,Os=new V,Or=new V,kr=new V,Ui=new V;function sa(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ui.fromArray(n,r);const a=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),l=t.dot(Ui),c=e.dot(Ui),h=i.dot(Ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const db=new gr,ks=new V,ra=new V;class fc{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):db.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ks.subVectors(t,this.center);const e=ks.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ks,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ks.copy(t.center).add(ra)),this.expandByPoint(ks.copy(t.center).sub(ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Hn=new V,oa=new V,Br=new V,ui=new V,aa=new V,zr=new V,la=new V;class ub{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){oa.copy(t).add(e).multiplyScalar(.5),Br.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(oa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Br),a=ui.dot(this.direction),l=-ui.dot(Br),c=ui.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(oa).addScaledVector(Br,u),f}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);const i=Hn.dot(this.direction),s=Hn.dot(Hn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,i,s,r){aa.subVectors(e,t),zr.subVectors(i,t),la.crossVectors(aa,zr);let o=this.direction.dot(la),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,t);const l=a*this.direction.dot(zr.crossVectors(ui,zr));if(l<0)return null;const c=a*this.direction.dot(aa.cross(ui));if(c<0||l+c>o)return null;const h=-a*ui.dot(la);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,i,s,r,o,a,l,c,h,d,u,f,g,_,m){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,u,f,g,_,m)}set(t,e,i,s,r,o,a,l,c,h,d,u,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/as.setFromMatrixColumn(t,0).length(),r=1/as.setFromMatrixColumn(t,1).length(),o=1/as.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fb,t,pb)}lookAt(t,e,i){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),fi.crossVectors(i,an),fi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),fi.crossVectors(i,an)),fi.normalize(),Vr.crossVectors(an,fi),s[0]=fi.x,s[4]=Vr.x,s[8]=an.x,s[1]=fi.y,s[5]=Vr.y,s[9]=an.y,s[2]=fi.z,s[6]=Vr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],x=i[3],M=i[7],S=i[11],E=i[15],A=s[0],w=s[4],P=s[8],b=s[12],T=s[1],R=s[5],N=s[9],k=s[13],X=s[2],W=s[6],B=s[10],z=s[14],j=s[3],et=s[7],it=s[11],ut=s[15];return r[0]=o*A+a*T+l*X+c*j,r[4]=o*w+a*R+l*W+c*et,r[8]=o*P+a*N+l*B+c*it,r[12]=o*b+a*k+l*z+c*ut,r[1]=h*A+d*T+u*X+f*j,r[5]=h*w+d*R+u*W+f*et,r[9]=h*P+d*N+u*B+f*it,r[13]=h*b+d*k+u*z+f*ut,r[2]=g*A+_*T+m*X+p*j,r[6]=g*w+_*R+m*W+p*et,r[10]=g*P+_*N+m*B+p*it,r[14]=g*b+_*k+m*z+p*ut,r[3]=x*A+M*T+S*X+E*j,r[7]=x*w+M*R+S*W+E*et,r[11]=x*P+M*N+S*B+E*it,r[15]=x*b+M*k+S*z+E*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15],x=l*f-c*u,M=a*f-c*d,S=a*u-l*d,E=o*f-c*h,A=o*u-l*h,w=o*d-a*h;return e*(_*x-m*M+p*S)-i*(g*x-m*E+p*A)+s*(g*M-_*E+p*w)-r*(g*S-_*A+m*w)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=d*m*c-_*u*c+_*l*f-a*m*f-d*l*p+a*u*p,M=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,S=h*_*c-g*d*c+g*a*f-o*_*f-h*a*p+o*d*p,E=g*d*l-h*_*l-g*a*u+o*_*u+h*a*m-o*d*m,A=e*x+i*M+s*S+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=x*w,t[1]=(_*u*r-d*m*r-_*s*f+i*m*f+d*s*p-i*u*p)*w,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*w,t[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*f-i*l*f)*w,t[4]=M*w,t[5]=(h*m*r-g*u*r+g*s*f-e*m*f-h*s*p+e*u*p)*w,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*w,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*f+e*l*f)*w,t[8]=S*w,t[9]=(g*d*r-h*_*r-g*i*f+e*_*f+h*i*p-e*d*p)*w,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*p+e*a*p)*w,t[11]=(h*a*r-o*d*r-h*i*c+e*d*c+o*i*f-e*a*f)*w,t[12]=E*w,t[13]=(h*_*s-g*d*s+g*i*u-e*_*u-h*i*m+e*d*m)*w,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*w,t[15]=(o*d*s-h*a*s+h*i*l-e*d*l-o*i*u+e*a*u)*w,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,_=o*h,m=o*d,p=a*d,x=l*c,M=l*h,S=l*d,E=i.x,A=i.y,w=i.z;return s[0]=(1-(_+p))*E,s[1]=(f+S)*E,s[2]=(g-M)*E,s[3]=0,s[4]=(f-S)*A,s[5]=(1-(u+p))*A,s[6]=(m+x)*A,s[7]=0,s[8]=(g+M)*w,s[9]=(m-x)*w,s[10]=(1-(u+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;if(t.x=s[12],t.y=s[13],t.z=s[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let r=as.set(s[0],s[1],s[2]).length();const o=as.set(s[4],s[5],s[6]).length(),a=as.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),xn.copy(this);const c=1/r,h=1/o,d=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,e.setFromRotationMatrix(xn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Pn,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Pn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===bo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Pn,l=!1){const c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Pn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===bo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const as=new V,xn=new Ae,fb=new V(0,0,0),pb=new V(1,1,1),fi=new V,Vr=new V,an=new V,ld=new Ae,cd=new mr;class Nn{constructor(t=0,e=0,i=0,s=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ld.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ld,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cd.setFromEuler(this),this.setFromQuaternion(cd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class pf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mb=0;const hd=new V,ls=new mr,Gn=new Ae,Hr=new V,Bs=new V,gb=new V,_b=new mr,dd=new V(1,0,0),ud=new V(0,1,0),fd=new V(0,0,1),pd={type:"added"},xb={type:"removed"},cs={type:"childadded",child:null},ca={type:"childremoved",child:null};class $e extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const t=new V,e=new Nn,i=new mr,s=new V(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Ot}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(dd,t)}rotateY(t){return this.rotateOnAxis(ud,t)}rotateZ(t){return this.rotateOnAxis(fd,t)}translateOnAxis(t,e){return hd.copy(t).applyQuaternion(this.quaternion),this.position.add(hd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dd,t)}translateY(t){return this.translateOnAxis(ud,t)}translateZ(t){return this.translateOnAxis(fd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Hr.copy(t):Hr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Bs,Hr,this.up):Gn.lookAt(Hr,Bs,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(Gn),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pd),cs.child=t,this.dispatchEvent(cs),cs.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xb),ca.child=t,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pd),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,gb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,_b,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}$e.DEFAULT_UP=new V(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new V,Wn=new V,ha=new V,Xn=new V,hs=new V,ds=new V,md=new V,da=new V,ua=new V,fa=new V,pa=new Ee,ma=new Ee,ga=new Ee;class Mn{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),vn.subVectors(t,e),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){vn.subVectors(s,e),Wn.subVectors(i,e),ha.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(Wn),l=vn.dot(ha),c=Wn.dot(Wn),h=Wn.dot(ha),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return pa.setScalar(0),ma.setScalar(0),ga.setScalar(0),pa.fromBufferAttribute(t,e),ma.fromBufferAttribute(t,i),ga.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(pa,r.x),o.addScaledVector(ma,r.y),o.addScaledVector(ga,r.z),o}static isFrontFacing(t,e,i,s){return vn.subVectors(i,e),Wn.subVectors(t,e),vn.cross(Wn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),vn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Mn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;hs.subVectors(s,i),ds.subVectors(r,i),da.subVectors(t,i);const l=hs.dot(da),c=ds.dot(da);if(l<=0&&c<=0)return e.copy(i);ua.subVectors(t,s);const h=hs.dot(ua),d=ds.dot(ua);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(hs,o);fa.subVectors(t,r);const f=hs.dot(fa),g=ds.dot(fa);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(ds,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return md.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(md,a);const p=1/(m+_+u);return o=_*p,a=u*p,e.copy(i).addScaledVector(hs,o).addScaledVector(ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function _a(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=qt.workingColorSpace){if(t=sb(t,1),e=Yt(e,0,1),i=Yt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=_a(o,r,t+1/3),this.g=_a(o,r,t),this.b=_a(o,r,t-1/3)}return qt.colorSpaceToWorking(this,s),this}setStyle(t,e=pn){function i(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){const i=mf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return qt.workingToColorSpace(He.copy(this),t),Math.round(Yt(He.r*255,0,255))*65536+Math.round(Yt(He.g*255,0,255))*256+Math.round(Yt(He.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(He.copy(this),e);const i=He.r,s=He.g,r=He.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=pn){qt.workingToColorSpace(He.copy(this),t);const e=He.r,i=He.g,s=He.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(Gr);const i=Qo(pi.h,Gr.h,e),s=Qo(pi.s,Gr.s,e),r=Qo(pi.l,Gr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Qt;Qt.NAMES=mf;let vb=0;class _r extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=pr(),this.name="",this.type="Material",this.blending=_s,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Wa,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ga&&(i.blendSrc=this.blendSrc),this.blendDst!==Wa&&(i.blendDst=this.blendDst),this.blendEquation!==Gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==td&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class gf extends _r{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new V,Wr=new ne;let bb=0;class Fn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bb++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ed,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Wr.fromBufferAttribute(this,e),Wr.applyMatrix3(t),this.setXY(e,Wr.x,Wr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ns(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=en(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ns(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ns(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ns(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ns(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ed&&(t.usage=this.usage),t}}class _f extends Fn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class xf extends Fn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class si extends Fn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Mb=0;const fn=new Ae,xa=new $e,us=new V,ln=new gr,zs=new gr,ke=new V;class ci extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uf(t)?xf:_f)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ot().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,i){return fn.makeTranslation(t,e,i),this.applyMatrix4(fn),this}scale(t,e,i){return fn.makeScale(t,e,i),this.applyMatrix4(fn),this}lookAt(t){return xa.lookAt(t),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new si(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(ln.min,zs.min),ln.expandByPoint(ke),ke.addVectors(ln.max,zs.max),ln.expandByPoint(ke)):(ln.expandByPoint(zs.min),ln.expandByPoint(zs.max))}ln.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ke.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(t,c),ke.add(us)),s=Math.max(s,i.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new V,l[P]=new V;const c=new V,h=new V,d=new V,u=new ne,f=new ne,g=new ne,_=new V,m=new V;function p(P,b,T){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,b),d.fromBufferAttribute(i,T),u.fromBufferAttribute(r,P),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,T),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[P].add(_),a[b].add(_),a[T].add(_),l[P].add(m),l[b].add(m),l[T].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,b=x.length;P<b;++P){const T=x[P],R=T.start,N=T.count;for(let k=R,X=R+N;k<X;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const M=new V,S=new V,E=new V,A=new V;function w(P){E.fromBufferAttribute(s,P),A.copy(E);const b=a[P];M.copy(b),M.sub(E.multiplyScalar(E.dot(b))).normalize(),S.crossVectors(A,b);const R=S.dot(l[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,R)}for(let P=0,b=x.length;P<b;++P){const T=x[P],R=T.start,N=T.count;for(let k=R,X=R+N;k<X;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,h=new V,d=new V;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Fn(u,h,d)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ci,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gd=new Ae,Ni=new ub,Xr=new fc,_d=new V,Yr=new V,$r=new V,qr=new V,va=new V,jr=new V,xd=new V,Kr=new V;class On extends $e{constructor(t=new ci,e=new gf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(va.fromBufferAttribute(d,t),o?jr.addScaledVector(va,h):jr.addScaledVector(va.sub(e),h))}e.add(jr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(r),Ni.copy(t.ray).recast(t.near),!(Xr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Xr,_d)===null||Ni.origin.distanceToSquared(_d)>(t.far-t.near)**2))&&(gd.copy(r).invert(),Ni.copy(t.ray).applyMatrix4(gd),!(i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=x,E=M;S<E;S+=3){const A=a.getX(S),w=a.getX(S+1),P=a.getX(S+2);s=Zr(this,p,t,i,c,h,d,A,w,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),M=a.getX(m+1),S=a.getX(m+2);s=Zr(this,o,t,i,c,h,d,x,M,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=x,E=M;S<E;S+=3){const A=S,w=S+1,P=S+2;s=Zr(this,p,t,i,c,h,d,A,w,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,M=m+1,S=m+2;s=Zr(this,o,t,i,c,h,d,x,M,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Sb(n,t,e,i,s,r,o,a){let l;if(t.side===sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ti,a),l===null)return null;Kr.copy(a),Kr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Kr);return c<e.near||c>e.far?null:{distance:c,point:Kr.clone(),object:n}}function Zr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Yr),n.getVertexPosition(l,$r),n.getVertexPosition(c,qr);const h=Sb(n,t,e,i,Yr,$r,qr,xd);if(h){const d=new V;Mn.getBarycoord(xd,Yr,$r,qr,d),s&&(h.uv=Mn.getInterpolatedAttribute(s,a,l,c,d,new ne)),r&&(h.uv1=Mn.getInterpolatedAttribute(r,a,l,c,d,new ne)),o&&(h.normal=Mn.getInterpolatedAttribute(o,a,l,c,d,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new V,materialIndex:0};Mn.getNormal(Yr,$r,qr,u.normal),h.face=u,h.barycoord=d}return h}class Cs extends ci{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new si(c,3)),this.setAttribute("normal",new si(h,3)),this.setAttribute("uv",new si(d,2));function g(_,m,p,x,M,S,E,A,w,P,b){const T=S/w,R=E/P,N=S/2,k=E/2,X=A/2,W=w+1,B=P+1;let z=0,j=0;const et=new V;for(let it=0;it<B;it++){const ut=it*R-k;for(let Pt=0;Pt<W;Pt++){const Dt=Pt*T-N;et[_]=Dt*x,et[m]=ut*M,et[p]=X,c.push(et.x,et.y,et.z),et[_]=0,et[m]=0,et[p]=A>0?1:-1,h.push(et.x,et.y,et.z),d.push(Pt/w),d.push(1-it/P),z+=1}}for(let it=0;it<P;it++)for(let ut=0;ut<w;ut++){const Pt=u+ut+W*it,Dt=u+ut+W*(it+1),te=u+(ut+1)+W*(it+1),ee=u+(ut+1)+W*it;l.push(Pt,Dt,ee),l.push(Dt,te,ee),j+=6}a.addGroup(f,j,b),f+=j,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function As(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ke(n){const t={};for(let e=0;e<n.length;e++){const i=As(n[e]);for(const s in i)t[s]=i[s]}return t}function yb(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function vf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Eb={clone:As,merge:Ke};var Tb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ab=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends _r{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tb,this.fragmentShader=Ab,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=yb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class bf extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new V,vd=new ne,bd=new ne;class mn extends bf{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Jo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fl*2*Math.atan(Math.tan(Jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,vd,bd),e.subVectors(bd,vd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Jo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fs=-90,ps=1;class wb extends $e{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(fs,ps,t,e);s.layers=this.layers,this.add(s);const r=new mn(fs,ps,t,e);r.layers=this.layers,this.add(r);const o=new mn(fs,ps,t,e);o.layers=this.layers,this.add(o);const a=new mn(fs,ps,t,e);a.layers=this.layers,this.add(a);const l=new mn(fs,ps,t,e);l.layers=this.layers,this.add(l);const c=new mn(fs,ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Mf extends Ze{constructor(t=[],e=Zi,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sf extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Mf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Cs(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:ni});r.uniforms.tEquirect.value=e;const o=new On(s,r),a=e.minFilter;return e.minFilter===Xi&&(e.minFilter=Ye),new wb(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class Jr extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cb={type:"move"};class ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Jr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Rb extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Pb extends Ze{constructor(t=null,e=1,i=1,s,r,o,a,l,c=ze,h=ze,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ma=new V,Db=new V,Lb=new Ot;class Hi{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ma.subVectors(i,e).cross(Db.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ma),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Lb.getNormalMatrix(t),s=this.coplanarPoint(Ma).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new fc,Ib=new ne(.5,.5),Qr=new V;class pc{constructor(t=new Hi,e=new Hi,i=new Hi,s=new Hi,r=new Hi,o=new Hi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Pn,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],x=r[12],M=r[13],S=r[14],E=r[15];if(s[0].setComponents(c-o,f-h,p-g,E-x).normalize(),s[1].setComponents(c+o,f+h,p+g,E+x).normalize(),s[2].setComponents(c+a,f+d,p+_,E+M).normalize(),s[3].setComponents(c-a,f-d,p-_,E-M).normalize(),i)s[4].setComponents(l,u,m,S).normalize(),s[5].setComponents(c-l,f-u,p-m,E-S).normalize();else if(s[4].setComponents(c-l,f-u,p-m,E-S).normalize(),e===Pn)s[5].setComponents(c+l,f+u,p+m,E+S).normalize();else if(e===bo)s[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){Oi.center.set(0,0,0);const e=Ib.distanceTo(t.center);return Oi.radius=.7071067811865476+e,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Qr.x=s.normal.x>0?t.max.x:t.min.x,Qr.y=s.normal.y>0?t.max.y:t.min.y,Qr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dr extends Ze{constructor(t,e,i=Un,s,r,o,a=ze,l=ze,c,h=oi,d=1){if(h!==oi&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new uc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Fb extends dr{constructor(t,e=Un,i=Zi,s,r,o=ze,a=ze,l,c=oi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class yf extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Do extends ci{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*u-o;for(let M=0;M<c;M++){const S=M*d-r;g.push(S,-x,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const M=x+c*p,S=x+c*(p+1),E=x+1+c*(p+1),A=x+1+c*p;f.push(M,S,A),f.push(S,E,A)}this.setIndex(f),this.setAttribute("position",new si(g,3)),this.setAttribute("normal",new si(_,3)),this.setAttribute("uv",new si(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ub extends kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Nb extends _r{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qt(16777215),this.specular=new Qt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=df,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ob extends _r{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kb extends _r{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ef extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Sa=new Ae,Md=new V,Sd=new V;class Bb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pc,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Md.setFromMatrixPosition(t.matrixWorld),e.position.copy(Md),Sd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sd),e.updateMatrixWorld(),Sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class mc extends bf{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class zb extends Bb{constructor(){super(new mc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vb extends Ef{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new zb}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Hb extends Ef{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gb extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function yd(n,t,e,i){const s=Wb(i);switch(e){case lf:return n*t;case hf:return n*t/s.components*s.byteLength;case ac:return n*t/s.components*s.byteLength;case Es:return n*t*2/s.components*s.byteLength;case lc:return n*t*2/s.components*s.byteLength;case cf:return n*t*3/s.components*s.byteLength;case yn:return n*t*4/s.components*s.byteLength;case cc:return n*t*4/s.components*s.byteLength;case ro:case oo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ao:case lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case il:case rl:return Math.max(n,16)*Math.max(t,8)/4;case nl:case sl:return Math.max(n,8)*Math.max(t,8)/2;case ol:case al:case cl:case hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ll:case dl:case ul:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ml:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case gl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case _l:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case xl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case vl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case bl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case yl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case El:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Tl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Al:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case wl:case Cl:case Rl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Pl:case Dl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ll:case Il:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wb(n){switch(n){case hn:case sf:return{byteLength:1,components:1};case lr:case rf:case ri:return{byteLength:2,components:1};case rc:case oc:return{byteLength:2,components:4};case Un:case sc:case Rn:return{byteLength:4,components:1};case of:case af:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Xb(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Yb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$b=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_M=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SM="gl_FragColor = linearToOutputTexel( gl_FragColor );",yM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,YM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$M=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_S=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,MS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ES=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,CS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,IS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,US=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ty=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ny=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ry=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ay=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ly=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,py=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,my=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,by=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,My=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ey=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:Yb,alphahash_pars_fragment:$b,alphamap_fragment:qb,alphamap_pars_fragment:jb,alphatest_fragment:Kb,alphatest_pars_fragment:Zb,aomap_fragment:Jb,aomap_pars_fragment:Qb,batching_pars_vertex:tM,batching_vertex:eM,begin_vertex:nM,beginnormal_vertex:iM,bsdfs:sM,iridescence_fragment:rM,bumpmap_pars_fragment:oM,clipping_planes_fragment:aM,clipping_planes_pars_fragment:lM,clipping_planes_pars_vertex:cM,clipping_planes_vertex:hM,color_fragment:dM,color_pars_fragment:uM,color_pars_vertex:fM,color_vertex:pM,common:mM,cube_uv_reflection_fragment:gM,defaultnormal_vertex:_M,displacementmap_pars_vertex:xM,displacementmap_vertex:vM,emissivemap_fragment:bM,emissivemap_pars_fragment:MM,colorspace_fragment:SM,colorspace_pars_fragment:yM,envmap_fragment:EM,envmap_common_pars_fragment:TM,envmap_pars_fragment:AM,envmap_pars_vertex:wM,envmap_physical_pars_fragment:kM,envmap_vertex:CM,fog_vertex:RM,fog_pars_vertex:PM,fog_fragment:DM,fog_pars_fragment:LM,gradientmap_pars_fragment:IM,lightmap_pars_fragment:FM,lights_lambert_fragment:UM,lights_lambert_pars_fragment:NM,lights_pars_begin:OM,lights_toon_fragment:BM,lights_toon_pars_fragment:zM,lights_phong_fragment:VM,lights_phong_pars_fragment:HM,lights_physical_fragment:GM,lights_physical_pars_fragment:WM,lights_fragment_begin:XM,lights_fragment_maps:YM,lights_fragment_end:$M,logdepthbuf_fragment:qM,logdepthbuf_pars_fragment:jM,logdepthbuf_pars_vertex:KM,logdepthbuf_vertex:ZM,map_fragment:JM,map_pars_fragment:QM,map_particle_fragment:tS,map_particle_pars_fragment:eS,metalnessmap_fragment:nS,metalnessmap_pars_fragment:iS,morphinstance_vertex:sS,morphcolor_vertex:rS,morphnormal_vertex:oS,morphtarget_pars_vertex:aS,morphtarget_vertex:lS,normal_fragment_begin:cS,normal_fragment_maps:hS,normal_pars_fragment:dS,normal_pars_vertex:uS,normal_vertex:fS,normalmap_pars_fragment:pS,clearcoat_normal_fragment_begin:mS,clearcoat_normal_fragment_maps:gS,clearcoat_pars_fragment:_S,iridescence_pars_fragment:xS,opaque_fragment:vS,packing:bS,premultiplied_alpha_fragment:MS,project_vertex:SS,dithering_fragment:yS,dithering_pars_fragment:ES,roughnessmap_fragment:TS,roughnessmap_pars_fragment:AS,shadowmap_pars_fragment:wS,shadowmap_pars_vertex:CS,shadowmap_vertex:RS,shadowmask_pars_fragment:PS,skinbase_vertex:DS,skinning_pars_vertex:LS,skinning_vertex:IS,skinnormal_vertex:FS,specularmap_fragment:US,specularmap_pars_fragment:NS,tonemapping_fragment:OS,tonemapping_pars_fragment:kS,transmission_fragment:BS,transmission_pars_fragment:zS,uv_pars_fragment:VS,uv_pars_vertex:HS,uv_vertex:GS,worldpos_vertex:WS,background_vert:XS,background_frag:YS,backgroundCube_vert:$S,backgroundCube_frag:qS,cube_vert:jS,cube_frag:KS,depth_vert:ZS,depth_frag:JS,distance_vert:QS,distance_frag:ty,equirect_vert:ey,equirect_frag:ny,linedashed_vert:iy,linedashed_frag:sy,meshbasic_vert:ry,meshbasic_frag:oy,meshlambert_vert:ay,meshlambert_frag:ly,meshmatcap_vert:cy,meshmatcap_frag:hy,meshnormal_vert:dy,meshnormal_frag:uy,meshphong_vert:fy,meshphong_frag:py,meshphysical_vert:my,meshphysical_frag:gy,meshtoon_vert:_y,meshtoon_frag:xy,points_vert:vy,points_frag:by,shadow_vert:My,shadow_frag:Sy,sprite_vert:yy,sprite_frag:Ey},dt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Cn={basic:{uniforms:Ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ke([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ke([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ke([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ke([dt.points,dt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ke([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ke([dt.common,dt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ke([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ke([dt.sprite,dt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:Ke([dt.common,dt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:Ke([dt.lights,dt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Cn.physical={uniforms:Ke([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const to={r:0,b:0,g:0},ki=new Nn,Ty=new Ae;function Ay(n,t,e,i,s,r,o){const a=new Qt(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?e:t).get(S)),S}function _(M){let S=!1;const E=g(M);E===null?p(a,l):E&&E.isColor&&(p(E,1),S=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,S){const E=g(S);E&&(E.isCubeTexture||E.mapping===Po)?(h===void 0&&(h=new On(new Cs(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:As(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ki.copy(S.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ty.makeRotationFromEuler(ki)),h.material.toneMapped=qt.getTransfer(E.colorSpace)!==le,(d!==E||u!==E.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=E,u=E.version,f=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new On(new Do(2,2),new kn({name:"BackgroundMaterial",uniforms:As(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=qt.getTransfer(E.colorSpace)!==le,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||u!==E.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=E,u=E.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,S){M.getRGB(to,vf(n)),i.buffers.color.setClear(to.r,to.g,to.b,S,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m,dispose:x}}function wy(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(T,R,N,k,X){let W=!1;const B=d(k,N,R);r!==B&&(r=B,c(r.object)),W=f(T,k,N,X),W&&g(T,k,N,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,S(T,R,N,k),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function h(T){return n.deleteVertexArray(T)}function d(T,R,N){const k=N.wireframe===!0;let X=i[T.id];X===void 0&&(X={},i[T.id]=X);let W=X[R.id];W===void 0&&(W={},X[R.id]=W);let B=W[k];return B===void 0&&(B=u(l()),W[k]=B),B}function u(T){const R=[],N=[],k=[];for(let X=0;X<e;X++)R[X]=0,N[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:k,object:T,attributes:{},index:null}}function f(T,R,N,k){const X=r.attributes,W=R.attributes;let B=0;const z=N.getAttributes();for(const j in z)if(z[j].location>=0){const it=X[j];let ut=W[j];if(ut===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(ut=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(ut=T.instanceColor)),it===void 0||it.attribute!==ut||ut&&it.data!==ut.data)return!0;B++}return r.attributesNum!==B||r.index!==k}function g(T,R,N,k){const X={},W=R.attributes;let B=0;const z=N.getAttributes();for(const j in z)if(z[j].location>=0){let it=W[j];it===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(it=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(it=T.instanceColor));const ut={};ut.attribute=it,it&&it.data&&(ut.data=it.data),X[j]=ut,B++}r.attributes=X,r.attributesNum=B,r.index=k}function _(){const T=r.newAttributes;for(let R=0,N=T.length;R<N;R++)T[R]=0}function m(T){p(T,0)}function p(T,R){const N=r.newAttributes,k=r.enabledAttributes,X=r.attributeDivisors;N[T]=1,k[T]===0&&(n.enableVertexAttribArray(T),k[T]=1),X[T]!==R&&(n.vertexAttribDivisor(T,R),X[T]=R)}function x(){const T=r.newAttributes,R=r.enabledAttributes;for(let N=0,k=R.length;N<k;N++)R[N]!==T[N]&&(n.disableVertexAttribArray(N),R[N]=0)}function M(T,R,N,k,X,W,B){B===!0?n.vertexAttribIPointer(T,R,N,X,W):n.vertexAttribPointer(T,R,N,k,X,W)}function S(T,R,N,k){_();const X=k.attributes,W=N.getAttributes(),B=R.defaultAttributeValues;for(const z in W){const j=W[z];if(j.location>=0){let et=X[z];if(et===void 0&&(z==="instanceMatrix"&&T.instanceMatrix&&(et=T.instanceMatrix),z==="instanceColor"&&T.instanceColor&&(et=T.instanceColor)),et!==void 0){const it=et.normalized,ut=et.itemSize,Pt=t.get(et);if(Pt===void 0)continue;const Dt=Pt.buffer,te=Pt.type,ee=Pt.bytesPerElement,$=te===n.INT||te===n.UNSIGNED_INT||et.gpuType===sc;if(et.isInterleavedBufferAttribute){const J=et.data,_t=J.stride,Nt=et.offset;if(J.isInstancedInterleavedBuffer){for(let bt=0;bt<j.locationSize;bt++)p(j.location+bt,J.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let bt=0;bt<j.locationSize;bt++)m(j.location+bt);n.bindBuffer(n.ARRAY_BUFFER,Dt);for(let bt=0;bt<j.locationSize;bt++)M(j.location+bt,ut/j.locationSize,te,it,_t*ee,(Nt+ut/j.locationSize*bt)*ee,$)}else{if(et.isInstancedBufferAttribute){for(let J=0;J<j.locationSize;J++)p(j.location+J,et.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let J=0;J<j.locationSize;J++)m(j.location+J);n.bindBuffer(n.ARRAY_BUFFER,Dt);for(let J=0;J<j.locationSize;J++)M(j.location+J,ut/j.locationSize,te,it,ut*ee,ut/j.locationSize*J*ee,$)}}else if(B!==void 0){const it=B[z];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(j.location,it);break;case 3:n.vertexAttrib3fv(j.location,it);break;case 4:n.vertexAttrib4fv(j.location,it);break;default:n.vertexAttrib1fv(j.location,it)}}}}x()}function E(){P();for(const T in i){const R=i[T];for(const N in R){const k=R[N];for(const X in k)h(k[X].object),delete k[X];delete R[N]}delete i[T]}}function A(T){if(i[T.id]===void 0)return;const R=i[T.id];for(const N in R){const k=R[N];for(const X in k)h(k[X].object),delete k[X];delete R[N]}delete i[T.id]}function w(T){for(const R in i){const N=i[R];if(N[T.id]===void 0)continue;const k=N[T.id];for(const X in k)h(k[X].object),delete k[X];delete N[T.id]}}function P(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function Cy(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,i,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ry(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==yn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===ri&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==hn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Rn&&!P)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ft("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:S,maxSamples:E,samples:A}}function Py(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Hi,a=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:i,M=x*4;let S=p.clippingState||null;l.value=S,S=h(g,u,M,f);for(let E=0;E!==M;++E)S[E]=e[E];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,S=f;M!==_;++M,S+=4)o.copy(d[M]).applyMatrix4(x,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Dy(n){let t=new WeakMap;function e(o,a){return a===Ja?o.mapping=Zi:a===Qa&&(o.mapping=ys),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ja||a===Qa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Sf(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Mi=4,Ed=[.125,.215,.35,.446,.526,.582],Wi=20,Ly=256,Vs=new mc,Td=new Qt;let ya=null,Ea=0,Ta=0,Aa=!1;const Iy=new V;class Ad{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=Iy}=r;ya=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ya,Ea,Ta),this._renderer.xr.enabled=Aa,t.scissorTest=!1,ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ya=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:ri,format:yn,colorSpace:Ts,depthBuffer:!1},s=wd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wd(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Fy(r)),this._blurMaterial=Ny(r,t,e),this._ggxMaterial=Uy(r,t,e)}return s}_compileMaterial(t){const e=new On(new ci,t);this._renderer.compile(e,Vs)}_sceneToCubeUV(t,e,i,s,r){const l=new mn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Td),d.toneMapping=Ln,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new On(new Cs,new gf({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,p=!0):(m.color.copy(Td),p=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const E=this._cubeSize;ms(s,S*E,M>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=x}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Zi||t.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ms(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Vs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-Mi?i-g+Mi:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,ms(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(a,Vs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ms(t,m,p,3*_,2*_),s.setRenderTarget(t),s.render(a,Vs)}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Zt("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[s];d.material=c;const u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Wi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Wi;m>Wi&&Ft(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);const p=[];let x=0;for(let w=0;w<Wi;++w){const P=w/_,b=Math.exp(-P*P/2);p.push(b),w===0?x+=b:w<m&&(x+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-i;const S=this._sizeLods[s],E=3*S*(s>M-Mi?s-M+Mi:0),A=4*(this._cubeSize-S);ms(e,E,A,3*S,2*S),l.setRenderTarget(e),l.render(d,Vs)}}function Fy(n){const t=[],e=[],i=[];let s=n;const r=n-Mi+1+Ed.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Mi?l=Ed[o-n+Mi-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),M=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let A=0;A<f;A++){const w=A%3*2/3-1,P=A>2?0:-1,b=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];x.set(b,_*g*A),M.set(u,m*g*A);const T=[A,A,A,A,A,A];S.set(T,p*g*A)}const E=new ci;E.setAttribute("position",new Fn(x,_)),E.setAttribute("uv",new Fn(M,m)),E.setAttribute("faceIndex",new Fn(S,p)),i.push(new On(E,null)),s>Mi&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function wd(n,t,e){const i=new In(n,t,e);return i.texture.mapping=Po,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ms(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Uy(n,t,e){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ly,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Ny(n,t,e){const i=new Float32Array(Wi),s=new V(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Cd(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Rd(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Lo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Oy(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ja||l===Qa,h=l===Zi||l===ys;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Ad(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ad(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function ky(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&hr("WebGLRenderer: "+i+" extension not supported."),s}}}function By(n,t,e,i){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let M=0,S=x.length;M<S;M+=3){const E=x[M+0],A=x[M+1],w=x[M+2];u.push(E,A,A,w,w,E)}}else if(g!==void 0){const x=g.array;_=g.version;for(let M=0,S=x.length/3-1;M<S;M+=3){const E=M+0,A=M+1,w=M+2;u.push(E,A,A,w,w,E)}}else return;const m=new(uf(u)?xf:_f)(u,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function zy(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),e.update(f,i,1)}function c(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,u*o,g),e.update(f,i,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function d(u,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Vy(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Zt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Hy(n,t,e){const i=new WeakMap,s=new Ee;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let b=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let S=a.attributes.position.count*M,E=1;S>t.maxTextureSize&&(E=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const A=new Float32Array(S*E*4*d),w=new ff(A,S,E,d);w.type=Rn,w.needsUpdate=!0;const P=M*4;for(let T=0;T<d;T++){const R=m[T],N=p[T],k=x[T],X=S*E*4*T;for(let W=0;W<R.count;W++){const B=W*P;f===!0&&(s.fromBufferAttribute(R,W),A[X+B+0]=s.x,A[X+B+1]=s.y,A[X+B+2]=s.z,A[X+B+3]=0),g===!0&&(s.fromBufferAttribute(N,W),A[X+B+4]=s.x,A[X+B+5]=s.y,A[X+B+6]=s.z,A[X+B+7]=0),_===!0&&(s.fromBufferAttribute(k,W),A[X+B+8]=s.x,A[X+B+9]=s.y,A[X+B+10]=s.z,A[X+B+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:w,size:new ne(S,E)},i.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Gy(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Wy={[ju]:"LINEAR_TONE_MAPPING",[Ku]:"REINHARD_TONE_MAPPING",[Zu]:"CINEON_TONE_MAPPING",[Ju]:"ACES_FILMIC_TONE_MAPPING",[tf]:"AGX_TONE_MAPPING",[ef]:"NEUTRAL_TONE_MAPPING",[Qu]:"CUSTOM_TONE_MAPPING"};function Xy(n,t,e,i,s){const r=new In(t,e,{type:n,depthBuffer:i,stencilBuffer:s}),o=new In(t,e,{type:ri,depthBuffer:!1,stencilBuffer:!1}),a=new ci;a.setAttribute("position",new si([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new si([0,2,0,0,2,0],2));const l=new Ub({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new On(a,l),h=new mc(-1,1,1,-1,0,1);let d=null,u=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(x,M){r.setSize(x,M),o.setSize(x,M);for(let S=0;S<m.length;S++){const E=m[S];E.setSize&&E.setSize(x,M)}},this.setEffects=function(x){m=x,p=m.length>0&&m[0].isRenderPass===!0;const M=r.width,S=r.height;for(let E=0;E<m.length;E++){const A=m[E];A.setSize&&A.setSize(M,S)}},this.begin=function(x,M){if(f||x.toneMapping===Ln&&m.length===0)return!1;if(_=M,M!==null){const S=M.width,E=M.height;(r.width!==S||r.height!==E)&&this.setSize(S,E)}return p===!1&&x.setRenderTarget(r),g=x.toneMapping,x.toneMapping=Ln,!0},this.hasRenderPass=function(){return p},this.end=function(x,M){x.toneMapping=g,f=!0;let S=r,E=o;for(let A=0;A<m.length;A++){const w=m[A];if(w.enabled!==!1&&(w.render(x,E,S,M),w.needsSwap!==!1)){const P=S;S=E,E=P}}if(d!==x.outputColorSpace||u!==x.toneMapping){d=x.outputColorSpace,u=x.toneMapping,l.defines={},qt.getTransfer(d)===le&&(l.defines.SRGB_TRANSFER="");const A=Wy[u];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(_),x.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Af=new Ze,Ul=new dr(1,1),wf=new ff,Cf=new hb,Rf=new Mf,Pd=[],Dd=[],Ld=new Float32Array(16),Id=new Float32Array(9),Fd=new Float32Array(4);function Rs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Pd[s];if(r===void 0&&(r=new Float32Array(s),Pd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ue(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ne(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Io(n,t){let e=Dd[t];e===void 0&&(e=new Int32Array(t),Dd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Yy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function $y(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2fv(this.addr,t),Ne(e,t)}}function qy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;n.uniform3fv(this.addr,t),Ne(e,t)}}function jy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4fv(this.addr,t),Ne(e,t)}}function Ky(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;Fd.set(i),n.uniformMatrix2fv(this.addr,!1,Fd),Ne(e,i)}}function Zy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;Id.set(i),n.uniformMatrix3fv(this.addr,!1,Id),Ne(e,i)}}function Jy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;Ld.set(i),n.uniformMatrix4fv(this.addr,!1,Ld),Ne(e,i)}}function Qy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function tE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2iv(this.addr,t),Ne(e,t)}}function eE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3iv(this.addr,t),Ne(e,t)}}function nE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4iv(this.addr,t),Ne(e,t)}}function iE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function sE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2uiv(this.addr,t),Ne(e,t)}}function rE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3uiv(this.addr,t),Ne(e,t)}}function oE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4uiv(this.addr,t),Ne(e,t)}}function aE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ul.compareFunction=e.isReversedDepthBuffer()?dc:hc,r=Ul):r=Af,e.setTexture2D(t||r,s)}function lE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Cf,s)}function cE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Rf,s)}function hE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||wf,s)}function dE(n){switch(n){case 5126:return Yy;case 35664:return $y;case 35665:return qy;case 35666:return jy;case 35674:return Ky;case 35675:return Zy;case 35676:return Jy;case 5124:case 35670:return Qy;case 35667:case 35671:return tE;case 35668:case 35672:return eE;case 35669:case 35673:return nE;case 5125:return iE;case 36294:return sE;case 36295:return rE;case 36296:return oE;case 35678:case 36198:case 36298:case 36306:case 35682:return aE;case 35679:case 36299:case 36307:return lE;case 35680:case 36300:case 36308:case 36293:return cE;case 36289:case 36303:case 36311:case 36292:return hE}}function uE(n,t){n.uniform1fv(this.addr,t)}function fE(n,t){const e=Rs(t,this.size,2);n.uniform2fv(this.addr,e)}function pE(n,t){const e=Rs(t,this.size,3);n.uniform3fv(this.addr,e)}function mE(n,t){const e=Rs(t,this.size,4);n.uniform4fv(this.addr,e)}function gE(n,t){const e=Rs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function _E(n,t){const e=Rs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function xE(n,t){const e=Rs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function vE(n,t){n.uniform1iv(this.addr,t)}function bE(n,t){n.uniform2iv(this.addr,t)}function ME(n,t){n.uniform3iv(this.addr,t)}function SE(n,t){n.uniform4iv(this.addr,t)}function yE(n,t){n.uniform1uiv(this.addr,t)}function EE(n,t){n.uniform2uiv(this.addr,t)}function TE(n,t){n.uniform3uiv(this.addr,t)}function AE(n,t){n.uniform4uiv(this.addr,t)}function wE(n,t,e){const i=this.cache,s=t.length,r=Io(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ul:o=Af;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function CE(n,t,e){const i=this.cache,s=t.length,r=Io(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Cf,r[o])}function RE(n,t,e){const i=this.cache,s=t.length,r=Io(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Rf,r[o])}function PE(n,t,e){const i=this.cache,s=t.length,r=Io(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||wf,r[o])}function DE(n){switch(n){case 5126:return uE;case 35664:return fE;case 35665:return pE;case 35666:return mE;case 35674:return gE;case 35675:return _E;case 35676:return xE;case 5124:case 35670:return vE;case 35667:case 35671:return bE;case 35668:case 35672:return ME;case 35669:case 35673:return SE;case 5125:return yE;case 36294:return EE;case 36295:return TE;case 36296:return AE;case 35678:case 36198:case 36298:case 36306:case 35682:return wE;case 35679:case 36299:case 36307:return CE;case 35680:case 36300:case 36308:case 36293:return RE;case 36289:case 36303:case 36311:case 36292:return PE}}class LE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=dE(e.type)}}class IE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=DE(e.type)}}class FE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function Ud(n,t){n.seq.push(t),n.map[t.id]=t}function UE(n,t,e){const i=n.name,s=i.length;for(wa.lastIndex=0;;){const r=wa.exec(i),o=wa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ud(e,c===void 0?new LE(a,n,t):new IE(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new FE(a),Ud(e,d)),e=d}}}class co{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);UE(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Nd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const NE=37297;let OE=0;function kE(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Od=new Ot;function BE(n){qt._getMatrix(Od,qt.workingColorSpace,n);const t=`mat3( ${Od.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(n)){case vo:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function kd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+kE(n.getShaderSource(t),a)}else return r}function zE(n,t){const e=BE(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const VE={[ju]:"Linear",[Ku]:"Reinhard",[Zu]:"Cineon",[Ju]:"ACESFilmic",[tf]:"AgX",[ef]:"Neutral",[Qu]:"Custom"};function HE(n,t){const e=VE[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const eo=new V;function GE(){qt.getLuminanceCoefficients(eo);const n=eo.x.toFixed(4),t=eo.y.toFixed(4),e=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function XE(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function YE(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function qs(n){return n!==""}function Bd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $E=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(n){return n.replace($E,jE)}const qE=new Map;function jE(n,t){let e=kt[t];if(e===void 0){const i=qE.get(t);if(i!==void 0)e=kt[i],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Nl(e)}const KE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vd(n){return n.replace(KE,ZE)}function ZE(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const JE={[so]:"SHADOWMAP_TYPE_PCF",[$s]:"SHADOWMAP_TYPE_VSM"};function QE(n){return JE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tT={[Zi]:"ENVMAP_TYPE_CUBE",[ys]:"ENVMAP_TYPE_CUBE",[Po]:"ENVMAP_TYPE_CUBE_UV"};function eT(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":tT[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const nT={[ys]:"ENVMAP_MODE_REFRACTION"};function iT(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":nT[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sT={[ic]:"ENVMAP_BLENDING_MULTIPLY",[Xv]:"ENVMAP_BLENDING_MIX",[Yv]:"ENVMAP_BLENDING_ADD"};function rT(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":sT[n.combine]||"ENVMAP_BLENDING_NONE"}function oT(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function aT(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=QE(e),c=eT(e),h=iT(e),d=rT(e),u=oT(e),f=WE(e),g=XE(r),_=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qs).join(`
`),p.length>0&&(p+=`
`)):(m=[Hd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),p=[Hd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?kt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?HE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,zE("linearToOutputTexel",e.outputColorSpace),GE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qs).join(`
`)),o=Nl(o),o=Bd(o,e),o=zd(o,e),a=Nl(a),a=Bd(a,e),a=zd(a,e),o=Vd(o),a=Vd(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===nd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+o,S=x+p+a,E=Nd(s,s.VERTEX_SHADER,M),A=Nd(s,s.FRAGMENT_SHADER,S);s.attachShader(_,E),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(R){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(E)||"",X=s.getShaderInfoLog(A)||"",W=N.trim(),B=k.trim(),z=X.trim();let j=!0,et=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,E,A);else{const it=kd(s,E,"vertex"),ut=kd(s,A,"fragment");Zt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+W+`
`+it+`
`+ut)}else W!==""?Ft("WebGLProgram: Program Info Log:",W):(B===""||z==="")&&(et=!1);et&&(R.diagnostics={runnable:j,programLog:W,vertexShader:{log:B,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(E),s.deleteShader(A),P=new co(s,_),b=YE(s,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(_,NE)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=OE++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let lT=0;class cT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new hT(t),e.set(t,i)),i}}class hT{constructor(t){this.id=lT++,this.code=t,this.usedTimes=0}}function dT(n,t,e,i,s,r,o){const a=new pf,l=new cT,c=new Set,h=[],d=new Map,u=s.logarithmicDepthBuffer;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,T,R,N,k){const X=N.fog,W=k.geometry,B=b.isMeshStandardMaterial?N.environment:null,z=(b.isMeshStandardMaterial?e:t).get(b.envMap||B),j=z&&z.mapping===Po?z.image.height:null,et=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&Ft("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const it=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ut=it!==void 0?it.length:0;let Pt=0;W.morphAttributes.position!==void 0&&(Pt=1),W.morphAttributes.normal!==void 0&&(Pt=2),W.morphAttributes.color!==void 0&&(Pt=3);let Dt,te,ee,$;if(et){const oe=Cn[et];Dt=oe.vertexShader,te=oe.fragmentShader}else Dt=b.vertexShader,te=b.fragmentShader,l.update(b),ee=l.getVertexShaderID(b),$=l.getFragmentShaderID(b);const J=n.getRenderTarget(),_t=n.state.buffers.depth.getReversed(),Nt=k.isInstancedMesh===!0,bt=k.isBatchedMesh===!0,jt=!!b.map,Oe=!!b.matcap,$t=!!z,re=!!b.aoMap,ue=!!b.lightMap,Bt=!!b.bumpMap,Pe=!!b.normalMap,L=!!b.displacementMap,De=!!b.emissiveMap,ie=!!b.metalnessMap,pe=!!b.roughnessMap,St=b.anisotropy>0,C=b.clearcoat>0,v=b.dispersion>0,F=b.iridescence>0,q=b.sheen>0,Z=b.transmission>0,Y=St&&!!b.anisotropyMap,Et=C&&!!b.clearcoatMap,ot=C&&!!b.clearcoatNormalMap,Mt=C&&!!b.clearcoatRoughnessMap,Rt=F&&!!b.iridescenceMap,tt=F&&!!b.iridescenceThicknessMap,lt=q&&!!b.sheenColorMap,vt=q&&!!b.sheenRoughnessMap,yt=!!b.specularMap,at=!!b.specularColorMap,zt=!!b.specularIntensityMap,I=Z&&!!b.transmissionMap,pt=Z&&!!b.thicknessMap,nt=!!b.gradientMap,mt=!!b.alphaMap,Q=b.alphaTest>0,K=!!b.alphaHash,st=!!b.extensions;let It=Ln;b.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(It=n.toneMapping);const me={shaderID:et,shaderType:b.type,shaderName:b.name,vertexShader:Dt,fragmentShader:te,defines:b.defines,customVertexShaderID:ee,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:bt,batchingColor:bt&&k._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&k.instanceColor!==null,instancingMorph:Nt&&k.morphTexture!==null,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ts,alphaToCoverage:!!b.alphaToCoverage,map:jt,matcap:Oe,envMap:$t,envMapMode:$t&&z.mapping,envMapCubeUVHeight:j,aoMap:re,lightMap:ue,bumpMap:Bt,normalMap:Pe,displacementMap:L,emissiveMap:De,normalMapObjectSpace:Pe&&b.normalMapType===jv,normalMapTangentSpace:Pe&&b.normalMapType===df,metalnessMap:ie,roughnessMap:pe,anisotropy:St,anisotropyMap:Y,clearcoat:C,clearcoatMap:Et,clearcoatNormalMap:ot,clearcoatRoughnessMap:Mt,dispersion:v,iridescence:F,iridescenceMap:Rt,iridescenceThicknessMap:tt,sheen:q,sheenColorMap:lt,sheenRoughnessMap:vt,specularMap:yt,specularColorMap:at,specularIntensityMap:zt,transmission:Z,transmissionMap:I,thicknessMap:pt,gradientMap:nt,opaque:b.transparent===!1&&b.blending===_s&&b.alphaToCoverage===!1,alphaMap:mt,alphaTest:Q,alphaHash:K,combine:b.combine,mapUv:jt&&_(b.map.channel),aoMapUv:re&&_(b.aoMap.channel),lightMapUv:ue&&_(b.lightMap.channel),bumpMapUv:Bt&&_(b.bumpMap.channel),normalMapUv:Pe&&_(b.normalMap.channel),displacementMapUv:L&&_(b.displacementMap.channel),emissiveMapUv:De&&_(b.emissiveMap.channel),metalnessMapUv:ie&&_(b.metalnessMap.channel),roughnessMapUv:pe&&_(b.roughnessMap.channel),anisotropyMapUv:Y&&_(b.anisotropyMap.channel),clearcoatMapUv:Et&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ot&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(b.sheenRoughnessMap.channel),specularMapUv:yt&&_(b.specularMap.channel),specularColorMapUv:at&&_(b.specularColorMap.channel),specularIntensityMapUv:zt&&_(b.specularIntensityMap.channel),transmissionMapUv:I&&_(b.transmissionMap.channel),thicknessMapUv:pt&&_(b.thicknessMap.channel),alphaMapUv:mt&&_(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Pe||St),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(jt||mt),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_t,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Pt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:It,decodeVideoTexture:jt&&b.map.isVideoTexture===!0&&qt.getTransfer(b.map.colorSpace)===le,decodeVideoTextureEmissive:De&&b.emissiveMap.isVideoTexture===!0&&qt.getTransfer(b.emissiveMap.colorSpace)===le,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Zn,flipSided:b.side===sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:st&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&b.extensions.multiDraw===!0||bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function p(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)T.push(R),T.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(x(T,b),M(T,b),T.push(n.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function x(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function M(b,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),b.push(a.mask)}function S(b){const T=g[b.type];let R;if(T){const N=Cn[T];R=Eb.clone(N.uniforms)}else R=b.uniforms;return R}function E(b,T){let R=d.get(T);return R!==void 0?++R.usedTimes:(R=new aT(n,T,b,r),h.push(R),d.set(T,R)),R}function A(b){if(--b.usedTimes===0){const T=h.indexOf(b);h[T]=h[h.length-1],h.pop(),d.delete(b.cacheKey),b.destroy()}}function w(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:E,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:P}}function uT(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function fT(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Gd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Wd(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,u,f,g,_,m){let p=n[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function a(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||fT),i.length>1&&i.sort(u||Gd),s.length>1&&s.sort(u||Gd)}function h(){for(let d=t,u=n.length;d<u;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function pT(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Wd,n.set(i,[o])):s>=r.length?(o=new Wd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function mT(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Qt};break;case"SpotLight":e={position:new V,direction:new V,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function gT(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let _T=0;function xT(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function vT(n){const t=new mT,e=gT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const s=new V,r=new Ae,o=new Ae;function a(c){let h=0,d=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,M=0,S=0,E=0,A=0,w=0;c.sort(xT);for(let b=0,T=c.length;b<T;b++){const R=c[b],N=R.color,k=R.intensity,X=R.distance;let W=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Es?W=R.shadow.map.texture:W=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=N.r*k,d+=N.g*k,u+=N.b*k;else if(R.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(R.sh.coefficients[B],k);w++}else if(R.isDirectionalLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const z=R.shadow,j=e.get(R);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,i.directionalShadow[f]=j,i.directionalShadowMap[f]=W,i.directionalShadowMatrix[f]=R.shadow.matrix,x++}i.directional[f]=B,f++}else if(R.isSpotLight){const B=t.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(N).multiplyScalar(k),B.distance=X,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,i.spot[_]=B;const z=R.shadow;if(R.map&&(i.spotLightMap[E]=R.map,E++,z.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[_]=z.matrix,R.castShadow){const j=e.get(R);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,i.spotShadow[_]=j,i.spotShadowMap[_]=W,S++}_++}else if(R.isRectAreaLight){const B=t.get(R);B.color.copy(N).multiplyScalar(k),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=B,m++}else if(R.isPointLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){const z=R.shadow,j=e.get(R);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,j.shadowCameraNear=z.camera.near,j.shadowCameraFar=z.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=R.shadow.matrix,M++}i.point[g]=B,g++}else if(R.isHemisphereLight){const B=t.get(R);B.skyColor.copy(R.color).multiplyScalar(k),B.groundColor.copy(R.groundColor).multiplyScalar(k),i.hemi[p]=B,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==M||P.numSpotShadows!==S||P.numSpotMaps!==E||P.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=M,P.numSpotShadows=S,P.numSpotMaps=E,P.numLightProbes=w,i.version=_T++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const M=c[p];if(M.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(M.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Xd(n){const t=new vT(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function bT(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Xd(n),t.set(s,[a])):r>=o.length?(a=new Xd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const MT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ST=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yT=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],ET=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Yd=new Ae,Hs=new V,Ca=new V;function TT(n,t,e){let i=new pc;const s=new ne,r=new ne,o=new Ee,a=new Ob,l=new kb,c={},h=e.maxTextureSize,d={[Ti]:sn,[sn]:Ti,[Zn]:Zn},u=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:MT,fragmentShader:ST}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new ci;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new On(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=so;let p=this.type;this.render=function(A,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===Av&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=so);const b=n.getRenderTarget(),T=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),N=n.state;N.setBlending(ni),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=p!==this.type;k&&w.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(W=>W.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,W=A.length;X<W;X++){const B=A[X],z=B.shadow;if(z===void 0){Ft("WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const j=z.getFrameExtents();if(s.multiply(j),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,z.mapSize.y=r.y)),z.map===null||k===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===$s){if(B.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new In(s.x,s.y,{format:Es,type:ri,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),z.map.texture.name=B.name+".shadowMap",z.map.depthTexture=new dr(s.x,s.y,Rn),z.map.depthTexture.name=B.name+".shadowMapDepth",z.map.depthTexture.format=oi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=ze,z.map.depthTexture.magFilter=ze}else{B.isPointLight?(z.map=new Sf(s.x),z.map.depthTexture=new Fb(s.x,Un)):(z.map=new In(s.x,s.y),z.map.depthTexture=new dr(s.x,s.y,Un)),z.map.depthTexture.name=B.name+".shadowMap",z.map.depthTexture.format=oi;const it=n.state.buffers.depth.getReversed();this.type===so?(z.map.depthTexture.compareFunction=it?dc:hc,z.map.depthTexture.minFilter=Ye,z.map.depthTexture.magFilter=Ye):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=ze,z.map.depthTexture.magFilter=ze)}z.camera.updateProjectionMatrix()}const et=z.map.isWebGLCubeRenderTarget?6:1;for(let it=0;it<et;it++){if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,it),n.clear();else{it===0&&(n.setRenderTarget(z.map),n.clear());const ut=z.getViewport(it);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),N.viewport(o)}if(B.isPointLight){const ut=z.camera,Pt=z.matrix,Dt=B.distance||ut.far;Dt!==ut.far&&(ut.far=Dt,ut.updateProjectionMatrix()),Hs.setFromMatrixPosition(B.matrixWorld),ut.position.copy(Hs),Ca.copy(ut.position),Ca.add(yT[it]),ut.up.copy(ET[it]),ut.lookAt(Ca),ut.updateMatrixWorld(),Pt.makeTranslation(-Hs.x,-Hs.y,-Hs.z),Yd.multiplyMatrices(ut.projectionMatrix,ut.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Yd,ut.coordinateSystem,ut.reversedDepth)}else z.updateMatrices(B);i=z.getFrustum(),S(w,P,z.camera,B,this.type)}z.isPointLightShadow!==!0&&this.type===$s&&x(z,P),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,T,R)};function x(A,w){const P=t.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new In(s.x,s.y,{format:Es,type:ri})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,P,u,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,P,f,_,null)}function M(A,w,P,b){let T=null;const R=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)T=R;else if(T=P.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const N=T.uuid,k=w.uuid;let X=c[N];X===void 0&&(X={},c[N]=X);let W=X[k];W===void 0&&(W=T.clone(),X[k]=W,w.addEventListener("dispose",E)),T=W}if(T.visible=w.visible,T.wireframe=w.wireframe,b===$s?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:d[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,P.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const N=n.properties.get(T);N.light=P}return T}function S(A,w,P,b,T){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===$s)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const k=t.update(A),X=A.material;if(Array.isArray(X)){const W=k.groups;for(let B=0,z=W.length;B<z;B++){const j=W[B],et=X[j.materialIndex];if(et&&et.visible){const it=M(A,et,b,T);A.onBeforeShadow(n,A,w,P,k,it,j),n.renderBufferDirect(P,null,k,it,A,j),A.onAfterShadow(n,A,w,P,k,it,j)}}}else if(X.visible){const W=M(A,X,b,T);A.onBeforeShadow(n,A,w,P,k,W,null),n.renderBufferDirect(P,null,k,W,A,null),A.onAfterShadow(n,A,w,P,k,W,null)}}const N=A.children;for(let k=0,X=N.length;k<X;k++)S(N[k],w,P,b,T)}function E(A){A.target.removeEventListener("dispose",E);for(const P in c){const b=c[P],T=A.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}const AT={[Xa]:Ya,[$a]:Ka,[qa]:Za,[Ss]:ja,[Ya]:Xa,[Ka]:$a,[Za]:qa,[ja]:Ss};function wT(n,t){function e(){let I=!1;const pt=new Ee;let nt=null;const mt=new Ee(0,0,0,0);return{setMask:function(Q){nt!==Q&&!I&&(n.colorMask(Q,Q,Q,Q),nt=Q)},setLocked:function(Q){I=Q},setClear:function(Q,K,st,It,me){me===!0&&(Q*=It,K*=It,st*=It),pt.set(Q,K,st,It),mt.equals(pt)===!1&&(n.clearColor(Q,K,st,It),mt.copy(pt))},reset:function(){I=!1,nt=null,mt.set(-1,0,0,0)}}}function i(){let I=!1,pt=!1,nt=null,mt=null,Q=null;return{setReversed:function(K){if(pt!==K){const st=t.get("EXT_clip_control");K?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),pt=K;const It=Q;Q=null,this.setClear(It)}},getReversed:function(){return pt},setTest:function(K){K?J(n.DEPTH_TEST):_t(n.DEPTH_TEST)},setMask:function(K){nt!==K&&!I&&(n.depthMask(K),nt=K)},setFunc:function(K){if(pt&&(K=AT[K]),mt!==K){switch(K){case Xa:n.depthFunc(n.NEVER);break;case Ya:n.depthFunc(n.ALWAYS);break;case $a:n.depthFunc(n.LESS);break;case Ss:n.depthFunc(n.LEQUAL);break;case qa:n.depthFunc(n.EQUAL);break;case ja:n.depthFunc(n.GEQUAL);break;case Ka:n.depthFunc(n.GREATER);break;case Za:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}mt=K}},setLocked:function(K){I=K},setClear:function(K){Q!==K&&(pt&&(K=1-K),n.clearDepth(K),Q=K)},reset:function(){I=!1,nt=null,mt=null,Q=null,pt=!1}}}function s(){let I=!1,pt=null,nt=null,mt=null,Q=null,K=null,st=null,It=null,me=null;return{setTest:function(oe){I||(oe?J(n.STENCIL_TEST):_t(n.STENCIL_TEST))},setMask:function(oe){pt!==oe&&!I&&(n.stencilMask(oe),pt=oe)},setFunc:function(oe,En,Bn){(nt!==oe||mt!==En||Q!==Bn)&&(n.stencilFunc(oe,En,Bn),nt=oe,mt=En,Q=Bn)},setOp:function(oe,En,Bn){(K!==oe||st!==En||It!==Bn)&&(n.stencilOp(oe,En,Bn),K=oe,st=En,It=Bn)},setLocked:function(oe){I=oe},setClear:function(oe){me!==oe&&(n.clearStencil(oe),me=oe)},reset:function(){I=!1,pt=null,nt=null,mt=null,Q=null,K=null,st=null,It=null,me=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,M=null,S=null,E=null,A=null,w=new Qt(0,0,0),P=0,b=!1,T=null,R=null,N=null,k=null,X=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,z=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(j)[1]),B=z>=1):j.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),B=z>=2);let et=null,it={};const ut=n.getParameter(n.SCISSOR_BOX),Pt=n.getParameter(n.VIEWPORT),Dt=new Ee().fromArray(ut),te=new Ee().fromArray(Pt);function ee(I,pt,nt,mt){const Q=new Uint8Array(4),K=n.createTexture();n.bindTexture(I,K),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<nt;st++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(pt,0,n.RGBA,1,1,mt,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(pt+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return K}const $={};$[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(n.DEPTH_TEST),o.setFunc(Ss),Bt(!1),Pe(Kh),J(n.CULL_FACE),re(ni);function J(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function _t(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Nt(I,pt){return d[I]!==pt?(n.bindFramebuffer(I,pt),d[I]=pt,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=pt),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=pt),!0):!1}function bt(I,pt){let nt=f,mt=!1;if(I){nt=u.get(pt),nt===void 0&&(nt=[],u.set(pt,nt));const Q=I.textures;if(nt.length!==Q.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let K=0,st=Q.length;K<st;K++)nt[K]=n.COLOR_ATTACHMENT0+K;nt.length=Q.length,mt=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,mt=!0);mt&&n.drawBuffers(nt)}function jt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const Oe={[Gi]:n.FUNC_ADD,[Cv]:n.FUNC_SUBTRACT,[Rv]:n.FUNC_REVERSE_SUBTRACT};Oe[Pv]=n.MIN,Oe[Dv]=n.MAX;const $t={[Lv]:n.ZERO,[Iv]:n.ONE,[Fv]:n.SRC_COLOR,[Ga]:n.SRC_ALPHA,[zv]:n.SRC_ALPHA_SATURATE,[kv]:n.DST_COLOR,[Nv]:n.DST_ALPHA,[Uv]:n.ONE_MINUS_SRC_COLOR,[Wa]:n.ONE_MINUS_SRC_ALPHA,[Bv]:n.ONE_MINUS_DST_COLOR,[Ov]:n.ONE_MINUS_DST_ALPHA,[Vv]:n.CONSTANT_COLOR,[Hv]:n.ONE_MINUS_CONSTANT_COLOR,[Gv]:n.CONSTANT_ALPHA,[Wv]:n.ONE_MINUS_CONSTANT_ALPHA};function re(I,pt,nt,mt,Q,K,st,It,me,oe){if(I===ni){_===!0&&(_t(n.BLEND),_=!1);return}if(_===!1&&(J(n.BLEND),_=!0),I!==wv){if(I!==m||oe!==b){if((p!==Gi||S!==Gi)&&(n.blendEquation(n.FUNC_ADD),p=Gi,S=Gi),oe)switch(I){case _s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zh:n.blendFunc(n.ONE,n.ONE);break;case Jh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Zt("WebGLState: Invalid blending: ",I);break}else switch(I){case _s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jh:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qh:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",I);break}x=null,M=null,E=null,A=null,w.set(0,0,0),P=0,m=I,b=oe}return}Q=Q||pt,K=K||nt,st=st||mt,(pt!==p||Q!==S)&&(n.blendEquationSeparate(Oe[pt],Oe[Q]),p=pt,S=Q),(nt!==x||mt!==M||K!==E||st!==A)&&(n.blendFuncSeparate($t[nt],$t[mt],$t[K],$t[st]),x=nt,M=mt,E=K,A=st),(It.equals(w)===!1||me!==P)&&(n.blendColor(It.r,It.g,It.b,me),w.copy(It),P=me),m=I,b=!1}function ue(I,pt){I.side===Zn?_t(n.CULL_FACE):J(n.CULL_FACE);let nt=I.side===sn;pt&&(nt=!nt),Bt(nt),I.blending===_s&&I.transparent===!1?re(ni):re(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const mt=I.stencilWrite;a.setTest(mt),mt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),De(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):_t(n.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(I){T!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),T=I)}function Pe(I){I!==Ev?(J(n.CULL_FACE),I!==R&&(I===Kh?n.cullFace(n.BACK):I===Tv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_t(n.CULL_FACE),R=I}function L(I){I!==N&&(B&&n.lineWidth(I),N=I)}function De(I,pt,nt){I?(J(n.POLYGON_OFFSET_FILL),(k!==pt||X!==nt)&&(n.polygonOffset(pt,nt),k=pt,X=nt)):_t(n.POLYGON_OFFSET_FILL)}function ie(I){I?J(n.SCISSOR_TEST):_t(n.SCISSOR_TEST)}function pe(I){I===void 0&&(I=n.TEXTURE0+W-1),et!==I&&(n.activeTexture(I),et=I)}function St(I,pt,nt){nt===void 0&&(et===null?nt=n.TEXTURE0+W-1:nt=et);let mt=it[nt];mt===void 0&&(mt={type:void 0,texture:void 0},it[nt]=mt),(mt.type!==I||mt.texture!==pt)&&(et!==nt&&(n.activeTexture(nt),et=nt),n.bindTexture(I,pt||$[I]),mt.type=I,mt.texture=pt)}function C(){const I=it[et];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(I){Zt("WebGLState:",I)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(I){Zt("WebGLState:",I)}}function q(){try{n.texSubImage2D(...arguments)}catch(I){Zt("WebGLState:",I)}}function Z(){try{n.texSubImage3D(...arguments)}catch(I){Zt("WebGLState:",I)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(I){Zt("WebGLState:",I)}}function Et(){try{n.compressedTexSubImage3D(...arguments)}catch(I){Zt("WebGLState:",I)}}function ot(){try{n.texStorage2D(...arguments)}catch(I){Zt("WebGLState:",I)}}function Mt(){try{n.texStorage3D(...arguments)}catch(I){Zt("WebGLState:",I)}}function Rt(){try{n.texImage2D(...arguments)}catch(I){Zt("WebGLState:",I)}}function tt(){try{n.texImage3D(...arguments)}catch(I){Zt("WebGLState:",I)}}function lt(I){Dt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Dt.copy(I))}function vt(I){te.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),te.copy(I))}function yt(I,pt){let nt=c.get(pt);nt===void 0&&(nt=new WeakMap,c.set(pt,nt));let mt=nt.get(I);mt===void 0&&(mt=n.getUniformBlockIndex(pt,I.name),nt.set(I,mt))}function at(I,pt){const mt=c.get(pt).get(I);l.get(pt)!==mt&&(n.uniformBlockBinding(pt,mt,I.__bindingPointIndex),l.set(pt,mt))}function zt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},et=null,it={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,M=null,S=null,E=null,A=null,w=new Qt(0,0,0),P=0,b=!1,T=null,R=null,N=null,k=null,X=null,Dt.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:_t,bindFramebuffer:Nt,drawBuffers:bt,useProgram:jt,setBlending:re,setMaterial:ue,setFlipSided:Bt,setCullFace:Pe,setLineWidth:L,setPolygonOffset:De,setScissorTest:ie,activeTexture:pe,bindTexture:St,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:Rt,texImage3D:tt,updateUBOMapping:yt,uniformBlockBinding:at,texStorage2D:ot,texStorage3D:Mt,texSubImage2D:q,texSubImage3D:Z,compressedTexSubImage2D:Y,compressedTexSubImage3D:Et,scissor:lt,viewport:vt,reset:zt}}function CT(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,v){return f?new OffscreenCanvas(C,v):Mo("canvas")}function _(C,v,F){let q=1;const Z=St(C);if((Z.width>F||Z.height>F)&&(q=F/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(q*Z.width),Et=Math.floor(q*Z.height);d===void 0&&(d=g(Y,Et));const ot=v?g(Y,Et):d;return ot.width=Y,ot.height=Et,ot.getContext("2d").drawImage(C,0,0,Y,Et),Ft("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+Et+")."),ot}else return"data"in C&&Ft("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(C,v,F,q,Z=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=v;if(v===n.RED&&(F===n.FLOAT&&(Y=n.R32F),F===n.HALF_FLOAT&&(Y=n.R16F),F===n.UNSIGNED_BYTE&&(Y=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.R8UI),F===n.UNSIGNED_SHORT&&(Y=n.R16UI),F===n.UNSIGNED_INT&&(Y=n.R32UI),F===n.BYTE&&(Y=n.R8I),F===n.SHORT&&(Y=n.R16I),F===n.INT&&(Y=n.R32I)),v===n.RG&&(F===n.FLOAT&&(Y=n.RG32F),F===n.HALF_FLOAT&&(Y=n.RG16F),F===n.UNSIGNED_BYTE&&(Y=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RG8UI),F===n.UNSIGNED_SHORT&&(Y=n.RG16UI),F===n.UNSIGNED_INT&&(Y=n.RG32UI),F===n.BYTE&&(Y=n.RG8I),F===n.SHORT&&(Y=n.RG16I),F===n.INT&&(Y=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),F===n.UNSIGNED_INT&&(Y=n.RGB32UI),F===n.BYTE&&(Y=n.RGB8I),F===n.SHORT&&(Y=n.RGB16I),F===n.INT&&(Y=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),F===n.UNSIGNED_INT&&(Y=n.RGBA32UI),F===n.BYTE&&(Y=n.RGBA8I),F===n.SHORT&&(Y=n.RGBA16I),F===n.INT&&(Y=n.RGBA32I)),v===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),v===n.RGBA){const Et=Z?vo:qt.getTransfer(q);F===n.FLOAT&&(Y=n.RGBA32F),F===n.HALF_FLOAT&&(Y=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Y=Et===le?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function S(C,v){let F;return C?v===null||v===Un||v===cr?F=n.DEPTH24_STENCIL8:v===Rn?F=n.DEPTH32F_STENCIL8:v===lr&&(F=n.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Un||v===cr?F=n.DEPTH_COMPONENT24:v===Rn?F=n.DEPTH_COMPONENT32F:v===lr&&(F=n.DEPTH_COMPONENT16),F}function E(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==ze&&C.minFilter!==Ye?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function A(C){const v=C.target;v.removeEventListener("dispose",A),P(v),v.isVideoTexture&&h.delete(v)}function w(C){const v=C.target;v.removeEventListener("dispose",w),T(v)}function P(C){const v=i.get(C);if(v.__webglInit===void 0)return;const F=C.source,q=u.get(F);if(q){const Z=q[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(C),Object.keys(q).length===0&&u.delete(F)}i.remove(C)}function b(C){const v=i.get(C);n.deleteTexture(v.__webglTexture);const F=C.source,q=u.get(F);delete q[v.__cacheKey],o.memory.textures--}function T(C){const v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let Z=0;Z<v.__webglFramebuffer[q].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[q][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)n.deleteFramebuffer(v.__webglFramebuffer[q]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=C.textures;for(let q=0,Z=F.length;q<Z;q++){const Y=i.get(F[q]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(F[q])}i.remove(C)}let R=0;function N(){R=0}function k(){const C=R;return C>=s.maxTextures&&Ft("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),R+=1,C}function X(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function W(C,v){const F=i.get(C);if(C.isVideoTexture&&ie(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&F.__version!==C.version){const q=C.image;if(q===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,C,v);return}}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function B(C,v){const F=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){$(F,C,v);return}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function z(C,v){const F=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){$(F,C,v);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function j(C,v){const F=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&F.__version!==C.version){J(F,C,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const et={[tl]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[el]:n.MIRRORED_REPEAT},it={[ze]:n.NEAREST,[$v]:n.NEAREST_MIPMAP_NEAREST,[Ur]:n.NEAREST_MIPMAP_LINEAR,[Ye]:n.LINEAR,[Zo]:n.LINEAR_MIPMAP_NEAREST,[Xi]:n.LINEAR_MIPMAP_LINEAR},ut={[Kv]:n.NEVER,[eb]:n.ALWAYS,[Zv]:n.LESS,[hc]:n.LEQUAL,[Jv]:n.EQUAL,[dc]:n.GEQUAL,[Qv]:n.GREATER,[tb]:n.NOTEQUAL};function Pt(C,v){if(v.type===Rn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ye||v.magFilter===Zo||v.magFilter===Ur||v.magFilter===Xi||v.minFilter===Ye||v.minFilter===Zo||v.minFilter===Ur||v.minFilter===Xi)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,et[v.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,et[v.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,et[v.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,it[v.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,it[v.minFilter]),v.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ut[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ze||v.minFilter!==Ur&&v.minFilter!==Xi||v.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Dt(C,v){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",A));const q=v.source;let Z=u.get(q);Z===void 0&&(Z={},u.set(q,Z));const Y=X(v);if(Y!==C.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[Y].usedTimes++;const Et=Z[C.__cacheKey];Et!==void 0&&(Z[C.__cacheKey].usedTimes--,Et.usedTimes===0&&b(v)),C.__cacheKey=Y,C.__webglTexture=Z[Y].texture}return F}function te(C,v,F){return Math.floor(Math.floor(C/F)/v)}function ee(C,v,F,q){const Y=C.updateRanges;if(Y.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,F,q,v.data);else{Y.sort((tt,lt)=>tt.start-lt.start);let Et=0;for(let tt=1;tt<Y.length;tt++){const lt=Y[Et],vt=Y[tt],yt=lt.start+lt.count,at=te(vt.start,v.width,4),zt=te(lt.start,v.width,4);vt.start<=yt+1&&at===zt&&te(vt.start+vt.count-1,v.width,4)===at?lt.count=Math.max(lt.count,vt.start+vt.count-lt.start):(++Et,Y[Et]=vt)}Y.length=Et+1;const ot=n.getParameter(n.UNPACK_ROW_LENGTH),Mt=n.getParameter(n.UNPACK_SKIP_PIXELS),Rt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let tt=0,lt=Y.length;tt<lt;tt++){const vt=Y[tt],yt=Math.floor(vt.start/4),at=Math.ceil(vt.count/4),zt=yt%v.width,I=Math.floor(yt/v.width),pt=at,nt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,zt),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,zt,I,pt,nt,F,q,v.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ot),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Mt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Rt)}}function $(C,v,F){let q=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=n.TEXTURE_3D);const Z=Dt(C,v),Y=v.source;e.bindTexture(q,C.__webglTexture,n.TEXTURE0+F);const Et=i.get(Y);if(Y.version!==Et.__version||Z===!0){e.activeTexture(n.TEXTURE0+F);const ot=qt.getPrimaries(qt.workingColorSpace),Mt=v.colorSpace===gi?null:qt.getPrimaries(v.colorSpace),Rt=v.colorSpace===gi||ot===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let tt=_(v.image,!1,s.maxTextureSize);tt=pe(v,tt);const lt=r.convert(v.format,v.colorSpace),vt=r.convert(v.type);let yt=M(v.internalFormat,lt,vt,v.colorSpace,v.isVideoTexture);Pt(q,v);let at;const zt=v.mipmaps,I=v.isVideoTexture!==!0,pt=Et.__version===void 0||Z===!0,nt=Y.dataReady,mt=E(v,tt);if(v.isDepthTexture)yt=S(v.format===Yi,v.type),pt&&(I?e.texStorage2D(n.TEXTURE_2D,1,yt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,yt,tt.width,tt.height,0,lt,vt,null));else if(v.isDataTexture)if(zt.length>0){I&&pt&&e.texStorage2D(n.TEXTURE_2D,mt,yt,zt[0].width,zt[0].height);for(let Q=0,K=zt.length;Q<K;Q++)at=zt[Q],I?nt&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,at.width,at.height,lt,vt,at.data):e.texImage2D(n.TEXTURE_2D,Q,yt,at.width,at.height,0,lt,vt,at.data);v.generateMipmaps=!1}else I?(pt&&e.texStorage2D(n.TEXTURE_2D,mt,yt,tt.width,tt.height),nt&&ee(v,tt,lt,vt)):e.texImage2D(n.TEXTURE_2D,0,yt,tt.width,tt.height,0,lt,vt,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&pt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,yt,zt[0].width,zt[0].height,tt.depth);for(let Q=0,K=zt.length;Q<K;Q++)if(at=zt[Q],v.format!==yn)if(lt!==null)if(I){if(nt)if(v.layerUpdates.size>0){const st=yd(at.width,at.height,v.format,v.type);for(const It of v.layerUpdates){const me=at.data.subarray(It*st/at.data.BYTES_PER_ELEMENT,(It+1)*st/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,It,at.width,at.height,1,lt,me)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,at.width,at.height,tt.depth,lt,at.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,yt,at.width,at.height,tt.depth,0,at.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?nt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,at.width,at.height,tt.depth,lt,vt,at.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,yt,at.width,at.height,tt.depth,0,lt,vt,at.data)}else{I&&pt&&e.texStorage2D(n.TEXTURE_2D,mt,yt,zt[0].width,zt[0].height);for(let Q=0,K=zt.length;Q<K;Q++)at=zt[Q],v.format!==yn?lt!==null?I?nt&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,at.width,at.height,lt,at.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,yt,at.width,at.height,0,at.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?nt&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,at.width,at.height,lt,vt,at.data):e.texImage2D(n.TEXTURE_2D,Q,yt,at.width,at.height,0,lt,vt,at.data)}else if(v.isDataArrayTexture)if(I){if(pt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,yt,tt.width,tt.height,tt.depth),nt)if(v.layerUpdates.size>0){const Q=yd(tt.width,tt.height,v.format,v.type);for(const K of v.layerUpdates){const st=tt.data.subarray(K*Q/tt.data.BYTES_PER_ELEMENT,(K+1)*Q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,lt,vt,st)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,lt,vt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,yt,tt.width,tt.height,tt.depth,0,lt,vt,tt.data);else if(v.isData3DTexture)I?(pt&&e.texStorage3D(n.TEXTURE_3D,mt,yt,tt.width,tt.height,tt.depth),nt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,lt,vt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,yt,tt.width,tt.height,tt.depth,0,lt,vt,tt.data);else if(v.isFramebufferTexture){if(pt)if(I)e.texStorage2D(n.TEXTURE_2D,mt,yt,tt.width,tt.height);else{let Q=tt.width,K=tt.height;for(let st=0;st<mt;st++)e.texImage2D(n.TEXTURE_2D,st,yt,Q,K,0,lt,vt,null),Q>>=1,K>>=1}}else if(zt.length>0){if(I&&pt){const Q=St(zt[0]);e.texStorage2D(n.TEXTURE_2D,mt,yt,Q.width,Q.height)}for(let Q=0,K=zt.length;Q<K;Q++)at=zt[Q],I?nt&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,lt,vt,at):e.texImage2D(n.TEXTURE_2D,Q,yt,lt,vt,at);v.generateMipmaps=!1}else if(I){if(pt){const Q=St(tt);e.texStorage2D(n.TEXTURE_2D,mt,yt,Q.width,Q.height)}nt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt,vt,tt)}else e.texImage2D(n.TEXTURE_2D,0,yt,lt,vt,tt);m(v)&&p(q),Et.__version=Y.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function J(C,v,F){if(v.image.length!==6)return;const q=Dt(C,v),Z=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+F);const Y=i.get(Z);if(Z.version!==Y.__version||q===!0){e.activeTexture(n.TEXTURE0+F);const Et=qt.getPrimaries(qt.workingColorSpace),ot=v.colorSpace===gi?null:qt.getPrimaries(v.colorSpace),Mt=v.colorSpace===gi||Et===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Rt=v.isCompressedTexture||v.image[0].isCompressedTexture,tt=v.image[0]&&v.image[0].isDataTexture,lt=[];for(let K=0;K<6;K++)!Rt&&!tt?lt[K]=_(v.image[K],!0,s.maxCubemapSize):lt[K]=tt?v.image[K].image:v.image[K],lt[K]=pe(v,lt[K]);const vt=lt[0],yt=r.convert(v.format,v.colorSpace),at=r.convert(v.type),zt=M(v.internalFormat,yt,at,v.colorSpace),I=v.isVideoTexture!==!0,pt=Y.__version===void 0||q===!0,nt=Z.dataReady;let mt=E(v,vt);Pt(n.TEXTURE_CUBE_MAP,v);let Q;if(Rt){I&&pt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,zt,vt.width,vt.height);for(let K=0;K<6;K++){Q=lt[K].mipmaps;for(let st=0;st<Q.length;st++){const It=Q[st];v.format!==yn?yt!==null?I?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,st,0,0,It.width,It.height,yt,It.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,st,zt,It.width,It.height,0,It.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,st,0,0,It.width,It.height,yt,at,It.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,st,zt,It.width,It.height,0,yt,at,It.data)}}}else{if(Q=v.mipmaps,I&&pt){Q.length>0&&mt++;const K=St(lt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,zt,K.width,K.height)}for(let K=0;K<6;K++)if(tt){I?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,lt[K].width,lt[K].height,yt,at,lt[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,zt,lt[K].width,lt[K].height,0,yt,at,lt[K].data);for(let st=0;st<Q.length;st++){const me=Q[st].image[K].image;I?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,st+1,0,0,me.width,me.height,yt,at,me.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,st+1,zt,me.width,me.height,0,yt,at,me.data)}}else{I?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,yt,at,lt[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,zt,yt,at,lt[K]);for(let st=0;st<Q.length;st++){const It=Q[st];I?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,st+1,0,0,yt,at,It.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,st+1,zt,yt,at,It.image[K])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),Y.__version=Z.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function _t(C,v,F,q,Z,Y){const Et=r.convert(F.format,F.colorSpace),ot=r.convert(F.type),Mt=M(F.internalFormat,Et,ot,F.colorSpace),Rt=i.get(v),tt=i.get(F);if(tt.__renderTarget=v,!Rt.__hasExternalTextures){const lt=Math.max(1,v.width>>Y),vt=Math.max(1,v.height>>Y);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,Mt,lt,vt,v.depth,0,Et,ot,null):e.texImage2D(Z,Y,Mt,lt,vt,0,Et,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),De(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Z,tt.__webglTexture,0,L(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Z,tt.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(C,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,C),v.depthBuffer){const q=v.depthTexture,Z=q&&q.isDepthTexture?q.type:null,Y=S(v.stencilBuffer,Z),Et=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;De(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L(v),Y,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,L(v),Y,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Y,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,C)}else{const q=v.textures;for(let Z=0;Z<q.length;Z++){const Y=q[Z],Et=r.convert(Y.format,Y.colorSpace),ot=r.convert(Y.type),Mt=M(Y.internalFormat,Et,ot,Y.colorSpace);De(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L(v),Mt,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,L(v),Mt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function bt(C,v,F){const q=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Pt(n.TEXTURE_CUBE_MAP,v.depthTexture);const Rt=r.convert(v.depthTexture.format),tt=r.convert(v.depthTexture.type);let lt;v.depthTexture.format===oi?lt=n.DEPTH_COMPONENT24:v.depthTexture.format===Yi&&(lt=n.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,lt,v.width,v.height,0,Rt,tt,null)}}else W(v.depthTexture,0);const Y=Z.__webglTexture,Et=L(v),ot=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Mt=v.depthTexture.format===Yi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===oi)De(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Mt,ot,Y,0,Et):n.framebufferTexture2D(n.FRAMEBUFFER,Mt,ot,Y,0);else if(v.depthTexture.format===Yi)De(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Mt,ot,Y,0,Et):n.framebufferTexture2D(n.FRAMEBUFFER,Mt,ot,Y,0);else throw new Error("Unknown depthTexture format")}function jt(C){const v=i.get(C),F=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=q}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let q=0;q<6;q++)bt(v.__webglFramebuffer[q],C,q);else{const q=C.texture.mipmaps;q&&q.length>0?bt(v.__webglFramebuffer[0],C,0):bt(v.__webglFramebuffer,C,0)}else if(F){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=n.createRenderbuffer(),Nt(v.__webglDepthbuffer[q],C,!1);else{const Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,Y)}}else{const q=C.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Nt(v.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,Y)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(C,v,F){const q=i.get(C);v!==void 0&&_t(q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&jt(C)}function $t(C){const v=C.texture,F=i.get(C),q=i.get(v);C.addEventListener("dispose",w);const Z=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Et=Z.length>1;if(Et||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=v.version,o.memory.textures++),Y){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let Mt=0;Mt<v.mipmaps.length;Mt++)F.__webglFramebuffer[ot][Mt]=n.createFramebuffer()}else F.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<v.mipmaps.length;ot++)F.__webglFramebuffer[ot]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Et)for(let ot=0,Mt=Z.length;ot<Mt;ot++){const Rt=i.get(Z[ot]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&De(C)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<Z.length;ot++){const Mt=Z[ot];F.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);const Rt=r.convert(Mt.format,Mt.colorSpace),tt=r.convert(Mt.type),lt=M(Mt.internalFormat,Rt,tt,Mt.colorSpace,C.isXRRenderTarget===!0),vt=L(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,vt,lt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Nt(F.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Pt(n.TEXTURE_CUBE_MAP,v);for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0)for(let Mt=0;Mt<v.mipmaps.length;Mt++)_t(F.__webglFramebuffer[ot][Mt],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt);else _t(F.__webglFramebuffer[ot],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ot=0,Mt=Z.length;ot<Mt;ot++){const Rt=Z[ot],tt=i.get(Rt);let lt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,tt.__webglTexture),Pt(lt,Rt),_t(F.__webglFramebuffer,C,Rt,n.COLOR_ATTACHMENT0+ot,lt,0),m(Rt)&&p(lt)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ot=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,q.__webglTexture),Pt(ot,v),v.mipmaps&&v.mipmaps.length>0)for(let Mt=0;Mt<v.mipmaps.length;Mt++)_t(F.__webglFramebuffer[Mt],C,v,n.COLOR_ATTACHMENT0,ot,Mt);else _t(F.__webglFramebuffer,C,v,n.COLOR_ATTACHMENT0,ot,0);m(v)&&p(ot),e.unbindTexture()}C.depthBuffer&&jt(C)}function re(C){const v=C.textures;for(let F=0,q=v.length;F<q;F++){const Z=v[F];if(m(Z)){const Y=x(C),Et=i.get(Z).__webglTexture;e.bindTexture(Y,Et),p(Y),e.unbindTexture()}}}const ue=[],Bt=[];function Pe(C){if(C.samples>0){if(De(C)===!1){const v=C.textures,F=C.width,q=C.height;let Z=n.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=i.get(C),ot=v.length>1;if(ot)for(let Rt=0;Rt<v.length;Rt++)e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const Mt=C.texture.mipmaps;Mt&&Mt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Rt=0;Rt<v.length;Rt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Et.__webglColorRenderbuffer[Rt]);const tt=i.get(v[Rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,Z,n.NEAREST),l===!0&&(ue.length=0,Bt.length=0,ue.push(n.COLOR_ATTACHMENT0+Rt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ue.push(Y),Bt.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Bt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let Rt=0;Rt<v.length;Rt++){e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,Et.__webglColorRenderbuffer[Rt]);const tt=i.get(v[Rt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const v=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function L(C){return Math.min(s.maxSamples,C.samples)}function De(C){const v=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ie(C){const v=o.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function pe(C,v){const F=C.colorSpace,q=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==Ts&&F!==gi&&(qt.getTransfer(F)===le?(q!==yn||Z!==hn)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",F)),v}function St(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=B,this.setTexture3D=z,this.setTextureCube=j,this.rebindTextures=Oe,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function RT(n,t){function e(i,s=gi){let r;const o=qt.getTransfer(s);if(i===hn)return n.UNSIGNED_BYTE;if(i===rc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===oc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===of)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===af)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===sf)return n.BYTE;if(i===rf)return n.SHORT;if(i===lr)return n.UNSIGNED_SHORT;if(i===sc)return n.INT;if(i===Un)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===ri)return n.HALF_FLOAT;if(i===lf)return n.ALPHA;if(i===cf)return n.RGB;if(i===yn)return n.RGBA;if(i===oi)return n.DEPTH_COMPONENT;if(i===Yi)return n.DEPTH_STENCIL;if(i===hf)return n.RED;if(i===ac)return n.RED_INTEGER;if(i===Es)return n.RG;if(i===lc)return n.RG_INTEGER;if(i===cc)return n.RGBA_INTEGER;if(i===ro||i===oo||i===ao||i===lo)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nl||i===il||i===sl||i===rl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ol||i===al||i===ll||i===cl||i===hl||i===dl||i===ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ol||i===al)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ll)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===cl)return r.COMPRESSED_R11_EAC;if(i===hl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===dl)return r.COMPRESSED_RG11_EAC;if(i===ul)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fl||i===pl||i===ml||i===gl||i===_l||i===xl||i===vl||i===bl||i===Ml||i===Sl||i===yl||i===El||i===Tl||i===Al)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ml)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_l)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ml)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===El)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Al)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wl||i===Cl||i===Rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===wl)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pl||i===Dl||i===Ll||i===Il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const PT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new yf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new kn({vertexShader:PT,fragmentShader:DT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new On(new Do(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IT extends ws{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new LT,p={},x=e.getContextAttributes();let M=null,S=null;const E=[],A=[],w=new ne;let P=null;const b=new mn;b.viewport=new Ee;const T=new mn;T.viewport=new Ee;const R=[b,T],N=new Gb;let k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=E[$];return J===void 0&&(J=new ba,E[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=E[$];return J===void 0&&(J=new ba,E[$]=J),J.getGripSpace()},this.getHand=function($){let J=E[$];return J===void 0&&(J=new ba,E[$]=J),J.getHandSpace()};function W($){const J=A.indexOf($.inputSource);if(J===-1)return;const _t=E[J];_t!==void 0&&(_t.update($.inputSource,$.frame,c||o),_t.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",z);for(let $=0;$<E.length;$++){const J=A[$];J!==null&&(A[$]=null,E[$].disconnect(J))}k=null,X=null,m.reset();for(const $ in p)delete p[$];t.setRenderTarget(M),f=null,u=null,d=null,s=null,S=null,ee.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",B),s.addEventListener("inputsourceschange",z),x.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Nt=null,bt=null;x.depth&&(bt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=x.stencil?Yi:oi,Nt=x.stencil?cr:Un);const jt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(jt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new In(u.textureWidth,u.textureHeight,{format:yn,type:hn,depthTexture:new dr(u.textureWidth,u.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const _t={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new In(f.framebufferWidth,f.framebufferHeight,{format:yn,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ee.setContext(s),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z($){for(let J=0;J<$.removed.length;J++){const _t=$.removed[J],Nt=A.indexOf(_t);Nt>=0&&(A[Nt]=null,E[Nt].disconnect(_t))}for(let J=0;J<$.added.length;J++){const _t=$.added[J];let Nt=A.indexOf(_t);if(Nt===-1){for(let jt=0;jt<E.length;jt++)if(jt>=A.length){A.push(_t),Nt=jt;break}else if(A[jt]===null){A[jt]=_t,Nt=jt;break}if(Nt===-1)break}const bt=E[Nt];bt&&bt.connect(_t)}}const j=new V,et=new V;function it($,J,_t){j.setFromMatrixPosition(J.matrixWorld),et.setFromMatrixPosition(_t.matrixWorld);const Nt=j.distanceTo(et),bt=J.projectionMatrix.elements,jt=_t.projectionMatrix.elements,Oe=bt[14]/(bt[10]-1),$t=bt[14]/(bt[10]+1),re=(bt[9]+1)/bt[5],ue=(bt[9]-1)/bt[5],Bt=(bt[8]-1)/bt[0],Pe=(jt[8]+1)/jt[0],L=Oe*Bt,De=Oe*Pe,ie=Nt/(-Bt+Pe),pe=ie*-Bt;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(pe),$.translateZ(ie),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),bt[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const St=Oe+ie,C=$t+ie,v=L-pe,F=De+(Nt-pe),q=re*$t/C*St,Z=ue*$t/C*St;$.projectionMatrix.makePerspective(v,F,q,Z,St,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ut($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let J=$.near,_t=$.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),N.near=T.near=b.near=J,N.far=T.far=b.far=_t,(k!==N.near||X!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),k=N.near,X=N.far),N.layers.mask=$.layers.mask|6,b.layers.mask=N.layers.mask&3,T.layers.mask=N.layers.mask&5;const Nt=$.parent,bt=N.cameras;ut(N,Nt);for(let jt=0;jt<bt.length;jt++)ut(bt[jt],Nt);bt.length===2?it(N,b,T):N.projectionMatrix.copy(b.projectionMatrix),Pt($,N,Nt)};function Pt($,J,_t){_t===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(_t.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Fl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function($){return p[$]};let Dt=null;function te($,J){if(h=J.getViewerPose(c||o),g=J,h!==null){const _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Nt=!1;_t.length!==N.cameras.length&&(N.cameras.length=0,Nt=!0);for(let $t=0;$t<_t.length;$t++){const re=_t[$t];let ue=null;if(f!==null)ue=f.getViewport(re);else{const Pe=d.getViewSubImage(u,re);ue=Pe.viewport,$t===0&&(t.setRenderTargetTextures(S,Pe.colorTexture,Pe.depthStencilTexture),t.setRenderTarget(S))}let Bt=R[$t];Bt===void 0&&(Bt=new mn,Bt.layers.enable($t),Bt.viewport=new Ee,R[$t]=Bt),Bt.matrix.fromArray(re.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(re.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(ue.x,ue.y,ue.width,ue.height),$t===0&&(N.matrix.copy(Bt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Nt===!0&&N.cameras.push(Bt)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const $t=d.getDepthInformation(_t[0]);$t&&$t.isValid&&$t.texture&&m.init($t,s.renderState)}if(bt&&bt.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let $t=0;$t<_t.length;$t++){const re=_t[$t].camera;if(re){let ue=p[re];ue||(ue=new yf,p[re]=ue);const Bt=d.getCameraImage(re);ue.sourceTexture=Bt}}}}for(let _t=0;_t<E.length;_t++){const Nt=A[_t],bt=E[_t];Nt!==null&&bt!==void 0&&bt.update(Nt,J,c||o)}Dt&&Dt($,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const ee=new Tf;ee.setAnimationLoop(te),this.setAnimationLoop=function($){Dt=$},this.dispose=function(){}}}const Bi=new Nn,FT=new Ae;function UT(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,vf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),M=x.envMap,S=x.envMapRotation;M&&(m.envMap.value=M,Bi.copy(S),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),m.envMapRotation.value.setFromMatrix4(FT.makeRotationFromEuler(Bi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function NT(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const S=M.program;i.uniformBlockBinding(x,S)}function c(x,M){let S=s[x.id];S===void 0&&(g(x),S=h(x),s[x.id]=S,x.addEventListener("dispose",m));const E=M.program;i.updateUBOMapping(x,E);const A=t.render.frame;r[x.id]!==A&&(u(x),r[x.id]=A)}function h(x){const M=d();x.__bindingPointIndex=M;const S=n.createBuffer(),E=x.__size,A=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,E,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const M=s[x.id],S=x.uniforms,E=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,w=S.length;A<w;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let b=0,T=P.length;b<T;b++){const R=P[b];if(f(R,A,b,E)===!0){const N=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let W=0;W<k.length;W++){const B=k[W],z=_(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,N+X,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,X),X+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,M,S,E){const A=x.value,w=M+"_"+S;if(E[w]===void 0)return typeof A=="number"||typeof A=="boolean"?E[w]=A:E[w]=A.clone(),!0;{const P=E[w];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return E[w]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(x){const M=x.uniforms;let S=0;const E=16;for(let w=0,P=M.length;w<P;w++){const b=Array.isArray(M[w])?M[w]:[M[w]];for(let T=0,R=b.length;T<R;T++){const N=b[T],k=Array.isArray(N.value)?N.value:[N.value];for(let X=0,W=k.length;X<W;X++){const B=k[X],z=_(B),j=S%E,et=j%z.boundary,it=j+et;S+=et,it!==0&&E-it<z.storage&&(S+=E-it),N.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=z.storage}}}const A=S%E;return A>0&&(S+=E-A),x.__size=S,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ft("WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const OT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Tn=null;function kT(){return Tn===null&&(Tn=new Pb(OT,16,16,Es,ri),Tn.name="DFG_LUT",Tn.minFilter=Ye,Tn.magFilter=Ye,Tn.wrapS=ei,Tn.wrapT=ei,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}class BT{constructor(t={}){const{canvas:e=nb(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=hn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=f,m=new Set([cc,lc,ac]),p=new Set([hn,Un,lr,cr,rc,oc]),x=new Uint32Array(4),M=new Int32Array(4);let S=null,E=null;const A=[],w=[];let P=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let T=!1;this._outputColorSpace=pn;let R=0,N=0,k=null,X=-1,W=null;const B=new Ee,z=new Ee;let j=null;const et=new Qt(0);let it=0,ut=e.width,Pt=e.height,Dt=1,te=null,ee=null;const $=new Ee(0,0,ut,Pt),J=new Ee(0,0,ut,Pt);let _t=!1;const Nt=new pc;let bt=!1,jt=!1;const Oe=new Ae,$t=new V,re=new Ee,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function Pe(){return k===null?Dt:1}let L=i;function De(y,U){return e.getContext(y,U)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nc}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",oe,!1),L===null){const U="webgl2";if(L=De(U,y),L===null)throw De(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Zt("WebGLRenderer: "+y.message),y}let ie,pe,St,C,v,F,q,Z,Y,Et,ot,Mt,Rt,tt,lt,vt,yt,at,zt,I,pt,nt,mt,Q;function K(){ie=new ky(L),ie.init(),nt=new RT(L,ie),pe=new Ry(L,ie,t,nt),St=new wT(L,ie),pe.reversedDepthBuffer&&u&&St.buffers.depth.setReversed(!0),C=new Vy(L),v=new uT,F=new CT(L,ie,St,v,pe,nt,C),q=new Dy(b),Z=new Oy(b),Y=new Xb(L),mt=new wy(L,Y),Et=new By(L,Y,C,mt),ot=new Gy(L,Et,Y,C),zt=new Hy(L,pe,F),vt=new Py(v),Mt=new dT(b,q,Z,ie,pe,mt,vt),Rt=new UT(b,v),tt=new pT,lt=new bT(ie),at=new Ay(b,q,Z,St,ot,g,l),yt=new TT(b,ot,pe),Q=new NT(L,C,pe,St),I=new Cy(L,ie,C),pt=new zy(L,ie,C),C.programs=Mt.programs,b.capabilities=pe,b.extensions=ie,b.properties=v,b.renderLists=tt,b.shadowMap=yt,b.state=St,b.info=C}K(),_!==hn&&(P=new Xy(_,e.width,e.height,s,r));const st=new IT(b,L);this.xr=st,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=ie.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ie.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Dt},this.setPixelRatio=function(y){y!==void 0&&(Dt=y,this.setSize(ut,Pt,!1))},this.getSize=function(y){return y.set(ut,Pt)},this.setSize=function(y,U,G=!0){if(st.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=y,Pt=U,e.width=Math.floor(y*Dt),e.height=Math.floor(U*Dt),G===!0&&(e.style.width=y+"px",e.style.height=U+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(ut*Dt,Pt*Dt).floor()},this.setDrawingBufferSize=function(y,U,G){ut=y,Pt=U,Dt=G,e.width=Math.floor(y*G),e.height=Math.floor(U*G),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(_===hn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(B)},this.getViewport=function(y){return y.copy($)},this.setViewport=function(y,U,G,H){y.isVector4?$.set(y.x,y.y,y.z,y.w):$.set(y,U,G,H),St.viewport(B.copy($).multiplyScalar(Dt).round())},this.getScissor=function(y){return y.copy(J)},this.setScissor=function(y,U,G,H){y.isVector4?J.set(y.x,y.y,y.z,y.w):J.set(y,U,G,H),St.scissor(z.copy(J).multiplyScalar(Dt).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(y){St.setScissorTest(_t=y)},this.setOpaqueSort=function(y){te=y},this.setTransparentSort=function(y){ee=y},this.getClearColor=function(y){return y.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,G=!0){let H=0;if(y){let O=!1;if(k!==null){const ct=k.texture.format;O=m.has(ct)}if(O){const ct=k.texture.type,gt=p.has(ct),ft=at.getClearColor(),xt=at.getClearAlpha(),Tt=ft.r,Ct=ft.g,At=ft.b;gt?(x[0]=Tt,x[1]=Ct,x[2]=At,x[3]=xt,L.clearBufferuiv(L.COLOR,0,x)):(M[0]=Tt,M[1]=Ct,M[2]=At,M[3]=xt,L.clearBufferiv(L.COLOR,0,M))}else H|=L.COLOR_BUFFER_BIT}U&&(H|=L.DEPTH_BUFFER_BIT),G&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",oe,!1),at.dispose(),tt.dispose(),lt.dispose(),v.dispose(),q.dispose(),Z.dispose(),ot.dispose(),mt.dispose(),Q.dispose(),Mt.dispose(),st.dispose(),st.removeEventListener("sessionstart",_c),st.removeEventListener("sessionend",xc),Ci.stop()};function It(y){y.preventDefault(),sd("WebGLRenderer: Context Lost."),T=!0}function me(){sd("WebGLRenderer: Context Restored."),T=!1;const y=C.autoReset,U=yt.enabled,G=yt.autoUpdate,H=yt.needsUpdate,O=yt.type;K(),C.autoReset=y,yt.enabled=U,yt.autoUpdate=G,yt.needsUpdate=H,yt.type=O}function oe(y){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function En(y){const U=y.target;U.removeEventListener("dispose",En),Bn(U)}function Bn(y){Pf(y),v.remove(y)}function Pf(y){const U=v.get(y).programs;U!==void 0&&(U.forEach(function(G){Mt.releaseProgram(G)}),y.isShaderMaterial&&Mt.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,G,H,O,ct){U===null&&(U=ue);const gt=O.isMesh&&O.matrixWorld.determinant()<0,ft=Lf(y,U,G,H,O);St.setMaterial(H,gt);let xt=G.index,Tt=1;if(H.wireframe===!0){if(xt=Et.getWireframeAttribute(G),xt===void 0)return;Tt=2}const Ct=G.drawRange,At=G.attributes.position;let Vt=Ct.start*Tt,he=(Ct.start+Ct.count)*Tt;ct!==null&&(Vt=Math.max(Vt,ct.start*Tt),he=Math.min(he,(ct.start+ct.count)*Tt)),xt!==null?(Vt=Math.max(Vt,0),he=Math.min(he,xt.count)):At!=null&&(Vt=Math.max(Vt,0),he=Math.min(he,At.count));const Se=he-Vt;if(Se<0||Se===1/0)return;mt.setup(O,H,ft,G,xt);let ye,fe=I;if(xt!==null&&(ye=Y.get(xt),fe=pt,fe.setIndex(ye)),O.isMesh)H.wireframe===!0?(St.setLineWidth(H.wireframeLinewidth*Pe()),fe.setMode(L.LINES)):fe.setMode(L.TRIANGLES);else if(O.isLine){let wt=H.linewidth;wt===void 0&&(wt=1),St.setLineWidth(wt*Pe()),O.isLineSegments?fe.setMode(L.LINES):O.isLineLoop?fe.setMode(L.LINE_LOOP):fe.setMode(L.LINE_STRIP)}else O.isPoints?fe.setMode(L.POINTS):O.isSprite&&fe.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)hr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))fe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const wt=O._multiDrawStarts,ae=O._multiDrawCounts,Kt=O._multiDrawCount,rn=xt?Y.get(xt).bytesPerElement:1,Qi=v.get(H).currentProgram.getUniforms();for(let on=0;on<Kt;on++)Qi.setValue(L,"_gl_DrawID",on),fe.render(wt[on]/rn,ae[on])}else if(O.isInstancedMesh)fe.renderInstances(Vt,Se,O.count);else if(G.isInstancedBufferGeometry){const wt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ae=Math.min(G.instanceCount,wt);fe.renderInstances(Vt,Se,ae)}else fe.render(Vt,Se)};function gc(y,U,G){y.transparent===!0&&y.side===Zn&&y.forceSinglePass===!1?(y.side=sn,y.needsUpdate=!0,vr(y,U,G),y.side=Ti,y.needsUpdate=!0,vr(y,U,G),y.side=Zn):vr(y,U,G)}this.compile=function(y,U,G=null){G===null&&(G=y),E=lt.get(G),E.init(U),w.push(E),G.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(E.pushLight(O),O.castShadow&&E.pushShadow(O))}),y!==G&&y.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(E.pushLight(O),O.castShadow&&E.pushShadow(O))}),E.setupLights();const H=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ct=O.material;if(ct)if(Array.isArray(ct))for(let gt=0;gt<ct.length;gt++){const ft=ct[gt];gc(ft,G,O),H.add(ft)}else gc(ct,G,O),H.add(ct)}),E=w.pop(),H},this.compileAsync=function(y,U,G=null){const H=this.compile(y,U,G);return new Promise(O=>{function ct(){if(H.forEach(function(gt){v.get(gt).currentProgram.isReady()&&H.delete(gt)}),H.size===0){O(y);return}setTimeout(ct,10)}ie.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Fo=null;function Df(y){Fo&&Fo(y)}function _c(){Ci.stop()}function xc(){Ci.start()}const Ci=new Tf;Ci.setAnimationLoop(Df),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(y){Fo=y,st.setAnimationLoop(y),y===null?Ci.stop():Ci.start()},st.addEventListener("sessionstart",_c),st.addEventListener("sessionend",xc),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const G=st.enabled===!0&&st.isPresenting===!0,H=P!==null&&(k===null||G)&&P.begin(b,k);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(U),U=st.getCamera()),y.isScene===!0&&y.onBeforeRender(b,y,U,k),E=lt.get(y,w.length),E.init(U),w.push(E),Oe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Nt.setFromProjectionMatrix(Oe,Pn,U.reversedDepth),jt=this.localClippingEnabled,bt=vt.init(this.clippingPlanes,jt),S=tt.get(y,A.length),S.init(),A.push(S),st.enabled===!0&&st.isPresenting===!0){const gt=b.xr.getDepthSensingMesh();gt!==null&&Uo(gt,U,-1/0,b.sortObjects)}Uo(y,U,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(te,ee),Bt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Bt&&at.addToRenderList(S,y),this.info.render.frame++,bt===!0&&vt.beginShadows();const O=E.state.shadowsArray;if(yt.render(O,y,U),bt===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&P.hasRenderPass())===!1){const gt=S.opaque,ft=S.transmissive;if(E.setupLights(),U.isArrayCamera){const xt=U.cameras;if(ft.length>0)for(let Tt=0,Ct=xt.length;Tt<Ct;Tt++){const At=xt[Tt];bc(gt,ft,y,At)}Bt&&at.render(y);for(let Tt=0,Ct=xt.length;Tt<Ct;Tt++){const At=xt[Tt];vc(S,y,At,At.viewport)}}else ft.length>0&&bc(gt,ft,y,U),Bt&&at.render(y),vc(S,y,U)}k!==null&&N===0&&(F.updateMultisampleRenderTarget(k),F.updateRenderTargetMipmap(k)),H&&P.end(b),y.isScene===!0&&y.onAfterRender(b,y,U),mt.resetDefaultState(),X=-1,W=null,w.pop(),w.length>0?(E=w[w.length-1],bt===!0&&vt.setGlobalState(b.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?S=A[A.length-1]:S=null};function Uo(y,U,G,H){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Nt.intersectsSprite(y)){H&&re.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Oe);const gt=ot.update(y),ft=y.material;ft.visible&&S.push(y,gt,ft,G,re.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Nt.intersectsObject(y))){const gt=ot.update(y),ft=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),re.copy(y.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),re.copy(gt.boundingSphere.center)),re.applyMatrix4(y.matrixWorld).applyMatrix4(Oe)),Array.isArray(ft)){const xt=gt.groups;for(let Tt=0,Ct=xt.length;Tt<Ct;Tt++){const At=xt[Tt],Vt=ft[At.materialIndex];Vt&&Vt.visible&&S.push(y,gt,Vt,G,re.z,At)}}else ft.visible&&S.push(y,gt,ft,G,re.z,null)}}const ct=y.children;for(let gt=0,ft=ct.length;gt<ft;gt++)Uo(ct[gt],U,G,H)}function vc(y,U,G,H){const{opaque:O,transmissive:ct,transparent:gt}=y;E.setupLightsView(G),bt===!0&&vt.setGlobalState(b.clippingPlanes,G),H&&St.viewport(B.copy(H)),O.length>0&&xr(O,U,G),ct.length>0&&xr(ct,U,G),gt.length>0&&xr(gt,U,G),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function bc(y,U,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){const Vt=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new In(1,1,{generateMipmaps:!0,type:Vt?ri:hn,minFilter:Xi,samples:pe.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace})}const ct=E.state.transmissionRenderTarget[H.id],gt=H.viewport||B;ct.setSize(gt.z*b.transmissionResolutionScale,gt.w*b.transmissionResolutionScale);const ft=b.getRenderTarget(),xt=b.getActiveCubeFace(),Tt=b.getActiveMipmapLevel();b.setRenderTarget(ct),b.getClearColor(et),it=b.getClearAlpha(),it<1&&b.setClearColor(16777215,.5),b.clear(),Bt&&at.render(G);const Ct=b.toneMapping;b.toneMapping=Ln;const At=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),bt===!0&&vt.setGlobalState(b.clippingPlanes,H),xr(y,G,H),F.updateMultisampleRenderTarget(ct),F.updateRenderTargetMipmap(ct),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let he=0,Se=U.length;he<Se;he++){const ye=U[he],{object:fe,geometry:wt,material:ae,group:Kt}=ye;if(ae.side===Zn&&fe.layers.test(H.layers)){const rn=ae.side;ae.side=sn,ae.needsUpdate=!0,Mc(fe,G,H,wt,ae,Kt),ae.side=rn,ae.needsUpdate=!0,Vt=!0}}Vt===!0&&(F.updateMultisampleRenderTarget(ct),F.updateRenderTargetMipmap(ct))}b.setRenderTarget(ft,xt,Tt),b.setClearColor(et,it),At!==void 0&&(H.viewport=At),b.toneMapping=Ct}function xr(y,U,G){const H=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ct=y.length;O<ct;O++){const gt=y[O],{object:ft,geometry:xt,group:Tt}=gt;let Ct=gt.material;Ct.allowOverride===!0&&H!==null&&(Ct=H),ft.layers.test(G.layers)&&Mc(ft,U,G,xt,Ct,Tt)}}function Mc(y,U,G,H,O,ct){y.onBeforeRender(b,U,G,H,O,ct),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(b,U,G,H,y,ct),O.transparent===!0&&O.side===Zn&&O.forceSinglePass===!1?(O.side=sn,O.needsUpdate=!0,b.renderBufferDirect(G,U,H,O,y,ct),O.side=Ti,O.needsUpdate=!0,b.renderBufferDirect(G,U,H,O,y,ct),O.side=Zn):b.renderBufferDirect(G,U,H,O,y,ct),y.onAfterRender(b,U,G,H,O,ct)}function vr(y,U,G){U.isScene!==!0&&(U=ue);const H=v.get(y),O=E.state.lights,ct=E.state.shadowsArray,gt=O.state.version,ft=Mt.getParameters(y,O.state,ct,U,G),xt=Mt.getProgramCacheKey(ft);let Tt=H.programs;H.environment=y.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(y.isMeshStandardMaterial?Z:q).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Tt===void 0&&(y.addEventListener("dispose",En),Tt=new Map,H.programs=Tt);let Ct=Tt.get(xt);if(Ct!==void 0){if(H.currentProgram===Ct&&H.lightsStateVersion===gt)return yc(y,ft),Ct}else ft.uniforms=Mt.getUniforms(y),y.onBeforeCompile(ft,b),Ct=Mt.acquireProgram(ft,xt),Tt.set(xt,Ct),H.uniforms=ft.uniforms;const At=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(At.clippingPlanes=vt.uniform),yc(y,ft),H.needsLights=Ff(y),H.lightsStateVersion=gt,H.needsLights&&(At.ambientLightColor.value=O.state.ambient,At.lightProbe.value=O.state.probe,At.directionalLights.value=O.state.directional,At.directionalLightShadows.value=O.state.directionalShadow,At.spotLights.value=O.state.spot,At.spotLightShadows.value=O.state.spotShadow,At.rectAreaLights.value=O.state.rectArea,At.ltc_1.value=O.state.rectAreaLTC1,At.ltc_2.value=O.state.rectAreaLTC2,At.pointLights.value=O.state.point,At.pointLightShadows.value=O.state.pointShadow,At.hemisphereLights.value=O.state.hemi,At.directionalShadowMap.value=O.state.directionalShadowMap,At.directionalShadowMatrix.value=O.state.directionalShadowMatrix,At.spotShadowMap.value=O.state.spotShadowMap,At.spotLightMatrix.value=O.state.spotLightMatrix,At.spotLightMap.value=O.state.spotLightMap,At.pointShadowMap.value=O.state.pointShadowMap,At.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Ct,H.uniformsList=null,Ct}function Sc(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=co.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function yc(y,U){const G=v.get(y);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Lf(y,U,G,H,O){U.isScene!==!0&&(U=ue),F.resetTextureUnits();const ct=U.fog,gt=H.isMeshStandardMaterial?U.environment:null,ft=k===null?b.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ts,xt=(H.isMeshStandardMaterial?Z:q).get(H.envMap||gt),Tt=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ct=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),At=!!G.morphAttributes.position,Vt=!!G.morphAttributes.normal,he=!!G.morphAttributes.color;let Se=Ln;H.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Se=b.toneMapping);const ye=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,fe=ye!==void 0?ye.length:0,wt=v.get(H),ae=E.state.lights;if(bt===!0&&(jt===!0||y!==W)){const je=y===W&&H.id===X;vt.setState(H,y,je)}let Kt=!1;H.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==ae.state.version||wt.outputColorSpace!==ft||O.isBatchedMesh&&wt.batching===!1||!O.isBatchedMesh&&wt.batching===!0||O.isBatchedMesh&&wt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&wt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&wt.instancing===!1||!O.isInstancedMesh&&wt.instancing===!0||O.isSkinnedMesh&&wt.skinning===!1||!O.isSkinnedMesh&&wt.skinning===!0||O.isInstancedMesh&&wt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&wt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&wt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&wt.instancingMorph===!1&&O.morphTexture!==null||wt.envMap!==xt||H.fog===!0&&wt.fog!==ct||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==vt.numPlanes||wt.numIntersection!==vt.numIntersection)||wt.vertexAlphas!==Tt||wt.vertexTangents!==Ct||wt.morphTargets!==At||wt.morphNormals!==Vt||wt.morphColors!==he||wt.toneMapping!==Se||wt.morphTargetsCount!==fe)&&(Kt=!0):(Kt=!0,wt.__version=H.version);let rn=wt.currentProgram;Kt===!0&&(rn=vr(H,U,O));let Qi=!1,on=!1,Ps=!1;const ge=rn.getUniforms(),Je=wt.uniforms;if(St.useProgram(rn.program)&&(Qi=!0,on=!0,Ps=!0),H.id!==X&&(X=H.id,on=!0),Qi||W!==y){St.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ge.setValue(L,"projectionMatrix",y.projectionMatrix),ge.setValue(L,"viewMatrix",y.matrixWorldInverse);const Qe=ge.map.cameraPosition;Qe!==void 0&&Qe.setValue(L,$t.setFromMatrixPosition(y.matrixWorld)),pe.logarithmicDepthBuffer&&ge.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ge.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),W!==y&&(W=y,on=!0,Ps=!0)}if(wt.needsLights&&(ae.state.directionalShadowMap.length>0&&ge.setValue(L,"directionalShadowMap",ae.state.directionalShadowMap,F),ae.state.spotShadowMap.length>0&&ge.setValue(L,"spotShadowMap",ae.state.spotShadowMap,F),ae.state.pointShadowMap.length>0&&ge.setValue(L,"pointShadowMap",ae.state.pointShadowMap,F)),O.isSkinnedMesh){ge.setOptional(L,O,"bindMatrix"),ge.setOptional(L,O,"bindMatrixInverse");const je=O.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),ge.setValue(L,"boneTexture",je.boneTexture,F))}O.isBatchedMesh&&(ge.setOptional(L,O,"batchingTexture"),ge.setValue(L,"batchingTexture",O._matricesTexture,F),ge.setOptional(L,O,"batchingIdTexture"),ge.setValue(L,"batchingIdTexture",O._indirectTexture,F),ge.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&ge.setValue(L,"batchingColorTexture",O._colorsTexture,F));const dn=G.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&zt.update(O,G,rn),(on||wt.receiveShadow!==O.receiveShadow)&&(wt.receiveShadow=O.receiveShadow,ge.setValue(L,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Je.envMap.value=xt,Je.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Je.envMapIntensity.value=U.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=kT()),on&&(ge.setValue(L,"toneMappingExposure",b.toneMappingExposure),wt.needsLights&&If(Je,Ps),ct&&H.fog===!0&&Rt.refreshFogUniforms(Je,ct),Rt.refreshMaterialUniforms(Je,H,Dt,Pt,E.state.transmissionRenderTarget[y.id]),co.upload(L,Sc(wt),Je,F)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(co.upload(L,Sc(wt),Je,F),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ge.setValue(L,"center",O.center),ge.setValue(L,"modelViewMatrix",O.modelViewMatrix),ge.setValue(L,"normalMatrix",O.normalMatrix),ge.setValue(L,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const je=H.uniformsGroups;for(let Qe=0,No=je.length;Qe<No;Qe++){const Ri=je[Qe];Q.update(Ri,rn),Q.bind(Ri,rn)}}return rn}function If(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Ff(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(y,U,G){const H=v.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),v.get(y.texture).__webglTexture=U,v.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:G,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const G=v.get(y);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0};const Uf=L.createFramebuffer();this.setRenderTarget=function(y,U=0,G=0){k=y,R=U,N=G;let H=null,O=!1,ct=!1;if(y){const ft=v.get(y);if(ft.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(L.FRAMEBUFFER,ft.__webglFramebuffer),B.copy(y.viewport),z.copy(y.scissor),j=y.scissorTest,St.viewport(B),St.scissor(z),St.setScissorTest(j),X=-1;return}else if(ft.__webglFramebuffer===void 0)F.setupRenderTarget(y);else if(ft.__hasExternalTextures)F.rebindTextures(y,v.get(y.texture).__webglTexture,v.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ct=y.depthTexture;if(ft.__boundDepthTexture!==Ct){if(Ct!==null&&v.has(Ct)&&(y.width!==Ct.image.width||y.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(y)}}const xt=y.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(ct=!0);const Tt=v.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Tt[U])?H=Tt[U][G]:H=Tt[U],O=!0):y.samples>0&&F.useMultisampledRTT(y)===!1?H=v.get(y).__webglMultisampledFramebuffer:Array.isArray(Tt)?H=Tt[G]:H=Tt,B.copy(y.viewport),z.copy(y.scissor),j=y.scissorTest}else B.copy($).multiplyScalar(Dt).floor(),z.copy(J).multiplyScalar(Dt).floor(),j=_t;if(G!==0&&(H=Uf),St.bindFramebuffer(L.FRAMEBUFFER,H)&&St.drawBuffers(y,H),St.viewport(B),St.scissor(z),St.setScissorTest(j),O){const ft=v.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ft.__webglTexture,G)}else if(ct){const ft=U;for(let xt=0;xt<y.textures.length;xt++){const Tt=v.get(y.textures[xt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+xt,Tt.__webglTexture,G,ft)}}else if(y!==null&&G!==0){const ft=v.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ft.__webglTexture,G)}X=-1},this.readRenderTargetPixels=function(y,U,G,H,O,ct,gt,ft=0){if(!(y&&y.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=v.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt){St.bindFramebuffer(L.FRAMEBUFFER,xt);try{const Tt=y.textures[ft],Ct=Tt.format,At=Tt.type;if(!pe.textureFormatReadable(Ct)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(At)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-H&&G>=0&&G<=y.height-O&&(y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ft),L.readPixels(U,G,H,O,nt.convert(Ct),nt.convert(At),ct))}finally{const Tt=k!==null?v.get(k).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(y,U,G,H,O,ct,gt,ft=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=v.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt)if(U>=0&&U<=y.width-H&&G>=0&&G<=y.height-O){St.bindFramebuffer(L.FRAMEBUFFER,xt);const Tt=y.textures[ft],Ct=Tt.format,At=Tt.type;if(!pe.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Vt),L.bufferData(L.PIXEL_PACK_BUFFER,ct.byteLength,L.STREAM_READ),y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ft),L.readPixels(U,G,H,O,nt.convert(Ct),nt.convert(At),0);const he=k!==null?v.get(k).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,he);const Se=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ib(L,Se,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Vt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ct),L.deleteBuffer(Vt),L.deleteSync(Se),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,G=0){const H=Math.pow(2,-G),O=Math.floor(y.image.width*H),ct=Math.floor(y.image.height*H),gt=U!==null?U.x:0,ft=U!==null?U.y:0;F.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,gt,ft,O,ct),St.unbindTexture()};const Nf=L.createFramebuffer(),Of=L.createFramebuffer();this.copyTextureToTexture=function(y,U,G=null,H=null,O=0,ct=null){ct===null&&(O!==0?(hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=O,O=0):ct=0);let gt,ft,xt,Tt,Ct,At,Vt,he,Se;const ye=y.isCompressedTexture?y.mipmaps[ct]:y.image;if(G!==null)gt=G.max.x-G.min.x,ft=G.max.y-G.min.y,xt=G.isBox3?G.max.z-G.min.z:1,Tt=G.min.x,Ct=G.min.y,At=G.isBox3?G.min.z:0;else{const dn=Math.pow(2,-O);gt=Math.floor(ye.width*dn),ft=Math.floor(ye.height*dn),y.isDataArrayTexture?xt=ye.depth:y.isData3DTexture?xt=Math.floor(ye.depth*dn):xt=1,Tt=0,Ct=0,At=0}H!==null?(Vt=H.x,he=H.y,Se=H.z):(Vt=0,he=0,Se=0);const fe=nt.convert(U.format),wt=nt.convert(U.type);let ae;U.isData3DTexture?(F.setTexture3D(U,0),ae=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(F.setTexture2DArray(U,0),ae=L.TEXTURE_2D_ARRAY):(F.setTexture2D(U,0),ae=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Kt=L.getParameter(L.UNPACK_ROW_LENGTH),rn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Qi=L.getParameter(L.UNPACK_SKIP_PIXELS),on=L.getParameter(L.UNPACK_SKIP_ROWS),Ps=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ye.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ye.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Tt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ct),L.pixelStorei(L.UNPACK_SKIP_IMAGES,At);const ge=y.isDataArrayTexture||y.isData3DTexture,Je=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const dn=v.get(y),je=v.get(U),Qe=v.get(dn.__renderTarget),No=v.get(je.__renderTarget);St.bindFramebuffer(L.READ_FRAMEBUFFER,Qe.__webglFramebuffer),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,No.__webglFramebuffer);for(let Ri=0;Ri<xt;Ri++)ge&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,v.get(y).__webglTexture,O,At+Ri),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,v.get(U).__webglTexture,ct,Se+Ri)),L.blitFramebuffer(Tt,Ct,gt,ft,Vt,he,gt,ft,L.DEPTH_BUFFER_BIT,L.NEAREST);St.bindFramebuffer(L.READ_FRAMEBUFFER,null),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||v.has(y)){const dn=v.get(y),je=v.get(U);St.bindFramebuffer(L.READ_FRAMEBUFFER,Nf),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,Of);for(let Qe=0;Qe<xt;Qe++)ge?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,dn.__webglTexture,O,At+Qe):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,dn.__webglTexture,O),Je?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,je.__webglTexture,ct,Se+Qe):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,je.__webglTexture,ct),O!==0?L.blitFramebuffer(Tt,Ct,gt,ft,Vt,he,gt,ft,L.COLOR_BUFFER_BIT,L.NEAREST):Je?L.copyTexSubImage3D(ae,ct,Vt,he,Se+Qe,Tt,Ct,gt,ft):L.copyTexSubImage2D(ae,ct,Vt,he,Tt,Ct,gt,ft);St.bindFramebuffer(L.READ_FRAMEBUFFER,null),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Je?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(ae,ct,Vt,he,Se,gt,ft,xt,fe,wt,ye.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(ae,ct,Vt,he,Se,gt,ft,xt,fe,ye.data):L.texSubImage3D(ae,ct,Vt,he,Se,gt,ft,xt,fe,wt,ye):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ct,Vt,he,gt,ft,fe,wt,ye.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ct,Vt,he,ye.width,ye.height,fe,ye.data):L.texSubImage2D(L.TEXTURE_2D,ct,Vt,he,gt,ft,fe,wt,ye);L.pixelStorei(L.UNPACK_ROW_LENGTH,Kt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,rn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qi),L.pixelStorei(L.UNPACK_SKIP_ROWS,on),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ps),ct===0&&U.generateMipmaps&&L.generateMipmap(ae),St.unbindTexture()},this.initRenderTarget=function(y){v.get(y).__webglFramebuffer===void 0&&F.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?F.setTextureCube(y,0):y.isData3DTexture?F.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?F.setTexture2DArray(y,0):F.setTexture2D(y,0),St.unbindTexture()},this.resetState=function(){R=0,N=0,k=null,St.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}const zT={class:"p-4"},VT={class:"font-bold text-slate-900 dark:text-white"},HT={class:"mt-4 flex gap-2"},GT=gn({__name:"ThreeCard",props:{title:{},color:{}},setup(n){const t=n,e=xe(null);let i,s,r,o;return Ol(()=>{if(!e.value)return;i=new Rb,s=new mn(75,e.value.clientWidth/150,.1,1e3),r=new BT({alpha:!0,antialias:!0}),r.setSize(e.value.clientWidth,150),r.setPixelRatio(window.devicePixelRatio),e.value.appendChild(r.domElement);const a=new Cs(1,1,1),l=new Nb({color:t.color||"#6366f1",shininess:100,specular:16777215});o=new On(a,l),i.add(o);const c=new Vb(16777215,1);c.position.set(1,1,2),i.add(c),i.add(new Hb(16777215,.5)),s.position.z=2;const h=()=>{requestAnimationFrame(h),o.rotation.x+=.01,o.rotation.y+=.01,r.render(i,s)};h();const d=()=>{e.value&&(s.aspect=e.value.clientWidth/150,s.updateProjectionMatrix(),r.setSize(e.value.clientWidth,150))};window.addEventListener("resize",d)}),kl(()=>{r?.dispose()}),(a,l)=>(se(),ai(ht(we),{class:"w-full max-w-[300px] overflow-hidden group",padding:"none"},{default:Lt(()=>[D("div",{ref_key:"containerRef",ref:e,class:"h-[150px] w-full bg-slate-950/5 cursor-move"},null,512),D("div",zT,[D("h3",VT,Ht(n.title||"Expérience 3D"),1),l[1]||(l[1]=D("p",{class:"text-xs text-slate-500 mt-1"},"Intégration native Three.js pour des démonstrations de produits interactives.",-1)),D("div",HT,[rt(ht(Ie),{size:"xs",block:""},{default:Lt(()=>[...l[0]||(l[0]=[Wt("Interagir",-1)])]),_:1})])])]),_:1}))}}),WT={class:"space-y-4"},XT={class:"aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center relative overflow-hidden"},YT={class:"absolute top-2 right-2 flex -space-x-2"},$T={class:"space-y-3"},qT={class:"flex items-center justify-between"},jT={class:"text-[10px] bg-indigo-100 text-indigo-600 px-1.5 py-0.5 rounded font-bold"},KT={class:"max-h-32 overflow-y-auto space-y-3 pr-2 custom-scrollbar"},ZT={class:"flex-1"},JT={class:"flex items-center justify-between"},QT={class:"text-xs font-bold text-slate-900 dark:text-white"},t1={class:"text-[10px] text-slate-400"},e1={class:"text-xs text-slate-600 dark:text-slate-400"},n1={class:"w-full flex flex-col gap-3 pt-4"},i1={class:"flex gap-2"},s1=gn({__name:"CollaborativeCard",setup(n){const t=xe([{id:1,user:"Marc L.",text:"Design incroyable, bravo !",date:"il y a 5m"},{id:2,user:"Sophie A.",text:"Est-ce que c'est déjà disponible ?",date:"il y a 2m"}]),e=xe(""),i=()=>{e.value.trim()&&(t.value.unshift({id:Date.now(),user:"Vous",text:e.value,date:"à l'instant"}),e.value="")};return(s,r)=>(se(),ai(ht(we),{title:"Collaboration Design",subtitle:"Version 2.4 - Draft",class:"w-full max-w-[400px]"},{footer:Lt(()=>[D("div",n1,[D("div",i1,[Yn(D("input",{"onUpdate:modelValue":r[0]||(r[0]=o=>e.value=o),type:"text",placeholder:"Ajouter un commentaire...",class:"flex-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-1.5 text-xs outline-none focus:border-indigo-500",onKeyup:zf(i,["enter"])},null,544),[[Ra,e.value]]),rt(ht(Ie),{severity:"primary",size:"xs",icon:"heroicons:paper-airplane",onClick:i})])])]),default:Lt(()=>[D("div",WT,[D("div",XT,[rt(ht(de),{name:"heroicons:presentation-chart-bar",size:"xl",class:"text-indigo-500 opacity-50"}),D("div",YT,[rt(ht(Ks),{src:"https://i.pravatar.cc/150?u=1",size:"xs",rounded:"full",class:"border-2 border-white"}),rt(ht(Ks),{src:"https://i.pravatar.cc/150?u=2",size:"xs",rounded:"full",class:"border-2 border-white"}),r[1]||(r[1]=D("div",{class:"w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[8px] text-white font-bold"}," +3",-1))])]),D("div",$T,[D("div",qT,[r[2]||(r[2]=D("h4",{class:"text-xs font-bold text-slate-500 uppercase tracking-widest"},"Commentaires",-1)),D("span",jT,Ht(t.value.length),1)]),D("div",KT,[rt(Bf,{name:"comment-list"},{default:Lt(()=>[(se(!0),Ce(bn,null,Kn(t.value,o=>(se(),Ce("div",{key:o.id,class:"flex gap-2"},[rt(ht(Ks),{alt:o.user,size:"xs",rounded:"full",class:"shrink-0"},null,8,["alt"]),D("div",ZT,[D("div",JT,[D("span",QT,Ht(o.user),1),D("span",t1,Ht(o.date),1)]),D("p",e1,Ht(o.text),1)])]))),128))]),_:1})])])])]),_:1}))}}),r1=qd(s1,[["__scopeId","data-v-19e3c289"]]),o1={class:"space-y-6"},a1={class:"flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl w-fit"},l1={class:"flex items-center gap-3"},c1={class:"text-sm font-medium text-slate-600 dark:text-slate-400"},h1=gn({__name:"ThemedCard",props:{card:{}},setup(n){const t=xe("summer"),e={summer:{name:"Été",icon:"heroicons:sun",color:"#f59e0b",gradient:"linear-gradient(135deg, #f59e0b, #fb7185)",text:"Chaleur et dynamisme"},winter:{name:"Hiver",icon:"heroicons:no-symbol",color:"#38bdf8",gradient:"linear-gradient(135deg, #0ea5e9, #6366f1)",text:"Pureté et calme"},autumn:{name:"Automne",icon:"heroicons:fire",color:"#b45309",gradient:"linear-gradient(135deg, #b45309, #d97706)",text:"Confort et nostalgie"},spring:{name:"Printemps",icon:"heroicons:sparkles",color:"#10b981",gradient:"linear-gradient(135deg, #10b981, #84cc16)",text:"Renouveau et fraîcheur"}};return(i,s)=>(se(),Ce("div",o1,[D("div",a1,[(se(),Ce(bn,null,Kn(e,(r,o)=>rt(ht(Ie),{key:o,severity:t.value===o?"primary":"secondary",variant:"ghost",size:"sm",onClick:a=>t.value=o},{default:Lt(()=>[Wt(Ht(r.name),1)]),_:2},1032,["severity","onClick"])),64))]),rt(ht(we),{title:n.card.title,subtitle:"Thème dynamique saisonnier",image:n.card.image,style:js({"--primary":e[t.value].color,"--accent":e[t.value].color}),class:"transition-all duration-700"},{footer:Lt(()=>[rt(ht(Ie),{block:"",style:js({background:e[t.value].gradient}),class:"!border-none !text-white !font-bold"},{default:Lt(()=>[...s[0]||(s[0]=[Wt(" Appliquer ce pack ",-1)])]),_:1},8,["style"])]),default:Lt(()=>[D("div",l1,[D("div",{class:"w-8 h-8 rounded-lg flex items-center justify-center text-white transition-all duration-700",style:js({background:e[t.value].gradient})},[rt(ht(de),{name:e[t.value].icon,size:"sm"},null,8,["name"])],4),D("span",c1,Ht(e[t.value].text),1)])]),_:1},8,["title","image","style"])]))}}),d1={class:"space-y-12"},u1={class:"space-y-6"},f1={class:"text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3"},p1={class:"border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm"},m1={class:"p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"},g1={class:"space-y-4"},_1={class:"flex flex-col gap-1.5"},x1={class:"flex flex-col gap-1.5"},v1={class:"space-y-4"},b1={class:"flex flex-col gap-1.5"},M1={class:"flex flex-col gap-1.5"},S1={class:"space-y-4"},y1={class:"flex flex-col gap-1.5"},E1={class:"flex flex-col gap-1.5"},T1=["value"],A1={class:"flex flex-col justify-center gap-4"},w1={class:"flex items-center gap-3 cursor-pointer group"},C1={class:"flex items-center gap-3 cursor-pointer group"},R1={class:"p-12 flex items-center justify-center bg-slate-100 dark:bg-slate-950/50 min-h-[300px]"},P1={class:"w-full max-w-sm"},D1={class:"text-slate-600 dark:text-slate-400"},L1={class:"bg-slate-900 p-6"},I1={class:"flex items-center justify-between mb-4"},F1={class:"text-sm text-indigo-300 overflow-x-auto"},U1={class:"space-y-6 border-t border-slate-200 dark:border-slate-800 pt-12"},N1={class:"text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3"},O1={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},k1={class:"space-y-6"},B1={class:"text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3"},z1={class:"grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-8 bg-slate-900 rounded-3xl"},V1={class:"space-y-6"},H1={class:"text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3"},G1={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},W1={class:"flex items-center gap-2"},X1={class:"space-y-4"},Y1={class:"space-y-6 text-center py-12 border-y border-slate-200 dark:border-slate-800"},$1={class:"flex flex-wrap justify-center gap-6 pt-4"},q1={class:"space-y-12 border-t border-slate-200 dark:border-slate-800 pt-12"},j1={class:"grid grid-cols-1 lg:grid-cols-2 gap-12"},K1={class:"space-y-4"},Z1={class:"text-xl font-bold flex items-center gap-2"},J1={class:"p-8 bg-slate-50 dark:bg-slate-800/30 rounded-3xl flex justify-center"},Q1={class:"space-y-4"},tA={class:"text-xl font-bold flex items-center gap-2"},eA={class:"grid grid-cols-1 gap-4 p-8 bg-slate-900 rounded-3xl"},nA={class:"space-y-4"},iA={class:"text-xl font-bold flex items-center gap-2"},sA={class:"p-8 bg-slate-50 dark:bg-slate-800/30 rounded-3xl flex justify-center"},rA={class:"space-y-6 border-t border-slate-200 dark:border-slate-800 pt-12"},oA={class:"text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3"},aA={class:"mt-8 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800"},lA={class:"h-[400px] overflow-y-auto pr-4 custom-scrollbar"},cA={class:"space-y-12 border-t border-slate-200 dark:border-slate-800 pt-12"},hA={class:"grid grid-cols-1 lg:grid-cols-3 gap-8"},dA={class:"space-y-4"},uA={class:"text-xl font-bold flex items-center gap-2"},fA={class:"space-y-4"},pA={class:"text-xl font-bold flex items-center gap-2"},mA={class:"space-y-4"},gA={class:"text-xl font-bold flex items-center gap-2"},_A={class:"space-y-12 border-t border-slate-200 dark:border-slate-800 pt-12"},xA={class:"text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3"},vA={class:"grid grid-cols-1 lg:grid-cols-2 gap-12"},bA={class:"space-y-4"},MA={class:"text-xl font-bold flex items-center gap-2"},SA={class:"p-8 bg-slate-900 rounded-3xl flex justify-center"},yA={class:"space-y-4"},EA={class:"text-xl font-bold flex items-center gap-2"},TA={class:"p-8 bg-slate-50 dark:bg-slate-800/30 rounded-3xl flex justify-center"},AA={class:"space-y-4"},wA={class:"text-xl font-bold flex items-center gap-2"},CA={class:"p-8 bg-slate-50 dark:bg-slate-800/30 rounded-3xl"},RA={class:"space-y-8"},PA={class:"space-y-4"},DA={class:"text-lg font-semibold flex items-center gap-2"},LA={class:"space-y-4"},IA={class:"text-lg font-semibold flex items-center gap-2"},NA=gn({__name:"Card",setup(n){const t=xe("Premium Design"),e=xe("Built for performance"),i=xe("default"),s=xe("md"),r=xe("md"),o=xe("scale"),a=xe(!0),l=xe(!1),c=xe(null),h=xe({name:"Air Pulse Headphones",price:299,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",description:"Une expérience sonore immersive avec réduction de bruit active et autonomie de 40 heures.",stock:5}),d=p=>{h.value={...p,description:"Une expérience sonore immersive avec réduction de bruit active et autonomie de 40 heures."},c.value?.open()},u=["default","outlined","ghost","glass","soft","gradient"],f=["none","sm","md","lg","xl","2xl","inner"],g=["none","xs","sm","md","lg","xl"],_=[{label:"None",value:!1},{label:"Scale",value:"scale"},{label:"Raise",value:"raise"},{label:"Glow",value:"glow"}],m=$d(()=>{let p="";return t.value&&(p+=`
    title="${t.value}"`),e.value&&(p+=`
    subtitle="${e.value}"`),i.value!=="default"&&(p+=`
    variant="${i.value}"`),s.value!=="md"&&(p+=`
    shadow="${s.value}"`),r.value!=="md"&&(p+=`
    padding="${r.value}"`),o.value&&(p+=`
    hover="${o.value}"`),a.value&&(p+=`
    image="https://picsum.photos/400/200"`),l.value&&(p+=`
    scrollable`),`<Card${p}
>
    <p>Your content here...</p>
</Card>`});return(p,x)=>(se(),Ce("div",d1,[x[64]||(x[64]=br('<section><div class="flex items-center gap-3 mb-2"><span class="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Composant</span><span class="px-2 py-0.5 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full">Disponible</span></div><h1 class="text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Card</h1><p class="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed"> Un composant de conteneur premium hautement flexible pour grouper du contenu connexe. Supporte plusieurs variantes, ombres, et animations au survol. </p></section>',1)),D("section",u1,[D("h2",f1,[rt(ht(de),{name:"heroicons:play",class:"text-indigo-500"}),x[8]||(x[8]=Wt(" Playground Interactif ",-1))]),D("div",p1,[D("div",m1,[D("div",g1,[D("div",_1,[x[9]||(x[9]=D("label",{class:"text-xs font-bold text-slate-500 uppercase tracking-wider"},"Titre",-1)),Yn(D("input",{"onUpdate:modelValue":x[0]||(x[0]=M=>t.value=M),type:"text",class:"w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"},null,512),[[Ra,t.value]])]),D("div",x1,[x[10]||(x[10]=D("label",{class:"text-xs font-bold text-slate-500 uppercase tracking-wider"},"Sous-titre",-1)),Yn(D("input",{"onUpdate:modelValue":x[1]||(x[1]=M=>e.value=M),type:"text",class:"w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"},null,512),[[Ra,e.value]])])]),D("div",v1,[D("div",b1,[x[11]||(x[11]=D("label",{class:"text-xs font-bold text-slate-500 uppercase tracking-wider"},"Variante",-1)),Yn(D("select",{"onUpdate:modelValue":x[2]||(x[2]=M=>i.value=M),class:"w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"},[(se(),Ce(bn,null,Kn(u,M=>D("option",{key:M},Ht(M),1)),64))],512),[[Mr,i.value]])]),D("div",M1,[x[12]||(x[12]=D("label",{class:"text-xs font-bold text-slate-500 uppercase tracking-wider"},"Ombre",-1)),Yn(D("select",{"onUpdate:modelValue":x[3]||(x[3]=M=>s.value=M),class:"w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"},[(se(),Ce(bn,null,Kn(f,M=>D("option",{key:M},Ht(M),1)),64))],512),[[Mr,s.value]])])]),D("div",S1,[D("div",y1,[x[13]||(x[13]=D("label",{class:"text-xs font-bold text-slate-500 uppercase tracking-wider"},"Padding",-1)),Yn(D("select",{"onUpdate:modelValue":x[4]||(x[4]=M=>r.value=M),class:"w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"},[(se(),Ce(bn,null,Kn(g,M=>D("option",{key:M},Ht(M),1)),64))],512),[[Mr,r.value]])]),D("div",E1,[x[14]||(x[14]=D("label",{class:"text-xs font-bold text-slate-500 uppercase tracking-wider"},"Hover Effect",-1)),Yn(D("select",{"onUpdate:modelValue":x[5]||(x[5]=M=>o.value=M),class:"w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"},[(se(),Ce(bn,null,Kn(_,M=>D("option",{key:M.label,value:M.value},Ht(M.label),9,T1)),64))],512),[[Mr,o.value]])])]),D("div",A1,[D("label",w1,[Yn(D("input",{"onUpdate:modelValue":x[6]||(x[6]=M=>a.value=M),type:"checkbox",class:"w-4 h-4 text-indigo-600 rounded border-slate-300 dark:border-slate-700 focus:ring-indigo-500"},null,512),[[Tc,a.value]]),x[15]||(x[15]=D("span",{class:"text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-indigo-500 transition-colors"},"Afficher une image",-1))]),D("label",C1,[Yn(D("input",{"onUpdate:modelValue":x[7]||(x[7]=M=>l.value=M),type:"checkbox",class:"w-4 h-4 text-indigo-600 rounded border-slate-300 dark:border-slate-700 focus:ring-indigo-500"},null,512),[[Tc,l.value]]),x[16]||(x[16]=D("span",{class:"text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-indigo-500 transition-colors"},"Corps scrollable",-1))])])]),D("div",R1,[D("div",P1,[rt(ht(we),{title:t.value,subtitle:e.value,variant:i.value,shadow:s.value,padding:r.value,hover:o.value,image:a.value?"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop":void 0,scrollable:l.value,class:er(["transition-all duration-300",{"h-64":l.value}])},{footer:Lt(()=>[rt(ht(Ie),{severity:"primary",size:"sm",block:""},{default:Lt(()=>[...x[21]||(x[21]=[Wt("Action principale",-1)])]),_:1})]),default:Lt(()=>[D("p",D1,[x[20]||(x[20]=Wt(" Le contenu de votre carte s'adapte automatiquement à vos réglages. ",-1)),l.value?(se(),Ce(bn,{key:0},[x[17]||(x[17]=D("br",null,null,-1)),x[18]||(x[18]=D("br",null,null,-1)),x[19]||(x[19]=Wt(" Ceci est un exemple de contenu long pour tester le défilement interne de la carte. Vous pouvez ajouter autant de texte que vous le souhaitez ici sans briser la mise en page. ",-1))],64)):jd("",!0)])]),_:1},8,["title","subtitle","variant","shadow","padding","hover","image","scrollable","class"])])]),D("div",L1,[D("div",I1,[x[23]||(x[23]=D("span",{class:"text-xs font-bold text-slate-500 uppercase tracking-widest"},"Code Preview",-1)),rt(ht(Ie),{variant:"ghost",size:"xs",severity:"contrast",icon:"heroicons:clipboard-document",onClick:()=>{}},{default:Lt(()=>[...x[22]||(x[22]=[Wt("Copier",-1)])]),_:1})]),D("pre",F1,[D("code",null,Ht(m.value),1)])])])]),D("section",U1,[D("h2",N1,[rt(ht(de),{name:"heroicons:square-3-stack-3d",class:"text-indigo-500"}),x[24]||(x[24]=Wt(" Variantes de base ",-1))]),D("div",O1,[rt(ht(we),{title:"Card par défaut",subtitle:"Variante standard"},{footer:Lt(()=>[rt(ht(Ie),{variant:"ghost",size:"sm"},{default:Lt(()=>[...x[25]||(x[25]=[Wt("En savoir plus",-1)])]),_:1})]),default:Lt(()=>[x[26]||(x[26]=D("p",{class:"text-slate-600 dark:text-slate-400"}," La carte standard avec une bordure fine et une ombre légère. ",-1))]),_:1}),rt(ht(we),{variant:"outlined",title:"Bordures accentuées",subtitle:"Variante outlined"},{default:Lt(()=>[...x[27]||(x[27]=[D("p",{class:"text-slate-600 dark:text-slate-400"}," Idéal pour les interfaces épurées avec des séparations marquées. ",-1)])]),_:1}),rt(ht(we),{variant:"soft",title:"Style Doux",subtitle:"Variante soft"},{default:Lt(()=>[...x[28]||(x[28]=[D("p",{class:"text-slate-600 dark:text-slate-400"}," Utilise une couleur de fond subtile au lieu d'une bordure. ",-1)])]),_:1})])]),D("section",k1,[D("h2",B1,[rt(ht(de),{name:"heroicons:sparkles",class:"text-indigo-500"}),x[29]||(x[29]=Wt(" Effets Premium ",-1))]),D("div",z1,[rt(ht(we),{variant:"glass",title:"Glassmorphism",subtitle:"Effet de transparence"},{footer:Lt(()=>[rt(ht(Ie),{severity:"contrast",size:"sm"},{default:Lt(()=>[...x[30]||(x[30]=[Wt("Découvrir",-1)])]),_:1})]),default:Lt(()=>[x[31]||(x[31]=D("p",{class:"text-slate-300"}," Supporte le flou d'arrière-plan natif avec une bordure lumineuse subtile. ",-1))]),_:1}),rt(ht(we),{variant:"gradient",title:"Gradients Dynamiques",subtitle:"Couleurs vives"},{footer:Lt(()=>[rt(ht(Ie),{variant:"outlined",severity:"contrast",size:"sm",class:"!border-white/40 !text-white"},{default:Lt(()=>[...x[32]||(x[32]=[Wt("Action",-1)])]),_:1})]),default:Lt(()=>[x[33]||(x[33]=D("p",{class:"text-indigo-50"}," Idéal pour mettre en avant des offres spéciales ou des actions prioritaires. ",-1))]),_:1})])]),D("section",V1,[D("h2",H1,[rt(ht(de),{name:"heroicons:photo",class:"text-indigo-500"}),x[34]||(x[34]=Wt(" Images et Contenu ",-1))]),D("div",G1,[rt(ht(we),{image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",title:"Design Abstrait",subtitle:"Inspiré par la nature",hover:"scale"},{footer:Lt(()=>[D("div",W1,[rt(ht(de),{name:"heroicons:heart",class:"text-rose-500"}),x[35]||(x[35]=D("span",{class:"text-sm font-medium"},"124 Likes",-1))])]),default:Lt(()=>[x[36]||(x[36]=D("p",{class:"text-slate-600 dark:text-slate-400 line-clamp-2"}," Les images d'en-tête s'intègrent parfaitement et supportent des effets de zoom au survol. ",-1))]),_:1}),rt(ht(we),{title:"Gestion du Scroll",subtitle:"Contenu long",scrollable:"",padding:"lg",class:"h-[250px]"},{default:Lt(()=>[D("div",X1,[(se(),Ce(bn,null,Kn(5,M=>D("p",{key:M,class:"text-slate-600 dark:text-slate-400 text-sm"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. ")),64))])]),_:1})])]),D("section",Y1,[x[37]||(x[37]=D("h2",{class:"text-2xl font-bold text-slate-900 dark:text-white"},"Effets de survol (Hover)",-1)),D("div",$1,[rt(ht(we),{title:"Scale",hover:"scale",class:"w-64 text-left"}),rt(ht(we),{title:"Raise",hover:"raise",class:"w-64 text-left"}),rt(ht(we),{title:"Glow",hover:"glow",class:"w-64 text-left border-indigo-500"})])]),D("section",q1,[x[44]||(x[44]=D("h2",{class:"text-3xl font-bold text-slate-900 dark:text-white"},"Cas d'Usage Réels",-1)),D("div",j1,[D("div",K1,[D("h3",Z1,[rt(ht(de),{name:"heroicons:shopping-bag",class:"text-indigo-500"}),x[38]||(x[38]=Wt(" E-commerce ",-1))]),x[39]||(x[39]=D("p",{class:"text-slate-600 dark:text-slate-400 text-sm"}," Product card avec badge promotionnel, prix formaté, rating et système de wishlist. ",-1)),D("div",J1,[rt(Qf,{product:{id:1,name:"Air Pulse Headphones",price:299,rating:4,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",stock:3,category:"Audio"},onQuickView:d})])]),rt(yv,{ref_key:"quickViewRef",ref:c,item:h.value},null,8,["item"]),D("div",Q1,[D("h3",tA,[rt(ht(de),{name:"heroicons:chart-bar",class:"text-indigo-500"}),x[40]||(x[40]=Wt(" Dashboard ",-1))]),x[41]||(x[41]=D("p",{class:"text-slate-600 dark:text-slate-400 text-sm"}," Metric card utilisant le glassmorphism pour afficher des indicateurs de performance. ",-1)),D("div",eA,[rt(Ac,{metric:{label:"Revenus Totaux",value:"€45,230",trend:12.5,icon:"heroicons:banknotes",color:"#10b981"}}),rt(Ac,{metric:{label:"Nouveaux Clients",value:"1,284",trend:-2.4,icon:"heroicons:users",color:"#6366f1"}})])])]),D("div",nA,[D("h3",iA,[rt(ht(de),{name:"heroicons:user-group",class:"text-indigo-500"}),x[42]||(x[42]=Wt(" Médias Sociaux ",-1))]),x[43]||(x[43]=D("p",{class:"text-slate-600 dark:text-slate-400 text-sm"}," Post card avec carrousel d'images, interactions (like/comment) et profil utilisateur. ",-1)),D("div",sA,[rt(hp,{user:{name:"Sarah Anderson",username:"sarah_dev",avatar:"https://i.pravatar.cc/150?u=sarah"},post:{content:"Exploration des nouveaux composants UI de @webmx ! Le mode glassmorphism est incroyable. ✨ #webdev #vuejs #uiux",images:["https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"],likes:842,comments:31,date:"2h"}})])])]),D("section",rA,[D("h2",oA,[rt(ht(de),{name:"heroicons:bolt",class:"text-amber-500"}),x[45]||(x[45]=Wt(" Performance & Optimisation ",-1))]),x[47]||(x[47]=br('<div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="space-y-4"><h3 class="text-xl font-bold">Code Splitting</h3><p class="text-slate-600 dark:text-slate-400 text-sm"> Le composant <code class="text-indigo-500">Card</code> utilise <code class="text-indigo-500">defineAsyncComponent</code> pour les fonctionnalités lourdes comme le carrousel d&#39;images et le squelette de chargement. Ces ressources ne sont chargées que si la prop correspondante est active. </p></div><div class="space-y-4"><h3 class="text-xl font-bold">Virtualisation (CardGroup)</h3><p class="text-slate-600 dark:text-slate-400 text-sm"> Pour les listes contenant des centaines de cartes, utilisez <code class="text-indigo-500">CardGroup</code> avec l&#39;attribut <code class="text-indigo-500">virtual</code>. Il utilise <code class="text-indigo-500">IntersectionObserver</code> pour ne rendre le contenu que lorsqu&#39;il approche de la zone visible. </p></div></div>',1)),D("div",aA,[x[46]||(x[46]=D("h4",{class:"font-bold mb-4 flex items-center gap-2"},"Exemple de virtualisation",-1)),D("div",lA,[rt(ht(Wf),{items:Array.from({length:100},(M,S)=>({id:S,title:`Card #${S+1}`})),columns:2,virtual:""},{default:Lt(({item:M})=>[rt(ht(we),{title:M.title,subtitle:"Contenu virtualisé",hover:"raise"},null,8,["title"])]),_:1},8,["items"])])])]),D("section",cA,[x[51]||(x[51]=D("h2",{class:"text-3xl font-bold text-slate-900 dark:text-white"},"Intégrations & Bibliothèques",-1)),D("div",hA,[D("div",dA,[D("h3",uA,[rt(ht(de),{name:"heroicons:presentation-chart-line",class:"text-emerald-500"}),x[48]||(x[48]=Wt(" Chart.js ",-1))]),rt(Xx,{title:"Ventes hebdomadaires",value:"€12,480",data:[40,60,45,80,50,90,70],color:"#10b981"})]),D("div",fA,[D("h3",pA,[rt(ht(de),{name:"heroicons:video-camera",class:"text-rose-500"}),x[49]||(x[49]=Wt(" Vidéo ",-1))]),rt(nv,{video:{title:"Explorer le futur de l'UI Design avec WebMX",views:"2.4M",duration:"12:45",thumbnail:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",author:"WebMX Team",authorAvatar:"https://i.pravatar.cc/150?u=webmx",date:"il y a 3 jours"}})]),D("div",mA,[D("h3",gA,[rt(ht(de),{name:"heroicons:map",class:"text-indigo-500"}),x[50]||(x[50]=Wt(" Cartes / Mapbox ",-1))]),rt(dv,{location:{city:"Paris",address:"75001 Rue de Rivoli",lat:48.8566,lng:2.3522,price:"€1,200/nuit"}})])])]),D("section",_A,[D("h2",xA,[rt(ht(de),{name:"heroicons:rocket-launch",class:"text-indigo-500"}),x[52]||(x[52]=Wt(" Fonctionnalités Avancées ",-1))]),D("div",vA,[D("div",bA,[D("h3",MA,[rt(ht(de),{name:"heroicons:cube",size:"lg",class:"text-indigo-500"}),x[53]||(x[53]=Wt(" Expériences 3D (Three.js) ",-1))]),x[54]||(x[54]=D("p",{class:"text-slate-600 dark:text-slate-400 text-sm"}," Rendu WebGL temps réel pour des présentations de produits 3D interactives directement dans la carte. ",-1)),D("div",SA,[rt(GT,{title:"Prototype 3D v1",color:"#818cf8"})])]),D("div",yA,[D("h3",EA,[rt(ht(de),{name:"heroicons:chat-bubble-left-right",size:"lg",class:"text-indigo-500"}),x[55]||(x[55]=Wt(" Collaboration & Annotations ",-1))]),x[56]||(x[56]=D("p",{class:"text-slate-600 dark:text-slate-400 text-sm"}," Système de commentaires intégré avec présence utilisateur en temps réel et historique. ",-1)),D("div",TA,[rt(r1)])])]),D("div",AA,[D("h3",wA,[rt(ht(de),{name:"heroicons:swatch",size:"lg",class:"text-indigo-500"}),x[57]||(x[57]=Wt(" Thèmes Dynamiques & Saisonniers ",-1))]),x[58]||(x[58]=D("p",{class:"text-slate-600 dark:text-slate-400 text-sm max-w-2xl"}," Changement dynamique de thème basé sur des variables CSS, permettant des adaptations saisonnières ou personnalisées par l'utilisateur sans rechargement. ",-1)),D("div",CA,[rt(h1,{card:{title:"WebMX Premium Pack",image:"https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop"}})])])]),D("section",RA,[x[63]||(x[63]=D("h2",{class:"text-3xl font-bold text-slate-900 dark:text-white"},"API Reference",-1)),D("div",PA,[D("h3",DA,[rt(ht(de),{name:"heroicons:list-bullet",class:"text-indigo-500"}),x[59]||(x[59]=Wt(" Propriétés (Props) ",-1))]),x[60]||(x[60]=br('<div class="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl"><table class="w-full text-sm text-left"><thead class="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700"><tr><th class="px-4 py-3 font-semibold">Propriété</th><th class="px-4 py-3 font-semibold">Type</th><th class="px-4 py-3 font-semibold">Défaut</th><th class="px-4 py-3 font-semibold">Description</th></tr></thead><tbody class="divide-y divide-slate-200 dark:divide-slate-700"><tr><td class="px-4 py-3 font-mono text-indigo-400 font-bold">title</td><td class="px-4 py-3 text-slate-500">string</td><td class="px-4 py-3 text-slate-500">-</td><td class="px-4 py-3">Titre de la carte.</td></tr><tr><td class="px-4 py-3 font-mono text-indigo-400 font-bold">subtitle</td><td class="px-4 py-3 text-slate-500">string</td><td class="px-4 py-3 text-slate-500">-</td><td class="px-4 py-3">Sous-titre affiché sous le titre.</td></tr><tr><td class="px-4 py-3 font-mono text-indigo-400 font-bold">variant</td><td class="px-4 py-3 text-slate-500">default | outlined | ghost | glass | soft | gradient</td><td class="px-4 py-3 text-slate-500">&#39;default&#39;</td><td class="px-4 py-3">Style visuel de la carte.</td></tr><tr><td class="px-4 py-3 font-mono text-indigo-400 font-bold">shadow</td><td class="px-4 py-3 text-slate-500">none | sm | md | lg | xl | 2xl</td><td class="px-4 py-3 text-slate-500">&#39;md&#39;</td><td class="px-4 py-3">Niveau d&#39;ombre portée.</td></tr><tr><td class="px-4 py-3 font-mono text-indigo-400 font-bold">padding</td><td class="px-4 py-3 text-slate-500">none | xs | sm | md | lg | xl</td><td class="px-4 py-3 text-slate-500">&#39;md&#39;</td><td class="px-4 py-3">Marges internes du corps.</td></tr><tr><td class="px-4 py-3 font-mono text-indigo-400 font-bold">image</td><td class="px-4 py-3 text-slate-500">string</td><td class="px-4 py-3 text-slate-500">-</td><td class="px-4 py-3">URL d&#39;une image d&#39;en-tête.</td></tr><tr><td class="px-4 py-3 font-mono text-indigo-400 font-bold">hover</td><td class="px-4 py-3 text-slate-500">boolean | &#39;scale&#39; | &#39;raise&#39; | &#39;glow&#39;</td><td class="px-4 py-3 text-slate-500">false</td><td class="px-4 py-3">Effet visuel lors du survol.</td></tr><tr><td class="px-4 py-3 font-mono text-indigo-400 font-bold">scrollable</td><td class="px-4 py-3 text-slate-500">boolean</td><td class="px-4 py-3 text-slate-500">false</td><td class="px-4 py-3">Permet le scroll vertical si le contenu est trop long.</td></tr></tbody></table></div>',1))]),D("div",LA,[D("h3",IA,[rt(ht(de),{name:"heroicons:rectangle-group",class:"text-indigo-500"}),x[61]||(x[61]=Wt(" Slots ",-1))]),x[62]||(x[62]=br('<div class="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl"><table class="w-full text-sm text-left"><thead class="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700"><tr><th class="px-4 py-3 font-semibold">Nom</th><th class="px-4 py-3 font-semibold">Description</th></tr></thead><tbody class="divide-y divide-slate-200 dark:divide-slate-700"><tr><td class="px-4 py-3 font-mono text-indigo-400 font-bold">default</td><td class="px-4 py-3">Corps principal de la carte.</td></tr><tr><td class="px-4 py-3 font-mono text-indigo-400 font-bold">header</td><td class="px-4 py-3">Remplace l&#39;en-tête complet (titre + sous-titre).</td></tr><tr><td class="px-4 py-3 font-mono text-indigo-400 font-bold">title</td><td class="px-4 py-3">Personnalisation du titre.</td></tr><tr><td class="px-4 py-3 font-mono text-indigo-400 font-bold">footer</td><td class="px-4 py-3">Pied de page pour les actions.</td></tr><tr><td class="px-4 py-3 font-mono text-indigo-400 font-bold">image</td><td class="px-4 py-3">Remplace l&#39;élément image par défaut.</td></tr></tbody></table></div>',1))])])]))}});export{NA as default};
