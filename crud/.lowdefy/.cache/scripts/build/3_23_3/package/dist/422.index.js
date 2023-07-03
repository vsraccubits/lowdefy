exports.id=422,exports.ids=[422],exports.modules={3422:(e,t,r)=>{"use strict";r.r(t),r.d(t,{NIL:()=>U,parse:()=>v,stringify:()=>l,v1:()=>h,v3:()=>I,v4:()=>w,v5:()=>b,validate:()=>f,version:()=>A});var n=r(6417),s=r.n(n);const o=new Uint8Array(256);let i=o.length;function c(){return i>o.length-16&&(s().randomFillSync(o),i=0),o.slice(i,i+=16)}const a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,f=function(e){return"string"==typeof e&&a.test(e)},u=[];for(let e=0;e<256;++e)u.push((e+256).toString(16).substr(1));const l=function(e,t=0){const r=(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase();if(!f(r))throw TypeError("Stringified UUID is invalid");return r};let d,p,y=0,g=0;const h=function(e,t,r){let n=t&&r||0;const s=t||new Array(16);let o=(e=e||{}).node||d,i=void 0!==e.clockseq?e.clockseq:p;if(null==o||null==i){const t=e.random||(e.rng||c)();null==o&&(o=d=[1|t[0],t[1],t[2],t[3],t[4],t[5]]),null==i&&(i=p=16383&(t[6]<<8|t[7]))}let a=void 0!==e.msecs?e.msecs:Date.now(),f=void 0!==e.nsecs?e.nsecs:g+1;const u=a-y+(f-g)/1e4;if(u<0&&void 0===e.clockseq&&(i=i+1&16383),(u<0||a>y)&&void 0===e.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");y=a,g=f,p=i,a+=122192928e5;const h=(1e4*(268435455&a)+f)%4294967296;s[n++]=h>>>24&255,s[n++]=h>>>16&255,s[n++]=h>>>8&255,s[n++]=255&h;const v=a/4294967296*1e4&268435455;s[n++]=v>>>8&255,s[n++]=255&v,s[n++]=v>>>24&15|16,s[n++]=v>>>16&255,s[n++]=i>>>8|128,s[n++]=255&i;for(let e=0;e<6;++e)s[n+e]=o[e];return t||l(s)},v=function(e){if(!f(e))throw TypeError("Invalid UUID");let t;const r=new Uint8Array(16);return r[0]=(t=parseInt(e.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=255&t,r[4]=(t=parseInt(e.slice(9,13),16))>>>8,r[5]=255&t,r[6]=(t=parseInt(e.slice(14,18),16))>>>8,r[7]=255&t,r[8]=(t=parseInt(e.slice(19,23),16))>>>8,r[9]=255&t,r[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=255&t,r};function m(e,t,r){function n(e,n,s,o){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));const t=[];for(let r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t}(e)),"string"==typeof n&&(n=v(n)),16!==n.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let i=new Uint8Array(16+e.length);if(i.set(n),i.set(e,n.length),i=r(i),i[6]=15&i[6]|t,i[8]=63&i[8]|128,s){o=o||0;for(let e=0;e<16;++e)s[o+e]=i[e];return s}return l(i)}try{n.name=e}catch(e){}return n.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",n.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",n}const I=m("v3",48,(function(e){return Array.isArray(e)?e=Buffer.from(e):"string"==typeof e&&(e=Buffer.from(e,"utf8")),s().createHash("md5").update(e).digest()})),w=function(e,t,r){const n=(e=e||{}).random||(e.rng||c)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=n[e];return t}return l(n)},b=m("v5",80,(function(e){return Array.isArray(e)?e=Buffer.from(e):"string"==typeof e&&(e=Buffer.from(e,"utf8")),s().createHash("sha1").update(e).digest()})),U="00000000-0000-0000-0000-000000000000",A=function(e){if(!f(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}}};