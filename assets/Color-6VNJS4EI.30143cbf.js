import{n as E,W as he,T as Ee,F as $e,I as Oe,a as Ne}from"./chunk-S4VUQJ4A.d7fb92c8.js";import{e as y,r as b}from"./index.0baed9bc.js";import{j as m,a as V}from"./index.803c4060.js";import{L as Ie,t as Z,X as Se}from"./index.00b5e809.js";import"./iframe.fd298fb5.js";import"../sb-preview/runtime.js";import"./index.5ca63ce8.js";import"./memoizerific.891dfb8a.js";import"./extends.bd401154.js";import"./index.b38f6aa4.js";import"./_commonjsHelpers.b8add541.js";function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ee(e,t){if(e==null)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}function A(e){var t=b.exports.useRef(e),n=b.exports.useRef(function(r){t.current&&t.current(r)});return t.current=e,n.current}var R=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e<t?t:e},F=function(e){return"touches"in e},G=function(e){return e&&e.ownerDocument.defaultView||self},oe=function(e,t,n){var r=e.getBoundingClientRect(),o=F(t)?function(a,s){for(var i=0;i<a.length;i++)if(a[i].identifier===s)return a[i];return a[0]}(t.touches,n):t;return{left:R((o.pageX-(r.left+G(e).pageXOffset))/r.width),top:R((o.pageY-(r.top+G(e).pageYOffset))/r.height)}},ae=function(e){!F(e)&&e.preventDefault()},te=y.memo(function(e){var t=e.onMove,n=e.onKey,r=ee(e,["onMove","onKey"]),o=b.exports.useRef(null),a=A(t),s=A(n),i=b.exports.useRef(null),l=b.exports.useRef(!1),c=b.exports.useMemo(function(){var _=function(v){ae(v),(F(v)?v.touches.length>0:v.buttons>0)&&o.current?a(oe(o.current,v,i.current)):M(!1)},N=function(){return M(!1)};function M(v){var g=l.current,w=G(o.current),$=v?w.addEventListener:w.removeEventListener;$(g?"touchmove":"mousemove",_),$(g?"touchend":"mouseup",N)}return[function(v){var g=v.nativeEvent,w=o.current;if(w&&(ae(g),!function(D,T){return T&&!F(D)}(g,l.current)&&w)){if(F(g)){l.current=!0;var $=g.changedTouches||[];$.length&&(i.current=$[0].identifier)}w.focus(),a(oe(w,g,i.current)),M(!0)}},function(v){var g=v.which||v.keyCode;g<37||g>40||(v.preventDefault(),s({left:g===39?.05:g===37?-.05:0,top:g===40?.05:g===38?-.05:0}))},M]},[s,a]),h=c[0],f=c[1],d=c[2];return b.exports.useEffect(function(){return d},[d]),m("div",{...O({},r,{onTouchStart:h,onMouseDown:h,className:"react-colorful__interactive",ref:o,onKeyDown:f,tabIndex:0,role:"slider"})})}),H=function(e){return e.filter(Boolean).join(" ")},ne=function(e){var t=e.color,n=e.left,r=e.top,o=r===void 0?.5:r,a=H(["react-colorful__pointer",e.className]);return m("div",{className:a,style:{top:100*o+"%",left:100*n+"%"},children:m("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}})})},x=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n},Re={grad:.9,turn:360,rad:360/(2*Math.PI)},Te=function(e){return be(U(e))},U=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?x(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?x(parseInt(e.substring(6,8),16)/255,2):1}},je=function(e,t){return t===void 0&&(t="deg"),Number(e)*(Re[t]||1)},Fe=function(e){var t=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?ze({h:je(t[1],t[2]),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)}):{h:0,s:0,v:0,a:1}},ze=function(e){var t=e.s,n=e.l;return{h:e.h,s:(t*=(n<50?n:100-n)/100)>0?2*t/(n+t)*100:0,v:n+t,a:e.a}},He=function(e){return Le(ge(e))},de=function(e){var t=e.s,n=e.v,r=e.a,o=(200-t)*n/100;return{h:x(e.h),s:x(o>0&&o<200?t*n/100/(o<=100?o:200-o)*100:0),l:x(o/2),a:x(r,2)}},Y=function(e){var t=de(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},B=function(e){var t=de(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},ge=function(e){var t=e.h,n=e.s,r=e.v,o=e.a;t=t/360*6,n/=100,r/=100;var a=Math.floor(t),s=r*(1-n),i=r*(1-(t-a)*n),l=r*(1-(1-t+a)*n),c=a%6;return{r:x(255*[r,i,s,s,l,r][c]),g:x(255*[l,r,r,i,s,s][c]),b:x(255*[s,s,l,r,r,i][c]),a:x(o,2)}},Pe=function(e){var t=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?be({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):{h:0,s:0,v:0,a:1}},P=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Le=function(e){var t=e.r,n=e.g,r=e.b,o=e.a,a=o<1?P(x(255*o)):"";return"#"+P(t)+P(n)+P(r)+a},be=function(e){var t=e.r,n=e.g,r=e.b,o=e.a,a=Math.max(t,n,r),s=a-Math.min(t,n,r),i=s?a===t?(n-r)/s:a===n?2+(r-t)/s:4+(t-n)/s:0;return{h:x(60*(i<0?i+6:i)),s:x(a?s/a*100:0),v:x(a/255*100),a:o}},pe=y.memo(function(e){var t=e.hue,n=e.onChange,r=H(["react-colorful__hue",e.className]);return y.createElement("div",{className:r},y.createElement(te,{onMove:function(o){n({h:360*o.left})},onKey:function(o){n({h:R(t+360*o.left,0,360)})},"aria-label":"Hue","aria-valuenow":x(t),"aria-valuemax":"360","aria-valuemin":"0"},y.createElement(ne,{className:"react-colorful__hue-pointer",left:t/360,color:Y({h:t,s:100,v:100,a:1})})))}),me=y.memo(function(e){var t=e.hsva,n=e.onChange,r={backgroundColor:Y({h:t.h,s:100,v:100,a:1})};return y.createElement("div",{className:"react-colorful__saturation",style:r},y.createElement(te,{onMove:function(o){n({s:100*o.left,v:100-100*o.top})},onKey:function(o){n({s:R(t.s+100*o.left,0,100),v:R(t.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+x(t.s)+"%, Brightness "+x(t.v)+"%"},y.createElement(ne,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:Y(t)})))}),ve=function(e,t){if(e===t)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0},xe=function(e,t){return e.replace(/\s/g,"")===t.replace(/\s/g,"")},qe=function(e,t){return e.toLowerCase()===t.toLowerCase()||ve(U(e),U(t))};function ye(e,t,n){var r=A(n),o=b.exports.useState(function(){return e.toHsva(t)}),a=o[0],s=o[1],i=b.exports.useRef({color:t,hsva:a});b.exports.useEffect(function(){if(!e.equal(t,i.current.color)){var c=e.toHsva(t);i.current={hsva:c,color:t},s(c)}},[t,e]),b.exports.useEffect(function(){var c;ve(a,i.current.hsva)||e.equal(c=e.fromHsva(a),i.current.color)||(i.current={hsva:a,color:c},r(c))},[a,e,r]);var l=b.exports.useCallback(function(c){s(function(h){return Object.assign({},h,c)})},[]);return[a,l]}var Be=typeof window<"u"?b.exports.useLayoutEffect:b.exports.useEffect,We=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},se=new Map,we=function(e){Be(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!se.has(t)){var n=t.createElement("style");n.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,se.set(t,n);var r=We();r&&n.setAttribute("nonce",r),t.head.appendChild(n)}},[])},Xe=function(e){var t=e.className,n=e.colorModel,r=e.color,o=r===void 0?n.defaultColor:r,a=e.onChange,s=ee(e,["className","colorModel","color","onChange"]),i=b.exports.useRef(null);we(i);var l=ye(n,o,a),c=l[0],h=l[1],f=H(["react-colorful",t]);return V("div",{...O({},s,{ref:i,className:f}),children:[m(me,{hsva:c,onChange:h}),m(pe,{hue:c.h,onChange:h,className:"react-colorful__last-control"})]})},De={defaultColor:"000",toHsva:Te,fromHsva:function(e){return He({h:e.h,s:e.s,v:e.v,a:1})},equal:qe},Ke=function(e){return m(Xe,{...O({},e,{colorModel:De})})},Ve=function(e){var t=e.className,n=e.hsva,r=e.onChange,o={backgroundImage:"linear-gradient(90deg, "+B(Object.assign({},n,{a:0}))+", "+B(Object.assign({},n,{a:1}))+")"},a=H(["react-colorful__alpha",t]),s=x(100*n.a);return y.createElement("div",{className:a},m("div",{className:"react-colorful__alpha-gradient",style:o}),y.createElement(te,{onMove:function(i){r({a:i.left})},onKey:function(i){r({a:R(n.a+i.left)})},"aria-label":"Alpha","aria-valuetext":s+"%","aria-valuenow":s,"aria-valuemin":"0","aria-valuemax":"100"},y.createElement(ne,{className:"react-colorful__alpha-pointer",left:n.a,color:B(n)})))},ke=function(e){var t=e.className,n=e.colorModel,r=e.color,o=r===void 0?n.defaultColor:r,a=e.onChange,s=ee(e,["className","colorModel","color","onChange"]),i=b.exports.useRef(null);we(i);var l=ye(n,o,a),c=l[0],h=l[1],f=H(["react-colorful",t]);return y.createElement("div",O({},s,{ref:i,className:f}),m(me,{hsva:c,onChange:h}),m(pe,{hue:c.h,onChange:h}),y.createElement(Ve,{hsva:c,onChange:h,className:"react-colorful__last-control"}))},Ae={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:Fe,fromHsva:B,equal:xe},Ge=function(e){return y.createElement(ke,O({},e,{colorModel:Ae}))},Ue={defaultColor:"rgba(0, 0, 0, 1)",toHsva:Pe,fromHsva:function(e){var t=ge(e);return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},equal:xe},Ye=function(e){return y.createElement(ke,O({},e,{colorModel:Ue}))},Je={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const z=Je,_e={};for(const e of Object.keys(z))_e[z[e]]=e;const u={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var Me=u;for(const e of Object.keys(u)){if(!("channels"in u[e]))throw new Error("missing channels property: "+e);if(!("labels"in u[e]))throw new Error("missing channel labels property: "+e);if(u[e].labels.length!==u[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:t,labels:n}=u[e];delete u[e].channels,delete u[e].labels,Object.defineProperty(u[e],"channels",{value:t}),Object.defineProperty(u[e],"labels",{value:n})}u.rgb.hsl=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(t,n,r),a=Math.max(t,n,r),s=a-o;let i,l;a===o?i=0:t===a?i=(n-r)/s:n===a?i=2+(r-t)/s:r===a&&(i=4+(t-n)/s),i=Math.min(i*60,360),i<0&&(i+=360);const c=(o+a)/2;return a===o?l=0:c<=.5?l=s/(a+o):l=s/(2-a-o),[i,l*100,c*100]};u.rgb.hsv=function(e){let t,n,r,o,a;const s=e[0]/255,i=e[1]/255,l=e[2]/255,c=Math.max(s,i,l),h=c-Math.min(s,i,l),f=function(d){return(c-d)/6/h+1/2};return h===0?(o=0,a=0):(a=h/c,t=f(s),n=f(i),r=f(l),s===c?o=r-n:i===c?o=1/3+t-r:l===c&&(o=2/3+n-t),o<0?o+=1:o>1&&(o-=1)),[o*360,a*100,c*100]};u.rgb.hwb=function(e){const t=e[0],n=e[1];let r=e[2];const o=u.rgb.hsl(e)[0],a=1/255*Math.min(t,Math.min(n,r));return r=1-1/255*Math.max(t,Math.max(n,r)),[o,a*100,r*100]};u.rgb.cmyk=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(1-t,1-n,1-r),a=(1-t-o)/(1-o)||0,s=(1-n-o)/(1-o)||0,i=(1-r-o)/(1-o)||0;return[a*100,s*100,i*100,o*100]};function Qe(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}u.rgb.keyword=function(e){const t=_e[e];if(t)return t;let n=1/0,r;for(const o of Object.keys(z)){const a=z[o],s=Qe(e,a);s<n&&(n=s,r=o)}return r};u.keyword.rgb=function(e){return z[e]};u.rgb.xyz=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;const o=t*.4124+n*.3576+r*.1805,a=t*.2126+n*.7152+r*.0722,s=t*.0193+n*.1192+r*.9505;return[o*100,a*100,s*100]};u.rgb.lab=function(e){const t=u.rgb.xyz(e);let n=t[0],r=t[1],o=t[2];n/=95.047,r/=100,o/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;const a=116*r-16,s=500*(n-r),i=200*(r-o);return[a,s,i]};u.hsl.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;let o,a,s;if(n===0)return s=r*255,[s,s,s];r<.5?o=r*(1+n):o=r+n-r*n;const i=2*r-o,l=[0,0,0];for(let c=0;c<3;c++)a=t+1/3*-(c-1),a<0&&a++,a>1&&a--,6*a<1?s=i+(o-i)*6*a:2*a<1?s=o:3*a<2?s=i+(o-i)*(2/3-a)*6:s=i,l[c]=s*255;return l};u.hsl.hsv=function(e){const t=e[0];let n=e[1]/100,r=e[2]/100,o=n;const a=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,o*=a<=1?a:2-a;const s=(r+n)/2,i=r===0?2*o/(a+o):2*n/(r+n);return[t,i*100,s*100]};u.hsv.rgb=function(e){const t=e[0]/60,n=e[1]/100;let r=e[2]/100;const o=Math.floor(t)%6,a=t-Math.floor(t),s=255*r*(1-n),i=255*r*(1-n*a),l=255*r*(1-n*(1-a));switch(r*=255,o){case 0:return[r,l,s];case 1:return[i,r,s];case 2:return[s,r,l];case 3:return[s,i,r];case 4:return[l,s,r];case 5:return[r,s,i]}};u.hsv.hsl=function(e){const t=e[0],n=e[1]/100,r=e[2]/100,o=Math.max(r,.01);let a,s;s=(2-n)*r;const i=(2-n)*o;return a=n*o,a/=i<=1?i:2-i,a=a||0,s/=2,[t,a*100,s*100]};u.hwb.rgb=function(e){const t=e[0]/360;let n=e[1]/100,r=e[2]/100;const o=n+r;let a;o>1&&(n/=o,r/=o);const s=Math.floor(6*t),i=1-r;a=6*t-s,(s&1)!==0&&(a=1-a);const l=n+a*(i-n);let c,h,f;switch(s){default:case 6:case 0:c=i,h=l,f=n;break;case 1:c=l,h=i,f=n;break;case 2:c=n,h=i,f=l;break;case 3:c=n,h=l,f=i;break;case 4:c=l,h=n,f=i;break;case 5:c=i,h=n,f=l;break}return[c*255,h*255,f*255]};u.cmyk.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100,o=e[3]/100,a=1-Math.min(1,t*(1-o)+o),s=1-Math.min(1,n*(1-o)+o),i=1-Math.min(1,r*(1-o)+o);return[a*255,s*255,i*255]};u.xyz.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100;let o,a,s;return o=t*3.2406+n*-1.5372+r*-.4986,a=t*-.9689+n*1.8758+r*.0415,s=t*.0557+n*-.204+r*1.057,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,a=a>.0031308?1.055*a**(1/2.4)-.055:a*12.92,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),s=Math.min(Math.max(0,s),1),[o*255,a*255,s*255]};u.xyz.lab=function(e){let t=e[0],n=e[1],r=e[2];t/=95.047,n/=100,r/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;const o=116*n-16,a=500*(t-n),s=200*(n-r);return[o,a,s]};u.lab.xyz=function(e){const t=e[0],n=e[1],r=e[2];let o,a,s;a=(t+16)/116,o=n/500+a,s=a-r/200;const i=a**3,l=o**3,c=s**3;return a=i>.008856?i:(a-16/116)/7.787,o=l>.008856?l:(o-16/116)/7.787,s=c>.008856?c:(s-16/116)/7.787,o*=95.047,a*=100,s*=108.883,[o,a,s]};u.lab.lch=function(e){const t=e[0],n=e[1],r=e[2];let o;o=Math.atan2(r,n)*360/2/Math.PI,o<0&&(o+=360);const s=Math.sqrt(n*n+r*r);return[t,s,o]};u.lch.lab=function(e){const t=e[0],n=e[1],o=e[2]/360*2*Math.PI,a=n*Math.cos(o),s=n*Math.sin(o);return[t,a,s]};u.rgb.ansi16=function(e,t=null){const[n,r,o]=e;let a=t===null?u.rgb.hsv(e)[2]:t;if(a=Math.round(a/50),a===0)return 30;let s=30+(Math.round(o/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return a===2&&(s+=60),s};u.hsv.ansi16=function(e){return u.rgb.ansi16(u.hsv.rgb(e),e[2])};u.rgb.ansi256=function(e){const t=e[0],n=e[1],r=e[2];return t===n&&n===r?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)};u.ansi16.rgb=function(e){let t=e%10;if(t===0||t===7)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const n=(~~(e>50)+1)*.5,r=(t&1)*n*255,o=(t>>1&1)*n*255,a=(t>>2&1)*n*255;return[r,o,a]};u.ansi256.rgb=function(e){if(e>=232){const a=(e-232)*10+8;return[a,a,a]}e-=16;let t;const n=Math.floor(e/36)/5*255,r=Math.floor((t=e%36)/6)/5*255,o=t%6/5*255;return[n,r,o]};u.rgb.hex=function(e){const n=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"000000".substring(n.length)+n};u.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let n=t[0];t[0].length===3&&(n=n.split("").map(i=>i+i).join(""));const r=parseInt(n,16),o=r>>16&255,a=r>>8&255,s=r&255;return[o,a,s]};u.rgb.hcg=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.max(Math.max(t,n),r),a=Math.min(Math.min(t,n),r),s=o-a;let i,l;return s<1?i=a/(1-s):i=0,s<=0?l=0:o===t?l=(n-r)/s%6:o===n?l=2+(r-t)/s:l=4+(t-n)/s,l/=6,l%=1,[l*360,s*100,i*100]};u.hsl.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=n<.5?2*t*n:2*t*(1-n);let o=0;return r<1&&(o=(n-.5*r)/(1-r)),[e[0],r*100,o*100]};u.hsv.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=t*n;let o=0;return r<1&&(o=(n-r)/(1-r)),[e[0],r*100,o*100]};u.hcg.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;if(n===0)return[r*255,r*255,r*255];const o=[0,0,0],a=t%1*6,s=a%1,i=1-s;let l=0;switch(Math.floor(a)){case 0:o[0]=1,o[1]=s,o[2]=0;break;case 1:o[0]=i,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=s;break;case 3:o[0]=0,o[1]=i,o[2]=1;break;case 4:o[0]=s,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=i}return l=(1-n)*r,[(n*o[0]+l)*255,(n*o[1]+l)*255,(n*o[2]+l)*255]};u.hcg.hsv=function(e){const t=e[1]/100,n=e[2]/100,r=t+n*(1-t);let o=0;return r>0&&(o=t/r),[e[0],o*100,r*100]};u.hcg.hsl=function(e){const t=e[1]/100,r=e[2]/100*(1-t)+.5*t;let o=0;return r>0&&r<.5?o=t/(2*r):r>=.5&&r<1&&(o=t/(2*(1-r))),[e[0],o*100,r*100]};u.hcg.hwb=function(e){const t=e[1]/100,n=e[2]/100,r=t+n*(1-t);return[e[0],(r-t)*100,(1-r)*100]};u.hwb.hcg=function(e){const t=e[1]/100,r=1-e[2]/100,o=r-t;let a=0;return o<1&&(a=(r-o)/(1-o)),[e[0],o*100,a*100]};u.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]};u.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]};u.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]};u.gray.hsl=function(e){return[0,0,e[0]]};u.gray.hsv=u.gray.hsl;u.gray.hwb=function(e){return[0,100,e[0]]};u.gray.cmyk=function(e){return[0,0,0,e[0]]};u.gray.lab=function(e){return[e[0],0,0]};u.gray.hex=function(e){const t=Math.round(e[0]/100*255)&255,r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r};u.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};const W=Me;function Ze(){const e={},t=Object.keys(W);for(let n=t.length,r=0;r<n;r++)e[t[r]]={distance:-1,parent:null};return e}function et(e){const t=Ze(),n=[e];for(t[e].distance=0;n.length;){const r=n.pop(),o=Object.keys(W[r]);for(let a=o.length,s=0;s<a;s++){const i=o[s],l=t[i];l.distance===-1&&(l.distance=t[r].distance+1,l.parent=r,n.unshift(i))}}return t}function tt(e,t){return function(n){return t(e(n))}}function nt(e,t){const n=[t[e].parent,e];let r=W[t[e].parent][e],o=t[e].parent;for(;t[o].parent;)n.unshift(t[o].parent),r=tt(W[t[o].parent][o],r),o=t[o].parent;return r.conversion=n,r}var rt=function(e){const t=et(e),n={},r=Object.keys(t);for(let o=r.length,a=0;a<o;a++){const s=r[a];t[s].parent!==null&&(n[s]=nt(s,t))}return n};const J=Me,ot=rt,I={},at=Object.keys(J);function st(e){const t=function(...n){const r=n[0];return r==null?r:(r.length>1&&(n=r),e(n))};return"conversion"in e&&(t.conversion=e.conversion),t}function it(e){const t=function(...n){const r=n[0];if(r==null)return r;r.length>1&&(n=r);const o=e(n);if(typeof o=="object")for(let a=o.length,s=0;s<a;s++)o[s]=Math.round(o[s]);return o};return"conversion"in e&&(t.conversion=e.conversion),t}at.forEach(e=>{I[e]={},Object.defineProperty(I[e],"channels",{value:J[e].channels}),Object.defineProperty(I[e],"labels",{value:J[e].labels});const t=ot(e);Object.keys(t).forEach(r=>{const o=t[r];I[e][r]=it(o),I[e][r].raw=st(o)})});var k=I,lt=Ie,ct=function(){return lt.Date.now()},ut=ct,ft=/\s/;function ht(e){for(var t=e.length;t--&&ft.test(e.charAt(t)););return t}var dt=ht,gt=dt,bt=/^\s+/;function pt(e){return e&&e.slice(0,gt(e)+1).replace(bt,"")}var mt=pt,vt=mt,ie=Z,xt=Se,le=0/0,yt=/^[-+]0x[0-9a-f]+$/i,wt=/^0b[01]+$/i,kt=/^0o[0-7]+$/i,_t=parseInt;function Mt(e){if(typeof e=="number")return e;if(xt(e))return le;if(ie(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ie(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=vt(e);var n=wt.test(e);return n||kt.test(e)?_t(e.slice(2),n?2:8):yt.test(e)?le:+e}var Ct=Mt,Et=Z,K=ut,ce=Ct,$t="Expected a function",Ot=Math.max,Nt=Math.min;function It(e,t,n){var r,o,a,s,i,l,c=0,h=!1,f=!1,d=!0;if(typeof e!="function")throw new TypeError($t);t=ce(t)||0,Et(n)&&(h=!!n.leading,f="maxWait"in n,a=f?Ot(ce(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d);function _(p){var C=r,j=o;return r=o=void 0,c=p,s=e.apply(j,C),s}function N(p){return c=p,i=setTimeout(g,t),h?_(p):s}function M(p){var C=p-l,j=p-c,re=t-C;return f?Nt(re,a-j):re}function v(p){var C=p-l,j=p-c;return l===void 0||C>=t||C<0||f&&j>=a}function g(){var p=K();if(v(p))return w(p);i=setTimeout(g,M(p))}function w(p){return i=void 0,d&&r?_(p):(r=o=void 0,s)}function $(){i!==void 0&&clearTimeout(i),c=0,r=l=o=i=void 0}function D(){return i===void 0?s:w(K())}function T(){var p=K(),C=v(p);if(r=arguments,o=this,l=p,C){if(i===void 0)return N(l);if(f)return clearTimeout(i),i=setTimeout(g,t),_(l)}return i===void 0&&(i=setTimeout(g,t)),s}return T.cancel=$,T.flush=D,T}var St=It,Rt=St,Tt=Z,jt="Expected a function";function Ft(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(jt);return Tt(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Rt(e,t,{leading:r,maxWait:t,trailing:o})}var zt=Ft,Ht=E.div({position:"relative",maxWidth:250}),Pt=E(he)({position:"absolute",zIndex:1,top:4,left:4}),Lt=E.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),qt=E(Ee)(({theme:e})=>({fontFamily:e.typography.fonts.base})),Bt=E.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),Wt=E.div(({theme:e,active:t})=>({width:16,height:16,boxShadow:t?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),Xt=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,ue=({value:e,active:t,onClick:n,style:r,...o})=>{let a=`linear-gradient(${e}, ${e}), ${Xt}, linear-gradient(#fff, #fff)`;return m(Wt,{...o,active:t,onClick:n,style:{...r,backgroundImage:a}})},Dt=E($e.Input)(({theme:e})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),Kt=E(Oe)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),Ce=(e=>(e.RGB="rgb",e.HSL="hsl",e.HEX="hex",e))(Ce||{}),L=Object.values(Ce),Vt=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,At=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,Gt=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,Q=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,Ut=/^\s*#?([0-9a-f]{3})\s*$/i,Yt={hex:Ke,rgb:Ye,hsl:Ge},q={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},fe=e=>{let t=e==null?void 0:e.match(Vt);if(!t)return[0,0,0,1];let[,n,r,o,a=1]=t;return[n,r,o,a].map(Number)},S=e=>{if(!e)return;let t=!0;if(At.test(e)){let[s,i,l,c]=fe(e),[h,f,d]=k.rgb.hsl([s,i,l])||[0,0,0];return{valid:t,value:e,keyword:k.rgb.keyword([s,i,l]),colorSpace:"rgb",rgb:e,hsl:`hsla(${h}, ${f}%, ${d}%, ${c})`,hex:`#${k.rgb.hex([s,i,l]).toLowerCase()}`}}if(Gt.test(e)){let[s,i,l,c]=fe(e),[h,f,d]=k.hsl.rgb([s,i,l])||[0,0,0];return{valid:t,value:e,keyword:k.hsl.keyword([s,i,l]),colorSpace:"hsl",rgb:`rgba(${h}, ${f}, ${d}, ${c})`,hsl:e,hex:`#${k.hsl.hex([s,i,l]).toLowerCase()}`}}let n=e.replace("#",""),r=k.keyword.rgb(n)||k.hex.rgb(n),o=k.rgb.hsl(r),a=e;if(/[^#a-f0-9]/i.test(e)?a=n:Q.test(e)&&(a=`#${n}`),a.startsWith("#"))t=Q.test(a);else try{k.keyword.hex(a)}catch{t=!1}return{valid:t,value:a,keyword:k.rgb.keyword(r),colorSpace:"hex",rgb:`rgba(${r[0]}, ${r[1]}, ${r[2]}, 1)`,hsl:`hsla(${o[0]}, ${o[1]}%, ${o[2]}%, 1)`,hex:a}},Jt=(e,t,n)=>{if(!e||!(t!=null&&t.valid))return q[n];if(n!=="hex")return(t==null?void 0:t[n])||q[n];if(!t.hex.startsWith("#"))try{return`#${k.keyword.hex(t.hex)}`}catch{return q.hex}let r=t.hex.match(Ut);if(!r)return Q.test(t.hex)?t.hex:q.hex;let[o,a,s]=r[1].split("");return`#${o}${o}${a}${a}${s}${s}`},Qt=(e,t)=>{let[n,r]=b.exports.useState(e||""),[o,a]=b.exports.useState(()=>S(n)),[s,i]=b.exports.useState((o==null?void 0:o.colorSpace)||"hex");b.exports.useEffect(()=>{let f=e||"",d=S(f);r(f),a(d),i((d==null?void 0:d.colorSpace)||"hex")},[e]);let l=b.exports.useMemo(()=>Jt(n,o,s).toLowerCase(),[n,o,s]),c=b.exports.useCallback(f=>{let d=S(f),_=(d==null?void 0:d.value)||f||"";r(_),_===""&&(a(void 0),t(void 0)),d&&(a(d),i(d.colorSpace),t(d.value))},[t]),h=b.exports.useCallback(()=>{let f=L.indexOf(s)+1;f>=L.length&&(f=0),i(L[f]);let d=(o==null?void 0:o[L[f]])||"";r(d),t(d)},[o,s,t]);return{value:n,realValue:l,updateValue:c,color:o,colorSpace:s,cycleColorSpace:h}},X=e=>e.replace(/\s*/,"").toLowerCase(),Zt=(e,t,n)=>{let[r,o]=b.exports.useState(t!=null&&t.valid?[t]:[]);b.exports.useEffect(()=>{t===void 0&&o([])},[t]);let a=b.exports.useMemo(()=>(e||[]).map(i=>typeof i=="string"?S(i):i.title?{...S(i.color),keyword:i.title}:S(i.color)).concat(r).filter(Boolean).slice(-27),[e,r]),s=b.exports.useCallback(i=>{i!=null&&i.valid&&(a.some(l=>X(l[n])===X(i[n]))||o(l=>l.concat(i)))},[n,a]);return{presets:a,addPreset:s}},en=({name:e,value:t,onChange:n,onFocus:r,onBlur:o,presetColors:a,startOpen:s=!1})=>{let i=b.exports.useCallback(zt(n,200),[n]),{value:l,realValue:c,updateValue:h,color:f,colorSpace:d,cycleColorSpace:_}=Qt(t,i),{presets:N,addPreset:M}=Zt(a,f,d),v=Yt[d];return V(Ht,{children:[m(Pt,{startOpen:s,closeOnOutsideClick:!0,onVisibleChange:()=>M(f),tooltip:V(Lt,{children:[m(v,{color:c==="transparent"?"#000000":c,onChange:h,onFocus:r,onBlur:o}),N.length>0&&m(Bt,{children:N.map((g,w)=>m(he,{hasChrome:!1,tooltip:m(qt,{note:g.keyword||g.value}),children:m(ue,{value:g[d],active:f&&X(g[d])===X(f[d]),onClick:()=>h(g.value)})},`${g.value}-${w}`))})]}),children:m(ue,{value:c,style:{margin:4}})}),m(Dt,{id:Ne(e),value:l,onChange:g=>h(g.target.value),onFocus:g=>g.target.select(),placeholder:"Choose color..."}),l?m(Kt,{icon:"markup",onClick:_}):null]})},dn=en;export{en as ColorControl,dn as default};
//# sourceMappingURL=Color-6VNJS4EI.30143cbf.js.map
