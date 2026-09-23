(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const _a="180",wu=0,Wa=1,Au=2,vl=1,Ru=2,Ln=3,$n=0,We=1,Dn=2,Yn=0,Vi=1,Xa=2,qa=3,Ya=4,Cu=5,ci=100,Pu=101,Lu=102,Du=103,Iu=104,Uu=200,Nu=201,Fu=202,zu=203,vo=204,Mo=205,Ou=206,Bu=207,ku=208,Hu=209,Vu=210,Gu=211,Wu=212,Xu=213,qu=214,So=0,yo=1,Eo=2,qi=3,To=4,bo=5,wo=6,Ao=7,Ml=0,Yu=1,$u=2,Nn=0,Ku=1,Zu=2,ju=3,Ju=4,Qu=5,th=6,eh=7,Sl=300,Yi=301,$i=302,Ro=303,Co=304,_s=306,Po=1e3,di=1001,Lo=1002,De=1003,nh=1004,Ar=1005,gn=1006,Rs=1007,fi=1008,Sn=1009,yl=1010,El=1011,fr=1012,xa=1013,pi=1014,_n=1015,Mr=1016,va=1017,Ma=1018,pr=1020,Tl=35902,bl=35899,wl=1021,Al=1022,dn=1023,mr=1026,gr=1027,xs=1028,Sa=1029,Rl=1030,ya=1031,Ea=1033,ns=33776,is=33777,rs=33778,ss=33779,Do=35840,Io=35841,Uo=35842,No=35843,Fo=36196,zo=37492,Oo=37496,Bo=37808,ko=37809,Ho=37810,Vo=37811,Go=37812,Wo=37813,Xo=37814,qo=37815,Yo=37816,$o=37817,Ko=37818,Zo=37819,jo=37820,Jo=37821,Qo=36492,ta=36494,ea=36495,na=36283,ia=36284,ra=36285,sa=36286,ih=3200,rh=3201,Cl=0,sh=1,In="",Ze="srgb",Ki="srgb-linear",hs="linear",oe="srgb",Ei=7680,$a=519,oh=512,ah=513,ch=514,Pl=515,lh=516,uh=517,hh=518,dh=519,Ka=35044,Za="300 es",xn=2e3,ds=2001;class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ja=1234567;const hr=Math.PI/180,_r=180/Math.PI;function Qi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]).toLowerCase()}function qt(n,t,e){return Math.max(t,Math.min(e,n))}function Ta(n,t){return(n%t+t)%t}function fh(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function ph(n,t,e){return n!==t?(e-n)/(t-n):0}function dr(n,t,e){return(1-e)*n+e*t}function mh(n,t,e,i){return dr(n,t,1-Math.exp(-e*i))}function gh(n,t=1){return t-Math.abs(Ta(n,t*2)-t)}function _h(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function xh(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function vh(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Mh(n,t){return n+Math.random()*(t-n)}function Sh(n){return n*(.5-Math.random())}function yh(n){n!==void 0&&(ja=n);let t=ja+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Eh(n){return n*hr}function Th(n){return n*_r}function bh(n){return(n&n-1)===0&&n!==0}function wh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ah(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Rh(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+i)/2),u=o((t+i)/2),f=s((t-i)/2),h=o((t-i)/2),d=s((i-t)/2),_=o((i-t)/2);switch(r){case"XYX":n.set(a*u,c*f,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*f,a*l);break;case"ZXZ":n.set(c*f,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*_,c*d,a*l);break;case"YXY":n.set(c*d,a*u,c*_,a*l);break;case"ZYZ":n.set(c*_,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ki(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function He(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ch={DEG2RAD:hr,RAD2DEG:_r,generateUUID:Qi,clamp:qt,euclideanModulo:Ta,mapLinear:fh,inverseLerp:ph,lerp:dr,damp:mh,pingpong:gh,smoothstep:_h,smootherstep:xh,randInt:vh,randFloat:Mh,randFloatSpread:Sh,seededRandom:yh,degToRad:Eh,radToDeg:Th,isPowerOfTwo:bh,ceilPowerOfTwo:wh,floorPowerOfTwo:Ah,setQuaternionFromProperEuler:Rh,normalize:He,denormalize:ki};class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class On{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],_=s[o+2],v=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=_,t[e+3]=v;return}if(f!==v||c!==h||l!==d||u!==_){let m=1-a;const p=c*h+l*d+u*_+f*v,S=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const A=Math.sqrt(b),T=Math.atan2(A,p*S);m=Math.sin(m*T)/A,a=Math.sin(a*T)/A}const M=a*S;if(c=c*m+h*M,l=l*m+d*M,u=u*m+_*M,f=f*m+v*M,m===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=A,l*=A,u*=A,f*=A}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],_=s[o+3];return t[e]=a*_+u*f+c*d-l*h,t[e+1]=c*_+u*h+l*f-a*d,t[e+2]=l*_+u*d+a*h-c*f,t[e+3]=u*_-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),h=c(i/2),d=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=h*u*f+l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f+h*d*_;break;case"YZX":this._x=h*u*f+l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f-h*d*_;break;case"XZY":this._x=h*u*f-l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,i=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ja.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ja.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+c*l+o*f-a*u,this.y=i+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Cs.copy(this).projectOnVector(t),this.sub(Cs)}reflect(t){return this.sub(Cs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cs=new O,Ja=new On;class kt{constructor(t,e,i,r,s,o,a,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],v=r[0],m=r[3],p=r[6],S=r[1],b=r[4],M=r[7],A=r[2],T=r[5],R=r[8];return s[0]=o*v+a*S+c*A,s[3]=o*m+a*b+c*T,s[6]=o*p+a*M+c*R,s[1]=l*v+u*S+f*A,s[4]=l*m+u*b+f*T,s[7]=l*p+u*M+f*R,s[2]=h*v+d*S+_*A,s[5]=h*m+d*b+_*T,s[8]=h*p+d*M+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*s,d=l*s-o*c,_=e*f+i*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=f*v,t[1]=(r*l-u*i)*v,t[2]=(a*i-r*o)*v,t[3]=h*v,t[4]=(u*e-r*c)*v,t[5]=(r*s-a*e)*v,t[6]=d*v,t[7]=(i*c-l*e)*v,t[8]=(o*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ps.makeScale(t,e)),this}rotate(t){return this.premultiply(Ps.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ps.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ps=new kt;function Ll(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function fs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ph(){const n=fs("canvas");return n.style.display="block",n}const Qa={};function xr(n){n in Qa||(Qa[n]=!0,console.warn(n))}function Lh(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const tc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ec=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dh(){const n={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===oe&&(r.r=Fn(r.r),r.g=Fn(r.g),r.b=Fn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===oe&&(r.r=Gi(r.r),r.g=Gi(r.g),r.b=Gi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===In?hs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return xr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return xr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ki]:{primaries:t,whitePoint:i,transfer:hs,toXYZ:tc,fromXYZ:ec,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:tc,fromXYZ:ec,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),n}const Qt=Dh();function Fn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ti;class Ih{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ti===void 0&&(Ti=fs("canvas")),Ti.width=t.width,Ti.height=t.height;const r=Ti.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Ti}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fn(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Fn(e[i]/255)*255):e[i]=Fn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Uh=0;class ba{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Qi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ls(r[o].image)):s.push(Ls(r[o]))}else s=Ls(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Ls(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ih.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nh=0;const Ds=new O;class Xe extends Ji{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,i=di,r=di,s=gn,o=fi,a=dn,c=Sn,l=Xe.DEFAULT_ANISOTROPY,u=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Qi(),this.name="",this.source=new ba(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ds).x}get height(){return this.source.getSize(Ds).y}get depth(){return this.source.getSize(Ds).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Po:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case Lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Po:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case Lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Sl;Xe.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,i=0,r=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],_=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,M=(d+1)/2,A=(p+1)/2,T=(u+h)/4,R=(f+v)/4,P=(_+m)/4;return b>M&&b>A?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=T/i,s=R/i):M>A?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=P/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=P/s),this.set(i,r,s,e),this}let S=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(f-v)/S,this.z=(h-u)/S,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fh extends Ji{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new Xe(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new ba(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends Fh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Dl extends Xe{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=De,this.minFilter=De,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zh extends Xe{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=De,this.minFilter=De,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _i{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(s,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rr.copy(i.boundingBox)),Rr.applyMatrix4(t.matrixWorld),this.union(Rr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nr),Cr.subVectors(this.max,nr),bi.subVectors(t.a,nr),wi.subVectors(t.b,nr),Ai.subVectors(t.c,nr),kn.subVectors(wi,bi),Hn.subVectors(Ai,wi),Qn.subVectors(bi,Ai);let e=[0,-kn.z,kn.y,0,-Hn.z,Hn.y,0,-Qn.z,Qn.y,kn.z,0,-kn.x,Hn.z,0,-Hn.x,Qn.z,0,-Qn.x,-kn.y,kn.x,0,-Hn.y,Hn.x,0,-Qn.y,Qn.x,0];return!Is(e,bi,wi,Ai,Cr)||(e=[1,0,0,0,1,0,0,0,1],!Is(e,bi,wi,Ai,Cr))?!1:(Pr.crossVectors(kn,Hn),e=[Pr.x,Pr.y,Pr.z],Is(e,bi,wi,Ai,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const En=[new O,new O,new O,new O,new O,new O,new O,new O],cn=new O,Rr=new _i,bi=new O,wi=new O,Ai=new O,kn=new O,Hn=new O,Qn=new O,nr=new O,Cr=new O,Pr=new O,ti=new O;function Is(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ti.fromArray(n,s);const a=r.x*Math.abs(ti.x)+r.y*Math.abs(ti.y)+r.z*Math.abs(ti.z),c=t.dot(ti),l=e.dot(ti),u=i.dot(ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Oh=new _i,ir=new O,Us=new O;class Sr{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Oh.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ir.subVectors(t,this.center);const e=ir.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ir,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Us.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ir.copy(t.center).add(Us)),this.expandByPoint(ir.copy(t.center).sub(Us))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Tn=new O,Ns=new O,Lr=new O,Vn=new O,Fs=new O,Dr=new O,zs=new O;class Bh{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ns.copy(t).add(e).multiplyScalar(.5),Lr.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(Ns);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Lr),a=Vn.dot(this.direction),c=-Vn.dot(Lr),l=Vn.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*c-a,h=o*a-c,_=s*u,f>=0)if(h>=-_)if(h<=_){const v=1/u;f*=v,h*=v,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l):h<=_?(f=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ns).addScaledVector(Lr,h),d}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const i=Tn.dot(this.direction),r=Tn.dot(Tn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,r=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,r=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,i,r,s){Fs.subVectors(e,t),Dr.subVectors(i,t),zs.crossVectors(Fs,Dr);let o=this.direction.dot(zs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,t);const c=a*this.direction.dot(Dr.crossVectors(Vn,Dr));if(c<0)return null;const l=a*this.direction.dot(Fs.cross(Vn));if(l<0||c+l>o)return null;const u=-a*Vn.dot(zs);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,i,r,s,o,a,c,l,u,f,h,d,_,v,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,f,h,d,_,v,m)}set(t,e,i,r,s,o,a,c,l,u,f,h,d,_,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ri.setFromMatrixColumn(t,0).length(),s=1/Ri.setFromMatrixColumn(t,1).length(),o=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*u,d=o*f,_=a*u,v=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+_*l,e[5]=h-v*l,e[9]=-a*c,e[2]=v-h*l,e[6]=_+d*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,d=c*f,_=l*u,v=l*f;e[0]=h+v*a,e[4]=_*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-_,e[6]=v+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,d=c*f,_=l*u,v=l*f;e[0]=h-v*a,e[4]=-o*f,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*u,e[9]=v-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,d=o*f,_=a*u,v=a*f;e[0]=c*u,e[4]=_*l-d,e[8]=h*l+v,e[1]=c*f,e[5]=v*l+h,e[9]=d*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,d=o*l,_=a*c,v=a*l;e[0]=c*u,e[4]=v-h*f,e[8]=_*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+_,e[10]=h-v*f}else if(t.order==="XZY"){const h=o*c,d=o*l,_=a*c,v=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+v,e[5]=o*u,e[9]=d*f-_,e[2]=_*f-d,e[6]=a*u,e[10]=v*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kh,t,Hh)}lookAt(t,e,i){const r=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),Gn.crossVectors(i,Qe),Gn.lengthSq()===0&&(Math.abs(i.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),Gn.crossVectors(i,Qe)),Gn.normalize(),Ir.crossVectors(Qe,Gn),r[0]=Gn.x,r[4]=Ir.x,r[8]=Qe.x,r[1]=Gn.y,r[5]=Ir.y,r[9]=Qe.y,r[2]=Gn.z,r[6]=Ir.z,r[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],v=i[6],m=i[10],p=i[14],S=i[3],b=i[7],M=i[11],A=i[15],T=r[0],R=r[4],P=r[8],x=r[12],g=r[1],y=r[5],L=r[9],C=r[13],F=r[2],N=r[6],U=r[10],V=r[14],B=r[3],Z=r[7],Q=r[11],dt=r[15];return s[0]=o*T+a*g+c*F+l*B,s[4]=o*R+a*y+c*N+l*Z,s[8]=o*P+a*L+c*U+l*Q,s[12]=o*x+a*C+c*V+l*dt,s[1]=u*T+f*g+h*F+d*B,s[5]=u*R+f*y+h*N+d*Z,s[9]=u*P+f*L+h*U+d*Q,s[13]=u*x+f*C+h*V+d*dt,s[2]=_*T+v*g+m*F+p*B,s[6]=_*R+v*y+m*N+p*Z,s[10]=_*P+v*L+m*U+p*Q,s[14]=_*x+v*C+m*V+p*dt,s[3]=S*T+b*g+M*F+A*B,s[7]=S*R+b*y+M*N+A*Z,s[11]=S*P+b*L+M*U+A*Q,s[15]=S*x+b*C+M*V+A*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],_=t[3],v=t[7],m=t[11],p=t[15];return _*(+s*c*f-r*l*f-s*a*h+i*l*h+r*a*d-i*c*d)+v*(+e*c*d-e*l*h+s*o*h-r*o*d+r*l*u-s*c*u)+m*(+e*l*f-e*a*d-s*o*f+i*o*d+s*a*u-i*l*u)+p*(-r*a*u-e*c*f+e*a*h+r*o*f-i*o*h+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],_=t[12],v=t[13],m=t[14],p=t[15],S=f*m*l-v*h*l+v*c*d-a*m*d-f*c*p+a*h*p,b=_*h*l-u*m*l-_*c*d+o*m*d+u*c*p-o*h*p,M=u*v*l-_*f*l+_*a*d-o*v*d-u*a*p+o*f*p,A=_*f*c-u*v*c-_*a*h+o*v*h+u*a*m-o*f*m,T=e*S+i*b+r*M+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=S*R,t[1]=(v*h*s-f*m*s-v*r*d+i*m*d+f*r*p-i*h*p)*R,t[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*p+i*c*p)*R,t[3]=(f*c*s-a*h*s-f*r*l+i*h*l+a*r*d-i*c*d)*R,t[4]=b*R,t[5]=(u*m*s-_*h*s+_*r*d-e*m*d-u*r*p+e*h*p)*R,t[6]=(_*c*s-o*m*s-_*r*l+e*m*l+o*r*p-e*c*p)*R,t[7]=(o*h*s-u*c*s+u*r*l-e*h*l-o*r*d+e*c*d)*R,t[8]=M*R,t[9]=(_*f*s-u*v*s-_*i*d+e*v*d+u*i*p-e*f*p)*R,t[10]=(o*v*s-_*a*s+_*i*l-e*v*l-o*i*p+e*a*p)*R,t[11]=(u*a*s-o*f*s-u*i*l+e*f*l+o*i*d-e*a*d)*R,t[12]=A*R,t[13]=(u*v*r-_*f*r+_*i*h-e*v*h-u*i*m+e*f*m)*R,t[14]=(_*a*r-o*v*r-_*i*c+e*v*c+o*i*m-e*a*m)*R,t[15]=(o*f*r-u*a*r+u*i*c-e*f*c-o*i*h+e*a*h)*R,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,f=a+a,h=s*l,d=s*u,_=s*f,v=o*u,m=o*f,p=a*f,S=c*l,b=c*u,M=c*f,A=i.x,T=i.y,R=i.z;return r[0]=(1-(v+p))*A,r[1]=(d+M)*A,r[2]=(_-b)*A,r[3]=0,r[4]=(d-M)*T,r[5]=(1-(h+p))*T,r[6]=(m+S)*T,r[7]=0,r[8]=(_+b)*R,r[9]=(m-S)*R,r[10]=(1-(h+v))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ri.set(r[0],r[1],r[2]).length();const o=Ri.set(r[4],r[5],r[6]).length(),a=Ri.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],ln.copy(this);const l=1/s,u=1/o,f=1/a;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=f,ln.elements[9]*=f,ln.elements[10]*=f,e.setFromRotationMatrix(ln),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=xn,c=!1){const l=this.elements,u=2*s/(e-t),f=2*s/(i-r),h=(e+t)/(e-t),d=(i+r)/(i-r);let _,v;if(c)_=s/(o-s),v=o*s/(o-s);else if(a===xn)_=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ds)_=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=xn,c=!1){const l=this.elements,u=2/(e-t),f=2/(i-r),h=-(e+t)/(e-t),d=-(i+r)/(i-r);let _,v;if(c)_=1/(o-s),v=o/(o-s);else if(a===xn)_=-2/(o-s),v=-(o+s)/(o-s);else if(a===ds)_=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ri=new O,ln=new le,kh=new O(0,0,0),Hh=new O(1,1,1),Gn=new O,Ir=new O,Qe=new O,nc=new le,ic=new On;class zn{constructor(t=0,e=0,i=0,r=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ic.setFromEuler(this),this.setFromQuaternion(ic,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Il{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vh=0;const rc=new O,Ci=new On,bn=new le,Ur=new O,rr=new O,Gh=new O,Wh=new On,sc=new O(1,0,0),oc=new O(0,1,0),ac=new O(0,0,1),cc={type:"added"},Xh={type:"removed"},Pi={type:"childadded",child:null},Os={type:"childremoved",child:null};class Ie extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new O,e=new zn,i=new On,r=new O(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new le},normalMatrix:{value:new kt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(sc,t)}rotateY(t){return this.rotateOnAxis(oc,t)}rotateZ(t){return this.rotateOnAxis(ac,t)}translateOnAxis(t,e){return rc.copy(t).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sc,t)}translateY(t){return this.translateOnAxis(oc,t)}translateZ(t){return this.translateOnAxis(ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ur.copy(t):Ur.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(rr,Ur,this.up):bn.lookAt(Ur,rr,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),Ci.setFromRotationMatrix(bn),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cc),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xh),Os.child=t,this.dispatchEvent(Os),Os.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cc),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,Gh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Wh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ie.DEFAULT_UP=new O(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new O,wn=new O,Bs=new O,An=new O,Li=new O,Di=new O,lc=new O,ks=new O,Hs=new O,Vs=new O,Gs=new Se,Ws=new Se,Xs=new Se;class hn{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),un.subVectors(t,e),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){un.subVectors(r,e),wn.subVectors(i,e),Bs.subVectors(t,e);const o=un.dot(un),a=un.dot(wn),c=un.dot(Bs),l=wn.dot(wn),u=wn.dot(Bs),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(l*c-a*u)*h,_=(o*u-a*c)*h;return s.set(1-d-_,_,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,An)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,An.x),c.addScaledVector(o,An.y),c.addScaledVector(a,An.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return Gs.setScalar(0),Ws.setScalar(0),Xs.setScalar(0),Gs.fromBufferAttribute(t,e),Ws.fromBufferAttribute(t,i),Xs.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Gs,s.x),o.addScaledVector(Ws,s.y),o.addScaledVector(Xs,s.z),o}static isFrontFacing(t,e,i,r){return un.subVectors(i,e),wn.subVectors(t,e),un.cross(wn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),un.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return hn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Li.subVectors(r,i),Di.subVectors(s,i),ks.subVectors(t,i);const c=Li.dot(ks),l=Di.dot(ks);if(c<=0&&l<=0)return e.copy(i);Hs.subVectors(t,r);const u=Li.dot(Hs),f=Di.dot(Hs);if(u>=0&&f<=u)return e.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Li,o);Vs.subVectors(t,s);const d=Li.dot(Vs),_=Di.dot(Vs);if(_>=0&&d<=_)return e.copy(s);const v=d*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(Di,a);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return lc.subVectors(s,r),a=(f-u)/(f-u+(d-_)),e.copy(r).addScaledVector(lc,a);const p=1/(m+v+h);return o=v*p,a=h*p,e.copy(i).addScaledVector(Li,o).addScaledVector(Di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ul={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function qs(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Gt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Qt.workingColorSpace){if(t=Ta(t,1),e=qt(e,0,1),i=qt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=qs(o,s,t+1/3),this.g=qs(o,s,t),this.b=qs(o,s,t-1/3)}return Qt.colorSpaceToWorking(this,r),this}setStyle(t,e=Ze){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const i=Ul[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return Qt.workingToColorSpace(ze.copy(this),t),Math.round(qt(ze.r*255,0,255))*65536+Math.round(qt(ze.g*255,0,255))*256+Math.round(qt(ze.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(ze.copy(this),e);const i=ze.r,r=ze.g,s=ze.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Ze){Qt.workingToColorSpace(ze.copy(this),t);const e=ze.r,i=ze.g,r=ze.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(Nr);const i=dr(Wn.h,Nr.h,e),r=dr(Wn.s,Nr.s,e),s=dr(Wn.l,Nr.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new Gt;Gt.NAMES=Ul;let qh=0;class yr extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=Vi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vo,this.blendDst=Mo,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$a,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(i.blending=this.blending),this.side!==$n&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vo&&(i.blendSrc=this.blendSrc),this.blendDst!==Mo&&(i.blendDst=this.blendDst),this.blendEquation!==ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$a&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ie extends yr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new O,Fr=new Wt;let Yh=0;class Ae{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ka,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ki(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array),r=He(r,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ka&&(t.usage=this.usage),t}}class Nl extends Ae{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Fl extends Ae{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class fe extends Ae{constructor(t,e,i){super(new Float32Array(t),e,i)}}let $h=0;const rn=new le,Ys=new Ie,Ii=new O,tn=new _i,sr=new _i,Le=new O;class Oe extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ll(t)?Fl:Nl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new kt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,i){return rn.makeTranslation(t,e,i),this.applyMatrix4(rn),this}scale(t,e,i){return rn.makeScale(t,e,i),this.applyMatrix4(rn),this}lookAt(t){return Ys.lookAt(t),Ys.updateMatrix(),this.applyMatrix4(Ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(tn.min,sr.min),tn.expandByPoint(Le),Le.addVectors(tn.max,sr.max),tn.expandByPoint(Le)):(tn.expandByPoint(sr.min),tn.expandByPoint(sr.max))}tn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Le.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Le));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Le.fromBufferAttribute(a,l),c&&(Ii.fromBufferAttribute(t,l),Le.add(Ii)),r=Math.max(r,i.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<i.count;P++)a[P]=new O,c[P]=new O;const l=new O,u=new O,f=new O,h=new Wt,d=new Wt,_=new Wt,v=new O,m=new O;function p(P,x,g){l.fromBufferAttribute(i,P),u.fromBufferAttribute(i,x),f.fromBufferAttribute(i,g),h.fromBufferAttribute(s,P),d.fromBufferAttribute(s,x),_.fromBufferAttribute(s,g),u.sub(l),f.sub(l),d.sub(h),_.sub(h);const y=1/(d.x*_.y-_.x*d.y);isFinite(y)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(y),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(y),a[P].add(v),a[x].add(v),a[g].add(v),c[P].add(m),c[x].add(m),c[g].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,x=S.length;P<x;++P){const g=S[P],y=g.start,L=g.count;for(let C=y,F=y+L;C<F;C+=3)p(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const b=new O,M=new O,A=new O,T=new O;function R(P){A.fromBufferAttribute(r,P),T.copy(A);const x=a[P];b.copy(x),b.sub(A.multiplyScalar(A.dot(x))).normalize(),M.crossVectors(T,x);const y=M.dot(c[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,y)}for(let P=0,x=S.length;P<x;++P){const g=S[P],y=g.start,L=g.count;for(let C=y,F=y+L;C<F;C+=3)R(t.getX(C+0)),R(t.getX(C+1)),R(t.getX(C+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,c=new O,l=new O,u=new O,f=new O;if(t)for(let h=0,d=t.count;h<d;h+=3){const _=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let d=0,_=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*u;for(let p=0;p<u;p++)h[_++]=l[d++]}return new Ae(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=t(h,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uc=new le,ei=new Bh,zr=new Sr,hc=new O,Or=new O,Br=new O,kr=new O,$s=new O,Hr=new O,dc=new O,Vr=new O;class ct extends Ie{constructor(t=new Oe,e=new ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Hr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&($s.fromBufferAttribute(f,t),o?Hr.addScaledVector($s,u):Hr.addScaledVector($s.sub(e),u))}e.add(Hr)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(s),ei.copy(t.ray).recast(t.near),!(zr.containsPoint(ei.origin)===!1&&(ei.intersectSphere(zr,hc)===null||ei.origin.distanceToSquared(hc)>(t.far-t.near)**2))&&(uc.copy(s).invert(),ei.copy(t.ray).applyMatrix4(uc),!(i.boundingBox!==null&&ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],p=o[m.materialIndex],S=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,A=b;M<A;M+=3){const T=a.getX(M),R=a.getX(M+1),P=a.getX(M+2);r=Gr(this,p,t,i,l,u,f,T,R,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=_,p=v;m<p;m+=3){const S=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);r=Gr(this,o,t,i,l,u,f,S,b,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],p=o[m.materialIndex],S=Math.max(m.start,d.start),b=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,A=b;M<A;M+=3){const T=M,R=M+1,P=M+2;r=Gr(this,p,t,i,l,u,f,T,R,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=_,p=v;m<p;m+=3){const S=m,b=m+1,M=m+2;r=Gr(this,o,t,i,l,u,f,S,b,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Kh(n,t,e,i,r,s,o,a){let c;if(t.side===We?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===$n,a),c===null)return null;Vr.copy(a),Vr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Vr);return l<e.near||l>e.far?null:{distance:l,point:Vr.clone(),object:n}}function Gr(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,Or),n.getVertexPosition(c,Br),n.getVertexPosition(l,kr);const u=Kh(n,t,e,i,Or,Br,kr,dc);if(u){const f=new O;hn.getBarycoord(dc,Or,Br,kr,f),r&&(u.uv=hn.getInterpolatedAttribute(r,a,c,l,f,new Wt)),s&&(u.uv1=hn.getInterpolatedAttribute(s,a,c,l,f,new Wt)),o&&(u.normal=hn.getInterpolatedAttribute(o,a,c,l,f,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new O,materialIndex:0};hn.getNormal(Or,Br,kr,h.normal),u.face=h,u.barycoord=f}return u}class $t extends Oe{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,e,t,o,s,0),_("z","y","x",1,-1,i,e,-t,o,s,1),_("x","z","y",1,1,t,i,e,r,o,2),_("x","z","y",1,-1,t,i,-e,r,o,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(f,2));function _(v,m,p,S,b,M,A,T,R,P,x){const g=M/R,y=A/P,L=M/2,C=A/2,F=T/2,N=R+1,U=P+1;let V=0,B=0;const Z=new O;for(let Q=0;Q<U;Q++){const dt=Q*y-C;for(let Et=0;Et<N;Et++){const jt=Et*g-L;Z[v]=jt*S,Z[m]=dt*b,Z[p]=F,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[p]=T>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(Et/R),f.push(1-Q/P),V+=1}}for(let Q=0;Q<P;Q++)for(let dt=0;dt<R;dt++){const Et=h+dt+N*Q,jt=h+dt+N*(Q+1),rt=h+(dt+1)+N*(Q+1),Lt=h+(dt+1)+N*Q;c.push(Et,jt,Lt),c.push(jt,rt,Lt),B+=6}a.addGroup(d,B,x),d+=B,h+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $t(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ve(n){const t={};for(let e=0;e<n.length;e++){const i=Zi(n[e]);for(const r in i)t[r]=i[r]}return t}function Zh(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function zl(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const jh={clone:Zi,merge:Ve};var Jh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends yr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jh,this.fragmentShader=Qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=Zh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ol extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new O,fc=new Wt,pc=new Wt;class sn extends Ol{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,fc,pc),e.subVectors(pc,fc)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ui=-90,Ni=1;class td extends Ie{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(Ui,Ni,t,e);r.layers=this.layers,this.add(r);const s=new sn(Ui,Ni,t,e);s.layers=this.layers,this.add(s);const o=new sn(Ui,Ni,t,e);o.layers=this.layers,this.add(o);const a=new sn(Ui,Ni,t,e);a.layers=this.layers,this.add(a);const c=new sn(Ui,Ni,t,e);c.layers=this.layers,this.add(c);const l=new sn(Ui,Ni,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===xn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Bl extends Xe{constructor(t=[],e=Yi,i,r,s,o,a,c,l,u){super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ed extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Bl(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $t(5,5,5),s=new Zn({name:"CubemapFromEquirect",uniforms:Zi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:Yn});s.uniforms.tEquirect.value=e;const o=new ct(r,s),a=e.minFilter;return e.minFilter===fi&&(e.minFilter=gn),new td(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class vn extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nd={type:"move"};class Ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;l.inputState.pinching&&h>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nd)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new vn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class wa{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=i}clone(){return new wa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class mc extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class kl extends Xe{constructor(t=null,e=1,i=1,r,s,o,a,c,l=De,u=De,f,h){super(null,o,a,c,l,u,r,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gc extends Ae{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Fi=new le,_c=new le,Wr=[],xc=new _i,id=new le,or=new ct,ar=new Sr;class xi extends ct{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,id)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fi),xc.copy(t.boundingBox).applyMatrix4(Fi),this.boundingBox.union(xc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fi),ar.copy(t.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(i),t.ray.intersectsSphere(ar)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Fi),_c.multiplyMatrices(i,Fi),or.matrixWorld=_c,or.raycast(t,Wr);for(let o=0,a=Wr.length;o<a;o++){const c=Wr[o];c.instanceId=s,c.object=this,e.push(c)}Wr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new kl(new Float32Array(r*this.count),r,this.count,xs,_n));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zs=new O,rd=new O,sd=new kt;class oi{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Zs.subVectors(i,e).cross(rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Zs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||sd.getNormalMatrix(t),r=this.coplanarPoint(Zs).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new Sr,od=new Wt(.5,.5),Xr=new O;class Aa{constructor(t=new oi,e=new oi,i=new oi,r=new oi,s=new oi,o=new oi){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=xn,i=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],f=s[5],h=s[6],d=s[7],_=s[8],v=s[9],m=s[10],p=s[11],S=s[12],b=s[13],M=s[14],A=s[15];if(r[0].setComponents(l-o,d-u,p-_,A-S).normalize(),r[1].setComponents(l+o,d+u,p+_,A+S).normalize(),r[2].setComponents(l+a,d+f,p+v,A+b).normalize(),r[3].setComponents(l-a,d-f,p-v,A-b).normalize(),i)r[4].setComponents(c,h,m,M).normalize(),r[5].setComponents(l-c,d-h,p-m,A-M).normalize();else if(r[4].setComponents(l-c,d-h,p-m,A-M).normalize(),e===xn)r[5].setComponents(l+c,d+h,p+m,A+M).normalize();else if(e===ds)r[5].setComponents(c,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){ni.center.set(0,0,0);const e=od.distanceTo(t.center);return ni.radius=.7071067811865476+e,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Xr.x=r.normal.x>0?t.max.x:t.min.x,Xr.y=r.normal.y>0?t.max.y:t.min.y,Xr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hl extends Xe{constructor(t,e,i=pi,r,s,o,a=De,c=De,l,u=mr,f=1){if(u!==mr&&u!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ba(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Vl extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ra extends Oe{constructor(t=1,e=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:r,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],u=e/2,f=Math.PI/2*t,h=e,d=2*f+h,_=i*2+s,v=r+1,m=new O,p=new O;for(let S=0;S<=_;S++){let b=0,M=0,A=0,T=0;if(S<=i){const x=S/i,g=x*Math.PI/2;M=-u-t*Math.cos(g),A=t*Math.sin(g),T=-t*Math.cos(g),b=x*f}else if(S<=i+s){const x=(S-i)/s;M=-u+x*e,A=t,T=0,b=f+x*h}else{const x=(S-i-s)/i,g=x*Math.PI/2;M=u+t*Math.sin(g),A=t*Math.cos(g),T=t*Math.sin(g),b=f+h+x*f}const R=Math.max(0,Math.min(1,b/d));let P=0;S===0?P=.5/r:S===_&&(P=-.5/r);for(let x=0;x<=r;x++){const g=x/r,y=g*Math.PI*2,L=Math.sin(y),C=Math.cos(y);p.x=-A*C,p.y=M,p.z=A*L,a.push(p.x,p.y,p.z),m.set(-A*C,T,A*L),m.normalize(),c.push(m.x,m.y,m.z),l.push(g+P,R)}if(S>0){const x=(S-1)*v;for(let g=0;g<r;g++){const y=x+g,L=x+g+1,C=S*v+g,F=S*v+g+1;o.push(y,L,C),o.push(L,F,C)}}}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Ca extends Oe{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new O,u=new Wt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const d=i+f/e*r;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ca(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class re extends Oe{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],d=[];let _=0;const v=[],m=i/2;let p=0;S(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new fe(f,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(d,2));function S(){const M=new O,A=new O;let T=0;const R=(e-t)/i;for(let P=0;P<=s;P++){const x=[],g=P/s,y=g*(e-t)+t;for(let L=0;L<=r;L++){const C=L/r,F=C*c+a,N=Math.sin(F),U=Math.cos(F);A.x=y*N,A.y=-g*i+m,A.z=y*U,f.push(A.x,A.y,A.z),M.set(N,R,U).normalize(),h.push(M.x,M.y,M.z),d.push(C,1-g),x.push(_++)}v.push(x)}for(let P=0;P<r;P++)for(let x=0;x<s;x++){const g=v[x][P],y=v[x+1][P],L=v[x+1][P+1],C=v[x][P+1];(t>0||x!==0)&&(u.push(g,y,C),T+=3),(e>0||x!==s-1)&&(u.push(y,L,C),T+=3)}l.addGroup(p,T,0),p+=T}function b(M){const A=_,T=new Wt,R=new O;let P=0;const x=M===!0?t:e,g=M===!0?1:-1;for(let L=1;L<=r;L++)f.push(0,m*g,0),h.push(0,g,0),d.push(.5,.5),_++;const y=_;for(let L=0;L<=r;L++){const F=L/r*c+a,N=Math.cos(F),U=Math.sin(F);R.x=x*U,R.y=m*g,R.z=x*N,f.push(R.x,R.y,R.z),h.push(0,g,0),T.x=N*.5+.5,T.y=U*.5*g+.5,d.push(T.x,T.y),_++}for(let L=0;L<r;L++){const C=A+L,F=y+L;M===!0?u.push(F,F+1,C):u.push(F+1,F,C),P+=3}l.addGroup(p,P,M===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ue extends re{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ue(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vs extends Oe{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new fe(s,3)),this.setAttribute("normal",new fe(s.slice(),3)),this.setAttribute("uv",new fe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const b=new O,M=new O,A=new O;for(let T=0;T<e.length;T+=3)d(e[T+0],b),d(e[T+1],M),d(e[T+2],A),c(b,M,A,S)}function c(S,b,M,A){const T=A+1,R=[];for(let P=0;P<=T;P++){R[P]=[];const x=S.clone().lerp(M,P/T),g=b.clone().lerp(M,P/T),y=T-P;for(let L=0;L<=y;L++)L===0&&P===T?R[P][L]=x:R[P][L]=x.clone().lerp(g,L/y)}for(let P=0;P<T;P++)for(let x=0;x<2*(T-P)-1;x++){const g=Math.floor(x/2);x%2===0?(h(R[P][g+1]),h(R[P+1][g]),h(R[P][g])):(h(R[P][g+1]),h(R[P+1][g+1]),h(R[P+1][g]))}}function l(S){const b=new O;for(let M=0;M<s.length;M+=3)b.x=s[M+0],b.y=s[M+1],b.z=s[M+2],b.normalize().multiplyScalar(S),s[M+0]=b.x,s[M+1]=b.y,s[M+2]=b.z}function u(){const S=new O;for(let b=0;b<s.length;b+=3){S.x=s[b+0],S.y=s[b+1],S.z=s[b+2];const M=m(S)/2/Math.PI+.5,A=p(S)/Math.PI+.5;o.push(M,1-A)}_(),f()}function f(){for(let S=0;S<o.length;S+=6){const b=o[S+0],M=o[S+2],A=o[S+4],T=Math.max(b,M,A),R=Math.min(b,M,A);T>.9&&R<.1&&(b<.2&&(o[S+0]+=1),M<.2&&(o[S+2]+=1),A<.2&&(o[S+4]+=1))}}function h(S){s.push(S.x,S.y,S.z)}function d(S,b){const M=S*3;b.x=t[M+0],b.y=t[M+1],b.z=t[M+2]}function _(){const S=new O,b=new O,M=new O,A=new O,T=new Wt,R=new Wt,P=new Wt;for(let x=0,g=0;x<s.length;x+=9,g+=6){S.set(s[x+0],s[x+1],s[x+2]),b.set(s[x+3],s[x+4],s[x+5]),M.set(s[x+6],s[x+7],s[x+8]),T.set(o[g+0],o[g+1]),R.set(o[g+2],o[g+3]),P.set(o[g+4],o[g+5]),A.copy(S).add(b).add(M).divideScalar(3);const y=m(A);v(T,g+0,S,y),v(R,g+2,b,y),v(P,g+4,M,y)}}function v(S,b,M,A){A<0&&S.x===1&&(o[b]=S.x-1),M.x===0&&M.z===0&&(o[b]=A/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.vertices,t.indices,t.radius,t.details)}}class vr extends vs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vr(t.radius,t.detail)}}class Mn extends vs{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Mn(t.radius,t.detail)}}class Er extends Oe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=t/a,h=e/c,d=[],_=[],v=[],m=[];for(let p=0;p<u;p++){const S=p*h-o;for(let b=0;b<l;b++){const M=b*f-s;_.push(M,-S,0),v.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const b=S+l*p,M=S+l*(p+1),A=S+1+l*(p+1),T=S+1+l*p;d.push(b,M,T),d.push(M,A,T)}this.setIndex(d),this.setAttribute("position",new fe(_,3)),this.setAttribute("normal",new fe(v,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Er(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ye extends Oe{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new O,h=new O,d=[],_=[],v=[],m=[];for(let p=0;p<=i;p++){const S=[],b=p/i;let M=0;p===0&&o===0?M=.5/e:p===i&&c===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const T=A/e;f.x=-t*Math.cos(r+T*s)*Math.sin(o+b*a),f.y=t*Math.cos(o+b*a),f.z=t*Math.sin(r+T*s)*Math.sin(o+b*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(T+M,1-b),S.push(l++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){const b=u[p][S+1],M=u[p][S],A=u[p+1][S],T=u[p+1][S+1];(p!==0||o>0)&&d.push(b,M,T),(p!==i-1||c<Math.PI)&&d.push(M,A,T)}this.setIndex(d),this.setAttribute("position",new fe(_,3)),this.setAttribute("normal",new fe(v,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qe extends Oe{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new O,f=new O,h=new O;for(let d=0;d<=i;d++)for(let _=0;_<=r;_++){const v=_/r*s,m=d/i*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),h.subVectors(f,u).normalize(),c.push(h.x,h.y,h.z),l.push(_/r),l.push(d/i)}for(let d=1;d<=i;d++)for(let _=1;_<=r;_++){const v=(r+1)*d+_-1,m=(r+1)*(d-1)+_-1,p=(r+1)*(d-1)+_,S=(r+1)*d+_;o.push(v,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ms extends yr{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Gt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cl,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class ad extends yr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cd extends yr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Gl extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ld extends Gl{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const js=new le,vc=new O,Mc=new O;class ud{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Aa,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;vc.setFromMatrixPosition(t.matrixWorld),e.position.copy(vc),Mc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mc),e.updateMatrixWorld(),js.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(js,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(js)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Pa extends Ol{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class hd extends ud{constructor(){super(new Pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sc extends Gl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new hd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class dd extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function yc(n,t,e,i){const r=fd(i);switch(e){case wl:return n*t;case xs:return n*t/r.components*r.byteLength;case Sa:return n*t/r.components*r.byteLength;case Rl:return n*t*2/r.components*r.byteLength;case ya:return n*t*2/r.components*r.byteLength;case Al:return n*t*3/r.components*r.byteLength;case dn:return n*t*4/r.components*r.byteLength;case Ea:return n*t*4/r.components*r.byteLength;case ns:case is:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case rs:case ss:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Io:case No:return Math.max(n,16)*Math.max(t,8)/4;case Do:case Uo:return Math.max(n,8)*Math.max(t,8)/2;case Fo:case zo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Oo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Go:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case qo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case $o:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case jo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Qo:case ta:case ea:return Math.ceil(n/4)*Math.ceil(t/4)*16;case na:case ia:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ra:case sa:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fd(n){switch(n){case Sn:case yl:return{byteLength:1,components:1};case fr:case El:case Mr:return{byteLength:2,components:1};case va:case Ma:return{byteLength:2,components:4};case pi:case xa:case _n:return{byteLength:4,components:1};case Tl:case bl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_a);function Wl(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function pd(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,f=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],v=f[d];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const v=f[d];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gd=`#ifdef USE_ALPHAHASH
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
#endif`,_d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sd=`#ifdef USE_AOMAP
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
#endif`,yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ed=`#ifdef USE_BATCHING
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
#endif`,Td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ad=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rd=`#ifdef USE_IRIDESCENCE
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
#endif`,Cd=`#ifdef USE_BUMPMAP
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
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Od=`#define PI 3.141592653589793
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
} // validated`,Bd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kd=`vec3 transformedNormal = objectNormal;
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
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",qd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nf=`#ifdef USE_GRADIENTMAP
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
}`,rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,af=`uniform bool receiveShadow;
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
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ff=`PhysicalMaterial material;
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
#endif`,pf=`struct PhysicalMaterial {
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
}`,mf=`
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
#endif`,gf=`#if defined( RE_IndirectDiffuse )
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
#endif`,_f=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ef=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bf=`#if defined( USE_POINTS_UV )
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
#endif`,wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Af=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lf=`#ifdef USE_MORPHTARGETS
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
#endif`,Df=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,If=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Of=`#ifdef USE_NORMALMAP
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
#endif`,Bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$f=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tp=`float getShadowMask() {
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
}`,ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,np=`#ifdef USE_SKINNING
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
#endif`,ip=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rp=`#ifdef USE_SKINNING
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
#endif`,sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lp=`#ifdef USE_TRANSMISSION
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
#endif`,up=`#ifdef USE_TRANSMISSION
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gp=`uniform sampler2D t2D;
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`#include <common>
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
}`,yp=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ep=`#define DISTANCE
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
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`uniform float scale;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Cp=`#include <common>
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Lp=`#define LAMBERT
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
}`,Dp=`#define LAMBERT
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
}`,Ip=`#define MATCAP
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
}`,Up=`#define MATCAP
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
}`,Np=`#define NORMAL
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
}`,Fp=`#define NORMAL
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
}`,zp=`#define PHONG
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
}`,Op=`#define PHONG
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
}`,Bp=`#define STANDARD
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
}`,kp=`#define STANDARD
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
}`,Hp=`#define TOON
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
}`,Vp=`#define TOON
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
}`,Gp=`uniform float size;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#include <common>
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
}`,qp=`uniform vec3 color;
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
}`,Yp=`uniform float rotation;
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
}`,$p=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:md,alphahash_pars_fragment:gd,alphamap_fragment:_d,alphamap_pars_fragment:xd,alphatest_fragment:vd,alphatest_pars_fragment:Md,aomap_fragment:Sd,aomap_pars_fragment:yd,batching_pars_vertex:Ed,batching_vertex:Td,begin_vertex:bd,beginnormal_vertex:wd,bsdfs:Ad,iridescence_fragment:Rd,bumpmap_pars_fragment:Cd,clipping_planes_fragment:Pd,clipping_planes_pars_fragment:Ld,clipping_planes_pars_vertex:Dd,clipping_planes_vertex:Id,color_fragment:Ud,color_pars_fragment:Nd,color_pars_vertex:Fd,color_vertex:zd,common:Od,cube_uv_reflection_fragment:Bd,defaultnormal_vertex:kd,displacementmap_pars_vertex:Hd,displacementmap_vertex:Vd,emissivemap_fragment:Gd,emissivemap_pars_fragment:Wd,colorspace_fragment:Xd,colorspace_pars_fragment:qd,envmap_fragment:Yd,envmap_common_pars_fragment:$d,envmap_pars_fragment:Kd,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:cf,envmap_vertex:jd,fog_vertex:Jd,fog_pars_vertex:Qd,fog_fragment:tf,fog_pars_fragment:ef,gradientmap_pars_fragment:nf,lightmap_pars_fragment:rf,lights_lambert_fragment:sf,lights_lambert_pars_fragment:of,lights_pars_begin:af,lights_toon_fragment:lf,lights_toon_pars_fragment:uf,lights_phong_fragment:hf,lights_phong_pars_fragment:df,lights_physical_fragment:ff,lights_physical_pars_fragment:pf,lights_fragment_begin:mf,lights_fragment_maps:gf,lights_fragment_end:_f,logdepthbuf_fragment:xf,logdepthbuf_pars_fragment:vf,logdepthbuf_pars_vertex:Mf,logdepthbuf_vertex:Sf,map_fragment:yf,map_pars_fragment:Ef,map_particle_fragment:Tf,map_particle_pars_fragment:bf,metalnessmap_fragment:wf,metalnessmap_pars_fragment:Af,morphinstance_vertex:Rf,morphcolor_vertex:Cf,morphnormal_vertex:Pf,morphtarget_pars_vertex:Lf,morphtarget_vertex:Df,normal_fragment_begin:If,normal_fragment_maps:Uf,normal_pars_fragment:Nf,normal_pars_vertex:Ff,normal_vertex:zf,normalmap_pars_fragment:Of,clearcoat_normal_fragment_begin:Bf,clearcoat_normal_fragment_maps:kf,clearcoat_pars_fragment:Hf,iridescence_pars_fragment:Vf,opaque_fragment:Gf,packing:Wf,premultiplied_alpha_fragment:Xf,project_vertex:qf,dithering_fragment:Yf,dithering_pars_fragment:$f,roughnessmap_fragment:Kf,roughnessmap_pars_fragment:Zf,shadowmap_pars_fragment:jf,shadowmap_pars_vertex:Jf,shadowmap_vertex:Qf,shadowmask_pars_fragment:tp,skinbase_vertex:ep,skinning_pars_vertex:np,skinning_vertex:ip,skinnormal_vertex:rp,specularmap_fragment:sp,specularmap_pars_fragment:op,tonemapping_fragment:ap,tonemapping_pars_fragment:cp,transmission_fragment:lp,transmission_pars_fragment:up,uv_pars_fragment:hp,uv_pars_vertex:dp,uv_vertex:fp,worldpos_vertex:pp,background_vert:mp,background_frag:gp,backgroundCube_vert:_p,backgroundCube_frag:xp,cube_vert:vp,cube_frag:Mp,depth_vert:Sp,depth_frag:yp,distanceRGBA_vert:Ep,distanceRGBA_frag:Tp,equirect_vert:bp,equirect_frag:wp,linedashed_vert:Ap,linedashed_frag:Rp,meshbasic_vert:Cp,meshbasic_frag:Pp,meshlambert_vert:Lp,meshlambert_frag:Dp,meshmatcap_vert:Ip,meshmatcap_frag:Up,meshnormal_vert:Np,meshnormal_frag:Fp,meshphong_vert:zp,meshphong_frag:Op,meshphysical_vert:Bp,meshphysical_frag:kp,meshtoon_vert:Hp,meshtoon_frag:Vp,points_vert:Gp,points_frag:Wp,shadow_vert:Xp,shadow_frag:qp,sprite_vert:Yp,sprite_frag:$p},at={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},mn={basic:{uniforms:Ve([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ve([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ve([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ve([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ve([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ve([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ve([at.points,at.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ve([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ve([at.common,at.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ve([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ve([at.sprite,at.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ve([at.common,at.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ve([at.lights,at.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};mn.physical={uniforms:Ve([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const qr={r:0,b:0,g:0},ii=new zn,Kp=new le;function Zp(n,t,e,i,r,s,o){const a=new Gt(0);let c=s===!0?0:1,l,u,f=null,h=0,d=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function v(b){let M=!1;const A=_(b);A===null?p(a,c):A&&A.isColor&&(p(A,1),M=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){const A=_(M);A&&(A.isCubeTexture||A.mapping===_s)?(u===void 0&&(u=new ct(new $t(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Zi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ii.copy(M.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Kp.makeRotationFromEuler(ii)),u.material.toneMapped=Qt.getTransfer(A.colorSpace)!==oe,(f!==A||h!==A.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=A,h=A.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new ct(new Er(2,2),new Zn({name:"BackgroundMaterial",uniforms:Zi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(A.colorSpace)!==oe,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||h!==A.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,f=A,h=A.version,d=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,M){b.getRGB(qr,zl(n)),i.buffers.color.setClear(qr.r,qr.g,qr.b,M,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:v,addToRenderList:m,dispose:S}}function jp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(g,y,L,C,F){let N=!1;const U=f(C,L,y);s!==U&&(s=U,l(s.object)),N=d(g,C,L,F),N&&_(g,C,L,F),F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,M(g,y,L,C),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return n.createVertexArray()}function l(g){return n.bindVertexArray(g)}function u(g){return n.deleteVertexArray(g)}function f(g,y,L){const C=L.wireframe===!0;let F=i[g.id];F===void 0&&(F={},i[g.id]=F);let N=F[y.id];N===void 0&&(N={},F[y.id]=N);let U=N[C];return U===void 0&&(U=h(c()),N[C]=U),U}function h(g){const y=[],L=[],C=[];for(let F=0;F<e;F++)y[F]=0,L[F]=0,C[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:L,attributeDivisors:C,object:g,attributes:{},index:null}}function d(g,y,L,C){const F=s.attributes,N=y.attributes;let U=0;const V=L.getAttributes();for(const B in V)if(V[B].location>=0){const Q=F[B];let dt=N[B];if(dt===void 0&&(B==="instanceMatrix"&&g.instanceMatrix&&(dt=g.instanceMatrix),B==="instanceColor"&&g.instanceColor&&(dt=g.instanceColor)),Q===void 0||Q.attribute!==dt||dt&&Q.data!==dt.data)return!0;U++}return s.attributesNum!==U||s.index!==C}function _(g,y,L,C){const F={},N=y.attributes;let U=0;const V=L.getAttributes();for(const B in V)if(V[B].location>=0){let Q=N[B];Q===void 0&&(B==="instanceMatrix"&&g.instanceMatrix&&(Q=g.instanceMatrix),B==="instanceColor"&&g.instanceColor&&(Q=g.instanceColor));const dt={};dt.attribute=Q,Q&&Q.data&&(dt.data=Q.data),F[B]=dt,U++}s.attributes=F,s.attributesNum=U,s.index=C}function v(){const g=s.newAttributes;for(let y=0,L=g.length;y<L;y++)g[y]=0}function m(g){p(g,0)}function p(g,y){const L=s.newAttributes,C=s.enabledAttributes,F=s.attributeDivisors;L[g]=1,C[g]===0&&(n.enableVertexAttribArray(g),C[g]=1),F[g]!==y&&(n.vertexAttribDivisor(g,y),F[g]=y)}function S(){const g=s.newAttributes,y=s.enabledAttributes;for(let L=0,C=y.length;L<C;L++)y[L]!==g[L]&&(n.disableVertexAttribArray(L),y[L]=0)}function b(g,y,L,C,F,N,U){U===!0?n.vertexAttribIPointer(g,y,L,F,N):n.vertexAttribPointer(g,y,L,C,F,N)}function M(g,y,L,C){v();const F=C.attributes,N=L.getAttributes(),U=y.defaultAttributeValues;for(const V in N){const B=N[V];if(B.location>=0){let Z=F[V];if(Z===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(Z=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(Z=g.instanceColor)),Z!==void 0){const Q=Z.normalized,dt=Z.itemSize,Et=t.get(Z);if(Et===void 0)continue;const jt=Et.buffer,rt=Et.type,Lt=Et.bytesPerElement,Y=rt===n.INT||rt===n.UNSIGNED_INT||Z.gpuType===xa;if(Z.isInterleavedBufferAttribute){const j=Z.data,ft=j.stride,It=Z.offset;if(j.isInstancedInterleavedBuffer){for(let bt=0;bt<B.locationSize;bt++)p(B.location+bt,j.meshPerAttribute);g.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let bt=0;bt<B.locationSize;bt++)m(B.location+bt);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let bt=0;bt<B.locationSize;bt++)b(B.location+bt,dt/B.locationSize,rt,Q,ft*Lt,(It+dt/B.locationSize*bt)*Lt,Y)}else{if(Z.isInstancedBufferAttribute){for(let j=0;j<B.locationSize;j++)p(B.location+j,Z.meshPerAttribute);g.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let j=0;j<B.locationSize;j++)m(B.location+j);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let j=0;j<B.locationSize;j++)b(B.location+j,dt/B.locationSize,rt,Q,dt*Lt,dt/B.locationSize*j*Lt,Y)}}else if(U!==void 0){const Q=U[V];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(B.location,Q);break;case 3:n.vertexAttrib3fv(B.location,Q);break;case 4:n.vertexAttrib4fv(B.location,Q);break;default:n.vertexAttrib1fv(B.location,Q)}}}}S()}function A(){P();for(const g in i){const y=i[g];for(const L in y){const C=y[L];for(const F in C)u(C[F].object),delete C[F];delete y[L]}delete i[g]}}function T(g){if(i[g.id]===void 0)return;const y=i[g.id];for(const L in y){const C=y[L];for(const F in C)u(C[F].object),delete C[F];delete y[L]}delete i[g.id]}function R(g){for(const y in i){const L=i[y];if(L[g.id]===void 0)continue;const C=L[g.id];for(const F in C)u(C[F].object),delete C[F];delete L[g.id]}}function P(){x(),o=!0,s!==r&&(s=r,l(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Jp(n,t,e){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,f){f!==0&&(n.drawArraysInstanced(i,l,u,f),e.update(u,i,f))}function a(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];e.update(d,i,1)}function c(l,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*h[v];e.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Qp(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==dn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===Mr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Sn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==_n&&!P)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:A,maxSamples:T}}function tm(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new oi,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):l();else{const S=s?0:i,b=S*4;let M=p.clippingState||null;c.value=M,M=u(_,h,b,d);for(let A=0;A!==b;++A)M[A]=e[A];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const p=d+v*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=d;b!==v;++b,M+=4)o.copy(f[b]).applyMatrix4(S,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function em(n){let t=new WeakMap;function e(o,a){return a===Ro?o.mapping=Yi:a===Co&&(o.mapping=$i),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ro||a===Co)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ed(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Hi=4,Ec=[.125,.215,.35,.446,.526,.582],li=20,Js=new Pa,Tc=new Gt;let Qs=null,to=0,eo=0,no=!1;const ai=(1+Math.sqrt(5))/2,zi=1/ai,bc=[new O(-ai,zi,0),new O(ai,zi,0),new O(-zi,0,ai),new O(zi,0,ai),new O(0,ai,-zi),new O(0,ai,zi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],nm=new O;class wc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=nm}=s;Qs=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qs,to,eo),this._renderer.xr.enabled=no,t.scissorTest=!1,Yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qs=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Mr,format:dn,colorSpace:Ki,depthBuffer:!1},r=Ac(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ac(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=im(s)),this._blurMaterial=rm(s,t,e)}return r}_compileMaterial(t){const e=new ct(this._lodPlanes[0],t);this._renderer.compile(e,Js)}_sceneToCubeUV(t,e,i,r,s){const c=new sn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Tc),f.toneMapping=Nn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const v=new ie({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),m=new ct(new $t,v);let p=!1;const S=t.background;S?S.isColor&&(v.color.copy(S),t.background=null,p=!0):(v.color.copy(Tc),p=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[b],s.y,s.z)):M===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[b]));const A=this._cubeSize;Yr(r,M*A,b>2?A:0,A,A),f.setRenderTarget(r),p&&f.render(m,c),f.render(t,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=d,f.autoClear=h,t.background=S}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Yi||t.mapping===$i;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ct(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Yr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Js)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=bc[(r-s-1)%bc.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ct(this._lodPlanes[r],l),h=l.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*li-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):li;m>li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);const p=[];let S=0;for(let R=0;R<li;++R){const P=R/v,x=Math.exp(-P*P/2);p.push(x),R===0?S+=x:R<m&&(S+=2*x)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=_,h.mipInt.value=b-i;const M=this._sizeLods[r],A=3*M*(r>b-Hi?r-b+Hi:0),T=4*(this._cubeSize-M);Yr(e,A,T,3*M,2*M),c.setRenderTarget(e),c.render(f,Js)}}function im(n){const t=[],e=[],i=[];let r=n;const s=n-Hi+1+Ec.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-Hi?c=Ec[o-n+Hi-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,v=3,m=2,p=1,S=new Float32Array(v*_*d),b=new Float32Array(m*_*d),M=new Float32Array(p*_*d);for(let T=0;T<d;T++){const R=T%3*2/3-1,P=T>2?0:-1,x=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];S.set(x,v*_*T),b.set(h,m*_*T);const g=[T,T,T,T,T,T];M.set(g,p*_*T)}const A=new Oe;A.setAttribute("position",new Ae(S,v)),A.setAttribute("uv",new Ae(b,m)),A.setAttribute("faceIndex",new Ae(M,p)),t.push(A),r>Hi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ac(n,t,e){const i=new Kn(n,t,e);return i.texture.mapping=_s,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function rm(n,t,e){const i=new Float32Array(li),r=new O(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:La(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Rc(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:La(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Cc(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function La(){return`

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
	`}function sm(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ro||c===Co,u=c===Yi||c===$i;if(l||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new wc(n)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new wc(n)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function om(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&xr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function am(n,t,e,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const d in h)t.update(h[d],n.ARRAY_BUFFER)}function l(f){const h=[],d=f.index,_=f.attributes.position;let v=0;if(d!==null){const S=d.array;v=d.version;for(let b=0,M=S.length;b<M;b+=3){const A=S[b+0],T=S[b+1],R=S[b+2];h.push(A,T,T,R,R,A)}}else if(_!==void 0){const S=_.array;v=_.version;for(let b=0,M=S.length/3-1;b<M;b+=3){const A=b+0,T=b+1,R=b+2;h.push(A,T,T,R,R,A)}}else return;const m=new(Ll(h)?Fl:Nl)(h,1);m.version=v;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function cm(n,t,e){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,d){n.drawElements(i,d,s,h*o),e.update(d,i,1)}function l(h,d,_){_!==0&&(n.drawElementsInstanced(i,d,s,h*o,_),e.update(d,i,_))}function u(h,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,i,1)}function f(h,d,_,v){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,v,0,_);let p=0;for(let S=0;S<_;S++)p+=d[S]*v[S];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function lm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function um(n,t,e){const i=new WeakMap,r=new Se;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let g=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",g)};var d=g;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let A=a.attributes.position.count*M,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const R=new Float32Array(A*T*4*f),P=new Dl(R,A,T,f);P.type=_n,P.needsUpdate=!0;const x=M*4;for(let y=0;y<f;y++){const L=p[y],C=S[y],F=b[y],N=A*T*4*y;for(let U=0;U<L.count;U++){const V=U*x;_===!0&&(r.fromBufferAttribute(L,U),R[N+V+0]=r.x,R[N+V+1]=r.y,R[N+V+2]=r.z,R[N+V+3]=0),v===!0&&(r.fromBufferAttribute(C,U),R[N+V+4]=r.x,R[N+V+5]=r.y,R[N+V+6]=r.z,R[N+V+7]=0),m===!0&&(r.fromBufferAttribute(F,U),R[N+V+8]=r.x,R[N+V+9]=r.y,R[N+V+10]=r.z,R[N+V+11]=F.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new Wt(A,T)},i.set(a,h),a.addEventListener("dispose",g)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function hm(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const Xl=new Xe,Pc=new Hl(1,1),ql=new Dl,Yl=new zh,$l=new Bl,Lc=[],Dc=[],Ic=new Float32Array(16),Uc=new Float32Array(9),Nc=new Float32Array(4);function tr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Lc[r];if(s===void 0&&(s=new Float32Array(r),Lc[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ce(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ss(n,t){let e=Dc[t];e===void 0&&(e=new Int32Array(t),Dc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function dm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function fm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),Ce(e,t)}}function pm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),Ce(e,t)}}function mm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),Ce(e,t)}}function gm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;Nc.set(i),n.uniformMatrix2fv(this.addr,!1,Nc),Ce(e,i)}}function _m(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;Uc.set(i),n.uniformMatrix3fv(this.addr,!1,Uc),Ce(e,i)}}function xm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;Ic.set(i),n.uniformMatrix4fv(this.addr,!1,Ic),Ce(e,i)}}function vm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Mm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),Ce(e,t)}}function Sm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),Ce(e,t)}}function ym(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),Ce(e,t)}}function Em(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Tm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),Ce(e,t)}}function bm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),Ce(e,t)}}function wm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),Ce(e,t)}}function Am(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Pc.compareFunction=Pl,s=Pc):s=Xl,e.setTexture2D(t||s,r)}function Rm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Yl,r)}function Cm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||$l,r)}function Pm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||ql,r)}function Lm(n){switch(n){case 5126:return dm;case 35664:return fm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return _m;case 35676:return xm;case 5124:case 35670:return vm;case 35667:case 35671:return Mm;case 35668:case 35672:return Sm;case 35669:case 35673:return ym;case 5125:return Em;case 36294:return Tm;case 36295:return bm;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Pm}}function Dm(n,t){n.uniform1fv(this.addr,t)}function Im(n,t){const e=tr(t,this.size,2);n.uniform2fv(this.addr,e)}function Um(n,t){const e=tr(t,this.size,3);n.uniform3fv(this.addr,e)}function Nm(n,t){const e=tr(t,this.size,4);n.uniform4fv(this.addr,e)}function Fm(n,t){const e=tr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function zm(n,t){const e=tr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Om(n,t){const e=tr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Bm(n,t){n.uniform1iv(this.addr,t)}function km(n,t){n.uniform2iv(this.addr,t)}function Hm(n,t){n.uniform3iv(this.addr,t)}function Vm(n,t){n.uniform4iv(this.addr,t)}function Gm(n,t){n.uniform1uiv(this.addr,t)}function Wm(n,t){n.uniform2uiv(this.addr,t)}function Xm(n,t){n.uniform3uiv(this.addr,t)}function qm(n,t){n.uniform4uiv(this.addr,t)}function Ym(n,t,e){const i=this.cache,r=t.length,s=Ss(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Xl,s[o])}function $m(n,t,e){const i=this.cache,r=t.length,s=Ss(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Yl,s[o])}function Km(n,t,e){const i=this.cache,r=t.length,s=Ss(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||$l,s[o])}function Zm(n,t,e){const i=this.cache,r=t.length,s=Ss(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||ql,s[o])}function jm(n){switch(n){case 5126:return Dm;case 35664:return Im;case 35665:return Um;case 35666:return Nm;case 35674:return Fm;case 35675:return zm;case 35676:return Om;case 5124:case 35670:return Bm;case 35667:case 35671:return km;case 35668:case 35672:return Hm;case 35669:case 35673:return Vm;case 5125:return Gm;case 36294:return Wm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return Zm}}class Jm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Lm(e.type)}}class Qm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jm(e.type)}}class tg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const io=/(\w+)(\])?(\[|\.)?/g;function Fc(n,t){n.seq.push(t),n.map[t.id]=t}function eg(n,t,e){const i=n.name,r=i.length;for(io.lastIndex=0;;){const s=io.exec(i),o=io.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Fc(e,l===void 0?new Jm(a,n,t):new Qm(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new tg(a),Fc(e,f)),e=f}}}class os{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);eg(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function zc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const ng=37297;let ig=0;function rg(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Oc=new kt;function sg(n){Qt._getMatrix(Oc,Qt.workingColorSpace,n);const t=`mat3( ${Oc.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case hs:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Bc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+rg(n.getShaderSource(t),a)}else return s}function og(n,t){const e=sg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ag(n,t){let e;switch(t){case Ku:e="Linear";break;case Zu:e="Reinhard";break;case ju:e="Cineon";break;case Ju:e="ACESFilmic";break;case th:e="AgX";break;case eh:e="Neutral";break;case Qu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $r=new O;function cg(){Qt.getLuminanceCoefficients($r);const n=$r.x.toFixed(4),t=$r.y.toFixed(4),e=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function ug(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function hg(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function lr(n){return n!==""}function kc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function oa(n){return n.replace(dg,pg)}const fg=new Map;function pg(n,t){let e=Vt[t];if(e===void 0){const i=fg.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return oa(e)}const mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vc(n){return n.replace(mg,gg)}function gg(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _g(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vl?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ru?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function xg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Yi:case $i:t="ENVMAP_TYPE_CUBE";break;case _s:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vg(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===$i&&(t="ENVMAP_MODE_REFRACTION"),t}function Mg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ml:t="ENVMAP_BLENDING_MULTIPLY";break;case Yu:t="ENVMAP_BLENDING_MIX";break;case $u:t="ENVMAP_BLENDING_ADD";break}return t}function Sg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function yg(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=_g(e),l=xg(e),u=vg(e),f=Mg(e),h=Sg(e),d=lg(e),_=ug(s),v=r.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(lr).join(`
`),p.length>0&&(p+=`
`)):(m=[Gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),p=[Gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?ag("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,og("linearToOutputTexel",e.outputColorSpace),cg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lr).join(`
`)),o=oa(o),o=kc(o,e),o=Hc(o,e),a=oa(a),a=kc(a,e),a=Hc(a,e),o=Vc(o),a=Vc(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Za?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=S+m+o,M=S+p+a,A=zc(r,r.VERTEX_SHADER,b),T=zc(r,r.FRAGMENT_SHADER,M);r.attachShader(v,A),r.attachShader(v,T),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(y){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(v)||"",C=r.getShaderInfoLog(A)||"",F=r.getShaderInfoLog(T)||"",N=L.trim(),U=C.trim(),V=F.trim();let B=!0,Z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,T);else{const Q=Bc(r,A,"vertex"),dt=Bc(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+N+`
`+Q+`
`+dt)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||V==="")&&(Z=!1);Z&&(y.diagnostics={runnable:B,programLog:N,vertexShader:{log:U,prefix:m},fragmentShader:{log:V,prefix:p}})}r.deleteShader(A),r.deleteShader(T),P=new os(r,v),x=hg(r,v)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(v,ng)),g},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ig++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=T,this}let Eg=0;class Tg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new bg(t),e.set(t,i)),i}}class bg{constructor(t){this.id=Eg++,this.code=t,this.usedTimes=0}}function wg(n,t,e,i,r,s,o){const a=new Il,c=new Tg,l=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,g,y,L,C){const F=L.fog,N=C.geometry,U=x.isMeshStandardMaterial?L.environment:null,V=(x.isMeshStandardMaterial?e:t).get(x.envMap||U),B=V&&V.mapping===_s?V.image.height:null,Z=_[x.type];x.precision!==null&&(d=r.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const Q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,dt=Q!==void 0?Q.length:0;let Et=0;N.morphAttributes.position!==void 0&&(Et=1),N.morphAttributes.normal!==void 0&&(Et=2),N.morphAttributes.color!==void 0&&(Et=3);let jt,rt,Lt,Y;if(Z){const ee=mn[Z];jt=ee.vertexShader,rt=ee.fragmentShader}else jt=x.vertexShader,rt=x.fragmentShader,c.update(x),Lt=c.getVertexShaderID(x),Y=c.getFragmentShaderID(x);const j=n.getRenderTarget(),ft=n.state.buffers.depth.getReversed(),It=C.isInstancedMesh===!0,bt=C.isBatchedMesh===!0,Kt=!!x.map,Ne=!!x.matcap,I=!!V,pe=!!x.aoMap,Ot=!!x.lightMap,Ut=!!x.bumpMap,xt=!!x.normalMap,me=!!x.displacementMap,vt=!!x.emissiveMap,Ht=!!x.metalnessMap,Pe=!!x.roughnessMap,Ee=x.anisotropy>0,D=x.clearcoat>0,E=x.dispersion>0,G=x.iridescence>0,$=x.sheen>0,J=x.transmission>0,q=Ee&&!!x.anisotropyMap,Tt=D&&!!x.clearcoatMap,st=D&&!!x.clearcoatNormalMap,Mt=D&&!!x.clearcoatRoughnessMap,St=G&&!!x.iridescenceMap,nt=G&&!!x.iridescenceThicknessMap,ht=$&&!!x.sheenColorMap,Dt=$&&!!x.sheenRoughnessMap,yt=!!x.specularMap,lt=!!x.specularColorMap,Bt=!!x.specularIntensityMap,z=J&&!!x.transmissionMap,it=J&&!!x.thicknessMap,ot=!!x.gradientMap,mt=!!x.alphaMap,tt=x.alphaTest>0,K=!!x.alphaHash,_t=!!x.extensions;let zt=Nn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(zt=n.toneMapping);const ce={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:jt,fragmentShader:rt,defines:x.defines,customVertexShaderID:Lt,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:bt,batchingColor:bt&&C._colorsTexture!==null,instancing:It,instancingColor:It&&C.instanceColor!==null,instancingMorph:It&&C.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ki,alphaToCoverage:!!x.alphaToCoverage,map:Kt,matcap:Ne,envMap:I,envMapMode:I&&V.mapping,envMapCubeUVHeight:B,aoMap:pe,lightMap:Ot,bumpMap:Ut,normalMap:xt,displacementMap:h&&me,emissiveMap:vt,normalMapObjectSpace:xt&&x.normalMapType===sh,normalMapTangentSpace:xt&&x.normalMapType===Cl,metalnessMap:Ht,roughnessMap:Pe,anisotropy:Ee,anisotropyMap:q,clearcoat:D,clearcoatMap:Tt,clearcoatNormalMap:st,clearcoatRoughnessMap:Mt,dispersion:E,iridescence:G,iridescenceMap:St,iridescenceThicknessMap:nt,sheen:$,sheenColorMap:ht,sheenRoughnessMap:Dt,specularMap:yt,specularColorMap:lt,specularIntensityMap:Bt,transmission:J,transmissionMap:z,thicknessMap:it,gradientMap:ot,opaque:x.transparent===!1&&x.blending===Vi&&x.alphaToCoverage===!1,alphaMap:mt,alphaTest:tt,alphaHash:K,combine:x.combine,mapUv:Kt&&v(x.map.channel),aoMapUv:pe&&v(x.aoMap.channel),lightMapUv:Ot&&v(x.lightMap.channel),bumpMapUv:Ut&&v(x.bumpMap.channel),normalMapUv:xt&&v(x.normalMap.channel),displacementMapUv:me&&v(x.displacementMap.channel),emissiveMapUv:vt&&v(x.emissiveMap.channel),metalnessMapUv:Ht&&v(x.metalnessMap.channel),roughnessMapUv:Pe&&v(x.roughnessMap.channel),anisotropyMapUv:q&&v(x.anisotropyMap.channel),clearcoatMapUv:Tt&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&v(x.sheenRoughnessMap.channel),specularMapUv:yt&&v(x.specularMap.channel),specularColorMapUv:lt&&v(x.specularColorMap.channel),specularIntensityMapUv:Bt&&v(x.specularIntensityMap.channel),transmissionMapUv:z&&v(x.transmissionMap.channel),thicknessMapUv:it&&v(x.thicknessMap.channel),alphaMapUv:mt&&v(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(xt||Ee),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!N.attributes.uv&&(Kt||mt),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ft,skinning:C.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Et,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&y.length>0,shadowMapType:n.shadowMap.type,toneMapping:zt,decodeVideoTexture:Kt&&x.map.isVideoTexture===!0&&Qt.getTransfer(x.map.colorSpace)===oe,decodeVideoTextureEmissive:vt&&x.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(x.emissiveMap.colorSpace)===oe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Dn,flipSided:x.side===We,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_t&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&x.extensions.multiDraw===!0||bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ce.vertexUv1s=l.has(1),ce.vertexUv2s=l.has(2),ce.vertexUv3s=l.has(3),l.clear(),ce}function p(x){const g=[];if(x.shaderID?g.push(x.shaderID):(g.push(x.customVertexShaderID),g.push(x.customFragmentShaderID)),x.defines!==void 0)for(const y in x.defines)g.push(y),g.push(x.defines[y]);return x.isRawShaderMaterial===!1&&(S(g,x),b(g,x),g.push(n.outputColorSpace)),g.push(x.customProgramCacheKey),g.join()}function S(x,g){x.push(g.precision),x.push(g.outputColorSpace),x.push(g.envMapMode),x.push(g.envMapCubeUVHeight),x.push(g.mapUv),x.push(g.alphaMapUv),x.push(g.lightMapUv),x.push(g.aoMapUv),x.push(g.bumpMapUv),x.push(g.normalMapUv),x.push(g.displacementMapUv),x.push(g.emissiveMapUv),x.push(g.metalnessMapUv),x.push(g.roughnessMapUv),x.push(g.anisotropyMapUv),x.push(g.clearcoatMapUv),x.push(g.clearcoatNormalMapUv),x.push(g.clearcoatRoughnessMapUv),x.push(g.iridescenceMapUv),x.push(g.iridescenceThicknessMapUv),x.push(g.sheenColorMapUv),x.push(g.sheenRoughnessMapUv),x.push(g.specularMapUv),x.push(g.specularColorMapUv),x.push(g.specularIntensityMapUv),x.push(g.transmissionMapUv),x.push(g.thicknessMapUv),x.push(g.combine),x.push(g.fogExp2),x.push(g.sizeAttenuation),x.push(g.morphTargetsCount),x.push(g.morphAttributeCount),x.push(g.numDirLights),x.push(g.numPointLights),x.push(g.numSpotLights),x.push(g.numSpotLightMaps),x.push(g.numHemiLights),x.push(g.numRectAreaLights),x.push(g.numDirLightShadows),x.push(g.numPointLightShadows),x.push(g.numSpotLightShadows),x.push(g.numSpotLightShadowsWithMaps),x.push(g.numLightProbes),x.push(g.shadowMapType),x.push(g.toneMapping),x.push(g.numClippingPlanes),x.push(g.numClipIntersection),x.push(g.depthPacking)}function b(x,g){a.disableAll(),g.supportsVertexTextures&&a.enable(0),g.instancing&&a.enable(1),g.instancingColor&&a.enable(2),g.instancingMorph&&a.enable(3),g.matcap&&a.enable(4),g.envMap&&a.enable(5),g.normalMapObjectSpace&&a.enable(6),g.normalMapTangentSpace&&a.enable(7),g.clearcoat&&a.enable(8),g.iridescence&&a.enable(9),g.alphaTest&&a.enable(10),g.vertexColors&&a.enable(11),g.vertexAlphas&&a.enable(12),g.vertexUv1s&&a.enable(13),g.vertexUv2s&&a.enable(14),g.vertexUv3s&&a.enable(15),g.vertexTangents&&a.enable(16),g.anisotropy&&a.enable(17),g.alphaHash&&a.enable(18),g.batching&&a.enable(19),g.dispersion&&a.enable(20),g.batchingColor&&a.enable(21),g.gradientMap&&a.enable(22),x.push(a.mask),a.disableAll(),g.fog&&a.enable(0),g.useFog&&a.enable(1),g.flatShading&&a.enable(2),g.logarithmicDepthBuffer&&a.enable(3),g.reversedDepthBuffer&&a.enable(4),g.skinning&&a.enable(5),g.morphTargets&&a.enable(6),g.morphNormals&&a.enable(7),g.morphColors&&a.enable(8),g.premultipliedAlpha&&a.enable(9),g.shadowMapEnabled&&a.enable(10),g.doubleSided&&a.enable(11),g.flipSided&&a.enable(12),g.useDepthPacking&&a.enable(13),g.dithering&&a.enable(14),g.transmission&&a.enable(15),g.sheen&&a.enable(16),g.opaque&&a.enable(17),g.pointsUvs&&a.enable(18),g.decodeVideoTexture&&a.enable(19),g.decodeVideoTextureEmissive&&a.enable(20),g.alphaToCoverage&&a.enable(21),x.push(a.mask)}function M(x){const g=_[x.type];let y;if(g){const L=mn[g];y=jh.clone(L.uniforms)}else y=x.uniforms;return y}function A(x,g){let y;for(let L=0,C=u.length;L<C;L++){const F=u[L];if(F.cacheKey===g){y=F,++y.usedTimes;break}}return y===void 0&&(y=new yg(n,g,x,s),u.push(y)),y}function T(x){if(--x.usedTimes===0){const g=u.indexOf(x);u[g]=u[u.length-1],u.pop(),x.destroy()}}function R(x){c.remove(x)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:A,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:P}}function Ag(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Rg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Wc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Xc(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,h,d,_,v,m){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},n[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=v,p.group=m),t++,p}function a(f,h,d,_,v,m){const p=o(f,h,d,_,v,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function c(f,h,d,_,v,m){const p=o(f,h,d,_,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function l(f,h){e.length>1&&e.sort(f||Rg),i.length>1&&i.sort(h||Wc),r.length>1&&r.sort(h||Wc)}function u(){for(let f=t,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function Cg(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Xc,n.set(i,[o])):r>=s.length?(o=new Xc,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Pg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Gt};break;case"SpotLight":e={position:new O,direction:new O,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function Lg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Dg=0;function Ig(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ug(n){const t=new Pg,e=Lg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);const r=new O,s=new le,o=new le;function a(l){let u=0,f=0,h=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let d=0,_=0,v=0,m=0,p=0,S=0,b=0,M=0,A=0,T=0,R=0;l.sort(Ig);for(let x=0,g=l.length;x<g;x++){const y=l[x],L=y.color,C=y.intensity,F=y.distance,N=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)u+=L.r*C,f+=L.g*C,h+=L.b*C;else if(y.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(y.sh.coefficients[U],C);R++}else if(y.isDirectionalLight){const U=t.get(y);if(U.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const V=y.shadow,B=e.get(y);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,i.directionalShadow[d]=B,i.directionalShadowMap[d]=N,i.directionalShadowMatrix[d]=y.shadow.matrix,S++}i.directional[d]=U,d++}else if(y.isSpotLight){const U=t.get(y);U.position.setFromMatrixPosition(y.matrixWorld),U.color.copy(L).multiplyScalar(C),U.distance=F,U.coneCos=Math.cos(y.angle),U.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),U.decay=y.decay,i.spot[v]=U;const V=y.shadow;if(y.map&&(i.spotLightMap[A]=y.map,A++,V.updateMatrices(y),y.castShadow&&T++),i.spotLightMatrix[v]=V.matrix,y.castShadow){const B=e.get(y);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,i.spotShadow[v]=B,i.spotShadowMap[v]=N,M++}v++}else if(y.isRectAreaLight){const U=t.get(y);U.color.copy(L).multiplyScalar(C),U.halfWidth.set(y.width*.5,0,0),U.halfHeight.set(0,y.height*.5,0),i.rectArea[m]=U,m++}else if(y.isPointLight){const U=t.get(y);if(U.color.copy(y.color).multiplyScalar(y.intensity),U.distance=y.distance,U.decay=y.decay,y.castShadow){const V=y.shadow,B=e.get(y);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,B.shadowCameraNear=V.camera.near,B.shadowCameraFar=V.camera.far,i.pointShadow[_]=B,i.pointShadowMap[_]=N,i.pointShadowMatrix[_]=y.shadow.matrix,b++}i.point[_]=U,_++}else if(y.isHemisphereLight){const U=t.get(y);U.skyColor.copy(y.color).multiplyScalar(C),U.groundColor.copy(y.groundColor).multiplyScalar(C),i.hemi[p]=U,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==d||P.pointLength!==_||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==S||P.numPointShadows!==b||P.numSpotShadows!==M||P.numSpotMaps!==A||P.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,P.directionalLength=d,P.pointLength=_,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=S,P.numPointShadows=b,P.numSpotShadows=M,P.numSpotMaps=A,P.numLightProbes=R,i.version=Dg++)}function c(l,u){let f=0,h=0,d=0,_=0,v=0;const m=u.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const b=l[p];if(b.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(b.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function qc(n){const t=new Ug(n),e=[],i=[];function r(u){l.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Ng(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new qc(n),t.set(r,[a])):s>=o.length?(a=new qc(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const Fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zg=`uniform sampler2D shadow_pass;
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
}`;function Og(n,t,e){let i=new Aa;const r=new Wt,s=new Wt,o=new Se,a=new ad({depthPacking:rh}),c=new cd,l={},u=e.maxTextureSize,f={[$n]:We,[We]:$n,[Dn]:Dn},h=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:Fg,fragmentShader:zg}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new Oe;_.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ct(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vl;let p=this.type;this.render=function(T,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const x=n.getRenderTarget(),g=n.getActiveCubeFace(),y=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Yn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const C=p!==Ln&&this.type===Ln,F=p===Ln&&this.type!==Ln;for(let N=0,U=T.length;N<U;N++){const V=T[N],B=V.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const Z=B.getFrameExtents();if(r.multiply(Z),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,B.mapSize.y=s.y)),B.map===null||C===!0||F===!0){const dt=this.type!==Ln?{minFilter:De,magFilter:De}:{};B.map!==null&&B.map.dispose(),B.map=new Kn(r.x,r.y,dt),B.map.texture.name=V.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const Q=B.getViewportCount();for(let dt=0;dt<Q;dt++){const Et=B.getViewport(dt);o.set(s.x*Et.x,s.y*Et.y,s.x*Et.z,s.y*Et.w),L.viewport(o),B.updateMatrices(V,dt),i=B.getFrustum(),M(R,P,B.camera,V,this.type)}B.isPointLightShadow!==!0&&this.type===Ln&&S(B,P),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(x,g,y)};function S(T,R){const P=t.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Kn(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,P,h,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,P,d,v,null)}function b(T,R,P,x){let g=null;const y=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(y!==void 0)g=y;else if(g=P.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const L=g.uuid,C=R.uuid;let F=l[L];F===void 0&&(F={},l[L]=F);let N=F[C];N===void 0&&(N=g.clone(),F[C]=N,R.addEventListener("dispose",A)),g=N}if(g.visible=R.visible,g.wireframe=R.wireframe,x===Ln?g.side=R.shadowSide!==null?R.shadowSide:R.side:g.side=R.shadowSide!==null?R.shadowSide:f[R.side],g.alphaMap=R.alphaMap,g.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,g.map=R.map,g.clipShadows=R.clipShadows,g.clippingPlanes=R.clippingPlanes,g.clipIntersection=R.clipIntersection,g.displacementMap=R.displacementMap,g.displacementScale=R.displacementScale,g.displacementBias=R.displacementBias,g.wireframeLinewidth=R.wireframeLinewidth,g.linewidth=R.linewidth,P.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const L=n.properties.get(g);L.light=P}return g}function M(T,R,P,x,g){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&g===Ln)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const C=t.update(T),F=T.material;if(Array.isArray(F)){const N=C.groups;for(let U=0,V=N.length;U<V;U++){const B=N[U],Z=F[B.materialIndex];if(Z&&Z.visible){const Q=b(T,Z,x,g);T.onBeforeShadow(n,T,R,P,C,Q,B),n.renderBufferDirect(P,null,C,Q,T,B),T.onAfterShadow(n,T,R,P,C,Q,B)}}}else if(F.visible){const N=b(T,F,x,g);T.onBeforeShadow(n,T,R,P,C,N,null),n.renderBufferDirect(P,null,C,N,T,null),T.onAfterShadow(n,T,R,P,C,N,null)}}const L=T.children;for(let C=0,F=L.length;C<F;C++)M(L[C],R,P,x,g)}function A(T){T.target.removeEventListener("dispose",A);for(const P in l){const x=l[P],g=T.target.uuid;g in x&&(x[g].dispose(),delete x[g])}}}const Bg={[So]:yo,[Eo]:wo,[To]:Ao,[qi]:bo,[yo]:So,[wo]:Eo,[Ao]:To,[bo]:qi};function kg(n,t){function e(){let z=!1;const it=new Se;let ot=null;const mt=new Se(0,0,0,0);return{setMask:function(tt){ot!==tt&&!z&&(n.colorMask(tt,tt,tt,tt),ot=tt)},setLocked:function(tt){z=tt},setClear:function(tt,K,_t,zt,ce){ce===!0&&(tt*=zt,K*=zt,_t*=zt),it.set(tt,K,_t,zt),mt.equals(it)===!1&&(n.clearColor(tt,K,_t,zt),mt.copy(it))},reset:function(){z=!1,ot=null,mt.set(-1,0,0,0)}}}function i(){let z=!1,it=!1,ot=null,mt=null,tt=null;return{setReversed:function(K){if(it!==K){const _t=t.get("EXT_clip_control");K?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),it=K;const zt=tt;tt=null,this.setClear(zt)}},getReversed:function(){return it},setTest:function(K){K?j(n.DEPTH_TEST):ft(n.DEPTH_TEST)},setMask:function(K){ot!==K&&!z&&(n.depthMask(K),ot=K)},setFunc:function(K){if(it&&(K=Bg[K]),mt!==K){switch(K){case So:n.depthFunc(n.NEVER);break;case yo:n.depthFunc(n.ALWAYS);break;case Eo:n.depthFunc(n.LESS);break;case qi:n.depthFunc(n.LEQUAL);break;case To:n.depthFunc(n.EQUAL);break;case bo:n.depthFunc(n.GEQUAL);break;case wo:n.depthFunc(n.GREATER);break;case Ao:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}mt=K}},setLocked:function(K){z=K},setClear:function(K){tt!==K&&(it&&(K=1-K),n.clearDepth(K),tt=K)},reset:function(){z=!1,ot=null,mt=null,tt=null,it=!1}}}function r(){let z=!1,it=null,ot=null,mt=null,tt=null,K=null,_t=null,zt=null,ce=null;return{setTest:function(ee){z||(ee?j(n.STENCIL_TEST):ft(n.STENCIL_TEST))},setMask:function(ee){it!==ee&&!z&&(n.stencilMask(ee),it=ee)},setFunc:function(ee,yn,fn){(ot!==ee||mt!==yn||tt!==fn)&&(n.stencilFunc(ee,yn,fn),ot=ee,mt=yn,tt=fn)},setOp:function(ee,yn,fn){(K!==ee||_t!==yn||zt!==fn)&&(n.stencilOp(ee,yn,fn),K=ee,_t=yn,zt=fn)},setLocked:function(ee){z=ee},setClear:function(ee){ce!==ee&&(n.clearStencil(ee),ce=ee)},reset:function(){z=!1,it=null,ot=null,mt=null,tt=null,K=null,_t=null,zt=null,ce=null}}}const s=new e,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,d=[],_=null,v=!1,m=null,p=null,S=null,b=null,M=null,A=null,T=null,R=new Gt(0,0,0),P=0,x=!1,g=null,y=null,L=null,C=null,F=null;const N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,V=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(B)[1]),U=V>=1):B.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),U=V>=2);let Z=null,Q={};const dt=n.getParameter(n.SCISSOR_BOX),Et=n.getParameter(n.VIEWPORT),jt=new Se().fromArray(dt),rt=new Se().fromArray(Et);function Lt(z,it,ot,mt){const tt=new Uint8Array(4),K=n.createTexture();n.bindTexture(z,K),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _t=0;_t<ot;_t++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(it,0,n.RGBA,1,1,mt,0,n.RGBA,n.UNSIGNED_BYTE,tt):n.texImage2D(it+_t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,tt);return K}const Y={};Y[n.TEXTURE_2D]=Lt(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=Lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=Lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=Lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(n.DEPTH_TEST),o.setFunc(qi),Ut(!1),xt(Wa),j(n.CULL_FACE),pe(Yn);function j(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function ft(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function It(z,it){return f[z]!==it?(n.bindFramebuffer(z,it),f[z]=it,z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=it),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=it),!0):!1}function bt(z,it){let ot=d,mt=!1;if(z){ot=h.get(it),ot===void 0&&(ot=[],h.set(it,ot));const tt=z.textures;if(ot.length!==tt.length||ot[0]!==n.COLOR_ATTACHMENT0){for(let K=0,_t=tt.length;K<_t;K++)ot[K]=n.COLOR_ATTACHMENT0+K;ot.length=tt.length,mt=!0}}else ot[0]!==n.BACK&&(ot[0]=n.BACK,mt=!0);mt&&n.drawBuffers(ot)}function Kt(z){return _!==z?(n.useProgram(z),_=z,!0):!1}const Ne={[ci]:n.FUNC_ADD,[Pu]:n.FUNC_SUBTRACT,[Lu]:n.FUNC_REVERSE_SUBTRACT};Ne[Du]=n.MIN,Ne[Iu]=n.MAX;const I={[Uu]:n.ZERO,[Nu]:n.ONE,[Fu]:n.SRC_COLOR,[vo]:n.SRC_ALPHA,[Vu]:n.SRC_ALPHA_SATURATE,[ku]:n.DST_COLOR,[Ou]:n.DST_ALPHA,[zu]:n.ONE_MINUS_SRC_COLOR,[Mo]:n.ONE_MINUS_SRC_ALPHA,[Hu]:n.ONE_MINUS_DST_COLOR,[Bu]:n.ONE_MINUS_DST_ALPHA,[Gu]:n.CONSTANT_COLOR,[Wu]:n.ONE_MINUS_CONSTANT_COLOR,[Xu]:n.CONSTANT_ALPHA,[qu]:n.ONE_MINUS_CONSTANT_ALPHA};function pe(z,it,ot,mt,tt,K,_t,zt,ce,ee){if(z===Yn){v===!0&&(ft(n.BLEND),v=!1);return}if(v===!1&&(j(n.BLEND),v=!0),z!==Cu){if(z!==m||ee!==x){if((p!==ci||M!==ci)&&(n.blendEquation(n.FUNC_ADD),p=ci,M=ci),ee)switch(z){case Vi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xa:n.blendFunc(n.ONE,n.ONE);break;case qa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ya:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case qa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ya:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}S=null,b=null,A=null,T=null,R.set(0,0,0),P=0,m=z,x=ee}return}tt=tt||it,K=K||ot,_t=_t||mt,(it!==p||tt!==M)&&(n.blendEquationSeparate(Ne[it],Ne[tt]),p=it,M=tt),(ot!==S||mt!==b||K!==A||_t!==T)&&(n.blendFuncSeparate(I[ot],I[mt],I[K],I[_t]),S=ot,b=mt,A=K,T=_t),(zt.equals(R)===!1||ce!==P)&&(n.blendColor(zt.r,zt.g,zt.b,ce),R.copy(zt),P=ce),m=z,x=!1}function Ot(z,it){z.side===Dn?ft(n.CULL_FACE):j(n.CULL_FACE);let ot=z.side===We;it&&(ot=!ot),Ut(ot),z.blending===Vi&&z.transparent===!1?pe(Yn):pe(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const mt=z.stencilWrite;a.setTest(mt),mt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),vt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):ft(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(z){g!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),g=z)}function xt(z){z!==wu?(j(n.CULL_FACE),z!==y&&(z===Wa?n.cullFace(n.BACK):z===Au?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ft(n.CULL_FACE),y=z}function me(z){z!==L&&(U&&n.lineWidth(z),L=z)}function vt(z,it,ot){z?(j(n.POLYGON_OFFSET_FILL),(C!==it||F!==ot)&&(n.polygonOffset(it,ot),C=it,F=ot)):ft(n.POLYGON_OFFSET_FILL)}function Ht(z){z?j(n.SCISSOR_TEST):ft(n.SCISSOR_TEST)}function Pe(z){z===void 0&&(z=n.TEXTURE0+N-1),Z!==z&&(n.activeTexture(z),Z=z)}function Ee(z,it,ot){ot===void 0&&(Z===null?ot=n.TEXTURE0+N-1:ot=Z);let mt=Q[ot];mt===void 0&&(mt={type:void 0,texture:void 0},Q[ot]=mt),(mt.type!==z||mt.texture!==it)&&(Z!==ot&&(n.activeTexture(ot),Z=ot),n.bindTexture(z,it||Y[z]),mt.type=z,mt.texture=it)}function D(){const z=Q[Z];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function E(){try{n.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{n.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{n.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(){try{n.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function st(){try{n.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{n.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function St(){try{n.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{n.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(z){jt.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),jt.copy(z))}function Dt(z){rt.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),rt.copy(z))}function yt(z,it){let ot=l.get(it);ot===void 0&&(ot=new WeakMap,l.set(it,ot));let mt=ot.get(z);mt===void 0&&(mt=n.getUniformBlockIndex(it,z.name),ot.set(z,mt))}function lt(z,it){const mt=l.get(it).get(z);c.get(it)!==mt&&(n.uniformBlockBinding(it,mt,z.__bindingPointIndex),c.set(it,mt))}function Bt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Z=null,Q={},f={},h=new WeakMap,d=[],_=null,v=!1,m=null,p=null,S=null,b=null,M=null,A=null,T=null,R=new Gt(0,0,0),P=0,x=!1,g=null,y=null,L=null,C=null,F=null,jt.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:j,disable:ft,bindFramebuffer:It,drawBuffers:bt,useProgram:Kt,setBlending:pe,setMaterial:Ot,setFlipSided:Ut,setCullFace:xt,setLineWidth:me,setPolygonOffset:vt,setScissorTest:Ht,activeTexture:Pe,bindTexture:Ee,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:St,texImage3D:nt,updateUBOMapping:yt,uniformBlockBinding:lt,texStorage2D:st,texStorage3D:Mt,texSubImage2D:$,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:Tt,scissor:ht,viewport:Dt,reset:Bt}}function Hg(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Wt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,E){return d?new OffscreenCanvas(D,E):fs("canvas")}function v(D,E,G){let $=1;const J=Ee(D);if((J.width>G||J.height>G)&&($=G/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const q=Math.floor($*J.width),Tt=Math.floor($*J.height);f===void 0&&(f=_(q,Tt));const st=E?_(q,Tt):f;return st.width=q,st.height=Tt,st.getContext("2d").drawImage(D,0,0,q,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+Tt+")."),st}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){n.generateMipmap(D)}function S(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(D,E,G,$,J=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let q=E;if(E===n.RED&&(G===n.FLOAT&&(q=n.R32F),G===n.HALF_FLOAT&&(q=n.R16F),G===n.UNSIGNED_BYTE&&(q=n.R8)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(q=n.R8UI),G===n.UNSIGNED_SHORT&&(q=n.R16UI),G===n.UNSIGNED_INT&&(q=n.R32UI),G===n.BYTE&&(q=n.R8I),G===n.SHORT&&(q=n.R16I),G===n.INT&&(q=n.R32I)),E===n.RG&&(G===n.FLOAT&&(q=n.RG32F),G===n.HALF_FLOAT&&(q=n.RG16F),G===n.UNSIGNED_BYTE&&(q=n.RG8)),E===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(q=n.RG8UI),G===n.UNSIGNED_SHORT&&(q=n.RG16UI),G===n.UNSIGNED_INT&&(q=n.RG32UI),G===n.BYTE&&(q=n.RG8I),G===n.SHORT&&(q=n.RG16I),G===n.INT&&(q=n.RG32I)),E===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(q=n.RGB8UI),G===n.UNSIGNED_SHORT&&(q=n.RGB16UI),G===n.UNSIGNED_INT&&(q=n.RGB32UI),G===n.BYTE&&(q=n.RGB8I),G===n.SHORT&&(q=n.RGB16I),G===n.INT&&(q=n.RGB32I)),E===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),G===n.UNSIGNED_INT&&(q=n.RGBA32UI),G===n.BYTE&&(q=n.RGBA8I),G===n.SHORT&&(q=n.RGBA16I),G===n.INT&&(q=n.RGBA32I)),E===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),E===n.RGBA){const Tt=J?hs:Qt.getTransfer($);G===n.FLOAT&&(q=n.RGBA32F),G===n.HALF_FLOAT&&(q=n.RGBA16F),G===n.UNSIGNED_BYTE&&(q=Tt===oe?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function M(D,E){let G;return D?E===null||E===pi||E===pr?G=n.DEPTH24_STENCIL8:E===_n?G=n.DEPTH32F_STENCIL8:E===fr&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===pi||E===pr?G=n.DEPTH_COMPONENT24:E===_n?G=n.DEPTH_COMPONENT32F:E===fr&&(G=n.DEPTH_COMPONENT16),G}function A(D,E){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==De&&D.minFilter!==gn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function T(D){const E=D.target;E.removeEventListener("dispose",T),P(E),E.isVideoTexture&&u.delete(E)}function R(D){const E=D.target;E.removeEventListener("dispose",R),g(E)}function P(D){const E=i.get(D);if(E.__webglInit===void 0)return;const G=D.source,$=h.get(G);if($){const J=$[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&x(D),Object.keys($).length===0&&h.delete(G)}i.remove(D)}function x(D){const E=i.get(D);n.deleteTexture(E.__webglTexture);const G=D.source,$=h.get(G);delete $[E.__cacheKey],o.memory.textures--}function g(D){const E=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let J=0;J<E.__webglFramebuffer[$].length;J++)n.deleteFramebuffer(E.__webglFramebuffer[$][J]);else n.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)n.deleteFramebuffer(E.__webglFramebuffer[$]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=D.textures;for(let $=0,J=G.length;$<J;$++){const q=i.get(G[$]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(G[$])}i.remove(D)}let y=0;function L(){y=0}function C(){const D=y;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),y+=1,D}function F(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function N(D,E){const G=i.get(D);if(D.isVideoTexture&&Ht(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&G.__version!==D.version){const $=D.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,D,E);return}}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function U(D,E){const G=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){Y(G,D,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function V(D,E){const G=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){Y(G,D,E);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function B(D,E){const G=i.get(D);if(D.version>0&&G.__version!==D.version){j(G,D,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}const Z={[Po]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[Lo]:n.MIRRORED_REPEAT},Q={[De]:n.NEAREST,[nh]:n.NEAREST_MIPMAP_NEAREST,[Ar]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[Rs]:n.LINEAR_MIPMAP_NEAREST,[fi]:n.LINEAR_MIPMAP_LINEAR},dt={[oh]:n.NEVER,[dh]:n.ALWAYS,[ah]:n.LESS,[Pl]:n.LEQUAL,[ch]:n.EQUAL,[hh]:n.GEQUAL,[lh]:n.GREATER,[uh]:n.NOTEQUAL};function Et(D,E){if(E.type===_n&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===gn||E.magFilter===Rs||E.magFilter===Ar||E.magFilter===fi||E.minFilter===gn||E.minFilter===Rs||E.minFilter===Ar||E.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,Z[E.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,Z[E.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,Z[E.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,Q[E.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,Q[E.minFilter]),E.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,dt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===De||E.minFilter!==Ar&&E.minFilter!==fi||E.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function jt(D,E){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",T));const $=E.source;let J=h.get($);J===void 0&&(J={},h.set($,J));const q=F(E);if(q!==D.__cacheKey){J[q]===void 0&&(J[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),J[q].usedTimes++;const Tt=J[D.__cacheKey];Tt!==void 0&&(J[D.__cacheKey].usedTimes--,Tt.usedTimes===0&&x(E)),D.__cacheKey=q,D.__webglTexture=J[q].texture}return G}function rt(D,E,G){return Math.floor(Math.floor(D/G)/E)}function Lt(D,E,G,$){const q=D.updateRanges;if(q.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,G,$,E.data);else{q.sort((nt,ht)=>nt.start-ht.start);let Tt=0;for(let nt=1;nt<q.length;nt++){const ht=q[Tt],Dt=q[nt],yt=ht.start+ht.count,lt=rt(Dt.start,E.width,4),Bt=rt(ht.start,E.width,4);Dt.start<=yt+1&&lt===Bt&&rt(Dt.start+Dt.count-1,E.width,4)===lt?ht.count=Math.max(ht.count,Dt.start+Dt.count-ht.start):(++Tt,q[Tt]=Dt)}q.length=Tt+1;const st=n.getParameter(n.UNPACK_ROW_LENGTH),Mt=n.getParameter(n.UNPACK_SKIP_PIXELS),St=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let nt=0,ht=q.length;nt<ht;nt++){const Dt=q[nt],yt=Math.floor(Dt.start/4),lt=Math.ceil(Dt.count/4),Bt=yt%E.width,z=Math.floor(yt/E.width),it=lt,ot=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Bt),n.pixelStorei(n.UNPACK_SKIP_ROWS,z),e.texSubImage2D(n.TEXTURE_2D,0,Bt,z,it,ot,G,$,E.data)}D.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,st),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Mt),n.pixelStorei(n.UNPACK_SKIP_ROWS,St)}}function Y(D,E,G){let $=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=n.TEXTURE_3D);const J=jt(D,E),q=E.source;e.bindTexture($,D.__webglTexture,n.TEXTURE0+G);const Tt=i.get(q);if(q.version!==Tt.__version||J===!0){e.activeTexture(n.TEXTURE0+G);const st=Qt.getPrimaries(Qt.workingColorSpace),Mt=E.colorSpace===In?null:Qt.getPrimaries(E.colorSpace),St=E.colorSpace===In||st===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let nt=v(E.image,!1,r.maxTextureSize);nt=Pe(E,nt);const ht=s.convert(E.format,E.colorSpace),Dt=s.convert(E.type);let yt=b(E.internalFormat,ht,Dt,E.colorSpace,E.isVideoTexture);Et($,E);let lt;const Bt=E.mipmaps,z=E.isVideoTexture!==!0,it=Tt.__version===void 0||J===!0,ot=q.dataReady,mt=A(E,nt);if(E.isDepthTexture)yt=M(E.format===gr,E.type),it&&(z?e.texStorage2D(n.TEXTURE_2D,1,yt,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,yt,nt.width,nt.height,0,ht,Dt,null));else if(E.isDataTexture)if(Bt.length>0){z&&it&&e.texStorage2D(n.TEXTURE_2D,mt,yt,Bt[0].width,Bt[0].height);for(let tt=0,K=Bt.length;tt<K;tt++)lt=Bt[tt],z?ot&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,lt.width,lt.height,ht,Dt,lt.data):e.texImage2D(n.TEXTURE_2D,tt,yt,lt.width,lt.height,0,ht,Dt,lt.data);E.generateMipmaps=!1}else z?(it&&e.texStorage2D(n.TEXTURE_2D,mt,yt,nt.width,nt.height),ot&&Lt(E,nt,ht,Dt)):e.texImage2D(n.TEXTURE_2D,0,yt,nt.width,nt.height,0,ht,Dt,nt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){z&&it&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,yt,Bt[0].width,Bt[0].height,nt.depth);for(let tt=0,K=Bt.length;tt<K;tt++)if(lt=Bt[tt],E.format!==dn)if(ht!==null)if(z){if(ot)if(E.layerUpdates.size>0){const _t=yc(lt.width,lt.height,E.format,E.type);for(const zt of E.layerUpdates){const ce=lt.data.subarray(zt*_t/lt.data.BYTES_PER_ELEMENT,(zt+1)*_t/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,zt,lt.width,lt.height,1,ht,ce)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,nt.depth,ht,lt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,yt,lt.width,lt.height,nt.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?ot&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,nt.depth,ht,Dt,lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,yt,lt.width,lt.height,nt.depth,0,ht,Dt,lt.data)}else{z&&it&&e.texStorage2D(n.TEXTURE_2D,mt,yt,Bt[0].width,Bt[0].height);for(let tt=0,K=Bt.length;tt<K;tt++)lt=Bt[tt],E.format!==dn?ht!==null?z?ot&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,lt.width,lt.height,ht,lt.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,yt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?ot&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,lt.width,lt.height,ht,Dt,lt.data):e.texImage2D(n.TEXTURE_2D,tt,yt,lt.width,lt.height,0,ht,Dt,lt.data)}else if(E.isDataArrayTexture)if(z){if(it&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,yt,nt.width,nt.height,nt.depth),ot)if(E.layerUpdates.size>0){const tt=yc(nt.width,nt.height,E.format,E.type);for(const K of E.layerUpdates){const _t=nt.data.subarray(K*tt/nt.data.BYTES_PER_ELEMENT,(K+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,ht,Dt,_t)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ht,Dt,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,yt,nt.width,nt.height,nt.depth,0,ht,Dt,nt.data);else if(E.isData3DTexture)z?(it&&e.texStorage3D(n.TEXTURE_3D,mt,yt,nt.width,nt.height,nt.depth),ot&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ht,Dt,nt.data)):e.texImage3D(n.TEXTURE_3D,0,yt,nt.width,nt.height,nt.depth,0,ht,Dt,nt.data);else if(E.isFramebufferTexture){if(it)if(z)e.texStorage2D(n.TEXTURE_2D,mt,yt,nt.width,nt.height);else{let tt=nt.width,K=nt.height;for(let _t=0;_t<mt;_t++)e.texImage2D(n.TEXTURE_2D,_t,yt,tt,K,0,ht,Dt,null),tt>>=1,K>>=1}}else if(Bt.length>0){if(z&&it){const tt=Ee(Bt[0]);e.texStorage2D(n.TEXTURE_2D,mt,yt,tt.width,tt.height)}for(let tt=0,K=Bt.length;tt<K;tt++)lt=Bt[tt],z?ot&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,ht,Dt,lt):e.texImage2D(n.TEXTURE_2D,tt,yt,ht,Dt,lt);E.generateMipmaps=!1}else if(z){if(it){const tt=Ee(nt);e.texStorage2D(n.TEXTURE_2D,mt,yt,tt.width,tt.height)}ot&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht,Dt,nt)}else e.texImage2D(n.TEXTURE_2D,0,yt,ht,Dt,nt);m(E)&&p($),Tt.__version=q.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function j(D,E,G){if(E.image.length!==6)return;const $=jt(D,E),J=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+G);const q=i.get(J);if(J.version!==q.__version||$===!0){e.activeTexture(n.TEXTURE0+G);const Tt=Qt.getPrimaries(Qt.workingColorSpace),st=E.colorSpace===In?null:Qt.getPrimaries(E.colorSpace),Mt=E.colorSpace===In||Tt===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const St=E.isCompressedTexture||E.image[0].isCompressedTexture,nt=E.image[0]&&E.image[0].isDataTexture,ht=[];for(let K=0;K<6;K++)!St&&!nt?ht[K]=v(E.image[K],!0,r.maxCubemapSize):ht[K]=nt?E.image[K].image:E.image[K],ht[K]=Pe(E,ht[K]);const Dt=ht[0],yt=s.convert(E.format,E.colorSpace),lt=s.convert(E.type),Bt=b(E.internalFormat,yt,lt,E.colorSpace),z=E.isVideoTexture!==!0,it=q.__version===void 0||$===!0,ot=J.dataReady;let mt=A(E,Dt);Et(n.TEXTURE_CUBE_MAP,E);let tt;if(St){z&&it&&e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Bt,Dt.width,Dt.height);for(let K=0;K<6;K++){tt=ht[K].mipmaps;for(let _t=0;_t<tt.length;_t++){const zt=tt[_t];E.format!==dn?yt!==null?z?ot&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,zt.width,zt.height,yt,zt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Bt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,zt.width,zt.height,yt,lt,zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Bt,zt.width,zt.height,0,yt,lt,zt.data)}}}else{if(tt=E.mipmaps,z&&it){tt.length>0&&mt++;const K=Ee(ht[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Bt,K.width,K.height)}for(let K=0;K<6;K++)if(nt){z?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ht[K].width,ht[K].height,yt,lt,ht[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Bt,ht[K].width,ht[K].height,0,yt,lt,ht[K].data);for(let _t=0;_t<tt.length;_t++){const ce=tt[_t].image[K].image;z?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,ce.width,ce.height,yt,lt,ce.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Bt,ce.width,ce.height,0,yt,lt,ce.data)}}else{z?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,yt,lt,ht[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Bt,yt,lt,ht[K]);for(let _t=0;_t<tt.length;_t++){const zt=tt[_t];z?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,yt,lt,zt.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Bt,yt,lt,zt.image[K])}}}m(E)&&p(n.TEXTURE_CUBE_MAP),q.__version=J.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function ft(D,E,G,$,J,q){const Tt=s.convert(G.format,G.colorSpace),st=s.convert(G.type),Mt=b(G.internalFormat,Tt,st,G.colorSpace),St=i.get(E),nt=i.get(G);if(nt.__renderTarget=E,!St.__hasExternalTextures){const ht=Math.max(1,E.width>>q),Dt=Math.max(1,E.height>>q);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,q,Mt,ht,Dt,E.depth,0,Tt,st,null):e.texImage2D(J,q,Mt,ht,Dt,0,Tt,st,null)}e.bindFramebuffer(n.FRAMEBUFFER,D),vt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,J,nt.__webglTexture,0,me(E)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,J,nt.__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function It(D,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,D),E.depthBuffer){const $=E.depthTexture,J=$&&$.isDepthTexture?$.type:null,q=M(E.stencilBuffer,J),Tt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=me(E);vt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st,q,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,st,q,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,q,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,D)}else{const $=E.textures;for(let J=0;J<$.length;J++){const q=$[J],Tt=s.convert(q.format,q.colorSpace),st=s.convert(q.type),Mt=b(q.internalFormat,Tt,st,q.colorSpace),St=me(E);G&&vt(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,Mt,E.width,E.height):vt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,Mt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function bt(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(E.depthTexture);$.__renderTarget=E,(!$.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),N(E.depthTexture,0);const J=$.__webglTexture,q=me(E);if(E.depthTexture.format===mr)vt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(E.depthTexture.format===gr)vt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Kt(D){const E=i.get(D),G=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const $=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){const J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=$}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const $=D.texture.mipmaps;$&&$.length>0?bt(E.__webglFramebuffer[0],D):bt(E.__webglFramebuffer,D)}else if(G){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=n.createRenderbuffer(),It(E.__webglDepthbuffer[$],D,!1);else{const J=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,q)}}else{const $=D.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),It(E.__webglDepthbuffer,D,!1);else{const J=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,q)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(D,E,G){const $=i.get(D);E!==void 0&&ft($.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Kt(D)}function I(D){const E=D.texture,G=i.get(D),$=i.get(E);D.addEventListener("dispose",R);const J=D.textures,q=D.isWebGLCubeRenderTarget===!0,Tt=J.length>1;if(Tt||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=E.version,o.memory.textures++),q){G.__webglFramebuffer=[];for(let st=0;st<6;st++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[st]=[];for(let Mt=0;Mt<E.mipmaps.length;Mt++)G.__webglFramebuffer[st][Mt]=n.createFramebuffer()}else G.__webglFramebuffer[st]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let st=0;st<E.mipmaps.length;st++)G.__webglFramebuffer[st]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let st=0,Mt=J.length;st<Mt;st++){const St=i.get(J[st]);St.__webglTexture===void 0&&(St.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&vt(D)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let st=0;st<J.length;st++){const Mt=J[st];G.__webglColorRenderbuffer[st]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[st]);const St=s.convert(Mt.format,Mt.colorSpace),nt=s.convert(Mt.type),ht=b(Mt.internalFormat,St,nt,Mt.colorSpace,D.isXRRenderTarget===!0),Dt=me(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,ht,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,G.__webglColorRenderbuffer[st])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),It(G.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Et(n.TEXTURE_CUBE_MAP,E);for(let st=0;st<6;st++)if(E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)ft(G.__webglFramebuffer[st][Mt],D,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Mt);else ft(G.__webglFramebuffer[st],D,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(E)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let st=0,Mt=J.length;st<Mt;st++){const St=J[st],nt=i.get(St);let ht=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ht=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,nt.__webglTexture),Et(ht,St),ft(G.__webglFramebuffer,D,St,n.COLOR_ATTACHMENT0+st,ht,0),m(St)&&p(ht)}e.unbindTexture()}else{let st=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(st=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,$.__webglTexture),Et(st,E),E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)ft(G.__webglFramebuffer[Mt],D,E,n.COLOR_ATTACHMENT0,st,Mt);else ft(G.__webglFramebuffer,D,E,n.COLOR_ATTACHMENT0,st,0);m(E)&&p(st),e.unbindTexture()}D.depthBuffer&&Kt(D)}function pe(D){const E=D.textures;for(let G=0,$=E.length;G<$;G++){const J=E[G];if(m(J)){const q=S(D),Tt=i.get(J).__webglTexture;e.bindTexture(q,Tt),p(q),e.unbindTexture()}}}const Ot=[],Ut=[];function xt(D){if(D.samples>0){if(vt(D)===!1){const E=D.textures,G=D.width,$=D.height;let J=n.COLOR_BUFFER_BIT;const q=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(D),st=E.length>1;if(st)for(let St=0;St<E.length;St++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const Mt=D.texture.mipmaps;Mt&&Mt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let St=0;St<E.length;St++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),st){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[St]);const nt=i.get(E[St]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,nt,0)}n.blitFramebuffer(0,0,G,$,0,0,G,$,J,n.NEAREST),c===!0&&(Ot.length=0,Ut.length=0,Ot.push(n.COLOR_ATTACHMENT0+St),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ot.push(q),Ut.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ut)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),st)for(let St=0;St<E.length;St++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[St]);const nt=i.get(E[St]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,nt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const E=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function me(D){return Math.min(r.maxSamples,D.samples)}function vt(D){const E=i.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ht(D){const E=o.render.frame;u.get(D)!==E&&(u.set(D,E),D.update())}function Pe(D,E){const G=D.colorSpace,$=D.format,J=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==Ki&&G!==In&&(Qt.getTransfer(G)===oe?($!==dn||J!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Ee(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=C,this.resetTextureUnits=L,this.setTexture2D=N,this.setTexture2DArray=U,this.setTexture3D=V,this.setTextureCube=B,this.rebindTextures=Ne,this.setupRenderTarget=I,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=vt}function Vg(n,t){function e(i,r=In){let s;const o=Qt.getTransfer(r);if(i===Sn)return n.UNSIGNED_BYTE;if(i===va)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ma)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Tl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===yl)return n.BYTE;if(i===El)return n.SHORT;if(i===fr)return n.UNSIGNED_SHORT;if(i===xa)return n.INT;if(i===pi)return n.UNSIGNED_INT;if(i===_n)return n.FLOAT;if(i===Mr)return n.HALF_FLOAT;if(i===wl)return n.ALPHA;if(i===Al)return n.RGB;if(i===dn)return n.RGBA;if(i===mr)return n.DEPTH_COMPONENT;if(i===gr)return n.DEPTH_STENCIL;if(i===xs)return n.RED;if(i===Sa)return n.RED_INTEGER;if(i===Rl)return n.RG;if(i===ya)return n.RG_INTEGER;if(i===Ea)return n.RGBA_INTEGER;if(i===ns||i===is||i===rs||i===ss)if(o===oe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ns)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ns)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===is)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ss)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Do||i===Io||i===Uo||i===No)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Do)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Io)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===No)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fo||i===zo||i===Oo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fo||i===zo)return o===oe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Oo)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bo||i===ko||i===Ho||i===Vo||i===Go||i===Wo||i===Xo||i===qo||i===Yo||i===$o||i===Ko||i===Zo||i===jo||i===Jo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bo)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ko)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ho)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vo)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Go)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wo)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xo)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qo)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yo)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$o)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ko)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zo)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jo)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jo)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qo||i===ta||i===ea)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Qo)return o===oe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ta)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ea)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===na||i===ia||i===ra||i===sa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===na)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ia)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ra)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Gg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wg=`
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

}`;class Xg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Vl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Zn({vertexShader:Gg,fragmentShader:Wg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ct(new Er(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qg extends Ji{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,_=null;const v=typeof XRWebGLBinding<"u",m=new Xg,p={},S=e.getContextAttributes();let b=null,M=null;const A=[],T=[],R=new Wt;let P=null;const x=new sn;x.viewport=new Se;const g=new sn;g.viewport=new Se;const y=[x,g],L=new dd;let C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=A[Y];return j===void 0&&(j=new Ks,A[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=A[Y];return j===void 0&&(j=new Ks,A[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=A[Y];return j===void 0&&(j=new Ks,A[Y]=j),j.getHandSpace()};function N(Y){const j=T.indexOf(Y.inputSource);if(j===-1)return;const ft=A[j];ft!==void 0&&(ft.update(Y.inputSource,Y.frame,l||o),ft.dispatchEvent({type:Y.type,data:Y.inputSource}))}function U(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",V);for(let Y=0;Y<A.length;Y++){const j=T[Y];j!==null&&(T[Y]=null,A[Y].disconnect(j))}C=null,F=null,m.reset();for(const Y in p)delete p[Y];t.setRenderTarget(b),d=null,h=null,f=null,r=null,M=null,Lt.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(b=t.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",U),r.addEventListener("inputsourceschange",V),S.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,It=null,bt=null;S.depth&&(bt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=S.stencil?gr:mr,It=S.stencil?pr:pi);const Kt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Kt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new Kn(h.textureWidth,h.textureHeight,{format:dn,type:Sn,depthTexture:new Hl(h.textureWidth,h.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ft={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,ft),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Kn(d.framebufferWidth,d.framebufferHeight,{format:dn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Lt.setContext(r),Lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(Y){for(let j=0;j<Y.removed.length;j++){const ft=Y.removed[j],It=T.indexOf(ft);It>=0&&(T[It]=null,A[It].disconnect(ft))}for(let j=0;j<Y.added.length;j++){const ft=Y.added[j];let It=T.indexOf(ft);if(It===-1){for(let Kt=0;Kt<A.length;Kt++)if(Kt>=T.length){T.push(ft),It=Kt;break}else if(T[Kt]===null){T[Kt]=ft,It=Kt;break}if(It===-1)break}const bt=A[It];bt&&bt.connect(ft)}}const B=new O,Z=new O;function Q(Y,j,ft){B.setFromMatrixPosition(j.matrixWorld),Z.setFromMatrixPosition(ft.matrixWorld);const It=B.distanceTo(Z),bt=j.projectionMatrix.elements,Kt=ft.projectionMatrix.elements,Ne=bt[14]/(bt[10]-1),I=bt[14]/(bt[10]+1),pe=(bt[9]+1)/bt[5],Ot=(bt[9]-1)/bt[5],Ut=(bt[8]-1)/bt[0],xt=(Kt[8]+1)/Kt[0],me=Ne*Ut,vt=Ne*xt,Ht=It/(-Ut+xt),Pe=Ht*-Ut;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Pe),Y.translateZ(Ht),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),bt[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Ee=Ne+Ht,D=I+Ht,E=me-Pe,G=vt+(It-Pe),$=pe*I/D*Ee,J=Ot*I/D*Ee;Y.projectionMatrix.makePerspective(E,G,$,J,Ee,D),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function dt(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let j=Y.near,ft=Y.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ft=m.depthFar)),L.near=g.near=x.near=j,L.far=g.far=x.far=ft,(C!==L.near||F!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),C=L.near,F=L.far),L.layers.mask=Y.layers.mask|6,x.layers.mask=L.layers.mask&3,g.layers.mask=L.layers.mask&5;const It=Y.parent,bt=L.cameras;dt(L,It);for(let Kt=0;Kt<bt.length;Kt++)dt(bt[Kt],It);bt.length===2?Q(L,x,g):L.projectionMatrix.copy(x.projectionMatrix),Et(Y,L,It)};function Et(Y,j,ft){ft===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(ft.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=_r*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(Y){c=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Y){return p[Y]};let jt=null;function rt(Y,j){if(u=j.getViewerPose(l||o),_=j,u!==null){const ft=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let It=!1;ft.length!==L.cameras.length&&(L.cameras.length=0,It=!0);for(let I=0;I<ft.length;I++){const pe=ft[I];let Ot=null;if(d!==null)Ot=d.getViewport(pe);else{const xt=f.getViewSubImage(h,pe);Ot=xt.viewport,I===0&&(t.setRenderTargetTextures(M,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(M))}let Ut=y[I];Ut===void 0&&(Ut=new sn,Ut.layers.enable(I),Ut.viewport=new Se,y[I]=Ut),Ut.matrix.fromArray(pe.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(pe.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),I===0&&(L.matrix.copy(Ut.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),It===!0&&L.cameras.push(Ut)}const bt=r.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const I=f.getDepthInformation(ft[0]);I&&I.isValid&&I.texture&&m.init(I,r.renderState)}if(bt&&bt.includes("camera-access")&&v){t.state.unbindTexture(),f=i.getBinding();for(let I=0;I<ft.length;I++){const pe=ft[I].camera;if(pe){let Ot=p[pe];Ot||(Ot=new Vl,p[pe]=Ot);const Ut=f.getCameraImage(pe);Ot.sourceTexture=Ut}}}}for(let ft=0;ft<A.length;ft++){const It=T[ft],bt=A[ft];It!==null&&bt!==void 0&&bt.update(It,j,l||o)}jt&&jt(Y,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}const Lt=new Wl;Lt.setAnimationLoop(rt),this.setAnimationLoop=function(Y){jt=Y},this.dispose=function(){}}}const ri=new zn,Yg=new le;function $g(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,zl(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),b=S.envMap,M=S.envMapRotation;b&&(m.envMap.value=b,ri.copy(M),ri.x*=-1,ri.y*=-1,ri.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),m.envMapRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(ri)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Kg(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){const M=b.program;i.uniformBlockBinding(S,M)}function l(S,b){let M=r[S.id];M===void 0&&(_(S),M=u(S),r[S.id]=M,S.addEventListener("dispose",m));const A=b.program;i.updateUBOMapping(S,A);const T=t.render.frame;s[S.id]!==T&&(h(S),s[S.id]=T)}function u(S){const b=f();S.__bindingPointIndex=b;const M=n.createBuffer(),A=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const b=r[S.id],M=S.uniforms,A=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,R=M.length;T<R;T++){const P=Array.isArray(M[T])?M[T]:[M[T]];for(let x=0,g=P.length;x<g;x++){const y=P[x];if(d(y,T,x,A)===!0){const L=y.__offset,C=Array.isArray(y.value)?y.value:[y.value];let F=0;for(let N=0;N<C.length;N++){const U=C[N],V=v(U);typeof U=="number"||typeof U=="boolean"?(y.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,L+F,y.__data)):U.isMatrix3?(y.__data[0]=U.elements[0],y.__data[1]=U.elements[1],y.__data[2]=U.elements[2],y.__data[3]=0,y.__data[4]=U.elements[3],y.__data[5]=U.elements[4],y.__data[6]=U.elements[5],y.__data[7]=0,y.__data[8]=U.elements[6],y.__data[9]=U.elements[7],y.__data[10]=U.elements[8],y.__data[11]=0):(U.toArray(y.__data,F),F+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,y.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,b,M,A){const T=S.value,R=b+"_"+M;if(A[R]===void 0)return typeof T=="number"||typeof T=="boolean"?A[R]=T:A[R]=T.clone(),!0;{const P=A[R];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return A[R]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function _(S){const b=S.uniforms;let M=0;const A=16;for(let R=0,P=b.length;R<P;R++){const x=Array.isArray(b[R])?b[R]:[b[R]];for(let g=0,y=x.length;g<y;g++){const L=x[g],C=Array.isArray(L.value)?L.value:[L.value];for(let F=0,N=C.length;F<N;F++){const U=C[F],V=v(U),B=M%A,Z=B%V.boundary,Q=B+Z;M+=Z,Q!==0&&A-Q<V.storage&&(M+=A-Q),L.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=V.storage}}}const T=M%A;return T>0&&(M+=A-T),S.__size=M,S.__cache={},this}function v(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){const b=S.target;b.removeEventListener("dispose",m);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class Zg{constructor(t={}){const{canvas:e=Ph(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const S=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let A=!1;this._outputColorSpace=Ze;let T=0,R=0,P=null,x=-1,g=null;const y=new Se,L=new Se;let C=null;const F=new Gt(0);let N=0,U=e.width,V=e.height,B=1,Z=null,Q=null;const dt=new Se(0,0,U,V),Et=new Se(0,0,U,V);let jt=!1;const rt=new Aa;let Lt=!1,Y=!1;const j=new le,ft=new O,It=new Se,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function Ne(){return P===null?B:1}let I=i;function pe(w,k){return e.getContext(w,k)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_a}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",tt,!1),I===null){const k="webgl2";if(I=pe(k,w),I===null)throw pe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ot,Ut,xt,me,vt,Ht,Pe,Ee,D,E,G,$,J,q,Tt,st,Mt,St,nt,ht,Dt,yt,lt,Bt;function z(){Ot=new om(I),Ot.init(),yt=new Vg(I,Ot),Ut=new Qp(I,Ot,t,yt),xt=new kg(I,Ot),Ut.reversedDepthBuffer&&h&&xt.buffers.depth.setReversed(!0),me=new lm(I),vt=new Ag,Ht=new Hg(I,Ot,xt,vt,Ut,yt,me),Pe=new em(M),Ee=new sm(M),D=new pd(I),lt=new jp(I,D),E=new am(I,D,me,lt),G=new hm(I,E,D,me),nt=new um(I,Ut,Ht),st=new tm(vt),$=new wg(M,Pe,Ee,Ot,Ut,lt,st),J=new $g(M,vt),q=new Cg,Tt=new Ng(Ot),St=new Zp(M,Pe,Ee,xt,G,d,c),Mt=new Og(M,G,Ut),Bt=new Kg(I,me,Ut,xt),ht=new Jp(I,Ot,me),Dt=new cm(I,Ot,me),me.programs=$.programs,M.capabilities=Ut,M.extensions=Ot,M.properties=vt,M.renderLists=q,M.shadowMap=Mt,M.state=xt,M.info=me}z();const it=new qg(M,I);this.xr=it,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Ot.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ot.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(U,V,!1))},this.getSize=function(w){return w.set(U,V)},this.setSize=function(w,k,W=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,V=k,e.width=Math.floor(w*B),e.height=Math.floor(k*B),W===!0&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(U*B,V*B).floor()},this.setDrawingBufferSize=function(w,k,W){U=w,V=k,B=W,e.width=Math.floor(w*W),e.height=Math.floor(k*W),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(dt)},this.setViewport=function(w,k,W,X){w.isVector4?dt.set(w.x,w.y,w.z,w.w):dt.set(w,k,W,X),xt.viewport(y.copy(dt).multiplyScalar(B).round())},this.getScissor=function(w){return w.copy(Et)},this.setScissor=function(w,k,W,X){w.isVector4?Et.set(w.x,w.y,w.z,w.w):Et.set(w,k,W,X),xt.scissor(L.copy(Et).multiplyScalar(B).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(w){xt.setScissorTest(jt=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,W=!0){let X=0;if(w){let H=!1;if(P!==null){const et=P.texture.format;H=et===Ea||et===ya||et===Sa}if(H){const et=P.texture.type,ut=et===Sn||et===pi||et===fr||et===pr||et===va||et===Ma,gt=St.getClearColor(),pt=St.getClearAlpha(),Pt=gt.r,Nt=gt.g,wt=gt.b;ut?(_[0]=Pt,_[1]=Nt,_[2]=wt,_[3]=pt,I.clearBufferuiv(I.COLOR,0,_)):(v[0]=Pt,v[1]=Nt,v[2]=wt,v[3]=pt,I.clearBufferiv(I.COLOR,0,v))}else X|=I.COLOR_BUFFER_BIT}k&&(X|=I.DEPTH_BUFFER_BIT),W&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),St.dispose(),q.dispose(),Tt.dispose(),vt.dispose(),Pe.dispose(),Ee.dispose(),G.dispose(),lt.dispose(),Bt.dispose(),$.dispose(),it.dispose(),it.removeEventListener("sessionstart",fn),it.removeEventListener("sessionend",Oa),jn.stop()};function ot(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=me.autoReset,k=Mt.enabled,W=Mt.autoUpdate,X=Mt.needsUpdate,H=Mt.type;z(),me.autoReset=w,Mt.enabled=k,Mt.autoUpdate=W,Mt.needsUpdate=X,Mt.type=H}function tt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function K(w){const k=w.target;k.removeEventListener("dispose",K),_t(k)}function _t(w){zt(w),vt.remove(w)}function zt(w){const k=vt.get(w).programs;k!==void 0&&(k.forEach(function(W){$.releaseProgram(W)}),w.isShaderMaterial&&$.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,W,X,H,et){k===null&&(k=bt);const ut=H.isMesh&&H.matrixWorld.determinant()<0,gt=Mu(w,k,W,X,H);xt.setMaterial(X,ut);let pt=W.index,Pt=1;if(X.wireframe===!0){if(pt=E.getWireframeAttribute(W),pt===void 0)return;Pt=2}const Nt=W.drawRange,wt=W.attributes.position;let Xt=Nt.start*Pt,se=(Nt.start+Nt.count)*Pt;et!==null&&(Xt=Math.max(Xt,et.start*Pt),se=Math.min(se,(et.start+et.count)*Pt)),pt!==null?(Xt=Math.max(Xt,0),se=Math.min(se,pt.count)):wt!=null&&(Xt=Math.max(Xt,0),se=Math.min(se,wt.count));const Me=se-Xt;if(Me<0||Me===1/0)return;lt.setup(H,X,gt,W,pt);let ue,ae=ht;if(pt!==null&&(ue=D.get(pt),ae=Dt,ae.setIndex(ue)),H.isMesh)X.wireframe===!0?(xt.setLineWidth(X.wireframeLinewidth*Ne()),ae.setMode(I.LINES)):ae.setMode(I.TRIANGLES);else if(H.isLine){let Ct=X.linewidth;Ct===void 0&&(Ct=1),xt.setLineWidth(Ct*Ne()),H.isLineSegments?ae.setMode(I.LINES):H.isLineLoop?ae.setMode(I.LINE_LOOP):ae.setMode(I.LINE_STRIP)}else H.isPoints?ae.setMode(I.POINTS):H.isSprite&&ae.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)xr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))ae.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ct=H._multiDrawStarts,xe=H._multiDrawCounts,Jt=H._multiDrawCount,je=pt?D.get(pt).bytesPerElement:1,yi=vt.get(X).currentProgram.getUniforms();for(let Je=0;Je<Jt;Je++)yi.setValue(I,"_gl_DrawID",Je),ae.render(Ct[Je]/je,xe[Je])}else if(H.isInstancedMesh)ae.renderInstances(Xt,Me,H.count);else if(W.isInstancedBufferGeometry){const Ct=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,xe=Math.min(W.instanceCount,Ct);ae.renderInstances(Xt,Me,xe)}else ae.render(Xt,Me)};function ce(w,k,W){w.transparent===!0&&w.side===Dn&&w.forceSinglePass===!1?(w.side=We,w.needsUpdate=!0,wr(w,k,W),w.side=$n,w.needsUpdate=!0,wr(w,k,W),w.side=Dn):wr(w,k,W)}this.compile=function(w,k,W=null){W===null&&(W=w),p=Tt.get(W),p.init(k),b.push(p),W.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),w!==W&&w.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const X=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const et=H.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){const gt=et[ut];ce(gt,W,H),X.add(gt)}else ce(et,W,H),X.add(et)}),p=b.pop(),X},this.compileAsync=function(w,k,W=null){const X=this.compile(w,k,W);return new Promise(H=>{function et(){if(X.forEach(function(ut){vt.get(ut).currentProgram.isReady()&&X.delete(ut)}),X.size===0){H(w);return}setTimeout(et,10)}Ot.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let ee=null;function yn(w){ee&&ee(w)}function fn(){jn.stop()}function Oa(){jn.start()}const jn=new Wl;jn.setAnimationLoop(yn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(w){ee=w,it.setAnimationLoop(w),w===null?jn.stop():jn.start()},it.addEventListener("sessionstart",fn),it.addEventListener("sessionend",Oa),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(k),k=it.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,k,P),p=Tt.get(w,b.length),p.init(k),b.push(p),j.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),rt.setFromProjectionMatrix(j,xn,k.reversedDepth),Y=this.localClippingEnabled,Lt=st.init(this.clippingPlanes,Y),m=q.get(w,S.length),m.init(),S.push(m),it.enabled===!0&&it.isPresenting===!0){const et=M.xr.getDepthSensingMesh();et!==null&&ws(et,k,-1/0,M.sortObjects)}ws(w,k,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(Z,Q),Kt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Kt&&St.addToRenderList(m,w),this.info.render.frame++,Lt===!0&&st.beginShadows();const W=p.state.shadowsArray;Mt.render(W,w,k),Lt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,H=m.transmissive;if(p.setupLights(),k.isArrayCamera){const et=k.cameras;if(H.length>0)for(let ut=0,gt=et.length;ut<gt;ut++){const pt=et[ut];ka(X,H,w,pt)}Kt&&St.render(w);for(let ut=0,gt=et.length;ut<gt;ut++){const pt=et[ut];Ba(m,w,pt,pt.viewport)}}else H.length>0&&ka(X,H,w,k),Kt&&St.render(w),Ba(m,w,k);P!==null&&R===0&&(Ht.updateMultisampleRenderTarget(P),Ht.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(M,w,k),lt.resetDefaultState(),x=-1,g=null,b.pop(),b.length>0?(p=b[b.length-1],Lt===!0&&st.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function ws(w,k,W,X){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||rt.intersectsSprite(w)){X&&It.setFromMatrixPosition(w.matrixWorld).applyMatrix4(j);const ut=G.update(w),gt=w.material;gt.visible&&m.push(w,ut,gt,W,It.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||rt.intersectsObject(w))){const ut=G.update(w),gt=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),It.copy(w.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),It.copy(ut.boundingSphere.center)),It.applyMatrix4(w.matrixWorld).applyMatrix4(j)),Array.isArray(gt)){const pt=ut.groups;for(let Pt=0,Nt=pt.length;Pt<Nt;Pt++){const wt=pt[Pt],Xt=gt[wt.materialIndex];Xt&&Xt.visible&&m.push(w,ut,Xt,W,It.z,wt)}}else gt.visible&&m.push(w,ut,gt,W,It.z,null)}}const et=w.children;for(let ut=0,gt=et.length;ut<gt;ut++)ws(et[ut],k,W,X)}function Ba(w,k,W,X){const H=w.opaque,et=w.transmissive,ut=w.transparent;p.setupLightsView(W),Lt===!0&&st.setGlobalState(M.clippingPlanes,W),X&&xt.viewport(y.copy(X)),H.length>0&&br(H,k,W),et.length>0&&br(et,k,W),ut.length>0&&br(ut,k,W),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function ka(w,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Kn(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Mr:Sn,minFilter:fi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const et=p.state.transmissionRenderTarget[X.id],ut=X.viewport||y;et.setSize(ut.z*M.transmissionResolutionScale,ut.w*M.transmissionResolutionScale);const gt=M.getRenderTarget(),pt=M.getActiveCubeFace(),Pt=M.getActiveMipmapLevel();M.setRenderTarget(et),M.getClearColor(F),N=M.getClearAlpha(),N<1&&M.setClearColor(16777215,.5),M.clear(),Kt&&St.render(W);const Nt=M.toneMapping;M.toneMapping=Nn;const wt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),Lt===!0&&st.setGlobalState(M.clippingPlanes,X),br(w,W,X),Ht.updateMultisampleRenderTarget(et),Ht.updateRenderTargetMipmap(et),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let se=0,Me=k.length;se<Me;se++){const ue=k[se],ae=ue.object,Ct=ue.geometry,xe=ue.material,Jt=ue.group;if(xe.side===Dn&&ae.layers.test(X.layers)){const je=xe.side;xe.side=We,xe.needsUpdate=!0,Ha(ae,W,X,Ct,xe,Jt),xe.side=je,xe.needsUpdate=!0,Xt=!0}}Xt===!0&&(Ht.updateMultisampleRenderTarget(et),Ht.updateRenderTargetMipmap(et))}M.setRenderTarget(gt,pt,Pt),M.setClearColor(F,N),wt!==void 0&&(X.viewport=wt),M.toneMapping=Nt}function br(w,k,W){const X=k.isScene===!0?k.overrideMaterial:null;for(let H=0,et=w.length;H<et;H++){const ut=w[H],gt=ut.object,pt=ut.geometry,Pt=ut.group;let Nt=ut.material;Nt.allowOverride===!0&&X!==null&&(Nt=X),gt.layers.test(W.layers)&&Ha(gt,k,W,pt,Nt,Pt)}}function Ha(w,k,W,X,H,et){w.onBeforeRender(M,k,W,X,H,et),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(M,k,W,X,w,et),H.transparent===!0&&H.side===Dn&&H.forceSinglePass===!1?(H.side=We,H.needsUpdate=!0,M.renderBufferDirect(W,k,X,H,w,et),H.side=$n,H.needsUpdate=!0,M.renderBufferDirect(W,k,X,H,w,et),H.side=Dn):M.renderBufferDirect(W,k,X,H,w,et),w.onAfterRender(M,k,W,X,H,et)}function wr(w,k,W){k.isScene!==!0&&(k=bt);const X=vt.get(w),H=p.state.lights,et=p.state.shadowsArray,ut=H.state.version,gt=$.getParameters(w,H.state,et,k,W),pt=$.getProgramCacheKey(gt);let Pt=X.programs;X.environment=w.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(w.isMeshStandardMaterial?Ee:Pe).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Pt===void 0&&(w.addEventListener("dispose",K),Pt=new Map,X.programs=Pt);let Nt=Pt.get(pt);if(Nt!==void 0){if(X.currentProgram===Nt&&X.lightsStateVersion===ut)return Ga(w,gt),Nt}else gt.uniforms=$.getUniforms(w),w.onBeforeCompile(gt,M),Nt=$.acquireProgram(gt,pt),Pt.set(pt,Nt),X.uniforms=gt.uniforms;const wt=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(wt.clippingPlanes=st.uniform),Ga(w,gt),X.needsLights=yu(w),X.lightsStateVersion=ut,X.needsLights&&(wt.ambientLightColor.value=H.state.ambient,wt.lightProbe.value=H.state.probe,wt.directionalLights.value=H.state.directional,wt.directionalLightShadows.value=H.state.directionalShadow,wt.spotLights.value=H.state.spot,wt.spotLightShadows.value=H.state.spotShadow,wt.rectAreaLights.value=H.state.rectArea,wt.ltc_1.value=H.state.rectAreaLTC1,wt.ltc_2.value=H.state.rectAreaLTC2,wt.pointLights.value=H.state.point,wt.pointLightShadows.value=H.state.pointShadow,wt.hemisphereLights.value=H.state.hemi,wt.directionalShadowMap.value=H.state.directionalShadowMap,wt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,wt.spotShadowMap.value=H.state.spotShadowMap,wt.spotLightMatrix.value=H.state.spotLightMatrix,wt.spotLightMap.value=H.state.spotLightMap,wt.pointShadowMap.value=H.state.pointShadowMap,wt.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Nt,X.uniformsList=null,Nt}function Va(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=os.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Ga(w,k){const W=vt.get(w);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function Mu(w,k,W,X,H){k.isScene!==!0&&(k=bt),Ht.resetTextureUnits();const et=k.fog,ut=X.isMeshStandardMaterial?k.environment:null,gt=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ki,pt=(X.isMeshStandardMaterial?Ee:Pe).get(X.envMap||ut),Pt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Nt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),wt=!!W.morphAttributes.position,Xt=!!W.morphAttributes.normal,se=!!W.morphAttributes.color;let Me=Nn;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Me=M.toneMapping);const ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ae=ue!==void 0?ue.length:0,Ct=vt.get(X),xe=p.state.lights;if(Lt===!0&&(Y===!0||w!==g)){const Be=w===g&&X.id===x;st.setState(X,w,Be)}let Jt=!1;X.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==xe.state.version||Ct.outputColorSpace!==gt||H.isBatchedMesh&&Ct.batching===!1||!H.isBatchedMesh&&Ct.batching===!0||H.isBatchedMesh&&Ct.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ct.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ct.instancing===!1||!H.isInstancedMesh&&Ct.instancing===!0||H.isSkinnedMesh&&Ct.skinning===!1||!H.isSkinnedMesh&&Ct.skinning===!0||H.isInstancedMesh&&Ct.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ct.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ct.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ct.instancingMorph===!1&&H.morphTexture!==null||Ct.envMap!==pt||X.fog===!0&&Ct.fog!==et||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==st.numPlanes||Ct.numIntersection!==st.numIntersection)||Ct.vertexAlphas!==Pt||Ct.vertexTangents!==Nt||Ct.morphTargets!==wt||Ct.morphNormals!==Xt||Ct.morphColors!==se||Ct.toneMapping!==Me||Ct.morphTargetsCount!==ae)&&(Jt=!0):(Jt=!0,Ct.__version=X.version);let je=Ct.currentProgram;Jt===!0&&(je=wr(X,k,H));let yi=!1,Je=!1,er=!1;const ve=je.getUniforms(),en=Ct.uniforms;if(xt.useProgram(je.program)&&(yi=!0,Je=!0,er=!0),X.id!==x&&(x=X.id,Je=!0),yi||g!==w){xt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ve.setValue(I,"projectionMatrix",w.projectionMatrix),ve.setValue(I,"viewMatrix",w.matrixWorldInverse);const $e=ve.map.cameraPosition;$e!==void 0&&$e.setValue(I,ft.setFromMatrixPosition(w.matrixWorld)),Ut.logarithmicDepthBuffer&&ve.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ve.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),g!==w&&(g=w,Je=!0,er=!0)}if(H.isSkinnedMesh){ve.setOptional(I,H,"bindMatrix"),ve.setOptional(I,H,"bindMatrixInverse");const Be=H.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),ve.setValue(I,"boneTexture",Be.boneTexture,Ht))}H.isBatchedMesh&&(ve.setOptional(I,H,"batchingTexture"),ve.setValue(I,"batchingTexture",H._matricesTexture,Ht),ve.setOptional(I,H,"batchingIdTexture"),ve.setValue(I,"batchingIdTexture",H._indirectTexture,Ht),ve.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&ve.setValue(I,"batchingColorTexture",H._colorsTexture,Ht));const nn=W.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&nt.update(H,W,je),(Je||Ct.receiveShadow!==H.receiveShadow)&&(Ct.receiveShadow=H.receiveShadow,ve.setValue(I,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(en.envMap.value=pt,en.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(en.envMapIntensity.value=k.environmentIntensity),Je&&(ve.setValue(I,"toneMappingExposure",M.toneMappingExposure),Ct.needsLights&&Su(en,er),et&&X.fog===!0&&J.refreshFogUniforms(en,et),J.refreshMaterialUniforms(en,X,B,V,p.state.transmissionRenderTarget[w.id]),os.upload(I,Va(Ct),en,Ht)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(os.upload(I,Va(Ct),en,Ht),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ve.setValue(I,"center",H.center),ve.setValue(I,"modelViewMatrix",H.modelViewMatrix),ve.setValue(I,"normalMatrix",H.normalMatrix),ve.setValue(I,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Be=X.uniformsGroups;for(let $e=0,As=Be.length;$e<As;$e++){const Jn=Be[$e];Bt.update(Jn,je),Bt.bind(Jn,je)}}return je}function Su(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function yu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,k,W){const X=vt.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),vt.get(w.texture).__webglTexture=k,vt.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){const W=vt.get(w);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};const Eu=I.createFramebuffer();this.setRenderTarget=function(w,k=0,W=0){P=w,T=k,R=W;let X=!0,H=null,et=!1,ut=!1;if(w){const pt=vt.get(w);if(pt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(pt.__webglFramebuffer===void 0)Ht.setupRenderTarget(w);else if(pt.__hasExternalTextures)Ht.rebindTextures(w,vt.get(w.texture).__webglTexture,vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const wt=w.depthTexture;if(pt.__boundDepthTexture!==wt){if(wt!==null&&vt.has(wt)&&(w.width!==wt.image.width||w.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(w)}}const Pt=w.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ut=!0);const Nt=vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Nt[k])?H=Nt[k][W]:H=Nt[k],et=!0):w.samples>0&&Ht.useMultisampledRTT(w)===!1?H=vt.get(w).__webglMultisampledFramebuffer:Array.isArray(Nt)?H=Nt[W]:H=Nt,y.copy(w.viewport),L.copy(w.scissor),C=w.scissorTest}else y.copy(dt).multiplyScalar(B).floor(),L.copy(Et).multiplyScalar(B).floor(),C=jt;if(W!==0&&(H=Eu),xt.bindFramebuffer(I.FRAMEBUFFER,H)&&X&&xt.drawBuffers(w,H),xt.viewport(y),xt.scissor(L),xt.setScissorTest(C),et){const pt=vt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,pt.__webglTexture,W)}else if(ut){const pt=k;for(let Pt=0;Pt<w.textures.length;Pt++){const Nt=vt.get(w.textures[Pt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Pt,Nt.__webglTexture,W,pt)}}else if(w!==null&&W!==0){const pt=vt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pt.__webglTexture,W)}x=-1},this.readRenderTargetPixels=function(w,k,W,X,H,et,ut,gt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(pt=pt[ut]),pt){xt.bindFramebuffer(I.FRAMEBUFFER,pt);try{const Pt=w.textures[gt],Nt=Pt.format,wt=Pt.type;if(!Ut.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-X&&W>=0&&W<=w.height-H&&(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+gt),I.readPixels(k,W,X,H,yt.convert(Nt),yt.convert(wt),et))}finally{const Pt=P!==null?vt.get(P).__webglFramebuffer:null;xt.bindFramebuffer(I.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(w,k,W,X,H,et,ut,gt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(pt=pt[ut]),pt)if(k>=0&&k<=w.width-X&&W>=0&&W<=w.height-H){xt.bindFramebuffer(I.FRAMEBUFFER,pt);const Pt=w.textures[gt],Nt=Pt.format,wt=Pt.type;if(!Ut.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Xt),I.bufferData(I.PIXEL_PACK_BUFFER,et.byteLength,I.STREAM_READ),w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+gt),I.readPixels(k,W,X,H,yt.convert(Nt),yt.convert(wt),0);const se=P!==null?vt.get(P).__webglFramebuffer:null;xt.bindFramebuffer(I.FRAMEBUFFER,se);const Me=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Lh(I,Me,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Xt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,et),I.deleteBuffer(Xt),I.deleteSync(Me),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,W=0){const X=Math.pow(2,-W),H=Math.floor(w.image.width*X),et=Math.floor(w.image.height*X),ut=k!==null?k.x:0,gt=k!==null?k.y:0;Ht.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,ut,gt,H,et),xt.unbindTexture()};const Tu=I.createFramebuffer(),bu=I.createFramebuffer();this.copyTextureToTexture=function(w,k,W=null,X=null,H=0,et=null){et===null&&(H!==0?(xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=H,H=0):et=0);let ut,gt,pt,Pt,Nt,wt,Xt,se,Me;const ue=w.isCompressedTexture?w.mipmaps[et]:w.image;if(W!==null)ut=W.max.x-W.min.x,gt=W.max.y-W.min.y,pt=W.isBox3?W.max.z-W.min.z:1,Pt=W.min.x,Nt=W.min.y,wt=W.isBox3?W.min.z:0;else{const nn=Math.pow(2,-H);ut=Math.floor(ue.width*nn),gt=Math.floor(ue.height*nn),w.isDataArrayTexture?pt=ue.depth:w.isData3DTexture?pt=Math.floor(ue.depth*nn):pt=1,Pt=0,Nt=0,wt=0}X!==null?(Xt=X.x,se=X.y,Me=X.z):(Xt=0,se=0,Me=0);const ae=yt.convert(k.format),Ct=yt.convert(k.type);let xe;k.isData3DTexture?(Ht.setTexture3D(k,0),xe=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Ht.setTexture2DArray(k,0),xe=I.TEXTURE_2D_ARRAY):(Ht.setTexture2D(k,0),xe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const Jt=I.getParameter(I.UNPACK_ROW_LENGTH),je=I.getParameter(I.UNPACK_IMAGE_HEIGHT),yi=I.getParameter(I.UNPACK_SKIP_PIXELS),Je=I.getParameter(I.UNPACK_SKIP_ROWS),er=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ue.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ue.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Nt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,wt);const ve=w.isDataArrayTexture||w.isData3DTexture,en=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){const nn=vt.get(w),Be=vt.get(k),$e=vt.get(nn.__renderTarget),As=vt.get(Be.__renderTarget);xt.bindFramebuffer(I.READ_FRAMEBUFFER,$e.__webglFramebuffer),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let Jn=0;Jn<pt;Jn++)ve&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,vt.get(w).__webglTexture,H,wt+Jn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,vt.get(k).__webglTexture,et,Me+Jn)),I.blitFramebuffer(Pt,Nt,ut,gt,Xt,se,ut,gt,I.DEPTH_BUFFER_BIT,I.NEAREST);xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||vt.has(w)){const nn=vt.get(w),Be=vt.get(k);xt.bindFramebuffer(I.READ_FRAMEBUFFER,Tu),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,bu);for(let $e=0;$e<pt;$e++)ve?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,nn.__webglTexture,H,wt+$e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,nn.__webglTexture,H),en?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Be.__webglTexture,et,Me+$e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Be.__webglTexture,et),H!==0?I.blitFramebuffer(Pt,Nt,ut,gt,Xt,se,ut,gt,I.COLOR_BUFFER_BIT,I.NEAREST):en?I.copyTexSubImage3D(xe,et,Xt,se,Me+$e,Pt,Nt,ut,gt):I.copyTexSubImage2D(xe,et,Xt,se,Pt,Nt,ut,gt);xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else en?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(xe,et,Xt,se,Me,ut,gt,pt,ae,Ct,ue.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(xe,et,Xt,se,Me,ut,gt,pt,ae,ue.data):I.texSubImage3D(xe,et,Xt,se,Me,ut,gt,pt,ae,Ct,ue):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,et,Xt,se,ut,gt,ae,Ct,ue.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,et,Xt,se,ue.width,ue.height,ae,ue.data):I.texSubImage2D(I.TEXTURE_2D,et,Xt,se,ut,gt,ae,Ct,ue);I.pixelStorei(I.UNPACK_ROW_LENGTH,Jt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,je),I.pixelStorei(I.UNPACK_SKIP_PIXELS,yi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Je),I.pixelStorei(I.UNPACK_SKIP_IMAGES,er),et===0&&k.generateMipmaps&&I.generateMipmap(xe),xt.unbindTexture()},this.initRenderTarget=function(w){vt.get(w).__webglFramebuffer===void 0&&Ht.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ht.setTextureCube(w,0):w.isData3DTexture?Ht.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ht.setTexture2DArray(w,0):Ht.setTexture2D(w,0),xt.unbindTexture()},this.resetState=function(){T=0,R=0,P=null,xt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}function jg(){const n=new Uint8Array([72,142,206,255]),t=new kl(n,n.length,1,xs);return t.magFilter=De,t.minFilter=De,t.generateMipmaps=!1,t.colorSpace=In,t.needsUpdate=!0,t}function be(n,t){return new Ms({color:t,gradientMap:n})}function Tr(n){return new Ms({color:16777215,gradientMap:n})}const Kl={value:0};function Zl(n){n.customProgramCacheKey=()=>"wind-sway",n.onBeforeCompile=t=>{t.uniforms.uTime=Kl,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        float gust = sin(uTime * 1.65 + float(gl_InstanceID) * 0.41) * transformed.y;
        transformed.x += gust * 0.11;
        transformed.z += gust * 0.05;`)}}const Rt=160,mi=6,de=[{id:"coral",name:"Mesa corallo",ground:15883128,patch:16748463,deep:13903960,plant:16731526},{id:"mint",name:"Prateria menta",ground:4050570,patch:9367748,deep:1542744,plant:2021770},{id:"violet",name:"Giardino viola",ground:11561712,patch:13936383,deep:6959816,plant:10111720},{id:"crystal",name:"Campo di cristalli",ground:3066072,patch:9366774,deep:1214644,plant:2282736},{id:"dune",name:"Dune pesca",ground:16747068,patch:16761994,deep:14704672,plant:16738858},{id:"lantern",name:"Bosco di lanterne",ground:15878810,patch:16751316,deep:13903992,plant:16761914}],ps=1.02,Yc=3.1/Rt,aa=2.4;function ye(n){return-Math.PI+(n+.5)*(Math.PI*2/mi)}function Da(n,t){const e=(Math.atan2(n,t)+Math.PI)/(Math.PI*2);return Math.min(mi-1,Math.max(0,Math.floor(e*mi)))}function Yt(n,t,e=Rt){const i=Math.sin(n);return{x:i*Math.sin(t)*e,y:Math.cos(n)*e,z:i*Math.cos(t)*e}}function gi(n,t){const e=Math.sin(n),i=Math.cos(n);return{x:-i*Math.sin(t),y:e,z:-i*Math.cos(t)}}function Ia(n){return{x:Math.cos(n),y:0,z:-Math.sin(n)}}function jl(n,t,e,i=Rt){const r=Math.hypot(n,t,e)||1,s=i/r;return{x:n*s,y:t*s,z:e*s}}function te(n,t,e,i){const r=Yt(n,t),s=gi(n,t),o=Ia(t);return jl(r.x+s.x*e+o.x*i,r.y+s.y*e+o.y*i,r.z+s.z*e+o.z*i)}function Jl(n,t,e){const i=Math.hypot(n,t,e)||1,r=Math.acos(Math.min(1,Math.max(-1,t/i))),s=Math.atan2(n,e),o=Math.abs(r-ps)*Rt,a=Math.abs(r-(Math.PI-ps))*Rt;let c=as(o,3.1,5.6);if(c=Math.max(c,as(a,2.6,4.8)),r>.1&&r<2.9){let l=Math.PI;for(let f=0;f<mi;f+=1){const h=ys(s,ye(f));h<l&&(l=h)}const u=l*Math.sin(r)*Rt;c=Math.max(c,as(u,aa,aa+2.4))}return c}function as(n,t,e){if(n<=t)return 1;if(n>=e)return 0;const i=(n-t)/(e-t);return 1-i*i*(3-2*i)}function ca(n,t,e){const i=Math.hypot(n,t,e)||1;return{colat:Math.acos(Math.min(1,Math.max(-1,t/i))),az:Math.atan2(n,e)}}function Ql(n,t,e){const i=Math.hypot(n,t,e)||1,r=Math.acos(Math.min(1,Math.max(-1,t/i))),s=Math.atan2(n,e);if(Math.abs(r-ps)<Yc||Math.abs(r-(Math.PI-ps))<Yc*.85)return!0;if(r<.12||r>2.85)return!1;let o=Math.PI;for(let a=0;a<mi;a++){const c=ys(s,ye(a));c<o&&(o=c)}return o*Math.sin(r)*Rt<aa}function Jg(n,t,e){const i=Math.hypot(n,t,e)||1,r=Math.acos(Math.min(1,Math.max(-1,t/i))),o=(Math.atan2(n,e)+Math.PI)/(Math.PI*2)*mi,a=o-Math.floor(o);return Math.min(a,1-a)*(Math.PI*2/mi)*Math.sin(r)*Rt}function Qg(n,t,e,i,r,s,o){ne.set(n+i,t+r,e+s).multiplyScalar(.5);const a=ne.x,c=ne.y,l=ne.z;return ne.lengthSq()<1e-8&&ne.set(0,1,0),ne.normalize(),he.set(i-n,r-t,s-e),he.addScaledVector(ne,-he.dot(ne)),he.lengthSq()<1e-8&&he.set(1,0,0),he.normalize(),qn.crossVectors(he,ne).normalize(),jl(a+qn.x*o,c+qn.y*o,l+qn.z*o)}function ys(n,t){let e=n-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return Math.abs(e)}const ne=new O,he=new O,qn=new O,ms=new le,tu=new On;function _e(n,t,e,i,r,s){return ne.set(n,t,e),ne.lengthSq()<1e-8&&ne.set(0,1,0),ne.normalize(),he.set(i,r,s),he.lengthSq()<1e-8&&he.set(0,0,1),he.addScaledVector(ne,-he.dot(ne)),he.lengthSq()<1e-6&&he.set(1,0,0).addScaledVector(ne,-ne.x),he.normalize(),qn.crossVectors(ne,he).normalize(),ms.makeBasis(qn,ne,he),tu.setFromRotationMatrix(ms).clone()}function t0(n,t,e,i,r,s){return ne.set(n,t,e),ne.lengthSq()<1e-8&&ne.set(0,1,0),ne.normalize(),he.set(i,r,s),he.addScaledVector(ne,-he.dot(ne)),he.lengthSq()<1e-6&&he.set(0,0,1).addScaledVector(ne,-ne.z),he.normalize(),qn.crossVectors(ne,he).normalize(),ms.makeBasis(qn,ne,he),tu.setFromRotationMatrix(ms).clone()}const $c=new O,Kc=new On,Zc=new O,jc=new le,e0=new Gt;function vi(n,t,e,i,r,s,o,a,c,l,u,f,h){$c.set(e,i,r),Kc.set(c,l,u,f),Zc.set(s,o,a),jc.compose($c,Kc,Zc),n.setMatrixAt(t,jc),h!==void 0&&n.setColorAt(t,e0.setHex(h))}function Mi(n){n.instanceMatrix.needsUpdate=!0,n.computeBoundingSphere(),n.instanceColor&&(n.instanceColor.needsUpdate=!0)}const Zt=.64,At=ye(0),eu=.8,Ge=.46,ji=.26,on=.3,Kr=6.2,n0=Yt(Zt,At+on),i0=Yt(Zt,At-on),r0=Yt(Ge,At+ji),s0=Yt(.96,At),o0=Yt(Zt,At+.48),a0=Yt(Zt,At-.46),c0=Yt(.34,At),l0=Yt(Ge,At),ro=2893376,u0=2366498,so=16757294;function h0(){const n=[],t=[-.36,-.24,-.12,.12,.24,.36];for(const r of t){const s=r>0,o=s?16773878:15660799,a=s?16731526:8146431;n.push({colat:Zt,az:At+r,north:Kr,east:0,face:"south",sy:1,hip:!0,wall:o,roof:a}),n.push({colat:Zt,az:At+r,north:-Kr,east:0,face:"north",sy:1,hip:!1,wall:o,roof:a})}const e=[.4,.54,.74];for(const r of e)n.push({colat:r,az:At,north:0,east:Kr,face:"west",sy:r<.5?1.12:1,hip:!0,wall:16051967,roof:2279662}),n.push({colat:r,az:At,north:0,east:-Kr,face:"east",sy:1,hip:!1,wall:15662328,roof:16742970});n.push({colat:Ge,az:At,north:0,east:8,face:"west",sy:1.16,hip:!0,wall:16773878,roof:16731526}),n.push({colat:Ge,az:At,north:0,east:-8,face:"east",sy:1.16,hip:!0,wall:16773878,roof:16731526});const i=[.62,.78,.94];for(const r of i)for(const s of[-1,1]){const o=s>0?r<.8?7.6:-7.6:r<.8?-7.6:7.6;n.push({colat:Zt,az:At+s*r,north:o,east:0,face:o>0?"south":"north",sy:.92,hip:s>0,wall:s>0?16773878:15662328,roof:s>0?2279662:16742970})}return n}const nu=h0(),iu=[{colat:Zt,az:At+on,north:5.1,east:0,face:"south",cloth:16731526},{colat:Zt,az:At+on,north:-5.1,east:0,face:"north",cloth:2279662},{colat:Zt,az:At-on,north:5.1,east:0,face:"south",cloth:8146431},{colat:Zt,az:At-on,north:-5.1,east:0,face:"north",cloth:2806944},{colat:Ge,az:At+ji,north:4.6,east:3.2,face:"south",cloth:16761914},{colat:Ge,az:At+ji,north:-4.2,east:-3.4,face:"north",cloth:16731526}];function d0(n,t,e,i){const r=Math.hypot(n,t,e)||1,s=Math.acos(Math.min(1,Math.max(-1,t/r))),o=Math.atan2(n,e),a=ys(o,At),c=a*Math.sin(Math.max(.25,s))*Rt;if(s>.26&&s<1.08&&c<14+i)return!0;const l=Math.abs(s-Zt)*Rt;if(a<.62&&l<14+i)return!0;const u=f0(o);if(Math.abs(u)>.45&&Math.abs(u)<Math.PI/3+.06&&l<12+i)return!0;const f=Math.abs(s-Ge)*Rt;return a<.36&&f<12+i}function f0(n){let t=n-At;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}function p0(n){const t=(r,s,o)=>{n.push({...Yt(r,s),r2:o*o})};for(let r=.3;r<=1.02;r+=2.5/Rt)t(r,At,3.3);const e=Math.sin(Zt)*Rt;for(let r=-.5;r<=.52;r+=2.5/e)t(Zt,At+r,3.3);for(let r=.5;r<=Math.PI/3;r+=2.6/e)t(Zt,At+r,2.4);for(let r=-.5;r>=-Math.PI/3;r-=2.6/e)t(Zt,At+r,2.4);const i=Math.sin(Ge)*Rt;for(let r=0;r<=.3;r+=2.5/i)t(Ge,At+r,2.6);for(const r of[-1,1])for(let s=Zt;s<=Zt+.055;s+=1.4/Rt)t(s,At+r*.18,.9);t(Zt,At,9),t(Zt,At+on,5.2),t(Zt,At-on,5.2),t(Ge,At,5.6),t(Ge,At+ji,5.2),t(.34,At,3.4);for(const r of nu){const s=te(r.colat,r.az,r.north,r.east);n.push({...s,r2:1.7*1.7})}for(const r of iu){const s=te(r.colat,r.az,r.north,r.east);n.push({...s,r2:1.55*1.55})}}function m0(n,t,e){const i=[],r=[],s=[],o=[],a=[],c=[],l=[],u=[],f=[],h=[],d=[],_=[],v=[],m=[],p=[],S=[],b=[],M=[],A=[],T=(y,L,C,F,N,U,V)=>{y.push({x:L.x,y:L.y,z:L.z,qx:C.x,qy:C.y,qz:C.z,qw:C.w,sx:F,sy:N,sz:U,color:V})},R=(y,L,C,F,N)=>{const U=te(y,L,C,F),V=gi(y,L),B=Ia(L),Z=N==="north"?V:N==="south"?{x:-V.x,y:-V.y,z:-V.z}:N==="east"?B:{x:-B.x,y:-B.y,z:-B.z},Q=_e(U.x,U.y,U.z,Z.x,Z.y,Z.z);return{p:U,q:Q}},P=(y,L,C,F)=>{const N=R(y,L,C,F,"north");T(s,N.p,N.q,.55,.9,.55,ro);const U=Math.hypot(N.p.x,N.p.y,N.p.z)||1,V=2.1;o.push({x:N.p.x+N.p.x/U*V,y:N.p.y+N.p.y/U*V,z:N.p.z+N.p.z/U*V,qx:N.q.x,qy:N.q.y,qz:N.q.z,qw:N.q.w,sx:.28,sy:.28,sz:.28,color:so}),e.push({...N.p,r:.16,h:2.15})},x=[16731526,2279662,8146431,16761914];for(let y=0;y<8;y+=1){const L=Math.PI/8+y*(Math.PI/4),C=R(Zt,At,Math.cos(L)*7.4,Math.sin(L)*7.4,"north");T(i,C.p,C.q,1,1,1,ro),T(r,C.p,C.q,1,1,1,x[y%x.length]??so),e.push({...C.p,r:.34,h:3.45})}for(const y of[[Zt,At+on],[Zt,At-on],[Ge,At],[Ge,At+ji]])for(const L of[-1,1])for(const C of[-1,1])P(y[0],y[1],L*4.4,C*4.4);for(const y of nu){const{p:L,q:C}=R(y.colat,y.az,y.north,y.east,y.face);T(a,L,C,.88,y.sy,.8,y.wall),T(y.hip?l:c,L,C,.88,y.sy,.8,y.roof),T(u,L,C,.88,y.sy,.8,u0),T(f,L,C,.88,y.sy,.8,3842303),T(h,L,C,.88,y.sy,.8,y.roof),T(d,L,C,.88,y.sy,.8,y.roof),T(_,L,C,.88,y.sy,.8,y.roof),T(v,L,C,.88,y.sy,.8,13157596),T(S,L,C,.88,y.sy,.8,16769354),y.hip?T(p,L,C,.88,y.sy,.8,so):T(m,L,C,.88,y.sy,.8,14698568),e.push({...L,r:Math.hypot(1.25*.88,1.15*.8)+.04,h:3.4*y.sy})}for(const y of iu){const L=R(y.colat,y.az,y.north,y.east,y.face);T(b,L.p,L.q,1,1,1,y.north>0?16773878:15660799),T(M,L.p,L.q,1,1,1,y.cloth),e.push({...L.p,r:1.16,h:1.7})}for(const y of[3.6,-3.6]){const L=R(.34,At,0,y,"north");T(A,L.p,L.q,1,1,1,ro),e.push({...L.p,r:.16,h:.95})}oo(n,t,e,.96,At,"north",8146431),oo(n,t,e,Zt,At+.48,"east",16731526),oo(n,t,e,Zt,At-.46,"east",2279662),Zr(n,Zt,At+on,3.2,2279662),Zr(n,Zt,At-on,3.2,8146431),Zr(n,Ge,At,3.3,16731526),Zr(n,Ge,At+ji,3.1,16761914);const g=(y,L,C=!1)=>{if(L.length===0)return;const F=new xi(y,C?new ie({color:16777215}):Tr(t),L.length);F.frustumCulled=!1;for(let N=0;N<L.length;N+=1){const U=L[N];U&&vi(F,N,U.x,U.y,U.z,U.sx,U.sy,U.sz,U.qx,U.qy,U.qz,U.qw,U.color)}Mi(F),n.add(F)};g(co(.26,.34,3.3,1.65),i),g(g0(),r),g(co(.15,.18,2.25,1.12),s),g(_0(),o,!0),g(ao(2.5,2.3,2.3,1.15),a),g(Jc(1.85,1.15,2.85),c),g(Jc(2.05,.7,2.55),l),g(x0(),u),g(b0(),f),g(w0(),h),g(M0(),d),g(v0(),_),g(S0(),v),g(y0(),m),g(E0(),p,!0),g(T0(),S,!0),g(ao(1.9,1.15,1.25,.58),b),g(ao(2.15,.12,1.55,1.28),M,!0),g(co(.1,.12,.85,.42),A)}function oo(n,t,e,i,r,s,o){const a=Yt(i,r),c=s==="north"?gi(i,r):Ia(r),l=new ct(new qe(2.4,.14,8,18),be(t,o));l.position.set(a.x,a.y,a.z),l.quaternion.copy(_e(a.x,a.y,a.z,c.x,c.y,c.z));const u=new O(a.x,a.y,a.z).normalize();l.position.addScaledVector(u,2.4);const f=new ct(new Ye(.18,8,6),new ie({color:16769354}));f.position.y=2.32;const h=new $t(.36,.86,.04),d=new ct(h,be(t,16731526));d.position.set(-.62,1.25,.02);const _=new ct(h,be(t,2279662));_.position.set(.62,1.15,.02),l.add(f,d,_),n.add(l);const v=2.2;s==="north"?(e.push({...te(i,r,0,-v),r:.34,h:2.35}),e.push({...te(i,r,0,v),r:.34,h:2.35})):(e.push({...te(i,r,-v,0),r:.34,h:2.35}),e.push({...te(i,r,v,0),r:.34,h:2.35}))}function Zr(n,t,e,i,r){const s=Yt(t,e),o=new qe(i,.07,5,20);o.rotateX(Math.PI/2);const a=new ct(o,new ie({color:r}));a.position.set(s.x,s.y,s.z),a.quaternion.copy(_e(s.x,s.y,s.z,1,0,0));const c=new O(s.x,s.y,s.z).normalize();a.position.addScaledVector(c,.08),n.add(a)}function ao(n,t,e,i){const r=new $t(n,t,e);return r.translate(0,i,0),r}function co(n,t,e,i){const r=new re(n,t,e,6);return r.translate(0,i,0),r}function Jc(n,t,e){const i=new Ue(n,t,4);return i.translate(0,e,0),i}function g0(){const n=new Ue(.48,.36,6);return n.translate(0,3.48,0),n}function _0(){return new Ye(1,7,6)}function x0(){const n=new $t(.55,.85,.08);return n.translate(0,.46,1.18),n}function v0(){const n=new re(1.95,1.95,.12,6);return n.translate(0,2.32,0),n}function M0(){const n=new $t(.82,.12,.1);return n.translate(0,.98,1.22),n}function S0(){const n=new $t(.78,.06,.32);return n.translate(0,.04,1.38),n}function y0(){const n=new $t(.28,.62,.28);return n.translate(.62,3.2,-.15),n}function E0(){const n=new $t(1.35,.07,.62);return n.translate(0,1.58,1.42),n}function T0(){const n=new $t(.28,.2,.04);return n.translate(.52,1.18,1.24),n}function b0(){const n=new $t(.36,.4,.06),t=n.clone();t.translate(-.58,1.38,1.2);const e=n.clone();return e.translate(.58,1.38,1.2),ru(t,e)}function w0(){const n=new $t(.5,.54,.04),t=n.clone();t.translate(-.58,1.38,1.16);const e=n.clone();return e.translate(.58,1.38,1.16),ru(t,e)}function ru(n,t){const e=n.index?n.toNonIndexed():n,i=t.index?t.toNonIndexed():t,r=new Oe,s=e.getAttribute("position").count+i.getAttribute("position").count,o=new Float32Array(s*3),a=new Float32Array(s*3),c=e.getAttribute("position"),l=i.getAttribute("position"),u=e.getAttribute("normal"),f=i.getAttribute("normal");for(let d=0;d<c.count;d+=1)o[d*3]=c.getX(d),o[d*3+1]=c.getY(d),o[d*3+2]=c.getZ(d),a[d*3]=u.getX(d),a[d*3+1]=u.getY(d),a[d*3+2]=u.getZ(d);const h=c.count;for(let d=0;d<l.count;d+=1)o[(h+d)*3]=l.getX(d),o[(h+d)*3+1]=l.getY(d),o[(h+d)*3+2]=l.getZ(d),a[(h+d)*3]=f.getX(d),a[(h+d)*3+1]=f.getY(d),a[(h+d)*3+2]=f.getZ(d);return r.setAttribute("position",new Ae(o,3)),r.setAttribute("normal",new Ae(a,3)),r}const A0=ye(0),Bn=[{id:"hub",biome:0,colat:Zt,az:A0,plaza:8,east:[0,0],north:[0,0],lots:[]},{id:"mint",biome:1,colat:1.32,az:ye(1)+.09,plaza:4.4,east:[-18,8],north:[-8,24],lots:[{n:6,e:5,kind:"house",spin:.5},{n:6,e:-5,kind:"house",spin:-.5},{n:-6,e:5,kind:"stall",spin:2},{n:-6,e:-5,kind:"house",spin:-2},{n:5.5,e:7,kind:"tower",spin:1.2},{n:8,e:4,kind:"pavilion",spin:0},{n:-8,e:2.6,kind:"house",spin:2.4},{n:2,e:-7.2,kind:"stall",spin:-1.2},{n:-3,e:7.6,kind:"house",spin:.9},{n:6.4,e:-12,kind:"house",spin:.2},{n:-6.4,e:-12,kind:"house",spin:2.4},{n:6.2,e:-16.4,kind:"pavilion",spin:.5},{n:-6,e:-16.2,kind:"house",spin:-2.2},{n:12.2,e:6.3,kind:"house",spin:1.4},{n:12.2,e:-6.3,kind:"house",spin:-1.4},{n:17,e:6.3,kind:"house",spin:1.6},{n:17,e:-6.3,kind:"stall",spin:-1.2},{n:21.6,e:6.5,kind:"pavilion",spin:.8},{n:21.6,e:-6.5,kind:"house",spin:-.8}]},{id:"violet",biome:2,colat:1.78,az:ye(2)-.08,plaza:4.4,east:[-8,18],north:[-8,8],lots:[{n:6,e:5,kind:"house",spin:.3},{n:-6,e:5,kind:"house",spin:2.2},{n:6,e:-5,kind:"stall",spin:-.4},{n:-5,e:-6,kind:"pavilion",spin:1},{n:5.5,e:-7,kind:"tower",spin:-1},{n:9,e:2,kind:"house",spin:.8},{n:-8.2,e:3.2,kind:"house",spin:2.5},{n:2.2,e:8.2,kind:"stall",spin:.7},{n:-2.4,e:-7.4,kind:"house",spin:-1.6}]},{id:"lantern",biome:5,colat:1.48,az:ye(5)+.1,plaza:4.2,east:[-18,8],north:[-7,7],lots:[{n:5.5,e:5,kind:"house",spin:.6},{n:-5.5,e:5,kind:"stall",spin:2.1},{n:5.5,e:-4.5,kind:"house",spin:-.5},{n:-5,e:-5,kind:"pavilion",spin:.2},{n:6.5,e:6,kind:"tower",spin:1.5},{n:-8,e:2.4,kind:"house",spin:2.2},{n:2.2,e:-7.2,kind:"stall",spin:-1.1},{n:9,e:-2.4,kind:"pavilion",spin:.4},{n:6.2,e:-12.4,kind:"house",spin:.3},{n:-6.2,e:-12.6,kind:"house",spin:2.3},{n:5.8,e:-16.2,kind:"stall",spin:.6},{n:-5.6,e:-16,kind:"pavilion",spin:-2.1}]},{id:"dune",biome:4,colat:1.045,az:ye(4)-.085,plaza:3.6,east:[-7,7],north:[-6,6],lots:[{n:4.5,e:4,kind:"stall",spin:.4},{n:-4.5,e:3.5,kind:"house",spin:2},{n:4,e:-4,kind:"stall",spin:-.8},{n:-1,e:-5.5,kind:"tower",spin:-1.4},{n:-5.2,e:4.6,kind:"pavilion",spin:1.7},{n:6.4,e:3.4,kind:"house",spin:.3},{n:1.2,e:6.4,kind:"stall",spin:1.2}]},{id:"crystal",biome:3,colat:1.5,az:ye(3)-.11,plaza:4,east:[-12,12],north:[-6,6],lots:[{n:5.2,e:4.6,kind:"house",spin:.4},{n:-5.2,e:4.4,kind:"pavilion",spin:2.2},{n:5.2,e:-4.8,kind:"stall",spin:-.5},{n:-4.6,e:-5,kind:"house",spin:-2},{n:6.6,e:6.2,kind:"tower",spin:1.1}]}],la=Bn[0],ua=Bn[1],ha=Bn[2],da=Bn[3],fa=Bn[4],pa=Bn[5];if(!la||!ua||!ha||!da||!fa||!pa)throw new Error("paesi incompleti");const su=Yt(la.colat,la.az),ou=Yt(ua.colat,ua.az),au=Yt(ha.colat,ha.az),cu=Yt(da.colat,da.az),lu=Yt(fa.colat,fa.az),R0=Yt(pa.colat,pa.az),uu=te(1.62,ye(3)+.07,0,4.5),hu=r0,Un=[];for(const n of Bn){const t=Yt(n.colat,n.az);Un.push({...t,r2:n.plaza*n.plaza});const[e,i]=n.east,[r,s]=n.north;for(let o=e;o<=i;o+=2.4)Un.push({...te(n.colat,n.az,0,o),r2:2.15*2.15});for(let o=r;o<=s;o+=2.4)Un.push({...te(n.colat,n.az,o,0),r2:2.15*2.15});for(const o of n.lots){const a=o.kind==="tower"?2.15:o.kind==="pavilion"?1.75:o.kind==="stall"?1.95:o.kind==="kiosk"?2.3:2.55;Un.push({...te(n.colat,n.az,o.n,o.e),r2:a*a})}}const C0=l0;p0(Un);function du(n,t,e){let i=0;for(let r=0;r<Un.length;r+=1){const s=Un[r];if(!s)continue;const o=Math.hypot(n-s.x,t-s.y,e-s.z),a=Math.sqrt(s.r2),c=as(o,a,a+2.2);if(c>i&&(i=c),i>=1)return 1}return i}function Ua(n,t,e){for(let i=0;i<Un.length;i+=1){const r=Un[i];if(!r)continue;const s=n-r.x,o=t-r.y,a=e-r.z;if(s*s+o*o+a*a<r.r2)return!0}return!1}function Es(n,t,e,i){for(const r of Bn){const s=Yt(r.colat,r.az),o=n-s.x,a=t-s.y,c=e-s.z,l=r.plaza+i;if(o*o+a*a+c*c<l*l)return!0}return d0(n,t,e,i)}const lo=16774392,P0=2366498,cs=16757294,uo=2893376,Qc=[16731526,2806944,8146431,2279662,16742970,16761914],tl=[16773878,15660799,16051967,15662328];function L0(n,t,e){const i=[],r=[],s=[],o=[],a=[],c=[],l=[],u=[],f=[],h=[],d=[],_=[],v=[],m=[],p=[],S=[],b=[],M=[],A=[];for(const R of Bn){const P=D0(R.biome);let x=0;for(const g of R.lots){const y=Qc[(R.biome+x)%Qc.length]??P,L=tl[(R.biome+x)%tl.length]??lo;x+=1;const C=te(R.colat,R.az,g.n,g.e),F=_e(C.x,C.y,C.z,Math.sin(R.az),0,Math.cos(R.az));F.multiply(new On().setFromAxisAngle(new O(0,1,0),g.spin));const N=(U,V,B,Z,Q)=>{U.push({x:C.x,y:C.y,z:C.z,qx:F.x,qy:F.y,qz:F.z,qw:F.w,sx:V,sy:B,sz:Z,color:Q})};if(g.kind==="house"){const U=Math.round(Math.abs(g.e)+Math.abs(g.n))%2===0;N(i,1,1,1,L),N(U?h:r,1,1,1,P),N(s,1,1,1,P0),N(d,1,1,1,3842303),N(_,1,1,1,y),N(v,1,1,1,y),N(m,1,1,1,P),N(p,1,1,1,13157596),U||N(S,1,1,1,14698568),e.push({...C,r:1.72,h:3.4})}else g.kind==="tower"?(N(o,1,1,1,16052479),N(a,1,1,1,P),N(M,1,1,1,cs),e.push({...C,r:1.15,h:7.4})):g.kind==="pavilion"?(N(c,1,1,1,uo),N(l,1,1,1,P),e.push({...C,r:.55,h:2.8})):g.kind==="kiosk"?(N(u,1.15,1.05,1.05,lo),N(b,1,1,1,1323048),ho(A,C,F,3.15,.42),e.push({...C,r:1.32,h:2.5})):(N(u,1,1,1,lo),N(f,1,1,1,cs),e.push({...C,r:1.16,h:1.7}))}if(R.id!=="hub"){const g=Yt(R.colat,R.az),y=new qe(R.plaza*.72,.08,5,18);y.rotateX(Math.PI/2);const L=new ct(y,new ie({color:cs}));L.position.set(g.x,g.y,g.z),L.quaternion.copy(_e(g.x,g.y,g.z,1,0,0));const C=new O(g.x,g.y,g.z).normalize();L.position.addScaledVector(C,.08),n.add(L);for(const[F,N]of[[R.plaza*.82,1.85],[R.plaza*.82,-1.85],[-R.plaza*.82,1.85],[-R.plaza*.82,-1.85]]){const U=te(R.colat,R.az,F,N),V=_e(U.x,U.y,U.z,Math.sin(R.az),0,Math.cos(R.az));c.push({x:U.x,y:U.y,z:U.z,qx:V.x,qy:V.y,qz:V.z,qw:V.w,sx:.55,sy:.85,sz:.55,color:uo}),ho(A,U,V,2.05,.38)}}if(R.id==="mint"){const g=te(R.colat,R.az,9.2,0),y=gi(R.colat,R.az),L=new ct(new qe(2.15,.16,8,16),be(t,2806944));L.position.set(g.x,g.y,g.z),L.quaternion.copy(_e(g.x,g.y,g.z,y.x,y.y,y.z));const C=new O(g.x,g.y,g.z).normalize();L.position.addScaledVector(C,2.15),n.add(L),e.push({...te(R.colat,R.az,9.2,-2.15),r:.32,h:2.3}),e.push({...te(R.colat,R.az,9.2,2.15),r:.32,h:2.3});for(const F of[13.5,19])for(const N of[-3.5,3.5]){const U=te(R.colat,R.az,F,N),V=_e(U.x,U.y,U.z,y.x,y.y,y.z);c.push({x:U.x,y:U.y,z:U.z,qx:V.x,qy:V.y,qz:V.z,qw:V.w,sx:.55,sy:.85,sz:.55,color:uo}),ho(A,U,V,2.05,.36),e.push({...U,r:.16,h:2.1})}}if(R.id==="dune"){const g=te(R.colat,R.az,-6.4,3.2),y=new ct(new qe(2.15,.16,6,14),be(t,15768136));y.position.set(g.x,g.y,g.z),y.quaternion.copy(_e(g.x,g.y,g.z,Math.sin(R.az),0,Math.cos(R.az)));const L=new O(g.x,g.y,g.z).normalize();y.position.addScaledVector(L,2.15),n.add(y)}R.id!=="hub"&&z0(n,t,e,R)}m0(n,t,e);const T=(R,P,x=!1)=>{if(P.length===0)return;const g=x?new ie({color:16777215}):Tr(t),y=new xi(R,g,P.length);y.frustumCulled=!1;for(let L=0;L<P.length;L+=1){const C=P[L];C&&vi(y,L,C.x,C.y,C.z,C.sx,C.sy,C.sz,C.qx,C.qy,C.qz,C.qw,C.color)}Mi(y),n.add(y)};T(fo(2.5,2.3,2.3,1.15),i),T(I0(),r),T(N0(),s),T(po(.82,.95,6.2,3.1),o),T(U0(),a),T(po(.16,.2,2.3,1.15),c),T(po(1.85,1.85,.2,2.4),l),T(fo(1.9,1.15,1.25,.58),u),T(fo(2.15,.12,1.55,1.28),f,!0),T(F0(),h),T(G0(),d),T(k0(),_),T(H0(),v),T(B0(),m),T(V0(),p),T(W0(),S),T(X0(),b),T(q0(),M,!0),T(Y0(),A,!0)}function ho(n,t,e,i,r){const s=Math.hypot(t.x,t.y,t.z)||1;n.push({x:t.x+t.x/s*i,y:t.y+t.y/s*i,z:t.z+t.z/s*i,qx:e.x,qy:e.y,qz:e.z,qw:e.w,sx:r,sy:r,sz:r,color:cs})}function D0(n){return[16731526,3133068,10111720,2282736,16742970,16761914][n]??15909198}function fo(n,t,e,i){const r=new $t(n,t,e);return r.translate(0,i,0),r}function I0(){const n=new Ue(1.85,1.15,4);return n.translate(0,2.85,0),n}function U0(){const n=new Ue(1.25,1.35,6);return n.translate(0,6.85,0),n}function po(n,t,e,i){const r=new re(n,t,e,6);return r.translate(0,i,0),r}function N0(){const n=new $t(.55,.85,.08);return n.translate(0,.46,1.18),n}function F0(){const n=new Ue(2.05,.7,4);return n.translate(0,2.55,0),n}function z0(n,t,e,i){const r=i.id==="hub"?1.42:.78,s=O0(i,r);if(!s)return;const o=te(i.colat,i.az,s.n,s.e),a=_e(o.x,o.y,o.z,Math.sin(i.az),0,Math.cos(i.az)),c=new O(o.x,o.y,o.z).normalize(),l=new qe(r,i.id==="hub"?.16:.11,6,16);l.rotateX(Math.PI/2);const u=new ct(l,be(t,15660799));u.position.set(o.x,o.y,o.z).addScaledVector(c,.2),u.quaternion.copy(a);const f=new ct(new re(r*.72,r*.72,.05,14),new ie({color:i.id==="hub"?9427178:10147040}));if(f.position.set(o.x,o.y,o.z).addScaledVector(c,.12),f.quaternion.copy(a),n.add(u,f),i.id==="hub"){const h=new ct(new Ue(.11,.85,6),new ie({color:15267835}));h.position.set(o.x,o.y,o.z).addScaledVector(c,.58),h.quaternion.copy(a),n.add(h)}for(let h=0;h<4;h+=1){const d=h/4*Math.PI*2+Math.PI/4;e.push({...te(i.colat,i.az,s.n+Math.cos(d)*r,s.e+Math.sin(d)*r),r:.34,h:.7})}}function O0(n,t){const e=t+1.9;for(const i of[.72,.85,.58])for(const r of[1,-1])for(const s of[-1,1]){const o=n.plaza*i*r,a=n.plaza*i*s,c=Math.abs(o)-t>2.5&&Math.abs(a)-t>2.65,l=n.lots.every(u=>Math.hypot(u.n-o,u.e-a)>e);if(c&&l)return{n:o,e:a}}return null}function B0(){const n=new re(1.95,1.95,.12,6);return n.translate(0,2.32,0),n}function k0(){const n=new $t(.5,.54,.04),t=n.clone();t.translate(-.58,1.38,1.16);const e=n.clone();return e.translate(.58,1.38,1.16),fu(t,e)}function H0(){const n=new $t(.82,.12,.1);return n.translate(0,.98,1.22),n}function V0(){const n=new $t(.78,.06,.32);return n.translate(0,.04,1.38),n}function G0(){const n=new $t(.36,.4,.06),t=n.clone();t.translate(-.58,1.38,1.2);const e=n.clone();return e.translate(.58,1.38,1.2),fu(t,e)}function W0(){const n=new $t(.28,.62,.28);return n.translate(.62,3.2,-.15),n}function X0(){const n=new $t(1.7,.95,.1);return n.translate(0,2.45,.15),n}function q0(){const n=new Ye(.34,7,6);return n.translate(0,7.55,0),n}function Y0(){return new Ye(1,7,6)}function fu(n,t){const e=n.index?n.toNonIndexed():n,i=t.index?t.toNonIndexed():t,r=new Oe,s=e.getAttribute("position").count+i.getAttribute("position").count,o=new Float32Array(s*3),a=new Float32Array(s*3),c=e.getAttribute("position"),l=i.getAttribute("position"),u=e.getAttribute("normal"),f=i.getAttribute("normal");for(let d=0;d<c.count;d+=1)o[d*3]=c.getX(d),o[d*3+1]=c.getY(d),o[d*3+2]=c.getZ(d),a[d*3]=u.getX(d),a[d*3+1]=u.getY(d),a[d*3+2]=u.getZ(d);const h=c.count;for(let d=0;d<l.count;d+=1)o[(h+d)*3]=l.getX(d),o[(h+d)*3+1]=l.getY(d),o[(h+d)*3+2]=l.getZ(d),a[(h+d)*3]=f.getX(d),a[(h+d)*3+1]=f.getY(d),a[(h+d)*3+2]=f.getZ(d);return r.setAttribute("position",new Ae(o,3)),r.setAttribute("normal",new Ae(a,3)),r}const el="Mondo-1",$0=12,Na=At,K0=Yt(eu,Na),Z0=gi(eu,Na),Wi=K0,Xi=Z0,j0=su,J0=ou,Q0=au,t_=uu,Oi=ye(4),e_=lu,Ts=[{id:"faro",name:"Faro del polo",kind:"race",coins:20,biome:0,line:"La piazza del polo ti segna come esploratore.",...j0},{id:"anello",name:"Piazza di menta",kind:"precision",coins:12,biome:1,line:"Il paese della prateria. Paga poco, ma paga.",...J0},{id:"pietre",name:"Petali logici",kind:"logic",coins:30,biome:2,line:"Il paese viola, per ora, è una moneta grossa.",...Q0},{id:"belvedere",name:"Belvedere di cristallo",kind:"explore",coins:16,biome:3,line:"Il totem di cristallo, dove il pianeta curva via.",...t_},{id:"cancello",name:"Campo delle dune",kind:"obstacle",coins:18,biome:4,line:"Il campo ricorda chi ha corso il sentiero.",...e_,needsCourse:!0},{id:"lanterne",name:"Piazza delle lanterne",kind:"explore",coins:14,biome:5,line:"Il paese rosa, sotto le lampade.",...cu},{id:"bacheca",name:"Bacheca dei giochi",kind:"explore",coins:8,biome:0,line:"Da qui si entra in Ostacoli. Il giro degli spicchi paga a parte.",...hu,opensBoard:!0}];function pu(n){return de[n.biome]??de[0]}const n_=[{id:"corsa",name:"Corsa",players:"20–40",min:20,max:40,demoStake:20,playable:!1,blurb:"Primo al traguardo. Gli altri lasciano la puntata sul tavolo."},{id:"logica",name:"Logica",players:"20–60",min:30,max:60,demoStake:30,playable:!1,blurb:"Enigmi a eliminazione, a tempo."},{id:"precisione",name:"Precisione",players:"20–50",min:20,max:50,demoStake:20,playable:!1,blurb:"Piattaforme e finestre strette."},{id:"ostacoli",name:"Ostacoli",players:"40–100",min:40,max:100,demoStake:20,playable:!0,blurb:"Giro breve sulle dune. In anteprima correte in quattro. Si entra anche dalla bacheca in città."},{id:"giro",name:"Giro degli spicchi",players:"1",min:0,max:0,demoStake:0,playable:!1,blurb:"Visita le sei mete del pianeta. Quando le hai tutte, la bacheca aggiunge 25 monete. Nessuna puntata."}],mu=[2.4,1.2,.4,0],i_=[9,26,47,70],r_=[{c:1.045,a:Oi-.016},{c:1.045,a:Oi-.004},{c:1.068,a:Oi+.005},{c:1.068,a:Oi+.015},{c:1.042,a:Oi+.021},{c:1.055,a:Oi+.032}],an=r_.map(n=>Yt(n.c,n.a));function mo(n,t){const e=an[n],i=an[n+1];if(!e||!i)throw new Error("varco senza segmento");return Qg(e.x,e.y,e.z,i.x,i.y,i.z,t)}const s_=[mo(0,1.25),mo(2,-1.3),mo(4,-1.2)],ls=[{name:"Rami",seconds:5.6,color:15769658},{name:"Lea",seconds:7.6,color:8154367},{name:"Nico",seconds:10.5,color:4050808}],o_=24,us=an[an.length-1];if(!us)throw new Error("percorso senza traguardo");const ge={x:us.x,y:us.y,z:us.z,r:1.7};function gu(n,t){const e=mu[n-1]??0;return Math.round(t*e)}function ke(n,t,e,i){const r=ca(i.x,i.y,i.z);return{id:n,name:t,kind:e,colat:r.colat,az:r.az}}const ma=[{id:"pole",name:"Faro del polo",kind:"pole",colat:.04,az:Na},ke("hub","Piazza civica","hub",su),ke("quarter","Quartiere del corallo","village",C0),ke("mercato","Mercato","village",n0),ke("games","Piazza dei giochi","games",hu),ke("botteghe","Botteghe","village",i0),ke("porta","Porta meridionale","village",s0),ke("east-gate","Porta della menta","village",o0),ke("dune-gate","Porta delle dune","village",a0),ke("terrazza","Terrazza del faro","village",c0),ke("mint","Paese di menta","village",ou),ke("violet","Paese viola","village",au),ke("crystal-town","Borgo di cristallo","village",R0),ke("look","Belvedere","lookout",uu),ke("dune","Campo ostacoli","venue",lu),ke("lantern","Piazza lanterne","village",cu),...de.map((n,t)=>({id:`biome-${n.id}`,name:n.name,kind:"biome",colat:.86,az:ye(t)}))],a_=["faro","anello","pietre","belvedere","cancello","lanterne"],nl=25;function c_(){return{coins:0,claimed:new Set,courseClear:!1,weekRank:null}}function bs(n,t){n.coins+=Math.max(0,Math.round(t))}function l_(n,t){const e=Math.max(0,Math.round(t));return n.coins<e?!1:(n.coins-=e,!0)}function u_(n,t){bs(n,t.payout),(n.weekRank===null||t.rank<n.weekRank)&&(n.weekRank=t.rank),t.clean&&(n.courseClear=!0)}const il=6,h_=12038568;function d_(n,t){const e=Ts.map(i=>f_(i,t,n));return{update(i,r,s,o,a){e.forEach((l,u)=>{const f=o.claimed.has(l.def.id),h=f?h_:pu(l.def).plant;for(const v of l.accents)p_(v,h);const d=f?0:Math.sin(i*2.3+u*.8)*.1;l.bob.position.y=l.baseY+d;const _=f?.92:1+Math.sin(i*2.3+u)*.04;l.ring.scale.setScalar(_)});const c=m_(r.x,r.y,r.z);if(!c){a.setPrompt(null);return}a.setPrompt(g_(c,o)),s&&__(c,o,a)}}}function f_(n,t,e){const i=new vn;i.position.set(n.x,0,n.z);const r=[],s=pu(n).plant,o=()=>{const h=new ie({color:s});return r.push(h),h},a=be(t,9066296),c=new ct(new qe(1.2,.07,6,18),o());c.rotation.x=Math.PI/2,c.position.y=.05,i.add(c);let l=i,u=0;if(n.id==="faro"){const h=new ct(new Mn(.32,0),o());h.position.y=.85,i.add(h),l=h,u=.85}else if(n.id==="anello"){const h=new ct(new qe(1.02,.1,8,18),o());h.position.y=1.2;const d=new ct(new Mn(.26,0),o());d.position.y=1.2,i.add(h,d),l=d,u=1.2}else if(n.id==="pietre"){const h=new ct(new vr(.46,0),be(t,s)),d=new ct(new vr(.34,0),be(t,6966980)),_=new ct(new Mn(.24,0),o());h.position.y=.4,d.position.y=1.02,_.position.y=1.55,r.push(h.material,d.material),i.add(h,d,_),l=_,u=1.55}else if(n.id==="belvedere"){const h=new ct(new re(.06,.08,2.5,5),a);h.position.y=1.25;const d=new ct(new $t(.78,.42,.05),o());d.position.set(.42,2.2,0),i.add(h,d),l=d,u=2.2}else if(n.id==="lanterne"){const h=new ct(new re(.07,.1,2.8,5),a);h.position.y=1.4;const d=new ct(new Ye(.42,8,6),o());d.position.y=2.9,i.add(h,d),l=d,u=2.9}else if(n.id==="bacheca"){const h=new ct(new $t(.16,1.7,.16),a);h.position.y=.85;const d=new ct(new $t(1.35,.85,.08),o());d.position.y=1.85,i.add(h,d),l=d,u=1.85}else{const h=new ct(new $t(.18,1.9,.18),a),d=new ct(new $t(.18,1.9,.18),a),_=new ct(new $t(1.75,.16,.18),a),v=new ct(new Mn(.24,0),o());h.position.set(-.72,.95,0),d.position.set(.72,.95,0),_.position.y=1.82,v.position.y=1.45,i.add(h,d,_,v),l=v,u=1.45}const f=_e(n.x,n.y,n.z,1,0,0);return i.position.set(n.x,n.y,n.z),i.quaternion.copy(f),e.add(i),{def:n,bob:l,baseY:u,accents:r,ring:c}}function p_(n,t){(n instanceof ie||n instanceof Ms)&&n.color.setHex(t)}function m_(n,t,e){let i=null,r=il*il;for(const s of Ts){const o=n-s.x,a=t-s.y,c=e-s.z,l=o*o+a*a+c*c;l<=r&&(i=s,r=l)}return i}function g_(n,t){return t.claimed.has(n.id)?`${n.name} · già presa`:n.needsCourse&&!t.courseClear?`${n.name} · prima il percorso`:`Prendi · ${n.name} · +${n.coins}`}function __(n,t,e){if(n.opensBoard&&e.openBoard(),t.claimed.has(n.id)){e.toast(n.opensBoard?"La bacheca elenca i giochi.":`${n.name} è già tua.`);return}if(n.needsCourse&&!t.courseClear){e.toast("Corri fino al cerchio ciano, poi torna al cancello.");return}t.claimed.add(n.id),bs(t,n.coins),e.sync(),e.toast(`+${n.coins} · ${n.line}`),x_(t,e),navigator.vibrate?.(18)}function x_(n,t){n.claimed.has("giro")||a_.every(e=>n.claimed.has(e))&&(n.claimed.add("giro"),bs(n,nl),t.sync(),t.toast(`+${nl} · Giro degli spicchi chiuso.`))}let Fa=null;function rl(n){Fa=n}function za(){return Fa}function ga(){Fa=null}const sl=E_(an);function v_(n,t,e,i,r){const s=ls.map((v,m)=>{const p=b_(t,v.color);return p.visible=!1,n.add(p),p.userData.lane=(m-1)*.62,{...v,mesh:p}});let o="idle",a=0,c=0,l=0;i.onAbandon(()=>{if(o==="countdown"){f("Corsa annullata. Non hai ancora puntato.");return}o==="racing"&&_(!1,c)}),i.onResultClose(()=>{o="idle",h(),u(),i.showRace(null),i.showResult(null)});function u(){r.teleport(Wi.x,Wi.y,Wi.z,Xi.x,Xi.y,Xi.z)}function f(v){o="idle",h(),i.showRace(null),i.toast(v),u()}function h(){for(const v of s)v.mesh.visible=!1}function d(v){for(const m of s){const p=Math.min(sl,v/m.seconds*sl),S=T_(an,p),b=m.mesh.userData.lane,M=typeof b=="number"?b:0,A=new O(S.x,S.y,S.z).normalize(),T=new O(S.dx,S.dy,S.dz);T.addScaledVector(A,-T.dot(A)),T.lengthSq()<1e-6&&T.set(0,0,1),T.normalize();const R=new O().crossVectors(A,T).normalize(),P=A.multiplyScalar(Rt).addScaledVector(R,M);P.normalize().multiplyScalar(Rt),m.mesh.visible=!0,m.mesh.position.copy(P),m.mesh.quaternion.copy(_e(P.x,P.y,P.z,T.x,T.y,T.z))}}function _(v,m){if(o==="result"||o==="idle")return;o="result";const p=ls.filter(R=>v&&m<R.seconds).length,S=v?ls.length+1-p:4,b=gu(S,l),M=i_[S-1]??70;u_(e,{payout:b,rank:M,clean:v}),i.sync(),i.showRace(null);const A=b-l,T=A>0?`+${A}`:String(A);i.showResult({place:S,time:v?m:null,stake:l,payout:b,netLabel:T,title:S_(S),line:y_(S)}),i.toast(S===1?"Rango settimanale aggiornato.":`Chiudi ${S}°. Rango ${e.weekRank}.`)}return{locksWorld:()=>o==="countdown"||o==="racing"||o==="result",isRacing:()=>o==="racing",start(v){if(o!=="idle")return;if(!v.playable){i.toast(`${v.name} non è in questa anteprima. Si corre Ostacoli.`);return}if(e.coins<v.demoStake){i.toast(`Servono ${v.demoStake} monete. Nel portafoglio: ${e.coins}.`);return}l=v.demoStake,a=3,c=0,o="countdown";const m=an[0],p=an[1]??m;m&&p&&r.teleport(m.x,m.y,m.z,p.x-m.x,p.y-m.y,p.z-m.z),d(0),i.showResult(null),i.showRace({title:"Ostacoli · demo",time:"3",hint:"Via tra poco. Le frecce ambra segnano i varchi.",canQuit:!0,lock:!0})},update(v){if(o==="idle"||o==="result")return;const m=Math.min(v,.05);if(o==="countdown"){a-=m;const M=Math.max(1,Math.ceil(a));if(i.showRace({title:"Ostacoli · demo",time:a>0?String(M):"Via!",hint:"Tieni il pollice in alto sul pad per andare avanti.",canQuit:!0,lock:!0}),a<=0){if(!l_(e,l)){f("Monete insufficienti. La corsa non parte."),i.sync();return}i.sync(),o="racing",c=0}return}c+=m,d(c),i.showRace({title:"Ostacoli · demo",time:`${c.toFixed(1)}s`,hint:M_(c),canQuit:!0,lock:!1});const p=r.x-ge.x,S=r.y-ge.y,b=r.z-ge.z;p*p+S*S+b*b<=ge.r*ge.r?_(!0,c):c>=o_&&_(!1,c)}}}function M_(n){const t=ls.find(e=>e.seconds>=n);return t?`${t.name} chiude in ${t.seconds.toFixed(1)}s. Tu ${n.toFixed(1)}s.`:"Sei davanti a tutti. Chiudi sul cerchio ciano."}function S_(n){return n===1?"Primo posto":n===2?"Secondo posto":n===3?"Terzo posto":"Fuori tempo"}function y_(n){return n===1?"Il montepremi grosso è tuo. Rami arriva dopo.":n===2?"Qualcosa torna. Rami era già al cerchio.":n===3?"La puntata si è assottigliata.":"Ultimo. La puntata resta sul tavolo."}function E_(n){let t=0;for(let e=1;e<n.length;e++){const i=n[e-1],r=n[e];!i||!r||(t+=Math.hypot(r.x-i.x,r.y-i.y,r.z-i.z))}return t}function T_(n,t){let e=t;for(let r=1;r<n.length;r++){const s=n[r-1],o=n[r];if(!s||!o)continue;const a=o.x-s.x,c=o.y-s.y,l=o.z-s.z,u=Math.hypot(a,c,l)||1e-4;if(e<=u||r===n.length-1){const f=Math.min(1,e/u);return{x:s.x+a*f,y:s.y+c*f,z:s.z+l*f,dx:a,dy:c,dz:l}}e-=u}const i=n[n.length-1]??{x:0,y:Rt,z:0};return{x:i.x,y:i.y,z:i.z,dx:1,dy:0,dz:0}}function b_(n,t){const e=new vn,i=be(n,t),r=new ct(new Ra(.14,.72,2,6),i);r.position.y=.86;const s=new ct(new Ye(.13,6,5),be(n,16769220));return s.position.y=1.48,e.add(r,s),e.scale.setScalar(.2),e}const w_=[.02,.05,.04,.1,.16,.05];function gs(n,t,e){const i=Math.hypot(n,t,e)||1,r=n/i*Rt,s=t/i*Rt,o=e/i*Rt,a=Math.acos(Math.min(1,Math.max(-1,s/Rt))),c=Math.atan2(r,o),l=Math.min(1,a/.18,(Math.PI-a)/.18),u=Da(r,o),h=.09+(w_[u]??0)*.45+Math.sin(c*2+.4)*Math.sin(a*1.35)*.09+Math.sin(c*3.1-a*1.8)*.045,d=Math.max(.015,Math.min(.28,h))*l,_=Math.max(Jl(r,s,o),du(r,s,o));return d*(1-_)}function Si(n,t,e){const i=Math.hypot(n,t,e)||1,r=(Rt+gs(n,t,e))/i;return{x:n*r,y:t*r,z:e*r}}const ol=1.35,al=3;function A_(n){const t=[R_(),...C_(),...P_()],e=new xi(D_(),new ie({color:16777215}),Math.max(1,t.length));return e.frustumCulled=!1,n.add(e),cl(e,t,0),{update(i,r,s,o){let a=!1;for(const c of t){if(c.taken||s.claimed.has(c.id)){c.taken=!0;continue}const l=r.x-c.x,u=r.y-c.y,f=r.z-c.z;l*l+u*u+f*f>ol*ol||(c.taken=!0,s.claimed.add(c.id),bs(s,al),a=!0,o.sync(),o.toast(`+${al} sul sentiero`),navigator.vibrate?.(8))}(a||t.some(c=>!c.taken))&&cl(e,t,i)}}}function R_(){const n=At,t=te(.72,n,0,.45),e=Si(t.x,t.y,t.z),i=_e(t.x,t.y,t.z,Math.cos(n),0,-Math.sin(n));return{id:"moneta-via",x:e.x,y:e.y,z:e.z,qx:i.x,qy:i.y,qz:i.z,qw:i.w,taken:!1}}function C_(){const n=At;return[{id:"moneta-vicolo",colat:Zt+.04,daz:.18},{id:"moneta-mercato",colat:Zt+.04,daz:-.18},{id:"moneta-bottega",colat:.5,daz:0}].map(e=>{const i=te(e.colat,n+e.daz,0,e.daz===0?2.2:0),r=Si(i.x,i.y,i.z),s=_e(i.x,i.y,i.z,Math.cos(n),0,-Math.sin(n));return{id:e.id,x:r.x,y:r.y,z:r.z,qx:s.x,qy:s.y,qz:s.z,qw:s.w,taken:!1}})}function P_(){const n=[],t=[.46,.7,1.18,1.92,2.32];let e=0;for(let i=0;i<6;i+=1){const r=ye(i);for(const s of t){const o=te(s,r,0,i%2===0?1.65:-1.65);if(L_(o.x,o.y,o.z))continue;const a=Si(o.x,o.y,o.z),c=_e(o.x,o.y,o.z,Math.cos(r),0,-Math.sin(r));n.push({id:`moneta-${e}`,x:a.x,y:a.y,z:a.z,qx:c.x,qy:c.y,qz:c.z,qw:c.w,taken:!1}),e+=1}}return n}function L_(n,t,e){if(Ua(n,t,e)||Es(n,t,e,3.2))return!0;for(const o of Ts){const a=n-o.x,c=t-o.y,l=e-o.z;if(a*a+c*c+l*l<49)return!0}const i=n-ge.x,r=t-ge.y,s=e-ge.z;return i*i+r*r+s*s<25}function cl(n,t,e){for(let i=0;i<t.length;i+=1){const r=t[i];if(!r)continue;const s=r.taken?0:.85+Math.sin(e*3.2+i)*.08,o=r.taken?.001:s;vi(n,i,r.x,r.y,r.z,o,o,o,r.qx,r.qy,r.qz,r.qw,15769658)}Mi(n)}function D_(){const n=new Mn(.22,0);return n.translate(0,.55,0),n}const ll=.0052;function I_(n,t){const e=new Set;let i=0,r=.4,s=!1,o=!1,a=!1,c=0,l=0;const u=document.createElement("div");u.className="stick",u.innerHTML='<div class="stick-knob"></div><span>cammina</span>';const f=u.querySelector(".stick-knob"),h=u.querySelector("span");if(!f||!h)throw new Error("levetta incompleta");const d=document.createElement("button");d.type="button",d.className="jump",d.textContent="Salta",d.setAttribute("aria-label","Salta"),t.append(u,d);let _=-1,v=0,m=0,p=0,S=0;const b=(C,F)=>{const U=Math.hypot(C,F)||1,V=Math.min(46,U);p=C/U*V,S=F/U*V,f.style.transform=`translate(${p}px, ${S}px)`};u.addEventListener("pointerdown",C=>{C.preventDefault(),C.stopPropagation(),_=C.pointerId,v=C.clientX,m=C.clientY,u.setPointerCapture(C.pointerId),u.classList.add("on")}),u.addEventListener("pointermove",C=>{C.pointerId===_&&(C.preventDefault(),b(C.clientX-v,C.clientY-m))});const M=C=>{C.pointerId===_&&(_=-1,p=0,S=0,f.style.transform="translate(0px, 0px)",u.classList.remove("on"))};u.addEventListener("pointerup",M),u.addEventListener("pointercancel",M),d.addEventListener("pointerdown",C=>{C.preventDefault(),C.stopPropagation(),a||(o=!0),a=!0,d.classList.add("on")});const A=()=>{a=!1,d.classList.remove("on")};d.addEventListener("pointerup",A),d.addEventListener("pointercancel",A),d.addEventListener("pointerleave",A);const T=(C,F)=>{F&&!C.repeat&&(C.code==="KeyE"||C.code==="KeyF")&&(s=!0),F&&!C.repeat&&C.code==="Space"&&(o=!0),F?e.add(C.code):e.delete(C.code),(C.code==="Space"||C.code.startsWith("Arrow"))&&C.preventDefault()};window.addEventListener("keydown",C=>T(C,!0)),window.addEventListener("keyup",C=>T(C,!1)),window.addEventListener("blur",()=>{e.clear(),_=-1,p=0,S=0,f.style.transform="translate(0px, 0px)",a=!1});let R=!1,P=0,x=0;const g=C=>{if(C.button!==0)return;const F=C.target;F instanceof Element&&F.closest("button, .stick, .sheet, .panel, .atlas")||(R=!0,P=C.clientX,x=C.clientY,C.currentTarget instanceof Element&&C.currentTarget.setPointerCapture(C.pointerId))},y=C=>{const F=document.pointerLockElement===n;if(!R&&!F)return;const N=F?C.movementX:C.clientX-P,U=F?C.movementY:C.clientY-x;P=C.clientX,x=C.clientY,c+=N,l+=U},L=()=>{R=!1};return n.addEventListener("pointerdown",g),n.addEventListener("pointermove",y),n.addEventListener("pointerup",L),n.addEventListener("pointercancel",L),t.addEventListener("pointerdown",C=>{C.target===t&&g(C)}),t.addEventListener("pointermove",y),{get yaw(){return i},get pitch(){return r},sample(C){e.has("KeyQ")&&(i+=C*1.6),e.has("KeyR")&&(i-=C*1.6),i-=c*ll,r=Math.min(1.05,Math.max(.22,r+l*ll*.85)),c=0,l=0;const F=Math.hypot(p,S)/46;let N=p/46,U=-S/46;const V=e.has("KeyA")||e.has("ArrowLeft")||e.has("KeyD")||e.has("ArrowRight")||e.has("KeyW")||e.has("ArrowUp")||e.has("KeyS")||e.has("ArrowDown");(e.has("KeyA")||e.has("ArrowLeft"))&&(N-=1),(e.has("KeyD")||e.has("ArrowRight"))&&(N+=1),(e.has("KeyW")||e.has("ArrowUp"))&&(U+=1),(e.has("KeyS")||e.has("ArrowDown"))&&(U-=1);const B=Math.hypot(N,U);B>1&&(N/=B,U/=B);const Z=e.has("ShiftLeft")||e.has("ShiftRight"),Q=F>=.82||Z&&V;u.classList.toggle("run",F>=.82),h.textContent=F>=.82?"corri":"cammina";const dt=o,Et=s;return o=!1,s=!1,{strafe:N,forward:U,run:Q,jump:dt,interact:Et}},pokeInteract(){s=!0},pokeJump(){o=!0},setYaw(C,F){i=C,F!==void 0&&(r=F)}}}const Bi={x:0,y:0,z:0};function U_(n,t,e,i,r,s){let o=n,a=t,c=e;const l=Math.hypot(o,a,c)||1;o/=l,a/=l,c/=l;for(let f=0;f<3;f++)for(const h of s){if(i>=h.h-.02)continue;const d=Math.hypot(h.x,h.y,h.z)||1,_=h.x/d,v=h.y/d,m=h.z/d,p=Math.min(1,Math.max(-1,o*_+a*v+c*m)),S=Math.acos(p)*Rt,b=r+h.r;if(S>=b)continue;let M=_-o*p,A=v-a*p,T=m-c*p;const R=Math.hypot(M,A,T);R<1e-6?(M=1,A=0,T=0):(M/=R,A/=R,T/=R);const P=(b-S)/Rt;o-=M*P,a-=A*P,c-=T*P;const x=Math.hypot(o,a,c)||1;o/=x,a/=x,c/=x}const u=Rt+i;return Bi.x=o*u,Bi.y=a*u,Bi.z=c*u,{x:Bi.x,y:Bi.y,z:Bi.z}}const N_=2.35,F_=4.7,z_=27,O_=5.15,B_=3.85,k_=.09,H_=1/90,V_=9,Ft=new O,pn=new O,ul=new O,jr=new On,go=new O;function G_(n,t,e){let i=Wi.x,r=Wi.y,s=Wi.z,o=0,a=0,c=0,l=!0,u=!1,f=!0,h=0,d=!1,_="idle",v=Rt;const m=new O(Xi.x,Xi.y,Xi.z).normalize(),p=m.clone(),S=new O(i,r,s).normalize(),b=W_(n,t),M=new ct(new Ca(.1,12),new ie({color:1713200,transparent:!0,opacity:.28,depthWrite:!1}));n.add(M);const A=(g=0)=>{Ft.set(i,r,s).normalize();const y=Math.hypot(i,r,s);b.position.copy(Ft).multiplyScalar(y+g),v=y+g,b.quaternion.copy(_e(Ft.x,Ft.y,Ft.z,p.x,p.y,p.z)),M.position.copy(Ft).multiplyScalar(Math.max(Rt,y-o)+.03),jr.setFromUnitVectors(go.set(0,0,1),Ft),M.quaternion.copy(jr),M.scale.setScalar(1-Math.min(.45,o*.28))};A();const T={get x(){return i},get y(){return r},get z(){return s},get gait(){return _},get radius(){return v},update(g,y,L){const C=e.sample(Math.min(g,.05));!L&&C.interact&&(d=!0);const F=!L&&C.jump;F||(u=!1);const N=!L&&C.run;let U=Math.min(g,.05);for(;U>0;){const Q=Math.min(H_,U);U-=Q,P(Q,y,L?0:C.strafe,L?0:C.forward,F,N)}const V=!L&&l&&Math.abs(C.strafe)+Math.abs(C.forward)>.08,B=V&&N;V&&(c+=g*(B?15.5:7.6));const Z=V?Math.sin(c*2)*(B?.02:.01):0;!l&&o>.08?_="air":B?_="run":V?_="walk":_="idle",A(Z),h=Math.max(0,h-g*2.6),x(_,h)},consumeInteract(){const g=d;return d=!1,g},syncCamera(g,y){const L=1-Math.exp(-y*V_);Ft.set(i,r,s).normalize(),S.lerp(Ft,L).normalize(),R(pn);const C=window.innerHeight>window.innerWidth,F=C?3.15:3.7,N=Math.cos(e.pitch)*F,U=Math.hypot(i,r,s);g.fov=C?70:60,g.updateProjectionMatrix(),g.position.copy(S).multiplyScalar(U).addScaledVector(S,.7+Math.sin(e.pitch)*F*.72).addScaledVector(pn,-N),g.up.copy(S),go.copy(S).multiplyScalar(U).addScaledVector(S,.2).addScaledVector(pn,1.45),g.lookAt(go)},aim(){return R(pn),{x:pn.x,y:pn.y,z:pn.z}},teleport(g,y,L,C,F,N){Ft.set(g,y,L).normalize(),o=0,a=0,l=!0,f=!0,h=0;const U=Rt+gs(Ft.x,Ft.y,Ft.z);i=Ft.x*U,r=Ft.y*U,s=Ft.z*U,m.set(C,F,N),m.addScaledVector(Ft,-m.dot(Ft)),m.lengthSq()<1e-6&&m.set(1,0,0).addScaledVector(Ft,-Ft.x),m.normalize(),p.copy(m),e.setYaw(0,.4),S.copy(Ft),A()},lookToward(g,y,L){Ft.set(i,r,s).normalize(),m.set(g-i,y-r,L-s),m.addScaledVector(Ft,-m.dot(Ft)),!(m.lengthSq()<1e-8)&&(m.normalize(),p.copy(m),e.setYaw(0,.42))}};function R(g){Ft.set(i,r,s).normalize(),jr.setFromAxisAngle(Ft,e.yaw),g.copy(m).applyQuaternion(jr),g.addScaledVector(Ft,-g.dot(Ft)),g.lengthSq()<1e-6&&g.set(0,0,1),g.normalize()}function P(g,y,L,C,F,N){if(Ft.set(i,r,s).normalize(),R(pn),ul.crossVectors(pn,Ft).normalize(),L!==0||C!==0){p.copy(ul).multiplyScalar(L).addScaledVector(pn,C);const Z=Math.min(1,p.length());p.normalize();const Q=N?F_:N_;i+=p.x*Q*g*Z,r+=p.y*Q*g*Z,s+=p.z*Q*g*Z}const U=U_(i,r,s,o,k_,y);i=U.x,r=U.y,s=U.z,Ft.set(i,r,s).normalize(),m.addScaledVector(Ft,-m.dot(Ft)),m.lengthSq()<1e-6&&m.set(1,0,0).addScaledVector(Ft,-Ft.x),m.normalize(),p.addScaledVector(Ft,-p.dot(Ft)),p.lengthSq()<1e-6?p.copy(m):p.normalize(),F&&!u&&(l?(a=O_,o=.04,l=!1,f=!0,u=!0):f&&(a=B_,f=!1,h=1,u=!0)),a-=z_*g,o+=a*g,o<=0?(o=0,a=0,l=!0,f=!0):l=!1,Ft.set(i,r,s).normalize();const V=gs(Ft.x,Ft.y,Ft.z),B=Rt+V+o;i=Ft.x*B,r=Ft.y*B,s=Ft.z*B}return T;function x(g,y){const L=g==="air",C=g==="run",F=g==="walk",N=C?Math.sin(c)*1.5:F?Math.sin(c)*.72:0,U=b.getObjectByName("legL"),V=b.getObjectByName("legR"),B=b.getObjectByName("armL"),Z=b.getObjectByName("armR"),Q=b.getObjectByName("torso"),dt=b.getObjectByName("cape"),Et=b.getObjectByName("puff");if(U&&V&&(U.rotation.x=L?.7:N,V.rotation.x=L?-.45:-N),B&&Z){const jt=C?1.2:.62,rt=L?y>.05?-1.45:-.85:0;B.rotation.x=L?rt:N*jt,Z.rotation.x=L?rt:-N*jt,B.rotation.z=C?.35:.08,Z.rotation.z=C?-.35:-.08}if(Q&&(Q.rotation.x=L?-.22:C?.42:F?.14:0),dt){const jt=C?1.05+Math.sin(c*2)*.22:F?.28+Math.sin(c)*.16:.1;dt.rotation.x=L?.85:jt}Et instanceof ct&&Et.material instanceof ie&&(Et.material.opacity=y*.9,Et.scale.setScalar(.55+(1-y)*1.7))}}function W_(n,t){const e=new vn,i=be(t,1929168),r=be(t,16769220),s=be(t,1321018),o=be(t,1195910),a=new ct(new re(.12,.16,.62,6),i);a.name="torso",a.position.y=1.22,e.add(a);const c=new ct(new re(.045,.05,.12,5),r);c.position.y=1.58,e.add(c);const l=new ct(new Ye(.145,8,6),r);l.position.y=1.74,e.add(l);const u=new ct(new $t(.22,.055,.07),be(t,15769658));u.position.set(0,1.76,.11),e.add(u);const f=new ct(new $t(.16,.28,.08),s);f.position.set(0,1.24,-.16),e.add(f);const h=new ct(new $t(.18,.46,.03),o);h.name="cape",h.position.set(0,1.18,-.2),h.geometry.translate(0,-.18,0),e.add(h),e.add(Jr("legL",-.09,.88,.78,.045,i)),e.add(Jr("legR",.09,.88,.78,.045,i)),e.add(Jr("armL",-.2,1.46,.58,.032,i)),e.add(Jr("armR",.2,1.46,.58,.032,i));const d=new ct(new qe(.95,.07,5,14),new ie({color:16171338,transparent:!0,opacity:0,depthWrite:!1}));return d.name="puff",d.rotation.x=Math.PI/2,d.position.y=.12,e.add(d),e.scale.setScalar(.2),n.add(e),e}function Jr(n,t,e,i,r,s){const o=new vn;o.name=n,o.position.set(t,e,0);const a=new ct(new re(r*.85,r,i,5),s);return a.position.y=-i/2,o.add(a),o}const _u=13944564;function X_(){const n=new Ye(1,20,12),t=n.attributes.position;if(!t)throw new Error("cielo senza posizioni");const e=new Float32Array(t.count*3),i=new Gt(6124784),r=new Gt(_u),s=new Gt(16743080),o=new Gt(8376575),a=new Gt;for(let l=0;l<t.count;l++){const u=t.getY(l),f=t.getX(l),h=t.getZ(l),d=Ch.clamp((u+.12)/1.12,0,1);a.copy(r).lerp(i,d*d);const _=Math.max(0,-h*.7+f*.45)*Math.max(0,1-Math.abs(u)*2.4);a.lerp(s,_*.38);const v=Math.max(0,h*.55-f*.25)*Math.max(0,1-Math.abs(u)*2.2);a.lerp(o,v*.4),e[l*3]=a.r,e[l*3+1]=a.g,e[l*3+2]=a.b}n.setAttribute("color",new Ae(e,3));const c=new ct(n,new ie({vertexColors:!0,side:We,fog:!1,depthWrite:!1}));return c.scale.setScalar(180),c.frustumCulled=!1,c.renderOrder=-1,c}const hl=_u,dl=.5;function q_(n){const t=n.getContext("webgl2",{antialias:!1,alpha:!1,depth:!0,stencil:!1,powerPreference:"high-performance"});if(!t)throw new Error("Serve WebGL2 per Minimondo.");const e=new Zg({canvas:n,context:t,antialias:!1,alpha:!1,powerPreference:"high-performance"});e.setPixelRatio(1),e.outputColorSpace=Ze,e.toneMapping=Nn,e.setClearColor(hl,1),e.autoClear=!0;const i=new mc;i.fog=new wa(hl,16,74),i.add(new ld(14148863,15182032,.62));const r=new Sc(16765122,1.05);r.position.set(-16,11,9),i.add(r);const s=new Sc(10401023,.58);s.position.set(14,6,-12),i.add(s);const o=new sn(62,1,.05,420),a=new Kn(2,2,{depthBuffer:!0,stencilBuffer:!1,generateMipmaps:!1,minFilter:De,magFilter:De});a.texture.colorSpace=Ze;const c=new Pa(-1,1,1,-1,0,1);c.position.z=1;const l=new ie({map:a.texture});l.toneMapped=!1;const u={value:new Wt(1,1)};l.onBeforeCompile=_=>{_.uniforms.uRes=u,_.fragmentShader=_.fragmentShader.replace("#include <common>",`#include <common>
uniform vec2 uRes;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
        float luma = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
        gl_FragColor.rgb = mix(vec3(luma), gl_FragColor.rgb, 1.12);
        vec2 vigP = gl_FragCoord.xy / uRes - 0.5;
        float vig = smoothstep(0.22, 0.75, dot(vigP, vigP));
        gl_FragColor.rgb *= mix(1.0, 0.84, vig);`)};const f=new mc;return f.add(new ct(new Er(2,2),l)),{renderer:e,scene:i,camera:o,resize:()=>{const _=Math.max(1,n.clientWidth),v=Math.max(1,n.clientHeight);e.setSize(_,v,!1),a.setSize(Math.max(2,Math.floor(_*dl)),Math.max(2,Math.floor(v*dl))),o.aspect=_/v,o.updateProjectionMatrix(),u.value.set(_,v)},render:()=>{e.setRenderTarget(a),e.render(i,o),e.setRenderTarget(null),e.render(f,c)}}}const Y_={pole:"#f0a03a",hub:"#ff4d86",village:"#c9b6ff",biome:"#9ad7c4",games:"#e39a32",venue:"#f06a45",lookout:"#7ec8ee"},ui=2.55;function $_(n){const t=document.createElement("button");t.type="button",t.className="ghost",t.textContent="Mappa",t.setAttribute("aria-expanded","false");const e=document.createElement("div");e.className="atlas",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Globo di Mondo-1"),e.innerHTML=`
    <div class="sheet map-sheet">
      <header class="sheet-head">
        <div>
          <p class="eyebrow">Globo · trascina e tocca</p>
          <h2>Mappa</h2>
        </div>
        <button type="button" class="ghost" id="map-close">Chiudi</button>
      </header>
      <canvas class="map-canvas" width="420" height="420" aria-label="Globo di Mondo-1, ruotabile"></canvas>
      <p class="map-caption" id="map-caption">Trascina per girare il pianeta. Tocca un luogo: la freccia segue l’arco più corto.</p>
      <ul class="map-list"></ul>
    </div>
  `,n.append(e);const i=document.createElement("div");i.className="needle",i.hidden=!0,i.innerHTML=`
    <button type="button" class="needle-x" aria-label="Annulla la meta">×</button>
    <svg class="needle-arrow" viewBox="0 0 64 88" aria-hidden="true">
      <path d="M32 4 L56 44 H44 V82 H20 V44 H8 Z" fill="#ffc43a" stroke="#241c22" stroke-width="4" stroke-linejoin="round"/>
    </svg>
    <p class="needle-label"></p>
  `,n.append(i);const r=i.querySelector(".needle-arrow"),s=i.querySelector(".needle-label"),o=i.querySelector(".needle-x");if(!r||!s||!o)throw new Error("freccia incompleta");o.addEventListener("click",()=>ga());const a=e.querySelector("canvas"),c=e.querySelector("#map-caption"),l=e.querySelector("ul"),u=e.querySelector("#map-close");if(!a||!c||!l||!u)throw new Error("mappa incompleta");const f=a.getContext("2d");if(!f)throw new Error("mappa senza canvas");const h=f;let d=!1,_=!0,v=0,m=.42,p=!1,S=null,b=420,M=420;const A=x=>{const g=Yt(x.colat,x.az);rl({name:x.name,x:g.x,y:g.y,z:g.z}),T(!1)};for(const x of ma){if(x.kind==="biome")continue;const g=document.createElement("li"),y=document.createElement("button");y.type="button",y.className="map-chip",y.textContent=x.name,y.addEventListener("click",()=>A(x)),g.append(y),l.append(g)}const T=x=>{x&&!_||(d=x,e.hidden=!d,t.setAttribute("aria-expanded",String(d)),t.classList.toggle("on",d),d&&(p=!1))};t.addEventListener("click",()=>T(!d)),u.addEventListener("click",()=>T(!1)),e.addEventListener("click",x=>{x.target===e&&T(!1)}),a.addEventListener("pointerdown",x=>{S={x:x.clientX,y:x.clientY,moved:!1},a.setPointerCapture(x.pointerId)}),a.addEventListener("pointermove",x=>{if(!S)return;const g=x.clientX-S.x,y=x.clientY-S.y;g*g+y*y>16&&(S.moved=!0),v-=g*.008,m=Math.max(-1.15,Math.min(1.15,m+y*.008)),S.x=x.clientX,S.y=x.clientY,S.moved&&(p=!0)});const R=x=>{if(!S)return;const g=S.moved;S=null,g||P(x.clientX,x.clientY)};a.addEventListener("pointerup",R),a.addEventListener("pointercancel",()=>{S=null}),window.addEventListener("keydown",x=>{x.repeat||x.code!=="Escape"||d||ga()});const P=(x,g)=>{const y=a.getBoundingClientRect(),L=(x-y.left)/y.width*a.width,C=(g-y.top)/y.height*a.height,F=tx(L,C,b,M);if(!F)return;const N=Q_(F.x,F.y,F.z,v,m);let U=null,V=.96;for(const B of ma){if(B.kind==="biome")continue;const Z=Yt(B.colat,B.az,1),Q=Z.x*N.x+Z.y*N.y+Z.z*N.z;Q>V&&(V=Q,U=B)}if(U){A(U);return}rl({name:"Segnato",x:N.x*Rt,y:N.y*Rt,z:N.z*Rt}),T(!1)};return{isOpen:()=>d,toggle:()=>T(!d),close:()=>T(!1),setEnabled(x){_=x,t.disabled=!x,x||T(!1)},draw(x,g,y,L,C,F){const N=ca(x,g,y),U=za();if(U){const Z=ca(U.x,U.y,U.z),Q=Math.max(1,Math.round(ox(N.colat,N.az,Z.colat,Z.az)*Rt)),dt=sx(x,g,y,L,C,F,U.x,U.y,U.z);i.hidden=!1;const Et=`Verso ${U.name} · ${Q} m`;s.textContent!==Et&&(s.textContent=Et),dt!==null&&(r.style.transform=`rotate(${dt.toFixed(1)}deg)`,i.dataset.deg=dt.toFixed(1)),i.dataset.meters=String(Q)}else i.hidden=!0,delete i.dataset.deg,delete i.dataset.meters;if(!d)return;p||(v=-N.az);const V=Math.round(Math.max(260,Math.min(420,a.clientWidth||340))),B=V;b=V,M=B,(a.width!==V||a.height!==B)&&(a.width=V,a.height=B),K_(h,V,B,v,m,x,g,y,L,C,F)},button:t}}function K_(n,t,e,i,r,s,o,a,c,l,u){const f=t/2,h=e/2,_=t*.4*(ui-1);n.clearRect(0,0,t,e),n.fillStyle="#141028",n.fillRect(0,0,t,e);const v=(P,x,g)=>{const y=J_(P,x,g,i,r),L=_/(ui-y.z);return{x:f+y.x*L,y:h-y.y*L,z:y.z,f:L}},m=[],p=9,S=4;for(let P=0;P<de.length;P+=1){const x=de[P];if(!x)continue;const g=ye(P)-Math.PI/de.length;for(let y=0;y<p;y+=1){const L=.12+(Math.PI-.24)*y/p,C=.12+(Math.PI-.24)*(y+1)/p;for(let F=0;F<S;F+=1){const N=g+Math.PI*2/de.length*(F/S),U=g+Math.PI*2/de.length*((F+1)/S),B=[Yt(L,N,1),Yt(L,U,1),Yt(C,U,1),Yt(C,N,1)].map(Et=>v(Et.x,Et.y,Et.z)),Z=(B[0]?.z??0)+(B[1]?.z??0)+(B[2]?.z??0)+(B[3]?.z??0);if(Z<.15||!B[0])continue;const dt=.42+.58*Math.max(0,Z/4);m.push({z:Z,color:nx(x.ground,dt),pts:B})}}}m.sort((P,x)=>P.z-x.z);for(const P of m){const x=P.pts[0];if(x){n.beginPath(),n.moveTo(x.x,x.y);for(const g of P.pts.slice(1))n.lineTo(g.x,g.y);n.closePath(),n.fillStyle=P.color,n.fill()}}n.lineCap="round",fl(n,v,.64,Z_,"#f070a8",3),j_(n,v,ye(0),.28,1.05,"#f070a8",3),fl(n,v,Math.PI/2,Math.PI,"rgba(255, 228, 242, 0.45)",1.2);const b=[],M=(P,x,g)=>{for(const y of b)if((y.x-P)**2+(y.y-x)**2<1156)return;b.push({x:P,y:x}),n.font="700 12px Outfit, sans-serif",n.textAlign="center",n.textBaseline="bottom",n.lineWidth=3,n.strokeStyle="rgba(16, 12, 32, 0.9)",n.fillStyle="#ffe4f2",n.strokeText(g,P,x-8),n.fillText(g,P,x-8)};for(let P=0;P<de.length;P+=1){const x=de[P];if(!x)continue;const g=v(...cr(Yt(.95,ye(P),1)));g.z<.25||M(g.x,g.y,ix(x.id))}for(const P of ma){if(P.kind==="biome")continue;const x=v(...cr(Yt(P.colat,P.az,1)));x.z<.2||(n.fillStyle=Y_[P.kind],n.beginPath(),n.arc(x.x,x.y,P.kind==="pole"?4:5.5,0,Math.PI*2),n.fill(),P.kind!=="pole"&&M(x.x,x.y,rx(P)))}const A=za();if(A){const P=v(...cr(A));P.z>.12&&(n.strokeStyle="#ffc43a",n.lineWidth=3,n.beginPath(),n.arc(P.x,P.y,9,0,Math.PI*2),n.stroke())}const T=v(...cr({x:s,y:o,z:a})),R=v(...cr(ex(s+c*18,o+l*18,a+u*18)));T.z>.05&&(n.strokeStyle="#ffc43a",n.lineWidth=3,n.beginPath(),n.moveTo(T.x,T.y),n.lineTo(R.x,R.y),n.stroke(),n.fillStyle="#ffc43a",n.beginPath(),n.arc(T.x,T.y,5,0,Math.PI*2),n.fill(),n.fillStyle="#141028",n.beginPath(),n.arc(T.x,T.y,2.2,0,Math.PI*2),n.fill())}const Z_=Math.PI/3;function fl(n,t,e,i,r,s){const o=ye(0);n.beginPath();let a=!1;for(let c=0;c<=28;c+=1){const l=e===Math.PI/2?-Math.PI+c/28*Math.PI*2:o-i+2*i*c/28,u=Yt(e,l,1),f=t(u.x,u.y,u.z);if(f.z<.08){a=!1;continue}a?n.lineTo(f.x,f.y):n.moveTo(f.x,f.y),a=!0}n.strokeStyle=r,n.lineWidth=s,n.stroke()}function j_(n,t,e,i,r,s,o){n.beginPath();let a=!1;for(let c=0;c<=24;c+=1){const l=Yt(i+(r-i)*c/24,e,1),u=t(l.x,l.y,l.z);if(u.z<.08){a=!1;continue}a?n.lineTo(u.x,u.y):n.moveTo(u.x,u.y),a=!0}n.strokeStyle=s,n.lineWidth=o,n.stroke()}function J_(n,t,e,i,r){const s=Math.cos(i),o=Math.sin(i),a=s*n+o*e,c=-o*n+s*e,l=Math.cos(r),u=Math.sin(r);return{x:a,y:l*t-u*c,z:u*t+l*c}}function Q_(n,t,e,i,r){const s=Math.cos(-r),o=Math.sin(-r),a=s*t-o*e,c=o*t+s*e,l=Math.cos(-i),u=Math.sin(-i);return{x:l*n+u*c,y:a,z:-u*n+l*c}}function tx(n,t,e,i){const s=e*.4*(ui-1),o=(n-e/2)/s,a=-(t-i/2)/s,c=Math.hypot(o,a,1),l=o/c,u=a/c,f=-1/c,h=ui*f,d=ui*ui-1,_=h*h-d;if(_<0)return null;const v=Math.sqrt(_),m=-h-v>0?-h-v:-h+v;return m<0?null:{x:l*m,y:u*m,z:ui+f*m}}function cr(n){const t=Math.hypot(n.x,n.y,n.z)||1;return[n.x/t,n.y/t,n.z/t]}function ex(n,t,e){const i=Math.hypot(n,t,e)||1;return{x:n/i,y:t/i,z:e/i}}function nx(n,t){const e=Math.round((n>>16&255)*t),i=Math.round((n>>8&255)*t),r=Math.round((n&255)*t);return`rgb(${e}, ${i}, ${r})`}function ix(n){return n==="coral"?"Corallo":n==="mint"?"Menta":n==="violet"?"Viola":n==="crystal"?"Cristallo":n==="dune"?"Dune":"Lanterne"}function rx(n){return n.kind==="hub"?"Piazza":n.id==="quarter"?"Corallo":n.id==="mercato"?"Mercato":n.kind==="games"?"Giochi":n.id==="botteghe"?"Botteghe":n.id==="porta"?"Sud":n.id==="east-gate"?"Est":n.id==="dune-gate"?"Ovest":n.id==="terrazza"?"Terrazza":n.kind==="venue"?"Ostacoli":n.kind==="lookout"?"Belvedere":n.id==="mint"?"Menta":n.id==="violet"?"Viola":n.id==="crystal-town"?"Cristallo":n.id==="lantern"?"Lanterne":n.name}function sx(n,t,e,i,r,s,o,a,c){const l=Math.hypot(n,t,e)||1,u=n/l,f=t/l,h=e/l,d=Math.hypot(o,a,c)||1,_=o/d,v=a/d,m=c/d,p=_*u+v*f+m*h;let S=_-u*p,b=v-f*p,M=m-h*p;const A=Math.hypot(S,b,M);if(A<1e-4)return null;S/=A,b/=A,M/=A;const T=f*s-h*r,R=h*i-u*s,P=u*r-f*i,x=Math.hypot(T,R,P)||1,g=S*i+b*r+M*s,y=S*(T/x)+b*(R/x)+M*(P/x);return Math.atan2(y,g)*180/Math.PI}function ox(n,t,e,i){const r=Math.sin(n),s=Math.sin(e),o=Math.cos(n)*Math.cos(e)+r*s*Math.cos(t-i);return Math.acos(Math.min(1,Math.max(-1,o)))}function ax(n,t,e){n.innerHTML="";const i=window.matchMedia("(pointer: coarse)").matches,r=Cn("section","status");r.innerHTML=`
    <p class="mark">Minimondo</p>
    <p class="world">${el}</p>
    <p class="coins"><span>monete</span> <strong id="coins">0</strong></p>
    <p class="rank">settimana ${cx(new Date)} · rango <strong id="rank">—</strong></p>
  `;const s=$_(n),o=Cn("div","tools"),a=_o("Giochi","primary");a.setAttribute("aria-expanded","false"),o.append(s.button,a);const c=Cn("div","coach");c.innerHTML=`
    <p>La freccia in alto indica la meta, lungo la curva.</p>
    <strong>${i?"Mappa in alto a destra. Tocca un luogo e seguila.":"Shift corre. M apre la mappa. Tocca un luogo e segui la freccia."}</strong>
  `;const l=Cn("p","hint");l.textContent=i?"Levetta a fondo per correre · dito sul mondo per girare · Salta due volte":"WASD cammina · Shift corre · M mappa · E raccoglie · spazio, due salti";const u=_o("","prompt");u.hidden=!0;const f=Cn("div","toasts"),h=Cn("section","race");h.hidden=!0,h.innerHTML=`
    <p class="race-kicker"></p>
    <p class="race-time"></p>
    <p class="race-hint"></p>
    <button type="button" class="ghost" id="race-quit">Abbandona</button>
  `;const d=Cn("div","result");d.hidden=!0,d.innerHTML=`
    <div class="sheet result-sheet">
      <p class="eyebrow">Risultato · sessione locale</p>
      <h2 id="res-title"></h2>
      <p id="res-line"></p>
      <p class="math" id="res-math"></p>
      <button type="button" class="primary wide" id="res-close">Torna in piazza</button>
    </div>
  `;const _=Cn("div","panel");_.hidden=!0,_.setAttribute("role","dialog"),_.setAttribute("aria-modal","true"),_.setAttribute("aria-labelledby","events-title"),_.innerHTML=`
    <div class="sheet">
      <header class="sheet-head">
        <div>
          <p class="eyebrow">${el} · proto ${$0}</p>
          <h2 id="events-title">Giochi</h2>
          <p>Ostacoli è aperto. Il giro degli spicchi paga quando visiti le mete.</p>
        </div>
        <button type="button" class="ghost" id="events-close">Chiudi</button>
      </header>
      <p class="wallet">portafoglio <strong id="wallet">0</strong> monete</p>
      <ul class="modes"></ul>
      <div class="buyin" hidden>
        <p class="eyebrow" id="buy-kicker"></p>
        <h3 id="buy-name"></h3>
        <p id="buy-blurb"></p>
        <p class="stake">Puntata demo <strong id="buy-stake"></strong></p>
        <ol class="payout" id="buy-payout"></ol>
        <p class="note" id="buy-note"></p>
        <div class="buy-actions">
          <button type="button" class="ghost" id="buy-back">Indietro</button>
          <button type="button" class="primary" id="buy-go">Entra (demo)</button>
        </div>
      </div>
      <p class="fine">Il rango settimanale di questa sessione si muove quando chiudi una gara. Niente soldi veri.</p>
    </div>
  `,n.append(r,o,c,l,u,f,h,d,_);const v=Ke(r,"#coins"),m=Ke(r,"#rank"),p=Ke(_,"#wallet"),S=Ke(_,".modes"),b=Ke(_,".buyin"),M=Ke(_,"#events-close"),A=Ke(_,"#buy-back"),T=Ke(_,"#buy-go"),R=Ke(h,"#race-quit"),P=Ke(d,"#res-close"),x=Ke(h,".race-kicker"),g=Ke(h,".race-time"),y=Ke(h,".race-hint");let L=null,C=!1,F=!1,N=()=>{},U=()=>{},V="";for(const rt of n_){const Lt=document.createElement("li"),Y=_o("","mode");Y.innerHTML=`
      <span>
        <strong>${rt.name}</strong>
        <em>${rt.players} giocatori · ${rt.playable?"demo pronta":"presto"}</em>
      </span>
      <b>${rt.demoStake}</b>
    `,Y.addEventListener("click",()=>dt(rt)),Lt.append(Y),S.append(Lt)}const B=rt=>{if(rt&&(F||!h.hidden||C)){Et("Prima chiudi la corsa.");return}_.hidden=!rt,a.setAttribute("aria-expanded",String(rt)),a.classList.toggle("on",rt),rt&&Q()};a.addEventListener("click",()=>{_.hidden&&s.close(),B(_.hidden)}),s.button.addEventListener("click",()=>{s.isOpen()&&B(!1)}),M.addEventListener("click",()=>B(!1)),_.addEventListener("click",rt=>{rt.target===_&&B(!1)}),A.addEventListener("click",Q),T.addEventListener("click",()=>{if(!L)return;if(t.coins<L.demoStake){Et(`Ti servono ${L.demoStake} monete. Ne hai ${t.coins}.`);return}if(!L.playable){Et(L.id==="giro"?"Il giro non si punta: visita le sei mete.":`${L.name} arriva dopo. Oggi si corre Ostacoli.`);return}const rt=L;B(!1),e.onStartDemo(rt)}),R.addEventListener("click",()=>N()),P.addEventListener("click",()=>{d.hidden=!0,C=!1,U()}),window.addEventListener("keydown",rt=>{rt.repeat||(rt.code==="KeyM"&&s.toggle(),rt.code==="Escape"&&d.hidden&&(s.close(),B(!1)))}),u.addEventListener("click",()=>{e.onInteract(),u.blur()});const Z=()=>c.classList.add("gone");window.setTimeout(Z,7e3),window.addEventListener("pointerdown",Z,{once:!0}),window.addEventListener("keydown",Z,{once:!0});function Q(){S.hidden=!1,b.hidden=!0,L=null}function dt(rt){L=rt,S.hidden=!0,b.hidden=!1,Rn(b,"#buy-kicker",rt.playable?"Demo locale · 4 corridori":"Non ancora in anteprima"),Rn(b,"#buy-name",rt.name),Rn(b,"#buy-blurb",rt.blurb),Rn(b,"#buy-stake",String(rt.demoStake));const Lt=Ke(b,"#buy-payout");Lt.innerHTML="",rt.playable?(mu.forEach((Y,j)=>{const ft=document.createElement("li");ft.innerHTML=`<span>${j+1}°</span><b>${gu(j+1,rt.demoStake)}</b>`,ft.dataset.mult=String(Y),Lt.append(ft)}),Rn(b,"#buy-note","La puntata esce quando parte il via. 1° prende il grosso, 4° non riprende nulla."),T.textContent="Entra (demo)"):(Rn(b,"#buy-note",`In sala vera la puntata va da ${rt.min} a ${rt.max}. Qui il tasto non apre la stanza.`),T.textContent="Entra (demo)")}function Et(rt){const Lt=Cn("p","toast");for(Lt.textContent=rt,f.append(Lt);f.children.length>3;)f.firstElementChild?.remove();window.setTimeout(()=>Lt.classList.add("out"),3200),window.setTimeout(()=>Lt.remove(),3700)}function jt(){v.textContent=String(t.coins),p.textContent=String(t.coins),m.textContent=t.weekRank===null?"—":String(t.weekRank),v.classList.remove("pop"),v.offsetWidth,v.classList.add("pop")}return{blocksPlay:()=>s.isOpen()||!_.hidden||C||F,openBoard(){s.close(),B(!0)},paintMap(rt,Lt,Y,j,ft,It){s.draw(rt,Lt,Y,j,ft,It)},toast:Et,setPrompt(rt){const Lt=rt??"";Lt!==V&&(V=Lt,u.hidden=Lt.length===0,u.textContent=Lt)},sync:jt,showRace(rt){if(!rt){h.hidden=!0,F=!1,a.disabled=C,s.setEnabled(!C);return}h.hidden=!1,F=rt.lock,a.disabled=!0,s.close(),s.setEnabled(!1),x.textContent=rt.title,g.textContent=rt.time,y.textContent=rt.hint,R.hidden=!rt.canQuit},showResult(rt){if(!rt){d.hidden=!0,C=!1,a.disabled=!1,s.setEnabled(!0);return}C=!0,d.hidden=!1,s.close(),s.setEnabled(!1),h.hidden=!0,F=!1,a.disabled=!0,Rn(d,"#res-title",rt.title),Rn(d,"#res-line",rt.time===null?rt.line:`${rt.line} Tempo ${rt.time.toFixed(1)}s.`),Rn(d,"#res-math",`Puntata ${rt.stake} · incasso ${rt.payout} · netto ${rt.netLabel}`)},onAbandon(rt){N=rt},onResultClose(rt){U=rt}}}function Rn(n,t,e){const i=n.querySelector(t);i&&(i.textContent=e)}function Ke(n,t){const e=n.querySelector(t);if(!e)throw new Error(`manca ${t}`);return e}function Cn(n,t){const e=document.createElement(n);return e.className=t,e}function _o(n,t){const e=document.createElement("button");return e.type="button",e.className=t,e.textContent=n,e}function cx(n){const t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate())),e=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-e);const i=new Date(Date.UTC(t.getUTCFullYear(),0,1));return Math.ceil(((t.getTime()-i.getTime())/864e5+1)/7)}function lx(n,t,e){let i=Math.imul(n|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,1442695041);return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,i=Math.imul(i,2246822519),i^=i>>>13,i>>>0}const Te=(n,t,e)=>lx(n,t,e)/4294967296;function ux(n){let t=2166136261;for(let e=0;e<n.length;e+=1)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}const Qr=ux("Mondo-1"),pl=[15765672,9363648,13150448,9364720,16756858,15765704];function hx(n,t,e){const i=[],r=[],s=[],o=[],a=[],c=[],l=[];for(let u=0;u<6;u+=1){const f=ye(u),h=[];for(let d=0;d<248;d+=1){const _=f+(Te(u,d,Qr)-.5)*.92,v=.38+Te(d,u,Qr^17)*1.85;if(ts(v,_,.35))continue;const m=.85+Te(u,d,4)*.85;if(h.push(es(v,_,m,ml(u,d))),d%3===0){const p=te(v,_,(Te(d,u,21)-.5)*1.6,(Te(u,d,27)-.5)*1.6),S=Math.hypot(p.x,p.y,p.z)||1,b=Math.acos(Math.min(1,Math.max(-1,p.y/S))),M=Math.atan2(p.x,p.z);ts(b,M,.35)||h.push(es(b,M,m*.72,ml(u,d+9)))}}for(let d=0;d<28;d+=1){const _=f+(Te(u+20,d,Qr)-.5)*.8,v=.4+Te(d,u+3,Qr)*2.1;if(ts(v,_,3.5))continue;const m=.55+Te(u,d,9)*1.35,p=es(v,_,m,pl[u]??13421772);if(l.push(p),d%3===0){const S=te(v,_,(Te(d,u,2)-.5)*2.4,(Te(u,d,6)-.5)*2.4),b=Math.hypot(S.x,S.y,S.z)||1,M=Math.acos(Math.min(1,Math.max(-1,S.y/b))),A=Math.atan2(S.x,S.z);ts(M,A,2)||l.push(es(M,A,m*.62,pl[u]??13421772))}}u===0?i.push(...h):u===1?r.push(...h):u===2?s.push(...h):u===3?o.push(...h):u===4?a.push(...h):c.push(...h)}si(n,t,dx(),i,!1,!0),si(n,t,fx(),r,!1,!0),si(n,t,px(),s,!1,!0),si(n,t,mx(),o,!0,!0),si(n,t,gl(),a,!1,!0),si(n,t,gl(),c,!1,!0),si(n,t,gx(),l,!1,!1);for(const u of l)e.push({x:u.x,y:u.y,z:u.z,r:.52*u.s,h:1.05*u.s})}function ml(n,t){const e=[16731526,3133068,10111720,2283760,16747068,16761914],i=[13903964,1542741,6957248,1347776,14704672,14692480];return Te(n,t,8)>.62?i[n]??16777215:e[n]??16777215}function ts(n,t,e){if(n<.12||n>2.9)return!0;const i=Yt(n,t);return Ql(i.x,i.y,i.z)||Ua(i.x,i.y,i.z)?!0:Es(i.x,i.y,i.z,e)}function es(n,t,e,i){const r=Yt(n,t),s=Si(r.x,r.y,r.z),o=_e(r.x,r.y,r.z,Math.cos(t),0,-Math.sin(t));return{...s,qx:o.x,qy:o.y,qz:o.z,qw:o.w,s:e,color:i}}function si(n,t,e,i,r,s){if(i.length===0)return;const o=r?new ie({color:16777215}):Tr(t);s&&Zl(o);const a=new xi(e,o,i.length);a.frustumCulled=!1;for(let c=0;c<i.length;c+=1){const l=i[c];l&&vi(a,c,l.x,l.y,l.z,l.s,l.s,l.s,l.qx,l.qy,l.qz,l.qw,l.color)}Mi(a),n.add(a)}function dx(){const n=new Ue(.28,.16,5);return n.translate(0,.08,0),n}function fx(){const n=new Ue(.045,.32,4);return n.translate(0,.16,0),n}function px(){const n=new re(.03,.045,.36,4);return n.translate(0,.18,0),n}function mx(){const n=new Ue(.08,.28,4);return n.translate(0,.14,0),n}function gl(){const n=new Ye(.16,5,4);return n.scale(1.2,.45,1.2),n.translate(0,.07,0),n}function gx(){const n=new vr(.55,0);return n.translate(0,.28,0),n}function _x(n,t,e){const i=[],r=[],s=[],o=[],a=[],c=(M,A,T,R=1,P=1,x=1)=>{const g=gi(Math.acos(Math.min(1,Math.max(-1,A.y/(Math.hypot(A.x,A.y,A.z)||1)))),Math.atan2(A.x,A.z)),y=_e(A.x,A.y,A.z,g.x,g.y,g.z);M.push({x:A.x,y:A.y,z:A.z,qx:y.x,qy:y.y,qz:y.z,qw:y.w,sx:R,sy:P,sz:x,color:T})},l=M=>!Ua(M.x,M.y,M.z)&&!Es(M.x,M.y,M.z,2);for(let M=0;M<de.length;M+=1){const A=ye(M),T=de[M]?.plant??16731526;for(let x=.7;x<=1.58;x+=14/Rt){const g=te(x,A,0,3.15);if(!l(g))continue;c(i,g,2893376);const y=Math.hypot(g.x,g.y,g.z)||1;c(r,{x:g.x+g.x/y*1.7,y:g.y+g.y/y*1.7,z:g.z+g.z/y*1.7},T,.28,.28,.28),e.push({...g,r:.18,h:1.85})}const R=A-Math.PI/de.length;for(const x of[-1,1]){const g=te(1.02,R,x*2.9,0);l(g)&&(c(s,g,T),e.push({...g,r:.28,h:2.7}))}const P=Yt(1.02,A);if(l(te(1.02,A,2.5,2.5))){for(const x of[-1,1])for(const g of[-1,1]){const y=te(1.02,A,x*2.55,g*2.55);c(s,y,2893376,.7,1,.7),e.push({...y,r:.22,h:2.5})}c(o,P,T,1,1,1)}}const u=Math.sin(1.02)*Rt;for(let M=-Math.PI;M<Math.PI-.01;M+=22/u){const A=te(1.02,M,3.6,0);if(!l(A))continue;const T=de[Da(A.x,A.z)]?.plant??16731526;c(i,A,2893376);const R=Math.hypot(A.x,A.y,A.z)||1;c(r,{x:A.x+A.x/R*1.7,y:A.y+A.y/R*1.7,z:A.z+A.z/R*1.7},T,.22,.22,.22),e.push({...A,r:.16,h:1.7})}const f=Math.sin(Zt)*Rt,h=[16731526,2279662,16761914,8146431,2806944];let d=0;for(const M of[-1,1])for(let A=.52;A<=Math.PI/3-.04;A+=12/f){const T=te(Zt,At+M*A,3.3,0);if(!l(T))continue;c(i,T,2893376);const R=Math.hypot(T.x,T.y,T.z)||1,P={x:T.x/R,y:T.y/R,z:T.z/R},x=gi(Zt,At+M*A),g=_e(T.x,T.y,T.z,x.x,x.y,x.z);a.push({x:T.x+P.x*1.35,y:T.y+P.y*1.35,z:T.z+P.z*1.35,qx:g.x,qy:g.y,qz:g.z,qw:g.w,sx:1,sy:1,sz:1,color:h[d%h.length]??16731526}),d+=1,e.push({...T,r:.16,h:1.7})}const _=(M,A,T=!1)=>{if(A.length===0)return;const R=new xi(M,T?new ie({color:16777215}):Tr(t),A.length);R.frustumCulled=!1;for(let P=0;P<A.length;P+=1){const x=A[P];x&&vi(R,P,x.x,x.y,x.z,x.sx,x.sy,x.sz,x.qx,x.qy,x.qz,x.qw,x.color)}Mi(R),n.add(R)},v=new re(.1,.14,1.7,6);v.translate(0,.85,0);const m=new Ye(1,7,6),p=new re(.2,.26,2.6,6);p.translate(0,1.3,0);const S=new re(2.1,2.1,.12,8);S.translate(0,2.45,0);const b=new $t(.08,.7,.55);b.translate(0,.15,.34),_(v,i),_(m,r,!0),_(p,s),_(S,o,!0),_(b,a,!0)}function xx(n,t){const e=X_();n.add(e);const i=vx(t);n.add(i);const r=[];return yx(n,t,r),L0(n,t,r),_x(n,t,r),Ex(n,t,r),hx(n,t,r),Nx(n,t,r),{blockers:r,sky:e}}function vx(n){const t=new Ye(Rt,192,112),e=t.toNonIndexed();t.dispose();const i=e.getAttribute("position"),r=new Float32Array(i.count*3),s=new Gt;for(let a=0;a<i.count;a+=1){const c=i.getX(a),l=i.getY(a),u=i.getZ(a),f=Si(c,l,u);i.setXYZ(a,f.x,f.y,f.z),s.setHex(Mx(c,l,u)),r[a*3]=s.r,r[a*3+1]=s.g,r[a*3+2]=s.b}i.needsUpdate=!0,e.computeVertexNormals(),e.setAttribute("color",new Ae(r,3));const o=new ct(e,new Ms({color:16777215,vertexColors:!0,gradientMap:n}));return o.frustumCulled=!1,o}function Mx(n,t,e){const i=Math.hypot(n,t,e)||1,r=Math.acos(Math.min(1,Math.max(-1,t/i))),s=Math.atan2(n,e),o=Jl(n,t,e),a=du(n,t,e),c=Math.max(o,a),l=Sx(r,s,a);if(c>.82)return l;const u=Da(n,e),f=de[u]??de[0];let h=_l(f,r,s);if(Math.hypot(n/i,e/i)*Rt>22){const _=Jg(n,t,e);if(_<9){const v=(s+Math.PI)/(Math.PI*2)*de.length,m=v-Math.floor(v),p=de[(m<.5?u+de.length-1:u+1)%de.length]??f,S=_<1.25?1:1-(_-1.25)/7.75;h=hi(h,_l(p,r,s),S*.72),_<1.25&&(h=hi(h,15722239,(1-_/1.25)**2))}}return c<.45&&r<.4&&(h=hi(h,9351423,(1-r/.4)*.62)),c<.45&&r>2.55&&(h=hi(h,6966984,Math.min(1,(r-2.55)/.5)*.45)),c>.04&&(h=hi(h,l,c)),h}function _l(n,t,e){const i=Math.sin(e*2.2+t*1.7)*.5+.5;return Math.sin(e*4.6-t*2.4+1.3)*.5+.5>.78?hi(n.ground,n.deep,.42):i>.58?hi(n.ground,n.patch,.62):n.ground}function Sx(n,t,e){const i=n*Rt;let r=Math.PI;for(let h=0;h<de.length;h+=1){const d=ys(t,ye(h));d<r&&(r=d)}const s=r*Math.sin(Math.max(.15,n))*Rt,o=1.28,a=i/o,c=s/o,l=a-Math.floor(a),u=c-Math.floor(c);if(l<.07||l>.93||u<.07||u>.93)return 12167380;const f=Math.floor(a)+Math.floor(c)&1;return s<.55?16770290:e>.72&&s>.7?f?15757480:14717124:f?13947118:12039124}function hi(n,t,e){const i=Math.min(1,Math.max(0,e)),r=n>>16&255,s=n>>8&255,o=n&255,a=t>>16&255,c=t>>8&255,l=t&255,u=Math.round(r+(a-r)*i),f=Math.round(s+(c-s)*i),h=Math.round(o+(l-o)*i);return u<<16|f<<8|h}function yx(n,t,e){const i=be(t,16052479),r=Rt,s=new ct(new re(2.4,3.1,.7,8),i);s.position.y=r+.28;const o=new ct(new re(.72,1.05,8.4,8),i);o.position.y=r+4.6;const a=new ct(new re(1.25,1.25,1.15,8),new ie({color:15769658}));a.position.y=r+9.3;const c=new ct(new Ue(1.7,1.15,8),be(t,16731498));c.position.y=r+10.4;const l=new ct(new qe(3.3,.14,6,18),new ie({color:15769658}));l.rotation.x=Math.PI/2,l.position.y=r+.12,n.add(s,o,a,c,l),e.push({x:0,y:Rt,z:0,r:3.1,h:11})}function Ex(n,t,e){const i=[],r=[],s=[],o=[],a=[],c=[],l=[],u=[],f=[];for(let h=0;h<de.length;h++){const d=de[h];if(!d)continue;const _=Tx(h);for(const v of _){const m=xu(v.colat,v.az);if(Ql(m.x,m.y,m.z)||bx(m.x,m.y,m.z))continue;const p=Si(m.x,m.y,m.z),S=_e(m.x,m.y,m.z,Math.cos(v.az),0,-Math.sin(v.az)),b={...p,qx:S.x,qy:S.y,qz:S.z,qw:S.w,s:v.scale,color:v.roll>.72?d.deep:d.plant};h===0?v.grove?r.push(b):i.push(b):h===1?(s.push(b),o.push(b)):h===2?a.push(b):h===3?c.push(b):h===4?l.push(b):(u.push(b),f.push({...b,color:16175978}))}}Pn(n,xo(1.55,.72,6,.36),t,i,!1,!0),Pn(n,wx(),t,r,!1,!0),Pn(n,xl(.09,.12,2.5,5),t,s,!1,!0),Pn(n,Rx(),t,o,!1,!0),Pn(n,xo(.72,3.3,5,1.65),t,a,!1,!0),Pn(n,xo(.38,3.6,4,1.8),t,c,!0,!0),Pn(n,Cx(),t,l,!1,!0),Pn(n,xl(.08,.11,3.3,5),t,u,!1,!0),Pn(n,Px(),t,f,!0,!0),Ix(n,t,e)}function Tx(n){const t=ye(n),e=[],i=[{n:28,c0:.38,c1:.95,spread:.78},{n:34,c0:1,c1:1.82,spread:.9},{n:24,c0:1.88,c1:2.62,spread:.78}];let r=0;for(const s of i)for(let o=0;o<s.n;o+=1,r+=1)e.push({az:t+(Te(n,r,11)-.5)*s.spread,colat:s.c0+Te(n,r,19)*(s.c1-s.c0),scale:.82+Te(n,r,4)*.7,roll:Te(n,r,8),grove:!1});for(let s=0;s<10;s+=1){const o=t+(Te(n,r,11)-.5)*.2,a=1.22+Te(n,r,19)*.7;r+=1;for(let c=0;c<4;c+=1,r+=1)e.push({az:o+(Te(n,r,3)-.5)*.028,colat:a+(Te(n,r,5)-.5)*.026,scale:(c===0?1.55:1.05)+Te(n,r,4)*.45,roll:Te(n,r,8),grove:!0})}return e}function xu(n,t){const e=Math.sin(n);return{x:e*Math.sin(t)*Rt,y:Math.cos(n)*Rt,z:e*Math.cos(t)*Rt}}function bx(n,t,e){if(Math.abs(t)>Rt*Math.cos(.11)||Es(n,t,e,6))return!0;for(const a of Ts){const c=n-a.x,l=t-a.y,u=e-a.z;if(c*c+l*l+u*u<64)return!0}const r=n-ge.x,s=t-ge.y,o=e-ge.z;return r*r+s*s+o*o<36}function Pn(n,t,e,i,r,s=!1){if(i.length===0)return;const o=r?new ie({color:16777215}):Tr(e);s&&Zl(o);const a=new xi(t,o,i.length);a.frustumCulled=!1;for(let c=0;c<i.length;c++){const l=i[c];l&&vi(a,c,l.x,l.y,l.z,l.s,l.s,l.s,l.qx,l.qy,l.qz,l.qw,l.color)}Mi(a),n.add(a)}function wx(){const n=new re(.09,.14,1.7,5);n.translate(0,.85,0);const t=new re(1.05,.72,.28,6);t.translate(0,1.85,0);const e=new re(.7,.5,.22,6);e.translate(.08,2.32,.04);const i=new re(.36,.26,.16,5);return i.translate(-.05,2.68,-.02),Ax([n,t,e,i])}function Ax(n){const t=n.map(a=>a.index?a.toNonIndexed():a);let e=0;for(const a of t)e+=a.getAttribute("position").count;const i=new Float32Array(e*3),r=new Float32Array(e*3);let s=0;for(const a of t){const c=a.getAttribute("position"),l=a.getAttribute("normal");for(let u=0;u<c.count;u+=1){const f=s+u;i[f*3]=c.getX(u),i[f*3+1]=c.getY(u),i[f*3+2]=c.getZ(u),r[f*3]=l.getX(u),r[f*3+1]=l.getY(u),r[f*3+2]=l.getZ(u)}s+=c.count}const o=new Oe;return o.setAttribute("position",new Ae(i,3)),o.setAttribute("normal",new Ae(r,3)),o}function xo(n,t,e,i){const r=new Ue(n,t,e);return r.translate(0,i,0),r}function xl(n,t,e,i){const r=new re(n,t,e,i);return r.translate(0,e/2,0),r}function Rx(){const n=new Mn(1.15,0);return n.scale(1.25,.22,1.25),n.translate(0,2.7,0),n}function Cx(){const n=new qe(1.25,.16,5,8,Math.PI);return n.translate(0,1.25,0),n}function Px(){const n=new Ye(.42,6,5);return n.translate(0,3.45,0),n}const Lx=[1.7,.5,1.05,.7,2.05,.42],Dx=[3.2,4.6,4.2,5.2,2.6,5.2];function Ix(n,t,e){for(let i=0;i<de.length;i++){const r=de[i];if(!r)continue;const s=ye(i)+.07,a=xu(1.62,s),c=Si(a.x,a.y,a.z),l=_e(a.x,a.y,a.z,Math.cos(s),0,-Math.sin(s)),u=Ux(i,t,r.plant,r.deep);u.position.set(c.x,c.y,c.z),u.quaternion.copy(l),n.add(u),e.push({x:a.x,y:a.y,z:a.z,r:Lx[i]??.8,h:Dx[i]??4})}}function Ux(n,t,e,i){const r=new vn,s=be(t,e),o=be(t,i);if(n===0)for(let a=0;a<3;a++){const c=new ct(new re(1.9-a*.42,1.9-a*.42,.38,6),a===1?o:s);c.position.y=.4+a*.7,r.add(c)}else if(n===1){const a=new ct(new re(.12,.16,4.2,5),o);a.position.y=2.1;const c=new ct(new Mn(1.8,0),s);c.scale.set(1.3,.22,1.3),c.position.y=4.5,r.add(a,c)}else if(n===2)for(let a=0;a<3;a++){const c=new ct(new Ue(.7,2.2,5),a===2?o:s);c.position.set(Math.cos(a*2.1)*.45,1.2+a*1.15,Math.sin(a*2.1)*.45),r.add(c)}else if(n===3){const a=new ct(new Ue(.55,5.6,4),new ie({color:e}));a.position.y=2.8;const c=new ct(new Ue(.35,3.1,4),new ie({color:i}));c.position.set(.7,1.5,.2),c.rotation.z=.25,r.add(a,c)}else if(n===4){const a=new ct(new qe(2.3,.22,5,10,Math.PI),s);a.position.y=2.3,r.add(a)}else{const a=new ct(new re(.1,.14,4.8,5),s);a.position.y=2.4;const c=new ct(new Ye(.62,8,6),new ie({color:16175978}));c.position.y=5.1,r.add(a,c)}return r}function Nx(n,t,e){for(const l of s_){e.push({x:l.x,y:l.y,z:l.z,r:.62,h:2.55});const u=_e(l.x,l.y,l.z,0,1,0),f=new ct(new $t(.55,2.3,1.7),be(t,13662789));f.position.set(l.x,l.y,l.z),f.quaternion.copy(u);const h=f.position.clone().normalize();f.position.addScaledVector(h,1.15),n.add(f)}const i=new xi(new Ue(.34,.95,4),new ie({color:15769658}),an.length);i.frustumCulled=!1;for(let l=0;l<an.length;l++){const u=an[l],f=an[l+1]??u;if(!u||!f)continue;const h=t0(f.x-u.x,f.y-u.y,f.z-u.z,u.x,u.y,u.z),d=Math.hypot(u.x,u.y,u.z)||1;vi(i,l,u.x+u.x/d*.35,u.y+u.y/d*.35,u.z+u.z/d*.35,1,1,1,h.x,h.y,h.z,h.w,15769658)}Mi(i),n.add(i);const r=_e(ge.x,ge.y,ge.z,1,0,0),s=new ct(new re(ge.r,ge.r,.08,18),new ie({color:2013384})),o=new O(ge.x,ge.y,ge.z).normalize();s.position.copy(o).multiplyScalar(Rt+.05),s.quaternion.copy(r);const a=new ct(new re(.07,.09,2.1,6),new ie({color:2013384}));a.position.copy(o).multiplyScalar(Rt+1.05),a.quaternion.copy(r);const c=new ct(new $t(.62,.32,.05),new ie({color:16250092}));c.position.copy(o).multiplyScalar(Rt+1.9),c.quaternion.copy(r),n.add(s,a,c)}const vu=document.querySelector("#view"),ur=document.querySelector("#hud");if(!vu||!ur)throw new Error("Markup mancante.");try{Fx(vu,ur)}catch(n){ur.style.pointerEvents="auto",ur.style.padding="24px",ur.textContent=n instanceof Error?n.message:"Impossibile avviare Minimondo."}function Fx(n,t){const e=c_();let i=!1,r=()=>{};const s=jg(),o=q_(n),a=xx(o.scene,s),c=ax(t,e,{onInteract:()=>{i=!0},onStartDemo:P=>r(P)}),l=I_(n,t),u=G_(o.scene,s,l),f=d_(o.scene,s),h=A_(o.scene),d=v_(o.scene,s,e,c,u);r=P=>d.start(P);const _=new vn,v=new ie({color:16761914}),m=new ct(new qe(1.7,.18,8,24),v);m.rotation.x=Math.PI/2;const p=new ct(new Mn(.38,0),v);p.position.y=1.7,_.add(m,p),_.visible=!1,_.frustumCulled=!1,o.scene.add(_);let S=null,b=!1,M=performance.now();const A=window.matchMedia("(prefers-reduced-motion: reduce)").matches,T=P=>{const x=Math.min(.05,(P-M)/1e3);M=P;const g=za();if(g&&g!==S&&(u.lookToward(g.x,g.y,g.z),S=g,c.toast(`Verso ${g.name}`)),g){const F=u.x-g.x,N=u.y-g.y,U=u.z-g.z;if(F*F+N*N+U*U<36)ga(),_.visible=!1,S===g&&c.toast(`${g.name} è qui.`);else{const V=Math.hypot(g.x,g.y,g.z)||1,B=gs(g.x/V,g.y/V,g.z/V)+.2;_.visible=!0,_.position.set(g.x/V*(Rt+B),g.y/V*(Rt+B),g.z/V*(Rt+B)),_.quaternion.copy(_e(g.x,g.y,g.z,1,0,0)),p.rotation.y+=x*1.4}}else _.visible=!1;const y=c.blocksPlay();if(A||(Kl.value=P/1e3),u.update(x,a.blockers,y),d.locksWorld())d.update(x,u),c.setPrompt(null);else{if(!e.courseClear){const N=u.x-ge.x,U=u.y-ge.y,V=u.z-ge.z;N*N+U*U+V*V<=ge.r*ge.r&&(e.courseClear=!0,b||(b=!0,c.toast("Percorso fatto. Il cancello ora paga.")))}const F=!y&&(u.consumeInteract()||i);i=!1,h.update(P/1e3,u,e,c),f.update(P/1e3,u,F,e,c)}const L=u.aim();c.paintMap(u.x,u.y,u.z,L.x,L.y,L.z),u.syncCamera(o.camera,x),a.sky.position.copy(o.camera.position),o.render(),(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(n.dataset.px=u.x.toFixed(2),n.dataset.py=u.y.toFixed(2),n.dataset.pz=u.z.toFixed(2),n.dataset.yaw=l.yaw.toFixed(3),n.dataset.gait=u.gait,n.dataset.feet=u.radius.toFixed(3),n.dataset.hx=L.x.toFixed(3),n.dataset.hy=L.y.toFixed(3),n.dataset.hz=L.z.toFixed(3)),requestAnimationFrame(T)},R=()=>o.resize();o.resize(),window.addEventListener("resize",R),window.visualViewport?.addEventListener("resize",R),requestAnimationFrame(T)}
