(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qc="170",zo={ROTATE:0,DOLLY:1,PAN:2},Do={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},md=0,Hl=1,gd=2,tl=1,Iu=2,ni=3,Li=0,Ze=1,le=2,Ai=0,to=1,ys=2,Gl=3,Vl=4,xd=5,ji=100,vd=101,_d=102,Md=103,yd=104,bd=200,Sd=201,wd=202,Ed=203,Ya=204,ja=205,Td=206,Ad=207,Cd=208,Rd=209,Pd=210,Ld=211,Dd=212,Id=213,Ud=214,Za=0,Ka=1,Ja=2,Bo=3,Qa=4,tc=5,ec=6,nc=7,el=0,Nd=1,zd=2,Ci=0,Od=1,Fd=2,Bd=3,kd=4,Hd=5,Gd=6,Vd=7,Uu=300,ko=301,Ho=302,ic=303,oc=304,Vr=306,io=1e3,Ki=1001,sc=1002,pn=1003,Wd=1004,Os=1005,Rn=1006,Qr=1007,Ji=1008,li=1009,Nu=1010,zu=1011,bs=1012,nl=1013,oo=1014,Fn=1015,Ps=1016,il=1017,ol=1018,Go=1020,Ou=35902,Fu=1021,Bu=1022,Pn=1023,ku=1024,Hu=1025,Oo=1026,Vo=1027,sl=1028,rl=1029,Gu=1030,al=1031,cl=1033,br=33776,Sr=33777,wr=33778,Er=33779,rc=35840,ac=35841,cc=35842,lc=35843,hc=36196,uc=37492,fc=37496,dc=37808,pc=37809,mc=37810,gc=37811,xc=37812,vc=37813,_c=37814,Mc=37815,yc=37816,bc=37817,Sc=37818,wc=37819,Ec=37820,Tc=37821,Tr=36492,Ac=36494,Cc=36495,Vu=36283,Rc=36284,Pc=36285,Lc=36286,Xd=3200,qd=3201,Wu=0,$d=1,si="",pe="srgb",$o="srgb-linear",Wr="linear",ae="srgb",uo=7680,Wl=519,Yd=512,jd=513,Zd=514,Xu=515,Kd=516,Jd=517,Qd=518,tp=519,Xl=35044,ql="300 es",ri=2e3,Ir=2001;class ao{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const s=o.indexOf(e);s!==-1&&o.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const o=n.slice(0);for(let s=0,r=o.length;s<r;s++)o[s].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ar=Math.PI/180,Dc=180/Math.PI;function Yo(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function ep(i,t){return(i%t+t)%t}function ta(i,t,e){return(1-e)*i+e*t}function Qo(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const np={DEG2RAD:Ar};class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6],this.y=o[1]*e+o[4]*n+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),o=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*o+t.x,this.y=s*o+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,o,s,r,a,c,l){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,o,s,r,a,c,l)}set(t,e,n,o,s,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=o,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,o=e.elements,s=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],p=n[5],g=n[8],x=o[0],m=o[3],d=o[6],v=o[1],_=o[4],M=o[7],w=o[2],b=o[5],E=o[8];return s[0]=r*x+a*v+c*w,s[3]=r*m+a*_+c*b,s[6]=r*d+a*M+c*E,s[1]=l*x+h*v+f*w,s[4]=l*m+h*_+f*b,s[7]=l*d+h*M+f*E,s[2]=u*x+p*v+g*w,s[5]=u*m+p*_+g*b,s[8]=u*d+p*M+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],o=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*s*h+n*a*c+o*s*l-o*r*c}invert(){const t=this.elements,e=t[0],n=t[1],o=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*r-a*l,u=a*c-h*s,p=l*s-r*c,g=e*f+n*u+o*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(o*l-h*n)*x,t[2]=(a*n-o*r)*x,t[3]=u*x,t[4]=(h*e-o*c)*x,t[5]=(o*s-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(r*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,o,s,r,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-o*l,o*c,-o*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ea.makeScale(t,e)),this}rotate(t){return this.premultiply(ea.makeRotation(-t)),this}translate(t,e){return this.premultiply(ea.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let o=0;o<9;o++)if(e[o]!==n[o])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ea=new Yt;function qu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ip(){const i=Ss("canvas");return i.style.display="block",i}const $l={};function fs(i){i in $l||($l[i]=!0,console.warn(i))}function op(i,t,e){return new Promise(function(n,o){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function sp(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:$o,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(i.r=Fo(i.r),i.g=Fo(i.g),i.b=Fo(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===si?Wr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Yl=[.64,.33,.3,.6,.15,.06],jl=[.2126,.7152,.0722],Zl=[.3127,.329],Kl=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jl=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[$o]:{primaries:Yl,whitePoint:Zl,transfer:Wr,toXYZ:Kl,fromXYZ:Jl,luminanceCoefficients:jl,workingColorSpaceConfig:{unpackColorSpace:pe},outputColorSpaceConfig:{drawingBufferColorSpace:pe}},[pe]:{primaries:Yl,whitePoint:Zl,transfer:ae,toXYZ:Kl,fromXYZ:Jl,luminanceCoefficients:jl,outputColorSpaceConfig:{drawingBufferColorSpace:pe}}});let fo;class ap{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fo===void 0&&(fo=Ss("canvas")),fo.width=t.width,fo.height=t.height;const n=fo.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ss("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const o=n.getImageData(0,0,t.width,t.height),s=o.data;for(let r=0;r<s.length;r++)s[r]=ai(s[r]/255)*255;return n.putImageData(o,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cp=0;class $u{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Yo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let s;if(Array.isArray(o)){s=[];for(let r=0,a=o.length;r<a;r++)o[r].isDataTexture?s.push(na(o[r].image)):s.push(na(o[r]))}else s=na(o);n.url=s}return e||(t.images[this.uuid]=n),n}}function na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ap.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lp=0;class He extends ao{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=Ki,o=Ki,s=Rn,r=Ji,a=Pn,c=li,l=He.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Yo(),this.name="",this.source=new $u(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case io:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case sc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case io:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case sc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Uu;He.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,o=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,o){return this.x=t,this.y=e,this.z=n,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,o=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*o+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*o+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*o+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*o+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,o,s;const c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],p=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,M=(p+1)/2,w=(d+1)/2,b=(h+u)/4,E=(f+x)/4,T=(g+m)/4;return _>M&&_>w?_<.01?(n=0,o=.707106781,s=.707106781):(n=Math.sqrt(_),o=b/n,s=E/n):M>w?M<.01?(n=.707106781,o=0,s=.707106781):(o=Math.sqrt(M),n=b/o,s=T/o):w<.01?(n=.707106781,o=.707106781,s=0):(s=Math.sqrt(w),n=E/s,o=T/s),this.set(n,o,s,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-x)/v,this.z=(u-h)/v,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hp extends ao{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const o={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new He(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let o=0,s=this.textures.length;o<s;o++)this.textures[o].image.width=t,this.textures[o].image.height=e,this.textures[o].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,o=t.textures.length;n<o;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $u(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends hp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yu extends He{constructor(t=null,e=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:o},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class up extends He{constructor(t=null,e=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:o},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ae{constructor(t=0,e=0,n=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=o}static slerpFlat(t,e,n,o,s,r,a){let c=n[o+0],l=n[o+1],h=n[o+2],f=n[o+3];const u=s[r+0],p=s[r+1],g=s[r+2],x=s[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(f!==x||c!==u||l!==p||h!==g){let m=1-a;const d=c*u+l*p+h*g+f*x,v=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const w=Math.sqrt(_),b=Math.atan2(w,d*v);m=Math.sin(m*b)/w,a=Math.sin(a*b)/w}const M=a*v;if(c=c*m+u*M,l=l*m+p*M,h=h*m+g*M,f=f*m+x*M,m===1-a){const w=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=w,l*=w,h*=w,f*=w}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,o,s,r){const a=n[o],c=n[o+1],l=n[o+2],h=n[o+3],f=s[r],u=s[r+1],p=s[r+2],g=s[r+3];return t[e]=a*g+h*f+c*p-l*u,t[e+1]=c*g+h*u+l*f-a*p,t[e+2]=l*g+h*p+a*u-c*f,t[e+3]=h*g-a*f-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,o){return this._x=t,this._y=e,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,o=t._y,s=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(o/2),f=a(s/2),u=c(n/2),p=c(o/2),g=c(s/2);switch(r){case"XYZ":this._x=u*h*f+l*p*g,this._y=l*p*f-u*h*g,this._z=l*h*g+u*p*f,this._w=l*h*f-u*p*g;break;case"YXZ":this._x=u*h*f+l*p*g,this._y=l*p*f-u*h*g,this._z=l*h*g-u*p*f,this._w=l*h*f+u*p*g;break;case"ZXY":this._x=u*h*f-l*p*g,this._y=l*p*f+u*h*g,this._z=l*h*g+u*p*f,this._w=l*h*f-u*p*g;break;case"ZYX":this._x=u*h*f-l*p*g,this._y=l*p*f+u*h*g,this._z=l*h*g-u*p*f,this._w=l*h*f+u*p*g;break;case"YZX":this._x=u*h*f+l*p*g,this._y=l*p*f+u*h*g,this._z=l*h*g-u*p*f,this._w=l*h*f-u*p*g;break;case"XZY":this._x=u*h*f-l*p*g,this._y=l*p*f-u*h*g,this._z=l*h*g+u*p*f,this._w=l*h*f+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,o=Math.sin(n);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],o=e[4],s=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(r-o)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(h-c)/p,this._x=.25*p,this._y=(o+r)/p,this._z=(s+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-l)/p,this._x=(o+r)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(r-o)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const o=Math.min(1,e/n);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,o=t._y,s=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+o*l-s*c,this._y=o*h+r*c+s*a-n*l,this._z=s*h+r*l+n*c-o*a,this._w=r*h-n*a-o*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,o=this._y,s=this._z,r=this._w;let a=r*t._w+n*t._x+o*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=o,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*o+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=r*f+this._w*u,this._x=n*f+this._x*u,this._y=o*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),o=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(o*Math.sin(t),o*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ql.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ql.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,o=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*o,this.y=s[1]*e+s[4]*n+s[7]*o,this.z=s[2]*e+s[5]*n+s[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,o=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*o+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*o+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*o+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*o+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,o=this.z,s=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*o-a*n),h=2*(a*e-s*o),f=2*(s*n-r*e);return this.x=e+c*l+r*f-a*h,this.y=n+c*h+a*l-s*f,this.z=o+c*f+s*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,o=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*o,this.y=s[1]*e+s[5]*n+s[9]*o,this.z=s[2]*e+s[6]*n+s[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,o=t.y,s=t.z,r=e.x,a=e.y,c=e.z;return this.x=o*c-s*a,this.y=s*r-n*c,this.z=n*a-o*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ia.copy(this).projectOnVector(t),this.sub(ia)}reflect(t){return this.sub(ia.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,o=this.z-t.z;return e*e+n*n+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const o=Math.sin(e)*t;return this.x=o*Math.sin(n),this.y=Math.cos(e)*t,this.z=o*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ia=new k,Ql=new Ae;class co{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,bn):bn.fromBufferAttribute(s,r),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}const o=t.children;for(let s=0,r=o.length;s<r;s++)this.expandByObject(o[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ts),Bs.subVectors(this.max,ts),po.subVectors(t.a,ts),mo.subVectors(t.b,ts),go.subVectors(t.c,ts),di.subVectors(mo,po),pi.subVectors(go,mo),Bi.subVectors(po,go);let e=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Bi.z,Bi.y,di.z,0,-di.x,pi.z,0,-pi.x,Bi.z,0,-Bi.x,-di.y,di.x,0,-pi.y,pi.x,0,-Bi.y,Bi.x,0];return!oa(e,po,mo,go,Bs)||(e=[1,0,0,0,1,0,0,0,1],!oa(e,po,mo,go,Bs))?!1:(ks.crossVectors(di,pi),e=[ks.x,ks.y,ks.z],oa(e,po,mo,go,Bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $n=[new k,new k,new k,new k,new k,new k,new k,new k],bn=new k,Fs=new co,po=new k,mo=new k,go=new k,di=new k,pi=new k,Bi=new k,ts=new k,Bs=new k,ks=new k,ki=new k;function oa(i,t,e,n,o){for(let s=0,r=i.length-3;s<=r;s+=3){ki.fromArray(i,s);const a=o.x*Math.abs(ki.x)+o.y*Math.abs(ki.y)+o.z*Math.abs(ki.z),c=t.dot(ki),l=e.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const fp=new co,es=new k,sa=new k;class lo{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fp.setFromPoints(t).getCenter(n);let o=0;for(let s=0,r=t.length;s<r;s++)o=Math.max(o,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;es.subVectors(t,this.center);const e=es.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),o=(n-this.radius)*.5;this.center.addScaledVector(es,o/n),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(es.copy(t.center).add(sa)),this.expandByPoint(es.copy(t.center).sub(sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new k,ra=new k,Hs=new k,mi=new k,aa=new k,Gs=new k,ca=new k;class Ls{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,o){ra.copy(t).add(e).multiplyScalar(.5),Hs.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(ra);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Hs),a=mi.dot(this.direction),c=-mi.dot(Hs),l=mi.lengthSq(),h=Math.abs(1-r*r);let f,u,p,g;if(h>0)if(f=r*c-a,u=r*a-c,g=s*h,f>=0)if(u>=-g)if(u<=g){const x=1/h;f*=x,u*=x,p=f*(f+r*u+2*a)+u*(r*f+u+2*c)+l}else u=s,f=Math.max(0,-(r*u+a)),p=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(r*u+a)),p=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-r*s+a)),u=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(f=Math.max(0,-(r*s+a)),u=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+l);else u=r>0?-s:s,f=Math.max(0,-(r*u+a)),p=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),o&&o.copy(ra).addScaledVector(Hs,u),p}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);const n=Yn.dot(this.direction),o=Yn.dot(Yn)-n*n,s=t.radius*t.radius;if(o>s)return null;const r=Math.sqrt(s-o),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,o,s,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,o=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,o=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||s>o||((s>n||isNaN(n))&&(n=s),(r<o||isNaN(o))&&(o=r),f>=0?(a=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||a>o)||((a>n||n!==n)&&(n=a),(c<o||o!==o)&&(o=c),o<0)?null:this.at(n>=0?n:o,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,o,s){aa.subVectors(e,t),Gs.subVectors(n,t),ca.crossVectors(aa,Gs);let r=this.direction.dot(ca),a;if(r>0){if(o)return null;a=1}else if(r<0)a=-1,r=-r;else return null;mi.subVectors(this.origin,t);const c=a*this.direction.dot(Gs.crossVectors(mi,Gs));if(c<0)return null;const l=a*this.direction.dot(aa.cross(mi));if(l<0||c+l>r)return null;const h=-a*mi.dot(ca);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(t,e,n,o,s,r,a,c,l,h,f,u,p,g,x,m){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,o,s,r,a,c,l,h,f,u,p,g,x,m)}set(t,e,n,o,s,r,a,c,l,h,f,u,p,g,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=o,d[1]=s,d[5]=r,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,o=1/xo.setFromMatrixColumn(t,0).length(),s=1/xo.setFromMatrixColumn(t,1).length(),r=1/xo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*o,e[1]=n[1]*o,e[2]=n[2]*o,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,o=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(o),l=Math.sin(o),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const u=r*h,p=r*f,g=a*h,x=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=p+g*l,e[5]=u-x*l,e[9]=-a*c,e[2]=x-u*l,e[6]=g+p*l,e[10]=r*c}else if(t.order==="YXZ"){const u=c*h,p=c*f,g=l*h,x=l*f;e[0]=u+x*a,e[4]=g*a-p,e[8]=r*l,e[1]=r*f,e[5]=r*h,e[9]=-a,e[2]=p*a-g,e[6]=x+u*a,e[10]=r*c}else if(t.order==="ZXY"){const u=c*h,p=c*f,g=l*h,x=l*f;e[0]=u-x*a,e[4]=-r*f,e[8]=g+p*a,e[1]=p+g*a,e[5]=r*h,e[9]=x-u*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const u=r*h,p=r*f,g=a*h,x=a*f;e[0]=c*h,e[4]=g*l-p,e[8]=u*l+x,e[1]=c*f,e[5]=x*l+u,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const u=r*c,p=r*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-u*f,e[8]=g*f+p,e[1]=f,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*f+g,e[10]=u-x*f}else if(t.order==="XZY"){const u=r*c,p=r*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+x,e[5]=r*h,e[9]=p*f-g,e[2]=g*f-p,e[6]=a*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dp,t,pp)}lookAt(t,e,n){const o=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),gi.crossVectors(n,ln),gi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),gi.crossVectors(n,ln)),gi.normalize(),Vs.crossVectors(ln,gi),o[0]=gi.x,o[4]=Vs.x,o[8]=ln.x,o[1]=gi.y,o[5]=Vs.y,o[9]=ln.y,o[2]=gi.z,o[6]=Vs.z,o[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,o=e.elements,s=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],v=n[3],_=n[7],M=n[11],w=n[15],b=o[0],E=o[4],T=o[8],S=o[12],y=o[1],A=o[5],R=o[9],L=o[13],N=o[2],C=o[6],D=o[10],B=o[14],O=o[3],q=o[7],Z=o[11],G=o[15];return s[0]=r*b+a*y+c*N+l*O,s[4]=r*E+a*A+c*C+l*q,s[8]=r*T+a*R+c*D+l*Z,s[12]=r*S+a*L+c*B+l*G,s[1]=h*b+f*y+u*N+p*O,s[5]=h*E+f*A+u*C+p*q,s[9]=h*T+f*R+u*D+p*Z,s[13]=h*S+f*L+u*B+p*G,s[2]=g*b+x*y+m*N+d*O,s[6]=g*E+x*A+m*C+d*q,s[10]=g*T+x*R+m*D+d*Z,s[14]=g*S+x*L+m*B+d*G,s[3]=v*b+_*y+M*N+w*O,s[7]=v*E+_*A+M*C+w*q,s[11]=v*T+_*R+M*D+w*Z,s[15]=v*S+_*L+M*B+w*G,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],o=t[8],s=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+s*c*f-o*l*f-s*a*u+n*l*u+o*a*p-n*c*p)+x*(+e*c*p-e*l*u+s*r*u-o*r*p+o*l*h-s*c*h)+m*(+e*l*f-e*a*p-s*r*f+n*r*p+s*a*h-n*l*h)+d*(-o*a*h-e*c*f+e*a*u+o*r*f-n*r*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],o=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],v=f*m*l-x*u*l+x*c*p-a*m*p-f*c*d+a*u*d,_=g*u*l-h*m*l-g*c*p+r*m*p+h*c*d-r*u*d,M=h*x*l-g*f*l+g*a*p-r*x*p-h*a*d+r*f*d,w=g*f*c-h*x*c-g*a*u+r*x*u+h*a*m-r*f*m,b=e*v+n*_+o*M+s*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=v*E,t[1]=(x*u*s-f*m*s-x*o*p+n*m*p+f*o*d-n*u*d)*E,t[2]=(a*m*s-x*c*s+x*o*l-n*m*l-a*o*d+n*c*d)*E,t[3]=(f*c*s-a*u*s-f*o*l+n*u*l+a*o*p-n*c*p)*E,t[4]=_*E,t[5]=(h*m*s-g*u*s+g*o*p-e*m*p-h*o*d+e*u*d)*E,t[6]=(g*c*s-r*m*s-g*o*l+e*m*l+r*o*d-e*c*d)*E,t[7]=(r*u*s-h*c*s+h*o*l-e*u*l-r*o*p+e*c*p)*E,t[8]=M*E,t[9]=(g*f*s-h*x*s-g*n*p+e*x*p+h*n*d-e*f*d)*E,t[10]=(r*x*s-g*a*s+g*n*l-e*x*l-r*n*d+e*a*d)*E,t[11]=(h*a*s-r*f*s-h*n*l+e*f*l+r*n*p-e*a*p)*E,t[12]=w*E,t[13]=(h*x*o-g*f*o+g*n*u-e*x*u-h*n*m+e*f*m)*E,t[14]=(g*a*o-r*x*o-g*n*c+e*x*c+r*n*m-e*a*m)*E,t[15]=(r*f*o-h*a*o+h*n*c-e*f*c-r*n*u+e*a*u)*E,this}scale(t){const e=this.elements,n=t.x,o=t.y,s=t.z;return e[0]*=n,e[4]*=o,e[8]*=s,e[1]*=n,e[5]*=o,e[9]*=s,e[2]*=n,e[6]*=o,e[10]*=s,e[3]*=n,e[7]*=o,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,o))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),o=Math.sin(e),s=1-n,r=t.x,a=t.y,c=t.z,l=s*r,h=s*a;return this.set(l*r+n,l*a-o*c,l*c+o*a,0,l*a+o*c,h*a+n,h*c-o*r,0,l*c-o*a,h*c+o*r,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,o,s,r){return this.set(1,n,s,0,t,1,r,0,e,o,1,0,0,0,0,1),this}compose(t,e,n){const o=this.elements,s=e._x,r=e._y,a=e._z,c=e._w,l=s+s,h=r+r,f=a+a,u=s*l,p=s*h,g=s*f,x=r*h,m=r*f,d=a*f,v=c*l,_=c*h,M=c*f,w=n.x,b=n.y,E=n.z;return o[0]=(1-(x+d))*w,o[1]=(p+M)*w,o[2]=(g-_)*w,o[3]=0,o[4]=(p-M)*b,o[5]=(1-(u+d))*b,o[6]=(m+v)*b,o[7]=0,o[8]=(g+_)*E,o[9]=(m-v)*E,o[10]=(1-(u+x))*E,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,n){const o=this.elements;let s=xo.set(o[0],o[1],o[2]).length();const r=xo.set(o[4],o[5],o[6]).length(),a=xo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(s=-s),t.x=o[12],t.y=o[13],t.z=o[14],Sn.copy(this);const l=1/s,h=1/r,f=1/a;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,e.setFromRotationMatrix(Sn),n.x=s,n.y=r,n.z=a,this}makePerspective(t,e,n,o,s,r,a=ri){const c=this.elements,l=2*s/(e-t),h=2*s/(n-o),f=(e+t)/(e-t),u=(n+o)/(n-o);let p,g;if(a===ri)p=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===Ir)p=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,o,s,r,a=ri){const c=this.elements,l=1/(e-t),h=1/(n-o),f=1/(r-s),u=(e+t)*l,p=(n+o)*h;let g,x;if(a===ri)g=(r+s)*f,x=-2*f;else if(a===Ir)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let o=0;o<16;o++)if(e[o]!==n[o])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const xo=new k,Sn=new Wt,dp=new k(0,0,0),pp=new k(1,1,1),gi=new k,Vs=new k,ln=new k,th=new Wt,eh=new Ae;class Ln{constructor(t=0,e=0,n=0,o=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,o=this._order){return this._x=t,this._y=e,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const o=t.elements,s=o[0],r=o[4],a=o[8],c=o[1],l=o[5],h=o[9],f=o[2],u=o[6],p=o[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ze(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(th,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return eh.setFromEuler(this),this.setFromQuaternion(eh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class ll{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mp=0;const nh=new k,vo=new Ae,jn=new Wt,Ws=new k,ns=new k,gp=new k,xp=new Ae,ih=new k(1,0,0),oh=new k(0,1,0),sh=new k(0,0,1),rh={type:"added"},vp={type:"removed"},_o={type:"childadded",child:null},la={type:"childremoved",child:null};class Re extends ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new k,e=new Ln,n=new Ae,o=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Wt},normalMatrix:{value:new Yt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vo.setFromAxisAngle(t,e),this.quaternion.multiply(vo),this}rotateOnWorldAxis(t,e){return vo.setFromAxisAngle(t,e),this.quaternion.premultiply(vo),this}rotateX(t){return this.rotateOnAxis(ih,t)}rotateY(t){return this.rotateOnAxis(oh,t)}rotateZ(t){return this.rotateOnAxis(sh,t)}translateOnAxis(t,e){return nh.copy(t).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ih,t)}translateY(t){return this.translateOnAxis(oh,t)}translateZ(t){return this.translateOnAxis(sh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ws.copy(t):Ws.set(t,e,n);const o=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(ns,Ws,this.up):jn.lookAt(Ws,ns,this.up),this.quaternion.setFromRotationMatrix(jn),o&&(jn.extractRotation(o.matrixWorld),vo.setFromRotationMatrix(jn),this.quaternion.premultiply(vo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rh),_o.child=t,this.dispatchEvent(_o),_o.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vp),la.child=t,this.dispatchEvent(la),la.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rh),_o.child=t,this.dispatchEvent(_o),_o.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,o=this.children.length;n<o;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const o=this.children;for(let s=0,r=o.length;s<r;s++)o[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,t,gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,o=e.length;n<o;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,o=e.length;n<o;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,o=e.length;n<o;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const o=this.children;for(let s=0,r=o.length;s<r;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));o.material=a}else o.material=s(t.materials,this.material);if(this.children.length>0){o.children=[];for(let a=0;a<this.children.length;a++)o.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];o.animations.push(s(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),f=r(t.shapes),u=r(t.skeletons),p=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=o,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const o=t.children[n];this.add(o.clone())}return this}}Re.DEFAULT_UP=new k(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new k,Zn=new k,ha=new k,Kn=new k,Mo=new k,yo=new k,ah=new k,ua=new k,fa=new k,da=new k,pa=new ye,ma=new ye,ga=new ye;class Cn{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,o){o.subVectors(n,e),wn.subVectors(t,e),o.cross(wn);const s=o.lengthSq();return s>0?o.multiplyScalar(1/Math.sqrt(s)):o.set(0,0,0)}static getBarycoord(t,e,n,o,s){wn.subVectors(o,e),Zn.subVectors(n,e),ha.subVectors(t,e);const r=wn.dot(wn),a=wn.dot(Zn),c=wn.dot(ha),l=Zn.dot(Zn),h=Zn.dot(ha),f=r*l-a*a;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(l*c-a*h)*u,g=(r*h-a*c)*u;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,o){return this.getBarycoord(t,e,n,o,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,o,s,r,a,c){return this.getBarycoord(t,e,n,o,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Kn.x),c.addScaledVector(r,Kn.y),c.addScaledVector(a,Kn.z),c)}static getInterpolatedAttribute(t,e,n,o,s,r){return pa.setScalar(0),ma.setScalar(0),ga.setScalar(0),pa.fromBufferAttribute(t,e),ma.fromBufferAttribute(t,n),ga.fromBufferAttribute(t,o),r.setScalar(0),r.addScaledVector(pa,s.x),r.addScaledVector(ma,s.y),r.addScaledVector(ga,s.z),r}static isFrontFacing(t,e,n,o){return wn.subVectors(n,e),Zn.subVectors(t,e),wn.cross(Zn).dot(o)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,o){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,n,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),wn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,o,s){return Cn.getInterpolation(t,this.a,this.b,this.c,e,n,o,s)}containsPoint(t){return Cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,o=this.b,s=this.c;let r,a;Mo.subVectors(o,n),yo.subVectors(s,n),ua.subVectors(t,n);const c=Mo.dot(ua),l=yo.dot(ua);if(c<=0&&l<=0)return e.copy(n);fa.subVectors(t,o);const h=Mo.dot(fa),f=yo.dot(fa);if(h>=0&&f<=h)return e.copy(o);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Mo,r);da.subVectors(t,s);const p=Mo.dot(da),g=yo.dot(da);if(g>=0&&p<=g)return e.copy(s);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(yo,a);const m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return ah.subVectors(s,o),a=(f-h)/(f-h+(p-g)),e.copy(o).addScaledVector(ah,a);const d=1/(m+x+u);return r=x*d,a=u*d,e.copy(n).addScaledVector(Mo,r).addScaledVector(yo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function xa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,o=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,o),this}setHSL(t,e,n,o=te.workingColorSpace){if(t=ep(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=xa(r,s,t+1/3),this.g=xa(r,s,t),this.b=xa(r,s,t-1/3)}return te.toWorkingColorSpace(this,o),this}setStyle(t,e=pe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=o[1],a=o[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=o[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){const n=ju[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=Fo(t.r),this.g=Fo(t.g),this.b=Fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return te.fromWorkingColorSpace(We.copy(this),t),Math.round(ze(We.r*255,0,255))*65536+Math.round(ze(We.g*255,0,255))*256+Math.round(ze(We.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(We.copy(this),e);const n=We.r,o=We.g,s=We.b,r=Math.max(n,o,s),a=Math.min(n,o,s);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const f=r-a;switch(l=h<=.5?f/(r+a):f/(2-r-a),r){case n:c=(o-s)/f+(o<s?6:0);break;case o:c=(s-n)/f+2;break;case s:c=(n-o)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=pe){te.fromWorkingColorSpace(We.copy(this),t);const e=We.r,n=We.g,o=We.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(Xs);const n=ta(xi.h,Xs.h,e),o=ta(xi.s,Xs.s,e),s=ta(xi.l,Xs.l,e);return this.setHSL(n,o,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,o=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*o,this.g=s[1]*e+s[4]*n+s[7]*o,this.b=s[2]*e+s[5]*n+s[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Rt;Rt.NAMES=ju;let _p=0;class zi extends ao{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Yo(),this.name="",this.blending=to,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=ja,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const o=this[e];if(o===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ya&&(n.blendSrc=this.blendSrc),this.blendDst!==ja&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==uo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==uo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==uo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(s){const r=[];for(const a in s){const c=s[a];delete c.metadata,r.push(c)}return r}if(e){const s=o(t.textures),r=o(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const o=e.length;n=new Array(o);for(let s=0;s!==o;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bn extends zi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=el,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new k,qs=new gt;class Ee{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xl,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let o=0,s=this.itemSize;o<s;o++)this.array[t+o]=e.array[n+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qs.fromBufferAttribute(this,e),qs.applyMatrix3(t),this.setXY(e,qs.x,qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,o){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),o=Je(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=o,this}setXYZW(t,e,n,o,s){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),o=Je(o,this.array),s=Je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=o,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xl&&(t.usage=this.usage),t}}class Zu extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ku extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Dt extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Mp=0;const gn=new Wt,va=new Re,bo=new k,hn=new co,is=new co,Ue=new k;class Kt extends ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qu(t)?Ku:Zu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Yt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return va.lookAt(t),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bo).negate(),this.translate(bo.x,bo.y,bo.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let o=0,s=t.length;o<s;o++){const r=t[o];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Dt(n,3))}else{for(let n=0,o=e.count;n<o;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new co);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,o=e.length;n<o;n++){const s=e[n];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];is.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(hn.min,is.min),hn.expandByPoint(Ue),Ue.addVectors(hn.max,is.max),hn.expandByPoint(Ue)):(hn.expandByPoint(is.min),hn.expandByPoint(is.max))}hn.getCenter(n);let o=0;for(let s=0,r=t.count;s<r;s++)Ue.fromBufferAttribute(t,s),o=Math.max(o,n.distanceToSquared(Ue));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ue.fromBufferAttribute(a,l),c&&(bo.fromBufferAttribute(t,l),Ue.add(bo)),o=Math.max(o,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,o=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new k,c[T]=new k;const l=new k,h=new k,f=new k,u=new gt,p=new gt,g=new gt,x=new k,m=new k;function d(T,S,y){l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,y),u.fromBufferAttribute(s,T),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,y),h.sub(l),f.sub(l),p.sub(u),g.sub(u);const A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(A),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(A),a[T].add(x),a[S].add(x),a[y].add(x),c[T].add(m),c[S].add(m),c[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let T=0,S=v.length;T<S;++T){const y=v[T],A=y.start,R=y.count;for(let L=A,N=A+R;L<N;L+=3)d(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const _=new k,M=new k,w=new k,b=new k;function E(T){w.fromBufferAttribute(o,T),b.copy(w);const S=a[T];_.copy(S),_.sub(w.multiplyScalar(w.dot(S))).normalize(),M.crossVectors(b,S);const A=M.dot(c[T])<0?-1:1;r.setXYZW(T,_.x,_.y,_.z,A)}for(let T=0,S=v.length;T<S;++T){const y=v[T],A=y.start,R=y.count;for(let L=A,N=A+R;L<N;L+=3)E(t.getX(L+0)),E(t.getX(L+1)),E(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const o=new k,s=new k,r=new k,a=new k,c=new k,l=new k,h=new k,f=new k;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);o.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),h.subVectors(r,s),f.subVectors(o,s),h.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)o.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,s),f.subVectors(o,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let d=0;d<h;d++)u[g++]=l[p++]}return new Ee(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Kt,n=this.index.array,o=this.attributes;for(const a in o){const c=o[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,f=l.length;h<f;h++){const u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const o={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const p=l[f];h.push(p.toJSON(t.data))}h.length>0&&(o[c]=h,s=!0)}s&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const o=t.attributes;for(const l in o){const h=o[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],f=s[l];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const f=r[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ch=new Wt,Hi=new Ls,$s=new lo,lh=new k,Ys=new k,js=new k,Zs=new k,_a=new k,Ks=new k,hh=new k,Js=new k;class Ft extends Re{constructor(t=new Kt,e=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const o=e[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=o.length;s<r;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,o=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(o,t);const a=this.morphTargetInfluences;if(s&&a){Ks.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],f=s[c];h!==0&&(_a.fromBufferAttribute(f,t),r?Ks.addScaledVector(_a,h):Ks.addScaledVector(_a.sub(e),h))}e.add(Ks)}return e}raycast(t,e){const n=this.geometry,o=this.material,s=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(s),Hi.copy(t.ray).recast(t.near),!($s.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere($s,lh)===null||Hi.origin.distanceToSquared(lh)>(t.far-t.near)**2))&&(ch.copy(s).invert(),Hi.copy(t.ray).applyMatrix4(ch),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hi)))}_computeIntersections(t,e,n){let o;const s=this.geometry,r=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){const m=u[g],d=r[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,w=_;M<w;M+=3){const b=a.getX(M),E=a.getX(M+1),T=a.getX(M+2);o=Qs(this,d,t,n,l,h,f,b,E,T),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=m.materialIndex,e.push(o))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const v=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);o=Qs(this,r,t,n,l,h,f,v,_,M),o&&(o.faceIndex=Math.floor(m/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){const m=u[g],d=r[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,w=_;M<w;M+=3){const b=M,E=M+1,T=M+2;o=Qs(this,d,t,n,l,h,f,b,E,T),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=m.materialIndex,e.push(o))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const v=m,_=m+1,M=m+2;o=Qs(this,r,t,n,l,h,f,v,_,M),o&&(o.faceIndex=Math.floor(m/3),e.push(o))}}}}function yp(i,t,e,n,o,s,r,a){let c;if(t.side===Ze?c=n.intersectTriangle(r,s,o,!0,a):c=n.intersectTriangle(o,s,r,t.side===Li,a),c===null)return null;Js.copy(a),Js.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Js);return l<e.near||l>e.far?null:{distance:l,point:Js.clone(),object:i}}function Qs(i,t,e,n,o,s,r,a,c,l){i.getVertexPosition(a,Ys),i.getVertexPosition(c,js),i.getVertexPosition(l,Zs);const h=yp(i,t,e,n,Ys,js,Zs,hh);if(h){const f=new k;Cn.getBarycoord(hh,Ys,js,Zs,f),o&&(h.uv=Cn.getInterpolatedAttribute(o,a,c,l,f,new gt)),s&&(h.uv1=Cn.getInterpolatedAttribute(s,a,c,l,f,new gt)),r&&(h.normal=Cn.getInterpolatedAttribute(r,a,c,l,f,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new k,materialIndex:0};Cn.getNormal(Ys,js,Zs,u.normal),h.face=u,h.barycoord=f}return h}class kt extends Kt{constructor(t=1,e=1,n=1,o=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:o,heightSegments:s,depthSegments:r};const a=this;o=Math.floor(o),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],h=[],f=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,o,r,2),g("x","z","y",1,-1,t,n,-e,o,r,3),g("x","y","z",1,-1,t,e,n,o,s,4),g("x","y","z",-1,-1,t,e,-n,o,s,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(f,2));function g(x,m,d,v,_,M,w,b,E,T,S){const y=M/E,A=w/T,R=M/2,L=w/2,N=b/2,C=E+1,D=T+1;let B=0,O=0;const q=new k;for(let Z=0;Z<D;Z++){const G=Z*A-L;for(let st=0;st<C;st++){const et=st*y-R;q[x]=et*v,q[m]=G*_,q[d]=N,l.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[d]=b>0?1:-1,h.push(q.x,q.y,q.z),f.push(st/E),f.push(1-Z/T),B+=1}}for(let Z=0;Z<T;Z++)for(let G=0;G<E;G++){const st=u+G+C*Z,et=u+G+C*(Z+1),V=u+(G+1)+C*(Z+1),Y=u+(G+1)+C*Z;c.push(st,et,Y),c.push(et,V,Y),O+=6}a.addGroup(p,O,S),p+=O,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wo(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const o=i[e][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=o.clone():Array.isArray(o)?t[e][n]=o.slice():t[e][n]=o}}return t}function $e(i){const t={};for(let e=0;e<i.length;e++){const n=Wo(i[e]);for(const o in n)t[o]=n[o]}return t}function bp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ju(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Qu={clone:Wo,merge:$e};var Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends zi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sp,this.fragmentShader=wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wo(t.uniforms),this.uniformsGroups=bp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const o in this.uniforms){const r=this.uniforms[o].value;r&&r.isTexture?e.uniforms[o]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[o]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[o]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[o]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[o]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[o]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[o]={type:"m4",value:r.toArray()}:e.uniforms[o]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class tf extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new k,uh=new gt,fh=new gt;class on extends tf{constructor(t=50,e=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Dc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dc*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,uh,fh),e.subVectors(fh,uh)}setViewOffset(t,e,n,o,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=o,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*e,o=this.aspect*n,s=-.5*o;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*o/c,e-=r.offsetY*n/l,o*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+o,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const So=-90,wo=1;class Ep extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new on(So,wo,t,e);o.layers=this.layers,this.add(o);const s=new on(So,wo,t,e);s.layers=this.layers,this.add(s);const r=new on(So,wo,t,e);r.layers=this.layers,this.add(r);const a=new on(So,wo,t,e);a.layers=this.layers,this.add(a);const c=new on(So,wo,t,e);c.layers=this.layers,this.add(c);const l=new on(So,wo,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,o,s,r,a,c]=e;for(const l of e)this.remove(l);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,o),t.render(e,s),t.setRenderTarget(n,1,o),t.render(e,r),t.setRenderTarget(n,2,o),t.render(e,a),t.setRenderTarget(n,3,o),t.render(e,c),t.setRenderTarget(n,4,o),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,o),t.render(e,h),t.setRenderTarget(f,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ef extends He{constructor(t,e,n,o,s,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ko,super(t,e,n,o,s,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Tp extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},o=[n,n,n,n,n,n];this.texture=new ef(o,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new kt(5,5,5),s=new _n({name:"CubemapFromEquirect",uniforms:Wo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Ai});s.uniforms.tEquirect.value=e;const r=new Ft(o,s),a=e.minFilter;return e.minFilter===Ji&&(e.minFilter=Rn),new Ep(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,o){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,o);t.setRenderTarget(s)}}const Ma=new k,Ap=new k,Cp=new Yt;class bi{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,o){return this.normal.set(t,e,n),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const o=Ma.subVectors(n,e).cross(Ap.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ma),o=this.normal.dot(n);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/o;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Cp.getNormalMatrix(t),o=this.coplanarPoint(Ma).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new lo,tr=new k;class hl{constructor(t=new bi,e=new bi,n=new bi,o=new bi,s=new bi,r=new bi){this.planes=[t,e,n,o,s,r]}set(t,e,n,o,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(o),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri){const n=this.planes,o=t.elements,s=o[0],r=o[1],a=o[2],c=o[3],l=o[4],h=o[5],f=o[6],u=o[7],p=o[8],g=o[9],x=o[10],m=o[11],d=o[12],v=o[13],_=o[14],M=o[15];if(n[0].setComponents(c-s,u-l,m-p,M-d).normalize(),n[1].setComponents(c+s,u+l,m+p,M+d).normalize(),n[2].setComponents(c+r,u+h,m+g,M+v).normalize(),n[3].setComponents(c-r,u-h,m-g,M-v).normalize(),n[4].setComponents(c-a,u-f,m-x,M-_).normalize(),e===ri)n[5].setComponents(c+a,u+f,m+x,M+_).normalize();else if(e===Ir)n[5].setComponents(a,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){const e=this.planes,n=t.center,o=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<o)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const o=e[n];if(tr.x=o.normal.x>0?t.max.x:t.min.x,tr.y=o.normal.y>0?t.max.y:t.min.y,tr.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nf(){let i=null,t=!1,e=null,n=null;function o(s,r){e(s,r),n=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(o),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Rp(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,h);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){const g=f[u],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function o(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:o,remove:s,update:r}}class Dn extends Kt{constructor(t=1,e=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:o};const s=t/2,r=e/2,a=Math.floor(n),c=Math.floor(o),l=a+1,h=c+1,f=t/a,u=e/c,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){const v=d*u-r;for(let _=0;_<l;_++){const M=_*f-s;g.push(M,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<a;v++){const _=v+l*d,M=v+l*(d+1),w=v+1+l*(d+1),b=v+1+l*d;p.push(_,M,b),p.push(M,w,b)}this.setIndex(p),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(x,3)),this.setAttribute("uv",new Dt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lp=`#ifdef USE_ALPHAHASH
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
#endif`,Dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zp=`#ifdef USE_AOMAP
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
#endif`,Op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fp=`#ifdef USE_BATCHING
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
#endif`,Bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vp=`#ifdef USE_IRIDESCENCE
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
#endif`,Wp=`#ifdef USE_BUMPMAP
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qp=`#define PI 3.141592653589793
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
} // validated`,t0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,e0=`vec3 transformedNormal = objectNormal;
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
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r0="gl_FragColor = linearToOutputTexel( gl_FragColor );",a0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,u0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x0=`#ifdef USE_GRADIENTMAP
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
}`,v0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y0=`uniform bool receiveShadow;
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
#endif`,b0=`#ifdef USE_ENVMAP
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
#endif`,S0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A0=`PhysicalMaterial material;
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
#endif`,C0=`struct PhysicalMaterial {
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
}`,R0=`
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
#endif`,P0=`#if defined( RE_IndirectDiffuse )
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
#endif`,L0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,B0=`#if defined( USE_POINTS_UV )
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
#endif`,k0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X0=`#ifdef USE_MORPHTARGETS
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
#endif`,q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J0=`#ifdef USE_NORMALMAP
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
#endif`,Q0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,om=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pm=`float getShadowMask() {
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
}`,mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gm=`#ifdef USE_SKINNING
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
#endif`,xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,_m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sm=`#ifdef USE_TRANSMISSION
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
#endif`,wm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pm=`uniform sampler2D t2D;
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`#include <common>
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
}`,zm=`#if DEPTH_PACKING == 3200
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
}`,Om=`#define DISTANCE
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
}`,Fm=`#define DISTANCE
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`uniform float scale;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Xm=`#define LAMBERT
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
}`,qm=`#define LAMBERT
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
}`,$m=`#define MATCAP
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
}`,Ym=`#define MATCAP
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
}`,jm=`#define NORMAL
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
}`,Zm=`#define NORMAL
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
}`,Km=`#define PHONG
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
}`,Jm=`#define PHONG
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
}`,Qm=`#define STANDARD
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
}`,tg=`#define STANDARD
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
}`,eg=`#define TOON
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
}`,ng=`#define TOON
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
}`,ig=`uniform float size;
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
}`,og=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,rg=`uniform vec3 color;
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
}`,ag=`uniform float rotation;
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
}`,cg=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Pp,alphahash_pars_fragment:Lp,alphamap_fragment:Dp,alphamap_pars_fragment:Ip,alphatest_fragment:Up,alphatest_pars_fragment:Np,aomap_fragment:zp,aomap_pars_fragment:Op,batching_pars_vertex:Fp,batching_vertex:Bp,begin_vertex:kp,beginnormal_vertex:Hp,bsdfs:Gp,iridescence_fragment:Vp,bumpmap_pars_fragment:Wp,clipping_planes_fragment:Xp,clipping_planes_pars_fragment:qp,clipping_planes_pars_vertex:$p,clipping_planes_vertex:Yp,color_fragment:jp,color_pars_fragment:Zp,color_pars_vertex:Kp,color_vertex:Jp,common:Qp,cube_uv_reflection_fragment:t0,defaultnormal_vertex:e0,displacementmap_pars_vertex:n0,displacementmap_vertex:i0,emissivemap_fragment:o0,emissivemap_pars_fragment:s0,colorspace_fragment:r0,colorspace_pars_fragment:a0,envmap_fragment:c0,envmap_common_pars_fragment:l0,envmap_pars_fragment:h0,envmap_pars_vertex:u0,envmap_physical_pars_fragment:b0,envmap_vertex:f0,fog_vertex:d0,fog_pars_vertex:p0,fog_fragment:m0,fog_pars_fragment:g0,gradientmap_pars_fragment:x0,lightmap_pars_fragment:v0,lights_lambert_fragment:_0,lights_lambert_pars_fragment:M0,lights_pars_begin:y0,lights_toon_fragment:S0,lights_toon_pars_fragment:w0,lights_phong_fragment:E0,lights_phong_pars_fragment:T0,lights_physical_fragment:A0,lights_physical_pars_fragment:C0,lights_fragment_begin:R0,lights_fragment_maps:P0,lights_fragment_end:L0,logdepthbuf_fragment:D0,logdepthbuf_pars_fragment:I0,logdepthbuf_pars_vertex:U0,logdepthbuf_vertex:N0,map_fragment:z0,map_pars_fragment:O0,map_particle_fragment:F0,map_particle_pars_fragment:B0,metalnessmap_fragment:k0,metalnessmap_pars_fragment:H0,morphinstance_vertex:G0,morphcolor_vertex:V0,morphnormal_vertex:W0,morphtarget_pars_vertex:X0,morphtarget_vertex:q0,normal_fragment_begin:$0,normal_fragment_maps:Y0,normal_pars_fragment:j0,normal_pars_vertex:Z0,normal_vertex:K0,normalmap_pars_fragment:J0,clearcoat_normal_fragment_begin:Q0,clearcoat_normal_fragment_maps:tm,clearcoat_pars_fragment:em,iridescence_pars_fragment:nm,opaque_fragment:im,packing:om,premultiplied_alpha_fragment:sm,project_vertex:rm,dithering_fragment:am,dithering_pars_fragment:cm,roughnessmap_fragment:lm,roughnessmap_pars_fragment:hm,shadowmap_pars_fragment:um,shadowmap_pars_vertex:fm,shadowmap_vertex:dm,shadowmask_pars_fragment:pm,skinbase_vertex:mm,skinning_pars_vertex:gm,skinning_vertex:xm,skinnormal_vertex:vm,specularmap_fragment:_m,specularmap_pars_fragment:Mm,tonemapping_fragment:ym,tonemapping_pars_fragment:bm,transmission_fragment:Sm,transmission_pars_fragment:wm,uv_pars_fragment:Em,uv_pars_vertex:Tm,uv_vertex:Am,worldpos_vertex:Cm,background_vert:Rm,background_frag:Pm,backgroundCube_vert:Lm,backgroundCube_frag:Dm,cube_vert:Im,cube_frag:Um,depth_vert:Nm,depth_frag:zm,distanceRGBA_vert:Om,distanceRGBA_frag:Fm,equirect_vert:Bm,equirect_frag:km,linedashed_vert:Hm,linedashed_frag:Gm,meshbasic_vert:Vm,meshbasic_frag:Wm,meshlambert_vert:Xm,meshlambert_frag:qm,meshmatcap_vert:$m,meshmatcap_frag:Ym,meshnormal_vert:jm,meshnormal_frag:Zm,meshphong_vert:Km,meshphong_frag:Jm,meshphysical_vert:Qm,meshphysical_frag:tg,meshtoon_vert:eg,meshtoon_frag:ng,points_vert:ig,points_frag:og,shadow_vert:sg,shadow_frag:rg,sprite_vert:ag,sprite_frag:cg},bt={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},On={basic:{uniforms:$e([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:$e([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:$e([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:$e([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:$e([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:$e([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:$e([bt.points,bt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:$e([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:$e([bt.common,bt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:$e([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:$e([bt.sprite,bt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:$e([bt.common,bt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:$e([bt.lights,bt.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};On.physical={uniforms:$e([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const er={r:0,b:0,g:0},Vi=new Ln,lg=new Wt;function hg(i,t,e,n,o,s,r){const a=new Rt(0);let c=s===!0?0:1,l,h,f=null,u=0,p=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_)),_}function x(v){let _=!1;const M=g(v);M===null?d(a,c):M&&M.isColor&&(d(M,1),_=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,_){const M=g(_);M&&(M.isCubeTexture||M.mapping===Vr)?(h===void 0&&(h=new Ft(new kt(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Wo(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(h)),Vi.copy(_.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lg.makeRotationFromEuler(Vi)),h.material.toneMapped=te.getTransfer(M.colorSpace)!==ae,(f!==M||u!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=M,u=M.version,p=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ft(new Dn(2,2),new _n({name:"BackgroundMaterial",uniforms:Wo(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=te.getTransfer(M.colorSpace)!==ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||u!==M.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=M,u=M.version,p=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function d(v,_){v.getRGB(er,Ju(i)),n.buffers.color.setClear(er.r,er.g,er.b,_,r)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),c=_,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,d(a,c)},render:x,addToRenderList:m}}function ug(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},o=u(null);let s=o,r=!1;function a(y,A,R,L,N){let C=!1;const D=f(L,R,A);s!==D&&(s=D,l(s.object)),C=p(y,L,R,N),C&&g(y,L,R,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(C||r)&&(r=!1,M(y,A,R,L),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function f(y,A,R){const L=R.wireframe===!0;let N=n[y.id];N===void 0&&(N={},n[y.id]=N);let C=N[A.id];C===void 0&&(C={},N[A.id]=C);let D=C[L];return D===void 0&&(D=u(c()),C[L]=D),D}function u(y){const A=[],R=[],L=[];for(let N=0;N<e;N++)A[N]=0,R[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:R,attributeDivisors:L,object:y,attributes:{},index:null}}function p(y,A,R,L){const N=s.attributes,C=A.attributes;let D=0;const B=R.getAttributes();for(const O in B)if(B[O].location>=0){const Z=N[O];let G=C[O];if(G===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(G=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(G=y.instanceColor)),Z===void 0||Z.attribute!==G||G&&Z.data!==G.data)return!0;D++}return s.attributesNum!==D||s.index!==L}function g(y,A,R,L){const N={},C=A.attributes;let D=0;const B=R.getAttributes();for(const O in B)if(B[O].location>=0){let Z=C[O];Z===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor));const G={};G.attribute=Z,Z&&Z.data&&(G.data=Z.data),N[O]=G,D++}s.attributes=N,s.attributesNum=D,s.index=L}function x(){const y=s.newAttributes;for(let A=0,R=y.length;A<R;A++)y[A]=0}function m(y){d(y,0)}function d(y,A){const R=s.newAttributes,L=s.enabledAttributes,N=s.attributeDivisors;R[y]=1,L[y]===0&&(i.enableVertexAttribArray(y),L[y]=1),N[y]!==A&&(i.vertexAttribDivisor(y,A),N[y]=A)}function v(){const y=s.newAttributes,A=s.enabledAttributes;for(let R=0,L=A.length;R<L;R++)A[R]!==y[R]&&(i.disableVertexAttribArray(R),A[R]=0)}function _(y,A,R,L,N,C,D){D===!0?i.vertexAttribIPointer(y,A,R,N,C):i.vertexAttribPointer(y,A,R,L,N,C)}function M(y,A,R,L){x();const N=L.attributes,C=R.getAttributes(),D=A.defaultAttributeValues;for(const B in C){const O=C[B];if(O.location>=0){let q=N[B];if(q===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(q=y.instanceColor)),q!==void 0){const Z=q.normalized,G=q.itemSize,st=t.get(q);if(st===void 0)continue;const et=st.buffer,V=st.type,Y=st.bytesPerElement,at=V===i.INT||V===i.UNSIGNED_INT||q.gpuType===nl;if(q.isInterleavedBufferAttribute){const rt=q.data,pt=rt.stride,vt=q.offset;if(rt.isInstancedInterleavedBuffer){for(let yt=0;yt<O.locationSize;yt++)d(O.location+yt,rt.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let yt=0;yt<O.locationSize;yt++)m(O.location+yt);i.bindBuffer(i.ARRAY_BUFFER,et);for(let yt=0;yt<O.locationSize;yt++)_(O.location+yt,G/O.locationSize,V,Z,pt*Y,(vt+G/O.locationSize*yt)*Y,at)}else{if(q.isInstancedBufferAttribute){for(let rt=0;rt<O.locationSize;rt++)d(O.location+rt,q.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let rt=0;rt<O.locationSize;rt++)m(O.location+rt);i.bindBuffer(i.ARRAY_BUFFER,et);for(let rt=0;rt<O.locationSize;rt++)_(O.location+rt,G/O.locationSize,V,Z,G*Y,G/O.locationSize*rt*Y,at)}}else if(D!==void 0){const Z=D[B];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(O.location,Z);break;case 3:i.vertexAttrib3fv(O.location,Z);break;case 4:i.vertexAttrib4fv(O.location,Z);break;default:i.vertexAttrib1fv(O.location,Z)}}}}v()}function w(){T();for(const y in n){const A=n[y];for(const R in A){const L=A[R];for(const N in L)h(L[N].object),delete L[N];delete A[R]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;const A=n[y.id];for(const R in A){const L=A[R];for(const N in L)h(L[N].object),delete L[N];delete A[R]}delete n[y.id]}function E(y){for(const A in n){const R=n[A];if(R[y.id]===void 0)continue;const L=R[y.id];for(const N in L)h(L[N].object),delete L[N];delete R[y.id]}}function T(){S(),r=!0,s!==o&&(s=o,l(s.object))}function S(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:T,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function fg(i,t,e){let n;function o(l){n=l}function s(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function a(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];e.update(p,n,1)}function c(l,h,f,u){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)r(l[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x]*u[x];e.update(g,n,1)}}this.setMode=o,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function dg(i,t,e,n){let o;function s(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function r(E){return!(E!==Pn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const T=E===Ps&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==li&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Fn&&!T)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:w,maxSamples:b}}function pg(i){const t=this;let e=null,n=0,o=!1,s=!1;const r=new bi,a=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||n!==0||o;return o=u,n=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!o||g===null||g.length===0||s&&!m)s?h(null):l();else{const v=s?0:n,_=v*4;let M=d.clippingState||null;c.value=M,M=h(g,u,_,p);for(let w=0;w!==_;++w)M[w]=e[w];d.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const d=p+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,M=p;_!==x;++_,M+=4)r.copy(f[_]).applyMatrix4(v,a),r.normal.toArray(m,M),m[M+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function mg(i){let t=new WeakMap;function e(r,a){return a===ic?r.mapping=ko:a===oc&&(r.mapping=Ho),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===ic||a===oc)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Tp(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",o),e(l.texture,r.mapping)}else return null}}return r}function o(r){const a=r.target;a.removeEventListener("dispose",o);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ds extends tf{constructor(t=-1,e=1,n=1,o=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=o,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,o,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=o,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let s=n-t,r=n+t,a=o+e,c=o-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Io=4,dh=[.125,.215,.35,.446,.526,.582],Zi=20,ya=new Ds,ph=new Rt;let ba=null,Sa=0,wa=0,Ea=!1;const Yi=(1+Math.sqrt(5))/2,Eo=1/Yi,mh=[new k(-Yi,Eo,0),new k(Yi,Eo,0),new k(-Eo,0,Yi),new k(Eo,0,Yi),new k(0,Yi,-Eo),new k(0,Yi,Eo),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class gh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,o=100){ba=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,o,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ba,Sa,wa),this._renderer.xr.enabled=Ea,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ko||t.mapping===Ho?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ba=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Ps,format:Pn,colorSpace:$o,depthBuffer:!1},o=xh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gg(s)),this._blurMaterial=xg(s,t,e)}return o}_compileMaterial(t){const e=new Ft(this._lodPlanes[0],t);this._renderer.compile(e,ya)}_sceneToCubeUV(t,e,n,o){const a=new on(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(ph),h.toneMapping=Ci,h.autoClear=!1;const p=new Bn({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),g=new Ft(new kt,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(ph),x=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):v===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const _=this._cubeSize;nr(o,v*_,d>2?_:0,_,_),h.setRenderTarget(o),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,o=t.mapping===ko||t.mapping===Ho;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vh());const s=o?this._cubemapMaterial:this._equirectMaterial,r=new Ft(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;nr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,ya)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const o=this._lodPlanes.length;for(let s=1;s<o;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mh[(o-s-1)%mh.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,o,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,o,"latitudinal",s),this._halfBlur(r,t,n,n,o,"longitudinal",s)}_halfBlur(t,e,n,o,s,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Ft(this._lodPlanes[o],l),u=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Zi-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):Zi;m>Zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);const d=[];let v=0;for(let E=0;E<Zi;++E){const T=E/x,S=Math.exp(-T*T/2);d.push(S),E===0?v+=S:E<m&&(v+=2*S)}for(let E=0;E<d.length;E++)d[E]=d[E]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=d,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;const M=this._sizeLods[o],w=3*M*(o>_-Io?o-_+Io:0),b=4*(this._cubeSize-M);nr(e,w,b,3*M,2*M),c.setRenderTarget(e),c.render(f,ya)}}function gg(i){const t=[],e=[],n=[];let o=i;const s=i-Io+1+dh.length;for(let r=0;r<s;r++){const a=Math.pow(2,o);e.push(a);let c=1/a;r>i-Io?c=dh[r-i+Io-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,x=3,m=2,d=1,v=new Float32Array(x*g*p),_=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let b=0;b<p;b++){const E=b%3*2/3-1,T=b>2?0:-1,S=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];v.set(S,x*g*b),_.set(u,m*g*b);const y=[b,b,b,b,b,b];M.set(y,d*g*b)}const w=new Kt;w.setAttribute("position",new Ee(v,x)),w.setAttribute("uv",new Ee(_,m)),w.setAttribute("faceIndex",new Ee(M,d)),t.push(w),o>Io&&o--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xh(i,t,e){const n=new Di(i,t,e);return n.texture.mapping=Vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,t,e,n,o){i.viewport.set(t,e,n,o),i.scissor.set(t,e,n,o)}function xg(i,t,e){const n=new Float32Array(Zi),o=new k(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ul(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function vh(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function _h(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function ul(){return`

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
	`}function vg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ic||c===oc,h=c===ko||c===Ho;if(l||h){let f=t.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new gh(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&o(p)?(e===null&&(e=new gh(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function o(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function _g(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let o;switch(n){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(n)}return t[n]=o,o}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const o=e(n);return o===null&&fs("THREE.WebGLRenderer: "+n+" extension not supported."),o}}}function Mg(i,t,e,n){const o={},s=new WeakMap;function r(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)t.remove(x[m])}u.removeEventListener("dispose",r),delete o[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return o[u.id]===!0||(u.addEventListener("dispose",r),o[u.id]=!0,e.memory.geometries++),u}function c(f){const u=f.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const x=p[g];for(let m=0,d=x.length;m<d;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(f){const u=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let _=0,M=v.length;_<M;_+=3){const w=v[_+0],b=v[_+1],E=v[_+2];u.push(w,b,b,E,E,w)}}else if(g!==void 0){const v=g.array;x=g.version;for(let _=0,M=v.length/3-1;_<M;_+=3){const w=_+0,b=_+1,E=_+2;u.push(w,b,b,E,E,w)}}else return;const m=new(qu(u)?Ku:Zu)(u,1);m.version=x;const d=s.get(f);d&&t.remove(d),s.set(f,m)}function h(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function yg(i,t,e){let n;function o(u){n=u}let s,r;function a(u){s=u.type,r=u.bytesPerElement}function c(u,p){i.drawElements(n,p,s,u*r),e.update(p,n,1)}function l(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,u*r,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,u,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function f(u,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<u.length;d++)l(u[d]/r,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,u,0,x,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v]*x[v];e.update(d,n,1)}}this.setMode=o,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function bg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function o(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:n}}function Sg(i,t,e){const n=new WeakMap,o=new ye;function s(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let S=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let _=0;p===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let M=a.attributes.position.count*_,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const b=new Float32Array(M*w*4*f),E=new Yu(b,M,w,f);E.type=Fn,E.needsUpdate=!0;const T=_*4;for(let y=0;y<f;y++){const A=m[y],R=d[y],L=v[y],N=M*w*4*y;for(let C=0;C<A.count;C++){const D=C*T;p===!0&&(o.fromBufferAttribute(A,C),b[N+D+0]=o.x,b[N+D+1]=o.y,b[N+D+2]=o.z,b[N+D+3]=0),g===!0&&(o.fromBufferAttribute(R,C),b[N+D+4]=o.x,b[N+D+5]=o.y,b[N+D+6]=o.z,b[N+D+7]=0),x===!0&&(o.fromBufferAttribute(L,C),b[N+D+8]=o.x,b[N+D+9]=o.y,b[N+D+10]=o.z,b[N+D+11]=L.itemSize===4?o.w:1)}}u={count:f,texture:E,size:new gt(M,w)},n.set(a,u),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];const g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function wg(i,t,e,n){let o=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,f=t.get(c,h);if(o.get(f)!==l&&(t.update(f),o.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),o.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;o.get(u)!==l&&(u.update(),o.set(u,l))}return f}function r(){o=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:r}}class of extends He{constructor(t,e,n,o,s,r,a,c,l,h=Oo){if(h!==Oo&&h!==Vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Oo&&(n=oo),n===void 0&&h===Vo&&(n=Go),super(null,o,s,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:pn,this.minFilter=c!==void 0?c:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const sf=new He,Mh=new of(1,1),rf=new Yu,af=new up,cf=new ef,yh=[],bh=[],Sh=new Float32Array(16),wh=new Float32Array(9),Eh=new Float32Array(4);function jo(i,t,e){const n=i[0];if(n<=0||n>0)return i;const o=t*e;let s=yh[o];if(s===void 0&&(s=new Float32Array(o),yh[o]=s),t!==0){n.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(s,a)}return s}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xr(i,t){let e=bh[t];e===void 0&&(e=new Int32Array(t),bh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Eg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function Cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function Rg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;Eh.set(n),i.uniformMatrix2fv(this.addr,!1,Eh),Ie(e,n)}}function Pg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;wh.set(n),i.uniformMatrix3fv(this.addr,!1,wh),Ie(e,n)}}function Lg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;Sh.set(n),i.uniformMatrix4fv(this.addr,!1,Sh),Ie(e,n)}}function Dg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function Ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function Ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function zg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function Fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function Bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function kg(i,t,e){const n=this.cache,o=e.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o);let s;this.type===i.SAMPLER_2D_SHADOW?(Mh.compareFunction=Xu,s=Mh):s=sf,e.setTexture2D(t||s,o)}function Hg(i,t,e){const n=this.cache,o=e.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),e.setTexture3D(t||af,o)}function Gg(i,t,e){const n=this.cache,o=e.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),e.setTextureCube(t||cf,o)}function Vg(i,t,e){const n=this.cache,o=e.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),e.setTexture2DArray(t||rf,o)}function Wg(i){switch(i){case 5126:return Eg;case 35664:return Tg;case 35665:return Ag;case 35666:return Cg;case 35674:return Rg;case 35675:return Pg;case 35676:return Lg;case 5124:case 35670:return Dg;case 35667:case 35671:return Ig;case 35668:case 35672:return Ug;case 35669:case 35673:return Ng;case 5125:return zg;case 36294:return Og;case 36295:return Fg;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Vg}}function Xg(i,t){i.uniform1fv(this.addr,t)}function qg(i,t){const e=jo(t,this.size,2);i.uniform2fv(this.addr,e)}function $g(i,t){const e=jo(t,this.size,3);i.uniform3fv(this.addr,e)}function Yg(i,t){const e=jo(t,this.size,4);i.uniform4fv(this.addr,e)}function jg(i,t){const e=jo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zg(i,t){const e=jo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Kg(i,t){const e=jo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Jg(i,t){i.uniform1iv(this.addr,t)}function Qg(i,t){i.uniform2iv(this.addr,t)}function tx(i,t){i.uniform3iv(this.addr,t)}function ex(i,t){i.uniform4iv(this.addr,t)}function nx(i,t){i.uniform1uiv(this.addr,t)}function ix(i,t){i.uniform2uiv(this.addr,t)}function ox(i,t){i.uniform3uiv(this.addr,t)}function sx(i,t){i.uniform4uiv(this.addr,t)}function rx(i,t,e){const n=this.cache,o=t.length,s=Xr(e,o);De(n,s)||(i.uniform1iv(this.addr,s),Ie(n,s));for(let r=0;r!==o;++r)e.setTexture2D(t[r]||sf,s[r])}function ax(i,t,e){const n=this.cache,o=t.length,s=Xr(e,o);De(n,s)||(i.uniform1iv(this.addr,s),Ie(n,s));for(let r=0;r!==o;++r)e.setTexture3D(t[r]||af,s[r])}function cx(i,t,e){const n=this.cache,o=t.length,s=Xr(e,o);De(n,s)||(i.uniform1iv(this.addr,s),Ie(n,s));for(let r=0;r!==o;++r)e.setTextureCube(t[r]||cf,s[r])}function lx(i,t,e){const n=this.cache,o=t.length,s=Xr(e,o);De(n,s)||(i.uniform1iv(this.addr,s),Ie(n,s));for(let r=0;r!==o;++r)e.setTexture2DArray(t[r]||rf,s[r])}function hx(i){switch(i){case 5126:return Xg;case 35664:return qg;case 35665:return $g;case 35666:return Yg;case 35674:return jg;case 35675:return Zg;case 35676:return Kg;case 5124:case 35670:return Jg;case 35667:case 35671:return Qg;case 35668:case 35672:return tx;case 35669:case 35673:return ex;case 5125:return nx;case 36294:return ix;case 36295:return ox;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return lx}}class ux{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wg(e.type)}}class fx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hx(e.type)}}class dx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const o=this.seq;for(let s=0,r=o.length;s!==r;++s){const a=o[s];a.setValue(t,e[a.id],n)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function Th(i,t){i.seq.push(t),i.map[t.id]=t}function px(i,t,e){const n=i.name,o=n.length;for(Ta.lastIndex=0;;){const s=Ta.exec(n),r=Ta.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===o){Th(e,l===void 0?new ux(a,i,t):new fx(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new dx(a),Th(e,f)),e=f}}}class Cr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const s=t.getActiveUniform(e,o),r=t.getUniformLocation(e,s.name);px(s,r,this)}}setValue(t,e,n,o){const s=this.map[e];s!==void 0&&s.setValue(t,n,o)}setOptional(t,e,n){const o=e[n];o!==void 0&&this.setValue(t,n,o)}static upload(t,e,n,o){for(let s=0,r=e.length;s!==r;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,o)}}static seqWithValue(t,e){const n=[];for(let o=0,s=t.length;o!==s;++o){const r=t[o];r.id in e&&n.push(r)}return n}}function Ah(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const mx=37297;let gx=0;function xx(i,t){const e=i.split(`
`),n=[],o=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=o;r<s;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Ch=new Yt;function vx(i){te._getMatrix(Ch,te.workingColorSpace,i);const t=`mat3( ${Ch.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case Wr:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Rh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),o=i.getShaderInfoLog(t).trim();if(n&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+o+`

`+xx(i.getShaderSource(t),r)}else return o}function _x(i,t){const e=vx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Mx(i,t){let e;switch(t){case Od:e="Linear";break;case Fd:e="Reinhard";break;case Bd:e="Cineon";break;case kd:e="ACESFilmic";break;case Gd:e="AgX";break;case Vd:e="Neutral";break;case Hd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ir=new k;function yx(){te.getLuminanceCoefficients(ir);const i=ir.x.toFixed(4),t=ir.y.toFixed(4),e=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function Sx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){const s=i.getActiveAttrib(t,o),r=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[r]={type:s.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function ds(i){return i!==""}function Ph(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(i){return i.replace(Ex,Ax)}const Tx=new Map;function Ax(i,t){let e=$t[t];if(e===void 0){const n=Tx.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ic(e)}const Cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(i){return i.replace(Cx,Rx)}function Rx(i,t,e,n){let o="";for(let s=parseInt(t);s<parseInt(e);s++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return o}function Ih(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Px(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Iu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ni&&(t="SHADOWMAP_TYPE_VSM"),t}function Lx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ko:case Ho:t="ENVMAP_TYPE_CUBE";break;case Vr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ho:t="ENVMAP_MODE_REFRACTION";break}return t}function Ix(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case el:t="ENVMAP_BLENDING_MULTIPLY";break;case Nd:t="ENVMAP_BLENDING_MIX";break;case zd:t="ENVMAP_BLENDING_ADD";break}return t}function Ux(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Nx(i,t,e,n){const o=i.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=Px(e),l=Lx(e),h=Dx(e),f=Ix(e),u=Ux(e),p=bx(e),g=Sx(s),x=o.createProgram();let m,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),d.length>0&&(d+=`
`)):(m=[Ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),d=[Ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ci?"#define TONE_MAPPING":"",e.toneMapping!==Ci?$t.tonemapping_pars_fragment:"",e.toneMapping!==Ci?Mx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,_x("linearToOutputTexel",e.outputColorSpace),yx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ds).join(`
`)),r=Ic(r),r=Ph(r,e),r=Lh(r,e),a=Ic(a),a=Ph(a,e),a=Lh(a,e),r=Dh(r),a=Dh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=v+m+r,M=v+d+a,w=Ah(o,o.VERTEX_SHADER,_),b=Ah(o,o.FRAGMENT_SHADER,M);o.attachShader(x,w),o.attachShader(x,b),e.index0AttributeName!==void 0?o.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(x,0,"position"),o.linkProgram(x);function E(A){if(i.debug.checkShaderErrors){const R=o.getProgramInfoLog(x).trim(),L=o.getShaderInfoLog(w).trim(),N=o.getShaderInfoLog(b).trim();let C=!0,D=!0;if(o.getProgramParameter(x,o.LINK_STATUS)===!1)if(C=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,x,w,b);else{const B=Rh(o,w,"vertex"),O=Rh(o,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(x,o.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+R+`
`+B+`
`+O)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(L===""||N==="")&&(D=!1);D&&(A.diagnostics={runnable:C,programLog:R,vertexShader:{log:L,prefix:m},fragmentShader:{log:N,prefix:d}})}o.deleteShader(w),o.deleteShader(b),T=new Cr(o,x),S=wx(o,x)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=o.getProgramParameter(x,mx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=b,this}let zx=0;class Ox{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,o=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(o)===!1&&(r.add(o),o.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Fx(t),e.set(t,n)),n}}class Fx{constructor(t){this.id=zx++,this.code=t,this.usedTimes=0}}function Bx(i,t,e,n,o,s,r){const a=new ll,c=new Ox,l=new Set,h=[],f=o.logarithmicDepthBuffer,u=o.vertexTextures;let p=o.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,A,R,L){const N=R.fog,C=L.geometry,D=S.isMeshStandardMaterial?R.environment:null,B=(S.isMeshStandardMaterial?e:t).get(S.envMap||D),O=B&&B.mapping===Vr?B.image.height:null,q=g[S.type];S.precision!==null&&(p=o.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Z=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,G=Z!==void 0?Z.length:0;let st=0;C.morphAttributes.position!==void 0&&(st=1),C.morphAttributes.normal!==void 0&&(st=2),C.morphAttributes.color!==void 0&&(st=3);let et,V,Y,at;if(q){const se=On[q];et=se.vertexShader,V=se.fragmentShader}else et=S.vertexShader,V=S.fragmentShader,c.update(S),Y=c.getVertexShaderID(S),at=c.getFragmentShaderID(S);const rt=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),vt=L.isInstancedMesh===!0,yt=L.isBatchedMesh===!0,ht=!!S.map,X=!!S.matcap,Q=!!B,z=!!S.aoMap,ft=!!S.lightMap,F=!!S.bumpMap,W=!!S.normalMap,H=!!S.displacementMap,tt=!!S.emissiveMap,nt=!!S.metalnessMap,I=!!S.roughnessMap,P=S.anisotropy>0,J=S.clearcoat>0,ct=S.dispersion>0,dt=S.iridescence>0,lt=S.sheen>0,Et=S.transmission>0,_t=P&&!!S.anisotropyMap,St=J&&!!S.clearcoatMap,Gt=J&&!!S.clearcoatNormalMap,xt=J&&!!S.clearcoatRoughnessMap,Pt=dt&&!!S.iridescenceMap,Bt=dt&&!!S.iridescenceThicknessMap,Ht=lt&&!!S.sheenColorMap,Lt=lt&&!!S.sheenRoughnessMap,Qt=!!S.specularMap,jt=!!S.specularColorMap,ge=!!S.specularIntensityMap,$=Et&&!!S.transmissionMap,wt=Et&&!!S.thicknessMap,ut=!!S.gradientMap,mt=!!S.alphaMap,Ct=S.alphaTest>0,Tt=!!S.alphaHash,Xt=!!S.extensions;let we=Ci;S.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(we=i.toneMapping);const Ge={shaderID:q,shaderType:S.type,shaderName:S.name,vertexShader:et,fragmentShader:V,defines:S.defines,customVertexShaderID:Y,customFragmentShaderID:at,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:yt,batchingColor:yt&&L._colorsTexture!==null,instancing:vt,instancingColor:vt&&L.instanceColor!==null,instancingMorph:vt&&L.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:$o,alphaToCoverage:!!S.alphaToCoverage,map:ht,matcap:X,envMap:Q,envMapMode:Q&&B.mapping,envMapCubeUVHeight:O,aoMap:z,lightMap:ft,bumpMap:F,normalMap:W,displacementMap:u&&H,emissiveMap:tt,normalMapObjectSpace:W&&S.normalMapType===$d,normalMapTangentSpace:W&&S.normalMapType===Wu,metalnessMap:nt,roughnessMap:I,anisotropy:P,anisotropyMap:_t,clearcoat:J,clearcoatMap:St,clearcoatNormalMap:Gt,clearcoatRoughnessMap:xt,dispersion:ct,iridescence:dt,iridescenceMap:Pt,iridescenceThicknessMap:Bt,sheen:lt,sheenColorMap:Ht,sheenRoughnessMap:Lt,specularMap:Qt,specularColorMap:jt,specularIntensityMap:ge,transmission:Et,transmissionMap:$,thicknessMap:wt,gradientMap:ut,opaque:S.transparent===!1&&S.blending===to&&S.alphaToCoverage===!1,alphaMap:mt,alphaTest:Ct,alphaHash:Tt,combine:S.combine,mapUv:ht&&x(S.map.channel),aoMapUv:z&&x(S.aoMap.channel),lightMapUv:ft&&x(S.lightMap.channel),bumpMapUv:F&&x(S.bumpMap.channel),normalMapUv:W&&x(S.normalMap.channel),displacementMapUv:H&&x(S.displacementMap.channel),emissiveMapUv:tt&&x(S.emissiveMap.channel),metalnessMapUv:nt&&x(S.metalnessMap.channel),roughnessMapUv:I&&x(S.roughnessMap.channel),anisotropyMapUv:_t&&x(S.anisotropyMap.channel),clearcoatMapUv:St&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&x(S.sheenRoughnessMap.channel),specularMapUv:Qt&&x(S.specularMap.channel),specularColorMapUv:jt&&x(S.specularColorMap.channel),specularIntensityMapUv:ge&&x(S.specularIntensityMap.channel),transmissionMapUv:$&&x(S.transmissionMap.channel),thicknessMapUv:wt&&x(S.thicknessMap.channel),alphaMapUv:mt&&x(S.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(W||P),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!C.attributes.uv&&(ht||mt),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:pt,skinning:L.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:st,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:ht&&S.map.isVideoTexture===!0&&te.getTransfer(S.map.colorSpace)===ae,decodeVideoTextureEmissive:tt&&S.emissiveMap.isVideoTexture===!0&&te.getTransfer(S.emissiveMap.colorSpace)===ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===le,flipSided:S.side===Ze,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Xt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&S.extensions.multiDraw===!0||yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function d(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)y.push(A),y.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(v(y,S),_(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function v(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function _(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){const y=g[S.type];let A;if(y){const R=On[y];A=Qu.clone(R.uniforms)}else A=S.uniforms;return A}function w(S,y){let A;for(let R=0,L=h.length;R<L;R++){const N=h[R];if(N.cacheKey===y){A=N,++A.usedTimes;break}}return A===void 0&&(A=new Nx(i,y,S,s),h.push(A)),A}function b(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function E(S){c.remove(S)}function T(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:w,releaseProgram:b,releaseShaderCache:E,programs:h,dispose:T}}function kx(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function o(r,a,c){i.get(r)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:o,dispose:s}}function Hx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Uh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nh(){const i=[];let t=0;const e=[],n=[],o=[];function s(){t=0,e.length=0,n.length=0,o.length=0}function r(f,u,p,g,x,m){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:u,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[t]=d):(d.id=f.id,d.object=f,d.geometry=u,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=x,d.group=m),t++,d}function a(f,u,p,g,x,m){const d=r(f,u,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?o.push(d):e.push(d)}function c(f,u,p,g,x,m){const d=r(f,u,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?o.unshift(d):e.unshift(d)}function l(f,u){e.length>1&&e.sort(f||Hx),n.length>1&&n.sort(u||Uh),o.length>1&&o.sort(u||Uh)}function h(){for(let f=t,u=i.length;f<u;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:o,init:s,push:a,unshift:c,finish:h,sort:l}}function Gx(){let i=new WeakMap;function t(n,o){const s=i.get(n);let r;return s===void 0?(r=new Nh,i.set(n,[r])):o>=s.length?(r=new Nh,s.push(r)):r=s[o],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Rt};break;case"SpotLight":e={position:new k,direction:new k,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function Wx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Xx=0;function qx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $x(i){const t=new Vx,e=Wx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);const o=new k,s=new Wt,r=new Wt;function a(l){let h=0,f=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,v=0,_=0,M=0,w=0,b=0,E=0;l.sort(qx);for(let S=0,y=l.length;S<y;S++){const A=l[S],R=A.color,L=A.intensity,N=A.distance,C=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=R.r*L,f+=R.g*L,u+=R.b*L;else if(A.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(A.sh.coefficients[D],L);E++}else if(A.isDirectionalLight){const D=t.get(A);if(D.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const B=A.shadow,O=e.get(A);O.shadowIntensity=B.intensity,O.shadowBias=B.bias,O.shadowNormalBias=B.normalBias,O.shadowRadius=B.radius,O.shadowMapSize=B.mapSize,n.directionalShadow[p]=O,n.directionalShadowMap[p]=C,n.directionalShadowMatrix[p]=A.shadow.matrix,v++}n.directional[p]=D,p++}else if(A.isSpotLight){const D=t.get(A);D.position.setFromMatrixPosition(A.matrixWorld),D.color.copy(R).multiplyScalar(L),D.distance=N,D.coneCos=Math.cos(A.angle),D.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),D.decay=A.decay,n.spot[x]=D;const B=A.shadow;if(A.map&&(n.spotLightMap[w]=A.map,w++,B.updateMatrices(A),A.castShadow&&b++),n.spotLightMatrix[x]=B.matrix,A.castShadow){const O=e.get(A);O.shadowIntensity=B.intensity,O.shadowBias=B.bias,O.shadowNormalBias=B.normalBias,O.shadowRadius=B.radius,O.shadowMapSize=B.mapSize,n.spotShadow[x]=O,n.spotShadowMap[x]=C,M++}x++}else if(A.isRectAreaLight){const D=t.get(A);D.color.copy(R).multiplyScalar(L),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=D,m++}else if(A.isPointLight){const D=t.get(A);if(D.color.copy(A.color).multiplyScalar(A.intensity),D.distance=A.distance,D.decay=A.decay,A.castShadow){const B=A.shadow,O=e.get(A);O.shadowIntensity=B.intensity,O.shadowBias=B.bias,O.shadowNormalBias=B.normalBias,O.shadowRadius=B.radius,O.shadowMapSize=B.mapSize,O.shadowCameraNear=B.camera.near,O.shadowCameraFar=B.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=C,n.pointShadowMatrix[g]=A.shadow.matrix,_++}n.point[g]=D,g++}else if(A.isHemisphereLight){const D=t.get(A);D.skyColor.copy(A.color).multiplyScalar(L),D.groundColor.copy(A.groundColor).multiplyScalar(L),n.hemi[d]=D,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const T=n.hash;(T.directionalLength!==p||T.pointLength!==g||T.spotLength!==x||T.rectAreaLength!==m||T.hemiLength!==d||T.numDirectionalShadows!==v||T.numPointShadows!==_||T.numSpotShadows!==M||T.numSpotMaps!==w||T.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+w-b,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,T.directionalLength=p,T.pointLength=g,T.spotLength=x,T.rectAreaLength=m,T.hemiLength=d,T.numDirectionalShadows=v,T.numPointShadows=_,T.numSpotShadows=M,T.numSpotMaps=w,T.numLightProbes=E,n.version=Xx++)}function c(l,h){let f=0,u=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let d=0,v=l.length;d<v;d++){const _=l[d];if(_.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),o.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(m),f++}else if(_.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),o.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),r.identity(),s.copy(_.matrixWorld),s.premultiply(m),r.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),g++}else if(_.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function zh(i){const t=new $x(i),e=[],n=[];function o(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:r}}function Yx(i){let t=new WeakMap;function e(o,s=0){const r=t.get(o);let a;return r===void 0?(a=new zh(i),t.set(o,[a])):s>=r.length?(a=new zh(i),r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class jx extends zi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zx extends zi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jx=`uniform sampler2D shadow_pass;
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
}`;function Qx(i,t,e){let n=new hl;const o=new gt,s=new gt,r=new ye,a=new jx({depthPacking:qd}),c=new Zx,l={},h=e.maxTextureSize,f={[Li]:Ze,[Ze]:Li,[le]:le},u=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:Kx,fragmentShader:Jx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Kt;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ft(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tl;let d=this.type;this.render=function(b,E,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),R=i.state;R.setBlending(Ai),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const L=d!==ni&&this.type===ni,N=d===ni&&this.type!==ni;for(let C=0,D=b.length;C<D;C++){const B=b[C],O=B.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;o.copy(O.mapSize);const q=O.getFrameExtents();if(o.multiply(q),s.copy(O.mapSize),(o.x>h||o.y>h)&&(o.x>h&&(s.x=Math.floor(h/q.x),o.x=s.x*q.x,O.mapSize.x=s.x),o.y>h&&(s.y=Math.floor(h/q.y),o.y=s.y*q.y,O.mapSize.y=s.y)),O.map===null||L===!0||N===!0){const G=this.type!==ni?{minFilter:pn,magFilter:pn}:{};O.map!==null&&O.map.dispose(),O.map=new Di(o.x,o.y,G),O.map.texture.name=B.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const Z=O.getViewportCount();for(let G=0;G<Z;G++){const st=O.getViewport(G);r.set(s.x*st.x,s.y*st.y,s.x*st.z,s.y*st.w),R.viewport(r),O.updateMatrices(B,G),n=O.getFrustum(),M(E,T,O.camera,B,this.type)}O.isPointLightShadow!==!0&&this.type===ni&&v(O,T),O.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,A)};function v(b,E){const T=t.update(x);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Di(o.x,o.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,T,u,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,T,p,x,null)}function _(b,E,T,S){let y=null;const A=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)y=A;else if(y=T.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const R=y.uuid,L=E.uuid;let N=l[R];N===void 0&&(N={},l[R]=N);let C=N[L];C===void 0&&(C=y.clone(),N[L]=C,E.addEventListener("dispose",w)),y=C}if(y.visible=E.visible,y.wireframe=E.wireframe,S===ni?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:f[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,T.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const R=i.properties.get(y);R.light=T}return y}function M(b,E,T,S,y){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===ni)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const L=t.update(b),N=b.material;if(Array.isArray(N)){const C=L.groups;for(let D=0,B=C.length;D<B;D++){const O=C[D],q=N[O.materialIndex];if(q&&q.visible){const Z=_(b,q,S,y);b.onBeforeShadow(i,b,E,T,L,Z,O),i.renderBufferDirect(T,null,L,Z,b,O),b.onAfterShadow(i,b,E,T,L,Z,O)}}}else if(N.visible){const C=_(b,N,S,y);b.onBeforeShadow(i,b,E,T,L,C,null),i.renderBufferDirect(T,null,L,C,b,null),b.onAfterShadow(i,b,E,T,L,C,null)}}const R=b.children;for(let L=0,N=R.length;L<N;L++)M(R[L],E,T,S,y)}function w(b){b.target.removeEventListener("dispose",w);for(const T in l){const S=l[T],y=b.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const tv={[Za]:Ka,[Ja]:ec,[Qa]:nc,[Bo]:tc,[Ka]:Za,[ec]:Ja,[nc]:Qa,[tc]:Bo};function ev(i,t){function e(){let $=!1;const wt=new ye;let ut=null;const mt=new ye(0,0,0,0);return{setMask:function(Ct){ut!==Ct&&!$&&(i.colorMask(Ct,Ct,Ct,Ct),ut=Ct)},setLocked:function(Ct){$=Ct},setClear:function(Ct,Tt,Xt,we,Ge){Ge===!0&&(Ct*=we,Tt*=we,Xt*=we),wt.set(Ct,Tt,Xt,we),mt.equals(wt)===!1&&(i.clearColor(Ct,Tt,Xt,we),mt.copy(wt))},reset:function(){$=!1,ut=null,mt.set(-1,0,0,0)}}}function n(){let $=!1,wt=!1,ut=null,mt=null,Ct=null;return{setReversed:function(Tt){if(wt!==Tt){const Xt=t.get("EXT_clip_control");wt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const we=Ct;Ct=null,this.setClear(we)}wt=Tt},getReversed:function(){return wt},setTest:function(Tt){Tt?rt(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(Tt){ut!==Tt&&!$&&(i.depthMask(Tt),ut=Tt)},setFunc:function(Tt){if(wt&&(Tt=tv[Tt]),mt!==Tt){switch(Tt){case Za:i.depthFunc(i.NEVER);break;case Ka:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case Bo:i.depthFunc(i.LEQUAL);break;case Qa:i.depthFunc(i.EQUAL);break;case tc:i.depthFunc(i.GEQUAL);break;case ec:i.depthFunc(i.GREATER);break;case nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=Tt}},setLocked:function(Tt){$=Tt},setClear:function(Tt){Ct!==Tt&&(wt&&(Tt=1-Tt),i.clearDepth(Tt),Ct=Tt)},reset:function(){$=!1,ut=null,mt=null,Ct=null,wt=!1}}}function o(){let $=!1,wt=null,ut=null,mt=null,Ct=null,Tt=null,Xt=null,we=null,Ge=null;return{setTest:function(se){$||(se?rt(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(se){wt!==se&&!$&&(i.stencilMask(se),wt=se)},setFunc:function(se,Mn,Xn){(ut!==se||mt!==Mn||Ct!==Xn)&&(i.stencilFunc(se,Mn,Xn),ut=se,mt=Mn,Ct=Xn)},setOp:function(se,Mn,Xn){(Tt!==se||Xt!==Mn||we!==Xn)&&(i.stencilOp(se,Mn,Xn),Tt=se,Xt=Mn,we=Xn)},setLocked:function(se){$=se},setClear:function(se){Ge!==se&&(i.clearStencil(se),Ge=se)},reset:function(){$=!1,wt=null,ut=null,mt=null,Ct=null,Tt=null,Xt=null,we=null,Ge=null}}}const s=new e,r=new n,a=new o,c=new WeakMap,l=new WeakMap;let h={},f={},u=new WeakMap,p=[],g=null,x=!1,m=null,d=null,v=null,_=null,M=null,w=null,b=null,E=new Rt(0,0,0),T=0,S=!1,y=null,A=null,R=null,L=null,N=null;const C=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,B=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(O)[1]),D=B>=1):O.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),D=B>=2);let q=null,Z={};const G=i.getParameter(i.SCISSOR_BOX),st=i.getParameter(i.VIEWPORT),et=new ye().fromArray(G),V=new ye().fromArray(st);function Y($,wt,ut,mt){const Ct=new Uint8Array(4),Tt=i.createTexture();i.bindTexture($,Tt),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<ut;Xt++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(wt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return Tt}const at={};at[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),r.setFunc(Bo),F(!1),W(Hl),rt(i.CULL_FACE),z(Ai);function rt($){h[$]!==!0&&(i.enable($),h[$]=!0)}function pt($){h[$]!==!1&&(i.disable($),h[$]=!1)}function vt($,wt){return f[$]!==wt?(i.bindFramebuffer($,wt),f[$]=wt,$===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=wt),$===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function yt($,wt){let ut=p,mt=!1;if($){ut=u.get(wt),ut===void 0&&(ut=[],u.set(wt,ut));const Ct=$.textures;if(ut.length!==Ct.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,Xt=Ct.length;Tt<Xt;Tt++)ut[Tt]=i.COLOR_ATTACHMENT0+Tt;ut.length=Ct.length,mt=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,mt=!0);mt&&i.drawBuffers(ut)}function ht($){return g!==$?(i.useProgram($),g=$,!0):!1}const X={[ji]:i.FUNC_ADD,[vd]:i.FUNC_SUBTRACT,[_d]:i.FUNC_REVERSE_SUBTRACT};X[Md]=i.MIN,X[yd]=i.MAX;const Q={[bd]:i.ZERO,[Sd]:i.ONE,[wd]:i.SRC_COLOR,[Ya]:i.SRC_ALPHA,[Pd]:i.SRC_ALPHA_SATURATE,[Cd]:i.DST_COLOR,[Td]:i.DST_ALPHA,[Ed]:i.ONE_MINUS_SRC_COLOR,[ja]:i.ONE_MINUS_SRC_ALPHA,[Rd]:i.ONE_MINUS_DST_COLOR,[Ad]:i.ONE_MINUS_DST_ALPHA,[Ld]:i.CONSTANT_COLOR,[Dd]:i.ONE_MINUS_CONSTANT_COLOR,[Id]:i.CONSTANT_ALPHA,[Ud]:i.ONE_MINUS_CONSTANT_ALPHA};function z($,wt,ut,mt,Ct,Tt,Xt,we,Ge,se){if($===Ai){x===!0&&(pt(i.BLEND),x=!1);return}if(x===!1&&(rt(i.BLEND),x=!0),$!==xd){if($!==m||se!==S){if((d!==ji||M!==ji)&&(i.blendEquation(i.FUNC_ADD),d=ji,M=ji),se)switch($){case to:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.ONE,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case to:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}v=null,_=null,w=null,b=null,E.set(0,0,0),T=0,m=$,S=se}return}Ct=Ct||wt,Tt=Tt||ut,Xt=Xt||mt,(wt!==d||Ct!==M)&&(i.blendEquationSeparate(X[wt],X[Ct]),d=wt,M=Ct),(ut!==v||mt!==_||Tt!==w||Xt!==b)&&(i.blendFuncSeparate(Q[ut],Q[mt],Q[Tt],Q[Xt]),v=ut,_=mt,w=Tt,b=Xt),(we.equals(E)===!1||Ge!==T)&&(i.blendColor(we.r,we.g,we.b,Ge),E.copy(we),T=Ge),m=$,S=!1}function ft($,wt){$.side===le?pt(i.CULL_FACE):rt(i.CULL_FACE);let ut=$.side===Ze;wt&&(ut=!ut),F(ut),$.blending===to&&$.transparent===!1?z(Ai):z($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),r.setFunc($.depthFunc),r.setTest($.depthTest),r.setMask($.depthWrite),s.setMask($.colorWrite);const mt=$.stencilWrite;a.setTest(mt),mt&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),tt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function F($){y!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),y=$)}function W($){$!==md?(rt(i.CULL_FACE),$!==A&&($===Hl?i.cullFace(i.BACK):$===gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),A=$}function H($){$!==R&&(D&&i.lineWidth($),R=$)}function tt($,wt,ut){$?(rt(i.POLYGON_OFFSET_FILL),(L!==wt||N!==ut)&&(i.polygonOffset(wt,ut),L=wt,N=ut)):pt(i.POLYGON_OFFSET_FILL)}function nt($){$?rt(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function I($){$===void 0&&($=i.TEXTURE0+C-1),q!==$&&(i.activeTexture($),q=$)}function P($,wt,ut){ut===void 0&&(q===null?ut=i.TEXTURE0+C-1:ut=q);let mt=Z[ut];mt===void 0&&(mt={type:void 0,texture:void 0},Z[ut]=mt),(mt.type!==$||mt.texture!==wt)&&(q!==ut&&(i.activeTexture(ut),q=ut),i.bindTexture($,wt||at[$]),mt.type=$,mt.texture=wt)}function J(){const $=Z[q];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function dt(){try{i.compressedTexImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function lt(){try{i.texSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function xt(){try{i.texStorage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Pt(){try{i.texImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ht($){et.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),et.copy($))}function Lt($){V.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),V.copy($))}function Qt($,wt){let ut=l.get(wt);ut===void 0&&(ut=new WeakMap,l.set(wt,ut));let mt=ut.get($);mt===void 0&&(mt=i.getUniformBlockIndex(wt,$.name),ut.set($,mt))}function jt($,wt){const mt=l.get(wt).get($);c.get(wt)!==mt&&(i.uniformBlockBinding(wt,mt,$.__bindingPointIndex),c.set(wt,mt))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},q=null,Z={},f={},u=new WeakMap,p=[],g=null,x=!1,m=null,d=null,v=null,_=null,M=null,w=null,b=null,E=new Rt(0,0,0),T=0,S=!1,y=null,A=null,R=null,L=null,N=null,et.set(0,0,i.canvas.width,i.canvas.height),V.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:rt,disable:pt,bindFramebuffer:vt,drawBuffers:yt,useProgram:ht,setBlending:z,setMaterial:ft,setFlipSided:F,setCullFace:W,setLineWidth:H,setPolygonOffset:tt,setScissorTest:nt,activeTexture:I,bindTexture:P,unbindTexture:J,compressedTexImage2D:ct,compressedTexImage3D:dt,texImage2D:Pt,texImage3D:Bt,updateUBOMapping:Qt,uniformBlockBinding:jt,texStorage2D:Gt,texStorage3D:xt,texSubImage2D:lt,texSubImage3D:Et,compressedTexSubImage2D:_t,compressedTexSubImage3D:St,scissor:Ht,viewport:Lt,reset:ge}}function Oh(i,t,e,n){const o=nv(n);switch(e){case Fu:return i*t;case ku:return i*t;case Hu:return i*t*2;case sl:return i*t/o.components*o.byteLength;case rl:return i*t/o.components*o.byteLength;case Gu:return i*t*2/o.components*o.byteLength;case al:return i*t*2/o.components*o.byteLength;case Bu:return i*t*3/o.components*o.byteLength;case Pn:return i*t*4/o.components*o.byteLength;case cl:return i*t*4/o.components*o.byteLength;case br:case Sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wr:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ac:case lc:return Math.max(i,16)*Math.max(t,8)/4;case rc:case cc:return Math.max(i,8)*Math.max(t,8)/2;case hc:case uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case mc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case gc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case _c:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case bc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ec:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Tr:case Ac:case Cc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vu:case Rc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Pc:case Lc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function nv(i){switch(i){case li:case Nu:return{byteLength:1,components:1};case bs:case zu:case Ps:return{byteLength:2,components:1};case il:case ol:return{byteLength:2,components:4};case oo:case nl:case Fn:return{byteLength:4,components:1};case Ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function iv(i,t,e,n,o,s,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,h=new WeakMap;let f;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,P){return p?new OffscreenCanvas(I,P):Ss("canvas")}function x(I,P,J){let ct=1;const dt=nt(I);if((dt.width>J||dt.height>J)&&(ct=J/Math.max(dt.width,dt.height)),ct<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const lt=Math.floor(ct*dt.width),Et=Math.floor(ct*dt.height);f===void 0&&(f=g(lt,Et));const _t=P?g(lt,Et):f;return _t.width=lt,_t.height=Et,_t.getContext("2d").drawImage(I,0,0,lt,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+lt+"x"+Et+")."),_t}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),I;return I}function m(I){return I.generateMipmaps}function d(I){i.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,P,J,ct,dt=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let lt=P;if(P===i.RED&&(J===i.FLOAT&&(lt=i.R32F),J===i.HALF_FLOAT&&(lt=i.R16F),J===i.UNSIGNED_BYTE&&(lt=i.R8)),P===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(lt=i.R8UI),J===i.UNSIGNED_SHORT&&(lt=i.R16UI),J===i.UNSIGNED_INT&&(lt=i.R32UI),J===i.BYTE&&(lt=i.R8I),J===i.SHORT&&(lt=i.R16I),J===i.INT&&(lt=i.R32I)),P===i.RG&&(J===i.FLOAT&&(lt=i.RG32F),J===i.HALF_FLOAT&&(lt=i.RG16F),J===i.UNSIGNED_BYTE&&(lt=i.RG8)),P===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(lt=i.RG8UI),J===i.UNSIGNED_SHORT&&(lt=i.RG16UI),J===i.UNSIGNED_INT&&(lt=i.RG32UI),J===i.BYTE&&(lt=i.RG8I),J===i.SHORT&&(lt=i.RG16I),J===i.INT&&(lt=i.RG32I)),P===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),J===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),J===i.UNSIGNED_INT&&(lt=i.RGB32UI),J===i.BYTE&&(lt=i.RGB8I),J===i.SHORT&&(lt=i.RGB16I),J===i.INT&&(lt=i.RGB32I)),P===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),J===i.UNSIGNED_INT&&(lt=i.RGBA32UI),J===i.BYTE&&(lt=i.RGBA8I),J===i.SHORT&&(lt=i.RGBA16I),J===i.INT&&(lt=i.RGBA32I)),P===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),P===i.RGBA){const Et=dt?Wr:te.getTransfer(ct);J===i.FLOAT&&(lt=i.RGBA32F),J===i.HALF_FLOAT&&(lt=i.RGBA16F),J===i.UNSIGNED_BYTE&&(lt=Et===ae?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function M(I,P){let J;return I?P===null||P===oo||P===Go?J=i.DEPTH24_STENCIL8:P===Fn?J=i.DEPTH32F_STENCIL8:P===bs&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===oo||P===Go?J=i.DEPTH_COMPONENT24:P===Fn?J=i.DEPTH_COMPONENT32F:P===bs&&(J=i.DEPTH_COMPONENT16),J}function w(I,P){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==pn&&I.minFilter!==Rn?Math.log2(Math.max(P.width,P.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?P.mipmaps.length:1}function b(I){const P=I.target;P.removeEventListener("dispose",b),T(P),P.isVideoTexture&&h.delete(P)}function E(I){const P=I.target;P.removeEventListener("dispose",E),y(P)}function T(I){const P=n.get(I);if(P.__webglInit===void 0)return;const J=I.source,ct=u.get(J);if(ct){const dt=ct[P.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&S(I),Object.keys(ct).length===0&&u.delete(J)}n.remove(I)}function S(I){const P=n.get(I);i.deleteTexture(P.__webglTexture);const J=I.source,ct=u.get(J);delete ct[P.__cacheKey],r.memory.textures--}function y(I){const P=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(P.__webglFramebuffer[ct]))for(let dt=0;dt<P.__webglFramebuffer[ct].length;dt++)i.deleteFramebuffer(P.__webglFramebuffer[ct][dt]);else i.deleteFramebuffer(P.__webglFramebuffer[ct]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[ct])}else{if(Array.isArray(P.__webglFramebuffer))for(let ct=0;ct<P.__webglFramebuffer.length;ct++)i.deleteFramebuffer(P.__webglFramebuffer[ct]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let ct=0;ct<P.__webglColorRenderbuffer.length;ct++)P.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[ct]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const J=I.textures;for(let ct=0,dt=J.length;ct<dt;ct++){const lt=n.get(J[ct]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),r.memory.textures--),n.remove(J[ct])}n.remove(I)}let A=0;function R(){A=0}function L(){const I=A;return I>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),A+=1,I}function N(I){const P=[];return P.push(I.wrapS),P.push(I.wrapT),P.push(I.wrapR||0),P.push(I.magFilter),P.push(I.minFilter),P.push(I.anisotropy),P.push(I.internalFormat),P.push(I.format),P.push(I.type),P.push(I.generateMipmaps),P.push(I.premultiplyAlpha),P.push(I.flipY),P.push(I.unpackAlignment),P.push(I.colorSpace),P.join()}function C(I,P){const J=n.get(I);if(I.isVideoTexture&&H(I),I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){const ct=I.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(J,I,P);return}}e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+P)}function D(I,P){const J=n.get(I);if(I.version>0&&J.__version!==I.version){V(J,I,P);return}e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+P)}function B(I,P){const J=n.get(I);if(I.version>0&&J.__version!==I.version){V(J,I,P);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+P)}function O(I,P){const J=n.get(I);if(I.version>0&&J.__version!==I.version){Y(J,I,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+P)}const q={[io]:i.REPEAT,[Ki]:i.CLAMP_TO_EDGE,[sc]:i.MIRRORED_REPEAT},Z={[pn]:i.NEAREST,[Wd]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[Qr]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},G={[Yd]:i.NEVER,[tp]:i.ALWAYS,[jd]:i.LESS,[Xu]:i.LEQUAL,[Zd]:i.EQUAL,[Qd]:i.GEQUAL,[Kd]:i.GREATER,[Jd]:i.NOTEQUAL};function st(I,P){if(P.type===Fn&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===Rn||P.magFilter===Qr||P.magFilter===Os||P.magFilter===Ji||P.minFilter===Rn||P.minFilter===Qr||P.minFilter===Os||P.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,q[P.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,q[P.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,q[P.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Z[P.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Z[P.minFilter]),P.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,G[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===pn||P.minFilter!==Os&&P.minFilter!==Ji||P.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,o.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function et(I,P){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,P.addEventListener("dispose",b));const ct=P.source;let dt=u.get(ct);dt===void 0&&(dt={},u.set(ct,dt));const lt=N(P);if(lt!==I.__cacheKey){dt[lt]===void 0&&(dt[lt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,J=!0),dt[lt].usedTimes++;const Et=dt[I.__cacheKey];Et!==void 0&&(dt[I.__cacheKey].usedTimes--,Et.usedTimes===0&&S(P)),I.__cacheKey=lt,I.__webglTexture=dt[lt].texture}return J}function V(I,P,J){let ct=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(ct=i.TEXTURE_3D);const dt=et(I,P),lt=P.source;e.bindTexture(ct,I.__webglTexture,i.TEXTURE0+J);const Et=n.get(lt);if(lt.version!==Et.__version||dt===!0){e.activeTexture(i.TEXTURE0+J);const _t=te.getPrimaries(te.workingColorSpace),St=P.colorSpace===si?null:te.getPrimaries(P.colorSpace),Gt=P.colorSpace===si||_t===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let xt=x(P.image,!1,o.maxTextureSize);xt=tt(P,xt);const Pt=s.convert(P.format,P.colorSpace),Bt=s.convert(P.type);let Ht=_(P.internalFormat,Pt,Bt,P.colorSpace,P.isVideoTexture);st(ct,P);let Lt;const Qt=P.mipmaps,jt=P.isVideoTexture!==!0,ge=Et.__version===void 0||dt===!0,$=lt.dataReady,wt=w(P,xt);if(P.isDepthTexture)Ht=M(P.format===Vo,P.type),ge&&(jt?e.texStorage2D(i.TEXTURE_2D,1,Ht,xt.width,xt.height):e.texImage2D(i.TEXTURE_2D,0,Ht,xt.width,xt.height,0,Pt,Bt,null));else if(P.isDataTexture)if(Qt.length>0){jt&&ge&&e.texStorage2D(i.TEXTURE_2D,wt,Ht,Qt[0].width,Qt[0].height);for(let ut=0,mt=Qt.length;ut<mt;ut++)Lt=Qt[ut],jt?$&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Lt.width,Lt.height,Pt,Bt,Lt.data):e.texImage2D(i.TEXTURE_2D,ut,Ht,Lt.width,Lt.height,0,Pt,Bt,Lt.data);P.generateMipmaps=!1}else jt?(ge&&e.texStorage2D(i.TEXTURE_2D,wt,Ht,xt.width,xt.height),$&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt.width,xt.height,Pt,Bt,xt.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,xt.width,xt.height,0,Pt,Bt,xt.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){jt&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Ht,Qt[0].width,Qt[0].height,xt.depth);for(let ut=0,mt=Qt.length;ut<mt;ut++)if(Lt=Qt[ut],P.format!==Pn)if(Pt!==null)if(jt){if($)if(P.layerUpdates.size>0){const Ct=Oh(Lt.width,Lt.height,P.format,P.type);for(const Tt of P.layerUpdates){const Xt=Lt.data.subarray(Tt*Ct/Lt.data.BYTES_PER_ELEMENT,(Tt+1)*Ct/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,Tt,Lt.width,Lt.height,1,Pt,Xt)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Lt.width,Lt.height,xt.depth,Pt,Lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Ht,Lt.width,Lt.height,xt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?$&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Lt.width,Lt.height,xt.depth,Pt,Bt,Lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Ht,Lt.width,Lt.height,xt.depth,0,Pt,Bt,Lt.data)}else{jt&&ge&&e.texStorage2D(i.TEXTURE_2D,wt,Ht,Qt[0].width,Qt[0].height);for(let ut=0,mt=Qt.length;ut<mt;ut++)Lt=Qt[ut],P.format!==Pn?Pt!==null?jt?$&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,Lt.width,Lt.height,Pt,Lt.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Ht,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?$&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Lt.width,Lt.height,Pt,Bt,Lt.data):e.texImage2D(i.TEXTURE_2D,ut,Ht,Lt.width,Lt.height,0,Pt,Bt,Lt.data)}else if(P.isDataArrayTexture)if(jt){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Ht,xt.width,xt.height,xt.depth),$)if(P.layerUpdates.size>0){const ut=Oh(xt.width,xt.height,P.format,P.type);for(const mt of P.layerUpdates){const Ct=xt.data.subarray(mt*ut/xt.data.BYTES_PER_ELEMENT,(mt+1)*ut/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,xt.width,xt.height,1,Pt,Bt,Ct)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Bt,xt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,xt.width,xt.height,xt.depth,0,Pt,Bt,xt.data);else if(P.isData3DTexture)jt?(ge&&e.texStorage3D(i.TEXTURE_3D,wt,Ht,xt.width,xt.height,xt.depth),$&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Bt,xt.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,xt.width,xt.height,xt.depth,0,Pt,Bt,xt.data);else if(P.isFramebufferTexture){if(ge)if(jt)e.texStorage2D(i.TEXTURE_2D,wt,Ht,xt.width,xt.height);else{let ut=xt.width,mt=xt.height;for(let Ct=0;Ct<wt;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,Ht,ut,mt,0,Pt,Bt,null),ut>>=1,mt>>=1}}else if(Qt.length>0){if(jt&&ge){const ut=nt(Qt[0]);e.texStorage2D(i.TEXTURE_2D,wt,Ht,ut.width,ut.height)}for(let ut=0,mt=Qt.length;ut<mt;ut++)Lt=Qt[ut],jt?$&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Pt,Bt,Lt):e.texImage2D(i.TEXTURE_2D,ut,Ht,Pt,Bt,Lt);P.generateMipmaps=!1}else if(jt){if(ge){const ut=nt(xt);e.texStorage2D(i.TEXTURE_2D,wt,Ht,ut.width,ut.height)}$&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Bt,xt)}else e.texImage2D(i.TEXTURE_2D,0,Ht,Pt,Bt,xt);m(P)&&d(ct),Et.__version=lt.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function Y(I,P,J){if(P.image.length!==6)return;const ct=et(I,P),dt=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+J);const lt=n.get(dt);if(dt.version!==lt.__version||ct===!0){e.activeTexture(i.TEXTURE0+J);const Et=te.getPrimaries(te.workingColorSpace),_t=P.colorSpace===si?null:te.getPrimaries(P.colorSpace),St=P.colorSpace===si||Et===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Gt=P.isCompressedTexture||P.image[0].isCompressedTexture,xt=P.image[0]&&P.image[0].isDataTexture,Pt=[];for(let mt=0;mt<6;mt++)!Gt&&!xt?Pt[mt]=x(P.image[mt],!0,o.maxCubemapSize):Pt[mt]=xt?P.image[mt].image:P.image[mt],Pt[mt]=tt(P,Pt[mt]);const Bt=Pt[0],Ht=s.convert(P.format,P.colorSpace),Lt=s.convert(P.type),Qt=_(P.internalFormat,Ht,Lt,P.colorSpace),jt=P.isVideoTexture!==!0,ge=lt.__version===void 0||ct===!0,$=dt.dataReady;let wt=w(P,Bt);st(i.TEXTURE_CUBE_MAP,P);let ut;if(Gt){jt&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Qt,Bt.width,Bt.height);for(let mt=0;mt<6;mt++){ut=Pt[mt].mipmaps;for(let Ct=0;Ct<ut.length;Ct++){const Tt=ut[Ct];P.format!==Pn?Ht!==null?jt?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ct,0,0,Tt.width,Tt.height,Ht,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ct,Qt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ct,0,0,Tt.width,Tt.height,Ht,Lt,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ct,Qt,Tt.width,Tt.height,0,Ht,Lt,Tt.data)}}}else{if(ut=P.mipmaps,jt&&ge){ut.length>0&&wt++;const mt=nt(Pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Qt,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(xt){jt?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Pt[mt].width,Pt[mt].height,Ht,Lt,Pt[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Qt,Pt[mt].width,Pt[mt].height,0,Ht,Lt,Pt[mt].data);for(let Ct=0;Ct<ut.length;Ct++){const Xt=ut[Ct].image[mt].image;jt?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ct+1,0,0,Xt.width,Xt.height,Ht,Lt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ct+1,Qt,Xt.width,Xt.height,0,Ht,Lt,Xt.data)}}else{jt?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Ht,Lt,Pt[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Qt,Ht,Lt,Pt[mt]);for(let Ct=0;Ct<ut.length;Ct++){const Tt=ut[Ct];jt?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ct+1,0,0,Ht,Lt,Tt.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ct+1,Qt,Ht,Lt,Tt.image[mt])}}}m(P)&&d(i.TEXTURE_CUBE_MAP),lt.__version=dt.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function at(I,P,J,ct,dt,lt){const Et=s.convert(J.format,J.colorSpace),_t=s.convert(J.type),St=_(J.internalFormat,Et,_t,J.colorSpace),Gt=n.get(P),xt=n.get(J);if(xt.__renderTarget=P,!Gt.__hasExternalTextures){const Pt=Math.max(1,P.width>>lt),Bt=Math.max(1,P.height>>lt);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,lt,St,Pt,Bt,P.depth,0,Et,_t,null):e.texImage2D(dt,lt,St,Pt,Bt,0,Et,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),W(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,dt,xt.__webglTexture,0,F(P)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,dt,xt.__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(I,P,J){if(i.bindRenderbuffer(i.RENDERBUFFER,I),P.depthBuffer){const ct=P.depthTexture,dt=ct&&ct.isDepthTexture?ct.type:null,lt=M(P.stencilBuffer,dt),Et=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=F(P);W(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,lt,P.width,P.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,lt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,lt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,I)}else{const ct=P.textures;for(let dt=0;dt<ct.length;dt++){const lt=ct[dt],Et=s.convert(lt.format,lt.colorSpace),_t=s.convert(lt.type),St=_(lt.internalFormat,Et,_t,lt.colorSpace),Gt=F(P);J&&W(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,St,P.width,P.height):W(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,St,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,St,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(I,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=n.get(P.depthTexture);ct.__renderTarget=P,(!ct.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),C(P.depthTexture,0);const dt=ct.__webglTexture,lt=F(P);if(P.depthTexture.format===Oo)W(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0);else if(P.depthTexture.format===Vo)W(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function vt(I){const P=n.get(I),J=I.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==I.depthTexture){const ct=I.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),ct){const dt=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,ct.removeEventListener("dispose",dt)};ct.addEventListener("dispose",dt),P.__depthDisposeCallback=dt}P.__boundDepthTexture=ct}if(I.depthTexture&&!P.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");pt(P.__webglFramebuffer,I)}else if(J){P.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[ct]),P.__webglDepthbuffer[ct]===void 0)P.__webglDepthbuffer[ct]=i.createRenderbuffer(),rt(P.__webglDepthbuffer[ct],I,!1);else{const dt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=P.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,lt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),rt(P.__webglDepthbuffer,I,!1);else{const ct=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,dt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(I,P,J){const ct=n.get(I);P!==void 0&&at(ct.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&vt(I)}function ht(I){const P=I.texture,J=n.get(I),ct=n.get(P);I.addEventListener("dispose",E);const dt=I.textures,lt=I.isWebGLCubeRenderTarget===!0,Et=dt.length>1;if(Et||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=P.version,r.memory.textures++),lt){J.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(P.mipmaps&&P.mipmaps.length>0){J.__webglFramebuffer[_t]=[];for(let St=0;St<P.mipmaps.length;St++)J.__webglFramebuffer[_t][St]=i.createFramebuffer()}else J.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){J.__webglFramebuffer=[];for(let _t=0;_t<P.mipmaps.length;_t++)J.__webglFramebuffer[_t]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Et)for(let _t=0,St=dt.length;_t<St;_t++){const Gt=n.get(dt[_t]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),r.memory.textures++)}if(I.samples>0&&W(I)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let _t=0;_t<dt.length;_t++){const St=dt[_t];J.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[_t]);const Gt=s.convert(St.format,St.colorSpace),xt=s.convert(St.type),Pt=_(St.internalFormat,Gt,xt,St.colorSpace,I.isXRRenderTarget===!0),Bt=F(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Pt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,J.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(J.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),st(i.TEXTURE_CUBE_MAP,P);for(let _t=0;_t<6;_t++)if(P.mipmaps&&P.mipmaps.length>0)for(let St=0;St<P.mipmaps.length;St++)at(J.__webglFramebuffer[_t][St],I,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,St);else at(J.__webglFramebuffer[_t],I,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(P)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let _t=0,St=dt.length;_t<St;_t++){const Gt=dt[_t],xt=n.get(Gt);e.bindTexture(i.TEXTURE_2D,xt.__webglTexture),st(i.TEXTURE_2D,Gt),at(J.__webglFramebuffer,I,Gt,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),m(Gt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(_t=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,ct.__webglTexture),st(_t,P),P.mipmaps&&P.mipmaps.length>0)for(let St=0;St<P.mipmaps.length;St++)at(J.__webglFramebuffer[St],I,P,i.COLOR_ATTACHMENT0,_t,St);else at(J.__webglFramebuffer,I,P,i.COLOR_ATTACHMENT0,_t,0);m(P)&&d(_t),e.unbindTexture()}I.depthBuffer&&vt(I)}function X(I){const P=I.textures;for(let J=0,ct=P.length;J<ct;J++){const dt=P[J];if(m(dt)){const lt=v(I),Et=n.get(dt).__webglTexture;e.bindTexture(lt,Et),d(lt),e.unbindTexture()}}}const Q=[],z=[];function ft(I){if(I.samples>0){if(W(I)===!1){const P=I.textures,J=I.width,ct=I.height;let dt=i.COLOR_BUFFER_BIT;const lt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(I),_t=P.length>1;if(_t)for(let St=0;St<P.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let St=0;St<P.length;St++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[St]);const Gt=n.get(P[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,J,ct,0,0,J,ct,dt,i.NEAREST),c===!0&&(Q.length=0,z.length=0,Q.push(i.COLOR_ATTACHMENT0+St),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Q.push(lt),z.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let St=0;St<P.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Et.__webglColorRenderbuffer[St]);const Gt=n.get(P[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const P=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function F(I){return Math.min(o.maxSamples,I.samples)}function W(I){const P=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function H(I){const P=r.render.frame;h.get(I)!==P&&(h.set(I,P),I.update())}function tt(I,P){const J=I.colorSpace,ct=I.format,dt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||J!==$o&&J!==si&&(te.getTransfer(J)===ae?(ct!==Pn||dt!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),P}function nt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=R,this.setTexture2D=C,this.setTexture2DArray=D,this.setTexture3D=B,this.setTextureCube=O,this.rebindTextures=yt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=W}function ov(i,t){function e(n,o=si){let s;const r=te.getTransfer(o);if(n===li)return i.UNSIGNED_BYTE;if(n===il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ol)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ou)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nu)return i.BYTE;if(n===zu)return i.SHORT;if(n===bs)return i.UNSIGNED_SHORT;if(n===nl)return i.INT;if(n===oo)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Ps)return i.HALF_FLOAT;if(n===Fu)return i.ALPHA;if(n===Bu)return i.RGB;if(n===Pn)return i.RGBA;if(n===ku)return i.LUMINANCE;if(n===Hu)return i.LUMINANCE_ALPHA;if(n===Oo)return i.DEPTH_COMPONENT;if(n===Vo)return i.DEPTH_STENCIL;if(n===sl)return i.RED;if(n===rl)return i.RED_INTEGER;if(n===Gu)return i.RG;if(n===al)return i.RG_INTEGER;if(n===cl)return i.RGBA_INTEGER;if(n===br||n===Sr||n===wr||n===Er)if(r===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===br)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===br)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rc||n===ac||n===cc||n===lc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===rc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ac)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hc||n===uc||n===fc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===hc||n===uc)return r===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===fc)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===dc||n===pc||n===mc||n===gc||n===xc||n===vc||n===_c||n===Mc||n===yc||n===bc||n===Sc||n===wc||n===Ec||n===Tc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===dc)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pc)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mc)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gc)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xc)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vc)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_c)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mc)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bc)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sc)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wc)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ec)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tc)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tr||n===Ac||n===Cc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Tr)return r===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ac)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vu||n===Rc||n===Pc||n===Lc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Tr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Rc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Go?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class sv extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class re extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rv={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let o=null,s=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(o=e.getPose(t.targetRaySpace,n),o===null&&s!==null&&(o=s),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rv)))}return a!==null&&(a.visible=o!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cv=`
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

}`;class lv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const o=new He,s=t.properties.get(o);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _n({vertexShader:av,fragmentShader:cv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ft(new Dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hv extends ao{constructor(t,e){super();const n=this;let o=null,s=1,r=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,p=null,g=null;const x=new lv,m=e.getContextAttributes();let d=null,v=null;const _=[],M=[],w=new gt;let b=null;const E=new on;E.viewport=new ye;const T=new on;T.viewport=new ye;const S=[E,T],y=new sv;let A=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=_[V];return Y===void 0&&(Y=new Aa,_[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=_[V];return Y===void 0&&(Y=new Aa,_[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=_[V];return Y===void 0&&(Y=new Aa,_[V]=Y),Y.getHandSpace()};function L(V){const Y=M.indexOf(V.inputSource);if(Y===-1)return;const at=_[Y];at!==void 0&&(at.update(V.inputSource,V.frame,l||r),at.dispatchEvent({type:V.type,data:V.inputSource}))}function N(){o.removeEventListener("select",L),o.removeEventListener("selectstart",L),o.removeEventListener("selectend",L),o.removeEventListener("squeeze",L),o.removeEventListener("squeezestart",L),o.removeEventListener("squeezeend",L),o.removeEventListener("end",N),o.removeEventListener("inputsourceschange",C);for(let V=0;V<_.length;V++){const Y=M[V];Y!==null&&(M[V]=null,_[V].disconnect(Y))}A=null,R=null,x.reset(),t.setRenderTarget(d),p=null,u=null,f=null,o=null,v=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return o},this.setSession=async function(V){if(o=V,o!==null){if(d=t.getRenderTarget(),o.addEventListener("select",L),o.addEventListener("selectstart",L),o.addEventListener("selectend",L),o.addEventListener("squeeze",L),o.addEventListener("squeezestart",L),o.addEventListener("squeezeend",L),o.addEventListener("end",N),o.addEventListener("inputsourceschange",C),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(w),o.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(o,e,Y),o.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Di(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:li,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,at=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=m.stencil?Vo:Oo,at=m.stencil?Go:oo);const pt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:s};f=new XRWebGLBinding(o,e),u=f.createProjectionLayer(pt),o.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Di(u.textureWidth,u.textureHeight,{format:Pn,type:li,depthTexture:new of(u.textureWidth,u.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await o.requestReferenceSpace(a),et.setContext(o),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function C(V){for(let Y=0;Y<V.removed.length;Y++){const at=V.removed[Y],rt=M.indexOf(at);rt>=0&&(M[rt]=null,_[rt].disconnect(at))}for(let Y=0;Y<V.added.length;Y++){const at=V.added[Y];let rt=M.indexOf(at);if(rt===-1){for(let vt=0;vt<_.length;vt++)if(vt>=M.length){M.push(at),rt=vt;break}else if(M[vt]===null){M[vt]=at,rt=vt;break}if(rt===-1)break}const pt=_[rt];pt&&pt.connect(at)}}const D=new k,B=new k;function O(V,Y,at){D.setFromMatrixPosition(Y.matrixWorld),B.setFromMatrixPosition(at.matrixWorld);const rt=D.distanceTo(B),pt=Y.projectionMatrix.elements,vt=at.projectionMatrix.elements,yt=pt[14]/(pt[10]-1),ht=pt[14]/(pt[10]+1),X=(pt[9]+1)/pt[5],Q=(pt[9]-1)/pt[5],z=(pt[8]-1)/pt[0],ft=(vt[8]+1)/vt[0],F=yt*z,W=yt*ft,H=rt/(-z+ft),tt=H*-z;if(Y.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(tt),V.translateZ(H),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),pt[10]===-1)V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const nt=yt+H,I=ht+H,P=F-tt,J=W+(rt-tt),ct=X*ht/I*nt,dt=Q*ht/I*nt;V.projectionMatrix.makePerspective(P,J,ct,dt,nt,I),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function q(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(o===null)return;let Y=V.near,at=V.far;x.texture!==null&&(x.depthNear>0&&(Y=x.depthNear),x.depthFar>0&&(at=x.depthFar)),y.near=T.near=E.near=Y,y.far=T.far=E.far=at,(A!==y.near||R!==y.far)&&(o.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,R=y.far),E.layers.mask=V.layers.mask|2,T.layers.mask=V.layers.mask|4,y.layers.mask=E.layers.mask|T.layers.mask;const rt=V.parent,pt=y.cameras;q(y,rt);for(let vt=0;vt<pt.length;vt++)q(pt[vt],rt);pt.length===2?O(y,E,T):y.projectionMatrix.copy(E.projectionMatrix),Z(V,y,rt)};function Z(V,Y,at){at===null?V.matrix.copy(Y.matrixWorld):(V.matrix.copy(at.matrixWorld),V.matrix.invert(),V.matrix.multiply(Y.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Dc*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(V){c=V,u!==null&&(u.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let G=null;function st(V,Y){if(h=Y.getViewerPose(l||r),g=Y,h!==null){const at=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let rt=!1;at.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let vt=0;vt<at.length;vt++){const yt=at[vt];let ht=null;if(p!==null)ht=p.getViewport(yt);else{const Q=f.getViewSubImage(u,yt);ht=Q.viewport,vt===0&&(t.setRenderTargetTextures(v,Q.colorTexture,u.ignoreDepthValues?void 0:Q.depthStencilTexture),t.setRenderTarget(v))}let X=S[vt];X===void 0&&(X=new on,X.layers.enable(vt),X.viewport=new ye,S[vt]=X),X.matrix.fromArray(yt.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(yt.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(ht.x,ht.y,ht.width,ht.height),vt===0&&(y.matrix.copy(X.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(X)}const pt=o.enabledFeatures;if(pt&&pt.includes("depth-sensing")){const vt=f.getDepthInformation(at[0]);vt&&vt.isValid&&vt.texture&&x.init(t,vt,o.renderState)}}for(let at=0;at<_.length;at++){const rt=M[at],pt=_[at];rt!==null&&pt!==void 0&&pt.update(rt,Y,l||r)}G&&G(V,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const et=new nf;et.setAnimationLoop(st),this.setAnimationLoop=function(V){G=V},this.dispose=function(){}}}const Wi=new Ln,uv=new Wt;function fv(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Ju(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function o(m,d,v,_,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,v,_):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ze&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ze&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=t.get(d),_=v.envMap,M=v.envMapRotation;_&&(m.envMap.value=_,Wi.copy(M),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(uv.makeRotationFromEuler(Wi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=_*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ze&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function dv(i,t,e,n){let o={},s={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){const M=_.program;n.uniformBlockBinding(v,M)}function l(v,_){let M=o[v.id];M===void 0&&(g(v),M=h(v),o[v.id]=M,v.addEventListener("dispose",m));const w=_.program;n.updateUBOMapping(v,w);const b=t.render.frame;s[v.id]!==b&&(u(v),s[v.id]=b)}function h(v){const _=f();v.__bindingPointIndex=_;const M=i.createBuffer(),w=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function f(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const _=o[v.id],M=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let b=0,E=M.length;b<E;b++){const T=Array.isArray(M[b])?M[b]:[M[b]];for(let S=0,y=T.length;S<y;S++){const A=T[S];if(p(A,b,S,w)===!0){const R=A.__offset,L=Array.isArray(A.value)?A.value:[A.value];let N=0;for(let C=0;C<L.length;C++){const D=L[C],B=x(D);typeof D=="number"||typeof D=="boolean"?(A.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,R+N,A.__data)):D.isMatrix3?(A.__data[0]=D.elements[0],A.__data[1]=D.elements[1],A.__data[2]=D.elements[2],A.__data[3]=0,A.__data[4]=D.elements[3],A.__data[5]=D.elements[4],A.__data[6]=D.elements[5],A.__data[7]=0,A.__data[8]=D.elements[6],A.__data[9]=D.elements[7],A.__data[10]=D.elements[8],A.__data[11]=0):(D.toArray(A.__data,N),N+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,R,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,_,M,w){const b=v.value,E=_+"_"+M;if(w[E]===void 0)return typeof b=="number"||typeof b=="boolean"?w[E]=b:w[E]=b.clone(),!0;{const T=w[E];if(typeof b=="number"||typeof b=="boolean"){if(T!==b)return w[E]=b,!0}else if(T.equals(b)===!1)return T.copy(b),!0}return!1}function g(v){const _=v.uniforms;let M=0;const w=16;for(let E=0,T=_.length;E<T;E++){const S=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,A=S.length;y<A;y++){const R=S[y],L=Array.isArray(R.value)?R.value:[R.value];for(let N=0,C=L.length;N<C;N++){const D=L[N],B=x(D),O=M%w,q=O%B.boundary,Z=O+q;M+=q,Z!==0&&w-Z<B.storage&&(M+=w-Z),R.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=M,M+=B.storage}}}const b=M%w;return b>0&&(M+=w-b),v.__size=M,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const M=r.indexOf(_.__bindingPointIndex);r.splice(M,1),i.deleteBuffer(o[_.id]),delete o[_.id],delete s[_.id]}function d(){for(const v in o)i.deleteBuffer(o[v]);r=[],o={},s={}}return{bind:c,update:l,dispose:d}}class lf{constructor(t={}){const{canvas:e=ip(),context:n=null,depth:o=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const v=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pe,this.toneMapping=Ci,this.toneMappingExposure=1;const M=this;let w=!1,b=0,E=0,T=null,S=-1,y=null;const A=new ye,R=new ye;let L=null;const N=new Rt(0);let C=0,D=e.width,B=e.height,O=1,q=null,Z=null;const G=new ye(0,0,D,B),st=new ye(0,0,D,B);let et=!1;const V=new hl;let Y=!1,at=!1;const rt=new Wt,pt=new Wt,vt=new k,yt=new ye,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let X=!1;function Q(){return T===null?O:1}let z=n;function ft(U,j){return e.getContext(U,j)}try{const U={alpha:!0,depth:o,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qc}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),z===null){const j="webgl2";if(z=ft(j,U),z===null)throw ft(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let F,W,H,tt,nt,I,P,J,ct,dt,lt,Et,_t,St,Gt,xt,Pt,Bt,Ht,Lt,Qt,jt,ge,$;function wt(){F=new _g(z),F.init(),jt=new ov(z,F),W=new dg(z,F,t,jt),H=new ev(z,F),W.reverseDepthBuffer&&u&&H.buffers.depth.setReversed(!0),tt=new bg(z),nt=new kx,I=new iv(z,F,H,nt,W,jt,tt),P=new mg(M),J=new vg(M),ct=new Rp(z),ge=new ug(z,ct),dt=new Mg(z,ct,tt,ge),lt=new wg(z,dt,ct,tt),Ht=new Sg(z,W,I),xt=new pg(nt),Et=new Bx(M,P,J,F,W,ge,xt),_t=new fv(M,nt),St=new Gx,Gt=new Yx(F),Bt=new hg(M,P,J,H,lt,p,c),Pt=new Qx(M,lt,W),$=new dv(z,tt,W,H),Lt=new fg(z,F,tt),Qt=new yg(z,F,tt),tt.programs=Et.programs,M.capabilities=W,M.extensions=F,M.properties=nt,M.renderLists=St,M.shadowMap=Pt,M.state=H,M.info=tt}wt();const ut=new hv(M,z);this.xr=ut,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const U=F.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=F.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(U){U!==void 0&&(O=U,this.setSize(D,B,!1))},this.getSize=function(U){return U.set(D,B)},this.setSize=function(U,j,it=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=U,B=j,e.width=Math.floor(U*O),e.height=Math.floor(j*O),it===!0&&(e.style.width=U+"px",e.style.height=j+"px"),this.setViewport(0,0,U,j)},this.getDrawingBufferSize=function(U){return U.set(D*O,B*O).floor()},this.setDrawingBufferSize=function(U,j,it){D=U,B=j,O=it,e.width=Math.floor(U*it),e.height=Math.floor(j*it),this.setViewport(0,0,U,j)},this.getCurrentViewport=function(U){return U.copy(A)},this.getViewport=function(U){return U.copy(G)},this.setViewport=function(U,j,it,ot){U.isVector4?G.set(U.x,U.y,U.z,U.w):G.set(U,j,it,ot),H.viewport(A.copy(G).multiplyScalar(O).round())},this.getScissor=function(U){return U.copy(st)},this.setScissor=function(U,j,it,ot){U.isVector4?st.set(U.x,U.y,U.z,U.w):st.set(U,j,it,ot),H.scissor(R.copy(st).multiplyScalar(O).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(U){H.setScissorTest(et=U)},this.setOpaqueSort=function(U){q=U},this.setTransparentSort=function(U){Z=U},this.getClearColor=function(U){return U.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(U=!0,j=!0,it=!0){let ot=0;if(U){let K=!1;if(T!==null){const Mt=T.texture.format;K=Mt===cl||Mt===al||Mt===rl}if(K){const Mt=T.texture.type,At=Mt===li||Mt===oo||Mt===bs||Mt===Go||Mt===il||Mt===ol,It=Bt.getClearColor(),Ut=Bt.getClearAlpha(),Vt=It.r,qt=It.g,Nt=It.b;At?(g[0]=Vt,g[1]=qt,g[2]=Nt,g[3]=Ut,z.clearBufferuiv(z.COLOR,0,g)):(x[0]=Vt,x[1]=qt,x[2]=Nt,x[3]=Ut,z.clearBufferiv(z.COLOR,0,x))}else ot|=z.COLOR_BUFFER_BIT}j&&(ot|=z.DEPTH_BUFFER_BIT),it&&(ot|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),St.dispose(),Gt.dispose(),nt.dispose(),P.dispose(),J.dispose(),lt.dispose(),ge.dispose(),$.dispose(),Et.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Il),ut.removeEventListener("sessionend",Ul),Fi.stop()};function mt(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const U=tt.autoReset,j=Pt.enabled,it=Pt.autoUpdate,ot=Pt.needsUpdate,K=Pt.type;wt(),tt.autoReset=U,Pt.enabled=j,Pt.autoUpdate=it,Pt.needsUpdate=ot,Pt.type=K}function Tt(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Xt(U){const j=U.target;j.removeEventListener("dispose",Xt),we(j)}function we(U){Ge(U),nt.remove(U)}function Ge(U){const j=nt.get(U).programs;j!==void 0&&(j.forEach(function(it){Et.releaseProgram(it)}),U.isShaderMaterial&&Et.releaseShaderCache(U))}this.renderBufferDirect=function(U,j,it,ot,K,Mt){j===null&&(j=ht);const At=K.isMesh&&K.matrixWorld.determinant()<0,It=fd(U,j,it,ot,K);H.setMaterial(ot,At);let Ut=it.index,Vt=1;if(ot.wireframe===!0){if(Ut=dt.getWireframeAttribute(it),Ut===void 0)return;Vt=2}const qt=it.drawRange,Nt=it.attributes.position;let ee=qt.start*Vt,xe=(qt.start+qt.count)*Vt;Mt!==null&&(ee=Math.max(ee,Mt.start*Vt),xe=Math.min(xe,(Mt.start+Mt.count)*Vt)),Ut!==null?(ee=Math.max(ee,0),xe=Math.min(xe,Ut.count)):Nt!=null&&(ee=Math.max(ee,0),xe=Math.min(xe,Nt.count));const ve=xe-ee;if(ve<0||ve===1/0)return;ge.setup(K,ot,It,it,Ut);let Ke,ie=Lt;if(Ut!==null&&(Ke=ct.get(Ut),ie=Qt,ie.setIndex(Ke)),K.isMesh)ot.wireframe===!0?(H.setLineWidth(ot.wireframeLinewidth*Q()),ie.setMode(z.LINES)):ie.setMode(z.TRIANGLES);else if(K.isLine){let zt=ot.linewidth;zt===void 0&&(zt=1),H.setLineWidth(zt*Q()),K.isLineSegments?ie.setMode(z.LINES):K.isLineLoop?ie.setMode(z.LINE_LOOP):ie.setMode(z.LINE_STRIP)}else K.isPoints?ie.setMode(z.POINTS):K.isSprite&&ie.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ie.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(F.get("WEBGL_multi_draw"))ie.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const zt=K._multiDrawStarts,qn=K._multiDrawCounts,oe=K._multiDrawCount,yn=Ut?ct.get(Ut).bytesPerElement:1,ho=nt.get(ot).currentProgram.getUniforms();for(let cn=0;cn<oe;cn++)ho.setValue(z,"_gl_DrawID",cn),ie.render(zt[cn]/yn,qn[cn])}else if(K.isInstancedMesh)ie.renderInstances(ee,ve,K.count);else if(it.isInstancedBufferGeometry){const zt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,qn=Math.min(it.instanceCount,zt);ie.renderInstances(ee,ve,qn)}else ie.render(ee,ve)};function se(U,j,it){U.transparent===!0&&U.side===le&&U.forceSinglePass===!1?(U.side=Ze,U.needsUpdate=!0,zs(U,j,it),U.side=Li,U.needsUpdate=!0,zs(U,j,it),U.side=le):zs(U,j,it)}this.compile=function(U,j,it=null){it===null&&(it=U),d=Gt.get(it),d.init(j),_.push(d),it.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(d.pushLight(K),K.castShadow&&d.pushShadow(K))}),U!==it&&U.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(d.pushLight(K),K.castShadow&&d.pushShadow(K))}),d.setupLights();const ot=new Set;return U.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Mt=K.material;if(Mt)if(Array.isArray(Mt))for(let At=0;At<Mt.length;At++){const It=Mt[At];se(It,it,K),ot.add(It)}else se(Mt,it,K),ot.add(Mt)}),_.pop(),d=null,ot},this.compileAsync=function(U,j,it=null){const ot=this.compile(U,j,it);return new Promise(K=>{function Mt(){if(ot.forEach(function(At){nt.get(At).currentProgram.isReady()&&ot.delete(At)}),ot.size===0){K(U);return}setTimeout(Mt,10)}F.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Mn=null;function Xn(U){Mn&&Mn(U)}function Il(){Fi.stop()}function Ul(){Fi.start()}const Fi=new nf;Fi.setAnimationLoop(Xn),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(U){Mn=U,ut.setAnimationLoop(U),U===null?Fi.stop():Fi.start()},ut.addEventListener("sessionstart",Il),ut.addEventListener("sessionend",Ul),this.render=function(U,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(j),j=ut.getCamera()),U.isScene===!0&&U.onBeforeRender(M,U,j,T),d=Gt.get(U,_.length),d.init(j),_.push(d),pt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),V.setFromProjectionMatrix(pt),at=this.localClippingEnabled,Y=xt.init(this.clippingPlanes,at),m=St.get(U,v.length),m.init(),v.push(m),ut.enabled===!0&&ut.isPresenting===!0){const Mt=M.xr.getDepthSensingMesh();Mt!==null&&Jr(Mt,j,-1/0,M.sortObjects)}Jr(U,j,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(q,Z),X=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,X&&Bt.addToRenderList(m,U),this.info.render.frame++,Y===!0&&xt.beginShadows();const it=d.state.shadowsArray;Pt.render(it,U,j),Y===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=m.opaque,K=m.transmissive;if(d.setupLights(),j.isArrayCamera){const Mt=j.cameras;if(K.length>0)for(let At=0,It=Mt.length;At<It;At++){const Ut=Mt[At];zl(ot,K,U,Ut)}X&&Bt.render(U);for(let At=0,It=Mt.length;At<It;At++){const Ut=Mt[At];Nl(m,U,Ut,Ut.viewport)}}else K.length>0&&zl(ot,K,U,j),X&&Bt.render(U),Nl(m,U,j);T!==null&&(I.updateMultisampleRenderTarget(T),I.updateRenderTargetMipmap(T)),U.isScene===!0&&U.onAfterRender(M,U,j),ge.resetDefaultState(),S=-1,y=null,_.pop(),_.length>0?(d=_[_.length-1],Y===!0&&xt.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Jr(U,j,it,ot){if(U.visible===!1)return;if(U.layers.test(j.layers)){if(U.isGroup)it=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(j);else if(U.isLight)d.pushLight(U),U.castShadow&&d.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||V.intersectsSprite(U)){ot&&yt.setFromMatrixPosition(U.matrixWorld).applyMatrix4(pt);const At=lt.update(U),It=U.material;It.visible&&m.push(U,At,It,it,yt.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||V.intersectsObject(U))){const At=lt.update(U),It=U.material;if(ot&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),yt.copy(U.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),yt.copy(At.boundingSphere.center)),yt.applyMatrix4(U.matrixWorld).applyMatrix4(pt)),Array.isArray(It)){const Ut=At.groups;for(let Vt=0,qt=Ut.length;Vt<qt;Vt++){const Nt=Ut[Vt],ee=It[Nt.materialIndex];ee&&ee.visible&&m.push(U,At,ee,it,yt.z,Nt)}}else It.visible&&m.push(U,At,It,it,yt.z,null)}}const Mt=U.children;for(let At=0,It=Mt.length;At<It;At++)Jr(Mt[At],j,it,ot)}function Nl(U,j,it,ot){const K=U.opaque,Mt=U.transmissive,At=U.transparent;d.setupLightsView(it),Y===!0&&xt.setGlobalState(M.clippingPlanes,it),ot&&H.viewport(A.copy(ot)),K.length>0&&Ns(K,j,it),Mt.length>0&&Ns(Mt,j,it),At.length>0&&Ns(At,j,it),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function zl(U,j,it,ot){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ot.id]===void 0&&(d.state.transmissionRenderTarget[ot.id]=new Di(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")||F.has("EXT_color_buffer_float")?Ps:li,minFilter:Ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const Mt=d.state.transmissionRenderTarget[ot.id],At=ot.viewport||A;Mt.setSize(At.z,At.w);const It=M.getRenderTarget();M.setRenderTarget(Mt),M.getClearColor(N),C=M.getClearAlpha(),C<1&&M.setClearColor(16777215,.5),M.clear(),X&&Bt.render(it);const Ut=M.toneMapping;M.toneMapping=Ci;const Vt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),d.setupLightsView(ot),Y===!0&&xt.setGlobalState(M.clippingPlanes,ot),Ns(U,it,ot),I.updateMultisampleRenderTarget(Mt),I.updateRenderTargetMipmap(Mt),F.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Nt=0,ee=j.length;Nt<ee;Nt++){const xe=j[Nt],ve=xe.object,Ke=xe.geometry,ie=xe.material,zt=xe.group;if(ie.side===le&&ve.layers.test(ot.layers)){const qn=ie.side;ie.side=Ze,ie.needsUpdate=!0,Ol(ve,it,ot,Ke,ie,zt),ie.side=qn,ie.needsUpdate=!0,qt=!0}}qt===!0&&(I.updateMultisampleRenderTarget(Mt),I.updateRenderTargetMipmap(Mt))}M.setRenderTarget(It),M.setClearColor(N,C),Vt!==void 0&&(ot.viewport=Vt),M.toneMapping=Ut}function Ns(U,j,it){const ot=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Mt=U.length;K<Mt;K++){const At=U[K],It=At.object,Ut=At.geometry,Vt=ot===null?At.material:ot,qt=At.group;It.layers.test(it.layers)&&Ol(It,j,it,Ut,Vt,qt)}}function Ol(U,j,it,ot,K,Mt){U.onBeforeRender(M,j,it,ot,K,Mt),U.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),K.onBeforeRender(M,j,it,ot,U,Mt),K.transparent===!0&&K.side===le&&K.forceSinglePass===!1?(K.side=Ze,K.needsUpdate=!0,M.renderBufferDirect(it,j,ot,K,U,Mt),K.side=Li,K.needsUpdate=!0,M.renderBufferDirect(it,j,ot,K,U,Mt),K.side=le):M.renderBufferDirect(it,j,ot,K,U,Mt),U.onAfterRender(M,j,it,ot,K,Mt)}function zs(U,j,it){j.isScene!==!0&&(j=ht);const ot=nt.get(U),K=d.state.lights,Mt=d.state.shadowsArray,At=K.state.version,It=Et.getParameters(U,K.state,Mt,j,it),Ut=Et.getProgramCacheKey(It);let Vt=ot.programs;ot.environment=U.isMeshStandardMaterial?j.environment:null,ot.fog=j.fog,ot.envMap=(U.isMeshStandardMaterial?J:P).get(U.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&U.envMap===null?j.environmentRotation:U.envMapRotation,Vt===void 0&&(U.addEventListener("dispose",Xt),Vt=new Map,ot.programs=Vt);let qt=Vt.get(Ut);if(qt!==void 0){if(ot.currentProgram===qt&&ot.lightsStateVersion===At)return Bl(U,It),qt}else It.uniforms=Et.getUniforms(U),U.onBeforeCompile(It,M),qt=Et.acquireProgram(It,Ut),Vt.set(Ut,qt),ot.uniforms=It.uniforms;const Nt=ot.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Nt.clippingPlanes=xt.uniform),Bl(U,It),ot.needsLights=pd(U),ot.lightsStateVersion=At,ot.needsLights&&(Nt.ambientLightColor.value=K.state.ambient,Nt.lightProbe.value=K.state.probe,Nt.directionalLights.value=K.state.directional,Nt.directionalLightShadows.value=K.state.directionalShadow,Nt.spotLights.value=K.state.spot,Nt.spotLightShadows.value=K.state.spotShadow,Nt.rectAreaLights.value=K.state.rectArea,Nt.ltc_1.value=K.state.rectAreaLTC1,Nt.ltc_2.value=K.state.rectAreaLTC2,Nt.pointLights.value=K.state.point,Nt.pointLightShadows.value=K.state.pointShadow,Nt.hemisphereLights.value=K.state.hemi,Nt.directionalShadowMap.value=K.state.directionalShadowMap,Nt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Nt.spotShadowMap.value=K.state.spotShadowMap,Nt.spotLightMatrix.value=K.state.spotLightMatrix,Nt.spotLightMap.value=K.state.spotLightMap,Nt.pointShadowMap.value=K.state.pointShadowMap,Nt.pointShadowMatrix.value=K.state.pointShadowMatrix),ot.currentProgram=qt,ot.uniformsList=null,qt}function Fl(U){if(U.uniformsList===null){const j=U.currentProgram.getUniforms();U.uniformsList=Cr.seqWithValue(j.seq,U.uniforms)}return U.uniformsList}function Bl(U,j){const it=nt.get(U);it.outputColorSpace=j.outputColorSpace,it.batching=j.batching,it.batchingColor=j.batchingColor,it.instancing=j.instancing,it.instancingColor=j.instancingColor,it.instancingMorph=j.instancingMorph,it.skinning=j.skinning,it.morphTargets=j.morphTargets,it.morphNormals=j.morphNormals,it.morphColors=j.morphColors,it.morphTargetsCount=j.morphTargetsCount,it.numClippingPlanes=j.numClippingPlanes,it.numIntersection=j.numClipIntersection,it.vertexAlphas=j.vertexAlphas,it.vertexTangents=j.vertexTangents,it.toneMapping=j.toneMapping}function fd(U,j,it,ot,K){j.isScene!==!0&&(j=ht),I.resetTextureUnits();const Mt=j.fog,At=ot.isMeshStandardMaterial?j.environment:null,It=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:$o,Ut=(ot.isMeshStandardMaterial?J:P).get(ot.envMap||At),Vt=ot.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,qt=!!it.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Nt=!!it.morphAttributes.position,ee=!!it.morphAttributes.normal,xe=!!it.morphAttributes.color;let ve=Ci;ot.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ve=M.toneMapping);const Ke=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ie=Ke!==void 0?Ke.length:0,zt=nt.get(ot),qn=d.state.lights;if(Y===!0&&(at===!0||U!==y)){const mn=U===y&&ot.id===S;xt.setState(ot,U,mn)}let oe=!1;ot.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==qn.state.version||zt.outputColorSpace!==It||K.isBatchedMesh&&zt.batching===!1||!K.isBatchedMesh&&zt.batching===!0||K.isBatchedMesh&&zt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&zt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&zt.instancing===!1||!K.isInstancedMesh&&zt.instancing===!0||K.isSkinnedMesh&&zt.skinning===!1||!K.isSkinnedMesh&&zt.skinning===!0||K.isInstancedMesh&&zt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&zt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&zt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&zt.instancingMorph===!1&&K.morphTexture!==null||zt.envMap!==Ut||ot.fog===!0&&zt.fog!==Mt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==xt.numPlanes||zt.numIntersection!==xt.numIntersection)||zt.vertexAlphas!==Vt||zt.vertexTangents!==qt||zt.morphTargets!==Nt||zt.morphNormals!==ee||zt.morphColors!==xe||zt.toneMapping!==ve||zt.morphTargetsCount!==ie)&&(oe=!0):(oe=!0,zt.__version=ot.version);let yn=zt.currentProgram;oe===!0&&(yn=zs(ot,j,K));let ho=!1,cn=!1,Ko=!1;const _e=yn.getUniforms(),In=zt.uniforms;if(H.useProgram(yn.program)&&(ho=!0,cn=!0,Ko=!0),ot.id!==S&&(S=ot.id,cn=!0),ho||y!==U){H.buffers.depth.getReversed()?(rt.copy(U.projectionMatrix),sp(rt),rp(rt),_e.setValue(z,"projectionMatrix",rt)):_e.setValue(z,"projectionMatrix",U.projectionMatrix),_e.setValue(z,"viewMatrix",U.matrixWorldInverse);const ui=_e.map.cameraPosition;ui!==void 0&&ui.setValue(z,vt.setFromMatrixPosition(U.matrixWorld)),W.logarithmicDepthBuffer&&_e.setValue(z,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&_e.setValue(z,"isOrthographic",U.isOrthographicCamera===!0),y!==U&&(y=U,cn=!0,Ko=!0)}if(K.isSkinnedMesh){_e.setOptional(z,K,"bindMatrix"),_e.setOptional(z,K,"bindMatrixInverse");const mn=K.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),_e.setValue(z,"boneTexture",mn.boneTexture,I))}K.isBatchedMesh&&(_e.setOptional(z,K,"batchingTexture"),_e.setValue(z,"batchingTexture",K._matricesTexture,I),_e.setOptional(z,K,"batchingIdTexture"),_e.setValue(z,"batchingIdTexture",K._indirectTexture,I),_e.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&_e.setValue(z,"batchingColorTexture",K._colorsTexture,I));const Jo=it.morphAttributes;if((Jo.position!==void 0||Jo.normal!==void 0||Jo.color!==void 0)&&Ht.update(K,it,yn),(cn||zt.receiveShadow!==K.receiveShadow)&&(zt.receiveShadow=K.receiveShadow,_e.setValue(z,"receiveShadow",K.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(In.envMap.value=Ut,In.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&j.environment!==null&&(In.envMapIntensity.value=j.environmentIntensity),cn&&(_e.setValue(z,"toneMappingExposure",M.toneMappingExposure),zt.needsLights&&dd(In,Ko),Mt&&ot.fog===!0&&_t.refreshFogUniforms(In,Mt),_t.refreshMaterialUniforms(In,ot,O,B,d.state.transmissionRenderTarget[U.id]),Cr.upload(z,Fl(zt),In,I)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Cr.upload(z,Fl(zt),In,I),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&_e.setValue(z,"center",K.center),_e.setValue(z,"modelViewMatrix",K.modelViewMatrix),_e.setValue(z,"normalMatrix",K.normalMatrix),_e.setValue(z,"modelMatrix",K.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const mn=ot.uniformsGroups;for(let ui=0,fi=mn.length;ui<fi;ui++){const kl=mn[ui];$.update(kl,yn),$.bind(kl,yn)}}return yn}function dd(U,j){U.ambientLightColor.needsUpdate=j,U.lightProbe.needsUpdate=j,U.directionalLights.needsUpdate=j,U.directionalLightShadows.needsUpdate=j,U.pointLights.needsUpdate=j,U.pointLightShadows.needsUpdate=j,U.spotLights.needsUpdate=j,U.spotLightShadows.needsUpdate=j,U.rectAreaLights.needsUpdate=j,U.hemisphereLights.needsUpdate=j}function pd(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(U,j,it){nt.get(U.texture).__webglTexture=j,nt.get(U.depthTexture).__webglTexture=it;const ot=nt.get(U);ot.__hasExternalTextures=!0,ot.__autoAllocateDepthBuffer=it===void 0,ot.__autoAllocateDepthBuffer||F.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,j){const it=nt.get(U);it.__webglFramebuffer=j,it.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(U,j=0,it=0){T=U,b=j,E=it;let ot=!0,K=null,Mt=!1,At=!1;if(U){const Ut=nt.get(U);if(Ut.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(z.FRAMEBUFFER,null),ot=!1;else if(Ut.__webglFramebuffer===void 0)I.setupRenderTarget(U);else if(Ut.__hasExternalTextures)I.rebindTextures(U,nt.get(U.texture).__webglTexture,nt.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const Nt=U.depthTexture;if(Ut.__boundDepthTexture!==Nt){if(Nt!==null&&nt.has(Nt)&&(U.width!==Nt.image.width||U.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(U)}}const Vt=U.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(At=!0);const qt=nt.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(qt[j])?K=qt[j][it]:K=qt[j],Mt=!0):U.samples>0&&I.useMultisampledRTT(U)===!1?K=nt.get(U).__webglMultisampledFramebuffer:Array.isArray(qt)?K=qt[it]:K=qt,A.copy(U.viewport),R.copy(U.scissor),L=U.scissorTest}else A.copy(G).multiplyScalar(O).floor(),R.copy(st).multiplyScalar(O).floor(),L=et;if(H.bindFramebuffer(z.FRAMEBUFFER,K)&&ot&&H.drawBuffers(U,K),H.viewport(A),H.scissor(R),H.setScissorTest(L),Mt){const Ut=nt.get(U.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ut.__webglTexture,it)}else if(At){const Ut=nt.get(U.texture),Vt=j||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ut.__webglTexture,it||0,Vt)}S=-1},this.readRenderTargetPixels=function(U,j,it,ot,K,Mt,At){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=nt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It){H.bindFramebuffer(z.FRAMEBUFFER,It);try{const Ut=U.texture,Vt=Ut.format,qt=Ut.type;if(!W.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=U.width-ot&&it>=0&&it<=U.height-K&&z.readPixels(j,it,ot,K,jt.convert(Vt),jt.convert(qt),Mt)}finally{const Ut=T!==null?nt.get(T).__webglFramebuffer:null;H.bindFramebuffer(z.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(U,j,it,ot,K,Mt,At){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=nt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It){const Ut=U.texture,Vt=Ut.format,qt=Ut.type;if(!W.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=U.width-ot&&it>=0&&it<=U.height-K){H.bindFramebuffer(z.FRAMEBUFFER,It);const Nt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Nt),z.bufferData(z.PIXEL_PACK_BUFFER,Mt.byteLength,z.STREAM_READ),z.readPixels(j,it,ot,K,jt.convert(Vt),jt.convert(qt),0);const ee=T!==null?nt.get(T).__webglFramebuffer:null;H.bindFramebuffer(z.FRAMEBUFFER,ee);const xe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await op(z,xe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Nt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Mt),z.deleteBuffer(Nt),z.deleteSync(xe),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(U,j=null,it=0){U.isTexture!==!0&&(fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,U=arguments[1]);const ot=Math.pow(2,-it),K=Math.floor(U.image.width*ot),Mt=Math.floor(U.image.height*ot),At=j!==null?j.x:0,It=j!==null?j.y:0;I.setTexture2D(U,0),z.copyTexSubImage2D(z.TEXTURE_2D,it,0,0,At,It,K,Mt),H.unbindTexture()},this.copyTextureToTexture=function(U,j,it=null,ot=null,K=0){U.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture function signature has changed."),ot=arguments[0]||null,U=arguments[1],j=arguments[2],K=arguments[3]||0,it=null);let Mt,At,It,Ut,Vt,qt,Nt,ee,xe;const ve=U.isCompressedTexture?U.mipmaps[K]:U.image;it!==null?(Mt=it.max.x-it.min.x,At=it.max.y-it.min.y,It=it.isBox3?it.max.z-it.min.z:1,Ut=it.min.x,Vt=it.min.y,qt=it.isBox3?it.min.z:0):(Mt=ve.width,At=ve.height,It=ve.depth||1,Ut=0,Vt=0,qt=0),ot!==null?(Nt=ot.x,ee=ot.y,xe=ot.z):(Nt=0,ee=0,xe=0);const Ke=jt.convert(j.format),ie=jt.convert(j.type);let zt;j.isData3DTexture?(I.setTexture3D(j,0),zt=z.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(I.setTexture2DArray(j,0),zt=z.TEXTURE_2D_ARRAY):(I.setTexture2D(j,0),zt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const qn=z.getParameter(z.UNPACK_ROW_LENGTH),oe=z.getParameter(z.UNPACK_IMAGE_HEIGHT),yn=z.getParameter(z.UNPACK_SKIP_PIXELS),ho=z.getParameter(z.UNPACK_SKIP_ROWS),cn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ve.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ve.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ut),z.pixelStorei(z.UNPACK_SKIP_ROWS,Vt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,qt);const Ko=U.isDataArrayTexture||U.isData3DTexture,_e=j.isDataArrayTexture||j.isData3DTexture;if(U.isRenderTargetTexture||U.isDepthTexture){const In=nt.get(U),Jo=nt.get(j),mn=nt.get(In.__renderTarget),ui=nt.get(Jo.__renderTarget);H.bindFramebuffer(z.READ_FRAMEBUFFER,mn.__webglFramebuffer),H.bindFramebuffer(z.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let fi=0;fi<It;fi++)Ko&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,nt.get(U).__webglTexture,K,qt+fi),U.isDepthTexture?(_e&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,nt.get(j).__webglTexture,K,xe+fi),z.blitFramebuffer(Ut,Vt,Mt,At,Nt,ee,Mt,At,z.DEPTH_BUFFER_BIT,z.NEAREST)):_e?z.copyTexSubImage3D(zt,K,Nt,ee,xe+fi,Ut,Vt,Mt,At):z.copyTexSubImage2D(zt,K,Nt,ee,xe+fi,Ut,Vt,Mt,At);H.bindFramebuffer(z.READ_FRAMEBUFFER,null),H.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else _e?U.isDataTexture||U.isData3DTexture?z.texSubImage3D(zt,K,Nt,ee,xe,Mt,At,It,Ke,ie,ve.data):j.isCompressedArrayTexture?z.compressedTexSubImage3D(zt,K,Nt,ee,xe,Mt,At,It,Ke,ve.data):z.texSubImage3D(zt,K,Nt,ee,xe,Mt,At,It,Ke,ie,ve):U.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,K,Nt,ee,Mt,At,Ke,ie,ve.data):U.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,K,Nt,ee,ve.width,ve.height,Ke,ve.data):z.texSubImage2D(z.TEXTURE_2D,K,Nt,ee,Mt,At,Ke,ie,ve);z.pixelStorei(z.UNPACK_ROW_LENGTH,qn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,oe),z.pixelStorei(z.UNPACK_SKIP_PIXELS,yn),z.pixelStorei(z.UNPACK_SKIP_ROWS,ho),z.pixelStorei(z.UNPACK_SKIP_IMAGES,cn),K===0&&j.generateMipmaps&&z.generateMipmap(zt),H.unbindTexture()},this.copyTextureToTexture3D=function(U,j,it=null,ot=null,K=0){return U.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,ot=arguments[1]||null,U=arguments[2],j=arguments[3],K=arguments[4]||0),fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(U,j,it,ot,K)},this.initRenderTarget=function(U){nt.get(U).__webglFramebuffer===void 0&&I.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?I.setTextureCube(U,0):U.isData3DTexture?I.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?I.setTexture2DArray(U,0):I.setTexture2D(U,0),H.unbindTexture()},this.resetState=function(){b=0,E=0,T=null,H.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class fl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Rt(t),this.density=e}clone(){return new fl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qr extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class dl extends He{constructor(t=null,e=1,n=1,o,s,r,a,c,l=pn,h=pn,f,u){super(null,r,a,c,l,h,o,s,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ur extends Ee{constructor(t,e,n,o=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const To=new Wt,Fh=new Wt,or=[],Bh=new co,pv=new Wt,os=new Ft,ss=new lo;class rn extends Ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<n;o++)this.setMatrixAt(o,pv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new co),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,To),Bh.copy(t.boundingBox).applyMatrix4(To),this.boundingBox.union(Bh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new lo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,To),ss.copy(t.boundingSphere).applyMatrix4(To),this.boundingSphere.union(ss)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,o=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let a=0;a<n.length;a++)n[a]=o[r+a]}raycast(t,e){const n=this.matrixWorld,o=this.count;if(os.geometry=this.geometry,os.material=this.material,os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ss.copy(this.boundingSphere),ss.applyMatrix4(n),t.ray.intersectsSphere(ss)!==!1))for(let s=0;s<o;s++){this.getMatrixAt(s,To),Fh.multiplyMatrices(n,To),os.matrixWorld=Fh,os.raycast(t,or);for(let r=0,a=or.length;r<a;r++){const c=or[r];c.instanceId=s,c.object=this,e.push(c)}or.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,o=n.length+1;this.morphTexture===null&&(this.morphTexture=new dl(new Float32Array(o*this.count),o,this.count,sl,Fn));const s=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=o*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class hf extends zi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Nr=new k,zr=new k,kh=new Wt,rs=new Ls,sr=new lo,Ca=new k,Hh=new k;class mv extends Re{constructor(t=new Kt,e=new hf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let o=1,s=e.count;o<s;o++)Nr.fromBufferAttribute(e,o-1),zr.fromBufferAttribute(e,o),n[o]=n[o-1],n[o]+=Nr.distanceTo(zr);t.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,o=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(o),sr.radius+=s,t.ray.intersectsSphere(sr)===!1)return;kh.copy(o).invert(),rs.copy(t.ray).applyMatrix4(kh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let x=p,m=g-1;x<m;x+=l){const d=h.getX(x),v=h.getX(x+1),_=rr(this,t,rs,c,d,v);_&&e.push(_)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(p),d=rr(this,t,rs,c,x,m);d&&e.push(d)}}else{const p=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let x=p,m=g-1;x<m;x+=l){const d=rr(this,t,rs,c,x,x+1);d&&e.push(d)}if(this.isLineLoop){const x=rr(this,t,rs,c,g-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const o=e[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=o.length;s<r;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rr(i,t,e,n,o,s){const r=i.geometry.attributes.position;if(Nr.fromBufferAttribute(r,o),zr.fromBufferAttribute(r,s),e.distanceSqToSegment(Nr,zr,Ca,Hh)>n)return;Ca.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ca);if(!(c<t.near||c>t.far))return{distance:c,point:Hh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}class pl extends zi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Gh=new Wt,Uc=new Ls,ar=new lo,cr=new k;class uf extends Re{constructor(t=new Kt,e=new pl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,o=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(o),ar.radius+=s,t.ray.intersectsSphere(ar)===!1)return;Gh.copy(o).invert(),Uc.copy(t.ray).applyMatrix4(Gh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){const u=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let g=u,x=p;g<x;g++){const m=l.getX(g);cr.fromBufferAttribute(f,m),Vh(cr,m,c,o,t,e,this)}}else{const u=Math.max(0,r.start),p=Math.min(f.count,r.start+r.count);for(let g=u,x=p;g<x;g++)cr.fromBufferAttribute(f,g),Vh(cr,g,c,o,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const o=e[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=o.length;s<r;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Vh(i,t,e,n,o,s,r){const a=Uc.distanceSqToPoint(i);if(a<e){const c=new k;Uc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=o.ray.origin.distanceTo(c);if(l<o.near||l>o.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Vn extends He{constructor(t,e,n,o,s,r,a,c,l){super(t,e,n,o,s,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,o=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(o),e.push(s),o=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let o=0;const s=n.length;let r;e?r=e:r=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(o=Math.floor(a+(c-a)/2),l=n[o]-r,l<0)a=o+1;else if(l>0)c=o-1;else{c=o;break}if(o=c,n[o]===r)return o/(s-1);const h=n[o],u=n[o+1]-h,p=(r-h)/u;return(o+p)/(s-1)}getTangent(t,e){let o=t-1e-4,s=t+1e-4;o<0&&(o=0),s>1&&(s=1);const r=this.getPoint(o),a=this.getPoint(s),c=e||(r.isVector2?new gt:new k);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new k,o=[],s=[],r=[],a=new k,c=new Wt;for(let p=0;p<=t;p++){const g=p/t;o[p]=this.getTangentAt(g,new k)}s[0]=new k,r[0]=new k;let l=Number.MAX_VALUE;const h=Math.abs(o[0].x),f=Math.abs(o[0].y),u=Math.abs(o[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(o[0],n).normalize(),s[0].crossVectors(o[0],a),r[0].crossVectors(o[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(o[p-1],o[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ze(o[p-1].dot(o[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,g))}r[p].crossVectors(o[p],s[p])}if(e===!0){let p=Math.acos(ze(s[0].dot(s[t]),-1,1));p/=t,o[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(o[g],p*g)),r[g].crossVectors(o[g],s[g])}return{tangents:o,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ml extends Wn{constructor(t=0,e=0,n=1,o=1,s=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=o,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new gt){const n=e,o=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=o;for(;s>o;)s-=o;s<Number.EPSILON&&(r?s=0:s=o),this.aClockwise===!0&&!r&&(s===o?s=-o:s=s-o);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*f+this.aX,l=u*f+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class gv extends ml{constructor(t,e,n,o,s,r){super(t,e,n,n,o,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function gl(){let i=0,t=0,e=0,n=0;function o(s,r,a,c){i=s,t=a,e=-3*s+3*r-2*a-c,n=2*s-2*r+a+c}return{initCatmullRom:function(s,r,a,c,l){o(r,a,l*(a-s),l*(c-r))},initNonuniformCatmullRom:function(s,r,a,c,l,h,f){let u=(r-s)/l-(a-s)/(l+h)+(a-r)/h,p=(a-r)/h-(c-r)/(h+f)+(c-a)/f;u*=h,p*=h,o(r,a,u,p)},calc:function(s){const r=s*s,a=r*s;return i+t*s+e*r+n*a}}}const lr=new k,Ra=new gl,Pa=new gl,La=new gl;class xv extends Wn{constructor(t=[],e=!1,n="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=o}getPoint(t,e=new k){const n=e,o=this.points,s=o.length,r=(s-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=o[(a-1)%s]:(lr.subVectors(o[0],o[1]).add(o[0]),l=lr);const f=o[a%s],u=o[(a+1)%s];if(this.closed||a+2<s?h=o[(a+2)%s]:(lr.subVectors(o[s-1],o[s-2]).add(o[s-1]),h=lr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ra.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,x,m),Pa.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,x,m),La.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Ra.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),Pa.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),La.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(Ra.calc(c),Pa.calc(c),La.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const o=t.points[e];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const o=this.points[e];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const o=t.points[e];this.points.push(new k().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Wh(i,t,e,n,o){const s=(n-t)*.5,r=(o-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+r)*c+(-3*e+3*n-2*s-r)*a+s*i+e}function vv(i,t){const e=1-i;return e*e*t}function _v(i,t){return 2*(1-i)*i*t}function Mv(i,t){return i*i*t}function xs(i,t,e,n){return vv(i,t)+_v(i,e)+Mv(i,n)}function yv(i,t){const e=1-i;return e*e*e*t}function bv(i,t){const e=1-i;return 3*e*e*i*t}function Sv(i,t){return 3*(1-i)*i*i*t}function wv(i,t){return i*i*i*t}function vs(i,t,e,n,o){return yv(i,t)+bv(i,e)+Sv(i,n)+wv(i,o)}class ff extends Wn{constructor(t=new gt,e=new gt,n=new gt,o=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=o}getPoint(t,e=new gt){const n=e,o=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(vs(t,o.x,s.x,r.x,a.x),vs(t,o.y,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ev extends Wn{constructor(t=new k,e=new k,n=new k,o=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=o}getPoint(t,e=new k){const n=e,o=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(vs(t,o.x,s.x,r.x,a.x),vs(t,o.y,s.y,r.y,a.y),vs(t,o.z,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class df extends Wn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tv extends Wn{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pf extends Wn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,o=this.v0,s=this.v1,r=this.v2;return n.set(xs(t,o.x,s.x,r.x),xs(t,o.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Av extends Wn{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){const n=e,o=this.v0,s=this.v1,r=this.v2;return n.set(xs(t,o.x,s.x,r.x),xs(t,o.y,s.y,r.y),xs(t,o.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mf extends Wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,o=this.points,s=(o.length-1)*t,r=Math.floor(s),a=s-r,c=o[r===0?r:r-1],l=o[r],h=o[r>o.length-2?o.length-1:r+1],f=o[r>o.length-3?o.length-1:r+2];return n.set(Wh(a,c.x,l.x,h.x,f.x),Wh(a,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const o=t.points[e];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const o=this.points[e];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const o=t.points[e];this.points.push(new gt().fromArray(o))}return this}}var Nc=Object.freeze({__proto__:null,ArcCurve:gv,CatmullRomCurve3:xv,CubicBezierCurve:ff,CubicBezierCurve3:Ev,EllipseCurve:ml,LineCurve:df,LineCurve3:Tv,QuadraticBezierCurve:pf,QuadraticBezierCurve3:Av,SplineCurve:mf});class Cv extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),o=this.getCurveLengths();let s=0;for(;s<o.length;){if(o[s]>=n){const r=o[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,o=this.curves.length;n<o;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let o=0,s=this.curves;o<s.length;o++){const r=s[o],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const o=t.curves[e];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const o=this.curves[e];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const o=t.curves[e];this.curves.push(new Nc[o.type]().fromJSON(o))}return this}}class zc extends Cv{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new df(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,o){const s=new pf(this.currentPoint.clone(),new gt(t,e),new gt(n,o));return this.curves.push(s),this.currentPoint.set(n,o),this}bezierCurveTo(t,e,n,o,s,r){const a=new ff(this.currentPoint.clone(),new gt(t,e),new gt(n,o),new gt(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new mf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,o,s,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,o,s,r),this}absarc(t,e,n,o,s,r){return this.absellipse(t,e,n,n,o,s,r),this}ellipse(t,e,n,o,s,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,o,s,r,a,c),this}absellipse(t,e,n,o,s,r,a,c){const l=new ml(t,e,n,o,s,r,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class xl extends Kt{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,o=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:o},e=Math.floor(e),o=ze(o,0,Math.PI*2);const s=[],r=[],a=[],c=[],l=[],h=1/e,f=new k,u=new gt,p=new k,g=new k,x=new k;let m=0,d=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,p.x=d*1,p.y=-m,p.z=d*0,x.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),c.push(p.x,p.y,p.z),x.copy(g)}for(let v=0;v<=e;v++){const _=n+v*h*o,M=Math.sin(_),w=Math.cos(_);for(let b=0;b<=t.length-1;b++){f.x=t[b].x*M,f.y=t[b].y,f.z=t[b].x*w,r.push(f.x,f.y,f.z),u.x=v/e,u.y=b/(t.length-1),a.push(u.x,u.y);const E=c[3*b+0]*M,T=c[3*b+1],S=c[3*b+0]*w;l.push(E,T,S)}}for(let v=0;v<e;v++)for(let _=0;_<t.length-1;_++){const M=_+v*t.length,w=M,b=M+t.length,E=M+t.length+1,T=M+1;s.push(w,b,T),s.push(E,T,b)}this.setIndex(s),this.setAttribute("position",new Dt(r,3)),this.setAttribute("uv",new Dt(a,2)),this.setAttribute("normal",new Dt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xl(t.points,t.segments,t.phiStart,t.phiLength)}}class Ii extends xl{constructor(t=1,e=1,n=4,o=8){const s=new zc;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),o),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:o}}static fromJSON(t){return new Ii(t.radius,t.length,t.capSegments,t.radialSegments)}}class Is extends Kt{constructor(t=1,e=32,n=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:o},e=Math.max(3,e);const s=[],r=[],a=[],c=[],l=new k,h=new gt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const p=n+f/e*o;l.x=t*Math.cos(p),l.y=t*Math.sin(p),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Dt(r,3)),this.setAttribute("normal",new Dt(a,3)),this.setAttribute("uv",new Dt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class he extends Kt{constructor(t=1,e=1,n=1,o=32,s=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:o,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:c};const l=this;o=Math.floor(o),s=Math.floor(s);const h=[],f=[],u=[],p=[];let g=0;const x=[],m=n/2;let d=0;v(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Dt(f,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(p,2));function v(){const M=new k,w=new k;let b=0;const E=(e-t)/n;for(let T=0;T<=s;T++){const S=[],y=T/s,A=y*(e-t)+t;for(let R=0;R<=o;R++){const L=R/o,N=L*c+a,C=Math.sin(N),D=Math.cos(N);w.x=A*C,w.y=-y*n+m,w.z=A*D,f.push(w.x,w.y,w.z),M.set(C,E,D).normalize(),u.push(M.x,M.y,M.z),p.push(L,1-y),S.push(g++)}x.push(S)}for(let T=0;T<o;T++)for(let S=0;S<s;S++){const y=x[S][T],A=x[S+1][T],R=x[S+1][T+1],L=x[S][T+1];(t>0||S!==0)&&(h.push(y,A,L),b+=3),(e>0||S!==s-1)&&(h.push(A,R,L),b+=3)}l.addGroup(d,b,0),d+=b}function _(M){const w=g,b=new gt,E=new k;let T=0;const S=M===!0?t:e,y=M===!0?1:-1;for(let R=1;R<=o;R++)f.push(0,m*y,0),u.push(0,y,0),p.push(.5,.5),g++;const A=g;for(let R=0;R<=o;R++){const N=R/o*c+a,C=Math.cos(N),D=Math.sin(N);E.x=S*D,E.y=m*y,E.z=S*C,f.push(E.x,E.y,E.z),u.push(0,y,0),b.x=C*.5+.5,b.y=D*.5*y+.5,p.push(b.x,b.y),g++}for(let R=0;R<o;R++){const L=w+R,N=A+R;M===!0?h.push(N,N+1,L):h.push(N+1,N,L),T+=3}l.addGroup(d,T,M===!0?1:2),d+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class so extends he{constructor(t=1,e=1,n=32,o=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,n,o,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:o,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new so(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vl extends Kt{constructor(t=[],e=[],n=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:o};const s=[],r=[];a(o),l(n),h(),this.setAttribute("position",new Dt(s,3)),this.setAttribute("normal",new Dt(s.slice(),3)),this.setAttribute("uv",new Dt(r,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const _=new k,M=new k,w=new k;for(let b=0;b<e.length;b+=3)p(e[b+0],_),p(e[b+1],M),p(e[b+2],w),c(_,M,w,v)}function c(v,_,M,w){const b=w+1,E=[];for(let T=0;T<=b;T++){E[T]=[];const S=v.clone().lerp(M,T/b),y=_.clone().lerp(M,T/b),A=b-T;for(let R=0;R<=A;R++)R===0&&T===b?E[T][R]=S:E[T][R]=S.clone().lerp(y,R/A)}for(let T=0;T<b;T++)for(let S=0;S<2*(b-T)-1;S++){const y=Math.floor(S/2);S%2===0?(u(E[T][y+1]),u(E[T+1][y]),u(E[T][y])):(u(E[T][y+1]),u(E[T+1][y+1]),u(E[T+1][y]))}}function l(v){const _=new k;for(let M=0;M<s.length;M+=3)_.x=s[M+0],_.y=s[M+1],_.z=s[M+2],_.normalize().multiplyScalar(v),s[M+0]=_.x,s[M+1]=_.y,s[M+2]=_.z}function h(){const v=new k;for(let _=0;_<s.length;_+=3){v.x=s[_+0],v.y=s[_+1],v.z=s[_+2];const M=m(v)/2/Math.PI+.5,w=d(v)/Math.PI+.5;r.push(M,1-w)}g(),f()}function f(){for(let v=0;v<r.length;v+=6){const _=r[v+0],M=r[v+2],w=r[v+4],b=Math.max(_,M,w),E=Math.min(_,M,w);b>.9&&E<.1&&(_<.2&&(r[v+0]+=1),M<.2&&(r[v+2]+=1),w<.2&&(r[v+4]+=1))}}function u(v){s.push(v.x,v.y,v.z)}function p(v,_){const M=v*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function g(){const v=new k,_=new k,M=new k,w=new k,b=new gt,E=new gt,T=new gt;for(let S=0,y=0;S<s.length;S+=9,y+=6){v.set(s[S+0],s[S+1],s[S+2]),_.set(s[S+3],s[S+4],s[S+5]),M.set(s[S+6],s[S+7],s[S+8]),b.set(r[y+0],r[y+1]),E.set(r[y+2],r[y+3]),T.set(r[y+4],r[y+5]),w.copy(v).add(_).add(M).divideScalar(3);const A=m(w);x(b,y+0,v,A),x(E,y+2,_,A),x(T,y+4,M,A)}}function x(v,_,M,w){w<0&&v.x===1&&(r[_]=v.x-1),M.x===0&&M.z===0&&(r[_]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vl(t.vertices,t.indices,t.radius,t.details)}}class Ri extends zc{constructor(t){super(t),this.uuid=Yo(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,o=this.holes.length;n<o;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const o=t.holes[e];this.holes.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const o=this.holes[e];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const o=t.holes[e];this.holes.push(new zc().fromJSON(o))}return this}}const Rv={triangulate:function(i,t,e=2){const n=t&&t.length,o=n?t[0]*e:i.length;let s=gf(i,0,o,e,!0);const r=[];if(!s||s.next===s.prev)return r;let a,c,l,h,f,u,p;if(n&&(s=Uv(i,t,s,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<o;g+=e)f=i[g],u=i[g+1],f<a&&(a=f),u<c&&(c=u),f>l&&(l=f),u>h&&(h=u);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return ws(s,r,e,a,c,p,0),r}};function gf(i,t,e,n,o){let s,r;if(o===Xv(i,t,e,n)>0)for(s=t;s<e;s+=n)r=Xh(s,i[s],i[s+1],r);else for(s=e-n;s>=t;s-=n)r=Xh(s,i[s],i[s+1],r);return r&&$r(r,r.next)&&(Ts(r),r=r.next),r}function ro(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($r(e,e.next)||Se(e.prev,e,e.next)===0)){if(Ts(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ws(i,t,e,n,o,s,r){if(!i)return;!r&&s&&Bv(i,n,o,s);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?Lv(i,n,o,s):Pv(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ts(i),i=l.next,a=l.next;continue}if(i=l,i===a){r?r===1?(i=Dv(ro(i),t,e),ws(i,t,e,n,o,s,2)):r===2&&Iv(i,t,e,n,o,s):ws(ro(i),t,e,n,o,s,1);break}}}function Pv(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const o=t.x,s=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=o<s?o<r?o:r:s<r?s:r,f=a<c?a<l?a:l:c<l?c:l,u=o>s?o>r?o:r:s>r?s:r,p=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=p&&Uo(o,a,s,c,r,l,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Lv(i,t,e,n){const o=i.prev,s=i,r=i.next;if(Se(o,s,r)>=0)return!1;const a=o.x,c=s.x,l=r.x,h=o.y,f=s.y,u=r.y,p=a<c?a<l?a:l:c<l?c:l,g=h<f?h<u?h:u:f<u?f:u,x=a>c?a>l?a:l:c>l?c:l,m=h>f?h>u?h:u:f>u?f:u,d=Oc(p,g,t,e,n),v=Oc(x,m,t,e,n);let _=i.prevZ,M=i.nextZ;for(;_&&_.z>=d&&M&&M.z<=v;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==o&&_!==r&&Uo(a,h,c,f,l,u,_.x,_.y)&&Se(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=p&&M.x<=x&&M.y>=g&&M.y<=m&&M!==o&&M!==r&&Uo(a,h,c,f,l,u,M.x,M.y)&&Se(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=d;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==o&&_!==r&&Uo(a,h,c,f,l,u,_.x,_.y)&&Se(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=v;){if(M.x>=p&&M.x<=x&&M.y>=g&&M.y<=m&&M!==o&&M!==r&&Uo(a,h,c,f,l,u,M.x,M.y)&&Se(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Dv(i,t,e){let n=i;do{const o=n.prev,s=n.next.next;!$r(o,s)&&xf(o,n,n.next,s)&&Es(o,s)&&Es(s,o)&&(t.push(o.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Ts(n),Ts(n.next),n=i=s),n=n.next}while(n!==i);return ro(n)}function Iv(i,t,e,n,o,s){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Gv(r,a)){let c=vf(r,a);r=ro(r,r.next),c=ro(c,c.next),ws(r,t,e,n,o,s,0),ws(c,t,e,n,o,s,0);return}a=a.next}r=r.next}while(r!==i)}function Uv(i,t,e,n){const o=[];let s,r,a,c,l;for(s=0,r=t.length;s<r;s++)a=t[s]*n,c=s<r-1?t[s+1]*n:i.length,l=gf(i,a,c,n,!1),l===l.next&&(l.steiner=!0),o.push(Hv(l));for(o.sort(Nv),s=0;s<o.length;s++)e=zv(o[s],e);return e}function Nv(i,t){return i.x-t.x}function zv(i,t){const e=Ov(i,t);if(!e)return t;const n=vf(e,i);return ro(n,n.next),ro(e,e.next)}function Ov(i,t){let e=t,n=-1/0,o;const s=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=s&&u>n&&(n=u,o=e.x<e.next.x?e:e.next,u===s))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0,f;e=o;do s>=e.x&&e.x>=c&&s!==e.x&&Uo(r<l?s:n,r,c,l,r<l?n:s,r,e.x,e.y)&&(f=Math.abs(r-e.y)/(s-e.x),Es(e,i)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&Fv(o,e)))&&(o=e,h=f)),e=e.next;while(e!==a);return o}function Fv(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function Bv(i,t,e,n){let o=i;do o.z===0&&(o.z=Oc(o.x,o.y,t,e,n)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==i);o.prevZ.nextZ=null,o.prevZ=null,kv(o)}function kv(i){let t,e,n,o,s,r,a,c,l=1;do{for(e=i,i=null,s=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(o=e,e=e.nextZ,a--):(o=n,n=n.nextZ,c--),s?s.nextZ=o:i=o,o.prevZ=s,s=o;e=n}s.nextZ=null,l*=2}while(r>1);return i}function Oc(i,t,e,n,o){return i=(i-e)*o|0,t=(t-n)*o|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Hv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Uo(i,t,e,n,o,s,r,a){return(o-r)*(t-a)>=(i-r)*(s-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(s-a)>=(o-r)*(n-a)}function Gv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Vv(i,t)&&(Es(i,t)&&Es(t,i)&&Wv(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||$r(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $r(i,t){return i.x===t.x&&i.y===t.y}function xf(i,t,e,n){const o=ur(Se(i,t,e)),s=ur(Se(i,t,n)),r=ur(Se(e,n,i)),a=ur(Se(e,n,t));return!!(o!==s&&r!==a||o===0&&hr(i,e,t)||s===0&&hr(i,n,t)||r===0&&hr(e,i,n)||a===0&&hr(e,t,n))}function hr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ur(i){return i>0?1:i<0?-1:0}function Vv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&xf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Es(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function Wv(i,t){let e=i,n=!1;const o=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&o<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function vf(i,t){const e=new Fc(i.i,i.x,i.y),n=new Fc(t.i,t.x,t.y),o=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=o,o.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Xh(i,t,e,n){const o=new Fc(i,t,e);return n?(o.next=n.next,o.prev=n,n.next.prev=o,n.next=o):(o.prev=o,o.next=o),o}function Ts(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Xv(i,t,e,n){let o=0;for(let s=t,r=e-n;s<e;s+=n)o+=(i[r]-i[s])*(i[s+1]+i[r+1]),r=s;return o}class Hn{static area(t){const e=t.length;let n=0;for(let o=e-1,s=0;s<e;o=s++)n+=t[o].x*t[s].y-t[s].x*t[o].y;return n*.5}static isClockWise(t){return Hn.area(t)<0}static triangulateShape(t,e){const n=[],o=[],s=[];qh(t),$h(n,t);let r=t.length;e.forEach(qh);for(let c=0;c<e.length;c++)o.push(r),r+=e[c].length,$h(n,e[c]);const a=Rv.triangulate(n,o);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function qh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function $h(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ci extends Kt{constructor(t=new Ri([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,o=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new Dt(o,3)),this.setAttribute("uv",new Dt(s,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:qv;let _,M=!1,w,b,E,T;d&&(_=d.getSpacedPoints(h),M=!0,u=!1,w=d.computeFrenetFrames(h,!1),b=new k,E=new k,T=new k),u||(m=0,p=0,g=0,x=0);const S=a.extractPoints(l);let y=S.shape;const A=S.holes;if(!Hn.isClockWise(y)){y=y.reverse();for(let X=0,Q=A.length;X<Q;X++){const z=A[X];Hn.isClockWise(z)&&(A[X]=z.reverse())}}const L=Hn.triangulateShape(y,A),N=y;for(let X=0,Q=A.length;X<Q;X++){const z=A[X];y=y.concat(z)}function C(X,Q,z){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(Q,z)}const D=y.length,B=L.length;function O(X,Q,z){let ft,F,W;const H=X.x-Q.x,tt=X.y-Q.y,nt=z.x-X.x,I=z.y-X.y,P=H*H+tt*tt,J=H*I-tt*nt;if(Math.abs(J)>Number.EPSILON){const ct=Math.sqrt(P),dt=Math.sqrt(nt*nt+I*I),lt=Q.x-tt/ct,Et=Q.y+H/ct,_t=z.x-I/dt,St=z.y+nt/dt,Gt=((_t-lt)*I-(St-Et)*nt)/(H*I-tt*nt);ft=lt+H*Gt-X.x,F=Et+tt*Gt-X.y;const xt=ft*ft+F*F;if(xt<=2)return new gt(ft,F);W=Math.sqrt(xt/2)}else{let ct=!1;H>Number.EPSILON?nt>Number.EPSILON&&(ct=!0):H<-Number.EPSILON?nt<-Number.EPSILON&&(ct=!0):Math.sign(tt)===Math.sign(I)&&(ct=!0),ct?(ft=-tt,F=H,W=Math.sqrt(P)):(ft=H,F=tt,W=Math.sqrt(P/2))}return new gt(ft/W,F/W)}const q=[];for(let X=0,Q=N.length,z=Q-1,ft=X+1;X<Q;X++,z++,ft++)z===Q&&(z=0),ft===Q&&(ft=0),q[X]=O(N[X],N[z],N[ft]);const Z=[];let G,st=q.concat();for(let X=0,Q=A.length;X<Q;X++){const z=A[X];G=[];for(let ft=0,F=z.length,W=F-1,H=ft+1;ft<F;ft++,W++,H++)W===F&&(W=0),H===F&&(H=0),G[ft]=O(z[ft],z[W],z[H]);Z.push(G),st=st.concat(G)}for(let X=0;X<m;X++){const Q=X/m,z=p*Math.cos(Q*Math.PI/2),ft=g*Math.sin(Q*Math.PI/2)+x;for(let F=0,W=N.length;F<W;F++){const H=C(N[F],q[F],ft);rt(H.x,H.y,-z)}for(let F=0,W=A.length;F<W;F++){const H=A[F];G=Z[F];for(let tt=0,nt=H.length;tt<nt;tt++){const I=C(H[tt],G[tt],ft);rt(I.x,I.y,-z)}}}const et=g+x;for(let X=0;X<D;X++){const Q=u?C(y[X],st[X],et):y[X];M?(E.copy(w.normals[0]).multiplyScalar(Q.x),b.copy(w.binormals[0]).multiplyScalar(Q.y),T.copy(_[0]).add(E).add(b),rt(T.x,T.y,T.z)):rt(Q.x,Q.y,0)}for(let X=1;X<=h;X++)for(let Q=0;Q<D;Q++){const z=u?C(y[Q],st[Q],et):y[Q];M?(E.copy(w.normals[X]).multiplyScalar(z.x),b.copy(w.binormals[X]).multiplyScalar(z.y),T.copy(_[X]).add(E).add(b),rt(T.x,T.y,T.z)):rt(z.x,z.y,f/h*X)}for(let X=m-1;X>=0;X--){const Q=X/m,z=p*Math.cos(Q*Math.PI/2),ft=g*Math.sin(Q*Math.PI/2)+x;for(let F=0,W=N.length;F<W;F++){const H=C(N[F],q[F],ft);rt(H.x,H.y,f+z)}for(let F=0,W=A.length;F<W;F++){const H=A[F];G=Z[F];for(let tt=0,nt=H.length;tt<nt;tt++){const I=C(H[tt],G[tt],ft);M?rt(I.x,I.y+_[h-1].y,_[h-1].x+z):rt(I.x,I.y,f+z)}}}V(),Y();function V(){const X=o.length/3;if(u){let Q=0,z=D*Q;for(let ft=0;ft<B;ft++){const F=L[ft];pt(F[2]+z,F[1]+z,F[0]+z)}Q=h+m*2,z=D*Q;for(let ft=0;ft<B;ft++){const F=L[ft];pt(F[0]+z,F[1]+z,F[2]+z)}}else{for(let Q=0;Q<B;Q++){const z=L[Q];pt(z[2],z[1],z[0])}for(let Q=0;Q<B;Q++){const z=L[Q];pt(z[0]+D*h,z[1]+D*h,z[2]+D*h)}}n.addGroup(X,o.length/3-X,0)}function Y(){const X=o.length/3;let Q=0;at(N,Q),Q+=N.length;for(let z=0,ft=A.length;z<ft;z++){const F=A[z];at(F,Q),Q+=F.length}n.addGroup(X,o.length/3-X,1)}function at(X,Q){let z=X.length;for(;--z>=0;){const ft=z;let F=z-1;F<0&&(F=X.length-1);for(let W=0,H=h+m*2;W<H;W++){const tt=D*W,nt=D*(W+1),I=Q+ft+tt,P=Q+F+tt,J=Q+F+nt,ct=Q+ft+nt;vt(I,P,J,ct)}}}function rt(X,Q,z){c.push(X),c.push(Q),c.push(z)}function pt(X,Q,z){yt(X),yt(Q),yt(z);const ft=o.length/3,F=v.generateTopUV(n,o,ft-3,ft-2,ft-1);ht(F[0]),ht(F[1]),ht(F[2])}function vt(X,Q,z,ft){yt(X),yt(Q),yt(ft),yt(Q),yt(z),yt(ft);const F=o.length/3,W=v.generateSideWallUV(n,o,F-6,F-3,F-2,F-1);ht(W[0]),ht(W[1]),ht(W[3]),ht(W[1]),ht(W[2]),ht(W[3])}function yt(X){o.push(c[X*3+0]),o.push(c[X*3+1]),o.push(c[X*3+2])}function ht(X){s.push(X.x),s.push(X.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return $v(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}const o=t.options.extrudePath;return o!==void 0&&(t.options.extrudePath=new Nc[o.type]().fromJSON(o)),new ci(n,t.options)}}const qv={generateTopUV:function(i,t,e,n,o){const s=t[e*3],r=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[o*3],h=t[o*3+1];return[new gt(s,r),new gt(a,c),new gt(l,h)]},generateSideWallUV:function(i,t,e,n,o,s){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[o*3],p=t[o*3+1],g=t[o*3+2],x=t[s*3],m=t[s*3+1],d=t[s*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new gt(r,1-c),new gt(l,1-f),new gt(u,1-g),new gt(x,1-d)]:[new gt(a,1-c),new gt(h,1-f),new gt(p,1-g),new gt(m,1-d)]}};function $v(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,o=i.length;n<o;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Yr extends vl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,o=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Yr(t.radius,t.detail)}}class Or extends Kt{constructor(t=.5,e=1,n=32,o=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:o,thetaStart:s,thetaLength:r},n=Math.max(3,n),o=Math.max(1,o);const a=[],c=[],l=[],h=[];let f=t;const u=(e-t)/o,p=new k,g=new gt;for(let x=0;x<=o;x++){for(let m=0;m<=n;m++){const d=s+m/n*r;p.x=f*Math.cos(d),p.y=f*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}f+=u}for(let x=0;x<o;x++){const m=x*(n+1);for(let d=0;d<n;d++){const v=d+m,_=v,M=v+n+1,w=v+n+2,b=v+1;a.push(_,M,b),a.push(M,w,b)}}this.setIndex(a),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Or(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class be extends Kt{constructor(t=1,e=32,n=16,o=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:o,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],f=new k,u=new k,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){const v=[],_=d/n;let M=0;d===0&&r===0?M=.5/e:d===n&&c===Math.PI&&(M=-.5/e);for(let w=0;w<=e;w++){const b=w/e;f.x=-t*Math.cos(o+b*s)*Math.sin(r+_*a),f.y=t*Math.cos(r+_*a),f.z=t*Math.sin(o+b*s)*Math.sin(r+_*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),m.push(b+M,1-_),v.push(l++)}h.push(v)}for(let d=0;d<n;d++)for(let v=0;v<e;v++){const _=h[d][v+1],M=h[d][v],w=h[d+1][v],b=h[d+1][v+1];(d!==0||r>0)&&p.push(_,M,b),(d!==n-1||c<Math.PI)&&p.push(M,w,b)}this.setIndex(p),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(x,3)),this.setAttribute("uv",new Dt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ui extends Kt{constructor(t=1,e=.4,n=12,o=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:o,arc:s},n=Math.floor(n),o=Math.floor(o);const r=[],a=[],c=[],l=[],h=new k,f=new k,u=new k;for(let p=0;p<=n;p++)for(let g=0;g<=o;g++){const x=g/o*s,m=p/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(f,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/o),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=o;g++){const x=(o+1)*p+g-1,m=(o+1)*(p-1)+g-1,d=(o+1)*(p-1)+g,v=(o+1)*p+g;r.push(x,m,v),r.push(m,d,v)}this.setIndex(r),this.setAttribute("position",new Dt(a,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ot extends zi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wu,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=el,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yv extends hf{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const Yh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class jv{constructor(t,e,n){const o=this;let s=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&o.onStart!==void 0&&o.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,o.onProgress!==void 0&&o.onProgress(h,r,a),r===a&&(s=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(h){o.onError!==void 0&&o.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){const f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){const p=l[f],g=l[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Zv=new jv;class _l{constructor(t){this.manager=t!==void 0?t:Zv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(o,s){n.load(t,o,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}_l.DEFAULT_MATERIAL_NAME="__DEFAULT";class Kv extends _l{constructor(t){super(t)}load(t,e,n,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=Yh.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;const a=Ss("img");function c(){h(),Yh.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(f){h(),o&&o(f),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Bc extends _l{constructor(t){super(t)}load(t,e,n,o){const s=new He,r=new Kv(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,o),s}}class _f extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Mf extends _f{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Da=new Wt,jh=new k,Zh=new k;class Jv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hl,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(jh),Zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zh),e.updateMatrixWorld(),Da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Qv extends Jv{constructor(){super(new Ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ml extends _f{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Qv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class t_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Kh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Kh(){return performance.now()}const Jh=new Wt;class e_{constructor(t,e,n=0,o=1/0){this.ray=new Ls(t,e),this.near=n,this.far=o,this.camera=null,this.layers=new ll,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Jh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jh),this}intersectObject(t,e=!0,n=[]){return kc(t,this,n,e),n.sort(Qh),n}intersectObjects(t,e=!0,n=[]){for(let o=0,s=t.length;o<s;o++)kc(t[o],this,n,e);return n.sort(Qh),n}}function Qh(i,t){return i.distance-t.distance}function kc(i,t,e,n){let o=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(o=!1),o===!0&&n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)kc(s[r],t,e,!0)}}class tu{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ze(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class n_ extends ao{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);const eu={type:"change"},yl={type:"start"},yf={type:"end"},fr=new Ls,nu=new bi,i_=Math.cos(70*np.DEG2RAD),Pe=new k,Qe=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ia=1e-6;class o_ extends n_{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zo.ROTATE,MIDDLE:zo.DOLLY,RIGHT:zo.PAN},this.touches={ONE:Do.ROTATE,TWO:Do.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new Ae,this._lastTargetPosition=new k,this._quat=new Ae().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new tu,this._sphericalDelta=new tu,this._scale=1,this._panOffset=new k,this._rotateStart=new gt,this._rotateEnd=new gt,this._rotateDelta=new gt,this._panStart=new gt,this._panEnd=new gt,this._panDelta=new gt,this._dollyStart=new gt,this._dollyEnd=new gt,this._dollyDelta=new gt,this._dollyDirection=new k,this._mouse=new gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=r_.bind(this),this._onPointerDown=s_.bind(this),this._onPointerUp=a_.bind(this),this._onContextMenu=p_.bind(this),this._onMouseWheel=h_.bind(this),this._onKeyDown=u_.bind(this),this._onTouchStart=f_.bind(this),this._onTouchMove=d_.bind(this),this._onMouseDown=c_.bind(this),this._onMouseMove=l_.bind(this),this._interceptControlDown=m_.bind(this),this._interceptControlUp=g_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(eu),this.update(),this.state=ce.NONE}update(t=null){const e=this.object.position;Pe.copy(e).sub(this.target),Pe.applyQuaternion(this._quat),this._spherical.setFromVector3(Pe),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(n)&&isFinite(o)&&(n<-Math.PI?n+=Qe:n>Math.PI&&(n-=Qe),o<-Math.PI?o+=Qe:o>Math.PI&&(o-=Qe),n<=o?this._spherical.theta=Math.max(n,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+o)/2?Math.max(n,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(Pe.setFromSpherical(this._spherical),Pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Pe.length();r=this._clampDistance(a*this._scale);const c=a-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new k(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=Pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(fr.origin.copy(this.object.position),fr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fr.direction))<i_?this.object.lookAt(this.target):(nu.setFromNormalAndCoplanarPoint(this.object.up,this.target),fr.intersectPlane(nu,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ia||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ia||this._lastTargetPosition.distanceToSquared(this.target)>Ia?(this.dispatchEvent(eu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Qe/60*this.autoRotateSpeed*t:Qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Pe.setFromMatrixColumn(e,0),Pe.multiplyScalar(-t),this._panOffset.add(Pe)}_panUp(t,e){this.screenSpacePanning===!0?Pe.setFromMatrixColumn(e,1):(Pe.setFromMatrixColumn(e,0),Pe.crossVectors(this.object.up,Pe)),Pe.multiplyScalar(t),this._panOffset.add(Pe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Pe.copy(o).sub(this.target);let s=Pe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),o=t-n.left,s=e-n.top,r=n.width,a=n.height;this._mouse.x=o/r*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),o=.5*(t.pageY+e.y);this._rotateStart.set(n,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),o=.5*(t.pageY+e.y);this._panStart.set(n,o)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,o=t.pageY-e.y,s=Math.sqrt(n*n+o*o);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),o=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(o,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),o=.5*(t.pageY+e.y);this._panEnd.set(n,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,o=t.pageY-e.y,s=Math.sqrt(n*n+o*o);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function s_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function r_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function a_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yf),this.state=ce.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function c_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case zo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ce.DOLLY;break;case zo.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}break;case zo.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(yl)}function l_(i){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function h_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(i.preventDefault(),this.dispatchEvent(yl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(yf))}function u_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function f_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Do.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ce.TOUCH_ROTATE;break;case Do.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case Do.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ce.TOUCH_DOLLY_PAN;break;case Do.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(yl)}function d_(i){switch(this._trackPointer(i),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ce.NONE}}function p_(i){this.enabled!==!1&&i.preventDefault()}function m_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function g_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jr(i){let t=i;return()=>(t=t*16807%2147483647)/2147483647}function Zr(i,t){const e=document.createElement("canvas");e.width=e.height=i;const n=e.getContext("2d");t(n,i);const o=n.getImageData(0,0,i,i).data;let s=0,r=0,a=0;for(let f=0;f<o.length;f+=4)s+=o[f],r+=o[f+1],a+=o[f+2];const c=o.length/4,l=f=>Math.pow(f/c/255,2.2),h=new Vn(e);return h.wrapS=h.wrapT=io,h.colorSpace=pe,h.anisotropy=8,{t:h,mean:new k(l(s),l(r),l(a))}}const x_=()=>Zr(512,(i,t)=>{const e=jr(3);i.fillStyle="#8f887c",i.fillRect(0,0,t,t);for(let n=0;n<9e3;n++){const o=110+e()*90;i.fillStyle=`rgb(${o},${o-4},${o-12})`,i.fillRect(e()*t,e()*t,2,2)}for(let n=0;n<1100;n++){const o=e()*t,s=e()*t,r=4+e()*13,a=r*(.55+e()*.4),c=e()*Math.PI,l=120+e()*110,h=e()*18;for(const[f,u]of[[0,0],[t,0],[-t,0],[0,t],[0,-t]]){i.fillStyle="rgba(40,36,30,0.35)",i.beginPath(),i.ellipse(o+f+1.5,s+u+2,r,a,c,0,7),i.fill();const p=i.createRadialGradient(o+f-r*.3,s+u-a*.3,1,o+f,s+u,r);p.addColorStop(0,`rgb(${Math.min(255,l+30)},${Math.min(255,l+26-h/2)},${Math.min(255,l+18-h)})`),p.addColorStop(1,`rgb(${l-30},${l-34-h/2},${l-42-h})`),i.fillStyle=p,i.beginPath(),i.ellipse(o+f,s+u,r,a,c,0,7),i.fill()}}}),v_=()=>Zr(256,(i,t)=>{const e=jr(9);i.fillStyle="#56733a",i.fillRect(0,0,t,t);for(let n=0;n<7e3;n++){const o=e()*t,s=e()*t,r=3+e()*7,a=-Math.PI/2+(e()-.5)*1.2,c=e();i.strokeStyle=`rgb(${60+c*70},${95+c*80},${35+c*40})`,i.lineWidth=1,i.beginPath(),i.moveTo(o,s),i.lineTo(o+Math.cos(a)*r,s+Math.sin(a)*r),i.stroke()}}),__=()=>Zr(256,(i,t)=>{const e=jr(21);i.fillStyle="#a08d6d",i.fillRect(0,0,t,t);for(let n=0;n<40;n++)i.fillStyle=`rgba(${e()<.5?"80,66,48":"190,172,138"},${.08+e()*.1})`,i.beginPath(),i.ellipse(e()*t,e()*t,10+e()*40,8+e()*25,e()*3,0,7),i.fill();for(let n=0;n<2500;n++){const o=e();i.strokeStyle=`rgba(${170+o*60},${150+o*50},${90+o*30},0.7)`;const s=e()*t,r=e()*t,a=2+e()*6,c=e()*6.28;i.beginPath(),i.moveTo(s,r),i.lineTo(s+Math.cos(c)*a,r+Math.sin(c)*a),i.stroke()}for(let n=0;n<500;n++){const o=90+e()*100;i.fillStyle=`rgb(${o},${o-6},${o-16})`,i.beginPath(),i.arc(e()*t,e()*t,.8+e()*1.8,0,7),i.fill()}}),M_=()=>Zr(512,(i,t)=>{const e=jr(33);i.fillStyle="#6f6a62",i.fillRect(0,0,t,t);const n=8,o=t/n;for(let s=0;s<n;s++){let r=-(s%2)*40;for(;r<t;){const a=60+e()*70,c=150+e()*45;i.fillStyle=`rgb(${c},${c-4},${c-12})`,i.fillRect(r+2,s*o+2,a-4,o-4);for(let l=0;l<40;l++){const h=e()*30;i.fillStyle=`rgba(${h},${h},${h},0.08)`,i.fillRect(r+2+e()*(a-6),s*o+2+e()*(o-6),2,2)}r+=a}}for(let s=0;s<14;s++)i.fillStyle=`rgba(60,55,50,${.05+e()*.07})`,i.beginPath(),i.ellipse(e()*t,e()*t,10+e()*40,6+e()*20,e()*3,0,7),i.fill()}),Po=new dl(new Uint8Array(4),1,1);Po.needsUpdate=!0;const wi={lcMap:{value:Po},lcRect:{value:new ye(0,0,1,1)},pebMap:{value:Po},pebMean:{value:new k(1,1,1)},grsMap:{value:Po},grsMean:{value:new k(1,1,1)},dryMap:{value:Po},dryMean:{value:new k(1,1,1)},pavMap:{value:Po},pavMean:{value:new k(1,1,1)}};function y_(i,t,e){const[n,o]=e;i.colorSpace=si,i.flipY=!1,i.minFilter=Rn,i.generateMipmaps=!1,i.needsUpdate=!0,wi.lcMap.value=i,wi.lcRect.value.set(t.xmin-n,o-t.ymax,t.width*t.step,t.height*t.step);for(const[s,r]of[["peb",x_],["grs",v_],["dry",__],["pav",M_]]){const{t:a,mean:c}=r();wi[`${s}Map`].value=a,wi[`${s}Mean`].value=c}}const bf=`
uniform sampler2D lcMap; uniform vec4 lcRect;
vec4 landcover(vec2 xz) {
  vec2 uv = (xz - lcRect.xy) / lcRect.zw;
  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return vec4(-1.0);
  return texture2D(lcMap, uv);
}
// R = distanza con segno dalla riva in metri (+ mare, - terra): 0,125 m/unità entro 8 m, poi ~1,14 m/unità
float lcSigned(float r) {
  float a = r * 255.0 - 128.0, q = abs(a);
  return sign(a) * (q < 64.0 ? q / 8.0 : 8.0 + (q - 64.0) / 0.875);
}`,Sf=new dl(new Uint8Array(4),1,1);Sf.needsUpdate=!0;const As={map:{value:Sf},rect:{value:new ye(0,0,1,0)}},b_=`
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
}`,S_=`
uniform sampler2D pebMap; uniform sampler2D grsMap; uniform sampler2D dryMap; uniform sampler2D pavMap;
float gHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float gNoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(gHash(i), gHash(i + vec2(1, 0)), f.x), mix(gHash(i + vec2(0, 1)), gHash(i + vec2(1, 1)), f.x), f.y); }
// texture ripetuta senza che si veda la ripetizione: due scale e rotazioni mescolate da un rumore
vec3 detailT(sampler2D t, vec2 p, float s) {
  vec3 a = texture2D(t, p / s).rgb;
  vec3 b = texture2D(t, mat2(0.8, -0.6, 0.6, 0.8) * p / (s * 2.3) + 0.37).rgb;
  return mix(a, b, 0.6 * smoothstep(0.3, 0.7, gNoise(p * 0.045)));
}`,w_=`
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
  float ridge = 1.0 - 0.18 * smoothstep(0.02, 0.12, abs(fract(cv * 0.5 + col * 0.25) - 0.5));
  pat *= ridge;
  return low * mix(1.0, pat / 0.9, fade);
}`;function wf(i,{nearNeutral:t=!1,roof:e=!1}={}){const n=new Bn({map:i,side:le});return t&&(n.polygonOffset=!0,n.polygonOffsetFactor=4,n.polygonOffsetUnits=8),n.customProgramCacheKey=()=>`ortho-${t}-${e}`,n.onBeforeCompile=o=>{o.uniforms.hrMap=As.map,o.uniforms.hrRect=As.rect,t&&Object.assign(o.uniforms,wi),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`+(e?`
attribute vec3 ruv;
varying vec3 vRuv;`:"")).replace("#include <project_vertex>",`#include <project_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`+(e?`
vRuv = ruv;`:"")),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform sampler2D hrMap;
uniform vec4 hrRect;`+(e?b_:"")+(t?bf+S_:"")),e&&(o.fragmentShader=o.fragmentShader.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>${w_}`)),o.fragmentShader=o.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
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
          float wSea = smoothstep(-0.25, 0.25, lcSigned(lc.x)); // R: distanza con segno dalla riva
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
          // sabbia bagnata: la battigia (sotto ~0,5 m sul mare) è più scura e più calda, con un bordo irregolare
          float wy = 1.0 - smoothstep(0.1 + (gNoise(p * 0.11) - 0.5) * 0.25, 0.6 + (gNoise(p * 0.3 + 4.0) - 0.5) * 0.3, vWPos.y);
          c *= 1.0 - 0.3 * wBeach * wy;
          c = mix(c, c * vec3(1.06, 0.98, 0.88), wBeach * wy * 0.6);
          diffuseColor.rgb = mix(diffuseColor.rgb, c, cover * (1.0 - wSea));        }`:""}
      }
      diffuseColor.rgb *= diffuse;`)},n}function E_(i,t,e){const[n,o]=e,{width:s,height:r,step:a,xmin:c,ymax:l}=i;return function(f,u){const p=f+n,g=o-u,x=(p-c)/a,m=(l-g)/a,d=Math.max(0,Math.min(s-2,Math.floor(x))),v=Math.max(0,Math.min(r-2,Math.floor(m))),_=Math.min(1,Math.max(0,x-d)),M=Math.min(1,Math.max(0,m-v)),w=v*s+d;return t[w]*(1-_)*(1-M)+t[w+1]*_*(1-M)+t[w+s]*(1-_)*M+t[w+s+1]*_*M}}const _i=-2.4;function iu(i,t,e,n,o,s=0,r=null,a=null){const[c,l]=n,h=r?Math.max(i.xmin,r.xmin):i.xmin,f=r?Math.min(i.xmax,r.xmax):i.xmax,u=r?Math.max(i.ymin,r.ymin):i.ymin,p=r?Math.min(i.ymax,r.ymax):i.ymax;if(f<=h||p<=u)return null;const g=Math.max(2,Math.round((f-h)/t)+1),x=Math.max(2,Math.round((p-u)/t)+1),m=[],d=[],v=(R,L,N)=>{const C=R-c,D=l-L;return m.push(C,(N??e(C,D))-s,D),d.push((R-i.xmin)/(i.xmax-i.xmin),(L-i.ymin)/(i.ymax-i.ymin)),m.length/3-1},_=R=>h+(f-h)*R/(g-1),M=R=>u+(p-u)*R/(x-1);for(let R=0;R<x;R++)for(let L=0;L<g;L++)v(_(L),M(R));const w=Math.max(2,Math.round(t/2)),b=new Uint8Array((g-1)*(x-1));if(a)for(let R=0;R<x-1;R++)for(let L=0;L<g-1;L++){const N=_(L)-c,C=_(L+1)-c,D=l-M(R+1),B=l-M(R);a(N,D,C,B)&&(b[R*(g-1)+L]=1)}const E=new Map,T=(R,L)=>{if(R>=0&&L>=0&&R<g-1&&L<x-1)return b[L*(g-1)+R]===1;if(!a)return!1;const N=R*100003+L;return E.has(N)||E.set(N,!!a(_(R)-c,l-M(L+1),_(R+1)-c,l-M(L))),E.get(N)},S=[];for(let R=0;R<x-1;R++)for(let L=0;L<g-1;L++){const N=R*g+L,C=N+1,D=N+g,B=D+1;if(!T(L,R)){if(m[N*3+1]<_i&&m[C*3+1]<_i&&m[D*3+1]<_i&&m[B*3+1]<_i)continue;S.push(N,C,D,C,B,D);continue}const O=m[N*3+1]+s,q=m[C*3+1]+s,Z=m[D*3+1]+s,G=m[B*3+1]+s,st=[];for(let et=0;et<=w;et++)for(let V=0;V<=w;V++){const Y=V/w,at=et/w;if((V===0||V===w)&&(et===0||et===w)){st.push(V===0?et===0?N:D:et===0?C:B);continue}const rt=_(L)+(_(L+1)-_(L))*Y,pt=M(R)+(M(R+1)-M(R))*at;let vt=null;et===0&&!T(L,R-1)?vt=O+(q-O)*Y:et===w&&!T(L,R+1)?vt=Z+(G-Z)*Y:V===0&&!T(L-1,R)?vt=O+(Z-O)*at:V===w&&!T(L+1,R)&&(vt=q+(G-q)*at),st.push(v(rt,pt,vt))}for(let et=0;et<w;et++)for(let V=0;V<w;V++){const Y=st[et*(w+1)+V],at=st[et*(w+1)+V+1],rt=st[(et+1)*(w+1)+V],pt=st[(et+1)*(w+1)+V+1];m[Y*3+1]<_i&&m[at*3+1]<_i&&m[rt*3+1]<_i&&m[pt*3+1]<_i||S.push(Y,at,rt,at,pt,rt)}}const y=new Kt;y.setAttribute("position",new Dt(m,3)),y.setAttribute("uv",new Dt(d,2)),y.setIndex(S);const A=new Ft(y,wf(o,{nearNeutral:!0}));return A.receiveShadow=!0,A}function T_({orthoMeta:i,textures:t,heightAt:e,origin:n,bounds:o,refine:s=null,baseAt:r=e}){const a=new re;a.name="terrain";for(const c of i.tiles){const l=t.get(c.file);if(!l)continue;let h;if(c.level==="base"){const[f,u]=n,p=i.tiles.filter(d=>d.level!=="base"),g=(d,v)=>p.some(_=>d+f>=_.xmin&&d+f<=_.xmax&&u-v>=_.ymin&&u-v<=_.ymax);h=iu(c,12,(d,v)=>g(d,v)?r(d,v):e(d,v),n,l,.6,o,s&&((d,v,_,M)=>!(g(d,v)&&g(_,M)&&g(d,M)&&g(_,v))&&s(d,v,_,M)))}else h=iu(c,6,e,n,l,0,o,s);h&&a.add(h)}return a}const Ei={sun:{value:new k(0,1,0)},warm:{value:new Rt(1,.6,.35)},cool:{value:new Rt(.5,.3,.6)},amt:{value:0}},Jn=$t;Jn.fog_pars_fragment.includes("vFogDirW")||(Jn.fog_pars_vertex=Jn.fog_pars_vertex.replace("varying float vFogDepth;",`varying float vFogDepth;
	varying vec3 vFogDirW;`),Jn.fog_vertex=Jn.fog_vertex.replace("vFogDepth = - mvPosition.z;",`vFogDepth = - mvPosition.z;
	vFogDirW = (vec4(mvPosition.xyz, 0.0) * viewMatrix).xyz;`),Jn.fog_pars_fragment=Jn.fog_pars_fragment.replace("varying float vFogDepth;",`varying float vFogDepth;
	varying vec3 vFogDirW;
	uniform vec3 uFogSun; uniform vec3 uFogWarm; uniform vec3 uFogCool; uniform float uFogAmt;`),Jn.fog_fragment=Jn.fog_fragment.replace("gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );",`
	vec3 fd = normalize(vFogDirW);
	float fs = dot(fd, uFogSun), fsp = max(fs, 0.0);
	float low = exp(-max(fd.y, 0.0) * 4.5);          // stessa formula del cielo (daylight.js): all'orizzonte si fondono
	vec3 fogC = mix(fogColor, uFogWarm, clamp(uFogAmt * (pow(fsp, 4.0) * 0.55 + pow(fsp, 14.0) * 0.5) * (0.3 + 0.7 * low), 0.0, 1.0));
	fogC = mix(fogC, uFogCool, clamp(uFogAmt * 0.7 * pow(max(-fs, 0.0), 1.3) * exp(-max(fd.y, 0.0) * 3.2), 0.0, 1.0));
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogC, fogFactor );`));const Ef=zi.prototype,Tf=Object.getOwnPropertyDescriptor(Ef,"onBeforeCompile").value,Af=i=>{const t=i.uniforms;t&&(t.uFogSun=Ei.sun,t.uFogWarm=Ei.warm,t.uFogCool=Ei.cool,t.uFogAmt=Ei.amt)},Cf=function(i,t){Af(i),Tf.call(this,i,t)};Cf.toString=()=>Tf.toString();Object.defineProperty(Ef,"onBeforeCompile",{configurable:!0,get(){return this._obc||Cf},set(i){if(!i){this._obc=null;return}const t=function(e,n){Af(e),i.call(this,e,n)};t.toString=()=>i.toString(),this._obc=t}});const A_=38.056,C_=14.588,nn=Math.PI/180,Fr=nn*23.4397,R_=i=>i.valueOf()/864e5-.5+2440588-2451545,ou=(i,t)=>Math.atan2(Math.sin(i)*Math.cos(Fr)-Math.tan(t)*Math.sin(Fr),Math.cos(i)),su=(i,t)=>Math.asin(Math.sin(t)*Math.cos(Fr)+Math.cos(t)*Math.sin(Fr)*Math.sin(i));function ru(i,t,e){const n=nn*(280.16+360.9856235*i)+nn*C_-t,o=nn*A_,s=Math.asin(Math.sin(o)*Math.sin(e)+Math.cos(o)*Math.cos(e)*Math.cos(n)),r=Math.atan2(Math.sin(n),Math.cos(n)*Math.sin(o)-Math.tan(e)*Math.cos(o));return{alt:s,az:r,dir:new k(-Math.sin(r)*Math.cos(s),Math.sin(s),Math.cos(r)*Math.cos(s))}}function P_(i){const t=R_(i),e=nn*(357.5291+.98560028*t),n=e+nn*(1.9148*Math.sin(e)+.02*Math.sin(2*e)+3e-4*Math.sin(3*e))+nn*102.9372+Math.PI,o=ru(t,ou(n,0),su(n,0)),s=nn*(218.316+13.176396*t),r=nn*(134.963+13.064993*t),a=nn*(93.272+13.22935*t),c=s+nn*6.289*Math.sin(r),l=nn*5.128*Math.sin(a),h=ru(t,ou(c,l),su(c,l));return h.lit=(1-o.dir.dot(h.dir))/2,{sun:o,moon:h}}const eo={y:0,m:0,d:0,offCache:new Map};function L_(i,t,e){eo.y=i,eo.m=t,eo.d=e}const D_=(i,t,e)=>{const n=`${i}-${t}-${e}`;if(!eo.offCache.has(n)){const o=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"Europe/Rome",timeZoneName:"shortOffset"}).formatToParts(new Date(Date.UTC(i,t-1,e,12))).map(s=>[s.type,s.value]));eo.offCache.set(n,+(o.timeZoneName.replace("GMT","")||0))}return eo.offCache.get(n)};function I_(i){let{y:t,m:e,d:n}=eo;if(!t){const o=new Date;t=o.getFullYear(),e=o.getMonth()+1,n=o.getDate()}return new Date(Date.UTC(t,e-1,n,0,0)+(i-D_(t,e,n))*36e5)}const Pi={value:0},Le=i=>new Rt(i),ps=[[-18,[725542,462110,132364,1383480,725542,0]],[-11,[2503514,1582148,461856,4998256,2240344,.35]],[-7,[9071224,4477052,1320016,13201484,5660814,.75]],[-3,[15234122,12090498,2902662,16745552,10127010,1]],[.5,[16750152,15374964,4485294,16754768,13804694,1]],[4,[16759918,15906448,5670076,16763778,14468280,.85]],[9,[16178352,13620956,4884164,16770744,13031142,.45]],[18,[13885674,9417944,4161472,16773330,13623534,.12]],[90,[13885674,9417944,4161472,16773330,13623534,.1]]].map(([i,t])=>({el:i,c:t.slice(0,5).map(Le),glow:t[5]}));ps[0].c.map(()=>new Rt);function U_(i,t){let e=0;for(;e<ps.length-2&&i>ps[e+1].el;)e++;const n=ps[e],o=ps[e+1],s=Math.min(1,Math.max(0,(i-n.el)/(o.el-n.el))),r=s*s*(3-2*s);for(let a=0;a<5;a++)t.c[a].copy(n.c[a]).lerp(o.c[a],r);return t.glow=n.glow+(o.glow-n.glow)*r,t}function N_(i){const t={uSun:{value:new k(0,1,0)},uSunVis:{value:1},uMoon:{value:new k(0,-1,0)},uMoonVis:{value:0},uH:{value:Le(13885674)},uM:{value:Le(9417944)},uZ:{value:Le(4161472)},uW:{value:Le(16773330)},uX:{value:Le(13623534)},uGlow:{value:.1},uTime:{value:0},uCloud:{value:.5},uCloudLit:{value:Le(16777215)},uCloudShade:{value:Le(10466508)}},e=new Ft(new be(2e5,32,16),new _n({side:Ze,depthWrite:!1,fog:!1,uniforms:t,vertexShader:"varying vec3 vD; void main() { vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`precision highp float;
      uniform vec3 uSun, uMoon, uH, uM, uZ, uW, uX, uCloudLit, uCloudShade; uniform float uSunVis, uMoonVis, uGlow, uTime, uCloud; varying vec3 vD;
      float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
      float noise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
      float fbm(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
      // densità delle nuvole: uno strato a quota fissa, proiettato (l'orizzonte si stringe in prospettiva)
      float dens(vec2 p, float cov) {
        float f = fbm(p) * 0.75 + 0.25 * fbm(p * 3.1 + 7.7);
        return smoothstep(1.0 - cov, 1.0 - cov + 0.32, f);
      }
      void main() {
        float h = vD.y, hp = max(h, 0.0);
        float sd = dot(vD, uSun), sdp = max(sd, 0.0);
        // gradiente verticale: orizzonte → fascia media → zenit
        vec3 c = mix(uH, uM, smoothstep(0.0, 0.22, hp));
        c = mix(c, uZ, smoothstep(0.12, 0.85, hp));
        // bagliore del sole: largo sull'orizzonte, stretto attorno al disco
        float low = exp(-hp * 4.5);
        c = mix(c, uW, clamp(uGlow * (pow(sdp, 4.0) * 0.55 + pow(sdp, 14.0) * 0.5) * (0.3 + 0.7 * low), 0.0, 1.0));
        // dalla parte opposta: banda rosa-viola sopra l'ombra della terra
        float anti = pow(max(-sd, 0.0), 1.3);
        c = mix(c, uX, clamp(uGlow * 0.5 * anti * exp(-hp * 3.2), 0.0, 1.0));
        // disco e alone
        c += vec3(1.0, 0.86, 0.66) * (pow(sdp, 48.0) * 0.5 + pow(sdp, 2400.0) * 5.0) * uSunVis;
        // nuvole: strato basso volumetrico + cirri alti, illuminati dal sole (bordi luminosi, ventre rosa)
        if (h > 0.012 && uCloud > 0.0) {
          vec2 P = vD.xz / (h + 0.16) * 0.85 + vec2(uTime * 0.004, uTime * 0.0015);
          float d = dens(P, uCloud);
          if (d > 0.002) {
            // quanta nuvola c'è dalla parte del sole: sposta il punto verso il sole e ricampiona
            vec2 L = normalize(uSun.xz + 1e-4) * 0.16 * (0.4 + 0.6 * clamp(1.0 - uSun.y, 0.0, 1.0));
            float d2 = dens(P + L, uCloud), d3 = dens(P + L * 2.2, uCloud);
            float shade = clamp(0.5 * (d2 + d3) - d * 0.35, 0.0, 1.0);          // 1 = sepolta nell'ombra
            float edge = clamp(d - d2 + 0.25, 0.0, 1.0);                          // bordo verso il sole
            vec3 lit = uCloudLit * (0.85 + 0.55 * edge);
            vec3 col = mix(lit, uCloudShade, shade * 0.85);
            // sotto, verso il basso del cielo, la nuvola prende il colore dell'orizzonte
            col = mix(col, mix(uH, uW, 0.5), (1.0 - smoothstep(0.0, 0.4, hp)) * 0.5);
            float fade = smoothstep(0.012, 0.09, h);                              // svanisce nella foschia all'orizzonte
            c = mix(c, col, clamp(d * 1.15, 0.0, 1.0) * fade * 0.96);
          }
          // cirri: strisce sottili, alte, che al tramonto prendono i colori più accesi
          vec2 Q = vec2(vD.x, vD.z) / (h + 0.35) * vec2(1.0, 3.2) + vec2(uTime * 0.003, 0.0);
          float ci = smoothstep(0.55, 0.9, fbm(Q * 1.4 + 3.0)) * (0.35 + 0.65 * uCloud);
          vec3 cc = mix(uCloudLit, uW, clamp(uGlow, 0.0, 1.0) * (0.35 + 0.65 * pow(sdp, 2.0)));
          c = mix(c, cc * (0.9 + 0.5 * pow(sdp, 3.0)), ci * 0.55 * smoothstep(0.03, 0.2, h));
        }
        float m = max(dot(vD, uMoon), 0.0);
        c += vec3(0.6, 0.7, 0.9) * pow(m, 30.0) * 0.12 * uMoonVis;
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`}));e.renderOrder=-2,e.frustumCulled=!1;const n=2200,o=new Float32Array(n*3),s=(()=>{let u=12345;return()=>(u=u*16807%2147483647)/2147483647})();for(let u=0;u<n;u++){const p=.03+s()*.97,g=s()*Math.PI*2,x=Math.sqrt(1-p*p);o.set([Math.cos(g)*x*19e4,p*19e4,Math.sin(g)*x*19e4],u*3)}const r=new Kt;r.setAttribute("position",new Ee(o,3));const a=new pl({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),c=new uf(r,a);c.renderOrder=-1,c.frustumCulled=!1;const l={uSunDir:{value:new k(0,1,0)},uNight:Pi},h=new Ft(new be(1e3,32,16),new _n({uniforms:l,transparent:!0,depthWrite:!1,fog:!1,blending:ys,vertexShader:"varying vec3 vN; void main() { vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uSunDir; uniform float uNight; varying vec3 vN;
      float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453); }
      void main() {
        float lit = smoothstep(-0.03, 0.12, dot(normalize(vN), uSunDir));
        // "mari" lunari: macchie scure fisse sulla faccia
        float mare = 0.82 + 0.18 * step(0.55, hash(floor(normalize(vN) * 4.0)));
        vec3 c = vec3(0.96, 0.94, 0.88) * mare * (lit * mix(0.5, 0.85, uNight) + 0.03 * uNight);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`}));h.frustumCulled=!1,h.renderOrder=-1,i.add(e,c,h);const f={moonDir:new k};return{u:t,starMat:a,moonU:l,state:f,follow(u,p=0){e.position.copy(u.position),c.position.copy(u.position),t.uTime.value=p,h.position.copy(u.position).addScaledVector(f.moonDir,15e4),h.visible=f.moonDir.y>-.02}}}const Fe=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},z_={c:[0,1,2,3,4].map(()=>new Rt),glow:0},dr=new Rt,au=new Rt;function O_(i,t){const{sun:e,moon:n}=P_(I_(i)),o=e.alt/nn,s=Fe(-6,9,o),r=Fe(-8,2,o)*(1-Fe(2,14,o)),a=Fe(-2,5,n.alt/nn),c=U_(o,z_),[l,h,f,u,p]=c.c,g=t.sky.u;g.uH.value.copy(l),g.uM.value.copy(h),g.uZ.value.copy(f),g.uW.value.copy(u),g.uX.value.copy(p),g.uGlow.value=c.glow,g.uCloud.value=.62+.1*Math.sin(i*.9),g.uSun.value.copy(e.dir),g.uSunVis.value=Fe(-4,.5,o),g.uMoon.value.copy(n.dir),g.uMoonVis.value=a*(1-s)*n.lit,g.uCloudLit.value.set(16777215).lerp(u,r*.85).lerp(Le(9075368),Fe(-4,-10,o)*.45).multiplyScalar(.35+.65*Fe(-12,4,o)),g.uCloudShade.value.copy(f).lerp(h,.55).lerp(Le(16777215),.25*s).multiplyScalar(.7+.3*s),t.sky.starMat.opacity=(1-Fe(-14,-4,o))*.95,t.sky.moonU.uSunDir.value.copy(e.dir),t.sky.state.moonDir.copy(n.dir),t.fog.color.copy(l),t.bgScene.background.copy(l),t.fog.density=26e-6*(1+1.6*r),Ei.sun.value.copy(e.dir),Ei.warm.value.copy(u),Ei.cool.value.copy(p),Ei.amt.value=c.glow,t.sun.intensity=2.1*(.5+.5*Fe(0,14,o))*Fe(-3.5,.2,o),t.sun.color.set(16773852).lerp(Le(16752730),r*Fe(-2,3,o)).lerp(Le(16742986),Fe(2,-.5,o)*.5*r),t.sun.castShadow=o>0,t.sunDir=e.dir.clone(),t.hemi.intensity=1.25*(.42+.58*Fe(-9,5,o))*(1+.35*r),t.hemi.color.set(7176868).lerp(Le(14675711),s).lerp(Le(15775904),r*.45),t.hemi.groundColor.set(4867390).lerp(Le(9075302),s).lerp(Le(9857100),r*.35),t.moonLight.intensity=(1-s)*Math.max(.28,.62*a*(.4+.6*n.lit))+.25*r*(1-s),t.moonLight.position.copy(n.dir).multiplyScalar(1e3),dr.set(6978712).lerp(Le(16777215),Fe(-9,4,o)),au.set(16777215).lerp(Le(16760458),r*.75).lerp(Le(12166344),Fe(-3,-9,o)*.3),dr.multiply(au);for(const m of t.basics)m.color.copy(dr);const x=o>-2;for(const m of t.waters)m.uSkyH.value.copy(l),m.uSkyZ.value.copy(f),m.uSkyW&&m.uSkyW.value.copy(u),m.uTint.value.copy(dr),m.uSun.value.copy(x?e.dir:n.dir),m.uSpec.value=x?3.2*Fe(-3,5,o):.8*a*n.lit,m.uGold&&(m.uGold.value=c.glow);return Pi.value=t.lights?1-Fe(-5,3,o):0,{sun:e,moon:n}}const pr=3.5,mr=3.1,Rf=14,Pf=4;function Lf(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}const _s=["#6d4a34","#7a5234","#6a4832","#6e4a30"],Ms=["#2e6a3c","#3a5c40","#2c5c38","#3f5f45"],Hc="#3a3a38",F_="#8a9aa8";function Df(i){const t=new Vn(i);return t.wrapS=t.wrapT=io,t.colorSpace=pe,t.anisotropy=4,t}function If(i,t,e,n){i.fillStyle="#ffffff",i.fillRect(0,0,t,e);for(let o=0;o<180;o++)i.fillStyle=`rgba(0,0,0,${n()*.04})`,i.fillRect(n()*t,n()*e,1.5,1.5);i.fillStyle="rgba(0,0,0,0.09)",i.fillRect(0,e-4,t,4)}function Qi(i,t,e,n,o,s){i.fillStyle=s,i.fillRect(t,e,n,o),i.fillStyle="rgba(0,0,0,0.2)";for(let r=e+3;r<e+o-2;r+=5)i.fillRect(t+1,r,n-2,1)}function as(i,t,e={}){const o=e.wide?52:44,s=e.tall?62:54,r=(128-o)/2,a=e.low?30:26,l=t()<.68?_s[Math.floor(t()*_s.length)]:Ms[Math.floor(t()*Ms.length)],h=12,f=t()<.12;i.fillStyle=Hc,i.fillRect(r-1,a-1,o+2,s+2),i.fillStyle=F_,i.fillRect(r+2,a+2,o-4,s-4),i.fillStyle="rgba(180,200,215,0.35)",i.fillRect(r+3,a+3,o-6,(s-6)*(f?.55:.42)),f?(Qi(i,r-h,a,h,s*.92,l),Qi(i,r+o,a,h,s*.92,l),i.fillStyle=l,i.fillRect(r-h+2,a+s*.5,h-3,s*.45),i.fillRect(r+o+1,a+s*.5,h-3,s*.45)):(Qi(i,r-h+1,a,h-1,s,l),Qi(i,r+o,a,h-1,s,l)),i.fillStyle="#e0ddd4",i.fillRect(r-3,a+s,o+6,4),i.fillStyle="rgba(0,0,0,0.08)",i.fillRect(r-3,a+s+3,o+6,1)}function B_(i){const n=document.createElement("canvas");n.width=128,n.height=114;const o=n.getContext("2d"),s=Lf(i);If(o,128,114,s);const r=i%5;return r===0?as(o,s,{}):r===1?as(o,s,{wide:!0}):r===2?as(o,s,{tall:!0}):r===3?(as(o,s,{low:!0}),o.fillStyle="rgba(0,0,0,0.06)",o.fillRect(8,102,112,2)):(as(o,s,{}),s()>.5&&(o.fillStyle="rgba(0,0,0,0.07)",o.fillRect(10,8,108,3))),Df(n)}function k_(i){const n=document.createElement("canvas");n.width=128,n.height=114;const o=n.getContext("2d"),s=Lf(i+4e3);If(o,128,114,s),o.fillStyle="rgba(0,0,0,0.11)",o.fillRect(0,102,128,12);const r=i%4,a=12,c=104,l=28,h=84;if(r===0){const f=s()<.55?_s[0]:Ms[1];Qi(o,a,l,c,h,f),o.fillStyle=Hc,o.fillRect(a+c*.38,l+h*.15,c*.24,h*.7)}else if(r===1){o.fillStyle="#8f9396",o.fillRect(a,l,c,h),o.fillStyle="rgba(0,0,0,0.2)";for(let f=l+4;f<110;f+=5)o.fillRect(a,f,c,1);o.fillStyle="#d5d2ca",o.fillRect(a-2,l-5,c+4,5)}else if(r===2){const f=_s[Math.floor(s()*_s.length)];Qi(o,a,l,c*.42,h,f),o.fillStyle="#5a4030",o.fillRect(a+c*.44,l+6,c*.48,h-12),o.fillStyle="#3a2820",o.fillRect(a+c*.48,l+12,c*.4,h-24)}else{const f=Ms[Math.floor(s()*Ms.length)];Qi(o,a+4,l,c-8,h*.88,f),o.fillStyle=Hc,o.fillRect(a+c*.35,l+h*.55,c*.3,h*.35)}return Df(n)}function cu(i){return i.onBeforeCompile=t=>{t.uniforms.uNight=Pi,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        if (uNight > 0.0) {
          vec2 cell = floor(vMapUv), f = fract(vMapUv);
          float win = step(0.32, f.x) * step(f.x, 0.68) * step(0.28, f.y) * step(f.y, 0.72);
          float h = fract(sin(dot(cell + vColor.rg * 97.0, vec2(12.9898, 78.233))) * 43758.5453);
          vec3 warm = h < 0.3 ? vec3(1.0, 0.74, 0.42) : vec3(0.82, 0.88, 1.0);
          totalEmissiveRadiance += win * step(h, 0.32) * uNight * warm * 1.15;
        }`)},i}function H_(){const i=[];for(let t=0;t<Rf;t++)i.push(cu(new Ot({map:B_(8e3+t*6151),vertexColors:!0,side:le})));for(let t=0;t<Pf;t++)i.push(cu(new Ot({map:k_(12e3+t*3571),vertexColors:!0,side:le})));return i}function je(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),o=new Set(Object.keys(i[0].morphAttributes)),s={},r={},a=i[0].morphTargetsRelative,c=new Kt;let l=0;for(let h=0;h<i.length;++h){const f=i[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!o.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.morphAttributes[p])}if(t){let p;if(e)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0;const f=[];for(let u=0;u<i.length;++u){const p=i[u].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+h);h+=i[u].attributes.position.count}c.setIndex(f)}for(const h in s){const f=lu(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(const h in r){const f=r[h][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){const p=[];for(let x=0;x<r[h].length;++x)p.push(r[h][x][u]);const g=lu(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function lu(i){let t,e,n,o=-1,s=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(o===-1&&(o=h.gpuType),o!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const r=new t(s),a=new Ee(r,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const f=c/e;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<e;g++){const x=h.getComponent(u,g);a.setComponent(u+f,g,x)}}else r.set(h.array,c);c+=h.count*e}return o!==void 0&&(a.gpuType=o),a}const bl={1302566:{name:"palazzo-ve3-ovest",title:"Palazzo a ovest del Municipio",piazza:"Vittorio Emanuele III",facing:[0,-1],wall:15193008,trim:15985368,stone:13616304,shutter:8016436,roof:11622964,bay:3.05,balcony:"every",ante:"chiuse"},1302564:{name:"palazzo-ve3-est",title:"Palazzo chiaro a est del Municipio",piazza:"Vittorio Emanuele III",facing:[-.85,-.45],wall:15985887,trim:16315628,stone:14012096,shutter:12875840,roof:11622964,bay:3.15,balcony:"alt",ante:"chiuse"},1302563:{name:"palazzo-ve3-est-2",title:"Palazzo oltre l'angolo est",piazza:"Vittorio Emanuele III",facing:[-1,0],wall:15721680,trim:16183526,stone:13813942,shutter:8213558,roof:11622964,bay:3.3,balcony:"alt",ante:"chiuse"},1302551:{name:"palazzo-ve3-nord",title:"Palazzo giallo a nord della fontana",piazza:"Vittorio Emanuele III",facing:[0,1],wall:14994552,trim:15786672,stone:13812900,shutter:7227952,roof:11622964,bay:3.3,balcony:"alt",ante:"chiuse",ground:"bottega",awning:!0,shop:2896688},1302548:{name:"palazzo-ve3-nord-ovest",title:"Palazzo con portico sulla via inferiore",piazza:"Vittorio Emanuele III",facing:[0,1],wall:15587768,trim:16050904,stone:14011320,shutter:6965298,roof:11622964,bay:3.1,balcony:"every",ante:"chiuse",ground:"archi",pilastri:!0,belvedere:!0},1302693:{name:"palazzo-liberta-alto",title:"Palazzo alto a ovest della Chiesa Madre",piazza:"Libertà",facing:[1,.15],wall:14468772,trim:15721676,stone:12892058,shutter:7162420,roof:11049088,bay:3.15,balcony:"every",ante:"chiuse"},1302678:{name:"palazzetto-liberta-est",title:"Palazzetto a est della Chiesa Madre",piazza:"Libertà",facing:[-1,0],wall:16250094,trim:16513266,stone:14538440,shutter:3041852,roof:11622964,bay:2.7,balcony:"none",ante:"chiuse"},1302669:{name:"villa-gp2",title:"Villa chiara a sud del giardino",piazza:"Giovanni Paolo II",facing:[0,-1],wall:15984584,trim:16315108,stone:14537924,shutter:2907192,roof:11622964,bay:3.2,balcony:"center",ante:"chiuse"},1302648:{name:"schiera-gp2",title:"Schiera a ovest del giardino",piazza:"Giovanni Paolo II",facing:[0,-1],wall:15127224,trim:15787216,stone:12036758,shutter:6966326,roof:11622964,bay:4.2,balcony:"every",ante:"chiuse",ground:"bottega",pilastri:!0,shop:2762790}},hu=2371640,G_=6044968,uu=2764338,V_=9409430;function W_(i){return!!bl[i]}class X_{constructor(){this.parts=[]}add(t,e){const o=(t.index?t.toNonIndexed():t).getAttribute("position");if(!o?.count)return;const s=new Kt;s.setAttribute("position",o);const r=new Rt(e),a=new Float32Array(o.count*3);for(let c=0;c<o.count;c++)a.set([r.r,r.g,r.b],c*3);s.setAttribute("color",new Ee(a,3)),this.parts.push(s)}mesh(t){if(!this.parts.length)return null;const e=je(this.parts);e.computeVertexNormals();const n=new Ot({vertexColors:!0,side:le});n.onBeforeCompile=s=>{s.uniforms.uNight=Pi,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * vec3(1.0, 0.78, 0.5) * uNight * 0.22;`)};const o=new Ft(e,n);return o.name=t,o.castShadow=o.receiveShadow=!0,o}}function q_(i){const t=[];for(let e=0;e<i.length;e+=2)t.push([i[e],i[e+1]]);return t}function $_(i,t,e){let n=!1;for(let o=0,s=i.length-1;o<i.length;s=o++){const r=i[o][0],a=i[o][1],c=i[s][0],l=i[s][1];a>e!=l>e&&t<(c-r)*(e-a)/(l-a)+r&&(n=!n)}return n}function Ua(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1])||1;let o=-(t[1]-i[1])/n,s=(t[0]-i[0])/n;const r=(i[0]+t[0])/2,a=(i[1]+t[1])/2;return $_(e,r+o*.45,a+s*.45)&&(o=-o,s=-s),{nx:o,nz:s,L:n,tx:(t[0]-i[0])/n,tz:(t[1]-i[1])/n,mx:r,mz:a}}function Uf(i,t,e,n,o,s){return new Wt().makeBasis(new k(e,0,n),new k(0,1,0),new k(o,0,s)).setPosition(i,0,t)}function Me(i,t,e,n,o,s,r,a,c,l,h,f,u){if(c-a<.02||f-h<.01||l<.02)return;const p=new kt(l*2,c-a,f-h);p.translate(0,(a+c)/2,(h+f)/2),p.applyMatrix4(Uf(t,e,n,o,s,r)),i.add(p,u)}function fu(i,t,e,n,o,s,r,a,c,l,h,f,u){const p=l/2,g=c-p;if(g<a+.25){Me(i,t,e,n,o,s,r,a,c,p,f,u,h);return}const x=new Ri;x.moveTo(-p,a),x.lineTo(p,a),x.lineTo(p,g),x.absarc(0,g,p,0,Math.PI,!1),x.lineTo(-p,a);const m=new ci(x,{depth:u-f,bevelEnabled:!1,curveSegments:8});m.translate(0,0,f),m.applyMatrix4(Uf(t,e,n,o,s,r)),i.add(m,h)}function Y_(i,t,e,n,o,s){const r=[];for(let c=0;c<t.length;c++){if((o[c]??30)<.4)continue;const[l,h]=t[c],[f,u]=t[(c+1)%t.length];r.push(l,e,h,f,e,u,f,n,u,l,e,h,f,n,u,l,n,h)}if(!r.length)return;const a=new Kt;a.setAttribute("position",new Dt(r,3)),i.add(a,s)}function j_(i,t,e,n){let o;try{o=Hn.triangulateShape(t.map(a=>new gt(a[0],a[1])),[])}catch{return}const s=[];for(const[a,c,l]of o){const h=t[a],f=t[c],u=t[l],p=f[0]-h[0],g=f[1]-h[1],x=u[0]-h[0],m=u[1]-h[1],v=g*x-p*m>=0?[h,f,u]:[h,u,f];for(const _ of v)s.push(_[0],e,_[1])}if(!s.length)return;const r=new Kt;r.setAttribute("position",new Dt(s,3)),i.add(r,n)}function Z_(i,t,e,n){const o=t.roof.v,s=t.roof.tan,r=a=>[o[a*3],e+o[a*3+2]*s,o[a*3+1]];for(const a of t.roof.f){if(a.length<3)continue;const c=a.map(r);let l;try{l=Hn.triangulateShape(c.map(u=>new gt(u[0],u[2])),[])}catch{continue}const h=[];for(const[u,p,g]of l){let x=c[u],m=c[p],d=c[g];(m[2]-x[2])*(d[0]-x[0])-(m[0]-x[0])*(d[2]-x[2])<0&&([m,d]=[d,m]),h.push(...x,...m,...d)}if(!h.length)continue;const f=new Kt;f.setAttribute("position",new Dt(h,3)),i.add(f,n)}}function K_(i){const t=bl[i.id],e=q_(i.r);if(e.length<3)return null;const n=i.e||[],o=Math.min(i.b,i.g)-.4,s=i.g+i.h,r=Math.max(1,i.f||1),a=i.h/r,c=new X_;if(Y_(c,e,o,s,n,t.wall),i.roof)Z_(c,i,s,t.roof);else{j_(c,e,s,t.roof);for(let u=0;u<e.length;u++){if((n[u]??30)<.4)continue;const p=Ua(e[u],e[(u+1)%e.length],e);Me(c,p.mx,p.mz,p.tx,p.tz,p.nx,p.nz,s,s+.9,p.L/2,-.06,.16,t.wall)}}let l=-1,h=-1/0;for(let u=0;u<e.length;u++){if((n[u]??30)<4)continue;const p=Ua(e[u],e[(u+1)%e.length],e);if(p.L<5)continue;const g=p.nx*t.facing[0]+p.nz*t.facing[1]+p.L*.008;g>h&&(h=g,l=u)}let f=s;if(i.roof){const u=i.roof.v;for(let p=0;p<u.length;p+=3)f=Math.max(f,s+u[p+2]*i.roof.tan)}for(let u=0;u<e.length;u++){if((n[u]??30)<4)continue;const p=Ua(e[u],e[(u+1)%e.length],e);if(p.L<3.2)continue;const{mx:g,mz:x,tx:m,tz:d,nx:v,nz:_,L:M}=p;Me(c,g,x,m,d,v,_,o,i.g+Math.min(.85,a*.28),M/2,.01,.07,t.stone);for(let T=1;T<r;T++)Me(c,g,x,m,d,v,_,i.g+T*a-.08,i.g+T*a+.06,M/2,.01,.09,t.trim);Me(c,g,x,m,d,v,_,s-.28,s+.06,M/2,0,.16,t.trim);const w=Math.max(1,Math.round(M/t.bay)),b=Math.floor(w/2),E=u===l;if(t.pilastri)for(let T=0;T<=w;T++){const S=T/w;Me(c,g+m*(S-.5)*M,x+d*(S-.5)*M,m,d,v,_,i.g+.7,s-.2,.11,.02,.13,t.trim)}for(let T=0;T<w;T++){const S=(T+.5)/w,y=g+m*(S-.5)*M,A=x+d*(S-.5)*M;for(let R=0;R<r;R++){const L=i.g+R*a,N=R===0&&t.ground==="bottega"&&M>12,C=R===0&&E&&T===b&&!N,D=R===0&&t.ground==="archi"||R===r-1&&t.top==="loggia";if(C){const G=L+Math.min(2.35,a*.86);Me(c,y,A,m,d,v,_,L+.08,G,.72,.02,.1,t.trim),Me(c,y,A,m,d,v,_,L+.12,G-.08,.52,.08,.14,G_);continue}if(N){const G=Math.min(1.35,t.bay*.36),st=L+a*.82;if(Me(c,y,A,m,d,v,_,L+.02,st,G+.14,.02,.09,t.stone),Me(c,y,A,m,d,v,_,L+.1,st-.1,G,.09,.16,t.shop||V_),t.awning){const et=st-.08;Me(c,y,A,m,d,v,_,et,et+.07,G*.95,.1,1.2,16052454);for(const V of[-.62,-.2,.22,.64])Me(c,y+m*V*G,A+d*V*G,m,d,v,_,et+.02,et+.09,.07,.12,1.18,12866362)}continue}const B=L+a*.28,O=L+a*(D?.86:.74),q=Math.min(D?.72:.58,t.bay*.22);if(D)fu(c,y,A,m,d,v,_,B-.06,O+.08,q*2+.22,t.trim,.02,.07),fu(c,y,A,m,d,v,_,B,O,q*2,hu,.07,.12);else if(t.ante==="chiuse"&&t.shutter){Me(c,y,A,m,d,v,_,B-.08,O+.08,q+.1,.02,.07,t.trim),Me(c,y,A,m,d,v,_,B,O,q,.07,.13,t.shutter);const G=O-B;for(let st=1;st<=3;st++){const et=B+G*st/4;Me(c,y,A,m,d,v,_,et-.02,et+.02,q*.92,.12,.155,2366486)}}else Me(c,y,A,m,d,v,_,B-.08,O+.08,q+.1,.02,.07,t.trim),Me(c,y,A,m,d,v,_,B,O,q,.07,.12,hu),t.shutter&&(Me(c,y-m*(q+.1),A-d*(q+.1),m,d,v,_,B,O,.07,.08,.14,t.shutter),Me(c,y+m*(q+.1),A+d*(q+.1),m,d,v,_,B,O,.07,.08,.14,t.shutter));const Z=R>0&&!(R===r-1&&t.top==="loggia")&&(t.balcony==="every"||t.balcony==="alt"&&T%2===0||t.balcony==="center"&&E&&T===b&&R===1);if(t.belvedere&&u===l&&R===r-1&&T===0){const G=Math.max(3,Math.round(M/.85));for(let st=0;st<=G;st++){const et=st/G;Me(c,g+m*(et-.5)*M,x+d*(et-.5)*M,m,d,v,_,s+.02,s+.78,.055,.02,.12,t.trim)}Me(c,g,x,m,d,v,_,s+.7,s+.82,M/2,.02,.14,t.trim)}if(Z){const G=t.balcony==="every"?Math.min(t.bay*.42,1.6):q+.28;Me(c,y,A,m,d,v,_,L-.02,L+.08,G,.06,.78,t.stone),Me(c,y,A,m,d,v,_,L+.82,L+.9,G,.68,.76,uu);for(const st of[-1,1])Me(c,y+m*st*(G-.05),A+d*st*(G-.05),m,d,v,_,L+.08,L+.9,.025,.66,.74,uu)}}}}if(i.x)for(const[u,p,g,x]of i.x){const m=i.roof?f:s;if(u===0)Me(c,p,g,1,0,0,1,m,m+(x||2.4),1.3,-1.5,1.5,t.wall);else if(u===1){const d=new he(.55,.55,x||1.2,12);d.translate(p,m+(x||1.2)/2,g),c.add(d,14212578)}}return c.mesh(t.name)}function J_(i){const t=new re;t.name="plaza-buildings";for(const e of i.buildings){if(!bl[e.id])continue;const n=K_(e);n&&t.add(n)}return t}const Q_=new Set(["B006","B007","B009","B010"]);function gr(i){let t=Math.imul(i,2654435761)>>>0;return t^=t>>>15,t=Math.imul(t,2246822519)>>>0,t^=t>>>13,(t>>>0)/4294967296}class Na{constructor(){this.p=[],this.u=[],this.c=[],this.r=[]}tri(t,e,n,o,s,r,a){if(this.p.push(...t,...e,...n),o&&this.u.push(...o,...s,...r),a)for(let c=0;c<3;c++)this.c.push(a.r,a.g,a.b)}geometry(){if(!this.p.length)return null;const t=new Kt;return t.setAttribute("position",new Dt(this.p,3)),this.u.length&&t.setAttribute("uv",new Dt(this.u,2)),this.c.length&&t.setAttribute("color",new Dt(this.c,3)),this.r.length&&t.setAttribute("ruv",new Dt(this.r,3)),t.computeVertexNormals(),t.computeBoundingSphere(),t}}function t1({model:i,orthoMeta:t,textures:e,facadeMats:n}){const[o,s]=i.origin,r=new re;r.name="buildings";const a=n.map(()=>new Na),c=Rf,l=new Na,h=new Map,f=t.tiles.filter(w=>w.level==="core"),u=t.tiles.find(w=>w.level==="base"),p=new Rt,g=[],x=[],m=[];function d(w,b){const E=w+o,T=s-b;return f.find(S=>E>=S.xmin&&E<S.xmax&&T>=S.ymin&&T<S.ymax)||u}const v=(w,b,E)=>[(b+o-w.xmin)/(w.xmax-w.xmin),(s-E-w.ymin)/(w.ymax-w.ymin)],_=w=>(h.has(w.file)||h.set(w.file,new Na),h.get(w.file));for(const w of i.buildings){const b=[];for(let G=0;G<w.r.length;G+=2)b.push([w.r[G],w.r[G+1]]);if(b.length<3)continue;const E=w.g+w.h;if(w.lm||W_(w.id)){g.push({pts:b,top:E,minX:Math.min(...b.map(G=>G[0])),maxX:Math.max(...b.map(G=>G[0])),minZ:Math.min(...b.map(G=>G[1])),maxZ:Math.max(...b.map(G=>G[1])),canopy:!1});continue}const T=Math.min(w.b,w.g)-.4;p.setRGB(w.c[0]/255,w.c[1]/255,w.c[2]/255,pe);const S=!Q_.has(w.t)&&w.h>=2.6,y=S?a[Math.floor(gr(w.id)*c)]:l,A=S?a[c+Math.floor(gr(w.id*5+2)*Pf)]:l;let R=0,L=0;for(const[G,st]of b)R+=G,L+=st;R/=b.length,L/=b.length;const N=d(R,L),C=_(N),D=w.t==="B007",B=gr(w.id*3+1),O=B<.15?0:B<.65?1:2;let q=0;for(let G=0;G<b.length;G++){const[st,et]=b[G],[V,Y]=b[(G+1)%b.length],at=Math.hypot(V-st,Y-et);if(at<.05)continue;if(D){const Q=E-.25;l.tri([st,Q,et],[V,Q,Y],[V,E,Y],null,null,null,p),l.tri([st,Q,et],[V,E,Y],[st,E,et],null,null,null,p);continue}const rt=q,pt=q/pr,vt=(q+at)/pr;q+=at;const yt=w.e?w.e[G]:30;if(S&&yt>=4&&w.f>=2&&at>=2.5&&O){const Q=(V-st)/at,z=(Y-et)/at;let ft=-z,F=Q;o1(b,(st+V)/2+ft*.1,(et+Y)/2+F*.1)&&(ft=-ft,F=-F);for(let W=Math.ceil(rt/pr-.5);;W++){const H=(W+.5)*pr-rt;if(H>at-.9)break;if(!(H<.9||O===2&&W%2))for(let tt=1;tt<w.f;tt++){const nt=w.g+tt*mr;if(nt+1.2>E)break;m.push({x:st+Q*H+ft*.45,z:et+z*H+F*.45,y:nt,ang:Math.atan2(ft,F)})}}}if(yt<.4&&S){l.tri([st,T,et],[V,T,Y],[V,E,Y],null,null,null,p),l.tri([st,T,et],[V,E,Y],[st,E,et],null,null,null,p);continue}const ht=Math.min(E,w.g+mr),X=(Q,z,ft)=>{if(ft-z<.02)return;const F=(z-w.g)/mr,W=(ft-w.g)/mr,H=[st,z,et],tt=[V,z,Y],nt=[V,ft,Y],I=[st,ft,et];Q.tri(H,tt,nt,[pt,F],[vt,F],[vt,W],p),Q.tri(H,nt,I,[pt,F],[vt,W],[pt,W],p)};X(A,T,ht),X(y,ht,E)}let Z=E;if(w.roof){const G=w.roof.v,st=w.roof.tan,et=V=>[G[V*3],E+G[V*3+2]*st,G[V*3+1]];for(const V of w.roof.f){if(V.length<3)continue;const Y=V.map(et);let at;try{at=Hn.triangulateShape(Y.map(pt=>new gt(pt[0],pt[2])),[])}catch{continue}const rt=e1(Y);for(const[pt,vt,yt]of at){let ht=Y[pt],X=Y[vt],Q=Y[yt];(X[2]-ht[2])*(Q[0]-ht[0])-(X[0]-ht[0])*(Q[2]-ht[2])<0&&([X,Q]=[Q,X]),C.tri(ht,X,Q,v(N,ht[0],ht[2]),v(N,X[0],X[2]),v(N,Q[0],Q[2]));for(const z of[ht,X,Q])C.r.push(...rt?[rt.eu(z),rt.sv(z),1+gr(w.id*7+3)*.999]:[0,0,0]);Z=Math.max(Z,ht[1],X[1],Q[1])}}}else{const G=b.map(([et,V])=>new gt(et,V));let st;try{st=Hn.triangulateShape(G,[])}catch{st=[]}for(const[et,V,Y]of st){const at=[b[et][0],E,b[et][1]],rt=[b[V][0],E,b[V][1]],pt=[b[Y][0],E,b[Y][1]];C.tri(at,rt,pt,v(N,at[0],at[2]),v(N,rt[0],rt[2]),v(N,pt[0],pt[2])),C.r.push(0,0,0,0,0,0,0,0,0)}if(w.pp){const et=p.clone().multiplyScalar(.92);for(let V=0;V<b.length;V++){const[Y,at]=b[V],[rt,pt]=b[(V+1)%b.length];l.tri([Y,E,at],[rt,E,pt],[rt,E+1,pt],null,null,null,et),l.tri([Y,E,at],[rt,E+1,pt],[Y,E+1,at],null,null,null,et)}Z=E+1}}if(w.x){let G=0,st=0;for(let et=0;et<b.length;et++){const[V,Y]=b[et],[at,rt]=b[(et+1)%b.length],pt=Math.hypot(at-V,rt-Y);pt>st&&(st=pt,G=Math.atan2(at-V,rt-Y))}for(const[et,V,Y,at]of w.x)x.push({type:et,x:V,z:Y,y:w.roof?Z:E,h:at,ang:G,col:p.clone()})}g.push({pts:b,top:Z,minX:Math.min(...b.map(G=>G[0])),maxX:Math.max(...b.map(G=>G[0])),minZ:Math.min(...b.map(G=>G[1])),maxZ:Math.max(...b.map(G=>G[1])),canopy:D})}a.forEach((w,b)=>{const E=w.geometry();if(E){const T=new Ft(E,n[b]);T.castShadow=T.receiveShadow=!0,r.add(T)}});const M=l.geometry();if(M){const w=new Ft(M,new Ot({vertexColors:!0,side:le}));w.castShadow=w.receiveShadow=!0,r.add(w)}for(const[w,b]of h){const E=b.geometry();if(!E)continue;const T=new Ft(E,wf(e.get(w),{roof:!0}));T.receiveShadow=!0,r.add(T)}return r.add(i1(x)),r.add(s1(m)),{group:r,footprints:g}}function e1(i){const t=new k;for(let o=1;o+1<i.length&&t.lengthSq()<1e-6;o++){const s=new k(...i[0]),r=new k(...i[o]),a=new k(...i[o+1]);t.crossVectors(r.sub(s),a.sub(s))}if(t.lengthSq()<1e-6||(t.normalize(),t.y<0&&t.negate(),t.y>.995))return null;const e=new k(0,1,0).cross(t).normalize(),n=new k().crossVectors(t,e).normalize();return{eu:o=>o[0]*e.x+o[1]*e.y+o[2]*e.z,sv:o=>o[0]*n.x+o[1]*n.y+o[2]*n.z}}function n1(i){const e=new Map;for(const n of i)if(!n.canopy)for(let o=Math.floor(n.minX/16);o<=Math.floor(n.maxX/16);o++)for(let s=Math.floor(n.minZ/16);s<=Math.floor(n.maxZ/16);s++){const r=`${o},${s}`;e.has(r)||e.set(r,[]),e.get(r).push(n)}return function(o,s){for(const r of e.get(`${Math.floor(o/16)},${Math.floor(s/16)}`)||[]){if(o<r.minX||o>r.maxX||s<r.minZ||s>r.maxZ)continue;let a=!1;const c=r.pts;for(let l=0,h=c.length-1;l<c.length;h=l++)c[l][1]>s!=c[h][1]>s&&o<(c[h][0]-c[l][0])*(s-c[l][1])/(c[h][1]-c[l][1])+c[l][0]&&(a=!a);if(a)return!0}return!1}}function i1(i){const t=new re;t.name="roof-items";const e=[0,1,2,3].map(g=>i.filter(x=>x.type===g)),n=new Wt,o=new Ae,s=new k,r=new k,a=new k(0,1,0),c=(g,x,m,d,v)=>{if(!m.length)return;const _=new rn(g,x,m.length);m.forEach((M,w)=>{d(M),_.setMatrixAt(w,n),v&&_.setColorAt(w,v(M))}),_.castShadow=_.receiveShadow=!0,t.add(_)},l=new kt(1,1,1);l.translate(0,.5,0),c(l,new Ot,e[0],g=>{o.setFromAxisAngle(a,g.ang),n.compose(r.set(g.x,g.y,g.z),o,s.set(2.6,g.h||2.4,3))},g=>g.col);const h=new he(.55,.55,1.2,12);h.translate(0,.6,0);const f=[new Rt(15263970),new Rt(3829416),new Rt(2829099)];c(h,new Ot,e[1],g=>{o.setFromAxisAngle(a,0),n.compose(r.set(g.x,g.y,g.z),o,s.set(1,1,1))},g=>f[Math.abs(Math.round(g.x*7+g.z*13))%f.length]);const u=new kt(2,.08,1.2);u.rotateX(-.7),u.translate(0,.7,0),c(u,new Ot({color:1911354}),e[2],g=>{o.setFromAxisAngle(a,0),n.compose(r.set(g.x,g.y,g.z),o,s.set(1,1,1))});const p=new he(.03,.03,3,4);return p.translate(0,1.5,0),c(p,new Ot({color:7829367}),e[3],g=>{n.compose(r.set(g.x,g.y,g.z),o.identity(),s.set(1,1,1))}),t}function o1(i,t,e){let n=!1;for(let o=0,s=i.length-1;o<i.length;s=o++)i[o][1]>e!=i[s][1]>e&&t<(i[s][0]-i[o][0])*(e-i[o][1])/(i[s][1]-i[o][1])+i[o][0]&&(n=!n);return n}function s1(i){const t=new re;if(t.name="balconies",!i.length)return t;const e=new kt(1.7,.12,.9);e.translate(0,.06,0);const n=new kt(1.7,.95,.04);n.translate(0,.6,.43);const o=new kt(.04,.95,.9);o.translate(-.83,.6,0);const s=o.clone();s.translate(1.66,0,0);const r=new Ot({color:14078664}),a=document.createElement("canvas");a.width=128,a.height=64;const c=a.getContext("2d");c.fillStyle="#fff",c.fillRect(0,0,128,6),c.fillRect(0,56,128,4);for(let m=1;m<128;m+=8)c.fillRect(m,0,2,60);const l=new Vn(a);l.colorSpace=pe;const h=new Ot({color:3817020,map:l,alphaTest:.5,side:le}),f=new Wt,u=new Ae,p=new k(1,1,1),g=new k,x=new k(0,1,0);for(const[m,d]of[[e,r],[n,h],[o,h],[s,h]]){const v=new rn(m,d,i.length);i.forEach((_,M)=>{u.setFromAxisAngle(x,_.ang),f.compose(g.set(_.x,_.y,_.z),u,p),v.setMatrixAt(M,f)}),v.castShadow=!0,v.receiveShadow=!0,t.add(v)}return t}const An=32.95,Gc=-8.54,Vc=-31.15,Nf=.275,zf=-8.445,Sl=-.2855,wl=-.9584,Of=-.9584,Ff=.2855,tn=2,en=29.2,dn=11.4;function Bf(i,t){const e=i-Nf,n=t-zf;return[e*Of+n*Ff,e*Sl+n*wl]}function Xe(i,t){return[Nf+Of*i+Sl*t,zf+Ff*i+wl*t]}function kf(i,t){const[e,n]=Bf(i,t);if(e>-28&&e<30&&n>.2&&n<30.4)return!0;const o=e-tn,s=n-en;return s>=-.5&&o*o+s*s<=dn*dn}function r1(i,t){const[e,n]=Bf(i,t);if(e>-24&&e<28&&n>2&&n<32)return!0;const o=e-tn,s=n-en;return s>-1&&o*o+s*s<dn*dn}function a1(i,t){return!kf(i,t)}function c1(i,t,e){return kf(i,t)&&Math.hypot(i-Gc,t-Vc)>3.15?Math.max(e,An):e}function Qn(i,t){const e=new Ot({color:i,side:le,...t});return e.polygonOffset=!0,e.polygonOffsetFactor=-2,e.polygonOffsetUnits=-2,e}function l1(){const e=.017578125,n=document.createElement("canvas");n.width=n.height=1024;const o=n.getContext("2d"),s=1024/2,r=1024/2,a=l=>l/e;o.beginPath(),o.arc(s,r,a(4.7),0,Math.PI*2),o.fillStyle="#d9d2c4",o.fill(),o.beginPath(),o.arc(s,r,a(4.55),0,Math.PI*2),o.arc(s,r,a(3.7),0,Math.PI*2,!0),o.fillStyle="#b85a3c",o.fill();for(let l=0;l<48;l++){const h=l/48*Math.PI*2,f=(l+.86)/48*Math.PI*2,u=Math.abs(Math.sin(l*2.1));o.fillStyle=`rgb(${168+u*40},${82+u*28},${58+u*16})`,o.beginPath(),o.moveTo(s+Math.sin(h)*a(3.75),r+Math.cos(h)*a(3.75)),o.lineTo(s+Math.sin(h)*a(4.5),r+Math.cos(h)*a(4.5)),o.lineTo(s+Math.sin(f)*a(4.5),r+Math.cos(f)*a(4.5)),o.lineTo(s+Math.sin(f)*a(3.75),r+Math.cos(f)*a(3.75)),o.fill()}o.beginPath(),o.arc(s,r,a(3.72),0,Math.PI*2),o.arc(s,r,a(3.45),0,Math.PI*2,!0),o.fillStyle="#f3eee4",o.fill(),o.globalCompositeOperation="destination-out",o.beginPath(),o.arc(s,r,a(3.4),0,Math.PI*2),o.fill();const c=new Vn(n);return c.colorSpace=pe,c.anisotropy=8,c}const h1=[[-21.3,17.3],[-10.6,17.3],[16.1,17.3],[26.4,17.3]];function Xi(i){const t=Math.sin(i*127.1)*43758.5453;return t-Math.floor(t)}function u1(){const s=Math.ceil(2016),r=Math.ceil((27.5-12)*36),a=document.createElement("canvas");a.width=s,a.height=r;const c=a.getContext("2d"),l=M=>(M- -27)*36,h=M=>(M-12)*36,f=Math.ceil(.5*36);c.fillStyle="#d4cec1",c.fillRect(0,h(12.2),s,f);for(let M=-23.975;M<29;M+=5.35)c.fillRect(Math.round(l(M))-Math.floor(f/2),0,f,r);for(let M=15;M<27.5;M+=4.6)c.fillRect(0,Math.round(h(M))-Math.floor(f/2),s,f);const u=1.97,p=24.28,g=5.15*5.15,x=1,m=.5,d=4.5,v=2.7;for(const[M,w]of h1)for(let b=-v;b<=v+1e-9;b+=x)for(let E=-d;E<=d+1e-9;E+=x){if(Math.abs(E)/d+Math.abs(b)/v>.93)continue;const T=M+E,S=w+b,y=T-u,A=S-p;if(y*y+A*A<g)continue;const R=Math.round(E/x)+Math.round(b/x)&1;c.fillStyle=R?"#e4dccf":"#cec5b6",c.beginPath(),c.moveTo(l(T),h(S-m)),c.lineTo(l(T+m),h(S)),c.lineTo(l(T),h(S+m)),c.lineTo(l(T-m),h(S)),c.closePath(),c.fill()}const _=new Vn(a);return _.colorSpace=pe,_.anisotropy=8,{tex:_,u0:-27,u1:29,w0:12,w1:27.5}}function f1(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle="#cbb67a",t.fillRect(0,0,512,512);for(let n=0;n<90;n++){const o=Xi(n*3.1);t.fillStyle=o>.5?"#b6a15e":"#d8c48a",t.beginPath(),t.ellipse(Xi(n+1)*512,Xi(n+2)*512,18+o*70,10+Xi(n+4)*28,o*3,0,Math.PI*2),t.fill()}for(let n=0;n<2500;n++){const o=Xi(n*1.7+9);t.strokeStyle=`rgb(${120+o*70},${130+o*50},${50+o*30})`,t.lineWidth=1;const s=Xi(n+20)*512,r=Xi(n+40)*512;t.beginPath(),t.moveTo(s,r),t.lineTo(s+(o-.5)*8,r-4-o*7),t.stroke()}const e=new Vn(i);return e.wrapS=e.wrapT=io,e.colorSpace=pe,e.anisotropy=8,e}function d1(i,t){const e=new re;e.name="piazza-ve3";const n=An,o=Qn(13616822),s=Qn(5208632),r=Qn(12870202),a=Qn(13928794),c=Qn(15196886),l=n+.04,h=(C,D,B,O,q,Z)=>{const G=Xe(C,D),st=Xe(B,D),et=Xe(B,O),V=Xe(C,O),Y=new Kt;Y.setAttribute("position",new Dt([G[0],q,G[1],st[0],q,st[1],et[0],q,et[1],G[0],q,G[1],et[0],q,et[1],V[0],q,V[1]],3)),Y.computeVertexNormals();const at=new Ft(Y,Z);at.receiveShadow=!0,e.add(at)};{const C=new Dn(18,18);C.rotateX(-Math.PI/2);const D=new Ft(C,new Ot({map:l1(),transparent:!0,alphaTest:.35,side:le,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));D.position.set(Gc,n+.05,Vc),D.receiveShadow=!0,e.add(D)}h(-29,-1,31,34,n+.015,Qn(9062974)),h(-28,.35,30,12.15,l,Qn(8816780));{const{tex:C,u0:D,u1:B,w0:O,w1:q}=u1(),Z=Xe(D,O),G=Xe(B,O),st=Xe(B,q),et=Xe(D,q),V=l+.04,Y=new Kt;Y.setAttribute("position",new Dt([Z[0],V,Z[1],G[0],V,G[1],st[0],V,st[1],Z[0],V,Z[1],st[0],V,st[1],et[0],V,et[1]],3)),Y.setAttribute("uv",new Dt([0,0,1,0,1,1,0,0,1,1,0,1],2)),Y.computeVertexNormals();const at=new Ft(Y,new Ot({map:C,transparent:!0,alphaTest:.05,side:le,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));at.receiveShadow=!0,e.add(at)}const f=f1(),u=new Ot({map:f,side:le});u.polygonOffset=!0,u.polygonOffsetFactor=-2,u.polygonOffsetUnits=-2;{const C=l+.035,[D,B]=Xe(tn,en),O=96,q=[],Z=[];for(let rt=0;rt<O;rt++){const pt=-Math.PI/2+rt/O*Math.PI,vt=-Math.PI/2+(rt+1)/O*Math.PI,yt=Xe(tn+Math.sin(pt)*dn,en+Math.cos(pt)*dn),ht=Xe(tn+Math.sin(vt)*dn,en+Math.cos(vt)*dn);q.push(D,C,B,yt[0],C,yt[1],ht[0],C,ht[1]),Z.push(.5,.15,.5+Math.sin(pt)*.45,.15+Math.cos(pt)*.7,.5+Math.sin(vt)*.45,.15+Math.cos(vt)*.7)}const G=new Kt;G.setAttribute("position",new Dt(q,3)),G.setAttribute("uv",new Dt(Z,2)),G.computeVertexNormals();const st=new Ft(G,u);st.receiveShadow=!0,e.add(st);const et=[],V=[];for(let rt=0;rt<O;rt++){const pt=-Math.PI/2+rt/O*Math.PI,vt=-Math.PI/2+(rt+1)/O*Math.PI,yt=H=>Xe(tn+Math.sin(H)*dn,en+Math.cos(H)*dn),ht=H=>Xe(tn+Math.sin(H)*(dn+2.6),en+Math.cos(H)*(dn+2.6)),X=yt(pt),Q=yt(vt),z=ht(pt),ft=ht(vt),F=Math.min(n,i(z[0],z[1])+.12),W=Math.min(n,i(ft[0],ft[1])+.12);et.push(X[0],C,X[1],z[0],F,z[1],ft[0],W,ft[1],X[0],C,X[1],ft[0],W,ft[1],Q[0],C,Q[1]),V.push(0,0,1,0,1,1,0,0,1,1,0,1)}const Y=new Kt;Y.setAttribute("position",new Dt(et,3)),Y.setAttribute("uv",new Dt(V,2)),Y.computeVertexNormals();const at=new Ft(Y,u);at.receiveShadow=!0,e.add(at)}const p=new be(1,18,14),g=[];for(let C=0;C<9;C++){const D=-Math.PI/2+(C+.35)/9*Math.PI,B=dn-.35;g.push([tn+Math.sin(D)*B,en+Math.cos(D)*B,.42+C%3*.16])}g.push([tn-2.4,en+3.6,.55],[tn+3.1,en+5.2,.48],[tn+.4,en+7.8,.7],[tn-5.2,en+6.4,.4]);const x=[7174718,9077832,6187576,8227402];g.forEach(([C,D,B],O)=>{const[q,Z]=Xe(C,D),G=new Ft(p,Qn(x[O%x.length]));G.scale.set(B,B*.82,B),G.position.set(q,n+B*.7,Z),G.castShadow=!0,e.add(G)});const m=new k(0,1,0),d=Math.atan2(Sl,wl),v=new kt(1.7,.1,.46),_=new kt(.16,.36,.38);for(const[C,D]of[[tn-8.4,en-1.1],[tn+8.6,en-1.1]]){const[B,O]=Xe(C,D),q=new Ae().setFromAxisAngle(m,d);for(const[Z,G,st,et,V]of[[v,c,.4,0,0],[_,o,.18,-.62,0],[_,o,.18,.62,0]]){const Y=new Ft(Z,G);Y.position.set(et,st,V).applyQuaternion(q),Y.position.add(new k(B,n,O)),Y.quaternion.copy(q),Y.castShadow=!0,e.add(Y)}}const M=new Ot({color:16774364,emissive:16769192,emissiveIntensity:.18}),w=Qn(2764336);for(const[C,D]of[[-24,8.2],[26,8.2],[-20,26.5]]){const[B,O]=Xe(C,D),q=new Ae().setFromAxisAngle(m,d),Z=(G,st,et,V,Y)=>{const at=new Ft(G,st);at.position.set(et,V,Y).applyQuaternion(q),at.position.add(new k(B,n,O)),at.quaternion.copy(q),at.castShadow=!0,e.add(at)};Z(new he(.06,.09,4.2,8),w,0,2.1,0),Z(new kt(1.35,.05,.05),w,0,4.15,0);for(const G of[-.62,.62])Z(new be(.2,12,10),M,G,4.25,0)}const b=(C,D,B,O,q)=>{if(!B.length)return;const Z=new rn(C,D,B.length/O),G=new Wt,st=new Ae,et=new k,V=new k(1,1,1);for(let Y=0;Y<B.length;Y+=O)q(B,Y,et,st,V),G.compose(et,st,V),Z.setMatrixAt(Y/O,G);Z.castShadow=Z.receiveShadow=!0,e.add(Z)},E=[],T=(C,D,B,O,q)=>{const Z=B-C,G=O-D,st=Math.hypot(Z,G);let et=-G/st,V=Z/st;const Y=(C+B)/2,at=(D+O)/2;(Gc-Y)*et+(Vc-at)*V<0&&(et=-et,V=-V);const rt=Math.floor(st/q);for(let pt=1;pt<rt;pt++){const vt=pt/rt;E.push([C+Z*vt+et*1.25,D+G*vt+V*1.25])}};T(-21.7,-61.4,-37.6,-56,1.65),T(18.9,-74.6,-12.4,-64.2,2.4);const S=E.flat(),y=new he(.32,.22,.4,10),A=new he(.36,.34,.08,10),R=new kt(.06,.015,.7);b(y,r,S,2,(C,D,B)=>{B.set(C[D],i(C[D],C[D+1])+.42,C[D+1])}),b(A,a,S,2,(C,D,B)=>{B.set(C[D],i(C[D],C[D+1])+.64,C[D+1])});const L=[];for(const[C,D]of E)for(let B=0;B<7;B++)L.push(C,D,B/7*Math.PI*2);const N=new Ln(-.7,0,0);return b(R,s,L,3,(C,D,B,O)=>{const q=C[D],Z=C[D+1],G=C[D+2];B.set(q+Math.sin(G)*.22,i(q,Z)+.88,Z+Math.cos(G)*.22),N.y=G,O.setFromEuler(N)}),e.userData.night=C=>{M.emissiveIntensity=.15+C*1.6},e}const du=400,p1=1400;function m1(i){const t=(o,s)=>{const r=new Rt(s),a=o.attributes.position.count,c=new Float32Array(a*3);for(let l=0;l<a;l++)c.set([r.r,r.g,r.b],l*3);return o.setAttribute("color",new Ee(c,3)),o.toNonIndexed?o.toNonIndexed():o},e=(o,s,r=5981746)=>{const a=new he(s*.7,s,o,5,1,!0);return a.translate(0,o/2,0),t(a,r)},n=(o,s,r,a,c,l=0)=>{const h=new Yr(1,l);return h.scale(o,s,r),h.translate(0,a,0),t(h,c)};switch(i){case 1:return je([e(.72,.035,6965812),n(1,.16,1,.8,3099178),n(.7,.12,.7,.9,3824179)]);case 2:return je([e(.4,.06,7035464),n(1,.38,.85,.64,8227428)]);case 3:return je([e(.25,.05),n(1,.5,1,.55,2903845)]);case 4:return je([e(.9,.03,9073240),n(1,.1,1,.92,4612399)]);case 5:return je([n(1,.6,.9,.45,5599546)]);default:return je([e(.45,.05),n(1,.45,1,.64,3889708)])}}function g1(i){const t=new re;t.name="trees";const e=Math.floor(i.length/6);if(!e)return{group:t,update(){}};const n=[0,1,2,3,4,5].map(m1),o=new Ot({vertexColors:!0,flatShading:!0}),s=new Map;for(let g=0;g<e;g++){const x=i[g*6],m=i[g*6+1];if(r1(x,m))continue;const d=`${Math.floor(x/du)},${Math.floor(m/du)},${i[g*6+5]}`;s.has(d)||s.set(d,[]),s.get(d).push(g)}const r=new Wt,a=new Ae,c=new k,l=new k,h=new k(0,1,0),f=new Rt,u=[];for(const[g,x]of s){const m=+g.split(",")[2],d=new rn(n[m],o,x.length);x.forEach((v,_)=>{const M=i[v*6],w=i[v*6+1],b=i[v*6+2],E=m===5?i[v*6+3]:Math.max(2.5,i[v*6+3]),T=i[v*6+4];a.setFromAxisAngle(h,v*2.39996%(Math.PI*2)),r.compose(l.set(M,b,w),a,c.set(T,E,T)),d.setMatrixAt(_,r);const S=Math.abs(Math.sin(v*12.9898)*43758.5453)%1;d.setColorAt(_,f.setScalar(.85+S*.3))}),d.computeBoundingSphere(),d.castShadow=m!==5,d.userData.far=m===5?450:p1,u.push(d),t.add(d)}function p(g){for(const x of u)x.visible=x.boundingSphere.center.distanceTo(g.position)-x.boundingSphere.radius<x.userData.far}return{group:t,update:p}}function Kr(i,t,e,n=!0){const o=document.createElement("canvas");o.width=i,o.height=t,e(o.getContext("2d"),i,t);const s=new Vn(o);return n&&(s.wrapS=s.wrapT=io),s.colorSpace=pe,s.anisotropy=8,s}function El(i){let t=i;return()=>(t=t*16807%2147483647)/2147483647}function ii(i){return i.side=le,i.polygonOffset=!0,i.polygonOffsetFactor=-2,i.polygonOffsetUnits=-2,i}function x1(i){const t=[];for(const n of i||[])if(!(!n.name||!/Paolo Ricca/i.test(n.name)))for(let o=0;o<n.p.length;o+=2)t.push(n.p[o],n.p[o+1]);const e=[];for(let n=0;n+3<t.length;n+=2)e.push(t[n],t[n+1],t[n+2],t[n+3]);return e}const Rr=32,v1=`
#define HUB_N ${Rr}
float aHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float aNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(aHash(i), aHash(i + vec2(1,0)), f.x), mix(aHash(i + vec2(0,1)), aHash(i + vec2(1,1)), f.x), f.y);
}
float aFbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * aNoise(p); p *= 2.03; a *= 0.5; }
  return v;
}
float distSeg(vec2 p, vec2 a, vec2 b) {
  vec2 ab = b - a, ap = p - a;
  float t = clamp(dot(ap, ab) / max(dot(ab, ab), 1e-4), 0.0, 1.0);
  return length(ap - ab * t);
}
float hubWear(vec2 xz) {
  float d = 1e6;
  for (int i = 0; i < HUB_N; i++) {
    vec4 s = uHubSeg[i];
    float segL = length(s.zw - s.xy);
    if (segL < 0.5) continue;
    d = min(d, distSeg(xz, s.xy, s.zw));
  }
  return smoothstep(7.0, 32.0, d);
}
vec3 proceduralAsphalt(vec2 xz, float wear) {
  vec2 p = xz;
  float g0 = aFbm(p * 0.035);
  float g1 = aFbm(p * 0.11 + 17.0);
  float g2 = aFbm(p * 0.28 + 41.0);
  float micro = aNoise(p * 1.7) * 0.5 + aNoise(p * 4.2) * 0.25;
  vec3 base = vec3(0.34, 0.35, 0.36);
  base += (g0 - 0.5) * 0.05;
  base += (g1 - 0.5) * 0.035;
  float patch = smoothstep(0.42, 0.72, g1) * smoothstep(0.3, 0.8, g2);
  base = mix(base, base * vec3(0.9, 0.88, 0.86), patch * wear * 0.45);
  float crack = aFbm(p * 0.55 + vec2(g2 * 3.0));
  float crackLine = smoothstep(0.58, 0.64, crack) * smoothstep(0.72, 0.66, crack);
  crackLine += smoothstep(0.48, 0.52, abs(sin(p.x * 0.08 + p.y * 0.11 + g0 * 5.0))) * 0.28 * wear;
  base *= 1.0 - crackLine * 0.35;
  base += (micro - 0.5) * 0.025;
  float hubClean = 1.0 - wear;
  base = mix(base, base * 1.05 + 0.015, hubClean * 0.4);
  return clamp(base, 0.12, 1.0);
}`;function pu(i,t=!1){const e=x1(i),n=new Float32Array(Rr*4);let o=0;for(let r=0;r+3<e.length&&o<Rr;r+=4,o++)n[o*4]=e[r],n[o*4+1]=e[r+1],n[o*4+2]=e[r+2],n[o*4+3]=e[r+3];const s=new Ot({color:16777215,side:le,alphaToCoverage:t,transparent:t,polygonOffset:t,polygonOffsetFactor:t?-4:0,polygonOffsetUnits:t?-4:0});return s.customProgramCacheKey=()=>`asphalt-proc-v2-${t?"f":"m"}-${o}`,s.onBeforeCompile=r=>{r.uniforms.uHubSeg={value:n},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vAspPos;${t?`
attribute float aFade;
varying float vFade;`:""}`).replace("#include <project_vertex>",`#include <project_vertex>
vAspPos = (modelMatrix * vec4(transformed, 1.0)).xyz;${t?`
vFade = aFade;`:""}`);const a=`
	float wear = hubWear(vAspPos.xz);
	diffuseColor.rgb = proceduralAsphalt(vAspPos.xz, wear);
	diffuseColor.a = opacity;${t?`
	diffuseColor.a *= vFade;`:""}`;r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vAspPos;
uniform vec4 uHubSeg[${Rr}];
${t?"varying float vFade;":""}
${v1}`).replace("	#include <color_fragment>",`	#include <color_fragment>${a}`)},ii(s)}const _1=()=>Kr(256,256,(i,t,e)=>{const n=El(11);i.fillStyle="#b9b3a8",i.fillRect(0,0,t,e);const o=5,s=t/o;for(let r=0;r<o;r++)for(let a=0;a<o;a++){const c=170+n()*30;i.fillStyle=`rgb(${c},${c-5},${c-14})`,i.fillRect(r*s+1,a*s+1,s-2,s-2)}for(let r=0;r<3e3;r++)i.fillStyle=`rgba(0,0,0,${n()*.08})`,i.fillRect(n()*t,n()*e,1,1)}),M1=()=>Kr(512,512,(i,t,e)=>{const n=El(5);i.fillStyle="#5e584f",i.fillRect(0,0,t,e);const o=64,s=104;for(let r=0;r<e;r+=o){const a=r/o%2?s/2:0;for(let c=-s;c<t+s;c+=s){const l=196+n()*38,h=n()*16;i.fillStyle=`rgb(${Math.min(255,l+h*.15)},${l-8},${l-26-h})`,i.fillRect(c+a+4,r+4,s-8,o-8),i.strokeStyle=`rgba(255,250,240,${.04+n()*.05})`,i.strokeRect(c+a+4.5,r+4.5,s-9,o-9),i.strokeStyle=`rgba(70,62,52,${.12+n()*.12})`,i.beginPath(),i.moveTo(c+a+12,r+14+n()*10),i.lineTo(c+a+s-16,r+o-16),i.stroke()}}});function za(i){return Kr(512,512,(t,e,n)=>{const o=t.createImageData(e,n),s=o.data,r=64,a=32,c=l=>{const h=Math.sin(l*127.1)*43758.5453;return h-Math.floor(h)};for(let l=0;l<n;l++)for(let h=0;h<e;h++){const f=h+l,u=-h+l,p=Math.floor(u/a),g=f-(p&1)*(r/2),x=(g%r+r)%r,m=(u%a+a)%a,d=i==="brick"?5.2:3.5,v=x<d||m<d,_=c(Math.floor(g/r)*13+p*7);let M,w,b;i==="brick"?(M=168+_*48,w=86+_*28,b=62+_*16):i==="red"?(M=158+_*46,w=86+_*30,b=68+_*18):(M=208+_*34,w=190+_*28,b=162+_*20),v?(M*=.62,w*=.6,b*=.58):c(h*17+l*3)>.9&&(M*=.9,w*=.9,b*=.88);const E=(l*e+h)*4;s[E]=M,s[E+1]=w,s[E+2]=b,s[E+3]=255}t.putImageData(o,0,0)})}function y1(){return Kr(256,256,(i,t,e)=>{const n=El(9);i.fillStyle="#5d7a3e",i.fillRect(0,0,t,e);for(let o=0;o<5e3;o++){const s=n()*t,r=n()*e,a=3+n()*6,c=-Math.PI/2+(n()-.5)*1.1,l=n();i.strokeStyle=`rgb(${70+l*60},${110+l*70},${40+l*30})`,i.lineWidth=1,i.beginPath(),i.moveTo(s,r),i.lineTo(s+Math.cos(c)*a,r+Math.sin(c)*a),i.stroke()}})}function b1(i){let t=0,e=0,n=0;for(let o=0;o<i.length;o+=2){const s=i[o],r=i[o+1],a=i[(o+2)%i.length],c=i[(o+3)%i.length],l=s*c-a*r;t+=l,e+=(s+a)*l,n+=(r+c)*l}return t*=.5,Math.abs(t)<.001?{x:i[0],z:i[1],a:0}:{x:e/(6*t),z:n/(6*t),a:Math.abs(t)}}function mu(i,t){return t<-4&&t>-68&&i>-50&&i<36&&Math.hypot(i+12,t+36)<42}function S1(i,t,e){return mu(i,t)&&e>400?"ve3":mu(i,t)?"brick":t<-8&&t>-62&&i>-198&&i<-120&&Math.hypot(i+156,t+32)<42?e>400?"garden":"red":t>16&&t<93&&i>-262&&i<-168&&Math.hypot(i+224,t-58)<78?"drive":Math.hypot(i+212,t-112)<28?"herring":"other"}function w1(i){const t={herring:[],drive:[],garden:[],red:[],other:[],ve3:[],brick:[]};for(const e of i||[]){const n=b1(e[0]);t[S1(n.x,n.z,n.a)].push(e)}return t}class un{constructor(){this.p=[],this.u=[]}quad(t,e,n,o,s,r,a,c){this.p.push(...t,...e,...n,...t,...n,...o),this.u.push(...s,...r,...a,...s,...a,...c)}tri(t,e,n,o,s,r){this.p.push(...t,...e,...n),this.u.push(...o,...s,...r)}mesh(t,e=0){if(!this.p.length)return null;const n=new Kt;n.setAttribute("position",new Dt(this.p,3)),n.setAttribute("uv",new Dt(this.u,2)),n.computeVertexNormals();const o=new Ft(n,t);return o.receiveShadow=!0,o.renderOrder=e,o}}class qi{constructor(){this.p=[],this.u=[],this.a=[]}quad(t,e,n,o,s,r,a,c,l,h,f,u){this.p.push(...t,...e,...n,...t,...n,...o),this.u.push(...s,...r,...a,...s,...a,...c),this.a.push(l,h,f,l,f,u)}tri(t,e,n,o,s,r,a,c,l){this.p.push(...t,...e,...n),this.u.push(...o,...s,...r),this.a.push(a,c,l)}mesh(t,e=0){if(!this.p.length)return null;const n=new Kt;n.setAttribute("position",new Dt(this.p,3)),n.setAttribute("uv",new Dt(this.u,2)),n.setAttribute("aFade",new Dt(this.a,1)),n.computeVertexNormals();const o=new Ft(n,t);return o.receiveShadow=!0,o.renderOrder=e,o}}function Ti(i){this.rings=[],this.grid=new Map,this.CELL=48;for(const t of i||[])for(const e of t){if(!e||e.length<6)continue;let n=1/0,o=-1/0,s=1/0,r=-1/0;for(let c=0;c<e.length;c+=2)n=Math.min(n,e[c]),o=Math.max(o,e[c]),s=Math.min(s,e[c+1]),r=Math.max(r,e[c+1]);const a=this.rings.length;this.rings.push(e);for(let c=Math.floor(n/this.CELL);c<=Math.floor(o/this.CELL);c++)for(let l=Math.floor(s/this.CELL);l<=Math.floor(r/this.CELL);l++){const h=`${c},${l}`;this.grid.has(h)||this.grid.set(h,[]),this.grid.get(h).push(a)}}}Ti.prototype.contains=function(i,t){const e=this.grid.get(`${Math.floor(i/this.CELL)},${Math.floor(t/this.CELL)}`);if(!e)return!1;let n=!1;for(const o of e){const s=this.rings[o];for(let r=0,a=s.length-2;r<s.length;a=r,r+=2){const c=s[r+1],l=s[a+1];c>t!=l>t&&i<(s[a]-s[r])*(t-c)/(l-c)+s[r]&&(n=!n)}}return n};const vn=.85;function Ao(i,t,e,n,o,s,r,a,c,l,h){if(!i?.length)return;const f=new Ti(i),u=(g,x,m,d)=>Math.abs(g-m)<.01&&Math.abs(g/l-Math.round(g/l))<1e-4||Math.abs(x-d)<.01&&Math.abs(x/l-Math.round(x/l))<1e-4,p=(g,x,m)=>[g,o(g,x)+m,x];for(const g of i)for(const x of g){const m=x.length>>1;if(m<3)continue;const d=[];for(let v=0;v<m;v++){const _=(v+1)%m,M=x[v*2],w=x[v*2+1],b=x[_*2],E=x[_*2+1],T={x0:M,z0:w,x1:b,z1:E,mode:"skip",ox:0,oz:0};d.push(T);const S=Math.hypot(b-M,E-w);if(S<.08||u(M,w,b,E))continue;const y=-(E-w)/S,A=(b-M)/S,R=(M+b)/2,L=(w+E)/2;let N=!1;for(const D of[1,-1])if(!f.contains(R+y*D*.35,L+A*D*.35)){T.ox=y*D,T.oz=A*D,N=!0;break}if(!N||s(R+T.ox*.55,L+T.oz*.55))continue;let C=null;for(const D of r)if(D.index.contains(R+T.ox*.7,L+T.oz*.7)){C=D.kind;break}if(C){h&&C==="asphalt"&&(T.mode="curb");continue}T.mode="skirt"}for(const v of d){const _=Math.hypot(v.x1-v.x0,v.z1-v.z0),M=Math.max(1,Math.ceil(_/Xo));for(let w=0;w<M;w++){const b=v.x0+(v.x1-v.x0)*w/M,E=v.z0+(v.z1-v.z0)*w/M,T=v.x0+(v.x1-v.x0)*(w+1)/M,S=v.z0+(v.z1-v.z0)*(w+1)/M;if(v.mode==="skirt"){const y=b+v.ox*vn,A=E+v.oz*vn,R=T+v.ox*vn,L=S+v.oz*vn,N=(C,D)=>[C/n,D/n];a.quad(p(b,E,t),p(T,S,t),p(R,L,e),p(y,A,e),N(b,E),N(T,S),N(R,L),N(y,A),1,1,0,0)}else if(v.mode==="curb"){const y=o(b,E)+e,A=o(T,S)+e,R=t-e;c.quad([b,y,E],[T,A,S],[T,A+R,S],[b,y+R,E],[0,0],[1,0],[1,1],[0,1])}}}for(let v=0;v<m;v++){const _=d[(v-1+m)%m],M=d[v];if(_.mode!=="skirt"||M.mode!=="skirt")continue;const w=M.x0,b=M.z0,E=w+_.ox*vn,T=b+_.oz*vn,S=w+M.ox*vn,y=b+M.oz*vn;if(Math.hypot(E-S,T-y)<.04)continue;const A=(R,L)=>[R/n,L/n];a.tri(p(w,b,t),p(E,T,e),p(S,y,e),A(w,b),A(E,T),A(S,y),1,0,0)}}}function E1(i,t,e,n,o,s,r){if(!i?.length)return;const a=new Ti(i),c=(f,u,p,g)=>Math.abs(f-p)<.01&&Math.abs(f/s-Math.round(f/s))<1e-4||Math.abs(u-g)<.01&&Math.abs(u/s-Math.round(u/s))<1e-4,l=(f,u)=>[f,o(f,u)+e,u],h=(f,u)=>[f/n,u/n];for(const f of i)for(const u of f){const p=u.length>>1;if(p<3)continue;const g=[];for(let x=0;x<p;x++){const m=(x+1)%p,d=u[x*2],v=u[x*2+1],_=u[m*2],M=u[m*2+1],w={x0:d,z0:v,x1:_,z1:M,ix:0,iz:0,on:!1};g.push(w);const b=Math.hypot(_-d,M-v);if(b<.15||c(d,v,_,M))continue;const E=-(M-v)/b,T=(_-d)/b,S=(d+_)/2,y=(v+M)/2;for(const R of[1,-1])if(a.contains(S+E*R*.4,y+T*R*.4)&&!a.contains(S-E*R*.4,y-T*R*.4)){w.ix=E*R,w.iz=T*R,w.on=!0;break}if(!w.on)continue;const A=Math.max(1,Math.ceil(b/Xo));for(let R=0;R<A;R++){const L=d+(_-d)*R/A,N=v+(M-v)*R/A,C=d+(_-d)*(R+1)/A,D=v+(M-v)*(R+1)/A,B=L+w.ix*t,O=N+w.iz*t,q=C+w.ix*t,Z=D+w.iz*t;r.quad(l(L,N),l(C,D),l(q,Z),l(B,O),h(L,N),h(C,D),h(q,Z),h(B,O))}}for(let x=0;x<p;x++){const m=g[(x-1+p)%p],d=g[x];if(!m.on||!d.on)continue;const v=d.x0,_=d.z0,M=v+m.ix*t,w=_+m.iz*t,b=v+d.ix*t,E=_+d.iz*t;Math.hypot(M-b,w-E)<.04||r.tri(l(v,_),l(M,w),l(b,E),h(v,_),h(M,w),h(b,E))}}}function cs(i){const t=new Ot({map:i,side:le,alphaToCoverage:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});return t.customProgramCacheKey=()=>"surf-fade",t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float aFade;
varying float vFade;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vFade = aFade;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vFade;`).replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;",`diffuseColor.a *= vFade;
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;`)},t}function T1(i,t=[]){const e=[];for(let s=0;s<i.length;s+=2)e.push({x:i[s],z:i[s+1],e:t.map(r=>r[s/2])});const n=[e[0]];for(let s=1;s<e.length;s++){const r=e[s-1],a=e[s],c=Math.hypot(a.x-r.x,a.z-r.z),l=Math.max(1,Math.ceil(c/3));for(let h=1;h<=l;h++)n.push({x:r.x+(a.x-r.x)*h/l,z:r.z+(a.z-r.z)*h/l,e:r.e.map((f,u)=>f+(a.e[u]-f)*h/l)})}let o=0;return n.forEach((s,r)=>{const a=n[Math.max(0,r-1)],c=n[Math.min(n.length-1,r+1)];let l=c.x-a.x,h=c.z-a.z;const f=Math.hypot(l,h)||1;l/=f,h/=f,s.nx=-h,s.nz=l,r&&(o+=Math.hypot(s.x-n[r-1].x,s.z-n[r-1].z)),s.s=o}),n}const Xo=6;function Un(i,t,e,n,o,s=null,r=null){for(const a of i){const c=g=>{const x=[];for(let m=0;m<g.length;m+=2){const d=g[m],v=g[m+1],_=g[(m+2)%g.length],M=g[(m+3)%g.length],w=Math.max(1,Math.ceil(Math.hypot(_-d,M-v)/Xo));for(let b=0;b<w;b++)x.push(new gt(d+(_-d)*b/w,v+(M-v)*b/w))}return x},l=c(a[0]),h=a.slice(1).map(c),f=l.concat(...h),p=Hn.triangulateShape(l,h).map(([g,x,m])=>[[f[g].x,f[g].y],[f[x].x,f[x].y],[f[m].x,f[m].y]]);for(;p.length;){const g=p.pop();let x=-1,m=(Xo*1.6)**2;for(let w=0;w<3;w++){const b=g[w],E=g[(w+1)%3],T=(b[0]-E[0])**2+(b[1]-E[1])**2;T>m&&(m=T,x=w)}if(x<0){if(r){const w=(g[0][0]+g[1][0]+g[2][0])/3,b=(g[0][1]+g[1][1]+g[2][1])/3;if(r(w,b))continue}for(const[w,b]of g)o.p.push(w,s??t(w,b)+e,b),o.u.push(w/n,b/n);continue}const d=g[x],v=g[(x+1)%3],_=g[(x+2)%3],M=[(d[0]+v[0])/2,(d[1]+v[1])/2];p.push([d,M,_],[M,v,_])}}}function A1(i,t,e,n,o){if(!i?.length)return;const s=new Ti(i);for(const r of i){const a=r[0],c=a.length>>1;if(!(c<3))for(let l=0;l<c;l++){const h=(l+1)%c,f=a[l*2],u=a[l*2+1],p=a[h*2],g=a[h*2+1],x=Math.hypot(p-f,g-u);if(x<.2)continue;let m=-(g-u)/x,d=(p-f)/x;const v=(f+p)/2,_=(u+g)/2;if(s.contains(v+m*.4,_+d*.4)&&(m=-m,d=-d),s.contains(v+m*.45,_+d*.45)||t-n(v+m,_+d)>.48)continue;const M=Math.max(1,Math.ceil(x/Xo));for(let w=0;w<M;w++){const b=f+(p-f)*w/M,E=u+(g-u)*w/M,T=f+(p-f)*(w+1)/M,S=u+(g-u)*(w+1)/M,y=b+m*vn,A=E+d*vn,R=T+m*vn,L=S+d*vn,N=(B,O)=>[B/e,O/e],C=(B,O)=>[B,t,O],D=(B,O)=>[B,n(B,O)+.2,O];o.quad(C(b,E),C(T,S),D(R,L),D(y,A),N(b,E),N(T,S),N(R,L),N(y,A),1,1,0,0)}}}}function C1(i,t,e=()=>!1,n=null){const o=n?n.roadAt:t,s=new re;s.name="streets";const r=new un,a=new un,c=new un,l=new un,h=new un,f=new un,u=new un,p=new un,g=new un,x=new un,m=new un,d=new un,v=new un,_=new qi,M=new qi,w=new qi,b=new qi,E=new qi,T=new qi,S=new qi,y=.2,A=.12,R=.08,L=i.junctions,N=(ht,X,Q)=>L.some(([z,ft,F])=>Math.abs(z-ht)<F+Q&&Math.abs(ft-X)<F+Q&&Math.hypot(z-ht,ft-X)<F+Q),C=i.surf;C.plaza=C.plaza||[];const D=w1(C.plaza);Un(C.asphalt,o,y,4,r),Un(C.walk,o,y+A,1.6,a),Un(C.paving,t,y+.04,2.2,h),Un(D.ve3,t,0,2.2,d,An,a1),Un(D.brick,t,y+R,2.2,v),A1(D.ve3,An,2.2,t,S),Un(D.herring,t,y+R,2.4,f),Un(D.other,t,y+R,2.8,u),Un(D.drive,t,y+.012,4,p),Un(D.garden,t,y-.02,3.2,g),Un(D.red,t,y+.06,2.2,x),E1(D.garden,2.6,y+.08,2.2,t,C.tile,m);const B={asphalt:new Ti(C.asphalt),walk:new Ti(C.walk),paving:new Ti(C.paving),plaza:new Ti(C.plaza)},O=(...ht)=>ht.map(X=>({kind:X,index:B[X]})),q=O("asphalt","walk","paving","plaza");Ao(C.asphalt,y,y,4,o,e,O("walk","paving","plaza"),_,c,C.tile,!1),Ao(C.paving,y+.04,y+.04,2.2,t,e,O("asphalt","walk","plaza"),M,c,C.tile,!1),Ao(D.herring,y+R,y,2.4,t,e,q,w,c,C.tile,!0),Ao(D.other,y+R,y,2.8,t,e,q,b,c,C.tile,!0),Ao(D.drive,y+.012,y,4,t,e,q,E,c,C.tile,!1),Ao(D.red,y+.06,y,2.2,t,e,q,T,c,C.tile,!0);const Z=(ht,X,Q,z)=>Math.abs(ht-Q)<.01&&Math.abs(ht/C.tile-Math.round(ht/C.tile))<1e-4||Math.abs(X-z)<.01&&Math.abs(X/C.tile-Math.round(X/C.tile))<1e-4;for(const ht of C.walk)for(const X of ht)for(let Q=0;Q<X.length;Q+=2){const z=(Q+2)%X.length,ft=X[Q],F=X[Q+1],W=X[z],H=X[z+1];if(Z(ft,F,W,H))continue;const tt=Math.hypot(W-ft,H-F)||1,nt=(ft+W)/2,I=(F+H)/2,P=-(H-F)/tt*.4,J=(W-ft)/tt*.4;if(e(nt+P,I+J)||e(nt-P,I-J))continue;const ct=Math.max(1,Math.ceil(tt/Xo));for(let dt=0;dt<ct;dt++){const lt=ft+(W-ft)*dt/ct,Et=F+(H-F)*dt/ct,_t=ft+(W-ft)*(dt+1)/ct,St=F+(H-F)*(dt+1)/ct,Gt=o(lt,Et)+y,xt=o(_t,St)+y;c.quad([lt,Gt,Et],[_t,xt,St],[_t,xt+A,St],[lt,Gt+A,Et],[0,0],[1,0],[1,1],[0,1])}}for(const ht of i.roads){if(!ht.mk)continue;const X=T1(ht.p);for(let Q=1;Q<X.length;Q++){const z=X[Q-1],ft=X[Q];if(Math.floor(z.s/3)%2||N(z.x,z.z,2)||N(ft.x,ft.z,2))continue;const F=.07,W=(H,tt)=>{const nt=H.x+H.nx*tt,I=H.z+H.nz*tt;return[nt,o(nt,I)+y+.03,I]};l.quad(W(z,F),W(z,-F),W(ft,-F),W(ft,F),[0,0],[1,0],[1,1],[0,1])}}for(const[ht,X,Q,z]of i.crossings){const ft=Math.sin(Q),F=Math.cos(Q),W=-F,H=ft,tt=Math.max(3,Math.floor(z/1));for(let nt=0;nt<tt;nt++){const I=-z/2+.25+nt*(z-.5)/Math.max(1,tt-1),P=ht+W*I,J=X+H*I,ct=(dt,lt)=>{const Et=P+ft*dt+W*lt,_t=J+F*dt+H*lt;return[Et,o(Et,_t)+y+.03,_t]};l.quad(ct(-1.5,-.25),ct(-1.5,.25),ct(1.5,.25),ct(1.5,-.25),[0,0],[1,0],[1,1],[0,1])}}const G=ht=>ht&&s.add(ht),st=M1(),et=za("beige"),V=za("red"),Y=y1(),at=za("brick"),rt=pu(i.roads),pt=pu(i.roads,!0);G(r.mesh(rt,1)),G(p.mesh(rt,1)),G(a.mesh(new Ot({map:_1(),side:le}),2)),G(c.mesh(new Ot({color:14998736,side:le}),2));const vt=ii(new Ot({color:15921902}));vt.polygonOffsetFactor=-6,vt.polygonOffsetUnits=-6,G(l.mesh(vt,3)),G(h.mesh(ii(new Ot({map:st})),1)),G(f.mesh(ii(new Ot({map:et})),1)),G(d.mesh(ii(new Ot({map:at,color:8013372})),1)),G(v.mesh(ii(new Ot({map:at})),1)),G(u.mesh(ii(new Ot({map:st})),1)),G(g.mesh(ii(new Ot({map:Y})),1));const yt=ii(new Ot({map:V}));return G(x.mesh(yt,1)),G(m.mesh(yt,2)),G(_.mesh(pt,3)),G(M.mesh(cs(st),3)),G(w.mesh(cs(et),3)),G(b.mesh(cs(st),3)),G(E.mesh(pt,3)),G(T.mesh(cs(V),3)),G(S.mesh(cs(at),3)),s.add(d1(t,D.ve3)),s.add(D1(i.benches,t)),s.add(P1(i.walls||[],t)),s.add(L1(i.lamps||[],t)),n&&s.add(R1(n,e,y)),s}function R1(i,t,e){const n=[],o=(l,h,f,u)=>n.push(...l,...h,...f,...l,...f,...u);for(const l of i.rings){const h=l.length>>1;for(let f=0;f<h;f++){const u=(f+1)%h,p=l[f*2],g=l[f*2+1],x=l[u*2],m=l[u*2+1],d=Math.hypot(x-p,m-g);if(d<.05)continue;let v=-(m-g)/d,_=(x-p)/d;const M=(p+x)/2,w=(g+m)/2;if(i.inCorr(M+v*.6,w+_*.6)&&(v=-v,_=-_),i.inCorr(M+v*.6,w+_*.6)||!i.inCorr(M-v*.6,w-_*.6))continue;const b=Math.max(1,Math.ceil(d/2)),E=[];for(let T=0;T<=b;T++){const S=p+(x-p)*T/b,y=g+(m-g)*T/b,A=i.roadAt(S-v*.3,y-_*.3),R=i.natural(S+v*(.35+.4),y+_*(.35+.4));E.push({x:S,z:y,g:A,nat:R,bld:t(S+v*.6,y+_*.6)})}for(let T=0;T<b;T++){const S=E[T],y=E[T+1];if(S.bld||y.bld)continue;const A=Math.max(S.nat-S.g,y.nat-y.g),R=Math.min(S.nat-S.g,y.nat-y.g);let L,N;if(A>.35)L=et=>Math.max(et.nat,et.g+e)+.12,N=et=>et.g;else if(R<-.8)L=et=>et.g+e+.12+.45,N=et=>Math.min(et.nat,et.g)-.3;else continue;const C=[S.x,N(S),S.z],D=[y.x,N(y),y.z],B=[S.x,L(S),S.z],O=[y.x,L(y),y.z],q=[S.x+v*.35,L(S),S.z+_*.35],Z=[y.x+v*.35,L(y),y.z+_*.35],G=[S.x+v*.35,N(S),S.z+_*.35],st=[y.x+v*.35,N(y),y.z+_*.35];o(C,D,O,B),o(B,O,Z,q),o(q,Z,st,G)}}}const a=new Kt;a.setAttribute("position",new Dt(n,3)),a.computeVertexNormals();const c=new Ft(a,new Ot({color:11773842,side:le}));return c.castShadow=c.receiveShadow=!0,c.name="retaining",c}function P1(i,t){const e=[[1.8,.25,14275009],[1.4,.4,11050378],[1,.45,9800312],[1.5,.05,3753531]],n=[],o=[],s=new Rt,r=(l,h,f,u,p,g)=>{const x=h[0]-l[0],m=h[1]-l[1],d=Math.hypot(x,m);if(d<.05)return;const v=-m/d*u/2,_=x/d*u/2,M=(b,E,T)=>[b[0]+v*E,T,b[1]+_*E],w=(b,E,T,S)=>{n.push(...b,...E,...T,...b,...T,...S);for(let y=0;y<6;y++)o.push(s.r,s.g,s.b)};for(const b of[1,-1])w(M(l,b,p),M(h,b,g),M(h,b,g+f),M(l,b,p+f));w(M(l,1,p+f),M(h,1,g+f),M(h,-1,g+f),M(l,-1,p+f))};for(const l of i){const[h,f,u]=e[l.k];s.setHex(u);for(let p=2;p<l.p.length;p+=2){const g=[l.p[p-2],l.p[p-1]],x=[l.p[p],l.p[p+1]],m=Math.max(1,Math.ceil(Math.hypot(x[0]-g[0],x[1]-g[1])/8));for(let d=0;d<m;d++){const v=[g[0]+(x[0]-g[0])*d/m,g[1]+(x[1]-g[1])*d/m],_=[g[0]+(x[0]-g[0])*(d+1)/m,g[1]+(x[1]-g[1])*(d+1)/m];r(v,_,h,f,t(...v)-.3,t(..._)-.3)}}}const a=new Kt;a.setAttribute("position",new Dt(n,3)),a.setAttribute("color",new Dt(o,3)),a.computeVertexNormals();const c=new Ft(a,new Ot({vertexColors:!0,side:le}));return c.castShadow=c.receiveShadow=!0,c.name="walls",c}function L1(i,t){const e=new re;if(e.name="lamps",!i.length)return e;const n=new he(.06,.09,6.5,6);n.translate(0,3.25,0);const o=new kt(.06,.06,1.3);o.translate(0,6.4,.6);const s=new kt(.28,.12,.55);s.translate(0,6.33,1.2);const r=new Ot({color:4869970}),a=new Ot({color:16774358,emissive:16760944,emissiveIntensity:.1}),c=new Wt,l=new Ae,h=new k(1,1,1),f=new k,u=new k(0,1,0);for(const[T,S]of[[n,r],[o,r],[s,a]]){const y=new rn(T,S,i.length);i.forEach(([A,R,L],N)=>{l.setFromAxisAngle(u,L),c.compose(f.set(A,t(A,R)+.3,R),l,h),y.setMatrixAt(N,c)}),y.castShadow=!0,e.add(y)}const p=document.createElement("canvas");p.width=p.height=256;const g=p.getContext("2d"),x=g.createRadialGradient(128,128,0,128,128,128);x.addColorStop(0,"rgba(255,226,186,0.50)"),x.addColorStop(.08,"rgba(255,210,155,0.22)"),x.addColorStop(.22,"rgba(255,196,130,0.08)"),x.addColorStop(.42,"rgba(255,184,114,0.025)"),x.addColorStop(.62,"rgba(255,176,100,0)"),x.addColorStop(1,"rgba(255,170,90,0)"),g.fillStyle=x,g.fillRect(0,0,256,256);const m=new Vn(p);m.colorSpace=pe;const d=new Bn({map:m,transparent:!0,depthWrite:!1,blending:ys,opacity:0,fog:!1,polygonOffset:!0,polygonOffsetFactor:-8,polygonOffsetUnits:-8}),v=new Dn(18,18);v.rotateX(-Math.PI/2);const _=new rn(v,d,i.length),M=new Float32Array(i.length*3);i.forEach(([T,S,y],A)=>{const R=T+Math.sin(y)*1.2,L=S+Math.cos(y)*1.2;c.compose(f.set(R,t(R,L)+.36,L),l.identity(),h),_.setMatrixAt(A,c),M.set([R,t(T,S)+.3+6.25,L],A*3)}),_.renderOrder=4,_.frustumCulled=!1;const w=new Kt;w.setAttribute("position",new Ee(M,3));const b=new pl({map:m,size:16,transparent:!0,depthWrite:!1,blending:ys,opacity:0,sizeAttenuation:!0}),E=new uf(w,b);return E.frustumCulled=!1,e.add(_,E),e.userData.night=T=>{d.opacity=T*.4,b.opacity=T*.85,a.emissiveIntensity=.2+T*1.2,_.visible=E.visible=T>.01},e}function D1(i,t){const e=new re;if(!i.length)return e;const n=new kt(1.8,.08,.45);n.translate(0,.45,0);const o=new kt(1.8,.45,.06);o.translate(0,.72,-.2);const s=new kt(.06,.42,.4);s.translate(-.8,.21,0);const r=new kt(.06,.42,.4);r.translate(.8,.21,0);const a=new Ot({color:9067835}),c=new Ot({color:3095091}),l=[[n,a],[o,a],[s,c],[r,c]],h=new Wt,f=new Ae,u=new k(1,1,1),p=new k;for(const[g,x]of l){const m=new rn(g,x,i.length);i.forEach(([d,v],_)=>{f.setFromAxisAngle(new k(0,1,0),(d*13+v*7)%6.28),h.compose(p.set(d,t(d,v)+.07,v),f,u),m.setMatrixAt(_,h)}),m.castShadow=!0,e.add(m)}return e}const ls=16,gu=3.5,Oa=.15;function I1(i,t){const e=(i.roads||[]).filter(S=>S.h&&S.h.length*2===S.p.length),n=i.corr||[];if(!e.length||!n.length)return{roadAt:t,groundAt:t,terrainAt:t,baseAt:t,natural:t,refine:()=>!1,edgeDist:()=>1/0,inCorr:()=>!1,rings:[]};const o=16,s=new Map,r=[];e.forEach((S,y)=>{for(let A=0;A+3<S.p.length;A+=2){const R=r.length/7;r.push(S.p[A],S.p[A+1],S.p[A+2],S.p[A+3],S.h[A/2],S.h[A/2+1],y);const L=Math.floor((Math.min(S.p[A],S.p[A+2])-ls)/o),N=Math.floor((Math.max(S.p[A],S.p[A+2])+ls)/o),C=Math.floor((Math.min(S.p[A+1],S.p[A+3])-ls)/o),D=Math.floor((Math.max(S.p[A+1],S.p[A+3])+ls)/o);for(let B=L;B<=N;B++)for(let O=C;O<=D;O++){const q=B*65536+O;let Z=s.get(q);Z||s.set(q,Z=[]),Z.push(R)}}});const a=new Float64Array(e.length).fill(1/0),c=new Float64Array(e.length),l=[];function h(S,y){const A=s.get(Math.floor(S/o)*65536+Math.floor(y/o));if(!A)return null;let R=1/0;for(const C of A){const D=C*7,B=r[D],O=r[D+1],q=r[D+2]-B,Z=r[D+3]-O,G=q*q+Z*Z,st=G>0?Math.max(0,Math.min(1,((S-B)*q+(y-O)*Z)/G)):0,et=Math.hypot(S-B-q*st,y-O-Z*st);if(et>ls)continue;const V=r[D+6];a[V]===1/0&&l.push(V),et<a[V]&&(a[V]=et,c[V]=r[D+4]+(r[D+5]-r[D+4])*st),et<R&&(R=et)}if(R===1/0){for(const C of l)a[C]=1/0;return l.length=0,null}let L=0,N=0;for(const C of l){const D=a[C];if(D<R+2.5){const B=1/(D+.5)**4;L+=B,N+=B*c[C]}a[C]=1/0}return l.length=0,N/L}const f=64,u=new Map,p=new Map;for(const S of n){const y=S.length>>1;for(let A=0;A<y;A++){const R=(A+1)%y,L=S[A*2],N=S[A*2+1],C=S[R*2],D=S[R*2+1];if(N===D)continue;const B=Math.min(N,D),O=Math.max(N,D);for(let q=Math.ceil(B-.5);q+.5<O;q++){const Z=q+.5;if(Z<B)continue;let G=p.get(q);G||p.set(q,G=[]),G.push(L+(C-L)*(Z-N)/(D-N))}}}for(const[S,y]of p){y.sort((L,N)=>L-N);const A=Math.floor(S/f),R=S-A*f;for(let L=0;L+1<y.length;L+=2)for(let N=Math.ceil(y[L]-.5);N+.5<=y[L+1];N++){const C=Math.floor(N/f),D=C*65536+A;let B=u.get(D);B||u.set(D,B=new Uint8Array(f*f)),B[R*f+(N-C*f)]=1}}const g=(S,y)=>{const A=Math.floor(S),R=Math.floor(y),L=Math.floor(A/f),N=Math.floor(R/f),C=u.get(L*65536+N);return!!C&&C[(R-N*f)*f+(A-L*f)]===1},x=8,m=8,d=new Map,v=[];for(const S of n){const y=S.length>>1;for(let A=0;A<y;A++){const R=(A+1)%y,L=v.length/4;v.push(S[A*2],S[A*2+1],S[R*2],S[R*2+1]);const N=Math.floor((Math.min(S[A*2],S[R*2])-m)/x),C=Math.floor((Math.max(S[A*2],S[R*2])+m)/x),D=Math.floor((Math.min(S[A*2+1],S[R*2+1])-m)/x),B=Math.floor((Math.max(S[A*2+1],S[R*2+1])+m)/x);for(let O=N;O<=C;O++)for(let q=D;q<=B;q++){const Z=O*65536+q;let G=d.get(Z);G||d.set(Z,G=[]),G.push(L)}}}function _(S,y){const A=d.get(Math.floor(S/x)*65536+Math.floor(y/x));if(!A)return 1/0;let R=1/0;for(const L of A){const N=L*4,C=v[N],D=v[N+1],B=v[N+2]-C,O=v[N+3]-D,q=B*B+O*O,Z=q>0?Math.max(0,Math.min(1,((S-C)*B+(y-D)*O)/q)):0,G=Math.hypot(S-C-B*Z,y-D-O*Z);G<R&&(R=G)}return R<=m?R:1/0}const M=(S,y)=>{const A=h(S,y);return A??t(S,y)},w=(S,y)=>g(S,y)?M(S,y):t(S,y);function b(S,y){const A=t(S,y);if(!s.has(Math.floor(S/o)*65536+Math.floor(y/o)))return A;const R=h(S,y);if(R==null)return A;if(g(S,y))return R-Oa;if(A<=R-Oa)return A;const L=_(S,y);return L>gu?A:Math.min(A,R-Oa+.35*L)}function E(S,y){let A=b(S,y);if(!s.has(Math.floor(S/o)*65536+Math.floor(y/o)))return A;for(let R=-1;R<=1;R++)for(let L=-1;L<=1;L++)(R||L)&&(A=Math.min(A,b(S+R*12,y+L*12)));return A}function T(S,y,A,R){const L=(S+A)/2,N=(y+R)/2;if(!g(L,N)&&_(L,N)>gu+Math.hypot(A-S,R-y)/2)return!1;for(let C=0;C<=2;C++)for(let D=0;D<=2;D++){const B=S+(A-S)*C/2,O=y+(R-y)*D/2;if(Math.abs(b(B,O)-t(B,O))>.4)return!0}return!1}return{roadAt:M,groundAt:w,terrainAt:b,baseAt:E,natural:t,refine:T,edgeDist:_,inCorr:g,rings:n}}const Fa=128;function Oi(i){const t=document.createElement("canvas");t.width=Fa,t.height=Fa,i(t.getContext("2d"),Fa);const e=new Vn(t);return e.colorSpace=pe,e.anisotropy=8,e}const me={red:"#D0021B",white:"#FFFFFF",black:"#1A1A1A",blue:"#003DA5"},U1=Oi((i,t)=>{const e=t/2,n=8;i.save(),i.translate(e,e),i.beginPath();for(let o=0;o<n;o++){const s=Math.PI/4*o+Math.PI/8,r=Math.cos(s)*(e-2),a=Math.sin(s)*(e-2);o===0?i.moveTo(r,a):i.lineTo(r,a)}i.closePath(),i.fillStyle=me.red,i.fill(),i.strokeStyle=me.white,i.lineWidth=5,i.stroke(),i.fillStyle=me.white,i.font=`bold ${t*.28}px Arial`,i.textAlign="center",i.textBaseline="middle",i.fillText("STOP",0,2),i.restore()}),N1=Oi((i,t)=>{i.fillStyle=me.white,i.fillRect(0,0,t,t),i.beginPath(),i.moveTo(4,4),i.lineTo(t-4,4),i.lineTo(t/2,t-4),i.closePath(),i.fillStyle=me.white,i.fill(),i.strokeStyle=me.red,i.lineWidth=7,i.stroke();const n=14;i.beginPath(),i.moveTo(n,n+2),i.lineTo(t-n,n+2),i.lineTo(t/2,t-n),i.closePath(),i.strokeStyle=me.red,i.lineWidth=2,i.stroke()}),z1=Oi((i,t)=>{i.fillStyle=me.blue,i.fillRect(0,0,t,t);const e=t/2,n=t/2,o=t*.14,s=t*.45,r=t*.28;i.fillStyle=me.white,i.beginPath(),i.rect(e-s,n-o/2,s,o),i.fill(),i.beginPath(),i.moveTo(e,n-r/2),i.lineTo(e+r*.8,n),i.lineTo(e,n+r/2),i.closePath(),i.fill(),i.fillStyle=me.white,i.font=`bold ${t*.13}px Arial`,i.textAlign="center",i.textBaseline="bottom",i.fillText("SENSO UNICO",e,t-4)}),O1=Oi((i,t)=>{const e=t/2-3;i.fillStyle=me.white,i.beginPath(),i.arc(t/2,t/2,e,0,Math.PI*2),i.fill(),i.strokeStyle=me.red,i.lineWidth=8,i.stroke(),i.fillStyle=me.red,i.fillRect(t*.1,t/2-t*.14,t*.8,t*.28),i.globalCompositeOperation="destination-in",i.beginPath(),i.arc(t/2,t/2,e,0,Math.PI*2),i.fill(),i.globalCompositeOperation="source-over"});function Hf(i){return Oi((t,e)=>{const n=e/2-3;t.fillStyle=me.white,t.beginPath(),t.arc(e/2,e/2,n,0,Math.PI*2),t.fill(),t.strokeStyle=me.red,t.lineWidth=9,t.stroke(),t.fillStyle=me.black,t.font=`bold ${i>=100?e*.3:e*.38}px Arial`,t.textAlign="center",t.textBaseline="middle",t.fillText(String(i),e/2,e/2+1)})}const F1=Hf(30),B1=Hf(50),k1=Oi((i,t)=>{i.fillStyle=me.white,i.fillRect(0,0,t,t),i.beginPath(),i.moveTo(t/2,3),i.lineTo(t-3,t-3),i.lineTo(3,t-3),i.closePath(),i.fillStyle=me.white,i.fill(),i.strokeStyle=me.red,i.lineWidth=7,i.stroke();const n=t/2,o=t*.3;i.fillStyle=me.black,i.beginPath(),i.arc(n,o,t*.07,0,Math.PI*2),i.fill(),i.fillRect(n-3,o+t*.07,6,t*.22),i.save(),i.translate(n,o+t*.29),i.rotate(-.3),i.fillRect(-2,0,4,t*.18),i.restore(),i.save(),i.translate(n,o+t*.29),i.rotate(.3),i.fillRect(-2,0,4,t*.18),i.restore(),i.save(),i.translate(n,o+t*.13),i.rotate(.5),i.fillRect(-2,0,4,t*.16),i.restore()}),H1=Oi((i,t)=>{i.fillStyle=me.white,i.fillRect(0,0,t,t),i.beginPath(),i.moveTo(t/2,3),i.lineTo(t-3,t-3),i.lineTo(3,t-3),i.closePath(),i.fillStyle=me.white,i.fill(),i.strokeStyle=me.red,i.lineWidth=7,i.stroke(),i.beginPath(),i.moveTo(t/2,15),i.lineTo(t-3-12,t-3-5),i.lineTo(15,t-3-5),i.closePath(),i.strokeStyle=me.red,i.lineWidth=1.5,i.stroke(),i.fillStyle=me.black,i.font=`bold ${t*.42}px Arial`,i.textAlign="center",i.textBaseline="middle",i.fillText("!",t/2,t*.6)}),G1=Oi((i,t)=>{const e=t-8,n=t*.55,o=4,s=(t-n)/2;i.beginPath(),i.moveTo(o,s),i.lineTo(o+e*.72,s),i.lineTo(o+e,s+n/2),i.lineTo(o+e*.72,s+n),i.lineTo(o,s+n),i.closePath(),i.fillStyle=me.blue,i.fill(),i.fillStyle=me.white,i.font=`bold ${t*.16}px Arial`,i.textAlign="center",i.textBaseline="middle",i.fillText("ACQUEDOLCI",t/2-t*.04,t/2)}),V1={stop:[.6,.6],precedenza:[.7,.7],senso_unico:[.5,.35],divieto_acc:[.6,.6],limite_30:[.6,.6],limite_50:[.6,.6],pedoni:[.65,.65],pericolo:[.65,.65],direzione:[.7,.35]},W1={stop:2.2,precedenza:2.1,senso_unico:2.15,divieto_acc:2.2,limite_30:2.1,limite_50:2.15,pedoni:2.3,pericolo:2.3,direzione:2.2},X1={stop:U1,precedenza:N1,senso_unico:z1,divieto_acc:O1,limite_30:F1,limite_50:B1,pedoni:k1,pericolo:H1,direzione:G1};function q1(i,t){return new Dn(i,t)}function $1(i,t){const e=new re;e.name="cartelli-stradali";const n=i.signs||[];if(!n.length)return e;const o={};for(const u of n)(o[u.type]=o[u.type]||[]).push(u);const s=2.5,r=.025,a=new he(r,r,s,6),c=new Ot({color:8947848}),l=new rn(a,c,n.length);l.castShadow=!1,l.receiveShadow=!1,l.name="pali-cartelli";const h=new Re,f=new Ae;n.forEach(({x:u,z:p},g)=>{const x=t(u,p);h.position.set(u,x+s/2,p),h.quaternion.copy(f),h.scale.setScalar(1),h.updateMatrix(),l.setMatrixAt(g,h.matrix)}),l.instanceMatrix.needsUpdate=!0,e.add(l),new k(0,1,0);for(const[u,p]of Object.entries(o)){const g=X1[u];if(!g)continue;const[x,m]=V1[u]||[.6,.6],d=W1[u]||2.2,v=new Ot({map:g,transparent:!1,side:le,depthWrite:!0}),_=q1(x,m),M=new rn(_,v,p.length);M.castShadow=!1,M.name=`cartello-${u}`,p.forEach(({x:w,z:b,ang:E},T)=>{const S=t(w,b);h.position.set(w,S+d,b),h.rotation.set(0,E,0),h.scale.setScalar(1),h.updateMatrix(),M.setMatrixAt(T,h.matrix)}),M.instanceMatrix.needsUpdate=!0,e.add(M)}return e}const Pr=new k(0,1,0);function Y1(i,t){return Math.atan2(-t,i)}function j1(i,t,e,n,o,s,r,a){const c=e-i,l=n-t,h=Math.hypot(c,l);if(h<.4)return;const f=c/h,u=l/h,p=Y1(f,u),g=Math.max(2,Math.round(h/.14));for(let m=0;m<=g;m++){const d=m/g,v=i+c*d,_=t+l*d,M=o(v,_)+.28,w=m%12===0;(w?r:s).push(v,M+(w?.62:.52),_,p)}const x=Math.max(1,Math.ceil(h/2.2));for(let m=0;m<x;m++){const d=(m+.5)/x,v=i+c*d,_=t+l*d,M=o(v,_)+.28;a.push(v,M+.42,_,p,h/x),a.push(v,M+1.02,_,p,h/x)}}function Ba(i,t,e,n){if(!e.length)return null;const o=new rn(i,t,e.length),s=new Wt,r=new Ae,a=new k(1,1,1),c=new k;return e.forEach((l,h)=>{n(l,c,r,a),s.compose(c,r,a),o.setMatrixAt(h,s)}),o.castShadow=!0,o.receiveShadow=!0,o}function xu(i,t,e,n,o,s,r){const a=t(e,n)+.25,c=new Ae().setFromAxisAngle(Pr,o),l=(h,f,u,p,g)=>{const x=new Ft(h,f);x.position.set(p,u,g).applyQuaternion(c).add(new k(e,a,n)),x.quaternion.copy(c),x.castShadow=!0,i.add(x)};l(s.pole,r.metal,s.poleH/2,0,0);for(const h of s.arms)l(s.arm,r.metal,s.armY,h*.7,0),l(s.head,r.light,s.headY,h,0)}function Z1(i){const t=new re;t.name="plaza-props";const e=new Ot({color:1842722}),n=new Ot({color:4869970}),o=new Ot({color:16774880,emissive:16769712,emissiveIntensity:.2}),s=new Ot({color:16774358,emissive:16760944,emissiveIntensity:.12}),r=new Ot({color:14011320}),a=new Ot({color:4876856}),c=new Ot({color:9067835}),l=new Ot({color:5981746}),h=new Ot({color:3889708}),f=[3.2,1.3],u=[[[11.37,-11.75],[17.16,7.68]],[[-5.03,14.29],[-10.82,-5.14]]],p=[],g=[],x=[];for(const[[ht,X],[Q,z]]of u){const ft=(ht+Q)/2,F=(X+z)/2;let W=ft-f[0],H=F-f[1],tt=Math.hypot(W,H)||1;W/=tt,H/=tt;const nt=1.35;j1(ht+W*nt,X+H*nt,Q+W*nt,z+H*nt,i,p,g,x)}const m=(ht,X)=>{const Q=[];for(let z=0;z<ht.length;z+=X)Q.push(ht.slice(z,z+X));return Q},d=m(p,4),v=m(g,4),_=m(x,5),M=new kt(.018,1.02,.018),w=new kt(.055,1.22,.055),b=new kt(1,.028,.02),E=(ht,X,Q,z)=>{X.set(ht[0],ht[1],ht[2]),Q.setFromAxisAngle(Pr,ht[3])};for(const ht of[Ba(M,e,d,E),Ba(w,e,v,E),Ba(b,e,_,(X,Q,z,ft)=>{Q.set(X[0],X[1],X[2]),z.setFromAxisAngle(Pr,X[3]),ft.set(X[4],1,1)})])ht&&t.add(ht);const T=[-10.82,-5.14],S=[11.37,-11.75],y=(T[0]+S[0])/2,A=(T[1]+S[1])/2;let R=-8.54-y,L=-31.15-A,N=Math.hypot(R,L)||1;R/=N,L/=N;const C=S[0]-T[0],D=S[1]-T[1],B=Math.hypot(C,D)||1,O=[];for(const ht of[-1,1])O.push([y+R*5.2+C/B*ht*9,A+L*5.2+D/B*ht*9]);for(const[[ht,X],[Q,z]]of u){const ft=(ht+Q)/2,F=(X+z)/2;let W=ft-f[0],H=F-f[1],tt=Math.hypot(W,H)||1;W/=tt,H/=tt;for(const nt of[.22,.55,.82])O.push([ht+(Q-ht)*nt+W*2.3,X+(z-X)*nt+H*2.3])}const q=new he(.05,.07,4,7),Z=new kt(.04,.04,.35),G=new be(.28,12,10);for(const[ht,X]of O)xu(t,i,ht,X,0,{pole:q,poleH:4,arm:Z,arms:[0],armY:4.05,head:G,headY:4.35},{metal:n,light:o});const st=[[-178,-43,-158,-30],[-154,-43,-138,-30]];for(const[ht,X,Q,z]of st){const ft=(ht+Q)/2,F=(X+z)/2,W=i(ft,F)+.2,H=Q-ht,tt=z-X,nt=.4,I=.26,P=new Ft(new kt(H-I,.26,tt-I),a);P.position.set(ft,W+.13,F),P.receiveShadow=!0,t.add(P);const J=[[ft,W+nt/2,X,H,nt,I,0],[ft,W+nt/2,z,H,nt,I,0],[ht,W+nt/2,F,I,nt,tt,0],[Q,W+nt/2,F,I,nt,tt,0]];for(const[ct,dt,lt,Et,_t,St]of J){const Gt=new Ft(new kt(Et,_t,St),r);Gt.position.set(ct,dt,lt),Gt.castShadow=Gt.receiveShadow=!0,t.add(Gt)}}const et=new Yr(1,0),V=new he(.1,.15,1,6);for(const[ht,X,Q,z]of[[-172,-37,6.2,2.3],[-164,-36.5,5.4,2],[-148,-37,6,2.2],[-142,-36,5.2,1.9],[-168,-33,4.6,1.7],[-146,-33.5,4.4,1.6]]){const ft=i(ht,X)+.35,F=new Ft(V,l);F.scale.set(1,Q*.45,1),F.position.set(ht,ft+Q*.22,X),F.castShadow=!0;const W=new Ft(et,h);W.scale.set(z,Q*.38,z),W.position.set(ht,ft+Q*.62,X),W.castShadow=!0,t.add(F,W)}const Y=new kt(1.7,.08,.42),at=new kt(1.7,.42,.06),rt=new kt(.06,.4,.36);for(const[ht,X]of[[-176,-21.2],[-160,-20.8],[-146,-21],[-134.2,-36]]){const Q=i(ht,X)+.3,z=new Ae().setFromAxisAngle(Pr,0),ft=(F,W,H,tt,nt)=>{const I=new Ft(F,W);I.position.set(tt,H,nt).applyQuaternion(z),I.position.add(new k(ht,Q,X)),I.castShadow=!0,t.add(I)};ft(Y,c,.46,0,0),ft(at,c,.72,0,-.18),ft(rt,e,.22,-.75,0),ft(rt,e,.22,.75,0)}const pt=new he(.06,.08,6.4,7),vt=new kt(1.5,.05,.05),yt=new kt(.28,.1,.42);for(const[ht,X,Q]of[[-166,-16,Math.PI/2],[-150,-16,Math.PI/2],[-170,-50,Math.PI/2],[-146,-50,0]])xu(t,i,ht,X,Q,{pole:pt,poleH:6.4,arm:vt,arms:[-.85,.85],armY:6.15,head:yt,headY:6.05},{metal:n,light:s});return t.userData.night=ht=>{o.emissiveIntensity=.15+ht*1.5,s.emissiveIntensity=.1+ht*1.2},t}class Cs{constructor(t,e,n,o){const s=Math.hypot(n,o);n/=s,o/=s,this.m=new Wt().makeBasis(new k(o,0,-n),new k(0,1,0),new k(n,0,o)).setPosition(t,0,e),this.parts=[]}add(t,e){const n=t.index?t.toNonIndexed():t,o=new Kt;o.setAttribute("position",n.attributes.position),o.applyMatrix4(this.m);const s=new Rt(e),r=o.attributes.position.count,a=new Float32Array(r*3);for(let c=0;c<r;c++)a.set([s.r,s.g,s.b],c*3);return o.setAttribute("color",new Ee(a,3)),this.parts.push(o),this}box(t,e,n,o,s,r,a){const c=new kt(Math.abs(e-t),Math.abs(o-n),Math.abs(r-s));return c.translate((t+e)/2,(n+o)/2,(s+r)/2),this.add(c,a)}arch(t,e,n,o,s,r,a=.08){const c=new Ri,l=e/2,h=o-l;c.moveTo(t-l,n),c.lineTo(t+l,n),c.lineTo(t+l,h),c.absarc(t,h,l,0,Math.PI,!1),c.lineTo(t-l,n);const f=new ci(c,{depth:a,bevelEnabled:!1,curveSegments:10});return f.translate(0,0,s-a/2),this.add(f,r)}pediment(t,e,n,o,s,r,a){const c=new Ri;c.moveTo(t,n),c.lineTo(e,n),c.lineTo((t+e)/2,o),c.lineTo(t,n);const l=new ci(c,{depth:r-s,bevelEnabled:!1});return l.translate(0,0,s),this.add(l,a)}gable(t,e,n,o,s,r,a){const c=new Ri;c.moveTo(t,n),c.lineTo(e,n),c.lineTo((t+e)/2,o),c.lineTo(t,n);const l=new ci(c,{depth:r-s,bevelEnabled:!1});return l.translate(0,0,s),this.add(l,a)}cyl(t,e,n,o,s,r,a,c=16){const l=new he(r,s,o,c);return l.translate(t,n+o/2,e),this.add(l,a)}dome(t,e,n,o,s,r){const a=new be(o,16,8,0,Math.PI*2,0,Math.PI/2);return a.scale(1,s/o,1),a.translate(t,n,e),this.add(a,r)}rail(t,e,n,o,s,r,a){const c=s-n,l=o-e,h=Math.hypot(c,l)||.01,f=new kt(r,r,h);return f.rotateX(-Math.atan2(l,c)),f.translate(t,(e+o)/2,(n+s)/2),this.add(f,a)}mesh(t){const e=je(this.parts);e.computeVertexNormals();const n=new Ot({vertexColors:!0,side:le});n.onBeforeCompile=s=>{s.uniforms.uNight=Pi,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying float vY;`).replace("#include <project_vertex>",`#include <project_vertex>
vY = (modelMatrix * vec4(transformed, 1.0)).y;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight; varying float vY;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * vec3(1.0, 0.78, 0.5) * uNight * 0.38;`)};const o=new Ft(e,n);return o.name=t,o.castShadow=o.receiveShadow=!0,o}}function Gf(i,t){const e=[];for(let u=0;u<i.length;u+=2)e.push([i[u],i[u+1]]);let n=0,o=0;for(const[u,p]of e)n+=u,o+=p;n/=e.length,o/=e.length;let s=null;for(let u=0;u<e.length;u++){const[p,g]=e[u],[x,m]=e[(u+1)%e.length],d=Math.hypot(x-p,m-g);if(d<4)continue;let v=-(m-g)/d,_=(x-p)/d;const M=(p+x)/2,w=(g+m)/2;(M-n)*v+(w-o)*_<0&&(v=-v,_=-_);const b=v*t[0]+_*t[1]+d*.004;(!s||b>s.score)&&(s={score:b,mx:M,mz:w,wx:v,wz:_,L:d})}const r=s.wz,a=-s.wx;let c=1/0,l=-1/0,h=0;for(const[u,p]of e){const g=(u-s.mx)*r+(p-s.mz)*a,x=(u-s.mx)*s.wx+(p-s.mz)*s.wz;c=Math.min(c,g),l=Math.max(l,g),h=Math.min(h,x)}const f=(c+l)/2;return{ox:s.mx+r*f,oz:s.mz+a*f,wx:s.wx,wz:s.wz,W:l-c,D:-h}}function K1(i,t){const e=t?[t.x-0,t.z-0]:[0,-1],n=Gf(i.r,e),o=new Cs(n.ox,n.oz,n.wx,n.wz),s=i.g,r=n.W,a=n.D,c=r/2,l=15392712,h=16052196,f=2830648,u=11887165,p=14012096,g=1842722,x=s+.9,m=s+11.6;o.box(-c,c,s-.6,m,-a,0,l),o.box(-c-.05,c+.05,s-.6,x,-a-.05,.05,p),o.box(-c-.12,c+.12,s+5.4,s+5.75,-a-.12,.12,h),o.box(-c-.45,c+.45,m-.2,m+.35,-a-.45,.45,h),o.box(-c,c,m+.35,m+1.4,-.4,0,h),o.box(-c,c,m+.35,m+1.4,-a,-a+.4,h),o.box(-c,-c+.4,m+.35,m+1.4,-a,0,h),o.box(c-.4,c,m+.35,m+1.4,-a,0,h);const d=3.2;for(const[C,D,B]of[[[-c+.4,-.4],[c-.4,-.4],[0,-a/2]],[[c-.4,-.4],[c-.4,-a+.4],[0,-a/2]],[[c-.4,-a+.4],[-c+.4,-a+.4],[0,-a/2]],[[-c+.4,-a+.4],[-c+.4,-.4],[0,-a/2]]]){const O=new Kt;O.setAttribute("position",new Dt([C[0],m+.4,C[1],D[0],m+.4,D[1],B[0],m+.4+d,B[1]],3)),o.add(O,u)}const v=Math.min(8.4,r*.36),_=v/2;o.box(-_,_,s-.6,m,0,.7,l),o.box(-_-.1,_+.1,m-.2,m+.35,0,1.15,h),o.box(-_,_,m+.35,m+2.1,.3,.7,h);for(const C of[-1,1]){for(const D of[0,.75])o.box(C*(_-D)-.28,C*(_-D)+.28,x,m-.2,.7,.95,h),o.box(C*(c-D)-.28,C*(c-D)+.28,x,m-.2,0,.25,h);o.box(C*_-1,C*_+1,m+.35,m+2.6,.45,.85,h),o.box(C*_-.6,C*_+.6,m+.8,m+2.2,.85,.95,14208179)}for(let C=s+.15;C<m-.3;C+=.46)o.box(-c+.3,c-.3,C,C+.028,.02,.05,13222064),o.box(-_+.2,_-.2,C,C+.028,.72,.78,13616820);for(const C of[-3.72,-1.42,1.42,3.72])o.cyl(C,1.02,x,.16,.36,.32,p,12),o.cyl(C,1.02,x+.16,s+5.35-(x+.16),.26,.22,h,14),o.cyl(C,1.02,s+5.32,.22,.32,.36,h,12);o.box(-_+.15,_-.15,s+5.48,s+5.82,.78,1.28,h);const M=(C,D,B,O)=>{const q=Math.max(5,Math.round(D*2/.13));for(let Z=0;Z<=q;Z++){const G=C-D+D*2*Z/q;o.box(G-.012,G+.012,B,O,.9,.94,g);const st=new so(.03,.11,4);st.translate(G,O+.05,.92),o.add(st,g)}for(const Z of[B+.1,B+(O-B)*.46,O-.08])o.box(C-D,C+D,Z,Z+.03,.9,.95,g);for(const Z of[-1,1]){const G=new Ui(Math.min(.2,D*.32),.018,6,14);G.translate(C+Z*D*.45,B+(O-B)*.62,.96),o.add(G,g);const st=new Ui(.09,.014,5,10);st.translate(C+Z*D*.16,B+(O-B)*.36,.96),o.add(st,g)}};for(const C of[-2.6,0,2.6]){const D=C===0,B=D?2.05:1.32,O=s+(D?4.55:4.15);o.arch(C,1.55,s+6.2,s+9.6,.72,f),o.arch(C,1.95,s+6,s+9.85,.7,h,.05),o.arch(C,B+.32,x-.02,O+.22,.62,h,.08),o.arch(C,B,x+.02,O,.74,D?3811874:f),M(C,B*.4,x+.12,O-.28)}o.box(-_+.35,_-.35,s+5.82,s+6.02,.85,1.62,h),o.box(-_+.35,_-.35,s+6.82,s+7.02,1.4,1.62,h);for(let C=-_+.6;C<_-.45;C+=.26)o.box(C-.045,C+.045,s+6.02,s+6.82,1.46,1.56,14537924);const w=[];for(let C=_+1.6;C<c-1.2;C+=2.6)w.push(C);for(const C of[-1,1])for(const D of w){const B=C*D;for(const[O,q]of[[s+1.8,s+4.3],[s+6.6,s+9.3]])o.box(B-.85,B+.85,O-.15,q+.15,0,.12,h),o.box(B-.62,B+.62,O,q,.12,.16,f);o.pediment(B-1,B+1,s+9.5,s+10.2,0,.3,h)}const b=(C,D)=>{for(let B=2.2;B<C-1.5;B+=3)for(const[O,q]of[[s+1.8,s+4.3],[s+6.6,s+9.3]])D(B,O,q)};b(a,(C,D,B)=>{for(const O of[-1,1])o.box(O*c-.1,O*c+.1,D,B,-C-.6,-C+.6,f)}),b(r,(C,D,B)=>o.box(-c+C-.6,-c+C+.6,D,B,-a-.1,-a+.1,f));const E=7,T=_+2.6,S=1.55,y=.38,A=(x-An)/E;o.box(-T+.6,T-.6,x-.05,x+.01,.02,S,p);for(let C=0;C<E;C++){const D=x-C*A,B=D-A,O=S+C*y,q=O+y,Z=C*.03;o.box(-T+Z,T-Z,B,D+.012,O,q,p)}const R=S+E*y,L=(C,D,B,O)=>{o.cyl(C,D,B,.4*O,.2*O,.32*O,12870202,12),o.cyl(C,D,B+.38*O,.08*O,.36*O,.34*O,13927509,12),o.cyl(C,D,B+.44*O,.16*O,.05*O,.07*O,6047284,8);for(let q=0;q<11;q++){const Z=q/11*Math.PI*2,G=new kt(.055*O,.012*O,.85*O);G.translate(0,0,.38*O),G.rotateX(-.65),G.rotateY(Z),G.translate(C,B+.68*O,D),o.add(G,q%2?3107378:4094524)}};L(-T-.85,R+.35,An,1.35),L(T+.85,R+.15,An,1.2),L(-T+.15,R*.62,An,.85),L(T-.2,R*.55,An,.78),L(-_+.15,.95,x,.95),L(_-.2,1.05,x,.9);const N=(C,D)=>{const B=An,O=16053489;o.box(C-.22,C+.22,B+.42,B+.48,D-.2,D+.2,O),o.box(C-.21,C+.21,B+.48,B+.9,D-.2,D-.14,O);for(const q of[-.16,.16])for(const Z of[-.16,.16])o.box(C+q-.018,C+q+.018,B,B+.42,D+Z-.018,D+Z+.018,O)};for(let C=0;C<5;C++)N(T+1.15,1.35+C*.5);return o.mesh("municipio")}function J1(i){const t=new Cs(i.x,i.z,0,1),e=An,n=3.35,o=14998992,s=16183784,r=12081730,a=7260372;return t.cyl(0,0,e+.02,.16,n+.95,n+.72,o,64),t.cyl(0,0,e+.16,.22,n+.08,n+.28,s,64),t.cyl(0,0,e+.2,.08,n-.15,n+.02,r,48),t.cyl(0,0,e+.12,.06,n-.28,n-.28,a,48),t.cyl(0,0,e+.14,.03,n-1.15,n-1.15,4892856,32),t.cyl(0,0,e+.16,.28,.42,.55,o,20),t.cyl(0,0,e+.44,.55,.16,.2,3947064,12),t.cyl(0,0,e+.96,.1,.34,.4,3025962,16),t.cyl(0,0,e+1.08,.55,.035,.02,14675694,6),t.mesh("fontana-delfini")}function Q1(i){const t=Gf(i.r,[0,-1]),e=new Cs(t.ox,t.oz,t.wx,t.wz),n=i.g,o=Math.min(21,t.W),s=t.D,r=o/2,a=15985362,c=16315366,l=3354668,h=5913124,f=11558970,u=9343118,p=Math.min(11,o*.55),g=p/2,x=Math.min(9,s*.28),m=n+13,d=n+7.5;e.box(-g,g,n-.5,m,-s+x,0,a),e.gable(-g-.3,g+.3,m,m+3.2,-s+x,.1,f);for(const b of[-1,1]){e.box(b>0?g:-r,b>0?r:-g,n-.5,d,-s+x,-1.2,a);const E=new Ri;E.moveTo(0,d),E.lineTo(r-g+.3,d-.2),E.lineTo(0,d+2),E.lineTo(0,d);const T=new ci(E,{depth:s-x-1.2,bevelEnabled:!1});b<0&&T.scale(-1,1,1),T.translate(b*g,0,-s+x),e.add(T,f);for(let S=3;S<s-x-3;S+=4.2){const y=new Ri,A=1.3,R=d-1.6;y.moveTo(-A,n+.8),y.lineTo(A,n+.8),y.lineTo(A,R),y.absarc(0,R,A,0,Math.PI,!1),y.lineTo(-A,n+.8);const L=new ci(y,{depth:.06,bevelEnabled:!1});L.rotateY(Math.PI/2),L.translate(b*(r+.02),0,-S),e.add(L,c);const N=new Ri,C=.55,D=m-1.8;N.moveTo(-C,m-3.6),N.lineTo(C,m-3.6),N.lineTo(C,D),N.absarc(0,D,C,0,Math.PI,!1),N.lineTo(-C,m-3.6);const B=new ci(N,{depth:.06,bevelEnabled:!1});B.rotateY(Math.PI/2),B.translate(b*(g+.02),0,-S),e.add(B,l)}}const v=.5;e.box(-r,r,n-.5,n+9,0,v,a),e.box(-r-.04,r+.04,n-.5,n+.32,-.02,v+.04,13222836),e.box(-r-.2,r+.2,n+8.2,n+9.3,-.1,v+.3,c),e.box(-4,4,n+8.45,n+9,v+.3,v+.34,14469536),e.box(-g,g,n+9.3,n+15.6,0,v,a),e.box(-g-.25,g+.25,n+15.4,n+15.9,-.1,v+.3,c),e.pediment(-g-.4,g+.4,n+15.9,n+18.6,0,v+.2,c),e.pediment(-g+.6,g-.6,n+16.2,n+18,v+.2,v+.25,a),e.box(-.08,.08,n+18.6,n+20.4,v/2-.08,v/2+.08,3881787),e.box(-.5,.5,n+19.5,n+19.66,v/2-.08,v/2+.08,3881787);for(const b of[-r+.4,-g+.4,g-.4,r-.4,-2.2,2.2])e.box(b-.35,b+.35,n+.4,n+8.2,v,v+.25,c);for(const b of[-g+.45,g-.45])e.box(b-.35,b+.35,n+9.3,n+15.4,v,v+.25,c);for(const b of[-1,1]){const E=new he(1,1,.45,12,1,!1,0,Math.PI);E.rotateZ(Math.PI/2),E.rotateY(b>0?0:Math.PI),E.translate(b*(g+.9),n+9.4,v/2),e.add(E,c)}e.arch(0,2.5,n+.4,n+5.2,v+.05,h),e.pediment(-2,2,n+5.5,n+6.6,v,v+.35,c);for(const b of[-1,1])e.arch(b*5.2,1.5,n+.4,n+3.6,v+.05,h),e.arch(b*5.2,1.7,n+3.9,n+5.3,v+.05,c,.05);e.arch(0,1.4,n+10.5,n+13.9,v+.05,l);for(let b=0;b<4;b++)e.box(-3+b*.1,3-b*.1,n+.28,n+.28+.15*(b+1),v,v+.5+(4-b)*.35,13222062);{const b=-r-.2,E=-4.8,T=v+.15,S=v+3.5,y=n+.28,A=y+2.7,R=9278358,L=14148326,N=15987180,C=3814962;e.box(b,E,y,y+.1,T,S,N),e.box(b+.08,E-.08,y+.1,y+.72,S-.12,S-.02,N),e.box(b+.02,b+.1,y+.1,y+.72,T+.1,S-.1,N),e.box(E-.1,E-.02,y+.1,y+.72,T+.1,S-.1,N),e.box(b+.12,E-.5,y+.72,A-.42,S-.1,S-.02,L),e.box(E-1.15,E-.12,y+.72,A-.42,S-.1,S-.02,L),e.box(b+.02,b+.08,y+.72,A-.42,T+.15,S-.15,L),e.box(E-.08,E-.02,y+.72,A-.42,T+.15,S-.15,L);for(const D of[b+.06,(b+E)/2,E-.06])for(const B of[T+.06,S-.06])e.box(D-.045,D+.045,y+.1,A-.28,B-.045,B+.045,R);e.box(b-.12,E+.12,A-.32,A+.06,T-.08,S+.22,C),e.box(b+.35,E-.7,y+.95,y+1.08,T+.45,T+1.35,7034436)}e.box(-r,r,n-.5,n+11,-s,-s+x,a),e.box(-r-.2,r+.2,n+10.8,n+11.3,-s-.2,-s+x+.2,c);for(let b=-r+1.5;b<r-1;b+=2.8)for(const E of[n+1.5,n+5,n+8.2])e.box(b-.5,b+.5,E,E+1.6,-s-.08,-s+.02,l);const _=r-2.4,M=-s+2.4,w=2.3;e.box(_-w,_+w,n-.5,n+22,M-w,M+w,a),e.box(_-w-.2,_+w+.2,n+13.5,n+13.9,M-w-.2,M+w+.2,c),e.box(_-w-.25,_+w+.25,n+21.6,n+22.2,M-w-.25,M+w+.25,c);for(const[b,E]of[[-1,-1],[1,-1],[-1,1],[1,1]])e.box(_+b*w-.55,_+b*w+.55,n+22.2,n+26.8,M+E*w-.55,M+E*w+.55,a);e.box(_-w+.5,_+w-.5,n+22.2,n+22.9,M-w+.5,M+w-.5,14206876),e.cyl(_,M,n+23.2,1.2,.55,.35,8084014,10),e.box(_-w-.35,_+w+.35,n+26.8,n+27.5,M-w-.35,M+w+.35,c),e.dome(_,M,n+27.5,w-.2,2.2,u),e.box(_-.06,_+.06,n+29.6,n+31.6,M-.06,M+.06,3881787),e.box(_-.45,_+.45,n+30.8,n+30.95,M-.06,M+.06,3881787);for(const[b,E]of[[w+.02,0],[0,w+.02]]){const T=new Is(.75,20);b&&T.rotateY(Math.PI/2),T.translate(_+b,n+19,M+E),e.add(T,16052714)}return e.mesh("chiesa-madre")}function tM(i,t){const e=new Cs(0,0,0,1),n=11116429,o=10195583,s=2894374,r=(a,c,l,h,f,u,p,g,x)=>{const m=Math.hypot(l-a,h-c);if(m<.05)return;const d=-(h-c)/m*g/2,v=(l-a)/m*g/2,_=[[a+d,c+v],[l+d,h+v],[l-d,h-v],[a-d,c-v]],M=[f,u,u,f],w=[],b=(S,y)=>[_[S][0],M[S]+(y?p:0),_[S][1]],E=(S,y,A,R)=>w.push(...S,...y,...A,...S,...A,...R);E(b(0,0),b(1,0),b(1,1),b(0,1)),E(b(2,0),b(3,0),b(3,1),b(2,1)),E(b(0,1),b(1,1),b(2,1),b(3,1)),E(b(1,0),b(2,0),b(2,1),b(1,1)),E(b(3,0),b(0,0),b(0,1),b(3,1));const T=new Kt;T.setAttribute("position",new Dt(w,3)),e.add(T,x)};for(const a of i.ruins){const c=a.castle,l=c?8:a.castleArea?5.5:2.8,h=c?.9:.6;for(let f=2;f<a.p.length;f+=2){const u=a.p[f-2],p=a.p[f-1],g=a.p[f],x=a.p[f+1];if(c&&Math.hypot(g-u,x-p)<2.5||(r(u,p,g,x,t(u,p)-.4,t(g,x)-.4,l+.4,h,c?n:o),!c))continue;const m=Math.hypot(g-u,x-p),d=(g-u)/m,v=(x-p)/m,_=-v,M=d;for(let w=2.5;w<m-2;w+=4.8)for(const[b,E]of[[1.6,3.4],[4.8,6.6]]){const T=u+d*w,S=p+v*w,y=t(T,S);for(const A of[1,-1]){const R=T+_*A*.47,L=S+M*A*.47,N=new Dn(1.3,E-b);N.rotateY(Math.atan2(_*A,M*A)),N.translate(R,y+(b+E)/2,L),e.add(N,s)}}for(let w=.6;w<m-.3;w+=1.3){const b=u+d*w,E=p+v*w,T=new so(.32,.9,4);T.rotateY(Math.PI/4+Math.atan2(d,v)),T.translate(b,t(b,E)+8.45,E),e.add(T,n)}}}if(i.castle){for(const[a,c,l]of i.castle.towers){const h=t(a,c)-.4;e.cyl(a,c,h,9.4,l,l*.97,n,20),e.dome(a,c,h+9.4,l*.93,l*.6,13156528);const f=new be(.22,8,6);f.translate(a,h+9.4+l*.6+.15,c),e.add(f,13156528);for(let u=0;u<14;u++){const p=u/14*Math.PI*2,g=new so(.28,.8,4);g.translate(a+Math.sin(p)*l,h+9.7,c+Math.cos(p)*l),e.add(g,n)}for(const[u,p]of[[3.2,.8],[6.4,2.4]]){const g=new Dn(.8,1.2);g.rotateY(p),g.translate(a+Math.sin(p)*(l+.02),h+u,c+Math.cos(p)*(l+.02)),e.add(g,s)}}if(i.castle.chapel){const[a,c]=i.castle.chapel,l=t(a,c)-.3,h=new Cs(a,c,.12,1);h.box(-5.2,5.2,l,l+6.5,-4,4,14273972),h.gable(-5.4,5.4,l+6.5,l+8.6,-4.2,4.2,11823684),h.box(-.6,.6,l+3.5,l+4.8,4,4.06,s),h.box(3.2,4.2,l+3.5,l+4.8,4,4.06,s),h.box(-13.2,-5.2,l,l+6,3.4,4.6,n),h.arch(-9.2,3.2,l,l+4.4,4.62,s,.1);for(let f=-12.7;f<-5.6;f+=1.5)h.box(f,f+.9,l+6,l+6.9,3.5,4.5,n);e.parts.push(...h.parts)}}return e.mesh("castello-ruderi")}function eM(i,t){const e=new re;e.name="landmarks";const n=i.landmarks||{};for(const o of i.buildings)o.lm==="municipio"&&e.add(K1(o,n.fountain)),o.lm==="chiesa"&&e.add(Q1(o));return n.fountain&&e.add(J1(n.fountain)),n.ruins?.length&&e.add(tM(n,t)),e.add(J_(i)),e.add(Z1(t)),e}function nM(i,t,e){const[n,o]=t,{size:s,px:r}=i,a=new Set(i.tiles.map(([d,v])=>`${d},${v}`)),c=document.createElement("canvas");c.width=c.height=r*3;const l=c.getContext("2d"),h=new Vn(c);h.colorSpace=pe,h.anisotropy=e.capabilities.getMaxAnisotropy();const f=new Map;let u=null,p=!1,g=0;function x(d){if(!f.has(d)){const[v,_]=d.split(",");f.set(d,new Promise(M=>{const w=new Image;w.onload=()=>M(w),w.onerror=()=>M(null),w.src=`data/ortho-hr/hr_${v}_${_}.jpg`})),f.size>25&&f.delete(f.keys().next().value)}return f.get(d)}function m(d){const v=Math.floor((d.x+n)/s),_=Math.floor((o-d.z)/s),M=`${v},${_}`;if(M!==u){u=M,l.clearRect(0,0,c.width,c.height),As.rect.value.set((v-1)*s-n,o-(_-1)*s,3*s,1),As.map.value=h,p=!0;for(let b=-1;b<=1;b++)for(let E=-1;E<=1;E++){const T=`${v+b},${_+E}`;a.has(T)&&x(T).then(S=>{!S||u!==M||(l.drawImage(S,(b+1)*r,(1-E)*r,r,r),p=!0)})}}const w=performance.now();p&&w-g>250&&(h.needsUpdate=!0,p=!1,g=w)}return{update:m}}const Vf="vec2 cd = (wp.xz - cameraPosition.xz) * 0.001; wp.y -= dot(cd, cd) * 0.0682594;",iM=["litorale","costa","vicino0","vicino1","vicino2","vicino3","alicudi","filicudi","salina","lipari","vulcano","panarea","stromboli"],vu={alicudi:"Alicudi",filicudi:"Filicudi",salina:"Salina",lipari:"Lipari",vulcano:"Vulcano",panarea:"Panarea",stromboli:"Stromboli"},oM=[["Cefalù",414231,4210537,150],["Capo d'Orlando",477712,4223254,60]],xr=160,sM=new Set(["litorale","costa","vicino0","vicino1","vicino2","vicino3"]),vr=new k(.34,.62,.7).normalize();function Wf(i){i.vertexShader=i.vertexShader.replace(/precision mediump float/g,"precision highp float").replace(/precision mediump int/g,"precision highp int")}function rM(i,t=!1){const e=new Bn({map:i,vertexColors:t});return e.onBeforeCompile=n=>{Wf(n),n.vertexShader=n.vertexShader.replace("#include <project_vertex>",`
      vec4 wp = modelMatrix * vec4(transformed, 1.0);
      ${Vf}
      vec4 mvPosition = viewMatrix * wp;
      gl_Position = projectionMatrix * mvPosition;`)},e}function aM(i,t,e,n){const o=new Float32Array(t*e),s=new Float32Array(t*e).fill(1e9);for(let a=0;a<o.length;a++)i[a]>-30&&(o[a]=i[a],s[a]=0);const r=n*Math.SQRT2;for(let a=0;a<e;a++)for(let c=0;c<t;c++){const l=a*t+c;let h=s[l];c>0&&(h=Math.min(h,s[l-1]+n)),a>0&&(h=Math.min(h,s[l-t]+n),c>0&&(h=Math.min(h,s[l-t-1]+r)),c<t-1&&(h=Math.min(h,s[l-t+1]+r))),s[l]=h}for(let a=e-1;a>=0;a--)for(let c=t-1;c>=0;c--){const l=a*t+c;let h=s[l];c<t-1&&(h=Math.min(h,s[l+1]+n)),a<e-1&&(h=Math.min(h,s[l+t]+n),c<t-1&&(h=Math.min(h,s[l+t+1]+r)),c>0&&(h=Math.min(h,s[l+t-1]+r))),s[l]=h}for(let a=0;a<o.length;a++)i[a]<=-30&&(o[a]=-Math.min(30,.28*s[a]));return o}function cM(i,t,e,n,o=.5){const s=new Float32Array(t*e*3),r=vr.y;for(let a=0;a<e;a++)for(let c=0;c<t;c++){const l=i[a*t+Math.max(0,c-1)],h=i[a*t+Math.min(t-1,c+1)],f=i[Math.max(0,a-1)*t+c],u=i[Math.min(e-1,a+1)*t+c],p=(Math.max(h,0)-Math.max(l,0))/(2*n),g=(Math.max(u,0)-Math.max(f,0))/(2*n),x=1/Math.hypot(p,1,g),m=(-p*vr.x+vr.y-g*vr.z)*x,d=Math.min(1.3,Math.max(.6,1+o*(m-r))),v=(a*t+c)*3;s[v]=s[v+1]=s[v+2]=d}return s}async function lM(i,t){const[e,n]=i,o=new re;o.name="sfondo";const s=[],r=new Bc,a=await Promise.all(iM.map(async v=>{const _=await fetch(`data/bg/${v}.json`).then(E=>E.ok?E.json():null).catch(()=>null);if(!_)return null;const M=await r.loadAsync(`data/bg/${v}.jpg`).catch(()=>null);if(!M)return null;M.colorSpace=pe,M.anisotropy=8;const w=atob(_.data),b=new Uint8Array(w.length);for(let E=0;E<w.length;E++)b[E]=w.charCodeAt(E);return{name:v,meta:_,tex:M,raw:new Int16Array(b.buffer)}})),c=new Map(a.filter(Boolean).map(v=>[v.name,v]));for(const v of c.values())v.h=aM(v.raw,v.meta.width,v.meta.height,v.meta.step);const l=v=>{const _=v.map(T=>c.get(T)).filter(Boolean);if(!_.length)return null;const M=Math.min(..._.map(T=>T.meta.xmin)),w=Math.max(..._.map(T=>T.meta.xmin+(T.meta.width-1)*T.meta.step)),b=Math.max(..._.map(T=>T.meta.ymax)),E=Math.min(..._.map(T=>T.meta.ymax-(T.meta.height-1)*T.meta.step));return{x0:M-e,x1:w-e,z0:n-b,z1:n-E}},h=["vicino0","vicino1","vicino2","vicino3"],f={costa:l(["costa"]),vicino:l(h)},u=v=>(_,M)=>{const{width:w,height:b,step:E,xmin:T,ymax:S}=v.meta,y=(_+e-T)/E,A=(S-(n-M))/E,R=Math.max(0,Math.min(w-2,Math.floor(y))),L=Math.max(0,Math.min(b-2,Math.floor(A))),N=Math.min(1,Math.max(0,y-R)),C=Math.min(1,Math.max(0,A-L)),D=L*w+R,B=v.h;return B[D]*(1-N)*(1-C)+B[D+1]*N*(1-C)+B[D+w]*(1-N)*C+B[D+w+1]*N*C},p=c.get("litorale")&&u(c.get("litorale")),g=c.get("costa")&&u(c.get("costa")),x=240,m=(v,_,M)=>v?Math.min(_-v.x0,v.x1-_,M-v.z0,v.z1-M):-1,d=v=>(v=Math.min(1,Math.max(0,v)),v*v*(3-2*v));for(const{name:v,meta:_,tex:M,h:w}of c.values()){const{width:b,height:E,step:T}=_,S=sM.has(v)?cM(w,b,E,T,v==="litorale"?.45:.55):null,y=rM(M,!!S);v.startsWith("vicino")&&(y.polygonOffset=!0,y.polygonOffsetFactor=-3,y.polygonOffsetUnits=-3);const A=v==="costa"?f.vicino:v==="litorale"?f.costa:null;let R={v:-1};for(let L=0;L<E-1;L+=xr)for(let N=0;N<b-1;N+=xr){const C=Math.min(E-1,L+xr),D=Math.min(b-1,N+xr),B=C-L+1,O=D-N+1,q=new Float32Array(B*O*3),Z=new Float32Array(B*O*2),G=S?new Float32Array(B*O*3):null;for(let Y=L;Y<=C;Y++)for(let at=N;at<=D;at++){const rt=Y*b+at,pt=(Y-L)*O+(at-N),vt=_.xmin+at*T-e,yt=n-(_.ymax-Y*T);let ht=w[rt];if(v==="costa"){const X=m(f.costa,vt,yt);X<x&&(ht=p(vt,yt)*(1-d(X/x))+ht*d(X/x));const Q=m(f.vicino,vt,yt);Q>0&&(ht-=90*d(Q/40))}else if(v.startsWith("vicino")){const X=m(f.vicino,vt,yt);X<x&&(ht=g(vt,yt)*(1-d(X/x))+ht*d(X/x))}else if(v==="litorale"){const X=m(f.costa,vt,yt);X>0&&(ht-=90*d(X/100))}vt>t.x0+30&&vt<t.x1-30&&yt>t.z0+30&&yt<t.z1-30&&(ht-=60),q[pt*3]=vt,q[pt*3+1]=ht,q[pt*3+2]=yt,Z[pt*2]=(at+.5)/b,Z[pt*2+1]=1-(Y+.5)/E,G&&G.set(S.subarray(rt*3,rt*3+3),pt*3),w[rt]>R.v&&(R={v:w[rt],X:vt,Z:yt})}const st=[];for(let Y=L;Y<C;Y++)for(let at=N;at<D;at++){const rt=Y*b+at,pt=rt+1,vt=rt+b,yt=vt+1;if(w[rt]<-2.4&&w[pt]<-2.4&&w[vt]<-2.4&&w[yt]<-2.4)continue;if(A){const ft=_.xmin+at*T-e,F=n-(_.ymax-Y*T);if(ft>A.x0+80&&ft+T<A.x1-80&&F>A.z0+80&&F+T<A.z1-80)continue}const ht=(Y-L)*O+(at-N),X=ht+1,Q=ht+O,z=Q+1;st.push(ht,Q,X,X,Q,z)}if(!st.length)continue;const et=new Kt;et.setAttribute("position",new Ee(q,3)),et.setAttribute("uv",new Ee(Z,2)),G&&et.setAttribute("color",new Ee(G,3)),et.setIndex(st);const V=new Ft(et,y);V.name=`sfondo-${v}`,V.frustumCulled=!1,o.add(V)}vu[v]&&R.v>0&&s.push({name:vu[v],x:R.X,y:R.v,z:R.Z})}for(const[v,_,M,w]of oM)s.push({name:v,x:_-e,y:w,z:n-M});return{group:o,labels:s}}function _u(i,{far:t=!1}={}){const e=Qu.merge([bt.fog,{uTime:{value:0},uSun:{value:i.clone().normalize()},uDeep:{value:new Rt(679834)},uShallow:{value:new Rt(3133636)},uSkyH:{value:new Rt(13229290)},uSkyZ:{value:new Rt(6132676)},uSkyW:{value:new Rt(16773330)},uGold:{value:0},uTint:{value:new Rt(1,1,1)},uSpec:{value:3}}]);e.lcMap=wi.lcMap,e.lcRect=wi.lcRect;const n=new _n({uniforms:e,fog:!0,transparent:!0,depthWrite:!1,vertexShader:`
      varying vec3 vW;
      #include <fog_pars_vertex>
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        ${t?Vf:""}
        vW = wp.xyz;
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform float uTime, uSpec, uGold; uniform vec3 uSun, uDeep, uShallow, uSkyH, uSkyZ, uSkyW, uTint;
      varying vec3 vW;
      ${bf}
      #include <common>
      #include <fog_pars_fragment>
      // treno d'onda: direzione, lunghezza d'onda (m), ampiezza (m), velocità di fase ~ sqrt(g·L/2π)
      float px; // dimensione del pixel sul mare (m): le onde più corte di pochi pixel si spengono (niente moiré)
      void wave(vec2 p, vec2 dir, float L, float A, inout vec2 grad) {
        A *= smoothstep(px * 6.0, px * 18.0, L);
        float k = 6.2831 / L, c = sqrt(9.81 / k);
        float ph = k * (dot(dir, p) - c * uTime);
        grad += dir * (A * k * cos(ph));
      }
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
      // due ottave ruotate: niente celle quadrate nella schiuma
      float fbm(vec2 p) { return 0.62 * noise(p) + 0.38 * noise(mat2(0.8, -0.6, 0.6, 0.8) * p * 2.1 + 5.3); }
      void main() {
        float shore = 80.0; // distanza da riva in m (80 = mare aperto)
        ${t?"":`
        // mare del paese: solo dentro la copertura del suolo; fuori c'è quello dello sfondo
        vec4 lc = landcover(vW.xz);
        // R = distanza con segno dalla riva in metri (ground.js)
        float sd = lcSigned(lc.x);
        if (sd < 0.0) discard;
        shore = clamp(sd, 0.0, 80.0);`}
        float dist = distance(cameraPosition, vW);
        // onde: il mare da nord-ovest (il Tirreno davanti ad Acquedolci), più corte vicino a riva
        vec2 g = vec2(0.0);
        px = length(fwidth(vW.xz));
        float fade = 1.0;
        // il fronte d'onda non è una retta: il piano si deforma con rumore a grande scala (onde che serpeggiano)
        vec2 wp = vW.xz + 9.0 * (vec2(noise(vW.xz * 0.018), noise(vW.xz * 0.018 + 31.0)) - 0.5);
        wave(wp, normalize(vec2(0.35, 1.0)), 23.0, 0.12, g);
        wave(wp, normalize(vec2(-0.2, 1.0)), 11.0, 0.06, g);
        wave(wp, normalize(vec2(0.8, 0.6)), 6.3, 0.05 * fade, g);
        wave(wp, normalize(vec2(-0.7, 0.7)), 3.1, 0.03 * fade, g);
        wave(wp, normalize(vec2(0.1, -1.0)), 1.7, 0.016 * fade, g);
        wave(wp, normalize(vec2(-0.9, -0.3)), 4.4, 0.035 * fade, g);
        // onda lunga che increspa la superficie a chiazze larghe: da sopra il mare non è mai uniforme
        vec2 sw2 = vec2(noise(vW.xz * 0.035 + vec2(uTime * 0.05, 0.0)), noise(vW.xz * 0.035 + 17.0 - vec2(0.0, uTime * 0.04))) - 0.5;
        g += sw2 * 0.05 * smoothstep(px * 2.0, px * 14.0, 30.0);
        // micro-increspature che fanno scintillare il sole (svaniscono con la distanza: niente moiré)
        vec2 mw = vec2(noise(vW.xz * 1.7 + vec2(uTime * 0.9, 0.0)), noise(vW.xz * 1.7 + 37.0 - vec2(0.0, uTime * 0.7))) - 0.5;
        g += mw * 0.16 * (1.0 - smoothstep(60.0, 700.0, dist)) * smoothstep(px * 1.5, px * 7.0, 1.2);
        vec3 N = normalize(vec3(-g.x, 1.0, -g.y));
        // in ortografica la direzione di vista è una sola (asse della camera), non verso la sua posizione
        vec3 V = isOrthographic ? normalize(vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2])) : normalize(cameraPosition - vW);
        float fres = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
        vec3 R = reflect(-V, N);
        vec3 sky = mix(uSkyH, uSkyZ, clamp(R.y * 1.6, 0.0, 1.0));
        // lo specchio del cielo ha lo stesso bagliore del cielo vero (sky shader): il mare non resta viola sotto un cielo rosa
        float srs = max(dot(R, uSun), 0.0);
        float skyLow = exp(-max(R.y, 0.0) * 3.0);
        sky = mix(sky, uSkyW, clamp(uGold * (pow(srs, 2.5) * 0.7 + pow(srs, 12.0) * 0.5) * (0.35 + 0.65 * skyLow), 0.0, 1.0));
        sky = mix(sky, uSkyH, uGold * 0.45 * skyLow);          // l'orizzonte caldo si specchia ovunque, non solo verso il sole
        // la riva serpeggia: schiuma, colore e profondità non corrono mai parallele a una retta
        float sm = (noise(vW.xz * 0.045) - 0.5) * 10.0 + (noise(vW.xz * 0.17 + vec2(0.0, uTime * 0.25)) - 0.5) * 4.0;
        float shoreW = max(shore + sm * (1.0 - smoothstep(12.0, 45.0, shore)), 0.0);
        float depth = smoothstep(0.0, 45.0, shoreW);
        // banchi di sabbia e prati sommersi: il fondale chiaro affiora a strisce irregolari
        float bars = noise(vW.xz * vec2(0.03, 0.06) + 5.0) * 0.6 + noise(vW.xz * 0.11 + 2.0) * 0.4;
        depth = clamp(depth - (bars - 0.45) * 0.45 * (1.0 - smoothstep(35.0, 80.0, shore)), 0.0, 1.0);
        vec3 body = mix(uShallow, uDeep, depth) * mix(vec3(1.0), uTint, 0.4);
        body *= 0.93 + 0.14 * noise(vW.xz * 0.02 + 40.0);
        // le pendenze delle onde, amplificate, modellano la luce sull'acqua (da sopra il rilievo si legge)
        vec3 Nd = normalize(vec3(-g.x * 5.0, 1.0, -g.y * 5.0));
        // la luce media resta quella di prima (colore pieno): le onde aggiungono solo la variazione
        float sunDiff = clamp(max(dot(Nd, uSun), 0.0) / max(uSun.y, 0.25), 0.55, 1.45);
        // acqua viva: più chiara e satura, con la luce che attraversa le creste (turchese)
        float crest = clamp(length(g) * 5.0, 0.0, 1.0);
        vec3 col = body * (0.78 + 0.5 * sunDiff) + uShallow * 0.22 * crest * (0.4 + 0.6 * sunDiff) * (1.0 - depth * 0.6);
        col = mix(col, sky, fres);
        // riflesso del sole: striscia larga e luccichio stretto; al tramonto caldo (oro/rosa)
        float sr = max(dot(R, uSun), 0.0);
        vec3 sunC = mix(vec3(1.0, 0.95, 0.85), uSkyW, 0.55 + 0.4 * uGold);
        col += sunC * (pow(sr, 3500.0) * 3.0 + pow(sr, 220.0) * 0.8 + pow(sr, 40.0) * 0.16 + pow(sr, 7.0) * 0.045 * (0.4 + uGold)) * uSpec;
        // morbida: i riflessi forti non bruciano in bianco
        col = col / (1.0 + max(col - vec3(0.85), 0.0) * 0.9);
        // il cielo caldo dell'orizzonte si specchia in lontananza
        col *= 1.06;
        // battigia: fasce di schiuma che corrono verso riva e si rompono col rumore
        float band = sin(shoreW * 0.9 + uTime * 1.3) * 0.5 + 0.5;
        float foam = (1.0 - smoothstep(0.5, 7.0, shoreW)) * smoothstep(0.5, 0.9, band * fbm(vW.xz * 0.55 + uTime * 0.2) * 1.25 + 0.35 * (1.0 - smoothstep(0.0, 2.0, shoreW)));
        // frangente: la linea dove l'onda si rompe, discontinua, a 10-18 m da riva
        float brk = 13.0 + (noise(vW.xz * 0.05) - 0.5) * 8.0;
        float breaker = exp(-pow((shoreW - brk) / 2.2, 2.0)) * smoothstep(0.5, 0.78, fbm(vW.xz * vec2(0.18, 0.3) + vec2(uTime * 0.12, 0.0))) * 0.7;
        // creste al largo: poche, sparse
        // piccole e sparse, non chiazze
        float caps = smoothstep(0.78, 0.95, fbm(vW.xz * 0.3 + vec2(uTime * 0.4, uTime * 0.15))) * smoothstep(20.0, 60.0, shore) * 0.22 * (1.0 - smoothstep(60.0, 400.0, dist));
        foam = max(foam, max(breaker, caps));
        col = mix(col, vec3(0.93, 0.95, 0.95) * uTint, clamp(foam, 0.0, 1.0));
        // trasparenza: a riva si vede il fondale (ortofoto), al largo l'acqua è piena
        float alpha = mix(0.35, 0.96, smoothstep(0.0, 25.0, shoreW));
        ${t?"":`
        // il mare del paese sfuma sui bordi del riquadro: oltre c'è il mare dello sfondo, senza stacchi
        vec2 ee = min(vW.xz - lcRect.xy, lcRect.xy + lcRect.zw - vW.xz);
        alpha *= smoothstep(0.0, 600.0, min(ee.x, ee.y));`}
        alpha = max(alpha, foam * 0.9);
        alpha = mix(alpha, 1.0, fres * 0.5);
        gl_FragColor = vec4(col, alpha);
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`});t&&(n.onBeforeCompile=r=>Wf(r));let o;if(t){const r=[0];for(let h=30;h<2e5;h*=1.12)r.push(h);r.push(2e5);const a=128,c=[],l=[];for(const h of r)for(let f=0;f<a;f++){const u=f/a*Math.PI*2;c.push(Math.cos(u)*h,0,Math.sin(u)*h)}for(let h=0;h<r.length-1;h++)for(let f=0;f<a;f++){const u=h*a+f,p=h*a+(f+1)%a,g=u+a,x=p+a;l.push(u,p,g,p,x,g)}o=new Kt,o.setAttribute("position",new Dt(c,3)),o.setIndex(l)}else{const r=wi.lcRect.value;o=new Dn(r.z,r.w),o.rotateX(-Math.PI/2),o.translate(r.x+r.z/2,0,r.y+r.w/2)}const s=new Ft(o,n);return s.renderOrder=5,s.name=t?"mare-sfondo":"mare",s.frustumCulled=!1,{mesh:s,uniforms:e,update(r,a){e.uTime.value=r,t&&a&&s.position.set(a.position.x,0,a.position.z)}}}const hM=i=>i*i*(3-2*i),_r=(i,t,e)=>i.map((n,o)=>n+(t[o]-n)*e),Co=[{hour:19.75,hourTo:20.3,dur:8,fov:46,final:!0,from:{cam:[-55,68,-270],look:[-8,14,-28]},to:{cam:[-22,112,-370],look:[-6,20,-36]}}];function uM({camera:i,controls:t,heightAt:e,setTime:n,onEnd:o}){const s=M=>document.getElementById(M),r=s("intro");let a=-1,c=0,l=!1,h=!1;const f=new k,u=new k,p=(M,[w,b,E])=>M.set(w,Math.max(e(w,E),0)+b,E);function g(M,w){const b=M.ease?M.ease(w):M.final?1-(1-w)**3:hM(w);if(M.nadir)i.up.set(0,0,1),p(f,_r(M.from.cam,M.to.cam,b)),p(u,_r(M.from.look,M.to.look,b));else if(M.orbit){i.up.set(0,1,0);const T=M.orbit,S=T.a0+(T.a1-T.a0)*b,y=T.r0+(T.r1-T.r0)*b;p(f,[T.c[0]+Math.cos(S)*y,T.h0+(T.h1-T.h0)*b,T.c[1]+Math.sin(S)*y]),p(u,[T.c[0],T.look,T.c[1]])}else i.up.set(0,1,0),p(f,_r(M.from.cam,M.to.cam,b)),p(u,_r(M.from.look,M.to.look,b));f.y=Math.max(f.y,e(f.x,f.z)+3),M.nadir&&(u.y=Math.min(u.y,f.y-20));const E=M.fov||42;i.fov!==E&&(i.fov=E,i.updateProjectionMatrix()),i.position.copy(f),t.target.copy(u),i.lookAt(u)}function x(M){a=M,c=0,h=!1;const w=Co[a];n(w.hour),r.classList.toggle("final",!!w.final),r.classList.remove("title")}function m(){l=!0,h=!1,r.hidden=!1,r.classList.remove("final","out","title"),document.body.classList.add("intro"),t.enabled=!1,x(0),g(Co[0],0)}function d(){l&&(l=!1,h=!1,r.classList.add("out"),r.classList.remove("title"),setTimeout(()=>{r.hidden=!0,r.classList.remove("out","final")},700),document.body.classList.remove("intro"),i.up.set(0,1,0),i.fov=55,i.updateProjectionMatrix(),t.enabled=!0,o())}addEventListener("keydown",M=>{l&&M.key==="Escape"&&d()});function v(M){if(!l)return;const w=Co[a];if(h){const S=Math.min(1,+s("introFade").style.opacity+M/.85);s("introFade").style.opacity=S.toFixed(3),S>=1&&d();return}c+=M;const b=Math.min(1,c/w.dur);g(w,b),w.hourTo&&n(w.hour+(w.hourTo-w.hour)*b);const E=.9,T=w.final?Math.max(0,1-c/1.1):Math.max(0,1-c/E,1-(w.dur-c)/E);if(s("introFade").style.opacity=T.toFixed(3),w.final){r.classList.toggle("title",c>2.6),c>=w.dur&&(h=!0);return}c>=w.dur&&x(a+1)}function _(M,w){l||m(),x(M),c=w,g(Co[M],Math.min(1,w/Co[M].dur)),s("introFade").style.opacity="0",r.classList.toggle("title",!!Co[M].final&&w>2.6)}return{start:m,stop:d,update:v,seek:_,get active(){return l},get index(){return a},get time(){return c}}}const fM=`
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
}`;function dM(i){const t=i.getDrawingBufferSize(new gt),e=new Di(t.x,t.y,{samples:0});e.texture.colorSpace=pe;const n={tSrc:{value:e.texture},uTexel:{value:new gt(1/t.x,1/t.y)},uSharp:{value:.7}},o=new Ft(new Dn(2,2),new _n({uniforms:n,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:fM}));o.frustumCulled=!1;const s=new qr;s.add(o);const r=new Ds(-1,1,1,-1,0,1);return{target:e,present(){i.setRenderTarget(null),i.render(s,r)},resize(){i.getDrawingBufferSize(t),e.setSize(t.x,t.y),n.uTexel.value.set(1/t.x,1/t.y)}}}const ka=140,Mu=940,yu=12,pM=1100,mM=/Paolo Ricca/i,ms=[{label:"city",w:1.7,h:1.36,l:3.55,tH:.66,tW:.92,tOff:0},{label:"sedan",w:1.84,h:1.46,l:4.5,tH:.6,tW:.88,tOff:-.06},{label:"van",w:1.92,h:1.92,l:4.85,tH:.98,tW:.96,tOff:.1},{label:"suv",w:1.94,h:1.65,l:4.52,tH:.72,tW:.9,tOff:-.08},{label:"scooter",w:.6,h:.88,l:1.86,tH:0,tW:0,tOff:0}],bu=[12107976,15130840,3034484,7478296,4023605,13150272,1579032,9127968,5927056,13914144],Ha=[5,6.2,4.8,6.8,7.5];function fn(i,t,e,n){const o=i.attributes.position.count,s=new Float32Array(o*3);for(let r=0;r<o;r++)s[r*3]=t,s[r*3+1]=e,s[r*3+2]=n;return i.setAttribute("color",new Ee(s,3)),i.toNonIndexed?i.toNonIndexed():i}function Xf(i){const{w:t,h:e,l:n,tH:o,tW:s,tOff:r}=i,a=[];if(i.label==="scooter"){const g=new kt(t,e*.55,n*.55);g.translate(0,e*.42,0),a.push(fn(g,1,1,1));const x=new kt(t*.18,e*.6,.12);x.translate(0,e*.38,n*.32),a.push(fn(x,.25,.25,.25));const m=new kt(t*.6,e*.09,n*.35);m.translate(0,e*.76,-n*.06),a.push(fn(m,.12,.12,.12));const d=e*.26,v=t*.18;for(const w of[n*.33,-n*.33]){const b=new he(d,d,v,7);b.rotateZ(Math.PI/2),b.translate(0,d,w),a.push(fn(b,.06,.06,.06))}const _=new kt(t*.7,e*.55,t*.55);_.translate(0,e*1.05,-n*.04),a.push(fn(_,1,1,1));const M=new be(t*.38,6,5);return M.translate(0,e*1.47,-n*.02),a.push(fn(M,.78,.65,.52)),je(a)}const c=e*.58,l=new kt(t,c,n);if(l.translate(0,c*.5+e*.06,0),a.push(fn(l,1,1,1)),o>0){const g=t*s,x=n*.52,m=new kt(g,o,x);m.translate(0,c+e*.06+o*.5,r*n*.5),a.push(fn(m,.95,.95,.95));const d=o*.92,v=n*.085,_=new kt(g*.96,d,v);_.rotateX(.42),_.translate(0,c+e*.06+d*.42,n*.26+r*n*.25-v*.2),a.push(fn(_,.08,.09,.1));const M=o*.88,w=n*.08,b=new kt(g*.92,M,w);b.rotateX(-.38),b.translate(0,c+e*.06+M*.4,-n*.24+r*n*.25+w*.2),a.push(fn(b,.08,.09,.1))}const h=e*.185,f=t*.09,u=n*.3,p=-n*.28;for(const[g,x]of[[u,t/2+f*.1],[u,-(t/2+f*.1)],[p,t/2+f*.1],[p,-(t/2+f*.1)]]){const m=new he(h,h,f,8);m.rotateZ(Math.PI/2),m.translate(x,h+e*.05,g),a.push(fn(m,.06,.06,.06));const d=new he(h*.62,h*.62,f*1.02,6);d.rotateZ(Math.PI/2),d.translate(x,h+e*.05,g),a.push(fn(d,.28,.28,.3))}for(const[g,x,m,d]of[[n*.505,.9,.9,.85],[-n*.505,.8,.1,.08]]){const v=new kt(t*.32,e*.13,.08);v.translate(0,c*.6+e*.06,g),a.push(fn(v,x,m,d))}return je(a)}function gM(i){const t=[];for(const o of i){if(o.k==="path"||o.k==="footway"||o.k==="cycleway"||o.k==="steps")continue;const s=o.p.length>>1;if(s<2)continue;let r=0,a=0;for(let u=0;u<s;u++)r+=o.p[u*2],a+=o.p[u*2+1];if(Math.hypot(r/s,a/s)>pM)continue;const c=[];let l=0;for(let u=0;u<s;u++){const p=o.p[u*2],g=o.p[u*2+1];u>0&&(l+=Math.hypot(p-c[u-1].x,g-c[u-1].z)),c.push({x:p,z:g,s:l})}if(l<8)continue;const h=!!(o.name&&mM.test(o.name)),f=o.k==="primary"?2.2:o.k==="secondary"?.45:.7;t.push({pts:c,len:l,start:c[0],end:c[c.length-1],cw:o.cw||6,hub:h,weight:h?14:f})}const e=(o,s)=>`${Math.round(o/yu)},${Math.round(s/yu)}`,n=new Map;for(let o=0;o<t.length;o++){const s=t[o];for(const r of[s.start,s.end]){const a=e(r.x,r.z);n.has(a)||n.set(a,[]),n.get(a).push(o)}}for(let o=0;o<t.length;o++){const s=t[o];s.startConns=(n.get(e(s.start.x,s.start.z))||[]).filter(r=>r!==o),s.endConns=(n.get(e(s.end.x,s.end.z))||[]).filter(r=>r!==o)}return t}function Su(i,t){const e=i.pts;let n=Math.max(0,Math.min(t,i.len));for(let l=1;l<e.length;l++){const h=e[l-1],f=e[l],u=f.s-h.s;if(n<=f.s||l===e.length-1){const p=u>0?(n-h.s)/u:0,g=h.x+(f.x-h.x)*p,x=h.z+(f.z-h.z)*p,m=f.x-h.x,d=f.z-h.z,v=Math.hypot(m,d)||1;return{x:g,z:x,hx:m/v,hz:d/v}}}const o=e[e.length-1],s=e[e.length-2],r=o.x-s.x,a=o.z-s.z,c=Math.hypot(r,a)||1;return{x:o.x,z:o.z,hx:r/c,hz:a/c}}function xM(i,t){const e=gM(i);if(!e.length)return{group:new re,update(){}};const n=(()=>{let _=42;return()=>(_=(_*16807+1)%2147483647)/2147483647})(),o=()=>{let _=0;for(const w of e)_+=w.weight;let M=n()*_;for(const w of e)if(M-=w.weight,M<=0)return w;return e[Math.floor(n()*e.length)]},s=_=>{if(!_.length)return null;let M=0;for(const b of _)M+=e[b].weight;let w=n()*M;for(const b of _)if(w-=e[b].weight,w<=0)return b;return _[Math.floor(n()*_.length)]},r=new re;r.name="traffic";const a=new Ot({vertexColors:!0,flatShading:!0}),c=Math.ceil(ka/ms.length),l=ms.map((_,M)=>{const w=M===ms.length-1?ka-c*(ms.length-1):c,b=Xf(_),E=new rn(b,a,w);return E.castShadow=!1,E.receiveShadow=!0,E.name=`car_${_.label}`,E.instanceColor=new Ur(new Float32Array(w*3),3),r.add(E),{im:E,count:w,type:_}}),h=[],f=new Wt,u=new Ae,p=new k(1,1,1),g=new k,x=new k(0,1,0);function m(_,M,w){let b=null;for(let R=0;R<48;R++){const L=n()<.82?o():e[Math.floor(n()*e.length)],N=(L.start.x+L.end.x)/2,C=(L.start.z+L.end.z)/2,D=Math.hypot(N-M,C-w);if(D>60&&D<Mu){b=L;break}}b||(b=o());const E=e.indexOf(b),T=n()*b.len,S=n()>.5?1:-1,y=(_?Ha[_.typeIdx]:Ha[0])+(n()-.5)*2,A=bu[Math.floor(n()*bu.length)];if(_)_.segIdx=E,_.dist=T,_.dir=S,_.speed=y,_.colorHex=A;else return{segIdx:E,dist:T,dir:S,speed:y,colorHex:A}}let d=0;for(let _=0;_<l.length;_++){for(let M=0;M<l[_].count;M++,d++){const w={typeIdx:_,instIdx:M,segIdx:0,dist:0,dir:1,speed:Ha[_],colorHex:16777215};m(w,999999,999999),h.push(w);const b=new Rt(w.colorHex);l[_].im.setColorAt(M,b)}l[_].im.instanceColor.needsUpdate=!0}function v(_,M){const w=M.position.x,b=M.position.z;for(const E of h){const T=e[E.segIdx],{x:S,z:y}=Su(T,E.dist),A=Math.hypot(S-w,y-b);if(A>Mu){m(E,w,b);const B=new Rt(E.colorHex);l[E.typeIdx].im.setColorAt(E.instIdx,B),l[E.typeIdx].im.instanceColor.needsUpdate=!0}if(E.dist+=E.dir*E.speed*_,E.dist<=0||E.dist>=T.len){const B=E.dist>=T.len,O=B?T.endConns:T.startConns;if(O.length>0){const q=s(O),Z=e[q],G=B?T.end:T.start,st=Math.hypot(Z.start.x-G.x,Z.start.z-G.z)<Math.hypot(Z.end.x-G.x,Z.end.z-G.z);E.segIdx=q,E.dist=st?0:Z.len,E.dir=st?1:-1}else E.dir=-E.dir,E.dist=Math.max(.1,Math.min(T.len-.1,E.dist))}if(A>660&&(E.instIdx&1)!==(Math.round(A*.1)&1))continue;const R=Su(e[E.segIdx],E.dist),L=t(R.x,R.z),N=-R.hz*.9*(E.dir>0?1:-1),C=R.hx*.9*(E.dir>0?1:-1);g.set(R.x+N,L,R.z+C);const D=Math.atan2(R.hx*E.dir,R.hz*E.dir);u.setFromAxisAngle(x,D),f.compose(g,u,p),l[E.typeIdx].im.setMatrixAt(E.instIdx,f)}for(const{im:E}of l)E.instanceMatrix.needsUpdate=!0}return{group:r,update:v,segCount:e.length,carCount:ka}}const Zt={skin:0,hair:1,shirt:2,pants:3,shoes:4,eye:5,pupil:6,mouth:7,brow:8},gs={[Zt.shoes]:2761244,[Zt.eye]:16250094,[Zt.pupil]:1774608,[Zt.mouth]:10238773},qe={shoulderY:1.39,shoulderX:.19,hipY:.9,hipX:.085,headY:1.58,headR:.135};function fe(i,t){const e=i.index?i.toNonIndexed():i;e.deleteAttribute("uv");const n=e.attributes.position.count;return e.setAttribute("slot",new Dt(new Float32Array(n).fill(t),1)),e}const de=(i,t,e,n)=>(i.translate(t,e,n),i);function vM(i,t,e=1){const n=qe.headR,o=qe.headY,s=[],r=(f,u=4)=>Math.max(u,Math.round(f*e)),a=new be(n,r(20,5),r(16,4));a.scale(.93,1.06,.96),s.push(fe(de(a,0,o,0),Zt.skin));for(const f of[1,-1]){const u=new be(.03,r(8,5),r(6,4));u.scale(.5,1,.8),s.push(fe(de(u,f*n*.92,o-.005,-.005),Zt.skin))}for(const f of[1,-1]){const u=new be(.03,r(12,5),r(10,4));u.scale(1,1.15,.55),s.push(fe(de(u,f*.048,o+.018,n*.86),Zt.eye));const p=new be(.017,r(10,5),r(8,4));p.scale(1,1.1,.5),s.push(fe(de(p,f*.046,o+.016,n*.86+.014),Zt.pupil));const g=new kt(.056,.012,.014);g.rotateZ(f*(t?-.12:-.06)),s.push(fe(de(g,f*.05,o+.066,n*.86),Zt.brow))}const c=new be(.02,r(8,5),r(6,4));c.scale(.9,1.1,1),s.push(fe(de(c,0,o-.018,n*.93),Zt.skin));const l=new Ui(.032,.008,r(6,3),r(14,6),Math.PI);l.rotateZ(Math.PI),l.scale(1,.7,1),s.push(fe(de(l,0,o-.052,n*.84),Zt.mouth));const h=(f=1.07)=>{const u=new be(n*f,r(20,5),r(12,4),0,Math.PI*2,0,Math.PI*.55);return u.scale(.95,1.04,1),u};if(i==="short"){const f=h();f.rotateX(-.28),s.push(fe(de(f,0,o+.02,-.008),Zt.hair));const u=new kt(.2,.035,.05);u.rotateX(.35),s.push(fe(de(u,0,o+.1,n*.62),Zt.hair))}else if(i==="long"){const f=h(1.09);f.rotateX(-.22),s.push(fe(de(f,0,o+.02,-.01),Zt.hair));const u=new he(n*.97,n*.82,.28,r(16,6),1,!0,Math.PI*.32,Math.PI*1.36);s.push(fe(de(u,0,o-.07,-.012),Zt.hair))}else if(i==="bun"){const f=h();f.rotateX(-.3),s.push(fe(de(f,0,o+.02,-.008),Zt.hair)),s.push(fe(de(new be(.06,r(12,5),r(8,4)),0,o+.1,-n*.75),Zt.hair))}else{const f=new be(n*1.04,r(20,5),r(8,4),Math.PI*.2,Math.PI*1.6,Math.PI*.35,Math.PI*.3);f.rotateY(Math.PI),s.push(fe(de(f,0,o,-.005),Zt.hair))}return s}function qf({hair:i="short",female:t=!1,slim:e=!1,q:n=1}={}){const o=e?.86:1,s=vM(i,t,n),r=(h,f=4)=>Math.max(f,Math.round(h*n));s.push(fe(de(new he(.05,.058,.1,r(10,6)),0,1.44,0),Zt.skin));const a=new he(.185*o,(t?.15:.16)*o,.52,r(16,6));a.scale(1,1,.62),s.push(fe(de(a,0,1.15,0),Zt.shirt));for(const h of[1,-1]){const f=new be(.066*o,r(12,5),r(8,4));f.scale(1.1,.75,.85),s.push(fe(de(f,h*(qe.shoulderX-.025)*o,qe.shoulderY-.005,0),Zt.shirt))}const c=new Ui(.058,.014,r(6,3),r(16,6));c.rotateX(Math.PI/2),s.push(fe(de(c,0,1.405,0),Zt.shirt));const l=new he(.155*o,.15*o,.14,r(16,6));return l.scale(1,1,.66),s.push(fe(de(l,0,.87,0),Zt.pants)),je(s)}function $f({slim:i=!1,q:t=1}={}){const e=i?.88:1,n=[],o=(r,a=4)=>Math.max(a,Math.round(r*t));n.push(fe(de(new Ii(.052*e,.2,o(4,2),o(10,5)),0,-.14,0),Zt.shirt)),n.push(fe(de(new Ii(.042*e,.2,o(4,2),o(10,5)),0,-.42,.01),Zt.skin));const s=new be(.052*e,o(10,5),o(8,4));return s.scale(.8,1.1,.9),n.push(fe(de(s,0,-.6,.015),Zt.skin)),je(n)}function _M({slim:i=!1,q:t=1}={}){const e=i?.9:1,n=[],o=(s,r=4)=>Math.max(r,Math.round(s*t));return n.push(fe(de(new Ii(.068*e,.64,o(4,2),o(10,5)),0,-.4,0),Zt.pants)),n.push(fe(Yf(e),Zt.shoes)),je(n)}function Yf(i){const t=new Ii(.052*i,.12,4,8);return t.rotateX(Math.PI/2),t.scale(1,.7,1),de(t,0,-.865,.045)}function MM(){return je([fe(de(new Ii(.07,.3,4,10),0,-.2,0),Zt.pants)])}function yM(){return je([fe(de(new Ii(.06,.3,4,10),0,-.2,0),Zt.pants),fe(de(Yf(1),0,.42,0),Zt.shoes)])}function bM(i,t){const e=i.attributes.slot.array,n=e.length,o=new Float32Array(n*3),s=new Rt,r=new Rt(t.hair).multiplyScalar(.7);for(let a=0;a<n;a++){const c=e[a];c===Zt.skin?s.setHex(t.skin):c===Zt.hair?s.setHex(t.hair):c===Zt.shirt?s.setHex(t.shirt):c===Zt.pants?s.setHex(t.pants):c===Zt.brow?s.copy(r):s.setHex(gs[c]),o.set([s.r,s.g,s.b],a*3)}return i.setAttribute("color",new Ee(o,3)),i}function SM(){const i=new Ot({color:16777215});return i.customProgramCacheKey=()=>"people-palette",i.onBeforeCompile=t=>{const e=n=>{const o=new Rt(n);return`vec3(${o.r.toFixed(4)}, ${o.g.toFixed(4)}, ${o.b.toFixed(4)})`};t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float slot; attribute vec3 iSkin; attribute vec3 iHair; attribute vec3 iShirt; attribute vec3 iPants;
varying vec3 vPal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float sl = floor(slot + 0.5);
vPal = sl < 0.5 ? iSkin : sl < 1.5 ? iHair : sl < 2.5 ? iShirt : sl < 3.5 ? iPants : sl < 4.5 ? ${e(gs[Zt.shoes])}
  : sl < 5.5 ? ${e(gs[Zt.eye])} : sl < 6.5 ? ${e(gs[Zt.pupil])} : sl < 7.5 ? ${e(gs[Zt.mouth])} : iHair * 0.7;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPal;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= vPal;`)},i}function Ga(i,t){const e=i.clone();for(const n of["iSkin","iHair","iShirt","iPants"])e.setAttribute(n,new Ur(new Float32Array(t*3),3));return e}function Va(i,t,e){const n=new Rt;for(const[o,s]of[["iSkin",e.skin],["iHair",e.hair],["iShirt",e.shirt],["iPants",e.pants]])n.setHex(s),i.attributes[o].setXYZ(t,n.r,n.g,n.b)}const $i=260,wu=420,Eu=.8,wM=1.6,EM=900,TM=[13914170,4881087,15786168,3832389,11558952,10172533,14471336,2771562,15255616,5933658,14708784,5913226,13160512,3170426],AM=[2763317,3820122,7364688,4864554,2631720,5917242,2771498,4735064,6967352],CM=[16109728,14723184,12616794,9128490,5121296,16308400,13932650],RM=[1575940,3807752,5910544,13934672,8947848,15261912,9054232];function PM(i){const t=[];for(const e of i){if(!e.p||e.p.length<4)continue;const n=e.p.length>>1;let o=0,s=0;for(let l=0;l<n;l++)o+=e.p[l*2],s+=e.p[l*2+1];if(Math.hypot(o/n,s/n)>EM)continue;let r=0;const a=[];for(let l=0;l<n;l++){const h=e.p[l*2],f=e.p[l*2+1];l>0&&(r+=Math.hypot(h-a[l-1].x,f-a[l-1].z)),a.push({x:h,z:f,s:r})}if(r<5)continue;const c=(e.cw||6)*.5+1.4;for(const l of[1,-1]){const h=a.map((f,u)=>{const p=a[Math.max(0,u-1)],g=a[Math.min(a.length-1,u+1)];let x=g.x-p.x,m=g.z-p.z;const d=Math.hypot(x,m)||1;return x/=d,m/=d,{x:f.x-m*c*l,z:f.z+x*c*l,s:f.s}});t.push({pts:h,len:r})}}return t}function Wa(i,t){const e=i.pts,n=Math.max(0,Math.min(t,i.len));for(let s=1;s<e.length;s++){const r=e[s-1],a=e[s],c=a.s-r.s;if(n<=a.s||s===e.length-1){const l=c>0?(n-r.s)/c:0;return{x:r.x+(a.x-r.x)*l,z:r.z+(a.z-r.z)*l}}}const o=e[e.length-1];return{x:o.x,z:o.z}}const Tu=[{hair:"short",female:!1},{hair:"long",female:!0},{hair:"bun",female:!0},{hair:"bald",female:!1}],LM=[10132122,14209738,12433326];function DM(i,t){const e=PM(i);if(!e.length)return{group:new re,update(){}};const n=(()=>{let A=137;return()=>(A=(A*16807+1)%2147483647)/2147483647})(),o=A=>A[Math.floor(n()*A.length)],s=SM(),r=.5,a=Array.from({length:$i},()=>{const A=n();return A<.42?0:A<.68?1:A<.84?2:3}),c=[0,0,0,0];a.forEach(A=>c[A]++);const l=Tu.map((A,R)=>{const L=new rn(Ga(qf({...A,q:r}),Math.max(1,c[R])),s,Math.max(1,c[R]));return L.count=c[R],L.name=`ped_body_${A.hair}`,L}),h=new rn(Ga($f({q:r}),$i*2),s,$i*2),f=new rn(Ga(_M({q:r}),$i*2),s,$i*2);h.name="ped_arms",f.name="ped_legs";const u=[...l,h,f];for(const A of u)A.castShadow=!1,A.receiveShadow=!0,A.frustumCulled=!1;const p=new re;p.name="npcs",p.add(...u);const g=[],x=[0,0,0,0];for(let A=0;A<$i;A++){const R=a[A],L=R===3||n()<.15,N={skin:o(CM),hair:o(L?LM:RM),shirt:o(TM),pants:o(AM)},C=x[R]++;Va(l[R].geometry,C,N);for(const B of[A*2,A*2+1])Va(h.geometry,B,N),Va(f.geometry,B,N);const D=Math.floor(n()*e.length);g.push({body:l[R],idx:C,i:A,pathIdx:D,dist:n()*e[D].len,dir:n()>.5?1:-1,speed:(Eu+n()*(wM-Eu))*(L?.75:1),height:(Tu[R].female?1.58:1.68)+n()*.16,wide:.9+n()*.25,phase:n()*Math.PI*2})}for(const A of u)for(const R of["iSkin","iHair","iShirt","iPants"])A.geometry.attributes[R].needsUpdate=!0;const m=new Wt,d=new Wt,v=new Wt,_=new Wt,M=new Ae,w=new k,b=new k,E=new k(0,1,0),T=(A,R,L,N,C)=>{v.makeTranslation(L,N,0),_.makeRotationX(C),d.multiplyMatrices(m,v).multiply(_),A.setMatrixAt(R,d)};let S=0;function y(A,R){S++;const L=R.position.x,N=R.position.z;for(const C of g){const D=e[C.pathIdx],B=Wa(D,C.dist),O=Math.hypot(B.x-L,B.z-N);if(O>wu){let at=0;do{C.pathIdx=Math.floor(n()*e.length),C.dist=n()*e[C.pathIdx].len;const rt=Wa(e[C.pathIdx],C.dist),pt=Math.hypot(rt.x-L,rt.z-N);if(pt>25&&pt<wu*.85)break}while(++at<30);C.dir=n()>.5?1:-1;continue}const q=O>180&&S%3!==C.i%3;if(C.dist+=C.dir*C.speed*A,C.dist<=0&&(C.dir=1,C.dist=0),C.dist>=D.len&&(C.dir=-1,C.dist=D.len),C.phase+=A*C.speed*3.4,q)continue;const Z=Wa(e[C.pathIdx],C.dist),G=t(Z.x,Z.z),st=Math.atan2(Z.x-B.x,Z.z-B.z)+(C.dir<0?Math.PI:0),et=C.height/1.75,V=Math.abs(Math.sin(C.phase))*.03;M.setFromAxisAngle(E,st),m.compose(w.set(Z.x,G+V,Z.z),M,b.set(et*C.wide,et,et*C.wide)),C.body.setMatrixAt(C.idx,m);const Y=Math.sin(C.phase)*.5;T(h,C.i*2,qe.shoulderX,qe.shoulderY,-Y*.8),T(h,C.i*2+1,-.19,qe.shoulderY,Y*.8),T(f,C.i*2,qe.hipX,qe.hipY,Y),T(f,C.i*2+1,-.085,qe.hipY,-Y)}for(const C of u)C.instanceMatrix.needsUpdate=!0}return{group:p,update:y,pedCount:$i}}const IM="Sweetwaters",UM="Road to Leadership",Lr=30,jf=180,Dr=[{k:"pop",label:"Popolarità",hint:"più consenso di partenza e più passaparola"},{k:"ric",label:"Ricchezza",hint:"le spese pesano meno sul punteggio finale"},{k:"fam",label:"Fama",hint:"1 = criminale, 5 = brav'uomo: meno scandali, comizi più credibili",low:"criminale",high:"brav'uomo"},{k:"car",label:"Carisma",hint:"comizi più efficaci"},{k:"ret",label:"Rete",hint:"più voci raccolte nei bar e nei ritrovi"}],Nn=[{id:"sindaco",name:"Il Sindaco Uscente",nick:"l'Assente",color:"#8a8f98",icon:"🪑",bio:"Cinque anni di mandato, trasmessi quasi tutti in differita. Punta sulla continuità: continuare a non esserci."},{id:"commendatore",name:"Il Commendatore",nick:"Mattone",color:"#b5652a",icon:"🏗️",bio:"Imprenditore del cemento, benefattore di se stesso. Promette tutto a tutti, spesso la stessa cosa."}],Wc=[{id:"pina",name:"Zia Pina",role:"Pensionata, sa tutto di tutti",icon:"👵",pop:5,ric:1,fam:5,car:3,ret:5},{id:"cavillo",name:"Avv. Nino Cavillo",role:"Avvocato, trova sempre un comma",icon:"⚖️",pop:2,ric:4,fam:3,car:4,ret:3},{id:"turi",name:"Turi il Palazzinaro",role:"Costruttore, “pratiche veloci”",icon:"🧱",pop:3,ric:5,fam:1,car:2,ret:4},{id:"giusy",name:"Giusy Influencer",role:"12 mila follower, 11 mila sono bot",icon:"🤳",pop:4,ric:2,fam:4,car:4,ret:2},{id:"alfio",name:"Prof. Alfio Pedante",role:"Docente, corregge anche i manifesti",icon:"📚",pop:2,ric:2,fam:5,car:2,ret:2},{id:"cicciu",name:"Mastro Cicciu",role:"Pescatore, conosce ogni scoglio",icon:"🎣",pop:4,ric:1,fam:4,car:3,ret:3},{id:"santo",name:"Santo del Bar",role:"Barista, confessore laico del paese",icon:"☕",pop:5,ric:2,fam:3,car:3,ret:5},{id:"melo",name:"Rag. Melo Conti",role:"Commercialista, i numeri tornano (quasi)",icon:"🧮",pop:1,ric:4,fam:3,car:1,ret:4},{id:"peppe",name:"Don Peppe il Mediatore",role:"“Ci penso io”, e ci pensa davvero",icon:"🕶️",pop:3,ric:4,fam:2,car:4,ret:5},{id:"chiara",name:"Chiara la Ricercatrice",role:"Tornata dall'estero per restare",icon:"🔬",pop:3,ric:2,fam:5,car:4,ret:1}],Ro=4,Au=[{id:"lungomare",x:-893,z:-168,icon:"🗑️",title:"Il lungomare senza cestini",text:"Ottocento metri di vista mare e nemmeno un cestino. I gabbiani hanno fondato un comitato per la raccolta differenziata."},{id:"spiaggia",x:-376,z:-205,icon:"🏖️",title:"La spiaggia “libera”",text:"Libera davvero: libera da bagnini, docce, passerelle e manutenzione. L'ultima pulizia risale a quando c'era la lira."},{id:"carnevale",x:238,z:-106,icon:"🎭",title:"Il Carnevale che fu",text:"Qui sfilavano i carri allegorici. Oggi sfilano solo le erbacce, in maschera da prato."},{id:"stazione",x:-41,z:-228,icon:"🚉",title:"La stazione",text:"Il treno passa, la pensilina no. Il tabellone degli orari è fermo a un secolo fa: almeno lui è puntuale."},{id:"pineta",x:-205,z:-71,icon:"🌲",title:"La pineta comunale",text:"Panchine rotte, altalena sequestrata dalla ruggine. I bambini giocano a “trova il gioco”."},{id:"ecologica",x:-276,z:384,icon:"♻️",title:"L'isola ecologica",text:"Aperta il martedì dispari degli anni bisestili. Il resto dei giorni è un'isola e basta."},{id:"scuola",x:-155,z:257,icon:"🏫",title:"La scuola dei lavori promessi",text:"Tre campagne elettorali, tre rendering, zero cantieri. Gli infissi hanno chiesto la pensione."},{id:"castello",x:266,z:-242,icon:"🏰",title:"Il castello dimenticato",text:"Patrimonio storico gestito come un condominio di lucertole. Nessun cartello, nessuna visita, nessuna vergogna."},{id:"buca",x:-82,z:180,icon:"🕳️",title:"La buca storica",text:"Una buca così antica che è stata inserita nel catasto. Qualcuno ci ha piantato un geranio."},{id:"vetrine",x:31,z:-48,icon:"🏚️",title:"Le vetrine vuote",text:"Tre vetrine su quattro: “Affittasi”. La quarta: “Cedesi attività”. I giovani? Partiti col primo treno, quello che passa."},{id:"porto",x:304,z:-206,icon:"⚓",title:"Il porticciolo dei rendering",text:"Promesso nel secolo scorso, esiste solo nei volantini. Le barche aspettano ancora, in secca."}],NM=[{id:"bar-piazza",x:-188,z:-18,icon:"☕",title:"Il bar della piazza",text:"Caffè, cornetto e processi sommari."},{id:"pub",x:121,z:-100,icon:"🍺",title:"Il pub",text:"Dopo la seconda birra tutti sanno chi ha votato chi."},{id:"circolo",x:-202,z:89,icon:"🃏",title:"Il circolo degli anziani",text:"Briscola, scopa e la vera sede del consiglio comunale."},{id:"farmacia",x:21,z:-80,icon:"💊",title:"La fila in farmacia",text:"Venti minuti di attesa, venti notizie riservatissime."},{id:"barbiere",x:53,z:-78,icon:"💈",title:"Il barbiere",text:"Taglio, barba e rassegna stampa."},{id:"sagrato",x:-232,z:111,icon:"⛪",title:"Il sagrato dopo la messa",text:"Pace e bene. Poi, a bassa voce, il resto."}],zM=[{id:"ve3",x:-17,z:3,icon:"📣",title:"Comizio in piazza del Municipio"},{id:"liberta",x:-214,z:86,icon:"📣",title:"Comizio in piazza della Chiesa"},{id:"gp2",x:-151,z:-13,icon:"📣",title:"Comizio nella piazza del giardino"},{id:"federico",x:235,z:-80,icon:"📣",title:"Comizio nella piazza del mercato"}],Mr={id:"autosalone",x:509,z:-212,icon:"🚗",title:"Autosalone",text:"Qui l'apparenza si compra a rate."},Xa={x:-17,z:12},No=[{id:"panda",name:"Utilitaria usata",price:3500,look:1,speed:14,type:0,color:13157044,text:"Ha 300 mila km, tutti in salita."},{id:"berlina",name:"Berlina aziendale",price:28e3,look:2,speed:17,type:1,color:3034484,text:"Seria, affidabile, un po' democristiana."},{id:"suv",name:"SUV nero lucido",price:65e3,look:3,speed:18,type:3,color:1579032,text:"Parcheggia dove vuole. Anche sul marciapiede."},{id:"cabrio",name:"Cabrio sportiva",price:14e4,look:4,speed:22,type:1,color:12067612,text:"Capelli al vento e voti in tasca. O il contrario."}],Zf=[{id:"volantini",name:"Volantini",price:400,gain:.7,text:"Cinquemila fogli, metà finiscono sui parabrezza."},{id:"manifesti",name:"Manifesti 6×3",price:1500,gain:1.6,text:"La tua faccia, gigante, sopra le buche."},{id:"social",name:"Campagna social",price:2500,gain:2.4,text:"Video verticali, musica di tendenza, zero contenuti."},{id:"radio",name:"Radio locale",price:4e3,gain:3.2,text:"Spot tra la sagra e i necrologi."},{id:"cena",name:"Cena elettorale",price:9e3,gain:5,text:"Pasta al forno per duecento. Il voto è compreso nel coperto."}],OM=[{t:"sindaco",p:2,text:"In cinque anni si è presentato in consiglio comunale tre volte. Una per sbaglio: cercava il bagno."},{t:"sindaco",p:1,text:"Ha inaugurato la stessa rotonda due volte, con due nastri diversi."},{t:"sindaco",p:3,text:"Il bando per i cestini del lungomare è scaduto perché nessuno ha trovato la penna per firmarlo."},{t:"sindaco",p:2,text:"Il suo ufficio ha l'orario di ricevimento: “su appuntamento, appuntamenti esauriti”."},{t:"sindaco",p:1,text:"Ha dichiarato che i giovani non partono: “fanno solo un lungo Erasmus”."},{t:"sindaco",p:3,text:"Il carnevale è stato cancellato perché “il paese è già abbastanza in maschera”."},{t:"sindaco",p:2,text:"Ha delegato la manutenzione delle strade alla pioggia: “le buche si riempiono da sole”."},{t:"commendatore",p:2,text:"Ha promesso lo stesso posto al comune a quattordici persone diverse. Tre sono parenti tra loro."},{t:"commendatore",p:3,text:"La sua villa al mare risulta, al catasto, un “deposito attrezzi con vista”."},{t:"commendatore",p:1,text:"Regala calendari con la sua foto per ogni mese. Anche febbraio, due volte."},{t:"commendatore",p:2,text:"Vuole trasformare la pineta in un “parco residenziale verde”: verde il colore dei balconi."},{t:"commendatore",p:3,text:"Le sue ditte hanno vinto dieci appalti su dieci. L'undicesimo non è stato bandito: l'ha vinto lo stesso."},{t:"commendatore",p:1,text:"Ha chiamato il suo SUV come il paese. Il SUV, però, funziona."},{t:"commendatore",p:2,text:"Offre passaggi gratis in auto per andare a votare. Solo andata."}],FM=[{id:"villa",icon:"🏖️",who:"Un imprenditore edile",text:"Ti chiede di promettere la concessione per una villetta sulla spiaggia. “Piccola, abusiva ma col cuore.” In cambio: i voti di tutta la famiglia.",yes:{label:"Prometti",cons:3,rep:-12,risk:15,msg:"Trecento voti in arrivo. E una ruspa, prima o poi."},no:{label:"Rifiuti",cons:.6,rep:4,msg:"Si sparge la voce: “quello non si compra”. Qualcuno apprezza."}},{id:"cugino",icon:"👔",who:"Tua zia",text:"Vuole un posto al comune per il cugino Nuccio. “È bravo, sa accendere il computer.”",yes:{label:"Prometti il posto",cons:1.6,rep:-6,risk:8,msg:"La famiglia allargata è con te. Molto allargata."},no:{label:"Rifiuti",cons:-.5,rep:3,msg:"Pranzo della domenica gelido. Ma la coscienza è calda."}},{id:"carro",icon:"🎭",who:"Il comitato del Carnevale",text:"Vuole rifare un carro allegorico dopo anni di nulla. Servono 2.000 €.",yes:{label:"Finanzia (2.000 €)",cons:2.2,rep:2,cost:2e3,msg:"Il carro avrà la tua faccia. In cartapesta, ma somigliante."},no:{label:"Non ora",cons:-.6,msg:"I carnevalari si ricorderanno. Hanno buona memoria e ottime maschere."}},{id:"magliette",icon:"⚽",who:"La squadra di calcetto",text:"Magliette nuove col tuo nome dietro. 800 €.",yes:{label:"Sponsorizza (800 €)",cons:1.2,cost:800,msg:"Il tuo nome ha segnato due gol. Uno era un autogol."},no:{label:"Rifiuti",cons:-.2,msg:"Giocheranno con le maglie dell'anno scorso. E del precedente."}},{id:"intervista",icon:"📰",who:"Il giornalino locale",text:"Offre un'intervista in prima pagina. “Offerta libera”, minimo 1.500 €.",yes:{label:"Paga (1.500 €)",cons:2,rep:-3,cost:1500,msg:"Titolo: “Il nuovo che avanza”. Sotto, in piccolo: “pubbliredazionale”."},no:{label:"Rifiuti",rep:2,msg:"Il giornalino intervisterà il Commendatore. Gratis, dicono."}},{id:"buca",icon:"🕳️",who:"Un anziano",text:"Ti porta davanti alla buca sotto casa sua: “Se sei diverso dagli altri, dimostralo.”",yes:{label:"Chiami un operaio (600 €)",cons:1.8,rep:3,cost:600,msg:"Buca chiusa in un'ora. Il quartiere è in stato di shock."},no:{label:"Prometti “dopo le elezioni”",cons:-.8,msg:"Frase già sentita. L'anziano ti guarda come si guarda un sindaco."}},{id:"pacchetti",icon:"📦",who:"Un signore con gli occhiali scuri",text:"Pacchetti di voti a 50 € l'uno. “Duecento, e non se ne parla più.”",yes:{label:"Compra (10.000 €)",cons:5,rep:-25,risk:30,cost:1e4,msg:"Duecento voti. Duecento testimoni."},no:{label:"Rifiuti",rep:6,cons:.4,msg:"Il signore sorride, si toglie gli occhiali. Sotto ce ne sono altri."}},{id:"processione",icon:"🕯️",who:"Il parroco",text:"Ti invita a portare il santo alla processione. Si suda, ma si vede.",yes:{label:"Porti il santo",cons:1.5,rep:2,msg:"Spalla dolorante, consenso in salita."},no:{label:"Declini",cons:-.4,msg:"Le signore della terza fila hanno preso nota."}},{id:"giovani",icon:"🎒",who:"Un gruppo di ragazzi",text:"Stanno per partire per il Nord. Ti chiedono un motivo per restare.",yes:{label:"Prometti uno spazio giovani (3.000 €)",cons:2.5,rep:3,cost:3e3,msg:"Un locale, wi-fi, sedie. Due restano. È un inizio."},no:{label:"Auguri loro buon viaggio",cons:-1,msg:"Partono. Il paese perde altri tre elettori e un batterista."}},{id:"ritiro",icon:"🤝",who:"Il Commendatore in persona",text:"Ti propone di ritirarti. In cambio: un assessorato “di peso” e una cena di pesce ogni venerdì.",yes:{label:"Accetti",end:"venduto",msg:""},no:{label:"Rifiuti",cons:1.5,rep:5,msg:"Il Commendatore stringe la mano più forte del necessario. Guerra."}}],Cu=["Un video al bar ti riprende mentre prometti la stessa cosa a due persone diverse.","Il cugino Nuccio racconta a tutti del suo “posto sicuro” al comune.","Una ruspa si presenta in spiaggia con il tuo volantino sul cruscotto.","Una chat di famiglia finisce nelle mani del giornalino."],BM=["Acquedolci. Un paese sul mare con la faccia stanca.","I giovani scappano col primo treno. I negozi abbassano le serrande. Il lungomare non ha nemmeno un cestino.","Anni di amministrazione assente hanno fatto il resto.","Ma tra 30 giorni si vota. E stavolta ci sei anche tu."],Tl="sw-game-v1",Xc=(i,t,e)=>Math.max(t,Math.min(e,i)),kn=()=>Math.random();function kM(i,t){const e=Gn(t),n=6+e.pop*1.6;return{v:1,listName:i,team:t,day:1,clock:0,votes:{player:n,sindaco:31,commendatore:30,undecided:100-n-61},spent:0,rep:40+e.fam*8,risk:0,notes:[],relics:[],visited:{},adsToday:{},rallyDay:0,cars:[],car:null,questsDone:[],nextQuest:45,log:[],over:null}}function HM(){try{const i=JSON.parse(localStorage.getItem(Tl)||"null");return i?.v===1?i:null}catch{return null}}function xn(i){try{localStorage.setItem(Tl,JSON.stringify(i))}catch{}}function Ru(){try{localStorage.removeItem(Tl)}catch{}}function Gn(i){const t={};for(const{k:e}of Dr)t[e]=i.length?i.reduce((n,o)=>n+(Wc.find(s=>s.id===o)?.[e]||0),0)/i.length:0;return t}const GM=i=>i.car&&No.find(t=>t.id===i.car)?.look||0;function Ni(i,t,e=null){const n=i.votes;if(t>0){t*=Math.max(.12,1-Math.max(0,n.player-25)/45);const o=Math.min(n.undecided,t*.5);n.undecided-=o;let s=t-o;const r=e?[e]:["sindaco","commendatore"];for(const a of r){const c=Math.min(n[a]-2,s/r.length);n[a]-=c,s-=c}n.player+=t-s}else{const o=Math.min(n.player-.5,-t);n.player-=o,n.undecided+=o*.5,n.sindaco+=o*.2,n.commendatore+=o*.3}Kf(i)}function Kf(i){const t=i.votes,e=t.player+t.sindaco+t.commendatore+t.undecided;for(const n in t)t[n]=t[n]*100/e}function Us(i,t="pop"){return(.75+Gn(i.team)[t]*.1)*(1+GM(i)*.05)*(.8+i.rep/250)}function Al(i,t){i.spent+=t}function VM(i,t){if(i.relics.includes(t.id))return null;i.relics.push(t.id),i.notes.push({kind:"relic",id:t.id,t:"sindaco",p:2,title:t.title,text:t.text,used:!1});const e=.35*Us(i,"pop");return Ni(i,e,"sindaco"),e}function WM(i,t){if(i.visited[t.id]===i.day)return{already:!0};i.visited[t.id]=i.day;const e=Gn(i.team),n=new Set(i.notes.filter(c=>c.kind==="rumor").map(c=>c.text)),o=OM.filter(c=>!n.has(c.text)),s=Math.min(o.length,1+(kn()<e.ret/6?1:0)),r=[];for(let c=0;c<s;c++){const l=o.splice(Math.floor(kn()*o.length),1)[0],h=Nn.find(u=>u.id===l.t),f={kind:"rumor",id:`r${i.notes.length}`,t:l.t,p:l.p,title:`Su ${h.name}`,text:l.text,used:!1};i.notes.push(f),r.push(f)}const a=.12*Us(i,"pop");return Ni(i,a),{got:r,gain:a}}function XM(i,t){if(i.rallyDay===i.day)return{already:!0};i.rallyDay=i.day;const e=Gn(i.team),n=.6+e.fam*.08+i.rep/250;let o=.35*Us(i,"car");const s={sindaco:0,commendatore:0};for(const r of t){const a=i.notes.find(l=>l.id===r&&!l.used);if(!a)continue;a.used=!0;const c=a.p*.32*(.7+e.car*.12)*n;s[a.t]+=c,o+=c*.4}for(const r of["sindaco","commendatore"])s[r]&&Ni(i,s[r],r);return Ni(i,o),{gain:o+s.sindaco+s.commendatore}}function qM(i,t){const e=Zf.find(r=>r.id===t),n=`${i.day}:${t}`,o=i.adsToday[n]||0;i.adsToday[n]=o+1,Al(i,e.price);const s=e.gain*.45*Us(i,"pop")/(1+o*.8);return Ni(i,s),s}function $M(i,t){const e=No.find(n=>n.id===t);return i.cars.includes(t)||(i.cars.push(t),Al(i,e.price)),i.car=t,e}function YM(i){const t=Gn(i.team),e=FM.filter(o=>!i.questsDone.includes(o.id)&&(o.id!=="ritiro"||i.day>=8));if(!e.length)return null;const n=e.filter(o=>o.yes.rep<-5);return n.length&&kn()<.5-t.fam*.08?n[Math.floor(kn()*n.length)]:e[Math.floor(kn()*e.length)]}function jM(i,t,e){i.questsDone.push(t.id);const n=e?t.yes:t.no;return n.end?(i.over={kind:n.end},n):(n.cost&&Al(i,n.cost),n.rep&&(i.rep=Xc(i.rep+n.rep,0,100)),n.risk&&(i.risk=Xc(i.risk+n.risk,0,100)),n.cons&&Ni(i,n.cons>0?n.cons*Us(i,"pop"):n.cons),n)}function ZM(i){const t=Gn(i.team),e=i.votes,n=e.player,o=Math.max(0,e.player-Math.max(e.sindaco,e.commendatore)),s=-.3+kn()*.6+o*.02,r=.5+kn()*1+o*.05,a=Math.min(e.undecided*.1,Math.max(0,s)+r);e.undecided-=a,e.sindaco+=s,e.commendatore+=r,e.undecided+=Math.max(0,-s),Ni(i,.05+t.pop*.05),Kf(i);let c=null;const l=i.risk/100*(1.1-t.fam*.15);return kn()<l&&(c=Cu[Math.floor(kn()*Cu.length)],Ni(i,-(2+i.risk/12)),i.risk=Math.max(0,i.risk-25),i.rep=Xc(i.rep-8,0,100)),i.day+=1,i.clock=0,i.day>Lr&&(i.over={kind:"voto"}),{delta:e.player-n,scandal:c}}function KM(i,t){return i.clock+=t,i.nextQuest-=t,i.clock>=jf}function Pu(i){const t=Math.min(1,i.clock/jf);return t<=.7?7.5+11.8*(t/.7):19.3+1.7*((t-.7)/.3)}function JM(i){const t=i.votes,e=()=>.9+kn()*.2,n={player:t.player*e(),sindaco:t.sindaco*e(),commendatore:t.commendatore*e()},o=n.player+n.sindaco+n.commendatore,s={};for(const a in n)s[a]=n[a]*100/o;const r=Object.entries(s).sort((a,c)=>c[1]-a[1])[0][0];return{res:s,winner:r,score:QM(i,s.player,r==="player")}}function QM(i,t,e){const n=Gn(i.team),o=i.spent/250*(1.25-n.ric*.15);return Math.max(0,Math.round(t*100+(e?2500:0)+i.rep*10-o))}const ty=(i,t)=>`${i.toFixed(1)},${t.toFixed(1)}`;function ey(i){const t=[],e=[],n=[],o=[],s=new Map,r=(u,p)=>{const g=ty(u,p);let x=s.get(g);return x==null&&(x=t.length,s.set(g,x),t.push(u),e.push(p),n.push([]),o.push(!1)),x},a=(u,p,g)=>{let x=-1;for(let m=0;m<u.length;m+=2){const d=r(u[m],u[m+1]);if(p&&(o[d]=!0),x>=0&&x!==d){const v=Math.hypot(t[d]-t[x],e[d]-e[x]);n[x].push([d,v,p,g]),n[d].push([x,v,p,g])}x=d}};for(const u of i.roads||[])a(u.p,u.k!=="pedestrian",u.cw/2);for(const u of i.paths||[])a(u.p,!1,u.w/2);const c=20,l=new Map;t.forEach((u,p)=>{const g=`${Math.floor(u/c)},${Math.floor(e[p]/c)}`;let x=l.get(g);x||l.set(g,x=[]),x.push(p)});function h(u,p,g){let x=-1,m=1/0;const d=Math.floor(u/c),v=Math.floor(p/c);for(let _=0;_<12&&x<0;_++){for(let M=-_;M<=_;M++)for(let w=-_;w<=_;w++)if(Math.max(Math.abs(M),Math.abs(w))===_)for(const b of l.get(`${d+M},${v+w}`)||[]){if(g&&!o[b])continue;const E=Math.hypot(t[b]-u,e[b]-p);E<m&&(m=E,x=b)}if(x>=0)for(let M=-_-1;M<=_+1;M++)for(let w=-_-1;w<=_+1;w++)for(const b of l.get(`${d+M},${v+w}`)||[]){if(g&&!o[b])continue;const E=Math.hypot(t[b]-u,e[b]-p);E<m&&(m=E,x=b)}}return x<0?null:{i:x,x:t[x],z:e[x],d:m}}function f(u,p,g,x,m){const d=h(u,p,m),v=h(g,x,m);if(!d||!v)return null;const _=t.length,M=new Float64Array(_).fill(1/0),w=new Int32Array(_).fill(-1),b=new Uint8Array(_),E=[],T=(L,N)=>{E.push([N,L]);let C=E.length-1;for(;C>0;){const D=C-1>>1;if(E[D][0]<=E[C][0])break;[E[D],E[C]]=[E[C],E[D]],C=D}},S=()=>{const L=E[0],N=E.pop();if(E.length){E[0]=N;let C=0;for(;;){const D=C*2+1,B=D+1;let O=C;if(D<E.length&&E[D][0]<E[O][0]&&(O=D),B<E.length&&E[B][0]<E[O][0]&&(O=B),O===C)break;[E[O],E[C]]=[E[C],E[O]],C=O}}return L};M[d.i]=0,T(d.i,0);let y=!1,A=0;for(;E.length&&A++<4e5;){const[,L]=S();if(!b[L]){if(b[L]=1,L===v.i){y=!0;break}for(const[N,C,D]of n[L]){if(m&&!D)continue;const B=M[L]+C;B<M[N]&&(M[N]=B,w[N]=L,T(N,B+Math.hypot(t[N]-t[v.i],e[N]-e[v.i])))}}}if(!y)return null;const R=[];for(let L=v.i;L>=0;L=w[L])R.push([t[L],e[L]]);return R.reverse(),{pts:ny([[u,p],...R,[g,x]]),start:d,end:v}}return{route:f,nearest:h,size:t.length}}function ny(i){if(i.length<3)return i;const t=[i[0]];for(let e=1;e<i.length-1;e++){const n=t[t.length-1],o=i[e],s=i[e+1];(Math.abs((o[0]-n[0])*(s[1]-n[1])-(o[1]-n[1])*(s[0]-n[0]))>.4||Math.hypot(o[0]-n[0],o[1]-n[1])<.01)&&t.push(o)}return t.push(i[i.length-1]),t}const Lu=6.5;function iy(i,t,e){const n={on:!0,pos:new k,yaw:0,moving:!1,stride:9,path:null,seg:0,car:null,speed:Lu,onArrive:null},o=new re,s=new Ft(new so(.8,1.8,16),new Bn({color:16762409,depthTest:!1}));s.rotation.x=Math.PI,s.position.y=.9;const r=new Ft(new so(1.05,2.25,16),new Bn({color:3810304,depthTest:!1}));r.rotation.x=Math.PI,r.position.y=.9,r.scale.set(1,1,1),o.add(r,s),o.renderOrder=20,s.renderOrder=21,r.renderOrder=20,i.add(o);const a=new Ft(new Or(.9,1.25,32),new Bn({color:16762409,transparent:!0,opacity:.85,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.renderOrder=6,i.add(a);const c=new Ft(new Or(1.2,1.7,32),new Bn({color:2872480,transparent:!0,opacity:.9,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.visible=!1,c.renderOrder=6,i.add(c);const l=new Yv({color:2872480,dashSize:2,gapSize:1.4,depthTest:!1,transparent:!0,opacity:.9});let h=null,f=null;function u(d){if(n.car=d,f&&(i.remove(f),f.geometry.dispose(),f=null),d){const v=Xf(ms[d.type]);f=new Ft(v,new Ot({vertexColors:!0,color:d.color})),f.castShadow=!0,i.add(f)}n.speed=d?d.speed:Lu}function p(d,v){n.pos.set(d,e(d,v),v),n.path=null,n.moving=!1}function g(d,v){n.path=d,n.seg=0,n.onArrive=v||null;const _=d[d.length-1];c.position.set(_[0],e(_[0],_[1])+.45,_[1]),c.visible=!0,h&&(i.remove(h),h.geometry.dispose());const M=d.map(([w,b])=>new k(w,e(w,b)+.6,b));h=new mv(new Kt().setFromPoints(M),l),h.computeLineDistances(),h.renderOrder=7,i.add(h)}function x(){n.path=null,n.moving=!1,c.visible=!1,h&&(i.remove(h),h.geometry.dispose(),h=null)}function m(d,v,_){if(n.path){let E=n.speed*d;for(;E>0&&n.path;){const T=n.path[n.seg+1];if(!T){const N=n.onArrive;x(),N?.();break}const S=T[0]-n.pos.x,y=T[1]-n.pos.z,A=Math.hypot(S,y);if(A<=E){n.pos.x=T[0],n.pos.z=T[1],E-=A,n.seg++;continue}n.pos.x+=S/A*E,n.pos.z+=y/A*E,E=0;let L=Math.atan2(S,y)-n.yaw;L=Math.atan2(Math.sin(L),Math.cos(L)),n.yaw+=L*Math.min(1,d*(n.car?6:10))}n.moving=!!n.path}else n.moving=!1;n.pos.y=e(n.pos.x,n.pos.z),n.on=!n.car,f&&(f.position.set(n.pos.x,n.pos.y+.22,n.pos.z),f.rotation.y=n.yaw),t.update(d,{on:!n.car,pos:n.pos,yaw:n.yaw,moving:n.moving,stride:9});const M=v.position.distanceTo(n.pos),w=Math.max(1,M/30),b=Math.sin(_*4)*.25*w;o.scale.setScalar(w),o.position.set(n.pos.x,n.pos.y+(n.car?3:2.6)+.8*w+b,n.pos.z),o.rotation.y=_*1.6,a.scale.setScalar(Math.max(1,w*.7)*(n.car?2.2:1)),a.position.set(n.pos.x,n.pos.y+.42,n.pos.z),c.visible&&c.scale.setScalar(Math.max(1,w*.8)*(1+.12*Math.sin(_*5)))}return{state:n,place:p,go:g,stop:x,update:m,setCar:u}}const Be=i=>document.getElementById(i),ne=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),yr=i=>"★".repeat(Math.round(i))+"☆".repeat(5-Math.round(i)),Mi=i=>"€ "+Math.round(i).toLocaleString("it-IT"),ti=i=>`${i.toFixed(1).replace(".",",")}%`,Si=[];function Ne({title:i,icon:t="",body:e="",buttons:n=[{label:"OK"}],cls:o="",onOpen:s,dismissable:r=!0}){const a=document.createElement("div");a.className=`sheet ${o}`,a.innerHTML=`<div class="sheetBox" role="dialog" aria-modal="true">
    ${i?`<h2>${t?`<span class="ic">${t}</span>`:""}${ne(i)}</h2>`:""}
    <div class="sheetBody">${e}</div>
    <div class="sheetBtns"></div></div>`;const c=a.querySelector(".sheetBtns"),l=()=>{a.remove();const h=Si.indexOf(a);h>=0&&Si.splice(h,1),Si.at(-1)?.classList.remove("behind")};for(const h of n){const f=document.createElement("button");f.type="button",f.className=h.cls||"",f.textContent=h.label,h.disabled&&(f.disabled=!0),f.onclick=()=>{h.onClick?.(a)!==!1&&l()},c.appendChild(f)}return r&&a.addEventListener("pointerdown",h=>{h.target===a&&l()}),Si.at(-1)?.classList.add("behind"),Si.push(a),document.body.appendChild(a),s?.(a,l),a.close=l,a}const qa=()=>Si.length>0;function $a(){for(;Si.length;)Si.at(-1).close()}let Du=0;function yi(i,t=2600){const e=Be("toast");e.innerHTML=i,e.classList.add("on"),clearTimeout(Du),Du=setTimeout(()=>e.classList.remove("on"),t)}function hs(i){if(!i||Math.abs(i)<.05)return;const t=document.createElement("div");t.className="gain "+(i>0?"up":"down"),t.textContent=`${i>0?"+":""}${i.toFixed(1).replace(".",",")}% consenso`,document.body.appendChild(t),setTimeout(()=>t.remove(),1800)}function oy({scene:i,camera:t,controls:e,getCamera:n,groundAt:o,streets:s,character:r,applyHour:a,openCharScreen:c,canvas:l}){const h=ey(s),f=iy(i,r,(F,W)=>o(F,W)+.22);let u=null,p=!1,g=!0,x=null,m=-1,d=-99,v=20.1;const _=Be("icons"),M=[],w=(F,W)=>{const H=document.createElement("button");H.type="button",H.className=`pin ${W}`,H.innerHTML=`<span><i>${F.icon}</i></span>`,H.title=F.title,H.addEventListener("click",nt=>{nt.stopPropagation(),y(F,W)}),_.appendChild(H);const tt={spot:F,kind:W,el:H,v:new k(F.x,o(F.x,F.z)+6,F.z)};return M.push(tt),tt};Au.forEach(F=>w(F,"relic")),NM.forEach(F=>w(F,"hang")),zM.forEach(F=>w(F,"rally")),w(Mr,"dealer");const b=new k;function E(){const F=n(),W=!u||u.over;for(const H of M){let tt=!W;if(tt&&H.kind==="relic"){const nt=u.relics.includes(H.spot.id);H.el.classList.toggle("found",nt);const I=Math.hypot(f.state.pos.x-H.spot.x,f.state.pos.z-H.spot.z),P=H.el.querySelector("i");nt?P.textContent=H.spot.icon:(tt=I<160+T()*20,P.textContent="?")}if(tt&&H.kind==="hang"&&H.el.classList.toggle("done",u.visited[H.spot.id]===u.day),tt&&H.kind==="rally"&&H.el.classList.toggle("done",u.rallyDay===u.day),tt&&(b.copy(H.v).project(F),tt=b.z<1&&Math.abs(b.x)<1.1&&Math.abs(b.y)<1.1,tt)){const nt=(b.x*.5+.5)*innerWidth,I=(-b.y*.5+.5)*innerHeight,P=F.position.distanceTo(H.v),J=Math.max(.6,Math.min(1.05,380/(P+120)));H.el.style.transform=`translate(${nt}px, ${I}px) translate(-50%, -100%) scale(${J})`,H.el.style.zIndex=String(1e4-Math.round(P))}H.el.style.display=tt?"":"none"}}const T=()=>u?Gn(u.team).ret:0;function S(F,W,H){const tt=f.state.pos,nt=h.route(tt.x,tt.z,F,W,!!f.state.car);if(!nt)return yi(f.state.car?"In auto lì non ci arrivi. Scendi e vai a piedi.":"Lì non si arriva."),!1;const I=nt.pts;return f.state.car&&(I[I.length-1]=[nt.end.x,nt.end.z]),x=H||null,f.go(I,()=>{const P=x;x=null,P?.()}),g=!0,!0}function y(F,W){if(!p||qa())return;const H=Math.hypot(f.state.pos.x-F.x,f.state.pos.z-F.z)<18,tt=()=>C(F,W);H?(f.stop(),tt()):S(F.x,F.z,tt)}const A=new e_,R=new gt;function L(F,W){R.set(F/innerWidth*2-1,-(W/innerHeight)*2+1),A.setFromCamera(R,n());const H=A.ray.origin,tt=A.ray.direction;let nt=0;for(let I=1;I<6e3;I+=Math.max(1,I*.01)){const P=H.x+tt.x*I,J=H.y+tt.y*I,ct=H.z+tt.z*I;if(J<=o(P,ct)){let dt=nt,lt=I;for(let Et=0;Et<20;Et++){const _t=(dt+lt)/2;H.y+tt.y*_t<=o(H.x+tt.x*_t,H.z+tt.z*_t)?lt=_t:dt=_t}return[H.x+tt.x*lt,H.z+tt.z*lt]}nt=I}return null}let N=null;l.addEventListener("pointerdown",F=>{N={x:F.clientX,y:F.clientY,t:performance.now(),n:(N?.n||0)+1}}),l.addEventListener("pointerup",F=>{const W=N;if(N=null,!W||!p||qa()||W.n>1||Math.hypot(F.clientX-W.x,F.clientY-W.y)>10||performance.now()-W.t>450)return;const H=L(F.clientX,F.clientY);H&&S(H[0],H[1])}),l.addEventListener("pointercancel",()=>{N=null}),l.addEventListener("pointermove",F=>{N&&Math.hypot(F.clientX-N.x,F.clientY-N.y)>10&&(g=!1)});function C(F,W){if(W==="relic")return D(F,!0);if(W==="hang")return B(F);if(W==="rally")return O(F);if(W==="dealer")return q()}function D(F,W){const H=VM(u,F);if(H==null){W&&Ne({title:F.title,icon:F.icon,body:`<p>${ne(F.text)}</p><p class="muted">Già nel taccuino.</p>`});return}hs(H),et(),xn(u),Ne({title:F.title,icon:F.icon,cls:"relicCard",body:`<p class="tag">Relitto dell'amministrazione uscente</p><p>${ne(F.text)}</p><p class="ok">+${ti(H)} · aggiunto al taccuino: usalo nei comizi.</p>`,buttons:[{label:"Annotato"}]})}function B(F){const W=WM(u,F);if(W.already)return Ne({title:F.title,icon:F.icon,body:`<p>${ne(F.text)}</p><p class="muted">Per oggi qui hai già sentito tutto. Torna domani.</p>`});hs(W.gain),et(),xn(u);const H=W.got.length?W.got.map(tt=>`<li><b>${ne(tt.title)}</b><br>${ne(tt.text)} <span class="pw">${"🔥".repeat(tt.p)}</span></li>`).join(""):"<li>Oggi solo meteo e calcio. Nessuna novità sugli avversari.</li>";Ne({title:F.title,icon:F.icon,body:`<p class="muted">${ne(F.text)}</p><p>Hai offerto un giro e ascoltato:</p><ul class="notes">${H}</ul>`,buttons:[{label:"Salva nel taccuino"}]})}function O(F){if(u.rallyDay===u.day)return Ne({title:F.title,icon:"📣",body:"<p>Oggi hai già fatto il tuo comizio. La voce va risparmiata: domani un'altra piazza.</p>"});const W=u.notes.filter(tt=>!tt.used),H=`<p>Scegli fino a 3 argomenti da usare contro gli avversari. Ogni argomento si usa una volta sola.</p>
      ${W.length?`<ul class="pick">${W.map(tt=>`<li><label><input type="checkbox" value="${tt.id}"> <span><b>${ne(tt.title)}</b> ${"🔥".repeat(tt.p)}<br><small>${ne(tt.text)}</small></span></label></li>`).join("")}</ul>`:'<p class="muted">Il taccuino è vuoto: parlerai del programma (effetto modesto). Gira per il paese e frequenta i bar per trovare argomenti.</p>'}`;Ne({title:F.title,icon:"📣",body:H,onOpen:tt=>tt.querySelectorAll("input").forEach(nt=>nt.addEventListener("change",()=>{tt.querySelectorAll("input:checked").length>3&&(nt.checked=!1,yi("Massimo 3 argomenti per comizio"))})),buttons:[{label:"Più tardi",cls:"ghost"},{label:"Sali sul palco",onClick:tt=>{const nt=[...tt.querySelectorAll("input:checked")].map(P=>P.value),I=XM(u,nt);hs(I.gain),et(),xn(u),setTimeout(()=>Ne({title:"Comizio concluso",icon:"👏",body:`<p>${nt.length?"La piazza rumoreggia, qualcuno filma, qualcuno applaude.":"Discorso sul programma: educati applausi, qualche sbadiglio."}</p><p class="ok">+${ti(I.gain)} consenso</p>`}),50)}}]})}function q(){const F=W=>{const H=u.cars.includes(W.id),tt=u.car===W.id;return`<li class="car"><div><b>${ne(W.name)}</b> <span class="st">${yr(W.look+1)}</span><br><small>${ne(W.text)}</small><br><small>${Mi(W.price)} · apparenza +${W.look*5}%</small></div>
        <button type="button" data-car="${W.id}" ${tt?"disabled":""}>${tt?"In uso":H?"Usa":"Compra"}</button></li>`};Ne({title:Mr.title,icon:Mr.icon,body:`<p class="muted">${ne(Mr.text)} L'apparenza aumenta ogni guadagno di consenso. Il budget è illimitato, ma ogni euro pesa sul punteggio finale.</p><ul class="cars">${No.map(F).join("")}</ul>`,buttons:[{label:"Esci"}],onOpen:(W,H)=>W.querySelectorAll("[data-car]").forEach(tt=>tt.addEventListener("click",()=>{const nt=$M(u,tt.dataset.car);f.setCar(nt),et(),xn(u),H(),yi(`${nt.name}: ora giri in auto. Tocca 🚶 per scendere.`)}))})}function Z(){const F=u.notes;Ne({title:"Taccuino",icon:"📒",body:F.length?`<ul class="notes">${F.slice().reverse().map(W=>`<li class="${W.used?"used":""}"><b>${W.kind==="relic"?"🏚️":"🗣️"} ${ne(W.title)}</b> ${"🔥".repeat(W.p)}${W.used?" <em>usato</em>":""}<br>${ne(W.text)}</li>`).join("")}</ul>`:`<p class="muted">Ancora niente. Scopri i relitti dell'amministrazione (icone ?) e ascolta le voci nei ritrovi (☕ 🍺 🃏).</p>`})}function G(){Ne({title:"Campagna pubblicitaria",icon:"📢",body:`<p class="muted">Budget illimitato. Spese finora: <b>${Mi(u.spent)}</b>. Ripetere lo stesso canale nello stesso giorno rende meno.</p>
        <ul class="cars">${Zf.map(F=>`<li class="car"><div><b>${ne(F.name)}</b><br><small>${ne(F.text)}</small><br><small>${Mi(F.price)}</small></div><button type="button" data-ad="${F.id}">Compra</button></li>`).join("")}</ul>`,buttons:[{label:"Chiudi"}],onOpen:F=>F.querySelectorAll("[data-ad]").forEach(W=>W.addEventListener("click",()=>{const H=qM(u,W.dataset.ad);hs(H),et(),xn(u),F.querySelector(".muted b").textContent=Mi(u.spent)}))})}function st(){const F=Gn(u.team),W=u.team.map(H=>Wc.find(tt=>tt.id===H));Ne({title:u.listName,icon:"👥",body:`<h3>La tua lista</h3><ul class="team">${W.map(H=>`<li><span class="big">${H.icon}</span><div><b>${ne(H.name)}</b><br><small>${ne(H.role)}</small></div></li>`).join("")}</ul>
        <table class="traits">${Dr.map(H=>`<tr><td>${H.label}</td><td class="st">${yr(F[H.k])}</td></tr>`).join("")}
        <tr><td>Fedina</td><td>${Math.round(u.rep)}/100</td></tr><tr><td>Rischio scandalo</td><td>${Math.round(u.risk)}%</td></tr>
        <tr><td>Apparenza</td><td>${u.car?ne(No.find(H=>H.id===u.car).name):"a piedi"}</td></tr></table>
        <h3>Gli avversari</h3><ul class="team">${Nn.map(H=>`<li><span class="big">${H.icon}</span><div><b>${ne(H.name)}</b> <small>detto “${ne(H.nick)}”</small><br><small>${ne(H.bio)}</small></div></li>`).join("")}</ul>`})}function et(){if(!u)return;const F=u.votes;Be("gDay").textContent=`Giorno ${Math.min(u.day,Lr)}/${Lr}`,Be("gSpent").textContent=Mi(u.spent);const W=[["player",u.listName,"#f2b705"],["sindaco",Nn[0].name,Nn[0].color],["commendatore",Nn[1].name,Nn[1].color]],H=tt=>ti(F[tt]).replace(",0%","%");Be("gPoll").innerHTML=`<div class="strip">${W.map(([tt,,nt])=>`<i style="width:${F[tt]}%;background:${nt}"></i>`).join("")}<i style="width:${F.undecided}%;background:rgba(255,255,255,.12)"></i></div>
      <div class="nums">${W.map(([tt])=>`<span>${H(tt)}</span>`).join("")}<span style="opacity:.55">?${H("undecided")}</span></div>
      <div class="full">${W.map(([tt,nt,I])=>`<div class="pb ${tt==="player"?"me":""}" style="--c:${I}"><span class="nm">${ne(nt)}</span><span class="v">${ti(F[tt])}</span></div>`).join("")}<div class="pb und" style="--c:#888"><span class="nm">Indecisi</span><span class="v">${ti(F.undecided)}</span></div></div>`,Be("bCar").textContent=f.state.car?"🚶":"🚗",Be("bCar").title=f.state.car?"Scendi dall'auto":"Sali in auto"}function V(){const F=Pu(u);return`${String(Math.floor(F)).padStart(2,"0")}:${String(Math.floor(F%1*60)).padStart(2,"0")}`}Be("hud").onclick=()=>Be("hud").classList.toggle("open"),Be("bNotes").onclick=()=>p&&Z(),Be("bAds").onclick=()=>p&&G(),Be("bList").onclick=()=>p&&st(),Be("bCenter").onclick=()=>{g=!0},Be("bCar").onclick=()=>{if(!p)return;if(f.state.car){f.stop(),f.setCar(null),u.car=null,et(),xn(u),yi("A piedi: si arriva anche nei vicoli.");return}const F=u.cars.at(-1);if(!F){yi("Non hai un'auto. Vai all'autosalone 🚗 (a est, verso la statale).");return}const W=No.find(H=>H.id===F);u.car=W.id,f.stop(),f.setCar(W),et(),xn(u),yi(`In auto: ${W.name}. Solo sulle strade carrabili.`)};function Y(){p=!1,$a(),document.body.classList.add("menu");const F=HM();Ne({cls:"title",dismissable:!1,body:`<h1>${IM}</h1><p class="sub">${UM}</p><p class="lead">Un gioco satirico sulla politica di paese. Acquedolci, 30 giorni al voto, tre candidati: uno sei tu.</p>`,buttons:[...F&&!F.over?[{label:`Continua · giorno ${F.day}`,onClick:()=>{vt(F)}}]:[],{label:"Nuova partita",cls:F&&!F.over?"ghost":"",onClick:()=>{at()}}]})}function at(){c(()=>rt())}function rt(){const F=[],W=H=>`<li class="ass" data-id="${H.id}"><span class="big">${H.icon}</span><div class="who"><b>${ne(H.name)}</b><small>${ne(H.role)}</small>
      <table>${Dr.map(tt=>`<tr><td>${tt.label}</td><td class="st">${yr(H[tt.k])}</td></tr>`).join("")}</table></div></li>`;Ne({title:"Componi la lista",icon:"🗳️",cls:"wide",dismissable:!1,body:`<label class="field">Nome della lista <input id="listName" maxlength="28" value="Acquedolci Rinasce"></label>
        <p class="muted">Scegli ${Ro} assessori. Le stelle pesano sul gioco: Popolarità (consenso), Ricchezza (le spese pesano meno), Fama (1 criminale · 5 brav'uomo: meno scandali), Carisma (comizi), Rete (più voci nei bar).</p>
        <p class="teamSum" id="teamSum"></p>
        <ul class="assList">${Wc.map(W).join("")}</ul>`,buttons:[{label:"Presenta la lista",cls:"go",disabled:!0,onClick:H=>{const tt=H.querySelector("#listName").value.trim()||"Acquedolci Rinasce";pt(kM(tt,F.slice()))}}],onOpen:H=>{const tt=H.querySelector(".go"),nt=()=>{const I=Gn(F);H.querySelector("#teamSum").innerHTML=F.length?Dr.map(P=>`${P.label} <b class="st">${yr(I[P.k])}</b>`).join(" · ")+` <em>(${F.length}/${Ro})</em>`:`Nessun assessore scelto (0/${Ro})`,tt.disabled=F.length!==Ro};H.querySelectorAll(".ass").forEach(I=>I.addEventListener("click",()=>{const P=I.dataset.id,J=F.indexOf(P);if(J>=0)F.splice(J,1);else if(F.length<Ro)F.push(P);else return yi(`La lista ha ${Ro} posti`);I.classList.toggle("sel",J<0),nt()})),nt()}})}function pt(F){Ne({title:"Acquedolci, oggi",icon:"📰",dismissable:!1,body:BM.map(W=>`<p>${ne(W)}</p>`).join("")+`<p class="muted">Tocca la mappa per muoverti. Scopri i relitti (?), ascolta le voci nei ritrovi, fai un comizio al giorno nelle piazze (📣), compra pubblicità (📢) e, se vuoi, un'auto (🚗). Il budget è illimitato: il conto lo paga il punteggio.</p>`,buttons:[{label:"Inizia la campagna",onClick:()=>{xn(F),vt(F)}}]})}function vt(F){u=F,$a(),document.body.classList.remove("menu"),document.body.classList.add("playing");const W=h.nearest(Xa.x,Xa.z,!1)||Xa;f.place(W.x,W.z),f.setCar(u.car?No.find(H=>H.id===u.car):null),e.target.copy(f.state.pos),t.position.set(f.state.pos.x+35,f.state.pos.y+95,f.state.pos.z+70),e.update(),g=!0,p=!0,m=-1,et(),Be("hint").classList.add("show"),setTimeout(()=>Be("hint").classList.remove("show"),7e3)}function yt(){p=!1;const F={...u.votes},W=ZM(u);if(xn(u),et(),u.over)return ht();const H=tt=>{const nt=u.votes[tt]-F[tt];return`${nt>=0?"+":""}${nt.toFixed(1).replace(".",",")}`};Ne({title:`Fine del giorno ${u.day-1}`,icon:"🌙",dismissable:!1,body:`${W.scandal?`<p class="bad"><b>Scandalo!</b> ${ne(W.scandal)}</p>`:""}
        <table class="traits"><tr><td>${ne(u.listName)}</td><td>${ti(u.votes.player)} (${H("player")})</td></tr>
        <tr><td>${Nn[0].name}</td><td>${ti(u.votes.sindaco)} (${H("sindaco")})</td></tr>
        <tr><td>${Nn[1].name}</td><td>${ti(u.votes.commendatore)} (${H("commendatore")})</td></tr>
        <tr><td>Spese</td><td>${Mi(u.spent)}</td></tr></table>
        <p class="muted">Mancano ${Lr-u.day+1} giorni al voto.</p>`,buttons:[{label:"Nuovo giorno",onClick:()=>{p=!0}}]})}function ht(){if(p=!1,$a(),u.over.kind==="venduto"){Ne({title:"Hai venduto la candidatura",icon:"🤝",cls:"title",dismissable:!1,body:`<p>Assessorato “di peso”, cena di pesce ogni venerdì. Il Commendatore vince al primo turno. Acquedolci resta com'era: tu, un po' più sazio.</p><p class="bad">Punteggio: 0</p>`,buttons:[{label:"Ricomincia",onClick:()=>{Ru(),Y()}}]});return}const F=JM(u),W={player:u.listName,sindaco:Nn[0].name,commendatore:Nn[1].name},H=F.winner==="player";Ne({title:H?"Sei il nuovo sindaco!":"Le urne hanno parlato",icon:H?"🏆":"🗳️",cls:"title",dismissable:!1,body:`<table class="traits">${Object.entries(F.res).sort((tt,nt)=>nt[1]-tt[1]).map(([tt,nt])=>`<tr><td>${ne(W[tt])}</td><td>${ti(nt)}</td></tr>`).join("")}</table>
        <p>${H?"Acquedolci ha scelto di cambiare. Ora arriva la parte difficile: mantenere le promesse.":`Vince ${ne(W[F.winner])}. Il paese resta com'era, ma tu hai fatto rumore.`}</p>
        <table class="traits"><tr><td>Spese totali</td><td>${Mi(u.spent)}</td></tr><tr><td>Fedina</td><td>${Math.round(u.rep)}/100</td></tr><tr><td><b>Punteggio</b></td><td><b>${F.score.toLocaleString("it-IT")}</b></td></tr></table>`,buttons:[{label:"Nuova partita",onClick:()=>{Ru(),Y()}}]}),u.over.result=F,xn(u)}function X(F){p=!1;const W=H=>[H.cost?Mi(H.cost):""].filter(Boolean).join(" ");Ne({title:F.who,icon:F.icon,dismissable:!1,cls:"quest",body:`<p>${ne(F.text)}</p>`,buttons:[F.no,F.yes].map((H,tt)=>({label:H.label+(W(H),""),cls:tt?"":"ghost",onClick:()=>{const nt=jM(u,F,tt===1);if(xn(u),et(),u.over){ht();return}nt.cons&&hs(nt.cons),nt.msg&&yi(ne(nt.msg),4200),p=!0}}))})}let Q=0;function z(F){if(!u)return;let W=Pu(u);m<0&&(m=v),m>=24&&W<24&&m-24>W&&(m-=24),m>W+1.2&&(W+=24);const H=W-m;H>.15?m+=Math.min(H,F*6):m=W,m>=24&&W>=24&&m>=W-.001&&(m-=24),Math.abs(m-d)>.002&&(d=m,a(m))}function ft(F,W){if(f.update(F,t,W),z(F),g&&u){const H=f.state.pos,tt=e.target,nt=Math.min(1,F*3.5),I=(H.x-tt.x)*nt,P=(H.y-tt.y)*nt,J=(H.z-tt.z)*nt;tt.x+=I,tt.y+=P,tt.z+=J,t.position.x+=I,t.position.y+=P,t.position.z+=J}if(E(),!(!u||!p||qa())){for(const H of Au)if(!u.relics.includes(H.id)&&Math.hypot(f.state.pos.x-H.x,f.state.pos.z-H.z)<22+T()*3){D(H);return}if(KM(u,F)){yt();return}if(u.nextQuest<=0){u.nextQuest=70+Math.random()*80;const H=YM(u);if(H){X(H);return}}Q+=F,Q>.5&&(Q=0,Be("gClock").textContent=V(),Math.random()<.05&&xn(u))}}return{titleScreen:Y,update:ft,get state(){return u},player:f,nav:h,goTo:S,setTitleHour(F){v=F}}}const qc=[{label:"chiara",hex:16109728},{label:"media",hex:14723184},{label:"olivacea",hex:12616794},{label:"scura",hex:9128490},{label:"molto sc.",hex:5121296}],$c=[{label:"nero",hex:1575940},{label:"castano",hex:4860432},{label:"biondo",hex:13934672},{label:"rosso",hex:9054232},{label:"grigio",hex:8947848},{label:"bianco",hex:15261912}],Yc=[{label:"bianco",hex:15789284},{label:"azzurro",hex:4884684},{label:"rosso",hex:13383712},{label:"verde",hex:3828280},{label:"giallo",hex:15253576},{label:"arancio",hex:15231008},{label:"viola",hex:7354504},{label:"nero",hex:1579032}],jc=[{label:"blu jeans",hex:2768746},{label:"nero",hex:1579032},{label:"grigio",hex:5789784},{label:"beige",hex:13150320},{label:"verde",hex:3821616},{label:"marrone",hex:4861464}],Jf=[{label:"nessuno",hex:null,style:null},{label:"berretta",hex:1710618,style:"beanie"},{label:"cappello",hex:4860432,style:"fedora"},{label:"coppola",hex:3813424,style:"cap"},{label:"basco",hex:1710688,style:"beret"}],Qf=[{label:"nessuno",hex:null,lens:null},{label:"scuri",hex:657930,lens:"dark"},{label:"chiari",hex:1723018,lens:"clear"}],td=[{label:"corti",style:"short"},{label:"lunghi",style:"long"},{label:"chignon",style:"bun"},{label:"stempiato",style:"bald"}],ed="acq-char",Zc={name:"Giocatore",skin:0,hair:0,hstyle:0,shirt:0,pant:0,slim:!1,hat:0,glass:0};function sy(){try{return{...Zc,...JSON.parse(localStorage.getItem(ed)||"{}")}}catch{return{...Zc}}}function ry(i){try{localStorage.setItem(ed,JSON.stringify(i))}catch{}}function En(i,t){const e=new Ft(i,new Ot({color:t}));return e.castShadow=!0,e}const Ye=qe.headR,Lo=qe.headY;function ay(i,t,e){switch(t){case"beanie":{const n=new be(Ye*1.16,16,10,0,Math.PI*2,0,Math.PI*.55),o=En(n,e);o.position.y=Lo+.05,i.add(o);const s=En(new Ui(Ye*1.02,.022,8,20),e);s.rotation.x=Math.PI/2,s.position.y=Lo+.07,i.add(s);break}case"fedora":{const n=new re;n.add(En(new he(Ye*.78,Ye*.95,.15,16),e));const o=En(new he(Ye*.96,Ye*.97,.03,16),1708560);o.position.y=-.045,n.add(o);const s=En(new he(Ye*1.75,Ye*1.75,.016,20),e);s.position.y=-.07,n.add(s),n.position.y=Lo+.18,i.add(n);break}case"cap":{const n=new re,o=new be(Ye*1.18,16,8,0,Math.PI*2,0,Math.PI*.45);o.scale(1,.6,1.15),n.add(En(o,e));const s=En(new he(Ye*.75,Ye*.75,.014,16,1,!1,-Math.PI/2,Math.PI),e);s.position.set(0,.005,Ye*.72),n.add(s),n.position.y=Lo+.115,n.rotation.x=.12,i.add(n);break}case"beret":{const n=new be(Ye*1.2,16,8);n.scale(1,.32,1);const o=En(n,e);o.position.set(.03,Lo+.14,-.01),o.rotation.z=-.15,i.add(o);break}}}function cy(i,t,e){const n=Ye*.86+.03,o=Lo+.018;for(const r of[1,-1]){const a=En(new Ui(.034,.006,6,16),1381653);a.position.set(r*.048,o,n),i.add(a);const c=new Ft(new Is(.032,16),new Ot({color:t,transparent:!e,opacity:e?1:.35}));c.position.set(r*.048,o,n+.001),i.add(c);const l=En(new kt(.006,.006,.13),1381653);l.position.set(r*Ye*.9,o+.01,n-.07),i.add(l)}const s=En(new kt(.03,.006,.006),1381653);s.position.set(0,o+.01,n),i.add(s)}function Kc(i){const t=!!i.slim,e={skin:qc[i.skin]?.hex??qc[0].hex,hair:$c[i.hair]?.hex??$c[0].hex,shirt:Yc[i.shirt]?.hex??Yc[0].hex,pants:jc[i.pant]?.hex??jc[0].hex},n=td[i.hstyle??0]?.style||"short",o=new Ot({vertexColors:!0}),s=g=>{const x=new Ft(bM(g,e),o);return x.castShadow=!0,x},r=new re;r.name="player";const a=s(qf({hair:n,female:n==="long"||n==="bun",slim:t}));a.name="torso",r.add(a);const c=t?.86:1,l=$f({slim:t});for(const[g,x]of[["armLPivot",1],["armRPivot",-1]]){const m=new re;m.name=g,m.position.set(x*qe.shoulderX*c,qe.shoulderY,0),m.rotation.z=x*.06,m.add(s(l.clone())),r.add(m)}const h=MM(),f=yM();for(const[g,x,m]of[["thighLPivot","shinLPivot",1],["thighRPivot","shinRPivot",-1]]){const d=new re;d.name=g,d.position.set(m*qe.hipX*c,qe.hipY,0),d.add(s(h.clone()));const v=new re;v.name=x,v.position.set(0,-.42,0),v.add(s(f.clone())),d.add(v),r.add(d)}const u=Jf[i.hat??0],p=Qf[i.glass??0];return u?.style&&ay(r,u.style,u.hex),p?.lens&&cy(r,p.hex,p.lens==="dark"),r.scale.setScalar(1.12),r}function nd(i,t){const e=Math.sin(t)*.42,n=Math.cos(t)*.32,o=i.getObjectByName("thighLPivot"),s=i.getObjectByName("thighRPivot"),r=i.getObjectByName("armLPivot"),a=i.getObjectByName("armRPivot");if(o){o.rotation.x=-e;const c=o.getObjectByName("shinLPivot");c&&(c.rotation.x=Math.max(0,-Math.sin(t))*.38+.06)}if(s){s.rotation.x=e;const c=s.getObjectByName("shinRPivot");c&&(c.rotation.x=Math.max(0,Math.sin(t))*.38+.06)}r&&(r.rotation.x=n),a&&(a.rotation.x=-n)}function ly(i,t){const e=Math.sin(t/1200)*.025,n=i.getObjectByName("armLPivot"),o=i.getObjectByName("armRPivot"),s=i.getObjectByName("thighLPivot")?.getObjectByName("shinLPivot"),r=i.getObjectByName("thighRPivot")?.getObjectByName("shinRPivot"),a=i.getObjectByName("thighLPivot"),c=i.getObjectByName("thighRPivot");a&&(a.rotation.x=0),c&&(c.rotation.x=0),s&&(s.rotation.x=.06),r&&(r.rotation.x=.06),n&&(n.rotation.x=e),o&&(o.rotation.x=-e)}function hy(i,t){let e=sy(),n=Kc(e);i.add(n),n.visible=!1;let o=0;function s(){i.remove(n),n=Kc(e),n.visible=!1,i.add(n)}function r(a,c){if(!c.on){n.visible=!1;return}n.visible=!0;const{x:l,z:h}=c.pos,f=t(l,h);n.rotation.y=c.yaw,c.moving??(c.keys?.KeyW||c.keys?.ArrowUp||c.keys?.KeyS||c.keys?.ArrowDown||Math.hypot(c.joy?.x||0,c.joy?.y||0)>.1)?(o+=a*(c.stride||5.5),nd(n,o),n.position.set(l,f+Math.abs(Math.sin(o))*.014,h)):(ly(n,performance.now()),n.position.set(l,f,h))}return{get data(){return e},update:r,rebuild:s,applyData(a){e={...Zc,...a},ry(e),s()},playerMesh:()=>n}}const Jt=i=>document.getElementById(i),ei=i=>{Jt("lmsg").textContent=i},Br=matchMedia("(pointer: coarse)").matches;Br&&document.body.classList.add("touch");const ke=new lf({canvas:Jt("c"),antialias:!0});ke.setPixelRatio(Math.min(devicePixelRatio,2));ke.setSize(innerWidth,innerHeight);ke.shadowMap.enabled=!0;ke.shadowMap.type=Br?tl:Iu;const Te=new qr,id=13622760;Te.background=null;Te.fog=new fl(id,26e-6);ke.autoClear=!1;const hi=new qr;hi.background=new Rt(id);hi.fog=Te.fog;const Tn=new on(55,innerWidth/innerHeight,50,25e4),ue=new on(55,innerWidth/innerHeight,.5,12e3),zn=new Ds(-1,1,1,-1,-8e3,15e3),oi=new Ds(-1,1,1,-1,-8e3,25e4),od=new Mf(14675711,9075302,1.25),sn=new Ml(16773852,2.1);sn.position.set(300,500,350);sn.castShadow=!0;sn.shadow.mapSize.set(Br?1024:2048,Br?1024:2048);Object.assign(sn.shadow.camera,{left:-300,right:300,top:300,bottom:-300,near:10,far:1500});sn.shadow.bias=-5e-4;const sd=new Ml(10466006,0);Te.add(od,sn,sn.target,sd);const rd=N_(hi);L_(2027,5,20);async function uy(){ei("modello degli edifici");const[i,t,e,n,o]=await Promise.all([fetch("data/model.json").then(R=>R.json()),fetch("data/dtm.json").then(R=>R.json()),fetch("data/ortho.json").then(R=>R.json()),fetch("data/streets.json").then(R=>R.json()),fetch("data/signs.json").then(R=>R.ok?R.json():null).catch(()=>null)]),s=await fetch("data/ortho-hr.json").then(R=>R.ok?R.json():null).catch(()=>null),r=atob(t.data),a=new Uint8Array(r.length);for(let R=0;R<r.length;R++)a[R]=r.charCodeAt(R);const c=new Uint16Array(a.buffer),l=new Float32Array(c.length),h=t.offset||0;for(let R=0;R<c.length;R++)l[R]=c[R]/10+h;const f=E_(t,l,i.origin),u=I1(n,f),p=u.groundAt;for(const R of i.buildings)for(let L=0;L<R.r.length;L+=2){const N=R.r[L],C=R.r[L+1];u.edgeDist(N,C)<1.5&&(R.b=Math.min(R.b,u.roadAt(N,C)-.2))}ei("ortofoto 2022");const g=new Bc,x=new Map;await Promise.all(e.tiles.map(R=>new Promise(L=>{g.load(`data/ortho/${R.file}`,N=>{N.colorSpace=pe,N.anisotropy=ke.capabilities.getMaxAnisotropy(),x.set(R.file,N),L()},void 0,()=>L())})));const m=await fetch("data/landcover.json").then(R=>R.ok?R.json():null).catch(()=>null);if(m){const R=await new Bc().loadAsync("data/landcover.png").catch(()=>null);R&&y_(R,m,i.origin)}ei("terreno");const d={xmin:t.xmin,xmax:t.xmin+(t.width-1)*t.step,ymax:t.ymax,ymin:t.ymax-(t.height-1)*t.step};Te.add(T_({orthoMeta:e,textures:x,heightAt:u.terrainAt,baseAt:u.baseAt,refine:u.refine,origin:i.origin,bounds:d}));const v=_u(sn.position.clone().sub(sn.target.position));Te.add(v.mesh),ei("litorale ed Eolie");const _=_u(sn.position.clone().sub(sn.target.position),{far:!0});hi.add(_.mesh);const M=t,w={x0:M.xmin-i.origin[0],x1:M.xmin+M.width*M.step-i.origin[0],z0:i.origin[1]-M.ymax,z1:i.origin[1]-M.ymax+M.height*M.step},b=await lM(i.origin,w);hi.add(b.group),ei("edifici");const{group:E,footprints:T}=t1({model:i,orthoMeta:e,textures:x,facadeMats:H_()});Te.add(E);const S=n1(T);ei("strade"),Te.add(C1(n,p,S,u)),ei("cartelli stradali"),o&&Te.add($1(o,p)),ei("luoghi d'interesse"),Te.add(eM(i,p)),ei("alberi");const y=g1(i.trees||[]);Te.add(y.group);const A=s?nM(s,i.origin,ke):{update(){}};return{model:i,heightAt:p,grade:u,collider:S,trees:y,streets:n,hr:A,water:v,farSea:_}}const{model:_y,heightAt:Zo,grade:fy,collider:My,trees:dy,streets:Cl,hr:py,water:ad,farSea:cd}=await uy();Jt("loader").classList.add("hide");const Rl=xM(Cl.roads,Zo),Pl=DM(Cl.roads,(i,t)=>Zo(i,t)+.32);Te.add(Rl.group,Pl.group);const ld=(i,t)=>c1(i,t,Zo(i,t)),kr=hy(Te,(i,t)=>ld(i,t)+.22);vy(kr);const Oe=new o_(ue,ke.domElement);Oe.enableDamping=!0;Oe.maxPolarAngle=Math.PI*.495;Oe.minDistance=8;Oe.maxDistance=3500;const Hr=Zo(0,0);Oe.target.set(-60,Hr,-20);ue.position.set(-10,Hr+90,190);Oe.update();Oe.minDistance=7;Oe.maxDistance=1400;Oe.maxPolarAngle=1.25;Oe.screenSpacePanning=!1;const an={names:!1,hour:11,lights:!0,sharp:!0,ortho:!1},Jc=dM(ke);try{Object.assign(an,JSON.parse(localStorage.getItem("acq-settings")||"{}"))}catch{}const Ll=()=>{try{localStorage.setItem("acq-settings",JSON.stringify(an))}catch{}},hd=new Set;for(const i of[Te,hi])i.traverse(t=>{const e=t.material;t.isMesh&&e?.isMeshBasicMaterial&&e.blending===to&&hd.add(e)});const my=Te.getObjectByName("lamps"),gy=Te.getObjectByName("plaza-props"),xy=Te.getObjectByName("piazza-ve3"),Gr={sky:rd,sun:sn,hemi:od,moonLight:sd,fog:Te.fog,bgScene:hi,basics:[...hd],waters:[ad.uniforms,cd.uniforms],lights:!0,sunDir:new k(0,1,0)};let Dl=9;function qo(i){Dl=i,Gr.lights=an.lights,O_(i,Gr),my?.userData.night?.(Pi.value),gy?.userData.night?.(Pi.value),xy?.userData.night?.(Pi.value)}Jt("optLights").checked=an.lights;Jt("optLights").onchange=i=>{an.lights=i.target.checked,Ll(),qo(Dl)};Jt("optSharp").checked=an.sharp;Jt("optSharp").onchange=i=>{an.sharp=i.target.checked,Ll()};Jt("optOrtho").checked=an.ortho;Jt("optOrtho").onchange=i=>{an.ortho=i.target.checked,Ll()};Jt("bSet").onclick=()=>{const i=Jt("settings");i.hidden=!i.hidden,Jt("bSet").setAttribute("aria-expanded",String(!i.hidden)),Jt("bSet").classList.toggle("on",!i.hidden)};qo(20.1);try{localStorage.removeItem("acq-gkey")}catch{}function vy(i){const t=h=>h!=null?"#"+h.toString(16).padStart(6,"0"):null,e=(h,f,u,p,g)=>{const x=Jt(h);f.forEach((m,d)=>{const v=document.createElement("button");v.type="button",v.className="swatch"+(u()===d?" sel":""),m.hex!=null?v.style.background=t(m.hex):v.classList.add("swatch-none"),v.title=m.label,v.addEventListener("click",()=>{p(d),x.querySelectorAll(".swatch").forEach((_,M)=>_.classList.toggle("sel",M===d)),g&&g()}),x.appendChild(v)})};let n={...i.data},o=null;const s=()=>{if(o)return o;const h=Jt("charCanvas"),f=new lf({canvas:h,antialias:!0,alpha:!0});f.setPixelRatio(Math.min(devicePixelRatio,2)),f.setSize(h.width,h.height,!1),f.outputColorSpace=pe;const u=new qr;u.add(new Mf(16777215,9075302,1.6));const p=new Ml(16773852,2.2);p.position.set(2,3,4),u.add(p);const g=new on(30,h.width/h.height,.1,20);g.position.set(0,1.6,3.4),g.lookAt(0,1.2,0);const x=new Ft(new Is(.6,32),new Bn({color:0,transparent:!0,opacity:.12}));x.rotation.x=-Math.PI/2,u.add(x),o={r:f,sc:u,cam:g,mesh:null,t:0,on:!1};const m=()=>{o.on&&(requestAnimationFrame(m),o.t+=.016,o.mesh&&(o.mesh.rotation.y=Math.sin(o.t*.7)*.7,nd(o.mesh,o.t*2.2)),f.render(u,g))};return o.start=()=>{o.on||(o.on=!0,m())},o},r=()=>{const h=s();h.mesh&&h.sc.remove(h.mesh),h.mesh=Kc(n),h.sc.add(h.mesh),h.start()},a=(h,f,u,p,g)=>{const x=Jt(h);f.forEach((m,d)=>{const v=document.createElement("button");v.type="button",v.className="chip"+(u()===d?" sel":""),v.textContent=m.label,v.addEventListener("click",()=>{p(d),x.querySelectorAll(".chip").forEach((_,M)=>_.classList.toggle("sel",M===d)),g?.()}),x.appendChild(v)})},c=()=>{n={...i.data},Jt("charName").value=n.name||"Giocatore",Jt("charSlim").checked=!!n.slim,["skinPicker","hairPicker","hstylePicker","shirtPicker","pantPicker","hatPicker","glassPicker"].forEach(h=>Jt(h).innerHTML=""),e("skinPicker",qc,()=>n.skin,h=>{n.skin=h},r),e("hairPicker",$c,()=>n.hair,h=>{n.hair=h},r),a("hstylePicker",td,()=>n.hstyle??0,h=>{n.hstyle=h},r),e("shirtPicker",Yc,()=>n.shirt,h=>{n.shirt=h},r),e("pantPicker",jc,()=>n.pant,h=>{n.pant=h},r),e("hatPicker",Jf,()=>n.hat??0,h=>{n.hat=h},r),e("glassPicker",Qf,()=>n.glass??0,h=>{n.glass=h},r),r(),Jt("charScreen").hidden=!1},l=()=>{n.name=Jt("charName").value.trim()||"Giocatore",n.slim=Jt("charSlim").checked,i.applyData(n),Jt("charScreen").hidden=!0,o&&(o.on=!1);const h=i.onConfirm;i.onConfirm=null,h?.()};return Jt("charConfirm").onclick=l,Jt("charName").addEventListener("keydown",h=>{h.key==="Enter"&&l()}),Jt("charSlim").onchange=h=>{n.slim=h.target.checked,r()},Jt("bChar").onclick=()=>{Jt("settings").hidden=!0,Jt("bSet").classList.remove("on"),c()},i.open=h=>{i.onConfirm=h,c()},{openScreen:c}}const no=uM({camera:ue,controls:Oe,heightAt:Zo,setTime:qo,onEnd(){qo(20.1),Rs.setTitleHour(20.1),Oe.target.set(-60,Hr,-20),ue.position.set(-10,Hr+90,190),Oe.update(),Rs.titleScreen()}});Jt("bIntro").onclick=()=>{Jt("settings").hidden=!0,Jt("bSet").classList.remove("on"),no.start()};const Rs=oy({scene:Te,camera:ue,controls:Oe,canvas:ke.domElement,groundAt:ld,streets:Cl,character:kr,applyHour:qo,getCamera:()=>an.ortho&&!no.active?zn:ue,openCharScreen:i=>kr.open(i)});Jt("bNewGame").onclick=()=>{Jt("settings").hidden=!0,Jt("bSet").classList.remove("on"),Rs.titleScreen()};no.start();const us=new t_;function ud(){requestAnimationFrame(ud);const i=Math.min(.05,us.getDelta());no.active?no.update(i):(Oe.update(),Rs.update(i,us.elapsedTime));const t=Oe.target,e=Gr.sunDir.y>.02?Gr.sunDir:new k(.4,.6,.45).normalize();sn.position.set(t.x+e.x*800,t.y+e.y*800,t.z+e.z*800),sn.target.position.copy(t),dy.update(ue),rd.follow(ue,us.elapsedTime),py.update(t),ad.update(us.elapsedTime),cd.update(us.elapsedTime,ue),Rl.update(i,ue),Pl.update(i,ue),Tn.position.copy(ue.position),Tn.quaternion.copy(ue.quaternion),(Tn.fov!==ue.fov||Tn.aspect!==ue.aspect)&&(Tn.fov=ue.fov,Tn.aspect=ue.aspect,Tn.updateProjectionMatrix());const n=an.ortho&&!no.active;if(n){const a=Math.max(1,ue.position.distanceTo(Oe.target))*Math.tan(ue.fov*Math.PI/360),c=a*(innerWidth/innerHeight);zn.left=-c,zn.right=c,zn.top=a,zn.bottom=-a,zn.position.copy(ue.position),zn.quaternion.copy(ue.quaternion),zn.updateProjectionMatrix(),oi.left=-c,oi.right=c,oi.top=a,oi.bottom=-a,oi.position.copy(ue.position),oi.quaternion.copy(ue.quaternion),oi.updateProjectionMatrix()}const o=n?zn:ue,s=n?oi:Tn;ke.setRenderTarget(an.sharp?Jc.target:null),ke.clear(),ke.render(hi,s),ke.clearDepth(),ke.render(Te,o),an.sharp&&Jc.present()}ud();addEventListener("resize",()=>{ke.setSize(innerWidth,innerHeight),Jc.resize(),ue.aspect=innerWidth/innerHeight,ue.updateProjectionMatrix(),Tn.aspect=innerWidth/innerHeight,Tn.updateProjectionMatrix()});window.__acq={camera:ue,controls:Oe,game:Rs,heightAt:Zo,grade:fy,HR:As,setHour:qo,getHour:()=>Dl,scene:Te,renderer:ke,bgScene:hi,bgCamera:Tn,settings:an,intro:no,orthoCamera:zn,bgOrthoCamera:oi,traffic:Rl,npcs:Pl,character:kr};
