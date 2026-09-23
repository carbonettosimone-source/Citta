(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const fa="180",Tu=0,za=1,bu=2,pl=1,Au=2,Ln=3,$n=0,We=1,Dn=2,Yn=0,zi=1,Ba=2,ka=3,Ha=4,wu=5,ci=100,Ru=101,Cu=102,Pu=103,Lu=104,Du=200,Iu=201,Uu=202,Nu=203,_o=204,xo=205,Fu=206,Ou=207,zu=208,Bu=209,ku=210,Hu=211,Vu=212,Gu=213,Wu=214,vo=0,Mo=1,So=2,Vi=3,yo=4,Eo=5,To=6,bo=7,ml=0,Xu=1,qu=2,Nn=0,Yu=1,$u=2,Ku=3,Zu=4,ju=5,Ju=6,Qu=7,gl=300,Gi=301,Wi=302,Ao=303,wo=304,gs=306,Ro=1e3,di=1001,Co=1002,De=1003,th=1004,Tr=1005,gn=1006,Rs=1007,fi=1008,Sn=1009,_l=1010,xl=1011,hr=1012,pa=1013,pi=1014,_n=1015,xr=1016,ma=1017,ga=1018,dr=1020,vl=35902,Ml=35899,Sl=1021,yl=1022,dn=1023,fr=1026,pr=1027,_s=1028,_a=1029,El=1030,xa=1031,va=1033,ts=33776,es=33777,ns=33778,is=33779,Po=35840,Lo=35841,Do=35842,Io=35843,Uo=36196,No=37492,Fo=37496,Oo=37808,zo=37809,Bo=37810,ko=37811,Ho=37812,Vo=37813,Go=37814,Wo=37815,Xo=37816,qo=37817,Yo=37818,$o=37819,Ko=37820,Zo=37821,jo=36492,Jo=36494,Qo=36495,ta=36283,ea=36284,na=36285,ia=36286,eh=3200,nh=3201,Tl=0,ih=1,In="",$e="srgb",Xi="srgb-linear",us="linear",ie="srgb",vi=7680,Va=519,rh=512,sh=513,oh=514,bl=515,ah=516,ch=517,lh=518,uh=519,Ga=35044,Wa="300 es",xn=2e3,hs=2001;class $i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xa=1234567;const lr=Math.PI/180,mr=180/Math.PI;function Ki(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]).toLowerCase()}function qt(n,t,e){return Math.max(t,Math.min(e,n))}function Ma(n,t){return(n%t+t)%t}function hh(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function dh(n,t,e){return n!==t?(e-n)/(t-n):0}function ur(n,t,e){return(1-e)*n+e*t}function fh(n,t,e,i){return ur(n,t,1-Math.exp(-e*i))}function ph(n,t=1){return t-Math.abs(Ma(n,t*2)-t)}function mh(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function gh(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function _h(n,t){return n+Math.floor(Math.random()*(t-n+1))}function xh(n,t){return n+Math.random()*(t-n)}function vh(n){return n*(.5-Math.random())}function Mh(n){n!==void 0&&(Xa=n);let t=Xa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sh(n){return n*lr}function yh(n){return n*mr}function Eh(n){return(n&n-1)===0&&n!==0}function Th(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function bh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ah(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+i)/2),u=o((t+i)/2),d=s((t-i)/2),h=o((t-i)/2),f=s((i-t)/2),_=o((i-t)/2);switch(r){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*_,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*_,a*l);break;case"ZYZ":n.set(c*_,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Fi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function He(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const wh={DEG2RAD:lr,RAD2DEG:mr,generateUUID:Ki,clamp:qt,euclideanModulo:Ma,mapLinear:hh,inverseLerp:dh,lerp:ur,damp:fh,pingpong:ph,smoothstep:mh,smootherstep:gh,randInt:_h,randFloat:xh,randFloatSpread:vh,seededRandom:Mh,degToRad:Sh,radToDeg:yh,isPowerOfTwo:Eh,ceilPowerOfTwo:Th,floorPowerOfTwo:bh,setQuaternionFromProperEuler:Ah,normalize:He,denormalize:Fi};class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zn{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],f=s[o+1],_=s[o+2],x=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=_,t[e+3]=x;return}if(d!==x||c!==h||l!==f||u!==_){let m=1-a;const p=c*h+l*f+u*_+d*x,y=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const L=Math.sqrt(T),E=Math.atan2(L,p*y);m=Math.sin(m*E)/L,a=Math.sin(a*E)/L}const S=a*y;if(c=c*m+h*S,l=l*m+f*S,u=u*m+_*S,d=d*m+x*S,m===1-a){const L=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=L,l*=L,u*=L,d*=L}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],f=s[o+2],_=s[o+3];return t[e]=a*_+u*d+c*f-l*h,t[e+1]=c*_+u*h+l*d-a*f,t[e+2]=l*_+u*f+a*h-c*d,t[e+3]=u*_-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),f=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*f*_,this._y=l*f*d-h*u*_,this._z=l*u*_+h*f*d,this._w=l*u*d-h*f*_;break;case"YXZ":this._x=h*u*d+l*f*_,this._y=l*f*d-h*u*_,this._z=l*u*_-h*f*d,this._w=l*u*d+h*f*_;break;case"ZXY":this._x=h*u*d-l*f*_,this._y=l*f*d+h*u*_,this._z=l*u*_+h*f*d,this._w=l*u*d-h*f*_;break;case"ZYX":this._x=h*u*d-l*f*_,this._y=l*f*d+h*u*_,this._z=l*u*_-h*f*d,this._w=l*u*d+h*f*_;break;case"YZX":this._x=h*u*d+l*f*_,this._y=l*f*d+h*u*_,this._z=l*u*_-h*f*d,this._w=l*u*d-h*f*_;break;case"XZY":this._x=h*u*d-l*f*_,this._y=l*f*d-h*u*_,this._z=l*u*_+h*f*d,this._w=l*u*d+h*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,i=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),d=2*(s*i-o*e);return this.x=e+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Cs.copy(this).projectOnVector(t),this.sub(Cs)}reflect(t){return this.sub(Cs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cs=new z,qa=new zn;class kt{constructor(t,e,i,r,s,o,a,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],_=i[8],x=r[0],m=r[3],p=r[6],y=r[1],T=r[4],S=r[7],L=r[2],E=r[5],A=r[8];return s[0]=o*x+a*y+c*L,s[3]=o*m+a*T+c*E,s[6]=o*p+a*S+c*A,s[1]=l*x+u*y+d*L,s[4]=l*m+u*T+d*E,s[7]=l*p+u*S+d*A,s[2]=h*x+f*y+_*L,s[5]=h*m+f*T+_*E,s[8]=h*p+f*S+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*s,f=l*s-o*c,_=e*d+i*h+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=d*x,t[1]=(r*l-u*i)*x,t[2]=(a*i-r*o)*x,t[3]=h*x,t[4]=(u*e-r*c)*x,t[5]=(r*s-a*e)*x,t[6]=f*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ps.makeScale(t,e)),this}rotate(t){return this.premultiply(Ps.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ps.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ps=new kt;function Al(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ds(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rh(){const n=ds("canvas");return n.style.display="block",n}const Ya={};function gr(n){n in Ya||(Ya[n]=!0,console.warn(n))}function Ch(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const $a=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ka=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ph(){const n={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ie&&(r.r=Fn(r.r),r.g=Fn(r.g),r.b=Fn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ie&&(r.r=Bi(r.r),r.g=Bi(r.g),r.b=Bi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===In?us:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return gr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return gr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xi]:{primaries:t,whitePoint:i,transfer:us,toXYZ:$a,fromXYZ:Ka,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:i,transfer:ie,toXYZ:$a,fromXYZ:Ka,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),n}const Jt=Ph();function Fn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Mi;class Lh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Mi===void 0&&(Mi=ds("canvas")),Mi.width=t.width,Mi.height=t.height;const r=Mi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Mi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ds("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fn(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Fn(e[i]/255)*255):e[i]=Fn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dh=0;class Sa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ls(r[o].image)):s.push(Ls(r[o]))}else s=Ls(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Ls(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Lh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ih=0;const Ds=new z;class Xe extends $i{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,i=di,r=di,s=gn,o=fi,a=dn,c=Sn,l=Xe.DEFAULT_ANISOTROPY,u=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Ki(),this.name="",this.source=new Sa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ds).x}get height(){return this.source.getSize(Ds).y}get depth(){return this.source.getSize(Ds).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ro:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case Co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ro:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case Co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=gl;Xe.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,i=0,r=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],_=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,S=(f+1)/2,L=(p+1)/2,E=(u+h)/4,A=(d+x)/4,C=(_+m)/4;return T>S&&T>L?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=E/i,s=A/i):S>L?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=E/r,s=C/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=A/s,r=C/s),this.set(i,r,s,e),this}let y=Math.sqrt((m-_)*(m-_)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(d-x)/y,this.z=(h-u)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uh extends $i{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new Xe(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Sa(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends Uh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class wl extends Xe{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=De,this.minFilter=De,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nh extends Xe{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=De,this.minFilter=De,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(s,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),br.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),br.copy(i.boundingBox)),br.applyMatrix4(t.matrixWorld),this.union(br)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),Ar.subVectors(this.max,er),Si.subVectors(t.a,er),yi.subVectors(t.b,er),Ei.subVectors(t.c,er),kn.subVectors(yi,Si),Hn.subVectors(Ei,yi),Qn.subVectors(Si,Ei);let e=[0,-kn.z,kn.y,0,-Hn.z,Hn.y,0,-Qn.z,Qn.y,kn.z,0,-kn.x,Hn.z,0,-Hn.x,Qn.z,0,-Qn.x,-kn.y,kn.x,0,-Hn.y,Hn.x,0,-Qn.y,Qn.x,0];return!Is(e,Si,yi,Ei,Ar)||(e=[1,0,0,0,1,0,0,0,1],!Is(e,Si,yi,Ei,Ar))?!1:(wr.crossVectors(kn,Hn),e=[wr.x,wr.y,wr.z],Is(e,Si,yi,Ei,Ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const En=[new z,new z,new z,new z,new z,new z,new z,new z],cn=new z,br=new gi,Si=new z,yi=new z,Ei=new z,kn=new z,Hn=new z,Qn=new z,er=new z,Ar=new z,wr=new z,ti=new z;function Is(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ti.fromArray(n,s);const a=r.x*Math.abs(ti.x)+r.y*Math.abs(ti.y)+r.z*Math.abs(ti.z),c=t.dot(ti),l=e.dot(ti),u=i.dot(ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Fh=new gi,nr=new z,Us=new z;class vr{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Fh.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nr.subVectors(t,this.center);const e=nr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(nr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Us.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nr.copy(t.center).add(Us)),this.expandByPoint(nr.copy(t.center).sub(Us))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Tn=new z,Ns=new z,Rr=new z,Vn=new z,Fs=new z,Cr=new z,Os=new z;class Oh{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ns.copy(t).add(e).multiplyScalar(.5),Rr.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(Ns);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Rr),a=Vn.dot(this.direction),c=-Vn.dot(Rr),l=Vn.lengthSq(),u=Math.abs(1-o*o);let d,h,f,_;if(u>0)if(d=o*c-a,h=o*a-c,_=s*u,d>=0)if(h>=-_)if(h<=_){const x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=_?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ns).addScaledVector(Rr,h),f}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const i=Tn.dot(this.direction),r=Tn.dot(Tn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,r=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,r=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,i,r,s){Fs.subVectors(e,t),Cr.subVectors(i,t),Os.crossVectors(Fs,Cr);let o=this.direction.dot(Os),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,t);const c=a*this.direction.dot(Cr.crossVectors(Vn,Cr));if(c<0)return null;const l=a*this.direction.dot(Fs.cross(Vn));if(l<0||c+l>o)return null;const u=-a*Vn.dot(Os);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,i,r,s,o,a,c,l,u,d,h,f,_,x,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,d,h,f,_,x,m)}set(t,e,i,r,s,o,a,c,l,u,d,h,f,_,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ti.setFromMatrixColumn(t,0).length(),s=1/Ti.setFromMatrixColumn(t,1).length(),o=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=o*u,f=o*d,_=a*u,x=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+_*l,e[5]=h-x*l,e[9]=-a*c,e[2]=x-h*l,e[6]=_+f*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,_=l*u,x=l*d;e[0]=h+x*a,e[4]=_*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-_,e[6]=x+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,_=l*u,x=l*d;e[0]=h-x*a,e[4]=-o*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,f=o*d,_=a*u,x=a*d;e[0]=c*u,e[4]=_*l-f,e[8]=h*l+x,e[1]=c*d,e[5]=x*l+h,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,f=o*l,_=a*c,x=a*l;e[0]=c*u,e[4]=x-h*d,e[8]=_*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+_,e[10]=h-x*d}else if(t.order==="XZY"){const h=o*c,f=o*l,_=a*c,x=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+x,e[5]=o*u,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*u,e[10]=x*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zh,t,Bh)}lookAt(t,e,i){const r=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),Gn.crossVectors(i,Qe),Gn.lengthSq()===0&&(Math.abs(i.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),Gn.crossVectors(i,Qe)),Gn.normalize(),Pr.crossVectors(Qe,Gn),r[0]=Gn.x,r[4]=Pr.x,r[8]=Qe.x,r[1]=Gn.y,r[5]=Pr.y,r[9]=Qe.y,r[2]=Gn.z,r[6]=Pr.z,r[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],_=i[2],x=i[6],m=i[10],p=i[14],y=i[3],T=i[7],S=i[11],L=i[15],E=r[0],A=r[4],C=r[8],v=r[12],g=r[1],w=r[5],P=r[9],R=r[13],F=r[2],U=r[6],N=r[10],G=r[14],H=r[3],J=r[7],it=r[11],ft=r[15];return s[0]=o*E+a*g+c*F+l*H,s[4]=o*A+a*w+c*U+l*J,s[8]=o*C+a*P+c*N+l*it,s[12]=o*v+a*R+c*G+l*ft,s[1]=u*E+d*g+h*F+f*H,s[5]=u*A+d*w+h*U+f*J,s[9]=u*C+d*P+h*N+f*it,s[13]=u*v+d*R+h*G+f*ft,s[2]=_*E+x*g+m*F+p*H,s[6]=_*A+x*w+m*U+p*J,s[10]=_*C+x*P+m*N+p*it,s[14]=_*v+x*R+m*G+p*ft,s[3]=y*E+T*g+S*F+L*H,s[7]=y*A+T*w+S*U+L*J,s[11]=y*C+T*P+S*N+L*it,s[15]=y*v+T*R+S*G+L*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],_=t[3],x=t[7],m=t[11],p=t[15];return _*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*f-i*c*f)+x*(+e*c*f-e*l*h+s*o*h-r*o*f+r*l*u-s*c*u)+m*(+e*l*d-e*a*f-s*o*d+i*o*f+s*a*u-i*l*u)+p*(-r*a*u-e*c*d+e*a*h+r*o*d-i*o*h+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],_=t[12],x=t[13],m=t[14],p=t[15],y=d*m*l-x*h*l+x*c*f-a*m*f-d*c*p+a*h*p,T=_*h*l-u*m*l-_*c*f+o*m*f+u*c*p-o*h*p,S=u*x*l-_*d*l+_*a*f-o*x*f-u*a*p+o*d*p,L=_*d*c-u*x*c-_*a*h+o*x*h+u*a*m-o*d*m,E=e*y+i*T+r*S+s*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=y*A,t[1]=(x*h*s-d*m*s-x*r*f+i*m*f+d*r*p-i*h*p)*A,t[2]=(a*m*s-x*c*s+x*r*l-i*m*l-a*r*p+i*c*p)*A,t[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*f-i*c*f)*A,t[4]=T*A,t[5]=(u*m*s-_*h*s+_*r*f-e*m*f-u*r*p+e*h*p)*A,t[6]=(_*c*s-o*m*s-_*r*l+e*m*l+o*r*p-e*c*p)*A,t[7]=(o*h*s-u*c*s+u*r*l-e*h*l-o*r*f+e*c*f)*A,t[8]=S*A,t[9]=(_*d*s-u*x*s-_*i*f+e*x*f+u*i*p-e*d*p)*A,t[10]=(o*x*s-_*a*s+_*i*l-e*x*l-o*i*p+e*a*p)*A,t[11]=(u*a*s-o*d*s-u*i*l+e*d*l+o*i*f-e*a*f)*A,t[12]=L*A,t[13]=(u*x*r-_*d*r+_*i*h-e*x*h-u*i*m+e*d*m)*A,t[14]=(_*a*r-o*x*r-_*i*c+e*x*c+o*i*m-e*a*m)*A,t[15]=(o*d*r-u*a*r+u*i*c-e*d*c-o*i*h+e*a*h)*A,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,d=a+a,h=s*l,f=s*u,_=s*d,x=o*u,m=o*d,p=a*d,y=c*l,T=c*u,S=c*d,L=i.x,E=i.y,A=i.z;return r[0]=(1-(x+p))*L,r[1]=(f+S)*L,r[2]=(_-T)*L,r[3]=0,r[4]=(f-S)*E,r[5]=(1-(h+p))*E,r[6]=(m+y)*E,r[7]=0,r[8]=(_+T)*A,r[9]=(m-y)*A,r[10]=(1-(h+x))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ti.set(r[0],r[1],r[2]).length();const o=Ti.set(r[4],r[5],r[6]).length(),a=Ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],ln.copy(this);const l=1/s,u=1/o,d=1/a;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=d,ln.elements[9]*=d,ln.elements[10]*=d,e.setFromRotationMatrix(ln),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=xn,c=!1){const l=this.elements,u=2*s/(e-t),d=2*s/(i-r),h=(e+t)/(e-t),f=(i+r)/(i-r);let _,x;if(c)_=s/(o-s),x=o*s/(o-s);else if(a===xn)_=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===hs)_=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=xn,c=!1){const l=this.elements,u=2/(e-t),d=2/(i-r),h=-(e+t)/(e-t),f=-(i+r)/(i-r);let _,x;if(c)_=1/(o-s),x=o/(o-s);else if(a===xn)_=-2/(o-s),x=-(o+s)/(o-s);else if(a===hs)_=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ti=new z,ln=new ce,zh=new z(0,0,0),Bh=new z(1,1,1),Gn=new z,Pr=new z,Qe=new z,Za=new ce,ja=new zn;class On{constructor(t=0,e=0,i=0,r=On.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Za.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Za,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ja.setFromEuler(this),this.setFromQuaternion(ja,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Rl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kh=0;const Ja=new z,bi=new zn,bn=new ce,Lr=new z,ir=new z,Hh=new z,Vh=new zn,Qa=new z(1,0,0),tc=new z(0,1,0),ec=new z(0,0,1),nc={type:"added"},Gh={type:"removed"},Ai={type:"childadded",child:null},zs={type:"childremoved",child:null};class Ie extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new z,e=new On,i=new zn,r=new z(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ce},normalMatrix:{value:new kt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.multiply(bi),this}rotateOnWorldAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.premultiply(bi),this}rotateX(t){return this.rotateOnAxis(Qa,t)}rotateY(t){return this.rotateOnAxis(tc,t)}rotateZ(t){return this.rotateOnAxis(ec,t)}translateOnAxis(t,e){return Ja.copy(t).applyQuaternion(this.quaternion),this.position.add(Ja.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qa,t)}translateY(t){return this.translateOnAxis(tc,t)}translateZ(t){return this.translateOnAxis(ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Lr.copy(t):Lr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ir,Lr,this.up):bn.lookAt(Lr,ir,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),bi.setFromRotationMatrix(bn),this.quaternion.premultiply(bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gh),zs.child=t,this.dispatchEvent(zs),zs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,Hh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Vh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ie.DEFAULT_UP=new z(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new z,An=new z,Bs=new z,wn=new z,wi=new z,Ri=new z,ic=new z,ks=new z,Hs=new z,Vs=new z,Gs=new xe,Ws=new xe,Xs=new xe;class hn{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),un.subVectors(t,e),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){un.subVectors(r,e),An.subVectors(i,e),Bs.subVectors(t,e);const o=un.dot(un),a=un.dot(An),c=un.dot(Bs),l=An.dot(An),u=An.dot(Bs),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,_=(o*u-a*c)*h;return s.set(1-f-_,_,f)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,wn.x),c.addScaledVector(o,wn.y),c.addScaledVector(a,wn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return Gs.setScalar(0),Ws.setScalar(0),Xs.setScalar(0),Gs.fromBufferAttribute(t,e),Ws.fromBufferAttribute(t,i),Xs.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Gs,s.x),o.addScaledVector(Ws,s.y),o.addScaledVector(Xs,s.z),o}static isFrontFacing(t,e,i,r){return un.subVectors(i,e),An.subVectors(t,e),un.cross(An).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),An.subVectors(this.a,this.b),un.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return hn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;wi.subVectors(r,i),Ri.subVectors(s,i),ks.subVectors(t,i);const c=wi.dot(ks),l=Ri.dot(ks);if(c<=0&&l<=0)return e.copy(i);Hs.subVectors(t,r);const u=wi.dot(Hs),d=Ri.dot(Hs);if(u>=0&&d<=u)return e.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(wi,o);Vs.subVectors(t,s);const f=wi.dot(Vs),_=Ri.dot(Vs);if(_>=0&&f<=_)return e.copy(s);const x=f*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(Ri,a);const m=u*_-f*d;if(m<=0&&d-u>=0&&f-_>=0)return ic.subVectors(s,r),a=(d-u)/(d-u+(f-_)),e.copy(r).addScaledVector(ic,a);const p=1/(m+x+h);return o=x*p,a=h*p,e.copy(i).addScaledVector(wi,o).addScaledVector(Ri,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function qs(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Gt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Jt.workingColorSpace){if(t=Ma(t,1),e=qt(e,0,1),i=qt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=qs(o,s,t+1/3),this.g=qs(o,s,t),this.b=qs(o,s,t-1/3)}return Jt.colorSpaceToWorking(this,r),this}setStyle(t,e=$e){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const i=Cl[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return Jt.workingToColorSpace(Oe.copy(this),t),Math.round(qt(Oe.r*255,0,255))*65536+Math.round(qt(Oe.g*255,0,255))*256+Math.round(qt(Oe.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(Oe.copy(this),e);const i=Oe.r,r=Oe.g,s=Oe.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=$e){Jt.workingToColorSpace(Oe.copy(this),t);const e=Oe.r,i=Oe.g,r=Oe.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(Dr);const i=ur(Wn.h,Dr.h,e),r=ur(Wn.s,Dr.s,e),s=ur(Wn.l,Dr.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new Gt;Gt.NAMES=Cl;let Wh=0;class Mr extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=zi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_o,this.blendDst=xo,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Va,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(i.blending=this.blending),this.side!==$n&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_o&&(i.blendSrc=this.blendSrc),this.blendDst!==xo&&(i.blendDst=this.blendDst),this.blendEquation!==ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Va&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ee extends Mr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new z,Ir=new Wt;let Xh=0;class we{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ga,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ir.fromBufferAttribute(this,e),Ir.applyMatrix3(t),this.setXY(e,Ir.x,Ir.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Fi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array),r=He(r,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ga&&(t.usage=this.usage),t}}class Pl extends we{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ll extends we{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class he extends we{constructor(t,e,i){super(new Float32Array(t),e,i)}}let qh=0;const rn=new ce,Ys=new Ie,Ci=new z,tn=new gi,rr=new gi,Le=new z;class ze extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Al(t)?Ll:Pl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new kt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,i){return rn.makeTranslation(t,e,i),this.applyMatrix4(rn),this}scale(t,e,i){return rn.makeScale(t,e,i),this.applyMatrix4(rn),this}lookAt(t){return Ys.lookAt(t),Ys.updateMatrix(),this.applyMatrix4(Ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new he(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(tn.min,rr.min),tn.expandByPoint(Le),Le.addVectors(tn.max,rr.max),tn.expandByPoint(Le)):(tn.expandByPoint(rr.min),tn.expandByPoint(rr.max))}tn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Le.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Le));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Le.fromBufferAttribute(a,l),c&&(Ci.fromBufferAttribute(t,l),Le.add(Ci)),r=Math.max(r,i.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<i.count;C++)a[C]=new z,c[C]=new z;const l=new z,u=new z,d=new z,h=new Wt,f=new Wt,_=new Wt,x=new z,m=new z;function p(C,v,g){l.fromBufferAttribute(i,C),u.fromBufferAttribute(i,v),d.fromBufferAttribute(i,g),h.fromBufferAttribute(s,C),f.fromBufferAttribute(s,v),_.fromBufferAttribute(s,g),u.sub(l),d.sub(l),f.sub(h),_.sub(h);const w=1/(f.x*_.y-_.x*f.y);isFinite(w)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(w),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(w),a[C].add(x),a[v].add(x),a[g].add(x),c[C].add(m),c[v].add(m),c[g].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,v=y.length;C<v;++C){const g=y[C],w=g.start,P=g.count;for(let R=w,F=w+P;R<F;R+=3)p(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const T=new z,S=new z,L=new z,E=new z;function A(C){L.fromBufferAttribute(r,C),E.copy(L);const v=a[C];T.copy(v),T.sub(L.multiplyScalar(L.dot(v))).normalize(),S.crossVectors(E,v);const w=S.dot(c[C])<0?-1:1;o.setXYZW(C,T.x,T.y,T.z,w)}for(let C=0,v=y.length;C<v;++C){const g=y[C],w=g.start,P=g.count;for(let R=w,F=w+P;R<F;R+=3)A(t.getX(R+0)),A(t.getX(R+1)),A(t.getX(R+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,c=new z,l=new z,u=new z,d=new z;if(t)for(let h=0,f=t.count;h<f;h+=3){const _=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,_=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let p=0;p<u;p++)h[_++]=l[f++]}return new we(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rc=new ce,ei=new Oh,Ur=new vr,sc=new z,Nr=new z,Fr=new z,Or=new z,$s=new z,zr=new z,oc=new z,Br=new z;class lt extends Ie{constructor(t=new ze,e=new ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){zr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&($s.fromBufferAttribute(d,t),o?zr.addScaledVector($s,u):zr.addScaledVector($s.sub(e),u))}e.add(zr)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(s),ei.copy(t.ray).recast(t.near),!(Ur.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Ur,sc)===null||ei.origin.distanceToSquared(sc)>(t.far-t.near)**2))&&(rc.copy(s).invert(),ei.copy(t.ray).applyMatrix4(rc),!(i.boundingBox!==null&&ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],p=o[m.materialIndex],y=Math.max(m.start,f.start),T=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,L=T;S<L;S+=3){const E=a.getX(S),A=a.getX(S+1),C=a.getX(S+2);r=kr(this,p,t,i,l,u,d,E,A,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=_,p=x;m<p;m+=3){const y=a.getX(m),T=a.getX(m+1),S=a.getX(m+2);r=kr(this,o,t,i,l,u,d,y,T,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],p=o[m.materialIndex],y=Math.max(m.start,f.start),T=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,L=T;S<L;S+=3){const E=S,A=S+1,C=S+2;r=kr(this,p,t,i,l,u,d,E,A,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=_,p=x;m<p;m+=3){const y=m,T=m+1,S=m+2;r=kr(this,o,t,i,l,u,d,y,T,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Yh(n,t,e,i,r,s,o,a){let c;if(t.side===We?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===$n,a),c===null)return null;Br.copy(a),Br.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Br);return l<e.near||l>e.far?null:{distance:l,point:Br.clone(),object:n}}function kr(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,Nr),n.getVertexPosition(c,Fr),n.getVertexPosition(l,Or);const u=Yh(n,t,e,i,Nr,Fr,Or,oc);if(u){const d=new z;hn.getBarycoord(oc,Nr,Fr,Or,d),r&&(u.uv=hn.getInterpolatedAttribute(r,a,c,l,d,new Wt)),s&&(u.uv1=hn.getInterpolatedAttribute(s,a,c,l,d,new Wt)),o&&(u.normal=hn.getInterpolatedAttribute(o,a,c,l,d,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new z,materialIndex:0};hn.getNormal(Nr,Fr,Or,h.normal),u.face=h,u.barycoord=d}return u}class Kt extends ze{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;_("z","y","x",-1,-1,i,e,t,o,s,0),_("z","y","x",1,-1,i,e,-t,o,s,1),_("x","z","y",1,1,t,i,e,r,o,2),_("x","z","y",1,-1,t,i,-e,r,o,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(d,2));function _(x,m,p,y,T,S,L,E,A,C,v){const g=S/A,w=L/C,P=S/2,R=L/2,F=E/2,U=A+1,N=C+1;let G=0,H=0;const J=new z;for(let it=0;it<N;it++){const ft=it*w-R;for(let wt=0;wt<U;wt++){const Zt=wt*g-P;J[x]=Zt*y,J[m]=ft*T,J[p]=F,l.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[p]=E>0?1:-1,u.push(J.x,J.y,J.z),d.push(wt/A),d.push(1-it/C),G+=1}}for(let it=0;it<C;it++)for(let ft=0;ft<A;ft++){const wt=h+ft+U*it,Zt=h+ft+U*(it+1),rt=h+(ft+1)+U*(it+1),Ct=h+(ft+1)+U*it;c.push(wt,Zt,Ct),c.push(Zt,rt,Ct),H+=6}a.addGroup(f,H,v),f+=H,h+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ve(n){const t={};for(let e=0;e<n.length;e++){const i=qi(n[e]);for(const r in i)t[r]=i[r]}return t}function $h(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Dl(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Kh={clone:qi,merge:Ve};var Zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends Mr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zh,this.fragmentShader=jh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=$h(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Il extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new z,ac=new Wt,cc=new Wt;class sn extends Il{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,ac,cc),e.subVectors(cc,ac)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Pi=-90,Li=1;class Jh extends Ie{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(Pi,Li,t,e);r.layers=this.layers,this.add(r);const s=new sn(Pi,Li,t,e);s.layers=this.layers,this.add(s);const o=new sn(Pi,Li,t,e);o.layers=this.layers,this.add(o);const a=new sn(Pi,Li,t,e);a.layers=this.layers,this.add(a);const c=new sn(Pi,Li,t,e);c.layers=this.layers,this.add(c);const l=new sn(Pi,Li,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===xn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===hs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ul extends Xe{constructor(t=[],e=Gi,i,r,s,o,a,c,l,u){super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qh extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Ul(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Kt(5,5,5),s=new Zn({name:"CubemapFromEquirect",uniforms:qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:Yn});s.uniforms.tEquirect.value=e;const o=new lt(r,s),a=e.minFilter;return e.minFilter===fi&&(e.minFilter=gn),new Jh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class vn extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const td={type:"move"};class Ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,_=.005;l.inputState.pinching&&h>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(td)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new vn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class ya{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=i}clone(){return new ya(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class lc extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Nl extends Xe{constructor(t=null,e=1,i=1,r,s,o,a,c,l=De,u=De,d,h){super(null,o,a,c,l,u,r,s,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uc extends we{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Di=new ce,hc=new ce,Hr=[],dc=new gi,ed=new ce,sr=new lt,or=new vr;class Zi extends lt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new uc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,ed)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Di),dc.copy(t.boundingBox).applyMatrix4(Di),this.boundingBox.union(dc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Di),or.copy(t.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),or.copy(this.boundingSphere),or.applyMatrix4(i),t.ray.intersectsSphere(or)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Di),hc.multiplyMatrices(i,Di),sr.matrixWorld=hc,sr.raycast(t,Hr);for(let o=0,a=Hr.length;o<a;o++){const c=Hr[o];c.instanceId=s,c.object=this,e.push(c)}Hr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new uc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Nl(new Float32Array(r*this.count),r,this.count,_s,_n));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zs=new z,nd=new z,id=new kt;class oi{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Zs.subVectors(i,e).cross(nd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Zs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||id.getNormalMatrix(t),r=this.coplanarPoint(Zs).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new vr,rd=new Wt(.5,.5),Vr=new z;class Ea{constructor(t=new oi,e=new oi,i=new oi,r=new oi,s=new oi,o=new oi){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=xn,i=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],f=s[7],_=s[8],x=s[9],m=s[10],p=s[11],y=s[12],T=s[13],S=s[14],L=s[15];if(r[0].setComponents(l-o,f-u,p-_,L-y).normalize(),r[1].setComponents(l+o,f+u,p+_,L+y).normalize(),r[2].setComponents(l+a,f+d,p+x,L+T).normalize(),r[3].setComponents(l-a,f-d,p-x,L-T).normalize(),i)r[4].setComponents(c,h,m,S).normalize(),r[5].setComponents(l-c,f-h,p-m,L-S).normalize();else if(r[4].setComponents(l-c,f-h,p-m,L-S).normalize(),e===xn)r[5].setComponents(l+c,f+h,p+m,L+S).normalize();else if(e===hs)r[5].setComponents(c,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){ni.center.set(0,0,0);const e=rd.distanceTo(t.center);return ni.radius=.7071067811865476+e,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Vr.x=r.normal.x>0?t.max.x:t.min.x,Vr.y=r.normal.y>0?t.max.y:t.min.y,Vr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fl extends Xe{constructor(t,e,i=pi,r,s,o,a=De,c=De,l,u=fr,d=1){if(u!==fr&&u!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Sa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ol extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ta extends ze{constructor(t=1,e=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:r,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],u=e/2,d=Math.PI/2*t,h=e,f=2*d+h,_=i*2+s,x=r+1,m=new z,p=new z;for(let y=0;y<=_;y++){let T=0,S=0,L=0,E=0;if(y<=i){const v=y/i,g=v*Math.PI/2;S=-u-t*Math.cos(g),L=t*Math.sin(g),E=-t*Math.cos(g),T=v*d}else if(y<=i+s){const v=(y-i)/s;S=-u+v*e,L=t,E=0,T=d+v*h}else{const v=(y-i-s)/i,g=v*Math.PI/2;S=u+t*Math.sin(g),L=t*Math.cos(g),E=t*Math.sin(g),T=d+h+v*d}const A=Math.max(0,Math.min(1,T/f));let C=0;y===0?C=.5/r:y===_&&(C=-.5/r);for(let v=0;v<=r;v++){const g=v/r,w=g*Math.PI*2,P=Math.sin(w),R=Math.cos(w);p.x=-L*R,p.y=S,p.z=L*P,a.push(p.x,p.y,p.z),m.set(-L*R,E,L*P),m.normalize(),c.push(m.x,m.y,m.z),l.push(g+C,A)}if(y>0){const v=(y-1)*x;for(let g=0;g<r;g++){const w=v+g,P=v+g+1,R=y*x+g,F=y*x+g+1;o.push(w,P,R),o.push(P,F,R)}}}this.setIndex(o),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class ba extends ze{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new z,u=new Wt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=i+d/e*r;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(a,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class oe extends ze{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],f=[];let _=0;const x=[],m=i/2;let p=0;y(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new he(d,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(f,2));function y(){const S=new z,L=new z;let E=0;const A=(e-t)/i;for(let C=0;C<=s;C++){const v=[],g=C/s,w=g*(e-t)+t;for(let P=0;P<=r;P++){const R=P/r,F=R*c+a,U=Math.sin(F),N=Math.cos(F);L.x=w*U,L.y=-g*i+m,L.z=w*N,d.push(L.x,L.y,L.z),S.set(U,A,N).normalize(),h.push(S.x,S.y,S.z),f.push(R,1-g),v.push(_++)}x.push(v)}for(let C=0;C<r;C++)for(let v=0;v<s;v++){const g=x[v][C],w=x[v+1][C],P=x[v+1][C+1],R=x[v][C+1];(t>0||v!==0)&&(u.push(g,w,R),E+=3),(e>0||v!==s-1)&&(u.push(w,P,R),E+=3)}l.addGroup(p,E,0),p+=E}function T(S){const L=_,E=new Wt,A=new z;let C=0;const v=S===!0?t:e,g=S===!0?1:-1;for(let P=1;P<=r;P++)d.push(0,m*g,0),h.push(0,g,0),f.push(.5,.5),_++;const w=_;for(let P=0;P<=r;P++){const F=P/r*c+a,U=Math.cos(F),N=Math.sin(F);A.x=v*N,A.y=m*g,A.z=v*U,d.push(A.x,A.y,A.z),h.push(0,g,0),E.x=U*.5+.5,E.y=N*.5*g+.5,f.push(E.x,E.y),_++}for(let P=0;P<r;P++){const R=L+P,F=w+P;S===!0?u.push(F,F+1,R):u.push(F+1,F,R),C+=3}l.addGroup(p,C,S===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ue extends oe{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ue(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xs extends ze{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new he(s,3)),this.setAttribute("normal",new he(s.slice(),3)),this.setAttribute("uv",new he(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const T=new z,S=new z,L=new z;for(let E=0;E<e.length;E+=3)f(e[E+0],T),f(e[E+1],S),f(e[E+2],L),c(T,S,L,y)}function c(y,T,S,L){const E=L+1,A=[];for(let C=0;C<=E;C++){A[C]=[];const v=y.clone().lerp(S,C/E),g=T.clone().lerp(S,C/E),w=E-C;for(let P=0;P<=w;P++)P===0&&C===E?A[C][P]=v:A[C][P]=v.clone().lerp(g,P/w)}for(let C=0;C<E;C++)for(let v=0;v<2*(E-C)-1;v++){const g=Math.floor(v/2);v%2===0?(h(A[C][g+1]),h(A[C+1][g]),h(A[C][g])):(h(A[C][g+1]),h(A[C+1][g+1]),h(A[C+1][g]))}}function l(y){const T=new z;for(let S=0;S<s.length;S+=3)T.x=s[S+0],T.y=s[S+1],T.z=s[S+2],T.normalize().multiplyScalar(y),s[S+0]=T.x,s[S+1]=T.y,s[S+2]=T.z}function u(){const y=new z;for(let T=0;T<s.length;T+=3){y.x=s[T+0],y.y=s[T+1],y.z=s[T+2];const S=m(y)/2/Math.PI+.5,L=p(y)/Math.PI+.5;o.push(S,1-L)}_(),d()}function d(){for(let y=0;y<o.length;y+=6){const T=o[y+0],S=o[y+2],L=o[y+4],E=Math.max(T,S,L),A=Math.min(T,S,L);E>.9&&A<.1&&(T<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),L<.2&&(o[y+4]+=1))}}function h(y){s.push(y.x,y.y,y.z)}function f(y,T){const S=y*3;T.x=t[S+0],T.y=t[S+1],T.z=t[S+2]}function _(){const y=new z,T=new z,S=new z,L=new z,E=new Wt,A=new Wt,C=new Wt;for(let v=0,g=0;v<s.length;v+=9,g+=6){y.set(s[v+0],s[v+1],s[v+2]),T.set(s[v+3],s[v+4],s[v+5]),S.set(s[v+6],s[v+7],s[v+8]),E.set(o[g+0],o[g+1]),A.set(o[g+2],o[g+3]),C.set(o[g+4],o[g+5]),L.copy(y).add(T).add(S).divideScalar(3);const w=m(L);x(E,g+0,y,w),x(A,g+2,T,w),x(C,g+4,S,w)}}function x(y,T,S,L){L<0&&y.x===1&&(o[T]=y.x-1),S.x===0&&S.z===0&&(o[T]=L/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.vertices,t.indices,t.radius,t.details)}}class _r extends xs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _r(t.radius,t.detail)}}class Mn extends xs{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Mn(t.radius,t.detail)}}class Sr extends ze{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=t/a,h=e/c,f=[],_=[],x=[],m=[];for(let p=0;p<u;p++){const y=p*h-o;for(let T=0;T<l;T++){const S=T*d-s;_.push(S,-y,0),x.push(0,0,1),m.push(T/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const T=y+l*p,S=y+l*(p+1),L=y+1+l*(p+1),E=y+1+l*p;f.push(T,S,E),f.push(S,L,E)}this.setIndex(f),this.setAttribute("position",new he(_,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ze extends ze{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new z,h=new z,f=[],_=[],x=[],m=[];for(let p=0;p<=i;p++){const y=[],T=p/i;let S=0;p===0&&o===0?S=.5/e:p===i&&c===Math.PI&&(S=-.5/e);for(let L=0;L<=e;L++){const E=L/e;d.x=-t*Math.cos(r+E*s)*Math.sin(o+T*a),d.y=t*Math.cos(o+T*a),d.z=t*Math.sin(r+E*s)*Math.sin(o+T*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(E+S,1-T),y.push(l++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){const T=u[p][y+1],S=u[p][y],L=u[p+1][y],E=u[p+1][y+1];(p!==0||o>0)&&f.push(T,S,E),(p!==i-1||c<Math.PI)&&f.push(S,L,E)}this.setIndex(f),this.setAttribute("position",new he(_,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ke extends ze{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new z,d=new z,h=new z;for(let f=0;f<=i;f++)for(let _=0;_<=r;_++){const x=_/r*s,m=f/i*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(_/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let _=1;_<=r;_++){const x=(r+1)*f+_-1,m=(r+1)*(f-1)+_-1,p=(r+1)*(f-1)+_,y=(r+1)*f+_;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class vs extends Mr{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Gt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class sd extends Mr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class od extends Mr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class zl extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ad extends zl{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const js=new ce,fc=new z,pc=new z;class cd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ea,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;fc.setFromMatrixPosition(t.matrixWorld),e.position.copy(fc),pc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pc),e.updateMatrixWorld(),js.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(js,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(js)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Aa extends Il{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ld extends cd{constructor(){super(new Aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mc extends zl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new ld}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ud extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function gc(n,t,e,i){const r=hd(i);switch(e){case Sl:return n*t;case _s:return n*t/r.components*r.byteLength;case _a:return n*t/r.components*r.byteLength;case El:return n*t*2/r.components*r.byteLength;case xa:return n*t*2/r.components*r.byteLength;case yl:return n*t*3/r.components*r.byteLength;case dn:return n*t*4/r.components*r.byteLength;case va:return n*t*4/r.components*r.byteLength;case ts:case es:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ns:case is:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Lo:case Io:return Math.max(n,16)*Math.max(t,8)/4;case Po:case Do:return Math.max(n,8)*Math.max(t,8)/2;case Uo:case No:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Fo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ko:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Go:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Xo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case qo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case $o:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ko:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case jo:case Jo:case Qo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ta:case ea:return Math.ceil(n/4)*Math.ceil(t/4)*8;case na:case ia:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hd(n){switch(n){case Sn:case _l:return{byteLength:1,components:1};case hr:case xl:case xr:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case pi:case pa:case _n:return{byteLength:4,components:1};case vl:case Ml:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fa);function Bl(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function dd(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<d.length;f++){const _=d[h],x=d[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,_=d.length;f<_;f++){const x=d[f];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pd=`#ifdef USE_ALPHAHASH
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
#endif`,md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vd=`#ifdef USE_AOMAP
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
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sd=`#ifdef USE_BATCHING
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
#endif`,yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ad=`#ifdef USE_IRIDESCENCE
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
#endif`,wd=`#ifdef USE_BUMPMAP
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fd=`#define PI 3.141592653589793
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
} // validated`,Od=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zd=`vec3 transformedNormal = objectNormal;
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
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xd=`#ifdef USE_ENVMAP
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
#endif`,qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tf=`#ifdef USE_GRADIENTMAP
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
}`,ef=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sf=`uniform bool receiveShadow;
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
#endif`,of=`#ifdef USE_ENVMAP
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
#endif`,af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hf=`PhysicalMaterial material;
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
#endif`,df=`struct PhysicalMaterial {
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
}`,ff=`
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
#endif`,pf=`#if defined( RE_IndirectDiffuse )
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
#endif`,mf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ef=`#if defined( USE_POINTS_UV )
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
#endif`,Tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Af=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cf=`#ifdef USE_MORPHTARGETS
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
#endif`,Pf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Df=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ff=`#ifdef USE_NORMALMAP
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
#endif`,Of=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$f=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jf=`float getShadowMask() {
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
}`,Qf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tp=`#ifdef USE_SKINNING
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
#endif`,ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,np=`#ifdef USE_SKINNING
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
#endif`,ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,op=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ap=`#ifdef USE_TRANSMISSION
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
#endif`,cp=`#ifdef USE_TRANSMISSION
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pp=`uniform sampler2D t2D;
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`#include <common>
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
}`,Mp=`#if DEPTH_PACKING == 3200
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
}`,Sp=`#define DISTANCE
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
}`,yp=`#define DISTANCE
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
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`uniform float scale;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,wp=`#include <common>
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Cp=`#define LAMBERT
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
}`,Pp=`#define LAMBERT
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
}`,Lp=`#define MATCAP
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
}`,Dp=`#define MATCAP
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
}`,Ip=`#define NORMAL
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
}`,Up=`#define NORMAL
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
}`,Np=`#define PHONG
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
}`,Fp=`#define PHONG
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
}`,Op=`#define STANDARD
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
}`,zp=`#define STANDARD
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
}`,Bp=`#define TOON
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
}`,kp=`#define TOON
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
}`,Hp=`uniform float size;
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
}`,Vp=`uniform vec3 diffuse;
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
}`,Gp=`#include <common>
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
}`,Wp=`uniform vec3 color;
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
}`,Xp=`uniform float rotation;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:fd,alphahash_pars_fragment:pd,alphamap_fragment:md,alphamap_pars_fragment:gd,alphatest_fragment:_d,alphatest_pars_fragment:xd,aomap_fragment:vd,aomap_pars_fragment:Md,batching_pars_vertex:Sd,batching_vertex:yd,begin_vertex:Ed,beginnormal_vertex:Td,bsdfs:bd,iridescence_fragment:Ad,bumpmap_pars_fragment:wd,clipping_planes_fragment:Rd,clipping_planes_pars_fragment:Cd,clipping_planes_pars_vertex:Pd,clipping_planes_vertex:Ld,color_fragment:Dd,color_pars_fragment:Id,color_pars_vertex:Ud,color_vertex:Nd,common:Fd,cube_uv_reflection_fragment:Od,defaultnormal_vertex:zd,displacementmap_pars_vertex:Bd,displacementmap_vertex:kd,emissivemap_fragment:Hd,emissivemap_pars_fragment:Vd,colorspace_fragment:Gd,colorspace_pars_fragment:Wd,envmap_fragment:Xd,envmap_common_pars_fragment:qd,envmap_pars_fragment:Yd,envmap_pars_vertex:$d,envmap_physical_pars_fragment:of,envmap_vertex:Kd,fog_vertex:Zd,fog_pars_vertex:jd,fog_fragment:Jd,fog_pars_fragment:Qd,gradientmap_pars_fragment:tf,lightmap_pars_fragment:ef,lights_lambert_fragment:nf,lights_lambert_pars_fragment:rf,lights_pars_begin:sf,lights_toon_fragment:af,lights_toon_pars_fragment:cf,lights_phong_fragment:lf,lights_phong_pars_fragment:uf,lights_physical_fragment:hf,lights_physical_pars_fragment:df,lights_fragment_begin:ff,lights_fragment_maps:pf,lights_fragment_end:mf,logdepthbuf_fragment:gf,logdepthbuf_pars_fragment:_f,logdepthbuf_pars_vertex:xf,logdepthbuf_vertex:vf,map_fragment:Mf,map_pars_fragment:Sf,map_particle_fragment:yf,map_particle_pars_fragment:Ef,metalnessmap_fragment:Tf,metalnessmap_pars_fragment:bf,morphinstance_vertex:Af,morphcolor_vertex:wf,morphnormal_vertex:Rf,morphtarget_pars_vertex:Cf,morphtarget_vertex:Pf,normal_fragment_begin:Lf,normal_fragment_maps:Df,normal_pars_fragment:If,normal_pars_vertex:Uf,normal_vertex:Nf,normalmap_pars_fragment:Ff,clearcoat_normal_fragment_begin:Of,clearcoat_normal_fragment_maps:zf,clearcoat_pars_fragment:Bf,iridescence_pars_fragment:kf,opaque_fragment:Hf,packing:Vf,premultiplied_alpha_fragment:Gf,project_vertex:Wf,dithering_fragment:Xf,dithering_pars_fragment:qf,roughnessmap_fragment:Yf,roughnessmap_pars_fragment:$f,shadowmap_pars_fragment:Kf,shadowmap_pars_vertex:Zf,shadowmap_vertex:jf,shadowmask_pars_fragment:Jf,skinbase_vertex:Qf,skinning_pars_vertex:tp,skinning_vertex:ep,skinnormal_vertex:np,specularmap_fragment:ip,specularmap_pars_fragment:rp,tonemapping_fragment:sp,tonemapping_pars_fragment:op,transmission_fragment:ap,transmission_pars_fragment:cp,uv_pars_fragment:lp,uv_pars_vertex:up,uv_vertex:hp,worldpos_vertex:dp,background_vert:fp,background_frag:pp,backgroundCube_vert:mp,backgroundCube_frag:gp,cube_vert:_p,cube_frag:xp,depth_vert:vp,depth_frag:Mp,distanceRGBA_vert:Sp,distanceRGBA_frag:yp,equirect_vert:Ep,equirect_frag:Tp,linedashed_vert:bp,linedashed_frag:Ap,meshbasic_vert:wp,meshbasic_frag:Rp,meshlambert_vert:Cp,meshlambert_frag:Pp,meshmatcap_vert:Lp,meshmatcap_frag:Dp,meshnormal_vert:Ip,meshnormal_frag:Up,meshphong_vert:Np,meshphong_frag:Fp,meshphysical_vert:Op,meshphysical_frag:zp,meshtoon_vert:Bp,meshtoon_frag:kp,points_vert:Hp,points_frag:Vp,shadow_vert:Gp,shadow_frag:Wp,sprite_vert:Xp,sprite_frag:qp},at={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},mn={basic:{uniforms:Ve([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ve([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ve([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ve([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ve([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ve([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ve([at.points,at.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ve([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ve([at.common,at.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ve([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ve([at.sprite,at.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ve([at.common,at.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ve([at.lights,at.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};mn.physical={uniforms:Ve([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Gr={r:0,b:0,g:0},ii=new On,Yp=new ce;function $p(n,t,e,i,r,s,o){const a=new Gt(0);let c=s===!0?0:1,l,u,d=null,h=0,f=null;function _(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?e:t).get(S)),S}function x(T){let S=!1;const L=_(T);L===null?p(a,c):L&&L.isColor&&(p(L,1),S=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,S){const L=_(S);L&&(L.isCubeTexture||L.mapping===gs)?(u===void 0&&(u=new lt(new Kt(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:qi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ii.copy(S.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yp.makeRotationFromEuler(ii)),u.material.toneMapped=Jt.getTransfer(L.colorSpace)!==ie,(d!==L||h!==L.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=L,h=L.version,f=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new lt(new Sr(2,2),new Zn({name:"BackgroundMaterial",uniforms:qi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(L.colorSpace)!==ie,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||h!==L.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=L,h=L.version,f=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,S){T.getRGB(Gr,Dl(n)),i.buffers.color.setClear(Gr.r,Gr.g,Gr.b,S,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(a,c)},render:x,addToRenderList:m,dispose:y}}function Kp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(g,w,P,R,F){let U=!1;const N=d(R,P,w);s!==N&&(s=N,l(s.object)),U=f(g,R,P,F),U&&_(g,R,P,F),F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,S(g,w,P,R),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return n.createVertexArray()}function l(g){return n.bindVertexArray(g)}function u(g){return n.deleteVertexArray(g)}function d(g,w,P){const R=P.wireframe===!0;let F=i[g.id];F===void 0&&(F={},i[g.id]=F);let U=F[w.id];U===void 0&&(U={},F[w.id]=U);let N=U[R];return N===void 0&&(N=h(c()),U[R]=N),N}function h(g){const w=[],P=[],R=[];for(let F=0;F<e;F++)w[F]=0,P[F]=0,R[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:P,attributeDivisors:R,object:g,attributes:{},index:null}}function f(g,w,P,R){const F=s.attributes,U=w.attributes;let N=0;const G=P.getAttributes();for(const H in G)if(G[H].location>=0){const it=F[H];let ft=U[H];if(ft===void 0&&(H==="instanceMatrix"&&g.instanceMatrix&&(ft=g.instanceMatrix),H==="instanceColor"&&g.instanceColor&&(ft=g.instanceColor)),it===void 0||it.attribute!==ft||ft&&it.data!==ft.data)return!0;N++}return s.attributesNum!==N||s.index!==R}function _(g,w,P,R){const F={},U=w.attributes;let N=0;const G=P.getAttributes();for(const H in G)if(G[H].location>=0){let it=U[H];it===void 0&&(H==="instanceMatrix"&&g.instanceMatrix&&(it=g.instanceMatrix),H==="instanceColor"&&g.instanceColor&&(it=g.instanceColor));const ft={};ft.attribute=it,it&&it.data&&(ft.data=it.data),F[H]=ft,N++}s.attributes=F,s.attributesNum=N,s.index=R}function x(){const g=s.newAttributes;for(let w=0,P=g.length;w<P;w++)g[w]=0}function m(g){p(g,0)}function p(g,w){const P=s.newAttributes,R=s.enabledAttributes,F=s.attributeDivisors;P[g]=1,R[g]===0&&(n.enableVertexAttribArray(g),R[g]=1),F[g]!==w&&(n.vertexAttribDivisor(g,w),F[g]=w)}function y(){const g=s.newAttributes,w=s.enabledAttributes;for(let P=0,R=w.length;P<R;P++)w[P]!==g[P]&&(n.disableVertexAttribArray(P),w[P]=0)}function T(g,w,P,R,F,U,N){N===!0?n.vertexAttribIPointer(g,w,P,F,U):n.vertexAttribPointer(g,w,P,R,F,U)}function S(g,w,P,R){x();const F=R.attributes,U=P.getAttributes(),N=w.defaultAttributeValues;for(const G in U){const H=U[G];if(H.location>=0){let J=F[G];if(J===void 0&&(G==="instanceMatrix"&&g.instanceMatrix&&(J=g.instanceMatrix),G==="instanceColor"&&g.instanceColor&&(J=g.instanceColor)),J!==void 0){const it=J.normalized,ft=J.itemSize,wt=t.get(J);if(wt===void 0)continue;const Zt=wt.buffer,rt=wt.type,Ct=wt.bytesPerElement,Y=rt===n.INT||rt===n.UNSIGNED_INT||J.gpuType===pa;if(J.isInterleavedBufferAttribute){const Z=J.data,dt=Z.stride,Lt=J.offset;if(Z.isInstancedInterleavedBuffer){for(let Tt=0;Tt<H.locationSize;Tt++)p(H.location+Tt,Z.meshPerAttribute);g.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Tt=0;Tt<H.locationSize;Tt++)m(H.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let Tt=0;Tt<H.locationSize;Tt++)T(H.location+Tt,ft/H.locationSize,rt,it,dt*Ct,(Lt+ft/H.locationSize*Tt)*Ct,Y)}else{if(J.isInstancedBufferAttribute){for(let Z=0;Z<H.locationSize;Z++)p(H.location+Z,J.meshPerAttribute);g.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Z=0;Z<H.locationSize;Z++)m(H.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let Z=0;Z<H.locationSize;Z++)T(H.location+Z,ft/H.locationSize,rt,it,ft*Ct,ft/H.locationSize*Z*Ct,Y)}}else if(N!==void 0){const it=N[G];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(H.location,it);break;case 3:n.vertexAttrib3fv(H.location,it);break;case 4:n.vertexAttrib4fv(H.location,it);break;default:n.vertexAttrib1fv(H.location,it)}}}}y()}function L(){C();for(const g in i){const w=i[g];for(const P in w){const R=w[P];for(const F in R)u(R[F].object),delete R[F];delete w[P]}delete i[g]}}function E(g){if(i[g.id]===void 0)return;const w=i[g.id];for(const P in w){const R=w[P];for(const F in R)u(R[F].object),delete R[F];delete w[P]}delete i[g.id]}function A(g){for(const w in i){const P=i[w];if(P[g.id]===void 0)continue;const R=P[g.id];for(const F in R)u(R[F].object),delete R[F];delete P[g.id]}}function C(){v(),o=!0,s!==r&&(s=r,l(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:v,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Zp(n,t,e){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),e.update(u,i,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let _=0;_<d;_++)f+=u[_];e.update(f,i,1)}function c(l,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)o(l[_],u[_],h[_]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let _=0;for(let x=0;x<d;x++)_+=u[x]*h[x];e.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function jp(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==dn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===xr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Sn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==_n&&!C)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:L,maxSamples:E}}function Jp(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new oi,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const _=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):l();else{const y=s?0:i,T=y*4;let S=p.clippingState||null;c.value=S,S=u(_,h,T,f);for(let L=0;L!==T;++L)S[L]=e[L];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,_){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const p=f+x*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,S=f;T!==x;++T,S+=4)o.copy(d[T]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Qp(n){let t=new WeakMap;function e(o,a){return a===Ao?o.mapping=Gi:a===wo&&(o.mapping=Wi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ao||a===wo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Qh(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Oi=4,_c=[.125,.215,.35,.446,.526,.582],li=20,Js=new Aa,xc=new Gt;let Qs=null,to=0,eo=0,no=!1;const ai=(1+Math.sqrt(5))/2,Ii=1/ai,vc=[new z(-ai,Ii,0),new z(ai,Ii,0),new z(-Ii,0,ai),new z(Ii,0,ai),new z(0,ai,-Ii),new z(0,ai,Ii),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],tm=new z;class Mc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=tm}=s;Qs=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qs,to,eo),this._renderer.xr.enabled=no,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qs=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:xr,format:dn,colorSpace:Xi,depthBuffer:!1},r=Sc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sc(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=em(s)),this._blurMaterial=nm(s,t,e)}return r}_compileMaterial(t){const e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,Js)}_sceneToCubeUV(t,e,i,r,s){const c=new sn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(xc),d.toneMapping=Nn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const x=new ee({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),m=new lt(new Kt,x);let p=!1;const y=t.background;y?y.isColor&&(x.color.copy(y),t.background=null,p=!0):(x.color.copy(xc),p=!0);for(let T=0;T<6;T++){const S=T%3;S===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[T],s.y,s.z)):S===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[T]));const L=this._cubeSize;Wr(r,S*L,T>2?L:0,L,L),d.setRenderTarget(r),p&&d.render(m,c),d.render(t,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=h,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Gi||t.mapping===Wi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Wr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Js)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vc[(r-s-1)%vc.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new lt(this._lodPlanes[r],l),h=l.uniforms,f=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*li-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):li;m>li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);const p=[];let y=0;for(let A=0;A<li;++A){const C=A/x,v=Math.exp(-C*C/2);p.push(v),A===0?y+=v:A<m&&(y+=2*v)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:T}=this;h.dTheta.value=_,h.mipInt.value=T-i;const S=this._sizeLods[r],L=3*S*(r>T-Oi?r-T+Oi:0),E=4*(this._cubeSize-S);Wr(e,L,E,3*S,2*S),c.setRenderTarget(e),c.render(d,Js)}}function em(n){const t=[],e=[],i=[];let r=n;const s=n-Oi+1+_c.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-Oi?c=_c[o-n+Oi-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,_=6,x=3,m=2,p=1,y=new Float32Array(x*_*f),T=new Float32Array(m*_*f),S=new Float32Array(p*_*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,C=E>2?0:-1,v=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];y.set(v,x*_*E),T.set(h,m*_*E);const g=[E,E,E,E,E,E];S.set(g,p*_*E)}const L=new ze;L.setAttribute("position",new we(y,x)),L.setAttribute("uv",new we(T,m)),L.setAttribute("faceIndex",new we(S,p)),t.push(L),r>Oi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Sc(n,t,e){const i=new Kn(n,t,e);return i.texture.mapping=gs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function nm(n,t,e){const i=new Float32Array(li),r=new z(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wa(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function yc(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wa(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Ec(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function wa(){return`

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
	`}function im(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ao||c===wo,u=c===Gi||c===Wi;if(l||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Mc(n)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(e===null&&(e=new Mc(n)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function rm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&gr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function sm(n,t,e,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)t.update(h[f],n.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,_=d.attributes.position;let x=0;if(f!==null){const y=f.array;x=f.version;for(let T=0,S=y.length;T<S;T+=3){const L=y[T+0],E=y[T+1],A=y[T+2];h.push(L,E,E,A,A,L)}}else if(_!==void 0){const y=_.array;x=_.version;for(let T=0,S=y.length/3-1;T<S;T+=3){const L=T+0,E=T+1,A=T+2;h.push(L,E,E,A,A,L)}}else return;const m=new(Al(h)?Ll:Pl)(h,1);m.version=x;const p=s.get(d);p&&t.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function om(n,t,e){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){n.drawElements(i,f,s,h*o),e.update(f,i,1)}function l(h,f,_){_!==0&&(n.drawElementsInstanced(i,f,s,h*o,_),e.update(f,i,_))}function u(h,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,i,1)}function d(h,f,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,x,0,_);let p=0;for(let y=0;y<_;y++)p+=f[y]*x[y];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function am(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function cm(n,t,e){const i=new WeakMap,r=new xe;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let g=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",g)};var f=g;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let L=a.attributes.position.count*S,E=1;L>t.maxTextureSize&&(E=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const A=new Float32Array(L*E*4*d),C=new wl(A,L,E,d);C.type=_n,C.needsUpdate=!0;const v=S*4;for(let w=0;w<d;w++){const P=p[w],R=y[w],F=T[w],U=L*E*4*w;for(let N=0;N<P.count;N++){const G=N*v;_===!0&&(r.fromBufferAttribute(P,N),A[U+G+0]=r.x,A[U+G+1]=r.y,A[U+G+2]=r.z,A[U+G+3]=0),x===!0&&(r.fromBufferAttribute(R,N),A[U+G+4]=r.x,A[U+G+5]=r.y,A[U+G+6]=r.z,A[U+G+7]=0),m===!0&&(r.fromBufferAttribute(F,N),A[U+G+8]=r.x,A[U+G+9]=r.y,A[U+G+10]=r.z,A[U+G+11]=F.itemSize===4?r.w:1)}}h={count:d,texture:C,size:new Wt(L,E)},i.set(a,h),a.addEventListener("dispose",g)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const x=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function lm(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==l&&(t.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const kl=new Xe,Tc=new Fl(1,1),Hl=new wl,Vl=new Nh,Gl=new Ul,bc=[],Ac=[],wc=new Float32Array(16),Rc=new Float32Array(9),Cc=new Float32Array(4);function ji(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=bc[r];if(s===void 0&&(s=new Float32Array(r),bc[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ce(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ms(n,t){let e=Ac[t];e===void 0&&(e=new Int32Array(t),Ac[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function um(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function hm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),Ce(e,t)}}function dm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),Ce(e,t)}}function fm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),Ce(e,t)}}function pm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;Cc.set(i),n.uniformMatrix2fv(this.addr,!1,Cc),Ce(e,i)}}function mm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;Rc.set(i),n.uniformMatrix3fv(this.addr,!1,Rc),Ce(e,i)}}function gm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;wc.set(i),n.uniformMatrix4fv(this.addr,!1,wc),Ce(e,i)}}function _m(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function xm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),Ce(e,t)}}function vm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),Ce(e,t)}}function Mm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),Ce(e,t)}}function Sm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function ym(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),Ce(e,t)}}function Em(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),Ce(e,t)}}function Tm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),Ce(e,t)}}function bm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Tc.compareFunction=bl,s=Tc):s=kl,e.setTexture2D(t||s,r)}function Am(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Vl,r)}function wm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Gl,r)}function Rm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Hl,r)}function Cm(n){switch(n){case 5126:return um;case 35664:return hm;case 35665:return dm;case 35666:return fm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return _m;case 35667:case 35671:return xm;case 35668:case 35672:return vm;case 35669:case 35673:return Mm;case 5125:return Sm;case 36294:return ym;case 36295:return Em;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return Rm}}function Pm(n,t){n.uniform1fv(this.addr,t)}function Lm(n,t){const e=ji(t,this.size,2);n.uniform2fv(this.addr,e)}function Dm(n,t){const e=ji(t,this.size,3);n.uniform3fv(this.addr,e)}function Im(n,t){const e=ji(t,this.size,4);n.uniform4fv(this.addr,e)}function Um(n,t){const e=ji(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Nm(n,t){const e=ji(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Fm(n,t){const e=ji(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Om(n,t){n.uniform1iv(this.addr,t)}function zm(n,t){n.uniform2iv(this.addr,t)}function Bm(n,t){n.uniform3iv(this.addr,t)}function km(n,t){n.uniform4iv(this.addr,t)}function Hm(n,t){n.uniform1uiv(this.addr,t)}function Vm(n,t){n.uniform2uiv(this.addr,t)}function Gm(n,t){n.uniform3uiv(this.addr,t)}function Wm(n,t){n.uniform4uiv(this.addr,t)}function Xm(n,t,e){const i=this.cache,r=t.length,s=Ms(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||kl,s[o])}function qm(n,t,e){const i=this.cache,r=t.length,s=Ms(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Vl,s[o])}function Ym(n,t,e){const i=this.cache,r=t.length,s=Ms(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Gl,s[o])}function $m(n,t,e){const i=this.cache,r=t.length,s=Ms(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Hl,s[o])}function Km(n){switch(n){case 5126:return Pm;case 35664:return Lm;case 35665:return Dm;case 35666:return Im;case 35674:return Um;case 35675:return Nm;case 35676:return Fm;case 5124:case 35670:return Om;case 35667:case 35671:return zm;case 35668:case 35672:return Bm;case 35669:case 35673:return km;case 5125:return Hm;case 36294:return Vm;case 36295:return Gm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return $m}}class Zm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Cm(e.type)}}class jm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Km(e.type)}}class Jm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const io=/(\w+)(\])?(\[|\.)?/g;function Pc(n,t){n.seq.push(t),n.map[t.id]=t}function Qm(n,t,e){const i=n.name,r=i.length;for(io.lastIndex=0;;){const s=io.exec(i),o=io.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Pc(e,l===void 0?new Zm(a,n,t):new jm(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Jm(a),Pc(e,d)),e=d}}}class rs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Qm(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Lc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const tg=37297;let eg=0;function ng(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Dc=new kt;function ig(n){Jt._getMatrix(Dc,Jt.workingColorSpace,n);const t=`mat3( ${Dc.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(n)){case us:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ic(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+ng(n.getShaderSource(t),a)}else return s}function rg(n,t){const e=ig(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function sg(n,t){let e;switch(t){case Yu:e="Linear";break;case $u:e="Reinhard";break;case Ku:e="Cineon";break;case Zu:e="ACESFilmic";break;case Ju:e="AgX";break;case Qu:e="Neutral";break;case ju:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xr=new z;function og(){Jt.getLuminanceCoefficients(Xr);const n=Xr.x.toFixed(4),t=Xr.y.toFixed(4),e=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ag(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function cg(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function lg(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ar(n){return n!==""}function Uc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function ra(n){return n.replace(ug,dg)}const hg=new Map;function dg(n,t){let e=Vt[t];if(e===void 0){const i=hg.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ra(e)}const fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fc(n){return n.replace(fg,pg)}function pg(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Oc(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function mg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pl?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Au?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function gg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Gi:case Wi:t="ENVMAP_TYPE_CUBE";break;case gs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _g(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Wi&&(t="ENVMAP_MODE_REFRACTION"),t}function xg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ml:t="ENVMAP_BLENDING_MULTIPLY";break;case Xu:t="ENVMAP_BLENDING_MIX";break;case qu:t="ENVMAP_BLENDING_ADD";break}return t}function vg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Mg(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=mg(e),l=gg(e),u=_g(e),d=xg(e),h=vg(e),f=ag(e),_=cg(s),x=r.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ar).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ar).join(`
`),p.length>0&&(p+=`
`)):(m=[Oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),p=[Oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,rg("linearToOutputTexel",e.outputColorSpace),og(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ar).join(`
`)),o=ra(o),o=Uc(o,e),o=Nc(o,e),a=ra(a),a=Uc(a,e),a=Nc(a,e),o=Fc(o),a=Fc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=y+m+o,S=y+p+a,L=Lc(r,r.VERTEX_SHADER,T),E=Lc(r,r.FRAGMENT_SHADER,S);r.attachShader(x,L),r.attachShader(x,E),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(w){if(n.debug.checkShaderErrors){const P=r.getProgramInfoLog(x)||"",R=r.getShaderInfoLog(L)||"",F=r.getShaderInfoLog(E)||"",U=P.trim(),N=R.trim(),G=F.trim();let H=!0,J=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,L,E);else{const it=Ic(r,L,"vertex"),ft=Ic(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+U+`
`+it+`
`+ft)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||G==="")&&(J=!1);J&&(w.diagnostics={runnable:H,programLog:U,vertexShader:{log:N,prefix:m},fragmentShader:{log:G,prefix:p}})}r.deleteShader(L),r.deleteShader(E),C=new rs(r,x),v=lg(r,x)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(x,tg)),g},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=eg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=E,this}let Sg=0;class yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Eg(t),e.set(t,i)),i}}class Eg{constructor(t){this.id=Sg++,this.code=t,this.usedTimes=0}}function Tg(n,t,e,i,r,s,o){const a=new Rl,c=new yg,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,g,w,P,R){const F=P.fog,U=R.geometry,N=v.isMeshStandardMaterial?P.environment:null,G=(v.isMeshStandardMaterial?e:t).get(v.envMap||N),H=G&&G.mapping===gs?G.image.height:null,J=_[v.type];v.precision!==null&&(f=r.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const it=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ft=it!==void 0?it.length:0;let wt=0;U.morphAttributes.position!==void 0&&(wt=1),U.morphAttributes.normal!==void 0&&(wt=2),U.morphAttributes.color!==void 0&&(wt=3);let Zt,rt,Ct,Y;if(J){const Qt=mn[J];Zt=Qt.vertexShader,rt=Qt.fragmentShader}else Zt=v.vertexShader,rt=v.fragmentShader,c.update(v),Ct=c.getVertexShaderID(v),Y=c.getFragmentShaderID(v);const Z=n.getRenderTarget(),dt=n.state.buffers.depth.getReversed(),Lt=R.isInstancedMesh===!0,Tt=R.isBatchedMesh===!0,$t=!!v.map,Ne=!!v.matcap,I=!!G,de=!!v.aoMap,zt=!!v.lightMap,Dt=!!v.bumpMap,xt=!!v.normalMap,fe=!!v.displacementMap,vt=!!v.emissiveMap,Ht=!!v.metalnessMap,Pe=!!v.roughnessMap,ve=v.anisotropy>0,D=v.clearcoat>0,M=v.dispersion>0,V=v.iridescence>0,$=v.sheen>0,j=v.transmission>0,q=ve&&!!v.anisotropyMap,Et=D&&!!v.clearcoatMap,st=D&&!!v.clearcoatNormalMap,Mt=D&&!!v.clearcoatRoughnessMap,St=V&&!!v.iridescenceMap,et=V&&!!v.iridescenceThicknessMap,ht=$&&!!v.sheenColorMap,Pt=$&&!!v.sheenRoughnessMap,yt=!!v.specularMap,ct=!!v.specularColorMap,Bt=!!v.specularIntensityMap,O=j&&!!v.transmissionMap,nt=j&&!!v.thicknessMap,ot=!!v.gradientMap,mt=!!v.alphaMap,Q=v.alphaTest>0,K=!!v.alphaHash,_t=!!v.extensions;let Ot=Nn;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ot=n.toneMapping);const ae={shaderID:J,shaderType:v.type,shaderName:v.name,vertexShader:Zt,fragmentShader:rt,defines:v.defines,customVertexShaderID:Ct,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Tt,batchingColor:Tt&&R._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&R.instanceColor!==null,instancingMorph:Lt&&R.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Xi,alphaToCoverage:!!v.alphaToCoverage,map:$t,matcap:Ne,envMap:I,envMapMode:I&&G.mapping,envMapCubeUVHeight:H,aoMap:de,lightMap:zt,bumpMap:Dt,normalMap:xt,displacementMap:h&&fe,emissiveMap:vt,normalMapObjectSpace:xt&&v.normalMapType===ih,normalMapTangentSpace:xt&&v.normalMapType===Tl,metalnessMap:Ht,roughnessMap:Pe,anisotropy:ve,anisotropyMap:q,clearcoat:D,clearcoatMap:Et,clearcoatNormalMap:st,clearcoatRoughnessMap:Mt,dispersion:M,iridescence:V,iridescenceMap:St,iridescenceThicknessMap:et,sheen:$,sheenColorMap:ht,sheenRoughnessMap:Pt,specularMap:yt,specularColorMap:ct,specularIntensityMap:Bt,transmission:j,transmissionMap:O,thicknessMap:nt,gradientMap:ot,opaque:v.transparent===!1&&v.blending===zi&&v.alphaToCoverage===!1,alphaMap:mt,alphaTest:Q,alphaHash:K,combine:v.combine,mapUv:$t&&x(v.map.channel),aoMapUv:de&&x(v.aoMap.channel),lightMapUv:zt&&x(v.lightMap.channel),bumpMapUv:Dt&&x(v.bumpMap.channel),normalMapUv:xt&&x(v.normalMap.channel),displacementMapUv:fe&&x(v.displacementMap.channel),emissiveMapUv:vt&&x(v.emissiveMap.channel),metalnessMapUv:Ht&&x(v.metalnessMap.channel),roughnessMapUv:Pe&&x(v.roughnessMap.channel),anisotropyMapUv:q&&x(v.anisotropyMap.channel),clearcoatMapUv:Et&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:st&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:et&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&x(v.sheenRoughnessMap.channel),specularMapUv:yt&&x(v.specularMap.channel),specularColorMapUv:ct&&x(v.specularColorMap.channel),specularIntensityMapUv:Bt&&x(v.specularIntensityMap.channel),transmissionMapUv:O&&x(v.transmissionMap.channel),thicknessMapUv:nt&&x(v.thicknessMap.channel),alphaMapUv:mt&&x(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(xt||ve),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!U.attributes.uv&&($t||mt),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:dt,skinning:R.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:wt,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ot,decodeVideoTexture:$t&&v.map.isVideoTexture===!0&&Jt.getTransfer(v.map.colorSpace)===ie,decodeVideoTextureEmissive:vt&&v.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(v.emissiveMap.colorSpace)===ie,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Dn,flipSided:v.side===We,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_t&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&v.extensions.multiDraw===!0||Tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function p(v){const g=[];if(v.shaderID?g.push(v.shaderID):(g.push(v.customVertexShaderID),g.push(v.customFragmentShaderID)),v.defines!==void 0)for(const w in v.defines)g.push(w),g.push(v.defines[w]);return v.isRawShaderMaterial===!1&&(y(g,v),T(g,v),g.push(n.outputColorSpace)),g.push(v.customProgramCacheKey),g.join()}function y(v,g){v.push(g.precision),v.push(g.outputColorSpace),v.push(g.envMapMode),v.push(g.envMapCubeUVHeight),v.push(g.mapUv),v.push(g.alphaMapUv),v.push(g.lightMapUv),v.push(g.aoMapUv),v.push(g.bumpMapUv),v.push(g.normalMapUv),v.push(g.displacementMapUv),v.push(g.emissiveMapUv),v.push(g.metalnessMapUv),v.push(g.roughnessMapUv),v.push(g.anisotropyMapUv),v.push(g.clearcoatMapUv),v.push(g.clearcoatNormalMapUv),v.push(g.clearcoatRoughnessMapUv),v.push(g.iridescenceMapUv),v.push(g.iridescenceThicknessMapUv),v.push(g.sheenColorMapUv),v.push(g.sheenRoughnessMapUv),v.push(g.specularMapUv),v.push(g.specularColorMapUv),v.push(g.specularIntensityMapUv),v.push(g.transmissionMapUv),v.push(g.thicknessMapUv),v.push(g.combine),v.push(g.fogExp2),v.push(g.sizeAttenuation),v.push(g.morphTargetsCount),v.push(g.morphAttributeCount),v.push(g.numDirLights),v.push(g.numPointLights),v.push(g.numSpotLights),v.push(g.numSpotLightMaps),v.push(g.numHemiLights),v.push(g.numRectAreaLights),v.push(g.numDirLightShadows),v.push(g.numPointLightShadows),v.push(g.numSpotLightShadows),v.push(g.numSpotLightShadowsWithMaps),v.push(g.numLightProbes),v.push(g.shadowMapType),v.push(g.toneMapping),v.push(g.numClippingPlanes),v.push(g.numClipIntersection),v.push(g.depthPacking)}function T(v,g){a.disableAll(),g.supportsVertexTextures&&a.enable(0),g.instancing&&a.enable(1),g.instancingColor&&a.enable(2),g.instancingMorph&&a.enable(3),g.matcap&&a.enable(4),g.envMap&&a.enable(5),g.normalMapObjectSpace&&a.enable(6),g.normalMapTangentSpace&&a.enable(7),g.clearcoat&&a.enable(8),g.iridescence&&a.enable(9),g.alphaTest&&a.enable(10),g.vertexColors&&a.enable(11),g.vertexAlphas&&a.enable(12),g.vertexUv1s&&a.enable(13),g.vertexUv2s&&a.enable(14),g.vertexUv3s&&a.enable(15),g.vertexTangents&&a.enable(16),g.anisotropy&&a.enable(17),g.alphaHash&&a.enable(18),g.batching&&a.enable(19),g.dispersion&&a.enable(20),g.batchingColor&&a.enable(21),g.gradientMap&&a.enable(22),v.push(a.mask),a.disableAll(),g.fog&&a.enable(0),g.useFog&&a.enable(1),g.flatShading&&a.enable(2),g.logarithmicDepthBuffer&&a.enable(3),g.reversedDepthBuffer&&a.enable(4),g.skinning&&a.enable(5),g.morphTargets&&a.enable(6),g.morphNormals&&a.enable(7),g.morphColors&&a.enable(8),g.premultipliedAlpha&&a.enable(9),g.shadowMapEnabled&&a.enable(10),g.doubleSided&&a.enable(11),g.flipSided&&a.enable(12),g.useDepthPacking&&a.enable(13),g.dithering&&a.enable(14),g.transmission&&a.enable(15),g.sheen&&a.enable(16),g.opaque&&a.enable(17),g.pointsUvs&&a.enable(18),g.decodeVideoTexture&&a.enable(19),g.decodeVideoTextureEmissive&&a.enable(20),g.alphaToCoverage&&a.enable(21),v.push(a.mask)}function S(v){const g=_[v.type];let w;if(g){const P=mn[g];w=Kh.clone(P.uniforms)}else w=v.uniforms;return w}function L(v,g){let w;for(let P=0,R=u.length;P<R;P++){const F=u[P];if(F.cacheKey===g){w=F,++w.usedTimes;break}}return w===void 0&&(w=new Mg(n,g,v,s),u.push(w)),w}function E(v){if(--v.usedTimes===0){const g=u.indexOf(v);u[g]=u[u.length-1],u.pop(),v.destroy()}}function A(v){c.remove(v)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:L,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:C}}function bg(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Ag(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function zc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Bc(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(d,h,f,_,x,m){let p=n[t];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:_,renderOrder:d.renderOrder,z:x,group:m},n[t]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=x,p.group=m),t++,p}function a(d,h,f,_,x,m){const p=o(d,h,f,_,x,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):e.push(p)}function c(d,h,f,_,x,m){const p=o(d,h,f,_,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):e.unshift(p)}function l(d,h){e.length>1&&e.sort(d||Ag),i.length>1&&i.sort(h||zc),r.length>1&&r.sort(h||zc)}function u(){for(let d=t,h=n.length;d<h;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function wg(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Bc,n.set(i,[o])):r>=s.length?(o=new Bc,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Rg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Gt};break;case"SpotLight":e={position:new z,direction:new z,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function Cg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Pg=0;function Lg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Dg(n){const t=new Rg,e=Cg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new z);const r=new z,s=new ce,o=new ce;function a(l){let u=0,d=0,h=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let f=0,_=0,x=0,m=0,p=0,y=0,T=0,S=0,L=0,E=0,A=0;l.sort(Lg);for(let v=0,g=l.length;v<g;v++){const w=l[v],P=w.color,R=w.intensity,F=w.distance,U=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=P.r*R,d+=P.g*R,h+=P.b*R;else if(w.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(w.sh.coefficients[N],R);A++}else if(w.isDirectionalLight){const N=t.get(w);if(N.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const G=w.shadow,H=e.get(w);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=U,i.directionalShadowMatrix[f]=w.shadow.matrix,y++}i.directional[f]=N,f++}else if(w.isSpotLight){const N=t.get(w);N.position.setFromMatrixPosition(w.matrixWorld),N.color.copy(P).multiplyScalar(R),N.distance=F,N.coneCos=Math.cos(w.angle),N.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),N.decay=w.decay,i.spot[x]=N;const G=w.shadow;if(w.map&&(i.spotLightMap[L]=w.map,L++,G.updateMatrices(w),w.castShadow&&E++),i.spotLightMatrix[x]=G.matrix,w.castShadow){const H=e.get(w);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=U,S++}x++}else if(w.isRectAreaLight){const N=t.get(w);N.color.copy(P).multiplyScalar(R),N.halfWidth.set(w.width*.5,0,0),N.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=N,m++}else if(w.isPointLight){const N=t.get(w);if(N.color.copy(w.color).multiplyScalar(w.intensity),N.distance=w.distance,N.decay=w.decay,w.castShadow){const G=w.shadow,H=e.get(w);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,H.shadowCameraNear=G.camera.near,H.shadowCameraFar=G.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=U,i.pointShadowMatrix[_]=w.shadow.matrix,T++}i.point[_]=N,_++}else if(w.isHemisphereLight){const N=t.get(w);N.skyColor.copy(w.color).multiplyScalar(R),N.groundColor.copy(w.groundColor).multiplyScalar(R),i.hemi[p]=N,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const C=i.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==T||C.numSpotShadows!==S||C.numSpotMaps!==L||C.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+L-E,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,C.directionalLength=f,C.pointLength=_,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=T,C.numSpotShadows=S,C.numSpotMaps=L,C.numLightProbes=A,i.version=Pg++)}function c(l,u){let d=0,h=0,f=0,_=0,x=0;const m=u.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const T=l[p];if(T.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(T.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function kc(n){const t=new Dg(n),e=[],i=[];function r(u){l.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Ig(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new kc(n),t.set(r,[a])):s>=o.length?(a=new kc(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const Ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ng=`uniform sampler2D shadow_pass;
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
}`;function Fg(n,t,e){let i=new Ea;const r=new Wt,s=new Wt,o=new xe,a=new sd({depthPacking:nh}),c=new od,l={},u=e.maxTextureSize,d={[$n]:We,[We]:$n,[Dn]:Dn},h=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:Ug,fragmentShader:Ng}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new ze;_.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new lt(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pl;let p=this.type;this.render=function(E,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const v=n.getRenderTarget(),g=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Yn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const R=p!==Ln&&this.type===Ln,F=p===Ln&&this.type!==Ln;for(let U=0,N=E.length;U<N;U++){const G=E[U],H=G.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const J=H.getFrameExtents();if(r.multiply(J),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,H.mapSize.y=s.y)),H.map===null||R===!0||F===!0){const ft=this.type!==Ln?{minFilter:De,magFilter:De}:{};H.map!==null&&H.map.dispose(),H.map=new Kn(r.x,r.y,ft),H.map.texture.name=G.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const it=H.getViewportCount();for(let ft=0;ft<it;ft++){const wt=H.getViewport(ft);o.set(s.x*wt.x,s.y*wt.y,s.x*wt.z,s.y*wt.w),P.viewport(o),H.updateMatrices(G,ft),i=H.getFrustum(),S(A,C,H.camera,G,this.type)}H.isPointLightShadow!==!0&&this.type===Ln&&y(H,C),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(v,g,w)};function y(E,A){const C=t.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Kn(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,C,h,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,C,f,x,null)}function T(E,A,C,v){let g=null;const w=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)g=w;else if(g=C.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const P=g.uuid,R=A.uuid;let F=l[P];F===void 0&&(F={},l[P]=F);let U=F[R];U===void 0&&(U=g.clone(),F[R]=U,A.addEventListener("dispose",L)),g=U}if(g.visible=A.visible,g.wireframe=A.wireframe,v===Ln?g.side=A.shadowSide!==null?A.shadowSide:A.side:g.side=A.shadowSide!==null?A.shadowSide:d[A.side],g.alphaMap=A.alphaMap,g.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,g.map=A.map,g.clipShadows=A.clipShadows,g.clippingPlanes=A.clippingPlanes,g.clipIntersection=A.clipIntersection,g.displacementMap=A.displacementMap,g.displacementScale=A.displacementScale,g.displacementBias=A.displacementBias,g.wireframeLinewidth=A.wireframeLinewidth,g.linewidth=A.linewidth,C.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const P=n.properties.get(g);P.light=C}return g}function S(E,A,C,v,g){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&g===Ln)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const R=t.update(E),F=E.material;if(Array.isArray(F)){const U=R.groups;for(let N=0,G=U.length;N<G;N++){const H=U[N],J=F[H.materialIndex];if(J&&J.visible){const it=T(E,J,v,g);E.onBeforeShadow(n,E,A,C,R,it,H),n.renderBufferDirect(C,null,R,it,E,H),E.onAfterShadow(n,E,A,C,R,it,H)}}}else if(F.visible){const U=T(E,F,v,g);E.onBeforeShadow(n,E,A,C,R,U,null),n.renderBufferDirect(C,null,R,U,E,null),E.onAfterShadow(n,E,A,C,R,U,null)}}const P=E.children;for(let R=0,F=P.length;R<F;R++)S(P[R],A,C,v,g)}function L(E){E.target.removeEventListener("dispose",L);for(const C in l){const v=l[C],g=E.target.uuid;g in v&&(v[g].dispose(),delete v[g])}}}const Og={[vo]:Mo,[So]:To,[yo]:bo,[Vi]:Eo,[Mo]:vo,[To]:So,[bo]:yo,[Eo]:Vi};function zg(n,t){function e(){let O=!1;const nt=new xe;let ot=null;const mt=new xe(0,0,0,0);return{setMask:function(Q){ot!==Q&&!O&&(n.colorMask(Q,Q,Q,Q),ot=Q)},setLocked:function(Q){O=Q},setClear:function(Q,K,_t,Ot,ae){ae===!0&&(Q*=Ot,K*=Ot,_t*=Ot),nt.set(Q,K,_t,Ot),mt.equals(nt)===!1&&(n.clearColor(Q,K,_t,Ot),mt.copy(nt))},reset:function(){O=!1,ot=null,mt.set(-1,0,0,0)}}}function i(){let O=!1,nt=!1,ot=null,mt=null,Q=null;return{setReversed:function(K){if(nt!==K){const _t=t.get("EXT_clip_control");K?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),nt=K;const Ot=Q;Q=null,this.setClear(Ot)}},getReversed:function(){return nt},setTest:function(K){K?Z(n.DEPTH_TEST):dt(n.DEPTH_TEST)},setMask:function(K){ot!==K&&!O&&(n.depthMask(K),ot=K)},setFunc:function(K){if(nt&&(K=Og[K]),mt!==K){switch(K){case vo:n.depthFunc(n.NEVER);break;case Mo:n.depthFunc(n.ALWAYS);break;case So:n.depthFunc(n.LESS);break;case Vi:n.depthFunc(n.LEQUAL);break;case yo:n.depthFunc(n.EQUAL);break;case Eo:n.depthFunc(n.GEQUAL);break;case To:n.depthFunc(n.GREATER);break;case bo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}mt=K}},setLocked:function(K){O=K},setClear:function(K){Q!==K&&(nt&&(K=1-K),n.clearDepth(K),Q=K)},reset:function(){O=!1,ot=null,mt=null,Q=null,nt=!1}}}function r(){let O=!1,nt=null,ot=null,mt=null,Q=null,K=null,_t=null,Ot=null,ae=null;return{setTest:function(Qt){O||(Qt?Z(n.STENCIL_TEST):dt(n.STENCIL_TEST))},setMask:function(Qt){nt!==Qt&&!O&&(n.stencilMask(Qt),nt=Qt)},setFunc:function(Qt,yn,fn){(ot!==Qt||mt!==yn||Q!==fn)&&(n.stencilFunc(Qt,yn,fn),ot=Qt,mt=yn,Q=fn)},setOp:function(Qt,yn,fn){(K!==Qt||_t!==yn||Ot!==fn)&&(n.stencilOp(Qt,yn,fn),K=Qt,_t=yn,Ot=fn)},setLocked:function(Qt){O=Qt},setClear:function(Qt){ae!==Qt&&(n.clearStencil(Qt),ae=Qt)},reset:function(){O=!1,nt=null,ot=null,mt=null,Q=null,K=null,_t=null,Ot=null,ae=null}}}const s=new e,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],_=null,x=!1,m=null,p=null,y=null,T=null,S=null,L=null,E=null,A=new Gt(0,0,0),C=0,v=!1,g=null,w=null,P=null,R=null,F=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,G=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),N=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),N=G>=2);let J=null,it={};const ft=n.getParameter(n.SCISSOR_BOX),wt=n.getParameter(n.VIEWPORT),Zt=new xe().fromArray(ft),rt=new xe().fromArray(wt);function Ct(O,nt,ot,mt){const Q=new Uint8Array(4),K=n.createTexture();n.bindTexture(O,K),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _t=0;_t<ot;_t++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(nt,0,n.RGBA,1,1,mt,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(nt+_t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return K}const Y={};Y[n.TEXTURE_2D]=Ct(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=Ct(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=Ct(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=Ct(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(n.DEPTH_TEST),o.setFunc(Vi),Dt(!1),xt(za),Z(n.CULL_FACE),de(Yn);function Z(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function dt(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function Lt(O,nt){return d[O]!==nt?(n.bindFramebuffer(O,nt),d[O]=nt,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=nt),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=nt),!0):!1}function Tt(O,nt){let ot=f,mt=!1;if(O){ot=h.get(nt),ot===void 0&&(ot=[],h.set(nt,ot));const Q=O.textures;if(ot.length!==Q.length||ot[0]!==n.COLOR_ATTACHMENT0){for(let K=0,_t=Q.length;K<_t;K++)ot[K]=n.COLOR_ATTACHMENT0+K;ot.length=Q.length,mt=!0}}else ot[0]!==n.BACK&&(ot[0]=n.BACK,mt=!0);mt&&n.drawBuffers(ot)}function $t(O){return _!==O?(n.useProgram(O),_=O,!0):!1}const Ne={[ci]:n.FUNC_ADD,[Ru]:n.FUNC_SUBTRACT,[Cu]:n.FUNC_REVERSE_SUBTRACT};Ne[Pu]=n.MIN,Ne[Lu]=n.MAX;const I={[Du]:n.ZERO,[Iu]:n.ONE,[Uu]:n.SRC_COLOR,[_o]:n.SRC_ALPHA,[ku]:n.SRC_ALPHA_SATURATE,[zu]:n.DST_COLOR,[Fu]:n.DST_ALPHA,[Nu]:n.ONE_MINUS_SRC_COLOR,[xo]:n.ONE_MINUS_SRC_ALPHA,[Bu]:n.ONE_MINUS_DST_COLOR,[Ou]:n.ONE_MINUS_DST_ALPHA,[Hu]:n.CONSTANT_COLOR,[Vu]:n.ONE_MINUS_CONSTANT_COLOR,[Gu]:n.CONSTANT_ALPHA,[Wu]:n.ONE_MINUS_CONSTANT_ALPHA};function de(O,nt,ot,mt,Q,K,_t,Ot,ae,Qt){if(O===Yn){x===!0&&(dt(n.BLEND),x=!1);return}if(x===!1&&(Z(n.BLEND),x=!0),O!==wu){if(O!==m||Qt!==v){if((p!==ci||S!==ci)&&(n.blendEquation(n.FUNC_ADD),p=ci,S=ci),Qt)switch(O){case zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ba:n.blendFunc(n.ONE,n.ONE);break;case ka:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ha:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ba:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ka:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ha:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,T=null,L=null,E=null,A.set(0,0,0),C=0,m=O,v=Qt}return}Q=Q||nt,K=K||ot,_t=_t||mt,(nt!==p||Q!==S)&&(n.blendEquationSeparate(Ne[nt],Ne[Q]),p=nt,S=Q),(ot!==y||mt!==T||K!==L||_t!==E)&&(n.blendFuncSeparate(I[ot],I[mt],I[K],I[_t]),y=ot,T=mt,L=K,E=_t),(Ot.equals(A)===!1||ae!==C)&&(n.blendColor(Ot.r,Ot.g,Ot.b,ae),A.copy(Ot),C=ae),m=O,v=!1}function zt(O,nt){O.side===Dn?dt(n.CULL_FACE):Z(n.CULL_FACE);let ot=O.side===We;nt&&(ot=!ot),Dt(ot),O.blending===zi&&O.transparent===!1?de(Yn):de(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const mt=O.stencilWrite;a.setTest(mt),mt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),vt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(O){g!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),g=O)}function xt(O){O!==Tu?(Z(n.CULL_FACE),O!==w&&(O===za?n.cullFace(n.BACK):O===bu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):dt(n.CULL_FACE),w=O}function fe(O){O!==P&&(N&&n.lineWidth(O),P=O)}function vt(O,nt,ot){O?(Z(n.POLYGON_OFFSET_FILL),(R!==nt||F!==ot)&&(n.polygonOffset(nt,ot),R=nt,F=ot)):dt(n.POLYGON_OFFSET_FILL)}function Ht(O){O?Z(n.SCISSOR_TEST):dt(n.SCISSOR_TEST)}function Pe(O){O===void 0&&(O=n.TEXTURE0+U-1),J!==O&&(n.activeTexture(O),J=O)}function ve(O,nt,ot){ot===void 0&&(J===null?ot=n.TEXTURE0+U-1:ot=J);let mt=it[ot];mt===void 0&&(mt={type:void 0,texture:void 0},it[ot]=mt),(mt.type!==O||mt.texture!==nt)&&(J!==ot&&(n.activeTexture(ot),J=ot),n.bindTexture(O,nt||Y[O]),mt.type=O,mt.texture=nt)}function D(){const O=it[J];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ht(O){Zt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Zt.copy(O))}function Pt(O){rt.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),rt.copy(O))}function yt(O,nt){let ot=l.get(nt);ot===void 0&&(ot=new WeakMap,l.set(nt,ot));let mt=ot.get(O);mt===void 0&&(mt=n.getUniformBlockIndex(nt,O.name),ot.set(O,mt))}function ct(O,nt){const mt=l.get(nt).get(O);c.get(nt)!==mt&&(n.uniformBlockBinding(nt,mt,O.__bindingPointIndex),c.set(nt,mt))}function Bt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},J=null,it={},d={},h=new WeakMap,f=[],_=null,x=!1,m=null,p=null,y=null,T=null,S=null,L=null,E=null,A=new Gt(0,0,0),C=0,v=!1,g=null,w=null,P=null,R=null,F=null,Zt.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Z,disable:dt,bindFramebuffer:Lt,drawBuffers:Tt,useProgram:$t,setBlending:de,setMaterial:zt,setFlipSided:Dt,setCullFace:xt,setLineWidth:fe,setPolygonOffset:vt,setScissorTest:Ht,activeTexture:Pe,bindTexture:ve,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:V,texImage2D:St,texImage3D:et,updateUBOMapping:yt,uniformBlockBinding:ct,texStorage2D:st,texStorage3D:Mt,texSubImage2D:$,texSubImage3D:j,compressedTexSubImage2D:q,compressedTexSubImage3D:Et,scissor:ht,viewport:Pt,reset:Bt}}function Bg(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Wt,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,M){return f?new OffscreenCanvas(D,M):ds("canvas")}function x(D,M,V){let $=1;const j=ve(D);if((j.width>V||j.height>V)&&($=V/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const q=Math.floor($*j.width),Et=Math.floor($*j.height);d===void 0&&(d=_(q,Et));const st=M?_(q,Et):d;return st.width=q,st.height=Et,st.getContext("2d").drawImage(D,0,0,q,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+Et+")."),st}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){n.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(D,M,V,$,j=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let q=M;if(M===n.RED&&(V===n.FLOAT&&(q=n.R32F),V===n.HALF_FLOAT&&(q=n.R16F),V===n.UNSIGNED_BYTE&&(q=n.R8)),M===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.R8UI),V===n.UNSIGNED_SHORT&&(q=n.R16UI),V===n.UNSIGNED_INT&&(q=n.R32UI),V===n.BYTE&&(q=n.R8I),V===n.SHORT&&(q=n.R16I),V===n.INT&&(q=n.R32I)),M===n.RG&&(V===n.FLOAT&&(q=n.RG32F),V===n.HALF_FLOAT&&(q=n.RG16F),V===n.UNSIGNED_BYTE&&(q=n.RG8)),M===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.RG8UI),V===n.UNSIGNED_SHORT&&(q=n.RG16UI),V===n.UNSIGNED_INT&&(q=n.RG32UI),V===n.BYTE&&(q=n.RG8I),V===n.SHORT&&(q=n.RG16I),V===n.INT&&(q=n.RG32I)),M===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.RGB8UI),V===n.UNSIGNED_SHORT&&(q=n.RGB16UI),V===n.UNSIGNED_INT&&(q=n.RGB32UI),V===n.BYTE&&(q=n.RGB8I),V===n.SHORT&&(q=n.RGB16I),V===n.INT&&(q=n.RGB32I)),M===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),V===n.UNSIGNED_INT&&(q=n.RGBA32UI),V===n.BYTE&&(q=n.RGBA8I),V===n.SHORT&&(q=n.RGBA16I),V===n.INT&&(q=n.RGBA32I)),M===n.RGB&&(V===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),M===n.RGBA){const Et=j?us:Jt.getTransfer($);V===n.FLOAT&&(q=n.RGBA32F),V===n.HALF_FLOAT&&(q=n.RGBA16F),V===n.UNSIGNED_BYTE&&(q=Et===ie?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function S(D,M){let V;return D?M===null||M===pi||M===dr?V=n.DEPTH24_STENCIL8:M===_n?V=n.DEPTH32F_STENCIL8:M===hr&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===pi||M===dr?V=n.DEPTH_COMPONENT24:M===_n?V=n.DEPTH_COMPONENT32F:M===hr&&(V=n.DEPTH_COMPONENT16),V}function L(D,M){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==De&&D.minFilter!==gn?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function E(D){const M=D.target;M.removeEventListener("dispose",E),C(M),M.isVideoTexture&&u.delete(M)}function A(D){const M=D.target;M.removeEventListener("dispose",A),g(M)}function C(D){const M=i.get(D);if(M.__webglInit===void 0)return;const V=D.source,$=h.get(V);if($){const j=$[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&v(D),Object.keys($).length===0&&h.delete(V)}i.remove(D)}function v(D){const M=i.get(D);n.deleteTexture(M.__webglTexture);const V=D.source,$=h.get(V);delete $[M.__cacheKey],o.memory.textures--}function g(D){const M=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let j=0;j<M.__webglFramebuffer[$].length;j++)n.deleteFramebuffer(M.__webglFramebuffer[$][j]);else n.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)n.deleteFramebuffer(M.__webglFramebuffer[$]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=D.textures;for(let $=0,j=V.length;$<j;$++){const q=i.get(V[$]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(V[$])}i.remove(D)}let w=0;function P(){w=0}function R(){const D=w;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),w+=1,D}function F(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function U(D,M){const V=i.get(D);if(D.isVideoTexture&&Ht(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&V.__version!==D.version){const $=D.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(V,D,M);return}}else D.isExternalTexture&&(V.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+M)}function N(D,M){const V=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){Y(V,D,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+M)}function G(D,M){const V=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){Y(V,D,M);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+M)}function H(D,M){const V=i.get(D);if(D.version>0&&V.__version!==D.version){Z(V,D,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+M)}const J={[Ro]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[Co]:n.MIRRORED_REPEAT},it={[De]:n.NEAREST,[th]:n.NEAREST_MIPMAP_NEAREST,[Tr]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[Rs]:n.LINEAR_MIPMAP_NEAREST,[fi]:n.LINEAR_MIPMAP_LINEAR},ft={[rh]:n.NEVER,[uh]:n.ALWAYS,[sh]:n.LESS,[bl]:n.LEQUAL,[oh]:n.EQUAL,[lh]:n.GEQUAL,[ah]:n.GREATER,[ch]:n.NOTEQUAL};function wt(D,M){if(M.type===_n&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===gn||M.magFilter===Rs||M.magFilter===Tr||M.magFilter===fi||M.minFilter===gn||M.minFilter===Rs||M.minFilter===Tr||M.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,J[M.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,J[M.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,J[M.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,it[M.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,it[M.minFilter]),M.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,ft[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===De||M.minFilter!==Tr&&M.minFilter!==fi||M.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(D,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Zt(D,M){let V=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",E));const $=M.source;let j=h.get($);j===void 0&&(j={},h.set($,j));const q=F(M);if(q!==D.__cacheKey){j[q]===void 0&&(j[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),j[q].usedTimes++;const Et=j[D.__cacheKey];Et!==void 0&&(j[D.__cacheKey].usedTimes--,Et.usedTimes===0&&v(M)),D.__cacheKey=q,D.__webglTexture=j[q].texture}return V}function rt(D,M,V){return Math.floor(Math.floor(D/V)/M)}function Ct(D,M,V,$){const q=D.updateRanges;if(q.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,V,$,M.data);else{q.sort((et,ht)=>et.start-ht.start);let Et=0;for(let et=1;et<q.length;et++){const ht=q[Et],Pt=q[et],yt=ht.start+ht.count,ct=rt(Pt.start,M.width,4),Bt=rt(ht.start,M.width,4);Pt.start<=yt+1&&ct===Bt&&rt(Pt.start+Pt.count-1,M.width,4)===ct?ht.count=Math.max(ht.count,Pt.start+Pt.count-ht.start):(++Et,q[Et]=Pt)}q.length=Et+1;const st=n.getParameter(n.UNPACK_ROW_LENGTH),Mt=n.getParameter(n.UNPACK_SKIP_PIXELS),St=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let et=0,ht=q.length;et<ht;et++){const Pt=q[et],yt=Math.floor(Pt.start/4),ct=Math.ceil(Pt.count/4),Bt=yt%M.width,O=Math.floor(yt/M.width),nt=ct,ot=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Bt),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),e.texSubImage2D(n.TEXTURE_2D,0,Bt,O,nt,ot,V,$,M.data)}D.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,st),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Mt),n.pixelStorei(n.UNPACK_SKIP_ROWS,St)}}function Y(D,M,V){let $=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=n.TEXTURE_3D);const j=Zt(D,M),q=M.source;e.bindTexture($,D.__webglTexture,n.TEXTURE0+V);const Et=i.get(q);if(q.version!==Et.__version||j===!0){e.activeTexture(n.TEXTURE0+V);const st=Jt.getPrimaries(Jt.workingColorSpace),Mt=M.colorSpace===In?null:Jt.getPrimaries(M.colorSpace),St=M.colorSpace===In||st===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let et=x(M.image,!1,r.maxTextureSize);et=Pe(M,et);const ht=s.convert(M.format,M.colorSpace),Pt=s.convert(M.type);let yt=T(M.internalFormat,ht,Pt,M.colorSpace,M.isVideoTexture);wt($,M);let ct;const Bt=M.mipmaps,O=M.isVideoTexture!==!0,nt=Et.__version===void 0||j===!0,ot=q.dataReady,mt=L(M,et);if(M.isDepthTexture)yt=S(M.format===pr,M.type),nt&&(O?e.texStorage2D(n.TEXTURE_2D,1,yt,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,yt,et.width,et.height,0,ht,Pt,null));else if(M.isDataTexture)if(Bt.length>0){O&&nt&&e.texStorage2D(n.TEXTURE_2D,mt,yt,Bt[0].width,Bt[0].height);for(let Q=0,K=Bt.length;Q<K;Q++)ct=Bt[Q],O?ot&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ct.width,ct.height,ht,Pt,ct.data):e.texImage2D(n.TEXTURE_2D,Q,yt,ct.width,ct.height,0,ht,Pt,ct.data);M.generateMipmaps=!1}else O?(nt&&e.texStorage2D(n.TEXTURE_2D,mt,yt,et.width,et.height),ot&&Ct(M,et,ht,Pt)):e.texImage2D(n.TEXTURE_2D,0,yt,et.width,et.height,0,ht,Pt,et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){O&&nt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,yt,Bt[0].width,Bt[0].height,et.depth);for(let Q=0,K=Bt.length;Q<K;Q++)if(ct=Bt[Q],M.format!==dn)if(ht!==null)if(O){if(ot)if(M.layerUpdates.size>0){const _t=gc(ct.width,ct.height,M.format,M.type);for(const Ot of M.layerUpdates){const ae=ct.data.subarray(Ot*_t/ct.data.BYTES_PER_ELEMENT,(Ot+1)*_t/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Ot,ct.width,ct.height,1,ht,ae)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ct.width,ct.height,et.depth,ht,ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,yt,ct.width,ct.height,et.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ot&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ct.width,ct.height,et.depth,ht,Pt,ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,yt,ct.width,ct.height,et.depth,0,ht,Pt,ct.data)}else{O&&nt&&e.texStorage2D(n.TEXTURE_2D,mt,yt,Bt[0].width,Bt[0].height);for(let Q=0,K=Bt.length;Q<K;Q++)ct=Bt[Q],M.format!==dn?ht!==null?O?ot&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ct.width,ct.height,ht,ct.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,yt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ot&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ct.width,ct.height,ht,Pt,ct.data):e.texImage2D(n.TEXTURE_2D,Q,yt,ct.width,ct.height,0,ht,Pt,ct.data)}else if(M.isDataArrayTexture)if(O){if(nt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,yt,et.width,et.height,et.depth),ot)if(M.layerUpdates.size>0){const Q=gc(et.width,et.height,M.format,M.type);for(const K of M.layerUpdates){const _t=et.data.subarray(K*Q/et.data.BYTES_PER_ELEMENT,(K+1)*Q/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,ht,Pt,_t)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ht,Pt,et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,yt,et.width,et.height,et.depth,0,ht,Pt,et.data);else if(M.isData3DTexture)O?(nt&&e.texStorage3D(n.TEXTURE_3D,mt,yt,et.width,et.height,et.depth),ot&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ht,Pt,et.data)):e.texImage3D(n.TEXTURE_3D,0,yt,et.width,et.height,et.depth,0,ht,Pt,et.data);else if(M.isFramebufferTexture){if(nt)if(O)e.texStorage2D(n.TEXTURE_2D,mt,yt,et.width,et.height);else{let Q=et.width,K=et.height;for(let _t=0;_t<mt;_t++)e.texImage2D(n.TEXTURE_2D,_t,yt,Q,K,0,ht,Pt,null),Q>>=1,K>>=1}}else if(Bt.length>0){if(O&&nt){const Q=ve(Bt[0]);e.texStorage2D(n.TEXTURE_2D,mt,yt,Q.width,Q.height)}for(let Q=0,K=Bt.length;Q<K;Q++)ct=Bt[Q],O?ot&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ht,Pt,ct):e.texImage2D(n.TEXTURE_2D,Q,yt,ht,Pt,ct);M.generateMipmaps=!1}else if(O){if(nt){const Q=ve(et);e.texStorage2D(n.TEXTURE_2D,mt,yt,Q.width,Q.height)}ot&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht,Pt,et)}else e.texImage2D(n.TEXTURE_2D,0,yt,ht,Pt,et);m(M)&&p($),Et.__version=q.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Z(D,M,V){if(M.image.length!==6)return;const $=Zt(D,M),j=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+V);const q=i.get(j);if(j.version!==q.__version||$===!0){e.activeTexture(n.TEXTURE0+V);const Et=Jt.getPrimaries(Jt.workingColorSpace),st=M.colorSpace===In?null:Jt.getPrimaries(M.colorSpace),Mt=M.colorSpace===In||Et===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const St=M.isCompressedTexture||M.image[0].isCompressedTexture,et=M.image[0]&&M.image[0].isDataTexture,ht=[];for(let K=0;K<6;K++)!St&&!et?ht[K]=x(M.image[K],!0,r.maxCubemapSize):ht[K]=et?M.image[K].image:M.image[K],ht[K]=Pe(M,ht[K]);const Pt=ht[0],yt=s.convert(M.format,M.colorSpace),ct=s.convert(M.type),Bt=T(M.internalFormat,yt,ct,M.colorSpace),O=M.isVideoTexture!==!0,nt=q.__version===void 0||$===!0,ot=j.dataReady;let mt=L(M,Pt);wt(n.TEXTURE_CUBE_MAP,M);let Q;if(St){O&&nt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Bt,Pt.width,Pt.height);for(let K=0;K<6;K++){Q=ht[K].mipmaps;for(let _t=0;_t<Q.length;_t++){const Ot=Q[_t];M.format!==dn?yt!==null?O?ot&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,Ot.width,Ot.height,yt,Ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Bt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,Ot.width,Ot.height,yt,ct,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Bt,Ot.width,Ot.height,0,yt,ct,Ot.data)}}}else{if(Q=M.mipmaps,O&&nt){Q.length>0&&mt++;const K=ve(ht[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Bt,K.width,K.height)}for(let K=0;K<6;K++)if(et){O?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ht[K].width,ht[K].height,yt,ct,ht[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Bt,ht[K].width,ht[K].height,0,yt,ct,ht[K].data);for(let _t=0;_t<Q.length;_t++){const ae=Q[_t].image[K].image;O?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,ae.width,ae.height,yt,ct,ae.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Bt,ae.width,ae.height,0,yt,ct,ae.data)}}else{O?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,yt,ct,ht[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Bt,yt,ct,ht[K]);for(let _t=0;_t<Q.length;_t++){const Ot=Q[_t];O?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,yt,ct,Ot.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Bt,yt,ct,Ot.image[K])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),q.__version=j.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function dt(D,M,V,$,j,q){const Et=s.convert(V.format,V.colorSpace),st=s.convert(V.type),Mt=T(V.internalFormat,Et,st,V.colorSpace),St=i.get(M),et=i.get(V);if(et.__renderTarget=M,!St.__hasExternalTextures){const ht=Math.max(1,M.width>>q),Pt=Math.max(1,M.height>>q);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,q,Mt,ht,Pt,M.depth,0,Et,st,null):e.texImage2D(j,q,Mt,ht,Pt,0,Et,st,null)}e.bindFramebuffer(n.FRAMEBUFFER,D),vt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,j,et.__webglTexture,0,fe(M)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,j,et.__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(D,M,V){if(n.bindRenderbuffer(n.RENDERBUFFER,D),M.depthBuffer){const $=M.depthTexture,j=$&&$.isDepthTexture?$.type:null,q=S(M.stencilBuffer,j),Et=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=fe(M);vt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st,q,M.width,M.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,st,q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,D)}else{const $=M.textures;for(let j=0;j<$.length;j++){const q=$[j],Et=s.convert(q.format,q.colorSpace),st=s.convert(q.type),Mt=T(q.internalFormat,Et,st,q.colorSpace),St=fe(M);V&&vt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,Mt,M.width,M.height):vt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,Mt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Tt(D,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),U(M.depthTexture,0);const j=$.__webglTexture,q=fe(M);if(M.depthTexture.format===fr)vt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(M.depthTexture.format===pr)vt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function $t(D){const M=i.get(D),V=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const $=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=$}if(D.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const $=D.texture.mipmaps;$&&$.length>0?Tt(M.__webglFramebuffer[0],D):Tt(M.__webglFramebuffer,D)}else if(V){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=n.createRenderbuffer(),Lt(M.__webglDepthbuffer[$],D,!1);else{const j=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,q)}}else{const $=D.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Lt(M.__webglDepthbuffer,D,!1);else{const j=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,q)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(D,M,V){const $=i.get(D);M!==void 0&&dt($.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&$t(D)}function I(D){const M=D.texture,V=i.get(D),$=i.get(M);D.addEventListener("dispose",A);const j=D.textures,q=D.isWebGLCubeRenderTarget===!0,Et=j.length>1;if(Et||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=M.version,o.memory.textures++),q){V.__webglFramebuffer=[];for(let st=0;st<6;st++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[st]=[];for(let Mt=0;Mt<M.mipmaps.length;Mt++)V.__webglFramebuffer[st][Mt]=n.createFramebuffer()}else V.__webglFramebuffer[st]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let st=0;st<M.mipmaps.length;st++)V.__webglFramebuffer[st]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Et)for(let st=0,Mt=j.length;st<Mt;st++){const St=i.get(j[st]);St.__webglTexture===void 0&&(St.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&vt(D)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let st=0;st<j.length;st++){const Mt=j[st];V.__webglColorRenderbuffer[st]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[st]);const St=s.convert(Mt.format,Mt.colorSpace),et=s.convert(Mt.type),ht=T(Mt.internalFormat,St,et,Mt.colorSpace,D.isXRRenderTarget===!0),Pt=fe(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,ht,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,V.__webglColorRenderbuffer[st])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Lt(V.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),wt(n.TEXTURE_CUBE_MAP,M);for(let st=0;st<6;st++)if(M.mipmaps&&M.mipmaps.length>0)for(let Mt=0;Mt<M.mipmaps.length;Mt++)dt(V.__webglFramebuffer[st][Mt],D,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Mt);else dt(V.__webglFramebuffer[st],D,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(M)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let st=0,Mt=j.length;st<Mt;st++){const St=j[st],et=i.get(St);let ht=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ht=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,et.__webglTexture),wt(ht,St),dt(V.__webglFramebuffer,D,St,n.COLOR_ATTACHMENT0+st,ht,0),m(St)&&p(ht)}e.unbindTexture()}else{let st=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(st=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,$.__webglTexture),wt(st,M),M.mipmaps&&M.mipmaps.length>0)for(let Mt=0;Mt<M.mipmaps.length;Mt++)dt(V.__webglFramebuffer[Mt],D,M,n.COLOR_ATTACHMENT0,st,Mt);else dt(V.__webglFramebuffer,D,M,n.COLOR_ATTACHMENT0,st,0);m(M)&&p(st),e.unbindTexture()}D.depthBuffer&&$t(D)}function de(D){const M=D.textures;for(let V=0,$=M.length;V<$;V++){const j=M[V];if(m(j)){const q=y(D),Et=i.get(j).__webglTexture;e.bindTexture(q,Et),p(q),e.unbindTexture()}}}const zt=[],Dt=[];function xt(D){if(D.samples>0){if(vt(D)===!1){const M=D.textures,V=D.width,$=D.height;let j=n.COLOR_BUFFER_BIT;const q=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=i.get(D),st=M.length>1;if(st)for(let St=0;St<M.length;St++)e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const Mt=D.texture.mipmaps;Mt&&Mt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let St=0;St<M.length;St++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),st){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Et.__webglColorRenderbuffer[St]);const et=i.get(M[St]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,et,0)}n.blitFramebuffer(0,0,V,$,0,0,V,$,j,n.NEAREST),c===!0&&(zt.length=0,Dt.length=0,zt.push(n.COLOR_ATTACHMENT0+St),D.depthBuffer&&D.resolveDepthBuffer===!1&&(zt.push(q),Dt.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Dt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),st)for(let St=0;St<M.length;St++){e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,Et.__webglColorRenderbuffer[St]);const et=i.get(M[St]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,et,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const M=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function fe(D){return Math.min(r.maxSamples,D.samples)}function vt(D){const M=i.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ht(D){const M=o.render.frame;u.get(D)!==M&&(u.set(D,M),D.update())}function Pe(D,M){const V=D.colorSpace,$=D.format,j=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||V!==Xi&&V!==In&&(Jt.getTransfer(V)===ie?($!==dn||j!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function ve(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=R,this.resetTextureUnits=P,this.setTexture2D=U,this.setTexture2DArray=N,this.setTexture3D=G,this.setTextureCube=H,this.rebindTextures=Ne,this.setupRenderTarget=I,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=vt}function kg(n,t){function e(i,r=In){let s;const o=Jt.getTransfer(r);if(i===Sn)return n.UNSIGNED_BYTE;if(i===ma)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ga)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ml)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===_l)return n.BYTE;if(i===xl)return n.SHORT;if(i===hr)return n.UNSIGNED_SHORT;if(i===pa)return n.INT;if(i===pi)return n.UNSIGNED_INT;if(i===_n)return n.FLOAT;if(i===xr)return n.HALF_FLOAT;if(i===Sl)return n.ALPHA;if(i===yl)return n.RGB;if(i===dn)return n.RGBA;if(i===fr)return n.DEPTH_COMPONENT;if(i===pr)return n.DEPTH_STENCIL;if(i===_s)return n.RED;if(i===_a)return n.RED_INTEGER;if(i===El)return n.RG;if(i===xa)return n.RG_INTEGER;if(i===va)return n.RGBA_INTEGER;if(i===ts||i===es||i===ns||i===is)if(o===ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ts)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ts)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===es)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ns)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===is)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Po||i===Lo||i===Do||i===Io)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Po)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Do)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Io)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Uo||i===No||i===Fo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Uo||i===No)return o===ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Fo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Oo||i===zo||i===Bo||i===ko||i===Ho||i===Vo||i===Go||i===Wo||i===Xo||i===qo||i===Yo||i===$o||i===Ko||i===Zo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Oo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ko)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ho)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Go)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$o)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ko)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jo||i===Jo||i===Qo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===jo)return o===ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ta||i===ea||i===na||i===ia)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ta)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ea)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===na)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ia)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vg=`
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

}`;class Gg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Ol(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Zn({vertexShader:Hg,fragmentShader:Vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new Sr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wg extends $i{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,_=null;const x=typeof XRWebGLBinding<"u",m=new Gg,p={},y=e.getContextAttributes();let T=null,S=null;const L=[],E=[],A=new Wt;let C=null;const v=new sn;v.viewport=new xe;const g=new sn;g.viewport=new xe;const w=[v,g],P=new ud;let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=L[Y];return Z===void 0&&(Z=new Ks,L[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=L[Y];return Z===void 0&&(Z=new Ks,L[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=L[Y];return Z===void 0&&(Z=new Ks,L[Y]=Z),Z.getHandSpace()};function U(Y){const Z=E.indexOf(Y.inputSource);if(Z===-1)return;const dt=L[Z];dt!==void 0&&(dt.update(Y.inputSource,Y.frame,l||o),dt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",G);for(let Y=0;Y<L.length;Y++){const Z=E[Y];Z!==null&&(E[Y]=null,L[Y].disconnect(Z))}R=null,F=null,m.reset();for(const Y in p)delete p[Y];t.setRenderTarget(T),f=null,h=null,d=null,r=null,S=null,Ct.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(T=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",N),r.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Lt=null,Tt=null;y.depth&&(Tt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=y.stencil?pr:fr,Lt=y.stencil?dr:pi);const $t={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer($t),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new Kn(h.textureWidth,h.textureHeight,{format:dn,type:Sn,depthTexture:new Fl(h.textureWidth,h.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const dt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,dt),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Kn(f.framebufferWidth,f.framebufferHeight,{format:dn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Ct.setContext(r),Ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(Y){for(let Z=0;Z<Y.removed.length;Z++){const dt=Y.removed[Z],Lt=E.indexOf(dt);Lt>=0&&(E[Lt]=null,L[Lt].disconnect(dt))}for(let Z=0;Z<Y.added.length;Z++){const dt=Y.added[Z];let Lt=E.indexOf(dt);if(Lt===-1){for(let $t=0;$t<L.length;$t++)if($t>=E.length){E.push(dt),Lt=$t;break}else if(E[$t]===null){E[$t]=dt,Lt=$t;break}if(Lt===-1)break}const Tt=L[Lt];Tt&&Tt.connect(dt)}}const H=new z,J=new z;function it(Y,Z,dt){H.setFromMatrixPosition(Z.matrixWorld),J.setFromMatrixPosition(dt.matrixWorld);const Lt=H.distanceTo(J),Tt=Z.projectionMatrix.elements,$t=dt.projectionMatrix.elements,Ne=Tt[14]/(Tt[10]-1),I=Tt[14]/(Tt[10]+1),de=(Tt[9]+1)/Tt[5],zt=(Tt[9]-1)/Tt[5],Dt=(Tt[8]-1)/Tt[0],xt=($t[8]+1)/$t[0],fe=Ne*Dt,vt=Ne*xt,Ht=Lt/(-Dt+xt),Pe=Ht*-Dt;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Pe),Y.translateZ(Ht),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Tt[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ve=Ne+Ht,D=I+Ht,M=fe-Pe,V=vt+(Lt-Pe),$=de*I/D*ve,j=zt*I/D*ve;Y.projectionMatrix.makePerspective(M,V,$,j,ve,D),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ft(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let Z=Y.near,dt=Y.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),P.near=g.near=v.near=Z,P.far=g.far=v.far=dt,(R!==P.near||F!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),R=P.near,F=P.far),P.layers.mask=Y.layers.mask|6,v.layers.mask=P.layers.mask&3,g.layers.mask=P.layers.mask&5;const Lt=Y.parent,Tt=P.cameras;ft(P,Lt);for(let $t=0;$t<Tt.length;$t++)ft(Tt[$t],Lt);Tt.length===2?it(P,v,g):P.projectionMatrix.copy(v.projectionMatrix),wt(Y,P,Lt)};function wt(Y,Z,dt){dt===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(dt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=mr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(Y){c=Y,h!==null&&(h.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(Y){return p[Y]};let Zt=null;function rt(Y,Z){if(u=Z.getViewerPose(l||o),_=Z,u!==null){const dt=u.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Lt=!1;dt.length!==P.cameras.length&&(P.cameras.length=0,Lt=!0);for(let I=0;I<dt.length;I++){const de=dt[I];let zt=null;if(f!==null)zt=f.getViewport(de);else{const xt=d.getViewSubImage(h,de);zt=xt.viewport,I===0&&(t.setRenderTargetTextures(S,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(S))}let Dt=w[I];Dt===void 0&&(Dt=new sn,Dt.layers.enable(I),Dt.viewport=new xe,w[I]=Dt),Dt.matrix.fromArray(de.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(de.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(zt.x,zt.y,zt.width,zt.height),I===0&&(P.matrix.copy(Dt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Lt===!0&&P.cameras.push(Dt)}const Tt=r.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();const I=d.getDepthInformation(dt[0]);I&&I.isValid&&I.texture&&m.init(I,r.renderState)}if(Tt&&Tt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let I=0;I<dt.length;I++){const de=dt[I].camera;if(de){let zt=p[de];zt||(zt=new Ol,p[de]=zt);const Dt=d.getCameraImage(de);zt.sourceTexture=Dt}}}}for(let dt=0;dt<L.length;dt++){const Lt=E[dt],Tt=L[dt];Lt!==null&&Tt!==void 0&&Tt.update(Lt,Z,l||o)}Zt&&Zt(Y,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const Ct=new Bl;Ct.setAnimationLoop(rt),this.setAnimationLoop=function(Y){Zt=Y},this.dispose=function(){}}}const ri=new On,Xg=new ce;function qg(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Dl(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,T,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),T=y.envMap,S=y.envMapRotation;T&&(m.envMap.value=T,ri.copy(S),ri.x*=-1,ri.y*=-1,ri.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),m.envMapRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(ri)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Yg(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,T){const S=T.program;i.uniformBlockBinding(y,S)}function l(y,T){let S=r[y.id];S===void 0&&(_(y),S=u(y),r[y.id]=S,y.addEventListener("dispose",m));const L=T.program;i.updateUBOMapping(y,L);const E=t.render.frame;s[y.id]!==E&&(h(y),s[y.id]=E)}function u(y){const T=d();y.__bindingPointIndex=T;const S=n.createBuffer(),L=y.__size,E=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,L,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,S),S}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const T=r[y.id],S=y.uniforms,L=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let E=0,A=S.length;E<A;E++){const C=Array.isArray(S[E])?S[E]:[S[E]];for(let v=0,g=C.length;v<g;v++){const w=C[v];if(f(w,E,v,L)===!0){const P=w.__offset,R=Array.isArray(w.value)?w.value:[w.value];let F=0;for(let U=0;U<R.length;U++){const N=R[U],G=x(N);typeof N=="number"||typeof N=="boolean"?(w.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,P+F,w.__data)):N.isMatrix3?(w.__data[0]=N.elements[0],w.__data[1]=N.elements[1],w.__data[2]=N.elements[2],w.__data[3]=0,w.__data[4]=N.elements[3],w.__data[5]=N.elements[4],w.__data[6]=N.elements[5],w.__data[7]=0,w.__data[8]=N.elements[6],w.__data[9]=N.elements[7],w.__data[10]=N.elements[8],w.__data[11]=0):(N.toArray(w.__data,F),F+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,T,S,L){const E=y.value,A=T+"_"+S;if(L[A]===void 0)return typeof E=="number"||typeof E=="boolean"?L[A]=E:L[A]=E.clone(),!0;{const C=L[A];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return L[A]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function _(y){const T=y.uniforms;let S=0;const L=16;for(let A=0,C=T.length;A<C;A++){const v=Array.isArray(T[A])?T[A]:[T[A]];for(let g=0,w=v.length;g<w;g++){const P=v[g],R=Array.isArray(P.value)?P.value:[P.value];for(let F=0,U=R.length;F<U;F++){const N=R[F],G=x(N),H=S%L,J=H%G.boundary,it=H+J;S+=J,it!==0&&L-it<G.storage&&(S+=L-it),P.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=S,S+=G.storage}}}const E=S%L;return E>0&&(S+=L-E),y.__size=S,y.__cache={},this}function x(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),T}function m(y){const T=y.target;T.removeEventListener("dispose",m);const S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class $g{constructor(t={}){const{canvas:e=Rh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const y=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let L=!1;this._outputColorSpace=$e;let E=0,A=0,C=null,v=-1,g=null;const w=new xe,P=new xe;let R=null;const F=new Gt(0);let U=0,N=e.width,G=e.height,H=1,J=null,it=null;const ft=new xe(0,0,N,G),wt=new xe(0,0,N,G);let Zt=!1;const rt=new Ea;let Ct=!1,Y=!1;const Z=new ce,dt=new z,Lt=new xe,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function Ne(){return C===null?H:1}let I=i;function de(b,B){return e.getContext(b,B)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fa}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",Q,!1),I===null){const B="webgl2";if(I=de(B,b),I===null)throw de(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let zt,Dt,xt,fe,vt,Ht,Pe,ve,D,M,V,$,j,q,Et,st,Mt,St,et,ht,Pt,yt,ct,Bt;function O(){zt=new rm(I),zt.init(),yt=new kg(I,zt),Dt=new jp(I,zt,t,yt),xt=new zg(I,zt),Dt.reversedDepthBuffer&&h&&xt.buffers.depth.setReversed(!0),fe=new am(I),vt=new bg,Ht=new Bg(I,zt,xt,vt,Dt,yt,fe),Pe=new Qp(S),ve=new im(S),D=new dd(I),ct=new Kp(I,D),M=new sm(I,D,fe,ct),V=new lm(I,M,D,fe),et=new cm(I,Dt,Ht),st=new Jp(vt),$=new Tg(S,Pe,ve,zt,Dt,ct,st),j=new qg(S,vt),q=new wg,Et=new Ig(zt),St=new $p(S,Pe,ve,xt,V,f,c),Mt=new Fg(S,V,Dt),Bt=new Yg(I,fe,Dt,xt),ht=new Zp(I,zt,fe),Pt=new om(I,zt,fe),fe.programs=$.programs,S.capabilities=Dt,S.extensions=zt,S.properties=vt,S.renderLists=q,S.shadowMap=Mt,S.state=xt,S.info=fe}O();const nt=new Wg(S,I);this.xr=nt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=zt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=zt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(N,G,!1))},this.getSize=function(b){return b.set(N,G)},this.setSize=function(b,B,W=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,G=B,e.width=Math.floor(b*H),e.height=Math.floor(B*H),W===!0&&(e.style.width=b+"px",e.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(N*H,G*H).floor()},this.setDrawingBufferSize=function(b,B,W){N=b,G=B,H=W,e.width=Math.floor(b*W),e.height=Math.floor(B*W),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(ft)},this.setViewport=function(b,B,W,X){b.isVector4?ft.set(b.x,b.y,b.z,b.w):ft.set(b,B,W,X),xt.viewport(w.copy(ft).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(wt)},this.setScissor=function(b,B,W,X){b.isVector4?wt.set(b.x,b.y,b.z,b.w):wt.set(b,B,W,X),xt.scissor(P.copy(wt).multiplyScalar(H).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(b){xt.setScissorTest(Zt=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){it=b},this.getClearColor=function(b){return b.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,W=!0){let X=0;if(b){let k=!1;if(C!==null){const tt=C.texture.format;k=tt===va||tt===xa||tt===_a}if(k){const tt=C.texture.type,ut=tt===Sn||tt===pi||tt===hr||tt===dr||tt===ma||tt===ga,gt=St.getClearColor(),pt=St.getClearAlpha(),Rt=gt.r,It=gt.g,bt=gt.b;ut?(_[0]=Rt,_[1]=It,_[2]=bt,_[3]=pt,I.clearBufferuiv(I.COLOR,0,_)):(x[0]=Rt,x[1]=It,x[2]=bt,x[3]=pt,I.clearBufferiv(I.COLOR,0,x))}else X|=I.COLOR_BUFFER_BIT}B&&(X|=I.DEPTH_BUFFER_BIT),W&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),St.dispose(),q.dispose(),Et.dispose(),vt.dispose(),Pe.dispose(),ve.dispose(),V.dispose(),ct.dispose(),Bt.dispose(),$.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",fn),nt.removeEventListener("sessionend",Da),jn.stop()};function ot(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const b=fe.autoReset,B=Mt.enabled,W=Mt.autoUpdate,X=Mt.needsUpdate,k=Mt.type;O(),fe.autoReset=b,Mt.enabled=B,Mt.autoUpdate=W,Mt.needsUpdate=X,Mt.type=k}function Q(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function K(b){const B=b.target;B.removeEventListener("dispose",K),_t(B)}function _t(b){Ot(b),vt.remove(b)}function Ot(b){const B=vt.get(b).programs;B!==void 0&&(B.forEach(function(W){$.releaseProgram(W)}),b.isShaderMaterial&&$.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,W,X,k,tt){B===null&&(B=Tt);const ut=k.isMesh&&k.matrixWorld.determinant()<0,gt=xu(b,B,W,X,k);xt.setMaterial(X,ut);let pt=W.index,Rt=1;if(X.wireframe===!0){if(pt=M.getWireframeAttribute(W),pt===void 0)return;Rt=2}const It=W.drawRange,bt=W.attributes.position;let Xt=It.start*Rt,ne=(It.start+It.count)*Rt;tt!==null&&(Xt=Math.max(Xt,tt.start*Rt),ne=Math.min(ne,(tt.start+tt.count)*Rt)),pt!==null?(Xt=Math.max(Xt,0),ne=Math.min(ne,pt.count)):bt!=null&&(Xt=Math.max(Xt,0),ne=Math.min(ne,bt.count));const _e=ne-Xt;if(_e<0||_e===1/0)return;ct.setup(k,X,gt,W,pt);let le,se=ht;if(pt!==null&&(le=D.get(pt),se=Pt,se.setIndex(le)),k.isMesh)X.wireframe===!0?(xt.setLineWidth(X.wireframeLinewidth*Ne()),se.setMode(I.LINES)):se.setMode(I.TRIANGLES);else if(k.isLine){let At=X.linewidth;At===void 0&&(At=1),xt.setLineWidth(At*Ne()),k.isLineSegments?se.setMode(I.LINES):k.isLineLoop?se.setMode(I.LINE_LOOP):se.setMode(I.LINE_STRIP)}else k.isPoints?se.setMode(I.POINTS):k.isSprite&&se.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),se.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))se.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const At=k._multiDrawStarts,me=k._multiDrawCounts,jt=k._multiDrawCount,je=pt?D.get(pt).bytesPerElement:1,xi=vt.get(X).currentProgram.getUniforms();for(let Je=0;Je<jt;Je++)xi.setValue(I,"_gl_DrawID",Je),se.render(At[Je]/je,me[Je])}else if(k.isInstancedMesh)se.renderInstances(Xt,_e,k.count);else if(W.isInstancedBufferGeometry){const At=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,me=Math.min(W.instanceCount,At);se.renderInstances(Xt,_e,me)}else se.render(Xt,_e)};function ae(b,B,W){b.transparent===!0&&b.side===Dn&&b.forceSinglePass===!1?(b.side=We,b.needsUpdate=!0,Er(b,B,W),b.side=$n,b.needsUpdate=!0,Er(b,B,W),b.side=Dn):Er(b,B,W)}this.compile=function(b,B,W=null){W===null&&(W=b),p=Et.get(W),p.init(B),T.push(p),W.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),b!==W&&b.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const X=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const tt=k.material;if(tt)if(Array.isArray(tt))for(let ut=0;ut<tt.length;ut++){const gt=tt[ut];ae(gt,W,k),X.add(gt)}else ae(tt,W,k),X.add(tt)}),p=T.pop(),X},this.compileAsync=function(b,B,W=null){const X=this.compile(b,B,W);return new Promise(k=>{function tt(){if(X.forEach(function(ut){vt.get(ut).currentProgram.isReady()&&X.delete(ut)}),X.size===0){k(b);return}setTimeout(tt,10)}zt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Qt=null;function yn(b){Qt&&Qt(b)}function fn(){jn.stop()}function Da(){jn.start()}const jn=new Bl;jn.setAnimationLoop(yn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(b){Qt=b,nt.setAnimationLoop(b),b===null?jn.stop():jn.start()},nt.addEventListener("sessionstart",fn),nt.addEventListener("sessionend",Da),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(B),B=nt.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,B,C),p=Et.get(b,T.length),p.init(B),T.push(p),Z.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),rt.setFromProjectionMatrix(Z,xn,B.reversedDepth),Y=this.localClippingEnabled,Ct=st.init(this.clippingPlanes,Y),m=q.get(b,y.length),m.init(),y.push(m),nt.enabled===!0&&nt.isPresenting===!0){const tt=S.xr.getDepthSensingMesh();tt!==null&&As(tt,B,-1/0,S.sortObjects)}As(b,B,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(J,it),$t=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,$t&&St.addToRenderList(m,b),this.info.render.frame++,Ct===!0&&st.beginShadows();const W=p.state.shadowsArray;Mt.render(W,b,B),Ct===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,k=m.transmissive;if(p.setupLights(),B.isArrayCamera){const tt=B.cameras;if(k.length>0)for(let ut=0,gt=tt.length;ut<gt;ut++){const pt=tt[ut];Ua(X,k,b,pt)}$t&&St.render(b);for(let ut=0,gt=tt.length;ut<gt;ut++){const pt=tt[ut];Ia(m,b,pt,pt.viewport)}}else k.length>0&&Ua(X,k,b,B),$t&&St.render(b),Ia(m,b,B);C!==null&&A===0&&(Ht.updateMultisampleRenderTarget(C),Ht.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(S,b,B),ct.resetDefaultState(),v=-1,g=null,T.pop(),T.length>0?(p=T[T.length-1],Ct===!0&&st.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function As(b,B,W,X){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||rt.intersectsSprite(b)){X&&Lt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Z);const ut=V.update(b),gt=b.material;gt.visible&&m.push(b,ut,gt,W,Lt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||rt.intersectsObject(b))){const ut=V.update(b),gt=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Lt.copy(b.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Lt.copy(ut.boundingSphere.center)),Lt.applyMatrix4(b.matrixWorld).applyMatrix4(Z)),Array.isArray(gt)){const pt=ut.groups;for(let Rt=0,It=pt.length;Rt<It;Rt++){const bt=pt[Rt],Xt=gt[bt.materialIndex];Xt&&Xt.visible&&m.push(b,ut,Xt,W,Lt.z,bt)}}else gt.visible&&m.push(b,ut,gt,W,Lt.z,null)}}const tt=b.children;for(let ut=0,gt=tt.length;ut<gt;ut++)As(tt[ut],B,W,X)}function Ia(b,B,W,X){const k=b.opaque,tt=b.transmissive,ut=b.transparent;p.setupLightsView(W),Ct===!0&&st.setGlobalState(S.clippingPlanes,W),X&&xt.viewport(w.copy(X)),k.length>0&&yr(k,B,W),tt.length>0&&yr(tt,B,W),ut.length>0&&yr(ut,B,W),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Ua(b,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Kn(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?xr:Sn,minFilter:fi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const tt=p.state.transmissionRenderTarget[X.id],ut=X.viewport||w;tt.setSize(ut.z*S.transmissionResolutionScale,ut.w*S.transmissionResolutionScale);const gt=S.getRenderTarget(),pt=S.getActiveCubeFace(),Rt=S.getActiveMipmapLevel();S.setRenderTarget(tt),S.getClearColor(F),U=S.getClearAlpha(),U<1&&S.setClearColor(16777215,.5),S.clear(),$t&&St.render(W);const It=S.toneMapping;S.toneMapping=Nn;const bt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),Ct===!0&&st.setGlobalState(S.clippingPlanes,X),yr(b,W,X),Ht.updateMultisampleRenderTarget(tt),Ht.updateRenderTargetMipmap(tt),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let ne=0,_e=B.length;ne<_e;ne++){const le=B[ne],se=le.object,At=le.geometry,me=le.material,jt=le.group;if(me.side===Dn&&se.layers.test(X.layers)){const je=me.side;me.side=We,me.needsUpdate=!0,Na(se,W,X,At,me,jt),me.side=je,me.needsUpdate=!0,Xt=!0}}Xt===!0&&(Ht.updateMultisampleRenderTarget(tt),Ht.updateRenderTargetMipmap(tt))}S.setRenderTarget(gt,pt,Rt),S.setClearColor(F,U),bt!==void 0&&(X.viewport=bt),S.toneMapping=It}function yr(b,B,W){const X=B.isScene===!0?B.overrideMaterial:null;for(let k=0,tt=b.length;k<tt;k++){const ut=b[k],gt=ut.object,pt=ut.geometry,Rt=ut.group;let It=ut.material;It.allowOverride===!0&&X!==null&&(It=X),gt.layers.test(W.layers)&&Na(gt,B,W,pt,It,Rt)}}function Na(b,B,W,X,k,tt){b.onBeforeRender(S,B,W,X,k,tt),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(S,B,W,X,b,tt),k.transparent===!0&&k.side===Dn&&k.forceSinglePass===!1?(k.side=We,k.needsUpdate=!0,S.renderBufferDirect(W,B,X,k,b,tt),k.side=$n,k.needsUpdate=!0,S.renderBufferDirect(W,B,X,k,b,tt),k.side=Dn):S.renderBufferDirect(W,B,X,k,b,tt),b.onAfterRender(S,B,W,X,k,tt)}function Er(b,B,W){B.isScene!==!0&&(B=Tt);const X=vt.get(b),k=p.state.lights,tt=p.state.shadowsArray,ut=k.state.version,gt=$.getParameters(b,k.state,tt,B,W),pt=$.getProgramCacheKey(gt);let Rt=X.programs;X.environment=b.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(b.isMeshStandardMaterial?ve:Pe).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Rt===void 0&&(b.addEventListener("dispose",K),Rt=new Map,X.programs=Rt);let It=Rt.get(pt);if(It!==void 0){if(X.currentProgram===It&&X.lightsStateVersion===ut)return Oa(b,gt),It}else gt.uniforms=$.getUniforms(b),b.onBeforeCompile(gt,S),It=$.acquireProgram(gt,pt),Rt.set(pt,It),X.uniforms=gt.uniforms;const bt=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(bt.clippingPlanes=st.uniform),Oa(b,gt),X.needsLights=Mu(b),X.lightsStateVersion=ut,X.needsLights&&(bt.ambientLightColor.value=k.state.ambient,bt.lightProbe.value=k.state.probe,bt.directionalLights.value=k.state.directional,bt.directionalLightShadows.value=k.state.directionalShadow,bt.spotLights.value=k.state.spot,bt.spotLightShadows.value=k.state.spotShadow,bt.rectAreaLights.value=k.state.rectArea,bt.ltc_1.value=k.state.rectAreaLTC1,bt.ltc_2.value=k.state.rectAreaLTC2,bt.pointLights.value=k.state.point,bt.pointLightShadows.value=k.state.pointShadow,bt.hemisphereLights.value=k.state.hemi,bt.directionalShadowMap.value=k.state.directionalShadowMap,bt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,bt.spotShadowMap.value=k.state.spotShadowMap,bt.spotLightMatrix.value=k.state.spotLightMatrix,bt.spotLightMap.value=k.state.spotLightMap,bt.pointShadowMap.value=k.state.pointShadowMap,bt.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=It,X.uniformsList=null,It}function Fa(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=rs.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Oa(b,B){const W=vt.get(b);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function xu(b,B,W,X,k){B.isScene!==!0&&(B=Tt),Ht.resetTextureUnits();const tt=B.fog,ut=X.isMeshStandardMaterial?B.environment:null,gt=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Xi,pt=(X.isMeshStandardMaterial?ve:Pe).get(X.envMap||ut),Rt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,It=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),bt=!!W.morphAttributes.position,Xt=!!W.morphAttributes.normal,ne=!!W.morphAttributes.color;let _e=Nn;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_e=S.toneMapping);const le=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,se=le!==void 0?le.length:0,At=vt.get(X),me=p.state.lights;if(Ct===!0&&(Y===!0||b!==g)){const Be=b===g&&X.id===v;st.setState(X,b,Be)}let jt=!1;X.version===At.__version?(At.needsLights&&At.lightsStateVersion!==me.state.version||At.outputColorSpace!==gt||k.isBatchedMesh&&At.batching===!1||!k.isBatchedMesh&&At.batching===!0||k.isBatchedMesh&&At.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&At.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&At.instancing===!1||!k.isInstancedMesh&&At.instancing===!0||k.isSkinnedMesh&&At.skinning===!1||!k.isSkinnedMesh&&At.skinning===!0||k.isInstancedMesh&&At.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&At.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&At.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&At.instancingMorph===!1&&k.morphTexture!==null||At.envMap!==pt||X.fog===!0&&At.fog!==tt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==st.numPlanes||At.numIntersection!==st.numIntersection)||At.vertexAlphas!==Rt||At.vertexTangents!==It||At.morphTargets!==bt||At.morphNormals!==Xt||At.morphColors!==ne||At.toneMapping!==_e||At.morphTargetsCount!==se)&&(jt=!0):(jt=!0,At.__version=X.version);let je=At.currentProgram;jt===!0&&(je=Er(X,B,k));let xi=!1,Je=!1,tr=!1;const ge=je.getUniforms(),en=At.uniforms;if(xt.useProgram(je.program)&&(xi=!0,Je=!0,tr=!0),X.id!==v&&(v=X.id,Je=!0),xi||g!==b){xt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ge.setValue(I,"projectionMatrix",b.projectionMatrix),ge.setValue(I,"viewMatrix",b.matrixWorldInverse);const qe=ge.map.cameraPosition;qe!==void 0&&qe.setValue(I,dt.setFromMatrixPosition(b.matrixWorld)),Dt.logarithmicDepthBuffer&&ge.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ge.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),g!==b&&(g=b,Je=!0,tr=!0)}if(k.isSkinnedMesh){ge.setOptional(I,k,"bindMatrix"),ge.setOptional(I,k,"bindMatrixInverse");const Be=k.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),ge.setValue(I,"boneTexture",Be.boneTexture,Ht))}k.isBatchedMesh&&(ge.setOptional(I,k,"batchingTexture"),ge.setValue(I,"batchingTexture",k._matricesTexture,Ht),ge.setOptional(I,k,"batchingIdTexture"),ge.setValue(I,"batchingIdTexture",k._indirectTexture,Ht),ge.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&ge.setValue(I,"batchingColorTexture",k._colorsTexture,Ht));const nn=W.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&et.update(k,W,je),(Je||At.receiveShadow!==k.receiveShadow)&&(At.receiveShadow=k.receiveShadow,ge.setValue(I,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(en.envMap.value=pt,en.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(en.envMapIntensity.value=B.environmentIntensity),Je&&(ge.setValue(I,"toneMappingExposure",S.toneMappingExposure),At.needsLights&&vu(en,tr),tt&&X.fog===!0&&j.refreshFogUniforms(en,tt),j.refreshMaterialUniforms(en,X,H,G,p.state.transmissionRenderTarget[b.id]),rs.upload(I,Fa(At),en,Ht)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(rs.upload(I,Fa(At),en,Ht),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ge.setValue(I,"center",k.center),ge.setValue(I,"modelViewMatrix",k.modelViewMatrix),ge.setValue(I,"normalMatrix",k.normalMatrix),ge.setValue(I,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Be=X.uniformsGroups;for(let qe=0,ws=Be.length;qe<ws;qe++){const Jn=Be[qe];Bt.update(Jn,je),Bt.bind(Jn,je)}}return je}function vu(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Mu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,B,W){const X=vt.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),vt.get(b.texture).__webglTexture=B,vt.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){const W=vt.get(b);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0};const Su=I.createFramebuffer();this.setRenderTarget=function(b,B=0,W=0){C=b,E=B,A=W;let X=!0,k=null,tt=!1,ut=!1;if(b){const pt=vt.get(b);if(pt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(pt.__webglFramebuffer===void 0)Ht.setupRenderTarget(b);else if(pt.__hasExternalTextures)Ht.rebindTextures(b,vt.get(b.texture).__webglTexture,vt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const bt=b.depthTexture;if(pt.__boundDepthTexture!==bt){if(bt!==null&&vt.has(bt)&&(b.width!==bt.image.width||b.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(b)}}const Rt=b.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ut=!0);const It=vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(It[B])?k=It[B][W]:k=It[B],tt=!0):b.samples>0&&Ht.useMultisampledRTT(b)===!1?k=vt.get(b).__webglMultisampledFramebuffer:Array.isArray(It)?k=It[W]:k=It,w.copy(b.viewport),P.copy(b.scissor),R=b.scissorTest}else w.copy(ft).multiplyScalar(H).floor(),P.copy(wt).multiplyScalar(H).floor(),R=Zt;if(W!==0&&(k=Su),xt.bindFramebuffer(I.FRAMEBUFFER,k)&&X&&xt.drawBuffers(b,k),xt.viewport(w),xt.scissor(P),xt.setScissorTest(R),tt){const pt=vt.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,pt.__webglTexture,W)}else if(ut){const pt=B;for(let Rt=0;Rt<b.textures.length;Rt++){const It=vt.get(b.textures[Rt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Rt,It.__webglTexture,W,pt)}}else if(b!==null&&W!==0){const pt=vt.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pt.__webglTexture,W)}v=-1},this.readRenderTargetPixels=function(b,B,W,X,k,tt,ut,gt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(pt=pt[ut]),pt){xt.bindFramebuffer(I.FRAMEBUFFER,pt);try{const Rt=b.textures[gt],It=Rt.format,bt=Rt.type;if(!Dt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-X&&W>=0&&W<=b.height-k&&(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+gt),I.readPixels(B,W,X,k,yt.convert(It),yt.convert(bt),tt))}finally{const Rt=C!==null?vt.get(C).__webglFramebuffer:null;xt.bindFramebuffer(I.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(b,B,W,X,k,tt,ut,gt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(pt=pt[ut]),pt)if(B>=0&&B<=b.width-X&&W>=0&&W<=b.height-k){xt.bindFramebuffer(I.FRAMEBUFFER,pt);const Rt=b.textures[gt],It=Rt.format,bt=Rt.type;if(!Dt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Xt),I.bufferData(I.PIXEL_PACK_BUFFER,tt.byteLength,I.STREAM_READ),b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+gt),I.readPixels(B,W,X,k,yt.convert(It),yt.convert(bt),0);const ne=C!==null?vt.get(C).__webglFramebuffer:null;xt.bindFramebuffer(I.FRAMEBUFFER,ne);const _e=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ch(I,_e,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Xt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,tt),I.deleteBuffer(Xt),I.deleteSync(_e),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,W=0){const X=Math.pow(2,-W),k=Math.floor(b.image.width*X),tt=Math.floor(b.image.height*X),ut=B!==null?B.x:0,gt=B!==null?B.y:0;Ht.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,ut,gt,k,tt),xt.unbindTexture()};const yu=I.createFramebuffer(),Eu=I.createFramebuffer();this.copyTextureToTexture=function(b,B,W=null,X=null,k=0,tt=null){tt===null&&(k!==0?(gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=k,k=0):tt=0);let ut,gt,pt,Rt,It,bt,Xt,ne,_e;const le=b.isCompressedTexture?b.mipmaps[tt]:b.image;if(W!==null)ut=W.max.x-W.min.x,gt=W.max.y-W.min.y,pt=W.isBox3?W.max.z-W.min.z:1,Rt=W.min.x,It=W.min.y,bt=W.isBox3?W.min.z:0;else{const nn=Math.pow(2,-k);ut=Math.floor(le.width*nn),gt=Math.floor(le.height*nn),b.isDataArrayTexture?pt=le.depth:b.isData3DTexture?pt=Math.floor(le.depth*nn):pt=1,Rt=0,It=0,bt=0}X!==null?(Xt=X.x,ne=X.y,_e=X.z):(Xt=0,ne=0,_e=0);const se=yt.convert(B.format),At=yt.convert(B.type);let me;B.isData3DTexture?(Ht.setTexture3D(B,0),me=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ht.setTexture2DArray(B,0),me=I.TEXTURE_2D_ARRAY):(Ht.setTexture2D(B,0),me=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const jt=I.getParameter(I.UNPACK_ROW_LENGTH),je=I.getParameter(I.UNPACK_IMAGE_HEIGHT),xi=I.getParameter(I.UNPACK_SKIP_PIXELS),Je=I.getParameter(I.UNPACK_SKIP_ROWS),tr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,le.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,le.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Rt),I.pixelStorei(I.UNPACK_SKIP_ROWS,It),I.pixelStorei(I.UNPACK_SKIP_IMAGES,bt);const ge=b.isDataArrayTexture||b.isData3DTexture,en=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const nn=vt.get(b),Be=vt.get(B),qe=vt.get(nn.__renderTarget),ws=vt.get(Be.__renderTarget);xt.bindFramebuffer(I.READ_FRAMEBUFFER,qe.__webglFramebuffer),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,ws.__webglFramebuffer);for(let Jn=0;Jn<pt;Jn++)ge&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,vt.get(b).__webglTexture,k,bt+Jn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,vt.get(B).__webglTexture,tt,_e+Jn)),I.blitFramebuffer(Rt,It,ut,gt,Xt,ne,ut,gt,I.DEPTH_BUFFER_BIT,I.NEAREST);xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||vt.has(b)){const nn=vt.get(b),Be=vt.get(B);xt.bindFramebuffer(I.READ_FRAMEBUFFER,yu),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Eu);for(let qe=0;qe<pt;qe++)ge?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,nn.__webglTexture,k,bt+qe):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,nn.__webglTexture,k),en?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Be.__webglTexture,tt,_e+qe):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Be.__webglTexture,tt),k!==0?I.blitFramebuffer(Rt,It,ut,gt,Xt,ne,ut,gt,I.COLOR_BUFFER_BIT,I.NEAREST):en?I.copyTexSubImage3D(me,tt,Xt,ne,_e+qe,Rt,It,ut,gt):I.copyTexSubImage2D(me,tt,Xt,ne,Rt,It,ut,gt);xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else en?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(me,tt,Xt,ne,_e,ut,gt,pt,se,At,le.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(me,tt,Xt,ne,_e,ut,gt,pt,se,le.data):I.texSubImage3D(me,tt,Xt,ne,_e,ut,gt,pt,se,At,le):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,tt,Xt,ne,ut,gt,se,At,le.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,tt,Xt,ne,le.width,le.height,se,le.data):I.texSubImage2D(I.TEXTURE_2D,tt,Xt,ne,ut,gt,se,At,le);I.pixelStorei(I.UNPACK_ROW_LENGTH,jt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,je),I.pixelStorei(I.UNPACK_SKIP_PIXELS,xi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Je),I.pixelStorei(I.UNPACK_SKIP_IMAGES,tr),tt===0&&B.generateMipmaps&&I.generateMipmap(me),xt.unbindTexture()},this.initRenderTarget=function(b){vt.get(b).__webglFramebuffer===void 0&&Ht.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ht.setTextureCube(b,0):b.isData3DTexture?Ht.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ht.setTexture2DArray(b,0):Ht.setTexture2D(b,0),xt.unbindTexture()},this.resetState=function(){E=0,A=0,C=null,xt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}function Kg(){const n=new Uint8Array([72,142,206,255]),t=new Nl(n,n.length,1,_s);return t.magFilter=De,t.minFilter=De,t.generateMipmaps=!1,t.colorSpace=In,t.needsUpdate=!0,t}function be(n,t){return new vs({color:t,gradientMap:n})}function Ss(n){return new vs({color:16777215,gradientMap:n})}const Wl={value:0};function Xl(n){n.customProgramCacheKey=()=>"wind-sway",n.onBeforeCompile=t=>{t.uniforms.uTime=Wl,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        float gust = sin(uTime * 1.65 + float(gl_InstanceID) * 0.41) * transformed.y;
        transformed.x += gust * 0.11;
        transformed.z += gust * 0.05;`)}}const Nt=160,mi=6,Se=[{id:"coral",name:"Mesa corallo",ground:15883128,patch:16748463,deep:13903960,plant:16731526},{id:"mint",name:"Prateria menta",ground:4050570,patch:9367748,deep:1542744,plant:2021770},{id:"violet",name:"Giardino viola",ground:11561712,patch:13936383,deep:6959816,plant:10111720},{id:"crystal",name:"Campo di cristalli",ground:3066072,patch:9366774,deep:1214644,plant:2282736},{id:"dune",name:"Dune pesca",ground:16747068,patch:16761994,deep:14704672,plant:16738858},{id:"lantern",name:"Bosco di lanterne",ground:15878810,patch:16751316,deep:13903992,plant:16761914}],fs=1.02,Hc=3.1/Nt,sa=2.4;function ye(n){return-Math.PI+(n+.5)*(Math.PI*2/mi)}function ql(n,t){const e=(Math.atan2(n,t)+Math.PI)/(Math.PI*2);return Math.min(mi-1,Math.max(0,Math.floor(e*mi)))}function Yt(n,t,e=Nt){const i=Math.sin(n);return{x:i*Math.sin(t)*e,y:Math.cos(n)*e,z:i*Math.cos(t)*e}}function ys(n,t){const e=Math.sin(n),i=Math.cos(n);return{x:-i*Math.sin(t),y:e,z:-i*Math.cos(t)}}function Ra(n){return{x:Math.cos(n),y:0,z:-Math.sin(n)}}function Yl(n,t,e,i=Nt){const r=Math.hypot(n,t,e)||1,s=i/r;return{x:n*s,y:t*s,z:e*s}}function Ee(n,t,e,i){const r=Yt(n,t),s=ys(n,t),o=Ra(t);return Yl(r.x+s.x*e+o.x*i,r.y+s.y*e+o.y*i,r.z+s.z*e+o.z*i)}function $l(n,t,e){const i=Math.hypot(n,t,e)||1,r=Math.acos(Math.min(1,Math.max(-1,t/i))),s=Math.atan2(n,e),o=Math.abs(r-fs)*Nt,a=Math.abs(r-(Math.PI-fs))*Nt;let c=ss(o,3.1,5.6);if(c=Math.max(c,ss(a,2.6,4.8)),r>.1&&r<2.9){let l=Math.PI;for(let d=0;d<mi;d+=1){const h=Es(s,ye(d));h<l&&(l=h)}const u=l*Math.sin(r)*Nt;c=Math.max(c,ss(u,sa,sa+2.4))}return c}function ss(n,t,e){if(n<=t)return 1;if(n>=e)return 0;const i=(n-t)/(e-t);return 1-i*i*(3-2*i)}function os(n,t,e){const i=Math.hypot(n,t,e)||1;return{colat:Math.acos(Math.min(1,Math.max(-1,t/i))),az:Math.atan2(n,e)}}function Kl(n,t,e){const i=Math.hypot(n,t,e)||1,r=Math.acos(Math.min(1,Math.max(-1,t/i))),s=Math.atan2(n,e);if(Math.abs(r-fs)<Hc||Math.abs(r-(Math.PI-fs))<Hc*.85)return!0;if(r<.12||r>2.85)return!1;let o=Math.PI;for(let a=0;a<mi;a++){const c=Es(s,ye(a));c<o&&(o=c)}return o*Math.sin(r)*Nt<sa}function Zg(n,t,e){const i=Math.hypot(n,t,e)||1,r=Math.acos(Math.min(1,Math.max(-1,t/i))),o=(Math.atan2(n,e)+Math.PI)/(Math.PI*2)*mi,a=o-Math.floor(o);return Math.min(a,1-a)*(Math.PI*2/mi)*Math.sin(r)*Nt}function jg(n,t,e,i,r,s,o){te.set(n+i,t+r,e+s).multiplyScalar(.5);const a=te.x,c=te.y,l=te.z;return te.lengthSq()<1e-8&&te.set(0,1,0),te.normalize(),ue.set(i-n,r-t,s-e),ue.addScaledVector(te,-ue.dot(te)),ue.lengthSq()<1e-8&&ue.set(1,0,0),ue.normalize(),qn.crossVectors(ue,te).normalize(),Yl(a+qn.x*o,c+qn.y*o,l+qn.z*o)}function Es(n,t){let e=n-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return Math.abs(e)}const te=new z,ue=new z,qn=new z,ps=new ce,Zl=new zn;function Ae(n,t,e,i,r,s){return te.set(n,t,e),te.lengthSq()<1e-8&&te.set(0,1,0),te.normalize(),ue.set(i,r,s),ue.lengthSq()<1e-8&&ue.set(0,0,1),ue.addScaledVector(te,-ue.dot(te)),ue.lengthSq()<1e-6&&ue.set(1,0,0).addScaledVector(te,-te.x),ue.normalize(),qn.crossVectors(te,ue).normalize(),ps.makeBasis(qn,te,ue),Zl.setFromRotationMatrix(ps).clone()}function Jg(n,t,e,i,r,s){return te.set(n,t,e),te.lengthSq()<1e-8&&te.set(0,1,0),te.normalize(),ue.set(i,r,s),ue.addScaledVector(te,-ue.dot(te)),ue.lengthSq()<1e-6&&ue.set(0,0,1).addScaledVector(te,-te.z),ue.normalize(),qn.crossVectors(te,ue).normalize(),ps.makeBasis(qn,te,ue),Zl.setFromRotationMatrix(ps).clone()}const Vc=new z,Gc=new zn,Wc=new z,Xc=new ce,Qg=new Gt;function Ji(n,t,e,i,r,s,o,a,c,l,u,d,h){Vc.set(e,i,r),Gc.set(c,l,u,d),Wc.set(s,o,a),Xc.compose(Vc,Gc,Wc),n.setMatrixAt(t,Xc),h!==void 0&&n.setColorAt(t,Qg.setHex(h))}function Qi(n){n.instanceMatrix.needsUpdate=!0,n.computeBoundingSphere(),n.instanceColor&&(n.instanceColor.needsUpdate=!0)}const re=.64,Ut=ye(0),jl=.8,Ge=.46,Yi=.26,on=.3,qr=6.2,t0=Yt(re,Ut+on),e0=Yt(re,Ut-on),n0=Yt(Ge,Ut+Yi),i0=Yt(.96,Ut),r0=Yt(re,Ut+.48),s0=Yt(re,Ut-.46),o0=Yt(.34,Ut),a0=Yt(Ge,Ut),ro=2893376,c0=2366498,so=16757294;function l0(){const n=[],t=[-.36,-.24,-.12,.12,.24,.36];for(const i of t){const r=i>0,s=r?16773878:15660799,o=r?16731526:8146431;n.push({colat:re,az:Ut+i,north:qr,east:0,face:"south",sy:1,hip:!0,wall:s,roof:o}),n.push({colat:re,az:Ut+i,north:-qr,east:0,face:"north",sy:1,hip:!1,wall:s,roof:o})}const e=[.4,.54,.74];for(const i of e)n.push({colat:i,az:Ut,north:0,east:qr,face:"west",sy:i<.5?1.12:1,hip:!0,wall:16051967,roof:2279662}),n.push({colat:i,az:Ut,north:0,east:-qr,face:"east",sy:1,hip:!1,wall:15662328,roof:16742970});return n.push({colat:Ge,az:Ut,north:0,east:8,face:"west",sy:1.16,hip:!0,wall:16773878,roof:16731526}),n.push({colat:Ge,az:Ut,north:0,east:-8,face:"east",sy:1.16,hip:!0,wall:16773878,roof:16731526}),n}const Jl=l0(),Ql=[{colat:re,az:Ut+on,north:5.1,east:0,face:"south",cloth:16731526},{colat:re,az:Ut+on,north:-5.1,east:0,face:"north",cloth:2279662},{colat:re,az:Ut-on,north:5.1,east:0,face:"south",cloth:8146431},{colat:re,az:Ut-on,north:-5.1,east:0,face:"north",cloth:2806944},{colat:Ge,az:Ut+Yi,north:4.6,east:3.2,face:"south",cloth:16761914},{colat:Ge,az:Ut+Yi,north:-4.2,east:-3.4,face:"north",cloth:16731526}];function u0(n,t,e,i){const r=Math.hypot(n,t,e)||1,s=Math.acos(Math.min(1,Math.max(-1,t/r))),o=Math.atan2(n,e),a=Es(o,Ut),c=a*Math.sin(Math.max(.25,s))*Nt;if(s>.26&&s<1.08&&c<14+i)return!0;const l=Math.abs(s-re)*Nt;if(a<.62&&l<14+i)return!0;const u=Math.abs(s-Ge)*Nt;return a<.36&&u<12+i}function h0(n){const t=(r,s,o)=>{n.push({...Yt(r,s),r2:o*o})};for(let r=.3;r<=1.02;r+=2.5/Nt)t(r,Ut,3.3);const e=Math.sin(re)*Nt;for(let r=-.5;r<=.52;r+=2.5/e)t(re,Ut+r,3.3);const i=Math.sin(Ge)*Nt;for(let r=0;r<=.3;r+=2.5/i)t(Ge,Ut+r,2.6);for(const r of[-1,1])for(let s=re;s<=re+.055;s+=1.4/Nt)t(s,Ut+r*.18,.9);t(re,Ut,9),t(re,Ut+on,5.2),t(re,Ut-on,5.2),t(Ge,Ut,5.6),t(Ge,Ut+Yi,5.2),t(.34,Ut,3.4);for(const r of Jl){const s=Ee(r.colat,r.az,r.north,r.east);n.push({...s,r2:1.7*1.7})}for(const r of Ql){const s=Ee(r.colat,r.az,r.north,r.east);n.push({...s,r2:1.55*1.55})}}function d0(n,t,e){const i=[],r=[],s=[],o=[],a=[],c=[],l=[],u=[],d=[],h=[],f=[],_=[],x=[],m=[],p=[],y=[],T=[],S=[],L=[],E=(w,P,R,F,U,N,G)=>{w.push({x:P.x,y:P.y,z:P.z,qx:R.x,qy:R.y,qz:R.z,qw:R.w,sx:F,sy:U,sz:N,color:G})},A=(w,P,R,F,U)=>{const N=Ee(w,P,R,F),G=ys(w,P),H=Ra(P),J=U==="north"?G:U==="south"?{x:-G.x,y:-G.y,z:-G.z}:U==="east"?H:{x:-H.x,y:-H.y,z:-H.z},it=Ae(N.x,N.y,N.z,J.x,J.y,J.z);return{p:N,q:it}},C=(w,P,R,F)=>{const U=A(w,P,R,F,"north");E(s,U.p,U.q,.55,.9,.55,ro);const N=Math.hypot(U.p.x,U.p.y,U.p.z)||1,G=2.1;o.push({x:U.p.x+U.p.x/N*G,y:U.p.y+U.p.y/N*G,z:U.p.z+U.p.z/N*G,qx:U.q.x,qy:U.q.y,qz:U.q.z,qw:U.q.w,sx:.28,sy:.28,sz:.28,color:so}),e.push({...U.p,r:.16,h:2.15})},v=[16731526,2279662,8146431,16761914];for(let w=0;w<8;w+=1){const P=Math.PI/8+w*(Math.PI/4),R=A(re,Ut,Math.cos(P)*7.4,Math.sin(P)*7.4,"north");E(i,R.p,R.q,1,1,1,ro),E(r,R.p,R.q,1,1,1,v[w%v.length]??so),e.push({...R.p,r:.34,h:3.45})}for(const w of[[re,Ut+on],[re,Ut-on],[Ge,Ut],[Ge,Ut+Yi]])for(const P of[-1,1])for(const R of[-1,1])C(w[0],w[1],P*4.4,R*4.4);for(const w of Jl){const{p:P,q:R}=A(w.colat,w.az,w.north,w.east,w.face);E(a,P,R,.88,w.sy,.8,w.wall),E(w.hip?l:c,P,R,.88,w.sy,.8,w.roof),E(u,P,R,.88,w.sy,.8,c0),E(d,P,R,.88,w.sy,.8,3842303),E(h,P,R,.88,w.sy,.8,w.roof),E(f,P,R,.88,w.sy,.8,w.roof),E(_,P,R,.88,w.sy,.8,w.roof),E(x,P,R,.88,w.sy,.8,13157596),E(y,P,R,.88,w.sy,.8,16769354),w.hip?E(p,P,R,.88,w.sy,.8,so):E(m,P,R,.88,w.sy,.8,14698568),e.push({...P,r:Math.hypot(1.25*.88,1.15*.8)+.04,h:3.4*w.sy})}for(const w of Ql){const P=A(w.colat,w.az,w.north,w.east,w.face);E(T,P.p,P.q,1,1,1,w.north>0?16773878:15660799),E(S,P.p,P.q,1,1,1,w.cloth),e.push({...P.p,r:1.16,h:1.7})}for(const w of[3.6,-3.6]){const P=A(.34,Ut,0,w,"north");E(L,P.p,P.q,1,1,1,ro),e.push({...P.p,r:.16,h:.95})}oo(n,t,e,.96,Ut,"north",8146431),oo(n,t,e,re,Ut+.48,"east",16731526),oo(n,t,e,re,Ut-.46,"east",2279662),Yr(n,re,Ut+on,3.2,2279662),Yr(n,re,Ut-on,3.2,8146431),Yr(n,Ge,Ut,3.3,16731526),Yr(n,Ge,Ut+Yi,3.1,16761914);const g=(w,P,R=!1)=>{if(P.length===0)return;const F=new Zi(w,R?new ee({color:16777215}):Ss(t),P.length);F.frustumCulled=!1;for(let U=0;U<P.length;U+=1){const N=P[U];N&&Ji(F,U,N.x,N.y,N.z,N.sx,N.sy,N.sz,N.qx,N.qy,N.qz,N.qw,N.color)}Qi(F),n.add(F)};g(co(.26,.34,3.3,1.65),i),g(f0(),r),g(co(.15,.18,2.25,1.12),s),g(p0(),o,!0),g(ao(2.5,2.3,2.3,1.15),a),g(qc(1.85,1.15,2.85),c),g(qc(2.05,.7,2.55),l),g(m0(),u),g(y0(),d),g(E0(),h),g(_0(),f),g(g0(),_),g(x0(),x),g(v0(),m),g(M0(),p,!0),g(S0(),y,!0),g(ao(1.9,1.15,1.25,.58),T),g(ao(2.15,.12,1.55,1.28),S,!0),g(co(.1,.12,.85,.42),L)}function oo(n,t,e,i,r,s,o){const a=Yt(i,r),c=s==="north"?ys(i,r):Ra(r),l=new lt(new Ke(2.4,.14,8,18),be(t,o));l.position.set(a.x,a.y,a.z),l.quaternion.copy(Ae(a.x,a.y,a.z,c.x,c.y,c.z));const u=new z(a.x,a.y,a.z).normalize();l.position.addScaledVector(u,2.4);const d=new lt(new Ze(.18,8,6),new ee({color:16769354}));d.position.y=2.32;const h=new Kt(.36,.86,.04),f=new lt(h,be(t,16731526));f.position.set(-.62,1.25,.02);const _=new lt(h,be(t,2279662));_.position.set(.62,1.15,.02),l.add(d,f,_),n.add(l);const x=2.2;s==="north"?(e.push({...Ee(i,r,0,-x),r:.34,h:2.35}),e.push({...Ee(i,r,0,x),r:.34,h:2.35})):(e.push({...Ee(i,r,-x,0),r:.34,h:2.35}),e.push({...Ee(i,r,x,0),r:.34,h:2.35}))}function Yr(n,t,e,i,r){const s=Yt(t,e),o=new Ke(i,.07,5,20);o.rotateX(Math.PI/2);const a=new lt(o,new ee({color:r}));a.position.set(s.x,s.y,s.z),a.quaternion.copy(Ae(s.x,s.y,s.z,1,0,0));const c=new z(s.x,s.y,s.z).normalize();a.position.addScaledVector(c,.08),n.add(a)}function ao(n,t,e,i){const r=new Kt(n,t,e);return r.translate(0,i,0),r}function co(n,t,e,i){const r=new oe(n,t,e,6);return r.translate(0,i,0),r}function qc(n,t,e){const i=new Ue(n,t,4);return i.translate(0,e,0),i}function f0(){const n=new Ue(.48,.36,6);return n.translate(0,3.48,0),n}function p0(){return new Ze(1,7,6)}function m0(){const n=new Kt(.55,.85,.08);return n.translate(0,.46,1.18),n}function g0(){const n=new oe(1.95,1.95,.12,6);return n.translate(0,2.32,0),n}function _0(){const n=new Kt(.82,.12,.1);return n.translate(0,.98,1.22),n}function x0(){const n=new Kt(.78,.06,.32);return n.translate(0,.04,1.38),n}function v0(){const n=new Kt(.28,.62,.28);return n.translate(.62,3.2,-.15),n}function M0(){const n=new Kt(1.35,.07,.62);return n.translate(0,1.58,1.42),n}function S0(){const n=new Kt(.28,.2,.04);return n.translate(.52,1.18,1.24),n}function y0(){const n=new Kt(.36,.4,.06),t=n.clone();t.translate(-.58,1.38,1.2);const e=n.clone();return e.translate(.58,1.38,1.2),tu(t,e)}function E0(){const n=new Kt(.5,.54,.04),t=n.clone();t.translate(-.58,1.38,1.16);const e=n.clone();return e.translate(.58,1.38,1.16),tu(t,e)}function tu(n,t){const e=n.index?n.toNonIndexed():n,i=t.index?t.toNonIndexed():t,r=new ze,s=e.getAttribute("position").count+i.getAttribute("position").count,o=new Float32Array(s*3),a=new Float32Array(s*3),c=e.getAttribute("position"),l=i.getAttribute("position"),u=e.getAttribute("normal"),d=i.getAttribute("normal");for(let f=0;f<c.count;f+=1)o[f*3]=c.getX(f),o[f*3+1]=c.getY(f),o[f*3+2]=c.getZ(f),a[f*3]=u.getX(f),a[f*3+1]=u.getY(f),a[f*3+2]=u.getZ(f);const h=c.count;for(let f=0;f<l.count;f+=1)o[(h+f)*3]=l.getX(f),o[(h+f)*3+1]=l.getY(f),o[(h+f)*3+2]=l.getZ(f),a[(h+f)*3]=d.getX(f),a[(h+f)*3+1]=d.getY(f),a[(h+f)*3+2]=d.getZ(f);return r.setAttribute("position",new we(o,3)),r.setAttribute("normal",new we(a,3)),r}const T0=ye(0),Bn=[{id:"hub",biome:0,colat:re,az:T0,plaza:8,east:[0,0],north:[0,0],lots:[]},{id:"mint",biome:1,colat:1.32,az:ye(1)+.09,plaza:4.4,east:[-18,8],north:[-8,8],lots:[{n:6,e:5,kind:"house",spin:.5},{n:6,e:-5,kind:"house",spin:-.5},{n:-6,e:5,kind:"stall",spin:2},{n:-6,e:-5,kind:"house",spin:-2},{n:5.5,e:7,kind:"tower",spin:1.2},{n:8,e:4,kind:"pavilion",spin:0},{n:-8,e:2.6,kind:"house",spin:2.4},{n:2,e:-7.2,kind:"stall",spin:-1.2},{n:-3,e:7.6,kind:"house",spin:.9}]},{id:"violet",biome:2,colat:1.78,az:ye(2)-.08,plaza:4.4,east:[-8,18],north:[-8,8],lots:[{n:6,e:5,kind:"house",spin:.3},{n:-6,e:5,kind:"house",spin:2.2},{n:6,e:-5,kind:"stall",spin:-.4},{n:-5,e:-6,kind:"pavilion",spin:1},{n:5.5,e:-7,kind:"tower",spin:-1},{n:9,e:2,kind:"house",spin:.8},{n:-8.2,e:3.2,kind:"house",spin:2.5},{n:2.2,e:8.2,kind:"stall",spin:.7},{n:-2.4,e:-7.4,kind:"house",spin:-1.6}]},{id:"lantern",biome:5,colat:1.48,az:ye(5)+.1,plaza:4.2,east:[-18,8],north:[-7,7],lots:[{n:5.5,e:5,kind:"house",spin:.6},{n:-5.5,e:5,kind:"stall",spin:2.1},{n:5.5,e:-4.5,kind:"house",spin:-.5},{n:-5,e:-5,kind:"pavilion",spin:.2},{n:6.5,e:6,kind:"tower",spin:1.5},{n:-8,e:2.4,kind:"house",spin:2.2},{n:2.2,e:-7.2,kind:"stall",spin:-1.1},{n:9,e:-2.4,kind:"pavilion",spin:.4}]},{id:"dune",biome:4,colat:1.045,az:ye(4)-.085,plaza:3.6,east:[-7,7],north:[-6,6],lots:[{n:4.5,e:4,kind:"stall",spin:.4},{n:-4.5,e:3.5,kind:"house",spin:2},{n:4,e:-4,kind:"stall",spin:-.8},{n:-1,e:-5.5,kind:"tower",spin:-1.4},{n:-5.2,e:4.6,kind:"pavilion",spin:1.7},{n:6.4,e:3.4,kind:"house",spin:.3},{n:1.2,e:6.4,kind:"stall",spin:1.2}]},{id:"crystal",biome:3,colat:1.5,az:ye(3)-.11,plaza:4,east:[-12,12],north:[-6,6],lots:[{n:5.2,e:4.6,kind:"house",spin:.4},{n:-5.2,e:4.4,kind:"pavilion",spin:2.2},{n:5.2,e:-4.8,kind:"stall",spin:-.5},{n:-4.6,e:-5,kind:"house",spin:-2},{n:6.6,e:6.2,kind:"tower",spin:1.1}]}],oa=Bn[0],aa=Bn[1],ca=Bn[2],la=Bn[3],ua=Bn[4],ha=Bn[5];if(!oa||!aa||!ca||!la||!ua||!ha)throw new Error("paesi incompleti");const eu=Yt(oa.colat,oa.az),nu=Yt(aa.colat,aa.az),iu=Yt(ca.colat,ca.az),ru=Yt(la.colat,la.az),su=Yt(ua.colat,ua.az),b0=Yt(ha.colat,ha.az),ou=Ee(1.62,ye(3)+.07,0,4.5),au=n0,Un=[];for(const n of Bn){const t=Yt(n.colat,n.az);Un.push({...t,r2:n.plaza*n.plaza});const[e,i]=n.east,[r,s]=n.north;for(let o=e;o<=i;o+=2.4)Un.push({...Ee(n.colat,n.az,0,o),r2:2.15*2.15});for(let o=r;o<=s;o+=2.4)Un.push({...Ee(n.colat,n.az,o,0),r2:2.15*2.15});for(const o of n.lots){const a=o.kind==="tower"?2.15:o.kind==="pavilion"?1.75:o.kind==="stall"?1.95:o.kind==="kiosk"?2.3:2.55;Un.push({...Ee(n.colat,n.az,o.n,o.e),r2:a*a})}}const A0=a0;h0(Un);function cu(n,t,e){let i=0;for(let r=0;r<Un.length;r+=1){const s=Un[r];if(!s)continue;const o=Math.hypot(n-s.x,t-s.y,e-s.z),a=Math.sqrt(s.r2),c=ss(o,a,a+2.2);if(c>i&&(i=c),i>=1)return 1}return i}function lu(n,t,e){for(let i=0;i<Un.length;i+=1){const r=Un[i];if(!r)continue;const s=n-r.x,o=t-r.y,a=e-r.z;if(s*s+o*o+a*a<r.r2)return!0}return!1}function Ca(n,t,e,i){for(const r of Bn){const s=Yt(r.colat,r.az),o=n-s.x,a=t-s.y,c=e-s.z,l=r.plaza+i;if(o*o+a*a+c*c<l*l)return!0}return u0(n,t,e,i)}const lo=16774392,w0=2366498,as=16757294,Yc=2893376,$c=[16731526,2806944,8146431,2279662,16742970,16761914],Kc=[16773878,15660799,16051967,15662328];function R0(n,t,e){const i=[],r=[],s=[],o=[],a=[],c=[],l=[],u=[],d=[],h=[],f=[],_=[],x=[],m=[],p=[],y=[],T=[],S=[],L=[];for(const A of Bn){const C=C0(A.biome);let v=0;for(const g of A.lots){const w=$c[(A.biome+v)%$c.length]??C,P=Kc[(A.biome+v)%Kc.length]??lo;v+=1;const R=Ee(A.colat,A.az,g.n,g.e),F=Ae(R.x,R.y,R.z,Math.sin(A.az),0,Math.cos(A.az));F.multiply(new zn().setFromAxisAngle(new z(0,1,0),g.spin));const U=(N,G,H,J,it)=>{N.push({x:R.x,y:R.y,z:R.z,qx:F.x,qy:F.y,qz:F.z,qw:F.w,sx:G,sy:H,sz:J,color:it})};if(g.kind==="house"){const N=Math.round(Math.abs(g.e)+Math.abs(g.n))%2===0;U(i,1,1,1,P),U(N?h:r,1,1,1,C),U(s,1,1,1,w0),U(f,1,1,1,3842303),U(_,1,1,1,w),U(x,1,1,1,w),U(m,1,1,1,C),U(p,1,1,1,13157596),N||U(y,1,1,1,14698568),e.push({...R,r:1.72,h:3.4})}else g.kind==="tower"?(U(o,1,1,1,16052479),U(a,1,1,1,C),U(S,1,1,1,as),e.push({...R,r:1.15,h:7.4})):g.kind==="pavilion"?(U(c,1,1,1,Yc),U(l,1,1,1,C),e.push({...R,r:.55,h:2.8})):g.kind==="kiosk"?(U(u,1.15,1.05,1.05,lo),U(T,1,1,1,1323048),Zc(L,R,F,3.15,.42),e.push({...R,r:1.32,h:2.5})):(U(u,1,1,1,lo),U(d,1,1,1,as),e.push({...R,r:1.16,h:1.7}))}if(A.id!=="hub"){const g=Yt(A.colat,A.az),w=new lt(new Ke(A.plaza*.72,.08,5,18),new ee({color:as}));w.position.set(g.x,g.y,g.z),w.quaternion.copy(Ae(g.x,g.y,g.z,1,0,0));const P=new z(g.x,g.y,g.z).normalize();w.position.addScaledVector(P,.08),n.add(w);for(const[R,F]of[[A.plaza*.82,1.85],[A.plaza*.82,-1.85],[-A.plaza*.82,1.85],[-A.plaza*.82,-1.85]]){const U=Ee(A.colat,A.az,R,F),N=Ae(U.x,U.y,U.z,Math.sin(A.az),0,Math.cos(A.az));c.push({x:U.x,y:U.y,z:U.z,qx:N.x,qy:N.y,qz:N.z,qw:N.w,sx:.55,sy:.85,sz:.55,color:Yc}),Zc(L,U,N,2.05,.38)}}if(A.id==="dune"){const g=Ee(A.colat,A.az,-6.4,3.2),w=new lt(new Ke(2.15,.16,6,14),be(t,15768136));w.position.set(g.x,g.y,g.z),w.quaternion.copy(Ae(g.x,g.y,g.z,Math.sin(A.az),0,Math.cos(A.az)));const P=new z(g.x,g.y,g.z).normalize();w.position.addScaledVector(P,2.15),n.add(w)}A.id!=="hub"&&U0(n,t,e,A)}d0(n,t,e);const E=(A,C,v=!1)=>{if(C.length===0)return;const g=v?new ee({color:16777215}):Ss(t),w=new Zi(A,g,C.length);w.frustumCulled=!1;for(let P=0;P<C.length;P+=1){const R=C[P];R&&Ji(w,P,R.x,R.y,R.z,R.sx,R.sy,R.sz,R.qx,R.qy,R.qz,R.qw,R.color)}Qi(w),n.add(w)};E(uo(2.5,2.3,2.3,1.15),i),E(P0(),r),E(D0(),s),E(ho(.82,.95,6.2,3.1),o),E(L0(),a),E(ho(.16,.2,2.3,1.15),c),E(ho(1.85,1.85,.2,2.4),l),E(uo(1.9,1.15,1.25,.58),u),E(uo(2.15,.12,1.55,1.28),d,!0),E(I0(),h),E(k0(),f),E(O0(),_),E(z0(),x),E(F0(),m),E(B0(),p),E(H0(),y),E(V0(),T),E(G0(),S,!0),E(W0(),L,!0)}function Zc(n,t,e,i,r){const s=Math.hypot(t.x,t.y,t.z)||1;n.push({x:t.x+t.x/s*i,y:t.y+t.y/s*i,z:t.z+t.z/s*i,qx:e.x,qy:e.y,qz:e.z,qw:e.w,sx:r,sy:r,sz:r,color:as})}function C0(n){return[16731526,3133068,10111720,2282736,16742970,16761914][n]??15909198}function uo(n,t,e,i){const r=new Kt(n,t,e);return r.translate(0,i,0),r}function P0(){const n=new Ue(1.85,1.15,4);return n.translate(0,2.85,0),n}function L0(){const n=new Ue(1.25,1.35,6);return n.translate(0,6.85,0),n}function ho(n,t,e,i){const r=new oe(n,t,e,6);return r.translate(0,i,0),r}function D0(){const n=new Kt(.55,.85,.08);return n.translate(0,.46,1.18),n}function I0(){const n=new Ue(2.05,.7,4);return n.translate(0,2.55,0),n}function U0(n,t,e,i){const r=i.id==="hub"?1.42:.78,s=N0(i,r);if(!s)return;const o=Ee(i.colat,i.az,s.n,s.e),a=Ae(o.x,o.y,o.z,Math.sin(i.az),0,Math.cos(i.az)),c=new z(o.x,o.y,o.z).normalize(),l=new Ke(r,i.id==="hub"?.16:.11,6,16);l.rotateX(Math.PI/2);const u=new lt(l,be(t,15660799));u.position.set(o.x,o.y,o.z).addScaledVector(c,.2),u.quaternion.copy(a);const d=new lt(new oe(r*.72,r*.72,.05,14),new ee({color:i.id==="hub"?9427178:10147040}));if(d.position.set(o.x,o.y,o.z).addScaledVector(c,.12),d.quaternion.copy(a),n.add(u,d),i.id==="hub"){const h=new lt(new Ue(.11,.85,6),new ee({color:15267835}));h.position.set(o.x,o.y,o.z).addScaledVector(c,.58),h.quaternion.copy(a),n.add(h)}for(let h=0;h<4;h+=1){const f=h/4*Math.PI*2+Math.PI/4;e.push({...Ee(i.colat,i.az,s.n+Math.cos(f)*r,s.e+Math.sin(f)*r),r:.34,h:.7})}}function N0(n,t){const e=t+1.9;for(const i of[.72,.85,.58])for(const r of[1,-1])for(const s of[-1,1]){const o=n.plaza*i*r,a=n.plaza*i*s,c=Math.abs(o)-t>2.5&&Math.abs(a)-t>2.65,l=n.lots.every(u=>Math.hypot(u.n-o,u.e-a)>e);if(c&&l)return{n:o,e:a}}return null}function F0(){const n=new oe(1.95,1.95,.12,6);return n.translate(0,2.32,0),n}function O0(){const n=new Kt(.5,.54,.04),t=n.clone();t.translate(-.58,1.38,1.16);const e=n.clone();return e.translate(.58,1.38,1.16),uu(t,e)}function z0(){const n=new Kt(.82,.12,.1);return n.translate(0,.98,1.22),n}function B0(){const n=new Kt(.78,.06,.32);return n.translate(0,.04,1.38),n}function k0(){const n=new Kt(.36,.4,.06),t=n.clone();t.translate(-.58,1.38,1.2);const e=n.clone();return e.translate(.58,1.38,1.2),uu(t,e)}function H0(){const n=new Kt(.28,.62,.28);return n.translate(.62,3.2,-.15),n}function V0(){const n=new Kt(1.7,.95,.1);return n.translate(0,2.45,.15),n}function G0(){const n=new Ze(.34,7,6);return n.translate(0,7.55,0),n}function W0(){return new Ze(1,7,6)}function uu(n,t){const e=n.index?n.toNonIndexed():n,i=t.index?t.toNonIndexed():t,r=new ze,s=e.getAttribute("position").count+i.getAttribute("position").count,o=new Float32Array(s*3),a=new Float32Array(s*3),c=e.getAttribute("position"),l=i.getAttribute("position"),u=e.getAttribute("normal"),d=i.getAttribute("normal");for(let f=0;f<c.count;f+=1)o[f*3]=c.getX(f),o[f*3+1]=c.getY(f),o[f*3+2]=c.getZ(f),a[f*3]=u.getX(f),a[f*3+1]=u.getY(f),a[f*3+2]=u.getZ(f);const h=c.count;for(let f=0;f<l.count;f+=1)o[(h+f)*3]=l.getX(f),o[(h+f)*3+1]=l.getY(f),o[(h+f)*3+2]=l.getZ(f),a[(h+f)*3]=d.getX(f),a[(h+f)*3+1]=d.getY(f),a[(h+f)*3+2]=d.getZ(f);return r.setAttribute("position",new we(o,3)),r.setAttribute("normal",new we(a,3)),r}const jc="Mondo-1",X0=11,Pa=Ut,q0=Yt(jl,Pa),Y0=ys(jl,Pa),ki=q0,Hi=Y0,$0=eu,K0=nu,Z0=iu,j0=ou,Ui=ye(4),J0=su,Ts=[{id:"faro",name:"Faro del polo",kind:"race",coins:20,biome:0,line:"La piazza del polo ti segna come esploratore.",...$0},{id:"anello",name:"Piazza di menta",kind:"precision",coins:12,biome:1,line:"Il paese della prateria. Paga poco, ma paga.",...K0},{id:"pietre",name:"Petali logici",kind:"logic",coins:30,biome:2,line:"Il paese viola, per ora, è una moneta grossa.",...Z0},{id:"belvedere",name:"Belvedere di cristallo",kind:"explore",coins:16,biome:3,line:"Il totem di cristallo, dove il pianeta curva via.",...j0},{id:"cancello",name:"Campo delle dune",kind:"obstacle",coins:18,biome:4,line:"Il campo ricorda chi ha corso il sentiero.",...J0,needsCourse:!0},{id:"lanterne",name:"Piazza delle lanterne",kind:"explore",coins:14,biome:5,line:"Il paese rosa, sotto le lampade.",...ru},{id:"bacheca",name:"Bacheca dei giochi",kind:"explore",coins:8,biome:0,line:"Da qui si entra in Ostacoli. Il giro degli spicchi paga a parte.",...au,opensBoard:!0}];function hu(n){return Se[n.biome]??Se[0]}const Q0=[{id:"corsa",name:"Corsa",players:"20–40",min:20,max:40,demoStake:20,playable:!1,blurb:"Primo al traguardo. Gli altri lasciano la puntata sul tavolo."},{id:"logica",name:"Logica",players:"20–60",min:30,max:60,demoStake:30,playable:!1,blurb:"Enigmi a eliminazione, a tempo."},{id:"precisione",name:"Precisione",players:"20–50",min:20,max:50,demoStake:20,playable:!1,blurb:"Piattaforme e finestre strette."},{id:"ostacoli",name:"Ostacoli",players:"40–100",min:40,max:100,demoStake:20,playable:!0,blurb:"Giro breve sulle dune. In anteprima correte in quattro. Si entra anche dalla bacheca in città."},{id:"giro",name:"Giro degli spicchi",players:"1",min:0,max:0,demoStake:0,playable:!1,blurb:"Visita le sei mete del pianeta. Quando le hai tutte, la bacheca aggiunge 25 monete. Nessuna puntata."}],du=[2.4,1.2,.4,0],t_=[9,26,47,70],e_=[{c:1.045,a:Ui-.016},{c:1.045,a:Ui-.004},{c:1.068,a:Ui+.005},{c:1.068,a:Ui+.015},{c:1.042,a:Ui+.021},{c:1.055,a:Ui+.032}],an=e_.map(n=>Yt(n.c,n.a));function fo(n,t){const e=an[n],i=an[n+1];if(!e||!i)throw new Error("varco senza segmento");return jg(e.x,e.y,e.z,i.x,i.y,i.z,t)}const n_=[fo(0,1.25),fo(2,-1.3),fo(4,-1.2)],cs=[{name:"Rami",seconds:5.6,color:15769658},{name:"Lea",seconds:7.6,color:8154367},{name:"Nico",seconds:10.5,color:4050808}],i_=24,ls=an[an.length-1];if(!ls)throw new Error("percorso senza traguardo");const pe={x:ls.x,y:ls.y,z:ls.z,r:1.7};function fu(n,t){const e=du[n-1]??0;return Math.round(t*e)}function ke(n,t,e,i){const r=os(i.x,i.y,i.z);return{id:n,name:t,kind:e,colat:r.colat,az:r.az}}const da=[{id:"pole",name:"Faro del polo",kind:"pole",colat:.04,az:Pa},ke("hub","Piazza civica","hub",eu),ke("quarter","Quartiere del corallo","village",A0),ke("mercato","Mercato","village",t0),ke("games","Piazza dei giochi","games",au),ke("botteghe","Botteghe","village",e0),ke("porta","Porta meridionale","village",i0),ke("east-gate","Porta della menta","village",r0),ke("dune-gate","Porta delle dune","village",s0),ke("terrazza","Terrazza del faro","village",o0),ke("mint","Paese di menta","village",nu),ke("violet","Paese viola","village",iu),ke("crystal-town","Borgo di cristallo","village",b0),ke("look","Belvedere","lookout",ou),ke("dune","Campo ostacoli","venue",su),ke("lantern","Piazza lanterne","village",ru),...Se.map((n,t)=>({id:`biome-${n.id}`,name:n.name,kind:"biome",colat:.86,az:ye(t)}))],r_=["faro","anello","pietre","belvedere","cancello","lanterne"],Jc=25;function s_(){return{coins:0,claimed:new Set,courseClear:!1,weekRank:null}}function bs(n,t){n.coins+=Math.max(0,Math.round(t))}function o_(n,t){const e=Math.max(0,Math.round(t));return n.coins<e?!1:(n.coins-=e,!0)}function a_(n,t){bs(n,t.payout),(n.weekRank===null||t.rank<n.weekRank)&&(n.weekRank=t.rank),t.clean&&(n.courseClear=!0)}const Qc=6,c_=12038568;function l_(n,t){const e=Ts.map(i=>u_(i,t,n));return{update(i,r,s,o,a){e.forEach((l,u)=>{const d=o.claimed.has(l.def.id),h=d?c_:hu(l.def).plant;for(const x of l.accents)h_(x,h);const f=d?0:Math.sin(i*2.3+u*.8)*.1;l.bob.position.y=l.baseY+f;const _=d?.92:1+Math.sin(i*2.3+u)*.04;l.ring.scale.setScalar(_)});const c=d_(r.x,r.y,r.z);if(!c){a.setPrompt(null);return}a.setPrompt(f_(c,o)),s&&p_(c,o,a)}}}function u_(n,t,e){const i=new vn;i.position.set(n.x,0,n.z);const r=[],s=hu(n).plant,o=()=>{const h=new ee({color:s});return r.push(h),h},a=be(t,9066296),c=new lt(new Ke(1.2,.07,6,18),o());c.rotation.x=Math.PI/2,c.position.y=.05,i.add(c);let l=i,u=0;if(n.id==="faro"){const h=new lt(new Mn(.32,0),o());h.position.y=.85,i.add(h),l=h,u=.85}else if(n.id==="anello"){const h=new lt(new Ke(1.02,.1,8,18),o());h.position.y=1.2;const f=new lt(new Mn(.26,0),o());f.position.y=1.2,i.add(h,f),l=f,u=1.2}else if(n.id==="pietre"){const h=new lt(new _r(.46,0),be(t,s)),f=new lt(new _r(.34,0),be(t,6966980)),_=new lt(new Mn(.24,0),o());h.position.y=.4,f.position.y=1.02,_.position.y=1.55,r.push(h.material,f.material),i.add(h,f,_),l=_,u=1.55}else if(n.id==="belvedere"){const h=new lt(new oe(.06,.08,2.5,5),a);h.position.y=1.25;const f=new lt(new Kt(.78,.42,.05),o());f.position.set(.42,2.2,0),i.add(h,f),l=f,u=2.2}else if(n.id==="lanterne"){const h=new lt(new oe(.07,.1,2.8,5),a);h.position.y=1.4;const f=new lt(new Ze(.42,8,6),o());f.position.y=2.9,i.add(h,f),l=f,u=2.9}else if(n.id==="bacheca"){const h=new lt(new Kt(.16,1.7,.16),a);h.position.y=.85;const f=new lt(new Kt(1.35,.85,.08),o());f.position.y=1.85,i.add(h,f),l=f,u=1.85}else{const h=new lt(new Kt(.18,1.9,.18),a),f=new lt(new Kt(.18,1.9,.18),a),_=new lt(new Kt(1.75,.16,.18),a),x=new lt(new Mn(.24,0),o());h.position.set(-.72,.95,0),f.position.set(.72,.95,0),_.position.y=1.82,x.position.y=1.45,i.add(h,f,_,x),l=x,u=1.45}const d=Ae(n.x,n.y,n.z,1,0,0);return i.position.set(n.x,n.y,n.z),i.quaternion.copy(d),e.add(i),{def:n,bob:l,baseY:u,accents:r,ring:c}}function h_(n,t){(n instanceof ee||n instanceof vs)&&n.color.setHex(t)}function d_(n,t,e){let i=null,r=Qc*Qc;for(const s of Ts){const o=n-s.x,a=t-s.y,c=e-s.z,l=o*o+a*a+c*c;l<=r&&(i=s,r=l)}return i}function f_(n,t){return t.claimed.has(n.id)?`${n.name} · già presa`:n.needsCourse&&!t.courseClear?`${n.name} · prima il percorso`:`Prendi · ${n.name} · +${n.coins}`}function p_(n,t,e){if(n.opensBoard&&e.openBoard(),t.claimed.has(n.id)){e.toast(n.opensBoard?"La bacheca elenca i giochi.":`${n.name} è già tua.`);return}if(n.needsCourse&&!t.courseClear){e.toast("Corri fino al cerchio ciano, poi torna al cancello.");return}t.claimed.add(n.id),bs(t,n.coins),e.sync(),e.toast(`+${n.coins} · ${n.line}`),m_(t,e),navigator.vibrate?.(18)}function m_(n,t){n.claimed.has("giro")||r_.every(e=>n.claimed.has(e))&&(n.claimed.add("giro"),bs(n,Jc),t.sync(),t.toast(`+${Jc} · Giro degli spicchi chiuso.`))}let La=null;function g_(n){La=n}function pu(){return La}function __(){La=null}const tl=y_(an);function x_(n,t,e,i,r){const s=cs.map((x,m)=>{const p=T_(t,x.color);return p.visible=!1,n.add(p),p.userData.lane=(m-1)*.62,{...x,mesh:p}});let o="idle",a=0,c=0,l=0;i.onAbandon(()=>{if(o==="countdown"){d("Corsa annullata. Non hai ancora puntato.");return}o==="racing"&&_(!1,c)}),i.onResultClose(()=>{o="idle",h(),u(),i.showRace(null),i.showResult(null)});function u(){r.teleport(ki.x,ki.y,ki.z,Hi.x,Hi.y,Hi.z)}function d(x){o="idle",h(),i.showRace(null),i.toast(x),u()}function h(){for(const x of s)x.mesh.visible=!1}function f(x){for(const m of s){const p=Math.min(tl,x/m.seconds*tl),y=E_(an,p),T=m.mesh.userData.lane,S=typeof T=="number"?T:0,L=new z(y.x,y.y,y.z).normalize(),E=new z(y.dx,y.dy,y.dz);E.addScaledVector(L,-E.dot(L)),E.lengthSq()<1e-6&&E.set(0,0,1),E.normalize();const A=new z().crossVectors(L,E).normalize(),C=L.multiplyScalar(Nt).addScaledVector(A,S);C.normalize().multiplyScalar(Nt),m.mesh.visible=!0,m.mesh.position.copy(C),m.mesh.quaternion.copy(Ae(C.x,C.y,C.z,E.x,E.y,E.z))}}function _(x,m){if(o==="result"||o==="idle")return;o="result";const p=cs.filter(A=>x&&m<A.seconds).length,y=x?cs.length+1-p:4,T=fu(y,l),S=t_[y-1]??70;a_(e,{payout:T,rank:S,clean:x}),i.sync(),i.showRace(null);const L=T-l,E=L>0?`+${L}`:String(L);i.showResult({place:y,time:x?m:null,stake:l,payout:T,netLabel:E,title:M_(y),line:S_(y)}),i.toast(y===1?"Rango settimanale aggiornato.":`Chiudi ${y}°. Rango ${e.weekRank}.`)}return{locksWorld:()=>o==="countdown"||o==="racing"||o==="result",isRacing:()=>o==="racing",start(x){if(o!=="idle")return;if(!x.playable){i.toast(`${x.name} non è in questa anteprima. Si corre Ostacoli.`);return}if(e.coins<x.demoStake){i.toast(`Servono ${x.demoStake} monete. Nel portafoglio: ${e.coins}.`);return}l=x.demoStake,a=3,c=0,o="countdown";const m=an[0],p=an[1]??m;m&&p&&r.teleport(m.x,m.y,m.z,p.x-m.x,p.y-m.y,p.z-m.z),f(0),i.showResult(null),i.showRace({title:"Ostacoli · demo",time:"3",hint:"Via tra poco. Le frecce ambra segnano i varchi.",canQuit:!0,lock:!0})},update(x){if(o==="idle"||o==="result")return;const m=Math.min(x,.05);if(o==="countdown"){a-=m;const S=Math.max(1,Math.ceil(a));if(i.showRace({title:"Ostacoli · demo",time:a>0?String(S):"Via!",hint:"Tieni il pollice in alto sul pad per andare avanti.",canQuit:!0,lock:!0}),a<=0){if(!o_(e,l)){d("Monete insufficienti. La corsa non parte."),i.sync();return}i.sync(),o="racing",c=0}return}c+=m,f(c),i.showRace({title:"Ostacoli · demo",time:`${c.toFixed(1)}s`,hint:v_(c),canQuit:!0,lock:!1});const p=r.x-pe.x,y=r.y-pe.y,T=r.z-pe.z;p*p+y*y+T*T<=pe.r*pe.r?_(!0,c):c>=i_&&_(!1,c)}}}function v_(n){const t=cs.find(e=>e.seconds>=n);return t?`${t.name} chiude in ${t.seconds.toFixed(1)}s. Tu ${n.toFixed(1)}s.`:"Sei davanti a tutti. Chiudi sul cerchio ciano."}function M_(n){return n===1?"Primo posto":n===2?"Secondo posto":n===3?"Terzo posto":"Fuori tempo"}function S_(n){return n===1?"Il montepremi grosso è tuo. Rami arriva dopo.":n===2?"Qualcosa torna. Rami era già al cerchio.":n===3?"La puntata si è assottigliata.":"Ultimo. La puntata resta sul tavolo."}function y_(n){let t=0;for(let e=1;e<n.length;e++){const i=n[e-1],r=n[e];!i||!r||(t+=Math.hypot(r.x-i.x,r.y-i.y,r.z-i.z))}return t}function E_(n,t){let e=t;for(let r=1;r<n.length;r++){const s=n[r-1],o=n[r];if(!s||!o)continue;const a=o.x-s.x,c=o.y-s.y,l=o.z-s.z,u=Math.hypot(a,c,l)||1e-4;if(e<=u||r===n.length-1){const d=Math.min(1,e/u);return{x:s.x+a*d,y:s.y+c*d,z:s.z+l*d,dx:a,dy:c,dz:l}}e-=u}const i=n[n.length-1]??{x:0,y:Nt,z:0};return{x:i.x,y:i.y,z:i.z,dx:1,dy:0,dz:0}}function T_(n,t){const e=new vn,i=be(n,t),r=new lt(new Ta(.14,.72,2,6),i);r.position.y=.86;const s=new lt(new Ze(.13,6,5),be(n,16769220));return s.position.y=1.48,e.add(r,s),e.scale.setScalar(.2),e}const b_=[.02,.05,.04,.1,.16,.05];function ms(n,t,e){const i=Math.hypot(n,t,e)||1,r=n/i*Nt,s=t/i*Nt,o=e/i*Nt,a=Math.acos(Math.min(1,Math.max(-1,s/Nt))),c=Math.atan2(r,o),l=Math.min(1,a/.18,(Math.PI-a)/.18),u=ql(r,o),h=.09+(b_[u]??0)*.45+Math.sin(c*2+.4)*Math.sin(a*1.35)*.09+Math.sin(c*3.1-a*1.8)*.045,f=Math.max(.015,Math.min(.28,h))*l,_=Math.max($l(r,s,o),cu(r,s,o));return f*(1-_)}function _i(n,t,e){const i=Math.hypot(n,t,e)||1,r=(Nt+ms(n,t,e))/i;return{x:n*r,y:t*r,z:e*r}}const el=1.35,nl=3;function A_(n){const t=[w_(),...R_(),...C_()],e=new Zi(L_(),new ee({color:16777215}),Math.max(1,t.length));return e.frustumCulled=!1,n.add(e),il(e,t,0),{update(i,r,s,o){let a=!1;for(const c of t){if(c.taken||s.claimed.has(c.id)){c.taken=!0;continue}const l=r.x-c.x,u=r.y-c.y,d=r.z-c.z;l*l+u*u+d*d>el*el||(c.taken=!0,s.claimed.add(c.id),bs(s,nl),a=!0,o.sync(),o.toast(`+${nl} sul sentiero`),navigator.vibrate?.(8))}(a||t.some(c=>!c.taken))&&il(e,t,i)}}}function w_(){const n=Ut,t=Ee(.72,n,0,.45),e=_i(t.x,t.y,t.z),i=Ae(t.x,t.y,t.z,Math.cos(n),0,-Math.sin(n));return{id:"moneta-via",x:e.x,y:e.y,z:e.z,qx:i.x,qy:i.y,qz:i.z,qw:i.w,taken:!1}}function R_(){const n=Ut;return[{id:"moneta-vicolo",colat:re+.04,daz:.18},{id:"moneta-mercato",colat:re+.04,daz:-.18},{id:"moneta-bottega",colat:.5,daz:0}].map(e=>{const i=Ee(e.colat,n+e.daz,0,e.daz===0?2.2:0),r=_i(i.x,i.y,i.z),s=Ae(i.x,i.y,i.z,Math.cos(n),0,-Math.sin(n));return{id:e.id,x:r.x,y:r.y,z:r.z,qx:s.x,qy:s.y,qz:s.z,qw:s.w,taken:!1}})}function C_(){const n=[],t=[.46,.7,1.18,1.92,2.32];let e=0;for(let i=0;i<6;i+=1){const r=ye(i);for(const s of t){const o=Ee(s,r,0,i%2===0?1.65:-1.65);if(P_(o.x,o.y,o.z))continue;const a=_i(o.x,o.y,o.z),c=Ae(o.x,o.y,o.z,Math.cos(r),0,-Math.sin(r));n.push({id:`moneta-${e}`,x:a.x,y:a.y,z:a.z,qx:c.x,qy:c.y,qz:c.z,qw:c.w,taken:!1}),e+=1}}return n}function P_(n,t,e){if(lu(n,t,e)||Ca(n,t,e,3.2))return!0;for(const o of Ts){const a=n-o.x,c=t-o.y,l=e-o.z;if(a*a+c*c+l*l<49)return!0}const i=n-pe.x,r=t-pe.y,s=e-pe.z;return i*i+r*r+s*s<25}function il(n,t,e){for(let i=0;i<t.length;i+=1){const r=t[i];if(!r)continue;const s=r.taken?0:.85+Math.sin(e*3.2+i)*.08,o=r.taken?.001:s;Ji(n,i,r.x,r.y,r.z,o,o,o,r.qx,r.qy,r.qz,r.qw,15769658)}Qi(n)}function L_(){const n=new Mn(.22,0);return n.translate(0,.55,0),n}const rl=.0052;function D_(n,t){const e=new Set;let i=0,r=.4,s=!1,o=!1,a=!1,c=0,l=0;const u=document.createElement("div");u.className="stick",u.innerHTML='<div class="stick-knob"></div><span>cammina</span>';const d=u.querySelector(".stick-knob"),h=u.querySelector("span");if(!d||!h)throw new Error("levetta incompleta");const f=document.createElement("button");f.type="button",f.className="jump",f.textContent="Salta",f.setAttribute("aria-label","Salta"),t.append(u,f);let _=-1,x=0,m=0,p=0,y=0;const T=(R,F)=>{const N=Math.hypot(R,F)||1,G=Math.min(46,N);p=R/N*G,y=F/N*G,d.style.transform=`translate(${p}px, ${y}px)`};u.addEventListener("pointerdown",R=>{R.preventDefault(),R.stopPropagation(),_=R.pointerId,x=R.clientX,m=R.clientY,u.setPointerCapture(R.pointerId),u.classList.add("on")}),u.addEventListener("pointermove",R=>{R.pointerId===_&&(R.preventDefault(),T(R.clientX-x,R.clientY-m))});const S=R=>{R.pointerId===_&&(_=-1,p=0,y=0,d.style.transform="translate(0px, 0px)",u.classList.remove("on"))};u.addEventListener("pointerup",S),u.addEventListener("pointercancel",S),f.addEventListener("pointerdown",R=>{R.preventDefault(),R.stopPropagation(),a||(o=!0),a=!0,f.classList.add("on")});const L=()=>{a=!1,f.classList.remove("on")};f.addEventListener("pointerup",L),f.addEventListener("pointercancel",L),f.addEventListener("pointerleave",L);const E=(R,F)=>{F&&!R.repeat&&(R.code==="KeyE"||R.code==="KeyF")&&(s=!0),F&&!R.repeat&&R.code==="Space"&&(o=!0),F?e.add(R.code):e.delete(R.code),(R.code==="Space"||R.code.startsWith("Arrow"))&&R.preventDefault()};window.addEventListener("keydown",R=>E(R,!0)),window.addEventListener("keyup",R=>E(R,!1)),window.addEventListener("blur",()=>{e.clear(),_=-1,p=0,y=0,d.style.transform="translate(0px, 0px)",a=!1});let A=!1,C=0,v=0;const g=R=>{if(R.button!==0)return;const F=R.target;F instanceof Element&&F.closest("button, .stick, .sheet, .panel, .atlas")||(A=!0,C=R.clientX,v=R.clientY,R.currentTarget instanceof Element&&R.currentTarget.setPointerCapture(R.pointerId))},w=R=>{const F=document.pointerLockElement===n;if(!A&&!F)return;const U=F?R.movementX:R.clientX-C,N=F?R.movementY:R.clientY-v;C=R.clientX,v=R.clientY,c+=U,l+=N},P=()=>{A=!1};return n.addEventListener("pointerdown",g),n.addEventListener("pointermove",w),n.addEventListener("pointerup",P),n.addEventListener("pointercancel",P),t.addEventListener("pointerdown",R=>{R.target===t&&g(R)}),t.addEventListener("pointermove",w),{get yaw(){return i},get pitch(){return r},sample(R){e.has("KeyQ")&&(i+=R*1.6),e.has("KeyR")&&(i-=R*1.6),i-=c*rl,r=Math.min(1.05,Math.max(.22,r+l*rl*.85)),c=0,l=0;const F=Math.hypot(p,y)/46;let U=p/46,N=-y/46;const G=e.has("KeyA")||e.has("ArrowLeft")||e.has("KeyD")||e.has("ArrowRight")||e.has("KeyW")||e.has("ArrowUp")||e.has("KeyS")||e.has("ArrowDown");(e.has("KeyA")||e.has("ArrowLeft"))&&(U-=1),(e.has("KeyD")||e.has("ArrowRight"))&&(U+=1),(e.has("KeyW")||e.has("ArrowUp"))&&(N+=1),(e.has("KeyS")||e.has("ArrowDown"))&&(N-=1);const H=Math.hypot(U,N);H>1&&(U/=H,N/=H);const J=e.has("ShiftLeft")||e.has("ShiftRight"),it=F>=.82||J&&G;u.classList.toggle("run",F>=.82),h.textContent=F>=.82?"corri":"cammina";const ft=o,wt=s;return o=!1,s=!1,{strafe:U,forward:N,run:it,jump:ft,interact:wt}},pokeInteract(){s=!0},pokeJump(){o=!0},setYaw(R,F){i=R,F!==void 0&&(r=F)}}}const Ni={x:0,y:0,z:0};function I_(n,t,e,i,r,s){let o=n,a=t,c=e;const l=Math.hypot(o,a,c)||1;o/=l,a/=l,c/=l;for(let d=0;d<3;d++)for(const h of s){if(i>=h.h-.02)continue;const f=Math.hypot(h.x,h.y,h.z)||1,_=h.x/f,x=h.y/f,m=h.z/f,p=Math.min(1,Math.max(-1,o*_+a*x+c*m)),y=Math.acos(p)*Nt,T=r+h.r;if(y>=T)continue;let S=_-o*p,L=x-a*p,E=m-c*p;const A=Math.hypot(S,L,E);A<1e-6?(S=1,L=0,E=0):(S/=A,L/=A,E/=A);const C=(T-y)/Nt;o-=S*C,a-=L*C,c-=E*C;const v=Math.hypot(o,a,c)||1;o/=v,a/=v,c/=v}const u=Nt+i;return Ni.x=o*u,Ni.y=a*u,Ni.z=c*u,{x:Ni.x,y:Ni.y,z:Ni.z}}const U_=2.35,N_=4.7,F_=27,O_=5.15,z_=3.85,B_=.09,k_=1/90,H_=9,Ft=new z,pn=new z,sl=new z,$r=new zn,po=new z;function V_(n,t,e){let i=ki.x,r=ki.y,s=ki.z,o=0,a=0,c=0,l=!0,u=!1,d=!0,h=0,f=!1,_="idle",x=Nt;const m=new z(Hi.x,Hi.y,Hi.z).normalize(),p=m.clone(),y=new z(i,r,s).normalize(),T=G_(n,t),S=new lt(new ba(.1,12),new ee({color:1713200,transparent:!0,opacity:.28,depthWrite:!1}));n.add(S);const L=(g=0)=>{Ft.set(i,r,s).normalize();const w=Math.hypot(i,r,s);T.position.copy(Ft).multiplyScalar(w+g),x=w+g,T.quaternion.copy(Ae(Ft.x,Ft.y,Ft.z,p.x,p.y,p.z)),S.position.copy(Ft).multiplyScalar(Math.max(Nt,w-o)+.03),$r.setFromUnitVectors(po.set(0,0,1),Ft),S.quaternion.copy($r),S.scale.setScalar(1-Math.min(.45,o*.28))};L();const E={get x(){return i},get y(){return r},get z(){return s},get gait(){return _},get radius(){return x},update(g,w,P){const R=e.sample(Math.min(g,.05));!P&&R.interact&&(f=!0);const F=!P&&R.jump;F||(u=!1);const U=!P&&R.run;let N=Math.min(g,.05);for(;N>0;){const it=Math.min(k_,N);N-=it,C(it,w,P?0:R.strafe,P?0:R.forward,F,U)}const G=!P&&l&&Math.abs(R.strafe)+Math.abs(R.forward)>.08,H=G&&U;G&&(c+=g*(H?15.5:7.6));const J=G?Math.sin(c*2)*(H?.02:.01):0;!l&&o>.08?_="air":H?_="run":G?_="walk":_="idle",L(J),h=Math.max(0,h-g*2.6),v(_,h)},consumeInteract(){const g=f;return f=!1,g},syncCamera(g,w){const P=1-Math.exp(-w*H_);Ft.set(i,r,s).normalize(),y.lerp(Ft,P).normalize(),A(pn);const R=window.innerHeight>window.innerWidth,F=R?3.15:3.7,U=Math.cos(e.pitch)*F,N=Math.hypot(i,r,s);g.fov=R?70:60,g.updateProjectionMatrix(),g.position.copy(y).multiplyScalar(N).addScaledVector(y,.7+Math.sin(e.pitch)*F*.72).addScaledVector(pn,-U),g.up.copy(y),po.copy(y).multiplyScalar(N).addScaledVector(y,.2).addScaledVector(pn,1.45),g.lookAt(po)},aim(){return A(pn),{x:pn.x,y:pn.y,z:pn.z}},teleport(g,w,P,R,F,U){Ft.set(g,w,P).normalize(),o=0,a=0,l=!0,d=!0,h=0;const N=Nt+ms(Ft.x,Ft.y,Ft.z);i=Ft.x*N,r=Ft.y*N,s=Ft.z*N,m.set(R,F,U),m.addScaledVector(Ft,-m.dot(Ft)),m.lengthSq()<1e-6&&m.set(1,0,0).addScaledVector(Ft,-Ft.x),m.normalize(),p.copy(m),e.setYaw(0,.4),y.copy(Ft),L()},lookToward(g,w,P){Ft.set(i,r,s).normalize(),m.set(g-i,w-r,P-s),m.addScaledVector(Ft,-m.dot(Ft)),!(m.lengthSq()<1e-8)&&(m.normalize(),p.copy(m),e.setYaw(0,.42))}};function A(g){Ft.set(i,r,s).normalize(),$r.setFromAxisAngle(Ft,e.yaw),g.copy(m).applyQuaternion($r),g.addScaledVector(Ft,-g.dot(Ft)),g.lengthSq()<1e-6&&g.set(0,0,1),g.normalize()}function C(g,w,P,R,F,U){if(Ft.set(i,r,s).normalize(),A(pn),sl.crossVectors(pn,Ft).normalize(),P!==0||R!==0){p.copy(sl).multiplyScalar(P).addScaledVector(pn,R);const J=Math.min(1,p.length());p.normalize();const it=U?N_:U_;i+=p.x*it*g*J,r+=p.y*it*g*J,s+=p.z*it*g*J}const N=I_(i,r,s,o,B_,w);i=N.x,r=N.y,s=N.z,Ft.set(i,r,s).normalize(),m.addScaledVector(Ft,-m.dot(Ft)),m.lengthSq()<1e-6&&m.set(1,0,0).addScaledVector(Ft,-Ft.x),m.normalize(),p.addScaledVector(Ft,-p.dot(Ft)),p.lengthSq()<1e-6?p.copy(m):p.normalize(),F&&!u&&(l?(a=O_,o=.04,l=!1,d=!0,u=!0):d&&(a=z_,d=!1,h=1,u=!0)),a-=F_*g,o+=a*g,o<=0?(o=0,a=0,l=!0,d=!0):l=!1,Ft.set(i,r,s).normalize();const G=ms(Ft.x,Ft.y,Ft.z),H=Nt+G+o;i=Ft.x*H,r=Ft.y*H,s=Ft.z*H}return E;function v(g,w){const P=g==="air",R=g==="run",F=g==="walk",U=R?Math.sin(c)*1.5:F?Math.sin(c)*.72:0,N=T.getObjectByName("legL"),G=T.getObjectByName("legR"),H=T.getObjectByName("armL"),J=T.getObjectByName("armR"),it=T.getObjectByName("torso"),ft=T.getObjectByName("cape"),wt=T.getObjectByName("puff");if(N&&G&&(N.rotation.x=P?.7:U,G.rotation.x=P?-.45:-U),H&&J){const Zt=R?1.2:.62,rt=P?w>.05?-1.45:-.85:0;H.rotation.x=P?rt:U*Zt,J.rotation.x=P?rt:-U*Zt,H.rotation.z=R?.35:.08,J.rotation.z=R?-.35:-.08}if(it&&(it.rotation.x=P?-.22:R?.42:F?.14:0),ft){const Zt=R?1.05+Math.sin(c*2)*.22:F?.28+Math.sin(c)*.16:.1;ft.rotation.x=P?.85:Zt}wt instanceof lt&&wt.material instanceof ee&&(wt.material.opacity=w*.9,wt.scale.setScalar(.55+(1-w)*1.7))}}function G_(n,t){const e=new vn,i=be(t,1929168),r=be(t,16769220),s=be(t,1321018),o=be(t,1195910),a=new lt(new oe(.12,.16,.62,6),i);a.name="torso",a.position.y=1.22,e.add(a);const c=new lt(new oe(.045,.05,.12,5),r);c.position.y=1.58,e.add(c);const l=new lt(new Ze(.145,8,6),r);l.position.y=1.74,e.add(l);const u=new lt(new Kt(.22,.055,.07),be(t,15769658));u.position.set(0,1.76,.11),e.add(u);const d=new lt(new Kt(.16,.28,.08),s);d.position.set(0,1.24,-.16),e.add(d);const h=new lt(new Kt(.18,.46,.03),o);h.name="cape",h.position.set(0,1.18,-.2),h.geometry.translate(0,-.18,0),e.add(h),e.add(Kr("legL",-.09,.88,.78,.045,i)),e.add(Kr("legR",.09,.88,.78,.045,i)),e.add(Kr("armL",-.2,1.46,.58,.032,i)),e.add(Kr("armR",.2,1.46,.58,.032,i));const f=new lt(new Ke(.95,.07,5,14),new ee({color:16171338,transparent:!0,opacity:0,depthWrite:!1}));return f.name="puff",f.rotation.x=Math.PI/2,f.position.y=.12,e.add(f),e.scale.setScalar(.2),n.add(e),e}function Kr(n,t,e,i,r,s){const o=new vn;o.name=n,o.position.set(t,e,0);const a=new lt(new oe(r*.85,r,i,5),s);return a.position.y=-i/2,o.add(a),o}const mu=13944564;function W_(){const n=new Ze(1,20,12),t=n.attributes.position;if(!t)throw new Error("cielo senza posizioni");const e=new Float32Array(t.count*3),i=new Gt(6124784),r=new Gt(mu),s=new Gt(16743080),o=new Gt(8376575),a=new Gt;for(let l=0;l<t.count;l++){const u=t.getY(l),d=t.getX(l),h=t.getZ(l),f=wh.clamp((u+.12)/1.12,0,1);a.copy(r).lerp(i,f*f);const _=Math.max(0,-h*.7+d*.45)*Math.max(0,1-Math.abs(u)*2.4);a.lerp(s,_*.38);const x=Math.max(0,h*.55-d*.25)*Math.max(0,1-Math.abs(u)*2.2);a.lerp(o,x*.4),e[l*3]=a.r,e[l*3+1]=a.g,e[l*3+2]=a.b}n.setAttribute("color",new we(e,3));const c=new lt(n,new ee({vertexColors:!0,side:We,fog:!1,depthWrite:!1}));return c.scale.setScalar(180),c.frustumCulled=!1,c.renderOrder=-1,c}const ol=mu,al=.5;function X_(n){const t=n.getContext("webgl2",{antialias:!1,alpha:!1,depth:!0,stencil:!1,powerPreference:"high-performance"});if(!t)throw new Error("Serve WebGL2 per Minimondo.");const e=new $g({canvas:n,context:t,antialias:!1,alpha:!1,powerPreference:"high-performance"});e.setPixelRatio(1),e.outputColorSpace=$e,e.toneMapping=Nn,e.setClearColor(ol,1),e.autoClear=!0;const i=new lc;i.fog=new ya(ol,16,74),i.add(new ad(14148863,15182032,.62));const r=new mc(16765122,1.05);r.position.set(-16,11,9),i.add(r);const s=new mc(10401023,.58);s.position.set(14,6,-12),i.add(s);const o=new sn(62,1,.05,420),a=new Kn(2,2,{depthBuffer:!0,stencilBuffer:!1,generateMipmaps:!1,minFilter:De,magFilter:De});a.texture.colorSpace=$e;const c=new Aa(-1,1,1,-1,0,1);c.position.z=1;const l=new ee({map:a.texture});l.toneMapped=!1;const u={value:new Wt(1,1)};l.onBeforeCompile=_=>{_.uniforms.uRes=u,_.fragmentShader=_.fragmentShader.replace("#include <common>",`#include <common>
uniform vec2 uRes;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
        float luma = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
        gl_FragColor.rgb = mix(vec3(luma), gl_FragColor.rgb, 1.12);
        vec2 vigP = gl_FragCoord.xy / uRes - 0.5;
        float vig = smoothstep(0.22, 0.75, dot(vigP, vigP));
        gl_FragColor.rgb *= mix(1.0, 0.84, vig);`)};const d=new lc;return d.add(new lt(new Sr(2,2),l)),{renderer:e,scene:i,camera:o,resize:()=>{const _=Math.max(1,n.clientWidth),x=Math.max(1,n.clientHeight);e.setSize(_,x,!1),a.setSize(Math.max(2,Math.floor(_*al)),Math.max(2,Math.floor(x*al))),o.aspect=_/x,o.updateProjectionMatrix(),u.value.set(_,x)},render:()=>{e.setRenderTarget(a),e.render(i,o),e.setRenderTarget(null),e.render(d,c)}}}const q_={pole:"#f0a03a",hub:"#ff4d86",village:"#c9b6ff",biome:"#9ad7c4",games:"#e39a32",venue:"#f06a45",lookout:"#7ec8ee"},ui=2.55;function Y_(n){const t=document.createElement("button");t.type="button",t.className="ghost",t.textContent="Mappa",t.setAttribute("aria-expanded","false");const e=document.createElement("div");e.className="atlas",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Globo di Mondo-1"),e.innerHTML=`
    <div class="sheet map-sheet">
      <header class="sheet-head">
        <div>
          <p class="eyebrow">Globo · trascina e tocca</p>
          <h2>Mappa</h2>
        </div>
        <button type="button" class="ghost" id="map-close">Chiudi</button>
      </header>
      <canvas class="map-canvas" width="420" height="420" aria-label="Globo di Mondo-1, ruotabile"></canvas>
      <p class="map-caption" id="map-caption">Trascina per girare il pianeta. Tocca un luogo: ti volti verso di lui.</p>
      <ul class="map-list"></ul>
    </div>
  `,n.append(e);const i=document.createElement("p");i.className="guide",i.hidden=!0,n.append(i);const r=e.querySelector("canvas"),s=e.querySelector("#map-caption"),o=e.querySelector("ul"),a=e.querySelector("#map-close");if(!r||!s||!o||!a)throw new Error("mappa incompleta");const c=r.getContext("2d");if(!c)throw new Error("mappa senza canvas");const l=c;let u=!1,d=!0,h=0,f=.42,_=!1,x=null,m=420,p=420;const y=E=>{const A=Yt(E.colat,E.az);g_({name:E.name,x:A.x,y:A.y,z:A.z}),T(!1)};for(const E of da){if(E.kind==="biome")continue;const A=document.createElement("li"),C=document.createElement("button");C.type="button",C.className="map-chip",C.textContent=E.name,C.addEventListener("click",()=>y(E)),A.append(C),o.append(A)}const T=E=>{E&&!d||(u=E,e.hidden=!u,t.setAttribute("aria-expanded",String(u)),t.classList.toggle("on",u),u&&(_=!1))};t.addEventListener("click",()=>T(!u)),a.addEventListener("click",()=>T(!1)),e.addEventListener("click",E=>{E.target===e&&T(!1)}),r.addEventListener("pointerdown",E=>{x={x:E.clientX,y:E.clientY,moved:!1},r.setPointerCapture(E.pointerId)}),r.addEventListener("pointermove",E=>{if(!x)return;const A=E.clientX-x.x,C=E.clientY-x.y;A*A+C*C>16&&(x.moved=!0),h-=A*.008,f=Math.max(-1.15,Math.min(1.15,f+C*.008)),x.x=E.clientX,x.y=E.clientY,x.moved&&(_=!0)});const S=E=>{if(!x)return;const A=x.moved;x=null,A||L(E.clientX,E.clientY)};r.addEventListener("pointerup",S),r.addEventListener("pointercancel",()=>{x=null});const L=(E,A)=>{const C=r.getBoundingClientRect(),v=(E-C.left)/C.width*r.width,g=(A-C.top)/C.height*r.height,w=Q_(v,g,m,p);if(!w)return;const P=J_(w.x,w.y,w.z,h,f);let R=null,F=.96;for(const U of da){if(U.kind==="biome")continue;const N=Yt(U.colat,U.az,1),G=N.x*P.x+N.y*P.y+N.z*P.z;G>F&&(F=G,R=U)}R&&y(R)};return{isOpen:()=>u,toggle:()=>T(!u),close:()=>T(!1),setEnabled(E){d=E,t.disabled=!E,E||T(!1)},draw(E,A,C,v,g,w){const P=os(E,A,C),R=pu();if(R){const N=rx(P.colat,P.az,os(R.x,R.y,R.z).colat,os(R.x,R.y,R.z).az)*Nt;i.hidden=!1,i.textContent=`Verso ${R.name} · ${Math.max(1,Math.round(N))} m`}else i.hidden=!0;if(!u)return;_||(h=-P.az);const F=Math.round(Math.max(260,Math.min(420,r.clientWidth||340))),U=F;m=F,p=U,(r.width!==F||r.height!==U)&&(r.width=F,r.height=U),$_(l,F,U,h,f,E,A,C,v,g,w)},button:t}}function $_(n,t,e,i,r,s,o,a,c,l,u){const d=t/2,h=e/2,_=t*.4*(ui-1);n.clearRect(0,0,t,e),n.fillStyle="#141028",n.fillRect(0,0,t,e);const x=(A,C,v)=>{const g=j_(A,C,v,i,r),w=_/(ui-g.z);return{x:d+g.x*w,y:h-g.y*w,z:g.z,f:w}},m=[],p=9,y=4;for(let A=0;A<Se.length;A+=1){const C=Se[A];if(!C)continue;const v=ye(A)-Math.PI/Se.length;for(let g=0;g<p;g+=1){const w=.12+(Math.PI-.24)*g/p,P=.12+(Math.PI-.24)*(g+1)/p;for(let R=0;R<y;R+=1){const F=v+Math.PI*2/Se.length*(R/y),U=v+Math.PI*2/Se.length*((R+1)/y),G=[Yt(w,F,1),Yt(w,U,1),Yt(P,U,1),Yt(P,F,1)].map(ft=>x(ft.x,ft.y,ft.z)),H=(G[0]?.z??0)+(G[1]?.z??0)+(G[2]?.z??0)+(G[3]?.z??0);if(H<.15||!G[0])continue;const it=.42+.58*Math.max(0,H/4);m.push({z:H,color:ex(C.ground,it),pts:G})}}}m.sort((A,C)=>A.z-C.z);for(const A of m){const C=A.pts[0];if(C){n.beginPath(),n.moveTo(C.x,C.y);for(const v of A.pts.slice(1))n.lineTo(v.x,v.y);n.closePath(),n.fillStyle=A.color,n.fill()}}n.lineCap="round",cl(n,x,.64,K_,"#f070a8",3),Z_(n,x,ye(0),.28,1.05,"#f070a8",3),cl(n,x,Math.PI/2,Math.PI,"rgba(255, 228, 242, 0.45)",1.2);const T=[],S=(A,C,v)=>{for(const g of T)if((g.x-A)**2+(g.y-C)**2<676)return;T.push({x:A,y:C}),n.font="700 12px Outfit, sans-serif",n.textAlign="center",n.textBaseline="bottom",n.lineWidth=3,n.strokeStyle="rgba(16, 12, 32, 0.9)",n.fillStyle="#ffe4f2",n.strokeText(v,A,C-8),n.fillText(v,A,C-8)};for(let A=0;A<Se.length;A+=1){const C=Se[A];if(!C)continue;const v=x(...Zr(Yt(.95,ye(A),1)));v.z<.25||S(v.x,v.y,nx(C.id))}for(const A of da){if(A.kind==="biome")continue;const C=x(...Zr(Yt(A.colat,A.az,1)));C.z<.2||(n.fillStyle=q_[A.kind],n.beginPath(),n.arc(C.x,C.y,A.kind==="pole"?4:5.5,0,Math.PI*2),n.fill(),A.kind!=="pole"&&S(C.x,C.y,ix(A)))}const L=x(...Zr({x:s,y:o,z:a})),E=x(...Zr(tx(s+c*18,o+l*18,a+u*18)));L.z>.05&&(n.strokeStyle="#ffc43a",n.lineWidth=3,n.beginPath(),n.moveTo(L.x,L.y),n.lineTo(E.x,E.y),n.stroke(),n.fillStyle="#ffc43a",n.beginPath(),n.arc(L.x,L.y,5,0,Math.PI*2),n.fill(),n.fillStyle="#141028",n.beginPath(),n.arc(L.x,L.y,2.2,0,Math.PI*2),n.fill())}const K_=.52;function cl(n,t,e,i,r,s){const o=ye(0);n.beginPath();let a=!1;for(let c=0;c<=28;c+=1){const l=e===Math.PI/2?-Math.PI+c/28*Math.PI*2:o-i+2*i*c/28,u=Yt(e,l,1),d=t(u.x,u.y,u.z);if(d.z<.08){a=!1;continue}a?n.lineTo(d.x,d.y):n.moveTo(d.x,d.y),a=!0}n.strokeStyle=r,n.lineWidth=s,n.stroke()}function Z_(n,t,e,i,r,s,o){n.beginPath();let a=!1;for(let c=0;c<=24;c+=1){const l=Yt(i+(r-i)*c/24,e,1),u=t(l.x,l.y,l.z);if(u.z<.08){a=!1;continue}a?n.lineTo(u.x,u.y):n.moveTo(u.x,u.y),a=!0}n.strokeStyle=s,n.lineWidth=o,n.stroke()}function j_(n,t,e,i,r){const s=Math.cos(i),o=Math.sin(i),a=s*n+o*e,c=-o*n+s*e,l=Math.cos(r),u=Math.sin(r);return{x:a,y:l*t-u*c,z:u*t+l*c}}function J_(n,t,e,i,r){const s=Math.cos(-r),o=Math.sin(-r),a=s*t-o*e,c=o*t+s*e,l=Math.cos(-i),u=Math.sin(-i);return{x:l*n+u*c,y:a,z:-u*n+l*c}}function Q_(n,t,e,i){const s=e*.4*(ui-1),o=(n-e/2)/s,a=-(t-i/2)/s,c=Math.hypot(o,a,1),l=o/c,u=a/c,d=-1/c,h=ui*d,f=ui*ui-1,_=h*h-f;if(_<0)return null;const x=Math.sqrt(_),m=-h-x>0?-h-x:-h+x;return m<0?null:{x:l*m,y:u*m,z:ui+d*m}}function Zr(n){const t=Math.hypot(n.x,n.y,n.z)||1;return[n.x/t,n.y/t,n.z/t]}function tx(n,t,e){const i=Math.hypot(n,t,e)||1;return{x:n/i,y:t/i,z:e/i}}function ex(n,t){const e=Math.round((n>>16&255)*t),i=Math.round((n>>8&255)*t),r=Math.round((n&255)*t);return`rgb(${e}, ${i}, ${r})`}function nx(n){return n==="coral"?"Corallo":n==="mint"?"Menta":n==="violet"?"Viola":n==="crystal"?"Cristallo":n==="dune"?"Dune":"Lanterne"}function ix(n){return n.kind==="hub"?"Piazza":n.id==="quarter"?"Corallo":n.id==="mercato"?"Mercato":n.kind==="games"?"Giochi":n.id==="botteghe"?"Botteghe":n.id==="porta"?"Sud":n.id==="east-gate"?"Est":n.id==="dune-gate"?"Ovest":n.id==="terrazza"?"Terrazza":n.kind==="venue"?"Ostacoli":n.kind==="lookout"?"Belvedere":n.id==="mint"?"Menta":n.id==="violet"?"Viola":n.id==="crystal-town"?"Cristallo":n.id==="lantern"?"Lanterne":n.name}function rx(n,t,e,i){const r=Math.sin(n),s=Math.sin(e),o=Math.cos(n)*Math.cos(e)+r*s*Math.cos(t-i);return Math.acos(Math.min(1,Math.max(-1,o)))}function sx(n,t,e){n.innerHTML="";const i=window.matchMedia("(pointer: coarse)").matches,r=Cn("section","status");r.innerHTML=`
    <p class="mark">Minimondo</p>
    <p class="world">${jc}</p>
    <p class="coins"><span>monete</span> <strong id="coins">0</strong></p>
    <p class="rank">settimana ${ox(new Date)} · rango <strong id="rank">—</strong></p>
  `;const s=Y_(n),o=Cn("div","tools"),a=mo("Giochi","primary");a.setAttribute("aria-expanded","false"),o.append(s.button,a);const c=Cn("div","coach");c.innerHTML=`
    <p>La città è avanti, verso il palo. Levetta a fondo per correre.</p>
    <strong>${i?"Mappa in alto a destra. I paesi stanno negli spicchi.":"Shift corre. M apre la mappa. I paesi stanno negli spicchi."}</strong>
  `;const l=Cn("p","hint");l.textContent=i?"Levetta a fondo per correre · dito sul mondo per girare · Salta due volte":"WASD cammina · Shift corre · M mappa · E raccoglie · spazio, due salti";const u=mo("","prompt");u.hidden=!0;const d=Cn("div","toasts"),h=Cn("section","race");h.hidden=!0,h.innerHTML=`
    <p class="race-kicker"></p>
    <p class="race-time"></p>
    <p class="race-hint"></p>
    <button type="button" class="ghost" id="race-quit">Abbandona</button>
  `;const f=Cn("div","result");f.hidden=!0,f.innerHTML=`
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
          <p class="eyebrow">${jc} · proto ${X0}</p>
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
  `,n.append(r,o,c,l,u,d,h,f,_);const x=Ye(r,"#coins"),m=Ye(r,"#rank"),p=Ye(_,"#wallet"),y=Ye(_,".modes"),T=Ye(_,".buyin"),S=Ye(_,"#events-close"),L=Ye(_,"#buy-back"),E=Ye(_,"#buy-go"),A=Ye(h,"#race-quit"),C=Ye(f,"#res-close"),v=Ye(h,".race-kicker"),g=Ye(h,".race-time"),w=Ye(h,".race-hint");let P=null,R=!1,F=!1,U=()=>{},N=()=>{},G="";for(const rt of Q0){const Ct=document.createElement("li"),Y=mo("","mode");Y.innerHTML=`
      <span>
        <strong>${rt.name}</strong>
        <em>${rt.players} giocatori · ${rt.playable?"demo pronta":"presto"}</em>
      </span>
      <b>${rt.demoStake}</b>
    `,Y.addEventListener("click",()=>ft(rt)),Ct.append(Y),y.append(Ct)}const H=rt=>{if(rt&&(F||!h.hidden||R)){wt("Prima chiudi la corsa.");return}_.hidden=!rt,a.setAttribute("aria-expanded",String(rt)),a.classList.toggle("on",rt),rt&&it()};a.addEventListener("click",()=>{_.hidden&&s.close(),H(_.hidden)}),s.button.addEventListener("click",()=>{s.isOpen()&&H(!1)}),S.addEventListener("click",()=>H(!1)),_.addEventListener("click",rt=>{rt.target===_&&H(!1)}),L.addEventListener("click",it),E.addEventListener("click",()=>{if(!P)return;if(t.coins<P.demoStake){wt(`Ti servono ${P.demoStake} monete. Ne hai ${t.coins}.`);return}if(!P.playable){wt(P.id==="giro"?"Il giro non si punta: visita le sei mete.":`${P.name} arriva dopo. Oggi si corre Ostacoli.`);return}const rt=P;H(!1),e.onStartDemo(rt)}),A.addEventListener("click",()=>U()),C.addEventListener("click",()=>{f.hidden=!0,R=!1,N()}),window.addEventListener("keydown",rt=>{rt.repeat||(rt.code==="KeyM"&&s.toggle(),rt.code==="Escape"&&f.hidden&&(s.close(),H(!1)))}),u.addEventListener("click",()=>{e.onInteract(),u.blur()});const J=()=>c.classList.add("gone");window.setTimeout(J,7e3),window.addEventListener("pointerdown",J,{once:!0}),window.addEventListener("keydown",J,{once:!0});function it(){y.hidden=!1,T.hidden=!0,P=null}function ft(rt){P=rt,y.hidden=!0,T.hidden=!1,Rn(T,"#buy-kicker",rt.playable?"Demo locale · 4 corridori":"Non ancora in anteprima"),Rn(T,"#buy-name",rt.name),Rn(T,"#buy-blurb",rt.blurb),Rn(T,"#buy-stake",String(rt.demoStake));const Ct=Ye(T,"#buy-payout");Ct.innerHTML="",rt.playable?(du.forEach((Y,Z)=>{const dt=document.createElement("li");dt.innerHTML=`<span>${Z+1}°</span><b>${fu(Z+1,rt.demoStake)}</b>`,dt.dataset.mult=String(Y),Ct.append(dt)}),Rn(T,"#buy-note","La puntata esce quando parte il via. 1° prende il grosso, 4° non riprende nulla."),E.textContent="Entra (demo)"):(Rn(T,"#buy-note",`In sala vera la puntata va da ${rt.min} a ${rt.max}. Qui il tasto non apre la stanza.`),E.textContent="Entra (demo)")}function wt(rt){const Ct=Cn("p","toast");for(Ct.textContent=rt,d.append(Ct);d.children.length>3;)d.firstElementChild?.remove();window.setTimeout(()=>Ct.classList.add("out"),3200),window.setTimeout(()=>Ct.remove(),3700)}function Zt(){x.textContent=String(t.coins),p.textContent=String(t.coins),m.textContent=t.weekRank===null?"—":String(t.weekRank),x.classList.remove("pop"),x.offsetWidth,x.classList.add("pop")}return{blocksPlay:()=>s.isOpen()||!_.hidden||R||F,openBoard(){s.close(),H(!0)},paintMap(rt,Ct,Y,Z,dt,Lt){s.draw(rt,Ct,Y,Z,dt,Lt)},toast:wt,setPrompt(rt){const Ct=rt??"";Ct!==G&&(G=Ct,u.hidden=Ct.length===0,u.textContent=Ct)},sync:Zt,showRace(rt){if(!rt){h.hidden=!0,F=!1,a.disabled=R,s.setEnabled(!R);return}h.hidden=!1,F=rt.lock,a.disabled=!0,s.close(),s.setEnabled(!1),v.textContent=rt.title,g.textContent=rt.time,w.textContent=rt.hint,A.hidden=!rt.canQuit},showResult(rt){if(!rt){f.hidden=!0,R=!1,a.disabled=!1,s.setEnabled(!0);return}R=!0,f.hidden=!1,s.close(),s.setEnabled(!1),h.hidden=!0,F=!1,a.disabled=!0,Rn(f,"#res-title",rt.title),Rn(f,"#res-line",rt.time===null?rt.line:`${rt.line} Tempo ${rt.time.toFixed(1)}s.`),Rn(f,"#res-math",`Puntata ${rt.stake} · incasso ${rt.payout} · netto ${rt.netLabel}`)},onAbandon(rt){U=rt},onResultClose(rt){N=rt}}}function Rn(n,t,e){const i=n.querySelector(t);i&&(i.textContent=e)}function Ye(n,t){const e=n.querySelector(t);if(!e)throw new Error(`manca ${t}`);return e}function Cn(n,t){const e=document.createElement(n);return e.className=t,e}function mo(n,t){const e=document.createElement("button");return e.type="button",e.className=t,e.textContent=n,e}function ox(n){const t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate())),e=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-e);const i=new Date(Date.UTC(t.getUTCFullYear(),0,1));return Math.ceil(((t.getTime()-i.getTime())/864e5+1)/7)}function ax(n,t,e){let i=Math.imul(n|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,1442695041);return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,i=Math.imul(i,2246822519),i^=i>>>13,i>>>0}const Me=(n,t,e)=>ax(n,t,e)/4294967296;function cx(n){let t=2166136261;for(let e=0;e<n.length;e+=1)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}const jr=cx("Mondo-1"),ll=[15765672,9363648,13150448,9364720,16756858,15765704];function lx(n,t,e){const i=[],r=[],s=[],o=[],a=[],c=[],l=[];for(let u=0;u<6;u+=1){const d=ye(u),h=[];for(let f=0;f<168;f+=1){const _=d+(Me(u,f,jr)-.5)*.9,x=.26+Me(f,u,jr^17)*2.4;if(Jr(x,_,.35))continue;const m=.85+Me(u,f,4)*.85;if(h.push(Qr(x,_,m,ul(u,f))),f%4===0){const p=Ee(x,_,(Me(f,u,21)-.5)*1.6,(Me(u,f,27)-.5)*1.6),y=Math.hypot(p.x,p.y,p.z)||1,T=Math.acos(Math.min(1,Math.max(-1,p.y/y))),S=Math.atan2(p.x,p.z);Jr(T,S,.35)||h.push(Qr(T,S,m*.72,ul(u,f+9)))}}for(let f=0;f<18;f+=1){const _=d+(Me(u+20,f,jr)-.5)*.8,x=.4+Me(f,u+3,jr)*2.1;if(Jr(x,_,3.5))continue;const m=.55+Me(u,f,9)*1.35,p=Qr(x,_,m,ll[u]??13421772);if(l.push(p),f%3===0){const y=Ee(x,_,(Me(f,u,2)-.5)*2.4,(Me(u,f,6)-.5)*2.4),T=Math.hypot(y.x,y.y,y.z)||1,S=Math.acos(Math.min(1,Math.max(-1,y.y/T))),L=Math.atan2(y.x,y.z);Jr(S,L,2)||l.push(Qr(S,L,m*.62,ll[u]??13421772))}}u===0?i.push(...h):u===1?r.push(...h):u===2?s.push(...h):u===3?o.push(...h):u===4?a.push(...h):c.push(...h)}si(n,t,ux(),i,!1,!0),si(n,t,hx(),r,!1,!0),si(n,t,dx(),s,!1,!0),si(n,t,fx(),o,!0,!0),si(n,t,hl(),a,!1,!0),si(n,t,hl(),c,!1,!0),si(n,t,px(),l,!1,!1);for(const u of l)e.push({x:u.x,y:u.y,z:u.z,r:.52*u.s,h:1.05*u.s})}function ul(n,t){const e=[16731526,3133068,10111720,2283760,16747068,16761914],i=[13903964,1542741,6957248,1347776,14704672,14692480];return Me(n,t,8)>.62?i[n]??16777215:e[n]??16777215}function Jr(n,t,e){if(n<.12||n>2.9)return!0;const i=Yt(n,t);return Kl(i.x,i.y,i.z)||lu(i.x,i.y,i.z)?!0:Ca(i.x,i.y,i.z,e)}function Qr(n,t,e,i){const r=Yt(n,t),s=_i(r.x,r.y,r.z),o=Ae(r.x,r.y,r.z,Math.cos(t),0,-Math.sin(t));return{...s,qx:o.x,qy:o.y,qz:o.z,qw:o.w,s:e,color:i}}function si(n,t,e,i,r,s){if(i.length===0)return;const o=r?new ee({color:16777215}):Ss(t);s&&Xl(o);const a=new Zi(e,o,i.length);a.frustumCulled=!1;for(let c=0;c<i.length;c+=1){const l=i[c];l&&Ji(a,c,l.x,l.y,l.z,l.s,l.s,l.s,l.qx,l.qy,l.qz,l.qw,l.color)}Qi(a),n.add(a)}function ux(){const n=new Ue(.28,.16,5);return n.translate(0,.08,0),n}function hx(){const n=new Ue(.045,.32,4);return n.translate(0,.16,0),n}function dx(){const n=new oe(.03,.045,.36,4);return n.translate(0,.18,0),n}function fx(){const n=new Ue(.08,.28,4);return n.translate(0,.14,0),n}function hl(){const n=new Ze(.16,5,4);return n.scale(1.2,.45,1.2),n.translate(0,.07,0),n}function px(){const n=new _r(.55,0);return n.translate(0,.28,0),n}function mx(n,t){const e=W_();n.add(e);const i=gx(t);n.add(i);const r=[];return vx(n,t,r),R0(n,t,r),Mx(n,t,r),lx(n,t,r),Dx(n,t,r),{blockers:r,sky:e}}function gx(n){const t=new Ze(Nt,192,112),e=t.toNonIndexed();t.dispose();const i=e.getAttribute("position"),r=new Float32Array(i.count*3),s=new Gt;for(let a=0;a<i.count;a+=1){const c=i.getX(a),l=i.getY(a),u=i.getZ(a),d=_i(c,l,u);i.setXYZ(a,d.x,d.y,d.z),s.setHex(_x(c,l,u)),r[a*3]=s.r,r[a*3+1]=s.g,r[a*3+2]=s.b}i.needsUpdate=!0,e.computeVertexNormals(),e.setAttribute("color",new we(r,3));const o=new lt(e,new vs({color:16777215,vertexColors:!0,gradientMap:n}));return o.frustumCulled=!1,o}function _x(n,t,e){const i=Math.hypot(n,t,e)||1,r=Math.acos(Math.min(1,Math.max(-1,t/i))),s=Math.atan2(n,e),o=$l(n,t,e),a=cu(n,t,e),c=Math.max(o,a),l=xx(r,s,a);if(c>.82)return l;const u=ql(n,e),d=Se[u]??Se[0];let h=dl(d,r,s);if(Math.hypot(n/i,e/i)*Nt>22){const _=Zg(n,t,e);if(_<9){const x=(s+Math.PI)/(Math.PI*2)*Se.length,m=x-Math.floor(x),p=Se[(m<.5?u+Se.length-1:u+1)%Se.length]??d,y=_<1.25?1:1-(_-1.25)/7.75;h=hi(h,dl(p,r,s),y*.72),_<1.25&&(h=hi(h,15722239,(1-_/1.25)**2))}}return c<.45&&r<.4&&(h=hi(h,9351423,(1-r/.4)*.62)),c<.45&&r>2.55&&(h=hi(h,6966984,Math.min(1,(r-2.55)/.5)*.45)),c>.04&&(h=hi(h,l,c)),h}function dl(n,t,e){const i=Math.sin(e*2.2+t*1.7)*.5+.5;return Math.sin(e*4.6-t*2.4+1.3)*.5+.5>.78?hi(n.ground,n.deep,.42):i>.58?hi(n.ground,n.patch,.62):n.ground}function xx(n,t,e){const i=n*Nt;let r=Math.PI;for(let h=0;h<Se.length;h+=1){const f=Es(t,ye(h));f<r&&(r=f)}const s=r*Math.sin(Math.max(.15,n))*Nt,o=1.28,a=i/o,c=s/o,l=a-Math.floor(a),u=c-Math.floor(c);if(l<.07||l>.93||u<.07||u>.93)return 12167380;const d=Math.floor(a)+Math.floor(c)&1;return s<.55?16770290:e>.72&&s>.7?d?15757480:14717124:d?13947118:12039124}function hi(n,t,e){const i=Math.min(1,Math.max(0,e)),r=n>>16&255,s=n>>8&255,o=n&255,a=t>>16&255,c=t>>8&255,l=t&255,u=Math.round(r+(a-r)*i),d=Math.round(s+(c-s)*i),h=Math.round(o+(l-o)*i);return u<<16|d<<8|h}function vx(n,t,e){const i=be(t,16052479),r=Nt,s=new lt(new oe(2.4,3.1,.7,8),i);s.position.y=r+.28;const o=new lt(new oe(.72,1.05,8.4,8),i);o.position.y=r+4.6;const a=new lt(new oe(1.25,1.25,1.15,8),new ee({color:15769658}));a.position.y=r+9.3;const c=new lt(new Ue(1.7,1.15,8),be(t,16731498));c.position.y=r+10.4;const l=new lt(new Ke(3.3,.14,6,18),new ee({color:15769658}));l.rotation.x=Math.PI/2,l.position.y=r+.12,n.add(s,o,a,c,l),e.push({x:0,y:Nt,z:0,r:3.1,h:11})}function Mx(n,t,e){const i=[],r=[],s=[],o=[],a=[],c=[],l=[],u=[],d=[];for(let h=0;h<Se.length;h++){const f=Se[h];if(!f)continue;const _=Sx(h);for(const x of _){const m=gu(x.colat,x.az);if(Kl(m.x,m.y,m.z)||yx(m.x,m.y,m.z))continue;const p=_i(m.x,m.y,m.z),y=Ae(m.x,m.y,m.z,Math.cos(x.az),0,-Math.sin(x.az)),T={...p,qx:y.x,qy:y.y,qz:y.z,qw:y.w,s:x.scale,color:x.roll>.72?f.deep:f.plant};h===0?x.grove?r.push(T):i.push(T):h===1?(s.push(T),o.push(T)):h===2?a.push(T):h===3?c.push(T):h===4?l.push(T):(u.push(T),d.push({...T,color:16175978}))}}Pn(n,go(1.55,.72,6,.36),t,i,!1,!0),Pn(n,Ex(),t,r,!1,!0),Pn(n,fl(.09,.12,2.5,5),t,s,!1,!0),Pn(n,bx(),t,o,!1,!0),Pn(n,go(.72,3.3,5,1.65),t,a,!1,!0),Pn(n,go(.38,3.6,4,1.8),t,c,!0,!0),Pn(n,Ax(),t,l,!1,!0),Pn(n,fl(.08,.11,3.3,5),t,u,!1,!0),Pn(n,wx(),t,d,!0,!0),Px(n,t,e)}function Sx(n){const t=ye(n),e=[],i=[{n:28,c0:.38,c1:.95,spread:.78},{n:34,c0:1,c1:1.82,spread:.9},{n:24,c0:1.88,c1:2.62,spread:.78}];let r=0;for(const s of i)for(let o=0;o<s.n;o+=1,r+=1)e.push({az:t+(Me(n,r,11)-.5)*s.spread,colat:s.c0+Me(n,r,19)*(s.c1-s.c0),scale:.82+Me(n,r,4)*.7,roll:Me(n,r,8),grove:!1});for(let s=0;s<10;s+=1){const o=t+(Me(n,r,11)-.5)*.2,a=1.22+Me(n,r,19)*.7;r+=1;for(let c=0;c<4;c+=1,r+=1)e.push({az:o+(Me(n,r,3)-.5)*.028,colat:a+(Me(n,r,5)-.5)*.026,scale:(c===0?1.55:1.05)+Me(n,r,4)*.45,roll:Me(n,r,8),grove:!0})}return e}function gu(n,t){const e=Math.sin(n);return{x:e*Math.sin(t)*Nt,y:Math.cos(n)*Nt,z:e*Math.cos(t)*Nt}}function yx(n,t,e){if(Math.abs(t)>Nt*Math.cos(.11)||Ca(n,t,e,6))return!0;for(const a of Ts){const c=n-a.x,l=t-a.y,u=e-a.z;if(c*c+l*l+u*u<64)return!0}const r=n-pe.x,s=t-pe.y,o=e-pe.z;return r*r+s*s+o*o<36}function Pn(n,t,e,i,r,s=!1){if(i.length===0)return;const o=r?new ee({color:16777215}):Ss(e);s&&Xl(o);const a=new Zi(t,o,i.length);a.frustumCulled=!1;for(let c=0;c<i.length;c++){const l=i[c];l&&Ji(a,c,l.x,l.y,l.z,l.s,l.s,l.s,l.qx,l.qy,l.qz,l.qw,l.color)}Qi(a),n.add(a)}function Ex(){const n=new oe(.09,.14,1.7,5);n.translate(0,.85,0);const t=new oe(1.05,.72,.28,6);t.translate(0,1.85,0);const e=new oe(.7,.5,.22,6);e.translate(.08,2.32,.04);const i=new oe(.36,.26,.16,5);return i.translate(-.05,2.68,-.02),Tx([n,t,e,i])}function Tx(n){const t=n.map(a=>a.index?a.toNonIndexed():a);let e=0;for(const a of t)e+=a.getAttribute("position").count;const i=new Float32Array(e*3),r=new Float32Array(e*3);let s=0;for(const a of t){const c=a.getAttribute("position"),l=a.getAttribute("normal");for(let u=0;u<c.count;u+=1){const d=s+u;i[d*3]=c.getX(u),i[d*3+1]=c.getY(u),i[d*3+2]=c.getZ(u),r[d*3]=l.getX(u),r[d*3+1]=l.getY(u),r[d*3+2]=l.getZ(u)}s+=c.count}const o=new ze;return o.setAttribute("position",new we(i,3)),o.setAttribute("normal",new we(r,3)),o}function go(n,t,e,i){const r=new Ue(n,t,e);return r.translate(0,i,0),r}function fl(n,t,e,i){const r=new oe(n,t,e,i);return r.translate(0,e/2,0),r}function bx(){const n=new Mn(1.15,0);return n.scale(1.25,.22,1.25),n.translate(0,2.7,0),n}function Ax(){const n=new Ke(1.25,.16,5,8,Math.PI);return n.translate(0,1.25,0),n}function wx(){const n=new Ze(.42,6,5);return n.translate(0,3.45,0),n}const Rx=[1.7,.5,1.05,.7,2.05,.42],Cx=[3.2,4.6,4.2,5.2,2.6,5.2];function Px(n,t,e){for(let i=0;i<Se.length;i++){const r=Se[i];if(!r)continue;const s=ye(i)+.07,a=gu(1.62,s),c=_i(a.x,a.y,a.z),l=Ae(a.x,a.y,a.z,Math.cos(s),0,-Math.sin(s)),u=Lx(i,t,r.plant,r.deep);u.position.set(c.x,c.y,c.z),u.quaternion.copy(l),n.add(u),e.push({x:a.x,y:a.y,z:a.z,r:Rx[i]??.8,h:Cx[i]??4})}}function Lx(n,t,e,i){const r=new vn,s=be(t,e),o=be(t,i);if(n===0)for(let a=0;a<3;a++){const c=new lt(new oe(1.9-a*.42,1.9-a*.42,.38,6),a===1?o:s);c.position.y=.4+a*.7,r.add(c)}else if(n===1){const a=new lt(new oe(.12,.16,4.2,5),o);a.position.y=2.1;const c=new lt(new Mn(1.8,0),s);c.scale.set(1.3,.22,1.3),c.position.y=4.5,r.add(a,c)}else if(n===2)for(let a=0;a<3;a++){const c=new lt(new Ue(.7,2.2,5),a===2?o:s);c.position.set(Math.cos(a*2.1)*.45,1.2+a*1.15,Math.sin(a*2.1)*.45),r.add(c)}else if(n===3){const a=new lt(new Ue(.55,5.6,4),new ee({color:e}));a.position.y=2.8;const c=new lt(new Ue(.35,3.1,4),new ee({color:i}));c.position.set(.7,1.5,.2),c.rotation.z=.25,r.add(a,c)}else if(n===4){const a=new lt(new Ke(2.3,.22,5,10,Math.PI),s);a.position.y=2.3,r.add(a)}else{const a=new lt(new oe(.1,.14,4.8,5),s);a.position.y=2.4;const c=new lt(new Ze(.62,8,6),new ee({color:16175978}));c.position.y=5.1,r.add(a,c)}return r}function Dx(n,t,e){for(const l of n_){e.push({x:l.x,y:l.y,z:l.z,r:.62,h:2.55});const u=Ae(l.x,l.y,l.z,0,1,0),d=new lt(new Kt(.55,2.3,1.7),be(t,13662789));d.position.set(l.x,l.y,l.z),d.quaternion.copy(u);const h=d.position.clone().normalize();d.position.addScaledVector(h,1.15),n.add(d)}const i=new Zi(new Ue(.34,.95,4),new ee({color:15769658}),an.length);i.frustumCulled=!1;for(let l=0;l<an.length;l++){const u=an[l],d=an[l+1]??u;if(!u||!d)continue;const h=Jg(d.x-u.x,d.y-u.y,d.z-u.z,u.x,u.y,u.z),f=Math.hypot(u.x,u.y,u.z)||1;Ji(i,l,u.x+u.x/f*.35,u.y+u.y/f*.35,u.z+u.z/f*.35,1,1,1,h.x,h.y,h.z,h.w,15769658)}Qi(i),n.add(i);const r=Ae(pe.x,pe.y,pe.z,1,0,0),s=new lt(new oe(pe.r,pe.r,.08,18),new ee({color:2013384})),o=new z(pe.x,pe.y,pe.z).normalize();s.position.copy(o).multiplyScalar(Nt+.05),s.quaternion.copy(r);const a=new lt(new oe(.07,.09,2.1,6),new ee({color:2013384}));a.position.copy(o).multiplyScalar(Nt+1.05),a.quaternion.copy(r);const c=new lt(new Kt(.62,.32,.05),new ee({color:16250092}));c.position.copy(o).multiplyScalar(Nt+1.9),c.quaternion.copy(r),n.add(s,a,c)}const _u=document.querySelector("#view"),cr=document.querySelector("#hud");if(!_u||!cr)throw new Error("Markup mancante.");try{Ix(_u,cr)}catch(n){cr.style.pointerEvents="auto",cr.style.padding="24px",cr.textContent=n instanceof Error?n.message:"Impossibile avviare Minimondo."}function Ix(n,t){const e=s_();let i=!1,r=()=>{};const s=Kg(),o=X_(n),a=mx(o.scene,s),c=sx(t,e,{onInteract:()=>{i=!0},onStartDemo:C=>r(C)}),l=D_(n,t),u=V_(o.scene,s,l),d=l_(o.scene,s),h=A_(o.scene),f=x_(o.scene,s,e,c,u);r=C=>f.start(C);const _=new vn,x=new ee({color:16761914}),m=new lt(new Ke(1.7,.18,8,24),x);m.rotation.x=Math.PI/2;const p=new lt(new Mn(.38,0),x);p.position.y=1.7,_.add(m,p),_.visible=!1,_.frustumCulled=!1,o.scene.add(_);let y=null,T=!1,S=performance.now();const L=window.matchMedia("(prefers-reduced-motion: reduce)").matches,E=C=>{const v=Math.min(.05,(C-S)/1e3);S=C;const g=pu();if(g&&g!==y&&(u.lookToward(g.x,g.y,g.z),y=g,c.toast(`Verso ${g.name}`)),g){const F=u.x-g.x,U=u.y-g.y,N=u.z-g.z;if(F*F+U*U+N*N<36)__(),_.visible=!1,y===g&&c.toast(`${g.name} è qui.`);else{const G=Math.hypot(g.x,g.y,g.z)||1,H=ms(g.x/G,g.y/G,g.z/G)+.2;_.visible=!0,_.position.set(g.x/G*(Nt+H),g.y/G*(Nt+H),g.z/G*(Nt+H)),_.quaternion.copy(Ae(g.x,g.y,g.z,1,0,0)),p.rotation.y+=v*1.4}}else _.visible=!1;const w=c.blocksPlay();if(L||(Wl.value=C/1e3),u.update(v,a.blockers,w),f.locksWorld())f.update(v,u),c.setPrompt(null);else{if(!e.courseClear){const U=u.x-pe.x,N=u.y-pe.y,G=u.z-pe.z;U*U+N*N+G*G<=pe.r*pe.r&&(e.courseClear=!0,T||(T=!0,c.toast("Percorso fatto. Il cancello ora paga.")))}const F=!w&&(u.consumeInteract()||i);i=!1,h.update(C/1e3,u,e,c),d.update(C/1e3,u,F,e,c)}const P=u.aim();c.paintMap(u.x,u.y,u.z,P.x,P.y,P.z),u.syncCamera(o.camera,v),a.sky.position.copy(o.camera.position),o.render(),(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(n.dataset.px=u.x.toFixed(2),n.dataset.py=u.y.toFixed(2),n.dataset.pz=u.z.toFixed(2),n.dataset.yaw=l.yaw.toFixed(3),n.dataset.gait=u.gait,n.dataset.feet=u.radius.toFixed(3),n.dataset.hx=P.x.toFixed(3),n.dataset.hy=P.y.toFixed(3),n.dataset.hz=P.z.toFixed(3)),requestAnimationFrame(E)},A=()=>o.resize();o.resize(),window.addEventListener("resize",A),window.visualViewport?.addEventListener("resize",A),requestAnimationFrame(E)}
