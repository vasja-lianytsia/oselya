(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{163:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return v});a(192),a(99),a(66),a(43),a(196);var i=a(8),r=a.n(i),n=a(0),o=a.n(n),s=a(169),d=a.n(s),l=a(167),c=a(174),u=l.c.h1.withConfig({displayName:"item__Heading",componentId:"sc-195cep2-0"})(["font-weight:900;font-size:1.5em;margin:95px 0 20px 0;@media (max-width:710px){padding:0px 15px;}"]),f=Object(l.c)(d.a).withConfig({displayName:"item__ImgStyled",componentId:"sc-195cep2-1"})(["width:100%;height:400px;"]),p=l.c.p.withConfig({displayName:"item__Price",componentId:"sc-195cep2-2"})(["margin:20px 0;padding:10px;font-weight:700;background:rgba(122,189,51,0.7);"]),m=l.c.p.withConfig({displayName:"item__Description",componentId:"sc-195cep2-3"})(["margin:20px 0;padding:10px;"]),g=l.c.select.withConfig({displayName:"item__Dropdown",componentId:"sc-195cep2-4"})(["display:block;padding:10px;margin:10px 0;background:",";font-weight:700;border:none;outline:none;"],function(e){return e.theme.colors.secondaryAccent}),h=l.c.option.withConfig({displayName:"item__DropdownOption",componentId:"sc-195cep2-5"})(["padding:10px;background:",";font-weight:700;border:none;outline:none;"],function(e){return e.theme.colors.secondaryAccent}),y=l.c.button.withConfig({displayName:"item__BuyButton",componentId:"sc-195cep2-6"})(["padding:20px;background:",";font-weight:700;@media (max-width:710px){margin:15px 0;}"],function(e){return e.theme.colors.secondaryAccent}),b=function(e){function t(){for(var t,a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))||this).state={selected:t.props.data.markdownRemark.frontmatter.customField.values[0].name},t.setSelected=function(e){t.setState({selected:e})},t.createString=function(e){return e.map(function(e){var t=e.priceChange>=0?"[+"+e.priceChange+"]":"["+e.priceChange+"]";return""+e.name+t}).join("|")},t.updatePrice=function(e,a){return(e+a.find(function(e){return e.name===t.state.selected}).priceChange).toFixed(2)},t}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props.data.markdownRemark,a=this.props.data.site.siteMetadata.title;return o.a.createElement(c.a,{location:this.props.location,title:a},o.a.createElement("div",{className:"container"},o.a.createElement(u,null,t.frontmatter.title),o.a.createElement(f,{fluid:t.frontmatter.image.childImageSharp.fluid}),o.a.createElement(p,null,"UAH ",this.updatePrice(t.frontmatter.price,t.frontmatter.customField.values)),o.a.createElement(m,null,t.frontmatter.description),o.a.createElement(g,{id:t.frontmatter.customField.name,onChange:function(t){return e.setSelected(t.target.value)},value:this.state.selected},t.frontmatter.customField.values.map(function(e){return o.a.createElement(h,{key:e.name},e.name)})),o.a.createElement(y,{className:"snipcart-add-item","data-item-id":t.frontmatter.id,"data-item-price":t.frontmatter.price,"data-item-name":t.frontmatter.title,"data-item-description":t.frontmatter.description,"data-item-image":t.frontmatter.image.childImageSharp.fluid.src,"data-item-url":"https://gatsby-snipcart-starter.netlify.com"+t.fields.slug,"data-item-custom1-name":t.frontmatter.customField?t.frontmatter.customField.name:null,"data-item-custom1-options":this.createString(t.frontmatter.customField.values),"data-item-custom1-value":this.state.selected},"Add to basket")))},t}(o.a.Component);t.default=b;var v="3022131306"},169:function(e,t,a){"use strict";var i=a(10);t.__esModule=!0,t.default=void 0;var r,n=i(a(8)),o=i(a(41)),s=i(a(95)),d=i(a(96)),l=i(a(0)),c=i(a(5)),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,h=g&&window.IntersectionObserver,y=new WeakMap;var b=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},v=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+i+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+s+d+a+r+t+o+n+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},w=l.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return l.default.createElement("img",(0,d.default)({sizes:a,srcSet:i,src:r},f,{onLoad:o,onError:c,ref:t,loading:u,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});w.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var S=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=g&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&h&&!t.critical&&!a.seenBefore;var i=t.critical||g&&(m||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=b(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,g=e.fixed,h=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,S=e.itemProp,E=e.loading,I=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,d.default)({opacity:I?1:0,transition:L?"opacity "+y+"ms":"none"},s),C="boolean"==typeof h?"lightgray":h,R={transitionDelay:y+"ms"},O=(0,d.default)({opacity:this.state.imgLoaded?0:1},L&&R,s,f),k={title:t,alt:this.state.isVisible?"":a,style:O,className:p};if(m){var z=m;return l.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},l.default.createElement(b,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),C&&l.default.createElement(b,{title:t,style:(0,d.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&R)}),z.base64&&l.default.createElement(w,(0,d.default)({src:z.base64},k)),z.tracedSVG&&l.default.createElement(w,(0,d.default)({src:z.tracedSVG},k)),this.state.isVisible&&l.default.createElement("picture",null,z.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),l.default.createElement(w,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,d.default)({alt:a,title:t,loading:E},z))}}))}if(g){var N=g,_=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},n);return"inherit"===n.display&&delete _.display,l.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},C&&l.default.createElement(b,{title:t,style:(0,d.default)({backgroundColor:C,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},L&&R)}),N.base64&&l.default.createElement(w,(0,d.default)({src:N.base64},k)),N.tracedSVG&&l.default.createElement(w,(0,d.default)({src:N.tracedSVG},k)),this.state.isVisible&&l.default.createElement("picture",null,N.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),l.default.createElement(w,{alt:a,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,d.default)({alt:a,title:t,loading:E},N))}}))}return null},t}(l.default.Component);S.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var E=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),I=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});S.propTypes={resolutions:E,sizes:I,fixed:E,fluid:I,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var L=S;t.default=L},192:function(e,t,a){"use strict";var i=a(9),r=a(193)(5),n=!0;"find"in[]&&Array(1).find(function(){n=!1}),i(i.P+i.F*n,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(65)("find")},193:function(e,t,a){var i=a(19),r=a(64),n=a(31),o=a(17),s=a(194);e.exports=function(e,t){var a=1==e,d=2==e,l=3==e,c=4==e,u=6==e,f=5==e||u,p=t||s;return function(t,s,m){for(var g,h,y=n(t),b=r(y),v=i(s,m,3),w=o(b.length),S=0,E=a?p(t,w):d?p(t,0):void 0;w>S;S++)if((f||S in b)&&(h=v(g=b[S],S,y),e))if(a)E[S]=h;else if(h)switch(e){case 3:return!0;case 5:return g;case 6:return S;case 2:E.push(g)}else if(c)return!1;return u?-1:l||c?c:E}}},194:function(e,t,a){var i=a(195);e.exports=function(e,t){return new(i(e))(t)}},195:function(e,t,a){var i=a(7),r=a(98),n=a(3)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),i(t)&&null===(t=t[n])&&(t=void 0)),void 0===t?Array:t}},196:function(e,t,a){var i=a(13).f,r=Function.prototype,n=/^\s*function ([^ (]*)/;"name"in r||a(11)&&i(r,"name",{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-templates-item-js-e13486f558e4e00f1ada.js.map