"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6273],{8869:function(n,t,r){r.d(t,{Z:function(){return g}});var e=r(2228),i=r(2322),o=(r(2784),r(5505)),u=r(3980),a={align:(0,u.oneOf)(["baseline","start","center","end","stretch"]),children:u.any.isRequired,className:u.string,columnRef:u.any,flex:u.bool,justify:(0,u.oneOf)(["start","center","end","between","around","initial","inherit"]),md:u.number,lg:u.number,offset:(0,u.shape)({sm:u.number,md:u.number,lg:u.number,xl:u.number}),sm:u.number,xl:u.number};function c(){var n=(0,e.Z)(["\n    display: ",";\n  "]);return c=function(){return n},n}function l(){var n=(0,e.Z)(["\n    align-items: ",";\n  "]);return l=function(){return n},n}function f(){var n=(0,e.Z)(["\n    justify-content: ",";\n  "]);return f=function(){return n},n}function s(){var n=(0,e.Z)(["\n  box-sizing: border-box;\n  height: 100%;\n  margin-left: unset;\n  min-height: 1px;\n  position: relative;\n  padding-left: ","px;\n  padding-right: ","px;\n  width: 100%;\n\n  ","\n\n  ","\n\n  ","\n\n  /* SM Medium devices (tablets, 576px and up) */\n  @media (min-width: 0) {\n    flex: 0 0 ","%;\n    margin-left: ","%;\n    max-width: ","%;\n  }\n\n  /* MD Medium devices (tablets, 768px and up) */\n  @media (min-width: ","px) {\n    flex: 0 0 ","%;\n    margin-left: ","%;\n    max-width: ","%;\n  }\n\n  /* LG Large devices (desktops, 992px and up) */\n  @media (min-width: ","px) {\n    flex: 0 0 ","%;\n    margin-left: ","%;\n    max-width: ","%;\n  }\n\n  /* XL Extra large devices (large desktops, 1200px and up) */\n  @media (min-width: ","px) {\n    flex: 0 0 ","%;\n    margin-left: ","%;\n    max-width: ","%;\n  }\n"]);return s=function(){return n},n}var d=function(n){var t=n.align,r=void 0===t?"center":t,e=n.children,o=n.className,u=n.columnRef,a=n.flex,c=void 0!==a&&a,l=n.justify,f=void 0===l?"center":l,s=n.offset,d=void 0===s?{}:s,g=n.sm,v=n.md,p=n.lg,h=n.xl;return g=void 0!==g?g:0,v=void 0!==v?v:g,p=void 0!==p?p:v,h=void 0!==h?h:p,d.sm=void 0!==d.sm?d.sm:0,d.md=void 0!==d.md?d.md:d.sm,d.lg=void 0!==d.lg?d.lg:d.md,d.xl=void 0!==d.xl?d.xl:d.lg,(0,i.jsx)(m,{align:r,children:e,className:o,flex:c,justify:f,offset:d,sm:g,md:v,lg:p,xl:h,ref:u})},m=o.ZP.div.withConfig({componentId:"sc-2855ab86-0"})(s(),(function(n){return n.theme.GRID.gutterWidth/2}),(function(n){return n.theme.GRID.gutterWidth/2}),(function(n){var t=n.flex;return(0,o.iv)(c(),t&&"flex")}),(function(n){var t=n.align,r=n.flex;return(0,o.iv)(l(),r&&t)}),(function(n){var t=n.flex,r=n.justify;return(0,o.iv)(f(),t&&r)}),(function(n){var t=n.sm;return t?(100/(12/t)).toFixed(5):100}),(function(n){var t=n.offset;return t.sm?(100/12*t.sm).toFixed(5):0}),(function(n){var t=n.sm;return t?(100/(12/t)).toFixed(5):100}),(function(n){return n.theme.GRID.breakpoints.md}),(function(n){return(100/(12/n.md)).toFixed(5)}),(function(n){return(100/12*n.offset.md).toFixed(5)}),(function(n){return(100/(12/n.md)).toFixed(5)}),(function(n){return n.theme.GRID.breakpoints.lg}),(function(n){return(100/(12/n.lg)).toFixed(5)}),(function(n){return(100/12*n.offset.lg).toFixed(5)}),(function(n){return(100/(12/n.lg)).toFixed(5)}),(function(n){return n.theme.GRID.breakpoints.xl}),(function(n){return(100/(12/n.xl)).toFixed(5)}),(function(n){return(100/12*n.offset.xl).toFixed(5)}),(function(n){return(100/(12/n.xl)).toFixed(5)}));d.propTypes=a;var g=d},9772:function(n,t,r){var e=r(2228),i=r(2322),o=(r(2784),r(3980)),u=r(5505);function a(){var n=(0,e.Z)(["\n    margin-left: -","px;\n    margin-right: -","px;\n  "]);return a=function(){return n},n}function c(){var n=(0,e.Z)(["\n      margin-left: -","px;\n      margin-right: -","px;\n    "]);return c=function(){return n},n}function l(){var n=(0,e.Z)(["\n    align-items: ",";\n  "]);return l=function(){return n},n}function f(){var n=(0,e.Z)(["\n    justify-content: ",";\n  "]);return f=function(){return n},n}function s(){var n=(0,e.Z)(["\n  display: flex;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-wrap: ",";\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n"]);return s=function(){return n},n}var d=function(n){var t=n.align,r=void 0===t?"stretch":t,e=n.children,o=n.className,u=n.justify,a=void 0===u?"start":u,c=n.noGutter,l=void 0!==c&&c,f=n.noWrap,s=void 0!==f&&f,d=n.style,g=void 0===d?{}:d;return(0,i.jsx)(m,{align:r,children:e,className:o,justify:a,noGutter:l,noWrap:s,style:g})},m=u.ZP.div.withConfig({componentId:"sc-8d7c5c9e-0"})(s(),(function(n){return n.noWrap?"nowrap":"wrap"}),(function(n){var t=n.theme;return(0,u.iv)(a(),t.GRID.gutterWidth/2,t.GRID.gutterWidth/2)}),(function(n){var t=n.noGutter,r=n.theme;return t&&(0,u.iv)(c(),r.GRID.gutterWidth,r.GRID.gutterWidth)}),(function(n){var t=n.align;return(0,u.iv)(l(),t)}),(function(n){var t=n.justify;return(0,u.iv)(f(),t)}));d.propTypes={align:(0,o.oneOf)(["baseline","start","center","end","stretch"]),children:o.node.isRequired,className:o.string,justify:(0,o.oneOf)(["start","center","end","between","around","initial","inherit"]),noGutter:o.bool,noWrap:o.bool,style:(0,o.objectOf)((0,o.oneOfType)([o.number,o.string]))},t.Z=d},1790:function(n,t,r){r.d(t,{Z:function(){return g}});var e=r(2228),i=r(2322),o=(r(2784),r(5505)),u=r(3980),a=r(6423),c={align:u.string,children:(0,u.oneOfType)([u.any,u.element,u.string,u.node]).isRequired,className:u.any,context:(0,u.oneOf)(Object.values(a.Z)),itemProp:u.string,noMargin:u.bool,noWrap:u.bool,rel:u.string,tag:u.string};function l(){var n=(0,e.Z)(["\n    font-family: ",";\n    font-size: ",";\n    line-height: ",";\n    margin: ",";\n    text-transform: ",";\n  "]);return l=function(){return n},n}function f(){var n=(0,e.Z)(["\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    "]);return f=function(){return n},n}function s(){var n=(0,e.Z)(["\n  color: ",";\n  font-weight: normal;\n  position: relative;\n  text-align: ",";\n\n  ","\n\n  ","\n"]);return s=function(){return n},n}var d=function(n){var t=n.align,r=void 0===t?"iniital":t,e=n.children,o=n.className,u=n.context,a=void 0===u?"dark":u,c=n.itemProp,l=void 0===c?"name headline":c,f=n.noMargin,s=n.noWrap,d=void 0!==s&&s,g=n.rel,v=void 0===g?"bookmark":g,p=n.tag,h=void 0===p?"h1":p;return(0,i.jsx)(m,{align:r,as:"".concat(h),className:o,context:a,noMargin:f,noWrap:d,itemProp:l,rel:v,tag:h,children:(null===e||void 0===e?void 0:e.__html)?(0,i.jsx)("span",{dangerouslySetInnerHTML:e}):e})},m=o.ZP.span.withConfig({componentId:"sc-5ea64a9e-0"})(s(),(function(n){var t=n.context;return n.theme.COLOUR[t]}),(function(n){return n.align}),(function(n){var t=n.noMargin,r=n.tag,e=n.theme;return(0,o.iv)(l(),e.HEADINGS[r].fontFamily,e.HEADINGS[r].fontSize,e.HEADINGS[r].lineHeight,t?0:"none",e.HEADINGS[r].textTransform)}),(function(n){return n.noWrap&&(0,o.iv)(f())}));d.propTypes=c;var g=d},4541:function(n,t,r){r.d(t,{Z:function(){return w}});var e=r(2228),i=r(2322),o=(r(2784),r(5505)),u=r(3224),a=r(5889),c=r(7328),l=r(3980),f=r(3171),s=r(1122),d=r(6423),m=r(263),g=(0,c.Z)({align:l.string,children:l.node,className:l.string,context:(0,l.oneOf)(Object.values(d.Z)),size:(0,l.oneOf)(Object.values(m.Z)),weight:(0,l.oneOf)(["light","regular","semiBold","bold"])},f.Z,s.Z);function v(){var n=(0,e.Z)(["\n    font-size: ",";\n    line-height: ",";\n  "]);return v=function(){return n},n}function p(){var n=(0,e.Z)(["\n      font-weight: ",";\n    "]);return p=function(){return n},n}function h(){var n=(0,e.Z)(["\n  color: ",";\n  margin: 0;\n  padding: 0;\n  text-align: ",";\n\n  ","\n\n  ","\n  ","\n\n  ","\n"]);return h=function(){return n},n}var x,b,Z=function(n){var t=n.align,r=n.children,e=n.className,o=n.context,u=void 0===o?"dark":o,a=n.size,c=void 0===a?"md":a,l=n.weight;return(0,i.jsx)(y,{align:t,className:e,context:u,size:c,weight:l,children:r})},y=o.ZP.p.withConfig({componentId:"sc-cdd408d5-0"})(h(),(function(n){var t=n.context,r=n.theme,e=r.COLOUR,i=r.TEXT;return t?e[t]:i.DEFAULT_COLOUR}),(function(n){return n.align}),(function(n){var t=n.size,r=n.theme;return(0,o.iv)(v(),null!==(x=r.TEXT.FONT_SIZE[t])&&void 0!==x?x:"1rem",null!==(b=r.TEXT.LINE_HEIGHT[t])&&void 0!==b?b:"1rem")}),(function(n){return(0,a.Z)(n)}),(function(n){return(0,u.Z)(n)}),(function(n){var t=n.weight;return t&&(0,o.iv)(p(),"light"===t?400:"regular"===t?500:"semiBold"===t?600:"bold"===t?700:500)}));Z.propTypes=g;var w=Z},6273:function(n,t,r){r.r(t),r.d(t,{default:function(){return nn}});var e=r(2228),i=r(2322),o=r(2784),u=r(3980),a=r(5505),c=r(3964),l=r(7328),f=r(6670),s=r(6383),d=r(8869),m=r(1790),g=r(5127),v=r(4485);function p(){var n=(0,e.Z)(["\n  border: 1px solid rgba(0, 0, 0, 0.125);\n"]);return p=function(){return n},n}function h(){var n=(0,e.Z)(["\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0;\n\n  &:first-child {\n    border-top: 0;\n  }\n  &:last-child {\n    border-bottom: 0;\n    margin-bottom: 0;\n  }\n"]);return h=function(){return n},n}function x(){var n=(0,e.Z)(["\n  margin-bottom: -1px;\n  padding: 0.75rem 1.25rem;\n"]);return x=function(){return n},n}function b(){var n=(0,e.Z)(["\n  position: relative;\n  ","\n  ","\n  ","\n"]);return b=function(){return n},n}function Z(){var n=(0,e.Z)(["\n  color: ",";\n  float: left;\n  margin: 0.1rem 1rem 0 0;\n"]);return Z=function(){return n},n}var y={border:u.bool,children:u.any.isRequired,className:u.string,flush:u.bool,group:u.bool,icon:u.string,prefix:u.string},w=function(n){var t=n.border,r=n.children,e=n.className,o=n.flush,u=n.group,a=n.icon,c=n.prefix;return(0,i.jsxs)(T,{border:t,className:e,flush:o,group:u,children:[a&&(0,i.jsx)(R,{"aria-hidden":"true",icon:a,prefix:c,size:"2x"}),r]})},j=(0,a.iv)(p()),O=(0,a.iv)(h()),I=(0,a.iv)(x()),T=a.ZP.li.withConfig({componentId:"sc-d828c0c0-0"})(b(),(function(n){var t=n.border,r=n.flush,e=n.group;return(t||e||r)&&I}),(function(n){var t=n.border,r=n.flush;return(t||r)&&j}),(function(n){return n.flush&&O})),R=(0,a.ZP)(g.Z).withConfig({componentId:"sc-d828c0c0-1"})(Z(),(function(n){return n.theme.COLOUR.secondary}));w.propTypes=y;var N=w,F={align:u.string,border:u.bool,children:u.node.isRequired,className:u.string,direction:u.string,flush:u.bool,group:u.bool,inline:u.bool,style:u.object,unstyled:u.bool};function C(){var n=(0,e.Z)(["\n  margin: -1px;\n"]);return C=function(){return n},n}function E(){var n=(0,e.Z)(["\n  align-items: center;\n  display: inline-flex;\n"]);return E=function(){return n},n}function G(){var n=(0,e.Z)(["\n  list-style: none;\n  margin: 0;\n  padding-left: 0;\n"]);return G=function(){return n},n}function k(){var n=(0,e.Z)(["\n  flex-direction: ",";\n  justify-content: ",";\n  ","\n  ","\n  ","\n"]);return k=function(){return n},n}var P=function(n){n.align;var t=n.border,r=n.children,e=n.className,o=void 0===e?"":e,u=(n.direction,n.flush),a=n.group,c=void 0!==a&&a,l=n.inline,f=void 0!==l&&l,s=n.style,d=n.unstyled,m=void 0!==d&&d;return(0,i.jsx)(L,{border:t,className:o,flush:u,group:c,inline:f,role:"list",style:s,unstyled:m,children:r})},z=(0,a.iv)(C()),D=(0,a.iv)(E()),W=(0,a.iv)(G()),L=a.ZP.ul.withConfig({componentId:"sc-ef2c4010-0"})(k(),(function(n){return n.direction||"column"}),(function(n){return n.align}),(function(n){return n.group?z:""}),(function(n){return n.inline?D:""}),(function(n){var t=n.border,r=n.flush,e=n.group;return n.unstyled||t||r||e?W:""}));P.propTypes=F,P.ListItem=N;var M=P,H=r(4541);function S(){var n=(0,e.Z)(["\n  font-size: 1rem;\n  text-transform: uppercase;\n\n  ","\n"]);return S=function(){return n},n}function _(){var n=(0,e.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return _=function(){return n},n}function q(){var n=(0,e.Z)(["\n  margin-bottom: 0.25rem;\n  padding-right: 1rem;\n\n  &:last-child {\n    margin-bottom: 1rem;\n  }\n"]);return q=function(){return n},n}function U(){var n=(0,e.Z)(["\n  margin: 0 0.5rem 0 0;\n"]);return U=function(){return n},n}var A=(0,a.ZP)(m.Z).withConfig({componentId:"sc-2de3965c-0"})(S(),(function(n){var t=n.align,r=n.theme;return"\n    margin: ".concat(r.FOOTER.headerMargin,";\n    text-align: ").concat(t,";\n  ")})),X=(0,a.ZP)(M).withConfig({componentId:"sc-2de3965c-1"})(_()),B=(0,a.ZP)(M.ListItem).withConfig({componentId:"sc-2de3965c-2"})(q()),J=(0,a.ZP)(g.Z).withConfig({componentId:"sc-2de3965c-3"})(U()),K=function(n){return n.columns.map((function(n,t){return(0,i.jsx)(d.Z,(0,f.Z)((0,l.Z)({align:n.align,offset:n.offset},n.size),{children:Object.entries(n).map((function(n,r){var e=(0,s.Z)(n,2),u=e[0],a=e[1];switch(u){case"header":return(0,i.jsx)(A,{align:a.align,context:a.context,children:a.content},"".concat(a.content).concat(t).concat(r));case"formatter":return a("".concat(t).concat(r));case"links":return function(n,t){var r=n.align,e=n.border,o=n.context,u=n.direction,a=n.items;return(0,i.jsx)(X,{align:r,direction:u,unstyled:!0,children:a.map((function(n){var t=n.icon,r=n.iconPrefix,u=n.id,a=n.name,c=n.to,l=n.locale;return(0,i.jsx)(B,{children:(0,i.jsxs)(v.Z,{border:e,context:o,to:c,passHref:!0,locale:l,children:[t&&(0,i.jsx)(J,{context:"primary",icon:t,prefix:r}),a]})},u)}))},"".concat(a[0]).concat(t))}(a,"".concat(t).concat(r));default:return function(n,t){var r=n.align,e=n.items;return(0,i.jsx)(o.Fragment,{children:null===e||void 0===e?void 0:e.map((function(n,t){var e=n.content,u=n.icon;return(0,i.jsxs)(o.Fragment,{children:[u&&(0,i.jsx)(J,{context:"primary",icon:u}),(0,i.jsx)(H.Z,{align:r,children:e})]},t)}))},t)}(a,"".concat(t).concat(r))}}))}),t)}))},Q=r(9772);function V(){var n=(0,e.Z)(["\n  ","\n\n  ","\n"]);return V=function(){return n},n}var Y=function(n){var t=n.columns,r=n.fixed,e=void 0!==r&&r;return(0,i.jsx)($,{"data-cy":"footer",fixed:e,children:(0,i.jsx)(c.Z,{children:(0,i.jsx)(Q.Z,{children:K({columns:t})})})})},$=a.ZP.footer.withConfig({componentId:"sc-dd288c69-0"})(V(),(function(n){var t=n.theme;return"\n    background: ".concat(t.FOOTER.background,";\n    border-top: 2px solid ").concat(t.COLOUR.primary,";\n    color: ").concat(t.FOOTER.colour,";\n    font-size: ").concat(t.FOOTER.fontSize,";\n    padding-top: ").concat(t.FOOTER.paddingTop,";\n  ")}),(function(n){return n.fixed&&"\n      bottom: 0;\n      position: fixed;\n      left: 0;\n      width: 100%;\n      z-index: 1;\n    "}));Y.propTypes={columns:(0,u.arrayOf)((0,u.shape)({header:(0,u.shape)({align:u.string,content:(0,u.oneOfType)([u.object,u.string])}),formatter:u.func,links:(0,u.shape)({align:u.string,items:(0,u.arrayOf)((0,u.shape)({id:u.string,icon:u.string,name:u.string,to:(0,u.oneOfType)([u.object,u.string])}))}),offset:(0,u.shape)({sm:u.number,md:u.number,lg:u.number,xl:u.number}),size:(0,u.shape)({sm:u.number,md:u.number,lg:u.number,xl:u.number}),style:u.object})).isRequired,fixed:u.bool};var nn=Y}}]);