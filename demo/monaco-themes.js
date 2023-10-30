/*!
 * monaco-themes
 * Version - 0.4.4
 * Author - Brijesh <brijesh@bitwiser.in>
 */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.MonacoThemes=n():e.MonacoThemes=n()}(self,(function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){var r=t(1);function i(e){var n=function(e){return"object"==typeof e?e:"#"==e[0]?e.match(/^#(..)(..)(..)/).slice(1).map((function(e){return parseInt(e,16)})):e.match(/\(([^,]+),([^,]+),([^,]+)/).slice(1).map((function(e){return parseInt(e,10)}))}(e);return(.21*n[0]+.72*n[1]+.07*n[2])/255}function o(e){if(!e.length)return null;if(4==e.length&&(e=e.replace(/[a-fA-F\d]/g,"$&$&")),7==e.length)return e;if(9==e.length)return e;e.match(/^#(..)(..)(..)(..)$/)||console.error("can't parse color",e);var n=e.match(/^#(..)(..)(..)(..)$/).slice(1).map((function(e){return parseInt(e,16)}));return n[3]=(n[3]/255).toPrecision(2),"rgba("+n.join(", ")+")"}var u=[{tm:"foreground",mn:"editor.foreground"},{tm:"background",mn:"editor.background"},{tm:"selection",mn:"editor.selectionBackground"},{tm:"inactiveSelection",mn:"editor.inactiveSelectionBackground"},{tm:"selectionHighlightColor",mn:"editor.selectionHighlightBackground"},{tm:"findMatchHighlight",mn:"editor.findMatchHighlightBackground"},{tm:"currentFindMatchHighlight",mn:"editor.findMatchBackground"},{tm:"hoverHighlight",mn:"editor.hoverHighlightBackground"},{tm:"wordHighlight",mn:"editor.wordHighlightBackground"},{tm:"wordHighlightStrong",mn:"editor.wordHighlightStrongBackground"},{tm:"findRangeHighlight",mn:"editor.findRangeHighlightBackground"},{tm:"findMatchHighlight",mn:"peekViewResult.matchHighlightBackground"},{tm:"referenceHighlight",mn:"peekViewEditor.matchHighlightBackground"},{tm:"lineHighlight",mn:"editor.lineHighlightBackground"},{tm:"rangeHighlight",mn:"editor.rangeHighlightBackground"},{tm:"caret",mn:"editorCursor.foreground"},{tm:"invisibles",mn:"editorWhitespace.foreground"},{tm:"guide",mn:"editorIndentGuide.background"},{tm:"activeGuide",mn:"editorIndentGuide.activeBackground"},{tm:"selectionBorder",mn:"editor.selectionHighlightBorder"}];["ansiBlack","ansiRed","ansiGreen","ansiYellow","ansiBlue","ansiMagenta","ansiCyan","ansiWhite","ansiBrightBlack","ansiBrightRed","ansiBrightGreen","ansiBrightYellow","ansiBrightBlue","ansiBrightMagenta","ansiBrightCyan","ansiBrightWhite"].forEach(e=>{u.push({tm:e,mn:"terminal."+e})});var a=[];n.parseTmTheme=function(e){var n=r.parse(e),t=n.settings[0].settings,c=n.gutterSettings,l=[];n.settings.forEach(e=>{if(e.settings){var n;n="string"==typeof e.scope?e.scope.replace(/^[,]+/,"").replace(/[,]+$/,"").split(","):Array.isArray(e.scope)?e.scope:[""];var t={},r=e.settings;r.foreground&&(t.foreground=o(r.foreground).toLowerCase().replace("#","")),r.background&&(t.background=o(r.background).toLowerCase().replace("#","")),r.fontStyle&&"string"==typeof r.fontStyle&&(t.fontStyle=r.fontStyle),n.forEach(e=>{if(e&&Object.keys(t).length){var n=Object.assign({},t,{token:e.trim()});l.push(n)}})}});var s={};return u.forEach(e=>{t[e.tm]&&(s[e.mn]=o(t[e.tm]))}),c&&a.forEach(e=>{c[e.tm]&&(s[e.mn]=o(c[e.tm]))}),{base:i(s["editor.background"])<.5?"vs-dark":"vs",inherit:!0,rules:l,colors:s}}},function(e,n,t){"use strict";function r(e,n,t){var r=e.length,i=0,o=1,u=0;function a(n){if(null===t)i+=n;else for(;n>0;){10===e.charCodeAt(i)?(i++,o++,u=0):(i++,u++),n--}}function c(e){null===t?i=e:a(e-i)}function l(){for(;i<r;){var n=e.charCodeAt(i);if(32!==n&&9!==n&&13!==n&&10!==n)break;a(1)}}function s(n){return e.substr(i,n.length)===n&&(a(n.length),!0)}function f(n){var t=e.indexOf(n,i);c(-1!==t?t+n.length:r)}function g(n){var t=e.indexOf(n,i);if(-1!==t){var o=e.substring(i,t);return c(t+n.length),o}o=e.substr(i);return c(r),o}r>0&&65279===e.charCodeAt(0)&&(i=1);var d=0,h=null,p=[],m=[],y=null;function v(e,n){p.push(d),m.push(h),d=e,h=n}function k(){if(0===p.length)return b("illegal state stack");d=p.pop(),h=m.pop()}function b(n){throw new Error("Near offset "+i+": "+n+" ~~~"+e.substr(i,50)+"~~~")}var B,H,x,C={enterDict:function(){if(null===y)return b("missing <key>");var e={};null!==t&&(e[t]={filename:n,line:o,char:u}),h[y]=e,y=null,v(1,e)},enterArray:function(){if(null===y)return b("missing <key>");var e=[];h[y]=e,y=null,v(2,e)}},w={enterDict:function(){var e={};null!==t&&(e[t]={filename:n,line:o,char:u}),h.push(e),v(1,e)},enterArray:function(){var e=[];h.push(e),v(2,e)}};function S(){if(1!==d)return b("unexpected </dict>");k()}function j(){return 1===d?b("unexpected </array>"):2!==d?b("unexpected </array>"):void k()}function M(e){if(1===d){if(null===y)return b("missing <key>");h[y]=e,y=null}else 2===d?h.push(e):h=e}function A(e){if(isNaN(e))return b("cannot parse float");if(1===d){if(null===y)return b("missing <key>");h[y]=e,y=null}else 2===d?h.push(e):h=e}function O(e){if(isNaN(e))return b("cannot parse integer");if(1===d){if(null===y)return b("missing <key>");h[y]=e,y=null}else 2===d?h.push(e):h=e}function I(e){if(1===d){if(null===y)return b("missing <key>");h[y]=e,y=null}else 2===d?h.push(e):h=e}function P(e){if(1===d){if(null===y)return b("missing <key>");h[y]=e,y=null}else 2===d?h.push(e):h=e}function _(e){if(1===d){if(null===y)return b("missing <key>");h[y]=e,y=null}else 2===d?h.push(e):h=e}function E(e){if(e.isClosed)return"";var n=g("</");return f(">"),n.replace(/&#([0-9]+);/g,(function(e,n){return String.fromCodePoint(parseInt(n,10))})).replace(/&#x([0-9a-f]+);/g,(function(e,n){return String.fromCodePoint(parseInt(n,16))})).replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g,(function(e){switch(e){case"&amp;":return"&";case"&lt;":return"<";case"&gt;":return">";case"&quot;":return'"';case"&apos;":return"'"}return e}))}for(;i<r&&(l(),!(i>=r));){var T=e.charCodeAt(i);if(a(1),60!==T)return b("expected <");if(i>=r)return b("unexpected end of input");var D=e.charCodeAt(i);if(63!==D)if(33!==D){if(47===D){if(a(1),l(),s("plist")){f(">");continue}if(s("dict")){f(">"),S();continue}if(s("array")){f(">"),j();continue}return b("unexpected closed tag")}var G=(H=void 0,x=void 0,H=g(">"),x=!1,47===H.charCodeAt(H.length-1)&&(x=!0,H=H.substring(0,H.length-1)),{name:H.trim(),isClosed:x});switch(G.name){case"dict":1===d?C.enterDict():2===d?w.enterDict():(h={},null!==t&&(h[t]={filename:n,line:o,char:u}),v(1,h)),G.isClosed&&S();continue;case"array":1===d?C.enterArray():2===d?w.enterArray():v(2,h=[]),G.isClosed&&j();continue;case"key":B=E(G),1!==d?b("unexpected <key>"):null!==y?b("too many <key>"):y=B;continue;case"string":M(E(G));continue;case"real":A(parseFloat(E(G)));continue;case"integer":O(parseInt(E(G),10));continue;case"date":I(new Date(E(G)));continue;case"data":P(E(G));continue;case"true":E(G),_(!0);continue;case"false":E(G),_(!1);continue}if(!/^plist/.test(G.name))return b("unexpected opened tag "+G.name)}else{if(a(1),s("--")){f("--\x3e");continue}f(">")}else a(1),f("?>")}return h}n.__esModule=!0,n.parse=n.parseWithLocation=void 0,n.parseWithLocation=function(e,n,t){return r(e,n,t)},n.parse=function(e){return r(e,null,null)}}])}));