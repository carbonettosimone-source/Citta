(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ec="170",ds={ROTATE:0,DOLLY:1,PAN:2},hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bu=0,zc=1,ku=2,nc=1,yh=2,Hn=3,mi=0,ke=1,fe=2,ui=0,Fi=1,$s=2,Bc=3,kc=4,Hu=5,Di=100,Gu=101,Vu=102,Wu=103,Xu=104,qu=200,Yu=201,$u=202,ju=203,sa=204,ra=205,Zu=206,Ku=207,Ju=208,Qu=209,tf=210,ef=211,nf=212,sf=213,rf=214,oa=0,aa=1,ca=2,xs=3,la=4,ha=5,ua=6,fa=7,ic=0,of=1,af=2,fi=0,cf=1,lf=2,hf=3,uf=4,ff=5,df=6,pf=7,Sh=300,_s=301,vs=302,da=303,pa=304,io=306,gi=1e3,Ui=1001,ma=1002,sn=1003,mf=1004,hr=1005,Mn=1006,po=1007,Ni=1008,jn=1009,bh=1010,Eh=1011,js=1012,sc=1013,zi=1014,Cn=1015,ir=1016,rc=1017,oc=1018,Ms=1020,wh=35902,Th=1021,Ah=1022,yn=1023,Rh=1024,Ch=1025,ps=1026,ys=1027,ac=1028,cc=1029,Ph=1030,lc=1031,hc=1033,Vr=33776,Wr=33777,Xr=33778,qr=33779,ga=35840,xa=35841,_a=35842,va=35843,Ma=36196,ya=37492,Sa=37496,ba=37808,Ea=37809,wa=37810,Ta=37811,Aa=37812,Ra=37813,Ca=37814,Pa=37815,La=37816,Da=37817,Ia=37818,Ua=37819,Na=37820,Oa=37821,Yr=36492,Fa=36494,za=36495,Lh=36283,Ba=36284,ka=36285,Ha=36286,gf=3200,xf=3201,Dh=0,_f=1,Xn="",ce="srgb",ws="srgb-linear",so="linear",oe="srgb",Xi=7680,Hc=519,vf=512,Mf=513,yf=514,Ih=515,Sf=516,bf=517,Ef=518,wf=519,Gc=35044,Vc="300 es",qn=2e3,Kr=2001;class Gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$r=Math.PI/180,Ga=180/Math.PI;function Ts(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function De(i,t,e){return Math.max(t,Math.min(e,i))}function Tf(i,t){return(i%t+t)%t}function mo(i,t,e){return(1-e)*i+e*t}function Is(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Af={DEG2RAD:$r};class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,s,r,o,a,c,l){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],M=s[4],x=s[7],b=s[2],y=s[5],T=s[8];return r[0]=o*_+a*v+c*b,r[3]=o*m+a*M+c*y,r[6]=o*p+a*x+c*T,r[1]=l*_+h*v+u*b,r[4]=l*m+h*M+u*y,r[7]=l*p+h*x+u*T,r[2]=f*_+d*v+g*b,r[5]=f*m+d*M+g*y,r[8]=f*p+d*x+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(go.makeScale(t,e)),this}rotate(t){return this.premultiply(go.makeRotation(-t)),this}translate(t,e){return this.premultiply(go.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const go=new Yt;function Uh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rf(){const i=Zs("canvas");return i.style.display="block",i}const Wc={};function ks(i){i in Wc||(Wc[i]=!0,console.warn(i))}function Cf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Pf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Lf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ee={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(i.r=Yn(i.r),i.g=Yn(i.g),i.b=Yn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(i.r=ms(i.r),i.g=ms(i.g),i.b=ms(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xn?so:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Xc=[.64,.33,.3,.6,.15,.06],qc=[.2126,.7152,.0722],Yc=[.3127,.329],$c=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jc=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[ws]:{primaries:Xc,whitePoint:Yc,transfer:so,toXYZ:$c,fromXYZ:jc,luminanceCoefficients:qc,workingColorSpaceConfig:{unpackColorSpace:ce},outputColorSpaceConfig:{drawingBufferColorSpace:ce}},[ce]:{primaries:Xc,whitePoint:Yc,transfer:oe,toXYZ:$c,fromXYZ:jc,luminanceCoefficients:qc,outputColorSpaceConfig:{drawingBufferColorSpace:ce}}});let qi;class Df{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qi===void 0&&(qi=Zs("canvas")),qi.width=t.width,qi.height=t.height;const n=qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let If=0;class Nh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Ts(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xo(s[o].image)):r.push(xo(s[o]))}else r=xo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function xo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Df.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uf=0;class Ue extends Gi{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=Ui,s=Ui,r=Mn,o=Ni,a=yn,c=jn,l=Ue.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Ts(),this.name="",this.source=new Nh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gi:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gi:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Sh;Ue.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,x=(d+1)/2,b=(p+1)/2,y=(h+f)/4,T=(u+_)/4,E=(g+m)/4;return M>x&&M>b?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=y/n,r=T/n):x>b?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=y/s,r=E/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=T/r,s=E/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nf extends Gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ue(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Nh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends Nf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Oh extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Of extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ye{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-a;const p=c*f+l*d+h*g+u*_,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const b=Math.sqrt(M),y=Math.atan2(b,p*v);m=Math.sin(m*y)/b,a=Math.sin(a*y)/b}const x=a*v;if(c=c*m+f*x,l=l*m+d*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _o.copy(this).projectOnVector(t),this.sub(_o)}reflect(t){return this.sub(_o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _o=new N,Zc=new ye;class Vi{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Us),fr.subVectors(this.max,Us),Yi.subVectors(t.a,Us),$i.subVectors(t.b,Us),ji.subVectors(t.c,Us),Qn.subVectors($i,Yi),ti.subVectors(ji,$i),yi.subVectors(Yi,ji);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-yi.z,yi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,yi.z,0,-yi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-yi.y,yi.x,0];return!vo(e,Yi,$i,ji,fr)||(e=[1,0,0,0,1,0,0,0,1],!vo(e,Yi,$i,ji,fr))?!1:(dr.crossVectors(Qn,ti),e=[dr.x,dr.y,dr.z],vo(e,Yi,$i,ji,fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Un=[new N,new N,new N,new N,new N,new N,new N,new N],pn=new N,ur=new Vi,Yi=new N,$i=new N,ji=new N,Qn=new N,ti=new N,yi=new N,Us=new N,fr=new N,dr=new N,Si=new N;function vo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Si.fromArray(i,r);const a=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),c=t.dot(Si),l=e.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Ff=new Vi,Ns=new N,Mo=new N;class As{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ff.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);const e=Ns.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ns,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(Mo)),this.expandByPoint(Ns.copy(t.center).sub(Mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new N,yo=new N,pr=new N,ei=new N,So=new N,mr=new N,bo=new N;class uc{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){yo.copy(t).add(e).multiplyScalar(.5),pr.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(yo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(pr),a=ei.dot(this.direction),c=-ei.dot(pr),l=ei.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yo).addScaledVector(pr,f),d}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){So.subVectors(e,t),mr.subVectors(n,t),bo.crossVectors(So,mr);let o=this.direction.dot(bo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,t);const c=a*this.direction.dot(mr.crossVectors(ei,mr));if(c<0)return null;const l=a*this.direction.dot(So.cross(ei));if(l<0||c+l>o)return null;const h=-a*ei.dot(bo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,g,_,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),o=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zf,t,Bf)}lookAt(t,e,n){const s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),ni.crossVectors(n,Ze),ni.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),ni.crossVectors(n,Ze)),ni.normalize(),gr.crossVectors(Ze,ni),s[0]=ni.x,s[4]=gr.x,s[8]=Ze.x,s[1]=ni.y,s[5]=gr.y,s[9]=Ze.y,s[2]=ni.z,s[6]=gr.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],M=n[7],x=n[11],b=n[15],y=s[0],T=s[4],E=s[8],w=s[12],S=s[1],A=s[5],F=s[9],U=s[13],B=s[2],D=s[6],I=s[10],z=s[14],O=s[3],q=s[7],$=s[11],k=s[15];return r[0]=o*y+a*S+c*B+l*O,r[4]=o*T+a*A+c*D+l*q,r[8]=o*E+a*F+c*I+l*$,r[12]=o*w+a*U+c*z+l*k,r[1]=h*y+u*S+f*B+d*O,r[5]=h*T+u*A+f*D+d*q,r[9]=h*E+u*F+f*I+d*$,r[13]=h*w+u*U+f*z+d*k,r[2]=g*y+_*S+m*B+p*O,r[6]=g*T+_*A+m*D+p*q,r[10]=g*E+_*F+m*I+p*$,r[14]=g*w+_*U+m*z+p*k,r[3]=v*y+M*S+x*B+b*O,r[7]=v*T+M*A+x*D+b*q,r[11]=v*E+M*F+x*I+b*$,r[15]=v*w+M*U+x*z+b*k,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=u*m*l-_*f*l+_*c*d-a*m*d-u*c*p+a*f*p,M=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,x=h*_*l-g*u*l+g*a*d-o*_*d-h*a*p+o*u*p,b=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,y=e*v+n*M+s*x+r*b;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/y;return t[0]=v*T,t[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*T,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*T,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*T,t[4]=M*T,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*T,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*T,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*T,t[8]=x*T,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*p-e*u*p)*T,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*T,t[12]=b*T,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*T,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*T,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,v=c*l,M=c*h,x=c*u,b=n.x,y=n.y,T=n.z;return s[0]=(1-(_+p))*b,s[1]=(d+x)*b,s[2]=(g-M)*b,s[3]=0,s[4]=(d-x)*y,s[5]=(1-(f+p))*y,s[6]=(m+v)*y,s[7]=0,s[8]=(g+M)*T,s[9]=(m-v)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Zi.set(s[0],s[1],s[2]).length();const o=Zi.set(s[4],s[5],s[6]).length(),a=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],mn.copy(this);const l=1/r,h=1/o,u=1/a;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,e.setFromRotationMatrix(mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=qn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===qn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Kr)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=qn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,d=(n+s)*h;let g,_;if(a===qn)g=(o+r)*u,_=-2*u;else if(a===Kr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zi=new N,mn=new Jt,zf=new N(0,0,0),Bf=new N(1,1,1),ni=new N,gr=new N,Ze=new N,Kc=new Jt,Jc=new ye;class Sn{constructor(t=0,e=0,n=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(De(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class Fh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kf=0;const Qc=new N,Ki=new ye,On=new Jt,xr=new N,Os=new N,Hf=new N,Gf=new ye,tl=new N(1,0,0),el=new N(0,1,0),nl=new N(0,0,1),il={type:"added"},Vf={type:"removed"},Ji={type:"childadded",child:null},Eo={type:"childremoved",child:null};class Re extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new N,e=new Sn,n=new ye,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Yt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(tl,t)}rotateY(t){return this.rotateOnAxis(el,t)}rotateZ(t){return this.rotateOnAxis(nl,t)}translateOnAxis(t,e){return Qc.copy(t).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tl,t)}translateY(t){return this.translateOnAxis(el,t)}translateZ(t){return this.translateOnAxis(nl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xr.copy(t):xr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Os,xr,this.up):On.lookAt(xr,Os,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(On),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(il),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vf),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(il),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,Hf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Gf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Re.DEFAULT_UP=new N(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new N,Fn=new N,wo=new N,zn=new N,Qi=new N,ts=new N,sl=new N,To=new N,Ao=new N,Ro=new N,Co=new ge,Po=new ge,Lo=new ge;class vn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),Fn.subVectors(n,e),wo.subVectors(t,e);const o=gn.dot(gn),a=gn.dot(Fn),c=gn.dot(wo),l=Fn.dot(Fn),h=Fn.dot(wo),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zn.x),c.addScaledVector(o,zn.y),c.addScaledVector(a,zn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Co.setScalar(0),Po.setScalar(0),Lo.setScalar(0),Co.fromBufferAttribute(t,e),Po.fromBufferAttribute(t,n),Lo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Co,r.x),o.addScaledVector(Po,r.y),o.addScaledVector(Lo,r.z),o}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Fn.subVectors(t,e),gn.cross(Fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),gn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return vn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Qi.subVectors(s,n),ts.subVectors(r,n),To.subVectors(t,n);const c=Qi.dot(To),l=ts.dot(To);if(c<=0&&l<=0)return e.copy(n);Ao.subVectors(t,s);const h=Qi.dot(Ao),u=ts.dot(Ao);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Qi,o);Ro.subVectors(t,r);const d=Qi.dot(Ro),g=ts.dot(Ro);if(g>=0&&d<=g)return e.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ts,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return sl.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(sl,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(Qi,o).addScaledVector(ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Do(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Tf(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Do(o,r,t+1/3),this.g=Do(o,r,t),this.b=Do(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ce){const n=zh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ce){return ee.fromWorkingColorSpace(Fe.copy(this),t),Math.round(De(Fe.r*255,0,255))*65536+Math.round(De(Fe.g*255,0,255))*256+Math.round(De(Fe.b*255,0,255))}getHexString(t=ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Fe.copy(this),e);const n=Fe.r,s=Fe.g,r=Fe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=ce){ee.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,s=Fe.b;return t!==ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(_r);const n=mo(ii.h,_r.h,e),s=mo(ii.s,_r.s,e),r=mo(ii.l,_r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Ot;Ot.NAMES=zh;let Wf=0;class Rs extends Gi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Ts(),this.name="",this.blending=Fi,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sa,this.blendDst=ra,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sa&&(n.blendSrc=this.blendSrc),this.blendDst!==ra&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sr extends Rs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new N,vr=new pt;class ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gc,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Is(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Is(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Is(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gc&&(t.usage=this.usage),t}}class Bh extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class kh extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ht extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xf=0;const an=new Jt,Io=new Re,es=new N,Ke=new Vi,Fs=new Vi,Le=new N;class Qt extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uh(t)?kh:Bh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return Io.lookAt(t),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ht(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(Ke.min,Fs.min),Ke.expandByPoint(Le),Le.addVectors(Ke.max,Fs.max),Ke.expandByPoint(Le)):(Ke.expandByPoint(Fs.min),Ke.expandByPoint(Fs.max))}Ke.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Le.fromBufferAttribute(a,l),c&&(es.fromBufferAttribute(t,l),Le.add(es)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let E=0;E<n.count;E++)a[E]=new N,c[E]=new N;const l=new N,h=new N,u=new N,f=new pt,d=new pt,g=new pt,_=new N,m=new N;function p(E,w,S){l.fromBufferAttribute(n,E),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,E),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const A=1/(d.x*g.y-g.x*d.y);isFinite(A)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(A),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(A),a[E].add(_),a[w].add(_),a[S].add(_),c[E].add(m),c[w].add(m),c[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let E=0,w=v.length;E<w;++E){const S=v[E],A=S.start,F=S.count;for(let U=A,B=A+F;U<B;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const M=new N,x=new N,b=new N,y=new N;function T(E){b.fromBufferAttribute(s,E),y.copy(b);const w=a[E];M.copy(w),M.sub(b.multiplyScalar(b.dot(w))).normalize(),x.crossVectors(y,w);const A=x.dot(c[E])<0?-1:1;o.setXYZW(E,M.x,M.y,M.z,A)}for(let E=0,w=v.length;E<w;++E){const S=v[E],A=S.start,F=S.count;for(let U=A,B=A+F;U<B;U+=3)T(t.getX(U+0)),T(t.getX(U+1)),T(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new ve(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rl=new Jt,bi=new uc,Mr=new As,ol=new N,yr=new N,Sr=new N,br=new N,Uo=new N,Er=new N,al=new N,wr=new N;class Kt extends Re{constructor(t=new Qt,e=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Er.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Uo.fromBufferAttribute(u,t),o?Er.addScaledVector(Uo,h):Er.addScaledVector(Uo.sub(e),h))}e.add(Er)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),bi.copy(t.ray).recast(t.near),!(Mr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Mr,ol)===null||bi.origin.distanceToSquared(ol)>(t.far-t.near)**2))&&(rl.copy(r).invert(),bi.copy(t.ray).applyMatrix4(rl),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,b=M;x<b;x+=3){const y=a.getX(x),T=a.getX(x+1),E=a.getX(x+2);s=Tr(this,p,t,n,l,h,u,y,T,E),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=Tr(this,o,t,n,l,h,u,v,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,b=M;x<b;x+=3){const y=x,T=x+1,E=x+2;s=Tr(this,p,t,n,l,h,u,y,T,E),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=m,M=m+1,x=m+2;s=Tr(this,o,t,n,l,h,u,v,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function qf(i,t,e,n,s,r,o,a){let c;if(t.side===ke?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===mi,a),c===null)return null;wr.copy(a),wr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(wr);return l<e.near||l>e.far?null:{distance:l,point:wr.clone(),object:i}}function Tr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,yr),i.getVertexPosition(c,Sr),i.getVertexPosition(l,br);const h=qf(i,t,e,n,yr,Sr,br,al);if(h){const u=new N;vn.getBarycoord(al,yr,Sr,br,u),s&&(h.uv=vn.getInterpolatedAttribute(s,a,c,l,u,new pt)),r&&(h.uv1=vn.getInterpolatedAttribute(r,a,c,l,u,new pt)),o&&(h.normal=vn.getInterpolatedAttribute(o,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new N,materialIndex:0};vn.getNormal(yr,Sr,br,f.normal),h.face=f,h.barycoord=u}return h}class Nt extends Qt{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(u,2));function g(_,m,p,v,M,x,b,y,T,E,w){const S=x/T,A=b/E,F=x/2,U=b/2,B=y/2,D=T+1,I=E+1;let z=0,O=0;const q=new N;for(let $=0;$<I;$++){const k=$*A-U;for(let rt=0;rt<D;rt++){const dt=rt*S-F;q[_]=dt*v,q[m]=k*M,q[p]=B,l.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[p]=y>0?1:-1,h.push(q.x,q.y,q.z),u.push(rt/T),u.push(1-$/E),z+=1}}for(let $=0;$<E;$++)for(let k=0;k<T;k++){const rt=f+k+D*$,dt=f+k+D*($+1),G=f+(k+1)+D*($+1),Z=f+(k+1)+D*$;c.push(rt,dt,Z),c.push(dt,G,Z),O+=6}a.addGroup(d,O,w),d+=O,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ss(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Be(i){const t={};for(let e=0;e<i.length;e++){const n=Ss(i[e]);for(const s in n)t[s]=n[s]}return t}function Yf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Gh={clone:Ss,merge:Be};var $f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Rs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$f,this.fragmentShader=jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=Yf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Vh extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new N,cl=new pt,ll=new pt;class nn extends Vh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ga*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ga*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,cl,ll),e.subVectors(ll,cl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($r*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ns=-90,is=1;class Zf extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(ns,is,t,e);s.layers=this.layers,this.add(s);const r=new nn(ns,is,t,e);r.layers=this.layers,this.add(r);const o=new nn(ns,is,t,e);o.layers=this.layers,this.add(o);const a=new nn(ns,is,t,e);a.layers=this.layers,this.add(a);const c=new nn(ns,is,t,e);c.layers=this.layers,this.add(c);const l=new nn(ns,is,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Wh extends Ue{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:_s,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kf extends xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nt(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:ui});r.uniforms.tEquirect.value=e;const o=new Kt(s,r),a=e.minFilter;return e.minFilter===Ni&&(e.minFilter=Mn),new Zf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const No=new N,Jf=new N,Qf=new Yt;class ai{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=No.subVectors(n,e).cross(Jf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(No),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Qf.getNormalMatrix(t),s=this.coplanarPoint(No).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new As,Ar=new N;class fc{constructor(t=new ai,e=new ai,n=new ai,s=new ai,r=new ai,o=new ai){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],v=s[13],M=s[14],x=s[15];if(n[0].setComponents(c-r,f-l,m-d,x-p).normalize(),n[1].setComponents(c+r,f+l,m+d,x+p).normalize(),n[2].setComponents(c+o,f+h,m+g,x+v).normalize(),n[3].setComponents(c-o,f-h,m-g,x-v).normalize(),n[4].setComponents(c-a,f-u,m-_,x-M).normalize(),e===qn)n[5].setComponents(c+a,f+u,m+_,x+M).normalize();else if(e===Kr)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ar.x=s.normal.x>0?t.max.x:t.min.x,Ar.y=s.normal.y>0?t.max.y:t.min.y,Ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function td(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class bn extends Qt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*f-o;for(let M=0;M<l;M++){const x=M*u-r;g.push(x,-v,0),_.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const M=v+l*p,x=v+l*(p+1),b=v+1+l*(p+1),y=v+1+l*p;d.push(M,x,y),d.push(x,b,y)}this.setIndex(d),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bn(t.width,t.height,t.widthSegments,t.heightSegments)}}var ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nd=`#ifdef USE_ALPHAHASH
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
#endif`,id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ad=`#ifdef USE_AOMAP
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
#endif`,cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ld=`#ifdef USE_BATCHING
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
#endif`,hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pd=`#ifdef USE_IRIDESCENCE
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
#endif`,md=`#ifdef USE_BUMPMAP
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
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ed=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,wd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Td=`vec3 transformedNormal = objectNormal;
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
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ld="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Id=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,Od=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
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
#endif`,zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gd=`#ifdef USE_GRADIENTMAP
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
}`,Vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qd=`uniform bool receiveShadow;
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
#endif`,Yd=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,$d=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Qd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tp=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,ep=`#if defined( RE_IndirectDiffuse )
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
#endif`,np=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ip=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hp=`#if defined( USE_POINTS_UV )
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
#endif`,up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`#ifdef USE_MORPHTARGETS
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
#endif`,xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bp=`#ifdef USE_NORMALMAP
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
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bp=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hp=`#ifdef USE_SKINNING
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
#endif`,Gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vp=`#ifdef USE_SKINNING
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
#endif`,Wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$p=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jp=`#ifdef USE_TRANSMISSION
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,em=`uniform sampler2D t2D;
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`#include <common>
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
}`,am=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cm=`#define DISTANCE
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
}`,lm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`uniform float scale;
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
}`,dm=`uniform vec3 diffuse;
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
}`,pm=`#include <common>
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#define LAMBERT
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
}`,xm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,_m=`#define MATCAP
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
}`,vm=`#define MATCAP
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
}`,Mm=`#define NORMAL
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
}`,ym=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sm=`#define PHONG
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
}`,bm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Em=`#define STANDARD
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
}`,wm=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Tm=`#define TOON
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
}`,Am=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Rm=`uniform float size;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Pm=`#include <common>
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
}`,Lm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Dm=`uniform float rotation;
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
}`,Im=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:ed,alphahash_pars_fragment:nd,alphamap_fragment:id,alphamap_pars_fragment:sd,alphatest_fragment:rd,alphatest_pars_fragment:od,aomap_fragment:ad,aomap_pars_fragment:cd,batching_pars_vertex:ld,batching_vertex:hd,begin_vertex:ud,beginnormal_vertex:fd,bsdfs:dd,iridescence_fragment:pd,bumpmap_pars_fragment:md,clipping_planes_fragment:gd,clipping_planes_pars_fragment:xd,clipping_planes_pars_vertex:_d,clipping_planes_vertex:vd,color_fragment:Md,color_pars_fragment:yd,color_pars_vertex:Sd,color_vertex:bd,common:Ed,cube_uv_reflection_fragment:wd,defaultnormal_vertex:Td,displacementmap_pars_vertex:Ad,displacementmap_vertex:Rd,emissivemap_fragment:Cd,emissivemap_pars_fragment:Pd,colorspace_fragment:Ld,colorspace_pars_fragment:Dd,envmap_fragment:Id,envmap_common_pars_fragment:Ud,envmap_pars_fragment:Nd,envmap_pars_vertex:Od,envmap_physical_pars_fragment:Yd,envmap_vertex:Fd,fog_vertex:zd,fog_pars_vertex:Bd,fog_fragment:kd,fog_pars_fragment:Hd,gradientmap_pars_fragment:Gd,lightmap_pars_fragment:Vd,lights_lambert_fragment:Wd,lights_lambert_pars_fragment:Xd,lights_pars_begin:qd,lights_toon_fragment:$d,lights_toon_pars_fragment:jd,lights_phong_fragment:Zd,lights_phong_pars_fragment:Kd,lights_physical_fragment:Jd,lights_physical_pars_fragment:Qd,lights_fragment_begin:tp,lights_fragment_maps:ep,lights_fragment_end:np,logdepthbuf_fragment:ip,logdepthbuf_pars_fragment:sp,logdepthbuf_pars_vertex:rp,logdepthbuf_vertex:op,map_fragment:ap,map_pars_fragment:cp,map_particle_fragment:lp,map_particle_pars_fragment:hp,metalnessmap_fragment:up,metalnessmap_pars_fragment:fp,morphinstance_vertex:dp,morphcolor_vertex:pp,morphnormal_vertex:mp,morphtarget_pars_vertex:gp,morphtarget_vertex:xp,normal_fragment_begin:_p,normal_fragment_maps:vp,normal_pars_fragment:Mp,normal_pars_vertex:yp,normal_vertex:Sp,normalmap_pars_fragment:bp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:wp,clearcoat_pars_fragment:Tp,iridescence_pars_fragment:Ap,opaque_fragment:Rp,packing:Cp,premultiplied_alpha_fragment:Pp,project_vertex:Lp,dithering_fragment:Dp,dithering_pars_fragment:Ip,roughnessmap_fragment:Up,roughnessmap_pars_fragment:Np,shadowmap_pars_fragment:Op,shadowmap_pars_vertex:Fp,shadowmap_vertex:zp,shadowmask_pars_fragment:Bp,skinbase_vertex:kp,skinning_pars_vertex:Hp,skinning_vertex:Gp,skinnormal_vertex:Vp,specularmap_fragment:Wp,specularmap_pars_fragment:Xp,tonemapping_fragment:qp,tonemapping_pars_fragment:Yp,transmission_fragment:$p,transmission_pars_fragment:jp,uv_pars_fragment:Zp,uv_pars_vertex:Kp,uv_vertex:Jp,worldpos_vertex:Qp,background_vert:tm,background_frag:em,backgroundCube_vert:nm,backgroundCube_frag:im,cube_vert:sm,cube_frag:rm,depth_vert:om,depth_frag:am,distanceRGBA_vert:cm,distanceRGBA_frag:lm,equirect_vert:hm,equirect_frag:um,linedashed_vert:fm,linedashed_frag:dm,meshbasic_vert:pm,meshbasic_frag:mm,meshlambert_vert:gm,meshlambert_frag:xm,meshmatcap_vert:_m,meshmatcap_frag:vm,meshnormal_vert:Mm,meshnormal_frag:ym,meshphong_vert:Sm,meshphong_frag:bm,meshphysical_vert:Em,meshphysical_frag:wm,meshtoon_vert:Tm,meshtoon_frag:Am,points_vert:Rm,points_frag:Cm,shadow_vert:Pm,shadow_frag:Lm,sprite_vert:Dm,sprite_frag:Im},yt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},An={basic:{uniforms:Be([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Be([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Be([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Be([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Be([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Be([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Be([yt.points,yt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Be([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Be([yt.common,yt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Be([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Be([yt.sprite,yt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Be([yt.common,yt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Be([yt.lights,yt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};An.physical={uniforms:Be([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Rr={r:0,b:0,g:0},wi=new Sn,Um=new Jt;function Nm(i,t,e,n,s,r,o){const a=new Ot(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function _(v){let M=!1;const x=g(v);x===null?p(a,c):x&&x.isColor&&(p(x,1),M=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,M){const x=g(M);x&&(x.isCubeTexture||x.mapping===io)?(h===void 0&&(h=new Kt(new Nt(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Ss(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),wi.copy(M.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Um.makeRotationFromEuler(wi)),h.material.toneMapped=ee.getTransfer(x.colorSpace)!==oe,(u!==x||f!==x.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Kt(new bn(2,2),new un({name:"BackgroundMaterial",uniforms:Ss(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ee.getTransfer(x.colorSpace)!==oe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,M){v.getRGB(Rr,Hh(i)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:m}}function Om(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(S,A,F,U,B){let D=!1;const I=u(U,F,A);r!==I&&(r=I,l(r.object)),D=d(S,U,F,B),D&&g(S,U,F,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,x(S,A,F,U),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,A,F){const U=F.wireframe===!0;let B=n[S.id];B===void 0&&(B={},n[S.id]=B);let D=B[A.id];D===void 0&&(D={},B[A.id]=D);let I=D[U];return I===void 0&&(I=f(c()),D[U]=I),I}function f(S){const A=[],F=[],U=[];for(let B=0;B<e;B++)A[B]=0,F[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:F,attributeDivisors:U,object:S,attributes:{},index:null}}function d(S,A,F,U){const B=r.attributes,D=A.attributes;let I=0;const z=F.getAttributes();for(const O in z)if(z[O].location>=0){const $=B[O];let k=D[O];if(k===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(k=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(k=S.instanceColor)),$===void 0||$.attribute!==k||k&&$.data!==k.data)return!0;I++}return r.attributesNum!==I||r.index!==U}function g(S,A,F,U){const B={},D=A.attributes;let I=0;const z=F.getAttributes();for(const O in z)if(z[O].location>=0){let $=D[O];$===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&($=S.instanceColor));const k={};k.attribute=$,$&&$.data&&(k.data=$.data),B[O]=k,I++}r.attributes=B,r.attributesNum=I,r.index=U}function _(){const S=r.newAttributes;for(let A=0,F=S.length;A<F;A++)S[A]=0}function m(S){p(S,0)}function p(S,A){const F=r.newAttributes,U=r.enabledAttributes,B=r.attributeDivisors;F[S]=1,U[S]===0&&(i.enableVertexAttribArray(S),U[S]=1),B[S]!==A&&(i.vertexAttribDivisor(S,A),B[S]=A)}function v(){const S=r.newAttributes,A=r.enabledAttributes;for(let F=0,U=A.length;F<U;F++)A[F]!==S[F]&&(i.disableVertexAttribArray(F),A[F]=0)}function M(S,A,F,U,B,D,I){I===!0?i.vertexAttribIPointer(S,A,F,B,D):i.vertexAttribPointer(S,A,F,U,B,D)}function x(S,A,F,U){_();const B=U.attributes,D=F.getAttributes(),I=A.defaultAttributeValues;for(const z in D){const O=D[z];if(O.location>=0){let q=B[z];if(q===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){const $=q.normalized,k=q.itemSize,rt=t.get(q);if(rt===void 0)continue;const dt=rt.buffer,G=rt.type,Z=rt.bytesPerElement,ht=G===i.INT||G===i.UNSIGNED_INT||q.gpuType===sc;if(q.isInterleavedBufferAttribute){const it=q.data,mt=it.stride,Rt=q.offset;if(it.isInstancedInterleavedBuffer){for(let xt=0;xt<O.locationSize;xt++)p(O.location+xt,it.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let xt=0;xt<O.locationSize;xt++)m(O.location+xt);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let xt=0;xt<O.locationSize;xt++)M(O.location+xt,k/O.locationSize,G,$,mt*Z,(Rt+k/O.locationSize*xt)*Z,ht)}else{if(q.isInstancedBufferAttribute){for(let it=0;it<O.locationSize;it++)p(O.location+it,q.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let it=0;it<O.locationSize;it++)m(O.location+it);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let it=0;it<O.locationSize;it++)M(O.location+it,k/O.locationSize,G,$,k*Z,k/O.locationSize*it*Z,ht)}}else if(I!==void 0){const $=I[z];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(O.location,$);break;case 3:i.vertexAttrib3fv(O.location,$);break;case 4:i.vertexAttrib4fv(O.location,$);break;default:i.vertexAttrib1fv(O.location,$)}}}}v()}function b(){E();for(const S in n){const A=n[S];for(const F in A){const U=A[F];for(const B in U)h(U[B].object),delete U[B];delete A[F]}delete n[S]}}function y(S){if(n[S.id]===void 0)return;const A=n[S.id];for(const F in A){const U=A[F];for(const B in U)h(U[B].object),delete U[B];delete A[F]}delete n[S.id]}function T(S){for(const A in n){const F=n[A];if(F[S.id]===void 0)continue;const U=F[S.id];for(const B in U)h(U[B].object),delete U[B];delete F[S.id]}}function E(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:y,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Fm(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function zm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==yn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const E=T===ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==jn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Cn&&!E)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:b,maxSamples:y}}function Bm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ai,a=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const v=r?0:n,M=v*4;let x=p.clippingState||null;c.value=x,x=h(g,f,M,d);for(let b=0;b!==M;++b)x[b]=e[b];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=d;M!==_;++M,x+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function km(i){let t=new WeakMap;function e(o,a){return a===da?o.mapping=_s:a===pa&&(o.mapping=vs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===da||a===pa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Kf(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class rr extends Vh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const us=4,hl=[.125,.215,.35,.446,.526,.582],Ii=20,Oo=new rr,ul=new Ot;let Fo=null,zo=0,Bo=0,ko=!1;const Li=(1+Math.sqrt(5))/2,ss=1/Li,fl=[new N(-Li,ss,0),new N(Li,ss,0),new N(-ss,0,Li),new N(ss,0,Li),new N(0,Li,-ss),new N(0,Li,ss),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class dl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Fo=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fo,zo,Bo),this._renderer.xr.enabled=ko,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fo=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:ir,format:yn,colorSpace:ws,depthBuffer:!1},s=pl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hm(r)),this._blurMaterial=Gm(r,t,e)}return s}_compileMaterial(t){const e=new Kt(this._lodPlanes[0],t);this._renderer.compile(e,Oo)}_sceneToCubeUV(t,e,n,s){const a=new nn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ul),h.toneMapping=fi,h.autoClear=!1;const d=new sr({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new Kt(new Nt,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(ul),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;Cr(s,v*M,p>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===_s||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ml());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Cr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Oo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fl[(s-r-1)%fl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Kt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ii-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ii;m>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);const p=[];let v=0;for(let T=0;T<Ii;++T){const E=T/_,w=Math.exp(-E*E/2);p.push(w),T===0?v+=w:T<m&&(v+=2*w)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const x=this._sizeLods[s],b=3*x*(s>M-us?s-M+us:0),y=4*(this._cubeSize-x);Cr(e,b,y,3*x,2*x),c.setRenderTarget(e),c.render(u,Oo)}}function Hm(i){const t=[],e=[],n=[];let s=i;const r=i-us+1+hl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-us?c=hl[o-i+us-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),M=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let y=0;y<d;y++){const T=y%3*2/3-1,E=y>2?0:-1,w=[T,E,0,T+2/3,E,0,T+2/3,E+1,0,T,E,0,T+2/3,E+1,0,T,E+1,0];v.set(w,_*g*y),M.set(f,m*g*y);const S=[y,y,y,y,y,y];x.set(S,p*g*y)}const b=new Qt;b.setAttribute("position",new ve(v,_)),b.setAttribute("uv",new ve(M,m)),b.setAttribute("faceIndex",new ve(x,p)),t.push(b),s>us&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pl(i,t,e){const n=new xi(i,t,e);return n.texture.mapping=io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Gm(i,t,e){const n=new Float32Array(Ii),s=new N(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ml(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function gl(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function dc(){return`

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
	`}function Vm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===da||c===pa,h=c===_s||c===vs;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new dl(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new dl(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Wm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ks("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xm(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let M=0,x=v.length;M<x;M+=3){const b=v[M+0],y=v[M+1],T=v[M+2];f.push(b,y,y,T,T,b)}}else if(g!==void 0){const v=g.array;_=g.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const b=M+0,y=M+1,T=M+2;f.push(b,y,y,T,T,b)}}else return;const m=new(Uh(f)?kh:Bh)(f,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function qm(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*_[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ym(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $m(i,t,e){const n=new WeakMap,s=new ge;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let w=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let x=a.attributes.position.count*M,b=1;x>t.maxTextureSize&&(b=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const y=new Float32Array(x*b*4*u),T=new Oh(y,x,b,u);T.type=Cn,T.needsUpdate=!0;const E=M*4;for(let S=0;S<u;S++){const A=m[S],F=p[S],U=v[S],B=x*b*4*S;for(let D=0;D<A.count;D++){const I=D*E;d===!0&&(s.fromBufferAttribute(A,D),y[B+I+0]=s.x,y[B+I+1]=s.y,y[B+I+2]=s.z,y[B+I+3]=0),g===!0&&(s.fromBufferAttribute(F,D),y[B+I+4]=s.x,y[B+I+5]=s.y,y[B+I+6]=s.z,y[B+I+7]=0),_===!0&&(s.fromBufferAttribute(U,D),y[B+I+8]=s.x,y[B+I+9]=s.y,y[B+I+10]=s.z,y[B+I+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:T,size:new pt(x,b)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function jm(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class qh extends Ue{constructor(t,e,n,s,r,o,a,c,l,h=ps){if(h!==ps&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ps&&(n=zi),n===void 0&&h===ys&&(n=Ms),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:sn,this.minFilter=c!==void 0?c:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Yh=new Ue,xl=new qh(1,1),$h=new Oh,jh=new Of,Zh=new Wh,_l=[],vl=[],Ml=new Float32Array(16),yl=new Float32Array(9),Sl=new Float32Array(4);function Cs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=_l[s];if(r===void 0&&(r=new Float32Array(s),_l[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ro(i,t){let e=vl[t];e===void 0&&(e=new Int32Array(t),vl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function t0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Sl.set(n),i.uniformMatrix2fv(this.addr,!1,Sl),Pe(e,n)}}function e0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;yl.set(n),i.uniformMatrix3fv(this.addr,!1,yl),Pe(e,n)}}function n0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Ml.set(n),i.uniformMatrix4fv(this.addr,!1,Ml),Pe(e,n)}}function i0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function a0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function u0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xl.compareFunction=Ih,r=xl):r=Yh,e.setTexture2D(t||r,s)}function f0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||jh,s)}function d0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zh,s)}function p0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$h,s)}function m0(i){switch(i){case 5126:return Zm;case 35664:return Km;case 35665:return Jm;case 35666:return Qm;case 35674:return t0;case 35675:return e0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return o0;case 5125:return a0;case 36294:return c0;case 36295:return l0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return f0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return p0}}function g0(i,t){i.uniform1fv(this.addr,t)}function x0(i,t){const e=Cs(t,this.size,2);i.uniform2fv(this.addr,e)}function _0(i,t){const e=Cs(t,this.size,3);i.uniform3fv(this.addr,e)}function v0(i,t){const e=Cs(t,this.size,4);i.uniform4fv(this.addr,e)}function M0(i,t){const e=Cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function y0(i,t){const e=Cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function S0(i,t){const e=Cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function b0(i,t){i.uniform1iv(this.addr,t)}function E0(i,t){i.uniform2iv(this.addr,t)}function w0(i,t){i.uniform3iv(this.addr,t)}function T0(i,t){i.uniform4iv(this.addr,t)}function A0(i,t){i.uniform1uiv(this.addr,t)}function R0(i,t){i.uniform2uiv(this.addr,t)}function C0(i,t){i.uniform3uiv(this.addr,t)}function P0(i,t){i.uniform4uiv(this.addr,t)}function L0(i,t,e){const n=this.cache,s=t.length,r=ro(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Yh,r[o])}function D0(i,t,e){const n=this.cache,s=t.length,r=ro(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||jh,r[o])}function I0(i,t,e){const n=this.cache,s=t.length,r=ro(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Zh,r[o])}function U0(i,t,e){const n=this.cache,s=t.length,r=ro(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||$h,r[o])}function N0(i){switch(i){case 5126:return g0;case 35664:return x0;case 35665:return _0;case 35666:return v0;case 35674:return M0;case 35675:return y0;case 35676:return S0;case 5124:case 35670:return b0;case 35667:case 35671:return E0;case 35668:case 35672:return w0;case 35669:case 35673:return T0;case 5125:return A0;case 36294:return R0;case 36295:return C0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return I0;case 36289:case 36303:case 36311:case 36292:return U0}}class O0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=m0(e.type)}}class F0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=N0(e.type)}}class z0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ho=/(\w+)(\])?(\[|\.)?/g;function bl(i,t){i.seq.push(t),i.map[t.id]=t}function B0(i,t,e){const n=i.name,s=n.length;for(Ho.lastIndex=0;;){const r=Ho.exec(n),o=Ho.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){bl(e,l===void 0?new O0(a,i,t):new F0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new z0(a),bl(e,u)),e=u}}}class jr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);B0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function El(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const k0=37297;let H0=0;function G0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const wl=new Yt;function V0(i){ee._getMatrix(wl,ee.workingColorSpace,i);const t=`mat3( ${wl.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case so:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Tl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+G0(i.getShaderSource(t),o)}else return s}function W0(i,t){const e=V0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function X0(i,t){let e;switch(t){case cf:e="Linear";break;case lf:e="Reinhard";break;case hf:e="Cineon";break;case uf:e="ACESFilmic";break;case df:e="AgX";break;case pf:e="Neutral";break;case ff:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Pr=new N;function q0(){ee.getLuminanceCoefficients(Pr);const i=Pr.x.toFixed(4),t=Pr.y.toFixed(4),e=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function $0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function j0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Hs(i){return i!==""}function Al(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(i){return i.replace(Z0,J0)}const K0=new Map;function J0(i,t){let e=jt[t];if(e===void 0){const n=K0.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Va(e)}const Q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cl(i){return i.replace(Q0,tg)}function tg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function eg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===yh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function ng(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case vs:t="ENVMAP_TYPE_CUBE";break;case io:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ig(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function sg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ic:t="ENVMAP_BLENDING_MULTIPLY";break;case of:t="ENVMAP_BLENDING_MIX";break;case af:t="ENVMAP_BLENDING_ADD";break}return t}function rg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function og(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=eg(e),l=ng(e),h=ig(e),u=sg(e),f=rg(e),d=Y0(e),g=$0(r),_=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),p.length>0&&(p+=`
`)):(m=[Pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),p=[Pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?jt.tonemapping_pars_fragment:"",e.toneMapping!==fi?X0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,W0("linearToOutputTexel",e.outputColorSpace),q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),o=Va(o),o=Al(o,e),o=Rl(o,e),a=Va(a),a=Al(a,e),a=Rl(a,e),o=Cl(o),a=Cl(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+m+o,x=v+p+a,b=El(s,s.VERTEX_SHADER,M),y=El(s,s.FRAGMENT_SHADER,x);s.attachShader(_,b),s.attachShader(_,y),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(A){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(b).trim(),B=s.getShaderInfoLog(y).trim();let D=!0,I=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,y);else{const z=Tl(s,b,"vertex"),O=Tl(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+F+`
`+z+`
`+O)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||B==="")&&(I=!1);I&&(A.diagnostics={runnable:D,programLog:F,vertexShader:{log:U,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(b),s.deleteShader(y),E=new jr(s,_),w=j0(s,_)}let E;this.getUniforms=function(){return E===void 0&&T(this),E};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,k0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=H0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=y,this}let ag=0;class cg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new lg(t),e.set(t,n)),n}}class lg{constructor(t){this.id=ag++,this.code=t,this.usedTimes=0}}function hg(i,t,e,n,s,r,o){const a=new Fh,c=new cg,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,S,A,F,U){const B=F.fog,D=U.geometry,I=w.isMeshStandardMaterial?F.environment:null,z=(w.isMeshStandardMaterial?e:t).get(w.envMap||I),O=z&&z.mapping===io?z.image.height:null,q=g[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const $=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,k=$!==void 0?$.length:0;let rt=0;D.morphAttributes.position!==void 0&&(rt=1),D.morphAttributes.normal!==void 0&&(rt=2),D.morphAttributes.color!==void 0&&(rt=3);let dt,G,Z,ht;if(q){const re=An[q];dt=re.vertexShader,G=re.fragmentShader}else dt=w.vertexShader,G=w.fragmentShader,c.update(w),Z=c.getVertexShaderID(w),ht=c.getFragmentShaderID(w);const it=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),Rt=U.isInstancedMesh===!0,xt=U.isBatchedMesh===!0,at=!!w.map,V=!!w.matcap,j=!!z,L=!!w.aoMap,ot=!!w.lightMap,Q=!!w.bumpMap,ct=!!w.normalMap,st=!!w.displacementMap,Mt=!!w.emissiveMap,ft=!!w.metalnessMap,P=!!w.roughnessMap,R=w.anisotropy>0,Y=w.clearcoat>0,tt=w.dispersion>0,lt=w.iridescence>0,nt=w.sheen>0,At=w.transmission>0,vt=R&&!!w.anisotropyMap,bt=Y&&!!w.clearcoatMap,Vt=Y&&!!w.clearcoatNormalMap,gt=Y&&!!w.clearcoatRoughnessMap,Ct=lt&&!!w.iridescenceMap,zt=lt&&!!w.iridescenceThicknessMap,Gt=nt&&!!w.sheenColorMap,Pt=nt&&!!w.sheenRoughnessMap,te=!!w.specularMap,$t=!!w.specularColorMap,he=!!w.specularIntensityMap,H=At&&!!w.transmissionMap,St=At&&!!w.thicknessMap,et=!!w.gradientMap,ut=!!w.alphaMap,Tt=w.alphaTest>0,Et=!!w.alphaHash,Xt=!!w.extensions;let Me=fi;w.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Me=i.toneMapping);const Ne={shaderID:q,shaderType:w.type,shaderName:w.name,vertexShader:dt,fragmentShader:G,defines:w.defines,customVertexShaderID:Z,customFragmentShaderID:ht,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:xt,batchingColor:xt&&U._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&U.instanceColor!==null,instancingMorph:Rt&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ws,alphaToCoverage:!!w.alphaToCoverage,map:at,matcap:V,envMap:j,envMapMode:j&&z.mapping,envMapCubeUVHeight:O,aoMap:L,lightMap:ot,bumpMap:Q,normalMap:ct,displacementMap:f&&st,emissiveMap:Mt,normalMapObjectSpace:ct&&w.normalMapType===_f,normalMapTangentSpace:ct&&w.normalMapType===Dh,metalnessMap:ft,roughnessMap:P,anisotropy:R,anisotropyMap:vt,clearcoat:Y,clearcoatMap:bt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:gt,dispersion:tt,iridescence:lt,iridescenceMap:Ct,iridescenceThicknessMap:zt,sheen:nt,sheenColorMap:Gt,sheenRoughnessMap:Pt,specularMap:te,specularColorMap:$t,specularIntensityMap:he,transmission:At,transmissionMap:H,thicknessMap:St,gradientMap:et,opaque:w.transparent===!1&&w.blending===Fi&&w.alphaToCoverage===!1,alphaMap:ut,alphaTest:Tt,alphaHash:Et,combine:w.combine,mapUv:at&&_(w.map.channel),aoMapUv:L&&_(w.aoMap.channel),lightMapUv:ot&&_(w.lightMap.channel),bumpMapUv:Q&&_(w.bumpMap.channel),normalMapUv:ct&&_(w.normalMap.channel),displacementMapUv:st&&_(w.displacementMap.channel),emissiveMapUv:Mt&&_(w.emissiveMap.channel),metalnessMapUv:ft&&_(w.metalnessMap.channel),roughnessMapUv:P&&_(w.roughnessMap.channel),anisotropyMapUv:vt&&_(w.anisotropyMap.channel),clearcoatMapUv:bt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&_(w.sheenRoughnessMap.channel),specularMapUv:te&&_(w.specularMap.channel),specularColorMapUv:$t&&_(w.specularColorMap.channel),specularIntensityMapUv:he&&_(w.specularIntensityMap.channel),transmissionMapUv:H&&_(w.transmissionMap.channel),thicknessMapUv:St&&_(w.thicknessMap.channel),alphaMapUv:ut&&_(w.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ct||R),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(at||ut),fog:!!B,useFog:w.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:mt,skinning:U.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:rt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:at&&w.map.isVideoTexture===!0&&ee.getTransfer(w.map.colorSpace)===oe,decodeVideoTextureEmissive:Mt&&w.emissiveMap.isVideoTexture===!0&&ee.getTransfer(w.emissiveMap.colorSpace)===oe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===fe,flipSided:w.side===ke,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Xt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&w.extensions.multiDraw===!0||xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const A in w.defines)S.push(A),S.push(w.defines[A]);return w.isRawShaderMaterial===!1&&(v(S,w),M(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function v(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function M(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const S=g[w.type];let A;if(S){const F=An[S];A=Gh.clone(F.uniforms)}else A=w.uniforms;return A}function b(w,S){let A;for(let F=0,U=h.length;F<U;F++){const B=h[F];if(B.cacheKey===S){A=B,++A.usedTimes;break}}return A===void 0&&(A=new og(i,S,w,r),h.push(A)),A}function y(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function T(w){c.remove(w)}function E(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:y,releaseShaderCache:T,programs:h,dispose:E}}function ug(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function fg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ll(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Dl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||fg),n.length>1&&n.sort(f||Ll),s.length>1&&s.sort(f||Ll)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function dg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Dl,i.set(n,[o])):s>=r.length?(o=new Dl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function pg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Ot};break;case"SpotLight":e={position:new N,direction:new N,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function mg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let gg=0;function xg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _g(i){const t=new pg,e=mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new Jt,o=new Jt;function a(l){let h=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,M=0,x=0,b=0,y=0,T=0;l.sort(xg);for(let w=0,S=l.length;w<S;w++){const A=l[w],F=A.color,U=A.intensity,B=A.distance,D=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=F.r*U,u+=F.g*U,f+=F.b*U;else if(A.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(A.sh.coefficients[I],U);T++}else if(A.isDirectionalLight){const I=t.get(A);if(I.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const z=A.shadow,O=e.get(A);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,n.directionalShadow[d]=O,n.directionalShadowMap[d]=D,n.directionalShadowMatrix[d]=A.shadow.matrix,v++}n.directional[d]=I,d++}else if(A.isSpotLight){const I=t.get(A);I.position.setFromMatrixPosition(A.matrixWorld),I.color.copy(F).multiplyScalar(U),I.distance=B,I.coneCos=Math.cos(A.angle),I.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),I.decay=A.decay,n.spot[_]=I;const z=A.shadow;if(A.map&&(n.spotLightMap[b]=A.map,b++,z.updateMatrices(A),A.castShadow&&y++),n.spotLightMatrix[_]=z.matrix,A.castShadow){const O=e.get(A);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,n.spotShadow[_]=O,n.spotShadowMap[_]=D,x++}_++}else if(A.isRectAreaLight){const I=t.get(A);I.color.copy(F).multiplyScalar(U),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=I,m++}else if(A.isPointLight){const I=t.get(A);if(I.color.copy(A.color).multiplyScalar(A.intensity),I.distance=A.distance,I.decay=A.decay,A.castShadow){const z=A.shadow,O=e.get(A);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,O.shadowCameraNear=z.camera.near,O.shadowCameraFar=z.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=A.shadow.matrix,M++}n.point[g]=I,g++}else if(A.isHemisphereLight){const I=t.get(A);I.skyColor.copy(A.color).multiplyScalar(U),I.groundColor.copy(A.groundColor).multiplyScalar(U),n.hemi[p]=I,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const E=n.hash;(E.directionalLength!==d||E.pointLength!==g||E.spotLength!==_||E.rectAreaLength!==m||E.hemiLength!==p||E.numDirectionalShadows!==v||E.numPointShadows!==M||E.numSpotShadows!==x||E.numSpotMaps!==b||E.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+b-y,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=T,E.directionalLength=d,E.pointLength=g,E.spotLength=_,E.rectAreaLength=m,E.hemiLength=p,E.numDirectionalShadows=v,E.numPointShadows=M,E.numSpotShadows=x,E.numSpotMaps=b,E.numLightProbes=T,n.version=gg++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const M=l[p];if(M.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(M.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Il(i){const t=new _g(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function vg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Il(i),t.set(s,[a])):r>=o.length?(a=new Il(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Mg extends Rs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yg extends Rs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Eg(i,t,e){let n=new fc;const s=new pt,r=new pt,o=new ge,a=new Mg({depthPacking:xf}),c=new yg,l={},h=e.maxTextureSize,u={[mi]:ke,[ke]:mi,[fe]:fe},f=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Sg,fragmentShader:bg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Qt;g.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Kt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let p=this.type;this.render=function(y,T,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const w=i.getRenderTarget(),S=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ui),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=p!==Hn&&this.type===Hn,B=p===Hn&&this.type!==Hn;for(let D=0,I=y.length;D<I;D++){const z=y[D],O=z.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const q=O.getFrameExtents();if(s.multiply(q),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,O.mapSize.y=r.y)),O.map===null||U===!0||B===!0){const k=this.type!==Hn?{minFilter:sn,magFilter:sn}:{};O.map!==null&&O.map.dispose(),O.map=new xi(s.x,s.y,k),O.map.texture.name=z.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const $=O.getViewportCount();for(let k=0;k<$;k++){const rt=O.getViewport(k);o.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),F.viewport(o),O.updateMatrices(z,k),n=O.getFrustum(),x(T,E,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===Hn&&v(O,E),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,S,A)};function v(y,T){const E=t.update(_);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new xi(s.x,s.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(T,null,E,f,_,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(T,null,E,d,_,null)}function M(y,T,E,w){let S=null;const A=E.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(A!==void 0)S=A;else if(S=E.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=S.uuid,U=T.uuid;let B=l[F];B===void 0&&(B={},l[F]=B);let D=B[U];D===void 0&&(D=S.clone(),B[U]=D,T.addEventListener("dispose",b)),S=D}if(S.visible=T.visible,S.wireframe=T.wireframe,w===Hn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,E.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=i.properties.get(S);F.light=E}return S}function x(y,T,E,w,S){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===Hn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const U=t.update(y),B=y.material;if(Array.isArray(B)){const D=U.groups;for(let I=0,z=D.length;I<z;I++){const O=D[I],q=B[O.materialIndex];if(q&&q.visible){const $=M(y,q,w,S);y.onBeforeShadow(i,y,T,E,U,$,O),i.renderBufferDirect(E,null,U,$,y,O),y.onAfterShadow(i,y,T,E,U,$,O)}}}else if(B.visible){const D=M(y,B,w,S);y.onBeforeShadow(i,y,T,E,U,D,null),i.renderBufferDirect(E,null,U,D,y,null),y.onAfterShadow(i,y,T,E,U,D,null)}}const F=y.children;for(let U=0,B=F.length;U<B;U++)x(F[U],T,E,w,S)}function b(y){y.target.removeEventListener("dispose",b);for(const E in l){const w=l[E],S=y.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const wg={[oa]:aa,[ca]:ua,[la]:fa,[xs]:ha,[aa]:oa,[ua]:ca,[fa]:la,[ha]:xs};function Tg(i,t){function e(){let H=!1;const St=new ge;let et=null;const ut=new ge(0,0,0,0);return{setMask:function(Tt){et!==Tt&&!H&&(i.colorMask(Tt,Tt,Tt,Tt),et=Tt)},setLocked:function(Tt){H=Tt},setClear:function(Tt,Et,Xt,Me,Ne){Ne===!0&&(Tt*=Me,Et*=Me,Xt*=Me),St.set(Tt,Et,Xt,Me),ut.equals(St)===!1&&(i.clearColor(Tt,Et,Xt,Me),ut.copy(St))},reset:function(){H=!1,et=null,ut.set(-1,0,0,0)}}}function n(){let H=!1,St=!1,et=null,ut=null,Tt=null;return{setReversed:function(Et){if(St!==Et){const Xt=t.get("EXT_clip_control");St?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const Me=Tt;Tt=null,this.setClear(Me)}St=Et},getReversed:function(){return St},setTest:function(Et){Et?it(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(Et){et!==Et&&!H&&(i.depthMask(Et),et=Et)},setFunc:function(Et){if(St&&(Et=wg[Et]),ut!==Et){switch(Et){case oa:i.depthFunc(i.NEVER);break;case aa:i.depthFunc(i.ALWAYS);break;case ca:i.depthFunc(i.LESS);break;case xs:i.depthFunc(i.LEQUAL);break;case la:i.depthFunc(i.EQUAL);break;case ha:i.depthFunc(i.GEQUAL);break;case ua:i.depthFunc(i.GREATER);break;case fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=Et}},setLocked:function(Et){H=Et},setClear:function(Et){Tt!==Et&&(St&&(Et=1-Et),i.clearDepth(Et),Tt=Et)},reset:function(){H=!1,et=null,ut=null,Tt=null,St=!1}}}function s(){let H=!1,St=null,et=null,ut=null,Tt=null,Et=null,Xt=null,Me=null,Ne=null;return{setTest:function(re){H||(re?it(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(re){St!==re&&!H&&(i.stencilMask(re),St=re)},setFunc:function(re,fn,Dn){(et!==re||ut!==fn||Tt!==Dn)&&(i.stencilFunc(re,fn,Dn),et=re,ut=fn,Tt=Dn)},setOp:function(re,fn,Dn){(Et!==re||Xt!==fn||Me!==Dn)&&(i.stencilOp(re,fn,Dn),Et=re,Xt=fn,Me=Dn)},setLocked:function(re){H=re},setClear:function(re){Ne!==re&&(i.clearStencil(re),Ne=re)},reset:function(){H=!1,St=null,et=null,ut=null,Tt=null,Et=null,Xt=null,Me=null,Ne=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,M=null,x=null,b=null,y=null,T=new Ot(0,0,0),E=0,w=!1,S=null,A=null,F=null,U=null,B=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,z=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(O)[1]),I=z>=1):O.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),I=z>=2);let q=null,$={};const k=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),dt=new ge().fromArray(k),G=new ge().fromArray(rt);function Z(H,St,et,ut){const Tt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(H,Et),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<et;Xt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(St+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return Et}const ht={};ht[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(xs),Q(!1),ct(zc),it(i.CULL_FACE),L(ui);function it(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function mt(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function Rt(H,St){return u[H]!==St?(i.bindFramebuffer(H,St),u[H]=St,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=St),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=St),!0):!1}function xt(H,St){let et=d,ut=!1;if(H){et=f.get(St),et===void 0&&(et=[],f.set(St,et));const Tt=H.textures;if(et.length!==Tt.length||et[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,Xt=Tt.length;Et<Xt;Et++)et[Et]=i.COLOR_ATTACHMENT0+Et;et.length=Tt.length,ut=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,ut=!0);ut&&i.drawBuffers(et)}function at(H){return g!==H?(i.useProgram(H),g=H,!0):!1}const V={[Di]:i.FUNC_ADD,[Gu]:i.FUNC_SUBTRACT,[Vu]:i.FUNC_REVERSE_SUBTRACT};V[Wu]=i.MIN,V[Xu]=i.MAX;const j={[qu]:i.ZERO,[Yu]:i.ONE,[$u]:i.SRC_COLOR,[sa]:i.SRC_ALPHA,[tf]:i.SRC_ALPHA_SATURATE,[Ju]:i.DST_COLOR,[Zu]:i.DST_ALPHA,[ju]:i.ONE_MINUS_SRC_COLOR,[ra]:i.ONE_MINUS_SRC_ALPHA,[Qu]:i.ONE_MINUS_DST_COLOR,[Ku]:i.ONE_MINUS_DST_ALPHA,[ef]:i.CONSTANT_COLOR,[nf]:i.ONE_MINUS_CONSTANT_COLOR,[sf]:i.CONSTANT_ALPHA,[rf]:i.ONE_MINUS_CONSTANT_ALPHA};function L(H,St,et,ut,Tt,Et,Xt,Me,Ne,re){if(H===ui){_===!0&&(mt(i.BLEND),_=!1);return}if(_===!1&&(it(i.BLEND),_=!0),H!==Hu){if(H!==m||re!==w){if((p!==Di||x!==Di)&&(i.blendEquation(i.FUNC_ADD),p=Di,x=Di),re)switch(H){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $s:i.blendFunc(i.ONE,i.ONE);break;case Bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $s:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}v=null,M=null,b=null,y=null,T.set(0,0,0),E=0,m=H,w=re}return}Tt=Tt||St,Et=Et||et,Xt=Xt||ut,(St!==p||Tt!==x)&&(i.blendEquationSeparate(V[St],V[Tt]),p=St,x=Tt),(et!==v||ut!==M||Et!==b||Xt!==y)&&(i.blendFuncSeparate(j[et],j[ut],j[Et],j[Xt]),v=et,M=ut,b=Et,y=Xt),(Me.equals(T)===!1||Ne!==E)&&(i.blendColor(Me.r,Me.g,Me.b,Ne),T.copy(Me),E=Ne),m=H,w=!1}function ot(H,St){H.side===fe?mt(i.CULL_FACE):it(i.CULL_FACE);let et=H.side===ke;St&&(et=!et),Q(et),H.blending===Fi&&H.transparent===!1?L(ui):L(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const ut=H.stencilWrite;a.setTest(ut),ut&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Mt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(H){S!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),S=H)}function ct(H){H!==Bu?(it(i.CULL_FACE),H!==A&&(H===zc?i.cullFace(i.BACK):H===ku?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),A=H}function st(H){H!==F&&(I&&i.lineWidth(H),F=H)}function Mt(H,St,et){H?(it(i.POLYGON_OFFSET_FILL),(U!==St||B!==et)&&(i.polygonOffset(St,et),U=St,B=et)):mt(i.POLYGON_OFFSET_FILL)}function ft(H){H?it(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function P(H){H===void 0&&(H=i.TEXTURE0+D-1),q!==H&&(i.activeTexture(H),q=H)}function R(H,St,et){et===void 0&&(q===null?et=i.TEXTURE0+D-1:et=q);let ut=$[et];ut===void 0&&(ut={type:void 0,texture:void 0},$[et]=ut),(ut.type!==H||ut.texture!==St)&&(q!==et&&(i.activeTexture(et),q=et),i.bindTexture(H,St||ht[H]),ut.type=H,ut.texture=St)}function Y(){const H=$[q];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Vt(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function gt(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function zt(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Gt(H){dt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),dt.copy(H))}function Pt(H){G.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),G.copy(H))}function te(H,St){let et=l.get(St);et===void 0&&(et=new WeakMap,l.set(St,et));let ut=et.get(H);ut===void 0&&(ut=i.getUniformBlockIndex(St,H.name),et.set(H,ut))}function $t(H,St){const ut=l.get(St).get(H);c.get(St)!==ut&&(i.uniformBlockBinding(St,ut,H.__bindingPointIndex),c.set(St,ut))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},q=null,$={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,M=null,x=null,b=null,y=null,T=new Ot(0,0,0),E=0,w=!1,S=null,A=null,F=null,U=null,B=null,dt.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:mt,bindFramebuffer:Rt,drawBuffers:xt,useProgram:at,setBlending:L,setMaterial:ot,setFlipSided:Q,setCullFace:ct,setLineWidth:st,setPolygonOffset:Mt,setScissorTest:ft,activeTexture:P,bindTexture:R,unbindTexture:Y,compressedTexImage2D:tt,compressedTexImage3D:lt,texImage2D:Ct,texImage3D:zt,updateUBOMapping:te,uniformBlockBinding:$t,texStorage2D:Vt,texStorage3D:gt,texSubImage2D:nt,texSubImage3D:At,compressedTexSubImage2D:vt,compressedTexSubImage3D:bt,scissor:Gt,viewport:Pt,reset:he}}function Ul(i,t,e,n){const s=Ag(n);switch(e){case Th:return i*t;case Rh:return i*t;case Ch:return i*t*2;case ac:return i*t/s.components*s.byteLength;case cc:return i*t/s.components*s.byteLength;case Ph:return i*t*2/s.components*s.byteLength;case lc:return i*t*2/s.components*s.byteLength;case Ah:return i*t*3/s.components*s.byteLength;case yn:return i*t*4/s.components*s.byteLength;case hc:return i*t*4/s.components*s.byteLength;case Vr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:case va:return Math.max(i,16)*Math.max(t,8)/4;case ga:case _a:return Math.max(i,8)*Math.max(t,8)/2;case Ma:case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Yr:case Fa:case za:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Lh:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ka:case Ha:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ag(i){switch(i){case jn:case bh:return{byteLength:1,components:1};case js:case Eh:case ir:return{byteLength:2,components:1};case rc:case oc:return{byteLength:2,components:4};case zi:case sc:case Cn:return{byteLength:4,components:1};case wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Rg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,R){return d?new OffscreenCanvas(P,R):Zs("canvas")}function _(P,R,Y){let tt=1;const lt=ft(P);if((lt.width>Y||lt.height>Y)&&(tt=Y/Math.max(lt.width,lt.height)),tt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const nt=Math.floor(tt*lt.width),At=Math.floor(tt*lt.height);u===void 0&&(u=g(nt,At));const vt=R?g(nt,At):u;return vt.width=nt,vt.height=At,vt.getContext("2d").drawImage(P,0,0,nt,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+nt+"x"+At+")."),vt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(P,R,Y,tt,lt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let nt=R;if(R===i.RED&&(Y===i.FLOAT&&(nt=i.R32F),Y===i.HALF_FLOAT&&(nt=i.R16F),Y===i.UNSIGNED_BYTE&&(nt=i.R8)),R===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(nt=i.R8UI),Y===i.UNSIGNED_SHORT&&(nt=i.R16UI),Y===i.UNSIGNED_INT&&(nt=i.R32UI),Y===i.BYTE&&(nt=i.R8I),Y===i.SHORT&&(nt=i.R16I),Y===i.INT&&(nt=i.R32I)),R===i.RG&&(Y===i.FLOAT&&(nt=i.RG32F),Y===i.HALF_FLOAT&&(nt=i.RG16F),Y===i.UNSIGNED_BYTE&&(nt=i.RG8)),R===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(nt=i.RG8UI),Y===i.UNSIGNED_SHORT&&(nt=i.RG16UI),Y===i.UNSIGNED_INT&&(nt=i.RG32UI),Y===i.BYTE&&(nt=i.RG8I),Y===i.SHORT&&(nt=i.RG16I),Y===i.INT&&(nt=i.RG32I)),R===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),Y===i.UNSIGNED_INT&&(nt=i.RGB32UI),Y===i.BYTE&&(nt=i.RGB8I),Y===i.SHORT&&(nt=i.RGB16I),Y===i.INT&&(nt=i.RGB32I)),R===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),Y===i.UNSIGNED_INT&&(nt=i.RGBA32UI),Y===i.BYTE&&(nt=i.RGBA8I),Y===i.SHORT&&(nt=i.RGBA16I),Y===i.INT&&(nt=i.RGBA32I)),R===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),R===i.RGBA){const At=lt?so:ee.getTransfer(tt);Y===i.FLOAT&&(nt=i.RGBA32F),Y===i.HALF_FLOAT&&(nt=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(nt=At===oe?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function x(P,R){let Y;return P?R===null||R===zi||R===Ms?Y=i.DEPTH24_STENCIL8:R===Cn?Y=i.DEPTH32F_STENCIL8:R===js&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===zi||R===Ms?Y=i.DEPTH_COMPONENT24:R===Cn?Y=i.DEPTH_COMPONENT32F:R===js&&(Y=i.DEPTH_COMPONENT16),Y}function b(P,R){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==sn&&P.minFilter!==Mn?Math.log2(Math.max(R.width,R.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?R.mipmaps.length:1}function y(P){const R=P.target;R.removeEventListener("dispose",y),E(R),R.isVideoTexture&&h.delete(R)}function T(P){const R=P.target;R.removeEventListener("dispose",T),S(R)}function E(P){const R=n.get(P);if(R.__webglInit===void 0)return;const Y=P.source,tt=f.get(Y);if(tt){const lt=tt[R.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&w(P),Object.keys(tt).length===0&&f.delete(Y)}n.remove(P)}function w(P){const R=n.get(P);i.deleteTexture(R.__webglTexture);const Y=P.source,tt=f.get(Y);delete tt[R.__cacheKey],o.memory.textures--}function S(P){const R=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(R.__webglFramebuffer[tt]))for(let lt=0;lt<R.__webglFramebuffer[tt].length;lt++)i.deleteFramebuffer(R.__webglFramebuffer[tt][lt]);else i.deleteFramebuffer(R.__webglFramebuffer[tt]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[tt])}else{if(Array.isArray(R.__webglFramebuffer))for(let tt=0;tt<R.__webglFramebuffer.length;tt++)i.deleteFramebuffer(R.__webglFramebuffer[tt]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let tt=0;tt<R.__webglColorRenderbuffer.length;tt++)R.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[tt]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const Y=P.textures;for(let tt=0,lt=Y.length;tt<lt;tt++){const nt=n.get(Y[tt]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(Y[tt])}n.remove(P)}let A=0;function F(){A=0}function U(){const P=A;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),A+=1,P}function B(P){const R=[];return R.push(P.wrapS),R.push(P.wrapT),R.push(P.wrapR||0),R.push(P.magFilter),R.push(P.minFilter),R.push(P.anisotropy),R.push(P.internalFormat),R.push(P.format),R.push(P.type),R.push(P.generateMipmaps),R.push(P.premultiplyAlpha),R.push(P.flipY),R.push(P.unpackAlignment),R.push(P.colorSpace),R.join()}function D(P,R){const Y=n.get(P);if(P.isVideoTexture&&st(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const tt=P.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(Y,P,R);return}}e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+R)}function I(P,R){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){G(Y,P,R);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+R)}function z(P,R){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){G(Y,P,R);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+R)}function O(P,R){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){Z(Y,P,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+R)}const q={[gi]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[ma]:i.MIRRORED_REPEAT},$={[sn]:i.NEAREST,[mf]:i.NEAREST_MIPMAP_NEAREST,[hr]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[po]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},k={[vf]:i.NEVER,[wf]:i.ALWAYS,[Mf]:i.LESS,[Ih]:i.LEQUAL,[yf]:i.EQUAL,[Ef]:i.GEQUAL,[Sf]:i.GREATER,[bf]:i.NOTEQUAL};function rt(P,R){if(R.type===Cn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Mn||R.magFilter===po||R.magFilter===hr||R.magFilter===Ni||R.minFilter===Mn||R.minFilter===po||R.minFilter===hr||R.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,q[R.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,q[R.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,q[R.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,$[R.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,$[R.minFilter]),R.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,k[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===sn||R.minFilter!==hr&&R.minFilter!==Ni||R.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function dt(P,R){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,R.addEventListener("dispose",y));const tt=R.source;let lt=f.get(tt);lt===void 0&&(lt={},f.set(tt,lt));const nt=B(R);if(nt!==P.__cacheKey){lt[nt]===void 0&&(lt[nt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),lt[nt].usedTimes++;const At=lt[P.__cacheKey];At!==void 0&&(lt[P.__cacheKey].usedTimes--,At.usedTimes===0&&w(R)),P.__cacheKey=nt,P.__webglTexture=lt[nt].texture}return Y}function G(P,R,Y){let tt=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(tt=i.TEXTURE_3D);const lt=dt(P,R),nt=R.source;e.bindTexture(tt,P.__webglTexture,i.TEXTURE0+Y);const At=n.get(nt);if(nt.version!==At.__version||lt===!0){e.activeTexture(i.TEXTURE0+Y);const vt=ee.getPrimaries(ee.workingColorSpace),bt=R.colorSpace===Xn?null:ee.getPrimaries(R.colorSpace),Vt=R.colorSpace===Xn||vt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let gt=_(R.image,!1,s.maxTextureSize);gt=Mt(R,gt);const Ct=r.convert(R.format,R.colorSpace),zt=r.convert(R.type);let Gt=M(R.internalFormat,Ct,zt,R.colorSpace,R.isVideoTexture);rt(tt,R);let Pt;const te=R.mipmaps,$t=R.isVideoTexture!==!0,he=At.__version===void 0||lt===!0,H=nt.dataReady,St=b(R,gt);if(R.isDepthTexture)Gt=x(R.format===ys,R.type),he&&($t?e.texStorage2D(i.TEXTURE_2D,1,Gt,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,gt.width,gt.height,0,Ct,zt,null));else if(R.isDataTexture)if(te.length>0){$t&&he&&e.texStorage2D(i.TEXTURE_2D,St,Gt,te[0].width,te[0].height);for(let et=0,ut=te.length;et<ut;et++)Pt=te[et],$t?H&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Pt.width,Pt.height,Ct,zt,Pt.data):e.texImage2D(i.TEXTURE_2D,et,Gt,Pt.width,Pt.height,0,Ct,zt,Pt.data);R.generateMipmaps=!1}else $t?(he&&e.texStorage2D(i.TEXTURE_2D,St,Gt,gt.width,gt.height),H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt.width,gt.height,Ct,zt,gt.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,gt.width,gt.height,0,Ct,zt,gt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){$t&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Gt,te[0].width,te[0].height,gt.depth);for(let et=0,ut=te.length;et<ut;et++)if(Pt=te[et],R.format!==yn)if(Ct!==null)if($t){if(H)if(R.layerUpdates.size>0){const Tt=Ul(Pt.width,Pt.height,R.format,R.type);for(const Et of R.layerUpdates){const Xt=Pt.data.subarray(Et*Tt/Pt.data.BYTES_PER_ELEMENT,(Et+1)*Tt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,Et,Pt.width,Pt.height,1,Ct,Xt)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Pt.width,Pt.height,gt.depth,Ct,Pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,Gt,Pt.width,Pt.height,gt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Pt.width,Pt.height,gt.depth,Ct,zt,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,Gt,Pt.width,Pt.height,gt.depth,0,Ct,zt,Pt.data)}else{$t&&he&&e.texStorage2D(i.TEXTURE_2D,St,Gt,te[0].width,te[0].height);for(let et=0,ut=te.length;et<ut;et++)Pt=te[et],R.format!==yn?Ct!==null?$t?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,Pt.width,Pt.height,Ct,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,et,Gt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?H&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Pt.width,Pt.height,Ct,zt,Pt.data):e.texImage2D(i.TEXTURE_2D,et,Gt,Pt.width,Pt.height,0,Ct,zt,Pt.data)}else if(R.isDataArrayTexture)if($t){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Gt,gt.width,gt.height,gt.depth),H)if(R.layerUpdates.size>0){const et=Ul(gt.width,gt.height,R.format,R.type);for(const ut of R.layerUpdates){const Tt=gt.data.subarray(ut*et/gt.data.BYTES_PER_ELEMENT,(ut+1)*et/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,gt.width,gt.height,1,Ct,zt,Tt)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Ct,zt,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,gt.width,gt.height,gt.depth,0,Ct,zt,gt.data);else if(R.isData3DTexture)$t?(he&&e.texStorage3D(i.TEXTURE_3D,St,Gt,gt.width,gt.height,gt.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Ct,zt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,gt.width,gt.height,gt.depth,0,Ct,zt,gt.data);else if(R.isFramebufferTexture){if(he)if($t)e.texStorage2D(i.TEXTURE_2D,St,Gt,gt.width,gt.height);else{let et=gt.width,ut=gt.height;for(let Tt=0;Tt<St;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,Gt,et,ut,0,Ct,zt,null),et>>=1,ut>>=1}}else if(te.length>0){if($t&&he){const et=ft(te[0]);e.texStorage2D(i.TEXTURE_2D,St,Gt,et.width,et.height)}for(let et=0,ut=te.length;et<ut;et++)Pt=te[et],$t?H&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Ct,zt,Pt):e.texImage2D(i.TEXTURE_2D,et,Gt,Ct,zt,Pt);R.generateMipmaps=!1}else if($t){if(he){const et=ft(gt);e.texStorage2D(i.TEXTURE_2D,St,Gt,et.width,et.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,zt,gt)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Ct,zt,gt);m(R)&&p(tt),At.__version=nt.version,R.onUpdate&&R.onUpdate(R)}P.__version=R.version}function Z(P,R,Y){if(R.image.length!==6)return;const tt=dt(P,R),lt=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Y);const nt=n.get(lt);if(lt.version!==nt.__version||tt===!0){e.activeTexture(i.TEXTURE0+Y);const At=ee.getPrimaries(ee.workingColorSpace),vt=R.colorSpace===Xn?null:ee.getPrimaries(R.colorSpace),bt=R.colorSpace===Xn||At===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Vt=R.isCompressedTexture||R.image[0].isCompressedTexture,gt=R.image[0]&&R.image[0].isDataTexture,Ct=[];for(let ut=0;ut<6;ut++)!Vt&&!gt?Ct[ut]=_(R.image[ut],!0,s.maxCubemapSize):Ct[ut]=gt?R.image[ut].image:R.image[ut],Ct[ut]=Mt(R,Ct[ut]);const zt=Ct[0],Gt=r.convert(R.format,R.colorSpace),Pt=r.convert(R.type),te=M(R.internalFormat,Gt,Pt,R.colorSpace),$t=R.isVideoTexture!==!0,he=nt.__version===void 0||tt===!0,H=lt.dataReady;let St=b(R,zt);rt(i.TEXTURE_CUBE_MAP,R);let et;if(Vt){$t&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,te,zt.width,zt.height);for(let ut=0;ut<6;ut++){et=Ct[ut].mipmaps;for(let Tt=0;Tt<et.length;Tt++){const Et=et[Tt];R.format!==yn?Gt!==null?$t?H&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt,0,0,Et.width,Et.height,Gt,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt,te,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt,0,0,Et.width,Et.height,Gt,Pt,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt,te,Et.width,Et.height,0,Gt,Pt,Et.data)}}}else{if(et=R.mipmaps,$t&&he){et.length>0&&St++;const ut=ft(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,te,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(gt){$t?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Ct[ut].width,Ct[ut].height,Gt,Pt,Ct[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,te,Ct[ut].width,Ct[ut].height,0,Gt,Pt,Ct[ut].data);for(let Tt=0;Tt<et.length;Tt++){const Xt=et[Tt].image[ut].image;$t?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt+1,0,0,Xt.width,Xt.height,Gt,Pt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt+1,te,Xt.width,Xt.height,0,Gt,Pt,Xt.data)}}else{$t?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Gt,Pt,Ct[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,te,Gt,Pt,Ct[ut]);for(let Tt=0;Tt<et.length;Tt++){const Et=et[Tt];$t?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt+1,0,0,Gt,Pt,Et.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt+1,te,Gt,Pt,Et.image[ut])}}}m(R)&&p(i.TEXTURE_CUBE_MAP),nt.__version=lt.version,R.onUpdate&&R.onUpdate(R)}P.__version=R.version}function ht(P,R,Y,tt,lt,nt){const At=r.convert(Y.format,Y.colorSpace),vt=r.convert(Y.type),bt=M(Y.internalFormat,At,vt,Y.colorSpace),Vt=n.get(R),gt=n.get(Y);if(gt.__renderTarget=R,!Vt.__hasExternalTextures){const Ct=Math.max(1,R.width>>nt),zt=Math.max(1,R.height>>nt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,nt,bt,Ct,zt,R.depth,0,At,vt,null):e.texImage2D(lt,nt,bt,Ct,zt,0,At,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),ct(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,lt,gt.__webglTexture,0,Q(R)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,lt,gt.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(P,R,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,P),R.depthBuffer){const tt=R.depthTexture,lt=tt&&tt.isDepthTexture?tt.type:null,nt=x(R.stencilBuffer,lt),At=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=Q(R);ct(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,nt,R.width,R.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,nt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,nt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,P)}else{const tt=R.textures;for(let lt=0;lt<tt.length;lt++){const nt=tt[lt],At=r.convert(nt.format,nt.colorSpace),vt=r.convert(nt.type),bt=M(nt.internalFormat,At,vt,nt.colorSpace),Vt=Q(R);Y&&ct(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,bt,R.width,R.height):ct(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,bt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,bt,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(P,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(R.depthTexture);tt.__renderTarget=R,(!tt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),D(R.depthTexture,0);const lt=tt.__webglTexture,nt=Q(R);if(R.depthTexture.format===ps)ct(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(R.depthTexture.format===ys)ct(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function Rt(P){const R=n.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==P.depthTexture){const tt=P.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),tt){const lt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,tt.removeEventListener("dispose",lt)};tt.addEventListener("dispose",lt),R.__depthDisposeCallback=lt}R.__boundDepthTexture=tt}if(P.depthTexture&&!R.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");mt(R.__webglFramebuffer,P)}else if(Y){R.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[tt]),R.__webglDepthbuffer[tt]===void 0)R.__webglDepthbuffer[tt]=i.createRenderbuffer(),it(R.__webglDepthbuffer[tt],P,!1);else{const lt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=R.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),it(R.__webglDepthbuffer,P,!1);else{const tt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(P,R,Y){const tt=n.get(P);R!==void 0&&ht(tt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Rt(P)}function at(P){const R=P.texture,Y=n.get(P),tt=n.get(R);P.addEventListener("dispose",T);const lt=P.textures,nt=P.isWebGLCubeRenderTarget===!0,At=lt.length>1;if(At||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=R.version,o.memory.textures++),nt){Y.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(R.mipmaps&&R.mipmaps.length>0){Y.__webglFramebuffer[vt]=[];for(let bt=0;bt<R.mipmaps.length;bt++)Y.__webglFramebuffer[vt][bt]=i.createFramebuffer()}else Y.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Y.__webglFramebuffer=[];for(let vt=0;vt<R.mipmaps.length;vt++)Y.__webglFramebuffer[vt]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(At)for(let vt=0,bt=lt.length;vt<bt;vt++){const Vt=n.get(lt[vt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&ct(P)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let vt=0;vt<lt.length;vt++){const bt=lt[vt];Y.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[vt]);const Vt=r.convert(bt.format,bt.colorSpace),gt=r.convert(bt.type),Ct=M(bt.internalFormat,Vt,gt,bt.colorSpace,P.isXRRenderTarget===!0),zt=Q(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,Ct,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,Y.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),it(Y.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),rt(i.TEXTURE_CUBE_MAP,R);for(let vt=0;vt<6;vt++)if(R.mipmaps&&R.mipmaps.length>0)for(let bt=0;bt<R.mipmaps.length;bt++)ht(Y.__webglFramebuffer[vt][bt],P,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,bt);else ht(Y.__webglFramebuffer[vt],P,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(R)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let vt=0,bt=lt.length;vt<bt;vt++){const Vt=lt[vt],gt=n.get(Vt);e.bindTexture(i.TEXTURE_2D,gt.__webglTexture),rt(i.TEXTURE_2D,Vt),ht(Y.__webglFramebuffer,P,Vt,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),m(Vt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(vt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,tt.__webglTexture),rt(vt,R),R.mipmaps&&R.mipmaps.length>0)for(let bt=0;bt<R.mipmaps.length;bt++)ht(Y.__webglFramebuffer[bt],P,R,i.COLOR_ATTACHMENT0,vt,bt);else ht(Y.__webglFramebuffer,P,R,i.COLOR_ATTACHMENT0,vt,0);m(R)&&p(vt),e.unbindTexture()}P.depthBuffer&&Rt(P)}function V(P){const R=P.textures;for(let Y=0,tt=R.length;Y<tt;Y++){const lt=R[Y];if(m(lt)){const nt=v(P),At=n.get(lt).__webglTexture;e.bindTexture(nt,At),p(nt),e.unbindTexture()}}}const j=[],L=[];function ot(P){if(P.samples>0){if(ct(P)===!1){const R=P.textures,Y=P.width,tt=P.height;let lt=i.COLOR_BUFFER_BIT;const nt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(P),vt=R.length>1;if(vt)for(let bt=0;bt<R.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let bt=0;bt<R.length;bt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);const Vt=n.get(R[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,Y,tt,0,0,Y,tt,lt,i.NEAREST),c===!0&&(j.length=0,L.length=0,j.push(i.COLOR_ATTACHMENT0+bt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(j.push(nt),L.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let bt=0;bt<R.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);const Vt=n.get(R[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const R=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function Q(P){return Math.min(s.maxSamples,P.samples)}function ct(P){const R=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function st(P){const R=o.render.frame;h.get(P)!==R&&(h.set(P,R),P.update())}function Mt(P,R){const Y=P.colorSpace,tt=P.format,lt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==ws&&Y!==Xn&&(ee.getTransfer(Y)===oe?(tt!==yn||lt!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),R}function ft(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=F,this.setTexture2D=D,this.setTexture2DArray=I,this.setTexture3D=z,this.setTextureCube=O,this.rebindTextures=xt,this.setupRenderTarget=at,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=ct}function Cg(i,t){function e(n,s=Xn){let r;const o=ee.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===rc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bh)return i.BYTE;if(n===Eh)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===sc)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===ir)return i.HALF_FLOAT;if(n===Th)return i.ALPHA;if(n===Ah)return i.RGB;if(n===yn)return i.RGBA;if(n===Rh)return i.LUMINANCE;if(n===Ch)return i.LUMINANCE_ALPHA;if(n===ps)return i.DEPTH_COMPONENT;if(n===ys)return i.DEPTH_STENCIL;if(n===ac)return i.RED;if(n===cc)return i.RED_INTEGER;if(n===Ph)return i.RG;if(n===lc)return i.RG_INTEGER;if(n===hc)return i.RGBA_INTEGER;if(n===Vr||n===Wr||n===Xr||n===qr)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ga||n===xa||n===_a||n===va)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ma||n===ya||n===Sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ma||n===ya)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ba||n===Ea||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Oa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ba)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ea)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ta)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Aa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ra)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ca)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===La)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Da)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ia)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ua)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Na)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yr||n===Fa||n===za)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yr)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lh||n===Ba||n===ka||n===Ha)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ha)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Pg extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _e extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lg={type:"move"};class Go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ig=`
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

}`;class Ug{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ue,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new un({vertexShader:Dg,fragmentShader:Ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ng extends Gi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=new Ug,m=e.getContextAttributes();let p=null,v=null;const M=[],x=[],b=new pt;let y=null;const T=new nn;T.viewport=new ge;const E=new nn;E.viewport=new ge;const w=[T,E],S=new Pg;let A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=M[G];return Z===void 0&&(Z=new Go,M[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=M[G];return Z===void 0&&(Z=new Go,M[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=M[G];return Z===void 0&&(Z=new Go,M[G]=Z),Z.getHandSpace()};function U(G){const Z=x.indexOf(G.inputSource);if(Z===-1)return;const ht=M[Z];ht!==void 0&&(ht.update(G.inputSource,G.frame,l||o),ht.dispatchEvent({type:G.type,data:G.inputSource}))}function B(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",D);for(let G=0;G<M.length;G++){const Z=x[G];Z!==null&&(x[G]=null,M[G].disconnect(Z))}A=null,F=null,_.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,v=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",B),s.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(b),s.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new xi(d.framebufferWidth,d.framebufferHeight,{format:yn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,ht=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=m.stencil?ys:ps,ht=m.stencil?Ms:zi);const mt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(mt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new xi(f.textureWidth,f.textureHeight,{format:yn,type:jn,depthTexture:new qh(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function D(G){for(let Z=0;Z<G.removed.length;Z++){const ht=G.removed[Z],it=x.indexOf(ht);it>=0&&(x[it]=null,M[it].disconnect(ht))}for(let Z=0;Z<G.added.length;Z++){const ht=G.added[Z];let it=x.indexOf(ht);if(it===-1){for(let Rt=0;Rt<M.length;Rt++)if(Rt>=x.length){x.push(ht),it=Rt;break}else if(x[Rt]===null){x[Rt]=ht,it=Rt;break}if(it===-1)break}const mt=M[it];mt&&mt.connect(ht)}}const I=new N,z=new N;function O(G,Z,ht){I.setFromMatrixPosition(Z.matrixWorld),z.setFromMatrixPosition(ht.matrixWorld);const it=I.distanceTo(z),mt=Z.projectionMatrix.elements,Rt=ht.projectionMatrix.elements,xt=mt[14]/(mt[10]-1),at=mt[14]/(mt[10]+1),V=(mt[9]+1)/mt[5],j=(mt[9]-1)/mt[5],L=(mt[8]-1)/mt[0],ot=(Rt[8]+1)/Rt[0],Q=xt*L,ct=xt*ot,st=it/(-L+ot),Mt=st*-L;if(Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Mt),G.translateZ(st),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),mt[10]===-1)G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ft=xt+st,P=at+st,R=Q-Mt,Y=ct+(it-Mt),tt=V*at/P*ft,lt=j*at/P*ft;G.projectionMatrix.makePerspective(R,Y,tt,lt,ft,P),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function q(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let Z=G.near,ht=G.far;_.texture!==null&&(_.depthNear>0&&(Z=_.depthNear),_.depthFar>0&&(ht=_.depthFar)),S.near=E.near=T.near=Z,S.far=E.far=T.far=ht,(A!==S.near||F!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,F=S.far),T.layers.mask=G.layers.mask|2,E.layers.mask=G.layers.mask|4,S.layers.mask=T.layers.mask|E.layers.mask;const it=G.parent,mt=S.cameras;q(S,it);for(let Rt=0;Rt<mt.length;Rt++)q(mt[Rt],it);mt.length===2?O(S,T,E):S.projectionMatrix.copy(T.projectionMatrix),$(G,S,it)};function $(G,Z,ht){ht===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(ht.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ga*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let k=null;function rt(G,Z){if(h=Z.getViewerPose(l||o),g=Z,h!==null){const ht=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let it=!1;ht.length!==S.cameras.length&&(S.cameras.length=0,it=!0);for(let Rt=0;Rt<ht.length;Rt++){const xt=ht[Rt];let at=null;if(d!==null)at=d.getViewport(xt);else{const j=u.getViewSubImage(f,xt);at=j.viewport,Rt===0&&(t.setRenderTargetTextures(v,j.colorTexture,f.ignoreDepthValues?void 0:j.depthStencilTexture),t.setRenderTarget(v))}let V=w[Rt];V===void 0&&(V=new nn,V.layers.enable(Rt),V.viewport=new ge,w[Rt]=V),V.matrix.fromArray(xt.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(xt.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(at.x,at.y,at.width,at.height),Rt===0&&(S.matrix.copy(V.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),it===!0&&S.cameras.push(V)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")){const Rt=u.getDepthInformation(ht[0]);Rt&&Rt.isValid&&Rt.texture&&_.init(t,Rt,s.renderState)}}for(let ht=0;ht<M.length;ht++){const it=x[ht],mt=M[ht];it!==null&&mt!==void 0&&mt.update(it,Z,l||o)}k&&k(G,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const dt=new Xh;dt.setAnimationLoop(rt),this.setAnimationLoop=function(G){k=G},this.dispose=function(){}}}const Ti=new Sn,Og=new Jt;function Fg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Hh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),M=v.envMap,x=v.envMapRotation;M&&(m.envMap.value=M,Ti.copy(x),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(Ti)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const x=M.program;n.uniformBlockBinding(v,x)}function l(v,M){let x=s[v.id];x===void 0&&(g(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",m));const b=M.program;n.updateUBOMapping(v,b);const y=t.render.frame;r[v.id]!==y&&(f(v),r[v.id]=y)}function h(v){const M=u();v.__bindingPointIndex=M;const x=i.createBuffer(),b=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,b,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=s[v.id],x=v.uniforms,b=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,T=x.length;y<T;y++){const E=Array.isArray(x[y])?x[y]:[x[y]];for(let w=0,S=E.length;w<S;w++){const A=E[w];if(d(A,y,w,b)===!0){const F=A.__offset,U=Array.isArray(A.value)?A.value:[A.value];let B=0;for(let D=0;D<U.length;D++){const I=U[D],z=_(I);typeof I=="number"||typeof I=="boolean"?(A.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,F+B,A.__data)):I.isMatrix3?(A.__data[0]=I.elements[0],A.__data[1]=I.elements[1],A.__data[2]=I.elements[2],A.__data[3]=0,A.__data[4]=I.elements[3],A.__data[5]=I.elements[4],A.__data[6]=I.elements[5],A.__data[7]=0,A.__data[8]=I.elements[6],A.__data[9]=I.elements[7],A.__data[10]=I.elements[8],A.__data[11]=0):(I.toArray(A.__data,B),B+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,x,b){const y=v.value,T=M+"_"+x;if(b[T]===void 0)return typeof y=="number"||typeof y=="boolean"?b[T]=y:b[T]=y.clone(),!0;{const E=b[T];if(typeof y=="number"||typeof y=="boolean"){if(E!==y)return b[T]=y,!0}else if(E.equals(y)===!1)return E.copy(y),!0}return!1}function g(v){const M=v.uniforms;let x=0;const b=16;for(let T=0,E=M.length;T<E;T++){const w=Array.isArray(M[T])?M[T]:[M[T]];for(let S=0,A=w.length;S<A;S++){const F=w[S],U=Array.isArray(F.value)?F.value:[F.value];for(let B=0,D=U.length;B<D;B++){const I=U[B],z=_(I),O=x%b,q=O%z.boundary,$=O+q;x+=q,$!==0&&b-$<z.storage&&(x+=b-$),F.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=z.storage}}}const y=x%b;return y>0&&(x+=b-y),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Bg{constructor(t={}){const{canvas:e=Rf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ce,this.toneMapping=fi,this.toneMappingExposure=1;const x=this;let b=!1,y=0,T=0,E=null,w=-1,S=null;const A=new ge,F=new ge;let U=null;const B=new Ot(0);let D=0,I=e.width,z=e.height,O=1,q=null,$=null;const k=new ge(0,0,I,z),rt=new ge(0,0,I,z);let dt=!1;const G=new fc;let Z=!1,ht=!1;const it=new Jt,mt=new Jt,Rt=new N,xt=new ge,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let V=!1;function j(){return E===null?O:1}let L=n;function ot(C,W){return e.getContext(C,W)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ec}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),L===null){const W="webgl2";if(L=ot(W,C),L===null)throw ot(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Q,ct,st,Mt,ft,P,R,Y,tt,lt,nt,At,vt,bt,Vt,gt,Ct,zt,Gt,Pt,te,$t,he,H;function St(){Q=new Wm(L),Q.init(),$t=new Cg(L,Q),ct=new zm(L,Q,t,$t),st=new Tg(L,Q),ct.reverseDepthBuffer&&f&&st.buffers.depth.setReversed(!0),Mt=new Ym(L),ft=new ug,P=new Rg(L,Q,st,ft,ct,$t,Mt),R=new km(x),Y=new Vm(x),tt=new td(L),he=new Om(L,tt),lt=new Xm(L,tt,Mt,he),nt=new jm(L,lt,tt,Mt),Gt=new $m(L,ct,P),gt=new Bm(ft),At=new hg(x,R,Y,Q,ct,he,gt),vt=new Fg(x,ft),bt=new dg,Vt=new vg(Q),zt=new Nm(x,R,Y,st,nt,d,c),Ct=new Eg(x,nt,ct),H=new zg(L,Mt,ct,st),Pt=new Fm(L,Q,Mt),te=new qm(L,Q,Mt),Mt.programs=At.programs,x.capabilities=ct,x.extensions=Q,x.properties=ft,x.renderLists=bt,x.shadowMap=Ct,x.state=st,x.info=Mt}St();const et=new Ng(x,L);this.xr=et,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=Q.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Q.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(I,z,!1))},this.getSize=function(C){return C.set(I,z)},this.setSize=function(C,W,K=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,z=W,e.width=Math.floor(C*O),e.height=Math.floor(W*O),K===!0&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(I*O,z*O).floor()},this.setDrawingBufferSize=function(C,W,K){I=C,z=W,O=K,e.width=Math.floor(C*K),e.height=Math.floor(W*K),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(k)},this.setViewport=function(C,W,K,J){C.isVector4?k.set(C.x,C.y,C.z,C.w):k.set(C,W,K,J),st.viewport(A.copy(k).multiplyScalar(O).round())},this.getScissor=function(C){return C.copy(rt)},this.setScissor=function(C,W,K,J){C.isVector4?rt.set(C.x,C.y,C.z,C.w):rt.set(C,W,K,J),st.scissor(F.copy(rt).multiplyScalar(O).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(C){st.setScissorTest(dt=C)},this.setOpaqueSort=function(C){q=C},this.setTransparentSort=function(C){$=C},this.getClearColor=function(C){return C.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(C=!0,W=!0,K=!0){let J=0;if(C){let X=!1;if(E!==null){const _t=E.texture.format;X=_t===hc||_t===lc||_t===cc}if(X){const _t=E.texture.type,wt=_t===jn||_t===zi||_t===js||_t===Ms||_t===rc||_t===oc,Lt=zt.getClearColor(),Dt=zt.getClearAlpha(),Wt=Lt.r,qt=Lt.g,It=Lt.b;wt?(g[0]=Wt,g[1]=qt,g[2]=It,g[3]=Dt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Wt,_[1]=qt,_[2]=It,_[3]=Dt,L.clearBufferiv(L.COLOR,0,_))}else J|=L.COLOR_BUFFER_BIT}W&&(J|=L.DEPTH_BUFFER_BIT),K&&(J|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),bt.dispose(),Vt.dispose(),ft.dispose(),R.dispose(),Y.dispose(),nt.dispose(),he.dispose(),H.dispose(),At.dispose(),et.dispose(),et.removeEventListener("sessionstart",Pc),et.removeEventListener("sessionend",Lc),Mi.stop()};function ut(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=Mt.autoReset,W=Ct.enabled,K=Ct.autoUpdate,J=Ct.needsUpdate,X=Ct.type;St(),Mt.autoReset=C,Ct.enabled=W,Ct.autoUpdate=K,Ct.needsUpdate=J,Ct.type=X}function Et(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Xt(C){const W=C.target;W.removeEventListener("dispose",Xt),Me(W)}function Me(C){Ne(C),ft.remove(C)}function Ne(C){const W=ft.get(C).programs;W!==void 0&&(W.forEach(function(K){At.releaseProgram(K)}),C.isShaderMaterial&&At.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,K,J,X,_t){W===null&&(W=at);const wt=X.isMesh&&X.matrixWorld.determinant()<0,Lt=Ou(C,W,K,J,X);st.setMaterial(J,wt);let Dt=K.index,Wt=1;if(J.wireframe===!0){if(Dt=lt.getWireframeAttribute(K),Dt===void 0)return;Wt=2}const qt=K.drawRange,It=K.attributes.position;let ne=qt.start*Wt,ue=(qt.start+qt.count)*Wt;_t!==null&&(ne=Math.max(ne,_t.start*Wt),ue=Math.min(ue,(_t.start+_t.count)*Wt)),Dt!==null?(ne=Math.max(ne,0),ue=Math.min(ue,Dt.count)):It!=null&&(ne=Math.max(ne,0),ue=Math.min(ue,It.count));const de=ue-ne;if(de<0||de===1/0)return;he.setup(X,J,Lt,K,Dt);let Ge,ie=Pt;if(Dt!==null&&(Ge=tt.get(Dt),ie=te,ie.setIndex(Ge)),X.isMesh)J.wireframe===!0?(st.setLineWidth(J.wireframeLinewidth*j()),ie.setMode(L.LINES)):ie.setMode(L.TRIANGLES);else if(X.isLine){let Ut=J.linewidth;Ut===void 0&&(Ut=1),st.setLineWidth(Ut*j()),X.isLineSegments?ie.setMode(L.LINES):X.isLineLoop?ie.setMode(L.LINE_LOOP):ie.setMode(L.LINE_STRIP)}else X.isPoints?ie.setMode(L.POINTS):X.isSprite&&ie.setMode(L.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ie.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ie.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ut=X._multiDrawStarts,In=X._multiDrawCounts,se=X._multiDrawCount,dn=Dt?tt.get(Dt).bytesPerElement:1,Wi=ft.get(J).currentProgram.getUniforms();for(let je=0;je<se;je++)Wi.setValue(L,"_gl_DrawID",je),ie.render(Ut[je]/dn,In[je])}else if(X.isInstancedMesh)ie.renderInstances(ne,de,X.count);else if(K.isInstancedBufferGeometry){const Ut=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,In=Math.min(K.instanceCount,Ut);ie.renderInstances(ne,de,In)}else ie.render(ne,de)};function re(C,W,K){C.transparent===!0&&C.side===fe&&C.forceSinglePass===!1?(C.side=ke,C.needsUpdate=!0,lr(C,W,K),C.side=mi,C.needsUpdate=!0,lr(C,W,K),C.side=fe):lr(C,W,K)}this.compile=function(C,W,K=null){K===null&&(K=C),p=Vt.get(K),p.init(W),M.push(p),K.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),C!==K&&C.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const J=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const _t=X.material;if(_t)if(Array.isArray(_t))for(let wt=0;wt<_t.length;wt++){const Lt=_t[wt];re(Lt,K,X),J.add(Lt)}else re(_t,K,X),J.add(_t)}),M.pop(),p=null,J},this.compileAsync=function(C,W,K=null){const J=this.compile(C,W,K);return new Promise(X=>{function _t(){if(J.forEach(function(wt){ft.get(wt).currentProgram.isReady()&&J.delete(wt)}),J.size===0){X(C);return}setTimeout(_t,10)}Q.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let fn=null;function Dn(C){fn&&fn(C)}function Pc(){Mi.stop()}function Lc(){Mi.start()}const Mi=new Xh;Mi.setAnimationLoop(Dn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(C){fn=C,et.setAnimationLoop(C),C===null?Mi.stop():Mi.start()},et.addEventListener("sessionstart",Pc),et.addEventListener("sessionend",Lc),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(W),W=et.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,W,E),p=Vt.get(C,M.length),p.init(W),M.push(p),mt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),G.setFromProjectionMatrix(mt),ht=this.localClippingEnabled,Z=gt.init(this.clippingPlanes,ht),m=bt.get(C,v.length),m.init(),v.push(m),et.enabled===!0&&et.isPresenting===!0){const _t=x.xr.getDepthSensingMesh();_t!==null&&fo(_t,W,-1/0,x.sortObjects)}fo(C,W,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(q,$),V=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,V&&zt.addToRenderList(m,C),this.info.render.frame++,Z===!0&&gt.beginShadows();const K=p.state.shadowsArray;Ct.render(K,C,W),Z===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,X=m.transmissive;if(p.setupLights(),W.isArrayCamera){const _t=W.cameras;if(X.length>0)for(let wt=0,Lt=_t.length;wt<Lt;wt++){const Dt=_t[wt];Ic(J,X,C,Dt)}V&&zt.render(C);for(let wt=0,Lt=_t.length;wt<Lt;wt++){const Dt=_t[wt];Dc(m,C,Dt,Dt.viewport)}}else X.length>0&&Ic(J,X,C,W),V&&zt.render(C),Dc(m,C,W);E!==null&&(P.updateMultisampleRenderTarget(E),P.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(x,C,W),he.resetDefaultState(),w=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],Z===!0&&gt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function fo(C,W,K,J){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||G.intersectsSprite(C)){J&&xt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(mt);const wt=nt.update(C),Lt=C.material;Lt.visible&&m.push(C,wt,Lt,K,xt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||G.intersectsObject(C))){const wt=nt.update(C),Lt=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),xt.copy(C.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),xt.copy(wt.boundingSphere.center)),xt.applyMatrix4(C.matrixWorld).applyMatrix4(mt)),Array.isArray(Lt)){const Dt=wt.groups;for(let Wt=0,qt=Dt.length;Wt<qt;Wt++){const It=Dt[Wt],ne=Lt[It.materialIndex];ne&&ne.visible&&m.push(C,wt,ne,K,xt.z,It)}}else Lt.visible&&m.push(C,wt,Lt,K,xt.z,null)}}const _t=C.children;for(let wt=0,Lt=_t.length;wt<Lt;wt++)fo(_t[wt],W,K,J)}function Dc(C,W,K,J){const X=C.opaque,_t=C.transmissive,wt=C.transparent;p.setupLightsView(K),Z===!0&&gt.setGlobalState(x.clippingPlanes,K),J&&st.viewport(A.copy(J)),X.length>0&&cr(X,W,K),_t.length>0&&cr(_t,W,K),wt.length>0&&cr(wt,W,K),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Ic(C,W,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new xi(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?ir:jn,minFilter:Ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const _t=p.state.transmissionRenderTarget[J.id],wt=J.viewport||A;_t.setSize(wt.z,wt.w);const Lt=x.getRenderTarget();x.setRenderTarget(_t),x.getClearColor(B),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear(),V&&zt.render(K);const Dt=x.toneMapping;x.toneMapping=fi;const Wt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),Z===!0&&gt.setGlobalState(x.clippingPlanes,J),cr(C,K,J),P.updateMultisampleRenderTarget(_t),P.updateRenderTargetMipmap(_t),Q.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let It=0,ne=W.length;It<ne;It++){const ue=W[It],de=ue.object,Ge=ue.geometry,ie=ue.material,Ut=ue.group;if(ie.side===fe&&de.layers.test(J.layers)){const In=ie.side;ie.side=ke,ie.needsUpdate=!0,Uc(de,K,J,Ge,ie,Ut),ie.side=In,ie.needsUpdate=!0,qt=!0}}qt===!0&&(P.updateMultisampleRenderTarget(_t),P.updateRenderTargetMipmap(_t))}x.setRenderTarget(Lt),x.setClearColor(B,D),Wt!==void 0&&(J.viewport=Wt),x.toneMapping=Dt}function cr(C,W,K){const J=W.isScene===!0?W.overrideMaterial:null;for(let X=0,_t=C.length;X<_t;X++){const wt=C[X],Lt=wt.object,Dt=wt.geometry,Wt=J===null?wt.material:J,qt=wt.group;Lt.layers.test(K.layers)&&Uc(Lt,W,K,Dt,Wt,qt)}}function Uc(C,W,K,J,X,_t){C.onBeforeRender(x,W,K,J,X,_t),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(x,W,K,J,C,_t),X.transparent===!0&&X.side===fe&&X.forceSinglePass===!1?(X.side=ke,X.needsUpdate=!0,x.renderBufferDirect(K,W,J,X,C,_t),X.side=mi,X.needsUpdate=!0,x.renderBufferDirect(K,W,J,X,C,_t),X.side=fe):x.renderBufferDirect(K,W,J,X,C,_t),C.onAfterRender(x,W,K,J,X,_t)}function lr(C,W,K){W.isScene!==!0&&(W=at);const J=ft.get(C),X=p.state.lights,_t=p.state.shadowsArray,wt=X.state.version,Lt=At.getParameters(C,X.state,_t,W,K),Dt=At.getProgramCacheKey(Lt);let Wt=J.programs;J.environment=C.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(C.isMeshStandardMaterial?Y:R).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Wt===void 0&&(C.addEventListener("dispose",Xt),Wt=new Map,J.programs=Wt);let qt=Wt.get(Dt);if(qt!==void 0){if(J.currentProgram===qt&&J.lightsStateVersion===wt)return Oc(C,Lt),qt}else Lt.uniforms=At.getUniforms(C),C.onBeforeCompile(Lt,x),qt=At.acquireProgram(Lt,Dt),Wt.set(Dt,qt),J.uniforms=Lt.uniforms;const It=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(It.clippingPlanes=gt.uniform),Oc(C,Lt),J.needsLights=zu(C),J.lightsStateVersion=wt,J.needsLights&&(It.ambientLightColor.value=X.state.ambient,It.lightProbe.value=X.state.probe,It.directionalLights.value=X.state.directional,It.directionalLightShadows.value=X.state.directionalShadow,It.spotLights.value=X.state.spot,It.spotLightShadows.value=X.state.spotShadow,It.rectAreaLights.value=X.state.rectArea,It.ltc_1.value=X.state.rectAreaLTC1,It.ltc_2.value=X.state.rectAreaLTC2,It.pointLights.value=X.state.point,It.pointLightShadows.value=X.state.pointShadow,It.hemisphereLights.value=X.state.hemi,It.directionalShadowMap.value=X.state.directionalShadowMap,It.directionalShadowMatrix.value=X.state.directionalShadowMatrix,It.spotShadowMap.value=X.state.spotShadowMap,It.spotLightMatrix.value=X.state.spotLightMatrix,It.spotLightMap.value=X.state.spotLightMap,It.pointShadowMap.value=X.state.pointShadowMap,It.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=qt,J.uniformsList=null,qt}function Nc(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=jr.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Oc(C,W){const K=ft.get(C);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function Ou(C,W,K,J,X){W.isScene!==!0&&(W=at),P.resetTextureUnits();const _t=W.fog,wt=J.isMeshStandardMaterial?W.environment:null,Lt=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ws,Dt=(J.isMeshStandardMaterial?Y:R).get(J.envMap||wt),Wt=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,qt=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),It=!!K.morphAttributes.position,ne=!!K.morphAttributes.normal,ue=!!K.morphAttributes.color;let de=fi;J.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(de=x.toneMapping);const Ge=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ie=Ge!==void 0?Ge.length:0,Ut=ft.get(J),In=p.state.lights;if(Z===!0&&(ht===!0||C!==S)){const on=C===S&&J.id===w;gt.setState(J,C,on)}let se=!1;J.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==In.state.version||Ut.outputColorSpace!==Lt||X.isBatchedMesh&&Ut.batching===!1||!X.isBatchedMesh&&Ut.batching===!0||X.isBatchedMesh&&Ut.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ut.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ut.instancing===!1||!X.isInstancedMesh&&Ut.instancing===!0||X.isSkinnedMesh&&Ut.skinning===!1||!X.isSkinnedMesh&&Ut.skinning===!0||X.isInstancedMesh&&Ut.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ut.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ut.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ut.instancingMorph===!1&&X.morphTexture!==null||Ut.envMap!==Dt||J.fog===!0&&Ut.fog!==_t||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==gt.numPlanes||Ut.numIntersection!==gt.numIntersection)||Ut.vertexAlphas!==Wt||Ut.vertexTangents!==qt||Ut.morphTargets!==It||Ut.morphNormals!==ne||Ut.morphColors!==ue||Ut.toneMapping!==de||Ut.morphTargetsCount!==ie)&&(se=!0):(se=!0,Ut.__version=J.version);let dn=Ut.currentProgram;se===!0&&(dn=lr(J,W,X));let Wi=!1,je=!1,Ls=!1;const pe=dn.getUniforms(),wn=Ut.uniforms;if(st.useProgram(dn.program)&&(Wi=!0,je=!0,Ls=!0),J.id!==w&&(w=J.id,je=!0),Wi||S!==C){st.buffers.depth.getReversed()?(it.copy(C.projectionMatrix),Pf(it),Lf(it),pe.setValue(L,"projectionMatrix",it)):pe.setValue(L,"projectionMatrix",C.projectionMatrix),pe.setValue(L,"viewMatrix",C.matrixWorldInverse);const Kn=pe.map.cameraPosition;Kn!==void 0&&Kn.setValue(L,Rt.setFromMatrixPosition(C.matrixWorld)),ct.logarithmicDepthBuffer&&pe.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&pe.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,je=!0,Ls=!0)}if(X.isSkinnedMesh){pe.setOptional(L,X,"bindMatrix"),pe.setOptional(L,X,"bindMatrixInverse");const on=X.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),pe.setValue(L,"boneTexture",on.boneTexture,P))}X.isBatchedMesh&&(pe.setOptional(L,X,"batchingTexture"),pe.setValue(L,"batchingTexture",X._matricesTexture,P),pe.setOptional(L,X,"batchingIdTexture"),pe.setValue(L,"batchingIdTexture",X._indirectTexture,P),pe.setOptional(L,X,"batchingColorTexture"),X._colorsTexture!==null&&pe.setValue(L,"batchingColorTexture",X._colorsTexture,P));const Ds=K.morphAttributes;if((Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0)&&Gt.update(X,K,dn),(je||Ut.receiveShadow!==X.receiveShadow)&&(Ut.receiveShadow=X.receiveShadow,pe.setValue(L,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(wn.envMap.value=Dt,wn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(wn.envMapIntensity.value=W.environmentIntensity),je&&(pe.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ut.needsLights&&Fu(wn,Ls),_t&&J.fog===!0&&vt.refreshFogUniforms(wn,_t),vt.refreshMaterialUniforms(wn,J,O,z,p.state.transmissionRenderTarget[C.id]),jr.upload(L,Nc(Ut),wn,P)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(jr.upload(L,Nc(Ut),wn,P),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&pe.setValue(L,"center",X.center),pe.setValue(L,"modelViewMatrix",X.modelViewMatrix),pe.setValue(L,"normalMatrix",X.normalMatrix),pe.setValue(L,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const on=J.uniformsGroups;for(let Kn=0,Jn=on.length;Kn<Jn;Kn++){const Fc=on[Kn];H.update(Fc,dn),H.bind(Fc,dn)}}return dn}function Fu(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function zu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,W,K){ft.get(C.texture).__webglTexture=W,ft.get(C.depthTexture).__webglTexture=K;const J=ft.get(C);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const K=ft.get(C);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,K=0){E=C,y=W,T=K;let J=!0,X=null,_t=!1,wt=!1;if(C){const Dt=ft.get(C);if(Dt.__useDefaultFramebuffer!==void 0)st.bindFramebuffer(L.FRAMEBUFFER,null),J=!1;else if(Dt.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(Dt.__hasExternalTextures)P.rebindTextures(C,ft.get(C.texture).__webglTexture,ft.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const It=C.depthTexture;if(Dt.__boundDepthTexture!==It){if(It!==null&&ft.has(It)&&(C.width!==It.image.width||C.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}const Wt=C.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(wt=!0);const qt=ft.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qt[W])?X=qt[W][K]:X=qt[W],_t=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?X=ft.get(C).__webglMultisampledFramebuffer:Array.isArray(qt)?X=qt[K]:X=qt,A.copy(C.viewport),F.copy(C.scissor),U=C.scissorTest}else A.copy(k).multiplyScalar(O).floor(),F.copy(rt).multiplyScalar(O).floor(),U=dt;if(st.bindFramebuffer(L.FRAMEBUFFER,X)&&J&&st.drawBuffers(C,X),st.viewport(A),st.scissor(F),st.setScissorTest(U),_t){const Dt=ft.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+W,Dt.__webglTexture,K)}else if(wt){const Dt=ft.get(C.texture),Wt=W||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Dt.__webglTexture,K||0,Wt)}w=-1},this.readRenderTargetPixels=function(C,W,K,J,X,_t,wt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=ft.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt){st.bindFramebuffer(L.FRAMEBUFFER,Lt);try{const Dt=C.texture,Wt=Dt.format,qt=Dt.type;if(!ct.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-J&&K>=0&&K<=C.height-X&&L.readPixels(W,K,J,X,$t.convert(Wt),$t.convert(qt),_t)}finally{const Dt=E!==null?ft.get(E).__webglFramebuffer:null;st.bindFramebuffer(L.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(C,W,K,J,X,_t,wt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=ft.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt){const Dt=C.texture,Wt=Dt.format,qt=Dt.type;if(!ct.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-J&&K>=0&&K<=C.height-X){st.bindFramebuffer(L.FRAMEBUFFER,Lt);const It=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,It),L.bufferData(L.PIXEL_PACK_BUFFER,_t.byteLength,L.STREAM_READ),L.readPixels(W,K,J,X,$t.convert(Wt),$t.convert(qt),0);const ne=E!==null?ft.get(E).__webglFramebuffer:null;st.bindFramebuffer(L.FRAMEBUFFER,ne);const ue=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Cf(L,ue,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,It),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,_t),L.deleteBuffer(It),L.deleteSync(ue),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,W=null,K=0){C.isTexture!==!0&&(ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const J=Math.pow(2,-K),X=Math.floor(C.image.width*J),_t=Math.floor(C.image.height*J),wt=W!==null?W.x:0,Lt=W!==null?W.y:0;P.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,wt,Lt,X,_t),st.unbindTexture()},this.copyTextureToTexture=function(C,W,K=null,J=null,X=0){C.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,C=arguments[1],W=arguments[2],X=arguments[3]||0,K=null);let _t,wt,Lt,Dt,Wt,qt,It,ne,ue;const de=C.isCompressedTexture?C.mipmaps[X]:C.image;K!==null?(_t=K.max.x-K.min.x,wt=K.max.y-K.min.y,Lt=K.isBox3?K.max.z-K.min.z:1,Dt=K.min.x,Wt=K.min.y,qt=K.isBox3?K.min.z:0):(_t=de.width,wt=de.height,Lt=de.depth||1,Dt=0,Wt=0,qt=0),J!==null?(It=J.x,ne=J.y,ue=J.z):(It=0,ne=0,ue=0);const Ge=$t.convert(W.format),ie=$t.convert(W.type);let Ut;W.isData3DTexture?(P.setTexture3D(W,0),Ut=L.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(P.setTexture2DArray(W,0),Ut=L.TEXTURE_2D_ARRAY):(P.setTexture2D(W,0),Ut=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,W.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,W.unpackAlignment);const In=L.getParameter(L.UNPACK_ROW_LENGTH),se=L.getParameter(L.UNPACK_IMAGE_HEIGHT),dn=L.getParameter(L.UNPACK_SKIP_PIXELS),Wi=L.getParameter(L.UNPACK_SKIP_ROWS),je=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,de.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,de.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Dt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qt);const Ls=C.isDataArrayTexture||C.isData3DTexture,pe=W.isDataArrayTexture||W.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const wn=ft.get(C),Ds=ft.get(W),on=ft.get(wn.__renderTarget),Kn=ft.get(Ds.__renderTarget);st.bindFramebuffer(L.READ_FRAMEBUFFER,on.__webglFramebuffer),st.bindFramebuffer(L.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Jn=0;Jn<Lt;Jn++)Ls&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ft.get(C).__webglTexture,X,qt+Jn),C.isDepthTexture?(pe&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ft.get(W).__webglTexture,X,ue+Jn),L.blitFramebuffer(Dt,Wt,_t,wt,It,ne,_t,wt,L.DEPTH_BUFFER_BIT,L.NEAREST)):pe?L.copyTexSubImage3D(Ut,X,It,ne,ue+Jn,Dt,Wt,_t,wt):L.copyTexSubImage2D(Ut,X,It,ne,ue+Jn,Dt,Wt,_t,wt);st.bindFramebuffer(L.READ_FRAMEBUFFER,null),st.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pe?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(Ut,X,It,ne,ue,_t,wt,Lt,Ge,ie,de.data):W.isCompressedArrayTexture?L.compressedTexSubImage3D(Ut,X,It,ne,ue,_t,wt,Lt,Ge,de.data):L.texSubImage3D(Ut,X,It,ne,ue,_t,wt,Lt,Ge,ie,de):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,X,It,ne,_t,wt,Ge,ie,de.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,X,It,ne,de.width,de.height,Ge,de.data):L.texSubImage2D(L.TEXTURE_2D,X,It,ne,_t,wt,Ge,ie,de);L.pixelStorei(L.UNPACK_ROW_LENGTH,In),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,se),L.pixelStorei(L.UNPACK_SKIP_PIXELS,dn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,je),X===0&&W.generateMipmaps&&L.generateMipmap(Ut),st.unbindTexture()},this.copyTextureToTexture3D=function(C,W,K=null,J=null,X=0){return C.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,J=arguments[1]||null,C=arguments[2],W=arguments[3],X=arguments[4]||0),ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,W,K,J,X)},this.initRenderTarget=function(C){ft.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),st.unbindTexture()},this.resetState=function(){y=0,T=0,E=null,st.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class pc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ot(t),this.density=e}clone(){return new pc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class mc extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gc extends Ue{constructor(t=null,e=1,n=1,s,r,o,a,c,l=sn,h=sn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ks extends ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const rs=new Jt,Nl=new Jt,Lr=[],Ol=new Vi,kg=new Jt,zs=new Kt,Bs=new As;class rn extends Kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ks(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,kg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rs),Ol.copy(t.boundingBox).applyMatrix4(rs),this.boundingBox.union(Ol)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new As),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rs),Bs.copy(t.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(Bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),t.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rs),Nl.multiplyMatrices(n,rs),zs.matrixWorld=Nl,zs.raycast(t,Lr);for(let o=0,a=Lr.length;o<a;o++){const c=Lr[o];c.instanceId=r,c.object=this,e.push(c)}Lr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ks(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gc(new Float32Array(s*this.count),s,this.count,ac,Cn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class xc extends Rs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Fl=new Jt,Wa=new uc,Dr=new As,Ir=new N;class Kh extends Re{constructor(t=new Qt,e=new xc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,t.ray.intersectsSphere(Dr)===!1)return;Fl.copy(s).invert(),Wa.copy(t.ray).applyMatrix4(Fl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);Ir.fromBufferAttribute(u,m),zl(Ir,m,c,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Ir.fromBufferAttribute(u,g),zl(Ir,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function zl(i,t,e,n,s,r,o){const a=Wa.distanceSqToPoint(i);if(a<e){const c=new N;Wa.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class En extends Ue{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new pt:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,s=[],r=[],o=[],a=new N,c=new Jt;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(De(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(De(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class _c extends Ln{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new pt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Hg extends _c{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function vc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Ur=new N,Vo=new vc,Wo=new vc,Xo=new vc;class Gg extends Ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Ur.subVectors(s[0],s[1]).add(s[0]),l=Ur);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ur.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ur),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Vo.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),Wo.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Xo.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Vo.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Wo.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Xo.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Vo.calc(c),Wo.calc(c),Xo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Bl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Vg(i,t){const e=1-i;return e*e*t}function Wg(i,t){return 2*(1-i)*i*t}function Xg(i,t){return i*i*t}function Gs(i,t,e,n){return Vg(i,t)+Wg(i,e)+Xg(i,n)}function qg(i,t){const e=1-i;return e*e*e*t}function Yg(i,t){const e=1-i;return 3*e*e*i*t}function $g(i,t){return 3*(1-i)*i*i*t}function jg(i,t){return i*i*i*t}function Vs(i,t,e,n,s){return qg(i,t)+Yg(i,e)+$g(i,n)+jg(i,s)}class Jh extends Ln{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vs(t,s.x,r.x,o.x,a.x),Vs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zg extends Ln{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vs(t,s.x,r.x,o.x,a.x),Vs(t,s.y,r.y,o.y,a.y),Vs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qh extends Ln{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kg extends Ln{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tu extends Ln{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jg extends Ln{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y),Gs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eu extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Bl(a,c.x,l.x,h.x,u.x),Bl(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var Xa=Object.freeze({__proto__:null,ArcCurve:Hg,CatmullRomCurve3:Gg,CubicBezierCurve:Jh,CubicBezierCurve3:Zg,EllipseCurve:_c,LineCurve:Qh,LineCurve3:Kg,QuadraticBezierCurve:tu,QuadraticBezierCurve3:Jg,SplineCurve:eu});class Qg extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Xa[s.type]().fromJSON(s))}return this}}class kl extends Qg{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Qh(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new tu(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Jh(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new eu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new _c(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Mc extends Qt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new N,h=new pt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(a,3)),this.setAttribute("uv",new Ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ee extends Qt{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(d,2));function v(){const x=new N,b=new N;let y=0;const T=(e-t)/n;for(let E=0;E<=r;E++){const w=[],S=E/r,A=S*(e-t)+t;for(let F=0;F<=s;F++){const U=F/s,B=U*c+a,D=Math.sin(B),I=Math.cos(B);b.x=A*D,b.y=-S*n+m,b.z=A*I,u.push(b.x,b.y,b.z),x.set(D,T,I).normalize(),f.push(x.x,x.y,x.z),d.push(U,1-S),w.push(g++)}_.push(w)}for(let E=0;E<s;E++)for(let w=0;w<r;w++){const S=_[w][E],A=_[w+1][E],F=_[w+1][E+1],U=_[w][E+1];(t>0||w!==0)&&(h.push(S,A,U),y+=3),(e>0||w!==r-1)&&(h.push(A,F,U),y+=3)}l.addGroup(p,y,0),p+=y}function M(x){const b=g,y=new pt,T=new N;let E=0;const w=x===!0?t:e,S=x===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;const A=g;for(let F=0;F<=s;F++){const B=F/s*c+a,D=Math.cos(B),I=Math.sin(B);T.x=w*I,T.y=m*S,T.z=w*D,u.push(T.x,T.y,T.z),f.push(0,S,0),y.x=D*.5+.5,y.y=I*.5*S+.5,d.push(y.x,y.y),g++}for(let F=0;F<s;F++){const U=b+F,B=A+F;x===!0?h.push(B,B+1,U):h.push(B+1,B,U),E+=3}l.addGroup(p,E,x===!0?1:2),p+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Js extends Ee{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Js(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yc extends Qt{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(r.slice(),3)),this.setAttribute("uv",new Ht(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new N,x=new N,b=new N;for(let y=0;y<e.length;y+=3)d(e[y+0],M),d(e[y+1],x),d(e[y+2],b),c(M,x,b,v)}function c(v,M,x,b){const y=b+1,T=[];for(let E=0;E<=y;E++){T[E]=[];const w=v.clone().lerp(x,E/y),S=M.clone().lerp(x,E/y),A=y-E;for(let F=0;F<=A;F++)F===0&&E===y?T[E][F]=w:T[E][F]=w.clone().lerp(S,F/A)}for(let E=0;E<y;E++)for(let w=0;w<2*(y-E)-1;w++){const S=Math.floor(w/2);w%2===0?(f(T[E][S+1]),f(T[E+1][S]),f(T[E][S])):(f(T[E][S+1]),f(T[E+1][S+1]),f(T[E+1][S]))}}function l(v){const M=new N;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(v),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){const v=new N;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const x=m(v)/2/Math.PI+.5,b=p(v)/Math.PI+.5;o.push(x,1-b)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const M=o[v+0],x=o[v+2],b=o[v+4],y=Math.max(M,x,b),T=Math.min(M,x,b);y>.9&&T<.1&&(M<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,M){const x=v*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function g(){const v=new N,M=new N,x=new N,b=new N,y=new pt,T=new pt,E=new pt;for(let w=0,S=0;w<r.length;w+=9,S+=6){v.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),y.set(o[S+0],o[S+1]),T.set(o[S+2],o[S+3]),E.set(o[S+4],o[S+5]),b.copy(v).add(M).add(x).divideScalar(3);const A=m(b);_(y,S+0,v,A),_(T,S+2,M,A),_(E,S+4,x,A)}}function _(v,M,x,b){b<0&&v.x===1&&(o[M]=v.x-1),x.x===0&&x.z===0&&(o[M]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yc(t.vertices,t.indices,t.radius,t.details)}}class di extends kl{constructor(t){super(t),this.uuid=Ts(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new kl().fromJSON(s))}return this}}const tx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=nu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=rx(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Qs(r,o,e,a,c,d,0),o}};function nu(i,t,e,n,s){let r,o;if(s===gx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Hl(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Hl(r,i[r],i[r+1],o);return o&&oo(o,o.next)&&(er(o),o=o.next),o}function Bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(oo(e,e.next)||xe(e.prev,e,e.next)===0)){if(er(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&hx(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?nx(i,n,s,r):ex(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),er(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=ix(Bi(i),t,e),Qs(i,t,e,n,s,r,2)):o===2&&sx(i,t,e,n,s,r):Qs(Bi(i),t,e,n,s,r,1);break}}}function ex(i){const t=i.prev,e=i,n=i.next;if(xe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&fs(s,a,r,c,o,l,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function nx(i,t,e,n){const s=i.prev,r=i,o=i.next;if(xe(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=qa(d,g,t,e,n),v=qa(_,m,t,e,n);let M=i.prevZ,x=i.nextZ;for(;M&&M.z>=p&&x&&x.z<=v;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&fs(a,h,c,u,l,f,M.x,M.y)&&xe(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&fs(a,h,c,u,l,f,x.x,x.y)&&xe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&fs(a,h,c,u,l,f,M.x,M.y)&&xe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&fs(a,h,c,u,l,f,x.x,x.y)&&xe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function ix(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!oo(s,r)&&iu(s,n,n.next,r)&&tr(s,r)&&tr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),er(n),er(n.next),n=i=r),n=n.next}while(n!==i);return Bi(n)}function sx(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&dx(o,a)){let c=su(o,a);o=Bi(o,o.next),c=Bi(c,c.next),Qs(o,t,e,n,s,r,0),Qs(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function rx(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=nu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(fx(l));for(s.sort(ox),r=0;r<s.length;r++)e=ax(s[r],e);return e}function ox(i,t){return i.x-t.x}function ax(i,t){const e=cx(i,t);if(!e)return t;const n=su(e,i);return Bi(n,n.next),Bi(e,e.next)}function cx(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&fs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),tr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&lx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function lx(i,t){return xe(i.prev,i,t.prev)<0&&xe(t.next,i,i.next)<0}function hx(i,t,e,n){let s=i;do s.z===0&&(s.z=qa(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ux(s)}function ux(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function qa(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function fx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function fs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function dx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!px(i,t)&&(tr(i,t)&&tr(t,i)&&mx(i,t)&&(xe(i.prev,i,t.prev)||xe(i,t.prev,t))||oo(i,t)&&xe(i.prev,i,i.next)>0&&xe(t.prev,t,t.next)>0)}function xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function oo(i,t){return i.x===t.x&&i.y===t.y}function iu(i,t,e,n){const s=Or(xe(i,t,e)),r=Or(xe(i,t,n)),o=Or(xe(e,n,i)),a=Or(xe(e,n,t));return!!(s!==r&&o!==a||s===0&&Nr(i,e,t)||r===0&&Nr(i,n,t)||o===0&&Nr(e,i,n)||a===0&&Nr(e,t,n))}function Nr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Or(i){return i>0?1:i<0?-1:0}function px(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&iu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function tr(i,t){return xe(i.prev,i,i.next)<0?xe(i,t,i.next)>=0&&xe(i,i.prev,t)>=0:xe(i,t,i.prev)<0||xe(i,i.next,t)<0}function mx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function su(i,t){const e=new Ya(i.i,i.x,i.y),n=new Ya(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Hl(i,t,e,n){const s=new Ya(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ya(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Pn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Pn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Gl(t),Vl(n,t);let o=t.length;e.forEach(Gl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Vl(n,e[c]);const a=tx.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Gl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Vl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class $n extends Qt{constructor(t=new di([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Ht(s,3)),this.setAttribute("uv",new Ht(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:xx;let M,x=!1,b,y,T,E;p&&(M=p.getSpacedPoints(h),x=!0,f=!1,b=p.computeFrenetFrames(h,!1),y=new N,T=new N,E=new N),f||(m=0,d=0,g=0,_=0);const w=a.extractPoints(l);let S=w.shape;const A=w.holes;if(!Pn.isClockWise(S)){S=S.reverse();for(let V=0,j=A.length;V<j;V++){const L=A[V];Pn.isClockWise(L)&&(A[V]=L.reverse())}}const U=Pn.triangulateShape(S,A),B=S;for(let V=0,j=A.length;V<j;V++){const L=A[V];S=S.concat(L)}function D(V,j,L){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(j,L)}const I=S.length,z=U.length;function O(V,j,L){let ot,Q,ct;const st=V.x-j.x,Mt=V.y-j.y,ft=L.x-V.x,P=L.y-V.y,R=st*st+Mt*Mt,Y=st*P-Mt*ft;if(Math.abs(Y)>Number.EPSILON){const tt=Math.sqrt(R),lt=Math.sqrt(ft*ft+P*P),nt=j.x-Mt/tt,At=j.y+st/tt,vt=L.x-P/lt,bt=L.y+ft/lt,Vt=((vt-nt)*P-(bt-At)*ft)/(st*P-Mt*ft);ot=nt+st*Vt-V.x,Q=At+Mt*Vt-V.y;const gt=ot*ot+Q*Q;if(gt<=2)return new pt(ot,Q);ct=Math.sqrt(gt/2)}else{let tt=!1;st>Number.EPSILON?ft>Number.EPSILON&&(tt=!0):st<-Number.EPSILON?ft<-Number.EPSILON&&(tt=!0):Math.sign(Mt)===Math.sign(P)&&(tt=!0),tt?(ot=-Mt,Q=st,ct=Math.sqrt(R)):(ot=st,Q=Mt,ct=Math.sqrt(R/2))}return new pt(ot/ct,Q/ct)}const q=[];for(let V=0,j=B.length,L=j-1,ot=V+1;V<j;V++,L++,ot++)L===j&&(L=0),ot===j&&(ot=0),q[V]=O(B[V],B[L],B[ot]);const $=[];let k,rt=q.concat();for(let V=0,j=A.length;V<j;V++){const L=A[V];k=[];for(let ot=0,Q=L.length,ct=Q-1,st=ot+1;ot<Q;ot++,ct++,st++)ct===Q&&(ct=0),st===Q&&(st=0),k[ot]=O(L[ot],L[ct],L[st]);$.push(k),rt=rt.concat(k)}for(let V=0;V<m;V++){const j=V/m,L=d*Math.cos(j*Math.PI/2),ot=g*Math.sin(j*Math.PI/2)+_;for(let Q=0,ct=B.length;Q<ct;Q++){const st=D(B[Q],q[Q],ot);it(st.x,st.y,-L)}for(let Q=0,ct=A.length;Q<ct;Q++){const st=A[Q];k=$[Q];for(let Mt=0,ft=st.length;Mt<ft;Mt++){const P=D(st[Mt],k[Mt],ot);it(P.x,P.y,-L)}}}const dt=g+_;for(let V=0;V<I;V++){const j=f?D(S[V],rt[V],dt):S[V];x?(T.copy(b.normals[0]).multiplyScalar(j.x),y.copy(b.binormals[0]).multiplyScalar(j.y),E.copy(M[0]).add(T).add(y),it(E.x,E.y,E.z)):it(j.x,j.y,0)}for(let V=1;V<=h;V++)for(let j=0;j<I;j++){const L=f?D(S[j],rt[j],dt):S[j];x?(T.copy(b.normals[V]).multiplyScalar(L.x),y.copy(b.binormals[V]).multiplyScalar(L.y),E.copy(M[V]).add(T).add(y),it(E.x,E.y,E.z)):it(L.x,L.y,u/h*V)}for(let V=m-1;V>=0;V--){const j=V/m,L=d*Math.cos(j*Math.PI/2),ot=g*Math.sin(j*Math.PI/2)+_;for(let Q=0,ct=B.length;Q<ct;Q++){const st=D(B[Q],q[Q],ot);it(st.x,st.y,u+L)}for(let Q=0,ct=A.length;Q<ct;Q++){const st=A[Q];k=$[Q];for(let Mt=0,ft=st.length;Mt<ft;Mt++){const P=D(st[Mt],k[Mt],ot);x?it(P.x,P.y+M[h-1].y,M[h-1].x+L):it(P.x,P.y,u+L)}}}G(),Z();function G(){const V=s.length/3;if(f){let j=0,L=I*j;for(let ot=0;ot<z;ot++){const Q=U[ot];mt(Q[2]+L,Q[1]+L,Q[0]+L)}j=h+m*2,L=I*j;for(let ot=0;ot<z;ot++){const Q=U[ot];mt(Q[0]+L,Q[1]+L,Q[2]+L)}}else{for(let j=0;j<z;j++){const L=U[j];mt(L[2],L[1],L[0])}for(let j=0;j<z;j++){const L=U[j];mt(L[0]+I*h,L[1]+I*h,L[2]+I*h)}}n.addGroup(V,s.length/3-V,0)}function Z(){const V=s.length/3;let j=0;ht(B,j),j+=B.length;for(let L=0,ot=A.length;L<ot;L++){const Q=A[L];ht(Q,j),j+=Q.length}n.addGroup(V,s.length/3-V,1)}function ht(V,j){let L=V.length;for(;--L>=0;){const ot=L;let Q=L-1;Q<0&&(Q=V.length-1);for(let ct=0,st=h+m*2;ct<st;ct++){const Mt=I*ct,ft=I*(ct+1),P=j+ot+Mt,R=j+Q+Mt,Y=j+Q+ft,tt=j+ot+ft;Rt(P,R,Y,tt)}}}function it(V,j,L){c.push(V),c.push(j),c.push(L)}function mt(V,j,L){xt(V),xt(j),xt(L);const ot=s.length/3,Q=v.generateTopUV(n,s,ot-3,ot-2,ot-1);at(Q[0]),at(Q[1]),at(Q[2])}function Rt(V,j,L,ot){xt(V),xt(j),xt(ot),xt(j),xt(L),xt(ot);const Q=s.length/3,ct=v.generateSideWallUV(n,s,Q-6,Q-3,Q-2,Q-1);at(ct[0]),at(ct[1]),at(ct[3]),at(ct[1]),at(ct[2]),at(ct[3])}function xt(V){s.push(c[V*3+0]),s.push(c[V*3+1]),s.push(c[V*3+2])}function at(V){r.push(V.x),r.push(V.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return _x(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Xa[s.type]().fromJSON(s)),new $n(n,t.options)}}const xx={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new pt(r,o),new pt(a,c),new pt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new pt(o,1-c),new pt(l,1-u),new pt(f,1-g),new pt(_,1-p)]:[new pt(a,1-c),new pt(h,1-u),new pt(d,1-g),new pt(m,1-p)]}};function _x(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ao extends yc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ao(t.radius,t.detail)}}class He extends Qt{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new N,f=new N,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],M=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){const y=b/e;u.x=-t*Math.cos(s+y*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+y*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(y+x,1-M),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const M=h[p][v+1],x=h[p][v],b=h[p+1][v],y=h[p+1][v+1];(p!==0||o>0)&&d.push(M,x,y),(p!==n-1||c<Math.PI)&&d.push(x,b,y)}this.setIndex(d),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Jr extends Qt{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new N,u=new N,f=new N;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,v=(s+1)*d+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class kt extends Rs{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dh,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Wl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class vx{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const Mx=new vx;class Sc{constructor(t){this.manager=t!==void 0?t:Mx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Sc.DEFAULT_MATERIAL_NAME="__DEFAULT";class yx extends Sc{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Wl.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Zs("img");function c(){h(),Wl.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class $a extends Sc{constructor(t){super(t)}load(t,e,n,s){const r=new Ue,o=new yx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class ru extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Sx extends ru{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const qo=new Jt,Xl=new N,ql=new N;class bx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fc,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xl),ql.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ql),e.updateMatrixWorld(),qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ex extends bx{constructor(){super(new rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ou extends ru{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Ex}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class wx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Yl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Yl(){return performance.now()}class $l{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(De(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Tx extends Gi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);const jl={type:"change"},bc={type:"start"},au={type:"end"},Fr=new uc,Zl=new ai,Ax=Math.cos(70*Af.DEG2RAD),Te=new N,We=2*Math.PI,ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yo=1e-6;class Rx extends Tx{constructor(t,e=null){super(t,e),this.state=ae.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ds.ROTATE,MIDDLE:ds.DOLLY,RIGHT:ds.PAN},this.touches={ONE:hs.ROTATE,TWO:hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new ye,this._lastTargetPosition=new N,this._quat=new ye().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $l,this._sphericalDelta=new $l,this._scale=1,this._panOffset=new N,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new N,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Px.bind(this),this._onPointerDown=Cx.bind(this),this._onPointerUp=Lx.bind(this),this._onContextMenu=zx.bind(this),this._onMouseWheel=Ux.bind(this),this._onKeyDown=Nx.bind(this),this._onTouchStart=Ox.bind(this),this._onTouchMove=Fx.bind(this),this._onMouseDown=Dx.bind(this),this._onMouseMove=Ix.bind(this),this._interceptControlDown=Bx.bind(this),this._interceptControlUp=kx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jl),this.update(),this.state=ae.NONE}update(t=null){const e=this.object.position;Te.copy(e).sub(this.target),Te.applyQuaternion(this._quat),this._spherical.setFromVector3(Te),this.autoRotate&&this.state===ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=We:n>Math.PI&&(n-=We),s<-Math.PI?s+=We:s>Math.PI&&(s-=We),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Te.setFromSpherical(this._spherical),Te.applyQuaternion(this._quatInverse),e.copy(this.target).add(Te),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Te.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Te.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Fr.origin.copy(this.object.position),Fr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fr.direction))<Ax?this.object.lookAt(this.target):(Zl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fr.intersectPlane(Zl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Yo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yo||this._lastTargetPosition.distanceToSquared(this.target)>Yo?(this.dispatchEvent(jl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?We/60*this.autoRotateSpeed*t:We/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Te.setFromMatrixColumn(e,0),Te.multiplyScalar(-t),this._panOffset.add(Te)}_panUp(t,e){this.screenSpacePanning===!0?Te.setFromMatrixColumn(e,1):(Te.setFromMatrixColumn(e,0),Te.crossVectors(this.object.up,Te)),Te.multiplyScalar(t),this._panOffset.add(Te)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Te.copy(s).sub(this.target);let r=Te.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(We*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-We*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(We*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-We*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Cx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Px(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Lx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(au),this.state=ae.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Dx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ae.DOLLY;break;case ds.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}break;case ds.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(bc)}function Ix(i){switch(this.state){case ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ux(i){this.enabled===!1||this.enableZoom===!1||this.state!==ae.NONE||(i.preventDefault(),this.dispatchEvent(bc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(au))}function Nx(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Ox(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ae.TOUCH_ROTATE;break;case hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ae.TOUCH_PAN;break;default:this.state=ae.NONE}break;case 2:switch(this.touches.TWO){case hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ae.TOUCH_DOLLY_PAN;break;case hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ae.TOUCH_DOLLY_ROTATE;break;default:this.state=ae.NONE}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(bc)}function Fx(i){switch(this._trackPointer(i),this.state){case ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ae.NONE}}function zx(i){this.enabled!==!1&&i.preventDefault()}function Bx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function co(i){let t=i;return()=>(t=t*16807%2147483647)/2147483647}function lo(i,t){const e=document.createElement("canvas");e.width=e.height=i;const n=e.getContext("2d");t(n,i);const s=n.getImageData(0,0,i,i).data;let r=0,o=0,a=0;for(let u=0;u<s.length;u+=4)r+=s[u],o+=s[u+1],a+=s[u+2];const c=s.length/4,l=u=>Math.pow(u/c/255,2.2),h=new En(e);return h.wrapS=h.wrapT=gi,h.colorSpace=ce,h.anisotropy=8,{t:h,mean:new N(l(r),l(o),l(a))}}const Hx=()=>lo(512,(i,t)=>{const e=co(3);i.fillStyle="#8f887c",i.fillRect(0,0,t,t);for(let n=0;n<9e3;n++){const s=110+e()*90;i.fillStyle=`rgb(${s},${s-4},${s-12})`,i.fillRect(e()*t,e()*t,2,2)}for(let n=0;n<1100;n++){const s=e()*t,r=e()*t,o=4+e()*13,a=o*(.55+e()*.4),c=e()*Math.PI,l=120+e()*110,h=e()*18;for(const[u,f]of[[0,0],[t,0],[-t,0],[0,t],[0,-t]]){i.fillStyle="rgba(40,36,30,0.35)",i.beginPath(),i.ellipse(s+u+1.5,r+f+2,o,a,c,0,7),i.fill();const d=i.createRadialGradient(s+u-o*.3,r+f-a*.3,1,s+u,r+f,o);d.addColorStop(0,`rgb(${Math.min(255,l+30)},${Math.min(255,l+26-h/2)},${Math.min(255,l+18-h)})`),d.addColorStop(1,`rgb(${l-30},${l-34-h/2},${l-42-h})`),i.fillStyle=d,i.beginPath(),i.ellipse(s+u,r+f,o,a,c,0,7),i.fill()}}}),Gx=()=>lo(256,(i,t)=>{const e=co(9);i.fillStyle="#56733a",i.fillRect(0,0,t,t);for(let n=0;n<7e3;n++){const s=e()*t,r=e()*t,o=3+e()*7,a=-Math.PI/2+(e()-.5)*1.2,c=e();i.strokeStyle=`rgb(${60+c*70},${95+c*80},${35+c*40})`,i.lineWidth=1,i.beginPath(),i.moveTo(s,r),i.lineTo(s+Math.cos(a)*o,r+Math.sin(a)*o),i.stroke()}}),Vx=()=>lo(256,(i,t)=>{const e=co(21);i.fillStyle="#a08d6d",i.fillRect(0,0,t,t);for(let n=0;n<40;n++)i.fillStyle=`rgba(${e()<.5?"80,66,48":"190,172,138"},${.08+e()*.1})`,i.beginPath(),i.ellipse(e()*t,e()*t,10+e()*40,8+e()*25,e()*3,0,7),i.fill();for(let n=0;n<2500;n++){const s=e();i.strokeStyle=`rgba(${170+s*60},${150+s*50},${90+s*30},0.7)`;const r=e()*t,o=e()*t,a=2+e()*6,c=e()*6.28;i.beginPath(),i.moveTo(r,o),i.lineTo(r+Math.cos(c)*a,o+Math.sin(c)*a),i.stroke()}for(let n=0;n<500;n++){const s=90+e()*100;i.fillStyle=`rgb(${s},${s-6},${s-16})`,i.beginPath(),i.arc(e()*t,e()*t,.8+e()*1.8,0,7),i.fill()}}),Wx=()=>lo(512,(i,t)=>{const e=co(33);i.fillStyle="#6f6a62",i.fillRect(0,0,t,t);const n=8,s=t/n;for(let r=0;r<n;r++){let o=-(r%2)*40;for(;o<t;){const a=60+e()*70,c=150+e()*45;i.fillStyle=`rgb(${c},${c-4},${c-12})`,i.fillRect(o+2,r*s+2,a-4,s-4);for(let l=0;l<40;l++){const h=e()*30;i.fillStyle=`rgba(${h},${h},${h},0.08)`,i.fillRect(o+2+e()*(a-6),r*s+2+e()*(s-6),2,2)}o+=a}}for(let r=0;r<14;r++)i.fillStyle=`rgba(60,55,50,${.05+e()*.07})`,i.beginPath(),i.ellipse(e()*t,e()*t,10+e()*40,6+e()*20,e()*3,0,7),i.fill()}),ls=new gc(new Uint8Array(4),1,1);ls.needsUpdate=!0;const li={lcMap:{value:ls},lcRect:{value:new ge(0,0,1,1)},pebMap:{value:ls},pebMean:{value:new N(1,1,1)},grsMap:{value:ls},grsMean:{value:new N(1,1,1)},dryMap:{value:ls},dryMean:{value:new N(1,1,1)},pavMap:{value:ls},pavMean:{value:new N(1,1,1)}};function Xx(i,t,e){const[n,s]=e;i.colorSpace=Xn,i.flipY=!1,i.minFilter=Mn,i.generateMipmaps=!1,i.needsUpdate=!0,li.lcMap.value=i,li.lcRect.value.set(t.xmin-n,s-t.ymax,t.width*t.step,t.height*t.step);for(const[r,o]of[["peb",Hx],["grs",Gx],["dry",Vx],["pav",Wx]]){const{t:a,mean:c}=o();li[`${r}Map`].value=a,li[`${r}Mean`].value=c}}const cu=`
uniform sampler2D lcMap; uniform vec4 lcRect;
vec4 landcover(vec2 xz) {
  vec2 uv = (xz - lcRect.xy) / lcRect.zw;
  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return vec4(-1.0);
  return texture2D(lcMap, uv);
}`,lu=new gc(new Uint8Array(4),1,1);lu.needsUpdate=!0;const Qr={map:{value:lu},rect:{value:new ge(0,0,1,0)}},qx=`
float labF(float t) { return t > 0.008856 ? pow(t, 1.0 / 3.0) : 7.787 * t + 16.0 / 116.0; }
float labFi(float t) { return t > 0.206893 ? t * t * t : (t - 16.0 / 116.0) / 7.787; }
vec3 rgb2lab(vec3 c) {
  vec3 x = mat3(0.4124, 0.2126, 0.0193, 0.3576, 0.7152, 0.1192, 0.1805, 0.0722, 0.9505) * c / vec3(0.95047, 1.0, 1.08883);
  vec3 f = vec3(labF(x.x), labF(x.y), labF(x.z));
  return vec3(116.0 * f.y - 16.0, 500.0 * (f.x - f.y), 200.0 * (f.y - f.z));
}
vec3 lab2rgb(vec3 l) {
  float fy = (l.x + 16.0) / 116.0;
  vec3 x = vec3(labFi(fy + l.y / 500.0) * 0.95047, labFi(fy), labFi(fy - l.z / 200.0) * 1.08883);
  return max(mat3(3.2406, -0.9689, 0.0557, -1.5372, 1.8758, -0.2040, -0.4986, 0.0415, 1.0570) * x, 0.0);
}`,Yx=`
uniform sampler2D pebMap; uniform sampler2D grsMap; uniform sampler2D dryMap; uniform sampler2D pavMap;
float gHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float gNoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(gHash(i), gHash(i + vec2(1, 0)), f.x), mix(gHash(i + vec2(0, 1)), gHash(i + vec2(1, 1)), f.x), f.y); }
// texture ripetuta senza che si veda la ripetizione: due scale e rotazioni mescolate da un rumore
vec3 detailT(sampler2D t, vec2 p, float s) {
  vec3 a = texture2D(t, p / s).rgb;
  vec3 b = texture2D(t, mat2(0.8, -0.6, 0.6, 0.8) * p / (s * 2.3) + 0.37).rgb;
  return mix(a, b, 0.6 * smoothstep(0.3, 0.7, gNoise(p * 0.045)));
}`,$x=`
varying vec3 vRuv;
float cHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float cNoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(cHash(i), cHash(i + vec2(1, 0)), f.x), mix(cHash(i + vec2(0, 1)), cHash(i + vec2(1, 1)), f.x), f.y); }
vec3 srgb(vec3 c) { return pow(c / 255.0, vec3(2.2)); }
vec3 coppi(vec3 sharp) {
  // tetto a falde tutto procedurale: niente foto (ombre, antenne e comignoli la sporcavano di macchie).
  // Ogni edificio ha il suo cotto da una gamma vera: nuovo, arancio, sbiadito, invecchiato, bruno
  float t = fract(vRuv.z) * 6.0;
  vec3 P0 = srgb(vec3(196, 98, 58)), P1 = srgb(vec3(214, 120, 74)), P2 = srgb(vec3(188, 124, 94));
  vec3 P3 = srgb(vec3(160, 84, 56)), P4 = srgb(vec3(176, 102, 70)), P5 = srgb(vec3(204, 138, 108));
  vec3 low = t < 1.0 ? mix(P0, P1, t) : t < 2.0 ? mix(P1, P2, t - 1.0) : t < 3.0 ? mix(P2, P3, t - 2.0)
           : t < 4.0 ? mix(P3, P4, t - 3.0) : t < 5.0 ? mix(P4, P5, t - 4.0) : mix(P5, P0, t - 5.0);
  // invecchiamento leggero: chiazze larghe e morbide, mai scure
  float w = cNoise(vWPos.xz * 0.35) * 0.6 + cNoise(vWPos.xz * 1.3) * 0.4;
  low *= 0.9 + 0.2 * w;
  // luce sulla falda (le foto la portavano cotta dentro): sole da sud-est come il volo
  vec3 fn = normalize(cross(dFdx(vWPos), dFdy(vWPos)));
  if (fn.y < 0.0) fn = -fn;
  low *= 0.72 + 0.42 * max(dot(fn, normalize(vec3(0.45, 0.75, 0.5))), 0.0);
  vec2 q = vRuv.xy;
  float px = length(fwidth(q));
  float fade = 1.0 - smoothstep(0.12, 0.35, px) * 0.8; // da lontano resta una trama leggera
  float cu = q.x / 0.23, cv = q.y / 0.42;
  float fu = fract(cu), col = mod(floor(cu), 2.0);
  float prof = col > 0.5 ? 0.92 + 0.22 * sin(fu * 3.1416) : 0.74 + 0.1 * sin(fu * 3.1416);
  float course = 1.0 - 0.3 * smoothstep(0.8, 1.0, fract(cv + col * 0.5));
  float pat = prof * course * (0.88 + 0.24 * cHash(floor(vec2(cu, cv + col * 0.5))));
  return low * mix(1.0, pat / 0.9, fade);
}`;function hu(i,{nearNeutral:t=!1,roof:e=!1}={}){const n=new sr({map:i,side:fe});return t&&(n.polygonOffset=!0,n.polygonOffsetFactor=4,n.polygonOffsetUnits=8),n.customProgramCacheKey=()=>`ortho-${t}-${e}`,n.onBeforeCompile=s=>{s.uniforms.hrMap=Qr.map,s.uniforms.hrRect=Qr.rect,t&&Object.assign(s.uniforms,li),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`+(e?`
attribute vec3 ruv;
varying vec3 vRuv;`:"")).replace("#include <project_vertex>",`#include <project_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`+(e?`
vRuv = ruv;`:"")),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform sampler2D hrMap;
uniform vec4 hrRect;`+(e?qx:"")+(t?cu+Yx:"")),e&&(s.fragmentShader=s.fragmentShader.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>${$x}`)),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
      // la tinta dell'ora del giorno (colore del materiale, daylight.js) si toglie qui e si rimette
      // in fondo: i ritocchi dell'ortofoto lavorano sempre sulla foto di giorno
      diffuseColor.rgb /= max(diffuse, vec3(1e-3));
      {
        // dentro la finestra a 25 cm la foto fine sostituisce quella a 0,5 m, con i bordi sfumati
        vec2 hu = vec2(vWPos.x - hrRect.x, hrRect.y - vWPos.z) / hrRect.z;
        vec2 e = min(hu, 1.0 - hu);
        float inside = hrRect.w * smoothstep(0.0, 0.02, min(e.x, e.y));
        if (inside > 0.0) {
          vec4 h = texture2D(hrMap, hu);
          // le tessere mancanti sono trasparenti (nero, alfa 0): miscela premoltiplicata, così il
          // bordo filtrato fra tessera e vuoto non fa una riga scura
          diffuseColor.rgb = diffuseColor.rgb * (1.0 - inside * h.a) + h.rgb * inside;
        }
      }
      {
        // spazio lineare: 0.22 ≈ grigio sRGB 0.51, 0.02 ≈ sRGB 0.15
        float l = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
        float shade = smoothstep(0.22, 0.02, l);
        // l'ombra dell'ortofoto è bluastra (cielo): la si porta verso un grigio caldo neutro
        float blue = clamp((diffuseColor.b - diffuseColor.r) * 6.0, 0.0, 1.0);
        vec3 lifted = diffuseColor.rgb * 2.2 + 0.02;
        float g = dot(lifted, vec3(0.3333));
        lifted = mix(lifted, vec3(g) * vec3(1.03, 1.0, 0.95), 0.35 + 0.5 * blue);
        // lo schiarimento delle ombre è per il paese da vicino. Sulle colline (pixel grandi) la foto
        // tiene il suo tono: altrimenti il verde e la roccia diventano un beige slavato.
        float pxsN = ${t?"length(fwidth(vWPos.xz))":"0.0"};
        float shadeNear = ${t?"1.0 - smoothstep(0.45, 1.6, pxsN)":"1.0"};
        diffuseColor.rgb = mix(diffuseColor.rgb, lifted, shade * 0.85 * shadeNear);
        ${e?`
        if (vRuv.z > 0.5) diffuseColor.rgb = coppi(diffuseColor.rgb);
        else {
          // terrazze (foto vera): nelle foto dal vero i toni caldi sono ~1,4 volte più saturi che
          // nell'ortofoto (photo-palette): si ritocca solo la tinta dei pixel già caldi
          vec3 lab = rgb2lab(diffuseColor.rgb);
          float warm = smoothstep(4.0, 12.0, length(lab.yz)) * step(0.0, lab.y) * step(0.0, lab.z);
          lab.yz *= mix(vec2(1.0), vec2(1.3, 1.55), warm);
          diffuseColor.rgb = lab2rgb(lab);
        }`:""}
        ${t?`
        // Suolo (ground.js). In Drone il pixel è grande e la foto, anche mediata, è una macchia
        // (ombre e fontane cotte dentro). L'ALBEDO è quello del materiale — prato, terra, ciottoli,
        // pavimentato — scelto dalla copertura del suolo. L'ortofoto entra solo come tinta lenta:
        // un po' più chiaro o più scuro, e un filo della sua crominanza. Da pochi metri si rimescola
        // la foto nitida (oggetti veri). Da molto lontano torna l'ortofoto intera.
        float pxs = pxsN;
        // l'albedo del materiale copre il suolo del paese (piazze e sterrato da drone). Oltre pochi
        // metri per pixel — le colline e lo sfondo — torna la foto, col tono vero.
        float cover = 1.0 - smoothstep(0.85, 1.7, pxs);
        float near = 1.0 - smoothstep(0.05, 0.22, pxs);
        if (cover > 0.0) {
          vec4 lc = landcover(vWPos.xz);
          float wSea = lc.x > 0.02 ? 1.0 : 0.0;
          vec3 low = texture2D(map, vMapUv, 3.0).rgb;
          vec2 hu = vec2(vWPos.x - hrRect.x, hrRect.y - vWPos.z) / hrRect.z;
          vec2 he = min(hu, 1.0 - hu);
          float hin = hrRect.w * smoothstep(0.0, 0.02, min(he.x, he.y));
          if (hin > 0.0) { vec4 h = texture2D(hrMap, hu, 4.0); low = low * (1.0 - hin * h.a) + h.rgb * hin; }
          // ombre viola/bluastre della foto: via la dominante, un po' più chiare
          // (le ombre degli alberi sono già "cotte" nella foto e con gli alberi 3D si raddoppiano)
          float lum = dot(low, vec3(0.2126, 0.7152, 0.0722));
          // rapporti fra canali (in lineare le differenze sono minuscole): viola = verde sotto rosso e
          // blu, bluastro = blu sopra rosso. Diventano terra beige con la stessa luminosità
          float gg = max(low.g, 1e-3);
          float tinge = clamp(max((0.5 * (low.r + low.b) / gg - 1.0) * 5.0, (low.b / max(low.r, 1e-3) - 0.85) * 5.0), 0.0, 1.0);
          low = mix(low, vec3(max(lum, 0.05)) * vec3(1.12, 1.0, 0.78), tinge);
          float dark = 1.0 - smoothstep(0.05, 0.15, lum);
          low *= mix(1.0, 0.15 / max(lum, 0.02), dark * 0.7);
          lum = dot(low, vec3(0.2126, 0.7152, 0.0722));
          float mx = max(low.r, max(low.g, low.b)), mn = min(low.r, min(low.g, low.b));
          float sat = (mx - mn) / max(mx, 1e-3), gEx = low.g - 0.5 * (low.r + low.b);
          float wBeach = max(lc.y, 0.0);
          float wGreen = max(max(lc.z, 0.0), smoothstep(0.004, 0.025, gEx)) * (1.0 - wBeach);
          float wPav = (1.0 - smoothstep(0.1, 0.22, sat)) * smoothstep(0.06, 0.16, lum) * (1.0 - wGreen) * (1.0 - wBeach);
          float wDry = clamp(1.0 - wBeach - wGreen - wPav, 0.0, 1.0);
          vec2 p = vWPos.xz;
          vec3 alb = detailT(grsMap, p, 1.6) * wGreen + detailT(dryMap, p, 2.8) * wDry + detailT(pavMap, p, 3.2) * wPav + detailT(pebMap, p, 2.2) * wBeach;
          // tinta lenta: la luminosità della foto (già sul mip grosso) modula il materiale, non lo sostituisce
          float rel = clamp(lum / 0.22, 0.72, 1.32);
          vec3 chroma = low / max(lum, 1e-3);
          vec3 mid = alb * rel;
          mid *= mix(vec3(1.0), chroma, 0.2);
          // a pochi metri: un po' della foto nitida, così tombini e bordi veri non spariscono
          vec3 c = mix(mid, mix(mid, diffuseColor.rgb, 0.45), near);
          diffuseColor.rgb = mix(diffuseColor.rgb, c, cover * (1.0 - wSea));        }`:""}
      }
      diffuseColor.rgb *= diffuse;`)},n}function jx(i,t,e){const[n,s]=e,{width:r,height:o,step:a,xmin:c,ymax:l}=i;return function(u,f){const d=u+n,g=s-f,_=(d-c)/a,m=(l-g)/a,p=Math.max(0,Math.min(r-2,Math.floor(_))),v=Math.max(0,Math.min(o-2,Math.floor(m))),M=Math.min(1,Math.max(0,_-p)),x=Math.min(1,Math.max(0,m-v)),b=v*r+p;return t[b]*(1-M)*(1-x)+t[b+1]*M*(1-x)+t[b+r]*(1-M)*x+t[b+r+1]*M*x}}function Kl(i,t,e,n,s,r=0,o=null){const[a,c]=n,l=o?Math.max(i.xmin,o.xmin):i.xmin,h=o?Math.min(i.xmax,o.xmax):i.xmax,u=o?Math.max(i.ymin,o.ymin):i.ymin,f=o?Math.min(i.ymax,o.ymax):i.ymax;if(h<=l||f<=u)return null;const d=Math.max(2,Math.round((h-l)/t)+1),g=Math.max(2,Math.round((f-u)/t)+1),_=new Float32Array(d*g*3),m=new Float32Array(d*g*2);for(let x=0;x<g;x++){const b=u+(f-u)*x/(g-1);for(let y=0;y<d;y++){const T=l+(h-l)*y/(d-1),E=T-a,w=c-b,S=x*d+y;_[S*3]=E,_[S*3+1]=e(E,w)-r,_[S*3+2]=w,m[S*2]=(T-i.xmin)/(i.xmax-i.xmin),m[S*2+1]=(b-i.ymin)/(i.ymax-i.ymin)}}const p=[];for(let x=0;x<g-1;x++)for(let b=0;b<d-1;b++){const y=x*d+b,T=y+1,E=y+d,w=E+1;p.push(y,T,E,T,w,E)}const v=new Qt;v.setAttribute("position",new ve(_,3)),v.setAttribute("uv",new ve(m,2)),v.setIndex(p);const M=new Kt(v,hu(s,{nearNeutral:!0}));return M.receiveShadow=!0,M}function Zx({orthoMeta:i,textures:t,heightAt:e,origin:n,bounds:s}){const r=new _e;r.name="terrain";for(const o of i.tiles){const a=t.get(o.file);if(!a)continue;const c=o.level==="base"?Kl(o,12,e,n,a,.6,s):Kl(o,6,e,n,a,0,s);c&&r.add(c)}return r}const Kx=38.056,Jx=14.588,Ye=Math.PI/180,to=Ye*23.4397,Qx=i=>i.valueOf()/864e5-.5+2440588-2451545,Jl=(i,t)=>Math.atan2(Math.sin(i)*Math.cos(to)-Math.tan(t)*Math.sin(to),Math.cos(i)),Ql=(i,t)=>Math.asin(Math.sin(t)*Math.cos(to)+Math.cos(t)*Math.sin(to)*Math.sin(i));function th(i,t,e){const n=Ye*(280.16+360.9856235*i)+Ye*Jx-t,s=Ye*Kx,r=Math.asin(Math.sin(s)*Math.sin(e)+Math.cos(s)*Math.cos(e)*Math.cos(n)),o=Math.atan2(Math.sin(n),Math.cos(n)*Math.sin(s)-Math.tan(e)*Math.cos(s));return{alt:r,az:o,dir:new N(-Math.sin(o)*Math.cos(r),Math.sin(r),Math.cos(o)*Math.cos(r))}}function t_(i){const t=Qx(i),e=Ye*(357.5291+.98560028*t),n=e+Ye*(1.9148*Math.sin(e)+.02*Math.sin(2*e)+3e-4*Math.sin(3*e))+Ye*102.9372+Math.PI,s=th(t,Jl(n,0),Ql(n,0)),r=Ye*(218.316+13.176396*t),o=Ye*(134.963+13.064993*t),a=Ye*(93.272+13.22935*t),c=r+Ye*6.289*Math.sin(o),l=Ye*5.128*Math.sin(a),h=th(t,Jl(c,l),Ql(c,l));return h.lit=(1-s.dir.dot(h.dir))/2,{sun:s,moon:h}}function e_(i){const t=new Date,e=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"Europe/Rome",year:"numeric",month:"numeric",day:"numeric",timeZoneName:"shortOffset"}).formatToParts(t).map(s=>[s.type,s.value])),n=+(e.timeZoneName.replace("GMT","")||0);return new Date(Date.UTC(+e.year,+e.month-1,+e.day,0,0)+(i-n)*36e5)}function n_(){const i=Object.fromEntries(new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Rome",hour:"numeric",minute:"numeric",hourCycle:"h23"}).formatToParts(new Date).map(t=>[t.type,t.value]));return+i.hour+ +i.minute/60}const pi={value:0},en=i=>new Ot(i),ci={dayH:en(13885674),dayZ:en(4161472),setH:en(15773820),setZ:en(3561868),nightH:en(1581882),nightZ:en(198158)};function i_(i){const t={uSun:{value:new N(0,1,0)},uSunVis:{value:1},uMoon:{value:new N(0,-1,0)},uMoonVis:{value:0},uH:{value:ci.dayH.clone()},uZ:{value:ci.dayZ.clone()}},e=new Kt(new He(2e5,32,16),new un({side:ke,depthWrite:!1,fog:!1,uniforms:t,vertexShader:"varying vec3 vD; void main() { vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uSun, uMoon, uH, uZ; uniform float uSunVis, uMoonVis; varying vec3 vD;
      void main() {
        float h = max(vD.y, 0.0);
        // fascia di foschia larga sull'orizzonte, poi l'azzurro
        vec3 c = mix(uH, uZ, pow(smoothstep(0.0, 0.75, h), 0.75));
        float s = max(dot(vD, uSun), 0.0);
        c += vec3(1.0, 0.9, 0.75) * (pow(s, 10.0) * 0.3 + pow(s, 900.0) * 2.0) * uSunVis;
        float m = max(dot(vD, uMoon), 0.0);
        c += vec3(0.6, 0.7, 0.9) * pow(m, 30.0) * 0.12 * uMoonVis;
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`}));e.renderOrder=-2,e.frustumCulled=!1;const n=2200,s=new Float32Array(n*3),r=(()=>{let f=12345;return()=>(f=f*16807%2147483647)/2147483647})();for(let f=0;f<n;f++){const d=.03+r()*.97,g=r()*Math.PI*2,_=Math.sqrt(1-d*d);s.set([Math.cos(g)*_*19e4,d*19e4,Math.sin(g)*_*19e4],f*3)}const o=new Qt;o.setAttribute("position",new ve(s,3));const a=new xc({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),c=new Kh(o,a);c.renderOrder=-1,c.frustumCulled=!1;const l={uSunDir:{value:new N(0,1,0)},uNight:pi},h=new Kt(new He(1e3,32,16),new un({uniforms:l,transparent:!0,depthWrite:!1,fog:!1,blending:$s,vertexShader:"varying vec3 vN; void main() { vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uSunDir; uniform float uNight; varying vec3 vN;
      float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453); }
      void main() {
        float lit = smoothstep(-0.03, 0.12, dot(normalize(vN), uSunDir));
        // "mari" lunari: macchie scure fisse sulla faccia
        float mare = 0.82 + 0.18 * step(0.55, hash(floor(normalize(vN) * 4.0)));
        vec3 c = vec3(0.96, 0.94, 0.88) * mare * (lit * mix(0.5, 0.85, uNight) + 0.03 * uNight);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`}));h.frustumCulled=!1,h.renderOrder=-1,i.add(e,c,h);const u={moonDir:new N};return{u:t,starMat:a,moonU:l,state:u,follow(f){e.position.copy(f.position),c.position.copy(f.position),h.position.copy(f.position).addScaledVector(u.moonDir,15e4),h.visible=u.moonDir.y>-.02}}}const ri=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function s_(i,t){const{sun:e,moon:n}=t_(e_(i)),s=e.alt/Ye,r=ri(-5,8,s),o=Math.exp(-(((s-1)/6)**2)),a=ri(-2,5,n.alt/Ye),c=ci.nightH.clone().lerp(ci.dayH,r).lerp(ci.setH,o*.75),l=ci.nightZ.clone().lerp(ci.dayZ,r).lerp(ci.setZ,o*.5);t.sky.u.uH.value.copy(c),t.sky.u.uZ.value.copy(l),t.sky.u.uSun.value.copy(e.dir),t.sky.u.uSunVis.value=ri(-3,1,s),t.sky.u.uMoon.value.copy(n.dir),t.sky.u.uMoonVis.value=a*(1-r)*n.lit,t.sky.starMat.opacity=(1-ri(-14,-4,s))*.95,t.sky.moonU.uSunDir.value.copy(e.dir),t.sky.state.moonDir.copy(n.dir),t.fog.color.copy(c),t.bgScene.background.copy(c),t.sun.intensity=2.1*ri(-1,8,s),t.sun.color.set(16773852).lerp(en(16751701),o*ri(-1,3,s)),t.sun.castShadow=s>0,t.sunDir=e.dir.clone(),t.hemi.intensity=1.25*(.42+.58*r),t.hemi.color.set(7176868).lerp(en(14675711),r),t.hemi.groundColor.set(4867390).lerp(en(9075302),r),t.moonLight.intensity=(1-r)*Math.max(.28,.62*a*(.4+.6*n.lit)),t.moonLight.position.copy(n.dir).multiplyScalar(1e3);const h=en(6057608).lerp(en(16777215),r).multiply(en(16777215).lerp(en(16764830),o*.7));for(const f of t.basics)f.color.copy(h);const u=s>-2;for(const f of t.waters)f.uSkyH.value.copy(c),f.uSkyZ.value.copy(l),f.uTint.value.copy(h),f.uSun.value.copy(u?e.dir:n.dir),f.uSpec.value=u?3*ri(-1,6,s):.8*a*n.lit;return pi.value=t.lights?1-ri(-5,3,s):0,{sun:e,moon:n}}const zr=3.5,Br=3.1;function r_(){const e=document.createElement("canvas");e.width=128,e.height=114;const n=e.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,128,114);for(let l=0;l<260;l++)n.fillStyle=`rgba(0,0,0,${Math.random()*.05})`,n.fillRect(Math.random()*128,Math.random()*114,2,2);n.fillStyle="rgba(0,0,0,0.12)",n.fillRect(0,100,128,14),n.fillStyle="rgba(0,0,0,0.10)",n.fillRect(0,0,128,5);const s=14,r=100,o=34,a=80;n.fillStyle="#8f9396",n.fillRect(s,o,r,a),n.fillStyle="rgba(0,0,0,0.22)";for(let l=o+3;l<114;l+=4)n.fillRect(s,l,r,1);n.fillStyle="#d9d7d0",n.fillRect(s-3,o-4,r+6,4);const c=new En(e);return c.wrapS=c.wrapT=gi,c.colorSpace=ce,c.anisotropy=4,c}function o_(i){const n=document.createElement("canvas");n.width=128,n.height=114;const s=n.getContext("2d");s.fillStyle="#ffffff",s.fillRect(0,0,128,114);for(let h=0;h<260;h++)s.fillStyle=`rgba(0,0,0,${Math.random()*.05})`,s.fillRect(Math.random()*128,Math.random()*114,2,2);s.fillStyle="rgba(0,0,0,0.10)",s.fillRect(0,109,128,5);const r=40,o=58,a=(128-r)/2,c=24;if(i===3){s.fillStyle="#2b3136",s.fillRect(a,c,r,o),s.fillStyle="rgba(160,190,210,0.35)",s.fillRect(a+3,c+o*.5,r-6,o*.45);const h=o*(.35+Math.random()*.25);s.fillStyle="#c9c4b8",s.fillRect(a,c,r,h),s.fillStyle="rgba(0,0,0,0.18)";for(let u=c+2;u<c+h;u+=3)s.fillRect(a,u,r,1);return s.fillStyle="rgba(0,0,0,0.12)",s.fillRect(a-3,c-6,r+6,6),s.fillStyle="#eceae4",s.fillRect(a-5,c+o,r+10,4),eh(n)}const l=i===0?"#3f5f45":i===1?"#6a4a32":"#8a8a86";s.fillStyle="#2b3136",s.fillRect(a,c,r,o),s.fillStyle="rgba(160,190,210,0.35)",s.fillRect(a+3,c+3,r-6,o/2-4),s.fillStyle=l,s.fillRect(a-13,c,13,o),s.fillRect(a+r,c,13,o),s.fillStyle="rgba(0,0,0,0.25)";for(let h=c+4;h<c+o;h+=5)s.fillRect(a-12,h,11,1),s.fillRect(a+r+1,h,11,1);if(i===2){s.fillStyle="#d8d6d0",s.fillRect(a-18,c+o,r+36,5),s.fillStyle="#3a3a3a",s.fillRect(a-18,c+o-22,r+36,2);for(let h=a-18;h<=a+r+18;h+=5)s.fillRect(h,c+o-22,1.5,22)}else s.fillStyle="#e8e6e0",s.fillRect(a-4,c+o,r+8,4);return eh(n)}function eh(i){const t=new En(i);return t.wrapS=t.wrapT=gi,t.colorSpace=ce,t.anisotropy=4,t}function a_(i){return i.onBeforeCompile=t=>{t.uniforms.uNight=pi,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        if (uNight > 0.0) {
          vec2 cell = floor(vMapUv), f = fract(vMapUv);
          float win = step(0.36, f.x) * step(f.x, 0.64) * step(0.30, f.y) * step(f.y, 0.77);
          float h = fract(sin(dot(cell + vColor.rg * 97.0, vec2(12.9898, 78.233))) * 43758.5453);
          vec3 warm = h < 0.27 ? vec3(1.0, 0.72, 0.4) : vec3(0.8, 0.86, 1.0);
          totalEmissiveRadiance += win * step(h, 0.34) * uNight * warm * 1.3;
        }`)},i}function c_(){const i=[0,1,2,3].map(t=>a_(new kt({map:o_(t),vertexColors:!0,side:fe})));return i.push(new kt({map:r_(),vertexColors:!0,side:fe})),i}function xn(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Qt;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=nh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);const g=nh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function nh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new ve(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){const _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const Ec={1302566:{name:"palazzo-ve3-ovest",title:"Palazzo a ovest del Municipio",piazza:"Vittorio Emanuele III",facing:[0,-1],wall:15193008,trim:15985368,stone:13616304,shutter:8016436,roof:11622964,bay:3.05,balcony:"every",ante:"chiuse"},1302564:{name:"palazzo-ve3-est",title:"Palazzo chiaro a est del Municipio",piazza:"Vittorio Emanuele III",facing:[-.85,-.45],wall:15985887,trim:16315628,stone:14012096,shutter:12875840,roof:11622964,bay:3.15,balcony:"alt",ante:"chiuse"},1302563:{name:"palazzo-ve3-est-2",title:"Palazzo oltre l'angolo est",piazza:"Vittorio Emanuele III",facing:[-1,0],wall:15721680,trim:16183526,stone:13813942,shutter:8213558,roof:11622964,bay:3.3,balcony:"alt",ante:"chiuse"},1302551:{name:"palazzo-ve3-nord",title:"Palazzo giallo a nord della fontana",piazza:"Vittorio Emanuele III",facing:[0,1],wall:14994552,trim:15786672,stone:13812900,shutter:7227952,roof:11622964,bay:3.3,balcony:"alt",ante:"chiuse",ground:"bottega",awning:!0,shop:2896688},1302548:{name:"palazzo-ve3-nord-ovest",title:"Palazzo con portico sulla via inferiore",piazza:"Vittorio Emanuele III",facing:[0,1],wall:15587768,trim:16050904,stone:14011320,shutter:6965298,roof:11622964,bay:3.1,balcony:"every",ante:"chiuse",ground:"archi",pilastri:!0,belvedere:!0},1302693:{name:"palazzo-liberta-alto",title:"Palazzo alto a ovest della Chiesa Madre",piazza:"Libertà",facing:[1,.15],wall:14468772,trim:15721676,stone:12892058,shutter:7162420,roof:11049088,bay:3.15,balcony:"every",ante:"chiuse"},1302678:{name:"palazzetto-liberta-est",title:"Palazzetto a est della Chiesa Madre",piazza:"Libertà",facing:[-1,0],wall:16250094,trim:16513266,stone:14538440,shutter:3041852,roof:11622964,bay:2.7,balcony:"none",ante:"chiuse"},1302669:{name:"villa-gp2",title:"Villa chiara a sud del giardino",piazza:"Giovanni Paolo II",facing:[0,-1],wall:15984584,trim:16315108,stone:14537924,shutter:2907192,roof:11622964,bay:3.2,balcony:"center",ante:"chiuse"},1302648:{name:"schiera-gp2",title:"Schiera a ovest del giardino",piazza:"Giovanni Paolo II",facing:[0,-1],wall:15127224,trim:15787216,stone:12036758,shutter:6966326,roof:11622964,bay:4.2,balcony:"every",ante:"chiuse",ground:"bottega",pilastri:!0,shop:2762790}},ih=2371640,l_=6044968,sh=2764338,h_=9409430;function u_(i){return!!Ec[i]}class f_{constructor(){this.parts=[]}add(t,e){const s=(t.index?t.toNonIndexed():t).getAttribute("position");if(!s?.count)return;const r=new Qt;r.setAttribute("position",s);const o=new Ot(e),a=new Float32Array(s.count*3);for(let c=0;c<s.count;c++)a.set([o.r,o.g,o.b],c*3);r.setAttribute("color",new ve(a,3)),this.parts.push(r)}mesh(t){if(!this.parts.length)return null;const e=xn(this.parts);e.computeVertexNormals();const n=new kt({vertexColors:!0,side:fe});n.onBeforeCompile=r=>{r.uniforms.uNight=pi,r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * vec3(1.0, 0.78, 0.5) * uNight * 0.22;`)};const s=new Kt(e,n);return s.name=t,s.castShadow=s.receiveShadow=!0,s}}function d_(i){const t=[];for(let e=0;e<i.length;e+=2)t.push([i[e],i[e+1]]);return t}function p_(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){const o=i[s][0],a=i[s][1],c=i[r][0],l=i[r][1];a>e!=l>e&&t<(c-o)*(e-a)/(l-a)+o&&(n=!n)}return n}function $o(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1])||1;let s=-(t[1]-i[1])/n,r=(t[0]-i[0])/n;const o=(i[0]+t[0])/2,a=(i[1]+t[1])/2;return p_(e,o+s*.45,a+r*.45)&&(s=-s,r=-r),{nx:s,nz:r,L:n,tx:(t[0]-i[0])/n,tz:(t[1]-i[1])/n,mx:o,mz:a}}function uu(i,t,e,n,s,r){return new Jt().makeBasis(new N(e,0,n),new N(0,1,0),new N(s,0,r)).setPosition(i,0,t)}function me(i,t,e,n,s,r,o,a,c,l,h,u,f){if(c-a<.02||u-h<.01||l<.02)return;const d=new Nt(l*2,c-a,u-h);d.translate(0,(a+c)/2,(h+u)/2),d.applyMatrix4(uu(t,e,n,s,r,o)),i.add(d,f)}function rh(i,t,e,n,s,r,o,a,c,l,h,u,f){const d=l/2,g=c-d;if(g<a+.25){me(i,t,e,n,s,r,o,a,c,d,u,f,h);return}const _=new di;_.moveTo(-d,a),_.lineTo(d,a),_.lineTo(d,g),_.absarc(0,g,d,0,Math.PI,!1),_.lineTo(-d,a);const m=new $n(_,{depth:f-u,bevelEnabled:!1,curveSegments:8});m.translate(0,0,u),m.applyMatrix4(uu(t,e,n,s,r,o)),i.add(m,h)}function m_(i,t,e,n,s,r){const o=[];for(let c=0;c<t.length;c++){if((s[c]??30)<.4)continue;const[l,h]=t[c],[u,f]=t[(c+1)%t.length];o.push(l,e,h,u,e,f,u,n,f,l,e,h,u,n,f,l,n,h)}if(!o.length)return;const a=new Qt;a.setAttribute("position",new Ht(o,3)),i.add(a,r)}function g_(i,t,e,n){let s;try{s=Pn.triangulateShape(t.map(a=>new pt(a[0],a[1])),[])}catch{return}const r=[];for(const[a,c,l]of s){const h=t[a],u=t[c],f=t[l],d=u[0]-h[0],g=u[1]-h[1],_=f[0]-h[0],m=f[1]-h[1],v=g*_-d*m>=0?[h,u,f]:[h,f,u];for(const M of v)r.push(M[0],e,M[1])}if(!r.length)return;const o=new Qt;o.setAttribute("position",new Ht(r,3)),i.add(o,n)}function x_(i,t,e,n){const s=t.roof.v,r=t.roof.tan,o=a=>[s[a*3],e+s[a*3+2]*r,s[a*3+1]];for(const a of t.roof.f){if(a.length<3)continue;const c=a.map(o);let l;try{l=Pn.triangulateShape(c.map(f=>new pt(f[0],f[2])),[])}catch{continue}const h=[];for(const[f,d,g]of l){let _=c[f],m=c[d],p=c[g];(m[2]-_[2])*(p[0]-_[0])-(m[0]-_[0])*(p[2]-_[2])<0&&([m,p]=[p,m]),h.push(..._,...m,...p)}if(!h.length)continue;const u=new Qt;u.setAttribute("position",new Ht(h,3)),i.add(u,n)}}function __(i){const t=Ec[i.id],e=d_(i.r);if(e.length<3)return null;const n=i.e||[],s=Math.min(i.b,i.g)-.4,r=i.g+i.h,o=Math.max(1,i.f||1),a=i.h/o,c=new f_;if(m_(c,e,s,r,n,t.wall),i.roof)x_(c,i,r,t.roof);else{g_(c,e,r,t.roof);for(let f=0;f<e.length;f++){if((n[f]??30)<.4)continue;const d=$o(e[f],e[(f+1)%e.length],e);me(c,d.mx,d.mz,d.tx,d.tz,d.nx,d.nz,r,r+.9,d.L/2,-.06,.16,t.wall)}}let l=-1,h=-1/0;for(let f=0;f<e.length;f++){if((n[f]??30)<4)continue;const d=$o(e[f],e[(f+1)%e.length],e);if(d.L<5)continue;const g=d.nx*t.facing[0]+d.nz*t.facing[1]+d.L*.008;g>h&&(h=g,l=f)}let u=r;if(i.roof){const f=i.roof.v;for(let d=0;d<f.length;d+=3)u=Math.max(u,r+f[d+2]*i.roof.tan)}for(let f=0;f<e.length;f++){if((n[f]??30)<4)continue;const d=$o(e[f],e[(f+1)%e.length],e);if(d.L<3.2)continue;const{mx:g,mz:_,tx:m,tz:p,nx:v,nz:M,L:x}=d;me(c,g,_,m,p,v,M,s,i.g+Math.min(.85,a*.28),x/2,.01,.07,t.stone);for(let E=1;E<o;E++)me(c,g,_,m,p,v,M,i.g+E*a-.08,i.g+E*a+.06,x/2,.01,.09,t.trim);me(c,g,_,m,p,v,M,r-.28,r+.06,x/2,0,.16,t.trim);const b=Math.max(1,Math.round(x/t.bay)),y=Math.floor(b/2),T=f===l;if(t.pilastri)for(let E=0;E<=b;E++){const w=E/b;me(c,g+m*(w-.5)*x,_+p*(w-.5)*x,m,p,v,M,i.g+.7,r-.2,.11,.02,.13,t.trim)}for(let E=0;E<b;E++){const w=(E+.5)/b,S=g+m*(w-.5)*x,A=_+p*(w-.5)*x;for(let F=0;F<o;F++){const U=i.g+F*a,B=F===0&&t.ground==="bottega"&&x>12,D=F===0&&T&&E===y&&!B,I=F===0&&t.ground==="archi"||F===o-1&&t.top==="loggia";if(D){const k=U+Math.min(2.35,a*.86);me(c,S,A,m,p,v,M,U+.08,k,.72,.02,.1,t.trim),me(c,S,A,m,p,v,M,U+.12,k-.08,.52,.08,.14,l_);continue}if(B){const k=Math.min(1.35,t.bay*.36),rt=U+a*.82;if(me(c,S,A,m,p,v,M,U+.02,rt,k+.14,.02,.09,t.stone),me(c,S,A,m,p,v,M,U+.1,rt-.1,k,.09,.16,t.shop||h_),t.awning){const dt=rt-.08;me(c,S,A,m,p,v,M,dt,dt+.07,k*.95,.1,1.2,16052454);for(const G of[-.62,-.2,.22,.64])me(c,S+m*G*k,A+p*G*k,m,p,v,M,dt+.02,dt+.09,.07,.12,1.18,12866362)}continue}const z=U+a*.28,O=U+a*(I?.86:.74),q=Math.min(I?.72:.58,t.bay*.22);if(I)rh(c,S,A,m,p,v,M,z-.06,O+.08,q*2+.22,t.trim,.02,.07),rh(c,S,A,m,p,v,M,z,O,q*2,ih,.07,.12);else if(t.ante==="chiuse"&&t.shutter){me(c,S,A,m,p,v,M,z-.08,O+.08,q+.1,.02,.07,t.trim),me(c,S,A,m,p,v,M,z,O,q,.07,.13,t.shutter);const k=O-z;for(let rt=1;rt<=3;rt++){const dt=z+k*rt/4;me(c,S,A,m,p,v,M,dt-.02,dt+.02,q*.92,.12,.155,2366486)}}else me(c,S,A,m,p,v,M,z-.08,O+.08,q+.1,.02,.07,t.trim),me(c,S,A,m,p,v,M,z,O,q,.07,.12,ih),t.shutter&&(me(c,S-m*(q+.1),A-p*(q+.1),m,p,v,M,z,O,.07,.08,.14,t.shutter),me(c,S+m*(q+.1),A+p*(q+.1),m,p,v,M,z,O,.07,.08,.14,t.shutter));const $=F>0&&!(F===o-1&&t.top==="loggia")&&(t.balcony==="every"||t.balcony==="alt"&&E%2===0||t.balcony==="center"&&T&&E===y&&F===1);if(t.belvedere&&f===l&&F===o-1&&E===0){const k=Math.max(3,Math.round(x/.85));for(let rt=0;rt<=k;rt++){const dt=rt/k;me(c,g+m*(dt-.5)*x,_+p*(dt-.5)*x,m,p,v,M,r+.02,r+.78,.055,.02,.12,t.trim)}me(c,g,_,m,p,v,M,r+.7,r+.82,x/2,.02,.14,t.trim)}if($){const k=t.balcony==="every"?Math.min(t.bay*.42,1.6):q+.28;me(c,S,A,m,p,v,M,U-.02,U+.08,k,.06,.78,t.stone),me(c,S,A,m,p,v,M,U+.82,U+.9,k,.68,.76,sh);for(const rt of[-1,1])me(c,S+m*rt*(k-.05),A+p*rt*(k-.05),m,p,v,M,U+.08,U+.9,.025,.66,.74,sh)}}}}if(i.x)for(const[f,d,g,_]of i.x){const m=i.roof?u:r;if(f===0)me(c,d,g,1,0,0,1,m,m+(_||2.4),1.3,-1.5,1.5,t.wall);else if(f===1){const p=new Ee(.55,.55,_||1.2,12);p.translate(d,m+(_||1.2)/2,g),c.add(p,14212578)}}return c.mesh(t.name)}function v_(i){const t=new _e;t.name="plaza-buildings";for(const e of i.buildings){if(!Ec[e.id])continue;const n=__(e);n&&t.add(n)}return t}const M_=new Set(["B006","B007","B009","B010"]);function jo(i){let t=Math.imul(i,2654435761)>>>0;return t^=t>>>15,t=Math.imul(t,2246822519)>>>0,t^=t>>>13,(t>>>0)/4294967296}class Zo{constructor(){this.p=[],this.u=[],this.c=[],this.r=[]}tri(t,e,n,s,r,o,a){if(this.p.push(...t,...e,...n),s&&this.u.push(...s,...r,...o),a)for(let c=0;c<3;c++)this.c.push(a.r,a.g,a.b)}geometry(){if(!this.p.length)return null;const t=new Qt;return t.setAttribute("position",new Ht(this.p,3)),this.u.length&&t.setAttribute("uv",new Ht(this.u,2)),this.c.length&&t.setAttribute("color",new Ht(this.c,3)),this.r.length&&t.setAttribute("ruv",new Ht(this.r,3)),t.computeVertexNormals(),t.computeBoundingSphere(),t}}function y_({model:i,orthoMeta:t,textures:e,facadeMats:n}){const[s,r]=i.origin,o=new _e;o.name="buildings";const a=n.map(()=>new Zo),c=n.length-1,l=new Zo,h=new Map,u=t.tiles.filter(b=>b.level==="core"),f=t.tiles.find(b=>b.level==="base"),d=new Ot,g=[],_=[],m=[];function p(b,y){const T=b+s,E=r-y;return u.find(w=>T>=w.xmin&&T<w.xmax&&E>=w.ymin&&E<w.ymax)||f}const v=(b,y,T)=>[(y+s-b.xmin)/(b.xmax-b.xmin),(r-T-b.ymin)/(b.ymax-b.ymin)],M=b=>(h.has(b.file)||h.set(b.file,new Zo),h.get(b.file));for(const b of i.buildings){const y=[];for(let k=0;k<b.r.length;k+=2)y.push([b.r[k],b.r[k+1]]);if(y.length<3)continue;const T=b.g+b.h;if(b.lm||u_(b.id)){g.push({pts:y,top:T,minX:Math.min(...y.map(k=>k[0])),maxX:Math.max(...y.map(k=>k[0])),minZ:Math.min(...y.map(k=>k[1])),maxZ:Math.max(...y.map(k=>k[1])),canopy:!1});continue}const E=Math.min(b.b,b.g)-.4;d.setRGB(b.c[0]/255,b.c[1]/255,b.c[2]/255,ce);const w=!M_.has(b.t)&&b.h>=2.6,S=w?a[Math.floor(jo(b.id)*c)]:l,A=w?a[c]:l;let F=0,U=0;for(const[k,rt]of y)F+=k,U+=rt;F/=y.length,U/=y.length;const B=p(F,U),D=M(B),I=b.t==="B007",z=jo(b.id*3+1),O=z<.15?0:z<.65?1:2;let q=0;for(let k=0;k<y.length;k++){const[rt,dt]=y[k],[G,Z]=y[(k+1)%y.length],ht=Math.hypot(G-rt,Z-dt);if(ht<.05)continue;if(I){const j=T-.25;l.tri([rt,j,dt],[G,j,Z],[G,T,Z],null,null,null,d),l.tri([rt,j,dt],[G,T,Z],[rt,T,dt],null,null,null,d);continue}const it=q,mt=q/zr,Rt=(q+ht)/zr;q+=ht;const xt=b.e?b.e[k]:30;if(w&&xt>=4&&b.f>=2&&ht>=2.5&&O){const j=(G-rt)/ht,L=(Z-dt)/ht;let ot=-L,Q=j;w_(y,(rt+G)/2+ot*.1,(dt+Z)/2+Q*.1)&&(ot=-ot,Q=-Q);for(let ct=Math.ceil(it/zr-.5);;ct++){const st=(ct+.5)*zr-it;if(st>ht-.9)break;if(!(st<.9||O===2&&ct%2))for(let Mt=1;Mt<b.f;Mt++){const ft=b.g+Mt*Br;if(ft+1.2>T)break;m.push({x:rt+j*st+ot*.45,z:dt+L*st+Q*.45,y:ft,ang:Math.atan2(ot,Q)})}}}if(xt<.4&&w){l.tri([rt,E,dt],[G,E,Z],[G,T,Z],null,null,null,d),l.tri([rt,E,dt],[G,T,Z],[rt,T,dt],null,null,null,d);continue}const at=Math.min(T,b.g+Br),V=(j,L,ot)=>{if(ot-L<.02)return;const Q=(L-b.g)/Br,ct=(ot-b.g)/Br,st=[rt,L,dt],Mt=[G,L,Z],ft=[G,ot,Z],P=[rt,ot,dt];j.tri(st,Mt,ft,[mt,Q],[Rt,Q],[Rt,ct],d),j.tri(st,ft,P,[mt,Q],[Rt,ct],[mt,ct],d)};V(A,E,at),V(S,at,T)}let $=T;if(b.roof){const k=b.roof.v,rt=b.roof.tan,dt=G=>[k[G*3],T+k[G*3+2]*rt,k[G*3+1]];for(const G of b.roof.f){if(G.length<3)continue;const Z=G.map(dt);let ht;try{ht=Pn.triangulateShape(Z.map(mt=>new pt(mt[0],mt[2])),[])}catch{continue}const it=S_(Z);for(const[mt,Rt,xt]of ht){let at=Z[mt],V=Z[Rt],j=Z[xt];(V[2]-at[2])*(j[0]-at[0])-(V[0]-at[0])*(j[2]-at[2])<0&&([V,j]=[j,V]),D.tri(at,V,j,v(B,at[0],at[2]),v(B,V[0],V[2]),v(B,j[0],j[2]));for(const L of[at,V,j])D.r.push(...it?[it.eu(L),it.sv(L),1+jo(b.id*7+3)*.999]:[0,0,0]);$=Math.max($,at[1],V[1],j[1])}}}else{const k=y.map(([dt,G])=>new pt(dt,G));let rt;try{rt=Pn.triangulateShape(k,[])}catch{rt=[]}for(const[dt,G,Z]of rt){const ht=[y[dt][0],T,y[dt][1]],it=[y[G][0],T,y[G][1]],mt=[y[Z][0],T,y[Z][1]];D.tri(ht,it,mt,v(B,ht[0],ht[2]),v(B,it[0],it[2]),v(B,mt[0],mt[2])),D.r.push(0,0,0,0,0,0,0,0,0)}if(b.pp){const dt=d.clone().multiplyScalar(.92);for(let G=0;G<y.length;G++){const[Z,ht]=y[G],[it,mt]=y[(G+1)%y.length];l.tri([Z,T,ht],[it,T,mt],[it,T+1,mt],null,null,null,dt),l.tri([Z,T,ht],[it,T+1,mt],[Z,T+1,ht],null,null,null,dt)}$=T+1}}if(b.x){let k=0,rt=0;for(let dt=0;dt<y.length;dt++){const[G,Z]=y[dt],[ht,it]=y[(dt+1)%y.length],mt=Math.hypot(ht-G,it-Z);mt>rt&&(rt=mt,k=Math.atan2(ht-G,it-Z))}for(const[dt,G,Z,ht]of b.x)_.push({type:dt,x:G,z:Z,y:b.roof?$:T,h:ht,ang:k,col:d.clone()})}g.push({pts:y,top:$,minX:Math.min(...y.map(k=>k[0])),maxX:Math.max(...y.map(k=>k[0])),minZ:Math.min(...y.map(k=>k[1])),maxZ:Math.max(...y.map(k=>k[1])),canopy:I})}a.forEach((b,y)=>{const T=b.geometry();if(T){const E=new Kt(T,n[y]);E.castShadow=E.receiveShadow=!0,o.add(E)}});const x=l.geometry();if(x){const b=new Kt(x,new kt({vertexColors:!0,side:fe}));b.castShadow=b.receiveShadow=!0,o.add(b)}for(const[b,y]of h){const T=y.geometry();if(!T)continue;const E=new Kt(T,hu(e.get(b),{roof:!0}));E.receiveShadow=!0,o.add(E)}return o.add(E_(_)),o.add(T_(m)),{group:o,footprints:g}}function S_(i){const t=new N;for(let s=1;s+1<i.length&&t.lengthSq()<1e-6;s++){const r=new N(...i[0]),o=new N(...i[s]),a=new N(...i[s+1]);t.crossVectors(o.sub(r),a.sub(r))}if(t.lengthSq()<1e-6||(t.normalize(),t.y<0&&t.negate(),t.y>.995))return null;const e=new N(0,1,0).cross(t).normalize(),n=new N().crossVectors(t,e).normalize();return{eu:s=>s[0]*e.x+s[1]*e.y+s[2]*e.z,sv:s=>s[0]*n.x+s[1]*n.y+s[2]*n.z}}function b_(i){const e=new Map;for(const n of i)if(!n.canopy)for(let s=Math.floor(n.minX/16);s<=Math.floor(n.maxX/16);s++)for(let r=Math.floor(n.minZ/16);r<=Math.floor(n.maxZ/16);r++){const o=`${s},${r}`;e.has(o)||e.set(o,[]),e.get(o).push(n)}return function(s,r){for(const o of e.get(`${Math.floor(s/16)},${Math.floor(r/16)}`)||[]){if(s<o.minX||s>o.maxX||r<o.minZ||r>o.maxZ)continue;let a=!1;const c=o.pts;for(let l=0,h=c.length-1;l<c.length;h=l++)c[l][1]>r!=c[h][1]>r&&s<(c[h][0]-c[l][0])*(r-c[l][1])/(c[h][1]-c[l][1])+c[l][0]&&(a=!a);if(a)return!0}return!1}}function E_(i){const t=new _e;t.name="roof-items";const e=[0,1,2,3].map(g=>i.filter(_=>_.type===g)),n=new Jt,s=new ye,r=new N,o=new N,a=new N(0,1,0),c=(g,_,m,p,v)=>{if(!m.length)return;const M=new rn(g,_,m.length);m.forEach((x,b)=>{p(x),M.setMatrixAt(b,n),v&&M.setColorAt(b,v(x))}),M.castShadow=M.receiveShadow=!0,t.add(M)},l=new Nt(1,1,1);l.translate(0,.5,0),c(l,new kt,e[0],g=>{s.setFromAxisAngle(a,g.ang),n.compose(o.set(g.x,g.y,g.z),s,r.set(2.6,g.h||2.4,3))},g=>g.col);const h=new Ee(.55,.55,1.2,12);h.translate(0,.6,0);const u=[new Ot(15263970),new Ot(3829416),new Ot(2829099)];c(h,new kt,e[1],g=>{s.setFromAxisAngle(a,0),n.compose(o.set(g.x,g.y,g.z),s,r.set(1,1,1))},g=>u[Math.abs(Math.round(g.x*7+g.z*13))%u.length]);const f=new Nt(2,.08,1.2);f.rotateX(-.7),f.translate(0,.7,0),c(f,new kt({color:1911354}),e[2],g=>{s.setFromAxisAngle(a,0),n.compose(o.set(g.x,g.y,g.z),s,r.set(1,1,1))});const d=new Ee(.03,.03,3,4);return d.translate(0,1.5,0),c(d,new kt({color:7829367}),e[3],g=>{n.compose(o.set(g.x,g.y,g.z),s.identity(),r.set(1,1,1))}),t}function w_(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++)i[s][1]>e!=i[r][1]>e&&t<(i[r][0]-i[s][0])*(e-i[s][1])/(i[r][1]-i[s][1])+i[s][0]&&(n=!n);return n}function T_(i){const t=new _e;if(t.name="balconies",!i.length)return t;const e=new Nt(1.7,.12,.9);e.translate(0,.06,0);const n=new Nt(1.7,.95,.04);n.translate(0,.6,.43);const s=new Nt(.04,.95,.9);s.translate(-.83,.6,0);const r=s.clone();r.translate(1.66,0,0);const o=new kt({color:14078664}),a=document.createElement("canvas");a.width=128,a.height=64;const c=a.getContext("2d");c.fillStyle="#fff",c.fillRect(0,0,128,6),c.fillRect(0,56,128,4);for(let m=1;m<128;m+=8)c.fillRect(m,0,2,60);const l=new En(a);l.colorSpace=ce;const h=new kt({color:3817020,map:l,alphaTest:.5,side:fe}),u=new Jt,f=new ye,d=new N(1,1,1),g=new N,_=new N(0,1,0);for(const[m,p]of[[e,o],[n,h],[s,h],[r,h]]){const v=new rn(m,p,i.length);i.forEach((M,x)=>{f.setFromAxisAngle(_,M.ang),u.compose(g.set(M.x,M.y,M.z),f,d),v.setMatrixAt(x,u)}),v.castShadow=!0,v.receiveShadow=!0,t.add(v)}return t}const _n=32.95,ja=-8.54,Za=-31.15,fu=.275,du=-8.445,wc=-.2855,Tc=-.9584,pu=-.9584,mu=.2855,Xe=2,qe=29.2,tn=11.4;function gu(i,t){const e=i-fu,n=t-du;return[e*pu+n*mu,e*wc+n*Tc]}function ze(i,t){return[fu+pu*i+wc*t,du+mu*i+Tc*t]}function xu(i,t){const[e,n]=gu(i,t);if(e>-28&&e<30&&n>.2&&n<30.4)return!0;const s=e-Xe,r=n-qe;return r>=-.5&&s*s+r*r<=tn*tn}function A_(i,t){const[e,n]=gu(i,t);if(e>-24&&e<28&&n>2&&n<32)return!0;const s=e-Xe,r=n-qe;return r>-1&&s*s+r*r<tn*tn}function R_(i,t){return!xu(i,t)}function C_(i,t,e){return xu(i,t)&&Math.hypot(i-ja,t-Za)>3.15?Math.max(e,_n):e}function Bn(i,t){const e=new kt({color:i,side:fe,...t});return e.polygonOffset=!0,e.polygonOffsetFactor=-2,e.polygonOffsetUnits=-2,e}function P_(){const e=.017578125,n=document.createElement("canvas");n.width=n.height=1024;const s=n.getContext("2d"),r=1024/2,o=1024/2,a=l=>l/e;s.beginPath(),s.arc(r,o,a(4.7),0,Math.PI*2),s.fillStyle="#d9d2c4",s.fill(),s.beginPath(),s.arc(r,o,a(4.55),0,Math.PI*2),s.arc(r,o,a(3.7),0,Math.PI*2,!0),s.fillStyle="#b85a3c",s.fill();for(let l=0;l<48;l++){const h=l/48*Math.PI*2,u=(l+.86)/48*Math.PI*2,f=Math.abs(Math.sin(l*2.1));s.fillStyle=`rgb(${168+f*40},${82+f*28},${58+f*16})`,s.beginPath(),s.moveTo(r+Math.sin(h)*a(3.75),o+Math.cos(h)*a(3.75)),s.lineTo(r+Math.sin(h)*a(4.5),o+Math.cos(h)*a(4.5)),s.lineTo(r+Math.sin(u)*a(4.5),o+Math.cos(u)*a(4.5)),s.lineTo(r+Math.sin(u)*a(3.75),o+Math.cos(u)*a(3.75)),s.fill()}s.beginPath(),s.arc(r,o,a(3.72),0,Math.PI*2),s.arc(r,o,a(3.45),0,Math.PI*2,!0),s.fillStyle="#f3eee4",s.fill(),s.globalCompositeOperation="destination-out",s.beginPath(),s.arc(r,o,a(3.4),0,Math.PI*2),s.fill();const c=new En(n);return c.colorSpace=ce,c.anisotropy=8,c}const L_=[[-21.3,17.3],[-10.6,17.3],[16.1,17.3],[26.4,17.3]];function Ai(i){const t=Math.sin(i*127.1)*43758.5453;return t-Math.floor(t)}function D_(){const r=Math.ceil(2016),o=Math.ceil((27.5-12)*36),a=document.createElement("canvas");a.width=r,a.height=o;const c=a.getContext("2d"),l=x=>(x- -27)*36,h=x=>(x-12)*36,u=Math.ceil(.5*36);c.fillStyle="#d4cec1",c.fillRect(0,h(12.2),r,u);for(let x=-23.975;x<29;x+=5.35)c.fillRect(Math.round(l(x))-Math.floor(u/2),0,u,o);for(let x=15;x<27.5;x+=4.6)c.fillRect(0,Math.round(h(x))-Math.floor(u/2),r,u);const f=1.97,d=24.28,g=5.15*5.15,_=1,m=.5,p=4.5,v=2.7;for(const[x,b]of L_)for(let y=-v;y<=v+1e-9;y+=_)for(let T=-p;T<=p+1e-9;T+=_){if(Math.abs(T)/p+Math.abs(y)/v>.93)continue;const E=x+T,w=b+y,S=E-f,A=w-d;if(S*S+A*A<g)continue;const F=Math.round(T/_)+Math.round(y/_)&1;c.fillStyle=F?"#e4dccf":"#cec5b6",c.beginPath(),c.moveTo(l(E),h(w-m)),c.lineTo(l(E+m),h(w)),c.lineTo(l(E),h(w+m)),c.lineTo(l(E-m),h(w)),c.closePath(),c.fill()}const M=new En(a);return M.colorSpace=ce,M.anisotropy=8,{tex:M,u0:-27,u1:29,w0:12,w1:27.5}}function I_(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle="#cbb67a",t.fillRect(0,0,512,512);for(let n=0;n<90;n++){const s=Ai(n*3.1);t.fillStyle=s>.5?"#b6a15e":"#d8c48a",t.beginPath(),t.ellipse(Ai(n+1)*512,Ai(n+2)*512,18+s*70,10+Ai(n+4)*28,s*3,0,Math.PI*2),t.fill()}for(let n=0;n<2500;n++){const s=Ai(n*1.7+9);t.strokeStyle=`rgb(${120+s*70},${130+s*50},${50+s*30})`,t.lineWidth=1;const r=Ai(n+20)*512,o=Ai(n+40)*512;t.beginPath(),t.moveTo(r,o),t.lineTo(r+(s-.5)*8,o-4-s*7),t.stroke()}const e=new En(i);return e.wrapS=e.wrapT=gi,e.colorSpace=ce,e.anisotropy=8,e}function U_(i,t){const e=new _e;e.name="piazza-ve3";const n=_n,s=Bn(13616822),r=Bn(5208632),o=Bn(12870202),a=Bn(13928794),c=Bn(15196886),l=n+.04,h=(D,I,z,O,q,$)=>{const k=ze(D,I),rt=ze(z,I),dt=ze(z,O),G=ze(D,O),Z=new Qt;Z.setAttribute("position",new Ht([k[0],q,k[1],rt[0],q,rt[1],dt[0],q,dt[1],k[0],q,k[1],dt[0],q,dt[1],G[0],q,G[1]],3)),Z.computeVertexNormals();const ht=new Kt(Z,$);ht.receiveShadow=!0,e.add(ht)};{const D=new bn(18,18);D.rotateX(-Math.PI/2);const I=new Kt(D,new kt({map:P_(),transparent:!0,alphaTest:.35,side:fe,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));I.position.set(ja,n+.05,Za),I.receiveShadow=!0,e.add(I)}h(-29,-1,31,34,n+.015,Bn(9062974)),h(-28,.35,30,12.15,l,Bn(8816780));{const{tex:D,u0:I,u1:z,w0:O,w1:q}=D_(),$=ze(I,O),k=ze(z,O),rt=ze(z,q),dt=ze(I,q),G=l+.04,Z=new Qt;Z.setAttribute("position",new Ht([$[0],G,$[1],k[0],G,k[1],rt[0],G,rt[1],$[0],G,$[1],rt[0],G,rt[1],dt[0],G,dt[1]],3)),Z.setAttribute("uv",new Ht([0,0,1,0,1,1,0,0,1,1,0,1],2)),Z.computeVertexNormals();const ht=new Kt(Z,new kt({map:D,transparent:!0,alphaTest:.05,side:fe,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));ht.receiveShadow=!0,e.add(ht)}const u=I_(),f=new kt({map:u,side:fe});f.polygonOffset=!0,f.polygonOffsetFactor=-2,f.polygonOffsetUnits=-2;{const D=l+.035,[I,z]=ze(Xe,qe),O=96,q=[],$=[];for(let it=0;it<O;it++){const mt=-Math.PI/2+it/O*Math.PI,Rt=-Math.PI/2+(it+1)/O*Math.PI,xt=ze(Xe+Math.sin(mt)*tn,qe+Math.cos(mt)*tn),at=ze(Xe+Math.sin(Rt)*tn,qe+Math.cos(Rt)*tn);q.push(I,D,z,xt[0],D,xt[1],at[0],D,at[1]),$.push(.5,.15,.5+Math.sin(mt)*.45,.15+Math.cos(mt)*.7,.5+Math.sin(Rt)*.45,.15+Math.cos(Rt)*.7)}const k=new Qt;k.setAttribute("position",new Ht(q,3)),k.setAttribute("uv",new Ht($,2)),k.computeVertexNormals();const rt=new Kt(k,f);rt.receiveShadow=!0,e.add(rt);const dt=[],G=[];for(let it=0;it<O;it++){const mt=-Math.PI/2+it/O*Math.PI,Rt=-Math.PI/2+(it+1)/O*Math.PI,xt=st=>ze(Xe+Math.sin(st)*tn,qe+Math.cos(st)*tn),at=st=>ze(Xe+Math.sin(st)*(tn+2.6),qe+Math.cos(st)*(tn+2.6)),V=xt(mt),j=xt(Rt),L=at(mt),ot=at(Rt),Q=Math.min(n,i(L[0],L[1])+.12),ct=Math.min(n,i(ot[0],ot[1])+.12);dt.push(V[0],D,V[1],L[0],Q,L[1],ot[0],ct,ot[1],V[0],D,V[1],ot[0],ct,ot[1],j[0],D,j[1]),G.push(0,0,1,0,1,1,0,0,1,1,0,1)}const Z=new Qt;Z.setAttribute("position",new Ht(dt,3)),Z.setAttribute("uv",new Ht(G,2)),Z.computeVertexNormals();const ht=new Kt(Z,f);ht.receiveShadow=!0,e.add(ht)}const d=new He(1,18,14),g=[];for(let D=0;D<9;D++){const I=-Math.PI/2+(D+.35)/9*Math.PI,z=tn-.35;g.push([Xe+Math.sin(I)*z,qe+Math.cos(I)*z,.42+D%3*.16])}g.push([Xe-2.4,qe+3.6,.55],[Xe+3.1,qe+5.2,.48],[Xe+.4,qe+7.8,.7],[Xe-5.2,qe+6.4,.4]);const _=[7174718,9077832,6187576,8227402];g.forEach(([D,I,z],O)=>{const[q,$]=ze(D,I),k=new Kt(d,Bn(_[O%_.length]));k.scale.set(z,z*.82,z),k.position.set(q,n+z*.7,$),k.castShadow=!0,e.add(k)});const m=new N(0,1,0),p=Math.atan2(wc,Tc),v=new Nt(1.7,.1,.46),M=new Nt(.16,.36,.38);for(const[D,I]of[[Xe-8.4,qe-1.1],[Xe+8.6,qe-1.1]]){const[z,O]=ze(D,I),q=new ye().setFromAxisAngle(m,p);for(const[$,k,rt,dt,G]of[[v,c,.4,0,0],[M,s,.18,-.62,0],[M,s,.18,.62,0]]){const Z=new Kt($,k);Z.position.set(dt,rt,G).applyQuaternion(q),Z.position.add(new N(z,n,O)),Z.quaternion.copy(q),Z.castShadow=!0,e.add(Z)}}const x=new kt({color:16774364,emissive:16769192,emissiveIntensity:.18}),b=Bn(2764336);for(const[D,I]of[[-24,8.2],[26,8.2],[-20,26.5]]){const[z,O]=ze(D,I),q=new ye().setFromAxisAngle(m,p),$=(k,rt,dt,G,Z)=>{const ht=new Kt(k,rt);ht.position.set(dt,G,Z).applyQuaternion(q),ht.position.add(new N(z,n,O)),ht.quaternion.copy(q),ht.castShadow=!0,e.add(ht)};$(new Ee(.06,.09,4.2,8),b,0,2.1,0),$(new Nt(1.35,.05,.05),b,0,4.15,0);for(const k of[-.62,.62])$(new He(.2,12,10),x,k,4.25,0)}const y=(D,I,z,O,q)=>{if(!z.length)return;const $=new rn(D,I,z.length/O),k=new Jt,rt=new ye,dt=new N,G=new N(1,1,1);for(let Z=0;Z<z.length;Z+=O)q(z,Z,dt,rt,G),k.compose(dt,rt,G),$.setMatrixAt(Z/O,k);$.castShadow=$.receiveShadow=!0,e.add($)},T=[],E=(D,I,z,O,q)=>{const $=z-D,k=O-I,rt=Math.hypot($,k);let dt=-k/rt,G=$/rt;const Z=(D+z)/2,ht=(I+O)/2;(ja-Z)*dt+(Za-ht)*G<0&&(dt=-dt,G=-G);const it=Math.floor(rt/q);for(let mt=1;mt<it;mt++){const Rt=mt/it;T.push([D+$*Rt+dt*1.25,I+k*Rt+G*1.25])}};E(-21.7,-61.4,-37.6,-56,1.65),E(18.9,-74.6,-12.4,-64.2,2.4);const w=T.flat(),S=new Ee(.32,.22,.4,10),A=new Ee(.36,.34,.08,10),F=new Nt(.06,.015,.7);y(S,o,w,2,(D,I,z)=>{z.set(D[I],i(D[I],D[I+1])+.42,D[I+1])}),y(A,a,w,2,(D,I,z)=>{z.set(D[I],i(D[I],D[I+1])+.64,D[I+1])});const U=[];for(const[D,I]of T)for(let z=0;z<7;z++)U.push(D,I,z/7*Math.PI*2);const B=new Sn(-.7,0,0);return y(F,r,U,3,(D,I,z,O)=>{const q=D[I],$=D[I+1],k=D[I+2];z.set(q+Math.sin(k)*.22,i(q,$)+.88,$+Math.cos(k)*.22),B.y=k,O.setFromEuler(B)}),e.userData.night=D=>{x.emissiveIntensity=.15+D*1.6},e}const oh=400,N_=1400;function O_(i){const t=(s,r)=>{const o=new Ot(r),a=s.attributes.position.count,c=new Float32Array(a*3);for(let l=0;l<a;l++)c.set([o.r,o.g,o.b],l*3);return s.setAttribute("color",new ve(c,3)),s.toNonIndexed?s.toNonIndexed():s},e=(s,r,o=5981746)=>{const a=new Ee(r*.7,r,s,5,1,!0);return a.translate(0,s/2,0),t(a,o)},n=(s,r,o,a,c,l=0)=>{const h=new ao(1,l);return h.scale(s,r,o),h.translate(0,a,0),t(h,c)};switch(i){case 1:return xn([e(.72,.035,6965812),n(1,.16,1,.8,3099178),n(.7,.12,.7,.9,3824179)]);case 2:return xn([e(.4,.06,7035464),n(1,.38,.85,.64,8227428)]);case 3:return xn([e(.25,.05),n(1,.5,1,.55,2903845)]);case 4:return xn([e(.9,.03,9073240),n(1,.1,1,.92,4612399)]);case 5:return xn([n(1,.6,.9,.45,5599546)]);default:return xn([e(.45,.05),n(1,.45,1,.64,3889708)])}}function F_(i){const t=new _e;t.name="trees";const e=Math.floor(i.length/6);if(!e)return{group:t,update(){}};const n=[0,1,2,3,4,5].map(O_),s=new kt({vertexColors:!0,flatShading:!0}),r=new Map;for(let g=0;g<e;g++){const _=i[g*6],m=i[g*6+1];if(A_(_,m))continue;const p=`${Math.floor(_/oh)},${Math.floor(m/oh)},${i[g*6+5]}`;r.has(p)||r.set(p,[]),r.get(p).push(g)}const o=new Jt,a=new ye,c=new N,l=new N,h=new N(0,1,0),u=new Ot,f=[];for(const[g,_]of r){const m=+g.split(",")[2],p=new rn(n[m],s,_.length);_.forEach((v,M)=>{const x=i[v*6],b=i[v*6+1],y=i[v*6+2];let T=m===5?i[v*6+3]:Math.max(m===3?2.5:3,i[v*6+3]),E=m===5?i[v*6+4]:Math.max(1,i[v*6+4]);m!==5&&Math.hypot(x+8.54,b+31.15)<48&&(E>3.3&&(E=3.3),T>5.5&&(T=5.5)),a.setFromAxisAngle(h,v*2.39996%(Math.PI*2)),o.compose(l.set(x,y,b),a,c.set(E,T,E)),p.setMatrixAt(M,o);const w=Math.abs(Math.sin(v*12.9898)*43758.5453)%1;p.setColorAt(M,u.setScalar(.85+w*.3))}),p.computeBoundingSphere(),p.castShadow=m!==5,p.userData.far=m===5?450:N_,f.push(p),t.add(p)}function d(g){for(const _ of f)_.visible=_.boundingSphere.center.distanceTo(g.position)-_.boundingSphere.radius<_.userData.far}return{group:t,update:d}}function or(i,t,e,n=!0){const s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);const r=new En(s);return n&&(r.wrapS=r.wrapT=gi),r.colorSpace=ce,r.anisotropy=8,r}function ho(i){let t=i;return()=>(t=t*16807%2147483647)/2147483647}const z_=()=>or(512,512,(i,t,e)=>{const n=ho(7);i.fillStyle="#5c5d5f",i.fillRect(0,0,t,e);for(let s=0;s<18;s++)i.fillStyle=`rgba(${n()<.5?"40,40,42":"105,105,102"},${.04+n()*.05})`,i.beginPath(),i.ellipse(n()*t,n()*e,20+n()*90,10+n()*50,n()*3,0,7),i.fill();for(let s=0;s<16e3;s++){const r=50+n()*70;i.fillStyle=`rgba(${r},${r},${r-4},0.5)`,i.fillRect(n()*t,n()*e,1.5,1.5)}i.strokeStyle="rgba(20,20,20,0.35)",i.lineWidth=1.2;for(let s=0;s<5;s++){i.beginPath();let r=n()*t,o=n()*e;i.moveTo(r,o);for(let a=0;a<8;a++)r+=(n()-.5)*40,o+=(n()-.5)*40,i.lineTo(r,o);i.stroke()}}),B_=()=>or(256,256,(i,t,e)=>{const n=ho(11);i.fillStyle="#b9b3a8",i.fillRect(0,0,t,e);const s=5,r=t/s;for(let o=0;o<s;o++)for(let a=0;a<s;a++){const c=170+n()*30;i.fillStyle=`rgb(${c},${c-5},${c-14})`,i.fillRect(o*r+1,a*r+1,r-2,r-2)}for(let o=0;o<3e3;o++)i.fillStyle=`rgba(0,0,0,${n()*.08})`,i.fillRect(n()*t,n()*e,1,1)}),k_=()=>or(512,512,(i,t,e)=>{const n=ho(5);i.fillStyle="#5e584f",i.fillRect(0,0,t,e);const s=64,r=104;for(let o=0;o<e;o+=s){const a=o/s%2?r/2:0;for(let c=-r;c<t+r;c+=r){const l=196+n()*38,h=n()*16;i.fillStyle=`rgb(${Math.min(255,l+h*.15)},${l-8},${l-26-h})`,i.fillRect(c+a+4,o+4,r-8,s-8),i.strokeStyle=`rgba(255,250,240,${.04+n()*.05})`,i.strokeRect(c+a+4.5,o+4.5,r-9,s-9),i.strokeStyle=`rgba(70,62,52,${.12+n()*.12})`,i.beginPath(),i.moveTo(c+a+12,o+14+n()*10),i.lineTo(c+a+r-16,o+s-16),i.stroke()}}});function Ko(i){return or(512,512,(t,e,n)=>{const s=t.createImageData(e,n),r=s.data,o=64,a=32,c=l=>{const h=Math.sin(l*127.1)*43758.5453;return h-Math.floor(h)};for(let l=0;l<n;l++)for(let h=0;h<e;h++){const u=h+l,f=-h+l,d=Math.floor(f/a),g=u-(d&1)*(o/2),_=(g%o+o)%o,m=(f%a+a)%a,p=i==="brick"?5.2:3.5,v=_<p||m<p,M=c(Math.floor(g/o)*13+d*7);let x,b,y;i==="brick"?(x=168+M*48,b=86+M*28,y=62+M*16):i==="red"?(x=158+M*46,b=86+M*30,y=68+M*18):(x=208+M*34,b=190+M*28,y=162+M*20),v?(x*=.62,b*=.6,y*=.58):c(h*17+l*3)>.9&&(x*=.9,b*=.9,y*=.88);const T=(l*e+h)*4;r[T]=x,r[T+1]=b,r[T+2]=y,r[T+3]=255}t.putImageData(s,0,0)})}function H_(){return or(256,256,(i,t,e)=>{const n=ho(9);i.fillStyle="#5d7a3e",i.fillRect(0,0,t,e);for(let s=0;s<5e3;s++){const r=n()*t,o=n()*e,a=3+n()*6,c=-Math.PI/2+(n()-.5)*1.1,l=n();i.strokeStyle=`rgb(${70+l*60},${110+l*70},${40+l*30})`,i.lineWidth=1,i.beginPath(),i.moveTo(r,o),i.lineTo(r+Math.cos(c)*a,o+Math.sin(c)*a),i.stroke()}})}function G_(i){let t=0,e=0,n=0;for(let s=0;s<i.length;s+=2){const r=i[s],o=i[s+1],a=i[(s+2)%i.length],c=i[(s+3)%i.length],l=r*c-a*o;t+=l,e+=(r+a)*l,n+=(o+c)*l}return t*=.5,Math.abs(t)<.001?{x:i[0],z:i[1],a:0}:{x:e/(6*t),z:n/(6*t),a:Math.abs(t)}}function ah(i,t){return t<-4&&t>-68&&i>-50&&i<36&&Math.hypot(i+12,t+36)<42}function V_(i,t,e){return ah(i,t)&&e>400?"ve3":ah(i,t)?"brick":t<-8&&t>-62&&i>-198&&i<-120&&Math.hypot(i+156,t+32)<42?e>400?"garden":"red":t>16&&t<93&&i>-262&&i<-168&&Math.hypot(i+224,t-58)<78?"drive":Math.hypot(i+212,t-112)<28?"herring":"other"}function W_(i){const t={herring:[],drive:[],garden:[],red:[],other:[],ve3:[],brick:[]};for(const e of i||[]){const n=G_(e[0]);t[V_(n.x,n.z,n.a)].push(e)}return t}class Je{constructor(){this.p=[],this.u=[]}quad(t,e,n,s,r,o,a,c){this.p.push(...t,...e,...n,...t,...n,...s),this.u.push(...r,...o,...a,...r,...a,...c)}tri(t,e,n,s,r,o){this.p.push(...t,...e,...n),this.u.push(...s,...r,...o)}mesh(t,e=0){if(!this.p.length)return null;const n=new Qt;n.setAttribute("position",new Ht(this.p,3)),n.setAttribute("uv",new Ht(this.u,2)),n.computeVertexNormals();const s=new Kt(n,t);return s.receiveShadow=!0,s.renderOrder=e,s}}class Ri{constructor(){this.p=[],this.u=[],this.a=[]}quad(t,e,n,s,r,o,a,c,l,h,u,f){this.p.push(...t,...e,...n,...t,...n,...s),this.u.push(...r,...o,...a,...r,...a,...c),this.a.push(l,h,u,l,u,f)}tri(t,e,n,s,r,o,a,c,l){this.p.push(...t,...e,...n),this.u.push(...s,...r,...o),this.a.push(a,c,l)}mesh(t,e=0){if(!this.p.length)return null;const n=new Qt;n.setAttribute("position",new Ht(this.p,3)),n.setAttribute("uv",new Ht(this.u,2)),n.setAttribute("aFade",new Ht(this.a,1)),n.computeVertexNormals();const s=new Kt(n,t);return s.receiveShadow=!0,s.renderOrder=e,s}}function hi(i){this.rings=[],this.grid=new Map,this.CELL=48;for(const t of i||[])for(const e of t){if(!e||e.length<6)continue;let n=1/0,s=-1/0,r=1/0,o=-1/0;for(let c=0;c<e.length;c+=2)n=Math.min(n,e[c]),s=Math.max(s,e[c]),r=Math.min(r,e[c+1]),o=Math.max(o,e[c+1]);const a=this.rings.length;this.rings.push(e);for(let c=Math.floor(n/this.CELL);c<=Math.floor(s/this.CELL);c++)for(let l=Math.floor(r/this.CELL);l<=Math.floor(o/this.CELL);l++){const h=`${c},${l}`;this.grid.has(h)||this.grid.set(h,[]),this.grid.get(h).push(a)}}}hi.prototype.contains=function(i,t){const e=this.grid.get(`${Math.floor(i/this.CELL)},${Math.floor(t/this.CELL)}`);if(!e)return!1;let n=!1;for(const s of e){const r=this.rings[s];for(let o=0,a=r.length-2;o<r.length;a=o,o+=2){const c=r[o+1],l=r[a+1];c>t!=l>t&&i<(r[a]-r[o])*(t-c)/(l-c)+r[o]&&(n=!n)}}return n};const ln=.85;function os(i,t,e,n,s,r,o,a,c,l,h){if(!i?.length)return;const u=new hi(i),f=(g,_,m,p)=>Math.abs(g-m)<.01&&Math.abs(g/l-Math.round(g/l))<1e-4||Math.abs(_-p)<.01&&Math.abs(_/l-Math.round(_/l))<1e-4,d=(g,_,m)=>[g,s(g,_)+m,_];for(const g of i)for(const _ of g){const m=_.length>>1;if(m<3)continue;const p=[];for(let v=0;v<m;v++){const M=(v+1)%m,x=_[v*2],b=_[v*2+1],y=_[M*2],T=_[M*2+1],E={x0:x,z0:b,x1:y,z1:T,mode:"skip",ox:0,oz:0};p.push(E);const w=Math.hypot(y-x,T-b);if(w<.08||f(x,b,y,T))continue;const S=-(T-b)/w,A=(y-x)/w,F=(x+y)/2,U=(b+T)/2;let B=!1;for(const I of[1,-1])if(!u.contains(F+S*I*.35,U+A*I*.35)){E.ox=S*I,E.oz=A*I,B=!0;break}if(!B||r(F+E.ox*.55,U+E.oz*.55))continue;let D=null;for(const I of o)if(I.index.contains(F+E.ox*.7,U+E.oz*.7)){D=I.kind;break}if(D){h&&D==="asphalt"&&(E.mode="curb");continue}E.mode="skirt"}for(const v of p){const M=Math.hypot(v.x1-v.x0,v.z1-v.z0),x=Math.max(1,Math.ceil(M/bs));for(let b=0;b<x;b++){const y=v.x0+(v.x1-v.x0)*b/x,T=v.z0+(v.z1-v.z0)*b/x,E=v.x0+(v.x1-v.x0)*(b+1)/x,w=v.z0+(v.z1-v.z0)*(b+1)/x;if(v.mode==="skirt"){const S=y+v.ox*ln,A=T+v.oz*ln,F=E+v.ox*ln,U=w+v.oz*ln,B=(D,I)=>[D/n,I/n];a.quad(d(y,T,t),d(E,w,t),d(F,U,e),d(S,A,e),B(y,T),B(E,w),B(F,U),B(S,A),1,1,0,0)}else if(v.mode==="curb"){const S=s(y,T)+e,A=s(E,w)+e,F=t-e;c.quad([y,S,T],[E,A,w],[E,A+F,w],[y,S+F,T],[0,0],[1,0],[1,1],[0,1])}}}for(let v=0;v<m;v++){const M=p[(v-1+m)%m],x=p[v];if(M.mode!=="skirt"||x.mode!=="skirt")continue;const b=x.x0,y=x.z0,T=b+M.ox*ln,E=y+M.oz*ln,w=b+x.ox*ln,S=y+x.oz*ln;if(Math.hypot(T-w,E-S)<.04)continue;const A=(F,U)=>[F/n,U/n];a.tri(d(b,y,t),d(T,E,e),d(w,S,e),A(b,y),A(T,E),A(w,S),1,0,0)}}}function X_(i,t,e,n,s,r,o){if(!i?.length)return;const a=new hi(i),c=(u,f,d,g)=>Math.abs(u-d)<.01&&Math.abs(u/r-Math.round(u/r))<1e-4||Math.abs(f-g)<.01&&Math.abs(f/r-Math.round(f/r))<1e-4,l=(u,f)=>[u,s(u,f)+e,f],h=(u,f)=>[u/n,f/n];for(const u of i)for(const f of u){const d=f.length>>1;if(d<3)continue;const g=[];for(let _=0;_<d;_++){const m=(_+1)%d,p=f[_*2],v=f[_*2+1],M=f[m*2],x=f[m*2+1],b={x0:p,z0:v,x1:M,z1:x,ix:0,iz:0,on:!1};g.push(b);const y=Math.hypot(M-p,x-v);if(y<.15||c(p,v,M,x))continue;const T=-(x-v)/y,E=(M-p)/y,w=(p+M)/2,S=(v+x)/2;for(const F of[1,-1])if(a.contains(w+T*F*.4,S+E*F*.4)&&!a.contains(w-T*F*.4,S-E*F*.4)){b.ix=T*F,b.iz=E*F,b.on=!0;break}if(!b.on)continue;const A=Math.max(1,Math.ceil(y/bs));for(let F=0;F<A;F++){const U=p+(M-p)*F/A,B=v+(x-v)*F/A,D=p+(M-p)*(F+1)/A,I=v+(x-v)*(F+1)/A,z=U+b.ix*t,O=B+b.iz*t,q=D+b.ix*t,$=I+b.iz*t;o.quad(l(U,B),l(D,I),l(q,$),l(z,O),h(U,B),h(D,I),h(q,$),h(z,O))}}for(let _=0;_<d;_++){const m=g[(_-1+d)%d],p=g[_];if(!m.on||!p.on)continue;const v=p.x0,M=p.z0,x=v+m.ix*t,b=M+m.iz*t,y=v+p.ix*t,T=M+p.iz*t;Math.hypot(x-y,b-T)<.04||o.tri(l(v,M),l(x,b),l(y,T),h(v,M),h(x,b),h(y,T))}}}function Ci(i){const t=new kt({map:i,side:fe,alphaToCoverage:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});return t.customProgramCacheKey=()=>"surf-fade",t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float aFade;
varying float vFade;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vFade = aFade;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vFade;`).replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;",`diffuseColor.a *= vFade;
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;`)},t}function q_(i,t=[]){const e=[];for(let r=0;r<i.length;r+=2)e.push({x:i[r],z:i[r+1],e:t.map(o=>o[r/2])});const n=[e[0]];for(let r=1;r<e.length;r++){const o=e[r-1],a=e[r],c=Math.hypot(a.x-o.x,a.z-o.z),l=Math.max(1,Math.ceil(c/3));for(let h=1;h<=l;h++)n.push({x:o.x+(a.x-o.x)*h/l,z:o.z+(a.z-o.z)*h/l,e:o.e.map((u,f)=>u+(a.e[f]-u)*h/l)})}let s=0;return n.forEach((r,o)=>{const a=n[Math.max(0,o-1)],c=n[Math.min(n.length-1,o+1)];let l=c.x-a.x,h=c.z-a.z;const u=Math.hypot(l,h)||1;l/=u,h/=u,r.nx=-h,r.nz=l,o&&(s+=Math.hypot(r.x-n[o-1].x,r.z-n[o-1].z)),r.s=s}),n}const bs=6;function Tn(i,t,e,n,s,r=null,o=null){for(const a of i){const c=g=>{const _=[];for(let m=0;m<g.length;m+=2){const p=g[m],v=g[m+1],M=g[(m+2)%g.length],x=g[(m+3)%g.length],b=Math.max(1,Math.ceil(Math.hypot(M-p,x-v)/bs));for(let y=0;y<b;y++)_.push(new pt(p+(M-p)*y/b,v+(x-v)*y/b))}return _},l=c(a[0]),h=a.slice(1).map(c),u=l.concat(...h),d=Pn.triangulateShape(l,h).map(([g,_,m])=>[[u[g].x,u[g].y],[u[_].x,u[_].y],[u[m].x,u[m].y]]);for(;d.length;){const g=d.pop();let _=-1,m=(bs*1.6)**2;for(let b=0;b<3;b++){const y=g[b],T=g[(b+1)%3],E=(y[0]-T[0])**2+(y[1]-T[1])**2;E>m&&(m=E,_=b)}if(_<0){if(o){const b=(g[0][0]+g[1][0]+g[2][0])/3,y=(g[0][1]+g[1][1]+g[2][1])/3;if(o(b,y))continue}for(const[b,y]of g)s.p.push(b,r??t(b,y)+e,y),s.u.push(b/n,y/n);continue}const p=g[_],v=g[(_+1)%3],M=g[(_+2)%3],x=[(p[0]+v[0])/2,(p[1]+v[1])/2];d.push([p,x,M],[x,v,M])}}}function Y_(i,t,e,n,s){if(!i?.length)return;const r=new hi(i);for(const o of i){const a=o[0],c=a.length>>1;if(!(c<3))for(let l=0;l<c;l++){const h=(l+1)%c,u=a[l*2],f=a[l*2+1],d=a[h*2],g=a[h*2+1],_=Math.hypot(d-u,g-f);if(_<.2)continue;let m=-(g-f)/_,p=(d-u)/_;const v=(u+d)/2,M=(f+g)/2;if(r.contains(v+m*.4,M+p*.4)&&(m=-m,p=-p),r.contains(v+m*.45,M+p*.45)||t-n(v+m,M+p)>.48)continue;const x=Math.max(1,Math.ceil(_/bs));for(let b=0;b<x;b++){const y=u+(d-u)*b/x,T=f+(g-f)*b/x,E=u+(d-u)*(b+1)/x,w=f+(g-f)*(b+1)/x,S=y+m*ln,A=T+p*ln,F=E+m*ln,U=w+p*ln,B=(z,O)=>[z/e,O/e],D=(z,O)=>[z,t,O],I=(z,O)=>[z,n(z,O)+.2,O];s.quad(D(y,T),D(E,w),I(F,U),I(S,A),B(y,T),B(E,w),B(F,U),B(S,A),1,1,0,0)}}}}function $_(i,t,e=()=>!1){const n=new _e;n.name="streets";const s=new Je,r=new Je,o=new Je,a=new Je,c=new Je,l=new Je,h=new Je,u=new Je,f=new Je,d=new Je,g=new Je,_=new Je,m=new Je,p=new Ri,v=new Ri,M=new Ri,x=new Ri,b=new Ri,y=new Ri,T=new Ri,E=.2,w=.12,S=.08,A=i.junctions,F=(xt,at,V)=>A.some(([j,L,ot])=>Math.abs(j-xt)<ot+V&&Math.abs(L-at)<ot+V&&Math.hypot(j-xt,L-at)<ot+V),U=i.surf;U.plaza=U.plaza||[];const B=W_(U.plaza);Tn(U.asphalt,t,E,4,s),Tn(U.walk,t,E+w,1.6,r),Tn(U.paving,t,E+.04,2.2,c),Tn(B.ve3,t,0,2.2,_,_n,R_),Tn(B.brick,t,E+S,2.2,m),Y_(B.ve3,_n,2.2,t,T),Tn(B.herring,t,E+S,2.4,l),Tn(B.other,t,E+S,2.8,h),Tn(B.drive,t,E+.012,4,u),Tn(B.garden,t,E-.02,3.2,f),Tn(B.red,t,E+.06,2.2,d),X_(B.garden,2.6,E+.08,2.2,t,U.tile,g);const D={asphalt:new hi(U.asphalt),walk:new hi(U.walk),paving:new hi(U.paving),plaza:new hi(U.plaza)},I=(...xt)=>xt.map(at=>({kind:at,index:D[at]})),z=I("asphalt","walk","paving","plaza");os(U.asphalt,E,E,4,t,e,I("walk","paving","plaza"),p,o,U.tile,!1),os(U.paving,E+.04,E+.04,2.2,t,e,I("asphalt","walk","plaza"),v,o,U.tile,!1),os(B.herring,E+S,E,2.4,t,e,z,M,o,U.tile,!0),os(B.other,E+S,E,2.8,t,e,z,x,o,U.tile,!0),os(B.drive,E+.012,E,4,t,e,z,b,o,U.tile,!1),os(B.red,E+.06,E,2.2,t,e,z,y,o,U.tile,!0);const O=(xt,at,V,j)=>Math.abs(xt-V)<.01&&Math.abs(xt/U.tile-Math.round(xt/U.tile))<1e-4||Math.abs(at-j)<.01&&Math.abs(at/U.tile-Math.round(at/U.tile))<1e-4;for(const xt of U.walk)for(const at of xt)for(let V=0;V<at.length;V+=2){const j=(V+2)%at.length,L=at[V],ot=at[V+1],Q=at[j],ct=at[j+1];if(O(L,ot,Q,ct))continue;const st=Math.hypot(Q-L,ct-ot)||1,Mt=(L+Q)/2,ft=(ot+ct)/2,P=-(ct-ot)/st*.4,R=(Q-L)/st*.4;if(e(Mt+P,ft+R)||e(Mt-P,ft-R))continue;const Y=Math.max(1,Math.ceil(st/bs));for(let tt=0;tt<Y;tt++){const lt=L+(Q-L)*tt/Y,nt=ot+(ct-ot)*tt/Y,At=L+(Q-L)*(tt+1)/Y,vt=ot+(ct-ot)*(tt+1)/Y,bt=t(lt,nt)+E,Vt=t(At,vt)+E;o.quad([lt,bt,nt],[At,Vt,vt],[At,Vt+w,vt],[lt,bt+w,nt],[0,0],[1,0],[1,1],[0,1])}}for(const xt of i.roads){if(!xt.mk)continue;const at=q_(xt.p);for(let V=1;V<at.length;V++){const j=at[V-1],L=at[V];if(Math.floor(j.s/3)%2||F(j.x,j.z,2)||F(L.x,L.z,2))continue;const ot=.07,Q=(ct,st)=>{const Mt=ct.x+ct.nx*st,ft=ct.z+ct.nz*st;return[Mt,t(Mt,ft)+E+.03,ft]};a.quad(Q(j,ot),Q(j,-ot),Q(L,-ot),Q(L,ot),[0,0],[1,0],[1,1],[0,1])}}for(const[xt,at,V,j]of i.crossings){const L=Math.sin(V),ot=Math.cos(V),Q=-ot,ct=L,st=Math.max(3,Math.floor(j/1));for(let Mt=0;Mt<st;Mt++){const ft=-j/2+.25+Mt*(j-.5)/Math.max(1,st-1),P=xt+Q*ft,R=at+ct*ft,Y=(tt,lt)=>{const nt=P+L*tt+Q*lt,At=R+ot*tt+ct*lt;return[nt,t(nt,At)+E+.03,At]};a.quad(Y(-1.5,-.25),Y(-1.5,.25),Y(1.5,.25),Y(1.5,-.25),[0,0],[1,0],[1,1],[0,1])}}const q=xt=>(xt.side=fe,xt.polygonOffset=!0,xt.polygonOffsetFactor=-2,xt.polygonOffsetUnits=-2,xt),$=xt=>xt&&n.add(xt),k=k_(),rt=z_(),dt=Ko("beige"),G=Ko("red"),Z=H_(),ht=Ko("brick"),it=q(new kt({map:rt}));$(s.mesh(it,1)),$(u.mesh(it,1)),$(r.mesh(new kt({map:B_(),side:fe}),2)),$(o.mesh(new kt({color:14998736,side:fe}),2));const mt=q(new kt({color:15921902}));mt.polygonOffsetFactor=-6,mt.polygonOffsetUnits=-6,$(a.mesh(mt,3)),$(c.mesh(q(new kt({map:k})),1)),$(l.mesh(q(new kt({map:dt})),1)),$(_.mesh(q(new kt({map:ht,color:8013372})),1)),$(m.mesh(q(new kt({map:ht})),1)),$(h.mesh(q(new kt({map:k})),1)),$(f.mesh(q(new kt({map:Z})),1));const Rt=q(new kt({map:G}));return $(d.mesh(Rt,1)),$(g.mesh(Rt,2)),$(p.mesh(Ci(rt),3)),$(v.mesh(Ci(k),3)),$(M.mesh(Ci(dt),3)),$(x.mesh(Ci(k),3)),$(b.mesh(Ci(rt),3)),$(y.mesh(Ci(G),3)),$(T.mesh(Ci(ht),3)),n.add(U_(t,B.ve3)),n.add(K_(i.benches,t)),n.add(j_(i.walls||[],t)),n.add(Z_(i.lamps||[],t)),n}function j_(i,t){const e=[[1.8,.25,14275009],[1.4,.4,11050378],[1,.45,9800312],[1.5,.05,3753531]],n=[],s=[],r=new Ot,o=(l,h,u,f,d,g)=>{const _=h[0]-l[0],m=h[1]-l[1],p=Math.hypot(_,m);if(p<.05)return;const v=-m/p*f/2,M=_/p*f/2,x=(y,T,E)=>[y[0]+v*T,E,y[1]+M*T],b=(y,T,E,w)=>{n.push(...y,...T,...E,...y,...E,...w);for(let S=0;S<6;S++)s.push(r.r,r.g,r.b)};for(const y of[1,-1])b(x(l,y,d),x(h,y,g),x(h,y,g+u),x(l,y,d+u));b(x(l,1,d+u),x(h,1,g+u),x(h,-1,g+u),x(l,-1,d+u))};for(const l of i){const[h,u,f]=e[l.k];r.setHex(f);for(let d=2;d<l.p.length;d+=2){const g=[l.p[d-2],l.p[d-1]],_=[l.p[d],l.p[d+1]],m=Math.max(1,Math.ceil(Math.hypot(_[0]-g[0],_[1]-g[1])/8));for(let p=0;p<m;p++){const v=[g[0]+(_[0]-g[0])*p/m,g[1]+(_[1]-g[1])*p/m],M=[g[0]+(_[0]-g[0])*(p+1)/m,g[1]+(_[1]-g[1])*(p+1)/m];o(v,M,h,u,t(...v)-.3,t(...M)-.3)}}}const a=new Qt;a.setAttribute("position",new Ht(n,3)),a.setAttribute("color",new Ht(s,3)),a.computeVertexNormals();const c=new Kt(a,new kt({vertexColors:!0,side:fe}));return c.castShadow=c.receiveShadow=!0,c.name="walls",c}function Z_(i,t){const e=new _e;if(e.name="lamps",!i.length)return e;const n=new Ee(.06,.09,6.5,6);n.translate(0,3.25,0);const s=new Nt(.06,.06,1.3);s.translate(0,6.4,.6);const r=new Nt(.28,.12,.55);r.translate(0,6.33,1.2);const o=new kt({color:4869970}),a=new kt({color:16774358,emissive:16760944,emissiveIntensity:.1}),c=new Jt,l=new ye,h=new N(1,1,1),u=new N,f=new N(0,1,0);for(const[E,w]of[[n,o],[s,o],[r,a]]){const S=new rn(E,w,i.length);i.forEach(([A,F,U],B)=>{l.setFromAxisAngle(f,U),c.compose(u.set(A,t(A,F)+.3,F),l,h),S.setMatrixAt(B,c)}),S.castShadow=!0,e.add(S)}const d=document.createElement("canvas");d.width=d.height=256;const g=d.getContext("2d"),_=g.createRadialGradient(128,128,0,128,128,128);_.addColorStop(0,"rgba(255,226,186,0.50)"),_.addColorStop(.08,"rgba(255,210,155,0.22)"),_.addColorStop(.22,"rgba(255,196,130,0.08)"),_.addColorStop(.42,"rgba(255,184,114,0.025)"),_.addColorStop(.62,"rgba(255,176,100,0)"),_.addColorStop(1,"rgba(255,170,90,0)"),g.fillStyle=_,g.fillRect(0,0,256,256);const m=new En(d);m.colorSpace=ce;const p=new sr({map:m,transparent:!0,depthWrite:!1,blending:$s,opacity:0,fog:!1,polygonOffset:!0,polygonOffsetFactor:-8,polygonOffsetUnits:-8}),v=new bn(18,18);v.rotateX(-Math.PI/2);const M=new rn(v,p,i.length),x=new Float32Array(i.length*3);i.forEach(([E,w,S],A)=>{const F=E+Math.sin(S)*1.2,U=w+Math.cos(S)*1.2;c.compose(u.set(F,t(F,U)+.36,U),l.identity(),h),M.setMatrixAt(A,c),x.set([F,t(E,w)+.3+6.25,U],A*3)}),M.renderOrder=4,M.frustumCulled=!1;const b=new Qt;b.setAttribute("position",new ve(x,3));const y=new xc({map:m,size:16,transparent:!0,depthWrite:!1,blending:$s,opacity:0,sizeAttenuation:!0}),T=new Kh(b,y);return T.frustumCulled=!1,e.add(M,T),e.userData.night=E=>{p.opacity=E*.4,y.opacity=E*.85,a.emissiveIntensity=.2+E*1.2,M.visible=T.visible=E>.01},e}function K_(i,t){const e=new _e;if(!i.length)return e;const n=new Nt(1.8,.08,.45);n.translate(0,.45,0);const s=new Nt(1.8,.45,.06);s.translate(0,.72,-.2);const r=new Nt(.06,.42,.4);r.translate(-.8,.21,0);const o=new Nt(.06,.42,.4);o.translate(.8,.21,0);const a=new kt({color:9067835}),c=new kt({color:3095091}),l=[[n,a],[s,a],[r,c],[o,c]],h=new Jt,u=new ye,f=new N(1,1,1),d=new N;for(const[g,_]of l){const m=new rn(g,_,i.length);i.forEach(([p,v],M)=>{u.setFromAxisAngle(new N(0,1,0),(p*13+v*7)%6.28),h.compose(d.set(p,t(p,v)+.07,v),u,f),m.setMatrixAt(M,h)}),m.castShadow=!0,e.add(m)}return e}const Jo=128;function _i(i){const t=document.createElement("canvas");t.width=Jo,t.height=Jo,i(t.getContext("2d"),Jo);const e=new En(t);return e.colorSpace=ce,e.anisotropy=8,e}const le={red:"#D0021B",white:"#FFFFFF",black:"#1A1A1A",blue:"#003DA5"},J_=_i((i,t)=>{const e=t/2,n=8;i.save(),i.translate(e,e),i.beginPath();for(let s=0;s<n;s++){const r=Math.PI/4*s+Math.PI/8,o=Math.cos(r)*(e-2),a=Math.sin(r)*(e-2);s===0?i.moveTo(o,a):i.lineTo(o,a)}i.closePath(),i.fillStyle=le.red,i.fill(),i.strokeStyle=le.white,i.lineWidth=5,i.stroke(),i.fillStyle=le.white,i.font=`bold ${t*.28}px Arial`,i.textAlign="center",i.textBaseline="middle",i.fillText("STOP",0,2),i.restore()}),Q_=_i((i,t)=>{i.fillStyle=le.white,i.fillRect(0,0,t,t),i.beginPath(),i.moveTo(4,4),i.lineTo(t-4,4),i.lineTo(t/2,t-4),i.closePath(),i.fillStyle=le.white,i.fill(),i.strokeStyle=le.red,i.lineWidth=7,i.stroke();const n=14;i.beginPath(),i.moveTo(n,n+2),i.lineTo(t-n,n+2),i.lineTo(t/2,t-n),i.closePath(),i.strokeStyle=le.red,i.lineWidth=2,i.stroke()}),tv=_i((i,t)=>{i.fillStyle=le.blue,i.fillRect(0,0,t,t);const e=t/2,n=t/2,s=t*.14,r=t*.45,o=t*.28;i.fillStyle=le.white,i.beginPath(),i.rect(e-r,n-s/2,r,s),i.fill(),i.beginPath(),i.moveTo(e,n-o/2),i.lineTo(e+o*.8,n),i.lineTo(e,n+o/2),i.closePath(),i.fill(),i.fillStyle=le.white,i.font=`bold ${t*.13}px Arial`,i.textAlign="center",i.textBaseline="bottom",i.fillText("SENSO UNICO",e,t-4)}),ev=_i((i,t)=>{const e=t/2-3;i.fillStyle=le.white,i.beginPath(),i.arc(t/2,t/2,e,0,Math.PI*2),i.fill(),i.strokeStyle=le.red,i.lineWidth=8,i.stroke(),i.fillStyle=le.red,i.fillRect(t*.1,t/2-t*.14,t*.8,t*.28),i.globalCompositeOperation="destination-in",i.beginPath(),i.arc(t/2,t/2,e,0,Math.PI*2),i.fill(),i.globalCompositeOperation="source-over"});function _u(i){return _i((t,e)=>{const n=e/2-3;t.fillStyle=le.white,t.beginPath(),t.arc(e/2,e/2,n,0,Math.PI*2),t.fill(),t.strokeStyle=le.red,t.lineWidth=9,t.stroke(),t.fillStyle=le.black,t.font=`bold ${i>=100?e*.3:e*.38}px Arial`,t.textAlign="center",t.textBaseline="middle",t.fillText(String(i),e/2,e/2+1)})}const nv=_u(30),iv=_u(50),sv=_i((i,t)=>{i.fillStyle=le.white,i.fillRect(0,0,t,t),i.beginPath(),i.moveTo(t/2,3),i.lineTo(t-3,t-3),i.lineTo(3,t-3),i.closePath(),i.fillStyle=le.white,i.fill(),i.strokeStyle=le.red,i.lineWidth=7,i.stroke();const n=t/2,s=t*.3;i.fillStyle=le.black,i.beginPath(),i.arc(n,s,t*.07,0,Math.PI*2),i.fill(),i.fillRect(n-3,s+t*.07,6,t*.22),i.save(),i.translate(n,s+t*.29),i.rotate(-.3),i.fillRect(-2,0,4,t*.18),i.restore(),i.save(),i.translate(n,s+t*.29),i.rotate(.3),i.fillRect(-2,0,4,t*.18),i.restore(),i.save(),i.translate(n,s+t*.13),i.rotate(.5),i.fillRect(-2,0,4,t*.16),i.restore()}),rv=_i((i,t)=>{i.fillStyle=le.white,i.fillRect(0,0,t,t),i.beginPath(),i.moveTo(t/2,3),i.lineTo(t-3,t-3),i.lineTo(3,t-3),i.closePath(),i.fillStyle=le.white,i.fill(),i.strokeStyle=le.red,i.lineWidth=7,i.stroke(),i.beginPath(),i.moveTo(t/2,15),i.lineTo(t-3-12,t-3-5),i.lineTo(15,t-3-5),i.closePath(),i.strokeStyle=le.red,i.lineWidth=1.5,i.stroke(),i.fillStyle=le.black,i.font=`bold ${t*.42}px Arial`,i.textAlign="center",i.textBaseline="middle",i.fillText("!",t/2,t*.6)}),ov=_i((i,t)=>{const e=t-8,n=t*.55,s=4,r=(t-n)/2;i.beginPath(),i.moveTo(s,r),i.lineTo(s+e*.72,r),i.lineTo(s+e,r+n/2),i.lineTo(s+e*.72,r+n),i.lineTo(s,r+n),i.closePath(),i.fillStyle=le.blue,i.fill(),i.fillStyle=le.white,i.font=`bold ${t*.16}px Arial`,i.textAlign="center",i.textBaseline="middle",i.fillText("ACQUEDOLCI",t/2-t*.04,t/2)}),av={stop:[.6,.6],precedenza:[.7,.7],senso_unico:[.5,.35],divieto_acc:[.6,.6],limite_30:[.6,.6],limite_50:[.6,.6],pedoni:[.65,.65],pericolo:[.65,.65],direzione:[.7,.35]},cv={stop:2.2,precedenza:2.1,senso_unico:2.15,divieto_acc:2.2,limite_30:2.1,limite_50:2.15,pedoni:2.3,pericolo:2.3,direzione:2.2},lv={stop:J_,precedenza:Q_,senso_unico:tv,divieto_acc:ev,limite_30:nv,limite_50:iv,pedoni:sv,pericolo:rv,direzione:ov};function hv(i,t){return new bn(i,t)}function uv(i,t){const e=new _e;e.name="cartelli-stradali";const n=i.signs||[];if(!n.length)return e;const s={};for(const f of n)(s[f.type]=s[f.type]||[]).push(f);const r=2.5,o=.025,a=new Ee(o,o,r,6),c=new kt({color:8947848}),l=new rn(a,c,n.length);l.castShadow=!1,l.receiveShadow=!1,l.name="pali-cartelli";const h=new Re,u=new ye;n.forEach(({x:f,z:d},g)=>{const _=t(f,d);h.position.set(f,_+r/2,d),h.quaternion.copy(u),h.scale.setScalar(1),h.updateMatrix(),l.setMatrixAt(g,h.matrix)}),l.instanceMatrix.needsUpdate=!0,e.add(l),new N(0,1,0);for(const[f,d]of Object.entries(s)){const g=lv[f];if(!g)continue;const[_,m]=av[f]||[.6,.6],p=cv[f]||2.2,v=new kt({map:g,transparent:!1,side:fe,depthWrite:!0}),M=hv(_,m),x=new rn(M,v,d.length);x.castShadow=!1,x.name=`cartello-${f}`,d.forEach(({x:b,z:y,ang:T},E)=>{const w=t(b,y);h.position.set(b,w+p,y),h.rotation.set(0,T,0),h.scale.setScalar(1),h.updateMatrix(),x.setMatrixAt(E,h.matrix)}),x.instanceMatrix.needsUpdate=!0,e.add(x)}return e}const Zr=new N(0,1,0);function fv(i,t){return Math.atan2(-t,i)}function dv(i,t,e,n,s,r,o,a){const c=e-i,l=n-t,h=Math.hypot(c,l);if(h<.4)return;const u=c/h,f=l/h,d=fv(u,f),g=Math.max(2,Math.round(h/.14));for(let m=0;m<=g;m++){const p=m/g,v=i+c*p,M=t+l*p,x=s(v,M)+.28,b=m%12===0;(b?o:r).push(v,x+(b?.62:.52),M,d)}const _=Math.max(1,Math.ceil(h/2.2));for(let m=0;m<_;m++){const p=(m+.5)/_,v=i+c*p,M=t+l*p,x=s(v,M)+.28;a.push(v,x+.42,M,d,h/_),a.push(v,x+1.02,M,d,h/_)}}function Qo(i,t,e,n){if(!e.length)return null;const s=new rn(i,t,e.length),r=new Jt,o=new ye,a=new N(1,1,1),c=new N;return e.forEach((l,h)=>{n(l,c,o,a),r.compose(c,o,a),s.setMatrixAt(h,r)}),s.castShadow=!0,s.receiveShadow=!0,s}function ch(i,t,e,n,s,r,o){const a=t(e,n)+.25,c=new ye().setFromAxisAngle(Zr,s),l=(h,u,f,d,g)=>{const _=new Kt(h,u);_.position.set(d,f,g).applyQuaternion(c).add(new N(e,a,n)),_.quaternion.copy(c),_.castShadow=!0,i.add(_)};l(r.pole,o.metal,r.poleH/2,0,0);for(const h of r.arms)l(r.arm,o.metal,r.armY,h*.7,0),l(r.head,o.light,r.headY,h,0)}function pv(i){const t=new _e;t.name="plaza-props";const e=new kt({color:1842722}),n=new kt({color:4869970}),s=new kt({color:16774880,emissive:16769712,emissiveIntensity:.2}),r=new kt({color:16774358,emissive:16760944,emissiveIntensity:.12}),o=new kt({color:14011320}),a=new kt({color:4876856}),c=new kt({color:9067835}),l=new kt({color:5981746}),h=new kt({color:3889708}),u=[3.2,1.3],f=[[[11.37,-11.75],[17.16,7.68]],[[-5.03,14.29],[-10.82,-5.14]]],d=[],g=[],_=[];for(const[[at,V],[j,L]]of f){const ot=(at+j)/2,Q=(V+L)/2;let ct=ot-u[0],st=Q-u[1],Mt=Math.hypot(ct,st)||1;ct/=Mt,st/=Mt;const ft=1.35;dv(at+ct*ft,V+st*ft,j+ct*ft,L+st*ft,i,d,g,_)}const m=(at,V)=>{const j=[];for(let L=0;L<at.length;L+=V)j.push(at.slice(L,L+V));return j},p=m(d,4),v=m(g,4),M=m(_,5),x=new Nt(.018,1.02,.018),b=new Nt(.055,1.22,.055),y=new Nt(1,.028,.02),T=(at,V,j,L)=>{V.set(at[0],at[1],at[2]),j.setFromAxisAngle(Zr,at[3])};for(const at of[Qo(x,e,p,T),Qo(b,e,v,T),Qo(y,e,M,(V,j,L,ot)=>{j.set(V[0],V[1],V[2]),L.setFromAxisAngle(Zr,V[3]),ot.set(V[4],1,1)})])at&&t.add(at);const E=[-10.82,-5.14],w=[11.37,-11.75],S=(E[0]+w[0])/2,A=(E[1]+w[1])/2;let F=-8.54-S,U=-31.15-A,B=Math.hypot(F,U)||1;F/=B,U/=B;const D=w[0]-E[0],I=w[1]-E[1],z=Math.hypot(D,I)||1,O=[];for(const at of[-1,1])O.push([S+F*5.2+D/z*at*9,A+U*5.2+I/z*at*9]);for(const[[at,V],[j,L]]of f){const ot=(at+j)/2,Q=(V+L)/2;let ct=ot-u[0],st=Q-u[1],Mt=Math.hypot(ct,st)||1;ct/=Mt,st/=Mt;for(const ft of[.22,.55,.82])O.push([at+(j-at)*ft+ct*2.3,V+(L-V)*ft+st*2.3])}const q=new Ee(.05,.07,4,7),$=new Nt(.04,.04,.35),k=new He(.28,12,10);for(const[at,V]of O)ch(t,i,at,V,0,{pole:q,poleH:4,arm:$,arms:[0],armY:4.05,head:k,headY:4.35},{metal:n,light:s});const rt=[[-178,-43,-158,-30],[-154,-43,-138,-30]];for(const[at,V,j,L]of rt){const ot=(at+j)/2,Q=(V+L)/2,ct=i(ot,Q)+.2,st=j-at,Mt=L-V,ft=.4,P=.26,R=new Kt(new Nt(st-P,.26,Mt-P),a);R.position.set(ot,ct+.13,Q),R.receiveShadow=!0,t.add(R);const Y=[[ot,ct+ft/2,V,st,ft,P,0],[ot,ct+ft/2,L,st,ft,P,0],[at,ct+ft/2,Q,P,ft,Mt,0],[j,ct+ft/2,Q,P,ft,Mt,0]];for(const[tt,lt,nt,At,vt,bt]of Y){const Vt=new Kt(new Nt(At,vt,bt),o);Vt.position.set(tt,lt,nt),Vt.castShadow=Vt.receiveShadow=!0,t.add(Vt)}}const dt=new ao(1,0),G=new Ee(.1,.15,1,6);for(const[at,V,j,L]of[[-172,-37,6.2,2.3],[-164,-36.5,5.4,2],[-148,-37,6,2.2],[-142,-36,5.2,1.9],[-168,-33,4.6,1.7],[-146,-33.5,4.4,1.6]]){const ot=i(at,V)+.35,Q=new Kt(G,l);Q.scale.set(1,j*.45,1),Q.position.set(at,ot+j*.22,V),Q.castShadow=!0;const ct=new Kt(dt,h);ct.scale.set(L,j*.38,L),ct.position.set(at,ot+j*.62,V),ct.castShadow=!0,t.add(Q,ct)}const Z=new Nt(1.7,.08,.42),ht=new Nt(1.7,.42,.06),it=new Nt(.06,.4,.36);for(const[at,V]of[[-176,-21.2],[-160,-20.8],[-146,-21],[-134.2,-36]]){const j=i(at,V)+.3,L=new ye().setFromAxisAngle(Zr,0),ot=(Q,ct,st,Mt,ft)=>{const P=new Kt(Q,ct);P.position.set(Mt,st,ft).applyQuaternion(L),P.position.add(new N(at,j,V)),P.castShadow=!0,t.add(P)};ot(Z,c,.46,0,0),ot(ht,c,.72,0,-.18),ot(it,e,.22,-.75,0),ot(it,e,.22,.75,0)}const mt=new Ee(.06,.08,6.4,7),Rt=new Nt(1.5,.05,.05),xt=new Nt(.28,.1,.42);for(const[at,V,j]of[[-166,-16,Math.PI/2],[-150,-16,Math.PI/2],[-170,-50,Math.PI/2],[-146,-50,0]])ch(t,i,at,V,j,{pole:mt,poleH:6.4,arm:Rt,arms:[-.85,.85],armY:6.15,head:xt,headY:6.05},{metal:n,light:r});return t.userData.night=at=>{s.emissiveIntensity=.15+at*1.5,r.emissiveIntensity=.1+at*1.2},t}class nr{constructor(t,e,n,s){const r=Math.hypot(n,s);n/=r,s/=r,this.m=new Jt().makeBasis(new N(s,0,-n),new N(0,1,0),new N(n,0,s)).setPosition(t,0,e),this.parts=[]}add(t,e){const n=t.index?t.toNonIndexed():t,s=new Qt;s.setAttribute("position",n.attributes.position),s.applyMatrix4(this.m);const r=new Ot(e),o=s.attributes.position.count,a=new Float32Array(o*3);for(let c=0;c<o;c++)a.set([r.r,r.g,r.b],c*3);return s.setAttribute("color",new ve(a,3)),this.parts.push(s),this}box(t,e,n,s,r,o,a){const c=new Nt(Math.abs(e-t),Math.abs(s-n),Math.abs(o-r));return c.translate((t+e)/2,(n+s)/2,(r+o)/2),this.add(c,a)}arch(t,e,n,s,r,o,a=.08){const c=new di,l=e/2,h=s-l;c.moveTo(t-l,n),c.lineTo(t+l,n),c.lineTo(t+l,h),c.absarc(t,h,l,0,Math.PI,!1),c.lineTo(t-l,n);const u=new $n(c,{depth:a,bevelEnabled:!1,curveSegments:10});return u.translate(0,0,r-a/2),this.add(u,o)}pediment(t,e,n,s,r,o,a){const c=new di;c.moveTo(t,n),c.lineTo(e,n),c.lineTo((t+e)/2,s),c.lineTo(t,n);const l=new $n(c,{depth:o-r,bevelEnabled:!1});return l.translate(0,0,r),this.add(l,a)}gable(t,e,n,s,r,o,a){const c=new di;c.moveTo(t,n),c.lineTo(e,n),c.lineTo((t+e)/2,s),c.lineTo(t,n);const l=new $n(c,{depth:o-r,bevelEnabled:!1});return l.translate(0,0,r),this.add(l,a)}cyl(t,e,n,s,r,o,a,c=16){const l=new Ee(o,r,s,c);return l.translate(t,n+s/2,e),this.add(l,a)}dome(t,e,n,s,r,o){const a=new He(s,16,8,0,Math.PI*2,0,Math.PI/2);return a.scale(1,r/s,1),a.translate(t,n,e),this.add(a,o)}rail(t,e,n,s,r,o,a){const c=r-n,l=s-e,h=Math.hypot(c,l)||.01,u=new Nt(o,o,h);return u.rotateX(-Math.atan2(l,c)),u.translate(t,(e+s)/2,(n+r)/2),this.add(u,a)}mesh(t){const e=xn(this.parts);e.computeVertexNormals();const n=new kt({vertexColors:!0,side:fe});n.onBeforeCompile=r=>{r.uniforms.uNight=pi,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying float vY;`).replace("#include <project_vertex>",`#include <project_vertex>
vY = (modelMatrix * vec4(transformed, 1.0)).y;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight; varying float vY;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * vec3(1.0, 0.78, 0.5) * uNight * 0.38;`)};const s=new Kt(e,n);return s.name=t,s.castShadow=s.receiveShadow=!0,s}}function vu(i,t){const e=[];for(let f=0;f<i.length;f+=2)e.push([i[f],i[f+1]]);let n=0,s=0;for(const[f,d]of e)n+=f,s+=d;n/=e.length,s/=e.length;let r=null;for(let f=0;f<e.length;f++){const[d,g]=e[f],[_,m]=e[(f+1)%e.length],p=Math.hypot(_-d,m-g);if(p<4)continue;let v=-(m-g)/p,M=(_-d)/p;const x=(d+_)/2,b=(g+m)/2;(x-n)*v+(b-s)*M<0&&(v=-v,M=-M);const y=v*t[0]+M*t[1]+p*.004;(!r||y>r.score)&&(r={score:y,mx:x,mz:b,wx:v,wz:M,L:p})}const o=r.wz,a=-r.wx;let c=1/0,l=-1/0,h=0;for(const[f,d]of e){const g=(f-r.mx)*o+(d-r.mz)*a,_=(f-r.mx)*r.wx+(d-r.mz)*r.wz;c=Math.min(c,g),l=Math.max(l,g),h=Math.min(h,_)}const u=(c+l)/2;return{ox:r.mx+o*u,oz:r.mz+a*u,wx:r.wx,wz:r.wz,W:l-c,D:-h}}function mv(i,t){const e=t?[t.x-0,t.z-0]:[0,-1],n=vu(i.r,e),s=new nr(n.ox,n.oz,n.wx,n.wz),r=i.g,o=n.W,a=n.D,c=o/2,l=15392712,h=16052196,u=2830648,f=11887165,d=14012096,g=1842722,_=r+.9,m=r+11.6;s.box(-c,c,r-.6,m,-a,0,l),s.box(-c-.05,c+.05,r-.6,_,-a-.05,.05,d),s.box(-c-.12,c+.12,r+5.4,r+5.75,-a-.12,.12,h),s.box(-c-.45,c+.45,m-.2,m+.35,-a-.45,.45,h),s.box(-c,c,m+.35,m+1.4,-.4,0,h),s.box(-c,c,m+.35,m+1.4,-a,-a+.4,h),s.box(-c,-c+.4,m+.35,m+1.4,-a,0,h),s.box(c-.4,c,m+.35,m+1.4,-a,0,h);const p=3.2;for(const[D,I,z]of[[[-c+.4,-.4],[c-.4,-.4],[0,-a/2]],[[c-.4,-.4],[c-.4,-a+.4],[0,-a/2]],[[c-.4,-a+.4],[-c+.4,-a+.4],[0,-a/2]],[[-c+.4,-a+.4],[-c+.4,-.4],[0,-a/2]]]){const O=new Qt;O.setAttribute("position",new Ht([D[0],m+.4,D[1],I[0],m+.4,I[1],z[0],m+.4+p,z[1]],3)),s.add(O,f)}const v=Math.min(8.4,o*.36),M=v/2;s.box(-M,M,r-.6,m,0,.7,l),s.box(-M-.1,M+.1,m-.2,m+.35,0,1.15,h),s.box(-M,M,m+.35,m+2.1,.3,.7,h);for(const D of[-1,1]){for(const I of[0,.75])s.box(D*(M-I)-.28,D*(M-I)+.28,_,m-.2,.7,.95,h),s.box(D*(c-I)-.28,D*(c-I)+.28,_,m-.2,0,.25,h);s.box(D*M-1,D*M+1,m+.35,m+2.6,.45,.85,h),s.box(D*M-.6,D*M+.6,m+.8,m+2.2,.85,.95,14208179)}for(let D=r+.15;D<m-.3;D+=.46)s.box(-c+.3,c-.3,D,D+.028,.02,.05,13222064),s.box(-M+.2,M-.2,D,D+.028,.72,.78,13616820);for(const D of[-3.72,-1.42,1.42,3.72])s.cyl(D,1.02,_,.16,.36,.32,d,12),s.cyl(D,1.02,_+.16,r+5.35-(_+.16),.26,.22,h,14),s.cyl(D,1.02,r+5.32,.22,.32,.36,h,12);s.box(-M+.15,M-.15,r+5.48,r+5.82,.78,1.28,h);const x=(D,I,z,O)=>{const q=Math.max(5,Math.round(I*2/.13));for(let $=0;$<=q;$++){const k=D-I+I*2*$/q;s.box(k-.012,k+.012,z,O,.9,.94,g);const rt=new Js(.03,.11,4);rt.translate(k,O+.05,.92),s.add(rt,g)}for(const $ of[z+.1,z+(O-z)*.46,O-.08])s.box(D-I,D+I,$,$+.03,.9,.95,g);for(const $ of[-1,1]){const k=new Jr(Math.min(.2,I*.32),.018,6,14);k.translate(D+$*I*.45,z+(O-z)*.62,.96),s.add(k,g);const rt=new Jr(.09,.014,5,10);rt.translate(D+$*I*.16,z+(O-z)*.36,.96),s.add(rt,g)}};for(const D of[-2.6,0,2.6]){const I=D===0,z=I?2.05:1.32,O=r+(I?4.55:4.15);s.arch(D,1.55,r+6.2,r+9.6,.72,u),s.arch(D,1.95,r+6,r+9.85,.7,h,.05),s.arch(D,z+.32,_-.02,O+.22,.62,h,.08),s.arch(D,z,_+.02,O,.74,I?3811874:u),x(D,z*.4,_+.12,O-.28)}s.box(-M+.35,M-.35,r+5.82,r+6.02,.85,1.62,h),s.box(-M+.35,M-.35,r+6.82,r+7.02,1.4,1.62,h);for(let D=-M+.6;D<M-.45;D+=.26)s.box(D-.045,D+.045,r+6.02,r+6.82,1.46,1.56,14537924);const b=[];for(let D=M+1.6;D<c-1.2;D+=2.6)b.push(D);for(const D of[-1,1])for(const I of b){const z=D*I;for(const[O,q]of[[r+1.8,r+4.3],[r+6.6,r+9.3]])s.box(z-.85,z+.85,O-.15,q+.15,0,.12,h),s.box(z-.62,z+.62,O,q,.12,.16,u);s.pediment(z-1,z+1,r+9.5,r+10.2,0,.3,h)}const y=(D,I)=>{for(let z=2.2;z<D-1.5;z+=3)for(const[O,q]of[[r+1.8,r+4.3],[r+6.6,r+9.3]])I(z,O,q)};y(a,(D,I,z)=>{for(const O of[-1,1])s.box(O*c-.1,O*c+.1,I,z,-D-.6,-D+.6,u)}),y(o,(D,I,z)=>s.box(-c+D-.6,-c+D+.6,I,z,-a-.1,-a+.1,u));const T=7,E=M+2.6,w=1.55,S=.38,A=(_-_n)/T;s.box(-E+.6,E-.6,_-.05,_+.01,.02,w,d);for(let D=0;D<T;D++){const I=_-D*A,z=I-A,O=w+D*S,q=O+S,$=D*.03;s.box(-E+$,E-$,z,I+.012,O,q,d)}const F=w+T*S,U=(D,I,z,O)=>{s.cyl(D,I,z,.4*O,.2*O,.32*O,12870202,12),s.cyl(D,I,z+.38*O,.08*O,.36*O,.34*O,13927509,12),s.cyl(D,I,z+.44*O,.16*O,.05*O,.07*O,6047284,8);for(let q=0;q<11;q++){const $=q/11*Math.PI*2,k=new Nt(.055*O,.012*O,.85*O);k.translate(0,0,.38*O),k.rotateX(-.65),k.rotateY($),k.translate(D,z+.68*O,I),s.add(k,q%2?3107378:4094524)}};U(-E-.85,F+.35,_n,1.35),U(E+.85,F+.15,_n,1.2),U(-E+.15,F*.62,_n,.85),U(E-.2,F*.55,_n,.78),U(-M+.15,.95,_,.95),U(M-.2,1.05,_,.9);const B=(D,I)=>{const z=_n,O=16053489;s.box(D-.22,D+.22,z+.42,z+.48,I-.2,I+.2,O),s.box(D-.21,D+.21,z+.48,z+.9,I-.2,I-.14,O);for(const q of[-.16,.16])for(const $ of[-.16,.16])s.box(D+q-.018,D+q+.018,z,z+.42,I+$-.018,I+$+.018,O)};for(let D=0;D<5;D++)B(E+1.15,1.35+D*.5);return s.mesh("municipio")}function gv(i){const t=new nr(i.x,i.z,0,1),e=_n,n=3.35,s=14998992,r=16183784,o=12081730,a=7260372;return t.cyl(0,0,e+.02,.16,n+.95,n+.72,s,64),t.cyl(0,0,e+.16,.22,n+.08,n+.28,r,64),t.cyl(0,0,e+.2,.08,n-.15,n+.02,o,48),t.cyl(0,0,e+.12,.06,n-.28,n-.28,a,48),t.cyl(0,0,e+.14,.03,n-1.15,n-1.15,4892856,32),t.cyl(0,0,e+.16,.28,.42,.55,s,20),t.cyl(0,0,e+.44,.55,.16,.2,3947064,12),t.cyl(0,0,e+.96,.1,.34,.4,3025962,16),t.cyl(0,0,e+1.08,.55,.035,.02,14675694,6),t.mesh("fontana-delfini")}function xv(i){const t=vu(i.r,[0,-1]),e=new nr(t.ox,t.oz,t.wx,t.wz),n=i.g,s=Math.min(21,t.W),r=t.D,o=s/2,a=15985362,c=16315366,l=3354668,h=5913124,u=11558970,f=9343118,d=Math.min(11,s*.55),g=d/2,_=Math.min(9,r*.28),m=n+13,p=n+7.5;e.box(-g,g,n-.5,m,-r+_,0,a),e.gable(-g-.3,g+.3,m,m+3.2,-r+_,.1,u);for(const y of[-1,1]){e.box(y>0?g:-o,y>0?o:-g,n-.5,p,-r+_,-1.2,a);const T=new di;T.moveTo(0,p),T.lineTo(o-g+.3,p-.2),T.lineTo(0,p+2),T.lineTo(0,p);const E=new $n(T,{depth:r-_-1.2,bevelEnabled:!1});y<0&&E.scale(-1,1,1),E.translate(y*g,0,-r+_),e.add(E,u);for(let w=3;w<r-_-3;w+=4.2){const S=new di,A=1.3,F=p-1.6;S.moveTo(-A,n+.8),S.lineTo(A,n+.8),S.lineTo(A,F),S.absarc(0,F,A,0,Math.PI,!1),S.lineTo(-A,n+.8);const U=new $n(S,{depth:.06,bevelEnabled:!1});U.rotateY(Math.PI/2),U.translate(y*(o+.02),0,-w),e.add(U,c);const B=new di,D=.55,I=m-1.8;B.moveTo(-D,m-3.6),B.lineTo(D,m-3.6),B.lineTo(D,I),B.absarc(0,I,D,0,Math.PI,!1),B.lineTo(-D,m-3.6);const z=new $n(B,{depth:.06,bevelEnabled:!1});z.rotateY(Math.PI/2),z.translate(y*(g+.02),0,-w),e.add(z,l)}}const v=.5;e.box(-o,o,n-.5,n+9,0,v,a),e.box(-o-.04,o+.04,n-.5,n+.32,-.02,v+.04,13222836),e.box(-o-.2,o+.2,n+8.2,n+9.3,-.1,v+.3,c),e.box(-4,4,n+8.45,n+9,v+.3,v+.34,14469536),e.box(-g,g,n+9.3,n+15.6,0,v,a),e.box(-g-.25,g+.25,n+15.4,n+15.9,-.1,v+.3,c),e.pediment(-g-.4,g+.4,n+15.9,n+18.6,0,v+.2,c),e.pediment(-g+.6,g-.6,n+16.2,n+18,v+.2,v+.25,a),e.box(-.08,.08,n+18.6,n+20.4,v/2-.08,v/2+.08,3881787),e.box(-.5,.5,n+19.5,n+19.66,v/2-.08,v/2+.08,3881787);for(const y of[-o+.4,-g+.4,g-.4,o-.4,-2.2,2.2])e.box(y-.35,y+.35,n+.4,n+8.2,v,v+.25,c);for(const y of[-g+.45,g-.45])e.box(y-.35,y+.35,n+9.3,n+15.4,v,v+.25,c);for(const y of[-1,1]){const T=new Ee(1,1,.45,12,1,!1,0,Math.PI);T.rotateZ(Math.PI/2),T.rotateY(y>0?0:Math.PI),T.translate(y*(g+.9),n+9.4,v/2),e.add(T,c)}e.arch(0,2.5,n+.4,n+5.2,v+.05,h),e.pediment(-2,2,n+5.5,n+6.6,v,v+.35,c);for(const y of[-1,1])e.arch(y*5.2,1.5,n+.4,n+3.6,v+.05,h),e.arch(y*5.2,1.7,n+3.9,n+5.3,v+.05,c,.05);e.arch(0,1.4,n+10.5,n+13.9,v+.05,l);for(let y=0;y<4;y++)e.box(-3+y*.1,3-y*.1,n+.28,n+.28+.15*(y+1),v,v+.5+(4-y)*.35,13222062);{const y=-o-.2,T=-4.8,E=v+.15,w=v+3.5,S=n+.28,A=S+2.7,F=9278358,U=14148326,B=15987180,D=3814962;e.box(y,T,S,S+.1,E,w,B),e.box(y+.08,T-.08,S+.1,S+.72,w-.12,w-.02,B),e.box(y+.02,y+.1,S+.1,S+.72,E+.1,w-.1,B),e.box(T-.1,T-.02,S+.1,S+.72,E+.1,w-.1,B),e.box(y+.12,T-.5,S+.72,A-.42,w-.1,w-.02,U),e.box(T-1.15,T-.12,S+.72,A-.42,w-.1,w-.02,U),e.box(y+.02,y+.08,S+.72,A-.42,E+.15,w-.15,U),e.box(T-.08,T-.02,S+.72,A-.42,E+.15,w-.15,U);for(const I of[y+.06,(y+T)/2,T-.06])for(const z of[E+.06,w-.06])e.box(I-.045,I+.045,S+.1,A-.28,z-.045,z+.045,F);e.box(y-.12,T+.12,A-.32,A+.06,E-.08,w+.22,D),e.box(y+.35,T-.7,S+.95,S+1.08,E+.45,E+1.35,7034436)}e.box(-o,o,n-.5,n+11,-r,-r+_,a),e.box(-o-.2,o+.2,n+10.8,n+11.3,-r-.2,-r+_+.2,c);for(let y=-o+1.5;y<o-1;y+=2.8)for(const T of[n+1.5,n+5,n+8.2])e.box(y-.5,y+.5,T,T+1.6,-r-.08,-r+.02,l);const M=o-2.4,x=-r+2.4,b=2.3;e.box(M-b,M+b,n-.5,n+22,x-b,x+b,a),e.box(M-b-.2,M+b+.2,n+13.5,n+13.9,x-b-.2,x+b+.2,c),e.box(M-b-.25,M+b+.25,n+21.6,n+22.2,x-b-.25,x+b+.25,c);for(const[y,T]of[[-1,-1],[1,-1],[-1,1],[1,1]])e.box(M+y*b-.55,M+y*b+.55,n+22.2,n+26.8,x+T*b-.55,x+T*b+.55,a);e.box(M-b+.5,M+b-.5,n+22.2,n+22.9,x-b+.5,x+b-.5,14206876),e.cyl(M,x,n+23.2,1.2,.55,.35,8084014,10),e.box(M-b-.35,M+b+.35,n+26.8,n+27.5,x-b-.35,x+b+.35,c),e.dome(M,x,n+27.5,b-.2,2.2,f),e.box(M-.06,M+.06,n+29.6,n+31.6,x-.06,x+.06,3881787),e.box(M-.45,M+.45,n+30.8,n+30.95,x-.06,x+.06,3881787);for(const[y,T]of[[b+.02,0],[0,b+.02]]){const E=new Mc(.75,20);y&&E.rotateY(Math.PI/2),E.translate(M+y,n+19,x+T),e.add(E,16052714)}return e.mesh("chiesa-madre")}function _v(i,t){const e=new nr(0,0,0,1),n=11116429,s=10195583,r=2894374,o=(a,c,l,h,u,f,d,g,_)=>{const m=Math.hypot(l-a,h-c);if(m<.05)return;const p=-(h-c)/m*g/2,v=(l-a)/m*g/2,M=[[a+p,c+v],[l+p,h+v],[l-p,h-v],[a-p,c-v]],x=[u,f,f,u],b=[],y=(w,S)=>[M[w][0],x[w]+(S?d:0),M[w][1]],T=(w,S,A,F)=>b.push(...w,...S,...A,...w,...A,...F);T(y(0,0),y(1,0),y(1,1),y(0,1)),T(y(2,0),y(3,0),y(3,1),y(2,1)),T(y(0,1),y(1,1),y(2,1),y(3,1)),T(y(1,0),y(2,0),y(2,1),y(1,1)),T(y(3,0),y(0,0),y(0,1),y(3,1));const E=new Qt;E.setAttribute("position",new Ht(b,3)),e.add(E,_)};for(const a of i.ruins){const c=a.castle,l=c?8:a.castleArea?5.5:2.8,h=c?.9:.6;for(let u=2;u<a.p.length;u+=2){const f=a.p[u-2],d=a.p[u-1],g=a.p[u],_=a.p[u+1];if(c&&Math.hypot(g-f,_-d)<2.5||(o(f,d,g,_,t(f,d)-.4,t(g,_)-.4,l+.4,h,c?n:s),!c))continue;const m=Math.hypot(g-f,_-d),p=(g-f)/m,v=(_-d)/m,M=-v,x=p;for(let b=2.5;b<m-2;b+=4.8)for(const[y,T]of[[1.6,3.4],[4.8,6.6]]){const E=f+p*b,w=d+v*b,S=t(E,w);for(const A of[1,-1]){const F=E+M*A*.47,U=w+x*A*.47,B=new bn(1.3,T-y);B.rotateY(Math.atan2(M*A,x*A)),B.translate(F,S+(y+T)/2,U),e.add(B,r)}}for(let b=.6;b<m-.3;b+=1.3){const y=f+p*b,T=d+v*b,E=new Js(.32,.9,4);E.rotateY(Math.PI/4+Math.atan2(p,v)),E.translate(y,t(y,T)+8.45,T),e.add(E,n)}}}if(i.castle){for(const[a,c,l]of i.castle.towers){const h=t(a,c)-.4;e.cyl(a,c,h,9.4,l,l*.97,n,20),e.dome(a,c,h+9.4,l*.93,l*.6,13156528);const u=new He(.22,8,6);u.translate(a,h+9.4+l*.6+.15,c),e.add(u,13156528);for(let f=0;f<14;f++){const d=f/14*Math.PI*2,g=new Js(.28,.8,4);g.translate(a+Math.sin(d)*l,h+9.7,c+Math.cos(d)*l),e.add(g,n)}for(const[f,d]of[[3.2,.8],[6.4,2.4]]){const g=new bn(.8,1.2);g.rotateY(d),g.translate(a+Math.sin(d)*(l+.02),h+f,c+Math.cos(d)*(l+.02)),e.add(g,r)}}if(i.castle.chapel){const[a,c]=i.castle.chapel,l=t(a,c)-.3,h=new nr(a,c,.12,1);h.box(-5.2,5.2,l,l+6.5,-4,4,14273972),h.gable(-5.4,5.4,l+6.5,l+8.6,-4.2,4.2,11823684),h.box(-.6,.6,l+3.5,l+4.8,4,4.06,r),h.box(3.2,4.2,l+3.5,l+4.8,4,4.06,r),h.box(-13.2,-5.2,l,l+6,3.4,4.6,n),h.arch(-9.2,3.2,l,l+4.4,4.62,r,.1);for(let u=-12.7;u<-5.6;u+=1.5)h.box(u,u+.9,l+6,l+6.9,3.5,4.5,n);e.parts.push(...h.parts)}}return e.mesh("castello-ruderi")}function vv(i,t){const e=new _e;e.name="landmarks";const n=i.landmarks||{};for(const s of i.buildings)s.lm==="municipio"&&e.add(mv(s,n.fountain)),s.lm==="chiesa"&&e.add(xv(s));return n.fountain&&e.add(gv(n.fountain)),n.ruins?.length&&e.add(_v(n,t)),e.add(v_(i)),e.add(pv(t)),e}function Mv(i,t,e){const[n,s]=t,{size:r,px:o}=i,a=new Set(i.tiles.map(([p,v])=>`${p},${v}`)),c=document.createElement("canvas");c.width=c.height=o*3;const l=c.getContext("2d"),h=new En(c);h.colorSpace=ce,h.anisotropy=e.capabilities.getMaxAnisotropy();const u=new Map;let f=null,d=!1,g=0;function _(p){if(!u.has(p)){const[v,M]=p.split(",");u.set(p,new Promise(x=>{const b=new Image;b.onload=()=>x(b),b.onerror=()=>x(null),b.src=`data/ortho-hr/hr_${v}_${M}.jpg`})),u.size>25&&u.delete(u.keys().next().value)}return u.get(p)}function m(p){const v=Math.floor((p.x+n)/r),M=Math.floor((s-p.z)/r),x=`${v},${M}`;if(x!==f){f=x,l.clearRect(0,0,c.width,c.height),Qr.rect.value.set((v-1)*r-n,s-(M-1)*r,3*r,1),Qr.map.value=h,d=!0;for(let y=-1;y<=1;y++)for(let T=-1;T<=1;T++){const E=`${v+y},${M+T}`;a.has(E)&&_(E).then(w=>{!w||f!==x||(l.drawImage(w,(y+1)*o,(1-T)*o,o,o),d=!0)})}}const b=performance.now();d&&b-g>250&&(h.needsUpdate=!0,d=!1,g=b)}return{update:m}}const Mu="vec2 cd = (wp.xz - cameraPosition.xz) * 0.001; wp.y -= dot(cd, cd) * 0.0682594;",yv=["litorale","alicudi","filicudi","salina","lipari","vulcano","panarea","stromboli"],lh={alicudi:"Alicudi",filicudi:"Filicudi",salina:"Salina",lipari:"Lipari",vulcano:"Vulcano",panarea:"Panarea",stromboli:"Stromboli"},Sv=[["Cefalù",414231,4210537,150],["Capo d'Orlando",477712,4223254,60]],kr=160;function yu(i){i.vertexShader=i.vertexShader.replace(/precision mediump float/g,"precision highp float").replace(/precision mediump int/g,"precision highp int")}function bv(i){const t=new sr({map:i});return t.onBeforeCompile=e=>{yu(e),e.vertexShader=e.vertexShader.replace("#include <project_vertex>",`
      vec4 wp = modelMatrix * vec4(transformed, 1.0);
      ${Mu}
      vec4 mvPosition = viewMatrix * wp;
      gl_Position = projectionMatrix * mvPosition;`)},t}async function Ev(i,t){const[e,n]=i,s=new _e;s.name="sfondo";const r=[],o=new $a;await Promise.all(yv.map(async a=>{const c=await fetch(`data/bg/${a}.json`).then(v=>v.ok?v.json():null).catch(()=>null);if(!c)return;const l=await o.loadAsync(`data/bg/${a}.jpg`).catch(()=>null);if(!l)return;l.colorSpace=ce,l.anisotropy=4;const h=atob(c.data),u=new Uint8Array(h.length);for(let v=0;v<h.length;v++)u[v]=h.charCodeAt(v);const f=new Int16Array(u.buffer),{width:d,height:g,step:_}=c,m=bv(l);let p={v:-1};for(let v=0;v<g-1;v+=kr)for(let M=0;M<d-1;M+=kr){const x=Math.min(g-1,v+kr),b=Math.min(d-1,M+kr),y=x-v+1,T=b-M+1,E=new Float32Array(y*T*3),w=new Float32Array(y*T*2);for(let U=v;U<=x;U++)for(let B=M;B<=b;B++){const D=U*d+B,I=(U-v)*T+(B-M),z=c.xmin+B*_-e,O=n-(c.ymax-U*_);let q=f[D];z>t.x0+30&&z<t.x1-30&&O>t.z0+30&&O<t.z1-30&&(q-=60),E[I*3]=z,E[I*3+1]=q,E[I*3+2]=O,w[I*2]=(B+.5)/d,w[I*2+1]=1-(U+.5)/g,f[D]>p.v&&(p={v:f[D],X:z,Z:O})}const S=[];for(let U=v;U<x;U++)for(let B=M;B<b;B++){const D=U*d+B,I=D+1,z=D+d,O=z+1;if(f[D]<0&&f[I]<0&&f[z]<0&&f[O]<0)continue;const q=(U-v)*T+(B-M),$=q+1,k=q+T,rt=k+1;S.push(q,k,$,$,k,rt)}if(!S.length)continue;const A=new Qt;A.setAttribute("position",new ve(E,3)),A.setAttribute("uv",new ve(w,2)),A.setIndex(S);const F=new Kt(A,m);F.name=`sfondo-${a}`,F.frustumCulled=!1,s.add(F)}lh[a]&&p.v>0&&r.push({name:lh[a],x:p.X,y:p.v,z:p.Z})}));for(const[a,c,l,h]of Sv)r.push({name:a,x:c-e,y:h,z:n-l});return{group:s,labels:r}}function hh(i,{far:t=!1}={}){const e=Gh.merge([yt.fog,{uTime:{value:0},uSun:{value:i.clone().normalize()},uDeep:{value:new Ot(871014)},uShallow:{value:new Ot(3119776)},uSkyH:{value:new Ot(13229290)},uSkyZ:{value:new Ot(6132676)},uTint:{value:new Ot(1,1,1)},uSpec:{value:3}}]);e.lcMap=li.lcMap,e.lcRect=li.lcRect;const n=new un({uniforms:e,fog:!0,transparent:!0,depthWrite:!1,vertexShader:`
      varying vec3 vW;
      #include <fog_pars_vertex>
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        ${t?Mu:""}
        vW = wp.xyz;
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform float uTime, uSpec; uniform vec3 uSun, uDeep, uShallow, uSkyH, uSkyZ, uTint;
      varying vec3 vW;
      ${cu}
      #include <common>
      #include <fog_pars_fragment>
      // treno d'onda: direzione, lunghezza d'onda (m), ampiezza (m), velocità di fase ~ sqrt(g·L/2π)
      float px; // dimensione del pixel sul mare (m): le onde più corte di pochi pixel si spengono (niente moiré)
      void wave(vec2 p, vec2 dir, float L, float A, inout vec2 grad) {
        A *= smoothstep(px * 3.0, px * 8.0, L);
        float k = 6.2831 / L, c = sqrt(9.81 / k);
        float ph = k * (dot(dir, p) - c * uTime);
        grad += dir * (A * k * cos(ph));
      }
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
      void main() {
        float shore = 80.0; // distanza da riva in m (80 = mare aperto)
        ${t?"":`
        // mare del paese: solo dentro la copertura del suolo; fuori c'è quello dello sfondo
        vec4 lc = landcover(vW.xz);
        if (lc.x < 0.06) discard;
        shore = clamp((lc.x * 255.0 - 30.0) / 225.0 * 80.0, 0.0, 80.0);`}
        float dist = distance(cameraPosition, vW);
        // onde: il mare da nord-ovest (il Tirreno davanti ad Acquedolci), più corte vicino a riva
        vec2 g = vec2(0.0);
        px = length(fwidth(vW.xz));
        float fade = 1.0;
        wave(vW.xz, normalize(vec2(0.35, 1.0)), 23.0, 0.20, g);
        wave(vW.xz, normalize(vec2(-0.2, 1.0)), 11.0, 0.09, g);
        wave(vW.xz, normalize(vec2(0.8, 0.6)), 6.3, 0.05 * fade, g);
        wave(vW.xz, normalize(vec2(-0.7, 0.7)), 3.1, 0.025 * fade, g);
        wave(vW.xz, normalize(vec2(0.1, -1.0)), 1.7, 0.012 * fade, g);
        vec3 N = normalize(vec3(-g.x, 1.0, -g.y));
        vec3 V = normalize(cameraPosition - vW);
        float fres = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
        vec3 R = reflect(-V, N);
        vec3 sky = mix(uSkyH, uSkyZ, clamp(R.y * 1.6, 0.0, 1.0));
        float depth = smoothstep(0.0, 45.0, shore);
        vec3 body = mix(uShallow, uDeep, depth) * uTint;
        float sunDiff = max(dot(N, uSun), 0.0);
        vec3 col = mix(body * (0.55 + 0.45 * sunDiff), sky, fres);
        col += vec3(1.0, 0.95, 0.85) * pow(max(dot(R, uSun), 0.0), 350.0) * uSpec;
        // battigia: fasce di schiuma che corrono verso riva e si rompono col rumore
        float band = sin(shore * 0.9 + uTime * 1.3) * 0.5 + 0.5;
        float foam = (1.0 - smoothstep(0.5, 7.0, shore)) * smoothstep(0.55, 0.95, band * noise(vW.xz * 0.7 + uTime * 0.2) + 0.35 * (1.0 - smoothstep(0.0, 2.0, shore)));
        col = mix(col, vec3(0.93, 0.95, 0.95) * uTint, clamp(foam, 0.0, 1.0));
        // trasparenza: a riva si vede il fondale (ortofoto), al largo l'acqua è piena
        float alpha = mix(0.35, 0.96, smoothstep(0.0, 25.0, shore));
        alpha = max(alpha, foam * 0.9);
        alpha = mix(alpha, 1.0, fres * 0.5);
        gl_FragColor = vec4(col, alpha);
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`});t&&(n.onBeforeCompile=o=>yu(o));let s;if(t){const o=[0];for(let h=30;h<2e5;h*=1.12)o.push(h);o.push(2e5);const a=128,c=[],l=[];for(const h of o)for(let u=0;u<a;u++){const f=u/a*Math.PI*2;c.push(Math.cos(f)*h,0,Math.sin(f)*h)}for(let h=0;h<o.length-1;h++)for(let u=0;u<a;u++){const f=h*a+u,d=h*a+(u+1)%a,g=f+a,_=d+a;l.push(f,d,g,d,_,g)}s=new Qt,s.setAttribute("position",new Ht(c,3)),s.setIndex(l)}else{const o=li.lcRect.value;s=new bn(o.z,o.w),s.rotateX(-Math.PI/2),s.translate(o.x+o.z/2,0,o.y+o.w/2)}const r=new Kt(s,n);return r.renderOrder=5,r.name=t?"mare-sfondo":"mare",r.frustumCulled=!1,{mesh:r,uniforms:e,update(o,a){e.uTime.value=o,t&&a&&r.position.set(a.position.x,0,a.position.z)}}}const Su=i=>i*i*(3-2*i),wv=i=>Su(Math.min(1,i/.7)),Hr=(i,t,e)=>i.map((n,s)=>n+(t[s]-n)*e),as=[{hour:10.5,dur:5,fov:38,nadir:!0,from:{cam:[-6,520,-18],look:[-6,0,-18]},to:{cam:[-6,130,-18],look:[-6,0,-18]},ease:wv},{hour:18.2,dur:7,fov:46,final:!0,from:{cam:[-55,68,-270],look:[-8,14,-28]},to:{cam:[-22,112,-370],look:[-6,20,-36]}}];function Tv({camera:i,controls:t,heightAt:e,setTime:n,onEnd:s}){const r=x=>document.getElementById(x),o=r("intro");let a=-1,c=0,l=!1,h=!1;const u=new N,f=new N,d=(x,[b,y,T])=>x.set(b,Math.max(e(b,T),0)+y,T);function g(x,b){const y=x.ease?x.ease(b):x.final?1-(1-b)**3:Su(b);if(x.nadir)i.up.set(0,0,1),d(u,Hr(x.from.cam,x.to.cam,y)),d(f,Hr(x.from.look,x.to.look,y));else if(x.orbit){i.up.set(0,1,0);const E=x.orbit,w=E.a0+(E.a1-E.a0)*y,S=E.r0+(E.r1-E.r0)*y;d(u,[E.c[0]+Math.cos(w)*S,E.h0+(E.h1-E.h0)*y,E.c[1]+Math.sin(w)*S]),d(f,[E.c[0],E.look,E.c[1]])}else i.up.set(0,1,0),d(u,Hr(x.from.cam,x.to.cam,y)),d(f,Hr(x.from.look,x.to.look,y));u.y=Math.max(u.y,e(u.x,u.z)+3),x.nadir&&(f.y=Math.min(f.y,u.y-20));const T=x.fov||42;i.fov!==T&&(i.fov=T,i.updateProjectionMatrix()),i.position.copy(u),t.target.copy(f),i.lookAt(f)}function _(x){a=x,c=0,h=!1;const b=as[a];n(b.hour),o.classList.toggle("final",!!b.final),o.classList.remove("title")}function m(){l=!0,h=!1,o.hidden=!1,o.classList.remove("final","out","title"),document.body.classList.add("intro"),t.enabled=!1,_(0),g(as[0],0)}function p(){l&&(l=!1,h=!1,o.classList.add("out"),o.classList.remove("title"),setTimeout(()=>{o.hidden=!0,o.classList.remove("out","final")},700),document.body.classList.remove("intro"),i.up.set(0,1,0),i.fov=55,i.updateProjectionMatrix(),t.enabled=!0,s())}addEventListener("keydown",x=>{l&&x.key==="Escape"&&p()});function v(x){if(!l)return;const b=as[a];if(h){const w=Math.min(1,+r("introFade").style.opacity+x/.85);r("introFade").style.opacity=w.toFixed(3),w>=1&&p();return}c+=x;const y=Math.min(1,c/b.dur);g(b,y);const T=.9,E=b.final?Math.max(0,1-c/1.1):Math.max(0,1-c/T,1-(b.dur-c)/T);if(r("introFade").style.opacity=E.toFixed(3),b.final){o.classList.toggle("title",c>2.6),c>=b.dur&&(h=!0);return}c>=b.dur&&_(a+1)}function M(x,b){l||m(),_(x),c=b,g(as[x],Math.min(1,b/as[x].dur)),r("introFade").style.opacity="0",o.classList.toggle("title",!!as[x].final&&b>2.6)}return{start:m,stop:p,update:v,seek:M,get active(){return l},get index(){return a},get time(){return c}}}const Av=`
uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uSharp; varying vec2 vUv;
vec3 px(vec2 o) { return texture2D(tSrc, vUv + o * uTexel).rgb; }
void main() {
  vec3 a = px(vec2(-1, -1)), b = px(vec2(0, -1)), c = px(vec2(1, -1));
  vec3 d = px(vec2(-1, 0)), e = px(vec2(0, 0)), f = px(vec2(1, 0));
  vec3 g = px(vec2(-1, 1)), h = px(vec2(0, 1)), i = px(vec2(1, 1));
  // minimo e massimo "morbidi" su croce + diagonali (valori 0..2)
  vec3 mn = min(min(min(d, e), min(f, b)), h), mx = max(max(max(d, e), max(f, b)), h);
  mn += min(mn, min(min(a, c), min(g, i)));
  mx += max(mx, max(max(a, c), max(g, i)));
  vec3 amp = sqrt(clamp(min(mn, 2.0 - mx) / max(mx, vec3(1e-4)), 0.0, 1.0));
  vec3 w = amp * (-1.0 / mix(8.0, 5.0, uSharp));
  vec3 col = clamp((b * w + d * w + f * w + h * w + e) / (1.0 + 4.0 * w), 0.0, 1.0);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`;function Rv(i){const t=i.getDrawingBufferSize(new pt),e=new xi(t.x,t.y,{samples:0});e.texture.colorSpace=ce;const n={tSrc:{value:e.texture},uTexel:{value:new pt(1/t.x,1/t.y)},uSharp:{value:.7}},s=new Kt(new bn(2,2),new un({uniforms:n,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Av}));s.frustumCulled=!1;const r=new mc;r.add(s);const o=new rr(-1,1,1,-1,0,1);return{target:e,present(){i.setRenderTarget(null),i.render(r,o)},resize(){i.getDrawingBufferSize(t),e.setSize(t.x,t.y),n.uTexel.value.set(1/t.x,1/t.y)}}}const ta=140,uh=940,fh=12,Cv=1100,Gr=[{label:"city",w:1.7,h:1.36,l:3.55,tH:.66,tW:.92,tOff:0},{label:"sedan",w:1.84,h:1.46,l:4.5,tH:.6,tW:.88,tOff:-.06},{label:"van",w:1.92,h:1.92,l:4.85,tH:.98,tW:.96,tOff:.1},{label:"suv",w:1.94,h:1.65,l:4.52,tH:.72,tW:.9,tOff:-.08},{label:"scooter",w:.6,h:.88,l:1.86,tH:0,tW:0,tOff:0}],dh=[12107976,15130840,3034484,7478296,4023605,13150272,1579032,9127968,5927056,13914144],ea=[5,6.2,4.8,6.8,7.5];function Qe(i,t,e,n){const s=i.attributes.position.count,r=new Float32Array(s*3);for(let o=0;o<s;o++)r[o*3]=t,r[o*3+1]=e,r[o*3+2]=n;return i.setAttribute("color",new ve(r,3)),i.toNonIndexed?i.toNonIndexed():i}function Pv(i){const{w:t,h:e,l:n,tH:s,tW:r,tOff:o}=i,a=[];if(i.label==="scooter"){const g=new Nt(t,e*.55,n*.55);g.translate(0,e*.42,0),a.push(Qe(g,1,1,1));const _=new Nt(t*.18,e*.6,.12);_.translate(0,e*.38,n*.32),a.push(Qe(_,.25,.25,.25));const m=new Nt(t*.6,e*.09,n*.35);m.translate(0,e*.76,-n*.06),a.push(Qe(m,.12,.12,.12));const p=e*.26,v=t*.18;for(const b of[n*.33,-n*.33]){const y=new Ee(p,p,v,7);y.rotateZ(Math.PI/2),y.translate(0,p,b),a.push(Qe(y,.06,.06,.06))}const M=new Nt(t*.7,e*.55,t*.55);M.translate(0,e*1.05,-n*.04),a.push(Qe(M,1,1,1));const x=new He(t*.38,6,5);return x.translate(0,e*1.47,-n*.02),a.push(Qe(x,.78,.65,.52)),xn(a)}const c=e*.58,l=new Nt(t,c,n);if(l.translate(0,c*.5+e*.06,0),a.push(Qe(l,1,1,1)),s>0){const g=t*r,_=n*.52,m=new Nt(g,s,_);m.translate(0,c+e*.06+s*.5,o*n*.5),a.push(Qe(m,.95,.95,.95));const p=s*.92,v=n*.085,M=new Nt(g*.96,p,v);M.rotateX(.42),M.translate(0,c+e*.06+p*.42,n*.26+o*n*.25-v*.2),a.push(Qe(M,.08,.09,.1));const x=s*.88,b=n*.08,y=new Nt(g*.92,x,b);y.rotateX(-.38),y.translate(0,c+e*.06+x*.4,-n*.24+o*n*.25+b*.2),a.push(Qe(y,.08,.09,.1))}const h=e*.185,u=t*.09,f=n*.3,d=-n*.28;for(const[g,_]of[[f,t/2+u*.1],[f,-(t/2+u*.1)],[d,t/2+u*.1],[d,-(t/2+u*.1)]]){const m=new Ee(h,h,u,8);m.rotateZ(Math.PI/2),m.translate(_,h+e*.05,g),a.push(Qe(m,.06,.06,.06));const p=new Ee(h*.62,h*.62,u*1.02,6);p.rotateZ(Math.PI/2),p.translate(_,h+e*.05,g),a.push(Qe(p,.28,.28,.3))}for(const[g,_,m,p]of[[n*.505,.9,.9,.85],[-n*.505,.8,.1,.08]]){const v=new Nt(t*.32,e*.13,.08);v.translate(0,c*.6+e*.06,g),a.push(Qe(v,_,m,p))}return xn(a)}function Lv(i){const t=[];for(const s of i){if(s.k==="path"||s.k==="footway"||s.k==="cycleway"||s.k==="steps")continue;const r=s.p.length>>1;if(r<2)continue;let o=0,a=0;for(let h=0;h<r;h++)o+=s.p[h*2],a+=s.p[h*2+1];if(Math.hypot(o/r,a/r)>Cv)continue;const c=[];let l=0;for(let h=0;h<r;h++){const u=s.p[h*2],f=s.p[h*2+1];h>0&&(l+=Math.hypot(u-c[h-1].x,f-c[h-1].z)),c.push({x:u,z:f,s:l})}l<8||t.push({pts:c,len:l,start:c[0],end:c[c.length-1],cw:s.cw||6})}const e=(s,r)=>`${Math.round(s/fh)},${Math.round(r/fh)}`,n=new Map;for(let s=0;s<t.length;s++){const r=t[s];for(const o of[r.start,r.end]){const a=e(o.x,o.z);n.has(a)||n.set(a,[]),n.get(a).push(s)}}for(let s=0;s<t.length;s++){const r=t[s];r.startConns=(n.get(e(r.start.x,r.start.z))||[]).filter(o=>o!==s),r.endConns=(n.get(e(r.end.x,r.end.z))||[]).filter(o=>o!==s)}return t}function ph(i,t){const e=i.pts;let n=Math.max(0,Math.min(t,i.len));for(let l=1;l<e.length;l++){const h=e[l-1],u=e[l],f=u.s-h.s;if(n<=u.s||l===e.length-1){const d=f>0?(n-h.s)/f:0,g=h.x+(u.x-h.x)*d,_=h.z+(u.z-h.z)*d,m=u.x-h.x,p=u.z-h.z,v=Math.hypot(m,p)||1;return{x:g,z:_,hx:m/v,hz:p/v}}}const s=e[e.length-1],r=e[e.length-2],o=s.x-r.x,a=s.z-r.z,c=Math.hypot(o,a)||1;return{x:s.x,z:s.z,hx:o/c,hz:a/c}}function Dv(i,t){const e=Lv(i);if(!e.length)return{group:new _e,update(){}};const n=(()=>{let v=42;return()=>(v=(v*16807+1)%2147483647)/2147483647})(),s=v=>v[Math.floor(n()*v.length)],r=new _e;r.name="traffic";const o=new kt({vertexColors:!0,flatShading:!0}),a=Math.ceil(ta/Gr.length),c=Gr.map((v,M)=>{const x=M===Gr.length-1?ta-a*(Gr.length-1):a,b=Pv(v),y=new rn(b,o,x);return y.castShadow=!1,y.receiveShadow=!0,y.name=`car_${v.label}`,y.instanceColor=new Ks(new Float32Array(x*3),3),r.add(y),{im:y,count:x,type:v}}),l=[],h=new Jt,u=new ye,f=new N(1,1,1),d=new N,g=new N(0,1,0);function _(v,M,x){let b=null;for(let A=0;A<40;A++){const F=e[Math.floor(n()*e.length)],U=(F.start.x+F.end.x)/2,B=(F.start.z+F.end.z)/2,D=Math.hypot(U-M,B-x);if(D>60&&D<uh){b=F;break}}b||(b=e[Math.floor(n()*e.length)]);const y=e.indexOf(b),T=n()*b.len,E=n()>.5?1:-1,w=(v?ea[v.typeIdx]:ea[0])+(n()-.5)*2,S=dh[Math.floor(n()*dh.length)];if(v)v.segIdx=y,v.dist=T,v.dir=E,v.speed=w,v.colorHex=S;else return{segIdx:y,dist:T,dir:E,speed:w,colorHex:S}}let m=0;for(let v=0;v<c.length;v++){for(let M=0;M<c[v].count;M++,m++){const x={typeIdx:v,instIdx:M,segIdx:0,dist:0,dir:1,speed:ea[v],colorHex:16777215};_(x,999999,999999),l.push(x);const b=new Ot(x.colorHex);c[v].im.setColorAt(M,b)}c[v].im.instanceColor.needsUpdate=!0}function p(v,M){const x=M.position.x,b=M.position.z;for(const y of l){const T=e[y.segIdx],{x:E,z:w}=ph(T,y.dist),S=Math.hypot(E-x,w-b);if(S>uh){_(y,x,b);const I=new Ot(y.colorHex);c[y.typeIdx].im.setColorAt(y.instIdx,I),c[y.typeIdx].im.instanceColor.needsUpdate=!0}if(y.dist+=y.dir*y.speed*v,y.dist<=0||y.dist>=T.len){const I=y.dist>=T.len,z=I?T.endConns:T.startConns;if(z.length>0){const O=s(z),q=e[O],$=I?T.end:T.start,k=Math.hypot(q.start.x-$.x,q.start.z-$.z)<Math.hypot(q.end.x-$.x,q.end.z-$.z);y.segIdx=O,y.dist=k?0:q.len,y.dir=k?1:-1}else y.dir=-y.dir,y.dist=Math.max(.1,Math.min(T.len-.1,y.dist))}if(S>660&&(y.instIdx&1)!==(Math.round(S*.1)&1))continue;const A=ph(e[y.segIdx],y.dist),F=t(A.x,A.z),U=-A.hz*.9*(y.dir>0?1:-1),B=A.hx*.9*(y.dir>0?1:-1);d.set(A.x+U,F,A.z+B);const D=Math.atan2(A.hx*y.dir,A.hz*y.dir);u.setFromAxisAngle(g,D),h.compose(d,u,f),c[y.typeIdx].im.setMatrixAt(y.instIdx,h)}for(const{im:y}of c)y.instanceMatrix.needsUpdate=!0}return{group:r,update:p,segCount:e.length,carCount:ta}}const oi=260,mh=420,gh=.8,Iv=1.6,Uv=900,xh=[13914170,4881087,15786168,3832389,11558952,10172533,14471336,2771562,15255616,5933658];function _h(i){const t=i?.18:.24,e=[],n=new He(.105,6,5);n.translate(0,.87,0),Pi(n,16042140),e.push(n);const s=new He(.109,6,4);s.scale(1,.6,1),s.translate(0,.92,0),Pi(s,2759178),e.push(s);const r=new Nt(t*2,.32,t*1.4);r.translate(0,.585,0),Pi(r,16777215),e.push(r);for(const c of[-1,1]){const l=new Nt(t*.55,.28,t*.55);l.translate(c*(t+t*.28),.575,0),Pi(l,16777215),e.push(l);const h=new He(t*.27,4,3);h.translate(c*(t+t*.28),.41,0),Pi(h,16042140),e.push(h)}const o=t*.85,a=.34;for(const c of[-1,1]){const l=new Nt(o,a,o);l.translate(c*t*.52,.26,0),Pi(l,.12,.12,.15),e.push(l);const h=new Nt(o*.9,a*.2,o*1.35);h.translate(c*t*.52,.09,o*.18),Pi(h,.08,.07,.06),e.push(h)}return xn(e)}function Pi(i,t,e,n){if(e===void 0){const o=new Ot(t);t=o.r,e=o.g,n=o.b}const s=i.attributes.position.count,r=new Float32Array(s*3);for(let o=0;o<s;o++)r[o*3]=t,r[o*3+1]=e,r[o*3+2]=n;return i.setAttribute("color",new ve(r,3)),i.toNonIndexed?i.toNonIndexed():i}function Nv(i){const t=[];for(const e of i){if(!e.p||e.p.length<4)continue;const n=e.p.length>>1;let s=0,r=0;for(let l=0;l<n;l++)s+=e.p[l*2],r+=e.p[l*2+1];if(Math.hypot(s/n,r/n)>Uv)continue;let o=0;const a=[];for(let l=0;l<n;l++){const h=e.p[l*2],u=e.p[l*2+1];l>0&&(o+=Math.hypot(h-a[l-1].x,u-a[l-1].z)),a.push({x:h,z:u,s:o})}if(o<5)continue;const c=(e.cw||6)*.5+1.4;for(const l of[1,-1]){const h=a.map((u,f)=>{const d=a[Math.max(0,f-1)],g=a[Math.min(a.length-1,f+1)];let _=g.x-d.x,m=g.z-d.z;const p=Math.hypot(_,m)||1;return _/=p,m/=p,{x:u.x-m*c*l,z:u.z+_*c*l,s:u.s}});t.push({pts:h,len:o})}}return t}function na(i,t){const e=i.pts;let n=Math.max(0,Math.min(t,i.len));for(let r=1;r<e.length;r++){const o=e[r-1],a=e[r],c=a.s-o.s;if(n<=a.s||r===e.length-1){const l=c>0?(n-o.s)/c:0;return{x:o.x+(a.x-o.x)*l,z:o.z+(a.z-o.z)*l}}}const s=e[e.length-1];return{x:s.x,z:s.z}}function Ov(i,t){const e=Nv(i);if(!e.length)return{group:new _e,update(){}};const n=(()=>{let x=137;return()=>(x=(x*16807+1)%2147483647)/2147483647})(),s=_h(!0),r=_h(!1),o=new kt({vertexColors:!0,flatShading:!0}),a=new rn(s,o,Math.ceil(oi/2)),c=new rn(r,o,Math.floor(oi/2));a.name="ped_slim",c.name="ped_normal",a.castShadow=c.castShadow=!1,a.receiveShadow=c.receiveShadow=!0,a.instanceColor=new Ks(new Float32Array(Math.ceil(oi/2)*3),3),c.instanceColor=new Ks(new Float32Array(Math.floor(oi/2)*3),3);const l=new _e;l.name="npcs",l.add(a,c);const h=[],u=new Jt,f=new ye,d=new N(1,1,1),g=new N,_=new N(0,1,0);function m(){return{shirt:xh[Math.floor(n()*xh.length)],height:1.55+n()*.22}}for(let x=0;x<oi;x++){const b=x<Math.ceil(oi/2),y=b?a:c,T=b?x:x-Math.ceil(oi/2),E=Math.floor(n()*e.length),w=n()*e[E].len,S=n()>.5?1:-1,A=gh+n()*(Iv-gh),{shirt:F,height:U}=m(),B=n()*Math.PI*2;h.push({slim:b,im:y,instIdx:T,pathIdx:E,dist:w,dir:S,speed:A,shirt:F,height:U,phase:B}),y.setColorAt(T,new Ot(F))}a.instanceColor.needsUpdate=!0,c.instanceColor.needsUpdate=!0;let p=0,v=0;function M(x,b){p+=x,v++;const y=b.position.x,T=b.position.z;for(const E of h){const w=e[E.pathIdx],S=na(w,E.dist),A=Math.hypot(S.x-y,S.z-T);if(A>mh){let q=0;do{E.pathIdx=Math.floor(n()*e.length),E.dist=n()*e[E.pathIdx].len;const $=na(e[E.pathIdx],E.dist),k=Math.hypot($.x-y,$.z-T);if(k>25&&k<mh*.85)break}while(++q<30);E.dir=n()>.5?1:-1;continue}const F=A>180&&v%3!==E.instIdx%3;if(E.dist+=E.dir*E.speed*x,E.dist<=0&&(E.dir=1,E.dist=0),E.dist>=w.len&&(E.dir=-1,E.dist=w.len),F)continue;const U=na(e[E.pathIdx],E.dist),B=t(U.x,U.z),D=Math.abs(Math.sin(p*3.2+E.phase))*.04*E.height,I=U.x-S.x,z=U.z-S.z,O=Math.atan2(I,z)+(E.dir<0?Math.PI:0);f.setFromAxisAngle(_,O),g.set(U.x,B+D,U.z),u.compose(g,f,d.set(E.height,E.height,E.height)),E.im.setMatrixAt(E.instIdx,u)}a.instanceMatrix.needsUpdate=!0,c.instanceMatrix.needsUpdate=!0}return{group:l,update:M,pedCount:oi}}const Ws=[{label:"chiara",hex:16307368},{label:"media",hex:14723184},{label:"olivacea",hex:13141082},{label:"scura",hex:9128490},{label:"molto sc.",hex:5121296}],Xs=[{label:"nero",hex:1575940},{label:"castano",hex:4860432},{label:"biondo",hex:13934672},{label:"rosso",hex:9054232},{label:"grigio",hex:8947848},{label:"bianco",hex:15261912}],qs=[{label:"bianco",hex:15789284},{label:"azzurro",hex:4884684},{label:"rosso",hex:13383712},{label:"verde",hex:3828280},{label:"giallo",hex:15253576},{label:"arancio",hex:15231008},{label:"viola",hex:7354504},{label:"nero",hex:1579032}],Ys=[{label:"blu jeans",hex:2768746},{label:"nero",hex:1579032},{label:"grigio",hex:5789784},{label:"beige",hex:13150320},{label:"verde",hex:3821616},{label:"marrone",hex:4861464}],bu="acq-char",Ka={name:"Giocatore",skin:0,hair:0,shirt:0,pant:0,slim:!1};function Fv(){try{return{...Ka,...JSON.parse(localStorage.getItem(bu)||"{}")}}catch{return{...Ka}}}function zv(i){try{localStorage.setItem(bu,JSON.stringify(i))}catch{}}const Bv=new kt({flatShading:!0});function cn(i,t){const e=new Kt(i,Bv.clone());return e.material.color.setHex(t),e.castShadow=!0,e}function vh(i){const t=new _e,n=i.slim?.19:.25,s=Ws[i.skin]?.hex??Ws[0].hex,r=Xs[i.hair]?.hex??Xs[0].hex,o=qs[i.shirt]?.hex??qs[0].hex,a=Ys[i.pant]?.hex??Ys[0].hex,c=new He(.12,7,6);c.translate(0,0,0);const l=cn(c,s);l.position.y=1.57,l.name="head";const h=new He(.124,7,4,0,Math.PI*2,0,Math.PI*.5);h.translate(0,0,0);const u=cn(h,r);u.position.y=1.62;const f=new Nt(n*2,.36,n*1.5),d=cn(f,o);d.position.y=1.27,d.name="torso";const g=new Nt(n*.6,.3,n*.65),_=cn(g.clone(),o);_.position.set(n+n*.32,1.27,0),_.name="armL";const m=cn(g.clone(),o);m.position.set(-n-n*.32,1.27,0),m.name="armR";const p=new Nt(n*2.05,.075,n*1.55),v=cn(p,a);v.position.y=1.07;const M=new Nt(n*.88,.36,n*.85),x=cn(M.clone(),a);x.position.set(n*.52,.88,0),x.name="thighL";const b=cn(M.clone(),a);b.position.set(-n*.52,.88,0),b.name="thighR";const y=new Nt(n*.78,.34,n*.75),T=cn(y.clone(),a);T.position.set(n*.52,.52,0),T.name="shinL";const E=cn(y.clone(),a);E.position.set(-n*.52,.52,0),E.name="shinR";const w=new Nt(n*.82,.11,n*1.35),S=cn(w.clone(),2103312);S.position.set(n*.52,.17,n*.2);const A=cn(w.clone(),2103312);return A.position.set(-n*.52,.17,n*.2),t.add(l,u,d,_,m,v,x,b,T,E,S,A),t.name="player",t}function kv(i,t){const e=Math.sin(t)*.28,n=Math.cos(t)*.18,s=Math.abs(Math.sin(t))*.025;i.position.y+=s;for(const r of i.children)(r.name==="thighL"||r.name==="shinL")&&(r.rotation.x=-e),(r.name==="thighR"||r.name==="shinR")&&(r.rotation.x=e),r.name==="armL"&&(r.rotation.x=n),r.name==="armR"&&(r.rotation.x=-n)}function Hv(i,t){let e=Fv(),n=vh(e);i.add(n),n.visible=!1;let s=0;function r(){i.remove(n),n=vh(e),n.visible=!1,i.add(n)}function o(a,c){if(!c.on){n.visible=!1;return}n.visible=!0;const{x:l,z:h}=c.pos,u=t(l,h);if(n.position.set(l,u,h),n.rotation.y=c.yaw,c.keys?.KeyW||c.keys?.ArrowUp||c.keys?.KeyS||c.keys?.ArrowDown||Math.hypot(c.joy?.x||0,c.joy?.y||0)>.1){s+=a*5.5;const d=n.position.y;kv(n,s),n.position.y=d}else for(const d of n.children)d.rotation.x=0}return{get data(){return e},update:o,rebuild:r,applyData(a){e={...Ka,...a},zv(e),r()},playerMesh:()=>n}}const Bt=i=>document.getElementById(i),kn=i=>{Bt("lmsg").textContent=i},Es=matchMedia("(pointer: coarse)").matches;Es&&document.body.classList.add("touch");const Ie=new Bg({canvas:Bt("c"),antialias:!0});Ie.setPixelRatio(Math.min(devicePixelRatio,2));Ie.setSize(innerWidth,innerHeight);Ie.shadowMap.enabled=!0;Ie.shadowMap.type=Es?nc:yh;const be=new mc,Eu=13622760;be.background=null;be.fog=new pc(Eu,26e-6);Ie.autoClear=!1;const Zn=new mc;Zn.background=new Ot(Eu);Zn.fog=be.fog;const hn=new nn(55,innerWidth/innerHeight,50,25e4),Zt=new nn(55,innerWidth/innerHeight,.5,12e3),Gn=new rr(-1,1,1,-1,-8e3,15e3),Vn=new rr(-1,1,1,-1,-8e3,25e4),wu=new Sx(14675711,9075302,1.25),$e=new ou(16773852,2.1);$e.position.set(300,500,350);$e.castShadow=!0;$e.shadow.mapSize.set(Es?1024:2048,Es?1024:2048);Object.assign($e.shadow.camera,{left:-300,right:300,top:300,bottom:-300,near:10,far:1500});$e.shadow.bias=-5e-4;const Tu=new ou(10466006,0);be.add(wu,$e,$e.target,Tu);const Au=i_(Zn);async function Gv(){kn("modello degli edifici");const[i,t,e,n,s]=await Promise.all([fetch("data/model.json").then(A=>A.json()),fetch("data/dtm.json").then(A=>A.json()),fetch("data/ortho.json").then(A=>A.json()),fetch("data/streets.json").then(A=>A.json()),fetch("data/signs.json").then(A=>A.ok?A.json():null).catch(()=>null)]),r=await fetch("data/ortho-hr.json").then(A=>A.ok?A.json():null).catch(()=>null),o=atob(t.data),a=new Uint8Array(o.length);for(let A=0;A<o.length;A++)a[A]=o.charCodeAt(A);const c=new Uint16Array(a.buffer),l=new Float32Array(c.length),h=t.offset||0;for(let A=0;A<c.length;A++)l[A]=c[A]/10+h;const u=jx(t,l,i.origin);kn("ortofoto 2022");const f=new $a,d=new Map;await Promise.all(e.tiles.map(A=>new Promise(F=>{f.load(`data/ortho/${A.file}`,U=>{U.colorSpace=ce,U.anisotropy=Ie.capabilities.getMaxAnisotropy(),d.set(A.file,U),F()},void 0,()=>F())})));const g=await fetch("data/landcover.json").then(A=>A.ok?A.json():null).catch(()=>null);if(g){const A=await new $a().loadAsync("data/landcover.png").catch(()=>null);A&&Xx(A,g,i.origin)}kn("terreno");const _={xmin:t.xmin,xmax:t.xmin+(t.width-1)*t.step,ymax:t.ymax,ymin:t.ymax-(t.height-1)*t.step};be.add(Zx({orthoMeta:e,textures:d,heightAt:u,origin:i.origin,bounds:_}));const m=hh($e.position.clone().sub($e.target.position));be.add(m.mesh),kn("litorale ed Eolie");const p=hh($e.position.clone().sub($e.target.position),{far:!0});Zn.add(p.mesh);const v=t,M={x0:v.xmin-i.origin[0],x1:v.xmin+v.width*v.step-i.origin[0],z0:i.origin[1]-v.ymax,z1:i.origin[1]-v.ymax+v.height*v.step},x=await Ev(i.origin,M);Zn.add(x.group),kn("edifici");const{group:b,footprints:y}=y_({model:i,orthoMeta:e,textures:d,facadeMats:c_()});be.add(b);const T=b_(y);kn("strade"),be.add($_(n,u,T)),kn("cartelli stradali"),s&&be.add(uv(s,u)),kn("luoghi d'interesse"),be.add(vv(i,u)),kn("alberi");const E=F_(i.trees||[]);be.add(E.group);const w=i.buildings.filter(A=>A.src==="lidar").length;Bt("sub").textContent=`${i.buildings.length} edifici reali · ${w} con altezza LiDAR`;const S=r?Mv(r,i.origin,Ie):{update(){}};return{model:i,heightAt:u,collider:T,trees:E,streets:n,hr:S,water:m,farSea:p,farLabels:x.labels}}const{model:Vv,heightAt:vi,collider:Mh,trees:Wv,streets:Ac,hr:Xv,water:Ru,farSea:Cu,farLabels:qv}=await Gv();Bt("loader").classList.add("hide");const Rc=Dv(Ac.roads,vi),Cc=Ov(Ac.roads,vi);be.add(Rc.group,Cc.group);const gs=Hv(be,vi);Jv(gs);const Ja=Vv.pois.map(i=>{const t=document.createElement("div");return t.className="lbl",t.textContent=i.name,Bt("labels").appendChild(t),{el:t,v:new N(i.x,i.y+14,i.z)}});for(const i of qv){const t=document.createElement("div");t.className="lbl far",t.textContent=i.name,Bt("labels").appendChild(t),Ja.push({el:t,far:!0,v:new N(i.x,i.y,i.z),top:i.y})}const cs=new N;function Yv(){if(!we.names){for(const n of Ja)n.el.style.display="none";return}const i=Ft.on?260:900,t=[],e=Ja.map(n=>({l:n,d:Zt.position.distanceTo(n.v)})).sort((n,s)=>n.d-s.d);for(const{l:n,d:s}of e){if(n.far){const l=n.v.x-Zt.position.x,h=n.v.z-Zt.position.z;n.v.y=n.top+120-(l*l+h*h)/1465e4}cs.copy(n.v).project(n.far?hn:Zt);let r=cs.z<1&&Math.abs(cs.x)<1.05&&Math.abs(cs.y)<1.05&&(n.far?s>3e3:s<i);const o=(cs.x*.5+.5)*innerWidth,a=(-cs.y*.5+.5)*innerHeight,c=n.el.textContent.length*7+16;r&&t.some(l=>Math.abs(l.x-o)<(l.w+c)/2&&Math.abs(l.y-a)<24)&&(r=!1),n.el.style.display=r?"":"none",r&&(t.push({x:o,y:a,w:c}),n.el.style.transform=`translate(${o}px, ${a}px) translate(-50%, -100%)`)}}const Ae=new Rx(Zt,Ie.domElement);Ae.enableDamping=!0;Ae.maxPolarAngle=Math.PI*.495;Ae.minDistance=8;Ae.maxDistance=3500;const eo=vi(0,0);Ae.target.set(-60,eo,-20);Zt.position.set(-10,eo+90,190);Ae.update();const Ft={on:!1,pos:new N,yaw:0,pitch:0,keys:{},joy:{x:0,y:0}};addEventListener("keydown",i=>{Ft.keys[i.code]=!0});addEventListener("keyup",i=>{Ft.keys[i.code]=!1});let Wn=null;Ie.domElement.addEventListener("pointerdown",i=>{Ft.on&&(Wn={x:i.clientX,y:i.clientY,id:i.pointerId})});addEventListener("pointerup",i=>{Wn?.id===i.pointerId&&(Wn=null)});addEventListener("pointermove",i=>{!Ft.on||!Wn||Wn.id!==i.pointerId||(Ft.yaw-=(i.clientX-Wn.x)*.004,Ft.pitch=Math.max(-1.2,Math.min(1.2,Ft.pitch-(i.clientY-Wn.y)*.004)),Wn.x=i.clientX,Wn.y=i.clientY)});const ki=Bt("joy"),Pu=ki.querySelector("i");ki.addEventListener("pointerdown",i=>{ki.setPointerCapture(i.pointerId),Lu(i),i.stopPropagation()});ki.addEventListener("pointermove",i=>{ki.hasPointerCapture(i.pointerId)&&Lu(i)});ki.addEventListener("pointerup",()=>{Ft.joy.x=Ft.joy.y=0,Pu.style.transform=""});function Lu(i){const t=ki.getBoundingClientRect();let e=(i.clientX-t.left)/t.width*2-1,n=(i.clientY-t.top)/t.height*2-1;const s=Math.hypot(e,n);s>1&&(e/=s,n/=s),Ft.joy.x=e,Ft.joy.y=n,Pu.style.transform=`translate(${e*34}px, ${n*34}px)`}const Hi=Bt("droneJoy"),Du=Hi.querySelector("i"),Rn={x:0,y:0};Hi.addEventListener("pointerdown",i=>{Hi.setPointerCapture(i.pointerId),Iu(i),i.stopPropagation()});Hi.addEventListener("pointermove",i=>{Hi.hasPointerCapture(i.pointerId)&&Iu(i)});Hi.addEventListener("pointerup",()=>{Rn.x=Rn.y=0,Du.style.transform=""});function Iu(i){const t=Hi.getBoundingClientRect();let e=(i.clientX-t.left)/t.width*2-1,n=(i.clientY-t.top)/t.height*2-1;const s=Math.hypot(e,n);s>1&&(e/=s,n/=s),Rn.x=e,Rn.y=n,Du.style.transform=`translate(${e*34}px, ${n*34}px)`}function Ps(i){if(Ft.on=i,document.body.classList.toggle("walk",i),Bt("bWalk").classList.toggle("on",i),Bt("bDrone").classList.toggle("on",!i),Ae.enabled=!i,i){const t=Ae.target.clone();let e=null;for(const r of Ac.roads)for(let o=0;o+3<r.p.length;o+=2){const a=Math.hypot(r.p[o]-t.x,r.p[o+1]-t.z);(!e||a<e.d)&&(e={d:a,x:r.p[o],z:r.p[o+1],dx:r.p[o+2]-r.p[o],dz:r.p[o+3]-r.p[o+1]})}const{x:n,z:s}=e||{x:t.x,z:t.z};Ft.pos.set(n,vi(n,s),s),Ft.yaw=e?Math.atan2(-e.dx,-e.dz):0,Ft.pitch=0,Zt.fov=70,Zt.updateProjectionMatrix()}else Ft.pos.lengthSq()>0&&(Ae.target.copy(Ft.pos),Zt.position.set(Ft.pos.x-60,Ft.pos.y+70,Ft.pos.z+90),Zt.fov=55,Zt.updateProjectionMatrix());Bt("hint").textContent=i?Es?"joystick: cammina · trascina: guarda":"WASD / frecce: cammina · Shift: corri · trascina: guarda":Es?"joystick: sposta · trascina: ruota · pizzica: zoom":"trascina: ruota · rotella: zoom · tasto destro: sposta"}Bt("bWalk").onclick=()=>Ps(!0);Bt("bDrone").onclick=()=>Ps(!1);Ps(!1);const we={names:!1,hour:11,lights:!0,sharp:!0,ortho:!1},Qa=Rv(Ie);try{Object.assign(we,JSON.parse(localStorage.getItem("acq-settings")||"{}"))}catch{}const uo=()=>{try{localStorage.setItem("acq-settings",JSON.stringify(we))}catch{}},Uu=new Set;for(const i of[be,Zn])i.traverse(t=>{const e=t.material;t.isMesh&&e?.isMeshBasicMaterial&&e.blending===Fi&&Uu.add(e)});const $v=be.getObjectByName("lamps"),jv=be.getObjectByName("plaza-props"),Zv=be.getObjectByName("piazza-ve3"),no={sky:Au,sun:$e,hemi:wu,moonLight:Tu,fog:be.fog,bgScene:Zn,basics:[...Uu],waters:[Ru.uniforms,Cu.uniforms],lights:!0,sunDir:new N(0,1,0)},Kv=i=>`${String(Math.floor(i)%24).padStart(2,"0")}:${String(Math.round(i%1*60)).padStart(2,"0")}`;function tc(i){no.lights=we.lights;const{sun:t,moon:e}=s_(i,no);$v?.userData.night?.(pi.value),jv?.userData.night?.(pi.value),Zv?.userData.night?.(pi.value),Bt("optTime").value=i,Bt("timeOut").textContent=Kv(i);const n=e.alt>0?`luna ${Math.round(e.lit*100)}% alta ${Math.round(e.alt*57.3)}°`:"luna sotto l'orizzonte";Bt("sunInfo").textContent=`sole ${Math.round(t.alt*57.3)}° · ${n}`}function ar(i){we.hour=i,tc(i),uo()}Bt("optNames").checked=we.names;Bt("optLights").checked=we.lights;Bt("optNames").onchange=i=>{we.names=i.target.checked,uo()};Bt("optLights").onchange=i=>{we.lights=i.target.checked,ar(we.hour)};Bt("optSharp").checked=we.sharp;Bt("optSharp").onchange=i=>{we.sharp=i.target.checked,uo()};Bt("optOrtho").checked=we.ortho;Bt("optOrtho").onchange=i=>{we.ortho=i.target.checked,uo()};Bt("optTime").oninput=i=>ar(+i.target.value);Bt("bNow").onclick=()=>ar(Math.round(n_()*4)/4);Bt("bSet").onclick=()=>{const i=Bt("settings");i.hidden=!i.hidden,Bt("bSet").setAttribute("aria-expanded",String(!i.hidden)),Bt("bSet").classList.toggle("on",!i.hidden)};ar(we.hour);try{localStorage.removeItem("acq-gkey")}catch{}function Jv(i){const t=(o,a,c,l,h)=>{const u=Bt(o);a.forEach((f,d)=>{const g=document.createElement("button");g.type="button",g.className="swatch"+(c()===d?" sel":""),g.style.background="#"+f.hex.toString(16).padStart(6,"0"),g.title=f.label,g.addEventListener("click",()=>{l(d),u.querySelectorAll(".swatch").forEach((_,m)=>_.classList.toggle("sel",m===d)),h()}),u.appendChild(g)})};let e={...i.data};const n=()=>{const o=Ws[e.skin]?.hex??Ws[0].hex,a=Xs[e.hair]?.hex??Xs[0].hex,c=qs[e.shirt]?.hex??qs[0].hex,l=Ys[e.pant]?.hex??Ys[0].hex,h=f=>"#"+f.toString(16).padStart(6,"0"),u=Bt("charFigure");u&&(u.querySelector(".fig-hair").style.background=h(a),u.querySelector(".fig-head").style.background=h(o),u.querySelector(".fig-torso").style.background=h(c),u.querySelectorAll(".fig-leg").forEach(f=>f.style.background=h(l)))},s=()=>{e={...i.data},Bt("charName").value=e.name||"Giocatore",Bt("charSlim").checked=!!e.slim,["skinPicker","hairPicker","shirtPicker","pantPicker"].forEach(o=>Bt(o).innerHTML=""),t("skinPicker",Ws,()=>e.skin,o=>{e.skin=o},n),t("hairPicker",Xs,()=>e.hair,o=>{e.hair=o},n),t("shirtPicker",qs,()=>e.shirt,o=>{e.shirt=o},n),t("pantPicker",Ys,()=>e.pant,o=>{e.pant=o},n),n(),Bt("charScreen").hidden=!1},r=()=>{e.name=Bt("charName").value.trim()||"Giocatore",e.slim=Bt("charSlim").checked,i.applyData(e),Bt("charScreen").hidden=!0,Ft.on||Ps(!0)};return Bt("charConfirm").onclick=r,Bt("charName").addEventListener("keydown",o=>{o.key==="Enter"&&r()}),Bt("charSlim").onchange=o=>{e.slim=o.target.checked},Bt("bChar").onclick=()=>{Bt("settings").hidden=!0,Bt("bSet").classList.remove("on"),s()},localStorage.getItem("acq-char")||(i._pendingOpen=s),{openScreen:s}}const Oi=Tv({camera:Zt,controls:Ae,heightAt:vi,setTime:tc,onEnd(){tc(we.hour),Ae.target.set(-60,eo,-20),Zt.position.set(-10,eo+90,190),Ae.update(),gs._pendingOpen&&(gs._pendingOpen(),gs._pendingOpen=null)}});Bt("bIntro").onclick=()=>{Bt("settings").hidden=!0,Bt("bSet").classList.remove("on"),Ft.on&&Ps(!1),Oi.start()};Oi.start();const ia=new wx;function Qv(i){const t=Ft.keys;let e=(t.KeyW||t.ArrowUp?1:0)-(t.KeyS||t.ArrowDown?1:0)-Ft.joy.y,n=(t.KeyD||t.ArrowRight?1:0)-(t.KeyA||t.ArrowLeft?1:0)+Ft.joy.x;const s=Math.hypot(e,n);if(s>.05){const r=(t.ShiftLeft||t.ShiftRight?9:3.2)*i/Math.max(1,s),o=-Math.sin(Ft.yaw),a=-Math.cos(Ft.yaw),c=(o*e-a*n)*r,l=(a*e+o*n)*r;Mh(Ft.pos.x+c,Ft.pos.z)||(Ft.pos.x+=c),Mh(Ft.pos.x,Ft.pos.z+l)||(Ft.pos.z+=l)}Ft.pos.y=C_(Ft.pos.x,Ft.pos.z,vi(Ft.pos.x,Ft.pos.z)),Zt.position.set(Ft.pos.x,Ft.pos.y+1.7,Ft.pos.z),Zt.rotation.set(Ft.pitch,Ft.yaw,0,"YXZ")}function Nu(){requestAnimationFrame(Nu);const i=Math.min(.05,ia.getDelta());if(Oi.active?Oi.update(i):Ft.on?Qv(i):Ae.update(),!Ft.on&&!Oi.active&&(Rn.x!==0||Rn.y!==0)){const a=Math.max(10,Zt.position.distanceTo(Ae.target))*.35*i,c=new N;Zt.getWorldDirection(c),c.y=0,c.lengthSq()<.001?c.set(0,0,-1):c.normalize();const l=new N().crossVectors(c,new N(0,1,0)).normalize(),h=(l.x*Rn.x-c.x*Rn.y)*a,u=(l.z*Rn.x-c.z*Rn.y)*a;Ae.target.x+=h,Ae.target.z+=u,Zt.position.x+=h,Zt.position.z+=u}const t=Ft.on?Ft.pos:Ae.target,e=no.sunDir.y>.02?no.sunDir:new N(.4,.6,.45).normalize();$e.position.set(t.x+e.x*800,t.y+e.y*800,t.z+e.z*800),$e.target.position.copy(t),Wv.update(Zt),Au.follow(Zt),Xv.update(t),Ru.update(ia.elapsedTime),Cu.update(ia.elapsedTime,Zt),Rc.update(i,Zt),Cc.update(i,Zt),gs.update(i,Ft),hn.position.copy(Zt.position),hn.quaternion.copy(Zt.quaternion),(hn.fov!==Zt.fov||hn.aspect!==Zt.aspect)&&(hn.fov=Zt.fov,hn.aspect=Zt.aspect,hn.updateProjectionMatrix()),Yv();const n=we.ortho&&!Ft.on&&!Oi.active;if(n){const a=Math.max(1,Zt.position.distanceTo(Ae.target))*Math.tan(Zt.fov*Math.PI/360),c=a*(innerWidth/innerHeight);Gn.left=-c,Gn.right=c,Gn.top=a,Gn.bottom=-a,Gn.position.copy(Zt.position),Gn.quaternion.copy(Zt.quaternion),Gn.updateProjectionMatrix(),Vn.left=-c,Vn.right=c,Vn.top=a,Vn.bottom=-a,Vn.position.copy(Zt.position),Vn.quaternion.copy(Zt.quaternion),Vn.updateProjectionMatrix()}const s=n?Gn:Zt,r=n?Vn:hn;Ie.setRenderTarget(we.sharp?Qa.target:null),Ie.clear(),Ie.render(Zn,r),Ie.clearDepth(),Ie.render(be,s),we.sharp&&Qa.present()}Nu();addEventListener("resize",()=>{Ie.setSize(innerWidth,innerHeight),Qa.resize(),Zt.aspect=innerWidth/innerHeight,Zt.updateProjectionMatrix(),hn.aspect=innerWidth/innerHeight,hn.updateProjectionMatrix()});window.__acq={camera:Zt,controls:Ae,walker:Ft,heightAt:vi,setMode:Ps,scene:be,renderer:Ie,bgScene:Zn,bgCamera:hn,setHour:ar,settings:we,intro:Oi,orthoCamera:Gn,bgOrthoCamera:Vn,traffic:Rc,npcs:Cc,character:gs};
