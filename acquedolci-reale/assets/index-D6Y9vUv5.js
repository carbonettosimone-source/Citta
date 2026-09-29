(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const La="170",es={ROTATE:0,DOLLY:1,PAN:2},Ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nu=0,dc=1,iu=2,Da=1,Vl=2,Dn=3,ci=0,ze=1,pe=2,si=0,Ti=1,Ps=2,pc=3,mc=4,su=5,Si=100,ru=101,ou=102,au=103,cu=104,lu=200,hu=201,uu=202,fu=203,No=204,Fo=205,du=206,pu=207,mu=208,gu=209,_u=210,xu=211,vu=212,Mu=213,yu=214,Oo=0,zo=1,Bo=2,ss=3,ko=4,Ho=5,Vo=6,Go=7,Ia=0,Su=1,bu=2,ri=0,Eu=1,wu=2,Tu=3,Au=4,Ru=5,Cu=6,Pu=7,Gl=300,rs=301,os=302,Wo=303,Xo=304,Br=306,li=1e3,Ei=1001,qo=1002,tn=1003,Lu=1004,Ys=1005,dn=1006,$r=1007,wi=1008,zn=1009,Wl=1010,Xl=1011,Ls=1012,Ua=1013,Ai=1014,Mn=1015,Bs=1016,Na=1017,Fa=1018,as=1020,ql=35902,Yl=1021,$l=1022,pn=1023,jl=1024,Zl=1025,ns=1026,cs=1027,Oa=1028,za=1029,Kl=1030,Ba=1031,ka=1033,wr=33776,Tr=33777,Ar=33778,Rr=33779,Yo=35840,$o=35841,jo=35842,Zo=35843,Ko=36196,Jo=37492,Qo=37496,ta=37808,ea=37809,na=37810,ia=37811,sa=37812,ra=37813,oa=37814,aa=37815,ca=37816,la=37817,ha=37818,ua=37819,fa=37820,da=37821,Cr=36492,pa=36494,ma=36495,Jl=36283,ga=36284,_a=36285,xa=36286,Du=3200,Iu=3201,Ql=0,Uu=1,Un="",he="srgb",fs="srgb-linear",kr="linear",re="srgb",Ii=7680,gc=519,Nu=512,Fu=513,Ou=514,th=515,zu=516,Bu=517,ku=518,Hu=519,_c=35044,xc="300 es",Nn=2e3,Ir=2001;class Pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pr=Math.PI/180,va=180/Math.PI;function ds(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function Vu(i,t){return(i%t+t)%t}function jr(i,t,e){return(1-e)*i+e*t}function vs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Gu={DEG2RAD:Pr};class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,s,r,o,a,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],M=s[1],v=s[4],_=s[7],b=s[2],S=s[5],w=s[8];return r[0]=o*x+a*M+c*b,r[3]=o*m+a*v+c*S,r[6]=o*d+a*_+c*w,r[1]=l*x+h*M+u*b,r[4]=l*m+h*v+u*S,r[7]=l*d+h*_+u*w,r[2]=f*x+p*M+g*b,r[5]=f*m+p*v+g*S,r[8]=f*d+p*_+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Zr.makeScale(t,e)),this}rotate(t){return this.premultiply(Zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zr=new Xt;function eh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wu(){const i=Ds("canvas");return i.style.display="block",i}const vc={};function Ts(i){i in vc||(vc[i]=!0,console.warn(i))}function Xu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function qu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Yu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:fs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(i.r=Fn(i.r),i.g=Fn(i.g),i.b=Fn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(i.r=is(i.r),i.g=is(i.g),i.b=is(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Un?kr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Mc=[.64,.33,.3,.6,.15,.06],yc=[.2126,.7152,.0722],Sc=[.3127,.329],bc=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ec=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[fs]:{primaries:Mc,whitePoint:Sc,transfer:kr,toXYZ:bc,fromXYZ:Ec,luminanceCoefficients:yc,workingColorSpaceConfig:{unpackColorSpace:he},outputColorSpaceConfig:{drawingBufferColorSpace:he}},[he]:{primaries:Mc,whitePoint:Sc,transfer:re,toXYZ:bc,fromXYZ:Ec,luminanceCoefficients:yc,outputColorSpaceConfig:{drawingBufferColorSpace:he}}});let Ui;class $u{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ui===void 0&&(Ui=Ds("canvas")),Ui.width=t.width,Ui.height=t.height;const n=Ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ds("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fn(e[n]/255)*255):e[n]=Fn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ju=0;class nh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=ds(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kr(s[o].image)):r.push(Kr(s[o]))}else r=Kr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$u.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zu=0;class Pe extends Pi{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=Ei,s=Ei,r=dn,o=wi,a=pn,c=zn,l=Pe.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=ds(),this.name="",this.source=new nh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case li:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case li:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=Gl;Pe.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,_=(p+1)/2,b=(d+1)/2,S=(h+f)/4,w=(u+x)/4,T=(g+m)/4;return v>_&&v>b?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=w/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=T/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=w/r,s=T/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ku extends Pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Pe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends Ku{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ih extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ju extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ee{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==f||l!==p||h!==g){let m=1-a;const d=c*f+l*p+h*g+u*x,M=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const b=Math.sqrt(v),S=Math.atan2(b,d*M);m=Math.sin(m*S)/b,a=Math.sin(a*S)/b}const _=a*M;if(c=c*m+f*_,l=l*m+p*_,h=h*m+g*_,u=u*m+x*_,m===1-a){const b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*f,t[e+1]=c*g+h*f+l*u-a*p,t[e+2]=l*g+h*p+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jr.copy(this).projectOnVector(t),this.sub(Jr)}reflect(t){return this.sub(Jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jr=new N,wc=new Ee;class Li{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$s.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$s.copy(n.boundingBox)),$s.applyMatrix4(t.matrixWorld),this.union($s)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ms),js.subVectors(this.max,Ms),Ni.subVectors(t.a,Ms),Fi.subVectors(t.b,Ms),Oi.subVectors(t.c,Ms),Gn.subVectors(Fi,Ni),Wn.subVectors(Oi,Fi),di.subVectors(Ni,Oi);let e=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-di.z,di.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,di.z,0,-di.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-di.y,di.x,0];return!Qr(e,Ni,Fi,Oi,js)||(e=[1,0,0,0,1,0,0,0,1],!Qr(e,Ni,Fi,Oi,js))?!1:(Zs.crossVectors(Gn,Wn),e=[Zs.x,Zs.y,Zs.z],Qr(e,Ni,Fi,Oi,js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const An=[new N,new N,new N,new N,new N,new N,new N,new N],cn=new N,$s=new Li,Ni=new N,Fi=new N,Oi=new N,Gn=new N,Wn=new N,di=new N,Ms=new N,js=new N,Zs=new N,pi=new N;function Qr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){pi.fromArray(i,r);const a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),c=t.dot(pi),l=e.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Qu=new Li,ys=new N,to=new N;class ps{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ys.subVectors(t,this.center);const e=ys.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ys,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(to.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ys.copy(t.center).add(to)),this.expandByPoint(ys.copy(t.center).sub(to))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new N,eo=new N,Ks=new N,Xn=new N,no=new N,Js=new N,io=new N;class Ha{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){eo.copy(t).add(e).multiplyScalar(.5),Ks.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(eo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ks),a=Xn.dot(this.direction),c=-Xn.dot(Ks),l=Xn.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const x=1/h;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(eo).addScaledVector(Ks,f),p}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,s,r){no.subVectors(e,t),Js.subVectors(n,t),io.crossVectors(no,Js);let o=this.direction.dot(io),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,t);const c=a*this.direction.dot(Js.crossVectors(Xn,Js));if(c<0)return null;const l=a*this.direction.dot(no.cross(Xn));if(l<0||c+l>o)return null;const h=-a*Xn.dot(io);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,s,r,o,a,c,l,h,u,f,p,g,x,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,p,g,x,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,p,g,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,p=c*u,g=l*h,x=l*u;e[0]=f+x*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,p=c*u,g=l*h,x=l*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tf,t,ef)}lookAt(t,e,n){const s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),qn.crossVectors(n,$e),qn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),qn.crossVectors(n,$e)),qn.normalize(),Qs.crossVectors($e,qn),s[0]=qn.x,s[4]=Qs.x,s[8]=$e.x,s[1]=qn.y,s[5]=Qs.y,s[9]=$e.y,s[2]=qn.z,s[6]=Qs.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],M=n[3],v=n[7],_=n[11],b=n[15],S=s[0],w=s[4],T=s[8],E=s[12],y=s[1],R=s[5],O=s[9],U=s[13],B=s[2],D=s[6],I=s[10],z=s[14],F=s[3],Y=s[7],j=s[11],V=s[15];return r[0]=o*S+a*y+c*B+l*F,r[4]=o*w+a*R+c*D+l*Y,r[8]=o*T+a*O+c*I+l*j,r[12]=o*E+a*U+c*z+l*V,r[1]=h*S+u*y+f*B+p*F,r[5]=h*w+u*R+f*D+p*Y,r[9]=h*T+u*O+f*I+p*j,r[13]=h*E+u*U+f*z+p*V,r[2]=g*S+x*y+m*B+d*F,r[6]=g*w+x*R+m*D+d*Y,r[10]=g*T+x*O+m*I+d*j,r[14]=g*E+x*U+m*z+d*V,r[3]=M*S+v*y+_*B+b*F,r[7]=M*w+v*R+_*D+b*Y,r[11]=M*T+v*O+_*I+b*j,r[15]=M*E+v*U+_*z+b*V,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*p-n*c*p)+x*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],M=u*m*l-x*f*l+x*c*p-a*m*p-u*c*d+a*f*d,v=g*f*l-h*m*l-g*c*p+o*m*p+h*c*d-o*f*d,_=h*x*l-g*u*l+g*a*p-o*x*p-h*a*d+o*u*d,b=g*u*c-h*x*c-g*a*f+o*x*f+h*a*m-o*u*m,S=e*M+n*v+s*_+r*b;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/S;return t[0]=M*w,t[1]=(x*f*r-u*m*r-x*s*p+n*m*p+u*s*d-n*f*d)*w,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*d+n*c*d)*w,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*p-n*c*p)*w,t[4]=v*w,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*w,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*d-e*c*d)*w,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*p+e*c*p)*w,t[8]=_*w,t[9]=(g*u*r-h*x*r-g*n*p+e*x*p+h*n*d-e*u*d)*w,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*d+e*a*d)*w,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*w,t[12]=b*w,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*m+e*u*m)*w,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*w,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,g=r*u,x=o*h,m=o*u,d=a*u,M=c*l,v=c*h,_=c*u,b=n.x,S=n.y,w=n.z;return s[0]=(1-(x+d))*b,s[1]=(p+_)*b,s[2]=(g-v)*b,s[3]=0,s[4]=(p-_)*S,s[5]=(1-(f+d))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(g+v)*w,s[9]=(m-M)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=zi.set(s[0],s[1],s[2]).length();const o=zi.set(s[4],s[5],s[6]).length(),a=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ln.copy(this);const l=1/r,h=1/o,u=1/a;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,e.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Nn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(a===Nn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ir)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Nn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,p=(n+s)*h;let g,x;if(a===Nn)g=(o+r)*u,x=-2*u;else if(a===Ir)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const zi=new N,ln=new jt,tf=new N(0,0,0),ef=new N(1,1,1),qn=new N,Qs=new N,$e=new N,Tc=new jt,Ac=new Ee;class mn{constructor(t=0,e=0,n=0,s=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Tc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nf=0;const Rc=new N,Bi=new Ee,Cn=new jt,tr=new N,Ss=new N,sf=new N,rf=new Ee,Cc=new N(1,0,0),Pc=new N(0,1,0),Lc=new N(0,0,1),Dc={type:"added"},of={type:"removed"},ki={type:"childadded",child:null},so={type:"childremoved",child:null};class we extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new N,e=new mn,n=new Ee,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new Xt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(Cc,t)}rotateY(t){return this.rotateOnAxis(Pc,t)}rotateZ(t){return this.rotateOnAxis(Lc,t)}translateOnAxis(t,e){return Rc.copy(t).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cc,t)}translateY(t){return this.translateOnAxis(Pc,t)}translateZ(t){return this.translateOnAxis(Lc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?tr.copy(t):tr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Ss,tr,this.up):Cn.lookAt(tr,Ss,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dc),ki.child=t,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(of),so.child=t,this.dispatchEvent(so),so.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dc),ki.child=t,this.dispatchEvent(ki),ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,sf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}we.DEFAULT_UP=new N(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new N,Pn=new N,ro=new N,Ln=new N,Hi=new N,Vi=new N,Ic=new N,oo=new N,ao=new N,co=new N,lo=new me,ho=new me,uo=new me;class fn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hn.subVectors(t,e),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){hn.subVectors(s,e),Pn.subVectors(n,e),ro.subVectors(t,e);const o=hn.dot(hn),a=hn.dot(Pn),c=hn.dot(ro),l=Pn.dot(Pn),h=Pn.dot(ro),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ln.x),c.addScaledVector(o,Ln.y),c.addScaledVector(a,Ln.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return lo.setScalar(0),ho.setScalar(0),uo.setScalar(0),lo.fromBufferAttribute(t,e),ho.fromBufferAttribute(t,n),uo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(lo,r.x),o.addScaledVector(ho,r.y),o.addScaledVector(uo,r.z),o}static isFrontFacing(t,e,n,s){return hn.subVectors(n,e),Pn.subVectors(t,e),hn.cross(Pn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),hn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return fn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Hi.subVectors(s,n),Vi.subVectors(r,n),oo.subVectors(t,n);const c=Hi.dot(oo),l=Vi.dot(oo);if(c<=0&&l<=0)return e.copy(n);ao.subVectors(t,s);const h=Hi.dot(ao),u=Vi.dot(ao);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Hi,o);co.subVectors(t,r);const p=Hi.dot(co),g=Vi.dot(co);if(g>=0&&p<=g)return e.copy(r);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Vi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ic.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Ic,a);const d=1/(m+x+f);return o=x*d,a=f*d,e.copy(n).addScaledVector(Hi,o).addScaledVector(Vi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},er={h:0,s:0,l:0};function fo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=he){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Vu(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fo(o,r,t+1/3),this.g=fo(o,r,t),this.b=fo(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=he){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=he){const n=rh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=he){return Qt.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Te(Ue.r*255,0,255))*65536+Math.round(Te(Ue.g*255,0,255))*256+Math.round(Te(Ue.b*255,0,255))}getHexString(t=he){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,s=Ue.g,r=Ue.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=he){Qt.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,s=Ue.b;return t!==he?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(er);const n=jr(Yn.h,er.h,e),s=jr(Yn.s,er.s,e),r=jr(Yn.l,er.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Nt;Nt.NAMES=rh;let af=0;class ms extends Pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=ds(),this.name="",this.blending=Ti,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=No,this.blendDst=Fo,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==No&&(n.blendSrc=this.blendSrc),this.blendDst!==Fo&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ks extends ms{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new N,nr=new pt;class xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_c,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)nr.fromBufferAttribute(this,e),nr.applyMatrix3(t),this.setXY(e,nr.x,nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vs(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vs(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vs(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_c&&(t.usage=this.usage),t}}class oh extends xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ah extends xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ot extends xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let cf=0;const nn=new jt,po=new we,Gi=new N,je=new Li,bs=new Li,be=new N;class Kt extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eh(t)?ah:oh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return po.lookAt(t),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ot(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(je.min,bs.min),je.expandByPoint(be),be.addVectors(je.max,bs.max),je.expandByPoint(be)):(je.expandByPoint(bs.min),je.expandByPoint(bs.max))}je.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)be.fromBufferAttribute(a,l),c&&(Gi.fromBufferAttribute(t,l),be.add(Gi)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new N,c[T]=new N;const l=new N,h=new N,u=new N,f=new pt,p=new pt,g=new pt,x=new N,m=new N;function d(T,E,y){l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),p.sub(f),g.sub(f);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),a[T].add(x),a[E].add(x),a[y].add(x),c[T].add(m),c[E].add(m),c[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let T=0,E=M.length;T<E;++T){const y=M[T],R=y.start,O=y.count;for(let U=R,B=R+O;U<B;U+=3)d(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const v=new N,_=new N,b=new N,S=new N;function w(T){b.fromBufferAttribute(s,T),S.copy(b);const E=a[T];v.copy(E),v.sub(b.multiplyScalar(b.dot(E))).normalize(),_.crossVectors(S,E);const R=_.dot(c[T])<0?-1:1;o.setXYZW(T,v.x,v.y,v.z,R)}for(let T=0,E=M.length;T<E;++T){const y=M[T],R=y.start,O=y.count;for(let U=R,B=R+O;U<B;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new xe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Kt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uc=new jt,mi=new Ha,ir=new ps,Nc=new N,sr=new N,rr=new N,or=new N,mo=new N,ar=new N,Fc=new N,cr=new N;class $t extends we{constructor(t=new Kt,e=new ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ar.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(mo.fromBufferAttribute(u,t),o?ar.addScaledVector(mo,h):ar.addScaledVector(mo.sub(e),h))}e.add(ar)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(ir.containsPoint(mi.origin)===!1&&(mi.intersectSphere(ir,Nc)===null||mi.origin.distanceToSquared(Nc)>(t.far-t.near)**2))&&(Uc.copy(r).invert(),mi.copy(t.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=M,b=v;_<b;_+=3){const S=a.getX(_),w=a.getX(_+1),T=a.getX(_+2);s=lr(this,d,t,n,l,h,u,S,w,T),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const M=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);s=lr(this,o,t,n,l,h,u,M,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=M,b=v;_<b;_+=3){const S=_,w=_+1,T=_+2;s=lr(this,d,t,n,l,h,u,S,w,T),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const M=m,v=m+1,_=m+2;s=lr(this,o,t,n,l,h,u,M,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function lf(i,t,e,n,s,r,o,a){let c;if(t.side===ze?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ci,a),c===null)return null;cr.copy(a),cr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(cr);return l<e.near||l>e.far?null:{distance:l,point:cr.clone(),object:i}}function lr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,sr),i.getVertexPosition(c,rr),i.getVertexPosition(l,or);const h=lf(i,t,e,n,sr,rr,or,Fc);if(h){const u=new N;fn.getBarycoord(Fc,sr,rr,or,u),s&&(h.uv=fn.getInterpolatedAttribute(s,a,c,l,u,new pt)),r&&(h.uv1=fn.getInterpolatedAttribute(r,a,c,l,u,new pt)),o&&(h.normal=fn.getInterpolatedAttribute(o,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new N,materialIndex:0};fn.getNormal(sr,rr,or,f.normal),h.face=f,h.barycoord=u}return h}class Zt extends Kt{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(u,2));function g(x,m,d,M,v,_,b,S,w,T,E){const y=_/w,R=b/T,O=_/2,U=b/2,B=S/2,D=w+1,I=T+1;let z=0,F=0;const Y=new N;for(let j=0;j<I;j++){const V=j*R-U;for(let rt=0;rt<D;rt++){const dt=rt*y-O;Y[x]=dt*M,Y[m]=V*v,Y[d]=B,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[d]=S>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(rt/w),u.push(1-j/T),z+=1}}for(let j=0;j<T;j++)for(let V=0;V<w;V++){const rt=f+V+D*j,dt=f+V+D*(j+1),H=f+(V+1)+D*(j+1),Z=f+(V+1)+D*j;c.push(rt,dt,Z),c.push(dt,H,Z),F+=6}a.addGroup(p,F,E),p+=F,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ls(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=ls(i[e]);for(const s in n)t[s]=n[s]}return t}function hf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ch(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const lh={clone:ls,merge:Oe};var uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends ms{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uf,this.fragmentShader=ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=hf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class hh extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new N,Oc=new pt,zc=new pt;class Qe extends hh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=va*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return va*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,Oc,zc),e.subVectors(zc,Oc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=-90,Xi=1;class df extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(Wi,Xi,t,e);s.layers=this.layers,this.add(s);const r=new Qe(Wi,Xi,t,e);r.layers=this.layers,this.add(r);const o=new Qe(Wi,Xi,t,e);o.layers=this.layers,this.add(o);const a=new Qe(Wi,Xi,t,e);a.layers=this.layers,this.add(a);const c=new Qe(Wi,Xi,t,e);c.layers=this.layers,this.add(c);const l=new Qe(Wi,Xi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class uh extends Pe{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:rs,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pf extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new uh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zt(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:si});r.uniforms.tEquirect.value=e;const o=new $t(s,r),a=e.minFilter;return e.minFilter===wi&&(e.minFilter=dn),new df(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const go=new N,mf=new N,gf=new Xt;class Qn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=go.subVectors(n,e).cross(mf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(go),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gf.getNormalMatrix(t),s=this.coplanarPoint(go).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new ps,hr=new N;class Va{constructor(t=new Qn,e=new Qn,n=new Qn,s=new Qn,r=new Qn,o=new Qn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],M=s[13],v=s[14],_=s[15];if(n[0].setComponents(c-r,f-l,m-p,_-d).normalize(),n[1].setComponents(c+r,f+l,m+p,_+d).normalize(),n[2].setComponents(c+o,f+h,m+g,_+M).normalize(),n[3].setComponents(c-o,f-h,m-g,_-M).normalize(),n[4].setComponents(c-a,f-u,m-x,_-v).normalize(),e===Nn)n[5].setComponents(c+a,f+u,m+x,_+v).normalize();else if(e===Ir)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(hr.x=s.normal.x>0?t.max.x:t.min.x,hr.y=s.normal.y>0?t.max.y:t.min.y,hr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(hr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _f(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const x=u[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Sn extends Kt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){const M=d*f-o;for(let v=0;v<l;v++){const _=v*u-r;g.push(_,-M,0),x.push(0,0,1),m.push(v/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<a;M++){const v=M+l*d,_=M+l*(d+1),b=M+1+l*(d+1),S=M+1+l*d;p.push(v,_,S),p.push(_,b,S)}this.setIndex(p),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(x,3)),this.setAttribute("uv",new Ot(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sn(t.width,t.height,t.widthSegments,t.heightSegments)}}var xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vf=`#ifdef USE_ALPHAHASH
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
#endif`,Mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ef=`#ifdef USE_AOMAP
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
#endif`,wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tf=`#ifdef USE_BATCHING
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
#endif`,Af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lf=`#ifdef USE_IRIDESCENCE
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
#endif`,Df=`#ifdef USE_BUMPMAP
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hf=`#define PI 3.141592653589793
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
} // validated`,Vf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gf=`vec3 transformedNormal = objectNormal;
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
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$f="gl_FragColor = linearToOutputTexel( gl_FragColor );",jf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
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
#endif`,ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,id=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rd=`#ifdef USE_GRADIENTMAP
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
}`,od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ld=`uniform bool receiveShadow;
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
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,ud=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,md=`PhysicalMaterial material;
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
#endif`,gd=`struct PhysicalMaterial {
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
}`,_d=`
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
#endif`,xd=`#if defined( RE_IndirectDiffuse )
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
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Md=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ed=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Td=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ad=`#if defined( USE_POINTS_UV )
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
#endif`,Rd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ld=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Id=`#ifdef USE_MORPHTARGETS
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
#endif`,Ud=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kd=`#ifdef USE_NORMALMAP
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
#endif`,Hd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$d=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,np=`float getShadowMask() {
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
}`,ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sp=`#ifdef USE_SKINNING
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
#endif`,rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,op=`#ifdef USE_SKINNING
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
#endif`,ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,up=`#ifdef USE_TRANSMISSION
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
#endif`,fp=`#ifdef USE_TRANSMISSION
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xp=`uniform sampler2D t2D;
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`#include <common>
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
}`,Ep=`#if DEPTH_PACKING == 3200
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
}`,wp=`#define DISTANCE
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
}`,Tp=`#define DISTANCE
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`uniform float scale;
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Lp=`#include <common>
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Ip=`#define LAMBERT
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
}`,Up=`#define LAMBERT
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
}`,Np=`#define MATCAP
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
}`,Fp=`#define MATCAP
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
}`,Op=`#define NORMAL
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
}`,zp=`#define NORMAL
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
}`,Bp=`#define PHONG
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
}`,kp=`#define PHONG
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
}`,Hp=`#define STANDARD
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
}`,Vp=`#define STANDARD
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
}`,Gp=`#define TOON
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
}`,Wp=`#define TOON
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
}`,Xp=`uniform float size;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Yp=`#include <common>
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
}`,$p=`uniform vec3 color;
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
}`,jp=`uniform float rotation;
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
}`,Zp=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:xf,alphahash_pars_fragment:vf,alphamap_fragment:Mf,alphamap_pars_fragment:yf,alphatest_fragment:Sf,alphatest_pars_fragment:bf,aomap_fragment:Ef,aomap_pars_fragment:wf,batching_pars_vertex:Tf,batching_vertex:Af,begin_vertex:Rf,beginnormal_vertex:Cf,bsdfs:Pf,iridescence_fragment:Lf,bumpmap_pars_fragment:Df,clipping_planes_fragment:If,clipping_planes_pars_fragment:Uf,clipping_planes_pars_vertex:Nf,clipping_planes_vertex:Ff,color_fragment:Of,color_pars_fragment:zf,color_pars_vertex:Bf,color_vertex:kf,common:Hf,cube_uv_reflection_fragment:Vf,defaultnormal_vertex:Gf,displacementmap_pars_vertex:Wf,displacementmap_vertex:Xf,emissivemap_fragment:qf,emissivemap_pars_fragment:Yf,colorspace_fragment:$f,colorspace_pars_fragment:jf,envmap_fragment:Zf,envmap_common_pars_fragment:Kf,envmap_pars_fragment:Jf,envmap_pars_vertex:Qf,envmap_physical_pars_fragment:hd,envmap_vertex:td,fog_vertex:ed,fog_pars_vertex:nd,fog_fragment:id,fog_pars_fragment:sd,gradientmap_pars_fragment:rd,lightmap_pars_fragment:od,lights_lambert_fragment:ad,lights_lambert_pars_fragment:cd,lights_pars_begin:ld,lights_toon_fragment:ud,lights_toon_pars_fragment:fd,lights_phong_fragment:dd,lights_phong_pars_fragment:pd,lights_physical_fragment:md,lights_physical_pars_fragment:gd,lights_fragment_begin:_d,lights_fragment_maps:xd,lights_fragment_end:vd,logdepthbuf_fragment:Md,logdepthbuf_pars_fragment:yd,logdepthbuf_pars_vertex:Sd,logdepthbuf_vertex:bd,map_fragment:Ed,map_pars_fragment:wd,map_particle_fragment:Td,map_particle_pars_fragment:Ad,metalnessmap_fragment:Rd,metalnessmap_pars_fragment:Cd,morphinstance_vertex:Pd,morphcolor_vertex:Ld,morphnormal_vertex:Dd,morphtarget_pars_vertex:Id,morphtarget_vertex:Ud,normal_fragment_begin:Nd,normal_fragment_maps:Fd,normal_pars_fragment:Od,normal_pars_vertex:zd,normal_vertex:Bd,normalmap_pars_fragment:kd,clearcoat_normal_fragment_begin:Hd,clearcoat_normal_fragment_maps:Vd,clearcoat_pars_fragment:Gd,iridescence_pars_fragment:Wd,opaque_fragment:Xd,packing:qd,premultiplied_alpha_fragment:Yd,project_vertex:$d,dithering_fragment:jd,dithering_pars_fragment:Zd,roughnessmap_fragment:Kd,roughnessmap_pars_fragment:Jd,shadowmap_pars_fragment:Qd,shadowmap_pars_vertex:tp,shadowmap_vertex:ep,shadowmask_pars_fragment:np,skinbase_vertex:ip,skinning_pars_vertex:sp,skinning_vertex:rp,skinnormal_vertex:op,specularmap_fragment:ap,specularmap_pars_fragment:cp,tonemapping_fragment:lp,tonemapping_pars_fragment:hp,transmission_fragment:up,transmission_pars_fragment:fp,uv_pars_fragment:dp,uv_pars_vertex:pp,uv_vertex:mp,worldpos_vertex:gp,background_vert:_p,background_frag:xp,backgroundCube_vert:vp,backgroundCube_frag:Mp,cube_vert:yp,cube_frag:Sp,depth_vert:bp,depth_frag:Ep,distanceRGBA_vert:wp,distanceRGBA_frag:Tp,equirect_vert:Ap,equirect_frag:Rp,linedashed_vert:Cp,linedashed_frag:Pp,meshbasic_vert:Lp,meshbasic_frag:Dp,meshlambert_vert:Ip,meshlambert_frag:Up,meshmatcap_vert:Np,meshmatcap_frag:Fp,meshnormal_vert:Op,meshnormal_frag:zp,meshphong_vert:Bp,meshphong_frag:kp,meshphysical_vert:Hp,meshphysical_frag:Vp,meshtoon_vert:Gp,meshtoon_frag:Wp,points_vert:Xp,points_frag:qp,shadow_vert:Yp,shadow_frag:$p,sprite_vert:jp,sprite_frag:Zp},yt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},vn={basic:{uniforms:Oe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Oe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Oe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Oe([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Oe([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Oe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Oe([yt.points,yt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Oe([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Oe([yt.common,yt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Oe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Oe([yt.sprite,yt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Oe([yt.common,yt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Oe([yt.lights,yt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};vn.physical={uniforms:Oe([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const ur={r:0,b:0,g:0},_i=new mn,Kp=new jt;function Jp(i,t,e,n,s,r,o){const a=new Nt(0);let c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function x(M){let v=!1;const _=g(M);_===null?d(a,c):_&&_.isColor&&(d(_,1),v=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,v){const _=g(v);_&&(_.isCubeTexture||_.mapping===Br)?(h===void 0&&(h=new $t(new Zt(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:ls(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_i.copy(v.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kp.makeRotationFromEuler(_i)),h.material.toneMapped=Qt.getTransfer(_.colorSpace)!==re,(u!==_||f!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new $t(new Sn(2,2),new rn({name:"BackgroundMaterial",uniforms:ls(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(_.colorSpace)!==re,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,p=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function d(M,v){M.getRGB(ur,ch(i)),n.buffers.color.setClear(ur.r,ur.g,ur.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),c=v,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,d(a,c)},render:x,addToRenderList:m}}function Qp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(y,R,O,U,B){let D=!1;const I=u(U,O,R);r!==I&&(r=I,l(r.object)),D=p(y,U,O,B),D&&g(y,U,O,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,_(y,R,O,U),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,R,O){const U=O.wireframe===!0;let B=n[y.id];B===void 0&&(B={},n[y.id]=B);let D=B[R.id];D===void 0&&(D={},B[R.id]=D);let I=D[U];return I===void 0&&(I=f(c()),D[U]=I),I}function f(y){const R=[],O=[],U=[];for(let B=0;B<e;B++)R[B]=0,O[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:U,object:y,attributes:{},index:null}}function p(y,R,O,U){const B=r.attributes,D=R.attributes;let I=0;const z=O.getAttributes();for(const F in z)if(z[F].location>=0){const j=B[F];let V=D[F];if(V===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(V=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(V=y.instanceColor)),j===void 0||j.attribute!==V||V&&j.data!==V.data)return!0;I++}return r.attributesNum!==I||r.index!==U}function g(y,R,O,U){const B={},D=R.attributes;let I=0;const z=O.getAttributes();for(const F in z)if(z[F].location>=0){let j=D[F];j===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(j=y.instanceColor));const V={};V.attribute=j,j&&j.data&&(V.data=j.data),B[F]=V,I++}r.attributes=B,r.attributesNum=I,r.index=U}function x(){const y=r.newAttributes;for(let R=0,O=y.length;R<O;R++)y[R]=0}function m(y){d(y,0)}function d(y,R){const O=r.newAttributes,U=r.enabledAttributes,B=r.attributeDivisors;O[y]=1,U[y]===0&&(i.enableVertexAttribArray(y),U[y]=1),B[y]!==R&&(i.vertexAttribDivisor(y,R),B[y]=R)}function M(){const y=r.newAttributes,R=r.enabledAttributes;for(let O=0,U=R.length;O<U;O++)R[O]!==y[O]&&(i.disableVertexAttribArray(O),R[O]=0)}function v(y,R,O,U,B,D,I){I===!0?i.vertexAttribIPointer(y,R,O,B,D):i.vertexAttribPointer(y,R,O,U,B,D)}function _(y,R,O,U){x();const B=U.attributes,D=O.getAttributes(),I=R.defaultAttributeValues;for(const z in D){const F=D[z];if(F.location>=0){let Y=B[z];if(Y===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),Y!==void 0){const j=Y.normalized,V=Y.itemSize,rt=t.get(Y);if(rt===void 0)continue;const dt=rt.buffer,H=rt.type,Z=rt.bytesPerElement,ht=H===i.INT||H===i.UNSIGNED_INT||Y.gpuType===Ua;if(Y.isInterleavedBufferAttribute){const it=Y.data,mt=it.stride,Rt=Y.offset;if(it.isInstancedInterleavedBuffer){for(let _t=0;_t<F.locationSize;_t++)d(F.location+_t,it.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let _t=0;_t<F.locationSize;_t++)m(F.location+_t);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let _t=0;_t<F.locationSize;_t++)v(F.location+_t,V/F.locationSize,H,j,mt*Z,(Rt+V/F.locationSize*_t)*Z,ht)}else{if(Y.isInstancedBufferAttribute){for(let it=0;it<F.locationSize;it++)d(F.location+it,Y.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let it=0;it<F.locationSize;it++)m(F.location+it);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let it=0;it<F.locationSize;it++)v(F.location+it,V/F.locationSize,H,j,V*Z,V/F.locationSize*it*Z,ht)}}else if(I!==void 0){const j=I[z];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(F.location,j);break;case 3:i.vertexAttrib3fv(F.location,j);break;case 4:i.vertexAttrib4fv(F.location,j);break;default:i.vertexAttrib1fv(F.location,j)}}}}M()}function b(){T();for(const y in n){const R=n[y];for(const O in R){const U=R[O];for(const B in U)h(U[B].object),delete U[B];delete R[O]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const O in R){const U=R[O];for(const B in U)h(U[B].object),delete U[B];delete R[O]}delete n[y.id]}function w(y){for(const R in n){const O=n[R];if(O[y.id]===void 0)continue;const U=O[y.id];for(const B in U)h(U[B].object),delete U[B];delete O[y.id]}}function T(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function tm(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function em(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==pn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const T=w===Bs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==zn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Mn&&!T)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:b,maxSamples:S}}function nm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Qn,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,v=M*4;let _=d.clippingState||null;c.value=_,_=h(g,f,v,p);for(let b=0;b!==v;++b)_[b]=e[b];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const d=p+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,_=p;v!==x;++v,_+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function im(i){let t=new WeakMap;function e(o,a){return a===Wo?o.mapping=rs:a===Xo&&(o.mapping=os),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wo||a===Xo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new pf(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ga extends hh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qi=4,Bc=[.125,.215,.35,.446,.526,.582],bi=20,_o=new Ga,kc=new Nt;let xo=null,vo=0,Mo=0,yo=!1;const yi=(1+Math.sqrt(5))/2,qi=1/yi,Hc=[new N(-yi,qi,0),new N(yi,qi,0),new N(-qi,0,yi),new N(qi,0,yi),new N(0,yi,-qi),new N(0,yi,qi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Vc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){xo=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xo,vo,Mo),this._renderer.xr.enabled=yo,t.scissorTest=!1,fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xo=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Bs,format:pn,colorSpace:fs,depthBuffer:!1},s=Gc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sm(r)),this._blurMaterial=rm(r,t,e)}return s}_compileMaterial(t){const e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,_o)}_sceneToCubeUV(t,e,n,s){const a=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(kc),h.toneMapping=ri,h.autoClear=!1;const p=new ks({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new $t(new Zt,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(kc),x=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):M===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const v=this._cubeSize;fr(s,M*v,d>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===rs||t.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;fr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,_o)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hc[(s-r-1)%Hc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new $t(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*bi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);const d=[];let M=0;for(let w=0;w<bi;++w){const T=w/x,E=Math.exp(-T*T/2);d.push(E),w===0?M+=E:w<m&&(M+=2*E)}for(let w=0;w<d.length;w++)d[w]=d[w]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const _=this._sizeLods[s],b=3*_*(s>v-Qi?s-v+Qi:0),S=4*(this._cubeSize-_);fr(e,b,S,3*_,2*_),c.setRenderTarget(e),c.render(u,_o)}}function sm(i){const t=[],e=[],n=[];let s=i;const r=i-Qi+1+Bc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Qi?c=Bc[o-i+Qi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,d=1,M=new Float32Array(x*g*p),v=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let S=0;S<p;S++){const w=S%3*2/3-1,T=S>2?0:-1,E=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];M.set(E,x*g*S),v.set(f,m*g*S);const y=[S,S,S,S,S,S];_.set(y,d*g*S)}const b=new Kt;b.setAttribute("position",new xe(M,x)),b.setAttribute("uv",new xe(v,m)),b.setAttribute("faceIndex",new xe(_,d)),t.push(b),s>Qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gc(i,t,e){const n=new hi(i,t,e);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rm(i,t,e){const n=new Float32Array(bi),s=new N(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Wc(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Xc(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Wa(){return`

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
	`}function om(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Wo||c===Xo,h=c===rs||c===os;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Vc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Vc(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function am(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ts("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cm(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const x=p[g];for(let m=0,d=x.length;m<d;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(u){const f=[],p=u.index,g=u.attributes.position;let x=0;if(p!==null){const M=p.array;x=p.version;for(let v=0,_=M.length;v<_;v+=3){const b=M[v+0],S=M[v+1],w=M[v+2];f.push(b,S,S,w,w,b)}}else if(g!==void 0){const M=g.array;x=g.version;for(let v=0,_=M.length/3-1;v<_;v+=3){const b=v+0,S=v+1,w=v+2;f.push(b,S,S,w,w,b)}}else return;const m=new(eh(f)?ah:oh)(f,1);m.version=x;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function lm(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,g);let d=0;for(let M=0;M<g;M++)d+=p[M]*x[M];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function um(i,t,e){const n=new WeakMap,s=new me;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const S=new Float32Array(_*b*4*u),w=new ih(S,_,b,u);w.type=Mn,w.needsUpdate=!0;const T=v*4;for(let y=0;y<u;y++){const R=m[y],O=d[y],U=M[y],B=_*b*4*y;for(let D=0;D<R.count;D++){const I=D*T;p===!0&&(s.fromBufferAttribute(R,D),S[B+I+0]=s.x,S[B+I+1]=s.y,S[B+I+2]=s.z,S[B+I+3]=0),g===!0&&(s.fromBufferAttribute(O,D),S[B+I+4]=s.x,S[B+I+5]=s.y,S[B+I+6]=s.z,S[B+I+7]=0),x===!0&&(s.fromBufferAttribute(U,D),S[B+I+8]=s.x,S[B+I+9]=s.y,S[B+I+10]=s.z,S[B+I+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:w,size:new pt(_,b)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];const g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function fm(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class dh extends Pe{constructor(t,e,n,s,r,o,a,c,l,h=ns){if(h!==ns&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=Ai),n===void 0&&h===cs&&(n=as),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:tn,this.minFilter=c!==void 0?c:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ph=new Pe,qc=new dh(1,1),mh=new ih,gh=new Ju,_h=new uh,Yc=[],$c=[],jc=new Float32Array(16),Zc=new Float32Array(9),Kc=new Float32Array(4);function gs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Yc[s];if(r===void 0&&(r=new Float32Array(s),Yc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hr(i,t){let e=$c[t];e===void 0&&(e=new Int32Array(t),$c[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function _m(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;Kc.set(n),i.uniformMatrix2fv(this.addr,!1,Kc),Se(e,n)}}function xm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;Zc.set(n),i.uniformMatrix3fv(this.addr,!1,Zc),Se(e,n)}}function vm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;jc.set(n),i.uniformMatrix4fv(this.addr,!1,jc),Se(e,n)}}function Mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function Em(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function Tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function Rm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(qc.compareFunction=th,r=qc):r=ph,e.setTexture2D(t||r,s)}function Cm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gh,s)}function Pm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_h,s)}function Lm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||mh,s)}function Dm(i){switch(i){case 5126:return dm;case 35664:return pm;case 35665:return mm;case 35666:return gm;case 35674:return _m;case 35675:return xm;case 35676:return vm;case 5124:case 35670:return Mm;case 35667:case 35671:return ym;case 35668:case 35672:return Sm;case 35669:case 35673:return bm;case 5125:return Em;case 36294:return wm;case 36295:return Tm;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Lm}}function Im(i,t){i.uniform1fv(this.addr,t)}function Um(i,t){const e=gs(t,this.size,2);i.uniform2fv(this.addr,e)}function Nm(i,t){const e=gs(t,this.size,3);i.uniform3fv(this.addr,e)}function Fm(i,t){const e=gs(t,this.size,4);i.uniform4fv(this.addr,e)}function Om(i,t){const e=gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function zm(i,t){const e=gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bm(i,t){const e=gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function km(i,t){i.uniform1iv(this.addr,t)}function Hm(i,t){i.uniform2iv(this.addr,t)}function Vm(i,t){i.uniform3iv(this.addr,t)}function Gm(i,t){i.uniform4iv(this.addr,t)}function Wm(i,t){i.uniform1uiv(this.addr,t)}function Xm(i,t){i.uniform2uiv(this.addr,t)}function qm(i,t){i.uniform3uiv(this.addr,t)}function Ym(i,t){i.uniform4uiv(this.addr,t)}function $m(i,t,e){const n=this.cache,s=t.length,r=Hr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ph,r[o])}function jm(i,t,e){const n=this.cache,s=t.length,r=Hr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gh,r[o])}function Zm(i,t,e){const n=this.cache,s=t.length,r=Hr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_h,r[o])}function Km(i,t,e){const n=this.cache,s=t.length,r=Hr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||mh,r[o])}function Jm(i){switch(i){case 5126:return Im;case 35664:return Um;case 35665:return Nm;case 35666:return Fm;case 35674:return Om;case 35675:return zm;case 35676:return Bm;case 5124:case 35670:return km;case 35667:case 35671:return Hm;case 35668:case 35672:return Vm;case 35669:case 35673:return Gm;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Km}}class Qm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dm(e.type)}}class t0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jm(e.type)}}class e0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const So=/(\w+)(\])?(\[|\.)?/g;function Jc(i,t){i.seq.push(t),i.map[t.id]=t}function n0(i,t,e){const n=i.name,s=n.length;for(So.lastIndex=0;;){const r=So.exec(n),o=So.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Jc(e,l===void 0?new Qm(a,i,t):new t0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new e0(a),Jc(e,u)),e=u}}}class Lr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);n0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Qc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const i0=37297;let s0=0;function r0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const tl=new Xt;function o0(i){Qt._getMatrix(tl,Qt.workingColorSpace,i);const t=`mat3( ${tl.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case kr:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function el(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+r0(i.getShaderSource(t),o)}else return s}function a0(i,t){const e=o0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function c0(i,t){let e;switch(t){case Eu:e="Linear";break;case wu:e="Reinhard";break;case Tu:e="Cineon";break;case Au:e="ACESFilmic";break;case Cu:e="AgX";break;case Pu:e="Neutral";break;case Ru:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const dr=new N;function l0(){Qt.getLuminanceCoefficients(dr);const i=dr.x.toFixed(4),t=dr.y.toFixed(4),e=dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function u0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function f0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function As(i){return i!==""}function nl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function il(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const d0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ma(i){return i.replace(d0,m0)}const p0=new Map;function m0(i,t){let e=Yt[t];if(e===void 0){const n=p0.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ma(e)}const g0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sl(i){return i.replace(g0,_0)}function _0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function x0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Da?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Dn&&(t="SHADOWMAP_TYPE_VSM"),t}function v0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rs:case os:t="ENVMAP_TYPE_CUBE";break;case Br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function M0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case os:t="ENVMAP_MODE_REFRACTION";break}return t}function y0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ia:t="ENVMAP_BLENDING_MULTIPLY";break;case Su:t="ENVMAP_BLENDING_MIX";break;case bu:t="ENVMAP_BLENDING_ADD";break}return t}function S0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function b0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=x0(e),l=v0(e),h=M0(e),u=y0(e),f=S0(e),p=h0(e),g=u0(r),x=s.createProgram();let m,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(As).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(As).join(`
`),d.length>0&&(d+=`
`)):(m=[rl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),d=[rl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Yt.tonemapping_pars_fragment:"",e.toneMapping!==ri?c0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,a0("linearToOutputTexel",e.outputColorSpace),l0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(As).join(`
`)),o=Ma(o),o=nl(o,e),o=il(o,e),a=Ma(a),a=nl(a,e),a=il(a,e),o=sl(o),a=sl(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=M+m+o,_=M+d+a,b=Qc(s,s.VERTEX_SHADER,v),S=Qc(s,s.FRAGMENT_SHADER,_);s.attachShader(x,b),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(R){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(x).trim(),U=s.getShaderInfoLog(b).trim(),B=s.getShaderInfoLog(S).trim();let D=!0,I=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,S);else{const z=el(s,b,"vertex"),F=el(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+z+`
`+F)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(U===""||B==="")&&(I=!1);I&&(R.diagnostics={runnable:D,programLog:O,vertexShader:{log:U,prefix:m},fragmentShader:{log:B,prefix:d}})}s.deleteShader(b),s.deleteShader(S),T=new Lr(s,x),E=f0(s,x)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,i0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=S,this}let E0=0;class w0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new T0(t),e.set(t,n)),n}}class T0{constructor(t){this.id=E0++,this.code=t,this.usedTimes=0}}function A0(i,t,e,n,s,r,o){const a=new sh,c=new w0,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,y,R,O,U){const B=O.fog,D=U.geometry,I=E.isMeshStandardMaterial?O.environment:null,z=(E.isMeshStandardMaterial?e:t).get(E.envMap||I),F=z&&z.mapping===Br?z.image.height:null,Y=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const j=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,V=j!==void 0?j.length:0;let rt=0;D.morphAttributes.position!==void 0&&(rt=1),D.morphAttributes.normal!==void 0&&(rt=2),D.morphAttributes.color!==void 0&&(rt=3);let dt,H,Z,ht;if(Y){const se=vn[Y];dt=se.vertexShader,H=se.fragmentShader}else dt=E.vertexShader,H=E.fragmentShader,c.update(E),Z=c.getVertexShaderID(E),ht=c.getFragmentShaderID(E);const it=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),Rt=U.isInstancedMesh===!0,_t=U.isBatchedMesh===!0,at=!!E.map,G=!!E.matcap,$=!!z,L=!!E.aoMap,ot=!!E.lightMap,Q=!!E.bumpMap,ct=!!E.normalMap,st=!!E.displacementMap,Mt=!!E.emissiveMap,ft=!!E.metalnessMap,P=!!E.roughnessMap,A=E.anisotropy>0,q=E.clearcoat>0,tt=E.dispersion>0,lt=E.iridescence>0,nt=E.sheen>0,At=E.transmission>0,vt=A&&!!E.anisotropyMap,bt=q&&!!E.clearcoatMap,kt=q&&!!E.clearcoatNormalMap,gt=q&&!!E.clearcoatRoughnessMap,Ct=lt&&!!E.iridescenceMap,Ft=lt&&!!E.iridescenceThicknessMap,Bt=nt&&!!E.sheenColorMap,Pt=nt&&!!E.sheenRoughnessMap,Jt=!!E.specularMap,qt=!!E.specularColorMap,ce=!!E.specularIntensityMap,k=At&&!!E.transmissionMap,St=At&&!!E.thicknessMap,et=!!E.gradientMap,ut=!!E.alphaMap,Tt=E.alphaTest>0,Et=!!E.alphaHash,Gt=!!E.extensions;let _e=ri;E.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(_e=i.toneMapping);const De={shaderID:Y,shaderType:E.type,shaderName:E.name,vertexShader:dt,fragmentShader:H,defines:E.defines,customVertexShaderID:Z,customFragmentShaderID:ht,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:_t,batchingColor:_t&&U._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&U.instanceColor!==null,instancingMorph:Rt&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:fs,alphaToCoverage:!!E.alphaToCoverage,map:at,matcap:G,envMap:$,envMapMode:$&&z.mapping,envMapCubeUVHeight:F,aoMap:L,lightMap:ot,bumpMap:Q,normalMap:ct,displacementMap:f&&st,emissiveMap:Mt,normalMapObjectSpace:ct&&E.normalMapType===Uu,normalMapTangentSpace:ct&&E.normalMapType===Ql,metalnessMap:ft,roughnessMap:P,anisotropy:A,anisotropyMap:vt,clearcoat:q,clearcoatMap:bt,clearcoatNormalMap:kt,clearcoatRoughnessMap:gt,dispersion:tt,iridescence:lt,iridescenceMap:Ct,iridescenceThicknessMap:Ft,sheen:nt,sheenColorMap:Bt,sheenRoughnessMap:Pt,specularMap:Jt,specularColorMap:qt,specularIntensityMap:ce,transmission:At,transmissionMap:k,thicknessMap:St,gradientMap:et,opaque:E.transparent===!1&&E.blending===Ti&&E.alphaToCoverage===!1,alphaMap:ut,alphaTest:Tt,alphaHash:Et,combine:E.combine,mapUv:at&&x(E.map.channel),aoMapUv:L&&x(E.aoMap.channel),lightMapUv:ot&&x(E.lightMap.channel),bumpMapUv:Q&&x(E.bumpMap.channel),normalMapUv:ct&&x(E.normalMap.channel),displacementMapUv:st&&x(E.displacementMap.channel),emissiveMapUv:Mt&&x(E.emissiveMap.channel),metalnessMapUv:ft&&x(E.metalnessMap.channel),roughnessMapUv:P&&x(E.roughnessMap.channel),anisotropyMapUv:vt&&x(E.anisotropyMap.channel),clearcoatMapUv:bt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:kt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&x(E.sheenRoughnessMap.channel),specularMapUv:Jt&&x(E.specularMap.channel),specularColorMapUv:qt&&x(E.specularColorMap.channel),specularIntensityMapUv:ce&&x(E.specularIntensityMap.channel),transmissionMapUv:k&&x(E.transmissionMap.channel),thicknessMapUv:St&&x(E.thicknessMap.channel),alphaMapUv:ut&&x(E.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ct||A),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(at||ut),fog:!!B,useFog:E.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:mt,skinning:U.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:rt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:at&&E.map.isVideoTexture===!0&&Qt.getTransfer(E.map.colorSpace)===re,decodeVideoTextureEmissive:Mt&&E.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(E.emissiveMap.colorSpace)===re,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===pe,flipSided:E.side===ze,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Gt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&E.extensions.multiDraw===!0||_t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function d(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)y.push(R),y.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(M(y,E),v(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function M(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function v(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),E.push(a.mask)}function _(E){const y=g[E.type];let R;if(y){const O=vn[y];R=lh.clone(O.uniforms)}else R=E.uniforms;return R}function b(E,y){let R;for(let O=0,U=h.length;O<U;O++){const B=h[O];if(B.cacheKey===y){R=B,++R.usedTimes;break}}return R===void 0&&(R=new b0(i,y,E,r),h.push(R)),R}function S(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function w(E){c.remove(E)}function T(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:b,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:T}}function R0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function C0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ol(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function al(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,p,g,x,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),t++,d}function a(u,f,p,g,x,m){const d=o(u,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(u,f,p,g,x,m){const d=o(u,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||C0),n.length>1&&n.sort(f||ol),s.length>1&&s.sort(f||ol)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function P0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new al,i.set(n,[o])):s>=r.length?(o=new al,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function L0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Nt};break;case"SpotLight":e={position:new N,direction:new N,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function D0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let I0=0;function U0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function N0(i){const t=new L0,e=D0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new jt,o=new jt;function a(l){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,M=0,v=0,_=0,b=0,S=0,w=0;l.sort(U0);for(let E=0,y=l.length;E<y;E++){const R=l[E],O=R.color,U=R.intensity,B=R.distance,D=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=O.r*U,u+=O.g*U,f+=O.b*U;else if(R.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(R.sh.coefficients[I],U);w++}else if(R.isDirectionalLight){const I=t.get(R);if(I.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const z=R.shadow,F=e.get(R);F.shadowIntensity=z.intensity,F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,n.directionalShadow[p]=F,n.directionalShadowMap[p]=D,n.directionalShadowMatrix[p]=R.shadow.matrix,M++}n.directional[p]=I,p++}else if(R.isSpotLight){const I=t.get(R);I.position.setFromMatrixPosition(R.matrixWorld),I.color.copy(O).multiplyScalar(U),I.distance=B,I.coneCos=Math.cos(R.angle),I.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),I.decay=R.decay,n.spot[x]=I;const z=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,z.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[x]=z.matrix,R.castShadow){const F=e.get(R);F.shadowIntensity=z.intensity,F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,n.spotShadow[x]=F,n.spotShadowMap[x]=D,_++}x++}else if(R.isRectAreaLight){const I=t.get(R);I.color.copy(O).multiplyScalar(U),I.halfWidth.set(R.width*.5,0,0),I.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=I,m++}else if(R.isPointLight){const I=t.get(R);if(I.color.copy(R.color).multiplyScalar(R.intensity),I.distance=R.distance,I.decay=R.decay,R.castShadow){const z=R.shadow,F=e.get(R);F.shadowIntensity=z.intensity,F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,F.shadowCameraNear=z.camera.near,F.shadowCameraFar=z.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=R.shadow.matrix,v++}n.point[g]=I,g++}else if(R.isHemisphereLight){const I=t.get(R);I.skyColor.copy(R.color).multiplyScalar(U),I.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[d]=I,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const T=n.hash;(T.directionalLength!==p||T.pointLength!==g||T.spotLength!==x||T.rectAreaLength!==m||T.hemiLength!==d||T.numDirectionalShadows!==M||T.numPointShadows!==v||T.numSpotShadows!==_||T.numSpotMaps!==b||T.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+b-S,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,T.directionalLength=p,T.pointLength=g,T.spotLength=x,T.rectAreaLength=m,T.hemiLength=d,T.numDirectionalShadows=M,T.numPointShadows=v,T.numSpotShadows=_,T.numSpotMaps=b,T.numLightProbes=w,n.version=I0++)}function c(l,h){let u=0,f=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let d=0,M=l.length;d<M;d++){const v=l[d];if(v.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(v.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function cl(i){const t=new N0(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function F0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new cl(i),t.set(s,[a])):r>=o.length?(a=new cl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class O0 extends ms{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class z0 extends ms{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const B0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k0=`uniform sampler2D shadow_pass;
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
}`;function H0(i,t,e){let n=new Va;const s=new pt,r=new pt,o=new me,a=new O0({depthPacking:Iu}),c=new z0,l={},h=e.maxTextureSize,u={[ci]:ze,[ze]:ci,[pe]:pe},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:B0,fragmentShader:k0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Kt;g.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new $t(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Da;let d=this.type;this.render=function(S,w,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),O=i.state;O.setBlending(si),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=d!==Dn&&this.type===Dn,B=d===Dn&&this.type!==Dn;for(let D=0,I=S.length;D<I;D++){const z=S[D],F=z.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const Y=F.getFrameExtents();if(s.multiply(Y),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,F.mapSize.y=r.y)),F.map===null||U===!0||B===!0){const V=this.type!==Dn?{minFilter:tn,magFilter:tn}:{};F.map!==null&&F.map.dispose(),F.map=new hi(s.x,s.y,V),F.map.texture.name=z.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const j=F.getViewportCount();for(let V=0;V<j;V++){const rt=F.getViewport(V);o.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),O.viewport(o),F.updateMatrices(z,V),n=F.getFrustum(),_(w,T,F.camera,z,this.type)}F.isPointLightShadow!==!0&&this.type===Dn&&M(F,T),F.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,R)};function M(S,w){const T=t.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new hi(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,T,f,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,T,p,x,null)}function v(S,w,T,E){let y=null;const R=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)y=R;else if(y=T.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=y.uuid,U=w.uuid;let B=l[O];B===void 0&&(B={},l[O]=B);let D=B[U];D===void 0&&(D=y.clone(),B[U]=D,w.addEventListener("dispose",b)),y=D}if(y.visible=w.visible,y.wireframe=w.wireframe,E===Dn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,T.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=i.properties.get(y);O.light=T}return y}function _(S,w,T,E,y){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Dn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const U=t.update(S),B=S.material;if(Array.isArray(B)){const D=U.groups;for(let I=0,z=D.length;I<z;I++){const F=D[I],Y=B[F.materialIndex];if(Y&&Y.visible){const j=v(S,Y,E,y);S.onBeforeShadow(i,S,w,T,U,j,F),i.renderBufferDirect(T,null,U,j,S,F),S.onAfterShadow(i,S,w,T,U,j,F)}}}else if(B.visible){const D=v(S,B,E,y);S.onBeforeShadow(i,S,w,T,U,D,null),i.renderBufferDirect(T,null,U,D,S,null),S.onAfterShadow(i,S,w,T,U,D,null)}}const O=S.children;for(let U=0,B=O.length;U<B;U++)_(O[U],w,T,E,y)}function b(S){S.target.removeEventListener("dispose",b);for(const T in l){const E=l[T],y=S.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const V0={[Oo]:zo,[Bo]:Vo,[ko]:Go,[ss]:Ho,[zo]:Oo,[Vo]:Bo,[Go]:ko,[Ho]:ss};function G0(i,t){function e(){let k=!1;const St=new me;let et=null;const ut=new me(0,0,0,0);return{setMask:function(Tt){et!==Tt&&!k&&(i.colorMask(Tt,Tt,Tt,Tt),et=Tt)},setLocked:function(Tt){k=Tt},setClear:function(Tt,Et,Gt,_e,De){De===!0&&(Tt*=_e,Et*=_e,Gt*=_e),St.set(Tt,Et,Gt,_e),ut.equals(St)===!1&&(i.clearColor(Tt,Et,Gt,_e),ut.copy(St))},reset:function(){k=!1,et=null,ut.set(-1,0,0,0)}}}function n(){let k=!1,St=!1,et=null,ut=null,Tt=null;return{setReversed:function(Et){if(St!==Et){const Gt=t.get("EXT_clip_control");St?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);const _e=Tt;Tt=null,this.setClear(_e)}St=Et},getReversed:function(){return St},setTest:function(Et){Et?it(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(Et){et!==Et&&!k&&(i.depthMask(Et),et=Et)},setFunc:function(Et){if(St&&(Et=V0[Et]),ut!==Et){switch(Et){case Oo:i.depthFunc(i.NEVER);break;case zo:i.depthFunc(i.ALWAYS);break;case Bo:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case ko:i.depthFunc(i.EQUAL);break;case Ho:i.depthFunc(i.GEQUAL);break;case Vo:i.depthFunc(i.GREATER);break;case Go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=Et}},setLocked:function(Et){k=Et},setClear:function(Et){Tt!==Et&&(St&&(Et=1-Et),i.clearDepth(Et),Tt=Et)},reset:function(){k=!1,et=null,ut=null,Tt=null,St=!1}}}function s(){let k=!1,St=null,et=null,ut=null,Tt=null,Et=null,Gt=null,_e=null,De=null;return{setTest:function(se){k||(se?it(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(se){St!==se&&!k&&(i.stencilMask(se),St=se)},setFunc:function(se,on,wn){(et!==se||ut!==on||Tt!==wn)&&(i.stencilFunc(se,on,wn),et=se,ut=on,Tt=wn)},setOp:function(se,on,wn){(Et!==se||Gt!==on||_e!==wn)&&(i.stencilOp(se,on,wn),Et=se,Gt=on,_e=wn)},setLocked:function(se){k=se},setClear:function(se){De!==se&&(i.clearStencil(se),De=se)},reset:function(){k=!1,St=null,et=null,ut=null,Tt=null,Et=null,Gt=null,_e=null,De=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,M=null,v=null,_=null,b=null,S=null,w=new Nt(0,0,0),T=0,E=!1,y=null,R=null,O=null,U=null,B=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,z=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(F)[1]),I=z>=1):F.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),I=z>=2);let Y=null,j={};const V=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),dt=new me().fromArray(V),H=new me().fromArray(rt);function Z(k,St,et,ut){const Tt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(k,Et),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<et;Gt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(St+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return Et}const ht={};ht[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(ss),Q(!1),ct(dc),it(i.CULL_FACE),L(si);function it(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function mt(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Rt(k,St){return u[k]!==St?(i.bindFramebuffer(k,St),u[k]=St,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=St),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=St),!0):!1}function _t(k,St){let et=p,ut=!1;if(k){et=f.get(St),et===void 0&&(et=[],f.set(St,et));const Tt=k.textures;if(et.length!==Tt.length||et[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,Gt=Tt.length;Et<Gt;Et++)et[Et]=i.COLOR_ATTACHMENT0+Et;et.length=Tt.length,ut=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,ut=!0);ut&&i.drawBuffers(et)}function at(k){return g!==k?(i.useProgram(k),g=k,!0):!1}const G={[Si]:i.FUNC_ADD,[ru]:i.FUNC_SUBTRACT,[ou]:i.FUNC_REVERSE_SUBTRACT};G[au]=i.MIN,G[cu]=i.MAX;const $={[lu]:i.ZERO,[hu]:i.ONE,[uu]:i.SRC_COLOR,[No]:i.SRC_ALPHA,[_u]:i.SRC_ALPHA_SATURATE,[mu]:i.DST_COLOR,[du]:i.DST_ALPHA,[fu]:i.ONE_MINUS_SRC_COLOR,[Fo]:i.ONE_MINUS_SRC_ALPHA,[gu]:i.ONE_MINUS_DST_COLOR,[pu]:i.ONE_MINUS_DST_ALPHA,[xu]:i.CONSTANT_COLOR,[vu]:i.ONE_MINUS_CONSTANT_COLOR,[Mu]:i.CONSTANT_ALPHA,[yu]:i.ONE_MINUS_CONSTANT_ALPHA};function L(k,St,et,ut,Tt,Et,Gt,_e,De,se){if(k===si){x===!0&&(mt(i.BLEND),x=!1);return}if(x===!1&&(it(i.BLEND),x=!0),k!==su){if(k!==m||se!==E){if((d!==Si||_!==Si)&&(i.blendEquation(i.FUNC_ADD),d=Si,_=Si),se)switch(k){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ps:i.blendFunc(i.ONE,i.ONE);break;case pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ps:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,v=null,b=null,S=null,w.set(0,0,0),T=0,m=k,E=se}return}Tt=Tt||St,Et=Et||et,Gt=Gt||ut,(St!==d||Tt!==_)&&(i.blendEquationSeparate(G[St],G[Tt]),d=St,_=Tt),(et!==M||ut!==v||Et!==b||Gt!==S)&&(i.blendFuncSeparate($[et],$[ut],$[Et],$[Gt]),M=et,v=ut,b=Et,S=Gt),(_e.equals(w)===!1||De!==T)&&(i.blendColor(_e.r,_e.g,_e.b,De),w.copy(_e),T=De),m=k,E=!1}function ot(k,St){k.side===pe?mt(i.CULL_FACE):it(i.CULL_FACE);let et=k.side===ze;St&&(et=!et),Q(et),k.blending===Ti&&k.transparent===!1?L(si):L(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const ut=k.stencilWrite;a.setTest(ut),ut&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Mt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(k){y!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),y=k)}function ct(k){k!==nu?(it(i.CULL_FACE),k!==R&&(k===dc?i.cullFace(i.BACK):k===iu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),R=k}function st(k){k!==O&&(I&&i.lineWidth(k),O=k)}function Mt(k,St,et){k?(it(i.POLYGON_OFFSET_FILL),(U!==St||B!==et)&&(i.polygonOffset(St,et),U=St,B=et)):mt(i.POLYGON_OFFSET_FILL)}function ft(k){k?it(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function P(k){k===void 0&&(k=i.TEXTURE0+D-1),Y!==k&&(i.activeTexture(k),Y=k)}function A(k,St,et){et===void 0&&(Y===null?et=i.TEXTURE0+D-1:et=Y);let ut=j[et];ut===void 0&&(ut={type:void 0,texture:void 0},j[et]=ut),(ut.type!==k||ut.texture!==St)&&(Y!==et&&(i.activeTexture(et),Y=et),i.bindTexture(k,St||ht[k]),ut.type=k,ut.texture=St)}function q(){const k=j[Y];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(k){dt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),dt.copy(k))}function Pt(k){H.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),H.copy(k))}function Jt(k,St){let et=l.get(St);et===void 0&&(et=new WeakMap,l.set(St,et));let ut=et.get(k);ut===void 0&&(ut=i.getUniformBlockIndex(St,k.name),et.set(k,ut))}function qt(k,St){const ut=l.get(St).get(k);c.get(St)!==ut&&(i.uniformBlockBinding(St,ut,k.__bindingPointIndex),c.set(St,ut))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Y=null,j={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,M=null,v=null,_=null,b=null,S=null,w=new Nt(0,0,0),T=0,E=!1,y=null,R=null,O=null,U=null,B=null,dt.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:mt,bindFramebuffer:Rt,drawBuffers:_t,useProgram:at,setBlending:L,setMaterial:ot,setFlipSided:Q,setCullFace:ct,setLineWidth:st,setPolygonOffset:Mt,setScissorTest:ft,activeTexture:P,bindTexture:A,unbindTexture:q,compressedTexImage2D:tt,compressedTexImage3D:lt,texImage2D:Ct,texImage3D:Ft,updateUBOMapping:Jt,uniformBlockBinding:qt,texStorage2D:kt,texStorage3D:gt,texSubImage2D:nt,texSubImage3D:At,compressedTexSubImage2D:vt,compressedTexSubImage3D:bt,scissor:Bt,viewport:Pt,reset:ce}}function ll(i,t,e,n){const s=W0(n);switch(e){case Yl:return i*t;case jl:return i*t;case Zl:return i*t*2;case Oa:return i*t/s.components*s.byteLength;case za:return i*t/s.components*s.byteLength;case Kl:return i*t*2/s.components*s.byteLength;case Ba:return i*t*2/s.components*s.byteLength;case $l:return i*t*3/s.components*s.byteLength;case pn:return i*t*4/s.components*s.byteLength;case ka:return i*t*4/s.components*s.byteLength;case wr:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ar:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:case Zo:return Math.max(i,16)*Math.max(t,8)/4;case Yo:case jo:return Math.max(i,8)*Math.max(t,8)/2;case Ko:case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ea:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case na:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ia:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ra:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case oa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case aa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ca:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ha:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ua:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case da:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Cr:case pa:case ma:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Jl:case ga:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _a:case xa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function W0(i){switch(i){case zn:case Wl:return{byteLength:1,components:1};case Ls:case Xl:case Bs:return{byteLength:2,components:1};case Na:case Fa:return{byteLength:2,components:4};case Ai:case Ua:case Mn:return{byteLength:4,components:1};case ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function X0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,A){return p?new OffscreenCanvas(P,A):Ds("canvas")}function x(P,A,q){let tt=1;const lt=ft(P);if((lt.width>q||lt.height>q)&&(tt=q/Math.max(lt.width,lt.height)),tt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const nt=Math.floor(tt*lt.width),At=Math.floor(tt*lt.height);u===void 0&&(u=g(nt,At));const vt=A?g(nt,At):u;return vt.width=nt,vt.height=At,vt.getContext("2d").drawImage(P,0,0,nt,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+nt+"x"+At+")."),vt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),P;return P}function m(P){return P.generateMipmaps}function d(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,A,q,tt,lt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let nt=A;if(A===i.RED&&(q===i.FLOAT&&(nt=i.R32F),q===i.HALF_FLOAT&&(nt=i.R16F),q===i.UNSIGNED_BYTE&&(nt=i.R8)),A===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.R8UI),q===i.UNSIGNED_SHORT&&(nt=i.R16UI),q===i.UNSIGNED_INT&&(nt=i.R32UI),q===i.BYTE&&(nt=i.R8I),q===i.SHORT&&(nt=i.R16I),q===i.INT&&(nt=i.R32I)),A===i.RG&&(q===i.FLOAT&&(nt=i.RG32F),q===i.HALF_FLOAT&&(nt=i.RG16F),q===i.UNSIGNED_BYTE&&(nt=i.RG8)),A===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.RG8UI),q===i.UNSIGNED_SHORT&&(nt=i.RG16UI),q===i.UNSIGNED_INT&&(nt=i.RG32UI),q===i.BYTE&&(nt=i.RG8I),q===i.SHORT&&(nt=i.RG16I),q===i.INT&&(nt=i.RG32I)),A===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),q===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),q===i.UNSIGNED_INT&&(nt=i.RGB32UI),q===i.BYTE&&(nt=i.RGB8I),q===i.SHORT&&(nt=i.RGB16I),q===i.INT&&(nt=i.RGB32I)),A===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),q===i.UNSIGNED_INT&&(nt=i.RGBA32UI),q===i.BYTE&&(nt=i.RGBA8I),q===i.SHORT&&(nt=i.RGBA16I),q===i.INT&&(nt=i.RGBA32I)),A===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),A===i.RGBA){const At=lt?kr:Qt.getTransfer(tt);q===i.FLOAT&&(nt=i.RGBA32F),q===i.HALF_FLOAT&&(nt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(nt=At===re?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function _(P,A){let q;return P?A===null||A===Ai||A===as?q=i.DEPTH24_STENCIL8:A===Mn?q=i.DEPTH32F_STENCIL8:A===Ls&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ai||A===as?q=i.DEPTH_COMPONENT24:A===Mn?q=i.DEPTH_COMPONENT32F:A===Ls&&(q=i.DEPTH_COMPONENT16),q}function b(P,A){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==tn&&P.minFilter!==dn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function S(P){const A=P.target;A.removeEventListener("dispose",S),T(A),A.isVideoTexture&&h.delete(A)}function w(P){const A=P.target;A.removeEventListener("dispose",w),y(A)}function T(P){const A=n.get(P);if(A.__webglInit===void 0)return;const q=P.source,tt=f.get(q);if(tt){const lt=tt[A.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&E(P),Object.keys(tt).length===0&&f.delete(q)}n.remove(P)}function E(P){const A=n.get(P);i.deleteTexture(A.__webglTexture);const q=P.source,tt=f.get(q);delete tt[A.__cacheKey],o.memory.textures--}function y(P){const A=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(A.__webglFramebuffer[tt]))for(let lt=0;lt<A.__webglFramebuffer[tt].length;lt++)i.deleteFramebuffer(A.__webglFramebuffer[tt][lt]);else i.deleteFramebuffer(A.__webglFramebuffer[tt]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[tt])}else{if(Array.isArray(A.__webglFramebuffer))for(let tt=0;tt<A.__webglFramebuffer.length;tt++)i.deleteFramebuffer(A.__webglFramebuffer[tt]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let tt=0;tt<A.__webglColorRenderbuffer.length;tt++)A.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[tt]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const q=P.textures;for(let tt=0,lt=q.length;tt<lt;tt++){const nt=n.get(q[tt]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(q[tt])}n.remove(P)}let R=0;function O(){R=0}function U(){const P=R;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),R+=1,P}function B(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function D(P,A){const q=n.get(P);if(P.isVideoTexture&&st(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){const tt=P.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(q,P,A);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+A)}function I(P,A){const q=n.get(P);if(P.version>0&&q.__version!==P.version){H(q,P,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+A)}function z(P,A){const q=n.get(P);if(P.version>0&&q.__version!==P.version){H(q,P,A);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+A)}function F(P,A){const q=n.get(P);if(P.version>0&&q.__version!==P.version){Z(q,P,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+A)}const Y={[li]:i.REPEAT,[Ei]:i.CLAMP_TO_EDGE,[qo]:i.MIRRORED_REPEAT},j={[tn]:i.NEAREST,[Lu]:i.NEAREST_MIPMAP_NEAREST,[Ys]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[$r]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},V={[Nu]:i.NEVER,[Hu]:i.ALWAYS,[Fu]:i.LESS,[th]:i.LEQUAL,[Ou]:i.EQUAL,[ku]:i.GEQUAL,[zu]:i.GREATER,[Bu]:i.NOTEQUAL};function rt(P,A){if(A.type===Mn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===dn||A.magFilter===$r||A.magFilter===Ys||A.magFilter===wi||A.minFilter===dn||A.minFilter===$r||A.minFilter===Ys||A.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Y[A.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Y[A.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Y[A.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,j[A.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,j[A.minFilter]),A.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,V[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===tn||A.minFilter!==Ys&&A.minFilter!==wi||A.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function dt(P,A){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",S));const tt=A.source;let lt=f.get(tt);lt===void 0&&(lt={},f.set(tt,lt));const nt=B(A);if(nt!==P.__cacheKey){lt[nt]===void 0&&(lt[nt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),lt[nt].usedTimes++;const At=lt[P.__cacheKey];At!==void 0&&(lt[P.__cacheKey].usedTimes--,At.usedTimes===0&&E(A)),P.__cacheKey=nt,P.__webglTexture=lt[nt].texture}return q}function H(P,A,q){let tt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(tt=i.TEXTURE_3D);const lt=dt(P,A),nt=A.source;e.bindTexture(tt,P.__webglTexture,i.TEXTURE0+q);const At=n.get(nt);if(nt.version!==At.__version||lt===!0){e.activeTexture(i.TEXTURE0+q);const vt=Qt.getPrimaries(Qt.workingColorSpace),bt=A.colorSpace===Un?null:Qt.getPrimaries(A.colorSpace),kt=A.colorSpace===Un||vt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let gt=x(A.image,!1,s.maxTextureSize);gt=Mt(A,gt);const Ct=r.convert(A.format,A.colorSpace),Ft=r.convert(A.type);let Bt=v(A.internalFormat,Ct,Ft,A.colorSpace,A.isVideoTexture);rt(tt,A);let Pt;const Jt=A.mipmaps,qt=A.isVideoTexture!==!0,ce=At.__version===void 0||lt===!0,k=nt.dataReady,St=b(A,gt);if(A.isDepthTexture)Bt=_(A.format===cs,A.type),ce&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Bt,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,Bt,gt.width,gt.height,0,Ct,Ft,null));else if(A.isDataTexture)if(Jt.length>0){qt&&ce&&e.texStorage2D(i.TEXTURE_2D,St,Bt,Jt[0].width,Jt[0].height);for(let et=0,ut=Jt.length;et<ut;et++)Pt=Jt[et],qt?k&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Pt.width,Pt.height,Ct,Ft,Pt.data):e.texImage2D(i.TEXTURE_2D,et,Bt,Pt.width,Pt.height,0,Ct,Ft,Pt.data);A.generateMipmaps=!1}else qt?(ce&&e.texStorage2D(i.TEXTURE_2D,St,Bt,gt.width,gt.height),k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt.width,gt.height,Ct,Ft,gt.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,gt.width,gt.height,0,Ct,Ft,gt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){qt&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Bt,Jt[0].width,Jt[0].height,gt.depth);for(let et=0,ut=Jt.length;et<ut;et++)if(Pt=Jt[et],A.format!==pn)if(Ct!==null)if(qt){if(k)if(A.layerUpdates.size>0){const Tt=ll(Pt.width,Pt.height,A.format,A.type);for(const Et of A.layerUpdates){const Gt=Pt.data.subarray(Et*Tt/Pt.data.BYTES_PER_ELEMENT,(Et+1)*Tt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,Et,Pt.width,Pt.height,1,Ct,Gt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Pt.width,Pt.height,gt.depth,Ct,Pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,Bt,Pt.width,Pt.height,gt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Pt.width,Pt.height,gt.depth,Ct,Ft,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,Bt,Pt.width,Pt.height,gt.depth,0,Ct,Ft,Pt.data)}else{qt&&ce&&e.texStorage2D(i.TEXTURE_2D,St,Bt,Jt[0].width,Jt[0].height);for(let et=0,ut=Jt.length;et<ut;et++)Pt=Jt[et],A.format!==pn?Ct!==null?qt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,Pt.width,Pt.height,Ct,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,et,Bt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?k&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Pt.width,Pt.height,Ct,Ft,Pt.data):e.texImage2D(i.TEXTURE_2D,et,Bt,Pt.width,Pt.height,0,Ct,Ft,Pt.data)}else if(A.isDataArrayTexture)if(qt){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Bt,gt.width,gt.height,gt.depth),k)if(A.layerUpdates.size>0){const et=ll(gt.width,gt.height,A.format,A.type);for(const ut of A.layerUpdates){const Tt=gt.data.subarray(ut*et/gt.data.BYTES_PER_ELEMENT,(ut+1)*et/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,gt.width,gt.height,1,Ct,Ft,Tt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Ct,Ft,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,gt.width,gt.height,gt.depth,0,Ct,Ft,gt.data);else if(A.isData3DTexture)qt?(ce&&e.texStorage3D(i.TEXTURE_3D,St,Bt,gt.width,gt.height,gt.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Ct,Ft,gt.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,gt.width,gt.height,gt.depth,0,Ct,Ft,gt.data);else if(A.isFramebufferTexture){if(ce)if(qt)e.texStorage2D(i.TEXTURE_2D,St,Bt,gt.width,gt.height);else{let et=gt.width,ut=gt.height;for(let Tt=0;Tt<St;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,Bt,et,ut,0,Ct,Ft,null),et>>=1,ut>>=1}}else if(Jt.length>0){if(qt&&ce){const et=ft(Jt[0]);e.texStorage2D(i.TEXTURE_2D,St,Bt,et.width,et.height)}for(let et=0,ut=Jt.length;et<ut;et++)Pt=Jt[et],qt?k&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Ct,Ft,Pt):e.texImage2D(i.TEXTURE_2D,et,Bt,Ct,Ft,Pt);A.generateMipmaps=!1}else if(qt){if(ce){const et=ft(gt);e.texStorage2D(i.TEXTURE_2D,St,Bt,et.width,et.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Ft,gt)}else e.texImage2D(i.TEXTURE_2D,0,Bt,Ct,Ft,gt);m(A)&&d(tt),At.__version=nt.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Z(P,A,q){if(A.image.length!==6)return;const tt=dt(P,A),lt=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);const nt=n.get(lt);if(lt.version!==nt.__version||tt===!0){e.activeTexture(i.TEXTURE0+q);const At=Qt.getPrimaries(Qt.workingColorSpace),vt=A.colorSpace===Un?null:Qt.getPrimaries(A.colorSpace),bt=A.colorSpace===Un||At===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const kt=A.isCompressedTexture||A.image[0].isCompressedTexture,gt=A.image[0]&&A.image[0].isDataTexture,Ct=[];for(let ut=0;ut<6;ut++)!kt&&!gt?Ct[ut]=x(A.image[ut],!0,s.maxCubemapSize):Ct[ut]=gt?A.image[ut].image:A.image[ut],Ct[ut]=Mt(A,Ct[ut]);const Ft=Ct[0],Bt=r.convert(A.format,A.colorSpace),Pt=r.convert(A.type),Jt=v(A.internalFormat,Bt,Pt,A.colorSpace),qt=A.isVideoTexture!==!0,ce=nt.__version===void 0||tt===!0,k=lt.dataReady;let St=b(A,Ft);rt(i.TEXTURE_CUBE_MAP,A);let et;if(kt){qt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Jt,Ft.width,Ft.height);for(let ut=0;ut<6;ut++){et=Ct[ut].mipmaps;for(let Tt=0;Tt<et.length;Tt++){const Et=et[Tt];A.format!==pn?Bt!==null?qt?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt,0,0,Et.width,Et.height,Bt,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt,Jt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt,0,0,Et.width,Et.height,Bt,Pt,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt,Jt,Et.width,Et.height,0,Bt,Pt,Et.data)}}}else{if(et=A.mipmaps,qt&&ce){et.length>0&&St++;const ut=ft(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Jt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(gt){qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Ct[ut].width,Ct[ut].height,Bt,Pt,Ct[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Jt,Ct[ut].width,Ct[ut].height,0,Bt,Pt,Ct[ut].data);for(let Tt=0;Tt<et.length;Tt++){const Gt=et[Tt].image[ut].image;qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt+1,0,0,Gt.width,Gt.height,Bt,Pt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt+1,Jt,Gt.width,Gt.height,0,Bt,Pt,Gt.data)}}else{qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Bt,Pt,Ct[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Jt,Bt,Pt,Ct[ut]);for(let Tt=0;Tt<et.length;Tt++){const Et=et[Tt];qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt+1,0,0,Bt,Pt,Et.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt+1,Jt,Bt,Pt,Et.image[ut])}}}m(A)&&d(i.TEXTURE_CUBE_MAP),nt.__version=lt.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ht(P,A,q,tt,lt,nt){const At=r.convert(q.format,q.colorSpace),vt=r.convert(q.type),bt=v(q.internalFormat,At,vt,q.colorSpace),kt=n.get(A),gt=n.get(q);if(gt.__renderTarget=A,!kt.__hasExternalTextures){const Ct=Math.max(1,A.width>>nt),Ft=Math.max(1,A.height>>nt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,nt,bt,Ct,Ft,A.depth,0,At,vt,null):e.texImage2D(lt,nt,bt,Ct,Ft,0,At,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),ct(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,lt,gt.__webglTexture,0,Q(A)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,lt,gt.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(P,A,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),A.depthBuffer){const tt=A.depthTexture,lt=tt&&tt.isDepthTexture?tt.type:null,nt=_(A.stencilBuffer,lt),At=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=Q(A);ct(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,nt,A.width,A.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,nt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,nt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,P)}else{const tt=A.textures;for(let lt=0;lt<tt.length;lt++){const nt=tt[lt],At=r.convert(nt.format,nt.colorSpace),vt=r.convert(nt.type),bt=v(nt.internalFormat,At,vt,nt.colorSpace),kt=Q(A);q&&ct(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,bt,A.width,A.height):ct(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt,bt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,bt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(A.depthTexture);tt.__renderTarget=A,(!tt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),D(A.depthTexture,0);const lt=tt.__webglTexture,nt=Q(A);if(A.depthTexture.format===ns)ct(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(A.depthTexture.format===cs)ct(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function Rt(P){const A=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const tt=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),tt){const lt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,tt.removeEventListener("dispose",lt)};tt.addEventListener("dispose",lt),A.__depthDisposeCallback=lt}A.__boundDepthTexture=tt}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");mt(A.__webglFramebuffer,P)}else if(q){A.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[tt]),A.__webglDepthbuffer[tt]===void 0)A.__webglDepthbuffer[tt]=i.createRenderbuffer(),it(A.__webglDepthbuffer[tt],P,!1);else{const lt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=A.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),it(A.__webglDepthbuffer,P,!1);else{const tt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(P,A,q){const tt=n.get(P);A!==void 0&&ht(tt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Rt(P)}function at(P){const A=P.texture,q=n.get(P),tt=n.get(A);P.addEventListener("dispose",w);const lt=P.textures,nt=P.isWebGLCubeRenderTarget===!0,At=lt.length>1;if(At||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=A.version,o.memory.textures++),nt){q.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[vt]=[];for(let bt=0;bt<A.mipmaps.length;bt++)q.__webglFramebuffer[vt][bt]=i.createFramebuffer()}else q.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let vt=0;vt<A.mipmaps.length;vt++)q.__webglFramebuffer[vt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(At)for(let vt=0,bt=lt.length;vt<bt;vt++){const kt=n.get(lt[vt]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&ct(P)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let vt=0;vt<lt.length;vt++){const bt=lt[vt];q.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[vt]);const kt=r.convert(bt.format,bt.colorSpace),gt=r.convert(bt.type),Ct=v(bt.internalFormat,kt,gt,bt.colorSpace,P.isXRRenderTarget===!0),Ft=Q(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Ct,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,q.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),it(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),rt(i.TEXTURE_CUBE_MAP,A);for(let vt=0;vt<6;vt++)if(A.mipmaps&&A.mipmaps.length>0)for(let bt=0;bt<A.mipmaps.length;bt++)ht(q.__webglFramebuffer[vt][bt],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,bt);else ht(q.__webglFramebuffer[vt],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(A)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let vt=0,bt=lt.length;vt<bt;vt++){const kt=lt[vt],gt=n.get(kt);e.bindTexture(i.TEXTURE_2D,gt.__webglTexture),rt(i.TEXTURE_2D,kt),ht(q.__webglFramebuffer,P,kt,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),m(kt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(vt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,tt.__webglTexture),rt(vt,A),A.mipmaps&&A.mipmaps.length>0)for(let bt=0;bt<A.mipmaps.length;bt++)ht(q.__webglFramebuffer[bt],P,A,i.COLOR_ATTACHMENT0,vt,bt);else ht(q.__webglFramebuffer,P,A,i.COLOR_ATTACHMENT0,vt,0);m(A)&&d(vt),e.unbindTexture()}P.depthBuffer&&Rt(P)}function G(P){const A=P.textures;for(let q=0,tt=A.length;q<tt;q++){const lt=A[q];if(m(lt)){const nt=M(P),At=n.get(lt).__webglTexture;e.bindTexture(nt,At),d(nt),e.unbindTexture()}}}const $=[],L=[];function ot(P){if(P.samples>0){if(ct(P)===!1){const A=P.textures,q=P.width,tt=P.height;let lt=i.COLOR_BUFFER_BIT;const nt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(P),vt=A.length>1;if(vt)for(let bt=0;bt<A.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let bt=0;bt<A.length;bt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);const kt=n.get(A[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,q,tt,0,0,q,tt,lt,i.NEAREST),c===!0&&($.length=0,L.length=0,$.push(i.COLOR_ATTACHMENT0+bt),P.depthBuffer&&P.resolveDepthBuffer===!1&&($.push(nt),L.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let bt=0;bt<A.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);const kt=n.get(A[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const A=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Q(P){return Math.min(s.maxSamples,P.samples)}function ct(P){const A=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function st(P){const A=o.render.frame;h.get(P)!==A&&(h.set(P,A),P.update())}function Mt(P,A){const q=P.colorSpace,tt=P.format,lt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==fs&&q!==Un&&(Qt.getTransfer(q)===re?(tt!==pn||lt!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}function ft(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=D,this.setTexture2DArray=I,this.setTexture3D=z,this.setTextureCube=F,this.rebindTextures=_t,this.setupRenderTarget=at,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=ct}function q0(i,t){function e(n,s=Un){let r;const o=Qt.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===Na)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wl)return i.BYTE;if(n===Xl)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===Ua)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Bs)return i.HALF_FLOAT;if(n===Yl)return i.ALPHA;if(n===$l)return i.RGB;if(n===pn)return i.RGBA;if(n===jl)return i.LUMINANCE;if(n===Zl)return i.LUMINANCE_ALPHA;if(n===ns)return i.DEPTH_COMPONENT;if(n===cs)return i.DEPTH_STENCIL;if(n===Oa)return i.RED;if(n===za)return i.RED_INTEGER;if(n===Kl)return i.RG;if(n===Ba)return i.RG_INTEGER;if(n===ka)return i.RGBA_INTEGER;if(n===wr||n===Tr||n===Ar||n===Rr)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yo||n===$o||n===jo||n===Zo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ko||n===Jo||n===Qo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ko||n===Jo)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===ca||n===la||n===ha||n===ua||n===fa||n===da)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ta)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ea)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===na)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ia)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ra)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===aa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ca)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===la)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ha)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ua)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===da)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cr||n===pa||n===ma)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Cr)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jl||n===ga||n===_a||n===xa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Y0 extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ce extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $0={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const j0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z0=`
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

}`;class K0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Pe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new rn({vertexShader:j0,fragmentShader:Z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new Sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J0 extends Pi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null;const x=new K0,m=e.getContextAttributes();let d=null,M=null;const v=[],_=[],b=new pt;let S=null;const w=new Qe;w.viewport=new me;const T=new Qe;T.viewport=new me;const E=[w,T],y=new Y0;let R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=v[H];return Z===void 0&&(Z=new bo,v[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=v[H];return Z===void 0&&(Z=new bo,v[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=v[H];return Z===void 0&&(Z=new bo,v[H]=Z),Z.getHandSpace()};function U(H){const Z=_.indexOf(H.inputSource);if(Z===-1)return;const ht=v[Z];ht!==void 0&&(ht.update(H.inputSource,H.frame,l||o),ht.dispatchEvent({type:H.type,data:H.inputSource}))}function B(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",D);for(let H=0;H<v.length;H++){const Z=_[H];Z!==null&&(_[H]=null,v[H].disconnect(Z))}R=null,O=null,x.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,M=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",B),s.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(b),s.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new hi(p.framebufferWidth,p.framebufferHeight,{format:pn,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,ht=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=m.stencil?cs:ns,ht=m.stencil?as:Ai);const mt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(mt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new hi(f.textureWidth,f.textureHeight,{format:pn,type:zn,depthTexture:new dh(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function D(H){for(let Z=0;Z<H.removed.length;Z++){const ht=H.removed[Z],it=_.indexOf(ht);it>=0&&(_[it]=null,v[it].disconnect(ht))}for(let Z=0;Z<H.added.length;Z++){const ht=H.added[Z];let it=_.indexOf(ht);if(it===-1){for(let Rt=0;Rt<v.length;Rt++)if(Rt>=_.length){_.push(ht),it=Rt;break}else if(_[Rt]===null){_[Rt]=ht,it=Rt;break}if(it===-1)break}const mt=v[it];mt&&mt.connect(ht)}}const I=new N,z=new N;function F(H,Z,ht){I.setFromMatrixPosition(Z.matrixWorld),z.setFromMatrixPosition(ht.matrixWorld);const it=I.distanceTo(z),mt=Z.projectionMatrix.elements,Rt=ht.projectionMatrix.elements,_t=mt[14]/(mt[10]-1),at=mt[14]/(mt[10]+1),G=(mt[9]+1)/mt[5],$=(mt[9]-1)/mt[5],L=(mt[8]-1)/mt[0],ot=(Rt[8]+1)/Rt[0],Q=_t*L,ct=_t*ot,st=it/(-L+ot),Mt=st*-L;if(Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Mt),H.translateZ(st),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),mt[10]===-1)H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ft=_t+st,P=at+st,A=Q-Mt,q=ct+(it-Mt),tt=G*at/P*ft,lt=$*at/P*ft;H.projectionMatrix.makePerspective(A,q,tt,lt,ft,P),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Y(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let Z=H.near,ht=H.far;x.texture!==null&&(x.depthNear>0&&(Z=x.depthNear),x.depthFar>0&&(ht=x.depthFar)),y.near=T.near=w.near=Z,y.far=T.far=w.far=ht,(R!==y.near||O!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,O=y.far),w.layers.mask=H.layers.mask|2,T.layers.mask=H.layers.mask|4,y.layers.mask=w.layers.mask|T.layers.mask;const it=H.parent,mt=y.cameras;Y(y,it);for(let Rt=0;Rt<mt.length;Rt++)Y(mt[Rt],it);mt.length===2?F(y,w,T):y.projectionMatrix.copy(w.projectionMatrix),j(H,y,it)};function j(H,Z,ht){ht===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(ht.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=va*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(H){c=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let V=null;function rt(H,Z){if(h=Z.getViewerPose(l||o),g=Z,h!==null){const ht=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let it=!1;ht.length!==y.cameras.length&&(y.cameras.length=0,it=!0);for(let Rt=0;Rt<ht.length;Rt++){const _t=ht[Rt];let at=null;if(p!==null)at=p.getViewport(_t);else{const $=u.getViewSubImage(f,_t);at=$.viewport,Rt===0&&(t.setRenderTargetTextures(M,$.colorTexture,f.ignoreDepthValues?void 0:$.depthStencilTexture),t.setRenderTarget(M))}let G=E[Rt];G===void 0&&(G=new Qe,G.layers.enable(Rt),G.viewport=new me,E[Rt]=G),G.matrix.fromArray(_t.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(_t.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(at.x,at.y,at.width,at.height),Rt===0&&(y.matrix.copy(G.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),it===!0&&y.cameras.push(G)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")){const Rt=u.getDepthInformation(ht[0]);Rt&&Rt.isValid&&Rt.texture&&x.init(t,Rt,s.renderState)}}for(let ht=0;ht<v.length;ht++){const it=_[ht],mt=v[ht];it!==null&&mt!==void 0&&mt.update(it,Z,l||o)}V&&V(H,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const dt=new fh;dt.setAnimationLoop(rt),this.setAnimationLoop=function(H){V=H},this.dispose=function(){}}}const xi=new mn,Q0=new jt;function tg(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,ch(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,v,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,M,v):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ze&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ze&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=t.get(d),v=M.envMap,_=M.envMapRotation;v&&(m.envMap.value=v,xi.copy(_),xi.x*=-1,xi.y*=-1,xi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(Q0.makeRotationFromEuler(xi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,M,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=v*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ze&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function eg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){const _=v.program;n.uniformBlockBinding(M,_)}function l(M,v){let _=s[M.id];_===void 0&&(g(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",m));const b=v.program;n.updateUBOMapping(M,b);const S=t.render.frame;r[M.id]!==S&&(f(M),r[M.id]=S)}function h(M){const v=u();M.__bindingPointIndex=v;const _=i.createBuffer(),b=M.__size,S=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,b,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=s[M.id],_=M.uniforms,b=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let S=0,w=_.length;S<w;S++){const T=Array.isArray(_[S])?_[S]:[_[S]];for(let E=0,y=T.length;E<y;E++){const R=T[E];if(p(R,S,E,b)===!0){const O=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let B=0;for(let D=0;D<U.length;D++){const I=U[D],z=x(I);typeof I=="number"||typeof I=="boolean"?(R.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,O+B,R.__data)):I.isMatrix3?(R.__data[0]=I.elements[0],R.__data[1]=I.elements[1],R.__data[2]=I.elements[2],R.__data[3]=0,R.__data[4]=I.elements[3],R.__data[5]=I.elements[4],R.__data[6]=I.elements[5],R.__data[7]=0,R.__data[8]=I.elements[6],R.__data[9]=I.elements[7],R.__data[10]=I.elements[8],R.__data[11]=0):(I.toArray(R.__data,B),B+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,v,_,b){const S=M.value,w=v+"_"+_;if(b[w]===void 0)return typeof S=="number"||typeof S=="boolean"?b[w]=S:b[w]=S.clone(),!0;{const T=b[w];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return b[w]=S,!0}else if(T.equals(S)===!1)return T.copy(S),!0}return!1}function g(M){const v=M.uniforms;let _=0;const b=16;for(let w=0,T=v.length;w<T;w++){const E=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,R=E.length;y<R;y++){const O=E[y],U=Array.isArray(O.value)?O.value:[O.value];for(let B=0,D=U.length;B<D;B++){const I=U[B],z=x(I),F=_%b,Y=F%z.boundary,j=F+Y;_+=Y,j!==0&&b-j<z.storage&&(_+=b-j),O.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=z.storage}}}const S=_%b;return S>0&&(_+=b-S),M.__size=_,M.__cache={},this}function x(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}class ng{constructor(t={}){const{canvas:e=Wu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=he,this.toneMapping=ri,this.toneMappingExposure=1;const _=this;let b=!1,S=0,w=0,T=null,E=-1,y=null;const R=new me,O=new me;let U=null;const B=new Nt(0);let D=0,I=e.width,z=e.height,F=1,Y=null,j=null;const V=new me(0,0,I,z),rt=new me(0,0,I,z);let dt=!1;const H=new Va;let Z=!1,ht=!1;const it=new jt,mt=new jt,Rt=new N,_t=new me,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let G=!1;function $(){return T===null?F:1}let L=n;function ot(C,W){return e.getContext(C,W)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${La}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),L===null){const W="webgl2";if(L=ot(W,C),L===null)throw ot(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Q,ct,st,Mt,ft,P,A,q,tt,lt,nt,At,vt,bt,kt,gt,Ct,Ft,Bt,Pt,Jt,qt,ce,k;function St(){Q=new am(L),Q.init(),qt=new q0(L,Q),ct=new em(L,Q,t,qt),st=new G0(L,Q),ct.reverseDepthBuffer&&f&&st.buffers.depth.setReversed(!0),Mt=new hm(L),ft=new R0,P=new X0(L,Q,st,ft,ct,qt,Mt),A=new im(_),q=new om(_),tt=new _f(L),ce=new Qp(L,tt),lt=new cm(L,tt,Mt,ce),nt=new fm(L,lt,tt,Mt),Bt=new um(L,ct,P),gt=new nm(ft),At=new A0(_,A,q,Q,ct,ce,gt),vt=new tg(_,ft),bt=new P0,kt=new F0(Q),Ft=new Jp(_,A,q,st,nt,p,c),Ct=new H0(_,nt,ct),k=new eg(L,Mt,ct,st),Pt=new tm(L,Q,Mt),Jt=new lm(L,Q,Mt),Mt.programs=At.programs,_.capabilities=ct,_.extensions=Q,_.properties=ft,_.renderLists=bt,_.shadowMap=Ct,_.state=st,_.info=Mt}St();const et=new J0(_,L);this.xr=et,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=Q.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Q.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(C){C!==void 0&&(F=C,this.setSize(I,z,!1))},this.getSize=function(C){return C.set(I,z)},this.setSize=function(C,W,K=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,z=W,e.width=Math.floor(C*F),e.height=Math.floor(W*F),K===!0&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(I*F,z*F).floor()},this.setDrawingBufferSize=function(C,W,K){I=C,z=W,F=K,e.width=Math.floor(C*K),e.height=Math.floor(W*K),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(V)},this.setViewport=function(C,W,K,J){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,W,K,J),st.viewport(R.copy(V).multiplyScalar(F).round())},this.getScissor=function(C){return C.copy(rt)},this.setScissor=function(C,W,K,J){C.isVector4?rt.set(C.x,C.y,C.z,C.w):rt.set(C,W,K,J),st.scissor(O.copy(rt).multiplyScalar(F).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(C){st.setScissorTest(dt=C)},this.setOpaqueSort=function(C){Y=C},this.setTransparentSort=function(C){j=C},this.getClearColor=function(C){return C.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(C=!0,W=!0,K=!0){let J=0;if(C){let X=!1;if(T!==null){const xt=T.texture.format;X=xt===ka||xt===Ba||xt===za}if(X){const xt=T.texture.type,wt=xt===zn||xt===Ai||xt===Ls||xt===as||xt===Na||xt===Fa,Lt=Ft.getClearColor(),Dt=Ft.getClearAlpha(),Ht=Lt.r,Wt=Lt.g,It=Lt.b;wt?(g[0]=Ht,g[1]=Wt,g[2]=It,g[3]=Dt,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=Ht,x[1]=Wt,x[2]=It,x[3]=Dt,L.clearBufferiv(L.COLOR,0,x))}else J|=L.COLOR_BUFFER_BIT}W&&(J|=L.DEPTH_BUFFER_BIT),K&&(J|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),bt.dispose(),kt.dispose(),ft.dispose(),A.dispose(),q.dispose(),nt.dispose(),ce.dispose(),k.dispose(),At.dispose(),et.dispose(),et.removeEventListener("sessionstart",rc),et.removeEventListener("sessionend",oc),fi.stop()};function ut(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=Mt.autoReset,W=Ct.enabled,K=Ct.autoUpdate,J=Ct.needsUpdate,X=Ct.type;St(),Mt.autoReset=C,Ct.enabled=W,Ct.autoUpdate=K,Ct.needsUpdate=J,Ct.type=X}function Et(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Gt(C){const W=C.target;W.removeEventListener("dispose",Gt),_e(W)}function _e(C){De(C),ft.remove(C)}function De(C){const W=ft.get(C).programs;W!==void 0&&(W.forEach(function(K){At.releaseProgram(K)}),C.isShaderMaterial&&At.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,K,J,X,xt){W===null&&(W=at);const wt=X.isMesh&&X.matrixWorld.determinant()<0,Lt=Qh(C,W,K,J,X);st.setMaterial(J,wt);let Dt=K.index,Ht=1;if(J.wireframe===!0){if(Dt=lt.getWireframeAttribute(K),Dt===void 0)return;Ht=2}const Wt=K.drawRange,It=K.attributes.position;let te=Wt.start*Ht,le=(Wt.start+Wt.count)*Ht;xt!==null&&(te=Math.max(te,xt.start*Ht),le=Math.min(le,(xt.start+xt.count)*Ht)),Dt!==null?(te=Math.max(te,0),le=Math.min(le,Dt.count)):It!=null&&(te=Math.max(te,0),le=Math.min(le,It.count));const ue=le-te;if(ue<0||ue===1/0)return;ce.setup(X,J,Lt,K,Dt);let ke,ee=Pt;if(Dt!==null&&(ke=tt.get(Dt),ee=Jt,ee.setIndex(ke)),X.isMesh)J.wireframe===!0?(st.setLineWidth(J.wireframeLinewidth*$()),ee.setMode(L.LINES)):ee.setMode(L.TRIANGLES);else if(X.isLine){let Ut=J.linewidth;Ut===void 0&&(Ut=1),st.setLineWidth(Ut*$()),X.isLineSegments?ee.setMode(L.LINES):X.isLineLoop?ee.setMode(L.LINE_LOOP):ee.setMode(L.LINE_STRIP)}else X.isPoints?ee.setMode(L.POINTS):X.isSprite&&ee.setMode(L.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ee.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ee.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ut=X._multiDrawStarts,Tn=X._multiDrawCounts,ne=X._multiDrawCount,an=Dt?tt.get(Dt).bytesPerElement:1,Di=ft.get(J).currentProgram.getUniforms();for(let Ye=0;Ye<ne;Ye++)Di.setValue(L,"_gl_DrawID",Ye),ee.render(Ut[Ye]/an,Tn[Ye])}else if(X.isInstancedMesh)ee.renderInstances(te,ue,X.count);else if(K.isInstancedBufferGeometry){const Ut=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Tn=Math.min(K.instanceCount,Ut);ee.renderInstances(te,ue,Tn)}else ee.render(te,ue)};function se(C,W,K){C.transparent===!0&&C.side===pe&&C.forceSinglePass===!1?(C.side=ze,C.needsUpdate=!0,qs(C,W,K),C.side=ci,C.needsUpdate=!0,qs(C,W,K),C.side=pe):qs(C,W,K)}this.compile=function(C,W,K=null){K===null&&(K=C),d=kt.get(K),d.init(W),v.push(d),K.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),C!==K&&C.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),d.setupLights();const J=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const xt=X.material;if(xt)if(Array.isArray(xt))for(let wt=0;wt<xt.length;wt++){const Lt=xt[wt];se(Lt,K,X),J.add(Lt)}else se(xt,K,X),J.add(xt)}),v.pop(),d=null,J},this.compileAsync=function(C,W,K=null){const J=this.compile(C,W,K);return new Promise(X=>{function xt(){if(J.forEach(function(wt){ft.get(wt).currentProgram.isReady()&&J.delete(wt)}),J.size===0){X(C);return}setTimeout(xt,10)}Q.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let on=null;function wn(C){on&&on(C)}function rc(){fi.stop()}function oc(){fi.start()}const fi=new fh;fi.setAnimationLoop(wn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(C){on=C,et.setAnimationLoop(C),C===null?fi.stop():fi.start()},et.addEventListener("sessionstart",rc),et.addEventListener("sessionend",oc),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(W),W=et.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,W,T),d=kt.get(C,v.length),d.init(W),v.push(d),mt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),H.setFromProjectionMatrix(mt),ht=this.localClippingEnabled,Z=gt.init(this.clippingPlanes,ht),m=bt.get(C,M.length),m.init(),M.push(m),et.enabled===!0&&et.isPresenting===!0){const xt=_.xr.getDepthSensingMesh();xt!==null&&Yr(xt,W,-1/0,_.sortObjects)}Yr(C,W,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Y,j),G=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,G&&Ft.addToRenderList(m,C),this.info.render.frame++,Z===!0&&gt.beginShadows();const K=d.state.shadowsArray;Ct.render(K,C,W),Z===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,X=m.transmissive;if(d.setupLights(),W.isArrayCamera){const xt=W.cameras;if(X.length>0)for(let wt=0,Lt=xt.length;wt<Lt;wt++){const Dt=xt[wt];cc(J,X,C,Dt)}G&&Ft.render(C);for(let wt=0,Lt=xt.length;wt<Lt;wt++){const Dt=xt[wt];ac(m,C,Dt,Dt.viewport)}}else X.length>0&&cc(J,X,C,W),G&&Ft.render(C),ac(m,C,W);T!==null&&(P.updateMultisampleRenderTarget(T),P.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(_,C,W),ce.resetDefaultState(),E=-1,y=null,v.pop(),v.length>0?(d=v[v.length-1],Z===!0&&gt.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Yr(C,W,K,J){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||H.intersectsSprite(C)){J&&_t.setFromMatrixPosition(C.matrixWorld).applyMatrix4(mt);const wt=nt.update(C),Lt=C.material;Lt.visible&&m.push(C,wt,Lt,K,_t.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||H.intersectsObject(C))){const wt=nt.update(C),Lt=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),_t.copy(C.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),_t.copy(wt.boundingSphere.center)),_t.applyMatrix4(C.matrixWorld).applyMatrix4(mt)),Array.isArray(Lt)){const Dt=wt.groups;for(let Ht=0,Wt=Dt.length;Ht<Wt;Ht++){const It=Dt[Ht],te=Lt[It.materialIndex];te&&te.visible&&m.push(C,wt,te,K,_t.z,It)}}else Lt.visible&&m.push(C,wt,Lt,K,_t.z,null)}}const xt=C.children;for(let wt=0,Lt=xt.length;wt<Lt;wt++)Yr(xt[wt],W,K,J)}function ac(C,W,K,J){const X=C.opaque,xt=C.transmissive,wt=C.transparent;d.setupLightsView(K),Z===!0&&gt.setGlobalState(_.clippingPlanes,K),J&&st.viewport(R.copy(J)),X.length>0&&Xs(X,W,K),xt.length>0&&Xs(xt,W,K),wt.length>0&&Xs(wt,W,K),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function cc(C,W,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[J.id]===void 0&&(d.state.transmissionRenderTarget[J.id]=new hi(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Bs:zn,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const xt=d.state.transmissionRenderTarget[J.id],wt=J.viewport||R;xt.setSize(wt.z,wt.w);const Lt=_.getRenderTarget();_.setRenderTarget(xt),_.getClearColor(B),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear(),G&&Ft.render(K);const Dt=_.toneMapping;_.toneMapping=ri;const Ht=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),d.setupLightsView(J),Z===!0&&gt.setGlobalState(_.clippingPlanes,J),Xs(C,K,J),P.updateMultisampleRenderTarget(xt),P.updateRenderTargetMipmap(xt),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let It=0,te=W.length;It<te;It++){const le=W[It],ue=le.object,ke=le.geometry,ee=le.material,Ut=le.group;if(ee.side===pe&&ue.layers.test(J.layers)){const Tn=ee.side;ee.side=ze,ee.needsUpdate=!0,lc(ue,K,J,ke,ee,Ut),ee.side=Tn,ee.needsUpdate=!0,Wt=!0}}Wt===!0&&(P.updateMultisampleRenderTarget(xt),P.updateRenderTargetMipmap(xt))}_.setRenderTarget(Lt),_.setClearColor(B,D),Ht!==void 0&&(J.viewport=Ht),_.toneMapping=Dt}function Xs(C,W,K){const J=W.isScene===!0?W.overrideMaterial:null;for(let X=0,xt=C.length;X<xt;X++){const wt=C[X],Lt=wt.object,Dt=wt.geometry,Ht=J===null?wt.material:J,Wt=wt.group;Lt.layers.test(K.layers)&&lc(Lt,W,K,Dt,Ht,Wt)}}function lc(C,W,K,J,X,xt){C.onBeforeRender(_,W,K,J,X,xt),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(_,W,K,J,C,xt),X.transparent===!0&&X.side===pe&&X.forceSinglePass===!1?(X.side=ze,X.needsUpdate=!0,_.renderBufferDirect(K,W,J,X,C,xt),X.side=ci,X.needsUpdate=!0,_.renderBufferDirect(K,W,J,X,C,xt),X.side=pe):_.renderBufferDirect(K,W,J,X,C,xt),C.onAfterRender(_,W,K,J,X,xt)}function qs(C,W,K){W.isScene!==!0&&(W=at);const J=ft.get(C),X=d.state.lights,xt=d.state.shadowsArray,wt=X.state.version,Lt=At.getParameters(C,X.state,xt,W,K),Dt=At.getProgramCacheKey(Lt);let Ht=J.programs;J.environment=C.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(C.isMeshStandardMaterial?q:A).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Ht===void 0&&(C.addEventListener("dispose",Gt),Ht=new Map,J.programs=Ht);let Wt=Ht.get(Dt);if(Wt!==void 0){if(J.currentProgram===Wt&&J.lightsStateVersion===wt)return uc(C,Lt),Wt}else Lt.uniforms=At.getUniforms(C),C.onBeforeCompile(Lt,_),Wt=At.acquireProgram(Lt,Dt),Ht.set(Dt,Wt),J.uniforms=Lt.uniforms;const It=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(It.clippingPlanes=gt.uniform),uc(C,Lt),J.needsLights=eu(C),J.lightsStateVersion=wt,J.needsLights&&(It.ambientLightColor.value=X.state.ambient,It.lightProbe.value=X.state.probe,It.directionalLights.value=X.state.directional,It.directionalLightShadows.value=X.state.directionalShadow,It.spotLights.value=X.state.spot,It.spotLightShadows.value=X.state.spotShadow,It.rectAreaLights.value=X.state.rectArea,It.ltc_1.value=X.state.rectAreaLTC1,It.ltc_2.value=X.state.rectAreaLTC2,It.pointLights.value=X.state.point,It.pointLightShadows.value=X.state.pointShadow,It.hemisphereLights.value=X.state.hemi,It.directionalShadowMap.value=X.state.directionalShadowMap,It.directionalShadowMatrix.value=X.state.directionalShadowMatrix,It.spotShadowMap.value=X.state.spotShadowMap,It.spotLightMatrix.value=X.state.spotLightMatrix,It.spotLightMap.value=X.state.spotLightMap,It.pointShadowMap.value=X.state.pointShadowMap,It.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=Wt,J.uniformsList=null,Wt}function hc(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Lr.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function uc(C,W){const K=ft.get(C);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function Qh(C,W,K,J,X){W.isScene!==!0&&(W=at),P.resetTextureUnits();const xt=W.fog,wt=J.isMeshStandardMaterial?W.environment:null,Lt=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:fs,Dt=(J.isMeshStandardMaterial?q:A).get(J.envMap||wt),Ht=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Wt=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),It=!!K.morphAttributes.position,te=!!K.morphAttributes.normal,le=!!K.morphAttributes.color;let ue=ri;J.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ue=_.toneMapping);const ke=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ee=ke!==void 0?ke.length:0,Ut=ft.get(J),Tn=d.state.lights;if(Z===!0&&(ht===!0||C!==y)){const en=C===y&&J.id===E;gt.setState(J,C,en)}let ne=!1;J.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Tn.state.version||Ut.outputColorSpace!==Lt||X.isBatchedMesh&&Ut.batching===!1||!X.isBatchedMesh&&Ut.batching===!0||X.isBatchedMesh&&Ut.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ut.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ut.instancing===!1||!X.isInstancedMesh&&Ut.instancing===!0||X.isSkinnedMesh&&Ut.skinning===!1||!X.isSkinnedMesh&&Ut.skinning===!0||X.isInstancedMesh&&Ut.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ut.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ut.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ut.instancingMorph===!1&&X.morphTexture!==null||Ut.envMap!==Dt||J.fog===!0&&Ut.fog!==xt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==gt.numPlanes||Ut.numIntersection!==gt.numIntersection)||Ut.vertexAlphas!==Ht||Ut.vertexTangents!==Wt||Ut.morphTargets!==It||Ut.morphNormals!==te||Ut.morphColors!==le||Ut.toneMapping!==ue||Ut.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,Ut.__version=J.version);let an=Ut.currentProgram;ne===!0&&(an=qs(J,W,X));let Di=!1,Ye=!1,_s=!1;const fe=an.getUniforms(),gn=Ut.uniforms;if(st.useProgram(an.program)&&(Di=!0,Ye=!0,_s=!0),J.id!==E&&(E=J.id,Ye=!0),Di||y!==C){st.buffers.depth.getReversed()?(it.copy(C.projectionMatrix),qu(it),Yu(it),fe.setValue(L,"projectionMatrix",it)):fe.setValue(L,"projectionMatrix",C.projectionMatrix),fe.setValue(L,"viewMatrix",C.matrixWorldInverse);const Hn=fe.map.cameraPosition;Hn!==void 0&&Hn.setValue(L,Rt.setFromMatrixPosition(C.matrixWorld)),ct.logarithmicDepthBuffer&&fe.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&fe.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,Ye=!0,_s=!0)}if(X.isSkinnedMesh){fe.setOptional(L,X,"bindMatrix"),fe.setOptional(L,X,"bindMatrixInverse");const en=X.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),fe.setValue(L,"boneTexture",en.boneTexture,P))}X.isBatchedMesh&&(fe.setOptional(L,X,"batchingTexture"),fe.setValue(L,"batchingTexture",X._matricesTexture,P),fe.setOptional(L,X,"batchingIdTexture"),fe.setValue(L,"batchingIdTexture",X._indirectTexture,P),fe.setOptional(L,X,"batchingColorTexture"),X._colorsTexture!==null&&fe.setValue(L,"batchingColorTexture",X._colorsTexture,P));const xs=K.morphAttributes;if((xs.position!==void 0||xs.normal!==void 0||xs.color!==void 0)&&Bt.update(X,K,an),(Ye||Ut.receiveShadow!==X.receiveShadow)&&(Ut.receiveShadow=X.receiveShadow,fe.setValue(L,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(gn.envMap.value=Dt,gn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(gn.envMapIntensity.value=W.environmentIntensity),Ye&&(fe.setValue(L,"toneMappingExposure",_.toneMappingExposure),Ut.needsLights&&tu(gn,_s),xt&&J.fog===!0&&vt.refreshFogUniforms(gn,xt),vt.refreshMaterialUniforms(gn,J,F,z,d.state.transmissionRenderTarget[C.id]),Lr.upload(L,hc(Ut),gn,P)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Lr.upload(L,hc(Ut),gn,P),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&fe.setValue(L,"center",X.center),fe.setValue(L,"modelViewMatrix",X.modelViewMatrix),fe.setValue(L,"normalMatrix",X.normalMatrix),fe.setValue(L,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const en=J.uniformsGroups;for(let Hn=0,Vn=en.length;Hn<Vn;Hn++){const fc=en[Hn];k.update(fc,an),k.bind(fc,an)}}return an}function tu(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function eu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,W,K){ft.get(C.texture).__webglTexture=W,ft.get(C.depthTexture).__webglTexture=K;const J=ft.get(C);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const K=ft.get(C);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,K=0){T=C,S=W,w=K;let J=!0,X=null,xt=!1,wt=!1;if(C){const Dt=ft.get(C);if(Dt.__useDefaultFramebuffer!==void 0)st.bindFramebuffer(L.FRAMEBUFFER,null),J=!1;else if(Dt.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(Dt.__hasExternalTextures)P.rebindTextures(C,ft.get(C.texture).__webglTexture,ft.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const It=C.depthTexture;if(Dt.__boundDepthTexture!==It){if(It!==null&&ft.has(It)&&(C.width!==It.image.width||C.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}const Ht=C.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(wt=!0);const Wt=ft.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Wt[W])?X=Wt[W][K]:X=Wt[W],xt=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?X=ft.get(C).__webglMultisampledFramebuffer:Array.isArray(Wt)?X=Wt[K]:X=Wt,R.copy(C.viewport),O.copy(C.scissor),U=C.scissorTest}else R.copy(V).multiplyScalar(F).floor(),O.copy(rt).multiplyScalar(F).floor(),U=dt;if(st.bindFramebuffer(L.FRAMEBUFFER,X)&&J&&st.drawBuffers(C,X),st.viewport(R),st.scissor(O),st.setScissorTest(U),xt){const Dt=ft.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+W,Dt.__webglTexture,K)}else if(wt){const Dt=ft.get(C.texture),Ht=W||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Dt.__webglTexture,K||0,Ht)}E=-1},this.readRenderTargetPixels=function(C,W,K,J,X,xt,wt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=ft.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt){st.bindFramebuffer(L.FRAMEBUFFER,Lt);try{const Dt=C.texture,Ht=Dt.format,Wt=Dt.type;if(!ct.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-J&&K>=0&&K<=C.height-X&&L.readPixels(W,K,J,X,qt.convert(Ht),qt.convert(Wt),xt)}finally{const Dt=T!==null?ft.get(T).__webglFramebuffer:null;st.bindFramebuffer(L.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(C,W,K,J,X,xt,wt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=ft.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt){const Dt=C.texture,Ht=Dt.format,Wt=Dt.type;if(!ct.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-J&&K>=0&&K<=C.height-X){st.bindFramebuffer(L.FRAMEBUFFER,Lt);const It=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,It),L.bufferData(L.PIXEL_PACK_BUFFER,xt.byteLength,L.STREAM_READ),L.readPixels(W,K,J,X,qt.convert(Ht),qt.convert(Wt),0);const te=T!==null?ft.get(T).__webglFramebuffer:null;st.bindFramebuffer(L.FRAMEBUFFER,te);const le=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Xu(L,le,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,It),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,xt),L.deleteBuffer(It),L.deleteSync(le),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,W=null,K=0){C.isTexture!==!0&&(Ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const J=Math.pow(2,-K),X=Math.floor(C.image.width*J),xt=Math.floor(C.image.height*J),wt=W!==null?W.x:0,Lt=W!==null?W.y:0;P.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,wt,Lt,X,xt),st.unbindTexture()},this.copyTextureToTexture=function(C,W,K=null,J=null,X=0){C.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,C=arguments[1],W=arguments[2],X=arguments[3]||0,K=null);let xt,wt,Lt,Dt,Ht,Wt,It,te,le;const ue=C.isCompressedTexture?C.mipmaps[X]:C.image;K!==null?(xt=K.max.x-K.min.x,wt=K.max.y-K.min.y,Lt=K.isBox3?K.max.z-K.min.z:1,Dt=K.min.x,Ht=K.min.y,Wt=K.isBox3?K.min.z:0):(xt=ue.width,wt=ue.height,Lt=ue.depth||1,Dt=0,Ht=0,Wt=0),J!==null?(It=J.x,te=J.y,le=J.z):(It=0,te=0,le=0);const ke=qt.convert(W.format),ee=qt.convert(W.type);let Ut;W.isData3DTexture?(P.setTexture3D(W,0),Ut=L.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(P.setTexture2DArray(W,0),Ut=L.TEXTURE_2D_ARRAY):(P.setTexture2D(W,0),Ut=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,W.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,W.unpackAlignment);const Tn=L.getParameter(L.UNPACK_ROW_LENGTH),ne=L.getParameter(L.UNPACK_IMAGE_HEIGHT),an=L.getParameter(L.UNPACK_SKIP_PIXELS),Di=L.getParameter(L.UNPACK_SKIP_ROWS),Ye=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ue.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ue.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Dt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ht),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Wt);const _s=C.isDataArrayTexture||C.isData3DTexture,fe=W.isDataArrayTexture||W.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const gn=ft.get(C),xs=ft.get(W),en=ft.get(gn.__renderTarget),Hn=ft.get(xs.__renderTarget);st.bindFramebuffer(L.READ_FRAMEBUFFER,en.__webglFramebuffer),st.bindFramebuffer(L.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let Vn=0;Vn<Lt;Vn++)_s&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ft.get(C).__webglTexture,X,Wt+Vn),C.isDepthTexture?(fe&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ft.get(W).__webglTexture,X,le+Vn),L.blitFramebuffer(Dt,Ht,xt,wt,It,te,xt,wt,L.DEPTH_BUFFER_BIT,L.NEAREST)):fe?L.copyTexSubImage3D(Ut,X,It,te,le+Vn,Dt,Ht,xt,wt):L.copyTexSubImage2D(Ut,X,It,te,le+Vn,Dt,Ht,xt,wt);st.bindFramebuffer(L.READ_FRAMEBUFFER,null),st.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else fe?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(Ut,X,It,te,le,xt,wt,Lt,ke,ee,ue.data):W.isCompressedArrayTexture?L.compressedTexSubImage3D(Ut,X,It,te,le,xt,wt,Lt,ke,ue.data):L.texSubImage3D(Ut,X,It,te,le,xt,wt,Lt,ke,ee,ue):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,X,It,te,xt,wt,ke,ee,ue.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,X,It,te,ue.width,ue.height,ke,ue.data):L.texSubImage2D(L.TEXTURE_2D,X,It,te,xt,wt,ke,ee,ue);L.pixelStorei(L.UNPACK_ROW_LENGTH,Tn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ne),L.pixelStorei(L.UNPACK_SKIP_PIXELS,an),L.pixelStorei(L.UNPACK_SKIP_ROWS,Di),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ye),X===0&&W.generateMipmaps&&L.generateMipmap(Ut),st.unbindTexture()},this.copyTextureToTexture3D=function(C,W,K=null,J=null,X=0){return C.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,J=arguments[1]||null,C=arguments[2],W=arguments[3],X=arguments[4]||0),Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,W,K,J,X)},this.initRenderTarget=function(C){ft.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),st.unbindTexture()},this.resetState=function(){S=0,w=0,T=null,st.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class Xa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Nt(t),this.density=e}clone(){return new Xa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qa extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ya extends Pe{constructor(t=null,e=1,n=1,s,r,o,a,c,l=tn,h=tn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl extends xe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Yi=new jt,ul=new jt,pr=[],fl=new Li,ig=new jt,Es=new $t,ws=new ps;class ui extends $t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ig)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),fl.copy(t.boundingBox).applyMatrix4(Yi),this.boundingBox.union(fl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ps),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),ws.copy(t.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(ws)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ws.copy(this.boundingSphere),ws.applyMatrix4(n),t.ray.intersectsSphere(ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Yi),ul.multiplyMatrices(n,Yi),Es.matrixWorld=ul,Es.raycast(t,pr);for(let o=0,a=pr.length;o<a;o++){const c=pr[o];c.instanceId=r,c.object=this,e.push(c)}pr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new hl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ya(new Float32Array(s*this.count),s,this.count,Oa,Mn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class $a extends ms{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const dl=new jt,ya=new Ha,mr=new ps,gr=new N;class xh extends we{constructor(t=new Kt,e=new $a){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(s),mr.radius+=r,t.ray.intersectsSphere(mr)===!1)return;dl.copy(s).invert(),ya.copy(t.ray).applyMatrix4(dl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,x=p;g<x;g++){const m=l.getX(g);gr.fromBufferAttribute(u,m),pl(gr,m,c,s,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,x=p;g<x;g++)gr.fromBufferAttribute(u,g),pl(gr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function pl(i,t,e,n,s,r,o){const a=ya.distanceSqToPoint(i);if(a<e){const c=new N;ya.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class bn extends Pe{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new pt:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,s=[],r=[],o=[],a=new N,c=new jt;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Te(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Te(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ja extends En{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new pt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class sg extends ja{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Za(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const _r=new N,Eo=new Za,wo=new Za,To=new Za;class rg extends En{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(_r.subVectors(s[0],s[1]).add(s[0]),l=_r);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(_r.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_r),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Eo.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,x,m),wo.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,x,m),To.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Eo.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),wo.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),To.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Eo.calc(c),wo.calc(c),To.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ml(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function og(i,t){const e=1-i;return e*e*t}function ag(i,t){return 2*(1-i)*i*t}function cg(i,t){return i*i*t}function Rs(i,t,e,n){return og(i,t)+ag(i,e)+cg(i,n)}function lg(i,t){const e=1-i;return e*e*e*t}function hg(i,t){const e=1-i;return 3*e*e*i*t}function ug(i,t){return 3*(1-i)*i*i*t}function fg(i,t){return i*i*i*t}function Cs(i,t,e,n,s){return lg(i,t)+hg(i,e)+ug(i,n)+fg(i,s)}class vh extends En{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cs(t,s.x,r.x,o.x,a.x),Cs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class dg extends En{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cs(t,s.x,r.x,o.x,a.x),Cs(t,s.y,r.y,o.y,a.y),Cs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Mh extends En{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pg extends En{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yh extends En{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Rs(t,s.x,r.x,o.x),Rs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mg extends En{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Rs(t,s.x,r.x,o.x),Rs(t,s.y,r.y,o.y),Rs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sh extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(ml(a,c.x,l.x,h.x,u.x),ml(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var Sa=Object.freeze({__proto__:null,ArcCurve:sg,CatmullRomCurve3:rg,CubicBezierCurve:vh,CubicBezierCurve3:dg,EllipseCurve:ja,LineCurve:Mh,LineCurve3:pg,QuadraticBezierCurve:yh,QuadraticBezierCurve3:mg,SplineCurve:Sh});class gg extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Sa[s.type]().fromJSON(s))}return this}}class gl extends gg{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Mh(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new yh(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new vh(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Sh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new ja(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ka extends Kt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new N,h=new pt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ot(o,3)),this.setAttribute("normal",new Ot(a,3)),this.setAttribute("uv",new Ot(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ka(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Fe extends Kt{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const x=[],m=n/2;let d=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ot(u,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(p,2));function M(){const _=new N,b=new N;let S=0;const w=(e-t)/n;for(let T=0;T<=r;T++){const E=[],y=T/r,R=y*(e-t)+t;for(let O=0;O<=s;O++){const U=O/s,B=U*c+a,D=Math.sin(B),I=Math.cos(B);b.x=R*D,b.y=-y*n+m,b.z=R*I,u.push(b.x,b.y,b.z),_.set(D,w,I).normalize(),f.push(_.x,_.y,_.z),p.push(U,1-y),E.push(g++)}x.push(E)}for(let T=0;T<s;T++)for(let E=0;E<r;E++){const y=x[E][T],R=x[E+1][T],O=x[E+1][T+1],U=x[E][T+1];(t>0||E!==0)&&(h.push(y,R,U),S+=3),(e>0||E!==r-1)&&(h.push(R,O,U),S+=3)}l.addGroup(d,S,0),d+=S}function v(_){const b=g,S=new pt,w=new N;let T=0;const E=_===!0?t:e,y=_===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;const R=g;for(let O=0;O<=s;O++){const B=O/s*c+a,D=Math.cos(B),I=Math.sin(B);w.x=E*I,w.y=m*y,w.z=E*D,u.push(w.x,w.y,w.z),f.push(0,y,0),S.x=D*.5+.5,S.y=I*.5*y+.5,p.push(S.x,S.y),g++}for(let O=0;O<s;O++){const U=b+O,B=R+O;_===!0?h.push(B,B+1,U):h.push(B+1,B,U),T+=3}l.addGroup(d,T,_===!0?1:2),d+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Is extends Fe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Is(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ja extends Kt{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Ot(r,3)),this.setAttribute("normal",new Ot(r.slice(),3)),this.setAttribute("uv",new Ot(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new N,_=new N,b=new N;for(let S=0;S<e.length;S+=3)p(e[S+0],v),p(e[S+1],_),p(e[S+2],b),c(v,_,b,M)}function c(M,v,_,b){const S=b+1,w=[];for(let T=0;T<=S;T++){w[T]=[];const E=M.clone().lerp(_,T/S),y=v.clone().lerp(_,T/S),R=S-T;for(let O=0;O<=R;O++)O===0&&T===S?w[T][O]=E:w[T][O]=E.clone().lerp(y,O/R)}for(let T=0;T<S;T++)for(let E=0;E<2*(S-T)-1;E++){const y=Math.floor(E/2);E%2===0?(f(w[T][y+1]),f(w[T+1][y]),f(w[T][y])):(f(w[T][y+1]),f(w[T+1][y+1]),f(w[T+1][y]))}}function l(M){const v=new N;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(M),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){const M=new N;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const _=m(M)/2/Math.PI+.5,b=d(M)/Math.PI+.5;o.push(_,1-b)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){const v=o[M+0],_=o[M+2],b=o[M+4],S=Math.max(v,_,b),w=Math.min(v,_,b);S>.9&&w<.1&&(v<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function p(M,v){const _=M*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function g(){const M=new N,v=new N,_=new N,b=new N,S=new pt,w=new pt,T=new pt;for(let E=0,y=0;E<r.length;E+=9,y+=6){M.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),S.set(o[y+0],o[y+1]),w.set(o[y+2],o[y+3]),T.set(o[y+4],o[y+5]),b.copy(M).add(v).add(_).divideScalar(3);const R=m(b);x(S,y+0,M,R),x(w,y+2,v,R),x(T,y+4,_,R)}}function x(M,v,_,b){b<0&&M.x===1&&(o[v]=M.x-1),_.x===0&&_.z===0&&(o[v]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ja(t.vertices,t.indices,t.radius,t.details)}}class oi extends gl{constructor(t){super(t),this.uuid=ds(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new gl().fromJSON(s))}return this}}const _g={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=bh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,p;if(n&&(r=Sg(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return Us(r,o,e,a,c,p,0),o}};function bh(i,t,e,n,s){let r,o;if(s===Ig(i,t,e,n)>0)for(r=t;r<e;r+=n)o=_l(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=_l(r,i[r],i[r+1],o);return o&&Vr(o,o.next)&&(Fs(o),o=o.next),o}function Ri(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Vr(e,e.next)||ge(e.prev,e,e.next)===0)){if(Fs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Us(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Ag(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?vg(i,n,s,r):xg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Fs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Mg(Ri(i),t,e),Us(i,t,e,n,s,r,2)):o===2&&yg(i,t,e,n,s,r):Us(Ri(i),t,e,n,s,r,1);break}}}function xg(i){const t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&ts(s,a,r,c,o,l,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vg(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ge(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,d=ba(p,g,t,e,n),M=ba(x,m,t,e,n);let v=i.prevZ,_=i.nextZ;for(;v&&v.z>=d&&_&&_.z<=M;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ts(a,h,c,u,l,f,v.x,v.y)&&ge(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ts(a,h,c,u,l,f,_.x,_.y)&&ge(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=d;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ts(a,h,c,u,l,f,v.x,v.y)&&ge(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=M;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ts(a,h,c,u,l,f,_.x,_.y)&&ge(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Mg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Vr(s,r)&&Eh(s,n,n.next,r)&&Ns(s,r)&&Ns(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Fs(n),Fs(n.next),n=i=r),n=n.next}while(n!==i);return Ri(n)}function yg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Pg(o,a)){let c=wh(o,a);o=Ri(o,o.next),c=Ri(c,c.next),Us(o,t,e,n,s,r,0),Us(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Sg(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=bh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Cg(l));for(s.sort(bg),r=0;r<s.length;r++)e=Eg(s[r],e);return e}function bg(i,t){return i.x-t.x}function Eg(i,t){const e=wg(i,t);if(!e)return t;const n=wh(e,i);return Ri(n,n.next),Ri(e,e.next)}function wg(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ts(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ns(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Tg(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Tg(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function Ag(i,t,e,n){let s=i;do s.z===0&&(s.z=ba(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Rg(s)}function Rg(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function ba(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Cg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ts(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Pg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Lg(i,t)&&(Ns(i,t)&&Ns(t,i)&&Dg(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||Vr(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Vr(i,t){return i.x===t.x&&i.y===t.y}function Eh(i,t,e,n){const s=vr(ge(i,t,e)),r=vr(ge(i,t,n)),o=vr(ge(e,n,i)),a=vr(ge(e,n,t));return!!(s!==r&&o!==a||s===0&&xr(i,e,t)||r===0&&xr(i,n,t)||o===0&&xr(e,i,n)||a===0&&xr(e,t,n))}function xr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function vr(i){return i>0?1:i<0?-1:0}function Lg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Eh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ns(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function Dg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function wh(i,t){const e=new Ea(i.i,i.x,i.y),n=new Ea(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function _l(i,t,e,n){const s=new Ea(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ea(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ig(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class yn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return yn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];xl(t),vl(n,t);let o=t.length;e.forEach(xl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,vl(n,e[c]);const a=_g.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function xl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function vl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class On extends Kt{constructor(t=new oi([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Ot(s,3)),this.setAttribute("uv",new Ot(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Ug;let v,_=!1,b,S,w,T;d&&(v=d.getSpacedPoints(h),_=!0,f=!1,b=d.computeFrenetFrames(h,!1),S=new N,w=new N,T=new N),f||(m=0,p=0,g=0,x=0);const E=a.extractPoints(l);let y=E.shape;const R=E.holes;if(!yn.isClockWise(y)){y=y.reverse();for(let G=0,$=R.length;G<$;G++){const L=R[G];yn.isClockWise(L)&&(R[G]=L.reverse())}}const U=yn.triangulateShape(y,R),B=y;for(let G=0,$=R.length;G<$;G++){const L=R[G];y=y.concat(L)}function D(G,$,L){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector($,L)}const I=y.length,z=U.length;function F(G,$,L){let ot,Q,ct;const st=G.x-$.x,Mt=G.y-$.y,ft=L.x-G.x,P=L.y-G.y,A=st*st+Mt*Mt,q=st*P-Mt*ft;if(Math.abs(q)>Number.EPSILON){const tt=Math.sqrt(A),lt=Math.sqrt(ft*ft+P*P),nt=$.x-Mt/tt,At=$.y+st/tt,vt=L.x-P/lt,bt=L.y+ft/lt,kt=((vt-nt)*P-(bt-At)*ft)/(st*P-Mt*ft);ot=nt+st*kt-G.x,Q=At+Mt*kt-G.y;const gt=ot*ot+Q*Q;if(gt<=2)return new pt(ot,Q);ct=Math.sqrt(gt/2)}else{let tt=!1;st>Number.EPSILON?ft>Number.EPSILON&&(tt=!0):st<-Number.EPSILON?ft<-Number.EPSILON&&(tt=!0):Math.sign(Mt)===Math.sign(P)&&(tt=!0),tt?(ot=-Mt,Q=st,ct=Math.sqrt(A)):(ot=st,Q=Mt,ct=Math.sqrt(A/2))}return new pt(ot/ct,Q/ct)}const Y=[];for(let G=0,$=B.length,L=$-1,ot=G+1;G<$;G++,L++,ot++)L===$&&(L=0),ot===$&&(ot=0),Y[G]=F(B[G],B[L],B[ot]);const j=[];let V,rt=Y.concat();for(let G=0,$=R.length;G<$;G++){const L=R[G];V=[];for(let ot=0,Q=L.length,ct=Q-1,st=ot+1;ot<Q;ot++,ct++,st++)ct===Q&&(ct=0),st===Q&&(st=0),V[ot]=F(L[ot],L[ct],L[st]);j.push(V),rt=rt.concat(V)}for(let G=0;G<m;G++){const $=G/m,L=p*Math.cos($*Math.PI/2),ot=g*Math.sin($*Math.PI/2)+x;for(let Q=0,ct=B.length;Q<ct;Q++){const st=D(B[Q],Y[Q],ot);it(st.x,st.y,-L)}for(let Q=0,ct=R.length;Q<ct;Q++){const st=R[Q];V=j[Q];for(let Mt=0,ft=st.length;Mt<ft;Mt++){const P=D(st[Mt],V[Mt],ot);it(P.x,P.y,-L)}}}const dt=g+x;for(let G=0;G<I;G++){const $=f?D(y[G],rt[G],dt):y[G];_?(w.copy(b.normals[0]).multiplyScalar($.x),S.copy(b.binormals[0]).multiplyScalar($.y),T.copy(v[0]).add(w).add(S),it(T.x,T.y,T.z)):it($.x,$.y,0)}for(let G=1;G<=h;G++)for(let $=0;$<I;$++){const L=f?D(y[$],rt[$],dt):y[$];_?(w.copy(b.normals[G]).multiplyScalar(L.x),S.copy(b.binormals[G]).multiplyScalar(L.y),T.copy(v[G]).add(w).add(S),it(T.x,T.y,T.z)):it(L.x,L.y,u/h*G)}for(let G=m-1;G>=0;G--){const $=G/m,L=p*Math.cos($*Math.PI/2),ot=g*Math.sin($*Math.PI/2)+x;for(let Q=0,ct=B.length;Q<ct;Q++){const st=D(B[Q],Y[Q],ot);it(st.x,st.y,u+L)}for(let Q=0,ct=R.length;Q<ct;Q++){const st=R[Q];V=j[Q];for(let Mt=0,ft=st.length;Mt<ft;Mt++){const P=D(st[Mt],V[Mt],ot);_?it(P.x,P.y+v[h-1].y,v[h-1].x+L):it(P.x,P.y,u+L)}}}H(),Z();function H(){const G=s.length/3;if(f){let $=0,L=I*$;for(let ot=0;ot<z;ot++){const Q=U[ot];mt(Q[2]+L,Q[1]+L,Q[0]+L)}$=h+m*2,L=I*$;for(let ot=0;ot<z;ot++){const Q=U[ot];mt(Q[0]+L,Q[1]+L,Q[2]+L)}}else{for(let $=0;$<z;$++){const L=U[$];mt(L[2],L[1],L[0])}for(let $=0;$<z;$++){const L=U[$];mt(L[0]+I*h,L[1]+I*h,L[2]+I*h)}}n.addGroup(G,s.length/3-G,0)}function Z(){const G=s.length/3;let $=0;ht(B,$),$+=B.length;for(let L=0,ot=R.length;L<ot;L++){const Q=R[L];ht(Q,$),$+=Q.length}n.addGroup(G,s.length/3-G,1)}function ht(G,$){let L=G.length;for(;--L>=0;){const ot=L;let Q=L-1;Q<0&&(Q=G.length-1);for(let ct=0,st=h+m*2;ct<st;ct++){const Mt=I*ct,ft=I*(ct+1),P=$+ot+Mt,A=$+Q+Mt,q=$+Q+ft,tt=$+ot+ft;Rt(P,A,q,tt)}}}function it(G,$,L){c.push(G),c.push($),c.push(L)}function mt(G,$,L){_t(G),_t($),_t(L);const ot=s.length/3,Q=M.generateTopUV(n,s,ot-3,ot-2,ot-1);at(Q[0]),at(Q[1]),at(Q[2])}function Rt(G,$,L,ot){_t(G),_t($),_t(ot),_t($),_t(L),_t(ot);const Q=s.length/3,ct=M.generateSideWallUV(n,s,Q-6,Q-3,Q-2,Q-1);at(ct[0]),at(ct[1]),at(ct[3]),at(ct[1]),at(ct[2]),at(ct[3])}function _t(G){s.push(c[G*3+0]),s.push(c[G*3+1]),s.push(c[G*3+2])}function at(G){r.push(G.x),r.push(G.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ng(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Sa[s.type]().fromJSON(s)),new On(n,t.options)}}const Ug={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new pt(r,o),new pt(a,c),new pt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new pt(o,1-c),new pt(l,1-u),new pt(f,1-g),new pt(x,1-d)]:[new pt(a,1-c),new pt(h,1-u),new pt(p,1-g),new pt(m,1-d)]}};function Ng(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Gr extends Ja{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Gr(t.radius,t.detail)}}class Bn extends Kt{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new N,f=new N,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){const M=[],v=d/n;let _=0;d===0&&o===0?_=.5/e:d===n&&c===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){const S=b/e;u.x=-t*Math.cos(s+S*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+S*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(S+_,1-v),M.push(l++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<e;M++){const v=h[d][M+1],_=h[d][M],b=h[d+1][M],S=h[d+1][M+1];(d!==0||o>0)&&p.push(v,_,S),(d!==n-1||c<Math.PI)&&p.push(_,b,S)}this.setIndex(p),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(x,3)),this.setAttribute("uv",new Ot(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ur extends Kt{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new N,u=new N,f=new N;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const x=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,M=(s+1)*p+g;o.push(x,m,M),o.push(m,d,M)}this.setIndex(o),this.setAttribute("position",new Ot(a,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Vt extends ms{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Ml={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Fg{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Og=new Fg;class Qa{constructor(t){this.manager=t!==void 0?t:Og,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Qa.DEFAULT_MATERIAL_NAME="__DEFAULT";class zg extends Qa{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ml.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Ds("img");function c(){h(),Ml.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class wa extends Qa{constructor(t){super(t)}load(t,e,n,s){const r=new Pe,o=new zg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Th extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Bg extends Th{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ao=new jt,yl=new N,Sl=new N;class kg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Va,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yl.setFromMatrixPosition(t.matrixWorld),e.position.copy(yl),Sl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sl),e.updateMatrixWorld(),Ao.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ao),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ao)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Hg extends kg{constructor(){super(new Ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ah extends Th{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new Hg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=bl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function bl(){return performance.now()}class El{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Gg extends Pi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:La}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=La);const wl={type:"change"},tc={type:"start"},Rh={type:"end"},Mr=new Ha,Tl=new Qn,Wg=Math.cos(70*Gu.DEG2RAD),Me=new N,Ve=2*Math.PI,ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ro=1e-6;class Xg extends Gg{constructor(t,e=null){super(t,e),this.state=ae.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:Ji.ROTATE,TWO:Ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Ee,this._lastTargetPosition=new N,this._quat=new Ee().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new El,this._sphericalDelta=new El,this._scale=1,this._panOffset=new N,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new N,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Yg.bind(this),this._onPointerDown=qg.bind(this),this._onPointerUp=$g.bind(this),this._onContextMenu=e_.bind(this),this._onMouseWheel=Kg.bind(this),this._onKeyDown=Jg.bind(this),this._onTouchStart=Qg.bind(this),this._onTouchMove=t_.bind(this),this._onMouseDown=jg.bind(this),this._onMouseMove=Zg.bind(this),this._interceptControlDown=n_.bind(this),this._interceptControlUp=i_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wl),this.update(),this.state=ae.NONE}update(t=null){const e=this.object.position;Me.copy(e).sub(this.target),Me.applyQuaternion(this._quat),this._spherical.setFromVector3(Me),this.autoRotate&&this.state===ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ve:n>Math.PI&&(n-=Ve),s<-Math.PI?s+=Ve:s>Math.PI&&(s-=Ve),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Me.setFromSpherical(this._spherical),Me.applyQuaternion(this._quatInverse),e.copy(this.target).add(Me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Me.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Mr.origin.copy(this.object.position),Mr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mr.direction))<Wg?this.object.lookAt(this.target):(Tl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mr.intersectPlane(Tl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ro||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ro||this._lastTargetPosition.distanceToSquared(this.target)>Ro?(this.dispatchEvent(wl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ve/60*this.autoRotateSpeed*t:Ve/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Me.setFromMatrixColumn(e,0),Me.multiplyScalar(-t),this._panOffset.add(Me)}_panUp(t,e){this.screenSpacePanning===!0?Me.setFromMatrixColumn(e,1):(Me.setFromMatrixColumn(e,0),Me.crossVectors(this.object.up,Me)),Me.multiplyScalar(t),this._panOffset.add(Me)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Me.copy(s).sub(this.target);let r=Me.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ve*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ve*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ve*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ve*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function qg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Yg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function $g(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rh),this.state=ae.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function jg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ae.DOLLY;break;case es.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}break;case es.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(tc)}function Zg(i){switch(this.state){case ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Kg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ae.NONE||(i.preventDefault(),this.dispatchEvent(tc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Rh))}function Jg(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Qg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ji.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ae.TOUCH_ROTATE;break;case Ji.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ae.TOUCH_PAN;break;default:this.state=ae.NONE}break;case 2:switch(this.touches.TWO){case Ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ae.TOUCH_DOLLY_PAN;break;case Ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ae.TOUCH_DOLLY_ROTATE;break;default:this.state=ae.NONE}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(tc)}function t_(i){switch(this._trackPointer(i),this.state){case ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ae.NONE}}function e_(i){this.enabled!==!1&&i.preventDefault()}function n_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function i_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Wr(i){let t=i;return()=>(t=t*16807%2147483647)/2147483647}function Xr(i,t){const e=document.createElement("canvas");e.width=e.height=i;const n=e.getContext("2d");t(n,i);const s=n.getImageData(0,0,i,i).data;let r=0,o=0,a=0;for(let u=0;u<s.length;u+=4)r+=s[u],o+=s[u+1],a+=s[u+2];const c=s.length/4,l=u=>Math.pow(u/c/255,2.2),h=new bn(e);return h.wrapS=h.wrapT=li,h.colorSpace=he,h.anisotropy=8,{t:h,mean:new N(l(r),l(o),l(a))}}const s_=()=>Xr(512,(i,t)=>{const e=Wr(3);i.fillStyle="#8f887c",i.fillRect(0,0,t,t);for(let n=0;n<9e3;n++){const s=110+e()*90;i.fillStyle=`rgb(${s},${s-4},${s-12})`,i.fillRect(e()*t,e()*t,2,2)}for(let n=0;n<1100;n++){const s=e()*t,r=e()*t,o=4+e()*13,a=o*(.55+e()*.4),c=e()*Math.PI,l=120+e()*110,h=e()*18;for(const[u,f]of[[0,0],[t,0],[-t,0],[0,t],[0,-t]]){i.fillStyle="rgba(40,36,30,0.35)",i.beginPath(),i.ellipse(s+u+1.5,r+f+2,o,a,c,0,7),i.fill();const p=i.createRadialGradient(s+u-o*.3,r+f-a*.3,1,s+u,r+f,o);p.addColorStop(0,`rgb(${Math.min(255,l+30)},${Math.min(255,l+26-h/2)},${Math.min(255,l+18-h)})`),p.addColorStop(1,`rgb(${l-30},${l-34-h/2},${l-42-h})`),i.fillStyle=p,i.beginPath(),i.ellipse(s+u,r+f,o,a,c,0,7),i.fill()}}}),r_=()=>Xr(256,(i,t)=>{const e=Wr(9);i.fillStyle="#56733a",i.fillRect(0,0,t,t);for(let n=0;n<7e3;n++){const s=e()*t,r=e()*t,o=3+e()*7,a=-Math.PI/2+(e()-.5)*1.2,c=e();i.strokeStyle=`rgb(${60+c*70},${95+c*80},${35+c*40})`,i.lineWidth=1,i.beginPath(),i.moveTo(s,r),i.lineTo(s+Math.cos(a)*o,r+Math.sin(a)*o),i.stroke()}}),o_=()=>Xr(256,(i,t)=>{const e=Wr(21);i.fillStyle="#a08d6d",i.fillRect(0,0,t,t);for(let n=0;n<40;n++)i.fillStyle=`rgba(${e()<.5?"80,66,48":"190,172,138"},${.08+e()*.1})`,i.beginPath(),i.ellipse(e()*t,e()*t,10+e()*40,8+e()*25,e()*3,0,7),i.fill();for(let n=0;n<2500;n++){const s=e();i.strokeStyle=`rgba(${170+s*60},${150+s*50},${90+s*30},0.7)`;const r=e()*t,o=e()*t,a=2+e()*6,c=e()*6.28;i.beginPath(),i.moveTo(r,o),i.lineTo(r+Math.cos(c)*a,o+Math.sin(c)*a),i.stroke()}for(let n=0;n<500;n++){const s=90+e()*100;i.fillStyle=`rgb(${s},${s-6},${s-16})`,i.beginPath(),i.arc(e()*t,e()*t,.8+e()*1.8,0,7),i.fill()}}),a_=()=>Xr(512,(i,t)=>{const e=Wr(33);i.fillStyle="#6f6a62",i.fillRect(0,0,t,t);const n=8,s=t/n;for(let r=0;r<n;r++){let o=-(r%2)*40;for(;o<t;){const a=60+e()*70,c=150+e()*45;i.fillStyle=`rgb(${c},${c-4},${c-12})`,i.fillRect(o+2,r*s+2,a-4,s-4);for(let l=0;l<40;l++){const h=e()*30;i.fillStyle=`rgba(${h},${h},${h},0.08)`,i.fillRect(o+2+e()*(a-6),r*s+2+e()*(s-6),2,2)}o+=a}}for(let r=0;r<14;r++)i.fillStyle=`rgba(60,55,50,${.05+e()*.07})`,i.beginPath(),i.ellipse(e()*t,e()*t,10+e()*40,6+e()*20,e()*3,0,7),i.fill()}),Ki=new Ya(new Uint8Array(4),1,1);Ki.needsUpdate=!0;const ni={lcMap:{value:Ki},lcRect:{value:new me(0,0,1,1)},pebMap:{value:Ki},pebMean:{value:new N(1,1,1)},grsMap:{value:Ki},grsMean:{value:new N(1,1,1)},dryMap:{value:Ki},dryMean:{value:new N(1,1,1)},pavMap:{value:Ki},pavMean:{value:new N(1,1,1)}};function c_(i,t,e){const[n,s]=e;i.colorSpace=Un,i.flipY=!1,i.minFilter=dn,i.generateMipmaps=!1,i.needsUpdate=!0,ni.lcMap.value=i,ni.lcRect.value.set(t.xmin-n,s-t.ymax,t.width*t.step,t.height*t.step);for(const[r,o]of[["peb",s_],["grs",r_],["dry",o_],["pav",a_]]){const{t:a,mean:c}=o();ni[`${r}Map`].value=a,ni[`${r}Mean`].value=c}}const Ch=`
uniform sampler2D lcMap; uniform vec4 lcRect;
vec4 landcover(vec2 xz) {
  vec2 uv = (xz - lcRect.xy) / lcRect.zw;
  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return vec4(-1.0);
  return texture2D(lcMap, uv);
}`,Ph=new Ya(new Uint8Array(4),1,1);Ph.needsUpdate=!0;const Nr={map:{value:Ph},rect:{value:new me(0,0,1,0)}},l_=`
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
}`,h_=`
uniform sampler2D pebMap; uniform sampler2D grsMap; uniform sampler2D dryMap; uniform sampler2D pavMap;
float gHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float gNoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(gHash(i), gHash(i + vec2(1, 0)), f.x), mix(gHash(i + vec2(0, 1)), gHash(i + vec2(1, 1)), f.x), f.y); }
// texture ripetuta senza che si veda la ripetizione: due scale e rotazioni mescolate da un rumore
vec3 detailT(sampler2D t, vec2 p, float s) {
  vec3 a = texture2D(t, p / s).rgb;
  vec3 b = texture2D(t, mat2(0.8, -0.6, 0.6, 0.8) * p / (s * 2.3) + 0.37).rgb;
  return mix(a, b, 0.6 * smoothstep(0.3, 0.7, gNoise(p * 0.045)));
}`,u_=`
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
}`;function Lh(i,{nearNeutral:t=!1,roof:e=!1}={}){const n=new ks({map:i,side:pe});return t&&(n.polygonOffset=!0,n.polygonOffsetFactor=4,n.polygonOffsetUnits=8),n.customProgramCacheKey=()=>`ortho-${t}-${e}`,n.onBeforeCompile=s=>{s.uniforms.hrMap=Nr.map,s.uniforms.hrRect=Nr.rect,t&&Object.assign(s.uniforms,ni),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`+(e?`
attribute vec3 ruv;
varying vec3 vRuv;`:"")).replace("#include <project_vertex>",`#include <project_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`+(e?`
vRuv = ruv;`:"")),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform sampler2D hrMap;
uniform vec4 hrRect;`+(e?l_:"")+(t?Ch+h_:"")),e&&(s.fragmentShader=s.fragmentShader.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>${u_}`)),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
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
      diffuseColor.rgb *= diffuse;`)},n}function f_(i,t,e){const[n,s]=e,{width:r,height:o,step:a,xmin:c,ymax:l}=i;return function(u,f){const p=u+n,g=s-f,x=(p-c)/a,m=(l-g)/a,d=Math.max(0,Math.min(r-2,Math.floor(x))),M=Math.max(0,Math.min(o-2,Math.floor(m))),v=Math.min(1,Math.max(0,x-d)),_=Math.min(1,Math.max(0,m-M)),b=M*r+d;return t[b]*(1-v)*(1-_)+t[b+1]*v*(1-_)+t[b+r]*(1-v)*_+t[b+r+1]*v*_}}function Al(i,t,e,n,s,r=0,o=null){const[a,c]=n,l=o?Math.max(i.xmin,o.xmin):i.xmin,h=o?Math.min(i.xmax,o.xmax):i.xmax,u=o?Math.max(i.ymin,o.ymin):i.ymin,f=o?Math.min(i.ymax,o.ymax):i.ymax;if(h<=l||f<=u)return null;const p=Math.max(2,Math.round((h-l)/t)+1),g=Math.max(2,Math.round((f-u)/t)+1),x=new Float32Array(p*g*3),m=new Float32Array(p*g*2);for(let _=0;_<g;_++){const b=u+(f-u)*_/(g-1);for(let S=0;S<p;S++){const w=l+(h-l)*S/(p-1),T=w-a,E=c-b,y=_*p+S;x[y*3]=T,x[y*3+1]=e(T,E)-r,x[y*3+2]=E,m[y*2]=(w-i.xmin)/(i.xmax-i.xmin),m[y*2+1]=(b-i.ymin)/(i.ymax-i.ymin)}}const d=[];for(let _=0;_<g-1;_++)for(let b=0;b<p-1;b++){const S=_*p+b,w=S+1,T=S+p,E=T+1;d.push(S,w,T,w,E,T)}const M=new Kt;M.setAttribute("position",new xe(x,3)),M.setAttribute("uv",new xe(m,2)),M.setIndex(d);const v=new $t(M,Lh(s,{nearNeutral:!0}));return v.receiveShadow=!0,v}function d_({orthoMeta:i,textures:t,heightAt:e,origin:n,bounds:s}){const r=new Ce;r.name="terrain";for(const o of i.tiles){const a=t.get(o.file);if(!a)continue;const c=o.level==="base"?Al(o,12,e,n,a,.6,s):Al(o,6,e,n,a,0,s);c&&r.add(c)}return r}const p_=38.056,m_=14.588,Xe=Math.PI/180,Fr=Xe*23.4397,g_=i=>i.valueOf()/864e5-.5+2440588-2451545,Rl=(i,t)=>Math.atan2(Math.sin(i)*Math.cos(Fr)-Math.tan(t)*Math.sin(Fr),Math.cos(i)),Cl=(i,t)=>Math.asin(Math.sin(t)*Math.cos(Fr)+Math.cos(t)*Math.sin(Fr)*Math.sin(i));function Pl(i,t,e){const n=Xe*(280.16+360.9856235*i)+Xe*m_-t,s=Xe*p_,r=Math.asin(Math.sin(s)*Math.sin(e)+Math.cos(s)*Math.cos(e)*Math.cos(n)),o=Math.atan2(Math.sin(n),Math.cos(n)*Math.sin(s)-Math.tan(e)*Math.cos(s));return{alt:r,az:o,dir:new N(-Math.sin(o)*Math.cos(r),Math.sin(r),Math.cos(o)*Math.cos(r))}}function __(i){const t=g_(i),e=Xe*(357.5291+.98560028*t),n=e+Xe*(1.9148*Math.sin(e)+.02*Math.sin(2*e)+3e-4*Math.sin(3*e))+Xe*102.9372+Math.PI,s=Pl(t,Rl(n,0),Cl(n,0)),r=Xe*(218.316+13.176396*t),o=Xe*(134.963+13.064993*t),a=Xe*(93.272+13.22935*t),c=r+Xe*6.289*Math.sin(o),l=Xe*5.128*Math.sin(a),h=Pl(t,Rl(c,l),Cl(c,l));return h.lit=(1-s.dir.dot(h.dir))/2,{sun:s,moon:h}}function x_(i){const t=new Date,e=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"Europe/Rome",year:"numeric",month:"numeric",day:"numeric",timeZoneName:"shortOffset"}).formatToParts(t).map(s=>[s.type,s.value])),n=+(e.timeZoneName.replace("GMT","")||0);return new Date(Date.UTC(+e.year,+e.month-1,+e.day,0,0)+(i-n)*36e5)}function v_(){const i=Object.fromEntries(new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Rome",hour:"numeric",minute:"numeric",hourCycle:"h23"}).formatToParts(new Date).map(t=>[t.type,t.value]));return+i.hour+ +i.minute/60}const ai={value:0},Je=i=>new Nt(i),ti={dayH:Je(13885674),dayZ:Je(4161472),setH:Je(15773820),setZ:Je(3561868),nightH:Je(1581882),nightZ:Je(198158)};function M_(i){const t={uSun:{value:new N(0,1,0)},uSunVis:{value:1},uMoon:{value:new N(0,-1,0)},uMoonVis:{value:0},uH:{value:ti.dayH.clone()},uZ:{value:ti.dayZ.clone()}},e=new $t(new Bn(2e5,32,16),new rn({side:ze,depthWrite:!1,fog:!1,uniforms:t,vertexShader:"varying vec3 vD; void main() { vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uSun, uMoon, uH, uZ; uniform float uSunVis, uMoonVis; varying vec3 vD;
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
      }`}));e.renderOrder=-2,e.frustumCulled=!1;const n=2200,s=new Float32Array(n*3),r=(()=>{let f=12345;return()=>(f=f*16807%2147483647)/2147483647})();for(let f=0;f<n;f++){const p=.03+r()*.97,g=r()*Math.PI*2,x=Math.sqrt(1-p*p);s.set([Math.cos(g)*x*19e4,p*19e4,Math.sin(g)*x*19e4],f*3)}const o=new Kt;o.setAttribute("position",new xe(s,3));const a=new $a({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),c=new xh(o,a);c.renderOrder=-1,c.frustumCulled=!1;const l={uSunDir:{value:new N(0,1,0)},uNight:ai},h=new $t(new Bn(1e3,32,16),new rn({uniforms:l,transparent:!0,depthWrite:!1,fog:!1,blending:Ps,vertexShader:"varying vec3 vN; void main() { vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uSunDir; uniform float uNight; varying vec3 vN;
      float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453); }
      void main() {
        float lit = smoothstep(-0.03, 0.12, dot(normalize(vN), uSunDir));
        // "mari" lunari: macchie scure fisse sulla faccia
        float mare = 0.82 + 0.18 * step(0.55, hash(floor(normalize(vN) * 4.0)));
        vec3 c = vec3(0.96, 0.94, 0.88) * mare * (lit * mix(0.5, 0.85, uNight) + 0.03 * uNight);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`}));h.frustumCulled=!1,h.renderOrder=-1,i.add(e,c,h);const u={moonDir:new N};return{u:t,starMat:a,moonU:l,state:u,follow(f){e.position.copy(f.position),c.position.copy(f.position),h.position.copy(f.position).addScaledVector(u.moonDir,15e4),h.visible=u.moonDir.y>-.02}}}const jn=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function y_(i,t){const{sun:e,moon:n}=__(x_(i)),s=e.alt/Xe,r=jn(-5,8,s),o=Math.exp(-(((s-1)/6)**2)),a=jn(-2,5,n.alt/Xe),c=ti.nightH.clone().lerp(ti.dayH,r).lerp(ti.setH,o*.75),l=ti.nightZ.clone().lerp(ti.dayZ,r).lerp(ti.setZ,o*.5);t.sky.u.uH.value.copy(c),t.sky.u.uZ.value.copy(l),t.sky.u.uSun.value.copy(e.dir),t.sky.u.uSunVis.value=jn(-3,1,s),t.sky.u.uMoon.value.copy(n.dir),t.sky.u.uMoonVis.value=a*(1-r)*n.lit,t.sky.starMat.opacity=(1-jn(-14,-4,s))*.95,t.sky.moonU.uSunDir.value.copy(e.dir),t.sky.state.moonDir.copy(n.dir),t.fog.color.copy(c),t.bgScene.background.copy(c),t.sun.intensity=2.1*jn(-1,8,s),t.sun.color.set(16773852).lerp(Je(16751701),o*jn(-1,3,s)),t.sun.castShadow=s>0,t.sunDir=e.dir.clone(),t.hemi.intensity=1.25*(.42+.58*r),t.hemi.color.set(7176868).lerp(Je(14675711),r),t.hemi.groundColor.set(4867390).lerp(Je(9075302),r),t.moonLight.intensity=(1-r)*Math.max(.28,.62*a*(.4+.6*n.lit)),t.moonLight.position.copy(n.dir).multiplyScalar(1e3);const h=Je(6057608).lerp(Je(16777215),r).multiply(Je(16777215).lerp(Je(16764830),o*.7));for(const f of t.basics)f.color.copy(h);const u=s>-2;for(const f of t.waters)f.uSkyH.value.copy(c),f.uSkyZ.value.copy(l),f.uTint.value.copy(h),f.uSun.value.copy(u?e.dir:n.dir),f.uSpec.value=u?3*jn(-1,6,s):.8*a*n.lit;return ai.value=t.lights?1-jn(-5,3,s):0,{sun:e,moon:n}}const yr=3.5,Sr=3.1;function S_(){const e=document.createElement("canvas");e.width=128,e.height=114;const n=e.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,128,114);for(let l=0;l<260;l++)n.fillStyle=`rgba(0,0,0,${Math.random()*.05})`,n.fillRect(Math.random()*128,Math.random()*114,2,2);n.fillStyle="rgba(0,0,0,0.12)",n.fillRect(0,100,128,14),n.fillStyle="rgba(0,0,0,0.10)",n.fillRect(0,0,128,5);const s=14,r=100,o=34,a=80;n.fillStyle="#8f9396",n.fillRect(s,o,r,a),n.fillStyle="rgba(0,0,0,0.22)";for(let l=o+3;l<114;l+=4)n.fillRect(s,l,r,1);n.fillStyle="#d9d7d0",n.fillRect(s-3,o-4,r+6,4);const c=new bn(e);return c.wrapS=c.wrapT=li,c.colorSpace=he,c.anisotropy=4,c}function b_(i){const n=document.createElement("canvas");n.width=128,n.height=114;const s=n.getContext("2d");s.fillStyle="#ffffff",s.fillRect(0,0,128,114);for(let h=0;h<260;h++)s.fillStyle=`rgba(0,0,0,${Math.random()*.05})`,s.fillRect(Math.random()*128,Math.random()*114,2,2);s.fillStyle="rgba(0,0,0,0.10)",s.fillRect(0,109,128,5);const r=40,o=58,a=(128-r)/2,c=24;if(i===3){s.fillStyle="#2b3136",s.fillRect(a,c,r,o),s.fillStyle="rgba(160,190,210,0.35)",s.fillRect(a+3,c+o*.5,r-6,o*.45);const h=o*(.35+Math.random()*.25);s.fillStyle="#c9c4b8",s.fillRect(a,c,r,h),s.fillStyle="rgba(0,0,0,0.18)";for(let u=c+2;u<c+h;u+=3)s.fillRect(a,u,r,1);return s.fillStyle="rgba(0,0,0,0.12)",s.fillRect(a-3,c-6,r+6,6),s.fillStyle="#eceae4",s.fillRect(a-5,c+o,r+10,4),Ll(n)}const l=i===0?"#3f5f45":i===1?"#6a4a32":"#8a8a86";s.fillStyle="#2b3136",s.fillRect(a,c,r,o),s.fillStyle="rgba(160,190,210,0.35)",s.fillRect(a+3,c+3,r-6,o/2-4),s.fillStyle=l,s.fillRect(a-13,c,13,o),s.fillRect(a+r,c,13,o),s.fillStyle="rgba(0,0,0,0.25)";for(let h=c+4;h<c+o;h+=5)s.fillRect(a-12,h,11,1),s.fillRect(a+r+1,h,11,1);if(i===2){s.fillStyle="#d8d6d0",s.fillRect(a-18,c+o,r+36,5),s.fillStyle="#3a3a3a",s.fillRect(a-18,c+o-22,r+36,2);for(let h=a-18;h<=a+r+18;h+=5)s.fillRect(h,c+o-22,1.5,22)}else s.fillStyle="#e8e6e0",s.fillRect(a-4,c+o,r+8,4);return Ll(n)}function Ll(i){const t=new bn(i);return t.wrapS=t.wrapT=li,t.colorSpace=he,t.anisotropy=4,t}function E_(i){return i.onBeforeCompile=t=>{t.uniforms.uNight=ai,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        if (uNight > 0.0) {
          vec2 cell = floor(vMapUv), f = fract(vMapUv);
          float win = step(0.36, f.x) * step(f.x, 0.64) * step(0.30, f.y) * step(f.y, 0.77);
          float h = fract(sin(dot(cell + vColor.rg * 97.0, vec2(12.9898, 78.233))) * 43758.5453);
          vec3 warm = h < 0.27 ? vec3(1.0, 0.72, 0.4) : vec3(0.8, 0.86, 1.0);
          totalEmissiveRadiance += win * step(h, 0.34) * uNight * warm * 1.3;
        }`)},i}function w_(){const i=[0,1,2,3].map(t=>E_(new Vt({map:b_(t),vertexColors:!0,side:pe})));return i.push(new Vt({map:S_(),vertexColors:!0,side:pe})),i}function ei(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Kt;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Dl(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][f]);const g=Dl(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Dl(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new xe(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<e;g++){const x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const ec={1302566:{name:"palazzo-ve3-ovest",title:"Palazzo a ovest del Municipio",piazza:"Vittorio Emanuele III",facing:[0,-1],wall:15193008,trim:15985368,stone:13616304,shutter:8016436,roof:11622964,bay:3.05,balcony:"every",ante:"chiuse"},1302564:{name:"palazzo-ve3-est",title:"Palazzo chiaro a est del Municipio",piazza:"Vittorio Emanuele III",facing:[-.85,-.45],wall:15985887,trim:16315628,stone:14012096,shutter:12875840,roof:11622964,bay:3.15,balcony:"alt",ante:"chiuse"},1302563:{name:"palazzo-ve3-est-2",title:"Palazzo oltre l'angolo est",piazza:"Vittorio Emanuele III",facing:[-1,0],wall:15721680,trim:16183526,stone:13813942,shutter:8213558,roof:11622964,bay:3.3,balcony:"alt",ante:"chiuse"},1302551:{name:"palazzo-ve3-nord",title:"Palazzo giallo a nord della fontana",piazza:"Vittorio Emanuele III",facing:[0,1],wall:14994552,trim:15786672,stone:13812900,shutter:7227952,roof:11622964,bay:3.3,balcony:"alt",ante:"chiuse",ground:"bottega",awning:!0,shop:2896688},1302548:{name:"palazzo-ve3-nord-ovest",title:"Palazzo con portico sulla via inferiore",piazza:"Vittorio Emanuele III",facing:[0,1],wall:15587768,trim:16050904,stone:14011320,shutter:6965298,roof:11622964,bay:3.1,balcony:"every",ante:"chiuse",ground:"archi",pilastri:!0,belvedere:!0},1302693:{name:"palazzo-liberta-alto",title:"Palazzo alto a ovest della Chiesa Madre",piazza:"Libertà",facing:[1,.15],wall:14468772,trim:15721676,stone:12892058,shutter:7162420,roof:11049088,bay:3.15,balcony:"every",ante:"chiuse"},1302678:{name:"palazzetto-liberta-est",title:"Palazzetto a est della Chiesa Madre",piazza:"Libertà",facing:[-1,0],wall:16250094,trim:16513266,stone:14538440,shutter:3041852,roof:11622964,bay:2.7,balcony:"none",ante:"chiuse"},1302669:{name:"villa-gp2",title:"Villa chiara a sud del giardino",piazza:"Giovanni Paolo II",facing:[0,-1],wall:15984584,trim:16315108,stone:14537924,shutter:2907192,roof:11622964,bay:3.2,balcony:"center",ante:"chiuse"},1302648:{name:"schiera-gp2",title:"Schiera a ovest del giardino",piazza:"Giovanni Paolo II",facing:[0,-1],wall:15127224,trim:15787216,stone:12036758,shutter:6966326,roof:11622964,bay:4.2,balcony:"every",ante:"chiuse",ground:"bottega",pilastri:!0,shop:2762790}},Il=2371640,T_=6044968,Ul=2764338,A_=9409430;function R_(i){return!!ec[i]}class C_{constructor(){this.parts=[]}add(t,e){const s=(t.index?t.toNonIndexed():t).getAttribute("position");if(!s?.count)return;const r=new Kt;r.setAttribute("position",s);const o=new Nt(e),a=new Float32Array(s.count*3);for(let c=0;c<s.count;c++)a.set([o.r,o.g,o.b],c*3);r.setAttribute("color",new xe(a,3)),this.parts.push(r)}mesh(t){if(!this.parts.length)return null;const e=ei(this.parts);e.computeVertexNormals();const n=new Vt({vertexColors:!0,side:pe});n.onBeforeCompile=r=>{r.uniforms.uNight=ai,r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * vec3(1.0, 0.78, 0.5) * uNight * 0.22;`)};const s=new $t(e,n);return s.name=t,s.castShadow=s.receiveShadow=!0,s}}function P_(i){const t=[];for(let e=0;e<i.length;e+=2)t.push([i[e],i[e+1]]);return t}function L_(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){const o=i[s][0],a=i[s][1],c=i[r][0],l=i[r][1];a>e!=l>e&&t<(c-o)*(e-a)/(l-a)+o&&(n=!n)}return n}function Co(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1])||1;let s=-(t[1]-i[1])/n,r=(t[0]-i[0])/n;const o=(i[0]+t[0])/2,a=(i[1]+t[1])/2;return L_(e,o+s*.45,a+r*.45)&&(s=-s,r=-r),{nx:s,nz:r,L:n,tx:(t[0]-i[0])/n,tz:(t[1]-i[1])/n,mx:o,mz:a}}function Dh(i,t,e,n,s,r){return new jt().makeBasis(new N(e,0,n),new N(0,1,0),new N(s,0,r)).setPosition(i,0,t)}function de(i,t,e,n,s,r,o,a,c,l,h,u,f){if(c-a<.02||u-h<.01||l<.02)return;const p=new Zt(l*2,c-a,u-h);p.translate(0,(a+c)/2,(h+u)/2),p.applyMatrix4(Dh(t,e,n,s,r,o)),i.add(p,f)}function Nl(i,t,e,n,s,r,o,a,c,l,h,u,f){const p=l/2,g=c-p;if(g<a+.25){de(i,t,e,n,s,r,o,a,c,p,u,f,h);return}const x=new oi;x.moveTo(-p,a),x.lineTo(p,a),x.lineTo(p,g),x.absarc(0,g,p,0,Math.PI,!1),x.lineTo(-p,a);const m=new On(x,{depth:f-u,bevelEnabled:!1,curveSegments:8});m.translate(0,0,u),m.applyMatrix4(Dh(t,e,n,s,r,o)),i.add(m,h)}function D_(i,t,e,n,s,r){const o=[];for(let c=0;c<t.length;c++){if((s[c]??30)<.4)continue;const[l,h]=t[c],[u,f]=t[(c+1)%t.length];o.push(l,e,h,u,e,f,u,n,f,l,e,h,u,n,f,l,n,h)}if(!o.length)return;const a=new Kt;a.setAttribute("position",new Ot(o,3)),i.add(a,r)}function I_(i,t,e,n){let s;try{s=yn.triangulateShape(t.map(a=>new pt(a[0],a[1])),[])}catch{return}const r=[];for(const[a,c,l]of s){const h=t[a],u=t[c],f=t[l],p=u[0]-h[0],g=u[1]-h[1],x=f[0]-h[0],m=f[1]-h[1],M=g*x-p*m>=0?[h,u,f]:[h,f,u];for(const v of M)r.push(v[0],e,v[1])}if(!r.length)return;const o=new Kt;o.setAttribute("position",new Ot(r,3)),i.add(o,n)}function U_(i,t,e,n){const s=t.roof.v,r=t.roof.tan,o=a=>[s[a*3],e+s[a*3+2]*r,s[a*3+1]];for(const a of t.roof.f){if(a.length<3)continue;const c=a.map(o);let l;try{l=yn.triangulateShape(c.map(f=>new pt(f[0],f[2])),[])}catch{continue}const h=[];for(const[f,p,g]of l){let x=c[f],m=c[p],d=c[g];(m[2]-x[2])*(d[0]-x[0])-(m[0]-x[0])*(d[2]-x[2])<0&&([m,d]=[d,m]),h.push(...x,...m,...d)}if(!h.length)continue;const u=new Kt;u.setAttribute("position",new Ot(h,3)),i.add(u,n)}}function N_(i){const t=ec[i.id],e=P_(i.r);if(e.length<3)return null;const n=i.e||[],s=Math.min(i.b,i.g)-.4,r=i.g+i.h,o=Math.max(1,i.f||1),a=i.h/o,c=new C_;if(D_(c,e,s,r,n,t.wall),i.roof)U_(c,i,r,t.roof);else{I_(c,e,r,t.roof);for(let f=0;f<e.length;f++){if((n[f]??30)<.4)continue;const p=Co(e[f],e[(f+1)%e.length],e);de(c,p.mx,p.mz,p.tx,p.tz,p.nx,p.nz,r,r+.9,p.L/2,-.06,.16,t.wall)}}let l=-1,h=-1/0;for(let f=0;f<e.length;f++){if((n[f]??30)<4)continue;const p=Co(e[f],e[(f+1)%e.length],e);if(p.L<5)continue;const g=p.nx*t.facing[0]+p.nz*t.facing[1]+p.L*.008;g>h&&(h=g,l=f)}let u=r;if(i.roof){const f=i.roof.v;for(let p=0;p<f.length;p+=3)u=Math.max(u,r+f[p+2]*i.roof.tan)}for(let f=0;f<e.length;f++){if((n[f]??30)<4)continue;const p=Co(e[f],e[(f+1)%e.length],e);if(p.L<3.2)continue;const{mx:g,mz:x,tx:m,tz:d,nx:M,nz:v,L:_}=p;de(c,g,x,m,d,M,v,s,i.g+Math.min(.85,a*.28),_/2,.01,.07,t.stone);for(let T=1;T<o;T++)de(c,g,x,m,d,M,v,i.g+T*a-.08,i.g+T*a+.06,_/2,.01,.09,t.trim);de(c,g,x,m,d,M,v,r-.28,r+.06,_/2,0,.16,t.trim);const b=Math.max(1,Math.round(_/t.bay)),S=Math.floor(b/2),w=f===l;if(t.pilastri)for(let T=0;T<=b;T++){const E=T/b;de(c,g+m*(E-.5)*_,x+d*(E-.5)*_,m,d,M,v,i.g+.7,r-.2,.11,.02,.13,t.trim)}for(let T=0;T<b;T++){const E=(T+.5)/b,y=g+m*(E-.5)*_,R=x+d*(E-.5)*_;for(let O=0;O<o;O++){const U=i.g+O*a,B=O===0&&t.ground==="bottega"&&_>12,D=O===0&&w&&T===S&&!B,I=O===0&&t.ground==="archi"||O===o-1&&t.top==="loggia";if(D){const V=U+Math.min(2.35,a*.86);de(c,y,R,m,d,M,v,U+.08,V,.72,.02,.1,t.trim),de(c,y,R,m,d,M,v,U+.12,V-.08,.52,.08,.14,T_);continue}if(B){const V=Math.min(1.35,t.bay*.36),rt=U+a*.82;if(de(c,y,R,m,d,M,v,U+.02,rt,V+.14,.02,.09,t.stone),de(c,y,R,m,d,M,v,U+.1,rt-.1,V,.09,.16,t.shop||A_),t.awning){const dt=rt-.08;de(c,y,R,m,d,M,v,dt,dt+.07,V*.95,.1,1.2,16052454);for(const H of[-.62,-.2,.22,.64])de(c,y+m*H*V,R+d*H*V,m,d,M,v,dt+.02,dt+.09,.07,.12,1.18,12866362)}continue}const z=U+a*.28,F=U+a*(I?.86:.74),Y=Math.min(I?.72:.58,t.bay*.22);if(I)Nl(c,y,R,m,d,M,v,z-.06,F+.08,Y*2+.22,t.trim,.02,.07),Nl(c,y,R,m,d,M,v,z,F,Y*2,Il,.07,.12);else if(t.ante==="chiuse"&&t.shutter){de(c,y,R,m,d,M,v,z-.08,F+.08,Y+.1,.02,.07,t.trim),de(c,y,R,m,d,M,v,z,F,Y,.07,.13,t.shutter);const V=F-z;for(let rt=1;rt<=3;rt++){const dt=z+V*rt/4;de(c,y,R,m,d,M,v,dt-.02,dt+.02,Y*.92,.12,.155,2366486)}}else de(c,y,R,m,d,M,v,z-.08,F+.08,Y+.1,.02,.07,t.trim),de(c,y,R,m,d,M,v,z,F,Y,.07,.12,Il),t.shutter&&(de(c,y-m*(Y+.1),R-d*(Y+.1),m,d,M,v,z,F,.07,.08,.14,t.shutter),de(c,y+m*(Y+.1),R+d*(Y+.1),m,d,M,v,z,F,.07,.08,.14,t.shutter));const j=O>0&&!(O===o-1&&t.top==="loggia")&&(t.balcony==="every"||t.balcony==="alt"&&T%2===0||t.balcony==="center"&&w&&T===S&&O===1);if(t.belvedere&&f===l&&O===o-1&&T===0){const V=Math.max(3,Math.round(_/.85));for(let rt=0;rt<=V;rt++){const dt=rt/V;de(c,g+m*(dt-.5)*_,x+d*(dt-.5)*_,m,d,M,v,r+.02,r+.78,.055,.02,.12,t.trim)}de(c,g,x,m,d,M,v,r+.7,r+.82,_/2,.02,.14,t.trim)}if(j){const V=t.balcony==="every"?Math.min(t.bay*.42,1.6):Y+.28;de(c,y,R,m,d,M,v,U-.02,U+.08,V,.06,.78,t.stone),de(c,y,R,m,d,M,v,U+.82,U+.9,V,.68,.76,Ul);for(const rt of[-1,1])de(c,y+m*rt*(V-.05),R+d*rt*(V-.05),m,d,M,v,U+.08,U+.9,.025,.66,.74,Ul)}}}}if(i.x)for(const[f,p,g,x]of i.x){const m=i.roof?u:r;if(f===0)de(c,p,g,1,0,0,1,m,m+(x||2.4),1.3,-1.5,1.5,t.wall);else if(f===1){const d=new Fe(.55,.55,x||1.2,12);d.translate(p,m+(x||1.2)/2,g),c.add(d,14212578)}}return c.mesh(t.name)}function F_(i){const t=new Ce;t.name="plaza-buildings";for(const e of i.buildings){if(!ec[e.id])continue;const n=N_(e);n&&t.add(n)}return t}const O_=new Set(["B006","B007","B009","B010"]);function Po(i){let t=Math.imul(i,2654435761)>>>0;return t^=t>>>15,t=Math.imul(t,2246822519)>>>0,t^=t>>>13,(t>>>0)/4294967296}class Lo{constructor(){this.p=[],this.u=[],this.c=[],this.r=[]}tri(t,e,n,s,r,o,a){if(this.p.push(...t,...e,...n),s&&this.u.push(...s,...r,...o),a)for(let c=0;c<3;c++)this.c.push(a.r,a.g,a.b)}geometry(){if(!this.p.length)return null;const t=new Kt;return t.setAttribute("position",new Ot(this.p,3)),this.u.length&&t.setAttribute("uv",new Ot(this.u,2)),this.c.length&&t.setAttribute("color",new Ot(this.c,3)),this.r.length&&t.setAttribute("ruv",new Ot(this.r,3)),t.computeVertexNormals(),t.computeBoundingSphere(),t}}function z_({model:i,orthoMeta:t,textures:e,facadeMats:n}){const[s,r]=i.origin,o=new Ce;o.name="buildings";const a=n.map(()=>new Lo),c=n.length-1,l=new Lo,h=new Map,u=t.tiles.filter(b=>b.level==="core"),f=t.tiles.find(b=>b.level==="base"),p=new Nt,g=[],x=[],m=[];function d(b,S){const w=b+s,T=r-S;return u.find(E=>w>=E.xmin&&w<E.xmax&&T>=E.ymin&&T<E.ymax)||f}const M=(b,S,w)=>[(S+s-b.xmin)/(b.xmax-b.xmin),(r-w-b.ymin)/(b.ymax-b.ymin)],v=b=>(h.has(b.file)||h.set(b.file,new Lo),h.get(b.file));for(const b of i.buildings){const S=[];for(let V=0;V<b.r.length;V+=2)S.push([b.r[V],b.r[V+1]]);if(S.length<3)continue;const w=b.g+b.h;if(b.lm||R_(b.id)){g.push({pts:S,top:w,minX:Math.min(...S.map(V=>V[0])),maxX:Math.max(...S.map(V=>V[0])),minZ:Math.min(...S.map(V=>V[1])),maxZ:Math.max(...S.map(V=>V[1])),canopy:!1});continue}const T=Math.min(b.b,b.g)-.4;p.setRGB(b.c[0]/255,b.c[1]/255,b.c[2]/255,he);const E=!O_.has(b.t)&&b.h>=2.6,y=E?a[Math.floor(Po(b.id)*c)]:l,R=E?a[c]:l;let O=0,U=0;for(const[V,rt]of S)O+=V,U+=rt;O/=S.length,U/=S.length;const B=d(O,U),D=v(B),I=b.t==="B007",z=Po(b.id*3+1),F=z<.15?0:z<.65?1:2;let Y=0;for(let V=0;V<S.length;V++){const[rt,dt]=S[V],[H,Z]=S[(V+1)%S.length],ht=Math.hypot(H-rt,Z-dt);if(ht<.05)continue;if(I){const $=w-.25;l.tri([rt,$,dt],[H,$,Z],[H,w,Z],null,null,null,p),l.tri([rt,$,dt],[H,w,Z],[rt,w,dt],null,null,null,p);continue}const it=Y,mt=Y/yr,Rt=(Y+ht)/yr;Y+=ht;const _t=b.e?b.e[V]:30;if(E&&_t>=4&&b.f>=2&&ht>=2.5&&F){const $=(H-rt)/ht,L=(Z-dt)/ht;let ot=-L,Q=$;V_(S,(rt+H)/2+ot*.1,(dt+Z)/2+Q*.1)&&(ot=-ot,Q=-Q);for(let ct=Math.ceil(it/yr-.5);;ct++){const st=(ct+.5)*yr-it;if(st>ht-.9)break;if(!(st<.9||F===2&&ct%2))for(let Mt=1;Mt<b.f;Mt++){const ft=b.g+Mt*Sr;if(ft+1.2>w)break;m.push({x:rt+$*st+ot*.45,z:dt+L*st+Q*.45,y:ft,ang:Math.atan2(ot,Q)})}}}if(_t<.4&&E){l.tri([rt,T,dt],[H,T,Z],[H,w,Z],null,null,null,p),l.tri([rt,T,dt],[H,w,Z],[rt,w,dt],null,null,null,p);continue}const at=Math.min(w,b.g+Sr),G=($,L,ot)=>{if(ot-L<.02)return;const Q=(L-b.g)/Sr,ct=(ot-b.g)/Sr,st=[rt,L,dt],Mt=[H,L,Z],ft=[H,ot,Z],P=[rt,ot,dt];$.tri(st,Mt,ft,[mt,Q],[Rt,Q],[Rt,ct],p),$.tri(st,ft,P,[mt,Q],[Rt,ct],[mt,ct],p)};G(R,T,at),G(y,at,w)}let j=w;if(b.roof){const V=b.roof.v,rt=b.roof.tan,dt=H=>[V[H*3],w+V[H*3+2]*rt,V[H*3+1]];for(const H of b.roof.f){if(H.length<3)continue;const Z=H.map(dt);let ht;try{ht=yn.triangulateShape(Z.map(mt=>new pt(mt[0],mt[2])),[])}catch{continue}const it=B_(Z);for(const[mt,Rt,_t]of ht){let at=Z[mt],G=Z[Rt],$=Z[_t];(G[2]-at[2])*($[0]-at[0])-(G[0]-at[0])*($[2]-at[2])<0&&([G,$]=[$,G]),D.tri(at,G,$,M(B,at[0],at[2]),M(B,G[0],G[2]),M(B,$[0],$[2]));for(const L of[at,G,$])D.r.push(...it?[it.eu(L),it.sv(L),1+Po(b.id*7+3)*.999]:[0,0,0]);j=Math.max(j,at[1],G[1],$[1])}}}else{const V=S.map(([dt,H])=>new pt(dt,H));let rt;try{rt=yn.triangulateShape(V,[])}catch{rt=[]}for(const[dt,H,Z]of rt){const ht=[S[dt][0],w,S[dt][1]],it=[S[H][0],w,S[H][1]],mt=[S[Z][0],w,S[Z][1]];D.tri(ht,it,mt,M(B,ht[0],ht[2]),M(B,it[0],it[2]),M(B,mt[0],mt[2])),D.r.push(0,0,0,0,0,0,0,0,0)}if(b.pp){const dt=p.clone().multiplyScalar(.92);for(let H=0;H<S.length;H++){const[Z,ht]=S[H],[it,mt]=S[(H+1)%S.length];l.tri([Z,w,ht],[it,w,mt],[it,w+1,mt],null,null,null,dt),l.tri([Z,w,ht],[it,w+1,mt],[Z,w+1,ht],null,null,null,dt)}j=w+1}}if(b.x){let V=0,rt=0;for(let dt=0;dt<S.length;dt++){const[H,Z]=S[dt],[ht,it]=S[(dt+1)%S.length],mt=Math.hypot(ht-H,it-Z);mt>rt&&(rt=mt,V=Math.atan2(ht-H,it-Z))}for(const[dt,H,Z,ht]of b.x)x.push({type:dt,x:H,z:Z,y:b.roof?j:w,h:ht,ang:V,col:p.clone()})}g.push({pts:S,top:j,minX:Math.min(...S.map(V=>V[0])),maxX:Math.max(...S.map(V=>V[0])),minZ:Math.min(...S.map(V=>V[1])),maxZ:Math.max(...S.map(V=>V[1])),canopy:I})}a.forEach((b,S)=>{const w=b.geometry();if(w){const T=new $t(w,n[S]);T.castShadow=T.receiveShadow=!0,o.add(T)}});const _=l.geometry();if(_){const b=new $t(_,new Vt({vertexColors:!0,side:pe}));b.castShadow=b.receiveShadow=!0,o.add(b)}for(const[b,S]of h){const w=S.geometry();if(!w)continue;const T=new $t(w,Lh(e.get(b),{roof:!0}));T.receiveShadow=!0,o.add(T)}return o.add(H_(x)),o.add(G_(m)),{group:o,footprints:g}}function B_(i){const t=new N;for(let s=1;s+1<i.length&&t.lengthSq()<1e-6;s++){const r=new N(...i[0]),o=new N(...i[s]),a=new N(...i[s+1]);t.crossVectors(o.sub(r),a.sub(r))}if(t.lengthSq()<1e-6||(t.normalize(),t.y<0&&t.negate(),t.y>.995))return null;const e=new N(0,1,0).cross(t).normalize(),n=new N().crossVectors(t,e).normalize();return{eu:s=>s[0]*e.x+s[1]*e.y+s[2]*e.z,sv:s=>s[0]*n.x+s[1]*n.y+s[2]*n.z}}function k_(i){const e=new Map;for(const n of i)if(!n.canopy)for(let s=Math.floor(n.minX/16);s<=Math.floor(n.maxX/16);s++)for(let r=Math.floor(n.minZ/16);r<=Math.floor(n.maxZ/16);r++){const o=`${s},${r}`;e.has(o)||e.set(o,[]),e.get(o).push(n)}return function(s,r){for(const o of e.get(`${Math.floor(s/16)},${Math.floor(r/16)}`)||[]){if(s<o.minX||s>o.maxX||r<o.minZ||r>o.maxZ)continue;let a=!1;const c=o.pts;for(let l=0,h=c.length-1;l<c.length;h=l++)c[l][1]>r!=c[h][1]>r&&s<(c[h][0]-c[l][0])*(r-c[l][1])/(c[h][1]-c[l][1])+c[l][0]&&(a=!a);if(a)return!0}return!1}}function H_(i){const t=new Ce;t.name="roof-items";const e=[0,1,2,3].map(g=>i.filter(x=>x.type===g)),n=new jt,s=new Ee,r=new N,o=new N,a=new N(0,1,0),c=(g,x,m,d,M)=>{if(!m.length)return;const v=new ui(g,x,m.length);m.forEach((_,b)=>{d(_),v.setMatrixAt(b,n),M&&v.setColorAt(b,M(_))}),v.castShadow=v.receiveShadow=!0,t.add(v)},l=new Zt(1,1,1);l.translate(0,.5,0),c(l,new Vt,e[0],g=>{s.setFromAxisAngle(a,g.ang),n.compose(o.set(g.x,g.y,g.z),s,r.set(2.6,g.h||2.4,3))},g=>g.col);const h=new Fe(.55,.55,1.2,12);h.translate(0,.6,0);const u=[new Nt(15263970),new Nt(3829416),new Nt(2829099)];c(h,new Vt,e[1],g=>{s.setFromAxisAngle(a,0),n.compose(o.set(g.x,g.y,g.z),s,r.set(1,1,1))},g=>u[Math.abs(Math.round(g.x*7+g.z*13))%u.length]);const f=new Zt(2,.08,1.2);f.rotateX(-.7),f.translate(0,.7,0),c(f,new Vt({color:1911354}),e[2],g=>{s.setFromAxisAngle(a,0),n.compose(o.set(g.x,g.y,g.z),s,r.set(1,1,1))});const p=new Fe(.03,.03,3,4);return p.translate(0,1.5,0),c(p,new Vt({color:7829367}),e[3],g=>{n.compose(o.set(g.x,g.y,g.z),s.identity(),r.set(1,1,1))}),t}function V_(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++)i[s][1]>e!=i[r][1]>e&&t<(i[r][0]-i[s][0])*(e-i[s][1])/(i[r][1]-i[s][1])+i[s][0]&&(n=!n);return n}function G_(i){const t=new Ce;if(t.name="balconies",!i.length)return t;const e=new Zt(1.7,.12,.9);e.translate(0,.06,0);const n=new Zt(1.7,.95,.04);n.translate(0,.6,.43);const s=new Zt(.04,.95,.9);s.translate(-.83,.6,0);const r=s.clone();r.translate(1.66,0,0);const o=new Vt({color:14078664}),a=document.createElement("canvas");a.width=128,a.height=64;const c=a.getContext("2d");c.fillStyle="#fff",c.fillRect(0,0,128,6),c.fillRect(0,56,128,4);for(let m=1;m<128;m+=8)c.fillRect(m,0,2,60);const l=new bn(a);l.colorSpace=he;const h=new Vt({color:3817020,map:l,alphaTest:.5,side:pe}),u=new jt,f=new Ee,p=new N(1,1,1),g=new N,x=new N(0,1,0);for(const[m,d]of[[e,o],[n,h],[s,h],[r,h]]){const M=new ui(m,d,i.length);i.forEach((v,_)=>{f.setFromAxisAngle(x,v.ang),u.compose(g.set(v.x,v.y,v.z),f,p),M.setMatrixAt(_,u)}),M.castShadow=!0,M.receiveShadow=!0,t.add(M)}return t}const un=32.95,Ta=-8.54,Aa=-31.15,Ih=.275,Uh=-8.445,nc=-.2855,ic=-.9584,Nh=-.9584,Fh=.2855,Ge=2,We=29.2,Ke=11.4;function Oh(i,t){const e=i-Ih,n=t-Uh;return[e*Nh+n*Fh,e*nc+n*ic]}function Ne(i,t){return[Ih+Nh*i+nc*t,Uh+Fh*i+ic*t]}function zh(i,t){const[e,n]=Oh(i,t);if(e>-28&&e<30&&n>.2&&n<30.4)return!0;const s=e-Ge,r=n-We;return r>=-.5&&s*s+r*r<=Ke*Ke}function W_(i,t){const[e,n]=Oh(i,t);if(e>-24&&e<28&&n>2&&n<32)return!0;const s=e-Ge,r=n-We;return r>-1&&s*s+r*r<Ke*Ke}function X_(i,t){return!zh(i,t)}function q_(i,t,e){return zh(i,t)&&Math.hypot(i-Ta,t-Aa)>3.15?Math.max(e,un):e}function Zn(i,t){const e=new Vt({color:i,side:pe,...t});return e.polygonOffset=!0,e.polygonOffsetFactor=-2,e.polygonOffsetUnits=-2,e}function Y_(){const e=.017578125,n=document.createElement("canvas");n.width=n.height=1024;const s=n.getContext("2d"),r=1024/2,o=1024/2,a=l=>l/e;s.beginPath(),s.arc(r,o,a(4.7),0,Math.PI*2),s.fillStyle="#d9d2c4",s.fill(),s.beginPath(),s.arc(r,o,a(4.55),0,Math.PI*2),s.arc(r,o,a(3.7),0,Math.PI*2,!0),s.fillStyle="#b85a3c",s.fill();for(let l=0;l<48;l++){const h=l/48*Math.PI*2,u=(l+.86)/48*Math.PI*2,f=Math.abs(Math.sin(l*2.1));s.fillStyle=`rgb(${168+f*40},${82+f*28},${58+f*16})`,s.beginPath(),s.moveTo(r+Math.sin(h)*a(3.75),o+Math.cos(h)*a(3.75)),s.lineTo(r+Math.sin(h)*a(4.5),o+Math.cos(h)*a(4.5)),s.lineTo(r+Math.sin(u)*a(4.5),o+Math.cos(u)*a(4.5)),s.lineTo(r+Math.sin(u)*a(3.75),o+Math.cos(u)*a(3.75)),s.fill()}s.beginPath(),s.arc(r,o,a(3.72),0,Math.PI*2),s.arc(r,o,a(3.45),0,Math.PI*2,!0),s.fillStyle="#f3eee4",s.fill(),s.globalCompositeOperation="destination-out",s.beginPath(),s.arc(r,o,a(3.4),0,Math.PI*2),s.fill();const c=new bn(n);return c.colorSpace=he,c.anisotropy=8,c}const $_=[[-21.3,17.3],[-10.6,17.3],[16.1,17.3],[26.4,17.3]];function Jn(i){const t=Math.sin(i*127.1)*43758.5453;return t-Math.floor(t)}function j_(){const r=Math.ceil(2772),o=Math.ceil((32.2-12.05)*42),a=document.createElement("canvas");a.width=r,a.height=o;const c=a.getContext("2d"),l=b=>(b- -32)*42,h=b=>(b-12.05)*42,u=[[154,78,58],[122,58,44],[176,96,70],[108,50,40],[186,112,84],[138,70,54]],f=.46,p=.24;for(let b=12.05;b<32.2;b+=p){const S=Math.round((b-12.05)/p),w=S&1?f*.5:0;for(let T=-32-f;T<34+f;T+=f){const E=Jn(S*13+Math.round((T+w)*8)),y=u[(S+Math.floor(E*6))%u.length],R=.86+E*.22;c.fillStyle=`rgb(${y[0]*R},${y[1]*R},${y[2]*R})`,c.fillRect(l(T+w)+1,h(b)+1,f*42-1.4,p*42-1.2)}}c.fillStyle="#d9d3c6";const g=.34,x=5.35,m=4.6;for(let b=-30.2;b<=32;b+=x)c.fillRect(l(b),h(12.05),g*42,(32.2-12.05)*42);for(let b=12.5;b<=31.4;b+=m)c.fillRect(l(-32),h(b),2772,g*42);const d=["#f4efe6","#e6dccb","#f7f3ec","#ddd3c2"],M=.3,v=(b,S,w,T)=>{const E=b-1.97,y=S-24.28;E*E+y*y<5.05*5.05||(c.fillStyle=T,c.fillRect(l(b-w*.46),h(S-w*.46),w*.92*42,w*.92*42))};for(const[b,S]of $_){for(let R=-3.45;R<=3.45+1e-6;R+=M)for(let O=-1.05/2;O<=1.05/2+1e-6;O+=M){const U=d[Math.round(R/M)+Math.round(O/M)*3&3];v(b+R,S+O,M,U),v(b+O,S+R,M,U)}for(let R=-2.35;R<=2.35+1e-6;R+=M)for(let O=-.62/2;O<=.62/2+1e-6;O+=M){const U=d[Math.round(R/M)*2+Math.round(O/M)+1&3],B=(R+O)*.7071,D=(R-O)*.7071;v(b+B,S+D,M*.92,U),v(b+B,S-D,M*.92,U)}for(let R=0;R<8;R++){const O=R/8*Math.PI*2;v(b+Math.cos(O)*.55,S+Math.sin(O)*.55,.42,"#f7f4ee")}v(b,S,.55,"#c9bba6")}c.globalCompositeOperation="destination-out",c.beginPath(),c.arc(l(1.97),h(24.28),4.85*42,0,Math.PI*2),c.fill(),c.globalCompositeOperation="source-over";const _=new bn(a);return _.colorSpace=he,_.anisotropy=8,{tex:_,u0:-32,u1:34,w0:12.05,w1:32.2}}function Z_(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle="#cbb67a",t.fillRect(0,0,512,512);for(let n=0;n<90;n++){const s=Jn(n*3.1);t.fillStyle=s>.5?"#b6a15e":"#d8c48a",t.beginPath(),t.ellipse(Jn(n+1)*512,Jn(n+2)*512,18+s*70,10+Jn(n+4)*28,s*3,0,Math.PI*2),t.fill()}for(let n=0;n<2500;n++){const s=Jn(n*1.7+9);t.strokeStyle=`rgb(${120+s*70},${130+s*50},${50+s*30})`,t.lineWidth=1;const r=Jn(n+20)*512,o=Jn(n+40)*512;t.beginPath(),t.moveTo(r,o),t.lineTo(r+(s-.5)*8,o-4-s*7),t.stroke()}const e=new bn(i);return e.wrapS=e.wrapT=li,e.colorSpace=he,e.anisotropy=8,e}function K_(i,t){const e=new Ce;e.name="piazza-ve3";const n=un,s=Zn(13616822),r=Zn(5208632),o=Zn(12870202),a=Zn(13928794),c=Zn(15196886),l=n+.04,h=(D,I,z,F,Y,j)=>{const V=Ne(D,I),rt=Ne(z,I),dt=Ne(z,F),H=Ne(D,F),Z=new Kt;Z.setAttribute("position",new Ot([V[0],Y,V[1],rt[0],Y,rt[1],dt[0],Y,dt[1],V[0],Y,V[1],dt[0],Y,dt[1],H[0],Y,H[1]],3)),Z.computeVertexNormals();const ht=new $t(Z,j);ht.receiveShadow=!0,e.add(ht)};{const D=new Sn(18,18);D.rotateX(-Math.PI/2);const I=new $t(D,new Vt({map:Y_(),transparent:!0,alphaTest:.35,side:pe,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));I.position.set(Ta,n+.05,Aa),I.receiveShadow=!0,e.add(I)}h(-28,.35,30,12.15,l,Zn(8816780));{const{tex:D,u0:I,u1:z,w0:F,w1:Y}=j_(),j=Ne(I,F),V=Ne(z,F),rt=Ne(z,Y),dt=Ne(I,Y),H=l+.03,Z=new Kt;Z.setAttribute("position",new Ot([j[0],H,j[1],V[0],H,V[1],rt[0],H,rt[1],j[0],H,j[1],rt[0],H,rt[1],dt[0],H,dt[1]],3)),Z.setAttribute("uv",new Ot([0,0,1,0,1,1,0,0,1,1,0,1],2)),Z.computeVertexNormals();const ht=new $t(Z,new Vt({map:D,transparent:!0,alphaTest:.15,side:pe,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}));ht.receiveShadow=!0,e.add(ht)}const u=Z_(),f=new Vt({map:u,side:pe});f.polygonOffset=!0,f.polygonOffsetFactor=-2,f.polygonOffsetUnits=-2;{const D=l+.035,[I,z]=Ne(Ge,We),F=96,Y=[],j=[];for(let it=0;it<F;it++){const mt=-Math.PI/2+it/F*Math.PI,Rt=-Math.PI/2+(it+1)/F*Math.PI,_t=Ne(Ge+Math.sin(mt)*Ke,We+Math.cos(mt)*Ke),at=Ne(Ge+Math.sin(Rt)*Ke,We+Math.cos(Rt)*Ke);Y.push(I,D,z,_t[0],D,_t[1],at[0],D,at[1]),j.push(.5,.15,.5+Math.sin(mt)*.45,.15+Math.cos(mt)*.7,.5+Math.sin(Rt)*.45,.15+Math.cos(Rt)*.7)}const V=new Kt;V.setAttribute("position",new Ot(Y,3)),V.setAttribute("uv",new Ot(j,2)),V.computeVertexNormals();const rt=new $t(V,f);rt.receiveShadow=!0,e.add(rt);const dt=[],H=[];for(let it=0;it<F;it++){const mt=-Math.PI/2+it/F*Math.PI,Rt=-Math.PI/2+(it+1)/F*Math.PI,_t=st=>Ne(Ge+Math.sin(st)*Ke,We+Math.cos(st)*Ke),at=st=>Ne(Ge+Math.sin(st)*(Ke+2.6),We+Math.cos(st)*(Ke+2.6)),G=_t(mt),$=_t(Rt),L=at(mt),ot=at(Rt),Q=Math.min(n,i(L[0],L[1])+.12),ct=Math.min(n,i(ot[0],ot[1])+.12);dt.push(G[0],D,G[1],L[0],Q,L[1],ot[0],ct,ot[1],G[0],D,G[1],ot[0],ct,ot[1],$[0],D,$[1]),H.push(0,0,1,0,1,1,0,0,1,1,0,1)}const Z=new Kt;Z.setAttribute("position",new Ot(dt,3)),Z.setAttribute("uv",new Ot(H,2)),Z.computeVertexNormals();const ht=new $t(Z,f);ht.receiveShadow=!0,e.add(ht)}const p=new Bn(1,18,14),g=[];for(let D=0;D<9;D++){const I=-Math.PI/2+(D+.35)/9*Math.PI,z=Ke-.35;g.push([Ge+Math.sin(I)*z,We+Math.cos(I)*z,.42+D%3*.16])}g.push([Ge-2.4,We+3.6,.55],[Ge+3.1,We+5.2,.48],[Ge+.4,We+7.8,.7],[Ge-5.2,We+6.4,.4]);const x=[7174718,9077832,6187576,8227402];g.forEach(([D,I,z],F)=>{const[Y,j]=Ne(D,I),V=new $t(p,Zn(x[F%x.length]));V.scale.set(z,z*.82,z),V.position.set(Y,n+z*.7,j),V.castShadow=!0,e.add(V)});const m=new N(0,1,0),d=Math.atan2(nc,ic),M=new Zt(1.7,.1,.46),v=new Zt(.16,.36,.38);for(const[D,I]of[[Ge-8.4,We-1.1],[Ge+8.6,We-1.1]]){const[z,F]=Ne(D,I),Y=new Ee().setFromAxisAngle(m,d);for(const[j,V,rt,dt,H]of[[M,c,.4,0,0],[v,s,.18,-.62,0],[v,s,.18,.62,0]]){const Z=new $t(j,V);Z.position.set(dt,rt,H).applyQuaternion(Y),Z.position.add(new N(z,n,F)),Z.quaternion.copy(Y),Z.castShadow=!0,e.add(Z)}}const _=new Vt({color:16774364,emissive:16769192,emissiveIntensity:.18}),b=Zn(2764336);for(const[D,I]of[[-24,8.2],[26,8.2],[-20,26.5]]){const[z,F]=Ne(D,I),Y=new Ee().setFromAxisAngle(m,d),j=(V,rt,dt,H,Z)=>{const ht=new $t(V,rt);ht.position.set(dt,H,Z).applyQuaternion(Y),ht.position.add(new N(z,n,F)),ht.quaternion.copy(Y),ht.castShadow=!0,e.add(ht)};j(new Fe(.06,.09,4.2,8),b,0,2.1,0),j(new Zt(1.35,.05,.05),b,0,4.15,0);for(const V of[-.62,.62])j(new Bn(.2,12,10),_,V,4.25,0)}const S=(D,I,z,F,Y)=>{if(!z.length)return;const j=new ui(D,I,z.length/F),V=new jt,rt=new Ee,dt=new N,H=new N(1,1,1);for(let Z=0;Z<z.length;Z+=F)Y(z,Z,dt,rt,H),V.compose(dt,rt,H),j.setMatrixAt(Z/F,V);j.castShadow=j.receiveShadow=!0,e.add(j)},w=[],T=(D,I,z,F,Y)=>{const j=z-D,V=F-I,rt=Math.hypot(j,V);let dt=-V/rt,H=j/rt;const Z=(D+z)/2,ht=(I+F)/2;(Ta-Z)*dt+(Aa-ht)*H<0&&(dt=-dt,H=-H);const it=Math.floor(rt/Y);for(let mt=1;mt<it;mt++){const Rt=mt/it;w.push([D+j*Rt+dt*1.25,I+V*Rt+H*1.25])}};T(-21.7,-61.4,-37.6,-56,1.65),T(18.9,-74.6,-12.4,-64.2,2.4);const E=w.flat(),y=new Fe(.32,.22,.4,10),R=new Fe(.36,.34,.08,10),O=new Zt(.06,.015,.7);S(y,o,E,2,(D,I,z)=>{z.set(D[I],i(D[I],D[I+1])+.42,D[I+1])}),S(R,a,E,2,(D,I,z)=>{z.set(D[I],i(D[I],D[I+1])+.64,D[I+1])});const U=[];for(const[D,I]of w)for(let z=0;z<7;z++)U.push(D,I,z/7*Math.PI*2);const B=new mn(-.7,0,0);return S(O,r,U,3,(D,I,z,F)=>{const Y=D[I],j=D[I+1],V=D[I+2];z.set(Y+Math.sin(V)*.22,i(Y,j)+.88,j+Math.cos(V)*.22),B.y=V,F.setFromEuler(B)}),e.userData.night=D=>{_.emissiveIntensity=.15+D*1.6},e}const Fl=400,J_=1400;function Q_(i){const t=(s,r)=>{const o=new Nt(r),a=s.attributes.position.count,c=new Float32Array(a*3);for(let l=0;l<a;l++)c.set([o.r,o.g,o.b],l*3);return s.setAttribute("color",new xe(c,3)),s.toNonIndexed?s.toNonIndexed():s},e=(s,r,o=5981746)=>{const a=new Fe(r*.7,r,s,5,1,!0);return a.translate(0,s/2,0),t(a,o)},n=(s,r,o,a,c,l=0)=>{const h=new Gr(1,l);return h.scale(s,r,o),h.translate(0,a,0),t(h,c)};switch(i){case 1:return ei([e(.72,.035,6965812),n(1,.16,1,.8,3099178),n(.7,.12,.7,.9,3824179)]);case 2:return ei([e(.4,.06,7035464),n(1,.38,.85,.64,8227428)]);case 3:return ei([e(.25,.05),n(1,.5,1,.55,2903845)]);case 4:return ei([e(.9,.03,9073240),n(1,.1,1,.92,4612399)]);case 5:return ei([n(1,.6,.9,.45,5599546)]);default:return ei([e(.45,.05),n(1,.45,1,.64,3889708)])}}function tx(i){const t=new Ce;t.name="trees";const e=Math.floor(i.length/6);if(!e)return{group:t,update(){}};const n=[0,1,2,3,4,5].map(Q_),s=new Vt({vertexColors:!0,flatShading:!0}),r=new Map;for(let g=0;g<e;g++){const x=i[g*6],m=i[g*6+1];if(W_(x,m))continue;const d=`${Math.floor(x/Fl)},${Math.floor(m/Fl)},${i[g*6+5]}`;r.has(d)||r.set(d,[]),r.get(d).push(g)}const o=new jt,a=new Ee,c=new N,l=new N,h=new N(0,1,0),u=new Nt,f=[];for(const[g,x]of r){const m=+g.split(",")[2],d=new ui(n[m],s,x.length);x.forEach((M,v)=>{const _=i[M*6],b=i[M*6+1],S=i[M*6+2];let w=m===5?i[M*6+3]:Math.max(m===3?2.5:3,i[M*6+3]),T=m===5?i[M*6+4]:Math.max(1,i[M*6+4]);m!==5&&Math.hypot(_+8.54,b+31.15)<48&&(T>3.3&&(T=3.3),w>5.5&&(w=5.5)),a.setFromAxisAngle(h,M*2.39996%(Math.PI*2)),o.compose(l.set(_,S,b),a,c.set(T,w,T)),d.setMatrixAt(v,o);const E=Math.abs(Math.sin(M*12.9898)*43758.5453)%1;d.setColorAt(v,u.setScalar(.85+E*.3))}),d.computeBoundingSphere(),d.castShadow=m!==5,d.userData.far=m===5?450:J_,f.push(d),t.add(d)}function p(g){for(const x of f)x.visible=x.boundingSphere.center.distanceTo(g.position)-x.boundingSphere.radius<x.userData.far}return{group:t,update:p}}function Hs(i,t,e,n=!0){const s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);const r=new bn(s);return n&&(r.wrapS=r.wrapT=li),r.colorSpace=he,r.anisotropy=8,r}function qr(i){let t=i;return()=>(t=t*16807%2147483647)/2147483647}const ex=()=>Hs(512,512,(i,t,e)=>{const n=qr(7);i.fillStyle="#5c5d5f",i.fillRect(0,0,t,e);for(let s=0;s<18;s++)i.fillStyle=`rgba(${n()<.5?"40,40,42":"105,105,102"},${.04+n()*.05})`,i.beginPath(),i.ellipse(n()*t,n()*e,20+n()*90,10+n()*50,n()*3,0,7),i.fill();for(let s=0;s<16e3;s++){const r=50+n()*70;i.fillStyle=`rgba(${r},${r},${r-4},0.5)`,i.fillRect(n()*t,n()*e,1.5,1.5)}i.strokeStyle="rgba(20,20,20,0.35)",i.lineWidth=1.2;for(let s=0;s<5;s++){i.beginPath();let r=n()*t,o=n()*e;i.moveTo(r,o);for(let a=0;a<8;a++)r+=(n()-.5)*40,o+=(n()-.5)*40,i.lineTo(r,o);i.stroke()}}),nx=()=>Hs(256,256,(i,t,e)=>{const n=qr(11);i.fillStyle="#b9b3a8",i.fillRect(0,0,t,e);const s=5,r=t/s;for(let o=0;o<s;o++)for(let a=0;a<s;a++){const c=170+n()*30;i.fillStyle=`rgb(${c},${c-5},${c-14})`,i.fillRect(o*r+1,a*r+1,r-2,r-2)}for(let o=0;o<3e3;o++)i.fillStyle=`rgba(0,0,0,${n()*.08})`,i.fillRect(n()*t,n()*e,1,1)}),ix=()=>Hs(512,512,(i,t,e)=>{const n=qr(5);i.fillStyle="#5e584f",i.fillRect(0,0,t,e);const s=64,r=104;for(let o=0;o<e;o+=s){const a=o/s%2?r/2:0;for(let c=-r;c<t+r;c+=r){const l=196+n()*38,h=n()*16;i.fillStyle=`rgb(${Math.min(255,l+h*.15)},${l-8},${l-26-h})`,i.fillRect(c+a+4,o+4,r-8,s-8),i.strokeStyle=`rgba(255,250,240,${.04+n()*.05})`,i.strokeRect(c+a+4.5,o+4.5,r-9,s-9),i.strokeStyle=`rgba(70,62,52,${.12+n()*.12})`,i.beginPath(),i.moveTo(c+a+12,o+14+n()*10),i.lineTo(c+a+r-16,o+s-16),i.stroke()}}});function Do(i){return Hs(512,512,(t,e,n)=>{const s=t.createImageData(e,n),r=s.data,o=64,a=32,c=l=>{const h=Math.sin(l*127.1)*43758.5453;return h-Math.floor(h)};for(let l=0;l<n;l++)for(let h=0;h<e;h++){const u=h+l,f=-h+l,p=Math.floor(f/a),g=u-(p&1)*(o/2),x=(g%o+o)%o,m=(f%a+a)%a,d=i==="brick"?5.2:3.5,M=x<d||m<d,v=c(Math.floor(g/o)*13+p*7);let _,b,S;i==="brick"?(_=168+v*48,b=86+v*28,S=62+v*16):i==="red"?(_=158+v*46,b=86+v*30,S=68+v*18):(_=208+v*34,b=190+v*28,S=162+v*20),M?(_*=.62,b*=.6,S*=.58):c(h*17+l*3)>.9&&(_*=.9,b*=.9,S*=.88);const w=(l*e+h)*4;r[w]=_,r[w+1]=b,r[w+2]=S,r[w+3]=255}t.putImageData(s,0,0)})}function sx(){return Hs(256,256,(i,t,e)=>{const n=qr(9);i.fillStyle="#5d7a3e",i.fillRect(0,0,t,e);for(let s=0;s<5e3;s++){const r=n()*t,o=n()*e,a=3+n()*6,c=-Math.PI/2+(n()-.5)*1.1,l=n();i.strokeStyle=`rgb(${70+l*60},${110+l*70},${40+l*30})`,i.lineWidth=1,i.beginPath(),i.moveTo(r,o),i.lineTo(r+Math.cos(c)*a,o+Math.sin(c)*a),i.stroke()}})}function rx(i){let t=0,e=0,n=0;for(let s=0;s<i.length;s+=2){const r=i[s],o=i[s+1],a=i[(s+2)%i.length],c=i[(s+3)%i.length],l=r*c-a*o;t+=l,e+=(r+a)*l,n+=(o+c)*l}return t*=.5,Math.abs(t)<.001?{x:i[0],z:i[1],a:0}:{x:e/(6*t),z:n/(6*t),a:Math.abs(t)}}function Ol(i,t){return t<-4&&t>-68&&i>-50&&i<36&&Math.hypot(i+12,t+36)<42}function ox(i,t,e){return Ol(i,t)&&e>400?"ve3":Ol(i,t)?"brick":t<-8&&t>-62&&i>-198&&i<-120&&Math.hypot(i+156,t+32)<42?e>400?"garden":"red":t>16&&t<93&&i>-262&&i<-168&&Math.hypot(i+224,t-58)<78?"drive":Math.hypot(i+212,t-112)<28?"herring":"other"}function ax(i){const t={herring:[],drive:[],garden:[],red:[],other:[],ve3:[],brick:[]};for(const e of i||[]){const n=rx(e[0]);t[ox(n.x,n.z,n.a)].push(e)}return t}class Ze{constructor(){this.p=[],this.u=[]}quad(t,e,n,s,r,o,a,c){this.p.push(...t,...e,...n,...t,...n,...s),this.u.push(...r,...o,...a,...r,...a,...c)}tri(t,e,n,s,r,o){this.p.push(...t,...e,...n),this.u.push(...s,...r,...o)}mesh(t,e=0){if(!this.p.length)return null;const n=new Kt;n.setAttribute("position",new Ot(this.p,3)),n.setAttribute("uv",new Ot(this.u,2)),n.computeVertexNormals();const s=new $t(n,t);return s.receiveShadow=!0,s.renderOrder=e,s}}class vi{constructor(){this.p=[],this.u=[],this.a=[]}quad(t,e,n,s,r,o,a,c,l,h,u,f){this.p.push(...t,...e,...n,...t,...n,...s),this.u.push(...r,...o,...a,...r,...a,...c),this.a.push(l,h,u,l,u,f)}tri(t,e,n,s,r,o,a,c,l){this.p.push(...t,...e,...n),this.u.push(...s,...r,...o),this.a.push(a,c,l)}mesh(t,e=0){if(!this.p.length)return null;const n=new Kt;n.setAttribute("position",new Ot(this.p,3)),n.setAttribute("uv",new Ot(this.u,2)),n.setAttribute("aFade",new Ot(this.a,1)),n.computeVertexNormals();const s=new $t(n,t);return s.receiveShadow=!0,s.renderOrder=e,s}}function ii(i){this.rings=[],this.grid=new Map,this.CELL=48;for(const t of i||[])for(const e of t){if(!e||e.length<6)continue;let n=1/0,s=-1/0,r=1/0,o=-1/0;for(let c=0;c<e.length;c+=2)n=Math.min(n,e[c]),s=Math.max(s,e[c]),r=Math.min(r,e[c+1]),o=Math.max(o,e[c+1]);const a=this.rings.length;this.rings.push(e);for(let c=Math.floor(n/this.CELL);c<=Math.floor(s/this.CELL);c++)for(let l=Math.floor(r/this.CELL);l<=Math.floor(o/this.CELL);l++){const h=`${c},${l}`;this.grid.has(h)||this.grid.set(h,[]),this.grid.get(h).push(a)}}}ii.prototype.contains=function(i,t){const e=this.grid.get(`${Math.floor(i/this.CELL)},${Math.floor(t/this.CELL)}`);if(!e)return!1;let n=!1;for(const s of e){const r=this.rings[s];for(let o=0,a=r.length-2;o<r.length;a=o,o+=2){const c=r[o+1],l=r[a+1];c>t!=l>t&&i<(r[a]-r[o])*(t-c)/(l-c)+r[o]&&(n=!n)}}return n};const sn=.85;function $i(i,t,e,n,s,r,o,a,c,l,h){if(!i?.length)return;const u=new ii(i),f=(g,x,m,d)=>Math.abs(g-m)<.01&&Math.abs(g/l-Math.round(g/l))<1e-4||Math.abs(x-d)<.01&&Math.abs(x/l-Math.round(x/l))<1e-4,p=(g,x,m)=>[g,s(g,x)+m,x];for(const g of i)for(const x of g){const m=x.length>>1;if(m<3)continue;const d=[];for(let M=0;M<m;M++){const v=(M+1)%m,_=x[M*2],b=x[M*2+1],S=x[v*2],w=x[v*2+1],T={x0:_,z0:b,x1:S,z1:w,mode:"skip",ox:0,oz:0};d.push(T);const E=Math.hypot(S-_,w-b);if(E<.08||f(_,b,S,w))continue;const y=-(w-b)/E,R=(S-_)/E,O=(_+S)/2,U=(b+w)/2;let B=!1;for(const I of[1,-1])if(!u.contains(O+y*I*.35,U+R*I*.35)){T.ox=y*I,T.oz=R*I,B=!0;break}if(!B||r(O+T.ox*.55,U+T.oz*.55))continue;let D=null;for(const I of o)if(I.index.contains(O+T.ox*.7,U+T.oz*.7)){D=I.kind;break}if(D){h&&D==="asphalt"&&(T.mode="curb");continue}T.mode="skirt"}for(const M of d){const v=Math.hypot(M.x1-M.x0,M.z1-M.z0),_=Math.max(1,Math.ceil(v/hs));for(let b=0;b<_;b++){const S=M.x0+(M.x1-M.x0)*b/_,w=M.z0+(M.z1-M.z0)*b/_,T=M.x0+(M.x1-M.x0)*(b+1)/_,E=M.z0+(M.z1-M.z0)*(b+1)/_;if(M.mode==="skirt"){const y=S+M.ox*sn,R=w+M.oz*sn,O=T+M.ox*sn,U=E+M.oz*sn,B=(D,I)=>[D/n,I/n];a.quad(p(S,w,t),p(T,E,t),p(O,U,e),p(y,R,e),B(S,w),B(T,E),B(O,U),B(y,R),1,1,0,0)}else if(M.mode==="curb"){const y=s(S,w)+e,R=s(T,E)+e,O=t-e;c.quad([S,y,w],[T,R,E],[T,R+O,E],[S,y+O,w],[0,0],[1,0],[1,1],[0,1])}}}for(let M=0;M<m;M++){const v=d[(M-1+m)%m],_=d[M];if(v.mode!=="skirt"||_.mode!=="skirt")continue;const b=_.x0,S=_.z0,w=b+v.ox*sn,T=S+v.oz*sn,E=b+_.ox*sn,y=S+_.oz*sn;if(Math.hypot(w-E,T-y)<.04)continue;const R=(O,U)=>[O/n,U/n];a.tri(p(b,S,t),p(w,T,e),p(E,y,e),R(b,S),R(w,T),R(E,y),1,0,0)}}}function cx(i,t,e,n,s,r,o){if(!i?.length)return;const a=new ii(i),c=(u,f,p,g)=>Math.abs(u-p)<.01&&Math.abs(u/r-Math.round(u/r))<1e-4||Math.abs(f-g)<.01&&Math.abs(f/r-Math.round(f/r))<1e-4,l=(u,f)=>[u,s(u,f)+e,f],h=(u,f)=>[u/n,f/n];for(const u of i)for(const f of u){const p=f.length>>1;if(p<3)continue;const g=[];for(let x=0;x<p;x++){const m=(x+1)%p,d=f[x*2],M=f[x*2+1],v=f[m*2],_=f[m*2+1],b={x0:d,z0:M,x1:v,z1:_,ix:0,iz:0,on:!1};g.push(b);const S=Math.hypot(v-d,_-M);if(S<.15||c(d,M,v,_))continue;const w=-(_-M)/S,T=(v-d)/S,E=(d+v)/2,y=(M+_)/2;for(const O of[1,-1])if(a.contains(E+w*O*.4,y+T*O*.4)&&!a.contains(E-w*O*.4,y-T*O*.4)){b.ix=w*O,b.iz=T*O,b.on=!0;break}if(!b.on)continue;const R=Math.max(1,Math.ceil(S/hs));for(let O=0;O<R;O++){const U=d+(v-d)*O/R,B=M+(_-M)*O/R,D=d+(v-d)*(O+1)/R,I=M+(_-M)*(O+1)/R,z=U+b.ix*t,F=B+b.iz*t,Y=D+b.ix*t,j=I+b.iz*t;o.quad(l(U,B),l(D,I),l(Y,j),l(z,F),h(U,B),h(D,I),h(Y,j),h(z,F))}}for(let x=0;x<p;x++){const m=g[(x-1+p)%p],d=g[x];if(!m.on||!d.on)continue;const M=d.x0,v=d.z0,_=M+m.ix*t,b=v+m.iz*t,S=M+d.ix*t,w=v+d.iz*t;Math.hypot(_-S,b-w)<.04||o.tri(l(M,v),l(_,b),l(S,w),h(M,v),h(_,b),h(S,w))}}}function Mi(i){const t=new Vt({map:i,side:pe,alphaToCoverage:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});return t.customProgramCacheKey=()=>"surf-fade",t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float aFade;
varying float vFade;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vFade = aFade;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vFade;`).replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;",`diffuseColor.a *= vFade;
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;`)},t}function lx(i,t=[]){const e=[];for(let r=0;r<i.length;r+=2)e.push({x:i[r],z:i[r+1],e:t.map(o=>o[r/2])});const n=[e[0]];for(let r=1;r<e.length;r++){const o=e[r-1],a=e[r],c=Math.hypot(a.x-o.x,a.z-o.z),l=Math.max(1,Math.ceil(c/3));for(let h=1;h<=l;h++)n.push({x:o.x+(a.x-o.x)*h/l,z:o.z+(a.z-o.z)*h/l,e:o.e.map((u,f)=>u+(a.e[f]-u)*h/l)})}let s=0;return n.forEach((r,o)=>{const a=n[Math.max(0,o-1)],c=n[Math.min(n.length-1,o+1)];let l=c.x-a.x,h=c.z-a.z;const u=Math.hypot(l,h)||1;l/=u,h/=u,r.nx=-h,r.nz=l,o&&(s+=Math.hypot(r.x-n[o-1].x,r.z-n[o-1].z)),r.s=s}),n}const hs=6;function _n(i,t,e,n,s,r=null,o=null){for(const a of i){const c=g=>{const x=[];for(let m=0;m<g.length;m+=2){const d=g[m],M=g[m+1],v=g[(m+2)%g.length],_=g[(m+3)%g.length],b=Math.max(1,Math.ceil(Math.hypot(v-d,_-M)/hs));for(let S=0;S<b;S++)x.push(new pt(d+(v-d)*S/b,M+(_-M)*S/b))}return x},l=c(a[0]),h=a.slice(1).map(c),u=l.concat(...h),p=yn.triangulateShape(l,h).map(([g,x,m])=>[[u[g].x,u[g].y],[u[x].x,u[x].y],[u[m].x,u[m].y]]);for(;p.length;){const g=p.pop();let x=-1,m=(hs*1.6)**2;for(let b=0;b<3;b++){const S=g[b],w=g[(b+1)%3],T=(S[0]-w[0])**2+(S[1]-w[1])**2;T>m&&(m=T,x=b)}if(x<0){if(o){const b=(g[0][0]+g[1][0]+g[2][0])/3,S=(g[0][1]+g[1][1]+g[2][1])/3;if(o(b,S))continue}for(const[b,S]of g)s.p.push(b,r??t(b,S)+e,S),s.u.push(b/n,S/n);continue}const d=g[x],M=g[(x+1)%3],v=g[(x+2)%3],_=[(d[0]+M[0])/2,(d[1]+M[1])/2];p.push([d,_,v],[_,M,v])}}}function hx(i,t,e,n,s){if(!i?.length)return;const r=new ii(i);for(const o of i){const a=o[0],c=a.length>>1;if(!(c<3))for(let l=0;l<c;l++){const h=(l+1)%c,u=a[l*2],f=a[l*2+1],p=a[h*2],g=a[h*2+1],x=Math.hypot(p-u,g-f);if(x<.2)continue;let m=-(g-f)/x,d=(p-u)/x;const M=(u+p)/2,v=(f+g)/2;if(r.contains(M+m*.4,v+d*.4)&&(m=-m,d=-d),r.contains(M+m*.45,v+d*.45)||t-n(M+m,v+d)>.48)continue;const _=Math.max(1,Math.ceil(x/hs));for(let b=0;b<_;b++){const S=u+(p-u)*b/_,w=f+(g-f)*b/_,T=u+(p-u)*(b+1)/_,E=f+(g-f)*(b+1)/_,y=S+m*sn,R=w+d*sn,O=T+m*sn,U=E+d*sn,B=(z,F)=>[z/e,F/e],D=(z,F)=>[z,t,F],I=(z,F)=>[z,n(z,F)+.2,F];s.quad(D(S,w),D(T,E),I(O,U),I(y,R),B(S,w),B(T,E),B(O,U),B(y,R),1,1,0,0)}}}}function ux(i,t,e=()=>!1){const n=new Ce;n.name="streets";const s=new Ze,r=new Ze,o=new Ze,a=new Ze,c=new Ze,l=new Ze,h=new Ze,u=new Ze,f=new Ze,p=new Ze,g=new Ze,x=new Ze,m=new Ze,d=new vi,M=new vi,v=new vi,_=new vi,b=new vi,S=new vi,w=new vi,T=.2,E=.12,y=.08,R=i.junctions,O=(_t,at,G)=>R.some(([$,L,ot])=>Math.abs($-_t)<ot+G&&Math.abs(L-at)<ot+G&&Math.hypot($-_t,L-at)<ot+G),U=i.surf;U.plaza=U.plaza||[];const B=ax(U.plaza);_n(U.asphalt,t,T,4,s),_n(U.walk,t,T+E,1.6,r),_n(U.paving,t,T+.04,2.2,c),_n(B.ve3,t,0,2.2,x,un,X_),_n(B.brick,t,T+y,2.2,m),hx(B.ve3,un,2.2,t,w),_n(B.herring,t,T+y,2.4,l),_n(B.other,t,T+y,2.8,h),_n(B.drive,t,T+.012,4,u),_n(B.garden,t,T-.02,3.2,f),_n(B.red,t,T+.06,2.2,p),cx(B.garden,2.6,T+.08,2.2,t,U.tile,g);const D={asphalt:new ii(U.asphalt),walk:new ii(U.walk),paving:new ii(U.paving),plaza:new ii(U.plaza)},I=(..._t)=>_t.map(at=>({kind:at,index:D[at]})),z=I("asphalt","walk","paving","plaza");$i(U.asphalt,T,T,4,t,e,I("walk","paving","plaza"),d,o,U.tile,!1),$i(U.paving,T+.04,T+.04,2.2,t,e,I("asphalt","walk","plaza"),M,o,U.tile,!1),$i(B.herring,T+y,T,2.4,t,e,z,v,o,U.tile,!0),$i(B.other,T+y,T,2.8,t,e,z,_,o,U.tile,!0),$i(B.drive,T+.012,T,4,t,e,z,b,o,U.tile,!1),$i(B.red,T+.06,T,2.2,t,e,z,S,o,U.tile,!0);const F=(_t,at,G,$)=>Math.abs(_t-G)<.01&&Math.abs(_t/U.tile-Math.round(_t/U.tile))<1e-4||Math.abs(at-$)<.01&&Math.abs(at/U.tile-Math.round(at/U.tile))<1e-4;for(const _t of U.walk)for(const at of _t)for(let G=0;G<at.length;G+=2){const $=(G+2)%at.length,L=at[G],ot=at[G+1],Q=at[$],ct=at[$+1];if(F(L,ot,Q,ct))continue;const st=Math.hypot(Q-L,ct-ot)||1,Mt=(L+Q)/2,ft=(ot+ct)/2,P=-(ct-ot)/st*.4,A=(Q-L)/st*.4;if(e(Mt+P,ft+A)||e(Mt-P,ft-A))continue;const q=Math.max(1,Math.ceil(st/hs));for(let tt=0;tt<q;tt++){const lt=L+(Q-L)*tt/q,nt=ot+(ct-ot)*tt/q,At=L+(Q-L)*(tt+1)/q,vt=ot+(ct-ot)*(tt+1)/q,bt=t(lt,nt)+T,kt=t(At,vt)+T;o.quad([lt,bt,nt],[At,kt,vt],[At,kt+E,vt],[lt,bt+E,nt],[0,0],[1,0],[1,1],[0,1])}}for(const _t of i.roads){if(!_t.mk)continue;const at=lx(_t.p);for(let G=1;G<at.length;G++){const $=at[G-1],L=at[G];if(Math.floor($.s/3)%2||O($.x,$.z,2)||O(L.x,L.z,2))continue;const ot=.07,Q=(ct,st)=>{const Mt=ct.x+ct.nx*st,ft=ct.z+ct.nz*st;return[Mt,t(Mt,ft)+T+.03,ft]};a.quad(Q($,ot),Q($,-ot),Q(L,-ot),Q(L,ot),[0,0],[1,0],[1,1],[0,1])}}for(const[_t,at,G,$]of i.crossings){const L=Math.sin(G),ot=Math.cos(G),Q=-ot,ct=L,st=Math.max(3,Math.floor($/1));for(let Mt=0;Mt<st;Mt++){const ft=-$/2+.25+Mt*($-.5)/Math.max(1,st-1),P=_t+Q*ft,A=at+ct*ft,q=(tt,lt)=>{const nt=P+L*tt+Q*lt,At=A+ot*tt+ct*lt;return[nt,t(nt,At)+T+.03,At]};a.quad(q(-1.5,-.25),q(-1.5,.25),q(1.5,.25),q(1.5,-.25),[0,0],[1,0],[1,1],[0,1])}}const Y=_t=>(_t.side=pe,_t.polygonOffset=!0,_t.polygonOffsetFactor=-2,_t.polygonOffsetUnits=-2,_t),j=_t=>_t&&n.add(_t),V=ix(),rt=ex(),dt=Do("beige"),H=Do("red"),Z=sx(),ht=Do("brick"),it=Y(new Vt({map:rt}));j(s.mesh(it,1)),j(u.mesh(it,1)),j(r.mesh(new Vt({map:nx(),side:pe}),2)),j(o.mesh(new Vt({color:14998736,side:pe}),2));const mt=Y(new Vt({color:15921902}));mt.polygonOffsetFactor=-6,mt.polygonOffsetUnits=-6,j(a.mesh(mt,3)),j(c.mesh(Y(new Vt({map:V})),1)),j(l.mesh(Y(new Vt({map:dt})),1)),j(x.mesh(Y(new Vt({map:ht,color:8013372})),1)),j(m.mesh(Y(new Vt({map:ht})),1)),j(h.mesh(Y(new Vt({map:V})),1)),j(f.mesh(Y(new Vt({map:Z})),1));const Rt=Y(new Vt({map:H}));return j(p.mesh(Rt,1)),j(g.mesh(Rt,2)),j(d.mesh(Mi(rt),3)),j(M.mesh(Mi(V),3)),j(v.mesh(Mi(dt),3)),j(_.mesh(Mi(V),3)),j(b.mesh(Mi(rt),3)),j(S.mesh(Mi(H),3)),j(w.mesh(Mi(ht),3)),n.add(K_(t,B.ve3)),n.add(px(i.benches,t)),n.add(fx(i.walls||[],t)),n.add(dx(i.lamps||[],t)),n}function fx(i,t){const e=[[1.8,.25,14275009],[1.4,.4,11050378],[1,.45,9800312],[1.5,.05,3753531]],n=[],s=[],r=new Nt,o=(l,h,u,f,p,g)=>{const x=h[0]-l[0],m=h[1]-l[1],d=Math.hypot(x,m);if(d<.05)return;const M=-m/d*f/2,v=x/d*f/2,_=(S,w,T)=>[S[0]+M*w,T,S[1]+v*w],b=(S,w,T,E)=>{n.push(...S,...w,...T,...S,...T,...E);for(let y=0;y<6;y++)s.push(r.r,r.g,r.b)};for(const S of[1,-1])b(_(l,S,p),_(h,S,g),_(h,S,g+u),_(l,S,p+u));b(_(l,1,p+u),_(h,1,g+u),_(h,-1,g+u),_(l,-1,p+u))};for(const l of i){const[h,u,f]=e[l.k];r.setHex(f);for(let p=2;p<l.p.length;p+=2){const g=[l.p[p-2],l.p[p-1]],x=[l.p[p],l.p[p+1]],m=Math.max(1,Math.ceil(Math.hypot(x[0]-g[0],x[1]-g[1])/8));for(let d=0;d<m;d++){const M=[g[0]+(x[0]-g[0])*d/m,g[1]+(x[1]-g[1])*d/m],v=[g[0]+(x[0]-g[0])*(d+1)/m,g[1]+(x[1]-g[1])*(d+1)/m];o(M,v,h,u,t(...M)-.3,t(...v)-.3)}}}const a=new Kt;a.setAttribute("position",new Ot(n,3)),a.setAttribute("color",new Ot(s,3)),a.computeVertexNormals();const c=new $t(a,new Vt({vertexColors:!0,side:pe}));return c.castShadow=c.receiveShadow=!0,c.name="walls",c}function dx(i,t){const e=new Ce;if(e.name="lamps",!i.length)return e;const n=new Fe(.06,.09,6.5,6);n.translate(0,3.25,0);const s=new Zt(.06,.06,1.3);s.translate(0,6.4,.6);const r=new Zt(.28,.12,.55);r.translate(0,6.33,1.2);const o=new Vt({color:4869970}),a=new Vt({color:16774358,emissive:16760944,emissiveIntensity:.1}),c=new jt,l=new Ee,h=new N(1,1,1),u=new N,f=new N(0,1,0);for(const[T,E]of[[n,o],[s,o],[r,a]]){const y=new ui(T,E,i.length);i.forEach(([R,O,U],B)=>{l.setFromAxisAngle(f,U),c.compose(u.set(R,t(R,O)+.3,O),l,h),y.setMatrixAt(B,c)}),y.castShadow=!0,e.add(y)}const p=document.createElement("canvas");p.width=p.height=256;const g=p.getContext("2d"),x=g.createRadialGradient(128,128,0,128,128,128);x.addColorStop(0,"rgba(255,226,186,0.50)"),x.addColorStop(.08,"rgba(255,210,155,0.22)"),x.addColorStop(.22,"rgba(255,196,130,0.08)"),x.addColorStop(.42,"rgba(255,184,114,0.025)"),x.addColorStop(.62,"rgba(255,176,100,0)"),x.addColorStop(1,"rgba(255,170,90,0)"),g.fillStyle=x,g.fillRect(0,0,256,256);const m=new bn(p);m.colorSpace=he;const d=new ks({map:m,transparent:!0,depthWrite:!1,blending:Ps,opacity:0,fog:!1,polygonOffset:!0,polygonOffsetFactor:-8,polygonOffsetUnits:-8}),M=new Sn(18,18);M.rotateX(-Math.PI/2);const v=new ui(M,d,i.length),_=new Float32Array(i.length*3);i.forEach(([T,E,y],R)=>{const O=T+Math.sin(y)*1.2,U=E+Math.cos(y)*1.2;c.compose(u.set(O,t(O,U)+.36,U),l.identity(),h),v.setMatrixAt(R,c),_.set([O,t(T,E)+.3+6.25,U],R*3)}),v.renderOrder=4,v.frustumCulled=!1;const b=new Kt;b.setAttribute("position",new xe(_,3));const S=new $a({map:m,size:16,transparent:!0,depthWrite:!1,blending:Ps,opacity:0,sizeAttenuation:!0}),w=new xh(b,S);return w.frustumCulled=!1,e.add(v,w),e.userData.night=T=>{d.opacity=T*.4,S.opacity=T*.85,a.emissiveIntensity=.2+T*1.2,v.visible=w.visible=T>.01},e}function px(i,t){const e=new Ce;if(!i.length)return e;const n=new Zt(1.8,.08,.45);n.translate(0,.45,0);const s=new Zt(1.8,.45,.06);s.translate(0,.72,-.2);const r=new Zt(.06,.42,.4);r.translate(-.8,.21,0);const o=new Zt(.06,.42,.4);o.translate(.8,.21,0);const a=new Vt({color:9067835}),c=new Vt({color:3095091}),l=[[n,a],[s,a],[r,c],[o,c]],h=new jt,u=new Ee,f=new N(1,1,1),p=new N;for(const[g,x]of l){const m=new ui(g,x,i.length);i.forEach(([d,M],v)=>{u.setFromAxisAngle(new N(0,1,0),(d*13+M*7)%6.28),h.compose(p.set(d,t(d,M)+.07,M),u,f),m.setMatrixAt(v,h)}),m.castShadow=!0,e.add(m)}return e}const Dr=new N(0,1,0);function mx(i,t){return Math.atan2(-t,i)}function gx(i,t,e,n,s,r,o,a){const c=e-i,l=n-t,h=Math.hypot(c,l);if(h<.4)return;const u=c/h,f=l/h,p=mx(u,f),g=Math.max(2,Math.round(h/.14));for(let m=0;m<=g;m++){const d=m/g,M=i+c*d,v=t+l*d,_=s(M,v)+.28,b=m%12===0;(b?o:r).push(M,_+(b?.62:.52),v,p)}const x=Math.max(1,Math.ceil(h/2.2));for(let m=0;m<x;m++){const d=(m+.5)/x,M=i+c*d,v=t+l*d,_=s(M,v)+.28;a.push(M,_+.42,v,p,h/x),a.push(M,_+1.02,v,p,h/x)}}function Io(i,t,e,n){if(!e.length)return null;const s=new ui(i,t,e.length),r=new jt,o=new Ee,a=new N(1,1,1),c=new N;return e.forEach((l,h)=>{n(l,c,o,a),r.compose(c,o,a),s.setMatrixAt(h,r)}),s.castShadow=!0,s.receiveShadow=!0,s}function zl(i,t,e,n,s,r,o){const a=t(e,n)+.25,c=new Ee().setFromAxisAngle(Dr,s),l=(h,u,f,p,g)=>{const x=new $t(h,u);x.position.set(p,f,g).applyQuaternion(c).add(new N(e,a,n)),x.quaternion.copy(c),x.castShadow=!0,i.add(x)};l(r.pole,o.metal,r.poleH/2,0,0);for(const h of r.arms)l(r.arm,o.metal,r.armY,h*.7,0),l(r.head,o.light,r.headY,h,0)}function _x(i){const t=new Ce;t.name="plaza-props";const e=new Vt({color:1842722}),n=new Vt({color:4869970}),s=new Vt({color:16774880,emissive:16769712,emissiveIntensity:.2}),r=new Vt({color:16774358,emissive:16760944,emissiveIntensity:.12}),o=new Vt({color:14011320}),a=new Vt({color:4876856}),c=new Vt({color:9067835}),l=new Vt({color:5981746}),h=new Vt({color:3889708}),u=[3.2,1.3],f=[[[11.37,-11.75],[17.16,7.68]],[[-5.03,14.29],[-10.82,-5.14]]],p=[],g=[],x=[];for(const[[at,G],[$,L]]of f){const ot=(at+$)/2,Q=(G+L)/2;let ct=ot-u[0],st=Q-u[1],Mt=Math.hypot(ct,st)||1;ct/=Mt,st/=Mt;const ft=1.35;gx(at+ct*ft,G+st*ft,$+ct*ft,L+st*ft,i,p,g,x)}const m=(at,G)=>{const $=[];for(let L=0;L<at.length;L+=G)$.push(at.slice(L,L+G));return $},d=m(p,4),M=m(g,4),v=m(x,5),_=new Zt(.018,1.02,.018),b=new Zt(.055,1.22,.055),S=new Zt(1,.028,.02),w=(at,G,$,L)=>{G.set(at[0],at[1],at[2]),$.setFromAxisAngle(Dr,at[3])};for(const at of[Io(_,e,d,w),Io(b,e,M,w),Io(S,e,v,(G,$,L,ot)=>{$.set(G[0],G[1],G[2]),L.setFromAxisAngle(Dr,G[3]),ot.set(G[4],1,1)})])at&&t.add(at);const T=[-10.82,-5.14],E=[11.37,-11.75],y=(T[0]+E[0])/2,R=(T[1]+E[1])/2;let O=-8.54-y,U=-31.15-R,B=Math.hypot(O,U)||1;O/=B,U/=B;const D=E[0]-T[0],I=E[1]-T[1],z=Math.hypot(D,I)||1,F=[];for(const at of[-1,1])F.push([y+O*5.2+D/z*at*9,R+U*5.2+I/z*at*9]);for(const[[at,G],[$,L]]of f){const ot=(at+$)/2,Q=(G+L)/2;let ct=ot-u[0],st=Q-u[1],Mt=Math.hypot(ct,st)||1;ct/=Mt,st/=Mt;for(const ft of[.22,.55,.82])F.push([at+($-at)*ft+ct*2.3,G+(L-G)*ft+st*2.3])}const Y=new Fe(.05,.07,4,7),j=new Zt(.04,.04,.35),V=new Bn(.28,12,10);for(const[at,G]of F)zl(t,i,at,G,0,{pole:Y,poleH:4,arm:j,arms:[0],armY:4.05,head:V,headY:4.35},{metal:n,light:s});const rt=[[-178,-43,-158,-30],[-154,-43,-138,-30]];for(const[at,G,$,L]of rt){const ot=(at+$)/2,Q=(G+L)/2,ct=i(ot,Q)+.2,st=$-at,Mt=L-G,ft=.4,P=.26,A=new $t(new Zt(st-P,.26,Mt-P),a);A.position.set(ot,ct+.13,Q),A.receiveShadow=!0,t.add(A);const q=[[ot,ct+ft/2,G,st,ft,P,0],[ot,ct+ft/2,L,st,ft,P,0],[at,ct+ft/2,Q,P,ft,Mt,0],[$,ct+ft/2,Q,P,ft,Mt,0]];for(const[tt,lt,nt,At,vt,bt]of q){const kt=new $t(new Zt(At,vt,bt),o);kt.position.set(tt,lt,nt),kt.castShadow=kt.receiveShadow=!0,t.add(kt)}}const dt=new Gr(1,0),H=new Fe(.1,.15,1,6);for(const[at,G,$,L]of[[-172,-37,6.2,2.3],[-164,-36.5,5.4,2],[-148,-37,6,2.2],[-142,-36,5.2,1.9],[-168,-33,4.6,1.7],[-146,-33.5,4.4,1.6]]){const ot=i(at,G)+.35,Q=new $t(H,l);Q.scale.set(1,$*.45,1),Q.position.set(at,ot+$*.22,G),Q.castShadow=!0;const ct=new $t(dt,h);ct.scale.set(L,$*.38,L),ct.position.set(at,ot+$*.62,G),ct.castShadow=!0,t.add(Q,ct)}const Z=new Zt(1.7,.08,.42),ht=new Zt(1.7,.42,.06),it=new Zt(.06,.4,.36);for(const[at,G]of[[-176,-21.2],[-160,-20.8],[-146,-21],[-134.2,-36]]){const $=i(at,G)+.3,L=new Ee().setFromAxisAngle(Dr,0),ot=(Q,ct,st,Mt,ft)=>{const P=new $t(Q,ct);P.position.set(Mt,st,ft).applyQuaternion(L),P.position.add(new N(at,$,G)),P.castShadow=!0,t.add(P)};ot(Z,c,.46,0,0),ot(ht,c,.72,0,-.18),ot(it,e,.22,-.75,0),ot(it,e,.22,.75,0)}const mt=new Fe(.06,.08,6.4,7),Rt=new Zt(1.5,.05,.05),_t=new Zt(.28,.1,.42);for(const[at,G,$]of[[-166,-16,Math.PI/2],[-150,-16,Math.PI/2],[-170,-50,Math.PI/2],[-146,-50,0]])zl(t,i,at,G,$,{pole:mt,poleH:6.4,arm:Rt,arms:[-.85,.85],armY:6.15,head:_t,headY:6.05},{metal:n,light:r});return t.userData.night=at=>{s.emissiveIntensity=.15+at*1.5,r.emissiveIntensity=.1+at*1.2},t}class Os{constructor(t,e,n,s){const r=Math.hypot(n,s);n/=r,s/=r,this.m=new jt().makeBasis(new N(s,0,-n),new N(0,1,0),new N(n,0,s)).setPosition(t,0,e),this.parts=[]}add(t,e){const n=t.index?t.toNonIndexed():t,s=new Kt;s.setAttribute("position",n.attributes.position),s.applyMatrix4(this.m);const r=new Nt(e),o=s.attributes.position.count,a=new Float32Array(o*3);for(let c=0;c<o;c++)a.set([r.r,r.g,r.b],c*3);return s.setAttribute("color",new xe(a,3)),this.parts.push(s),this}box(t,e,n,s,r,o,a){const c=new Zt(Math.abs(e-t),Math.abs(s-n),Math.abs(o-r));return c.translate((t+e)/2,(n+s)/2,(r+o)/2),this.add(c,a)}arch(t,e,n,s,r,o,a=.08){const c=new oi,l=e/2,h=s-l;c.moveTo(t-l,n),c.lineTo(t+l,n),c.lineTo(t+l,h),c.absarc(t,h,l,0,Math.PI,!1),c.lineTo(t-l,n);const u=new On(c,{depth:a,bevelEnabled:!1,curveSegments:10});return u.translate(0,0,r-a/2),this.add(u,o)}pediment(t,e,n,s,r,o,a){const c=new oi;c.moveTo(t,n),c.lineTo(e,n),c.lineTo((t+e)/2,s),c.lineTo(t,n);const l=new On(c,{depth:o-r,bevelEnabled:!1});return l.translate(0,0,r),this.add(l,a)}gable(t,e,n,s,r,o,a){const c=new oi;c.moveTo(t,n),c.lineTo(e,n),c.lineTo((t+e)/2,s),c.lineTo(t,n);const l=new On(c,{depth:o-r,bevelEnabled:!1});return l.translate(0,0,r),this.add(l,a)}cyl(t,e,n,s,r,o,a,c=16){const l=new Fe(o,r,s,c);return l.translate(t,n+s/2,e),this.add(l,a)}dome(t,e,n,s,r,o){const a=new Bn(s,16,8,0,Math.PI*2,0,Math.PI/2);return a.scale(1,r/s,1),a.translate(t,n,e),this.add(a,o)}rail(t,e,n,s,r,o,a){const c=r-n,l=s-e,h=Math.hypot(c,l)||.01,u=new Zt(o,o,h);return u.rotateX(-Math.atan2(l,c)),u.translate(t,(e+s)/2,(n+r)/2),this.add(u,a)}mesh(t){const e=ei(this.parts);e.computeVertexNormals();const n=new Vt({vertexColors:!0,side:pe});n.onBeforeCompile=r=>{r.uniforms.uNight=ai,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying float vY;`).replace("#include <project_vertex>",`#include <project_vertex>
vY = (modelMatrix * vec4(transformed, 1.0)).y;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight; varying float vY;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * vec3(1.0, 0.78, 0.5) * uNight * 0.38;`)};const s=new $t(e,n);return s.name=t,s.castShadow=s.receiveShadow=!0,s}}function Bh(i,t){const e=[];for(let f=0;f<i.length;f+=2)e.push([i[f],i[f+1]]);let n=0,s=0;for(const[f,p]of e)n+=f,s+=p;n/=e.length,s/=e.length;let r=null;for(let f=0;f<e.length;f++){const[p,g]=e[f],[x,m]=e[(f+1)%e.length],d=Math.hypot(x-p,m-g);if(d<4)continue;let M=-(m-g)/d,v=(x-p)/d;const _=(p+x)/2,b=(g+m)/2;(_-n)*M+(b-s)*v<0&&(M=-M,v=-v);const S=M*t[0]+v*t[1]+d*.004;(!r||S>r.score)&&(r={score:S,mx:_,mz:b,wx:M,wz:v,L:d})}const o=r.wz,a=-r.wx;let c=1/0,l=-1/0,h=0;for(const[f,p]of e){const g=(f-r.mx)*o+(p-r.mz)*a,x=(f-r.mx)*r.wx+(p-r.mz)*r.wz;c=Math.min(c,g),l=Math.max(l,g),h=Math.min(h,x)}const u=(c+l)/2;return{ox:r.mx+o*u,oz:r.mz+a*u,wx:r.wx,wz:r.wz,W:l-c,D:-h}}function xx(i,t){const e=t?[t.x-0,t.z-0]:[0,-1],n=Bh(i.r,e),s=new Os(n.ox,n.oz,n.wx,n.wz),r=i.g,o=n.W,a=n.D,c=o/2,l=15392712,h=16052196,u=2830648,f=11887165,p=14012096,g=1842722,x=r+.9,m=r+11.6;s.box(-c,c,r-.6,m,-a,0,l),s.box(-c-.05,c+.05,r-.6,x,-a-.05,.05,p),s.box(-c-.12,c+.12,r+5.4,r+5.75,-a-.12,.12,h),s.box(-c-.45,c+.45,m-.2,m+.35,-a-.45,.45,h),s.box(-c,c,m+.35,m+1.4,-.4,0,h),s.box(-c,c,m+.35,m+1.4,-a,-a+.4,h),s.box(-c,-c+.4,m+.35,m+1.4,-a,0,h),s.box(c-.4,c,m+.35,m+1.4,-a,0,h);const d=3.2;for(const[D,I,z]of[[[-c+.4,-.4],[c-.4,-.4],[0,-a/2]],[[c-.4,-.4],[c-.4,-a+.4],[0,-a/2]],[[c-.4,-a+.4],[-c+.4,-a+.4],[0,-a/2]],[[-c+.4,-a+.4],[-c+.4,-.4],[0,-a/2]]]){const F=new Kt;F.setAttribute("position",new Ot([D[0],m+.4,D[1],I[0],m+.4,I[1],z[0],m+.4+d,z[1]],3)),s.add(F,f)}const M=Math.min(8.4,o*.36),v=M/2;s.box(-v,v,r-.6,m,0,.7,l),s.box(-v-.1,v+.1,m-.2,m+.35,0,1.15,h),s.box(-v,v,m+.35,m+2.1,.3,.7,h);for(const D of[-1,1]){for(const I of[0,.75])s.box(D*(v-I)-.28,D*(v-I)+.28,x,m-.2,.7,.95,h),s.box(D*(c-I)-.28,D*(c-I)+.28,x,m-.2,0,.25,h);s.box(D*v-1,D*v+1,m+.35,m+2.6,.45,.85,h),s.box(D*v-.6,D*v+.6,m+.8,m+2.2,.85,.95,14208179)}for(let D=r+.15;D<m-.3;D+=.46)s.box(-c+.3,c-.3,D,D+.028,.02,.05,13222064),s.box(-v+.2,v-.2,D,D+.028,.72,.78,13616820);for(const D of[-3.72,-1.42,1.42,3.72])s.cyl(D,1.02,x,.16,.36,.32,p,12),s.cyl(D,1.02,x+.16,r+5.35-(x+.16),.26,.22,h,14),s.cyl(D,1.02,r+5.32,.22,.32,.36,h,12);s.box(-v+.15,v-.15,r+5.48,r+5.82,.78,1.28,h);const _=(D,I,z,F)=>{const Y=Math.max(5,Math.round(I*2/.13));for(let j=0;j<=Y;j++){const V=D-I+I*2*j/Y;s.box(V-.012,V+.012,z,F,.9,.94,g);const rt=new Is(.03,.11,4);rt.translate(V,F+.05,.92),s.add(rt,g)}for(const j of[z+.1,z+(F-z)*.46,F-.08])s.box(D-I,D+I,j,j+.03,.9,.95,g);for(const j of[-1,1]){const V=new Ur(Math.min(.2,I*.32),.018,6,14);V.translate(D+j*I*.45,z+(F-z)*.62,.96),s.add(V,g);const rt=new Ur(.09,.014,5,10);rt.translate(D+j*I*.16,z+(F-z)*.36,.96),s.add(rt,g)}};for(const D of[-2.6,0,2.6]){const I=D===0,z=I?2.05:1.32,F=r+(I?4.55:4.15);s.arch(D,1.55,r+6.2,r+9.6,.72,u),s.arch(D,1.95,r+6,r+9.85,.7,h,.05),s.arch(D,z+.32,x-.02,F+.22,.62,h,.08),s.arch(D,z,x+.02,F,.74,I?3811874:u),_(D,z*.4,x+.12,F-.28)}s.box(-v+.35,v-.35,r+5.82,r+6.02,.85,1.62,h),s.box(-v+.35,v-.35,r+6.82,r+7.02,1.4,1.62,h);for(let D=-v+.6;D<v-.45;D+=.26)s.box(D-.045,D+.045,r+6.02,r+6.82,1.46,1.56,14537924);const b=[];for(let D=v+1.6;D<c-1.2;D+=2.6)b.push(D);for(const D of[-1,1])for(const I of b){const z=D*I;for(const[F,Y]of[[r+1.8,r+4.3],[r+6.6,r+9.3]])s.box(z-.85,z+.85,F-.15,Y+.15,0,.12,h),s.box(z-.62,z+.62,F,Y,.12,.16,u);s.pediment(z-1,z+1,r+9.5,r+10.2,0,.3,h)}const S=(D,I)=>{for(let z=2.2;z<D-1.5;z+=3)for(const[F,Y]of[[r+1.8,r+4.3],[r+6.6,r+9.3]])I(z,F,Y)};S(a,(D,I,z)=>{for(const F of[-1,1])s.box(F*c-.1,F*c+.1,I,z,-D-.6,-D+.6,u)}),S(o,(D,I,z)=>s.box(-c+D-.6,-c+D+.6,I,z,-a-.1,-a+.1,u));const w=7,T=v+2.6,E=1.55,y=.38,R=(x-un)/w;s.box(-T+.6,T-.6,x-.05,x+.01,.02,E,p);for(let D=0;D<w;D++){const I=x-D*R,z=I-R,F=E+D*y,Y=F+y,j=D*.03;s.box(-T+j,T-j,z,I+.012,F,Y,p)}const O=E+w*y,U=(D,I,z,F)=>{s.cyl(D,I,z,.4*F,.2*F,.32*F,12870202,12),s.cyl(D,I,z+.38*F,.08*F,.36*F,.34*F,13927509,12),s.cyl(D,I,z+.44*F,.16*F,.05*F,.07*F,6047284,8);for(let Y=0;Y<11;Y++){const j=Y/11*Math.PI*2,V=new Zt(.055*F,.012*F,.85*F);V.translate(0,0,.38*F),V.rotateX(-.65),V.rotateY(j),V.translate(D,z+.68*F,I),s.add(V,Y%2?3107378:4094524)}};U(-T-.85,O+.35,un,1.35),U(T+.85,O+.15,un,1.2),U(-T+.15,O*.62,un,.85),U(T-.2,O*.55,un,.78),U(-v+.15,.95,x,.95),U(v-.2,1.05,x,.9);const B=(D,I)=>{const z=un,F=16053489;s.box(D-.22,D+.22,z+.42,z+.48,I-.2,I+.2,F),s.box(D-.21,D+.21,z+.48,z+.9,I-.2,I-.14,F);for(const Y of[-.16,.16])for(const j of[-.16,.16])s.box(D+Y-.018,D+Y+.018,z,z+.42,I+j-.018,I+j+.018,F)};for(let D=0;D<5;D++)B(T+1.15,1.35+D*.5);return s.mesh("municipio")}function vx(i){const t=new Os(i.x,i.z,0,1),e=un,n=3.35,s=14998992,r=16183784,o=12081730,a=7260372;return t.cyl(0,0,e+.02,.16,n+.95,n+.72,s,64),t.cyl(0,0,e+.16,.22,n+.08,n+.28,r,64),t.cyl(0,0,e+.2,.08,n-.15,n+.02,o,48),t.cyl(0,0,e+.12,.06,n-.28,n-.28,a,48),t.cyl(0,0,e+.14,.03,n-1.15,n-1.15,4892856,32),t.cyl(0,0,e+.16,.28,.42,.55,s,20),t.cyl(0,0,e+.44,.55,.16,.2,3947064,12),t.cyl(0,0,e+.96,.1,.34,.4,3025962,16),t.cyl(0,0,e+1.08,.55,.035,.02,14675694,6),t.mesh("fontana-delfini")}function Mx(i){const t=Bh(i.r,[0,-1]),e=new Os(t.ox,t.oz,t.wx,t.wz),n=i.g,s=Math.min(21,t.W),r=t.D,o=s/2,a=15985362,c=16315366,l=3354668,h=5913124,u=11558970,f=9343118,p=Math.min(11,s*.55),g=p/2,x=Math.min(9,r*.28),m=n+13,d=n+7.5;e.box(-g,g,n-.5,m,-r+x,0,a),e.gable(-g-.3,g+.3,m,m+3.2,-r+x,.1,u);for(const S of[-1,1]){e.box(S>0?g:-o,S>0?o:-g,n-.5,d,-r+x,-1.2,a);const w=new oi;w.moveTo(0,d),w.lineTo(o-g+.3,d-.2),w.lineTo(0,d+2),w.lineTo(0,d);const T=new On(w,{depth:r-x-1.2,bevelEnabled:!1});S<0&&T.scale(-1,1,1),T.translate(S*g,0,-r+x),e.add(T,u);for(let E=3;E<r-x-3;E+=4.2){const y=new oi,R=1.3,O=d-1.6;y.moveTo(-R,n+.8),y.lineTo(R,n+.8),y.lineTo(R,O),y.absarc(0,O,R,0,Math.PI,!1),y.lineTo(-R,n+.8);const U=new On(y,{depth:.06,bevelEnabled:!1});U.rotateY(Math.PI/2),U.translate(S*(o+.02),0,-E),e.add(U,c);const B=new oi,D=.55,I=m-1.8;B.moveTo(-D,m-3.6),B.lineTo(D,m-3.6),B.lineTo(D,I),B.absarc(0,I,D,0,Math.PI,!1),B.lineTo(-D,m-3.6);const z=new On(B,{depth:.06,bevelEnabled:!1});z.rotateY(Math.PI/2),z.translate(S*(g+.02),0,-E),e.add(z,l)}}const M=.5;e.box(-o,o,n-.5,n+9,0,M,a),e.box(-o-.04,o+.04,n-.5,n+.32,-.02,M+.04,13222836),e.box(-o-.2,o+.2,n+8.2,n+9.3,-.1,M+.3,c),e.box(-4,4,n+8.45,n+9,M+.3,M+.34,14469536),e.box(-g,g,n+9.3,n+15.6,0,M,a),e.box(-g-.25,g+.25,n+15.4,n+15.9,-.1,M+.3,c),e.pediment(-g-.4,g+.4,n+15.9,n+18.6,0,M+.2,c),e.pediment(-g+.6,g-.6,n+16.2,n+18,M+.2,M+.25,a),e.box(-.08,.08,n+18.6,n+20.4,M/2-.08,M/2+.08,3881787),e.box(-.5,.5,n+19.5,n+19.66,M/2-.08,M/2+.08,3881787);for(const S of[-o+.4,-g+.4,g-.4,o-.4,-2.2,2.2])e.box(S-.35,S+.35,n+.4,n+8.2,M,M+.25,c);for(const S of[-g+.45,g-.45])e.box(S-.35,S+.35,n+9.3,n+15.4,M,M+.25,c);for(const S of[-1,1]){const w=new Fe(1,1,.45,12,1,!1,0,Math.PI);w.rotateZ(Math.PI/2),w.rotateY(S>0?0:Math.PI),w.translate(S*(g+.9),n+9.4,M/2),e.add(w,c)}e.arch(0,2.5,n+.4,n+5.2,M+.05,h),e.pediment(-2,2,n+5.5,n+6.6,M,M+.35,c);for(const S of[-1,1])e.arch(S*5.2,1.5,n+.4,n+3.6,M+.05,h),e.arch(S*5.2,1.7,n+3.9,n+5.3,M+.05,c,.05);e.arch(0,1.4,n+10.5,n+13.9,M+.05,l);for(let S=0;S<4;S++)e.box(-3+S*.1,3-S*.1,n+.28,n+.28+.15*(S+1),M,M+.5+(4-S)*.35,13222062);{const S=-o-.2,w=-4.8,T=M+.15,E=M+3.5,y=n+.28,R=y+2.7,O=9278358,U=14148326,B=15987180,D=3814962;e.box(S,w,y,y+.1,T,E,B),e.box(S+.08,w-.08,y+.1,y+.72,E-.12,E-.02,B),e.box(S+.02,S+.1,y+.1,y+.72,T+.1,E-.1,B),e.box(w-.1,w-.02,y+.1,y+.72,T+.1,E-.1,B),e.box(S+.12,w-.5,y+.72,R-.42,E-.1,E-.02,U),e.box(w-1.15,w-.12,y+.72,R-.42,E-.1,E-.02,U),e.box(S+.02,S+.08,y+.72,R-.42,T+.15,E-.15,U),e.box(w-.08,w-.02,y+.72,R-.42,T+.15,E-.15,U);for(const I of[S+.06,(S+w)/2,w-.06])for(const z of[T+.06,E-.06])e.box(I-.045,I+.045,y+.1,R-.28,z-.045,z+.045,O);e.box(S-.12,w+.12,R-.32,R+.06,T-.08,E+.22,D),e.box(S+.35,w-.7,y+.95,y+1.08,T+.45,T+1.35,7034436)}e.box(-o,o,n-.5,n+11,-r,-r+x,a),e.box(-o-.2,o+.2,n+10.8,n+11.3,-r-.2,-r+x+.2,c);for(let S=-o+1.5;S<o-1;S+=2.8)for(const w of[n+1.5,n+5,n+8.2])e.box(S-.5,S+.5,w,w+1.6,-r-.08,-r+.02,l);const v=o-2.4,_=-r+2.4,b=2.3;e.box(v-b,v+b,n-.5,n+22,_-b,_+b,a),e.box(v-b-.2,v+b+.2,n+13.5,n+13.9,_-b-.2,_+b+.2,c),e.box(v-b-.25,v+b+.25,n+21.6,n+22.2,_-b-.25,_+b+.25,c);for(const[S,w]of[[-1,-1],[1,-1],[-1,1],[1,1]])e.box(v+S*b-.55,v+S*b+.55,n+22.2,n+26.8,_+w*b-.55,_+w*b+.55,a);e.box(v-b+.5,v+b-.5,n+22.2,n+22.9,_-b+.5,_+b-.5,14206876),e.cyl(v,_,n+23.2,1.2,.55,.35,8084014,10),e.box(v-b-.35,v+b+.35,n+26.8,n+27.5,_-b-.35,_+b+.35,c),e.dome(v,_,n+27.5,b-.2,2.2,f),e.box(v-.06,v+.06,n+29.6,n+31.6,_-.06,_+.06,3881787),e.box(v-.45,v+.45,n+30.8,n+30.95,_-.06,_+.06,3881787);for(const[S,w]of[[b+.02,0],[0,b+.02]]){const T=new Ka(.75,20);S&&T.rotateY(Math.PI/2),T.translate(v+S,n+19,_+w),e.add(T,16052714)}return e.mesh("chiesa-madre")}function yx(i,t){const e=new Os(0,0,0,1),n=11116429,s=10195583,r=2894374,o=(a,c,l,h,u,f,p,g,x)=>{const m=Math.hypot(l-a,h-c);if(m<.05)return;const d=-(h-c)/m*g/2,M=(l-a)/m*g/2,v=[[a+d,c+M],[l+d,h+M],[l-d,h-M],[a-d,c-M]],_=[u,f,f,u],b=[],S=(E,y)=>[v[E][0],_[E]+(y?p:0),v[E][1]],w=(E,y,R,O)=>b.push(...E,...y,...R,...E,...R,...O);w(S(0,0),S(1,0),S(1,1),S(0,1)),w(S(2,0),S(3,0),S(3,1),S(2,1)),w(S(0,1),S(1,1),S(2,1),S(3,1)),w(S(1,0),S(2,0),S(2,1),S(1,1)),w(S(3,0),S(0,0),S(0,1),S(3,1));const T=new Kt;T.setAttribute("position",new Ot(b,3)),e.add(T,x)};for(const a of i.ruins){const c=a.castle,l=c?8:a.castleArea?5.5:2.8,h=c?.9:.6;for(let u=2;u<a.p.length;u+=2){const f=a.p[u-2],p=a.p[u-1],g=a.p[u],x=a.p[u+1];if(c&&Math.hypot(g-f,x-p)<2.5||(o(f,p,g,x,t(f,p)-.4,t(g,x)-.4,l+.4,h,c?n:s),!c))continue;const m=Math.hypot(g-f,x-p),d=(g-f)/m,M=(x-p)/m,v=-M,_=d;for(let b=2.5;b<m-2;b+=4.8)for(const[S,w]of[[1.6,3.4],[4.8,6.6]]){const T=f+d*b,E=p+M*b,y=t(T,E);for(const R of[1,-1]){const O=T+v*R*.47,U=E+_*R*.47,B=new Sn(1.3,w-S);B.rotateY(Math.atan2(v*R,_*R)),B.translate(O,y+(S+w)/2,U),e.add(B,r)}}for(let b=.6;b<m-.3;b+=1.3){const S=f+d*b,w=p+M*b,T=new Is(.32,.9,4);T.rotateY(Math.PI/4+Math.atan2(d,M)),T.translate(S,t(S,w)+8.45,w),e.add(T,n)}}}if(i.castle){for(const[a,c,l]of i.castle.towers){const h=t(a,c)-.4;e.cyl(a,c,h,9.4,l,l*.97,n,20),e.dome(a,c,h+9.4,l*.93,l*.6,13156528);const u=new Bn(.22,8,6);u.translate(a,h+9.4+l*.6+.15,c),e.add(u,13156528);for(let f=0;f<14;f++){const p=f/14*Math.PI*2,g=new Is(.28,.8,4);g.translate(a+Math.sin(p)*l,h+9.7,c+Math.cos(p)*l),e.add(g,n)}for(const[f,p]of[[3.2,.8],[6.4,2.4]]){const g=new Sn(.8,1.2);g.rotateY(p),g.translate(a+Math.sin(p)*(l+.02),h+f,c+Math.cos(p)*(l+.02)),e.add(g,r)}}if(i.castle.chapel){const[a,c]=i.castle.chapel,l=t(a,c)-.3,h=new Os(a,c,.12,1);h.box(-5.2,5.2,l,l+6.5,-4,4,14273972),h.gable(-5.4,5.4,l+6.5,l+8.6,-4.2,4.2,11823684),h.box(-.6,.6,l+3.5,l+4.8,4,4.06,r),h.box(3.2,4.2,l+3.5,l+4.8,4,4.06,r),h.box(-13.2,-5.2,l,l+6,3.4,4.6,n),h.arch(-9.2,3.2,l,l+4.4,4.62,r,.1);for(let u=-12.7;u<-5.6;u+=1.5)h.box(u,u+.9,l+6,l+6.9,3.5,4.5,n);e.parts.push(...h.parts)}}return e.mesh("castello-ruderi")}function Sx(i,t){const e=new Ce;e.name="landmarks";const n=i.landmarks||{};for(const s of i.buildings)s.lm==="municipio"&&e.add(xx(s,n.fountain)),s.lm==="chiesa"&&e.add(Mx(s));return n.fountain&&e.add(vx(n.fountain)),n.ruins?.length&&e.add(yx(n,t)),e.add(F_(i)),e.add(_x(t)),e}function bx(i,t,e){const[n,s]=t,{size:r,px:o}=i,a=new Set(i.tiles.map(([d,M])=>`${d},${M}`)),c=document.createElement("canvas");c.width=c.height=o*3;const l=c.getContext("2d"),h=new bn(c);h.colorSpace=he,h.anisotropy=e.capabilities.getMaxAnisotropy();const u=new Map;let f=null,p=!1,g=0;function x(d){if(!u.has(d)){const[M,v]=d.split(",");u.set(d,new Promise(_=>{const b=new Image;b.onload=()=>_(b),b.onerror=()=>_(null),b.src=`data/ortho-hr/hr_${M}_${v}.jpg`})),u.size>25&&u.delete(u.keys().next().value)}return u.get(d)}function m(d){const M=Math.floor((d.x+n)/r),v=Math.floor((s-d.z)/r),_=`${M},${v}`;if(_!==f){f=_,l.clearRect(0,0,c.width,c.height),Nr.rect.value.set((M-1)*r-n,s-(v-1)*r,3*r,1),Nr.map.value=h,p=!0;for(let S=-1;S<=1;S++)for(let w=-1;w<=1;w++){const T=`${M+S},${v+w}`;a.has(T)&&x(T).then(E=>{!E||f!==_||(l.drawImage(E,(S+1)*o,(1-w)*o,o,o),p=!0)})}}const b=performance.now();p&&b-g>250&&(h.needsUpdate=!0,p=!1,g=b)}return{update:m}}const kh="vec2 cd = (wp.xz - cameraPosition.xz) * 0.001; wp.y -= dot(cd, cd) * 0.0682594;",Ex=["litorale","alicudi","filicudi","salina","lipari","vulcano","panarea","stromboli"],Bl={alicudi:"Alicudi",filicudi:"Filicudi",salina:"Salina",lipari:"Lipari",vulcano:"Vulcano",panarea:"Panarea",stromboli:"Stromboli"},wx=[["Cefalù",414231,4210537,150],["Capo d'Orlando",477712,4223254,60]],br=160;function Hh(i){i.vertexShader=i.vertexShader.replace(/precision mediump float/g,"precision highp float").replace(/precision mediump int/g,"precision highp int")}function Tx(i){const t=new ks({map:i});return t.onBeforeCompile=e=>{Hh(e),e.vertexShader=e.vertexShader.replace("#include <project_vertex>",`
      vec4 wp = modelMatrix * vec4(transformed, 1.0);
      ${kh}
      vec4 mvPosition = viewMatrix * wp;
      gl_Position = projectionMatrix * mvPosition;`)},t}async function Ax(i,t){const[e,n]=i,s=new Ce;s.name="sfondo";const r=[],o=new wa;await Promise.all(Ex.map(async a=>{const c=await fetch(`data/bg/${a}.json`).then(M=>M.ok?M.json():null).catch(()=>null);if(!c)return;const l=await o.loadAsync(`data/bg/${a}.jpg`).catch(()=>null);if(!l)return;l.colorSpace=he,l.anisotropy=4;const h=atob(c.data),u=new Uint8Array(h.length);for(let M=0;M<h.length;M++)u[M]=h.charCodeAt(M);const f=new Int16Array(u.buffer),{width:p,height:g,step:x}=c,m=Tx(l);let d={v:-1};for(let M=0;M<g-1;M+=br)for(let v=0;v<p-1;v+=br){const _=Math.min(g-1,M+br),b=Math.min(p-1,v+br),S=_-M+1,w=b-v+1,T=new Float32Array(S*w*3),E=new Float32Array(S*w*2);for(let U=M;U<=_;U++)for(let B=v;B<=b;B++){const D=U*p+B,I=(U-M)*w+(B-v),z=c.xmin+B*x-e,F=n-(c.ymax-U*x);let Y=f[D];z>t.x0+30&&z<t.x1-30&&F>t.z0+30&&F<t.z1-30&&(Y-=60),T[I*3]=z,T[I*3+1]=Y,T[I*3+2]=F,E[I*2]=(B+.5)/p,E[I*2+1]=1-(U+.5)/g,f[D]>d.v&&(d={v:f[D],X:z,Z:F})}const y=[];for(let U=M;U<_;U++)for(let B=v;B<b;B++){const D=U*p+B,I=D+1,z=D+p,F=z+1;if(f[D]<0&&f[I]<0&&f[z]<0&&f[F]<0)continue;const Y=(U-M)*w+(B-v),j=Y+1,V=Y+w,rt=V+1;y.push(Y,V,j,j,V,rt)}if(!y.length)continue;const R=new Kt;R.setAttribute("position",new xe(T,3)),R.setAttribute("uv",new xe(E,2)),R.setIndex(y);const O=new $t(R,m);O.name=`sfondo-${a}`,O.frustumCulled=!1,s.add(O)}Bl[a]&&d.v>0&&r.push({name:Bl[a],x:d.X,y:d.v,z:d.Z})}));for(const[a,c,l,h]of wx)r.push({name:a,x:c-e,y:h,z:n-l});return{group:s,labels:r}}function kl(i,{far:t=!1}={}){const e=lh.merge([yt.fog,{uTime:{value:0},uSun:{value:i.clone().normalize()},uDeep:{value:new Nt(871014)},uShallow:{value:new Nt(3119776)},uSkyH:{value:new Nt(13229290)},uSkyZ:{value:new Nt(6132676)},uTint:{value:new Nt(1,1,1)},uSpec:{value:3}}]);e.lcMap=ni.lcMap,e.lcRect=ni.lcRect;const n=new rn({uniforms:e,fog:!0,transparent:!0,depthWrite:!1,vertexShader:`
      varying vec3 vW;
      #include <fog_pars_vertex>
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        ${t?kh:""}
        vW = wp.xyz;
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform float uTime, uSpec; uniform vec3 uSun, uDeep, uShallow, uSkyH, uSkyZ, uTint;
      varying vec3 vW;
      ${Ch}
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
      }`});t&&(n.onBeforeCompile=o=>Hh(o));let s;if(t){const o=[0];for(let h=30;h<2e5;h*=1.12)o.push(h);o.push(2e5);const a=128,c=[],l=[];for(const h of o)for(let u=0;u<a;u++){const f=u/a*Math.PI*2;c.push(Math.cos(f)*h,0,Math.sin(f)*h)}for(let h=0;h<o.length-1;h++)for(let u=0;u<a;u++){const f=h*a+u,p=h*a+(u+1)%a,g=f+a,x=p+a;l.push(f,p,g,p,x,g)}s=new Kt,s.setAttribute("position",new Ot(c,3)),s.setIndex(l)}else{const o=ni.lcRect.value;s=new Sn(o.z,o.w),s.rotateX(-Math.PI/2),s.translate(o.x+o.z/2,0,o.y+o.w/2)}const r=new $t(s,n);return r.renderOrder=5,r.name=t?"mare-sfondo":"mare",r.frustumCulled=!1,{mesh:r,uniforms:e,update(o,a){e.uTime.value=o,t&&a&&r.position.set(a.position.x,0,a.position.z)}}}const Vh=i=>i*i*(3-2*i),Rx=i=>Vh(Math.min(1,i/.7)),Er=(i,t,e)=>i.map((n,s)=>n+(t[s]-n)*e),ji=[{hour:10.5,dur:15,fov:36,nadir:!0,from:{cam:[-6,880,-18],look:[-6,0,-18]},to:{cam:[-6,108,-20],look:[-6,0,-20]},ease:Rx},{hour:10.5,dur:8.5,fov:40,from:{cam:[-10,96,-42],look:[-6,4,-18]},to:{cam:[-16,58,-128],look:[-2,6,-8]}},{hour:16.75,dur:8.5,fov:42,orbit:{c:[222,-248],r0:240,r1:155,a0:-2.35,a1:-.85,h0:78,h1:36,look:12}},{hour:18.15,dur:9,fov:46,final:!0,from:{cam:[-60,70,-300],look:[-8,14,-30]},to:{cam:[-24,118,-420],look:[-6,22,-40]}}];function Cx({camera:i,controls:t,heightAt:e,setTime:n,onEnd:s}){const r=_=>document.getElementById(_),o=r("intro");let a=-1,c=0,l=!1,h=!1;const u=new N,f=new N,p=(_,[b,S,w])=>_.set(b,Math.max(e(b,w),0)+S,w);function g(_,b){const S=_.ease?_.ease(b):_.final?1-(1-b)**3:Vh(b);if(_.nadir)i.up.set(0,0,1),p(u,Er(_.from.cam,_.to.cam,S)),p(f,Er(_.from.look,_.to.look,S));else if(_.orbit){i.up.set(0,1,0);const T=_.orbit,E=T.a0+(T.a1-T.a0)*S,y=T.r0+(T.r1-T.r0)*S;p(u,[T.c[0]+Math.cos(E)*y,T.h0+(T.h1-T.h0)*S,T.c[1]+Math.sin(E)*y]),p(f,[T.c[0],T.look,T.c[1]])}else i.up.set(0,1,0),p(u,Er(_.from.cam,_.to.cam,S)),p(f,Er(_.from.look,_.to.look,S));u.y=Math.max(u.y,e(u.x,u.z)+3),_.nadir&&(f.y=Math.min(f.y,u.y-20));const w=_.fov||42;i.fov!==w&&(i.fov=w,i.updateProjectionMatrix()),i.position.copy(u),t.target.copy(f),i.lookAt(f)}function x(_){a=_,c=0,h=!1;const b=ji[a];n(b.hour),o.classList.toggle("final",!!b.final),o.classList.remove("title")}function m(){l=!0,h=!1,o.hidden=!1,o.classList.remove("final","out","title"),document.body.classList.add("intro"),t.enabled=!1,x(0),g(ji[0],0)}function d(){l&&(l=!1,h=!1,o.classList.add("out"),o.classList.remove("title"),setTimeout(()=>{o.hidden=!0,o.classList.remove("out","final")},700),document.body.classList.remove("intro"),i.up.set(0,1,0),i.fov=55,i.updateProjectionMatrix(),t.enabled=!0,s())}addEventListener("keydown",_=>{l&&_.key==="Escape"&&d()});function M(_){if(!l)return;const b=ji[a];if(h){const E=Math.min(1,+r("introFade").style.opacity+_/.85);r("introFade").style.opacity=E.toFixed(3),E>=1&&d();return}c+=_;const S=Math.min(1,c/b.dur);g(b,S);const w=.9,T=b.final?Math.max(0,1-c/1.1):Math.max(0,1-c/w,1-(b.dur-c)/w);if(r("introFade").style.opacity=T.toFixed(3),b.final){o.classList.toggle("title",c>2.6),c>=b.dur&&(h=!0);return}c>=b.dur&&x(a+1)}function v(_,b){l||m(),x(_),c=b,g(ji[_],Math.min(1,b/ji[_].dur)),r("introFade").style.opacity="0",o.classList.toggle("title",!!ji[_].final&&b>2.6)}return{start:m,stop:d,update:M,seek:v,get active(){return l},get index(){return a},get time(){return c}}}const Px=`
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
}`;function Lx(i){const t=i.getDrawingBufferSize(new pt),e=new hi(t.x,t.y,{samples:0});e.texture.colorSpace=he;const n={tSrc:{value:e.texture},uTexel:{value:new pt(1/t.x,1/t.y)},uSharp:{value:.7}},s=new $t(new Sn(2,2),new rn({uniforms:n,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Px}));s.frustumCulled=!1;const r=new qa;r.add(s);const o=new Ga(-1,1,1,-1,0,1);return{target:e,present(){i.setRenderTarget(null),i.render(r,o)},resize(){i.getDrawingBufferSize(t),e.setSize(t.x,t.y),n.uTexel.value.set(1/t.x,1/t.y)}}}const ie=i=>document.getElementById(i),Kn=i=>{ie("lmsg").textContent=i},us=matchMedia("(pointer: coarse)").matches;us&&document.body.classList.add("touch");const Re=new ng({canvas:ie("c"),antialias:!0});Re.setPixelRatio(Math.min(devicePixelRatio,2));Re.setSize(innerWidth,innerHeight);Re.shadowMap.enabled=!0;Re.shadowMap.type=us?Da:Vl;const Ae=new qa,Gh=13622760;Ae.background=null;Ae.fog=new Xa(Gh,26e-6);Re.autoClear=!1;const kn=new qa;kn.background=new Nt(Gh);kn.fog=Ae.fog;const xn=new Qe(55,innerWidth/innerHeight,50,25e4),oe=new Qe(55,innerWidth/innerHeight,.5,12e3),Wh=new Bg(14675711,9075302,1.25),qe=new Ah(16773852,2.1);qe.position.set(300,500,350);qe.castShadow=!0;qe.shadow.mapSize.set(us?1024:2048,us?1024:2048);Object.assign(qe.shadow.camera,{left:-300,right:300,top:300,bottom:-300,near:10,far:1500});qe.shadow.bias=-5e-4;const Xh=new Ah(10466006,0);Ae.add(Wh,qe,qe.target,Xh);const qh=M_(kn);async function Dx(){Kn("modello degli edifici");const[i,t,e,n]=await Promise.all([fetch("data/model.json").then(y=>y.json()),fetch("data/dtm.json").then(y=>y.json()),fetch("data/ortho.json").then(y=>y.json()),fetch("data/streets.json").then(y=>y.json())]),s=await fetch("data/ortho-hr.json").then(y=>y.ok?y.json():null).catch(()=>null),r=atob(t.data),o=new Uint8Array(r.length);for(let y=0;y<r.length;y++)o[y]=r.charCodeAt(y);const a=new Uint16Array(o.buffer),c=new Float32Array(a.length),l=t.offset||0;for(let y=0;y<a.length;y++)c[y]=a[y]/10+l;const h=f_(t,c,i.origin);Kn("ortofoto 2022");const u=new wa,f=new Map;await Promise.all(e.tiles.map(y=>new Promise(R=>{u.load(`data/ortho/${y.file}`,O=>{O.colorSpace=he,O.anisotropy=Re.capabilities.getMaxAnisotropy(),f.set(y.file,O),R()},void 0,()=>R())})));const p=await fetch("data/landcover.json").then(y=>y.ok?y.json():null).catch(()=>null);if(p){const y=await new wa().loadAsync("data/landcover.png").catch(()=>null);y&&c_(y,p,i.origin)}Kn("terreno");const g={xmin:t.xmin,xmax:t.xmin+(t.width-1)*t.step,ymax:t.ymax,ymin:t.ymax-(t.height-1)*t.step};Ae.add(d_({orthoMeta:e,textures:f,heightAt:h,origin:i.origin,bounds:g}));const x=kl(qe.position.clone().sub(qe.target.position));Ae.add(x.mesh),Kn("litorale ed Eolie");const m=kl(qe.position.clone().sub(qe.target.position),{far:!0});kn.add(m.mesh);const d=t,M={x0:d.xmin-i.origin[0],x1:d.xmin+d.width*d.step-i.origin[0],z0:i.origin[1]-d.ymax,z1:i.origin[1]-d.ymax+d.height*d.step},v=await Ax(i.origin,M);kn.add(v.group),Kn("edifici");const{group:_,footprints:b}=z_({model:i,orthoMeta:e,textures:f,facadeMats:w_()});Ae.add(_);const S=k_(b);Kn("strade"),Ae.add(ux(n,h,S)),Kn("luoghi d'interesse"),Ae.add(Sx(i,h)),Kn("alberi");const w=tx(i.trees||[]);Ae.add(w.group);const T=i.buildings.filter(y=>y.src==="lidar").length;ie("sub").textContent=`${i.buildings.length} edifici reali · ${T} con altezza LiDAR`;const E=s?bx(s,i.origin,Re):{update(){}};return{model:i,heightAt:h,collider:S,trees:w,streets:n,hr:E,water:x,farSea:m,farLabels:v.labels}}const{model:Ix,heightAt:Vs,collider:Hl,trees:Ux,streets:Nx,hr:Fx,water:Yh,farSea:$h,farLabels:Ox}=await Dx();ie("loader").classList.add("hide");const Ra=Ix.pois.map(i=>{const t=document.createElement("div");return t.className="lbl",t.textContent=i.name,ie("labels").appendChild(t),{el:t,v:new N(i.x,i.y+14,i.z)}});for(const i of Ox){const t=document.createElement("div");t.className="lbl far",t.textContent=i.name,ie("labels").appendChild(t),Ra.push({el:t,far:!0,v:new N(i.x,i.y,i.z),top:i.y})}const Zi=new N;function zx(){if(!Le.names){for(const n of Ra)n.el.style.display="none";return}const i=zt.on?260:900,t=[],e=Ra.map(n=>({l:n,d:oe.position.distanceTo(n.v)})).sort((n,s)=>n.d-s.d);for(const{l:n,d:s}of e){if(n.far){const l=n.v.x-oe.position.x,h=n.v.z-oe.position.z;n.v.y=n.top+120-(l*l+h*h)/1465e4}Zi.copy(n.v).project(n.far?xn:oe);let r=Zi.z<1&&Math.abs(Zi.x)<1.05&&Math.abs(Zi.y)<1.05&&(n.far?s>3e3:s<i);const o=(Zi.x*.5+.5)*innerWidth,a=(-Zi.y*.5+.5)*innerHeight,c=n.el.textContent.length*7+16;r&&t.some(l=>Math.abs(l.x-o)<(l.w+c)/2&&Math.abs(l.y-a)<24)&&(r=!1),n.el.style.display=r?"":"none",r&&(t.push({x:o,y:a,w:c}),n.el.style.transform=`translate(${o}px, ${a}px) translate(-50%, -100%)`)}}const Be=new Xg(oe,Re.domElement);Be.enableDamping=!0;Be.maxPolarAngle=Math.PI*.495;Be.minDistance=8;Be.maxDistance=3500;const Or=Vs(0,0);Be.target.set(-60,Or,-20);oe.position.set(-10,Or+90,190);Be.update();const zt={on:!1,pos:new N,yaw:0,pitch:0,keys:{},joy:{x:0,y:0}};addEventListener("keydown",i=>{zt.keys[i.code]=!0});addEventListener("keyup",i=>{zt.keys[i.code]=!1});let In=null;Re.domElement.addEventListener("pointerdown",i=>{zt.on&&(In={x:i.clientX,y:i.clientY,id:i.pointerId})});addEventListener("pointerup",i=>{In?.id===i.pointerId&&(In=null)});addEventListener("pointermove",i=>{!zt.on||!In||In.id!==i.pointerId||(zt.yaw-=(i.clientX-In.x)*.004,zt.pitch=Math.max(-1.2,Math.min(1.2,zt.pitch-(i.clientY-In.y)*.004)),In.x=i.clientX,In.y=i.clientY)});const Ci=ie("joy"),jh=Ci.querySelector("i");Ci.addEventListener("pointerdown",i=>{Ci.setPointerCapture(i.pointerId),Zh(i),i.stopPropagation()});Ci.addEventListener("pointermove",i=>{Ci.hasPointerCapture(i.pointerId)&&Zh(i)});Ci.addEventListener("pointerup",()=>{zt.joy.x=zt.joy.y=0,jh.style.transform=""});function Zh(i){const t=Ci.getBoundingClientRect();let e=(i.clientX-t.left)/t.width*2-1,n=(i.clientY-t.top)/t.height*2-1;const s=Math.hypot(e,n);s>1&&(e/=s,n/=s),zt.joy.x=e,zt.joy.y=n,jh.style.transform=`translate(${e*34}px, ${n*34}px)`}function Gs(i){if(zt.on=i,document.body.classList.toggle("walk",i),ie("bWalk").classList.toggle("on",i),ie("bDrone").classList.toggle("on",!i),Be.enabled=!i,i){const t=Be.target.clone();let e=null;for(const r of Nx.roads)for(let o=0;o+3<r.p.length;o+=2){const a=Math.hypot(r.p[o]-t.x,r.p[o+1]-t.z);(!e||a<e.d)&&(e={d:a,x:r.p[o],z:r.p[o+1],dx:r.p[o+2]-r.p[o],dz:r.p[o+3]-r.p[o+1]})}const{x:n,z:s}=e||{x:t.x,z:t.z};zt.pos.set(n,Vs(n,s),s),zt.yaw=e?Math.atan2(-e.dx,-e.dz):0,zt.pitch=0,oe.fov=70,oe.updateProjectionMatrix()}else zt.pos.lengthSq()>0&&(Be.target.copy(zt.pos),oe.position.set(zt.pos.x-60,zt.pos.y+70,zt.pos.z+90),oe.fov=55,oe.updateProjectionMatrix());ie("hint").textContent=i?us?"joystick: cammina · trascina: guarda":"WASD / frecce: cammina · Shift: corri · trascina: guarda":us?"trascina: ruota · pizzica: zoom · due dita: sposta":"trascina: ruota · rotella: zoom · tasto destro: sposta"}ie("bWalk").onclick=()=>Gs(!0);ie("bDrone").onclick=()=>Gs(!1);Gs(!1);const Le={names:!1,hour:11,lights:!0,sharp:!0},Ca=Lx(Re);try{Object.assign(Le,JSON.parse(localStorage.getItem("acq-settings")||"{}"))}catch{}const sc=()=>{try{localStorage.setItem("acq-settings",JSON.stringify(Le))}catch{}},Kh=new Set;for(const i of[Ae,kn])i.traverse(t=>{const e=t.material;t.isMesh&&e?.isMeshBasicMaterial&&e.blending===Ti&&Kh.add(e)});const Bx=Ae.getObjectByName("lamps"),kx=Ae.getObjectByName("plaza-props"),Hx=Ae.getObjectByName("piazza-ve3"),zr={sky:qh,sun:qe,hemi:Wh,moonLight:Xh,fog:Ae.fog,bgScene:kn,basics:[...Kh],waters:[Yh.uniforms,$h.uniforms],lights:!0,sunDir:new N(0,1,0)},Vx=i=>`${String(Math.floor(i)%24).padStart(2,"0")}:${String(Math.round(i%1*60)).padStart(2,"0")}`;function Pa(i){zr.lights=Le.lights;const{sun:t,moon:e}=y_(i,zr);Bx?.userData.night?.(ai.value),kx?.userData.night?.(ai.value),Hx?.userData.night?.(ai.value),ie("optTime").value=i,ie("timeOut").textContent=Vx(i);const n=e.alt>0?`luna ${Math.round(e.lit*100)}% alta ${Math.round(e.alt*57.3)}°`:"luna sotto l'orizzonte";ie("sunInfo").textContent=`sole ${Math.round(t.alt*57.3)}° · ${n}`}function Ws(i){Le.hour=i,Pa(i),sc()}ie("optNames").checked=Le.names;ie("optLights").checked=Le.lights;ie("optNames").onchange=i=>{Le.names=i.target.checked,sc()};ie("optLights").onchange=i=>{Le.lights=i.target.checked,Ws(Le.hour)};ie("optSharp").checked=Le.sharp;ie("optSharp").onchange=i=>{Le.sharp=i.target.checked,sc()};ie("optTime").oninput=i=>Ws(+i.target.value);ie("bNow").onclick=()=>Ws(Math.round(v_()*4)/4);ie("bSet").onclick=()=>{const i=ie("settings");i.hidden=!i.hidden,ie("bSet").setAttribute("aria-expanded",String(!i.hidden)),ie("bSet").classList.toggle("on",!i.hidden)};Ws(Le.hour);try{localStorage.removeItem("acq-gkey")}catch{}const zs=Cx({camera:oe,controls:Be,heightAt:Vs,setTime:Pa,onEnd(){Pa(Le.hour),Be.target.set(-60,Or,-20),oe.position.set(-10,Or+90,190),Be.update()}});ie("bIntro").onclick=()=>{ie("settings").hidden=!0,ie("bSet").classList.remove("on"),zt.on&&Gs(!1),zs.start()};zs.start();const Uo=new Vg;function Gx(i){const t=zt.keys;let e=(t.KeyW||t.ArrowUp?1:0)-(t.KeyS||t.ArrowDown?1:0)-zt.joy.y,n=(t.KeyD||t.ArrowRight?1:0)-(t.KeyA||t.ArrowLeft?1:0)+zt.joy.x;const s=Math.hypot(e,n);if(s>.05){const r=(t.ShiftLeft||t.ShiftRight?9:3.2)*i/Math.max(1,s),o=-Math.sin(zt.yaw),a=-Math.cos(zt.yaw),c=(o*e-a*n)*r,l=(a*e+o*n)*r;Hl(zt.pos.x+c,zt.pos.z)||(zt.pos.x+=c),Hl(zt.pos.x,zt.pos.z+l)||(zt.pos.z+=l)}zt.pos.y=q_(zt.pos.x,zt.pos.z,Vs(zt.pos.x,zt.pos.z)),oe.position.set(zt.pos.x,zt.pos.y+1.7,zt.pos.z),oe.rotation.set(zt.pitch,zt.yaw,0,"YXZ")}function Jh(){requestAnimationFrame(Jh);const i=Math.min(.05,Uo.getDelta());zs.active?zs.update(i):zt.on?Gx(i):Be.update();const t=zt.on?zt.pos:Be.target,e=zr.sunDir.y>.02?zr.sunDir:new N(.4,.6,.45).normalize();qe.position.set(t.x+e.x*800,t.y+e.y*800,t.z+e.z*800),qe.target.position.copy(t),Ux.update(oe),qh.follow(oe),Fx.update(t),Yh.update(Uo.elapsedTime),$h.update(Uo.elapsedTime,oe),xn.position.copy(oe.position),xn.quaternion.copy(oe.quaternion),(xn.fov!==oe.fov||xn.aspect!==oe.aspect)&&(xn.fov=oe.fov,xn.aspect=oe.aspect,xn.updateProjectionMatrix()),zx(),Re.setRenderTarget(Le.sharp?Ca.target:null),Re.clear(),Re.render(kn,xn),Re.clearDepth(),Re.render(Ae,oe),Le.sharp&&Ca.present()}Jh();addEventListener("resize",()=>{Re.setSize(innerWidth,innerHeight),Ca.resize(),oe.aspect=innerWidth/innerHeight,oe.updateProjectionMatrix()});window.__acq={camera:oe,controls:Be,walker:zt,heightAt:Vs,setMode:Gs,scene:Ae,renderer:Re,bgScene:kn,bgCamera:xn,setHour:Ws,settings:Le,intro:zs};
