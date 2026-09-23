(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const oa="180",xu=0,La=1,vu=2,nl=1,Mu=2,Cn=3,qn=0,Be=1,Pn=2,Xn=0,Ni=1,Da=2,Ia=3,Ua=4,Su=5,oi=100,yu=101,Eu=102,Tu=103,bu=104,wu=200,Au=201,Ru=202,Cu=203,oo=204,ao=205,Pu=206,Lu=207,Du=208,Iu=209,Uu=210,Nu=211,Fu=212,Ou=213,zu=214,co=0,lo=1,uo=2,Bi=3,ho=4,fo=5,po=6,mo=7,il=0,Bu=1,ku=2,Un=0,Hu=1,Vu=2,Gu=3,Wu=4,Xu=5,qu=6,Yu=7,rl=300,ki=301,Hi=302,go=303,_o=304,hs=306,xo=1e3,ci=1001,vo=1002,Pe=1003,$u=1004,br=1005,mn=1006,bs=1007,li=1008,xn=1009,sl=1010,ol=1011,dr=1012,aa=1013,hi=1014,gn=1015,vr=1016,ca=1017,la=1018,fr=1020,al=35902,cl=35899,ll=1021,ul=1022,hn=1023,pr=1026,mr=1027,ds=1028,ua=1029,hl=1030,ha=1031,da=1033,Jr=33776,Qr=33777,ts=33778,es=33779,Mo=35840,So=35841,yo=35842,Eo=35843,To=36196,bo=37492,wo=37496,Ao=37808,Ro=37809,Co=37810,Po=37811,Lo=37812,Do=37813,Io=37814,Uo=37815,No=37816,Fo=37817,Oo=37818,zo=37819,Bo=37820,ko=37821,Ho=36492,Vo=36494,Go=36495,Wo=36283,Xo=36284,qo=36285,Yo=36286,Ku=3200,Zu=3201,dl=0,ju=1,Ln="",qe="srgb",Vi="srgb-linear",os="linear",ae="srgb",gi=7680,Na=519,Ju=512,Qu=513,th=514,fl=515,eh=516,nh=517,ih=518,rh=519,Fa=35044,Oa="300 es",_n=2e3,as=2001;class Wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let za=1234567;const ar=Math.PI/180,gr=180/Math.PI;function Xi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function $t(n,t,e){return Math.max(t,Math.min(e,n))}function fa(n,t){return(n%t+t)%t}function sh(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function oh(n,t,e){return n!==t?(e-n)/(t-n):0}function cr(n,t,e){return(1-e)*n+e*t}function ah(n,t,e,i){return cr(n,t,1-Math.exp(-e*i))}function ch(n,t=1){return t-Math.abs(fa(n,t*2)-t)}function lh(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function uh(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function hh(n,t){return n+Math.floor(Math.random()*(t-n+1))}function dh(n,t){return n+Math.random()*(t-n)}function fh(n){return n*(.5-Math.random())}function ph(n){n!==void 0&&(za=n);let t=za+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mh(n){return n*ar}function gh(n){return n*gr}function _h(n){return(n&n-1)===0&&n!==0}function xh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function vh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Mh(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+i)/2),u=o((t+i)/2),d=s((t-i)/2),h=o((t-i)/2),p=s((i-t)/2),g=o((i-t)/2);switch(r){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ii(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Oe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Sh={DEG2RAD:ar,RAD2DEG:gr,generateUUID:Xi,clamp:$t,euclideanModulo:fa,mapLinear:sh,inverseLerp:oh,lerp:cr,damp:ah,pingpong:ch,smoothstep:lh,smootherstep:uh,randInt:hh,randFloat:dh,randFloatSpread:fh,seededRandom:ph,degToRad:mh,radToDeg:gh,isPowerOfTwo:_h,ceilPowerOfTwo:xh,floorPowerOfTwo:vh,setQuaternionFromProperEuler:Mh,normalize:Oe,denormalize:Ii};class qt{constructor(t=0,e=0){qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vn{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==h||l!==p||u!==g){let m=1-a;const f=c*h+l*p+u*g+d*_,M=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const A=Math.sqrt(E),b=Math.atan2(A,f*M);m=Math.sin(m*b)/A,a=Math.sin(a*b)/A}const y=a*M;if(c=c*m+h*y,l=l*m+p*y,u=u*m+g*y,d=d*m+_*y,m===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=A,l*=A,u*=A,d*=A}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+u*d+c*p-l*h,t[e+1]=c*g+u*h+l*d-a*p,t[e+2]=l*g+u*p+a*h-c*d,t[e+3]=u*g-a*d-c*h-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"YZX":this._x=h*u*d+l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d-h*p*g;break;case"XZY":this._x=h*u*d-l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ba.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ba.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),d=2*(s*i-o*e);return this.x=e+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ws.copy(this).projectOnVector(t),this.sub(ws)}reflect(t){return this.sub(ws.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ws=new N,Ba=new vn;class kt{constructor(t,e,i,r,s,o,a,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],_=r[0],m=r[3],f=r[6],M=r[1],E=r[4],y=r[7],A=r[2],b=r[5],w=r[8];return s[0]=o*_+a*M+c*A,s[3]=o*m+a*E+c*b,s[6]=o*f+a*y+c*w,s[1]=l*_+u*M+d*A,s[4]=l*m+u*E+d*b,s[7]=l*f+u*y+d*w,s[2]=h*_+p*M+g*A,s[5]=h*m+p*E+g*b,s[8]=h*f+p*y+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*s,p=l*s-o*c,g=e*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(r*l-u*i)*_,t[2]=(a*i-r*o)*_,t[3]=h*_,t[4]=(u*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=p*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(As.makeScale(t,e)),this}rotate(t){return this.premultiply(As.makeRotation(-t)),this}translate(t,e){return this.premultiply(As.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const As=new kt;function pl(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function cs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yh(){const n=cs("canvas");return n.style.display="block",n}const ka={};function _r(n){n in ka||(ka[n]=!0,console.warn(n))}function Eh(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const Ha=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Va=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Th(){const n={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ae&&(r.r=Nn(r.r),r.g=Nn(r.g),r.b=Nn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(r.r=Fi(r.r),r.g=Fi(r.g),r.b=Fi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ln?os:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return _r("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return _r("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Vi]:{primaries:t,whitePoint:i,transfer:os,toXYZ:Ha,fromXYZ:Va,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:i,transfer:ae,toXYZ:Ha,fromXYZ:Va,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),n}const Jt=Th();function Nn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _i;class bh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{_i===void 0&&(_i=cs("canvas")),_i.width=t.width,_i.height=t.height;const r=_i.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=_i}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=cs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Nn(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Nn(e[i]/255)*255):e[i]=Nn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wh=0;class pa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Xi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rs(r[o].image)):s.push(Rs(r[o]))}else s=Rs(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Rs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ah=0;const Cs=new N;class ke extends Wi{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,i=ci,r=ci,s=mn,o=li,a=hn,c=xn,l=ke.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Xi(),this.name="",this.source=new pa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cs).x}get height(){return this.source.getSize(Cs).y}get depth(){return this.source.getSize(Cs).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xo:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case vo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xo:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case vo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=rl;ke.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,i=0,r=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,y=(p+1)/2,A=(f+1)/2,b=(u+h)/4,w=(d+_)/4,I=(g+m)/4;return E>y&&E>A?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=b/i,s=w/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=b/r,s=I/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=w/s,r=I/s),this.set(i,r,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(h-u)/M,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rh extends Wi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new ke(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new pa(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends Rh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ml extends ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ch extends ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(s,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wr.copy(i.boundingBox)),wr.applyMatrix4(t.matrixWorld),this.union(wr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ji),Ar.subVectors(this.max,ji),xi.subVectors(t.a,ji),vi.subVectors(t.b,ji),Mi.subVectors(t.c,ji),zn.subVectors(vi,xi),Bn.subVectors(Mi,vi),jn.subVectors(xi,Mi);let e=[0,-zn.z,zn.y,0,-Bn.z,Bn.y,0,-jn.z,jn.y,zn.z,0,-zn.x,Bn.z,0,-Bn.x,jn.z,0,-jn.x,-zn.y,zn.x,0,-Bn.y,Bn.x,0,-jn.y,jn.x,0];return!Ps(e,xi,vi,Mi,Ar)||(e=[1,0,0,0,1,0,0,0,1],!Ps(e,xi,vi,Mi,Ar))?!1:(Rr.crossVectors(zn,Bn),e=[Rr.x,Rr.y,Rr.z],Ps(e,xi,vi,Mi,Ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Sn=[new N,new N,new N,new N,new N,new N,new N,new N],an=new N,wr=new fi,xi=new N,vi=new N,Mi=new N,zn=new N,Bn=new N,jn=new N,ji=new N,Ar=new N,Rr=new N,Jn=new N;function Ps(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Jn.fromArray(n,s);const a=r.x*Math.abs(Jn.x)+r.y*Math.abs(Jn.y)+r.z*Math.abs(Jn.z),c=t.dot(Jn),l=e.dot(Jn),u=i.dot(Jn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ph=new fi,Ji=new N,Ls=new N;class Mr{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ph.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ji.subVectors(t,this.center);const e=Ji.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ji,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ls.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ji.copy(t.center).add(Ls)),this.expandByPoint(Ji.copy(t.center).sub(Ls))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const yn=new N,Ds=new N,Cr=new N,kn=new N,Is=new N,Pr=new N,Us=new N;class Lh{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ds.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(Ds);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Cr),a=kn.dot(this.direction),c=-kn.dot(Cr),l=kn.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,p=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ds).addScaledVector(Cr,h),p}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const i=yn.dot(this.direction),r=yn.dot(yn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,r=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,r=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,i,r,s){Is.subVectors(e,t),Pr.subVectors(i,t),Us.crossVectors(Is,Pr);let o=this.direction.dot(Us),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,t);const c=a*this.direction.dot(Pr.crossVectors(kn,Pr));if(c<0)return null;const l=a*this.direction.dot(Is.cross(kn));if(l<0||c+l>o)return null;const u=-a*kn.dot(Us);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,i,r,s,o,a,c,l,u,d,h,p,g,_,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,d,h,p,g,_,m)}set(t,e,i,r,s,o,a,c,l,u,d,h,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Si.setFromMatrixColumn(t,0).length(),s=1/Si.setFromMatrixColumn(t,1).length(),o=1/Si.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=o*u,p=o*d,g=a*u,_=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=h-_*l,e[9]=-a*c,e[2]=_-h*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,p=c*d,g=l*u,_=l*d;e[0]=h+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,p=c*d,g=l*u,_=l*d;e[0]=h-_*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,p=o*d,g=a*u,_=a*d;e[0]=c*u,e[4]=g*l-p,e[8]=h*l+_,e[1]=c*d,e[5]=_*l+h,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-h*d,e[8]=g*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*d+g,e[10]=h-_*d}else if(t.order==="XZY"){const h=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+_,e[5]=o*u,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dh,t,Ih)}lookAt(t,e,i){const r=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Hn.crossVectors(i,je),Hn.lengthSq()===0&&(Math.abs(i.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Hn.crossVectors(i,je)),Hn.normalize(),Lr.crossVectors(je,Hn),r[0]=Hn.x,r[4]=Lr.x,r[8]=je.x,r[1]=Hn.y,r[5]=Lr.y,r[9]=je.y,r[2]=Hn.z,r[6]=Lr.z,r[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],M=i[3],E=i[7],y=i[11],A=i[15],b=r[0],w=r[4],I=r[8],v=r[12],x=r[1],L=r[5],D=r[9],R=r[13],F=r[2],O=r[6],H=r[10],Y=r[14],B=r[3],Q=r[7],ot=r[11],xt=r[15];return s[0]=o*b+a*x+c*F+l*B,s[4]=o*w+a*L+c*O+l*Q,s[8]=o*I+a*D+c*H+l*ot,s[12]=o*v+a*R+c*Y+l*xt,s[1]=u*b+d*x+h*F+p*B,s[5]=u*w+d*L+h*O+p*Q,s[9]=u*I+d*D+h*H+p*ot,s[13]=u*v+d*R+h*Y+p*xt,s[2]=g*b+_*x+m*F+f*B,s[6]=g*w+_*L+m*O+f*Q,s[10]=g*I+_*D+m*H+f*ot,s[14]=g*v+_*R+m*Y+f*xt,s[3]=M*b+E*x+y*F+A*B,s[7]=M*w+E*L+y*O+A*Q,s[11]=M*I+E*D+y*H+A*ot,s[15]=M*v+E*R+y*Y+A*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*p-i*c*p)+_*(+e*c*p-e*l*h+s*o*h-r*o*p+r*l*u-s*c*u)+m*(+e*l*d-e*a*p-s*o*d+i*o*p+s*a*u-i*l*u)+f*(-r*a*u-e*c*d+e*a*h+r*o*d-i*o*h+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],M=d*m*l-_*h*l+_*c*p-a*m*p-d*c*f+a*h*f,E=g*h*l-u*m*l-g*c*p+o*m*p+u*c*f-o*h*f,y=u*_*l-g*d*l+g*a*p-o*_*p-u*a*f+o*d*f,A=g*d*c-u*_*c-g*a*h+o*_*h+u*a*m-o*d*m,b=e*M+i*E+r*y+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=M*w,t[1]=(_*h*s-d*m*s-_*r*p+i*m*p+d*r*f-i*h*f)*w,t[2]=(a*m*s-_*c*s+_*r*l-i*m*l-a*r*f+i*c*f)*w,t[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*p-i*c*p)*w,t[4]=E*w,t[5]=(u*m*s-g*h*s+g*r*p-e*m*p-u*r*f+e*h*f)*w,t[6]=(g*c*s-o*m*s-g*r*l+e*m*l+o*r*f-e*c*f)*w,t[7]=(o*h*s-u*c*s+u*r*l-e*h*l-o*r*p+e*c*p)*w,t[8]=y*w,t[9]=(g*d*s-u*_*s-g*i*p+e*_*p+u*i*f-e*d*f)*w,t[10]=(o*_*s-g*a*s+g*i*l-e*_*l-o*i*f+e*a*f)*w,t[11]=(u*a*s-o*d*s-u*i*l+e*d*l+o*i*p-e*a*p)*w,t[12]=A*w,t[13]=(u*_*r-g*d*r+g*i*h-e*_*h-u*i*m+e*d*m)*w,t[14]=(g*a*r-o*_*r-g*i*c+e*_*c+o*i*m-e*a*m)*w,t[15]=(o*d*r-u*a*r+u*i*c-e*d*c-o*i*h+e*a*h)*w,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,d=a+a,h=s*l,p=s*u,g=s*d,_=o*u,m=o*d,f=a*d,M=c*l,E=c*u,y=c*d,A=i.x,b=i.y,w=i.z;return r[0]=(1-(_+f))*A,r[1]=(p+y)*A,r[2]=(g-E)*A,r[3]=0,r[4]=(p-y)*b,r[5]=(1-(h+f))*b,r[6]=(m+M)*b,r[7]=0,r[8]=(g+E)*w,r[9]=(m-M)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Si.set(r[0],r[1],r[2]).length();const o=Si.set(r[4],r[5],r[6]).length(),a=Si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],cn.copy(this);const l=1/s,u=1/o,d=1/a;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,e.setFromRotationMatrix(cn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=_n,c=!1){const l=this.elements,u=2*s/(e-t),d=2*s/(i-r),h=(e+t)/(e-t),p=(i+r)/(i-r);let g,_;if(c)g=s/(o-s),_=o*s/(o-s);else if(a===_n)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===as)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=_n,c=!1){const l=this.elements,u=2/(e-t),d=2/(i-r),h=-(e+t)/(e-t),p=-(i+r)/(i-r);let g,_;if(c)g=1/(o-s),_=o/(o-s);else if(a===_n)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===as)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Si=new N,cn=new ue,Dh=new N(0,0,0),Ih=new N(1,1,1),Hn=new N,Lr=new N,je=new N,Ga=new ue,Wa=new vn;class Fn{constructor(t=0,e=0,i=0,r=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ga.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ga,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wa.setFromEuler(this),this.setFromQuaternion(Wa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class gl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Uh=0;const Xa=new N,yi=new vn,En=new ue,Dr=new N,Qi=new N,Nh=new N,Fh=new vn,qa=new N(1,0,0),Ya=new N(0,1,0),$a=new N(0,0,1),Ka={type:"added"},Oh={type:"removed"},Ei={type:"childadded",child:null},Ns={type:"childremoved",child:null};class Le extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new N,e=new Fn,i=new vn,r=new N(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ue},normalMatrix:{value:new kt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(qa,t)}rotateY(t){return this.rotateOnAxis(Ya,t)}rotateZ(t){return this.rotateOnAxis($a,t)}translateOnAxis(t,e){return Xa.copy(t).applyQuaternion(this.quaternion),this.position.add(Xa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qa,t)}translateY(t){return this.translateOnAxis(Ya,t)}translateZ(t){return this.translateOnAxis($a,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Dr.copy(t):Dr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Qi,Dr,this.up):En.lookAt(Dr,Qi,this.up),this.quaternion.setFromRotationMatrix(En),r&&(En.extractRotation(r.matrixWorld),yi.setFromRotationMatrix(En),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ka),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Oh),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ka),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,t,Nh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,Fh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Le.DEFAULT_UP=new N(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new N,Tn=new N,Fs=new N,bn=new N,Ti=new N,bi=new N,Za=new N,Os=new N,zs=new N,Bs=new N,ks=new ve,Hs=new ve,Vs=new ve;class un{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),ln.subVectors(t,e),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){ln.subVectors(r,e),Tn.subVectors(i,e),Fs.subVectors(t,e);const o=ln.dot(ln),a=ln.dot(Tn),c=ln.dot(Fs),l=Tn.dot(Tn),u=Tn.dot(Fs),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,bn.x),c.addScaledVector(o,bn.y),c.addScaledVector(a,bn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return ks.setScalar(0),Hs.setScalar(0),Vs.setScalar(0),ks.fromBufferAttribute(t,e),Hs.fromBufferAttribute(t,i),Vs.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ks,s.x),o.addScaledVector(Hs,s.y),o.addScaledVector(Vs,s.z),o}static isFrontFacing(t,e,i,r){return ln.subVectors(i,e),Tn.subVectors(t,e),ln.cross(Tn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),ln.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return un.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Ti.subVectors(r,i),bi.subVectors(s,i),Os.subVectors(t,i);const c=Ti.dot(Os),l=bi.dot(Os);if(c<=0&&l<=0)return e.copy(i);zs.subVectors(t,r);const u=Ti.dot(zs),d=bi.dot(zs);if(u>=0&&d<=u)return e.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Ti,o);Bs.subVectors(t,s);const p=Ti.dot(Bs),g=bi.dot(Bs);if(g>=0&&p<=g)return e.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(bi,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Za.subVectors(s,r),a=(d-u)/(d-u+(p-g)),e.copy(r).addScaledVector(Za,a);const f=1/(m+_+h);return o=_*f,a=h*f,e.copy(i).addScaledVector(Ti,o).addScaledVector(bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Gs(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Jt.workingColorSpace){if(t=fa(t,1),e=$t(e,0,1),i=$t(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Gs(o,s,t+1/3),this.g=Gs(o,s,t),this.b=Gs(o,s,t-1/3)}return Jt.colorSpaceToWorking(this,r),this}setStyle(t,e=qe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const i=_l[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return Jt.workingToColorSpace(Ne.copy(this),t),Math.round($t(Ne.r*255,0,255))*65536+Math.round($t(Ne.g*255,0,255))*256+Math.round($t(Ne.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(Ne.copy(this),e);const i=Ne.r,r=Ne.g,s=Ne.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=qe){Jt.workingToColorSpace(Ne.copy(this),t);const e=Ne.r,i=Ne.g,r=Ne.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(Ir);const i=cr(Vn.h,Ir.h,e),r=cr(Vn.s,Ir.s,e),s=cr(Vn.l,Ir.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Vt;Vt.NAMES=_l;let zh=0;class Sr extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Ni,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oo,this.blendDst=ao,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Na,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(i.blending=this.blending),this.side!==qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oo&&(i.blendSrc=this.blendSrc),this.blendDst!==ao&&(i.blendDst=this.blendDst),this.blendEquation!==oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Na&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class se extends Sr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new N,Ur=new qt;let Bh=0;class De{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Fa,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ur.fromBufferAttribute(this,e),Ur.applyMatrix3(t),this.setXY(e,Ur.x,Ur.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ii(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),r=Oe(r,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fa&&(t.usage=this.usage),t}}class xl extends De{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class vl extends De{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class fe extends De{constructor(t,e,i){super(new Float32Array(t),e,i)}}let kh=0;const en=new ue,Ws=new Le,wi=new N,Je=new fi,tr=new fi,Ce=new N;class He extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pl(t)?vl:xl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new kt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,i){return en.makeTranslation(t,e,i),this.applyMatrix4(en),this}scale(t,e,i){return en.makeScale(t,e,i),this.applyMatrix4(en),this}lookAt(t){return Ws.lookAt(t),Ws.updateMatrix(),this.applyMatrix4(Ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(Je.min,tr.min),Je.expandByPoint(Ce),Ce.addVectors(Je.max,tr.max),Je.expandByPoint(Ce)):(Je.expandByPoint(tr.min),Je.expandByPoint(tr.max))}Je.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ce.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ce));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ce.fromBufferAttribute(a,l),c&&(wi.fromBufferAttribute(t,l),Ce.add(wi)),r=Math.max(r,i.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<i.count;I++)a[I]=new N,c[I]=new N;const l=new N,u=new N,d=new N,h=new qt,p=new qt,g=new qt,_=new N,m=new N;function f(I,v,x){l.fromBufferAttribute(i,I),u.fromBufferAttribute(i,v),d.fromBufferAttribute(i,x),h.fromBufferAttribute(s,I),p.fromBufferAttribute(s,v),g.fromBufferAttribute(s,x),u.sub(l),d.sub(l),p.sub(h),g.sub(h);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),a[I].add(_),a[v].add(_),a[x].add(_),c[I].add(m),c[v].add(m),c[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,v=M.length;I<v;++I){const x=M[I],L=x.start,D=x.count;for(let R=L,F=L+D;R<F;R+=3)f(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const E=new N,y=new N,A=new N,b=new N;function w(I){A.fromBufferAttribute(r,I),b.copy(A);const v=a[I];E.copy(v),E.sub(A.multiplyScalar(A.dot(v))).normalize(),y.crossVectors(b,v);const L=y.dot(c[I])<0?-1:1;o.setXYZW(I,E.x,E.y,E.z,L)}for(let I=0,v=M.length;I<v;++I){const x=M[I],L=x.start,D=x.count;for(let R=L,F=L+D;R<F;R+=3)w(t.getX(R+0)),w(t.getX(R+1)),w(t.getX(R+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,c=new N,l=new N,u=new N,d=new N;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let f=0;f<u;f++)h[g++]=l[p++]}return new De(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=t(h,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ja=new ue,Qn=new Lh,Nr=new Mr,Ja=new N,Fr=new N,Or=new N,zr=new N,Xs=new N,Br=new N,Qa=new N,kr=new N;class ut extends Le{constructor(t=new He,e=new se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Br.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(Xs.fromBufferAttribute(d,t),o?Br.addScaledVector(Xs,u):Br.addScaledVector(Xs.sub(e),u))}e.add(Br)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere),Nr.applyMatrix4(s),Qn.copy(t.ray).recast(t.near),!(Nr.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Nr,Ja)===null||Qn.origin.distanceToSquared(Ja)>(t.far-t.near)**2))&&(ja.copy(s).invert(),Qn.copy(t.ray).applyMatrix4(ja),!(i.boundingBox!==null&&Qn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,A=E;y<A;y+=3){const b=a.getX(y),w=a.getX(y+1),I=a.getX(y+2);r=Hr(this,f,t,i,l,u,d,b,w,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);r=Hr(this,o,t,i,l,u,d,M,E,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,A=E;y<A;y+=3){const b=y,w=y+1,I=y+2;r=Hr(this,f,t,i,l,u,d,b,w,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=m,E=m+1,y=m+2;r=Hr(this,o,t,i,l,u,d,M,E,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Hh(n,t,e,i,r,s,o,a){let c;if(t.side===Be?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===qn,a),c===null)return null;kr.copy(a),kr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(kr);return l<e.near||l>e.far?null:{distance:l,point:kr.clone(),object:n}}function Hr(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,Fr),n.getVertexPosition(c,Or),n.getVertexPosition(l,zr);const u=Hh(n,t,e,i,Fr,Or,zr,Qa);if(u){const d=new N;un.getBarycoord(Qa,Fr,Or,zr,d),r&&(u.uv=un.getInterpolatedAttribute(r,a,c,l,d,new qt)),s&&(u.uv1=un.getInterpolatedAttribute(s,a,c,l,d,new qt)),o&&(u.normal=un.getInterpolatedAttribute(o,a,c,l,d,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new N,materialIndex:0};un.getNormal(Fr,Or,zr,h.normal),u.face=h,u.barycoord=d}return u}class Kt extends He{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(d,2));function g(_,m,f,M,E,y,A,b,w,I,v){const x=y/w,L=A/I,D=y/2,R=A/2,F=b/2,O=w+1,H=I+1;let Y=0,B=0;const Q=new N;for(let ot=0;ot<H;ot++){const xt=ot*L-R;for(let Rt=0;Rt<O;Rt++){const Wt=Rt*x-D;Q[_]=Wt*M,Q[m]=xt*E,Q[f]=F,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[f]=b>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(Rt/w),d.push(1-ot/I),Y+=1}}for(let ot=0;ot<I;ot++)for(let xt=0;xt<w;xt++){const Rt=h+xt+O*ot,Wt=h+xt+O*(ot+1),tt=h+(xt+1)+O*(ot+1),Dt=h+(xt+1)+O*ot;c.push(Rt,Wt,Dt),c.push(Wt,tt,Dt),B+=6}a.addGroup(p,B,v),p+=B,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function ze(n){const t={};for(let e=0;e<n.length;e++){const i=Gi(n[e]);for(const r in i)t[r]=i[r]}return t}function Vh(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ml(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Gh={clone:Gi,merge:ze};var Wh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends Sr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wh,this.fragmentShader=Xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=Vh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Sl extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new N,tc=new qt,ec=new qt;class rn extends Sl{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,tc,ec),e.subVectors(ec,tc)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ar*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ai=-90,Ri=1;class qh extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(Ai,Ri,t,e);r.layers=this.layers,this.add(r);const s=new rn(Ai,Ri,t,e);s.layers=this.layers,this.add(s);const o=new rn(Ai,Ri,t,e);o.layers=this.layers,this.add(o);const a=new rn(Ai,Ri,t,e);a.layers=this.layers,this.add(a);const c=new rn(Ai,Ri,t,e);c.layers=this.layers,this.add(c);const l=new rn(Ai,Ri,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===_n)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===as)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class yl extends ke{constructor(t=[],e=ki,i,r,s,o,a,c,l,u){super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yh extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new yl(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Kt(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:Gi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Be,blending:Xn});s.uniforms.tEquirect.value=e;const o=new ut(r,s),a=e.minFilter;return e.minFilter===li&&(e.minFilter=mn),new qh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class Dn extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $h={type:"move"};class qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($h)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Dn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class ma{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=i}clone(){return new ma(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nc extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class El extends ke{constructor(t=null,e=1,i=1,r,s,o,a,c,l=Pe,u=Pe,d,h){super(null,o,a,c,l,u,r,s,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ic extends De{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ci=new ue,rc=new ue,Vr=[],sc=new fi,Kh=new ue,er=new ut,nr=new Mr;class qi extends ut{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ic(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Kh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new fi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ci),sc.copy(t.boundingBox).applyMatrix4(Ci),this.boundingBox.union(sc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ci),nr.copy(t.boundingSphere).applyMatrix4(Ci),this.boundingSphere.union(nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(i),t.ray.intersectsSphere(nr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ci),rc.multiplyMatrices(i,Ci),er.matrixWorld=rc,er.raycast(t,Vr);for(let o=0,a=Vr.length;o<a;o++){const c=Vr[o];c.instanceId=s,c.object=this,e.push(c)}Vr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ic(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new El(new Float32Array(r*this.count),r,this.count,ds,gn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ys=new N,Zh=new N,jh=new kt;class ri{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Ys.subVectors(i,e).cross(Zh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ys),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||jh.getNormalMatrix(t),r=this.coplanarPoint(Ys).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new Mr,Jh=new qt(.5,.5),Gr=new N;class ga{constructor(t=new ri,e=new ri,i=new ri,r=new ri,s=new ri,o=new ri){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=_n,i=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],p=s[7],g=s[8],_=s[9],m=s[10],f=s[11],M=s[12],E=s[13],y=s[14],A=s[15];if(r[0].setComponents(l-o,p-u,f-g,A-M).normalize(),r[1].setComponents(l+o,p+u,f+g,A+M).normalize(),r[2].setComponents(l+a,p+d,f+_,A+E).normalize(),r[3].setComponents(l-a,p-d,f-_,A-E).normalize(),i)r[4].setComponents(c,h,m,y).normalize(),r[5].setComponents(l-c,p-h,f-m,A-y).normalize();else if(r[4].setComponents(l-c,p-h,f-m,A-y).normalize(),e===_n)r[5].setComponents(l+c,p+h,f+m,A+y).normalize();else if(e===as)r[5].setComponents(c,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){ti.center.set(0,0,0);const e=Jh.distanceTo(t.center);return ti.radius=.7071067811865476+e,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Gr.x=r.normal.x>0?t.max.x:t.min.x,Gr.y=r.normal.y>0?t.max.y:t.min.y,Gr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tl extends ke{constructor(t,e,i=hi,r,s,o,a=Pe,c=Pe,l,u=pr,d=1){if(u!==pr&&u!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class bl extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class _a extends He{constructor(t=1,e=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:r,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],u=e/2,d=Math.PI/2*t,h=e,p=2*d+h,g=i*2+s,_=r+1,m=new N,f=new N;for(let M=0;M<=g;M++){let E=0,y=0,A=0,b=0;if(M<=i){const v=M/i,x=v*Math.PI/2;y=-u-t*Math.cos(x),A=t*Math.sin(x),b=-t*Math.cos(x),E=v*d}else if(M<=i+s){const v=(M-i)/s;y=-u+v*e,A=t,b=0,E=d+v*h}else{const v=(M-i-s)/i,x=v*Math.PI/2;y=u+t*Math.sin(x),A=t*Math.cos(x),b=t*Math.sin(x),E=d+h+v*d}const w=Math.max(0,Math.min(1,E/p));let I=0;M===0?I=.5/r:M===g&&(I=-.5/r);for(let v=0;v<=r;v++){const x=v/r,L=x*Math.PI*2,D=Math.sin(L),R=Math.cos(L);f.x=-A*R,f.y=y,f.z=A*D,a.push(f.x,f.y,f.z),m.set(-A*R,b,A*D),m.normalize(),c.push(m.x,m.y,m.z),l.push(x+I,w)}if(M>0){const v=(M-1)*_;for(let x=0;x<r;x++){const L=v+x,D=v+x+1,R=M*_+x,F=M*_+x+1;o.push(L,D,R),o.push(D,F,R)}}}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _a(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class xa extends He{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new N,u=new qt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const p=i+d/e*r;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xa(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qt extends He{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],p=[];let g=0;const _=[],m=i/2;let f=0;M(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new fe(d,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(p,2));function M(){const y=new N,A=new N;let b=0;const w=(e-t)/i;for(let I=0;I<=s;I++){const v=[],x=I/s,L=x*(e-t)+t;for(let D=0;D<=r;D++){const R=D/r,F=R*c+a,O=Math.sin(F),H=Math.cos(F);A.x=L*O,A.y=-x*i+m,A.z=L*H,d.push(A.x,A.y,A.z),y.set(O,w,H).normalize(),h.push(y.x,y.y,y.z),p.push(R,1-x),v.push(g++)}_.push(v)}for(let I=0;I<r;I++)for(let v=0;v<s;v++){const x=_[v][I],L=_[v+1][I],D=_[v+1][I+1],R=_[v][I+1];(t>0||v!==0)&&(u.push(x,L,R),b+=3),(e>0||v!==s-1)&&(u.push(L,D,R),b+=3)}l.addGroup(f,b,0),f+=b}function E(y){const A=g,b=new qt,w=new N;let I=0;const v=y===!0?t:e,x=y===!0?1:-1;for(let D=1;D<=r;D++)d.push(0,m*x,0),h.push(0,x,0),p.push(.5,.5),g++;const L=g;for(let D=0;D<=r;D++){const F=D/r*c+a,O=Math.cos(F),H=Math.sin(F);w.x=v*H,w.y=m*x,w.z=v*O,d.push(w.x,w.y,w.z),h.push(0,x,0),b.x=O*.5+.5,b.y=H*.5*x+.5,p.push(b.x,b.y),g++}for(let D=0;D<r;D++){const R=A+D,F=L+D;y===!0?u.push(F,F+1,R):u.push(F+1,F,R),I+=3}l.addGroup(f,I,y===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ie extends Qt{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ie(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fs extends He{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new fe(s,3)),this.setAttribute("normal",new fe(s.slice(),3)),this.setAttribute("uv",new fe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const E=new N,y=new N,A=new N;for(let b=0;b<e.length;b+=3)p(e[b+0],E),p(e[b+1],y),p(e[b+2],A),c(E,y,A,M)}function c(M,E,y,A){const b=A+1,w=[];for(let I=0;I<=b;I++){w[I]=[];const v=M.clone().lerp(y,I/b),x=E.clone().lerp(y,I/b),L=b-I;for(let D=0;D<=L;D++)D===0&&I===b?w[I][D]=v:w[I][D]=v.clone().lerp(x,D/L)}for(let I=0;I<b;I++)for(let v=0;v<2*(b-I)-1;v++){const x=Math.floor(v/2);v%2===0?(h(w[I][x+1]),h(w[I+1][x]),h(w[I][x])):(h(w[I][x+1]),h(w[I+1][x+1]),h(w[I+1][x]))}}function l(M){const E=new N;for(let y=0;y<s.length;y+=3)E.x=s[y+0],E.y=s[y+1],E.z=s[y+2],E.normalize().multiplyScalar(M),s[y+0]=E.x,s[y+1]=E.y,s[y+2]=E.z}function u(){const M=new N;for(let E=0;E<s.length;E+=3){M.x=s[E+0],M.y=s[E+1],M.z=s[E+2];const y=m(M)/2/Math.PI+.5,A=f(M)/Math.PI+.5;o.push(y,1-A)}g(),d()}function d(){for(let M=0;M<o.length;M+=6){const E=o[M+0],y=o[M+2],A=o[M+4],b=Math.max(E,y,A),w=Math.min(E,y,A);b>.9&&w<.1&&(E<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),A<.2&&(o[M+4]+=1))}}function h(M){s.push(M.x,M.y,M.z)}function p(M,E){const y=M*3;E.x=t[y+0],E.y=t[y+1],E.z=t[y+2]}function g(){const M=new N,E=new N,y=new N,A=new N,b=new qt,w=new qt,I=new qt;for(let v=0,x=0;v<s.length;v+=9,x+=6){M.set(s[v+0],s[v+1],s[v+2]),E.set(s[v+3],s[v+4],s[v+5]),y.set(s[v+6],s[v+7],s[v+8]),b.set(o[x+0],o[x+1]),w.set(o[x+2],o[x+3]),I.set(o[x+4],o[x+5]),A.copy(M).add(E).add(y).divideScalar(3);const L=m(A);_(b,x+0,M,L),_(w,x+2,E,L),_(I,x+4,y,L)}}function _(M,E,y,A){A<0&&M.x===1&&(o[E]=M.x-1),y.x===0&&y.z===0&&(o[E]=A/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fs(t.vertices,t.indices,t.radius,t.details)}}class xr extends fs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xr(t.radius,t.detail)}}class In extends fs{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new In(t.radius,t.detail)}}class yr extends He{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=t/a,h=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const M=f*h-o;for(let E=0;E<l;E++){const y=E*d-s;g.push(y,-M,0),_.push(0,0,1),m.push(E/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<a;M++){const E=M+l*f,y=M+l*(f+1),A=M+1+l*(f+1),b=M+1+l*f;p.push(E,y,b),p.push(y,A,b)}this.setIndex(p),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ve extends He{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new N,h=new N,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const M=[],E=f/i;let y=0;f===0&&o===0?y=.5/e:f===i&&c===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){const b=A/e;d.x=-t*Math.cos(r+b*s)*Math.sin(o+E*a),d.y=t*Math.cos(o+E*a),d.z=t*Math.sin(r+b*s)*Math.sin(o+E*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(b+y,1-E),M.push(l++)}u.push(M)}for(let f=0;f<i;f++)for(let M=0;M<e;M++){const E=u[f][M+1],y=u[f][M],A=u[f+1][M],b=u[f+1][M+1];(f!==0||o>0)&&p.push(E,y,b),(f!==i-1||c<Math.PI)&&p.push(y,A,b)}this.setIndex(p),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ye extends He{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new N,d=new N,h=new N;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/i*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/r),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,f=(r+1)*(p-1)+g,M=(r+1)*p+g;o.push(_,m,M),o.push(m,f,M)}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ps extends Sr{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Vt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Qh extends Sr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class td extends Sr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class wl extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ed extends wl{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $s=new ue,oc=new N,ac=new N;class nd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ga,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;oc.setFromMatrixPosition(t.matrixWorld),e.position.copy(oc),ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ac),e.updateMatrixWorld(),$s.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($s,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($s)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class va extends Sl{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class id extends nd{constructor(){super(new va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cc extends wl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new id}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rd extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function lc(n,t,e,i){const r=sd(i);switch(e){case ll:return n*t;case ds:return n*t/r.components*r.byteLength;case ua:return n*t/r.components*r.byteLength;case hl:return n*t*2/r.components*r.byteLength;case ha:return n*t*2/r.components*r.byteLength;case ul:return n*t*3/r.components*r.byteLength;case hn:return n*t*4/r.components*r.byteLength;case da:return n*t*4/r.components*r.byteLength;case Jr:case Qr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ts:case es:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case So:case Eo:return Math.max(n,16)*Math.max(t,8)/4;case Mo:case yo:return Math.max(n,8)*Math.max(t,8)/2;case To:case bo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case wo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Co:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Po:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Do:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Io:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case No:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case zo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ko:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ho:case Vo:case Go:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Wo:case Xo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case qo:case Yo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sd(n){switch(n){case xn:case sl:return{byteLength:1,components:1};case dr:case ol:case vr:return{byteLength:2,components:1};case ca:case la:return{byteLength:2,components:4};case hi:case aa:case gn:return{byteLength:4,components:1};case al:case cl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oa);function Al(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function od(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cd=`#ifdef USE_ALPHAHASH
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
#endif`,ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fd=`#ifdef USE_AOMAP
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
#endif`,pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,md=`#ifdef USE_BATCHING
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
#endif`,gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Md=`#ifdef USE_IRIDESCENCE
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
#endif`,Sd=`#ifdef USE_BUMPMAP
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
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pd=`#define PI 3.141592653589793
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
} // validated`,Ld=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dd=`vec3 transformedNormal = objectNormal;
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
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Od="gl_FragColor = linearToOutputTexel( gl_FragColor );",zd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bd=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$d=`#ifdef USE_GRADIENTMAP
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
}`,Kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jd=`uniform bool receiveShadow;
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
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sf=`PhysicalMaterial material;
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
#endif`,of=`struct PhysicalMaterial {
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
}`,af=`
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
#endif`,cf=`#if defined( RE_IndirectDiffuse )
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
#endif`,lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,df=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ff=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_f=`#if defined( USE_POINTS_UV )
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
#endif`,xf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ef=`#ifdef USE_MORPHTARGETS
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
#endif`,Tf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pf=`#ifdef USE_NORMALMAP
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
#endif`,Lf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,If=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ff=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Of=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qf=`float getShadowMask() {
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
}`,Yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$f=`#ifdef USE_SKINNING
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
#endif`,Kf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zf=`#ifdef USE_SKINNING
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
#endif`,jf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ep=`#ifdef USE_TRANSMISSION
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
#endif`,np=`#ifdef USE_TRANSMISSION
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
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cp=`uniform sampler2D t2D;
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`#include <common>
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
}`,pp=`#if DEPTH_PACKING == 3200
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
}`,mp=`#define DISTANCE
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
}`,gp=`#define DISTANCE
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`uniform float scale;
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
}`,Mp=`uniform vec3 diffuse;
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
}`,Sp=`#include <common>
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
}`,yp=`uniform vec3 diffuse;
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
}`,Ep=`#define LAMBERT
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
}`,Tp=`#define LAMBERT
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
}`,bp=`#define MATCAP
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
}`,wp=`#define MATCAP
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
}`,Ap=`#define NORMAL
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
}`,Rp=`#define NORMAL
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
}`,Cp=`#define PHONG
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
}`,Pp=`#define PHONG
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
}`,Lp=`#define STANDARD
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
}`,Dp=`#define STANDARD
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
}`,Ip=`#define TOON
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
}`,Up=`#define TOON
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
}`,Np=`uniform float size;
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
}`,Fp=`uniform vec3 diffuse;
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
}`,Op=`#include <common>
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
}`,zp=`uniform vec3 color;
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
}`,Bp=`uniform float rotation;
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
}`,kp=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:ad,alphahash_pars_fragment:cd,alphamap_fragment:ld,alphamap_pars_fragment:ud,alphatest_fragment:hd,alphatest_pars_fragment:dd,aomap_fragment:fd,aomap_pars_fragment:pd,batching_pars_vertex:md,batching_vertex:gd,begin_vertex:_d,beginnormal_vertex:xd,bsdfs:vd,iridescence_fragment:Md,bumpmap_pars_fragment:Sd,clipping_planes_fragment:yd,clipping_planes_pars_fragment:Ed,clipping_planes_pars_vertex:Td,clipping_planes_vertex:bd,color_fragment:wd,color_pars_fragment:Ad,color_pars_vertex:Rd,color_vertex:Cd,common:Pd,cube_uv_reflection_fragment:Ld,defaultnormal_vertex:Dd,displacementmap_pars_vertex:Id,displacementmap_vertex:Ud,emissivemap_fragment:Nd,emissivemap_pars_fragment:Fd,colorspace_fragment:Od,colorspace_pars_fragment:zd,envmap_fragment:Bd,envmap_common_pars_fragment:kd,envmap_pars_fragment:Hd,envmap_pars_vertex:Vd,envmap_physical_pars_fragment:Qd,envmap_vertex:Gd,fog_vertex:Wd,fog_pars_vertex:Xd,fog_fragment:qd,fog_pars_fragment:Yd,gradientmap_pars_fragment:$d,lightmap_pars_fragment:Kd,lights_lambert_fragment:Zd,lights_lambert_pars_fragment:jd,lights_pars_begin:Jd,lights_toon_fragment:tf,lights_toon_pars_fragment:ef,lights_phong_fragment:nf,lights_phong_pars_fragment:rf,lights_physical_fragment:sf,lights_physical_pars_fragment:of,lights_fragment_begin:af,lights_fragment_maps:cf,lights_fragment_end:lf,logdepthbuf_fragment:uf,logdepthbuf_pars_fragment:hf,logdepthbuf_pars_vertex:df,logdepthbuf_vertex:ff,map_fragment:pf,map_pars_fragment:mf,map_particle_fragment:gf,map_particle_pars_fragment:_f,metalnessmap_fragment:xf,metalnessmap_pars_fragment:vf,morphinstance_vertex:Mf,morphcolor_vertex:Sf,morphnormal_vertex:yf,morphtarget_pars_vertex:Ef,morphtarget_vertex:Tf,normal_fragment_begin:bf,normal_fragment_maps:wf,normal_pars_fragment:Af,normal_pars_vertex:Rf,normal_vertex:Cf,normalmap_pars_fragment:Pf,clearcoat_normal_fragment_begin:Lf,clearcoat_normal_fragment_maps:Df,clearcoat_pars_fragment:If,iridescence_pars_fragment:Uf,opaque_fragment:Nf,packing:Ff,premultiplied_alpha_fragment:Of,project_vertex:zf,dithering_fragment:Bf,dithering_pars_fragment:kf,roughnessmap_fragment:Hf,roughnessmap_pars_fragment:Vf,shadowmap_pars_fragment:Gf,shadowmap_pars_vertex:Wf,shadowmap_vertex:Xf,shadowmask_pars_fragment:qf,skinbase_vertex:Yf,skinning_pars_vertex:$f,skinning_vertex:Kf,skinnormal_vertex:Zf,specularmap_fragment:jf,specularmap_pars_fragment:Jf,tonemapping_fragment:Qf,tonemapping_pars_fragment:tp,transmission_fragment:ep,transmission_pars_fragment:np,uv_pars_fragment:ip,uv_pars_vertex:rp,uv_vertex:sp,worldpos_vertex:op,background_vert:ap,background_frag:cp,backgroundCube_vert:lp,backgroundCube_frag:up,cube_vert:hp,cube_frag:dp,depth_vert:fp,depth_frag:pp,distanceRGBA_vert:mp,distanceRGBA_frag:gp,equirect_vert:_p,equirect_frag:xp,linedashed_vert:vp,linedashed_frag:Mp,meshbasic_vert:Sp,meshbasic_frag:yp,meshlambert_vert:Ep,meshlambert_frag:Tp,meshmatcap_vert:bp,meshmatcap_frag:wp,meshnormal_vert:Ap,meshnormal_frag:Rp,meshphong_vert:Cp,meshphong_frag:Pp,meshphysical_vert:Lp,meshphysical_frag:Dp,meshtoon_vert:Ip,meshtoon_frag:Up,points_vert:Np,points_frag:Fp,shadow_vert:Op,shadow_frag:zp,sprite_vert:Bp,sprite_frag:kp},ht={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},pn={basic:{uniforms:ze([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:ze([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:ze([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:ze([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:ze([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:ze([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:ze([ht.points,ht.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:ze([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:ze([ht.common,ht.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:ze([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:ze([ht.sprite,ht.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:ze([ht.common,ht.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:ze([ht.lights,ht.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};pn.physical={uniforms:ze([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Wr={r:0,b:0,g:0},ei=new Fn,Hp=new ue;function Vp(n,t,e,i,r,s,o){const a=new Vt(0);let c=s===!0?0:1,l,u,d=null,h=0,p=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function _(E){let y=!1;const A=g(E);A===null?f(a,c):A&&A.isColor&&(f(A,1),y=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===hs)?(u===void 0&&(u=new ut(new Kt(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Gi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ei.copy(y.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Hp.makeRotationFromEuler(ei)),u.material.toneMapped=Jt.getTransfer(A.colorSpace)!==ae,(d!==A||h!==A.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=A,h=A.version,p=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new ut(new yr(2,2),new $n({name:"BackgroundMaterial",uniforms:Gi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(A.colorSpace)!==ae,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||h!==A.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=A,h=A.version,p=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,y){E.getRGB(Wr,Ml(n)),i.buffers.color.setClear(Wr.r,Wr.g,Wr.b,y,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(a,c)},render:_,addToRenderList:m,dispose:M}}function Gp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,L,D,R,F){let O=!1;const H=d(R,D,L);s!==H&&(s=H,l(s.object)),O=p(x,R,D,F),O&&g(x,R,D,F),F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,y(x,L,D,R),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,L,D){const R=D.wireframe===!0;let F=i[x.id];F===void 0&&(F={},i[x.id]=F);let O=F[L.id];O===void 0&&(O={},F[L.id]=O);let H=O[R];return H===void 0&&(H=h(c()),O[R]=H),H}function h(x){const L=[],D=[],R=[];for(let F=0;F<e;F++)L[F]=0,D[F]=0,R[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:R,object:x,attributes:{},index:null}}function p(x,L,D,R){const F=s.attributes,O=L.attributes;let H=0;const Y=D.getAttributes();for(const B in Y)if(Y[B].location>=0){const ot=F[B];let xt=O[B];if(xt===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(xt=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(xt=x.instanceColor)),ot===void 0||ot.attribute!==xt||xt&&ot.data!==xt.data)return!0;H++}return s.attributesNum!==H||s.index!==R}function g(x,L,D,R){const F={},O=L.attributes;let H=0;const Y=D.getAttributes();for(const B in Y)if(Y[B].location>=0){let ot=O[B];ot===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(ot=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(ot=x.instanceColor));const xt={};xt.attribute=ot,ot&&ot.data&&(xt.data=ot.data),F[B]=xt,H++}s.attributes=F,s.attributesNum=H,s.index=R}function _(){const x=s.newAttributes;for(let L=0,D=x.length;L<D;L++)x[L]=0}function m(x){f(x,0)}function f(x,L){const D=s.newAttributes,R=s.enabledAttributes,F=s.attributeDivisors;D[x]=1,R[x]===0&&(n.enableVertexAttribArray(x),R[x]=1),F[x]!==L&&(n.vertexAttribDivisor(x,L),F[x]=L)}function M(){const x=s.newAttributes,L=s.enabledAttributes;for(let D=0,R=L.length;D<R;D++)L[D]!==x[D]&&(n.disableVertexAttribArray(D),L[D]=0)}function E(x,L,D,R,F,O,H){H===!0?n.vertexAttribIPointer(x,L,D,F,O):n.vertexAttribPointer(x,L,D,R,F,O)}function y(x,L,D,R){_();const F=R.attributes,O=D.getAttributes(),H=L.defaultAttributeValues;for(const Y in O){const B=O[Y];if(B.location>=0){let Q=F[Y];if(Q===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor)),Q!==void 0){const ot=Q.normalized,xt=Q.itemSize,Rt=t.get(Q);if(Rt===void 0)continue;const Wt=Rt.buffer,tt=Rt.type,Dt=Rt.bytesPerElement,q=tt===n.INT||tt===n.UNSIGNED_INT||Q.gpuType===aa;if(Q.isInterleavedBufferAttribute){const j=Q.data,gt=j.stride,Pt=Q.offset;if(j.isInstancedInterleavedBuffer){for(let Tt=0;Tt<B.locationSize;Tt++)f(B.location+Tt,j.meshPerAttribute);x.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Tt=0;Tt<B.locationSize;Tt++)m(B.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let Tt=0;Tt<B.locationSize;Tt++)E(B.location+Tt,xt/B.locationSize,tt,ot,gt*Dt,(Pt+xt/B.locationSize*Tt)*Dt,q)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<B.locationSize;j++)f(B.location+j,Q.meshPerAttribute);x.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<B.locationSize;j++)m(B.location+j);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let j=0;j<B.locationSize;j++)E(B.location+j,xt/B.locationSize,tt,ot,xt*Dt,xt/B.locationSize*j*Dt,q)}}else if(H!==void 0){const ot=H[Y];if(ot!==void 0)switch(ot.length){case 2:n.vertexAttrib2fv(B.location,ot);break;case 3:n.vertexAttrib3fv(B.location,ot);break;case 4:n.vertexAttrib4fv(B.location,ot);break;default:n.vertexAttrib1fv(B.location,ot)}}}}M()}function A(){I();for(const x in i){const L=i[x];for(const D in L){const R=L[D];for(const F in R)u(R[F].object),delete R[F];delete L[D]}delete i[x]}}function b(x){if(i[x.id]===void 0)return;const L=i[x.id];for(const D in L){const R=L[D];for(const F in R)u(R[F].object),delete R[F];delete L[D]}delete i[x.id]}function w(x){for(const L in i){const D=i[L];if(D[x.id]===void 0)continue;const R=D[x.id];for(const F in R)u(R[F].object),delete R[F];delete D[x.id]}}function I(){v(),o=!0,s!==r&&(s=r,l(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Wp(n,t,e){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),e.update(u,i,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];e.update(p,i,1)}function c(l,u,d,h){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*h[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Xp(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==hn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const I=w===vr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==xn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==gn&&!I)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:A,maxSamples:b}}function qp(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new ri,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const M=s?0:i,E=M*4;let y=f.clippingState||null;c.value=y,y=u(g,h,E,p);for(let A=0;A!==E;++A)y[A]=e[A];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,y=p;E!==_;++E,y+=4)o.copy(d[E]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Yp(n){let t=new WeakMap;function e(o,a){return a===go?o.mapping=ki:a===_o&&(o.mapping=Hi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===go||a===_o)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Yh(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Ui=4,uc=[.125,.215,.35,.446,.526,.582],ai=20,Ks=new va,hc=new Vt;let Zs=null,js=0,Js=0,Qs=!1;const si=(1+Math.sqrt(5))/2,Pi=1/si,dc=[new N(-si,Pi,0),new N(si,Pi,0),new N(-Pi,0,si),new N(Pi,0,si),new N(0,si,-Pi),new N(0,si,Pi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],$p=new N;class fc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=$p}=s;Zs=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zs,js,Js),this._renderer.xr.enabled=Qs,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zs=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:vr,format:hn,colorSpace:Vi,depthBuffer:!1},r=pc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pc(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kp(s)),this._blurMaterial=Zp(s,t,e)}return r}_compileMaterial(t){const e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,Ks)}_sceneToCubeUV(t,e,i,r,s){const c=new rn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(hc),d.toneMapping=Un,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const _=new se({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),m=new ut(new Kt,_);let f=!1;const M=t.background;M?M.isColor&&(_.color.copy(M),t.background=null,f=!0):(_.color.copy(hc),f=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[E],s.y,s.z)):y===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[E]));const A=this._cubeSize;Xr(r,y*A,E>2?A:0,A,A),d.setRenderTarget(r),f&&d.render(m,c),d.render(t,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=h,t.background=M}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===ki||t.mapping===Hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Xr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Ks)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=dc[(r-s-1)%dc.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ut(this._lodPlanes[r],l),h=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ai-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):ai;m>ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);const f=[];let M=0;for(let w=0;w<ai;++w){const I=w/_,v=Math.exp(-I*I/2);f.push(v),w===0?M+=v:w<m&&(M+=2*v)}for(let w=0;w<f.length;w++)f[w]=f[w]/M;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-i;const y=this._sizeLods[r],A=3*y*(r>E-Ui?r-E+Ui:0),b=4*(this._cubeSize-y);Xr(e,A,b,3*y,2*y),c.setRenderTarget(e),c.render(d,Ks)}}function Kp(n){const t=[],e=[],i=[];let r=n;const s=n-Ui+1+uc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-Ui?c=uc[o-n+Ui-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,f=1,M=new Float32Array(_*g*p),E=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let b=0;b<p;b++){const w=b%3*2/3-1,I=b>2?0:-1,v=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];M.set(v,_*g*b),E.set(h,m*g*b);const x=[b,b,b,b,b,b];y.set(x,f*g*b)}const A=new He;A.setAttribute("position",new De(M,_)),A.setAttribute("uv",new De(E,m)),A.setAttribute("faceIndex",new De(y,f)),t.push(A),r>Ui&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function pc(n,t,e){const i=new Yn(n,t,e);return i.texture.mapping=hs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Zp(n,t,e){const i=new Float32Array(ai),r=new N(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ma(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function mc(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ma(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function gc(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ma(){return`

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
	`}function jp(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===go||c===_o,u=c===ki||c===Hi;if(l||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new fc(n)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new fc(n)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Jp(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&_r("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Qp(n,t,e,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(t.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const p in h)t.update(h[p],n.ARRAY_BUFFER)}function l(d){const h=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let E=0,y=M.length;E<y;E+=3){const A=M[E+0],b=M[E+1],w=M[E+2];h.push(A,b,b,w,w,A)}}else if(g!==void 0){const M=g.array;_=g.version;for(let E=0,y=M.length/3-1;E<y;E+=3){const A=E+0,b=E+1,w=E+2;h.push(A,b,b,w,w,A)}}else return;const m=new(pl(h)?vl:xl)(h,1);m.version=_;const f=s.get(d);f&&t.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function tm(n,t,e){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,p){n.drawElements(i,p,s,h*o),e.update(p,i,1)}function l(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*o,g),e.update(p,i,g))}function u(h,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function d(h,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)l(h[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*_[M];e.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function em(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function nm(n,t,e){const i=new WeakMap,r=new ve;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let x=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let A=a.attributes.position.count*y,b=1;A>t.maxTextureSize&&(b=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const w=new Float32Array(A*b*4*d),I=new ml(w,A,b,d);I.type=gn,I.needsUpdate=!0;const v=y*4;for(let L=0;L<d;L++){const D=f[L],R=M[L],F=E[L],O=A*b*4*L;for(let H=0;H<D.count;H++){const Y=H*v;g===!0&&(r.fromBufferAttribute(D,H),w[O+Y+0]=r.x,w[O+Y+1]=r.y,w[O+Y+2]=r.z,w[O+Y+3]=0),_===!0&&(r.fromBufferAttribute(R,H),w[O+Y+4]=r.x,w[O+Y+5]=r.y,w[O+Y+6]=r.z,w[O+Y+7]=0),m===!0&&(r.fromBufferAttribute(F,H),w[O+Y+8]=r.x,w[O+Y+9]=r.y,w[O+Y+10]=r.z,w[O+Y+11]=F.itemSize===4?r.w:1)}}h={count:d,texture:I,size:new qt(A,b)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function im(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==l&&(t.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const Rl=new ke,_c=new Tl(1,1),Cl=new ml,Pl=new Ch,Ll=new yl,xc=[],vc=[],Mc=new Float32Array(16),Sc=new Float32Array(9),yc=new Float32Array(4);function Yi(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=xc[r];if(s===void 0&&(s=new Float32Array(r),xc[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Ae(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Re(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ms(n,t){let e=vc[t];e===void 0&&(e=new Int32Array(t),vc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function rm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function sm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2fv(this.addr,t),Re(e,t)}}function om(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;n.uniform3fv(this.addr,t),Re(e,t)}}function am(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4fv(this.addr,t),Re(e,t)}}function cm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;yc.set(i),n.uniformMatrix2fv(this.addr,!1,yc),Re(e,i)}}function lm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;Sc.set(i),n.uniformMatrix3fv(this.addr,!1,Sc),Re(e,i)}}function um(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;Mc.set(i),n.uniformMatrix4fv(this.addr,!1,Mc),Re(e,i)}}function hm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function dm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2iv(this.addr,t),Re(e,t)}}function fm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3iv(this.addr,t),Re(e,t)}}function pm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4iv(this.addr,t),Re(e,t)}}function mm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function gm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2uiv(this.addr,t),Re(e,t)}}function _m(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3uiv(this.addr,t),Re(e,t)}}function xm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4uiv(this.addr,t),Re(e,t)}}function vm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(_c.compareFunction=fl,s=_c):s=Rl,e.setTexture2D(t||s,r)}function Mm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Pl,r)}function Sm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Ll,r)}function ym(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Cl,r)}function Em(n){switch(n){case 5126:return rm;case 35664:return sm;case 35665:return om;case 35666:return am;case 35674:return cm;case 35675:return lm;case 35676:return um;case 5124:case 35670:return hm;case 35667:case 35671:return dm;case 35668:case 35672:return fm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return gm;case 36295:return _m;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return ym}}function Tm(n,t){n.uniform1fv(this.addr,t)}function bm(n,t){const e=Yi(t,this.size,2);n.uniform2fv(this.addr,e)}function wm(n,t){const e=Yi(t,this.size,3);n.uniform3fv(this.addr,e)}function Am(n,t){const e=Yi(t,this.size,4);n.uniform4fv(this.addr,e)}function Rm(n,t){const e=Yi(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Cm(n,t){const e=Yi(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Pm(n,t){const e=Yi(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Lm(n,t){n.uniform1iv(this.addr,t)}function Dm(n,t){n.uniform2iv(this.addr,t)}function Im(n,t){n.uniform3iv(this.addr,t)}function Um(n,t){n.uniform4iv(this.addr,t)}function Nm(n,t){n.uniform1uiv(this.addr,t)}function Fm(n,t){n.uniform2uiv(this.addr,t)}function Om(n,t){n.uniform3uiv(this.addr,t)}function zm(n,t){n.uniform4uiv(this.addr,t)}function Bm(n,t,e){const i=this.cache,r=t.length,s=ms(e,r);Ae(i,s)||(n.uniform1iv(this.addr,s),Re(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Rl,s[o])}function km(n,t,e){const i=this.cache,r=t.length,s=ms(e,r);Ae(i,s)||(n.uniform1iv(this.addr,s),Re(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Pl,s[o])}function Hm(n,t,e){const i=this.cache,r=t.length,s=ms(e,r);Ae(i,s)||(n.uniform1iv(this.addr,s),Re(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Ll,s[o])}function Vm(n,t,e){const i=this.cache,r=t.length,s=ms(e,r);Ae(i,s)||(n.uniform1iv(this.addr,s),Re(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Cl,s[o])}function Gm(n){switch(n){case 5126:return Tm;case 35664:return bm;case 35665:return wm;case 35666:return Am;case 35674:return Rm;case 35675:return Cm;case 35676:return Pm;case 5124:case 35670:return Lm;case 35667:case 35671:return Dm;case 35668:case 35672:return Im;case 35669:case 35673:return Um;case 5125:return Nm;case 36294:return Fm;case 36295:return Om;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return km;case 35680:case 36300:case 36308:case 36293:return Hm;case 36289:case 36303:case 36311:case 36292:return Vm}}class Wm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Em(e.type)}}class Xm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gm(e.type)}}class qm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const to=/(\w+)(\])?(\[|\.)?/g;function Ec(n,t){n.seq.push(t),n.map[t.id]=t}function Ym(n,t,e){const i=n.name,r=i.length;for(to.lastIndex=0;;){const s=to.exec(i),o=to.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Ec(e,l===void 0?new Wm(a,n,t):new Xm(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new qm(a),Ec(e,d)),e=d}}}class ns{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Ym(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Tc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const $m=37297;let Km=0;function Zm(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const bc=new kt;function jm(n){Jt._getMatrix(bc,Jt.workingColorSpace,n);const t=`mat3( ${bc.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(n)){case os:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function wc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Zm(n.getShaderSource(t),a)}else return s}function Jm(n,t){const e=jm(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Qm(n,t){let e;switch(t){case Hu:e="Linear";break;case Vu:e="Reinhard";break;case Gu:e="Cineon";break;case Wu:e="ACESFilmic";break;case qu:e="AgX";break;case Yu:e="Neutral";break;case Xu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qr=new N;function tg(){Jt.getLuminanceCoefficients(qr);const n=qr.x.toFixed(4),t=qr.y.toFixed(4),e=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function ng(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ig(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ir(n){return n!==""}function Ac(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(n){return n.replace(rg,og)}const sg=new Map;function og(n,t){let e=Ht[t];if(e===void 0){const i=sg.get(t);if(i!==void 0)e=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return $o(e)}const ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cc(n){return n.replace(ag,cg)}function cg(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pc(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function lg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nl?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Mu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function ug(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ki:case Hi:t="ENVMAP_TYPE_CUBE";break;case hs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hg(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Hi&&(t="ENVMAP_MODE_REFRACTION"),t}function dg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case il:t="ENVMAP_BLENDING_MULTIPLY";break;case Bu:t="ENVMAP_BLENDING_MIX";break;case ku:t="ENVMAP_BLENDING_ADD";break}return t}function fg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function pg(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=lg(e),l=ug(e),u=hg(e),d=dg(e),h=fg(e),p=eg(e),g=ng(s),_=r.createProgram();let m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ir).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ir).join(`
`),f.length>0&&(f+=`
`)):(m=[Pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),f=[Pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Un?Qm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Jm("linearToOutputTexel",e.outputColorSpace),tg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ir).join(`
`)),o=$o(o),o=Ac(o,e),o=Rc(o,e),a=$o(a),a=Ac(a,e),a=Rc(a,e),o=Cc(o),a=Cc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Oa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=M+m+o,y=M+f+a,A=Tc(r,r.VERTEX_SHADER,E),b=Tc(r,r.FRAGMENT_SHADER,y);r.attachShader(_,A),r.attachShader(_,b),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(L){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(_)||"",R=r.getShaderInfoLog(A)||"",F=r.getShaderInfoLog(b)||"",O=D.trim(),H=R.trim(),Y=F.trim();let B=!0,Q=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,A,b);else{const ot=wc(r,A,"vertex"),xt=wc(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+ot+`
`+xt)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(H===""||Y==="")&&(Q=!1);Q&&(L.diagnostics={runnable:B,programLog:O,vertexShader:{log:H,prefix:m},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(A),r.deleteShader(b),I=new ns(r,_),v=ig(r,_)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,$m)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Km++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=b,this}let mg=0;class gg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new _g(t),e.set(t,i)),i}}class _g{constructor(t){this.id=mg++,this.code=t,this.usedTimes=0}}function xg(n,t,e,i,r,s,o){const a=new gl,c=new gg,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,x,L,D,R){const F=D.fog,O=R.geometry,H=v.isMeshStandardMaterial?D.environment:null,Y=(v.isMeshStandardMaterial?e:t).get(v.envMap||H),B=Y&&Y.mapping===hs?Y.image.height:null,Q=g[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const ot=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,xt=ot!==void 0?ot.length:0;let Rt=0;O.morphAttributes.position!==void 0&&(Rt=1),O.morphAttributes.normal!==void 0&&(Rt=2),O.morphAttributes.color!==void 0&&(Rt=3);let Wt,tt,Dt,q;if(Q){const ee=pn[Q];Wt=ee.vertexShader,tt=ee.fragmentShader}else Wt=v.vertexShader,tt=v.fragmentShader,c.update(v),Dt=c.getVertexShaderID(v),q=c.getFragmentShaderID(v);const j=n.getRenderTarget(),gt=n.state.buffers.depth.getReversed(),Pt=R.isInstancedMesh===!0,Tt=R.isBatchedMesh===!0,Gt=!!v.map,Te=!!v.matcap,P=!!Y,K=!!v.aoMap,et=!!v.lightMap,lt=!!v.bumpMap,dt=!!v.normalMap,Zt=!!v.displacementMap,_t=!!v.emissiveMap,Nt=!!v.metalnessMap,te=!!v.roughnessMap,Se=v.anisotropy>0,C=v.clearcoat>0,S=v.dispersion>0,V=v.iridescence>0,$=v.sheen>0,J=v.transmission>0,X=Se&&!!v.anisotropyMap,At=C&&!!v.clearcoatMap,at=C&&!!v.clearcoatNormalMap,Et=C&&!!v.clearcoatRoughnessMap,bt=V&&!!v.iridescenceMap,rt=V&&!!v.iridescenceThicknessMap,mt=$&&!!v.sheenColorMap,Ut=$&&!!v.sheenRoughnessMap,wt=!!v.specularMap,ft=!!v.specularColorMap,zt=!!v.specularIntensityMap,U=J&&!!v.transmissionMap,st=J&&!!v.thicknessMap,ct=!!v.gradientMap,Mt=!!v.alphaMap,nt=v.alphaTest>0,Z=!!v.alphaHash,yt=!!v.extensions;let Ot=Un;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ot=n.toneMapping);const le={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:Wt,fragmentShader:tt,defines:v.defines,customVertexShaderID:Dt,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Tt,batchingColor:Tt&&R._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&R.instanceColor!==null,instancingMorph:Pt&&R.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Vi,alphaToCoverage:!!v.alphaToCoverage,map:Gt,matcap:Te,envMap:P,envMapMode:P&&Y.mapping,envMapCubeUVHeight:B,aoMap:K,lightMap:et,bumpMap:lt,normalMap:dt,displacementMap:h&&Zt,emissiveMap:_t,normalMapObjectSpace:dt&&v.normalMapType===ju,normalMapTangentSpace:dt&&v.normalMapType===dl,metalnessMap:Nt,roughnessMap:te,anisotropy:Se,anisotropyMap:X,clearcoat:C,clearcoatMap:At,clearcoatNormalMap:at,clearcoatRoughnessMap:Et,dispersion:S,iridescence:V,iridescenceMap:bt,iridescenceThicknessMap:rt,sheen:$,sheenColorMap:mt,sheenRoughnessMap:Ut,specularMap:wt,specularColorMap:ft,specularIntensityMap:zt,transmission:J,transmissionMap:U,thicknessMap:st,gradientMap:ct,opaque:v.transparent===!1&&v.blending===Ni&&v.alphaToCoverage===!1,alphaMap:Mt,alphaTest:nt,alphaHash:Z,combine:v.combine,mapUv:Gt&&_(v.map.channel),aoMapUv:K&&_(v.aoMap.channel),lightMapUv:et&&_(v.lightMap.channel),bumpMapUv:lt&&_(v.bumpMap.channel),normalMapUv:dt&&_(v.normalMap.channel),displacementMapUv:Zt&&_(v.displacementMap.channel),emissiveMapUv:_t&&_(v.emissiveMap.channel),metalnessMapUv:Nt&&_(v.metalnessMap.channel),roughnessMapUv:te&&_(v.roughnessMap.channel),anisotropyMapUv:X&&_(v.anisotropyMap.channel),clearcoatMapUv:At&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:at&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&_(v.sheenRoughnessMap.channel),specularMapUv:wt&&_(v.specularMap.channel),specularColorMapUv:ft&&_(v.specularColorMap.channel),specularIntensityMapUv:zt&&_(v.specularIntensityMap.channel),transmissionMapUv:U&&_(v.transmissionMap.channel),thicknessMapUv:st&&_(v.thicknessMap.channel),alphaMapUv:Mt&&_(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(dt||Se),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!O.attributes.uv&&(Gt||Mt),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:R.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Rt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Gt&&v.map.isVideoTexture===!0&&Jt.getTransfer(v.map.colorSpace)===ae,decodeVideoTextureEmissive:_t&&v.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(v.emissiveMap.colorSpace)===ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Pn,flipSided:v.side===Be,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:yt&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&v.extensions.multiDraw===!0||Tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return le.vertexUv1s=l.has(1),le.vertexUv2s=l.has(2),le.vertexUv3s=l.has(3),l.clear(),le}function f(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)x.push(L),x.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(M(x,v),E(x,v),x.push(n.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function M(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function E(v,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),v.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),v.push(a.mask)}function y(v){const x=g[v.type];let L;if(x){const D=pn[x];L=Gh.clone(D.uniforms)}else L=v.uniforms;return L}function A(v,x){let L;for(let D=0,R=u.length;D<R;D++){const F=u[D];if(F.cacheKey===x){L=F,++L.usedTimes;break}}return L===void 0&&(L=new pg(n,x,v,s),u.push(L)),L}function b(v){if(--v.usedTimes===0){const x=u.indexOf(v);u[x]=u[u.length-1],u.pop(),v.destroy()}}function w(v){c.remove(v)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:A,releaseProgram:b,releaseShaderCache:w,programs:u,dispose:I}}function vg(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Mg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Lc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Dc(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(d,h,p,g,_,m){let f=n[t];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[t]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),t++,f}function a(d,h,p,g,_,m){const f=o(d,h,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):e.push(f)}function c(d,h,p,g,_,m){const f=o(d,h,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):e.unshift(f)}function l(d,h){e.length>1&&e.sort(d||Mg),i.length>1&&i.sort(h||Lc),r.length>1&&r.sort(h||Lc)}function u(){for(let d=t,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function Sg(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Dc,n.set(i,[o])):r>=s.length?(o=new Dc,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function yg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Vt};break;case"SpotLight":e={position:new N,direction:new N,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function Eg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Tg=0;function bg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function wg(n){const t=new yg,e=Eg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const r=new N,s=new ue,o=new ue;function a(l){let u=0,d=0,h=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,M=0,E=0,y=0,A=0,b=0,w=0;l.sort(bg);for(let v=0,x=l.length;v<x;v++){const L=l[v],D=L.color,R=L.intensity,F=L.distance,O=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=D.r*R,d+=D.g*R,h+=D.b*R;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],R);w++}else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,B=e.get(L);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=L.shadow.matrix,M++}i.directional[p]=H,p++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(D).multiplyScalar(R),H.distance=F,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[_]=H;const Y=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,Y.updateMatrices(L),L.castShadow&&b++),i.spotLightMatrix[_]=Y.matrix,L.castShadow){const B=e.get(L);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,i.spotShadow[_]=B,i.spotShadowMap[_]=O,y++}_++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy(D).multiplyScalar(R),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=H,m++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const Y=L.shadow,B=e.get(L);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,B.shadowCameraNear=Y.camera.near,B.shadowCameraFar=Y.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=L.shadow.matrix,E++}i.point[g]=H,g++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(R),H.groundColor.copy(L.groundColor).multiplyScalar(R),i.hemi[f]=H,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const I=i.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==M||I.numPointShadows!==E||I.numSpotShadows!==y||I.numSpotMaps!==A||I.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+A-b,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=w,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=M,I.numPointShadows=E,I.numSpotShadows=y,I.numSpotMaps=A,I.numLightProbes=w,i.version=Tg++)}function c(l,u){let d=0,h=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,M=l.length;f<M;f++){const E=l[f];if(E.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(E.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function Ic(n){const t=new wg(n),e=[],i=[];function r(u){l.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Ag(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Ic(n),t.set(r,[a])):s>=o.length?(a=new Ic(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const Rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cg=`uniform sampler2D shadow_pass;
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
}`;function Pg(n,t,e){let i=new ga;const r=new qt,s=new qt,o=new ve,a=new Qh({depthPacking:Zu}),c=new td,l={},u=e.maxTextureSize,d={[qn]:Be,[Be]:qn,[Pn]:Pn},h=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:Rg,fragmentShader:Cg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new He;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ut(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let f=this.type;this.render=function(b,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const v=n.getRenderTarget(),x=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Xn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const R=f!==Cn&&this.type===Cn,F=f===Cn&&this.type!==Cn;for(let O=0,H=b.length;O<H;O++){const Y=b[O],B=Y.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const Q=B.getFrameExtents();if(r.multiply(Q),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,B.mapSize.y=s.y)),B.map===null||R===!0||F===!0){const xt=this.type!==Cn?{minFilter:Pe,magFilter:Pe}:{};B.map!==null&&B.map.dispose(),B.map=new Yn(r.x,r.y,xt),B.map.texture.name=Y.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const ot=B.getViewportCount();for(let xt=0;xt<ot;xt++){const Rt=B.getViewport(xt);o.set(s.x*Rt.x,s.y*Rt.y,s.x*Rt.z,s.y*Rt.w),D.viewport(o),B.updateMatrices(Y,xt),i=B.getFrustum(),y(w,I,B.camera,Y,this.type)}B.isPointLightShadow!==!0&&this.type===Cn&&M(B,I),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(v,x,L)};function M(b,w){const I=t.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Yn(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(w,null,I,h,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(w,null,I,p,_,null)}function E(b,w,I,v){let x=null;const L=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)x=L;else if(x=I.isPointLight===!0?c:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=x.uuid,R=w.uuid;let F=l[D];F===void 0&&(F={},l[D]=F);let O=F[R];O===void 0&&(O=x.clone(),F[R]=O,w.addEventListener("dispose",A)),x=O}if(x.visible=w.visible,x.wireframe=w.wireframe,v===Cn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:d[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const D=n.properties.get(x);D.light=I}return x}function y(b,w,I,v,x){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Cn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const R=t.update(b),F=b.material;if(Array.isArray(F)){const O=R.groups;for(let H=0,Y=O.length;H<Y;H++){const B=O[H],Q=F[B.materialIndex];if(Q&&Q.visible){const ot=E(b,Q,v,x);b.onBeforeShadow(n,b,w,I,R,ot,B),n.renderBufferDirect(I,null,R,ot,b,B),b.onAfterShadow(n,b,w,I,R,ot,B)}}}else if(F.visible){const O=E(b,F,v,x);b.onBeforeShadow(n,b,w,I,R,O,null),n.renderBufferDirect(I,null,R,O,b,null),b.onAfterShadow(n,b,w,I,R,O,null)}}const D=b.children;for(let R=0,F=D.length;R<F;R++)y(D[R],w,I,v,x)}function A(b){b.target.removeEventListener("dispose",A);for(const I in l){const v=l[I],x=b.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}const Lg={[co]:lo,[uo]:po,[ho]:mo,[Bi]:fo,[lo]:co,[po]:uo,[mo]:ho,[fo]:Bi};function Dg(n,t){function e(){let U=!1;const st=new ve;let ct=null;const Mt=new ve(0,0,0,0);return{setMask:function(nt){ct!==nt&&!U&&(n.colorMask(nt,nt,nt,nt),ct=nt)},setLocked:function(nt){U=nt},setClear:function(nt,Z,yt,Ot,le){le===!0&&(nt*=Ot,Z*=Ot,yt*=Ot),st.set(nt,Z,yt,Ot),Mt.equals(st)===!1&&(n.clearColor(nt,Z,yt,Ot),Mt.copy(st))},reset:function(){U=!1,ct=null,Mt.set(-1,0,0,0)}}}function i(){let U=!1,st=!1,ct=null,Mt=null,nt=null;return{setReversed:function(Z){if(st!==Z){const yt=t.get("EXT_clip_control");Z?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),st=Z;const Ot=nt;nt=null,this.setClear(Ot)}},getReversed:function(){return st},setTest:function(Z){Z?j(n.DEPTH_TEST):gt(n.DEPTH_TEST)},setMask:function(Z){ct!==Z&&!U&&(n.depthMask(Z),ct=Z)},setFunc:function(Z){if(st&&(Z=Lg[Z]),Mt!==Z){switch(Z){case co:n.depthFunc(n.NEVER);break;case lo:n.depthFunc(n.ALWAYS);break;case uo:n.depthFunc(n.LESS);break;case Bi:n.depthFunc(n.LEQUAL);break;case ho:n.depthFunc(n.EQUAL);break;case fo:n.depthFunc(n.GEQUAL);break;case po:n.depthFunc(n.GREATER);break;case mo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Mt=Z}},setLocked:function(Z){U=Z},setClear:function(Z){nt!==Z&&(st&&(Z=1-Z),n.clearDepth(Z),nt=Z)},reset:function(){U=!1,ct=null,Mt=null,nt=null,st=!1}}}function r(){let U=!1,st=null,ct=null,Mt=null,nt=null,Z=null,yt=null,Ot=null,le=null;return{setTest:function(ee){U||(ee?j(n.STENCIL_TEST):gt(n.STENCIL_TEST))},setMask:function(ee){st!==ee&&!U&&(n.stencilMask(ee),st=ee)},setFunc:function(ee,Mn,dn){(ct!==ee||Mt!==Mn||nt!==dn)&&(n.stencilFunc(ee,Mn,dn),ct=ee,Mt=Mn,nt=dn)},setOp:function(ee,Mn,dn){(Z!==ee||yt!==Mn||Ot!==dn)&&(n.stencilOp(ee,Mn,dn),Z=ee,yt=Mn,Ot=dn)},setLocked:function(ee){U=ee},setClear:function(ee){le!==ee&&(n.clearStencil(ee),le=ee)},reset:function(){U=!1,st=null,ct=null,Mt=null,nt=null,Z=null,yt=null,Ot=null,le=null}}}const s=new e,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,E=null,y=null,A=null,b=null,w=new Vt(0,0,0),I=0,v=!1,x=null,L=null,D=null,R=null,F=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(B)[1]),H=Y>=1):B.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),H=Y>=2);let Q=null,ot={};const xt=n.getParameter(n.SCISSOR_BOX),Rt=n.getParameter(n.VIEWPORT),Wt=new ve().fromArray(xt),tt=new ve().fromArray(Rt);function Dt(U,st,ct,Mt){const nt=new Uint8Array(4),Z=n.createTexture();n.bindTexture(U,Z),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let yt=0;yt<ct;yt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(st,0,n.RGBA,1,1,Mt,0,n.RGBA,n.UNSIGNED_BYTE,nt):n.texImage2D(st+yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,nt);return Z}const q={};q[n.TEXTURE_2D]=Dt(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Dt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Dt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Dt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(n.DEPTH_TEST),o.setFunc(Bi),lt(!1),dt(La),j(n.CULL_FACE),K(Xn);function j(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function gt(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Pt(U,st){return d[U]!==st?(n.bindFramebuffer(U,st),d[U]=st,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=st),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=st),!0):!1}function Tt(U,st){let ct=p,Mt=!1;if(U){ct=h.get(st),ct===void 0&&(ct=[],h.set(st,ct));const nt=U.textures;if(ct.length!==nt.length||ct[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,yt=nt.length;Z<yt;Z++)ct[Z]=n.COLOR_ATTACHMENT0+Z;ct.length=nt.length,Mt=!0}}else ct[0]!==n.BACK&&(ct[0]=n.BACK,Mt=!0);Mt&&n.drawBuffers(ct)}function Gt(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const Te={[oi]:n.FUNC_ADD,[yu]:n.FUNC_SUBTRACT,[Eu]:n.FUNC_REVERSE_SUBTRACT};Te[Tu]=n.MIN,Te[bu]=n.MAX;const P={[wu]:n.ZERO,[Au]:n.ONE,[Ru]:n.SRC_COLOR,[oo]:n.SRC_ALPHA,[Uu]:n.SRC_ALPHA_SATURATE,[Du]:n.DST_COLOR,[Pu]:n.DST_ALPHA,[Cu]:n.ONE_MINUS_SRC_COLOR,[ao]:n.ONE_MINUS_SRC_ALPHA,[Iu]:n.ONE_MINUS_DST_COLOR,[Lu]:n.ONE_MINUS_DST_ALPHA,[Nu]:n.CONSTANT_COLOR,[Fu]:n.ONE_MINUS_CONSTANT_COLOR,[Ou]:n.CONSTANT_ALPHA,[zu]:n.ONE_MINUS_CONSTANT_ALPHA};function K(U,st,ct,Mt,nt,Z,yt,Ot,le,ee){if(U===Xn){_===!0&&(gt(n.BLEND),_=!1);return}if(_===!1&&(j(n.BLEND),_=!0),U!==Su){if(U!==m||ee!==v){if((f!==oi||y!==oi)&&(n.blendEquation(n.FUNC_ADD),f=oi,y=oi),ee)switch(U){case Ni:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Da:n.blendFunc(n.ONE,n.ONE);break;case Ia:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ua:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ni:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Da:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ia:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ua:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,E=null,A=null,b=null,w.set(0,0,0),I=0,m=U,v=ee}return}nt=nt||st,Z=Z||ct,yt=yt||Mt,(st!==f||nt!==y)&&(n.blendEquationSeparate(Te[st],Te[nt]),f=st,y=nt),(ct!==M||Mt!==E||Z!==A||yt!==b)&&(n.blendFuncSeparate(P[ct],P[Mt],P[Z],P[yt]),M=ct,E=Mt,A=Z,b=yt),(Ot.equals(w)===!1||le!==I)&&(n.blendColor(Ot.r,Ot.g,Ot.b,le),w.copy(Ot),I=le),m=U,v=!1}function et(U,st){U.side===Pn?gt(n.CULL_FACE):j(n.CULL_FACE);let ct=U.side===Be;st&&(ct=!ct),lt(ct),U.blending===Ni&&U.transparent===!1?K(Xn):K(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Mt=U.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),_t(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):gt(n.SAMPLE_ALPHA_TO_COVERAGE)}function lt(U){x!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),x=U)}function dt(U){U!==xu?(j(n.CULL_FACE),U!==L&&(U===La?n.cullFace(n.BACK):U===vu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):gt(n.CULL_FACE),L=U}function Zt(U){U!==D&&(H&&n.lineWidth(U),D=U)}function _t(U,st,ct){U?(j(n.POLYGON_OFFSET_FILL),(R!==st||F!==ct)&&(n.polygonOffset(st,ct),R=st,F=ct)):gt(n.POLYGON_OFFSET_FILL)}function Nt(U){U?j(n.SCISSOR_TEST):gt(n.SCISSOR_TEST)}function te(U){U===void 0&&(U=n.TEXTURE0+O-1),Q!==U&&(n.activeTexture(U),Q=U)}function Se(U,st,ct){ct===void 0&&(Q===null?ct=n.TEXTURE0+O-1:ct=Q);let Mt=ot[ct];Mt===void 0&&(Mt={type:void 0,texture:void 0},ot[ct]=Mt),(Mt.type!==U||Mt.texture!==st)&&(Q!==ct&&(n.activeTexture(ct),Q=ct),n.bindTexture(U,st||q[U]),Mt.type=U,Mt.texture=st)}function C(){const U=ot[Q];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(U){Wt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Wt.copy(U))}function Ut(U){tt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),tt.copy(U))}function wt(U,st){let ct=l.get(st);ct===void 0&&(ct=new WeakMap,l.set(st,ct));let Mt=ct.get(U);Mt===void 0&&(Mt=n.getUniformBlockIndex(st,U.name),ct.set(U,Mt))}function ft(U,st){const Mt=l.get(st).get(U);c.get(st)!==Mt&&(n.uniformBlockBinding(st,Mt,U.__bindingPointIndex),c.set(st,Mt))}function zt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Q=null,ot={},d={},h=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,E=null,y=null,A=null,b=null,w=new Vt(0,0,0),I=0,v=!1,x=null,L=null,D=null,R=null,F=null,Wt.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:j,disable:gt,bindFramebuffer:Pt,drawBuffers:Tt,useProgram:Gt,setBlending:K,setMaterial:et,setFlipSided:lt,setCullFace:dt,setLineWidth:Zt,setPolygonOffset:_t,setScissorTest:Nt,activeTexture:te,bindTexture:Se,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:V,texImage2D:bt,texImage3D:rt,updateUBOMapping:wt,uniformBlockBinding:ft,texStorage2D:at,texStorage3D:Et,texSubImage2D:$,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:At,scissor:mt,viewport:Ut,reset:zt}}function Ig(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qt,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):cs("canvas")}function _(C,S,V){let $=1;const J=Se(C);if((J.width>V||J.height>V)&&($=V/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const X=Math.floor($*J.width),At=Math.floor($*J.height);d===void 0&&(d=g(X,At));const at=S?g(X,At):d;return at.width=X,at.height=At,at.getContext("2d").drawImage(C,0,0,X,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+At+")."),at}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){n.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(C,S,V,$,J=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=S;if(S===n.RED&&(V===n.FLOAT&&(X=n.R32F),V===n.HALF_FLOAT&&(X=n.R16F),V===n.UNSIGNED_BYTE&&(X=n.R8)),S===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(X=n.R8UI),V===n.UNSIGNED_SHORT&&(X=n.R16UI),V===n.UNSIGNED_INT&&(X=n.R32UI),V===n.BYTE&&(X=n.R8I),V===n.SHORT&&(X=n.R16I),V===n.INT&&(X=n.R32I)),S===n.RG&&(V===n.FLOAT&&(X=n.RG32F),V===n.HALF_FLOAT&&(X=n.RG16F),V===n.UNSIGNED_BYTE&&(X=n.RG8)),S===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(X=n.RG8UI),V===n.UNSIGNED_SHORT&&(X=n.RG16UI),V===n.UNSIGNED_INT&&(X=n.RG32UI),V===n.BYTE&&(X=n.RG8I),V===n.SHORT&&(X=n.RG16I),V===n.INT&&(X=n.RG32I)),S===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(X=n.RGB8UI),V===n.UNSIGNED_SHORT&&(X=n.RGB16UI),V===n.UNSIGNED_INT&&(X=n.RGB32UI),V===n.BYTE&&(X=n.RGB8I),V===n.SHORT&&(X=n.RGB16I),V===n.INT&&(X=n.RGB32I)),S===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),V===n.UNSIGNED_INT&&(X=n.RGBA32UI),V===n.BYTE&&(X=n.RGBA8I),V===n.SHORT&&(X=n.RGBA16I),V===n.INT&&(X=n.RGBA32I)),S===n.RGB&&(V===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),S===n.RGBA){const At=J?os:Jt.getTransfer($);V===n.FLOAT&&(X=n.RGBA32F),V===n.HALF_FLOAT&&(X=n.RGBA16F),V===n.UNSIGNED_BYTE&&(X=At===ae?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function y(C,S){let V;return C?S===null||S===hi||S===fr?V=n.DEPTH24_STENCIL8:S===gn?V=n.DEPTH32F_STENCIL8:S===dr&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===hi||S===fr?V=n.DEPTH_COMPONENT24:S===gn?V=n.DEPTH_COMPONENT32F:S===dr&&(V=n.DEPTH_COMPONENT16),V}function A(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Pe&&C.minFilter!==mn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function b(C){const S=C.target;S.removeEventListener("dispose",b),I(S),S.isVideoTexture&&u.delete(S)}function w(C){const S=C.target;S.removeEventListener("dispose",w),x(S)}function I(C){const S=i.get(C);if(S.__webglInit===void 0)return;const V=C.source,$=h.get(V);if($){const J=$[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&v(C),Object.keys($).length===0&&h.delete(V)}i.remove(C)}function v(C){const S=i.get(C);n.deleteTexture(S.__webglTexture);const V=C.source,$=h.get(V);delete $[S.__cacheKey],o.memory.textures--}function x(C){const S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let J=0;J<S.__webglFramebuffer[$].length;J++)n.deleteFramebuffer(S.__webglFramebuffer[$][J]);else n.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)n.deleteFramebuffer(S.__webglFramebuffer[$]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=C.textures;for(let $=0,J=V.length;$<J;$++){const X=i.get(V[$]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(V[$])}i.remove(C)}let L=0;function D(){L=0}function R(){const C=L;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),L+=1,C}function F(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function O(C,S){const V=i.get(C);if(C.isVideoTexture&&Nt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(V,C,S);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+S)}function H(C,S){const V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){q(V,C,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+S)}function Y(C,S){const V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){q(V,C,S);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+S)}function B(C,S){const V=i.get(C);if(C.version>0&&V.__version!==C.version){j(V,C,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+S)}const Q={[xo]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[vo]:n.MIRRORED_REPEAT},ot={[Pe]:n.NEAREST,[$u]:n.NEAREST_MIPMAP_NEAREST,[br]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[bs]:n.LINEAR_MIPMAP_NEAREST,[li]:n.LINEAR_MIPMAP_LINEAR},xt={[Ju]:n.NEVER,[rh]:n.ALWAYS,[Qu]:n.LESS,[fl]:n.LEQUAL,[th]:n.EQUAL,[ih]:n.GEQUAL,[eh]:n.GREATER,[nh]:n.NOTEQUAL};function Rt(C,S){if(S.type===gn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===mn||S.magFilter===bs||S.magFilter===br||S.magFilter===li||S.minFilter===mn||S.minFilter===bs||S.minFilter===br||S.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Q[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Q[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Q[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ot[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ot[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,xt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Pe||S.minFilter!==br&&S.minFilter!==li||S.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Wt(C,S){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",b));const $=S.source;let J=h.get($);J===void 0&&(J={},h.set($,J));const X=F(S);if(X!==C.__cacheKey){J[X]===void 0&&(J[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),J[X].usedTimes++;const At=J[C.__cacheKey];At!==void 0&&(J[C.__cacheKey].usedTimes--,At.usedTimes===0&&v(S)),C.__cacheKey=X,C.__webglTexture=J[X].texture}return V}function tt(C,S,V){return Math.floor(Math.floor(C/V)/S)}function Dt(C,S,V,$){const X=C.updateRanges;if(X.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,V,$,S.data);else{X.sort((rt,mt)=>rt.start-mt.start);let At=0;for(let rt=1;rt<X.length;rt++){const mt=X[At],Ut=X[rt],wt=mt.start+mt.count,ft=tt(Ut.start,S.width,4),zt=tt(mt.start,S.width,4);Ut.start<=wt+1&&ft===zt&&tt(Ut.start+Ut.count-1,S.width,4)===ft?mt.count=Math.max(mt.count,Ut.start+Ut.count-mt.start):(++At,X[At]=Ut)}X.length=At+1;const at=n.getParameter(n.UNPACK_ROW_LENGTH),Et=n.getParameter(n.UNPACK_SKIP_PIXELS),bt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let rt=0,mt=X.length;rt<mt;rt++){const Ut=X[rt],wt=Math.floor(Ut.start/4),ft=Math.ceil(Ut.count/4),zt=wt%S.width,U=Math.floor(wt/S.width),st=ft,ct=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,zt),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,zt,U,st,ct,V,$,S.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,at),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Et),n.pixelStorei(n.UNPACK_SKIP_ROWS,bt)}}function q(C,S,V){let $=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=n.TEXTURE_3D);const J=Wt(C,S),X=S.source;e.bindTexture($,C.__webglTexture,n.TEXTURE0+V);const At=i.get(X);if(X.version!==At.__version||J===!0){e.activeTexture(n.TEXTURE0+V);const at=Jt.getPrimaries(Jt.workingColorSpace),Et=S.colorSpace===Ln?null:Jt.getPrimaries(S.colorSpace),bt=S.colorSpace===Ln||at===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let rt=_(S.image,!1,r.maxTextureSize);rt=te(S,rt);const mt=s.convert(S.format,S.colorSpace),Ut=s.convert(S.type);let wt=E(S.internalFormat,mt,Ut,S.colorSpace,S.isVideoTexture);Rt($,S);let ft;const zt=S.mipmaps,U=S.isVideoTexture!==!0,st=At.__version===void 0||J===!0,ct=X.dataReady,Mt=A(S,rt);if(S.isDepthTexture)wt=y(S.format===mr,S.type),st&&(U?e.texStorage2D(n.TEXTURE_2D,1,wt,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,wt,rt.width,rt.height,0,mt,Ut,null));else if(S.isDataTexture)if(zt.length>0){U&&st&&e.texStorage2D(n.TEXTURE_2D,Mt,wt,zt[0].width,zt[0].height);for(let nt=0,Z=zt.length;nt<Z;nt++)ft=zt[nt],U?ct&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,ft.width,ft.height,mt,Ut,ft.data):e.texImage2D(n.TEXTURE_2D,nt,wt,ft.width,ft.height,0,mt,Ut,ft.data);S.generateMipmaps=!1}else U?(st&&e.texStorage2D(n.TEXTURE_2D,Mt,wt,rt.width,rt.height),ct&&Dt(S,rt,mt,Ut)):e.texImage2D(n.TEXTURE_2D,0,wt,rt.width,rt.height,0,mt,Ut,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&st&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,wt,zt[0].width,zt[0].height,rt.depth);for(let nt=0,Z=zt.length;nt<Z;nt++)if(ft=zt[nt],S.format!==hn)if(mt!==null)if(U){if(ct)if(S.layerUpdates.size>0){const yt=lc(ft.width,ft.height,S.format,S.type);for(const Ot of S.layerUpdates){const le=ft.data.subarray(Ot*yt/ft.data.BYTES_PER_ELEMENT,(Ot+1)*yt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,Ot,ft.width,ft.height,1,mt,le)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,ft.width,ft.height,rt.depth,mt,ft.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,wt,ft.width,ft.height,rt.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ct&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,ft.width,ft.height,rt.depth,mt,Ut,ft.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,wt,ft.width,ft.height,rt.depth,0,mt,Ut,ft.data)}else{U&&st&&e.texStorage2D(n.TEXTURE_2D,Mt,wt,zt[0].width,zt[0].height);for(let nt=0,Z=zt.length;nt<Z;nt++)ft=zt[nt],S.format!==hn?mt!==null?U?ct&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,ft.width,ft.height,mt,ft.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,wt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ct&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,ft.width,ft.height,mt,Ut,ft.data):e.texImage2D(n.TEXTURE_2D,nt,wt,ft.width,ft.height,0,mt,Ut,ft.data)}else if(S.isDataArrayTexture)if(U){if(st&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,wt,rt.width,rt.height,rt.depth),ct)if(S.layerUpdates.size>0){const nt=lc(rt.width,rt.height,S.format,S.type);for(const Z of S.layerUpdates){const yt=rt.data.subarray(Z*nt/rt.data.BYTES_PER_ELEMENT,(Z+1)*nt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,rt.width,rt.height,1,mt,Ut,yt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,mt,Ut,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,wt,rt.width,rt.height,rt.depth,0,mt,Ut,rt.data);else if(S.isData3DTexture)U?(st&&e.texStorage3D(n.TEXTURE_3D,Mt,wt,rt.width,rt.height,rt.depth),ct&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,mt,Ut,rt.data)):e.texImage3D(n.TEXTURE_3D,0,wt,rt.width,rt.height,rt.depth,0,mt,Ut,rt.data);else if(S.isFramebufferTexture){if(st)if(U)e.texStorage2D(n.TEXTURE_2D,Mt,wt,rt.width,rt.height);else{let nt=rt.width,Z=rt.height;for(let yt=0;yt<Mt;yt++)e.texImage2D(n.TEXTURE_2D,yt,wt,nt,Z,0,mt,Ut,null),nt>>=1,Z>>=1}}else if(zt.length>0){if(U&&st){const nt=Se(zt[0]);e.texStorage2D(n.TEXTURE_2D,Mt,wt,nt.width,nt.height)}for(let nt=0,Z=zt.length;nt<Z;nt++)ft=zt[nt],U?ct&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,mt,Ut,ft):e.texImage2D(n.TEXTURE_2D,nt,wt,mt,Ut,ft);S.generateMipmaps=!1}else if(U){if(st){const nt=Se(rt);e.texStorage2D(n.TEXTURE_2D,Mt,wt,nt.width,nt.height)}ct&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt,Ut,rt)}else e.texImage2D(n.TEXTURE_2D,0,wt,mt,Ut,rt);m(S)&&f($),At.__version=X.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function j(C,S,V){if(S.image.length!==6)return;const $=Wt(C,S),J=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+V);const X=i.get(J);if(J.version!==X.__version||$===!0){e.activeTexture(n.TEXTURE0+V);const At=Jt.getPrimaries(Jt.workingColorSpace),at=S.colorSpace===Ln?null:Jt.getPrimaries(S.colorSpace),Et=S.colorSpace===Ln||At===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const bt=S.isCompressedTexture||S.image[0].isCompressedTexture,rt=S.image[0]&&S.image[0].isDataTexture,mt=[];for(let Z=0;Z<6;Z++)!bt&&!rt?mt[Z]=_(S.image[Z],!0,r.maxCubemapSize):mt[Z]=rt?S.image[Z].image:S.image[Z],mt[Z]=te(S,mt[Z]);const Ut=mt[0],wt=s.convert(S.format,S.colorSpace),ft=s.convert(S.type),zt=E(S.internalFormat,wt,ft,S.colorSpace),U=S.isVideoTexture!==!0,st=X.__version===void 0||$===!0,ct=J.dataReady;let Mt=A(S,Ut);Rt(n.TEXTURE_CUBE_MAP,S);let nt;if(bt){U&&st&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,zt,Ut.width,Ut.height);for(let Z=0;Z<6;Z++){nt=mt[Z].mipmaps;for(let yt=0;yt<nt.length;yt++){const Ot=nt[yt];S.format!==hn?wt!==null?U?ct&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt,0,0,Ot.width,Ot.height,wt,Ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt,zt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt,0,0,Ot.width,Ot.height,wt,ft,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt,zt,Ot.width,Ot.height,0,wt,ft,Ot.data)}}}else{if(nt=S.mipmaps,U&&st){nt.length>0&&Mt++;const Z=Se(mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,zt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(rt){U?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,mt[Z].width,mt[Z].height,wt,ft,mt[Z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,zt,mt[Z].width,mt[Z].height,0,wt,ft,mt[Z].data);for(let yt=0;yt<nt.length;yt++){const le=nt[yt].image[Z].image;U?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt+1,0,0,le.width,le.height,wt,ft,le.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt+1,zt,le.width,le.height,0,wt,ft,le.data)}}else{U?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,wt,ft,mt[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,zt,wt,ft,mt[Z]);for(let yt=0;yt<nt.length;yt++){const Ot=nt[yt];U?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt+1,0,0,wt,ft,Ot.image[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt+1,zt,wt,ft,Ot.image[Z])}}}m(S)&&f(n.TEXTURE_CUBE_MAP),X.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function gt(C,S,V,$,J,X){const At=s.convert(V.format,V.colorSpace),at=s.convert(V.type),Et=E(V.internalFormat,At,at,V.colorSpace),bt=i.get(S),rt=i.get(V);if(rt.__renderTarget=S,!bt.__hasExternalTextures){const mt=Math.max(1,S.width>>X),Ut=Math.max(1,S.height>>X);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,X,Et,mt,Ut,S.depth,0,At,at,null):e.texImage2D(J,X,Et,mt,Ut,0,At,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),_t(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,J,rt.__webglTexture,0,Zt(S)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,J,rt.__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Pt(C,S,V){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){const $=S.depthTexture,J=$&&$.isDepthTexture?$.type:null,X=y(S.stencilBuffer,J),At=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=Zt(S);_t(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,X,S.width,S.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,X,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,X,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,At,n.RENDERBUFFER,C)}else{const $=S.textures;for(let J=0;J<$.length;J++){const X=$[J],At=s.convert(X.format,X.colorSpace),at=s.convert(X.type),Et=E(X.internalFormat,At,at,X.colorSpace),bt=Zt(S);V&&_t(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,Et,S.width,S.height):_t(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt,Et,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Et,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Tt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);const J=$.__webglTexture,X=Zt(S);if(S.depthTexture.format===pr)_t(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(S.depthTexture.format===mr)_t(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Gt(C){const S=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=$}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const $=C.texture.mipmaps;$&&$.length>0?Tt(S.__webglFramebuffer[0],C):Tt(S.__webglFramebuffer,C)}else if(V){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=n.createRenderbuffer(),Pt(S.__webglDepthbuffer[$],C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,X)}}else{const $=C.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Pt(S.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,X)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(C,S,V){const $=i.get(C);S!==void 0&&gt($.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Gt(C)}function P(C){const S=C.texture,V=i.get(C),$=i.get(S);C.addEventListener("dispose",w);const J=C.textures,X=C.isWebGLCubeRenderTarget===!0,At=J.length>1;if(At||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=S.version,o.memory.textures++),X){V.__webglFramebuffer=[];for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[at]=[];for(let Et=0;Et<S.mipmaps.length;Et++)V.__webglFramebuffer[at][Et]=n.createFramebuffer()}else V.__webglFramebuffer[at]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let at=0;at<S.mipmaps.length;at++)V.__webglFramebuffer[at]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(At)for(let at=0,Et=J.length;at<Et;at++){const bt=i.get(J[at]);bt.__webglTexture===void 0&&(bt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&_t(C)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const Et=J[at];V.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[at]);const bt=s.convert(Et.format,Et.colorSpace),rt=s.convert(Et.type),mt=E(Et.internalFormat,bt,rt,Et.colorSpace,C.isXRRenderTarget===!0),Ut=Zt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,mt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,V.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Pt(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Rt(n.TEXTURE_CUBE_MAP,S);for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)gt(V.__webglFramebuffer[at][Et],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et);else gt(V.__webglFramebuffer[at],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(S)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let at=0,Et=J.length;at<Et;at++){const bt=J[at],rt=i.get(bt);let mt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(mt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(mt,rt.__webglTexture),Rt(mt,bt),gt(V.__webglFramebuffer,C,bt,n.COLOR_ATTACHMENT0+at,mt,0),m(bt)&&f(mt)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(at=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,$.__webglTexture),Rt(at,S),S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)gt(V.__webglFramebuffer[Et],C,S,n.COLOR_ATTACHMENT0,at,Et);else gt(V.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,at,0);m(S)&&f(at),e.unbindTexture()}C.depthBuffer&&Gt(C)}function K(C){const S=C.textures;for(let V=0,$=S.length;V<$;V++){const J=S[V];if(m(J)){const X=M(C),At=i.get(J).__webglTexture;e.bindTexture(X,At),f(X),e.unbindTexture()}}}const et=[],lt=[];function dt(C){if(C.samples>0){if(_t(C)===!1){const S=C.textures,V=C.width,$=C.height;let J=n.COLOR_BUFFER_BIT;const X=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=i.get(C),at=S.length>1;if(at)for(let bt=0;bt<S.length;bt++)e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const Et=C.texture.mipmaps;Et&&Et.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let bt=0;bt<S.length;bt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);const rt=i.get(S[bt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,rt,0)}n.blitFramebuffer(0,0,V,$,0,0,V,$,J,n.NEAREST),c===!0&&(et.length=0,lt.length=0,et.push(n.COLOR_ATTACHMENT0+bt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(et.push(X),lt.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,lt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let bt=0;bt<S.length;bt++){e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);const rt=i.get(S[bt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Zt(C){return Math.min(r.maxSamples,C.samples)}function _t(C){const S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Nt(C){const S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function te(C,S){const V=C.colorSpace,$=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Vi&&V!==Ln&&(Jt.getTransfer(V)===ae?($!==hn||J!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function Se(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=R,this.resetTextureUnits=D,this.setTexture2D=O,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=B,this.rebindTextures=Te,this.setupRenderTarget=P,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=_t}function Ug(n,t){function e(i,r=Ln){let s;const o=Jt.getTransfer(r);if(i===xn)return n.UNSIGNED_BYTE;if(i===ca)return n.UNSIGNED_SHORT_4_4_4_4;if(i===la)return n.UNSIGNED_SHORT_5_5_5_1;if(i===al)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===sl)return n.BYTE;if(i===ol)return n.SHORT;if(i===dr)return n.UNSIGNED_SHORT;if(i===aa)return n.INT;if(i===hi)return n.UNSIGNED_INT;if(i===gn)return n.FLOAT;if(i===vr)return n.HALF_FLOAT;if(i===ll)return n.ALPHA;if(i===ul)return n.RGB;if(i===hn)return n.RGBA;if(i===pr)return n.DEPTH_COMPONENT;if(i===mr)return n.DEPTH_STENCIL;if(i===ds)return n.RED;if(i===ua)return n.RED_INTEGER;if(i===hl)return n.RG;if(i===ha)return n.RG_INTEGER;if(i===da)return n.RGBA_INTEGER;if(i===Jr||i===Qr||i===ts||i===es)if(o===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Jr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Jr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ts)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===es)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mo||i===So||i===yo||i===Eo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Mo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===So)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Eo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===To||i===bo||i===wo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===To||i===bo)return o===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===wo)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ao||i===Ro||i===Co||i===Po||i===Lo||i===Do||i===Io||i===Uo||i===No||i===Fo||i===Oo||i===zo||i===Bo||i===ko)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ao)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ro)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Co)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Po)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lo)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Do)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Io)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uo)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===No)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fo)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oo)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zo)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bo)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ko)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ho||i===Vo||i===Go)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ho)return o===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Go)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wo||i===Xo||i===qo||i===Yo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fg=`
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

}`;class Og{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new bl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new $n({vertexShader:Ng,fragmentShader:Fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new yr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zg extends Wi{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Og,f={},M=e.getContextAttributes();let E=null,y=null;const A=[],b=[],w=new qt;let I=null;const v=new rn;v.viewport=new ve;const x=new rn;x.viewport=new ve;const L=[v,x],D=new rd;let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=A[q];return j===void 0&&(j=new qs,A[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=A[q];return j===void 0&&(j=new qs,A[q]=j),j.getGripSpace()},this.getHand=function(q){let j=A[q];return j===void 0&&(j=new qs,A[q]=j),j.getHandSpace()};function O(q){const j=b.indexOf(q.inputSource);if(j===-1)return;const gt=A[j];gt!==void 0&&(gt.update(q.inputSource,q.frame,l||o),gt.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",Y);for(let q=0;q<A.length;q++){const j=b[q];j!==null&&(b[q]=null,A[q].disconnect(j))}R=null,F=null,m.reset();for(const q in f)delete f[q];t.setRenderTarget(E),p=null,h=null,d=null,r=null,y=null,Dt.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(E=t.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",H),r.addEventListener("inputsourceschange",Y),M.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Pt=null,Tt=null;M.depth&&(Tt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=M.stencil?mr:pr,Pt=M.stencil?fr:hi);const Gt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Gt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Yn(h.textureWidth,h.textureHeight,{format:hn,type:xn,depthTexture:new Tl(h.textureWidth,h.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const gt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,gt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Yn(p.framebufferWidth,p.framebufferHeight,{format:hn,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Dt.setContext(r),Dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(q){for(let j=0;j<q.removed.length;j++){const gt=q.removed[j],Pt=b.indexOf(gt);Pt>=0&&(b[Pt]=null,A[Pt].disconnect(gt))}for(let j=0;j<q.added.length;j++){const gt=q.added[j];let Pt=b.indexOf(gt);if(Pt===-1){for(let Gt=0;Gt<A.length;Gt++)if(Gt>=b.length){b.push(gt),Pt=Gt;break}else if(b[Gt]===null){b[Gt]=gt,Pt=Gt;break}if(Pt===-1)break}const Tt=A[Pt];Tt&&Tt.connect(gt)}}const B=new N,Q=new N;function ot(q,j,gt){B.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(gt.matrixWorld);const Pt=B.distanceTo(Q),Tt=j.projectionMatrix.elements,Gt=gt.projectionMatrix.elements,Te=Tt[14]/(Tt[10]-1),P=Tt[14]/(Tt[10]+1),K=(Tt[9]+1)/Tt[5],et=(Tt[9]-1)/Tt[5],lt=(Tt[8]-1)/Tt[0],dt=(Gt[8]+1)/Gt[0],Zt=Te*lt,_t=Te*dt,Nt=Pt/(-lt+dt),te=Nt*-lt;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(te),q.translateZ(Nt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Tt[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Se=Te+Nt,C=P+Nt,S=Zt-te,V=_t+(Pt-te),$=K*P/C*Se,J=et*P/C*Se;q.projectionMatrix.makePerspective(S,V,$,J,Se,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function xt(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let j=q.near,gt=q.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(gt=m.depthFar)),D.near=x.near=v.near=j,D.far=x.far=v.far=gt,(R!==D.near||F!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),R=D.near,F=D.far),D.layers.mask=q.layers.mask|6,v.layers.mask=D.layers.mask&3,x.layers.mask=D.layers.mask&5;const Pt=q.parent,Tt=D.cameras;xt(D,Pt);for(let Gt=0;Gt<Tt.length;Gt++)xt(Tt[Gt],Pt);Tt.length===2?ot(D,v,x):D.projectionMatrix.copy(v.projectionMatrix),Rt(q,D,Pt)};function Rt(q,j,gt){gt===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(gt.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=gr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(q){c=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(q){return f[q]};let Wt=null;function tt(q,j){if(u=j.getViewerPose(l||o),g=j,u!==null){const gt=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Pt=!1;gt.length!==D.cameras.length&&(D.cameras.length=0,Pt=!0);for(let P=0;P<gt.length;P++){const K=gt[P];let et=null;if(p!==null)et=p.getViewport(K);else{const dt=d.getViewSubImage(h,K);et=dt.viewport,P===0&&(t.setRenderTargetTextures(y,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(y))}let lt=L[P];lt===void 0&&(lt=new rn,lt.layers.enable(P),lt.viewport=new ve,L[P]=lt),lt.matrix.fromArray(K.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(K.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(et.x,et.y,et.width,et.height),P===0&&(D.matrix.copy(lt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Pt===!0&&D.cameras.push(lt)}const Tt=r.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const P=d.getDepthInformation(gt[0]);P&&P.isValid&&P.texture&&m.init(P,r.renderState)}if(Tt&&Tt.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let P=0;P<gt.length;P++){const K=gt[P].camera;if(K){let et=f[K];et||(et=new bl,f[K]=et);const lt=d.getCameraImage(K);et.sourceTexture=lt}}}}for(let gt=0;gt<A.length;gt++){const Pt=b[gt],Tt=A[gt];Pt!==null&&Tt!==void 0&&Tt.update(Pt,j,l||o)}Wt&&Wt(q,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const Dt=new Al;Dt.setAnimationLoop(tt),this.setAnimationLoop=function(q){Wt=q},this.dispose=function(){}}}const ni=new Fn,Bg=new ue;function kg(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Ml(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,M,E,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,M,E):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Be&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Be&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=t.get(f),E=M.envMap,y=M.envMapRotation;E&&(m.envMap.value=E,ni.copy(y),ni.x*=-1,ni.y*=-1,ni.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),m.envMapRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(ni)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Be&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Hg(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,E){const y=E.program;i.uniformBlockBinding(M,y)}function l(M,E){let y=r[M.id];y===void 0&&(g(M),y=u(M),r[M.id]=y,M.addEventListener("dispose",m));const A=E.program;i.updateUBOMapping(M,A);const b=t.render.frame;s[M.id]!==b&&(h(M),s[M.id]=b)}function u(M){const E=d();M.__bindingPointIndex=E;const y=n.createBuffer(),A=M.__size,b=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const E=r[M.id],y=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let b=0,w=y.length;b<w;b++){const I=Array.isArray(y[b])?y[b]:[y[b]];for(let v=0,x=I.length;v<x;v++){const L=I[v];if(p(L,b,v,A)===!0){const D=L.__offset,R=Array.isArray(L.value)?L.value:[L.value];let F=0;for(let O=0;O<R.length;O++){const H=R[O],Y=_(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,D+F,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,F),F+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,E,y,A){const b=M.value,w=E+"_"+y;if(A[w]===void 0)return typeof b=="number"||typeof b=="boolean"?A[w]=b:A[w]=b.clone(),!0;{const I=A[w];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return A[w]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function g(M){const E=M.uniforms;let y=0;const A=16;for(let w=0,I=E.length;w<I;w++){const v=Array.isArray(E[w])?E[w]:[E[w]];for(let x=0,L=v.length;x<L;x++){const D=v[x],R=Array.isArray(D.value)?D.value:[D.value];for(let F=0,O=R.length;F<O;F++){const H=R[F],Y=_(H),B=y%A,Q=B%Y.boundary,ot=B+Q;y+=Q,ot!==0&&A-ot<Y.storage&&(y+=A-ot),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=Y.storage}}}const b=y%A;return b>0&&(y+=A-b),M.__size=y,M.__cache={},this}function _(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),E}function m(M){const E=M.target;E.removeEventListener("dispose",m);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function f(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}class Vg{constructor(t={}){const{canvas:e=yh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const M=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let A=!1;this._outputColorSpace=qe;let b=0,w=0,I=null,v=-1,x=null;const L=new ve,D=new ve;let R=null;const F=new Vt(0);let O=0,H=e.width,Y=e.height,B=1,Q=null,ot=null;const xt=new ve(0,0,H,Y),Rt=new ve(0,0,H,Y);let Wt=!1;const tt=new ga;let Dt=!1,q=!1;const j=new ue,gt=new N,Pt=new ve,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Te(){return I===null?B:1}let P=i;function K(T,z){return e.getContext(T,z)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oa}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),P===null){const z="webgl2";if(P=K(z,T),P===null)throw K(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let et,lt,dt,Zt,_t,Nt,te,Se,C,S,V,$,J,X,At,at,Et,bt,rt,mt,Ut,wt,ft,zt;function U(){et=new Jp(P),et.init(),wt=new Ug(P,et),lt=new Xp(P,et,t,wt),dt=new Dg(P,et),lt.reversedDepthBuffer&&h&&dt.buffers.depth.setReversed(!0),Zt=new em(P),_t=new vg,Nt=new Ig(P,et,dt,_t,lt,wt,Zt),te=new Yp(y),Se=new jp(y),C=new od(P),ft=new Gp(P,C),S=new Qp(P,C,Zt,ft),V=new im(P,S,C,Zt),rt=new nm(P,lt,Nt),at=new qp(_t),$=new xg(y,te,Se,et,lt,ft,at),J=new kg(y,_t),X=new Sg,At=new Ag(et),bt=new Vp(y,te,Se,dt,V,p,c),Et=new Pg(y,V,lt),zt=new Hg(P,Zt,lt,dt),mt=new Wp(P,et,Zt),Ut=new tm(P,et,Zt),Zt.programs=$.programs,y.capabilities=lt,y.extensions=et,y.properties=_t,y.renderLists=X,y.shadowMap=Et,y.state=dt,y.info=Zt}U();const st=new zg(y,P);this.xr=st,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=et.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=et.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(H,Y,!1))},this.getSize=function(T){return T.set(H,Y)},this.setSize=function(T,z,G=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,Y=z,e.width=Math.floor(T*B),e.height=Math.floor(z*B),G===!0&&(e.style.width=T+"px",e.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(H*B,Y*B).floor()},this.setDrawingBufferSize=function(T,z,G){H=T,Y=z,B=G,e.width=Math.floor(T*G),e.height=Math.floor(z*G),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(xt)},this.setViewport=function(T,z,G,W){T.isVector4?xt.set(T.x,T.y,T.z,T.w):xt.set(T,z,G,W),dt.viewport(L.copy(xt).multiplyScalar(B).round())},this.getScissor=function(T){return T.copy(Rt)},this.setScissor=function(T,z,G,W){T.isVector4?Rt.set(T.x,T.y,T.z,T.w):Rt.set(T,z,G,W),dt.scissor(D.copy(Rt).multiplyScalar(B).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(T){dt.setScissorTest(Wt=T)},this.setOpaqueSort=function(T){Q=T},this.setTransparentSort=function(T){ot=T},this.getClearColor=function(T){return T.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,G=!0){let W=0;if(T){let k=!1;if(I!==null){const it=I.texture.format;k=it===da||it===ha||it===ua}if(k){const it=I.texture.type,pt=it===xn||it===hi||it===dr||it===fr||it===ca||it===la,St=bt.getClearColor(),vt=bt.getClearAlpha(),It=St.r,Ft=St.g,Ct=St.b;pt?(g[0]=It,g[1]=Ft,g[2]=Ct,g[3]=vt,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=It,_[1]=Ft,_[2]=Ct,_[3]=vt,P.clearBufferiv(P.COLOR,0,_))}else W|=P.COLOR_BUFFER_BIT}z&&(W|=P.DEPTH_BUFFER_BIT),G&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),bt.dispose(),X.dispose(),At.dispose(),_t.dispose(),te.dispose(),Se.dispose(),V.dispose(),ft.dispose(),zt.dispose(),$.dispose(),st.dispose(),st.removeEventListener("sessionstart",dn),st.removeEventListener("sessionend",ba),Kn.stop()};function ct(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=Zt.autoReset,z=Et.enabled,G=Et.autoUpdate,W=Et.needsUpdate,k=Et.type;U(),Zt.autoReset=T,Et.enabled=z,Et.autoUpdate=G,Et.needsUpdate=W,Et.type=k}function nt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Z(T){const z=T.target;z.removeEventListener("dispose",Z),yt(z)}function yt(T){Ot(T),_t.remove(T)}function Ot(T){const z=_t.get(T).programs;z!==void 0&&(z.forEach(function(G){$.releaseProgram(G)}),T.isShaderMaterial&&$.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,G,W,k,it){z===null&&(z=Tt);const pt=k.isMesh&&k.matrixWorld.determinant()<0,St=du(T,z,G,W,k);dt.setMaterial(W,pt);let vt=G.index,It=1;if(W.wireframe===!0){if(vt=S.getWireframeAttribute(G),vt===void 0)return;It=2}const Ft=G.drawRange,Ct=G.attributes.position;let Yt=Ft.start*It,oe=(Ft.start+Ft.count)*It;it!==null&&(Yt=Math.max(Yt,it.start*It),oe=Math.min(oe,(it.start+it.count)*It)),vt!==null?(Yt=Math.max(Yt,0),oe=Math.min(oe,vt.count)):Ct!=null&&(Yt=Math.max(Yt,0),oe=Math.min(oe,Ct.count));const xe=oe-Yt;if(xe<0||xe===1/0)return;ft.setup(k,W,St,G,vt);let he,ce=mt;if(vt!==null&&(he=C.get(vt),ce=Ut,ce.setIndex(he)),k.isMesh)W.wireframe===!0?(dt.setLineWidth(W.wireframeLinewidth*Te()),ce.setMode(P.LINES)):ce.setMode(P.TRIANGLES);else if(k.isLine){let Lt=W.linewidth;Lt===void 0&&(Lt=1),dt.setLineWidth(Lt*Te()),k.isLineSegments?ce.setMode(P.LINES):k.isLineLoop?ce.setMode(P.LINE_LOOP):ce.setMode(P.LINE_STRIP)}else k.isPoints?ce.setMode(P.POINTS):k.isSprite&&ce.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)_r("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ce.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Lt=k._multiDrawStarts,me=k._multiDrawCounts,jt=k._multiDrawCount,Ke=vt?C.get(vt).bytesPerElement:1,mi=_t.get(W).currentProgram.getUniforms();for(let Ze=0;Ze<jt;Ze++)mi.setValue(P,"_gl_DrawID",Ze),ce.render(Lt[Ze]/Ke,me[Ze])}else if(k.isInstancedMesh)ce.renderInstances(Yt,xe,k.count);else if(G.isInstancedBufferGeometry){const Lt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,me=Math.min(G.instanceCount,Lt);ce.renderInstances(Yt,xe,me)}else ce.render(Yt,xe)};function le(T,z,G){T.transparent===!0&&T.side===Pn&&T.forceSinglePass===!1?(T.side=Be,T.needsUpdate=!0,Tr(T,z,G),T.side=qn,T.needsUpdate=!0,Tr(T,z,G),T.side=Pn):Tr(T,z,G)}this.compile=function(T,z,G=null){G===null&&(G=T),f=At.get(G),f.init(z),E.push(f),G.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),T!==G&&T.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();const W=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const it=k.material;if(it)if(Array.isArray(it))for(let pt=0;pt<it.length;pt++){const St=it[pt];le(St,G,k),W.add(St)}else le(it,G,k),W.add(it)}),f=E.pop(),W},this.compileAsync=function(T,z,G=null){const W=this.compile(T,z,G);return new Promise(k=>{function it(){if(W.forEach(function(pt){_t.get(pt).currentProgram.isReady()&&W.delete(pt)}),W.size===0){k(T);return}setTimeout(it,10)}et.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let ee=null;function Mn(T){ee&&ee(T)}function dn(){Kn.stop()}function ba(){Kn.start()}const Kn=new Al;Kn.setAnimationLoop(Mn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(T){ee=T,st.setAnimationLoop(T),T===null?Kn.stop():Kn.start()},st.addEventListener("sessionstart",dn),st.addEventListener("sessionend",ba),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(z),z=st.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,z,I),f=At.get(T,E.length),f.init(z),E.push(f),j.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),tt.setFromProjectionMatrix(j,_n,z.reversedDepth),q=this.localClippingEnabled,Dt=at.init(this.clippingPlanes,q),m=X.get(T,M.length),m.init(),M.push(m),st.enabled===!0&&st.isPresenting===!0){const it=y.xr.getDepthSensingMesh();it!==null&&Es(it,z,-1/0,y.sortObjects)}Es(T,z,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Q,ot),Gt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Gt&&bt.addToRenderList(m,T),this.info.render.frame++,Dt===!0&&at.beginShadows();const G=f.state.shadowsArray;Et.render(G,T,z),Dt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,k=m.transmissive;if(f.setupLights(),z.isArrayCamera){const it=z.cameras;if(k.length>0)for(let pt=0,St=it.length;pt<St;pt++){const vt=it[pt];Aa(W,k,T,vt)}Gt&&bt.render(T);for(let pt=0,St=it.length;pt<St;pt++){const vt=it[pt];wa(m,T,vt,vt.viewport)}}else k.length>0&&Aa(W,k,T,z),Gt&&bt.render(T),wa(m,T,z);I!==null&&w===0&&(Nt.updateMultisampleRenderTarget(I),Nt.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(y,T,z),ft.resetDefaultState(),v=-1,x=null,E.pop(),E.length>0?(f=E[E.length-1],Dt===!0&&at.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Es(T,z,G,W){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||tt.intersectsSprite(T)){W&&Pt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(j);const pt=V.update(T),St=T.material;St.visible&&m.push(T,pt,St,G,Pt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||tt.intersectsObject(T))){const pt=V.update(T),St=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Pt.copy(T.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Pt.copy(pt.boundingSphere.center)),Pt.applyMatrix4(T.matrixWorld).applyMatrix4(j)),Array.isArray(St)){const vt=pt.groups;for(let It=0,Ft=vt.length;It<Ft;It++){const Ct=vt[It],Yt=St[Ct.materialIndex];Yt&&Yt.visible&&m.push(T,pt,Yt,G,Pt.z,Ct)}}else St.visible&&m.push(T,pt,St,G,Pt.z,null)}}const it=T.children;for(let pt=0,St=it.length;pt<St;pt++)Es(it[pt],z,G,W)}function wa(T,z,G,W){const k=T.opaque,it=T.transmissive,pt=T.transparent;f.setupLightsView(G),Dt===!0&&at.setGlobalState(y.clippingPlanes,G),W&&dt.viewport(L.copy(W)),k.length>0&&Er(k,z,G),it.length>0&&Er(it,z,G),pt.length>0&&Er(pt,z,G),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Aa(T,z,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new Yn(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?vr:xn,minFilter:li,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const it=f.state.transmissionRenderTarget[W.id],pt=W.viewport||L;it.setSize(pt.z*y.transmissionResolutionScale,pt.w*y.transmissionResolutionScale);const St=y.getRenderTarget(),vt=y.getActiveCubeFace(),It=y.getActiveMipmapLevel();y.setRenderTarget(it),y.getClearColor(F),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear(),Gt&&bt.render(G);const Ft=y.toneMapping;y.toneMapping=Un;const Ct=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),Dt===!0&&at.setGlobalState(y.clippingPlanes,W),Er(T,G,W),Nt.updateMultisampleRenderTarget(it),Nt.updateRenderTargetMipmap(it),et.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let oe=0,xe=z.length;oe<xe;oe++){const he=z[oe],ce=he.object,Lt=he.geometry,me=he.material,jt=he.group;if(me.side===Pn&&ce.layers.test(W.layers)){const Ke=me.side;me.side=Be,me.needsUpdate=!0,Ra(ce,G,W,Lt,me,jt),me.side=Ke,me.needsUpdate=!0,Yt=!0}}Yt===!0&&(Nt.updateMultisampleRenderTarget(it),Nt.updateRenderTargetMipmap(it))}y.setRenderTarget(St,vt,It),y.setClearColor(F,O),Ct!==void 0&&(W.viewport=Ct),y.toneMapping=Ft}function Er(T,z,G){const W=z.isScene===!0?z.overrideMaterial:null;for(let k=0,it=T.length;k<it;k++){const pt=T[k],St=pt.object,vt=pt.geometry,It=pt.group;let Ft=pt.material;Ft.allowOverride===!0&&W!==null&&(Ft=W),St.layers.test(G.layers)&&Ra(St,z,G,vt,Ft,It)}}function Ra(T,z,G,W,k,it){T.onBeforeRender(y,z,G,W,k,it),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(y,z,G,W,T,it),k.transparent===!0&&k.side===Pn&&k.forceSinglePass===!1?(k.side=Be,k.needsUpdate=!0,y.renderBufferDirect(G,z,W,k,T,it),k.side=qn,k.needsUpdate=!0,y.renderBufferDirect(G,z,W,k,T,it),k.side=Pn):y.renderBufferDirect(G,z,W,k,T,it),T.onAfterRender(y,z,G,W,k,it)}function Tr(T,z,G){z.isScene!==!0&&(z=Tt);const W=_t.get(T),k=f.state.lights,it=f.state.shadowsArray,pt=k.state.version,St=$.getParameters(T,k.state,it,z,G),vt=$.getProgramCacheKey(St);let It=W.programs;W.environment=T.isMeshStandardMaterial?z.environment:null,W.fog=z.fog,W.envMap=(T.isMeshStandardMaterial?Se:te).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,It===void 0&&(T.addEventListener("dispose",Z),It=new Map,W.programs=It);let Ft=It.get(vt);if(Ft!==void 0){if(W.currentProgram===Ft&&W.lightsStateVersion===pt)return Pa(T,St),Ft}else St.uniforms=$.getUniforms(T),T.onBeforeCompile(St,y),Ft=$.acquireProgram(St,vt),It.set(vt,Ft),W.uniforms=St.uniforms;const Ct=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ct.clippingPlanes=at.uniform),Pa(T,St),W.needsLights=pu(T),W.lightsStateVersion=pt,W.needsLights&&(Ct.ambientLightColor.value=k.state.ambient,Ct.lightProbe.value=k.state.probe,Ct.directionalLights.value=k.state.directional,Ct.directionalLightShadows.value=k.state.directionalShadow,Ct.spotLights.value=k.state.spot,Ct.spotLightShadows.value=k.state.spotShadow,Ct.rectAreaLights.value=k.state.rectArea,Ct.ltc_1.value=k.state.rectAreaLTC1,Ct.ltc_2.value=k.state.rectAreaLTC2,Ct.pointLights.value=k.state.point,Ct.pointLightShadows.value=k.state.pointShadow,Ct.hemisphereLights.value=k.state.hemi,Ct.directionalShadowMap.value=k.state.directionalShadowMap,Ct.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ct.spotShadowMap.value=k.state.spotShadowMap,Ct.spotLightMatrix.value=k.state.spotLightMatrix,Ct.spotLightMap.value=k.state.spotLightMap,Ct.pointShadowMap.value=k.state.pointShadowMap,Ct.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Ft,W.uniformsList=null,Ft}function Ca(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=ns.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Pa(T,z){const G=_t.get(T);G.outputColorSpace=z.outputColorSpace,G.batching=z.batching,G.batchingColor=z.batchingColor,G.instancing=z.instancing,G.instancingColor=z.instancingColor,G.instancingMorph=z.instancingMorph,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function du(T,z,G,W,k){z.isScene!==!0&&(z=Tt),Nt.resetTextureUnits();const it=z.fog,pt=W.isMeshStandardMaterial?z.environment:null,St=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Vi,vt=(W.isMeshStandardMaterial?Se:te).get(W.envMap||pt),It=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ft=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ct=!!G.morphAttributes.position,Yt=!!G.morphAttributes.normal,oe=!!G.morphAttributes.color;let xe=Un;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(xe=y.toneMapping);const he=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ce=he!==void 0?he.length:0,Lt=_t.get(W),me=f.state.lights;if(Dt===!0&&(q===!0||T!==x)){const Fe=T===x&&W.id===v;at.setState(W,T,Fe)}let jt=!1;W.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==me.state.version||Lt.outputColorSpace!==St||k.isBatchedMesh&&Lt.batching===!1||!k.isBatchedMesh&&Lt.batching===!0||k.isBatchedMesh&&Lt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Lt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Lt.instancing===!1||!k.isInstancedMesh&&Lt.instancing===!0||k.isSkinnedMesh&&Lt.skinning===!1||!k.isSkinnedMesh&&Lt.skinning===!0||k.isInstancedMesh&&Lt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Lt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Lt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Lt.instancingMorph===!1&&k.morphTexture!==null||Lt.envMap!==vt||W.fog===!0&&Lt.fog!==it||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==at.numPlanes||Lt.numIntersection!==at.numIntersection)||Lt.vertexAlphas!==It||Lt.vertexTangents!==Ft||Lt.morphTargets!==Ct||Lt.morphNormals!==Yt||Lt.morphColors!==oe||Lt.toneMapping!==xe||Lt.morphTargetsCount!==ce)&&(jt=!0):(jt=!0,Lt.__version=W.version);let Ke=Lt.currentProgram;jt===!0&&(Ke=Tr(W,z,k));let mi=!1,Ze=!1,Zi=!1;const ge=Ke.getUniforms(),Qe=Lt.uniforms;if(dt.useProgram(Ke.program)&&(mi=!0,Ze=!0,Zi=!0),W.id!==v&&(v=W.id,Ze=!0),mi||x!==T){dt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ge.setValue(P,"projectionMatrix",T.projectionMatrix),ge.setValue(P,"viewMatrix",T.matrixWorldInverse);const Ge=ge.map.cameraPosition;Ge!==void 0&&Ge.setValue(P,gt.setFromMatrixPosition(T.matrixWorld)),lt.logarithmicDepthBuffer&&ge.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ge.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,Ze=!0,Zi=!0)}if(k.isSkinnedMesh){ge.setOptional(P,k,"bindMatrix"),ge.setOptional(P,k,"bindMatrixInverse");const Fe=k.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),ge.setValue(P,"boneTexture",Fe.boneTexture,Nt))}k.isBatchedMesh&&(ge.setOptional(P,k,"batchingTexture"),ge.setValue(P,"batchingTexture",k._matricesTexture,Nt),ge.setOptional(P,k,"batchingIdTexture"),ge.setValue(P,"batchingIdTexture",k._indirectTexture,Nt),ge.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&ge.setValue(P,"batchingColorTexture",k._colorsTexture,Nt));const tn=G.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&rt.update(k,G,Ke),(Ze||Lt.receiveShadow!==k.receiveShadow)&&(Lt.receiveShadow=k.receiveShadow,ge.setValue(P,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Qe.envMap.value=vt,Qe.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&z.environment!==null&&(Qe.envMapIntensity.value=z.environmentIntensity),Ze&&(ge.setValue(P,"toneMappingExposure",y.toneMappingExposure),Lt.needsLights&&fu(Qe,Zi),it&&W.fog===!0&&J.refreshFogUniforms(Qe,it),J.refreshMaterialUniforms(Qe,W,B,Y,f.state.transmissionRenderTarget[T.id]),ns.upload(P,Ca(Lt),Qe,Nt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ns.upload(P,Ca(Lt),Qe,Nt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ge.setValue(P,"center",k.center),ge.setValue(P,"modelViewMatrix",k.modelViewMatrix),ge.setValue(P,"normalMatrix",k.normalMatrix),ge.setValue(P,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Fe=W.uniformsGroups;for(let Ge=0,Ts=Fe.length;Ge<Ts;Ge++){const Zn=Fe[Ge];zt.update(Zn,Ke),zt.bind(Zn,Ke)}}return Ke}function fu(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function pu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,z,G){const W=_t.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),_t.get(T.texture).__webglTexture=z,_t.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const G=_t.get(T);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0};const mu=P.createFramebuffer();this.setRenderTarget=function(T,z=0,G=0){I=T,b=z,w=G;let W=!0,k=null,it=!1,pt=!1;if(T){const vt=_t.get(T);if(vt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(P.FRAMEBUFFER,null),W=!1;else if(vt.__webglFramebuffer===void 0)Nt.setupRenderTarget(T);else if(vt.__hasExternalTextures)Nt.rebindTextures(T,_t.get(T.texture).__webglTexture,_t.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ct=T.depthTexture;if(vt.__boundDepthTexture!==Ct){if(Ct!==null&&_t.has(Ct)&&(T.width!==Ct.image.width||T.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(T)}}const It=T.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(pt=!0);const Ft=_t.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ft[z])?k=Ft[z][G]:k=Ft[z],it=!0):T.samples>0&&Nt.useMultisampledRTT(T)===!1?k=_t.get(T).__webglMultisampledFramebuffer:Array.isArray(Ft)?k=Ft[G]:k=Ft,L.copy(T.viewport),D.copy(T.scissor),R=T.scissorTest}else L.copy(xt).multiplyScalar(B).floor(),D.copy(Rt).multiplyScalar(B).floor(),R=Wt;if(G!==0&&(k=mu),dt.bindFramebuffer(P.FRAMEBUFFER,k)&&W&&dt.drawBuffers(T,k),dt.viewport(L),dt.scissor(D),dt.setScissorTest(R),it){const vt=_t.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+z,vt.__webglTexture,G)}else if(pt){const vt=z;for(let It=0;It<T.textures.length;It++){const Ft=_t.get(T.textures[It]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+It,Ft.__webglTexture,G,vt)}}else if(T!==null&&G!==0){const vt=_t.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,vt.__webglTexture,G)}v=-1},this.readRenderTargetPixels=function(T,z,G,W,k,it,pt,St=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=_t.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pt!==void 0&&(vt=vt[pt]),vt){dt.bindFramebuffer(P.FRAMEBUFFER,vt);try{const It=T.textures[St],Ft=It.format,Ct=It.type;if(!lt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-W&&G>=0&&G<=T.height-k&&(T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+St),P.readPixels(z,G,W,k,wt.convert(Ft),wt.convert(Ct),it))}finally{const It=I!==null?_t.get(I).__webglFramebuffer:null;dt.bindFramebuffer(P.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(T,z,G,W,k,it,pt,St=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=_t.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pt!==void 0&&(vt=vt[pt]),vt)if(z>=0&&z<=T.width-W&&G>=0&&G<=T.height-k){dt.bindFramebuffer(P.FRAMEBUFFER,vt);const It=T.textures[St],Ft=It.format,Ct=It.type;if(!lt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Yt),P.bufferData(P.PIXEL_PACK_BUFFER,it.byteLength,P.STREAM_READ),T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+St),P.readPixels(z,G,W,k,wt.convert(Ft),wt.convert(Ct),0);const oe=I!==null?_t.get(I).__webglFramebuffer:null;dt.bindFramebuffer(P.FRAMEBUFFER,oe);const xe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Eh(P,xe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Yt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,it),P.deleteBuffer(Yt),P.deleteSync(xe),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,G=0){const W=Math.pow(2,-G),k=Math.floor(T.image.width*W),it=Math.floor(T.image.height*W),pt=z!==null?z.x:0,St=z!==null?z.y:0;Nt.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,pt,St,k,it),dt.unbindTexture()};const gu=P.createFramebuffer(),_u=P.createFramebuffer();this.copyTextureToTexture=function(T,z,G=null,W=null,k=0,it=null){it===null&&(k!==0?(_r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=k,k=0):it=0);let pt,St,vt,It,Ft,Ct,Yt,oe,xe;const he=T.isCompressedTexture?T.mipmaps[it]:T.image;if(G!==null)pt=G.max.x-G.min.x,St=G.max.y-G.min.y,vt=G.isBox3?G.max.z-G.min.z:1,It=G.min.x,Ft=G.min.y,Ct=G.isBox3?G.min.z:0;else{const tn=Math.pow(2,-k);pt=Math.floor(he.width*tn),St=Math.floor(he.height*tn),T.isDataArrayTexture?vt=he.depth:T.isData3DTexture?vt=Math.floor(he.depth*tn):vt=1,It=0,Ft=0,Ct=0}W!==null?(Yt=W.x,oe=W.y,xe=W.z):(Yt=0,oe=0,xe=0);const ce=wt.convert(z.format),Lt=wt.convert(z.type);let me;z.isData3DTexture?(Nt.setTexture3D(z,0),me=P.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Nt.setTexture2DArray(z,0),me=P.TEXTURE_2D_ARRAY):(Nt.setTexture2D(z,0),me=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment);const jt=P.getParameter(P.UNPACK_ROW_LENGTH),Ke=P.getParameter(P.UNPACK_IMAGE_HEIGHT),mi=P.getParameter(P.UNPACK_SKIP_PIXELS),Ze=P.getParameter(P.UNPACK_SKIP_ROWS),Zi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,he.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,he.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,It),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ft),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ct);const ge=T.isDataArrayTexture||T.isData3DTexture,Qe=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const tn=_t.get(T),Fe=_t.get(z),Ge=_t.get(tn.__renderTarget),Ts=_t.get(Fe.__renderTarget);dt.bindFramebuffer(P.READ_FRAMEBUFFER,Ge.__webglFramebuffer),dt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ts.__webglFramebuffer);for(let Zn=0;Zn<vt;Zn++)ge&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_t.get(T).__webglTexture,k,Ct+Zn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_t.get(z).__webglTexture,it,xe+Zn)),P.blitFramebuffer(It,Ft,pt,St,Yt,oe,pt,St,P.DEPTH_BUFFER_BIT,P.NEAREST);dt.bindFramebuffer(P.READ_FRAMEBUFFER,null),dt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||_t.has(T)){const tn=_t.get(T),Fe=_t.get(z);dt.bindFramebuffer(P.READ_FRAMEBUFFER,gu),dt.bindFramebuffer(P.DRAW_FRAMEBUFFER,_u);for(let Ge=0;Ge<vt;Ge++)ge?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,tn.__webglTexture,k,Ct+Ge):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,tn.__webglTexture,k),Qe?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Fe.__webglTexture,it,xe+Ge):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Fe.__webglTexture,it),k!==0?P.blitFramebuffer(It,Ft,pt,St,Yt,oe,pt,St,P.COLOR_BUFFER_BIT,P.NEAREST):Qe?P.copyTexSubImage3D(me,it,Yt,oe,xe+Ge,It,Ft,pt,St):P.copyTexSubImage2D(me,it,Yt,oe,It,Ft,pt,St);dt.bindFramebuffer(P.READ_FRAMEBUFFER,null),dt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Qe?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(me,it,Yt,oe,xe,pt,St,vt,ce,Lt,he.data):z.isCompressedArrayTexture?P.compressedTexSubImage3D(me,it,Yt,oe,xe,pt,St,vt,ce,he.data):P.texSubImage3D(me,it,Yt,oe,xe,pt,St,vt,ce,Lt,he):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,it,Yt,oe,pt,St,ce,Lt,he.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,it,Yt,oe,he.width,he.height,ce,he.data):P.texSubImage2D(P.TEXTURE_2D,it,Yt,oe,pt,St,ce,Lt,he);P.pixelStorei(P.UNPACK_ROW_LENGTH,jt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ke),P.pixelStorei(P.UNPACK_SKIP_PIXELS,mi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ze),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Zi),it===0&&z.generateMipmaps&&P.generateMipmap(me),dt.unbindTexture()},this.initRenderTarget=function(T){_t.get(T).__webglFramebuffer===void 0&&Nt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Nt.setTextureCube(T,0):T.isData3DTexture?Nt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Nt.setTexture2DArray(T,0):Nt.setTexture2D(T,0),dt.unbindTexture()},this.resetState=function(){b=0,w=0,I=null,dt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}function Gg(){const n=new Uint8Array([72,142,206,255]),t=new El(n,n.length,1,ds);return t.magFilter=Pe,t.minFilter=Pe,t.generateMipmaps=!1,t.colorSpace=Ln,t.needsUpdate=!0,t}function _e(n,t){return new ps({color:t,gradientMap:n})}function gs(n){return new ps({color:16777215,gradientMap:n})}const Dl={value:0};function Sa(n){n.customProgramCacheKey=()=>"wind-sway",n.onBeforeCompile=t=>{t.uniforms.uTime=Dl,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        float gust = sin(uTime * 1.65 + float(gl_InstanceID) * 0.41) * transformed.y;
        transformed.x += gust * 0.11;
        transformed.z += gust * 0.05;`)}}const Xt=160,di=6,we=[{id:"coral",name:"Mesa corallo",ground:15699846,patch:16171700,deep:13916770,plant:15887750},{id:"mint",name:"Prateria menta",ground:9363378,patch:13169368,deep:5156484,plant:3133068},{id:"violet",name:"Giardino viola",ground:13214446,patch:14995706,deep:8016576,plant:10117856},{id:"crystal",name:"Campo di cristalli",ground:7262420,patch:11857648,deep:3053230,plant:4114670},{id:"dune",name:"Dune pesca",ground:15908974,patch:16309158,deep:14715454,plant:15768136},{id:"lantern",name:"Bosco di lanterne",ground:15632056,patch:16234198,deep:13782672,plant:15909198}],ls=1.02,Uc=3.1/Xt,Ko=2.4;function Me(n){return-Math.PI+(n+.5)*(Math.PI*2/di)}function Il(n,t){const e=(Math.atan2(n,t)+Math.PI)/(Math.PI*2);return Math.min(di-1,Math.max(0,Math.floor(e*di)))}function $e(n,t,e=Xt){const i=Math.sin(n);return{x:i*Math.sin(t)*e,y:Math.cos(n)*e,z:i*Math.cos(t)*e}}function _s(n,t){const e=Math.sin(n),i=Math.cos(n);return{x:-i*Math.sin(t),y:e,z:-i*Math.cos(t)}}function Ul(n){return{x:Math.cos(n),y:0,z:-Math.sin(n)}}function Nl(n,t,e,i=Xt){const r=Math.hypot(n,t,e)||1,s=i/r;return{x:n*s,y:t*s,z:e*s}}function re(n,t,e,i){const r=$e(n,t),s=_s(n,t),o=Ul(t);return Nl(r.x+s.x*e+o.x*i,r.y+s.y*e+o.y*i,r.z+s.z*e+o.z*i)}function Fl(n,t,e){const i=Math.hypot(n,t,e)||1,r=Math.acos(Math.min(1,Math.max(-1,t/i))),s=Math.atan2(n,e),o=Math.abs(r-ls)*Xt,a=Math.abs(r-(Math.PI-ls))*Xt;let c=is(o,3.1,5.6);if(c=Math.max(c,is(a,2.6,4.8)),r>.1&&r<2.9){let l=Math.PI;for(let d=0;d<di;d+=1){const h=ya(s,Me(d));h<l&&(l=h)}const u=l*Math.sin(r)*Xt;c=Math.max(c,is(u,Ko,Ko+2.4))}return c}function is(n,t,e){if(n<=t)return 1;if(n>=e)return 0;const i=(n-t)/(e-t);return 1-i*i*(3-2*i)}function xs(n,t,e){const i=Math.hypot(n,t,e)||1;return{colat:Math.acos(Math.min(1,Math.max(-1,t/i))),az:Math.atan2(n,e)}}function Ol(n,t,e){const i=Math.hypot(n,t,e)||1,r=Math.acos(Math.min(1,Math.max(-1,t/i))),s=Math.atan2(n,e);if(Math.abs(r-ls)<Uc||Math.abs(r-(Math.PI-ls))<Uc*.85)return!0;if(r<.12||r>2.85)return!1;let o=Math.PI;for(let a=0;a<di;a++){const c=ya(s,Me(a));c<o&&(o=c)}return o*Math.sin(r)*Xt<Ko}function Wg(n,t,e){const i=Math.hypot(n,t,e)||1,r=Math.acos(Math.min(1,Math.max(-1,t/i))),o=(Math.atan2(n,e)+Math.PI)/(Math.PI*2)*di,a=o-Math.floor(o);return Math.min(a,1-a)*(Math.PI*2/di)*Math.sin(r)*Xt}function Xg(n,t,e,i,r,s,o){ie.set(n+i,t+r,e+s).multiplyScalar(.5);const a=ie.x,c=ie.y,l=ie.z;return ie.lengthSq()<1e-8&&ie.set(0,1,0),ie.normalize(),de.set(i-n,r-t,s-e),de.addScaledVector(ie,-de.dot(ie)),de.lengthSq()<1e-8&&de.set(1,0,0),de.normalize(),Wn.crossVectors(de,ie).normalize(),Nl(a+Wn.x*o,c+Wn.y*o,l+Wn.z*o)}function ya(n,t){let e=n-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return Math.abs(e)}const ie=new N,de=new N,Wn=new N,us=new ue,zl=new vn;function Ee(n,t,e,i,r,s){return ie.set(n,t,e),ie.lengthSq()<1e-8&&ie.set(0,1,0),ie.normalize(),de.set(i,r,s),de.lengthSq()<1e-8&&de.set(0,0,1),de.addScaledVector(ie,-de.dot(ie)),de.lengthSq()<1e-6&&de.set(1,0,0).addScaledVector(ie,-ie.x),de.normalize(),Wn.crossVectors(ie,de).normalize(),us.makeBasis(Wn,ie,de),zl.setFromRotationMatrix(us).clone()}function qg(n,t,e,i,r,s){return ie.set(n,t,e),ie.lengthSq()<1e-8&&ie.set(0,1,0),ie.normalize(),de.set(i,r,s),de.addScaledVector(ie,-de.dot(ie)),de.lengthSq()<1e-6&&de.set(0,0,1).addScaledVector(ie,-ie.z),de.normalize(),Wn.crossVectors(ie,de).normalize(),us.makeBasis(Wn,ie,de),zl.setFromRotationMatrix(us).clone()}const Nc=new N,Fc=new vn,Oc=new N,zc=new ue,Yg=new Vt;function $i(n,t,e,i,r,s,o,a,c,l,u,d,h){Nc.set(e,i,r),Fc.set(c,l,u,d),Oc.set(s,o,a),zc.compose(Nc,Fc,Oc),n.setMatrixAt(t,zc),h!==void 0&&n.setColorAt(t,Yg.setHex(h))}function Ki(n){n.instanceMatrix.needsUpdate=!0,n.computeBoundingSphere(),n.instanceColor&&(n.instanceColor.needsUpdate=!0)}const $g=Me(0),On=[{id:"hub",biome:0,colat:.2,az:$g,plaza:6.4,east:[-16,16],north:[-12,12],lots:[{n:9,e:8,kind:"house",spin:.4},{n:9,e:-8,kind:"house",spin:-.4},{n:-9,e:8,kind:"house",spin:2.4},{n:-9,e:-8,kind:"house",spin:-2.4},{n:13,e:7,kind:"tower",spin:.2},{n:13,e:-7,kind:"house",spin:-.2},{n:-10,e:1.35,kind:"pavilion",spin:.15},{n:-8,e:2.6,kind:"pavilion",spin:.2},{n:-8,e:-4.6,kind:"house",spin:3},{n:-5,e:3.6,kind:"stall",spin:.8},{n:-5,e:-3.6,kind:"stall",spin:-.8},{n:-13,e:6.5,kind:"house",spin:2.6},{n:-13,e:-6.5,kind:"house",spin:-2.6},{n:6,e:13,kind:"pavilion",spin:1.4},{n:6,e:-13,kind:"tower",spin:-1.4},{n:-6,e:13,kind:"house",spin:1.8},{n:-6,e:-13,kind:"house",spin:-1.8},{n:15,e:12,kind:"stall",spin:.6},{n:15,e:-12,kind:"stall",spin:-.6},{n:11,e:4.4,kind:"house",spin:.15},{n:11,e:-4.4,kind:"house",spin:-.15},{n:2.35,e:5.7,kind:"kiosk",spin:-.85},{n:-2.2,e:8.2,kind:"stall",spin:1.1},{n:-2.2,e:-8.2,kind:"house",spin:-1.1}]},{id:"mint",biome:1,colat:1.32,az:Me(1)+.09,plaza:4.4,east:[-18,8],north:[-8,8],lots:[{n:6,e:5,kind:"house",spin:.5},{n:6,e:-5,kind:"house",spin:-.5},{n:-6,e:5,kind:"stall",spin:2},{n:-6,e:-5,kind:"house",spin:-2},{n:5.5,e:7,kind:"tower",spin:1.2},{n:8,e:4,kind:"pavilion",spin:0},{n:-8,e:2.6,kind:"house",spin:2.4},{n:2,e:-7.2,kind:"stall",spin:-1.2},{n:-3,e:7.6,kind:"house",spin:.9}]},{id:"violet",biome:2,colat:1.78,az:Me(2)-.08,plaza:4.4,east:[-8,18],north:[-8,8],lots:[{n:6,e:5,kind:"house",spin:.3},{n:-6,e:5,kind:"house",spin:2.2},{n:6,e:-5,kind:"stall",spin:-.4},{n:-5,e:-6,kind:"pavilion",spin:1},{n:5.5,e:-7,kind:"tower",spin:-1},{n:9,e:2,kind:"house",spin:.8},{n:-8.2,e:3.2,kind:"house",spin:2.5},{n:2.2,e:8.2,kind:"stall",spin:.7},{n:-2.4,e:-7.4,kind:"house",spin:-1.6}]},{id:"lantern",biome:5,colat:1.48,az:Me(5)+.1,plaza:4.2,east:[-18,8],north:[-7,7],lots:[{n:5.5,e:5,kind:"house",spin:.6},{n:-5.5,e:5,kind:"stall",spin:2.1},{n:5.5,e:-4.5,kind:"house",spin:-.5},{n:-5,e:-5,kind:"pavilion",spin:.2},{n:6.5,e:6,kind:"tower",spin:1.5},{n:-8,e:2.4,kind:"house",spin:2.2},{n:2.2,e:-7.2,kind:"stall",spin:-1.1},{n:9,e:-2.4,kind:"pavilion",spin:.4}]},{id:"dune",biome:4,colat:1.045,az:Me(4)-.085,plaza:3.6,east:[-7,7],north:[-6,6],lots:[{n:4.5,e:4,kind:"stall",spin:.4},{n:-4.5,e:3.5,kind:"house",spin:2},{n:4,e:-4,kind:"stall",spin:-.8},{n:-1,e:-5.5,kind:"tower",spin:-1.4},{n:-5.2,e:4.6,kind:"pavilion",spin:1.7},{n:6.4,e:3.4,kind:"house",spin:.3},{n:1.2,e:6.4,kind:"stall",spin:1.2}]},{id:"crystal",biome:3,colat:1.5,az:Me(3)-.11,plaza:4,east:[-12,12],north:[-6,6],lots:[{n:5.2,e:4.6,kind:"house",spin:.4},{n:-5.2,e:4.4,kind:"pavilion",spin:2.2},{n:5.2,e:-4.8,kind:"stall",spin:-.5},{n:-4.6,e:-5,kind:"house",spin:-2},{n:6.6,e:6.2,kind:"tower",spin:1.1}]}],ne=On[0],Zo=On[1],jo=On[2],Jo=On[3],Qo=On[4],ta=On[5];if(!ne||!Zo||!jo||!Jo||!Qo||!ta)throw new Error("paesi incompleti");const Bl=$e(ne.colat,ne.az),kl=$e(Zo.colat,Zo.az),Hl=$e(jo.colat,jo.az),Vl=$e(Jo.colat,Jo.az),Gl=$e(Qo.colat,Qo.az),Kg=$e(ta.colat,ta.az),Wl=re(1.62,Me(3)+.07,0,4.5),Xl=re(ne.colat,ne.az,4.15,5.55),ql=[{n:17.2,e:-6.6,spin:Math.PI,sx:.86,sy:.9,sz:.96,hip:!0,wall:16249320,roof:15887750,porch:!0,potN:1.5,potE:-.8},{n:17.2,e:6.6,spin:Math.PI,sx:.7,sy:1.34,sz:.8,hip:!1,wall:15984348,roof:13916770,porch:!1,potN:1.55,potE:.75},{n:20.3,e:-8.5,spin:Math.PI/2,sx:1.16,sy:.8,sz:1.02,hip:!0,wall:16183782,roof:14916146,porch:!0,potN:.85,potE:1.65},{n:20.3,e:8.5,spin:-Math.PI/2,sx:.66,sy:1.28,sz:.78,hip:!1,wall:16314340,roof:12872274,porch:!1,potN:-.7,potE:-1.5},{n:24.1,e:-5.5,spin:0,sx:.92,sy:.96,sz:.88,hip:!0,wall:16051171,roof:15887750,porch:!0,potN:-1.5,potE:.8},{n:24.1,e:5.5,spin:0,sx:1.08,sy:.76,sz:.98,hip:!0,wall:16183782,roof:14715498,porch:!1,potN:-1.45,potE:-.85}];function Zg(n,t){return Math.hypot(1.25*n,1.15*t)+.35}const sn=[];for(const n of On){const t=$e(n.colat,n.az);sn.push({...t,r2:n.plaza*n.plaza});const[e,i]=n.east,[r,s]=n.north;for(let o=e;o<=i;o+=2.4)sn.push({...re(n.colat,n.az,0,o),r2:2.15*2.15});for(let o=r;o<=s;o+=2.4)sn.push({...re(n.colat,n.az,o,0),r2:2.15*2.15});for(const o of n.lots){const a=o.kind==="tower"?2.15:o.kind==="pavilion"?1.75:o.kind==="stall"?1.95:o.kind==="kiosk"?2.3:2.55;sn.push({...re(n.colat,n.az,o.n,o.e),r2:a*a})}}const lr=re(ne.colat,ne.az,20,0);for(let n=12.4;n<=27.2;n+=2)sn.push({...re(ne.colat,ne.az,n,0),r2:2.05*2.05});for(let n=-9.6;n<=9.6;n+=2)sn.push({...re(ne.colat,ne.az,20,n),r2:1.85*1.85});sn.push({...lr,r2:4.7*4.7});for(const n of ql){const t=Zg(n.sx,n.sz);sn.push({...re(ne.colat,ne.az,n.n,n.e),r2:t*t})}function Yl(n,t,e){let i=0;for(let r=0;r<sn.length;r+=1){const s=sn[r];if(!s)continue;const o=Math.hypot(n-s.x,t-s.y,e-s.z),a=Math.sqrt(s.r2),c=is(o,a,a+2.2);if(c>i&&(i=c),i>=1)return 1}return i}function $l(n,t,e){for(let i=0;i<sn.length;i+=1){const r=sn[i];if(!r)continue;const s=n-r.x,o=t-r.y,a=e-r.z;if(s*s+o*o+a*a<r.r2)return!0}return!1}function Ea(n,t,e,i){for(const a of On){const c=$e(a.colat,a.az),l=n-c.x,u=t-c.y,d=e-c.z,h=a.plaza+i;if(l*l+u*u+d*d<h*h)return!0}const r=n-lr.x,s=t-lr.y,o=e-lr.z;return r*r+s*s+o*o<(12+i)*(12+i)}const eo=16183782,Kl=2366498,nn=14916146;function jg(n,t,e){const i=[],r=[],s=[],o=[],a=[],c=[],l=[],u=[],d=[],h=[],p=[],g=[],_=[],m=[],f=[],M=[],E=[],y=[],A=[];for(const w of On){const I=s0(w.biome);for(const D of w.lots){const R=re(w.colat,w.az,D.n,D.e),F=Ee(R.x,R.y,R.z,Math.sin(w.az),0,Math.cos(w.az));F.multiply(new vn().setFromAxisAngle(new N(0,1,0),D.spin));const O=(H,Y,B,Q,ot)=>{H.push({x:R.x,y:R.y,z:R.z,qx:F.x,qy:F.y,qz:F.z,qw:F.w,sx:Y,sy:B,sz:Q,color:ot})};if(D.kind==="house"){const H=Math.round(Math.abs(D.e)+Math.abs(D.n))%2===0;O(i,1,1,1,eo),O(H?h:r,1,1,1,I),O(s,1,1,1,Kl),O(p,1,1,1,1454148),O(g,1,1,1,16052198),O(_,1,1,1,nn),O(m,1,1,1,H?I:16052198),O(f,1,1,1,15193010),H||O(M,1,1,1,12872274),e.push({...R,r:1.72,h:3.4})}else D.kind==="tower"?(O(o,1,1,1,15196114),O(a,1,1,1,I),O(y,1,1,1,nn),e.push({...R,r:1.15,h:7.4})):D.kind==="pavilion"?(O(c,1,1,1,15196114),O(l,1,1,1,I),e.push({...R,r:.55,h:2.8})):D.kind==="kiosk"?(O(u,1.15,1.05,1.05,eo),O(E,1,1,1,1323048),ea(A,R,F,3.15,.42),e.push({...R,r:1.32,h:2.5})):(O(u,1,1,1,eo),O(d,1,1,1,nn),e.push({...R,r:1.16,h:1.7}))}const v=$e(w.colat,w.az),x=new ut(new Ye(w.plaza*.72,.08,5,18),new se({color:nn}));x.position.set(v.x,v.y,v.z),x.quaternion.copy(Ee(v.x,v.y,v.z,1,0,0));const L=new N(v.x,v.y,v.z).normalize();x.position.addScaledVector(L,.08),n.add(x);for(const[D,R]of[[w.plaza*.82,1.85],[w.plaza*.82,-1.85],[-w.plaza*.82,1.85],[-w.plaza*.82,-1.85]]){const F=re(w.colat,w.az,D,R),O=Ee(F.x,F.y,F.z,Math.sin(w.az),0,Math.cos(w.az));c.push({x:F.x,y:F.y,z:F.z,qx:O.x,qy:O.y,qz:O.z,qw:O.w,sx:.55,sy:.85,sz:.55,color:15196114}),ea(A,F,O,2.05,.38)}if(w.id==="dune"){const D=re(w.colat,w.az,-6.4,3.2),R=new ut(new Ye(2.15,.16,6,14),_e(t,15768136));R.position.set(D.x,D.y,D.z),R.quaternion.copy(Ee(D.x,D.y,D.z,Math.sin(w.az),0,Math.cos(w.az)));const F=new N(D.x,D.y,D.z).normalize();R.position.addScaledVector(F,2.15),n.add(R)}o0(n,t,e,w)}Jg(n,t,e);const b=(w,I,v=!1)=>{if(I.length===0)return;const x=v?new se({color:16777215}):gs(t),L=new qi(w,x,I.length);L.frustumCulled=!1;for(let D=0;D<I.length;D+=1){const R=I[D];R&&$i(L,D,R.x,R.y,R.z,R.sx,R.sy,R.sz,R.qx,R.qy,R.qz,R.qw,R.color)}Ki(L),n.add(L)};b(ur(2.5,2.3,2.3,1.15),i),b(Zl(),r),b(Jl(),s),b(ui(.82,.95,6.2,3.1),o),b(jl(),a),b(ui(.16,.2,2.3,1.15),c),b(ui(1.85,1.85,.2,2.4),l),b(ur(1.9,1.15,1.25,.58),u),b(ur(2.15,.12,1.55,1.28),d,!0),b(Ql(),h),b(ru(),p),b(eu(),g),b(nu(),_),b(tu(),m),b(iu(),f),b(su(),M),b(c0(),E),b(l0(),y,!0),b(na(),A,!0)}function Jg(n,t,e){const i=[],r=[],s=[],o=[],a=[],c=[],l=[],u=[],d=[],h=[],p=[],g=[],_=[],m=[],f=[],M=[],E=[],y=[],A=[],b=[],w=[],I=[],v=(K,et,lt,dt,Zt,_t,Nt)=>{K.push({x:et.x,y:et.y,z:et.z,qx:lt.x,qy:lt.y,qz:lt.z,qw:lt.w,sx:dt,sy:Zt,sz:_t,color:Nt})},x=(K,et,lt)=>{const dt=re(ne.colat,ne.az,K,et),Zt=Ee(dt.x,dt.y,dt.z,Math.sin(ne.az),0,Math.cos(ne.az));return Zt.multiply(new vn().setFromAxisAngle(new N(0,1,0),lt)),{p:dt,q:Zt}};for(const K of ql){const{p:et,q:lt}=x(K.n,K.e,K.spin);v(i,et,lt,K.sx,K.sy,K.sz,K.wall),v(K.hip?s:r,et,lt,K.sx,K.sy,K.sz,K.roof),v(o,et,lt,K.sx,K.sy,K.sz,Kl),v(a,et,lt,K.sx,K.sy,K.sz,1454148),v(c,et,lt,K.sx,K.sy,K.sz,16052198),v(l,et,lt,K.sx,K.sy,K.sz,nn),v(u,et,lt,K.sx,K.sy,K.sz,K.hip?K.roof:16052198),v(d,et,lt,K.sx,K.sy,K.sz,15193010),v(g,et,lt,K.sx,K.sy,K.sz,16773584),K.hip||v(h,et,lt,K.sx,K.sy,K.sz,12872274),K.porch&&v(p,et,lt,K.sx,K.sy,K.sz,nn),e.push({...et,r:Math.hypot(1.25*K.sx,1.15*K.sz)+.04,h:3.45*K.sy});const dt=x(K.n+K.potN,K.e+K.potE,K.spin);v(A,dt.p,dt.q,.72,.72,.72,16183782),v(b,dt.p,dt.q,.7,.7,.7,15887750),e.push({...dt.p,r:.28,h:.7})}const L=[],D=[],R=x(20.3,11.8,0);v(L,R.p,R.q,.74,.86,.74,15196114),v(D,R.p,R.q,.74,.86,.74,15887750),v(w,rr(R.p,6.35),R.q,.26,.26,.26,nn),e.push({...R.p,r:.82,h:6.4});for(const K of[13.6,15.8,18.2,21.8,24.8])for(const et of[-2.55,2.55]){const lt=x(K,et,0);v(_,lt.p,lt.q,.62,.92,.62,15196114),ea(m,lt.p,lt.q,2.15,.3),e.push({...lt.p,r:.18,h:2.2})}for(const K of[{n:14.2,e:-2.75,color:nn},{n:14.2,e:2.75,color:15887750}]){const et=x(K.n,K.e,0);v(_,et.p,et.q,.5,1.05,.5,15196114),v(y,et.p,et.q,1,1,1,K.color),e.push({...et.p,r:.2,h:2.3})}for(const K of[{n:18.4,e:-4.4,spin:Math.PI},{n:18.4,e:4.4,spin:Math.PI},{n:21.6,e:-4.6,spin:0},{n:21.6,e:4.4,spin:0}]){const et=x(K.n,K.e,K.spin);v(f,et.p,et.q,1,1,1,15196114),e.push({...et.p,r:.52,h:.62})}for(const K of[{n:19.9,e:-10.35,s:.42},{n:20.28,e:-10.55,s:.34},{n:20.55,e:-10.2,s:.38}]){const et=x(K.n,K.e,.4);v(M,et.p,et.q,K.s,K.s,K.s,12880206),e.push({...et.p,r:K.s*.55,h:K.s+.15})}for(const K of[{n:15.4,e:-3.9},{n:15.4,e:3.9},{n:19.4,e:-11.3},{n:21.2,e:-11.3}]){const et=x(K.n,K.e,0);v(E,et.p,et.q,1,1,1,16052198),e.push({...et.p,r:.62,h:.72})}for(const K of[{n:18.8,e:-5.1},{n:18.8,e:5.1},{n:22.2,e:5.6},{n:21.2,e:-5.9}]){const et=x(K.n,K.e,0);v(A,et.p,et.q,1,1,1,13916770),v(b,et.p,et.q,1.05,1.05,1.05,16171700),e.push({...et.p,r:.2,h:2.3})}const F=x(16.6,0,0);v(w,rr(F.p,2.55),F.q,.12,.12,.12,16773584);for(const K of[15.2,16.2,17.2,18.2])v(w,rr(re(ne.colat,ne.az,K,0),2.42),F.q,.16,.16,.16,nn);const O=re(ne.colat,ne.az,20,0),H=Ul(ne.az),Y=Ee(O.x,O.y,O.z,H.x,H.y,H.z);for(const K of[-2.2,-.7,.7,2.2])v(w,rr(re(ne.colat,ne.az,20,K),2.42),Y,.16,.16,.16,nn);const B=x(22.8,-3.2,0),Q=new N(B.p.x,B.p.y,B.p.z).normalize(),ot=new Ye(.86,.12,6,14);ot.rotateX(Math.PI/2);const xt=new ut(ot,_e(t,16052198));xt.position.set(B.p.x,B.p.y,B.p.z).addScaledVector(Q,.16),xt.quaternion.copy(B.q);const Rt=new ut(new Qt(.62,.62,.05,12),new se({color:9427178}));Rt.position.set(B.p.x,B.p.y,B.p.z).addScaledVector(Q,.1),Rt.quaternion.copy(B.q);const Wt=new ut(new Ie(.08,.7,6),new se({color:15267835}));Wt.position.set(B.p.x,B.p.y,B.p.z).addScaledVector(Q,.48),Wt.quaternion.copy(B.q),n.add(xt,Rt,Wt);for(const[K,et]of[[.86,0],[-.86,0],[0,.86],[0,-.86]]){const lt=re(ne.colat,ne.az,22.8+K,-3.2+et);v(I,lt,B.q,1,1,1,15196114),e.push({...lt,r:.22,h:.7})}const tt=re(ne.colat,ne.az,20,0),Dt=Ee(tt.x,tt.y,tt.z,1,0,0),q=new Ye(3.15,.06,5,20);q.rotateX(Math.PI/2);const j=new ut(q,new se({color:nn})),gt=new N(tt.x,tt.y,tt.z).normalize();j.position.set(tt.x,tt.y,tt.z).addScaledVector(gt,.08),j.quaternion.copy(Dt),n.add(j);const Pt=_s(ne.colat,ne.az),Tt=Ee(F.p.x,F.p.y,F.p.z,Pt.x,Pt.y,Pt.z),Gt=new ut(new Kt(.035,.035,4.6),_e(t,2366498));Gt.position.copy(Bc(F.p,2.58)),Gt.quaternion.copy(Tt);const Te=new ut(new Kt(.035,.035,4.8),_e(t,2366498));Te.position.copy(Bc(O,2.58)),Te.quaternion.copy(Y),n.add(Gt,Te);const P=(K,et,lt=!1,dt=!1)=>{if(et.length===0)return;const Zt=lt?new se({color:16777215}):gs(t);dt&&Sa(Zt);const _t=new qi(K,Zt,et.length);_t.frustumCulled=!1;for(let Nt=0;Nt<et.length;Nt+=1){const te=et[Nt];te&&$i(_t,Nt,te.x,te.y,te.z,te.sx,te.sy,te.sz,te.qx,te.qy,te.qz,te.qw,te.color)}Ki(_t),n.add(_t)};P(ur(2.5,2.3,2.3,1.15),i),P(Zl(),r),P(Ql(),s),P(Jl(),o),P(ru(),a),P(eu(),c),P(nu(),l),P(tu(),u),P(iu(),d),P(su(),h),P(Qg(),p,!0),P(t0(),g),P(ui(.82,.95,6.2,3.1),L),P(jl(),D),P(ui(.16,.2,2.3,1.15),_),P(na(),m,!0),P(e0(),f),P(ur(1,.72,.72,.36),M),P(n0(),E),P(i0(),y),P(ui(.08,.11,1.15,.58),A),P(r0(),b,!1,!0),P(na(),w,!0),P(ui(.14,.16,.7,.35),I)}function rr(n,t){const e=Math.hypot(n.x,n.y,n.z)||1;return{x:n.x+n.x/e*t,y:n.y+n.y/e*t,z:n.z+n.z/e*t}}function Bc(n,t){const e=rr(n,t);return new N(e.x,e.y,e.z)}function Qg(){const n=new Kt(1.35,.07,.62);return n.translate(0,1.58,1.42),n}function t0(){const n=new Kt(.28,.2,.04);return n.translate(.52,1.18,1.24),n}function e0(){const n=new Kt(1.15,.08,.36);n.translate(0,.42,0);const t=new Kt(1.15,.36,.06);return t.translate(0,.62,-.16),vs(n,t)}function n0(){const n=new Kt(1.35,.58,.1);return n.translate(0,.3,0),n}function i0(){const n=new Kt(.5,.82,.04);return n.translate(0,1.72,.16),n}function r0(){const n=new Qt(.42,.32,.16,6);n.translate(0,1.05,0);const t=new Qt(.26,.2,.12,5);return t.translate(0,1.32,0),vs(n,t)}function ea(n,t,e,i,r){const s=Math.hypot(t.x,t.y,t.z)||1;n.push({x:t.x+t.x/s*i,y:t.y+t.y/s*i,z:t.z+t.z/s*i,qx:e.x,qy:e.y,qz:e.z,qw:e.w,sx:r,sy:r,sz:r,color:nn})}function s0(n){return[15887750,3133068,10117856,4114670,15768136,15909198][n]??15909198}function ur(n,t,e,i){const r=new Kt(n,t,e);return r.translate(0,i,0),r}function Zl(){const n=new Ie(1.85,1.15,4);return n.translate(0,2.85,0),n}function jl(){const n=new Ie(1.25,1.35,6);return n.translate(0,6.85,0),n}function ui(n,t,e,i){const r=new Qt(n,t,e,6);return r.translate(0,i,0),r}function Jl(){const n=new Kt(.55,.85,.08);return n.translate(0,.46,1.18),n}function Ql(){const n=new Ie(2.05,.7,4);return n.translate(0,2.55,0),n}function o0(n,t,e,i){const r=i.id==="hub"?1.42:.78,s=a0(i,r);if(!s)return;const o=re(i.colat,i.az,s.n,s.e),a=Ee(o.x,o.y,o.z,Math.sin(i.az),0,Math.cos(i.az)),c=new N(o.x,o.y,o.z).normalize(),l=new Ye(r,i.id==="hub"?.16:.11,6,16);l.rotateX(Math.PI/2);const u=new ut(l,_e(t,16052198));u.position.set(o.x,o.y,o.z).addScaledVector(c,.2),u.quaternion.copy(a);const d=new ut(new Qt(r*.72,r*.72,.05,14),new se({color:i.id==="hub"?9427178:10147040}));if(d.position.set(o.x,o.y,o.z).addScaledVector(c,.12),d.quaternion.copy(a),n.add(u,d),i.id==="hub"){const h=new ut(new Ie(.11,.85,6),new se({color:15267835}));h.position.set(o.x,o.y,o.z).addScaledVector(c,.58),h.quaternion.copy(a),n.add(h)}for(let h=0;h<4;h+=1){const p=h/4*Math.PI*2+Math.PI/4;e.push({...re(i.colat,i.az,s.n+Math.cos(p)*r,s.e+Math.sin(p)*r),r:.34,h:.7})}}function a0(n,t){const e=t+1.9;for(const i of[.72,.85,.58])for(const r of[1,-1])for(const s of[-1,1]){const o=n.plaza*i*r,a=n.plaza*i*s,c=Math.abs(o)-t>2.5&&Math.abs(a)-t>2.65,l=n.lots.every(u=>Math.hypot(u.n-o,u.e-a)>e);if(c&&l)return{n:o,e:a}}return null}function tu(){const n=new Qt(1.95,1.95,.12,6);return n.translate(0,2.32,0),n}function eu(){const n=new Kt(.5,.54,.04),t=n.clone();t.translate(-.58,1.38,1.16);const e=n.clone();return e.translate(.58,1.38,1.16),vs(t,e)}function nu(){const n=new Kt(.82,.12,.1);return n.translate(0,.98,1.22),n}function iu(){const n=new Kt(.78,.06,.32);return n.translate(0,.04,1.38),n}function ru(){const n=new Kt(.36,.4,.06),t=n.clone();t.translate(-.58,1.38,1.2);const e=n.clone();return e.translate(.58,1.38,1.2),vs(t,e)}function su(){const n=new Kt(.28,.62,.28);return n.translate(.62,3.2,-.15),n}function c0(){const n=new Kt(1.7,.95,.1);return n.translate(0,2.45,.15),n}function l0(){const n=new Ve(.34,7,6);return n.translate(0,7.55,0),n}function na(){return new Ve(1,7,6)}function vs(n,t){const e=n.index?n.toNonIndexed():n,i=t.index?t.toNonIndexed():t,r=new He,s=e.getAttribute("position").count+i.getAttribute("position").count,o=new Float32Array(s*3),a=new Float32Array(s*3),c=e.getAttribute("position"),l=i.getAttribute("position"),u=e.getAttribute("normal"),d=i.getAttribute("normal");for(let p=0;p<c.count;p+=1)o[p*3]=c.getX(p),o[p*3+1]=c.getY(p),o[p*3+2]=c.getZ(p),a[p*3]=u.getX(p),a[p*3+1]=u.getY(p),a[p*3+2]=u.getZ(p);const h=c.count;for(let p=0;p<l.count;p+=1)o[(h+p)*3]=l.getX(p),o[(h+p)*3+1]=l.getY(p),o[(h+p)*3+2]=l.getZ(p),a[(h+p)*3]=d.getX(p),a[(h+p)*3+1]=d.getY(p),a[(h+p)*3+2]=d.getZ(p);return r.setAttribute("position",new De(o,3)),r.setAttribute("normal",new De(a,3)),r}const kc="Mondo-1",u0=8,Ta=Me(0),h0=$e(.3,Ta),d0=_s(.3,Ta),Oi=h0,zi=d0,f0=Bl,p0=kl,m0=Hl,g0=Wl,Li=Me(4),_0=Gl,Ms=[{id:"faro",name:"Faro del polo",kind:"race",coins:20,biome:0,line:"La piazza del polo ti segna come esploratore.",...f0},{id:"anello",name:"Piazza di menta",kind:"precision",coins:12,biome:1,line:"Il paese della prateria. Paga poco, ma paga.",...p0},{id:"pietre",name:"Petali logici",kind:"logic",coins:30,biome:2,line:"Il paese viola, per ora, è una moneta grossa.",...m0},{id:"belvedere",name:"Belvedere di cristallo",kind:"explore",coins:16,biome:3,line:"Il totem di cristallo, dove il pianeta curva via.",...g0},{id:"cancello",name:"Campo delle dune",kind:"obstacle",coins:18,biome:4,line:"Il campo ricorda chi ha corso il sentiero.",..._0,needsCourse:!0},{id:"lanterne",name:"Piazza delle lanterne",kind:"explore",coins:14,biome:5,line:"Il paese rosa, sotto le lampade.",...Vl},{id:"bacheca",name:"Bacheca dei giochi",kind:"explore",coins:8,biome:0,line:"Da qui si entra in Ostacoli. Il giro degli spicchi paga a parte.",...Xl,opensBoard:!0}];function ou(n){return we[n.biome]??we[0]}const x0=[{id:"corsa",name:"Corsa",players:"20–40",min:20,max:40,demoStake:20,playable:!1,blurb:"Primo al traguardo. Gli altri lasciano la puntata sul tavolo."},{id:"logica",name:"Logica",players:"20–60",min:30,max:60,demoStake:30,playable:!1,blurb:"Enigmi a eliminazione, a tempo."},{id:"precisione",name:"Precisione",players:"20–50",min:20,max:50,demoStake:20,playable:!1,blurb:"Piattaforme e finestre strette."},{id:"ostacoli",name:"Ostacoli",players:"40–100",min:40,max:100,demoStake:20,playable:!0,blurb:"Giro breve sulle dune. In anteprima correte in quattro. Si entra anche dalla bacheca in città."},{id:"giro",name:"Giro degli spicchi",players:"1",min:0,max:0,demoStake:0,playable:!1,blurb:"Visita le sei mete del pianeta. Quando le hai tutte, la bacheca aggiunge 25 monete. Nessuna puntata."}],au=[2.4,1.2,.4,0],v0=[9,26,47,70],M0=[{c:1.045,a:Li-.016},{c:1.045,a:Li-.004},{c:1.068,a:Li+.005},{c:1.068,a:Li+.015},{c:1.042,a:Li+.021},{c:1.055,a:Li+.032}],on=M0.map(n=>$e(n.c,n.a));function no(n,t){const e=on[n],i=on[n+1];if(!e||!i)throw new Error("varco senza segmento");return Xg(e.x,e.y,e.z,i.x,i.y,i.z,t)}const S0=[no(0,1.25),no(2,-1.3),no(4,-1.2)],rs=[{name:"Rami",seconds:5.6,color:15769658},{name:"Lea",seconds:7.6,color:8154367},{name:"Nico",seconds:10.5,color:4050808}],y0=24,ss=on[on.length-1];if(!ss)throw new Error("percorso senza traguardo");const pe={x:ss.x,y:ss.y,z:ss.z,r:1.7};function cu(n,t){const e=au[n-1]??0;return Math.round(t*e)}function wn(n,t,e,i){const r=xs(i.x,i.y,i.z);return{id:n,name:t,kind:e,colat:r.colat,az:r.az}}const ia=[{id:"pole",name:"Faro del polo",kind:"pole",colat:.04,az:Ta},wn("hub","Città del polo","hub",Bl),wn("quarter","Quartiere del corallo","village",lr),wn("games","Bacheca dei giochi","games",Xl),wn("mint","Paese di menta","village",kl),wn("violet","Paese viola","village",Hl),wn("crystal-town","Borgo di cristallo","village",Kg),wn("look","Belvedere","lookout",Wl),wn("dune","Campo ostacoli","venue",Gl),wn("lantern","Piazza lanterne","village",Vl),...we.map((n,t)=>({id:`biome-${n.id}`,name:n.name,kind:"biome",colat:.86,az:Me(t)}))],E0=["faro","anello","pietre","belvedere","cancello","lanterne"],Hc=25;function T0(){return{coins:0,claimed:new Set,courseClear:!1,weekRank:null}}function Ss(n,t){n.coins+=Math.max(0,Math.round(t))}function b0(n,t){const e=Math.max(0,Math.round(t));return n.coins<e?!1:(n.coins-=e,!0)}function w0(n,t){Ss(n,t.payout),(n.weekRank===null||t.rank<n.weekRank)&&(n.weekRank=t.rank),t.clean&&(n.courseClear=!0)}const Vc=6,A0=12038568;function R0(n,t){const e=Ms.map(i=>C0(i,t,n));return{update(i,r,s,o,a){e.forEach((l,u)=>{const d=o.claimed.has(l.def.id),h=d?A0:ou(l.def).plant;for(const _ of l.accents)P0(_,h);const p=d?0:Math.sin(i*2.3+u*.8)*.1;l.bob.position.y=l.baseY+p;const g=d?.92:1+Math.sin(i*2.3+u)*.04;l.ring.scale.setScalar(g)});const c=L0(r.x,r.y,r.z);if(!c){a.setPrompt(null);return}a.setPrompt(D0(c,o)),s&&I0(c,o,a)}}}function C0(n,t,e){const i=new Dn;i.position.set(n.x,0,n.z);const r=[],s=ou(n).plant,o=()=>{const h=new se({color:s});return r.push(h),h},a=_e(t,9066296),c=new ut(new Ye(1.2,.07,6,18),o());c.rotation.x=Math.PI/2,c.position.y=.05,i.add(c);let l=i,u=0;if(n.id==="faro"){const h=new ut(new In(.32,0),o());h.position.y=.85,i.add(h),l=h,u=.85}else if(n.id==="anello"){const h=new ut(new Ye(1.02,.1,8,18),o());h.position.y=1.2;const p=new ut(new In(.26,0),o());p.position.y=1.2,i.add(h,p),l=p,u=1.2}else if(n.id==="pietre"){const h=new ut(new xr(.46,0),_e(t,s)),p=new ut(new xr(.34,0),_e(t,6966980)),g=new ut(new In(.24,0),o());h.position.y=.4,p.position.y=1.02,g.position.y=1.55,r.push(h.material,p.material),i.add(h,p,g),l=g,u=1.55}else if(n.id==="belvedere"){const h=new ut(new Qt(.06,.08,2.5,5),a);h.position.y=1.25;const p=new ut(new Kt(.78,.42,.05),o());p.position.set(.42,2.2,0),i.add(h,p),l=p,u=2.2}else if(n.id==="lanterne"){const h=new ut(new Qt(.07,.1,2.8,5),a);h.position.y=1.4;const p=new ut(new Ve(.42,8,6),o());p.position.y=2.9,i.add(h,p),l=p,u=2.9}else if(n.id==="bacheca"){const h=new ut(new Kt(.16,1.7,.16),a);h.position.y=.85;const p=new ut(new Kt(1.35,.85,.08),o());p.position.y=1.85,i.add(h,p),l=p,u=1.85}else{const h=new ut(new Kt(.18,1.9,.18),a),p=new ut(new Kt(.18,1.9,.18),a),g=new ut(new Kt(1.75,.16,.18),a),_=new ut(new In(.24,0),o());h.position.set(-.72,.95,0),p.position.set(.72,.95,0),g.position.y=1.82,_.position.y=1.45,i.add(h,p,g,_),l=_,u=1.45}const d=Ee(n.x,n.y,n.z,1,0,0);return i.position.set(n.x,n.y,n.z),i.quaternion.copy(d),e.add(i),{def:n,bob:l,baseY:u,accents:r,ring:c}}function P0(n,t){(n instanceof se||n instanceof ps)&&n.color.setHex(t)}function L0(n,t,e){let i=null,r=Vc*Vc;for(const s of Ms){const o=n-s.x,a=t-s.y,c=e-s.z,l=o*o+a*a+c*c;l<=r&&(i=s,r=l)}return i}function D0(n,t){return t.claimed.has(n.id)?`${n.name} · già presa`:n.needsCourse&&!t.courseClear?`${n.name} · prima il percorso`:`Prendi · ${n.name} · +${n.coins}`}function I0(n,t,e){if(n.opensBoard&&e.openBoard(),t.claimed.has(n.id)){e.toast(n.opensBoard?"La bacheca elenca i giochi.":`${n.name} è già tua.`);return}if(n.needsCourse&&!t.courseClear){e.toast("Corri fino al cerchio ciano, poi torna al cancello.");return}t.claimed.add(n.id),Ss(t,n.coins),e.sync(),e.toast(`+${n.coins} · ${n.line}`),U0(t,e),navigator.vibrate?.(18)}function U0(n,t){n.claimed.has("giro")||E0.every(e=>n.claimed.has(e))&&(n.claimed.add("giro"),Ss(n,Hc),t.sync(),t.toast(`+${Hc} · Giro degli spicchi chiuso.`))}const Gc=B0(on);function N0(n,t,e,i,r){const s=rs.map((_,m)=>{const f=H0(t,_.color);return f.visible=!1,n.add(f),f.userData.lane=(m-1)*.62,{..._,mesh:f}});let o="idle",a=0,c=0,l=0;i.onAbandon(()=>{if(o==="countdown"){d("Corsa annullata. Non hai ancora puntato.");return}o==="racing"&&g(!1,c)}),i.onResultClose(()=>{o="idle",h(),u(),i.showRace(null),i.showResult(null)});function u(){r.teleport(Oi.x,Oi.y,Oi.z,zi.x,zi.y,zi.z)}function d(_){o="idle",h(),i.showRace(null),i.toast(_),u()}function h(){for(const _ of s)_.mesh.visible=!1}function p(_){for(const m of s){const f=Math.min(Gc,_/m.seconds*Gc),M=k0(on,f),E=m.mesh.userData.lane,y=typeof E=="number"?E:0,A=new N(M.x,M.y,M.z).normalize(),b=new N(M.dx,M.dy,M.dz);b.addScaledVector(A,-b.dot(A)),b.lengthSq()<1e-6&&b.set(0,0,1),b.normalize();const w=new N().crossVectors(A,b).normalize(),I=A.multiplyScalar(Xt).addScaledVector(w,y);I.normalize().multiplyScalar(Xt),m.mesh.visible=!0,m.mesh.position.copy(I),m.mesh.quaternion.copy(Ee(I.x,I.y,I.z,b.x,b.y,b.z))}}function g(_,m){if(o==="result"||o==="idle")return;o="result";const f=rs.filter(w=>_&&m<w.seconds).length,M=_?rs.length+1-f:4,E=cu(M,l),y=v0[M-1]??70;w0(e,{payout:E,rank:y,clean:_}),i.sync(),i.showRace(null);const A=E-l,b=A>0?`+${A}`:String(A);i.showResult({place:M,time:_?m:null,stake:l,payout:E,netLabel:b,title:O0(M),line:z0(M)}),i.toast(M===1?"Rango settimanale aggiornato.":`Chiudi ${M}°. Rango ${e.weekRank}.`)}return{locksWorld:()=>o==="countdown"||o==="racing"||o==="result",isRacing:()=>o==="racing",start(_){if(o!=="idle")return;if(!_.playable){i.toast(`${_.name} non è in questa anteprima. Si corre Ostacoli.`);return}if(e.coins<_.demoStake){i.toast(`Servono ${_.demoStake} monete. Nel portafoglio: ${e.coins}.`);return}l=_.demoStake,a=3,c=0,o="countdown";const m=on[0],f=on[1]??m;m&&f&&r.teleport(m.x,m.y,m.z,f.x-m.x,f.y-m.y,f.z-m.z),p(0),i.showResult(null),i.showRace({title:"Ostacoli · demo",time:"3",hint:"Via tra poco. Le frecce ambra segnano i varchi.",canQuit:!0,lock:!0})},update(_){if(o==="idle"||o==="result")return;const m=Math.min(_,.05);if(o==="countdown"){a-=m;const y=Math.max(1,Math.ceil(a));if(i.showRace({title:"Ostacoli · demo",time:a>0?String(y):"Via!",hint:"Tieni il pollice in alto sul pad per andare avanti.",canQuit:!0,lock:!0}),a<=0){if(!b0(e,l)){d("Monete insufficienti. La corsa non parte."),i.sync();return}i.sync(),o="racing",c=0}return}c+=m,p(c),i.showRace({title:"Ostacoli · demo",time:`${c.toFixed(1)}s`,hint:F0(c),canQuit:!0,lock:!1});const f=r.x-pe.x,M=r.y-pe.y,E=r.z-pe.z;f*f+M*M+E*E<=pe.r*pe.r?g(!0,c):c>=y0&&g(!1,c)}}}function F0(n){const t=rs.find(e=>e.seconds>=n);return t?`${t.name} chiude in ${t.seconds.toFixed(1)}s. Tu ${n.toFixed(1)}s.`:"Sei davanti a tutti. Chiudi sul cerchio ciano."}function O0(n){return n===1?"Primo posto":n===2?"Secondo posto":n===3?"Terzo posto":"Fuori tempo"}function z0(n){return n===1?"Il montepremi grosso è tuo. Rami arriva dopo.":n===2?"Qualcosa torna. Rami era già al cerchio.":n===3?"La puntata si è assottigliata.":"Ultimo. La puntata resta sul tavolo."}function B0(n){let t=0;for(let e=1;e<n.length;e++){const i=n[e-1],r=n[e];!i||!r||(t+=Math.hypot(r.x-i.x,r.y-i.y,r.z-i.z))}return t}function k0(n,t){let e=t;for(let r=1;r<n.length;r++){const s=n[r-1],o=n[r];if(!s||!o)continue;const a=o.x-s.x,c=o.y-s.y,l=o.z-s.z,u=Math.hypot(a,c,l)||1e-4;if(e<=u||r===n.length-1){const d=Math.min(1,e/u);return{x:s.x+a*d,y:s.y+c*d,z:s.z+l*d,dx:a,dy:c,dz:l}}e-=u}const i=n[n.length-1]??{x:0,y:Xt,z:0};return{x:i.x,y:i.y,z:i.z,dx:1,dy:0,dz:0}}function H0(n,t){const e=new Dn,i=_e(n,t),r=new ut(new _a(.14,.72,2,6),i);r.position.y=.86;const s=new ut(new Ve(.13,6,5),_e(n,16769220));return s.position.y=1.48,e.add(r,s),e.scale.setScalar(.2),e}const V0=[.02,.05,.04,.1,.16,.05];function ra(n,t,e){const i=Math.hypot(n,t,e)||1,r=n/i*Xt,s=t/i*Xt,o=e/i*Xt,a=Math.acos(Math.min(1,Math.max(-1,s/Xt))),c=Math.atan2(r,o),l=Math.min(1,a/.18,(Math.PI-a)/.18),u=Il(r,o),h=.09+(V0[u]??0)*.45+Math.sin(c*2+.4)*Math.sin(a*1.35)*.09+Math.sin(c*3.1-a*1.8)*.045,p=Math.max(.015,Math.min(.28,h))*l,g=Math.max(Fl(r,s,o),Yl(r,s,o));return p*(1-g)}function pi(n,t,e){const i=Math.hypot(n,t,e)||1,r=(Xt+ra(n,t,e))/i;return{x:n*r,y:t*r,z:e*r}}const Wc=1.35,Xc=3;function G0(n){const t=[W0(),...X0()],e=new qi(Y0(),new se({color:16777215}),Math.max(1,t.length));return e.frustumCulled=!1,n.add(e),qc(e,t,0),{update(i,r,s,o){let a=!1;for(const c of t){if(c.taken||s.claimed.has(c.id)){c.taken=!0;continue}const l=r.x-c.x,u=r.y-c.y,d=r.z-c.z;l*l+u*u+d*d>Wc*Wc||(c.taken=!0,s.claimed.add(c.id),Ss(s,Xc),a=!0,o.sync(),o.toast(`+${Xc} sul sentiero`),navigator.vibrate?.(8))}(a||t.some(c=>!c.taken))&&qc(e,t,i)}}}function W0(){const n=Me(0),t=re(.26,n,0,.85),e=pi(t.x,t.y,t.z),i=Ee(t.x,t.y,t.z,Math.cos(n),0,-Math.sin(n));return{id:"moneta-via",x:e.x,y:e.y,z:e.z,qx:i.x,qy:i.y,qz:i.z,qw:i.w,taken:!1}}function X0(){const n=[],t=[.46,.7,1.18,1.92,2.32];let e=0;for(let i=0;i<6;i+=1){const r=Me(i);for(const s of t){const o=re(s,r,0,i%2===0?1.65:-1.65);if(q0(o.x,o.y,o.z))continue;const a=pi(o.x,o.y,o.z),c=Ee(o.x,o.y,o.z,Math.cos(r),0,-Math.sin(r));n.push({id:`moneta-${e}`,x:a.x,y:a.y,z:a.z,qx:c.x,qy:c.y,qz:c.z,qw:c.w,taken:!1}),e+=1}}return n}function q0(n,t,e){if($l(n,t,e)||Ea(n,t,e,3.2))return!0;for(const o of Ms){const a=n-o.x,c=t-o.y,l=e-o.z;if(a*a+c*c+l*l<49)return!0}const i=n-pe.x,r=t-pe.y,s=e-pe.z;return i*i+r*r+s*s<25}function qc(n,t,e){for(let i=0;i<t.length;i+=1){const r=t[i];if(!r)continue;const s=r.taken?0:.85+Math.sin(e*3.2+i)*.08,o=r.taken?.001:s;$i(n,i,r.x,r.y,r.z,o,o,o,r.qx,r.qy,r.qz,r.qw,15769658)}Ki(n)}function Y0(){const n=new In(.22,0);return n.translate(0,.55,0),n}const Yc=.0052;function $0(n,t){const e=new Set;let i=0,r=.4,s=!1,o=!1,a=!1,c=0,l=0;const u=document.createElement("div");u.className="stick",u.innerHTML='<div class="stick-knob"></div><span>cammina</span>';const d=u.querySelector(".stick-knob"),h=u.querySelector("span");if(!d||!h)throw new Error("levetta incompleta");const p=document.createElement("button");p.type="button",p.className="jump",p.textContent="Salta",p.setAttribute("aria-label","Salta"),t.append(u,p);let g=-1,_=0,m=0,f=0,M=0;const E=(R,F)=>{const H=Math.hypot(R,F)||1,Y=Math.min(46,H);f=R/H*Y,M=F/H*Y,d.style.transform=`translate(${f}px, ${M}px)`};u.addEventListener("pointerdown",R=>{R.preventDefault(),R.stopPropagation(),g=R.pointerId,_=R.clientX,m=R.clientY,u.setPointerCapture(R.pointerId),u.classList.add("on")}),u.addEventListener("pointermove",R=>{R.pointerId===g&&(R.preventDefault(),E(R.clientX-_,R.clientY-m))});const y=R=>{R.pointerId===g&&(g=-1,f=0,M=0,d.style.transform="translate(0px, 0px)",u.classList.remove("on"))};u.addEventListener("pointerup",y),u.addEventListener("pointercancel",y),p.addEventListener("pointerdown",R=>{R.preventDefault(),R.stopPropagation(),a||(o=!0),a=!0,p.classList.add("on")});const A=()=>{a=!1,p.classList.remove("on")};p.addEventListener("pointerup",A),p.addEventListener("pointercancel",A),p.addEventListener("pointerleave",A);const b=(R,F)=>{F&&!R.repeat&&(R.code==="KeyE"||R.code==="KeyF")&&(s=!0),F&&!R.repeat&&R.code==="Space"&&(o=!0),F?e.add(R.code):e.delete(R.code),(R.code==="Space"||R.code.startsWith("Arrow"))&&R.preventDefault()};window.addEventListener("keydown",R=>b(R,!0)),window.addEventListener("keyup",R=>b(R,!1)),window.addEventListener("blur",()=>{e.clear(),g=-1,f=0,M=0,d.style.transform="translate(0px, 0px)",a=!1});let w=!1,I=0,v=0;const x=R=>{if(R.button!==0)return;const F=R.target;F instanceof Element&&F.closest("button, .stick, .sheet, .panel, .atlas")||(w=!0,I=R.clientX,v=R.clientY,R.currentTarget instanceof Element&&R.currentTarget.setPointerCapture(R.pointerId))},L=R=>{const F=document.pointerLockElement===n;if(!w&&!F)return;const O=F?R.movementX:R.clientX-I,H=F?R.movementY:R.clientY-v;I=R.clientX,v=R.clientY,c+=O,l+=H},D=()=>{w=!1};return n.addEventListener("pointerdown",x),n.addEventListener("pointermove",L),n.addEventListener("pointerup",D),n.addEventListener("pointercancel",D),t.addEventListener("pointerdown",R=>{R.target===t&&x(R)}),t.addEventListener("pointermove",L),{get yaw(){return i},get pitch(){return r},sample(R){e.has("KeyQ")&&(i+=R*1.6),e.has("KeyR")&&(i-=R*1.6),i-=c*Yc,r=Math.min(1.05,Math.max(.22,r+l*Yc*.85)),c=0,l=0;const F=Math.hypot(f,M)/46;let O=f/46,H=-M/46;const Y=e.has("KeyA")||e.has("ArrowLeft")||e.has("KeyD")||e.has("ArrowRight")||e.has("KeyW")||e.has("ArrowUp")||e.has("KeyS")||e.has("ArrowDown");(e.has("KeyA")||e.has("ArrowLeft"))&&(O-=1),(e.has("KeyD")||e.has("ArrowRight"))&&(O+=1),(e.has("KeyW")||e.has("ArrowUp"))&&(H+=1),(e.has("KeyS")||e.has("ArrowDown"))&&(H-=1);const B=Math.hypot(O,H);B>1&&(O/=B,H/=B);const Q=e.has("ShiftLeft")||e.has("ShiftRight"),ot=F>=.82||Q&&Y;u.classList.toggle("run",F>=.82),h.textContent=F>=.82?"corri":"cammina";const xt=o,Rt=s;return o=!1,s=!1,{strafe:O,forward:H,run:ot,jump:xt,interact:Rt}},pokeInteract(){s=!0},pokeJump(){o=!0},setYaw(R,F){i=R,F!==void 0&&(r=F)}}}const Di={x:0,y:0,z:0};function K0(n,t,e,i,r,s){let o=n,a=t,c=e;const l=Math.hypot(o,a,c)||1;o/=l,a/=l,c/=l;for(let d=0;d<3;d++)for(const h of s){if(i>=h.h-.02)continue;const p=Math.hypot(h.x,h.y,h.z)||1,g=h.x/p,_=h.y/p,m=h.z/p,f=Math.min(1,Math.max(-1,o*g+a*_+c*m)),M=Math.acos(f)*Xt,E=r+h.r;if(M>=E)continue;let y=g-o*f,A=_-a*f,b=m-c*f;const w=Math.hypot(y,A,b);w<1e-6?(y=1,A=0,b=0):(y/=w,A/=w,b/=w);const I=(E-M)/Xt;o-=y*I,a-=A*I,c-=b*I;const v=Math.hypot(o,a,c)||1;o/=v,a/=v,c/=v}const u=Xt+i;return Di.x=o*u,Di.y=a*u,Di.z=c*u,{x:Di.x,y:Di.y,z:Di.z}}const Z0=2.35,j0=4.7,J0=27,Q0=5.15,t_=3.85,e_=.09,n_=1/90,i_=9,Bt=new N,fn=new N,$c=new N,Yr=new vn,io=new N;function r_(n,t,e){let i=Oi.x,r=Oi.y,s=Oi.z,o=0,a=0,c=0,l=!0,u=!1,d=!0,h=0,p=!1,g="idle",_=Xt;const m=new N(zi.x,zi.y,zi.z).normalize(),f=m.clone(),M=new N(i,r,s).normalize(),E=s_(n,t),y=new ut(new xa(.1,12),new se({color:1713200,transparent:!0,opacity:.28,depthWrite:!1}));n.add(y);const A=(x=0)=>{Bt.set(i,r,s).normalize();const L=Math.hypot(i,r,s);E.position.copy(Bt).multiplyScalar(L+x),_=L+x,E.quaternion.copy(Ee(Bt.x,Bt.y,Bt.z,f.x,f.y,f.z)),y.position.copy(Bt).multiplyScalar(Math.max(Xt,L-o)+.03),Yr.setFromUnitVectors(io.set(0,0,1),Bt),y.quaternion.copy(Yr),y.scale.setScalar(1-Math.min(.45,o*.28))};A();const b={get x(){return i},get y(){return r},get z(){return s},get gait(){return g},get radius(){return _},update(x,L,D){const R=e.sample(Math.min(x,.05));!D&&R.interact&&(p=!0);const F=!D&&R.jump;F||(u=!1);const O=!D&&R.run;let H=Math.min(x,.05);for(;H>0;){const ot=Math.min(n_,H);H-=ot,I(ot,L,D?0:R.strafe,D?0:R.forward,F,O)}const Y=!D&&l&&Math.abs(R.strafe)+Math.abs(R.forward)>.08,B=Y&&O;Y&&(c+=x*(B?15.5:7.6));const Q=Y?Math.sin(c*2)*(B?.02:.01):0;!l&&o>.08?g="air":B?g="run":Y?g="walk":g="idle",A(Q),h=Math.max(0,h-x*2.6),v(g,h)},consumeInteract(){const x=p;return p=!1,x},syncCamera(x,L){const D=1-Math.exp(-L*i_);Bt.set(i,r,s).normalize(),M.lerp(Bt,D).normalize(),w(fn);const R=window.innerHeight>window.innerWidth,F=R?3.15:3.7,O=Math.cos(e.pitch)*F,H=Math.hypot(i,r,s);x.fov=R?70:60,x.updateProjectionMatrix(),x.position.copy(M).multiplyScalar(H).addScaledVector(M,.7+Math.sin(e.pitch)*F*.72).addScaledVector(fn,-O),x.up.copy(M),io.copy(M).multiplyScalar(H).addScaledVector(M,.2).addScaledVector(fn,1.45),x.lookAt(io)},aim(){return w(fn),{x:fn.x,y:fn.y,z:fn.z}},teleport(x,L,D,R,F,O){Bt.set(x,L,D).normalize(),o=0,a=0,l=!0,d=!0,h=0;const H=Xt+ra(Bt.x,Bt.y,Bt.z);i=Bt.x*H,r=Bt.y*H,s=Bt.z*H,m.set(R,F,O),m.addScaledVector(Bt,-m.dot(Bt)),m.lengthSq()<1e-6&&m.set(1,0,0).addScaledVector(Bt,-Bt.x),m.normalize(),f.copy(m),e.setYaw(0,.4),M.copy(Bt),A()}};function w(x){Bt.set(i,r,s).normalize(),Yr.setFromAxisAngle(Bt,e.yaw),x.copy(m).applyQuaternion(Yr),x.addScaledVector(Bt,-x.dot(Bt)),x.lengthSq()<1e-6&&x.set(0,0,1),x.normalize()}function I(x,L,D,R,F,O){if(Bt.set(i,r,s).normalize(),w(fn),$c.crossVectors(fn,Bt).normalize(),D!==0||R!==0){f.copy($c).multiplyScalar(D).addScaledVector(fn,R);const Q=Math.min(1,f.length());f.normalize();const ot=O?j0:Z0;i+=f.x*ot*x*Q,r+=f.y*ot*x*Q,s+=f.z*ot*x*Q}const H=K0(i,r,s,o,e_,L);i=H.x,r=H.y,s=H.z,Bt.set(i,r,s).normalize(),m.addScaledVector(Bt,-m.dot(Bt)),m.lengthSq()<1e-6&&m.set(1,0,0).addScaledVector(Bt,-Bt.x),m.normalize(),f.addScaledVector(Bt,-f.dot(Bt)),f.lengthSq()<1e-6?f.copy(m):f.normalize(),F&&!u&&(l?(a=Q0,o=.04,l=!1,d=!0,u=!0):d&&(a=t_,d=!1,h=1,u=!0)),a-=J0*x,o+=a*x,o<=0?(o=0,a=0,l=!0,d=!0):l=!1,Bt.set(i,r,s).normalize();const Y=ra(Bt.x,Bt.y,Bt.z),B=Xt+Y+o;i=Bt.x*B,r=Bt.y*B,s=Bt.z*B}return b;function v(x,L){const D=x==="air",R=x==="run",F=x==="walk",O=R?Math.sin(c)*1.5:F?Math.sin(c)*.72:0,H=E.getObjectByName("legL"),Y=E.getObjectByName("legR"),B=E.getObjectByName("armL"),Q=E.getObjectByName("armR"),ot=E.getObjectByName("torso"),xt=E.getObjectByName("cape"),Rt=E.getObjectByName("puff");if(H&&Y&&(H.rotation.x=D?.7:O,Y.rotation.x=D?-.45:-O),B&&Q){const Wt=R?1.2:.62,tt=D?L>.05?-1.45:-.85:0;B.rotation.x=D?tt:O*Wt,Q.rotation.x=D?tt:-O*Wt,B.rotation.z=R?.35:.08,Q.rotation.z=R?-.35:-.08}if(ot&&(ot.rotation.x=D?-.22:R?.42:F?.14:0),xt){const Wt=R?1.05+Math.sin(c*2)*.22:F?.28+Math.sin(c)*.16:.1;xt.rotation.x=D?.85:Wt}Rt instanceof ut&&Rt.material instanceof se&&(Rt.material.opacity=L*.9,Rt.scale.setScalar(.55+(1-L)*1.7))}}function s_(n,t){const e=new Dn,i=_e(t,1929168),r=_e(t,16769220),s=_e(t,1321018),o=_e(t,1195910),a=new ut(new Qt(.12,.16,.62,6),i);a.name="torso",a.position.y=1.22,e.add(a);const c=new ut(new Qt(.045,.05,.12,5),r);c.position.y=1.58,e.add(c);const l=new ut(new Ve(.145,8,6),r);l.position.y=1.74,e.add(l);const u=new ut(new Kt(.22,.055,.07),_e(t,15769658));u.position.set(0,1.76,.11),e.add(u);const d=new ut(new Kt(.16,.28,.08),s);d.position.set(0,1.24,-.16),e.add(d);const h=new ut(new Kt(.18,.46,.03),o);h.name="cape",h.position.set(0,1.18,-.2),h.geometry.translate(0,-.18,0),e.add(h),e.add($r("legL",-.09,.88,.78,.045,i)),e.add($r("legR",.09,.88,.78,.045,i)),e.add($r("armL",-.2,1.46,.58,.032,i)),e.add($r("armR",.2,1.46,.58,.032,i));const p=new ut(new Ye(.95,.07,5,14),new se({color:16171338,transparent:!0,opacity:0,depthWrite:!1}));return p.name="puff",p.rotation.x=Math.PI/2,p.position.y=.12,e.add(p),e.scale.setScalar(.2),n.add(e),e}function $r(n,t,e,i,r,s){const o=new Dn;o.name=n,o.position.set(t,e,0);const a=new ut(new Qt(r*.85,r,i,5),s);return a.position.y=-i/2,o.add(a),o}const lu=15978672;function o_(){const n=new Ve(1,20,12),t=n.attributes.position;if(!t)throw new Error("cielo senza posizioni");const e=new Float32Array(t.count*3),i=new Vt(7181270),r=new Vt(lu),s=new Vt(16756858),o=new Vt;for(let c=0;c<t.count;c++){const l=t.getY(c),u=t.getX(c),d=t.getZ(c),h=Sh.clamp((l+.12)/1.12,0,1);o.copy(r).lerp(i,h*h);const p=Math.max(0,-d*.7+u*.45)*Math.max(0,1-Math.abs(l)*2.4);o.lerp(s,p*.78),e[c*3]=o.r,e[c*3+1]=o.g,e[c*3+2]=o.b}n.setAttribute("color",new De(e,3));const a=new ut(n,new se({vertexColors:!0,side:Be,fog:!1,depthWrite:!1}));return a.scale.setScalar(180),a.frustumCulled=!1,a.renderOrder=-1,a}const Kc=lu,Zc=.5;function a_(n){const t=n.getContext("webgl2",{antialias:!1,alpha:!1,depth:!0,stencil:!1,powerPreference:"high-performance"});if(!t)throw new Error("Serve WebGL2 per Minimondo.");const e=new Vg({canvas:n,context:t,antialias:!1,alpha:!1,powerPreference:"high-performance"});e.setPixelRatio(1),e.outputColorSpace=qe,e.toneMapping=Un,e.setClearColor(Kc,1),e.autoClear=!0;const i=new nc;i.fog=new ma(Kc,16,74),i.add(new ed(16771012,13218714,.7));const r=new cc(16769712,1.25);r.position.set(-16,11,9),i.add(r);const s=new cc(10401496,.34);s.position.set(14,6,-12),i.add(s);const o=new rn(62,1,.05,420),a=new Yn(2,2,{depthBuffer:!0,stencilBuffer:!1,generateMipmaps:!1,minFilter:Pe,magFilter:Pe});a.texture.colorSpace=qe;const c=new va(-1,1,1,-1,0,1);c.position.z=1;const l=new se({map:a.texture});l.toneMapped=!1;const u={value:new qt(1,1)};l.onBeforeCompile=g=>{g.uniforms.uRes=u,g.fragmentShader=g.fragmentShader.replace("#include <common>",`#include <common>
uniform vec2 uRes;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
        vec2 vigP = gl_FragCoord.xy / uRes - 0.5;
        float vig = smoothstep(0.16, 0.62, dot(vigP, vigP));
        gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * vec3(1.06, 0.94, 0.78), 0.28);
        gl_FragColor.rgb *= mix(1.0, 0.72, vig);`)};const d=new nc;return d.add(new ut(new yr(2,2),l)),{renderer:e,scene:i,camera:o,resize:()=>{const g=Math.max(1,n.clientWidth),_=Math.max(1,n.clientHeight);e.setSize(g,_,!1),a.setSize(Math.max(2,Math.floor(g*Zc)),Math.max(2,Math.floor(_*Zc))),o.aspect=g/_,o.updateProjectionMatrix(),u.value.set(g,_)},render:()=>{e.setRenderTarget(a),e.render(i,o),e.setRenderTarget(null),e.render(d,c)}}}const c_={pole:"#f0a03a",hub:"#f6f1e6",village:"#f6f1e6",biome:"#9ad7c4",games:"#e39a32",venue:"#f06a45",lookout:"#7ec8ee"};function l_(n){const t=document.createElement("button");t.type="button",t.className="ghost",t.textContent="Mappa",t.setAttribute("aria-expanded","false");const e=document.createElement("div");e.className="atlas",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Mappa di Mondo-1"),e.innerHTML=`
    <div class="sheet map-sheet">
      <header class="sheet-head">
        <div>
          <p class="eyebrow">Mondo-1 · nord al centro</p>
          <h2>Mappa</h2>
        </div>
        <button type="button" class="ghost" id="map-close">Chiudi</button>
      </header>
      <canvas class="map-canvas" width="640" height="640" aria-label="Pianeta con i luoghi"></canvas>
      <p class="map-caption" id="map-caption">Il faro è il centro. Il triangolo sei tu.</p>
      <ul class="map-list"></ul>
    </div>
  `,n.append(e);const i=e.querySelector("canvas"),r=e.querySelector("#map-caption"),s=e.querySelector("ul"),o=e.querySelector("#map-close");if(!i||!r||!s||!o)throw new Error("mappa incompleta");const a=i.getContext("2d");if(!a)throw new Error("mappa senza canvas");const c=a;let l=!1,u=!0,d="";for(const p of ia){if(p.kind==="biome")continue;const g=document.createElement("li"),_=document.createElement("button");_.type="button",_.className="map-chip",_.textContent=p.name,_.addEventListener("click",()=>{d=p.id,r.textContent=`${p.name}. Il triangolo indica dove guardi.`}),g.append(_),s.append(g)}const h=p=>{p&&!u||(l=p,e.hidden=!l,t.setAttribute("aria-expanded",String(l)),t.classList.toggle("on",l))};return t.addEventListener("click",()=>h(!l)),o.addEventListener("click",()=>h(!1)),e.addEventListener("click",p=>{p.target===e&&h(!1)}),{isOpen:()=>l,toggle:()=>h(!l),close:()=>h(!1),setEnabled(p){u=p,t.disabled=!p,p||h(!1)},draw(p,g,_,m,f,M){if(!l)return;const E=Math.min(640,Math.floor(Math.min(window.innerWidth,window.innerHeight)*.92));if(i.width!==E&&(i.width=E,i.height=E),u_(c,E,p,g,_,m,f,M,d),d){const y=ia.find(A=>A.id===d);if(y){const A=xs(p,g,_),b=f_(A.colat,A.az,y.colat,y.az)*Xt;r.textContent=`${y.name} · circa ${Math.round(b)} m`}}},button:t}}function u_(n,t,e,i,r,s,o,a,c){const l=t/2,u=t/2,d=t*.4;n.clearRect(0,0,t,t),n.fillStyle="#10241c",n.beginPath(),n.arc(l,u,d+8,0,Math.PI*2),n.fill();for(let m=0;m<we.length;m+=1){const f=we[m];if(!f)continue;const M=Me(m)-Math.PI/we.length,E=Me(m)+Math.PI/we.length;n.beginPath(),n.moveTo(l,u);for(let y=0;y<=8;y+=1){const A=M+(E-M)*y/8,b=sr(Math.PI,A,l,u,d);n.lineTo(b.x,b.y)}n.closePath(),n.fillStyle=p_(f.ground),n.fill()}n.strokeStyle="rgba(255, 241, 208, 0.85)",n.lineWidth=3,n.beginPath();const h=1.02/Math.PI*d;n.arc(l,u,h,0,Math.PI*2),n.stroke(),n.strokeStyle="rgba(74, 59, 56, 0.9)",n.lineWidth=2;for(let m=0;m<we.length;m+=1){const f=Me(m)-Math.PI/we.length,M=sr(Math.PI*.92,f,l,u,d);n.beginPath(),n.moveTo(l,u),n.lineTo(M.x,M.y),n.stroke()}n.font="600 13px Outfit, sans-serif",n.textAlign="center",n.textBaseline="middle";for(const m of ia){const f=sr(m.colat,m.az,l,u,d),M=m.id===c;n.fillStyle="#10241c",n.beginPath(),n.arc(f.x,f.y,m.kind==="biome"?4:8,0,Math.PI*2),n.fill(),n.fillStyle=M?"#ffffff":c_[m.kind],n.beginPath(),n.arc(f.x,f.y,m.kind==="biome"?2.5:5.5,0,Math.PI*2),n.fill();const E=h_(m);E&&(n.font="700 12px Outfit, sans-serif",n.lineWidth=3,n.strokeStyle="rgba(16, 36, 28, 0.9)",n.fillStyle="#f6f1e6",n.strokeText(E,f.x,f.y-12),n.fillText(E,f.x,f.y-12))}const p=xs(e,i,r),g=sr(p.colat,p.az,l,u,d),_=d_(e+s*8,i+o*8,r+a*8,l,u,d);n.strokeStyle="#f0a03a",n.lineWidth=3,n.beginPath(),n.moveTo(g.x,g.y),n.lineTo(_.x,_.y),n.stroke(),n.fillStyle="#f0a03a",n.beginPath(),n.moveTo(_.x,_.y),n.lineTo(g.x-(_.y-g.y)*.35,g.y+(_.x-g.x)*.35),n.lineTo(g.x+(_.y-g.y)*.35,g.y-(_.x-g.x)*.35),n.closePath(),n.fill(),n.fillStyle="#10241c",n.beginPath(),n.arc(g.x,g.y,4,0,Math.PI*2),n.fill()}function h_(n){return n.kind==="biome"||n.kind==="pole"?null:n.kind==="hub"?"Città":n.id==="quarter"?"Case":n.kind==="games"?"Giochi":n.kind==="venue"?"Ostacoli":n.kind==="lookout"?"Belvedere":n.id==="mint"?"Menta":n.id==="violet"?"Viola":n.id==="crystal-town"?"Cristallo":n.id==="lantern"?"Lanterne":n.name}function sr(n,t,e,i,r){const s=Math.min(1,Math.max(0,n/Math.PI))*r;return{x:e+Math.sin(t)*s,y:i-Math.cos(t)*s}}function d_(n,t,e,i,r,s){const o=xs(n,t,e);return sr(o.colat,o.az,i,r,s)}function f_(n,t,e,i){const r=Math.sin(n),s=Math.sin(e),o=Math.cos(n)*Math.cos(e)+r*s*Math.cos(t-i);return Math.acos(Math.min(1,Math.max(-1,o)))}function p_(n){return`#${n.toString(16).padStart(6,"0")}`}function m_(n,t,e){n.innerHTML="";const i=window.matchMedia("(pointer: coarse)").matches,r=Rn("section","status");r.innerHTML=`
    <p class="mark">Minimondo</p>
    <p class="world">${kc}</p>
    <p class="coins"><span>monete</span> <strong id="coins">0</strong></p>
    <p class="rank">settimana ${g_(new Date)} · rango <strong id="rank">—</strong></p>
  `;const s=l_(n),o=Rn("div","tools"),a=ro("Giochi","primary");a.setAttribute("aria-expanded","false"),o.append(s.button,a);const c=Rn("div","coach");c.innerHTML=`
    <p>La città è avanti, verso il palo. Levetta a fondo per correre.</p>
    <strong>${i?"Mappa in alto a destra. I paesi stanno negli spicchi.":"Shift corre. M apre la mappa. I paesi stanno negli spicchi."}</strong>
  `;const l=Rn("p","hint");l.textContent=i?"Levetta a fondo per correre · dito sul mondo per girare · Salta due volte":"WASD cammina · Shift corre · M mappa · E raccoglie · spazio, due salti";const u=ro("","prompt");u.hidden=!0;const d=Rn("div","toasts"),h=Rn("section","race");h.hidden=!0,h.innerHTML=`
    <p class="race-kicker"></p>
    <p class="race-time"></p>
    <p class="race-hint"></p>
    <button type="button" class="ghost" id="race-quit">Abbandona</button>
  `;const p=Rn("div","result");p.hidden=!0,p.innerHTML=`
    <div class="sheet result-sheet">
      <p class="eyebrow">Risultato · sessione locale</p>
      <h2 id="res-title"></h2>
      <p id="res-line"></p>
      <p class="math" id="res-math"></p>
      <button type="button" class="primary wide" id="res-close">Torna in piazza</button>
    </div>
  `;const g=Rn("div","panel");g.hidden=!0,g.setAttribute("role","dialog"),g.setAttribute("aria-modal","true"),g.setAttribute("aria-labelledby","events-title"),g.innerHTML=`
    <div class="sheet">
      <header class="sheet-head">
        <div>
          <p class="eyebrow">${kc} · proto ${u0}</p>
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
  `,n.append(r,o,c,l,u,d,h,p,g);const _=We(r,"#coins"),m=We(r,"#rank"),f=We(g,"#wallet"),M=We(g,".modes"),E=We(g,".buyin"),y=We(g,"#events-close"),A=We(g,"#buy-back"),b=We(g,"#buy-go"),w=We(h,"#race-quit"),I=We(p,"#res-close"),v=We(h,".race-kicker"),x=We(h,".race-time"),L=We(h,".race-hint");let D=null,R=!1,F=!1,O=()=>{},H=()=>{},Y="";for(const tt of x0){const Dt=document.createElement("li"),q=ro("","mode");q.innerHTML=`
      <span>
        <strong>${tt.name}</strong>
        <em>${tt.players} giocatori · ${tt.playable?"demo pronta":"presto"}</em>
      </span>
      <b>${tt.demoStake}</b>
    `,q.addEventListener("click",()=>xt(tt)),Dt.append(q),M.append(Dt)}const B=tt=>{if(tt&&(F||!h.hidden||R)){Rt("Prima chiudi la corsa.");return}g.hidden=!tt,a.setAttribute("aria-expanded",String(tt)),a.classList.toggle("on",tt),tt&&ot()};a.addEventListener("click",()=>{g.hidden&&s.close(),B(g.hidden)}),s.button.addEventListener("click",()=>{s.isOpen()&&B(!1)}),y.addEventListener("click",()=>B(!1)),g.addEventListener("click",tt=>{tt.target===g&&B(!1)}),A.addEventListener("click",ot),b.addEventListener("click",()=>{if(!D)return;if(t.coins<D.demoStake){Rt(`Ti servono ${D.demoStake} monete. Ne hai ${t.coins}.`);return}if(!D.playable){Rt(D.id==="giro"?"Il giro non si punta: visita le sei mete.":`${D.name} arriva dopo. Oggi si corre Ostacoli.`);return}const tt=D;B(!1),e.onStartDemo(tt)}),w.addEventListener("click",()=>O()),I.addEventListener("click",()=>{p.hidden=!0,R=!1,H()}),window.addEventListener("keydown",tt=>{tt.repeat||(tt.code==="KeyM"&&s.toggle(),tt.code==="Escape"&&p.hidden&&(s.close(),B(!1)))}),u.addEventListener("click",()=>{e.onInteract(),u.blur()});const Q=()=>c.classList.add("gone");window.setTimeout(Q,7e3),window.addEventListener("pointerdown",Q,{once:!0}),window.addEventListener("keydown",Q,{once:!0});function ot(){M.hidden=!1,E.hidden=!0,D=null}function xt(tt){D=tt,M.hidden=!0,E.hidden=!1,An(E,"#buy-kicker",tt.playable?"Demo locale · 4 corridori":"Non ancora in anteprima"),An(E,"#buy-name",tt.name),An(E,"#buy-blurb",tt.blurb),An(E,"#buy-stake",String(tt.demoStake));const Dt=We(E,"#buy-payout");Dt.innerHTML="",tt.playable?(au.forEach((q,j)=>{const gt=document.createElement("li");gt.innerHTML=`<span>${j+1}°</span><b>${cu(j+1,tt.demoStake)}</b>`,gt.dataset.mult=String(q),Dt.append(gt)}),An(E,"#buy-note","La puntata esce quando parte il via. 1° prende il grosso, 4° non riprende nulla."),b.textContent="Entra (demo)"):(An(E,"#buy-note",`In sala vera la puntata va da ${tt.min} a ${tt.max}. Qui il tasto non apre la stanza.`),b.textContent="Entra (demo)")}function Rt(tt){const Dt=Rn("p","toast");for(Dt.textContent=tt,d.append(Dt);d.children.length>3;)d.firstElementChild?.remove();window.setTimeout(()=>Dt.classList.add("out"),3200),window.setTimeout(()=>Dt.remove(),3700)}function Wt(){_.textContent=String(t.coins),f.textContent=String(t.coins),m.textContent=t.weekRank===null?"—":String(t.weekRank),_.classList.remove("pop"),_.offsetWidth,_.classList.add("pop")}return{blocksPlay:()=>s.isOpen()||!g.hidden||R||F,openBoard(){s.close(),B(!0)},paintMap(tt,Dt,q,j,gt,Pt){s.draw(tt,Dt,q,j,gt,Pt)},toast:Rt,setPrompt(tt){const Dt=tt??"";Dt!==Y&&(Y=Dt,u.hidden=Dt.length===0,u.textContent=Dt)},sync:Wt,showRace(tt){if(!tt){h.hidden=!0,F=!1,a.disabled=R,s.setEnabled(!R);return}h.hidden=!1,F=tt.lock,a.disabled=!0,s.close(),s.setEnabled(!1),v.textContent=tt.title,x.textContent=tt.time,L.textContent=tt.hint,w.hidden=!tt.canQuit},showResult(tt){if(!tt){p.hidden=!0,R=!1,a.disabled=!1,s.setEnabled(!0);return}R=!0,p.hidden=!1,s.close(),s.setEnabled(!1),h.hidden=!0,F=!1,a.disabled=!0,An(p,"#res-title",tt.title),An(p,"#res-line",tt.time===null?tt.line:`${tt.line} Tempo ${tt.time.toFixed(1)}s.`),An(p,"#res-math",`Puntata ${tt.stake} · incasso ${tt.payout} · netto ${tt.netLabel}`)},onAbandon(tt){O=tt},onResultClose(tt){H=tt}}}function An(n,t,e){const i=n.querySelector(t);i&&(i.textContent=e)}function We(n,t){const e=n.querySelector(t);if(!e)throw new Error(`manca ${t}`);return e}function Rn(n,t){const e=document.createElement(n);return e.className=t,e}function ro(n,t){const e=document.createElement("button");return e.type="button",e.className=t,e.textContent=n,e}function g_(n){const t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate())),e=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-e);const i=new Date(Date.UTC(t.getUTCFullYear(),0,1));return Math.ceil(((t.getTime()-i.getTime())/864e5+1)/7)}function __(n,t,e){let i=Math.imul(n|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,1442695041);return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,i=Math.imul(i,2246822519),i^=i>>>13,i>>>0}const ye=(n,t,e)=>__(n,t,e)/4294967296;function x_(n){let t=2166136261;for(let e=0;e<n.length;e+=1)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}const Kr=x_("Mondo-1"),jc=[14131344,12048326,13350630,12051690,15189402,15184072];function v_(n,t,e){const i=[],r=[],s=[],o=[],a=[],c=[],l=[];for(let u=0;u<6;u+=1){const d=Me(u),h=[];for(let p=0;p<168;p+=1){const g=d+(ye(u,p,Kr)-.5)*.9,_=.26+ye(p,u,Kr^17)*2.4;if(Zr(_,g,.35))continue;const m=.85+ye(u,p,4)*.85;if(h.push(jr(_,g,m,Jc(u,p))),p%4===0){const f=re(_,g,(ye(p,u,21)-.5)*1.6,(ye(u,p,27)-.5)*1.6),M=Math.hypot(f.x,f.y,f.z)||1,E=Math.acos(Math.min(1,Math.max(-1,f.y/M))),y=Math.atan2(f.x,f.z);Zr(E,y,.35)||h.push(jr(E,y,m*.72,Jc(u,p+9)))}}for(let p=0;p<18;p+=1){const g=d+(ye(u+20,p,Kr)-.5)*.8,_=.4+ye(p,u+3,Kr)*2.1;if(Zr(_,g,3.5))continue;const m=.55+ye(u,p,9)*1.35,f=jr(_,g,m,jc[u]??13421772);if(l.push(f),p%3===0){const M=re(_,g,(ye(p,u,2)-.5)*2.4,(ye(u,p,6)-.5)*2.4),E=Math.hypot(M.x,M.y,M.z)||1,y=Math.acos(Math.min(1,Math.max(-1,M.y/E))),A=Math.atan2(M.x,M.z);Zr(y,A,2)||l.push(jr(y,A,m*.62,jc[u]??13421772))}}u===0?i.push(...h):u===1?r.push(...h):u===2?s.push(...h):u===3?o.push(...h):u===4?a.push(...h):c.push(...h)}ii(n,t,M_(),i,!1,!0),ii(n,t,S_(),r,!1,!0),ii(n,t,y_(),s,!1,!0),ii(n,t,E_(),o,!0,!0),ii(n,t,Qc(),a,!1,!0),ii(n,t,Qc(),c,!1,!0),ii(n,t,T_(),l,!1,!1);for(const u of l)e.push({x:u.x,y:u.y,z:u.z,r:.52*u.s,h:1.05*u.s})}function Jc(n,t){const e=[15887750,4037218,10117856,4114670,14715454,15909198],i=[13916770,3108424,6963888,3053230,12872242,13782672];return ye(n,t,8)>.62?i[n]??16777215:e[n]??16777215}function Zr(n,t,e){if(n<.12||n>2.9)return!0;const i=$e(n,t);return Ol(i.x,i.y,i.z)||$l(i.x,i.y,i.z)?!0:Ea(i.x,i.y,i.z,e)}function jr(n,t,e,i){const r=$e(n,t),s=pi(r.x,r.y,r.z),o=Ee(r.x,r.y,r.z,Math.cos(t),0,-Math.sin(t));return{...s,qx:o.x,qy:o.y,qz:o.z,qw:o.w,s:e,color:i}}function ii(n,t,e,i,r,s){if(i.length===0)return;const o=r?new se({color:16777215}):gs(t);s&&Sa(o);const a=new qi(e,o,i.length);a.frustumCulled=!1;for(let c=0;c<i.length;c+=1){const l=i[c];l&&$i(a,c,l.x,l.y,l.z,l.s,l.s,l.s,l.qx,l.qy,l.qz,l.qw,l.color)}Ki(a),n.add(a)}function M_(){const n=new Ie(.28,.16,5);return n.translate(0,.08,0),n}function S_(){const n=new Ie(.045,.32,4);return n.translate(0,.16,0),n}function y_(){const n=new Qt(.03,.045,.36,4);return n.translate(0,.18,0),n}function E_(){const n=new Ie(.08,.28,4);return n.translate(0,.14,0),n}function Qc(){const n=new Ve(.16,5,4);return n.scale(1.2,.45,1.2),n.translate(0,.07,0),n}function T_(){const n=new xr(.55,0);return n.translate(0,.28,0),n}function b_(n,t){const e=o_();n.add(e);const i=w_(t);n.add(i);const r=[];return P_(n,t,r),jg(n,t,r),C_(n,t,r),L_(n,t,r),v_(n,t,r),q_(n,t,r),{blockers:r,sky:e}}function w_(n){const t=new Ve(Xt,192,112),e=t.toNonIndexed();t.dispose();const i=e.getAttribute("position"),r=new Float32Array(i.count*3),s=new Vt;for(let a=0;a<i.count;a+=1){const c=i.getX(a),l=i.getY(a),u=i.getZ(a),d=pi(c,l,u);i.setXYZ(a,d.x,d.y,d.z),s.setHex(A_(c,l,u)),r[a*3]=s.r,r[a*3+1]=s.g,r[a*3+2]=s.b}i.needsUpdate=!0,e.computeVertexNormals(),e.setAttribute("color",new De(r,3));const o=new ut(e,new ps({color:16777215,vertexColors:!0,gradientMap:n}));return o.frustumCulled=!1,o}function A_(n,t,e){const i=Math.hypot(n,t,e)||1,r=Math.acos(Math.min(1,Math.max(-1,t/i))),s=Math.atan2(n,e),o=Fl(n,t,e),a=Yl(n,t,e),c=Math.max(o,a),l=R_(r,s,a);if(c>.82)return l;const u=Il(n,e),d=we[u]??we[0];let h=tl(d,r,s);if(Math.hypot(n/i,e/i)*Xt>22){const g=Wg(n,t,e);if(g<9){const _=(s+Math.PI)/(Math.PI*2)*we.length,m=_-Math.floor(_),f=we[(m<.5?u+we.length-1:u+1)%we.length]??d,M=g<1.25?1:1-(g-1.25)/7.75;h=hr(h,tl(f,r,s),M*.72),g<1.25&&(h=hr(h,16183266,(1-g/1.25)**2))}}return c>.04&&(h=hr(h,l,c)),h}function tl(n,t,e){const i=Math.sin(e*2.2+t*1.7)*.5+.5;return Math.sin(e*4.6-t*2.4+1.3)*.5+.5>.78?hr(n.ground,n.deep,.42):i>.58?hr(n.ground,n.patch,.62):n.ground}function R_(n,t,e){const i=n*Xt;let r=Math.PI;for(let h=0;h<we.length;h+=1){const p=ya(t,Me(h));p<r&&(r=p)}const s=r*Math.sin(Math.max(.15,n))*Xt,o=1.28,a=i/o,c=s/o,l=a-Math.floor(a),u=c-Math.floor(c);if(l<.07||l>.93||u<.07||u>.93)return 14995632;const d=Math.floor(a)+Math.floor(c)&1;return s<.55?16775402:e>.72&&s>.7?d?16174008:15982032:d?16049868:15193010}function hr(n,t,e){const i=Math.min(1,Math.max(0,e)),r=n>>16&255,s=n>>8&255,o=n&255,a=t>>16&255,c=t>>8&255,l=t&255,u=Math.round(r+(a-r)*i),d=Math.round(s+(c-s)*i),h=Math.round(o+(l-o)*i);return u<<16|d<<8|h}function C_(n,t,e){const i=Me(0),r=.2,s=[],o=[],a=[],c=[],l=[],u=(M,E,y,A,b)=>{const w=re(r,i,E,y),I=pi(w.x,w.y,w.z),v=Ee(w.x,w.y,w.z,Math.cos(i),0,-Math.sin(i));M.push({...I,qx:v.x,qy:v.y,qz:v.z,qw:v.w,s:A,color:b})};for(let M=-15.4;M<=-2.2;M+=1.55){const E=.95+Math.abs(Math.round(M*10))%3*.18;u(s,M,-.72,E,15887750),u(s,M,.72,E*.9,13916770),u(o,M,-.72,E,16183782),u(o,M,.72,E*.9,15196114)}for(let M=-14.2;M<=-3.2;M+=3.3)u(a,M,-1.48,1,13916770),u(a,M,1.48,1,13916770),e.push({...re(r,i,M,-1.48),r:.22,h:2.2}),e.push({...re(r,i,M,1.48),r:.22,h:2.2}),u(c,M,-1.48,1,15887750),u(c,M,1.48,1,16171700),u(l,M,-1.48,1,15769658),u(l,M,1.48,1,15769658);Xe(n,F_(),t,s,!1,!0),Xe(n,O_(),t,o,!1,!1),Xe(n,sa(.07,.1,2.15,5),t,a,!1,!0),Xe(n,U_(),t,c,!1,!0),Xe(n,N_(),t,l,!0,!0);const d=re(r,i,-12.6,0),h=_s(r,i),p=new ut(new Ye(1.55,.16,8,18),_e(t,15769658));p.position.set(d.x,d.y,d.z),p.quaternion.copy(Ee(d.x,d.y,d.z,h.x,h.y,h.z));const g=new N(d.x,d.y,d.z).normalize();p.position.addScaledVector(g,1.55);const _=new ut(new Ve(.22,8,6),new se({color:16773584}));_.position.y=1.52;const m=new ut(el(),_e(t,15769658));m.position.set(-.46,.95,.02);const f=new ut(el(),_e(t,16774890));f.position.set(.46,.88,.02),p.add(_,m,f),n.add(p),e.push({...re(r,i,-12.6,-1.5),r:.38,h:1.7}),e.push({...re(r,i,-12.6,1.5),r:.38,h:1.7})}function P_(n,t,e){const i=_e(t,16052198),r=Xt,s=new ut(new Qt(2.4,3.1,.7,8),i);s.position.y=r+.28;const o=new ut(new Qt(.72,1.05,8.4,8),i);o.position.y=r+4.6;const a=new ut(new Qt(1.25,1.25,1.15,8),new se({color:15769658}));a.position.y=r+9.3;const c=new ut(new Ie(1.7,1.15,8),_e(t,13919562));c.position.y=r+10.4;const l=new ut(new Ye(3.3,.14,6,18),new se({color:15769658}));l.rotation.x=Math.PI/2,l.position.y=r+.12,n.add(s,o,a,c,l),e.push({x:0,y:Xt,z:0,r:3.1,h:11})}function L_(n,t,e){const i=[],r=[],s=[],o=[],a=[],c=[],l=[],u=[],d=[];for(let h=0;h<we.length;h++){const p=we[h];if(!p)continue;const g=D_(h);for(const _ of g){const m=uu(_.colat,_.az);if(Ol(m.x,m.y,m.z)||I_(m.x,m.y,m.z))continue;const f=pi(m.x,m.y,m.z),M=Ee(m.x,m.y,m.z,Math.cos(_.az),0,-Math.sin(_.az)),E={...f,qx:M.x,qy:M.y,qz:M.z,qw:M.w,s:_.scale,color:_.roll>.72?p.deep:p.plant};h===0?_.grove?r.push(E):i.push(E):h===1?(s.push(E),o.push(E)):h===2?a.push(E):h===3?c.push(E):h===4?l.push(E):(u.push(E),d.push({...E,color:16175978}))}}Xe(n,so(1.55,.72,6,.36),t,i,!1,!0),Xe(n,z_(),t,r,!1,!0),Xe(n,sa(.09,.12,2.5,5),t,s,!1,!0),Xe(n,B_(),t,o,!1,!0),Xe(n,so(.72,3.3,5,1.65),t,a,!1,!0),Xe(n,so(.38,3.6,4,1.8),t,c,!0,!0),Xe(n,k_(),t,l,!1,!0),Xe(n,sa(.08,.11,3.3,5),t,u,!1,!0),Xe(n,H_(),t,d,!0,!0),W_(n,t,e)}function D_(n){const t=Me(n),e=[],i=[{n:28,c0:.38,c1:.95,spread:.78},{n:34,c0:1,c1:1.82,spread:.9},{n:24,c0:1.88,c1:2.62,spread:.78}];let r=0;for(const s of i)for(let o=0;o<s.n;o+=1,r+=1)e.push({az:t+(ye(n,r,11)-.5)*s.spread,colat:s.c0+ye(n,r,19)*(s.c1-s.c0),scale:.82+ye(n,r,4)*.7,roll:ye(n,r,8),grove:!1});for(let s=0;s<10;s+=1){const o=t+(ye(n,r,11)-.5)*.2,a=1.22+ye(n,r,19)*.7;r+=1;for(let c=0;c<4;c+=1,r+=1)e.push({az:o+(ye(n,r,3)-.5)*.028,colat:a+(ye(n,r,5)-.5)*.026,scale:(c===0?1.55:1.05)+ye(n,r,4)*.45,roll:ye(n,r,8),grove:!0})}return e}function uu(n,t){const e=Math.sin(n);return{x:e*Math.sin(t)*Xt,y:Math.cos(n)*Xt,z:e*Math.cos(t)*Xt}}function I_(n,t,e){if(Math.abs(t)>Xt*Math.cos(.11)||Ea(n,t,e,6))return!0;for(const a of Ms){const c=n-a.x,l=t-a.y,u=e-a.z;if(c*c+l*l+u*u<64)return!0}const r=n-pe.x,s=t-pe.y,o=e-pe.z;return r*r+s*s+o*o<36}function Xe(n,t,e,i,r,s=!1){if(i.length===0)return;const o=r?new se({color:16777215}):gs(e);s&&Sa(o);const a=new qi(t,o,i.length);a.frustumCulled=!1;for(let c=0;c<i.length;c++){const l=i[c];l&&$i(a,c,l.x,l.y,l.z,l.s,l.s,l.s,l.qx,l.qy,l.qz,l.qw,l.color)}Ki(a),n.add(a)}function U_(){const n=new Qt(.95,.72,.22,7);n.translate(0,1.78,0);const t=new Qt(.64,.5,.18,6);t.translate(.06,2.22,.04);const e=new Qt(.34,.26,.14,5);return e.translate(-.04,2.58,-.03),ys([n,t,e])}function N_(){const n=new Ve(.14,6,5);return n.translate(.18,2.28,.08),n}function F_(){const n=new Ie(.4,.82,5);n.translate(0,.72,0);const t=new Ve(.12,6,5);return t.translate(0,1.12,0),ys([n,t])}function O_(){const n=new Qt(.3,.22,.24,6);return n.translate(0,.12,0),n}function el(){const n=new Kt(.38,.92,.045),t=new Kt(.42,.08,.05);return t.translate(0,-.46,0),ys([n,t])}function z_(){const n=new Qt(.09,.14,1.7,5);n.translate(0,.85,0);const t=new Qt(1.05,.72,.28,6);t.translate(0,1.85,0);const e=new Qt(.7,.5,.22,6);e.translate(.08,2.32,.04);const i=new Qt(.36,.26,.16,5);return i.translate(-.05,2.68,-.02),ys([n,t,e,i])}function ys(n){const t=n.map(a=>a.index?a.toNonIndexed():a);let e=0;for(const a of t)e+=a.getAttribute("position").count;const i=new Float32Array(e*3),r=new Float32Array(e*3);let s=0;for(const a of t){const c=a.getAttribute("position"),l=a.getAttribute("normal");for(let u=0;u<c.count;u+=1){const d=s+u;i[d*3]=c.getX(u),i[d*3+1]=c.getY(u),i[d*3+2]=c.getZ(u),r[d*3]=l.getX(u),r[d*3+1]=l.getY(u),r[d*3+2]=l.getZ(u)}s+=c.count}const o=new He;return o.setAttribute("position",new De(i,3)),o.setAttribute("normal",new De(r,3)),o}function so(n,t,e,i){const r=new Ie(n,t,e);return r.translate(0,i,0),r}function sa(n,t,e,i){const r=new Qt(n,t,e,i);return r.translate(0,e/2,0),r}function B_(){const n=new In(1.15,0);return n.scale(1.25,.22,1.25),n.translate(0,2.7,0),n}function k_(){const n=new Ye(1.25,.16,5,8,Math.PI);return n.translate(0,1.25,0),n}function H_(){const n=new Ve(.42,6,5);return n.translate(0,3.45,0),n}const V_=[1.7,.5,1.05,.7,2.05,.42],G_=[3.2,4.6,4.2,5.2,2.6,5.2];function W_(n,t,e){for(let i=0;i<we.length;i++){const r=we[i];if(!r)continue;const s=Me(i)+.07,a=uu(1.62,s),c=pi(a.x,a.y,a.z),l=Ee(a.x,a.y,a.z,Math.cos(s),0,-Math.sin(s)),u=X_(i,t,r.plant,r.deep);u.position.set(c.x,c.y,c.z),u.quaternion.copy(l),n.add(u),e.push({x:a.x,y:a.y,z:a.z,r:V_[i]??.8,h:G_[i]??4})}}function X_(n,t,e,i){const r=new Dn,s=_e(t,e),o=_e(t,i);if(n===0)for(let a=0;a<3;a++){const c=new ut(new Qt(1.9-a*.42,1.9-a*.42,.38,6),a===1?o:s);c.position.y=.4+a*.7,r.add(c)}else if(n===1){const a=new ut(new Qt(.12,.16,4.2,5),o);a.position.y=2.1;const c=new ut(new In(1.8,0),s);c.scale.set(1.3,.22,1.3),c.position.y=4.5,r.add(a,c)}else if(n===2)for(let a=0;a<3;a++){const c=new ut(new Ie(.7,2.2,5),a===2?o:s);c.position.set(Math.cos(a*2.1)*.45,1.2+a*1.15,Math.sin(a*2.1)*.45),r.add(c)}else if(n===3){const a=new ut(new Ie(.55,5.6,4),new se({color:e}));a.position.y=2.8;const c=new ut(new Ie(.35,3.1,4),new se({color:i}));c.position.set(.7,1.5,.2),c.rotation.z=.25,r.add(a,c)}else if(n===4){const a=new ut(new Ye(2.3,.22,5,10,Math.PI),s);a.position.y=2.3,r.add(a)}else{const a=new ut(new Qt(.1,.14,4.8,5),s);a.position.y=2.4;const c=new ut(new Ve(.62,8,6),new se({color:16175978}));c.position.y=5.1,r.add(a,c)}return r}function q_(n,t,e){for(const l of S0){e.push({x:l.x,y:l.y,z:l.z,r:.62,h:2.55});const u=Ee(l.x,l.y,l.z,0,1,0),d=new ut(new Kt(.55,2.3,1.7),_e(t,13662789));d.position.set(l.x,l.y,l.z),d.quaternion.copy(u);const h=d.position.clone().normalize();d.position.addScaledVector(h,1.15),n.add(d)}const i=new qi(new Ie(.34,.95,4),new se({color:15769658}),on.length);i.frustumCulled=!1;for(let l=0;l<on.length;l++){const u=on[l],d=on[l+1]??u;if(!u||!d)continue;const h=qg(d.x-u.x,d.y-u.y,d.z-u.z,u.x,u.y,u.z),p=Math.hypot(u.x,u.y,u.z)||1;$i(i,l,u.x+u.x/p*.35,u.y+u.y/p*.35,u.z+u.z/p*.35,1,1,1,h.x,h.y,h.z,h.w,15769658)}Ki(i),n.add(i);const r=Ee(pe.x,pe.y,pe.z,1,0,0),s=new ut(new Qt(pe.r,pe.r,.08,18),new se({color:2013384})),o=new N(pe.x,pe.y,pe.z).normalize();s.position.copy(o).multiplyScalar(Xt+.05),s.quaternion.copy(r);const a=new ut(new Qt(.07,.09,2.1,6),new se({color:2013384}));a.position.copy(o).multiplyScalar(Xt+1.05),a.quaternion.copy(r);const c=new ut(new Kt(.62,.32,.05),new se({color:16250092}));c.position.copy(o).multiplyScalar(Xt+1.9),c.quaternion.copy(r),n.add(s,a,c)}const hu=document.querySelector("#view"),or=document.querySelector("#hud");if(!hu||!or)throw new Error("Markup mancante.");try{Y_(hu,or)}catch(n){or.style.pointerEvents="auto",or.style.padding="24px",or.textContent=n instanceof Error?n.message:"Impossibile avviare Minimondo."}function Y_(n,t){const e=T0();let i=!1,r=()=>{};const s=Gg(),o=a_(n),a=b_(o.scene,s),c=m_(t,e,{onInteract:()=>{i=!0},onStartDemo:E=>r(E)}),l=$0(n,t),u=r_(o.scene,s,l),d=R0(o.scene,s),h=G0(o.scene),p=N0(o.scene,s,e,c,u);r=E=>p.start(E);let g=!1,_=performance.now();const m=window.matchMedia("(prefers-reduced-motion: reduce)").matches,f=E=>{const y=Math.min(.05,(E-_)/1e3);_=E;const A=c.blocksPlay();if(m||(Dl.value=E/1e3),u.update(y,a.blockers,A),p.locksWorld())p.update(y,u),c.setPrompt(null);else{if(!e.courseClear){const v=u.x-pe.x,x=u.y-pe.y,L=u.z-pe.z;v*v+x*x+L*L<=pe.r*pe.r&&(e.courseClear=!0,g||(g=!0,c.toast("Percorso fatto. Il cancello ora paga.")))}const I=!A&&(u.consumeInteract()||i);i=!1,h.update(E/1e3,u,e,c),d.update(E/1e3,u,I,e,c)}const b=u.aim();c.paintMap(u.x,u.y,u.z,b.x,b.y,b.z),u.syncCamera(o.camera,y),a.sky.position.copy(o.camera.position),o.render(),(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(n.dataset.px=u.x.toFixed(2),n.dataset.py=u.y.toFixed(2),n.dataset.pz=u.z.toFixed(2),n.dataset.yaw=l.yaw.toFixed(3),n.dataset.gait=u.gait,n.dataset.feet=u.radius.toFixed(3),n.dataset.hx=b.x.toFixed(3),n.dataset.hy=b.y.toFixed(3),n.dataset.hz=b.z.toFixed(3)),requestAnimationFrame(f)},M=()=>o.resize();o.resize(),window.addEventListener("resize",M),window.visualViewport?.addEventListener("resize",M),requestAnimationFrame(f)}
