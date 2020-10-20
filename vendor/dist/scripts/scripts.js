/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
 !function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var o,a,l,h,c,u,f,d,_,g,p,m,v,E,T,y,C,I,A,b,D,S,w,N,O,k,P=function(t){var e=!1;function n(e){var n=this,s=!1;return t(this).one(i.TRANSITION_END,function(){s=!0}),setTimeout(function(){s||i.triggerTransitionEnd(n)},e),this}var i={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n,i=e.getAttribute("data-target");i&&"#"!==i||(i=e.getAttribute("href")||""),"#"===i.charAt(0)&&(n=i,i=n="function"==typeof t.escapeSelector?t.escapeSelector(n).substr(1):n.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1"));try{return t(document).find(i).length>0?i:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(n){t(n).trigger(e.end)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){var r=n[s],o=e[s],a=o&&i.isElement(o)?"element":(l=o,{}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(r).test(a))throw new Error(t.toUpperCase()+': Option "'+s+'" provided type "'+a+'" but expected type "'+r+'".')}var l}};return e=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},t.fn.emulateTransitionEnd=n,i.supportsTransitionEnd()&&(t.event.special[i.TRANSITION_END]={bindType:e.end,delegateType:e.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),i}(e),L=(a="alert",h="."+(l="bs.alert"),c=(o=e).fn[a],u={CLOSE:"close"+h,CLOSED:"closed"+h,CLICK_DATA_API:"click"+h+".data-api"},f="alert",d="fade",_="show",g=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){o.removeData(this._element,l),this._element=null},e._getRootElement=function(t){var e=P.getSelectorFromElement(t),n=!1;return e&&(n=o(e)[0]),n||(n=o(t).closest("."+f)[0]),n},e._triggerCloseEvent=function(t){var e=o.Event(u.CLOSE);return o(t).trigger(e),e},e._removeElement=function(t){var e=this;o(t).removeClass(_),P.supportsTransitionEnd()&&o(t).hasClass(d)?o(t).one(P.TRANSITION_END,function(n){return e._destroyElement(t,n)}).emulateTransitionEnd(150):this._destroyElement(t)},e._destroyElement=function(t){o(t).detach().trigger(u.CLOSED).remove()},t._jQueryInterface=function(e){return this.each(function(){var n=o(this),i=n.data(l);i||(i=new t(this),n.data(l,i)),"close"===e&&i[e](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),o(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),o.fn[a]=g._jQueryInterface,o.fn[a].Constructor=g,o.fn[a].noConflict=function(){return o.fn[a]=c,g._jQueryInterface},g),R=(m="button",E="."+(v="bs.button"),T=".data-api",y=(p=e).fn[m],C="active",I="btn",A="focus",b='[data-toggle^="button"]',D='[data-toggle="buttons"]',S="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+E+T,FOCUS_BLUR_DATA_API:"focus"+E+T+" blur"+E+T},k=function(){function t(t){this._element=t}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=p(this._element).closest(D)[0];if(n){var i=p(this._element).find(S)[0];if(i){if("radio"===i.type)if(i.checked&&p(this._element).hasClass(C))t=!1;else{var s=p(n).find(w)[0];s&&p(s).removeClass(C)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!p(this._element).hasClass(C),p(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!p(this._element).hasClass(C)),t&&p(this._element).toggleClass(C)},e.dispose=function(){p.removeData(this._element,v),this._element=null},t._jQueryInterface=function(e){return this.each(function(){var n=p(this).data(v);n||(n=new t(this),p(this).data(v,n)),"toggle"===e&&n[e]()})},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),p(document).on(O.CLICK_DATA_API,b,function(t){t.preventDefault();var e=t.target;p(e).hasClass(I)||(e=p(e).closest(N)),k._jQueryInterface.call(p(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,b,function(t){var e=p(t.target).closest(N)[0];p(e).toggleClass(A,/^focus(in)?$/.test(t.type))}),p.fn[m]=k._jQueryInterface,p.fn[m].Constructor=k,p.fn[m].noConflict=function(){return p.fn[m]=y,k._jQueryInterface},k),j=function(t){var e="carousel",n="bs.carousel",i="."+n,o=t.fn[e],a={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},l={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},h="next",c="prev",u="left",f="right",d={SLIDE:"slide"+i,SLID:"slid"+i,KEYDOWN:"keydown"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,LOAD_DATA_API:"load"+i+".data-api",CLICK_DATA_API:"click"+i+".data-api"},_="carousel",g="active",p="slide",m="carousel-item-right",v="carousel-item-left",E="carousel-item-next",T="carousel-item-prev",y={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},C=function(){function o(e,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(y.INDICATORS)[0],this._addEventListeners()}var C=o.prototype;return C.next=function(){this._isSliding||this._slide(h)},C.nextWhenVisible=function(){!document.hidden&&t(this._element).is(":visible")&&"hidden"!==t(this._element).css("visibility")&&this.next()},C.prev=function(){this._isSliding||this._slide(c)},C.pause=function(e){e||(this._isPaused=!0),t(this._element).find(y.NEXT_PREV)[0]&&P.supportsTransitionEnd()&&(P.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},C.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},C.to=function(e){var n=this;this._activeElement=t(this._element).find(y.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(d.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var s=e>i?h:c;this._slide(s,this._items[e])}},C.dispose=function(){t(this._element).off(i),t.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},C._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},C._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(d.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(t(this._element).on(d.MOUSEENTER,function(t){return e.pause(t)}).on(d.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&t(this._element).on(d.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},C._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},C._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(y.ITEM)),this._items.indexOf(e)},C._getItemByDirection=function(t,e){var n=t===h,i=t===c,s=this._getItemIndex(e),r=this._items.length-1;if((i&&0===s||n&&s===r)&&!this._config.wrap)return e;var o=(s+(t===c?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},C._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),s=this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),r=t.Event(d.SLIDE,{relatedTarget:e,direction:n,from:s,to:i});return t(this._element).trigger(r),r},C._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(g)}},C._slide=function(e,n){var i,s,r,o=this,a=t(this._element).find(y.ACTIVE_ITEM)[0],l=this._getItemIndex(a),c=n||a&&this._getItemByDirection(e,a),_=this._getItemIndex(c),C=Boolean(this._interval);if(e===h?(i=v,s=E,r=u):(i=m,s=T,r=f),c&&t(c).hasClass(g))this._isSliding=!1;else if(!this._triggerSlideEvent(c,r).isDefaultPrevented()&&a&&c){this._isSliding=!0,C&&this.pause(),this._setActiveIndicatorElement(c);var I=t.Event(d.SLID,{relatedTarget:c,direction:r,from:l,to:_});P.supportsTransitionEnd()&&t(this._element).hasClass(p)?(t(c).addClass(s),P.reflow(c),t(a).addClass(i),t(c).addClass(i),t(a).one(P.TRANSITION_END,function(){t(c).removeClass(i+" "+s).addClass(g),t(a).removeClass(g+" "+s+" "+i),o._isSliding=!1,setTimeout(function(){return t(o._element).trigger(I)},0)}).emulateTransitionEnd(600)):(t(a).removeClass(g),t(c).addClass(g),this._isSliding=!1,t(this._element).trigger(I)),C&&this.cycle()}},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s=r({},a,t(this).data());"object"==typeof e&&(s=r({},s,e));var l="string"==typeof e?e:s.slide;if(i||(i=new o(this,s),t(this).data(n,i)),"number"==typeof e)i.to(e);else if("string"==typeof l){if("undefined"==typeof i[l])throw new TypeError('No method named "'+l+'"');i[l]()}else s.interval&&(i.pause(),i.cycle())})},o._dataApiClickHandler=function(e){var i=P.getSelectorFromElement(this);if(i){var s=t(i)[0];if(s&&t(s).hasClass(_)){var a=r({},t(s).data(),t(this).data()),l=this.getAttribute("data-slide-to");l&&(a.interval=!1),o._jQueryInterface.call(t(s),a),l&&t(s).data(n).to(l),e.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(d.CLICK_DATA_API,y.DATA_SLIDE,C._dataApiClickHandler),t(window).on(d.LOAD_DATA_API,function(){t(y.DATA_RIDE).each(function(){var e=t(this);C._jQueryInterface.call(e,e.data())})}),t.fn[e]=C._jQueryInterface,t.fn[e].Constructor=C,t.fn[e].noConflict=function(){return t.fn[e]=o,C._jQueryInterface},C}(e),H=function(t){var e="collapse",n="bs.collapse",i="."+n,o=t.fn[e],a={toggle:!0,parent:""},l={toggle:"boolean",parent:"(string|element)"},h={SHOW:"show"+i,SHOWN:"shown"+i,HIDE:"hide"+i,HIDDEN:"hidden"+i,CLICK_DATA_API:"click"+i+".data-api"},c="show",u="collapse",f="collapsing",d="collapsed",_="width",g="height",p={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},m=function(){function i(e,n){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(n),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var i=t(p.DATA_TOGGLE),s=0;s<i.length;s++){var r=i[s],o=P.getSelectorFromElement(r);null!==o&&t(o).filter(e).length>0&&(this._selector=o,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var o=i.prototype;return o.toggle=function(){t(this._element).hasClass(c)?this.hide():this.show()},o.show=function(){var e,s,r=this;if(!this._isTransitioning&&!t(this._element).hasClass(c)&&(this._parent&&0===(e=t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(e=null),!(e&&(s=t(e).not(this._selector).data(n))&&s._isTransitioning))){var o=t.Event(h.SHOW);if(t(this._element).trigger(o),!o.isDefaultPrevented()){e&&(i._jQueryInterface.call(t(e).not(this._selector),"hide"),s||t(e).data(n,null));var a=this._getDimension();t(this._element).removeClass(u).addClass(f),this._element.style[a]=0,this._triggerArray.length>0&&t(this._triggerArray).removeClass(d).attr("aria-expanded",!0),this.setTransitioning(!0);var l=function(){t(r._element).removeClass(f).addClass(u).addClass(c),r._element.style[a]="",r.setTransitioning(!1),t(r._element).trigger(h.SHOWN)};if(P.supportsTransitionEnd()){var _="scroll"+(a[0].toUpperCase()+a.slice(1));t(this._element).one(P.TRANSITION_END,l).emulateTransitionEnd(600),this._element.style[a]=this._element[_]+"px"}else l()}}},o.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(c)){var n=t.Event(h.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",P.reflow(this._element),t(this._element).addClass(f).removeClass(u).removeClass(c),this._triggerArray.length>0)for(var s=0;s<this._triggerArray.length;s++){var r=this._triggerArray[s],o=P.getSelectorFromElement(r);if(null!==o)t(o).hasClass(c)||t(r).addClass(d).attr("aria-expanded",!1)}this.setTransitioning(!0);var a=function(){e.setTransitioning(!1),t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)};this._element.style[i]="",P.supportsTransitionEnd()?t(this._element).one(P.TRANSITION_END,a).emulateTransitionEnd(600):a()}}},o.setTransitioning=function(t){this._isTransitioning=t},o.dispose=function(){t.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},o._getConfig=function(t){return(t=r({},a,t)).toggle=Boolean(t.toggle),P.typeCheckConfig(e,t,l),t},o._getDimension=function(){return t(this._element).hasClass(_)?_:g},o._getParent=function(){var e=this,n=null;P.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=t(this._config.parent)[0];var s='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(s).each(function(t,n){e._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},o._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(c);n.length>0&&t(n).toggleClass(d,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(e){var n=P.getSelectorFromElement(e);return n?t(n)[0]:null},i._jQueryInterface=function(e){return this.each(function(){var s=t(this),o=s.data(n),l=r({},a,s.data(),"object"==typeof e&&e);if(!o&&l.toggle&&/show|hide/.test(e)&&(l.toggle=!1),o||(o=new i(this,l),s.data(n,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),i}();return t(document).on(h.CLICK_DATA_API,p.DATA_TOGGLE,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var i=t(this),s=P.getSelectorFromElement(this);t(s).each(function(){var e=t(this),s=e.data(n)?"toggle":i.data();m._jQueryInterface.call(e,s)})}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=o,m._jQueryInterface},m}(e),W=function(t){var e="dropdown",i="bs.dropdown",o="."+i,a=".data-api",l=t.fn[e],h=new RegExp("38|40|27"),c={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click"+o+a,KEYDOWN_DATA_API:"keydown"+o+a,KEYUP_DATA_API:"keyup"+o+a},u="disabled",f="show",d="dropup",_="dropright",g="dropleft",p="dropdown-menu-right",m="dropdown-menu-left",v="position-static",E='[data-toggle="dropdown"]',T=".dropdown form",y=".dropdown-menu",C=".navbar-nav",I=".dropdown-menu .dropdown-item:not(.disabled)",A="top-start",b="top-end",D="bottom-start",S="bottom-end",w="right-start",N="left-start",O={offset:0,flip:!0,boundary:"scrollParent"},k={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},L=function(){function a(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var l=a.prototype;return l.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(u)){var e=a._getParentFromElement(this._element),i=t(this._menu).hasClass(f);if(a._clearMenus(),!i){var s={relatedTarget:this._element},r=t.Event(c.SHOW,s);if(t(e).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof n)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o=this._element;t(e).hasClass(d)&&(t(this._menu).hasClass(m)||t(this._menu).hasClass(p))&&(o=e),"scrollParent"!==this._config.boundary&&t(e).addClass(v),this._popper=new n(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===t(e).closest(C).length&&t("body").children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(f),t(e).toggleClass(f).trigger(t.Event(c.SHOWN,s))}}}},l.dispose=function(){t.removeData(this._element,i),t(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},l.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},l._addEventListeners=function(){var e=this;t(this._element).on(c.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},l._getConfig=function(n){return n=r({},this.constructor.Default,t(this._element).data(),n),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},l._getMenuElement=function(){if(!this._menu){var e=a._getParentFromElement(this._element);this._menu=t(e).find(y)[0]}return this._menu},l._getPlacement=function(){var e=t(this._element).parent(),n=D;return e.hasClass(d)?(n=A,t(this._menu).hasClass(p)&&(n=b)):e.hasClass(_)?n=w:e.hasClass(g)?n=N:t(this._menu).hasClass(p)&&(n=S),n},l._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},l._getPopperConfig=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset,{placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i);if(n||(n=new a(this,"object"==typeof e?e:null),t(this).data(i,n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},a._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=t.makeArray(t(E)),s=0;s<n.length;s++){var r=a._getParentFromElement(n[s]),o=t(n[s]).data(i),l={relatedTarget:n[s]};if(o){var h=o._menu;if(t(r).hasClass(f)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&t.contains(r,e.target))){var u=t.Event(c.HIDE,l);t(r).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),n[s].setAttribute("aria-expanded","false"),t(h).removeClass(f),t(r).removeClass(f).trigger(t.Event(c.HIDDEN,l)))}}}},a._getParentFromElement=function(e){var n,i=P.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},a._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||t(e.target).closest(y).length)):h.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!t(this).hasClass(u))){var n=a._getParentFromElement(this),i=t(n).hasClass(f);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var s=t(n).find(I).get();if(0!==s.length){var r=s.indexOf(e.target);38===e.which&&r>0&&r--,40===e.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}else{if(27===e.which){var o=t(n).find(E)[0];t(o).trigger("focus")}t(this).trigger("click")}}},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return O}},{key:"DefaultType",get:function(){return k}}]),a}();return t(document).on(c.KEYDOWN_DATA_API,E,L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,y,L._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,L._clearMenus).on(c.CLICK_DATA_API,E,function(e){e.preventDefault(),e.stopPropagation(),L._jQueryInterface.call(t(this),"toggle")}).on(c.CLICK_DATA_API,T,function(t){t.stopPropagation()}),t.fn[e]=L._jQueryInterface,t.fn[e].Constructor=L,t.fn[e].noConflict=function(){return t.fn[e]=l,L._jQueryInterface},L}(e),M=function(t){var e="modal",n="bs.modal",i="."+n,o=t.fn.modal,a={backdrop:!0,keyboard:!0,focus:!0,show:!0},l={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},h={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,FOCUSIN:"focusin"+i,RESIZE:"resize"+i,CLICK_DISMISS:"click.dismiss"+i,KEYDOWN_DISMISS:"keydown.dismiss"+i,MOUSEUP_DISMISS:"mouseup.dismiss"+i,MOUSEDOWN_DISMISS:"mousedown.dismiss"+i,CLICK_DATA_API:"click"+i+".data-api"},c="modal-scrollbar-measure",u="modal-backdrop",f="modal-open",d="fade",_="show",g={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},p=function(){function o(e,n){this._config=this._getConfig(n),this._element=e,this._dialog=t(e).find(g.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var p=o.prototype;return p.toggle=function(t){return this._isShown?this.hide():this.show(t)},p.show=function(e){var n=this;if(!this._isTransitioning&&!this._isShown){P.supportsTransitionEnd()&&t(this._element).hasClass(d)&&(this._isTransitioning=!0);var i=t.Event(h.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),t(document.body).addClass(f),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(h.CLICK_DISMISS,g.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(h.MOUSEDOWN_DISMISS,function(){t(n._element).one(h.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},p.hide=function(e){var n=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=t.Event(h.HIDE);if(t(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var s=P.supportsTransitionEnd()&&t(this._element).hasClass(d);s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(h.FOCUSIN),t(this._element).removeClass(_),t(this._element).off(h.CLICK_DISMISS),t(this._dialog).off(h.MOUSEDOWN_DISMISS),s?t(this._element).one(P.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},p.dispose=function(){t.removeData(this._element,n),t(window,document,this._element,this._backdrop).off(i),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},p.handleUpdate=function(){this._adjustDialog()},p._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},p._showElement=function(e){var n=this,i=P.supportsTransitionEnd()&&t(this._element).hasClass(d);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&P.reflow(this._element),t(this._element).addClass(_),this._config.focus&&this._enforceFocus();var s=t.Event(h.SHOWN,{relatedTarget:e}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(s)};i?t(this._dialog).one(P.TRANSITION_END,r).emulateTransitionEnd(300):r()},p._enforceFocus=function(){var e=this;t(document).off(h.FOCUSIN).on(h.FOCUSIN,function(n){document!==n.target&&e._element!==n.target&&0===t(e._element).has(n.target).length&&e._element.focus()})},p._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(h.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(h.KEYDOWN_DISMISS)},p._setResizeEvent=function(){var e=this;this._isShown?t(window).on(h.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(h.RESIZE)},p._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(f),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(h.HIDDEN)})},p._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},p._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(d)?d:"";if(this._isShown&&this._config.backdrop){var s=P.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=u,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(h.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),s&&P.reflow(this._backdrop),t(this._backdrop).addClass(_),!e)return;if(!s)return void e();t(this._backdrop).one(P.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(_);var r=function(){n._removeBackdrop(),e&&e()};P.supportsTransitionEnd()&&t(this._element).hasClass(d)?t(this._backdrop).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r()}else e&&e()},p._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},p._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},p._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},p._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(g.FIXED_CONTENT).each(function(n,i){var s=t(i)[0].style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",s).css("padding-right",parseFloat(r)+e._scrollbarWidth+"px")}),t(g.STICKY_CONTENT).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)-e._scrollbarWidth+"px")}),t(g.NAVBAR_TOGGLER).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)+e._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=t("body").css("padding-right");t("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},p._resetScrollbar=function(){t(g.FIXED_CONTENT).each(function(e,n){var i=t(n).data("padding-right");"undefined"!=typeof i&&t(n).css("padding-right",i).removeData("padding-right")}),t(g.STICKY_CONTENT+", "+g.NAVBAR_TOGGLER).each(function(e,n){var i=t(n).data("margin-right");"undefined"!=typeof i&&t(n).css("margin-right",i).removeData("margin-right")});var e=t("body").data("padding-right");"undefined"!=typeof e&&t("body").css("padding-right",e).removeData("padding-right")},p._getScrollbarWidth=function(){var t=document.createElement("div");t.className=c,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(e,i){return this.each(function(){var s=t(this).data(n),a=r({},o.Default,t(this).data(),"object"==typeof e&&e);if(s||(s=new o(this,a),t(this).data(n,s)),"string"==typeof e){if("undefined"==typeof s[e])throw new TypeError('No method named "'+e+'"');s[e](i)}else a.show&&s.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(h.CLICK_DATA_API,g.DATA_TOGGLE,function(e){var i,s=this,o=P.getSelectorFromElement(this);o&&(i=t(o)[0]);var a=t(i).data(n)?"toggle":r({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var l=t(i).one(h.SHOW,function(e){e.isDefaultPrevented()||l.one(h.HIDDEN,function(){t(s).is(":visible")&&s.focus()})});p._jQueryInterface.call(t(i),a,this)}),t.fn.modal=p._jQueryInterface,t.fn.modal.Constructor=p,t.fn.modal.noConflict=function(){return t.fn.modal=o,p._jQueryInterface},p}(e),U=function(t){var e="tooltip",i="bs.tooltip",o="."+i,a=t.fn[e],l=new RegExp("(^|\\s)bs-tooltip\\S+","g"),h={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},c={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},u={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},f="show",d="out",_={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,INSERTED:"inserted"+o,CLICK:"click"+o,FOCUSIN:"focusin"+o,FOCUSOUT:"focusout"+o,MOUSEENTER:"mouseenter"+o,MOUSELEAVE:"mouseleave"+o},g="fade",p="show",m=".tooltip-inner",v=".arrow",E="hover",T="focus",y="click",C="manual",I=function(){function a(t,e){if("undefined"==typeof n)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var I=a.prototype;return I.enable=function(){this._isEnabled=!0},I.disable=function(){this._isEnabled=!1},I.toggleEnabled=function(){this._isEnabled=!this._isEnabled},I.toggle=function(e){if(this._isEnabled)if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(p))return void this._leave(null,this);this._enter(null,this)}},I.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},I.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var i=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(i);var s=t.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),o=P.getUID(this.constructor.NAME);r.setAttribute("id",o),this.element.setAttribute("aria-describedby",o),this.setContent(),this.config.animation&&t(r).addClass(g);var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var c=!1===this.config.container?document.body:t(this.config.container);t(r).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(r).appendTo(c),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,{placement:h,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:v},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),t(r).addClass(p),"ontouchstart"in document.documentElement&&t("body").children().on("mouseover",null,t.noop);var u=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===d&&e._leave(null,e)};P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(this.tip).one(P.TRANSITION_END,u).emulateTransitionEnd(a._TRANSITION_DURATION):u()}},I.hide=function(e){var n=this,i=this.getTipElement(),s=t.Event(this.constructor.Event.HIDE),r=function(){n._hoverState!==f&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};t(this.element).trigger(s),s.isDefaultPrevented()||(t(i).removeClass(p),"ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),this._activeTrigger[y]=!1,this._activeTrigger[T]=!1,this._activeTrigger[E]=!1,P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(i).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r(),this._hoverState="")},I.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},I.isWithContent=function(){return Boolean(this.getTitle())},I.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},I.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},I.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(m),this.getTitle()),e.removeClass(g+" "+p)},I.setElementContent=function(e,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?i?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[i?"html":"text"](n)},I.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},I._getAttachment=function(t){return c[t.toUpperCase()]},I._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==C){var i=n===E?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,s=n===E?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(s,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},I._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},I._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?T:E]=!0),t(n.getTipElement()).hasClass(p)||n._hoverState===f?n._hoverState=f:(clearTimeout(n._timeout),n._hoverState=f,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===f&&n.show()},n.config.delay.show):n.show())},I._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?T:E]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=d,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===d&&n.hide()},n.config.delay.hide):n.hide())},I._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},I._getConfig=function(n){return"number"==typeof(n=r({},this.constructor.Default,t(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},I._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},I._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(l);null!==n&&n.length>0&&e.removeClass(n.join(""))},I._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},I._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(g),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i),s="object"==typeof e&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new a(this,s),t(this).data(i,n)),"string"==typeof e)){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return o}},{key:"DefaultType",get:function(){return h}}]),a}();return t.fn[e]=I._jQueryInterface,t.fn[e].Constructor=I,t.fn[e].noConflict=function(){return t.fn[e]=a,I._jQueryInterface},I}(e),x=function(t){var e="popover",n="bs.popover",i="."+n,o=t.fn[e],a=new RegExp("(^|\\s)bs-popover\\S+","g"),l=r({},U.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),h=r({},U.DefaultType,{content:"(string|element|function)"}),c="fade",u="show",f=".popover-header",d=".popover-body",_={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,INSERTED:"inserted"+i,CLICK:"click"+i,FOCUSIN:"focusin"+i,FOCUSOUT:"focusout"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i},g=function(r){var o,g;function p(){return r.apply(this,arguments)||this}g=r,(o=p).prototype=Object.create(g.prototype),o.prototype.constructor=o,o.__proto__=g;var m=p.prototype;return m.isWithContent=function(){return this.getTitle()||this._getContent()},m.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-popover-"+e)},m.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},m.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(f),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(e.find(d),n),e.removeClass(c+" "+u)},m._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},m._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(a);null!==n&&n.length>0&&e.removeClass(n.join(""))},p._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s="object"==typeof e?e:null;if((i||!/destroy|hide/.test(e))&&(i||(i=new p(this,s),t(this).data(n,i)),"string"==typeof e)){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(p,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return n}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return i}},{key:"DefaultType",get:function(){return h}}]),p}(U);return t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),K=function(t){var e="scrollspy",n="bs.scrollspy",i="."+n,o=t.fn[e],a={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},h={ACTIVATE:"activate"+i,SCROLL:"scroll"+i,LOAD_DATA_API:"load"+i+".data-api"},c="dropdown-item",u="active",f={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},d="offset",_="position",g=function(){function o(e,n){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(n),this._selector=this._config.target+" "+f.NAV_LINKS+","+this._config.target+" "+f.LIST_ITEMS+","+this._config.target+" "+f.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(h.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var g=o.prototype;return g.refresh=function(){var e=this,n=this._scrollElement===this._scrollElement.window?d:_,i="auto"===this._config.method?n:this._config.method,s=i===_?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.makeArray(t(this._selector)).map(function(e){var n,r=P.getSelectorFromElement(e);if(r&&(n=t(r)[0]),n){var o=n.getBoundingClientRect();if(o.width||o.height)return[t(n)[i]().top+s,r]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},g.dispose=function(){t.removeData(this._element,n),t(this._scrollElement).off(i),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},g._getConfig=function(n){if("string"!=typeof(n=r({},a,n)).target){var i=t(n.target).attr("id");i||(i=P.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return P.typeCheckConfig(e,n,l),n},g._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},g._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},g._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},g._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var s=this._offsets.length;s--;){this._activeTarget!==this._targets[s]&&t>=this._offsets[s]&&("undefined"==typeof this._offsets[s+1]||t<this._offsets[s+1])&&this._activate(this._targets[s])}}},g._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=t(n.join(","));i.hasClass(c)?(i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u),i.addClass(u)):(i.addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS+", "+f.LIST_ITEMS).addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)),t(this._scrollElement).trigger(h.ACTIVATE,{relatedTarget:e})},g._clear=function(){t(this._selector).filter(f.ACTIVE).removeClass(u)},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n);if(i||(i=new o(this,"object"==typeof e&&e),t(this).data(n,i)),"string"==typeof e){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(window).on(h.LOAD_DATA_API,function(){for(var e=t.makeArray(t(f.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);g._jQueryInterface.call(i,i.data())}}),t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),V=function(t){var e="bs.tab",n="."+e,i=t.fn.tab,r={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,CLICK_DATA_API:"click.bs.tab.data-api"},o="dropdown-menu",a="active",l="disabled",h="fade",c="show",u=".dropdown",f=".nav, .list-group",d=".active",_="> li > .active",g='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',p=".dropdown-toggle",m="> .dropdown-menu .active",v=function(){function n(t){this._element=t}var i=n.prototype;return i.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(a)||t(this._element).hasClass(l))){var n,i,s=t(this._element).closest(f)[0],o=P.getSelectorFromElement(this._element);if(s){var h="UL"===s.nodeName?_:d;i=(i=t.makeArray(t(s).find(h)))[i.length-1]}var c=t.Event(r.HIDE,{relatedTarget:this._element}),u=t.Event(r.SHOW,{relatedTarget:i});if(i&&t(i).trigger(c),t(this._element).trigger(u),!u.isDefaultPrevented()&&!c.isDefaultPrevented()){o&&(n=t(o)[0]),this._activate(this._element,s);var g=function(){var n=t.Event(r.HIDDEN,{relatedTarget:e._element}),s=t.Event(r.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(s)};n?this._activate(n,n.parentNode,g):g()}}},i.dispose=function(){t.removeData(this._element,e),this._element=null},i._activate=function(e,n,i){var s=this,r=("UL"===n.nodeName?t(n).find(_):t(n).children(d))[0],o=i&&P.supportsTransitionEnd()&&r&&t(r).hasClass(h),a=function(){return s._transitionComplete(e,r,i)};r&&o?t(r).one(P.TRANSITION_END,a).emulateTransitionEnd(150):a()},i._transitionComplete=function(e,n,i){if(n){t(n).removeClass(c+" "+a);var s=t(n.parentNode).find(m)[0];s&&t(s).removeClass(a),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(t(e).addClass(a),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),P.reflow(e),t(e).addClass(c),e.parentNode&&t(e.parentNode).hasClass(o)){var r=t(e).closest(u)[0];r&&t(r).find(p).addClass(a),e.setAttribute("aria-expanded",!0)}i&&i()},n._jQueryInterface=function(i){return this.each(function(){var s=t(this),r=s.data(e);if(r||(r=new n(this),s.data(e,r)),"string"==typeof i){if("undefined"==typeof r[i])throw new TypeError('No method named "'+i+'"');r[i]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),n}();return t(document).on(r.CLICK_DATA_API,g,function(e){e.preventDefault(),v._jQueryInterface.call(t(this),"show")}),t.fn.tab=v._jQueryInterface,t.fn.tab.Constructor=v,t.fn.tab.noConflict=function(){return t.fn.tab=i,v._jQueryInterface},v}(e);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=P,t.Alert=L,t.Button=R,t.Carousel=j,t.Collapse=H,t.Dropdown=W,t.Modal=M,t.Popover=x,t.Scrollspy=K,t.Tab=V,t.Tooltip=U,Object.defineProperty(t,"__esModule",{value:!0})});
 //# sourceMappingURL=bootstrap.min.js.map
