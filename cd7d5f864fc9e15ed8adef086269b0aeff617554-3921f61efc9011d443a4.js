"use strict";(self.webpackChunkCamveloper_blog=self.webpackChunkCamveloper_blog||[]).push([[84],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,s=new RegExp("^"+i.source),o=new RegExp(i.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,n)=>{let i=!1,s=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,o=s,s=!0,l++):s&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=s,s=!1,i=!0):(i=r(c)===c&&n(c)!==c,o=s,s=n(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return j},L:function(){return h},M:function(){return k},P:function(){return C},_:function(){return o},a:function(){return s},b:function(){return d},g:function(){return g},h:function(){return l}});var r=a(7294),n=(a(3204),a(5697)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(){return"undefined"!=typeof GATSBY___IMAGE&&GATSBY___IMAGE}function u(e,t,a){const r={};let n="gatsby-image-wrapper";return c()||(r.position="relative",r.overflow="hidden"),"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(c()||(r.display="inline-block",r.verticalAlign="top"),n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),c()||(n=s({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},n)),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function g(e,t,a,r,n,i,o,l){const u={};i&&(u.backgroundColor=i,"fixed"===a?(u.width=r,u.height=n,u.backgroundColor=i,u.position="relative"):("constrained"===a||"fullWidth"===a)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),o&&(u.objectFit=o),l&&(u.objectPosition=l);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},u)});return c()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d}const p=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=o(e,p);return r.createElement(r.Fragment,null,r.createElement(m,s({},a)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:l}=e,c=o(e,y);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=o(e,f);const l=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,s({},i,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var w;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],C=function(e){let{fallback:t}=e,a=o(e,E);return t?r.createElement(v,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};C.displayName="Placeholder",C.propTypes={fallback:n.string,sources:null==(w=v.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(v,s({},e)),r.createElement("noscript",null,r.createElement(v,s({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=v.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],x=e=>e.replace(/\n/g,""),T=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},I={image:i().object.isRequired,alt:T},N=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],_=["style","className"],R=new Set;let A,q;const O=function(e){let{as:t="div",image:n,style:i,backgroundColor:c,className:d,class:g,onStartLoad:p,onLoad:m,onError:h}=e,y=o(e,N);const{width:f,height:b,layout:v}=n,w=u(f,b,v),{style:E,className:C}=w,k=o(w,_),L=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);g&&(d=g);const x=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,f,b);return(0,r.useEffect)((()=>{A||(A=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return q=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void R.add(S);if(q&&R.has(S))return;let t,r;return A.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;L.current&&(L.current.innerHTML=a(s({isLoading:!0,isLoaded:R.has(S),image:n},y)),R.has(S)||(t=requestAnimationFrame((()=>{L.current&&(r=o(L.current,S,R,i,p,m,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{R.has(S)&&q&&(L.current.innerHTML=q(s({isLoading:R.has(S),isLoaded:R.has(S),image:n},y)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},k,{style:s({},E,i,{backgroundColor:c}),className:C+(d?" "+d:""),ref:L,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},j=(0,r.memo)((function(e){return e.image?(c(),(0,r.createElement)(O,e)):null}));j.propTypes=I,j.displayName="GatsbyImage";const M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function P(e){return function(t){let{src:a,__imageData:n,__error:i}=t,l=o(t,M);return i&&console.warn(i),n?r.createElement(e,s({image:n},l)):(console.warn("Image not loaded",a),null)}}const W=P((function(e){let{as:t="div",className:a,class:n,style:i,image:l,loading:c="lazy",imgClassName:p,imgStyle:m,backgroundColor:y,objectFit:f,objectPosition:b}=e,v=o(e,L);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),m=s({objectFit:f,objectPosition:b,backgroundColor:y},m);const{width:w,height:E,layout:T,images:I,placeholder:N,backgroundColor:_}=l,R=u(w,E,T),{style:A,className:q}=R,O=o(R,S),j={fallback:void 0,sources:[]};return I.fallback&&(j.fallback=s({},I.fallback,{srcSet:I.fallback.srcSet?x(I.fallback.srcSet):void 0})),I.sources&&(j.sources=I.sources.map((e=>s({},e,{srcSet:x(e.srcSet)})))),r.createElement(t,s({},O,{style:s({},A,i,{backgroundColor:y}),className:q+(a?" "+a:"")}),r.createElement(h,{layout:T,width:w,height:E},r.createElement(C,s({},g(N,!1,T,w,E,_,f,b))),r.createElement(k,s({"data-gatsby-image-ssr":"",className:p},v,d("eager"===c,!1,j,c,m)))))})),z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},G=new Set(["fixed","fullWidth","constrained"]),F={src:i().string.isRequired,alt:T,width:z,height:z,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!G.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};W.displayName="StaticImage",W.propTypes=F;const H=P(j);H.displayName="StaticImage",H.propTypes=F},8771:function(e,t,a){var r=a(7294),n=a(1883),i=a(8032),s=a(9175);t.Z=()=>{const e=(0,n.useStaticQuery)("2079442891"),{author:t,social:a}=e.site.siteMetadata;return r.createElement("div",{style:{display:"flex",marginBottom:(0,s.qZ)(2.5)}},r.createElement(i.G,{alt:t.name,style:{marginRight:(0,s.qZ)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"},image:e.avatar.childImageSharp.gatsbyImageData}),r.createElement("p",{style:{margin:0}},r.createElement("strong",null,t.name)," ",t.summary," ",r.createElement("a",{href:"https://www.github.com/"+a.github},"Go to github")))}}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-3921f61efc9011d443a4.js.map