/* =========================================================
 * bootstrap-datepicker.js
 * Repo: https://github.com/eternicode/bootstrap-datepicker/
 * Demo: http://eternicode.github.io/bootstrap-datepicker/
 * Docs: http://bootstrap-datepicker.readthedocs.org/
 * Forked from http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Started by Stefan Petre; improvements by Andrew Rowls + contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

(function($, undefined){

	var $window = $(window);

	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function alias(method){
		return function(){
			return this[method].apply(this, arguments);
		};
	}

	var DateArray = (function(){
		var extras = {
			get: function(i){
				return this.slice(i)[0];
			},
			contains: function(d){
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i=0, l=this.length; i < l; i++)
					if (this[i].valueOf() === val)
						return i;
				return -1;
			},
			remove: function(i){
				this.splice(i,1);
			},
			replace: function(new_array){
				if (!new_array)
					return;
				if (!$.isArray(new_array))
					new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function(){
				this.splice(0);
			},
			copy: function(){
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function(){
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();


	// Picker object

	var Datepicker = function(element, options){
		this.dates = new DateArray();
		this.viewDate = UTCToday();
		this.focusDate = null;

		this._process_options(options);

		this.element = $(element);
		this.isInline = false;
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
		this.hasInput = this.component && this.element.find('input').length;
		if (this.component && this.component.length === 0)
			this.component = false;

		this.picker = $(DPGlobal.template);
		this._buildEvents();
		this._attachEvents();

		if (this.isInline){
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		}
		else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
		}

		this.viewMode = this.o.startView;

		if (this.o.calendarWeeks)
			this.picker.find('tfoot th.today')
						.attr('colspan', function(i, val){
							return parseInt(val) + 1;
						});

		this._allow_update = false;

		this.setStartDate(this._o.startDate);
		this.setEndDate(this._o.endDate);
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);

		this.fillDow();
		this.fillMonths();

		this._allow_update = true;

		this.update();
		this.showMode();

		if (this.isInline){
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			switch (o.startView){
				case 2:
				case 'decade':
					o.startView = 2;
					break;
				case 1:
				case 'year':
					o.startView = 1;
					break;
				default:
					o.startView = 0;
			}

			switch (o.minViewMode){
				case 1:
				case 'months':
					o.minViewMode = 1;
					break;
				case 2:
				case 'years':
					o.minViewMode = 2;
					break;
				default:
					o.minViewMode = 0;
			}

			o.startView = Math.max(o.startView, o.minViewMode);

			// true, false, or Number > 0
			if (o.multidate !== true){
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false)
					o.multidate = Math.max(0, o.multidate);
				else
					o.multidate = 1;
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = ((o.weekStart + 6) % 7);

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity){
				if (!!o.startDate){
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);
				}
				else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity){
				if (!!o.endDate){
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);
				}
				else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];
			if (!$.isArray(o.daysOfWeekDisabled))
				o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
			o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function(d){
				return parseInt(d, 10);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function(word){
				return (/^auto|left|right|top|bottom$/).test(word);
			});
			o.orientation = {x: 'auto', y: 'auto'};
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1){
				switch (plc[0]){
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function(word){
					return (/^left|right$/).test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function(word){
					return (/^top|bottom$/).test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev, ch; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function(){
			if (this.isInput){ // single input
				this._events = [
					[this.element, {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(function(e){
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
								this.update();
						}, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			else if (this.component && this.hasInput){ // component: input + button
				this._events = [
					// For components that are not readonly, allow keyboard nav
					[this.element.find('input'), {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(function(e){
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
								this.update();
						}, this),
						keydown: $.proxy(this.keydown, this)
					}],
					[this.component, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			else if (this.element.is('div')){  // inline datepicker
				this.isInline = true;
			}
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			this._events.push(
				// Component: listen for blur on element descendants
				[this.element, '*', {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}],
				// Input: listen for blur on element
				[this.element, {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}]
			);

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					'mousedown touchstart': $.proxy(function(e){
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length
						)){
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.dates.get(-1),
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function(ix, format){
					if (arguments.length === 0){
						ix = this.dates.length - 1;
						format = this.o.format;
					}
					else if (typeof ix === 'string'){
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function(){
			if (!this.isInline)
				this.picker.appendTo('body');
			this.picker.show();
			this.place();
			this._attachSecondaryEvents();
			this._trigger('show');
		},

		hide: function(){
			if (this.isInline)
				return;
			if (!this.picker.is(':visible'))
				return;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.viewMode = this.o.startView;
			this.showMode();

			if (
				this.o.forceParse &&
				(
					this.isInput && this.element.val() ||
					this.hasInput && this.element.find('input').val()
				)
			)
				this.setValue();
			this._trigger('hide');
		},

		remove: function(){
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput){
				delete this.element.data().date;
			}
		},

		_utc_to_local: function(utc){
			return utc && new Date(utc.getTime() + (utc.getTimezoneOffset()*60000));
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			return new Date(this.dates.get(-1));
		},

		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, $.map(args, this._utc_to_local));
			this._trigger('changeDate');
			this.setValue();
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			if (!this.isInput){
				if (this.component){
					this.element.find('input').val(formatted).change();
				}
			}
			else {
				this.element.val(formatted).change();
			}
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			this.updateNavArrows();
		},

		place: function(){
			if (this.isInline)
				return;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				windowWidth = $window.width(),
				windowHeight = $window.height(),
				scrollTop = $window.scrollTop();

			var zIndex = parseInt(this.element.parents().filter(function(){
					return $(this).css('z-index') !== 'auto';
				}).first().css('z-index'))+10;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left,
				top = offset.top;

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				// Default to left
				this.picker.addClass('datepicker-orient-left');
				if (offset.left < 0)
					left -= offset.left - visualPadding;
				else if (offset.left + calendarWidth > windowWidth)
					left = windowWidth - calendarWidth - visualPadding;
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow, bottom_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + offset.top - calendarHeight;
				bottom_overflow = scrollTop + windowHeight - (offset.top + height + calendarHeight);
				if (Math.max(top_overflow, bottom_overflow) === bottom_overflow)
					yorient = 'top';
				else
					yorient = 'bottom';
			}
			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top += height;
			else
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));

			this.picker.css({
				top: top,
				left: left,
				zIndex: zIndex
			});
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update)
				return;

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			}
			else {
				dates = this.isInput
						? this.element.val()
						: this.element.data('date') || this.element.find('input').val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					date < this.o.startDate ||
					date > this.o.endDate ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.dates.length)
				this.viewDate = new Date(this.dates.get(-1));
			else if (this.viewDate < this.o.startDate)
				this.viewDate = new Date(this.o.startDate);
			else if (this.viewDate > this.o.endDate)
				this.viewDate = new Date(this.o.endDate);

			if (fromArgs){
				// setting date by clicking
				this.setValue();
			}
			else if (dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates))
					this._trigger('changeDate');
			}
			if (!this.dates.length && oldDates.length)
				this._trigger('clearDate');

			this.fill();
		},

		fillDow: function(){
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				var cell = '<th class="cw">&nbsp;</th>';
				html += cell;
				this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function(){
			var html = '',
			i = 0;
			while (i < 12){
				html += '<span class="month">'+dates[this.o.language].monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = new Date();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			}
			else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with local today, not UTC today
			if (this.o.todayHighlight &&
				date.getUTCFullYear() === today.getFullYear() &&
				date.getUTCMonth() === today.getMonth() &&
				date.getUTCDate() === today.getDate()){
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate ||
				$.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1){
				cls.push('disabled');
			}
			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
			}
			return cls;
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
				tooltip;
			this.picker.find('.datepicker-days thead th.datepicker-switch')
						.text(dates[this.o.language].months[month]+' '+year);
			this.picker.find('tfoot th.today')
						.text(todaytxt)
						.toggle(this.o.todayBtn !== false);
			this.picker.find('tfoot th.clear')
						.text(cleartxt)
						.toggle(this.o.clearBtn !== false);
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month-1, 28),
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while (prevMonth.valueOf() < nextMonth){
				if (prevMonth.getUTCDay() === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek =  (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');

					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				if (this.o.beforeShowDay !== $.noop){
					var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof(before) === 'boolean')
						before = {enabled: before};
					else if (typeof(before) === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
				}

				clsName = $.unique(clsName);
				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
				if (prevMonth.getUTCDay() === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));

			var months = this.picker.find('.datepicker-months')
						.find('th:eq(1)')
							.text(year)
							.end()
						.find('span').removeClass('active');

			$.each(this.dates, function(i, d){
				if (d.getUTCFullYear() === year)
					months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(1)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			var years = $.map(this.dates, function(d){
					return d.getUTCFullYear();
				}),
				classes;
			for (var i = -1; i < 11; i++){
				classes = ['year'];
				if (i === -1)
					classes.push('old');
				else if (i === 10)
					classes.push('new');
				if ($.inArray(year, years) !== -1)
					classes.push('active');
				if (year < startYear || year > endYear)
					classes.push('disabled');
				html += '<span class="' + classes.join(' ') + '">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);
		},

		updateNavArrows: function(){
			if (!this._allow_update)
				return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth();
			switch (this.viewMode){
				case 0:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
				case 1:
				case 2:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
			}
		},

		click: function(e){
			e.preventDefault();
			var target = $(e.target).closest('span, td, th'),
				year, month, day;
			if (target.length === 1){
				switch (target[0].nodeName.toLowerCase()){
					case 'th':
						switch (target[0].className){
							case 'datepicker-switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1);
								switch (this.viewMode){
									case 0:
										this.viewDate = this.moveMonth(this.viewDate, dir);
										this._trigger('changeMonth', this.viewDate);
										break;
									case 1:
									case 2:
										this.viewDate = this.moveYear(this.viewDate, dir);
										if (this.viewMode === 1)
											this._trigger('changeYear', this.viewDate);
										break;
								}
								this.fill();
								break;
							case 'today':
								var date = new Date();
								date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

								this.showMode(-2);
								var which = this.o.todayBtn === 'linked' ? null : 'view';
								this._setDate(date, which);
								break;
							case 'clear':
								var element;
								if (this.isInput)
									element = this.element;
								else if (this.component)
									element = this.element.find('input');
								if (element)
									element.val("").change();
								this.update();
								this._trigger('changeDate');
								if (this.o.autoclose)
									this.hide();
								break;
						}
						break;
					case 'span':
						if (!target.is('.disabled')){
							this.viewDate.setUTCDate(1);
							if (target.is('.month')){
								day = 1;
								month = target.parent().find('span').index(target);
								year = this.viewDate.getUTCFullYear();
								this.viewDate.setUTCMonth(month);
								this._trigger('changeMonth', this.viewDate);
								if (this.o.minViewMode === 1){
									this._setDate(UTCDate(year, month, day));
								}
							}
							else {
								day = 1;
								month = 0;
								year = parseInt(target.text(), 10)||0;
								this.viewDate.setUTCFullYear(year);
								this._trigger('changeYear', this.viewDate);
								if (this.o.minViewMode === 2){
									this._setDate(UTCDate(year, month, day));
								}
							}
							this.showMode(-1);
							this.fill();
						}
						break;
					case 'td':
						if (target.is('.day') && !target.is('.disabled')){
							day = parseInt(target.text(), 10)||1;
							year = this.viewDate.getUTCFullYear();
							month = this.viewDate.getUTCMonth();
							if (target.is('.old')){
								if (month === 0){
									month = 11;
									year -= 1;
								}
								else {
									month -= 1;
								}
							}
							else if (target.is('.new')){
								if (month === 11){
									month = 0;
									year += 1;
								}
								else {
									month += 1;
								}
							}
							this._setDate(UTCDate(year, month, day));
						}
						break;
				}
			}
			if (this.picker.is(':visible') && this._focused_from){
				$(this._focused_from).focus();
			}
			delete this._focused_from;
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}
			else if (ix !== -1){
				this.dates.remove(ix);
			}
			else {
				this.dates.push(date);
			}
			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if (!which || which  === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			this._trigger('changeDate');
			var element;
			if (this.isInput){
				element = this.element;
			}
			else if (this.component){
				element = this.element.find('input');
			}
			if (element){
				element.change();
			}
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveMonth: function(date, dir){
			if (!date)
				return undefined;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				if (new_month < 0 || new_month > 11)
					new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (this.picker.is(':not(:visible)')){
				if (e.keyCode === 27) // allow escape to hide and re-show picker
					this.show();
				return;
			}
			var dateChanged = false,
				dir, newDate, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					break;
				case 37: // left
				case 39: // right
					if (!this.o.keyboardNavigation)
						break;
					dir = e.keyCode === 37 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					}
					else if (e.shiftKey){
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					}
					else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir);
					}
					if (this.dateWithinRange(newDate)){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 38: // up
				case 40: // down
					if (!this.o.keyboardNavigation)
						break;
					dir = e.keyCode === 38 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					}
					else if (e.shiftKey){
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					}
					else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir * 7);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir * 7);
					}
					if (this.dateWithinRange(newDate)){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 32: // spacebar
					// Spacebar is used in manually typing dates in some formats.
					// As such, its behavior should not be hijacked.
					break;
				case 13: // enter
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					this._toggle_multidate(focusDate);
					dateChanged = true;
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				var element;
				if (this.isInput){
					element = this.element;
				}
				else if (this.component){
					element = this.element.find('input');
				}
				if (element){
					element.change();
				}
			}
		},

		showMode: function(dir){
			if (dir){
				this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + dir));
			}
			this.picker
				.find('>div')
				.hide()
				.filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName)
					.css('display', 'block');
			this.updateNavArrows();
		}
	};

	var DateRangePicker = function(element, options){
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		$(this.inputs)
			.datepicker(options)
			.bind('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $(i).data('datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $(e.target).data('datepicker'),
				new_date = dp.getUTCDate(),
				i = $.inArray(e.target, this.inputs),
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate())
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[i]){
				// Date being moved earlier/left
				while (i >= 0 && new_date < this.dates[i]){
					this.pickers[i--].setUTCDate(new_date);
				}
			}
			else if (new_date > this.dates[i]){
				// Date being moved later/right
				while (i < l && new_date > this.dates[i]){
					this.pickers[i++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		remove: function(){
			$.map(this.pickers, function(p){ p.remove(); });
			delete this.element.data().datepicker;
		}
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	$.fn.datepicker = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.is('.input-daterange') || opts.inputs){
					var ropts = {
						inputs: opts.inputs || $this.find('input').toArray()
					};
					$this.data('datepicker', (data = new DateRangePicker(this, $.extend(opts, ropts))));
				}
				else {
					$this.data('datepicker', (data = new Datepicker(this, opts)));
				}
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
				if (internal_return !== undefined)
					return false;
			}
		});
		if (internal_return !== undefined)
			return internal_return;
		else
			return this;
	};

	var defaults = $.fn.datepicker.defaults = {
		autoclose: false,
		beforeShowDay: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		daysOfWeekDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		weekStart: 0
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear"
		}
	};

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		isLeapYear: function(year){
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
		},
		getDaysInMonth: function(year, month){
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			// IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var part_re = /([\-+]\d+)([dmwy])/,
				parts = date.match(/([\-+]\d+)([dmwy])/g),
				part, dir, i;
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
				date = new Date();
				for (i=0; i < parts.length; i++){
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					switch (part[2]){
						case 'd':
							date.setUTCDate(date.getUTCDate() + dir);
							break;
						case 'm':
							date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
							break;
						case 'w':
							date.setUTCDate(date.getUTCDate() + dir * 7);
							break;
						case 'y':
							date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
							break;
					}
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
			}
			parts = date && date.match(this.nonpunctuation) || [];
			date = new Date();
			var parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){
						return d.setUTCFullYear(v);
					},
					yy: function(d,v){
						return d.setUTCFullYear(2000+v);
					},
					m: function(d,v){
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() !== v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){
						return d.setUTCDate(v);
					}
				},
				val, filtered;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length){
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part(){
				var m = this.slice(0, parts[i].length),
					p = parts[i].slice(0, m.length);
				return m === p;
			}
			if (parts.length === fparts.length){
				var cnt;
				for (i=0, cnt = fparts.length; i < cnt; i++){
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)){
						switch (part){
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i=0; i < setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])){
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (!date)
				return '';
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev">&laquo;</th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next">&raquo;</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class=" table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};


	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker'))
				return;
			e.preventDefault();
			// component click requires us to explicitly show it
			$this.datepicker('show');
		}
	);
	$(function(){
		$('[data-provide="datepicker-inline"]').datepicker();
	});

}(window.jQuery));
(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:e?e.ownerDocument.documentElement:document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var l=a.commonAncestorContainer;if(e!==l&&t!==l||i.contains(n))return p(l)?l:r(l);var f=s(e);return f.host?d(f.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||n;return r[o]}return e[o]}function l(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function f(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+i+'Width'],10)}function m(e,t,o,i){return J(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],ie()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function h(){var e=document.body,t=document.documentElement,o=ie()&&getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function c(e){return se({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ie())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?h():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,m=e.offsetHeight-d;if(l||m){var g=t(e);l-=f(g,'x'),m-=f(g,'y'),r.width-=l,r.height-=m}return c(r)}function u(e,o){var i=ie(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),f=parseFloat(a.borderTopWidth,10),m=parseFloat(a.borderLeftWidth,10),h=c({top:p.top-s.top-f,left:p.left-s.left-m,width:p.width,height:p.height});if(h.marginTop=0,h.marginLeft=0,!i&&r){var u=parseFloat(a.marginTop,10),b=parseFloat(a.marginLeft,10);h.top-=f-u,h.bottom-=f-u,h.left-=m-b,h.right-=m-b,h.marginTop=u,h.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(h=l(h,o)),h}function b(e){var t=e.ownerDocument.documentElement,o=u(e,t),i=J(t.clientWidth,window.innerWidth||0),n=J(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return c(s)}function w(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||w(o(e))}function y(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(t)),'BODY'===a.nodeName&&(a=e.ownerDocument.documentElement)):'window'===r?a=e.ownerDocument.documentElement:a=r;var l=u(a,s);if('HTML'===a.nodeName&&!w(s)){var f=h(),m=f.height,c=f.width;p.top+=l.top-l.marginTop,p.bottom=m+l.top,p.left+=l.left-l.marginLeft,p.right=c+l.left}else p=l}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function E(e){var t=e.width,o=e.height;return t*o}function v(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=y(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return se({key:e},s[e],{area:E(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function O(e,t,o){var i=d(t,o);return u(o,i)}function L(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function x(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=L(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[x(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function D(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function C(t,o,i){var n=void 0===i?t:t.slice(0,D(t,'name',i));return n.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t['function']||t.fn;t.enabled&&e(i)&&(o.offsets.popper=c(o.offsets.popper),o.offsets.reference=c(o.offsets.reference),o=i(o,t))}),o}function N(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=O(this.state,this.popper,this.reference),e.placement=v(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=C(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function k(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function W(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function P(){return this.state.isDestroyed=!0,k(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[W('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function B(e){var t=e.ownerDocument;return t?t.defaultView:window}function H(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||H(n(p.parentNode),t,o,i),i.push(p)}function A(e,t,o,i){o.updateBound=i,B(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return H(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=A(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return B(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function R(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function U(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function Y(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&U(t[o])&&(i='px'),e.style[o]=t[o]+i})}function j(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function K(e){return'end'===e?'start':'start'===e?'end':e}function q(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ae.indexOf(e),i=ae.slice(o+1).concat(ae.slice(0,o));return t?i.reverse():i}function V(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=c(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?J(document.documentElement.clientHeight,window.innerHeight||0):J(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function z(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return V(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){U(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}function G(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=U(+i)?[+i,0]:z(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var _=Math.min,X=Math.floor,J=Math.max,Q='undefined'!=typeof window&&'undefined'!=typeof document,Z=['Edge','Trident','Firefox'],$=0,ee=0;ee<Z.length;ee+=1)if(Q&&0<=navigator.userAgent.indexOf(Z[ee])){$=1;break}var i,te=Q&&window.Promise,oe=te?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},$))}},ie=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},ne=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},re=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),pe=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},se=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},de=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ae=de.slice(3),le={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},fe=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};ne(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=oe(this.update.bind(this)),this.options=se({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=i&&i.jquery?i[0]:i,this.options.modifiers={},Object.keys(se({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=se({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return se({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return re(t,[{key:'update',value:function(){return N.call(this)}},{key:'destroy',value:function(){return P.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return R.call(this)}}]),t}();return fe.Utils=('undefined'==typeof window?global:window).PopperUtils,fe.placements=de,fe.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:pe({},d,r[d]),end:pe({},d,r[d]+r[a]-p[a])};e.offsets.popper=se({},p,l[i])}return e}},offset:{order:200,enabled:!0,fn:G,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=y(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=J(p[e],i[e])),pe({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=_(p[o],i[e]-('right'===e?p.width:p.height))),pe({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=se({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=X,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var i;if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var n=o.element;if('string'==typeof n){if(n=e.instance.popper.querySelector(n),!n)return e;}else if(!e.instance.popper.contains(n))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',g=a?'bottom':'right',u=L(n)[l];d[g]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[g]-u)),d[m]+u>s[g]&&(e.offsets.popper[m]+=d[m]+u-s[g]),e.offsets.popper=c(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=J(_(s[l]-u,v),0),e.arrowElement=n,e.offsets.arrow=(i={},pe(i,m,Math.round(v)),pe(i,h,''),i),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(k(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=y(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=x(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case le.FLIP:p=[i,n];break;case le.CLOCKWISE:p=q(i);break;case le.COUNTERCLOCKWISE:p=q(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=x(i);var a=e.offsets.popper,l=e.offsets.reference,f=X,m='left'===i&&f(a.right)>f(l.left)||'right'===i&&f(a.left)<f(l.right)||'top'===i&&f(a.bottom)>f(l.top)||'bottom'===i&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===i&&h||'right'===i&&c||'top'===i&&g||'bottom'===i&&u,w=-1!==['top','bottom'].indexOf(i),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u);(m||b||y)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),y&&(r=K(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=se({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=C(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[o]-(s?n[p?'width':'height']:0),e.placement=x(t),e.offsets.popper=c(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,l=r(e.instance.popper),f=g(l),m={position:n.position},h={left:X(n.left),top:X(n.top),bottom:X(n.bottom),right:X(n.right)},c='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=W('transform');if(d='bottom'==c?-f.height+h.bottom:h.top,s='right'==u?-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[u]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==u?-1:1;m[c]=d*w,m[u]=s*y,m.willChange=c+', '+u}var E={"x-placement":e.placement};return e.attributes=se({},E,e.attributes),e.styles=se({},m,e.styles),e.arrowStyles=se({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return Y(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&Y(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,i,n){var r=O(n,t,e),p=v(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),Y(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},fe});
(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:e?e.ownerDocument.documentElement:document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var l=a.commonAncestorContainer;if(e!==l&&t!==l||i.contains(n))return p(l)?l:r(l);var f=s(e);return f.host?d(f.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||n;return r[o]}return e[o]}function l(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function f(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+i+'Width'],10)}function m(e,t,o,i){return J(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],ie()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function h(){var e=document.body,t=document.documentElement,o=ie()&&getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function c(e){return se({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ie())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?h():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,m=e.offsetHeight-d;if(l||m){var g=t(e);l-=f(g,'x'),m-=f(g,'y'),r.width-=l,r.height-=m}return c(r)}function u(e,o){var i=ie(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),f=parseFloat(a.borderTopWidth,10),m=parseFloat(a.borderLeftWidth,10),h=c({top:p.top-s.top-f,left:p.left-s.left-m,width:p.width,height:p.height});if(h.marginTop=0,h.marginLeft=0,!i&&r){var u=parseFloat(a.marginTop,10),b=parseFloat(a.marginLeft,10);h.top-=f-u,h.bottom-=f-u,h.left-=m-b,h.right-=m-b,h.marginTop=u,h.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(h=l(h,o)),h}function b(e){var t=e.ownerDocument.documentElement,o=u(e,t),i=J(t.clientWidth,window.innerWidth||0),n=J(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return c(s)}function w(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||w(o(e))}function y(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(t)),'BODY'===a.nodeName&&(a=e.ownerDocument.documentElement)):'window'===r?a=e.ownerDocument.documentElement:a=r;var l=u(a,s);if('HTML'===a.nodeName&&!w(s)){var f=h(),m=f.height,c=f.width;p.top+=l.top-l.marginTop,p.bottom=m+l.top,p.left+=l.left-l.marginLeft,p.right=c+l.left}else p=l}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function E(e){var t=e.width,o=e.height;return t*o}function v(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=y(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return se({key:e},s[e],{area:E(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function O(e,t,o){var i=d(t,o);return u(o,i)}function L(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function x(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=L(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[x(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function D(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function C(t,o,i){var n=void 0===i?t:t.slice(0,D(t,'name',i));return n.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t['function']||t.fn;t.enabled&&e(i)&&(o.offsets.popper=c(o.offsets.popper),o.offsets.reference=c(o.offsets.reference),o=i(o,t))}),o}function N(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=O(this.state,this.popper,this.reference),e.placement=v(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=C(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function k(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function W(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function P(){return this.state.isDestroyed=!0,k(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[W('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function B(e){var t=e.ownerDocument;return t?t.defaultView:window}function H(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||H(n(p.parentNode),t,o,i),i.push(p)}function A(e,t,o,i){o.updateBound=i,B(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return H(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=A(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return B(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function R(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function U(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function Y(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&U(t[o])&&(i='px'),e.style[o]=t[o]+i})}function j(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function K(e){return'end'===e?'start':'start'===e?'end':e}function q(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ae.indexOf(e),i=ae.slice(o+1).concat(ae.slice(0,o));return t?i.reverse():i}function V(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=c(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?J(document.documentElement.clientHeight,window.innerHeight||0):J(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function z(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return V(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){U(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}function G(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=U(+i)?[+i,0]:z(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var _=Math.min,X=Math.floor,J=Math.max,Q='undefined'!=typeof window&&'undefined'!=typeof document,Z=['Edge','Trident','Firefox'],$=0,ee=0;ee<Z.length;ee+=1)if(Q&&0<=navigator.userAgent.indexOf(Z[ee])){$=1;break}var i,te=Q&&window.Promise,oe=te?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},$))}},ie=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},ne=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},re=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),pe=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},se=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},de=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ae=de.slice(3),le={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},fe=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};ne(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=oe(this.update.bind(this)),this.options=se({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=i&&i.jquery?i[0]:i,this.options.modifiers={},Object.keys(se({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=se({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return se({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return re(t,[{key:'update',value:function(){return N.call(this)}},{key:'destroy',value:function(){return P.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return R.call(this)}}]),t}();return fe.Utils=('undefined'==typeof window?global:window).PopperUtils,fe.placements=de,fe.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:pe({},d,r[d]),end:pe({},d,r[d]+r[a]-p[a])};e.offsets.popper=se({},p,l[i])}return e}},offset:{order:200,enabled:!0,fn:G,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=y(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=J(p[e],i[e])),pe({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=_(p[o],i[e]-('right'===e?p.width:p.height))),pe({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=se({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=X,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var i;if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var n=o.element;if('string'==typeof n){if(n=e.instance.popper.querySelector(n),!n)return e;}else if(!e.instance.popper.contains(n))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',g=a?'bottom':'right',u=L(n)[l];d[g]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[g]-u)),d[m]+u>s[g]&&(e.offsets.popper[m]+=d[m]+u-s[g]),e.offsets.popper=c(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=J(_(s[l]-u,v),0),e.arrowElement=n,e.offsets.arrow=(i={},pe(i,m,Math.round(v)),pe(i,h,''),i),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(k(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=y(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=x(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case le.FLIP:p=[i,n];break;case le.CLOCKWISE:p=q(i);break;case le.COUNTERCLOCKWISE:p=q(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=x(i);var a=e.offsets.popper,l=e.offsets.reference,f=X,m='left'===i&&f(a.right)>f(l.left)||'right'===i&&f(a.left)<f(l.right)||'top'===i&&f(a.bottom)>f(l.top)||'bottom'===i&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===i&&h||'right'===i&&c||'top'===i&&g||'bottom'===i&&u,w=-1!==['top','bottom'].indexOf(i),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u);(m||b||y)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),y&&(r=K(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=se({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=C(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[o]-(s?n[p?'width':'height']:0),e.placement=x(t),e.offsets.popper=c(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,l=r(e.instance.popper),f=g(l),m={position:n.position},h={left:X(n.left),top:X(n.top),bottom:X(n.bottom),right:X(n.right)},c='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=W('transform');if(d='bottom'==c?-f.height+h.bottom:h.top,s='right'==u?-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[u]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==u?-1:1;m[c]=d*w,m[u]=s*y,m.willChange=c+', '+u}var E={"x-placement":e.placement};return e.attributes=se({},E,e.attributes),e.styles=se({},m,e.styles),e.arrowStyles=se({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return Y(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&Y(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,i,n){var r=O(n,t,e),p=v(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),Y(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},fe});
//# sourceMappingURL=popper.min.js.map
/**
  * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
  *
  * @version v1.15.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

 (function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):(e=e||self,e.BootstrapTable=t(e.jQuery))})(this,function(t){'use strict';var m=String.prototype,b=Number.parseFloat,y=Math.max,w=Math.min,S=Math.floor,v=Math.ceil;function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var o,a=0;a<t.length;a++)o=t[a],o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}function s(e,t,o){return t&&i(e.prototype,t),o&&i(e,o),e}function l(e,t){return d(e)||u(e,t)||g()}function r(e){return c(e)||p(e)||h()}function c(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}}function d(e){if(Array.isArray(e))return e}function p(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function u(e,t){var o=[],a=!0,n=!1,i=void 0;try{for(var s,l=e[Symbol.iterator]();!(a=(s=l.next()).done)&&(o.push(s.value),!(t&&o.length===t));a=!0);}catch(e){n=!0,i=e}finally{try{a||null==l["return"]||l["return"]()}finally{if(n)throw i}}return o}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function g(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}t=t&&t.hasOwnProperty("default")?t["default"]:t;var x,k,T,P="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,C="object",o=function(e){return e&&e.Math==Math&&e},I=o(typeof globalThis==C&&globalThis)||o(typeof window==C&&window)||o(typeof self==C&&self)||o(typeof P==C&&P)||Function("return this")(),A=function(e){try{return!!e()}catch(e){return!0}},E=!A(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),R={}.propertyIsEnumerable,_=Object.getOwnPropertyDescriptor,N=_&&!R.call({1:2},1),D=N?function(e){var t=_(this,e);return!!t&&t.enumerable}:R,f={f:D},F=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},L={}.toString,B=function(e){return L.call(e).slice(8,-1)},V="".split,H=A(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==B(e)?V.call(e,""):Object(e)}:Object,M=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},U=function(e){return H(M(e))},q=function(e){return"object"==typeof e?null!==e:"function"==typeof e},z=function(e,t){if(!q(e))return e;var o,a;if(t&&"function"==typeof(o=e.toString)&&!q(a=o.call(e)))return a;if("function"==typeof(o=e.valueOf)&&!q(a=o.call(e)))return a;if(!t&&"function"==typeof(o=e.toString)&&!q(a=o.call(e)))return a;throw TypeError("Can't convert object to primitive value")},G={}.hasOwnProperty,W=function(e,t){return G.call(e,t)},Y=I.document,K=q(Y)&&q(Y.createElement),X=function(e){return K?Y.createElement(e):{}},Q=!E&&!A(function(){return 7!=Object.defineProperty(X("div"),"a",{get:function(){return 7}}).a}),J=Object.getOwnPropertyDescriptor,Z=E?J:function(e,t){if(e=U(e),t=z(t,!0),Q)try{return J(e,t)}catch(e){}return W(e,t)?F(!f.f.call(e,t),e[t]):void 0},ee={f:Z},te=function(e){if(!q(e))throw TypeError(e+" is not an object");return e},oe=Object.defineProperty,ae=E?oe:function(e,t,o){if(te(e),t=z(t,!0),te(o),Q)try{return oe(e,t,o)}catch(e){}if("get"in o||"set"in o)throw TypeError("Accessors not supported");return"value"in o&&(e[t]=o.value),e},ne={f:ae},ie=E?function(e,t,o){return ne.f(e,t,F(1,o))}:function(e,t,o){return e[t]=o,e},se=function(e,t){try{ie(I,e,t)}catch(o){I[e]=t}return t},le=e(function(e){var t=I["__core-js_shared__"]||se("__core-js_shared__",{});(e.exports=function(e,o){return t[e]||(t[e]=void 0===o?{}:o)})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"\xA9 2019 Denis Pushkarev (zloirock.ru)"})}),re=le("native-function-to-string",Function.toString),ce=I.WeakMap,de="function"==typeof ce&&/native code/.test(re.call(ce)),pe=0,O=Math.random(),ue=function(e){return"Symbol("+((void 0===e?"":e)+")_")+(++pe+O).toString(36)},he=le("keys"),ge=function(e){return he[e]||(he[e]=ue(e))},fe={},me=I.WeakMap,be=function(e){return T(e)?k(e):x(e,{})};if(de){var ye=new me,we=ye.get,Se=ye.has,ve=ye.set;x=function(e,t){return ve.call(ye,e,t),t},k=function(e){return we.call(ye,e)||{}},T=function(e){return Se.call(ye,e)}}else{var xe=ge("state");fe[xe]=!0,x=function(e,t){return ie(e,xe,t),t},k=function(e){return W(e,xe)?e[xe]:{}},T=function(e){return W(e,xe)}}var ke={set:x,get:k,has:T,enforce:be,getterFor:function(e){return function(t){var o;if(!q(t)||(o=k(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return o}}},Te=e(function(e){var t=ke.get,o=ke.enforce,a=(re+"").split("toString");le("inspectSource",function(e){return re.call(e)}),(e.exports=function(e,t,n,i){var s=!!i&&!!i.unsafe,l=!!i&&!!i.enumerable,r=!!i&&!!i.noTargetGet;return("function"==typeof n&&("string"==typeof t&&!W(n,"name")&&ie(n,"name",t),o(n).source=a.join("string"==typeof t?t:"")),e===I)?void(l?e[t]=n:se(t,n)):void(s?!r&&e[t]&&(l=!0):delete e[t],l?e[t]=n:ie(e,t,n))})(Function.prototype,"toString",function(){return"function"==typeof this&&t(this).source||re.call(this)})}),Pe=I,Oe=function(e){return"function"==typeof e?e:void 0},Ce=function(e,t){return 2>arguments.length?Oe(Pe[e])||Oe(I[e]):Pe[e]&&Pe[e][t]||I[e]&&I[e][t]},Ie=function(e){return isNaN(e=+e)?0:(0<e?S:v)(e)},$e=function(e){return 0<e?w(Ie(e),9007199254740991):0},Ae=function(e,t){var o=Ie(e);return 0>o?y(o+t,0):w(o,t)},Ee=function(e){return function(t,o,a){var n,i=U(t),s=$e(i.length),l=Ae(a,s);if(e&&o!=o){for(;s>l;)if(n=i[l++],n!=n)return!0;}else for(;s>l;l++)if((e||l in i)&&i[l]===o)return e||l||0;return!e&&-1}},Re={includes:Ee(!0),indexOf:Ee(!1)},_e=Re.indexOf,Ne=function(e,t){var o,a=U(e),n=0,s=[];for(o in a)!W(fe,o)&&W(a,o)&&s.push(o);for(;t.length>n;)W(a,o=t[n++])&&(~_e(s,o)||s.push(o));return s},De=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Fe=De.concat("length","prototype"),Le=Object.getOwnPropertyNames||function(e){return Ne(e,Fe)},Be={f:Le},Ve=Object.getOwnPropertySymbols,He={f:Ve},je=Ce("Reflect","ownKeys")||function(e){var t=Be.f(te(e)),o=He.f;return o?t.concat(o(e)):t},Me=function(e,t){for(var o,a=je(t),n=ne.f,s=ee.f,l=0;l<a.length;l++)o=a[l],W(e,o)||n(e,o,s(t,o))},Ue=/#|\.prototype\./,qe=function(e,t){var o=Ge[ze(e)];return o==Ye||o!=We&&("function"==typeof t?A(t):!!t)},ze=qe.normalize=function(e){return(e+"").replace(Ue,".").toLowerCase()},Ge=qe.data={},We=qe.NATIVE="N",Ye=qe.POLYFILL="P",Ke=qe,Xe=ee.f,Qe=function(e,t){var o,a,n,i,s,l,r=e.target,c=e.global,d=e.stat;if(a=c?I:d?I[r]||se(r,{}):(I[r]||{}).prototype,a)for(n in t){if(s=t[n],e.noTargetGet?(l=Xe(a,n),i=l&&l.value):i=a[n],o=Ke(c?n:r+(d?".":"#")+n,e.forced),!o&&void 0!==i){if(typeof s==typeof i)continue;Me(s,i)}(e.sham||i&&i.sham)&&ie(s,"sham",!0),Te(a,n,s,e)}},Je=!!Object.getOwnPropertySymbols&&!A(function(){return!(Symbol()+"")}),Ze=Array.isArray||function(e){return"Array"==B(e)},et=function(e){return Object(M(e))},tt=Object.keys||function(e){return Ne(e,De)},ot=E?Object.defineProperties:function(e,t){te(e);for(var o,a=tt(t),n=a.length,i=0;n>i;)ne.f(e,o=a[i++],t[o]);return e},at=Ce("document","documentElement"),nt=ge("IE_PROTO"),it="prototype",st=function(){},rt=function(){var e,t=X("iframe"),o=De.length,a="<",n="script",i=">";for(t.style.display="none",at.appendChild(t),t.src="java"+n+":"+"",e=t.contentWindow.document,e.open(),e.write(a+n+i+"document.F=Object"+a+"/"+n+i),e.close(),rt=e.F;o--;)delete rt[it][De[o]];return rt()},ct=Object.create||function(e,t){var o;return null===e?o=rt():(st[it]=te(e),o=new st,st[it]=null,o[nt]=e),void 0===t?o:ot(o,t)};fe[nt]=!0;var dt=Be.f,pt={}.toString,ut="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],ht=function(e){try{return dt(e)}catch(e){return ut.slice()}},gt={f:function(e){return ut&&"[object Window]"==pt.call(e)?ht(e):dt(U(e))}},ft=I.Symbol,mt=le("wks"),bt=function(e){return mt[e]||(mt[e]=Je&&ft[e]||(Je?ft:ue)("Symbol."+e))},yt={f:bt},wt=ne.f,St=function(e){var t=Pe.Symbol||(Pe.Symbol={});W(t,e)||wt(t,e,{value:yt.f(e)})},vt=ne.f,xt=bt("toStringTag"),kt=function(e,t,o){e&&!W(e=o?e:e.prototype,xt)&&vt(e,xt,{configurable:!0,value:t})},Tt=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function");return e},Pt=function(e,t,o){return(Tt(e),void 0===t)?e:0===o?function(){return e.call(t)}:1===o?function(o){return e.call(t,o)}:2===o?function(o,a){return e.call(t,o,a)}:3===o?function(o,a,n){return e.call(t,o,a,n)}:function(){return e.apply(t,arguments)}},Ot=bt("species"),Ct=function(e,t){var o;return Ze(e)&&(o=e.constructor,"function"==typeof o&&(o===Array||Ze(o.prototype))?o=void 0:q(o)&&(o=o[Ot],null===o&&(o=void 0))),new(void 0===o?Array:o)(0===t?0:t)},It=[].push,$t=function(e){var t=1==e,o=4==e,a=6==e;return function(n,i,s,l){for(var r,c,d=et(n),p=H(d),u=Pt(i,s,3),h=$e(p.length),g=0,f=l||Ct,m=t?f(n,h):2==e?f(n,0):void 0;h>g;g++)if((5==e||a||g in p)&&(r=p[g],c=u(r,g,d),e))if(t)m[g]=c;else if(c)switch(e){case 3:return!0;case 5:return r;case 6:return g;case 2:It.call(m,r);}else if(o)return!1;return a?-1:3==e||o?o:m}},At={forEach:$t(0),map:$t(1),filter:$t(2),some:$t(3),every:$t(4),find:$t(5),findIndex:$t(6)},Et=At.forEach,Rt=ge("hidden"),_t="Symbol",Nt="prototype",Dt=bt("toPrimitive"),Ft=ke.set,Lt=ke.getterFor(_t),Bt=Object[Nt],Vt=I.Symbol,Ht=I.JSON,jt=Ht&&Ht.stringify,Mt=ee.f,Ut=ne.f,qt=gt.f,zt=f.f,Gt=le("symbols"),Wt=le("op-symbols"),Yt=le("string-to-symbol-registry"),Kt=le("symbol-to-string-registry"),Xt=le("wks"),Qt=I.QObject,Jt=!Qt||!Qt[Nt]||!Qt[Nt].findChild,Zt=E&&A(function(){return 7!=ct(Ut({},"a",{get:function(){return Ut(this,"a",{value:7}).a}})).a})?function(e,t,o){var a=Mt(Bt,t);a&&delete Bt[t],Ut(e,t,o),a&&e!==Bt&&Ut(Bt,t,a)}:Ut,eo=function(e,t){var o=Gt[e]=ct(Vt[Nt]);return Ft(o,{type:_t,tag:e,description:t}),E||(o.description=t),o},to=Je&&"symbol"==typeof Vt.iterator?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof Vt},oo=function(e,t,o){e===Bt&&oo(Wt,t,o),te(e);var a=z(t,!0);return te(o),W(Gt,a)?(o.enumerable?(W(e,Rt)&&e[Rt][a]&&(e[Rt][a]=!1),o=ct(o,{enumerable:F(0,!1)})):(!W(e,Rt)&&Ut(e,Rt,F(1,{})),e[Rt][a]=!0),Zt(e,a,o)):Ut(e,a,o)},ao=function(e,t){te(e);var o=U(t),a=tt(o).concat(lo(o));return Et(a,function(t){(!E||no.call(o,t))&&oo(e,t,o[t])}),e},no=function(e){var t=z(e,!0),o=zt.call(this,t);return(this!==Bt||!W(Gt,t)||W(Wt,t))&&(!(o||!W(this,t)||!W(Gt,t)||W(this,Rt)&&this[Rt][t])||o)},io=function(e,t){var o=U(e),a=z(t,!0);if(o!==Bt||!W(Gt,a)||W(Wt,a)){var n=Mt(o,a);return n&&W(Gt,a)&&!(W(o,Rt)&&o[Rt][a])&&(n.enumerable=!0),n}},so=function(e){var t=qt(U(e)),o=[];return Et(t,function(e){W(Gt,e)||W(fe,e)||o.push(e)}),o},lo=function(e){var t=e===Bt,o=qt(t?Wt:U(e)),a=[];return Et(o,function(e){W(Gt,e)&&(!t||W(Bt,e))&&a.push(Gt[e])}),a};Je||(Vt=function(){if(this instanceof Vt)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?arguments[0]+"":void 0,t=ue(e),o=function(e){this===Bt&&o.call(Wt,e),W(this,Rt)&&W(this[Rt],t)&&(this[Rt][t]=!1),Zt(this,t,F(1,e))};return E&&Jt&&Zt(Bt,t,{configurable:!0,set:o}),eo(t,e)},Te(Vt[Nt],"toString",function(){return Lt(this).tag}),f.f=no,ne.f=oo,ee.f=io,Be.f=gt.f=so,He.f=lo,E&&(Ut(Vt[Nt],"description",{configurable:!0,get:function(){return Lt(this).description}}),Te(Bt,"propertyIsEnumerable",no,{unsafe:!0})),yt.f=function(e){return eo(bt(e),e)}),Qe({global:!0,wrap:!0,forced:!Je,sham:!Je},{Symbol:Vt}),Et(tt(Xt),function(e){St(e)}),Qe({target:_t,stat:!0,forced:!Je},{for:function(e){var t=e+"";if(W(Yt,t))return Yt[t];var o=Vt(t);return Yt[t]=o,Kt[o]=t,o},keyFor:function(e){if(!to(e))throw TypeError(e+" is not a symbol");return W(Kt,e)?Kt[e]:void 0},useSetter:function(){Jt=!0},useSimple:function(){Jt=!1}}),Qe({target:"Object",stat:!0,forced:!Je,sham:!E},{create:function(e,t){return void 0===t?ct(e):ao(ct(e),t)},defineProperty:oo,defineProperties:ao,getOwnPropertyDescriptor:io}),Qe({target:"Object",stat:!0,forced:!Je},{getOwnPropertyNames:so,getOwnPropertySymbols:lo}),Qe({target:"Object",stat:!0,forced:A(function(){He.f(1)})},{getOwnPropertySymbols:function(e){return He.f(et(e))}}),Ht&&Qe({target:"JSON",stat:!0,forced:!Je||A(function(){var e=Vt();return"[null]"!=jt([e])||"{}"!=jt({a:e})||"{}"!=jt(Object(e))})},{stringify:function(e){for(var t,o,a=[e],n=1;arguments.length>n;)a.push(arguments[n++]);if(o=t=a[1],(q(t)||void 0!==e)&&!to(e))return Ze(t)||(t=function(e,t){if("function"==typeof o&&(t=o.call(this,e,t)),!to(t))return t}),a[1]=t,jt.apply(Ht,a)}}),Vt[Nt][Dt]||ie(Vt[Nt],Dt,Vt[Nt].valueOf),kt(Vt,_t),fe[Rt]=!0;var ro=ne.f,co=I.Symbol;if(E&&"function"==typeof co&&(!("description"in co.prototype)||void 0!==co().description)){var po={},uo=function(){var e=1>arguments.length||void 0===arguments[0]?void 0:arguments[0]+"",t=this instanceof uo?new co(e):void 0===e?co():co(e);return""===e&&(po[t]=!0),t};Me(uo,co);var ho=uo.prototype=co.prototype;ho.constructor=uo;var go=ho.toString,fo="Symbol(test)"==co("test")+"",mo=/^Symbol\((.*)\)[^)]+$/;ro(ho,"description",{configurable:!0,get:function(){var e=q(this)?this.valueOf():this,t=go.call(e);if(W(po,e))return"";var o=fo?t.slice(7,-1):t.replace(mo,"$1");return""===o?void 0:o}}),Qe({global:!0,forced:!0},{Symbol:uo})}St("iterator");var bo=function(e,t,o){var a=z(t);a in e?ne.f(e,a,F(0,o)):e[a]=o},yo=bt("species"),wo=function(e){return!A(function(){var t=[],o=t.constructor={};return o[yo]=function(){return{foo:1}},1!==t[e](Boolean).foo})},So=bt("isConcatSpreadable"),vo=9007199254740991,xo="Maximum allowed index exceeded",ko=!A(function(){var e=[];return e[So]=!1,e.concat()[0]!==e}),To=wo("concat"),Po=function(e){if(!q(e))return!1;var t=e[So];return void 0===t?Ze(e):!!t};Qe({target:"Array",proto:!0,forced:!ko||!To},{concat:function(){var e,t,o,a,s,l=et(this),r=Ct(l,0),c=0;for(e=-1,o=arguments.length;e<o;e++)if(s=-1===e?l:arguments[e],Po(s)){if(a=$e(s.length),c+a>vo)throw TypeError(xo);for(t=0;t<a;t++,c++)t in s&&bo(r,c,s[t])}else{if(c>=vo)throw TypeError(xo);bo(r,c++,s)}return r.length=c,r}});var Oo=At.filter;Qe({target:"Array",proto:!0,forced:!wo("filter")},{filter:function(e){return Oo(this,e,1<arguments.length?arguments[1]:void 0)}});var Co=bt("unscopables"),Io=Array.prototype;null==Io[Co]&&ie(Io,Co,ct(null));var $o=function(e){Io[Co][e]=!0},Ao=At.find,Eo="find",Ro=!0;Eo in[]&&[,][Eo](function(){Ro=!1}),Qe({target:"Array",proto:!0,forced:Ro},{find:function(e){return Ao(this,e,1<arguments.length?arguments[1]:void 0)}}),$o(Eo);var _o=At.findIndex,No="findIndex",Do=!0;No in[]&&[,][No](function(){Do=!1}),Qe({target:"Array",proto:!0,forced:Do},{findIndex:function(e){return _o(this,e,1<arguments.length?arguments[1]:void 0)}}),$o(No);var Fo=Re.includes;Qe({target:"Array",proto:!0},{includes:function(e){return Fo(this,e,1<arguments.length?arguments[1]:void 0)}}),$o("includes");var Lo=function(e,t){var o=[][e];return!o||!A(function(){o.call(null,t||function(){throw 1},1)})},Bo=Re.indexOf,Vo=[].indexOf,Ho=!!Vo&&0>1/[1].indexOf(1,-0),jo=Lo("indexOf");Qe({target:"Array",proto:!0,forced:Ho||jo},{indexOf:function(e){return Ho?Vo.apply(this,arguments)||0:Bo(this,e,1<arguments.length?arguments[1]:void 0)}});var Mo,Uo,qo,zo=!A(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}),Go=ge("IE_PROTO"),Wo=Object.prototype,Yo=zo?Object.getPrototypeOf:function(e){return e=et(e),W(e,Go)?e[Go]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?Wo:null},Ko=bt("iterator"),Xo=!1;[].keys&&(qo=[].keys(),"next"in qo?(Uo=Yo(Yo(qo)),Uo!==Object.prototype&&(Mo=Uo)):Xo=!0),null==Mo&&(Mo={}),W(Mo,Ko)||ie(Mo,Ko,function(){return this});var Qo={IteratorPrototype:Mo,BUGGY_SAFARI_ITERATORS:Xo},Jo=Qo.IteratorPrototype,Zo=function(e,t,o){return e.prototype=ct(Jo,{next:F(1,o)}),kt(e,t+" Iterator",!1),e},ea=function(e){if(!q(e)&&null!==e)throw TypeError("Can't set "+(e+" as a prototype"));return e},ta=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,o={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(o,[]),t=o instanceof Array}catch(e){}return function(o,a){return te(o),ea(a),t?e.call(o,a):o.__proto__=a,o}}():void 0),oa=Qo.IteratorPrototype,aa=Qo.BUGGY_SAFARI_ITERATORS,na=bt("iterator"),ia="keys",sa="values",la="entries",ra=function(){return this},ca=function(e,t,o,a,n,i,s){Zo(o,t,a);var l,r,c,d=function(e){return e===n&&g?g:!aa&&e in u?u[e]:e===ia?function(){return new o(this,e)}:e===sa?function(){return new o(this,e)}:e===la?function(){return new o(this,e)}:function(){return new o(this)}},p=!1,u=e.prototype,h=u[na]||u["@@iterator"]||n&&u[n],g=!aa&&h||d(n),f="Array"==t?u.entries||h:h;if(f&&(l=Yo(f.call(new e)),oa!==Object.prototype&&l.next&&(Yo(l)!==oa&&(ta?ta(l,oa):"function"!=typeof l[na]&&ie(l,na,ra)),kt(l,t+" Iterator",!0))),n==sa&&h&&h.name!==sa&&(p=!0,g=function(){return h.call(this)}),u[na]!==g&&ie(u,na,g),n)if(r={values:d(sa),keys:i?g:d(ia),entries:d(la)},s)for(c in r)(aa||p||!(c in u))&&Te(u,c,r[c]);else Qe({target:t,proto:!0,forced:aa||p},r);return r},da="Array Iterator",pa=ke.set,ua=ke.getterFor(da),ha=ca(Array,"Array",function(e,t){pa(this,{type:da,target:U(e),index:0,kind:t})},function(){var e=ua(this),t=e.target,o=e.kind,a=e.index++;return!t||a>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==o?{value:a,done:!1}:"values"==o?{value:t[a],done:!1}:{value:[a,t[a]],done:!1}},"values");$o("keys"),$o("values"),$o("entries");var ga=[].join,fa=H!=Object,ma=Lo("join",",");Qe({target:"Array",proto:!0,forced:fa||ma},{join:function(e){return ga.call(U(this),void 0===e?",":e)}});var ba=bt("species"),ya=[].slice;Qe({target:"Array",proto:!0,forced:!wo("slice")},{slice:function(e,t){var o,a,i,s=U(this),l=$e(s.length),r=Ae(e,l),c=Ae(void 0===t?l:t,l);if(Ze(s)&&(o=s.constructor,"function"==typeof o&&(o===Array||Ze(o.prototype))?o=void 0:q(o)&&(o=o[ba],null===o&&(o=void 0)),o===Array||void 0===o))return ya.call(s,r,c);for(a=new(void 0===o?Array:o)(y(c-r,0)),i=0;r<c;r++,i++)r in s&&bo(a,i,s[r]);return a.length=i,a}});var wa=[].sort,Sa=[1,2,3],va=A(function(){Sa.sort(void 0)}),xa=A(function(){Sa.sort(null)}),ka=Lo("sort");Qe({target:"Array",proto:!0,forced:va||!xa||ka},{sort:function(e){return void 0===e?wa.call(et(this)):wa.call(et(this),Tt(e))}});Qe({target:"Array",proto:!0,forced:!wo("splice")},{splice:function(e,t){var o,a,n,i,s,l,r=et(this),c=$e(r.length),d=Ae(e,c),p=arguments.length;if(0===p?o=a=0:1===p?(o=0,a=c-d):(o=p-2,a=w(y(Ie(t),0),c-d)),c+o-a>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(n=Ct(r,a),i=0;i<a;i++)s=d+i,s in r&&bo(n,i,r[s]);if(n.length=a,o<a){for(i=d;i<c-a;i++)s=i+a,l=i+o,s in r?r[l]=r[s]:delete r[l];for(i=c;i>c-a+o;i--)delete r[i-1]}else if(o>a)for(i=c-a;i>d;i--)s=i+a-1,l=i+o-1,s in r?r[l]=r[s]:delete r[l];for(i=0;i<o;i++)r[i+d]=arguments[i+2];return r.length=c-a+o,n}});var Ta=function(e,t,o){var a,n;return ta&&"function"==typeof(a=t.constructor)&&a!==o&&q(n=a.prototype)&&n!==o.prototype&&ta(e,n),e},Pa="\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF",Oa="["+Pa+"]",Ca=RegExp("^"+Oa+Oa+"*"),Ia=RegExp(Oa+Oa+"*$"),$a=function(e){return function(t){var o=M(t)+"";return 1&e&&(o=o.replace(Ca,"")),2&e&&(o=o.replace(Ia,"")),o}},Aa={start:$a(1),end:$a(2),trim:$a(3)},Ea=Be.f,Ra=ee.f,_a=ne.f,Na=Aa.trim,Da="Number",Fa=I[Da],La=Fa.prototype,Ba=B(ct(La))==Da,Va=function(e){var t,o,a,n,i,s,l,r,c=z(e,!1);if("string"==typeof c&&2<c.length)if(c=Na(c),t=c.charCodeAt(0),43===t||45===t){if(o=c.charCodeAt(2),88===o||120===o)return NaN;}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+c;}for(i=c.slice(2),s=i.length,l=0;l<s;l++)if(r=i.charCodeAt(l),48>r||r>n)return NaN;return parseInt(i,a)}return+c};if(Ke(Da,!Fa(" 0o1")||!Fa("0b1")||Fa("+0x1"))){for(var Ha,ja=function(e){var t=1>arguments.length?0:e,o=this;return o instanceof ja&&(Ba?A(function(){La.valueOf.call(o)}):B(o)!=Da)?Ta(new Fa(Va(t)),o,ja):Va(t)},Ma=E?Ea(Fa):["MAX_VALUE","MIN_VALUE","NaN","NEGATIVE_INFINITY","POSITIVE_INFINITY","EPSILON","isFinite","isInteger","isNaN","isSafeInteger","MAX_SAFE_INTEGER","MIN_SAFE_INTEGER","parseFloat","parseInt","isInteger"],Ua=0;Ma.length>Ua;Ua++)W(Fa,Ha=Ma[Ua])&&!W(ja,Ha)&&_a(ja,Ha,Ra(Fa,Ha));ja.prototype=La,La.constructor=ja,Te(I,Da,ja)}var lt=Aa.trim,qa=I.parseFloat,za=1/qa(Pa+"-0")!=-Infinity,Ga=za?function(e){var t=lt(e+""),o=qa(t);return 0===o&&"-"==t.charAt(0)?-0:o}:qa;Qe({target:"Number",stat:!0,forced:b!=Ga},{parseFloat:Ga});var Wa=Object.assign,Ya=!Wa||A(function(){var e={},t={},o=Symbol(),a="abcdefghijklmnopqrst";return e[o]=7,a.split("").forEach(function(e){t[e]=e}),7!=Wa({},e)[o]||tt(Wa({},t)).join("")!=a})?function(e){for(var t=et(e),o=arguments.length,a=1,n=He.f,i=f.f;o>a;)for(var s,l=H(arguments[a++]),r=n?tt(l).concat(n(l)):tt(l),c=r.length,d=0;c>d;)s=r[d++],(!E||i.call(l,s))&&(t[s]=l[s]);return t}:Wa;Qe({target:"Object",stat:!0,forced:Object.assign!==Ya},{assign:Ya});var Ka=f.f,Xa=function(e){return function(t){for(var o,a=U(t),n=tt(a),s=n.length,l=0,r=[];s>l;)o=n[l++],(!E||Ka.call(a,o))&&r.push(e?[o,a[o]]:a[o]);return r}},Qa={entries:Xa(!0),values:Xa(!1)},Ja=Qa.entries;Qe({target:"Object",stat:!0},{entries:function(e){return Ja(e)}});var Za=bt("toStringTag"),en="Arguments"==B(function(){return arguments}()),tn=function(e,t){try{return e[t]}catch(e){}},on=function(e){var t,o,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(o=tn(t=Object(e),Za))?o:en?B(t):"Object"==(a=B(t))&&"function"==typeof t.callee?"Arguments":a},an=bt("toStringTag"),nn={};nn[an]="z";var sn=function(){return"[object "+on(this)+"]"},ln=Object.prototype;sn!==ln.toString&&Te(ln,"toString",sn,{unsafe:!0}),Qe({global:!0,forced:parseFloat!=Ga},{parseFloat:Ga});var rn=Aa.trim,cn=I.parseInt,dn=/^[+-]?0[Xx]/,pn=8!==cn(Pa+"08")||22!==cn(Pa+"0x16"),un=pn?function(e,t){var o=rn(e+"");return cn(o,t>>>0||(dn.test(o)?16:10))}:cn;Qe({global:!0,forced:parseInt!=un},{parseInt:un});var hn=function(){var e=te(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},gn="toString",fn=RegExp.prototype,mn=fn[gn],bn=A(function(){return"/a/b"!=mn.call({source:"a",flags:"b"})}),yn=mn.name!=gn;(bn||yn)&&Te(RegExp.prototype,gn,function(){var e=te(this),t=e.source+"",o=e.flags,a=(void 0===o&&e instanceof RegExp&&!("flags"in fn)?hn.call(e):o)+"";return"/"+t+"/"+a},{unsafe:!0});var wn=bt("match"),Sn=function(e){var t;return q(e)&&(void 0===(t=e[wn])?"RegExp"==B(e):!!t)},vn=function(e){if(Sn(e))throw TypeError("The method doesn't accept regular expressions");return e},xn=bt("match");Qe({target:"String",proto:!0,forced:!function(e){var t=/./;try{"/./"[e](t)}catch(o){try{return t[xn]=!1,"/./"[e](t)}catch(e){}}return!1}("includes")},{includes:function(e){return!!~(M(this)+"").indexOf(vn(e),1<arguments.length?arguments[1]:void 0)}});var kn=function(e){return function(t,o){var a,n,i=M(t)+"",s=Ie(o),l=i.length;return 0>s||s>=l?e?"":void 0:(a=i.charCodeAt(s),55296>a||56319<a||s+1===l||56320>(n=i.charCodeAt(s+1))||57343<n?e?i.charAt(s):a:e?i.slice(s,s+2):(a-55296<<10)+(n-56320)+65536)}},Tn={codeAt:kn(!1),charAt:kn(!0)},Pn=Tn.charAt,On="String Iterator",Cn=ke.set,In=ke.getterFor(On);ca(String,"String",function(e){Cn(this,{type:On,string:e+"",index:0})},function(){var e,t=In(this),o=t.string,a=t.index;return a>=o.length?{value:void 0,done:!0}:(e=Pn(o,a),t.index+=e.length,{value:e,done:!1})});var $n=RegExp.prototype.exec,An=m.replace,En=$n,Rn=function(){var e=/a/,t=/b*/g;return $n.call(e,"a"),$n.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),_n=void 0!==/()??/.exec("")[1];(Rn||_n)&&(En=function(e){var t,o,a,n,s=this;return _n&&(o=new RegExp("^"+s.source+"$(?!\\s)",hn.call(s))),Rn&&(t=s.lastIndex),a=$n.call(s,e),Rn&&a&&(s.lastIndex=s.global?a.index+a[0].length:t),_n&&a&&1<a.length&&An.call(a[0],o,function(){for(n=1;n<arguments.length-2;n++)void 0===arguments[n]&&(a[n]=void 0)}),a});var Nn=En,Dn=bt("species"),Fn=!A(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),Ln=!A(function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var o="ab".split(e);return 2!==o.length||"a"!==o[0]||"b"!==o[1]}),Bn=function(e,t,o,a){var n=bt(e),i=!A(function(){var t={};return t[n]=function(){return 7},7!=""[e](t)}),s=i&&!A(function(){var t=!1,o=/a/;return o.exec=function(){return t=!0,null},"split"===e&&(o.constructor={},o.constructor[Dn]=function(){return o}),o[n](""),!t});if(!i||!s||"replace"===e&&!Fn||"split"===e&&!Ln){var l=/./[n],r=o(n,""[e],function(e,t,o,a,n){return t.exec===Nn?i&&!n?{done:!0,value:l.call(t,o,a)}:{done:!0,value:e.call(o,t,a)}:{done:!1}}),c=r[0],d=r[1];Te(String.prototype,e,c),Te(RegExp.prototype,n,2==t?function(e,t){return d.call(e,this,t)}:function(e){return d.call(e,this)}),a&&ie(RegExp.prototype[n],"sham",!0)}},Vn=Tn.charAt,Hn=function(e,t,o){return t+(o?Vn(e,t).length:1)},jn=function(e,t){var o=e.exec;if("function"==typeof o){var a=o.call(e,t);if("object"!=typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==B(e))throw TypeError("RegExp#exec called on incompatible receiver");return Nn.call(e,t)},Mn=/\$([$&'`]|\d\d?|<[^>]*>)/g,Un=/\$([$&'`]|\d\d?)/g,qn=function(e){return void 0===e?e:e+""};Bn("replace",2,function(e,t,o){function a(e,o,a,i,s,l){var r=a+e.length,c=i.length,n=Un;return void 0!==s&&(s=et(s),n=Mn),t.call(l,n,function(t,l){var d;switch(l.charAt(0)){case"$":return"$";case"&":return e;case"`":return o.slice(0,a);case"'":return o.slice(r);case"<":d=s[l.slice(1,-1)];break;default:var p=+l;if(0==p)return t;if(p>c){var n=S(p/10);return 0===n?t:n<=c?void 0===i[n-1]?l.charAt(1):i[n-1]+l.charAt(1):t}d=i[p-1];}return void 0===d?"":d})}return[function(o,a){var n=M(this),i=null==o?void 0:o[e];return void 0===i?t.call(n+"",o,a):i.call(o,n,a)},function(e,n){var s=o(t,e,this,n);if(s.done)return s.value;var l=te(e),r=this+"",c="function"==typeof n;c||(n+="");var d=l.global;if(d){var p=l.unicode;l.lastIndex=0}for(var u,h,g=[];(u=jn(l,r),null!==u)&&(g.push(u),!!d);)h=u[0]+"",""==h&&(l.lastIndex=Hn(r,$e(l.lastIndex),p));for(var f="",m=0,b=0;b<g.length;b++){u=g[b];for(var S=u[0]+"",v=y(w(Ie(u.index),r.length),0),x=[],k=1;k<u.length;k++)x.push(qn(u[k]));var T=u.groups;if(c){var P=[S].concat(x,v,r);void 0!==T&&P.push(T);var O=n.apply(void 0,P)+""}else O=a(S,r,v,x,T,n);v>=m&&(f+=r.slice(m,v)+O,m=v+S.length)}return f+r.slice(m)}]});var zn=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t};Bn("search",1,function(e,t,o){return[function(t){var o=M(this),a=null==t?void 0:t[e];return void 0===a?new RegExp(t)[e](o+""):a.call(t,o)},function(e){var a=o(t,e,this);if(a.done)return a.value;var n=te(e),i=this+"",s=n.lastIndex;zn(s,0)||(n.lastIndex=0);var l=jn(n,i);return zn(n.lastIndex,s)||(n.lastIndex=s),null===l?-1:l.index}]});var Gn=bt("species"),Wn=function(e,t){var o,a=te(e).constructor;return void 0===a||null==(o=te(a)[Gn])?t:Tt(o)},Yn=[].push,Kn=4294967295,Xn=!A(function(){return!RegExp(Kn,"y")});Bn("split",2,function(e,t,o){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||1<".".split(/()()/).length||"".split(/.?/).length?function(e,o){var a=M(this)+"",n=void 0===o?Kn:o>>>0;if(0===n)return[];if(void 0===e)return[a];if(!Sn(e))return t.call(a,e,n);for(var i,s,l,r=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,p=new RegExp(e.source,c+"g");(i=Nn.call(p,a))&&(s=p.lastIndex,!(s>d&&(r.push(a.slice(d,i.index)),1<i.length&&i.index<a.length&&Yn.apply(r,i.slice(1)),l=i[0].length,d=s,r.length>=n)));)p.lastIndex===i.index&&p.lastIndex++;return d===a.length?(l||!p.test(""))&&r.push(""):r.push(a.slice(d)),r.length>n?r.slice(0,n):r}:function(e,o){return void 0===e&&0===o?[]:t.call(this,e,o)},[function(t,o){var n=M(this),i=null==t?void 0:t[e];return void 0===i?a.call(n+"",t,o):i.call(t,n,o)},function(n,s){var l=o(a,n,this,s,a!==t);if(l.done)return l.value;var r=te(n),c=this+"",d=Wn(r,RegExp),u=r.unicode,h=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(Xn?"y":"g"),g=new d(Xn?r:"^(?:"+r.source+")",h),f=void 0===s?Kn:s>>>0;if(0===f)return[];if(0===c.length)return null===jn(g,c)?[c]:[];for(var m=0,b=0,y=[];b<c.length;){g.lastIndex=Xn?b:0;var S,v=jn(g,Xn?c:c.slice(b));if(null===v||(S=w($e(g.lastIndex+(Xn?0:b)),c.length))===m)b=Hn(c,b,u);else{if(y.push(c.slice(m,b)),y.length===f)return y;for(var x=1;x<=v.length-1;x++)if(y.push(v[x]),y.length===f)return y;b=m=S}}return y.push(c.slice(m)),y}]},!Xn);var Qn=Aa.trim;Qe({target:"String",proto:!0,forced:function(e){return A(function(){return!!Pa[e]()||"\u200B\x85\u180E"!="\u200B\x85\u180E"[e]()||Pa[e].name!==e})}("trim")},{trim:function(){return Qn(this)}});var Jn={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Zn=At.forEach,ei=Lo("forEach")?function(e){return Zn(this,e,1<arguments.length?arguments[1]:void 0)}:[].forEach;for(var ti in Jn){var oi=I[ti],ai=oi&&oi.prototype;if(ai&&ai.forEach!==ei)try{ie(ai,"forEach",ei)}catch(e){ai.forEach=ei}}var ni=bt("iterator"),ii=bt("toStringTag"),si=ha.values;for(var li in Jn){var ri=I[li],ci=ri&&ri.prototype;if(ci){if(ci[ni]!==si)try{ie(ci,ni,si)}catch(e){ci[ni]=si}if(ci[ii]||ie(ci,ii,li),Jn[li])for(var di in ha)if(ci[di]!==ha[di])try{ie(ci,di,ha[di])}catch(e){ci[di]=ha[di]}}}var pi=4;try{var ui=t.fn.dropdown.Constructor.VERSION;void 0!==ui&&(pi=parseInt(ui,10))}catch(t){}var hi={3:{iconsPrefix:"glyphicon",icons:{paginationSwitchDown:"glyphicon-collapse-down icon-chevron-down",paginationSwitchUp:"glyphicon-collapse-up icon-chevron-up",refresh:"glyphicon-refresh icon-refresh",toggleOff:"glyphicon-list-alt icon-list-alt",toggleOn:"glyphicon-list-alt icon-list-alt",columns:"glyphicon-th icon-th",detailOpen:"glyphicon-plus icon-plus",detailClose:"glyphicon-minus icon-minus",fullscreen:"glyphicon-fullscreen",search:"glyphicon-search",clearSearch:"glyphicon-trash"},classes:{buttonsPrefix:"btn",buttons:"default",buttonsGroup:"btn-group",buttonsDropdown:"btn-group",pull:"pull",inputGroup:"input-group",input:"form-control",paginationDropdown:"btn-group dropdown",dropup:"dropup",dropdownActive:"active",paginationActive:"active",buttonActive:"active"},html:{toolbarDropdown:["<ul class=\"dropdown-menu\" role=\"menu\">","</ul>"],toolbarDropdownItem:"<li role=\"menuitem\"><label>%s</label></li>",toolbarDropdownSeperator:"<li class=\"divider\"></li>",pageDropdown:["<ul class=\"dropdown-menu\" role=\"menu\">","</ul>"],pageDropdownItem:"<li role=\"menuitem\" class=\"%s\"><a href=\"#\">%s</a></li>",dropdownCaret:"<span class=\"caret\"></span>",pagination:["<ul class=\"pagination%s\">","</ul>"],paginationItem:"<li class=\"page-item%s\"><a class=\"page-link\" aria-label=\"%s\" href=\"javascript:void(0)\">%s</a></li>",icon:"<i class=\"%s %s\"></i>",inputGroup:"<div class=\"input-group\">%s<span class=\"input-group-btn\">%s</span></div>",searchInput:"<input class=\"%s%s\" type=\"text\" placeholder=\"%s\">",searchButton:"<button class=\"btn btn-default\" type=\"button\" name=\"search\" title=\"%s\">%s %s</button>",searchClearButton:"<button class=\"btn btn-default\" type=\"button\" name=\"clearSearch\" title=\"%s\">%s %s</button>"}},4:{iconsPrefix:"fa",icons:{paginationSwitchDown:"fa-caret-square-down",paginationSwitchUp:"fa-caret-square-up",refresh:"fa-sync",toggleOff:"fa-toggle-off",toggleOn:"fa-toggle-on",columns:"fa-th-list",detailOpen:"fa-plus",detailClose:"fa-minus",fullscreen:"fa-arrows-alt",search:"fa-search",clearSearch:"fa-trash"},classes:{buttonsPrefix:"btn",buttons:"secondary",buttonsGroup:"btn-group",buttonsDropdown:"btn-group",pull:"float",inputGroup:"btn-group",input:"form-control",paginationDropdown:"btn-group dropdown",dropup:"dropup",dropdownActive:"active",paginationActive:"active",buttonActive:"active"},html:{toolbarDropdown:["<div class=\"dropdown-menu dropdown-menu-right\">","</div>"],toolbarDropdownItem:"<label class=\"dropdown-item\">%s</label>",pageDropdown:["<div class=\"dropdown-menu\">","</div>"],pageDropdownItem:"<a class=\"dropdown-item %s\" href=\"#\">%s</a>",toolbarDropdownSeperator:"<div class=\"dropdown-divider\"></div>",dropdownCaret:"<span class=\"caret\"></span>",pagination:["<ul class=\"pagination%s\">","</ul>"],paginationItem:"<li class=\"page-item%s\"><a class=\"page-link\" aria-label=\"%s\" href=\"javascript:void(0)\">%s</a></li>",icon:"<i class=\"%s %s\"></i>",inputGroup:"<div class=\"input-group\">%s<div class=\"input-group-append\">%s</div></div>",searchInput:"<input class=\"%s%s\" type=\"text\" placeholder=\"%s\">",searchButton:"<button class=\"btn btn-secondary\" type=\"button\" name=\"search\" title=\"%s\">%s %s</button>",searchClearButton:"<button class=\"btn btn-secondary\" type=\"button\" name=\"clearSearch\" title=\"%s\">%s %s</button>"}}}[pi],gi={height:void 0,classes:"table table-bordered table-hover",theadClasses:"",rowStyle:function(){return{}},rowAttributes:function(){return{}},undefinedText:"-",locale:void 0,virtualScroll:!1,virtualScrollItemHeight:void 0,sortable:!0,sortClass:void 0,silentSort:!0,sortName:void 0,sortOrder:"asc",sortStable:!1,rememberOrder:!1,customSort:void 0,columns:[[]],data:[],url:void 0,method:"get",cache:!0,contentType:"application/json",dataType:"json",ajax:void 0,ajaxOptions:{},queryParams:function(e){return e},queryParamsType:"limit",responseHandler:function(e){return e},totalField:"total",totalNotFilteredField:"totalNotFiltered",dataField:"rows",pagination:!1,onlyInfoPagination:!1,showExtendedPagination:!1,paginationLoop:!0,sidePagination:"client",totalRows:0,totalNotFiltered:0,pageNumber:1,pageSize:10,pageList:[10,25,50,100],paginationHAlign:"right",paginationVAlign:"bottom",paginationDetailHAlign:"left",paginationPreText:"&lsaquo;",paginationNextText:"&rsaquo;",paginationSuccessivelySize:5,paginationPagesBySide:1,paginationUseIntermediate:!1,search:!1,searchOnEnterKey:!1,strictSearch:!1,visibleSearch:!1,showButtonIcons:!0,showButtonText:!1,showSearchButton:!1,showSearchClearButton:!1,trimOnSearch:!0,searchAlign:"right",searchTimeOut:500,searchText:"",customSearch:void 0,showHeader:!0,showFooter:!1,footerStyle:function(){return{}},showColumns:!1,showColumnsToggleAll:!1,minimumCountColumns:1,showPaginationSwitch:!1,showRefresh:!1,showToggle:!1,showFullscreen:!1,smartDisplay:!0,escape:!1,filterOptions:{filterAlgorithm:"and"},idField:void 0,selectItemName:"btSelectItem",clickToSelect:!1,ignoreClickToSelectOn:function(e){var t=e.tagName;return["A","BUTTON"].includes(t)},singleSelect:!1,checkboxHeader:!0,maintainMetaData:!1,multipleSelectRow:!1,uniqueId:void 0,cardView:!1,detailView:!1,detailViewIcon:!0,detailViewByClick:!1,detailFormatter:function(){return""},detailFilter:function(){return!0},toolbar:void 0,toolbarAlign:"left",buttonsToolbar:void 0,buttonsAlign:"right",buttonsPrefix:hi.classes.buttonsPrefix,buttonsClass:hi.classes.buttons,icons:hi.icons,html:hi.html,iconSize:void 0,iconsPrefix:hi.iconsPrefix,onAll:function(){return!1},onClickCell:function(){return!1},onDblClickCell:function(){return!1},onClickRow:function(){return!1},onDblClickRow:function(){return!1},onSort:function(){return!1},onCheck:function(){return!1},onUncheck:function(){return!1},onCheckAll:function(){return!1},onUncheckAll:function(){return!1},onCheckSome:function(){return!1},onUncheckSome:function(){return!1},onLoadSuccess:function(){return!1},onLoadError:function(){return!1},onColumnSwitch:function(){return!1},onPageChange:function(){return!1},onSearch:function(){return!1},onToggle:function(){return!1},onPreBody:function(){return!1},onPostBody:function(){return!1},onPostHeader:function(){return!1},onPostFooter:function(){return!1},onExpandRow:function(){return!1},onCollapseRow:function(){return!1},onRefreshOptions:function(){return!1},onRefresh:function(){return!1},onResetView:function(){return!1},onScrollBody:function(){return!1}},fi={formatLoadingMessage:function(){return"Loading, please wait"},formatRecordsPerPage:function(e){return"".concat(e," rows per page")},formatShowingRows:function(e,t,o,a){return void 0!==a&&0<a&&a>o?"Showing ".concat(e," to ").concat(t," of ").concat(o," rows (filtered from ").concat(a," total rows)"):"Showing ".concat(e," to ").concat(t," of ").concat(o," rows")},formatSRPaginationPreText:function(){return"previous page"},formatSRPaginationPageText:function(e){return"to page ".concat(e)},formatSRPaginationNextText:function(){return"next page"},formatDetailPagination:function(e){return"Showing ".concat(e," rows")},formatSearch:function(){return"Search"},formatClearSearch:function(){return"Clear Search"},formatNoMatches:function(){return"No matching records found"},formatPaginationSwitch:function(){return"Hide/Show pagination"},formatPaginationSwitchDown:function(){return"Show pagination"},formatPaginationSwitchUp:function(){return"Hide pagination"},formatRefresh:function(){return"Refresh"},formatToggle:function(){return"Toggle"},formatToggleOn:function(){return"Show card view"},formatToggleOff:function(){return"Hide card view"},formatColumns:function(){return"Columns"},formatColumnsToggleAll:function(){return"Toggle all"},formatFullscreen:function(){return"Fullscreen"},formatAllRows:function(){return"All"}};Object.assign(gi,fi);var mi={VERSION:"1.15.2",THEME:"bootstrap".concat(pi),CONSTANTS:hi,DEFAULTS:gi,COLUMN_DEFAULTS:{field:void 0,title:void 0,titleTooltip:void 0,class:void 0,width:void 0,widthUnit:"px",rowspan:void 0,colspan:void 0,align:void 0,halign:void 0,falign:void 0,valign:void 0,cellStyle:void 0,radio:!1,checkbox:!1,checkboxEnabled:!0,clickToSelect:!0,showSelectTitle:!1,sortable:!1,sortName:void 0,order:"asc",sorter:void 0,visible:!0,switchable:!0,cardVisible:!0,searchable:!0,formatter:void 0,footerFormatter:void 0,detailFormatter:void 0,searchFormatter:!0,escape:!1,events:void 0},METHODS:["getOptions","refreshOptions","getData","getSelections","getAllSelections","load","append","prepend","remove","removeAll","insertRow","updateRow","getRowByUniqueId","updateByUniqueId","removeByUniqueId","updateCell","updateCellByUniqueId","showRow","hideRow","getHiddenRows","showColumn","hideColumn","getVisibleColumns","getHiddenColumns","showAllColumns","hideAllColumns","mergeCells","checkAll","uncheckAll","checkInvert","check","uncheck","checkBy","uncheckBy","refresh","destroy","resetView","resetWidth","showLoading","hideLoading","togglePagination","toggleFullscreen","toggleView","resetSearch","filterBy","scrollTo","getScrollPosition","selectPage","prevPage","nextPage","toggleDetailView","expandRow","collapseRow","expandAllRows","collapseAllRows","updateColumnTitle","updateFormatText"],EVENTS:{"all.bs.table":"onAll","click-row.bs.table":"onClickRow","dbl-click-row.bs.table":"onDblClickRow","click-cell.bs.table":"onClickCell","dbl-click-cell.bs.table":"onDblClickCell","sort.bs.table":"onSort","check.bs.table":"onCheck","uncheck.bs.table":"onUncheck","check-all.bs.table":"onCheckAll","uncheck-all.bs.table":"onUncheckAll","check-some.bs.table":"onCheckSome","uncheck-some.bs.table":"onUncheckSome","load-success.bs.table":"onLoadSuccess","load-error.bs.table":"onLoadError","column-switch.bs.table":"onColumnSwitch","page-change.bs.table":"onPageChange","search.bs.table":"onSearch","toggle.bs.table":"onToggle","pre-body.bs.table":"onPreBody","post-body.bs.table":"onPostBody","post-header.bs.table":"onPostHeader","post-footer.bs.table":"onPostFooter","expand-row.bs.table":"onExpandRow","collapse-row.bs.table":"onCollapseRow","refresh-options.bs.table":"onRefreshOptions","reset-view.bs.table":"onResetView","refresh.bs.table":"onRefresh","scroll-body.bs.table":"onScrollBody"},LOCALES:{en:fi,"en-US":fi}},bi=A(function(){tt(1)});Qe({target:"Object",stat:!0,forced:bi},{keys:function(e){return tt(et(e))}});var yi={sprintf:function(e){for(var t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];var n=!0,s=0,l=e.replace(/%s/g,function(){var e=o[s++];return"undefined"==typeof e?(n=!1,""):e});return n?l:""},isEmptyObject:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return 0===Object.entries(e).length&&e.constructor===Object},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},getFieldTitle:function(e,t){var o=!0,a=!1,n=void 0;try{for(var i,s,l=e[Symbol.iterator]();!(o=(i=l.next()).done);o=!0)if(s=i.value,s.field===t)return s.title}catch(e){a=!0,n=e}finally{try{o||null==l.return||l.return()}finally{if(a)throw n}}return""},setFieldIndex:function(e){var t=0,o=[],a=!0,n=!1,s=void 0;try{for(var l,c,d=e[0][Symbol.iterator]();!(a=(l=d.next()).done);a=!0)c=l.value,t+=c.colspan||1}catch(e){n=!0,s=e}finally{try{a||null==d.return||d.return()}finally{if(n)throw s}}for(var p=0;p<e.length;p++){o[p]=[];for(var u=0;u<t;u++)o[p][u]=!1}for(var h=0;h<e.length;h++){var g=!0,f=!1,m=void 0;try{for(var b,y=e[h][Symbol.iterator]();!(g=(b=y.next()).done);g=!0){var w=b.value,r=w.rowspan||1,S=w.colspan||1,v=o[h].indexOf(!1);1===S&&(w.fieldIndex=v,"undefined"==typeof w.field&&(w.field=v));for(var x=0;x<r;x++)o[h+x][v]=!0;for(var T=0;T<S;T++)o[h][v+T]=!0}}catch(e){f=!0,m=e}finally{try{g||null==y.return||y.return()}finally{if(f)throw m}}}},getScrollBarWidth:function(){if(void 0===this.cachedWidth){var e=t("<div/>").addClass("fixed-table-scroll-inner"),o=t("<div/>").addClass("fixed-table-scroll-outer");o.append(e),t("body").append(o);var a=e[0].offsetWidth;o.css("overflow","scroll");var n=e[0].offsetWidth;a===n&&(n=o[0].clientWidth),o.remove(),this.cachedWidth=a-n}return this.cachedWidth},calculateObjectValue:function(e,t,o,n){var i=t;if("string"==typeof t){var s=t.split(".");if(1<s.length){i=window;var l=!0,c=!1,d=void 0;try{for(var p,u,h=s[Symbol.iterator]();!(l=(p=h.next()).done);l=!0)u=p.value,i=i[u]}catch(e){c=!0,d=e}finally{try{l||null==h.return||h.return()}finally{if(c)throw d}}}else i=window[t]}return null!==i&&"object"===a(i)?i:"function"==typeof i?i.apply(e,o||[]):!i&&"string"==typeof t&&this.sprintf.apply(this,[t].concat(r(o)))?this.sprintf.apply(this,[t].concat(r(o))):n},compareObjects:function(e,t,o){var a=Object.keys(e),n=Object.keys(t);if(o&&a.length!==n.length)return!1;for(var i,s=0,l=a;s<l.length;s++)if(i=l[s],n.includes(i)&&e[i]!==t[i])return!1;return!0},escapeHTML:function(e){return"string"==typeof e?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/`/g,"&#x60;"):e},getRealDataAttr:function(e){for(var t=0,o=Object.entries(e);t<o.length;t++){var a=l(o[t],2),n=a[0],i=a[1],s=n.split(/(?=[A-Z])/).join("-").toLowerCase();s!==n&&(e[s]=i,delete e[n])}return e},getItemField:function(e,t,o){var a=e;if("string"!=typeof t||e.hasOwnProperty(t))return o?this.escapeHTML(e[t]):e[t];var n=t.split("."),i=!0,s=!1,l=void 0;try{for(var r,c,d=n[Symbol.iterator]();!(i=(r=d.next()).done);i=!0)c=r.value,a=a&&a[c]}catch(e){s=!0,l=e}finally{try{i||null==d.return||d.return()}finally{if(s)throw l}}return o?this.escapeHTML(a):a},isIEBrowser:function(){return navigator.userAgent.includes("MSIE ")||/Trident.*rv:11\./.test(navigator.userAgent)},findIndex:function(e,t){var o=!0,a=!1,n=void 0;try{for(var i,s,l=e[Symbol.iterator]();!(o=(i=l.next()).done);o=!0)if(s=i.value,JSON.stringify(s)===JSON.stringify(t))return e.indexOf(s)}catch(e){a=!0,n=e}finally{try{o||null==l.return||l.return()}finally{if(a)throw n}}return-1},trToData:function(e,o){var a=this,n=[],i=[];return o.each(function(o,s){var l={};l._id=t(s).attr("id"),l._class=t(s).attr("class"),l._data=a.getRealDataAttr(t(s).data()),t(s).find(">td,>th").each(function(n,s){for(var r=+t(s).attr("colspan")||1,c=+t(s).attr("rowspan")||1,d=n;i[o]&&i[o][d];d++);for(var p=d;p<d+r;p++)for(var u=o;u<o+c;u++)i[u]||(i[u]=[]),i[u][p]=!0;var h=e[d].field;l[h]=t(s).html().trim(),l["_".concat(h,"_id")]=t(s).attr("id"),l["_".concat(h,"_class")]=t(s).attr("class"),l["_".concat(h,"_rowspan")]=t(s).attr("rowspan"),l["_".concat(h,"_colspan")]=t(s).attr("colspan"),l["_".concat(h,"_title")]=t(s).attr("title"),l["_".concat(h,"_data")]=a.getRealDataAttr(t(s).data())}),n.push(l)}),n},sort:function(e,t,o,n){return((void 0===e||null===e)&&(e=""),(void 0===t||null===t)&&(t=""),n&&e===t&&(e=e._position,t=t._position),this.isNumeric(e)&&this.isNumeric(t))?(e=parseFloat(e),t=parseFloat(t),e<t?-1*o:e>t?o:0):e===t?0:("string"!=typeof e&&(e=e.toString()),-1===e.localeCompare(t)?-1*o:o)}},wi=50,Si=4,vi=function(){function e(t){var o=this;n(this,e),this.rows=t.rows,this.scrollEl=t.scrollEl,this.contentEl=t.contentEl,this.callback=t.callback,this.itemHeight=t.itemHeight,this.cache={},this.scrollTop=this.scrollEl.scrollTop,this.initDOM(this.rows),this.scrollEl.scrollTop=this.scrollTop,this.lastCluster=0;var a=function(){o.lastCluster!==(o.lastCluster=o.getNum())&&(o.initDOM(o.rows),o.callback())};this.scrollEl.addEventListener("scroll",a,!1),this.destroy=function(){o.contentEl.innerHtml="",o.scrollEl.removeEventListener("scroll",a,!1)}}return s(e,[{key:"initDOM",value:function(e){"undefined"==typeof this.clusterHeight&&(this.cache.data=this.contentEl.innerHTML=e[0]+e[0]+e[0],this.getRowsHeight(e));var t=this.initData(e,this.getNum()),o=t.rows.join(""),a=this.checkChanges("data",o),n=this.checkChanges("top",t.topOffset),i=this.checkChanges("bottom",t.bottomOffset),s=[];a&&n?(t.topOffset&&s.push(this.getExtra("top",t.topOffset)),s.push(o),t.bottomOffset&&s.push(this.getExtra("bottom",t.bottomOffset)),this.contentEl.innerHTML=s.join("")):i&&(this.contentEl.lastChild.style.height="".concat(t.bottomOffset,"px"))}},{key:"getRowsHeight",value:function(){if("undefined"==typeof this.itemHeight){var e=this.contentEl.children,t=e[S(e.length/2)];this.itemHeight=t.offsetHeight}this.blockHeight=this.itemHeight*wi,this.clusterRows=wi*Si,this.clusterHeight=this.blockHeight*Si}},{key:"getNum",value:function(){return this.scrollTop=this.scrollEl.scrollTop,S(this.scrollTop/(this.clusterHeight-this.blockHeight))||0}},{key:"initData",value:function(e,t){if(e.length<wi)return{topOffset:0,bottomOffset:0,rowsAbove:0,rows:e};var o=y((this.clusterRows-wi)*t,0),a=o+this.clusterRows,n=y(o*this.itemHeight,0),s=y((e.length-a)*this.itemHeight,0),l=[],r=o;1>n&&r++;for(var c=o;c<a;c++)e[c]&&l.push(e[c]);return{topOffset:n,bottomOffset:s,rowsAbove:r,rows:l}}},{key:"checkChanges",value:function(e,t){var o=t!==this.cache[e];return this.cache[e]=t,o}},{key:"getExtra",value:function(e,t){var o=document.createElement("tr");return o.className="virtual-scroll-".concat(e),t&&(o.style.height="".concat(t,"px")),o.outerHTML}}]),e}(),xi=function(){function e(o,a){n(this,e),this.options=a,this.$el=t(o),this.$el_=this.$el.clone(),this.timeoutId_=0,this.timeoutFooter_=0,this.init()}return s(e,[{key:"init",value:function(){this.initConstants(),this.initLocale(),this.initContainer(),this.initTable(),this.initHeader(),this.initData(),this.initHiddenRows(),this.initToolbar(),this.initPagination(),this.initBody(),this.initSearchText(),this.initServer()}},{key:"initConstants",value:function(){var e=this.options;this.constants=mi.CONSTANTS,this.constants.theme=t.fn.bootstrapTable.theme;var o=e.buttonsPrefix?"".concat(e.buttonsPrefix,"-"):"";this.constants.buttonsClass=[e.buttonsPrefix,o+e.buttonsClass,yi.sprintf("".concat(o,"%s"),e.iconSize)].join(" ").trim()}},{key:"initLocale",value:function(){if(this.options.locale){var e=t.fn.bootstrapTable.locales,o=this.options.locale.split(/-|_/);o[0]=o[0].toLowerCase(),o[1]&&(o[1]=o[1].toUpperCase()),e[this.options.locale]?t.extend(this.options,e[this.options.locale]):e[o.join("-")]?t.extend(this.options,e[o.join("-")]):e[o[0]]&&t.extend(this.options,e[o[0]])}}},{key:"initContainer",value:function(){var e=["top","both"].includes(this.options.paginationVAlign)?"<div class=\"fixed-table-pagination clearfix\"></div>":"",o=["bottom","both"].includes(this.options.paginationVAlign)?"<div class=\"fixed-table-pagination\"></div>":"";this.$container=t("\n      <div class=\"bootstrap-table ".concat(this.constants.theme,"\">\n      <div class=\"fixed-table-toolbar\"></div>\n      ").concat(e,"\n      <div class=\"fixed-table-container\">\n      <div class=\"fixed-table-header\"><table></table></div>\n      <div class=\"fixed-table-body\">\n      <div class=\"fixed-table-loading\">\n      <span class=\"loading-wrap\">\n      <span class=\"loading-text\">").concat(this.options.formatLoadingMessage(),"</span>\n      <span class=\"animation-wrap\"><span class=\"animation-dot\"></span></span>\n      </span>\n      </div>\n      </div>\n      <div class=\"fixed-table-footer\"><table><thead><tr></tr></thead></table></div>\n      </div>\n      ").concat(o,"\n      </div>\n    ")),this.$container.insertAfter(this.$el),this.$tableContainer=this.$container.find(".fixed-table-container"),this.$tableHeader=this.$container.find(".fixed-table-header"),this.$tableBody=this.$container.find(".fixed-table-body"),this.$tableLoading=this.$container.find(".fixed-table-loading"),this.$tableFooter=this.$el.find("tfoot"),this.$toolbar=this.options.buttonsToolbar?t("body").find(this.options.buttonsToolbar):this.$container.find(".fixed-table-toolbar"),this.$pagination=this.$container.find(".fixed-table-pagination"),this.$tableBody.append(this.$el),this.$container.after("<div class=\"clearfix\"></div>"),this.$el.addClass(this.options.classes),this.$tableLoading.addClass(this.options.classes),this.options.height&&(this.$tableContainer.addClass("fixed-height"),this.options.showFooter&&this.$tableContainer.addClass("has-footer"),this.options.classes.split(" ").includes("table-bordered")&&(this.$tableBody.append("<div class=\"fixed-table-border\"></div>"),this.$tableBorder=this.$tableBody.find(".fixed-table-border"),this.$tableLoading.addClass("fixed-table-border")),this.$tableFooter=this.$container.find(".fixed-table-footer"))}},{key:"initTable",value:function(){var o=this,a=[];this.$header=this.$el.find(">thead"),this.$header.length?this.options.theadClasses&&this.$header.addClass(this.options.theadClasses):this.$header=t("<thead class=\"".concat(this.options.theadClasses,"\"></thead>")).appendTo(this.$el),this.$header.find("tr").each(function(e,o){var n=[];t(o).find("th").each(function(e,o){"undefined"!=typeof t(o).data("field")&&t(o).data("field","".concat(t(o).data("field"))),n.push(t.extend({},{title:t(o).html(),class:t(o).attr("class"),titleTooltip:t(o).attr("title"),rowspan:t(o).attr("rowspan")?+t(o).attr("rowspan"):void 0,colspan:t(o).attr("colspan")?+t(o).attr("colspan"):void 0},t(o).data()))}),a.push(n)}),Array.isArray(this.options.columns[0])||(this.options.columns=[this.options.columns]),this.options.columns=t.extend(!0,[],a,this.options.columns),this.columns=[],this.fieldsColumnsIndex=[],yi.setFieldIndex(this.options.columns),this.options.columns.forEach(function(a,n){a.forEach(function(a,i){var s=t.extend({},e.COLUMN_DEFAULTS,a);"undefined"!=typeof s.fieldIndex&&(o.columns[s.fieldIndex]=s,o.fieldsColumnsIndex[s.field]=s.fieldIndex),o.options.columns[n][i]=s})}),this.options.data.length||(this.options.data=yi.trToData(this.columns,this.$el.find(">tbody>tr")),[].length&&(this.fromHtml=!0)),this.footerData=yi.trToData(this.columns,this.$el.find(">tfoot>tr")),this.footerData&&this.$el.find("tfoot").html("<tr></tr>"),!this.options.showFooter||this.options.cardView?this.$tableFooter.hide():this.$tableFooter.show()}},{key:"initHeader",value:function(){var o=this,a={},n=[];this.header={fields:[],styles:[],classes:[],formatters:[],detailFormatters:[],events:[],sorters:[],sortNames:[],cellStyles:[],searchables:[]},this.options.columns.forEach(function(e,t){n.push("<tr>"),0===t&&!o.options.cardView&&o.options.detailView&&o.options.detailViewIcon&&n.push("<th class=\"detail\" rowspan=\"".concat(o.options.columns.length,"\">\n          <div class=\"fht-cell\"></div>\n          </th>\n        ")),e.forEach(function(e,i){var s=yi.sprintf(" class=\"%s\"",e["class"]),l=e.widthUnit,r=b(e.width),c=yi.sprintf("text-align: %s; ",e.halign?e.halign:e.align),d=yi.sprintf("text-align: %s; ",e.align),p=yi.sprintf("vertical-align: %s; ",e.valign);if(p+=yi.sprintf("width: %s; ",(e.checkbox||e.radio)&&!r?e.showSelectTitle?void 0:"36px":r?r+l:void 0),"undefined"!=typeof e.fieldIndex){if(o.header.fields[e.fieldIndex]=e.field,o.header.styles[e.fieldIndex]=d+p,o.header.classes[e.fieldIndex]=s,o.header.formatters[e.fieldIndex]=e.formatter,o.header.detailFormatters[e.fieldIndex]=e.detailFormatter,o.header.events[e.fieldIndex]=e.events,o.header.sorters[e.fieldIndex]=e.sorter,o.header.sortNames[e.fieldIndex]=e.sortName,o.header.cellStyles[e.fieldIndex]=e.cellStyle,o.header.searchables[e.fieldIndex]=e.searchable,!e.visible)return;if(o.options.cardView&&!e.cardVisible)return;a[e.field]=e}n.push("<th".concat(yi.sprintf(" title=\"%s\"",e.titleTooltip)),e.checkbox||e.radio?yi.sprintf(" class=\"bs-checkbox %s\"",e["class"]||""):s,yi.sprintf(" style=\"%s\"",c+p),yi.sprintf(" rowspan=\"%s\"",e.rowspan),yi.sprintf(" colspan=\"%s\"",e.colspan),yi.sprintf(" data-field=\"%s\"",e.field),0===i&&0<t?" data-not-first-th":"",">"),n.push(yi.sprintf("<div class=\"th-inner %s\">",o.options.sortable&&e.sortable?"sortable both":""));var u=o.options.escape?yi.escapeHTML(e.title):e.title,h=u;e.checkbox&&(u="",!o.options.singleSelect&&o.options.checkboxHeader&&(u="<label><input name=\"btSelectAll\" type=\"checkbox\" /><span></span></label>"),o.header.stateField=e.field),e.radio&&(u="",o.header.stateField=e.field,o.options.singleSelect=!0),!u&&e.showSelectTitle&&(u+=h),n.push(u),n.push("</div>"),n.push("<div class=\"fht-cell\"></div>"),n.push("</div>"),n.push("</th>")}),n.push("</tr>")}),this.$header.html(n.join("")),this.$header.find("th[data-field]").each(function(e,o){t(o).data(a[t(o).data("field")])}),this.$container.off("click",".th-inner").on("click",".th-inner",function(a){var e=t(a.currentTarget);return(!o.options.detailView||e.parent().hasClass("bs-checkbox")||e.closest(".bootstrap-table")[0]===o.$container[0])&&void(o.options.sortable&&e.parent().data().sortable&&o.onSort(a))}),this.$header.children().children().off("keypress").on("keypress",function(a){if(o.options.sortable&&t(a.currentTarget).data().sortable){var e=a.keyCode||a.which;13===e&&o.onSort(a)}});var i="resize.bootstrap-table".concat(this.$el.attr("id")||"");t(window).off(i),!this.options.showHeader||this.options.cardView?(this.$header.hide(),this.$tableHeader.hide(),this.$tableLoading.css("top",0)):(this.$header.show(),this.$tableHeader.show(),this.$tableLoading.css("top",this.$header.outerHeight()+1),this.getCaret(),t(window).on(i,function(t){return o.resetWidth(t)})),this.$selectAll=this.$header.find("[name=\"btSelectAll\"]"),this.$selectAll.off("click").on("click",function(e){var a=e.currentTarget,n=t(a).prop("checked");o[n?"checkAll":"uncheckAll"](),o.updateSelected()})}},{key:"initData",value:function(e,t){this.options.data="append"===t?this.options.data.concat(e):"prepend"===t?[].concat(e).concat(this.options.data):e||this.options.data,this.data=this.options.data,"server"===this.options.sidePagination||this.initSort()}},{key:"initSort",value:function(){var e=this,t=this.options.sortName,o="desc"===this.options.sortOrder?-1:1,n=this.header.fields.indexOf(this.options.sortName),i=0;-1!==n&&(this.options.sortStable&&this.data.forEach(function(e,t){e.hasOwnProperty("_position")||(e._position=t)}),this.options.customSort?yi.calculateObjectValue(this.options,this.options.customSort,[this.options.sortName,this.options.sortOrder,this.data]):this.data.sort(function(i,a){e.header.sortNames[n]&&(t=e.header.sortNames[n]);var s=yi.getItemField(i,t,e.options.escape),l=yi.getItemField(a,t,e.options.escape),r=yi.calculateObjectValue(e.header,e.header.sorters[n],[s,l,i,a]);return void 0===r?yi.sort(s,l,o,e.options.sortStable):e.options.sortStable&&0===r?o*(i._position-a._position):o*r}),void 0!==this.options.sortClass&&(clearTimeout(i),i=setTimeout(function(){e.$el.removeClass(e.options.sortClass);var t=e.$header.find("[data-field=\"".concat(e.options.sortName,"\"]")).index();e.$el.find("tr td:nth-child(".concat(t+1,")")).addClass(e.options.sortClass)},250)))}},{key:"onSort",value:function(e){var o=e.type,a=e.currentTarget,n="keypress"===o?t(a):t(a).parent(),i=this.$header.find("th").eq(n.index());return this.$header.add(this.$header_).find("span.order").remove(),this.options.sortName===n.data("field")?this.options.sortOrder="asc"===this.options.sortOrder?"desc":"asc":(this.options.sortName=n.data("field"),this.options.sortOrder=this.options.rememberOrder?"asc"===n.data("order")?"desc":"asc":this.columns[this.fieldsColumnsIndex[n.data("field")]].sortOrder||this.columns[this.fieldsColumnsIndex[n.data("field")]].order),this.trigger("sort",this.options.sortName,this.options.sortOrder),n.add(i).data("order",this.options.sortOrder),this.getCaret(),"server"===this.options.sidePagination?(this.options.pageNumber=1,void this.initServer(this.options.silentSort)):void(this.initSort(),this.initBody())}},{key:"initToolbar",value:function(){var e,n,s=this,l=this.options,o=[],i=0,r=0;if(this.$toolbar.find(".bs-bars").children().length&&t("body").append(t(l.toolbar)),this.$toolbar.html(""),("string"==typeof l.toolbar||"object"===a(l.toolbar))&&t(yi.sprintf("<div class=\"bs-bars %s-%s\"></div>",this.constants.classes.pull,l.toolbarAlign)).appendTo(this.$toolbar).append(t(l.toolbar)),o=["<div class=\"".concat(["columns","columns-".concat(l.buttonsAlign),this.constants.classes.buttonsGroup,"".concat(this.constants.classes.pull,"-").concat(l.buttonsAlign)].join(" "),"\">")],"string"==typeof l.icons&&(l.icons=yi.calculateObjectValue(null,l.icons)),l.showPaginationSwitch&&o.push("<button class=\"".concat(this.constants.buttonsClass,"\" type=\"button\" name=\"paginationSwitch\"\n        aria-label=\"Pagination Switch\" title=\"").concat(l.formatPaginationSwitch(),"\">\n        ").concat(l.showButtonIcons?yi.sprintf(this.constants.html.icon,l.iconsPrefix,l.icons.paginationSwitchDown):"","\n        ").concat(l.showButtonText?l.formatPaginationSwitchUp():"","\n        </button>")),l.showRefresh&&o.push("<button class=\"".concat(this.constants.buttonsClass,"\" type=\"button\" name=\"refresh\"\n        aria-label=\"Refresh\" title=\"").concat(l.formatRefresh(),"\">\n        ").concat(l.showButtonIcons?yi.sprintf(this.constants.html.icon,l.iconsPrefix,l.icons.refresh):"","\n        ").concat(l.showButtonText?l.formatRefresh():"","\n        </button>")),l.showToggle&&o.push("<button class=\"".concat(this.constants.buttonsClass,"\" type=\"button\" name=\"toggle\"\n        aria-label=\"Toggle\" title=\"").concat(l.formatToggle(),"\">\n        ").concat(l.showButtonIcons?yi.sprintf(this.constants.html.icon,l.iconsPrefix,l.icons.toggleOff):"","\n        ").concat(l.showButtonText?l.formatToggleOn():"","\n        </button>")),l.showFullscreen&&o.push("<button class=\"".concat(this.constants.buttonsClass,"\" type=\"button\" name=\"fullscreen\"\n        aria-label=\"Fullscreen\" title=\"").concat(l.formatFullscreen(),"\">\n        ").concat(l.showButtonIcons?yi.sprintf(this.constants.html.icon,l.iconsPrefix,l.icons.fullscreen):"","\n        ").concat(l.showButtonText?l.formatFullscreen():"","\n        </button>")),l.showColumns){if(o.push("<div class=\"keep-open ".concat(this.constants.classes.buttonsDropdown,"\" title=\"").concat(l.formatColumns(),"\">\n        <button class=\"").concat(this.constants.buttonsClass," dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"\n        aria-label=\"Columns\" title=\"").concat(l.formatColumns(),"\">\n        ").concat(l.showButtonIcons?yi.sprintf(this.constants.html.icon,l.iconsPrefix,l.icons.columns):"","\n        ").concat(l.showButtonText?l.formatColumns():"","\n        ").concat(this.constants.html.dropdownCaret,"\n        </button>\n        ").concat(this.constants.html.toolbarDropdown[0])),l.showColumnsToggleAll){var c=this.getVisibleColumns().length===this.columns.length;o.push(yi.sprintf(this.constants.html.toolbarDropdownItem,yi.sprintf("<input type=\"checkbox\" class=\"toggle-all\" %s> <span>%s</span>",c?"checked=\"checked\"":"",l.formatColumnsToggleAll()))),o.push(this.constants.html.toolbarDropdownSeperator)}this.columns.forEach(function(e,t){if(!(e.radio||e.checkbox)&&(!l.cardView||e.cardVisible)){var a=e.visible?" checked=\"checked\"":"";e.switchable&&(o.push(yi.sprintf(s.constants.html.toolbarDropdownItem,yi.sprintf("<input type=\"checkbox\" data-field=\"%s\" value=\"%s\"%s> <span>%s</span>",e.field,t,a,e.title))),r++)}}),o.push(this.constants.html.toolbarDropdown[1],"</div>")}if(o.push("</div>"),(this.showToolbar||2<o.length)&&this.$toolbar.append(o.join("")),l.showPaginationSwitch&&this.$toolbar.find("button[name=\"paginationSwitch\"]").off("click").on("click",function(){return s.togglePagination()}),l.showFullscreen&&this.$toolbar.find("button[name=\"fullscreen\"]").off("click").on("click",function(){return s.toggleFullscreen()}),l.showRefresh&&this.$toolbar.find("button[name=\"refresh\"]").off("click").on("click",function(){return s.refresh()}),l.showToggle&&this.$toolbar.find("button[name=\"toggle\"]").off("click").on("click",function(){s.toggleView()}),l.showColumns){e=this.$toolbar.find(".keep-open");var d=e.find("input:not(\".toggle-all\")"),p=e.find("input.toggle-all");r<=l.minimumCountColumns&&e.find("input").prop("disabled",!0),e.find("li, label").off("click").on("click",function(t){t.stopImmediatePropagation()}),d.off("click").on("click",function(e){var o=e.currentTarget,a=t(o);s._toggleColumn(a.val(),a.prop("checked"),!1),s.trigger("column-switch",a.data("field"),a.prop("checked")),p.prop("checked",d.filter(":checked").length===s.columns.length)}),p.off("click").on("click",function(e){var o=e.currentTarget;s._toggleAllColumns(t(o).prop("checked"))})}if(l.search){o=[];var u=yi.sprintf(this.constants.html.searchButton,l.formatSearch(),l.showButtonIcons?yi.sprintf(this.constants.html.icon,l.iconsPrefix,l.icons.search):"",l.showButtonText?l.formatSearch():""),h=yi.sprintf(this.constants.html.searchClearButton,l.formatClearSearch(),l.showButtonIcons?yi.sprintf(this.constants.html.icon,l.iconsPrefix,l.icons.clearSearch):"",l.showButtonText?l.formatClearSearch():""),g="<input class=\"".concat(this.constants.classes.input).concat(yi.sprintf(" input-%s",l.iconSize)," search-input\" type=\"text\" placeholder=\"").concat(l.formatSearch(),"\">"),f=g;(l.showSearchButton||l.showSearchClearButton)&&(f=yi.sprintf(this.constants.html.inputGroup,g,(l.showSearchButton?u:"")+(l.showSearchClearButton?h:""))),o.push(yi.sprintf("\n        <div class=\"".concat(this.constants.classes.pull,"-").concat(l.searchAlign," search ").concat(this.constants.classes.inputGroup,"\">\n          %s\n        </div>\n      "),f)),this.$toolbar.append(o.join(""));var m=this.$toolbar.find(".search input");n=l.showSearchButton?this.$toolbar.find(".search button[name=search]"):m;var b=l.showSearchButton?"click":yi.isIEBrowser()?"mouseup":"keyup drop blur";n.off(b).on(b,function(e){l.searchOnEnterKey&&13!==e.keyCode||[37,38,39,40].includes(e.keyCode)||(clearTimeout(i),i=setTimeout(function(){s.onSearch(l.showSearchButton?{currentTarget:m}:e)},l.searchTimeOut))}),l.showSearchClearButton&&this.$toolbar.find(".search button[name=clearSearch]").click(function(){s.resetSearch(),s.onSearch({currentTarget:s.$toolbar.find(".search input")})})}}},{key:"onSearch",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},o=e.currentTarget,a=e.firedByInitSearchText,n=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];if(void 0!==o&&n){var i=t(o).val().trim();if(this.options.trimOnSearch&&t(o).val()!==i&&t(o).val(i),this.searchText===i)return;t(o).hasClass("search-input")&&(this.searchText=i,this.options.searchText=i)}a||(this.options.pageNumber=1),this.initSearch(),a?"client"===this.options.sidePagination&&this.updatePagination():this.updatePagination(),this.trigger("search",this.searchText)}},{key:"initSearch",value:function(){var e=this;if(this.filterOptions=this.filterOptions||this.options.filterOptions,"server"!==this.options.sidePagination){if(this.options.customSearch)return void(this.data=yi.calculateObjectValue(this.options,this.options.customSearch,[this.options.data,this.searchText]));var t=this.searchText&&(this.options.escape?yi.escapeHTML(this.searchText):this.searchText).toLowerCase(),o=yi.isEmptyObject(this.filterColumns)?null:this.filterColumns;"function"==typeof this.filterOptions.filterAlgorithm?this.data=this.options.data.filter(function(t){return e.filterOptions.filterAlgorithm.apply(null,[t,o])}):"string"==typeof this.filterOptions.filterAlgorithm&&(this.data=o?this.options.data.filter(function(t){var a=e.filterOptions.filterAlgorithm;if("and"===a){for(var n in o)if(Array.isArray(o[n])&&!o[n].includes(t[n])||!Array.isArray(o[n])&&t[n]!==o[n])return!1;}else if("or"===a){var i=!1;for(var s in o)(Array.isArray(o[s])&&o[s].includes(t[s])||!Array.isArray(o[s])&&t[s]===o[s])&&(i=!0);return i}return!0}):this.options.data);var a=this.getVisibleFields();this.data=t?this.data.filter(function(o,n){for(var i=0;i<e.header.fields.length;i++)if(e.header.searchables[i]&&(!e.options.visibleSearch||-1!==a.indexOf(e.header.fields[i]))){var s=yi.isNumeric(e.header.fields[i])?parseInt(e.header.fields[i],10):e.header.fields[i],l=e.columns[e.fieldsColumnsIndex[s]],r=void 0;if("string"==typeof s){r=o;for(var c=s.split("."),d=0;d<c.length;d++)null!==r[c[d]]&&(r=r[c[d]])}else r=o[s];if(l&&l.searchFormatter&&(r=yi.calculateObjectValue(l,e.header.formatters[i],[r,o,n,l.field],r)),"string"==typeof r||"number"==typeof r)if(!e.options.strictSearch){var p=/(?:(<=|=>|=<|>=|>|<)(?:\s+)?(\d+)?|(\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm,u=p.exec(t),h=!1;if(u){var g=u[1]||"".concat(u[5],"l"),f=u[2]||u[3],m=parseInt(r,10),b=parseInt(f,10);switch(g){case">":case"<l":h=m>b;break;case"<":case">l":h=m<b;break;case"<=":case"=<":case">=l":case"=>l":h=m<=b;break;case">=":case"=>":case"<=l":case"=<l":h=m>=b;break;default:}}if(h||"".concat(r).toLowerCase().includes(t))return!0}else if("".concat(r).toLowerCase()===t)return!0}return!1}):this.data}}},{key:"initPagination",value:function(){var e=Math.round,t=this,a=this.options;if(!a.pagination)return void this.$pagination.hide();this.$pagination.show();var o,n,s,l,r,c,d,p=[],u=!1,h=this.getData({includeHiddenRows:!1}),g=a.pageList;if("server"!==a.sidePagination&&(a.totalRows=h.length),this.totalPages=0,a.totalRows){if(a.pageSize===a.formatAllRows())a.pageSize=a.totalRows,u=!0;else if(a.pageSize===a.totalRows){var f="string"==typeof a.pageList?a.pageList.replace("[","").replace("]","").replace(/ /g,"").toLowerCase().split(","):a.pageList;f.includes(a.formatAllRows().toLowerCase())&&(u=!0)}this.totalPages=~~((a.totalRows-1)/a.pageSize)+1,a.totalPages=this.totalPages}0<this.totalPages&&a.pageNumber>this.totalPages&&(a.pageNumber=this.totalPages),this.pageFrom=(a.pageNumber-1)*a.pageSize+1,this.pageTo=a.pageNumber*a.pageSize,this.pageTo>a.totalRows&&(this.pageTo=a.totalRows),this.options.pagination&&"server"!==this.options.sidePagination&&(this.options.totalNotFiltered=this.options.data.length),this.options.showExtendedPagination||(this.options.totalNotFiltered=void 0);var m=a.onlyInfoPagination?a.formatDetailPagination(a.totalRows):a.formatShowingRows(this.pageFrom,this.pageTo,a.totalRows,a.totalNotFiltered);if(p.push("<div class=\"".concat(this.constants.classes.pull,"-").concat(a.paginationDetailHAlign," pagination-detail\">\n      <span class=\"pagination-info\">\n      ").concat(m,"\n      </span>")),!a.onlyInfoPagination){p.push("<span class=\"page-list\">");var b=["<span class=\"".concat(this.constants.classes.paginationDropdown,"\">\n        <button class=\"").concat(this.constants.buttonsClass," dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n        <span class=\"page-size\">\n        ").concat(u?a.formatAllRows():a.pageSize,"\n        </span>\n        ").concat(this.constants.html.dropdownCaret,"\n        </button>\n        ").concat(this.constants.html.pageDropdown[0])];if("string"==typeof a.pageList){var y=a.pageList.replace("[","").replace("]","").replace(/ /g,"").split(",");g=[];var w=!0,S=!1,v=void 0;try{for(var x,k,T=y[Symbol.iterator]();!(w=(x=T.next()).done);w=!0)k=x.value,g.push(k.toLowerCase()===a.formatAllRows().toLowerCase()||["all","unlimited"].includes(k.toLowerCase())?a.formatAllRows():+k)}catch(e){S=!0,v=e}finally{try{w||null==T.return||T.return()}finally{if(S)throw v}}}g.forEach(function(e,o){if(!a.smartDisplay||0===o||g[o-1]<a.totalRows){var n;n=u?e===a.formatAllRows()?t.constants.classes.dropdownActive:"":e===a.pageSize?t.constants.classes.dropdownActive:"",b.push(yi.sprintf(t.constants.html.pageDropdownItem,n,e))}}),b.push("".concat(this.constants.html.pageDropdown[1],"</span>")),p.push(a.formatRecordsPerPage(b.join(""))),p.push("</span></div>"),p.push("<div class=\"".concat(this.constants.classes.pull,"-").concat(a.paginationHAlign," pagination\">"),yi.sprintf(this.constants.html.pagination[0],yi.sprintf(" pagination-%s",a.iconSize)),yi.sprintf(this.constants.html.paginationItem," page-pre",a.formatSRPaginationPreText(),a.paginationPreText)),this.totalPages<a.paginationSuccessivelySize?(n=1,s=this.totalPages):(n=a.pageNumber-a.paginationPagesBySide,s=n+2*a.paginationPagesBySide),a.pageNumber<a.paginationSuccessivelySize-1&&(s=a.paginationSuccessivelySize),a.paginationSuccessivelySize>this.totalPages-n&&(n=n-(a.paginationSuccessivelySize-(this.totalPages-n))+1),1>n&&(n=1),s>this.totalPages&&(s=this.totalPages);var P=e(a.paginationPagesBySide/2),O=function(e){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return yi.sprintf(t.constants.html.paginationItem,o+(e===a.pageNumber?" ".concat(t.constants.classes.paginationActive):""),a.formatSRPaginationPageText(e),e)};if(1<n){var C=a.paginationPagesBySide;for(C>=n&&(C=n-1),o=1;o<=C;o++)p.push(O(o));n-1===C+1?(o=n-1,p.push(O(o))):n-1>C&&(n-2*a.paginationPagesBySide>a.paginationPagesBySide&&a.paginationUseIntermediate?(o=e((n-P)/2+P),p.push(O(o," page-intermediate"))):p.push(yi.sprintf(this.constants.html.paginationItem," page-first-separator disabled","","...")))}for(o=n;o<=s;o++)p.push(O(o));if(this.totalPages>s){var I=this.totalPages-(a.paginationPagesBySide-1);for(s>=I&&(I=s+1),s+1===I-1?(o=s+1,p.push(O(o))):I>s+1&&(this.totalPages-s>2*a.paginationPagesBySide&&a.paginationUseIntermediate?(o=e((this.totalPages-P-s)/2+s),p.push(O(o," page-intermediate"))):p.push(yi.sprintf(this.constants.html.paginationItem," page-last-separator disabled","","..."))),o=I;o<=this.totalPages;o++)p.push(O(o))}p.push(yi.sprintf(this.constants.html.paginationItem," page-next",a.formatSRPaginationNextText(),a.paginationNextText)),p.push(this.constants.html.pagination[1],"</div>")}this.$pagination.html(p.join(""));var $=["bottom","both"].includes(a.paginationVAlign)?" ".concat(this.constants.classes.dropup):"";this.$pagination.last().find(".page-list > span").addClass($),a.onlyInfoPagination||(l=this.$pagination.find(".page-list a"),r=this.$pagination.find(".page-pre"),c=this.$pagination.find(".page-next"),d=this.$pagination.find(".page-item").not(".page-next, .page-pre, .page-last-separator, .page-first-separator"),1>=this.totalPages&&this.$pagination.find("div.pagination").hide(),a.smartDisplay&&(2>g.length||a.totalRows<=g[0])&&this.$pagination.find("span.page-list").hide(),this.$pagination[this.getData().length?"show":"hide"](),!a.paginationLoop&&(1===a.pageNumber&&r.addClass("disabled"),a.pageNumber===this.totalPages&&c.addClass("disabled")),u&&(a.pageSize=a.formatAllRows()),l.off("click").on("click",function(o){return t.onPageListChange(o)}),r.off("click").on("click",function(o){return t.onPagePre(o)}),c.off("click").on("click",function(o){return t.onPageNext(o)}),d.off("click").on("click",function(o){return t.onPageNumber(o)}))}},{key:"updatePagination",value:function(e){e&&t(e.currentTarget).hasClass("disabled")||(!this.options.maintainMetaData&&this.resetRows(),this.initPagination(),"server"===this.options.sidePagination?this.initServer():this.initBody(),this.trigger("page-change",this.options.pageNumber,this.options.pageSize))}},{key:"onPageListChange",value:function(e){e.preventDefault();var o=t(e.currentTarget);return o.parent().addClass(this.constants.classes.dropdownActive).siblings().removeClass(this.constants.classes.dropdownActive),this.options.pageSize=o.text().toUpperCase()===this.options.formatAllRows().toUpperCase()?this.options.formatAllRows():+o.text(),this.$toolbar.find(".page-size").text(this.options.pageSize),this.updatePagination(e),!1}},{key:"onPagePre",value:function(e){return e.preventDefault(),0==this.options.pageNumber-1?this.options.pageNumber=this.options.totalPages:this.options.pageNumber--,this.updatePagination(e),!1}},{key:"onPageNext",value:function(e){return e.preventDefault(),this.options.pageNumber+1>this.options.totalPages?this.options.pageNumber=1:this.options.pageNumber++,this.updatePagination(e),!1}},{key:"onPageNumber",value:function(e){if(e.preventDefault(),this.options.pageNumber!==+t(e.currentTarget).text())return this.options.pageNumber=+t(e.currentTarget).text(),this.updatePagination(e),!1}},{key:"initRow",value:function(e,t){var o=this,n=[],i={},s=[],r="",c={},d=[];if(!(-1<yi.findIndex(this.hiddenRows,e))){if(i=yi.calculateObjectValue(this.options,this.options.rowStyle,[e,t],i),i&&i.css)for(var p=0,u=Object.entries(i.css);p<u.length;p++){var h=l(u[p],2),g=h[0],f=h[1];s.push("".concat(g,": ").concat(f))}if(c=yi.calculateObjectValue(this.options,this.options.rowAttributes,[e,t],c),c)for(var m=0,b=Object.entries(c);m<b.length;m++){var y=l(b[m],2),g=y[0],f=y[1];d.push("".concat(g,"=\"").concat(yi.escapeHTML(f),"\""))}if(e._data&&!yi.isEmptyObject(e._data))for(var w=0,S=Object.entries(e._data);w<S.length;w++){var x=l(S[w],2),T=x[0],k=x[1];if("index"===T)return;r+=" data-".concat(T,"='").concat("object"===a(k)?JSON.stringify(k):k,"'")}return n.push("<tr",yi.sprintf(" %s",d.length?d.join(" "):void 0),yi.sprintf(" id=\"%s\"",Array.isArray(e)?void 0:e._id),yi.sprintf(" class=\"%s\"",i.classes||(Array.isArray(e)?void 0:e._class))," data-index=\"".concat(t,"\""),yi.sprintf(" data-uniqueid=\"%s\"",yi.getItemField(e,this.options.uniqueId,!1)),yi.sprintf(" data-has-detail-view=\"%s\"",!this.options.cardView&&this.options.detailView&&yi.calculateObjectValue(null,this.options.detailFilter,[t,e])?"true":void 0),yi.sprintf("%s",r),">"),this.options.cardView&&n.push("<td colspan=\"".concat(this.header.fields.length,"\"><div class=\"card-views\">")),!this.options.cardView&&this.options.detailView&&this.options.detailViewIcon&&(n.push("<td>"),yi.calculateObjectValue(null,this.options.detailFilter,[t,e])&&n.push("\n          <a class=\"detail-icon\" href=\"#\">\n          ".concat(yi.sprintf(this.constants.html.icon,this.options.iconsPrefix,this.options.icons.detailOpen),"\n          </a>\n        ")),n.push("</td>")),this.header.fields.forEach(function(a,i){var r="",d=yi.getItemField(e,a,o.options.escape),p="",u="",h={},g="",f=o.header.classes[i],m="",b="",y="",w="",S="",x=o.columns[i];if((!o.fromHtml||"undefined"!=typeof d||x.checkbox||x.radio)&&x.visible&&(!o.options.cardView||x.cardVisible)){if(x.escape&&(d=yi.escapeHTML(d)),s.concat([o.header.styles[i]]).length&&(m=" style=\"".concat(s.concat([o.header.styles[i]]).join("; "),"\"")),e["_".concat(a,"_id")]&&(g=yi.sprintf(" id=\"%s\"",e["_".concat(a,"_id")])),e["_".concat(a,"_class")]&&(f=yi.sprintf(" class=\"%s\"",e["_".concat(a,"_class")])),e["_".concat(a,"_rowspan")]&&(y=yi.sprintf(" rowspan=\"%s\"",e["_".concat(a,"_rowspan")])),e["_".concat(a,"_colspan")]&&(w=yi.sprintf(" colspan=\"%s\"",e["_".concat(a,"_colspan")])),e["_".concat(a,"_title")]&&(S=yi.sprintf(" title=\"%s\"",e["_".concat(a,"_title")])),h=yi.calculateObjectValue(o.header,o.header.cellStyles[i],[d,e,t,a],h),h.classes&&(f=" class=\"".concat(h.classes,"\"")),h.css){for(var T=[],P=0,O=Object.entries(h.css);P<O.length;P++){var C=l(O[P],2),I=C[0],$=C[1];T.push("".concat(I,": ").concat($))}m=" style=\"".concat(T.concat(o.header.styles[i]).join("; "),"\"")}if(p=yi.calculateObjectValue(x,o.header.formatters[i],[d,e,t,a],d),e["_".concat(a,"_data")]&&!yi.isEmptyObject(e["_".concat(a,"_data")]))for(var A=0,E=Object.entries(e["_".concat(a,"_data")]);A<E.length;A++){var R=l(E[A],2),_=R[0],k=R[1];if("index"===_)return;b+=" data-".concat(_,"=\"").concat(k,"\"")}if(x.checkbox||x.radio){u=x.checkbox?"checkbox":u,u=x.radio?"radio":u;var v=x["class"]||"",c=(!0===p||d||p&&p.checked)&&!1!==p,N=!x.checkboxEnabled||p&&p.disabled;r=[o.options.cardView?"<div class=\"card-view ".concat(v,"\">"):"<td class=\"bs-checkbox ".concat(v,"\"").concat(f).concat(m,">"),"<label>\n            <input\n            data-index=\"".concat(t,"\"\n            name=\"").concat(o.options.selectItemName,"\"\n            type=\"").concat(u,"\"\n            ").concat(yi.sprintf("value=\"%s\"",e[o.options.idField]),"\n            ").concat(yi.sprintf("checked=\"%s\"",c?"checked":void 0),"\n            ").concat(yi.sprintf("disabled=\"%s\"",N?"disabled":void 0)," />\n            <span></span>\n            </label>"),o.header.formatters[i]&&"string"==typeof p?p:"",o.options.cardView?"</div>":"</td>"].join(""),e[o.header.stateField]=!0===p||!!d||p&&p.checked}else if(p="undefined"==typeof p||null===p?o.options.undefinedText:p,o.options.cardView){var D=o.options.showHeader?"<span class=\"card-view-title\"".concat(m,">").concat(yi.getFieldTitle(o.columns,a),"</span>"):"";r="<div class=\"card-view\">".concat(D,"<span class=\"card-view-value\">").concat(p,"</span></div>"),o.options.smartDisplay&&""===p&&(r="<div class=\"card-view\"></div>")}else r="<td".concat(g).concat(f).concat(m).concat(b).concat(y).concat(w).concat(S,">").concat(p,"</td>");n.push(r)}}),this.options.cardView&&n.push("</div></td>"),n.push("</tr>"),n.join("")}}},{key:"initBody",value:function(e){var o=this,a=this.getData();this.trigger("pre-body",a),this.$body=this.$el.find(">tbody"),this.$body.length||(this.$body=t("<tbody></tbody>").appendTo(this.$el)),this.options.pagination&&"server"!==this.options.sidePagination||(this.pageFrom=1,this.pageTo=a.length);for(var n=[],s=t(document.createDocumentFragment()),l=!1,r=this.pageFrom-1;r<this.pageTo;r++){var c=a[r],d=this.initRow(c,r,a,s);l=l||!!d,d&&"string"==typeof d&&(this.options.virtualScroll?n.push(d):s.append(d))}l?this.options.virtualScroll?(this.virtualScroll&&this.virtualScroll.destroy(),this.virtualScroll=new vi({rows:n,scrollEl:this.$tableBody[0],contentEl:this.$body[0],itemHeight:this.options.virtualScrollItemHeight,callback:function(){o.fitHeader()}})):this.$body.html(s):this.$body.html("<tr class=\"no-records-found\">".concat(yi.sprintf("<td colspan=\"%s\">%s</td>",this.$header.find("th").length,this.options.formatNoMatches()),"</tr>")),e||this.scrollTo(0),this.$body.find("> tr[data-index] > td").off("click dblclick").on("click dblclick",function(a){var e=t(a.currentTarget),n=e.parent(),i=t(a.target).parents(".card-views").children(),s=t(a.target).parents(".card-view"),l=n.data("index"),r=o.data[l],c=o.options.cardView?i.index(s):e[0].cellIndex,d=o.getVisibleFields(),p=d[o.options.detailView&&!o.options.cardView?c-1:c],u=o.columns[o.fieldsColumnsIndex[p]],h=yi.getItemField(r,p,o.options.escape);if(!e.find(".detail-icon").length){if(o.trigger("click"===a.type?"click-cell":"dbl-click-cell",p,h,r,e),o.trigger("click"===a.type?"click-row":"dbl-click-row",r,n,p),"click"===a.type&&o.options.clickToSelect&&u.clickToSelect&&!yi.calculateObjectValue(o.options,o.options.ignoreClickToSelectOn,[a.target])){var g=n.find(yi.sprintf("[name=\"%s\"]",o.options.selectItemName));g.length&&g[0].click()}"click"===a.type&&o.options.detailViewByClick&&o.toggleDetailView(l,o.header.detailFormatters[c])}}).off("mousedown").on("mousedown",function(t){o.multipleSelectRowCtrlKey=t.ctrlKey||t.metaKey,o.multipleSelectRowShiftKey=t.shiftKey}),this.$body.find("> tr[data-index] > td > .detail-icon").off("click").on("click",function(a){return a.preventDefault(),o.toggleDetailView(t(a.currentTarget).parent().parent().data("index")),!1}),this.$selectItem=this.$body.find(yi.sprintf("[name=\"%s\"]",this.options.selectItemName)),this.$selectItem.off("click").on("click",function(a){a.stopImmediatePropagation();var e=t(a.currentTarget);o._toggleCheck(e.prop("checked"),e.data("index"))}),this.header.events.forEach(function(e,a){var n=e;if(n){"string"==typeof n&&(n=yi.calculateObjectValue(null,n));var i=o.header.fields[a],s=o.getVisibleFields().indexOf(i);if(-1!==s){o.options.detailView&&!o.options.cardView&&(s+=1);var l=function(e){if(!n.hasOwnProperty(e))return"continue";var a=n[e];o.$body.find(">tr:not(.no-records-found)").each(function(n,l){var r=t(l),c=r.find(o.options.cardView?".card-view":"td").eq(s),d=e.indexOf(" "),p=e.substring(0,d),u=e.substring(d+1);c.find(u).off(p).on(p,function(t){var e=r.data("index"),n=o.data[e],s=n[i];a.apply(o,[t,s,n,e])})})};for(var r in n){var c=l(r)}}}}),this.updateSelected(),this.initFooter(),this.resetView(),"server"!==this.options.sidePagination&&(this.options.totalRows=a.length),this.trigger("post-body",a)}},{key:"initServer",value:function(e,o,a){var n=this,i={},s=this.header.fields.indexOf(this.options.sortName),l={searchText:this.searchText,sortName:this.options.sortName,sortOrder:this.options.sortOrder};if((this.header.sortNames[s]&&(l.sortName=this.header.sortNames[s]),this.options.pagination&&"server"===this.options.sidePagination&&(l.pageSize=this.options.pageSize===this.options.formatAllRows()?this.options.totalRows:this.options.pageSize,l.pageNumber=this.options.pageNumber),a||this.options.url||this.options.ajax)&&("limit"===this.options.queryParamsType&&(l={search:l.searchText,sort:l.sortName,order:l.sortOrder},this.options.pagination&&"server"===this.options.sidePagination&&(l.offset=this.options.pageSize===this.options.formatAllRows()?0:this.options.pageSize*(this.options.pageNumber-1),l.limit=this.options.pageSize===this.options.formatAllRows()?this.options.totalRows:this.options.pageSize,0===l.limit&&delete l.limit)),yi.isEmptyObject(this.filterColumnsPartial)||(l.filter=JSON.stringify(this.filterColumnsPartial,null)),i=yi.calculateObjectValue(this.options,this.options.queryParams,[l],i),t.extend(i,o||{}),!1!==i)){e||this.showLoading();var r=t.extend({},yi.calculateObjectValue(null,this.options.ajaxOptions),{type:this.options.method,url:a||this.options.url,data:"application/json"===this.options.contentType&&"post"===this.options.method?JSON.stringify(i):i,cache:this.options.cache,contentType:this.options.contentType,dataType:this.options.dataType,success:function(t){var o=yi.calculateObjectValue(n.options,n.options.responseHandler,[t],t);n.load(o),n.trigger("load-success",o),e||n.hideLoading()},error:function(t){var o=[];"server"===n.options.sidePagination&&(o={},o[n.options.totalField]=0,o[n.options.dataField]=[]),n.load(o),n.trigger("load-error",t.status,t),e||n.$tableLoading.hide()}});return this.options.ajax?yi.calculateObjectValue(this,this.options.ajax,[r],null):(this._xhr&&4!==this._xhr.readyState&&this._xhr.abort(),this._xhr=t.ajax(r)),i}}},{key:"initSearchText",value:function(){if(this.options.search&&(this.searchText="",""!==this.options.searchText)){var e=this.$toolbar.find(".search input");e.val(this.options.searchText),this.onSearch({currentTarget:e,firedByInitSearchText:!0})}}},{key:"getCaret",value:function(){var e=this;this.$header.find("th").each(function(o,a){t(a).find(".sortable").removeClass("desc asc").addClass(t(a).data("field")===e.options.sortName?e.options.sortOrder:"both")})}},{key:"updateSelected",value:function(){var e=this.$selectItem.filter(":enabled").length&&this.$selectItem.filter(":enabled").length===this.$selectItem.filter(":enabled").filter(":checked").length;this.$selectAll.add(this.$selectAll_).prop("checked",e),this.$selectItem.each(function(e,o){t(o).closest("tr")[t(o).prop("checked")?"addClass":"removeClass"]("selected")})}},{key:"updateRows",value:function(){var e=this;this.$selectItem.each(function(o,a){e.data[t(a).data("index")][e.header.stateField]=t(a).prop("checked")})}},{key:"resetRows",value:function(){var e=!0,t=!1,o=void 0;try{for(var a,n,i=this.data[Symbol.iterator]();!(e=(a=i.next()).done);e=!0)n=a.value,this.$selectAll.prop("checked",!1),this.$selectItem.prop("checked",!1),this.header.stateField&&(n[this.header.stateField]=!1)}catch(e){t=!0,o=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw o}}this.initHiddenRows()}},{key:"trigger",value:function(o){for(var a,n="".concat(o,".bs.table"),i=arguments.length,s=Array(1<i?i-1:0),l=1;l<i;l++)s[l-1]=arguments[l];(a=this.options)[e.EVENTS[n]].apply(a,s),this.$el.trigger(t.Event(n),s),this.options.onAll(n,s),this.$el.trigger(t.Event("all.bs.table"),[n,s])}},{key:"resetHeader",value:function(){var e=this;clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(function(){return e.fitHeader()},this.$el.is(":hidden")?100:0)}},{key:"fitHeader",value:function(){var e=this;if(this.$el.is(":hidden"))return void(this.timeoutId_=setTimeout(function(){return e.fitHeader()},100));var o=this.$tableBody.get(0),a=o.scrollWidth>o.clientWidth&&o.scrollHeight>o.clientHeight+this.$header.outerHeight()?yi.getScrollBarWidth():0;this.$el.css("margin-top",-this.$header.outerHeight());var n=t(":focus");if(0<n.length){var i=n.parents("th");if(0<i.length){var s=i.attr("data-field");if(void 0!==s){var l=this.$header.find("[data-field='".concat(s,"']"));0<l.length&&l.find(":input").addClass("focus-temp")}}}this.$header_=this.$header.clone(!0,!0),this.$selectAll_=this.$header_.find("[name=\"btSelectAll\"]"),this.$tableHeader.css("margin-right",a).find("table").css("width",this.$el.outerWidth()).html("").attr("class",this.$el.attr("class")).append(this.$header_),this.$tableLoading.css("width",this.$el.outerWidth());var r=t(".focus-temp:visible:eq(0)");0<r.length&&(r.focus(),this.$header.find(".focus-temp").removeClass("focus-temp")),this.$header.find("th[data-field]").each(function(o,a){e.$header_.find(yi.sprintf("th[data-field=\"%s\"]",t(a).data("field"))).data(t(a).data())});for(var c=this.getVisibleFields(),d=this.$header_.find("th"),p=this.$body.find(">tr:not(.no-records-found,.virtual-scroll-top)").eq(0);p.length&&p.find(">td[colspan]:not([colspan=\"1\"])").length;)p=p.next();p.find("> *").each(function(o,a){var n=t(a),i=o;if(e.options.detailView&&e.options.detailViewIcon&&!e.options.cardView){if(0===o){var s=d.filter(".detail"),l=s.width()-s.find(".fht-cell").width();s.find(".fht-cell").width(n.innerWidth()-l)}i=o-1}if(-1!==i){var r=e.$header_.find(yi.sprintf("th[data-field=\"%s\"]",c[i]));1<r.length&&(r=t(d[n[0].cellIndex]));var p=r.width()-r.find(".fht-cell").width();r.find(".fht-cell").width(n.innerWidth()-p)}}),this.horizontalScroll(),this.trigger("post-header")}},{key:"initFooter",value:function(){if(this.options.showFooter&&!this.options.cardView){var e=this.getData(),t=[];!this.options.cardView&&this.options.detailView&&this.options.detailViewIcon&&t.push("<th class=\"detail\"><div class=\"th-inner\"></div><div class=\"fht-cell\"></div></th>");var o=!0,a=!1,n=void 0;try{for(var i,s=this.columns[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){var r=i.value,c="",d="",p=[],u={},h=yi.sprintf(" class=\"%s\"",r["class"]);if(r.visible){if(this.options.cardView&&!r.cardVisible)return;if(c=yi.sprintf("text-align: %s; ",r.falign?r.falign:r.align),d=yi.sprintf("vertical-align: %s; ",r.valign),u=yi.calculateObjectValue(null,this.options.footerStyle,[r]),u&&u.css)for(var g=0,f=Object.entries(u.css);g<f.length;g++){var m=l(f[g],2),b=m[0],y=m[1];p.push("".concat(b,": ").concat(y))}u&&u.classes&&(h=yi.sprintf(" class=\"%s\"",r["class"]?[r["class"],u.classes].join(" "):u.classes)),t.push("<th",h,yi.sprintf(" style=\"%s\"",c+d+p.concat().join("; ")),">"),t.push("<div class=\"th-inner\">"),t.push(yi.calculateObjectValue(r,r.footerFormatter,[e],this.footerData[0]&&this.footerData[0][r.field]||"")),t.push("</div>"),t.push("<div class=\"fht-cell\"></div>"),t.push("</div>"),t.push("</th>")}}}catch(e){a=!0,n=e}finally{try{o||null==s.return||s.return()}finally{if(a)throw n}}this.$tableFooter.find("tr").html(t.join("")),this.trigger("post-footer",this.$tableFooter)}}},{key:"fitFooter",value:function(){var e=this;if(this.$el.is(":hidden"))return void setTimeout(function(){return e.fitFooter()},100);var o=this.$tableBody.get(0),a=o.scrollWidth>o.clientWidth&&o.scrollHeight>o.clientHeight+this.$header.outerHeight()?yi.getScrollBarWidth():0;this.$tableFooter.css("margin-right",a).find("table").css("width",this.$el.outerWidth()).attr("class",this.$el.attr("class"));for(var n=this.getVisibleFields(),s=this.$tableFooter.find("th"),l=this.$body.find(">tr:first-child:not(.no-records-found)");l.length&&l.find(">td[colspan]:not([colspan=\"1\"])").length;)l=l.next();l.find("> *").each(function(o,a){var n=t(a),i=o;if(e.options.detailView&&!e.options.cardView){if(0===o){var l=s.filter(".detail"),r=l.width()-l.find(".fht-cell").width();l.find(".fht-cell").width(n.innerWidth()-r)}i=o-1}if(-1!==i){var c=s.eq(o),d=c.width()-c.find(".fht-cell").width();c.find(".fht-cell").width(n.innerWidth()-d)}}),this.horizontalScroll()}},{key:"horizontalScroll",value:function(){var e=this;this.trigger("scroll-body"),this.$tableBody.off("scroll").on("scroll",function(o){var a=o.currentTarget;e.options.showHeader&&e.options.height&&e.$tableHeader.scrollLeft(t(a).scrollLeft()),e.options.showFooter&&!e.options.cardView&&e.$tableFooter.scrollLeft(t(a).scrollLeft())})}},{key:"getVisibleFields",value:function(){var e=[],t=!0,o=!1,a=void 0;try{for(var n,i=this.header.fields[Symbol.iterator]();!(t=(n=i.next()).done);t=!0){var s=n.value,l=this.columns[this.fieldsColumnsIndex[s]];l.visible&&e.push(s)}}catch(e){o=!0,a=e}finally{try{t||null==i.return||i.return()}finally{if(o)throw a}}return e}},{key:"initHiddenRows",value:function(){this.hiddenRows=[]}},{key:"getOptions",value:function(){var e=JSON.parse(JSON.stringify(this.options));return delete e.data,e}},{key:"refreshOptions",value:function(e){yi.compareObjects(this.options,e,!0)||(this.options=t.extend(this.options,e),this.trigger("refresh-options",this.options),this.destroy(),this.init())}},{key:"getData",value:function(e){var t=this.options.data;if((this.searchText||this.options.sortName||!yi.isEmptyObject(this.filterColumns)||!yi.isEmptyObject(this.filterColumnsPartial))&&(t=this.data),e&&e.useCurrentPage&&(t=t.slice(this.pageFrom-1,this.pageTo)),e&&!e.includeHiddenRows){var o=this.getHiddenRows();t=t.filter(function(e){return-1===yi.findIndex(o,e)})}return t}},{key:"getSelections",value:function(){var e=this;return this.data.filter(function(t){return!0===t[e.header.stateField]})}},{key:"getAllSelections",value:function(){var e=this;return this.options.data.filter(function(t){return!0===t[e.header.stateField]})}},{key:"load",value:function(e){var t=!1,o=e;this.options.pagination&&"server"===this.options.sidePagination&&(this.options.totalRows=o[this.options.totalField]),this.options.pagination&&"server"===this.options.sidePagination&&(this.options.totalNotFiltered=o[this.options.totalNotFilteredField]),t=o.fixedScroll,o=Array.isArray(o)?o:o[this.options.dataField],this.initData(o),this.initSearch(),this.initPagination(),this.initBody(t)}},{key:"append",value:function(e){this.initData(e,"append"),this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0)}},{key:"prepend",value:function(e){this.initData(e,"prepend"),this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0)}},{key:"remove",value:function(e){var t,o,a=this.options.data.length;if(e.hasOwnProperty("field")&&e.hasOwnProperty("values")){for(t=a-1;0<=t;t--)(o=this.options.data[t],!!o.hasOwnProperty(e.field))&&e.values.includes(o[e.field])&&(this.options.data.splice(t,1),"server"===this.options.sidePagination&&(this.options.totalRows-=1));a===this.options.data.length||(this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0))}}},{key:"removeAll",value:function(){0<this.options.data.length&&(this.options.data.splice(0,this.options.data.length),this.initSearch(),this.initPagination(),this.initBody(!0))}},{key:"insertRow",value:function(e){e.hasOwnProperty("index")&&e.hasOwnProperty("row")&&(this.options.data.splice(e.index,0,e.row),this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0))}},{key:"updateRow",value:function(e){var o=Array.isArray(e)?e:[e],a=!0,n=!1,i=void 0;try{for(var s,l,r=o[Symbol.iterator]();!(a=(s=r.next()).done);a=!0)(l=s.value,l.hasOwnProperty("index")&&l.hasOwnProperty("row"))&&(t.extend(this.options.data[l.index],l.row),l.hasOwnProperty("replace")&&l.replace?this.options.data[l.index]=l.row:t.extend(this.options.data[l.index],l.row))}catch(e){n=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(n)throw i}}this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0)}},{key:"getRowByUniqueId",value:function(e){var t,o,a,n=this.options.uniqueId,s=this.options.data.length,l=e,r=null;for(t=s-1;0<=t;t--){if(o=this.options.data[t],o.hasOwnProperty(n))a=o[n];else if(o._data&&o._data.hasOwnProperty(n))a=o._data[n];else continue;if("string"==typeof a?l=l.toString():"number"==typeof a&&(+a===a&&0==a%1?l=parseInt(l):a===+a&&0!==a&&(l=parseFloat(l))),a===l){r=o;break}}return r}},{key:"updateByUniqueId",value:function(e){var o=Array.isArray(e)?e:[e],a=!0,n=!1,i=void 0;try{for(var s,l,r=o[Symbol.iterator]();!(a=(s=r.next()).done);a=!0)if(l=s.value,l.hasOwnProperty("id")&&l.hasOwnProperty("row")){var c=this.options.data.indexOf(this.getRowByUniqueId(l.id));-1!==c&&(l.hasOwnProperty("replace")&&l.replace?this.options.data[c]=l.row:t.extend(this.options.data[c],l.row))}}catch(e){n=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(n)throw i}}this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0)}},{key:"removeByUniqueId",value:function(e){var t=this.options.data.length,o=this.getRowByUniqueId(e);o&&this.options.data.splice(this.options.data.indexOf(o),1),t===this.options.data.length||(this.initSearch(),this.initPagination(),this.initBody(!0))}},{key:"updateCell",value:function(e){e.hasOwnProperty("index")&&e.hasOwnProperty("field")&&e.hasOwnProperty("value")&&(this.data[e.index][e.field]=e.value,!1===e.reinit||(this.initSort(),this.initBody(!0)))}},{key:"updateCellByUniqueId",value:function(e){var t=this;if(e.hasOwnProperty("id")&&e.hasOwnProperty("field")&&e.hasOwnProperty("value")){var o=Array.isArray(e)?e:[e];o.forEach(function(e){var o=e.id,a=e.field,n=e.value,i=t.options.data.indexOf(t.getRowByUniqueId(o));-1===i||(t.data[i][a]=n)}),!1===e.reinit||(this.initSort(),this.initBody(!0))}}},{key:"showRow",value:function(e){this._toggleRow(e,!0)}},{key:"hideRow",value:function(e){this._toggleRow(e,!1)}},{key:"_toggleRow",value:function(e,t){var o;if(e.hasOwnProperty("index")?o=this.getData()[e.index]:e.hasOwnProperty("uniqueId")&&(o=this.getRowByUniqueId(e.uniqueId)),!!o){var a=yi.findIndex(this.hiddenRows,o);t||-1!==a?t&&-1<a&&this.hiddenRows.splice(a,1):this.hiddenRows.push(o),t?this.updatePagination():(this.initBody(!0),this.initPagination())}}},{key:"getHiddenRows",value:function(e){if(e)return this.initHiddenRows(),void this.initBody(!0);var t=this.getData(),o=[],a=!0,n=!1,i=void 0;try{for(var s,l,r=t[Symbol.iterator]();!(a=(s=r.next()).done);a=!0)l=s.value,this.hiddenRows.includes(l)&&o.push(l)}catch(e){n=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(n)throw i}}return this.hiddenRows=o,o}},{key:"showColumn",value:function(e){var t=this,o=Array.isArray(e)?e:[e];o.forEach(function(e){t._toggleColumn(t.fieldsColumnsIndex[e],!0,!0)})}},{key:"hideColumn",value:function(e){var t=this,o=Array.isArray(e)?e:[e];o.forEach(function(e){t._toggleColumn(t.fieldsColumnsIndex[e],!1,!0)})}},{key:"_toggleColumn",value:function(e,t,o){if(-1!==e&&this.columns[e].visible!==t&&(this.columns[e].visible=t,this.initHeader(),this.initSearch(),this.initPagination(),this.initBody(),this.options.showColumns)){var a=this.$toolbar.find(".keep-open input").prop("disabled",!1);o&&a.filter(yi.sprintf("[value=\"%s\"]",e)).prop("checked",t),a.filter(":checked").length<=this.options.minimumCountColumns&&a.filter(":checked").prop("disabled",!0)}}},{key:"getVisibleColumns",value:function(){return this.columns.filter(function(e){var t=e.visible;return t})}},{key:"getHiddenColumns",value:function(){return this.columns.filter(function(e){var t=e.visible;return!t})}},{key:"showAllColumns",value:function(){this._toggleAllColumns(!0)}},{key:"hideAllColumns",value:function(){this._toggleAllColumns(!1)}},{key:"_toggleAllColumns",value:function(e){var o=this,a=!0,n=!1,i=void 0;try{for(var s,l,r=this.columns.slice().reverse()[Symbol.iterator]();!(a=(s=r.next()).done);a=!0)if(l=s.value,l.switchable){if(!e&&this.options.showColumns&&this.getVisibleColumns().length===this.options.minimumCountColumns)continue;l.visible=e}}catch(e){n=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(n)throw i}}if(this.initHeader(),this.initSearch(),this.initPagination(),this.initBody(),this.options.showColumns){var c=this.$toolbar.find(".keep-open input:not(\".toggle-all\")").prop("disabled",!1);e?c.prop("checked",e):c.get().reverse().forEach(function(a){c.filter(":checked").length>o.options.minimumCountColumns&&t(a).prop("checked",e)}),c.filter(":checked").length<=this.options.minimumCountColumns&&c.filter(":checked").prop("disabled",!0)}}},{key:"mergeCells",value:function(e){var t,o,a=e.index,n=this.getVisibleFields().indexOf(e.field),s=e.rowspan||1,l=e.colspan||1,r=this.$body.find(">tr");this.options.detailView&&!this.options.cardView&&(n+=1);var c=r.eq(a).find(">td").eq(n);if(!(0>a||0>n||a>=this.data.length)){for(t=a;t<a+s;t++)for(o=n;o<n+l;o++)r.eq(t).find(">td").eq(o).hide();c.attr("rowspan",s).attr("colspan",l).show()}}},{key:"checkAll",value:function(){this._toggleCheckAll(!0)}},{key:"uncheckAll",value:function(){this._toggleCheckAll(!1)}},{key:"_toggleCheckAll",value:function(e){var t=this.getSelections();this.$selectAll.add(this.$selectAll_).prop("checked",e),this.$selectItem.filter(":enabled").prop("checked",e),this.updateRows();var o=this.getSelections();return e?void this.trigger("check-all",o,t):void this.trigger("uncheck-all",o,t)}},{key:"checkInvert",value:function(){var e=this.$selectItem.filter(":enabled"),o=e.filter(":checked");e.each(function(e,o){t(o).prop("checked",!t(o).prop("checked"))}),this.updateRows(),this.updateSelected(),this.trigger("uncheck-some",o),o=this.getSelections(),this.trigger("check-some",o)}},{key:"check",value:function(e){this._toggleCheck(!0,e)}},{key:"uncheck",value:function(e){this._toggleCheck(!1,e)}},{key:"_toggleCheck",value:function(e,t){var o=this.$selectItem.filter("[data-index=\"".concat(t,"\"]")),a=this.data[t];if(o.is(":radio")||this.options.singleSelect||this.options.multipleSelectRow&&!this.multipleSelectRowCtrlKey&&!this.multipleSelectRowShiftKey){var n=!0,s=!1,l=void 0;try{for(var c,d,p=this.options.data[Symbol.iterator]();!(n=(c=p.next()).done);n=!0)d=c.value,d[this.header.stateField]=!1}catch(e){s=!0,l=e}finally{try{n||null==p.return||p.return()}finally{if(s)throw l}}this.$selectItem.filter(":checked").not(o).prop("checked",!1)}if(a[this.header.stateField]=e,this.options.multipleSelectRow){if(this.multipleSelectRowShiftKey&&0<=this.multipleSelectRowLastSelectedIndex)for(var u=[this.multipleSelectRowLastSelectedIndex,t].sort(),h=u[0]+1;h<u[1];h++)this.data[h][this.header.stateField]=!0,this.$selectItem.filter("[data-index=\"".concat(h,"\"]")).prop("checked",!0);this.multipleSelectRowCtrlKey=!1,this.multipleSelectRowShiftKey=!1,this.multipleSelectRowLastSelectedIndex=e?t:-1}o.prop("checked",e),this.updateSelected(),this.trigger(e?"check":"uncheck",this.data[t],o)}},{key:"checkBy",value:function(e){this._toggleCheckBy(!0,e)}},{key:"uncheckBy",value:function(e){this._toggleCheckBy(!1,e)}},{key:"_toggleCheckBy",value:function(e,t){var o=this;if(t.hasOwnProperty("field")&&t.hasOwnProperty("values")){var a=[];this.data.forEach(function(n,s){if(!n.hasOwnProperty(t.field))return!1;if(t.values.includes(n[t.field])){var i=o.$selectItem.filter(":enabled").filter(yi.sprintf("[data-index=\"%s\"]",s)).prop("checked",e);n[o.header.stateField]=e,a.push(n),o.trigger(e?"check":"uncheck",n,i)}}),this.updateSelected(),this.trigger(e?"check-some":"uncheck-some",a)}}},{key:"refresh",value:function(e){e&&e.url&&(this.options.url=e.url),e&&e.pageNumber&&(this.options.pageNumber=e.pageNumber),e&&e.pageSize&&(this.options.pageSize=e.pageSize),this.trigger("refresh",this.initServer(e&&e.silent,e&&e.query,e&&e.url))}},{key:"destroy",value:function(){this.$el.insertBefore(this.$container),t(this.options.toolbar).insertBefore(this.$el),this.$container.next().remove(),this.$container.remove(),this.$el.html(this.$el_.html()).css("margin-top","0").attr("class",this.$el_.attr("class")||"")}},{key:"resetView",value:function(e){var t=0;if(e&&e.height&&(this.options.height=e.height),this.$selectAll.prop("checked",0<this.$selectItem.length&&this.$selectItem.length===this.$selectItem.filter(":checked").length),this.$tableContainer.toggleClass("has-card-view",this.options.cardView),!this.options.cardView&&this.options.showHeader&&this.options.height?(this.$tableHeader.show(),this.resetHeader(),t+=this.$header.outerHeight(!0)):(this.$tableHeader.hide(),this.trigger("post-header")),!this.options.cardView&&this.options.showFooter&&(this.$tableFooter.show(),this.fitFooter(),this.options.height&&(t+=this.$tableFooter.outerHeight(!0))),this.options.height){var o=this.$toolbar.outerHeight(!0),a=this.$pagination.outerHeight(!0),n=this.options.height-o-a,i=this.$tableBody.find("table").outerHeight(!0);this.$tableContainer.css("height","".concat(n,"px")),this.$tableBorder&&this.$tableBorder.css("height","".concat(n-i-t-1,"px"))}this.options.cardView?(this.$el.css("margin-top","0"),this.$tableContainer.css("padding-bottom","0"),this.$tableFooter.hide()):(this.getCaret(),this.$tableContainer.css("padding-bottom","".concat(t,"px"))),this.trigger("reset-view")}},{key:"resetWidth",value:function(){this.options.showHeader&&this.options.height&&this.fitHeader(),this.options.showFooter&&!this.options.cardView&&this.fitFooter()}},{key:"showLoading",value:function(){this.$tableLoading.css("display","flex")}},{key:"hideLoading",value:function(){this.$tableLoading.css("display","none")}},{key:"togglePagination",value:function(){this.options.pagination=!this.options.pagination;var e=this.options.showButtonIcons?this.options.pagination?this.options.icons.paginationSwitchDown:this.options.icons.paginationSwitchUp:"",t=this.options.showButtonText?this.options.pagination?this.options.formatPaginationSwitchUp():this.options.formatPaginationSwitchDown():"";this.$toolbar.find("button[name=\"paginationSwitch\"]").html(yi.sprintf(this.constants.html.icon,this.options.iconsPrefix,e)+" "+t),this.updatePagination()}},{key:"toggleFullscreen",value:function(){this.$el.closest(".bootstrap-table").toggleClass("fullscreen"),this.resetView()}},{key:"toggleView",value:function(){this.options.cardView=!this.options.cardView,this.initHeader();var e=this.options.showButtonIcons?this.options.cardView?this.options.icons.toggleOn:this.options.icons.toggleOff:"",t=this.options.showButtonText?this.options.cardView?this.options.formatToggleOff():this.options.formatToggleOn():"";this.$toolbar.find("button[name=\"toggle\"]").html(yi.sprintf(this.constants.html.icon,this.options.iconsPrefix,e)+" "+t),this.initBody(),this.trigger("toggle",this.options.cardView)}},{key:"resetSearch",value:function(e){var t=this.$toolbar.find(".search input");t.val(e||""),this.onSearch({currentTarget:t})}},{key:"filterBy",value:function(e,o){this.filterOptions=yi.isEmptyObject(o)?this.options.filterOptions:t.extend(this.options.filterOptions,o),this.filterColumns=yi.isEmptyObject(e)?{}:e,this.options.pageNumber=1,this.initSearch(),this.updatePagination()}},{key:"scrollTo",value:function e(o){if("undefined"==typeof o)return this.$tableBody.scrollTop();var n={unit:"px",value:0};"object"===a(o)?n=Object.assign(n,o):"string"==typeof o&&"bottom"===o?n.value=this.$tableBody[0].scrollHeight:"string"==typeof o&&(n.value=o);var e=n.value;"rows"===n.unit&&(e=0,this.$body.find("> tr:lt(".concat(n.value,")")).each(function(o,a){e+=t(a).outerHeight(!0)})),this.$tableBody.scrollTop(e)}},{key:"getScrollPosition",value:function(){return this.scrollTo()}},{key:"selectPage",value:function(e){0<e&&e<=this.options.totalPages&&(this.options.pageNumber=e,this.updatePagination())}},{key:"prevPage",value:function(){1<this.options.pageNumber&&(this.options.pageNumber--,this.updatePagination())}},{key:"nextPage",value:function(){this.options.pageNumber<this.options.totalPages&&(this.options.pageNumber++,this.updatePagination())}},{key:"toggleDetailView",value:function(e,t){var o=this.$body.find(yi.sprintf("> tr[data-index=\"%s\"]",e));o.next().is("tr.detail-view")?this.collapseRow(e):this.expandRow(e,t),this.resetView()}},{key:"expandRow",value:function(e,t){var o=this.data[e],a=this.$body.find(yi.sprintf("> tr[data-index=\"%s\"][data-has-detail-view]",e));if(!a.next().is("tr.detail-view")){this.options.detailViewIcon&&a.find("a.detail-icon").html(yi.sprintf(this.constants.html.icon,this.options.iconsPrefix,this.options.icons.detailClose)),a.after(yi.sprintf("<tr class=\"detail-view\"><td colspan=\"%s\"></td></tr>",a.children("td").length));var n=a.next().find("td"),i=t||this.options.detailFormatter,s=yi.calculateObjectValue(this.options,i,[e,o,n],"");1===n.length&&n.append(s),this.trigger("expand-row",e,o,n)}}},{key:"collapseRow",value:function(e){var t=this.data[e],o=this.$body.find(yi.sprintf("> tr[data-index=\"%s\"][data-has-detail-view]",e));o.next().is("tr.detail-view")&&(this.options.detailViewIcon&&o.find("a.detail-icon").html(yi.sprintf(this.constants.html.icon,this.options.iconsPrefix,this.options.icons.detailOpen)),this.trigger("collapse-row",e,t,o.next()),o.next().remove())}},{key:"expandAllRows",value:function(){for(var e=this.$body.find("> tr[data-index][data-has-detail-view]"),o=0;o<e.length;o++)this.expandRow(t(e[o]).data("index"))}},{key:"collapseAllRows",value:function(){for(var e=this.$body.find("> tr[data-index][data-has-detail-view]"),o=0;o<e.length;o++)this.collapseRow(t(e[o]).data("index"))}},{key:"updateColumnTitle",value:function(e){if(e.hasOwnProperty("field")&&e.hasOwnProperty("title")&&(this.columns[this.fieldsColumnsIndex[e.field]].title=this.options.escape?yi.escapeHTML(e.title):e.title,this.columns[this.fieldsColumnsIndex[e.field]].visible)){var o=void 0===this.options.height?this.$header:this.$tableHeader;o.find("th[data-field]").each(function(o,a){if(t(a).data("field")===e.field)return t(t(a).find(".th-inner")[0]).text(e.title),!1})}}},{key:"updateFormatText",value:function(e,t){/^format/.test(e)&&this.options[e]&&("string"==typeof t?this.options[e]=function(){return t}:"function"==typeof t&&(this.options[e]=t),this.initToolbar(),this.initPagination(),this.initBody())}}]),e}();return xi.VERSION=mi.VERSION,xi.DEFAULTS=mi.DEFAULTS,xi.LOCALES=mi.LOCALES,xi.COLUMN_DEFAULTS=mi.COLUMN_DEFAULTS,xi.METHODS=mi.METHODS,xi.EVENTS=mi.EVENTS,t.BootstrapTable=xi,t.fn.bootstrapTable=function(e){for(var o=arguments.length,n=Array(1<o?o-1:0),i=1;i<o;i++)n[i-1]=arguments[i];var s;return this.each(function(o,i){var l=t(i).data("bootstrap.table"),r=t.extend({},xi.DEFAULTS,t(i).data(),"object"===a(e)&&e);if("string"==typeof e){var c;if(!mi.METHODS.includes(e))throw new Error("Unknown method: ".concat(e));if(!l)return;s=(c=l)[e].apply(c,n),"destroy"==e&&t(i).removeData("bootstrap.table")}l||t(i).data("bootstrap.table",l=new t.BootstrapTable(i,r))}),"undefined"==typeof s?this:s},t.fn.bootstrapTable.Constructor=xi,t.fn.bootstrapTable.theme=mi.THEME,t.fn.bootstrapTable.VERSION=mi.VERSION,t.fn.bootstrapTable.defaults=xi.DEFAULTS,t.fn.bootstrapTable.columnDefaults=xi.COLUMN_DEFAULTS,t.fn.bootstrapTable.events=xi.EVENTS,t.fn.bootstrapTable.locales=xi.LOCALES,t.fn.bootstrapTable.methods=xi.METHODS,t.fn.bootstrapTable.utils=yi,t(function(){t("[data-toggle=\"table\"]").bootstrapTable()}),xi});
/**
 * Create a Multilevel Menu from JSON String.
 * Unordered list and Select (Combobox)
 * @autor David Ticona Saravia <david.ticona.saravia@gmail.com>
 * @version 0.9.0
 * @param {jQuery} $ 
 */
(function ($) {
    $.fn.setClass = function(classes) {
        this.attr('class', classes);
        return this;
    };
    $.fn.renderizeMenu = function (data, options) {
        var settings = $.extend({
            active: window.location.href,
            activeClass: 'active',
            rootClass: '',
            itemClass: null,
            linkClass: null,
            itemHasMenuClass: null,
            linkHasMenuClass: null,
            menuClass: null,
            menuItemClass: null,
            menuLinkClass: null,
            menuItemHasSubmenuClass: null,
            menuLinkHasSubmenuClass: null,
            submenuClass: null,
            dropdownIcon: null
        }, options);
        var arrJson = data;
        if (this.prop('tagName') !== 'UL') {
            return null;
        }
        if (typeof data === 'string') {
            try {
                arrJson = JSON.parse(data);
            } catch (e) {
                return null;
            }
        }
        this.setClass(settings.rootClass);
        var _settings = {
            menuClass: settings.menuClass, 
            itemClass: settings.itemClass,
            linkClass: settings.linkClass,
            itemHasMenuClass: settings.itemHasMenuClass,
            linkHasMenuClass: settings.linkHasMenuClass
        };
        buildList(this, arrJson, settings.active, 0);
        return this;
        
        function buildList($container, arrayItem, active, depth) {
            var level = (typeof (depth) === 'undefined') ? 0 : depth;
            var $elem;
            if (level === 0) {
                $elem = $container;
            } else {
                $elem = $('<ul>').setClass(options.menuClass);
            }
            $.each(arrayItem, function (k, v) {
                var isParent = (typeof (v.children) !== "undefined") && ($.isArray(v.children));
                _settings = {
                    menuClass: settings.menuClass,
                    itemClass: settings.itemClass,
                    linkClass: settings.linkClass,
                    itemHasMenuClass: settings.itemHasMenuClass,
                    linkHasMenuClass: settings.linkHasMenuClass
                };
                if (level>=1) {
                    _settings = {
                        menuClass: settings.submenuClass, 
                        itemClass: settings.menuItemClass,
                        linkClass: settings.menuLinkClass,
                        itemHasMenuClass: settings.menuItemHasSubmenuClass,
                        linkHasMenuClass: settings.menuLinkHasSubmenuClass
                    };
                }
                var $li = $('<li>').setClass(_settings.itemClass);
                if ((v.href === '#') || (isParent)) {
                    v.href = 'javascript:void(0)';
                }
                var $a = $('<a>').attr('href', v.href).setClass(_settings.linkClass);
                if (v.hasOwnProperty('target'))
                    $a.attr('target', v.target);
                if (v.hasOwnProperty('title'))
                    $a.attr('title', v.title);
                if (active === v.href) {
                    $a.addClass(settings.activeClass);
                }
                var $i = $('<i>').addClass(v.icon);
                $a.append($i).append("&nbsp;").append(v.text);
                if ((isParent) && (settings.dropdownIcon !== null)) {
                    $a.append('&nbsp;').append(settings.dropdownIcon);
                }
                if (isParent) {
                    $li.setClass(_settings.itemHasMenuClass);
                    $a.setClass(_settings.linkHasMenuClass);
                }
                $li.append($a);
                if (isParent) {
                    $li.append(buildList($container, v.children, active, level + 1));
                }
                $elem.append($li);
            });
            return $elem;
        }
    };
    
    function str_repeat(input, multiplier) {
        var y = '';
        while (true) {
            if (multiplier & 1) {
                y += input;
            }
            multiplier >>= 1;
            if (multiplier) {
                input += input;
            } else {
                break;
            }
        }
        return y;
    }
    
    $.fn.nestedSelect = function (data, options) {
        var settings = $.extend({
            active: window.location.href,
            title: '',
            group: false,
            bullet: '- ',
            propertyValue: 'value'
        }, options);
        if (this.prop('tagName') !== 'SELECT') {
            return null;
        }
        var arrJson = data;
        if (typeof data === 'string') {
            try {
                arrJson = JSON.parse(data);
            } catch (e) {
                return null;
            }
        }
        if (settings.title !== '') {
            this.append($('<option>').append(settings.title).val(""));
        }
        populateSelect(this, arrJson, settings.active);
        return this;
        function populateSelect(jqContainer, arrayItem, active, level) {
            var $element = jqContainer;
            level = (typeof (level) === 'undefined') ? 0 : level;
            $.each(arrayItem, function (k, v) {
                var isParent = ((typeof (v.children) !== "undefined") && ($.isArray(v.children)));
                var $opt = $('<option>');
                var value = v[settings.propertyValue];
                if (active === value) {
                    $opt.addClass('active').prop('selected', true);
                }
                var bullet = (level === 0) ? '' : settings.bullet;
                if ((!settings.group) || ((level === 0) && (!isParent))) {
                    $opt.val(value).append(str_repeat('&nbsp;', level)).append(bullet + v.text);
                    $element.append($opt);
                }
                if (isParent) {
                    if ((settings.group)) {
                        createGroup($element, v.text, v.children);
                    } else {
                        populateSelect(jqContainer, v.children, active, level + 2);
                    }
                }
            });
        }
        function createGroup(jqContainer, title, items) {
            var $group = $('<optgroup>').attr('label', title);
            for (var i=0, len=items.length; i<len; i++){
                var $opt = $('<option>').val(items[i].value).append(settings.bullet + items[i].text);
                $group.append($opt);
            }
            jqContainer.append($group);
        }
    };
}(jQuery));
/*!
* metismenu https://github.com/onokumus/metismenu#readme
* A jQuery menu plugin
* @version 3.0.3
* @author Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
* @license: MIT 
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global.metisMenu = factory(global.jQuery));
}(this, (function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var Util = function ($$$1) {
    // eslint-disable-line no-shadow
    var TRANSITION_END = 'transitionend';
    var Util = {
      // eslint-disable-line no-shadow
      TRANSITION_END: 'mmTransitionEnd',
      triggerTransitionEnd: function triggerTransitionEnd(element) {
        $$$1(element).trigger(TRANSITION_END);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(TRANSITION_END);
      }
    };

    function getSpecialTransitionEndEvent() {
      return {
        bindType: TRANSITION_END,
        delegateType: TRANSITION_END,
        handle: function handle(event) {
          if ($$$1(event.target).is(this)) {
            return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
          }

          return undefined;
        }
      };
    }

    function transitionEndEmulator(duration) {
      var _this = this;

      var called = false;
      $$$1(this).one(Util.TRANSITION_END, function () {
        called = true;
      });
      setTimeout(function () {
        if (!called) {
          Util.triggerTransitionEnd(_this);
        }
      }, duration);
      return this;
    }

    function setTransitionEndSupport() {
      $$$1.fn.mmEmulateTransitionEnd = transitionEndEmulator; // eslint-disable-line no-param-reassign
      // eslint-disable-next-line no-param-reassign

      $$$1.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }

    setTransitionEndSupport();
    return Util;
  }($);

  var NAME = 'metisMenu';
  var DATA_KEY = 'metisMenu';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 350;
  var Default = {
    toggle: true,
    preventDefault: true,
    triggerElement: 'a',
    parentTrigger: 'li',
    subMenu: 'ul'
  };
  var Event = {
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    METIS: 'metismenu',
    ACTIVE: 'mm-active',
    SHOW: 'mm-show',
    COLLAPSE: 'mm-collapse',
    COLLAPSING: 'mm-collapsing',
    COLLAPSED: 'mm-collapsed'
  };

  var MetisMenu =
  /*#__PURE__*/
  function () {
    // eslint-disable-line no-shadow
    function MetisMenu(element, config) {
      this.element = element;
      this.config = _objectSpread({}, Default, config);
      this.transitioning = null;
      this.init();
    }

    var _proto = MetisMenu.prototype;

    _proto.init = function init() {
      var self = this;
      var conf = this.config;
      $(this.element).addClass(ClassName.METIS); // add metismenu class to element

      $(this.element).find(conf.parentTrigger + "." + ClassName.ACTIVE).children(conf.triggerElement).attr('aria-expanded', 'true'); // add attribute aria-expanded=true the trigger element

      $(this.element).find(conf.parentTrigger + "." + ClassName.ACTIVE).parents(conf.parentTrigger).addClass(ClassName.ACTIVE);
      $(this.element).find(conf.parentTrigger + "." + ClassName.ACTIVE).parents(conf.parentTrigger).children(conf.triggerElement).attr('aria-expanded', 'true'); // add attribute aria-expanded=true the triggers of all parents

      $(this.element).find(conf.parentTrigger + "." + ClassName.ACTIVE).has(conf.subMenu).children(conf.subMenu).addClass(ClassName.COLLAPSE + " " + ClassName.SHOW);
      $(this.element).find(conf.parentTrigger).not("." + ClassName.ACTIVE).has(conf.subMenu).children(conf.subMenu).addClass(ClassName.COLLAPSE);
      $(this.element).find(conf.parentTrigger).has(conf.subMenu).children(conf.triggerElement).on(Event.CLICK_DATA_API, function (e) {
        // eslint-disable-line func-names
        var eTar = $(this);
        var paRent = eTar.parent(conf.parentTrigger);
        var sibLings = paRent.siblings(conf.parentTrigger).children(conf.triggerElement);
        var List = paRent.children(conf.subMenu);

        if (conf.preventDefault) {
          e.preventDefault();
        }

        if (eTar.attr('aria-disabled') === 'true') {
          return;
        }

        if (paRent.hasClass(ClassName.ACTIVE)) {
          eTar.attr('aria-expanded', 'false');
          self.hide(List);
        } else {
          self.show(List);
          eTar.attr('aria-expanded', 'true');

          if (conf.toggle) {
            sibLings.attr('aria-expanded', 'false');
          }
        }

        if (conf.onTransitionStart) {
          conf.onTransitionStart(e);
        }
      });
    };

    _proto.show = function show(element) {
      var _this = this;

      if (this.transitioning || $(element).hasClass(ClassName.COLLAPSING)) {
        return;
      }

      var elem = $(element);
      var startEvent = $.Event(Event.SHOW);
      elem.trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      elem.parent(this.config.parentTrigger).addClass(ClassName.ACTIVE);

      if (this.config.toggle) {
        var toggleElem = elem.parent(this.config.parentTrigger).siblings().children(this.config.subMenu + "." + ClassName.SHOW);
        this.hide(toggleElem);
      }

      elem.removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING).height(0);
      this.setTransitioning(true);

      var complete = function complete() {
        // check if disposed
        if (!_this.config || !_this.element) {
          return;
        }

        elem.removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE + " " + ClassName.SHOW).height('');

        _this.setTransitioning(false);

        elem.trigger(Event.SHOWN);
      };

      elem.height(element[0].scrollHeight).one(Util.TRANSITION_END, complete).mmEmulateTransitionEnd(TRANSITION_DURATION);
    };

    _proto.hide = function hide(element) {
      var _this2 = this;

      if (this.transitioning || !$(element).hasClass(ClassName.SHOW)) {
        return;
      }

      var elem = $(element);
      var startEvent = $.Event(Event.HIDE);
      elem.trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      elem.parent(this.config.parentTrigger).removeClass(ClassName.ACTIVE); // eslint-disable-next-line no-unused-expressions

      elem.height(elem.height())[0].offsetHeight;
      elem.addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);
      this.setTransitioning(true);

      var complete = function complete() {
        // check if disposed
        if (!_this2.config || !_this2.element) {
          return;
        }

        if (_this2.transitioning && _this2.config.onTransitionEnd) {
          _this2.config.onTransitionEnd();
        }

        _this2.setTransitioning(false);

        elem.trigger(Event.HIDDEN);
        elem.removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE);
      };

      if (elem.height() === 0 || elem.css('display') === 'none') {
        complete();
      } else {
        elem.height(0).one(Util.TRANSITION_END, complete).mmEmulateTransitionEnd(TRANSITION_DURATION);
      }
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this.transitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this.element, DATA_KEY);
      $(this.element).find(this.config.parentTrigger).has(this.config.subMenu).children(this.config.triggerElement).off('click');
      this.transitioning = null;
      this.config = null;
      this.element = null;
    };

    MetisMenu.jQueryInterface = function jQueryInterface(config) {
      // eslint-disable-next-line func-names
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);

        var conf = _objectSpread({}, Default, $this.data(), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new MetisMenu(this, conf);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    return MetisMenu;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME] = MetisMenu.jQueryInterface; // eslint-disable-line no-param-reassign

  $.fn[NAME].Constructor = MetisMenu; // eslint-disable-line no-param-reassign

  $.fn[NAME].noConflict = function () {
    // eslint-disable-line no-param-reassign
    $.fn[NAME] = JQUERY_NO_CONFLICT; // eslint-disable-line no-param-reassign

    return MetisMenu.jQueryInterface;
  };

  return MetisMenu;

})));
//# sourceMappingURL=metisMenu.js.map

/*
 * Toastr
 * Copyright 2012-2015
 * Authors: John Papa, Hans Fjällemark, and Tim Ferrell.
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * ARIA Support: Greta Krafsig
 *
 * Project: https://github.com/CodeSeven/toastr
 */
/* global define */
(function (define) {
    define(['jquery'], function ($) {
        return (function () {
            var $container;
            var listener;
            var toastId = 0;
            var toastType = {
                error: 'error',
                info: 'info',
                success: 'success',
                warning: 'warning'
            };

            var toastr = {
                clear: clear,
                remove: remove,
                error: error,
                getContainer: getContainer,
                info: info,
                options: {},
                subscribe: subscribe,
                success: success,
                version: '2.1.2',
                warning: warning
            };

            var previousToast;

            return toastr;

            ////////////////

            function error(message, title, optionsOverride) {
                return notify({
                    type: toastType.error,
                    iconClass: getOptions().iconClasses.error,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function getContainer(options, create) {
                if (!options) { options = getOptions(); }
                $container = $('#' + options.containerId);
                if ($container.length) {
                    return $container;
                }
                if (create) {
                    $container = createContainer(options);
                }
                return $container;
            }

            function info(message, title, optionsOverride) {
                return notify({
                    type: toastType.info,
                    iconClass: getOptions().iconClasses.info,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function subscribe(callback) {
                listener = callback;
            }

            function success(message, title, optionsOverride) {
                return notify({
                    type: toastType.success,
                    iconClass: getOptions().iconClasses.success,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function warning(message, title, optionsOverride) {
                return notify({
                    type: toastType.warning,
                    iconClass: getOptions().iconClasses.warning,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function clear($toastElement, clearOptions) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if (!clearToast($toastElement, options, clearOptions)) {
                    clearContainer(options);
                }
            }

            function remove($toastElement) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if ($toastElement && $(':focus', $toastElement).length === 0) {
                    removeToast($toastElement);
                    return;
                }
                if ($container.children().length) {
                    $container.remove();
                }
            }

            // internal functions

            function clearContainer (options) {
                var toastsToClear = $container.children();
                for (var i = toastsToClear.length - 1; i >= 0; i--) {
                    clearToast($(toastsToClear[i]), options);
                }
            }

            function clearToast ($toastElement, options, clearOptions) {
                var force = clearOptions && clearOptions.force ? clearOptions.force : false;
                if ($toastElement && (force || $(':focus', $toastElement).length === 0)) {
                    $toastElement[options.hideMethod]({
                        duration: options.hideDuration,
                        easing: options.hideEasing,
                        complete: function () { removeToast($toastElement); }
                    });
                    return true;
                }
                return false;
            }

            function createContainer(options) {
                $container = $('<div/>')
                    .attr('id', options.containerId)
                    .addClass(options.positionClass)
                    .attr('aria-live', 'polite')
                    .attr('role', 'alert');

                $container.appendTo($(options.target));
                return $container;
            }

            function getDefaults() {
                return {
                    tapToDismiss: true,
                    toastClass: 'toast',
                    containerId: 'toast-container',
                    debug: false,

                    showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
                    showDuration: 300,
                    showEasing: 'swing', //swing and linear are built into jQuery
                    onShown: undefined,
                    hideMethod: 'fadeOut',
                    hideDuration: 1000,
                    hideEasing: 'swing',
                    onHidden: undefined,
                    closeMethod: false,
                    closeDuration: false,
                    closeEasing: false,

                    extendedTimeOut: 1000,
                    iconClasses: {
                        error: 'toast-error',
                        info: 'toast-info',
                        success: 'toast-success',
                        warning: 'toast-warning'
                    },
                    iconClass: 'toast-info',
                    positionClass: 'toast-top-right',
                    timeOut: 5000, // Set timeOut and extendedTimeOut to 0 to make it sticky
                    titleClass: 'toast-title',
                    messageClass: 'toast-message',
                    escapeHtml: false,
                    target: 'body',
                    closeHtml: '<button type="button">&times;</button>',
                    newestOnTop: true,
                    preventDuplicates: false,
                    progressBar: false
                };
            }

            function publish(args) {
                if (!listener) { return; }
                listener(args);
            }

            function notify(map) {
                var options = getOptions();
                var iconClass = map.iconClass || options.iconClass;

                if (typeof (map.optionsOverride) !== 'undefined') {
                    options = $.extend(options, map.optionsOverride);
                    iconClass = map.optionsOverride.iconClass || iconClass;
                }

                if (shouldExit(options, map)) { return; }

                toastId++;

                $container = getContainer(options, true);

                var intervalId = null;
                var $toastElement = $('<div/>');
                var $titleElement = $('<div/>');
                var $messageElement = $('<div/>');
                var $progressElement = $('<div/>');
                var $closeElement = $(options.closeHtml);
                var progressBar = {
                    intervalId: null,
                    hideEta: null,
                    maxHideTime: null
                };
                var response = {
                    toastId: toastId,
                    state: 'visible',
                    startTime: new Date(),
                    options: options,
                    map: map
                };

                personalizeToast();

                displayToast();

                handleEvents();

                publish(response);

                if (options.debug && console) {
                    console.log(response);
                }

                return $toastElement;

                function escapeHtml(source) {
                    if (source == null)
                        source = "";

                    return new String(source)
                        .replace(/&/g, '&amp;')
                        .replace(/"/g, '&quot;')
                        .replace(/'/g, '&#39;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;');
                }

                function personalizeToast() {
                    setIcon();
                    setTitle();
                    setMessage();
                    setCloseButton();
                    setProgressBar();
                    setSequence();
                }

                function handleEvents() {
                    $toastElement.hover(stickAround, delayedHideToast);
                    if (!options.onclick && options.tapToDismiss) {
                        $toastElement.click(hideToast);
                    }

                    if (options.closeButton && $closeElement) {
                        $closeElement.click(function (event) {
                            if (event.stopPropagation) {
                                event.stopPropagation();
                            } else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
                                event.cancelBubble = true;
                            }
                            hideToast(true);
                        });
                    }

                    if (options.onclick) {
                        $toastElement.click(function (event) {
                            options.onclick(event);
                            hideToast();
                        });
                    }
                }

                function displayToast() {
                    $toastElement.hide();

                    $toastElement[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing, complete: options.onShown}
                    );

                    if (options.timeOut > 0) {
                        intervalId = setTimeout(hideToast, options.timeOut);
                        progressBar.maxHideTime = parseFloat(options.timeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                        if (options.progressBar) {
                            progressBar.intervalId = setInterval(updateProgress, 10);
                        }
                    }
                }

                function setIcon() {
                    if (map.iconClass) {
                        $toastElement.addClass(options.toastClass).addClass(iconClass);
                    }
                }

                function setSequence() {
                    if (options.newestOnTop) {
                        $container.prepend($toastElement);
                    } else {
                        $container.append($toastElement);
                    }
                }

                function setTitle() {
                    if (map.title) {
                        $titleElement.append(!options.escapeHtml ? map.title : escapeHtml(map.title)).addClass(options.titleClass);
                        $toastElement.append($titleElement);
                    }
                }

                function setMessage() {
                    if (map.message) {
                        $messageElement.append(!options.escapeHtml ? map.message : escapeHtml(map.message)).addClass(options.messageClass);
                        $toastElement.append($messageElement);
                    }
                }

                function setCloseButton() {
                    if (options.closeButton) {
                        $closeElement.addClass('toast-close-button').attr('role', 'button');
                        $toastElement.prepend($closeElement);
                    }
                }

                function setProgressBar() {
                    if (options.progressBar) {
                        $progressElement.addClass('toast-progress');
                        $toastElement.prepend($progressElement);
                    }
                }

                function shouldExit(options, map) {
                    if (options.preventDuplicates) {
                        if (map.message === previousToast) {
                            return true;
                        } else {
                            previousToast = map.message;
                        }
                    }
                    return false;
                }

                function hideToast(override) {
                    var method = override && options.closeMethod !== false ? options.closeMethod : options.hideMethod;
                    var duration = override && options.closeDuration !== false ?
                        options.closeDuration : options.hideDuration;
                    var easing = override && options.closeEasing !== false ? options.closeEasing : options.hideEasing;
                    if ($(':focus', $toastElement).length && !override) {
                        return;
                    }
                    clearTimeout(progressBar.intervalId);
                    return $toastElement[method]({
                        duration: duration,
                        easing: easing,
                        complete: function () {
                            removeToast($toastElement);
                            if (options.onHidden && response.state !== 'hidden') {
                                options.onHidden();
                            }
                            response.state = 'hidden';
                            response.endTime = new Date();
                            publish(response);
                        }
                    });
                }

                function delayedHideToast() {
                    if (options.timeOut > 0 || options.extendedTimeOut > 0) {
                        intervalId = setTimeout(hideToast, options.extendedTimeOut);
                        progressBar.maxHideTime = parseFloat(options.extendedTimeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                    }
                }

                function stickAround() {
                    clearTimeout(intervalId);
                    progressBar.hideEta = 0;
                    $toastElement.stop(true, true)[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing}
                    );
                }

                function updateProgress() {
                    var percentage = ((progressBar.hideEta - (new Date().getTime())) / progressBar.maxHideTime) * 100;
                    $progressElement.width(percentage + '%');
                }
            }

            function getOptions() {
                return $.extend({}, getDefaults(), toastr.options);
            }

            function removeToast($toastElement) {
                if (!$container) { $container = getContainer(); }
                if ($toastElement.is(':visible')) {
                    return;
                }
                $toastElement.remove();
                $toastElement = null;
                if ($container.children().length === 0) {
                    $container.remove();
                    previousToast = undefined;
                }
            }

        })();
    });
}(typeof define === 'function' && define.amd ? define : function (deps, factory) {
    if (typeof module !== 'undefined' && module.exports) { //Node
        module.exports = factory(require('jquery'));
    } else {
        window.toastr = factory(window.jQuery);
    }
}));

/**
 * bootbox.js 5.1.3
 *
 * http://bootboxjs.com/license.txt
 */
!function(e,t){'use strict';'function'==typeof define&&define.amd?define(['jquery'],t):'object'==typeof exports?module.exports=t(require('jquery')):e.bootbox=t(e.jQuery)}(this,function t(p,u){'use strict';var r,n,i,l;Object.keys||(Object.keys=(r=Object.prototype.hasOwnProperty,n=!{toString:null}.propertyIsEnumerable('toString'),l=(i=['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','constructor']).length,function(e){if('function'!=typeof e&&('object'!=typeof e||null===e))throw new TypeError('Object.keys called on non-object');var t,o,a=[];for(t in e)r.call(e,t)&&a.push(t);if(n)for(o=0;o<l;o++)r.call(e,i[o])&&a.push(i[o]);return a}));var d={};d.VERSION='5.0.0';var b={},f={dialog:"<div class=\"bootbox modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"><div class=\"bootbox-body\"></div></div></div></div></div>",header:"<div class=\"modal-header\"><h5 class=\"modal-title\"></h5></div>",footer:'<div class="modal-footer"></div>',closeButton:'<button type="button" class="bootbox-close-button close" aria-hidden="true">&times;</button>',form:'<form class="bootbox-form"></form>',button:'<button type="button" class="btn"></button>',option:'<option></option>',promptMessage:'<div class="bootbox-prompt-message"></div>',inputs:{text:'<input class="bootbox-input bootbox-input-text form-control" autocomplete="off" type="text" />',textarea:'<textarea class="bootbox-input bootbox-input-textarea form-control"></textarea>',email:'<input class="bootbox-input bootbox-input-email form-control" autocomplete="off" type="email" />',select:'<select class="bootbox-input bootbox-input-select form-control"></select>',checkbox:'<div class="form-check checkbox"><label class="form-check-label"><input class="form-check-input bootbox-input bootbox-input-checkbox" type="checkbox" /></label></div>',radio:'<div class="form-check radio"><label class="form-check-label"><input class="form-check-input bootbox-input bootbox-input-radio" type="radio" name="bootbox-radio" /></label></div>',date:'<input class="bootbox-input bootbox-input-date form-control" autocomplete="off" type="date" />',time:'<input class="bootbox-input bootbox-input-time form-control" autocomplete="off" type="time" />',number:'<input class="bootbox-input bootbox-input-number form-control" autocomplete="off" type="number" />',password:'<input class="bootbox-input bootbox-input-password form-control" autocomplete="off" type="password" />',range:'<input class="bootbox-input bootbox-input-range form-control-range" autocomplete="off" type="range" />'}},m={locale:'en',backdrop:'static',animate:!0,className:null,closeButton:!0,show:!0,container:'body',value:'',inputType:'text',swapButtonOrder:!1,centerVertical:!1,multiple:!1,scrollable:!1};function c(e,t,o){return p.extend(!0,{},e,function(e,t){var o=e.length,a={};if(o<1||2<o)throw new Error('Invalid argument length');return 2===o||'string'==typeof e[0]?(a[t[0]]=e[0],a[t[1]]=e[1]):a=e[0],a}(t,o))}function h(e,t,o,a){var r;a&&a[0]&&(r=a[0].locale||m.locale,(a[0].swapButtonOrder||m.swapButtonOrder)&&(t=t.reverse()));var n,i,l,s={className:'bootbox-'+e,buttons:function(e,t){for(var o={},a=0,r=e.length;a<r;a++){var n=e[a],i=n.toLowerCase(),l=n.toUpperCase();o[i]={label:(s=l,c=t,void 0,p=b[c],p?p[s]:b.en[s])}}var s,c,p;return o}(t,r)};return n=c(s,a,o),l={},v(i=t,function(e,t){l[t]=!0}),v(n.buttons,function(e){if(l[e]===u)throw new Error('button key "'+e+'" is not allowed (options are '+i.join(' ')+')')}),n}function w(e){return Object.keys(e).length}function v(e,o){var a=0;p.each(e,function(e,t){o(e,t,a++)})}function g(e,t,o){e.stopPropagation(),e.preventDefault(),p.isFunction(o)&&!1===o.call(t,e)||t.modal('hide')}function y(e){return/([01][0-9]|2[0-3]):[0-5][0-9]?:[0-5][0-9]/.test(e)}function x(e){return/(\d{4})-(\d{2})-(\d{2})/.test(e)}return d.locales=function(e){return e?b[e]:b},d.addLocale=function(e,o){return p.each(['OK','CANCEL','CONFIRM'],function(e,t){if(!o[t])throw new Error('Please supply a translation for "'+t+'"')}),b[e]={OK:o.OK,CANCEL:o.CANCEL,CONFIRM:o.CONFIRM},d},d.removeLocale=function(e){if('en'===e)throw new Error('"en" is used as the default and fallback locale and cannot be removed.');return delete b[e],d},d.setLocale=function(e){return d.setDefaults('locale',e)},d.setDefaults=function(){var e={};return 2===arguments.length?e[arguments[0]]=arguments[1]:e=arguments[0],p.extend(m,e),d},d.hideAll=function(){return p('.bootbox').modal('hide'),d},d.init=function(e){return t(e||p)},d.dialog=function(e){if(p.fn.modal===u)throw new Error("\"$.fn.modal\" is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.");if(e=function(r){var n,i;if('object'!=typeof r)throw new Error('Please supply an object of options');if(!r.message)throw new Error('"message" option must not be null or an empty string.');(r=p.extend({},m,r)).buttons||(r.buttons={});return n=r.buttons,i=w(n),v(n,function(e,t,o){if(p.isFunction(t)&&(t=n[e]={callback:t}),'object'!==p.type(t))throw new Error('button with key "'+e+'" must be an object');if(t.label||(t.label=e),!t.className){var a=!1;a=r.swapButtonOrder?0===o:o===i-1,t.className=i<=2&&a?'btn-primary':'btn-secondary btn-default'}}),r}(e),p.fn.modal.Constructor.VERSION){e.fullBootstrapVersion=p.fn.modal.Constructor.VERSION;var t=e.fullBootstrapVersion.indexOf('.');e.bootstrap=e.fullBootstrapVersion.substring(0,t)}else e.bootstrap='2',e.fullBootstrapVersion='2.3.2',console.warn('Bootbox will *mostly* work with Bootstrap 2, but we do not officially support it. Please upgrade, if possible.');var o=p(f.dialog),a=o.find('.modal-dialog'),r=o.find('.modal-body'),n=p(f.header),i=p(f.footer),l=e.buttons,s={onEscape:e.onEscape};if(r.find('.bootbox-body').html(e.message),0<w(e.buttons)&&(v(l,function(e,t){var o=p(f.button);switch(o.data('bb-handler',e),o.addClass(t.className),e){case'ok':case'confirm':o.addClass('bootbox-accept');break;case'cancel':o.addClass('bootbox-cancel')}o.html(t.label),i.append(o),s[e]=t.callback}),r.after(i)),!0===e.animate&&o.addClass('fade'),e.className&&o.addClass(e.className),e.size)switch(e.fullBootstrapVersion.substring(0,3)<'3.1'&&console.warn('"size" requires Bootstrap 3.1.0 or higher. You appear to be using '+e.fullBootstrapVersion+'. Please upgrade to use this option.'),e.size){case'small':case'sm':a.addClass('modal-sm');break;case'large':case'lg':a.addClass('modal-lg');break;case'xl':case'extra-large':e.fullBootstrapVersion.substring(0,3)<'4.2'&&console.warn('Using size "xl"/"extra-large" requires Bootstrap 4.2.0 or higher. You appear to be using '+e.fullBootstrapVersion+'. Please upgrade to use this option.'),a.addClass('modal-xl')}if(e.scrollable&&(e.fullBootstrapVersion.substring(0,3)<'4.3'&&console.warn('Using "scrollable" requires Bootstrap 4.3.0 or higher. You appear to be using '+e.fullBootstrapVersion+'. Please upgrade to use this option.'),a.addClass('modal-dialog-scrollable')),e.title&&(r.before(n),o.find('.modal-title').html(e.title)),e.closeButton){var c=p(f.closeButton);e.title?3<e.bootstrap?o.find('.modal-header').append(c):o.find('.modal-header').prepend(c):c.prependTo(r)}return e.centerVertical&&(e.fullBootstrapVersion<'4.0.0'&&console.warn('"centerVertical" requires Bootstrap 4.0.0-beta.3 or higher. You appear to be using '+e.fullBootstrapVersion+'. Please upgrade to use this option.'),a.addClass('modal-dialog-centered')),o.one('hide.bs.modal',function(e){e.target===this&&(o.off('escape.close.bb'),o.off('click'))}),o.one('hidden.bs.modal',function(e){e.target===this&&o.remove()}),o.one('shown.bs.modal',function(){o.find('.bootbox-accept:first').trigger('focus')}),'static'!==e.backdrop&&o.on('click.dismiss.bs.modal',function(e){o.children('.modal-backdrop').length&&(e.currentTarget=o.children('.modal-backdrop').get(0)),e.target===e.currentTarget&&o.trigger('escape.close.bb')}),o.on('escape.close.bb',function(e){s.onEscape&&g(e,o,s.onEscape)}),o.on('click','.modal-footer button:not(.disabled)',function(e){var t=p(this).data('bb-handler');g(e,o,s[t])}),o.on('click','.bootbox-close-button',function(e){g(e,o,s.onEscape)}),o.on('keyup',function(e){27===e.which&&o.trigger('escape.close.bb')}),p(e.container).append(o),o.modal({backdrop:!!e.backdrop&&'static',keyboard:!1,show:!1}),e.show&&o.modal('show'),o},d.alert=function(){var e;if((e=h('alert',['ok'],['message','callback'],arguments)).callback&&!p.isFunction(e.callback))throw new Error('alert requires the "callback" property to be a function when provided');return e.buttons.ok.callback=e.onEscape=function(){return!p.isFunction(e.callback)||e.callback.call(this)},d.dialog(e)},d.confirm=function(){var e;if(e=h('confirm',['cancel','confirm'],['message','callback'],arguments),!p.isFunction(e.callback))throw new Error('confirm requires a callback');return e.buttons.cancel.callback=e.onEscape=function(){return e.callback.call(this,!1)},e.buttons.confirm.callback=function(){return e.callback.call(this,!0)},d.dialog(e)},d.prompt=function(){var r,t,e,n,o,a;if(e=p(f.form),(r=h('prompt',['cancel','confirm'],['title','callback'],arguments)).value||(r.value=m.value),r.inputType||(r.inputType=m.inputType),o=r.show===u?m.show:r.show,r.show=!1,r.buttons.cancel.callback=r.onEscape=function(){return r.callback.call(this,null)},r.buttons.confirm.callback=function(){var e;if('checkbox'===r.inputType)e=n.find('input:checked').map(function(){return p(this).val()}).get();else if('radio'===r.inputType)e=n.find('input:checked').val();else{if(n[0].checkValidity&&!n[0].checkValidity())return!1;e='select'===r.inputType&&!0===r.multiple?n.find('option:selected').map(function(){return p(this).val()}).get():n.val()}return r.callback.call(this,e)},!r.title)throw new Error('prompt requires a title');if(!p.isFunction(r.callback))throw new Error('prompt requires a callback');if(!f.inputs[r.inputType])throw new Error('Invalid prompt type');switch(n=p(f.inputs[r.inputType]),r.inputType){case'text':case'textarea':case'email':case'password':n.val(r.value),r.placeholder&&n.attr('placeholder',r.placeholder),r.pattern&&n.attr('pattern',r.pattern),r.maxlength&&n.attr('maxlength',r.maxlength),r.required&&n.prop({required:!0}),r.rows&&!isNaN(parseInt(r.rows))&&'textarea'===r.inputType&&n.attr({rows:r.rows});break;case'date':case'time':case'number':case'range':if(n.val(r.value),r.placeholder&&n.attr('placeholder',r.placeholder),r.pattern&&n.attr('pattern',r.pattern),r.required&&n.prop({required:!0}),'date'!==r.inputType&&r.step){if(!('any'===r.step||!isNaN(r.step)&&0<parseInt(r.step)))throw new Error('"step" must be a valid positive number or the value "any". See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-step for more information.');n.attr('step',r.step)}(function(e,t,o){var a=!1,r=!0,n=!0;if('date'===e)t===u||(r=x(t))?o===u||(n=x(o))||console.warn('Browsers which natively support the "date" input type expect date values to be of the form "YYYY-MM-DD" (see ISO-8601 https://www.iso.org/iso-8601-date-and-time-format.html). Bootbox does not enforce this rule, but your max value may not be enforced by this browser.'):console.warn('Browsers which natively support the "date" input type expect date values to be of the form "YYYY-MM-DD" (see ISO-8601 https://www.iso.org/iso-8601-date-and-time-format.html). Bootbox does not enforce this rule, but your min value may not be enforced by this browser.');else if('time'===e){if(t!==u&&!(r=y(t)))throw new Error('"min" is not a valid time. See https://www.w3.org/TR/2012/WD-html-markup-20120315/datatypes.html#form.data.time for more information.');if(o!==u&&!(n=y(o)))throw new Error('"max" is not a valid time. See https://www.w3.org/TR/2012/WD-html-markup-20120315/datatypes.html#form.data.time for more information.')}else{if(t!==u&&isNaN(t))throw new Error('"min" must be a valid number. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-min for more information.');if(o!==u&&isNaN(o))throw new Error('"max" must be a valid number. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max for more information.')}if(r&&n){if(o<=t)throw new Error('"max" must be greater than "min". See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max for more information.');a=!0}return a})(r.inputType,r.min,r.max)&&(r.min!==u&&n.attr('min',r.min),r.max!==u&&n.attr('max',r.max));break;case'select':var i={};if(a=r.inputOptions||[],!p.isArray(a))throw new Error('Please pass an array of input options');if(!a.length)throw new Error('prompt with "inputType" set to "select" requires at least one option');r.placeholder&&n.attr('placeholder',r.placeholder),r.required&&n.prop({required:!0}),r.multiple&&n.prop({multiple:!0}),v(a,function(e,t){var o=n;if(t.value===u||t.text===u)throw new Error('each option needs a "value" property and a "text" property');t.group&&(i[t.group]||(i[t.group]=p('<optgroup />').attr('label',t.group)),o=i[t.group]);var a=p(f.option);a.attr('value',t.value).text(t.text),o.append(a)}),v(i,function(e,t){n.append(t)}),n.val(r.value);break;case'checkbox':var l=p.isArray(r.value)?r.value:[r.value];if(!(a=r.inputOptions||[]).length)throw new Error('prompt with "inputType" set to "checkbox" requires at least one option');n=p('<div class="bootbox-checkbox-list"></div>'),v(a,function(e,o){if(o.value===u||o.text===u)throw new Error('each option needs a "value" property and a "text" property');var a=p(f.inputs[r.inputType]);a.find('input').attr('value',o.value),a.find('label').append('\n'+o.text),v(l,function(e,t){t===o.value&&a.find('input').prop('checked',!0)}),n.append(a)});break;case'radio':if(r.value!==u&&p.isArray(r.value))throw new Error('prompt with "inputType" set to "radio" requires a single, non-array value for "value"');if(!(a=r.inputOptions||[]).length)throw new Error('prompt with "inputType" set to "radio" requires at least one option');n=p('<div class="bootbox-radiobutton-list"></div>');var s=!0;v(a,function(e,t){if(t.value===u||t.text===u)throw new Error('each option needs a "value" property and a "text" property');var o=p(f.inputs[r.inputType]);o.find('input').attr('value',t.value),o.find('label').append('\n'+t.text),r.value!==u&&t.value===r.value&&(o.find('input').prop('checked',!0),s=!1),n.append(o)}),s&&n.find('input[type="radio"]').first().prop('checked',!0)}if(e.append(n),e.on('submit',function(e){e.preventDefault(),e.stopPropagation(),t.find('.bootbox-accept').trigger('click')}),''!==p.trim(r.message)){var c=p(f.promptMessage).html(r.message);e.prepend(c),r.message=e}else r.message=e;return(t=d.dialog(r)).off('shown.bs.modal'),t.on('shown.bs.modal',function(){n.focus()}),!0===o&&t.modal('show'),t},d.addLocale('en',{OK:'OK',CANCEL:'Cancel',CONFIRM:'OK'}),d});
/**
 * bootbox.js 5.1.3
 *
 * http://bootboxjs.com/license.txt
 */
!function(C,a){'use strict';'function'==typeof define&&define.amd?define(['bootbox'],a):'object'==typeof module&&module.exports?a(require('./bootbox')):a(C.bootbox)}(this,function(C){'use strict';C.addLocale('ar',{OK:'موافق',CANCEL:'الغاء',CONFIRM:'تأكيد'}),C.addLocale('az',{OK:'OK',CANCEL:'İmtina et',CONFIRM:'Təsdiq et'}),C.addLocale('bg_BG',{OK:'Ок',CANCEL:'Отказ',CONFIRM:'Потвърждавам'}),C.addLocale('br',{OK:'OK',CANCEL:'Cancelar',CONFIRM:'Sim'}),C.addLocale('cs',{OK:'OK',CANCEL:'Zrušit',CONFIRM:'Potvrdit'}),C.addLocale('da',{OK:'OK',CANCEL:'Annuller',CONFIRM:'Accepter'}),C.addLocale('de',{OK:'OK',CANCEL:'Abbrechen',CONFIRM:'Akzeptieren'}),C.addLocale('el',{OK:'Εντάξει',CANCEL:'Ακύρωση',CONFIRM:'Επιβεβαίωση'}),C.addLocale('en',{OK:'OK',CANCEL:'Cancel',CONFIRM:'OK'}),C.addLocale('es',{OK:'OK',CANCEL:'Cancelar',CONFIRM:'Aceptar'}),C.addLocale('eu',{OK:'OK',CANCEL:'Ezeztatu',CONFIRM:'Onartu'}),C.addLocale('et',{OK:'OK',CANCEL:'Katkesta',CONFIRM:'OK'}),C.addLocale('fa',{OK:'قبول',CANCEL:'لغو',CONFIRM:'تایید'}),C.addLocale('fi',{OK:'OK',CANCEL:'Peruuta',CONFIRM:'OK'}),C.addLocale('fr',{OK:'OK',CANCEL:'Annuler',CONFIRM:'Confirmer'}),C.addLocale('he',{OK:'אישור',CANCEL:'ביטול',CONFIRM:'אישור'}),C.addLocale('hu',{OK:'OK',CANCEL:'Mégsem',CONFIRM:'Megerősít'}),C.addLocale('hr',{OK:'OK',CANCEL:'Odustani',CONFIRM:'Potvrdi'}),C.addLocale('id',{OK:'OK',CANCEL:'Batal',CONFIRM:'OK'}),C.addLocale('it',{OK:'OK',CANCEL:'Annulla',CONFIRM:'Conferma'}),C.addLocale('ja',{OK:'OK',CANCEL:'キャンセル',CONFIRM:'確認'}),C.addLocale('ko',{OK:'OK',CANCEL:'취소',CONFIRM:'확인'}),C.addLocale('lt',{OK:'Gerai',CANCEL:'Atšaukti',CONFIRM:'Patvirtinti'}),C.addLocale('lv',{OK:'Labi',CANCEL:'Atcelt',CONFIRM:'Apstiprināt'}),C.addLocale('nl',{OK:'OK',CANCEL:'Annuleren',CONFIRM:'Accepteren'}),C.addLocale('no',{OK:'OK',CANCEL:'Avbryt',CONFIRM:'OK'}),C.addLocale('pl',{OK:'OK',CANCEL:'Anuluj',CONFIRM:'Potwierdź'}),C.addLocale('pt',{OK:'OK',CANCEL:'Cancelar',CONFIRM:'Confirmar'}),C.addLocale('ru',{OK:'OK',CANCEL:'Отмена',CONFIRM:'Подтвердить'}),C.addLocale('sk',{OK:'OK',CANCEL:'Zrušiť',CONFIRM:'Potvrdiť'}),C.addLocale('sl',{OK:'OK',CANCEL:'Prekliči',CONFIRM:'Potrdi'}),C.addLocale('sq',{OK:'OK',CANCEL:'Anulo',CONFIRM:'Prano'}),C.addLocale('sv',{OK:'OK',CANCEL:'Avbryt',CONFIRM:'OK'}),C.addLocale('sw',{OK:'Sawa',CANCEL:'Ghairi',CONFIRM:'Thibitisha'}),C.addLocale('ta',{OK:'சரி',CANCEL:'ரத்து செய்',CONFIRM:'உறுதி செய்'}),C.addLocale('th',{OK:'ตกลง',CANCEL:'ยกเลิก',CONFIRM:'ยืนยัน'}),C.addLocale('tr',{OK:'Tamam',CANCEL:'İptal',CONFIRM:'Onayla'}),C.addLocale('uk',{OK:'OK',CANCEL:'Відміна',CONFIRM:'Прийняти'}),C.addLocale('zh_CN',{OK:'OK',CANCEL:'取消',CONFIRM:'确认'}),C.addLocale('zh_TW',{OK:'OK',CANCEL:'取消',CONFIRM:'確認'})});
var QRCode;!function(){function a(a){this.mode=c.MODE_8BIT_BYTE,this.data=a,this.parsedData=[];for(var b=[],d=0,e=this.data.length;e>d;d++){var f=this.data.charCodeAt(d);f>65536?(b[0]=240|(1835008&f)>>>18,b[1]=128|(258048&f)>>>12,b[2]=128|(4032&f)>>>6,b[3]=128|63&f):f>2048?(b[0]=224|(61440&f)>>>12,b[1]=128|(4032&f)>>>6,b[2]=128|63&f):f>128?(b[0]=192|(1984&f)>>>6,b[1]=128|63&f):b[0]=f,this.parsedData=this.parsedData.concat(b)}this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function b(a,b){this.typeNumber=a,this.errorCorrectLevel=b,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function i(a,b){if(void 0==a.length)throw new Error(a.length+"/"+b);for(var c=0;c<a.length&&0==a[c];)c++;this.num=new Array(a.length-c+b);for(var d=0;d<a.length-c;d++)this.num[d]=a[d+c]}function j(a,b){this.totalCount=a,this.dataCount=b}function k(){this.buffer=[],this.length=0}function m(){return"undefined"!=typeof CanvasRenderingContext2D}function n(){var a=!1,b=navigator.userAgent;return/android/i.test(b)&&(a=!0,aMat=b.toString().match(/android ([0-9]\.[0-9])/i),aMat&&aMat[1]&&(a=parseFloat(aMat[1]))),a}function r(a,b){for(var c=1,e=s(a),f=0,g=l.length;g>=f;f++){var h=0;switch(b){case d.L:h=l[f][0];break;case d.M:h=l[f][1];break;case d.Q:h=l[f][2];break;case d.H:h=l[f][3]}if(h>=e)break;c++}if(c>l.length)throw new Error("Too long data");return c}function s(a){var b=encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return b.length+(b.length!=a?3:0)}a.prototype={getLength:function(){return this.parsedData.length},write:function(a){for(var b=0,c=this.parsedData.length;c>b;b++)a.put(this.parsedData[b],8)}},b.prototype={addData:function(b){var c=new a(b);this.dataList.push(c),this.dataCache=null},isDark:function(a,b){if(0>a||this.moduleCount<=a||0>b||this.moduleCount<=b)throw new Error(a+","+b);return this.modules[a][b]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,c){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++){this.modules[d]=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[d][e]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(a,c),this.typeNumber>=7&&this.setupTypeNumber(a),null==this.dataCache&&(this.dataCache=b.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,c)},setupPositionProbePattern:function(a,b){for(var c=-1;7>=c;c++)if(!(-1>=a+c||this.moduleCount<=a+c))for(var d=-1;7>=d;d++)-1>=b+d||this.moduleCount<=b+d||(this.modules[a+c][b+d]=c>=0&&6>=c&&(0==d||6==d)||d>=0&&6>=d&&(0==c||6==c)||c>=2&&4>=c&&d>=2&&4>=d?!0:!1)},getBestMaskPattern:function(){for(var a=0,b=0,c=0;8>c;c++){this.makeImpl(!0,c);var d=f.getLostPoint(this);(0==c||a>d)&&(a=d,b=c)}return b},createMovieClip:function(a,b,c){var d=a.createEmptyMovieClip(b,c),e=1;this.make();for(var f=0;f<this.modules.length;f++)for(var g=f*e,h=0;h<this.modules[f].length;h++){var i=h*e,j=this.modules[f][h];j&&(d.beginFill(0,100),d.moveTo(i,g),d.lineTo(i+e,g),d.lineTo(i+e,g+e),d.lineTo(i,g+e),d.endFill())}return d},setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(var b=8;b<this.moduleCount-8;b++)null==this.modules[6][b]&&(this.modules[6][b]=0==b%2)},setupPositionAdjustPattern:function(){for(var a=f.getPatternPosition(this.typeNumber),b=0;b<a.length;b++)for(var c=0;c<a.length;c++){var d=a[b],e=a[c];if(null==this.modules[d][e])for(var g=-2;2>=g;g++)for(var h=-2;2>=h;h++)this.modules[d+g][e+h]=-2==g||2==g||-2==h||2==h||0==g&&0==h?!0:!1}},setupTypeNumber:function(a){for(var b=f.getBCHTypeNumber(this.typeNumber),c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[Math.floor(c/3)][c%3+this.moduleCount-8-3]=d}for(var c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[c%3+this.moduleCount-8-3][Math.floor(c/3)]=d}},setupTypeInfo:function(a,b){for(var c=this.errorCorrectLevel<<3|b,d=f.getBCHTypeInfo(c),e=0;15>e;e++){var g=!a&&1==(1&d>>e);6>e?this.modules[e][8]=g:8>e?this.modules[e+1][8]=g:this.modules[this.moduleCount-15+e][8]=g}for(var e=0;15>e;e++){var g=!a&&1==(1&d>>e);8>e?this.modules[8][this.moduleCount-e-1]=g:9>e?this.modules[8][15-e-1+1]=g:this.modules[8][15-e-1]=g}this.modules[this.moduleCount-8][8]=!a},mapData:function(a,b){for(var c=-1,d=this.moduleCount-1,e=7,g=0,h=this.moduleCount-1;h>0;h-=2)for(6==h&&h--;;){for(var i=0;2>i;i++)if(null==this.modules[d][h-i]){var j=!1;g<a.length&&(j=1==(1&a[g]>>>e));var k=f.getMask(b,d,h-i);k&&(j=!j),this.modules[d][h-i]=j,e--,-1==e&&(g++,e=7)}if(d+=c,0>d||this.moduleCount<=d){d-=c,c=-c;break}}}},b.PAD0=236,b.PAD1=17,b.createData=function(a,c,d){for(var e=j.getRSBlocks(a,c),g=new k,h=0;h<d.length;h++){var i=d[h];g.put(i.mode,4),g.put(i.getLength(),f.getLengthInBits(i.mode,a)),i.write(g)}for(var l=0,h=0;h<e.length;h++)l+=e[h].dataCount;if(g.getLengthInBits()>8*l)throw new Error("code length overflow. ("+g.getLengthInBits()+">"+8*l+")");for(g.getLengthInBits()+4<=8*l&&g.put(0,4);0!=g.getLengthInBits()%8;)g.putBit(!1);for(;;){if(g.getLengthInBits()>=8*l)break;if(g.put(b.PAD0,8),g.getLengthInBits()>=8*l)break;g.put(b.PAD1,8)}return b.createBytes(g,e)},b.createBytes=function(a,b){for(var c=0,d=0,e=0,g=new Array(b.length),h=new Array(b.length),j=0;j<b.length;j++){var k=b[j].dataCount,l=b[j].totalCount-k;d=Math.max(d,k),e=Math.max(e,l),g[j]=new Array(k);for(var m=0;m<g[j].length;m++)g[j][m]=255&a.buffer[m+c];c+=k;var n=f.getErrorCorrectPolynomial(l),o=new i(g[j],n.getLength()-1),p=o.mod(n);h[j]=new Array(n.getLength()-1);for(var m=0;m<h[j].length;m++){var q=m+p.getLength()-h[j].length;h[j][m]=q>=0?p.get(q):0}}for(var r=0,m=0;m<b.length;m++)r+=b[m].totalCount;for(var s=new Array(r),t=0,m=0;d>m;m++)for(var j=0;j<b.length;j++)m<g[j].length&&(s[t++]=g[j][m]);for(var m=0;e>m;m++)for(var j=0;j<b.length;j++)m<h[j].length&&(s[t++]=h[j][m]);return s};for(var c={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},d={L:1,M:0,Q:3,H:2},e={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var b=a<<10;f.getBCHDigit(b)-f.getBCHDigit(f.G15)>=0;)b^=f.G15<<f.getBCHDigit(b)-f.getBCHDigit(f.G15);return(a<<10|b)^f.G15_MASK},getBCHTypeNumber:function(a){for(var b=a<<12;f.getBCHDigit(b)-f.getBCHDigit(f.G18)>=0;)b^=f.G18<<f.getBCHDigit(b)-f.getBCHDigit(f.G18);return a<<12|b},getBCHDigit:function(a){for(var b=0;0!=a;)b++,a>>>=1;return b},getPatternPosition:function(a){return f.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,b,c){switch(a){case e.PATTERN000:return 0==(b+c)%2;case e.PATTERN001:return 0==b%2;case e.PATTERN010:return 0==c%3;case e.PATTERN011:return 0==(b+c)%3;case e.PATTERN100:return 0==(Math.floor(b/2)+Math.floor(c/3))%2;case e.PATTERN101:return 0==b*c%2+b*c%3;case e.PATTERN110:return 0==(b*c%2+b*c%3)%2;case e.PATTERN111:return 0==(b*c%3+(b+c)%2)%2;default:throw new Error("bad maskPattern:"+a)}},getErrorCorrectPolynomial:function(a){for(var b=new i([1],0),c=0;a>c;c++)b=b.multiply(new i([1,g.gexp(c)],0));return b},getLengthInBits:function(a,b){if(b>=1&&10>b)switch(a){case c.MODE_NUMBER:return 10;case c.MODE_ALPHA_NUM:return 9;case c.MODE_8BIT_BYTE:return 8;case c.MODE_KANJI:return 8;default:throw new Error("mode:"+a)}else if(27>b)switch(a){case c.MODE_NUMBER:return 12;case c.MODE_ALPHA_NUM:return 11;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 10;default:throw new Error("mode:"+a)}else{if(!(41>b))throw new Error("type:"+b);switch(a){case c.MODE_NUMBER:return 14;case c.MODE_ALPHA_NUM:return 13;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 12;default:throw new Error("mode:"+a)}}},getLostPoint:function(a){for(var b=a.getModuleCount(),c=0,d=0;b>d;d++)for(var e=0;b>e;e++){for(var f=0,g=a.isDark(d,e),h=-1;1>=h;h++)if(!(0>d+h||d+h>=b))for(var i=-1;1>=i;i++)0>e+i||e+i>=b||(0!=h||0!=i)&&g==a.isDark(d+h,e+i)&&f++;f>5&&(c+=3+f-5)}for(var d=0;b-1>d;d++)for(var e=0;b-1>e;e++){var j=0;a.isDark(d,e)&&j++,a.isDark(d+1,e)&&j++,a.isDark(d,e+1)&&j++,a.isDark(d+1,e+1)&&j++,(0==j||4==j)&&(c+=3)}for(var d=0;b>d;d++)for(var e=0;b-6>e;e++)a.isDark(d,e)&&!a.isDark(d,e+1)&&a.isDark(d,e+2)&&a.isDark(d,e+3)&&a.isDark(d,e+4)&&!a.isDark(d,e+5)&&a.isDark(d,e+6)&&(c+=40);for(var e=0;b>e;e++)for(var d=0;b-6>d;d++)a.isDark(d,e)&&!a.isDark(d+1,e)&&a.isDark(d+2,e)&&a.isDark(d+3,e)&&a.isDark(d+4,e)&&!a.isDark(d+5,e)&&a.isDark(d+6,e)&&(c+=40);for(var k=0,e=0;b>e;e++)for(var d=0;b>d;d++)a.isDark(d,e)&&k++;var l=Math.abs(100*k/b/b-50)/5;return c+=10*l}},g={glog:function(a){if(1>a)throw new Error("glog("+a+")");return g.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;a>=256;)a-=255;return g.EXP_TABLE[a]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},h=0;8>h;h++)g.EXP_TABLE[h]=1<<h;for(var h=8;256>h;h++)g.EXP_TABLE[h]=g.EXP_TABLE[h-4]^g.EXP_TABLE[h-5]^g.EXP_TABLE[h-6]^g.EXP_TABLE[h-8];for(var h=0;255>h;h++)g.LOG_TABLE[g.EXP_TABLE[h]]=h;i.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var b=new Array(this.getLength()+a.getLength()-1),c=0;c<this.getLength();c++)for(var d=0;d<a.getLength();d++)b[c+d]^=g.gexp(g.glog(this.get(c))+g.glog(a.get(d)));return new i(b,0)},mod:function(a){if(this.getLength()-a.getLength()<0)return this;for(var b=g.glog(this.get(0))-g.glog(a.get(0)),c=new Array(this.getLength()),d=0;d<this.getLength();d++)c[d]=this.get(d);for(var d=0;d<a.getLength();d++)c[d]^=g.gexp(g.glog(a.get(d))+b);return new i(c,0).mod(a)}},j.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],j.getRSBlocks=function(a,b){var c=j.getRsBlockTable(a,b);if(void 0==c)throw new Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+b);for(var d=c.length/3,e=[],f=0;d>f;f++)for(var g=c[3*f+0],h=c[3*f+1],i=c[3*f+2],k=0;g>k;k++)e.push(new j(h,i));return e},j.getRsBlockTable=function(a,b){switch(b){case d.L:return j.RS_BLOCK_TABLE[4*(a-1)+0];case d.M:return j.RS_BLOCK_TABLE[4*(a-1)+1];case d.Q:return j.RS_BLOCK_TABLE[4*(a-1)+2];case d.H:return j.RS_BLOCK_TABLE[4*(a-1)+3];default:return void 0}},k.prototype={get:function(a){var b=Math.floor(a/8);return 1==(1&this.buffer[b]>>>7-a%8)},put:function(a,b){for(var c=0;b>c;c++)this.putBit(1==(1&a>>>b-c-1))},getLengthInBits:function(){return this.length},putBit:function(a){var b=Math.floor(this.length/8);this.buffer.length<=b&&this.buffer.push(0),a&&(this.buffer[b]|=128>>>this.length%8),this.length++}};var l=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],o=function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){function g(a,b){var c=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)b.hasOwnProperty(d)&&c.setAttribute(d,b[d]);return c}var b=this._htOption,c=this._el,d=a.getModuleCount();Math.floor(b.width/d),Math.floor(b.height/d),this.clear();var h=g("svg",{viewBox:"0 0 "+String(d)+" "+String(d),width:"100%",height:"100%",fill:b.colorLight});h.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),c.appendChild(h),h.appendChild(g("rect",{fill:b.colorDark,width:"1",height:"1",id:"template"}));for(var i=0;d>i;i++)for(var j=0;d>j;j++)if(a.isDark(i,j)){var k=g("use",{x:String(i),y:String(j)});k.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),h.appendChild(k)}},a.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},a}(),p="svg"===document.documentElement.tagName.toLowerCase(),q=p?o:m()?function(){function a(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function d(a,b){var c=this;if(c._fFail=b,c._fSuccess=a,null===c._bSupportDataURI){var d=document.createElement("img"),e=function(){c._bSupportDataURI=!1,c._fFail&&_fFail.call(c)},f=function(){c._bSupportDataURI=!0,c._fSuccess&&c._fSuccess.call(c)};return d.onabort=e,d.onerror=e,d.onload=f,d.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",void 0}c._bSupportDataURI===!0&&c._fSuccess?c._fSuccess.call(c):c._bSupportDataURI===!1&&c._fFail&&c._fFail.call(c)}if(this._android&&this._android<=2.1){var b=1/window.devicePixelRatio,c=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(a,d,e,f,g,h,i,j){if("nodeName"in a&&/img/i.test(a.nodeName))for(var l=arguments.length-1;l>=1;l--)arguments[l]=arguments[l]*b;else"undefined"==typeof j&&(arguments[1]*=b,arguments[2]*=b,arguments[3]*=b,arguments[4]*=b);c.apply(this,arguments)}}var e=function(a,b){this._bIsPainted=!1,this._android=n(),this._htOption=b,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=b.width,this._elCanvas.height=b.height,a.appendChild(this._elCanvas),this._el=a,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return e.prototype.draw=function(a){var b=this._elImage,c=this._oContext,d=this._htOption,e=a.getModuleCount(),f=d.width/e,g=d.height/e,h=Math.round(f),i=Math.round(g);b.style.display="none",this.clear();for(var j=0;e>j;j++)for(var k=0;e>k;k++){var l=a.isDark(j,k),m=k*f,n=j*g;c.strokeStyle=l?d.colorDark:d.colorLight,c.lineWidth=1,c.fillStyle=l?d.colorDark:d.colorLight,c.fillRect(m,n,f,g),c.strokeRect(Math.floor(m)+.5,Math.floor(n)+.5,h,i),c.strokeRect(Math.ceil(m)-.5,Math.ceil(n)-.5,h,i)}this._bIsPainted=!0},e.prototype.makeImage=function(){this._bIsPainted&&d.call(this,a)},e.prototype.isPainted=function(){return this._bIsPainted},e.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},e.prototype.round=function(a){return a?Math.floor(1e3*a)/1e3:a},e}():function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){for(var b=this._htOption,c=this._el,d=a.getModuleCount(),e=Math.floor(b.width/d),f=Math.floor(b.height/d),g=['<table style="border:0;border-collapse:collapse;">'],h=0;d>h;h++){g.push("<tr>");for(var i=0;d>i;i++)g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+e+"px;height:"+f+"px;background-color:"+(a.isDark(h,i)?b.colorDark:b.colorLight)+';"></td>');g.push("</tr>")}g.push("</table>"),c.innerHTML=g.join("");var j=c.childNodes[0],k=(b.width-j.offsetWidth)/2,l=(b.height-j.offsetHeight)/2;k>0&&l>0&&(j.style.margin=l+"px "+k+"px")},a.prototype.clear=function(){this._el.innerHTML=""},a}();QRCode=function(a,b){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:d.H},"string"==typeof b&&(b={text:b}),b)for(var c in b)this._htOption[c]=b[c];"string"==typeof a&&(a=document.getElementById(a)),this._android=n(),this._el=a,this._oQRCode=null,this._oDrawing=new q(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},QRCode.prototype.makeCode=function(a){this._oQRCode=new b(r(a,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(a),this._oQRCode.make(),this._el.title=a,this._oDrawing.draw(this._oQRCode),this.makeImage()},QRCode.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},QRCode.prototype.clear=function(){this._oDrawing.clear()},QRCode.CorrectLevel=d}();
/*!
 * Lightbox for Bootstrap by @ashleydw
 * https://github.com/ashleydw/lightbox
 *
 * License: https://github.com/ashleydw/lightbox/blob/master/LICENSE
 */
+function ($) {

    'use strict';

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var Lightbox = (function ($) {

        var NAME = 'ekkoLightbox';
        var JQUERY_NO_CONFLICT = $.fn[NAME];

        var Default = {
            title: '',
            footer: '',
            maxWidth: 9999,
            maxHeight: 9999,
            showArrows: true, //display the left / right arrows or not
            wrapping: true, //if true, gallery loops infinitely
            type: null, //force the lightbox into image / youtube mode. if null, or not image|youtube|vimeo; detect it
            alwaysShowClose: false, //always show the close button, even if there is no title
            loadingMessage: '<div class="ekko-lightbox-loader"><div><div></div><div></div></div></div>', // http://tobiasahlin.com/spinkit/
            leftArrow: '<span>&#10094;</span>',
            rightArrow: '<span>&#10095;</span>',
            strings: {
                close: 'Close',
                fail: 'Failed to load image:',
                type: 'Could not detect remote target type. Force the type using data-type'
            },
            doc: document, // if in an iframe can specify top.document
            onShow: function onShow() { },
            onShown: function onShown() { },
            onHide: function onHide() { },
            onHidden: function onHidden() { },
            onNavigate: function onNavigate() { },
            onContentLoaded: function onContentLoaded() { }
        };

        var Lightbox = (function () {
            _createClass(Lightbox, null, [{
                key: 'Default',

                /**
           Class properties:
               _$element: null -> the <a> element currently being displayed
        _$modal: The bootstrap modal generated
           _$modalDialog: The .modal-dialog
           _$modalContent: The .modal-content
           _$modalBody: The .modal-body
           _$modalHeader: The .modal-header
           _$modalFooter: The .modal-footer
        _$lightboxContainerOne: Container of the first lightbox element
        _$lightboxContainerTwo: Container of the second lightbox element
        _$lightboxBody: First element in the container
        _$modalArrows: The overlayed arrows container
               _$galleryItems: Other <a>'s available for this gallery
        _galleryName: Name of the current data('gallery') showing
        _galleryIndex: The current index of the _$galleryItems being shown
               _config: {} the options for the modal
        _modalId: unique id for the current lightbox
        _padding / _border: CSS properties for the modal container; these are used to calculate the available space for the content
               */

                get: function get() {
                    return Default;
                }
            }]);

            function Lightbox($element, config) {
                var _this = this;

                _classCallCheck(this, Lightbox);

                this._config = $.extend({}, Default, config);
                this._$modalArrows = null;
                this._galleryIndex = 0;
                this._galleryName = null;
                this._padding = null;
                this._border = null;
                this._titleIsShown = false;
                this._footerIsShown = false;
                this._wantedWidth = 0;
                this._wantedHeight = 0;
                this._touchstartX = 0;
                this._touchendX = 0;

                this._modalId = 'ekkoLightbox-' + Math.floor(Math.random() * 1000 + 1);
                this._$element = $element instanceof jQuery ? $element : $($element);

                this._isBootstrap3 = $.fn.modal.Constructor.VERSION[0] == 3;

                var h4 = '<h4 class="modal-title">' + (this._config.title || "&nbsp;") + '</h4>';
                var btn = '<button type="button" class="close" data-dismiss="modal" aria-label="' + this._config.strings.close + '"><span aria-hidden="true">&times;</span></button>';

                var header = '<div class="modal-header' + (this._config.title || this._config.alwaysShowClose ? '' : ' hide') + '">' + (this._isBootstrap3 ? btn + h4 : h4 + btn) + '</div>';
                var footer = '<div class="modal-footer' + (this._config.footer ? '' : ' hide') + '">' + (this._config.footer || "&nbsp;") + '</div>';
                var body = '<div class="modal-body"><div class="ekko-lightbox-container"><div class="ekko-lightbox-item fade in show"></div><div class="ekko-lightbox-item fade"></div></div></div>';
                var dialog = '<div class="modal-dialog" role="document"><div class="modal-content">' + header + body + footer + '</div></div>';
                $(this._config.doc.body).append('<div id="' + this._modalId + '" class="ekko-lightbox modal fade" tabindex="-1" tabindex="-1" role="dialog" aria-hidden="true">' + dialog + '</div>');

                this._$modal = $('#' + this._modalId, this._config.doc);
                this._$modalDialog = this._$modal.find('.modal-dialog').first();
                this._$modalContent = this._$modal.find('.modal-content').first();
                this._$modalBody = this._$modal.find('.modal-body').first();
                this._$modalHeader = this._$modal.find('.modal-header').first();
                this._$modalFooter = this._$modal.find('.modal-footer').first();

                this._$lightboxContainer = this._$modalBody.find('.ekko-lightbox-container').first();
                this._$lightboxBodyOne = this._$lightboxContainer.find('> div:first-child').first();
                this._$lightboxBodyTwo = this._$lightboxContainer.find('> div:last-child').first();

                this._border = this._calculateBorders();
                this._padding = this._calculatePadding();

                this._galleryName = this._$element.data('gallery');
                if (this._galleryName) {
                    this._$galleryItems = $(document.body).find('*[data-gallery="' + this._galleryName + '"]');
                    this._galleryIndex = this._$galleryItems.index(this._$element);
                    $(document).on('keydown.ekkoLightbox', this._navigationalBinder.bind(this));

                    // add the directional arrows to the modal
                    if (this._config.showArrows && this._$galleryItems.length > 1) {
                        this._$lightboxContainer.append('<div class="ekko-lightbox-nav-overlay"><a href="#">' + this._config.leftArrow + '</a><a href="#">' + this._config.rightArrow + '</a></div>');
                        this._$modalArrows = this._$lightboxContainer.find('div.ekko-lightbox-nav-overlay').first();
                        this._$lightboxContainer.on('click', 'a:first-child', function (event) {
                            event.preventDefault();
                            return _this.navigateLeft();
                        });
                        this._$lightboxContainer.on('click', 'a:last-child', function (event) {
                            event.preventDefault();
                            return _this.navigateRight();
                        });
                        this.updateNavigation();
                    }
                }

                this._$modal.on('show.bs.modal', this._config.onShow.bind(this)).on('shown.bs.modal', function () {
                    _this._toggleLoading(true);
                    _this._handle();
                    return _this._config.onShown.call(_this);
                }).on('hide.bs.modal', this._config.onHide.bind(this)).on('hidden.bs.modal', function () {
                    if (_this._galleryName) {
                        $(document).off('keydown.ekkoLightbox');
                        $(window).off('resize.ekkoLightbox');
                    }
                    _this._$modal.remove();
                    return _this._config.onHidden.call(_this);
                }).modal(this._config);

                $(window).on('resize.ekkoLightbox', function () {
                    _this._resize(_this._wantedWidth, _this._wantedHeight);
                });
                this._$lightboxContainer.on('touchstart', function () {
                    _this._touchstartX = event.changedTouches[0].screenX;
                }).on('touchend', function () {
                    _this._touchendX = event.changedTouches[0].screenX;
                    _this._swipeGesure();
                });
            }

            _createClass(Lightbox, [{
                key: 'element',
                value: function element() {
                    return this._$element;
                }
            }, {
                key: 'modal',
                value: function modal() {
                    return this._$modal;
                }
            }, {
                key: 'navigateTo',
                value: function navigateTo(index) {

                    if (index < 0 || index > this._$galleryItems.length - 1) return this;

                    this._galleryIndex = index;

                    this.updateNavigation();

                    this._$element = $(this._$galleryItems.get(this._galleryIndex));
                    this._handle();
                }
            }, {
                key: 'navigateLeft',
                value: function navigateLeft() {

                    if (!this._$galleryItems) return;

                    if (this._$galleryItems.length === 1) return;

                    if (this._galleryIndex === 0) {
                        if (this._config.wrapping) this._galleryIndex = this._$galleryItems.length - 1; else return;
                    } else //circular
                        this._galleryIndex--;

                    this._config.onNavigate.call(this, 'left', this._galleryIndex);
                    return this.navigateTo(this._galleryIndex);
                }
            }, {
                key: 'navigateRight',
                value: function navigateRight() {

                    if (!this._$galleryItems) return;

                    if (this._$galleryItems.length === 1) return;

                    if (this._galleryIndex === this._$galleryItems.length - 1) {
                        if (this._config.wrapping) this._galleryIndex = 0; else return;
                    } else //circular
                        this._galleryIndex++;

                    this._config.onNavigate.call(this, 'right', this._galleryIndex);
                    return this.navigateTo(this._galleryIndex);
                }
            }, {
                key: 'updateNavigation',
                value: function updateNavigation() {
                    if (!this._config.wrapping) {
                        var $nav = this._$lightboxContainer.find('div.ekko-lightbox-nav-overlay');
                        if (this._galleryIndex === 0) $nav.find('a:first-child').addClass('disabled'); else $nav.find('a:first-child').removeClass('disabled');

                        if (this._galleryIndex === this._$galleryItems.length - 1) $nav.find('a:last-child').addClass('disabled'); else $nav.find('a:last-child').removeClass('disabled');
                    }
                }
            }, {
                key: 'close',
                value: function close() {
                    return this._$modal.modal('hide');
                }

                // helper private methods
            }, {
                key: '_navigationalBinder',
                value: function _navigationalBinder(event) {
                    event = event || window.event;
                    if (event.keyCode === 39) return this.navigateRight();
                    if (event.keyCode === 37) return this.navigateLeft();
                }

                // type detection private methods
            }, {
                key: '_detectRemoteType',
                value: function _detectRemoteType(src, type) {

                    type = type || false;

                    if (!type && this._isImage(src)) type = 'image';
                    if (!type && this._getYoutubeId(src)) type = 'youtube';
                    if (!type && this._getVimeoId(src)) type = 'vimeo';
                    if (!type && this._getInstagramId(src)) type = 'instagram';

                    if (!type || ['image', 'youtube', 'vimeo', 'instagram', 'video', 'url'].indexOf(type) < 0) type = 'url';

                    return type;
                }
            }, {
                key: '_isImage',
                value: function _isImage(string) {
                    return string && string.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
                }
            }, {
                key: '_containerToUse',
                value: function _containerToUse() {
                    var _this2 = this;

                    // if currently showing an image, fade it out and remove
                    var $toUse = this._$lightboxBodyTwo;
                    var $current = this._$lightboxBodyOne;

                    if (this._$lightboxBodyTwo.hasClass('in')) {
                        $toUse = this._$lightboxBodyOne;
                        $current = this._$lightboxBodyTwo;
                    }

                    $current.removeClass('in show');
                    setTimeout(function () {
                        if (!_this2._$lightboxBodyTwo.hasClass('in')) _this2._$lightboxBodyTwo.empty();
                        if (!_this2._$lightboxBodyOne.hasClass('in')) _this2._$lightboxBodyOne.empty();
                    }, 500);

                    $toUse.addClass('in show');
                    return $toUse;
                }
            }, {
                key: '_handle',
                value: function _handle() {

                    var $toUse = this._containerToUse();
                    this._updateTitleAndFooter();

                    var currentRemote = this._$element.attr('data-remote') || this._$element.attr('href');
                    var currentType = this._detectRemoteType(currentRemote, this._$element.attr('data-type') || false);

                    if (['image', 'youtube', 'vimeo', 'instagram', 'video', 'url'].indexOf(currentType) < 0) return this._error(this._config.strings.type);

                    switch (currentType) {
                        case 'image':
                            this._preloadImage(currentRemote, $toUse);
                            this._preloadImageByIndex(this._galleryIndex, 3);
                            break;
                        case 'youtube':
                            this._showYoutubeVideo(currentRemote, $toUse);
                            break;
                        case 'vimeo':
                            this._showVimeoVideo(this._getVimeoId(currentRemote), $toUse);
                            break;
                        case 'instagram':
                            this._showInstagramVideo(this._getInstagramId(currentRemote), $toUse);
                            break;
                        case 'video':
                            this._showHtml5Video(currentRemote, $toUse);
                            break;
                        default:
                            // url
                            this._loadRemoteContent(currentRemote, $toUse);
                            break;
                    }

                    return this;
                }
            }, {
                key: '_getYoutubeId',
                value: function _getYoutubeId(string) {
                    if (!string) return false;
                    var matches = string.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
                    return matches && matches[2].length === 11 ? matches[2] : false;
                }
            }, {
                key: '_getVimeoId',
                value: function _getVimeoId(string) {
                    return string && string.indexOf('vimeo') > 0 ? string : false;
                }
            }, {
                key: '_getInstagramId',
                value: function _getInstagramId(string) {
                    return string && string.indexOf('instagram') > 0 ? string : false;
                }

                // layout private methods
            }, {
                key: '_toggleLoading',
                value: function _toggleLoading(show) {
                    show = show || false;
                    if (show) {
                        this._$modalDialog.css('display', 'none');
                        this._$modal.removeClass('in show');
                        $('.modal-backdrop').append(this._config.loadingMessage);
                    } else {
                        this._$modalDialog.css('display', 'block');
                        this._$modal.addClass('in show');
                        $('.modal-backdrop').find('.ekko-lightbox-loader').remove();
                    }
                    return this;
                }
            }, {
                key: '_calculateBorders',
                value: function _calculateBorders() {
                    return {
                        top: this._totalCssByAttribute('border-top-width'),
                        right: this._totalCssByAttribute('border-right-width'),
                        bottom: this._totalCssByAttribute('border-bottom-width'),
                        left: this._totalCssByAttribute('border-left-width')
                    };
                }
            }, {
                key: '_calculatePadding',
                value: function _calculatePadding() {
                    return {
                        top: this._totalCssByAttribute('padding-top'),
                        right: this._totalCssByAttribute('padding-right'),
                        bottom: this._totalCssByAttribute('padding-bottom'),
                        left: this._totalCssByAttribute('padding-left')
                    };
                }
            }, {
                key: '_totalCssByAttribute',
                value: function _totalCssByAttribute(attribute) {
                    return parseInt(this._$modalDialog.css(attribute), 10) + parseInt(this._$modalContent.css(attribute), 10) + parseInt(this._$modalBody.css(attribute), 10);
                }
            }, {
                key: '_updateTitleAndFooter',
                value: function _updateTitleAndFooter() {
                    var title = this._$element.data('title') || "";
                    var caption = this._$element.data('footer') || "";

                    this._titleIsShown = false;
                    if (title || this._config.alwaysShowClose) {
                        this._titleIsShown = true;
                        this._$modalHeader.css('display', '').find('.modal-title').html(title || "&nbsp;");
                    } else this._$modalHeader.css('display', 'none');

                    this._footerIsShown = false;
                    if (caption) {
                        this._footerIsShown = true;
                        this._$modalFooter.css('display', '').html(caption);
                    } else this._$modalFooter.css('display', 'none');

                    return this;
                }
            }, {
                key: '_showYoutubeVideo',
                value: function _showYoutubeVideo(remote, $containerForElement) {
                    var id = this._getYoutubeId(remote);
                    var query = remote.indexOf('&') > 0 ? remote.substr(remote.indexOf('&')) : '';
                    var width = this._$element.data('width') || 560;
                    var height = this._$element.data('height') || width / (560 / 315);
                    return this._showVideoIframe('//www.youtube.com/embed/' + id + '?badge=0&autoplay=1&html5=1' + query, width, height, $containerForElement);
                }
            }, {
                key: '_showVimeoVideo',
                value: function _showVimeoVideo(id, $containerForElement) {
                    var width = this._$element.data('width') || 500;
                    var height = this._$element.data('height') || width / (560 / 315);
                    return this._showVideoIframe(id + '?autoplay=1', width, height, $containerForElement);
                }
            }, {
                key: '_showInstagramVideo',
                value: function _showInstagramVideo(id, $containerForElement) {
                    // instagram load their content into iframe's so this can be put straight into the element
                    var width = this._$element.data('width') || 612;
                    var height = width + 80;
                    id = id.substr(-1) !== '/' ? id + '/' : id; // ensure id has trailing slash
                    $containerForElement.html('<iframe width="' + width + '" height="' + height + '" src="' + id + 'embed/" frameborder="0" allowfullscreen></iframe>');
                    this._resize(width, height);
                    this._config.onContentLoaded.call(this);
                    if (this._$modalArrows) //hide the arrows when showing video
                        this._$modalArrows.css('display', 'none');
                    this._toggleLoading(false);
                    return this;
                }
            }, {
                key: '_showVideoIframe',
                value: function _showVideoIframe(url, width, height, $containerForElement) {
                    // should be used for videos only. for remote content use loadRemoteContent (data-type=url)
                    height = height || width; // default to square
                    $containerForElement.html('<div class="embed-responsive embed-responsive-16by9"><iframe width="' + width + '" height="' + height + '" src="' + url + '" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe></div>');
                    this._resize(width, height);
                    this._config.onContentLoaded.call(this);
                    if (this._$modalArrows) this._$modalArrows.css('display', 'none'); //hide the arrows when showing video
                    this._toggleLoading(false);
                    return this;
                }
            }, {
                key: '_showHtml5Video',
                value: function _showHtml5Video(url, $containerForElement) {
                    // should be used for videos only. for remote content use loadRemoteContent (data-type=url)
                    var width = this._$element.data('width') || 560;
                    var height = this._$element.data('height') || width / (560 / 315);
                    $containerForElement.html('<div class="embed-responsive embed-responsive-16by9"><video width="' + width + '" height="' + height + '" src="' + url + '" preload="auto" autoplay controls class="embed-responsive-item"></video></div>');
                    this._resize(width, height);
                    this._config.onContentLoaded.call(this);
                    if (this._$modalArrows) this._$modalArrows.css('display', 'none'); //hide the arrows when showing video
                    this._toggleLoading(false);
                    return this;
                }
            }, {
                key: '_loadRemoteContent',
                value: function _loadRemoteContent(url, $containerForElement) {
                    var _this3 = this;

                    var width = this._$element.data('width') || 560;
                    var height = this._$element.data('height') || 560;

                    var disableExternalCheck = this._$element.data('disableExternalCheck') || false;
                    this._toggleLoading(false);

                    // external urls are loading into an iframe
                    // local ajax can be loaded into the container itself
                    if (!disableExternalCheck && !this._isExternal(url)) {
                        $containerForElement.load(url, $.proxy(function () {
                            return _this3._$element.trigger('loaded.bs.modal'); l;
                        }));
                    } else {
                        $containerForElement.html('<iframe src="' + url + '" frameborder="0" allowfullscreen></iframe>');
                        this._config.onContentLoaded.call(this);
                    }

                    if (this._$modalArrows) //hide the arrows when remote content
                        this._$modalArrows.css('display', 'none');

                    this._resize(width, height);
                    return this;
                }
            }, {
                key: '_isExternal',
                value: function _isExternal(url) {
                    var match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
                    if (typeof match[1] === "string" && match[1].length > 0 && match[1].toLowerCase() !== location.protocol) return true;

                    if (typeof match[2] === "string" && match[2].length > 0 && match[2].replace(new RegExp(':(' + ({
                        "http:": 80,
                        "https:": 443
                    })[location.protocol] + ')?$'), "") !== location.host) return true;

                    return false;
                }
            }, {
                key: '_error',
                value: function _error(message) {
                    console.error(message);
                    this._containerToUse().html(message);
                    this._resize(300, 300);
                    return this;
                }
            }, {
                key: '_preloadImageByIndex',
                value: function _preloadImageByIndex(startIndex, numberOfTimes) {

                    if (!this._$galleryItems) return;

                    var next = $(this._$galleryItems.get(startIndex), false);
                    if (typeof next == 'undefined') return;

                    var src = next.attr('data-remote') || next.attr('href');
                    if (next.attr('data-type') === 'image' || this._isImage(src)) this._preloadImage(src, false);

                    if (numberOfTimes > 0) return this._preloadImageByIndex(startIndex + 1, numberOfTimes - 1);
                }
            }, {
                key: '_preloadImage',
                value: function _preloadImage(src, $containerForImage) {
                    var _this4 = this;

                    $containerForImage = $containerForImage || false;

                    var img = new Image();
                    if ($containerForImage) {
                        (function () {

                            // if loading takes > 200ms show a loader
                            var loadingTimeout = setTimeout(function () {
                                $containerForImage.append(_this4._config.loadingMessage);
                            }, 200);

                            img.onload = function () {
                                if (loadingTimeout) clearTimeout(loadingTimeout);
                                loadingTimeout = null;
                                var image = $('<img />');
                                image.attr('src', img.src);
                                image.addClass('img-fluid');

                                // backward compatibility for bootstrap v3
                                image.css('width', '100%');

                                $containerForImage.html(image);
                                if (_this4._$modalArrows) _this4._$modalArrows.css('display', ''); // remove display to default to css property

                                _this4._resize(img.width, img.height);
                                _this4._toggleLoading(false);
                                return _this4._config.onContentLoaded.call(_this4);
                            };
                            img.onerror = function () {
                                _this4._toggleLoading(false);
                                return _this4._error(_this4._config.strings.fail + ('  ' + src));
                            };
                        })();
                    }

                    img.src = src;
                    return img;
                }
            }, {
                key: '_swipeGesure',
                value: function _swipeGesure() {
                    if (this._touchendX < this._touchstartX) {
                        return this.navigateRight();
                    }
                    if (this._touchendX > this._touchstartX) {
                        return this.navigateLeft();
                    }
                }
            }, {
                key: '_resize',
                value: function _resize(width, height) {

                    height = height || width;
                    this._wantedWidth = width;
                    this._wantedHeight = height;

                    var imageAspecRatio = width / height;

                    // if width > the available space, scale down the expected width and height
                    var widthBorderAndPadding = this._padding.left + this._padding.right + this._border.left + this._border.right;

                    // force 10px margin if window size > 575px
                    var addMargin = this._config.doc.body.clientWidth > 575 ? 20 : 0;
                    var discountMargin = this._config.doc.body.clientWidth > 575 ? 0 : 20;

                    var maxWidth = Math.min(width + widthBorderAndPadding, this._config.doc.body.clientWidth - addMargin, this._config.maxWidth);

                    if (width + widthBorderAndPadding > maxWidth) {
                        height = (maxWidth - widthBorderAndPadding - discountMargin) / imageAspecRatio;
                        width = maxWidth;
                    } else width = width + widthBorderAndPadding;

                    var headerHeight = 0,
                        footerHeight = 0;

                    // as the resize is performed the modal is show, the calculate might fail
                    // if so, default to the default sizes
                    if (this._footerIsShown) footerHeight = this._$modalFooter.outerHeight(true) || 55;

                    if (this._titleIsShown) headerHeight = this._$modalHeader.outerHeight(true) || 67;

                    var borderPadding = this._padding.top + this._padding.bottom + this._border.bottom + this._border.top;

                    //calculated each time as resizing the window can cause them to change due to Bootstraps fluid margins
                    var margins = parseFloat(this._$modalDialog.css('margin-top')) + parseFloat(this._$modalDialog.css('margin-bottom'));

                    var maxHeight = Math.min(height, $(window).height() - borderPadding - margins - headerHeight - footerHeight, this._config.maxHeight - borderPadding - headerHeight - footerHeight);

                    if (height > maxHeight) {
                        // if height > the available height, scale down the width
                        width = Math.ceil(maxHeight * imageAspecRatio) + widthBorderAndPadding;
                    }

                    this._$lightboxContainer.css('height', maxHeight);
                    this._$modalDialog.css('flex', 1).css('maxWidth', width);

                    var modal = this._$modal.data('bs.modal');
                    if (modal) {
                        // v4 method is mistakenly protected
                        try {
                            modal._handleUpdate();
                        } catch (Exception) {
                            modal.handleUpdate();
                        }
                    }
                    return this;
                }
            }], [{
                key: '_jQueryInterface',
                value: function _jQueryInterface(config) {
                    var _this5 = this;

                    config = config || {};
                    return this.each(function () {
                        var $this = $(_this5);
                        var _config = $.extend({}, Lightbox.Default, $this.data(), typeof config === 'object' && config);

                        new Lightbox(_this5, _config);
                    });
                }
            }]);

            return Lightbox;
        })();

        $.fn[NAME] = Lightbox._jQueryInterface;
        $.fn[NAME].Constructor = Lightbox;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return Lightbox._jQueryInterface;
        };

        return Lightbox;
    })(jQuery);
    //# sourceMappingURL=ekko-lightbox.js.map

}(jQuery);
/*!
 * Lightbox v2.8.2
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright 2007, 2015 Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 */
!function (a, b) { "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : a.lightbox = b(a.jQuery) }(this, function (a) { function b(b) { this.album = [], this.currentImageIndex = void 0, this.init(), this.options = a.extend({}, this.constructor.defaults), this.option(b) } return b.defaults = { albumLabel: "Image %1 of %2", alwaysShowNavOnTouchDevices: !1, fadeDuration: 500, fitImagesInViewport: !0, positionFromTop: 50, resizeDuration: 700, showImageNumberLabel: !0, wrapAround: !1, disableScrolling: !1 }, b.prototype.option = function (b) { a.extend(this.options, b) }, b.prototype.imageCountLabel = function (a, b) { return this.options.albumLabel.replace(/%1/g, a).replace(/%2/g, b) }, b.prototype.init = function () { this.enable(), this.build() }, b.prototype.enable = function () { var b = this; a("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function (c) { return b.start(a(c.currentTarget)), !1 }) }, b.prototype.build = function () { var b = this; a('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(a("body")), this.$lightbox = a("#lightbox"), this.$overlay = a("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox.find(".lb-container"), this.containerTopPadding = parseInt(this.$container.css("padding-top"), 10), this.containerRightPadding = parseInt(this.$container.css("padding-right"), 10), this.containerBottomPadding = parseInt(this.$container.css("padding-bottom"), 10), this.containerLeftPadding = parseInt(this.$container.css("padding-left"), 10), this.$overlay.hide().on("click", function () { return b.end(), !1 }), this.$lightbox.hide().on("click", function (c) { return "lightbox" === a(c.target).attr("id") && b.end(), !1 }), this.$outerContainer.on("click", function (c) { return "lightbox" === a(c.target).attr("id") && b.end(), !1 }), this.$lightbox.find(".lb-prev").on("click", function () { return 0 === b.currentImageIndex ? b.changeImage(b.album.length - 1) : b.changeImage(b.currentImageIndex - 1), !1 }), this.$lightbox.find(".lb-next").on("click", function () { return b.currentImageIndex === b.album.length - 1 ? b.changeImage(0) : b.changeImage(b.currentImageIndex + 1), !1 }), this.$lightbox.find(".lb-loader, .lb-close").on("click", function () { return b.end(), !1 }) }, b.prototype.start = function (b) { function c(a) { d.album.push({ link: a.attr("href"), title: a.attr("data-title") || a.attr("title") }) } var d = this, e = a(window); e.on("resize", a.proxy(this.sizeOverlay, this)), a("select, object, embed").css({ visibility: "hidden" }), this.sizeOverlay(), this.album = []; var f, g = 0, h = b.attr("data-lightbox"); if (h) { f = a(b.prop("tagName") + '[data-lightbox="' + h + '"]'); for (var i = 0; i < f.length; i = ++i)c(a(f[i])), f[i] === b[0] && (g = i) } else if ("lightbox" === b.attr("rel")) c(b); else { f = a(b.prop("tagName") + '[rel="' + b.attr("rel") + '"]'); for (var j = 0; j < f.length; j = ++j)c(a(f[j])), f[j] === b[0] && (g = j) } var k = e.scrollTop() + this.options.positionFromTop, l = e.scrollLeft(); this.$lightbox.css({ top: k + "px", left: l + "px" }).fadeIn(this.options.fadeDuration), this.options.disableScrolling && a("body").addClass("lb-disable-scrolling"), this.changeImage(g) }, b.prototype.changeImage = function (b) { var c = this; this.disableKeyboardNav(); var d = this.$lightbox.find(".lb-image"); this.$overlay.fadeIn(this.options.fadeDuration), a(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating"); var e = new Image; e.onload = function () { var f, g, h, i, j, k, l; d.attr("src", c.album[b].link), f = a(e), d.width(e.width), d.height(e.height), c.options.fitImagesInViewport && (l = a(window).width(), k = a(window).height(), j = l - c.containerLeftPadding - c.containerRightPadding - 20, i = k - c.containerTopPadding - c.containerBottomPadding - 120, c.options.maxWidth && c.options.maxWidth < j && (j = c.options.maxWidth), c.options.maxHeight && c.options.maxHeight < j && (i = c.options.maxHeight), (e.width > j || e.height > i) && (e.width / j > e.height / i ? (h = j, g = parseInt(e.height / (e.width / h), 10), d.width(h), d.height(g)) : (g = i, h = parseInt(e.width / (e.height / g), 10), d.width(h), d.height(g)))), c.sizeContainer(d.width(), d.height()) }, e.src = this.album[b].link, this.currentImageIndex = b }, b.prototype.sizeOverlay = function () { this.$overlay.width(a(document).width()).height(a(document).height()) }, b.prototype.sizeContainer = function (a, b) { function c() { d.$lightbox.find(".lb-dataContainer").width(g), d.$lightbox.find(".lb-prevLink").height(h), d.$lightbox.find(".lb-nextLink").height(h), d.showImage() } var d = this, e = this.$outerContainer.outerWidth(), f = this.$outerContainer.outerHeight(), g = a + this.containerLeftPadding + this.containerRightPadding, h = b + this.containerTopPadding + this.containerBottomPadding; e !== g || f !== h ? this.$outerContainer.animate({ width: g, height: h }, this.options.resizeDuration, "swing", function () { c() }) : c() }, b.prototype.showImage = function () { this.$lightbox.find(".lb-loader").stop(!0).hide(), this.$lightbox.find(".lb-image").fadeIn("slow"), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav() }, b.prototype.updateNav = function () { var a = !1; try { document.createEvent("TouchEvent"), a = this.options.alwaysShowNavOnTouchDevices ? !0 : !1 } catch (b) { } this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (a && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), a && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), a && this.$lightbox.find(".lb-next").css("opacity", "1")))) }, b.prototype.updateDetails = function () { var b = this; if ("undefined" != typeof this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title && this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click", function (b) { void 0 !== a(this).attr("target") ? window.open(a(this).attr("href"), a(this).attr("target")) : location.href = a(this).attr("href") }), this.album.length > 1 && this.options.showImageNumberLabel) { var c = this.imageCountLabel(this.currentImageIndex + 1, this.album.length); this.$lightbox.find(".lb-number").text(c).fadeIn("fast") } else this.$lightbox.find(".lb-number").hide(); this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function () { return b.sizeOverlay() }) }, b.prototype.preloadNeighboringImages = function () { if (this.album.length > this.currentImageIndex + 1) { var a = new Image; a.src = this.album[this.currentImageIndex + 1].link } if (this.currentImageIndex > 0) { var b = new Image; b.src = this.album[this.currentImageIndex - 1].link } }, b.prototype.enableKeyboardNav = function () { a(document).on("keyup.keyboard", a.proxy(this.keyboardAction, this)) }, b.prototype.disableKeyboardNav = function () { a(document).off(".keyboard") }, b.prototype.keyboardAction = function (a) { var b = 27, c = 37, d = 39, e = a.keyCode, f = String.fromCharCode(e).toLowerCase(); e === b || f.match(/x|o|c/) ? this.end() : "p" === f || e === c ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : ("n" === f || e === d) && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0)) }, b.prototype.end = function () { this.disableKeyboardNav(), a(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), a("select, object, embed").css({ visibility: "visible" }), this.options.disableScrolling && a("body").removeClass("lb-disable-scrolling") }, new b });
//# sourceMappingURL=lightbox.min.map
;(function ( $ ) {
    $.fn.printPreview = function( options ) {
        var elem = this;
        
        var opt = $.extend({
            obj2print:'body',
            style:'',
            width:'670',
            height:screen.height-105,
            top:0,
            left:'center',
            resizable : 'yes',
            scrollbars:'yes',
            status:'no',
            title:'Print Preview'
        }, options );
        if(opt.left == 'center'){
            opt.left=(screen.width/2)-(opt.width/2);
        }
        $(opt.obj2print+" input").each(function(){
            $(this).attr('value',$(this).val());
        });
        $(opt.obj2print+" textarea").each(function(){
            $(this).html($(this).val());
        });
        return elem.bind("click.printPreview", function () {
            var btnCode = elem[0].outerHTML;
            var headString = '';
            headString = $("head").html();
            var str = "<!DOCTYPE html><html><head>"+headString+opt.style+"</head><body>";
            str+=$(opt.obj2print)[0].outerHTML.replace(btnCode,'')+"</body></html>";
            //top open multiple instances we have to name newWindow differently, so getting milliseconds
            var d = new Date();
            var n = 'newWindow'+d.getMilliseconds();
            var newWindow = window.open(
                    "", 
                    n, 
                    "width="+opt.width+
                    ",top="+opt.top+
                    ",height="+opt.height+
                    ",left="+opt.left+
                    ",resizable="+opt.resizable+
                    ",scrollbars="+opt.scrollbars+
                    ",status="+opt.status
                    );
            newWindow.document.write(str);
            newWindow.document.title = opt.title;
        });
    };
}( jQuery ));
